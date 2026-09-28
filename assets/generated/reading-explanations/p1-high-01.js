(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-01", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-01",
  "meta": {
    "examId": "p1-high-01",
    "title": "A Brief History of Tea 茶叶简史",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–8 段落标题匹配（List of Headings，A–H 段各配一个小标题）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 8
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Paragraph A: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "A 段：从标题列表中选出与该段内容相符的小标题。（正确答案 viii. A chance discovery 一次偶然的发现）",
          "answer": "viii",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "Dried leaves from a nearby bush fell into the boiling water, and as the leaves infused the water turned brown."
          },
          "synonyms": [
            "“A chance discovery” 中的 chance（偶然）同义替换为原文的 fell into（掉落进）这一意外动作，整个发现过程没有任何人刻意为之",
            "“discovery” 同义替换为原文的 As a scientist, the Emperor was intrigued by the new liquid, drank some, and found it very refreshing，即皇帝偶然尝到并确认了这种新饮品",
            "原文的 Dried leaves from a nearby bush（附近灌木上的干叶子）与 the boiling water（煮沸的水）两个偶然相遇的元素，共同构成“偶然发现”这一标题的落点"
          ],
          "locatingTip": "定位：标题匹配题不必读题干找词，而要抓段落主旨。A 段通篇讲故事，没有具体年份，也没有欧洲国名，全是叙事性动词（stopped to rest、began to boil、fell into、was intrigued、drank some）。确定答案技巧：段落主旨题的标准解法是找“段落功能”。A 段的功能是交代“茶是怎么产生的”，关键句是 Dried leaves from a nearby bush fell into the boiling water（干叶子偶然掉进沸水）以及 And so, according to legend, tea was created（传说中茶就这样诞生了）。没有任何人计划要发明茶，是“意外事件”产生了茶，因此对应标题 viii. A chance discovery。看到段落里出现 According to legend 且以“某事偶然发生”为叙述核心时，几乎可以锁定 chance discovery 一类的标题。",
          "analysis": "A 段以传说开篇：中国皇帝神农氏（the Emperor Shen Nung）下令饮水必须煮沸（all drinking water be boiled as a hygienic precaution）。某年夏天皇帝出行，仆人照例烧水，恰巧附近灌木上的干叶（Dried leaves from a nearby bush）落进沸水，水被叶子浸泡后变成褐色（as the leaves infused the water turned brown）。皇帝出于科学家的好奇尝了一口，觉得十分清爽（As a scientist, the Emperor was intrigued by the new liquid, drank some, and found it very refreshing），于是传说中茶诞生了（And so, according to legend, tea was created）。把这段主旨压缩成一句就是：茶不是被刻意发明的，而是一次意外的掉落事件带来的发现。标题 viii. A chance discovery（一次偶然的发现）中的 chance 对应 fell into 这一无人安排的偶发动作，discovery 对应皇帝尝到新液体并确认它 refreshing 的过程，两处吻合。其余标题都不适合本段：i（供不应求）、ii（宗教反对）、iii（时尚进出）、iv（茶与宗教的联系）、v（奢侈品）、vi（消息传到另一大陆）、vii（茶是好是坏）、ix（制茶成为仪式）、x（进口茶叶的困难）在 A 段均无对应内容，A 段既没有欧洲、没有价格、没有争论，也没有任何仪式或进口环节。",
          "traps": [
            "为什么不选 iv. A connection between tea and religion：A 段完全没有出现 religion、Buddhist、Zen 等宗教词，宗教与茶的关联出现在 B 段（Buddhist priest、Zen Buddhism），是本段所没有的信息。",
            "为什么不选 v. A luxury item：A 段没有提到茶的稀有、昂贵或只供富人享用；价格与“富人专属”的表述出现在 E 段（very expensive、the domain of the wealthy）。",
            "为什么不选 ix. Tea-making as a ritual：A 段只讲了偶然泡出茶的过程，没有任何固定的礼节、程式或仪式性描述，仪式化出现在 C 段的日本茶道。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Paragraph B: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "B 段：从标题列表中选出与该段内容相符的小标题。（正确答案 iv. A connection between tea and religion 茶与宗教的关联）",
          "answer": "iv",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "The first tea seeds were brought to Japan by a returning Buddhist priest, who had seen the value of tea in enhancing meditation in China."
          },
          "synonyms": [
            "“religion” 同义替换为原文的 Buddhist priest（佛教僧侣）、Zen Buddhist philosophy（禅宗哲学）与 Zen Buddhism（禅宗）等宗教词汇",
            "“A connection between tea and religion” 中的 connection 同义替换为原文的 this early association（这一早期联系）以及 has always been linked with（始终与……相联系）",
            "“tea” 与宗教产生联系的具体方式是原文的 had seen the value of tea in enhancing meditation（发现茶有助于增进冥想），冥想属宗教修行活动"
          ],
          "locatingTip": "定位：本段首句讲中国（Chinese culture），随后出现一批宗教专有名词：Buddhist priest、Zen Buddhist philosophy、Zen Buddhism，以及宗教活动 meditation。确定答案技巧：标题匹配要先找段落的“核心词汇簇”。B 段反复围绕“茶与佛教／禅宗的关系”展开，并且有明显的联结性表达：this early association（这一早期联系）、has always been linked with Zen Buddhism（始终与禅宗联系在一起）、enhancing meditation（增进冥想）。这些正是 connection between tea and religion 的原文化身。此外，茶传日本是由僧人带回（brought to Japan by a returning Buddhist priest），传播者为宗教人士这一身份本身也强化了标题 iv。注意不要把 B 段误读成“茶传入日本”的地理类标题，vi 强调的是传到另一个大陆（欧洲），而 B 段讲的是中、日两国之间。",
          "analysis": "B 段先说茶在中国普及，接着交代：第一部关于茶的专著写于 1,200 年前（a book clearly reflecting Zen Buddhist philosophy），最早的茶籽由一位归国僧侣带回日本，这位僧侣在中国看到茶能增进冥想（had seen the value of tea in enhancing meditation in China），因此被称为日本茶之父。段落随后用一句因果句点明主旨：Because of this early association, tea in Japan has always been linked with Zen Buddhism（由于这一早期的关联，日本的茶始终与禅宗相联系）。换言之，茶进入日本这一事件，从一开始就是由宗教人士完成，并被宗教赋予意义的，茶与宗教之间由此形成了一条稳定的联系线。这正是标题 iv. A connection between tea and religion。做题时注意区分“宗教反对”（ii）与“茶与宗教的联系”（iv）：B 段没有任何反对、批评或抵触情绪，讲的是接纳与融合，所以只能是 iv。",
          "traps": [
            "为什么不选 ii. Religious objections：objections 指反对意见，而 B 段的态度是接纳与推崇（Tea received the Japanese Emperor's support almost instantly），僧侣是主动把茶带回日本的人，不存在任何宗教层面的反对。",
            "为什么不选 vi. News of tea reaches another continent：B 段讲的是茶从中国传到日本，同属亚洲，没有“另一个大陆”的含义；亚欧之间的信息传递出现在 D 段（began to filter back to Europe）。",
            "为什么不选 ix. Tea-making as a ritual：B 段只说到茶有助于冥想，并未描述任何泡茶程式或仪式流程，仪式化描写在 C 段的日本茶道。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Paragraph C: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "C 段：从标题列表中选出与该段内容相符的小标题。（正确答案 ix. Tea-making as a ritual 泡茶成为一种仪式）",
          "answer": "ix",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Tea was elevated to an art form in the Japanese tea ceremony, in which supreme importance is given to making tea in the most perfect, most polite, most graceful, most charming manner possible."
          },
          "synonyms": [
            "“a ritual” 同义替换为原文的 the Japanese tea ceremony（日本茶道），茶道本身就是一种固定的仪式性活动",
            "“Tea-making” 同义替换为原文的 making tea in the most perfect, most polite, most graceful, most charming manner possible，即泡茶的方式被严格讲究",
            "“ritual” 的仪式感还同义替换为原文的 the purity of the original concept（原初概念的纯粹性）与 return to the earlier simplicity（回归早先的素朴），说明泡茶有公认的标准与规范"
          ],
          "locatingTip": "定位：C 段的关键词是 the Japanese tea ceremony（日本茶道），这是日本文化中典型的仪式性活动，全段围绕它展开。确定答案技巧：段落主旨题看“段落的重心落在哪里”。C 段首句就说茶被提升为一种艺术形式（elevated to an art form），并且把泡茶的每一个细节都规定到极致（supreme importance is given to making tea in the most perfect, most polite, most graceful, most charming manner possible）；随后讲茶室建筑、艺妓专门从事茶道表演，以及茶道一度被弄滥后又被拉回素朴。全段讲的都是“如何泡茶、泡茶该遵循什么形式”，这就是标题 ix. Tea-making as a ritual。本题没有形式相近的干扰标题，但要注意本段末句提到 in the 15th and 16th centuries, tea was viewed as the ultimate gift（茶被视为最高级的礼物），这句话涉及价值，容易被误配到 v. A luxury item；但全段主干仍是“仪式与形式”，且 v 在 E 段有更直接的对应（the domain of the wealthy）。",
          "analysis": "C 段可分三层：①茶道把泡茶升格为艺术，讲究完美、礼貌、优雅、迷人；②这种纯粹的审美追求催生了专门的茶室建筑（a particular form of architecture for tea houses），并由艺妓专门从事茶道表演；③随着参与者激增，原初的纯粹被破坏，茶道一度变得混乱浮夸，之后人们努力回归素朴，于是在 15、16 世纪茶被视为最高礼遇，连武将出征前也要先品茶。三层都在描述泡茶的“形式、规矩与仪式感”，而不是在讲消费、商业或政治。标题 ix. Tea-making as a ritual 精准概括这一主旨：Tea-making 对应 making tea in the most perfect manner，ritual 对应茶道这一整套被严格规定的程式（包括茶室、主持人、礼节）。注意本段与 q11（Special buildings were constructed in which to drink tea，答案 B Japan）共用同一段：q3 考的是标题（段落主旨），q11 考的是细节（茶室建筑），同一段里既可以出主旨题也可以出细节题。",
          "traps": [
            "为什么不选 v. A luxury item：C 段末句虽提到茶是 the ultimate gift，但礼物不等同于“奢侈品”这一消费层级概念；v 的真正依据在 E 段茶价超过每磅 100 美元、成为富人专属。",
            "为什么不选 ii. Religious objections：C 段讲的是茶道的审美与形式，没有出现任何宗教批评或反对。",
            "为什么不选 i. Not enough tea to meet demand：C 段没有任何关于供给不足、需求超量的表述，全段与产量、供需无关。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Paragraph D: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "D 段：从标题列表中选出与该段内容相符的小标题。（正确答案 vi. News of tea reaches another continent 茶的消息传到另一个大洲）",
          "answer": "vi",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "While tea was at this high level of development in parts of Asia, information concerning the then-unknown beverage began to filter back to Europe."
          },
          "synonyms": [
            "“News” 同义替换为原文的 information concerning the then-unknown beverage（关于这种当时还无人知晓的饮料的信息）",
            "“reaches” 同义替换为原文的 began to filter back to（开始慢慢传回）",
            "“another continent” 同义替换为原文的 Europe，而 Asia 是本段明确提到的“此大陆”，Europe 与之相对，即另一个大洲"
          ],
          "locatingTip": "定位：D 段首句出现 Asia 与 Europe 两个大洲名，加上 information 这一信息类词，是极好定位点。确定答案技巧：标题关键词是 news 和 another continent 两个信息点。原文说 tea was at this high level of development in parts of Asia（茶在亚洲部分地区高度发展）的同时，information concerning the then-unknown beverage began to filter back to Europe（关于这种当时还不为人知的饮料的信息开始传回欧洲）。此句的 Asia 与 Europe 构成“从一个大陆到另一个大陆”的对照，information 就是 news，filter back 就是 reaches，三个要素全部落实。注意本段后面还提到第一批欧洲人中的葡萄牙人（The first European to personally encounter tea and write about it was Portuguese），进一步说明欧洲人开始获知茶——这也支持 vi，但葡萄牙属于同一大洲层面的“新大陆”对应物，不要误判为“茶进入欧洲”的国别匹配题。",
          "analysis": "D 段的功能是“信息传播的转折点”：在此之前茶只在亚洲发展，本段开始把视角转向欧洲。段内三层信息：①茶在亚洲部分地区发展到很高水平时，关于这种当时尚不为人知的饮料的信息开始回传到欧洲（information concerning the then-unknown beverage began to filter back to Europe）；②更早的商人虽提到过茶，但说不清该吃还是该喝（Earlier traders had mentioned it, but were unclear as to whether tea should be eaten or drunk）；③第一位亲身接触茶并写下记述的欧洲人是葡萄牙人，因为葡萄牙拥有技术先进的舰队并取得了对华贸易的优先权。三层都围绕“欧洲人如何第一次听说、接触茶”，即信息跨越亚洲传向另一个大洲（欧洲）。标题 vi. News of tea reaches another continent 中的 News 对应 information、reaches 对应 began to filter back to、another continent 对应从 Asia 到 Europe 的跨越。注意本段只是“听到消息”，茶真正到达欧洲是在 E 段（Tea finally arrived in Europe in the 16th century），所以本文的标题匹配把“消息传来”（D 段）与“奢侈品”（E 段）分开设置。",
          "traps": [
            "为什么不选 x. Difficulties in importing tea：D 段只讲信息传播和商人的困惑，没有出现任何运输困难；骆驼商队、16 个月路程等进口困难出现在 H 段。",
            "为什么不选 vii. Is tea a good or a bad thing?：D 段没有正反两方面的评价或争论，学者的争论出现在 F 段（argued as to its benefits or drawbacks）。",
            "为什么不选 ii. Religious objections：C、D 两段都没有宗教反对的内容，D 段的人物是商人、葡萄牙人和海军，与宗教无关。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Paragraph E: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "E 段：从标题列表中选出与该段内容相符的小标题。（正确答案 v. A luxury item 一件奢侈品）",
          "answer": "v",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "This was due in part to tea being very expensive (over $100 per pound), which immediately made it the domain of the wealthy. Slowly, as the amount of tea imported increased, the price fell, and by 1675 it was available in common food shops throughout Holland."
          },
          "synonyms": [
            "“A luxury item” 同义替换为原文的 very expensive（非常昂贵）与 over $100 per pound（每磅逾 100 美元），价格高是奢侈品属性的核心标志",
            "“luxury” 还同义替换为原文的 the domain of the wealthy（专属富裕阶层的领域），即只有有钱人才消费得起",
            "反证式同义替换：Slowly, as the amount of tea imported increased, the price fell 与 it was available in common food shops 说明价格一旦下降，茶就不再是奢侈品，从反面印证本段前半段的“奢侈品”定位"
          ],
          "locatingTip": "定位：E 段时间标志是 the 16th century，国别标志是 Holland、the Dutch capital, The Hague，价格标志是 over $100 per pound。确定答案技巧：标题 v 的核心词是 luxury（昂贵、稀有、专属少数人）。原文先说茶非常昂贵（very expensive），紧随其后用 immediately made it the domain of the wealthy（立刻使它成为富人的专属）直接点出“奢侈品”的判定标准；段末又用价格下降、进入普通食品店作为对照，反向确认前半段的状态就是“奢侈品”。做题时要注意本段是“由贵变廉”的过程段，标题只能取前半段的定位，不要把“普及”当成主旨——因为普及只是奢侈品阶段的后续结果，是辅助信息。",
          "analysis": "E 段讲茶在 16 世纪终于抵达欧洲：由荷兰海军带到荷兰，在首都海牙变得非常时髦（became very fashionable in the Dutch capital, The Hague）。原文用 due in part to 引出时髦的原因，段中给出的这一点是：茶非常昂贵，每磅超过 100 美元，这使它立刻成为富人的专属（This was due in part to tea being very expensive (over $100 per pound), which immediately made it the domain of the wealthy）。随后价格因进口量增加而下跌，到 1675 年茶已经能在荷兰各地的普通食品店买到（it was available in common food shops throughout Holland）。由此可见，本段的叙述主线是“茶最初的身份：一种只有富人买得起的昂贵之物”，这正是标题 v. A luxury item。题目之所以给 v 而不给 iii（时尚进出），是因为本段只说它变得时髦（in fashion），并未说它失宠或退出流行；失宠与再流行分别出现在 G 段的法国（replaced by a preference for wine…）与英国（Tea mania swept across England），因此 iii 属于 G 段。",
          "traps": [
            "为什么不选 iii. In - and sometimes out - of fashion：E 段只提到茶变得时髦（became very fashionable），没有提到“退出流行”，fashion 的进与出这层意思要到 G 段才完整出现。",
            "为什么不选 i. Not enough tea to meet demand：E 段恰恰相反，是 as the amount of tea imported increased（进口量增加）导致价格下跌，即供给在增加，不存在供给不足。",
            "为什么不选 vi. News of tea reaches another continent：茶抵达欧洲（arrived in Europe）与“茶的消息传到欧洲”不是一回事，后者是 D 段的内容，本段讲的是实物已在荷兰落地并被消费。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Paragraph F: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "F 段：从标题列表中选出与该段内容相符的小标题。（正确答案 vii. Is tea a good or a bad thing? 茶是好是坏？）",
          "answer": "vii",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "As the consumption of tea increased dramatically in Dutch society, doctors and university authorities in Holland argued as to its benefits or drawbacks."
          },
          "synonyms": [
            "“Is tea a good or a bad thing?” 同义替换为原文的 argued as to its benefits or drawbacks（就茶的好处或弊病展开争论），benefits 对应 good，drawbacks 对应 bad",
            "“argued” 直接对应原文的 the scholarly debate（学术辩论）与 the controversy（争议），说明存在正反两方",
            "争论的参与者同义替换为原文的 doctors and university authorities（医生与大学权威），说明这是医学与学术层面的好坏之争"
          ],
          "locatingTip": "定位：F 段有两组鲜明的对立词 benefits 与 drawbacks，以及 debate、controversy、argued 等争论类词汇，是段落主旨的直接信号。确定答案技巧：标题 vii 是一个疑问句式标题，形式上问“好还是坏”，对应原文必然是一段“正反争论”。原文开门见山：医生和大学权威为茶的好处与坏处争论不休（argued as to its benefits or drawbacks），公众则大多无视这场学术辩论继续享用（The public largely ignored the scholarly debate），争论持续 1635 至 1657 年。benefits or drawbacks 就是 good or bad，argued、debate、controversy 就是“是或不是”的争论。本题的另一个抓手是 q9 的答案 D Holland（Claims that tea might be harmful failed to affect its popularity），同一段里既有“争论”这一主旨，也有“公众不为所动”这一细节。",
          "analysis": "F 段只有三句，结构非常清楚：①随着茶在荷兰社会消费激增，荷兰的医生与大学权威就茶的益处或害处展开争论（doctors and university authorities in Holland argued as to its benefits or drawbacks）；②公众大多无视这场学术辩论，继续享用这种新饮料，争论从 1635 年持续到大约 1657 年（The public largely ignored the scholarly debate and continued to enjoy their new beverage, though the controversy lasted from 1635 to roughly 1657）；③这一时期，法国与荷兰在欧洲的茶叶使用上领先（Throughout this period, France and Holland led Europe in the use of tea）。第一句给出正反两方（benefits 与 drawbacks），第二句给出争论的性质（scholarly debate、controversy）与时长，第三句是过渡性概括。段落主旨就是“茶到底是好是坏”这场争论，故答案是 vii。注意不要把本段主旨误认作 ii. Religious objections：本段的反对者是医生和大学权威，属于医学与学术立场，不是宗教立场，而且原文用的是 drawbacks（弊病）这一中性的医学表述，并非宗教禁令。",
          "traps": [
            "为什么不选 ii. Religious objections：本段争论的主体是 doctors and university authorities（医生与大学权威），讨论的是 benefits or drawbacks（益处与害处），属医学与学术层面，与宗教信仰或教义禁令无关。",
            "为什么不选 x. Difficulties in importing tea：F 段没有涉及任何运输或进口环节的困难，全段讲的是观念之争与公众反应。",
            "为什么不选 i. Not enough tea to meet demand：本段说的是 consumption of tea increased dramatically（消费量猛增），只体现需求旺盛，没有提到供给短缺。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Paragraph G: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "G 段：从标题列表中选出与该段内容相符的小标题。（正确答案 iii. In - and sometimes out - of fashion 有时流行，有时又不流行）",
          "answer": "iii",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "Tea remained popular in France for only about fifty years, being replaced by a preference for wine, chocolate and exotic coffees. Tea was introduced into England in 1660 by King Charles II and his Portuguese queen, who were both confirmed tea drinkers."
          },
          "synonyms": [
            "“out of fashion” 同义替换为原文的 remained popular in France for only about fifty years, being replaced by a preference for wine, chocolate and exotic coffees，即茶在法国失宠、被其他饮料取代",
            "“in fashion” 同义替换为原文的 Tea mania swept across England（茶的狂热席卷英格兰）与 Tea was drunk by all levels of society（社会各阶层都喝起了茶）",
            "“sometimes” 这一“有时”的转折含义同义替换为原文的 remained…for only、being replaced 以及 as it had earlier spread throughout France and Holland，说明流行度的此起彼伏"
          ],
          "locatingTip": "定位：G 段的国别时间词最密集：1680、Dutch inns、France、1660、King Charles II、1708，扫读时抓住 France 与 England 两个国名即可锁定本段。确定答案技巧：标题 iii 的关键在“有时进、有时出”。本段先讲茶成为日常生活的一部分（tea became part of everyday life），荷兰旅店开始提供茶馆式服务，随后话锋一转：茶在法国只流行了约五十年就被葡萄酒、巧克力与异国咖啡取代（remained popular in France for only about fifty years, being replaced by a preference for wine, chocolate and exotic coffees）；紧接着又说 1660 年茶由英王查理二世与王后引入英格兰，茶的狂热席卷英伦（Tea mania swept across England），到 1708 年进口量是 1699 年的十三倍。一头出、一头进，正对应 in and sometimes out of fashion。做题技巧：段落里出现 only about fifty years、being replaced 这类“流行度衰减”的表述，就是 out of fashion 的信号；出现 mania、all levels of society 就是 in fashion 的信号，两者同段即标题 iii。",
          "analysis": "G 段是全文最长的一段，讲茶在欧洲融入日常并反复起落：①随着东方热潮席卷欧洲，茶成为日常生活的一部分（tea became part of everyday life）；②1680 年首次提到往茶里加奶；③大约同时荷兰旅店提供最早的茶饮餐馆服务，店主向客人提供带加热装置的便携茶具，荷兰人在旅店花园里自己泡茶待客；④茶在法国只流行了约五十年，便被葡萄酒、巧克力和异国咖啡的偏好取代（Tea remained popular in France for only about fifty years, being replaced by a preference for wine, chocolate and exotic coffees）；⑤1660 年茶由英王查理二世与他的葡萄牙王后引入英格兰，两人都是坚定的饮茶者，茶的狂热随即席卷英格兰，正如它此前传遍法国和荷兰；⑥到 1708 年，茶叶进口量已增至 1699 年的十三倍，社会各阶层都在饮茶。④是先“出”，⑤⑥是再“进”，这种流行度的一退一进、且在不同国家反复上演，正是标题 iii. In - and sometimes out - of fashion 所指。要注意标题 iii 里的破折号表示“流行有时、不流行有时”的摇摆关系，本段正是全文唯一同时呈现“退出流行”（法国）与“疯狂流行”（英国）的段落。",
          "traps": [
            "为什么不选 v. A luxury item：G 段讲的是茶已经进入日常生活（tea became part of everyday life）并被社会各阶层饮用（Tea was drunk by all levels of society），奢侈品的定位已不适用，那是 E 段的内容。",
            "为什么不选 i. Not enough tea to meet demand：G 段给出的是进口量以十三倍增长（tea importation had risen to thirteen times the 1699 level），供给充足且增长迅速，与“供不应求”相反。",
            "为什么不选 x. Difficulties in importing tea：G 段没有描述任何进口运送的困难，运输难题在 H 段的骆驼商队那里。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Paragraph H: choose the correct heading for this paragraph from the List of Headings.",
          "translation": "H 段：从标题列表中选出与该段内容相符的小标题。（正确答案 x. Difficulties in importing tea 进口茶叶的困难）",
          "answer": "x",
          "wordClass": "",
          "locating": {
            "paragraph": "H",
            "quote": "Still, the journey was not easy. The average caravan consisted of 200 to 300 camels, and the 18,000-kilometre trip took over 16 months to complete."
          },
          "synonyms": [
            "“Difficulties” 同义替换为原文的 the journey was not easy（这趟旅程并不容易），not easy 是 difficulties 的直白说法",
            "“importing tea” 同义替换为原文的 a trade treaty between Russia and China allowed caravans to cross back and forth freely（俄中贸易条约允许商队往返），商队运的正是茶，属进口运输环节",
            "困难的规模同义替换为原文的 200 to 300 camels（两三百头骆驼）、18,000-kilometre trip（一万八千公里路程）与 took over 16 months to complete（耗时超过十六个月），数字本身就在说明运输之难"
          ],
          "locatingTip": "定位：H 段专有名词密集：1618、Moscow、Czar Alexis、Russia、China，主题词是 caravans（商队）与 camels（骆驼）。确定答案技巧：标题 x 的关键词是 Difficulties 与 importing。原文用 Still, the journey was not easy 一句直接给出“不容易”的判断，随后用三个数字把困难具体化：商队规模 200 至 300 头骆驼、路程 18,000 公里、耗时超过 16 个月。数字型证据是段落主旨题的重要支撑，出现大规模运输装备与超长耗时的描述，基本可对应“进口困难”类标题。段末的 Eventually, however, tea became … one of the most popular drinks in the country 只是结果句，不改变主旨。",
          "analysis": "H 段讲茶与俄国的渊源：1618 年中国使团在莫斯科向沙皇阿列克谢赠送数箱茶叶（Russian interest in tea began as early as 1618, when the Chinese embassy in Moscow presented several chests of tea to the Emperor, Czar Alexis）；此后俄中签订贸易条约，允许商队自由往返两国（a trade treaty between Russia and China allowed caravans to cross back and forth freely between the two countries）。接着是本题定位句：Still, the journey was not easy. The average caravan consisted of 200 to 300 camels, and the 18,000-kilometre trip took over 16 months to complete（然而这趟旅程并不轻松。一支商队平均由 200 至 300 头骆驼组成，一万八千公里的行程耗时超过十六个月）。最后说茶最终成为这个国家最受欢迎的饮料之一。整段的叙述重心在于“茶叶从中国运往俄国有多难”：需要长途跋涉的商队、大量骆驼、跨越一万八千公里、耗时一年有余。标题 x. Difficulties in importing tea 中的 Difficulties 对应 not easy，importing 对应两国之间的贸易运输，完全吻合。注意本段首句的 chests of tea 是赠礼，不是商业进口，真正的进口环节是商队贸易，判断标题时要抓住 the journey was not easy 这一句主旨句。",
          "traps": [
            "为什么不选 i. Not enough tea to meet demand：H 段没有任何关于需求超过供给的表述，相反茶最终成为最受欢迎的饮料之一，说明供给足以满足需求。",
            "为什么不选 vi. News of tea reaches another continent：H 段讲的是茶已实际运抵俄国并成为国民饮料，不是“消息传到另一个大洲”的传播阶段，后者对应 D 段的欧洲。",
            "为什么不选 iii. In - and sometimes out - of fashion：H 段没有茶在俄国流行再失宠的起伏，只说 Eventually…tea became one of the most popular drinks in the country，是单向的长期流行。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 国家匹配（Match each statement with the correct country, A–G）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Claims that tea might be harmful failed to affect its popularity.",
          "translation": "关于茶可能有害的说法并未影响茶的受欢迎程度。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "As the consumption of tea increased dramatically in Dutch society, doctors and university authorities in Holland argued as to its benefits or drawbacks. The public largely ignored the scholarly debate and continued to enjoy their new beverage, though the controversy lasted from 1635 to roughly 1657."
          },
          "synonyms": [
            "“Claims that tea might be harmful” 同义替换为原文的 doctors and university authorities in Holland argued as to its benefits or drawbacks，其中 drawbacks（弊病）对应 harmful，argued as to 对应 claims",
            "“failed to affect” 同义替换为原文的 The public largely ignored the scholarly debate（公众大体上无视了这场学术辩论），ignored 正是“没有产生影响”的体现",
            "“its popularity” 同义替换为原文的 continued to enjoy their new beverage（继续享用这种新饮料）与 As the consumption of tea increased dramatically（消费量猛增）"
          ],
          "locatingTip": "定位：题干有两个强信号——harmful（有害）与 failed to affect its popularity（未影响其流行）。全文只有 F 段出现关于茶“害处”的争论：doctors and university authorities in Holland argued as to its benefits or drawbacks。确定答案技巧：锁定段落之后，还要确定国家。F 段第一句就写出 in Dutch society 与 in Holland，段末又点明 France and Holland led Europe in the use of tea，因此对应的国家是 D Holland（荷兰）。做题时把题干三段式对应原文三件套：harmful 对应 drawbacks，claims 对应 argued，failed to affect popularity 对应 The public largely ignored the scholarly debate and continued to enjoy their new beverage。国家词 Holland 明确出现在定位句里，不存在猜测成分。",
          "analysis": "F 段讲荷兰社会在茶消费猛增之后掀起的一场争论：荷兰的医生与大学权威就茶的益处或害处（benefits or drawbacks）争论不休，争论从 1635 年持续到约 1657 年；但公众大体上无视了这场学术辩论，继续享用这种新饮料（The public largely ignored the scholarly debate and continued to enjoy their new beverage）。题干的三要素逐一落位：Claims that tea might be harmful 对应 argued as to its benefits or drawbacks 中的 drawbacks 一方；failed to affect its popularity 对应 The public largely ignored the scholarly debate 加 continued to enjoy；国家则由 in Dutch society、in Holland 明确给出。荷兰的荷兰语国名 Dutch 与英文 Holland 是同一国家的两种称呼，做题时不要因为 Dutch 与 Holland 拼写不同而犹豫。答案选 D。",
          "traps": [
            "为什么不选 A China：中国是茶的起源地与最早普及地，文中并未出现中国医生或学者争论茶是否有害的情节，中国的对应内容是 q13 所考的“统治者的专门知识引发兴趣”。",
            "为什么不选 F England：英格兰的对应内容是茶的狂热流行与进口量激增（Tea mania swept across England），文中没有英格兰出现“茶是否有害”的争论。",
            "为什么不选 B Japan：日本的对应内容是宗教关联与茶道仪式，没有医学争论。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Tea lost favour to other drinks.",
          "translation": "茶在与其他饮料的竞争中失去了青睐。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "Tea remained popular in France for only about fifty years, being replaced by a preference for wine, chocolate and exotic coffees."
          },
          "synonyms": [
            "“lost favour” 同义替换为原文的 remained popular in France for only about fifty years（在法国只流行了约五十年）与 being replaced（被取代）",
            "“other drinks” 同义替换为原文的 wine, chocolate and exotic coffees（葡萄酒、巧克力与异国咖啡）",
            "“Tea” 在原文中为主语，lost favour 这一“失宠”过程由 being replaced by a preference for 精确表达，replaced 即“被顶替、失去位置”"
          ],
          "locatingTip": "定位：题干关键词是 lost favour（失宠）与 other drinks（其他饮料）。全文只有一处描写茶被别的饮料取代，就是 G 段关于法国的那句：Tea remained popular in France for only about fifty years, being replaced by a preference for wine, chocolate and exotic coffees。确定答案技巧：句中直接给出国名 France，且具体列举了取代茶的三种饮料（葡萄酒、巧克力、异国咖啡），与题干 other drinks 完全对应。注意同段后面虽然也提到英格兰，但英格兰是“茶大受欢迎”的国家（Tea mania swept across England），与“失宠”方向相反，因此不能选 F England。答案是 E France。",
          "analysis": "G 段在描述茶融入欧洲日常生活之后，插入了法国的情况：Tea remained popular in France for only about fifty years, being replaced by a preference for wine, chocolate and exotic coffees（茶在法国只流行了约五十年，随后被对葡萄酒、巧克力与异国咖啡的偏好所取代）。这一句包含题干所需的全部信息：主体是茶，动作是“失去地位”（remained popular for only about fifty years + being replaced），原因是出现了其他更受偏爱的饮料（wine, chocolate and exotic coffees）。国名 France 在句首即出现，对应选项 E。本题的干扰在于同段紧接着讲英格兰也爱上了茶（Tea mania swept across England），方向与题干相反，容易读串；只要盯住 lost favour 这一“由盛转衰”的方向词，就能锁定法国。答案选 E。",
          "traps": [
            "为什么不选 F England：英格兰在 G 段中是 tea mania（茶的狂热）与进口量升至十三倍的正面案例，是茶大受欢迎而非失宠，方向与题干相反。",
            "为什么不选 D Holland：荷兰虽然也常饮茶，但文中没有出现荷兰人放弃茶、改喝其他饮料的表述；荷兰对应的是关于茶好坏的争论（q9）与最早提供茶饮服务的旅店。",
            "为什么不选 C Portugal：葡萄牙在本篇中出现的是葡萄牙籍的欧洲首位接触者与葡萄牙王后，与“茶在某个国家失去青睐”无关。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Special buildings were constructed in which to drink tea.",
          "translation": "人们建造了专门用于饮茶的建筑物。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Such a purity of expression prompted the creation of a particular form of architecture for tea houses, duplicating the simplicity of a forest cottage."
          },
          "synonyms": [
            "“Special buildings” 同义替换为原文的 tea houses（茶室）与 a particular form of architecture（一种专门的建筑形式）",
            "“were constructed” 同义替换为原文的 prompted the creation of（促成了……的创造），creation 即建造行为",
            "“in which to drink tea” 同义替换为原文的 for tea houses，茶室的功能就是供人饮茶，而 Such a purity of expression 回指前文的日本茶道这一整套制茶程式"
          ],
          "locatingTip": "定位：题干的核心名词是 buildings，全文只有 C 段出现建筑相关表述：tea houses（茶室）与 a particular form of architecture（专门的建筑形式）。确定答案技巧：确定段落后再定国家——本段首句即点明 the Japanese tea ceremony（日本茶道），整段属于日本，故选 B Japan。题干把原文的“为茶室创造了一种专门建筑”改写成“为饮茶建造了专门建筑”，只是把目的状语从 for tea houses 提前成了 in which to drink tea，实体（专门的建筑）与用途（饮茶）完全一致。做题时要注意题干用的是被动语态 were constructed，而原文用的是主动结构 prompted the creation of，语态改写不影响匹配。",
          "analysis": "C 段讲日本茶道被提升为一种艺术，并强调泡茶的每个环节都力求完美。紧接着一句是本题定位句：Such a purity of expression prompted the creation of a particular form of architecture for tea houses, duplicating the simplicity of a forest cottage（这种纯粹的审美追求促成了茶室的一种特殊建筑形式的产生，其样式模仿森林小屋的素朴）。这里的 Such a purity of expression 回指前面所说的日本茶道对泡茶方式的极致讲究；而 prompted the creation of a particular form of architecture for tea houses 就是题干 Special buildings were constructed 的原文依据：buildings 对应 architecture 与 tea houses，were constructed 对应 the creation of。段落主题明确指向日本（Japanese tea ceremony），因此国家答案是 B Japan。注意不要因为本段末句提到 15、16 世纪与 warlords（武将）而联想到其他章节，那些仍属日本茶道背景。答案选 B。",
          "traps": [
            "为什么不选 A China：中国虽然是茶的发源地，但“为饮茶专门建造建筑”的情节并不属于中国，本篇的中国段落（A、B 前部）没有建筑描写。",
            "为什么不选 D Holland：荷兰段落提到的是 Dutch inns（荷兰旅店）与便携茶具，旅店是既有的经营场所，不是为饮茶专门建造的建筑。",
            "为什么不选 F England：英格兰段落讲的是茶的狂热流行与进口量增长，没有出现任何茶室或专门建筑。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Animals were involved in importing tea.",
          "translation": "动物参与了茶叶的进口运输。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "H",
            "quote": "The average caravan consisted of 200 to 300 camels, and the 18,000-kilometre trip took over 16 months to complete."
          },
          "synonyms": [
            "“Animals” 同义替换为原文的 camels（骆驼），是本篇唯一被明确写出的运输动物",
            "“were involved in importing tea” 同义替换为原文的 a trade treaty between Russia and China allowed caravans to cross back and forth freely between the two countries 加 The average caravan consisted of…，商队由骆驼组成，承担的就是两国之间的茶叶运输",
            "“importing” 同义替换为原文的 the 18,000-kilometre trip（一万八千公里的行程），说明这是跨国长途运输而非本地交易"
          ],
          "locatingTip": "定位：题干关键词是 Animals，全文只有 H 段出现动物名 camels（骆驼）。确定答案技巧：找到 camels 后要确认它与“进口茶”的关系——H 段先说俄中签订贸易条约允许商队往返（a trade treaty between Russia and China allowed caravans to cross back and forth freely），再说商队平均由 200 至 300 头骆驼组成、行程 18,000 公里、耗时超过 16 个月，可见骆驼正是茶从中国运入俄国的运输工具。国家在段首即明确：Russian interest in tea、Russia and China，因此答案是 G Russia。注意不要选 A China，因为题干问的是“进口（importing）”一方的运输行为，俄罗斯是与中国的贸易中输入茶叶的一方，段落主体也以俄国视角展开。答案选 G。",
          "analysis": "H 段讲俄国与茶：1618 年中国使团在莫斯科向沙皇赠送茶叶，此后俄中签订贸易条约，允许商队自由往返两国（a trade treaty between Russia and China allowed caravans to cross back and forth freely between the two countries）。紧接着本题定位句：The average caravan consisted of 200 to 300 camels, and the 18,000-kilometre trip took over 16 months to complete（一支商队平均由 200 至 300 头骆驼组成，一万八千公里的行程耗时超过十六个月）。骆驼是明确的动物，商队是明确的运输组织，行程是跨国长途，三者合起来正好回答“动物参与了茶叶的进口运输”。题干 Animals 对应 camels，were involved in importing tea 对应商队在两国之间的往返长途托运。由于段落围绕俄国与中国的茶叶贸易展开，且以“俄国对茶的兴趣”与“茶最终成为该国最受欢迎的饮料”收尾，参与进口的国家应记为 G Russia。答案选 G。",
          "traps": [
            "为什么不选 A China：中国是茶叶的输出地与商队的出发侧，而题干强调的是“进口”环节由动物承担，H 段的主视角与进口受益方是俄国。",
            "为什么不选 B Japan：日本段落中没有任何动物参与运输的描写，日本相关的内容是僧侣带茶籽与茶道仪式。",
            "为什么不选 F England：英格兰段落提到的是进口量的增长数字，没有出现骆驼、马匹等运输动物。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "A ruler's specialist knowledge led to an interest in tea.",
          "translation": "一位统治者的专业知识引发了对茶的兴趣。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "As a scientist, the Emperor was intrigued by the new liquid, drank some, and found it very refreshing."
          },
          "synonyms": [
            "“A ruler” 同义替换为原文的 the Emperor（皇帝），本段开头还用 a skilled ruler 直接形容这位统治者",
            "“specialist knowledge” 同义替换为原文的 As a scientist（作为一位科学家），以及段首的 creative scientist，指他具备科学家的专业素养",
            "“led to an interest in tea” 同义替换为原文的 was intrigued by the new liquid, drank some, and found it very refreshing，即出于科学家的好奇心而对新液体产生兴趣并尝饮"
          ],
          "locatingTip": "定位：题干中的 ruler 与 specialist knowledge 指向一位既掌权又有专业学识的人物，全篇只有 A 段的神农氏符合：the Emperor Shen Nung was a skilled ruler, creative scientist and patron of the arts（皇帝神农氏是一位睿智的统治者、有创造力的科学家和艺术赞助人）。确定答案技巧：抓住 As a scientist 这一身份状语与 was intrigued（产生兴趣）这一结果，即可构成“专业知识带来兴趣”的因果链。国家在段首位置明确：The story of tea began in ancient China（茶的故事始于古代中国），故答案为 A China。注意不要因为 B 段也出现 Japanese Emperor（日本天皇）而误选 B：日本天皇在 B 段中只是“几乎立刻支持茶的传播”，并未出现任何“以专业知识产生兴趣”的描写，符合题干的只有 A 段的神农氏。",
          "analysis": "A 段讲述茶的起源传说：中国的神农皇帝（the Emperor Shen Nung）下令所有饮用水必须煮沸作为卫生预防措施（all drinking water be boiled as a hygienic precaution）。某日出行时，附近灌木上的干叶落入沸水，水变成褐色。接下来是本题定位句：As a scientist, the Emperor was intrigued by the new liquid, drank some, and found it very refreshing（身为科学家，皇帝被这种新液体吸引，尝了一些，觉得非常清爽）。这句构成完整的因果：因为具有 scientist 的专业身份与探究习惯（specialist knowledge），所以对新出现的液体产生了兴趣（was intrigued、drank some），这正是题干 A ruler's specialist knowledge led to an interest in tea 的原文对应。段落还以 And so, according to legend, tea was created 收束，说明这份兴趣最终带来了茶的诞生。国家由段首 The story of tea began in ancient China 明确给出，故答案是 A China。题干中的 ruler 与 specialist knowledge 分别对应 the Emperor（或 a skilled ruler）与 As a scientist，两处替换层级清晰。答案选 A。",
          "traps": [
            "为什么不选 B Japan：B 段的日本天皇只是接受了茶（Tea received the Japanese Emperor's support almost instantly），没有出现任何专业学识或探究行为的描写，与题干的 specialist knowledge 无关。",
            "为什么不选 E France：法国内容出现在 G 段，讲的是茶在法国流行约五十年后被葡萄酒、巧克力与异国咖啡取代；文中引入茶的统治者是英王查理二世（同见于 G 段），法国本身没有“统治者以专业知识引发兴趣”的情节。",
            "为什么不选 C Portugal：葡萄牙段落提到的是葡萄牙海军的贸易优先权与葡萄牙王后，属于航海与王室婚姻的背景信息，不涉及统治者以专业知识对茶产生兴趣。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
