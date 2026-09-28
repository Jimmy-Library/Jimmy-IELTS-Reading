(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-53", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-53",
  "meta": {
    "examId": "p1-low-53",
    "title": "The Early History of Olive Oil 橄榄油的历史",
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
          "stem": "In the cultivation of olives, a period without rain is advantageous.",
          "translation": "在橄榄的种植中，一段无雨的时期是有利的。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The trees require some cold weather during the year, but also tolerate hot, dry conditions, and do not like moisture when they are flowering. They actually produce better when subjected to these stressful conditions"
          },
          "synonyms": [
            "“a period without rain” 同义替换为原文的 “hot, dry conditions”，即炎热干燥、缺雨的气候条件",
            "“is advantageous” 同义替换为原文的 “actually produce better”，原文说橄榄树在这样严苛的条件下反而产量更好，说明这种条件是“有利的”",
            "“do not like moisture when they are flowering” 从反面印证了缺水少湿对橄榄树有益，与题干的“无雨有利”方向一致"
          ],
          "locatingTip": "定位：题干中没有专有名词，只能用话题词 olive 与“气候条件”这一语义去扫读。全文第 1 段就是讲橄榄树生长条件的段落，气候词 weather、conditions、moisture 都集中在这里，一步即可锁定。确定答案技巧：本题的判分点是“无雨对橄榄树是否有利”。原文先说橄榄树 “tolerate hot, dry conditions”（能耐受炎热干燥），又说 “do not like moisture when they are flowering”（开花时不喜欢潮湿），最后用 They actually produce better when subjected to these stressful conditions 点明：这些“严苛条件”反而让它长得更好。dry conditions 对应 a period without rain，produce better 对应 advantageous，两处同义对应齐全且方向一致，因此判 TRUE。注意不要把 tolerate（能耐受）当成“不利”：真正决定答案的是后面 produce better 这一层“有利”的表述。",
          "analysis": "第 1 段第 2、3 句是本题的全部依据。第 2 句：“The trees require some cold weather during the year, but also tolerate hot, dry conditions, and do not like moisture when they are flowering.”（橄榄树一年中需要一些寒冷天气，但也能耐受炎热干燥的条件，并且在开花时不喜欢潮湿）。第 3 句：“They actually produce better when subjected to these stressful conditions, and as a result, olive trees have traditionally been grown on land where little else will survive.”（在经受这些严苛条件时，它们反而长得更好；也正因如此，橄榄树传统上被种在别的作物几乎无法存活的地方）。题干把 hot, dry conditions 概括为 a period without rain（一段无雨的时期），把 produce better 概括为 is advantageous（是有利的），两者在逻辑上完全吻合；此外 “do not like moisture”（不喜潮湿）也从反面说明少水无雨的时期对开花期的橄榄树是好事。三处信息同向叠加，没有矛盾，也没有缺失，故答案为 TRUE。做题时要抓住本题的语义核心——“干燥缺雨是否有好处”，只要在原文里找到“干燥条件下反而产得更好”这层因果关系，答案即成立。",
          "traps": [
            "为什么不是 FALSE：原文用 “produce better when subjected to these stressful conditions” 明确说明干旱这类严苛条件能使橄榄树增产，climate 上的“无雨”正是这类条件之一，与题干“有利（advantageous）”方向一致，不存在相反信息。",
            "为什么不是 NOT GIVEN：原文对橄榄树与干旱的关系交代得非常具体，既有 tolerate hot, dry conditions，也有 produce better，属于明确给出的信息，而不是未提及。题干的 advantageous 只是对 produce better 的合理概括，并非原文之外的新内容。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The most fertile fields are usually chosen for growing olives.",
          "translation": "橄榄的种植通常选用最肥沃的田地。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "olive trees have traditionally been grown on land where little else will survive."
          },
          "synonyms": [
            "“are usually chosen for growing olives” 同义替换为原文的 “have traditionally been grown on land”，traditionally 对应 usually，都是“历来如此、通常”的意思",
            "“the most fertile fields” 与原文的 “land where little else will survive”（别的作物几乎无法存活的土地）形成正面对立：原文说的是贫瘠、其他作物都长不好的地，题干却说是最肥沃的田地",
            "“produce better when subjected to these stressful conditions” 进一步说明橄榄树被种在贫瘠恶劣之地并非偶然，而是因为它在这种条件下反而表现更好"
          ],
          "locatingTip": "定位：题干的关键词是 fertile fields 与 growing olives，原文第 1 段结尾的 land、grown、survive 属于同一语义场，扫读第 1 段末尾即可找到落点。确定答案技巧：本题考“橄榄种在什么样的土地上”，原文用 where little else will survive（别的作物几乎无法存活之处）描述种植地，这正说明土壤并不肥沃；题干却断言“最肥沃的田地（the most fertile fields）通常被选中”，两者一个说地差、一个说地好，属于直接冲突，故判 FALSE。看到 fertile、rich、best soil 这类“正面土地评价”，一定要回原文核对作者给出的到底是什么样的地。",
          "analysis": "第 1 段末句：“They actually produce better when subjected to these stressful conditions, and as a result, olive trees have traditionally been grown on land where little else will survive.”（橄榄树在这些严苛条件下反而长得更好，因此传统上被种在别的作物几乎无法存活的地方）。这句话的逻辑是：因为橄榄树耐旱耐瘠，所以才被安排在贫瘠、别的作物都种不活的地块上——这是“退而求其次”的用地选择，与“最肥沃的田地”恰好相反。题干把 land where little else will survive 偷换成 the most fertile fields，把“最差的可用地”说成“最好的地”，属于事实层面的正面冲突，因此答案是 FALSE。作答时要注意：判断题中凡出现最高级（the most fertile）或绝对化评价（best、richest）的表述，往往就是命题人对原文做的“拔高”，需要回原文确认原文给出的评价究竟是好还是坏。",
          "traps": [
            "为什么不是 TRUE：原文说橄榄树一向种在 “land where little else will survive”（别的作物几乎不能存活的土地），这种地的肥力显然不高，与题干“最肥沃的田地”完全相反，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对橄榄树的种植地点有明确交代（种在贫瘠、其他作物难以存活之处），“土地条件”这一信息既有提及又与题干冲突，符合 FALSE 的定义，不是信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "In ancient Greece, the olive tree was said to have divine origins.",
          "translation": "在古希腊，据说橄榄树有着神圣的（神的）起源。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The ancient Greeks believed the olive tree was a priceless gift from the goddess Athena and used its oil in sacred religious rituals."
          },
          "synonyms": [
            "“In ancient Greece” 同义替换为原文的 “The ancient Greeks”，地点与人群一一对应",
            "“was said to have divine origins” 同义替换为原文的 “was a priceless gift from the goddess Athena”：来自女神雅典娜的礼物，正是“神的来源”",
            "“divine” 与原文的 “goddess”（女神）、“sacred religious rituals”（神圣的宗教仪式）构成同一语义场，都在强调橄榄树的神圣属性"
          ],
          "locatingTip": "定位：题干中的专有信息 ancient Greece 与 olive tree 都很醒目，第 3 段首句立即出现 The ancient Greeks believed the olive tree…，扫读到希腊人就开始精读该段。确定答案技巧：本题的判分点是“橄榄树是否有神圣来源”。原文说古希腊人相信橄榄树是 “a priceless gift from the goddess Athena”（女神雅典娜无价的礼物），goddess 是神，gift from the goddess 就是 divine origins（神赐的起源），只是表达方式不同，信息方向完全一致，因此判 TRUE。做本题时要把 divine 这类抽象形容词“落地”成原文的具体说法（女神、礼物、神圣仪式），不要因为原文没有出现 divine 一词就误判 NOT GIVEN。",
          "analysis": "第 3 段首句：“The ancient Greeks believed the olive tree was a priceless gift from the goddess Athena and used its oil in sacred religious rituals.”（古希腊人相信橄榄树是女神雅典娜赐予的无价礼物，并将其油用于神圣的宗教仪式）。句中包含两层信息：①橄榄树的来源是女神雅典娜的赠礼，即题干所说的 divine origins（神圣起源）；②橄榄油的用途是宗教仪式。题干把 “a priceless gift from the goddess Athena” 概括为 “have divine origins”，把古希腊的信仰（believed）表达为 “was said to”，属于合理的同义概括，信息量没有增减，也没有矛盾，因此答案是 TRUE。注意题干中的 was said to（据说）恰好对应原文的 believed（相信），两者都在说明这是当时人的信仰而非客观事实，语气层面也完全对应。",
          "traps": [
            "为什么不是 FALSE：原文不仅说橄榄树来自女神雅典娜，还把橄榄油用于 sacred religious rituals，全段都在强调其神圣属性（这也是后文 Homer 称其为 liquid gold 的铺垫），与题干“有着神圣起源”不存在任何矛盾。",
            "为什么不是 NOT GIVEN：原文明确交代了橄榄树的来源是女神雅典娜的礼物，题目所问的“神圣起源”在原文中已有直接答案，并非没有提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Olive oil was more costly to buy in Greece than gold.",
          "translation": "在希腊，橄榄油的售价高于黄金。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In fact, the Greek poet Homer called olive oil 'liquid gold', and during the 6th and 7th centuries BC, Greek law forbade the cutting down of olive trees and made it punishable by death."
          },
          "synonyms": [
            "“in Greece” 对应原文的 “Greek poet Homer” 与 “Greek law”，同段反复出现 Greek，地点信息一致",
            "“more costly to buy … than gold” 在原文中没有任何对应：原文只说荷马把橄榄油称为 “liquid gold”（液体黄金），这是一个比喻，用来形容其珍贵，并未涉及价格或购买成本",
            "“gold” 一词在原文中仅作为比喻的喻体出现，而非价格比较的对象，题干把比喻当成了事实性比较"
          ],
          "locatingTip": "定位：题干的 gold 与 Greece 是极好的定位词，第 3 段第 2 句同时出现 Greek、Homer 和 'liquid gold'，扫到 gold 即可停下精读。确定答案技巧：本题的陷阱是把修辞当事实。原文中 gold 出现在引号内的比喻 “liquid gold”（液体黄金）里，作者引用荷马的说法只是要说明橄榄油极其珍贵；题干却把它升级为事实性的价格比较——“在希腊买橄榄油比黄金更贵”。原文既没有给出任何价格，也没有做过橄榄油与黄金的价格对比，属于信息缺失，因此判 NOT GIVEN。凡题干出现 costly、price、expensive 这类“价格”词，而原文只有 value 或比喻性的说法时，通常按 NOT GIVEN 处理。",
          "analysis": "第 3 段第 2 句：“In fact, the Greek poet Homer called olive oil 'liquid gold', and during the 6th and 7th centuries BC, Greek law forbade the cutting down of olive trees and made it punishable by death.”（事实上，希腊诗人荷马把橄榄油称为“液体黄金”；在公元前 6—7 世纪，希腊法律禁止砍伐橄榄树，违者处死）。原文与 gold 有关的只有 'liquid gold' 这一带引号的比喻，其功能是强调橄榄油的珍贵，同段后面 “King David valued his groves of olive trees and his olive oil warehouses so much that he posted guards around the clock”（大卫王极其珍视他的橄榄林和油库，派人日夜看守）也只是讲珍视程度，同样没有涉及价格。题干问的是“在希腊购买橄榄油是否比黄金更贵”，这需要原文给出价格或成本比较；原文既无价格数字，也无“橄榄油与黄金谁更贵”的比较，属于信息缺失，故答案为 NOT GIVEN。做这类题的关键是区分比喻与事实：liquid gold 是修辞，不能当作价格证据；同时要警惕“原文提到 X 和 Y 就认为原文比较了 X 和 Y”的推断。",
          "traps": [
            "为什么不是 TRUE：原文只有荷马把橄榄油称作 “liquid gold” 这一比喻，以及希腊法律严禁砍树、大卫王派人看守等表达珍贵的信息，从未说橄榄油的价格高于黄金，不能由“珍贵”推出“比黄金贵”。",
            "为什么不是 FALSE：原文并没有说橄榄油便宜或不如黄金值钱，只是完全没有提到价格，没有相反信息就不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Plato mentions the use of olive oil in the preparation of food.",
          "translation": "柏拉图提到了橄榄油在食物制作中的用途。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Its employment in cooking dates at least as far back as the 5th century BC, as described by the Greek philosopher Plato."
          },
          "synonyms": [
            "“Plato” 在原文中原词复现：“the Greek philosopher Plato”，人名是本题最可靠的定位词",
            "“the use of olive oil in the preparation of food” 同义替换为原文的 “Its employment in cooking”，employment 对应 use，cooking 对应 the preparation of food",
            "“mentions” 同义替换为原文的 “as described by”，两者都表示“由某人记载、提到”"
          ],
          "locatingTip": "定位：题干中的专有名词 Plato 全文只出现一次，位于第 4 段第 2 句，直接跳到第 4 段开头精读即可，无需读其他段落。确定答案技巧：本题的判分点是“柏拉图是否提到橄榄油用于做饭”。原文写 “Its employment in cooking dates at least as far back as the 5th century BC, as described by the Greek philosopher Plato.”，其中 Its 指代上文的 olive oil，employment in cooking 即“用于烹饪”，as described by Plato 说明这一用途正是由柏拉图记载的。题干把 cooking 改写成 the preparation of food，把 described by 改写成 mentions，两处都是常规同义替换且方向一致，因此判 TRUE。注意同段后面还提到橄榄油用于美容与健康（罗马人沐浴后涂抹身体），那是另一项用途，不要与本题的 cooking 混淆。",
          "analysis": "第 4 段开头两句：“Over the years, olive oil developed other uses. Its employment in cooking dates at least as far back as the 5th century BC, as described by the Greek philosopher Plato.”（多年来，橄榄油发展出了其他用途。据希腊哲学家柏拉图的记载，它被用于烹饪至少可以追溯到公元前 5 世纪）。代词 Its 承接上文的 olive oil，employment in cooking 就是“用于烹饪”即题干所说的 the preparation of food（食物的制作），而 as described by the Greek philosopher Plato 明确把这条记载归于柏拉图，对应题干的 Plato mentions。原文的 5th century BC 是时间信息，题干未涉及，不影响判断。三处信息（谁记载、橄榄油、用于做饭）完全对应，逻辑方向一致，所以答案是 TRUE。答题提示：本句的难点只在代词指代与 employment 一词的理解——employment 在这里不是“雇佣”，而是“使用、用途”，与 use 同义。",
          "traps": [
            "为什么不是 FALSE：原文用 as described by the Greek philosopher Plato 明确把“橄榄油用于烹饪”这条信息归功于柏拉图，与题干完全一致，没有任何矛盾点。",
            "为什么不是 NOT GIVEN：原文对柏拉图与烹饪用油这条信息交代得非常直接（人名加记载内容同时出现），信息完整，并非未提及；本题的干扰项其实是同段后面罗马人用油护肤的内容，那属于另一项用途。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "North African farmers initially resisted the introduction of olive trees.",
          "translation": "北非农民起初抵制橄榄树的引入。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "It is generally believed that in the 1st-2nd centuries BC, olive trees were taken to North Africa and then to Spain, which was later to become the world's largest producer of olive oil."
          },
          "synonyms": [
            "“the introduction of olive trees” 同义替换为原文的 “olive trees were taken to …”，taken to 即“被带到、被引入”",
            "“North African farmers” 部分对应原文的 “North Africa”，原文只给出地名，没有提到任何农民或当地人的态度",
            "“initially resisted” 在原文中完全没有对应：原文只讲橄榄树被带到北非、再传到西班牙这一传播过程，对当地人的反应只字未提"
          ],
          "locatingTip": "定位：题干中的专有名词 North Africa 是全文唯一的定位锚点，出现在第 4 段倒数第三句，扫读时锁定 North Africa 即可。确定答案技巧：本题的判分点是“北非农民是否抵制”。原文说的是 “olive trees were taken to North Africa and then to Spain”（橄榄树被带到北非，随后传到西班牙），全句只交代了传播路径与时间（1st-2nd centuries BC），随后补充西班牙后来成为世界最大产油地，该段没有出现 farmers、local people、resist、refuse、accept 这类表示当地态度的词。题干中的 “initially resisted”（起初抵制）是原文完全没有涉及的内容，属于信息缺失，因此判 NOT GIVEN。切忌用常识代替原文：即使我们知道某种作物引入新地区常有阻力，原文没写就只能选 NOT GIVEN。",
          "analysis": "第 4 段中段写道：“It is generally believed that in the 1st-2nd centuries BC, olive trees were taken to North Africa and then to Spain, which was later to become the world's largest producer of olive oil.”（一般认为，在公元前 1—2 世纪，橄榄树被带到北非，随后又传到西班牙，而西班牙后来成为世界上最大的橄榄油产地）。这句话提供的信息只有三点：时间（公元前 1—2 世纪）、路线（先北非、后西班牙）、结果（西班牙成为最大产油地）。题干却在“引入北非”这件事上加了一个态度信息——北非农民起初抵制。原文既没有出现北非的农民，也没有出现任何表示接受或抵制的表述，题干的 resisted 无处对应，只能判 NOT GIVEN。答题提示：本题与第 5 题同在第四段，做判断题时要注意“话题同段、判分点不同”——第 5 题考柏拉图与烹饪，本题考北非与当地人态度，必须各自回到对应的句子核对，不能互相带答案。",
          "traps": [
            "为什么不是 TRUE：原文只叙述橄榄树被带到北非这一事实，从未描述当地农民的态度，更没有“抵制（resisted）”的说法，无从支持题干。",
            "为什么不是 FALSE：原文同样没有说北非农民欣然接受或积极配合，没有相反信息就不构成矛盾；原文对“态度”这一点的沉默正是 NOT GIVEN 的典型情形。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–9 流程图填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 9
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "olives are harvested by picking them or 7 ________ the trees",
          "translation": "橄榄的采收方式是手工采摘，或者 ________ 橄榄树（把果子从树上打下来）。",
          "answer": "beating",
          "wordClass": "动名词（空格前有并列连词 or，需与前面的 picking 并列，同作介词 by 的宾语；填原文动词的动名词形式 beating，不加冠词、不加复数）",
          "locating": {
            "paragraph": "5",
            "quote": "The olives were harvested from the trees by hand or by beating the fruit from the trees with long sticks."
          },
          "synonyms": [
            "“olives are harvested” 在原文中原词复现：“The olives were harvested from the trees”",
            "“by picking them” 同义替换为原文的 “by hand”，手工采摘即 by picking them",
            "“or 7 … the trees” 同义替换为原文的 “or by beating the fruit from the trees”，只要把 beat 改为动名词形式与 picking 并列"
          ],
          "locatingTip": "定位：流程图第一格讲“采收”，回到原文找 harvest 一词即可，第 5 段第 3 句正是 “The olives were harvested from the trees by hand or by beating the fruit from the trees with long sticks.”。确定答案技巧：题干是 “by picking them or 7 ___ the trees” 的并列结构，or 前后必须同类——前面是 by 加动名词 picking，后面也应是一个动名词短语；原文给出的正是 by hand or by beating the fruit from the trees，把 by hand 改写为 by picking them 后，剩下的动词就是 beat，按并列要求改成动名词 beating。写成 beat 或 beats 都会因词形与 picking 不一致而失分，且题目要求 ONE WORD ONLY，只能填 beating 一个词。",
          "analysis": "第 5 段第 3 句：“The olives were harvested from the trees by hand or by beating the fruit from the trees with long sticks.”（橄榄是用手从树上采摘的，或者用长棍把果实从树上打下来）。本题的答案来自这一并列结构：by hand（手工采摘）和 by beating the fruit from the trees with long sticks（用长棍把果实打下来）是古代两种采收方式。题干把 by hand 意译为 by picking them，把后半句压缩为 “or 7 ___ the trees”，留空的正是表示动作的词。原文用的是动词 beat，题干要求与前面的 picking 形成并列，故须改为动名词 beating。从词性看，空格处于介词 by 之后、并列连词 or 之后的宾语位置，语法上必须是名词性成分，动名词 beating 恰好满足；同时题干中的 the trees 已给出宾语，所以空格只填一个词 beating，不能写 beating the fruit。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "olive flesh is placed in 8 ________ and pressed",
          "translation": "橄榄果肉被放入 ________ 中并压榨。",
          "answer": "bags",
          "wordClass": "名词（复数形式；空格前有介词 in，后有并列的被动谓语 and pressed，填与原文词形一致的复数形式 bags）",
          "locating": {
            "paragraph": "5",
            "quote": "The remaining seedless flesh was put in woven bags and pressed."
          },
          "synonyms": [
            "“olive flesh” 同义替换为原文的 “The remaining seedless flesh”（去掉核之后剩下的无核果肉）",
            "“is placed in” 同义替换为原文的 “was put in”，两者都是“被放入”的意思，语态与时态按题干统一",
            "“and pressed” 在原文中原词复现：“and pressed”，两句的并列结构完全一致"
          ],
          "locatingTip": "定位：题干讲的是“果肉入袋压榨”这一步，属于加工流程的中间环节，回到第 5 段按流程顺序找 flesh 或 pressed 即可，落在 “The remaining seedless flesh was put in woven bags and pressed.”。确定答案技巧：本题几乎是原文句子的逐词改写，把 The remaining seedless flesh 概括为 olive flesh，把 was put in 改为 is placed in，剩下的宾语 woven bags 就是空格内容；由于空格前是介词 in、后面紧接并列谓语 and pressed，只能填一个名词，原文的 woven 是修饰语不在答案内，所以填 bags。注意保留复数形式：原文用的是复数 bags，且此处指装果肉的多个编织袋，写 bag 会因与原文不符而失分。",
          "analysis": "第 5 段第 5 句：“The remaining seedless flesh was put in woven bags and pressed.”（剩下的无核果肉被放入编织袋中压榨）。流程图第 4 格 “olive flesh is placed in 8 ___ and pressed” 正好对应这一句：olive flesh 对应 The remaining seedless flesh，is placed in 对应 was put in，pressed 原词保留，因此空格处就是原文的 woven bags 中的核心名词 bags。原文用 woven（编织的）说明袋子的材质，属于定语信息，不在答案内；答案只写名词 bags。词性上，空格位于介词 in 之后，需名词性成分作宾语，且该名词与后文 and pressed 一起构成被动结构的主语补足部分，用复数与原文一致即可。三道流程图填空题（7、8、9）按加工步骤顺序排列，做题时可以先在原文中把整段流程（采收、清洗压碎、去核、入袋压榨、浇热水、静置分离、加盐、撇油）标出来，再逐格对号入座，效率最高。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "resulting liquid is given time to settle and separate, and 9 ________ is used to aid the process",
          "translation": "所得液体被静置以沉淀并分离，同时使用 ________ 来加快这一过程。",
          "answer": "salt",
          "wordClass": "名词（不可数，物质名词；原文以 a bit of salt 的形式出现，空格只需填 salt，不加冠词、不变复数）",
          "locating": {
            "paragraph": "5",
            "quote": "In cold weather, a bit of salt was added to speed up the process."
          },
          "synonyms": [
            "“is used to aid the process” 同义替换为原文的 “was added to speed up the process”，aid 对应 speed up，process 原词复现",
            "“resulting liquid is given time to settle and separate” 同义替换为原文的 “was allowed to settle and separate”",
            "“In cold weather” 是原文给出的使用条件，题干省略了天气条件，只保留结果性描述"
          ],
          "locatingTip": "定位：题干中的关键词是 settle、separate 与“加速过程”，在第 5 段讲静置分离的部分可依次找到 “where it was allowed to settle and separate” 与紧接其后的 “In cold weather, a bit of salt was added to speed up the process.”。确定答案技巧：题干说“某物被用来加快这一过程”，需要在原文找到与 speed up the process 对应的动作，即 a bit of salt was added；被加入用来加速的东西就是盐，故填 salt。这一步的关键是分清“被加入的东西（salt）”与“加入的目的（speed up the process）”，空格问的是前者。答案为一个名词单词 salt，不可写成 a bit of salt 或 salty（词性不同、且超过一个词）。",
          "analysis": "第 5 段讲的是古法榨油的完整流程，其中与本题相关的两句是：“The liquid produced in this process, consisting of oil and water, was drained into stone basins or tanks, where it was allowed to settle and separate. In cold weather, a bit of salt was added to speed up the process.”（此过程中产生的液体由油和水组成，被排入石制盆或槽中静置分离。在寒冷天气里，会加入一点盐来加快这一过程）。题干把前一句压缩为 “resulting liquid is given time to settle and separate”，把后一句改写为 “and 9 ___ is used to aid the process”：aid 与 speed up 同义，is used 对应 was added，因此空格应填被加入的物质——salt。词性上，salt 在此为不可数物质名词，原文以 a bit of salt 的形式出现，但空格要求一个词，故只写 salt；同时注意该句的时态为一般过去时（was added），题干改为一般现在时（is used），这是流程图概括原文流程时的常规时态转换，不影响答案。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 13
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "In ancient times, this waste liquid was usually thrown away, which led to 10 ________ .",
          "translation": "在古代，这种废液通常被直接倒掉，这导致了 ________。",
          "answer": "pollution",
          "wordClass": "名词（不可数，抽象名词；作 led to 的宾语，表示被导致的结果，填不可数形式 pollution）",
          "locating": {
            "paragraph": "6",
            "quote": "In many ancient civilisations it was often simply discarded, causing serious pollution because of its acidity and high salt content."
          },
          "synonyms": [
            "“this waste liquid” 同义替换为原文的 “The waste water from the milling process”，即榨油废水 amurca",
            "“was usually thrown away” 同义替换为原文的 “was often simply discarded”，discarded 即被丢弃",
            "“which led to” 同义替换为原文的 “causing”，原文用现在分词表示结果，题干改用 led to 的因果关系表达"
          ],
          "locatingTip": "定位：笔记的标题是 Amurca，而 amurca 一词在第 6 段首句定义段就出现（“The waste water from the milling process, which is called amurca”），因此第 10 题直接在第 6 段开头找“倒掉废水导致什么”。确定答案技巧：题干说“倒掉废液（thrown away）导致（led to）某结果”，原文对应 “it was often simply discarded, causing serious pollution”，discarded 对应 thrown away，causing 对应 led to，那么被导致的结果就是 serious pollution，空格只填核心名词 pollution，不带形容词 serious（题干已给 led to 的结构，且要求 ONE WORD ONLY）。注意 pollution 为不可数名词，不加冠词也不变复数。",
          "analysis": "第 6 段开头两句：“The waste water from the milling process, which is called amurca, is a bitter-tasting and foul-smelling liquid. In many ancient civilisations it was often simply discarded, causing serious pollution because of its acidity and high salt content.”（榨油过程中产生的废水叫 amurca，是一种味道苦涩、气味难闻的液体。在许多古文明中，它通常被直接倒掉，由于酸度高、含盐量高而造成严重污染）。笔记第一句 “In ancient times, this waste liquid was usually thrown away, which led to 10 ___” 是对第二句的改写：In ancient times 对应 In many ancient civilisations，this waste liquid 对应 it（指 amurca），was usually thrown away 对应 was often simply discarded，which led to 对应 causing。因此空格应填 causing 的宾语中心词 pollution。原文还有一个原因状语 because of its acidity and high salt content，解答“为什么会污染”，与空格无关，不要误填 acidity 或 salt。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "when dried, created a hard surface, so used on 11 ________ of certain buildings",
          "translation": "干燥后会形成坚硬的表层，因此被用于某些建筑的 ________ 上。",
          "answer": "floors",
          "wordClass": "名词（复数形式；作介词 on 的宾语，与 of certain buildings 构成“某类建筑的某部位”，填与原文词形一致的复数形式 floors）",
          "locating": {
            "paragraph": "6",
            "quote": "When spread on surfaces, amurca forms a hard finish and therefore it was often applied to the floors of grain storage buildings where it hardened, keeping out water, mud and pests."
          },
          "synonyms": [
            "“when dried, created a hard surface” 同义替换为原文的 “forms a hard finish”，finish 此处指表面涂层，与 surface 相呼应",
            "“so used on” 同义替换为原文的 “therefore it was often applied to”，applied to 与 used on 同义",
            "“certain buildings” 同义替换为原文的具体建筑类型 “grain storage buildings”（储粮建筑）"
          ],
          "locatingTip": "定位：笔记讲的是 amurca 在罗马时期的实际用途，回到第 6 段找 hard、buildings 一类词，落在 “When spread on surfaces, amurca forms a hard finish … often applied to the floors of grain storage buildings”。确定答案技巧：题干说“干燥后形成坚硬表层，因此被用在某些建筑的某部位上”，原文对应 “it was often applied to the floors of grain storage buildings”：applied to 对应 used on，buildings 原词复现，因此 of 前的名词就是答案——floors。注意空格后紧跟 of certain buildings，说明所要填的是建筑物的组成部分，且原文用的是复数 floors，须保留复数。不要误填 grain 或 storage（它们修饰 buildings，属于题干已用 certain buildings 概括掉的信息）。",
          "analysis": "第 6 段第 4 句：“When spread on surfaces, amurca forms a hard finish and therefore it was often applied to the floors of grain storage buildings where it hardened, keeping out water, mud and pests.”（涂在表面上时，amurca 会形成一层坚硬的涂层，因此常被涂在储粮建筑的地面上，在那里硬化，从而隔绝水分、泥浆和害虫）。笔记条目 “when dried, created a hard surface, so used on 11 ___ of certain buildings” 与该句一一对应：when spread on surfaces, forms a hard finish 概括为 “when dried, created a hard surface”，was often applied to 改写为 used on，grain storage buildings 概括为 certain buildings，剩下的 the floors 就是空格答案。原文还补充了涂抹的目的（keeping out water, mud and pests，即防潮、防泥、防虫），这属于额外信息，不影响答案。词性上，floors 是复数可数名词，作介词 on 的宾语，并由 of certain buildings 限定，填单数 floor 会与原文复数形式不符。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "used when making 12 ________",
          "translation": "在制作 ________ 时会用到它。",
          "answer": "leather",
          "wordClass": "名词（不可数，材料名词；作 making 的宾语，填不可数形式 leather）",
          "locating": {
            "paragraph": "6",
            "quote": "When boiled down, amurca was applied to leather to soften it so that it was easier to shape into articles of clothing and shoes."
          },
          "synonyms": [
            "“used when making” 对应原文的 “amurca was applied to leather to soften it so that it was easier to shape into articles of clothing and shoes”，即把 amurca 用于皮革加工，以便制成衣物和鞋子",
            "“when boiled down” 是原文给出的加工条件，题干省略，只保留用途这一核心信息",
            "“articles of clothing and shoes” 是原文指出皮革最终被制成的东西，与题干 making 一词相呼应"
          ],
          "locatingTip": "定位：笔记其余三条讲 amurca 的用途（涂地面、喂牲口、当农药），第 12 题夹在“涂地面”和“喂牲口”之间，回到第 6 段中部找与制作、加工有关的句子，落在 “When boiled down, amurca was applied to leather to soften it …”。确定答案技巧：原文说的是 amurca 经熬煮后涂在 leather 上使其变软，从而更容易做成衣物和鞋子；题干用 “used when making 12 ___” 概括这一用途，空格要填被处理的材料名，即 leather。答题时注意两点：一是按要求只填一个词 leather，不要写 clothing、shoes（那是皮革制成的成品，不是被加工的对象）；二是题干措辞（making）比原文更宽泛，原文强调的其实是“软化皮革以便成型”，只要抓住被加工的对象是皮革即可确定答案。",
          "analysis": "第 6 段第 5 句：“When boiled down, amurca was applied to leather to soften it so that it was easier to shape into articles of clothing and shoes.”（熬煮后，amurca 被涂在皮革上使其柔软，这样皮革就更容易被做成衣物和鞋子）。笔记第三条只写了 “used when making 12 ___” 五个词，信息高度压缩：原文的核心动作是 applied to leather（涂在皮革上），目的是 soften it（使其变软）与 shape into articles of clothing and shoes（易于加工成衣物鞋子），题干用 making 概括后一目的，因此空格填被加工的材料 leather。原文中 leather 是不可数物质名词，前面不加冠词，作答时保持原形即可。需要留意的是，题干把原文“为软化皮革而使用”改写成了“在制作某种东西时使用”，措辞上略宽于原文，但指向的仍然是皮革这一对象，答案仍以答案表为准，不作改动。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "used on farms as a 13 ________ to stop insects or animals from damaging crops",
          "translation": "在农场用作 ________，以防止昆虫或动物损害作物。",
          "answer": "pesticide",
          "wordClass": "名词（单数可数名词；作介词 as 的宾语，且空格前有不定冠词 a，故填单数形式 pesticide）",
          "locating": {
            "paragraph": "6",
            "quote": "According to ancient texts, amurca was also utilised in moderate amounts by farmers as a fertiliser or as a pesticide, helping them to protect their crops from insects and even small rodents."
          },
          "synonyms": [
            "“used on farms” 同义替换为原文的 “utilised … by farmers”，farmers 对应 on farms",
            "“to stop insects or animals from damaging crops” 同义替换为原文的 “helping them to protect their crops from insects and even small rodents”，stop … from damaging 对应 protect … from",
            "“animals” 同义替换为原文的 “small rodents”（小型啮齿类动物），是 crop 的侵害者之一"
          ],
          "locatingTip": "定位：题干的关键词是 farms、insects、crops，第 6 段最后一句集中出现 farmers、crops、insects、rodents，是全文唯一讲农用用途的地方。确定答案技巧：题干问 amurca 在农场被当作什么使用，且空格前有不定冠词 a，说明答案是可数名词单数。原文给出的两个选项是 “as a fertiliser or as a pesticide”，题干后半句“防止昆虫或动物损害作物”正是 pesticide（杀虫剂/农药）的功能，fertiliser（肥料）只提供养分、不防虫，因此答案锁定 pesticide。答题时注意区分这两个并列的用途，判断依据就是题干给出的功能描述，而不是凭常识随意选择。",
          "analysis": "第 6 段末句：“According to ancient texts, amurca was also utilised in moderate amounts by farmers as a fertiliser or as a pesticide, helping them to protect their crops from insects and even small rodents.”（据古代文献记载，农民也会适量地把 amurca 用作肥料或农药，帮助他们保护作物免受昆虫甚至小型啮齿动物的侵害）。原文并列给出两种农用方式：fertiliser（肥料）与 pesticide（农药）。题干用 “used on farms as a 13 ___ to stop insects or animals from damaging crops” 描述用途，其中 stop … from damaging crops 与原文 protect their crops from 同义，而“防虫防鼠”这一功能只与 pesticide 对应——肥料的作用是提供养分，不具备杀虫防害的功能，因此答案为 pesticide。词性上，空格前有不定冠词 a，需填可数名词单数，原文用的正是 as a pesticide，直接照抄即可。本题的判断逻辑是“功能对应”：当原文给出一组并列选项时，要用题干列出的功能描述去筛选，而不是看哪一个词离定位词更近。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
