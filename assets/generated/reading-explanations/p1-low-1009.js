(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-1009", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-1009",
  "meta": {
    "examId": "p1-low-1009",
    "title": "A brome lives on: How a British grass escaped extinction 雀麦草的重生：一种英国草如何免于灭绝",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–8 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 8
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Interrupted brome got its name because it came close to extinction.",
          "translation": "雀麦草（interrupted brome）得名于它曾经濒临灭绝。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Called interrupted brome because of its gappy seed-head, this unprepossessing grass was found nowhere else in the world."
          },
          "synonyms": [
            "“got its name” 同义替换为原文的 “Called interrupted brome”（被称作 interrupted brome）",
            "“because it came close to extinction” 与原文的 “because of its gappy seed-head”（因为它的种子穗疏疏拉拉、中间有缺口）相互冲突：原文给出的命名依据是形态特征，不是濒危处境",
            "“came close to extinction” 对应的意思在原文另有一句 “it quickly vanished and by 1972 was nowhere to be found”，但该句谈的是它消失的事实，与名字的由来无关"
          ],
          "locatingTip": "定位：题干的两个关键词是 name（名字）与 extinction（灭绝），而讲“得名原因”的只有第 1 段（A 段）第二句；句中因为出现 Called interrupted brome because of 这一因果结构，扫读到 because 就该停下来精读。确定答案技巧：判断题问“某名称的由来”时，原文必须给出 because / because of 这类明确的因果标记才算有依据。原文写的是 “Called interrupted brome because of its gappy seed-head”，即名字来自它种子穗中间“有缺口（gappy）”这一相貌特征；题干却把原因换成 came close to extinction（曾濒临灭绝），属于因果错配，事实与原文相反，因此判 FALSE。",
          "analysis": "第 1 段（A 段）开头两句是本题的落点：“The British grass interrupted brome was said to be extinct, just like the dodo. Called interrupted brome because of its gappy seed-head, this unprepossessing grass was found nowhere else in the world.”（这种英国草 interrupted brome 据说像渡渡鸟一样已经灭绝。它之所以被叫做 interrupted brome，是因为它的种子穗疏疏拉拉、中间带着缺口；这种不起眼的草在世界上任何其他地方都找不到）。作者在这里做的是两件事：一是交代它“曾被认为灭绝”，二是交代它“为什么叫这个名字”。名字的依据写得很清楚——because of its gappy seed-head，即种穗的形态特征（interrupted 指的就是穗子中间断断续续、不连贯的样子）。题干把这两个原本互不相干的信息强行接上因果，说“得名于它濒临灭绝”，实际上是把后文“1972 年已无处可寻（by 1972 was nowhere to be found）”这条灭绝线索硬挪去解释名字，原文并无此意，故答案为 FALSE。做题提醒：遇到 got its name because… 这类“名称来历题”，第一步就要在原文里找 because，找不到对应就说明改写出了错。",
          "traps": [
            "为什么不是 TRUE：原文给出的命名原因是 its gappy seed-head（种子穗中间有缺口），与灭绝无关。同段确实讲了它 1972 年前后消失、连保险备用的种子都已死亡（were dead），但那属于“灭绝”这条信息线，原文从未把它与名字挂钩，选 TRUE 属于把两处信息无理拼接。",
            "为什么不是 NOT GIVEN：原文对“为什么叫这个名字”有明确交代（because of its gappy seed-head），属于已经给出且与题干相反的信息，按规则判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Interrupted brome seeds died because they were stored at room temperature.",
          "translation": "雀麦草的种子因为被存放在室温下而死亡。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Even the seeds stored at the Cambridge University Botanic Garden as an insurance policy were dead, having been mistakenly kept at room temperature."
          },
          "synonyms": [
            "“seeds died” 同义替换为原文的 “the seeds … were dead”（这些种子已经死了）",
            "“were stored at room temperature” 同义替换为原文的 “kept at room temperature”，stored 与 kept 在此同义，都表示存放",
            "“because” 对应原文的分词结构 “having been mistakenly kept at room temperature”，该结构在句中正是说明种子为何死亡的原因状语",
            "“as an insurance policy” 说明这批种子原本是为防灭绝而留的备份，与题干所指的正是同一批种子"
          ],
          "locatingTip": "定位：题干关键词是 seeds、room temperature，二者同现的只有第 1 段（A 段）最后一句；也可用大写专有名词 Cambridge University Botanic Garden 一步锁定。确定答案技巧：原因型判断句的关键是找原文的因果标记。原文用完成分词 having been mistakenly kept at room temperature（因被误放在室温下）直接解释了种子死亡的原因（were dead），与题干的 because 完全对应；题干只是把这层原因照搬过来，没有添改，因此判 TRUE。注意原文的 mistakenly（被搞错了）是细节，不影响“存储在室温下”这一原因，不必因此改判。",
          "analysis": "第 1 段末句写道：“Even the seeds stored at the Cambridge University Botanic Garden as an insurance policy were dead, having been mistakenly kept at room temperature.”（就连存放在剑桥大学植物园、作为保险备用的种子也已经死了，因为它们被误放在了室温下）。这句话包含三层信息：①种子原本被存放在剑桥大学植物园；②存放的目的是 as an insurance policy（作为保险措施，防止该物种彻底消失）；③实际结果是它们全部死亡，原因是 having been mistakenly kept at room temperature（被错误地保存在室温环境中）。题干把①②③压缩成一句话：“雀麦草的种子因为被存放在室温下而死亡”，其中 seeds died 对应 were dead，were stored at room temperature 对应 kept at room temperature，because 对应分词 having been kept at room temperature 所表的原因。三处改写方向完全一致、无任何添加或删减要点，所以答案是 TRUE。做题提示：英文里表示原因的手段除了 because 从句，还有分词短语、with 结构、for 短语等；认出 having been kept 这一层原因，本题就不会因为“原句没有 because”而迟疑。",
          "traps": [
            "为什么不是 FALSE：原文直接写 “having been mistakenly kept at room temperature”，这正是题干所给的原因，原文与题干之间没有矛盾点，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不但说种子已死（were dead），还紧接着给出原因（被存放在室温下），原因和结果都交代完整，因此不是信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Philip Smith studied at the University of Manchester.",
          "translation": "菲利普·史密斯（Philip Smith）曾在曼彻斯特大学就读。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "He attended a meeting of the Botanical Society of the British Isles in Manchester in 1979 and seized his opportunity."
          },
          "synonyms": [
            "“Philip Smith” 是原文原词复现，第 3 段（C 段）首句为 “Originally, Philip Smith did not know that he had the very unusual grass at his own home.”",
            "“Manchester” 在原文中与 “the Botanical Society of the British Isles” 连用，指的是一场会议（a meeting）的举办地，而非大学",
            "“studied at the University of Manchester” 在原文中找不到任何对应：原文只有 attended a meeting（参加会议），既没有出现 University，也没有出现 study、degree 之类的求学词"
          ],
          "locatingTip": "定位：题干有两个专有名词——人名 Philip Smith 和地名 Manchester。Manchester 全篇只出现一次，扫读大写词就能直接跳到第 3 段（C 段）第三句。确定答案技巧：雅思最爱用“同一地点、不同事件”来设陷阱。原文说的是他 1979 年在曼彻斯特参加了一场 Botanical Society of the British Isles 的会议（attended a meeting），题干预先把这个地点与“曼彻斯特大学（University of Manchester）”和“就读（studied）”绑定起来。原文从头到尾没有提到大学、学历或读书，缺的正是题干所要的那层信息，因此判 NOT GIVEN——千万不要因为“他在曼彻斯特出现过”就自行补出“他在那里上大学”。",
          "analysis": "第 3 段（C 段）完整交代了 Smith 的登场：“Originally, Philip Smith did not know that he had the very unusual grass at his own home. When he heard about the grass becoming extinct, he wanted to do something surprising. He attended a meeting of the Botanical Society of the British Isles in Manchester in 1979 and seized his opportunity.”（起初，Philip Smith 并不知道自己家里就长着这种极不寻常的草。当他听说这种草快要灭绝时，他想做一件让人意想不到的事。1979 年，他在曼彻斯特参加了英国群岛植物学会的一次会议，并抓住机会……）。文中关于 Smith 的信息只有三点：他不知道家里有这种草、听说它灭绝后想做件惊人的事、1979 年在曼彻斯特参加了植物学会的会议。接下去两句是他听到这种草衰败时的感慨（觉得失望、惋惜没有进一步研究），最后一句才是他把一盆盆“已灭绝的草”拿出来给大家看。整段没有一处提到他读过大学，更没有提到 University of Manchester。题干把会议举办地 Manchester 与“大学就读”这种全新的信息组合在一起，属于原文未提及的内容，故判 NOT GIVEN。答题时请牢牢抓住一个原则：地图上出现过的地名会让人产生熟悉感，但判定依据必须是原文句子本身说了什么，而不是这个地名还能联想到什么。",
          "traps": [
            "为什么不是 TRUE：原文只说他在曼彻斯特参加了一次植物学会的会议，并未说他在这座城市的大学就读。“在曼彻斯特开会”与“在曼彻斯特大学读书”是两件不同的事，题干缺少原文支撑，不能选 TRUE。",
            "为什么不是 FALSE：原文既没有否认他上过大学，也没有提供任何关于他学历、就读经历的相反信息，无法证伪，因此不属于 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "English Nature operates from Kew Botanical Gardens.",
          "translation": "English Nature（英格兰自然署）的办公地点设在邱园（Kew Botanical Gardens）。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "As part of the Species Recovery Programme, the organisation English Nature will reintroduce interrupted brome into the agricultural landscape, provided willing farmers are found."
          },
          "synonyms": [
            "“English Nature” 是原文原词复现，并与 “the organisation”（这个机构）连用",
            "“operates from Kew Botanical Gardens” 在原文中没有任何对应：与 English Nature 同现的只有 Species Recovery Programme 和“重返农田”的计划，原文没有交代它的办公地点",
            "“Kew Botanical Gardens” 只出现在第 5 段（E 段）“Living plants thrive at the botanic gardens at Kew, Edinburgh and Cambridge”，那里讲的是活体植株的栽种地，与 English Nature 的驻地无关"
          ],
          "locatingTip": "定位：题目有两个大写专有名词 English Nature 与 Kew。先用 English Nature 直达第 5–6 段交界处（正文第 6 段 F 段第二句），确认该机构的职能；再用 Kew 回查第 5 段，确认那里只谈植物园里栽种着这种草。确定答案技巧：题干把两条各自有出处、却从不相连的信息（English Nature 这个机构与 Kew 植物园）拼在同一句里，这是典型的“信息拼凑型” NOT GIVEN。原文没有说 English Nature 在哪里办公，也没有把它与 Kew 放在一起，题干所问的 operates from 这层关系在原文完全缺失，故判 NOT GIVEN。切忌因为两段里都出现同一篇主题相关的词就默认它们有关联。",
          "analysis": "第 5 段（E 段）讲的是物种未来的保障措施：“For now, the brome's future is guaranteed. The seeds from Smith's plants have been securely stored in the state-of-the-art facilities of the Millennium Seed Bank at Wakehurst Place in Sussex. Living plants thrive at the botanic gardens at Kew, Edinburgh and Cambridge. Seeds are also saved at sites across the country, and the grass now flourishes in several public gardens too.”（目前这种雀麦草的未来已有保障：Smith 植株的种子被妥善存放在苏塞克斯郡 Wakehurst Place 千年种子银行的先进设施中；活体植株在邱园、爱丁堡和剑桥的植物园里生长良好；各地也有种子保存点，这种草如今还在若干公共花园中繁茂生长）。第 6 段（F 段）则换了主角：“As part of the Species Recovery Programme, the organisation English Nature will reintroduce interrupted brome into the agricultural landscape, provided willing farmers are found.”（作为物种恢复计划的一部分，English Nature 这个机构将把雀麦草重新引入农业景观，前提是找到愿意合作的农民）。两段中，Kew 只与“植物园里种着活体植株”有关，English Nature 只与“重启野化计划”有关，原文从未把二者放在一起，更没有提到该机构的办公所在地。题干把“English Nature”与“Kew Botanical Gardens”强行用 operates from 连接，属于原文没有的信息，故判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文仅在第 5 段提到邱园等植物园里生长着这种草，在第 6 段另说 English Nature 将把它重新引入农田，两处信息互不相干，推不出“English Nature 在邱园办公”。",
            "为什么不是 FALSE：原文既没说 English Nature 在邱园办公，也没说它不在邱园办公，缺乏相反信息，所以不能判 FALSE，只能按未提及处理。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Interrupted brome grows poorly near plants such as sainfoin.",
          "translation": "雀麦草在驴喜豆（sainfoin）这类植物附近长得很差。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "A clue lies in its penchant for growing as a weed in fields shared with a fodder crop, in particular nitrogen-fixing legumes such as sainfoin, lucerne or clover."
          },
          "synonyms": [
            "“plants such as sainfoin” 同义替换为原文的 “a fodder crop, in particular nitrogen-fixing legumes such as sainfoin, lucerne or clover”（饲料作物，尤其是驴喜豆、苜蓿或三叶草这类固氮豆科植物）",
            "“grows poorly near …” 与原文的 “its penchant for growing as a weed in fields shared with …” 相互冲突：penchant for（偏好、爱好）说明它偏偏喜欢和这些作物长在同一片田里",
            "“near” 对应原文的 “shared with”（与……共用田地），表示二者同田共生，而非互相妨碍"
          ],
          "locatingTip": "定位：sainfoin 是全文最独特的名词之一，第 8 段（H 段）第二句马上给出它作为雀麦草伴生作物的身份，扫读这个词一步到位。确定答案技巧：题干的方向词是 grows poorly（长得差），属于负面评价；原文用的是 penchant for growing（偏好生长）这一正面倾向词，并排出一串共生作物（sainfoin, lucerne or clover），说明“和其他作物长在一块田里”是本种草的习性，而不是被压制的结果。方向相反即为 FALSE。做题时要抓“评价性 / 倾向性形容词”：prefer、flourish、thrive、penchant 这类词与 poorly、hardly、suffer 这类词绝不可能对应同一事实。",
          "analysis": "第 8 段（H 段）在讨论雀麦草从何而来，第二句是本题的落点：“A clue lies in its penchant for growing as a weed in fields shared with a fodder crop, in particular nitrogen-fixing legumes such as sainfoin, lucerne or clover.”（一条线索在于它偏爱作为杂草长在种有饲料作物的田里，尤其是驴喜豆、苜蓿、三叶草这类固氮豆科植物）。这句话的信息非常明确：雀麦草与驴喜豆的关系是“同田共生”——它把驴喜豆田当成自己的生长环境，作者用 penchant（爱好）一词表明这是它主动偏好的生境。题干却写成 “Interrupted brome grows poorly near plants such as sainfoin”（雀麦草在驴喜豆这类植物附近长得很差），把“喜欢与驴喜豆为伴”改成“在驴喜豆旁长势不佳”，与原文的倾向性完全相反，故判 FALSE。此外，下文的逻辑也支持原文立场：作者说这种草跟着驴喜豆等饲料作物一道进入英国（With the advent of sainfoin, clover and lucerne, Britain's very own rogue grass had suddenly arrived），若它真在驴喜豆旁长不好，就不可能随之扩散。",
          "traps": [
            "为什么不是 TRUE：原文说它对与饲料作物（尤其是驴喜豆、苜蓿、三叶草）同田生长有 penchant（偏好），也就是长在一起是它的常态甚至“爱好”；题干说它长得差，与原文的偏好描述正好相反。",
            "为什么不是 NOT GIVEN：原文对它与驴喜豆的关系交代得很清楚——作为杂草与饲料作物同田生长，信息明确，不属于未提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Legumes were used both as stock feed and for soil improvement.",
          "translation": "豆科植物既被用作牲畜饲料，也被用来改良土壤。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Seeds brought in from the Continent were sown in pastures to feed horses and other livestock."
          },
          "synonyms": [
            "“stock feed” 同义替换为原文的 “to feed horses and other livestock”（喂马和其他牲畜）",
            "“soil improvement” 同义替换为第 9 段（I 段）的 “to serve as green manure and boost grain yields”（充当绿肥、提高粮食产量）",
            "“legumes” 在原文中的身份先以 “Seeds brought in from the Continent” 出现，随后在第 9 段被直接称作 legumes；第 8 段已点名它们是 nitrogen-fixing legumes（固氮豆科植物）"
          ],
          "locatingTip": "定位：题干的核心名词是 legumes（豆科植物），第 8 段（H 段）已经点名 nitrogen-fixing legumes such as sainfoin, lucerne or clover，第 9 段（I 段）继续讲 legumes 的用途，两段连读即可。确定答案技巧：题干用 both … and … 并列了两个用途，做判断题就要把两个用途分别落实：饲料用途对应第 8 段 “sown in pastures to feed horses and other livestock”；改良土壤对应第 9 段 “to serve as green manure and boost grain yields”（green manure 即“绿肥”，用作肥田）。两处一一落实、方向一致，因此是 TRUE。注意不要把“原文没有出现 soil improvement 这个词”当作 NOT GIVEN 的理由——green manure 与 boost grain yields 就是“改良土壤”的表述。",
          "analysis": "本题的证据跨两个段落、两句各管一半。第 8 段（H 段）第四句：“Seeds brought in from the Continent were sown in pastures to feed horses and other livestock.”（从欧洲大陆运来的种子被播撒在牧草地里，用来喂养马匹和其他牲畜）——这落实了题干前半的“牲畜饲料（stock feed）”。第 9 段（I 段）第三句：“By 1650, legumes were increasingly introduced into arable rotations to serve as green manure and boost grain yields.”（到 1650 年，豆科植物越来越多地被引入耕作轮作，充当绿肥并提高粮食产量）——这落实了题干后半的“改良土壤（soil improvement）”，其中 green manure（绿肥，即专为肥田而种的作物）正是土壤改良的直接说法。原文第 9 段还补了一句这些豆科植物随军队补给的需要被大力推广（need to feed the parliamentary armies … Farmers were forced to produce more bread, cheese and beer），进一步印证它们在饲料与地力两方面都被使用。两个用途都有原文落脚点，且题干用 both … and … 完整覆盖，故答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确给出两种用途——喂马和其他牲畜（to feed horses and other livestock）、充当绿肥并提高粮食产量（serve as green manure and boost grain yields），与题干的 both … and … 完全吻合，无任何冲突。",
            "为什么不是 NOT GIVEN：两种用途在原文中都有直接语句支撑，属于已经交代的信息。注意 green manure（绿肥）是雅思高频的“土壤改良”替换说法，认出它本题即成立。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Interrupted brome needs to be harvested and re-sown to survive.",
          "translation": "雀麦草需要被收割并重新播种才能存活。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "11",
            "quote": "Much like the once-common arable weeds, such as the corncockle, its seeds cannot survive long in the soil. Each spring, the brome relied on farmers to resow its seeds"
          },
          "synonyms": [
            "“needs to be … re-sown” 同义替换为原文的 “relied on farmers to resow its seeds”（每年春天都要依靠农民重新播下它的种子）",
            "“to survive” 同义替换为原文的 “its seeds cannot survive long in the soil”（它的种子无法在土壤里长期存活）——正因为活不长，才必须年年重播",
            "“harvested” 对应原文的农事场景 “in the days before weedkillers and advanced seed sieves, an ample supply would have contaminated stocks of crop seed”，说明收获作物时它的种子会被一并带走"
          ],
          "locatingTip": "定位：题干关键词是 seeds 与 re-sow，第 11 段（K 段）出现 resow its seeds 这一独特动词短语，扫读时见到 resow 就停下。确定答案技巧：先看种子怎么活——原文说它的种子 cannot survive long in the soil（在土壤中无法长期存活），这解释了“为什么必须年年重播”；紧接着一句 “Each spring, the brome relied on farmers to resow its seeds”（每年春天雀麦草都靠农民重新播种）把结论说出来。两句构成“为什么需要重播”的完整因果链，与题干 needs to be harvested and re-sown to survive 一致，故为 TRUE。填答时要抓 relied on farmers 这一“依赖”关系，它正对应题干的 needs。",
          "analysis": "第 11 段（K 段）讲这种草难以重回野外：“Much like the once-common arable weeds, such as the corncockle, its seeds cannot survive long in the soil. Each spring, the brome relied on farmers to resow its seeds; in the days before weedkillers and advanced seed sieves, an ample supply would have contaminated stocks of crop seed.”（就像麦仙翁等昔日常见的农田杂草一样，它的种子在土壤里无法长期存活。每年春天，雀麦草都要靠农民重新播种它的种子；在还没有除草剂和先进种子筛的年代，它有足够多的种子会混进作物种子的库存里）。这里作者解释了这种草延续种群的特殊机制：种子不能像普通杂草那样在土中形成“种子库”，必须依赖一年一次的重新播种。而这批种子又是怎么被带走的？原文说是 contamination of crop seed（混入作物种子的库存）——也就是在农民收获、留种、再播种的过程中，它的种子被一并带到了下一季的田里。题干把这一链条概括为 “needs to be harvested and re-sown to survive”，其中 harvested 对应“随收获的作物种子一起被带走”，re-sown 对应 “relied on farmers to resow its seeds”，to survive 对应“种子在土里活不长、只能靠重播延续”，三点都有原文依据，故答案 TRUE。注意作者用 Each spring（每年春天）强调这是一种周期性、必须反复进行的依赖关系。",
          "traps": [
            "为什么不是 FALSE：原文不但承认它需要重播（relied on farmers to resow its seeds），还给出了原因（种子在土壤中无法长期存活），与题干完全一致，没有相反信息。",
            "为什么不是 NOT GIVEN：re-sow 这一动作在原文中有明确语句支撑，且交代了必要性，信息完整。题干多出来的 harvested 一层也不越界：原文说它的种子会污染并混入作物种子库存（contaminated stocks of crop seed），正是“随收割与留种环节被带走”的说法。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Only modern weedkillers prevent interrupted brome becoming an invasive pest.",
          "translation": "只有现代除草剂能阻止雀麦草变成入侵性害草。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "12",
            "quote": "Nonetheless, interrupted brome's reluctance to thrive independently may have some benefits. Any farmer willing to foster this unique contribution to the world's flora can rest assured that the grass will never become an invasive pest."
          },
          "synonyms": [
            "“prevent … becoming an invasive pest” 同义替换为原文的 “the grass will never become an invasive pest”（这种草永远不会成为入侵性害草）",
            "“Only modern weedkillers” 在原文找不到对应：原文给出的原因是 “interrupted brome's reluctance to thrive independently”（它本身不愿独立旺盛生长），与除草剂无关",
            "“can rest assured” 的依据是 reluctance to thrive independently，说明“不会成灾”源自植物自身的特性，而不是人为喷药"
          ],
          "locatingTip": "定位：题干关键词 invasive pest 是极强的定位词，全篇只在第 12 段（L 段）出现一次。确定答案技巧：先找到 “the grass will never become an invasive pest”，再往前读原因句 “interrupted brome's reluctance to thrive independently may have some benefits”。原文把“绝不会成为入侵性害草”归因于它自身生长能力弱、不愿独立繁衍，题干却把这个原因替换成 “Only modern weedkillers”，既换了原因，又加了绝对化的 Only，因此判 FALSE。注意 weedkillers 一词只在第 11 段（K 段）作为历史背景出现（in the days before weedkillers and advanced seed sieves …），讲的是当年种子混入库存的旧事，与本题的因果无关。",
          "analysis": "第 12 段（L 段）开头两句是本题的落点：“Nonetheless, interrupted brome's reluctance to thrive independently may have some benefits. Any farmer willing to foster this unique contribution to the world's flora can rest assured that the grass will never become an invasive pest.”（不过，雀麦草不愿独立旺盛生长这一点也许有它的好处。任何愿意培育这一世界植物区系独特贡献的农民都可以放心：这种草永远不会变成入侵性害草）。这段话给出的是一个明确的因果判断：它不会成灾，原因就是 reluctance to thrive independently（不愿独立疯长）。第 11 段还替这一判断打了两个补丁：它的种子在土里活不长（cannot survive long in the soil），而且成熟时也不肯轻易脱落种子（unwilling to release its seeds as they ripen），所以作者说它在今天的农业环境里连勉强存活都难（will struggle to survive even in optimal conditions）。综合来看，“不会成为入侵性害草”完全是植物自身生理弱点带来的结果；题干却写成 “Only modern weedkillers prevent …”，把功劳归给除草剂，并加上 Only 这一绝对化限定，两处都与原文不合，故判 FALSE。做题提醒：判断题中出现 only、solely、merely 这类排他性副词时，一定要回原文核对是否真有这种“唯一性”，本题的 only 就是错的。",
          "traps": [
            "为什么不是 TRUE：原文的原因写得非常清楚——its reluctance to thrive independently（不愿独自旺盛生长），所以绝不会变成入侵性害草；题干却把这份功劳给了 modern weedkillers，属于原因错位。此外 Only 的绝对化表述在原文也没有根据。",
            "为什么不是 NOT GIVEN：原文对“它会不会成为入侵性害草、以及为什么不会”都作了明确交代（will never become an invasive pest），信息完整且与题干给出的原因相矛盾，因此不能按未提及处理。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 人物观点匹配（A–F）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "identified interrupted brome as another species of brome.",
          "translation": "把雀麦草认定为另一种雀麦（brome）的类别。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "So close is the relationship that interrupted brome was originally deemed to be a mere variety of soft brome by the great Victorian taxonomist Professor Hackel."
          },
          "synonyms": [
            "“identified … as” 同义替换为原文的 “was originally deemed to be”（当初被认为），都是“对某物作出归类判断”",
            "“another species of brome” 对应原文的 “a mere variety of soft brome”（只不过是软雀麦的一个变种），即把它归入另一种雀麦之下",
            "“Professor Hackel” 在原文中由介词 by 引出，是这一判断的发出者：by the great Victorian taxonomist Professor Hackel"
          ],
          "locatingTip": "定位：选项人名 Professor Hackel 是大写专有名词，全篇只在第 7 段（G 段）出现一次，扫读大写词即可锁定。确定答案技巧：先抓题干的核心动作 identified … as（鉴定为某类），再到原文找与之对应的判断性表达 deemed to be（被认为）。原文说“两者关系如此之近，以致雀麦草最初被伟大的维多利亚时代分类学家 Hackel 教授认定只是软雀麦的一个变种（a mere variety of soft brome）”，句子由 by 引出动作发出者，正是 Hackel，故选 B。匹配题的要诀是“找动词、找动作发出者”，而不是只找关键词。",
          "analysis": "第 7 段（G 段）讨论这种草的来源：“Smith's research has attempted to answer the question of where the grass came from. His research points to mutation* from other weedy grasses as the most likely source. So close is the relationship that interrupted brome was originally deemed to be a mere variety of soft brome by the great Victorian taxonomist Professor Hackel.”（Smith 的研究试图回答这种草从何而来。他的研究指出，最可能的来源是从其他杂草类禾草变异而来。两者关系如此之近，以致雀麦草最初被伟大的维多利亚时代分类学家 Hackel 教授认定只是软雀麦的一个变种）。这里的过程与人物分工很清晰：先有“它由其他杂草变异而来”这一来源判断，随后是 Hackel 给出的分类判断——它属于软雀麦（soft brome）的范畴，不是独立类别。题干 “identified interrupted brome as another species of brome” 的落点就在这层“归入另一种雀麦”的判断上，句子的动作发出者（by … Professor Hackel）就是答案，故选 B。要注意与紧接其后的 Druce 作区分：Druce 做的是相反方向的事——把雀麦草从别的类别中独立出来。",
          "traps": [
            "为什么不是 C（George Claridge Druce）：Druce 的工作是说服同行承认它是一种独立物种（convinced his peers that it deserved its own status as a species），方向与“归入另一种雀麦之下”正好相反，他属于第 10 题。",
            "为什么不是 D（Joan Thirsk）或 E（Philip Smith）：Thirsk 研究的是驴喜豆等饲料作物传入英国的时间，Smith 是重新栽培这种草并追查其来源的人，两人都没有对雀麦草作出分类学上的鉴定。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "convinced others about the status of interrupted brome in the botanic world.",
          "translation": "说服他人接受雀麦草在植物学界的（物种）地位。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The 19th-century botanist George Claridge Druce took notes on the grass and convinced his peers that it deserved its own status as a species."
          },
          "synonyms": [
            "“convinced others” 同义替换为原文的 “convinced his peers”（说服了他的同行），others 与 his peers 对应",
            "“the status of interrupted brome in the botanic world” 同义替换为原文的 “that it deserved its own status as a species”（它应当享有作为独立物种的地位）",
            "“took notes on the grass” 说明 Druce 做了记录与整理工作，为说服同行提供了依据"
          ],
          "locatingTip": "定位：题干谓语 convinced 与原文 convinced his peers 原词同现，直落第 7 段（G 段）末两句；人名 George Claridge Druce 与动词 convinced 同处一句，命中即定。确定答案技巧：匹配人名题要抓动词及其宾语。原文的分工非常清楚——Hackel 把它降格成软雀麦的一个变种（第 9 题），Druce 则反过来 convince his peers that it deserved its own status as a species（说服同行承认它是独立物种），一降一升恰好对应第 9、10 两题。题干讲的是“说服他人、为它争取地位”，与 Druce 的行为严丝合缝，故选 C。",
          "analysis": "第 7 段（G 段）第四、五句写道：“The 19th-century botanist George Claridge Druce took notes on the grass and convinced his peers that it deserved its own status as a species. Despite growing up in poverty and being self-taught, Druce became the leading botanist of his time.”（19 世纪的植物学家 George Claridge Druce 为这种草做了记录，并说服同行们相信它应当拥有独立物种的地位。尽管出身贫寒、自学成才，Druce 后来成为他那个时代最杰出的植物学家）。这两句把 Druce 的贡献定位得很明确：不是发现它、不是栽培它，而是在分类学上为它“争取名分”——让当时的植物学界接受它是一个独立物种（its own status as a species）。题干 “convinced others about the status of interrupted brome in the botanic world” 正是对 convincing his peers（说服同行）与 deserved its own status as a species（应有独立物种地位）两句的合并改写，其中 in the botanic world 对应 his peers（植物学界同行），故选 C。做题时把第 9 题与第 10 题放在一起对读，Hackel 与 Druce 的“一降一升”是这段最工整的对照，能最大限度避免张冠李戴。",
          "traps": [
            "为什么不是 B（Professor Hackel）：Hackel 的判断是把它看作软雀麦的一个变种，属于“归并”而非“争取独立地位”，与题干方向相反，他对应的是第 9 题。",
            "为什么不是 F（Nathaniel Fiennes）：Fiennes 出版《Sainfoin Improved》推广的是驴喜豆的种植知识，对象是农民而非植物学界，与雀麦草的物种地位无关。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "found interrupted brome together with sainfoin.",
          "translation": "（其研究）发现雀麦草与驴喜豆一同出现。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "According to agricultural historian Joan Thirsk, the humble sainfoin and its companions were first noticed in Britain in the early 17th century."
          },
          "synonyms": [
            "“found … together with sainfoin” 是题干对原文 “the humble sainfoin and its companions were first noticed in Britain in the early 17th century” 的概括改写（原文只提驴喜豆及其伙伴作物，未提雀麦草），其中 companions（伙伴、同伴）即与驴喜豆一同出现的那批植物",
            "“found” 同义替换为原文的 “were first noticed”（首次被注意到）",
            "“agricultural historian Joan Thirsk” 是原文标注的信息来源：According to agricultural historian Joan Thirsk（据农业史学家 Joan Thirsk 所说）"
          ],
          "locatingTip": "定位：先找选项人名 Joan Thirsk，全篇只在第 8 段（H 段）第三句出现；题干另一关键词 sainfoin 也在同句，两个定位词在同一句会合，几乎不会走错。确定答案技巧：题干关键词是 sainfoin 与 together with（一同出现）。原文在交代雀麦草“偏爱和饲料作物同田生长”这条线索之后，紧接着引述农业史学家 Joan Thirsk 的说法——驴喜豆及其伙伴们（sainfoin and its companions）最早于 17 世纪初在英国被注意到。答案表给出的匹配对象是 D（ Joan Thirsk）。需要说明的是：原文并未直说 Thirsk 亲手采集到雀麦草与驴喜豆，题干属于对该段线索的概括性改写（她的农史记录标明驴喜豆何时进入英国，而雀麦草正是随之出现的伴生杂草）。本题以题库答案表的 D 为准。",
          "analysis": "第 8 段（H 段）在推算雀麦草出现的时间：“Where the grass came from may be clear, but the timing of its birth may be tougher to determine. A clue lies in its penchant for growing as a weed in fields shared with a fodder crop, in particular nitrogen-fixing legumes such as sainfoin, lucerne or clover. According to agricultural historian Joan Thirsk, the humble sainfoin and its companions were first noticed in Britain in the early 17th century. Seeds brought in from the Continent were sown in pastures to feed horses and other livestock.”（它源自何处也许已经清楚，但它何时诞生却更难确定。一条线索是：它偏爱作为杂草长在种有饲料作物的田里，尤其是驴喜豆、苜蓿、三叶草这类固氮豆科植物。据农业史学家 Joan Thirsk 所说，不起眼的驴喜豆及其伙伴最早于 17 世纪初在英国被人注意到。从大陆运来的种子被播在牧草地中喂养马匹和其他牲畜）。这里的逻辑是：既然雀麦草总是和驴喜豆同田出现，那么只要知道驴喜豆何时来到英国，就能反推雀麦草的出现时间——而这个时间正是由 Joan Thirsk 的记录提供的。需要说明的是：题干与原文并不完全吻合——Thirsk 的记录只说驴喜豆及其伙伴作物最早于 17 世纪初在英国被注意到，原文并没有“雀麦草与驴喜豆一同被发现”这样的句子。题干是对这条时间线索的概括改写，因雀麦草正是随驴喜豆等饲料作物出现的伴生杂草，题库答案把此项归给留下该记录的 Thirsk，即 D；考生若死抠字面容易选错，匹配题的正确做法是抓住“谁在哪条线索上留下了名字”。另外第 10 段（J 段）也提到 sainfoin became established（驴喜豆扎下根来）与雀麦草的进化相关，但那里的人名是 Smith，属于第 10 段语境，不要与本题混淆——本题必须选与“最早注意到驴喜豆在英国出现”对应的 D。",
          "traps": [
            "为什么不是 E（Philip Smith）：Smith 的贡献是把这种草在家里养了下来，并研究它的变异来源（His research points to mutation …），他没有做过驴喜豆传入时间的记录；第 10 段提到 sainfoin 的地方也把他与“进化时间推测”相连，而非“发现两者同生”。",
            "为什么不是 C（George Claridge Druce）：Druce 是 19 世纪的植物学家，为雀麦草做记录、争取物种地位，与 17 世纪驴喜豆入英的时间线索无关。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "helped farmers know that sainfoin is useful for enriching the soil.",
          "translation": "帮助农民知道驴喜豆对肥田有用。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "A bestseller of its day, Nathaniel Fiennes's Sainfoin Improved, published in 1671, helped to spread the word."
          },
          "synonyms": [
            "“helped farmers know” 同义替换为原文的 “helped to spread the word”（帮助把这套知识传播开）",
            "“useful for enriching the soil” 同义替换为上文的 “to serve as green manure and boost grain yields”（充当绿肥并提高粮食产量）",
            "“sainfoin” 在书名 “Sainfoin Improved” 中直接出现，署名的作者正是 Nathaniel Fiennes"
          ],
          "locatingTip": "定位：题干关键词 sainfoin 与土壤（soil / enrich），第 9 段（I 段）先讲豆科植物被引入轮作充当绿肥（green manure）并提高产量，紧接着提到一本畅销书 Nathaniel Fiennes's Sainfoin Improved。书名本身就含 sainfoin，定位一步到位。确定答案技巧：题目问“帮农民了解驴喜豆对土壤有益”的人，原文把“作绿肥、提高产量”这一实用知识与“这本书帮助传播（helped to spread the word）”放在相邻的两句里衔接，传播者就是书的作者 Nathaniel Fiennes，故选 F。注意人名以所有格形式出现（Nathaniel Fiennes's Sainfoin Improved），不要因为所有格而漏读；另外 “spread the word” 是“传播消息”的固定说法，正对应题干的 helped farmers know。",
          "analysis": "第 9 段（I 段）讲 17 世纪豆科作物如何被大规模推广：“Before long, however, the need to feed the parliamentary armies in Scotland, England and beyond was more pressing than ever. Farmers were forced to produce more bread, cheese and beer. By 1650, legumes were increasingly introduced into arable rotations to serve as green manure and boost grain yields. A bestseller of its day, Nathaniel Fiennes's Sainfoin Improved, published in 1671, helped to spread the word. With the advent of sainfoin, clover and lucerne, Britain's very own rogue grass had suddenly arrived.”（然而没过多久，为苏格兰、英格兰以及其他地方的议会军队供应食物的需要变得比以往任何时候都更迫切。农民被迫生产更多的面包、奶酪和啤酒。到 1650 年，豆科植物越来越多地被引入耕作轮作，充当绿肥并提高粮食产量。作为当时的畅销书，Nathaniel Fiennes 于 1671 年出版的《Sainfoin Improved》帮助推广了这一知识。随着驴喜豆、三叶草和苜蓿的出现，英国自己的野草突然登场了）。这段话的信息链是：豆科植物的用途是充当绿肥、提高产量（enriching the soil），一部畅销书把这套实用知识传播开来，而传播者即作者 Nathaniel Fiennes。题干 “helped farmers know that sainfoin is useful for enriching the soil” 正是对 “to serve as green manure and boost grain yields” 与 “helped to spread the word” 两处的合并改写，传播这套知识的人正是这本书的作者 Nathaniel Fiennes，故选 F。注意 green manure（绿肥）是本题“肥田 / 改良土壤”的关键替换词。",
          "traps": [
            "为什么不是 C（George Claridge Druce）或 A（A. M. Barnard）：Druce 与 Barnard 都与雀麦草的分类地位、标本采集有关，与驴喜豆的实用农艺知识传播无关。",
            "为什么不是 D（Joan Thirsk）：Thirsk 记录的是驴喜豆最早传入英国的时间（17 世纪初），解决的是“何时出现”的问题，而不是向农民推广它作绿肥的用处；她对应第 11 题。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "collected the first sample of interrupted brome.",
          "translation": "采集了雀麦草的第一份标本。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "10",
            "quote": "Although the credit for the discovery of interrupted brome goes to Miss A. M. Barnard, who collected the first specimens at Odsey, Bedfordshire, in 1849, the grass had probably lurked undetected in the English countryside for at least a hundred years."
          },
          "synonyms": [
            "“collected the first sample” 同义替换为原文的 “collected the first specimens”，sample 与 specimens 对应，均指标本",
            "“the discovery of interrupted brome” 对应原文的 “Although the credit for the discovery of interrupted brome goes to Miss A. M. Barnard”，说明发现之功归于她",
            "“1849” 是原文给出的采集年份，与题干所指“第一份标本”是同一事件"
          ],
          "locatingTip": "定位：题干关键词 first sample / collected，第 10 段（J 段）第一句即出现 collected the first specimens，且同句给出人名 Miss A. M. Barnard，一步锁定。确定答案技巧：匹配人名题应优先找动作的发出者。原文用固定搭配 “the credit for the discovery … goes to Miss A. M. Barnard, who collected the first specimens” 把“首次采集标本”的功劳明确归给 A. M. Barnard；句首的 Although 只是让步，用来补充“这种草可能已在英国默默存在了一百多年”，并不否定她作为发现者的身份，所以选 A。注意不要把状语 “at Odsey, Bedfordshire, in 1849” 误当成人名或地名选项。",
          "analysis": "第 10 段（J 段）首句写道：“Although the credit for the discovery of interrupted brome goes to Miss A. M. Barnard, who collected the first specimens at Odsey, Bedfordshire, in 1849, the grass had probably lurked undetected in the English countryside for at least a hundred years.”（尽管发现雀麦草的功劳归于 A. M. Barnard 小姐——她于 1849 年在贝德福德郡的 Odsey 采集了第一批标本——但这种草很可能已在英格兰乡间悄然存在、未被察觉至少一百年）。句子用 who 引导的非限定从属结构补充了 Barnard 的具体行为：collected the first specimens（采集第一批标本），地点 Odsey, Bedfordshire，时间 1849。题干 “collected the first sample of interrupted brome” 与之一一对应（sample 对 specimens，first 对 first），动作发出者即 Miss A. M. Barnard，故选 A。句首 Although 与后文 lurked undetected 只说明“她并非最早接触到这种草的人，而是最早采集并记录它的人”，并不影响答案。区分点提示：Barnard 是“首次采集标本”，Smith 则是 1963 年抢救性地保存了来自 Pampisford 的最后一批种子（第 4 段），两者在时间与性质上完全不同，不要混选。",
          "traps": [
            "为什么不是 E（Philip Smith）：Smith 是 1963 年从最后据点 Pampisford 保留种子并年复一年栽培它的人（第 4 段 D 段），他保存的是最后一批种子，而不是 1849 年的第一份标本。",
            "为什么不是 D（Joan Thirsk）：Thirsk 是研究饲料作物史的农业史学家，其记录对象是驴喜豆等作物，与标本采集无关。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
