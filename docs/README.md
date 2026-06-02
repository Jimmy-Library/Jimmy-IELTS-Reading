# IELTS 机考练习系统 · 文档与工具

> 内部部署版 · Developed by **Jimmy**
> 本文件夹收录全部维护与扩展材料,所有示例代码使用占位内容,**未引用任何真实考试文本**。

## 目录

| 文档 | 内容 |
| ---- | ---- |
| [01-维护教程.md](01-维护教程.md) | 项目结构、日常维护、备份、缓存、故障排除 |
| [02-题型设计代码.md](02-题型设计代码.md) | 11 种阅读题型的 schema / HTML 模板 / 渲染采集 / 评分规则 |
| [03-导入新题型流程.md](03-导入新题型流程.md) | 三类导入流程:已有题型 / 全新题型 / 编辑器一键生成 |
| [04-同题型不同操作逻辑.md](04-同题型不同操作逻辑.md) | 同一 kind 下三种 DOM 写法的差异、兼容性边界与坑 |
| [tools/reading-editor.html](tools/reading-editor.html) | 浏览器端自定义阅读编辑器,支持 11 种题型 + 实时预览 + 多格式导出 |

## 推荐阅读顺序

1. **第一次接手系统** → [01-维护教程.md](01-维护教程.md) 通读一遍
2. **要新增题目** → [03-导入新题型流程.md](03-导入新题型流程.md) 选择对应路径
3. **从 0 创建题目** → [tools/reading-editor.html](tools/reading-editor.html) 编辑器内交互完成
4. **想新增题型** → [02-题型设计代码.md](02-题型设计代码.md) 找出最接近的 kind,然后看 [04-同题型不同操作逻辑.md](04-同题型不同操作逻辑.md) 确认是否需要新建 kind
5. **遇到题目显示异常** → [04-同题型不同操作逻辑.md](04-同题型不同操作逻辑.md) 对照"已知差异表"

## 关键名词速查

| 术语 | 含义 |
| ---- | ---- |
| `ReadingExamSourceV1` | 阅读题数据 schema 版本号,位于 [assets/generated/reading-exams/*.js](../assets/generated/reading-exams) |
| `manifest.js` | 阅读题目索引表,启动时全量加载,定位每篇题目的 dataKey 和 script |
| `kind` | 题型枚举字符串(`single_choice` / `matching` 等共 11 种) |
| `bodyHtml` | 题组内嵌的 HTML 片段,直接渲染到练习页面 |
| `data-question` | 答题控件用以标识所属题号的核心 DOM 属性 |
| `answerKey` | 题号 → 正确答案的映射(字符串、字母、字母数组、词列表) |
| `AnswerMatchCore` | 答案归一化与比对核心,见 [js/utils/answerMatchCore.js](../js/utils/answerMatchCore.js) |
| `unifiedReadingPage` | 统一阅读练习渲染入口,见 [js/runtime/unifiedReadingPage.js](../js/runtime/unifiedReadingPage.js) |

## 联系方式

部署、维护与功能扩展问题:**Jimmy**(内部联系方式请询贵司管理员)。
