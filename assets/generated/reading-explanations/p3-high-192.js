(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-192", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-192",
  "meta": {
    "examId": "p3-high-192",
    "title": "Voynich Manuscript 伏尼契手稿",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–30 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 30
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "It is uncertain when the Voynich manuscript was written.",
          "translation": "伏尼契手稿的成书年代尚不确定。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Yet the library's most controversial possession is an unprepossessing vellum manuscript about the size of a hardback book, containing 240-odd pages of drawings and text of unknown age and authorship."
          },
          "synonyms": [
            "「It is uncertain when ... was written」同义替换为原文的「of unknown age」（年代不明）",
            "「the Voynich manuscript」与原文的「an unprepossessing vellum manuscript about the size of a hardback book」指同一件藏品，后文才点出它的名字",
            "原文的「unknown age and authorship」把「年代」和「作者」两项都归为未知，题干只取其中「何时写成」这一项，方向完全一致"
          ],
          "locatingTip": "定位：题干关键词是「uncertain」和「when ... written」，这一层意思在原文用名词短语「unknown age」表达，出现在第 1 段介绍手稿外观的那一句。扫读第 1 段，看到「unknown」就要停下精读。确定答案技巧：判断题考「不确定、不明」这类含义时，原文只要出现 unknown / unclear / uncertain / mysterious 等同向表达即可判 TRUE。原文明确写「drawings and text of unknown age and authorship」（图画与文字的年代与作者均不详），恰好等于题干所说的「成书年代不确定」，属同义改写而非矛盾，故判 TRUE。切忌因为「手稿标为 MS 408」就误以为年代已经确定。",
          "analysis": "第 1 段先铺陈耶鲁大学 Beinecke 图书馆的珍贵藏书，随后把焦点落到这卷手稿上：「Yet the library's most controversial possession is an unprepossessing vellum manuscript about the size of a hardback book, containing 240-odd pages of drawings and text of unknown age and authorship.」（然而该馆最具争议的藏品，是一卷外表毫不起眼的犊皮纸手稿，大小相当于一本精装书，内含 240 余页图画与文字，其年代与作者均不详）。题干把原文的介词短语 of unknown age（年代不详）改写成句子「It is uncertain when the Voynich manuscript was written」（手稿写作时间不确定），只是把「名词短语」换成「从句」，信息方向没有任何改变：原文说年代不明，题干说成书时间不确定，两者是同一件事的两种说法，因此答案是 TRUE。做题时注意题干的时间疑问点「when ... written」在原文里对应的是 age 一词——雅思常用 age / date / era 等名词来表达「年代」，见到这些词就要意识到它们讲的正是「何时写成」。",
          "traps": [
            "为什么不是 FALSE：原文用的是 unknown（未知）一词，并没有给出任何具体年代，也没有暗示年代已被考定；题干说的「不确定」与原文信息完全一致，不存在矛盾，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文确实交代了「of unknown age and authorship」，即明确表示年代不明，这本身就是对题干命题的直接回应，属于信息已给出且方向一致，不是「没有提及」，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Wilfrid Voynich donated the manuscript to the Beinecke Library.",
          "translation": "威尔弗里德·伏尼契把手稿捐赠给了 Beinecke 图书馆。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "It is known to scholars as the Voynich manuscript, after the American book-dealer Wilfrid Voynich, who bought the manuscript from a Jesuit college in Italy in 1912."
          },
          "synonyms": [
            "「Wilfrid Voynich」在原文中作专有名词原词复现，定位极稳",
            "「bought the manuscript from a Jesuit college in Italy in 1912」与题干的「donated the manuscript to the Beinecke Library」无法对应：原文只说他 1912 年买下手稿，完全没有提到他后来如何处置手稿",
            "「the Beinecke Library」在原文第 1 段出现，但语境是「图书馆的藏品（possession）」，并未交代这件藏品是捐赠、购买还是其他方式得来"
          ],
          "locatingTip": "定位：题干里的人名 Wilfrid Voynich 是全文独一无二的专有名词，一出现即可锁定第 1 段最后一句。确定答案技巧：这道题的考点是「手稿如何到达图书馆」，即动作是 donate（捐赠）还是其他方式。第 1 段关于 Voynich 的信息只有两条：他是美国书商（American book-dealer），1912 年从意大利的一所耶稣会学院「买下（bought）」手稿。至于手稿后来怎样进入耶鲁、是不是他捐的，原文只字未提。捐赠属于原文没有交代的一项新信息，无从证实也无从否证，故判 NOT GIVEN。注意不要把「第 1 段说 Beinecke 图书馆藏有该手稿」当作捐赠的证据——藏书途径与年代、作者一样，原文并未说明。",
          "analysis": "第 1 段末句：「It is known to scholars as the Voynich manuscript, after the American book-dealer Wilfrid Voynich, who bought the manuscript from a Jesuit college in Italy in 1912.」（学者们称它为伏尼契手稿，得名于美国书商威尔弗里德·伏尼契，他于 1912 年从意大利的一所耶稣会学院购得此手稿）。全句只给出两个事实：命名来源是这位书商，手稿是他买来的。题干把动作换成「donated ... to the Beinecke Library」（捐赠给该馆），这是一个原文完全没有交代的行为。虽然第 1 段确实提到手稿如今是 Beinecke 图书馆的藏品，第 10 段也说它「kept under lock and key at Yale University」（锁藏在耶鲁大学），但手稿从私人书商手中如何转到图书馆，原文既没说捐赠，也没说购买或遗赠，这一环信息缺失，因此按规则判 NOT GIVEN。做题提醒：当选项涉及「谁以什么方式把东西给了谁」这类传递关系时，必须找到原文中表示该动作的动词；只有「bought」（买入）而没有「donated」（捐出），就说明题干的动作无据可依。",
          "traps": [
            "为什么不是 TRUE：原文只写「bought the manuscript from a Jesuit college in Italy in 1912」，即伏尼契是买方；题干却说他是向 Beinecke 图书馆捐赠的一方，原文没有任何捐出、赠予类的表述，题干的核心动作得不到证实。",
            "为什么不是 FALSE：FALSE 需要原文出现与之相反的信息，例如「the manuscript was not donated by Voynich」或「Voynich sold the manuscript to ...」。原文对捐赠一事毫无交代，既没说过也没否认过，只是信息空缺，所以只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Interest in the Voynich manuscript extends beyond that of academics and professional code-breakers.",
          "translation": "对伏尼契手稿的兴趣超出了学者和专业密码破译者的范围。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Over the years, the manuscript has attracted the attention of everyone from amateur dabblers to top code-breakers, all determined to succeed where countless others have failed."
          },
          "synonyms": [
            "「Interest in the Voynich manuscript」同义替换为原文的「has attracted the attention of」（吸引了……的关注）",
            "「extends beyond that of academics and professional code-breakers」同义替换为原文的「everyone from amateur dabblers to top code-breakers」：from ... to ... 结构表示范围涵盖两类之外的所有人，业余爱好者（amateur dabblers）正是超出学者与专业破译者之外的那部分人",
            "「academics and professional code-breakers」对应原文的「top code-breakers」，并呼应第 2 段提到的「Academic research papers, books and websites」所体现的学术圈"
          ],
          "locatingTip": "定位：题干关键词是「Interest」和「beyond ... academics and professional code-breakers」，回原文找表示「关注人群范围」的句子，第 2 段首句的「attracted the attention of everyone from ... to ...」正是标准表达，遇到 everyone from A to B 就应该立刻警觉，这是雅思表达「范围广」的固定句式。确定答案技巧：判断这类「是否超出某一人群」的题，关键看原文有没有把业余爱好者、普通人等非专业群体列进来。原文说手稿吸引了「everyone from amateur dabblers to top code-breakers」（从业余爱好者到顶尖密码破译者的所有人），列举的两端已经把范围拉到「业余」这一极，题干所说「超出学者与专业破译者」正是同一意思，故判 TRUE。",
          "analysis": "第 2 段首句：「Over the years, the manuscript has attracted the attention of everyone from amateur dabblers to top code-breakers, all determined to succeed where countless others have failed.」（多年来，这部手稿吸引了从业余爱好者到顶尖密码破译者的所有人的关注，他们都决心在无数人失败之处获得成功）。句中的 everyone from A to B 是雅思高频的「范围」表达，A 端是 amateur dabblers（业余涉猎者，完全不属于学术或职业圈），B 端是 top code-breakers（顶尖破译者，对应题干的 professional code-breakers）。题干说兴趣「extends beyond that of academics and professional code-breakers」（超出学者和专业破译者的范围），正是原文把业余爱好者也纳入关注人群的意思，两者同向。此外第 2 段紧接着说「Academic research papers, books and websites are devoted to making sense of the contents of the manuscript, which are freely available to all.」（学术论文、书籍和网站都在努力解读其内容，而这些内容对所有人开放），其中 freely available to all 进一步印证关注者不限于专业圈子。全部线索方向一致，答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确用 from ... to ... 把「业余爱好者」列入关注者之中，说明兴趣早已越出专业圈；题干只是把这一列举概括为「超出学者与专业破译者」，两者不冲突，故不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不但给出了关注人群，还用 everyone 和 freely available to all 强调范围之广，信息非常明确，不是未提及，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "The text of the Voynich manuscript contains just under 70 symbols.",
          "translation": "伏尼契手稿的文字包含略少于 70 个符号。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The precise size of the “alphabet” of the Voynich manuscript was unclear: it is possible to make out more than 70 distinct symbols among the 170,000-character text."
          },
          "synonyms": [
            "「The text of the Voynich manuscript」对应原文的「the “alphabet” of the Voynich manuscript」与「the 170,000-character text」，即手稿所用的整套字符",
            "「contains ... symbols」同义替换为原文的「it is possible to make out ... distinct symbols」（能辨认出……个不同的符号）",
            "「just under 70」与原文的「more than 70」正相反：一个说不到 70，一个说超过 70"
          ],
          "locatingTip": "定位：题干带数字 70 和 symbols，回到原文搜索数字 70，立即落在第 4 段「more than 70 distinct symbols among the 170,000-character text」。确定答案技巧：数字题务必逐字核对「比较词」而不只是数字本身。原文是 more than 70（七十多个，超过 70），题干写成 just under 70（略少于 70），数字一样但方向完全相反，一个在上一个在下，属于典型的事实冲突，故判 FALSE。同段还出现 1944、170,000 等数字，用来干扰；定位时以 70 与 symbols 的组合为准。",
          "analysis": "第 4 段讲 William Friedman 的团队用频率分析法破解手稿却陷入困境：「The precise size of the “alphabet” of the Voynich manuscript was unclear: it is possible to make out more than 70 distinct symbols among the 170,000-character text.」（伏尼契手稿所用「字母表」的确切规模不明：在 17 万字的文本中能够辨认出 70 多个不同的符号）。原文的关键计量是 more than 70（超过 70 个），题干却写成 just under 70（略少于 70 个）。70 这个数字相同，但比较方向被颠倒：原文的主旨是符号数量多到难以确定上限，题干却把它缩到 70 以下，属于与原文事实相矛盾的改写，因此答案是 FALSE。这类「同数字、反方向」的陷阱在判断题中很常见，常以 just under / just over / at least / no more than 等修饰语出现；判断时要把数字和比较词作为一个整体核对，任何一项对不上都要考虑 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文写的是「more than 70 distinct symbols」（70 多个符号），题干说的是「just under 70」（略少于 70 个），一多一少方向相反，构成事实冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文给出了明确的数字与比较关系（超过 70 个），题干也给出明确数字（不到 70 个），两者都属确切陈述且互相矛盾，符合 FALSE 的判定条件，而非信息缺失。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 31–34 人物匹配（Match each statement with the correct person, A–H）",
      "mode": "per_question",
      "questionRange": {
        "start": 31,
        "end": 34
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "The number of times that some words occur makes it unlikely that the manuscript is based on an authentic language.",
          "translation": "某些词出现的次数使得这部手稿不太可能以一门真实语言为基础。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Furthermore, Friedman discovered that some words and phrases appeared more often than expected in a standard language, casting doubt on claims that the manuscript concealed a real language, as encryption typically reduces word frequencies."
          },
          "synonyms": [
            "「The number of times that some words occur」同义替换为原文的「some words and phrases appeared more often than expected」（某些词和短语的出现频率高于预期）",
            "「makes it unlikely that the manuscript is based on an authentic language」同义替换为原文的「casting doubt on claims that the manuscript concealed a real language」，unlikely 对应 casting doubt，an authentic language 对应 a real language",
            "「the number of times ... occur」呼应原文的「as encryption typically reduces word frequencies」，即词频这一指标本身"
          ],
          "locatingTip": "定位：题干的核心词是「number of times ... words occur」（词频）和「authentic language」，回原文搜索 frequency 与 language，落在第 4 段最后一句，句首的 Friedman 即是答案来源的人名。确定答案技巧：人物匹配题的判断依据是「某观点由谁提出或发现」，而不是话题由谁提到。原文此句的主语动作是「Friedman discovered」（Friedman 发现），宾语正是「某些词出现频率异常地高，从而让人怀疑手稿藏着一门真实语言」，与题干「词频使手稿基于真实语言的可能性下降」一一对应，因此匹配 D（William Friedman）。做这类题时先锁定观点的动词发出者，再核对观点内容，两者同时吻合才可确定。",
          "analysis": "第 4 段在叙述 Friedman 团队的破译过程时写道：「Furthermore, Friedman discovered that some words and phrases appeared more often than expected in a standard language, casting doubt on claims that the manuscript concealed a real language, as encryption typically reduces word frequencies.」（此外，Friedman 发现有些词和短语出现得比标准语言中的预期频次更高，这使人怀疑手稿藏有一门真实语言的说法，因为加密通常会使词频降低）。题干的三个信息点在此句中全部落实：一是行为主体「词出现的次数」对应 appeared more often / word frequencies；二是结论「不太可能以真实语言为基础」对应 casting doubt on claims that the manuscript concealed a real language；三是逻辑理由「加密会降低词频」对应原文 as encryption typically reduces word frequencies 这一状语从句。该发现属于 Friedman，因此答案 D。干扰项中最有吸引力的是 G（René Zandbergen），但他在第 7 段谈的是文本的「熵（entropy）」，属于信息传递速率的度量，而非词频与真实语言的关系，两者不能混为一谈。",
          "traps": [
            "为什么不是 G（René Zandbergen）：Zandbergen 的论述出现在第 7 段，依据是「the entropy of the text」（文本的熵），用信息量指标支持「人造语言」的猜想，全段没有涉及「某些词出现次数过多」这一词频证据。",
            "为什么不是 F（Gabriel Landini）：Landini 在第 7 段用 spectral analysis 得出结论「the manuscript contains genuine words, rather than random nonsense」（手稿含有真正的词，而非随机胡言），方向上与题干相反——他是在支持手稿基于某种自然语言，而不是在质疑。",
            "为什么不是 B（Roger Bacon）：Bacon 是 Voynich 和 Newbold 猜测的手稿作者，原文从未把词频分析归到他名下，与本题论证无关。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Unlike some other similar objects of fascination, people can gain direct access to the Voynich manuscript.",
          "translation": "与其它一些同样引人入胜的谜题不同，人们能够直接接触到伏尼契手稿。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "“Most other mysteries involve second-hand reports,” says Dr Gordon Rugg of Keele University, a leading Voynich expert. “But this is one that you can see for yourself."
          },
          "synonyms": [
            "「some other similar objects of fascination」同义替换为原文的「Most other mysteries」（其它大多数谜题）",
            "「people can gain direct access」同义替换为原文的「you can see for yourself」（你可以亲眼看到），以及前文「which are freely available to all」（对所有人自由开放）",
            "「Unlike」对应原文的对比转折结构「But this is one ...」：把「其它谜题靠二手材料」与「这一件可以亲眼所见」对照起来"
          ],
          "locatingTip": "定位：题干含对比结构 Unlike some other ...，回原文找「其它谜题」与「本手稿」的对照句，第 2 段 Gordon Rugg 的引语正是唯一的对照处，引号内的人名即答案。确定答案技巧：人物匹配题遇到直接引语，说话者就是观点的归属者，一般无需推断。Rugg 说「Most other mysteries involve second-hand reports ... But this is one that you can see for yourself.」，即别的谜题要靠二手材料，而伏尼契手稿可以直接看到，完全对应题干「与其它谜题不同，人们能直接接触手稿」，因此匹配 A（Gordon Rugg）。注意同一段还有「which are freely available to all」一句，进一步说明手稿内容公开可查，与 direct access 同向。",
          "analysis": "第 2 段写手稿吸引各方人士关注，并引用 Keele 大学的 Gordon Rugg 博士的话：「Academic research papers, books and websites are devoted to making sense of the contents of the manuscript, which are freely available to all. “Most other mysteries involve second-hand reports,” says Dr Gordon Rugg of Keele University, a leading Voynich expert. “But this is one that you can see for yourself.」大意是：学术论文、书籍与网站都在努力解读手稿内容，而内容对所有人开放；Rugg 说其它大多数谜题都涉及二手资料，但这一件是你可以亲眼看到的。题干中的 Unlike some other similar objects of fascination 对应 Most other mysteries，people can gain direct access 对应 you can see for yourself 与 freely available to all，观点归属者明确是 Rugg，故答案 A。做题时要注意引语前后的归属标记 says Dr Gordon Rugg，人物匹配题必须以这类标记定归属，不能凭印象把观点安在别处。",
          "traps": [
            "为什么不是 E（Rob Churchill）：Churchill 在第 5、9 段出现，谈的是 Friedman 假说的可信度以及插图和文字之怪异暗示作者「失去现实感」，从未提到公众能否直接接触手稿。",
            "为什么不是 G（René Zandbergen）：Zandbergen 的观点集中在第 7 段的熵分析（支持人造语言）和第 9 段（仍相信文本有真实含义，但可能永远无法破译），与「能否直接接触手稿」无关。",
            "为什么不是 H（Girolamo Cardano）：Cardano 只在第 8 段作为「1150 年首次公布那套选字系统」的数学家出现，属于工具来源，并未对手稿的可接触性发表任何看法。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "The person who wrote the manuscript may not have been entirely sane.",
          "translation": "写这部手稿的人可能并不完全神志正常。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "Others, such as Churchill, have suggested that the sheer weirdness of the illustrations and text hints at an author who had lost touch with reality."
          },
          "synonyms": [
            "「The person who wrote the manuscript」同义替换为原文的「an author」（作者）",
            "「may not have been entirely sane」同义替换为原文的「had lost touch with reality」（脱离现实），是委婉化的同义说法",
            "「may」对应原文的「have suggested ... hints at」，双方都使用推测语气，未作断定"
          ],
          "locatingTip": "定位：题干关键词是「not entirely sane」（神志不清），这类评价在原文中不会用原词，而会用 lost touch with reality 之类的委婉表达；搜索 reality 或 sanity 落点在第 9 段最后一句，句中就有人名 Churchill。确定答案技巧：匹配题的答案人名常以 such as 引出，本句结构为「Others, such as Churchill, have suggested that ...」，观点者即 Churchill，其主张是插图与文字的古怪（sheer weirdness）暗示作者「失去现实感」，正对应题干「可能并不完全神志正常」，故匹配 E（Rob Churchill）。注意第 9 段同时出现 Zandbergen 与 Churchill，前者主张文本有真实含义，后者主张作者精神状态异常，两人的观点必须分清。",
          "analysis": "第 9 段承接第 8 段关于「手稿是否为骗局」的争论：「Inevitably, others beg to differ. Some scholars, such as Zandbergen, still suspect the text has genuine meaning, though believe it may never be decipherable. Others, such as Churchill, have suggested that the sheer weirdness of the illustrations and text hints at an author who had lost touch with reality.」（难免有人不认同。像 Zandbergen 这样的学者仍然怀疑文本有真实含义，只是认为或许永远无法破译；而像 Churchill 这样的另一些人则提出，插图和文字之怪异暗示作者已脱离现实）。题干把「had lost touch with reality」这一比较婉转的说法改写为「may not have been entirely sane」（可能并不完全神志正常），两者指的是同一种判断，且都带推测色彩（原文 hints at 与 have suggested 同样不是断言）。观点归属于 Churchill，故答案 E。做题提示：这类含评价的匹配题，要抓住「谁 suggested」这一归属结构，并留意 such as 之后紧跟的人名。",
          "traps": [
            "为什么不是 G（René Zandbergen）：同段里 Zandbergen 的主张是「the text has genuine meaning」（文本有真实含义），他只是怀疑永远无法破译，从未对作者的精神状态作出评价，方向完全不同。",
            "为什么不是 C（William Newbold）：Newbold 在第 3 段声称破译了 Bacon 的密码系统，其说法被后来学者证明是「wishful thinking」（一厢情愿），原文并未借他的口评价作者精神状况。",
            "为什么不是 D（William Friedman）：Friedman 在第 5 段提出手稿是人造语言的假说，该段只是把作者身份列为尚未解答的问题，他本人没有对作者的神志下过任何判断。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "It is likely that the author of the manuscript is the same person as suggested by Wilfrid Voynich.",
          "translation": "手稿的作者很可能就是威尔弗里德·伏尼契所提出的那个人。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In 1921 Voynich's view that Bacon was the writer appeared to win support from the work of William Newbold, Professor of Philosophy at the University of Pennsylvania, who claimed to have found the key to the cipher system used by Bacon."
          },
          "synonyms": [
            "「the person ... suggested by Wilfrid Voynich」同义替换为原文的「Voynich's view that Bacon was the writer」：伏尼契提出的人就是 Bacon",
            "「It is likely that the author ... is the same person」同义替换为原文的「appeared to win support」（看上去得到支持），likely 对应 appeared to win support",
            "观点归属由原文的「from the work of William Newbold ... who claimed to have found the key to the cipher system used by Bacon」确定，即支持这一作者判断的人"
          ],
          "locatingTip": "定位：题干出现人名 Wilfrid Voynich 和 suggested，回原文找伏尼契提出作者主张的地方，落在第 3 段「Voynich himself believed that the manuscript was the work of the 13th-century English monk Roger Bacon」之后紧接的一句，句中出现了支持这一主张的人名。确定答案技巧：本题问的是「谁支持作者就是伏尼契所说的那个人」，而不是「那个人是谁」。原文先说伏尼契认为作者是 13 世纪的英国修士 Roger Bacon，接着说 1921 年伏尼契的这一看法「appeared to win support from the work of William Newbold」（似乎因 Newbold 的研究而获得支持），Newbold 声称找到了 Bacon 所用密码系统的钥匙。观点与支持者都在此句，因此匹配 C（William Newbold）。切勿看到 Bacon 就选 B：Bacon 是「被提出的作者」，而题干问的是持这一判断、予以支持的人。",
          "analysis": "第 3 段交代手稿的推测史：「Voynich himself believed that the manuscript was the work of the 13th-century English monk Roger Bacon, famed for his knowledge of alchemy, philosophy and science. In 1921 Voynich's view that Bacon was the writer appeared to win support from the work of William Newbold, Professor of Philosophy at the University of Pennsylvania, who claimed to have found the key to the cipher system used by Bacon.」（伏尼契本人相信这部手稿出自 13 世纪英国修士 Roger Bacon 之手，他以精通炼金术、哲学与科学著称。1921 年，伏尼契关于「Bacon 是作者」的看法似乎因宾夕法尼亚大学哲学教授 William Newbold 的研究而获得支持，Newbold 声称找到了 Bacon 所用密码系统的钥匙）。题干中「the same person as suggested by Wilfrid Voynich」指的就是 Bacon，而「It is likely that the author ... is the same person」对应原文的 appeared to win support（看上去得到了支持），支持工作的归属者是 Newbold，因此答案 C。要注意本题的匹配对象是「提出该判断并为其提供依据的人」，不是被指定的作者本人，这正是否定选 B 的关键。",
          "traps": [
            "为什么不是 B（Roger Bacon）：Bacon 是伏尼契以及 Newbold 所认定的「手稿作者」，是被指认的对象，而不是持有并支持这一判断的人；把题干的「the person as suggested by Voynich」误读成「被建议成为作者的人」就会错选 B。",
            "为什么不是 H（Girolamo Cardano）：Cardano 是第 8 段提到的意大利数学家，其 1150 年发表的选字系统被 Rugg 用来演示伪造手稿的可能性，与「作者身份」这一话题毫无关联。",
            "为什么不是 F（Gabriel Landini）：Landini 在第 7 段用频谱分析法发现手稿含真正的词，属于语言性质的研究，他并未支持或评论伏尼契关于作者是 Bacon 的主张。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 35–39 摘要填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 35,
        "end": 39
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "William Newbold believed that the author of the Voynich manuscript had been able to look at cells through a 35 ________",
          "translation": "威廉·纽博尔德认为，伏尼契手稿的作者能够通过 ________ 观察细胞。",
          "answer": "microscope",
          "wordClass": "名词（单数，作介词 through 的宾语，指观察细胞所用的仪器；空格前有不定冠词 a，故填可数名词单数形式）",
          "locating": {
            "paragraph": "3",
            "quote": "According to Newbold, the manuscript proved that Bacon had access to a microscope centuries before they were supposedly first invented. The claim that this medieval monk had observed living cells created a sensation."
          },
          "synonyms": [
            "「had been able to look at cells」同义替换为原文的「had observed living cells」，look at 对应 observed",
            "「through a ...」对应原文的「had access to a microscope」（拥有并使用显微镜），介词短语与名词短语互换",
            "「William Newbold believed」对应原文的「According to Newbold」与「The claim that ...」"
          ],
          "locatingTip": "定位：摘要句首的人名 William Newbold 是极佳的定位词，回原文找 Newbold 只出现在第 3 段，其中写他声称手稿能证明 Bacon 拥有某种仪器，并说明当时的人观察到了细胞。确定答案技巧：题干把「观察细胞」（原文 observed living cells）与「通过某物」（through a ...）两件事合并，原文则分两句说：先讲 Bacon 拥有 a microscope，再说这位中世纪修士 observed living cells。两句连读即可确定空格所填即 microscope，且它与题干介词 through 搭配通顺（通过显微镜看细胞）。填写时注意只写一个词 microscope，不要写成 a microscope（空格前已有 a）；同时不要误填 cells，它是被观察的对象，不是仪器。",
          "analysis": "第 3 段先交代伏尼契认为作者是 Roger Bacon，随后写道：「According to Newbold, the manuscript proved that Bacon had access to a microscope centuries before they were supposedly first invented. The claim that this medieval monk had observed living cells created a sensation.」（据 Newbold 说，这部手稿证明 Bacon 早在显微镜据称首次发明之前几个世纪就已拥有显微镜。这位中世纪修士观察到活细胞的说法引起了轰动）。摘要把「拥有显微镜」和「观察活细胞」这两条信息压缩成一句：作者「能通过某物观察细胞」。原文中与「看细胞」直接搭配的仪器只有 the microscope，借助它才有了 observed living cells 这一说法，因此答案是 microscope。词性上是单数可数名词，位于介词 through 之后作介词的宾语，前面冠词 a 已给出，故只填 microscope 一词，符合 NO MORE THAN TWO WORDS 的限制。另外注意同段倒数第二句「Newbold had fallen victim to wishful thinking」（Newbold 成了一厢情愿的牺牲品），与摘要下句「Other researchers later demonstrated that there were flaws in his argument」对应，可作为定位的辅助印证。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "William Friedman concluded that the manuscript was written in an artificial language that was based on 36 ________",
          "translation": "威廉·弗里德曼得出结论：手稿是用一种以 ________ 为基础的人造语言写成的。",
          "answer": "concepts",
          "wordClass": "名词（复数，指语言赖以构成的「概念」；位于介词 on 之后作宾语，原文即以复数形式出现，须保留词尾 s）",
          "locating": {
            "paragraph": "5",
            "quote": "Friedman concluded that the most plausible resolution of this paradox was that “Voynichese” is some sort of specially created artificial language, whose words are devised from concepts rather than linguistics."
          },
          "synonyms": [
            "「was written in an artificial language」同义替换为原文的「is some sort of specially created artificial language」，specially created 对应 written in",
            "「was based on」同义替换为原文的「whose words are devised from」（其词语由……构造而成），介词 from 与 on 功能相当",
            "「William Friedman concluded」与原文的「Friedman concluded」逐字对应"
          ],
          "locatingTip": "定位：摘要把判断归给 William Friedman，回原文找 Friedman 与 conclusion，落在第 5 段首句，句中的人造语言、词语构造方式一应俱全。确定答案技巧：题干说这种人造语言「基于某样东西」，原文对应处是「whose words are devised from concepts rather than linguistics」（其词语由概念而非语言学构造），rather than 结构提示前后两项形成对照，前项 concepts 即为答案，后项 linguistics 是同一位置的干扰项。此外要紧扣词数限制与词性：此处需名词复数 concepts，不能填 linguistics（那是被否定的那一项），也不能只写 concept，因为原文用的是复数。",
          "analysis": "第 5 段首句：「Friedman concluded that the most plausible resolution of this paradox was that “Voynichese” is some sort of specially created artificial language, whose words are devised from concepts rather than linguistics.」（Friedman 得出结论，对这个悖论最合理的解释是：「伏尼契语」是某种专门创造出来的人造语言，其词语由概念而非语言学构造）。题干把原句拆成「an artificial language that was based on 36 ______」，并把定语从句 whose words are devised from 改写成 be based on，空格所填就是 from 的宾语 concepts。注意此处 rather than linguistics 构成的对照是本题最典型的干扰设置：原文同时给出「概念」和「语言学」两项，前者是实际依据，后者是被排除的项，若只凭就近原则草率填空容易误选 linguistics。从词性看，空格位于介词 on 之后，应填名词；concepts 为复数形式，与原文一致，符合 NO MORE THAN TWO WORDS 的限制。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "He couldn't find out the meaning of this language but he believed that the 37 ________ would continue to bring advances in code-breaking.",
          "translation": "他未能弄清这门语言的含义，但他相信 ________ 将继续为密码破译带来进步。",
          "answer": "the computer",
          "wordClass": "名词短语（定冠词 the 加名词单数 computer，指代计算机这一工具，作宾语从句的主语；必须连定冠词一起写，共两词）",
          "locating": {
            "paragraph": "6",
            "quote": "Even though Friedman was working more than 60 years ago, he suspected that major insights would come from using the device that had already transformed code-breaking: the computer."
          },
          "synonyms": [
            "「he believed」同义替换为原文的「he suspected」（都表示未完全证实的判断）",
            "「would continue to bring advances in code-breaking」同义替换为原文的「would come from using the device that had already transformed code-breaking」，already transformed 对应 continue to bring advances",
            "「the computer」在原文中以冒号后的同位语形式出现，与前面的「the device」为同一事物"
          ],
          "locatingTip": "定位：摘要在讲 Friedman 对某种工具的预判，回原文第 6 段（整段只有两句，专讲 Friedman 与 computer）即可锁定。确定答案技巧：原文说 Friedman 预感重大突破将来自「the device that had already transformed code-breaking」，随后的冒号是关键的提示符——冒号后面「the computer」就是对 the device 的解释说明，即他认为将继续推动破译工作的那种工具。空格前题干已有 the，说明答案本身自带定冠词，因此要连 the 一起填写，构成两词的名词短语 the computer，正好卡在 NO MORE THAN TWO WORDS 的上限内。段末「In this he was right — it is now the key tool for uncovering clues about the manuscript's language」进一步印证他预判正确，计算机至今仍是关键工具，与题干「continue to bring advances」的方向吻合。",
          "analysis": "第 6 段：「Even though Friedman was working more than 60 years ago, he suspected that major insights would come from using the device that had already transformed code-breaking: the computer. In this he was right — it is now the key tool for uncovering clues about the manuscript's language.」（尽管 Friedman 的研究已是 60 多年前的事，他仍预感重大洞见将来自那件早已改变密码破译的设备：计算机。这一点他说对了——如今它正是揭示手稿语言线索的关键工具）。题干把这一段压缩成「他没能弄清这门语言的含义，但相信某物会继续为破译带来进展」，其中「相信」对应 suspected，「继续带来进展」对应 would come from using the device that had already transformed code-breaking 与末句的 is now the key tool。冒号后的 the computer 就是答案，且必须在答案中带上定冠词，因为题干空格前已有一个 the，而原文中该词本身就是 the computer 这一整体，缺了冠词就与原文中 the computer 这一完整名词短语不一致。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Dr Gabriel Landini used a system known as 38 ________ in his research, and claims to have demonstrated the presence of genuine words.",
          "translation": "加布里埃尔·兰迪尼博士在其研究中使用了被称为 ________ 的方法，并声称已证明手稿中存在真正的词语。",
          "answer": "spectral analysis",
          "wordClass": "名词短语（形容词 spectral 修饰名词 analysis，指一种模式检测方法的名称；作介词 as 的宾语，须连用两个词、不加冠词）",
          "locating": {
            "paragraph": "7",
            "quote": "in 2001 another leading Voynich scholar, Dr Gabriel Landini of Birmingham University in the UK, published the results of his study of the manuscript using a pattern-detecting method called spectral analysis"
          },
          "synonyms": [
            "「a system known as」同义替换为原文的「a pattern-detecting method called」（一种被称为……的模式检测方法），system 与 method 对应",
            "「used ... in his research」同义替换为原文的「published the results of his study ... using」，study 与 research 对应",
            "「claims to have demonstrated the presence of genuine words」同义替换为原文的「This revealed evidence that the manuscript contains genuine words」，genuine words 逐字复现"
          ],
          "locatingTip": "定位：人名 Dr Gabriel Landini 与机构 Birmingham University 都是强定位词，只出现在第 7 段。确定答案技巧：题干说方法「被称为某名称」，原文对应结构是「a pattern-detecting method called spectral analysis」（一种名为频谱分析的模式检测方法），called 与 known as 同义，其后的 spectral analysis 就是答案。填写时要注意这是两词短语，需完整写出，不能只写 analysis 或 spectral；同时不要误填前面的 pattern-detecting，那是方法的类别描述，而非名称本身。同句后半「This revealed evidence that the manuscript contains genuine words, rather than random nonsense」与题干「claims to have demonstrated the presence of genuine words」严格对应，可用来二次确认定位无误。",
          "analysis": "第 7 段先总述「The insights so far have been perplexing.」（迄今的研究洞见令人困惑），然后举例：「For example, in 2001 another leading Voynich scholar, Dr Gabriel Landini of Birmingham University in the UK, published the results of his study of the manuscript using a pattern-detecting method called spectral analysis. This revealed evidence that the manuscript contains genuine words, rather than random nonsense, consistent with the existence of some underlying natural language.」（例如，2001 年另一位伏尼契研究权威、英国伯明翰大学的 Gabriel Landini 博士发表了他对手稿研究的结果，所用的是一种被称为频谱分析的模式检测方法。这种方法显示手稿含有真正的词而非随机胡言，与某种底层自然语言的存在相符）。题干的结构是「used a system known as ___」，known as 与原文的 called 完全对应，答案即方法名称 spectral analysis；题干后半「claims to have demonstrated the presence of genuine words」也照应原文的 revealed evidence that the manuscript contains genuine words。词性上是一个由形容词加名词构成的名词短语，共两个词，正好符合 NO MORE THAN TWO WORDS 的词数上限，填写时必须完整保留两词。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "Dr Gordon Rugg's system involved a grille, that made it possible to quickly select symbols that appeared in a 39 ________",
          "translation": "戈登·拉格博士的方法使用了一块格栅，使得人们能够迅速挑选出出现在 ________ 中的符号。",
          "answer": "table",
          "wordClass": "名词（单数，作介词 in 的宾语，指用于挑选符号的表格；空格前有不定冠词 a，故填可数名词单数形式）",
          "locating": {
            "paragraph": "8",
            "quote": "Using a system first published by the Italian mathematician Girolamo Cardano in 1150, in which a specially constructed grille is used to pick out symbols from a table, Rugg found he could rapidly generate text with many of the basic traits of the Voynich manuscript."
          },
          "synonyms": [
            "「Dr Gordon Rugg's system」同义替换为原文的「a system ... Rugg found ...」，且 system 一词原词复现",
            "「a grille」与原文的「a specially constructed grille」（特制的格栅）对应",
            "「made it possible to quickly select symbols」同义替换为原文的「is used to pick out symbols」与「could rapidly generate」，pick out 对应 select，rapidly 对应 quickly",
            "「appeared in a table」对应原文的「pick out symbols from a table」，介词 in 与 from 在此处表达同一空间关系"
          ],
          "locatingTip": "定位：人名 Girolamo Cardano 与关键词 grille 都只出现在第 8 段，扫读时盯住 grille（格栅）即可一步锁定。确定答案技巧：题干说格栅「使人们能迅速挑选符号」，原文的对应表述是「a specially constructed grille is used to pick out symbols from a table」（用特制格栅从一张表格中挑出符号），pick out 即 select，from a table 即题干所说的「出现在某个东西里」，空格所填即 table。填写时注意只写一个词 table，不要写成 a table（空格前已有 a），也不要误填 grille（那是挑选工具，不是被挑选符号所在之处）。此外，原文该句主语是 Rugg，整句讲的是他如何借助 Cardano 的系统快速生成具有手稿特征的文本，与题干「Rugg's system」严格对应。",
          "analysis": "第 8 段写 Rugg 用实验证明伪造手稿是可行的：「Using a system first published by the Italian mathematician Girolamo Cardano in 1150, in which a specially constructed grille is used to pick out symbols from a table, Rugg found he could rapidly generate text with many of the basic traits of the Voynich manuscript.」（Rugg 使用意大利数学家 Girolamo Cardano 于 1150 年首次公布的一套系统，其中用一块特制的格栅从一张表格中挑选出符号，结果发现自己能迅速生成带有伏尼契手稿许多基本特征的文本）。题干把这一长句改写为「Rugg's system involved a grille, that made it possible to quickly select symbols that appeared in a ___」，格栅的功能（pick out symbols）与被挑选对象的位置（from a table）一一对应，因此答案是单数名词 table。词性上，空格位于介词 in 与不定冠词 a 之后，需填可数名词单数形式，符合 NO MORE THAN TWO WORDS 的限制。另需提醒：摘要最后一句「Rugg's conclusion was that the manuscript lacked genuine meaning」与原文并不完全一致——原文中 Rugg 强调「he had not set out to prove the manuscript a hoax」（他并非要证明手稿是伪造的），他只是证明「it is feasible to hoax something this complex in a few months」（在几个月内伪造如此复杂的东西是可行的）；该句没有空格，仅作阅读时留意，不影响本空的答案。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 40 单项选择题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 40,
        "end": 40
      },
      "items": [
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "The writer's main aim in this passage is to",
          "translation": "作者写这篇文章的主要目的是",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Over the years, the manuscript has attracted the attention of everyone from amateur dabblers to top code-breakers, all determined to succeed where countless others have failed."
          },
          "synonyms": [
            "「the numerous attempts to decode the manuscript」同义替换为原文的「everyone from amateur dabblers to top code-breakers, all determined to succeed where countless others have failed」，attempts 对应 determined to succeed，numerous 对应 from ... to ... 所体现的多方人士",
            "「describe」对应全文以叙述各路研究者（Newbold、Friedman、Landini、Zandbergen、Rugg）先后尝试为主的组织方式",
            "主题句还可参照第 4 段「The Voynich manuscript has continued to defy the efforts of world-class experts.」，defy the efforts 同样指向「多次破解尝试」这一主线"
          ],
          "locatingTip": "定位：主旨题应先通读各段首句，本篇文章的段落主线依次是「手稿来历」（第 1 段）、「吸引各类人关注」（第 2 段）、「Voynich 与 Newbold 的猜测」（第 3 段）、「Friedman 的分析」（第 4 段）、「人造语言假说」（第 5 段）、「计算机」（第 6 段）、「Landini 与 Zandbergen 的分歧」（第 7 段）、「Rugg 的伪造实验」（第 8 段）、「学者仍各持己见」（第 9 段）、「魅力不减」（第 10 段）。确定答案技巧：全文以一个又一个研究者及其方法为骨架，从头到尾都在叙述「人们如何尝试解读手稿」，且第 1 段就以「one that no-one has been able to break」（无人能破解）开篇，第 4 段用「has continued to defy the efforts of world-class experts」（继续挫败顶尖专家的努力）承接，主线始终是破解尝试史，因此选 C。",
          "analysis": "本文的段落结构显示主旨：第 1 段介绍手稿入藏耶鲁、得名伏尼契并以「no-one has been able to break」点出未解之谜；第 2 段说它吸引从爱好者到顶尖破译者的各类人士，并引用 Rugg 的话说明人人都能亲眼看它；第 3 段讲 Voynich 认为作者是 Roger Bacon、Newbold 声称找到密码钥匙而最终被证为 wishful thinking；第 4 至 5 段讲 Friedman 的团队用频率分析受挫，进而提出人造语言假说；第 6 段讲 Friedman 预感计算机将带来突破；第 7 段讲 Landini 的频谱分析支持「真词」说、Zandbergen 的熵分析支持「人造语言」说；第 8 段讲 Rugg 用 Cardano 的格栅系统演示伪造的可行性；第 9 至 10 段讲学者仍各持己见、手稿魅力不减。整篇的组织方式是「按人物和年份依次叙述历代解读尝试」，从 1912 年伏尼契购入、1921 年 Newbold、1944 年 Friedman、2001 年 Landini、2002 年 Zandbergen 到 2004 年 Rugg，时间线清晰。四个选项所对应的「解释含义」「确定作者身份」「媒体报道量」在文中都只是被提及的问题或从未出现，唯有「描述众多破解尝试」能覆盖全文，故答案为 C。",
          "traps": [
            "为什么不是 A（explain the meaning of the manuscript）：全文恰恰没有解释出手稿的含义，反而反复强调无人能破解（no-one has been able to break）、语料「has continued to defy the efforts of world-class experts」，第 5 段更说「That still leaves a host of questions unanswered ... such as the identity of the author and the meaning of the bizarre drawings」，可见「解释含义」是尚未完成的目标，而不是文章的主旨。",
            "为什么不是 B（determine the true identity of the manuscript's author）：作者身份确实是文中反复提到的未解问题（第 5 段的 the identity of the author），但文章只转述过 Voynich 等人的猜测并说明其失败，从未着手「确定」作者，且第 5、9 段都明说这一问题仍未解决，因此「确定作者身份」不是写作目的。",
            "为什么不是 D（identify which research into the manuscript has had the most media coverage）：全文没有任何关于媒体报道量、关注度排名的信息，只在第 3 段提到 Newbold 的说法「created a sensation」（引起轰动），那是一次声名事件而非对不同研究的传播量做比较，属于原文未涉及的内容。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
