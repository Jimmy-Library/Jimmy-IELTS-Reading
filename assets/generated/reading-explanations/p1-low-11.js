(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-11", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-11",
  "meta": {
    "examId": "p1-low-11",
    "title": "Bovids 牛科动物",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–3 单选题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 3
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "In which region is the biggest range of bovids to be found?",
          "translation": "在哪一地区可以发现种类/数量最多的牛科动物？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Bovids are well represented in most parts of Eurasia and Southeast Asian islands, but they are by far the most numerous and diverse in the latter."
          },
          "synonyms": [
            "“the biggest range of bovids” 同义替换为原文的 “the most numerous and diverse”（数量最多、种类最丰富）",
            "“to be found” 同义替换为原文的 “are well represented”（有分布、有出现）",
            "“South-east Asia” 对应原文的 “Southeast Asian islands”，而句末的 “the latter”（后者）按英语指代规则回指并列结构中最后出现的 “Southeast Asian islands”",
            "题干用 region 提问，与原文列举地名的 “in most parts of Eurasia and Southeast Asian islands” 属于同一维度"
          ],
          "locatingTip": "定位：题干的关键词是 region 与 bovids，回到原文扫读第 2 段首句，就能一眼看到 Eurasia 与 Southeast Asian islands 两个地名并列出现，属于大写地名定位，无需读完全文。确定答案技巧：本题的分水岭在句中的转折与指代词——“Bovids are well represented in most parts of Eurasia and Southeast Asian islands, but they are by far the most numerous and diverse in the latter.”。作者先用 well represented 说明两地都有分布，再用 but 转折，把 by far the most numerous and diverse（远远是最多、最多样的）单独判给 the latter；而 the latter 严格按照英语中的“前者/后者”用法，指并列项中后出现的那一个，即 Southeast Asian islands。题干中的 biggest range 对应 diverse（种类范围），不是地理面积，因此答案是 D South-east Asia。看到 the former / the latter 一定要先数清上文并列的两项分别是什么，这是雅思地名类单选题的固定考法。",
          "analysis": "第 2 段共四句，第 1 句就是本题的落点：“Bovids are well represented in most parts of Eurasia and Southeast Asian islands, but they are by far the most numerous and diverse in the latter.”（牛科动物在欧亚大陆的大部分地区和东南亚岛屿都有很好的分布，但在后者中其数量与种类都远远最多）。句子结构是“先并列两处都有分布，再用 but 转折，把 most numerous and diverse 收窄给 the latter”，与题干“在哪个地区牛科动物最多样”完全对应。全段其余三句分别讲群体习性（“Some species of bovid are solitary, but others live in large groups”）、栖息地偏好（“the majority of species favour open grassland, scrub or desert”）与体型差异（at one extreme 是 royal antelope，at the other 是 bison），都不涉及“哪个地区种类最多”，可排除。需要特别提醒的是题干里的 biggest range 容易被误解成“分布面积最大”，但原文的比较级落点是 most numerous and diverse，即“数量与种类”，这正是 range 在此处“种类范围”的含义；抓住这一点就不会被 Eurasia 这个同样出现的地名带偏。",
          "traps": [
            "为什么不是 A Africa：本题的定位句只在并列结构中给出 Eurasia 与 Southeast Asian islands 两个地名，the latter 也只能回指这两项中的后一个；Africa 在原文中出现于第 2 段讲体型差异时的 the royal antelope of West Africa，以及第 4、7 段讲具体亚科时的 the African bongo、The duiker of Africa，都是举例物种的产地，与“种类最多的地区”无关，本句的 the latter 也无法指回 Africa。",
            "为什么不是 B Eurasia：Eurasia 确实出现在定位句里，但原文用 but 把 most numerous and diverse 明确给了 the latter（Southeast Asian islands），欧亚大陆只是“有良好分布（well represented）”。这正是经典的“半对陷阱”——词在文中出现过，但不是比较级所指向的一方。",
            "为什么不是 C North America：North America 只出现在第 2 段末尾讲 bison（“the massively built bison of North America and Europe”）以及第 8 段讲 pronghorn 的分布（from Washington State to Mexico）时，都是举例说明“当地有牛科动物”，原文从未把“种类最多”判给北美。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Most bovids have a preference for living in",
          "translation": "大多数牛科动物偏好生活在",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Although bovids have adapted to a wide range of habitats, from arctic tundra to deep tropical forest, the majority of species favour open grassland, scrub or desert."
          },
          "synonyms": [
            "“Most bovids” 同义替换为原文的 “the majority of species”（大多数物种）",
            "“have a preference for” 同义替换为原文的 “favour”（偏爱、更倾向于）",
            "“wide open spaces” 同义替换为原文的 “open grassland, scrub or desert”，三者都是开阔地形的具体形式",
            "“living in” 对应原文的 “habitats”（栖息环境），题干把“栖息地”改写成“生活于其中”"
          ],
          "locatingTip": "定位：题干关键词是 Most bovids 与 preference，回原文找“多数/偏好”这一类表达，第 2 段第 3 句就有 the majority of species favour，一句到位。确定答案技巧：这句话是让步加转折的结构——Although 从句先承认“牛科动物适应了很广的栖息地，从北极苔原到深热带森林”，主句才给出真正的偏好：“the majority of species favour open grassland, scrub or desert”。主句才是作者要强调的信息，open grassland, scrub or desert 概括起来就是 wide open spaces，故选 D。要警惕选项 C 的 tropical forest：它出现在让步从句里（deep tropical forest），只是“适应过的范围”之一，而题目问的是“偏好”，从句内容不能当选。",
          "analysis": "第 2 段第 3 句：“Although bovids have adapted to a wide range of habitats, from arctic tundra to deep tropical forest, the majority of species favour open grassland, scrub or desert.”（虽然牛科动物适应了从北极苔原到深热带森林的广泛栖息地，但大多数物种偏爱开阔的草地、灌丛或沙漠）。题干 Most bovids have a preference for living in 与句中 the majority of species favour 逐一对应：the majority of species 即 Most bovids，favour 即 have a preference for，而 open grassland, scrub or desert 是用三个并列名词把“开阔地带”具体化，与选项 D wide open spaces 语义一致。值得注意的是本题的干扰设置全部来自让步从句：arctic tundra 和 deep tropical forest 是“适应范围”的两个端点，wide range of habitats 则是“范围很广”的抽象说法，作者用 Although 把这层意思与主句的“真正偏好”隔开，正是考查读者能不能分清“适应”与“偏爱”。此外，本段第 2 句的 “Some species of bovid are solitary, but others live in large groups” 说的是群体规模（solitary 与 large groups 两种极端），也只涉及部分物种，不能支撑选项 A、B 所说的“大多数牛科动物的偏好”，两次 some / others 的对举恰恰说明群体规模不是全科的共同偏好。",
          "traps": [
            "为什么不是 A isolation：原文 “Some species of bovid are solitary, but others live in large groups with complex social structures.” 中的 solitary（独居）只适用于“有些物种（Some species）”，与题干 Most bovids 的数量范围不符，且句子后半段立刻用 others 指出另一些物种过着大型群体的生活。",
            "为什么不是 B small groups：原文说的是 live in large groups（大型群体），与 small groups 的说法相反；而且群居规模是“部分物种”的差异，不是大多数物种的栖息地偏好。",
            "为什么不是 C tropical forest：tropical forest 只在让步从句里出现（from arctic tundra to deep tropical forest），是对“适应范围很广”的举例，主句紧接着用 the majority of species favour 给出真正的偏好，把“适应过的环境”与“偏爱的环境”分开，属于偷换概念型干扰。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Which of the following features do all bovids have in common?",
          "translation": "下列哪一项是所有牛科动物共有的特征？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "All species are ruminants, which means that they retain undigested food in their stomachs, and regurgitate it as necessary."
          },
          "synonyms": [
            "“all bovids” 同义替换为原文的 “All species”（所有物种）",
            "“have in common” 同义替换为原文的 “bovids are united by the possession of certain common features”（因拥有某些共同特征而归于一类）",
            "“store food in the body” 同义替换为原文的 “retain undigested food in their stomachs”（把未消化的食物留在胃中）",
            "“the body” 在原文中被具体化为 “their stomachs”（它们的胃），属于整体与部位的替换"
          ],
          "locatingTip": "定位：题干关键词是 all bovids 与 common，第 3 段首句正是“共同特征”的主题句——“bovids are united by the possession of certain common features”，紧接着的第 2 句给出第一条共同特征 All species are ruminants，一句即中。确定答案技巧：题干问“共同特征”，原文用 All species（所有物种）来呼应 all bovids，用 retain undigested food in their stomachs 来解释 ruminants（反刍动物）的含义，把食物留在胃里就等于“存在体内”，与选项 C They store food in the body 对应。其余三个选项都能在第 3 段原文里找到被明确否定的句子：角是 never shed（从不脱落）、上切齿 usually absent（通常缺失）、蹄子是 cloven, or split（分叉的）。因此做本题的正确流程是把四个选项逐一回到第 3 段核对，凡是与原文某句直接冲突的都排除，剩下能在原文找到正向依据的即为答案。",
          "analysis": "第 3 段的主题句是：“Despite differences in size and appearance, bovids are united by the possession of certain common features.”（尽管体型与外貌不同，牛科动物仍因拥有某些共同特征而归为一类），随后逐条列出这些共同特征。第 2 句直接给出最核心的一条，也是本题的定位句：“All species are ruminants, which means that they retain undigested food in their stomachs, and regurgitate it as necessary.”（所有物种都是反刍动物，也就是说它们把未消化的食物留在胃里，必要时再反刍出来）。所谓 ruminants（反刍动物）的特征就是把食物先储存在胃中再返上来咀嚼，retain undigested food in their stomachs 正是“把食物储藏于体内”的原文表述，与选项 C They store food in the body 完全一致，且句中 All species 与题干的 all bovids 在范围上严格对应。本段其余句子还把共同特征写得更细：Bovids are almost exclusively herbivorous（几乎全为食草）；牙齿为啃食与放牧而高度特化，草叶由下切齿与上唇切断（the upper incisors are usually absent）；有偶蹄（cloven, or split hooves）；所有雄性以及大多数雌性带角，角有骨质核心、外覆角质鞘、不分叉且从不脱落（they are unbranched and never shed）。把这些细节与选项对照，A、B、D 三项都恰好被原文否定，只有 C 有正向依据，故答案为 C。",
          "traps": [
            "为什么不是 A “Their horns are shed”：原文 “Bovid horns have bony cores covered in a sheath of horny material that is constantly renewed from within; they are unbranched and never shed.” 中的 never shed 明确说牛角从不脱落，与选项相反；而且同段还说明角并非每个个体都有（“the males of all bovid species and the females of most carry horns”），也不构成“所有牛科动物共有”。",
            "为什么不是 B “They have upper incisors”：原文括号内直接写明 “(the upper incisors are usually absent)”（上切齿通常缺失），与选项所说“它们有上切齿”正好对立，属于最常见的“原文否定项”干扰。",
            "为什么不是 D “Their hooves are undivided”：原文 “As well as having cloven, or split hooves” 说明牛科动物的蹄是分叉的（偶蹄），而 undivided 意为“不分叉”，与原文事实相悖。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 4–8 匹配题（Match each characteristic with the correct sub-family）",
      "mode": "per_question",
      "questionRange": {
        "start": 4,
        "end": 8
      },
      "items": [
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "can endure very harsh environments",
          "translation": "能够忍受非常严酷的环境",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Tolerance of extreme conditions is most marked in this group: barbary and bighorn sheep have adapted to arid deserts, while Rocky Mountain sheep survive high up in mountains and musk oxen in arctic tundra."
          },
          "synonyms": [
            "“can endure” 同义替换为原文的 “Tolerance of”（对……的耐受能力）",
            "“very harsh environments” 同义替换为原文的 “extreme conditions”（极端条件）",
            "冒号后的 “arid deserts”“mountains”“arctic tundra” 是 “extreme conditions” 的具体例证，即题干所说的 harsh environments",
            "“is most marked in this group” 中的 “this group” 回指本段所介绍的 Caprinae 亚科（羊亚科）"
          ],
          "locatingTip": "定位：本题的关键词是 endure 与 harsh environments，直接在第 6 段找“耐受极端条件”的句子——“Tolerance of extreme conditions is most marked in this group”。确定答案技巧：句首的 this group 是回指性表达，回指本段开头 “The sub-family Caprinae includes the sheep and the goat…”，可见“耐受力最强”是原文给 Caprinae 的评语，对应列表中的 C。再用冒号后的三个例证交叉验证：干旱沙漠、高山、北极苔原正是“严酷环境”的典型，而句中出现的 barbary、bighorn、Rocky Mountain sheep 与 musk oxen 都属于羊亚科。做匹配题时，先用亚科名（Bovinae、Antelope、Caprinae、Cephalophinae）在文中划出四个专属段落，再在对应段落里找题干特征的对应表述，可以避免在四个选项之间反复摇摆。",
          "analysis": "第 6 段专讲 Caprinae 亚科：“The sub-family Caprinae includes the sheep and the goat, together with various relatives such as the goral and the tahr. Most are woolly or have long hair. Several species, such as wild goats, chamois and ibex, are agile cliff and mountain-dwellers. Tolerance of extreme conditions is most marked in this group: barbary and bighorn sheep have adapted to arid deserts, while Rocky Mountain sheep survive high up in mountains and musk oxen in arctic tundra.”（羊亚科包括绵羊与山羊，以及 goral、tahr 等近亲。它们大多毛厚或长毛。野山羊、岩羚羊、北山羊等几个物种善于攀爬悬崖、居于山地。对极端条件的耐受力在这一类群中最为突出：barbary 羊与大角羊适应了干旱的沙漠，落基山雪羊在高山上存活，麝牛则生活在北极苔原）。题干 can endure very harsh environments 与 Tolerance of extreme conditions 是同一意思的两种表达，can endure 对应 Tolerance（耐受），very harsh environments 对应 extreme conditions；冒号后的 arid deserts、mountains、arctic tundra 三个例子把“极端条件”落到实处，而句首 this group 明确回指本段讨论的 Caprinae，故答案为 C。其余三段的特征与本题无关：Antelope（第 5 段）讲长腿快跑与涉水游泳；Bovinae（第 4 段）讲体型大与非领域性；Cephalophinae（第 7 段）讲小型独居、密林生活与偶食肉类。",
          "traps": [
            "为什么不是 A Antelope：第 5 段给羚羊的标签是 long-legged, fast-running species（长腿、奔跑迅速）以及 good at swimming、能在沼泽地行走，通篇没有一处谈“忍受极端环境”，反而强调它们偏好草地与泛滥草原。",
            "为什么不是 B Bovinae：第 4 段给牛亚科的关键词是 most of the larger bovids（体型较大者居多）与 all non-territorial（全都非领域性），剩下的内容讲家牛祖先稀有、濒危乃至灭绝，与“环境耐受能力”无关。",
            "为什么不是 D Cephalophinae：第 7 段说 duiker 一般体型小、独居（small and solitary），生活在密林（thick forest），并可能吃昆虫、食腐甚至捕杀小动物；密林环境谈不上“非常严酷”，且原文没有给出任何耐受性评语。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "includes the ox and the cow",
          "translation": "包括牛与奶牛",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The sub-family Bovinae comprises most of the larger bovids, including the African bongo, nilgai, eland, bison and cattle. Unlike most other bovids, they are all non-territorial. The ancestors of the various species of domestic cattle (such as banteng, gaur, yak and water buffalo) are generally rare and endangered in the wild, while the auroch (the ancestor of the domestic cattle of Europe) is extinct."
          },
          "synonyms": [
            "“includes” 同义替换为原文的 “comprises”（包含、由……组成）",
            "“the cow” 同义替换为原文的 “cattle”（牛、牛类；cow 指成年母牛，cattle 是“牛类/牛群”的统称）",
            "“the ox” 由原文同段的 “domestic cattle (such as banteng, gaur, yak and water buffalo)” 与 “the auroch (the ancestor of the domestic cattle of Europe)” 支撑，这些家牛祖先物种与 ox（牛类牲畜）同属牛亚科成员",
            "Bovinae 这一亚科名在原文第 4 段出现两次，其中一处即 “The sub-family Bovinae comprises …”"
          ],
          "locatingTip": "定位：题干出现 ox 与 cow 这两个具体动物，回原文找带 cow / cattle 的句子，cattle 只在第 4 段出现（共三处：bison and cattle、domestic cattle、domestic cattle of Europe），一步锁定该段。确定答案技巧：本段第 1 句就说 Bovinae comprises most of the larger bovids, including … bison and cattle，其中 cattle 就是“牛”的统称，与题干的 cow 对应；第 3 句又用 domestic cattle 统称 banteng、gaur、yak、water buffalo 与 auroch，说明这些“牛”全都在 Bovinae 名下，可见“牛”是该亚科的成员，答案是 B。这里要特别小心一个形近干扰：第 6 段出现的 musk oxen（麝牛）虽然名字里有 ox，但它属于 Caprinae（羊亚科），是“带 ox 名字的羊亚科动物”，与题干中与 cow 并列、泛指家牛的 ox 并非同一概念，不能据此选 C。",
          "analysis": "第 4 段先给五个亚科的分组，随后逐段介绍 Bovinae：“The sub-family Bovinae comprises most of the larger bovids, including the African bongo, nilgai, eland, bison and cattle.”（牛亚科包含大多数体型较大的牛科动物，其中有非洲 bongo、nilgai、eland、野牛和牛）。题干 includes the ox and the cow 的核心是“牛类”，而原文给出的 cattle 正是“牛”的统称：cow 特指成年母牛，ox 常指役用阉牛或泛指牛类，二者都属于 cattle 的范畴，原文用 cattle 一词把这一族动物归到 Bovinae。本段第 3 句进一步补充：“The ancestors of the various species of domestic cattle (such as banteng, gaur, yak and water buffalo) are generally rare and endangered in the wild, while the auroch (the ancestor of the domestic cattle of Europe) is extinct.”（各种家牛的祖先——如爪哇野牛、印度野牛、牦牛和水牛——在野外通常稀有且濒危，而 auroch（欧洲家牛的祖先）已经灭绝）。句中被统称为 domestic cattle 的正是牛类，可见“牛”确实属于 Bovinae，答案 B。除了本题所用的第 1 句，这段还给出一条与第 8 题共用的信息 “they are all non-territorial”，做题时可一并留意。",
          "traps": [
            "为什么不是 A Antelope：第 5 段把羚羊与 oryx、addax、gazelle、springbok 等物种相连，并说明分为 Hippotraginae 与 Antilopinae 两个亚群；全段没有出现 ox 或 cow，牛类并不属于羚羊。",
            "为什么不是 C Caprinae：第 6 段虽然出现 musk oxen（麝牛），但麝牛是名字里带 ox 的羊亚科成员，与题干中与 cow 并列、泛指家牛的 ox 不是同一概念；该段的代表动物是 sheep 与 goat（绵羊与山羊），家牛不在其列。",
            "为什么不是 D Cephalophinae：第 7 段只涉及非洲 duiker 一种小型动物，通篇没有牛、cow 或 cattle 的任何提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "may supplement its diet with meat",
          "translation": "可能会以肉类补充其食物",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Although mainly feeding on grass and leaves, some duikers - unlike most other bovids – are believed to eat insects and feed on dead animal carcasses, and even to kill small animals."
          },
          "synonyms": [
            "“supplement its diet with meat” 同义替换为原文的 “eat insects and feed on dead animal carcasses, and even to kill small animals”（在草叶之外还吃昆虫、食动物尸体、甚至猎杀小动物）",
            "“may” 同义替换为原文的 “are believed to”（被认为会），都表示不完全确定的可能性",
            "“mainly feeding on grass and leaves” 是主食，“eat insects / feed on dead animal carcasses / kill small animals” 是对主食的补充，构成 supplement its diet 的含义",
            "第 7 段首句 “The duiker of Africa belongs to the Cephalophinae sub-family.” 把 duiker 与 Cephalophinae 这一亚科直接挂钩"
          ],
          "locatingTip": "定位：题干关键词是 meat 与 supplement，回原文找“吃动物/吃肉”的表达，第 7 段出现 eat insects、feed on dead animal carcasses、kill small animals，是全文唯一涉及肉食的地方。确定答案技巧：先确定“谁在吃肉”——原文明确是 some duikers（有些 duiker），而 duiker 的所属亚科在同段首句已经交代：“The duiker of Africa belongs to the Cephalophinae sub-family.”，所以答案是 D。注意原文 “Although mainly feeding on grass and leaves … are believed to” 的让步结构：虽然以草叶为主食，但仍被认为会吃昆虫、食腐、捕杀小动物，这正是 may supplement its diet with meat 的完整含义，其中 are believed to 与题干的 may 一样都带有“未必每只都如此”的不确定语气，两处语义严丝合缝。",
          "analysis": "第 7 段整段只讲一种动物：“The duiker of Africa belongs to the Cephalophinae sub-family. It is generally small and solitary, often living in thick forest. Although mainly feeding on grass and leaves, some duikers - unlike most other bovids – are believed to eat insects and feed on dead animal carcasses, and even to kill small animals.”（非洲的 duiker 属于 Cephalophinae 亚科。它一般体型小、独居，常生活在茂密的森林中。虽然主要以草和叶子为食，但有些 duiker 与大多数其他牛科动物不同，被认为会吃昆虫、以动物尸体为食，甚至捕杀小动物）。题干的 may supplement its diet with meat 由三处对应支撑：其一，mainly feeding on grass and leaves 说明肉食只是对主食的补充（supplement 的含义）；其二，eat insects、feed on dead animal carcasses、kill small animals 是 meat 的具体化；其三，are believed to 与 may 一样表示“据信可能”，保留了不确定性。duiker 的亚科归属在第 7 段首句已经写明，所以答案是 D Cephalophinae。还要注意句中的 unlike most other bovids 是一句提示：吃荤不是牛科动物的普遍特征（第 3 段已说 bovids are almost exclusively herbivorous），这反而把这个“例外”与某一特定亚科绑定起来，使匹配关系唯一。",
          "traps": [
            "为什么不是 A Antelope：第 5 段通篇讲羚羊的长腿快跑、长角以及在水域环境中的适应（good at swimming、splayed hooves、swampy ground），没有一处提到取食昆虫或动物尸体。",
            "为什么不是 B Bovinae：第 4 段讲牛亚科的体型较大、all non-territorial 与家牛祖先的稀有、濒危、灭绝，全段不涉及食性扩展；实际上第 3 段已说明整个牛科的动物几乎完全食草，把“吃肉”的例外留给了别的亚科。",
            "为什么不是 C Caprinae：第 6 段只讲羊亚科的毛被（woolly、long hair）、山地攀爬（agile cliff and mountain-dwellers）与极端环境耐受，没有任何食肉或食腐的表述。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "can usually move at speed",
          "translation": "通常能够快速移动",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Antelopes are typically long-legged, fast-running species, often with long horns that may be laid along the back when the animal is in full flight."
          },
          "synonyms": [
            "“can usually move at speed” 同义替换为原文的 “are typically long-legged, fast-running species”",
            "“can usually” 同义替换为原文的 “typically”（典型地、通常如此）",
            "“move at speed” 同义替换为原文的 “fast-running”（奔跑迅速）",
            "“when the animal is in full flight”（全速飞奔时），其中 in full flight 进一步强化了“速度”这一特征"
          ],
          "locatingTip": "定位：题干关键词是 speed，回原文找与“快、跑”有关的形容词，第 5 段第 2 句的 fast-running 是全文唯一直接写“奔跑迅速”的地方，而该段讲的就是 Antelope（羚羊），对应选项 A。确定答案技巧：题干 can usually move at speed 里的 usually 容易被忽略，原文用 typically（典型地）一词对应它，说明“速度快”是羚羊这一类群的常态而非个别现象；long-legged（长腿）从身体结构上支撑了 fast-running。同一段后半句写的 “pukus, waterbucks and lechwes are all good at swimming” 与 sitatunga 的 “long, splayed hooves” 讲的是水域适应能力，与速度无关，容易被误牵到别的选项上，读题时要把“速度”与“涉水”两组信息分清。",
          "analysis": "第 5 段专讲 “antelope”：“The term 'antelope' is not a very precise zoological name – it is used to loosely describe a number of bovids that have followed different lines of development. Antelopes are typically long-legged, fast-running species, often with long horns that may be laid along the back when the animal is in full flight.”（“羚羊”不是一个很精确的动物学名称，它被用来笼统地描述若干沿着不同演化路线发展的牛科动物。羚羊通常是长腿、奔跑迅速的物种，常常长有长角，在全力飞奔时角可贴伏在背上）。题干 can usually move at speed 与 typically long-legged, fast-running species 直接对应：typically 对应 usually，fast-running 对应 move at speed，而 in full flight（全速飞奔）这一细节又从侧面印证了“速度”是该类群的标志。因此答案是 A Antelope。段落其余内容讲的是栖息地：“Antelopes are mainly grassland species, but many have adapted to flooded grasslands: pukus, waterbucks and lechwes are all good at swimming, usually feeding in deep water, while the sitatunga has long, splayed hooves that enable it to walk freely on swampy ground.”，这些是为第 11 题准备的涉水信息，与本题“速度”无关，不要混用。",
          "traps": [
            "为什么不是 B Bovinae：第 4 段讲牛亚科体型较大（most of the larger bovids）、全都非领域性（all non-territorial）以及家牛祖先的稀有濒危，全段找不到速度、奔跑或长腿之类的描写。",
            "为什么不是 C Caprinae：第 6 段讲羊亚科的毛被、山地攀爬与极端环境耐受，关键词是 agile（敏捷）与 cliff、mountains、deserts、tundra 等环境，没有“跑得快”的表述；agile 只说明善攀爬，不等于 move at speed。",
            "为什么不是 D Cephalophinae：第 7 段说 duiker 一般体型小、独居、常生活在茂密的森林（thick forest）中，这段描述只涉及体量、习性与居住环境，原文从未说它凭速度取胜。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "does not defend a particular area of land",
          "translation": "不保卫特定的地盘",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The sub-family Bovinae comprises most of the larger bovids, including the African bongo, nilgai, eland, bison and cattle. Unlike most other bovids, they are all non-territorial."
          },
          "synonyms": [
            "“does not defend a particular area of land” 同义替换为原文的 “non-territorial”（非领域性的，即不占有、不守护某片地域）",
            "“a particular area of land” 同义替换为原文 “territorial” 一词所含的“领地”义",
            "“they” 回指前一句的 “The sub-family Bovinae”，说明这是该亚科成员共同的习性",
            "“Unlike most other bovids” 说明“不守地盘”并非全科通性，而是这一亚科区别于其他亚科的标志"
          ],
          "locatingTip": "定位：题干里有 defend 与 area of land 这类抽象概念，在原文中对应的是动物学词汇 territorial（有领域性的）；回原文搜索 territor，只在第 4 段出现一处：non-territorial。确定答案技巧：原文用 “Unlike most other bovids, they are all non-territorial.” 来描写 Bovinae，非领域性（non-territorial）即不把某片土地当作排他性领地来防守，与题干 does not defend a particular area of land 完全同义；Unlike most other bovids 这一对比状语又说明这是该亚科独有的特点，使匹配关系唯一，因此答案是 B。注意本题与第 5 题的答案同为 B，题组说明已写明 “NB You may use any letter more than once.”（同一字母可以使用多次），不要因为 B 已经用过就改选其他字母。",
          "analysis": "第 4 段介绍 Bovinae 亚科时连用两句给出本题依据：“The sub-family Bovinae comprises most of the larger bovids, including the African bongo, nilgai, eland, bison and cattle. Unlike most other bovids, they are all non-territorial.”（牛亚科包含大多数体型较大的牛科动物，其中有非洲 bongo、nilgai、eland、野牛和牛。与大多数其他牛科动物不同，它们全都不是领域性的）。territorial 在动物学中指“具有领域性的”，即把某一片区域当作自己的地盘并对外来者加以驱赶防卫；non-territorial 就是“不守地盘”，与题干的 does not defend a particular area of land 一一对应，其中 they 回指前句的 sub-family Bovinae，Unlike most other bovids 则点明这是该亚科有别于其他牛科动物之处，答案 B。本题与第 5 题共用这一段：第 5 题取的是第 1 句的 cattle（牛），本题取的是第 2 句的 non-territorial，一段出两题在同一亚科下很常见，做题时不要因答案重复而自我怀疑。其余三项与本题无关：Antelope（第 5 段）讲速度与水域适应，Caprinae（第 6 段）讲毛被与极端环境耐受，Cephalophinae（第 7 段）讲小体型、独居与肉食补充。",
          "traps": [
            "为什么不是 A Antelope：第 5 段说羚羊主要是草原物种，许多又适应了泛滥草原（flooded grasslands），通篇没有任何关于领地与防卫行为的描述；non-territorial 这一评语在原文中只给了 Bovinae。",
            "为什么不是 C Caprinae：第 6 段只谈羊亚科的毛被、山地攀爬与对干旱沙漠、高山、北极苔原的耐受，既没有 territorial 也没有任何领地行为的表述。",
            "为什么不是 D Cephalophinae：第 7 段说 duiker 体型小、独居（solitary）并常居密林，可能取食昆虫与腐肉；独居只是社会结构，并不意味着“不守地盘”，原文也从未给出领地方面的说明。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 简答题（Choose NO MORE THAN THREE WORDS from the passage）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "What is the smallest species of Bovid called?",
          "translation": "牛科动物中体型最小的物种叫什么？",
          "answer": "royal antelope",
          "wordClass": "名词短语（动物名称，共 2 个词；royal 是形容词修饰名词 antelope，原文全部小写，不使用定冠词）",
          "locating": {
            "paragraph": "2",
            "quote": "at one extreme is the royal antelope of West Africa, which stands a mere 25 cm at the shoulder"
          },
          "synonyms": [
            "“the smallest species of Bovid” 同义替换为原文的 “at one extreme” 之后的 “the royal antelope … which stands a mere 25 cm”，即体型谱系中最小的那一端",
            "“is … called” 同义替换为原文的直接命名 “is the royal antelope”",
            "原文的 “at the other” 引出 “the massively built bison” 作为另一端，与本句的 “at one extreme” 对举，反向印证 royal antelope 是最小者"
          ],
          "locatingTip": "定位：题干关键词是 smallest 与 species，回原文找表示“极端、最小”的表达，第 2 段末句用 at one extreme … at the other 清楚地把体型谱系的两端摆出来。确定答案技巧：先判断哪一端对应 smallest——at one extreme 后面是 the royal antelope … which stands a mere 25 cm at the shoulder（肩高仅 25 厘米），at the other 后面是 the massively built bison … growing to a shoulder height of 2.2m（肩高可达 2.2 米），mere（仅仅）与 massively built（体格庞大）两个修饰词把大小关系明确分开，因此最小者就是 royal antelope。答案只写物种名，写成两个词，符合 NO MORE THAN THREE WORDS 的限制。",
          "analysis": "第 2 段末句是本题唯一的依据：“This diversity of habitat is also matched by great diversity in size and form: at one extreme is the royal antelope of West Africa, which stands a mere 25 cm at the shoulder; at the other, the massively built bison of North America and Europe, growing to a shoulder height of 2.2m.”（栖息地的多样性也伴随着体型与形态的巨大差异：一个极端是西非的 royal antelope，肩高仅有 25 厘米；另一个极端是北美与欧洲体格庞大的野牛，肩高可达 2.2 米）。句子用 at one extreme … at the other 的对举结构构成一个体型连续谱，其中“最小端”由 shoulder height 25 cm 与 mere 一词锁定，物种名是 royal antelope；与之对照的 bison 肩高 2.2m，是“最大端”。因此题干 What is the smallest species of Bovid called 的答案就是 royal antelope（2 个词）。作答提醒：species 的名称要写原文的称呼，不要写成修饰它的产地 West Africa，也不要填另一个极端的 bison；原文小写，答案照抄小写即可，不必首字母大写。",
          "traps": [
            "不要填 West Africa：它是 royal antelope 的分布地，属于 “the royal antelope of West Africa” 中 of 短语的内容，题干问的是物种名称而不是产地。",
            "不要填 bison：bison 是 “at the other” 那一端的成员（肩高 2.2m、massively built），代表体型最大者，与题干 smallest 正好相反。",
            "不要填 25 cm：这是肩高数值，是支撑“最小”判断的证据，不是物种名称，而且数字与单位共两个字符组，不符合题干 called 的问法。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Which species of Bovinae has now died out?",
          "translation": "牛亚科中哪一种物种现已灭绝？",
          "answer": "auroch",
          "wordClass": "名词（动物名称，单数，1 个词；原文写作小写 auroch；作答时作题干的主语，与谓语 has now died out 搭配，保持原文单数形式，不加冠词）",
          "locating": {
            "paragraph": "4",
            "quote": "The ancestors of the various species of domestic cattle (such as banteng, gaur, yak and water buffalo) are generally rare and endangered in the wild, while the auroch (the ancestor of the domestic cattle of Europe) is extinct."
          },
          "synonyms": [
            "“has now died out” 同义替换为原文的 “is extinct”（已灭绝）",
            "“Which species of Bovinae” 对应本段所介绍的 Bovinae 亚科及其家牛祖先物种群（banteng、gaur、yak、water buffalo、auroch）",
            "原文用 “while” 把 “rare and endangered”（稀有且濒危）与 “is extinct”（已灭绝）对立，突出了唯一已经灭绝的那个物种"
          ],
          "locatingTip": "定位：题干关键词是 died out，在原文中对应的标准表述是 extinct；回原文搜索 extinct（或 extinc），全文只在第 4 段末句出现一次，一句锁定。确定答案技巧：该句用 while 构成对比——“The ancestors of the various species of domestic cattle (such as banteng, gaur, yak and water buffalo) are generally rare and endangered in the wild, while the auroch (the ancestor of the domestic cattle of Europe) is extinct.”，前半句说的是“稀有且濒危”，后半句说的是“已经灭绝”，while 的转折让“灭绝”这项判断只落在 auroch 身上。题干 has now died out 与 is extinct 同义（has now 对应现在时 is 所表达的当前状态），且第 4 段正是介绍 Bovinae 的段落，与题干 Which species of Bovinae 吻合，故答案为 auroch（1 个词）。",
          "analysis": "第 4 段末句即本题依据：“The ancestors of the various species of domestic cattle (such as banteng, gaur, yak and water buffalo) are generally rare and endangered in the wild, while the auroch (the ancestor of the domestic cattle of Europe) is extinct.”（各种家牛的祖先——如爪哇野牛、印度野牛、牦牛和水牛——在野外通常稀有且濒危，而 auroch（欧洲家牛的祖先）已经灭绝）。句子的两个分句形成对照：前一分句用 rare and endangered（稀有、濒危）描述多个物种，后一分句用 is extinct（已灭绝）单独描述 auroch，extinct 是唯一能与题干 has now died out 对应的状态词，因此答案是 auroch（1 个词，原文小写）。答题时有两个易错点：其一，不要填 endangered，濒危与灭绝是生存状态的两个不同阶段，原文恰恰用 while 把它们区分开；其二，不要填 banteng、gaur、yak、water buffalo，它们与前一分句同属“稀有且濒危”的一类，且括号本身只是举例说明 domestic cattle 的祖先。另外 (the ancestor of the domestic cattle of Europe) 是 auroch 的同位语补充信息，不是答案的一部分，作答时只写物种名即可。",
          "traps": [
            "不要填 endangered：这是与 is extinct 并列对照的状态，指“稀有且濒危”，尚未灭绝；原文用 while 把濒危与灭绝分成两层，混淆两者就是本题最大的失分点。",
            "不要填 banteng / gaur / yak / water buffalo：它们出现在同句括号内，是 domestic cattle 的祖先举例，原文只说这些物种在野外 rare and endangered，并未说它们灭绝。",
            "不要填 domestic cattle：它是被 auroch 所修饰的类别（auroch 是欧洲家牛的祖先），属于上位概念，与题干所问的“哪个物种已灭绝”不对应。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "What facilitates the movement of the sitatunga over wetland?",
          "translation": "是什么帮助 sitatunga 在湿地环境中活动？",
          "answer": "splayed hooves",
          "wordClass": "名词短语（复数，共 2 个词；splayed 是形容词修饰名词 hooves，hooves 为 hoof 的复数形式，原文带形容词 long 修饰）",
          "locating": {
            "paragraph": "5",
            "quote": "while the sitatunga has long, splayed hooves that enable it to walk freely on swampy ground"
          },
          "synonyms": [
            "“facilitates the movement of the sitatunga” 同义替换为原文的 “enable it to walk freely”（使它能够自如行走）",
            "“over wetland” 同义替换为原文的 “on swampy ground”（在沼泽地上），wetland 与 swampy ground 同指潮湿泥泞的地面",
            "“What” 问答的对象在原文中直接作主语：the sitatunga has long, splayed hooves"
          ],
          "locatingTip": "定位：题干含专有名词 sitatunga，全文只出现一次，就在第 5 段最后一句，专有名词是最好用的定位词，可一步到位。确定答案技巧：题干问“是什么帮助它在湿地上移动”，回原文找表示“帮助做某事”的动词短语，即 that enable it to walk freely（使它能够自如行走）；而这个能力来自句子主语 sitatunga 所拥有的特征 long, splayed hooves，故答案取 hoof 部分的名词短语 splayed hooves（2 个词）。注意题干的 over wetland 与原文的 on swampy ground 是同义替换，不要把 swampy ground 当作答案——那是它可以行走的“地形”，题干里的 wetland 已经把这层信息给出了，空格要的是“帮助移动的身体构造”。",
          "analysis": "第 5 段最后一句是本题依据：“Antelopes are mainly grassland species, but many have adapted to flooded grasslands: pukus, waterbucks and lechwes are all good at swimming, usually feeding in deep water, while the sitatunga has long, splayed hooves that enable it to walk freely on swampy ground.”（羚羊主要是草原物种，但许多已适应了泛滥的草原：pukus、waterbucks、lechwes 都善于游泳，通常在深水中取食；而 sitatunga 则长有细长、向外张开的蹄，使它能在沼泽地上自如行走）。句子用 while 把两类适应方式分开：一类是善游泳（pukus、waterbucks、lechwes），另一类是靠蹄子结构在泥沼上行走（sitatunga）。题干 What facilitates the movement of the sitatunga over wetland 的问法把落点锁定在“帮助移动的原因”上，原文对应的是 that enable it to walk freely on swampy ground，其中 enable（使之能够）即 facilitates，walk freely 即 the movement，而承担这一功能的正是 splayed hooves（向外张开的蹄）。按答案表填 splayed hooves，两个词，符合 NO MORE THAN THREE WORDS 的限制；不要只写 hooves 而漏掉修饰语 splayed，因为它才是“为什么能走在沼泽上”的关键（张开的蹄增大受力面积、防止下陷），也不要写前面的 long 而丢掉核心信息。",
          "traps": [
            "不要填 swimming：原文说 “pukus, waterbucks and lechwes are all good at swimming”，善游泳的是另外三种动物，题干的主语是 sitatunga，属于张冠李戴。",
            "不要填 swampy ground：这是它行走所凭依的地形（即题干已给出的 wetland），问“什么帮助移动”时填地形等于重复题干信息，不是答案。",
            "不要填 flooded grasslands：这是本句宾语从句所描述的环境类型，属于 sitatunga 等羚羊所适应的栖息地，与“帮助移动的身体构造”无关。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "What sort of terrain do barbary sheep live in?",
          "translation": "barbary 羊生活在什么样的地形中？",
          "answer": "arid deserts",
          "wordClass": "名词短语（复数，共 2 个词；arid 为形容词修饰名词 deserts，deserts 用复数泛指沙漠地带）",
          "locating": {
            "paragraph": "6",
            "quote": "barbary and bighorn sheep have adapted to arid deserts, while Rocky Mountain sheep survive high up in mountains and musk oxen in arctic tundra"
          },
          "synonyms": [
            "“What sort of terrain … live in” 同义替换为原文的 “have adapted to …”（适应于某种环境居住）",
            "“arid deserts” 与题干所问的 terrain（地形）直接对应，是本句给出的第一种环境类型",
            "“barbary” 在原文中作为物种名与 “bighorn sheep” 并列出现，是本问的定位词"
          ],
          "locatingTip": "定位：题干专有名词 barbary 是最好用的定位词（专名不换词），全文只出现在第 6 段最后一句，直接锁定。确定答案技巧：该句用冒号开始列举并对举三种环境——“barbary and bighorn sheep have adapted to arid deserts, while Rocky Mountain sheep survive high up in mountains and musk oxen in arctic tundra”。题干问的是 barbary sheep 住在什么地形中，就取与 barbary 直接搭配的那一项 arid deserts（2 个词）。答题时一定要把“物种”与“环境”严格配对：arid deserts 对应 barbary / bighorn sheep，high up in mountains 对应 Rocky Mountain sheep，arctic tundra 对应 musk oxen，三个 while / and 并列的分句是三条独立的对应关系，不能串位。",
          "analysis": "第 6 段末句是本题依据：“Tolerance of extreme conditions is most marked in this group: barbary and bighorn sheep have adapted to arid deserts, while Rocky Mountain sheep survive high up in mountains and musk oxen in arctic tundra.”（对极端条件的耐受力在这一类群中最为突出：barbary 羊与大角羊适应了干旱的沙漠，落基山雪羊在高山上存活，麝牛则生活在北极苔原）。题干 What sort of terrain do barbary sheep live in 的问法与原文 have adapted to arid deserts 对应：adapted to 表示“适应并居于某一环境”，arid deserts（干旱的沙漠）就是 barbary 羊的栖息地形，因此答案填 arid deserts（2 个词）。填写的词性上，arid 是形容词、deserts 是名词复数，二者合起来构成一个地形名称短语，作答时两个词都要写，只写 deserts 会丢失“干旱”这一关键限定（本段的主旨正是“极端环境的耐受”，arid 正是极端的体现），只写 arid 则在语法上不能独立充当“地形”名词。同时注意本句是三种环境并列出现，务必按物种对号入座，避免把 mountains 或 arctic tundra 填进来。",
          "traps": [
            "不要填 mountains：高山是 Rocky Mountain sheep 的栖息地（while Rocky Mountain sheep survive high up in mountains），对应的是本句第二个环境，与题干中的 barbary sheep 不搭配。",
            "不要填 arctic tundra：北极苔原是 musk oxen（麝牛）的栖息地，是本句最后一个环境分句的内容，物种与环境整体错位。",
            "不要填 extreme conditions：它出现在同一句开头（Tolerance of extreme conditions is most marked in this group），是“耐受”的对象而非“居住”的地形，属于同句不同信息点的混淆。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "What is the only living member of the Antilocapridae sub-family?",
          "translation": "Antilocapridae 亚科唯一现存的成员是什么？",
          "answer": "pronghorn",
          "wordClass": "名词（动物名称，单数，1 个词；原文全部小写作 pronghorn，在句中作主语）",
          "locating": {
            "paragraph": "8",
            "quote": "The pronghorn is the sole survivor of a New World sub-family of herbivorous ruminants, the Antilocapridae in North America."
          },
          "synonyms": [
            "“the only living member” 同义替换为原文的 “the sole survivor”（唯一的幸存者），only 与 sole 同义，living member 与 survivor 同义",
            "“the Antilocapridae sub-family” 与原文的 “a New World sub-family … the Antilocapridae” 对应，后者是 sub-family 的同位语说明",
            "“is” 与原文的 “is” 都是主系表结构，主语位置上的 the pronghorn 即被命名的物种"
          ],
          "locatingTip": "定位：题干专有名词 Antilocapridae 在第 4 段列举五个亚科时出现过一次，但把它与“唯一幸存者”挂钩的是第 8 段首句，直接跳读到最后一段首句即可。确定答案技巧：该句是主系表结构加同位语——“The pronghorn is the sole survivor of a New World sub-family of herbivorous ruminants, the Antilocapridae in North America.”，其中 the sole survivor（唯一的幸存者）对应题干的 the only living member，of a New World sub-family … 与同位语 the Antilocapridae 共同限定了“哪个亚科”，那么主语位置上的 the pronghorn 就是答案：pronghorn（1 个词）。注意不要填 Antilocapridae，它是亚科名，是 the only living member of 所限定的对象本身，属于与答案同一句里的干扰名词。",
          "analysis": "第 8 段首句是本题唯一依据：“The pronghorn is the sole survivor of a New World sub-family of herbivorous ruminants, the Antilocapridae in North America.”（pronghorn 是北美一个新世界亚科——食草反刍动物中的 Antilocapridae——唯一的幸存者）。句子的成分拆解如下：主语 the pronghorn，系动词 is，表语 the sole survivor，其后 of a New World sub-family of herbivorous ruminants 作定语说明它是哪个类群中的幸存者，逗号后的 the Antilocapridae in North America 是 sub-family 的同位语，进一步点明亚科名与产地。题干的 the only living member of the Antilocapridae sub-family 与 sole survivor 加 the Antilocapridae 的组合完全对应，因此答案是主语 pronghorn（1 个词，原文小写，符合 NO MORE THAN THREE WORDS 的限制）。本段后续内容只是对这一物种的补充描述：它外表与习性与旧大陆羚羊相似（It is similar in appearance and habits to the Old World antelope）、自欧洲人到来与草地圈占后数量大减但仍见于从华盛顿州到墨西哥的北美各地、受狼等天敌惊吓时臀部白毛竖立并整群以每小时 60 公里以上的速度奔逃，均与“它是唯一幸存成员”这一判断无冲突，也没有引入第二个可能的答案物种。",
          "traps": [
            "不要填 Antilocapridae：它是亚科名称，是题干 the only living member of 所限定的对象（“这个亚科的唯一成员”），被限定者 pronghorn 才是答案，填亚科名属于主宾颠倒。",
            "不要填 Old World antelope：原文只说 pronghorn 在外观与习性上 “is similar in appearance and habits to the Old World antelope”（与旧大陆羚羊相似），这是类比，不是物种归属，它并非羚羊，也不属于羚羊所在的亚科。",
            "不要填 North America：这是 pronghorn 的分布地（the Antilocapridae in North America、from Washington State to Mexico），属于地点信息，与“哪个物种是唯一幸存者”的提问不对应。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
