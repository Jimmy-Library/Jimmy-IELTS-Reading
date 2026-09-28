(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-68", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-68",
  "meta": {
    "examId": "p1-low-68",
    "title": "The Clipper Races 帆船竞速",
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
          "stem": "In the seventeenth and eighteenth centuries, the British East India Company faced a lot of competition.",
          "translation": "在 17 和 18 世纪，英国东印度公司面临着大量竞争。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "During the seventeenth and eighteenth centuries, the British East India Company had the monopoly on trade with China and India. This meant that because no rival could legally import tea or other goods from these countries at this time, the company was rarely in a hurry to transport its merchandise."
          },
          "synonyms": [
            "“faced a lot of competition” 与原文 “had the monopoly on trade with China and India” 意思相反：monopoly 意为垄断、独家经营，与“面对大量竞争”正相对立",
            "“no rival could legally import tea or other goods from these countries” 中 rival（竞争对手）被 no 否定，说明当时根本不存在合法竞争者",
            "“In the seventeenth and eighteenth centuries” 与原文的时间状语逐字相同，确认题干与原文谈的是同一时期"
          ],
          "locatingTip": "定位：题干中的大写专有名词 British East India Company 和年代 seventeenth and eighteenth centuries 都出现在第 1 段第 1 句，扫读时看到大写公司名即可停下精读，无需读完全文。确定答案技巧：判断题里出现 competition 这类与 monopoly（垄断）互为反义的词，要先回原文确认“竞争程度”的表述。原文一连给了三条信息——公司拥有对华、对印贸易的垄断权；没有任何对手可以合法进口茶叶等货物；公司因此很少着急运货。三条都指向“几乎没有竞争”，而题干却说“面临大量竞争”，属于事实对立，因此判 FALSE。",
          "analysis": "第 1 段开头两句是本题的落点：“During the seventeenth and eighteenth centuries, the British East India Company had the monopoly on trade with China and India. This meant that because no rival could legally import tea or other goods from these countries at this time, the company was rarely in a hurry to transport its merchandise.”（在 17 和 18 世纪，英国东印度公司垄断了与中国和印度的贸易。这意味着，由于当时没有任何竞争对手能够合法地从这些国家进口茶叶或其他货物，公司很少急于运送货物）。原文的逻辑链非常清晰：垄断（monopoly）导致没有竞争对手（no rival），没有竞争又导致公司不需要赶时间。题干却把这段时期描述成公司“面对大量竞争（faced a lot of competition）”，与原文的核心事实——独家垄断、无对手——直接冲突，所以答案是 FALSE。做题时要抓住垄断与竞争这对反义概念：只要原文说某方拥有 monopoly（或 exclusive rights、sole control 之类表述），任何“竞争激烈”的说法都基本可以判 FALSE。此外注意原句中的 rarely in a hurry（很少着急）也从侧面印证公司毫无竞争压力，急着赶时间恰恰是后来竞争出现后才有的现象（第 3、4 段才讲到“谁先把新茶运回英国谁最赚钱”）。",
          "traps": [
            "为什么不是 TRUE：原文明确给出 “had the monopoly on trade with China and India”（垄断与中国和印度的贸易），并说明 “no rival could legally import tea or other goods from these countries”，即不存在任何合法竞争者。题干说该公司“面对大量竞争”，与垄断、无对手的事实完全相反，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：NOT GIVEN 适用于原文没有交代相关信息的情形，而本题原文对“有没有竞争”交代得极其明确（垄断加无对手），信息是“有且相反”，因此必须按规则判 FALSE，而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Before 1800, cargo size was the most important consideration for the East India Company.",
          "translation": "在 1800 年之前，载货量是东印度公司最重要的考虑因素。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Instead, its priority was to minimise costs by carrying as much as possible on each ship."
          },
          "synonyms": [
            "“the most important consideration” 同义替换为原文的 “its priority”（首要事项、优先考虑的事）",
            "“cargo size” 同义替换为原文的 “carrying as much as possible on each ship”（每艘船尽可能多装货），说的正是载货量的大小",
            "“Before 1800” 与第 1 段的 “During the seventeenth and eighteenth centuries” 以及第 2 段开头的 “By 1800” 相互印证，题干所指的正是 1800 年以前的那段时期"
          ],
          "locatingTip": "定位：题干的关键词是 cargo size 和 the most important consideration，回原文找“公司最看重什么”的表述。第 1 段第 3 句的 its priority 就是 most important consideration 的对应说法，紧接的后半句 carrying as much as possible 就是 cargo size 的对应说法。确定答案技巧：本题考“某因素是不是最重要的”，判分点落在 priority（优先事项）这个词上。原文说公司“首要任务是靠每艘船尽可能多装货来把成本降到最低”，也就是把装货量放在第一位；题干用 the most important consideration 改写 its priority，用 cargo size 改写 carrying as much as possible，改写方向一致、程度相当，故选 TRUE。切忌因为原文同时提到 minimise costs（降低成本）就误以为“成本”才是最重要的考虑，原文的句式是 minimise costs by carrying as much as possible，即“靠多装货来降成本”，多装货正是实现首要目标的手段，两件事指向同一个答案。",
          "analysis": "第 1 段完整交代了东印度公司的经营思路：“During the seventeenth and eighteenth centuries, the British East India Company had the monopoly on trade with China and India. This meant that because no rival could legally import tea or other goods from these countries at this time, the company was rarely in a hurry to transport its merchandise. Instead, its priority was to minimise costs by carrying as much as possible on each ship. This meant that its ships … were enormous, strong and very slow.”（在 17、18 世纪，该公司垄断对华、对印贸易，因此没有对手能合法进口这些国家的茶叶和其他货物，公司很少急于运货；相反，它的首要任务是通过每艘船尽可能多装货来降低成本，这也使它的船……巨大、坚固却非常缓慢）。题干把 its priority（首要任务）改写成 the most important consideration（最重要的考虑因素），把 carrying as much as possible on each ship 改写成 cargo size（载货量），两处改写一一对应，语义一致，因此答案是 TRUE。旁证还有第 2 段首句 “By 1800, the average East Indiaman could carry 1,200 tons of merchandise.”（到 1800 年，一艘东印度船平均可载 1200 吨货物），平均载重达 1200 吨，恰恰说明公司长期把载货量放在首位，题干所限定的“1800 年之前”这一时间范围也正好覆盖第 1 段描述的时期。",
          "traps": [
            "为什么不是 FALSE：原文的 its priority（首要任务）与题干的 the most important consideration 同义，carrying as much as possible 与 cargo size（载货量）也指向同一件事，两句之间没有任何冲突或程度上的夸大，因此不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不但说了公司重视什么，还用 its priority 这一明确的“优先级”措辞把它确立为第一位的考虑，信息完整明确，不属于未提及，所以也不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "At best, voyages of the East Indiamen to China and back took nearly two years to complete.",
          "translation": "在最理想的情况下，东印度船往返中国的航程也要花将近两年才能完成。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "so even with favourable sailing conditions, the round trip lasted almost two years, and if anything went wrong it could take a lot longer."
          },
          "synonyms": [
            "“At best” 同义替换为原文的 “even with favourable sailing conditions”（即便在有利的航行条件下）",
            "“took nearly two years” 同义替换为原文的 “lasted almost two years”，nearly 与 almost 同义",
            "“voyages of the East Indiamen to China and back” 同义替换为原文的 “the round trip”（往返航程）"
          ],
          "locatingTip": "定位：题干的关键信息是航程时长 two years 与航次性质 to China and back，回原文找时间长度表述，第 2 段末尾的 the round trip lasted almost two years 一步命中；本段通篇讲 East Indiamen 的 China tea 贸易航线，主体也无需另找。确定答案技巧：题干中的 At best 是“最好情况”的意思，判分关键是看原文有没有给出“最好情况下的时长”。原文用 even with favourable sailing conditions（即使在有利的航行条件下）引出 almost two years，正是“在最好条件下也要将近两年”，且后半句还说 if anything went wrong it could take a lot longer（一旦出错会更久）。原文的 almost 与题干的 nearly 同义，说明两年是下限而非上限，与题干的 At best 完全吻合，故选 TRUE。做题时注意不要把 At best 误读成“最多”而以为原文的 could take a lot longer 与之矛盾：转折后的内容说的是更坏的情况，与“最好情况也要两年”不冲突。",
          "analysis": "第 2 段先说明航线与周期：“The trading pattern for China tea usually meant the East Indiamen set sail from Britain in January, sailed round the Cape of Good Hope …, and arrived in China in September. There they would load up that year's tea harvest, set off again and, depending on the wind and weather, aim to arrive back by the following September, so even with favourable sailing conditions, the round trip lasted almost two years, and if anything went wrong it could take a lot longer.”（对华茶叶贸易的固定模式通常是：东印度船 1 月从英国启航，绕过好望角，9 月抵达中国；在那里装上当季新茶后再次出发，视风力和天气而定，力争第二年 9 月返回，因此即便航行条件有利，往返一趟也要将近两年，一旦出问题则可能耗时更久）。题干把 the round trip 说成 voyages … to China and back，把 almost two years 说成 nearly two years，把 even with favourable sailing conditions 概括为 At best（在最理想的情况下），三处改写都同向同义。原文还特别用 even 强调“连最有利的条件都如此”，说明“将近两年”是最好情况下的耗时，也正是题干 At best 所限定的含义，因此答案是 TRUE。注意题干中的 East Indiamen 一词沿用了原文的称呼（第 1 段已交代 its ships known as East Indiamen），定位时可以直接锁定第 2 段。",
          "traps": [
            "为什么不是 FALSE：原文 “even with favourable sailing conditions, the round trip lasted almost two years” 明确给出“最有利条件下也要将近两年”，与题干 “At best … took nearly two years” 完全一致；if anything went wrong it could take a lot longer 讲的是更糟的情况，并不否定“最少也要两年”，两者不矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对往返航程的时长给了具体数值（almost two years），还限定了“有利条件下”这一前提，信息既明确又充分，不属于未提及，因此不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Before 1834, voyages to and from China were considered to be highly dangerous.",
          "translation": "在 1834 年之前，往返中国的航程被认为极其危险。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "However, by 1834 the company had lost its trading monopolies, and tea had become a freely traded item."
          },
          "synonyms": [
            "“Before 1834” 在原文中以时间界标 “by 1834” 的形式出现，第 3 段正是以此划分垄断期与自由交易期，题干的时期对应第 1、2 段所描述的年代",
            "“highly dangerous” 在原文中没有任何对应表达：原文谈到的是成本、航速、风力与天气、航程长短，从未对航行的安全程度作出评价",
            "原文 “depending on the wind and weather” 只说明航行受天气影响，属于中性描述，不能等同于“被认为极其危险”"
          ],
          "locatingTip": "定位：题干的定位词是时间 Before 1834 与地点 China，扫读全文找 1834，只出现在第 3 段首句（by 1834），该段正是“垄断结束、茶叶自由买卖”的时间分界，题干所指的“1834 年之前”就是第 1、2 段描述的垄断时期。确定答案技巧：判断题考“某个评价是否存在”。回原文核对第 1、2 段可知，关于东印度船的航行，原文只提到成本优先、装货量、航线日程、风力天气与耗时，甚至说 if anything went wrong it could take a lot longer，这仅仅说明航行可能延误，既没有出现 dangerous、risk、peril 之类的词，也没有任何“人们认为航程危险”的表述。题干的核心落点 highly dangerous 属于原文完全缺失的信息，因此判 NOT GIVEN，而不是因为“天有不测风云”就推断出危险。",
          "analysis": "本题的答案依据是“信息缺失”而非“信息矛盾”。第 3 段首句写道：“However, by 1834 the company had lost its trading monopolies, and tea had become a freely traded item.”（然而到 1834 年，公司已失去其贸易垄断权，茶叶也成为可自由交易的货物），句中 by 1834 就是题干 Before 1834 所指时间范围的下限。题干的落点是 voyages to and from China were considered to be highly dangerous（往返中国的航程被认为极其危险），而这层“危险”评价在原文里根本不存在：第 2 段描述航程时强调的是贸易模式与耗时（1 月启航、9 月抵华、次年 9 月返英，往返将近两年）；第 4 段讲的是速度与茶叶新鲜度的关系；第 7 段提到 racing back to Britain whatever the difficulties（无论多难都要赶回英国），第 8 段描写航线经过南中国海、印度洋、好望角、大西洋、英吉利海峡和泰晤士河河口，但所有这些都只是航程的技术性描述，没有一处评价“危险”。按判断题规则，凡是原文根本没有提及的信息点（这里是“危险性”这一评价），一律判 NOT GIVEN。常见错因是把原文的 any difficulties 或 if anything went wrong 脑补成“极其危险”，但原文只说“可能更费时”，与“危险”是两回事。",
          "traps": [
            "为什么不是 TRUE：TRUE 要求原文有对应的正面信息，而原文通篇没有出现任何评价航行危险程度的词句，也没有“被认为危险”的说法，只有耗时、天气、困难等中性或侧重时间的描述，因此不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文给出相反信息，比如“航行被认为很安全”“从不认为航程有风险”之类。原文既没说危险也没说安全，只是对此毫无交代；既然没有任何相反信息，就只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "After 1834, the ships which had served the East India Company stopped being used for commercial purposes.",
          "translation": "1834 年之后，曾为东印度公司服务的那些船不再被用于商业目的。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Having no more use for its great ships, the company sold them off, and many were bought by merchants or their captains, who continued to plough the seas between Britain and China."
          },
          "synonyms": [
            "“stopped being used for commercial purposes” 与原文 “who continued to plough the seas between Britain and China” 相互冲突：continued 表示继续从事英中之间的贸易航行，仍是商业用途",
            "“the ships which had served the East India Company” 同义替换为原文的 “its great ships”，即公司那些大船（East Indiamen）",
            "“After 1834” 对应原文 “by 1834 the company had lost its trading monopolies”，题干所说的正是垄断结束、公司卖船之后的情形"
          ],
          "locatingTip": "定位：题干的关键信息是 1834 年之后、东印度公司原来的船只以及它们的用途，回原文找 After 1834 之后公司如何处置旧船，第 3 段第 2 句 the company sold them off 一句直接命中，代词 them 回指上文的 its great ships。确定答案技巧：判断题考“这些船是否继续商用”，判分点是原文对买主用途的描述。原文说船被卖给商人或船长后，他们 “continued to plough the seas between Britain and China”，continued（继续）与题干的 stopped（停止）正好相反；plough the seas between Britain and China 就是继续跑英中贸易航线，属于典型的商业运输，何况紧接着下一句还说船员们发现“谁先把新茶运回英国谁最赚钱”，进一步证明这些船仍在商业运营中。因此题干与原文直接矛盾，判 FALSE。",
          "analysis": "第 3 段是本题的依据段落：“However, by 1834 the company had lost its trading monopolies, and tea had become a freely traded item. Having no more use for its great ships, the company sold them off, and many were bought by merchants or their captains, who continued to plough the seas between Britain and China. But now that tea could be traded freely, a few smart sailors began to realise that whoever brought each new harvest of tea to Britain first stood to make the most money.”（到 1834 年，公司失去贸易垄断权，茶叶成为可自由交易的货物。由于不再需要那些大船，公司把它们卖掉，其中许多被商人或其船长买下，这些人继续在英中之间的海路上往来。既然茶叶可以自由买卖，一些聪明的船员开始意识到，谁先把每一季新茶运到英国，谁就能赚到最多的钱）。题干说这些船“不再用于商业目的（stopped being used for commercial purposes）”，而原文用 continued to plough the seas 说明它们继续跑英中航线，后面又交代这条航线上运茶竞争能带来丰厚利润，可见这些船恰恰被转入了更活跃的商业运营。stopped 与 continued 构成正面对立，因此答案是 FALSE。做题提示：本题的干扰在于题干把“公司不再使用”偷换成“不再用于商业目的”——公司确实不再用这些船（sold them off），但它们只是换了主人，用途仍是商业运输，这一点必须靠 who continued to plough the seas 这一定语从句来纠正。",
          "traps": [
            "为什么不是 TRUE：题干容易被误读为“公司不再使用这些船”，而原文确实说公司 sold them off（把它们卖了）。但题干的关键限定是 stopped being used for commercial purposes（不再用于商业目的），原文明确说买主 continued to plough the seas between Britain and China（继续在英中之间航行经商），用途并未中断，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅交代了卖船，还具体说明了买主身份（merchants or their captains）和后续用途（继续跑英中航线，且运茶可获利），信息完整且与题干相反，属于“有相反信息”，所以是 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "In the nineteenth century, British drinkers preferred tea made from mature leaves to that made from younger leaves.",
          "translation": "在 19 世纪，英国饮茶者更喜欢用成熟茶叶而非嫩叶制成的茶。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "consumers in Britain in the nineteenth century believed that the fresher and earlier-picked the tea, the better the resulting drink."
          },
          "synonyms": [
            "“British drinkers” 同义替换为原文的 “consumers in Britain”（英国的消费者）",
            "“preferred tea made from mature leaves to that made from younger leaves” 与原文 “the fresher and earlier-picked the tea, the better the resulting drink” 方向相反：原文说越新鲜、采摘越早的茶泡出来越好，即偏爱嫩叶、“早采叶”，贬低成熟叶",
            "“In the nineteenth century” 与原文 “in the nineteenth century” 完全一致，锚定同一时期"
          ],
          "locatingTip": "定位：题干的时间状语 the nineteenth century 与两类茶叶的比较（mature leaves 与 younger leaves）指向第 4 段讲消费者偏好的那句，第 4 段是全篇唯一提到 19 世纪英国消费者饮茶偏好之处，出现 consumers in Britain in the nineteenth century 即可停读。确定答案技巧：判断题考“偏好哪一类茶叶”，判分点是原文的偏好方向。原文用 the more … the better 的比较句式说“茶叶越新鲜、采摘越早，泡出的茶就越好”，在采茶语境中“采摘越早”意味着芽叶越嫩（earlier-picked 即早采的嫩芽），因此消费者偏爱的是嫩叶而非成熟叶。题干却说他们偏爱的对象是成熟叶，把原文的比较方向整个掉转，属于事实矛盾，故判 FALSE。",
          "analysis": "第 4 段的定位句是：“This was partly because if you were home first, you could sell your shipment of tea before your competitors even arrived, and partly because consumers in Britain in the nineteenth century believed that the fresher and earlier-picked the tea, the better the resulting drink.”（部分原因是，如果你先到家，就能在竞争者抵达之前把茶叶卖掉；另一部分原因是，19 世纪英国的消费者相信，茶叶越新鲜、采摘越早，泡出的茶就越好）。原文的偏好方向十分明确：fresher（更新鲜）与 earlier-picked（采摘更早）的茶叶品质更佳，这两个形容词都与“嫩芽早采”相对应，而与“成熟叶（mature leaves）”相反。题干却把消费者喜欢的东西写成 made from mature leaves，并声称成熟叶胜过嫩叶（preferred … to …），与原文的比较方向正相反，因此答案是 FALSE。同一段还提供了旁证：正因为消费者偏爱新鲜早采的茶，才催生了 the fresher and earlier-picked the tea 的说法，进而使 Tea traders now needed faster, sleeker ships to bring their precious cargo back（茶商需要更快、更流线的船把货物运回），整个逻辑都建立在“越早越新鲜越好”之上。做题时注意 mature 与 fresh / early-picked 在茶叶语境中构成对立面，题干把两者位置互换是典型的反向改写。",
          "traps": [
            "为什么不是 TRUE：原文明确说 “the fresher and earlier-picked the tea, the better the resulting drink”，即越早采、越新鲜的茶越受青睐，这与题干“更喜欢成熟叶制的茶（preferred tea made from mature leaves）”方向完全相反，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对英国消费者的茶叶偏好作了直接陈述（越新鲜、采摘越早越好），信息明确且与题干冲突；这是“有相反信息”，不是“没有信息”，因此不能选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The ships were remarkable for the number of 7 ________ they had.",
          "translation": "这些船以它们所拥有的 ________ 数量之多而著称。",
          "answer": "sails",
          "wordClass": "名词（复数，指船帆；原文作 masses of sails，空格前是 the number of，其后须接可数名词复数，故填 sails，不加冠词、不改单数）",
          "locating": {
            "paragraph": "5",
            "quote": "These vessels were fast and slender, with a narrow hull that was deeper at the back than at the front, and masses of sails on tall masts."
          },
          "synonyms": [
            "“remarkable for the number of …” 同义替换为原文的 “masses of sails”（大量船帆），masses 强调数量众多，正对应题干的 the number of",
            "“The ships” 同义替换为原文的 “These vessels”，回指上文刚提到的 clipper ships（快船）",
            "“they had” 对应原文的船上装备描述 “with a narrow hull … and masses of sails on tall masts”，说明这些帆是船本身配备的"
          ],
          "locatingTip": "定位：本栏小标题是 The ships，所在段落讲 clipper ships 的构造，回原文找对快船形制的描写，第 5 段第 2 句集中列举了船体与船帆特征，一步定位。确定答案技巧：题干说“这些船以某种东西的数量之多著称”，原文对应之处只有一处讲数量众多，即 masses of sails（大量的帆）。另外两个形容词线索也能排除其它部件：fast and slender（快而细长）与 narrow hull（狭窄船体）都只描述形状，并未强调数量，只有 masses of 明确表示“数量极多”，因此空格应填被大量装备的部件 sails。词数上只写 sails 一个词，且与 they had 的复数逻辑一致（船帆不止一张），保持复数形式。",
          "analysis": "第 5 段开头讲快船的诞生与外形：“In fact it was the Americans who pioneered the first clipper ships. These vessels were fast and slender, with a narrow hull that was deeper at the back than at the front, and masses of sails on tall masts.”（事实上是美国人首创了快船。这类船又快又细长，船体狭窄、后部比前部深，高高的桅杆上挂着大量船帆）。笔记中 The ships 一栏共三句：第一句是 “Clipper ships were first used for trading by American merchants.”，后两句即本题：前一笔记已由 American merchants 对应原文的 the Americans，后一笔记则以 remarkable for the number of … 对应 masses of sails。masses of 是“大量、成堆”的意思，与题干的 the number of（数量）直接呼应，被强调数量之多的部件就是 sails（船帆）。从词性看，空格后的 they had 是复数谓语，the number of 后面也只能接可数名词复数，故答案是 sails，不能写 sail、sailes 或加冠词。注意不要误填 masts（桅杆）：原文只说高耸的桅杆上挂满帆，数量多的是帆而不是桅杆。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "The performance of British tea clippers was particularly affected when there were 8 ________ at sea.",
          "translation": "当海上出现 ________ 时，英国茶叶快船的性能会受到特别影响。",
          "answer": "storms",
          "wordClass": "名词（复数，指海上风暴；位于 there were 之后作主语，须用可数名词复数 storms，故不能写 storm）",
          "locating": {
            "paragraph": "5",
            "quote": "they had a narrower beam than their American equivalents, making them less powerful during storms but faster in calmer weather."
          },
          "synonyms": [
            "“was particularly affected” 同义替换为原文的 “making them less powerful during storms”（使它们在风暴中动力较弱），即性能受影响",
            "“when there were … at sea” 同义替换为原文的 “during storms”，风暴正是发生在海上的情形",
            "“The performance of British tea clippers” 对应原文的 “More tea clippers were designed and built in Britain … they had a narrower beam”，主语同为英国建造的快船"
          ],
          "locatingTip": "定位：本笔记句的主语是 British tea clippers，回原文找英国快船的性能，第 5 段末句正是对比英美快船的句子（they had a narrower beam than their American equivalents），其中 Britain 与 tea clippers 都已在前半句交代。确定答案技巧：题干说“在某些情况下性能受影响”，原文用 during storms 给出具体情形，并用 less powerful（动力较弱）说明影响内容，二者一一对应，因此空格填 storms。语法上 there were 提示空格必须是复数名词，故写 storms 而不写 storm；同时注意不要把句中并列的 calmer weather（更平静的天气）当作答案，因为题干说的是“性能受影响”的情形，对应的应是 less powerful 的那一半，而 faster in calmer weather 是好的一面。",
          "analysis": "第 5 段末句是本题的落点：“More tea clippers were designed and built in Britain throughout the 1850s and 1860s; they had a narrower beam than their American equivalents, making them less powerful during storms but faster in calmer weather.”（19 世纪 50、60 年代，英国设计与建造了更多茶叶快船；它们的船宽比同类的美国船更窄，这使它们在风暴中动力更弱，但在风平浪静时速度更快）。笔记句 “The performance of British tea clippers was particularly affected when there were [8] at sea.” 把原文的 less powerful during storms 抽象为 was particularly affected，把 during storms 展开为 at sea（发生在海上）。原文的 but 结构把两种情形对照起来：during storms 对应性能变差，in calmer weather 对应速度更快；题干说的是“性能受影响”，显然指向变差的那一面，答案即 storms。词性上，空格处于 there were 之后，是复数名词作主语的位置，因此必须写复数 storms，写 storm 会与 were 在数上不一致而失分。另外注意本题与第 7 题同在第 5 段，但分属不同的笔记要点（船帆数量与船体宽度带来的性能差异），做题时逐句核对即可，不要相互串答案。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "It was in a ship called 9 ________ that the British first competed successfully against the Americans.",
          "translation": "英国船队正是在一艘名为 ________ 的船上首次成功与美国人抗衡。",
          "answer": "challenger",
          "wordClass": "专有名词（船名，原文首字母大写写作 Challenger；答案表作 challenger，填写时照抄答案表的写法即可）",
          "locating": {
            "paragraph": "6",
            "quote": "Then in 1851 a British shipowner, Richard Green, built the aptly named clipper Challenger with the stated intention of beating the American ships."
          },
          "synonyms": [
            "“It was in a ship called …” 对应原文的 “built … the aptly named clipper Challenger”，aptly named 意为“名字起得贴切的”，即这艘船的名字叫 Challenger",
            "“the British first competed successfully against the Americans” 同义替换为原文的 “with the stated intention of beating the American ships” 以及后文 “the British ship beat its rival to London by two days”",
            "“Richard Green” 是原文提的船东名，与笔记中另一条 “Richard Green's ship arrived two days ahead of its competitor.” 指向同一艘船"
          ],
          "locatingTip": "定位：笔记上一句已给出 Richard Green's ship，而 Richard Green 是专有名词，全文只出现在第 6 段，扫读抓住人名即可锁定本段；本题与笔记下一句共享同一段落。确定答案技巧：题干说“英国正是在一艘名为某名的船上首次成功与美国船抗衡”，回原文找“英国造船对抗美国”的第一例：第 6 段先说 to begin with the Americans had the edge（起初美国船占优），随后说 1851 年 Richard Green 造了 the aptly named clipper Challenger，明确表示要击败美国船，并在 1852 年的比赛中赢了美国船 Challenge 两天。可见完成这一“首次成功抗衡”的船正是 Challenger。注意区分两艘船名的拼写：英国船是 Challenger（有 -er 结尾），美国船是 Challenge，题干问的是英国那艘（英国首次成功抗衡的那艘），故答案是 Challenger，按答案表原样写小写 challenger。",
          "analysis": "第 6 段是本题的依据段落：“There was a great spirit of competition between the British and American ships plying the tea trade, but to begin with the Americans had the edge. Then in 1851 a British shipowner, Richard Green, built the aptly named clipper Challenger with the stated intention of beating the American ships. Loaded with tea, Challenger left China for London in 1852 at the same time as the American clipper Challenge … In the event, the British ship beat its rival to London by two days, amid much jubilation.”（英、美两国从事茶叶贸易的船只之间竞争气氛浓厚，但起初美国船占优势。1851 年，英国船东 Richard Green 造了一艘名字起得十分贴切的快船 Challenger，公开表明要击败美国船。它满载茶叶，1852 年与美国快船 Challenge 同时从中国驶往伦敦……结果英国船比对手早两天抵达伦敦，一片欢腾）。笔记句 “It was in a ship called [9] that the British first competed successfully against the Americans.” 中的 first competed successfully 对应上文 the Americans had the edge（起初美国占优）之后英国船首次取胜这一情节，而承载这一胜利的船就是 Challenger。答案表给的写作形式是小写 challenger，按题目要求原样照抄即可（填空题不因大小写而改变答案本身）。辨析要点：Challenger（英国船，Richard Green 建造）与 Challenge（美国船，更大更旧、以速度快著称）只差两个字母，定位时务必看清句子主语是 the British ship。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Competition increased when additional Chinese trading 10 ________ were established.",
          "translation": "当更多中国贸易 ________ 设立之后，竞争加剧了。",
          "answer": "ports",
          "wordClass": "名词（复数，指港口；空格后谓语为 were established，且原文用 new ports，故填复数 ports，不能写 port）",
          "locating": {
            "paragraph": "7",
            "quote": "It was really ignited when new ports were opened up for trade in China. These included Foochow, which was much closer to the tea-producing areas than Canton, the port used previously."
          },
          "synonyms": [
            "“Competition increased” 同义替换为原文的 “It was really ignited”（竞争真正被点燃），ignited 与 increased 同向",
            "“were established” 同义替换为原文的 “were opened up for trade”（被开辟为通商口岸）",
            "“additional Chinese trading …” 同义替换为原文的 “new ports … for trade in China”，即在中国新开设的贸易港口"
          ],
          "locatingTip": "定位：笔记本栏是 The races，题干线索是 additional Chinese trading，回原文找“在中国新增贸易口岸”的句子，第 7 段第 3 句 new ports were opened up for trade in China 一步命中，紧随其后还举了 Foochow（福州）为例。确定答案技巧：题干把 competition increased 与新的中国贸易设施联系起来，原文对应的因果句是 It was really ignited when new ports were opened up for trade in China，被“开辟”的对象即 ports（港口），Chinese trading 与 for trade in China 同义，additional 与 new 同义。语法上空格后是 were established（复数谓语），说明答案必须是复数，故写 ports；同时注意不要把举例中的 Foochow 或 Canton 当作答案——题目问的是“增设的这类设施”，不是具体某个港口的名字。",
          "analysis": "第 7 段交代竞争再度升级的缘由：“After 1855, American participation in the British tea trade gradually stopped. But even without the Anglo-American rivalry, the competitive spirit continued. It was really ignited when new ports were opened up for trade in China. These included Foochow, which was much closer to the tea-producing areas than Canton, the port used previously.”（1855 年之后，美国逐渐退出英国茶叶贸易，但即便没有英美之间的竞争，竞争精神依然延续，并在中国开辟新的通商口岸后真正被点燃。这些新口岸包括福州，它比此前使用的广州港离产茶区近得多）。笔记句 “Competition increased when additional Chinese trading [10] were established.” 把 It was really ignited 概括为 Competition increased，把 new ports were opened up for trade in China 改写为 additional Chinese trading … were established，被建立（opened up）的对象是 ports（港口，即通商口岸），所以答案是 ports。词性上，ports 是可数名词复数，与题干中的 were established 一致；原文用复数 new ports，也印证了答案要写复数。常见错误是把 Foochow 填进去：原文里 Foochow 只是对“新港口”的举例（These included Foochow），而题干已用 Chinese trading 限定了类别，空格要填的是这一类别本身，即 ports。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Merchants were occasionally in such a hurry that they failed to complete the 11 ________ before leaving China.",
          "translation": "商人们有时匆忙得连离开中国前都没能办完 ________。",
          "answer": "paperwork",
          "wordClass": "名词（不可数，指官方文件、手续；原文 official paperwork，空格前有定冠词 the，填不可数形式 paperwork，不加复数、不加冠词）",
          "locating": {
            "paragraph": "7",
            "quote": "sometimes not even taking time to fill out the official paperwork"
          },
          "synonyms": [
            "“failed to complete” 同义替换为原文的 “not even taking time to fill out”（连抽时间填写都没有），completion 与 fill out 在此同指把表格文件办妥",
            "“Merchants were occasionally in such a hurry” 对应原文的 racing back to Britain whatever the difficulties 与 sometimes not even，强调赶时间而不办手续",
            "“the … before leaving China” 对应原文的口岸情形：船在中国装茶后即启航（set off in late May or early June），手续本应在离境前完成"
          ],
          "locatingTip": "定位：题干的关键线索是 not complete（办不完）与 before leaving China，回原文找与中国离港相关的“手续”描写，第 7 段末尾的 fill out the official paperwork 一步命中，其中 paperwork 正是要填写的东西。确定答案技巧：题干用 failed to complete the [11] 表达“没办完某项手续”，原文用 not even taking time to fill out the official paperwork 表达同一件事，fill out（填表办理）与 complete（完成）对应，被办理的对象是 the official paperwork。词性上，空格前已有定冠词 the，paperwork 是不可数名词，答案写单词原形 paperwork 即可；不要写成 papers、paperworks 或加 official（题目要求 ONE WORD ONLY，且空格前的 the 已承担限定作用）。",
          "analysis": "第 7 段末尾讲新口岸带来的紧迫感：“As a result, tea could be loaded on board earlier and fresher, and the clippers could set off in late May or early June – sometimes not even taking time to fill out the official paperwork – racing back to Britain whatever the difficulties.”（结果是，茶叶可以更早、更新鲜地装船，快船能在 5 月底或 6 月初启航——有时甚至来不及办理官方手续——无论多难都要赶回英国）。笔记句 “Merchants were occasionally in such a hurry that they failed to complete the [11] before leaving China.” 正是对这一情景的改写：occasionally 对应 sometimes，in such a hurry 对应 not even taking time，failed to complete 对应 not even taking time to fill out，被耽误的对象就是 the official paperwork（官方手续文件），故答案填 paperwork。离开中国这一时间点来自原文的口岸叙述：船在中国装茶后于 5 月底或 6 月初启航（set off），手续本应在启航前办妥。从词性看，paperwork 是不可数名词，虽然中文常译作“文件、手续”，但英语中不加 s，也不能加 a 或 many，因此答案保持原形 paperwork；同时留意题目要求 ONE WORD ONLY，写 official paperwork 会因超出词数而失分。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "At the end of their journey, the ships needed the help of 12 ________.",
          "translation": "在航程的最后阶段，这些船需要 ________ 的帮助。",
          "answer": "tugs",
          "wordClass": "名词（复数，指拖船；位于介词 of 之后作宾语，原文用复数 tugs，故填 tugs，不能写单数 tug）",
          "locating": {
            "paragraph": "8",
            "quote": "Once there, they would be towed by tugs up the river and into the docks."
          },
          "synonyms": [
            "“needed the help of …” 同义替换为原文的 “would be towed by …”（被……拖曳），借助拖船拖行正是“需要帮助”的具体表现",
            "“At the end of their journey” 对应原文的入港环节：up the river and into the docks（沿河上行进入码头），即航程终点",
            "“the ships” 对应原文的代词 “they”，回指上文的快船"
          ],
          "locatingTip": "定位：题干的关键信息是“航程最后需要某种帮助”，回原文找航程终点、入港的描写，第 8 段末句 Once there, they would be towed by tugs up the river and into the docks（到那里后，它们被拖船拖曳沿河上行进入码头）就是最后的环节，一步定位。确定答案技巧：题干用 needed the help of（需要……的帮助）设问，原文用被动结构 be towed by（被……拖曳）表达同一件事：提供这种帮助的执行者就是 by 后面的 tugs（拖船）。从词性看，空格位于介词 of 之后，需要名词，且船入港通常由多艘拖船协作、原文也用复数 tugs，故答案写 tugs。注意不要误填 river 或 docks——它们是船被拖往的地方，不是提供帮助的一方。",
          "analysis": "第 8 段描写航线的最后一段行程：“They sped down through the South China Sea and into the Indian Ocean, then raced to get round the southernmost tip of Africa at the Cape of Good Hope. Then it was north across the vast Atlantic, past the Azores, through the English Channel and into the estuary of the River Thames. Once there, they would be towed by tugs up the river and into the docks.”（它们先穿过南中国海驶入印度洋，再竞相绕过非洲最南端的好望角；随后北越大西洋，经过亚速尔群岛，穿过英吉利海峡进入泰晤士河河口。一到那里，它们就由拖船拖曳，沿河而上进入码头）。笔记句 “At the end of their journey, the ships needed the help of [12].” 概括的正是最后一句：Once there 与 At the end of their journey 对应，be towed by 与 needed the help of 对应，提供拖曳帮助的主体就是 tugs（拖船），故答案是 tugs。词性上，tugs 是复数可数名词，与原文的复数形式一致（港口作业常由多艘拖船完成），写单数 tug 会与原文不符。辨析提示：句中 up the river 与 into the docks 描述的是被拖往的方向和地点，river、docks 都是被拖曳的目的地，不能作为“提供帮助者”填入空格；只有 by 后面的 tugs 才是动作的执行者。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "The crews were motivated by both 13 ________ and their enthusiasm for the competition.",
          "translation": "船员们的动力既来自 ________，也来自他们对比赛的热情。",
          "answer": "money",
          "wordClass": "名词（不可数，指金钱；与 enthusiasm 并列作介词 by 后的宾语，填不可数形式 money，不加冠词、不变复数）",
          "locating": {
            "paragraph": "9",
            "quote": "But the races were about more than just money: the crews, about 40 men on each clipper, were expert sailors, proud of their ships, and they delighted in competing against each other."
          },
          "synonyms": [
            "“motivated by both … and …” 对应原文的并列结构 “the races were about more than just money … and they delighted in competing against each other”，两个驱动因素一为金钱，一为竞争热情",
            "“their enthusiasm for the competition” 同义替换为原文的 “they delighted in competing against each other” 与 “Without their enthusiasm, the races would never have happened”",
            "“The crews” 在原文中逐字复现：“the crews, about 40 men on each clipper”"
          ],
          "locatingTip": "定位：题干的关键词是 crews 与 enthusiasm，回原文找讲船员动力的段落，第 9 段（末段）既出现 the crews，又出现 their enthusiasm，且用 money 与 enthusiasm 的对比结构说明报酬与热情两项动力，一步锁定。确定答案技巧：题干用 both … and … 并列两个动力来源，其中一个已给出（their enthusiasm for the competition），另一个留空；原文同样用并列与对比结构——But the races were about more than just money（但比赛不只是为了钱）加上 they delighted in competing（他们乐于相互竞争）。more than just money 说明钱是其中一个动因但不唯一，与题干的 both [13] and their enthusiasm 严丝合缝，因此空格填 money。词性上，money 是不可数名词，位于 both 之后与名词短语 their enthusiasm 并列，填单词原形 money 即可。",
          "analysis": "第 9 段讲比赛的奖赏与船员的心态：“The cargo of the winning ship could earn a premium of up to sixpence per pound – and so the captain and crew were rewarded by the owners of the cargo. But the races were about more than just money: the crews, about 40 men on each clipper, were expert sailors, proud of their ships, and they delighted in competing against each other. Without their enthusiasm, the races would never have happened, since getting home as fast as possible required the crew to be totally dedicated and to sacrifice much of their rest for the duration of the race.”（获胜船的货物每磅最多可多卖六便士，因此船长和船员会得到货主的奖励。但比赛不仅仅是为了钱：每艘快船上约 40 名船员都是技艺高超的水手，为自己的船感到自豪，也乐于彼此竞争。若没有他们的热情，这些比赛根本不会发生，因为要尽快回家，船员在整场比赛中必须全力以赴、牺牲大量休息）。笔记中 The rewards 一栏的句子 “The crews were motivated by both [13] and their enthusiasm for the competition.” 正是把这段的两条动力线索并列：一条是金钱（赢得比赛可获货主奖励、premium 带来的收益），一条是竞争本身带来的热情（delighted in competing、their enthusiasm）。原文用 about more than just money（不只是为了钱）明确钱是动因之一，于是空格填 money。词性与搭配上，空格与 their enthusiasm for the competition 并列，同为不可数名词，写原形 money 即可；注意不要填 premium（那是具体奖金，且原文的对比落点是 money 这一上位概念），也不要写 sixpence（那是具体数额）。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
