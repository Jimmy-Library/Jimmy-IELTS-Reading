#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 ~/Desktop/套题解析_生成/<examId>.json (ReadingExplanationV2) 导入到 app。

用法:
  python3 tools/import-v2-explanations.py p1-low-48 p1-high-27 ...   # 指定篇目
  python3 tools/import-v2-explanations.py --all                      # 导入目录下所有 json

做三件事:
  1) 校验 JSON 结构（schemaVersion / items / answer 与考试 answerKey 一致 / locating.quote 能在原文找到）
  2) 写 assets/generated/reading-explanations/<examId>.js（registerReadingExplanationData 包装）
  3) 更新该目录 manifest.js 的条目
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXAM_DIR = os.path.join(ROOT, "assets", "generated", "reading-exams")
EXP_DIR = os.path.join(ROOT, "assets", "generated", "reading-explanations")
SRC_DIR = os.path.expanduser("~/Desktop/套题解析_生成")
ALLOW_PARTIAL = "--allow-partial" in sys.argv


def load_exam(exam_id):
    """从考试 js 里取出 passage html / answerKey / questionDisplayMap（纯正则+slicing，无需 node）。"""
    path = os.path.join(EXAM_DIR, exam_id + ".js")
    if not os.path.exists(path):
        return None
    src = open(path, encoding="utf-8").read()
    start = src.index("{", src.index('register("%s"' % exam_id))
    decoder = json.JSONDecoder()
    try:
        obj, _ = decoder.raw_decode(src[start:])
    except ValueError:
        # 个别题库 js 有尾随逗号（JS 合法、JSON 非法）→ 宽容一点，去掉后重试
        cleaned = re.sub(r",(\s*[}\]])", r"\1", src[start:])
        obj, _ = decoder.raw_decode(cleaned)
    html = "\n".join((b.get("html") or b.get("bodyHtml") or "") for b in (obj.get("passage") or {}).get("blocks", []))
    plain = re.sub(r"<[^>]+>", " ", html)
    plain = plain.replace("&nbsp;", " ").replace("&amp;", "&").replace("&#39;", "'")
    plain = plain.replace("&rsquo;", "'").replace("&ldquo;", '"').replace("&rdquo;", '"')
    plain = plain.replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"')
    plain = loose_punctuation(re.sub(r"\s+", " ", plain))
    return {"obj": obj, "plain": plain}


# 标点前后的空格在「去标签纯文本」与「DOM 拼接文本」之间不一致（"Life , by" vs "Life, by"），
# 比较时统一忽略，避免把等价的引文判成不匹配。
_PUNCT_BEFORE = ",.;:!?)]}\u00bb\u201d\u2019"
_PUNCT_AFTER = "([{\u00ab\u201c\u2018"


def loose_punctuation(text):
    text = str(text or "")
    out = []
    for i, ch in enumerate(text):
        nxt = text[i + 1] if i + 1 < len(text) else ""
        if ch == " " and ((out and out[-1] in _PUNCT_AFTER) or nxt in _PUNCT_BEFORE):
            continue
        out.append(ch)
    return "".join(out)


def normalize(text):
    text = str(text or "")
    text = text.replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"')
    return loose_punctuation(re.sub(r"\s+", " ", text).strip())


def normalize_range(value):
    if isinstance(value, dict) and value.get("start") is not None and value.get("end") is not None:
        return {"start": int(value["start"]), "end": int(value["end"])}
    nums = re.findall(r"\d+", str(value or ""))
    if len(nums) >= 2:
        return {"start": int(nums[0]), "end": int(nums[1])}
    if len(nums) == 1:
        return {"start": int(nums[0]), "end": int(nums[0])}
    return value


def _norm_answer(value):
    text = str(value if value is not None else "").strip().lower()
    text = text.replace("\u2019", "'").replace("\u2018", "'")
    return re.sub(r"\s+", " ", text)


def answer_matches(item_answer, key_answer):
    """解析里的答案与题库答案是否等价：兼容数组、大小写、True/False/Not Given、逗号连接。"""
    keys = key_answer if isinstance(key_answer, list) else [key_answer]
    keys = [_norm_answer(k) for k in keys if _norm_answer(k)]
    if not keys:
        return True
    got = item_answer if isinstance(item_answer, list) else [item_answer]
    for value in got:
        text = _norm_answer(value)
        if not text:
            continue
        if text in keys:
            return True
        parts = [p.strip() for p in text.split(",") if p.strip()]
        if parts and all(p in keys for p in parts):
            return True
    return False


