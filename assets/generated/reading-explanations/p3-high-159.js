(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-159", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-159",
  "meta": {
    "examId": "p3-high-159",
    "title": "Grimm’s Fairy Tales 格林童话",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–32 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 32
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "The Grimm brothers believed they would achieve international fame.",
          "translation": "格林兄弟相信他们会获得国际声誉。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Such lasting fame would have shocked the humble Grimms. During their lifetimes the collection sold modestly in Germany, at first only a few hundred copies a year."
          },
          "synonyms": [
            "“believed they would achieve international fame” 与原文 “Such lasting fame would have shocked the humble Grimms” 直接冲突：原文用虚拟语气 would have shocked 表示“成名这件事当年会让他们大吃一惊”，说明他们从未预料到",
            "“the Grimm brothers” 对应原文的 “the humble Grimms”，其中 humble（谦卑、不起眼）恰好否定了题干所暗示的自信成名预期",
            "“international fame” 对应原文的 “lasting fame”（持久的声誉），再结合 “sold modestly in Germany, at first only a few hundred copies a year”（在德国销量平平，起初每年只有几百册）可见当年根本谈不上预期成名"
          ],
          "locatingTip": "定位：题干的人名 the Grimm brothers 覆盖全文，无法唯一定位，必须改用概念词 fame（声誉）作抓手，第 2 段（B）首句 “Such lasting fame would have shocked the humble Grimms.” 是全篇唯一把 fame 与格林兄弟并列的句子，扫到 lasting fame 即可停下精读。确定答案技巧：题干的核心动词是 believed（他们相信会成名），考的是“人物当年的心理预期”。原文用虚拟语气 “would have shocked”（若知道会这样，他们会被吓到）表明成名的结果完全出乎他们意料；紧接着的两句又给出 “sold modestly”“at first only a few hundred copies a year” 这样的惨淡事实做旁证。预期与事实相反，属于信息冲突，故判 NO。遇到 believe / expect / hope 这类表预期的动词，一定要回原文找“预期是否成立”，不能凭常识（作家都想出名）作答。",
          "analysis": "第 2 段（B）是全文唯一交代格林兄弟当年处境与心态的段落，开头三句是本题的落点：“Such lasting fame would have shocked the humble Grimms. During their lifetimes the collection sold modestly in Germany, at first only a few hundred copies a year. The early editions were not even aimed at children.”（这样持久的声誉本会让谦卑的格林兄弟大为震惊。在他们有生之年，这本集子在德国销量平平，起初每年只有几百册。早期版本甚至都不是为孩子准备的）。逻辑链条分三层：①would have shocked 是虚拟语气，等于说“他们当年压根没料到会成名”；②humble 一词给两人的自我定位是低调、谦卑的；③“sold modestly / only a few hundred copies a year” 从市场表现上说明当时毫无走红的迹象。题干把“他们相信自己会获得国际声誉”当作事实陈述，与原文三层证据全部相悖，所以答案是 NO。注意本题与第 4 题同在第 2 段取材，但落点不同：本题看的是 fame（声誉）与心态，第 4 题看的是 editions（版本）与销量比较。",
          "traps": [
            "为什么不是 YES：原文用虚拟语气 “Such lasting fame would have shocked the humble Grimms.” 明确表示成名是超出他们预料的结果，并且用 “sold modestly”“only a few hundred copies a year” 说明当时销量很小，没有任何一处支持“他们相信自己会成名”，方向完全相反。",
            "为什么不是 NOT GIVEN：NOT GIVEN 要求原文对相关信息毫无交代。本题原文既交代了两人谦卑的心态（the humble Grimms），也交代了当年惨淡的销量（sold modestly），信息是存在且与题干相反的，按规则判 NO 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "The Grimm brothers were forced to work in secret.",
          "translation": "格林兄弟被迫秘密地工作。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "They began their work at a time when Germany had been overrun by the French under Napoleon, who was intent on suppressing local culture."
          },
          "synonyms": [
            "“were forced”（被迫）在原文中没有任何对应：原文只描述时代背景，没有出现被迫、受到压力之类的表述",
            "“work in secret”（秘密工作）在原文中同样无对应词：原文只有 “Germany had been overrun by the French under Napoleon, who was intent on suppressing local culture”，讲的是法国压制当地文化，不等于格林兄弟本人被勒令偷偷工作",
            "原文中的 “undertook the fairy-tale collection with the goal of serving the endangered oral tradition of Germany” 只说明他们自定的工作目标，与“被迫”“保密”两层意思都不相干"
          ],
          "locatingTip": "定位：题干的关键词是 forced 与 in secret，都属于“工作方式、外部压力”类信息。全篇谈到格林兄弟所处外部环境的只有第 2 段（B）后半句 “They began their work at a time when Germany had been overrun by the French under Napoleon, who was intent on suppressing local culture.”，扫到 Napoleon 即可锁定本段。确定答案技巧：这句话只讲了两件事——德国被拿破仑的法国军队占领，占领者意图压制当地文化。它没有说格林兄弟是否受到直接压力，更没有说他们是否被迫秘密工作，属于信息缺失。这类“把时代背景误读成人物遭遇”的题是 NOT GIVEN 的典型设坑点：背景恶劣不等于当事人被强制、被保密，凡是题干出现 forced / had to / were not allowed 这类强加于人的表述，都必须回原文确认有没有明确的强制性描述，没有就判 NOT GIVEN。",
          "analysis": "第 2 段（B）后三句交代格林兄弟开始收集民间故事时的处境：“They began their work at a time when Germany had been overrun by the French under Napoleon, who was intent on suppressing local culture. As young, workaholic scholars, single and sharing a cramped flat, the Brothers Grimm undertook the fairy-tale collection with the goal of serving the endangered oral tradition of Germany.”（他们开始这项工作时，德国已被拿破仑率领的法国军队占领，拿破仑意图压制当地文化。作为年轻的工作狂学者，单身、合住一间狭小公寓，格林兄弟着手收集童话，目的是抢救德国濒危的口头传统）。这里给到的信息只有三层：法国占领、文化受压制、兄弟两人自觉地把抢救口头传统当作目标。题干的两个关键词一个都找不到对应：“forced”（被迫）没有任何强制来源（占领者对文化的压制不等于强迫格林兄弟本人做某事），“in secret”（秘密地）也从未出现，文中只说他们住在 cramped flat（狭小的公寓）里，与保密无关。因此答案是 NOT GIVEN——原文既没说他们被迫秘密工作，也没说他们是公开工作，属于完全没有触及的信息。",
          "traps": [
            "为什么不是 YES：原文只说德国被法国占领、当地文化受到压制，这是国家层面的时代背景；文中从未出现 forced、had to、not allowed 之类的强制表述，也没有 secret、in hiding、surreptitiously 之类的保密说法，无法支持“被迫秘密工作”。",
            "为什么不是 NO：选 NO 需要原文有相反的明确信息，例如说他们“公开地、自由地开展工作”。原文对此没有任何交代，仅仅是没说，因此属于信息缺失，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Some parents today still think Grimm fairy tales are not suitable for children.",
          "translation": "如今仍有一些家长认为格林童话不适合儿童阅读。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Even today some protective parents shy from the Grimms' tales because of their reputation for violence."
          },
          "synonyms": [
            "“Some parents today” 同义替换为原文的 “Even today some protective parents”，其中 even 强调这一态度延续至今",
            "“think … are not suitable for children” 同义替换为原文的 “shy from the Grimms' tales”（回避、不愿给孩子读这些故事），用行为表达“认为不合适”的评价",
            "“still”（仍然）对应原文的 “Even today”，说明这种顾虑从 19 世纪一直延续到现在"
          ],
          "locatingTip": "定位：题干有两个好用的抓手——时间词 today 和人物词 parents。全文出现 today 的地方只有第 3 段（C）末句 “Even today some protective parents shy from the Grimms' tales because of their reputation for violence.”，看到 Even today 就可以停止扫读。确定答案技巧：题干用的是心理动词 think … are not suitable for children（认为不适合儿童）；原文没有直接写“家长认为不合适”，而是写家长的行为——shy from（回避、不敢碰）这些故事，理由是它们有暴力的名声。用行为加上理由来表达同一种态度，是雅思常见的同义改写方式。题干的 Some parents 与原文的 some protective parents 完全吻合，态度方向一致，故判 YES。",
          "analysis": "第 3 段（C）整体讲 19 世纪以来成年人对格林童话的批评，末句是本题的落点：“Even today some protective parents shy from the Grimms' tales because of their reputation for violence.”（直到今天，仍有一些保护意识很强的家长因为格林童话的暴力名声而对其避而远之）。句中有三个信息点与题干一一对应：一是时间 “Even today” 对应题干的 today still；二是人群 “some protective parents” 对应 Some parents；三是态度 “shy from the Grimms' tales because of their reputation for violence”（因暴力名声而回避）对应“认为不适合儿童阅读”。雅思常把“认为某物不合适”改写成“回避某物”的行为描写，两者的态度方向完全一致，因此答案是 YES。还要留意本段前面几句给出的理由：教师、家长和宗教人士 “deplored the Grimms' collection for its raw, uncivilized content. Offended adults objected to the gruesome punishments inflicted on the stories' villains.”（谴责其粗野、不开化的内容，反感对反派施加的血腥惩罚），这些都与末句的“暴力名声”是一条线，可以互相印证，不必担心误判为 NOT GIVEN。",
          "traps": [
            "为什么不是 NO：原文明确说 “some protective parents shy from the Grimms' tales”，即确实有一部分家长到今天仍回避这些故事，题干所说的“有些家长仍认为不适合儿童”与之同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文不但提到了这一人群（some protective parents），还给出了他们持此态度的原因（reputation for violence），信息完整而具体，并非没有交代，所以不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "The first edition of Grimm's fairy tales sold more widely in England than in Germany.",
          "translation": "格林童话的第一版在英国比在德国卖得更广。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "During their lifetimes the collection sold modestly in Germany, at first only a few hundred copies a year."
          },
          "synonyms": [
            "“sold more widely” 中只有 “sold” 这一部分能在原文找到对应：“the collection sold modestly in Germany, at first only a few hundred copies a year” 讲的是德国销量",
            "“in England than in Germany” 这一英德对比在原文中找不到对应：原文从未把两个国家的销量放在一起比较，而且全文只出现 English publishers（英国出版商），England 一词连同与销售相关的表述都找不到",
            "原文 “at first only a few hundred copies a year” 中的 at first 对应题干的 “first edition” 所在的早期阶段，但只给出了德国的数字，没有给出英国的数字"
          ],
          "locatingTip": "定位：题干的关键词有两组——版本类 first edition 与比较结构 more widely in England than in Germany。比较题必须先确定比较项在原文有没有出现：回原文找 sold，落在第 2 段（B）“During their lifetimes the collection sold modestly in Germany, at first only a few hundred copies a year.”，此处只谈到德国销量。确定答案技巧：凡是题干出现 A 比 B 更多、更快、更贵这类比较，必须要求原文同时给出 A 和 B 两端的信息。原文第 2 段只交代了德国的情况（每年几百册，属于 at first 阶段），而第 4 段（D）虽然提到 English publishers（英国出版商）与出版有关，说的却是 “English publishers led the way, issuing high-quality picture books … to satisfy a newly literate audience”，讲的是出版速度和品类，并不涉及童话集第一版在英国的销量。两处信息都不足以支撑“英国比德国卖得更广”这一比较，故判 NOT GIVEN。切记：文中同时出现 Germany 与 English publishers，不等于两者被比较过。",
          "analysis": "题目要求判断“格林童话第一版在英国的销量是否超过德国”。回到原文，与“销售”直接相关的只有第 2 段（B）第 2 句：“During their lifetimes the collection sold modestly in Germany, at first only a few hundred copies a year.”（在他们有生之年，这本集子在德国销量平平，起初每年只有几百册）。这句给出了德国一侧的信息：销量不大（modestly），每年几百册，且限定在 at first 这一早期阶段，与题干的 first edition 时段吻合。但英国一侧的销量原文从未提及。第 4 段（D）出现的与英国相关的表述是 “English publishers led the way, issuing high-quality picture books such as Jack and the Beanstalk and handsome folktale collections, all to satisfy a newly literate audience seeking virtuous material for the nursery.”（英国出版商走在前列，推出高质量的图画书和精美的民间故事集，以满足新出现的识字人群对儿童读物中品德素材的需求）。这句讲的是英国出版商在儿童文学出版上的领先，既没有给出销量数字，也没有与德国对比，更没有说是格林童话的第一版。缺了比较的另一端，题干这个比较关系就无法在原文中得到证实或否认，因此答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文只给出了德国一端的销量（每年几百册），从未给出英国一端的任何销售数字，更没有出现英国销量超过德国的说法，无法证实题干。",
            "为什么不是 NO：原文也没有否认英国第一版卖得更好，它对英国一侧的销售情况完全没有交代（第 4 段谈 English publishers 只讲出版与读者，不谈销量），所以不构成相反信息，不能判 NO，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "Adults like reading Grimm's fairy tales for reasons different from those of children.",
          "translation": "成年人喜欢读格林童话的原因与儿童不同。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "And parents keep reading because they approve of the finger-wagging lessons inserted into the stories: keep your promises, don't talk to strangers, work hard, obey your parents."
          },
          "synonyms": [
            "“Adults like reading” 同义替换为原文的 “parents keep reading”（家长一直在读）",
            "“for reasons different from those of children” 对应原文用 And 引出的家长专属理由 “they approve of the finger-wagging lessons inserted into the stories”（他们认可故事里插入的说教意味的教诲）",
            "孩子的理由在原文同段前面已经写明：“The stories read like dreams come true … the boy and girl fall in love and live happily ever after.”（孩子读的是魔法、冒险与爱情圆满），与家长的道德训诫形成对照"
          ],
          "locatingTip": "定位：题干的两个关键词 adults 与 children 都指向“阅读动机”，全文讨论读者动机的只有第 5 段（E）。该段先用四句写孩子的感受（dreams come true、triumph over giants、live happily ever after），末句用 “And parents keep reading because …” 转到成年人，And 这个连接词就是提示答案所在位置的信号。确定答案技巧：题干说“成人的理由与孩子不同”，属于关系型判断，回原文要把两类理由都找齐：孩子的理由是故事像梦想成真——魔法、战胜巨人、爱情圆满；家长的理由原文写得很明确，是 “they approve of the finger-wagging lessons inserted into the stories: keep your promises, don't talk to strangers, work hard, obey your parents.”（认可故事中植入的教训：守信、不跟陌生人说话、努力工作、听父母的话）。两类理由一为娱乐幻想、一为道德教育，方向明显不同，故判 YES。",
          "analysis": "第 5 段（E）讲 20 世纪格林童话在儿童阅读中的地位，段内形成了成人与儿童两种阅读动机的对照。写孩子的是前半段：“The stories read like dreams come true: handsome lads and beautiful damsels, armed with magic, triumph over giants and witches and wild beasts. They outwit mean, selfish adults. Inevitably the boy and girl fall in love and live happily ever after.”（这些故事读起来像梦想成真：英俊少年与美丽少女手持魔法战胜巨人、女巫和野兽，智胜刻薄自私的成年人，男女主人公终成眷属、从此幸福生活）。写成年人的是末句：“And parents keep reading because they approve of the finger-wagging lessons inserted into the stories: keep your promises, don't talk to strangers, work hard, obey your parents.”（而家长会一直读下去，因为他们认可故事中植入的说教式教训：守诺言、不跟陌生人说话、努力工作、听父母的话）。儿童得到的是冒险与圆满结局带来的愉悦，成人看重的是教育意义——原文用 And 把两者并列，用意正是形成对照。题干说成人的阅读理由与儿童不同，与原文这种对照关系一致，所以答案是 YES。注意本题的问法是“理由是否不同”，只要原文给出两类不同动机即可成立，并不需要原文出现 different 这个词。",
          "traps": [
            "为什么不是 NO：原文写孩子的动机是魔法、冒险与爱情圆满，家长的动机是故事中的道德教训（obey your parents 等），两者明显不同，不存在“理由相同”的表述，所以不能选 NO。",
            "为什么不是 NOT GIVEN：原文对两类读者的动机都做了明确交代——孩子的感受用了整段篇幅描写，家长的理由用 because 清楚点出，信息充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "The Grimm brothers based the story “Cinderella” on the life of Dorothea Viehmann.",
          "translation": "格林兄弟以多罗西娅·菲曼（Dorothea Viehmann）的生平为原型创作了《灰姑娘》这个故事。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "An innkeeper's daughter, Viehmann had grown up listening to stories from travellers on the road to Frankfurt. Among her treasure was \"Aschenputtel\" -Cinderella."
          },
          "synonyms": [
            "“based the story … on the life of Dorothea Viehmann” 与原文 “Among her treasure was “Aschenputtel” -Cinderella.” 相冲突：原文说灰姑娘是菲曼故事储备中的一篇（她讲述的故事之一），而不是以她本人经历为原型",
            "“Dorothea Viehmann” 在原文的身份是讲故事的人：“a widow who walked to town to sell produce from her garden”“An innkeeper's daughter, Viehmann had grown up listening to stories from travellers on the road to Frankfurt.”",
            "题干的 on the life of（以其生平为原型）在原文中没有任何对应，原文对灰姑娘这个故事的来源只字未提与菲曼生平有关的信息"
          ],
          "locatingTip": "定位：题干含专有人名 Dorothea Viehmann，这是全篇最强定位词，人名只在第 6 段（F）出现，扫到 Dorothea Viehmann 即可锁定该段。确定答案技巧：判断本题要把“她讲的故事”与“以她为原型”区别开。原文对菲曼的交代是：寡妇，步行进城卖自家园子里的农产品；旅店老板的女儿，从小听过往旅人的故事；她的宝藏故事里就有 Aschenputtel，也就是灰姑娘。可见灰姑娘属于“她讲给格林兄弟听的故事”，与“以她的生平为素材创作”是两回事——原文既没说她的人生经历被写进故事，也没说格林兄弟参照她的经历创作，反而是明面上的“她是讲述者”，因此判 NO。凡是题干出现 based on the life of（以某人生平为原型）这类因果性表述，而原文只说明该人提供了素材或讲述，就要判定为矛盾。",
          "analysis": "第 6 段（F）交代格林童话的素材来源，其中关于菲曼的部分是：“The brothers particularly welcomed the visits of Dorothea Viehmann, a widow who walked to town to sell produce from her garden. An innkeeper's daughter, Viehmann had grown up listening to stories from travellers on the road to Frankfurt. Among her treasure was “Aschenputtel” -Cinderella.”（兄弟俩尤其欢迎 Dorothea Viehmann 的来访，这位寡妇步行进城售卖自家园子里的农产品。作为旅店老板的女儿，菲曼从小就从前往法兰克福路上的旅人那里听故事。她的宝藏故事里就有《Aschenputtel》——灰姑娘）。文中的 “Among her treasure was” 清楚表明灰姑娘是她的故事库中的一篇，她的角色是 storyteller（讲述者），而不是被写进故事的原型人物。题干却说 “based the story “Cinderella” on the life of Dorothea Viehmann”（以她的生平为原型创作灰姑娘），把“她讲的故事”偷换成“她的生平是故事原型”，与原文事实相反，因此答案是 NO。做本题时可以这样对照：原文只交代了她的四项个人背景（寡妇、卖菜、旅店老板女儿、从小听故事），这些背景与灰姑娘的情节毫无关联，可见“以她生平为原型”在原文完全没有依据，且与“她是讲述者”这一明确身份冲突。",
          "traps": [
            "为什么不是 YES：原文只说明灰姑娘是菲曼讲述、转述的故事之一（Among her treasure was … Cinderella），并把她的作用定位为提供口头故事的讲述者；文中没有一句话说格林兄弟以她的生平为蓝本创作灰姑娘，反而明确了她作为素材提供者的身份。",
            "为什么不是 NOT GIVEN：NOT GIVEN 要求原文完全没有相关信息。本题原文对灰姑娘与菲曼的关系有明确交代——“Among her treasure was “Aschenputtel” -Cinderella.”，即两者的关系是“讲述者与故事”，这一信息与题干所说的“以她生平为原型”相冲突，属于有相反信息，应判 NO。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 33–35 选择题（四选一）",
      "mode": "per_question",
      "questionRange": {
        "start": 33,
        "end": 35
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "In paragraph D, what changes happened at that time in Europe?",
          "translation": "在第 D 段中，当时欧洲发生了什么变化？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "English publishers led the way, issuing high-quality picture books such as Jack and the Beanstalk and handsome folktale collections, all to satisfy a newly literate audience seeking virtuous material for the nursery."
          },
          "synonyms": [
            "“Literacy levels of the population increased” 同义替换为原文的 “a newly literate audience”（新出现的识字读者群），人群识字率的提升对应新增的识字读者",
            "“what changes happened at that time in Europe” 对应原文的 “a great flowering of children's literature in Europe”（欧洲儿童文学的大繁荣）及其成因说明",
            "原文 “all to satisfy a newly literate audience seeking virtuous material for the nursery” 中的 satisfy 说明出版繁荣正是为了迎合识字人群扩大这一变化"
          ],
          "locatingTip": "定位：题干直接指定了段落 D，即原文第 4 段，只需在该段内找“当时欧洲发生了什么变化”。确定答案技巧：段中有一句总起 “The brothers had not foreseen that the appearance of their work would coincide with a great flowering of children's literature in Europe.”（兄弟俩没有料到他们的作品问世恰逢欧洲儿童文学的繁荣），紧接着用 English publishers led the way 举例，并在句末用 all to satisfy a newly literate audience 点明原因——一个刚刚识字、需要儿童读物的人群出现了。选项 A 的 Literacy levels of the population increased（人口识字率提高）正是 a newly literate audience 的同义概括，因此选 A。做段落指定题时，先找到该段的“变化”句，再找它后面的原因或结果句，答案往往在原因里。",
          "analysis": "第 4 段（D）先讲 Children's and Household Tales 尽管遭遇过争议，仍逐渐被大众接受，接着指出原因：“The brothers had not foreseen that the appearance of their work would coincide with a great flowering of children's literature in Europe. English publishers led the way, issuing high-quality picture books such as Jack and the Beanstalk and handsome folktale collections, all to satisfy a newly literate audience seeking virtuous material for the nursery.”（兄弟俩没有料到，他们作品的问世恰逢欧洲儿童文学的大繁荣。英国出版商一马当先，发行了《杰克与魔豆》这类高质量图画书和精美的民间故事集，全都是为了满足一个刚刚识字、为儿童房寻找品德读物的人群）。题干问“当时欧洲发生了什么变化”，对应原文的变化就是儿童文学的繁荣，而这一繁荣的深层原因是读者群发生了变化——出现了 “a newly literate audience”（新识字人群），选项 A 的 “Literacy levels of the population increased” 正是对这层原因的概括，所以答案是 A。段落随后还说，格林兄弟看到这批新读者后开始 “refining and softening their tales”，可见读者结构的变化又反过来影响了故事的改写方式，这条信息在下一题（第 34 题）会用到。",
          "traps": [
            "B 为什么错：原文完全没有提到印刷技术的发展（printing technology），该选项属于无中生有；原文强调的是出版商的作为（English publishers led the way）与读者识字率，与印刷技术无关。",
            "C 为什么错：原文只说出现了 “a newly literate audience”（新识字的读者群），并未提到学校向儿童开放（Schools were open to children），属于把“识字率上升”过度延伸成教育制度变化。",
            "D 为什么错：原文说的是英国出版商主动发行（issuing）高质量图画书和民间故事集，动作主体是出版方；D 却把这件事改写成“人们喜欢收藏精美绘本”（People were fond of collecting），把出版行为错位成了读者的收藏癖好。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "What changes did the Grimm Brothers make in later editions?",
          "translation": "格林兄弟在后来的版本中做了哪些改动？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Once the Brothers Grimm sighted this new public, they set about refining and softening their tales, which had originated centuries earlier as earthy peasant fare."
          },
          "synonyms": [
            "“The content of the tales became less violent” 同义替换为原文的 “softening their tales”（把故事柔化），柔化的具体方向就是减少暴力成分",
            "“made in later editions” 对应原文的 “Once the Brothers Grimm sighted this new public” 之后的加工阶段，也就是第 2 段所说早期版本（The early editions）之后的新版本",
            "原文紧接着举的例子 “cruel mothers became nasty stepmothers, unmarried lovers were made chaste, and the incestuous father was recast as the devil” 说明被改掉的都是残酷、不宜的内容"
          ],
          "locatingTip": "定位：题干的关键词是 later editions（后来的版本）与 changes，全文谈版本改动的只有第 2 段提到的 “The early editions were not even aimed at children” 和第 4 段（D）后半的改写行为，扫到 softening 或 refine 即可锁定第 4 段。确定答案技巧：原文用动词短语 “they set about refining and softening their tales”（着手提炼并柔化这些故事）概括改动方向，随后用 “In the Grimms' hands, cruel mothers became nasty stepmothers, unmarried lovers were made chaste, and the incestuous father was recast as the devil.” 举出实例。所谓柔化、把残忍的母亲改成恶毒继母、把不伦的父亲改成魔鬼，都是把血腥、粗野、不宜的成分替换掉，与选项 C “故事内容变得不那么暴力” 完全吻合，故选 C。判断改动方向时要抓住 refine 与 soften 这对动词，它们本身就是“减弱、净化”的意思。",
          "analysis": "第 4 段（D）后半是本题的落点：“Once the Brothers Grimm sighted this new public, they set about refining and softening their tales, which had originated centuries earlier as earthy peasant fare. In the Grimms' hands, cruel mothers became nasty stepmothers, unmarried lovers were made chaste, and the incestuous father was recast as the devil.”（格林兄弟一看到这批新读者，就开始提炼并柔化他们的故事——这些故事几百年前本是乡野百姓的粗俗素材。在格林兄弟手中，残忍的母亲变成了恶毒的继母，未婚的恋人被改为守贞，乱伦的父亲被改写成魔鬼）。这里的 softening（柔化）与三项具体修改都指向同一个方向：删改暴力、粗俗、不合当时道德的内容。再结合第 3 段提到的 “gruesome punishments”“reputation for violence”（血腥惩罚、暴力名声），可知所谓柔化正是针对暴力内容，因此选项 C “故事内容变得不那么暴力” 是正确答案。注意本题问的是“后来的版本做了什么改动”，原文用 early editions 与 sighted this new public 之后的行为形成前后对照，时间线对得上。",
          "traps": [
            "A 为什么错：原文只说 refining and softening（提炼并柔化），并未提到把故事改短（made the stories shorter），篇幅变化在文中没有依据。",
            "B 为什么错：原文说这些故事原本就是几百年前的乡野口头素材（had originated centuries earlier as earthy peasant fare），改写方向是把粗野的口头素材“净化柔化”，而不是改用更多口头语言；oral tradition 出现在第 6 段谈素材来源，与本次改写无关。",
            "D 为什么错：原文提到故事的起源只是陈述事实（which had originated centuries earlier as earthy peasant fare），并没有说格林兄弟去另找故事的来源（found other origins），该选项属于对“originated”一词的误读。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "What did Marie Hassenpflug contribute to the Grimm's Fairy tales?",
          "translation": "玛丽·哈森普弗鲁格（Marie Hassenpflug）对《格林童话》有什么贡献？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Marie's wonderful stories blended motifs from the oral tradition and from Perrault's influential 1697 book, Tales of My Mother Goose, which contained elaborate versions of \"Little Red Riding Hood\", \"Snow White\", and \"Sleeping Beauty\", among others. Many of these had been adapted from earlier Italian tales."
          },
          "synonyms": [
            "“She told the oral stories” 同义替换为原文的 “Marie's wonderful stories”（她讲的那些精彩故事），以及同段开头 “Altogether some 40 persons delivered tales to the Grimms.” 所说的故事提供者身份",
            "“based on traditional Italian stories” 同义替换为原文的 “Many of these had been adapted from earlier Italian tales”（其中许多改编自更早的意大利故事）",
            "“from the oral tradition” 对应原文的 “motifs from the oral tradition”，说明她的故事来源于口头传统，而不是她自己的文学创作"
          ],
          "locatingTip": "定位：题干含专有人名 Marie Hassenpflug，只在第 6 段（F）出现，人名即可直接定位。确定答案技巧：本题问“她对格林童话的贡献是什么”，要在原文找她的动作。原文对她的描写是 “Marie's wonderful stories blended motifs from the oral tradition and from Perrault's influential 1697 book … Many of these had been adapted from earlier Italian tales.”（她讲的故事融合了口头传统与佩罗 1697 年那本书中的母题……其中许多改编自更早的意大利故事）。结合本段首句 “Altogether some 40 persons delivered tales to the Grimms.”（共有约 40 人向格林兄弟提供故事），她的角色是“口头讲述故事的人”，而这些故事又源自口头传统与更早的意大利故事，正是选项 D 的内容，故选 D。做题时要把“她讲故事”与“她写故事”“她翻译”区分开：原文提到她出身于 French-speaking family（说法语的家庭），这只是背景信息，不能推出她为兄弟俩做过翻译。",
          "analysis": "第 6 段（F）把素材提供者分成两类，前一类是 Dorothea Viehmann，后一类就是本题的 Marie Hassenpflug：“Marie Hassenpflug was a 20-year-old friend of their sister, Charlotte, from a well-bred, French-speaking family. Marie's wonderful stories blended motifs from the oral tradition and from Perrault's influential 1697 book, Tales of My Mother Goose, which contained elaborate versions of “Little Red Riding Hood”, “Snow White”, and “Sleeping Beauty”, among others. Many of these had been adapted from earlier Italian tales.”（玛丽·哈森普弗鲁格是他们妹妹夏洛特的朋友，20 岁，出身于教养良好、讲法语的家庭。玛丽讲的精彩故事把口头传统的母题与佩罗 1697 年那本影响深远的《鹅妈妈的故事》中的母题融合在一起，那本书里有《小红帽》《白雪公主》《睡美人》等故事的详尽版本。其中许多都改编自更早的意大利故事）。可见她的贡献是把口头流传的故事讲给格林兄弟，而这些故事融合了口头传统与佩罗的书，其中不少更早可以追溯到意大利故事，正好对应选项 D。选项里最容易误选的是 C，考生看到 French-speaking family（讲法语的家庭）就容易联想她为兄弟俩翻译了法语书籍；但原文只说她出身于讲法语的家庭，并明确把佩罗那本 1697 年的书当作她故事的来源之一（blended motifs from … Perrault's influential 1697 book），时间上也早于她的讲述，所以“翻译”一事无从谈起。",
          "traps": [
            "A 为什么错：原文说的是她讲的故事（Marie's wonderful stories），并把素材来源归于口头传统与佩罗 1697 年的书，她是讲述者而非作者；对真正执笔创作的定位，本段并未给她。",
            "B 为什么错：原文只说她与格林兄弟的妹妹夏洛特是朋友、向格林兄弟提供故事，从未提到她就故事与他们进行讨论（discussed）；讨论一说属于无据推测。",
            "C 为什么错：原文提到她来自 French-speaking family（讲法语的家庭）只是背景信息；她的故事取材于佩罗 1697 年的书，那本书的成书远早于她，因此不存在她为格林兄弟翻译该书的事实。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 36–40 句子结尾匹配（A-H）",
      "mode": "per_question",
      "questionRange": {
        "start": 36,
        "end": 40
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "Heinz Rolleke said the Grimm's tales are \"German\" because some tales",
          "translation": "海因茨·罗勒克说格林童话是“德国的”，因为有些故事______（选 D：讲述德国乡村生活的淳朴）",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Very, says scholar Heinz Rolleke. Love of the underdog, rustic simplicity, creative energy—these are Teutonic traits."
          },
          "synonyms": [
            "“D tell of the simplicity of life in the German countryside” 同义替换为原文的 “rustic simplicity”（质朴、乡野的简单），rustic 即乡村的，simplicity 即简单质朴",
            "“the German” 同义替换为原文的 “Teutonic traits”（条顿人的特征，即德国人的特征）",
            "“love of the underdog, rustic simplicity, creative energy” 这三项并列的特征，正是原文回答 “How German are the Grimm tales?” 所给的理由"
          ],
          "locatingTip": "定位：题干含专有人名 Heinz Rolleke，全篇只出现在第 7 段（G），扫到 Heinz Rolleke 即锁定该段。确定答案技巧：题干问“为什么说这些故事是德国的”，原文的回答结构是先设问后作答：“the question must be asked: How German are the Grimm tales? Very, says scholar Heinz Rolleke. Love of the underdog, rustic simplicity, creative energy—these are Teutonic traits.”（问题是：格林童话有多德国？学者罗勒克回答：“非常德国。”同情弱者、乡野的质朴、创造力——这些都是条顿人的特征）。三项特征中的 rustic simplicity 直接对应选项 D 的 the simplicity of life in the German countryside，故选 D。做题时要抓住破折号后的概括句 “these are Teutonic traits”，它是把前面三项特征归为德国特质的关键。",
          "analysis": "第 7 段（G）讨论格林童话的“德国性”。段首设问：“Given that the origins of many of the Grimm fairy tales reach throughout Europe and into the Middle East and Orient, the question must be asked: How German are the Grimm tales?”（鉴于许多格林童话的源头遍及欧洲乃至中东和东方，必须追问：格林童话到底有多德国？）随后给出罗勒克的回答与理由：“Very, says scholar Heinz Rolleke. Love of the underdog, rustic simplicity, creative energy—these are Teutonic traits.”（学者罗勒克说：非常德国。同情弱者、乡野的质朴、创造力——这些都是条顿人的特征）。三项理由中，rustic simplicity 意为“乡村式的质朴、简朴”，与选项 D “tell of the simplicity of life in the German countryside”（讲述德国乡村生活的质朴）在语义上完全对应：simplicity 与 simplicity 对应，乡村生活与 rustic 对应，德国的与 Teutonic 对应，因此 D 是正确结尾。接上 D 后整句读作：Heinz Rolleke said the Grimm's tales are “German” because some tales tell of the simplicity of life in the German countryside，与原文逻辑一致，语意与语法都通顺。",
          "traps": [
            "A 为什么错：reflect what life was like at that time（反映当时的生活）是第 37 题所对应的结尾，依据是罗勒克评价残酷内容时所说的 “It reflected the law-and-order system of the old times”，谈的是旧时代的法律与秩序体系，而不是本题所问的“德国性”的来源。",
            "C 为什么错：原文只说故事内容 “reflected the law-and-order system of the old times”（反映了旧时的法律与秩序体系），把它说成 demonstrate the outdated system（展示过时的制度）改变了原意，原文并未评价该制度已经过时。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "Heinz Rolleke said the abandoned children in tales",
          "translation": "海因茨·罗勒克说故事中被遗弃的孩子______（选 A：反映当时的生活状况）",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Throughout Europe, children were often neglected and abandoned, like Hansel and Gretel. Accused witches were burned at the stake, like the evil mother-in-law in \"The Six Swans\". \"The cruelty in the stories was not the Grimms' fantasy\", Rolleke points out, \"It reflected the law-and-order system of the old times"
          },
          "synonyms": [
            "“A reflect what life was like at that time” 同义替换为原文的 “It reflected the law-and-order system of the old times”（它反映了旧时代的法律与秩序体系）",
            "“the abandoned children” 对应原文的 “children were often neglected and abandoned, like Hansel and Gretel”（孩子们常被忽视和遗弃，如韩塞尔与格莱特）",
            "“what life was like at that time” 对应原文的 “The coarse texture of life during medieval times in Germany”（中世纪德国生活的粗粝质感）以及 “the old times”"
          ],
          "locatingTip": "定位：题干含人名 Heinz Rolleke 与关键词 abandoned children，两者同时出现在第 7 段（G）中后部，扫到 abandoned 即可停下。确定答案技巧：原文用 “Throughout Europe, children were often neglected and abandoned, like Hansel and Gretel.”（在整个欧洲，孩子常被忽视和遗弃，就像韩塞尔与格莱特那样）说明故事中的遗弃情节并非虚构，紧接着用罗勒克的话做结论：“The cruelty in the stories was not the Grimms' fantasy”, Rolleke points out, “It reflected the law-and-order system of the old times.（故事中的残酷并非格林兄弟的幻想，它反映了旧时代的法律与秩序体系）。这段引语的动词 reflected（反映）与选项 A 的 reflect 完全对应，宾语 the law-and-order system of the old times 与 what life was like at that time（当时的生活状况）属于同义概括，因此选 A。看到引号内的专家结论句，通常就是匹配题的判分句。",
          "analysis": "第 7 段（G）的后半段用具体史实解释格林童话中残酷情节的来源，是本题的落点：“The coarse texture of life during medieval times in Germany, when many of the tales entered the oral tradition, also coloured the narratives. Throughout Europe, children were often neglected and abandoned, like Hansel and Gretel. Accused witches were burned at the stake, like the evil mother-in-law in “The Six Swans”. “The cruelty in the stories was not the Grimms' fantasy”, Rolleke points out, “It reflected the law-and-order system of the old times”。”（德国中世纪生活的粗粝质感——许多故事正是在那时进入口头传统——也为这些叙事染上了色彩。在整个欧洲，孩子常被忽视、被遗弃，就像韩塞尔与格莱特；被指控为女巫的人会被绑在火刑柱上烧死，就像《六只天鹅》里的恶毒婆婆。罗勒克指出：“故事中的残酷并非格林兄弟的幻想，它反映了旧时代的法律与秩序体系。”）题干问“故事中被遗弃的孩子”对应什么结尾，原文给出的逻辑是：遗弃儿童是当时欧洲真实存在的社会现象，故事把它写下来，因而反映了那个时代的生活状况。选项 A 的 reflect what life was like at that time 与引语中的 reflected the law-and-order system of the old times 在动词与语义上完全一致，故选 A。注意引语前半句 “was not the Grimms' fantasy”（不是格林兄弟的幻想）恰好排除了“虚构”的方向，进一步印证“反映现实”。",
          "traps": [
            "B 为什么错：help children deal with their problems（帮助孩子应对他们的问题）是第 40 题的结尾，依据在第 9 段贝特尔海姆关于治疗价值的论述，与本题所问的现实反映无关。",
            "F 为什么错：recognize the heroes in the real life（认可现实生活中的英雄）在原文找不到依据；第 8 段虽有 “We can identify with the heroes of the tales”，但那是杰克·齐普斯谈读者自我认同，且说的是认同故事中的主角，不是现实中的英雄。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Bernhard Lauer said the writing style of the Grimm brothers is universal because they",
          "translation": "伯恩哈德·劳尔说格林兄弟的写作风格之所以具有普适性，是因为他们______（选 H：避免交代人物的社会背景细节）",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Bernhard Lauer points to the \"universal style\" of the writing, you have no concrete descriptions of the land, or the clothes, or the forest, or the castles. It makes the stories timeless and placeless."
          },
          "synonyms": [
            "“H avoid details about characters' social settings” 同义替换为原文的 “you have no concrete descriptions of the land, or the clothes, or the forest, or the castles”（没有对地域、衣着、森林或城堡的具体描写），场景细节缺失即避免交代背景细节",
            "“the writing style … is universal” 同义替换为原文的 “the “universal style” of the writing”，随后 “It makes the stories timeless and placeless”（使故事不受时间与地点限制）进一步说明普适性",
            "“Bernhard Lauer said” 对应原文的 “Bernhard Lauer points to”，人名直接复现"
          ],
          "locatingTip": "定位：题干含专有人名 Bernhard Lauer，只在第 8 段（H）出现，可直接定位。确定答案技巧：原文对普适风格的说明是 “Bernhard Lauer points to the “universal style” of the writing, you have no concrete descriptions of the land, or the clothes, or the forest, or the castles. It makes the stories timeless and placeless.”（劳尔指出其写作的“普适风格”：你对土地、衣着、森林、城堡都没有具体描写，这使故事超越时间与地点）。所谓普适，靠的不是多加描述，而是“什么都不具体写”——缺少具体的地域、服饰、景致信息，读者才能各自代入。选项 H “avoid details about characters' social settings”（避免交代人物社会背景的细节）正是这种“省略具体细节”的策略，与 no concrete descriptions 对应，故选 H。做题时要留意原文否定词 no：它表明风格特点来自“不做具体描写”，而不是来自描述了某样东西。",
          "analysis": "第 8 段（H）先指出格林童话的文本打上了 19 世纪德国基督教市民社会的印记，随后设问 “What accounts for this widespread, enduring popularity?”（这种广泛而持久的流行原因何在？），再引两位学者作答。劳尔的部分是：“Bernhard Lauer points to the “universal style” of the writing, you have no concrete descriptions of the land, or the clothes, or the forest, or the castles. It makes the stories timeless and placeless.”（劳尔指出其写作的“普适风格”：没有对土地、衣着、森林或城堡的具体描写，这使故事不受时间和地点限制）。原文用否定句式给出答案——没有具体的地貌、服饰、森林、城堡描写，也就是抽掉了具体的社会与场景背景，读者无论身处何时何地都能代入，这正是选项 H “避免交代人物社会背景的细节” 的意思。接上 H 后整句为：Bernhard Lauer said the writing style of the Grimm brothers is universal because they avoid details about characters' social settings，与原文逻辑吻合。注意不要与选项 D（德国乡村生活的质朴）混淆，D 属于第 36 题所依据的第 7 段内容，本文谈普适性的段落里并没有提乡村生活的质朴。",
          "traps": [
            "D 为什么错：tell of the simplicity of life in the German countryside（讲述德国乡村生活的质朴）对应第 7 段的 rustic simplicity，是第 36 题的答案；本题所在的第 8 段谈的是省略具体描写，与乡村生活的质朴无关。",
            "G 为什么错：contribute to the belief in nature's power（强化对自然力量的信仰）在原文完全没有依据，文中没有出现自然力量或相关信仰的任何表述。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "Jack Zipes said the pursuit of happiness in the tales means they",
          "translation": "杰克·齐普斯说故事中对幸福的追求意味着这些故事______（选 E：鼓励人们相信自己什么都能做到）",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "They show a striving for happiness that none of us knows but that we sense is possible. We can identify with the heroes of the tales and become in our mind the masters and mistresses of our own destinies."
          },
          "synonyms": [
            "“E encourage people to believe that they can do anything” 同义替换为原文的 “We can identify with the heroes of the tales and become in our mind the masters and mistresses of our own destinies”（读者可以认同故事中的主角，在想象中成为自己命运的主人）",
            "“the pursuit of happiness in the tales” 同义替换为原文的 “a striving for happiness”（对幸福的追求），striving 即 pursuit",
            "“means they …” 对应原文 “They show a striving for happiness that none of us knows but that we sense is possible.”（故事呈现出一种我们虽未曾经历、却觉得可能实现的幸福追求）"
          ],
          "locatingTip": "定位：题干含专有人名 Jack Zipes，只出现在第 8 段（H）后部，扫到 Jack Zipes 即可锁定。确定答案技巧：题干把考查点落在 “the pursuit of happiness”，原文相应表述是 “They show a striving for happiness that none of us knows but that we sense is possible.”（它们呈现出一种我们都未曾经历过、却能感到是可能实现的幸福追求），紧接着给出这种追求的效果：“We can identify with the heroes of the tales and become in our mind the masters and mistresses of our own destinies.”（我们可以与故事里的主角产生认同，并在心中成为自己命运的主宰）。句子用 despite 式的让步（none of us knows）+ 可能性（we sense is possible）再加上“成为自己命运的主人”，传达的正是“相信自己能做到任何事”的信念，与选项 E 对应，故选 E。要注意把齐普斯的观点与前面劳尔的观点分开：劳尔谈的是写作风格（无具体描写），齐普斯谈的是读者的心理认同。",
          "analysis": "第 8 段（H）后部是齐普斯的论述，也是本题的落点：““The tales allow us to express ‘our utopian longings',” says Jack Zipes of the University of Minnesota, whose 1987 translation of the complete fairy tales captures the rustic vigour of the original text. “They show a striving for happiness that none of us knows but that we sense is possible. We can identify with the heroes of the tales and become in our mind the masters and mistresses of our own destinies.””（明尼苏达大学的杰克·齐普斯说：“这些故事让我们表达出‘我们的乌托邦式渴望’。”他的全集译本于 1987 年问世，捕捉到了原文本的乡野活力。“它们呈现出一种我们谁都不曾经历、却能感到可能实现的幸福追求。我们可以认同故事里的主角，并在心中成为自己命运的主宰。”）题干中的 pursuit of happiness 对应原文的 striving for happiness；原文用 “we sense is possible”（我们感到它可能实现）与 “become in our mind the masters and mistresses of our own destinies”（在心中成为自己命运的主宰）说明这些故事能给读者一种“我能够掌控人生、实现一切”的鼓舞，正是选项 E “鼓励人们相信自己什么都能做到”。匹配时若遇到两个都像的选项，就看谁与原句的核心动词对应得最紧：原文的重点动词是 become masters（成为主宰），对应的就是“相信自己能做到”。",
          "traps": [
            "F 为什么错：recognize the heroes in the real life 把原文的 “We can identify with the heroes of the tales”（认同故事中的主角，主角属于故事而非现实）曲解为“认出生活中的英雄”，对象和方向都错了。",
            "A 为什么错：reflect what life was like at that time（反映当时的生活）是第 7 段罗勒克关于旧时代法律与秩序的论述，属于第 37 题的结尾；齐普斯谈的是读者对未来的向往，与反映过去时代的现实正好相反。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "Bruno Bettelheim said the therapeutic value of the tales means that the fairy tales",
          "translation": "布鲁诺·贝特尔海姆说这些故事的治疗价值意味着童话______（选 B：帮助孩子应对他们的问题）",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "Bruno Bettelheim famously promoted the therapeutic value of the Grimms' stories, calling fairy tales the \"great comforters\". By confronting fears and phobias, symbolized by witches, heartless stepmothers, and hungry wolves, children find they can master their anxieties."
          },
          "synonyms": [
            "“B help children deal with their problems” 同义替换为原文的 “children find they can master their anxieties”（孩子们发现自己能够掌控自己的焦虑）",
            "“the therapeutic value of the tales” 同义替换为原文的 “promoted the therapeutic value of the Grimms' stories”（宣扬这些故事的治疗价值）",
            "“confronting fears and phobias” 对应题干中孩子所要面对的问题（fears、phobias 即恐惧与恐惧症）"
          ],
          "locatingTip": "定位：题干含专有人名 Bruno Bettelheim，只在第 9 段（I）出现，且与 therapeutic value 同句，一步即可锁定。确定答案技巧：原文写贝特尔海姆的部分是 “Bruno Bettelheim famously promoted the therapeutic value of the Grimms' stories, calling fairy tales the “great comforters”. By confronting fears and phobias, symbolized by witches, heartless stepmothers, and hungry wolves, children find they can master their anxieties.”（贝特尔海姆宣扬格林故事的治疗价值，称童话是“伟大的安慰者”。通过直面由女巫、狠心的继母和饿狼所象征的恐惧与恐惧症，孩子们发现自己能够掌控焦虑）。题干问“治疗价值意味着什么”，原文紧接着用 By confronting … children find they can master their anxieties 给出机制：故事帮孩子正面面对并掌控恐惧，即帮孩子处理他们的问题，与选项 B 对应，故选 B。注意区分“故事本身有治疗价值”与“故事帮孩子解决问题”是同一件事的两种表述。",
          "analysis": "第 9 段（I）开门见山：“Fairy tales provide a workout for the unconscious, psychoanalysts maintain.”（精神分析学家认为，童话为无意识提供了一次锻炼），随后以贝特尔海姆为例展开：“Bruno Bettelheim famously promoted the therapeutic value of the Grimms' stories, calling fairy tales the “great comforters”. By confronting fears and phobias, symbolized by witches, heartless stepmothers, and hungry wolves, children find they can master their anxieties.”（贝特尔海姆因宣扬格林故事的治疗价值而闻名，他把童话称作“伟大的安慰者”。通过直面那些由女巫、狠心的继母和饿狼所象征的恐惧与恐惧症，孩子们发现自己能够掌控自己的焦虑）。这里治疗价值的含义被解释得很清楚：孩子借故事中的恐怖角色正视自己的恐惧，从而学会掌控焦虑，也就是帮助孩子处理自身的问题，与选项 B “help children deal with their problems” 完全对应，故答案为 B。注意本段接着说 “Bettelheim's theory continues to be hotly debated.”（他的理论至今争议很大），那只是评价这套理论，并不影响题干所问的“治疗价值意味着什么”这一对应关系。",
          "traps": [
            "C 为什么错：demonstrate the outdated system（展示过时的制度）与第 7 段罗勒克所说的 law-and-order system of the old times 相混，而且原文只是说故事内容反映了旧时的法律与秩序体系，并未说童话要“展示过时的制度”。",
            "E 为什么错：encourage people to believe that they can do anything（鼓励人们相信自己无所不能）对应第 8 段齐普斯关于成为“自己命运的主宰”的论述，属于第 39 题的结尾；题干问的是贝特尔海姆关于治疗价值的看法，落点在帮助孩子应对焦虑，而非人生的无所不能。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
