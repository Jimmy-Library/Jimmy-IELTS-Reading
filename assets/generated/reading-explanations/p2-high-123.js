(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-123", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-123",
  "meta": {
    "examId": "p2-high-123",
    "title": "Bird Migration 鸟类迁徙",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–20 段落标题匹配（List of Headings）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 20
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "Paragraph A (Q14): Choose the correct heading for paragraph A from the list of headings below.",
          "translation": "为 A 段（第 14 题）从标题列表中选出正确的标题，答案 iv. Physical characteristics that allow birds to migrate（使鸟类得以完成迁徙的身体构造特征）。",
          "answer": "iv",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "A Birds have many unique design features that enable them to perform such amazing feats of endurance. They are equipped with lightweight, hollow bones, intricately designed feathers providing both lift and thrust for rapid flight, navigation systems superior to any that man has developed"
          },
          "synonyms": [
            "Heading 中的 physical characteristics（身体构造特征）同义替换为原文的 design features（设计构造特征）",
            "Heading 中的 allow birds to migrate（使鸟能够迁徙）同义替换为原文的 enable them to perform such amazing feats of endurance（使它们能完成如此惊人的耐力壮举）",
            "原文列举 lightweight, hollow bones、intricately designed feathers、navigation systems、heat-conserving design，逐项对应 physical characteristics 这一概括",
            "原文的 a system of extracting oxygen from their lungs that far exceeds that of any other animal 与 accumulate considerable layers of fat 也属于身体构造与生理机能的说明"
          ],
          "locatingTip": "定位：段落标题匹配题没有题干关键词可用，必须靠段落主题句。A 段首句就是主题句：Birds have many unique design features that enable them to perform such amazing feats of endurance，读到 design features 就该意识到本段在讲鸟的构造。确定答案技巧：把首句的 design features 与选项 iv 中的 physical characteristics 对应起来，再横向核对段内其余句子是否都在描述身体构造（轻而中空的骨、提供升力与推力的羽毛、优于人类的导航系统、集中血流的保温设计、高效的呼吸系统、迁徙前积累脂肪），确认全段主题单一且一致后选 iv。",
          "analysis": "A 段是全文唯一一段集中介绍鸟类身体构造的文字，共四句：首句总起说鸟拥有许多独特构造（many unique design features），使它们能完成惊人的耐力壮举；第 2 句用 They are equipped with 逐项列举：轻而中空的骨骼（lightweight, hollow bones）、兼顾升力与推力的精巧羽毛（intricately designed feathers providing both lift and thrust for rapid flight）、比人类研制的任何导航系统都优越的导航系统（navigation systems superior to any that man has developed），以及把血液循环集中在温暖防水羽毛层之下的保温设计（heat-conserving design），使它们能面对最恶劣的气候；第 3 句讲呼吸系统在持续高空飞行时高效供氧，其取氧能力远超其他动物；第 4 句讲夏季繁殖后期食物充足时身体会积累大量脂肪，为长途迁徙提供能量。四句全部围绕“身体有哪些构造与机能让迁徙成为可能”，与选项 iv 的 Physical characteristics that allow birds to migrate 完全吻合，故答案为 iv。做题提示：这类“列举型”段落不要被细节淹没，只要抓住总起句的概括词（design features）与列举对象的共同属性（都是身体构造），即可与标题对上。",
          "traps": [
            "为什么不是 vii（Research findings on how birds migrate）：A 段通篇在介绍鸟的生理构造，没有出现研究、实验或证据一类表述；research findings 的内容集中在 E 段（Mounting evidence has confirmed、Experiments have shown 等）。",
            "为什么不是 v（The main reason why birds migrate）：迁徙的根本原因（冬季食物短缺）在 B 段首句 The fundamental reason that birds migrate is to find adequate food…；A 段虽提到 long migratory flights，但讲的是“靠什么飞”，不是“为什么飞”。",
            "为什么不是 i（The best moment to migrate）：出发时机的讨论在 F 段（part of the skill in arriving safely is setting off at the right time）；A 段只提夏季繁殖后期积累脂肪这一生理准备，谈不上“选择何时出发”。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "Paragraph B (Q15): Choose the correct heading for paragraph B from the list of headings below.",
          "translation": "为 B 段（第 15 题）从标题列表中选出正确的标题，答案 v. The main reason why birds migrate（鸟类迁徙的主要原因）。",
          "answer": "v",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "B The fundamental reason that birds migrate is to find adequate food during the winter months when it is in short supply."
          },
          "synonyms": [
            "Heading 中的 main reason 同义替换为原文的 fundamental reason（根本原因）",
            "Heading 中的 why birds migrate 与原文的 the reason that birds migrate 直接对应，只是从句形式改写为动名词短语",
            "原文给出的具体原因是 find adequate food during the winter months when it is in short supply（在食物短缺的冬季找到充足食物）",
            "原文后半段 Many species can tolerate cold temperatures if food is plentiful, but when food is not available, they must migrate 进一步把食物而非寒冷确立为决定因素"
          ],
          "locatingTip": "定位：B 段只有三句加一句过渡句，首句即主题句，The fundamental reason that birds migrate 与选项 v 的 main reason why birds migrate 几乎逐词对应，扫读首句即可锁定。确定答案技巧：找到主题句后还要用段内其余句子验证主题是否贯穿全段——第 2 句说这一问题主要适用于在温带和北极地区繁殖的鸟（那里只有短暂的生长季节食物充足），第 3 句说许多鸟在食物充足时能忍受低温，一旦食物不可得就必须迁徙；两处都在围绕“食物是迁徙的根本原因”展开，主题一致，故选 v。不要因为段中出现 winter months 就跳到 vi（越冬地），原文用 winter 只是在交代食物短缺的时间。",
          "analysis": "B 段共四句，是全文的“起因段”。首句 The fundamental reason that birds migrate is to find adequate food during the winter months when it is in short supply（鸟类迁徙的根本原因是冬季食物短缺时去寻找充足的食物）直接把原因点明，fundamental reason 与选项 v 中的 main reason 是同义表达。第 2 句 This particularly applies to birds that breed in the temperate and Arctic regions of the Northern Hemisphere, where food is abundant during the short growing season（这一点尤其适用于在北半球温带与北极地区繁殖的鸟，那里的食物只在短暂的生长季节充足）说明了问题集中出现的区域。第 3 句 Many species can tolerate cold temperatures if food is plentiful, but when food is not available, they must migrate（许多物种在食物充足时可以忍受低温，但食物一旦不可得就必须迁徙）用 can tolerate cold temperatures if food is plentiful 这一让步把“寒冷”排除在根本原因之外，进一步凸显食物才是决定因素。末句 However, intriguing questions remain 是引出后文的过渡句。整段逻辑链条围绕“为什么迁徙”展开，答案 v 成立。",
          "traps": [
            "为什么不是 vi（The best wintering grounds for birds）：B 段没有讨论哪里是越冬地，也没有对越冬地作优劣评价；文中的 winter months 只是说明食物短缺发生的时间段。",
            "为什么不是 iii（The influence of weather on the migration route）：B 段虽出现 cold temperatures、winter 这类季节与温度词，但原文明确说 Many species can tolerate cold temperatures if food is plentiful，等于排除天气作为决定因素，更没有涉及天气如何影响迁徙路线；天气与出发时机的讨论在 F 段。",
            "为什么不是 ix（The contrast between long-distance migration and short-distance migration）：B 段没有对迁徙距离作任何分类或比较，长距离飞行的内容出现在 C 段（arctic terns 的 25,000 miles 往返）。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "Paragraph C (Q16): Choose the correct heading for paragraph C from the list of headings below.",
          "translation": "为 C 段（第 16 题）从标题列表中选出正确的标题，答案 ii. The unexplained rejection of closer feeding grounds（对更近觅食地的无法解释的舍弃）。",
          "answer": "ii",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "One puzzling fact is that many birds journey much further than would be necessary just to find food and good weather. Nobody knows, for instance, why British swallows, which could presumably survive equally well if they spent the winter in equatorial Africa, instead of flying several thousand miles further to their preferred winter home in South Africa's Cape Province. Another mystery involves the huge migrations performed by arctic terns and mudflat-feeding shorebirds that breed close to Polar Regions. In general, the further north a migrant species breeds, the further south it spends the winter."
          },
          "synonyms": [
            "Heading 中的 unexplained 同义替换为原文的 One puzzling fact、Nobody knows 与 Another mystery",
            "Heading 中的 rejection of 同义替换为原文的 instead of flying several thousand miles further（不选更近的地方，反而再飞数千英里）",
            "Heading 中的 closer feeding grounds 同义替换为原文的 equatorial Africa（更靠近繁殖地的赤道非洲）以及 other areas of seemingly suitable habitat spanning two hemispheres（飞越的看似适宜的生境）",
            "Heading 中的 migration 对应原文的 journey much further 与 overfly other areas 所描述的迁徙行为"
          ],
          "locatingTip": "定位：段落标题题先看首句。C 段首句 One puzzling fact is that many birds journey much further than would be necessary just to find food and good weather，一句就同时扣住选项 ii 里的 unexplained（puzzling）与“飞得更远”两层意思。确定答案技巧：判断“未解之谜”类标题要看段落有没有给出答案——第 2 句 Nobody knows、段末 While we may not fully understand birds' reasons 都表明作者始终没有解释，段中只是举例（英国燕子不选赤道非洲而飞往南非开普省、北极燕鸥往返 25,000 英里）并总结规律（越靠北繁殖则越靠南越冬），因此选 ii。切勿因为文中出现 South Africa's Cape Province 而误选 vi（best wintering grounds）：那只是燕子选中的地点，段落重点在“为什么不选更近的”。",
          "analysis": "C 段围绕一个疑问展开：为什么许多鸟要飞得远远超过寻找食物与好天气所必需的距离。第 1 句给出总疑问（One puzzling fact），第 2 句以英国燕子（British swallows）为例——它们本可以在赤道非洲过冬而活得同样好，却要继续飞数千英里到南非开普省（instead of flying several thousand miles further to their preferred winter home in South Africa's Cape Province），这里 instead of 正是选项 ii 中 rejection（舍弃）的同义依据，被舍弃的 closer feeding grounds 就是更近的 equatorial Africa；第 3 句引入第二个谜团（Another mystery），即北极燕鸥与在滩涂觅食的鸻鹬类所做的巨大迁徙；第 4、5 句给出规律与代价（越靠北繁殖的物种越靠南越冬，北极燕鸥年往返 25,000 英里）；第 6 句 Yet 转折，指出这些鸟在途中会飞越两个半球上看似适宜的生境（overfly other areas of seemingly suitable habitat spanning two hemispheres），等于再次强调“有近处却不用”这一怪现象；末句 While we may not fully understand birds' reasons for going to particular places 明确表示至今无人能解释。全段由首句的 puzzling fact 引导，中途没有任何解释，末句再次强调无法理解，与选项 ii 的 unexplained rejection of closer feeding grounds 完全对应。",
          "traps": [
            "为什么不是 vi（The best wintering grounds for birds）：C 段虽提到 South Africa's Cape Province 与 southern latitudes，但这些只是叙述鸟实际去的地方，段落并未评价哪里的越冬地最好，也没有出现 best、ideal 一类判断依据；落点始终是“为什么不选更近的”这一无法解释的现象。",
            "为什么不是 ix（The contrast between long-distance migration and short-distance migration）：段中确有 For arctic terns, this necessitates an annual round trip of 25,000 miles 这样的距离数据，但那是用来说明“飞得比必要更远”的程度，全段没有把长距离迁徙与短距离迁徙分成两类作对比。",
            "为什么不是 iii（The influence of weather on the migration route）：C 段只在 just to find food and good weather 中提到好天气是迁徙通常的理由，并未说明天气如何影响迁徙路线；天气对出发时机与顺风利用的讨论在 F 段。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "Paragraph D (Q17): Choose the correct heading for paragraph D from the list of headings below.",
          "translation": "为 D 段（第 17 题）从标题列表中选出正确的标题，答案 x. Mysterious migration despite lack of teaching（尽管缺乏传授仍能完成的神秘迁徙）。",
          "answer": "x",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "D One of the greatest mysteries is how young birds know how to find the traditional wintering areas without parental guidance. Very few adults migrate with juveniles in tow, and youngsters may even have little or no inkling of their parents' appearance."
          },
          "synonyms": [
            "Heading 中的 mysterious（神秘的）同义替换为原文的 One of the greatest mysteries 与段末 Yet nobody has the slightest idea",
            "Heading 中的 lack of teaching（缺乏传授）同义替换为原文的 without parental guidance（没有父母指引）以及 Very few adults migrate with juveniles in tow（几乎没有成鸟带着幼鸟一同迁徙）",
            "Heading 中的 migration 对应原文的 find the traditional wintering areas、makes its way to ancestral wintering grounds 与 returning single-handedly to northern Europe",
            "段中杜鹃（cuckoo）的例子——由宿主养大却仍能独自找到祖先越冬地——是 mysterious migration 的具体例证"
          ],
          "locatingTip": "定位：D 段首句 One of the greatest mysteries is how young birds know how to find the traditional wintering areas without parental guidance 直接给出“谜团加没有父母指引”两个信息点，与选项 x 的 mysterious 和 lack of teaching 一一对应，读到首句即可锁定。确定答案技巧：核对段落是否整段围绕这一谜团——第 2 句说几乎没有成鸟带着幼鸟迁徙，幼鸟甚至对父母的模样毫无印象；第 3、4 句用杜鹃举例（把蛋下在别的鸟巢里，幼鸟长大后独自飞往热带祖先越冬地、次年独自返回北欧）；第 5 句给出唯一推论（幼鸟继承了内在的路线图与辨向能力）；末句 Yet nobody has the slightest idea as to how this is possible 再次回到“无人能解释”，与 mysterious 呼应。全段无解释、无研究结论，故选 x。",
          "analysis": "D 段的主题是幼鸟如何在没有人教的情况下找到传统越冬地。首句用 One of the greatest mysteries 定调，同时交代两个关键信息：对象是 young birds，条件是 without parental guidance。第 2 句用事实强化条件——Very few adults migrate with juveniles in tow, and youngsters may even have little or no inkling of their parents' appearance（几乎没有成鸟带着幼鸟同行，幼鸟甚至对父母的长相毫无概念），即所谓 lack of teaching 并非推测而是原文陈述。第 3、4 句以杜鹃为例：杜鹃把蛋下在别的鸟巢里，从此与幼鸟不再相遇；幼鸟被宿主养大后却能独自前往热带的祖先越冬地，并在次年独自返回北欧寻找同类配偶。第 5 句 The obvious implication is that it inherits from its parents an inbuilt route map and direction-finding capability, as well as a mental image of what another cuckoo looks like 给出唯一推论：幼鸟从父母那里继承了内在的路线图和辨向能力。末句 Yet nobody has the slightest idea as to how this is possible 表明这一推论本身也无从解释。mysteries、without parental guidance、nobody has the slightest idea 三处表述与选项 x 的 Mysterious migration despite lack of teaching 完全吻合，故答案为 x。",
          "traps": [
            "为什么不是 vii（Research findings on how birds migrate）：D 段没有任何实验、数据或研究结论，只有谜团与一个举例（杜鹃）以及作者推断；研究成果集中在 E 段。",
            "为什么不是 v（The main reason why birds migrate）：本段问的是“幼鸟怎么找到越冬地、为什么不用教”，属于机制与能力问题；迁徙的根本原因（冬季食物短缺）在 B 段。",
            "为什么不是 iii（The influence of weather on the migration route）：D 段通篇没有出现天气相关内容，天气与出发时机在 F 段。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "Paragraph E (Q18): Choose the correct heading for paragraph E from the list of headings below.",
          "translation": "为 E 段（第 18 题）从标题列表中选出正确的标题，答案 vii. Research findings on how birds migrate（关于鸟类如何迁徙的研究发现）。",
          "answer": "vii",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "E Mounting evidence has confirmed that birds use the positions of the sun and stars to obtain compass directions. They also seem to be able to detect the earth's magnetic field, probably due to having minute crystals of magnetite in the region of their brains."
          },
          "synonyms": [
            "Heading 中的 research findings 同义替换为原文的 Mounting evidence has confirmed 与本段后文的 Experiments have shown",
            "Heading 中的 how birds migrate（鸟类如何迁徙）同义替换为原文的一系列导航机制：use the positions of the sun and stars to obtain compass directions、detect the earth's magnetic field、see the plane of polarized light caused by the setting sun",
            "原文 an inborn map of the night sky and the pull of the earth's magnetic field 以及 an awareness of position and time 是研究得出的具体辨向依据",
            "原文 Travelling at night provides other benefits 一段是对夜间迁徙优势的研究性归纳，仍属“如何迁徙”的范畴"
          ],
          "locatingTip": "定位：E 段首句 Mounting evidence has confirmed that birds use the positions of the sun and stars to obtain compass directions，Mounting evidence has confirmed 这一表述明显是研究结论的口吻，直接对应选项 vii 的 research findings。确定答案技巧：逐一核对段内是否还有更多研究证据——第 2 句用 They also seem to be able to detect the earth's magnetic field 补充第二种机制；第 4 句 Experiments have shown that after being taken thousands of miles over an unfamiliar landmass, birds are still capable of returning rapidly to nest sites 又一实验结果；第 5 句 Such phenomenal powers are the product of computing several sophisticated cues 归纳出多项线索的综合运算。整段的骨架是“证据与实验支持的结论”，因此选 vii；段中虽然出现 How the birds use their 'instruments' remains unknown 这样的未知表述，那只是研究尚未完全解释的部分，不改变本段属于研究发现的性质。",
          "analysis": "E 段集中报告关于鸟类如何辨向迁徙的研究发现。首句 Mounting evidence has confirmed that birds use the positions of the sun and stars to obtain compass directions（越来越多的证据证实鸟类利用太阳和星星的位置获取罗盘方向）直接给出结论，Mounting evidence has confirmed 与选项 vii 的 research findings 对应。第 2 句补充第二种机制：They also seem to be able to detect the earth's magnetic field, probably due to having minute crystals of magnetite in the region of their brains（它们似乎还能感知地球磁场，可能是因为脑部有微小的磁铁矿晶体）。第 3 至 5 句指出精确导航还需要对位置与时间的感知，并给出实验证据：被带到数千英里外的陌生陆地上空后，鸟仍能迅速返回巢址；作者把这种能力归结为对多种线索的综合运算，包括内在的夜空地图与地球磁场引力。第 6 句承认 How the birds use their 'instruments' remains unknown，但紧接着用 one thing is clear 强调鸟类的感官感知优于人类。第 7 至 11 句继续报告夜间迁徙的机制与好处（依据落日定位、感知偏振光平面以校准罗盘、避开白天捕食者、减少脱水风险、夜间气流平稳利于持续飞行）。全段以研究证据为主线，说明鸟类“如何”迁徙，故答案为 vii。",
          "traps": [
            "为什么不是 iv（Physical characteristics that allow birds to migrate）：iv 对应 A 段对骨骼、羽毛、导航系统、保温设计等身体构造的逐项介绍；E 段虽然也谈导航能力，但立足点是证据与研究结论，而非罗列身体构造。",
            "为什么不是 x（Mysterious migration despite lack of teaching）：x 对应 D 段“幼鸟没有父母教导仍能迁徙”的谜团；E 段中虽有一句 How the birds use their 'instruments' remains unknown，但紧随其后就说 one thing is clear，本段主干仍是已经证实的发现，谜团类标题不合适。",
            "为什么不是 i（The best moment to migrate）：i 对应 F 段出发时机的选择；E 段讨论的是夜间飞行与辨向手段，不涉及何时出发。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "Paragraph F (Q19): Choose the correct heading for paragraph F from the list of headings below.",
          "translation": "为 F 段（第 19 题）从标题列表中选出正确的标题，答案 i. The best moment to migrate（迁徙的最佳时机）。",
          "answer": "i",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "F Nevertheless, all journeys involve considerable risk, and part of the skill in arriving safely is setting off at the right time. This means accurate weather forecasting and utilizing favourable winds."
          },
          "synonyms": [
            "Heading 中的 best moment（最佳时机）同义替换为原文的 setting off at the right time（在恰当的时间出发）",
            "Heading 中的 to migrate 对应原文的 setting off（出发）以及 all journeys（所有旅程）所指的迁徙行程",
            "原文 accurate weather forecasting and utilizing favourable winds 说明“最佳时机”要靠准确预报天气与利用顺风来判断",
            "原文 Often birds react to weather changes before there is any visible sign of them 与 Lapwings 提前西飞、赶在回暖前返回的例子，都是在证明鸟能把握出发与返回的时机"
          ],
          "locatingTip": "定位：F 段首句 Nevertheless, all journeys involve considerable risk, and part of the skill in arriving safely is setting off at the right time，setting off at the right time 即“选对出发时刻”，与选项 i 的 the best moment to migrate 直接对应，首句即可定位。确定答案技巧：核对段落是否围绕“时机”展开——第 2 句说这需要准确的天气预报与利用顺风；第 3、4 句讲鸟擅长此道，实验室测试证明它们能察觉地板与天花板之间气压的细微差别，并常在天气变化出现可见迹象之前就作出反应；最后以田凫（Lapwings）冷空气来临时西飞避寒、回暖前又返回荷兰为例，说明出发与返回都与气压变化同步。全段的关键词是 setting off、天气变化前反应，落点在时间选择而非路线改变，故选 i。",
          "analysis": "F 段讲鸟如何在恰当的时间启程以保证安全抵达。首句 Nevertheless, all journeys involve considerable risk, and part of the skill in arriving safely is setting off at the right time（然而所有旅程都有相当风险，安全抵达的技巧之一就是在恰当的时间出发）点明主题——出发时机的选择。第 2 句 This means accurate weather forecasting and utilizing favourable winds（这意味着要准确预报天气并利用顺风）说明判断时机的两项依据。第 3、4 句说鸟对此十分擅长，实验室测试显示有些鸟能察觉到房间地板与天花板之间的微小气压差，而且往往在天气变化出现任何可见迹象之前就作出反应。第 5 至 7 句以田凫为例：草地觅食的田凫在寒潮初至时从荷兰向西飞往不列颠群岛、法国与西班牙，因为地面一旦封冻它们就可能饿死；而当回暖尚未到来时它们又提前返回荷兰，返回时间与预示天气转好的气压变化相关。整段的论述核心都是“何时出发、何时返回”，与选项 i 的 the best moment to migrate 吻合，故答案为 i。",
          "traps": [
            "为什么不是 iii（The influence of weather on the migration route）：iii 强调天气对迁徙“路线”的影响；F 段虽出现 weather forecasting、favourable winds、cold snap、thaw 等天气词，但落点是 setting off at the right time，田凫的往返说明的是对天气时机的把握，而非路线因天气被改变。",
            "为什么不是 viii（Successful migration despite the trouble of wind）：viii 对应 G 段北美鸟被快速西风刮过大西洋仍安全抵达并返回；F 段提到 utilizing favourable winds 只是说鸟善于利用顺风，重点仍是选择出发时机。",
            "为什么不是 v（The main reason why birds migrate）：v 对应 B 段食物短缺这一根本原因；F 段后半句虽有 When the ground surface freezes, the birds could starve，但那是在解释田凫为何必须及时撤离，属于时机问题的背景，不是迁徙根本原因的论述。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "Paragraph G (Q20): Choose the correct heading for paragraph G from the list of headings below.",
          "translation": "为 G 段（第 20 题）从标题列表中选出正确的标题，答案 viii. Successful migration despite the trouble of wind（尽管受风的干扰仍成功迁徙）。",
          "answer": "viii",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Conversely, each autumn a small number of North American birds are blown across the Atlantic by fast-moving westerly tailwinds. Not only do they arrive safely in Europe, but, based on ringing evidence, some make it back to North America the following spring"
          },
          "synonyms": [
            "Heading 中的 the trouble of wind 同义替换为原文的 blown across the Atlantic by fast-moving westerly tailwinds（被快速西风的气流刮过大西洋）",
            "Heading 中的 successful migration 同义替换为原文的 arrive safely in Europe（安全抵达欧洲）与 some make it back to North America the following spring（有些次年春天还能返回北美）",
            "Heading 中的 despite 对应原文 Not only … but … 这一让步递进结构：先被风刮偏，仍然安全抵达并成功回返",
            "原文 after probably spending the winter with European migrants in sunny African climes 说明这些被风带走的鸟并未就此失散，迁徙依然完整"
          ],
          "locatingTip": "定位：G 段只有三句。第 1 句是威尔士曼岛鹱被带到美洲后提前回到巢穴的辨向实例；第 2、3 句说每年秋天少量北美鸟被快速西风刮过大西洋，却不但安全抵达欧洲，还有的次年春天返回北美。题干性质的匹配要先筛掉段落内部的干扰信息（曼岛鹱的辨向指向 vii 一类的导航话题），抓住成段的论述重心。确定答案技巧：把段落的两半信息与选项比对，只有 viii 同时包含“风带来的麻烦（被刮过大西洋）”与“迁徙仍然成功（安全抵达并返回）”两个要素，因此选 viii。",
          "analysis": "G 段是全文末段，包含两个对照性实例。第 1 句 In one instance a Welsh Manx shearwater carried to America and released was back in its burrow on Skokholm Island, off the Pembrokeshire coast, one day before a letter announcing its release! 讲一只威尔士曼岛鹱被人带到美洲释放后，竟在通知释放的信件到达前一天就回到了彭布罗克郡外斯科克霍姆岛的巢穴里，落脚点是鸟类惊人的辨向与归巢能力。第 2 句 Conversely, each autumn a small number of North American birds are blown across the Atlantic by fast-moving westerly tailwinds 转出另一类情形：每年秋天少量北美鸟被快速的西风（tailwinds）吹过大西洋，这明显属于被动的、非自愿的越洋飞行，正对应选项 viii 中 the trouble of wind（风的干扰）。第 3 句 Not Only do they arrive safely in Europe, but, based on ringing evidence, some make it back to North America the following spring（它们不仅安全抵达欧洲，而且根据环志证据，有些还在次年春天返回北美）用 Not only … but … 的递进结构强调结果的成功：被风刮偏后不但没有遇险，还能原路返回，甚至可能在非洲的阳光地带与欧洲候鸟一起度过冬天。全段把“风造成的被动迁徙”与“成功抵达并返回”两个要素组合起来，与选项 viii 的 Successful migration despite the trouble of wind 完全对应，故答案为 viii。",
          "traps": [
            "为什么不是 vii（Research findings on how birds migrate）：G 段是两则具体的飞行实例，没有实验设计或研究结论；关于辨向机制的研究发现集中在 E 段，段中的 ringing evidence 只是说明结果可靠性的佐证，并非本段主题。",
            "为什么不是 ii（The unexplained rejection of closer feeding grounds）：ii 对应 C 段“飞得比必要更远却无人能解释”的疑问；G 段的重点是鸟被风刮到远处之后仍然成功，不含任何“未解之谜”的表达。",
            "为什么不是 i（The best moment to migrate）：i 对应 F 段对出发与返回时机的把握；G 段讲的是飞行途中遭遇强风之后的结果，与何时出发无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 21 and 22 多选（Choose TWO letters, A–E）",
      "mode": "per_question",
      "questionRange": {
        "start": 21,
        "end": 22
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "A. Birds often fly further than they need to.",
          "translation": "（Questions 21–22：请在 A–E 五个表述中选出关于鸟类迁徙的两个正确表述）A. 鸟类常常飞得比它们实际需要的距离更远。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "One puzzling fact is that many birds journey much further than would be necessary just to find food and good weather. Nobody knows, for instance, why British swallows, which could presumably survive equally well if they spent the winter in equatorial Africa, instead of flying several thousand miles further to their preferred winter home in South Africa's Cape Province."
          },
          "synonyms": [
            "选项中的 Birds often（鸟类常常）同义替换为原文的 many birds（许多鸟），说明这是普遍现象",
            "选项中的 fly further than they need to 同义替换为原文的 journey much further than would be necessary",
            "原文进一步的佐证：all these individuals overfly other areas of seemingly suitable habitat spanning two hemispheres（途中飞越看似适宜的生境），即确实存在更近的可用地点",
            "选项中的 they need to 对应原文的 just to find food and good weather（仅仅为了觅食与好天气所需的距离）"
          ],
          "locatingTip": "定位：这是 Choose TWO 型多选题，五个选项分散在全文不同段落，正确做法是给每个选项找一个关键词再回原文核对。选项 A 的关键词是 fly further than they need to，与第 3 段首句 journey much further than would be necessary 逐词对应，一步锁定 C 段。确定答案技巧：不仅要找到同义句，还要确认原文态度一致——原文用 One puzzling fact 引出现象、用 instead of flying several thousand miles further 强调鸟确实舍近求远，并且没有出现任何反驳，因此 A 成立。另一个正确选项是 C（夜间飞行的鸟需水更少），其依据在第 5 段。",
          "analysis": "选项 A 的正确性由第 3 段的两个句子共同确立。第 1 句 One puzzling fact is that many birds journey much further than would be necessary just to find food and good weather 直白地说许多鸟飞行的距离远超寻找食物与好天气所必需的程度，与选项 A 的 Birds often fly further than they need to 完全一致，其中 many birds 对应 often，journey much further than would be necessary 对应 fly further than they need to。第 2 句以英国燕子为例进一步坐实这一现象：它们本可以在赤道非洲越冬而活得同样好，却要多飞数千英里前往南非开普省。第 6 句 Yet, en route to their final destination in far-flung southern latitudes, all these individuals overfly other areas of seemingly suitable habitat spanning two hemispheres 更明确指出它们在途中就飞越了两个半球上看似适宜的生境，说明“更近的可用地点确实存在”。因此 A 是原文直接支持的事实陈述。本题要求选出两个正确表述，另一项是 C；其余 B、D、E 均与原文不符，理由见辨析。",
          "traps": [
            "为什么 B 不对（Birds travelling in family groups are safe）：第 4 段说 Very few adults migrate with juveniles in tow（几乎没有成鸟带着幼鸟一同迁徙），与“以家庭群体旅行”的前提相反；原文也从未用 safe 来描述结伴飞行的鸟。",
            "为什么 D 不对（Birds have much sharper eyesight than humans）：第 5 段说的是 they see the world with a superior sensory perception to ours（它们的感官感知优于我们），sensory perception 是整体的感官感知，不等于 eyesight（视力），把整体换成单项属于偷换概念，原文也没有对视力作任何比较。",
            "为什么 E 不对（Only shorebirds are resistant to strong winds）：第 7 段说少量北美鸟被 fast-moving westerly tailwinds 刮过大西洋后仍安全抵达欧洲，甚至次年返回北美，说明能应对强风的不止鸻鹬类；选项中的 Only 是绝对化表述，原文没有任何依据。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "C. Birds flying at night need less water.",
          "translation": "（Questions 21–22：请在 A–E 五个表述中选出关于鸟类迁徙的两个正确表述）C. 夜间飞行的鸟需要的水更少。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Travelling at night provides other benefits. Daytime predators are avoided and the danger of dehydration due to flying for long periods in warm, sunlit skies is reduced."
          },
          "synonyms": [
            "选项中的 flying at night 同义替换为原文的 Travelling at night",
            "选项中的 need less water 同义替换为原文的 the danger of dehydration … is reduced（脱水危险降低，也就是对水的需求压力更小）",
            "选项所隐含的“夜间飞行有好处”对应原文的 provides other benefits",
            "原文的 flying for long periods in warm, sunlit skies 是解释为何白天飞行更容易缺水的原因，反向印证夜间飞行可减少水分流失"
          ],
          "locatingTip": "定位：选项 C 的关键信息是 at night 与 water，回原文搜索夜间飞行的段落即第 5 段后半部分，出现 Travelling at night provides other benefits 与 dehydration 所在的句子。确定答案技巧：本题的替换点在于概念转换——“需要更少的水”在原文写作 the danger of dehydration due to flying for long periods in warm, sunlit skies is reduced，即白天在温暖阳光下长时间飞行会导致脱水，而夜间飞行能把这种风险降下来，脱水风险的降低等价于对水的需求减少，因此 C 成立。同一句还提到另一个好处 Daytime predators are avoided，可用于核对第 25 题（句子填空）的答案。另一正确选项为 A（依据在第 3 段 birds journey much further than would be necessary）。",
          "analysis": "选项 C 的依据在第 5 段后半部分。原文先总起 Travelling at night provides other benefits（夜间飞行还有别的好处），随后并列两个具体好处：一是 Daytime predators are avoided（避开白天活动的捕食者）；二是 the danger of dehydration due to flying for long periods in warm, sunlit skies is reduced（因为在温暖阳光的空中长时间飞行而导致的脱水危险降低了）。第二项正是选项 C 的落脚点：dehydration 即脱水，脱水危险降低意味着在夜间飞行时鸟体内水分流失更少、对补水的需求更低，与 need less water 属于同一事实的不同表述，因此 C 是原文支持的陈述。紧接着的 Furthermore, at night the air is generally cool and less turbulent and so conducive to sustained, stable flight 又补充了夜间气流凉爽平稳这一第三个好处，进一步说明夜间迁徙在生理上更省力。本题需要选出两个正确表述，A 与 C 为正确答案；B、D、E 的错误原因见辨析。",
          "traps": [
            "为什么 B 不对（Birds travelling in family groups are safe）：第 4 段明确说 Very few adults migrate with juveniles in tow，即几乎没有成鸟带幼鸟同行，“家庭群体出行”与原文相反；原文也没有任何把结伴同行与安全联系起来的表述。",
            "为什么 D 不对（Birds have much sharper eyesight than humans）：第 5 段的相关句是 they see the world with a superior sensory perception to ours，讲的是感官感知整体优于人类；eyesight（视力）只是其中一项，原文没有单独就视力作比较，属无据偷换。",
            "为什么 E 不对（Only shorebirds are resistant to strong winds）：第 7 段提到被快速西风刮过大西洋的 North American birds 不仅安全抵达欧洲，有些次年春天还能返回北美，可见能顶住强风的不限于鸻鹬类（shorebirds）；Only 这一绝对表述在原文没有支撑。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 23–26 句子填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 23,
        "end": 26
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "It is a great mystery that young birds like cuckoos can find their wintering grounds without ________.",
          "translation": "像杜鹃这样的幼鸟能够在没有 ________ 的情况下找到自己的越冬地，这是一大谜团。",
          "answer": "parental guidance",
          "wordClass": "名词短语（两个词；guidance 为不可数名词，parental 作前置定语，整体作介词 without 的宾语，因此不加冠词、不用复数）",
          "locating": {
            "paragraph": "4",
            "quote": "One of the greatest mysteries is how young birds know how to find the traditional wintering areas without parental guidance."
          },
          "synonyms": [
            "题干中的 It is a great mystery 同义替换为原文的 One of the greatest mysteries",
            "题干中的 find their wintering grounds 同义替换为原文的 find the traditional wintering areas",
            "题干中的 without 与原文 without 原词复现，其后所接的名词短语即为答案",
            "题干中的 young birds like cuckoos 对应原文的 young birds 以及本段以杜鹃（cuckoo）为例的整段论述"
          ],
          "locatingTip": "定位：题干关键词 young birds、wintering grounds、without 三处都出现在第 4 段首句，而 cuckoos 这一例子同样取自第 4 段（A familiar example is that of the cuckoo），两重线索互相印证，可直接锁定第 4 段。确定答案技巧：without 是介词，其后必须接名词性成分，原文 without parental guidance 恰好给出这一成分，且 parental guidance 正好两个词，符合 NO MORE THAN TWO WORDS 的限制。填答时照抄原文形式，不要改写成 guidance from parents（三个词且非原文用词），也不要只写 guidance（会遗漏 parental 这一关键限定）。",
          "analysis": "第 4 段首句 One of the greatest mysteries is how young birds know how to find the traditional wintering areas without parental guidance（最大的谜团之一是幼鸟如何在无人指引的情况下找到传统的越冬地）与题干在语义和结构上高度重合：great mystery 对应 One of the greatest mysteries，find their wintering grounds 对应 find the traditional wintering areas，without 之后正是题干所留的空格位置，因此答案是 parental guidance（父母的指引）。该段的后续内容为这一答案提供了充分语境：Very few adults migrate with juveniles in tow, and youngsters may even have little or no inkling of their parents' appearance（几乎没有成鸟带着幼鸟迁徙，幼鸟甚至对父母的模样毫无概念），说明父母的指引确实缺失；随后以杜鹃为例，杜鹃把蛋生在别的鸟的巢里、从此不再与幼鸟相遇，幼鸟由宿主养大后仍能独自前往热带祖先越冬地并次年独自返回北欧；作者推断它们继承了内在的路线图与辨向能力。正是因为没有 parental guidance 而仍能完成迁徙，才构成 great mystery。词性上，空格位于介词 without 之后，需要一个名词短语作宾语，guidance 为不可数名词，故填原文形式 parental guidance。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "Evidence shows birds can tell directions like a ________ by observing the sun and the stars.",
          "translation": "证据显示，鸟类通过观察太阳和星星能够像 ________ 一样辨别方向。",
          "answer": "compass",
          "wordClass": "名词（单数可数；位于介词 like 之后作介词宾语，空格前有不定冠词 a，因此填单数形式 compass，意为指南针）",
          "locating": {
            "paragraph": "5",
            "quote": "Mounting evidence has confirmed that birds use the positions of the sun and stars to obtain compass directions."
          },
          "synonyms": [
            "题干中的 Evidence 同义替换为原文的 Mounting evidence has confirmed（越来越多的证据已经证实）",
            "题干中的 can tell directions 同义替换为原文的 obtain compass directions",
            "题干中的 by observing the sun and the stars 同义替换为原文的 use the positions of the sun and stars",
            "题干中的 like a … 把原文作定语的 compass 改写为介词 like 后的名词：原文是 compass directions，题干取其中的核心名词 compass"
          ],
          "locatingTip": "定位：题干把 the sun and the stars 这两个独特名词并列使用，全文只有第 5 段首句同时出现它们，再配合 Evidence 对应 Mounting evidence，一步即可定位。确定答案技巧：原文的搭配是 compass directions（罗盘方向），题干用 like a 引导比喻，空格处需要单数可数名词，因此取 compass 一词填入，写作 like a compass 与原文 obtain compass directions 的意思一致。注意两点：一是不要写成 compass directions，因为空格前有不定冠词 a，写成 like a compass directions 会冠词与复数名词冲突（本空只需核心名词 compass）；二是不要误填 magnetite 或 magnetic field（那是本段第 2 句讲的另一种机制，与太阳星星无关）。",
          "analysis": "第 5 段首句 Mounting evidence has confirmed that birds use the positions of the sun and stars to obtain compass directions（越来越多的证据已证实鸟类利用太阳和星星的位置来获取罗盘方向）是本题的定位句与出题依据。题干把它拆解为三部分：Evidence shows 对应 Mounting evidence has confirmed；can tell directions 对应 obtain compass directions；by observing the sun and the stars 对应 use the positions of the sun and stars。原文把 compass 用作 directions 的定语，构成 compass directions 这一固定表达，而题干用 like a 引导比喻，要求填入一个单数可数名词，故取核心名词 compass（指南针）。这一替换同时印证了第 5 段的另一处表述 which calibrates their compass（校准它们的罗盘），说明 compass 正是本段对鸟类辨向机制的核心比喻。词性与形式方面：空格前有不定冠词 a，只能接单数可数名词，compass 不必大写、不加复数。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "One advantage for birds flying at night is that they can avoid contact with ________.",
          "translation": "夜间飞行对鸟类的一个好处是，它们可以避免接触 ________。",
          "answer": "daytime predators",
          "wordClass": "名词短语（两个词；predators 为可数名词复数，daytime 作前置定语，整体作介词 with 的宾语）",
          "locating": {
            "paragraph": "5",
            "quote": "Travelling at night provides other benefits. Daytime predators are avoided and the danger of dehydration due to flying for long periods in warm, sunlit skies is reduced."
          },
          "synonyms": [
            "题干中的 One advantage 同义替换为原文的 Travelling at night provides other benefits（夜间飞行还提供别的好处）",
            "题干中的 can avoid contact with 同义替换为原文的 are avoided，原文是被动句，题干改写为主动句加介词宾语",
            "题干中的 flying at night 同义替换为原文的 Travelling at night",
            "原文中作主语的名词短语 Daytime predators 就是被动句 are avoided 的承受者，即题干空格所需的词"
          ],
          "locatingTip": "定位：题干关键词是 flying at night 与 advantage/avoid，对应第 5 段后半部分 Travelling at night provides other benefits 及其后的列举句。确定答案技巧：原文用被动语态 Daytime predators are avoided 表达“被避开的是白天活动的捕食者”，把被动还原成主动即 birds avoid daytime predators，与题干 they can avoid contact with… 完全对应，故填 daytime predators。同一个句子里还有 dehydration 这一并列信息（属于 water 相关，对应第 22 题 C），不要因为标题重复而把 danger of dehydration 误填进来；且题目要求 NO MORE THAN TWO WORDS，daytime predators 恰为两词。",
          "analysis": "第 5 段在讲完鸟类如何借助落日与偏振光辨向之后，用 Travelling at night provides other benefits 一句转入夜间飞行的其他好处，随后并列给出三项：Daytime predators are avoided（避开白天的捕食者）、the danger of dehydration due to flying for long periods in warm, sunlit skies is reduced（因在温暖阳光下长时间飞行而脱水的危险降低）、the air is generally cool and less turbulent and so conducive to sustained, stable flight（空气凉爽、气流平稳，利于持续稳定飞行）。题干的落点是“避免接触”的对象，对应第一项。原文以被动语态把 Daytime predators 放在主语位置，说明这些捕食者是“被避开”的承受者，题干的 avoid contact with 与 avoided 属同一语义的语态转换，空格填入 daytime predators 即与原文吻合。从词性看，介词 with 后接名词短语，daytime 为名词作定语修饰复数名词 predators，整体两个词，符合 NO MORE THAN TWO WORDS 的要求，填写时保持原文的复数形式和单词拼写。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "Laboratory tests show that birds can detect weather without ________ signs.",
          "translation": "实验室测试表明，鸟类能够在没有 ________ 迹象的情况下感知天气。",
          "answer": "visible",
          "wordClass": "形容词（作名词 signs 的前置定语，说明迹象是否可见；原文以 any visible sign 的形式出现，填答时用形容词原级 visible）",
          "locating": {
            "paragraph": "6",
            "quote": "Birds are adept at both, and, in laboratory tests, some have been shown to detect the minute difference in barometric pressure between the floor and ceiling of a room. Often birds react to weather changes before there is any visible sign of them."
          },
          "synonyms": [
            "题干中的 Laboratory tests 同义替换为原文的 in laboratory tests",
            "题干中的 can detect weather 同义替换为原文的 have been shown to detect the minute difference in barometric pressure（能察觉气压的细微变化）以及 react to weather changes",
            "题干中的 without … signs 同义替换为原文的 before there is any visible sign of them（在任何可见迹象出现之前）",
            "题干中的 without 表达“尚未出现”之意，原文用 before 引导的时间状语从句表达同一层意思"
          ],
          "locatingTip": "定位：题干有两处强定位词，一是 Laboratory tests，全文只在第 6 段出现 in laboratory tests；二是 signs，与原文 signs 同形，两者同段相邻，扫读第 6 段即可锁定。确定答案技巧：题干说鸟能在“没有某种迹象”时感知天气，对应原文 before there is any visible sign of them；signs 是名词，空格处需要修饰它的定语，原文用的是形容词 visible（可见的），直接填入即可。注意不要填 sign 本身或 changes（都不是修饰 signs 的词），也不要写成 visibility（名词，无法直接作 signs 的前置定语）。",
          "analysis": "第 6 段讲鸟类如何把握出发的时机，核心手段是准确预报天气并利用顺风。对应句写道：Birds are adept at both, and, in laboratory tests, some have been shown to detect the minute difference in barometric pressure between the floor and ceiling of a room. Often birds react to weather changes before there is any visible sign of them.（鸟类对这两者都很擅长，在实验室测试中，有些鸟已被证明能察觉房间地板与天花板之间气压的微小差别。鸟常常在任何可见的天气变化迹象出现之前就对天气变化作出反应）。题干的 Laboratory tests 对应 in laboratory tests，detect weather 对应 detect the minute difference in barometric pressure 与 react to weather changes，without [26] signs 对应 before there is any visible sign of them。原文用 before（在……之前）表达“还没有出现”，题干用 without（没有）表达同一逻辑，空格处需修饰 signs，故填形容词 visible。词性与形式方面，visible 在此作前置定语，保持形容词原形不变；同段后文 Lapwings 提前西飞避寒、回暖前返回荷兰的例子，正是“在没有可见迹象之前就预判天气”的进一步例证。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
