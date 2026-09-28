(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-medium-155", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-medium-155",
  "meta": {
    "examId": "p3-medium-155",
    "title": "Does class size matter 课堂规模",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 段落信息匹配（Which paragraph contains the following information? A–F，NB You may use any letter more than once）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "detailed criticism of the methodology of a project",
          "translation": "对某个项目研究方法的详细批评",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Eric Hanushek of Stanford, however, criticises some of STAR's key conclusions. He argues that STAR does not prove that gains persist long after students return to regular classes."
          },
          "synonyms": [
            "“detailed criticism” 对应原文的 “criticises some of STAR's key conclusions”，以及其后一连串逐条的质疑（does not prove / It was debatable / Nor does he accept / failed to ensure），构成“详细”的批评",
            "“the methodology of a project” 同义替换为原文的 “STAR failed to ensure good randomisation of teacher and student assignments”，randomisation（随机分组）是研究方法的核心环节",
            "“a project” 就是原文的 Project STAR（田纳西州的 Student Teacher Achievement Ratio 研究），后文简称 STAR"
          ],
          "locatingTip": "定位：题干关键词是 criticism（批评）与 methodology（研究方法）。全文针对某个项目的批评集中在 D 段后半部分，人名 Eric Hanushek 与 criticises 在同一句中出现，扫读时看到 however 这个转折信号词就应停下精读。确定答案技巧：段落信息匹配要按“谁对什么做了什么”锁定段落。D 段前半部分是 Finn 和 Achilles 的正面结论，从 “Eric Hanushek of Stanford, however, criticises some of STAR's key conclusions.” 起整段转为负面，接着逐条质疑：结论无法证明长期效果、后续进步可能来自家庭等其它因素、研究期间学生从常规班流向小班、教师与学生的分组随机化不严谨。这些全部是针对该项目的结论与研究方法提出的批评，与题干“对某个项目研究方法的详细批评”精确对应，故选 D（第 4 段）。",
          "analysis": "D 段（第 4 段）的论证结构是“先扬后抑”。开头两句是支持方：Jeremy Finn 和 Charles Achilles 认为小班带来 “an array of benefits of small classes”，并计算出小班学生在一年级就超过常规班同学、这一优势在回到大班后依然存在。从第四句起笔锋一转：“Eric Hanushek of Stanford, however, criticises some of STAR's key conclusions.”（斯坦福大学的 Eric Hanushek 则批评 STAR 的某些核心结论）。紧随其后的句子把批评具体化：He argues that STAR does not prove that gains persist long after students return to regular classes（他认为 STAR 无法证明学生回到常规班后成绩优势能长期保持）；It was debatable how much later improvement stemmed from other factors, such as a supportive home（后续进步究竟有多少来自家庭支持等其它因素值得商榷）；Nor does he accept that the benefits accumulate（他也不接受优势会逐年累积的说法）；Hanushek and others have also shown that during the study too many children moved from regular to small classes（研究中有过多学生从常规班转入小班，破坏样本可比性）；And Hanushek also asserts that STAR failed to ensure good randomisation of teacher and student assignments（STAR 未能保证师生分组的随机性）。题干中 criticism 对应 criticises 及其后五处质疑，methodology（研究方法）对应 randomisation、分组、样本流动这些研究设计层面的问题，a project 对应 Project STAR，三层信息全部落在 D 段，因此答案是 D。段末的 However, these points do not undermine STAR's basic findings 只是作者的收束，不改变 D 段作为“批评段”的性质。",
          "traps": [
            "为什么不是 B（第 2 段）：B 段讨论的是用美国教育部的既有数据（records at the U.S. Department of Education）能否判断小班的作用，结论是数据本身难以说明问题，属于作者对数据局限性的总体说明，没有针对某个具体项目的方法逐条批评。",
            "为什么不是 C（第 3 段）：C 段虽然有一句 “most of these studies were poorly designed”，但这是对以往研究的概括，全段主体是在正面介绍 Project STAR 的研究设计（如何随机分组、如何保证教学一致），重点在“介绍设计”而不是“批评”。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "a comparison of the data from class-size reduction projects",
          "translation": "对班级规模缩减项目所得数据所作的比较",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Analysts have studied the results of first-grade students in these schools and similar first-grade students elsewhere and found the results accord with those from STAR."
          },
          "synonyms": [
            "“a comparison of the data” 同义替换为原文的 “studied the results … and found the results accord with those from STAR”，把两处结果放在一起对照即比较",
            "“class-size reduction projects” 对应原文的 these schools（实施 SAGE 的学校）与 STAR（另一个班级规模研究项目），是两批不同的项目数据",
            "“accord with” 意为“与……一致、相符合”，说明 SAGE 与 STAR 两个项目的数据得出相同结论，正是题干所说的比较结果"
          ],
          "locatingTip": "定位：题干关键词是 comparison（比较）与 projects（复数），提示要找一段把两个项目的数据放在一起谈的内容。F 段（第 6 段）同时出现 SAGE 与 STAR 两个项目名，其中 “Analysts have studied the results of first-grade students in these schools and similar first-grade students elsewhere and found the results accord with those from STAR.” 一句话就完成了两组数据的比较。确定答案技巧：比较类题目的判分点在表示关系的词上，最典型的是 accord with、similar to、compared with、in line with、consistent with。原句用 accord with 把 SAGE 的结果与 STAR 的结果挂钩，等于把两个项目的数据作了比较，故选 F。",
          "analysis": "F 段（第 6 段）先介绍威斯康星州的 SAGE 项目：它是 “a five-year pilot study to do some of the groundwork for a major project”，只在 14 所学校缩减班级，特色是专门选择贫困生比例达 30% 的学校，并把幼儿园到三年级的平均师生比从 21–25:1 降到 12–15:1。接着是本题定位句：“Analysts have studied the results of first-grade students in these schools and similar first-grade students elsewhere and found the results accord with those from STAR.”（分析人员研究了这些学校一年级学生的成绩，并研究了别处情况相似的一年级学生，发现两者结果与 STAR 的结果一致）。句中 these schools 指实施 SAGE 的学校，similar first-grade students elsewhere 是作为对照的普通学生，those from STAR 则是另一个班级规模项目得出的数据；句子把 SAGE 的结果与 STAR 的结果并置并给出“一致（accord with）”的结论，正是题干所说的“比较两个班级规模缩减项目的数据”。同段随后还用 “compared with California's across-the-board approach” 把 SAGE 与加州的做法作了对比，属于对项目方式而非数据的比较，不构成干扰。因此答案是 F。",
          "traps": [
            "为什么不是 E（第 5 段）：E 段只报告加州项目自己的发现（Researchers found a statistically significant achievement advantage in reading, writing and mathematics），是单一项目的数据结果，没有与其它项目的数据作比较。",
            "为什么不是 D（第 4 段）：D 段内部虽有争论（Finn 与 Achilles 的结论对 Hanushek 的质疑），但那是同一项目内部的结论之争，不是两个项目之间的数据比较。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "the level of public interest in the issues of class-size reduction",
          "translation": "公众对班级规模缩减这一议题的关注程度",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "With its uncomplicated appeal, class-size reduction in the U.S. has lately gone from being a subject of primary academic interest to a policy juggernaut with over twenty states aiming at decreasing class sizes."
          },
          "synonyms": [
            "“the level of public interest” 同义替换为原文的 “a policy juggernaut with over twenty states aiming at decreasing class sizes”，关注度之高已经让它变成二十多个州竞相推行的政策浪潮",
            "“the issues of class-size reduction” 与原文的 “class-size reduction in the U.S.” 直接对应，指同一议题",
            "原文同段还用 “class-size reductions rarely elicit huge outcries” 与 “The testing of educators, by contrast, generally arouses the anger of unions.” 描述各方反应的强弱，也是“关注程度”的具体表现"
          ],
          "locatingTip": "定位：题干关键词是 public interest（公众关注度）与 class-size reduction。A 段（第 1 段）是全文首段，通篇在谈班级规模缩减为何受欢迎、各方反应多么强烈（引发抗议、激起工会愤怒、特殊学校争议），末句更用 policy juggernaut 点明其热度。确定答案技巧：interest 一词在原文不会原样复现，要转换成“反应强度、参与规模”的表达：elicit huge outcries（引发强烈抗议）、arouse the anger（激起愤怒）、a policy juggernaut（势不可挡的政策潮流）、over twenty states aiming at …（二十多个州都在推行）。这类词集中出现在 A 段，因此答案是 A。",
          "analysis": "A 段（第 1 段）的作用是为全文立题：说明班级规模缩减为何成为热门政策。首句指出 “Of all the ideas for improving education, few are as simple or attractive as reducing the number of pupils per teacher.”（在所有改进教育的设想中，几乎没有比减少每位教师的班级人数更简单、更吸引人的了）。第二、三、四句用对比说明它的政治优势：与测试教师、设立特许学校（charter schools）等其它改革不同，缩减班级规模 “rarely elicit huge outcries or involve structural change”，也不像测试教师那样 “generally arouses the anger of unions”。本题定位句是全段末句：“With its uncomplicated appeal, class-size reduction in the U.S. has lately gone from being a subject of primary academic interest to a policy juggernaut with over twenty states aiming at decreasing class sizes.”（凭借其简单明了吸引力，美国的班级规模缩减近来已从学术关注的主要课题变成一股政策洪流，二十多个州都想缩减班级人数）。题干 “the level of public interest in the issues of class-size reduction”（公众对该议题的关注程度）在原文中体现为两层：一是各方反应之强烈（eliciting outcries、arousing anger，说明公众与利益团体高度关注）；二是关注度转化为行动之广泛（policy juggernaut、over twenty states）。全段用词层层递进地描写“关注度有多高”，因此答案是 A（第 1 段）。",
          "traps": [
            "为什么不是 B（第 2 段）：B 段讨论的是“小班究竟有没有提高成绩”，引用美国教育部的数据与家庭背景等因素，属于学术层面的分析，不是公众关注度。",
            "为什么不是 F（第 6 段）：F 段介绍 SAGE 项目本身以及它给政策制定者的启示（Administrators need solid information），落点在研究者与管理者，没有描述公众反应。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "details of action taken to protect the validity of a project",
          "translation": "为保障某个项目结果有效性而采取的行动细节",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "To ensure that teaching quality did not differ, teachers were randomly assigned to small and regular-size classrooms. Few teachers received any special training for working with small classes, and there were no new curricular materials."
          },
          "synonyms": [
            "“action taken to protect the validity” 同义替换为原文的 “To ensure that teaching quality did not differ, teachers were randomly assigned”，用随机分派教师来排除师资差异对实验结果的干扰",
            "“details of action” 对应原文连续给出的具体做法：students … were randomly assigned to one of three kinds of classes、teachers were randomly assigned to small and regular-size classrooms、Few teachers received any special training、there were no new curricular materials",
            "“the validity of a project” 对应原文为保证公平可比而设计的一整套安排（randomly assigned、remained in whatever category），目的是让结论站得住脚"
          ],
          "locatingTip": "定位：题干关键词是 action taken（采取的措施）与 protect the validity（保证结果的可靠性）。C 段（第 3 段）在介绍 Project STAR 时连续给出操作性细节，并用不定式 “To ensure that teaching quality did not differ” 明确交代做这些事的目的。确定答案技巧：段落信息匹配要区分“做法”和“结论”。C 段是全文唯一逐条描写研究如何操作、如何排除干扰因素的段落（学生随机分入三类班级、教师随机分派、不提供额外培训与教材），而 D 段讲结果与争议、E 与 F 段讲项目效果与政策启示，都不含“为保证有效性而采取行动”的细节，故选 C（第 3 段）。",
          "analysis": "C 段（第 3 段）先承认过去 35 年的相关研究大多设计不佳（but most of these studies were poorly designed），随即推出唯一的例外——田纳西州的 Project STAR，并引哈佛大学 Frederick Mosteller 之语称其为 “one of the greatest experiments in education in United States history”。接下来是本段的核心：说明这个实验如何保证结果可信。学生一进入幼儿园就被 “randomly assigned to one of three kinds of classes: a small class of 13 to 17 students, a regular-size class of 22 to 26 or a regular-size class with both a teacher and a full-time teacher's aide”（随机分入三类班级之一：13 至 17 人的小班、22 至 26 人的常规班、或配有一位教师和一位全职助教的常规班）；为排除班级变化带来的干扰，学生 “remained in whatever category they had been assigned to throughout the third grade”（三年级前一直留在原分配类别）；本题定位句则进一步交代对教师的安排：“To ensure that teaching quality did not differ, teachers were randomly assigned to small and regular-size classrooms.”（为确保教学质量没有差异，教师被随机分派到小班和常规班），并补充 “Few teachers received any special training for working with small classes, and there were no new curricular materials.”（几乎没有教师接受过教授小班的专门培训，也没有新的课程材料）。这三项设计——随机分派学生、随机分派教师、控制培训与教材这两个变量——都是为了保护实验的有效性（validity），使小班与常规班的差异只能归因于班级规模，与题干“为保障项目有效性而采取的行动细节”完全吻合，所以答案是 C（第 3 段）。",
          "traps": [
            "为什么不是 D（第 4 段）：D 段也出现 randomisation 一词，但那是 Hanushek 的批评 “STAR failed to ensure good randomisation of teacher and student assignments”，是“指出项目没做好”，属于质疑而不是采取行动。",
            "为什么不是 F（第 6 段）：F 段只提到 SAGE 降低师生比（lowered the average pupil-teacher ratio … to 12–15:1）和选择贫困学校，属于项目特征描述，没有为保护结论有效性而专门设计的做法。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "reasons why class composition changed during a project",
          "translation": "某个项目实施期间班级学生构成发生变化的原因",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Hanushek and others have also shown that during the study too many children moved from regular to small classes, probably because school personnel caved in to parent demands."
          },
          "synonyms": [
            "“class composition changed” 同义替换为原文的 “too many children moved from regular to small classes”，学生从常规班转到小班即班级构成发生变化",
            "“reasons why … changed” 同义替换为原文的 “probably because school personnel caved in to parent demands”，because 引导的正是题干要问的原因",
            "“during a project” 对应原文的 “during the study”，study 指 Project STAR"
          ],
          "locatingTip": "定位：题干关键词是 reasons（原因）与 class composition changed（班级构成变化）。回原文找表示原因的词（because、due to、as a result of）并确认涉及学生流动。D 段（第 4 段）中部出现 “during the study too many children moved from regular to small classes, probably because school personnel caved in to parent demands”，一句话同时给出变化（moved from regular to small classes）与原因（because … caved in to parent demands），可一步锁定。确定答案技巧：题干问的是“变化的原因”，而不是“变化本身”；原句的 probably because 恰好提供校方屈从家长要求这一解释。注意本组中 D 段被用了两次（第 27 题与第 31 题都选 D），题干后 “NB You may use any letter more than once” 已经提示同一段可以重复使用，不要因为已经用过 D 就回避。",
          "analysis": "D 段（第 4 段）后半部分集中列举 Hanushek 等人对 STAR 的质疑，本题定位句是其中一句：“Hanushek and others have also shown that during the study too many children moved from regular to small classes, probably because school personnel caved in to parent demands.”（Hanushek 等人还指出，研究期间有过多学生从常规班转入小班，很可能是因为校方屈从了家长的要求）。这句话包含三个要素：变化的动作是 children moved from regular to small classes（学生由常规班流向小班），变化发生的时间是 during the study（即 STAR 实施期间），变化的原因是 probably because school personnel caved in to parent demands（校方在家长压力下让步）。题干 “reasons why class composition changed during a project” 中的 class composition changed 对应学生从常规班转入小班这一构成变化，reasons 对应 probably because 引出的解释，during a project 对应 during the study，三层信息一一吻合，故选 D（第 4 段）。这一句在原文中的作用是削弱 STAR 的随机性——学生中途大量流动会使两类班级的样本不再可比，与紧接着的 “STAR failed to ensure good randomisation” 一脉相承。",
          "traps": [
            "为什么不是 C（第 3 段）：C 段写 “The students remained in whatever category they had been assigned to throughout the third grade”，强调学生在三年级前一直留在原定班级、不换班，与题干“班级构成发生变化”正好相反。",
            "为什么不是 E（第 5 段）：E 段提到教师层面的流动（some of the extra teachers needed are being recruited from the poorer schools），是师资资源的调整，不是班级里学生构成的变化，也没有给出原因式的解释。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–40 匹配题（Classify the statements as A Project STAR / B The California Project / C SAGE）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 40
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "The student composition of each class was left to chance.",
          "translation": "每个班级的学生构成是随机决定的。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Students entering kindergarten were randomly assigned to one of three kinds of classes"
          },
          "synonyms": [
            "“left to chance” 同义替换为原文的 “randomly assigned”，由随机方式决定而非人为挑选",
            "“The student composition of each class” 对应原文的 “Students entering kindergarten were randomly assigned to one of three kinds of classes”，谁进哪个班完全由随机分派决定",
            "“each class” 对应原文的 “one of three kinds of classes”，STAR 把学生随机分入三类班级之一"
          ],
          "locatingTip": "定位：题干核心词是 chance（随机、碰运气），在原文中的对应词是 randomly。全文只有介绍 Project STAR 的 C 段（第 3 段）出现 “randomly assigned”，讲的正是学生如何分班。确定答案技巧：分类匹配题的三个选项分别是 A STAR、B California、C SAGE，只要判断题干特征属于哪个项目即可。随机分派学生出现在描写 STAR 实验设计的句子中，而 A 选项就是 STAR，故选 A。另两个项目都没有提到学生如何分班。",
          "analysis": "本题的判分依据是 C 段（第 3 段）中描述 STAR 分组方式的那一句：“Students entering kindergarten were randomly assigned to one of three kinds of classes: a small class of 13 to 17 students, a regular-size class of 22 to 26 or a regular-size class with both a teacher and a full-time teacher's aide.”（进入幼儿园的学生被随机分配到三类班级之一：13 至 17 人的小班、22 至 26 人的常规班，或配有一位教师和一位全职助教的常规班）。题干 “The student composition of each class was left to chance” 中的 chance 是“偶然、随机”的意思，指不由人为意愿决定，恰好对应原文的 randomly assigned（随机分派）：学生的背景、能力没有被刻意搭配或筛选，班级构成全靠随机数决定。这是 STAR 实验成立的前提，也是全文唯一具体描写学生如何随机分班的地方（D 段只提到随机化做得不好，并未描写分班方式），属于 Project STAR，因此答案是 A。需要注意 B 选项 California 与 C 选项 SAGE 在原文中都没有涉及学生分班方式的描写，所以可以直接排除。",
          "traps": [
            "为什么不选 B（California）：E 段（第 5 段）谈的是全州统一缩减班级规模、教师短缺以及贫富学校资源差距，完全没有提到学生如何编班，更没有随机分派。",
            "为什么不选 C（SAGE）：F 段（第 6 段）的重点是 “targeting schools at which 30% of the students were below poverty level”，即特意挑选贫困生比例高的学校，属于有意选择而非听凭偶然，与题干 chance 相反。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "A long-term improvement in performance was claimed.",
          "translation": "（该项目）声称取得了长期的成绩提升。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "They calculated that students in smaller classes were outperforming their counterparts in regular-sized classes by the first grade and that this advantage persisted even after students returned to larger classes."
          },
          "synonyms": [
            "“A long-term improvement” 同义替换为原文的 “this advantage persisted even after students returned to larger classes”，学生回到大班后优势依然存在，即长期有效",
            "“in performance” 同义替换为原文的 “outperforming their counterparts in regular-sized classes”，outperform 即成绩表现优于他人",
            "“was claimed” 对应原文的 “They calculated that …”，即 Finn 与 Achilles 依据数据提出的主张，也正是 Hanushek 随后反驳的那一主张"
          ],
          "locatingTip": "定位：题干关键词是 long-term（长期）与 improvement（提升）。回原文找表示“效果持续”的表述，D 段（第 4 段）出现 “this advantage persisted even after students returned to larger classes”，其中 persist（持续、保持）即 long-term，outperforming（表现更优）即 improvement。确定答案技巧：还要确认“谁声称”。原句用 They calculated that … 引出 Jeremy Finn 与 Charles Achilles 的结论，属于 STAR 项目的研究发现；紧接着 Hanushek 质疑 “STAR does not prove that gains persist long after students return to regular classes”，说明“长期效果”正是围绕 STAR 的争论焦点，因此答案是 A（STAR）。加州项目只报告当期优势，SAGE 只是“结果与 STAR 一致”，都没有自己声称长期提升。",
          "analysis": "D 段（第 4 段）开头写道：“At the end of STAR, researchers analysed the data. Jeremy Finn of New York University and Charles Achilles of Eastern Michigan University found evidence for ‘an array of benefits of small classes'.”（STAR 结束时，研究者分析了数据。纽约大学的 Jeremy Finn 和东密歇根大学的 Charles Achilles 找到了“小班的种种好处”的证据）。本题定位句紧随其后：“They calculated that students in smaller classes were outperforming their counterparts in regular-sized classes by the first grade and that this advantage persisted even after students returned to larger classes.”（他们推算，小班学生在一年级时就已超过常规班的同学，而且这一优势在学生们回到更大的班级后依然保持）。题干中的 long-term improvement 由两处信息拼接而成：outperforming their counterparts in regular-sized classes 是成绩上的提升（improvement），this advantage persisted even after students returned to larger classes 说明提升不只出现在实验期内、学生离开小班后仍然存在（long-term）。这个主张正出自 STAR 项目的研究者，且随后被 Hanushek 明确质疑（He argues that STAR does not prove that gains persist long after students return to regular classes），可见它是与 STAR 直接挂钩的论断，故选 A。加州项目 E 段的发现只是当期的成绩优势，SAGE 也只是印证 STAR 的结论，都没有自己提出“长期提升”的主张。",
          "traps": [
            "为什么不选 B（California）：E 段的结论是 “Researchers found a statistically significant achievement advantage in reading, writing and mathematics for students in classes that had been reduced to 20”，说的是缩减到 20 人的班级在阅读、写作和数学上有显著优势，属于项目期间的效果，没有提到回到大班后是否仍然存在。",
            "为什么不选 C（SAGE）：F 段只说 SAGE 的研究结果与 STAR 一致（found the results accord with those from STAR），即印证别人的结论，且 SAGE 本身是五年期试点，原文并未单独声称它具有长期效果。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "Similar results were obtained for all social groups.",
          "translation": "所有社会群体都取得了相似的结果。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "What is more, the effect did not vary for students of different backgrounds."
          },
          "synonyms": [
            "“for all social groups” 同义替换为原文的 “for students of different backgrounds”，不同背景的学生即不同社会群体",
            "“Similar results” 同义替换为原文的 “the effect did not vary”，效果不因群体而变，说明各群体的结果彼此相似",
            "“were obtained” 对应前一句的 “Researchers found a statistically significant achievement advantage”，found 即研究得到的结果"
          ],
          "locatingTip": "定位：题干关键词是 all social groups（所有社会群体）与 similar（相似）。回原文找“效果不因背景而异”的句子，E 段（第 5 段）最后一句 “What is more, the effect did not vary for students of different backgrounds.” 正是此意，而 E 段整段讲的是加州项目。确定答案技巧：本题的干扰项是 D 段（STAR）里的 “the effect was stronger for black and Hispanic minority groups”，看似也谈不同群体，但那是“群体之间效果不同”，与题干“所有群体结果相似”恰好相反；只有 E 段明确说效果不随背景变化，因此答案是 B（California）。做题时请把“群体之间有差异”与“群体之间无差异”这两句严格区分开。",
          "analysis": "E 段（第 5 段）介绍加州的大规模缩减班级计划，先说它的总体评价：“The largest public class size reduction programme so far, California's, stands more as a warning than as worthy of emulation.”（迄今为止规模最大的公共班级缩减计划——加州的做法——与其说是值得效仿，不如说是一个警示）。接着指出它在教师短缺的情况下强行推行，反而加剧了贫富学校之间的资源差距。段倒数第二句给出研究成果：“Researchers found a statistically significant achievement advantage in reading, writing and mathematics for students in classes that had been reduced to 20.”（研究者发现，缩减到 20 人的班级中的学生在阅读、写作和数学上具有统计显著的成绩优势）。本题定位句是最后一句：“What is more, the effect did not vary for students of different backgrounds.”（更重要的是，这一效果对不同背景的学生并无差异）。题干 “Similar results were obtained for all social groups” 中，all social groups 对应 students of different backgrounds（不同家庭背景、不同族裔的学生），similar results 对应 the effect did not vary（效果没有差别），were obtained 对应前句的 Researchers found。原句是加在加州项目发现之上的补充说明，因此这一特征属于加州的班级缩减计划，答案是 B。要注意与第 40 题（q14）的区别：STAR 发现少数族裔群体受益更大，属于“某些群体”受益，而本题问的是“所有群体结果相似”，那是加州项目的结论，两题互为镜像，切勿混淆。",
          "traps": [
            "为什么不选 A（STAR）：D 段明确说 STAR 的效果 “was stronger for black and Hispanic minority groups”，即对黑人和西班牙裔少数族裔效果更强，属于各群体之间效果不同，与题干“所有群体结果相似”相反。",
            "为什么不选 C（SAGE）：F 段只说明 SAGE 的研究结果与 STAR 一致，没有单独交代不同社会群体的结果是相同还是不同，缺乏对应信息。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "The project was a preliminary to a more comprehensive study.",
          "translation": "该项目是一项更全面研究的前期准备。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Wisconsin's Student Achievement Guarantee in Education (SAGE) was a five-year pilot study to do some of the groundwork for a major project."
          },
          "synonyms": [
            "“was a preliminary to” 同义替换为原文的 “was a … pilot study to do some of the groundwork for a major project”，pilot study（试点研究）与 groundwork（打基础）都表示“前期准备”",
            "“a more comprehensive study” 同义替换为原文的 “a major project”，major 与 more comprehensive 都指规模更大、更全面的项目",
            "“The project” 指原文的 SAGE，即 Wisconsin's Student Achievement Guarantee in Education"
          ],
          "locatingTip": "定位：题干关键词是 preliminary（前期的、预备的）与 more comprehensive study（更全面的研究）。F 段（第 6 段）首句即出现 pilot study 与 groundwork for a major project，一句话同时命中两个关键词。确定答案技巧：pilot study（试点研究）是雅思阅读高频词，含义就是“为更大规模项目先做的小规模试验”，原句更用 to do some of the groundwork for a major project（为一个大项目做些基础工作）把这种先后关系讲得十分明确。pilot study 出现在介绍 SAGE 的首句中，因此答案是 C（SAGE）。",
          "analysis": "F 段（第 6 段）首句是本题定位句：“Wisconsin's Student Achievement Guarantee in Education (SAGE) was a five-year pilot study to do some of the groundwork for a major project.”（威斯康星州的“教育学生成就保障计划”（SAGE）是一项为期五年的试点研究，目的是为一个大项目做些打基础的工作）。题干 “The project was a preliminary to a more comprehensive study” 中的 preliminary（前期的、预备性的）对应 pilot study 以及 groundwork（基础工作），a more comprehensive study（一项更全面的研究）对应 a major project（一个大项目）。也就是 SAGE 本身只是先行的小规模试验，为将来更大规模的项目铺路。紧接着的一句继续说明这次试点为何值得关注：“Class sizes were reduced in only 14 schools, but it was noteworthy for targeting schools at which 30% of the students were below poverty level”（只在 14 所学校缩减班级，但它专门选择贫困生占 30% 的学校，这一点值得注意）。整个首句的主语是 SAGE，因此答案是 C。相对而言，STAR 在原文中被称为 “one of the greatest experiments in education in United States history”，是本身规模完整的重大实验；加州的计划则是 “The largest public class size reduction programme so far”，是当时最大的推行计划，两者都不是为别的研究做准备的试点。",
          "traps": [
            "为什么不选 A（STAR）：C 段介绍 STAR 时说它是 “one of the greatest experiments in education in United States history”，本身就是一个完整的大规模实验，原文从未说它是为更大项目做准备。",
            "为什么不选 B（California）：E 段称加州的计划是 “The largest public class size reduction programme so far”（迄今规模最大的公共班级缩减计划），是全面推行而非实验性准备。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "Several different class types were involved in the project.",
          "translation": "该项目涉及好几种不同类型的班级。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Students entering kindergarten were randomly assigned to one of three kinds of classes: a small class of 13 to 17 students, a regular-size class of 22 to 26 or a regular-size class with both a teacher and a full-time teacher's aide."
          },
          "synonyms": [
            "“Several different class types” 同义替换为原文的 “one of three kinds of classes”，three kinds 即几种不同类型",
            "“were involved in the project” 对应原文的 “Students entering kindergarten were randomly assigned to … classes”，说明这些班型都是 STAR 实验分组的一部分",
            "原文用冒号后并列的三项具体交代这几种班级：a small class of 13 to 17 students、a regular-size class of 22 to 26、a regular-size class with both a teacher and a full-time teacher's aide"
          ],
          "locatingTip": "定位：题干关键词是 class types（班级类型）。回原文找列举不同班级形式的句子，C 段（第 3 段）用 “one of three kinds of classes” 加冒号并列的方式，详细列出三种班型，是全文唯一列举班型的地方。确定答案技巧：看到 fewer/different/several 这类表示“多种”的题干措辞，就要在原文中寻找并列列举结构（用逗号或 or 连接的多项）。原文的 three kinds of classes 对应题干的 several different class types，而这三种班型（小班、常规班、配助教的常规班）都是 Project STAR 的实验设计，故选 A。",
          "analysis": "C 段（第 3 段）在介绍 Project STAR 的分组方法时写道：“Students entering kindergarten were randomly assigned to one of three kinds of classes: a small class of 13 to 17 students, a regular-size class of 22 to 26 or a regular-size class with both a teacher and a full-time teacher's aide.”（进入幼儿园的学生被随机分配到三类班级之一：13 至 17 人的小班、22 至 26 人的常规班，或由教师和一名全职助教共同负责的常规班）。题干 “Several different class types were involved in the project” 中的 several different class types 对应原文的 three kinds of classes；冒号后的三项是对这三种班型的具体说明：小班（13 至 17 人）、常规班（22 至 26 人）、以及同样规模但额外配一名助教的常规班。原文之所以要设置三类而不是两类，是为了在比较班级规模的同时，把“多一位助教是否也能带来同样效果”作为变量分离出来。这种多班型设计属于 Project STAR，因此答案是 A。B 选项加州的计划与 C 选项 SAGE 都只是把班级规模缩减到某个数字（reduced to 20；师生比降到 12–15:1），都只有一种“缩小后的班”，没有区分不同班型。",
          "traps": [
            "为什么不选 B（California）/ C（SAGE）：E 段只说加州把班级缩减到 20 人（classes that had been reduced to 20），F 段只说 SAGE 把幼儿园到三年级的平均师生比降到 12–15:1，两者都只涉及一种缩减后的班级形式，原文没有把它们分成几种不同类型。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "A special group of schools was selected to take part.",
          "translation": "项目特意挑选了一批特定类型的学校参加。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Class sizes were reduced in only 14 schools, but it was noteworthy for targeting schools at which 30% of the students were below poverty level, compared with California's across-the-board approach."
          },
          "synonyms": [
            "“A special group of schools” 同义替换为原文的 “schools at which 30% of the students were below poverty level”，即贫困生比例偏高、具有特定条件的学校",
            "“was selected to take part” 同义替换为原文的 “targeting schools at which …”，target 意为“以……为目标、有意选定”",
            "原文的 “compared with California's across-the-board approach” 通过对比（加州是全面统一推行）反衬出 SAGE 是特意挑选学校，进一步支持选 C"
          ],
          "locatingTip": "定位：题干关键词是 special group of schools（特定学校群体）与 selected（挑选）。F 段（第 6 段）说 SAGE 只在 14 所学校缩减班级，并且 “it was noteworthy for targeting schools at which 30% of the students were below poverty level”，明确具有“挑学校”的特征。确定答案技巧：special 在原文不会原词复现，要转换成“有特定条件”的表达——30% of the students were below poverty level（30% 的学生生活在贫困线以下）就是被挑中的条件；targeting 则直接表示“以……为选定对象”。相比之下，加州的做法是 across-the-board approach（全面统一推行），不做挑选，因此答案只能是 C（SAGE）。",
          "analysis": "F 段（第 6 段）第二句是本题定位句：“Class sizes were reduced in only 14 schools, but it was noteworthy for targeting schools at which 30% of the students were below poverty level, compared with California's across-the-board approach.”（只在 14 所学校缩减了班级规模，但它值得关注之处在于专门以学生贫困率达 30% 的学校为对象，这与加州全面统一推行的做法形成对比）。题干 “A special group of schools was selected to take part” 中，a special group of schools 对应 at which 30% of the students were below poverty level（具有特定贫困生比例的学校），was selected to take part 对应 targeting（有意选定为项目对象）；only 14 schools 进一步说明范围是刻意限定的少数学校。原文还用 compared with California's across-the-board approach 把两种做法对立起来：加州是全州铺开、不挑对象，SAGE 则只挑贫困生比例高的学校，这正好把“特意选定”这一特征牢牢地归到 SAGE 名下，所以答案是 C。做题提醒：遇到 special、selected、targeted、particular 这类词，要在原文里找表示“限定条件”或“有意选择”的动词，本题的 target 就是最直接的对应词。",
          "traps": [
            "为什么不选 B（California）：F 段用 across-the-board（全面统一）形容加州的做法，即从幼儿园到三年级全州统一缩减班级，不挑选特定类型的学校；题干强调的恰恰是“挑选特定学校”，因此不能选 B。",
            "为什么不选 A（STAR）：C 段介绍 STAR 时只说是田纳西州的一项实验，并把学生随机分入不同班级，没有提到挑选某一类条件的学校参加。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Classroom assistants were used as part of the project.",
          "translation": "该项目把课堂助教纳入了安排。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "a regular-size class with both a teacher and a full-time teacher's aide"
          },
          "synonyms": [
            "“Classroom assistants” 同义替换为原文的 “a full-time teacher's aide”，aide 即助教、助理",
            "“were used as part of the project” 对应原文把这种班型列为三类班级之一（one of three kinds of classes），说明配助教是项目设计的一部分",
            "“a full-time” 这一限定语表明该助教是全职专配，属于项目安排的固定人员"
          ],
          "locatingTip": "定位：题干关键词是 assistants，在原文中的对应词是 aide（助教），二者是近义替换。全文只有 C 段（第 3 段）出现 teacher's aide，位于三种班型的第三种：“a regular-size class with both a teacher and a full-time teacher's aide”。确定答案技巧：分类匹配题先看题干特征再判断归属。配助教这一特征出现在列举 STAR 三种班型的句子中，说明它是 STAR 项目的一个实验组设置，故选 A（STAR）。E 段（加州）提到的是教师短缺与抽调教师，F 段（SAGE）只讲师生比与选校标准，两段都没有提到任何课堂辅助人员。",
          "analysis": "C 段（第 3 段）在描述 Project STAR 的三种班级类型时写道：“Students entering kindergarten were randomly assigned to one of three kinds of classes: a small class of 13 to 17 students, a regular-size class of 22 to 26 or a regular-size class with both a teacher and a full-time teacher's aide.”（进入幼儿园的学生被随机分配到三类班级之一：13 至 17 人的小班、22 至 26 人的常规班，或者由一位教师加一位全职助教共同负责的常规班）。第三种班型中的 a full-time teacher's aide 就是题干所说的 classroom assistant（课堂助教），而且它是与“小班”“常规班”并列的实验组，也就是项目设计的组成部分，对应题干 “were used as part of the project”。STAR 之所以设置这样一个“常规规模加助教”的组，是为了区分“班级人数少”与“成年人多”两种可能的效果来源，这说明助教配置是 STAR 特有的实验安排，答案是 A。要特别小心不要被“班级规模”这一共同主题误导到 B 或 C：加州的 E 段讲的是教师（teachers）短缺与从贫困学校抽调优秀教师，SAGE 的 F 段讲的是降低师生比，都与课堂助教无关。",
          "traps": [
            "为什么不选 B（California）：E 段提到的是 “a shortage of teachers that is most acute in low-income areas” 以及 “some of the extra teachers needed are being recruited from the poorer schools”，讨论的是教师数量与流动，不是配备课堂助教。",
            "为什么不选 C（SAGE）：F 段只说明 SAGE 把幼儿园到三年级的平均师生比由 21–25:1 降到 12–15:1，并选取贫困生比例高的学校，全段没有提到助教或任何教学辅助人员。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "The project was responsible for aggravating existing problems.",
          "translation": "该项目使原本存在的问题进一步恶化。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "This is exacerbating the disparity in resources available to rich and poor schools in California, because more affluent areas can attract the best teachers."
          },
          "synonyms": [
            "“aggravating” 同义替换为原文的 “exacerbating”，两词都表示“使（问题）加剧、进一步恶化”",
            "“existing problems” 同义替换为原文的 “the disparity in resources available to rich and poor schools”，贫富学校之间的资源差距是原本就存在的问题",
            "“The project was responsible for” 对应原文主语 This，它回指上一句所说的加州缩减班级计划（trying to reduce classes in kindergarten through grade three）"
          ],
          "locatingTip": "定位：题干关键词是 aggravating（使恶化），在原文中的同义替换词是 exacerbate。exacerbate 是雅思阅读高频词，含义为“使……变得更糟、加剧”，看到它就要立刻联想到题干中 aggravate 一类的措辞。E 段（第 5 段）第三句 “This is exacerbating the disparity in resources available to rich and poor schools in California …” 一步命中。确定答案技巧：还必须确认句首的 This 指什么——它回指段首所说的加州班级缩减计划，因此“使问题恶化”的责任落在加州项目上，答案为 B。D 段对 STAR 的批评只涉及研究设计是否正确，F 段对 SAGE 的评价总体正面，都不含“使既有问题恶化”的含义。",
          "analysis": "E 段（第 5 段）对加州计划持批评态度。首句定调：“The largest public class size reduction programme so far, California's, stands more as a warning than as worthy of emulation.”（迄今为止规模最大的公共班级缩减计划——加州的做法——与其说值得效仿，不如说是一个警示）。第二句说明背景：“That state is trying to reduce classes in kindergarten through grade three despite a shortage of teachers that is most acute in low-income areas.”（该州正试图缩减幼儿园到三年级的班级规模，尽管低收入地区的教师短缺最为严重）。本题定位句是第三句：“This is exacerbating the disparity in resources available to rich and poor schools in California, because more affluent areas can attract the best teachers.”（这正在加剧加州富裕学校与贫困学校之间可用资源的差距，因为更富裕的地区能吸引到最好的教师）。题干 “The project was responsible for aggravating existing problems” 的三个信息点都能对上：aggravating 对应 exacerbating；existing problems 对应 the disparity in resources available to rich and poor schools（贫富学校资源不均本就是加州教育长期存在的问题）；The project 对应句首的 This，它承接前文，指加州的班级缩减计划。第四句补充了这一过程的具体机制：Indeed, some of the extra teachers needed are being recruited from the poorer schools（需要额外增加的教师中有一部分是从更贫困的学校抽调来的），即富校抽走穷校教师，问题因此进一步加剧。整段以负面评价为主，与题干“加剧了既有问题”完全吻合，答案是 B。",
          "traps": [
            "为什么不选 A（STAR）：D 段对 STAR 的批评集中在研究本身（randomisation 是否充分、结论能否证明长期效果、样本流动是否影响结果），属于学术层面的争论，没有说 STAR 给教育体系带来了负面影响。",
            "为什么不选 C（SAGE）：F 段对 SAGE 的评价是正面的，段中写道 “STAR and SAGE have made it hard to argue against reducing class sizes”，而且 SAGE 专门以贫困生比例达 30% 的学校为对象（targeting schools at which 30% of the students were below poverty level），属于帮助弱势学校，不是让问题恶化。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "Certain groups of pupils within the sample were identified as having benefited.",
          "translation": "样本中某些特定的学生群体被确认为受益者。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "They also found that the effect was stronger for black and Hispanic minority groups"
          },
          "synonyms": [
            "“Certain groups of pupils” 同义替换为原文的 “black and Hispanic minority groups”，即样本中被单独点名的特定群体",
            "“were identified as having benefited” 同义替换为原文的 “the effect was stronger for …”，the effect 指小班带来的益处，stronger 说明这些群体受益更明显",
            "“within the sample” 对应 STAR 实验中随机分班的那些学生，也就是 Hanushek 后文所质疑的研究对象（样本）"
          ],
          "locatingTip": "定位：题干关键词是 certain groups（某些特定群体）与 benefited（受益）。D 段（第 4 段）出现 “They also found that the effect was stronger for black and Hispanic minority groups”，明确点出黑人和西班牙裔少数族裔群体从小班中受益更明显。确定答案技巧：本题与第 34 题（q8）构成镜像——STAR 的结论是“对少数族裔效果更强”（群体之间存在差异），加州项目的结论是“效果不因背景而变”（群体之间没有差异）。题干说“样本中某些群体被认定受益”，含义是具体点出了某一类学生，符合 STAR 的表述，故选 A。做题时必须看清题干写的是 certain groups 还是 all groups，一词之差答案完全相反。",
          "analysis": "D 段（第 4 段）在介绍 STAR 的研究发现时写道：“Jeremy Finn of New York University and Charles Achilles of Eastern Michigan University found evidence for ‘an array of benefits of small classes'.”（纽约大学的 Jeremy Finn 和东密歇根大学的 Charles Achilles 找到了“小班的种种好处”的证据）。接着本题定位句出现：“They also found that the effect was stronger for black and Hispanic minority groups – a significant finding for policy-makers.”（他们还发现，这一效果对黑人和西班牙裔少数族裔群体更为明显——这对政策制定者是一项重要发现）。题干 “Certain groups of pupils within the sample were identified as having benefited” 中，within the sample 对应 STAR 随机抽取并随机分班的那些学生；certain groups of pupils 对应原文具体点出的 black and Hispanic minority groups（黑人和西班牙裔少数族裔）；were identified as having benefited 对应 the effect was stronger for …（对他们而言效果更强，即获益更大）。原文还说这一发现 “a significant finding for policy-makers”（对政策制定者意义重大），进一步确认它是被研究者单独识别出来的受益群体。因此答案是 A。需要与第 34 题（q8）严格区分：加州项目的结论是 the effect did not vary for students of different backgrounds，即所有背景的学生受益相同，不符合题干中 certain groups 所要求的“特定群体”，所以 B 选项是本题最大的干扰项。",
          "traps": [
            "为什么不选 B（California）：E 段的结论是 “the effect did not vary for students of different backgrounds”，即不同背景的学生效果并无差别，没有单独指出某一群体受益，与题干的 certain groups（某些特定群体）不符。",
            "为什么不选 C（SAGE）：F 段只说 SAGE 的研究结果与 STAR 一致（found the results accord with those from STAR），没有单独说明任何特定学生群体从中获益。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