def check(exam_id, payload):
    problems = []
    exam = load_exam(exam_id)
    if not exam:
        return ["考试文件不存在: %s" % exam_id], None
    if payload.get("schemaVersion") != "ReadingExplanationV2":
        problems.append("schemaVersion 不是 ReadingExplanationV2")
    if payload.get("examId") != exam_id:
        problems.append("examId 不匹配: %s" % payload.get("examId"))
    answer_key = exam["obj"].get("answerKey") or {}
    display = exam["obj"].get("questionDisplayMap") or {}
    order = exam["obj"].get("questionOrder") or []
    items = []
    for section in payload.get("questionExplanations") or []:
        for item in section.get("items") or []:
            items.append(item)
    seen = set()
    for item in items:
        qid = str(item.get("questionId") or "")
        if not qid:
            problems.append("有 item 缺 questionId")
            continue
        if qid in seen:
            problems.append("重复题号: %s" % qid)
        seen.add(qid)
        if qid not in answer_key:
            problems.append("题号不在 answerKey: %s" % qid)
        elif not answer_matches(item.get("answer"), answer_key[qid]):
            problems.append("答案与 answerKey 不一致 %s: 解析=%r 题库=%r"
                            % (qid, item.get("answer"), answer_key[qid]))
        want_num = display.get(qid)
        if want_num is not None and str(item.get("questionNumber")) != str(want_num):
            problems.append("显示题号不一致 %s: 解析=%r 应为 %r" % (qid, item.get("questionNumber"), want_num))
        for field in ("stem", "translation", "analysis", "locatingTip"):
            if "\u2192" in str(item.get(field) or "") or "->" in str(item.get(field) or ""):
                problems.append("出现箭头符号 %s.%s" % (qid, field))
        quote = normalize((item.get("locating") or {}).get("quote"))
        if not quote:
            problems.append("缺 locating.quote: %s" % qid)
        elif quote not in exam["plain"]:
            problems.append("定位句无法在原文匹配: %s | %s" % (qid, quote[:60]))
    missing = [q for q in order if q not in seen]
    if missing:
        if ALLOW_PARTIAL:
            print("  (测试模式) 缺题未拦: %s" % ", ".join(missing))
        else:
            problems.append("缺题: %s" % ", ".join(missing))
    return problems, exam


def write_explanation(exam_id, payload):
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    text = (
        "(function registerReadingExplanationData(global) {\n"
        "  'use strict';\n"
        "  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== \"function\") {\n"
        "    throw new Error(\"reading_explanation_registry_missing\");\n"
        "  }\n"
        "  global.__READING_EXPLANATION_DATA__.register(\"%s\", %s);\n"
        "})(typeof window !== \"undefined\" ? window : globalThis);\n" % (exam_id, body)
    )
    out = os.path.join(EXP_DIR, exam_id + ".js")
    with open(out, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(text)
    return out


def update_manifest(entries):
    path = os.path.join(EXP_DIR, "manifest.js")
    src = open(path, encoding="utf-8", newline="").read()
    anchor = src.index("{", src.index("__READING_EXPLANATION_MANIFEST__"))
    obj, end = json.JSONDecoder().raw_decode(src[anchor:])
    for exam_id, entry in entries.items():
        obj[exam_id] = entry
    head = src[:anchor]
    tail = src[anchor + end:]
    body = json.dumps(obj, ensure_ascii=False, indent=2)
    with open(path, "w", encoding="utf-8", newline="") as fh:
        fh.write(head + body + tail)
    return len(obj)


def main():
    want_all = "--all" in sys.argv[1:]
    check_only = "--check" in sys.argv[1:]
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args and not want_all:
        print("用法: import-v2-explanations.py <examId...> | --all [--check]")
        return 1
    ids = args
    if want_all:
        ids = sorted(f[:-5] for f in os.listdir(SRC_DIR) if f.endswith(".json") and not f.startswith("_"))
    ok, bad = [], {}
    entries = {}
    for exam_id in ids:
        src = os.path.join(SRC_DIR, exam_id + ".json")
        if not os.path.exists(src):
            bad[exam_id] = ["源 JSON 不存在"]; continue
        payload = json.load(open(src, encoding="utf-8"))
        for section in payload.get("questionExplanations") or []:
            section["questionRange"] = normalize_range(section.get("questionRange"))
            if section.get("mode") in ("questions", "per-question", "perQuestion", None):
                section["mode"] = "per_question"
        problems, exam = check(exam_id, payload)
        if problems:
            bad[exam_id] = problems; continue
        if check_only:
            ok.append((exam_id, "校验通过（未写入）")); continue
        out = write_explanation(exam_id, payload)
        title = ((payload.get("meta") or {}).get("title")
                 or (exam["obj"].get("meta") or {}).get("title") or exam_id)
        entries[exam_id] = {
            "examId": exam_id,
            "dataKey": exam_id,
            "script": "../reading-explanations/%s.js" % exam_id,
            "title": title,
        }
        ok.append((exam_id, out))
    if entries:
        total = update_manifest(entries)
        print("manifest 现有条目: %d" % total)
    print("\n成功导入 %d 篇:" % len(ok))
    for exam_id, out in ok:
        print("   %-18s -> %s" % (exam_id, out))
    if bad:
        print("\n需修正 %d 篇:" % len(bad))
        for exam_id, problems in bad.items():
            print("   %s:" % exam_id)
            for p in problems[:8]:
                print("      -", p)
    return 0 if not bad else 2


if __name__ == "__main__":
    sys.exit(main())
