(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-107", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-107",
  "meta": {
    "examId": "p1-low-107",
    "title": "The life of Beatrix Potter 彼得兔作家",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "She received lessons at home from a 1 ________ .",
          "translation": "她在家由一位 ________ 授课。",
          "answer": "governess",
          "wordClass": "名词（单数，指家庭女教师；空格前有不定冠词 a，作介词 from 的宾语，故填单数形式，不加复数、不加冠词）",
          "locating": {
            "paragraph": "2",
            "quote": "She was educated at home by a governess and rarely saw her brother, Bertram, who was sent to boarding school."
          },
          "synonyms": [
            "“received lessons at home” 同义替换为原文的 “was educated at home”（在家接受教育）",
            "“from a …” 同义替换为原文的 “by a …”，两者都用介词引出施教者",
            "“governess” 为原文原词：在家中给她上课的人就是 governess（家庭女教师）"
          ],
          "locatingTip": "定位：题干属于 Childhood 栏目，关键词是 lessons at home 与 a 加空格，回到第 2 段第 2 句即可看到 “She was educated at home by a governess”。确定答案技巧：题干的 received lessons 对应原文的 was educated，介词 from 对应原文的 by，两者都指向同一个施动者，空格要填的就是被 by 引出的那个人 governess。注意同段的 “her brother, Bertram, who was sent to boarding school” 讲的是她弟弟被送去寄宿学校，属于典型干扰信息，不能因为看到 school 就误填。",
          "analysis": "第 2 段交代波特的童年：“Born into a comfortable middle-class family in London in 1866, Potter spent much of her early life in her own company. She was educated at home by a governess and rarely saw her brother, Bertram, who was sent to boarding school.”（1866 年波特出生于伦敦一个舒适的中产家庭，早年大部分时间都独处。她在家由一位家庭女教师授课，很少见到被送去寄宿学校的弟弟 Bertram）。题干把主动结构 “was educated at home by a governess” 改写成 “received lessons at home from a 1 …”，其中 received lessons 等于 was educated，at home 原词保留，from 等于 by，因此空格里必须是施教者 governess。从词性看，空格前有不定冠词 a，后面紧跟句点，只能填可数名词单数，故写 governess（不要写 governesses，也不要写 teacher 这类原文没有的词，题目要求 ONE WORD ONLY 且取自原文）。",
          "traps": []
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "She wrote in her 2 ________ in code.",
          "translation": "她用密码写 ________。",
          "answer": "diary",
          "wordClass": "名词（单数，指日记；空格前有物主代词 her，作介词 in 的宾语，故填单数形式 diary）",
          "locating": {
            "paragraph": "2",
            "quote": "When she was 15, she began to keep a diary written in a secret code of her own invention."
          },
          "synonyms": [
            "“wrote in her … in code” 同义替换为原文的 “keep a diary written in a secret code”",
            "“in code” 对应原文的 “in a secret code of her own invention”（用她自创的秘密密码）",
            "“her diary” 在同段末句原词复现：“in her diary she expressed herself freely”"
          ],
          "locatingTip": "定位：题干关键词是 code，全篇只有第 2 段谈“密码”，用 code 扫读可直接锁定该段。确定答案技巧：原文结构是 keep a diary written in a secret code，题干把它拆成 wrote in her 加空格加 in code，被密码写的东西就是 diary，因此答案是 diary。作答时先把 “When she was 15” 这一时间点与题干无关信息区分开，只取介词短语 written in a secret code 所修饰的名词。",
          "analysis": "第 2 段中间写道：“Having little social contact with children of her own age, Potter was drawn into a private world of writing. When she was 15, she began to keep a diary written in a secret code of her own invention.”（由于与同龄孩子几乎没有社交接触，波特沉浸在自己的写作世界里。15 岁时，她开始用自己发明的秘密密码记日记）。题干 “She wrote in her 2 … in code” 与原文 “keep a diary written in a secret code” 完全对应：wrote 对应 keep（记），in code 对应 in a secret code，被写的内容就是 diary。紧接着原文还说 “Even Beatrix herself, when she read back over it in later life, found it difficult to understand.”（连她自己后来重读都很难看懂），进一步说明这段密码笔记就是她的日记。空格前有物主代词 her，后面没有冠词位置，填单数名词 diary 即可，不要填 code（密码是记录方式，题干已经把 in code 单独写出来了）。",
          "traps": []
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "She disliked the work of some 3 ________ of the time.",
          "translation": "她不喜欢当时某些 ________ 的作品。",
          "answer": "artists",
          "wordClass": "名词（复数，指人；空格前有 some 修饰，作介词 of 的宾语，原文也是复数，故必须写 artists）",
          "locating": {
            "paragraph": "2",
            "quote": "To the outside world Beatrix seemed shy and reserved, but in her diary she expressed herself freely and was critical of the work of several contemporary artists."
          },
          "synonyms": [
            "“disliked” 同义替换为原文的 “was critical of”（对……持批评态度，即不喜欢）",
            "“of the time” 同义替换为原文的 “contemporary”（同时代的）",
            "“some” 同义替换为原文的 “several”（若干、一些）",
            "“the work of …” 在原文中完全对应：“the work of several contemporary artists”"
          ],
          "locatingTip": "定位：题干关键词是 disliked the work，与第 2 段末句的 was critical of the work 属于同一语义场，扫到 critical 就停下。确定答案技巧：雅思常把“批评、不喜欢”用同义词替换成 critical of、disliked、not keen on 等，这里原文用的是 was critical of the work of several contemporary artists，题干把 several 换成 some 之后问被批评的对象，剩下的名词就是 artists。注意 of the time 是对 contemporary 的改写，别把 contemporary 当成答案填进去（题目只要一个词，且它是形容词）。",
          "analysis": "第 2 段末句：“To the outside world Beatrix seemed shy and reserved, but in her diary she expressed herself freely and was critical of the work of several contemporary artists.”（在世人眼中波特显得害羞而含蓄，但在日记里她表达自由，还批评了几位同时代艺术家的作品）。原文用 but 构成对比：对外人她 shy and reserved，在日记里则 expressed herself freely 并且 was critical of the work。题干说 She disliked the work of some 加空格加 of the time，其中 disliked 对应 was critical of，some 对应 several，of the time 对应 contemporary，三处改写一一对应，问的对象就是被批评作品的创作者，即 artists。从词性看，some 后面接可数名词复数，原文用的也是复数 artists，因此必须写复数形式 artists，写 artist 会因单复数不符而失分。",
          "traps": []
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "She practised drawing things she saw when she visited 4 ________ .",
          "translation": "她参观 ________ 时练习画所见之物。",
          "answer": "museums",
          "wordClass": "名词（复数，指地点；作及物动词 visited 的宾语，原文与题干均为复数概念，故写 museums，不加冠词、不加 the）",
          "locating": {
            "paragraph": "3",
            "quote": "Throughout her childhood she looked after many animals—rabbits, frogs and even bats—and sketched them constantly, gradually improving her work by sketching in museums."
          },
          "synonyms": [
            "“practised drawing” 同义替换为原文的 “improving her work by sketching”（通过写生来不断提升画技）",
            "“things she saw” 对应原文的具体罗列 “many animals—rabbits, frogs and even bats”",
            "“when she visited …” 同义替换为原文的地点状语 “in museums”，题干的 visited 补出了原文隐含的动作"
          ],
          "locatingTip": "定位：题干的 drawing、practised 与第 3 段第 1 至 2 句的 art lessons、sketched、improving her work 属于同一话题，sketching 后紧跟的地点词就是答案词所在。确定答案技巧：原文 “gradually improving her work by sketching in museums” 中的 by 加动名词表示方式，而介词 in 后接的地点就是她练习写生的地方，题干把方式状语改写成 when she visited 加空格，地点词 museums 就落在空格里。注意 animals 是画的对象，不是画画的场所，两者不能混填。",
          "analysis": "第 3 段开头两句：“Potter was a naturally gifted artist, and with the aid of some art lessons she also learned the technical side of drawing. Throughout her childhood she looked after many animals—rabbits, frogs and even bats—and sketched them constantly, gradually improving her work by sketching in museums.”（波特天生有艺术天赋，借助一些美术课她还掌握了绘画的技术层面。整个童年她照料许多动物——兔子、青蛙甚至蝙蝠——并不停地为它们写生，通过在博物馆里写生逐渐提升自己的画技）。题干 “She practised drawing things she saw when she visited 4 …” 与第二句对应：sketched them constantly 与 gradually improving her work by sketching 合并改写为 practised drawing，things she saw 概括了那些被她画下来的动物，紧接着的地点状语 in museums 就是题干中 visited 后所要填的地点。原文用复数 museums、且不加冠词，因此答案写 museums，不要写成 the museums 或 a museum（必须 ONE WORD ONLY 且忠实原文形式）。",
          "traps": []
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Her 5 ________ to have a career in natural history was not realised.",
          "translation": "她想在博物学领域发展的 ________ 未能实现。",
          "answer": "ambition",
          "wordClass": "名词（单数，抽象名词；空格前有物主代词 her 作限定，作句子主语，后接不定式 to have a career，故填单数形式 ambition）",
          "locating": {
            "paragraph": "3",
            "quote": "She would spend many hours drawing wildlife such as fungi and flowers, and at one time she had an ambition to develop this scientific interest."
          },
          "synonyms": [
            "“have a career in natural history” 同义替换为原文的 “develop this scientific interest”，其中 this scientific interest 回指上文的 natural history",
            "“was not realised” 对应下文结果 “An uncle tried to help her enrol at the Royal Botanic Gardens at Kew in London, but she was rejected because of her gender”",
            "“Her … to …” 的结构与原文 “she had an ambition to …” 对应，空格承担 ambition 一词"
          ],
          "locatingTip": "定位：题干关键词是 natural history，第 3 段中段出现 “She was also interested in natural history.”，紧跟的下一句就是答案所在句。确定答案技巧：原文用 at one time she had an ambition to develop this scientific interest 描述她曾有的想法，题干把它改写成 Her 加空格加 to have a career in natural history，had an ambition to 与 Her … to 结构对应，因此空格填 ambition。判断“未实现”的依据来自再下一句：她因性别被邱园的皇家植物园拒收，说明这个心愿落空了。注意不要把 scientific interest 或 natural history 当答案，它们分别是 ambition 的内容和领域，不是被“未实现”的那个名词。",
          "analysis": "第 3 段中后部：“She was also interested in natural history. She would spend many hours drawing wildlife such as fungi and flowers, and at one time she had an ambition to develop this scientific interest. An uncle tried to help her enrol at the Royal Botanic Gardens at Kew in London, but she was rejected because of her gender.”（她还对博物学感兴趣。她会花很多小时画真菌和花卉等野生生物，曾一度有发展这一科学兴趣的雄心。一位叔叔曾设法帮她进入伦敦邱园的皇家植物园，但她因性别被拒）。题干 “Her 5 … to have a career in natural history was not realised” 把原文的名词 ambition 抽出来作主语，用 have a career in natural history 概括 develop this scientific interest，再用 was not realised 概括被拒的结果。整个链条是：有雄心（had an ambition）到尝试（An uncle tried to help her enrol）到失败（she was rejected because of her gender），因此答案是 ambition。词性上空格前有 her 限定，后面直接跟不定式 to have，属于名词加不定式的典型搭配，只填单数名词 ambition。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Her illustrations were recognised as assisting research into 6 ________ .",
          "translation": "她的插图被认为有助于 ________ 领域的研究。",
          "answer": "mycology",
          "wordClass": "名词（不可数，学科名称；作介词 into 的宾语，保持不可数形式 mycology）",
          "locating": {
            "paragraph": "3",
            "quote": "Nevertheless, she won respect from the scientific establishment for her illustrations and her contribution to mycology, the study of fungi."
          },
          "synonyms": [
            "“were recognised” 同义替换为原文的 “won respect from the scientific establishment”（赢得科学界的尊重，即得到认可）",
            "“assisting research into …” 同义替换为原文的 “her contribution to …”（对某领域的贡献）",
            "“mycology” 在原文后紧跟同位语 “the study of fungi”，直接说明它就是真菌学"
          ],
          "locatingTip": "定位：题干的关键词是 illustrations，第 3 段末尾再次出现 illustrations，答案就在同句。确定答案技巧：原文用 won respect from the scientific establishment for her illustrations and her contribution to mycology 把两项功劳并列，题干把 for 引出的“赢得尊重的原因”改写成 were recognised as assisting research into 加空格，那么与 her contribution to 平行的那个领域名词就是 mycology。原文随即用同位语 the study of fungi 作解释，可用来验证：研究真菌的学科确实叫 mycology（真菌学）。",
          "analysis": "第 3 段末句：“Nevertheless, she won respect from the scientific establishment for her illustrations and her contribution to mycology, the study of fungi.”（尽管如此，她仍凭自己的插画以及对真菌学——即对真菌的研究——的贡献赢得了科学界的尊重）。题干的 were recognised 对应 won respect from the scientific establishment，assisting research into 对应 her contribution to，剩下要填的就是她作出贡献的学科领域 mycology。原文紧跟的 appositive（同位语）the study of fungi 是雅思常见的释义手段，相当于直接给你解释了这个生词，考场上即使不认识 mycology 也能靠这一步确认。注意 mycology 是不可数名词、无复数形式，也不要写成 fungi（那是研究对象，不是学科名）。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The life of a typical married woman at that time appealed to Potter.",
          "translation": "当时普通已婚女性的生活对波特有吸引力。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Fiercely independent, she disliked the idea of being tied to a domestic life that, at that time, consisted mostly of staying at home and raising children."
          },
          "synonyms": [
            "“the life of a typical married woman” 同义替换为原文的 “a domestic life that … consisted mostly of staying at home and raising children”（以持家和育儿为主的家庭生活）",
            "“at that time” 在原文原词复现：“that, at that time, consisted mostly of …”",
            "“appealed to Potter” 与原文的 “she disliked the idea”（她厌恶这种想法）意义相反"
          ],
          "locatingTip": "定位：题干关键词 at that time 与 married woman 的生活，对应第 4 段讲婚姻态度的部分；该段出现 at that time 的正是定位句。确定答案技巧：本题判断点是情感倾向，必须找到原文对“家庭生活”的评价词。原文用 fiercely independent（极度独立）铺垫，随后直接说 she disliked the idea of being tied to a domestic life，disliked 与题干的 appealed to（有吸引力、受吸引）是反义，因此判 FALSE。做这类“态度题”时不要被“她确实拒绝了所有求婚者”这一情节推断感情色彩，必须回到原文看有没有明确的喜恶表达。",
          "analysis": "第 4 段全文：“When Potter was in her early twenties, her parents tried to arrange a husband for her. Many suitable suitors were found; however, Potter turned them all down. Fiercely independent, she disliked the idea of being tied to a domestic life that, at that time, consisted mostly of staying at home and raising children. Thus—unusually for British women of the period—she remained single and lived in her parents' home.”（波特二十岁出头时，父母试图为她安排丈夫。虽然找到了许多合适的人选，但波特全部拒绝了。由于极度独立，她厌恶被束缚于那种在当时主要是待在家里、养育孩子的家庭生活。因此——在当时英国女性中很不寻常——她终身未婚，住在父母家）。原文的因果链非常清楚：因为她 dislikes 那种家庭生活，所以才拒绝了所有婚事。题干却说“当时典型的已婚女性生活对波特有吸引力”，把 dislike 换成 appealed to，与原文正面对立，因此答案是 FALSE。注意 domestic life 在此处的语境就是已婚妇女的生活（由 staying at home and raising children 界定），题干用 the life of a typical married woman 来概括是合理的同义改写，替换没问题，错只错在情感方向上。",
          "traps": [
            "为什么不是 TRUE：原文明确写 she disliked the idea of being tied to a domestic life（她厌恶被束缚于家庭生活），disliked 与题干的 appealed to 意义相反，属于事实冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不但描述了当时家庭生活的内容（staying at home and raising children），还直接给出了波特的态度（Fiercely independent, she disliked the idea …），信息完整且方向与题干相反，所以只能判 FALSE，而不是信息缺失。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Potter's publishers insisted on changing the title of her first book.",
          "translation": "波特的出版商坚持要更改她第一本书的书名。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "For several years Potter tried to get her first children's book, The Tale of Peter Rabbit, published. Her initial attempts were unsuccessful, but she persevered, and eventually Frederick Warne & Co. accepted the book."
          },
          "synonyms": [
            "“her first book” 同义替换为原文的 “her first children's book, The Tale of Peter Rabbit”",
            "“Potter's publishers” 对应原文的 “Frederick Warne & Co.”，即最终接受书稿的出版商",
            "“insisted on changing the title” 在原文中没有任何对应：原文只交代出版商 accepted the book，书名自始至终都是 The Tale of Peter Rabbit"
          ],
          "locatingTip": "定位：题干用 publishers 和 first book 两个关键词，第 5 段开头正是讲她第一本书的出版经过，Frederick Warne & Co. 就是那个出版商。确定答案技巧：判断“是否改过书名”要看原文有没有出现 title、name、renamed、changed 之类的表述。原文只说 try to get the book published、initial attempts were unsuccessful、she persevered、eventually … accepted the book，全程谈的是“能否出版”而不是“书名是否被改”；书名 The Tale of Peter Rabbit 在文中出现时也始终是原样。原文没提，就一定不是 TRUE 也不是 FALSE，而是 NOT GIVEN。切忌因为“出版商常改书名”的常识而自行补出情节。",
          "analysis": "第 5 段开头：“For several years Potter tried to get her first children's book, The Tale of Peter Rabbit, published. Her initial attempts were unsuccessful, but she persevered, and eventually Frederick Warne & Co. accepted the book.”（有几年时间波特都在设法让自己的第一本童书《彼得兔的故事》出版。起初的尝试都不成功，但她坚持不懈，最终 Frederick Warne 公司接受了这部书稿）。这段只讲了三件事：她努力求出版、早期被拒、最终被接受。题干的落点是 changed the title（更改书名），属于出版过程中的另一个环节，原文对此毫无交代，而且书名 The Tale of Peter Rabbit 在此处以及后文都保持一致，看不出改名的痕迹。按判断题规则，原文未提供相关信息时选 NOT GIVEN。注意不要把第 10 题所涉及的“插图是否彩色”与之混淆，两题的考点完全不同。",
          "traps": [
            "为什么不是 TRUE：原文只说明 Frederick Warne & Co. accepted the book，从未出现任何关于更改书名的表述，也没有 title、renamed 之类的字眼，因此“出版商坚持改书名”得不到原文支持。",
            "为什么不是 FALSE：FALSE 要求原文有相反信息，例如“出版商没有要求改名”“书名始终未动”之类的明确表态；原文只是没提这一环节，属于信息缺失，而不是给出相反事实，所以不能选 FALSE。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "The publishers doubted whether Potter's first book would be successful.",
          "translation": "出版商怀疑波特的第一本书能否成功。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "It was finally published in 1902, when Potter was 36, though the publishers did not expect it to sell many copies."
          },
          "synonyms": [
            "“doubted whether … would be successful” 同义替换为原文的 “did not expect it to sell many copies”（不指望它卖出多少本，即对销路信心不足）",
            "“Potter's first book” 对应原文的代词 it，回指前句的 her first children's book, The Tale of Peter Rabbit",
            "“the publishers” 在原文原词复现，指接受书稿的 Frederick Warne 公司"
          ],
          "locatingTip": "定位：题干的 publishers 加上第一本书的出版信息，在第 5 段中部的 though the publishers did not expect it to sell many copies 一句直接命中。确定答案技巧：本题考“是否怀疑成功”，原文用否定式 not expect … to sell many copies 表达对销量的低期待，与题干的 doubted whether … would be successful 在逻辑与程度上一一对应，属于同义改写而非矛盾，因此选 TRUE。注意 though 引导让步，说明“虽然书出版了，但出版商并不看好销量”，让步关系不影响本句所陈述的怀疑态度。",
          "analysis": "第 5 段中：“It was finally published in 1902, when Potter was 36, though the publishers did not expect it to sell many copies.”（这本书终于在 1902 年出版，当时波特 36 岁，不过出版商并不指望它能卖出多少本）。题干的 doubted whether Potter's first book would be successful 是对这句话的正面概括：怀疑成功等于不指望畅销，did not expect it to sell many copies 就是最低限度的“怀疑”。原文后续还提到出版商只把这当成一次测试（as his first assignment—essentially a test），也可作为“期望不高”的侧面印证；而最终结果却大卖（By the end of the year, 28,000 copies were in print），与出版商的预判相反，这恰恰说明他们当初是有疑虑的。三处证据方向一致，故选 TRUE。做本题时要注意雅思常用否定形式的期待表达（did not expect、doubted、was sceptical）来表达“怀疑、不看好”。",
          "traps": [
            "为什么不是 FALSE：原文用 did not expect it to sell many copies 明确表达对销路的低预期，与“怀疑能否成功”同向，原文没有任何“出版商很有信心”的表述，因此不构成矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文直接写出了出版商对这本书销量的判断（不指望卖很多），已对“他们是否怀疑成功”给出明确回答，信息充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Norman Warne suggested Potter include black-and-white illustrations in her first book.",
          "translation": "诺曼·沃恩建议波特在她的第一本书里加入黑白插图。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "It was Norman who insisted that each illustration should be in colour, while Potter insisted the book remain small enough for children to hold easily."
          },
          "synonyms": [
            "“Norman Warne” 在原文中以 “It was Norman who insisted …” 的强调句形式出现，人名直接复现",
            "“suggested … include” 同义替换为原文的 “insisted that each illustration should be …”，均为他一方提出的要求",
            "“black-and-white illustrations” 与原文的 “in colour”（彩色）正相反，色彩属性被改写"
          ],
          "locatingTip": "定位：题干人名 Norman Warne 是极佳的定位词，第 5 段后半部分集中讲他与波特的合作，插图颜色那一句就是答案句。确定答案技巧：本题考色彩属性，只需核对原文里 illustration 到底是 colour 还是 black-and-white。原文写 It was Norman who insisted that each illustration should be in colour（正是诺曼坚持每幅插图都必须是彩色的），题干却说他建议采用黑白插图，色彩信息被完全反转，因此判 FALSE。注意后半句 while Potter insisted the book remain small enough for children to hold easily 是波特的相反主张（开本要小），两人主张的差异可以用来帮助记忆，但不要把它误当成插图颜色的信息。",
          "analysis": "第 5 段后部：“The project was given to the youngest brother in the firm, Norman Warne, as his first assignment—essentially a test. Luckily, he warmed to both the book and its author. Determined to make it a success, he worked closely with Potter, poring over every detail. It was Norman who insisted that each illustration should be in colour, while Potter insisted the book remain small enough for children to hold easily.”（这个项目交给了公司里最年轻的兄弟诺曼·沃恩，作为他的第一项任务——实质上是一次考验。幸运的是，他对这本书和作者本人都很认可。他决心让它成功，与波特密切合作，细究每一处细节。正是诺曼坚持每幅插图都应是彩色的，而波特则坚持开本要小到方便孩子拿）。题干把 insisted … in colour 改写成 suggested … include black-and-white illustrations，建议的内容被换成了相反的颜色。insisted 与 suggested 在“提出主张”这一层可以算同义替换，问题只出在 colour 与 black-and-white 的对立上：原文要求的正是彩色而非黑白，属于事实矛盾，故判 FALSE。做本题时要盯住色彩、大小、数量这类具体属性词，它们是 FALSE 的高发点。",
          "traps": [
            "为什么不是 TRUE：原文明确写 he insisted that each illustration should be in colour，主张的是彩色插图；题干说他建议加入黑白插图，与原文的颜色要求正好相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对插图的颜色有十分明确的交代（in colour），并非未提及此事，只是与题干的说法冲突，因此只能判 FALSE。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "At first, Potter's parents disapproved of Norman Warne as a potential husband.",
          "translation": "起初，波特的父母不赞成诺曼·沃恩成为她的丈夫。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "However, Potter's parents disapproved because of his occupation. They relented only on condition that the couple live apart for six months to give Potter time to reconsider."
          },
          "synonyms": [
            "“disapproved of” 在原文原词复现：“Potter's parents disapproved”",
            "“At first” 对应原文的时间推进关系 “They relented only on condition that …”（先反对，后来才勉强同意）",
            "“as a potential husband” 对应原文上文语境 “they eventually became engaged”（两人已订婚，Warne 即其未婚夫）"
          ],
          "locatingTip": "定位：题干关键词是 parents 与 disapproved，第 6 段第 2 句直接写出 Potter's parents disapproved because of his occupation，人称与动词都原词再现。确定答案技巧：本题的难点在 At first 这个时间限定词，需要判断“不赞成”是否只是初期态度。原文的 They relented only on condition that … 表示父母在附加条件下才松口，先有不赞成、后有让步，正好印证 at first 的时间定位，因此判 TRUE。这类题要按时间轴读：engaged 到 parents disapproved 到 they relented on condition 到 Warne passed away，态度是变化的，“起初反对”成立。",
          "analysis": "第 6 段：“The relationship between Warne and Potter blossomed, and they eventually became engaged. However, Potter's parents disapproved because of his occupation. They relented only on condition that the couple live apart for six months to give Potter time to reconsider. Tragically, before the wedding could take place, Warne developed pernicious anaemia, a blood disease, and passed away.”（沃恩与波特的关系日渐发展，两人最终订婚。然而，波特的父母因他的职业而不赞成。他们只是在附加条件下才让步：两人必须分开住六个月，给波特时间重新考虑。不幸的是，婚礼还没举行，沃恩就患上恶性贫血这种血液病去世了）。原文用 however 引出父母的反对，再用 They relented only on condition that 表示后来“提条件才勉强同意”，说明反对是他们的初始态度，题干的 At first 加 disapproved 完全吻合。至于反对理由是他的职业（because of his occupation），题干没有涉及理由，只问“起初是否不赞成”，与原文信息方向一致，故判 TRUE。注意不要把 relented（让步）误读成“一开始就同意”，relented 恰恰以“之前反对”为前提。",
          "traps": [
            "为什么不是 FALSE：原文写 Potter's parents disapproved（父母不赞成），与题干 At first … disapproved of 一致；后有 relented 只是说明态度后来松动，并不否定起初的反对，两者不矛盾。",
            "为什么不是 NOT GIVEN：原文明确交代了父母的态度及其原因（因他的职业而不赞成），态度信息清晰具体，并非缺失。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Potter continued writing children's books until her death.",
          "translation": "波特一直写儿童书直到去世。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "She remained there for the rest of her life, but failing eyesight eventually forced her to stop writing children's books."
          },
          "synonyms": [
            "“continued writing children's books until her death” 与原文的 “failing eyesight eventually forced her to stop writing children's books” 相互冲突",
            "“until her death” 对应原文的时间信息 “for the rest of her life”，但原文把“停止写作”放在了有生之年之内，而不是临终",
            "“eventually forced her to stop” 说明写作生涯中间就中断了，而非延续到去世"
          ],
          "locatingTip": "定位：题干关键词是 writing children's books，这一短语在第 7 段原词出现，直接锁定该句。确定答案技巧：本题判断点在于“是否一直写到去世”。原文用 remained there for the rest of her life 说明她一直住在湖区，但紧跟的 but 转折指出 failing eyesight eventually forced her to stop writing children's books——视力衰退迫使她停止了童书写作，也就是说她在去世前若干年就已经封笔，改成养羊和保育农场。题干断言 continued … until her death，与原文直接矛盾，故判 FALSE。读题时务必抓住 until her death 这一类时间终点表述，与原文的 eventually 停笔形成对立。",
          "analysis": "第 7 段：“After Warne's death, Potter moved to the Lake District in northern England. In 1905 she bought a small farm there, and for the next eight years she busied herself writing more books, some set in or around the area. She remained there for the rest of her life, but failing eyesight eventually forced her to stop writing children's books. Instead, she devoted herself to breeding sheep and helping to conserve farms in the district.”（沃恩去世后，波特搬到英格兰北部的湖区。1905 年她在那里买下一座小农场，此后八年忙于写更多书，有些就以该地区为背景。她余生都住在这里，但视力衰退最终迫使她停止了童书写作。转而投身养羊和帮助保护当地农场）。原文的时间线是：搬到湖区后继续写了八年书，之后因视力问题停笔，转而从事农牧与保育，直至去世。题干把“余生都住在那里”混同为“余生都在写童书”，并加上 until her death 的时间终点，与 for the next eight years、eventually forced her to stop 相矛盾。由于原文提供了明确的相反信息（停止写作这一事实），应判 FALSE 而非 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文明确写 failing eyesight eventually forced her to stop writing children's books，她在去世前就已停止童书写作，题干说一直写到去世，与原文的时间线相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“何时停笔”有明确交代（视力衰退后被迫停止，其后改为养羊和保护农场），属于已提供且与题干冲突的信息，因此不选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Potter's gift to the National Trust was the largest in recent times.",
          "translation": "波特赠予国民信托的礼物是近代最大的。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "On her death she left more than 4,000 acres to the National Trust, an organisation that protects historic buildings and countryside in England."
          },
          "synonyms": [
            "“Potter's gift to the National Trust” 同义替换为原文的 “left more than 4,000 acres to the National Trust”（遗赠 4000 多英亩土地）",
            "“the largest in recent times” 在原文中没有任何对应：原文只给出 4,000 acres 这一绝对数量，没有与任何其他捐赠作比较，也没有排名、纪录之类的说法",
            "“in recent times” 在原文同样无对应信息，原文只交代了赠送发生的时间 “On her death”，并未做时间范围上的比较"
          ],
          "locatingTip": "定位：题干专有名词 National Trust 只出现在第 7 段末段，扫读时一步到位。确定答案技巧：本题的判分点是最高级 the largest（最大）。原文写 On her death she left more than 4,000 acres to the National Trust，只给出面积的具体数量，随后一句讲这一馈赠的结果（her beloved landscape is now accessible to countless visitors）。全文没有任何与其他捐赠者的比较，也没有“最大”“创纪录”一类的评价，属于纯信息缺失，因此判 NOT GIVEN。看到题干中的最高级（largest、most、first、biggest）就要警惕：原文必须给出明确的比较对象或排名，否则一律是 NOT GIVEN；数量大并不等于“最大”。",
          "analysis": "第 7 段后部：“Thanks to the proceeds from her successful books and a later inheritance, Potter was able to buy many working farms. On her death she left more than 4,000 acres to the National Trust, an organisation that protects historic buildings and countryside in England. As a result, her beloved landscape is now accessible to countless visitors.”（得益于畅销书带来的收益以及后来的一笔遗产，波特得以买下许多仍在经营的农场。她去世时把 4000 多英亩土地留给了国民信托——一个保护英格兰历史建筑与乡村的组织。因此，她所热爱的这片风景如今得以向无数访客开放）。原文给的是具体数字 4,000 acres 以及这一馈赠带来的影响，通篇没有出现任何比较或排名信息：没有说这是“最大的一笔”，也没有与其他捐赠人作对照，in recent times 这一时间限定在原文同样找不到落点。题干把“数量可观”升级为“近代最大”，这层推论在原文没有依据，故判 NOT GIVEN。做题提醒：绝对化与最高级的表述（the largest、the only、the first）是 NOT GIVEN 的高发考题点，只要原文没有给出比较依据，就不能凭数字大而选 TRUE。",
          "traps": [
            "为什么不是 TRUE：原文只提供了 4,000 acres 这一具体面积，并未把它与任何其他捐赠相比较，也没有“最大”“创纪录”之类的表述；由“数量多”推出“是近代最大的”缺乏原文依据，不能选 TRUE。",
            "为什么不是 FALSE：原文并没有说这笔捐赠“不是最大的”，也没有提及其他人或机构的捐赠规模，不存在与题干相反的信息，只存在信息缺失，所以只能判 NOT GIVEN。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
