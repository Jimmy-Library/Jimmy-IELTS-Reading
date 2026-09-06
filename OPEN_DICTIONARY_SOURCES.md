# 单词本开放数据来源

Jimmy IELTS Reading 的内置单词本采用本地优先设计：断网时读取随网页一起发布的 ECDICT 词库；联网时只按用户主动查询的词或句子请求补充信息。

| 来源 | 用途 | 许可 / 使用说明 |
| --- | --- | --- |
| [ECDICT](https://github.com/skywind3000/ECDICT) | 本地中英释义、音标与英英释义 | MIT；项目内保留原许可文件 |
| [Free Dictionary API](https://dictionaryapi.dev/) | 英英释义、例句、音标、词典发音与部分同反义词 | 免费开源 API 项目（GPL-3.0） |
| [Datamuse](https://www.datamuse.com/api/) / WordNet | 常见同义词、反义词和词语搭配补充 | 免费公开 API；界面内标注来源 |
| [MyMemory](https://mymemory.translated.net/doc/) | 用户主动划选整句时的中文翻译 | 免费翻译记忆库；查询结果缓存在当前设备 |

发音会优先播放词典提供的英式音频。没有可用音频或处于离线状态时，系统调用浏览器 / 操作系统的 en-GB 英式语音，并优先选择自然度较高的英式语音。

单词本词条、用户编辑内容和查询缓存仅保存在浏览器本地存储中，不会上传到 Jimmy IELTS Reading 项目服务器。
