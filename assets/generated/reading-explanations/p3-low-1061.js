(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-low-1061", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-low-1061",
  "meta": {
    "examId": "p3-low-1061",
    "title": "Australia's Megafauna Controversy 澳大利亚巨型动物群之争",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–4 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 4
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Field and Wroe argue that findings at the Cuddie Springs site show that people lived in this area at the same time as megafauna.",
          "translation": "菲尔德与罗伊认为，库迪泉遗址的发现表明，人类与此地的大型动物群曾在同一时期生活。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Drs Judith Field and Stephen Wroe of the University of Sydney, who excavated the site, claim that it provides unequivocal evidence of a long overlap of humans and megafauna"
          },
          "synonyms": [
            "“argue” 同义替换为原文的 “claim”",
            "“findings at the Cuddie Springs site” 对应原文的 “the site” 及其发掘者 “who excavated the site”，即该遗址出土的发现",
            "“people” 同义替换为原文的 “humans”",
            "“lived in this area at the same time as megafauna” 同义替换为原文的 “a long overlap of humans and megafauna”，overlap 即时间上的共存、重叠"
          ],
          "locatingTip": "定位：题干出现两个大写人名 Field、Wroe 和专有地名 Cuddie Springs，这些人名与地名第一次集中出现在第 2 段（B 段），扫读时只要盯住大写词即可一步定位。确定答案技巧：本题问的是“Field 与 Wroe 的观点”，而不是作者的观点，所以判分依据必须落在 claim / conclude 这类表示他人主张的动词上。原文用 “claim that it provides unequivocal evidence of a long overlap of humans and megafauna” 直接给出两位发掘者的主张：该遗址提供了“人类与大型动物群长期重叠共存”的确凿证据，与题干的 “people lived … at the same time as megafauna” 完全同向，因此判 YES。",
          "analysis": "第 2 段（B 段）在介绍库迪泉遗址后写道：“Drs Judith Field and Stephen Wroe of the University of Sydney, who excavated the site, claim that it provides unequivocal evidence of a long overlap of humans and megafauna, and conclude that aridity leading up to the last Ice Age brought about their eventual demise.”（悉尼大学的 Judith Field 与 Stephen Wroe 两位博士发掘了该遗址，他们声称这里提供了人类与大型动物群长期重叠共存的确凿证据，并得出结论：末次冰期之前的干旱导致了它们的最终消亡）。题干的三个信息点都能对上：主语 Field and Wroe 对应 Drs Judith Field and Stephen Wroe；argue 对应 claim；show that people lived in this area at the same time as megafauna 对应 provide unequivocal evidence of a long overlap of humans and megafauna，其中 people 即 humans，lived … at the same time 即 overlap（共存、时间重叠）。原文用了 unequivocal（确凿无疑的）一词，态度明确、毫无保留，所以判 YES。注意区分人物立场：作者本人并不认同这一结论，本文后半部分正是在反驳 Field 与 Wroe；但本题只问“Field 与 Wroe 主张什么”，不能因为作者持相反意见而误选 NO。",
          "traps": [
            "为什么不是 NO：NO 要求原文中 Field 与 Wroe 的主张与题干相反，而原文用的是 claim（声称）加 unequivocal evidence of a long overlap（长期重叠共存的确凿证据），方向与题干完全一致，并不存在矛盾信息。",
            "为什么不是 NOT GIVEN：原文对两位发掘者的主张交代得非常明确（claim、unequivocal evidence、a long overlap），人名、地点、共存关系一应俱全，属于信息完整而非缺失，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Field and Wroe believe it is likely that smaller megafauna species survived the last Ice Age.",
          "translation": "菲尔德与罗伊认为，体型较小的大型动物物种很可能在末次冰期中存活了下来。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "claim that it provides unequivocal evidence of a long overlap of humans and megafauna, and conclude that aridity leading up to the last Ice Age brought about their eventual demise."
          },
          "synonyms": [
            "“the last Ice Age” 在原文中复现为 “the last Ice Age”，是本句唯一的定位抓手",
            "“survived” 在原文中没有任何对应表达：原文只说干旱导致（bring about）它们的最终消亡（demise），完全没有提到有物种存活下来",
            "“smaller megafauna species” 在原文中没有任何对应表达：原文只笼统地说 megafauna 与 “their eventual demise”，未按体型作任何区分"
          ],
          "locatingTip": "定位：题干有很强的年代或时期标识 the last Ice Age，全文只有第 2 段（B 段）出现该表述；同时人名 Field and Wroe 也提示答案落在 B 段。确定答案技巧：找到 “the last Ice Age” 后要看清它在句中充当什么角色——原文是 “aridity leading up to the last Ice Age brought about their eventual demise”，即“末次冰期之前的干旱导致了它们的最终消亡”，落点是“消亡（demise）”，而不是“存活（survive）”，更不是“体型较小的物种存活”。题干新增了两层原文没有的信息：一是按体型把大型动物群切成 smaller species，二是说它们 survived。雅思判断题中，凡题干出现原文根本没有的比较级或分类（smaller、larger、rare、common），几乎都是 NOT GIVEN 的信号，因为原文无从证实也无从否定。",
          "analysis": "本题的定位句与第 1 题同在第 2 段：“… claim that it provides unequivocal evidence of a long overlap of humans and megafauna, and conclude that aridity leading up to the last Ice Age brought about their eventual demise.”（……他们声称这里提供了人类与大型动物群长期共存的确凿证据，并得出结论：末次冰期之前的干旱导致了它们的最终消亡）。句中出现 the last Ice Age，与题干的时间背景一致，但关键动词是 brought about their eventual demise（导致它们的最终消亡），讲的是整个大型动物群的灭亡原因，全文自始至终没有按体型区分大小物种，也没有任何一句提到某些物种熬过了冰期。题干把“整体消亡”的话题替换成“体型较小的物种存活下来”，这两层信息原文均未提供，既不能说它是真的，也不能说原文讲了反面（原文并没有说所有物种都在冰期前灭绝，也没有说小型物种是否存活），符合“原文未提及”的判定标准，所以答案是 NOT GIVEN。考场提醒：这类题最容易因为看到 Ice Age 与 megafauna 同时出现，就凭常识脑补“大型动物先死、小型动物后死”，一旦把常识写进答案就会失分，判断依据只能是原文有没有说。",
          "traps": [
            "为什么不是 YES：原文对物种存活与否完全没有表态，只说干旱导致大型动物群最终消亡。题干中的 survived（存活）在原文找不到任何依据，不能凭“小物种更可能活下来”的常识选 YES。",
            "为什么不是 NO：NO 需要原文有相反信息，即原文需要说“体型较小的物种并没有在冰期存活下来”。原文对这一问题只字未提，既没有肯定也没有否定，因此不属于矛盾，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The writers believe that the dating of earth up to 1.7m below the present surface at Cuddie Springs is unreliable.",
          "translation": "作者认为，库迪泉地表以下 1.7 米深度范围内土层的年代测定不可靠。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The dating of these layers is accurate: ages for the sediments were obtained through radiocarbon dating of charcoal fragments and luminescence dating of sand grains from the same levels"
          },
          "synonyms": [
            "“the dating … is unreliable” 与原文的 “The dating of these layers is accurate” 构成正面对立，unreliable 与 accurate 是反义关系",
            "“earth up to 1.7m below the present surface” 同义替换为原文上一句的 “both are found 1 to 1.7 metres below the modern surface”，modern 对应 present",
            "“the writers” 对应原文用第一人称复数的立场表达，本段以 “There is no disputing …” 明确表示作者一方认可这些数据"
          ],
          "locatingTip": "定位：题干给出两个极佳的数字定位词 1.7m（原文写作 1.7 metres），全文只出现在第 3 段（C 段）；再加上 surface 与 dating，可立即锁定 C 段前两句。确定答案技巧：本题考作者对“测年可靠性”的态度，要在原文找出评价性形容词。原文写 “The dating of these layers is accurate”，并在冒号后列出两种测年手段（放射性碳定年木炭碎片、释光测年砂粒）作为支撑，还补充解释了释光原理（揭示样本最后一次暴露于阳光的时间）。作者明确认可该深度范围的测年结果准确，题干却说 unreliable（不可靠），属正面对立，故判 NO。作者真正质疑的是这些沉积层是否“保持原位未被扰动”，以及木炭是否被重新沉积到更年轻的层位（第 5 段），而不是测年技术本身，这两个层次一定要分清。",
          "analysis": "第 3 段（C 段）开头写道：“There is no disputing the close association of bones and stones at Cuddie Springs, as both are found 1 to 1.7 metres below the modern surface. The dating of these layers is accurate: ages for the sediments were obtained through radiocarbon dating of charcoal fragments and luminescence dating of sand grains from the same levels (revealing when a sample was last exposed to sunlight).”（库迪泉骨骼与石器关系密切这一点无可争辩，两者都在现代地表以下 1 至 1.7 米处被发现。这些层位的测年是准确的：沉积物的年代是通过同一层位木炭碎片的放射性碳测年和砂粒的释光测年获得的，后者可揭示样本最后一次暴露于阳光的时间）。原文用 “There is no disputing …”（无可争辩）先确认骨骼与石器的共存关系，紧接着用 “The dating of these layers is accurate”（这些层位的测年是准确的）确认年代数据的可靠性，并给出两种独立方法互证。题干把作者对这一深度土层测年的态度说成 unreliable（不可靠），与 accurate 直接冲突，因此答案是 NO。注意后文第 5 段作者列举的一连串“不一致（inconsistencies）”——木炭都在约 3.6 万年、上层砂粒比同层木炭年轻得多、石器形制与数千年前的工具相似——指向的是“沉积层被搬动、旧木炭被重新沉积到年轻层位”，即样本所处层位出了问题，而不是测年技术不准。判断题中“把质疑对象的层次搞错”是最常见的陷阱，做题时要抓住原文的评价词（accurate、reliable、inconsistent）逐一对应。",
          "traps": [
            "为什么不是 YES：原文对 1 至 1.7 米这一深度层位的测年给出了明确肯定——“The dating of these layers is accurate”，并用放射性碳测年与释光测年两种方法互证，作者并不认为测年不可靠。作者的质疑另有对象：沉积层是否原位不动、木炭是否被重新沉积。",
            "为什么不是 NOT GIVEN：原文既给出了具体深度（1 to 1.7 metres below the modern surface），也给出了明确的可靠性评价（accurate），信息完整且与题干相反，因此必须判 NO 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Some artefacts found at Cuddie Springs were preserved well enough to reveal their function.",
          "translation": "在库迪泉发现的一些人工制品保存得足够完好，可以显示其用途。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Intriguingly, some of the stones show surface features indicating their use for processing plants, and a few even have well-preserved blood and hair residues suggesting they were used in butchering animals."
          },
          "synonyms": [
            "“artefacts” 同义替换为原文的 “the stones”，指库迪泉出土的石器",
            "“preserved well enough” 同义替换为原文的 “well-preserved”，指血迹与毛发残留保存完好",
            "“to reveal their function” 同义替换为原文的 “indicating their use for processing plants” 与 “suggesting they were used in butchering animals”，即说明这些石器的用途"
          ],
          "locatingTip": "定位：题干关键词是 artefacts、preserved、function，全文谈到“器物功能可辨”的只有第 3 段（C 段）最后一句，句首的 Intriguingly（有意思的是）是明显的态度提示词，扫读时容易注意到。确定答案技巧：把题干拆成“保存程度”和“能否看出功能”两个要件，再回原文核对。原文说有些石器的表面特征 “indicating their use for processing plants”（表明其用于加工植物），另有少量石器带有保存完好的血迹和毛发残留 “suggesting they were used in butchering animals”（暗示它们被用于屠宰动物）。前者说明用途可辨（功能），后者说明保存状态（well-preserved），两个要件都能满足，因此判 YES。要注意 artefacts 是概括词，原文用 the stones 代指，属于上下位替换，不影响判断。",
          "analysis": "第 3 段（C 段）最后一句：“Intriguingly, some of the stones show surface features indicating their use for processing plants, and a few even have well-preserved blood and hair residues suggesting they were used in butchering animals.”（有意思的是，其中一些石器的表面特征表明它们用于加工植物，还有少数甚至带有保存完好的血迹和毛发残留，暗示它们曾被用于宰杀动物）。题干中的 artefacts（人工制品）在本段上文已由 “some of the stones” 承接，指的就是这些出土石器；preserved well enough 对应 well-preserved（保存完好）；reveal their function（显示用途）对应 indicating their use for processing plants 以及 suggesting they were used in butchering animals——表面使用痕迹与血迹、毛发残留正是考古学上判断工具用途的直接证据。三个信息点方向一致、互为印证，故答案是 YES。做题提示：原文用 suggesting / indicating 这类“说明、表明”的动词短语来呈现功能证据，题干则把这一整层意思压缩成 reveal their function，属于典型的概括式同义替换，识别出这组对应关系即可确定答案。",
          "traps": [
            "为什么不是 NO：原文明确给出两处“用途可辨”的证据（加工植物的表面特征、屠宰动物的血迹毛发残留），并强调残留保存完好（well-preserved），没有任何否认其保存状态或功能可辨的表述，故不能选 NO。",
            "为什么不是 NOT GIVEN：原文不仅交代保存情况，还具体到两种用途（加工植物、屠宰动物），信息非常充分，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–9 摘要填空（从 A–I 词库中选词）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 9
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "One objection to Field and Wroe's interpretation is the large quantity of charcoal, 5 ________ and artefacts found at Cuddie Springs.",
          "translation": "反对菲尔德与罗伊解读的一个理由是，库迪泉发现的木炭、________ 以及人工制品的数量极为庞大。",
          "answer": "B",
          "wordClass": "名词（不可数物质名词，指石头；与前面的 charcoal、后面的 artefacts 并列，作介词 of 的并列宾语，一起构成 “the large quantity of …”；后面的 “found at Cuddie Springs” 是修饰这组并列名词的过去分词短语，故用单数形式 stone，不加冠词、不用复数）",
          "locating": {
            "paragraph": "4",
            "quote": "we estimate there are more than 3 tonnes of charcoal and more than 300 tonnes of stone buried there."
          },
          "synonyms": [
            "“the large quantity of” 同义替换为原文的 “more than 3 tonnes … more than 300 tonnes”，用具体吨数表达数量之大",
            "“objection to Field and Wroe's interpretation” 对应原文段首的 “brings into question their conclusions”，即作者对该解读提出的质疑",
            "空格与原文的并列结构一致：charcoal 与 stone 由 and 并列，题干保留 charcoal，留空的就是另一项 stone（选项 B）"
          ],
          "locatingTip": "定位：摘要小标题已说明内容出自作者反驳 Field 与 Wroe 的论据，抓 charcoal 与 quantity 两个词，回原文找作者列举遗址出土物数量的句子，即第 4 段（D 段）第三句。确定答案技巧：原文用并列结构给出两组惊人的数字：“more than 3 tonnes of charcoal and more than 300 tonnes of stone buried there”。题干把这一句压缩成 “the large quantity of charcoal, [5] and artefacts”，保留了并列结构中的第一项 charcoal 与最后一项 artefacts，中间空出的位置正是原文 and 后的 stone，对应选项 B。这一步的关键是识别“并列结构对应”：原文的 A and B 在题干里被改写成 A, __ and C，空格只能填原文并列成分中被省略的那一项；同时 artefacts 是对原文 “anthropological evidence”（人类活动遗存）的概括，不含具体材料，因此不会与 stone 冲突。填字母 B（stone）即可，不要写成 stone 以外的词。",
          "analysis": "原文第 4 段（D 段）：“The amount of anthropological evidence found at the site is remarkable: we estimate there are more than 3 tonnes of charcoal and more than 300 tonnes of stone buried there. Field and Wroe estimate that there are approximately 20 million artefacts.”（遗址出土的人类活动遗存数量惊人：我们估计埋藏于此的木炭超过 3 吨、石头超过 300 吨。Field 与 Wroe 估计有大约 2000 万件人工制品）。题干句子为 “One objection to Field and Wroe's interpretation is the large quantity of charcoal, [5] and artefacts found at Cuddie Springs”，其信息骨架与原文完全一致：large quantity 概括 more than 3 tonnes 与 more than 300 tonnes，并列的三项依次是 charcoal、空格、artefacts，其中 charcoal 与 artefacts 分别对应原文的 charcoal 和 artefacts（20 million artefacts），因此空格只能是原文并列结构中的 stone。词性上，stone 在此作不可数物质名词，与前项 charcoal 并列，不加冠词、不用复数，故选 B。注意选项 E（deep drill core）虽属实物，但它是第 5 段用来佐证的钻芯，不在本题列举的出土物之列，属于同段干扰项。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Such large numbers of artefacts would be impossible if the area had been covered with 6 ________ for a period.",
          "translation": "如果该区域曾在一段时期内被 ________ 覆盖，如此大量的人工制品是不可能存在的。",
          "answer": "F",
          "wordClass": "名词（不可数物质名词，指水；位于介词 with 之后作宾语，表示覆盖该区域的水体，故用单数形式 water，不加冠词、不用复数）",
          "locating": {
            "paragraph": "4",
            "quote": "This plethora of tools is hard to reconcile with a site that was only available for occupation when the lake was dry."
          },
          "synonyms": [
            "“Such large numbers of artefacts” 同义替换为原文的 “This plethora of tools”，plethora 即“过多、大量”",
            "“would be impossible” 同义替换为原文的 “is hard to reconcile with”，即与事实难以相容、说不通",
            "“the area had been covered with water for a period” 对应原文的 “only available for occupation when the lake was dry”，湖干时才可居住，意味着其余时间该地是被水覆盖的"
          ],
          "locatingTip": "定位：本题紧接第 5 题，仍在第 4 段（D 段），题干关键词是 impossible、covered with，回原文找“数量多到说不通”的那一句，即 “This plethora of tools is hard to reconcile with a site that was only available for occupation when the lake was dry.”。确定答案技巧：这一题走的是反推逻辑。原文说该遗址“只有在湖干的时候才可供人占用”，反过来就是“湖水上涨时该地是被水淹的”。题干做了一个假设句：“如果该区域曾在一段时期内被 [6] 覆盖，这么大量的器物就不可能存在”——被什么覆盖会让人类无法活动、从而不可能留下器物？只能是水。选项 F（water）与“lake”“dry”形成直接对立关系，故选 F。另外第 2 段早已把这里说明为 ephemeral lake（季节性湖泊），并括号解释为 “a body of water existing for a relatively short time”（存在时间较短的水体），正是题干 “for a period” 所指的“一段时期”，两条信息互相印证。",
          "analysis": "原文第 4 段（D 段）：“This plethora of tools is hard to reconcile with a site that was only available for occupation when the lake was dry.”（如此海量的工具，与一个只有在湖水干涸时才能被居住的遗址难以相容）。作者的论证是：如果这里长年有水，人就不可能长期在此活动、攒下 2000 万件器物，所以只能推断沉积物是被搬运来的。题干把原文的肯定句改写成假设句 “Such large numbers of artefacts would be impossible if the area had been covered with [6] for a period”，其中 Such large numbers of artefacts 对应 This plethora of tools，would be impossible 对应 is hard to reconcile with，而 “if the area had been covered with [6] for a period” 对应 “only available for occupation when the lake was dry” 的反面，即“湖泊有水、该地被水覆盖的时期”。因此空格应填 water（选项 F）。词性上，with 后接名词，water 在此表示水体，不可数、用单数原形。做题提示：这类“条件句倒推”的填空，判分点是把原文的“什么时候可以用”换成“什么时候不能用”，只要抓住 lake 与 dry 这对反义线索，water 就是唯一合理的覆盖物。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "There is also a complete lack of man-made structures, for instance those used for 7 ________",
          "translation": "此外，完全没有发现人造结构，例如用于 ________ 的那种结构。",
          "answer": "D",
          "wordClass": "动名词（由动词 cook 加 -ing 构成，作介词 for 的宾语，与 used for 构成 “be used for cooking”，表示用途，无单复数变化）",
          "locating": {
            "paragraph": "4",
            "quote": "Furthermore, no cultural features such as oven pits have been discovered."
          },
          "synonyms": [
            "“a complete lack of” 同义替换为原文的 “no … have been discovered”，即“一处也没有发现”",
            "“man-made structures” 同义替换为原文的 “cultural features”，即体现人类文化活动的遗迹",
            "“for instance those used for cooking” 对应原文的 “such as oven pits”，烤箱坑（oven pits）正是用于烹饪的结构"
          ],
          "locatingTip": "定位：题干关键词是 man-made structures 与 complete lack，原文用 cultural features、no … have been discovered 表达同样意思，出现在第 4 段（D 段）第四句 “Furthermore, no cultural features such as oven pits have been discovered.”。确定答案技巧：题干用 for instance 引出具体例子，原文用 such as 引出具体例子，两者功能完全相同，所以只要弄清 oven pits（灶坑、烤炉坑）是做什么用的，就能定出选项。Oven 的本义是烤炉，oven pits 即史前人类用来生火烹饪的坑灶，因此它对应的用途是 cooking，选 D。这里用的是“具体例子反推用途”的思路：题干把原文的实物名词 oven pits 抽象成 “those used for [7]”，空格要填抽象的功能名词而非实物名词。",
          "analysis": "原文第 4 段（D 段）第四句：“Furthermore, no cultural features such as oven pits have been discovered.”（此外，诸如灶坑之类的人类文化活动遗存也一处都没有发现）。作者用这一点佐证遗址并非长期有人居住：若人类真在此长时间生活，应当留下灶坑这类设施。题干把这句话改写为 “There is also a complete lack of man-made structures, for instance those used for [7]”：a complete lack of 对应 no … have been discovered；man-made structures 对应 cultural features；for instance those used for [7] 对应 such as oven pits。oven pits 是史前用来生火、烹饪的坑式炉灶，其用途就是 cooking，故填选项 D。词性上，空格位于介词 for 之后、与 used 构成 “used for + 名词/动名词” 的用途表达，cooking 在此为动名词化的名词，符合结构要求。注意区分选项 I（storage）——储藏的坑（storage pits）也是史前常见遗迹，但原文写的是 oven pits，oven（烤炉）明确指向烹饪，不能用 storage 替换。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Other evidence that casts doubt on Field and Wroe's claim is the fact that while some material in the highest levels of sediment is 36,000 years old, the 8 ________ in the same levels is much more recent.",
          "translation": "其他质疑菲尔德与罗伊说法的证据是：沉积层最上部某些物质有 3.6 万年历史，而同一层位中的 ________ 却要年轻得多。",
          "answer": "C",
          "wordClass": "名词（不可数物质名词，指沙子；题干的冠词 the 与 in the same levels 一起使该名词短语作从句主语，与前半句 “some material”（某种物质）对照，故用单数形式 sand，不用复数）",
          "locating": {
            "paragraph": "5",
            "quote": "First, the charcoal samples are all roughly 36,000 years old. Second, sand in the two upper levels is considerably younger than charcoal from the same levels."
          },
          "synonyms": [
            "“some material in the highest levels of sediment is 36,000 years old” 同义替换为原文的 “the charcoal samples are all roughly 36,000 years old”，highest levels 对应 two upper levels",
            "“the 8 ________ in the same levels is much more recent” 同义替换为原文的 “sand in the two upper levels is considerably younger than charcoal from the same levels”，much more recent 对应 considerably younger",
            "“casts doubt on Field and Wroe's claim” 对应本段列举的反证，作者用 First、Second、Third 逐条列出数据中的矛盾"
          ],
          "locatingTip": "定位：题干有两个数字抓手 36,000 与 same levels，原文第 5 段（E 段）出现 36,000 years old 与 from the same levels，可一步锁定该段前两句。确定答案技巧：原文用 “First … Second …” 的序号结构并列两条证据，第一条说木炭样本都约 3.6 万年（对应题干 “some material … is 36,000 years old”），第二条说上两层的砂粒比同层木炭年轻得多（对应题干 “the [8] in the same levels is much more recent”）。题干与第二条证据相比，只空出了主语位置，因此答案就是 sand（选项 C）。要注意题干把两条证据合并成 “while A …, the B …” 的对照句式，A 是 36,000 年这一“很老”的一端，B 是 “much more recent” 的一端；原文中承担“更年轻”这一角色的正是 sand，而不是 charcoal（charcoal 是参照物，对应前半句）。选项 H（sediment）是沉积物总称，与原文层级不符，属于同义范畴的干扰项。",
          "analysis": "原文第 5 段（E 段）开头两句：“First, the charcoal samples are all roughly 36,000 years old. Second, sand in the two upper levels is considerably younger than charcoal from the same levels.”（第一，木炭样本全部约为 3.6 万年。第二，上两层的砂粒比同一层位的木炭年轻得多）。原文的证据逻辑是：同层的木炭与砂粒测年结果互相打架——木炭“老”，砂粒“新”。题干把它改写成对照句 “while some material in the highest levels of sediment is 36,000 years old, the [8] in the same levels is much more recent”，其中 some material … is 36,000 years old 对应 charcoal samples … roughly 36,000 years old，in the same levels 对应 from the same levels，much more recent 对应 considerably younger，空格所在主语正是原文第二条证据的主语 sand，故填选项 C。词性上，sand 为不可数名词，作从句主语，与 charcoal 构成同层位不同物质的对比，不加冠词、不用复数。做题提示：摘要填空遇到“同层不同物质”的对比，一定要先分清哪个是参照物（charcoal，出现在前半句）哪个是被描述对象（sand，出现在空格处），否则极易错选 H（sediment，泛指整个层位）。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Further evidence against human occupation of the area is the absence of tools and 9 ________ a short distance away.",
          "translation": "反对该地区曾有人类居住的进一步证据是：在离遗址不远的地方，既没有工具，也没有 ________。",
          "answer": "G",
          "wordClass": "名词短语（由 fossil 作前置定语修饰复数名词 bones；与前面的 tools 并列，作介词 of 的宾语；原文用 fossil bones，故照抄并保留复数形式）",
          "locating": {
            "paragraph": "5",
            "quote": "Also of interest is the fact that a deep drill core made a mere 60 metres from the site recovered no stone artefact or fossil bones whatsoever."
          },
          "synonyms": [
            "“a short distance away” 同义替换为原文的 “a mere 60 metres from the site”，仅有 60 米之遥",
            "“the absence of tools and fossil bones” 同义替换为原文的 “recovered no stone artefact or fossil bones whatsoever”，no … whatsoever 即“一点也没有”",
            "“Further evidence against human occupation” 对应原文也用了同类否定证据（no … whatsoever）来加强反驳"
          ],
          "locatingTip": "定位：题干关键词是 absence of tools、a short distance away，原文对应的表述是 no stone artefact、a mere 60 metres from the site，落在第 5 段（E 段）第四句。确定答案技巧：题目说“连工具和 [9] 都没有”，原文的否定句里并列了两样东西——no stone artefact or fossil bones whatsoever，其中 stone artefact（石制器物）对应题干的 tools，剩下并列的那一项 fossil bones 就是空格答案，即选项 G。本题的干扰点在于选项 E（deep drill core）：a deep drill core 是取样的方式（钻芯），不是被取出的东西，而题干空缺的是与 tools 并列的被发现物，逻辑上只能是 fossil bones。另外要留意原文的否定强化词 whatsoever，它与题干的 absence of 完全同义，用来强调“一点痕迹都没有”。",
          "analysis": "原文第 5 段（E 段）第四句：“Also of interest is the fact that a deep drill core made a mere 60 metres from the site recovered no stone artefact or fossil bones whatsoever.”（同样值得注意的是，在距遗址仅 60 米处钻取的一根深钻芯，没有取到任何石制器物或化石骨骼）。作者以此说明：真正长期有人类活动的遗址，其近旁理应也能打到石器与兽骨，而这里一无所获，从而进一步质疑人类的长期占据。题干 “Further evidence against human occupation of the area is the absence of tools and [9] a short distance away” 与原文一一对应：Further evidence against human occupation 对应本句作为佐证的定位；the absence of 对应 recovered no … whatsoever；tools 对应 stone artefact；a short distance away 对应 a mere 60 metres from the site；空格处正是与石器并列的 fossil bones，故选 G。词性上，fossil bones 为复数名词，与 tools 并列作 absence of 的宾语，保持原文复数形式。注意 E（deep drill core）在原文中是手段（钻芯取样），把它填进“absence of …”就成了“缺少一根钻芯”，与原文语义不符，属典型的“词形呼应但句法角色错位”干扰项。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–14 单选题（四选一）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 14
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "What conclusions did the writers reach about the inconsistencies in the data from Cuddie Springs?",
          "translation": "关于库迪泉数据中的那些不一致之处，作者得出了什么结论？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "These points suggest strongly that the sediments have been moved about and some of the old charcoal has been re-deposited in younger layers."
          },
          "synonyms": [
            "“the inconsistencies in the data” 对应原文第 4 段末句的 “our analysis revealed a number of inconsistencies” 以及本段 First、Second、Third 列出的矛盾证据",
            "“the writers reach the conclusion” 同义替换为原文的 “These points suggest strongly”，即由一系列证据推出结论",
            "“The different layers of sediment have been mixed over time” 同义替换为原文的 “the sediments have been moved about and some of the old charcoal has been re-deposited in younger layers”"
          ],
          "locatingTip": "定位：题干关键词有 inconsistencies 与数据来源 Cuddie Springs。原文第 4 段（D 段）末句先埋下 “However, our analysis revealed a number of inconsistencies”，第 5 段（E 段）随即用 First、Second、Third 逐条铺开，并在段中给出结论句。确定答案技巧：作者列举矛盾证据之后，用 “These points suggest strongly that …” 明确给出推论——沉积物被搬动过（moved about）、部分旧木炭被重新沉积到更年轻的层位（re-deposited in younger layers）。这正是选项 A“不同沉积层随着时间被混合（mixed over time）”的意思，故答案为 A。做题顺序建议：先读 These points suggest strongly 这类总结句，能省去逐条读完三种矛盾的时间。",
          "analysis": "第 5 段（E 段）先列出三处异常：木炭样本全部约 3.6 万年；上两层的砂粒比同层木炭年轻得多；Field 与 Wroe 认为用于加工动植物的工具与研磨石十分古老，却与几千年前才使用的工具极为相似。随后补充：距遗址仅 60 米的深钻芯一无所获；一处地表下 1 米的牛骨样本所在沉积物中，混有 6000 年、23000 年的木炭与 17000 年的砂粒。段中总结句：“These points suggest strongly that the sediments have been moved about and some of the old charcoal has been re-deposited in younger layers.”（这些迹象强烈表明沉积物被搬动过，一些旧木炭被重新沉积到了更年轻的层位）。这就是作者对“数据不一致”给出的结论：层位之间发生了混合，旧的物质跑到了新的层里，因此选项 A“沉积层随时间被混合（have been mixed over time）”正确。这个结论也解释了为何同层木炭与砂粒年代相差悬殊——它们原本并不属于同一时期，而是后来被搅到一起的。作答提示：马拉松式细节题（三处异常）读起来费力，但选项判断只需看总结句；抓住 suggest strongly 这一推论信号，就能确定 A 是唯一与结论句对齐的选项。",
          "traps": [
            "为什么 B 不对：原文把砂粒比同层木炭年轻得多列为关键证据之一（“sand in the two upper levels is considerably younger than charcoal from the same levels”），是作者论证的重要环节，从未说砂粒的证据无用或应被舍弃。",
            "为什么 C 不对：原文确实说过巨型动物的骨骼尚未测年、新技术可望在不久的将来实现测年（“The megafauna bones themselves have not yet been dated, although new technological developments make this a possibility in the near future.”），但这是对未来测年的展望，不是作者针对“数据不一致”得出的结论，属于信息错位。",
            "为什么 D 不对：木炭恰恰是被成功测年的一类样本——“the charcoal samples are all roughly 36,000 years old”，还出现了 6000 年、23000 年等具体数值，说明木炭可以测年，选项与原文矛盾。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "According to the writers, what impact could a natural phenomenon have had on this site?",
          "translation": "根据作者的说法，某种自然现象可能对该遗址造成过什么影响？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Flood events more likely explain the accumulation of megafauna remains, and could have mixed old bones with fresh deposits."
          },
          "synonyms": [
            "“a natural phenomenon” 同义替换为原文的 “Flood events”，洪水属于自然事件",
            "“could have had an impact on this site” 同义替换为原文的 “could have mixed old bones with fresh deposits”，即把旧骨与新沉积物混在一起，扰乱了遗址的原始层序",
            "“disturbed the archaeological evidence” 同义替换为原文的 “more likely explain the accumulation of megafauna remains, and could have mixed …”"
          ],
          "locatingTip": "定位：题干问“某种自然现象对该遗址的影响”，用 natural phenomenon 与 impact 作抽象线索，回原文找自然事件名称——第 6 段（F 段）明确给出 Flood events（洪水事件），同段还提到 bushfires（林火），都属自然现象。确定答案技巧：找到 Flood events 后要看它对遗址做了什么。原文说洪水“更可能解释了大型动物遗骸的堆积，并可能把旧骨与新近的沉积物混在一起”。混动旧骨与新沉积物，正是对考古证据层位的扰动，因此选项 B“洪水可能扰乱了考古证据”正确。区分 A 与 B 的关键在于动词：原文用的是 mixed（混合）、explain the accumulation（解释堆积），讲的是遗骸的搬运与再沉积，而不是造成动物死亡。",
          "analysis": "第 6 段（F 段）提出作者的替代解释：“We propose that the archaeologists have actually been sampling the debris carried by ancient flood channels beneath the site, including charcoal transported from bushfires that intermittently occurred within the catchment. Flood events more likely explain the accumulation of megafauna remains, and could have mixed old bones with fresh deposits.”（我们认为，考古学家实际取样的其实是遗址下方古代洪水通道所携带的碎屑，其中包括由集水区内间歇性林火搬运来的木炭。洪水事件更可能解释大型动物遗骸的堆积，并可能把旧骨与新近的沉积物混在一起）。作者的意思是：遗址中的骨与石并非原地原层堆积，而是洪水从别处冲来、层层混杂的结果，这直接动摇了 Field 与 Wroe 关于层序未受扰动的前提。因此自然现象（洪水）对遗址的影响是“扰动考古证据、使旧骨与新沉积物混合”，选项 B 与之吻合。作答提示：选择题中涉及同一自然现象的两个选项（本题 A 与 B 都讲洪水，C 与 D 都讲林火）必须靠原文动词来区分——原文用 mix、carry、accumulate，都是“搬迁、混合堆积”，没有任何一处说洪水导致动物死亡；林火则只是作为木炭的来源被提及（charcoal transported from bushfires），并非破坏证据的原因。",
          "traps": [
            "为什么 A 不对：原文只说洪水解释了巨型动物遗骸的堆积（explain the accumulation of megafauna remains）并可能将新旧物质混合，从未说洪水导致这些动物死亡。",
            "为什么 C 不对：林火在原文中只作为木炭的来源出现——“including charcoal transported from bushfires that intermittently occurred within the catchment”，属于偶发火灾的产物，并没有说火灾阻止人类在此长期定居。",
            "为什么 D 不对：原文没有说林火烧毁了大量巨型动物与人类留下的证据；相反，木炭是被洪水通道搬运到遗址的，火灾的影响是间接的、只与木炭来源有关。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "What did the writers speculate about the people who lived at this site in 1876?",
          "translation": "关于 1876 年在该遗址活动的人，作者作出了什么推测？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "we speculate that the graziers made sure it was protected from the damage caused by cattle hooves by lining the surface with small stones collected from further afield, including prehistoric quarries."
          },
          "synonyms": [
            "“speculate about” 在原文中直接复现为 “we speculate that”，正是作者的主观推测",
            "“the people who lived at this site in 1876” 同义替换为原文的 “European graziers also disturbed the site in 1876”，graziers 即牧场经营者",
            "“They brought stones there from another area” 同义替换为原文的 “lining the surface with small stones collected from further afield”"
          ],
          "locatingTip": "定位：题干给出强定位词 1876 与 speculate，全文只有第 6 段（F 段）出现 “European graziers also disturbed the site in 1876”，且下句紧接 “we speculate that …”。确定答案技巧：找到 speculate 引导的宾语从句后，重点看石头的来源。原文说牧场主“用从更远处（from further afield）收集来的小石子铺在地表”，其中 “collected from further afield, including prehistoric quarries”（包括史前采石场）明确说明这些石头不是本地原有的，而是从别处运来。题干选项 D“他们从另一地区把石头带到此处”与之完全对应，故答案为 D。注意题干问的是“作者推测了什么”，因此判分依据必须落在 speculate 之后的从句上，而不是前文的客观叙述。",
          "analysis": "第 6 段（F 段）在提出洪水搬运论之后，又补充了人类活动的干扰：“European graziers also disturbed the site in 1876 by constructing a well to provide water for their cattle. Given the expense of well-digging, we speculate that the graziers made sure it was protected from the damage caused by cattle hooves by lining the surface with small stones collected from further afield, including prehistoric quarries.”（欧洲牧场主在 1876 年也扰动了该遗址，他们为给牛供水而挖了一口井。考虑到挖井费用高昂，我们推测这些牧场主为了使其免受牛蹄破坏，用从更远处、包括史前采石场收集来的小石子铺在地表加以保护）。作者用 “Given the expense of well-digging … we speculate …” 说明这是一个基于成本的推断：花大价钱挖井，就会设法保护它，保护方式就是铺设外来石子。小石子 “collected from further afield, including prehistoric quarries” 正是选项 D 所说的“从另一地区带石头来”，故选 D。这一段也正是作者用来解释遗址中那层散落石子的来源——它们可能是 19 世纪人类活动留下的，而非史前人类与巨兽共存的证据。作答提示：题干用 people who lived at this site 这一宽泛说法指代 graziers，属于上下位替换，不影响定位；抓住年份 1876 与动词 speculate 即可。",
          "traps": [
            "为什么 A 不对：原文提到牛骨只是说 “forcing the stone and even cattle bones deeper into the waterlogged soil”（把石头甚至牛骨压入湿软的土壤），并没有说牧场主饲养的牛骨会与巨型动物骨骼混淆，更没有提及“繁殖牛群”。",
            "为什么 B 不对：原文提到水浸土壤（waterlogged soil）是在描述牛蹄踏破砾石面后石子与牛骨下沉的结果，并没有说土壤太湿以致无法耕作。",
            "为什么 C 不对：原文说牧场主用石子铺面正是为了 “protected from the damage caused by cattle hooves”（防止牛蹄破坏），说明他们在限制牛对井口的踩踏，而不是让牛群在遗址随意活动。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "In the final paragraph, what suggestion do the writers make about Australia's megafauna?",
          "translation": "在最后一段中，作者就澳大利亚的巨型动物群提出了什么观点？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Using a mathematical model, it was found that a group of 10 people killing only one juvenile Diprotodon each year would be sufficient to bring about the extinction of that species within 1,000 years."
          },
          "synonyms": [
            "“Megafauna could have died out” 同义替换为原文的 “would be sufficient to bring about the extinction of that species”",
            "“as a result of small numbers being killed year after year” 同义替换为原文的 “killing only one juvenile Diprotodon each year”，且施动者仅 “a group of 10 people”，人数与猎杀量都极小",
            "“what suggestion do the writers make” 对应原文的 “suggest a further possible explanation as to what happened”"
          ],
          "locatingTip": "定位：题干限定在最后一段，关键词是 megafauna 与 suggestion。末段（第 7 段，G 段）先否定气候说，再提出替代解释，并用数学模型给出计算，落到 “Using a mathematical model, it was found that …” 一句。确定答案技巧：抓住频率词 each year 和数量词 only one，原文的结论是“每年只猎杀一头幼年双门齿兽（Diprotodon），就足以在 1000 年内导致该物种灭绝”——即“年年少量猎杀”也能造成灭绝，与选项 B“大型动物可能因年复一年的少量捕杀而灭绝”一致，故选 B。做题时要盯住 only one 与 a group of 10 people 这两个“极小量”的表述，它们是判断作者真实立场的钥匙：作者认为不需要大规模屠杀，少量持续猎杀就足够。",
          "analysis": "末段（第 7 段，G 段）先定调：“The lack of conclusive evidence that humans and megafauna coexisted for a lengthy period casts doubt on Field and Wroe's assertion that climate change was responsible for the extinction of Australia's megafauna.”（缺乏人类与大型动物群长期共存的确凿证据，这使 Field 与 Wroe 关于气候变化导致澳大利亚大型动物群灭绝的论断受到质疑），随后作者特别澄清立场：“we do not suggest that newly arrived, well-armed hunters systematically slaughtered all the large beasts they encountered”（我们并不认为是新来的、装备精良的猎人把遇到的大兽全部系统屠杀殆尽）。接着给出替代解释：用数学模型计算，“a group of 10 people killing only one juvenile Diprotodon each year” 就足以在 1000 年内使该物种灭绝，并总结说人类的到来与其他地区一样，形成了一种使大型动物处境不利的“易变组合”。因此作者的建议是：数量极小的持续猎杀即可导致灭绝，选项 B 正确。选项的对应关系为：small numbers being killed 对应 only one juvenile … each year 与 a group of 10 people；year after year 对应 each year；died out 对应 bring about the extinction。作答提示：末段常出现“作者先否定一个误解、再给出真正主张”的写法，读到 “we do not suggest that …” 时要知道那是排除项，真正的观点在其后的数学模型与前一句 paradox 提示中。",
          "traps": [
            "为什么 A 不对：气候变化是 Field 与 Wroe 的观点，作者在末段开头恰恰用 “casts doubt on … climate change was responsible” 对它表示质疑，因此不可能把“气候骤变导致灭绝”当作作者的提议。",
            "为什么 C 不对：原文强调 “a group of 10 people … would be sufficient”，即人数虽少却足以造成灭绝，说明人类种群规模并不构成排除条件；选项说当时人口少到不足以导致灭绝，与原文相反。",
            "为什么 D 不对：原文正是通过现代大型哺乳动物的生物学研究与当代狩猎采集者的观察来做类比（“Recent studies based on the biology of modern-day large mammals, combined with observations of people who still practise a traditional hunter-gatherer lifestyle …”），选项却说不应作此类比较，与原文方法相悖。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "Which of the following best represents the writers' criticism of Field and Wroe?",
          "translation": "下列哪一项最能体现作者对菲尔德与罗伊的批评？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "We carried out a reanalysis of the scientific data from Cuddie Springs that brings into question their conclusions."
          },
          "synonyms": [
            "“the writers' criticism” 同义替换为原文的 “brings into question their conclusions”，即对结论提出质疑",
            "“were based on inconsistent data” 对应原文同段末句的 “our analysis revealed a number of inconsistencies”，以及第 5 段列举的 First、Second、Third 三重矛盾",
            "“Their conclusions” 在原文中直接复现为 “their conclusions”，指的是 Field 与 Wroe 关于长期共存与气候致灭的论断"
          ],
          "locatingTip": "定位：题干关键词是 Field and Wroe 与 criticism，全文对二人的集中批评出现在第 4 段（D 段）：段首先抛出 “But is the case proposed by Field and Wroe clear-cut?”，紧接着给出作者重新分析的结论。确定答案技巧：本题问的是“最能概括作者批评”的一项，应抓住作者质疑的落点。原文说重新分析“使他们的结论受到质疑（brings into question their conclusions）”，并在段末点明自己发现了许多“不一致（inconsistencies）”，后文又逐条列出同层物质年代互相矛盾、石器形制过新、钻芯无收获等具体问题。归纳起来就是：他们的结论建立在互相矛盾的数据之上，故选项 D 正确。这类主旨型选择的解法是先锁定作者“质疑什么”，再排除那些原文并未提及的质疑点（方法、深度、技术）。",
          "analysis": "第 4 段（D 段）是作者首次正面反驳 Field 与 Wroe 的地方：“But is the case proposed by Field and Wroe clear-cut? We carried out a reanalysis of the scientific data from Cuddie Springs that brings into question their conclusions.”（但 Field 与 Wroe 提出的论证真的清楚明白吗？我们对库迪泉的科学数据做了重新分析，这使他们的结论受到质疑），段末又补一句 “However, our analysis revealed a number of inconsistencies.”（然而我们的分析发现了不少矛盾之处）。第 5 段进一步列出三重矛盾（木炭一律 3.6 万年、上层砂粒远年轻于同层木炭、石器与数千年前的工具惊人相似），再加上 60 米外的深钻芯一无所获、牛骨样本所在层位混有不同年代的物质。作者的批评核心因此是：Field 与 Wroe 的结论建立在一批自相矛盾、层序已被搅乱的数据之上，选项 D“他们的结论基于不一致的数据”最准确。其余三项都指向原文没有质疑的层面。作答提示：主旨型选择最忌被细节吸走——B、C 看起来都像“考古学上的批评”，但只要回原文核对就会发现，作者第 3 段明确认可测年准确（“The dating of these layers is accurate”），也没说挖掘深度不够（不到位的是 60 米外那根钻芯一无所获，作者引用它是为证明近旁也应有遗存）。",
          "traps": [
            "为什么 A 不对：作者质疑的是数据与结论，而非对方的方法思路。原文第 3 段还认可其测年准确（“The dating of these layers is accurate”），未出现“考虑不周”之类的评价。",
            "为什么 B 不对：原文提到的是距遗址 60 米处的一根深钻芯（a deep drill core made a mere 60 metres from the site）没有打到石器或兽骨，讨论的是采样位置，并没有说 Field 与 Wroe 的挖掘不够深。",
            "为什么 C 不对：作者明确认可测年技术的数据质量——第 3 段说 “The dating of these layers is accurate”，还解释了放射性碳测年与释光测年的原理；作者认为出问题的是数据之间的相互矛盾与层位被扰动，而不是技术不精确。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
