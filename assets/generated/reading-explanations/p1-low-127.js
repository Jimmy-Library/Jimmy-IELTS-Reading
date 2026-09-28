(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-127", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-127",
  "meta": {
    "examId": "p1-low-127",
    "title": "Ambergris 龙涎香",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 分类题（A 仅龙涎香 / B 仅琥珀 / C 两者皆是 / D 两者皆非）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "very expensive",
          "translation": "非常昂贵",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Both substances were rare and costly, and both were associated with the sea, largely because for Europeans the most common source of amber was the shores of the Baltic."
          },
          "synonyms": [
            "“very expensive” 同义替换为原文的 “rare and costly”（稀有而昂贵）",
            "“very expensive” 还与第 1 段的 “worth its weight in gold”（价值相当于同等重量的黄金）同义，都是把「极贵」这一属性加在龙涎香身上",
            "题干隐含的「两者都要考虑」对应原文并列结构的 “Both substances … and both …”，substances 指本段讨论的 ambergris 与 true amber"
          ],
          "locatingTip": "定位：题干只有两个词，唯一可用的抓手是形容词 expensive。全文讲「贵」的句子有两处，一处是第 1 段末句 “At one time, ambergris was worth its weight in gold”，另一处是第 2 段的 “Both substances were rare and costly”。确定答案技巧：分类题选「两者皆是（C）」的关键，是能否找到把两种物质放进同一句、同一属性里的原文。第 2 段用 “Both substances were rare and costly” 一句把 ambergris 与 true amber 同时定性为稀有而昂贵，两个 both 明确覆盖两种物质，与题干的 very expensive 完全吻合，因此选 C。只看到第 1 段 worth its weight in gold（只讲龙涎香）就选 A，会漏掉琥珀那一半证据。",
          "analysis": "题目要求判断 “very expensive” 描述的是哪一种或哪两种物质。原文把「昂贵」的信息放在两个位置：第 1 段末句 “At one time, ambergris was worth its weight in gold, but there was much confusion about its origins.” 用「与等重黄金同价」这一比喻强调龙涎香的价值；第 2 段第 3 句 “Both substances were rare and costly, and both were associated with the sea, largely because for Europeans the most common source of amber was the shores of the Baltic.” 则把 rare and costly（稀有且昂贵）同时赋予 ambergris 和 true amber，并进一步说明两者都与海洋有关（琥珀的常见来源是波罗的海沿岸）。题干用的是概括性表述 very expensive，没有限定只说龙涎香，而原文对两种物质都有明确的「昂贵」定性，所以只能选 C（both ambergris and amber）。做题时要特别注意分类题的判分逻辑：只有当两种物质都出现同一属性的原文依据时才选 C，本题的依据就是那个并列句里的 Both substances were rare and costly。",
          "traps": [
            "为什么不是 A（ambergris only）：第 1 段确实说龙涎香 “worth its weight in gold”，但第 2 段紧接着用 “Both substances were rare and costly” 把 costly 也给了 true amber，题干的 very expensive 并不排除琥珀，选 A 属于把范围收得过窄。",
            "为什么不是 B（amber only）：琥珀被写成 rare and costly 的同时，龙涎香也被写成 value 等于等重黄金，昂贵并非琥珀独有，选 B 同样收窄了范围。",
            "为什么不是 D（neither）：原文两次明确给出「昂贵」的信息（worth its weight in gold；rare and costly），信息不仅存在而且很直接，远不属于「原文没有提」，故不能选 D。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "a food flavouring",
          "translation": "一种食物调味品（食用香料）",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "and was widely used as a spice, which was believed to be an aphrodisiac when added to food or wine"
          },
          "synonyms": [
            "“a food flavouring”（食物调味品）同义替换为原文的 “a spice”（香料）",
            "题干的「用于食物」对应原文的 “when added to food or wine”（加入食物或酒中时）",
            "“widely used as” 对应题干的判断性表述，原文用被动式 “was widely used as a spice” 说明它被普遍当作香料使用"
          ],
          "locatingTip": "定位：题干两个信息点是「食物」与「调味／香料」，扫读时盯住 food、spice、flavour 一类词，第 1 段第 1 句就出现了 “widely used as a spice … added to food or wine”。确定答案技巧：找到位置后要做的是「反向验证」——回到第 2 段看琥珀有没有对应的食用功能。原文对琥珀的用途只列了 “used for mouth-pieces to pipes, for beads and ornaments”（做烟斗嘴、串珠和装饰品），与食物毫无关系。食用香料功能只有龙涎香有，故选 A（ambergris only）。",
          "analysis": "第 1 段第 1 句写道：“In the ancient world, the waxy grey substance we now refer to as ambergris was highly prized for its medicinal properties, and was widely used as a spice, which was believed to be an aphrodisiac when added to food or wine.”（在古代，这种如今被称为龙涎香的蜡状灰色物质因药用价值而备受珍视，还被广泛用作香料，人们相信把它加入食物或酒中能起到催情作用）。这句话把「香料」和「加入食物或酒」直接绑定在 ambergris 身上，与题干的 a food flavouring 完全对应。第 2 段在引用梅尔维尔比较两者时，对 amber 的用途描述是 “used for mouth-pieces to pipes, for beads and ornaments”，属于工艺品与日用器物，没有任何食用或调味功能。因此 «a food flavouring» 这一属性只属于龙涎香，答案是 A。",
          "traps": [
            "为什么不是 B（amber only）：原文说明琥珀的用途是做烟斗嘴、串珠和装饰品（mouth-pieces to pipes, for beads and ornaments），与食物、调味毫无关系。",
            "为什么不是 C（both）：把食物调味这一属性同时给两种物质必须有两处依据，但原文只在讲 ambergris 的第 1 段出现 spice 与 added to food or wine，琥珀一侧没有任何食用用途的记载。",
            "为什么不是 D（neither）：第 1 段明确写了 ambergris “was widely used as a spice” 且 “added to food or wine”，信息确实存在，选 D 违背原文。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "used as currency",
          "translation": "被当作货币使用",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "At one time, ambergris was worth its weight in gold, but there was much confusion about its origins."
          },
          "synonyms": [
            "“used as currency”（用作货币）在原文中没有任何对应表达：全文没有出现 currency、money、coin、payment 一类词",
            "与题干最接近的原文表述是 “worth its weight in gold”（价值相当于等重黄金），这是比喻价值极高的说法，讲的是价格而非流通手段",
            "第 2 段的 “Both substances were rare and costly” 同样只描述稀有与昂贵，不涉及货币功能"
          ],
          "locatingTip": "定位：题干关键词是 currency。钱币类概念在雅思文章里常以 currency、money、coin、pay、trade 等形式出现，扫读全文可知文中与之最近的是第 1 段 “worth its weight in gold” 和第 6 段的 “trade in ambergris”。确定答案技巧：判断 D（两者皆非）要确认两点——第一，原文对两种物质都没有「当作货币／用于支付」的表述；第二，唯一沾边的表述（worth its weight in gold）只是价值比喻。价值高不等于被当作货币使用，因此两种物质都不符合，选 D。",
          "analysis": "全文关于龙涎香与琥珀的「价值」信息出现在两处：第 1 段 “At one time, ambergris was worth its weight in gold, but there was much confusion about its origins.”（曾有一段时间，龙涎香的价值与等重黄金相当，但人们对它的来源十分困惑）以及第 2 段 “Both substances were rare and costly”。这两处讲的都是价格高、稀有、珍贵，属于「value」这一语义场，而题干问的是 used as currency（被当作货币使用），属于「medium of exchange」这一完全不同的语义场：货币意味着可以流通、可以拿来支付，而原文从未说有人用龙涎香或琥珀作为货币或支付手段。第 6 段出现的 “prohibited trade in ambergris”（禁止龙涎香的交易）指的是买卖交易被立法禁止，同样不等于把龙涎香当货币使用。题干所述在原文找不到任何依据，两种物质都不符合，答案是 D。这道题是分类题里典型的「价值高」与「当钱用」的概念偷换。",
          "traps": [
            "为什么不是 A（ambergris only）：worth its weight in gold 只是用黄金作比喻说明它极贵，原文并没有说龙涎香被当作货币流通或用于支付。",
            "为什么不是 B（amber only）：原文对琥珀只有 rare and costly 的价值描述，没有任何货币用途的记载。",
            "为什么不是 C（both）：既然两种物质在原文中都只是「贵」，没有一方被写成货币，把 currency 加在两者任何一个身上都属于无中生有，故 C 不成立。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "sweet-smelling",
          "translation": "气味芳香（好闻）",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Ambergris itself is pleasantly aromatic, especially when warmed, and it was also highly valued as a fixing agent in the making of perfume"
          },
          "synonyms": [
            "“sweet-smelling”（气味好闻）同义替换为原文的 “pleasantly aromatic”（散发着怡人的香气）",
            "第 5 段再次出现同一表述 “the waxy, greyish and pleasantly aromatic characteristics of ambergris”，可见芳香是龙涎香的固有特征",
            "第 2 段引用梅尔维尔的话把琥珀描述为 “odourless”（无味的），与 sweet-smelling 正好相反"
          ],
          "locatingTip": "定位：题干中心词是 smell，扫读 odor／aromatic／fragrant／odourless 一类词。全文有三处：第 1 段 “Ambergris itself is pleasantly aromatic”、第 2 段引语中的 “odourless”（描写琥珀）、第 5 段 “pleasantly aromatic characteristics of ambergris”。确定答案技巧：气味类题目必须把两种物质的描述都找出来再比对。原文把 pleasantly aromatic／highly fragrant 都给了龙涎香，把 odourless 给了琥珀，一有一无，正好对应 A（ambergris only）。若只看到第 1 段那一句就下结论，容易忽略掉琥珀「无味」这条反向证据。",
          "analysis": "第 1 段第 2 句写道：“Ambergris itself is pleasantly aromatic, especially when warmed, and it was also highly valued as a fixing agent in the making of perfume, since it enabled a scent to retain its fragrance for much longer than might otherwise have been possible.”（龙涎香本身气味怡人，尤其在受热时更是如此；它还因为能让香气保持得比原本久得多，而在香水制作中被高度评价为定香剂）。pleasantly aromatic 就是 sweet-smelling 的准确对应。第 5 段再次用 “pleasantly aromatic” 描写它在空气中变硬后获得的气味特征，前后呼应。而第 2 段梅尔维尔对比两者时说 “amber is a hard, transparent, brittle, odourless substance”（琥珀是坚硬、透明、易碎、无味的物质），把 odourless 直接加在琥珀身上，与 sweet-smelling 形成对立。可见题干所述只符合龙涎香，答案是 A。",
          "traps": [
            "为什么不是 B（amber only）：原文引用梅尔维尔的话明确说 amber 是 “odourless”（无味）的物质，无味与 sweet-smelling 相互冲突。",
            "为什么不是 C（both）：只有龙涎香被写成 pleasantly aromatic／highly fragrant，琥珀被写成 odourless，两者在这一属性上并非都符合。",
            "为什么不是 D（neither）：原文两处（第 1 段、第 5 段）明确写龙涎香 pleasantly aromatic，信息存在且明确，不能选 D。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "referred to by Herman Melville",
          "translation": "被赫尔曼·梅尔维尔（Herman Melville）提到过",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In Chapter 92 of Moby Dick, the American writer Herman Melville pours scorn on those who believed the two substances to be the same"
          },
          "synonyms": [
            "“referred to by Herman Melville” 对应原文的 “the American writer Herman Melville pours scorn on those who believed the two substances to be the same”，即梅尔维尔在同一段论述里同时谈及这两种物质",
            "原文引语中两种物质并列复现：描写琥珀时说 “amber is a hard, transparent, brittle, odourless substance”，转而说 “but ambergris is soft, waxy, and so highly fragrant”",
            "第 5 段还有梅尔维尔关于龙涎香的另一段引语；第 4 段他用 “the king of whales” 形容抹香鲸，说明他的名字在文中多次出现"
          ],
          "locatingTip": "定位：人名 Melville 全文出现三次（第 2 段以全名 Herman Melville 出现，第 4、5 段只用姓氏），是最好用的定位词。第一次在第 2 段（《白鲸》第 92 章的对比论述），第二次在第 4 段（把抹香鲸称作 the king of whales），第三次在第 5 段（关于龙涎香来源的感叹）。确定答案技巧：分类题问「谁被提到」时，要把该作者名下出现过的话题都数一遍——第 2 段那段引语里既讲 amber 又讲 ambergris（For amber … whereas ambergris …），第 5 段的引语讲 ambergris。两种物质都由他谈及，因此选 C（both）。",
          "analysis": "第 2 段末句写道：“In Chapter 92 of Moby Dick, the American writer Herman Melville pours scorn on those who believed the two substances to be the same: ‘Though the word ambergris is but the French compound for grey amber, yet the two substances are quite distinct. For amber, though at times found on the sea-coast, is also dug up in some far-inland soils, whereas ambergris is never found except upon the sea. Besides, amber is a hard, transparent, brittle, odourless substance … but ambergris is soft, waxy, and so highly fragrant ….’” 在这段引语中，梅尔维尔先谈 amber（产地、性状、用途），再谈 ambergris（只产于海中、柔软、多蜡、芳香浓烈），两种物质都被他详细提及。第 5 段又引了梅尔维尔的一句话，把龙涎香的来源与上流社会对它的珍视作对比：“Who would think, then, that such fine ladies and gentlemen should regale themselves with an essence found in the inglorious bowels of a sick whale!”。两处合计，梅尔维尔既提到龙涎香也提到琥珀，与题干的 referred to by Herman Melville 完全吻合，选 C。",
          "traps": [
            "为什么不是 A（ambergris only）：只算龙涎香会漏掉第 2 段引语中对 amber 的大段描写（For amber, though at times found on the sea-coast, is also dug up in some far-inland soils …），梅尔维尔确实也谈到了琥珀。",
            "为什么不是 B（amber only）：只算琥珀同样片面，第 2 段引语的后半部分专门谈 ambergris，第 5 段还有另一句关于 ambergris 的引语。",
            "为什么不是 D（neither）：原文第 2、4、5 段都提到 Melville（第 2 段用全名 Herman Melville）并引用或转述他的说法，信息明确存在，不能选 D。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "can be seen through",
          "translation": "可以被看透（透明）",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Besides, amber is a hard, transparent, brittle, odourless substance, used for mouth-pieces to pipes, for beads and ornaments; but ambergris is soft, waxy, and so highly fragrant that it is largely used in perfumery."
          },
          "synonyms": [
            "“can be seen through”（能被看透）同义替换为原文的 “transparent”（透明的）",
            "同一句里用 “but” 转折，把 ambergris 的特征写成 “soft, waxy, and so highly fragrant”，与透明完全无关",
            "第 1 段对龙涎香的描写是 “the waxy grey substance”，蜡状、灰色，也从侧面说明它不透明"
          ],
          "locatingTip": "定位：题干关键词是视觉属性，对应原文中描述物质外观的词 hard、transparent、brittle、soft、waxy。这句话出现在第 2 段梅尔维尔的引语里，一句之中同时给出两种物质的对照。确定答案技巧：transparent 意为「透明的、能透光看清后面」，原文只把它给了 amber（“amber is a hard, transparent, brittle, odourless substance”）；紧接着转折词 but 之后的 ambergris 被描述为 soft、waxy、highly fragrant，没有任何透明属性。一有一无，故选 B（amber only）。",
          "analysis": "第 2 段引语中的关键句：“Besides, amber is a hard, transparent, brittle, odourless substance, used for mouth-pieces to pipes, for beads and ornaments; but ambergris is soft, waxy, and so highly fragrant that it is largely used in perfumery.”（此外，琥珀是坚硬、透明、易碎、无味的物质，用来做烟斗嘴、串珠和装饰品；而龙涎香柔软、蜡状，香气极浓，因此大量用于香水制作）。transparent 与题干的 can be seen through 是同义关系：透明就意味着光线可以穿过、能看见后面的东西。原文把 transparent 放在 amber 一侧，把 soft、waxy 放在 ambergris 一侧，用分号与 but 明确划出分界；第 1 段对龙涎香的描写 “the waxy grey substance” 也印证它是蜡状灰色而非透明。因此答案是 B（amber only）。",
          "traps": [
            "为什么不是 A（ambergris only）：原文描述龙涎香用的是 soft、waxy、highly fragrant 以及第 1 段的 waxy grey substance，全是质地、颜色与气味，没有任何透明的说法。",
            "为什么不是 C（both）：transparent 在原文是琥珀的专属属性，龙涎香一侧完全缺席，不能把属性扩展到两者。",
            "为什么不是 D（neither）：原文明确写 “amber is a hard, transparent, brittle, odourless substance”，信息存在且直接，故不能选 D。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–9 流程图填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 9
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Ambergris is formed in whales because of problems digesting the 7 ________ of giant squid.",
          "translation": "龙涎香在鲸体内形成，原因是难以消化巨型乌贼的 ________。",
          "answer": "beaks",
          "wordClass": "名词（复数，指乌贼的喙状嘴；空格前有定冠词 the、其后是 of giant squid，空格作动名词 digesting 的宾语；原文为复数 beaks，故须保持复数）",
          "locating": {
            "paragraph": "5",
            "quote": "It is from the problems the whales have in digesting the beaks of such creatures that ambergris has its origins."
          },
          "synonyms": [
            "“problems digesting” 与原文 “the problems the whales have in digesting” 原词对应，只多了一层主语 the whales",
            "“of giant squid” 同义替换为原文的 “of such creatures”，such creatures 回指第 4 段末的 “the giant squid”",
            "“Ambergris is formed in whales” 同义替换为原文的 “ambergris has its origins”，即龙涎香由此起源、在鲸体内生成"
          ],
          "locatingTip": "定位：流程图标题 How ambergris is formed 加上题干关键词 digesting、giant squid，直接把范围锁在第 5 段,因为该段开篇就是 “It is from the problems the whales have in digesting the beaks of such creatures that ambergris has its origins.”（龙涎香正源于鲸难以消化这类生物喙部的问题）。确定答案技巧：还原句子结构——digesting 是动名词，后面必须接宾语，即空格所在的 “the 7 ________ of giant squid”；原文 digesting 的宾语是 beaks，of such creatures 对应题干的 of giant squid，所以答案是 beaks。注意词数限制为 NO MORE THAN TWO WORDS，beaks 只是一个词，且必须写复数（原文是复数，指一只乌贼有多片喙或泛指多只乌贼的喙）。",
          "analysis": "第 5 段第 1 句：“It is from the problems the whales have in digesting the beaks of such creatures that ambergris has its origins.” 这是一个强调句（It is … that …），被强调的成分是 “from the problems the whales have in digesting the beaks of such creatures”（正是因为鲸难以消化这类生物喙部的问题），主干意思是龙涎香由此起源。such creatures 是承接第 4 段末句的回指：“Sperm whales are renowned for their ability to dive to great depths … and for remaining underwater for periods of two hours or more in pursuit of their favourite prey, the giant squid.”（抹香鲸以能深潜、能在水下停留两小时以上追逐其最喜欢的猎物巨型乌贼著称），可见 such creatures 就是 giant squid。题干把强调句拆成因果表达「龙涎香在鲸体内形成，因为难以消化巨型乌贼的某部位」，空格正是 digesting 的宾语，即 beaks（喙）。答案必须是复数 beaks，与原文一致，且符合 NO MORE THAN TWO WORDS 的限制。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Black liquid is produced and is 8 ________ from time to time.",
          "translation": "黑色液体被产生出来，并会不时被 ________。",
          "answer": "vomited up",
          "wordClass": "动词（短语动词 vomit up 的过去分词形式，与空格前的助动词 is 一起构成被动语态，在句中作谓语；两个词，符合 NO MORE THAN TWO WORDS）",
          "locating": {
            "paragraph": "5",
            "quote": "but from time to time large quantities of the liquid are vomited up by the whale."
          },
          "synonyms": [
            "“Black liquid” 同义替换为原文的 “a black, foul-smelling liquid”，即同一种分泌液",
            "“is produced” 同义替换为原文的 “which responds by producing a black, foul-smelling liquid”",
            "“is 8 … from time to time” 与原文 “from time to time large quantities of the liquid are vomited up” 的时间状语与被动结构完全对应"
          ],
          "locatingTip": "定位：流程图第二框的关键词是 Black liquid 与 from time to time，原文中黑色液体出现在第 5 段第 2 句 “which responds by producing a black, foul-smelling liquid”，紧接着第 3 句末尾就是 “but from time to time large quantities of the liquid are vomited up by the whale.”，短语 from time to time 在原文原词复现，是最直接的定位锚点。确定答案技巧：题干用了被动语态 “is [8] from time to time”，原文同样是被动语态 “are vomited up by the whale”，主谓结构一一对应，空格要填的就是动词的过去分词部分 vomited up。注意答案由两个词组成（vomit 加 up），正好卡在 NO MORE THAN TWO WORDS 的上限，不要多写 by the whale。",
          "analysis": "第 5 段第 2 至 3 句：“The beak is sharp and irritates the whale's lower intestine, which responds by producing a black, foul-smelling liquid. It is not clear to scientists whether this secretion should be considered a normal response by the whale's digestive system or a pathological one, but from time to time large quantities of the liquid are vomited up by the whale.”（乌贼的喙很锋利，会刺激鲸的下肠道，肠道于是分泌出黑色的恶臭液体。科学家尚不清楚这种分泌物应看作鲸消化系统的正常反应还是病态反应，但鲸会不时把大量这种液体呕吐出来）。题干把这一过程的第二环节概括为「黑色液体产生并被不时地怎么样」：produced 对应 producing a black, foul-smelling liquid，空格对应 are vomited up。判定依据是原句的被动语态结构与 from time to time 这一原词复现的时间状语，答案填动词过去分词短语 vomited up（两词）。另需留意第 3 段还出现过马克·波罗目击抹香鲸 “vomiting up ambergris” 的记载，那句话讲述的是历史上的观察，不是本题所在的形成过程描述，不要因看到 vomiting up 就误填成主动形式的答案。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "The liquid 9 ________ on contact with the air.",
          "translation": "这种液体接触空气后会 ________。",
          "answer": "hardens",
          "wordClass": "动词（第三人称单数、一般现在时；主语是不可数名词 the liquid，空格在句中作谓语，叙述一般规律，故动词加 -s）",
          "locating": {
            "paragraph": "5",
            "quote": "Once outside the whale's body and exposed to air, the substance hardens, acquiring the waxy, greyish and pleasantly aromatic characteristics of ambergris."
          },
          "synonyms": [
            "“on contact with the air”（接触空气时）同义替换为原文的 “Once outside the whale's body and exposed to air”（一旦离开鲸体并暴露于空气中）",
            "“The liquid” 对应原文的 “the substance”，指同一种排出的液体，第 5 段前文用 the liquid，此处换成 the substance",
            "“hardens” 与原文 “the substance hardens” 原词复现，均表示变硬"
          ],
          "locatingTip": "定位：流程图第三框的关键词是 air 与 the liquid，第 5 段第 4 句 “Once outside the whale's body and exposed to air, the substance hardens …” 同时包含 air 这一锚点和主语 the substance，一步锁定。确定答案技巧：题干是主谓结构 “The liquid [9] on contact with the air”，缺少谓语动词；原文对应句的主干正是 “the substance hardens”，主语对应、时间状语对应，因此空格填第三人称单数形式的 hardens。要小心不要误写成被动语态或过去式：原文用的是不及物动词的一般现在时叙述客观规律，必须保持 -s 的形式。",
          "analysis": "第 5 段第 4 句：“Once outside the whale's body and exposed to air, the substance hardens, acquiring the waxy, greyish and pleasantly aromatic characteristics of ambergris.”（一旦离开鲸的身体并暴露在空气中，这种物质就会变硬，并具备龙涎香那种蜡状、灰白、气味怡人的特征）。题干把这句话压缩为「液体接触空气后会如何」，on contact with the air 对应 Once outside the whale's body and exposed to air，The liquid 对应 the substance（紧接前文 “large quantities of the liquid are vomited up by the whale”，指的是同一种排出物），空格需要的是谓语动词，即 hardens。语法上的判定要点：hardens 在这里作不及物动词，主语是单数不可数名词 the substance／the liquid，用一般现在时第三人称单数形式描述客观规律，因此答案必须带 -s，写成 harden 或 hardened 都与原文形式和题意不符。答案为一个词，符合 NO MORE THAN TWO WORDS 的要求。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–13 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 13
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "In the 20th century, most of the world's ambergris came from processing dead whales.",
          "translation": "在 20 世纪，世界上大部分龙涎香来自对死鲸的加工处理。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Ambergris was by far the most valuable product to be extracted during the processing of the whales' carcasses, and over 90 per cent of the annual worldwide total was acquired in this way, as a by-product of commercial whaling."
          },
          "synonyms": [
            "“most of the world's ambergris” 同义替换为原文的 “over 90 per cent of the annual worldwide total”（全球年度总量的 90% 以上）",
            "“came from processing dead whales” 同义替换为原文的 “acquired … as a by-product of commercial whaling” 与 “during the processing of the whales' carcasses”",
            "“In the 20th century” 对应原文首句的 “in the 19th and 20th centuries”，第 6 段整体讲的正是 19、20 世纪商业捕鲸时期"
          ],
          "locatingTip": "定位：题干关键词是 ambergris + most + processing。全文把「占比」与「加工鲸尸」放在一起的只有第 6 段第 3 句，句中有两个数字与过程信息：over 90 per cent、the processing of the whales' carcasses。确定答案技巧：先看数量——over 90 per cent 与题干的 most（大多数）方向一致、程度相当；再看来源——was acquired in this way 中的 this way 回指同一句的 “during the processing of the whales' carcasses” 和 “as a by-product of commercial whaling”，即从被捕获宰杀后的鲸体加工中获得。时间上第 6 段首句已交代 the 19th and 20th centuries。三层信息全部吻合，判 TRUE。",
          "analysis": "第 6 段写道：“Sperm whales were ruthlessly pursued by commercial whalers in the 19th and 20th centuries. In 1963–64 alone, almost 30,000 individuals were killed … Ambergris was by far the most valuable product to be extracted during the processing of the whales' carcasses, and over 90 per cent of the annual worldwide total was acquired in this way, as a by-product of commercial whaling.”（抹香鲸在 19、20 世纪被商业捕鲸者残酷捕杀……龙涎香是加工鲸尸时提取出的最有价值的产品，全球年度总量的 90% 以上都是这样获得的，属于商业捕鲸的副产品）。这段文字与题干的对应关系非常清楚：时间落在 20 世纪（该段的时间跨度是 19、20 世纪），数量用 over 90 per cent 支持题干的 most，来源用 during the processing of the whales' carcasses 与 as a by-product of commercial whaling 支持题干的 came from processing dead whales。三处信息方向一致，没有冲突，答案是 TRUE。做题时要注意代词指代：acquired in this way 中的 this way 指的就是前面提到的「加工鲸尸、作为捕鲸副产品」这一途径。",
          "traps": [
            "为什么不是 FALSE：原文用 “over 90 per cent of the annual worldwide total” 明确给出压倒性的比例，与题干的 most（大部分）不冲突，反而印证；原文也没有任何相反的说明。",
            "为什么不是 NOT GIVEN：原文既给出了比例（over 90 per cent），也给出了获得方式（加工鲸尸、商业捕鲸的副产品），两条信息都直接可见，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The value of ambergris has increased recently.",
          "translation": "龙涎香的价值最近上升了。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "However, even before the ban on hunting sperm whales was imposed, the 1972 Marine Mammal Protection Act had prohibited trade in ambergris."
          },
          "synonyms": [
            "“recently” 在原文最近的年代信息（1972 年法案与 1984 年禁令）中都找不到与之搭配的「价格上涨」表述",
            "“The value of ambergris” 在原文的对应表述是第 1 段的 “worth its weight in gold”（且其前有 “At one time”，明确指向过去）与第 6 段的 “the most valuable product”",
            "“has increased” 在原文没有任何对应：原文涉及龙涎香近期状况的只有禁止交易（prohibited trade）与用途被取代（was supplanted）两条信息"
          ],
          "locatingTip": "定位：题干关键词是 value 与 recently。value 在原文出现两次语境：第 1 段 “At one time, ambergris was worth its weight in gold”（带 at one time，指向过去）和第 6 段 “Ambergris was by far the most valuable product”；recently 这一时间维度对应第 6 段密集出现的近现代时间点（1963–64、1972、1984）。确定答案技巧：把第 6 段逐句核对会发现，原文只讲了三件事——捕鲸规模与禁令、1972 年法案禁止龙涎香交易、龙涎香在香水制作中被其他材料取代；通篇没有出现任何关于价格或价值上升的陈述，也没有把「价值」和「最近」连在一起说。题干所断言的「价值最近上升」在原文找不到依据，属于信息缺失，判 NOT GIVEN。",
          "analysis": "题干包含两个信息成分：价值（value）与近期趋势（has increased recently）。原文关于价值的表述全部指向过去或一般性事实：第 1 段 “At one time, ambergris was worth its weight in gold, but there was much confusion about its origins.”（曾有一段时间，龙涎香的价值与等重黄金相当）；第 6 段 “Ambergris was by far the most valuable product to be extracted during the processing of the whales' carcasses”。而第 6 段真正涉及近现代的句子只有 “In 1963–64 alone, almost 30,000 individuals were killed …”、“only the imposition of a ban on the hunting of sperm whales in 1984 …”、“the 1972 Marine Mammal Protection Act had prohibited trade in ambergris”、“so ambergris was supplanted in the making of perfume by other materials”，讲的是捕鲸规模、禁令、交易禁止和用途被替代，完全没有提到龙涎香近期价格或价值的涨跌。缺什么说什么：原文没有「上升」这一信息，也没有明确的「下降」陈述，按判断题规则应判 NOT GIVEN。说明一句：有考生会把 “was supplanted”（被其他材料取代）读成价值下跌而想选 FALSE，但取代讲的是用途被替换，并不等于原文对价格或价值走向作出了明确陈述；本题官方答案为 NOT GIVEN，应以答案表为准。",
          "traps": [
            "为什么不是 TRUE：原文没有任何关于龙涎香价值近期上升的表述。唯一带「曾有一度」意味的价值句是第 1 段的 “At one time, ambergris was worth its weight in gold”，其中的 At one time 明确把高价限定在过去，不能据此推出最近上涨。",
            "为什么不是 FALSE：FALSE 要求原文给出相反的明确信息（例如价值下跌、行情变差）。原文只说了交易被禁（prohibited trade）和用途被其他材料取代（was supplanted），并没有对价值走向本身作出陈述，所以不是矛盾，而是缺失。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Ambergris remains an important ingredient in perfume.",
          "translation": "龙涎香至今仍是香水中的一种重要成分。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Just as petroleum and plastic products were replacing other natural products of whaling, so ambergris was supplanted in the making of perfume by other materials, some natural and some synthetic in origin."
          },
          "synonyms": [
            "“in perfume” 对应原文的 “in the making of perfume”，介词短语原词复现",
            "“remains”（至今仍是）与原文的 “was supplanted”（已被取代）形成对立：原文描述的是它被挤出香水制作之后的状态",
            "“an important ingredient” 对应原文对它的历史定位（第 1 段 “highly valued as a fixing agent in the making of perfume”）与现实的被替代（was supplanted … by other materials）"
          ],
          "locatingTip": "定位：题干关键词是 ingredient in perfume。全文与香水制作有关的句子有两处：第 1 段 “it was also highly valued as a fixing agent in the making of perfume”（过去地位）与第 6 段 “so ambergris was supplanted in the making of perfume by other materials”（后来的变化）。确定答案技巧：题干用 remains（仍然是）表达现在的状态，判定依据要看原文有没有一个「后来变了」的表述。第 6 段的 supplanted（被取代）明确说明龙涎香在香水制作中的位置已被其他材料占据，一「仍在」一「已被取代」，构成的正是相反的陈述，因此判 FALSE。注意不要被第 1 段的历史地位描述带走，那段讲的是古代以来源远的高评价。",
          "analysis": "第 6 段第 5 句：“Just as petroleum and plastic products were replacing other natural products of whaling, so ambergris was supplanted in the making of perfume by other materials, some natural and some synthetic in origin.”（正如石油与塑料制品正在取代捕鲸业的其它天然产品一样，龙涎香在香水制作中也被其他材料取代，这些材料有些是天然的，有些是人造的）。句中的结构 “Just as … so …” 表示两件事同步发生，supplanted 意为「被取代、被排挤掉」，说明龙涎香在香水制作中的位置已经让给了天然或人造的替代材料。第 1 段虽然高度评价龙涎香作为定香剂的价值（“highly valued as a fixing agent in the making of perfume”），但那是古代及历史时期的情形；题干用 remains 把这种历史地位说成延续至今的现状，与第 6 段明确的「已被取代」直接冲突，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文说龙涎香在香水制作中被其他材料取代（was supplanted in the making of perfume by other materials），与题干「至今仍是重要成分」相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对龙涎香在香水中的地位既有历史一面（highly valued as a fixing agent）也有后来变化的一面（was supplanted），两处信息都明确，只是与题干立场相反；有明确相反信息时按规则判 FALSE，而不是信息缺失。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "New uses have recently been found for ambergris.",
          "translation": "最近人们为龙涎香找到了新的用途。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Nevertheless, it is possible that, as sperm-whale populations recover to their former numbers in the wild, so the sight of lumps of ambergris washed ashore along the tide-line will once again become a familiar one to beach-combers the world over."
          },
          "synonyms": [
            "“New uses have recently been found” 在原文没有对应：原文列举的用途（spice、aphrodisiac、fixing agent in perfume）都在第 1 段，且从属于古代这一时间背景",
            "“recently” 对应第 6 段最近的年代信息（1972 年法案、1984 年禁令），但那段只讲捕鲸、禁令、交易禁止与用途被取代，没有新用途",
            "原文末句谈的是未来的景象（once again become a familiar one，重新变得常见），属于旧情形可能重现，而不是新用途被开发"
          ],
          "locatingTip": "定位：题干关键词是 new uses 与 recently。用途信息集中在第 1 段（“used as a spice”、“believed to be an aphrodisiac when added to food or wine”、“a fixing agent in the making of perfume”）与第 6 段（香水制作中被人造材料取代）；recently 对应的是第 6 段那些近现代时间点。确定答案技巧：抓住方向差异——「用途被取代」与「新增用途」是两种完全不同的信息。第 6 段讲的是禁止交易、旧用途被替代、以及未来鲸群恢复后龙涎香可能重新常见于海滩，全篇没有出现「发现新用途」的陈述。原文对此没有信息，判 NOT GIVEN。切忌把旧用途的罗列当成新用途。",
          "analysis": "题干断言「最近为龙涎香找到了新用途」。原文中所有关于用途的信息都属于过去：第 1 段 “was widely used as a spice, which was believed to be an aphrodisiac when added to food or wine”（古代用作香料，被认为加入食物或酒中有催情作用）、“highly valued as a fixing agent in the making of perfume”（作为香水定香剂被高度评价）；第 2 段引语中 “it is largely used in perfumery”（大量用于香水制作）；第 6 段 “ambergris was supplanted in the making of perfume by other materials”（在香水制作中被其他材料取代）。可以看到，文中出现的是「旧用途」以及「旧用途后来被替代」，没有任何一处提到为龙涎香开发出新用途。第 6 段末句展望未来时说的是，随着抹香鲸种群恢复，龙涎香块重新被冲上沙滩的情形可能再度常见（“will once again become a familiar one”），讲的是旧景象的重现，也不是新用途。原文对题干的断言既没有支持也没有否定，属于信息缺失，答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文没有任何「最近发现新用途」的陈述。第 1 段列出的香料、催情剂、定香剂都是古代与历史时期的用途，第 6 段讲的是用途被取代与未来景象重现，都不构成新用途。",
            "为什么不是 FALSE：FALSE 需要原文明确否认有新用途（例如说明龙涎香已无任何用途或不再被开发）。原文只是没有提及新用途的开发，没有相反信息，因此不是 FALSE 而是 NOT GIVEN。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
