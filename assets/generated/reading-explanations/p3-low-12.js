(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-low-12", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-low-12",
  "meta": {
    "examId": "p3-low-12",
    "title": "Humanities and the health professional 人文医学",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "An approach that incorporates the humanities is more important for some medical disciplines than others.",
          "translation": "融入人文学科的教学方式对某些医学专业而言比另一些专业更重要。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Everyone commented on the need to achieve a balance between the humanities and the skills and technological expertise of their specific discipline, beginning with the experience in medical school and then life in their chosen specialisation, to create fully realised professionals."
          },
          "synonyms": [
            "“An approach that incorporates the humanities” 同义替换为原文的 “the humanities … beginning with the experience in medical school and then life in their chosen specialisation”",
            "“some medical disciplines” 对应原文的 “their specific discipline” 与 “the experience in medical school and then life in their chosen specialisation”，指各个不同的专业方向",
            "“is more important for … than others” 与原文的 “the need to achieve a balance between the humanities and the skills and technological expertise” 相互冲突：原文要求所有专业都取得平衡，没有轻重之分"
          ],
          "locatingTip": "定位：题干中的专有概念 humanities（人文学科）在全文反复出现，但“对不同专业是否重要程度不同”这一比较只可能出现在开篇交代讨论背景的第 1 段。先扫读第 1 段，抓住 disciplines、specific discipline、chosen specialisation 这些表示“不同专业领域”的词。确定答案技巧：判断题中凡出现 more important for some … than others（对某些更重要的比较级），答案依据就是原文有没有对人群做区分。原文第一句说与会者来自 many disciplines（许多学科），随后用 Everyone commented（每个人都谈到）点明全体一致，再用 all health professionals 收束，强调“一种平衡的教学方式应适用于所有健康专业”，完全没有把人文教育按专业排轻重。原文的“统一要求”与题干的“区别对待”正面对立，因此判 NO。",
          "analysis": "第 1 段交代写作背景与目的。段落前半说：“In a recent meeting with health professionals from many disciplines, the concept of the humanities and how they enrich the lives and practice of physicians was discussed. There were nurses, chiropractors, speech therapists, health administrators and professionals from a dozen other fields.”（最近一次有许多学科的健康专业人员参加的会议上，讨论了人文学科的概念及其如何丰富医生的生活与实践；与会者包括护士、脊椎按摩师、言语治疗师、卫生管理人员以及另外十几个领域的专业人员）。随后是本段的核心句：“Everyone commented on the need to achieve a balance between the humanities and the skills and technological expertise of their specific discipline, beginning with the experience in medical school and then life in their chosen specialisation, to create fully realised professionals.”（每个人都谈到需要在人文学科与本专业的技术技能之间取得平衡，从医学院的学习一直到所选专业方向的职业生涯，以培养全面发展的人才）。段末又明确点题：“The purpose of my discussion here is to advocate a balanced approach to the education of all health professionals.”（我这里讨论的目的是倡导对所有健康专业人员都采取平衡的教育方式）。题干把原文的“所有专业普遍需要平衡”改写成“对某些专业更重要（more important for some … than others）”，属于把“一致”变成“有差别”的反向改写。原文用的是 Everyone（每个人）、all health professionals（所有健康专业人员）这类全体性表述，并列举了十几个领域，恰恰说明作者认为人文教育不是某几个专业的专利；作者主张各专业都应达到平衡，而非按学科划分重要性等级，故判 NO。",
          "traps": [
            "为什么不是 YES：原文的落脚点是“Everyone commented on the need to achieve a balance”（每个人都谈到需要取得平衡）以及“a balanced approach to the education of all health professionals”（对所有健康专业人员采取平衡的教育方式），强调的是普遍适用与一视同仁，没有任何句子说人文教育对某些专业更重要；题干的比较级设定与原文的统一主张相反，故选 NO。",
            "为什么不是 NOT GIVEN：原文并非避而不谈，而是明确给出了态度——用 Everyone 与 all 这样的全体性限定词表达“各专业都需要”，这已经构成与题干“有轻重之分”相冲突的明确表态，因此属于信息明确且相反，而不是信息缺失。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Most people value medical expertise over sensitivity in their medical professionals.",
          "translation": "大多数人更看重医疗专业人员的专业技术，而非他们的体贴敏感。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "I believe that most people wish to see in their medical professional a person who not only brings excellent skills, techniques and treatments, but also personal qualities that show they are fully developed individuals."
          },
          "synonyms": [
            "“Most people” 在原文中同义复现为 “most people wish to see”",
            "“medical expertise” 同义替换为原文的 “excellent skills, techniques and treatments”",
            "“sensitivity” 同义替换为原文的 “personal qualities that show they are fully developed individuals” 以及下一句的 “sensitive, communicative, and understanding of the human condition”",
            "“value … over …”（更看重前者）与原文的 “not only … but also …”（两者兼备，后者同等重要）相互冲突"
          ],
          "locatingTip": "定位：题干有两个抓手——Most people（人群范围）与 medical expertise / sensitivity（专业能力与人文敏感性的对比）。第 2 段首句同时出现 most people 与 skills, techniques and treatments，是唯一落点。确定答案技巧：判断含“优先比较”的判断题，关键看原文用的是什么样的并列结构。原文用 not only … but also … 表示“不仅……而且……”，即两种品质都要求具备、后项还带有追加强调的意味；题干却把并列改成了 value A over B（更看重 A 而非 B）的取舍关系。并列与取舍方向相反，所以判 NO。做题时若看到 not only … but also、as well as、both … and 这类并列结构，就应预判“两者都重要”，一旦题干出现 more than、rather than、prefer A to B 之类，通常即为 NO。",
          "analysis": "第 2 段首句即定位句：“I believe that most people wish to see in their medical professional a person who not only brings excellent skills, techniques and treatments, but also personal qualities that show they are fully developed individuals.”（我认为大多数人都希望在他们的医疗服务者身上看到这样一个人：他不仅带来出色的技术、手法和治疗方案，也具备表明其人格完整发展的个人品质）。紧接两句进一步展开“个人品质”的内涵：“Such individuals are sensitive, communicative, and understanding of the human condition. They acknowledge the vast array of backgrounds, views, fears and hopes each person brings to the clinical encounter.”（这样的人敏感、善于沟通、理解人类的处境，能体认每个人带入就诊情境中的各种背景、观点、恐惧与希望）。可见作者的观点是：公众期望医生“既有精湛技术，又有人文品质”，二者的关系是并列且都不可缺。题干却写成“Most people value medical expertise over sensitivity”（大多数人更看重专业技术而非体贴），把并列关系改成了取舍关系，把“不仅……而且……”的加法变成了“重此轻彼”的减法，与原文意思相反，因此答案是 NO。作答提示：本题的陷阱在于“原文确实提到了 most people 与 medical expertise”，容易让考生看到词汇重合就选 YES，但真正的判分点在 not only … but also 所体现的两者并重，务必读完整句。",
          "traps": [
            "为什么不是 YES：原文说的是大多数人对医生的期待是“not only brings excellent skills … but also personal qualities”，即技术与人品两项同时要求，没有任何地方说大多数人更看重技术。题干把并列变成取舍，方向与原文相反。",
            "为什么不是 NOT GIVEN：原文明确交代了“most people wish to see … not only … but also …”，作者对公众取向已给出清晰陈述，不属于无法判断作者态度的情况；正因为原文有明确陈述且与题干相反，才判 NO 而非 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Most medical programmes devote little course time to developing interpersonal skills.",
          "translation": "大多数医学课程几乎不花课时来培养人际交往技能。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "It is evident, however, that most educational programmes emphasise knowledge, clinical skill and competence, and although educators wish the person to be humanistic, empathetic and communicative, they take this aspect for granted, as if valuable educational time does not need to be allocated to this 'soft' feature of the profession."
          },
          "synonyms": [
            "“Most medical programmes” 同义替换为原文的 “most educational programmes”",
            "“devote little course time to” 同义替换为原文的 “valuable educational time does not need to be allocated to”，即认为不必为此分配宝贵的教学时间",
            "“developing interpersonal skills” 同义替换为原文的 “this aspect”（指 humanistic, empathetic and communicative 这些品质）以及同段的 “this 'soft' feature of the profession”"
          ],
          "locatingTip": "定位：题干的两个关键词是 most medical programmes（课程整体）和 course time（课时分配）。第 4 段用 most educational programmes 加 valuable educational time 两个词组同时命中，是本题的定位段。确定答案技巧：判断的关键在于原文有没有“课时投入少”的明确表态。原文先说大多数课程把重心放在知识、临床技能与能力上，随后用 as if 引出一个说明性的假设——仿佛宝贵的教学时间不需要分配给这一“软性”方面；作者紧接着补充说它“harder to define and measure”，说明这一方面容易被忽视。课时不被分配，等于投入极少，与题干 devote little course time 同义，故判 YES。注意 as if 引出的虽是作者不认同的假设，但作者正是借此描述现实中普遍存在的做法，语义指向与题干一致。",
          "analysis": "第 4 段讨论医学教育中“艺术”与“科学”两面的失衡。定位句说：“It is evident, however, that most educational programmes emphasise knowledge, clinical skill and competence, and although educators wish the person to be humanistic, empathetic and communicative, they take this aspect for granted, as if valuable educational time does not need to be allocated to this 'soft' feature of the profession.”（然而显而易见的是，大多数教育项目强调知识、临床技能与专业能力；尽管教育者希望培养出富有人文精神、有同理心、善于沟通的人，他们却把这一方面视为理所当然，仿佛宝贵的教学时间不必分配给这一职业中的“软性”内容）。随后两句解释了原因：“It is compounded by the recognition that this aspect is harder to define and measure than knowledge and competence.”（更麻烦的是人们认识到这一方面比知识与能力更难界定和衡量）。原文明确定性：课程重心在知识与技能，人文与沟通方面被当作理所当然、不额外分配时间，这与题干所说“几乎不投入课时培养人际交往技能”完全同向，因此答案为 YES。本题的词汇对应非常直接：most educational programmes 等于 most medical programmes，valuable educational time does not need to be allocated 等于 devote little course time，humanistic, empathetic and communicative 及 this 'soft' feature 等于 interpersonal skills。做题时务必把引号里的 soft feature 理解为“人际与人文方面的能力”，而不是字面上的“软性特征”，否则容易看不懂它是人际技能的同义表达。",
          "traps": [
            "为什么不是 NO：原文把“不分配课时”说得很直接——“as if valuable educational time does not need to be allocated to this 'soft' feature”，并进一步指出这一面比知识能力更难界定衡量，说明现实中普遍受轻视。这与题干“几乎不花课时”一致，不存在矛盾，故不能选 NO。",
            "为什么不是 NOT GIVEN：原文不仅说明了大多数课程强调知识技能，还给出了“不必为此分配宝贵教学时间”的判断与“更难界定和衡量”的补充理由，属于对课时投入问题的明确表态，信息充分且与题干一致，因此是 YES 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "It is more difficult to design a humanities course for health professionals than a medical one.",
          "translation": "为健康专业人员设计一门人文学科课程比设计一门医学课程更难。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "We may want the health professional to understand many elements of the human condition so they can understand, assess and manage the suffering of patients, but it is harder to design and teach such a course than one on anatomy, for example."
          },
          "synonyms": [
            "“to design a humanities course” 同义替换为原文的 “to design and teach such a course”，其中 such a course 回指上文关于 human condition 的课程，即人文学科课程",
            "“a medical one” 同义替换为原文的 “one on anatomy”（一门解剖学课程），解剖学是医学课程的代表",
            "“It is more difficult” 同义替换为原文的 “it is harder”，比较关系在原文与题干中完全一致"
          ],
          "locatingTip": "定位：题干的两大要素是 design a humanities course（设计人文课程）与 than a medical one（与医学课程对比）。第 4 段中后部出现 “it is harder to design and teach such a course than one on anatomy, for example”，其中 harder、design、than one on anatomy 三个词分别对应难度、动作与比较对象，一步锁定。确定答案技巧：这类比较题要看清被比较的两端。原文用 such a course 回指本段前文“让健康专业人员理解人类处境”的那类课程（即人文学科课程），用 one on anatomy 指代医学科目，中间用 harder … than 明确比较；题干把 anatomy 概括为 a medical one，概括合理、方向一致，故判 YES。注意别把 such 误解为指代别的东西，回读上文的 human condition、suffering of patients 即可确认它说的是人文类课程。",
          "analysis": "第 4 段在论述人文教育被忽视时，用一句话说明了教学层面的现实困难：“We may want the health professional to understand many elements of the human condition so they can understand, assess and manage the suffering of patients, but it is harder to design and teach such a course than one on anatomy, for example.”（我们也许希望健康专业人员理解人类处境的诸多要素，从而能够理解、评估并应对患者的痛苦，但设计并讲授这样一门课程，比讲授一门例如解剖学课程要困难）。句中 such a course 承接前面的 the human condition 与 suffering of patients，显然指人文学科性质的课程；one on anatomy 则是医学基础课程的具体代表。原文用 harder … than 的明确比较结构，说明人文课程在设计与教学上都比医学课程更难，与题干“设计人文学科课程比医学课程更难”方向完全一致，因此答案是 YES。题干把原文的具体例证 one on anatomy 概括成 a medical one，属于合理的上义概括；同时题干只保留了 design（设计）一项，原文是 design and teach（设计与讲授），删减信息不影响判断方向。作答提醒：本题与第 29 题同在段 4，顺序上紧接，但两题的落点不同——第 29 题看的是“不分配课时”，第 30 题看的是“更难设计”，必须各自回到原文对应句，不要混用。",
          "traps": [
            "为什么不是 NO：原文用的是 “it is harder to design and teach such a course than one on anatomy”，harder 与题干 more difficult 同义，被比较的正是人文类课程与医学类课程，方向完全一致，没有矛盾点可供判 NO。",
            "为什么不是 NOT GIVEN：原文不只说难，还给出了比较对象（one on anatomy）与原因背景（人类处境难以衡量、更难界定），对“人文课程比医学课程更难设计”这一判断有正面明确的表述，不属于原文未提及的态度，因此不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "It would be best if a medical programme included a course about the lives of medical professionals.",
          "translation": "如果医学课程中包含一门关于医疗专业人员自身生活的课程，那将是最好的。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Literature can teach us about human hopes and aspirations, suffering and loss, relationships, and life and death."
          },
          "synonyms": [
            "“a course about the lives of medical professionals” 在原文中找不到对应：原文提到的是文学可教授 “human hopes and aspirations, suffering and loss, relationships, and life and death”（人类普遍的希望与抱负、苦难与丧失、人际关系、生与死）",
            "“It would be best if … included” 这一关于“是否应当把某课程纳入课程体系、且为最优选择”的评判在原文中没有任何对应表达，原文只列举人文领域的内容与作用"
          ],
          "locatingTip": "定位：题干的核心名词是 the lives of medical professionals（医疗专业人员的生活），其中 lives 一词最接近原文第 5 段的 life and death 与 life，可用 literature 加 life 在第 5 段的举例句中定位。确定答案技巧：定位之后要仔细区分“谁的生活”。原文说的是文学能让我们了解 human hopes and aspirations（人类的希望与抱负）、suffering and loss（苦难与丧失）、relationships（人际关系）、life and death（生与死），主体是泛指的 human，指的是人类共同经验，而不是“医生等医疗专业人员这一特定群体的生活”，更没有说要为此专设一门课程、而且是最佳安排。题干多出的两层信息（特定人群的“生活课程”、should be best 的价值判断）原文均未涉及，属于信息缺失，故判 NOT GIVEN。切忌因为原文有 life 一词就主观对应。",
          "analysis": "第 5 段说明人文学科涵盖的领域及其作用。原文说：“Distinguished by their focus on human values, the humanities cover many areas, including history, ethics, literature, theology, art, music, law and the social sciences as they apply to the profession.”（人文学科以关注人类价值为特征，涵盖许多领域，包括历史、伦理、文学、神学、艺术、音乐、法律以及适用于该职业的社会科学），随后举例说明：“For example, a history of the profession gives us an understanding of how we have come to be where we are, and how things change and progress. Literature can teach us about human hopes and aspirations, suffering and loss, relationships, and life and death.”（例如，本职业的历史让我们理解我们如何走到今天、事物如何变化与进步；文学则能教我们认识人类的希望与抱负、苦难与丧失、人际关系以及生与死）。仔细比对可知，原文确实提到 a history of the profession（本职业的历史），但那是指“职业（学科）发展历程”，且原文只说它能让人理解变化的进程，并未提出“应把它设为课程”。至于题干所说的“关于医疗专业人员的生活（the lives of medical professionals）”的课程，原文的 life and death 指的是人类普遍的生与死，主体是 human，不是医疗人员自身的生活。此外，题干还带有一个价值判断 It would be best（如果纳入课程那将是最好的），原文对课程设置的建议只停留在第 4 段“把人文教育纳入课程体系（a direct part of the programme）”，并未评判哪一门课程最优。信息点两层缺失，所以判 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文既没有出现“关于医疗专业人员生活的课程”这一具体提议，也没有“这样安排最好（it would be best）”的评判；它只以泛指的 human 为对象列举文学能教导的内容，无法支持题干的说法。",
            "为什么不是 NO：原文并未反对设置任何人文学科课程，恰恰相反，作者在第 4 段支持把人文教育变成课程的直接组成部分；因此对“设置这样一门课程是否最好”存在反对或矛盾信息并不成立，只能是 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–35 单选题（A / B / C / D）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 35
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "What unforeseen result did the Flexner report have?",
          "translation": "弗莱克斯纳报告（Flexner report）带来了什么意料之外的结果？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "This resulted in a pendulum swing in emphasis, directing the curriculum to the medical sciences, to the exclusion of the humanities, an imbalance never intended by Flexner."
          },
          "synonyms": [
            "“unforeseen result” 同义替换为原文的 “an imbalance never intended by Flexner”，never intended 即“并非本意、出乎预料”",
            "“moved the focus … away from the humanities” 同义替换为原文的 “directing the curriculum to the medical sciences, to the exclusion of the humanities”，exclusion 即“把人文排除在外”",
            "“the Flexner report” 与原文的 “The Flexner Report in 1910” 指同一报告，其后果由 “This resulted in …” 引出"
          ],
          "locatingTip": "定位：专有名词 Flexner Report 在全文只出现于第 6 段，大写名词是最好的定位词，扫读时直接跳到第 6 段的后半部分。确定答案技巧：题干问的是“意料之外的结果（unforeseen result）”，而原文末句用 an imbalance never intended by Flexner（Flexner 从未预料到的失衡）点明“意想不到”这一层，同时用 directing the curriculum to the medical sciences, to the exclusion of the humanities 说明结果是把课程重心推向医学科学、把人文排除在外。选项 D 的 moved … away from the humanities 与 to the exclusion of the humanities 精准对应，故选 D。",
          "analysis": "第 6 段回顾医学教育的历史起伏。定位句之前的铺垫是：“The Flexner Report in 1910 recognised the variable quality of medical education and the need to have better teaching in the medical sciences and laboratory methods.”（1910 年的弗莱克斯纳报告认识到了医学教育质量的参差不齐，以及改进医学科学与实验方法教学的必要性）。接着是判断落点的定位句：“This resulted in a pendulum swing in emphasis, directing the curriculum to the medical sciences, to the exclusion of the humanities, an imbalance never intended by Flexner.”（这导致重心的钟摆式摆动，把课程导向医学科学，把人文学科排除在外，形成了一种 Flexner 从未意图造成的失衡）。原文的因果链条非常清晰：报告提出改进医学科学教学（本意）导致课程重心向科学倾斜、人文被排除（结果），而 an imbalance never intended（从未本意的失衡）正对应题干的 unforeseen result。选项 D“它使医学研究的重心偏离了人文学科”与 to the exclusion of the humanities 完全一致，因此是正确答案。",
          "traps": [
            "A 错在无中生有：原文只说报告 “recognised the variable quality of medical education”（认识到医学教育质量参差不齐），这是当时的现状，并没有说报告造成公众对医学教育质量产生不信任，且 public distrust 全文未提。",
            "B 错在无中生有：原文完全未提及医学院申请人数（medical-school applicants）的变化，该信息在文中不存在，属于典型的无关选项。",
            "C 错在偷换概念：原文说报告主张 “the need to have better teaching in the medical sciences and laboratory methods”（需要更好的实验方法教学），这是报告提出的建议，而不是报告引发了关于实验方法的激烈争论（a fierce debate），原文没有任何关于争议的表述。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "The writer lists humanities activities at Dalhousie Medical School to show how these activities",
          "translation": "作者列举达尔豪西医学院（Dalhousie Medical School）的人文学科活动，是为了说明这些活动",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The list of activities is much longer, but it should be pointed out that these provide some balance and broaden the life and learning of the student."
          },
          "synonyms": [
            "“to show how these activities” 同义替换为原文的 “it should be pointed out that these …”，即作者列举后的用意说明",
            "“widen students' educational experiences” 同义替换为原文的 “broaden the life and learning of the student”，broaden 即 widen，life and learning 即 educational experiences",
            "“Dalhousie Medical School” 与原文 “Currently at Dalhousie Medical School we have elective programmes in the humanities …” 同一指称"
          ],
          "locatingTip": "定位：专有名词 Dalhousie Medical School 在第 7 段首句出现，且“列举活动”的动作只可能在这一段完成（elective programmes、artist-in-residence、choir、concert band、string ensemble 等一连串项目）。确定答案技巧：问“作者列举的目的是什么”，答案通常出现在罗列清单之后的一句评论里。原文列举完毕立刻用 but it should be pointed out that …（但应当指出……）标明作者的用意：these provide some balance and broaden the life and learning of the student。broaden 与选项 B 的 widen 同义，life and learning 与 educational experiences 对应，故选 B。",
          "analysis": "第 7 段是全文唯一集中列举活动的段落：“Currently at Dalhousie Medical School we have elective programmes in the humanities, summer research studentships, lecture series, presentations and discussions. There is an artist-in-residence programme that brings artists to the school. There is a large choir of over a hundred students and faculty, a concert band, a string ensemble, and groups of student artists who put on regular performances and exhibitions.”（目前在达尔豪西医学院，我们有人文学科选修课程、暑期科研学生岗位、系列讲座、报告与讨论；有一个驻校艺术家项目把艺术家请进学校；还有一个由一百多名师生组成的大型合唱团、一支管乐团、一个弦乐合奏团，以及定期演出和展览的学生艺术家团体）。随后作者点题：“The list of activities is much longer, but it should be pointed out that these provide some balance and broaden the life and learning of the student.”（这样的活动名单还有很长，但应当指出，它们提供了一定的平衡，并拓宽了学生的生活与学习）。这句 it should be pointed out that … 就是作者列举的用意所在，即这些活动能扩展学生的教育体验，与选项 B 的 widen students' educational experiences 完全对应，因此 B 正确。",
          "traps": [
            "A 错在过度拔高：原文只说活动 “provide some balance and broaden the life and learning”，用了 some balance 这样的缓和措辞，并未说这些活动成为“校园里最受欢迎的活动（the most popular events on campus）”，最高级与原文程度不符。",
            "C 错在无中生有：原文通篇没有把这些人文活动与医学课程作质量高低比较（as high a quality as medical ones），只强调它们在数量与形式上的丰富，属于原文未涉及的评价。",
            "D 错在张冠李戴：原文提到 “a large choir of over a hundred students and faculty”（一百多名师生组成的合唱团），只能说明师生共同参与，并未指出活动“已获得教职员工的认可（gained acceptance with teaching staff）”；关于教师态度的转变与认可，原文是在第 8 段谈 mind-set 转变时以学生为主角展开的，与本题问的“列举这些活动的用意”不对应。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "How do students at Dalhousie Medical School react to humanities activities?",
          "translation": "达尔豪西医学院的学生对人文学科活动有何反应？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "They also comment that the humanities has made medical school a more enjoyable and fulfilling experience."
          },
          "synonyms": [
            "“students … react” 同义替换为原文的 “They also comment that …”，comment 即学生表达的反应与评价",
            "“more engaging” 同义替换为原文的 “more enjoyable”（更令人愉快、更有意思）",
            "“more satisfying” 同义替换为原文的 “more fulfilling”（更有成就感、更充实）"
          ],
          "locatingTip": "定位：题干问的是学生的反应，动作主体是 students。第 8 段通篇以学生为主角（We emphasise that we want students and faculty … / Students see that their learning and their lives can be more balanced），其中直接引述学生反应的是 “They also comment that …” 一句，代词 They 回指前句的 students，可一步锁定。确定答案技巧：题干的关键词是 react 与感受类形容词，原文对应的是 comment（学生表达看法）加 enjoyable、fulfilling（愉快、充实），对应选项 B 的 engaging 与 satisfying，故选 B。做这类“人物反应”题，要特别注意代词指代——They 承前指学生，不能误当作教师或作者。",
          "analysis": "第 8 段讲人文活动带来的心态转变。原文先说：“Perhaps more important than the activities themselves is the change in mind-set that occurs when students see that diversity in their studies and activities is legitimised and encouraged.”（也许比活动本身更重要的是学生心态的变化——当他们看到学习与活动中的多样性被认可和鼓励时）。接着说：“We emphasise that we want students and faculty to continue to express interests and talents they had before entering medical school. They now come forward with ideas and activities that are more imaginative and exciting than we could have designed.”（我们强调希望学生和教师继续表达他们在进入医学院之前就有的兴趣与才能；如今他们提出的想法和活动比我们能设计的更具想象力、更令人兴奋）。随后是直接的引述型描述：“They also comment that the humanities has made medical school a more enjoyable and fulfilling experience.”（他们还表示，人文学科让医学院成为一段更愉快、更充实的经历）。句中的 They 承接上文，指学生，comment 即“表达感受”，正是题干所问的 react；enjoyable 对应选项 B 的 engaging（有意思、吸引人），fulfilling 对应 satisfying（令人满足），因此 B 正确。",
          "traps": [
            "A 错在与原文相反：原文说心态的变化本身是 “Perhaps more important than the activities themselves”，学生看到多样性被 legitimised and encouraged（被认可和鼓励）后积极投入，并非难以摆脱“科学知识更正当”的旧心态。",
            "C 错在无中生有并偷换对象：原文只说学生提出 “ideas and activities that are more imaginative and exciting”（更有想象力的想法与活动），指的是人文活动层面的创意，并未说他们把创意迁移到科学研究与实验学习中，scientific and laboratory studies 的转移是原文没有的信息。",
            "D 错在与原文相反：原文明确说 “we want students and faculty to continue to express interests and talents they had before entering medical school”，学生也确实做到了 “They now come forward with ideas and activities …”，说明他们在延续并表达入学前的才能，而非难以衔接。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "What is the writer's main conclusion?",
          "translation": "作者的主要结论是什么？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "My firm belief is that all the healing professions should increase the balance of humanities with the traditional educational emphasis on skills and knowledge, and this will benefit both the healers and those who need to be healed."
          },
          "synonyms": [
            "“Greater emphasis on humanities in medical schools” 同义替换为原文的 “increase the balance of humanities with the traditional educational emphasis on skills and knowledge”",
            "“both patients and practitioners” 同义替换为原文的 “both the healers and those who need to be healed”，the healers 即 practitioners，those who need to be healed 即 patients",
            "“main conclusion” 对应原文的 “My firm belief is that …”，是作者在篇末给出的最终主张"
          ],
          "locatingTip": "定位：问“主要结论”就直奔末段（第 9 段），找作者表明立场的句子。末段先提出设问 Will involvement in the humanities make one a better health professional?，随后用 My firm belief is that … 这一表态句式给出结论。确定答案技巧：结论句的落点是 should increase the balance of humanities with the traditional educational emphasis on skills and knowledge（应提高人文与技能知识教育之间的平衡），并说明 the benefit 双方面——both the healers and those who need to be healed。选项 A 把 the healers 换成 practitioners、those who need to be healed 换成 patients，与结论句完全对应，故选 A。",
          "analysis": "末段是全文的收束与表态。原文先设问：“Will involvement in the humanities make one a better health professional? It's a question often asked of today's medical professionals but very difficult to document in this evidence-based era of medicine. But as ethics scholars have said of learning ethics, it cannot guarantee that a person will be more ethical, but it is more likely than not.”（参与人文学科会让人成为更好的健康专业人员吗？这是当今医疗专业人员常被问到的问题，但在循证医学时代很难加以证明；不过正如伦理学者谈到伦理学习时所说，它不能保证一个人会更有道德，但很可能如此）。随后是明确的结论：“My firm belief is that all the healing professions should increase the balance of humanities with the traditional educational emphasis on skills and knowledge, and this will benefit both the healers and those who need to be healed.”（我坚信，所有治病救人的职业都应提高人文学科与传统技能知识教育之间的平衡，这将使医者与需要被医治的人双双受益）。这句 firm belief 是作者全篇论证的最终落点，内容为“加强人文教育”与“双向受益”。选项 A“医学院更重视人文学科将使患者与从业者都受益”与之逐项对应（medical schools 对应 all the healing professions 的教育场景，practitioners 对应 the healers，patients 对应 those who need to be healed），因此是正确答案。",
          "traps": [
            "B 错在不是作者的结论性主张：原文确实在第 3、4 段指出培训 “often less attentive to the broad education”、大多数课程偏重知识与技能，但那是对现状的批评性描述，属于论证过程的一部分，作者在结论处给出的是建设性主张（应提高平衡并双方受益），而非停留在“准备不足”这一负面判断上。",
            "C 错在夸大困难并偷换重点：原文只在第 4 段说 “it is harder to design and teach such a course”，是相对难度而非 overwhelmingly difficult（极其困难），且作者随后在第 7 段说明达尔豪西医学院已经开设了大量人文活动，说明并非不可能，结论句里也没有重复这一困难。",
            "D 错在误读历史态度：原文第 6 段说到 18、19 世纪医学教育曾重视人文学科，随后被向科学倾斜的钟摆所取代，并称这是 an imbalance never intended by Flexner（并非本意的失衡），可知作者并不主张回到 20 世纪初的模式；恰恰相反，报告所处的正是把人文学科排除在外的时期，与作者主张相反。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 36–40 句子结尾匹配（A–G）",
      "mode": "per_question",
      "questionRange": {
        "start": 36,
        "end": 40
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "Health professionals at a recent seminar discussed a need for educational institutions to",
          "translation": "参加最近一次研讨会的健康专业人员谈到，教育机构需要……",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Everyone commented on the need to achieve a balance between the humanities and the skills and technological expertise of their specific discipline"
          },
          "synonyms": [
            "“at a recent seminar” 同义替换为原文的 “In a recent meeting with health professionals from many disciplines”",
            "“discussed a need for educational institutions to” 同义替换为原文的 “commented on the need to achieve a balance between the humanities and the skills and technological expertise”",
            "“provide more equal coverage of both medical knowledge and skills, and humanities” 同义替换为原文的 “achieve a balance between the humanities and the skills and technological expertise”，equal coverage 即 balance"
          ],
          "locatingTip": "定位：题干中的 recent seminar 与 health professionals 对应原文第 1 段首句 “In a recent meeting with health professionals from many disciplines”，一问一答式的匹配题要抓的就是这类时间与人物复现。确定答案技巧：题干结尾是 a need for educational institutions to，需要找一个表示“教育机构应当做什么”的结尾。原文说 Everyone commented on the need to achieve a balance between the humanities and the skills and technological expertise，动作是“取得平衡”，平衡正是选项 G 的 more equal coverage of both … and …，两者语义等价。此外原文末句 “to advocate a balanced approach to the education of all health professionals” 也强化了“平衡”这一主题，故选 G。",
          "analysis": "第 1 段首句交代会议背景：“In a recent meeting with health professionals from many disciplines, the concept of the humanities and how they enrich the lives and practice of physicians was discussed.”（在最近一次有许多学科的健康专业人员参加的会议上，讨论了人文学科的概念以及它如何丰富医生的生活与实践）。随后：“There were nurses, chiropractors, speech therapists, health administrators and professionals from a dozen other fields.”（与会者包括护士、脊椎按摩师、言语治疗师、卫生管理人员以及另外十几个领域的专业人员）。定位句是：“Everyone commented on the need to achieve a balance between the humanities and the skills and technological expertise of their specific discipline, beginning with the experience in medical school and then life in their chosen specialisation, to create fully realised professionals.”（每个人都谈到需要在人文学科与本专业的技术技能之间取得平衡，从医学院的学习到所选专业方向的职业生涯，以培养全面发展的人才）。题干把原文的 recent meeting 改写为 recent seminar，把 commented on the need 改写为 discussed a need，把教育机构应做的事概括为“取得平衡”。选项 G 说 provide more equal coverage of both medical knowledge and skills, and humanities（对医学知识与技能、人文学科给予更均衡的覆盖），其中 equal coverage 就是平衡，both … and 的并列正是原文 the humanities and the skills and technological expertise 的对应，因此 G 正确。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "Most medical training programmes",
          "translation": "大多数医学培训课程……",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The training of health professionals has usually been exemplary in teaching them to recognise and treat a symptom or disease, but often less attentive to the broad education that would inform and educate them about the persons who come from various cultures, backgrounds and experiences."
          },
          "synonyms": [
            "“Most medical training programmes” 同义替换为原文的 “The training of health professionals”，most 与原文 usually（通常）对应",
            "“give less attention to broad education” 同义替换为原文的 “often less attentive to the broad education”",
            "“more to recognising and treating symptoms” 同义替换为原文的 “exemplary in teaching them to recognise and treat a symptom or disease”"
          ],
          "locatingTip": "定位：题干主语是 Most medical training programmes，原文第 3 段首句正是 “The training of health professionals has usually been exemplary …”，training 一词是极佳的定位词，全文只在第 3 段出现一次。确定答案技巧：需要找的是“大多数培训课程做了什么”的结尾，题干结构为主语加谓语，要求结尾与主语搭配成完整句。原文用 been exemplary in teaching them to recognise and treat a symptom or disease（在教他们识别和治疗症状或疾病方面堪称典范）与 often less attentive to the broad education（却常对通识教育不够用心）构成对比，一多一少的分工与选项 F 的 give less attention to broad education and more to recognising and treating symptoms 完全吻合，故选 F。",
          "analysis": "第 3 段的定位句：“The training of health professionals has usually been exemplary in teaching them to recognise and treat a symptom or disease, but often less attentive to the broad education that would inform and educate them about the persons who come from various cultures, backgrounds and experiences.”（健康专业人员的培训在教会他们识别和治疗症状或疾病方面通常堪称典范，但往往对那种能让他们了解来自不同文化、背景和经历的人的通识教育不够重视）。句中的结构是“在某方面出色（exemplary in … recognise and treat a symptom or disease）但对另一方面不够用心（less attentive to the broad education）”。紧随其后的一句补充说明通识教育的来源：“Such understanding does not come from the course textbooks but from literature, history, poetry, art and other aspects of the humanities.”（这种理解并非来自教科书，而是来自文学、历史、诗歌、艺术等人文学科的各个方面）。题干主语 Most medical training programmes 对应原文 The training of health professionals，要求补出谓语部分，选项 F“对通识教育关注较少，而更多关注识别与治疗症状”，正好把原文的“典范之处”与“不够用心之处”对调语序后完整复现，语义完全一致，因此 F 正确。注意选项 E“依赖教科书教授人文学科（rely on course textbooks to teach humanities）”与此句相关但意思相反——原文明确说这种理解 does not come from the course textbooks，故 E 为干扰项。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "The interpersonal and behavioural aspects of medical practice",
          "translation": "医疗实践中的人际与行为层面……",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "It is compounded by the recognition that this aspect is harder to define and measure than knowledge and competence."
          },
          "synonyms": [
            "“The interpersonal and behavioural aspects” 同义替换为原文的 “this aspect”，其前文所指即 “humanistic, empathetic and communicative” 与 “this 'soft' feature of the profession”",
            "“are difficult to describe with any precision” 同义替换为原文的 “is harder to define and measure”，define 即 describe，with any precision 即难以精确衡量"
          ],
          "locatingTip": "定位：题干的名词短语 the interpersonal and behavioural aspects 是抽象概括，对应原文第 4 段的 this aspect 与 this 'soft' feature of the profession。第 4 段中 humanistic, empathetic and communicative 三个形容词正是“人际与行为层面”的具体化，可据此锁定本段。确定答案技巧：题干是抽象主语，需要找到描述它性质的谓语。原文用 this aspect is harder to define and measure（这一方面更难界定和衡量）给出定性，其中 define 对应选项 B 的 describe，measure 与 with any precision 呼应，因此选 B。注意 B 项说的是“难以精确描述”，对应原文 harder to define，而不是“无法描述”，程度相符。",
          "analysis": "第 4 段的论述脉络是：医学教育的一面被忽视。原文说：“It is evident, however, that most educational programmes emphasise knowledge, clinical skill and competence, and although educators wish the person to be humanistic, empathetic and communicative, they take this aspect for granted, as if valuable educational time does not need to be allocated to this 'soft' feature of the profession.”（然而显而易见的是，大多数教育项目强调知识、临床技能与专业能力；尽管教育者希望培养出富有人文精神、有同理心、善于沟通的人，他们却把这一方面视为理所当然，仿佛宝贵的教学时间不必分配给这一职业中的“软性”内容）。紧接着是定位句：“It is compounded by the recognition that this aspect is harder to define and measure than knowledge and competence.”（使情况更复杂的是，人们认识到这一方面比知识与能力更难界定和衡量）。句中的 this aspect 与前文的 this 'soft' feature of the profession 同指，即题干所说的“医疗实践中的人际与行为层面”（对应 humanistic, empathetic and communicative）。原文对其性质的判断是 harder to define and measure（更难界定与衡量），与选项 B“are difficult to describe with any precision（难以精确描述）”同义，故 B 正确。本题的解题关键在于正确回溯 this aspect 的指代对象。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "Dalhousie Medical School students and faculty",
          "translation": "达尔豪西医学院的师生……",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "They now come forward with ideas and activities that are more imaginative and exciting than we could have designed."
          },
          "synonyms": [
            "“Dalhousie Medical School students and faculty” 对应原文第 7 段的 “a large choir of over a hundred students and faculty” 与第 8 段的 “students and faculty”，They 回指学生与教师",
            "“generate innovative and creative suggestions for activities and programmes” 同义替换为原文的 “come forward with ideas and activities that are more imaginative and exciting than we could have designed”，imaginative 即 innovative and creative，ideas 即 suggestions"
          ],
          "locatingTip": "定位：专有名词 Dalhousie Medical School 在第 7 段首句出现，第 8 段继续以 students and faculty 为主题。题干主语是“师生”，要找的谓语必须能与“学生和教师”搭配。第 8 段 “They now come forward with ideas and activities that are more imaginative and exciting than we could have designed” 中的 They 回指同段前句的 students and faculty，是本题落点。确定答案技巧：come forward with ideas 意为“主动提出想法”，与选项 A 的 generate innovative and creative suggestions 对应，而 more imaginative and exciting 也与 innovative and creative 同义，故选 A。凡遇代词主语，务必先确定它回指谁。",
          "analysis": "第 8 段讨论人文氛围带来的变化：“We emphasise that we want students and faculty to continue to express interests and talents they had before entering medical school. They now come forward with ideas and activities that are more imaginative and exciting than we could have designed.”（我们强调希望学生和教师继续表达他们进入医学院之前就有的兴趣与才能；如今他们主动提出的想法和活动，比我们自己能设计的更富想象力、更令人兴奋）。句中的 They 承接前句的 students and faculty，即题干所说的“达尔豪西医学院的师生”；come forward with ideas and activities 对应选项 A 的 generate … suggestions for activities and programmes，more imaginative and exciting 对应 innovative and creative。第 7 段已列举了师生共同参与的具体活动（如一百多名师生组成的合唱团、管乐团、弦乐合奏团以及学生艺术家团体的定期演出与展览），正好印证“师生自己提出并开展活动”这一事实，故选 A。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "Modern evidence-based practitioners",
          "translation": "现代循证医学从业者……",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "It's a question often asked of today's medical professionals but very difficult to document in this evidence-based era of medicine."
          },
          "synonyms": [
            "“Modern evidence-based practitioners” 同义替换为原文的 “today's medical professionals” 加 “this evidence-based era of medicine”",
            "“find it difficult to prove statistically” 同义替换为原文的 “very difficult to document”，document 即用证据记录、证明",
            "“the benefits of humanities programmes” 对应原文上文的设问 “Will involvement in the humanities make one a better health professional?”，即人文学科带来的益处"
          ],
          "locatingTip": "定位：题干由两个提示词构成——practice 相关的 professionals 与 evidence-based。全文只有末段（第 9 段）出现 evidence-based era of medicine，且同句就有 today's medical professionals，两个词同句出现，一步锁定。确定答案技巧：题干要求补出“现代循证从业者”怎么样，原文对应部分说 the question（人文学科能否使人成为更好的健康专业人员）is very difficult to document，即很难拿出证据来证明。选项 C“find it difficult to prove statistically the benefits of humanities programmes”把 document 换成 prove statistically，benefits of humanities programmes 对应上文的设问内容，语义一致，故选 C。",
          "analysis": "末段原文：“Will involvement in the humanities make one a better health professional? It's a question often asked of today's medical professionals but very difficult to document in this evidence-based era of medicine.”（参与人文学科会让人成为更好的健康专业人员吗？这是当今医疗专业人员常被问到的一个问题，但在循证医学时代很难得到证实）。题干中的 Modern evidence-based practitioners 正是原文 today's medical professionals 与 this evidence-based era of medicine 的合并改写；被问到的那个问题就是“人文学科是否带来好处”，而原文对其态度是 very difficult to document（很难记录、证实）。选项 C“find it difficult to prove statistically the benefits of humanities programmes”把 document 替换为 prove statistically，把 the question 所指的“人文课程的益处”补足为主语内容，二者完全对应，故 C 正确。注意 D 项 “suggest that humanities studies create stronger practitioners” 看似与后文 “it is more likely than not” 有关，但那一句是伦理学者对伦理学习的类比，并不是循证从业者的做法，故 D 不选。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
