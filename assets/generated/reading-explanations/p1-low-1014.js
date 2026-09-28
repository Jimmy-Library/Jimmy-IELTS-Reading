(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-1014", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-1014",
  "meta": {
    "examId": "p1-low-1014",
    "title": "A much-travelled vegetable 旅行万里的蔬菜",
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
          "stem": "The potato's botanical name was given by a Swiss botanist in the sixteenth century.",
          "translation": "马铃薯的植物学名称是由一位瑞士植物学家在 16 世纪赋予的。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "It was given its botanical name, Solanum tuberosum, in 1596 by the Swiss botanist Gaspard Bauhin"
          },
          "synonyms": [
            "“The potato's botanical name was given” 同义替换为原文被动结构 “It was given its botanical name”，主语由 the potato 换成代词 It，指代同一对象",
            "“a Swiss botanist” 同义替换为原文的具体人名 “the Swiss botanist Gaspard Bauhin”（瑞士植物学家加斯帕尔·博安），题干只保留国籍与职业，省略姓名",
            "“in the sixteenth century” 同义替换为原文的具体年份 “in 1596”，1596 年属于 1501—1600 年的 16 世纪"
          ],
          "locatingTip": "定位：题干三个关键词 botanical name、Swiss botanist、sixteenth century 都集中在第 1 段讲命名的那一句；段中有斜体拉丁学名 Solanum tuberosum 和人名 Gaspard Bauhin 两个极好认的定位词，扫读第 1 段即可一步锁定，不必往下读。确定答案技巧：判断题的时间常常“具体年份换成世纪区间”，本题原文给出精确年份 1596，题干给 the sixteenth century（16 世纪即 1501—1600 年），1596 落在区间内；命名者的身份原文写作 the Swiss botanist Gaspard Bauhin，与题干的 a Swiss botanist 完全吻合。三处信息同向且无夸大，判 TRUE。",
          "analysis": "第 1 段第 2 句：“It was given its botanical name, Solanum tuberosum, in 1596 by the Swiss botanist Gaspard Bauhin, and belongs to the Solanaceae family, the nightshades, which includes aubergines, peppers, and the tomato.”（它于 1596 年被瑞士植物学家 Gaspard Bauhin 赋予植物学名 Solanum tuberosum，属于茄科——即夜影科，其中包括茄子、辣椒和番茄）。这句把题干的三个信息点全部交代清楚：①被命名的是 botanical name（植物学名）；②命名者是 the Swiss botanist（瑞士植物学家）；③时间是 1596 年。题干把它们分别改写成：botanical name 原词复现、a Swiss botanist 概括原文的 the Swiss botanist Gaspard Bauhin、in the sixteenth century 概括 1596。三处一一对应、没有矛盾也没有缺失，所以答案是 TRUE。做题要点：做世纪与年份的换算时，1500 年代属于 16 世纪（1501—1600），1596 是 16 世纪晚期，不要少算一个世纪而误判为 FALSE。",
          "traps": [
            "为什么不是 FALSE：原文对命名者、命名时间和命名内容都有明确交代，且与题干完全同向——命名者确为瑞士人（the Swiss botanist），时间 1596 确实落在 16 世纪区间内，不存在任何被夸大的成分，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干问的三项信息（谁命名、哪国人、什么时间）在原文第 1 段全部写明，属于信息完整而非缺失；题干只是用概括说法替换了具体人名与年份，并非原文没有提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The Incas were the first people to cultivate potatoes anywhere in the world.",
          "translation": "印加人是世界上最早种植马铃薯的人。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Growing wild as early as 13,000 years ago on the Chilean coast of South America, this tuber was cultivated by the inhabitants of the continent by 3,000 BCE."
          },
          "synonyms": [
            "“cultivate potatoes” 同义替换为原文的 “cultivated by the inhabitants of the continent”，都是“种植、栽培”之意",
            "“the Incas” 对应原文后一句的 “the Incan civilisation (mid-1400s to mid-1500s)”，即印加文明",
            "“were the first people” 与原文的 “cultivated by the inhabitants of the continent by 3,000 BCE” 相互冲突：原文把栽培时间上推到公元前 3000 年，比印加文明早四千多年"
          ],
          "locatingTip": "定位：题干的核心名词是 the Incas 与 potatoes，人名、专有名词是首选定位词，第 2 段开头就出现该 tuber 的栽培史，整段围绕“何时、由谁开始种植”展开。确定答案技巧：本题考“是不是最早”，判分关键是把原文出现过的所有栽培主体按时间排序。原文先给出两个更早的时间点——13000 年前野生生长、公元前 3000 年（3,000 BCE）由 this tuber…cultivated by the inhabitants of the continent（该大陆的居民）栽培；之后才在 However 一句提到印加文明（15 世纪中期至 16 世纪中期）大规模种植。题干把最晚登场的印加人说成“世界上最早种植的人”，与原文时间线正面冲突，故判 FALSE。",
          "analysis": "第 2 段开头两句是本题的判分依据：“Growing wild as early as 13,000 years ago on the Chilean coast of South America, this tuber was cultivated by the inhabitants of the continent by 3,000 BCE. However, it was not until many years later that the Incan civilisation (mid-1400s to mid-1500s) realised the potato's true agricultural potential and grew it on a large scale.”（早在 13000 年前，这种块茎就野生于南美智利海岸，到公元前 3000 年已被该大陆的居民栽培。然而直到许多年之后，印加文明（15 世纪中期至 16 世纪中期）才意识到马铃薯真正的农业潜力并大规模种植）。原文的时间线非常清楚：野生（13000 年前）在前，大陆居民栽培（公元前 3000 年）在中间，印加人（15 世纪）在最后。题干却把印加人包装成 “the first people to cultivate potatoes anywhere in the world（世界上最早种植马铃薯的人）”，把最晚出现的栽培者抬成最早的栽培者，与原文事实直接对立，因此答案是 FALSE。做题提示：凡是题干出现 first、the earliest、only 这类绝对化表述，都要回原文核对“最”字头衔到底给了谁；本题中它并不属于印加人，而印加人只是让马铃薯发挥出大规模农业价值的那一方。",
          "traps": [
            "为什么不是 TRUE：原文明确写出更早的栽培者与更早的时间——早在公元前 3000 年，马铃薯已被 the inhabitants of the continent（南美大陆的居民）栽培，比印加文明早四千多年，因此印加人绝不是世界上最早种植马铃薯的人，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对栽培史的时间与主体都有具体交代（13000 年前野生、公元前 3000 年大陆居民栽培、15 世纪印加人大规模种植），属于已给出且与题干相反的信息，而不是信息缺失，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The Incan technique of making ch'uño involved drying potatoes in the sun for several months.",
          "translation": "印加人制作 ch'uño（冻干马铃薯）的方法包括把马铃薯在太阳下晒上好几个月。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "To protect crops from frost, they developed a technique called ch'uño, which involved exposing potatoes to freezing night temperatures and then squeezing out the moisture by trampling them with bare feet."
          },
          "synonyms": [
            "“the Incan technique of making ch'uño” 对应原文的 “they developed a technique called ch'uño”，专有名词 ch'uño 在原文原样出现（未译），是极佳的定位词",
            "“drying potatoes in the sun” 与原文的 “exposing potatoes to freezing night temperatures and then squeezing out the moisture by trampling them with bare feet” 相互冲突：原文的脱水手段是夜间冷冻加用脚踩榨，而不是日晒",
            "“for several months” 在原文没有对应：原文说的是成品可以 “be stored for years”（可存放数年），存储时长不等于制作中的干燥时长"
          ],
          "locatingTip": "定位：题干出现专有名词 ch'uño（含 ñ 与撇号，形态独特）与 Incan，回原文搜索 ch'uño 只会落在第 3 段第 3 句。确定答案技巧：这类“方法题”一定要把原文描述的具体步骤逐一比对。原文的工艺流程是两步——先 exposing potatoes to freezing night temperatures（暴露在夜间冰点以下的低温中，即冷冻），再 squeezing out the moisture by trampling them with bare feet（用赤脚踩踏把水分挤掉）。题干却改写成 drying potatoes in the sun for several months（在太阳下晒几个月），把“冷冻加脚踩”换成“日晒”，还凭空加上几个月的时长，属于事实冲突，故判 FALSE。",
          "analysis": "第 3 段第 3 句：“To protect crops from frost, they developed a technique called ch'uño, which involved exposing potatoes to freezing night temperatures and then squeezing out the moisture by trampling them with bare feet.”（为保护作物免受霜冻，他们发明了一种叫 ch'uño 的方法：让马铃薯在夜间经受冰点以下的低温，然后用赤脚踩踏把水分挤出来）。原文清楚给出脱水的两个动作：低温冷冻（freezing night temperatures）与脚踩榨水（trampling them with bare feet），完全依靠“冻”和“踩”来完成脱水，与阳光无关。题干说该方法是 “drying potatoes in the sun for several months（在太阳下晒上好几个月）”，一方面把脱水方式替换成 sun drying，另一方面多出 for several months 这个原文没有的时间限定，两处都与原文不符，因此答案是 FALSE。容易误判的地方是后一句 “The resulting dehydrated product could be stored for years and provided a reliable food source during times of crop failure or harsh winters.”（成品能存放数年），其中 for years 是讲“贮存”时长而不是“制作”时长，题干把贮存时间挪用为制作工艺的一部分，属于典型的张冠李戴，注意区分 could be stored（贮存）与 drying（制作）。",
          "traps": [
            "为什么不是 TRUE：原文把 ch'uño 的做法写成冷冻加脚踩挤水两大步骤，与题干的“日晒”相矛盾；题干的 for several months 在原文也找不到依据（原文只有“成品可存放数年”的说法），两处均不符，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对 ch'uño 的制作方法交代得很具体（夜间冷冻、赤脚踩踏挤出水），存在明确且与题干相反的信息，因此不属于未提及，不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Spanish conquistadors immediately recognised the potato's value as a food crop upon arriving in Peru.",
          "translation": "西班牙征服者一到秘鲁就立刻认识到了马铃薯作为粮食作物的价值。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Initially, they were suspicious of this strange, knobbly tuber growing underground."
          },
          "synonyms": [
            "“Spanish conquistadors” 与原文的 “Spanish conquistadors led by Francisco Pizarro arrived in Peru in 1532” 原词复现，是首要定位词",
            "“upon arriving in Peru” 同义替换为原文的 “arrived in Peru in 1532” 与紧随其后的 “Initially”（起初）",
            "“immediately recognised the potato's value” 与原文的 “Initially, they were suspicious of this strange, knobbly tuber” 相互冲突：起初是怀疑，而非立刻认可"
          ],
          "locatingTip": "定位：题干中的 Spanish conquistadors、Peru 都是专有名词，第 4 段首句一次性给出（还附带人名 Francisco Pizarro 与年份 1532），扫到即可锁定第 4 段。确定答案技巧：本题考“是否立刻认可”，判分点在于原文的 Initially 一词所带的转折逻辑。原文先写 “Initially, they were suspicious of this strange, knobbly tuber growing underground.”（起初，他们对这种生长在地下、形状古怪的块茎心存疑虑），接着列举两道心理障碍（圣经中未提及、属于可能有毒的茄科），最后才用 Nevertheless 承认 “the practical value of a crop that could feed armies and sailors on long voyages was undeniable”，并且到 1570 年代才把马铃薯运出南美。可见“认识到价值”是后来的事，绝非一抵达就发生，故判 FALSE。",
          "analysis": "第 4 段的叙述顺序是本题的关键。首句：“When Spanish conquistadors led by Francisco Pizarro arrived in Peru in 1532, they encountered the potato for the first time.”（1532 年，由 Francisco Pizarro 率领的西班牙征服者抵达秘鲁，第一次见到马铃薯）。紧接着第二句就是反面证据：“Initially, they were suspicious of this strange, knobbly tuber growing underground.”（起初，他们对这种长在地下、形状古怪的块茎心存疑虑）。随后两句解释疑虑的来源：西班牙人偏爱《圣经》里提到过的食物，而马铃薯并无这样的“出身”；它又属于夜影科（nightshade family），该科有些种类已知有毒。直到 Nevertheless 一句才承认 “the practical value of a crop that could feed armies and sailors on long voyages was undeniable”，并且 “By the 1570s, the first potatoes had crossed the Atlantic”。整个逻辑链是“先怀疑、后认可、再传播”。题干的 immediately recognised the potato's value upon arriving 把时间压缩到抵达的那一刻，与 Initially…suspicious 直接对立，因此答案是 FALSE。这题最容易错在只读到 Nevertheless 那句的 undeniable（不可否认的价值）就选 TRUE，忽略前面 Initially 的怀疑以及价值被承认发生在数十年之后；做题时务必留意段落内部的转折标记（Initially、Moreover、Nevertheless），判断题常常就设在转折的前半句上。",
          "traps": [
            "为什么不是 TRUE：原文首句之后紧跟 “Initially, they were suspicious of this strange, knobbly tuber growing underground.”，明确说他们起初是怀疑态度；价值的认可出现在后文的 Nevertheless 一句，而且要到 1570 年代马铃薯才被带出南美。题干用 immediately 把“后来的认可”提前到“抵达之时”，与原文冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对征服者最初的态度（suspicious）、态度转变的原因与时间（Nevertheless…undeniable；By the 1570s）都写得很明确，属于已给出且与题干相反的信息，不是未提及，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Antoine-Augustin Parmentier deliberately used trickery to encourage French peasants to grow potatoes.",
          "translation": "安托万-奥古斯丁·帕芒蒂耶（Antoine-Augustin Parmentier）故意使用计谋来促使法国农民种植马铃薯。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "At night, he deliberately withdrew the guards, allowing curious peasants to steal the \"protected\" crop."
          },
          "synonyms": [
            "“Antoine-Augustin Parmentier” 在原文第 6 段原词复现（“an eighteenth-century pharmacist and army chemist named Antoine-Augustin Parmentier”），是本题的定位锚点",
            "“deliberately used trickery” 同义替换为原文的 “deliberately withdrew the guards, allowing curious peasants to steal the \"protected\" crop”，即故意撤走守卫、放任农民来偷，构成一场精心设计的“骗局”",
            "“to encourage French peasants to grow potatoes” 对应原文的 “He then planted potatoes on poor, sandy land outside Paris and placed armed guards around the fields during the day” 与结尾 “potato cultivation spread rapidly across France”（种植迅速遍及全法）"
          ],
          "locatingTip": "定位：专有名词 Antoine-Augustin Parmentier（含连字符的法国人名）在全文只出现于第 6 段，扫读时看到这一段就停下来精读；段中还有 Louis XVI、Marie Antoinette、Paris 等人名地名可辅助确认。确定答案技巧：本题考“是否故意用计”，要抓住两个表明主观故意的词：deliberately（故意地）与引号里的 \"protected\"（所谓“受保护”的）。原文说他白天派武装守卫守着巴黎城外的马铃薯地，夜里却 “deliberately withdrew the guards”，目的是让好奇的农民来偷，从而把吃马铃薯变成一件抢手的事。题干把它概括为 used trickery to encourage peasants（用计策鼓励农民），措辞虽抽象但方向完全一致，故判 TRUE。",
          "analysis": "第 6 段讲 Parmentier 推广马铃薯的全过程。先说他是一位十八世纪的药剂师兼军队化学家，因七年战争被普鲁士人俘虏期间只吃马铃薯，出狱后身体反而很好，由此确信其营养价值；接着是本题的核心：“He convinced King Louis XVI and Queen Marie Antoinette to wear potato flowers in their lapels and hair, making the plant fashionable. He then planted potatoes on poor, sandy land outside Paris and placed armed guards around the fields during the day. At night, he deliberately withdrew the guards, allowing curious peasants to steal the \"protected\" crop. The strategy worked brilliantly, and potato cultivation spread rapidly across France.”（他说服国王路易十六与王后玛丽·安托瓦内特把马铃薯花戴在翻领和头发上，让这种植物变成时尚；又在巴黎城外贫瘠的沙地上种马铃薯，白天在田边布置武装守卫，夜里则故意把守卫撤走，让好奇的农民偷走这些“受保护”的作物。这一策略大获成功，马铃薯种植迅速遍及法国）。这段话的每一个环节都指向“故意设计”：戴马铃薯花是制造时尚的风向标，白天设岗、夜里撤岗是刻意制造稀缺与神秘，让农民主动来“偷”，从而绕开抵触情绪把种植推广出去。题干中的 deliberately 对应原文的 deliberately（原词复现），used trickery 对应“白天守卫、夜里放任偷挖”这一套自导自演的做法，encourage French peasants to grow potatoes 对应结尾 potato cultivation spread rapidly across France，三处同向，答案 TRUE。做题提示：推广类段落中的 public relations campaign（公关活动）、strategy（策略）等概括性名词，往往就是题干 trickery、campaign 这类抽象说法的对应来源。",
          "traps": [
            "为什么不是 FALSE：原文用 deliberately withdrew the guards（故意撤走守卫）和 allowing curious peasants to steal（放任农民来偷）明确写出其主观故意，这与题干的 deliberately used trickery 完全一致，不存在任何矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文详细交代了整套“公关策略”的手段（宫廷示范、白天设岗、夜里撤岗、放任偷挖），正是题干 trickery（计谋、耍手段）所指的内容，信息充分，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–10 句子填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 10
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The Incas carved ________ into mountainsides to create flat areas for planting potatoes.",
          "translation": "印加人在山坡上开凿出 ________，以造出种植马铃薯的平地。",
          "answer": "terraces",
          "wordClass": "名词（复数。空格紧跟在及物动词 carved 之后作宾语，指被开凿出来的层层梯田；原文用的是复数 terraces，故照写复数形式 terraces，不加冠词）",
          "locating": {
            "paragraph": "3",
            "quote": "They carved terraces into the hillsides, creating flat platforms that prevented soil erosion and allowed for more efficient irrigation."
          },
          "synonyms": [
            "“carved ________ into mountainsides” 对应原文的 “carved terraces into the hillsides”，其中 mountainsides 同义替换为 hillsides（山坡、山腰）",
            "“to create flat areas for planting potatoes” 同义替换为原文的 “creating flat platforms”，并对应全段主题 ‘cultivating … potatoes on the steep mountain slopes’",
            "“prevented soil erosion and allowed for more efficient irrigation” 在原文用来解释梯田的作用，进一步印证被开凿出来的东西就是梯田 terraces"
          ],
          "locatingTip": "定位：题干的关键词 Incas、carved、mountainsides 都与第 3 段首句高度重合，全篇讲“开凿山坡”的只有这一处，句子里的 carved 是极强的动作定位词。确定答案技巧：找到 carved 后看它的宾语，原文是 carved terraces into the hillsides（把梯田开凿进山坡），宾语 terraces 就是题干空格要填的词；题干把 hillsides 换成 mountainsides、把 creating flat platforms 换成 create flat areas，属于同义改写，不影响答案。注意 ONE WORD ONLY 与复数形式：原文为 terraces，填 terrace 会因单复数不符而失分。",
          "analysis": "原文第 3 段第 2 句：“They carved terraces into the hillsides, creating flat platforms that prevented soil erosion and allowed for more efficient irrigation.”（他们在山坡上开凿出梯田，形成平坦的台地，既能防止水土流失，也便于更高效地灌溉）。题干几乎是此句的压缩改写：The Incas 对应句首的 They（指上文 The Incas）；carved 原词保留；mountainsides 是 hillsides 的同义替换；to create flat areas 则是 creating flat platforms 的改写（flat 一词在两句中都出现）。句子的宾语位置被挖空，答案自然是被开凿出来的对象 terraces（梯田）。从词性看，空格位于及物动词 carved 之后、介词 into 之前，需要填名词，且梯田是成片开凿的，原文用了复数 terraces，因此答案写复数形式 terraces；若填 hillsides 则逻辑不通（题干后面已说“开凿到山坡里”，山坡本身不能同时是开凿的产物）。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "To make ch'uño, the Incas removed moisture by ________ on the potatoes with their feet.",
          "translation": "为了制作 ch'uño（冻干马铃薯），印加人用脚 ________ 马铃薯来去除水分。",
          "answer": "trampling",
          "wordClass": "名词（动名词。空格位于介词 by 之后，需要名词性成分作介词宾语，故用动名词 trampling；题干已提供 with their feet 作状语，因此只需照原文形式抄动名词，不要写 trampled 或 trample）",
          "locating": {
            "paragraph": "3",
            "quote": "which involved exposing potatoes to freezing night temperatures and then squeezing out the moisture by trampling them with bare feet"
          },
          "synonyms": [
            "“removed moisture by ________ on the potatoes with their feet” 同义替换为原文的 “squeezing out the moisture by trampling them with bare feet”，其中 removed moisture 对应 squeezing out the moisture",
            "“with their feet” 同义替换为原文的 “with bare feet”（赤脚）",
            "介词 by 之后的动名词 trampling 在题干中位于 by 之后，语法位置完全一致，属于直接照抄"
          ],
          "locatingTip": "定位：题干有专有名词 ch'uño（含 ñ 与撇号，非常好认），全文仅在讲印加保存技术的第 3 段出现；同时抓住 feet 这一身体部位词与 squeezing out the moisture 这一动作，即可定位到同一句。确定答案技巧：题干说“用脚去除水分（by ________ on the potatoes with their feet）”，回原文找与脚有关的脱水动作，原文写 “squeezing out the moisture by trampling them with bare feet”，by 后面紧跟的动名词就是 trampling（踩踏）。语法上空格在介词 by 之后，只能填名词性成分，因此必须写动名词形式 trampling，不能填动词原形 trample 或过去式 trampled；另外 ONE WORD ONLY 也排除了 squeezing 之类的其他词。",
          "analysis": "原文第 3 段第 3 句：“To protect crops from frost, they developed a technique called ch'uño, which involved exposing potatoes to freezing night temperatures and then squeezing out the moisture by trampling them with bare feet.”（为防霜冻，他们发明了 ch'uño 这一方法：让马铃薯经历夜间冰点以下的低温，然后用赤脚踩踏把水分挤出来）。题干是对这一句后半个工序的改写：To make ch'uño 概括 which involved（该方法包含的步骤）；the Incas removed moisture 概括 squeezing out the moisture；by ________ on the potatoes with their feet 则把 by trampling them with bare feet 拆开，them 还原为 the potatoes，bare feet 概括为 their feet，只剩 trampling 一词被挖空。因此答案是 trampling。词性上，空格前是介词 by，其后需要动名词或名词；原文用的是动名词 trampling，题干也保持了相同的介词结构，所以照抄 trampling 即可——这也是本题的重要语法提示：看到介词 by 加空格，几乎一定是动名词，写 -ing 形式的正确率最高。同时不要把前一步 exposing 误填进来，那是“冷冻”而不是“用脚脱水”。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Some Europeans believed that eating potatoes could cause ________, a serious disease affecting the skin and nerves.",
          "translation": "一些欧洲人相信吃马铃薯会导致 ________——一种严重影响皮肤和神经的疾病。",
          "answer": "leprosy",
          "wordClass": "名词（不可数，疾病名称。空格在及物动词 cause 之后作宾语，原文作 caused 的宾语，直接照原文形式抄名词 leprosy，全部小写、不用加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "Rumours spread that potatoes caused leprosy, syphilis, and other dreadful diseases."
          },
          "synonyms": [
            "“Some Europeans believed” 同义替换为原文的 “Rumours spread that …”（当时流传着这样的谣言），即“欧洲人相信”的内容",
            "“eating potatoes could cause ________” 同义替换为原文的 “potatoes caused ________”，原文是对马铃薯致病的一般陈述，题干补出 eating 这一行为",
            "“a serious disease affecting the skin and nerves” 是原文疾病名 leprosy（麻风病）的同位语解释，用来与同句并列的 syphilis 等疾病区分"
          ],
          "locatingTip": "定位：题干的关键词是 disease 与 Europeans，回原文找“疾病 + 欧洲人”的段落，落在第 5 段（讲马铃薯在欧洲遭遇的负面传闻），其中 diseases 一词本身就出现在 “Rumours spread that potatoes caused leprosy, syphilis, and other dreadful diseases.” 这一句。确定答案技巧：原文一口气列出三种疾病（leprosy、syphilis、other dreadful diseases），题干只挖一空，因此必须靠空格后的同位语 “a serious disease affecting the skin and nerves” 来筛选：麻风病（leprosy）会侵犯皮肤与周围神经，正对应“影响皮肤和神经的疾病”；梅毒（syphilis）虽同被提及，但题干的定义性描写指向 leprosy，故填 leprosy，且照抄原文小写形式。",
          "analysis": "原文第 5 段第 4 句：“Rumours spread that potatoes caused leprosy, syphilis, and other dreadful diseases.”（当时有谣言传播，说马铃薯会引发麻风病、梅毒以及其他可怕的疾病）。这句是本题唯一的定位句，题干把它改写为“Some Europeans believed that eating potatoes could cause ________, a serious disease affecting the skin and nerves”，即把 Rumours spread（谣言传播，说明确有一些欧洲人相信）替换为 Some Europeans believed，把 potatoes caused 的具体宾语之一挖空，并在空格后补上一条释义——一种严重影响皮肤与神经的疾病。原文中并列的疾病名有三个：leprosy、syphilis、other dreadful diseases；题干给出的释义“affecting the skin and nerves（累及皮肤与神经）”是麻风病的典型特征，因此答案是 leprosy。从词性看，空格在及物动词 cause 之后，需要名词或名词短语，原文的 leprosy 为不可数名词，直接照抄即可，不必大写、不加冠词。避坑提示：不要把 syphilis 填进去——它虽然也在原文并列出现，但与题干“影响皮肤与神经”的描述不符；也不要用 other dreadful diseases 这种概括说法，题干问的是一个具体的病名。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "In Prussia and Russia, peasants initially regarded potatoes as food suitable only for ________.",
          "translation": "在普鲁士和俄国，农民起初认为马铃薯只适合给 ________ 吃。",
          "answer": "animals",
          "wordClass": "名词（复数。空格位于介词 for 之后作宾语，原文为 fit only for animals（只配给牲畜吃），照抄复数形式 animals，不加定冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "Peasants in Prussia and Russia initially resisted Frederick the Great's attempts to force potato cultivation upon them, viewing it as a degrading food fit only for animals."
          },
          "synonyms": [
            "“In Prussia and Russia, peasants initially” 与原文 “Peasants in Prussia and Russia initially resisted” 语序略有调整、内容完全一致，属于原词复现式对应",
            "“regarded potatoes as food suitable only for” 同义替换为原文的 “viewing it as a degrading food fit only for”，其中 regarded as 对应 viewing as，suitable only for 对应 fit only for",
            "“a degrading food”（有失身份的食物）这一贬义色彩在题干中用 “initially regarded”（起初认为）体现，说明这只是当时农民的偏见而非事实"
          ],
          "locatingTip": "定位：题干里的国家名 Prussia、Russia 与动词 initially 组合非常独特，全文只有第 5 段这一句同时出现，一步定位；人名 Frederick the Great 也是该句的标志。确定答案技巧：题干说农民把马铃薯视为“只适合给某类对象”的食物，回原文找到 fit only for 这一固定搭配，其后的名词就是答案。原文写作 a degrading food fit only for animals（一种只配给牲畜吃的低贱食物），of 结构中的 animals 即为被挖空的词。填空时注意 ONE WORD ONLY 与复数形式：原文是 animals，写 animal 会因单复数不符而算错；同时不要误填 farmers 或 the poor——虽然末段也提到 the desperate poor（走投无路的穷人），但那是第 10 段的评价性表述，不是本题定位句的内容。",
          "analysis": "原文第 5 段倒数第 2 句：“Peasants in Prussia and Russia initially resisted Frederick the Great's attempts to force potato cultivation upon them, viewing it as a degrading food fit only for animals.”（普鲁士和俄国的农民起初抵制腓特烈大帝强行推广马铃薯种植的做法，认为这是一种只配给牲畜吃的低贱食物）。题干抽取了这句的宾语补足语部分：regarded potatoes as food suitable only for ________，其中 regarded … as 是 viewing … as 的同义改写，suitable only for 是 fit only for 的同义改写，被挖空的名词就是 for 的宾语 animals（牲畜）。这里还要注意句子的逻辑层次：initially resisted（起初抵制）说明这只是一段时期的偏见，并非事实判断，题干用 peasants initially regarded 忠实保留了这层“当时认为”的意味。从词性看，for 是介词，其后需名词或名词短语，原文给的是复数 animals，故答案写复数。避坑点：不要因为末段有 “The potato, once dismissed as fit only for animals and the desperate poor” 就把答案写成 the poor 或 poor——那句是第 10 段的总结性表述，而题干的时间、地点限定词（In Prussia and Russia、initially）明确指向第 5 段腓特烈大帝推广失败的那句，且 ONE WORD ONLY 也不允许写两个词。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "The potato's high content of vitamin C helped prevent ________ in northern European populations during winter.",
          "translation": "马铃薯富含维生素 C，这帮助北欧人群在冬季预防了 ________。",
          "answer": "scurvy",
          "wordClass": "名词（不可数，疾病名称。空格作 helped prevent 的宾语，原文对应 helped eliminate 的宾语 scurvy，照抄原词，小写、不加冠词）",
          "locating": {
            "paragraph": "7",
            "quote": "The potato provided abundant vitamin C, which helped eliminate scurvy in northern populations during winter months"
          },
          "synonyms": [
            "“The potato's high content of vitamin C” 同义替换为原文的 “The potato provided abundant vitamin C”：两者的信息相同，题干把原文的动词短语 provided abundant vitamin C 抽象成名词短语 high content of vitamin C",
            "“helped prevent” 同义替换为原文的 “helped eliminate”（帮助消除，与预防同向）",
            "“northern European populations during winter” 同义替换为原文的 “northern populations during winter months”，原文的 northern 依上文语境即指北欧人群"
          ],
          "locatingTip": "定位：题干的关键词 vitamin C 与 winter 组合独特，回原文搜索 vitamin C 只出现在第 7 段讲马铃薯营养价值和欧洲依赖的那一句，一步锁定。确定答案技巧：题干说“维生素 C 帮助预防了某种疾病”，原文对应结构是 which helped eliminate scurvy（帮助消除了坏血病），prevent 与 eliminate 方向一致，被消除/预防的疾病 scurvy 就是答案。填写时注意 ONE WORD ONLY 与原文拼写：scurvy 是坏血病，属不可数名词，直接照抄小写形式即可；不要误填 winter months（那是时间状语）或 vitamin C（它是致病因子之外的营养物，而非被预防的疾病）。",
          "analysis": "原文第 7 段第 4 句：“The potato provided abundant vitamin C, which helped eliminate scurvy in northern populations during winter months, and its cultivation required less skill and labour than grain farming.”（马铃薯提供了丰富的维生素 C，帮助北欧人群在冬季消除了坏血病，而且种植它所需的技能与劳动都少于种谷物）。题干把这一分句改写为 “The potato's high content of vitamin C helped prevent ________ in northern European populations during winter.”：provided abundant vitamin C 改为名词短语 high content of vitamin C；helped eliminate 改为 helped prevent（消除与预防方向一致，都表示使疾病不再发生）；in northern populations during winter months 改为 in northern European populations during winter。三处改写一一对应，唯一被挖空的正是被消除的对象 scurvy（坏血病）。从词性看，空格作 prevent 的宾语，需要名词；scurvy 为不可数名词，无需冠词、也没有复数形式，照抄原文单词即可。做这道题可利用常识交叉验证：坏血病由缺乏维生素 C 引起，而维生素 C 正是本句讨论的营养成分，逻辑上完全吻合。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 简答题（NO MORE THAN THREE WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "What was the name of the water mould that caused the Irish potato blight in the 1840s?",
          "translation": "造成 19 世纪 40 年代爱尔兰马铃薯枯萎病的那种水霉菌叫什么名字？",
          "answer": "Phytophthora infestans",
          "wordClass": "专有名词（一种水霉菌的拉丁学名，由两个单词组成，符合 NO MORE THAN THREE WORDS；专有名称首字母大写，照原文形式完整抄写 Phytophthora infestans）",
          "locating": {
            "paragraph": "7",
            "quote": "In Ireland, where the potato had become the primary food source for a third of the population, the arrival of a water mould called Phytophthora infestans in 1845 triggered the Great Famine."
          },
          "synonyms": [
            "“the name of the water mould” 同义替换为原文的 “a water mould called ________”，原文用 called 引出名称，题干则问名称是什么",
            "“caused the Irish potato blight” 同义替换为原文的 “triggered the Great Famine”（引发了那场大饥荒），并结合同段 “The blight destroyed potato crops across the country for several consecutive years” 中的 blight（枯萎病）",
            "“in the 1840s” 同义替换为原文的 “in 1845”（1845 年属于 1840 年代）"
          ],
          "locatingTip": "定位：题干有两个不可替换的词：water mould（水霉菌）与 Irish/Ireland，回原文搜索 water mould 或 blight，只落在第 7 段后半关于爱尔兰大饥荒的那句；年代 1840s 又与原文的 1845 相互印证。确定答案技巧：题干问“这种水霉菌叫什么名字”，原文用 a water mould called Phytophthora infestans 直接给出名称，called 之后即为答案。抄写时注意：这是拉丁学名，首词 Phytophthora 首字母大写、种加词 infestans 全小写，不能只写 Phytophthora，也不能写成全大写或拼错（Phytophthora 中的 phth 组合容易漏字母）；两个单词恰好符合 NO MORE THAN THREE WORDS 的限制。",
          "analysis": "原文第 7 段倒数第 2 句：“In Ireland, where the potato had become the primary food source for a third of the population, the arrival of a water mould called Phytophthora infestans in 1845 triggered the Great Famine.”（在爱尔兰，马铃薯已成为全国三分之一人口的主要食物来源，1845 年一种名为 Phytophthora infestans 的水霉菌的到来引发了大饥荒）。题干用特殊疑问句询问该水霉菌的名称，把原文的陈述句 “the arrival of a water mould called Phytophthora infestans in 1845” 直接转成 “What was the name of the water mould that caused the Irish potato blight in the 1840s?”，其中 caused（导致）对应 triggered（引发），the Irish potato blight 对应 In Ireland 加同段后句的 The blight，in the 1840s 对应 in 1845。判定答案的关键是找准 called 这个引名标志词——雅思短答题中凡出现 called / named / known as，其后的专有名称往往就是被问的答案，本题即 Phytophthora infestans。抄写要点：拉丁学名由两个词构成（属名 Phytophthora 加种加词 infestans），首词首字母大写、次词小写，全部按原文形式照抄，不要自行加冠词 the，也不要只写其中一个词（那样信息不完整）。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "In which year were potato plants grown aboard the Space Shuttle Columbia?",
          "translation": "马铃薯植株是在哪一年被种植在航天飞机“哥伦比亚号”上的？",
          "answer": "1995",
          "wordClass": "数字（年份。题干用 In which year 提问，答案直接写四位数字 1995，不加 year、不加介词 in，符合 AND/OR A NUMBER 的要求）",
          "locating": {
            "paragraph": "9",
            "quote": "In 1995, potato plants were grown aboard the Space Shuttle Columbia as part of experiments to understand plant growth in microgravity."
          },
          "synonyms": [
            "“In which year” 对应原文句首的时间状语 “In 1995”，即把原文给出的年份反过来提问",
            "“potato plants were grown” 与原文 “potato plants were grown” 完全一致（原词复现，连被动语态都相同）",
            "“aboard the Space Shuttle Columbia” 与原文 “aboard the Space Shuttle Columbia” 完全一致，是本题最稳的定位短语"
          ],
          "locatingTip": "定位：题干中的专有名词组合 Space Shuttle Columbia（航天飞机哥伦比亚号）只出现在第 9 段第 5 句，属于一次性的定位标志；potato plants、microgravity 等科技词汇也在该段同现。确定答案技巧：题干是 “In which year were potato plants grown aboard …”，原文结构完全相同，只是句首已把年份写在 In 1995 这一时间状语里，因此答案就是 1995。抄写时保持纯数字形式，不要写 “in 1995”、“the year 1995” 或多字词，否则会超出 NO MORE THAN THREE WORDS AND/OR A NUMBER 的范围。",
          "analysis": "原文第 9 段第 5 句：“In 1995, potato plants were grown aboard the Space Shuttle Columbia as part of experiments to understand plant growth in microgravity.”（1995 年，马铃薯植株被种植在航天飞机哥伦比亚号上，作为理解微重力条件下植物生长实验的一部分）。题干几乎是原句的疑问句改写：把时间状语 In 1995 提出来问 In which year，其余部分 potato plants were grown aboard the Space Shuttle Columbia 与原文逐字相同。因此答案是 1995。抄写时只写四位数字本身即可。注意不要与同段出现的其他年份或机构名混淆：本段还提到 NASA 与 the University of Wisconsin（威斯康星大学）以及 the late twentieth century，但题干问的是“哪一年”，且限定条件是哥伦比亚号航天飞机，对应的就是 1995 年这一句。数字题是短答题中最容易拿分的一类，关键是看清提问对象（年份而非地点或机构）并保留原位数字形式。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "After maize, wheat, and rice, which crop is the world's fourth-largest food crop?",
          "translation": "在玉米、小麦和大米之后，世界第四大粮食作物是什么？",
          "answer": "potato",
          "wordClass": "名词（单数，作物名称。题干用 which crop 提问，要求答一种作物；原文以 the potato 作主语，答案按原文与答案表填单数名词 potato，不加冠词、不用复数）",
          "locating": {
            "paragraph": "10",
            "quote": "Today, the potato is the world's fourth-largest food crop, after maize, wheat, and rice."
          },
          "synonyms": [
            "“After maize, wheat, and rice” 与原文的 “after maize, wheat, and rice” 完全一致（原文位于句末作后置说明，题干把它提到句首），三个作物名原词复现",
            "“which crop is the world's fourth-largest food crop” 同义替换为原文的 “the potato is the world's fourth-largest food crop”，陈述句改写成特殊疑问句，原文主语即被提问的对象",
            "“Today” 对应原文句首的 “Today”，是本段的时间标记，也是快速定位的抓手"
          ],
          "locatingTip": "定位：题干里的 maize、wheat、rice 与 fourth-largest 都出现在第 10 段（全文最后一段），四个词同现于该段首句，回原文直接跳到末段即可。确定答案技巧：题干把原文的陈述句改成疑问句，原本作主语的作物被挪到疑问词后面，只要把原文主语还原出来就是答案——原文写 “the potato is the world's fourth-largest food crop”，主语 the potato 即所求作物。填答时按答案表写单数原词 potato，不要写成 potatoes；同时注意区分本段另一个排序信息 “grown in more countries than any other crop except maize”（种植国家数量仅次于玉米），那一句与“第四大粮食作物”无关，不能据此作答。",
          "analysis": "原文第 10 段（末段）首句：“Today, the potato is the world's fourth-largest food crop, after maize, wheat, and rice.”（如今，马铃薯是继玉米、小麦和大米之后的世界第四大粮食作物）。题干把这句话处理成一道特殊疑问句：“After maize, wheat, and rice, which crop is the world's fourth-largest food crop?”——六个定位词 maize、wheat、rice、fourth-largest、food crop 全部来自原句，只是语序调整：原文先给答案（the potato 作主语），后给排序依据（after maize, wheat, and rice），题干则先给排序依据再发问。解题思路因此很直接：把疑问句还原成陈述句，主语位置上的 the potato 就是答案。抄写时注意：答案表要求 potato 这一形式，不加定冠词 the、不用复数 potatoes；也不要误答 maize 或 rice——它们是比马铃薯更靠前的三大作物，正是题干排除掉的部分。做题提示：这类“排位题”要盯住 after / before / except 等排序介词，介词后面的内容是参照物，介词前面的才是被问的对象。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
