(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-90", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-90",
  "meta": {
    "examId": "p1-high-90",
    "title": "The History of Tea 茶叶的历史",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–7 完成句子填空（Choose ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 7
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Researchers believe the tea containers detected in ________ from the Han Dynasty were the first evidence of the use of tea.",
          "translation": "研究人员认为，在汉代________中检测到的茶叶容器是饮茶最早（最早用茶）的证据。",
          "answer": "tombs",
          "wordClass": "名词（复数；位于介词 in 之后作介词宾语，原文指多处墓葬，故用复数 tombs）",
          "locating": {
            "paragraph": "1",
            "quote": "Containers for tea have been found in tombs dating from the Han Dynasty (206 BC–220 AD)"
          },
          "synonyms": [
            "“the tea containers detected in …” 同义替换为原文的 “Containers for tea have been found in …”，原文的被动 “have been found in”（被发现于）对应题干的 “detected in”（被检测/发现于）",
            "“from the Han Dynasty” 在原文中原词复现：“dating from the Han Dynasty (206 BC–220 AD)”",
            "“were the first evidence of the use of tea” 对应原文本句所提供的事实：这些容器是目前所见最早的与茶有关的实物证据（原文虽未逐字写 evidence，但“在汉代墓葬中发现茶容器”正是题干所说的“最早用茶的证据”）"
          ],
          "locatingTip": "定位：题干中的专用名词 Han Dynasty（朝代名，首字母大写）与 tea containers 都很好找，全文只有第 1 段提到汉代，扫读时看到 Han Dynasty 就停下精读该句。确定答案技巧：题干说“茶叶容器被发现于汉代的某个地方”，原文对应结构是 “Containers for tea have been found in tombs dating from the Han Dynasty”，即“茶容器被发现于墓葬之中”，介词 in 后面的宾语 tombs 就是空格所需的词。注意 ONE WORD ONLY，只要写 tombs，不要写成 the tombs 或 tomb（原文与题干都指向多处墓葬，且答案表为复数形式）。",
          "analysis": "第 1 段是全文开篇，先讲神农的传说，再讲茶在中国的确立。定位句在段末：“Containers for tea have been found in tombs dating from the Han Dynasty (206 BC–220 AD), but it was under the Tang Dynasty (618–906 AD) that tea became firmly established as the national drink of China.”（汉代即公元前 206 年至公元 220 年的墓葬中已发现茶具，但直到唐代（公元 618—906 年）茶才真正确立为中国的国民饮品）。题干把原文的 “Containers for tea have been found in tombs” 改写为 “the tea containers detected in ________”，句子骨架（容器、地点、朝代）一一对应，唯一被隐去的信息点就是“发现的地点”——原文用介词 in 引出 tombs，因此空格填 tombs。另外句中 dating from the Han Dynasty 与题干的 from the Han Dynasty 完全一致，说明这一句就是本题的唯一落点。从词性看，空格在介词 in 之后，需要名词或名词性成分；原文用的是复数 tombs（汉代许多墓葬中都出土过茶具），所以答案写复数形式 tombs。",
          "traps": []
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Lu Yu wrote a ________ about tea before anyone else in the eighth century.",
          "translation": "陆羽在八世纪时，比任何人都早地写了一部关于茶的________。",
          "answer": "book",
          "wordClass": "名词（单数；空格前有不定冠词 a，与 a 构成名词短语作 wrote 的宾语，指“一部书”，故用单数形式 book）",
          "locating": {
            "paragraph": "2",
            "quote": "during the late eighth century a writer called Lu Yu wrote the first book entirely about tea, the Ch’a Ching, or Tea Classic"
          },
          "synonyms": [
            "“Lu Yu wrote …” 在原文中原词复现：“a writer called Lu Yu wrote …”",
            "“before anyone else” 同义替换为原文的 “the first”（第一本、最先的）",
            "“in the eighth century” 同义替换为原文的 “during the late eighth century”（八世纪后期属于八世纪之内）",
            "“wrote a … about tea” 对应原文的 “wrote the first book entirely about tea”，entirely about 对应 about"
          ],
          "locatingTip": "定位：本题的黄金定位词是人名 Lu Yu（同为第 2 段的人名还有日本僧人，但 Lu Yu 在全篇只出现一次），以及时间词 eighth century。看到 Lu Yu 即可锁定第 2 段第 1 句。确定答案技巧：题干说“陆羽写了一部关于茶的什么”，原文用的是 “wrote the first book entirely about tea”，其中 the first 对应题干 before anyone else，wrote … about tea 之间的中心名词就是 book。填词时注意空格前已有冠词 a，答案是单数名词 book，不要写 books，也不要写原文中的书名 Ch’a Ching（那是同位语补充说明，且题干已用 about tea 概括了它的内容）。",
          "analysis": "第 2 段首句：“It became such a favourite that during the late eighth century a writer called Lu Yu wrote the first book entirely about tea, the Ch’a Ching, or Tea Classic.”（茶受欢迎到这种程度：八世纪后期，一位名叫陆羽的作者写下了第一本完全关于茶的著作——《茶经》）。原文的关键信息有三点：时间（late eighth century）、人物（Lu Yu）、事件（wrote the first book entirely about tea）。题干把这三条信息重新包装：late eighth century 被简化为 in the eighth century（时间范围包含关系），the first 被改写为 before anyone else（同义替换，都是“最早、最先”），唯一缺失的就是“写了什么”，即 book。因此空格填 book。语法上，空格前有不定冠词 a，说明需要单数可数名词；原文的 the first book 也是单数，两者在数上一致。",
          "traps": []
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "It was ________ from Japan who brought tea to their native country from China.",
          "translation": "是来自日本的________把茶从中国带回了他们的祖国。",
          "answer": "monks",
          "wordClass": "名词（复数，指多名僧人；空格位于系动词 was 之后，在强调句中作表语；其后 who brought 引导的定语从句修饰它，故用复数 monks）",
          "locating": {
            "paragraph": "2",
            "quote": "It was shortly after this that tea was first introduced to Japan, by Japanese Buddhist monks who had travelled to China to study."
          },
          "synonyms": [
            "“from Japan” 对应原文的 “to Japan … by Japanese Buddhist monks”，Japanese 与 Japan 同源，都指向日本",
            "“brought tea to their native country from China” 同义替换为原文的 “tea was first introduced to Japan, by Japanese Buddhist monks who had travelled to China”",
            "“who brought tea” 对应原文关系从句 “who had travelled to China to study”，动作发出者为同一批人"
          ],
          "locatingTip": "定位：题干的两个关键信息是 Japan 与 China，第 2 段第 2 句同时出现这两个国家名，并且交代了“由谁把茶传入日本”。确定答案技巧：题干是一个强调句 “It was ________ from Japan who brought tea…”，强调的对象是“做什么的人”。回原文对应句 “tea was first introduced to Japan, by Japanese Buddhist monks who had travelled to China to study”，动作 by 后面的施动者就是 Japanese Buddhist monks。题干已经把 Japanese 放进 “from Japan” 短语里重复表达，空格只需填核心名词 monks。注意必须用复数：原文是 monks，题干谓语 who brought 也为复数，且空格前没有任何冠词，故填 monks 而不是 monk 或 Buddhist monks（超出 ONE WORD 限制）。",
          "analysis": "第 2 段第 2 句：“It was shortly after this that tea was first introduced to Japan, by Japanese Buddhist monks who had travelled to China to study.”（此后不久，茶第一次传入日本，是由前往中国学习的日本佛教僧人带过去的）。题干用的是强调句型 “It was … who brought tea to their native country from China”，把原文的被动句 “tea was first introduced to Japan, by …” 还原为主动句：原文 by 后的施动者 Japanese Buddhist monks 在题干中升格为主语，而 Japanese 这一国别信息被题干挪到 “from Japan” 中另作交代，于是空格剩下的核心词就是 monks。要点有两个：一是必须识别出 “from Japan” 已包含 Japanese，不要重复填 Japanese；二是必须写复数 monks，因为原文是复数，题干的关系代词 who 与 brought 也要求复数先行词。",
          "traps": []
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Tea was carried from China to Europe by the ________.",
          "translation": "茶由________从中国运往欧洲。",
          "answer": "dutch",
          "wordClass": "专有名词（国籍名词，指荷兰人 the Dutch，通常首字母大写；空格位于介词 by 之后，与 the 一起构成施动者，答案按小写形式 dutch 填写）",
          "locating": {
            "paragraph": "4",
            "quote": "This was done by the Dutch, who in the last years of the sixteenth century began to encroach on Portuguese trading routes in the East."
          },
          "synonyms": [
            "“Tea was carried … by the …” 同义替换为原文的 “This was done by the Dutch”，This 回指上一段末句所说的 “ship back tea as a commercial import”（把茶作为商品运回本国）",
            "“from China to Europe” 对应原文第 4 段交代的航线：“the first consignment of tea was shipped from China to Holland”（首批茶从中国运往荷兰）",
            "“the Dutch” 在原文中原词复现（The Dutch 作名词，指荷兰人）；题干用被动语态 by the …，原文也是被动结构 This was done by …, 语态完全对应"
          ],
          "locatingTip": "定位：题干问的是“由谁把茶从中国运到欧洲”。第 3 段末句先出现 “it was not the Portuguese who were the first to ship back tea as a commercial import”（不是葡萄牙人），第 4 段首句紧接着给出答案 “This was done by the Dutch”。因此扫到第 4 段首句即命中。确定答案技巧：注意题干与原文的衔接结构——第 3 段末句用 not the Portuguese 作否定铺垫，第 4 段的 This 正是承接“把茶作商业进口运回”这件事，was done by the Dutch 就是施动者。答案表给出的小写形式是 dutch，照抄即可（原文写作大写 Dutch，因为它是国籍名词作名词用，必须大写）。",
          "analysis": "第 3 段讲欧洲在茶的历史上起步较晚，末句特意点明“不是葡萄牙人最先（以商业进口的方式）运茶回国”。第 4 段紧接着给出真正的答案：“This was done by the Dutch, who in the last years of the sixteenth century began to encroach on Portuguese trading routes in the East.”（这件事是荷兰人做的，他们在十六世纪最后的几年开始侵占葡萄牙人在东方的贸易航线）。随后该段继续交代：荷兰人在爪哇岛建立贸易站，1606 年首批茶叶经由爪哇从中国运抵荷兰。题干 “Tea was carried from China to Europe by the ________” 与原文 “the first consignment of tea was shipped from China to Holland” 完全对应，施动者即 the Dutch。此处还有一处容易失分的细节：题干的 by the 提示空格填的是名词性成分，与原文 by the Dutch 的结构一致；考生不要误填 Portuguese（那是被原文明确否定的干扰项，第 3 段已经说“不是葡萄牙人”）。答案按答案表原样写小写 dutch，不要改写为 Holland 或 Netherlands（那是国家而非人）。",
          "traps": []
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The British government had to cut the taxation on tea because of the serious crime of ________.",
          "translation": "由于严重的________犯罪，英国政府不得不削减茶叶税。",
          "answer": "smuggling",
          "wordClass": "名词（不可数，动名词形式；位于 the serious crime of 之后作介词宾语，指走私这一行为）",
          "locating": {
            "paragraph": "7",
            "quote": "One unforeseen consequence of the taxation of tea was the growth of methods to avoid taxation—smuggling and adulteration."
          },
          "synonyms": [
            "“the taxation on tea” 在原文中原词复现：“the taxation of tea”",
            "“the serious crime of …” 同义替换为原文的 “methods to avoid taxation—smuggling”，原文用 criminal gangs、organised-crime network 等词反复强调其“犯罪”性质",
            "“had to cut the taxation … because of …” 对应原文第 8 段的因果链：“heavy taxation was creating more problems than it was worth. … slashed the tax from 119 per cent to 12.5 per cent”（重税造成的问题超过其价值，于是大幅减税）"
          ],
          "locatingTip": "定位：题干的定位词是 taxation 与 crime。全文集中讨论“税收”与“走私”的是第 7、8 两段；第 7 段首句直接给出 “One unforeseen consequence of the taxation of tea was the growth of methods to avoid taxation—smuggling and adulteration”，破折号后面并列出两个后果：smuggling（走私）与 adulteration（掺假）。确定答案技巧：题干说的是“严重的犯罪（serious crime）”：adulteration 是掺假，属于质量造假；而走私（smuggling）才是原文用 criminal gangs、organised-crime network（犯罪团伙、有组织犯罪网络）大幅渲染的“犯罪”行为，故答案是 smuggling。填写时注意保持原文的动名词形式 smuggling，不要写 smuggle 或 smuggling trade（ONE WORD ONLY）。",
          "analysis": "第 7 段首句是本题的定位句：“One unforeseen consequence of the taxation of tea was the growth of methods to avoid taxation—smuggling and adulteration.”（对茶征税的一个始料未及的后果，是逃避税收的手段不断滋生——走私与掺假）。该段随后用大量篇幅渲染走私的规模：从“小规模的非法交易（small-time illegal trade）”发展到“令人震惊的有组织犯罪网络（an astonishing organised-crime network）”，年进口量甚至高达七百万磅，超过合法进口的五百万磅。第 8 段则交代政府的反应：“By 1784, the government realised that enough was enough, and that heavy taxation was creating more problems than it was worth. The new Prime Minister, William Pitt the Younger, slashed the tax from 119 per cent to 12.5 per cent.”（到 1784 年，政府意识到不能再这样下去，重税造成的问题已经超过其价值；新首相小威廉·皮特把税率从 119% 猛砍到 12.5%）。可见题干 “The British government had to cut the taxation on tea because of the serious crime of ________” 正是这条因果链的概括：重税导致走私猖獗（犯罪），政府因这些问题被迫减税，空格填 smuggling。注意区分并列出现的 adulteration：掺假是第 8 段讨论的另一后果，且原文强调“走私进来的茶叶未经海关质量检验，因而更容易被掺假”，掺假并非题干中与 criminal gangs 对应的“严重的犯罪”。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Tea was planted in ________ besides China in the 19th century.",
          "translation": "十九世纪时，除中国以外，茶也被种植在________。",
          "answer": "india",
          "wordClass": "专有名词（国家名 India，通常首字母大写；空格位于介词 in 之后作介词宾语，与 in 构成地点状语，答案按小写形式 india 填写）",
          "locating": {
            "paragraph": "9",
            "quote": "the end of its monopoly stimulated the East India Company to consider growing tea outside China. India had always been the centre of the Company's operations, which led to the increased cultivation of tea in India, beginning in Assam."
          },
          "synonyms": [
            "“besides China” 同义替换为原文的 “outside China”（在中国之外）",
            "“Tea was planted in …” 同义替换为原文的 “the increased cultivation of tea in India”（在印度扩大种茶规模）",
            "“in the 19th century” 对应原文的时间线索：垄断结束于 1834 年，“by 1888 British tea imports from India were for the first time greater than those from China”"
          ],
          "locatingTip": "定位：题干的关键信息是“在中国之外种茶”，原文第 9 段有 “growing tea outside China”，与题干 besides China 高度对应，可直接锁定第 9 段。确定答案技巧：找到 outside China 后，紧接着读下一句 “India had always been the centre of the Company's operations, which led to the increased cultivation of tea in India, beginning in Assam”，种茶的地点被反复点明为 India，且 Assam（阿萨姆）正是印度的一个产茶区，两个信息互相印证。时间上原文的 1834（垄断结束）与 1888（进口量超过中国）都落在十九世纪，与题干 in the 19th century 一致。答案填 India 一个词，注意首字母大写；不要写 Assam（那是印度境内的具体产地，属于下位信息），也不要写 Holland（荷兰只是转运地，不是种植地）。",
          "analysis": "第 9 段讲东印度公司失去对华贸易垄断后的连锁反应：“Another great impetus to tea-drinking resulted from the end of the East India Company's monopoly on trade with China, in 1834. Before that date, China was the country of origin of the vast majority of the tea imported to Britain, but the end of its monopoly stimulated the East India Company to consider growing tea outside China. India had always been the centre of the Company's operations, which led to the increased cultivation of tea in India, beginning in Assam.”（1834 年东印度公司对华贸易垄断结束，成为饮茶的另一大推动力。在此之前，英国进口的绝大多数茶叶都产自中国；垄断终结后，公司开始考虑在中国之外种茶。印度一直是该公司经营的中心，于是从阿萨姆开始，印度的茶叶种植规模不断扩大）。题干的 “Tea was planted in ________ besides China” 正是 “growing tea outside China … the increased cultivation of tea in India” 的概括：除中国之外的种植地就是 India。填词要点：空格在介词 in 之后需要地名或国家名，原文中种茶的地点被明确表述为 India（首字母大写），因此答案写 India 一个单词。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "In order to compete in shipping speed, traders used ________ for the race.",
          "translation": "为了在运输速度上竞争，商人们使用________来参加这场竞赛。",
          "answer": "clippers",
          "wordClass": "名词（复数，指多艘快速帆船；空格位于及物动词 used 之后作宾语，原文用复数 clippers）",
          "locating": {
            "paragraph": "11",
            "quote": "using fast new clippers which had sleek lines, tall masts and huge sails"
          },
          "synonyms": [
            "“for the race” 同义替换为原文的 “raced to bring home the tea” 与 “the famous clipper races”",
            "“In order to compete in shipping speed” 同义替换为原文的 “there was competition between British and American merchants” 及 “raced to bring home the tea and make the most money”",
            "“traders used …” 同义替换为原文的 “Individual merchants and sea-captains … using fast new clippers”，merchants 对应 traders，using 对应 used"
          ],
          "locatingTip": "定位：题干的 race 是核心线索，第 10 段末尾出现 “the tea trade became a virtual free-for-all”，第 11 段则连续出现 raced、clipper races，直接锁定第 11 段。确定答案技巧：题干问“商人们为了比速度而使用了什么”，原文对应结构是 “Individual merchants and sea-captains with their own ships raced to bring home the tea and make the most money, using fast new clippers which had sleek lines, tall masts and huge sails.”，其中 raced 对应题干的 for the race，using 后面所接的宾语正是被使用的工具——fast new clippers。因此空格填 clippers（快速帆船）。注意 ONE WORD ONLY，只写 clippers 一个词，不要写成 tea clippers 或 fast new clippers；同时要用复数，因为原文是复数，且题干说的是商人们普遍使用的船只类型。",
          "analysis": "第 10 段讲垄断结束后茶贸易变成“自由混战”，第 11 段具体描写竞争方式：“Individual merchants and sea-captains with their own ships raced to bring home the tea and make the most money, using fast new clippers which had sleek lines, tall masts and huge sails. In particular, there was competition between British and American merchants, leading to the famous clipper races of the 1860s.”（拥有船只的个体商人和船长们争相把茶运回本国以赚取最大利润，他们使用的是线条流畅、桅杆高耸、帆面巨大的新型快速帆船。尤其是英美商人之间的竞争，造就了 1860 年代著名的飞剪船竞赛）。题干的三段信息都能在此句中一一落实：traders 对应 merchants and sea-captains，compete in shipping speed 对应 raced to bring home the tea 与 the famous clipper races，used 对应 using。被使用的工具就是 clippers。从词性看，空格位于及物动词 used 之后作宾语，需要名词（复数形式），与原文的 fast new clippers 一致。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Tea was popular in Britain in the 16th century.",
          "translation": "十六世纪的英国，茶很受欢迎。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Britain, always a little suspicious of continental trends, had yet to become the nation of tea-drinkers that it is today."
          },
          "synonyms": [
            "“Britain” 在原文中原词复现（英国）",
            "“was popular” 与原文的 “had yet to become the nation of tea-drinkers”（尚未成为饮茶之国）在方向上相互冲突：原文说的是英国还没形成饮茶的风气",
            "“in the 16th century” 对应原文第 3、4 段的时间线索：十六世纪后期茶才在欧洲（葡萄牙人、荷兰人中间）被零星提及，第 5 段接着说英国对此还毫无反应，直到 1600 年东印度公司成立、1652 年伦敦才出现第一家咖啡馆"
          ],
          "locatingTip": "定位：题干的关键词是 Britain，全篇集中讨论英国与茶的时间线在第 5 至第 8 段，其中第 5 段首句 “Britain, always a little suspicious of continental trends, had yet to become the nation of tea-drinkers that it is today.” 是直接评价英国饮茶状况的句子，一步命中。确定答案技巧：判断题要抓住“时间 + 状态”这一组合。原文说英国“尚未（had yet to become）”成为饮茶之国，并接着补充 1652 年伦敦才有第一家咖啡馆、茶对多数人依然陌生（tea was still somewhat unfamiliar to most readers），说明茶在英国流行起来已是十七世纪以后的事；而题干把它提前到了十六世纪并断言“很受欢迎”，与原文的时间与状态都相反，故判 FALSE。这类题目要注意 had yet to 表示“还没有”，属于明确的否定信息，不是信息缺失。",
          "analysis": "第 3 段交代十六世纪后期的欧洲状况：茶只是被少数在东方生活的葡萄牙商人、传教士“简要提及（the first brief mentions）”。第 4 段说荷兰人在十六世纪末开始插手东方的葡萄牙航线，1606 年首批茶叶才从中国运到荷兰，茶在荷兰流行并传到西欧其他国家的富人圈。第 5 段正式谈英国：“Britain, always a little suspicious of continental trends, had yet to become the nation of tea-drinkers that it is today. Starting in 1600, the British East India Company had a monopoly on importing goods from outside Europe, and it is likely that sailors on these ships brought tea home as gifts. The first coffee-house had been established in London in 1652, and tea was still somewhat unfamiliar to most readers, so it is fair to assume that the drink was still something of a curiosity.”（英国一向对欧洲大陆的潮流心存疑虑，当时还远未成为今天这样一个饮茶之国。从 1600 年起，英国东印度公司垄断了来自欧洲以外的货物进口，船上的水手很可能把茶当作礼物带回家。伦敦的第一家咖啡馆 1652 年才开张，当时茶对大多数读者来说仍相当陌生，因此可以说它还只是个新奇之物）。这段话把英国与茶的关系定调为“尚未开始”：had yet to become the nation of tea-drinkers、tea was still somewhat unfamiliar、something of a curiosity 三处都在说英国当时并不了解、也不流行喝茶。题干宣称十六世纪英国茶“很受欢迎（was popular）”，与原文的否定表述直接对立，故答案是 FALSE。做题时要注意年代对应关系：题干给的十六世纪，恰好是原文中英国完全缺席、欧洲大陆才开始零星接触茶的阶段。",
          "traps": [
            "为什么不是 TRUE：原文用 “had yet to become the nation of tea-drinkers that it is today” 明确说英国当时还不是饮茶之国，并补充 “tea was still somewhat unfamiliar to most readers”“the drink was still something of a curiosity”，三处都是否定的表述。题干说茶在英国“很受欢迎”，与原文相反，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对英国在那一阶段是否饮茶、是否了解茶都有明确交代（尚未成为饮茶之国、茶还很陌生），属于存在明确且相反的信息，不是没有提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Tea was more fashionable than coffee in Europe in the late 16th century.",
          "translation": "十六世纪后期，茶在欧洲比咖啡更时髦。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Tea soon became a fashionable drink among the Dutch, and from there spread to other countries in continental western Europe, but because of its high price it remained a drink for the wealthy."
          },
          "synonyms": [
            "“fashionable” 在原文中原词复现：“a fashionable drink among the Dutch”",
            "“Europe” 对应原文的 “other countries in continental western Europe”（西欧大陆各国），荷兰是其起点",
            "“more … than coffee” 在原文中找不到任何对应：原文提到咖啡只有两处——第 5 段的 “The first coffee-house had been established in London in 1652” 与第 6 段的 “it became a popular drink in coffee-houses”，两处都只把咖啡馆当作场所，没有对茶与咖啡的流行程度作任何比较"
          ],
          "locatingTip": "定位：题干的关键词是 fashionable 和 Europe，第 4 段中间句 “Tea soon became a fashionable drink among the Dutch, and from there spread to other countries in continental western Europe” 与题干前半部分高度吻合，可直接定位到第 4 段。确定答案技巧：判断 NOT GIVEN 的关键在于题干多出来的比较结构 “more fashionable than coffee”。回到原文核对：茶在荷兰和西欧的确变得时髦（fashionable 一词确实存在），但原文从未把它与咖啡对比——原文提到咖啡只有两处（第 5 段伦敦第一家咖啡馆建于 1652 年、第 6 段茶在 coffee-houses 中逐渐流行），既没说咖啡的流行程度，也没有任何“茶比咖啡更时髦”的信息。题干加入了原文没有的比较关系，属于信息缺失，故判 NOT GIVEN。切忌因为原文确实有 fashionable 一词就选 TRUE。",
          "analysis": "第 3 段末指出欧洲当时刚开始零星接触茶，第 4 段接着写荷兰人的商业行动：“By the turn of the century they had established a trading post on the island of Java, and it was via Java that in 1606 the first consignment of tea was shipped from China to Holland. Tea soon became a fashionable drink among the Dutch, and from there spread to other countries in continental western Europe, but because of its high price it remained a drink for the wealthy.”（到世纪之交，他们已在爪哇岛建立贸易站；1606 年首批茶叶经由爪哇从中国运到荷兰。茶很快成为荷兰人中时髦的饮品，并从那里传到西欧大陆其他国家，但由于价格高昂，它始终是富人的饮品）。这段信息中可以确证的是：茶在十七世纪初的荷兰确实“时髦（fashionable）”，并逐渐向西欧扩散。但题干的核心比较是 “more fashionable than coffee（比咖啡更时髦）”，而咖啡在原文中只出现两处——第 5 段 “The first coffee-house had been established in London in 1652”、第 6 段 “it became a popular drink in coffee-houses”——这两句只给出咖啡馆的出现时间与茶在其中的流行，既没有评价咖啡的受欢迎程度，也没有把咖啡与茶放在一起比较。原文缺的是“比较关系”这一层信息，因此答案是 NOT GIVEN。此外，原文还强调茶“因为价格高而只是富人的饮品（it remained a drink for the wealthy）”，这进一步说明原文关心的不是与咖啡的竞争，而是茶的传播范围与价格门槛。",
          "traps": [
            "为什么不是 TRUE：原文只说茶在荷兰人中“时髦”，从未与咖啡作比较；咖啡在原文中只以 coffee-house（第 5 段）、coffee-houses（第 6 段）的形式出现，都只是饮茶场所，没有流行程度的描述。题干中的比较关系 more … than coffee 在原文中完全没有依据，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文给出与题干矛盾的信息，即原文必须说“咖啡比茶更时髦”之类。原文对二者的优劣只字未提，属于信息缺失而非信息冲突，因此也不能选 FALSE，只能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Tea was enjoyed by all classes in Britain in the 17th century.",
          "translation": "十七世纪的英国，各个阶层的人都享受饮茶。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "They were, though, the preserve of middle- and upper-class men; women drank tea in their own homes, and as yet tea was still too expensive to be widespread among the working classes."
          },
          "synonyms": [
            "“enjoyed by all classes” 与原文的 “the preserve of middle- and upper-class men”“too expensive to be widespread among the working classes” 相互冲突：原文明确说茶只属于中上层，工人阶级喝不起",
            "“in Britain” 对应原文第 6 段讨论的英国咖啡馆场景（第 5 段已交代伦敦第一家咖啡馆建于 1652 年）",
            "“in the 17th century” 对应原文的时间线索：1652 年出现咖啡馆，到第 6 段描述的“逐渐流行”阶段，正属于十七世纪后期"
          ],
          "locatingTip": "定位：题干的关键词是 all classes 和 Britain，第 6 段集中讨论不同性别、不同阶层饮茶的区别，其中 “the preserve of middle- and upper-class men” 与 “too expensive to be widespread among the working classes” 是判分依据，扫读到 working classes 即命中。确定答案技巧：判断题遇到 all、every、only 这类绝对化限定词要格外警觉，它们最常见的作用就是把原文的“部分”夸大为“全部”。原文说得很清楚：咖啡馆里的茶是中上层男性的专属（the preserve of middle- and upper-class men），女性在家喝茶，而工人阶级因为价格太高还喝不起（as yet tea was still too expensive to be widespread among the working classes）。题干用 all classes 一概而论，与原文的分层描述直接冲突，故判 FALSE。",
          "analysis": "第 5 段末提到十七世纪中期英国第一家咖啡馆出现，茶仍属新奇之物；第 6 段接着写它如何逐渐流行，同时划出清晰的阶层界限：“Gradually, it became a popular drink in coffee-houses, which were as much locations for the transaction of business as they were for relaxation or pleasure. They were, though, the preserve of middle- and upper-class men; women drank tea in their own homes, and as yet tea was still too expensive to be widespread among the working classes. In part, its high price was due to a punitive system of taxation.”（渐渐地，茶在咖啡馆里成了流行饮品，咖啡馆既是谈生意的地方，也是休闲享乐的场所。不过，咖啡馆是中上层男性的专属领地；女性在自己家中喝茶；而当时茶仍然太贵，还无法在工人阶级中普及。其高价部分源于惩罚性的税收制度）。原文给出的图景是分层的：中上层男性在咖啡馆喝茶，女性在家喝茶，工人阶级因价格太贵尚未普及。题干却断言 “Tea was enjoyed by all classes（各阶层都享受饮茶）”，把原文中带有明显阶层限制的“部分流行”改写为“全民享用”，与 “the preserve of middle- and upper-class men”“too expensive to be widespread among the working classes” 两处直接矛盾，因此答案是 FALSE。注意题干里的 in the 17th century 与原文时间并不冲突（1652 年咖啡馆开张、此后逐步流行），错误点只出在 all classes 这个绝对化表述上。",
          "traps": [
            "为什么不是 TRUE：原文明确写道咖啡馆是 “the preserve of middle- and upper-class men”（中上层男性的专属），并且 “as yet tea was still too expensive to be widespread among the working classes”（茶还太贵，无法在工人阶级中普及）。工人阶级被明确排除在外，题干说 all classes（所有阶层），与原文事实冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对茶在不同阶层中的普及程度交代得非常具体（中上层男性、在家喝茶的女性、尚喝不起的工人阶级），信息完整且与题干冲突，属于明确的相反信息，不是信息缺失，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The adulteration of tea also prompted William Pitt the Younger to reduce the tax.",
          "translation": "茶叶掺假也促使小威廉·皮特（William Pitt the Younger）降低了税收。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "By 1784, the government realised that enough was enough, and that heavy taxation was creating more problems than it was worth. The new Prime Minister, William Pitt the Younger, slashed the tax from 119 per cent to 12.5 per cent."
          },
          "synonyms": [
            "“prompted … to reduce the tax” 同义替换为原文的 “realised that enough was enough”“slashed the tax from 119 per cent to 12.5 per cent”，slashed 即大幅削减",
            "“The adulteration of tea also …” 对应原文上一句的 “taxation also encouraged the adulteration of tea”，即掺假是重税造成的“问题（problems）”之一，与走私共同构成减税的动因",
            "“William Pitt the Younger” 在原文中原词复现（含同位语 the new Prime Minister）"
          ],
          "locatingTip": "定位：本题的定位词是人名 William Pitt the Younger（含同位语 the new Prime Minister），全篇只出现一次，位于第 8 段后半部分，扫读时看到这个长人名就能一步锁定。确定答案技巧：题干说“掺假也促使皮特减税”，需要在原文中确认两点：①掺假是否是重税带来的问题之一；②政府是否因为这些问题而减税。原文第 8 段首句 “Worse for the drinkers was that taxation also encouraged the adulteration of tea” 承接着第 7 段的走私话题，用 also 把掺假与走私并列为征税的两大恶果；随后 “the government realised that enough was enough, and that heavy taxation was creating more problems than it was worth” 说明政府正是因为有这些“问题”才决定减税，紧接着皮特把税率从 119% 砍到 12.5%。因果链完整且方向一致，故判 TRUE。",
          "analysis": "第 8 段是本篇讲“减税”的核心段落：“Worse for the drinkers was that taxation also encouraged the adulteration of tea, particularly of smuggled tea which was not quality-controlled through customs and excise. Leaves from other plants, or leaves which had already been brewed and then dried, were added to tea leaves. By 1784, the government realised that enough was enough, and that heavy taxation was creating more problems than it was worth. The new Prime Minister, William Pitt the Younger, slashed the tax from 119 per cent to 12.5 per cent. Suddenly legal tea was affordable, and smuggling stopped virtually overnight.”（对喝茶的人来说更糟的是，征税还助长了茶叶掺假，尤其是未经海关质量检验的走私茶：别的植物的叶子、或者已冲泡过又烘干的茶叶被掺进茶叶里。到 1784 年，政府意识到不能再这样下去，重税造成的问题已经超过它的价值。新任首相小威廉·皮特把税率从 119% 猛降到 12.5%。突然间合法茶叶变得买得起，走私几乎一夜之间停止）。原文的逻辑是：重税带来走私与掺假两个恶果，这些“问题（problems）”让政府认定重税得不偿失，于是皮特大幅减税。题干说 “The adulteration of tea also prompted William Pitt the Younger to reduce the tax”，其中的 also 正对应原文的 “taxation also encouraged the adulteration of tea” 以及 “Worse for the drinkers was that…” 这一递进结构——掺假与走私并列为促成减税的问题，因此信息方向一致，答案为 TRUE。做题要点：本题的因果方向在原文中不是“掺假导致减税”这一条直线的表述，而是“掺假是重税造成的严重问题之一，政府因这些问题而减税”，判定时要把第 8 段首句与末两句连起来读，承认“问题之一”正是促使减税的原因，即得 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确把掺假列为重税带来的恶果（taxation also encouraged the adulteration of tea），并说政府认识到 “heavy taxation was creating more problems than it was worth”，随后皮特就削减了税率。把掺假作为促使减税的问题之一，与原文的判断一致，不存在矛盾，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文既交代了掺假与税收的因果关系，也交代了皮特减税的事实，两条信息之间的因果链条完整（掺假属于减税要解决的“问题”之一），并非题干预设的关系在原文中没有依据，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Initial problems occurred when tea was planted outside China by the East India Company.",
          "translation": "东印度公司在中国以外种植茶叶时，最初出现了一些问题。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "There were a few false starts, including the destruction by cattle of one of the earliest tea nurseries, but by 1888 British tea imports from India were for the first time greater than those from China."
          },
          "synonyms": [
            "“Initial problems” 同义替换为原文的 “a few false starts”（几次不成功的开局、起步受挫）",
            "“when tea was planted outside China by the East India Company” 同义替换为原文的 “the end of its monopoly stimulated the East India Company to consider growing tea outside China”“the increased cultivation of tea in India”",
            "“occurred” 对应原文的 “the destruction by cattle of one of the earliest tea nurseries”（最早的茶树苗圃之一被牛毁掉），即具体的问题实例"
          ],
          "locatingTip": "定位：题干的关键词是 outside China 与 East India Company，第 9 段同时包含 “growing tea outside China”“the East India Company” 以及表示受挫的 “There were a few false starts”，一段之内信息齐全，扫读该段中部的 but 转折句即可命中。确定答案技巧：判断题要抓住题干与原文的措辞对应：Initial problems（最初的问题）对应 false starts（起步受挫），原文还用 including 给出了一个具体例子 “the destruction by cattle of one of the earliest tea nurseries”（最早的茶树苗圃之一被牛群毁掉），时间上也与题干一致（原文先说 “There were a few false starts”，随后用 but 转折到 1888 年进口量超越中国，说明这些挫折发生在早期）。信息方向完全一致，故判 TRUE。",
          "analysis": "第 9 段讲述东印度公司垄断结束后转向在中国之外种茶的过程：“Another great impetus to tea-drinking resulted from the end of the East India Company's monopoly on trade with China, in 1834. Before that date, China was the country of origin of the vast majority of the tea imported to Britain, but the end of its monopoly stimulated the East India Company to consider growing tea outside China. India had always been the centre of the Company's operations, which led to the increased cultivation of tea in India, beginning in Assam. There were a few false starts, including the destruction by cattle of one of the earliest tea nurseries, but by 1888 British tea imports from India were for the first time greater than those from China.”（1834 年公司对华贸易垄断的结束，成为饮茶的另一大推动力；此前英国进口的茶叶绝大多数来自中国，垄断终结促使公司考虑在中国之外种茶；印度一直是公司经营的中心，于是从阿萨姆开始扩大种植。起初有过几次失败的开局，包括最早的茶树苗圃之一被牛群毁坏；但到 1888 年，英国从印度进口的茶叶首次超过从中国进口的量）。题干 “Initial problems occurred when tea was planted outside China by the East India Company” 恰好概括了原文中 “growing tea outside China” 与 “a few false starts” 两部分内容：栽种者（the East India Company）、地点（outside China）、时间（initial，即最早期的）与事件（problems，即 false starts 与苗圃被毁）一一对应，所以答案是 TRUE。注意 false starts 是英语固定表达，意为“不成功的开端、起步阶段的挫折”，不要误读为“错误的开始”而与题干割裂。",
          "traps": [
            "为什么不是 FALSE：原文并没有说种茶过程一帆风顺，相反用 “There were a few false starts, including the destruction by cattle of one of the earliest tea nurseries” 明确记录了早期挫折。题干所说的“最初出现问题”与原文一致，没有矛盾点，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅给出概括性表述 false starts，还提供了 “the destruction by cattle of one of the earliest tea nurseries” 这一具体例子，说明东印度公司在印度等地种茶时确实遭遇过初期问题，信息是明确给出的，不属于未提及。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "The fastest vessels were owned by America during the 19th-century clipper races.",
          "translation": "在十九世纪的飞剪船竞赛中，最快的船只属于美国。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "11",
            "quote": "In particular, there was competition between British and American merchants, leading to the famous clipper races of the 1860s."
          },
          "synonyms": [
            "“the 19th-century clipper races” 同义替换为原文的 “the famous clipper races of the 1860s”（1860 年代属于十九世纪）",
            "“America” 对应原文的 “American merchants”（美国商人）",
            "“The fastest vessels were owned by …” 在原文中找不到任何对应：原文只说明英美商人之间存在竞争（there was competition between British and American merchants），从未比较双方船只的速度，也没有评选谁拥有最快的船"
          ],
          "locatingTip": "定位：题干的 clipper races 是极强的定位词，全篇只在第 11 段出现 “the famous clipper races of the 1860s”，同时该句出现了 British and American merchants，与题干的时间与国别线索吻合，一步锁定第 11 段。确定答案技巧：本题的陷阱在于题干含有最高级 “The fastest vessels（最快的船）”。回原文核对会发现，原文确实提到茶船竞赛的参与者有英美商人，也有 “competition between British and American merchants”，但通篇没有比较参赛船只的速度，更没有说谁的船最快——第 11 段给出的船只描写是 “fast new clippers which had sleek lines, tall masts and huge sails”，说的是所有用于竞赛的飞剪船都很快，不是“某国的船最快”。原文缺的是“谁最快”这个结论，属于信息缺失，故判 NOT GIVEN。切忌把“美国商人参与竞赛”等同于“美国拥有最快的船”。",
          "analysis": "第 11 段完整描写了飞剪船竞赛：“Individual merchants and sea-captains with their own ships raced to bring home the tea and make the most money, using fast new clippers which had sleek lines, tall masts and huge sails. In particular, there was competition between British and American merchants, leading to the famous clipper races of the 1860s. But these races soon came to an end with the opening of the Suez Canal, which made the trade routes to China viable for steamships for the first time.”（个体商人和船长带着自己的船争相把茶运回国以赚取最大利润，他们使用的是线条流畅、桅杆高耸、帆面巨大的新型快速帆船。尤其是英美商人之间的竞争，造就了 1860 年代著名的飞剪船竞赛。但这些竞赛很快随着苏伊士运河的开通而结束——运河首次让通往中国的航线对蒸汽船变得可行）。原文关于速度的信息只有两点：一是所有竞赛用的飞剪船都“快（fast new clippers）”，二是英美商人之间存在竞争（competition between British and American merchants）。它既没有比较两国船速，也没有说哪一方的船最快。题干加入了 “The fastest vessels were owned by America” 这一最高级结论——原文有竞赛、有美国商人参与，却没有任何速度排名，属于信息缺失，因此答案是 NOT GIVEN。这类“最高级 + 归属”的判断题，一定要在原文中找到明确的比较或排名，找不到就只能判 NOT GIVEN，不能靠“美国商人参与并竞争激烈”来自行推断美国船最快。",
          "traps": [
            "为什么不是 TRUE：原文只写 “there was competition between British and American merchants”，说明英美双方都参与了竞赛，但从未比较双方船只的速度，也没有“最快的船属于美国”这样的表述。题干的最快（The fastest）在原文中没有依据，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文给出相反信息，即原文得说“最快的船属于英国”或“美国没有最快的船”。原文对两国船速只字未提，既没有支持也没有否定，属于信息缺失而非信息矛盾，因此也不能选 FALSE。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
