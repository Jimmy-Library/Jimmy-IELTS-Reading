(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-1458", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-1458",
  "meta": {
    "examId": "p3-high-1458",
    "title": "Is Graffiti Art or Crime? 涂鸦是艺术还是犯罪？",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–19 段落信息匹配（Which paragraph contains the following information? A–G）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 19
      },
      "items": [
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "why chemically cleaning graffiti may cause damage",
          "translation": "为什么用化学方式清除涂鸦可能造成损害",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Chemical preparations are based on dissolving the media; these solvents can range from water to potentially hazardous chemical ‘cocktails’."
          },
          "synonyms": [
            "“chemically cleaning” 同义替换为原文的 “Chemical preparations are based on dissolving the media”，化学制剂正是靠溶解介质来清除涂鸦",
            "“may cause damage” 同义替换为原文的 “potentially hazardous”（有潜在危害的），potential 对应 may，hazard 造成的危害对应 cause damage",
            "“why … may cause damage” 的依据在原文的 “these solvents can range from water to potentially hazardous chemical ‘cocktails’”，溶剂的一端是安全的水，另一端是有害的化学混合剂，说明化学清洗本身带有风险"
          ],
          "locatingTip": "定位：题干关键词是 chemically cleaning 与 damage。全文集中讲清除方法的只有 D 段，该段首句 “There are a variety of methods that are used to remove graffiti.” 之后立刻把方法分为化学与机械两类，化学部分的句子同时出现 preparations、solvents、potentially hazardous chemical ‘cocktails’，扫读这三个词即可锁定。确定答案技巧：题干问“为什么化学清洗可能造成损害”，实际上是要找化学溶剂本身的性质。原文用 potentially hazardous（有潜在危害）描述化学溶剂的上限，又要求遵守职业健康与安全法规、防止径流与气雾危及公众，这些防范要求反证了化学清洗确有损害风险，故答案落在 D 段。注意 C 段也出现 damage 一词，但那是“把为坚固表面设计的技术用在敏感历史表面”所造成的损害，讨论的是表面类型与技术的匹配，与本题所问的化学清洗本身的风险不是同一信息点。",
          "analysis": "D 段把清除涂鸦的方法分成化学与机械两大类，其中化学部分写道：“Chemical preparations are based on dissolving the media; these solvents can range from water to potentially hazardous chemical ‘cocktails’.”（化学制剂依靠溶解涂鸦介质起作用；这些溶剂从水一直到有潜在危害的化学「混合剂」不等。）题干问的是“为什么用化学方式清除涂鸦可能造成损害”，落点就在这句对溶剂性质的说明：溶剂谱系的一端是安全的水，另一端是 potentially hazardous（有潜在危害）的化学混合剂，potentially 对应题干的情态动词 may，hazardous 与损害的意味对应 cause damage，说明化学清洗本身就伴随着潜在危害。D 段随后还提出 “Care should be taken to comply with health and safety legislation with regard to the protection of both passers-by and any person carrying out the cleaning.”（必须注意遵守健康与安全法规，以保护行人以及任何从事清洗作业的人员），并要求采取措施确保 “run-off, aerial mists, drips and splashes do not threaten unprotected members of the public”，这些防范要求反过来印证了化学清洗确有损害风险。需要提醒的是，C 段也出现过 damage 一词：“techniques designed for more robust or utilitarian surfaces may result in considerable damage”，但那里说的是把为坚固（utilitarian）表面设计的技术用在敏感历史表面上会造成的损害，讨论对象是表面与技术的匹配问题，而不是化学清洗本身为何有害，因此本题按题库答案落在 D 段。",
          "traps": [
            "为什么不是 C 段：C 段的 “techniques designed for more robust or utilitarian surfaces may result in considerable damage” 虽然出现 damage，但说的是把适用于坚固、实用表面的技术用在敏感历史表面上所造成的损害，讨论对象是「表面类型与技术是否匹配」，没有交代化学清洗为何有风险，题库答案为 D 段。",
            "为什么不是 B 段：B 段通篇在说为什么要尽快清除涂鸦（防止跟风模仿、内容冒犯、涂料干后难除、可能引发更严重的破坏行为），完全没有涉及化学清洗造成损害的问题。"
          ]
        },
        {
          "questionId": "q15",
          "questionNumber": 15,
          "stem": "the benefit of a precautionary strategy on the gentle removal",
          "translation": "预防性策略在温和清除涂鸦方面带来的好处",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "Removal of graffiti from a surface that has been treated in this way is much easier"
          },
          "synonyms": [
            "“a precautionary strategy” 同义替换为原文的 “a surface that has been treated in this way”，其中 in this way 回指 F 段所述 anti-graffiti coatings（防涂鸦涂层）这一预防性处理",
            "“the benefit … on the … removal” 同义替换为原文的 “is much easier”，即经预防性处理后的表面清除涂鸦容易得多",
            "“gentle removal” 同义替换为同句后文的 “usually using low-pressure water which reduces the possibility of damage”，用低压水清除既温和又能降低损害可能"
          ],
          "locatingTip": "定位：题干关键词是 precautionary strategy 与 removal。全文的预防思路出现在 F 段末尾 “Anti-graffiti coatings are usually applied by brush or spray…”，紧接着的 G 段首句就以 Removal of graffiti from a surface that has been treated in this way is much easier 说明这种处理带来的结果，两段是「策略—效果」的衔接，因此答案在 G 段。确定答案技巧：定位句中的 “a surface that has been treated in this way” 用了回指，in this way 指的就是 F 段所讲的涂刷防涂鸦涂层这一预防措施，读到这个代词回指就能确认 G 段正是「预防性策略对清除的好处」；much easier 与随后用低压水、降低损害可能的说明共同构成题干所说的 benefit。",
          "analysis": "F 段末尾给出预防思路：“Anti-graffiti coatings are usually applied by brush or spray leaving a thin veneer that essentially serves to isolate the graffiti from the surface.”（防涂鸦涂层通常以刷涂或喷涂的方式施涂，留下一层薄膜，本质上用来把涂鸦与表面隔离开。）G 段承接这一预防处理，说明它带来的好处：“Removal of graffiti from a surface that has been treated in this way is much easier, usually using low-pressure water which reduces the possibility of damage.”（从经过这种处理的表面上清除涂鸦要容易得多，通常使用低压水，从而降低造成损害的可能性。）题干中的 a precautionary strategy 就是 F 段所说的 anti-graffiti coatings 这类预防性处理，定位句里 “a surface that has been treated in this way” 中的 in this way 正是回指这种处理；the benefit … on the gentle removal 则对应 much easier 以及后半句用 low-pressure water（低压水）从而减少损害可能的说明——既让清除变得容易，又让清除手段更加温和。因此答案是 G 段。",
          "traps": [
            "为什么不是 F 段：F 段只是在提出预防思路（anti-graffiti coatings）并说明涂层如何施涂，属于「做法」；清除变得容易这一「好处」留到 G 段才交代。",
            "为什么不是 D 段：D 段讲的是化学与机械两大类清除技术以及作业时的安全要求，并没有涉及预防性处理给清除带来的好处。"
          ]
        },
        {
          "questionId": "q16",
          "questionNumber": 16,
          "stem": "the damaging and accumulative impact of graffiti to the community",
          "translation": "涂鸦对社区造成的破坏性且不断累积的影响",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "Graffiti can also lead to more serious forms of vandalism and, ultimately, the deterioration of an area, contributing to social decline."
          },
          "synonyms": [
            "“the damaging … impact” 同义替换为原文的 “more serious forms of vandalism” 与 “the deterioration of an area”",
            "“accumulative” 同义替换为原文的 “also … and, ultimately”，also 表示在前面的危害之上继续叠加，ultimately 表示最终累积到区域层面",
            "“to the community” 同义替换为原文的 “contributing to social decline”，social decline（社会层面的下滑）即对社区的冲击"
          ],
          "locatingTip": "定位：题干关键词是 community 与 damaging、deterioration。B 段是集中回答“为什么要尽快清除涂鸦”的段落，段末句直接落到区域恶化与社会下降，一步命中。确定答案技巧：题干把影响分成两层——破坏性（damaging）与累积性（accumulative）。原文用 can also lead to … and, ultimately … 的递进结构表达：先导致更严重的破坏行为，最终使区域环境恶化、社会下滑，破坏由个案累积到整个社区，因此 accumulating 与 ultimately、contributing to social decline 一一对应。",
          "analysis": "B 段的主题是“为什么应当尽快清除涂鸦”，段落最后一句从更宏观的层面补上一条理由：“Graffiti can also lead to more serious forms of vandalism and, ultimately, the deterioration of an area, contributing to social decline.”（涂鸦还可能引发更严重的破坏行为，并最终导致一个区域的环境恶化，助长社会衰败。）题干中的 the damaging … impact 对应 more serious forms of vandalism 与 the deterioration of an area；accumulative（累积性的）对应 also 与 ultimately 串起来的递进链条——先是出现更严重的破坏行为，最终累积成整个区域的恶化；to the community 则对应 contributing to social decline，social decline 正是社区与社会层面的下滑。三处信息一一对应，因此本题答案落在 B 段。",
          "traps": [
            "为什么不是 E 段：E 段虽然也提到损害，但说的是防范设施本身的影响——“they can be almost as damaging to the quality of the environment as the graffiti they prevent”，即墙、栏杆、门闸等屏障对环境质量的破坏，而不是涂鸦对社区累积的破坏性影响。",
            "为什么不是 D 段：D 段的损害谈的是清除作业可能对基材表面造成的影响（assess the ability of the substrate to withstand the prescribed treatment），与社区层面的社会衰败无关。"
          ]
        },
        {
          "questionId": "q17",
          "questionNumber": 17,
          "stem": "the need for different preventive measures being taken to cope with graffiti",
          "translation": "需要采取不同的预防措施来应对涂鸦",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "As no two sites are the same, no one set of protection measures will be suitable for all situations. Each site must be looked at individually."
          },
          "synonyms": [
            "“different preventive measures” 同义替换为原文的 “no one set of protection measures will be suitable for all situations”，既然不存在一套通用措施，措施就必须各不相同",
            "“the need for” 同义替换为原文的 “must be looked at individually”（必须逐处单独考察），must 表达必要性",
            "“preventive measures” 与原文的 “protection measures” 及 E 段首句的 “preventive strategies” 对应，均指防范涂鸦的手段"
          ],
          "locatingTip": "定位：题干核心词是 preventive measures 与 different。全文以预防为主题的只有 E 段，其首句 “A variety of preventive strategies can be adopted to combat a recurring problem of graffiti at a given site.” 就含 preventive strategies 原词，扫到即锁定。确定答案技巧：题干要的是「为什么必须采取不同措施」。原文用 as no two sites are the same 说明前提，用 no one set of protection measures will be suitable for all situations 说明不存在万能方案，再用 each site must be looked at individually 强调必须逐处单独考虑，三句合起来正是「措施必须因场地而异」；E 段随后列举监控、巡逻、物理屏障三类不同手段，也印证了 different 一词。",
          "analysis": "E 段开头两句直接回答题干：“A variety of preventive strategies can be adopted to combat a recurring problem of graffiti at a given site. As no two sites are the same, no one set of protection measures will be suitable for all situations. Each site must be looked at individually.”（可以采取多种预防策略来应对某一地点反复出现的涂鸦问题。由于没有两个地点是相同的，不存在一套适用于所有情况的保护措施。每一处都必须单独考察。）题干中的 the need for different preventive measures 正是 no one set of protection measures will be suitable for all situations 的概括——既然没有万能方案，就必须针对不同场地采取不同措施；each site must be looked at individually 里的 must 对应题干中的 the need for。E 段随后列举的监控系统（closed circuit television 等）、安保巡逻与物理屏障三类手段，也正好构成「不同的预防措施」这一说法。因此答案是 E 段。",
          "traps": [
            "为什么不是 F 段：F 段虽然用 “the preventive strategies mentioned above” 回顾了前面的预防策略，但落点转为「反复清除终将损伤表面」以及防涂鸦涂层如何施涂，没有再讲措施必须因地而异。",
            "为什么不是 C 段：C 段讲的是涂鸦事件发生之后建筑物所有者与顾问应如何应对（报警、借助标记查找作案人、拍照取证与索赔），属于事后处理而非预防措施的差异化问题。"
          ]
        },
        {
          "questionId": "q18",
          "questionNumber": 18,
          "stem": "a legal proposal made to the owner of building against graffiti",
          "translation": "向建筑物所有者提出的、针对涂鸦的处理方案（建议）",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "In the event of graffiti incidents, it is important that the owners of buildings or other structures and their consultants are aware of the approach they should take in dealing with the problem."
          },
          "synonyms": [
            "“the owner of building” 同义替换为原文的 “the owners of buildings or other structures”，对象完全一致",
            "“a proposal made” 同义替换为原文的 “the approach they should take”（应当采取的处理办法），即向业主给出的方案建议",
            "“against graffiti” 对应原文的 “In the event of graffiti incidents … in dealing with the problem”，即针对涂鸦事件的处理"
          ],
          "locatingTip": "定位：题干的两个抓手是 owner of building 与 proposal。owners of buildings 这一搭配在全文只出现在 C 段，直接锁定该段第一、二句。确定答案技巧：题干里的 proposal（建议）与原文的 the approach they should take in dealing with the problem 属于同一层意思，而提出对象正是业主及其顾问。C 段接着给出的做法带有明显的程序与法律色彩——报警（The police should be informed）、依据事件规律与标记查找作案人（An incidence pattern can identify possible culprits）、拍照协助警方起诉（may assist the police in bringing a prosecution）、照片也是保险索赔所需（required for insurance claims），题干把这个涉及报警与起诉的整套办法概括为 legal proposal。",
          "analysis": "C 段在指出“清除历史敏感表面上的涂鸦要慎重”之后，紧接着向建筑物一方提出应当如何应对：“In the event of graffiti incidents, it is important that the owners of buildings or other structures and their consultants are aware of the approach they should take in dealing with the problem.”（发生涂鸦事件时，建筑物或其他构筑物的所有者及其顾问必须清楚自己应当采取的处理办法。）题干中的 the owner of building 对应 owners of buildings or other structures；a proposal made（提出的建议）对应 the approach they should take in dealing with the problem；against graffiti 对应 In the event of graffiti incidents … dealing with the problem。C 段随后列出的具体做法带有明显的程序与法律性质：The police should be informed（应当报警）、An incidence pattern can identify possible culprits（事件规律可帮助识别作案人）、Photographs … may assist the police in bringing a prosecution（照片可协助警方提起诉讼）、Such images are also required for insurance claims（这些影像也是保险索赔所需）。题干用 legal proposal 把这一整套涉及报警、取证与起诉的要求概括起来，因此答案落在 C 段。",
          "traps": [
            "为什么不是 D 段：D 段确实也给出建议（follow product guidelines、wear the appropriate protective equipment、small trial areas 等），但对象是从事清除作业的操作人员，属于作业规范与人身安全，不是向建筑物所有者提出的处理方案。",
            "为什么不是 B 段：B 段只解释为什么要尽快清除涂鸦，没有向业主提出任何建议或方案。"
          ]
        },
        {
          "questionId": "q19",
          "questionNumber": 19,
          "stem": "the reasons of removing graffiti as soon as possible.",
          "translation": "尽快清除涂鸦的原因",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "It is usually considered a priority to remove graffiti as quickly as possible after it appears. This is for several reasons."
          },
          "synonyms": [
            "“as soon as possible” 同义替换为原文的 “as quickly as possible”",
            "“the reasons” 同义替换为原文的 “This is for several reasons”，原文随后用 The first is …、It may also be …、Also …、Graffiti can also … 逐条列举原因",
            "“removing graffiti” 在原文中以 “remove graffiti” 原词出现，动作完全对应"
          ],
          "locatingTip": "定位：题干的 remove graffiti as soon as possible 与 B 段首句 “remove graffiti as quickly as possible” 几乎逐词对应，扫读时可一眼锁定。确定答案技巧：首句给出“尽快清除是优先事项”这一结论，第二句 This is for several reasons 明确宣告下文要列原因，随后段落依次给出四条理由——防止「模仿式」跟风涂抹、涂鸦可能带有种族主义或其他冒犯性质、颜料胶水与墨迹干后越来越难清除、可能引发更严重的破坏并导致区域衰败。整段就是一份「原因清单」，与题干 the reasons 完全吻合。",
          "analysis": "B 段是全文唯一集中回答“为什么要尽快清除”的段落，首句即本题定位句：“It is usually considered a priority to remove graffiti as quickly as possible after it appears. This is for several reasons.”（涂鸦出现之后尽快清除通常被视为优先事项。这样做有几个原因。）第二句 This is for several reasons 明确宣告下面要逐条列出理由，随后段落以 The first is …、It may also be …、Also …、Graffiti can also … 的并列结构给出四层原因：其一是防止“模仿式”跟风涂抹（prevent ‘copy-cat’ emulation which can occur rapidly once a clean surface is defaced）；其二是涂鸦可能具有种族主义或其他冒犯性质，许多公司与市政机构规定在一两小时内清除；其三是颜料、胶水与墨迹会随时间变干而越来越难清除（as paints, glues and inks dry out over time they can become increasingly difficult to remove）；其四是涂鸦可能引发更严重的破坏行为，最终导致区域衰败。题干 the reasons of removing graffiti as soon as possible 与首句 remove graffiti as quickly as possible 逐词对应，as soon as possible 即原文的 as quickly as possible，因此答案是 B 段。",
          "traps": [
            "为什么不是 D 段：D 段讲的是“用什么方法清除”（化学与机械两大类）以及作业安全要求，属于手段问题，不解释为什么必须尽快清除。",
            "为什么不是 E 段：E 段谈的是预防策略（preventive strategies）与事后防范，讨论的是如何避免反复出现，而不是清除为何紧迫。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 20–21 多选（Choose TWO letters, A–E）：清除涂鸦的方法",
      "mode": "per_question",
      "questionRange": {
        "start": 20,
        "end": 21
      },
      "items": [
        {
          "questionId": "q20",
          "questionNumber": 20,
          "stem": "Which two statements are true concerning the removal of graffiti? (Choose TWO letters, A-E)",
          "translation": "关于清除涂鸦的方法，以下哪两项陈述是正确的？（从 A-E 中选择两项）",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "If there is any doubt regarding this, then small trial areas should be undertaken to assess the impact of more extensive treatment."
          },
          "synonyms": [
            "“a small patch trial” 同义替换为原文的 “small trial areas”，即先在小块区域试做",
            "“before large-scale removal” 同义替换为原文的 “to assess the impact of more extensive treatment”，more extensive treatment 就是更大范围的处理",
            "“Carrying out” 对应原文的 “should be undertaken”（应当进行）"
          ],
          "locatingTip": "定位：选项 B 的关键词是 small patch trial 与 large-scale removal。原文不会用 trial 以外的同义表达绕开，而是直接用 small trial areas 与 more extensive treatment，出现在 D 段末句，扫读 trial、extensive 即可定位。确定答案技巧：题目问「大规模清除前先做小面积试验」是否被提到。原文末句明确写“如果对基材能否承受所规定的处理方式有任何疑问，就应当先做小块试验区（small trial areas should be undertaken），以评估更大范围处理（more extensive treatment）会带来的影响”，这与选项 B 的 small patch trial before large-scale removal 完全同义。原文给该做法附加的前提是「存有疑问时」，选项只是陈述这一做法本身，并未添加与原文冲突的条件，因此 B 与原文一致。",
          "analysis": "D 段在讲完化学与机械两类清除方法之后，对具体作业提出操作建议，末句是本题依据：“When examining a graffiti incident it is important to assess the ability of the substrate to withstand the prescribed treatment. If there is any doubt regarding this, then small trial areas should be undertaken to assess the impact of more extensive treatment.”（检查涂鸦事件时，重要的一点是评估基材承受既定处理方式的能力。如果对此存有任何疑问，就应当先做小块试验区，以评估更大范围的处理会造成什么影响。）选项 B “Carrying out a small patch trial before large-scale removal”（在大规模清除之前先做小面积试验）正是这句的同义改写：a small patch trial 对应 small trial areas，before large-scale removal 对应 assess the impact of more extensive treatment，Carrying out 对应 should be undertaken。原文把这一做法放在“对基材能否承受处理方式存疑”的前提下提出，说明它是作者推荐的处理途径；选项只是陈述该做法本身，没有添加与原文相悖的条件，因此与原文一致，B 为正确选项。同组的另一个正确选项是 D（见第 21 题解析）。",
          "traps": [
            "为什么不是 A：原文说化学清洗的溶剂 “can range from water to potentially hazardous chemical ‘cocktails’”，把化学混合剂（cocktail）归入 potentially hazardous（有潜在危害）的一端，水才是最温和的一端；选项 A 声称 cocktail 清除比水处理更安全，与原文恰好相反。",
            "为什么不是 C：全文没有比较各种清除方法的费用高低。出现 cost 的只有 E 段 “the cost of this may be too high for most situations.”，那里说的是安保巡逻等防范措施成本可能过高，与化学清除的价格无关。",
            "为什么不是 E：原文只是把清除方法分成化学与机械两大系统（Broadly these divide between chemical and mechanical systems），并分别说明各自的注意事项，从未比较两者的适用程度，更没说机械方法更适用。",
            "同组的另一正确答案是 D（对应第 21 题）；本题只需排除 A、C、E 三个干扰项。"
          ]
        },
        {
          "questionId": "q21",
          "questionNumber": 21,
          "stem": "Which two statements are true concerning the removal of graffiti? (Choose TWO letters, A-E)",
          "translation": "关于清除涂鸦的方法，以下哪两项陈述是正确的？（从 A-E 中选择两项）",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Chemical preparations are based on dissolving the media; these solvents can range from water to potentially hazardous chemical ‘cocktails’. Mechanical systems such as wire-brushing and grit-blasting attempt to abrade or chip the media from the surface."
          },
          "synonyms": [
            "“risks” 同义替换为原文的 “potentially hazardous”（潜在危害）以及后文的 “Care should be taken to comply with health and safety legislation”（须注意遵守健康与安全法规）",
            "“Mechanical removals” 同义替换为原文的 “Mechanical systems such as wire-brushing and grit-blasting”，钢丝刷打磨与喷砂都是机械清除方式",
            "“both chemical and mechanical methods” 对应原文的 “Broadly these divide between chemical and mechanical systems”，把两类方法并列表述"
          ],
          "locatingTip": "定位：选项 D 的关键词是 risks 与 chemical and mechanical。D 段把清除方法分成 chemical 与 mechanical 两类并分别提示危险性：化学一侧的溶剂可以是有害的化学混合剂，机械一侧的打磨、喷砂会磨蚀或崩落基材，紧随其后还要求遵守健康与安全法规、保护行人与作业者。确定答案技巧：判断「两类方法都有风险」需要同时核对两条线索——化学一侧的 potentially hazardous chemical ‘cocktails’，机械一侧的 wire-brushing and grit-blasting 加上 Care should be taken to comply with health and safety legislation … protection of both passers-by and any person carrying out the cleaning。原文用并列结构同时覆盖两边，因此 D 正确。",
          "analysis": "D 段先给方法分类，再分别提示两类方法的风险：“Broadly these divide between chemical and mechanical systems. Chemical preparations are based on dissolving the media; these solvents can range from water to potentially hazardous chemical ‘cocktails’. Mechanical systems such as wire-brushing and grit-blasting attempt to abrade or chip the media from the surface.”（大体上可分为化学与机械两大系统。化学制剂靠溶解涂鸦介质起作用，这些溶剂从水一直到有潜在危害的化学「混合剂」不等。机械系统如钢丝刷打磨、喷砂，则试图把介质从表面磨蚀或崩落下来。）随后段落强调：“Care should be taken to comply with health and safety legislation with regard to the protection of both passers-by and any person carrying out the cleaning.”，并要求采取措施防止 run-off、aerial mists、drips and splashes 危及未受保护的路人。可见化学一侧的风险来自 potentially hazardous 的溶剂，机械一侧的风险来自打磨、喷砂作业对操作者和路人的伤害以及对基材的磨损，两类方法都必须遵守健康与安全法规并采取防护措施。选项 D “There are risks for both chemical and mechanical methods” 正是对这两条并列信息的概括，因此正确。同组的另一个正确选项是 B（见第 20 题解析）。",
          "traps": [
            "为什么不是 A：原文把化学混合剂（cocktail）列在 potentially hazardous 的一端，而水是溶剂中最温和的一端，选项 A 说 cocktail 清除比水处理更安全，与原文相反。",
            "为什么不是 C：全文没有提到清除涂鸦的费用比较，cost 只出现在 E 段，且指防范措施（安保巡逻等）成本可能过高。",
            "为什么不是 E：原文只是把清除方法分为化学与机械两类并分别说明注意事项，并未比较二者的适用程度，谈不上「机械方法更适用」。",
            "同组的另一正确答案是 B（对应第 20 题）；本题只需排除 A、C、E 三个干扰项。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 22–23 多选（Choose TWO letters, A–E）：应对反复出现的涂鸦问题",
      "mode": "per_question",
      "questionRange": {
        "start": 22,
        "end": 23
      },
      "items": [
        {
          "questionId": "q22",
          "questionNumber": 22,
          "stem": "Which TWO of the following preventive measures against graffiti are mentioned effective in the passage? (Choose TWO letters, A-E)",
          "translation": "以下哪两项针对涂鸦的预防措施在文中被提到是有效的？（从 A-E 中选择两项）",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Security patrols will also act as a deterrent to prevent recurring attacks."
          },
          "synonyms": [
            "“police patrols” 同义替换为原文的 “Security patrols”（安保巡逻），二者都指街面上的巡查力量",
            "“Increase” 对应原文的 “will also act as a deterrent”，即通过增加巡逻产生威慑效果",
            "“mentioned effective” 同义替换为原文的 “act as a deterrent to prevent recurring attacks”（起到威慑作用，防止再次发生）"
          ],
          "locatingTip": "定位：题干问“被提到有效的预防措施”，主题段落是 E 段，其首句 “A variety of preventive strategies can be adopted to combat a recurring problem of graffiti at a given site.” 已经点题。选项 B 的关键词 patrols 在全文只出现在 “Security patrols will also act as a deterrent to prevent recurring attacks.”，一处命中。确定答案技巧：原文明确说安保巡逻能起威慑作用、防止涂鸦反复发生，即被认可为有效手段；紧随其后的 “However, the cost of this may be too high for most situations.” 只是成本方面的保留意见，并未否定其有效性，因此 B 成立。",
          "analysis": "E 段列举了若干可行的预防措施。在讲完监控系统之后紧接着写道：“Security patrols will also act as a deterrent to prevent recurring attacks.”（安保巡逻也将起到威慑作用，防止涂鸦反复发生。）选项 B “Increase the police patrols on the street”（增加街头警力巡逻）与此对应：police patrols 对应原文的 security patrols，都指在街面巡查的力量；Increase 与 “act as a deterrent to prevent recurring attacks” 所表达的「加强巡查以产生效果」相呼应；mentioned effective 由「起到威慑作用、防止再次发生」得到印证。原文紧随其后还有一句保留意见：“However, the cost of this may be too high for most situations.”（不过对大多数情况来说这样做成本可能过高），它只说明成本上的局限，并未否定安保巡逻的有效性，因此不影响 B 的正确性。另一个正确选项是 D（见第 23 题解析）。",
          "traps": [
            "为什么不是 A：原文没有提到在社区组织更多反涂鸦运动。E 段列举的预防措施只有监控系统（closed circuit television 等）、安保巡逻与物理屏障三类，F 段补充的是防涂鸦涂层，都与社区反涂鸦运动无关。",
            "为什么不是 C：原文的 anti-graffiti coatings 是施涂在已有表面上的处理层（usually applied by brush or spray），不是新建建筑所用的拒水材料，选项 C 把「涂层处理」偷换成了「新建建筑加拒水材料」。",
            "为什么不是 E：原文说涂层只是 “leaving a thin veneer that essentially serves to isolate the graffiti from the surface”（留下一层薄膜，用来把涂鸦与表面隔离开），是一层薄薄的屏障，并不是提供一整块新表面，选项 E 把薄膜夸大成了 new surface。",
            "同组的另一正确答案是 D（对应第 23 题）；本题只需排除 A、C、E 三个干扰项。"
          ]
        },
        {
          "questionId": "q23",
          "questionNumber": 23,
          "stem": "Which TWO of the following preventive measures against graffiti are mentioned effective in the passage? (Choose TWO letters, A-E)",
          "translation": "以下哪两项针对涂鸦的预防措施在文中被提到是有效的？（从 A-E 中选择两项）",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Surveillance systems such as closed circuit television may also help. In cities and towns around the country, prominently placed cameras have been shown to reduce anti-social behavior of all types including graffiti."
          },
          "synonyms": [
            "“security cameras” 同义替换为原文的 “Surveillance systems such as closed circuit television” 与 “cameras”",
            "“visible” 同义替换为原文的 “prominently placed”（安放在显眼位置）",
            "“mentioned effective” 同义替换为原文的 “may also help” 以及 “have been shown to reduce anti-social behavior of all types including graffiti”（已被证明能减少包括涂鸦在内的各类反社会行为）"
          ],
          "locatingTip": "定位：选项 D 的关键词是 cameras 与 visible，E 段中同时出现 cameras 与 prominently placed（显眼位置），一处即可锁定。确定答案技巧：原文先说 “Surveillance systems such as closed circuit television may also help.”，把监控系统列为有帮助的手段；随后用 “prominently placed cameras have been shown to reduce anti-social behavior of all types including graffiti” 给出已被证实的成效，have been shown to reduce 正对应题干所说的 effective，visible 则对应 prominently placed。",
          "analysis": "E 段在讲预防策略时专门提到监控手段：“Surveillance systems such as closed circuit television may also help. In cities and towns around the country, prominently placed cameras have been shown to reduce anti-social behavior of all types including graffiti.”（闭路电视之类的监控系统也可能有所帮助。在全国各地的城镇中，安放位置显眼的摄像头已被证明能够减少包括涂鸦在内的各类反社会行为。）选项 D “Installing more visible security cameras”（安装更多显眼的安防摄像头）与此对应：security cameras 对应 cameras 与 surveillance systems such as closed circuit television；visible（显眼的）对应 prominently placed（放置在显眼位置）；mentioned effective 则对应 may also help 以及 have been shown to reduce（已被证明能够减少）。因此 D 是被原文提到且被认可有效的预防措施。另一个正确选项是 B（见第 22 题解析）。",
          "traps": [
            "为什么不是 A：原文没有提到在社区组织反涂鸦运动，E 段只列举监控、巡逻与物理屏障三类手段。",
            "为什么不是 C：原文的防涂鸦涂层是施涂在已有表面上的处理层，不是新建建筑或拒水建筑材料，选项把「涂层」偷换成了「建筑与材料」。",
            "为什么不是 E：原文强调涂层只是一层薄膜（a thin veneer），作用是隔离涂鸦与表面，并不是提供一整块新表面，选项 E 夸大了涂层的作用。",
            "同组的另一正确答案是 B（对应第 22 题）；本题只需排除 A、C、E 三个干扰项。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–27 摘要填空（Choose NO MORE THAN TWO WORDS from the passage）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 27
      },
      "items": [
        {
          "questionId": "q24",
          "questionNumber": 24,
          "stem": "Ancient graffiti is of significance and records the 24 ________ of life for that period.",
          "translation": "古代涂鸦具有重要意义，它记录了那一时期生活的一部 ________。",
          "answer": "social history",
          "wordClass": "名词短语（形容词 social 作前置定语修饰名词 history，整个短语作 records 的宾语，其后 of life for that period 进一步限定；共两个单词，不加冠词、不用复数）。",
          "locating": {
            "paragraph": "A",
            "quote": "In such circumstances it has acquired invaluable historical and archaeological significance, providing a social history of life and events at that time."
          },
          "synonyms": [
            "“Ancient graffiti is of significance” 同义替换为原文的 “it has acquired invaluable historical and archaeological significance”（具有极其珍贵的历史与考古意义）",
            "“records” 同义替换为原文的 “providing”（提供、记载）",
            "“of life for that period” 同义替换为原文的 “of life and events at that time”，that time 即 for that period"
          ],
          "locatingTip": "定位：空格所在句的关键词是 Ancient graffiti、significance 与 records。A 段先交代涂鸦并非新现象——“examples can be found on ancient structures around the world, in some cases predating the Greeks and Romans”，随后一句给出它的意义，即本题定位句。确定答案技巧：题干把原文的 “providing a social history of life and events at that time” 压缩成 “records the … of life for that period”，provides 与 records 同义，of life and events at that time 与 of life for that period 对应，因此空格要填 a 与 of 之间的 social history。注意词数限制为不超过两个单词，social history 恰好两个词，必须完整写出，不能只写 history，也不要加冠词 a 或 the。",
          "analysis": "A 段在说明涂鸦并非新现象、世界各地古代建筑上都能找到实例（有些甚至早于希腊人和罗马人）之后，指出古代涂鸦的价值：“In such circumstances it has acquired invaluable historical and archaeological significance, providing a social history of life and events at that time.”（在这种情况下，它具有了极其珍贵的历史与考古意义，提供了当时生活与事件的一部社会史。）题干中的 “Ancient graffiti is of significance” 对应 invaluable historical and archaeological significance；“records” 对应 providing（提供、记载）；“the ________ of life for that period” 对应 a social history of life and events at that time，其中 that time 即题干所说的 for that period。因此空格所填为 social history。摘要填空的答案必须来自原文原词，且本题限词数为不超过两个单词，social history 正好两个词，须完整照抄，不能只写 history，也不必加冠词。",
          "traps": []
        },
        {
          "questionId": "q25",
          "questionNumber": 25,
          "stem": "The police can recognize newly committed incidents of graffiti by the signature which is called 25 ________ that they are familiar with.",
          "translation": "警方可以借助那种被称为 ________ 的、他们已熟悉的签名来识别新发生的涂鸦事件。",
          "answer": "tags",
          "wordClass": "名词（复数形式 tags）。空格位于被动结构 is called 之后，作主语补足语（表语），说明 the signature 的称呼，其后接定语从句 that they are familiar with；原文以 known as ‘tags’ 给出这一称呼，指涂鸦者程式化的签名或绰号。",
          "locating": {
            "paragraph": "C",
            "quote": "An incidence pattern can identify possible culprits, as can stylised signatures or nicknames, known as ‘tags’, which may already be familiar to local police."
          },
          "synonyms": [
            "“The police can recognize … incidents of graffiti” 对应原文的 “An incidence pattern can identify possible culprits” 以及句末的 “local police”",
            "“the signature” 同义替换为原文的 “stylised signatures or nicknames”（程式化的签名或绰号）",
            "“which is called … that they are familiar with” 同义替换为原文的 “known as ‘tags’, which may already be familiar to local police”"
          ],
          "locatingTip": "定位：题干关键词是 police 与 signature。C 段后半部分集中讲警方如何利用记录与标记，句中出现 stylised signatures、known as、local police 三个抓手，一步命中。确定答案技巧：题干用 called 引出名称，对应原文的 known as，名称就是 tags；题干后半句 “that they are familiar with” 正对应原文的 “which may already be familiar to local police”。填一个词即可，并要按原文写复数形式 tags，不能写成单数 tag 或加引号以外的其他形式。",
          "analysis": "C 段在讲涂鸦事件发生后业主应如何处理时，给出了警方利用涂鸦标记识别作案人的做法：“An incidence pattern can identify possible culprits, as can stylised signatures or nicknames, known as ‘tags’, which may already be familiar to local police.”（事件发生的规律有助于识别可能的作案人，程式化的签名或绰号也有同样作用，这些被称为「tags」，可能已为当地警方所熟悉。）题干中的 “The police can recognize newly committed incidents of graffiti” 对应 An incidence pattern can identify possible culprits 与句末的 local police；“the signature which is called …” 对应 stylised signatures or nicknames, known as ‘tags’；“that they are familiar with” 对应 which may already be familiar to local police。因此空格填 tags。原文用复数形式并与前面并列的 signatures、nicknames 保持一致，作答时写一个单词 tags 即可，不要写成单数 tag。",
          "traps": []
        },
        {
          "questionId": "q26",
          "questionNumber": 26,
          "stem": "Operatives ought to comply with relevant rules during the operation, and put on suitable 26 ________.",
          "translation": "操作人员应在作业期间遵守相关规程，并穿戴合适的 ________。",
          "answer": "protective equipment",
          "wordClass": "名词短语（形容词 protective 作前置定语修饰不可数名词 equipment，作 put on 的宾语；共两个单词，不加冠词、不变复数）",
          "locating": {
            "paragraph": "D",
            "quote": "Operatives should follow product guidelines in terms of application and removal, and wear the appropriate protective equipment."
          },
          "synonyms": [
            "“Operatives” 在原文中原词出现，指从事清除作业的人员",
            "“comply with relevant rules” 同义替换为原文的 “follow product guidelines in terms of application and removal”（遵循产品在施用与清除方面的指引）",
            "“put on suitable” 同义替换为原文的 “wear the appropriate”，suitable 对应 appropriate；答案词 “protective equipment” 在原文中原词复现"
          ],
          "locatingTip": "定位：题干有两个抓手——Operatives（操作人员）与 protective。全文同时出现 operatives 与 protective 的只有 D 段（C 段的 cleaning operatives 指照片对清洗人员的用处，与此题无关），该段在讲完化学与机械两类方法后紧接着给出作业规范：“Operatives should follow product guidelines in terms of application and removal, and wear the appropriate protective equipment.”，一句即可锁定。确定答案技巧：题干把原文的并列结构拆成两句——comply with relevant rules 对应 follow product guidelines，put on suitable 对应 wear the appropriate，因此空格所填就是紧随其后的 protective equipment。注意 equipment 是不可数名词，不能写成 equipments，也不要加冠词 the。",
          "analysis": "D 段在分别说明化学与机械两类清除方法之后，对作业人员提出要求：“Operatives should follow product guidelines in terms of application and removal, and wear the appropriate protective equipment.”（操作人员应当遵循产品在施用与清除方面的指引，并穿戴适当的防护装备。）题干中的 “Operatives ought to comply with relevant rules during the operation” 对应 Operatives should follow product guidelines in terms of application and removal；“put on suitable” 对应 wear the appropriate。因此空格填 protective equipment。本题限词数为不超过两个单词，protective equipment 正好两个词；equipment 是不可数名词，必须保持原文形式，不能写成 equipments 或 protective equipments，也不必加冠词 the。",
          "traps": []
        },
        {
          "questionId": "q27",
          "questionNumber": 27,
          "stem": "Removal of graffiti from a new type of coating surface can be made much easier by using 27 ________.",
          "translation": "从一种新型涂层表面上清除涂鸦，可以通过使用 ________ 而变得容易得多。",
          "answer": "low-pressure water",
          "wordClass": "名词短语（复合名词）。空格位于动名词 using 之后，作 using 的宾语（by 后接动名词短语 by using ...，说明清除涂鸦所使用的手段），不是介词 by 的直接宾语；带连字符的 low-pressure 与 water 合计两个单词，须保留连字符。",
          "locating": {
            "paragraph": "G",
            "quote": "usually using low-pressure water which reduces the possibility of damage"
          },
          "synonyms": [
            "“a new type of coating surface” 同义替换为 G 段上一句的 “a surface that has been treated in this way”，即在 F 段所述防涂鸦涂层处理过的表面",
            "“can be made much easier by using” 同义替换为原文的 “is much easier, usually using …”，以及 “which reduces the possibility of damage”（降低造成损害的可能性）这一好处说明",
            "“low-pressure water” 在原文中原词复现，是清除涂鸦所用的手段"
          ],
          "locatingTip": "定位：题干的关键词是 coating surface 与 much easier。F 段末尾先给出 anti-graffiti coatings，G 段开头即说经此处理的表面清除涂鸦 “is much easier”，并点出所使用的手段，两段相邻，锁定 G 段。确定答案技巧：题干用 by using 提问「使用什么」，原文在 usually using 之后给出 low-pressure water，并紧接着解释它能 “reduces the possibility of damage”，正是「更容易、损坏更少」的原因。答案共两个单词，带连字符的 low-pressure 按一个单词计，符合不超过两个单词的限制，必须保留连字符写作 low-pressure water，不能写成 low pressure water 或 water。",
          "analysis": "F 段末尾交代预防性的防涂鸦涂层如何施涂，G 段紧接说明经这种处理后清除涂鸦的便利：“Removal of graffiti from a surface that has been treated in this way is much easier, usually using low-pressure water which reduces the possibility of damage.”（从经过这种处理的表面上清除涂鸦要容易得多，通常使用低压水，从而降低造成损害的可能性。）题干中的 “a new type of coating surface” 对应 a surface that has been treated in this way，指的是 F 段所述涂了 anti-graffiti coatings 的表面；“can be made much easier” 对应 is much easier 与 which reduces the possibility of damage；空格前的 by using 直接对应原文的 usually using。因此空格所填为 low-pressure water。虽然 low-pressure 与 water 合起来是两个单词、三个词形，但带连字符的 low-pressure 按雅思的计数规则算作一个单词，符合不超过两个单词的要求，作答时必须保留连字符写成 low-pressure water。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
