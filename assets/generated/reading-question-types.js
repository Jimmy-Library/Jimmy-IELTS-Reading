/**
 * 阅读题型分类数据（自动生成，请勿手动编辑）
 * 数据来源：
 *   1. 题型分类目录表.xlsx —— 人工分类的 130 篇（权威）
 *   2. 其余文章：从题目数据的题目指令自动归类（已用 Excel 130 篇交叉验证，整体一致率约 93%）
 * 结构：window.__READING_QUESTION_TYPES__ = { types:[{key,cn,en}], byExamId:{ examId:[typeKey...] } }
 */
(function (global) {
  'use strict';
  global.__READING_QUESTION_TYPES__ = {
  "generatedAt": "2026-07-07",
  "source": "题型分类目录表.xlsx + 题目数据自动归类",
  "types": [
    {
      "key": "mc",
      "cn": "单选/多选",
      "en": "Multiple Choice"
    },
    {
      "key": "tfng",
      "cn": "判断 TFNG",
      "en": "True / False / Not Given"
    },
    {
      "key": "ynng",
      "cn": "观点 YNNG",
      "en": "Yes / No / Not Given"
    },
    {
      "key": "matching-info",
      "cn": "段落信息匹配",
      "en": "Matching Information"
    },
    {
      "key": "matching-headings",
      "cn": "标题匹配",
      "en": "Matching Headings"
    },
    {
      "key": "matching-features",
      "cn": "特征匹配",
      "en": "Matching Features"
    },
    {
      "key": "matching-endings",
      "cn": "句子结尾匹配",
      "en": "Matching Sentence Endings"
    },
    {
      "key": "sentence",
      "cn": "句子填空",
      "en": "Sentence Completion"
    },
    {
      "key": "summary-list",
      "cn": "摘要填空(有选项)",
      "en": "Summary (word list)"
    },
    {
      "key": "summary-passage",
      "cn": "摘要填空(无选项)",
      "en": "Summary (from passage)"
    },
    {
      "key": "note",
      "cn": "笔记填空",
      "en": "Note Completion"
    },
    {
      "key": "table",
      "cn": "表格填空",
      "en": "Table Completion"
    },
    {
      "key": "flowchart",
      "cn": "流程图填空",
      "en": "Flowchart Completion"
    },
    {
      "key": "diagram",
      "cn": "图表标注",
      "en": "Diagram Label Completion"
    },
    {
      "key": "short-answer",
      "cn": "简答",
      "en": "Short-answer Questions"
    }
  ],
  "byExamId": {
    "p1-high-01": [
      "matching-headings",
      "matching-features"
    ],
    "p1-high-05": [
      "tfng",
      "note"
    ],
    "p1-high-101": [
      "ynng",
      "sentence"
    ],
    "p1-high-105": [
      "tfng",
      "note"
    ],
    "p1-high-110": [
      "tfng",
      "matching-info",
      "summary-list"
    ],
    "p1-high-118": [
      "mc",
      "tfng",
      "matching-headings"
    ],
    "p1-high-171": [
      "tfng",
      "note"
    ],
    "p1-high-194": [
      "tfng",
      "note"
    ],
    "p1-high-200": [
      "tfng",
      "note"
    ],
    "p1-high-211": [
      "tfng",
      "note",
      "flowchart"
    ],
    "p1-high-216": [
      "tfng",
      "note"
    ],
    "p1-high-227": [
      "tfng",
      "note"
    ],
    "p1-high-229": [
      "tfng",
      "table"
    ],
    "p1-high-230": [
      "tfng",
      "note",
      "flowchart"
    ],
    "p1-high-231": [
      "tfng",
      "note",
      "flowchart"
    ],
    "p1-high-24": [
      "tfng",
      "summary-passage"
    ],
    "p1-high-27": [
      "tfng",
      "summary-passage"
    ],
    "p1-high-31": [
      "tfng",
      "note"
    ],
    "p1-high-79": [
      "tfng",
      "note"
    ],
    "p1-high-82": [
      "tfng",
      "note"
    ],
    "p1-high-90": [
      "tfng",
      "sentence"
    ],
    "p1-high-92": [
      "tfng",
      "note"
    ],
    "p1-low-02": [
      "tfng",
      "matching-info"
    ],
    "p1-low-106": [
      "tfng",
      "note"
    ],
    "p1-low-107": [
      "tfng",
      "note"
    ],
    "p1-low-108": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p1-low-109": [
      "tfng",
      "table"
    ],
    "p1-low-11": [
      "mc",
      "matching-features",
      "short-answer"
    ],
    "p1-low-111": [
      "tfng",
      "table"
    ],
    "p1-low-112": [
      "tfng",
      "note"
    ],
    "p1-low-113": [
      "tfng",
      "short-answer"
    ],
    "p1-low-114": [
      "tfng",
      "note"
    ],
    "p1-low-116": [
      "tfng"
    ],
    "p1-low-127": [
      "tfng",
      "matching-features",
      "flowchart"
    ],
    "p1-low-13": [
      "tfng",
      "flowchart"
    ],
    "p1-low-138": [
      "tfng",
      "note"
    ],
    "p1-low-149": [
      "tfng",
      "short-answer"
    ],
    "p1-low-160": [
      "tfng",
      "note"
    ],
    "p1-low-223": [
      "tfng",
      "flowchart"
    ],
    "p1-low-30": [
      "tfng",
      "note"
    ],
    "p1-low-34": [
      "tfng",
      "table",
      "short-answer"
    ],
    "p1-low-35": [
      "mc",
      "tfng",
      "matching-features"
    ],
    "p1-low-40": [
      "tfng",
      "note"
    ],
    "p1-low-45": [
      "tfng",
      "note"
    ],
    "p1-low-46": [
      "tfng",
      "note"
    ],
    "p1-low-47": [
      "tfng",
      "note"
    ],
    "p1-low-48": [
      "tfng",
      "table"
    ],
    "p1-low-52": [
      "tfng",
      "note"
    ],
    "p1-low-53": [
      "tfng",
      "note",
      "flowchart"
    ],
    "p1-low-61": [
      "tfng",
      "note"
    ],
    "p1-low-67": [
      "mc",
      "tfng",
      "matching-info"
    ],
    "p1-low-68": [
      "tfng",
      "note"
    ],
    "p1-low-69": [
      "tfng",
      "note"
    ],
    "p1-low-70": [
      "tfng",
      "note"
    ],
    "p1-low-72": [
      "tfng",
      "note"
    ],
    "p1-low-80": [
      "tfng",
      "note"
    ],
    "p1-low-81": [
      "tfng",
      "note",
      "flowchart"
    ],
    "p1-low-84": [
      "tfng",
      "note"
    ],
    "p1-low-99": [
      "tfng",
      "note"
    ],
    "p1-medium-115": [
      "tfng",
      "note"
    ],
    "p1-medium-117": [
      "tfng",
      "note"
    ],
    "p1-medium-119": [
      "tfng",
      "short-answer"
    ],
    "p1-medium-161": [
      "tfng",
      "note"
    ],
    "p1-medium-182": [
      "mc",
      "tfng",
      "matching-info"
    ],
    "p1-medium-20": [
      "tfng",
      "table"
    ],
    "p1-medium-29": [
      "tfng",
      "note"
    ],
    "p1-medium-33": [
      "tfng",
      "note"
    ],
    "p1-medium-57": [
      "mc",
      "matching-info",
      "sentence"
    ],
    "p1-medium-60": [
      "tfng",
      "note"
    ],
    "p1-medium-63": [
      "tfng",
      "note"
    ],
    "p2-high-09": [
      "mc",
      "matching-features"
    ],
    "p2-high-120": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-123": [
      "mc",
      "matching-headings",
      "sentence"
    ],
    "p2-high-124": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-128": [
      "matching-info",
      "matching-features",
      "sentence"
    ],
    "p2-high-130": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-131": [
      "mc",
      "matching-info",
      "summary-passage"
    ],
    "p2-high-133": [
      "mc",
      "matching-info",
      "summary-passage"
    ],
    "p2-high-134": [
      "tfng",
      "summary-passage",
      "diagram"
    ],
    "p2-high-136": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-137": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-139": [
      "tfng",
      "matching-info",
      "summary-passage"
    ],
    "p2-high-14": [
      "mc",
      "matching-headings",
      "summary-passage"
    ],
    "p2-high-141": [
      "mc",
      "matching-info",
      "matching-features"
    ],
    "p2-high-145": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-16": [
      "mc",
      "matching-headings",
      "summary-passage"
    ],
    "p2-high-17": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-19": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-192": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-201": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-21": [
      "mc",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-225": [
      "mc",
      "matching-info",
      "sentence"
    ],
    "p2-high-23": [
      "matching-info",
      "matching-features",
      "sentence"
    ],
    "p2-high-232": [
      "mc",
      "matching-headings",
      "summary-passage"
    ],
    "p2-high-233": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-234": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-235": [
      "matching-info",
      "matching-features",
      "sentence"
    ],
    "p2-high-236": [
      "mc",
      "tfng",
      "matching-info"
    ],
    "p2-high-239": [
      "mc",
      "matching-info",
      "summary-passage"
    ],
    "p2-high-25": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-high-91": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-051": [
      "matching-info",
      "matching-features",
      "sentence"
    ],
    "p2-low-06": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-08": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-102": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-103": [
      "matching-headings",
      "sentence"
    ],
    "p2-low-104": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-122": [
      "mc",
      "matching-info",
      "sentence"
    ],
    "p2-low-125": [
      "matching-info",
      "matching-features",
      "sentence"
    ],
    "p2-low-132": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-135": [
      "matching-headings",
      "matching-features",
      "sentence"
    ],
    "p2-low-140": [
      "matching-info",
      "matching-features",
      "sentence"
    ],
    "p2-low-142": [
      "mc",
      "matching-headings",
      "summary-passage"
    ],
    "p2-low-143": [
      "mc",
      "matching-info",
      "sentence"
    ],
    "p2-low-147": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-148": [
      "mc",
      "matching-info",
      "summary-passage"
    ],
    "p2-low-222": [
      "tfng",
      "matching-info",
      "matching-features"
    ],
    "p2-low-37": [
      "mc",
      "matching-info",
      "sentence"
    ],
    "p2-low-39": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-41": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-49": [
      "mc",
      "matching-headings",
      "summary-passage"
    ],
    "p2-low-50": [
      "mc",
      "matching-info",
      "sentence"
    ],
    "p2-low-51": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-62": [
      "matching-info",
      "matching-features",
      "sentence"
    ],
    "p2-low-64": [
      "mc",
      "tfng",
      "flowchart"
    ],
    "p2-low-65": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-73": [
      "matching-info",
      "matching-features",
      "sentence"
    ],
    "p2-low-75": [
      "matching-headings",
      "sentence"
    ],
    "p2-low-77": [
      "matching-features",
      "summary-passage"
    ],
    "p2-low-87": [
      "matching-headings",
      "matching-features",
      "sentence"
    ],
    "p2-low-94": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-low-96": [
      "mc",
      "matching-info",
      "sentence"
    ],
    "p2-medium-058": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-medium-10": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-medium-121": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-medium-126": [
      "tfng",
      "matching-info"
    ],
    "p2-medium-129": [
      "matching-headings",
      "matching-features"
    ],
    "p2-medium-144": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-medium-146": [
      "mc",
      "matching-features",
      "summary-passage"
    ],
    "p2-medium-209": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p2-medium-213": [
      "mc",
      "matching-info",
      "sentence"
    ],
    "p2-medium-217": [
      "matching-info",
      "matching-features",
      "sentence"
    ],
    "p2-medium-58": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p2-medium-86": [
      "mc",
      "matching-headings",
      "summary-passage"
    ],
    "p2-medium-93": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p3-high-03": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-04": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-15": [
      "mc",
      "ynng",
      "matching-info",
      "summary-passage"
    ],
    "p3-high-150": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-156": [
      "mc",
      "summary-passage",
      "diagram"
    ],
    "p3-high-157": [
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p3-high-159": [
      "mc",
      "tfng",
      "ynng",
      "matching-endings"
    ],
    "p3-high-161": [
      "matching-info",
      "matching-features",
      "short-answer"
    ],
    "p3-high-164": [
      "mc",
      "summary-list"
    ],
    "p3-high-167": [
      "mc",
      "matching-headings",
      "summary-passage"
    ],
    "p3-high-170": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-high-173": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-174": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-178": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-high-180": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-high-181": [
      "matching-info",
      "summary-passage"
    ],
    "p3-high-184": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-189": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-192": [
      "mc",
      "tfng",
      "matching-features",
      "summary-passage"
    ],
    "p3-high-204": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-high-206": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-high-212": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-high-218": [
      "tfng",
      "matching-features",
      "summary-passage"
    ],
    "p3-high-221": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-228": [
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p3-high-229": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-32": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-high-89": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-low-07": [
      "tfng",
      "matching-info",
      "short-answer"
    ],
    "p3-low-078": [
      "tfng",
      "summary-passage"
    ],
    "p3-low-100": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-low-12": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-low-151": [
      "mc",
      "matching-info",
      "summary-list"
    ],
    "p3-low-153": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-low-158": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-low-163": [
      "ynng",
      "matching-headings",
      "sentence"
    ],
    "p3-low-165": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-low-166": [
      "mc",
      "ynng",
      "summary-passage"
    ],
    "p3-low-172": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-low-175": [
      "ynng",
      "matching-headings",
      "diagram"
    ],
    "p3-low-186": [
      "mc",
      "summary-passage",
      "table"
    ],
    "p3-low-187": [
      "mc",
      "matching-features",
      "note"
    ],
    "p3-low-190": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-low-198": [
      "ynng",
      "matching-info",
      "matching-features"
    ],
    "p3-low-219": [
      "mc",
      "matching-endings"
    ],
    "p3-low-28": [
      "mc",
      "matching-headings",
      "matching-features"
    ],
    "p3-low-36": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-low-38": [
      "matching-info",
      "matching-features",
      "summary-list"
    ],
    "p3-low-42": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-low-43": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-low-44": [
      "ynng",
      "summary-passage",
      "note"
    ],
    "p3-low-54": [
      "matching-info",
      "table",
      "diagram"
    ],
    "p3-low-55": [
      "mc",
      "matching-features",
      "summary-list"
    ],
    "p3-low-56": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-low-59": [
      "mc",
      "ynng",
      "matching-info"
    ],
    "p3-low-71": [
      "mc",
      "matching-info",
      "matching-features"
    ],
    "p3-low-74": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-low-76": [
      "tfng",
      "matching-info"
    ],
    "p3-low-78": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-low-83": [
      "tfng",
      "matching-features",
      "summary-passage"
    ],
    "p3-low-85": [
      "mc",
      "ynng",
      "matching-endings"
    ],
    "p3-low-88": [
      "mc",
      "matching-info",
      "matching-features",
      "summary-passage"
    ],
    "p3-low-95": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-low-97": [
      "mc",
      "matching-headings",
      "matching-features"
    ],
    "p3-low-98": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-low-999": [
      "mc",
      "matching-info",
      "matching-endings"
    ],
    "p3-medium-152": [
      "mc",
      "tfng",
      "summary-list"
    ],
    "p3-medium-154": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-medium-155": [
      "matching-info",
      "matching-features"
    ],
    "p3-medium-162": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-medium-168": [
      "ynng",
      "matching-info",
      "flowchart"
    ],
    "p3-medium-169": [
      "mc",
      "matching-headings",
      "matching-features"
    ],
    "p3-medium-176": [
      "mc",
      "matching-features",
      "summary-passage"
    ],
    "p3-medium-177": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-medium-179": [
      "mc",
      "tfng",
      "matching-info"
    ],
    "p3-medium-18": [
      "mc",
      "matching-info",
      "matching-features"
    ],
    "p3-medium-183": [
      "mc",
      "matching-features",
      "summary-passage"
    ],
    "p3-medium-185": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-medium-188": [
      "mc",
      "tfng",
      "summary-list"
    ],
    "p3-medium-191": [
      "mc",
      "tfng",
      "matching-features"
    ],
    "p3-medium-197": [
      "mc",
      "ynng",
      "summary-list"
    ],
    "p3-medium-22": [
      "mc",
      "matching-headings",
      "matching-features",
      "summary-passage"
    ],
    "p3-medium-66": [
      "tfng",
      "note"
    ]
  }
};
})(typeof window !== 'undefined' ? window : this);
