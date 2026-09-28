(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-13", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-13",
  "meta": {
    "examId": "p1-low-13",
    "title": "Report on a university drama project 大学戏剧项目报告",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 流程图填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Started with the wish for a collaborative project focusing on the 1 ________ of producing a play",
          "translation": "始于这样一个愿望：开展一个聚焦于排演一出戏的 ________ 的合作项目。",
          "answer": "process",
          "wordClass": "名词（单数，指过程；空格前有定冠词 the，后面接 of producing a play 作后置定语，填名词单数形式，不加复数、不加冠词）",
          "locating": {
            "paragraph": "1",
            "quote": "We decided that the way to achieve this feeling of collaboration would be to concentrate on the process by which the work emerged during auditions and rehearsals."
          },
          "synonyms": [
            "“the wish for a collaborative project” 对应原文的 “we now wanted to take a collaborative approach”，即“想要一个合作项目”与“想要采取合作方式”同义",
            "“focusing on the ________ of producing a play” 同义替换为原文的 “concentrate on the process by which the work emerged”，concentrate on 即 focus on",
            "“producing a play” 对应原文的 “the work emerged during auditions and rehearsals”，即排演一出戏的整个过程，被聚焦的中心名词就是 process"
          ],
          "locatingTip": "定位：流程图第一格 Origin of project 讲项目的出发点，回原文第 1 段找谈“做这个项目的初衷”的句子。第 1 段用一连串第一人称叙述交代设想：This project was born from discussions … we now wanted to take a collaborative approach … We decided that the way to achieve this feeling of collaboration would be to concentrate on the process …。确定答案技巧：concentrate on 与题干的 focusing on 同义，被聚焦的对象紧跟其后，就是 the process；of producing a play 正是原文 by which the work emerged during auditions and rehearsals 的概括。答案只能写一个词，即名词原形 process，不要写成 the process、a process 或 production。",
          "analysis": "原文第 1 段逐层交代项目的由来：先说明这个项目源于作者与其他戏剧专业同学的讨论（“This project was born from discussions I had with other drama students about the kind of theatre productions we'd like to create.”），接着说明以往参加的大学演出都是各司其职（“we took on specific roles, such as costume designer, producer, director and so on”），而这次想要一种全新的合作方式（“we now wanted to take a collaborative approach that was new to all of us”），并且希望每个人的声音同等重要、能参与演出的每个环节（“every voice would carry equal weight and everyone would be able to contribute to every aspect of the show”）。紧接着是关键句：“We decided that the way to achieve this feeling of collaboration would be to concentrate on the process by which the work emerged during auditions and rehearsals.”（我们认定，要达成这种合作的感受，办法就是把重心放在作品从试镜到排练逐步成形的那一过程上）。流程图第一格写的是“项目始于一个聚焦于排演一出戏的某个方面的合作愿望”，把 concentrate on 改写成 focusing on，把 the process by which the work emerged 概括为 producing a play 的过程，因此空格所缺的名词就是 process。从语法看，空格前有定冠词 the、后有 of producing a play，属于典型的“定冠词加名词单数加 of 短语”结构，答案填名词单数 process 即可。",
          "traps": [
            "为什么不是 rehearsals：原文的 auditions and rehearsals 只是“过程”发生的两个场合（during auditions and rehearsals），concentrate on 的宾语是 the process，题干空格所问的正是这个中心名词。",
            "为什么不是 collaboration：collaboration 在原文里是想要达成的“感受”（this feeling of collaboration），是项目的目的，而空格问的是项目所聚焦的对象，对应 concentrate on 后的 process。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "second round: organised as a 2 ________ – the final six actors were then selected",
          "translation": "（试镜）第二轮：以 ________ 的形式组织——随后选出最终六位演员。",
          "answer": "discussion",
          "wordClass": "名词（单数，可数，指一种活动形式；空格前有不定冠词 a、介词 as 后作宾语，填单数形式 discussion）",
          "locating": {
            "paragraph": "2",
            "quote": "At this stage we wanted the reactions and ideas to flow and be explored by the group in the form of a discussion."
          },
          "synonyms": [
            "“organised as a discussion” 同义替换为原文的 “in the form of a discussion”，即“以讨论的形式进行”与“以讨论的形式组织”同义",
            "“second round” 与原文的 “the second round of auditions” 原词复现",
            "“the final six actors were then selected” 同义替换为原文的 “deciding on the final six actors who would take part in the project”"
          ],
          "locatingTip": "定位：流程图第二格是 Auditions（试镜），先给 first round 是 several workshops，再问 second round 的形式。第 2 段按顺序写了两轮试镜：第一轮 “a series of workshops”，随后 “we recalled fifteen actors for the second round”，因此只需要读第一轮之后的那几句即可。确定答案技巧：题干把原文的 in the form of a discussion 改写成 organised as a [2]，形式信息从介词短语挪到介词 as 之后，填 discussion。注意区分：workshops 是上一格已经给出的第一轮形式，若在第二格重复填写就与原文的轮次对应关系冲突；答案要写单数 discussion（题干有 a）。",
          "analysis": "第 2 段讲试镜的完整流程。开头交代目的：“The next step was to hold auditions in order to find six actors who felt the same way about the project as we did.”（下一步是举行试镜，找出六位与我们对这个项目看法一致的演员）。接着说明不希望制造对立感：“We were anxious not to create an ‘us-and-them' feeling to the auditions, since collective ownership of the project was crucial to our ideas.”（我们很在意不要在试镜中造成“我们与他们”的隔阂，因为项目的共同归属感对我们的理念至关重要）。于是第一轮以工作坊形式进行且氛围轻松：“So we ran the first round of auditions as a series of workshops, which we kept very informal and relaxed.”（因此第一轮试镜我们办成一系列工作坊，尽量保持非正式、轻松的氛围）。随后开始第二轮：“Then we recalled fifteen actors for the second round of auditions. At this stage we wanted the reactions and ideas to flow and be explored by the group in the form of a discussion.”（接着我们召回十五位演员参加第二轮试镜。这一阶段我们希望大家以讨论的形式让各种反应和想法流动起来、得到探讨）。段落末尾才决定最终人选：“Possibly the hardest part of the whole process was sitting down afterwards and deciding on the final six actors who would take part in the project.”（整个过程中最难的部分，也许就是之后坐下来决定最终参与项目的六位演员）。由此可见第二轮的对应表达是 in the form of a discussion，题干把它改写成 organised as a discussion，答案填 discussion。",
          "traps": [
            "为什么不是 workshops：workshops 是第一轮的形式（“we ran the first round of auditions as a series of workshops”），题干上一行已经给出第一轮为 workshops，空格问的是第二轮，对应 discussion。",
            "为什么不是 reactions 或 ideas：the reactions and ideas 是讨论中被交流探讨的内容（wanted the reactions and ideas to flow），不是组织形式的名称。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "in early rehearsals, 3 ________ was found to be an effective technique",
          "translation": "在早期排练中，________ 被发现是一种有效的技巧。",
          "answer": "freewriting",
          "wordClass": "名词（不可数，指一种写作练习的名称；在句中作主语，前面不加冠词，保持原文的单个词形 freewriting）",
          "locating": {
            "paragraph": "3",
            "quote": "One of the strongest tools we used for this was freewriting – an exercise in which one person would read out a list of unconnected words and the rest of the group would clear their minds and simply write something in response to those words."
          },
          "synonyms": [
            "“in early rehearsals” 同义替换为原文的 “Our initial rehearsals”，initial 即 early",
            "“an effective technique” 同义替换为原文的 “One of the strongest tools”，tool 对应 technique，strongest 对应 effective",
            "“was found to be” 对应原文的 “We found it helped us to gain insight into the different ways our minds work.”，即作者事后确认其有效"
          ],
          "locatingTip": "定位：流程图第三格 Preparation 的第一行时间词是 in early rehearsals，回原文找出处，第 3 段首句即 “Our initial rehearsals were dedicated to …”，initial 对应 early。确定答案技巧：该段第二句用 “One of the strongest tools we used for this was freewriting” 给出被使用的技巧，并紧接着用破折号给出定义（一人念出一串互不相关的词，其他人清空头脑随手写下回应），tools 对应题干的 technique，strongest 对应 effective，因此空格要填这种练习的名称 freewriting。这是一个复合词，原文写作一个单词，必须照抄为 freewriting，既不能拆成 free writing，也不能只写 writing。",
          "analysis": "第 3 段专讲早期排练的内容。首句设定方向：“Our initial rehearsals were dedicated to creating a strong group dynamic and to exploring some of the themes of the play without explicit reference to the script.”（最初的排练致力于营造牢固的团队默契，并在不直接接触剧本的前提下探讨剧作的一些主题），其中 without explicit reference to the script 也顺带解释了后面第 4 题“剧本只在后期排练才用上”。第二句给出本题答案：“One of the strongest tools we used for this was freewriting – an exercise in which one person would read out a list of unconnected words and the rest of the group would clear their minds and simply write something in response to those words.”（我们为此使用的最有力的工具之一就是自由写作——一种由一个人念出一串互不相关的词、其他人清空思绪就这些词随手写点东西的练习）。后面两句交代效果：“We found it helped us to gain insight into the different ways our minds work.”（我们发现它帮助我们洞察各自头脑运作方式的不同）以及 “It also meant that we got to know each other very well, very quickly!”（这也意味着我们很快就彼此非常熟悉了）。把原文与题干对照：early rehearsals 对应 initial rehearsals，an effective technique 对应 one of the strongest tools，was found to be 对应 We found it helped us …，空格需要的正是被定义为“练习”的那个专有名称 freewriting，且该词在原文中以一个单词出现。",
          "traps": [
            "为什么不是 writing：原文把这种练习命名为 freewriting（自由写作），破折号后面虽然也出现动词 write（simply write something），但作为技巧名称的词只有一个，即 freewriting；只写 writing 无法表达“自由”这一限定，也不符合原文词形。",
            "为什么不是 dynamic：a strong group dynamic 是早期排练想要达成的目标之一（dedicated to creating a strong group dynamic），并不是被用来达成目标的技巧。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "the 4 ________ was only used in later rehearsals",
          "translation": "________ 只在后期排练中才被使用。",
          "answer": "script",
          "wordClass": "名词（单数，指剧本；空格前有定冠词 the，在句中作主语，填单数形式 script）",
          "locating": {
            "paragraph": "4",
            "quote": "It was only during the next phase of rehearsals that we finally began to work with the script."
          },
          "synonyms": [
            "“was only used in later rehearsals” 同义替换为原文的 “It was only during the next phase of rehearsals that we finally began to work with the script”，only 与 only 对应，later 对应 next phase，used 对应 work with",
            "第 3 段的 “without explicit reference to the script” 从反面印证早期排练刻意不碰剧本"
          ],
          "locatingTip": "定位：题干的关键词是 only 与 later rehearsals。原文第 4 段首句用强调句型 “It was only during the next phase of rehearsals that …” 开头，only 一词原样出现，next phase 即题干的 later，非常好认。确定答案技巧：强调句中被强调的成分是时间状语 only during the next phase，主句动作是 we finally began to work with the script，可见“到后期排练才开始使用”的对象就是 the script。第 3 段 “without explicit reference to the script” 又说明早期排练是有意不涉及剧本的，两处互相印证。答案填单数名词 script，题干空格前已给出定冠词 the，只需填 script 一词。",
          "analysis": "第 3 段末尾提到早期排练是在不看剧本的情况下探讨主题（“without explicit reference to the script”），第 4 段开头则转折到剧本的使用时机：“It was only during the next phase of rehearsals that we finally began to work with the script.”（直到排练的下一个阶段，我们才终于开始围绕剧本来工作）。这一句用 only … that 的强调结构把“才开始用剧本”这一时间点突显出来，恰好对应题干 the script was only used in later rehearsals。同一段随后交代配对的确定过程：“We had not yet decided on the pairings for the six actors at this point, and we had the non-actors on the team reading in addition to the people who would be doing the final performances. The whole team finally decided on the pairings of the actors by a vote, and, miraculously, it was a unanimous decision.”（此时我们还没有定下六位演员的搭档组合，团队中不参加演出的人也参与了朗读。最终全队以投票方式决定了演员的搭档组合，而且奇迹般地达成了一致）。可见 the script 是与“剧本”对应的唯一对象，而 pairings 是当时仍未决定的内容，与“只在后期才使用”这一描述无关，故答案确定为 script。",
          "traps": [
            "为什么不是 freewriting：freewriting 属于早期排练（initial rehearsals）使用的技巧，是流程图上一格已经填出的答案；本题问的是“只在后期排练才使用”的对象，对应 the script。",
            "为什么不是 pairings：原文说 “We had not yet decided on the pairings for the six actors at this point”，pairings 指的是演员搭戏组合这一待决事项，并非一件“到后期才开始使用”的东西。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "everyone had a 5 ________ to decide which actor would play each part",
          "translation": "每个人都通过 ________ 来决定哪位演员扮演哪个角色。",
          "answer": "vote",
          "wordClass": "名词（单数，可数；空格前有不定冠词 a，作 had 的宾语，填单数形式 vote）",
          "locating": {
            "paragraph": "4",
            "quote": "The whole team finally decided on the pairings of the actors by a vote, and, miraculously, it was a unanimous decision."
          },
          "synonyms": [
            "“everyone had a vote” 同义替换为原文的 “The whole team finally decided on the pairings of the actors by a vote”，by a vote 即通过投票、人人参与",
            "“decide which actor would play each part” 同义替换为原文的 “decided on the pairings of the actors”，pairings 即谁与谁搭档演戏",
            "“everyone” 对应原文的 “The whole team”，说明全体成员都参与了表决"
          ],
          "locatingTip": "定位：题干的关键信息是“决定谁演哪个角色”，对应的原文表达是 decided on the pairings of the actors，出现在第 4 段中部。确定答案技巧：题干把原文的介词短语 by a vote 改写成 “had a [5] to decide”，即把“通过投票来定”改为“拥有一次投票来决定”，空格需要的正是 by a vote 里的方式名词 vote。同时注意答案的词形：原文是 a vote（带不定冠词的单数名词），题干空格前也有不定冠词 a，因此填单数 vote，不要填 voting 或 votes。",
          "analysis": "第 4 段后半段记录配对的确定过程。原文先是说明当时的状态：“We had not yet decided on the pairings for the six actors at this point.”（那时我们尚未决定六位演员的搭档组合），接着给出解决方案：“The whole team finally decided on the pairings of the actors by a vote, and, miraculously, it was a unanimous decision.”（最终全队通过投票决定了演员的搭档组合，而且奇迹般地全票一致）。随后是作者的评价：“The casting of the roles worked well and felt more natural than it had in any other show I've worked on. I think the dynamic that we developed over the early rehearsals was crucial in giving us three such strong onstage relationships.”（角色的分配效果很好，比我参与过的任何一出戏都更自然。我认为早期排练中培养出来的默契，是让我们形成三对如此牢固的舞台关系的关键）。把原文与流程图对照：流程图写 “everyone had a vote to decide which actor would play each part”，其中 everyone 对应 The whole team，decide which actor would play each part 对应 decided on the pairings of the actors，所以剩余成分 by a vote 就是空格所缺，答案填 vote。",
          "traps": [
            "为什么不是 decision：a unanimous decision 说的是投票得出的结果（一致的决定），而题干 “had a ________ to decide” 的位置需要的是实现决定的手段，对应 by a vote 里的 vote。",
            "为什么不是 voting：原文用的是名词短语 a vote，题干空格前同样是不定冠词 a，因此要填与原文词形一致的 vote，而不是动名词 voting。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "the variety of 6 ________ was surprising",
          "translation": "________ 的多样令人惊讶。",
          "answer": "interpretations",
          "wordClass": "名词（复数，可数，指对剧作各不相同的多种理解；在 the variety of 结构中位于介词 of 之后作其宾语，句子主语是单数的 the variety，故本词须用复数 interpretations）",
          "locating": {
            "paragraph": "6",
            "quote": "In the final performances, it was surprising that despite the collaborative nature of the project, a range of very different interpretations emerged."
          },
          "synonyms": [
            "“the variety of interpretations” 同义替换为原文的 “a range of very different interpretations”，a range of 与 variety of 同义，very different 正是 variety 的具体体现",
            "“was surprising” 与原文的 “it was surprising” 原词对应",
            "“In the final performances” 对应流程图里 Performance 这一环节的时间与场合"
          ],
          "locatingTip": "定位：流程图第四格是 Performance（演出），题干关键词是 surprising，回原文搜索 surprising，只有第 6 段首句出现 “In the final performances, it was surprising that …”，一步锁定。确定答案技巧：该句 that 从句的主语是 a range of very different interpretations，其中 very different 正是题干 variety（多样化）所对应的具体说法，因此空格要填 interpretations。注意 variety of 后接可数名词时要使用复数，而原文给出的也是复数形式 interpretations，照抄即可，不要写成单数 interpretation。",
          "analysis": "第 6 段讲最终演出呈现出的结果：“In the final performances, it was surprising that despite the collaborative nature of the project, a range of very different interpretations emerged.”（在最后的演出中，令人意外的是，尽管项目本质上是合作的，却出现了多种迥然不同的诠释）。随后作者给出原因：“This is, of course, partly due to the tragicomic nature of Pinter's text, which allowed the pairs of actors to exploit these two disparate elements, tragedy and comedy, to different degrees.”（这当然部分归因于品特文本悲喜剧兼具的性质，它让各组演员能够在不同程度上发挥悲剧与喜剧这两种截然不同的元素）。把原文与题干对照：In the final performances 对应流程图的 Performance 环节，it was surprising 对应 was surprising，a range of very different interpretations 对应 the variety of interpretations，所以空格填 interpretations。由于 variety of 表示“…的多种类型”，其后必须接复数可数名词，原文也正是复数形式，因此答案保持复数 interpretations。",
          "traps": [
            "为什么不是 performances：In the final performances 在句中只是时间与场合状语，题干问的“多样”指的是从句主语 a range of very different interpretations，而不是演出本身。",
            "为什么不是 shows：原文 “how we'd ended up with three such different shows” 出现在第 7 段观众的提问中，说的是“三台如此不同的演出”，与第 6 段所讲的“诠释的多样性”不是同一个信息点。"
          ]
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
          "stem": "The writer had been involved in other collaborative theatre productions at university.",
          "translation": "作者在大学期间曾参与过其他合作性质的戏剧演出。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Although we had previously been involved in various university productions where we took on specific roles, such as costume designer, producer, director and so on, we now wanted to take a collaborative approach that was new to all of us."
          },
          "synonyms": [
            "“had been involved in … productions at university” 对应原文的 “we had previously been involved in various university productions”，时态与地点都吻合",
            "“collaborative theatre productions” 与原文的 “a collaborative approach that was new to all of us” 相互冲突：原文强调合作方式对所有人都是全新的，说明以前参加的并不是合作项目",
            "“took on specific roles, such as costume designer, producer, director and so on” 说明以往是各自担任特定角色的分工模式，与 collaborative 的“人人参与每个环节”相对"
          ],
          "locatingTip": "定位：题干核心词是 university productions 与 collaborative，第 1 段第 2 句同时出现 various university productions，且句首就是 Although 引导的让步状语从句，让步转折处往往是判断题的考点。确定答案技巧：原文承认作者过去参加过各种大学戏剧演出，但用 where 定语从句说明那些演出都是 “we took on specific roles（各自承担特定角色，如服装设计、制作、导演等）”，并在主句中强调 “we now wanted to take a collaborative approach that was new to all of us（我们现在想要一种对我们所有人都全新的合作方式）”。既然合作式做法是前所未有的，说明以前参与的演出并不属于合作性质，题干所说的“参与过其他合作戏剧演出”与原文相反，故判 FALSE。抓住 new to all of us 这一关键表述即可快速定案。",
          "analysis": "第 1 段开头两句交代项目背景。第一句：“This project was born from discussions I had with other drama students about the kind of theatre productions we'd like to create.”（这个项目源自我与戏剧专业同学关于想创作何种戏剧演出的讨论）。第二句就是本题定位句：“Although we had previously been involved in various university productions where we took on specific roles, such as costume designer, producer, director and so on, we now wanted to take a collaborative approach that was new to all of us.”（尽管我们以前参与过各种大学演出，在其中担任特定角色，比如服装设计、制作人、导演等，但我们现在想要采取一种对我们所有人都全新的合作方式）。句中 although 先把“过去参加过大学演出”这一事实交代清楚，再用 where 定语从句说明以往的性质：各自担任具体职务，属于分工制；主句则明确这种合作方式 was new to all of us（对我们所有人都是新的）。题干把“参加过大学戏剧演出”扩大为“参加过合作性质的戏剧演出”，与原文对以往模式的描述以及“合作是全新事物”这一表述直接矛盾，因此答案是 FALSE。做题提示：这类题的陷阱在于学生只看到 university productions 与原文吻合就选 TRUE，忽略了对演出性质（collaborative 还是分工制）的核对。",
          "traps": [
            "为什么不是 TRUE：原文虽然确认了 “we had previously been involved in various university productions”，但紧接着说明那些演出是各司其职的分工模式（took on specific roles），并强调合作方式 “was new to all of us”。题干把“参加过大学戏剧演出”偷换成“参加过合作性质的戏剧演出”，与原文的 new 直接对立。",
            "为什么不是 NOT GIVEN：原文对以往演出的性质（各担特定角色）和合作方式的新鲜度（对我们所有人都是新的）都交代得非常明确，属于已给出且与题干相反的信息，不是信息缺失。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Each actor chosen for the project would play one role for three nights.",
          "translation": "被选入该项目的每位演员都要连着三个晚上扮演同一个角色。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "We decided we would use six actors cast as three different couples, and each pair would have a turn to perform on one of the three nights that the play was to be staged."
          },
          "synonyms": [
            "“three nights” 与原文的 “the three nights that the play was to be staged” 指同一组演出日期",
            "“Each actor … for three nights” 与原文的 “each pair would have a turn to perform on one of the three nights” 相互冲突：原文是每一对演员只演其中一晚",
            "“six actors cast as three different couples” 说明演员是两两成对、分成三台演出，而不是每人连演三晚"
          ],
          "locatingTip": "定位：题干中的关键数字是 three nights，回原文搜索 nights，第 1 段最后一句 “one of the three nights that the play was to be staged” 一步命中。确定答案技巧：本题考的是一组数量关系，必须逐字读清原文分配方式——六位演员分成三对（six actors cast as three different couples），每一对只在三个晚上中的某一个晚上登台（each pair would have a turn to perform on one of the three nights）。也就是说全剧演出三晚，但每一对演员只负责其中一晚；题干却把它说成每位演员要连续演三个晚上，把“三晚之一”放大成“三晚全都演”，数量关系被篡改，故判 FALSE。注意 one of the three 这种表述强调“其中之一”，与 the three 或 for three nights 的整体范围完全不同。",
          "analysis": "第 1 段末尾两句给出演出安排。前一句先说明选定的剧本：“We chose a play that we felt allowed varied interpretations – Harold Pinter's The Lover, a modern one-act play with just two characters.”（我们选了一部我们认为可以有多种诠释空间的戏，即哈罗德·品特的《情人》，一部只有两个角色的现代独幕剧）。后一句就是本题定位句：“We decided we would use six actors cast as three different couples, and each pair would have a turn to perform on one of the three nights that the play was to be staged.”（我们决定用六位演员，分成三对不同的搭档，每一对轮流在演出三晚中的一晚登场）。这里的信息结构是：演出共三晚，六位演员被分成三对，每对只演一晚。题干把这一安排改写成 “Each actor … would play one role for three nights”，即每位演员要演三个晚上，与原文的 one of the three nights 明显不符，因此答案是 FALSE。要特别注意判断题中的数字与范围：one of the three nights（三晚中的一晚）与 for three nights（连着三晚）看似相近，实为两个相反的数量关系，是本篇最容易失分的一处。",
          "traps": [
            "为什么不是 TRUE：原文说 “each pair would have a turn to perform on one of the three nights”，即每对演员只演三晚中的一晚；题干却说每位演员要演三个晚上，把个别一晚夸大为全部三晚。",
            "为什么不是 NOT GIVEN：题干涉及的演员人数、搭档组数与演出晚数，原文都用数字明确交代（six actors、three different couples、one of the three nights），信息完整且与题干矛盾，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "The early rehearsals took place at the university theatre.",
          "translation": "早期排练是在大学剧场进行的。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Our initial rehearsals were dedicated to creating a strong group dynamic and to exploring some of the themes of the play without explicit reference to the script."
          },
          "synonyms": [
            "“early rehearsals” 同义替换为原文的 “initial rehearsals”，initial 即 early",
            "“took place at the university theatre” 在原文中没有对应信息：原文只交代了早期排练的目的与内容，从未提到排练场地",
            "全文出现 university 的地方只有 “various university productions” 与 “university drama project” 的标题，均与排练场地无关"
          ],
          "locatingTip": "定位：定位词是 early rehearsals，原文写作 initial rehearsals，位于第 3 段首句；第 4 段开头还有 “during the next phase of rehearsals” 可作参照。确定答案技巧：找到早期排练的描写后，把题干拆成要素逐个核对——时间与阶段（early / initial rehearsals）原文有，内容（creating a strong group dynamic、exploring the themes）原文有，但地点（at the university theatre）原文完全没有出现。作者只写了排练做什么、为了什么，从未写在哪里做，这属于纯粹的信息空白，判 NOT GIVEN。不要因为文章背景是大学项目就把排练地点默认为大学剧场，凡是原文没有的地点信息都要按未提及处理。",
          "analysis": "第 3 段只写早期排练的目的与内容：“Our initial rehearsals were dedicated to creating a strong group dynamic and to exploring some of the themes of the play without explicit reference to the script.”（我们最初的排练致力于营造牢固的团队默契，并在不直接涉及剧本的情况下探讨剧作的一些主题），随后整段都在讲 freewriting 这一练习及其效果。第 4 段开头写 “It was only during the next phase of rehearsals that we finally began to work with the script.”（直到排练的下一个阶段才开始使用剧本），也只是交代阶段与内容的变化。全文涉及场地的表述仅有第 1 段开头的 “various university productions” 与文章标题中的 university drama project，前者谈的是以往演出而非本次排练地点，后者只是项目的性质说明，都不能证明早期排练在大学剧场进行。由于原文对“在哪里排练”只字未提，既没有支持也没有否定，只能判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文没有任何一句提到早期排练的场地，无法与题干所说的“在大学剧场”一致，因此不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文给出与题干相反的信息（例如说排练在校外、在宿舍或某个排练室进行），而原文对地点完全没有交代，只留下信息空白。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "The writer felt satisfied that all the actors were paired with the right partner.",
          "translation": "作者对所有演员都两两搭档得当感到满意。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The casting of the roles worked well and felt more natural than it had in any other show I've worked on."
          },
          "synonyms": [
            "“paired with the right partner” 对应原文的 “The casting of the roles worked well”，casting（角色分配、搭档安排）与 pairing 同义",
            "“felt satisfied” 对应原文的 “felt more natural than it had in any other show I've worked on”，用比较级表达作者的肯定与满意",
            "“all the actors” 对应原文上一句的 “The whole team finally decided on the pairings of the actors by a vote, and, miraculously, it was a unanimous decision.”，即搭配方案由全员一致通过"
          ],
          "locatingTip": "定位：题干关键词是 paired（搭档）与 felt satisfied（满意度），回第 4 段找谈搭配结果的句子，即 “The casting of the roles worked well and felt more natural than it had in any other show I've worked on.”，其中 casting of the roles 就是 pairing 的同义表达，worked well 就是满意度的证据。确定答案技巧：判断题里的态度题要在原文找褒贬词。原文用 worked well（效果很好）、felt more natural than … any other show I've worked on（比我参与过的任何一出戏都更自然）以及上一句的 miraculously / unanimous decision（奇迹般地全票一致），三处都是正面评价，对象正是演员的搭配安排，与题干“对所有人搭配得当感到满意”完全吻合，因此判 TRUE。注意这些评价词是原文明确写出的，不需要额外推理。",
          "analysis": "第 4 段围绕后期排练与角色分配展开。段落先说明剧本何时启用：“It was only during the next phase of rehearsals that we finally began to work with the script.”，再说明当时的状态：“We had not yet decided on the pairings for the six actors at this point, and we had the non-actors on the team reading in addition to the people who would be doing the final performances.”（此时尚未定下六位演员的搭档组合，团队中不出演的人也参与朗读）。接着是决定方式与结果：“The whole team finally decided on the pairings of the actors by a vote, and, miraculously, it was a unanimous decision.”（最终全队通过投票决定了搭档组合，奇迹般地全票一致）。紧接着就是本题定位句：“The casting of the roles worked well and felt more natural than it had in any other show I've worked on.”（角色的分配效果很好，比我参与过的任何一出戏都更自然）。段末还补充：“I think the dynamic that we developed over the early rehearsals was crucial in giving us three such strong onstage relationships.”（我认为早期排练培养出的默契，是让我们形成三对如此牢固的舞台关系的关键）。把这几句连起来看：搭配由全员一致决定，结果被评为“效果很好”“比以往任何戏都自然”“三对舞台关系牢固”，都是作者满意与肯定的表现，与题干 felt satisfied that all the actors were paired with the right partner 一致，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文对搭配结果给出的全是正面评价（worked well、felt more natural than … any other show I've worked on、miraculously unanimous、three such strong onstage relationships），没有出现任何不满或遗憾的措辞，不存在与题干相反的信息。",
            "为什么不是 NOT GIVEN：题干问的是作者对演员搭配是否满意，原文既有评价对象（the casting of the roles / the pairings of the actors），也有明确的评价态度（worked well、more natural），属于已经交代清楚的信息。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Some team members discovered an unexpected talent for set design.",
          "translation": "有些团队成员发现了自己在舞台布景设计方面的意外才能。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The stage set was left more to the individual pairs of actors, but since a large part of the later rehearsals was observing and feeding back on the individual performances being created by each pair, everyone was able to help with set design."
          },
          "synonyms": [
            "“set design” 与原文的 “set design” 原词复现，落点在第 5 段",
            "“everyone was able to help with set design” 只说明人人都有机会参与布景设计，并没有说明谁因此发现了设计天赋",
            "“discovered an unexpected talent” 在原文中没有对应表达：原文既没有 talent、gift、skilled 之类的评价词，也没有任何“发现才能”的表述"
          ],
          "locatingTip": "定位：题干关键词 set design 是独特的复合词，全文只在第 5 段出现，扫读到 “everyone was able to help with set design” 即可锁定位置。确定答案技巧：锁定后逐项核对题干的两个信息点——参与布景设计（help with set design）在原文有对应，但“发现了意外的才能（discovered an unexpected talent）”在原文完全没有提及。原文只说布景主要交给各组演员，后来又因为后期排练大量时间用于观摩并反馈各组表演，所以人人都能帮着做布景设计，这讲的是分工与参与，而非天赋的发现。题干多出的 discovered、unexpected、talent 三层含义都没有原文依据，故判 NOT GIVEN。遇到“发现意外天赋”“展现出惊人才能”这类评价性推断，先假定它是无中生有，回原文核对有没有对应的评价词。",
          "analysis": "第 5 段讲其他决定的做法。开头总起：“Other decisions were made in much the same way.”（其他决定也大体以同样的方式做出）。接着讲宣传品：“The publicity was the responsibility of one member of the team, but she asked everyone what they thought would be effective. She then made several different versions, and from these we chose the design we liked the most.”（宣传由团队中的一位成员负责，但她征求了所有人对什么更有效的意见，随后制作了若干不同版本，我们从中挑出最喜欢的方案）。然后是本题定位句：“The stage set was left more to the individual pairs of actors, but since a large part of the later rehearsals was observing and feeding back on the individual performances being created by each pair, everyone was able to help with set design.”（舞台布景更多交由各组演员自行处理，但由于后期排练的很大一部分时间都在观摩各组自己创作的表演并相互反馈，人人都能参与到布景设计中来）。段末又说明布景的最终变化：“We initially planned that each pair would use the same stage set. However, due to the different ways they interpreted the script, it became important for the set to be adapted for each couple.”（我们起初计划各组使用同一套布景，然而由于各组对剧本的理解不同，为每一对演员调整布景变得很重要）。这些内容都围绕布景的归属与调整，没有任何一句评价谁的布景设计才能，因此题干所说的“发现意外才能”属于原文未提及的信息，答案只能是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说明布景设计由各组演员参与、全员都能帮忙（everyone was able to help with set design），并未说明有人因此发现自己具备设计天赋，得出这一结论需要额外推断，原文没有依据。",
            "为什么不是 FALSE：原文既没有说有人展现出布景设计才能，也没有说无人具备这种才能，只是完全没有涉及“发现天赋”这一层信息，因此不符合 FALSE 的“信息相反”要求。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "The original intention was to use a different stage set for each performance.",
          "translation": "最初的想法是每一场演出都使用不同的舞台布景。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "We initially planned that each pair would use the same stage set. However, due to the different ways they interpreted the script, it became important for the set to be adapted for each couple."
          },
          "synonyms": [
            "“The original intention” 同义替换为原文的 “We initially planned”，initially 即 the original intention",
            "“a different stage set for each performance” 与原文的 “each pair would use the same stage set” 直接冲突：原文是最初打算共用同一套布景",
            "“However, due to the different ways they interpreted the script, it became important for the set to be adapted for each couple” 说明按不同搭档调整布景是后来才产生的需要，并非最初的打算"
          ],
          "locatingTip": "定位：题干关键词是 original intention 与 different stage set，回第 5 段后半段找谈布景计划的句子，即 “We initially planned that each pair would use the same stage set.”，initially planned 正对题干的 original intention。确定答案技巧：本题的关键是抓住时间对比——原文用 initially planned（当初计划）与 However（然而）把前后两个阶段分开：最初计划三组演员共用一套布景；后来因为各组对剧本的诠释不同，才觉得有必要为每一对演员调整布景。题干把“后来才出现的调整”说成“最初的意图”，时间关系被颠倒，故判 FALSE。看到 original、originally、at first、intend 这类词，务必回原文核对“当初到底是怎么打算的”，不要误用后面的结果句。",
          "analysis": "第 5 段末尾两句是本题的判分依据。前一句：“We initially planned that each pair would use the same stage set.”（我们最初计划让各组演员使用同一套舞台布景），句中 initially 明确限定这是最初的打算，same stage set 说明当时的设想是布景统一。后一句：“However, due to the different ways they interpreted the script, it became important for the set to be adapted for each couple.”（然而由于各组对剧本的诠释方式不同，为每一对演员调整布景就变得很重要了），句首的 However 标志转折，due to 引出原因，it became important 则说明“为每组分别调整布景”是后来才形成的需要。题干写成 “The original intention was to use a different stage set for each performance”，把后来的调整说成最初的意图，与原文最初 plan 的内容（the same stage set）恰好相反，因此答案是 FALSE。另外要注意“为每对演员调整布景（adapted for each couple）”也不等于“每场演出使用不同布景”，它强调的是在共有基础上作出改动，题干对原文的改写本身就偏离了原意。",
          "traps": [
            "为什么不是 TRUE：原文明确说最初的计划是 “each pair would use the same stage set（各组使用同一套布景）”，而“为每对演员调整布景”是后来因为诠释不同才变得重要的，与题干所说的最初意图相反。",
            "为什么不是 NOT GIVEN：原文对最初计划（initially planned）和后来的变化（However … it became important）都有清楚交代，信息完整且与题干相互矛盾，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "The question-and-answer session encouraged the team to think about their aims.",
          "translation": "问答环节促使团队思考他们的目标。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The questions that the audience asked were interesting and insightful, and certainly made everyone in the team think about what we'd been doing, what we'd wanted to achieve and whether we'd achieved it."
          },
          "synonyms": [
            "“encouraged the team to think about” 同义替换为原文的 “made everyone in the team think about”，made 与 encouraged 都表示促使、让某人去想",
            "“their aims” 同义替换为原文的 “what we'd wanted to achieve and whether we'd achieved it”，即想达成什么目标、目标是否达成",
            "“The question-and-answer session” 与原文首句的 “The question-and-answer session held after the show” 原词复现"
          ],
          "locatingTip": "定位：题干关键词 question-and-answer session 是带连字符的独特表达，全文只在第 7 段首句出现，一步定位到末段。确定答案技巧：定位后读紧随其后的下一句，看这个环节带来了什么。原文说观众的问题 “interesting and insightful”，并且 “certainly made everyone in the team think about what we'd been doing, what we'd wanted to achieve and whether we'd achieved it”，其中 what we'd wanted to achieve and whether we'd achieved it 正是题干 aims（目标）的展开说法，certainly 更加强了肯定语气。题干用 encouraged 概括 made … think，用 think about their aims 概括对目标与成效的反思，信息方向完全一致，故判 TRUE。",
          "analysis": "第 7 段专讲演出后的问答环节。首句给出总体评价：“The question-and-answer session held after the show was perhaps the most rewarding part of the project.”（演出后举行的问答环节也许是这个项目中最有收获的部分）。第二句是本题定位句：“The questions that the audience asked were interesting and insightful, and certainly made everyone in the team think about what we'd been doing, what we'd wanted to achieve and whether we'd achieved it.”（观众提出的问题有趣且富有洞见，确实让团队里每个人都去思考我们一直在做什么、我们曾想达成什么、以及我们是否达成了）。第三句补充观众问题的具体内容：“We were asked, among other things, about how successful our collaborative ethic had been, how we'd ended up with three such different shows, how we'd overcome the initial ‘production-team-versus-cast' divide, and how we would continue in the future.”（观众问到的事情包括：我们的合作理念成效如何、为什么最终会有三台如此不同的演出、我们如何克服了最初“制作团队对演员组”的分歧，以及今后会怎样继续）。把原文与题干对照：question-and-answer session 原词对应，encouraged the team to think about 对应 made everyone in the team think about，their aims 对应 what we'd wanted to achieve and whether we'd achieved it，信息一致，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文用 “certainly made everyone in the team think about what we'd been doing, what we'd wanted to achieve and whether we'd achieved it” 明确说明问答环节促使全体成员反思目标与成效，态度是肯定、赞赏的，不存在与题干相反的信息。",
            "为什么不是 NOT GIVEN：题干所问的“问答环节是否促使团队思考目标”，原文在定位句中对思考的对象（what we'd wanted to achieve、whether we'd achieved it）和影响范围（everyone in the team）都有具体交代，属于已有正面回答，并非未提及。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
