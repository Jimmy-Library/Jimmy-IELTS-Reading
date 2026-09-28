(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-47", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-47",
  "meta": {
    "examId": "p1-low-47",
    "title": "The Burgess Shale fossils 伯吉斯页岩",
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
          "stem": "The Burgess Shale became widely known to the public because of Gould's book.",
          "translation": "伯吉斯页岩之所以被公众广泛知晓，是因为古尔德（Gould）写的那本书。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "It was discovered in the Canadian Rockies over a century ago, and was popularized in 1989 in a book, Wonderful Life, by Stephen Jay Gould, an American paleontologist."
          },
          "synonyms": [
            "“became widely known to the public” 同义替换为原文的 “was popularized”，popularize 即“使普及、使大众知晓”",
            "“because of Gould's book” 同义替换为原文的 “in 1989 in a book, Wonderful Life, by Stephen Jay Gould”，即由古尔德的著作促成普及",
            "“Gould” 在原文中以同位语形式补充身份：“Stephen Jay Gould, an American paleontologist”，指向同一位作者"
          ],
          "locatingTip": "定位：题干的抓手是大写专有名词 Gould 与普通名词 book，二者在第 1 段末句同时出现，扫读时看到 Gould 即可停下精读。确定答案技巧：本题考“因果关系是否成立”。原文用被动结构 “was popularized in 1989 in a book, Wonderful Life, by Stephen Jay Gould” 交代：1989 年有一本书让这处化石遗址广为人知；popularize 意为“使普及、使大众知晓”，与题干 became widely known to the public 方向一致；书的作者 Stephen Jay Gould 正对应题干 Gould's book。原文把“普及”这件事明确挂在“古尔德所著的一本书”上，因果关系成立，故选 TRUE。切忌只看到前半句 “It was discovered … over a century ago” 就以为“为公众所知”属于发现者本人，原文的重心恰恰在后半句：是这本书让它流行起来的。",
          "analysis": "第 1 段末句：“It was discovered in the Canadian Rockies over a century ago, and was popularized in 1989 in a book, Wonderful Life, by Stephen Jay Gould, an American paleontologist.”（一个多世纪前，它在加拿大落基山脉被发现；1989 年，美国古生物学家斯蒂芬·杰伊·古尔德所著的《奇妙的生命》一书让它广为人知）。句子由 and 连接两个并列谓语：discovered 讲发现年代与地点，popularized 讲“为大众所熟知”，并给出媒介（in a book）、时间（1989）、书名（Wonderful Life）与作者（Stephen Jay Gould）。三处对应关系完整：became widely known to the public 对应 was popularized；because of Gould's book 对应 in a book … by Stephen Jay Gould；The Burgess Shale 对应句首代词 It。信息方向完全一致，且原文还特意补充作者身份，说明这正是“谁的书让遗址出名”的正面回答，因此答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文写的是 “was popularized in 1989 in a book … by Stephen Jay Gould”，popularize 本身就是“使大众知晓、使之流行”，与题干“因古尔德的书而为公众所熟知”是同向同义的表述，没有任何矛盾点，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文交代得十分具体——年份 1989、书名 Wonderful Life、作者 Stephen Jay Gould，还补充他是美国古生物学家，足以证明“因这本书而普及”这一因果链条，属于已提及且信息明确，不是信息缺失。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Charles Walcott had to get permission from Canadian authorities to gain access to the fossil site.",
          "translation": "查尔斯·沃尔科特（Charles Walcott）必须获得加拿大当局的许可才能进入该化石遗址。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "American paleontologist Charles Walcott, following reports of fabulous fossil finds by construction workers on a Canadian railway who were digging in the mountains in the late 19th century, is said to have tripped over a block of shale in 1909 that revealed the area's remarkable supply of specimens."
          },
          "synonyms": [
            "“Charles Walcott” 在原文中复现，并带身份说明：“American paleontologist Charles Walcott”",
            "“the fossil site” 对应原文的 “the area's remarkable supply of specimens”（该地区数量惊人的化石标本所在地）",
            "“had to get permission from Canadian authorities” 在原文中没有任何对应：定位句中只出现 “a Canadian railway” 这一地点线索，完全没有 permission、authorities、allow、access 等与“许可、准入”有关的词",
            "“Canadian” 在定位句中只修饰 “railway”（加拿大铁路），出现在“工人在修铁路”这一背景信息里，不能推出“加拿大当局发放许可”"
          ],
          "locatingTip": "定位：人名 Charles Walcott 是大写专有名词，全文只出现一次，位于第 2 段中部，一步锁定。确定答案技巧：本题考的是“进入遗址是否需要官方许可”这一程序性信息。原文关于沃尔科特只说三件事：他是美国古生物学家；他是在得知 19 世纪末修筑加拿大铁路的工人发现化石的消息之后来的；据说 1909 年他被一块页岩绊倒，从而发现该地标本极为丰富。关于是否需要许可、是否与加拿大当局打交道，原文只字未提。这类“官方审批、办手续”式细节是 NOT GIVEN 的高发点：定位句里出现 Canadian 这个词，但只修饰 railway，属于施工背景，不能等同于 Canadian authorities。既没有“需要许可”的表述，也没有“不需要许可”的表述，属于信息缺失，故选 NOT GIVEN。",
          "analysis": "第 2 段第三句：“American paleontologist Charles Walcott, following reports of fabulous fossil finds by construction workers on a Canadian railway who were digging in the mountains in the late 19th century, is said to have tripped over a block of shale in 1909 that revealed the area's remarkable supply of specimens.”（美国古生物学家查尔斯·沃尔科特在得知 19 世纪末修建加拿大铁路、在山中挖掘的工人发现了大量化石的消息后，据说于 1909 年被一块页岩绊倒，从而发现了该地区数量惊人的标本）。句中的信息点依次为：消息来源（following reports）、发现者（construction workers）、发现方式（tripped over a block of shale in 1909）、结果（revealed the area's remarkable supply of specimens），全部围绕“如何发现”展开，没有出现任何涉及许可、批文、官方准入的字眼。题干的落点 had to get permission from Canadian authorities 是原文完全没有涉及的一层信息，因此判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文没有 permission、authorities、allowed、access 之类的任何表述，题干所说的“必须获得许可”在原文找不到依据；不能凭“政府通常会管理化石遗址”这种常识去补足原文没有的信息。",
            "为什么不是 FALSE：原文同样没有说“他无需许可”或“他未经许可就进入”，即不存在与题干相反的信息。既没被证实也没被否认，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The Burgess Shale includes impressions of soft and hard body parts.",
          "translation": "伯吉斯页岩包含软体部分与硬体部分的印痕。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "An unusual feature of the Burgess Shale is that it is one of the earliest fossil beds to contain impressions of soft body parts alongside the remains of bones and shells, which is highly unusual."
          },
          "synonyms": [
            "“includes” 同义替换为原文的 “contain”",
            "“impressions” 在原文中直接复现：“contain impressions of soft body parts”",
            "“hard body parts” 同义替换为原文的 “bones and shells”（骨骼与贝壳就是动物的硬体部分）",
            "“soft and hard body parts” 对应原文的 “soft body parts alongside the remains of bones and shells”，alongside 表示两类痕迹并存"
          ],
          "locatingTip": "定位：题干的两个抓手是专有名词 Burgess Shale 与名词 impressions，回原文搜索 impressions，全文只出现在第 3 段末句。确定答案技巧：本题考“化石里保存了哪几类身体部分的痕迹”。原文写该化石层 “contain impressions of soft body parts alongside the remains of bones and shells”，其中 soft body parts 与题干的 soft 原词对应；bones and shells（骨骼与贝壳）是动物体内的硬体组织，对应题干的 hard。alongside 意为“与……并存”，说明软、硬两类痕迹同时存在，与题干 includes impressions of soft and hard body parts 完全吻合，故选 TRUE。注意跨越一层同义替换：题干用概括性的 hard body parts，原文不会重复同样的词，而是举出具体的硬体组织 bones and shells；看到这种“概括词对应具体例证”的写法，方向一致即判 TRUE。",
          "analysis": "第 3 段末句：“An unusual feature of the Burgess Shale is that it is one of the earliest fossil beds to contain impressions of soft body parts alongside the remains of bones and shells, which is highly unusual.”（伯吉斯页岩的一个不同寻常之处在于，它是最早一批既含有软体部分印痕、又含有骨骼与贝壳遗存的化石层之一，这极为罕见）。原文用 alongside 把两类保存物并列起来：一类是软体部分的印痕（impressions of soft body parts），另一类是骨骼与贝壳的遗存（the remains of bones and shells），后者正是“硬体部分”。题干以 includes impressions of soft and hard body parts 概括这两种保存内容，与原文的并列关系一致；原文开头 An unusual feature 与句末 highly unusual 呼应，强调的正是“软硬两部分能够同时保存下来”这一罕见特征，语气上也不构成对题干的否定。注意原文对硬体部分用的词是 remains（遗存）而非 impressions（印痕），这只是描述角度的差异（硬体保存为实体遗存），并不与“包含硬体部分”相矛盾，不影响判 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确给出软体印痕（impressions of soft body parts）与骨骼、贝壳遗存（the remains of bones and shells）两类保存物，软硬俱在，与题干一致，找不到任何矛盾点。",
            "为什么不是 NOT GIVEN：原文既点了软体部分，也点了骨骼与贝壳，两类信息齐全且为同一句中的并列成分，并非没有提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The Burgess Shale creatures were land animals.",
          "translation": "伯吉斯页岩中的生物是陆地动物。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Although the fossil bed was discovered on a mountain, these animals originally existed below an ocean, the bed of which was later pushed up to create the Rockies."
          },
          "synonyms": [
            "“The Burgess Shale creatures” 同义替换为原文的 “these animals”（回指上文讨论的伯吉斯页岩动物）",
            "“were land animals” 与原文的 “originally existed below an ocean”（最初生活在海洋之下）直接冲突",
            "“were” 这一过去时对应原文的 “originally existed”，都指生物生前的生存环境"
          ],
          "locatingTip": "定位：题干讲“这些生物是陆地动物”，抓手是 land 与 animals，回原文找涉及“山、海、陆地”的地理表述，落在第 4 段首句。确定答案技巧：本句的句法设计正是考点所在——作者先用 Although 让步，承认“化石层是在山上被发现的（discovered on a mountain）”，再用主句给出关键事实“these animals originally existed below an ocean（这些动物最初生活在海洋之下）”。discovered on a mountain 说的是化石如今所在的位置，originally existed below an ocean 说的才是生物生前的生活环境；作者特意用 Although 把两者分开，目的就是防止读者把“出土于山中”误读成“生活在陆地”。题干说它们是陆地动物，与原文明确给出的“生活在海洋之下”正相反，故判 FALSE。",
          "analysis": "第 4 段首句：“Although the fossil bed was discovered on a mountain, these animals originally existed below an ocean, the bed of which was later pushed up to create the Rockies.”（尽管这处化石层是在一座山上被发现的，但这些动物最初生活在海洋之下，那片海底后来被抬升，形成了落基山脉）。主句里的 below an ocean 是最直接的判断依据，其后的定语从句又补上一层解释：是海底被抬升（the bed of which was later pushed up）才形成了落基山脉，也就是说“山”只是地壳运动的结果与化石如今的位置，“海洋”才是生物原本的栖息地。题干却把出土环境当成生存环境，得出“它们是陆地动物”的结论，与原文明确陈述的事实相反，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文用 Although 让步、用主句给出 “these animals originally existed below an ocean”，明确说这些动物生活在海洋之下；题干若只抓住 fossil bed was discovered on a mountain 就下结论，恰恰掉进了作者故意设置的让步陷阱。",
            "为什么不是 NOT GIVEN：原文对生存环境交代得非常具体（below an ocean，并说明海底后来被抬升成落基山脉），属于已有信息且与题干冲突，不是信息缺失，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Researchers now believe that Hallucigenia is unrelated to any modern creature.",
          "translation": "研究者现在认为怪诞虫（Hallucigenia）与任何现代生物都没有亲缘关系。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "It is now thought to be an ancestor of the modern group of arthropods, which includes everything from flies and butterflies to centipedes and crabs."
          },
          "synonyms": [
            "“Researchers now believe” 同义替换为原文的 “It is now thought”，被动结构省略施动者，表示学界的当前共识",
            "“Hallucigenia” 是原文中 It 的指代对象，来自上一句 “Hallucigenia, ironically, turned out to be the exception that proved the rule.”",
            "“is unrelated to any modern creature” 与原文的 “an ancestor of the modern group of arthropods” 直接冲突：原文说它是现代节肢动物的祖先，即有直接亲缘关系",
            "“any modern creature” 由原文的具体例举反证：“from flies and butterflies to centipedes and crabs”"
          ],
          "locatingTip": "定位：题干关键词是专有名词 Hallucigenia，该词落在第 7、8 两段；但讲特征的第 7 段没有 now、believe 之类的措辞，符合题干 Researchers now believe 的只有第 8 段第 4 句 “It is now thought to be an ancestor of the modern group of arthropods”。确定答案技巧：题干含绝对化表述 unrelated to any（与任何……都无关），这类表述常是 FALSE 的信号。原文先在段首说明古生物学家长期以为这些动物只是“演化实验”、没有留下后代，随后用 ironically 转折，指出怪诞虫恰是例外，并给出新结论：它被认为是现代节肢动物类群的祖先。代词 It 回指的正是上一句的 Hallucigenia。题干说它与现代生物无关，而原文说它是现代一大类群的祖先，两者正相反，故判 FALSE。",
          "analysis": "第 8 段：“Paleontologists had long thought that many of the Burgess Shale animals were examples of experiments in evolution. In other words, entirely new forms of life that did not survive or lead to other groups or species. Hallucigenia, ironically, turned out to be the exception that proved the rule. It is now thought to be an ancestor of the modern group of arthropods, which includes everything from flies and butterflies to centipedes and crabs.”（古生物学家长期以来认为，伯吉斯页岩的许多动物是演化实验的样本，即那些既没有存活下来、也没有衍生出其他类群或物种的全新生命形式。讽刺的是，怪诞虫恰恰成了印证这条规律的例外：现在它被认为是现代节肢动物类群的祖先，而这一大类群包括从苍蝇、蝴蝶到蜈蚣、螃蟹的一切）。原文的 now thought 对应题干的 Researchers now believe，ancestor of the modern group of arthropods（现代节肢动物类群的祖先）说明怪诞虫与现代生物有明确的亲缘关系，还列举了苍蝇、蝴蝶、蜈蚣、螃蟹等现代成员。题干把它说成 unrelated to any modern creature，与“现代类群的祖先”完全对立，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确写 “It is now thought to be an ancestor of the modern group of arthropods”，并列举现代类群的具体成员，说明怪诞虫恰恰与现代生物关系密切；题干“与任何现代生物无关”与原文正相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅给出“是祖先”的结论，还交代了它所属的现代类群与具体成员，信息完整而明确，属于已有且与题干矛盾的信息。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–9 笔记填空（NO MORE THAN TWO WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 9
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "• Burgess Shale was formed following a time called the 6 ________",
          "translation": "• 伯吉斯页岩形成于一个被称为 ________ 的时期之后。",
          "answer": "Cambrian explosion",
          "wordClass": "名词短语（时期名称，作 called 之后的补足语；两个单词构成一个专有名称，Cambrian 首字母大写，不拆开、不加冠词）",
          "locating": {
            "paragraph": "3",
            "quote": "The Burgess Shale began to form soon after a period known as the Cambrian explosion, when most major groups of complex animals arose over a surprisingly short period."
          },
          "synonyms": [
            "“was formed following” 同义替换为原文的 “began to form soon after”（形成于……之后不久）",
            "“a time called the …” 同义替换为原文的 “a period known as the …”（一个被称为……的时期），time 与 period 同义",
            "“Burgess Shale” 在原文中复现并作主语，与笔记小标题 Formation（形成）对应"
          ],
          "locatingTip": "定位：笔记小标题是 Formation（形成），回原文搜索讲“伯吉斯页岩开始形成”的句子，落在第 3 段首句；句中 period known as 之后的名词短语就是答案。确定答案技巧：题干用 following（在……之后）对应原文的 soon after；用 a time called 对应 a period known as；空格所在的 the … 正落在 known as 之后，即 the Cambrian explosion。答案由两个单词组成，符合 NO MORE THAN TWO WORDS AND/OR A NUMBER 的要求。书写时保持原文形式：Cambrian 首字母大写，explosion 小写，不额外加 the（题干中已有 the）。",
          "analysis": "第 3 段首句：“The Burgess Shale began to form soon after a period known as the Cambrian explosion, when most major groups of complex animals arose over a surprisingly short period.”（伯吉斯页岩开始形成于一个被称为寒武纪大爆发的时期之后不久，当时大多数复杂动物的主要类群在相当短的时间内出现）。句子用 began to form soon after 说明时间先后关系：先是寒武纪大爆发，随后不久伯吉斯页岩开始沉积形成。题干把这一关系改写成 “Burgess Shale was formed following a time called the 6”，正是把原文的 period known as 换成 a time called，把 soon after 换成 following，空格所需成分就是那个时期名称 Cambrian explosion。从词性看，这是一组专有名词性短语，作 called 的补足语，与题干中的 the 连用，填两个单词即可，不必改写大小写。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "• Charles Walcott learnt of the fossil finds from people building a 7 ________",
          "translation": "• 查尔斯·沃尔科特是从正在修建 ________ 的人那里得知化石发现消息的。",
          "answer": "railway",
          "wordClass": "名词（单数，作 building 的宾语；题干中已给出不定冠词 a，故填可数名词单数 railway，不加复数、不加冠词）",
          "locating": {
            "paragraph": "2",
            "quote": "American paleontologist Charles Walcott, following reports of fabulous fossil finds by construction workers on a Canadian railway who were digging in the mountains in the late 19th century, is said to have tripped over a block of shale in 1909 that revealed the area's remarkable supply of specimens."
          },
          "synonyms": [
            "“learnt of the fossil finds from” 同义替换为原文的 “following reports of fabulous fossil finds by …”（得知……发现的消息）",
            "“people building a …” 同义替换为原文的 “construction workers on a Canadian railway who were digging in the mountains”，building 对应 construction 与 digging",
            "“a …” 对应原文介词短语中的 “a Canadian railway”，被修建的对象就是 railway"
          ],
          "locatingTip": "定位：人名 Charles Walcott 是专有名词，配合笔记给出的年代 1909，直接锁定第 2 段第三句。确定答案技巧：题干问的是“正在修建什么的人”，要抓住原文的介词搭配：construction workers on a Canadian railway（在一条加拿大铁路上施工的工人），on a Canadian railway 说明这些工人的工作对象就是铁路，而 Canadian 只是修饰语，不是被修建之物。空格前已有不定冠词 a，说明要填可数名词单数，答案是 railway。不要填 Canada 或 Canadian（那是国家名与形容词，不是修建的对象），也不要填 workers（那是人，题干已用 people 表达）。",
          "analysis": "原文第 2 段：“American paleontologist Charles Walcott, following reports of fabulous fossil finds by construction workers on a Canadian railway who were digging in the mountains in the late 19th century, is said to have tripped over a block of shale in 1909 …”（美国古生物学家查尔斯·沃尔科特在得知 19 世纪末在加拿大铁路施工、在山中挖掘的工人报告了惊人化石发现之后，据说于 1909 年被一块页岩绊倒……）。题干把这一长串信息压缩成 “from people building a 7”：people 对应 construction workers，building 对应施工、挖掘的行为，被修建的对象则是 a Canadian railway 中的 railway。词性上 railway 是可数名词单数，题干已有冠词 a，故只填一个词 railway，同时满足 NO MORE THAN TWO WORDS AND/OR A NUMBER 的字数限制。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "• A researcher looked at Burgess Shale findings again in 8 ________",
          "translation": "• 一位研究者在 ________ 年再次查看了伯吉斯页岩的标本。",
          "answer": "1979",
          "wordClass": "数词（年份，作介词 in 的宾语构成时间状语；直接写阿拉伯数字，不加 in、不加 year）",
          "locating": {
            "paragraph": "7",
            "quote": "Weirdest of all was Hallucigenia, described by paleontologist Simon Conway Morris, when he re-examined Walcott's specimens in 1979."
          },
          "synonyms": [
            "“A researcher” 同义替换为原文的 “paleontologist Simon Conway Morris”（古生物学家，即研究人员）",
            "“looked at … again” 同义替换为原文的 “re-examined”，前缀 re- 表示“再次”",
            "“Burgess Shale findings” 同义替换为原文的 “Walcott's specimens”（沃尔科特当年采集的伯吉斯页岩标本）"
          ],
          "locatingTip": "定位：笔记该条目属于“二十世纪的发现与研究”，抓手是 looked at … again 与一个年份，回原文搜索 re-examined 一词，只出现在第 7 段讲怪诞虫的那句。确定答案技巧：原文 “when he re-examined Walcott's specimens in 1979” 中，re-examined 就是“重新查看”，对应题干 looked at … again；Walcott's specimens 是沃尔科特当年采集的伯吉斯页岩标本，与该笔记条目的语境一致；空格前的 in 之后正是年份，因此答案填 1979。数字题只需照抄原文数字，保持阿拉伯数字写法，不写 nineteen seventy-nine，也不加介词或单位。",
          "analysis": "第 7 段第三句：“Weirdest of all was Hallucigenia, described by paleontologist Simon Conway Morris, when he re-examined Walcott's specimens in 1979.”（最怪异的当属怪诞虫，古生物学家西蒙·康韦·莫里斯在 1979 年重新检视沃尔科特的标本时对它作了描述）。题干 “A researcher looked at Burgess Shale findings again in 8” 与原文一一对应：A researcher 即 paleontologist Simon Conway Morris；looked at … again 即 re-examined；Burgess Shale findings 即 Walcott's specimens（沃尔科特当年在伯吉斯页岩采集的标本）；空格即 in 之后的年份 1979。数字类答案按原文照抄，填一个词条即可，符合字数要求。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "– Believes that discoveries in Morocco show that the 9 ________ of complex life forms continued",
          "translation": "——认为摩洛哥的发现表明，复杂生命形式的 ________ 仍在继续。",
          "answer": "evolution",
          "wordClass": "名词（不可数，指进化这一过程；作 the … of complex life forms 这一名词短语的中心词，同时是 continued 的主语；题干已给出冠词 the，填 evolution，不加复数）",
          "locating": {
            "paragraph": "9",
            "quote": "This suggests that the evolution of such complex life went on uninterrupted."
          },
          "synonyms": [
            "“show that” 同义替换为原文的 “suggests that”（表明、说明）",
            "“the … of complex life forms continued” 同义替换为原文的 “the evolution of such complex life went on uninterrupted”，continued 对应 went on uninterrupted（不间断地继续）",
            "“complex life forms” 同义替换为原文的 “such complex life”，指代上一句摩洛哥新发现的软躯体生物群",
            "“discoveries in Morocco” 对应原文的 “In an area of the Atlas Mountains of Morocco, Van Roy's team of researchers has found another diverse … assemblage of soft-bodied organisms”"
          ],
          "locatingTip": "定位：笔记里出现了人名 Peter Van Roy 与国名 Morocco，直接跳到第 9 段（末段）；其中 “This suggests that …” 一句正是题干 “show that …” 的对应句。确定答案技巧：题干结构是 the [9] of complex life forms continued，需要在原文找“……继续”的那句话。原文为 “the evolution of such complex life went on uninterrupted”，主语中心词就是 evolution，of such complex life 与题干的 of complex life forms 对应，went on uninterrupted 与 continued 对应。注意 such complex life 回指的是上一句摩洛哥新发现的软躯体生物群，与题干 discoveries in Morocco 呼应，说明这句正是对摩洛哥发现意义的总结。空格后面已有 of，故只填一个不可数名词 evolution，不加冠词、不改复数。",
          "analysis": "第 9 段相关两句：“In an area of the Atlas Mountains of Morocco, Van Roy's team of researchers has found another diverse (and sometimes bizarre) assemblage of soft-bodied organisms from a period after the Burgess Shale was formed. One discovery includes something that may be a stalked barnacle. This suggests that the evolution of such complex life went on uninterrupted.”（在摩洛哥阿特拉斯山脉一带，Van Roy 的研究团队发现了另一批形态多样、有时甚至怪异的软躯体生物群，年代晚于伯吉斯页岩形成之时，其中有一样发现可能是一种有柄的藤壶。这表明这类复杂生命的演化不曾中断地继续进行）。题干把这一结论改写成笔记形式：discoveries in Morocco 对应前述摩洛哥发现，show that 对应 suggests that，the [9] of complex life forms continued 对应 the evolution of such complex life went on uninterrupted，因此空格填 evolution。从词性看，evolution 是不可数名词，在原文中作主语，谓语用单数 went on，填入时保持原形 Evolution 的小写形式 evolution，不加冠词、不加复数。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–13 表格填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 13
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Tail resembling a 10 ________",
          "translation": "尾部像 ________。",
          "answer": "fan",
          "wordClass": "名词（单数，指扇形；位于冠词 a 之后，作分词 resembling 的宾语中心词，是表格中描述 Opabinia 尾巴形状的条目短语；可数名词单数，不加复数）",
          "locating": {
            "paragraph": "6",
            "quote": "One such example is Opabinia, a creature that grew to about 8 cm (3 inches), had five eyes, a body that was a series of lobes, a tail in the shape of a fan, and that ate using a proboscis."
          },
          "synonyms": [
            "“Tail resembling” 同义替换为原文的 “a tail in the shape of …”（形状像……的尾巴），resemble 与 in the shape of 同义",
            "“Opabinia” 是原文点名的生物：“One such example is Opabinia”，与表格行标一致",
            "“Five eyes” 这一同组栏目对应原文的 “had five eyes”，说明本行问的就是 Opabinia 的外形特征"
          ],
          "locatingTip": "定位：表格第一行的生物名 Opabinia 是独特的大写专有名词，回原文搜索只出现在第 6 段；同行栏目 Five eyes 也能在同一句找到，形成双重定位。确定答案技巧：题干 “Tail resembling a [10]” 问的是 Opabinia 的尾巴像什么，原文对应表达为 “a tail in the shape of a fan”（形状像扇子的尾巴），in the shape of 就等于 resembling，of 之后的名词 fan 即答案。注意 ONE WORD ONLY，只填 fan 一个词；不要填 shape（那是短语 in the shape of 中的词，不是被比作的对象），也不要受同句 “a body that was a series of lobes” 的干扰。",
          "analysis": "第 6 段整段是 Opabinia 的外形描写：“One such example is Opabinia, a creature that grew to about 8 cm (3 inches), had five eyes, a body that was a series of lobes, a tail in the shape of a fan, and that ate using a proboscis.”（一个例子是 Opabinia，这种生物长约 8 厘米，有五只眼睛，身体由一系列叶状体组成，尾巴呈扇形，并用长吻取食）。表格式笔记把原文并列的特征拆成条目：Five eyes 取自 had five eyes，Tail resembling a [10] 取自 a tail in the shape of a fan，Claws used to hold [11] 则来自下一段关于长吻的描述。因此第 10 题填 fan。词性上 fan 是可数名词单数，题干中已有不定冠词 a，只填一个单词，符合 ONE WORD ONLY。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Claws used to hold 11 ________",
          "translation": "爪子用于抓取 ________。",
          "answer": "food",
          "wordClass": "名词（不可数，作动词 hold 的宾语；对应原文 grabbed 的宾语 food，填时保持不可数形式，不加冠词、不加复数）",
          "locating": {
            "paragraph": "7",
            "quote": "The proboscis had a set of grasping claws on the end, with which it grabbed food and stuffed it into its mouth."
          },
          "synonyms": [
            "“Claws” 在原文中直接复现：“a set of grasping claws”",
            "“used to hold” 同义替换为原文的 “with which it grabbed”，grasping 与 grabbed 都表示抓握",
            "“hold” 对应原文的 “grabbed food and stuffed it into its mouth”：先抓住食物，再塞进嘴里"
          ],
          "locatingTip": "定位：表格中 Opabinia 一行的前一条 Tail resembling a fan 来自第 6 段，本条讲爪子，需接着读第 7 段首句，因为那里正是对长吻与爪子的描述。确定答案技巧：原文 “The proboscis had a set of grasping claws on the end, with which it grabbed food and stuffed it into its mouth.” 中，grasping claws 对应题干的 Claws，with which it grabbed 对应 used to hold，grabbed 的宾语 food 就是要填的词。注意不要填 mouth：mouth 是食物被送进去的地方，而空格前的 hold 表示“抓在爪子里”，动作对象是食物。答案为一个不可数名词 food，不加冠词、不改复数，符合 ONE WORD ONLY。",
          "analysis": "第 7 段首句：“The proboscis had a set of grasping claws on the end, with which it grabbed food and stuffed it into its mouth.”（长吻的末端有一组用来抓握的爪子，它用爪子抓取食物并塞进嘴里）。题干 “Claws used to hold [11]” 把原文的 grasping claws 与 grabbed 改写成 Claws used to hold，hold 的宾语与 grabbed 的宾语一致，都是 food，因此答案填 food。同句后半段 stuffed it into its mouth 交代食物最终去向，是与答案紧邻的干扰信息，它属于“抓住之后”的另一个动作，不属于“爪子抓什么”，不要误填 mouth。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Looked like a 12 ________",
          "translation": "看起来像 ________。",
          "answer": "leech",
          "wordClass": "名词（单数，指水蛭；位于介词 like 之后、冠词 a 之后，作介词 like 的宾语中心词，是表格中描述 Nectocaris 外形的条目短语；可数名词单数，不加复数）",
          "locating": {
            "paragraph": "7",
            "quote": "Nectocaris, meanwhile, could be mistaken for a leech, but with fins and tentacles."
          },
          "synonyms": [
            "“Looked like” 同义替换为原文的 “could be mistaken for”（可能被误认为，即看上去像）",
            "“Nectocaris” 是原文直接点名的生物，与表格第二行的行标完全一致",
            "“Fins” 与 “Tentacles” 两条栏目对应原文的 “but with fins and tentacles”，反证答案落在这一句"
          ],
          "locatingTip": "定位：表格第二行的生物名 Nectocaris 是专有名词，全文只出现一次，位于第 7 段中部，且与同行栏目 Fins、Tentacles 出现在同一句，一步即可锁定。确定答案技巧：题干 “Looked like a [12]” 考“外形像什么”，原文对应句是 “Nectocaris, meanwhile, could be mistaken for a leech, but with fins and tentacles”，其中 could be mistaken for 就是“容易被误认为”，与 looked like 同义，被误认成的对象是 a leech（水蛭）。句末 but with fins and tentacles 只是补充说明它“像水蛭却有鳍和触手”，这一转折不影响“像什么”的答案，被比作的对象仍是 leech。填一个单词 leech，冠词 a 题干已给出。",
          "analysis": "第 7 段第二句：“Nectocaris, meanwhile, could be mistaken for a leech, but with fins and tentacles.”（而 Nectocaris 可能被误认作水蛭，但它有鳍和触手）。表格把三种生物的特征分列，Nectocaris 一行的三条分别是 Looked like a leech、Fins、Tentacles，与原文 “could be mistaken for a leech, but with fins and tentacles” 逐项吻合，因此答案为 leech。词性上 leech 是可数名词单数，题干中已含不定冠词 a，只填一个单词，符合 ONE WORD ONLY。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Spines used to 13 ________",
          "translation": "尖刺用于 ________。",
          "answer": "move",
          "wordClass": "动词（原形，位于 used to 之后构成不定式，与同行名词栏目 Tentacles 形成“动作对名词”的对照结构）",
          "locating": {
            "paragraph": "7",
            "quote": "With its multiplicity of spines and tentacles, little about Hallucigenia made sense, but scientists hypothesized that the spines were legs that helped it move and the tentacles were for feeding."
          },
          "synonyms": [
            "“Spines” 与 “Tentacles” 在原文同一句复现：“the spines were legs that helped it move and the tentacles were for feeding”",
            "“used to” 同义替换为原文的 “helped it …” 与 “were for …” 两种功能表述",
            "“Hallucigenia” 是原文该句讨论的对象，与表格第三行的行标一致"
          ],
          "locatingTip": "定位：表格第三行的生物名 Hallucigenia 与栏目词 Spines、Tentacles 集中在第 7 段倒数第二句（第 8 段虽也提到 Hallucigenia，但讲的是它的分类地位，与外形特征无关），因此定位要落到 “the spines were legs that helped it move” 这一句。确定答案技巧：题干 “Spines used to [13]” 要填尖刺的功能。原文用对照结构说明两种器官的用途：the spines were legs that helped it move（尖刺是腿，帮助它移动），the tentacles were for feeding（触手用于取食）。空格对应前半句，故填动词原形 move；同行下一条栏目 Tentacles 对应后半句的 for feeding，可作为互证。注意 used to 后必须接动词原形，因此不填 moved、movement、moving 等其他形式。",
          "analysis": "第 7 段第四句：“With its multiplicity of spines and tentacles, little about Hallucigenia made sense, but scientists hypothesized that the spines were legs that helped it move and the tentacles were for feeding.”（怪诞虫身上数量众多的尖刺与触手让人难以理解，但科学家推测，这些尖刺其实是腿，帮助它移动，触手则用于取食）。题干以 “Spines used to [13]” 概括尖刺的功能，与原文 helped it move 对应：spines 直接复现，used to 概括 helped it 与 were for 这类功能表述，空格所需的动作就是 move。词性上空格紧跟 used to，属于不定式结构，必须填动词原形，答案为一个单词 move，符合 ONE WORD ONLY。需要注意的是，原文用 hypothesized 表明这仍是科学家的推测，但填空题按原文如实抄写用词即可，不影响答案。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
