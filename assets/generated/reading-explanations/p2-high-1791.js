(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-1791", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-1791",
  "meta": {
    "examId": "p2-high-1791",
    "title": "The Lost City 失落之城",
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
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "The reason why various investigative methods are introduced",
          "translation": "引入多种调查方法的原因。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Dr Summers quickly realised it would take far too long to excavate the site using traditional techniques alone. So he decided to use modern technology as well to map the entire site, both above and beneath the surface"
          },
          "synonyms": [
            "“various investigative methods” 同义替换为原文的 “modern technology as well”，即除了传统技术之外增用的多种调查手段",
            "“the reason why … are introduced” 同义替换为原文的 “it would take far too long to excavate the site using traditional techniques alone. So he decided to use modern technology”，So 引出采用新手段的原因",
            "“investigative methods” 还对应原文的 “traditional techniques”，原文把传统技术作为对照，说明为何要改用新方法"
          ],
          "locatingTip": "定位：题干没有专有名词，只能抓抽象词 investigative methods 与 reason。全文只有第 2 段（B 段）在解释调查方法为何被引入：先讲遗址面积大、传统发掘太慢，再讲因此决定使用现代技术。确定答案技巧：段落信息匹配题的题干若问“原因”，要找原因信号词（So、because、therefore、the reason）。本段用 So he decided 直接把“太慢”与“改用现代技术”连成因果，题干 the reason why various investigative methods are introduced 正是这句话的概括。",
          "analysis": "第 2 段（B 段）先交代难度：“Excavating the ruins is a challenge because of the vast area they cover. The 7 km perimeter walls run around a site covering 271 hectares.”（遗址面积巨大，发掘是难题：7 公里的围墙圈出 271 公顷的场址）。随后给出结论：“Dr Summers quickly realised it would take far too long to excavate the site using traditional techniques alone. So he decided to use modern technology as well to map the entire site, both above and beneath the surface, to locate the most interesting areas and priorities to start digging.”（Summers 博士很快意识到，仅用传统技术发掘该遗址耗时太长。于是他决定同时使用现代技术来测绘整个遗址的地上与地下情况，以便找出最值得发掘的重点区域与优先次序）。题干问的是“引入各种调查方法的原因”，而这段话恰恰给出了原因（传统方法耗时过长）与做法（加用现代技术、测绘地上与地下），逻辑与题干完全对应。其余段落分别讲具体的测绘技术（C 段航空摄影、D 段地磁测量、F 段电阻率）或测绘结果（G 段），都不是在解释“为什么引入这些方法”，故不选。",
          "traps": []
        },
        {
          "questionId": "q15",
          "questionNumber": 15,
          "stem": "An example of an unexpected discovery",
          "translation": "一个意外发现的例子。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "When we started to excavate we were staggered to discover that the walls were made entirely from stone and that the gate would have stood at least ten metres high."
          },
          "synonyms": [
            "“unexpected discovery” 同义替换为原文的 “we were staggered to discover”，staggered 表示大为震惊、出乎意料",
            "“an example” 同义替换为原文的 “One surprise came when they dug out one of the gates in the defensive walls”，即以城门发掘这一具体事例说明意外",
            "“discovery” 同义替换为原文的 “to discover”，并与 “surprise” 呼应"
          ],
          "locatingTip": "定位：题干关键词是 example 与 unexpected discovery，需要找带有情感色彩的事例。第 7 段（G 段）出现 One surprise came 与 staggered to discover，情感词密集，锁定该段。确定答案技巧：段落信息匹配题中，“unexpected”“surprise”“surprisingly”这类词往往是直给的定位信号；本题除 surprise 外还有 staggered（震惊）与之呼应，两处都指向 G 段。",
          "analysis": "第 7 段（G 段）先说明遥感的作用，随后写道：“One surprise came when they dug out one of the gates in the defensive walls.”（当他们挖开防御墙的一道城门时，出现了一个意外发现），紧接着引用 Summers 博士的话：“Our observations in early seasons led us to assume that we were looking at a stone base from a mudbrick city wall, such as would be found at most other cities in the Ancient Near East,” … “When we started to excavate we were staggered to discover that the walls were made entirely from stone and that the gate would have stood at least ten metres high.”（早先几季的观察使我们以为看到的只是像古代近东其他城市那样、土砖城牆下的石基。开始发掘后我们震惊地发现，整道墙全部由石头砌成，城门至少高达十米）。原文用 One surprise came 与 were staggered to discover 两处表达意外，又用原本以为（assume）与实际发现（discover）的落差构成具体的“意外发现”事例，与题干完全吻合。其余段落都是在讲技术原理或数据（C、D、E、F 段）或研究缘起（A、B 段），没有意外发现的事例。",
          "traps": []
        },
        {
          "questionId": "q16",
          "questionNumber": 16,
          "stem": "The methods to survey the surface of the site from above",
          "translation": "从空中勘测遗址地表的方法。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In 1993, Dr Summers hired a special hand-held balloon with a remote-controlled camera attached. He walked over the entire site holding the balloon and taking photos."
          },
          "synonyms": [
            "“survey the surface of the site from above” 同义替换为原文的 “taking photos” 与 “a jigsaw of aerial photographs”，航空摄影即从空中勘测地表",
            "“methods” 同义替换为原文的 “a special hand-held balloon with a remote-controlled camera attached” 与 “a hot-air balloon”，是两种具体的空中平台",
            "“from above” 对应原文的 “floated over the site”，即在遗址上方飞行拍摄"
          ],
          "locatingTip": "定位：题干关键词是 from above 与 survey，需要在原文找“从空中拍摄”的描写。第 3 段（C 段）出现 hand-held balloon、remote-controlled camera、hot-air balloon 与 aerial photographs，全部是空中作业，锁定该段。确定答案技巧：抓住 aerial（航空的）这个词最有效，它是“从上方勘测”的同义标志；同时本段的 take photos 与 take pictures 也提示这是测绘地表的方法。",
          "analysis": "第 3 段（C 段）集中描写空中测绘：“In 1993, Dr Summers hired a special hand-held balloon with a remote-controlled camera attached. He walked over the entire site holding the balloon and taking photos. Then one afternoon, he rented a hot-air balloon and floated over the site, taking yet more pictures. By the end of the 1994 season, Dr Summers and his team had a jigsaw of aerial photographs of the whole site.”（1993 年，Summers 博士租用一种带遥控相机的特制手持气球，他提着气球走遍整个遗址拍照；后来某个下午他又租了热气球，飘在遗址上方拍了更多照片。到 1994 年季末，团队已拼出整个遗址的航空照片图）。原文用气球与热气球两种平台、aerial photographs 这一结果词，明确对应题干 the methods to survey the surface of the site from above。需要区分的是：第 4 段（D 段）与第 6 段（F 段）讲的是探测地下的磁力法与电阻率法（sub-surface），不是勘测地表，故不选。",
          "traps": []
        },
        {
          "questionId": "q17",
          "questionNumber": 17,
          "stem": "The reason why experts want to study the site",
          "translation": "专家想研究该遗址的原因。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Many respected archaeologists believe these are the remains of the fabled city of Pteria, the sixth-century BC stronghold of the Medes that the Greek historian Herodotus described in his famous work The Histories."
          },
          "synonyms": [
            "“experts” 同义替换为原文的 “Many respected archaeologists”",
            "“the reason why … want to study the site” 同义替换为原文的 “these are the remains of the fabled city of Pteria”，即该遗址被认为是传说中名城的遗址，这正是研究价值所在",
            "“the site” 对应原文的 “the ruins of an enormous city”，指同一处遗址"
          ],
          "locatingTip": "定位：题干关键词是 experts 与 study the site。第 1 段（A 段）交代遗址的地理位置、规模与学术价值，并点出许多著名考古学家的判断，是全篇的“研究背景”，锁定该段。确定答案技巧：段落信息匹配题中，“原因”常通过价值判断句体现。本段用 Many respected archaeologists believe these are the remains of the fabled city of Pteria 说明这处遗址之所以值得研究，是因为它可能就是希罗多德记载的 Pteria 城。",
          "analysis": "第 1 段（A 段）先写遗址的地貌与规模：“The low granite mountain, known as Kerkenes Dag, juts from the northern edge of the Cappadocian plain in Turkey. Sprawled over the mountainside are the ruins of an enormous city, contained by crumbling defensive walls seven kilometers long.”（土耳其卡帕多西亚平原北缘耸立着一座低矮的花岗岩山 Kerkenes Dag，山坡上铺展着一座巨大城市的废墟，四周环绕着七公里长、正在崩塌的防御墙）。随后给出研究价值的核心判断：“Many respected archaeologists believe these are the remains of the fabled city of Pteria, the sixth-century BC stronghold of the Medes that the Greek historian Herodotus described in his famous work The Histories.”（许多受人尊敬的考古学家认为，这些遗存就是传说中的城市 Pteria，即公元前六世纪米底人的要塞，希腊历史学家希罗多德曾在名著《历史》中描述过它）。正因为遗址被认定可能是希罗多德笔下的名城，考古学家才有研究它的理由，这与题干 the reason why experts want to study the site 完全对应。第 2 段（B 段）虽然也提到研究，但讲的是“怎样研究”（发掘与测绘的困难与方法），不是研究的动机。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 18–25 摘要填空（Choose NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 18,
        "end": 25
      },
      "items": [
        {
          "questionId": "q18",
          "questionNumber": 18,
          "stem": "To begin with, experts took photos of the site from the ground and then from a distance in a 18 ________.",
          "translation": "起初，专家先从地面拍摄遗址照片，随后又坐在 ________ 里从远处拍摄。",
          "answer": "hot-air balloon",
          "wordClass": "名词短语（复合名词，由 hot 与 air 用连字符连接后修饰 balloon，作介词 in 的宾语；NO MORE THAN THREE WORDS，保留原形）",
          "locating": {
            "paragraph": "3",
            "quote": "Then one afternoon, he rented a hot-air balloon and floated over the site, taking yet more pictures."
          },
          "synonyms": [
            "“took photos of the site from the ground” 同义替换为原文的 “He walked over the entire site holding the balloon and taking photos”",
            "“then from a distance” 同义替换为原文的 “Then one afternoon … floated over the site”，飘在遗址上方即从远处高处拍摄",
            "“took photos” 同义替换为原文的 “taking yet more pictures”，photos 与 pictures 同义"
          ],
          "locatingTip": "定位：摘要有明确的顺序信号 To begin with 与 then，对应原文第 3 段（C 段）中“先拿手持气球步行拍照、后来改乘热气球”的先后叙述，看到 Then one afternoon 即可确定空格所在。确定答案技巧：题目问“在什么里面从远处拍摄”，需要填一个载人装置的名词。原文写 he rented a hot-air balloon and floated over the site，rented 与 floated over 正说明他是乘着热气球从高空取景，故填 hot-air balloon。注意词数上限为三个词，hot-air balloon 恰好三个词，不能缩写成 balloon（会丢掉关键信息）或写成 a hot-air balloon（多出冠词）。",
          "analysis": "第 3 段（C 段）：“In 1993, Dr Summers hired a special hand-held balloon with a remote-controlled camera attached. He walked over the entire site holding the balloon and taking photos. Then one afternoon, he rented a hot-air balloon and floated over the site, taking yet more pictures.”原文把拍摄分成两个阶段：先是提着带遥控相机的手持气球步行拍摄（即摘要求的 from the ground），随后是租热气球从遗址上方拍摄（即摘要求的 from a distance）。题干用 in a [18] 设空，说明答案是一种可搭乘的装置，原句中 rented a hot-air balloon and floated over the site 正是答案所在。词性上，hot-air 是由两个词用连字符构成的复合定语修饰 balloon，整体作为专有概念性的名词短语填入；注意题目限制 NO MORE THAN THREE WORDS，hot-air balloon 符合上限。",
          "traps": []
        },
        {
          "questionId": "q19",
          "questionNumber": 19,
          "stem": "One was magnetometer, which identifies changes in the magnetic field. These changes occur when the 19 ________ in buried structures have changed direction as a result of great heat.",
          "translation": "其一是磁力仪，用来识别磁场的变化。当埋藏结构中的 ________ 因高温而改变方向时，就会产生这些变化。",
          "answer": "iron particles",
          "wordClass": "名词短语（iron 作前置定语修饰可数名词 particles，此处作主语且后接复数谓语 have changed，须用复数形式）",
          "locating": {
            "paragraph": "4",
            "quote": "If something containing iron oxide was heavily burnt, by natural or human actions, the iron particles in it can be permanently reoriented, like a compass needle, to align with the Earth's magnetic field present at that point in time and space."
          },
          "synonyms": [
            "“buried structures” 同义替换为原文的 “something containing iron oxide”，即埋在地下的古代结构物",
            "“because of great heat” 同义替换为原文的 “was heavily burnt”，即被高温猛烈烧过",
            "“have changed direction” 同义替换为原文的 “can be permanently reoriented”，reoriented 即方向被重新调整"
          ],
          "locatingTip": "定位：题干的关键词是 magnetometer 与 magnetic field，第 4 段（D 段）整段讲磁力测量原理，其中引号内 Branting 的话点明“被烧过的含铁物会重新定向”，锁定这一句。确定答案技巧：题目问“埋藏结构中什么东西改变了方向”，对应原文 the iron particles in it can be permanently reoriented 的主语。原文条件句 If something containing iron oxide was heavily burnt 交代原因（高温烧灼），主句的 iron particles 才是被重新定向的对象，因此填 iron particles。语法上，空格后是复数谓语 have changed，故必须用复数 particles。",
          "analysis": "第 4 段（D 段）引用 Branting 的说明：“If something containing iron oxide was heavily burnt, by natural or human actions, the iron particles in it can be permanently reoriented, like a compass needle, to align with the Earth's magnetic field present at that point in time and space.”（如果含有氧化铁的东西被自然或人为因素猛烈烧灼，其中的铁微粒就会像指南针指针一样被永久性地重新定向，与当时当地的地磁场对齐）。题干把这一条件句压缩为 when the [19] in buried structures have changed direction as a result of great heat，其中 buried structures 对应 something containing iron oxide（埋在地下的结构），as a result of great heat 对应 was heavily burnt，have changed direction 对应 can be permanently reoriented，空格所缺的正是原文主语 the iron particles。词性上，particles 是可数名词，此处后接复数谓语 have changed，故用复数形式；iron 作前置定语不可改为 irons 或 ironic。",
          "traps": []
        },
        {
          "questionId": "q20",
          "questionNumber": 20,
          "stem": "They match with the magnetic field, which is similar to a 20 ________.",
          "translation": "它们与磁场相吻合，而这一过程类似于 ________ 的原理。",
          "answer": "compass needle",
          "wordClass": "名词短语（compass 作前置定语修饰可数名词 needle，前有不定冠词 a，用单数形式）",
          "locating": {
            "paragraph": "4",
            "quote": "like a compass needle, to align with the Earth's magnetic field present at that point in time and space"
          },
          "synonyms": [
            "“They match with the magnetic field” 同义替换为原文的 “to align with the Earth's magnetic field”，align with 即与之对齐、吻合",
            "“is similar to” 同义替换为原文的 “like”，like 是介词，表示“像……一样”",
            "“a compass needle” 与原文的 “a compass needle” 原词复现"
          ],
          "locatingTip": "定位：摘要本题与第 19 题同出一句，仍在第 4 段（D 段）Branting 的引语中，看到 align with the Earth's magnetic field 后的 like a compass needle 即可作答。确定答案技巧：题干把原文的 like（像……一样）改写为 which is similar to（类似），只要锁定 similar to 前的 a，取 like 后面的名词短语即可。语法上不定冠词 a 提示用单数可数名词，compass needle 正好两个词，符合 NO MORE THAN THREE WORDS 的限制。",
          "analysis": "第 4 段（D 段）原文：“the iron particles in it can be permanently reoriented, like a compass needle, to align with the Earth's magnetic field present at that point in time and space.”（铁微粒会被永久重新定向，像指南针指针一样，与当时当地的地磁场对齐）。题干 They match with the magnetic field, which is similar to a [20] 把 align with（与……对齐）改写为 match with，把 like 改写为 is similar to，因此空格对应 like 后面的 a compass needle。这里原文的比喻意在说明铁微粒的重新定向与指南针指针指向地磁场的原理相同，属于磁力测量法的工作机制，填入 compass needle 后与原文语义一致。注意不要误填 Earth's magnetic field（那是被对齐的对象，不是拿来作比的事物）。",
          "traps": []
        },
        {
          "questionId": "q21",
          "questionNumber": 21,
          "stem": "The other one was resistivity, which uses a 21 ________ to fire electrical pulses into the earth.",
          "translation": "另一种是电阻率法，它用 ________ 向地下发射电脉冲。",
          "answer": "metal probe",
          "wordClass": "名词短语（metal 作前置定语修饰可数名词 probe，前有不定冠词 a，核心名词用单数）",
          "locating": {
            "paragraph": "6",
            "quote": "It's done by shooting pulses into the ground through a thin metal probe."
          },
          "synonyms": [
            "“fire electrical pulses into the earth” 同义替换为原文的 “shooting pulses into the ground”，fire 与 shoot 同义，earth 与 ground 同义",
            "“uses a … to” 同义替换为原文的 “It's done by … through a thin metal probe”，工具由 through 引出",
            "“resistivity” 与原文的 “resistivity” 原词复现"
          ],
          "locatingTip": "定位：题干关键词是 resistivity 与 electrical pulses，第 6 段（F 段）第二句起介绍电阻率法，出现 shooting pulses into the ground through a thin metal probe，锁定该句。确定答案技巧：题目问“用什么发射电脉冲”，对应原文 through 后面的工具名词。注意原文用 a thin metal probe，题干前的 a 已提供冠词，故只取核心词组 metal probe（thin 是原文额外修饰语，可不写，且写成 thin metal probe 会占满三个词仍算正确，但最稳妥的是 metal probe）。",
          "analysis": "第 6 段（F 段）介绍第二种地下测绘技术：“The other main sub-surface mapping technique, which is still being used at the site, is resistivity. This technique measures the way electrical pulses are conducted through sub-surface soil. It's done by shooting pulses into the ground through a thin metal probe.”（另一种仍在使用的次表层测绘技术是电阻率法，它测量电脉冲在次表层土壤中的传导方式，做法是通过一根细金属探针向地下发射脉冲）。题干 The other one was resistivity, which uses a [21] to fire electrical pulses into the earth 把原文的被动结构 It's done by shooting pulses … through a thin metal probe 改写为主动结构 uses a … to fire pulses，其中 fire 对应 shooting、earth 对应 ground、uses … to 对应 through，工具名 metal probe 原样保留。词性上，空格前有不定冠词 a、核心名词为单数，metal 作为材质定语修饰 probe。",
          "traps": []
        },
        {
          "questionId": "q22",
          "questionNumber": 22,
          "stem": "The principle is that building materials like 22 ________ and stone do not conduct electricity well",
          "translation": "其原理是，像 ________ 和石头这样的建筑材料导电性不佳。",
          "answer": "mudbrick",
          "wordClass": "名词（不可数，建筑材料名称；与 stone 并列作介词 like 的宾语，用原形不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "For example, stone and mudbrick are poor conductors, but looser, damp soil conducts very well."
          },
          "synonyms": [
            "“do not conduct electricity well” 同义替换为原文的 “are poor conductors”，不良导体即导电性差",
            "“building materials” 同义替换为原文的 “stone and mudbrick” 所代表的一类材料",
            "“like … and stone” 与原文的 “stone and mudbrick” 并列结构对应，仅语序互换"
          ],
          "locatingTip": "定位：题干关键词是 building materials 与 stone，第 6 段（F 段）第四句出现 stone 与 conductors，锁定该句。确定答案技巧：题目用 like … and stone 举例两种不良导体，原文同一位置并列的正是 stone and mudbrick，除 stone 之外的另一项就是答案。词性上 mudbrick 是建筑材料名，与 stone 一样作不可数名词使用，不加冠词、不变复数。",
          "analysis": "第 6 段（F 段）第四、五句：“Different materials have different electrical conductivity. For example, stone and mudbrick are poor conductors, but looser, damp soil conducts very well.”（不同材料有不同的导电性。例如石头和土砖是劣导体，而较松散、潮湿的土壤导电性很好）。题干 building materials like [22] and stone do not conduct electricity well 正是对这一句的改写：building materials 概括 material，do not conduct electricity well 概括 are poor conductors，空格与题干已给的 stone 一起对应原文并列的 mudbrick。填答时注意它是一个整体单词 mudbrick，不可拆成 mud brick，也不要写 mud（那只是泥土，不是原文所说的建筑材料名）。",
          "traps": []
        },
        {
          "questionId": "q23",
          "questionNumber": 23,
          "stem": "while 23 ________ does this much better",
          "translation": "而 ________ 的导电性好得多。",
          "answer": "damp soil",
          "wordClass": "名词短语（looser 与 damp 为形容词修饰不可数名词 soil，作主语；取核心名词短语 damp soil）",
          "locating": {
            "paragraph": "6",
            "quote": "For example, stone and mudbrick are poor conductors, but looser, damp soil conducts very well."
          },
          "synonyms": [
            "“does this much better” 同义替换为原文的 “conducts very well”，conduct 指前句提到的导电",
            "“while” 同义替换为原文的转折连词 “but”，表对比",
            "“damp soil” 与原文的 “looser, damp soil” 对应，题干取其中表状态的 damp"
          ],
          "locatingTip": "定位：与第 22 题同句，仍在第 6 段（F 段）“For example, stone and mudbrick are poor conductors, but looser, damp soil conducts very well.”这一对比句中。确定答案技巧：题干用 while 引出对比项，原文用 but 引出对比项，转折后半句的主语 looser, damp soil 就是答案。注意题干已给出谓语 does this much better 对应 conducts very well，因此只需填主语的核心名词短语；答案控制在三个词以内，写 damp soil 即可（原文中的 looser 只是附加修饰）。",
          "analysis": "第 6 段（F 段）第五句：“For example, stone and mudbrick are poor conductors, but looser, damp soil conducts very well.”（例如石头和土砖是劣导体，而较松散、潮湿的土壤导电性很好）。题干 while [23] does this much better 与原文 but … conducts very well 完全对应：while 对应 but，does this 回指前文的 conduct electricity，much better 对应 very well，故空格所缺是原文转折分句的主语 looser, damp soil。按题目要求 NO MORE THAN THREE WORDS，取 damp soil 两个词作答，既保留了表状态的形容词 damp（这是土壤潮湿因而导电的关键），又不超过词数限制。切勿填 looser（比较级形容词不能单独作主语中心词）。",
          "traps": []
        },
        {
          "questionId": "q24",
          "questionNumber": 24,
          "stem": "Archaeologists preferred to use this technique during the 24 ________, when conditions are more favourable.",
          "translation": "考古学家更愿意在 ________ 使用这种技术，因为那时条件更有利。",
          "answer": "spring season",
          "wordClass": "名词短语（spring 作前置定语修饰可数名词 season，前有定冠词 the，用单数形式）",
          "locating": {
            "paragraph": "6",
            "quote": "This is one of the reasons that the project has a spring season when most of the resistivity work is done."
          },
          "synonyms": [
            "“preferred to use this technique during …” 同义替换为原文的 “the project has a spring season when most of the resistivity work is done”，即该时段集中做电阻率测量",
            "“when conditions are more favourable” 同义替换为原文的 “It helps a lot if it has rained because the electrical pulse can get through more easily”，雨后条件更有利",
            "“this technique” 指前文的 resistivity，与原文 the resistivity work 对应"
          ],
          "locatingTip": "定位：题干关键词是 technique 与 conditions are more favourable，第 6 段（F 段）后半部分讲雨后便于测量并解释项目专设一个季节，出现 spring season 与 most of the resistivity work，锁定该句。确定答案技巧：题目问“在什么时间段使用”，原文给出的是 the project has a spring season，且紧接着说明该时段完成大部分电阻率测量；再往前一句 It helps a lot if it has rained 解释了条件为何更有利，两条线索互证，答案即 spring season。",
          "analysis": "第 6 段（F 段）先讲条件对电阻率测量的影响：“It helps a lot if it has rained because the electrical pulse can get through more easily,” says Branting. “Then if something is more resistant, it really shows up.”（Branting 说：下过雨会大有帮助，因为电脉冲更容易通过；这样遇到电阻较大的物体就会十分明显）。随后给出安排：“This is one of the reasons that the project has a spring season when most of the resistivity work is done.”（这也是项目专设春季一季的原因，大部分电阻率测量都在那时完成）。题干 Archaeologists preferred to use this technique during the [24] 把原文的“项目有一个春季、此时完成大部分电阻率工作”概括为“考古学家偏爱在该时段使用该技术”，when conditions are more favourable 则对应雨后可提高测量效果的条件描述，故填 spring season。词性上，spring 为名词作前置定语修饰 season，前面有定冠词 the，用单数形式；注意不要只填 spring（题目要点在于说明这是一个集中作业的时段，原文的名词短语是 spring season）。",
          "traps": []
        },
        {
          "questionId": "q25",
          "questionNumber": 25,
          "stem": "Resistivity is mainly being used to 25 ________ some images generated by the magnetometer.",
          "translation": "电阻率法目前主要用于 ________ 磁力仪生成的一些图像。",
          "answer": "clarify pictures",
          "wordClass": "动词短语（clarify 为及物动词原形，后接名词宾语 pictures；位于不定式符号 to 之后，用动词原形）",
          "locating": {
            "paragraph": "6",
            "quote": "Consequently, the team is concentrating on areas where they want to clarify pictures from the magnetometry."
          },
          "synonyms": [
            "“is mainly being used to” 同义替换为原文的 “the team is concentrating on areas where they want to”，即把主要精力放在某事上",
            "“images generated by the magnetometer” 同义替换为原文的 “pictures from the magnetometry”",
            "“clarify” 与原文的 “clarify” 原词复现"
          ],
          "locatingTip": "定位：题干关键词是 magnetometer 与 images，第 6 段（F 段）末句出现 clarify pictures from the magnetometry，与题干用词几乎一致，一步定位。确定答案技巧：题目空格在不定式 to 之后，需要一个动词原形短语。原文末句用 Consequently 引出结论：the team is concentrating on areas where they want to clarify pictures from the magnetometry，其中 is concentrating on（把精力集中用于）对应题干的 is mainly being used to，clarify pictures 即答案。注意填动词原形，不要写成 clarifying 或 clarification。",
          "analysis": "第 6 段（F 段）末两句：“Unfortunately, testing resistivity is a lot slower than magnetometry. 'If we did resistivity over the whole site it would take about 100 years,' says Branting. Consequently, the team is concentrating on areas where they want to clarify pictures from the magnetometry.”（遗憾的是，电阻率测试比磁力测量慢得多。Branting 说：如果对整个遗址做电阻率测量，大约要花一百年。因此团队把精力集中在那些需要澄清磁力测量图像的区域）。题干 Resistivity is mainly being used to [25] some images generated by the magnetometer 正是对末句的改写：mainly being used to 对应 is concentrating on，some images generated by the magnetometer 对应 pictures from the magnetometry，空格所缺就是动词短语 clarify pictures。语法上 to 后接动词原形，clarify 为及物动词，其宾语 pictures 已包含在答案短语中；这也解释了为何电阻率法只用于局部而不再全站铺开——因为太慢。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Question 26 单选题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 26,
        "end": 26
      },
      "items": [
        {
          "questionId": "q26",
          "questionNumber": 26,
          "stem": "How do modern remote-sensing techniques help at the site?",
          "translation": "现代遥感技术对遗址有什么帮助？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Remote sensing does not reveal everything about Kerkenes Dag, but it shows the most interesting sub-surface areas of the site. The archaeologists can then excavate these using traditional techniques."
          },
          "synonyms": [
            "“bring parts of the site into the light” 同义替换为原文的 “it shows the most interesting sub-surface areas of the site”，把地下不为人知的区域揭示出来",
            "“so that key areas can be researched further” 同义替换为原文的 “The archaeologists can then excavate these using traditional techniques”，即随后对重点区域做进一步发掘研究",
            "“modern remote-sensing techniques” 对应原文的 “Remote sensing”，题干加 modern 只是强调其技术属性"
          ],
          "locatingTip": "定位：本题是单选题，题干关键词是 remote-sensing techniques 与 help，全文第 7 段（G 段）开头即给出遥感作用的总结句，直接定位该段首两句。确定答案技巧：解答“某技术有什么作用”这类题，要找转折结构 but 后面的正面表述。原文写 Remote sensing does not reveal everything … but it shows the most interesting sub-surface areas of the site，随后补充 The archaeologists can then excavate these using traditional techniques。把“揭示重点地下区域”与“随后进一步发掘”合起来，正是 B 项所说“把遗址的某些部分揭示出来，以便进一步研究重点区域”，故选 B。",
          "analysis": "第 7 段（G 段）首两句是本题的判断依据：“Remote sensing does not reveal everything about Kerkenes Dag, but it shows the most interesting sub-surface areas of the site. The archaeologists can then excavate these using traditional techniques.”（遥感并不能揭示 Kerkenes Dag 的一切，但它能显示出遗址中最有意思的地下区域，考古学家随后可以用传统技术对这些区域进行发掘）。原文的结构是“先让步、后肯定”：not everything 说明遥感有局限，but 之后的 shows the most interesting sub-surface areas 才是它的贡献，而 then … excavate these 说明遥感的价值在于为后续的重点发掘指路。B 项 They bring parts of the site into the light so that key areas can be researched further 与这一逻辑完全吻合，因此是正确答案。A 项与原文冲突：原文明确说考古学家 will then excavate these using traditional techniques，遥感并未免除发掘。C 项夸大：原文说 does not reveal everything，且遥感呈现的是墙、炉灶等整体结构（walls, hearths），并非微小物件（minute buried objects）。D 项与原文冲突：电阻率测量需要挑春季进行，且原文引用 Branting 说全站测量要花约一百年，说明这些技术并不灵活、也不能全年使用。",
          "traps": [
            "为什么不是 A：原文结尾明确说 The archaeologists can then excavate these using traditional techniques，遥感只是筛选出重点区域，发掘仍然照做，因此“避免专家挖掘”与原文矛盾。",
            "为什么不是 C：原文明确说 Remote sensing does not reveal everything about Kerkenes Dag，而且遥感图像呈现的是墙、炉灶等整体结构，题目所说的“微小埋藏物（minute buried objects）”属于无据夸大，同时也超出了技术支持的能力范围。",
            "为什么不是 D：原文说项目专设 spring season 完成大部分电阻率工作，并引用 Branting 指出全站测量需约一百年，可见该技术受季节与速度限制，并不具备“全年随时可用”的灵活性。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
