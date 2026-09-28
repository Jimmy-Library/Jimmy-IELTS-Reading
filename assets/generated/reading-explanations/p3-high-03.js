(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-03", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-03",
  "meta": {
    "examId": "p3-high-03",
    "title": "What makes a musical expert_ 音乐天赋",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–30 选择题（四选一）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 30
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "In the first paragraph, the writer suggests that a talented musician is someone",
          "translation": "在第一段中，作者暗示一位有天赋的音乐家是这样一种人：",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "or do they have a set of abilities — or neural structures — that are totally different from those of the rest of us?"
          },
          "synonyms": [
            "“a talented musician” 对应原文的 “what we refer to as talent”，作者把 talent 界定为 “innate brain structure”，即与生俱来的大脑结构",
            "“whose brain structure is unlike that of other people” 同义替换为原文的 “neural structures … that are totally different from those of the rest of us”",
            "“is someone” 引出的定义关系，对应原文用 or 并列的第二种可能，即他们拥有与常人完全不同的能力或神经结构"
          ],
          "locatingTip": "定位：题干已限定 In the first paragraph，直接读第 1 段即可，不必扫读全文；判断落点是段中 neural structures 与 brain structure 这两处表述，四个选项中只有 B 谈结构（structure）。确定答案技巧：第 1 段用方向相反的两个短语搭起对照—— “more of the same basic skills”（更多相同的基本技能）与 “a set of abilities — or neural structures — that are totally different”（完全不同的能力或神经结构）；作者随后把 talent 界定为 innate brain structure，等于把“有天赋”与“大脑结构与众不同”画上等号，因此选 B。切勿用自己的常识（天赋等于童年成名）代替原文措辞。",
          "analysis": "第 1 段开篇连用两个问句摆出两种对立的解释。第一句问：那些公认的音乐专家，究竟只是拥有更多我们人人都具备的相同基本技能（more of the same basic skills we are all endowed with），还是拥有一套与我们其余人完全不同的能力、乃至神经结构（a set of abilities — or neural structures — that are totally different from those of the rest of us）？第二句接着问：高水平的音乐成就究竟只是训练与练习的结果，还是基于“与生俱来的大脑结构”，也就是我们所说的天赋（innate brain structure — what we refer to as talent）？可见作者笔下的“天赋”直接指向与常人不同的（神经）结构，正对应选项 B 的 whose brain structure is unlike that of other people。原文的对照结构是本句的关键：“more of the same”（数量上更多，但种类相同）与 “totally different”（性质上完全不同）是两个相反方向，作者把天赋归入后者，这就是判分依据。",
          "traps": [
            "A 错：原文讨论的是天赋者与常人在能力或神经结构上的差别，从未提到他们本人“意识到（aware of）”自己与别人不同；选项把客观差异换成了主观意识，属于无中生有。",
            "C 错：原文只说天赋可由受过训练的人在对方尚未取得卓越表现之前被识别（identifiable by trained people who can recognize its existence before a person has achieved exceptional levels of performance），强调的是“早期被识别”，而不是本人“在童年就表现极佳”；选项把识别的时间偷换成本人的表演水平。",
            "D 错：原文写的是 “more of the same basic skills”（同样的基本技能更多），是数量之别；D 说 essential skills are more varied（技能种类更多样），把数量改成了种类，与原文不符。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "According to the writer, what is unclear about the findings of Gottfried Schlaug?",
          "translation": "根据作者的观点，Gottfried Schlaug 的研究结果中不清楚的是什么？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "This suggests that the planum is involved in AP, but it's not clear if it starts out larger in people who eventually acquire AP, or if the acquisition of AP makes the planum increase in size."
          },
          "synonyms": [
            "“Gottfried Schlaug” 在原文原词复现，是本题的定位锚点",
            "“what is unclear” 同义替换为原文的 “it's not clear”",
            "“a feature of the brain” 对应原文的 “a region in the brain called the planum temporale is larger in these people”，即 planum 体积更大这一脑部特征",
            "“is a cause or an effect of a musical skill” 同义替换为原文的 “if it starts out larger in people who eventually acquire AP, or if the acquisition of AP makes the planum increase in size”：前一种可能是先有较大的脑区（因），后一种可能是先有 AP 技能再让脑区变大（果）"
          ],
          "locatingTip": "定位：专有名词 Gottfried Schlaug 是人名，全文只出现在第 3 段，扫读大写词即可一步锁定；同段的 absolute pitch（AP）与 planum temporale 构成同一语义场。确定答案技巧：注意题干的问法 what is unclear，原文对应的信号词是 it's not clear，而 unclear 的内容正是其后的 if 从句——作者给出两种可能：脑区“一开始就更大”，或者“获得 AP 之后才变大”，这正好是“因”与“果”两个方向的悬而未决，故与选项 C 对应。做题时不要停在 This suggests 那句（那句恰恰是已经明确的部分），要把句子读完，看清 but 之后才是作者所说的未知。",
          "analysis": "第 3 段交代脑成像研究目前还理不清头绪。Schlaug 采集了有绝对音感（absolute pitch，简称 AP）者的脑部扫描，发现这些人脑中一个叫 planum temporale 的区域比其他人更大。本段最后一句是判分关键：“This suggests that the planum is involved in AP, but it's not clear if it starts out larger in people who eventually acquire AP, or if the acquisition of AP makes the planum increase in size.”（这暗示 planum 与 AP 有关，但尚未分清究竟是这些人一开始 planum 就更大，还是获得 AP 才使 planum 变大）。句子前半句已经确认了“哪个脑区”与“哪种音乐技能”相关，因此作者并不觉得相关性不清楚；真正悬而未决的是先后与因果方向：脑区偏大是 AP 的成因，还是 AP 带来的结果。选项 C 的 whether a feature of the brain is a cause or an effect of a musical skill 正是对这两种可能性的概括，因此选 C。",
          "traps": [
            "A 错：原文已经说明 “a region in the brain called the planum temporale is larger in these people”，并用 This suggests that the planum is involved in AP 明确给出脑区与音乐技能的关联，“哪一部分脑区与哪种技能相关”恰恰是已经说清的部分，不属于 unclear。",
            "B 错：原文没有比较不同音乐技能对脑部改变的大小，全段只谈 AP 一种技能与 planum 的关系，提不出“哪种技能带来的变化最大”这一疑问。",
            "D 错：“某些人是否更容易习得音乐技能”是第 4 段末尾提出的另一个未解问题（We do not know yet if the propensity for increase pre-exists in some people），并非 Schlaug 研究中的 unclear 之处，属于张冠李戴。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "According to the writer, what has been established by studies of violin players?",
          "translation": "根据作者的观点，对小提琴演奏者的研究确立了下列哪一点？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "the region of the brain responsible for controlling the movement of the left hand (the hand that requires greater precision in violin playing) increases in size as a result of practice"
          },
          "synonyms": [
            "“studies of violin players” 在原文原词复现，是本题的定位锚点",
            "“what has been established” 同义替换为原文的 “Results of research … are more conclusive”，表示结论已经比较明确",
            "“Changes may occur in the brain” 同义替换为原文的 “the region of the brain … increases in size”，即脑区体积发生改变",
            "“following violin practice” 同义替换为原文的 “as a result of practice”，说明变化是练习在前、脑区改变在后"
          ],
          "locatingTip": "定位：题干关键词 violin players 只出现在第 4 段第 2 句，看到 violin 即可跳过前三段；本题还要抓 established，对应原文段落首句的 more conclusive。确定答案技巧：原文用 increases in size as a result of practice 描述了明确的因果关系（练习导致脑区变大），这就是作者认为“已经确立”的部分，对应 A。做题时要特别区分“已确立”与“仍未知”：本段首句说这类研究 more conclusive（更确定），末句却说 We do not know yet（仍不知道），选项 D 恰恰落在后者，是干扰项。",
          "analysis": "第 4 段报告与熟练运动相关的脑区研究，作者开宗明义地给出判断：“Results of research into the areas of the brain involved in skilled motor movement are more conclusive.”（关于熟练运动所涉脑区的研究结论更为明确）。随后是本题的定位句：对小提琴演奏者的研究显示，负责控制左手动作的脑区（左手正是小提琴演奏中要求更高精确度的那只手）会因练习而增大。这里有两层信息：一是变化确实会发生（increases in size），二是变化由练习引起（as a result of practice），顺序是“先练习、后改变”，故选项 A「练习之后大脑可能出现变化」与文意吻合。本段末句 “We do not know yet if the propensity for increase pre-exists in some people and not others.”（这种变大的倾向是否天生存在于部分人身上，目前还不清楚）是作者主动标出的未知部分，与 D、B 两个选项形成对照，也是排除它们的依据。",
          "traps": [
            "B 错：原文谈的是控制左手动作的脑区（the region of the brain responsible for controlling the movement of the left hand），指大脑的某个区域，而不是「左撇子小提琴手（left-handed violinists）」这一人群；选项把 hand 从解剖对象改成了人的属性。",
            "C 错：原文说的是脑区体积随练习增大，全段没有提到「手的大小（hand size）」，更没有说手的大小由遗传而非练习决定。",
            "D 错：原文末句明确写着 We do not know yet if the propensity for increase pre-exists in some people and not others，即“天生具备该特征”恰恰是尚未确立的问题，与题干 established 的要求相反。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "According to the writer, findings on the amount of practice done by expert musicians suggest that",
          "translation": "根据作者的观点，关于专家级音乐家练习量的研究结果表明：",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "the students who achieved the highest performance ratings had practised the most, irrespective of which talent group they had been assigned to"
          },
          "synonyms": [
            "“findings on the amount of practice done by expert musicians” 对应原文的 “research on how much training the experts do” 以及该研究的发现 “the students who achieved the highest performance ratings had practised the most”",
            "“talent may have little to do with expertise” 同义替换为原文的 “irrespective of which talent group they had been assigned to”，成绩与教师判断的天赋分组无关",
            "“suggest that” 同义替换为原文的 “it was found that … suggesting that”"
          ],
          "locatingTip": "定位：题干关键词 practice 与 expert musicians 指向第 5 段——“The evidence against talent comes from research on how much training the experts do.” 这一段专门讨论练习量。确定答案技巧：本题问“研究结果暗示什么”，解题关键是抓住 irrespective of which talent group they had been assigned to 这个让步短语——成绩与天赋分组无关，说明天赋（尤其是教师所感知的天赋）对最终成就作用有限，故与 A 对应。原文紧接的 suggesting that practice does not merely correlate with achievement, but causes it 进一步把功劳给练习，与 A 同向。",
          "analysis": "第 5 段先说明“反对天赋说”的证据来自对专家练习量的研究：音乐专家与数学、国际象棋、体育专家一样，都需要长期的学习与练习，而且多项研究发现最优秀的音乐学生练习量是其他人的两倍以上（more than twice as much as the others）。接着是本题的关键研究：学生们被教师按“天赋”判断秘密分成两组，若干年后发现取得最高成绩评价的学生练习得最多，与他们当初被分在哪一个天赋组完全没有关系（irrespective of which talent group they had been assigned to），作者据此断言练习与成就之间不只是相关，而是因果（practice does not merely correlate with achievement, but causes it）。既然最终成绩与教师所判断的天赋分组无关，那就意味着被当作“天赋”的东西与最终专长水平关系不大，选项 A talent may have little to do with expertise 是对这段结论最贴切的概括，所以选 A。",
          "traps": [
            "B 错：原文只说练习与成就之间存在因果关系（practice … causes it），从未出现“练习会阻碍或妨碍天赋发展”的意思，选项凭空添加了负面作用。",
            "C 错：原文虽然提到教师对学生的天赋作了分组，但研究的落脚点是“成绩与分组无关、与练习量有关”，并没有讨论教师能否识别天赋；把“分组与结果无关”读成“天赋未被教师识别”属于超出原文的推断。",
            "D 错：原文只提到音乐专家需要长期的学习与练习（require lengthy periods of instruction and practice），并未比较教学质量的高低，也没有把专长归于教学质量。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 31–36 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 31,
        "end": 36
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "Anders Ericsson's work with cognitive psychology has influenced other researchers.",
          "translation": "Anders Ericsson 在认知心理学方面的工作影响了其他研究者。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Anders Ericsson, at Florida State University, approaches the topic of musical expertise as a general problem in cognitive psychology."
          },
          "synonyms": [
            "“Anders Ericsson's work with cognitive psychology” 对应原文的 “approaches the topic of musical expertise as a general problem in cognitive psychology”，即他的研究属于认知心理学这一领域",
            "“has influenced other researchers” 在原文中找不到任何对应：原文只交代了他从认知心理学角度切入音乐专长研究，没有提及他的成果对他人产生了影响"
          ],
          "locatingTip": "定位：Anders Ericsson 是全篇唯一以人名引导整段论述的专有名词，只出现在第 6 段首句，扫读大写人名即可一步定位。确定答案技巧：本题的谓语是 has influenced other researchers，属于“影响与反响”类信息，而原文该句的谓语只是 approaches（采取某种研究视角/切入），主语是他本人，宾语是 topic，全段也未出现其他研究者对他工作的评价或引用。作者对该命题既未肯定也未否定，属于信息缺失，故判 NOT GIVEN。切勿因为下文出现 “The emerging picture from such studies” 就自行推断“他的研究影响了同行”。",
          "analysis": "第 6 段介绍 Ericsson 的研究路径：“Anders Ericsson, at Florida State University, approaches the topic of musical expertise as a general problem in cognitive psychology.”（佛罗里达州立大学的 Anders Ericsson 把音乐专长问题当作认知心理学中的一个普遍问题来处理）。这句话的信息仅限于他研究的学科视角与地点，全段其余内容都在讲他的具体主张（成为任何领域的专家都有一些共同的规律、一万小时法则等），没有任何一句涉及“其他研究者是否受其影响”“他的工作是否启发了同行”。题干把“在认知心理学中做研究”扩张成“影响了其他研究者”，多出来的这层影响关系原文没有交代，因此判 NOT GIVEN。判断题中“influence / inspire / be widely accepted”这类表示学术影响力的词是 NOT GIVEN 的高发点，因为原文往往只描述作者做了什么。",
          "traps": [
            "为什么不是 YES：原文只说他以认知心理学为框架研究音乐专长（approaches the topic … as a general problem in cognitive psychology），没有任何关于其成果被他人采用、引用或受其启发的表述，缺少题干所需的“影响”关系。",
            "为什么不是 NO：原文并未否认他的工作产生影响，只是完全没有涉及这一话题，缺少相反信息，因此不能判 NO，只能判信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Different areas of expertise seem to have one specific thing in common.",
          "translation": "不同领域的专长似乎有一个共同的具体特点。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "The emerging picture from such studies is that ten thousand hours of practice is required to achieve the level of mastery associated with being a world-class expert — in anything."
          },
          "synonyms": [
            "“Different areas of expertise” 对应原文的 “in anything” 以及前文列举的 “expert chess players, athletes, artists, mathematicians, as well as the musicians themselves”",
            "“seem to have one specific thing in common” 同义替换为原文的 “The emerging picture from such studies is that …”，即各项研究呈现出的共同图景",
            "“one specific thing” 对应原文的 “ten thousand hours of practice”，并呼应下一句的 “this number comes up again and again”"
          ],
          "locatingTip": "定位：题干没有专有名词，可借上一题所在的第 6 段（Ericsson 的理论段）着手，段中 “The emerging picture from such studies is that … — in anything” 正是“共同点”的表达。确定答案技巧：判断 YES 的依据是 in anything 与 this number comes up again and again 这两处强调——作者明确说无论什么领域，一万小时这个数字反复出现，也就是不同领域的专长确实共享同一个关键点，与题干同向，故选 YES。",
          "analysis": "第 6 段是 Ericsson 理论的核心段落。作者先说他研究的起点是这样一个假设：“there are certain issues involved in becoming an expert at anything”（成为任何领域的专家都涉及某些共同问题），随后列举研究对象——象棋高手、运动员、艺术家、数学家和音乐家；紧接着给出结论：“The emerging picture from such studies is that ten thousand hours of practice is required to achieve the level of mastery associated with being a world-class expert — in anything.”（这些研究呈现出的图景是：要达到世界级专家的精通水平，无论在哪个领域，都需要一万小时的练习）。下一句再补充 “In study after study, of composers, ice-skaters, concert pianists, chess players and master criminals, this number comes up again and again.”（在研究作曲家、滑冰运动员、音乐会钢琴家、棋手乃至犯罪高手的众多研究中，这个数字一次又一次出现）。in anything 与 again and again 共同说明：不同领域的专长有一个共同的具体特征，即一万小时的练习量。题干用 seem to have one specific thing in common 概括这层意思，与原文同向，故判 YES。",
          "traps": [
            "为什么不是 NO：原文用 “in anything” 与 “this number comes up again and again” 反复强调跨领域的一致性，与题干“不同领域的专长有共同点”方向一致，不存在任何矛盾。",
            "为什么不是 NOT GIVEN：原文既列出了多个不同领域（作曲家、滑冰者、钢琴家、棋手等），又明确指出它们都指向 ten thousand hours 这一共同数字，共同点已经被写明，并非没有提及。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "In order to be useful, practice must be carried out regularly every day.",
          "translation": "为了有效，练习必须每天都规律地进行。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Someone would do this amount of practice if they practised, for example, roughly 20 hours a week for ten years."
          },
          "synonyms": [
            "“practice” 与原文的 “practised / practice sessions” 对应，属于同一话题",
            "“must be carried out regularly every day” 在原文找不到对应：原文给出的只是 “roughly 20 hours a week for ten years” 的总量与跨度，没有对练习频次作任何规定",
            "“In order to be useful” 与原文的 “why some people get more out of their practice sessions than others” 虽同谈练习效果，但并未形成“每天练习才有效”的对应关系"
          ],
          "locatingTip": "定位：题干关键词 practice 与时间表达 every day，回原文找与练习时间安排相关的句子，落在第 6 段的 “roughly 20 hours a week for ten years”。确定答案技巧：原文给的是一周约 20 小时、持续十年，属于累计总量；题干说的是“必须每天（every day）规律进行”，属于对练习频次的具体要求。这类要求原文完全没有规定（20 小时可以集中在周末，也可以平摊到每天），作者既未要求也未反对，属于信息缺失，故判 NOT GIVEN。",
          "analysis": "第 6 段在提出一万小时法则后，给了一个便于理解的换算：“Someone would do this amount of practice if they practised, for example, roughly 20 hours a week for ten years.”（如果一个人每周练习约 20 小时、坚持十年，就能积累到这个练习量）。这句话只回答了两个问题：总量是多少（一万小时）以及如何换算（每周 20 小时乘以十年），并未规定练习必须如何分布。题干却加上了 must be carried out regularly every day（必须每天规律进行），把“累计时长”替换成“每日频次的硬性要求”。原文既没有说“必须天天练”，也没有说“不必天天练”，对这一条件毫无表态，因此判 NOT GIVEN。做题提示：凡是题干出现 must、only、every day 这类绝对化限定，而原文只给出总量、范围或举例时，优先考虑 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文只承诺总量与跨度（roughly 20 hours a week for ten years），从未提出“每天都要练”的必要条件；把“一周 20 小时”读成“必须每天练”，是自行添加了原文没有的限定。",
            "为什么不是 NO：原文没有说“不必要每天练”，也没有否认天天练习的作用，对这一话题完全未涉及，缺少相反信息，因此只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "Anyone who practises for long enough can reach the level of a world-class expert.",
          "translation": "任何练习时间足够长的人都能达到世界级专家的水平。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "this does not address why some people do not seem to get anywhere when they practise"
          },
          "synonyms": [
            "“Anyone who practises for long enough” 对应原文的 “some people … when they practise”，即练习者之中的任何人",
            "“can reach the level of a world-class expert” 与原文的 “do not seem to get anywhere”（毫无进展）形成直接冲突",
            "“Anyone … can” 的全称断言，与原文的让步句 “some people do not …” 构成矛盾"
          ],
          "locatingTip": "定位：题干关键词是练习时长与世界级专家水平，第 6 段结尾集中讨论一万小时法则的适用边界，其中的让步句就是判分点。确定答案技巧：题干是“任何人只要练得够久都能达到世界级”的全称判断，只要原文承认存在“练了却没进展”的人，该全称判断即被推翻。原文明确写道 “this does not address why some people do not seem to get anywhere when they practise”，说明练习时长并不是成就的充分条件，故判 NO。看到 anyone、all、always 这类全称词，务必回原文查找是否出现 some people do not 之类的例外表述。",
          "analysis": "第 6 段在肯定一万小时法则之后，作者主动补充了它的局限：“Of course, this does not address why some people do not seem to get anywhere when they practise, and why some people get more out of their practice sessions than others.”（当然，这并没有解释为什么有些人练了却似乎毫无进展，也没有解释为什么有些人能从同样的练习中获得更多）。这句话承认了两件事：其一是存在练而无效的人，其二是同样的练习量收益因人而异。题干却断言“任何练习足够久的人都能达到世界级专家水平（Anyone … can reach the level of a world-class expert）”，把练习时长当成充分条件，与前一句承认的例外直接冲突，因此判 NO。注意本段紧接的 “But no-one has yet found a case in which true world-class expertise was accomplished in less time.” 只是说明少于一万小时无法达成，属于必要条件方向的表述，不能反过来推出“够久就一定成功”。",
          "traps": [
            "为什么不是 YES：原文明确承认存在练了却没有进展的人（some people do not seem to get anywhere when they practise），因此“人人练够都能达到世界级”这一全称判断与原文相悖，不能选 YES。",
            "为什么不是 NOT GIVEN：原文对“练习时长是否足以保证成功”给出了明确表态（存在练而不成的情况），属于已经交代且与题干冲突的信息，不属于未提及。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "Occasionally, someone can become an expert at a global level with fewer than 10,000 hours' practice.",
          "translation": "偶尔有人能以少于一万小时的练习成为全球水平的专家。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "But no-one has yet found a case in which true world-class expertise was accomplished in less time."
          },
          "synonyms": [
            "“Occasionally, someone can become an expert at a global level” 同义替换为原文的 “a case in which true world-class expertise was accomplished”，expert at a global level 对应 world-class expertise",
            "“with fewer than 10,000 hours' practice” 同义替换为原文的 “in less time”，less time 承接上文所说的 ten thousand hours，即少于一万小时",
            "“Occasionally … can” 与原文的 “no-one has yet found a case” 构成矛盾：原文强调从未发现过例外"
          ],
          "locatingTip": "定位：题干关键词 10,000 hours 在原文以 ten thousand hours 出现（第 6 段），扫读数字即可定位；判分句紧随其后，即 “But no-one has yet found a case in which true world-class expertise was accomplished in less time.”。确定答案技巧：本题考“是否存在少于一万小时的例外”。原文用 no-one has yet found a case（至今无人发现过一例）加上 true world-class expertise，把话说得很绝对——一个反例都没有，因此“偶尔有人能做到”与原文相反，判 NO。注意不要把 yet 理解为“暂时性的暗示”，它在此只是加强“从未有过”的语气。",
          "analysis": "第 6 段给出法则后又收紧了边界：“But no-one has yet found a case in which true world-class expertise was accomplished in less time.”（但至今没有人发现过任何一例：真正的世界级专长是用更少时间达成的）。句中 less time 回指前文所说的一万小时，即“少于一万小时”；true 与 world-class 一起强调这里指的是货真价实的世界级水平。作者用 no-one … has yet found a case 表示在所有被研究过的案例（作曲家、滑冰者、钢琴家、棋手等）中都没有反例，随后还补了一句 It seems that it takes the brain this long to assimilate all that it needs to know to achieve true mastery，进一步说明一万小时是必要的时间。题干却说“偶尔有人（Occasionally, someone）能以更少时间达到全球水平的专家”，只要有一个反面例子就能成立，而原文恰恰否认存在这样的例子，因此判 NO。",
          "traps": [
            "为什么不是 YES：原文用 no-one has yet found a case（至今没有任何一例）表述得十分绝对，还补上 true world-class expertise 来限定，强调从未发现少于一万小时而达到世界级的情形，与题干的“偶尔有人能做到”正相反。",
            "为什么不是 NOT GIVEN：原文对“能否用更少时间达到世界级专长”给出了明确回答（至今没有发现这样的案例），属于已交代且与题干冲突的信息，不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "Existing knowledge of learning and cognitive skills supports the importance of practice.",
          "translation": "关于学习与认知技能的既有知识支持练习的重要性。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The ten-thousand-hour theory is consistent with what we know about how the brain learns."
          },
          "synonyms": [
            "“Existing knowledge of learning and cognitive skills” 同义替换为原文的 “what we know about how the brain learns”，即既有的学习机制知识",
            "“supports” 同义替换为原文的 “is consistent with”，表示两者相互吻合、彼此印证",
            "“the importance of practice” 对应原文的 “The ten-thousand-hour theory”，并在同段后文由 “increased practice leads to a greater number of neural traces” 进一步落实"
          ],
          "locatingTip": "定位：题干关键词 learning 与 practice 指向第 7 段——该段首句就以 “what we know about how the brain learns” 作为理论依据。确定答案技巧：作者用 is consistent with 表明一万小时理论与既有学习知识方向一致，段末又用 “increased practice leads to a greater number of neural traces, which create stronger memory representation” 说明练习量越大记忆表征越强，两处都在为“练习重要”提供依据，因此题干所述“既有知识支持练习的重要性”成立，判 YES。",
          "analysis": "第 7 段是一万小时理论的理论支撑段。首句即为本题定位句：“The ten-thousand-hour theory is consistent with what we know about how the brain learns.”（一万小时理论与我们对大脑如何学习的既有认识是一致的）。随后作者给出机制说明：学习需要在神经组织中同化并巩固信息（Learning requires the assimilation and consolidation of information in neural tissue）；对某一事物经历得越多，该经历的“记忆—学习痕迹”就越强；尽管人们在巩固信息所需的时间上存在差异，但有一点始终成立——“increased practice leads to a greater number of neural traces, which create stronger memory representation”（练习增加会带来更多神经痕迹，从而形成更强的记忆表征）。题干所说的“关于学习与认知技能的既有知识支持练习的重要性”，正是这句首句与段末机制的本意，故判 YES。判断这类题的要点是识别 consistent with 与 supports 的同义关系：the theory is consistent with what we know 等价于 what we know supports the theory，而该理论的核心正是练习的累积作用（increased practice …）。",
          "traps": [
            "为什么不是 NO：原文直接写道 the ten-thousand-hour theory is consistent with what we know about how the brain learns，并用 increased practice leads to a greater number of neural traces 落实练习与学习效果的正向关系，方向完全一致，没有任何矛盾。",
            "为什么不是 NOT GIVEN：原文不仅提到学习机制，还明确给出了它与一万小时理论之间的支撑关系（consistent with），作者的态度已经很明确，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 37–40 摘要填空（从词库 A–J 中选词）",
      "mode": "per_question",
      "questionRange": {
        "start": 37,
        "end": 40
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "However, the writer points out that the young Mozart received a lot of 37 ________ from his father,",
          "translation": "然而，作者指出年幼的莫扎特从父亲那里得到了大量的 ________，",
          "answer": "E",
          "wordClass": "名词（不可数，指（由他人给予的）教学指导；答案字母 E 对应词库中的 tuition）",
          "locating": {
            "paragraph": "8",
            "quote": "And Mozart had an expert teacher in his father, who was renowned as a teacher of musicians all over Europe."
          },
          "synonyms": [
            "“received a lot of tuition from his father” 同义替换为原文的 “Mozart had an expert teacher in his father”，即他的父亲本人就是他的老师",
            "“tuition” 对应原文的 “an expert teacher” 以及 “was renowned as a teacher of musicians all over Europe”，体现的是系统的教学而非泛泛的支持",
            "“a lot of” 体现在原文对父亲教学资历的双重强调（expert、renowned … all over Europe），说明莫扎特受过充分而专业的训练"
          ],
          "locatingTip": "定位：摘要的小标题是 Mozart，全文只有第 8 段专门讨论莫扎特，先跳到第 8 段；空格前是 received a lot of，需要一个名词，且必须能与 from his father 搭配。确定答案技巧：原文对应的句子是 “Mozart had an expert teacher in his father, who was renowned as a teacher of musicians all over Europe.”——父亲本人就是一位专家级教师、在欧洲各地以培养音乐家闻名，这正说明莫扎特从父亲那里得到了大量“教学（tuition）”。词库中 F encouragement（鼓励）虽也常与父母搭配，但原文强调的是 teacher/tuition 这类实质性训练，故选 E 而非 F。",
          "analysis": "第 8 段是全文的总结性反驳段。作者先引出常见质疑——“What about Mozart? I hear that he composed his first symphony at the age of four!”（那莫扎特呢？我听说他四岁就写下了第一部交响曲！），随后逐条回应。针对“莫扎特是不是不需要那么多练习的天才”，作者给出的第一条论据就是本题定位句：“And Mozart had an expert teacher in his father, who was renowned as a teacher of musicians all over Europe.”（莫扎特的父亲就是他的专家级老师，而他的父亲在欧洲各地以教授音乐家而闻名）。这句话说明莫扎特并非在无指导下靠天赋自发生长，而是一直接受着高水平的教学，因此摘要中“从父亲那里得到大量 tuition（教学指导）”成立，答案选 E。需要区分词库中的近义词：F encouragement 侧重情感鼓励，原文的落点是 teacher 与 renowned as a teacher（教学身份与教学声望），是明确的“教学”而非“鼓励”。",
          "traps": [
            "为什么不选 F（encouragement）：原文强调的是父亲的教学身份与教学声望（an expert teacher、renowned as a teacher of musicians all over Europe），落点在“教”而非“鼓励”；encouragement 只是情感支持，无法对应原文反复出现的 teacher 一词。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "and that the symphony he wrote at the age of 38 ________,",
          "translation": "他 ________ 岁时写的那部交响曲，",
          "answer": "D",
          "wordClass": "数词（基数词，表示年龄；答案字母 D 对应词库中的 eight）",
          "locating": {
            "paragraph": "8",
            "quote": "First, there is a factual error here: Mozart did not write it until he was eight."
          },
          "synonyms": [
            "“the symphony he wrote at the age of …” 对应原文的 “Mozart did not write it until he was eight”，其中 it 回指前文的 his first symphony",
            "“eight” 与原文数字直接对应；原文上一句引述的 four 是流传中的错误说法，作者随即更正"
          ],
          "locatingTip": "定位：摘要谈的是莫扎特写这部交响曲的年龄，第 8 段紧接着质问句就是更正数字的句子，用 factual error 与 until he was eight 即可锁定。确定答案技巧：原文先给出坊间流传的 four（四岁），随即以 “First, there is a factual error here: Mozart did not write it until he was eight.” 予以更正。题干问的是作者认可的年龄，必须取更正后的 eight，而不是被更正掉的 four；词库中 H four 与 D eight 成对出现，正是为此设的陷阱。",
          "analysis": "第 8 段的论述顺序是先破后立。作者先复述流传甚广的说法：“I hear that he composed his first symphony at the age of four!”（我听说他四岁就创作了第一部交响曲！），紧接着就拆掉这个前提：“First, there is a factual error here: Mozart did not write it until he was eight.”（首先，这里有一个事实错误：莫扎特直到八岁才写出这部作品）。这里的 it 指代前一句的 his first symphony，did not … until he was eight 即“直到八岁才写”。因此摘要中“他 ________ 岁时写的那部交响曲”应填作者认定的年龄八岁，对应选项 D eight。作答提示：摘要填空若出现“作者指出的”这类限定语（the writer points out），答案一律以作者更正常识后的表述为准，不要被前文引述的传闻数字带偏。",
          "traps": [
            "为什么不选 H（four）：four 出现在原文引述的传闻 “I hear that he composed his first symphony at the age of four!” 之中，作者随即用 First, there is a factual error here 明确否定了它，因此不能作为答案。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "was not 39 ________ and may be of only academic interest.",
          "translation": "并不 ________，而且可能只有学术上的意义。",
          "answer": "A",
          "wordClass": "形容词（作表语，说明作品的受欢迎程度；答案字母 A 对应词库中的 popular）",
          "locating": {
            "paragraph": "8",
            "quote": "However, this early work received little acclaim and was not performed very often."
          },
          "synonyms": [
            "“was not popular” 同义替换为原文的 “received little acclaim and was not performed very often”，little acclaim 即几乎没有好评，也就是不受欢迎",
            "“this early work” 与题干中的 “the symphony he wrote” 指同一部早期交响曲",
            "“may be of only academic interest” 是对原文这一评价的总结式转述，出自同一段的论述逻辑"
          ],
          "locatingTip": "定位：题干空格后紧接 and may be of only academic interest，与第 8 段对这部早期作品的评价在同一段落，找到 this early work 的评价句即可。确定答案技巧：原文用 received little acclaim（几乎没有获得赞誉）和 was not performed very often（很少被演奏）两个否定表达描述这部作品，正与词库 A popular 构成否定关系，即“不受欢迎（not popular）”，填入后与 not 连用读作 was not popular，语义通顺且与原文一致。用语法与语义双重排除：C completed 若填成 was not completed 与原意无关，B artistic 与“是否受欢迎”这一判断也搭不上。",
          "analysis": "第 8 段在纠正年龄之后，继续削弱“神童神话”：作者承认这部早期作品确实非同寻常，但紧接着指出 “However, this early work received little acclaim and was not performed very often.”（然而，这部早期作品几乎没有获得好评，也没有被频繁演奏）。下文又补了一刀：“In fact, the only reason we know about it is because the child who wrote it grew up to become Mozart.”（事实上，我们今天之所以知道它，只是因为写下它的孩子后来成了莫扎特）。这两句一起说明这部作品的“价值”多半来自作者后来的名声，而不是它当时的反响，这与摘要中“was not popular and may be of only academic interest（并不受欢迎，可能只有学术意义）”的总结完全吻合，故填 A popular。小结：判断这类题要抓住形容词在句中的语义方向——题干已给出 not，需要的是一个能与否定搭配、并在原文中找到对应否定的正面形容词。",
          "traps": [
            "为什么不选 C（completed）：原文讨论的是这部作品的反响（received little acclaim、not performed very often），从未涉及它是否被写完；“was not completed”与原文信息毫无对应。",
            "为什么不选 B（artistic）：artistic 修饰的是作品的性质，而原文的落点在作品受不受欢迎（acclaim、performed），填入后与 not 连用也无法与原文对应。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "The case therefore supports the view that expertise is not solely the result of 40 ________ characteristics.",
          "translation": "因此这个案例支持这样一种观点：专长并不仅仅是 ________ 特征的结果。",
          "answer": "G",
          "wordClass": "形容词（过去分词作定语，修饰 characteristics；答案字母 G 对应词库中的 inherited）",
          "locating": {
            "paragraph": "8",
            "quote": "This does not mean that there are no genetic factors involved in Mozart's greatness, but that inborn traits may not be the only cause."
          },
          "synonyms": [
            "“not solely the result of … characteristics” 同义替换为原文的 “may not be the only cause”，solely 对应 only，result 对应 cause，均表示“唯一成因”",
            "“inherited characteristics” 同义替换为原文的 “inborn traits” 与 “genetic factors”，inherited、inborn、genetic 都指与生俱来、遗传而来的属性"
          ],
          "locatingTip": "定位：摘要末句是对全文主旨的总结，对应第 8 段最后一句的结论，关键词是 genetic factors 与 inborn traits。确定答案技巧：原文说“这并不是说莫扎特的伟大中不存在遗传因素，而是说天生的特质可能并非唯一原因”，与题干“专长并非仅仅是某种特征的结果”完全同义，被 characteristics 修饰的就是 inherited（遗传的、天生的）。词库中 F encouragement、C completed 无法修饰 characteristics，B artistic 虽可搭配，但原文的对比焦点是 genetic/inborn 与练习，故选 G。",
          "analysis": "第 8 段在逐条回应“莫扎特例外论”之后，以本题定位句收束：“This does not mean that there are no genetic factors involved in Mozart's greatness, but that inborn traits may not be the only cause.”（这并不是说莫扎特的伟大中没有遗传因素，而是说与生俱来的特质可能并不是唯一的原因）。这里作者一方面承认遗传因素可能存在，另一方面强调它不是唯一成因——前面已经用父亲的教学（expert teacher）、可能的练习量（if he started at age two and worked thirty-two hours a week … he would have made his ten thousand hours）说明后天因素的作用。摘要末句 “expertise is not solely the result of ________ characteristics” 正是对这句的概括：not solely 对应 not … the only，与 characteristics 搭配的形容词来自 inborn traits / genetic factors，即 inherited（遗传的、天生承袭的），故填 G。这道题落在全文主旨上：作者既不否认天赋，也不认为天赋是专长的唯一来源。",
          "traps": [
            "为什么不选 B（artistic）：“艺术特征”与原文讨论的遗传与后天因素之争毫无关系；原文用来与练习相对照的正是 genetic factors 与 inborn traits。",
            "为什么不选 F（encouragement）：encouragement 是名词，无法修饰 characteristics（特征），且原文该处讨论的是先天的属性而非外界鼓励。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
