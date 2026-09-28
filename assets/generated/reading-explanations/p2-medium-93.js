(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-medium-93", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-medium-93",
  "meta": {
    "examId": "p2-medium-93",
    "title": "Antarctic research 南极考察",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–17 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 17
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "details of some equipment used by the scientists",
          "translation": "科学家所使用的某些设备的细节",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "By using deep-sea trawl nets, high-definition cameras and water samplers, the team has revealed that many of the creatures that live at extreme depths have a bizarre appearance."
          },
          "synonyms": [
            "“some equipment” 同义替换为原文的 “deep-sea trawl nets, high-definition cameras and water samplers”，三样东西都是科考用的器械（深海拖网、高清摄像机、采水器）",
            "“details of” 同义替换为原文对这三样器械的具体列举，原文把设备名称逐一写出，正是题干所说的 “details”",
            "“used by the scientists” 同义替换为原文的 “the team has revealed”，the team 即前文组成的科学家团队"
          ],
          "locatingTip": "定位：段落信息匹配题不看顺序，只看关键词落在哪一段。题干的关键词是 equipment（设备），但 equipment 一词在原文只出现在 B 段（“high-tech equipment”，指船上军官使用的高技术设备，与科学家的科研器械无关），无法靠原词定位，必须靠 “具体设备名称” 来钓：deep-sea trawl nets（深海拖网）、high-definition cameras（高清摄像机）、water samplers（采水器）。扫读各段首句，只有 D 段开头一口气列出三件器械，其余段落都没有出现任何具体的科研设备名称。确定答案技巧：锁定 D 段后再回读首句，句首 “By using…” 是典型的 “使用某设备” 结构，宾语都是工具名词，与题干的 equipment 完全对应，故选 D。",
          "analysis": "D 段首句：“By using deep-sea trawl nets, high-definition cameras and water samplers, the team has revealed that many of the creatures that live at extreme depths have a bizarre appearance.”（借助深海拖网、高清摄像机和采水器，团队发现在极深处生活的许多生物外形怪异）。句中 deep-sea trawl nets、high-definition cameras、water samplers 正是题干 equipment 所指的三种科考设备，而 By using… 这个结构又点明了这些设备是被科学家拿来使用的。原文用设备名称把答案所在的段落唯一地标出：A 段讲航程与人员构成，B 段讲航行风险（段中的 “high-tech equipment” 指船上军官用的高技术设备，不是科学家的科研器械），C 段讲发现与巨型化，E 段讲船上生活，F 段讲摄影师，都不涉及科研设备，只有 D 段系统交代了深潜取样与拍摄所用的器械，因此答案是 D。",
          "traps": [
            "为什么不是 C：C 段讨论的是 “gigantism（巨型化）”这一现象的原因和海底地貌，虽然也说到 “Analysis of what the expedition found continues”，但通篇没有任何设备的名称，只是研究结论，无法对应题干的 equipment。",
            "为什么不是 E：E 段讲的是船员日常生活（两人合住一间舱室、轮流值班、冷冻罐头食品、厨师的重要作用），属于后勤生活，与科学设备无关。",
            "为什么不是 A：A 段交代的是航程的基本情况和科学团队的构成（动物学家、海洋学家、气象学家等），列出的是人员而非设备，不要因为同属 “准备工作” 就误选。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "a description of the challenging sailing conditions in Antarctica",
          "translation": "对南极充满挑战的航行条件的描述",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "The Tangaroa's captain, Graham Leachman, explains that the Ross Sea is subject to katabatic winds* that sweep down off the Antarctic continent to create rough seas."
          },
          "synonyms": [
            "“challenging sailing conditions” 同义替换为原文的 “rough seas” 与 “katabatic winds”，狂风与汹涌海况正是航行条件严峻的体现",
            "“in Antarctica” 同义替换为原文的 “the Ross Sea” 与 “off the Antarctic continent”，罗斯海属于南极海域",
            "“a description of” 对应原文引用船长 Graham Leachman 的原话说明，属于描述性内容"
          ],
          "locatingTip": "定位：题干关键词是 sailing conditions（航行条件）与 challenging（艰难）。原文不会用 challenging，而是用表示危险与恶劣天气的具体词：rough seas（汹涌的海面）、hostile（恶劣的）、colliding with floating ice（撞上浮冰）。B 段开头一句 “It would be hard to overstate how hostile the Antarctic environment is” 已经点明主题，随后由船长逐条解释，只要扫到 hostile 或 rough seas 即可锁定 B 段。确定答案技巧：注意题干问的是“航行条件”而非“生活条件”，因此看到讲吃住与值班的 E 段要立刻排除；B 段整段围绕风、浪、冰展开，是唯一描述海上航行风险的一段。",
          "analysis": "B 段首句即定调：“It would be hard to overstate how hostile the Antarctic environment is for scientists.”（南极环境对科学家而言有多么恶劣，怎么强调都不过分）。接着以船长 Graham Leachman 的解释为例，逐条列出航行中的危险：罗斯海受 “katabatic winds”（下降风）影响，风从南极大陆疾扫而下形成 “rough seas”（汹涌海面）；另一重危险是船可能撞上浮冰，即 “the possibility of the ship colliding with floating ice”，而现有高技术设备都无法测出冰的厚度，只能靠肉眼观察。题干 “a description of the challenging sailing conditions in Antarctica” 正是对这一段内容的概括，challenging 对应 hostile 与 rough seas，sailing conditions 对应风、浪、冰三类海上条件，所以答案是 B。",
          "traps": [
            "为什么不是 E：E 段确实也讲“艰难”，但 “unrelenting” 之后交代的是船上日常生活：轮流值班、食物很快耗尽、只能吃冷冻罐头食品、厨师至关重要，这些是生活条件而非航行条件，与 sailing 不符。",
            "为什么不是 A：A 段虽提到 “Competition for berths… was fierce”，但 fierce 描述的是申请名额的竞争激烈，不是海上航行的风浪与风险。",
            "为什么不是 C：C 段出现 “deep scars and ravines”，容易被误读为“险恶”，但那是冰山在海底刮出的地形，讲的是海底地貌与巨型化现象，与航行条件无关。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "information about the composition of the scientific group",
          "translation": "关于科学团队构成的信息",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "bringing together zoologists, oceanographers, meteorologists and other scientists from the Ministry of Fisheries, the National Institute for Water and Atmospheric Research, the National Museum and various universities, to study life beneath the seas of Antarctica."
          },
          "synonyms": [
            "“the scientific group” 同义替换为原文的 “zoologists, oceanographers, meteorologists and other scientists”，即参与考察的各类科学家",
            "“composition” 同义替换为原文的 “bringing together…”，把各部门、各学科的人聚合起来，正说明团队的组成方式",
            "“information about” 对应原文进一步列出的派出机构 “from the Ministry of Fisheries, the National Institute for Water and Atmospheric Research, the National Museum and various universities”"
          ],
          "locatingTip": "定位：题干关键词是 scientific group（科学团队）与 composition（构成）。composition 在原文不会原词出现，要用“人员类别与来源机构”来钓：zoologists（动物学家）、oceanographers（海洋学家）、meteorologists（气象学家）以及 Ministry of Fisheries、National Institute for Water and Atmospheric Research、National Museum 等机构名。全篇只有 A 段密集出现这些学科与机构名称。确定答案技巧：看到 “bringing together… and other scientists from…” 这种“把 A、B、C 聚合起来”的结构，就等于原文在交代团队的组成（composition），选 A。",
          "analysis": "A 段第二句：“Lead scientist Mary Livingston emphasises just what a multi-faceted expedition this was, bringing together zoologists, oceanographers, meteorologists and other scientists from the Ministry of Fisheries, the National Institute for Water and Atmospheric Research, the National Museum and various universities, to study life beneath the seas of Antarctica.”（首席科学家 Mary Livingston 强调这是一次多么多元的考察，它把动物学家、海洋学家、气象学家以及来自渔业部、国家水与大气研究所、国家博物馆和多所大学的科学家聚集在一起，研究南极海域下的生命）。句中前半列出学科门类，后半列出派出机构，两相结合就是“科学团队的构成”这一信息。同段后文只补充了名额竞争激烈（Competition for berths… was fierce）与队长 Stu Hanchet 的评价，仍围绕团队展开，故答案确定为 A。",
          "traps": [
            "为什么不是 F：F 段虽然提到一位工作人员（摄影师 Max Quinn）以及科学家的性格（camera-shy and quiet），但那是个人身份与性情，不是整个科研团队的学科构成。",
            "为什么不是 B：B 段的人物是船长 Graham Leachman，讲的是航行风险，没有出现任何学科或科研机构名称。",
            "为什么不是 D：D 段虽然列举了设备与多种海洋生物，属于研究成果，但没有交代参与研究的人员由哪些学科、哪些机构组成。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "the identity of a potentially unpopular person on the ship",
          "translation": "船上一位可能不受欢迎者的身份",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Perhaps most controversially, one of the precious berths on the Tangaroa was taken up by cameraman Max Quinn, who filmed a documentary about the voyage."
          },
          "synonyms": [
            "“unpopular” 同义替换为原文的 “controversially” 与 “wasn't welcomed at first”，说明此人的加入一开始并不受待见",
            "“the identity of” 同义替换为原文的 “cameraman Max Quinn”，原文直接给出了他的姓名与职业身份",
            "“on the ship” 同义替换为原文的 “one of the precious berths on the Tangaroa”，即塔加罗阿号上的一个宝贵床位"
          ],
          "locatingTip": "定位：题干关键词是 unpopular（不受欢迎）。原文不会用 unpopular 这么直白，而是用 controversially（有争议地）、wasn't welcomed（不受欢迎）、difficult getting everyone's permission（很难获得所有人同意）来表达。扫读各段，只有 F 段开头的 “Perhaps most controversially…” 同时给出人名与身份：cameraman Max Quinn。确定答案技巧：题干问的是 “identity（身份）”，即这个人是谁；F 段第一句就把身份（摄影师）、姓名（Max Quinn）交代清楚，并用 “controversially” 点出不受欢迎的原因（占用了宝贵的科考床位），两项信息一次到位，故选 F。",
          "analysis": "F 段开头：“Perhaps most controversially, one of the precious berths on the Tangaroa was taken up by cameraman Max Quinn, who filmed a documentary about the voyage.”（最有争议的大概是，塔加罗阿号上一个宝贵的床位被摄影师 Max Quinn 占用了，他拍摄了这部考察的纪录片）。紧接着一句 “Quinn's inclusion wasn't welcomed at first.”（Quinn 的加入起初并不受欢迎）直接呼应题干的 potentially unpopular，并引 Livingston 的话说明原因：科学家天性腼腆、不习惯镜头，所以取得大家的许可与同意很不容易。人名 Max Quinn 与身份 cameraman 正是在这一段首次且唯一地出现，所以答案是 F。",
          "traps": [
            "为什么不是 E：E 段讲的是全船人的日常生活不便（食物、值班、厨师），没有提到任何“不受欢迎的人”。",
            "为什么不是 A：A 段虽然也涉及人的话题，但讲的是名额竞争激烈、团队很强，属于正面评价，与 unpopular 相反。",
            "为什么不是 B：B 段的人物是船长 Graham Leachman，其角色是解释航行风险，文中没有对他受欢迎程度的任何评价。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 18–23 摘要填空（Choose ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 18,
        "end": 23
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "Analysis continues of the expedition's remarkable discoveries, including a 18 ________ very notable for its unusual width.",
          "translation": "考察队那些非凡发现的后续分析仍在继续，其中包括一种因宽度异常而十分引人注目的 ________。",
          "answer": "starfish",
          "wordClass": "名词（可数，单数；空格前有不定冠词 a，故填单数形式，不加复数、不加冠词）",
          "locating": {
            "paragraph": "C",
            "quote": "but most impressive of all were the starfish that measured more than half a metre across"
          },
          "synonyms": [
            "“very notable for its unusual width” 同义替换为原文的 “measured more than half a metre across” 与 “most abnormal”，直径超过半米即宽度异常",
            "“including a…” 同义替换为原文的 “most impressive of all were…”，都是在罗列发现中最突出的一项",
            "“remarkable discoveries” 同义替换为原文的 “Analysis of what the expedition found continues” 以及 “most impressive” 所引出的发现"
          ],
          "locatingTip": "定位：摘要第一句锁定 C 段，因为 “Analysis continues of the expedition's remarkable discoveries” 与 C 段首句 “Analysis of what the expedition found continues” 几乎逐词对应。确定答案技巧：题干要求找一个“宽度异常”的东西，回原文找表示尺寸的数字或比较：“starfish that measured more than half a metre across”（直径超过半米的海星），紧接着又说 “that's most abnormal for creatures belonging to this species”（对本物种来说极不寻常），“异常”即 abnormal，与 unusual width 呼应，答案为 starfish。填空只写海星一个词，不要写 starfish that measured…。",
          "analysis": "C 段：“'We have collected huge worms and strange crustaceans,' says Livingston, 'but most impressive of all were the starfish that measured more than half a metre across – that's most abnormal for creatures belonging to this species.'”（Livingston 说：我们采集到了巨大的蠕虫和奇特的甲壳类动物，但最令人印象深刻的是直径超过半米的海星，对属于这一物种的生物来说这极不正常）。摘要句把这段话压缩成“一种因宽度异常而十分引人注目的东西”，其中 very notable 对应 most impressive，unusual width 对应 more than half a metre across 与 most abnormal，被描述的对象就是 starfish。词性上空格前有 a，须填可数名词单数，原文的 starfish 单复数同形，按原文照抄即可。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "The reasons why creatures grow so large at great depths in Antarctica may include the highly oxygenated water, the temperature, or the small number of 19 ________.",
          "translation": "南极深海中生物长得如此巨大的原因可能包括高含氧量的海水、水温，或者 ________ 数量少。",
          "answer": "predators",
          "wordClass": "名词（复数，指捕食者；“a small number of” 后接可数名词复数，原文即为复数形式）",
          "locating": {
            "paragraph": "C",
            "quote": "Livingston suggests various possible causes for gigantism including the extreme cold, few predators and high levels of oxygen in the seawater"
          },
          "synonyms": [
            "“grow so large” 同义替换为原文的 “gigantism”，即某些物种长得异常大",
            "“the highly oxygenated water” 同义替换为原文的 “high levels of oxygen in the seawater”",
            "“the temperature” 同义替换为原文的 “the extreme cold”，极寒即水温极低",
            "“the small number of …” 同义替换为原文的 “few predators”，few 表示数量少"
          ],
          "locatingTip": "定位：摘要句本身就是 C 段两句的改写。先在 C 段找 “gigantism” 这个词，其前后句即原因清单。确定答案技巧：原文用 including 引出三项并列原因 “the extreme cold, few predators and high levels of oxygen in the seawater”。把两边对齐：highly oxygenated water 对应 high levels of oxygen in the seawater，the temperature 对应 the extreme cold，剩下的 few predators 就对应 the small number of [19]，因此填 predators。注意 few 与 a small number of 同义，但空格要的是“什么的数量少”，即 predators，不能填 few（形容词，且不符合 ONE WORD ONLY 的答案要求）。",
          "analysis": "C 段在介绍完巨型海星后写道：“This phenomenon of Antarctic seas is called 'gigantism' – the fact that some species grow to unusually large sizes. Livingston suggests various possible causes for gigantism including the extreme cold, few predators and high levels of oxygen in the seawater, but as yet no final determination can be made.”（南极海域的这一现象被称为巨型化，即某些物种长得异常大。Livingston 提出了若干可能的原因，包括极寒、天敌稀少以及海水中含氧量高，但迄今尚无定论）。摘要句把三种原因逐一改写，前两项已给出（高含氧的海水、温度），第三项 the small number of [19] 对应 few predators：few 与 a small number of 同义，故空格填 predators。词性上，of 后接名词，a small number of 要求可数名词复数，原文 predators 即为复数，照抄即可；不要填 predator 单数，也不要填 cold / oxygen 这类已在前文出现的词。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "A further fascinating finding was the existence of canyons in the seabed caused by passing 20 ________.",
          "translation": "另一个引人入胜的发现是海底存在着由经过的 ________ 造成的峡谷。",
          "answer": "icebergs",
          "wordClass": "名词（复数，指漂移的冰山；此处作 passing 所修饰的名词，原文为复数）",
          "locating": {
            "paragraph": "C",
            "quote": "whereas elsewhere icebergs have scoured out deep scars and ravines in the sea floor as they go by"
          },
          "synonyms": [
            "“canyons in the seabed” 同义替换为原文的 “deep scars and ravines in the sea floor”，ravine（沟壑）即峡谷",
            "“caused by passing …” 同义替换为原文的 “have scoured out… as they go by”，go by 即 passing，scoured out 即造成（刮出）",
            "“A further fascinating finding” 同义替换为原文的 “Another interesting discovery”，another 对应 further"
          ],
          "locatingTip": "定位：题干关键词是 canyons in the seabed 与 passing，原文用 ravines in the sea floor 与 go by 表达同一意思；这两个表达只在 C 段末尾出现。确定答案技巧：先在 C 段末句找到“海底被刮出沟壑”的动作执行者，原文说 “elsewhere icebergs have scoured out deep scars and ravines in the sea floor as they go by”，句子的主语 icebergs 就是造成海底峡谷的一方，as they go by 对应题干的 passing，因此填 icebergs。注意保留原文复数形式，不要写成单数 iceberg，也不要误填 sea floor（那是地点而非施动者）。",
          "analysis": "C 段末句：“Another interesting discovery was that in some places every inch of the sea floor was covered with life, whereas elsewhere icebergs have scoured out deep scars and ravines in the sea floor as they go by.”（另一个有趣的发现是，有些地方海底每一寸都覆盖着生命，而在另一些地方，冰山经过时在海底刮出了深深的疤痕与沟壑）。摘要句 “canyons in the seabed caused by passing [20]” 正是对这一内容的改写：canyons 对应 ravines，seabed 对应 sea floor，caused by passing 对应 as they go by，而执行“刮出”这一动作的正是 icebergs（冰山）。词性上，passing 在此为动名词作定语，后面需要名词，且冰山的动作是复数群体行为，原文用复数 icebergs，照抄即可。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "Many creatures living at great depth look very strange, such as tunicates, which seem to be made of 21 ________.",
          "translation": "许多生活在深海的生物外表非常奇怪，例如被囊动物，它们仿佛是由 ________ 制成的。",
          "answer": "glass",
          "wordClass": "名词（物质名词，作介词 of 的宾语；用单数形式，不加冠词、不变复数）",
          "locating": {
            "paragraph": "D",
            "quote": "plankton-eating animals that are slender structures that appear to be fashioned from glass"
          },
          "synonyms": [
            "“seem to be made of” 同义替换为原文的 “appear to be fashioned from”，都是“由某材料制成”",
            "“look very strange” 同义替换为原文的 “have a bizarre appearance”，bizarre 与 strange 同义",
            "“tunicates” 在原文中原词复现：“Among them were spotted tunicates”，题目只是把原文的动植物名称直接搬用"
          ],
          "locatingTip": "定位：摘要句保留了 tunicates 这个生僻的专有名词，直接回原文搜 tunicates，它只出现在 D 段 “Among them were spotted tunicates, plankton-eating animals that are slender structures that appear to be fashioned from glass.” 有了定位词，这一步几乎不需要读全文。确定答案技巧：看 tunicates 后面的同位语说明，其中 fashioned from 与题干的 made of 同义，介词 from 后的名词 glass 就是所指材料，因此填 glass。切记填的是材料名词 glass（玻璃），不要填 structures 或 slender 这类形容词。",
          "analysis": "D 段：“By using deep-sea trawl nets, high-definition cameras and water samplers, the team has revealed that many of the creatures that live at extreme depths have a bizarre appearance. Among them were spotted tunicates, plankton-eating animals that are slender structures that appear to be fashioned from glass.”（团队发现许多生活在极深处的生物外形怪异，其中就有斑被囊动物，这种以浮游生物为食的动物呈细长结构，看上去像是用玻璃做成的）。摘要句 “Many creatures living at great depth look very strange, such as tunicates, which seem to be made of [21]” 与前两句一一对应：look very strange 对应 have a bizarre appearance，seem to be made of 对应 appear to be fashioned from，空格内容即 glass。词性上，of 是介词，后接表示材料的名词；glass 在此为物质名词，一般不用复数、不加冠词，按原文照抄 glass 即可。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "One frightening-looking fish species is characterised by loss of its 22 ________ and the fact that it spawns only once.",
          "translation": "有一种外表吓人的鱼，其特征是会失去它的 ________，并且只产卵一次。",
          "answer": "teeth",
          "wordClass": "名词（复数，指牙齿；原文与空格前的 its 搭配使用复数形式 teeth，不要写单数 tooth）",
          "locating": {
            "paragraph": "D",
            "quote": "They are also unusual for being capable of shedding their teeth and growing a new set."
          },
          "synonyms": [
            "\"loss of its …\" 同义替换为原文的 “shedding their teeth”，shed 即脱落、失去",
            "“it spawns only once” 同义替换为原文的 “'monocyclic', meaning the fish die after the first spawning”，只产卵一次后即死亡",
            "“One frightening-looking fish species” 同义替换为原文的 “The most fearsome-looking fish was the Southern Ocean daggertooth”，fearsome 与 frightening 同义"
          ],
          "locatingTip": "定位：题干前半句 “the fact that it spawns only once” 是非常独特的线索，回原文搜 spawn，落在 D 段描述南大洋 daggertooth（匕首齿鱼）的两句：“a species that is 'monocyclic', meaning the fish die after the first spawning”。确定答案技巧：题干用 and 并列了两个特征，第二个特征（只产卵一次）已经定位到该鱼，那么第一个特征（loss of its …）就看原文紧邻的下一句 “They are also unusual for being capable of shedding their teeth and growing a new set.”，shed 与 loss 同义，失去的对象是 teeth，故填 teeth。注意原文用的是复数 teeth，且空格前的 its 在此指该物种的牙齿总称，填 tooth 会与原文形式不符。",
          "analysis": "D 段相关句：“The most fearsome-looking fish was the Southern Ocean daggertooth, a species that is 'monocyclic', meaning the fish die after the first spawning. They are also unusual for being capable of shedding their teeth and growing a new set.”（外表最可怕的鱼是南大洋匕首齿鱼，这一物种属于“单次繁殖型”，即产卵一次后便死亡。它们还有一点不同寻常：能够脱落牙齿并长出新的一套）。摘要句的两条特征与原文严格对应：spawns only once 对应 monocyclic 与 die after the first spawning；loss of its [22] 对应 shedding their teeth，其中 shed（脱落）与 loss（失去）同义，宾语为 teeth，因此答案是 teeth。词性分析上，its 是形容词性物主代词，后接名词，原文用复数 teeth（牙齿总称），必须按原文填写复数形式，不要写 tooth。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Another fish has something like a length of string attached to its 23 ________ that assists with hunting.",
          "translation": "另一种鱼有一个像一段绳子一样的东西附着在它的 ________ 上，有助于捕猎。",
          "answer": "chin",
          "wordClass": "名词（可数，单数；前有物主代词 its，指身体部位，用单数形式）",
          "locating": {
            "paragraph": "D",
            "quote": "an extraordinary species that has an appendage like a piece of cord hanging from its chin"
          },
          "synonyms": [
            "“something like a length of string” 同义替换为原文的 “an appendage like a piece of cord”，cord 即细绳，appendage 即附属器官",
            "“attached to” 同义替换为原文的 “hanging from”，都表示悬挂在某个部位上",
            "“assists with hunting” 同义替换为原文的 “attracts prey to swim within striking distance”，把猎物吸引到可攻击的距离内即有助于捕猎"
          ],
          "locatingTip": "定位：题干关键词是 string（绳状物）与 hunting。原文用 cord（细绳）与 prey（猎物）表达同一意思，并出现在 D 段讲 stareater 的那一句。确定答案技巧：先找到绳状附属物的挂点，原文说 “an appendage like a piece of cord hanging from its chin”，介词 from 后的 chin（下巴）就是所附着的部位；随后一句 “this glows red and attracts prey to swim within striking distance” 说明它的发光与诱捕作用，对应题干的 assists with hunting。空格前的 its 提示填单数身体部位名词，答案为 chin。",
          "analysis": "D 段相关句：“Another predatory fish brought to the surface was the stareater, an extraordinary species that has an appendage like a piece of cord hanging from its chin. In these deep, dark waters, this glows red and attracts prey to swim within striking distance.”（被捞上来的另一种掠食性鱼类是 stareater，这种奇特的鱼类下巴上垂着一个像细绳一样的附属器官。在这种幽暗的深水里，它会发出红光，把猎物吸引到可以攻击的距离内）。摘要句 “something like a length of string attached to its [23] that assists with hunting” 与原文两处对应：绳状物对应 a piece of cord，附着点对应 hanging from its chin，捕猎作用对应 attracts prey to swim within striking distance。因此空格填 chin。词性上，its 后接单数可数名词，且 chin 为身体部位，按原文照抄单数形式即可。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–26 人物观点匹配（Match each person with the correct opinion）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 26
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "Mary Livingston",
          "translation": "玛丽·利文斯顿（Mary Livingston）",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "'Science,' says Livingston, 'is intrepid, more so than people realise. It's not necessarily examining dry samples in the laboratory, but can also mean braving the elements on deck."
          },
          "synonyms": [
            "“The nature of scientific work” 同义替换为原文的 “Science… is intrepid” 以及 “It's not necessarily examining dry samples in the laboratory”，即科学工作究竟是什么样子",
            "“may surprise some people” 同义替换为原文的 “more so than people realise”，比人们以为的更加如此，也就是会出乎人们意料",
            "“Respecting your subjects' privacy” 这一选项要点在 Livingston 的话里没有出现，属于干扰项"
          ],
          "locatingTip": "定位：先用大写人名 Mary Livingston 回到原文，她在 A 段（介绍考察队）、C 段（讲海星与巨型化）、F 段（评价纪录片与科学工作）都出现过，与观点匹配相关的是最后一段 F 段的话。确定答案技巧：逐一比对七个观点，A 段她讲的是队伍的多元构成，与七个选项都不吻合；F 段末句她说 “Science is intrepid, more so than people realise”，强调科学比人们想象的更“无畏”，正是选项 F“科学工作的性质可能会让一些人吃惊”。人名匹配题的关键是认准“谁说了这句话”，同时警惕同一段里其他人的话（本题 F 段还有摄影师 Max Quinn 的话）造成串词。",
          "analysis": "F 段末尾 Livingston 的评论：“'Science,' says Livingston, 'is intrepid, more so than people realise. It's not necessarily examining dry samples in the laboratory, but can also mean braving the elements on deck. That's what the documentary captures, the sense of real people with real lives.'”（Livingston 说，科学是无畏的，比人们意识到的更甚。它未必是实验室里检查干燥的样品，也可以是在甲板上迎风受冻。纪录片捕捉到的正是这一点，真实的人与真实的生活）。这段话的落点是“科学工作比人们以为的更无畏、更不局限于实验室”，与选项 F “The nature of scientific work may surprise some people”（科学工作的性质可能让一些人感到意外）对应，其中 more so than people realise 就是“令人意外”的另一种说法。故 Livingston 匹配 F。",
          "traps": [
            "选项 B（Respecting your subjects' privacy gets the best results）是 Max Quinn 的观点，原文 F 段写他“知道什么时候不该打扰”，并引述他说不要拍科学家吃早餐，讲的是尊重被拍摄者，不是 Livingston 的意见。",
            "选项 D 与选项 A 分别对应 E 段的厨师与食物内容（“the cook has an essential role”、“most provisions are frozen, canned or dried”），与 Livingston 无关。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "Stu Hanchet",
          "translation": "斯图·汉切特（Stu Hanchet）",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "Voyage leader Stu Hanchet says, 'We could have filled the science positions four times over ... we had so many people requesting a berth ... We ended up with a really strong team.'"
          },
          "synonyms": [
            "“More applications to join the group were received than there were places” 同义替换为原文的 “We could have filled the science positions four times over” 与 “so many people requesting a berth”，申请者远超名额",
            "“places” 同义替换为原文的 “science positions” 与 “berth”，船上的岗位与床位名额",
            "“applications” 同义替换为原文的 “people requesting a berth”，提出申请要求上船"
          ],
          "locatingTip": "定位：大写人名 Stu Hanchet 在原文中只出现在 A 段，且带身份 “Voyage leader”，扫读时可直接锁定。确定答案技巧：读他引语中的两个数字信息 “filled the science positions four times over”（可以把科研岗位填满四次）与 “so many people requesting a berth”（申请床位的人太多），这两处都在讲“申请人数远大于可提供的名额”，正是选项 G。做人物观点匹配题时，人物的引语（单引号内的直接引语）就是观点所在，要优先精读。",
          "analysis": "A 段末尾：“Voyage leader Stu Hanchet says, 'We could have filled the science positions four times over ... we had so many people requesting a berth ... We ended up with a really strong team.'”（领队 Stu Hanchet 说：我们本可以把科研岗位填满四次，申请床位的人太多了，最后我们组成了一支非常强的团队）。前一句还提到 “Competition for berths – the ship can carry 44 people, including 13 crew – was fierce.”（床位竞争激烈，该船连同 13 名船员共载 44 人），进一步印证名额有限而申请者众多。选项 G “More applications to join the group were received than there were places” 与 “four times over”、“so many people requesting a berth” 完全对应，因此 Hanchet 匹配 G。",
          "traps": [
            "选项 E（Being separated from family was difficult）在原文中完全没有依据，文中既没有提到家庭成员，也没有任何与家人分离的抱怨。",
            "选项 C（The summer is the best time to sail these waters）是船长 Graham Leachman 的观点（“This is why he prefers sailing in summer”），不是 Hanchet 说的，不要因为同属航行话题而误配。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "Max Quinn",
          "translation": "马克斯·奎因（Max Quinn）",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "'The trick,' he says, 'is to mostly film the scientists at work, in their professional roles ... rather than eating their breakfast.'"
          },
          "synonyms": [
            "“Respecting your subjects' privacy” 同义替换为原文的 “He knows when not to intrude” 与 “film the scientists at work, in their professional roles ... rather than eating their breakfast”，即不去打扰、不拍私人生活片段",
            "“gets the best results” 同义替换为原文的 “The trick is…”，the trick 意为行之有效的窍门",
            "“your subjects” 对应原文被拍摄的对象 “the scientists”，即纪录片的主角"
          ],
          "locatingTip": "定位：大写人名 Max Quinn 只出现在 F 段首句，他的直接引语紧随其后（“'The trick,' he says…”）。确定答案技巧：题干要匹配“尊重拍摄对象隐私才能取得最好效果”这一观点，回原文看 Quinn 说的窍门：主要拍科学家工作时的专业状态，而不去拍他们吃早餐之类的私人时刻，接着原文补一句 “He knows when not to intrude.”（他知道什么时候不该打扰），not to intrude 与 respecting privacy 对应，the trick 与 gets the best results 对应，故匹配 B。注意 F 段最后一段引语是 Livingston 说的话，不要与 Quinn 的话混淆。",
          "analysis": "F 段中间部分：“But in the end Quinn fitted in very well. 'The trick,' he says, 'is to mostly film the scientists at work, in their professional roles ... rather than eating their breakfast.' He knows when not to intrude.”（但最终 Quinn 融入得很好。他说，窍门在于主要拍摄工作中的科学家、拍他们职业角色中的样子，而不是拍他们吃早餐。他知道什么时候不该打扰）。题干选项 B “Respecting your subjects' privacy gets the best results” 中的三个要点在原文都能找到对应：respecting privacy 对应 not to intrude 与不拍私人时刻，gets the best results 对应 the trick（有效窍门）以及前文 fitted in very well（结果良好），subjects 对应被拍摄的 scientists。两者指向同一种拍摄伦理，因此 Quinn 匹配 B。",
          "traps": [
            "选项 F（The nature of scientific work may surprise some people）虽然也出现在 F 段，但那句话出自 Livingston 之口（“Science,' says Livingston, 'is intrepid…”），与 Quinn 无关。",
            "选项 D（The kitchen is one of the most important parts of the ship）源自 E 段考察总管 Fred Smits 对厨师重要性的评价，Quinn 从未提及饮食与厨房。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
