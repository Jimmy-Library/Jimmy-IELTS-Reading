(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-101", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-101",
  "meta": {
    "examId": "p1-high-101",
    "title": "The Impact of the Potato 土豆的影响",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Early Spanish chroniclers called the potato by the Incan name 'chuño'.",
          "translation": "早期的西班牙编年史家用印加语的词「chuño」来称呼土豆。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Early Spanish chroniclers who misused the Indian word batata (sweet potato) as the name for the potato noted the importance of the tuber to the Incan Empire."
          },
          "synonyms": [
            "“Early Spanish chroniclers” 在原文中原词复现：“Early Spanish chroniclers”",
            "“called the potato by the Incan name …” 同义替换为原文的 “misused the Indian word batata (sweet potato) as the name for the potato”，两者都在说“用某个印第安语词给土豆命名”",
            "题干给出的名字 “chuño” 与原文给出的名字 “batata” 不是同一个词；原文的 chuño 另有所指：“mashing potatoes into a substance called chuño”，它是把土豆脱水捣碎做成的一种可储存食品，不是土豆的名称"
          ],
          "locatingTip": "定位：题干中的大写名词短语 Early Spanish chroniclers（早期西班牙编年史家）出现在第 3 段首句，专有名词 chuño 也出现在第 3 段（另在第 4 段出现过一次，指印加矿工吃的食物），扫读到这两个词就停下精读。确定答案技巧：本题的核心考点是“名字到底给了谁”。第 3 段首句说西班牙编年史家误用了印第安词 batata（甜土豆）来指称土豆；而 chuño 一词出现在紧接着的第二句，指的是把土豆脱水、捣碎后做成的一种能存放长达 10 年的食物。题干把“用 batata 命名土豆”偷换成“用 chuño 命名土豆”，把食物名当成了植物的名字，属于张冠李戴的事实冲突，因此判 FALSE。做题时遇到两个专有名词同时出现，务必分别确认它们各自在原文中的所指对象，不要因为两个词同段出现就默认它们功能相同。",
          "analysis": "第 3 段开头两句是本题的全部依据。第一句：“Early Spanish chroniclers who misused the Indian word batata (sweet potato) as the name for the potato noted the importance of the tuber to the Incan Empire.”（早期那些误用印第安词 batata（甜土豆）来称呼土豆的西班牙编年史家，记录了块茎对印加帝国的重要性）。第二句：“The Incas had learned to preserve the potato for storage by dehydrating and mashing potatoes into a substance called chuño, which could be stored in a room for up to 10 years, providing excellent insurance against possible crop failures.”（印加人学会了把土豆脱水、捣碎，做成一种叫做 chuño 的东西来储存，它可以在一间屋子里存放长达 10 年，为可能出现的歉收提供了极好的保障）。由此可以清楚看到原文的两条不同信息：名字方面，编年史家用来指称土豆的词是 batata；chuño 方面，它是印加人加工土豆后得到的储存食品。题干写成“早期的西班牙编年史家用印加语词 chuño 来称呼土豆（called the potato by the Incan name 'chuño'）”，把土豆的名称说成了 chuño，与原文的 batata 直接冲突，也就把 chuño 的食用加工品身份错认成了植物名称，因此答案是 FALSE。顺带注意：原文说的是 Indian word（印第安语词），题干写成 Incan name（印加语的名称），这一层也属于用词上的错位，但判分的关键仍是名字本身被换掉。",
          "traps": [
            "为什么不是 TRUE：原文明确写的是 “misused the Indian word batata (sweet potato) as the name for the potato”，被误用为土豆名称的词是 batata；chuño 在原文里是 “a substance called chuño”，即土豆脱水捣碎后的食品。题干把命名者用的词换成 chuño，与原文相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文既给出了编年史家实际使用的名称（batata），也解释了 chuño 是什么，两条信息都完整明确，只是与题干不符。有明确且相反的信息时应判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The purpose of the Spanish coming to Peru was to find potatoes.",
          "translation": "西班牙人来到秘鲁的目的是寻找土豆。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The Spanish conquistadors first encountered the potato when they arrived in Peru in 1532 in search of gold, and noted Inca miners eating chuño."
          },
          "synonyms": [
            "“The Spanish” 同义替换为原文的 “The Spanish conquistadors”（西班牙征服者）",
            "“coming to Peru” 同义替换为原文的 “they arrived in Peru in 1532”（到达秘鲁）",
            "“was to find potatoes” 与原文的 “in search of gold”（为了寻找黄金）相互冲突：原文给出的目的是黄金，不是土豆；土豆只是他们到达后“偶然遇到（first encountered）”的"
          ],
          "locatingTip": "定位：题干的关键词是专有名词 Peru 与国家词 Spanish，第 4 段首句同时出现 “The Spanish conquistadors” 与 “arrived in Peru in 1532”，一步锁定。确定答案技巧：本题考“目的”与“结果”的区别。原文用 in search of gold 明确指出西班牙人来秘鲁是为了寻金，而土豆是他们到达当地之后“首次遇到（first encountered）”的附带发现。题干把“顺带遇到土豆”改写成了“专门为找土豆而来”，把结果当成目的，与原文对立，故判 FALSE。做题时看到 purpose、in order to、aim 这类目的性表述，一定要回到原文找 in search of、to find、so as to 之类的目的状语原文，而不是把文中出现的宾语都当成目的。",
          "analysis": "第 4 段第一句为本题定位句：“The Spanish conquistadors first encountered the potato when they arrived in Peru in 1532 in search of gold, and noted Inca miners eating chuño.”（西班牙征服者 1532 年到达秘鲁寻找黄金时首次遇见土豆，并注意到印加矿工在吃 chuño）。句中出现两个关键信息层：时间与地点是 1532 年到达秘鲁，目的是 in search of gold（为了寻找黄金）；而土豆的出场方式由 first encountered 标出，是“首次遇到”，属于偶然的发现，不是行程目的。题干写成 “The purpose of the Spanish coming to Peru was to find potatoes.”（西班牙人来秘鲁的目的是寻找土豆），把原文里“寻找黄金”的目的改写成了“寻找土豆”，又把“到达后遇到的土豆”抬升为“出行的动机”，两处都与原文相悖，因此答案是 FALSE。紧接着的下一句还能进一步印证：原文说 “At the time the Spaniards failed to realize that the potato represented a far more important treasure than either silver or gold”，当时西班牙人根本没意识到土豆比金银更宝贵，可见他们出发时心目中要追的宝藏是金银，而不是土豆。",
          "traps": [
            "为什么不是 TRUE：原文用 in search of gold 明确了此行的目的，土豆只是他们到达秘鲁后 “first encountered”（首次遇到）的事物。题干把“偶然遇到的对象”说成“出行的目的”，与原文明确交代的目的相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文并没有对“为什么来秘鲁”保持沉默，而是用 in search of gold（为了寻找黄金）给出了明确答案，并与题干所说的目的相冲突。既有明确信息又冲突时判 FALSE，不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The Spanish believed that the potato had the same nutrients as other vegetables.",
          "translation": "西班牙人认为土豆含有与其他蔬菜相同的营养成分。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "At the time the Spaniards failed to realize that the potato represented a far more important treasure than either silver or gold, but they did gradually begin to use potatoes as basic rations aboard their ships."
          },
          "synonyms": [
            "“The Spanish” 同义替换为原文的 “the Spaniards”（西班牙人）",
            "“nutrients” 与 “same … as other vegetables” 在原文中找不到任何对应表述：原文只交代了土豆的战略价值（比金银更重要的宝藏）和实际用途（船上的基本口粮），从未涉及营养成分，也没有与其他蔬菜作比较"
          ],
          "locatingTip": "定位：题干的主体是 The Spanish，第 4 段中 Spaniard 与 Spanish 均有出现（共三处），聚焦到讲西班牙人态度的第二、三句，即 “At the time the Spaniards failed to realize …”。确定答案技巧：本题的关键词 nutrients（营养）和 same … as other vegetables（与其他蔬菜一样）都属于“专业属性 + 比较”的高危组合，考场上一旦发现原文说到西班牙人与土豆，只讲“没意识到它的价值”“把它当口粮”，完全没有成分、营养、健康层面的内容，就可以判定信息缺失，即 NOT GIVEN。切忌自行补脑：原文既没说西班牙人认为土豆营养与蔬菜相同，也没说他们否认这一点，两种推断都超出原文。",
          "analysis": "第 4 段围绕西班牙人与土豆的三句话依次是：他们 1532 年为寻金到达秘鲁并首次遇到土豆，还注意到印加矿工吃 chuño；他们当时没意识到土豆比金银更重要，但逐渐开始把土豆当作船上的基本口粮；1570 年土豆传入西班牙后，少数西班牙农民开始小规模种植，主要用作牲畜饲料。本题落在这三句中的第二句：“At the time the Spaniards failed to realize that the potato represented a far more important treasure than either silver or gold, but they did gradually begin to use potatoes as basic rations aboard their ships.”（当时西班牙人没有意识到，土豆是比白银或黄金都重要得多的宝藏，但他们确实逐渐开始把土豆当作船上的基本口粮）。句中关于土豆的评述只有“价值高”和“被当口粮”两点，后来的第三句说明土豆在西班牙被当成牲畜的饲料。全文这两处对西班牙人态度的描写都不涉及营养学层面，更没有“与其他蔬菜营养相同”的比较。题干凭空加入了 nutrients（营养成分）和 same … as other vegetables（与其他蔬菜相同）这两条原文不存在的信息，属于信息缺失，因此答案是 NOT GIVEN。做判断题时，凡是题干包含原文完全没出现过的抽象属性名词（nutrition、vitamin、ingredient 之类），优先考虑 NOT GIVEN，再回原文逐句确认该属性确实未被提及。",
          "traps": [
            "为什么不是 TRUE：原文从未评价土豆的营养成分，也没有把土豆与其他蔬菜作营养对比。西班牙人“没意识到土豆的价值”讲的是金银与土豆之间的财富比较，不属于营养成分的比较，借它推出“认为营养相同”属于无据推断，不能选 TRUE。",
            "为什么不是 FALSE：原文没有出现任何否定“土豆营养与其他蔬菜相同”的表述，西班牙人也并未被说成认为土豆没有营养。原文只是完全没有涉及这一话题，既无相同之说也无相反之说，因此只能判信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Peasants at that time did not like to eat potatoes because they were ugly.",
          "translation": "当时的农民不喜欢吃土豆，是因为土豆长得难看。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Even peasants refused to eat from a plant that produced ugly, misshapen tubers and that had come from a heathen civilization."
          },
          "synonyms": [
            "“Peasants at that time” 同义替换为原文的 “Even peasants”，even 一词强调连农民阶层也不接受，正是“当时”这一背景下的态度",
            "“did not like to eat” 同义替换为原文的 “refused to eat from”（拒绝食用）",
            "“because they were ugly” 同义替换为原文的原因状语 “a plant that produced ugly, misshapen tubers”，其中 ugly 原词复现，misshapen（畸形的）是对“难看”的进一步补充"
          ],
          "locatingTip": "定位：题干的两个关键词 peasants 与 ugly 都集中在第 5 段最后两句，扫到 “Even peasants refused to eat” 即可停下。确定答案技巧：这是一道“原因对应”题，判断的关键是题干给出的理由（ugly）是否正是原文给出的理由。原句用 that 引导的定语从句说明农民拒吃的原因：这种植物产出的块茎 ugly, misshapen（难看、畸形）；后一个并列定语从句则补充了另一个原因——它来自一个异教文明（heathen civilization）。题干只取其中的“难看”作为原因，与原文的第一个理由完全吻合，因此判 TRUE。注意这类题不要因为原文还给了别的原因就误判为部分不符，只要题干的原因在原文中确实被列为原因即可。",
          "analysis": "第 5 段整体讲土豆在全欧洲遭遇的怀疑与厌恶，末两句是本题依据：“Even peasants refused to eat from a plant that produced ugly, misshapen tubers and that had come from a heathen civilization. Some felt that the potato plant's resemblance to plants in the nightshade family hinted that it was the creation of witches or devils.”（连农民都拒绝食用一种产出难看、畸形块茎、而且来自异教文明的植物。有些人觉得土豆植株长得像茄科植物，这暗示它是女巫或魔鬼的造物）。原文给出的拒吃理由有两层：一是块茎的外形 ugly, misshapen（难看、形状畸形），二是它的来源是异教文明。题干把第一层提取出来，写成 “did not like to eat potatoes because they were ugly”（不喜欢吃土豆是因为它们难看），原因与原文一一对应，且 “refused to eat” 与 “did not like to eat” 方向一致，故答案是 TRUE。做题提示：当题干用一个“because”来概括原文的多个并列原因之一时，属于同向的提炼，不构成冲突；只有当题干的原因在原文中根本不存在、或原文给出的原因与题干表述相反时，才判 NOT GIVEN 或 FALSE。",
          "traps": [
            "为什么不是 FALSE：原文说农民拒绝食用这种植物，理由之一就是它产出 “ugly, misshapen tubers”（难看、畸形的块茎），与题干所说的“因为难看”完全一致，不存在矛盾，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文用 that 引导的从句明确给出了“难看”这一拒绝理由，属于已经交代的信息，并非缺失，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The popularity of potatoes in the UK was due to food shortages during the war.",
          "translation": "土豆在英国（UK）的流行是由战争期间的粮食短缺造成的。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Potatoes did not become a staple until, during the food shortages associated with the Revolutionary Wars, the English government began to officially encourage potato cultivation."
          },
          "synonyms": [
            "“The popularity of potatoes” 同义替换为原文的 “become a staple”（成为主食）,即广泛被接受、成为日常食物",
            "“in the UK” 同义替换为原文的 “the English government”，England 对应 UK",
            "“due to” 同义替换为原文的时间与因果框架 “did not become a staple until … during …”，说明正是这一时段的短缺促成了普及",
            "“during the war” 同义替换为原文的 “the Revolutionary Wars”（革命战争），且原文的 “food shortages”（粮食短缺）原词复现"
          ],
          "locatingTip": "定位：题干关键词是 food shortages 与 war，第 6 段中 “food shortages associated with the Revolutionary Wars” 一次出现，扫读第 6 段即可锁定。确定答案技巧：本题考“流行与短缺之间的因果关系”。原文用 not … until 结构与 during … 状语，说明土豆直到革命战争期间发生粮食短缺、英国政府开始正式鼓励种植后才成为主食；题干把这条因果链概括为“土豆的流行 due to 战争期间的粮食短缺”，方向与原文一致。另一处佐证是同段紧接着的年份证据：1795 年农业委员会发行小册子提倡种土豆，随后《泰晤士报》出现支持土豆的社论与菜谱，说明普及确实是在战争与短缺压力下推进的，因此判 TRUE。做题时注意 not … until 结构表达的是“只有在某条件出现后才发生”，本质上就是该条件导致了结果，不要把它读成单纯的否定。",
          "analysis": "第 6 段讲英国人对土豆的接受过程，前两句先说在爱吃肉的英国，农民和城市工人对土豆极其厌恶，1662 年皇家学会的建议几乎没有影响。第三句是本题定位句：“Potatoes did not become a staple until, during the food shortages associated with the Revolutionary Wars, the English government began to officially encourage potato cultivation.”（直到与革命战争相关的粮食短缺期间，英国政府开始正式鼓励种植土豆，土豆才成为主食）。这一句用 not … until 的结构把两件事锁定在一起：土豆普及（become a staple）发生的前提与时间点，正是革命战争期间的粮食短缺以及政府随之而来的鼓励。题干写成 “The popularity of potatoes in the UK was due to food shortages during the war.”（土豆在英国的流行归因于战争期间的粮食短缺），其中 popularity 对应 become a staple，in the UK 对应 the English government 与 England，during the war 对应 the Revolutionary Wars，due to 对应原文所表达的致成关系，各要素一一吻合，因此答案是 TRUE。段末的 “In 1795, the Board of Agriculture issued a pamphlet entitled 'Hints Respecting the Culture and Use of Potatoes'; this was followed shortly by pro-potato editorials and potato recipes in The Times. Gradually, the lower classes began to follow the lead of the upper classes.” 又从官方文件、报刊舆论到民间模仿，逐层印证了普及的推动力来自战时短缺与官方鼓励，与 TRUE 的判定相互支持。",
          "traps": [
            "为什么不是 FALSE：原文明确指出土豆直到革命战争期间的粮食短缺时才成为主食，并把政府鼓励种植与短缺并置，因果关系清晰，与题干的“因战时粮食短缺而流行”一致，没有可反驳之处，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到 shortages 与 wars，还交代了政府发布文件、报刊推广等具体推动过程，信息充分且与题干同向，并非未提及，因此不能选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–13 句子填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 13
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "In France, people began to overcome their disgust towards potatoes because the King put a potato ________ in his buttonhole.",
          "translation": "在法国，人们开始不再厌恶土豆，因为国王在纽扣孔里插了一朵土豆花。",
          "answer": "flower",
          "wordClass": "名词（单数，指“花”；空格前有 a potato 作修饰限定，两者一起构成 put 的宾语，故填名词单数，且只能填一个词）",
          "locating": {
            "paragraph": "7",
            "quote": "The people began to overcome their distaste when the plant received the royal seal of approval: Louis XVI began to sport a potato flower in his buttonhole, and Marie-Antoinette wore a purple potato blossom in her hair."
          },
          "synonyms": [
            "“people began to overcome their disgust” 同义替换为原文的 “The people began to overcome their distaste”，其中 disgust 与 distaste 同义",
            "“because the King put …” 同义替换为原文的 “when the plant received the royal seal of approval” 及冒号后的具体例证，即国王的认可促成了态度转变",
            "“the King” 对应原文的 “Louis XVI”（路易十六），职位与人物对应",
            "“put a potato … in his buttonhole” 与原文 “sport a potato flower in his buttonhole” 结构对应，空格就是要填被插在纽扣孔中的那个名词"
          ],
          "locatingTip": "定位：题干给出两个抓手——国家名 France 与国王（King）；原文第 7 段同时出现 France 与 Louis XVI，并且只有这一处讲国王在纽扣孔里插土豆，可直接锁定该段最后一句。确定答案技巧：题干结构是 “put a potato [6] in his buttonhole”，要求填一个被插在纽扣孔里的东西；原文对应表达是 “sport a potato flower in his buttonhole”，在 a potato 与 in his buttonhole 之间只夹着一个名词 flower，位置与题干空格完全一致，所以答案就是 flower。注意同句还出现了同义的 blossom（Marie-Antoinette wore a purple potato blossom in her hair），但那个词对应的是王后插在头发上的紫色花，与题干的纽扣孔位置不符，属于干扰信息；同时按 ONE WORD ONLY 要求只写一个词，并且要与原文形式一致，保持小写 flower。",
          "analysis": "第 7 段讲土豆在英吉利海峡对岸的荷兰、比利时和法国经历相似的过程：缓慢被接受，农民始终怀疑，直到植物获得王室认可才真正改变。定位句是段末：“The people began to overcome their distaste when the plant received the royal seal of approval: Louis XVI began to sport a potato flower in his buttonhole, and Marie-Antoinette wore a purple potato blossom in her hair.”（当这种植物得到王室的认可印章时，人们开始克服厌恶：路易十六开始在纽扣孔里插一朵土豆花，玛丽·安托瓦内特在头发上戴了一朵紫色的土豆花）。题干把这句话改写为 “In France, people began to overcome their disgust towards potatoes because the King put a potato [6] in his buttonhole.”，其中 people began to overcome their disgust 与原文几乎逐词对应，because 引出的原因对应原文的 royal seal of approval 及冒号后面的具体行动，the King 对应 Louis XVI，put a potato … in his buttonhole 对应 sport a potato flower in his buttonhole，被留空的位置正是 flower。词性上，空格前有 a potato 这一名词定语、后接介词短语 in his buttonhole 作状语，需要填一个可数名词单数，flower 符合语法与词数要求。另外要注意题干用的是 disgust，原文用的是 distaste，这是同义词替换，不影响判断。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Frederick realised the potential of the potato, but he had to handle the ________ from ordinary people.",
          "translation": "腓特烈认识到了土豆的潜力，但他不得不应对来自普通民众的偏见。",
          "answer": "prejudice",
          "wordClass": "名词（不可数，指“偏见”；作动词 handle 的宾语，前面有定冠词 the 限定，形式不变）",
          "locating": {
            "paragraph": "8",
            "quote": "Frederick the Great of Prussia saw the potato's potential to help feed his nation and lower the price of bread, but faced the challenge of overcoming the people's prejudice against the plant."
          },
          "synonyms": [
            "“Frederick realised the potential of the potato” 同义替换为原文的 “Frederick the Great of Prussia saw the potato's potential”，realised 与 saw 同义",
            "“but he had to handle” 同义替换为原文的 “but faced the challenge of overcoming”，had to handle 与 faced the challenge of overcoming 同义，都表示必须解决某个难题",
            "“ordinary people” 同义替换为原文的 “the people”，即普通民众",
            "“the … from ordinary people” 与原文 “the people's prejudice against the plant” 对应，空格承担的是 people's 之后、against the plant 之前的那个名词"
          ],
          "locatingTip": "定位：题干中的人名 Frederick（腓特烈）是第 8 段的主语，该段首句即以 “Frederick the Great of Prussia” 开头，靠这个人名一步定位。确定答案技巧：题干说腓特烈认识到土豆的潜力，但必须应对来自民众的某种东西；原文首句用 but faced the challenge of overcoming the people's prejudice against the plant 把困境说清楚——要克服的是“民众对土豆的偏见”。空格处在 the … from ordinary people 之间，要求填一个名词，原文中由 people's 直接修饰的名词正是 prejudice，因此答案是 prejudice。词性上，prejudice 是不可数名词，前面用 the 限定即可，不需要复数形式，也不要写成 prejudices 或加其他修饰词；同时按 ONE WORD ONLY 只写一个词。",
          "analysis": "第 8 段以普鲁士的腓特烈大帝为主线，讲他如何用巧妙的心理战术让民众接受土豆。定位句是段首：“Frederick the Great of Prussia saw the potato's potential to help feed his nation and lower the price of bread, but faced the challenge of overcoming the people's prejudice against the plant.”（普鲁士的腓特烈大帝看到了土豆在养活国民、降低面包价格方面的潜力，但面临着克服民众对这种植物的偏见的挑战）。题干把这句话拆成两半：前半句 “Frederick realised the potential of the potato” 对应 saw the potato's potential，后半句 “but he had to handle the … from ordinary people” 对应 faced the challenge of overcoming the people's prejudice，其中 the people's prejudice 被改写成 the … from ordinary people，空格处正是被 people's 修饰的那个名词。由此可见答案是 prejudice。同一段的后续内容也印证了这个困难确实来自民众：1774 年腓特烈下令臣民种土豆，科尔贝格镇回复说这种“东西既没气味也没味道，连狗都不吃”，可见民众的抵触情绪确实存在；腓特烈随后改用“反向心理”策略，用重兵看守皇家土豆田引诱附近农民来偷种，才绕过了这种偏见。综合看，答案只能是表示“偏见”的 prejudice。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "The King of Prussia adopted a form of ________ psychology to make people accept potatoes.",
          "translation": "普鲁士国王采用了一种反向心理（的策略）让人们接受土豆。",
          "answer": "reverse",
          "wordClass": "形容词（修饰其后的名词 psychology，作定语；填形容词原级 reverse，不改形式）",
          "locating": {
            "paragraph": "8",
            "quote": "Trying a less direct approach to encourage his subjects to begin planting potatoes, Frederick used a bit of reverse psychology: he planted a royal field of potato plants and stationed a heavy guard to protect this field from thieves."
          },
          "synonyms": [
            "“The King of Prussia” 同义替换为原文的 “Frederick the Great of Prussia”，头衔与人物对应",
            "“adopted a form of … psychology” 同义替换为原文的 “used a bit of reverse psychology”，used a bit of 与 adopted a form of 都表示采用了某种做法",
            "“to make people accept potatoes” 同义替换为原文的 “to encourage his subjects to begin planting potatoes”，“臣民开始种植”即民众接受土豆"
          ],
          "locatingTip": "定位：题干的关键词是专有名词 Prussia 与名词 psychology。psychology 一词在全文只出现一次，位于第 8 段中部的 “Frederick used a bit of reverse psychology”，只要扫读第 8 段找到 psychology 即可完成定位，无需读后面的具体情节。确定答案技巧：本题考的是修饰 psychology 的那个词。原文的表达是 reverse psychology（反向心理），题干把它改写为 “a form of … psychology”，把修饰语从形容词位置换成了空格里的未知信息，因此空格应填 reverse。判断时还可借助下文的情节互相验证：腓特烈故意派重兵看守自己的皇家土豆田，让附近农民以为“值得看守的东西就值得偷”，从而潜入偷走土豆苗回家种植，这种“越禁止越想要”的做法正是反向心理的典型操作。填写时注意 reverse 是形容词，保持原形且小写，不要写成 reversal、reversing 之类，也不要多写 a bit of。",
          "analysis": "第 8 段承接上文“民众抵触”的话题，讲腓特烈先用正面命令碰壁，再改用迂回策略。定位句是：“Trying a less direct approach to encourage his subjects to begin planting potatoes, Frederick used a bit of reverse psychology: he planted a royal field of potato plants and stationed a heavy guard to protect this field from thieves. Nearby peasants naturally assumed that anything worth guarding was worth stealing, and so sneaked into the field and snatched the plants for their home gardens. Of course, this was entirely in line with Frederick's wishes.”（为了鼓励臣民开始种植土豆，腓特烈尝试了一种不那么直接的办法，用了一点反向心理：他种了一片皇家土豆田，并派重兵看守以防盗贼。附近的农民自然认为，任何值得看守的东西都值得偷，于是潜入田里把土豆苗抢回家种在自己的园子里。当然，这完全符合腓特烈的意愿）。题干把这句话压缩成 “The King of Prussia adopted a form of [8] psychology to make people accept potatoes.”，其中 adopted a form of 概括了 used a bit of，to make people accept potatoes 概括了 to encourage his subjects to begin planting potatoes 与后文的结果，空格位于 psychology 之前，正对应原文用来修饰 psychology 的形容词 reverse。词性上 reverse 在这里作定语，修饰不可数名词 psychology，形式为原形；答案只能是一个单词，故填 reverse。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Before 1800, English people preferred eating ________ with bread, butter and cheese.",
          "translation": "1800 年以前，英国人的饮食以肉类为主，辅以面包、黄油和奶酪。",
          "answer": "meat",
          "wordClass": "名词（不可数，指“肉类”；作动名词 eating 的宾语，形式不变，不加冠词也不加复数）",
          "locating": {
            "paragraph": "9",
            "quote": "Prior to 1800, the English diet had consisted primarily of meat, supplemented by bread, butter and cheese."
          },
          "synonyms": [
            "“Before 1800” 同义替换为原文的 “Prior to 1800”，二者都表示 1800 年以前",
            "“English people preferred eating …” 同义替换为原文的 “the English diet had consisted primarily of …”，主食构成即饮食偏好",
            "“with bread, butter and cheese” 同义替换为原文的 “supplemented by bread, butter and cheese”，with 与 supplemented by 都表示“辅以、加上”"
          ],
          "locatingTip": "定位：题干的时间状语 Before 1800 与三个并列食物名 bread, butter and cheese 都是极好的定位词，第 9 段第二句同时具备这两项，扫读时数到 “Prior to 1800” 即可停下。确定答案技巧：本题考对“主次关系”的理解。原文说英国的饮食以 meat 为主（consisted primarily of meat），辅以 bread, butter and cheese（supplemented by …）。题干把三个辅食名词保留在 with 之后，把主食位置留空，因此空格要填的就是 primarily of 后面的那个名词 meat。注意不要把 bread、butter、cheese 填进空格，它们是题干已经给出的并列成分；同时 meat 是不可数名词，直接填原形，不加冠词、不加复数。",
          "analysis": "第 9 段讨论土豆对英格兰与威尔士工业时代人口激增的影响，中间部分交代了原先的饮食结构。定位句为：“Prior to 1800, the English diet had consisted primarily of meat, supplemented by bread, butter and cheese.”（1800 年以前，英国人的日常饮食主要由肉类构成，以面包、黄油和奶酪为辅）。紧随其后的两句进一步补充：“Few vegetables were consumed, most vegetables being regarded as nutritionally worthless and potentially harmful. This view began to change gradually in the late 1700s.”（当时几乎不吃蔬菜，多数蔬菜被认为毫无营养甚至有害；这种看法在 18 世纪后期才开始逐渐改变）。题干把定位句改写为 “Before 1800, English people preferred eating [9] with bread, butter and cheese.”：Before 1800 对应 Prior to 1800，English people preferred eating 对应 the English diet had consisted primarily of，with 对应 supplemented by。原文的语序是先主食后辅食，题干保留了辅食并把主食挖空，因此空格应填原文中占据主要地位的食物 meat。从词性上看，eating 是动名词，其后需要名词作宾语，meat 在此为不可数名词，无需冠词与复数变化，按原文形式填 meat 即可。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "The obvious way to deal with England's food problems was high-yielding potato ________ .",
          "translation": "解决英格兰粮食问题的显而易见的方法是高产的土豆作物。",
          "answer": "crops",
          "wordClass": "名词（复数，指“作物”；空格位于系动词 was 之后，与 high-yielding potato 一起作表语；原文为复数 crops，故用复数形式）",
          "locating": {
            "paragraph": "9",
            "quote": "High-yielding, easily prepared potato crops were the obvious solution to England's food problems."
          },
          "synonyms": [
            "“The obvious way to deal with England's food problems” 同义替换为原文的 “the obvious solution to England's food problems”，way to deal with 与 solution to 同义",
            "“High-yielding … potato crops” 与原文的 “High-yielding, easily prepared potato crops” 对应，原文另有一个并列形容词 easily prepared（易烹制），题干未保留",
            "“was” 与原文的 “were” 对应：原文主语是复数的 crops（谓语用 were），题干的主语是 The obvious way，被留空的是表语部分的中心名词，仍须与原文形式一致，故填复数 crops"
          ],
          "locatingTip": "定位：题干的关键词 England's food problems 与形容词 high-yielding 都出现在第 9 段最后一句，该句是段落收束句，扫读到 food problems 或 high-yielding 均可一步锁定。确定答案技巧：题干的结构是“high-yielding potato [10] 就是 obvious way”，与原文的 “High-yielding, easily prepared potato crops were the obvious solution to England's food problems” 完全同构，只把主语中心词留空，因此空格填 crops。作答时必须留意数的一致性：原文主语是复数名词 crops、谓语用 were；题干的主语换成了 The obvious way、谓语是 was，不能靠题干的谓语判断单复数，必须回到原文照写复数 crops 而非 crop；同时按 ONE WORD ONLY 只写一个词，不要写成 potato crops。",
          "analysis": "第 9 段先提出历史学家的争论（土豆到底是英格兰和威尔士工业时代人口激增的原因还是结果），接着描述 1800 年前后饮食与城市生活的变化：工业化把越来越多的人卷入拥挤的城市，最富有的人才买得起带烤炉或储煤室的房子，人们每天要工作 12 到 16 小时，几乎没有时间精力做饭。段落最后一句是本题定位句：“High-yielding, easily prepared potato crops were the obvious solution to England's food problems.”（高产且易于烹制的土豆作物，是英格兰粮食问题的明显解决办法）。题干把它改写为 “The obvious way to deal with England's food problems was high-yielding potato [10].”：the obvious solution to 同义替换为 the obvious way to deal with，England's food problems 原词复现，主语部分 High-yielding, easily prepared potato crops 被简化为 High-yielding potato 加空格，被省去的中心名词就是 crops。从语法看，原文主语是复数名词短语，谓语用 were，题干需要一个与 high-yielding 搭配的名词中心词，且必须为复数形式才与原文的 crops 一致，因此答案是 crops。这一句同时呼应了上一句提到的“没时间没精力做饭”，说明土豆之所以成为答案，正是因为它高产又易烹制。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The Irish ________ and climate suited potatoes well.",
          "translation": "爱尔兰的土壤和气候非常适合土豆生长。",
          "answer": "soil",
          "wordClass": "名词（不可数，指“土壤”；与 climate 并列作主语，前面有 the Irish 限定，形式不变）",
          "locating": {
            "paragraph": "10",
            "quote": "The potato was well suited to the Irish soil and climate, and its high yield suited the most important concern of most Irish farmers: to feed their families."
          },
          "synonyms": [
            "“The Irish … and climate suited potatoes well” 同义替换为原文的 “The potato was well suited to the Irish soil and climate”，原文用被动、题干用主动，主客关系互换",
            "“suited potatoes well” 同义替换为原文的 “was well suited to the Irish soil and climate”，well suited 原词复现，主动与被动互换",
            "“climate” 在原文中原词复现，提示空格所填的应是与之并列的另一个自然条件名词"
          ],
          "locatingTip": "定位：题干关键词是 Irish 与 climate，第 10 段第二句 “The potato was well suited to the Irish soil and climate” 一次命中，且 climate 在全篇极少出现，定位效率很高。确定答案技巧：题干是 “The Irish [11] and climate suited potatoes well”，呈“A and B suited”的并列结构；原文则说 “The potato was well suited to the Irish soil and climate”，即土豆适应爱尔兰的 soil and climate。两边的并列项一一对应：climate 对 climate，Irish 对 Irish，剩下的 A 就是原文的 soil。注意语态变化带来的位置调整——原文的主语是土豆，soil and climate 在介词 to 之后；题干把 soil and climate 提为主语，土豆成了宾语，但并列成分之间的对应关系不变。答案为一个词 soil，不加冠词。",
          "analysis": "第 10 段把爱尔兰农民与欧洲其他地区作对比：“Whereas most of their neighbours regarded the potato with suspicion and had to be persuaded to use it by the upper classes, the Irish peasantry embraced the tuber more passionately than anyone since the Incas. The potato was well suited to the Irish soil and climate, and its high yield suited the most important concern of most Irish farmers: to feed their families.”（当邻居们大多对土豆心存疑虑、要靠上层阶级劝说才肯食用时，爱尔兰农民比自印加人以来的任何人都更热情地接受了这种块茎。土豆非常适合爱尔兰的土壤和气候，它的高产也最契合大多数爱尔兰农民最关心的事：养活家人）。定位句用 was well suited to 引出两个自然条件 soil 与 climate，题干把这两个条件提作句子的主语，写成 “The Irish [11] and climate suited potatoes well”，把原文的被动结构换成主动结构，同时保留了 Irish 与 climate 两个已知项，空格对应的正是并列项中的 soil。从词性看，soil 在此是不可数名词，与 climate 一起作 suited 的主语，前面有 the Irish 作定语，因此直接填 soil 即可，不加冠词、不变复数。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Between 1780 and 1841, thanks to the ________ of the potato, the Irish population doubled to eight million.",
          "translation": "1780 年到 1841 年间，由于土豆的广泛种植，爱尔兰人口翻倍达到八百万。",
          "answer": "cultivation",
          "wordClass": "名词（不可数，指“种植、栽培”；位于 the … of the potato 结构中作中心词，形式不变）",
          "locating": {
            "paragraph": "11",
            "quote": "The Irish population doubled to eight million between 1780 and 1841, this without any significant expansion of industry or reform of agricultural techniques beyond the widespread cultivation of the potato."
          },
          "synonyms": [
            "“the Irish population doubled to eight million” 在原文中原词复现：“The Irish population doubled to eight million”",
            "“Between 1780 and 1841” 在原文中原词复现，只是语序由句末移到句首",
            "“thanks to the … of the potato” 同义替换为原文的 “beyond the widespread cultivation of the potato”，原文用 beyond 引出“除……之外别无其他原因”的这一项因素，实质就是人口翻倍的主要依托",
            "“the … of the potato” 与原文 “the widespread cultivation of the potato” 结构对应，空格承担的是 of the potato 之前的中心名词"
          ],
          "locatingTip": "定位：题干给出的年份区间 1780 and 1841 与数字 eight million 都是极精准的定位词，在第 11 段的第二句 “The Irish population doubled to eight million between 1780 and 1841” 中同时出现，可一步锁定。确定答案技巧：题干用 “thanks to the [12] of the potato” 表达原因，需要在原文中找到“土豆的某种动作/过程”来解释人口为何翻倍。原文说这一翻倍发生在“没有工业显著扩张、也没有农业技术革新”的条件下，唯一超出常规的因素是 “the widespread cultivation of the potato”（土豆的广泛种植），因此空格要填的是 cultivation。作答时注意空格处在 the … of the potato 的结构中，需要填名词，且必须取自原文的单词形式 cultivation；不要误填 expansion、reform（这两个词出现在否定的条件里）或 techniques（同样是被否定的部分）。",
          "analysis": "第 11 段以爱尔兰为最戏剧性的案例，说明土豆改变人口格局的潜力。定位句为：“The most dramatic example of the potato's potential to alter population patterns occurred in Ireland, where the potato had become a staple by 1800. The Irish population doubled to eight million between 1780 and 1841, this without any significant expansion of industry or reform of agricultural techniques beyond the widespread cultivation of the potato.”（土豆改变人口分布的潜力最戏剧性的例子出现在爱尔兰，那里的土豆到 1800 年已成为主食。1780 年至 1841 年间，爱尔兰人口翻倍达到八百万，而这一增长并没有伴随工业的显著扩张，也没有农业技术的革新，唯一的变数就是土豆被广泛种植）。这段话的因果结构非常清楚：人口翻倍这件事，排除了工业与农技两个常规因素后，剩下的就是 “the widespread cultivation of the potato”。题干写成 “thanks to the [12] of the potato, the Irish population doubled to eight million”，把原文的 beyond 状语改写成 thanks to 引出的原因短语，结构与 the widespread cultivation of the potato 严丝合缝，空格处正是 of the potato 前面的中心名词 cultivation。词性上 cultivation 是从动词 cultivate 派生的不可数名词，前面用 the 限定即可，无需复数，也不必加 widespread 之类的修饰词（题目要求 ONE WORD ONLY）。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "The potato's high yields helped the poorest farmers to produce more healthy food almost without ________ .",
          "translation": "土豆的高产量帮助最贫穷的农民几乎不用投入就能生产出更多健康食物。",
          "answer": "investment",
          "wordClass": "名词（不可数，指“投资、投入”；位于介词 without 之后作宾语，形式不变）",
          "locating": {
            "paragraph": "11",
            "quote": "the potato's high yields allowed even the poorest farmers to produce more healthy food than they needed with scarcely any investment or hard labour"
          },
          "synonyms": [
            "“The potato's high yields helped the poorest farmers to produce more healthy food” 同义替换为原文的 “the potato's high yields allowed even the poorest farmers to produce more healthy food”，helped 与 allowed 同义，even 强调连最贫穷的农民也不例外",
            "“almost without …” 同义替换为原文的 “with scarcely any …”，scarcely any 与 almost without 都表示“几乎没有”",
            "“without …” 与原文 “with scarcely any investment or hard labour” 对应，空格承担的是被 scarcely any 修饰的那个名词"
          ],
          "locatingTip": "定位：题干关键词是 the poorest farmers 与 high yields，二者同时出现在第 11 段倒数第三句，即 “the potato's high yields allowed even the poorest farmers …”，扫读到 poorest farmers 即可停下。确定答案技巧：题干用 “almost without [13]” 表达“几乎没有付出什么”，原文对应的表达是 “with scarcely any investment or hard labour”。两者属于同义改写：almost without 对应 scarcely any，空格承担的是 investment 一词；原文里 or hard labour 是并列的第二个成分，题干并未保留，因此填空只需写出投资这一项。作答时要留意两点：一是空格在介词 without 之后，必须填名词，investment 符合词性；二是 ONE WORD ONLY，不要写成 investments 或把 hard labour 一并填入。",
          "analysis": "第 11 段后半部分解释爱尔兰人口为何能在没有任何工业化或农技革新支撑下翻倍。定位句为：“Though Irish landholding practices were primitive in comparison with those of England, the potato's high yields allowed even the poorest farmers to produce more healthy food than they needed with scarcely any investment or hard labour.”（尽管爱尔兰的土地持有方式与英格兰相比十分原始，但土豆的高产让连最贫穷的农民也能以几乎可以忽略不计的投入和体力劳动，生产出超过自身所需量的更健康的食物）。题干把这句话改写为 “The potato's high yields helped the poorest farmers to produce more healthy food almost without [13].”，其中 helped 对应 allowed，more healthy food 后省略了原文的 than they needed，almost without 对应 with scarcely any，空格处正是被 scarcely any 修饰的名词 investment。从语法看，without 是介词，其宾语应为名词或名词性成分，investment 作为不可数名词原形即可满足要求。紧接着的下一句 “Even children could easily plant, harvest and cook potatoes, which of course required no threshing, curing or grinding.”（连孩子都能轻松种植、收获和烹制土豆，当然也不需要脱粒、腌制或研磨）进一步说明土豆的种植与加工几乎不费力，与“几乎没有投入”的判定互相印证，也提示空格处不应填 threshing、curing、grinding 这类加工环节的名称。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
