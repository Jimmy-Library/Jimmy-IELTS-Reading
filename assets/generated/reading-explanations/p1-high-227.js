(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-227", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-227",
  "meta": {
    "examId": "p1-high-227",
    "title": "The Whale Goes to Court 鲸鱼油",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–7 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 7
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "An inspection fee on fish oil was introduced in New York in 1818.",
          "translation": "1818 年，纽约开始对鱼油征收检查费。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The case involved an old law requiring those who sold fish oil to pay a fee in order to have their barrels inspected by city officials, and certified."
          },
          "synonyms": [
            "“An inspection fee on fish oil” 对应原文的 “an old law requiring those who sold fish oil to pay a fee in order to have their barrels inspected by city officials, and certified”，即“鱼油检查费”这一制度",
            "“was introduced in New York in 1818” 与原文的 “an old law” 相矛盾：原文说这是一条早已存在的旧法律，1818 只是案件发生与开庭的年份",
            "原文首句 “In 1818 a whale became the subject of a controversial court case in New York City.” 中的 1818 修饰的是“案件”，而不是“收费制度”"
          ],
          "locatingTip": "定位：题干带有专有名词 New York 和年份 1818，两者在第 1 段开头同时出现，本篇首段即定位段，无需跳读。确定答案技巧：本题的判分点是法律的新旧。原文用 an old law（一条旧法律）交代这条收费法规的来历，说明“出售鱼油必须缴费送检”是早已存在的制度；1818 在原文中只和案件挂钩（In 1818 a whale became the subject of a controversial court case），与收费制度的设立无关。题干把“旧法早已存在”改写成“1818 年才引入收费”，属于时间上的事实矛盾，因此判 FALSE。判断题里遇到年份，必须回到原文确认这个年份到底修饰谁。",
          "analysis": "第 1 段共四句交代背景，与本题相关的是前两句：“In 1818 a whale became the subject of a controversial court case in New York City.”（1818 年，一头鲸鱼成了纽约市一桩引发争议的诉讼案的主角）；“The case involved an old law requiring those who sold fish oil to pay a fee in order to have their barrels inspected by city officials, and certified.”（该案涉及一条旧法律，它要求出售鱼油者缴纳费用，以便由市政官员检查并认证其油桶）。第一句把 1818 这个年份明确给了“案件”；第二句用 an old law 说明收费送检制度是一条既有的旧法，本案只是援引它。题干却把两句的信息重新拼接，写出 “An inspection fee on fish oil was introduced in New York in 1818.”（1818 年纽约开始对鱼油征收检查费），把“案件发生在 1818 年”偷换成“收费制度在 1818 年才引入”，与原文的 an old law 直接冲突。下一句 “an oil merchant named Samuel Judd refused to pay the inspection fee on three barrels of oil” 也印证这一点：Judd 拒缴的是这条既有法律项下的费用，可见收费制度并非 1818 年新设。因此答案是 FALSE。做题提示：本题是典型的“时间状语张冠李戴”，原文的年份属于事件 A（案件），题干却把它安到事件 B（法律出台）头上，只要分清每个时间词所修饰的对象，就能迅速判定矛盾。",
          "traps": [
            "为什么不是 TRUE：原文明确称这条收费法规为 an old law（旧法律），且首句的 In 1818 修饰的是“案件发生”，不是“费用开征”。题干说收费制度 1818 年才引入，与 an old law 的说法对立，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文既给出了收费制度的存在（an old law requiring those who sold fish oil to pay a fee），也给出了 1818 年这一时间信息（In 1818 a whale became the subject of a controversial court case），两条信息都明确，只是彼此的关系与题干所说的相反，属于有明确相反信息的情形，按规则判 FALSE 而非 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Samuel Judd argued that the inspection fee should exclude whale oil.",
          "translation": "塞缪尔·贾德（Samuel Judd）主张检查费不应把鲸鱼油包括在内。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "However, an oil merchant named Samuel Judd refused to pay the inspection fee on three barrels of oil, claiming that no inspection was necessary because it was whale oil, and whales were not fish."
          },
          "synonyms": [
            "“argued” 同义替换为原文的 “claiming”，都表示“提出主张、声称”",
            "“the inspection fee should exclude whale oil” 同义替换为原文的 “no inspection was necessary because it was whale oil”，即鲸鱼油不需要送检、不应被收费",
            "“Samuel Judd” 在原文中原词复现：“an oil merchant named Samuel Judd”；原文补充理由 “and whales were not fish” 进一步支撑其排除鲸鱼油的立场"
          ],
          "locatingTip": "定位：题干的主语是人名 Samuel Judd，这个专有名词在第 1 段第三句首次出现（第 6 段末尾再次出现，指其胜诉的结果），扫读时盯住大写人名即可一步锁定。确定答案技巧：本题考“某人的主张是什么”，关键在于找到原文中表示主张的动词 claiming，并核对主张的内容。原文说 Judd 拒缴三桶油的检查费，理由是 “no inspection was necessary because it was whale oil, and whales were not fish”（因为那是鲸鱼油、而鲸鱼不是鱼，所以无须检查）；题干把这一诉求概括为 “the inspection fee should exclude whale oil”（检查费应把鲸鱼油排除在外），claiming 与 argued 同义，排除鲸鱼油与“鲸鱼油无须检查”同义，方向完全一致，故判 TRUE。",
          "analysis": "第 1 段第三句是本题的落点：“However, an oil merchant named Samuel Judd refused to pay the inspection fee on three barrels of oil, claiming that no inspection was necessary because it was whale oil, and whales were not fish.”（然而，一位名叫 Samuel Judd 的油商拒绝为三桶油缴纳检查费，声称无须检查，因为那是鲸鱼油，而鲸鱼不是鱼）。理解本案的法律逻辑很重要：那条旧法律针对的是“出售鱼油的人（those who sold fish oil）”，所以 Judd 的抗辩并不是泛泛地拒绝缴费，而是主张鲸鱼油在性质上不属于该法律的适用对象——鲸鱼不是鱼，鲸鱼油自然不是鱼油，也就没有被检查、被收费的义务。题干把这一立场写成 “argued that the inspection fee should exclude whale oil”（主张检查费应把鲸鱼油排除在外），其中 argued 对应原文的 claiming，exclude whale oil 对应 no inspection was necessary because it was whale oil，两处改写一一对应，信息方向一致，因此答案是 TRUE。原文末尾的 and whales were not fish 是 Judd 立论的根据，题干虽然没有复述这条理由，但结论层面完全吻合，不影响判断。",
          "traps": [
            "为什么不是 FALSE：原文记录的正是 Judd 主动提出的抗辩理由——鲸鱼油无须检查，因为他认定鲸鱼不是鱼。这与题干“主张检查费不应涵盖鲸鱼油”是同向同义的表述，不存在矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文用 claiming that 明确引出了 Judd 的主张内容，主张的存在与具体内容都交代得非常清楚，并非未提及；题干只是把原文的“鲸鱼油无须检查”换成了“应把鲸鱼油排除在检查费之外”，属于同义概括。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Judd had been in trouble with city officials before the inspection fee disagreement.",
          "translation": "在检查费纠纷之前，贾德（Judd）就曾与市政官员有过节。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The state disagreed, and so a date was set for a court to decide not a point of law, but the answer to a more fundamental question: is a whale a fish?"
          },
          "synonyms": [
            "“city officials” 在原文中出现在上文的 “inspected by city officials”，指执行这条旧法律的市政官员",
            "“had been in trouble with … before the inspection fee disagreement” 在原文中找不到任何对应：原文只叙述了本次检查费纠纷本身（“an oil merchant named Samuel Judd refused to pay the inspection fee”）以及州政府不同意、遂定下开庭日期，对 Judd 此前是否与官员发生过冲突只字未提",
            "“before” 所要求的时间在前信息在原文中完全缺失，原文的时间线只有 1818 年的这次拒绝缴费与随之而来的诉讼"
          ],
          "locatingTip": "定位：题干的关键词是 Judd 和 city officials，两者都落在第 1 段。确定答案技巧：本题问的是“在本次纠纷之前是否有过前科或过节”，属于时间在前的额外信息，而原文对 Judd 的介绍只有一句——他是油商、拒绝为三桶鲸鱼油缴费、理由是鲸鱼不是鱼；随后只说 “The state disagreed, and so a date was set for a court …”，即州政府不同意，于是定下开庭日期。整段既没有提及他此前与市政官员的任何往来，也没有提及是否受过处罚或警告。这种“原文完全没有提到的额外信息”正是 NOT GIVEN 的典型情形：不能因为“他后来和官方对簿公堂”就推断“他之前也常和官方闹矛盾”。",
          "analysis": "第 1 段对 Judd 的交待集中在一句话里：“However, an oil merchant named Samuel Judd refused to pay the inspection fee on three barrels of oil, claiming that no inspection was necessary because it was whale oil, and whales were not fish.”（然而，一位名叫 Samuel Judd 的油商拒绝为三桶油缴纳检查费，声称无须检查，因为那是鲸鱼油，而鲸鱼不是鱼）。接下来原文只说 “The state disagreed, and so a date was set for a court to decide not a point of law, but the answer to a more fundamental question: is a whale a fish?”（州政府对此并不认同，于是定下日期开庭，要裁决的不是一个法律问题，而是一个更根本的问题：鲸鱼是鱼吗）。可见原文提供的信息有三点：Judd 的身份（油商）、他的行为（拒缴三桶油的检查费）和后续发展（州政府不同意、开庭）。题干所问的 “had been in trouble with city officials before the inspection fee disagreement”（在本次纠纷之前就曾与市政官员有过节）需要一段“更早的时间线”来支撑，而原文完全没有这类回溯内容——既没有说他此前被检查过、被罚过，也没有说他此前与官员打过交道。因此只能是 NOT GIVEN。做题提示：出现 before、previously、had already 这类回指更早时间的词时要格外警惕，除非原文确实交代了更早的事件，否则一律按信息缺失处理。",
          "traps": [
            "为什么不是 TRUE：原文只记录了本次检查费之争及由此引发的诉讼，从未提及 Judd 在此之前与市政官员的纠纷或处罚记录；把“这次和官方对立”延伸为“此前也有过节”属于原文没有的推断，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文给出相反信息（例如说他此前一直是守法良民、与官员相处无碍），而原文对此毫无交代，只是没有提及，不能说原文否认了这一点，所以也不是 FALSE，只能是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Many New Yorkers were interested in the court case at the time.",
          "translation": "当时许多纽约人对这起案件很感兴趣。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Indeed, the public debate in New York sparked off by the trial was sensational."
          },
          "synonyms": [
            "“Many New Yorkers were interested” 同义替换为原文的 “the public debate in New York … was sensational”，即公众辩论极其热烈，说明关注者众",
            "“at the time” 对应原文的 “sparked off by the trial”，指由这起案件在当时引发",
            "“the court case” 同义替换为原文的 “the trial”"
          ],
          "locatingTip": "定位：题干关键词是 New Yorkers 与 court case，回原文找“案件的公众反响”，落在第 2 段第 2 句。确定答案技巧：本题考“关注度”，判分点是原文有没有描述公众的热烈反应。原文用 the public debate in New York（纽约的公众辩论）和 sensational（引起轰动的、极轰动的）两个表述，直接说明这起案件在当时成了全城热议的话题，与题干 “Many New Yorkers were interested” 同向对应。第 2 段首句 “As simple as that question may appear today, the answer was far from obvious in the early nineteenth century.” 也铺垫了这场辩论的分量。二者信息方向一致，故选 TRUE。",
          "analysis": "第 2 段紧接第 1 段的案情展开，第 2 句写道：“Indeed, the public debate in New York sparked off by the trial was sensational.”（事实上，这起审判在纽约引发的公众辩论十分轰动）。句中三个要素与题干一一对应：the trial 对应题干的 the court case；the public debate in New York 对应 Many New Yorkers；was sensational 表示“引起巨大轰动、备受关注”，对应 were interested。第 2 段随后几句继续说明争论的规模：“At stake was nothing less than what most regarded as the order of nature.”（其利害关系不亚于大多数人眼中的自然秩序）以及 “For the average person the answer seemed perfectly obvious”（对普通人来说答案似乎显而易见），都说明这不是一场只有当事人关心的官司，而是引发了广泛的社会讨论。因此题干所述“当时许多纽约人关注这起案件”与原文相符，答案是 TRUE。做题提示：雅思常用 sensational、sparked off a debate、aroused public interest 这类表达来对应题干中的 interested、popular，遇到这类“反响类”描述要敢于确认其与“感兴趣”是对应关系。",
          "traps": [
            "为什么不是 FALSE：原文没有任何“公众冷漠、无人关心”的表述，反而强调公众辩论 was sensational，与题干方向一致，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到 the trial，还用 sensational 直接评价由此引发的公众辩论，等于明确给出了“关注度高”这一信息，并非缺失，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Traditionally, non-human creatures had been classified in one of three groups.",
          "translation": "传统上，非人类生物一直被归入三类中的一类。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "For as long as anyone could remember, all non-human creatures had been organised according to the categories of birds, beasts and fish."
          },
          "synonyms": [
            "“Traditionally” 同义替换为原文的 “For as long as anyone could remember”（在所有人记忆中一直如此），表示长期以来的传统做法",
            "“non-human creatures” 在原文中原词复现：“all non-human creatures”",
            "“had been classified” 同义替换为原文的 “had been organised according to the categories”（按类别加以组织）",
            "“in one of three groups” 对应原文列出的三类 “birds, beasts and fish”"
          ],
          "locatingTip": "定位：题干的关键词是 non-human creatures（连字符复合词，非常好认），这个表达在全文只出现在第 2 段，扫读时一遇到就可停下精读。确定答案技巧：本题考“分成几类”，判分点是原文是否列出三个类别。原文说所有非人类生物都按 birds, beasts and fish（鸟、兽、鱼）这三类来组织，恰好是三个组别；而题干说 “classified in one of three groups”，学生只需把 three 与原文列举的三项对上即可。同时 For as long as anyone could remember 与题干的 Traditionally 对应，说明这是一种长期沿袭的传统分类法，因此判 TRUE。",
          "analysis": "第 2 段在交代“这种传统观念”时给出了本题的依据：“For as long as anyone could remember, all non-human creatures had been organised according to the categories of birds, beasts and fish.”（在所有人的记忆中，所有非人类生物一直被按照鸟、兽、鱼这三类来组织）。这里的三个类别正好构成“三组”，与题干 “in one of three groups”（归入三类之一）完全吻合；For as long as anyone could remember 表示“自古以来、长期以来”，与题干的 Traditionally 是同义替换；all non-human creatures 则原词复现。前一句还给出了这种分类的判断规则：“According to the commonly accepted scheme of things, if an animal was not a beast or a bird, it was a fish” （按照当时普遍接受的观念，一种动物若不是兽类也不是鸟类，那它就是鱼类）——这正说明当时只有三个格子可放：鸟、兽、鱼，任何生物必居其一。题干所陈述的正是这一传统框架，故答案为 TRUE。做题提示：题干用数字 three 概括原文的列举（birds, beasts and fish），这是雅思常见的“用数字替换列举”手法，数一数原文列了几项就能确认。",
          "traps": [
            "为什么不是 FALSE：原文明确列出 birds, beasts and fish 三类，并以 “if an animal was not a beast or a bird, it was a fish” 说明三类足以涵盖一切生物，与题干“归入三类之一”一致，不存在矛盾信息。",
            "为什么不是 NOT GIVEN：原文对分类的组别与规则交代得很具体（三项列举加判断规则），属于已经明确给出的信息，不是没有提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Generally speaking, ordinary people thought fish were the lowest form of life.",
          "translation": "总体而言，普通人认为鱼是最低等的生命形式。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "For the average person the answer seemed perfectly obvious: whales swam in the sea and therefore they were fish."
          },
          "synonyms": [
            "“ordinary people” 同义替换为原文的 “the average person”（普通人）",
            "“Generally speaking” 同义替换为原文的 “seemed perfectly obvious”，都表示“在一般人看来显而易见”的普遍看法",
            "“thought fish were the lowest form of life” 在原文中找不到任何对应：原文只说普通人认为鲸鱼因为在海里游所以是鱼，完全没有对鱼类作任何等级高低的评价"
          ],
          "locatingTip": "定位：题干的关键词是 ordinary people 与 fish，回原文找“普通人怎么看待鱼”，最接近的是第 2 段最后一句 “For the average person the answer seemed perfectly obvious: whales swam in the sea and therefore they were fish.”。确定答案技巧：找到句子后要做的是“逐词核对”，而不是“读个大概”。原文这半句说的是普通人如何判断鲸鱼属于鱼类（因为鲸鱼在海里游），落点在“鲸鱼的身份”；题干问的却是鱼在生命等级中的位置（the lowest form of life）。原文全文从未把鱼说成低等生物，第 2 段的三分框架只是并列列举 birds, beasts and fish，第 5 段出现的 a lower place 说的是人类自身在自然秩序中的地位会因败诉而下降，与“鱼是最低等生命”毫无关系。题干多出来的这一层价值判断属于纯信息缺失，故判 NOT GIVEN。",
          "analysis": "第 2 段末句写道：“For the average person the answer seemed perfectly obvious: whales swam in the sea and therefore they were fish.”（对普通人来说答案显而易见：鲸鱼在海里游，所以它们是鱼）。这句只交代了两件事：普通人的判断主体是 “鲸鱼是不是鱼”，判断依据是“生活在水里”。题干却把落点换成 “fish were the lowest form of life”（鱼是最低等的生命形式），这是原文根本没有出现过的等级评价。需要特别警惕的是容易造成误判的两个“干扰源”：其一，第 2 段列举的 birds, beasts and fish 看起来像是从高到低的排列，但原文只是并列列举类别，没有说鱼最低；其二，第 5 段确实出现了等级词——Sampson 警告陪审团，若接受 Mitchill 的说法，“they were obliged to accept a lower place for their own kind in the natural order”（他们就必须接受自己所属的物种在自然秩序中处于更低的位置），但这里的 lower place 是指人类自己的地位下降，主语是 their own kind（人类），与鱼无关。原文既没有说鱼最低等，也没有反对这种说法，属于信息缺失，因此答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文对鱼类的评价只字未提，只讨论了鲸鱼算不算鱼，以及人类在自然秩序中的地位，都没有说鱼是最低等生命。把列举顺序（birds, beasts and fish）或第 5 段的 lower place 当作依据，属于超出原文的推断，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文有相反说法（例如明确表示鱼并不低等、或者把某类生物说成最低等），而原文对这一问题毫无立场，只是没说，因此也不能选 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Whales were excluded from the Linnaean system in 1818.",
          "translation": "1818 年，鲸鱼被排除在林奈分类体系之外。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Barely half a century old in 1818, the Linnaean system controversially classified whales as mammals because they shared two mammalian characteristics: they were warm-blooded and breathed air."
          },
          "synonyms": [
            "“the Linnaean system” 在原文中原词复现，同段首句也写作 “the new Linnaean system of classification”",
            "“in 1818” 在原文中原词复现：“Barely half a century old in 1818”",
            "“Whales were excluded from” 与原文的 “classified whales as mammals”（把鲸鱼归为哺乳动物）正相反：原文是纳入并归入哺乳动物一类，题干却说被排除在外"
          ],
          "locatingTip": "定位：题干中的专有名词 Linnaean 是极佳的定位词，全文只出现在第 3 段。确定答案技巧：本题考“被纳入还是被排除”。原文说 “the Linnaean system controversially classified whales as mammals”（林奈体系有争议地把鲸鱼归类为哺乳动物）——鲸鱼不仅没有被排除，反而被正式收编为哺乳动物，这正是在 1818 年引爆争议的原因。题干却写成 “Whales were excluded from the Linnaean system”，方向完全反了，属于与原文直接矛盾的表述，故判 FALSE。判断题里 excluded from 与 classified as 是一对高频反义陷阱，看到时要立刻回原文核对“到底进没进去”。",
          "analysis": "第 3 段整段讲林奈分类法与传统观念的对立，第 1、2 句是本题的依据：“Against this traditional framework stood the new Linnaean system of classification, which sought to introduce more scientific values into the classification of living things. Barely half a century old in 1818, the Linnaean system controversially classified whales as mammals because they shared two mammalian characteristics: they were warm-blooded and breathed air.”（与这一传统框架相对立的是新的林奈分类体系，它力图把更多科学价值引入生物分类。1818 年时林奈体系诞生尚不足半个世纪，它颇有争议地把鲸鱼归为哺乳动物，理由是鲸鱼具备两项哺乳动物特征：恒温、呼吸空气）。由此可见，鲸鱼在林奈体系中是被明确纳入的，而且被安放在 mammals 这一类别里；之所以说它 controversially（有争议地），正是因为有别于当时把鲸鱼当鱼的传统观念，而不是因为它把鲸鱼排除在外。题干说 1818 年鲸鱼被排除于林奈体系之外，与原文“被归为哺乳动物”正相矛盾，所以答案是 FALSE。做题提示：本题与第 5 题同属“分类”话题，但落点不同：第 5 题问传统三分法，第 7 题问林奈体系如何处理鲸鱼，回原文时务必认准 Linnaean 这个词所在的那句话。",
          "traps": [
            "为什么不是 TRUE：原文用 classified whales as mammals 明确表示鲸鱼在林奈体系中被归入哺乳动物，是“纳入”而非“排除”，题干所说与原文恰恰相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅提到了鲸鱼与林奈体系的关系，还给出了具体的归类结果（mammals）与两条理由（warm-blooded、breathed air），信息完整且与题干对立，因此属于有相反信息的情形，按规则判 FALSE。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Samuel Mitchill worked as a congressman and a 8 ________",
          "translation": "塞缪尔·米奇尔（Samuel Mitchill）曾担任国会议员和 8 ________。",
          "answer": "scientist",
          "wordClass": "名词（单数，表示身份或职业；空格前有不定冠词 a，故为可数名词单数形式，不加复数、不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "Sampson then took aim at Mitchill himself and what he represented: privileged aristocrats from the scientific community who had lost touch with reality."
          },
          "synonyms": [
            "“Samuel Mitchill” 在原文中原词复现，第 4 段交代其身份 “the congressman Samuel Mitchill”",
            "“worked as a congressman” 同义替换为原文的 “the congressman Samuel Mitchill”，原文用同位语给出他的议员身份",
            "“and a scientist” 对应原文的 “privileged aristocrats from the scientific community”（来自科学界的特权阶层），用以说明 Mitchill 属于科学界人士"
          ],
          "locatingTip": "定位：用专有名词 Samuel Mitchill 定位到第 4 段，该段第 2 句以同位语形式给出他的身份 “the congressman Samuel Mitchill”（国会议员塞缪尔·米奇尔）；空格所需的后半身份则要在第 5 段找，因为那里才把他与科学界联系起来。确定答案技巧：笔记把 Mitchill 的身份概括为“国会议员加某个身份名词”，congressman 已在原文中原词写明，剩下的空自然落在另一重身份上。第 5 段说 Sampson 攻击的是 Mitchill “what he represented: privileged aristocrats from the scientific community”（他所代表的那类人：来自科学界的特权贵族），说明 Mitchill 是科学界的一员；第 4 段还称他为 'living encyclopaedia'（活百科全书），也暗示其学者身份。据此判断该身份名词为 scientist，按 ONE WORD ONLY 只填一个词。",
          "analysis": "笔记第一行 “Samuel Mitchill worked as a congressman and a 8 ________” 需要两重身份，原文分别交代在第 4 段和第 5 段。第 4 段：“Judd's defence lawyers chose as their star witness one of New York's most prominent figures, the congressman Samuel Mitchill. Referred to as a 'living encyclopaedia', Mitchill was called upon to present the biology of the case.”（Judd 的辩护律师请来纽约最显赫的人物之一、国会议员塞缪尔·米奇尔作明星证人。被称为“活百科全书”的米奇尔被要求陈述本案的生物学问题）。这里 congressman 一词直接对应笔记里的 congressman；而被称作“活百科全书”、负责陈述生物学，说明他的另一重身份是科学界人士。第 5 段进一步用 “privileged aristocrats from the scientific community who had lost touch with reality”（那些脱离现实的科学界特权贵族）点明 Mitchill 所代表的正是科学界。两处信息合起来构成的答案就是 scientist。需要说明的是：原文并未逐字出现单数名词 scientist，而是用形容词性的 scientific community 来表示这一群体，本题按题库给定答案 scientist 照抄填写，作答时保持原词、小写形式，不写 scientists（那是复数，且与空格前的 a 不符）、也不写 science。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "William Sampson called 9 ________ as witnesses in order to appeal to the common sense of the jury.",
          "translation": "威廉·桑普森（William Sampson）请来了 9 ________ 作为证人，以迎合陪审团的常识。",
          "answer": "whalers",
          "wordClass": "名词（复数，指人；作 called 的宾语，且与 as witnesses 搭配，表示某一类人以复数形式出现）",
          "locating": {
            "paragraph": "4",
            "quote": "However, the prosecution counsel William Sampson turned the trial into a contest between scientific learning and common sense, by asking plain-spoken whalers to make their case before the jury."
          },
          "synonyms": [
            "“called … as witnesses” 同义替换为原文的 “by asking … to make their case before the jury”，即请他们出庭陈述作证",
            "“William Sampson” 在原文中原词复现，身份为 “the prosecution counsel William Sampson”（控方律师）",
            "“in order to appeal to the common sense of the jury” 同义替换为原文的 “turned the trial into a contest between scientific learning and common sense”，即把庭审变成科学与常识的较量"
          ],
          "locatingTip": "定位：题干的人名 William Sampson 是专有名词，出现在第 4 段最后一句，文中只出现一次，扫读到此句即可停。确定答案技巧：本题问“请谁出庭作证”，原文对应结构是 asking … to make their case before the jury，asking 后面的宾语就是答案。原文写 “by asking plain-spoken whalers to make their case before the jury”，宾语为 plain-spoken whalers（说话直白的捕鲸人），取中心名词即 whalers。同时原文的 common sense 与题干 appeal to the common sense of the jury 完全对应，进一步确认定位无误。作答时注意空格前没有冠词或限定词，所需的是指人复数名词 whalers，不能只写 whaler，也不能写 plain-spoken whalers（超过一个词）。",
          "analysis": "第 4 段讲庭审开始后的双方布阵，末句是本题依据：“However, the prosecution counsel William Sampson turned the trial into a contest between scientific learning and common sense, by asking plain-spoken whalers to make their case before the jury.”（然而，控方律师威廉·桑普森把庭审变成了一场科学学识与常识之间的较量，他让说话直白的捕鲸人向陪审团陈述他们的理由）。句中的语法关系非常清楚：by asking X to make their case before the jury 表示“采取的做法是请 X 出庭陈述”，X 即 plain-spoken whalers，中心词是 whalers（捕鲸人）。题干把这一动作改写为 “called 9 ________ as witnesses”，called … as witnesses 与 asking … to make their case before the jury 同义；而 “in order to appeal to the common sense of the jury” 正是对原文 the trial into a contest between scientific learning and common sense 的概括。需要注意的是，空格的答案只需中心名词 whalers，前面的形容词 plain-spoken 是修饰语，不能连写进去（ONE WORD ONLY）；同时答案用复数形式，因为原文指的是这一群人出庭作证，与 witnesses 的复数一致。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "New Yorkers disliked Mitchill because his ideas came from 10 ________.",
          "translation": "纽约人讨厌米奇尔（Mitchill），因为他的想法来自 10 ________。",
          "answer": "Europe",
          "wordClass": "专有名词（地名／洲名，位于介词 from 之后作宾语，首字母须大写）",
          "locating": {
            "paragraph": "5",
            "quote": "The smooth-talking Sampson then claimed Mitchill's beliefs had their origin in Europe - something he rightly judged would infuriate the citizens of always-independent New York."
          },
          "synonyms": [
            "“New Yorkers disliked Mitchill” 同义替换为原文的 “would infuriate the citizens of always-independent New York”，infuriate（激怒）对应题干的 disliked",
            "“his ideas” 同义替换为原文的 “Mitchill's beliefs”，两者都指米奇尔的学术观点",
            "“came from” 同义替换为原文的 “had their origin in”，都表示来源",
            "“Europe” 在原文中原词复现，位于介词 in 之后，题干把它改写成介词 from 的宾语"
          ],
          "locatingTip": "定位：题干关键词是 Mitchill 与地名类空格，回原文找“他的观点源自何地”，落在第 5 段提到的国名/洲名处。确定答案技巧：原文说 Sampson 声称 Mitchill 的信念 “had their origin in Europe”（源自欧洲），紧接着用 something he rightly judged would infuriate the citizens of always-independent New York 说明这句话能激怒一向独立的纽约市民——infuriate 与题干的 disliked 对应，citizens of New York 对应 New Yorkers，had their origin in 对应 came from，因此空格填 Europe。作答要点：Europe 是专有名词，首字母必须大写；只填一个词，不写 European（那是形容词/指人名词）、也不写 Europe 前的介词。",
          "analysis": "第 5 段是庭审中双方攻防的高潮段，本题的定位句为：“The smooth-talking Sampson then claimed Mitchill's beliefs had their origin in Europe - something he rightly judged would infuriate the citizens of always-independent New York.”（能言善辩的桑普森接着声称米奇尔的信念源自欧洲——他准确地判断出，这一点会激怒一向独立的纽约市民）。句子结构为“claimed 加宾语从句 加 something he rightly judged would infuriate the citizens”，其中破折号后的部分解释了 Sampson 为什么要抛出“欧洲来源”这一说法：因为它能激起纽约人的反感。笔记把这一逻辑压缩成 “New Yorkers disliked Mitchill because his ideas came from 10 ________”，因果链条与原文一致：因为观点来自欧洲，所以纽约人反感他。答案 Europe 就在 had their origin in 之后。注意空格所在结构为 came from 加名词，介词后直接跟洲名，因此填 Europe 本身即可；题干的 from 与原文的 in 只是介词不同，语义都是“来源于”，不影响答案。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "In the end it was statements from local 11 ________, not Mitchill's testimony which helped Judd win.",
          "translation": "最终帮助贾德（Judd）胜诉的，是当地 11 ________ 的陈述，而不是米奇尔（Mitchill）的证词。",
          "answer": "merchants",
          "wordClass": "名词（复数，指人；空格前有形容词 local 修饰，其后是逗号与 not Mitchill's testimony 这一插入成分，which 从句修饰的是 testimony 而非本词，故只填复数名词 merchants）",
          "locating": {
            "paragraph": "6",
            "quote": "In New York's markets, the merchants implicitly understood that whale oil and fish oil were not the same: whale oil could be used as a fuel for lamps because it could be burned without giving off smoke; fish oil, on the other hand, was nasty, impure stuff used primarily in tanning leather."
          },
          "synonyms": [
            "“statements from” 同义替换为原文的 “testimony”，下文 “it was this testimony that led to Judd's victory” 直接点明这些陈述就是证词",
            "“local …” 同义替换为原文的 “In New York's markets”，纽约本地的市场商贩即 local",
            "“helped Judd win” 同义替换为原文的 “led to Judd's victory”"
          ],
          "locatingTip": "定位：本题落在第 6 段，段首句已经预告 “Ultimately, what won the case for Samuel Judd were not Mitchill's scientific arguments, but testimony from a different sphere altogether.”（最终为 Judd 赢得官司的不是米奇尔的科学论证，而是来自另一个领域的证词），题干中的 not Mitchill's testimony 正对应这一句。确定答案技巧：既然原文说取胜靠的是另一个领域的证词，就顺着往下找这个领域里作证的是谁——第 6 段紧接着写 “In New York's markets, the merchants implicitly understood that whale oil and fish oil were not the same”，主语是 the merchants（商人们），而且是在 New York's markets（纽约的市场），与题干的 local 精确对应。因此空格填 merchants，注意是复数形式，与题干中 which 引导的定语从句和原文的复数主语一致。",
          "analysis": "第 6 段交代胜负的真正原因：“Ultimately, what won the case for Samuel Judd were not Mitchill's scientific arguments, but testimony from a different sphere altogether. In New York's markets, the merchants implicitly understood that whale oil and fish oil were not the same: whale oil could be used as a fuel for lamps because it could be burned without giving off smoke; fish oil, on the other hand, was nasty, impure stuff used primarily in tanning leather. In the end it was this testimony that led to Judd's victory.”（最终为塞缪尔·贾德赢得官司的不是米奇尔的科学论证，而是来自另一个领域的证词。在纽约的市场里，商人们心照不宣地知道鲸鱼油与鱼油并不相同：鲸鱼油可以作灯用燃料，因为它燃烧时不会冒烟；鱼油则是污浊不纯的东西，主要用于鞣制皮革。最后正是这份证词让 Judd 胜诉）。这段的指代关系环环相扣：首句说取胜靠 testimony from a different sphere，中间交代这个“另一个领域”就是 New York's markets 里的 the merchants，末句再用 this testimony 回指商人们的说法，再次确认胜负由它决定。题干 “statements from local 11 ________” 中 statements 对应 testimony，local 对应 In New York's markets（本地市场），helped Judd win 对应 led to Judd's victory，因此答案是 merchants。注意不要误填 markets，因为 markets 是地点、不能作“陈述”的发出者，而空格结构要求的是人；同时要保留复数 merchants。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Whale oil made a good 12 ________ because it was clean.",
          "translation": "鲸鱼油是一种很好的 12 ________，因为它很清洁。",
          "answer": "fuel",
          "wordClass": "名词（单数，可数，指用途或物品；空格前有不定冠词 a，故填可数名词单数形式）",
          "locating": {
            "paragraph": "6",
            "quote": "whale oil could be used as a fuel for lamps because it could be burned without giving off smoke"
          },
          "synonyms": [
            "“made a good …” 同义替换为原文的 “could be used as a …”，都表示“可作某种用途”",
            "“because it was clean” 同义替换为原文的 “because it could be burned without giving off smoke”，不冒烟即清洁",
            "“Whale oil” 在原文中原词复现，为所在分句的主语"
          ],
          "locatingTip": "定位：题干关键词是 Whale oil 与 clean，回原文找鲸鱼油被形容为“清洁”的地方，落在第 6 段商人们的说法中，即 “whale oil could be used as a fuel for lamps because it could be burned without giving off smoke”。确定答案技巧：找到句子后要做的是把两半信息对应起来。原文给的用途是从句中的 as a fuel for lamps（作灯用燃料），给出的原因是 because it could be burned without giving off smoke（燃烧不冒烟），而“不冒烟”正是题干 clean 的等义说法。因此空格要填的是用途名词 fuel，前面已有 a，只填一个词，不写 fuels 或 fuelling。",
          "analysis": "第 6 段在说明商人们为什么认定鲸鱼油与鱼油不同时给出了本题答案：“In New York's markets, the merchants implicitly understood that whale oil and fish oil were not the same: whale oil could be used as a fuel for lamps because it could be burned without giving off smoke; fish oil, on the other hand, was nasty, impure stuff used primarily in tanning leather.”（在纽约的市场里，商人们深知鲸鱼油与鱼油不同：鲸鱼油可用作灯用燃料，因为它燃烧时不冒烟；而鱼油则是污浊之物，主要用于鞣制皮革）。这句话用分号把两种油对比：鲸鱼油对应 “可用作燃料、燃烧无烟”，鱼油对应 “污浊、用于鞣皮”。题干 “Whale oil made a good 12 ________ because it was clean.” 取的是前一半：made a good 对应 could be used as a，clean 对应 could be burned without giving off smoke，由此空格所需的名词为 fuel（燃料）。从语法看，空格前有不定冠词 a，fuel 在这里作可数名词单数使用（原文即 as a fuel），所以填 fuel 原形。注意不要误填 lamps：lamps 是“灯的用途对象”，而题干的结构 “made a good fuel”（是好燃料）才是句子的落点；也不要填 smoke 或 tanning leather，那些属于干扰信息。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Judd's case is relevant today, e.g. in the debate about Earth's 13 ________.",
          "translation": "贾德的案子与今天仍然相关，例如在关于地球 13 ________ 的争论中。",
          "answer": "climate",
          "wordClass": "名词（单数，指气候这一议题；位于所有格 Earth's 之后作该名词短语的中心词，此处不加冠词、不用复数，填单数形式 climate）",
          "locating": {
            "paragraph": "7",
            "quote": "Whether the issue today is the effects of human activity on the climate or some other matter, the debate continues."
          },
          "synonyms": [
            "“relevant today” 同义替换为原文的 “The trial of the whale still has relevance today”，下文 “Whether the issue today …” 再次呼应",
            "“e.g.” 同义替换为原文的 “or some other matter”，说明气候只是当下争论的一个例子",
            "“Earth's …” 对应原文的 “human activity on the climate”，climate 即地球气候这一议题"
          ],
          "locatingTip": "定位：本段是全文最后一段，题干关键词是 today 与 debate，回原文找“当下的争论”，落在末段末句 “Whether the issue today is the effects of human activity on the climate or some other matter, the debate continues.”。确定答案技巧：末段先说 “The trial of the whale still has relevance today”，与题干 relevant today 一一对应；随后举例说明今天的争论是什么，其中的名词 climate 就位于所有格 Earth's 所要修饰的位置上。答案为一个单词 climate，取原文原形，不加复数也不需要冠词，字数符合 ONE WORD ONLY。",
          "analysis": "第 7 段把 1818 年的案子与今天联系起来：“The trial of the whale still has relevance today, when the court of public opinion remains easily swayed by sceptics. The 1818 trial was really about this question: who gets to decide on the place of the natural world in the human world - scientific experts or public opinion? Whether the issue today is the effects of human activity on the climate or some other matter, the debate continues.”（鲸鱼审判今天仍有现实意义，如今公众舆论这一“法庭”依然容易被怀疑论者左右。1818 年的这场审判真正要问的是：谁有资格决定自然世界在人类世界中的位置——科学专家还是公众舆论？无论今天的议题是人类活动对气候的影响，还是别的什么，争论仍在继续）。笔记最后一行的 “Judd's case is relevant today, e.g. in the debate about Earth's 13 ________” 正是对本段内容的概括：relevant today 对应 still has relevance today，e.g. 对应 or some other matter（说明气候只是举例之一），而空格处在 Earth's 之后、由介词 about 引出，需要的就是 climate 一词。原文用 the effects of human activity on the climate 表述这一议题，题干把它浓缩为 Earth's climate，指向同一件事。答案保持原形 climate，注意不要写成 climate change（超过一个词）。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
