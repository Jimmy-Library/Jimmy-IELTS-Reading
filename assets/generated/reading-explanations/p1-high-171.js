(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-171", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-171",
  "meta": {
    "examId": "p1-high-171",
    "title": "Fishbourne Roman Palace 罗马宫殿",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Fishbourne Palace was the first structure to be built on its site.",
          "translation": "菲什伯恩宫（Fishbourne Palace）是建在该遗址上的第一座建筑。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The first buildings to be erected on the site were constructed in the early part of the conquest in 43 AD."
          },
          "synonyms": [
            "“the first structure to be built” 与原文的 “The first buildings to be erected” 结构对应：structure 对应 buildings，to be built 对应 to be erected",
            "“on its site” 同义替换为原文的 “on the site”",
            "题干的主语是 Fishbourne Palace，而原文把 “the first buildings” 这一身份给了别的建筑（43 AD 的早期建筑），并说宫殿本体要到 “was constructed around 73–75 AD” 才建成，两者主语与时间都不一致"
          ],
          "locatingTip": "定位：题干关键词 first structure 与 site 都是通用词，真正好用的是“段落功能”——本题问“遗址上最早建成的是什么”，原文第 4 段整段就是一部建造史（43 AD 最早建成、60s AD 拆毁、随后石屋、73–75 AD 建宫，Russell 甚至推到 92 AD 之后），因此直接精读第 4 段首句即可。确定答案技巧：把原文首句的主语看清——“The first buildings to be erected on the site” 指的是 43 AD 的早期建筑，而不是宫殿；宫殿是在这些建筑被拆毁、并由一座石屋取代之后才建的。题干把“最早建成”这一头衔安到宫殿头上，与原文的建造顺序正好相反，属于事实矛盾，故判 FALSE。",
          "analysis": "原文第 4 段按时间顺序交代了遗址上建筑的更替过程：“The first buildings to be erected on the site were constructed in the early part of the conquest in 43 AD.”（最早建在该遗址上的建筑建于公元 43 年征服之初。）随后原文又说 “Later, two timber buildings were constructed”（后来建起两座木结构建筑），“These buildings were demolished in the 60s AD and replaced by a substantial stone house”（这些建筑在 60s AD 被拆毁，取而代之的是一座规模可观的石屋），而宫殿本体要到 “It has been suggested that the palace itself, incorporating the previous house in its south-east corner, was constructed around 73–75 AD” 才建成，Russell 博士甚至认为应晚至 92 AD 之后。可见“遗址上最早建成”的是 43 AD 的早期建筑，宫殿是后续阶段的产物。题干 “Fishbourne Palace was the first structure to be built on its site” 把宫殿说成第一座建筑，与原文完全相反，因此答案是 FALSE。做题提示：the first / the earliest / the only 这类绝对化表述是判断题的高发陷阱，本题的关键就是把 “The first buildings” 的先行词看清——它是 buildings（早期建筑），不是 palace。",
          "traps": [
            "为什么不是 TRUE：原文明确写 “The first buildings to be erected on the site were constructed in the early part of the conquest in 43 AD.”，把“最早建成”给了 43 AD 的早期建筑；宫殿本体的建造年代在 73–75 AD（或 92 AD 之后），远远晚于它们，所以题干不成立。",
            "为什么不是 NOT GIVEN：原文完整交代了遗址上各阶段建筑的先后顺序与年代（43 AD 最早、60s AD 木结构被拆、随后建石屋、73–75 AD 建宫殿），关于“谁最先建成”有明确信息且与题干相反，属于矛盾而非缺失，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Fishbourne Palace was renovated more than once.",
          "translation": "菲什伯恩宫被翻修过不止一次。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "The palace outlasted the original owner, whoever he was, and was extensively re-planned early in the 2nd century AD and subdivided into a series of smaller apartments."
          },
          "synonyms": [
            "“renovated” 同义替换为原文的 “re-planned” 与 “redevelopment”，都表示对建筑进行重新规划、改建",
            "“more than once” 同义替换为原文的多轮工程表述：“was extensively re-planned early in the 2nd century AD”“Further redevelopment was begun in the late 3rd century AD”，一次在 2 世纪初，另一次在 3 世纪末",
            "“Fishbourne Palace” 与原文的 “The palace”“the palace itself” 指同一座建筑"
          ],
          "locatingTip": "定位：题干的 renovated 与 palace 都是常用词，靠关键词难以一步命中，需要按“话题分布”找——讲宫殿历代改建的内容集中在第 1 段中部与第 6 段中部，两处都有 alterations / re-planned / redevelopment 这类词，扫读时只要盯住这些“工程类”动词即可。确定答案技巧：“不止一次”是数量判断，必须在原文里数一数有几轮工程：第 1 段说 “There were extensive alterations in the 2nd and 3rd centuries AD”，紧接着又说 “More alterations were in progress when the palace burnt down in around 270 AD”；第 6 段进一步补充 “was extensively re-planned early in the 2nd century AD”，随后 “Further redevelopment was begun in the late 3rd century AD”。2 世纪、3 世纪、焚毁前至少三轮，与题干 more than once 完全吻合，故判 TRUE。",
          "analysis": "原文关于宫殿多次改建的记载分散在第 1 段和第 6 段。第 1 段说：“There were extensive alterations in the 2nd and 3rd centuries AD, with many of the original black-and-white mosaic floors being overlaid with more sophisticated coloured ones, including a perfectly preserved mosaic of a dolphin in the north wing.”（公元 2、3 世纪有过大规模改建，许多原有的黑白马赛克地面被更精美的彩色马赛克覆盖，其中包括北翼那幅保存完好的海豚马赛克。）同段紧接着又写 “More alterations were in progress when the palace burnt down in around 270 AD”（还有更多改建正在进行时，宫殿于约 270 AD 被烧毁）。第 6 段的交代更为直接：“The palace outlasted the original owner, whoever he was, and was extensively re-planned early in the 2nd century AD and subdivided into a series of smaller apartments. Further redevelopment was begun in the late 3rd century AD, but these alterations were incomplete when the north wing was destroyed in a fire in around 270 AD.”（宫殿比最初的主人（无论他是谁）存在得更久，并在 2 世纪初被大规模重新规划，分割成一连串更小的套间。3 世纪末又开始进一步改建，但当北翼在约 270 AD 的一场大火中被毁时，这些改建尚未完成。）可见宫殿在其存续期间经历了 2 世纪与 3 世纪两轮（以及焚毁前一轮）改建工程，数量上明确“不止一次”。题干用 renovated more than once 概括这一系列 alterations / re-planned / redevelopment，与原文信息完全一致，因此答案是 TRUE。做题提示：遇到“次数、频率”类判断，要在原文中寻找表示累加的标记词（More、Further）与多个时间点，凡出现两个以上不同时段的工程记录，即可确认“不止一次”。",
          "traps": [
            "为什么不是 FALSE：原文多处记录改建：2 世纪与 3 世纪的大规模 alterations、2 世纪初的 extensively re-planned、3 世纪末的 Further redevelopment，工程不止一轮，与题干方向一致，没有可用来否定题干的表述。",
            "为什么不是 NOT GIVEN：原文不仅提到改建，还给出了具体时段与多轮表述（the 2nd and 3rd centuries AD、early in the 2nd century AD、the late 3rd century AD），信息充分而非缺失，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Fishbourne Palace was large in comparison with Roman palaces in Italy.",
          "translation": "与意大利的罗马宫殿相比，菲什伯恩宫规模很大。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In size, Fishbourne Palace would have been approximately equivalent to some of the great Roman palaces of Italy"
          },
          "synonyms": [
            "“Roman palaces in Italy” 同义替换为原文的 “the great Roman palaces of Italy”，对比对象完全一致",
            "“In size” 与原文的 “In size” 原词复现，说明比较的维度就是体量规模",
            "“was large in comparison with” 与原文的 “approximately equivalent to” 方向不一致：equivalent 表示“与之相当、不相上下”，而 large in comparison with 暗含“比对方更大、在对比中占优”"
          ],
          "locatingTip": "定位：题干的两个抓手是专有名词 Italy 与 Roman palaces，原文第 3 段末尾有一句专门谈体量：“In size, Fishbourne Palace would have been approximately equivalent to some of the great Roman palaces of Italy …”，看到 Italy 即可停下精读。确定答案技巧：本题考“比较的方向与程度”。原文用的词是 approximately equivalent（大致相当、规模相仿），只说二者体量接近，没有说谁更大；题干用的是 large in comparison with，这是一种“比较中占优”的表述，意思偏向“比意大利的宫殿更大”。equivalent（对等）与“更大”方向不同，因此按官方判分口径答案为 FALSE。另需注意原文后半句 “was by far the largest known Roman residence north of the European Alps”，它的比较范围是“阿尔卑斯山以北”，与题干中的意大利无关，不能当作支持题干的依据。",
          "analysis": "原文第 3 段倒数第二句为宫殿的体量定位：“In size, Fishbourne Palace would have been approximately equivalent to some of the great Roman palaces of Italy, and was by far the largest known Roman residence north of the European Alps, at about 500 feet (150 m) square.”（就规模而言，菲什伯恩宫与意大利一些宏伟的罗马宫殿大致相当，并且是欧洲阿尔卑斯山以北已知最大的罗马宅邸，约 500 英尺（150 米）见方。）题干 “Fishbourne Palace was large in comparison with Roman palaces in Italy” 字面意思是“与意大利的罗马宫殿相比，它很大”，这种 “large in comparison with” 的比较句式在语义上强调“比对方更大、在对比中更突出”；而原文给出的关系是 approximately equivalent（大致相当、不相上下），只承认二者体量接近，并未表示它更大。判断这类题必须盯住比较的方向与程度：equivalent、similar、as large as 都表示“对等”，不等于“更大”；题干在此把“相当”抬高成“更大”，与原文不一致，因此答案是 FALSE。此处答案以官方答案表为准（FALSE）。做题提示：原文后半句 “by far the largest known Roman residence north of the European Alps” 的比较范围是欧洲阿尔卑斯山以北，跟意大利宫殿无关；同时也要注意 approximately（大约）与 some of（其中一些）这两个限定词，原文并没有说它超越了所有意大利宫殿。",
          "traps": [
            "为什么不是 TRUE：原文只说 approximately equivalent to some of the great Roman palaces of Italy（与其中一些意大利的宏伟宫殿大致相当），equivalent 是“对等、相当”，并未说它比意大利的宫殿更大；题干用 large in comparison with 表达的是“更大”的比较结果，与原文不一致。",
            "为什么不是 NOT GIVEN：原文明确把菲什伯恩宫与意大利的罗马宫殿做了体量比较（In size … approximately equivalent to …），已经给出比较结论，不属于信息缺失，只是在程度上与题干不同，因此按矛盾判 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Research is continuing in the area close to Fishbourne Palace.",
          "translation": "在菲什伯恩宫附近的区域，研究仍在继续。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "A team of volunteers and professional archaeologists is involved in an ongoing archaeological excavation on the site of nearby, possibly military, buildings."
          },
          "synonyms": [
            "“Research is continuing” 同义替换为原文的 “is involved in an ongoing archaeological excavation”，ongoing 即“仍在进行中的”",
            "“in the area close to Fishbourne Palace” 同义替换为原文的 “on the site of nearby, possibly military, buildings”，nearby 与 close to 同义，指宫殿附近的地点",
            "“Research” 对应原文的 “archaeological excavation”，参与者是 “volunteers and professional archaeologists”（志愿者与专业考古学家）"
          ],
          "locatingTip": "定位：题干的 Research / continuing / area close to 都不够独特，最好的抓手是段末的收束句——讲“仍在进行的研究”这类内容通常出现在段落末尾。第 3 段最后一句正是 “A team of volunteers and professional archaeologists is involved in an ongoing archaeological excavation on the site of nearby, possibly military, buildings.” 确定答案技巧：抓住 ongoing（进行中的）这一信号词，它直接对应题干的 continuing；地点 nearby 对应 close to Fishbourne Palace，说明发掘地点就在宫殿旁边的建筑遗址上。研究在进行、地点在宫殿附近，两点都与题干吻合，故判 TRUE。",
          "analysis": "原文第 3 段末尾：“A team of volunteers and professional archaeologists is involved in an ongoing archaeological excavation on the site of nearby, possibly military, buildings.”（一支由志愿者和专业考古学家组成的团队正在对附近可能是军事用途的建筑遗址进行持续性的考古发掘。）题干 “Research is continuing in the area close to Fishbourne Palace” 包含两个信息点：其一，研究仍在继续，对应原文的 ongoing archaeological excavation，其中 ongoing 意为“持续进行的”，is involved in 表示团队正在参与这项工程；其二，地点在宫殿附近，对应原文的 nearby, possibly military, buildings——这些建筑遗址紧邻宫殿，且原文用 possibly（可能）表示其性质尚未确定，说明发掘仍在进行、尚未定论。两个信息点都与原文一致，因此答案是 TRUE。做题提示：ongoing、in progress、continuing、further study 这类词是判断题中表示“正在进行”的典型信号，看到 ongoing 就应联想到题干的 continuing；同时注意题干把原文的“考古发掘（excavation）”概括为 research，这是合理的同义替换，并非信息扩大。",
          "traps": [
            "为什么不是 FALSE：原文用 ongoing archaeological excavation 明确表示发掘工作仍在进行，参与者是志愿者加专业考古学家，没有任何“已经结束、已经停止”的相反表述，选 FALSE 无依据。",
            "为什么不是 NOT GIVEN：原文不仅说明有发掘，还交代了地点（nearby, possibly military, buildings，即宫殿附近的建筑遗址）、人员构成与进行状态，信息完整，属于已提及而非未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Researchers agree on the identity of the person for whom Fishbourne Palace was constructed.",
          "translation": "研究者们对菲什伯恩宫是为谁而建这一点意见一致。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "With regard to who lived in Fishbourne Palace, there are a number of theories."
          },
          "synonyms": [
            "“there are a number of theories” 与题干的 “Researchers agree” 相互冲突：存在“多种理论”正说明研究者并未取得一致意见",
            "“the identity of the person for whom Fishbourne Palace was constructed” 对应原文的 “who lived in Fishbourne Palace” 以及下文的 “was the residence of …”“it was built for …”，都是关于宫殿主人身份的讨论",
            "原文反复使用 “Another theory is that …”“Additional theories suggest that either … or …”“may have been”“has been suggested” 等不确定表达，与 agree（一致认同）在语气上正相反"
          ],
          "locatingTip": "定位：题干关键词是讨论宫殿主人身份的题目，原文第 5 段首句 “With regard to who lived in Fishbourne Palace, there are a number of theories.” 直接点题，一句锁定；随后出现的 Cunliffe、Cogidubnus、Sallustius Lucullus 都是围绕这一话题的专有名词。确定答案技巧：判断“是否一致”要看原文是给出一个结论还是多个说法。原文用 there are a number of theories 先声明“说法很多”，接着列出 Professor Cunliffe 的 Cogidubnus 说、“Another theory is that it was built for Sallustius Lucullus”，第 6 段又补上 “Additional theories suggest that either Verica … or Tiberius Claudius Catuarus”，前后至少四种互相竞争的说法并存，显然没有共识，故判 FALSE。",
          "analysis": "原文第 5 段首句是贯穿第 5、6 段讨论的纲领：“With regard to who lived in Fishbourne Palace, there are a number of theories.”（关于谁住在菲什伯恩宫，存在多种理论。）随后原文依次给出：Professor Cunliffe 认为该宫早期是当地酋长 Tiberius Claudius Cogidubnus 的住所（a local chieftain who supported the Romans）；“Another theory is that it was built for Sallustius Lucullus, a Roman governor of Britain in the late 1st century”（另一种理论认为它是为 1 世纪后期的罗马不列颠总督萨卢斯提乌斯·卢库卢斯所建）；第 6 段又写 “Additional theories suggest that either Verica, a British king of the Roman Empire in the years preceding the Claudian invasion, was the owner of the palace, or Tiberius Claudius Catuarus …”（还有其他理论认为主人或是不列颠王 Verica，或是 Tiberius Claudius Catuarus）。四位候选人的说法彼此不同，谁也没有被确认，而且原文大量使用 may have been、has been suggested、possibly 等不确定措辞，说明研究者对这一问题的判断仍属推测。题干说研究者 “agree on the identity of the person”（对主人的身份意见一致），与原文“众说纷纭”的状态直接对立，因此答案是 FALSE。做题提示：遇到 agree、certain、known for sure 这类词，要特别警惕——只要原文出现 multiple theories、some believe、it is not clear，就说明不存在一致意见。",
          "traps": [
            "为什么不是 TRUE：原文没有给出任何“一致结论”，反而用 there are a number of theories、Another theory、Additional theories 反复表明存在多种彼此竞争的说法（Cogidubnus、Lucullus、Verica、Catuarus），与“研究者意见一致”正相反。",
            "为什么不是 NOT GIVEN：原文不仅讨论了主人是谁，而且明确列出多种不同理论与多位候选人，等于正面回答了“是否存在一致意见”这一问题（答案是否定的），属于有明确信息且与题干矛盾，不是信息缺失。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Fishbourne Palace was burnt down by local people.",
          "translation": "菲什伯恩宫是被当地人烧毁的。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "More alterations were in progress when the palace burnt down in around 270 AD, after which it was abandoned."
          },
          "synonyms": [
            "“was burnt down” 同义替换为原文的 “burnt down in around 270 AD”，第 6 段另有 “was destroyed in a fire in around 270 AD” 与之呼应",
            "“by local people” 在原文中没有任何对应：原文只交代“被烧毁、被废弃”这一结果，从未说明火灾的起因或责任人",
            "原文第 2 段确实出现过 “Local people had long believed that a Roman palace once existed in the area.”，但那讲的是当地人对宫殿曾经存在的传说，与火灾的施动者无关"
          ],
          "locatingTip": "定位：题干关键词 burnt down 在原文第 1 段末尾以原词出现（第 6 段有同义表达 was destroyed in a fire），先扫到 burnt down 所在句即可。确定答案技巧：把题干拆成“事件”和“施动者”两部分。原文对“被烧毁”这一事件交代得很清楚，时间也有（in around 270 AD），但对 “by local people” 这一施动者没有任何说明；第 2 段出现的 local people 讲的是“他们长期以来相信这一带曾有罗马宫殿”的传说，与纵火毫无关系。事件存在、施动者缺失，正是 NOT GIVEN 的典型情形。",
          "analysis": "原文第 1 段末尾：“More alterations were in progress when the palace burnt down in around 270 AD, after which it was abandoned.”（还有更多改建正在进行时，宫殿于约 270 AD 被烧毁，之后便被废弃。）第 6 段也写 “these alterations were incomplete when the north wing was destroyed in a fire in around 270 AD”（当北翼在约 270 AD 的一场大火中被毁时，这些改建尚未完成）。两处都只交代了“宫殿（或其北翼）在一场大火中被烧毁”以及大致时间（约 270 AD），对火灾的起因、是否是人为纵火、由谁造成一概未提。题干却在“被烧毁”之外加上了施动者 “by local people”（被当地人烧毁），这层信息在原文中找不到任何依据。原文中出现 local people 的唯一位置是第 2 段：“Local people had long believed that a Roman palace once existed in the area.”（当地人长期以来一直相信这一带曾有一座罗马宫殿），那是在讲当地人的传说如何被考古证实，与火灾毫无关联。因此题干多出的施动者属于原文没有的信息，答案应为 NOT GIVEN。做题提示：判断题中若题干给原文的事件补上了“施动者、工具或动机”（by someone、with something、in order to），而原文只陈述“事情发生了”，多出来的那部分通常就是 NOT GIVEN 的落点；同时不可因为别处出现过题干词汇就认定有关，必须核对它所在的语境。",
          "traps": [
            "为什么不是 TRUE：原文只说宫殿（北翼）在约 270 AD 被一场大火烧毁，从未提到这场火是当地人造成或参与；题干把原文没有的施动者补进来，无从证实。",
            "为什么不是 FALSE：原文既没有否认火灾与当地人有关，也没有给出任何其他纵火者，只是完全未提及火灾起因与责任人。没有相反信息时按规则判 NOT GIVEN，而不是矛盾。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 笔记填空（NO MORE THAN TWO WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The first buildings on the site contained food for the 7 ________",
          "translation": "该遗址上最早的建筑里存放着供 ________ 食用的粮食。",
          "answer": "Roman army",
          "wordClass": "名词短语（两个词，专有名词性质的词组；位于介词 for 之后作宾语，表示粮食的享用者，按原文保留两词与大写形式）",
          "locating": {
            "paragraph": "1",
            "quote": "on the site of Roman army grain stores that had been established after the invasion during the reign of the Roman Emperor Claudius in 43 AD"
          },
          "synonyms": [
            "“contained food” 同义替换为原文的 “grain stores”：粮仓存粮，grain（谷物）即 food，stores 指存放粮食的建筑",
            "“The first buildings on the site” 对应原文的 “the site of Roman army grain stores”，指宫殿动工之前该处已有、年代更早的仓房",
            "空格所需的对象在原文中作定语：“Roman army grain stores” 即“罗马军队的粮仓”，粮仓所服务的对象就是 the Roman army"
          ],
          "locatingTip": "定位：笔记栏目 Construction 的第一条讲“遗址上最早的建筑”，对应原文第 1 段讲宫殿来历的那一句——宫殿建在 “Roman army grain stores” 的旧址上。注意不要误用第 4 段的 “The first buildings to be erected on the site … in 43 AD.”（那句只给年代、不给用途），本题“存放食物”的线索指向第 1 段的 grain stores。确定答案技巧：题干 “contained food” 与原文 grain stores 对应（grain 即粮食），粮仓为谁服务则由其前置定语给出——Roman army；按原文两词照写 Roman army，首字母大写，不要写成 Romans、the army，也不要加冠词。",
          "analysis": "原文第 1 段第二句交代了宫殿的由来：“This large palace was built in the 1st century AD, around thirty years after the Roman conquest of Britain, on the site of Roman army grain stores that had been established after the invasion during the reign of the Roman Emperor Claudius in 43 AD.”（这座大型宫殿建于公元 1 世纪，即罗马征服不列颠约三十年之后，位置正是罗马军队在 43 AD 克劳狄乌斯皇帝统治时期入侵之后设立的粮仓旧址。）笔记第一条“遗址上最早的建筑里存放着供 ___ 食用的粮食”，其中“最早的建筑”对应 grain stores（粮仓，即宫殿修建前该地已存在的建筑），“粮食”对应 grain；而 grain stores 前的定语 Roman army 说明这些军粮是供罗马军队使用的，因此答案是 Roman army。同义链条是：food 对应 grain，contained 对应 stores（储粮之处），故空格填的正是粮仓所服务的对象 Roman army。词数恰好两个，符合 NO MORE THAN TWO WORDS AND/OR A NUMBER 的限制。做题提示：第 4 段也出现过 “The first buildings to be erected on the site”，但它只提供年代（43 AD），而本题的落点是“存放什么、为谁存放”，必须回到第 1 段找 grain stores 才能确定答案。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "The palace building surrounded 8 ________",
          "translation": "宫殿建筑环绕着 ________。",
          "answer": "formal gardens",
          "wordClass": "名词短语（两个词；在及物动词 surrounded 之后作宾语，其中 formal 为形容词、gardens 为复数名词，按原文照抄）",
          "locating": {
            "paragraph": "1",
            "quote": "The rectangular palace was built around formal gardens, the northern half of which has been reconstructed."
          },
          "synonyms": [
            "“surrounded” 同义替换为原文的 “was built around”，built around 即“围绕……修建”",
            "“The palace building” 同义替换为原文的 “The rectangular palace”，指同一座宫殿主体",
            "“formal gardens” 在原文中原词复现：“built around formal gardens”"
          ],
          "locatingTip": "定位：题干关键词 surrounded 与 palace 都是通用词，最有效的办法是直奔第 1 段中描述宫殿布局的那一句。确定答案技巧：原文 “The rectangular palace was built around formal gardens” 中 built around 与题干 surrounded 同义，介词 around 后的宾语 formal gardens 就是被宫殿环绕的对象；注意紧随其后的定语从句 “the northern half of which has been reconstructed” 仍在修饰 formal gardens（讲花园北半部已被复原），不是新的答案点。答案两个词，按原文形式写 formal gardens。",
          "analysis": "原文第 1 段第三句：“The rectangular palace was built around formal gardens, the northern half of which has been reconstructed.”（这座长方形宫殿围绕规整的花园修建，花园的北半部已被复原。）题干把原文的主动结构 “the palace was built around X” 改写成 “The palace building surrounded X”，其中 surrounded 对应 built around，其宾语就是 formal gardens（规整的花园）。答案词数为两个（形容词 formal 加复数名词 gardens），与原文完全一致，直接照抄即可。注意本句后半的 “the northern half of which has been reconstructed” 只是补充说明花园现状（北半部已复原），不属于答案；也不要因为“花园被重建”而联想到第 7 段的 “The gardens have been replanted using authentic plants from the Roman period.”，那句讲的是现代重新栽种植物，与本题“宫殿环绕着什么”无关。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "In the 2nd and 3rd centuries colour was added to the 9 ________ of the palace.",
          "translation": "在 2 世纪和 3 世纪，宫殿的 ________ 上被加上了颜色。",
          "answer": "mosaic floors",
          "wordClass": "名词短语（两个词，复数名词短语；位于定冠词 the 与介词短语 of the palace 之间，其中 mosaic 为名词作前置定语，floors 为核心名词）",
          "locating": {
            "paragraph": "1",
            "quote": "many of the original black-and-white mosaic floors being overlaid with more sophisticated coloured ones"
          },
          "synonyms": [
            "“colour was added to” 同义替换为原文的 “being overlaid with more sophisticated coloured ones”，即用带颜色的马赛克覆盖原来的地面，等于“给……加上颜色”",
            "“In the 2nd and 3rd centuries” 与原文的 “in the 2nd and 3rd centuries AD” 完全对应",
            "“the … of the palace” 对应原文的 “mosaic floors … in the north wing”，指宫殿的地面部分"
          ],
          "locatingTip": "定位：笔记的时间信息 2nd and 3rd centuries 在原文第 1 段以 “in the 2nd and 3rd centuries AD” 原样出现，属于一步到位的年代定位词。确定答案技巧：原文说这一时期的改建体现为 “many of the original black-and-white mosaic floors being overlaid with more sophisticated coloured ones”，即原来的黑白马赛克地面被更精致的彩色马赛克覆盖；“被加上颜色的对象”就是 mosaic floors（马赛克地面）。把 overlaid with coloured ones 抽象成 colour was added to，正是题干对原文的改写。答案两个词，按原文顺序写 mosaic floors。",
          "analysis": "原文第 1 段第四句：“There were extensive alterations in the 2nd and 3rd centuries AD, with many of the original black-and-white mosaic floors being overlaid with more sophisticated coloured ones, including a perfectly preserved mosaic of a dolphin in the north wing.”（公元 2、3 世纪有过大规模改建，许多原有的黑白马赛克地面被更精美的彩色马赛克覆盖，其中包括北翼那幅保存完好的海豚马赛克。）笔记第三条“在 2 世纪和 3 世纪，宫殿的 ___ 上被加上了颜色”，对应关系为：时间 2nd and 3rd centuries 与原文相同；added colour 对应 overlaid … with coloured ones（用带颜色的马赛克覆盖黑白地面）；被覆盖、被“上色”的对象则是 mosaic floors。因此答案是 mosaic floors，两词，复数形式按原文保留。注意不要填 mosaic（原文空格处指向的是被覆盖的地面这一实体，即 floors）；也不要填 coloured ones（那是覆盖上去的新马赛克，与题干“被加上颜色的对象”正好相反）。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "The first part of the palace to be found was part of a 10 ________",
          "translation": "宫殿最先被发现的部分，是一段 ________ 的一部分。",
          "answer": "wall",
          "wordClass": "名词（单数；空格前有不定冠词 a、后接句末，需填单数可数名词，一个词）",
          "locating": {
            "paragraph": "2",
            "quote": "after workmen had accidentally uncovered a wall while they were laying a water main"
          },
          "synonyms": [
            "“The first part of the palace to be found” 同义替换为原文的 “workmen had accidentally uncovered a wall”：uncovered 即“发掘出来”，accidentally 强调这是无意中的首次发现",
            "“was part of a …” 对应原文 uncovered 的宾语 “a wall”，即被挖出的建筑构件",
            "对比宫殿的其他构件（a monumental entrance、colonnaded fronts 等），只有 “a wall” 是被偶然挖出、最早被发现的"
          ],
          "locatingTip": "定位：笔记栏目 Discovery 提示本题出在“发现经过”处，原文第 2 段讲 1960 年考古学家 Barry Cunliffe 首次系统发掘的缘起，其中 “workmen had accidentally uncovered a wall while they were laying a water main” 就是“最先被发现的东西”。确定答案技巧：题干问 “The first part of the palace to be found”，原文用 accidentally uncovered（无意中挖出）且发生在系统发掘之前，说明它是第一处被发现的遗迹，其宾语 a wall 即答案，填单数名词 wall。不要误填 workmen（发现者）、water main（施工项目）或 museum（那是后来为保护遗迹而建，对应第 13 题）。",
          "analysis": "原文第 2 段：“However, it was not until 1960 that the archaeologist Barry Cunliffe of Oxford University first systematically excavated the site, after workmen had accidentally uncovered a wall while they were laying a water main.”（直到 1960 年，牛津大学的考古学家 Barry Cunliffe 才首次对该遗址进行系统发掘，此前工人在铺设自来水管时无意中挖出了一道墙。）笔记说“宫殿最先被发现的部分是一段 ___”，正对应工人在施工时无意挖出的 a wall：它先于 1960 年的系统发掘出现，是遗址上第一处被发现的宫殿遗迹，故填 wall。题干 “was part of a 10 ___” 的意思是“当时被发现的只是某段墙的一部分”，与原文的 a wall 并不冲突，空格只需填名词原形 wall 一个词，不加冠词或修饰语。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Sallustius Lucullus - he may have lived there until approximately 11 ________ AD.",
          "translation": "萨卢斯提乌斯·卢库卢斯（Sallustius Lucullus）——他可能在那里住到大约公元 ________ 年。",
          "answer": "93",
          "wordClass": "数字（年份数字；位于 approximately 之后、AD 之前，只需写数字本身，不加 AD、不加 century、不加年份以外的词）",
          "locating": {
            "paragraph": "5",
            "quote": "the Roman historian Suetonius records that Lucullus was executed by the Emperor Domitian in or shortly after 93 AD"
          },
          "synonyms": [
            "“lived there until approximately” 与原文的 “in or shortly after 93 AD” 对应：卢库卢斯在该年或此后不久被处死，其居住时间的下限即约 93 年",
            "“Sallustius Lucullus” 在原文中原词复现：“Another theory is that it was built for Sallustius Lucullus, a Roman governor of Britain in the late 1st century”",
            "原文的推测语气 “may have been in use for only a few years” 与题干的 “may have lived there until …” 一致，都表明这是基于铭文与断代的推断"
          ],
          "locatingTip": "定位：笔记里 Sallustius Lucullus 是人名，原文第 5 段后半段专讲这一理论，扫到 Lucullus 后找与“时间”相关的句子即可，即 “the Roman historian Suetonius records that Lucullus was executed by the Emperor Domitian in or shortly after 93 AD”。确定答案技巧：题干 “he may have lived there until approximately ___ AD” 问他住到什么时候为止；原文给出的关键时间点是他被处死的时间（93 AD 或此后不久）。一个人被处死后自然不可能继续住在宫殿里，因此居住时间的下限就是约 93 年。答案是纯数字 93，AD 已在题干中给出；不要写成 92（那是 Russell 对宫殿建造年代的推断，见第 4 段），也不要写 late 1st century（那是他的官职年代，范围太宽）。",
          "analysis": "原文第 5 段在讨论宫殿主人时提出卢库卢斯一说：“Another theory is that it was built for Sallustius Lucullus, a Roman governor of Britain in the late 1st century, who may have been the son of the British prince Adminius. Two inscriptions recording the presence of Lucullus have been found in Chichester, and the redating by Miles Russell suggests that, if the palace was designed for Lucullus, then it may have been in use for only a few years, as the Roman historian Suetonius records that Lucullus was executed by the Emperor Domitian in or shortly after 93 AD.”（另一种理论认为它是为 1 世纪后期的罗马不列颠总督萨卢斯提乌斯·卢库卢斯所建，他可能是英国王子 Adminius 之子。奇切斯特曾发现两处记录卢库卢斯在场的铭文；迈尔斯·拉塞尔的重新断代表明，若宫殿是为卢库卢斯而设计，那么它可能只使用了几年，因为罗马史学家苏埃托尼乌斯记载卢库卢斯在 93 AD 或此后不久被皇帝图密善处死。）笔记说“他可能在那里住到大约 ___ AD”，问的正是其居住时间的下限，而原文给出的关键时间点就是他去世（被处死）的时间 93 AD，因此空格填数字 93。原文同时提供了 “may have been in use for only a few years” 这一辅助推断：若宫殿确为他所建、而他在 93 年即被处死，那么使用时间只有几年，与“住到约 93 年”相符。注意题干已含 AD，答案只写数字；文中其他段落出现的年代（第 1 段的 43 AD 入侵、第 4 段的 73–75 AD 建宫推断与 92 AD 之后）都是别的事件，不要混用。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Catuarus - his 12 ________ was found there.",
          "translation": "卡图阿鲁斯（Catuarus）——他的 ________ 在那里被发现。",
          "answer": "ring",
          "wordClass": "名词（单数；空格前有物主代词 his，故填单数名词；填两个词 gold ring 亦被接受）",
          "locating": {
            "paragraph": "6",
            "quote": "Tiberius Claudius Catuarus, following the recent discovery of a gold ring belonging to him"
          },
          "synonyms": [
            "“his” 同义替换为原文的 “belonging to him”，都表示该物品属于 Catuarus",
            "“was found there” 同义替换为原文的 “the recent discovery”，即“最近被发现”",
            "“Catuarus” 在原文中原词复现：“Tiberius Claudius Catuarus, following the recent discovery of a gold ring belonging to him”"
          ],
          "locatingTip": "定位：笔记中的人名 Catuarus（原文全名 Tiberius Claudius Catuarus）只出现在第 6 段首句，是极易命中的专有名词。确定答案技巧：题干 “his ___ was found there” 问发现的是什么物品，原文 “the recent discovery of a gold ring belonging to him” 中 discovery 的宾语是 a gold ring，故答案可以是 ring（指向物品本身的核心名词）或 gold ring（含修饰语），两者都在答案表的可接受范围内；由于笔记里 his 已承担“属于他的”这一信息，主答案取 ring 一个词最为利落。",
          "analysis": "原文第 6 段开头：“Additional theories suggest that either Verica, a British king of the Roman Empire in the years preceding the Claudian invasion, was the owner of the palace, or Tiberius Claudius Catuarus, following the recent discovery of a gold ring belonging to him.”（还有其他理论认为宫殿的主人或是克劳狄入侵前数年间罗马帝国治下的一位不列颠国王 Verica，或是 Tiberius Claudius Catuarus——这是在该地最近发现了一枚属于他的金戒指之后提出的。）笔记 “Catuarus - his ___ was found there” 与原文信息点一一对应：belonging to him 对应 his，the recent discovery 对应 was found，被发现的物品是 a gold ring。因此空格可填 ring 或 gold ring（答案表两种都接受），主答案按答案表首项写 ring。填答提示：这类“物品加发现”的题要抓住 discovery 后面的名词短语中心词；若写 gold ring 同样正确，但注意总词数不能超过两个，也不要加冠词 a。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "A 13 ________ has been built on the site to help protect it.",
          "translation": "该遗址上已建起一座 ________ 以帮助保护它。",
          "answer": "museum",
          "wordClass": "名词（单数；空格前有不定冠词 A、后接 has been built，需填单数名词，一个词；填两个词 modern museum 亦被接受）",
          "locating": {
            "paragraph": "7",
            "quote": "A modern museum has been built by the Sussex Archaeological Society, incorporating most of the visible remains, including one wing of the palace."
          },
          "synonyms": [
            "“has been built on the site” 与原文的 “has been built by the Sussex Archaeological Society, incorporating most of the visible remains” 对应，built on the site 即建于遗址之上",
            "“to help protect it” 同义替换为原文的 “incorporating most of the visible remains”：把遗迹纳入馆内正是保护手段",
            "第 2 段另有交叉印证：“a museum was erected to preserve some of the remains”，其中 to preserve 与题干 to help protect 同义"
          ],
          "locatingTip": "定位：笔记栏目是 Present Day，直接跳到原文末段（第 7 段），首句即讲现代博物馆的建造，无需通读全文。确定答案技巧：题干 “A ___ has been built on the site to help protect it” 与原文 “A modern museum has been built by the Sussex Archaeological Society, incorporating most of the visible remains” 逐项对应：has been built 原词复现，incorporating most of the visible remains 就是“保护”的具体做法，故空格填 museum（写全 modern museum 亦可）；第 2 段 “a museum was erected to preserve some of the remains” 可作为交叉印证。注意不要填 Sussex Archaeological Society（那是建造者，位于 by 之后）。",
          "analysis": "原文第 7 段：“A modern museum has been built by the Sussex Archaeological Society, incorporating most of the visible remains, including one wing of the palace. The gardens have been replanted using authentic plants from the Roman period.”（苏塞克斯考古学会建起了一座现代博物馆，把大部分可见遗迹（包括宫殿的一翼）纳入其中；花园也已用罗马时期的原生植物重新栽种。）笔记最后一条“遗址上已建起一座 ___ 以帮助保护它”，与首句严丝合缝：A modern museum has been built 对应题干的 A … has been built，incorporating most of the visible remains 说明建馆的目的是保护并展示遗迹，与题干 to help protect it 同义。因此答案填 museum（答案表也接受 modern museum）。此外第 2 段还提到 “a museum was erected to preserve some of the remains”，虽指早期为保存发掘所得而建的馆舍，但同样以 museum 为核心词，可为答案提供印证。填写时填一个词 museum 即可，首字母大小写按原文小写，不超词数限制。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
