(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-111", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-111",
  "meta": {
    "examId": "p1-low-111",
    "title": "The Rise and Fall of Detective Stories 侦探小说的兴衰",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–8 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 8
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "C. Auguste Dupin and Émile Gaboriau were both writers of detective stories.",
          "translation": "C. 奥古斯特·杜平（C. Auguste Dupin）与埃米尔·加博里奥（Émile Gaboriau）两人都是侦探小说作家。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "especially in his stories featuring the detective C. Auguste Dupin. From 1859, Dupin had a counterpart in Monsieur Lecoq, created by the French author Emile Gaboriau."
          },
          "synonyms": [
            "“both writers of detective stories” 在原文中找不到支持：原文给 Dupin 的身份词是 “the detective C. Auguste Dupin”（侦探），他是故事中的角色，不是写故事的人",
            "“Émile Gaboriau” 在原文中的身份是 “the French author”（法国作家），是 “created by … Monsieur Lecoq” 的创造者，两人才有一人是作家",
            "同段首句 “the fertile brain of the great American writer Edgar Allan Poe” 与 “in his stories featuring the detective C. Auguste Dupin” 明确把 Dupin 定位为 Poe 故事里的侦探形象"
          ],
          "locatingTip": "定位：题干给出两个人名 C. Auguste Dupin 与 Émile Gaboriau（原文写作 Emile Gaboriau，无重音符号），都是大写专有名词且同处第 1 段，扫读第 1 段即可锁定，不必读完全文。确定答案技巧：本题的判分点在 “both … writers”（两人都是作家）这一并列身份上，需要逐一核对每个人在原文里的身份词。原文说 Dupin 是侦探（the detective C. Auguste Dupin），是爱伦·坡笔下的人物；只有 Gaboriau 的身份才是作家（the French author），他创造了 Lecoq 先生这个侦探角色。题干把“被创造的角色”和“创造者”混为一谈，与原文事实冲突，故判 FALSE。",
          "analysis": "第 1 段共三句，第一句说侦探小说一般认为始于美国作家爱伦·坡（Edgar Allan Poe）那富于创造力的头脑，尤其是他笔下侦探 C. Auguste Dupin 的故事；第二句说自 1859 年起，Dupin 有了一个对应形象，即法国作家 Emile Gaboriau 创造的 Lecoq 先生（Monsieur Lecoq）；第三句总结：尽管有这些美国与法国的渊源，侦探小说最终还是传入英国，在那里扎根、繁荣，成为典型的英国体裁。题干把 Dupin 和 Gaboriau 并列为“两位侦探小说作家”，但原文中二人的身份并不相同：Dupin 在原文里的身份词是 “the detective C. Auguste Dupin”，属于 Poe 故事中的人物；具备作家身份的是 Gaboriau（“the French author Emile Gaboriau”），他创造了另一个侦探角色 Lecoq。题干把“故事中的侦探角色”误当成“写侦探小说的人”，与原文信息直接矛盾，因此答案是 FALSE。做题提示：遇到 “A and B are both …” 这类并列身份的判断题，务必逐人核对原文给的身份词，不要因为两个人名出现在同一句里就默认他们身份相同。",
          "traps": [
            "为什么不是 TRUE：原文中 Dupin 的身份是侦探（the detective C. Auguste Dupin），由美国作家爱伦·坡创造；只有 Gaboriau 的身份是作家（the French author）。题干说“两人都是侦探小说作家”，只有一半与原文相符，另一半被原文否定，所以不能判 TRUE。",
            "为什么不是 NOT GIVEN：原文对两个人各自的身份都作了明确交代（一个是故事里的侦探，一个是创造角色的法国作家），信息不仅有而且与题干冲突，因此不属于“原文没有提及”的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "It was Conan Doyle's creation of Sherlock Holmes that made the detective story a typically British genre.",
          "translation": "正是柯南·道尔（Conan Doyle）创造了夏洛克·福尔摩斯（Sherlock Holmes），才使侦探小说成为典型的英国体裁。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "This transition occurred because of one author and his great detective. The most famous of all fictional detectives, Sherlock Holmes, was introduced by Sir Arthur Conan Doyle in A Study in Scarlet, first published in 1887"
          },
          "synonyms": [
            "“It was Conan Doyle's creation of Sherlock Holmes that made …” 同义替换为原文的 “This transition occurred because of one author and his great detective”，其中 “one author” 与 “his great detective” 就是下一句点明的柯南·道尔与福尔摩斯",
            "“Conan Doyle's creation of Sherlock Holmes” 同义替换为 “Sherlock Holmes, was introduced by Sir Arthur Conan Doyle”",
            "“typically British genre” 与第 1 段末句的 “becoming a characteristically British genre” 对应，指同一件事"
          ],
          "locatingTip": "定位：题干关键词是两个人名级专有名词 Conan Doyle 与 Sherlock Holmes，第 2 段第 1、2 句连续出现，扫读到第 2 段开头即可停笔精读。确定答案技巧：本题问“是什么使侦探小说成为典型的英国体裁”，属于因果判断题，要在原文里找“转变的原因”。第 2 段首句用 This transition 承接第 1 段末句“侦探小说传入英国并成为典型的英国体裁”，紧接着把原因归于 “one author and his great detective”，第二句立刻点名这位作家是柯南·道尔、这位侦探是福尔摩斯，原因与结果一一对应，故判 TRUE。注意第 1 段末句只说“成为了英国体裁”，第 2 段首句才补上“因为一位作家和他伟大的侦探”，两段要连起来读。",
          "analysis": "第 1 段末句先给出结论：“Despite these American and French origins, it was to Britain that detective fiction migrated, where it took root and flourished, becoming a characteristically British genre.”（尽管有美国与法国的渊源，侦探小说还是传入了英国，在那里扎根、繁荣，成为典型的英国体裁）。第 2 段首句紧接着交代原因：“This transition occurred because of one author and his great detective.”（这一转变的发生要归功于一位作家和他伟大的侦探），随后第二句点明此人此角色：“The most famous of all fictional detectives, Sherlock Holmes, was introduced by Sir Arthur Conan Doyle in A Study in Scarlet, first published in 1887”（所有虚构侦探中最著名的福尔摩斯，由柯南·道尔爵士在 1887 年首次出版的《血字的研究》中推出）。把两段合读，因果链清晰：福尔摩斯诞生，于是侦探小说在英国扎根、繁荣，成为典型英国体裁。题干用强调句 “It was … that made …” 表述的正是这条因果链，与原文一致，因此答案是 TRUE。做题提示：跨段的因果判断题，注意 This transition、This 这类回指词，它们往往把上一段的结论与下一段的原因缝合起来。",
          "traps": [
            "为什么不是 FALSE：原文用 “This transition occurred because of one author and his great detective” 明确归因，且紧接着给出这位作家与侦探的名字；第 1 段末句又确认侦探小说在英国成为典型体裁，前后衔接一致，没有任何矛盾，选 FALSE 没有依据。",
            "为什么不是 NOT GIVEN：原文既交代了转变的结果（becoming a characteristically British genre），又交代了转变的原因（one author and his great detective，即柯南·道尔与福尔摩斯），因果两端信息齐全，不属于未提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The positive qualities of the character of Sherlock Holmes outweigh the negative qualities.",
          "translation": "夏洛克·福尔摩斯这个人物身上的正面特质多于负面特质。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Holmes is memorably eccentric, with a range of endearing and less endearing habits."
          },
          "synonyms": [
            "“positive qualities” 与原文的 “endearing habits”（讨人喜欢的习惯）对应，属于正面特质",
            "“negative qualities” 与原文的 “less endearing habits”（不那么讨人喜欢的习惯）对应，属于负面特质",
            "“outweigh”（压过、多于）在原文中没有任何对应：原文只是把两类习惯并列，并未比较哪一类更多或更重"
          ],
          "locatingTip": "定位：题干主语是人物名 Sherlock Holmes 加“性格特质”，第 2 段第 5 句是全篇唯一直接评价他性格习惯的句子，用 Holmes is memorably eccentric 就能锁定。确定答案技巧：判断题中出现的比较级或“量”的判断（outweigh、more than、mainly）是 NOT GIVEN 的高发区，因为原文必须给出明确的比较结果才能判 TRUE 或 FALSE。原文写 “with a range of endearing and less endearing habits”，两类习惯并列存在，既没有说讨人喜欢的更多，也没有说更少，比较结果是缺失的，只能判 NOT GIVEN。",
          "analysis": "第 2 段对福尔摩斯的人物形象有几处描写：Watson 常被他的天才惊得目瞪口呆（“Watson is constantly amazed and stupefied by Holmes's genius”）；“Holmes is memorably eccentric, with a range of endearing and less endearing habits.”（福尔摩斯古怪得令人难忘，既有一系列讨人喜欢的习惯，也有一些不那么讨人喜欢的习惯）。题干要判断的是“正面特质是否多于负面特质”，而原文的 endearing 与 less endearing 属于并列罗列，原文并没有用 outweigh、more than 这类明确比较数量多寡的表述，也没有给出两类习惯的数量或权重。信息存在但比较关系缺失，按要求判 NOT GIVEN。值得注意的是同段后面还有一句 “categorically better than the plodding and mediocre officials of Scotland Yard”，那是把福尔摩斯与苏格兰场官员相比，属于人与人之间的比较，不是题干所问的“同一个人的优缺点相比”，不能拿来当依据，这正是本题最容易踩的陷阱。",
          "traps": [
            "为什么不是 TRUE：原文只说他有一系列讨人喜欢的习惯和一些不那么讨人喜欢的习惯，两者并列，没有说前者多于后者；而且 “categorically better than … officials of Scotland Yard” 是福尔摩斯与别人的比较，不是他自己优缺点的比较，因此推不出“正面特质占多数”。",
            "为什么不是 FALSE：原文并没有给出相反的数量关系，例如“负面特质更多”，也没有否定他讨人喜欢的一面，只是缺了比较这一层信息，属于信息缺失而非矛盾，因此只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Officials at Scotland Yard were unhappy at the way they were portrayed in the Sherlock Holmes stories.",
          "translation": "苏格兰场（Scotland Yard）的官员们对他们在福尔摩斯故事中被刻画的方式感到不满。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "He is a brilliant private detective, categorically better than the plodding and mediocre officials of Scotland Yard, who constantly turn to him when they are baffled."
          },
          "synonyms": [
            "“the way they were portrayed in the Sherlock Holmes stories” 同义替换为原文的 “the plodding and mediocre officials of Scotland Yard”，即故事中给他们的负面形象",
            "“were unhappy” 在原文中找不到任何对应：原文只描述了他们被写成什么样，从未提到他们的情绪、态度或抗议"
          ],
          "locatingTip": "定位：Scotland Yard 是极佳的大写专有名词定位词，在第 2 段出现两次，本题落在第 6 句描写苏格兰场官员形象的那句。确定答案技巧：题干落点在情绪评价词 unhappy，属于纯主观态度的考查。回原文核对会发现，原文只提供了两样东西：一是故事里对他们的负面描写（plodding and mediocre，迟钝而平庸），二是作者本人的纠偏（现实中 CID 破案率很高、非常能干）。这两点讨论的都是“描写是否属实”，完全没有涉及官员们对描写的感受，属于信息缺失，故判 NOT GIVEN。切记不要因为描写是负面的就自行推断“他们当然不满”，雅思判断题只认原文写过的话。",
          "analysis": "第 2 段先写故事中的设定：“He is a brilliant private detective, categorically better than the plodding and mediocre officials of Scotland Yard, who constantly turn to him when they are baffled.”（他是一名出色的私家侦探，比苏格兰场那些迟钝平庸的官员强得多，这些人一遇到难题就向他求助）。紧接着作者以真实历史作纠正：“This in itself is pure fiction: in real life there were never any brilliant private detectives to whom Scotland Yard turned when they failed, and the Yard's Criminal Investigation Department (CID) had a remarkable clear-up rate and was highly competent.”（这本身就是纯属虚构：现实中从来没有任何出色的私家侦探会让苏格兰场在破不了案时去求助，而苏格兰场的刑事调查局破案率极高、非常能干）。从这两句能得到的信息是：故事把苏格兰场官员写得无能，但现实中该机构其实很能干。题干追问的是“官员们是否对这种描写不满”，原文自始至终没有任何关于他们反应、抱怨或情绪的表述，也没有说他们默许或满意。这种“原文只写了事实、没写态度”的情形正是典型的 NOT GIVEN。做题时若见到 unhappy、satisfied、welcome、resent 这类态度动词，先回原文找有没有对应的情绪线索，找不到就选 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文没有任何一句话提到苏格兰场官员的态度或情绪，“plodding and mediocre” 是故事对他们的描写，“had a remarkable clear-up rate and was highly competent” 是作者替他们申辩，两者都不是他们的感受，把“被批评”直接等同于“不满”属于原文未给出的推理。",
            "为什么不是 FALSE：FALSE 要求原文有相反信息，例如说他们对这种描写毫不在意或表示认同；原文对此同样只字未提，既没写不满也没写满意，只是没说，因此不是 FALSE。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Sherlock Holmes is based on a real private detective who was consulted by Scotland Yard.",
          "translation": "夏洛克·福尔摩斯是以一位受过苏格兰场咨询的真实私家侦探为原型的。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "This in itself is pure fiction: in real life there were never any brilliant private detectives to whom Scotland Yard turned when they failed, and the Yard's Criminal Investigation Department (CID) had a remarkable clear-up rate and was highly competent."
          },
          "synonyms": [
            "“is based on a real private detective” 与原文的 “This in itself is pure fiction”（这本身就是纯属虚构）直接冲突",
            "“a real private detective who was consulted by Scotland Yard” 与原文的 “in real life there were never any brilliant private detectives to whom Scotland Yard turned when they failed” 相互矛盾：原文说现实中根本不存在这样的私家侦探",
            "原文的 “This” 回指上一句所说的“出色的私家侦探，苏格兰场有难题就求助于他”，正是题干的“被苏格兰场咨询的真实私家侦探”"
          ],
          "locatingTip": "定位：题干关键词是 Sherlock Holmes、real private detective 与 Scotland Yard，第 2 段第 6 句讲私家侦探与苏格兰场的虚构关系，第 7 句立刻用 This in itself is pure fiction 给出定性，扫到 pure fiction 即可确定落点。确定答案技巧：本题关键是看懂代词 This 回指的是什么内容，它指的是上一句“私家侦探比苏格兰场官员高明、官员遇到难题就找他”这一整套设定；作者说这套设定在现实中根本不存在（in real life there were never any brilliant private detectives …）。题干却把虚构设定当成“基于真实原型”，与原文的否定判断正面对立，故判 FALSE。看到题干中出现 real、actually、in fact 这类词时，要特别留意原文是否恰好用纯属虚构、不存在之类的表述加以否定。",
          "analysis": "第 2 段第 6 句说，福尔摩斯是出色的私家侦探，比苏格兰场那些迟钝平庸的官员高明，那些人一遇难题就求助他。第 7 句随即给出作者的判断：“This in itself is pure fiction: in real life there were never any brilliant private detectives to whom Scotland Yard turned when they failed, and the Yard's Criminal Investigation Department (CID) had a remarkable clear-up rate and was highly competent.”（这本身就是纯属虚构：现实中从来没有任何出色的私家侦探会在苏格兰场破不了案时被请去帮忙，而苏格兰场刑事调查局的破案率极高，非常能干）。作者不但没有给福尔摩斯安排任何真实原型，还直接否定了他所代表的“天才私家侦探”这一类人在现实中存在。题干说福尔摩斯以一位受苏格兰场咨询的真实私家侦探为原型，正好落在作者否定的靶心上，属于信息冲突，因此答案是 FALSE。做题提示：pure fiction、never、no such 这类绝对否定词出现时，题干若用 real、indeed 之类的肯定说法，通常构成 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文用 “in real life there were never any brilliant private detectives to whom Scotland Yard turned when they failed” 明确否认现实中存在这类被苏格兰场求助的天才私家侦探，原型之说失去前提，因此不能判 TRUE。",
            "为什么不是 NOT GIVEN：原文并非没有交代原型问题，而是正面给出了相反信息，把福尔摩斯所代表的设定定性为 “pure fiction”，并对现实情况作了具体说明（CID 破案率很高、非常能干），所以属于矛盾，不是缺失。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Conan Doyle's work fails to reflect the reality of crime in 19th-century Britain.",
          "translation": "柯南·道尔的作品未能反映 19 世纪英国犯罪的真实情况。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Most of the Holmes stories are set among the higher levels of 19th-century British society, a world inhabited by professional men, retired army officers and country gentlemen, as well as members of royalty and cabinet ministers. Few take place among the working classes or the very poor, whereas in fact much crime was a product of the poverty and gangs in London's underworld."
          },
          "synonyms": [
            "“Conan Doyle's work” 同义替换为原文的 “the Holmes stories”（福尔摩斯故事是柯南·道尔的代表作）",
            "“fails to reflect the reality of crime” 同义替换为原文的 “whereas in fact much crime was a product of the poverty and gangs in London's underworld”，作者用 whereas in fact 把故事设定的阶层与犯罪的真实成因对照起来",
            "“19th-century Britain” 同义替换为原文的 “19th-century British society” 与 “London's underworld”"
          ],
          "locatingTip": "定位：题干关键词是 Conan Doyle、crime 与 19th-century，第 3 段两句都在谈福尔摩斯故事取材的社会阶层与真实犯罪的对比，全段只有两句，读完即可确定。确定答案技巧：判断“作品是否反映现实”要抓住表示反差的连接词。原文第 2 句里的 whereas in fact 是明确的对照信号：“Few take place among the working classes or the very poor”（故事很少涉足工人阶级和极贫人群），“whereas in fact much crime was a product of the poverty and gangs in London's underworld”（而事实上大量犯罪源于贫困和伦敦黑社会的帮派）。故事写上层社会，现实犯罪却出自底层贫困与帮派，两者错位，正说明作品未反映犯罪的真实情况，故判 TRUE。",
          "analysis": "第 3 段是本题唯一的相关段落。第 1 句说：“Most of the Holmes stories are set among the higher levels of 19th-century British society, a world inhabited by professional men, retired army officers and country gentlemen, as well as members of royalty and cabinet ministers.”（大多数福尔摩斯故事设定在 19 世纪英国社会上层，那是一个由专业人士、退役军官、乡绅以及王室成员和内阁大臣构成的世界）。第 2 句说：“Few take place among the working classes or the very poor, whereas in fact much crime was a product of the poverty and gangs in London's underworld.”（很少发生在工人阶级或极贫人群中间，而事实上大量犯罪恰恰是贫困和伦敦黑社会帮派的产物）。作者的论证结构是“故事世界”与“真实犯罪世界”的对照：故事只写有产者与上层，而现实中的犯罪多与底层贫困、帮派相关。所谓作品未能反映犯罪现实，说的正是这种取材偏斜，与原文的 whereas in fact 完全同向，因此答案是 TRUE。做题提示：whereas、in fact、however 这类对照标记词后面往往就是判分依据；本题还要注意把“FALSE 的诱饵”排除掉，原文并未说福尔摩斯故事里没有犯罪，而是说犯罪的类型、阶层与真实情况不符。",
          "traps": [
            "为什么不是 FALSE：原文用 whereas in fact 明确指出故事设定的阶层（上层、有产者）与现实中犯罪的成因（贫困与伦敦黑社会帮派）不一致，正说明作品与犯罪现实脱节，与题干同向，没有矛盾点。",
            "为什么不是 NOT GIVEN：原文对故事取材的阶层和现实中犯罪的成因都作了明确交代，不是“没有提及”，而是已给出且与题干一致，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "In the 1920s and 1930s, most writers of detective stories started to include interesting female characters in their work.",
          "translation": "在 20 世纪 20 和 30 年代，大多数侦探小说作家开始在自己的作品中加入有趣的女性角色。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "So, too, do the stock characters and unstated prejudices in these works: country folk and domestic servants were almost always depicted as unintelligent, and women were often depicted in a simplistic, two-dimensional way, although a few female detective writers would present female characters in a more realistic manner."
          },
          "synonyms": [
            "“In the 1920s and 1930s” 同义替换为原文的 “the 'golden age' of British detective fiction—the 1920s and 30s”。（原文与题干同义，此处是在段落里标记题目给的表述）",
            "“most writers … include interesting female characters” 与原文的 “women were often depicted in a simplistic, two-dimensional way”（女性常被写成简单、扁平的形象）相互冲突",
            "原文的 “a few female detective writers”（少数女侦探小说作家）与题干的 “most writers”（大多数作家）在数量上正好相反，“a few” 对应不到 “most”"
          ],
          "locatingTip": "定位：题干的时间 1920s and 1930s 直接对应第 4 段的 the 'golden age' … the 1920s and 30s，关键词 female characters 让人一眼找到第 4 段末句的 women were often depicted …。确定答案技巧：本题的判分点在数量词与描写性质上。原文说女性 “were often depicted in a simplistic, two-dimensional way”（常常被写得简单、扁平），并且把写得更真实的主体限定为 “a few female detective writers”（少数女作家）；题干却把它放大成 “most writers”（大多数作家）并且把“扁平”换成“有趣的（interesting）”。主体范围和评价方向都相反，属于信息冲突，故判 FALSE。",
          "analysis": "第 4 段讨论的是 20 世纪 20、30 年代英国侦探小说“黄金时代”的社会内涵。段中先说这类作品强调理性、正义必胜，接着指出其中隐含的成见：“So, too, do the stock characters and unstated prejudices in these works: country folk and domestic servants were almost always depicted as unintelligent, and women were often depicted in a simplistic, two-dimensional way, although a few female detective writers would present female characters in a more realistic manner.”（这些作品里的模式化人物和未言明的偏见同样能说明问题：乡下人和家仆几乎总被写成愚笨的，女性则常被写成简单、扁平的形象，不过有少数女侦探小说作家会把女性角色写得更真实）。原文的落脚点是“经常被扁平化处理”，例外只有“少数女作家”，而题干说的是“大多数作家开始加入有趣的女性角色”，无论在参与者的比例（most 与 a few）还是在描写的性质（interesting 与 simplistic, two-dimensional）上都与原文相悖，因此答案是 FALSE。做题提示：这类题最常见的改写陷阱就是拿原文的少数例外去替换题干的多数主体，看到 most、all、mainly 时一定回原文核对数量词。",
          "traps": [
            "为什么不是 TRUE：原文明确说女性角色 “were often depicted in a simplistic, two-dimensional way”，并把写得更真实的情形限定为 “a few female detective writers”；题干既把主体扩大为“大多数作家”，又把描写性质说成“有趣”，与原文相反，不能判 TRUE。",
            "为什么不是 NOT GIVEN：原文对女性角色的描写方式以及例外的范围都有明确表述，信息存在且与题干冲突，不属于没有提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Agatha Christie only earned a few hundred pounds for her books.",
          "translation": "阿加莎·克里斯蒂（Agatha Christie）写书只赚了几百英镑。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Apart from a few superstars such as Agatha Christie, financial rewards for these interwar authors were rather meagre; a few hundred pounds per book—a useful income, but nothing princely."
          },
          "synonyms": [
            "“Apart from a few superstars such as Agatha Christie” 中的 Apart from（除……之外）表示把克里斯蒂排除在外，即“几百英镑”的说法不适用于她",
            "“a few hundred pounds per book” 在原文中的适用对象是 “these interwar authors”，即除了少数巨星之外的其他两次大战之间的作家",
            "“only earned” 与原文的 “a few hundred pounds per book—a useful income, but nothing princely” 在对象上错位：原句这笔收入指的是其他作家，不是克里斯蒂"
          ],
          "locatingTip": "定位：Agatha Christie 是全文唯一出现的这位作家名，且为大写专有名词，第 5 段末句一步锁定，扫读时不必理会前面的人名。确定答案技巧：本题的命门是句首的 Apart from 这一排除结构。“Apart from a few superstars such as Agatha Christie, financial rewards for these interwar authors were rather meagre; a few hundred pounds per book …” 的意思是：除了克里斯蒂等少数超级巨星之外，其他作家的稿酬都很微薄，每本书几百英镑。也就是说，几百英镑恰恰是克里斯蒂被排除掉的那种待遇，题干却把它按在她头上，与原文相反，故判 FALSE。遇到 Apart from、except、other than 时，首先要确定被排除的对象是谁，答案往往就在这个排除关系里。",
          "analysis": "第 5 段先列举黄金时代作家们的本职：柯南·道尔是医生，Freeman Wills Crofts 是北爱尔兰的铁路工程师，Chesterton 与 Anthony Berkeley 是记者，Cecil Street 是职业军官。随后是本题定位句：“Apart from a few superstars such as Agatha Christie, financial rewards for these interwar authors were rather meagre; a few hundred pounds per book—a useful income, but nothing princely.”（除了克里斯蒂等少数超级巨星，这些两次大战之间的作家稿酬相当微薄；每本书几百英镑，算是一笔有用的收入，但绝不富庶）。句子的语法关系决定了语义：Apart from 引出的短语是被排除的例外，主句的 rather meagre 与 a few hundred pounds per book 只修饰 these interwar authors（除巨星之外的作家）。把克里斯蒂放进这个被排除的位置，等于说她不属于“稿酬微薄、每本书几百英镑”的那一群。题干却把这项待遇直接安在她身上，与原文矛盾，因此答案是 FALSE。做题提示：本句破折号后的 a useful income, but nothing princely 是对“几百英镑”的补充评价，并不改变适用对象，不要被它带偏。",
          "traps": [
            "为什么不是 TRUE：原文用 “Apart from a few superstars such as Agatha Christie” 明确把她排除在稿酬微薄的作家之外，每本书几百英镑的说法指向的是其他两次大战之间的作家，因此题干把该待遇归到她身上与原文相悖。",
            "为什么不是 NOT GIVEN：原文对她的收入情况作了间接但明确的交代，即她属于不受“稿酬微薄”这一判断约束的少数巨星，信息存在且方向与题干相反，所以不是信息缺失。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 表格填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Rex Stout and Ellery Queen's works: were mainly unsuccessful 9 ________ of British detective fiction",
          "translation": "雷克斯·斯托特（Rex Stout）与埃勒里·奎因（Ellery Queen）的作品：主要是对英国侦探小说不大成功的 ________。",
          "answer": "imitations",
          "wordClass": "名词（复数，指模仿之作；空格前有形容词 unsuccessful 修饰，空格后接介词 of，需要名词复数形式 imitations）",
          "locating": {
            "paragraph": "6",
            "quote": "For the most part their books were mere imitations of the British models, although they were seldom wholly successful."
          },
          "synonyms": [
            "“were mainly unsuccessful” 同义替换为原文的 “were seldom wholly successful”（很少完全成功）",
            "“of British detective fiction” 同义替换为原文的 “of the British models”（对英国范本的模仿对象）",
            "“Rex Stout and Ellery Queen's works” 同义替换为原文的 “their books”，their 回指上一句点名的 Rex Stout 与 Ellery Queen"
          ],
          "locatingTip": "定位：表格第一行的 Rex Stout and Ellery Queen 是两个人名加连词，属极佳定位词，只出现在第 6 段首句，直接跳到第 6 段。确定答案技巧：题干句型是“形容词 unsuccessful 加空格加介词 of”，空格处必须是名词，且与 of British detective fiction 构成“对英国侦探小说的某种东西”。原文对应句 “their books were mere imitations of the British models” 正好给出同样的结构：imitations of，主语 their books 对应表格里的 Rex Stout and Ellery Queen's works，seldom wholly successful 对应题干的 mainly unsuccessful。答案即 imitations，注意用复数形式，且只能填一个词。",
          "analysis": "第 6 段开头写美国作家对英国侦探小说的模仿：“US writers such as Rex Stout and Ellery Queen attempted to recreate the 'golden age' of British detective fiction. For the most part their books were mere imitations of the British models, although they were seldom wholly successful.”（像 Rex Stout 和 Ellery Queen 这样的美国作家试图重建英国侦探小说的“黄金时代”。大体上，他们的书只是对英国范本的模仿，虽然很少完全成功）。表格第一行把这两条信息压缩成一句：“were mainly unsuccessful [9] of British detective fiction”。其中 mainly 对应原文的 For the most part（大体上），unsuccessful 对应 seldom wholly successful（很少完全成功），of British detective fiction 对应 of the British models，剩下的中心名词就是 imitations（模仿之作）。从词性看，空格前是形容词 unsuccessful、空格后是介词 of，能同时满足这两个条件的是复数名词 imitations；答案必须写复数，因为原文用的是 imitations，且指多部作品。整句读作 were mainly unsuccessful imitations of British detective fiction 与原意吻合。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Hammett and Chandler's works: were full of 10 ________",
          "translation": "哈米特（Hammett）与钱德勒（Chandler）的作品：充满了 ________。",
          "answer": "violence",
          "wordClass": "名词（不可数，指暴力内容；作介词 of 的宾语，保持不可数形式 violence，不加冠词也不加复数）",
          "locating": {
            "paragraph": "6",
            "quote": "Apart from the violence that appeared throughout their works, Hammett's and Chandler's novels were often marked by a political agenda that sought to expose the inequality they saw at the heart of American life."
          },
          "synonyms": [
            "“were full of violence” 同义替换为原文的 “the violence that appeared throughout their works”（贯穿他们作品的暴力），full of 与 throughout 都表示普遍存在",
            "“Hammett and Chandler's works” 同义替换为原文的 “their works” 与 “Hammett's and Chandler's novels”，用姓氏所有格加 novels 复现"
          ],
          "locatingTip": "定位：表格第二组关键词 Hammett 与 Chandler 集中在第 6 段（第 3 句先点出二人笔下出现的‘硬汉’私家侦探），本题的落点是第 4 句，一步到位。确定答案技巧：题干 “were full of [10]” 需要一个名词作宾语，说明作品里到处都是某种东西。原文用另一种句法表达同一概念：“Apart from the violence that appeared throughout their works …”，贯穿全篇出现的那个东西就是 violence。注意句首的 Apart from 是“除了……之外”的排除结构，说明暴力和政治议题是两件并列的事，不要把它误读成“除了暴力就没有别的”，答案只需填 violence 一个词，不加冠词。",
          "analysis": "第 6 段第 4 句是本题与下一题共用的定位句：“Apart from the violence that appeared throughout their works, Hammett's and Chandler's novels were often marked by a political agenda that sought to expose the inequality they saw at the heart of American life.”（除了贯穿他们作品的暴力之外，哈米特和钱德勒的小说还常带有一种政治议程，意在揭露他们眼中美国生活的核心不平等）。表格第二组把这句话拆成三条备注：introduced the 'tough' private detective 对应前文 “the tough private cop who appeared in the works of Dashiell Hammett and Raymond Chandler”；were full of [10] 对应 “the violence that appeared throughout their works”；had a [11] message 对应 “a political agenda”。题干用 full of 概括 throughout（遍布、贯穿），宾语就是 violence；从词性看，of 后接名词，violence 作不可数名词使用，保持原形即可，不加冠词、不加复数。第 5 句还提到 “Britain had no real parallel either to their outlook on the world or (until much later) to their violence”，可见 violence 一词在本段被反复强调，是哈米特与钱德勒作品的显著标签，可以互相印证。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Hammett and Chandler's works: had a 11 ________ message about the unfairness of society",
          "translation": "哈米特与钱德勒的作品：带有一个关于社会不公的 ________ 信息。",
          "answer": "political",
          "wordClass": "形容词（作前置定语修饰名词 message，对应原文的 agenda；保持原级 political）",
          "locating": {
            "paragraph": "6",
            "quote": "Hammett's and Chandler's novels were often marked by a political agenda that sought to expose the inequality they saw at the heart of American life."
          },
          "synonyms": [
            "“had a political message” 同义替换为原文的 “were often marked by a political agenda”，message 与 agenda 对应，marked by 与 had 对应",
            "“about the unfairness of society” 同义替换为原文的 “that sought to expose the inequality they saw at the heart of American life”，unfairness 与 inequality 对应，of society 与 at the heart of American life 对应"
          ],
          "locatingTip": "定位：本题与第 10 题共用同一句，Hammett's and Chandler's novels 在原文只出现一次，第 6 段第 4 句即可锁定。确定答案技巧：题干 “had a [11] message about …” 的结构是“冠词加空格加名词”，空格处应填形容词作定语。原文用名词短语 “a political agenda that sought to expose the inequality” 表达同样的意思，其中 agenda 相当于题干的 message，修饰它的 political 就是空格所需之词。注意题干已经给出 a 和 message，因此答案只需填形容词 political，不要填 politics、politically 或 agenda。",
          "analysis": "第 6 段第 4 句既支撑第 10 题也支撑本题：“Apart from the violence that appeared throughout their works, Hammett's and Chandler's novels were often marked by a political agenda that sought to expose the inequality they saw at the heart of American life.”（除了贯穿作品的暴力，哈米特和钱德勒的小说还常带有一种政治议程，意在揭露他们眼中美国生活核心的不平等）。题干把 “a political agenda” 改写成 “a [11] message about the unfairness of society”：agenda 换成 message（都指作品传达的立场性内容），political 留在空格位置，inequality they saw at the heart of American life 概括为 the unfairness of society。因此答案为形容词 political。从词性看，空格位于冠词 a 与名词 message 之间，只能填形容词，political 保持原形即可。另外，下一句 “Britain had no real parallel either to their outlook on the world or (until much later) to their violence” 中的 outlook on the world 也可以作为“政治观点”的旁证，说明这类作品确实带有观念层面的诉求。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Writers such as P. D. James: created stories with many 12 ________",
          "translation": "P. D. 詹姆斯（P. D. James）等作家：创作了许多 ________ 的故事。",
          "answer": "twists",
          "wordClass": "名词（复数，指情节转折；空格前有 many，必须用复数形式 twists）",
          "locating": {
            "paragraph": "7",
            "quote": "The best-known crime fiction writers, such as P. D. James, eschewed private detectives for police inspectors, and straightforward puzzles for stories that were full of unexpected twists."
          },
          "synonyms": [
            "“created stories with many twists” 同义替换为原文的 “stories that were full of unexpected twists”，many 与 full of 对应，created 与原文 eschewed … for（转而选择）构成的对比关系对应",
            "“Writers such as P. D. James” 同义替换为原文的 “The best-known crime fiction writers, such as P. D. James”"
          ],
          "locatingTip": "定位：table 第三行给出 P. D. James 这一人名，第 7 段第 3 句是全文唯一出现该人名的句子，直接定位到该段末尾句。确定答案技巧：题干结构为 “many [12]”，说明空格是可数名词复数。原文用 full of unexpected twists 表达“充满出人意料的转折”，其中 many 对应 full of，unexpected 属于描述性成分不占空格，中心名词 twists 即答案。另外要注意同句前半的对比结构：eschewed private detectives for police inspectors（不用私家侦探而用警探）对应表格第一条“写了警探而非私家侦探”，and straightforward puzzles for stories that were full of unexpected twists（放弃直白的谜题而改写出人意料的转折）对应表格第二条，两条备注都落在同一句里，说明定位无误。",
          "analysis": "第 7 段讲经典英国侦探小说到 1960 年前后走向衰落的原因：“By around 1960, the classic British detective story was in serious decline. It seemed that writers had simply run out of ingenious plots and puzzles for their detectives to solve. The best-known crime fiction writers, such as P. D. James, eschewed private detectives for police inspectors, and straightforward puzzles for stories that were full of unexpected twists.”（到 1960 年前后，经典英国侦探小说严重衰落。作家们似乎已经把巧妙的构思和为侦探设计的谜题用尽了。最知名的犯罪小说作家，如 P. D. James，舍弃私家侦探而改用警探，舍弃直白的谜题而转向充满出人意料转折的故事）。末句的 eschewed A for B 结构把“舍弃什么、转向什么”并列了两组，第二组是 straightforward puzzles（直白的谜题）换来 stories full of unexpected twists（充满意外转折的故事），正好对应表格第三行“创作了许多转折的故事”。题干用 many 修饰空格，说明填可数名词复数 twists；twist 在此指情节反转，需按原文复数形式填写。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "scientific progress is not always seen as 13 ________",
          "translation": "科学进步并不总被视为 ________。",
          "answer": "beneficial",
          "wordClass": "形容词（作被动结构 is seen as 后的主语补足语，说明科学发展的性质；与原文 invariably beneficial 对应，保持原级 beneficial）",
          "locating": {
            "paragraph": "8",
            "quote": "The belief that scientific developments were invariably beneficial possibly reached its height during the period when the classic detective story flourished, as did the belief in putting rationality at the heart of Britain's education system."
          },
          "synonyms": [
            "“scientific progress” 同义替换为原文的 “scientific developments”",
            "“not always seen as beneficial” 与原文的 “invariably beneficial” 构成正反对照：原文说这种“科学必定有益”的信念在黄金时代达到顶点，如今随着社会转变已被削弱，故不再被普遍接受",
            "“seen as” 同义替换为原文的 “The belief that …”，信念即“被视为”的内容"
          ],
          "locatingTip": "定位：表格最后一行的栏目是 Britain 加 Present day，关键词 scientific 在全篇只出现于第 8 段，扫到 scientific 即可锁定末段第 3 句。确定答案技巧：题干 “scientific progress is not always seen as [13]” 中，see as 后接形容词作补语；原文对应的是 “The belief that scientific developments were invariably beneficial”，信念的内容就是 scientific developments were beneficial，形容词 beneficial 即空格答案。判断“如今不总是这样看”的依据在段落开头两句：末段说如今侦探小说在英国的旧形式已不复存在，并且 “Arguably this mirrors the transformation of that society as a whole”（这可以说映射了整个社会的转变），随后用过去时的信念与现在的质疑相对照（最后一句的 was replaced by a questioning），说明这类信念已不再是普遍立场，与题干 not always 吻合。",
          "analysis": "第 8 段是全文的总结段：“Today the detective story no longer exists in Britain, at least in its old form. Arguably this mirrors the transformation of that society as a whole. The belief that scientific developments were invariably beneficial possibly reached its height during the period when the classic detective story flourished, as did the belief in putting rationality at the heart of Britain's education system. And finally, the central belief that evil-doers would inevitably get their just deserts through the incorruptibility of the judicial system was replaced by a questioning of some of the procedures and decisions associated with that system.”（今天侦探小说在英国已不复存在，至少旧有形式如此。这可以说是整个社会转变的映射。科学进步必定有益的信念，可能正是在经典侦探小说繁盛时期达到顶点，把理性置于英国教育体系核心的信念也是如此。而最后，那种认为作恶者必因司法体系的廉洁而得到应有惩罚的核心信念，已被对司法体系某些程序与决定的质疑所取代）。表格最后一行把这段的三条信念改写为“今天”的三条变化：scientific progress is not always seen as [13]、less trust is now placed in rationality、there is more questioning of the judicial system。后两条都与原文最后两句对应，第一条对应的就是 “The belief that scientific developments were invariably beneficial”，即当年人们认为科学发展总是有益的，而表格用 not always seen as 表达这一信念如今已被动摇，空格填形容词 beneficial。从词性看，seen as 后需要形容词作补语，beneficial 保持原形，词尾不加 -ly、不改比较级。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
