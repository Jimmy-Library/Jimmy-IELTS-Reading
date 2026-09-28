(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-128", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-128",
  "meta": {
    "examId": "p2-high-128",
    "title": "How Well Do We Concentrate_  多任务处理",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–18 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 18
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "a reference to a domestic situation that does not require multitasking",
          "translation": "提到一种不需要同时处理多项任务的家庭场景。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "When it rang, the housewife would sit down with her legs up and chat, with no laundry, sweeping or answering the door."
          },
          "synonyms": [
            "“a domestic situation” 同义替换为原文的 “the housewife … with no laundry, sweeping or answering the door”，用家庭主妇接电话的生活场景指代题干所说的“家庭情景”",
            "“does not require multitasking” 同义替换为原文的 “with no laundry, sweeping or answering the door”，即打电话时不必同时洗衣、扫地、应门，一次只做一件事",
            "同段 “the housewife would have to stop her activities to answer it” 中的 stop her activities（必须停下手里的活）进一步对应“不需要多任务处理”"
          ],
          "locatingTip": "定位：题干关键词是 domestic（家庭的）与 does not require multitasking（不需要同时做几件事）。全文只有 B 段出现 housewife、laundry、sweeping、answering the door 这类家务场景，其余段落谈的是日常习惯、科学实验或职场。确定答案技巧：段落信息匹配题找的是“意思对应”，不是原词复现。原文说老式挂墙电话一响，主妇必须停下手中的活去接（have to stop her activities），坐下把腿一翘打电话，期间没有洗衣、打扫、应门——也就是接电话这件事本身不允许同时做别的事，正好对应题干的 does not require multitasking，故选 B。",
          "analysis": "B 段讲科技（电脑、手机、无绳电话）如何让多任务处理变得普遍，其中用“过去的老式挂墙电话”作对比。定位句写道：“When it rang, the housewife would sit down with her legs up and chat, with no laundry, sweeping or answering the door.”（电话铃响时，家庭主妇会坐下来、把腿一翘打电话，期间没有洗衣、打扫或应门）。这句描述的是一个纯家庭场景（domestic situation）：housewife、laundry、sweeping、answering the door 都是家务词。句中 with no laundry, sweeping or answering the door 是“没有同时做别的事”的明确表述，与题干的 does not require multitasking 完全吻合；前一句 “the housewife would have to stop her activities to answer it” 更直接说明老式电话要求人停下手头所有活动，只做接电话这一件事。段末 “In the modern era, our technology is convenient enough not to interrupt our daily tasks.”（如今科技便利到不必打断我们的日常事务）则从反面补足：过去的电话必须打断别的事，因此不涉及多任务。答案 B。",
          "traps": [
            "为什么不是其他段落：A 段讲多任务现象与 Lehman 的“email voice”，C、D 段是两位科学家的脑实验，E 段谈注意力跨度与分心的成因，F 段给职场对策；只有 B 段出现 housewife、laundry、sweeping 这类纯家庭生活场景。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "a possible explanation of why we always multitask",
          "translation": "对人们为什么总是同时处理多项任务给出一种可能的解释。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "This short attention span might be natural, but others suggest that new technology may be the problem."
          },
          "synonyms": [
            "“a possible explanation” 同义替换为原文的 “might be natural” 与 “others suggest that new technology may be the problem”，might、suggest、may 都是表示推测与可能性的措辞",
            "“why we always multitask” 对应原文的 “This short attention span” 与 “people will never run out of distractions”，解释人为何不断回到多任务与分心状态",
            "“always” 对应原文的 “at all times”（时时刻刻），强调这种状态是常态"
          ],
          "locatingTip": "定位：题干问“为什么我们总是多任务”，属于原因解释类信息，抓手词是 possible explanation（可能的解释）。全文给出“成因”讨论的只有 E 段：Gloria Mark 先提出平均注意力跨度短可能是天性（might be natural），接着又说也有人认为是新科技造成的（new technology may be the problem）。两句都由 might、suggest、may 引导，语气是推测而非断言，与题干的 possible 精确对应，因此选 E。确定答案技巧：段落信息匹配里若题干含 possible / may / might 这类不确定性词，答案段落通常也带有同类情态词，抓住情态动词即可快速锁定。",
          "analysis": "E 段围绕“多任务处理让我们牺牲效率”展开，Gloria Mark 用办公室员工作为受试者，记录了频繁的分心与打断。定位句位于段落后半：“She suggested that the average person may suffer from a short concentration span. This short attention span might be natural, but others suggest that new technology may be the problem.”（她提出普通人的注意力跨度可能很短。这种短暂的注意力可能是天生的，但也有人认为新科技才是问题所在）。这里给出了两条“为什么总是多任务”的可能解释：一是生理性的短注意力跨度（might be natural），二是环境中的新科技（others suggest that new technology may be the problem），紧随其后的 “With cellphones and computers at our sides at all times, people will never run out of distractions.” 又具体说明手机与电脑让人永远不缺分心的诱因。题干用 a possible explanation（一种可能的解释）概括的正是这种推测性表述，因此答案锁定 E 段。",
          "traps": [
            "为什么不是其他段落：B 段只是陈述科技增加了多任务的发生频率（increases the occurrence of multitasking），属于现象描述而非成因解释；C、D 段是实验结论；F 段是解决办法；均没有“可能的解释”这一层推测性内容。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "a practical solution to multitasking in the work environment",
          "translation": "针对工作环境中的多任务处理提出的切实可行的解决办法。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "However, certain common workplace situations—such as group meetings—would be more efficient if we banned cellphones, a common distraction."
          },
          "synonyms": [
            "“a practical solution” 同义替换为原文的 “would be more efficient if we banned cellphones”，提出具体可行的做法",
            "“in the work environment” 同义替换为原文的 “certain common workplace situations”，workplace 与 work environment 同义",
            "“to multitasking” 对应原文的 “outside distractions and self-distractions” 与段末 “instead of slowing ourselves down with multitasking”，都是要解决的多任务分心问题"
          ],
          "locatingTip": "定位：题干的落脚点是 solution（解决办法），且限定在 work environment（工作环境）。全文只有 F 段在提建议：禁带手机、把一小时专门留给一项任务、用自我计时减少分心。确定答案技巧：注意原文先说 “the changes made to the workplace do not have to be dramatic”，再给出 “would be more efficient if we banned cellphones” 这一具体措施，措施落在 work 场景上，与题干的工作环境对策一一对应，故选 F。",
          "analysis": "F 段是全篇的收束段，先承认“只做一件事”虽最高效但在现实中不总是可行，随后转入可操作的对策。定位句：“However, certain common workplace situations—such as group meetings—would be more efficient if we banned cellphones, a common distraction.”（不过，某些常见的工作场合——例如小组会议——如果不允许带手机（一种常见的分心源），效率会更高）。句中 workplace situations、group meetings 把场景限定在工作环境，banned cellphones 是明确的解决措施，紧接着的 “A person can also apply these tips to prevent self-distraction.”（个人也可以运用这些方法避免自我分心）与段末 “Self-timing is a great way to reduce distraction and finish tasks one by one, instead of slowing ourselves down with multitasking.”（自我计时是减少分心、逐项完成任务的好办法，而不是让多任务拖慢自己）继续补充具体做法：把早上一小时专门留给一项任务等。这些都是可落地的 practical solution，因此答案 F。",
          "traps": [
            "为什么不是其他段落：E 段只描述问题（员工不断被打断、难以专注）而没有给出对策；C、D 段是实验；A、B 段是现象描述；只有 F 段给出“禁手机、留出一小时做一件事、自我计时”等具体做法。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "relating multitasking to the size of the prefrontal cortex",
          "translation": "把多任务处理与额叶前部皮层（prefrontal cortex）的大小联系起来。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Earl Miller, an expert at the Massachusetts Institute of Technology, studied the prefrontal cortex, which guides the brain while a person is multitasking. According to his studies, the size of this cortex varies between species."
          },
          "synonyms": [
            "“relating multitasking to the size of the prefrontal cortex” 同义替换为原文的 “studied the prefrontal cortex, which guides the brain while a person is multitasking” 加上 “the size of this cortex varies between species”",
            "“the size of the prefrontal cortex” 在原文中进一步用具体数据说明：“it constitutes one-third of the brain, whereas it is only 4 – 5 percent in dogs and about 15 percent in monkeys”",
            "“relating … to …” 对应原文的因果关系句 “Because this cortex is larger in humans, it allows a person to be more flexible and accurate in multitasking.”"
          ],
          "locatingTip": "定位：专有名词 prefrontal cortex（额叶前部皮层）在全文只在 C 段出现，出现即锁定。确定答案技巧：题干把“多任务处理”与“皮层大小”关联起来，回原文核对会发现三层信息都在 C 段：① 该皮层指导大脑进行多任务处理（guides the brain while a person is multitasking）；② 大小因物种而异（the size of this cortex varies between species），人类占三分之一、狗只有 4–5%、猴子约 15%；③ 因为人类这块皮层更大，所以在多任务时更灵活准确（more flexible and accurate in multitasking）。三层信息正好构成题干所说的“把多任务与皮层大小联系起来”，故选 C。",
          "analysis": "C 段介绍麻省理工专家 Earl Miller 对 prefrontal cortex（额叶前部皮层）的研究。定位句：“Earl Miller, an expert at the Massachusetts Institute of Technology, studied the prefrontal cortex, which guides the brain while a person is multitasking. According to his studies, the size of this cortex varies between species.”（MIT 专家 Earl Miller 研究了这块在大脑进行多任务处理时起指导作用的皮层。据其研究，这块皮层的大小因物种而异）。随后作者给出具体比例：“He found that for humans, it constitutes one-third of the brain, whereas it is only 4 – 5 percent in dogs and about 15 percent in monkeys.”（他发现对人类而言它占大脑的三分之一，狗只有 4–5%，猴子约 15%），并说明 “Because this cortex is larger in humans, it allows a person to be more flexible and accurate in multitasking.”（由于人类这块皮层更大，人才能在多任务处理时更灵活准确）。题干的三层信息——multitasking、the size of、the prefrontal cortex——在 C 段一一对应，因此答案 C。",
          "traps": [
            "为什么不是其他段落：D 段虽然也研究“同时做两件事”，但谈的是切换任务与耗时，完全没有出现 prefrontal cortex；A 段和后几段同样没有提及这块皮层的大小。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "more time spent doing two tasks at the same time than doing one task at a time",
          "translation": "同时做两项任务比一次只做一项任务花的时间更多。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Even though the participants tried to do the tasks at the same time and both tasks were eventually accomplished, overall the task took more time than if the person had focused on a single task."
          },
          "synonyms": [
            "“doing two tasks at the same time” 同义替换为原文的 “the participants tried to do the tasks at the same time”",
            "“more time spent” 同义替换为原文的 “overall the task took more time”，spent 与 took 同义",
            "“doing one task at a time” 同义替换为原文的 “if the person had focused on a single task”，a single task 与 one task at a time 对应"
          ],
          "locatingTip": "定位：题干的关键信息是“耗时对比”——同时做两件事比一次做一件事更花时间。全文只有 D 段出现这种比较结构 more time than。确定答案技巧：抓比较结构及其两个比较对象。“overall the task took more time than if the person had focused on a single task” 中，than 前是“同时做两项任务的耗时”，than 后是“专注单项任务的耗时”，与题干的 more time … than … 结构完全一致，故选 D。C 段说神经元“一次只点亮一处”，E 段说“更快但不等于更高效”，都不涉及与单任务相比耗时更长。",
          "analysis": "D 段记录密歇根大学教授 David Meyer 的实验：受试者一边解数学题，一边把简单单词分类。定位句为段末长句：“Even though the participants tried to do the tasks at the same time and both tasks were eventually accomplished, overall the task took more time than if the person had focused on a single task.”（尽管受试者试图同时完成两项任务，而且两项任务最终都完成了，但总体上这比把人专注于一项任务花的时间更多）。句中 at the same time（两件事同时）与 a single task（只做一件事）构成题干的比较双方，took more time 直接对应 more time spent，比较关系与题干完全一致。前一句 “Meyer found that when you think you are doing several jobs at the same time, you are actually switching between jobs.”（Meyer 发现，当你以为自己在同时做几份工作时，实际上是在多项工作之间来回切换）补充了机制——正因为要切换，才更耗时。因此答案 D。",
          "traps": [
            "为什么不是其他段落：C 段讲神经元“一次只点亮一处”，说的是大脑不能真正并行处理；E 段说多任务“更快但不等于更高效”，比较的是速度与效率而非“与单任务相比耗时更长”；只有 D 段给出“比专注单项任务花更多时间”的直接对比。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 19–23 人物观点匹配（Match each statement with the correct scientist, A–E）",
      "mode": "per_question",
      "questionRange": {
        "start": 19,
        "end": 23
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "When faced with multiple visual stimuli, one can only concentrate on one of them.",
          "translation": "面对多重视觉刺激时，人只能把注意力集中在其一之上。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "What he found was that the brain neurons lit up in singular areas one at a time—never simultaneously."
          },
          "synonyms": [
            "“one can only concentrate on one of them” 同义替换为原文的 “lit up in singular areas one at a time—never simultaneously”，即一次只在一处点亮、绝不并行",
            "“faced with multiple visual stimuli” 对应原文的 “he presented visual stimuli to his subjects in a way that mimicked multitasking”，multiple 对应实验里同时呈现的多重刺激",
            "“can only concentrate on one” 对应 A 段 “the brain can only focus on one task” 的同类表述（由 Lehman 提出、由 Miller 的实验证实）"
          ],
          "locatingTip": "定位：题干的核心是 visual stimuli（视觉刺激）与 one at a time（一次只能一个）。visual stimuli 只出现在 C 段 Miller 的实验描述中，锁定 C 段后找结果句即可。确定答案技巧：把题干拆成两层——刺激是“多个（multiple）”，结果是“只能处理一个（one at a time）”。原文先说 “he presented visual stimuli to his subjects in a way that mimicked multitasking”，随后给出实验结果 “the brain neurons lit up in singular areas one at a time—never simultaneously”，singular 与 never simultaneously 正是“只能专注其一、无法同时”的表达，实验出自 Earl Miller，故选 B。",
          "analysis": "C 段介绍 Earl Miller 的实验。他先让受试者面对视觉刺激，模拟多任务状态：“He designed an experiment in which he presented visual stimuli to his subjects in a way that mimicked multitasking.”（他设计了一项实验，用模拟多任务的方式向受试者呈现视觉刺激）；接着给受试者戴上传感器记录脑电活动：“Miller then attached sensors to the patients' heads to pick up the electrical patterns of the brain. These sensors would show whether the neurons were truly processing two different tasks.”（Miller 随后在受试者头部装上传感器以捕捉脑电模式，看神经元是否真的在同时处理两项不同任务）；最终结论就是定位句：“What he found was that the brain neurons lit up in singular areas one at a time—never simultaneously.”（他发现大脑神经元一次只在单个区域点亮，从未同时点亮）。singular（单一的）、one at a time（一次一个）、never simultaneously（从不并行）都说明大脑面对多重刺激时只能处理其一，与题干的 one can only concentrate on one of them 完全一致。该实验出自 Earl Miller，对应选项 B。",
          "traps": [
            "为什么不是 A（Thomas Lehman）：Lehman 只提出观点——人从来无法真正同时做两件事，并用“读文字会忽略音乐”“email voice”等日常现象说明，他没有做视觉刺激实验。",
            "为什么不是 C（David Meyer）：Meyer 的实验是让年轻人一边做数学题一边给单词分类，考察的是任务切换与耗时，实验材料不是视觉刺激，结论也不是“一次只点亮一处”。",
            "为什么不是 D（Gloria Mark）或 E（Edward Hallowell）：Gloria Mark 研究办公室员工被打断、自我分心的频率，Hallowell 谈职场效率损失，二者都不涉及视觉刺激与大脑反应。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "Doing two things together may be faster but not better.",
          "translation": "同时做两件事可能更快，但并不更好。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "She found that doing different jobs at the same time may actually save time. However, despite the fact that they are faster, it does not mean they are more efficient."
          },
          "synonyms": [
            "“may be faster” 同义替换为原文的 “may actually save time” 与 “they are faster”",
            "“but not better” 同义替换为原文的 “it does not mean they are more efficient”，better 对应 more efficient",
            "“doing two things together” 同义替换为原文的 “doing different jobs at the same time”"
          ],
          "locatingTip": "定位：题干的结构是“更快（faster）但不更好（not better）”，这是一个典型的让步加转折句式，回原文搜索 faster 一词即可，它只出现在 E 段。确定答案技巧：原文先说 “doing different jobs at the same time may actually save time”（同时做不同的工作可能确实省时间），紧接着用 However 转折 “despite the fact that they are faster, it does not mean they are more efficient”（尽管更快，但并不意味着效率更高），与题干的 faster but not better 一一对应；这段研究的执行者是 Gloria Mark（“Gloria Mark used office workers as her subjects.”），故选 D。注意区分本题与 David Meyer 的结论：Meyer 说的是“同时做两件事总耗时更长”，而 Gloria Mark 说的是“更快但不等于更高效”，方向不同，不要混为一谈。",
          "analysis": "E 段以 Gloria Mark 对办公室员工的研究为主体。相关句为：“She found that doing different jobs at the same time may actually save time. However, despite the fact that they are faster, it does not mean they are more efficient.”（她发现同时做不同的工作可能确实节省时间。然而，尽管他们更快，这并不意味着效率更高）。这里作者刻意做出让步与转折：承认多任务可能快（faster / save time），但否定它更好（not more efficient）。题干 “Doing two things together may be faster but not better.” 完全复制了这一对比：may be faster 对应 may actually save time 与 they are faster，but not better 对应 it does not mean they are more efficient。研究由 Gloria Mark 主持，对应选项 D。",
          "traps": [
            "为什么不是 C（David Meyer）：Meyer 的结论是总体耗时更长（took more time），并没有“更快但不更好”的让步表述，方向正好相反。",
            "为什么不是 B（Earl Miller）：Miller 研究的是神经元能否并行处理（一次只点亮一处），不涉及速度快慢与效率高低。",
            "为什么不是 A（Thomas Lehman）或 E（Edward Hallowell）：Lehman 强调人从未真正同时做两件事，Hallowell 强调职场因多任务而损失效率，都没有出现“更快但不更好”的对比。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "People never really do two things together even if you think you do.",
          "translation": "即使你以为自己在同时做两件事，人其实从未真正做到。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "However, Thomas Lehman, a researcher in psychology, believes people never really do multiple things simultaneously."
          },
          "synonyms": [
            "“never really do two things together” 与原文 “never really do multiple things simultaneously” 基本原词复现，two things 对应 multiple things，together 对应 simultaneously",
            "“even if you think you do” 同义替换为原文的 “When people think they are accomplishing two different tasks efficiently, what they are really doing is dividing their focus.”",
            "题干的 “even if you think you do” 还与 “Maybe a person is reading while listening to music, but in reality the brain can only focus on one task.” 中的 but in reality 形成对应"
          ],
          "locatingTip": "定位：题干含 never really do two things together 这样极具特征的表述，回原文搜索 never 即可，A 段首尾一带即出现原句，作者是人名 Thomas Lehman（心理学研究者）。确定答案技巧：本题几乎是原句复现，抓住人名 Thomas Lehman 与 simultaneously 一词即可判定选项 A。同时要注意题干第二层意思 “even if you think you do” 在原文中的落点：“When people think they are accomplishing two different tasks efficiently, what they are really doing is dividing their focus.”，作者明确说“当人以为自己高效完成两项任务时，实际上只是在分配注意力”，正对应“以为在同时做、其实并没有”。",
          "analysis": "A 段提出全文的核心争议。定位句：“However, Thomas Lehman, a researcher in psychology, believes people never really do multiple things simultaneously.”（然而，心理学研究者 Thomas Lehman 认为，人从未真正同时做多件事）。句中 never really、simultaneously 与题干 never really、two things together 高度重合。随后作者用例子展开：“Maybe a person is reading while listening to music, but in reality the brain can only focus on one task. Reading the words in a book will cause you to ignore some of the words of the music.”（也许一个人在边听音乐边读书，但实际上大脑只能专注于一项任务；读文字会让你忽略音乐中的某些词）；再以 “When people think they are accomplishing two different tasks efficiently, what they are really doing is dividing their focus.”（当人以为自己高效地完成了两项任务时，真正做的其实是分配注意力）对应题干“即使你以为你在同时做”。观点提出者 Thomas Lehman 对应选项 A。",
          "traps": [
            "为什么不是 D（Gloria Mark）：Gloria Mark 研究的是办公室员工被频繁打断、注意力跨度短，她不否认人能在同一时间做不同的事，反而说这样做可能省时间。",
            "为什么不是 B（Earl Miller）：Miller 用实验证明神经元一次只在一处点亮，是“不能并行”的实证，但题干中的观点表述（never really，属于论断而非实验结论）出自 Lehman。",
            "为什么不是 C（David Meyer）或 E（Edward Hallowell）：Meyer 的结论是人在多项工作间切换且更耗时，Hallowell 谈职场效率损失，均没有“人从未真正同时做两件事”这一总论断。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "The causes of multitasking lie in the environment.",
          "translation": "多任务处理的成因在于环境。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "This short attention span might be natural, but others suggest that new technology may be the problem. With cellphones and computers at our sides at all times, people will never run out of distractions."
          },
          "synonyms": [
            "“the environment” 同义替换为原文的 “cellphones and computers at our sides at all times”，即始终环绕在身边的设备环境",
            "“the causes of multitasking” 同义替换为原文的 “others suggest that new technology may be the problem” 与 “The format of media … is also shortening”，说明造成分心的原因来自外部环境",
            "“lie in” 对应原文的 “may be the problem”，都表示成因指向某处"
          ],
          "locatingTip": "定位：题干问成因落在何处，关键词是 environment（环境）。E 段在讨论“注意力短暂是天性还是科技所致”时，把可能的原因明确指向外部环境——身边的手机、电脑以及不断缩短的媒体形式。确定答案技巧：注意原文 “others suggest that new technology may be the problem” 与紧随其后的 “With cellphones and computers at our sides at all times, people will never run out of distractions.”，新科技、手机、电脑、广告与电视节目这些都是环境因素，而不是人的天性；本段的受试者与研究者是 Gloria Mark（“Gloria Mark used office workers as her subjects.”），故选 D。",
          "analysis": "E 段后半讨论多任务的成因。定位句：“This short attention span might be natural, but others suggest that new technology may be the problem. With cellphones and computers at our sides at all times, people will never run out of distractions.”（这种短暂的注意力可能是天性，但也有人认为新科技才是问题所在。由于手机和电脑时时刻刻都在我们身边，人们永远不会缺少让人分心的东西）。接着作者继续列举环境因素：“The format of media—such as advertisements, music, news articles and TV shows—is also shortening, so people are used to paying attention to information for a very short time.”（媒体形式——如广告、音乐、新闻文章和电视节目——也在变短，人们因此习惯于对信息只保持极短的注意力）。题干所说的 environment 正对应 cellphones、computers、new technology、media format 这些外部条件；把成因归到环境上的这一讨论出现在 Gloria Mark 的研究段落中，对应选项 D。",
          "traps": [
            "为什么不是 B（Earl Miller）：Miller 从大脑结构（prefrontal cortex 的大小）解释多任务能力，属于生理角度，不是环境因素。",
            "为什么不是 C（David Meyer）：Meyer 关注的是多任务时任务切换与耗时，属于认知机制，没有把成因归给外部环境。",
            "为什么不是 A（Thomas Lehman）或 E（Edward Hallowell）：Lehman 讨论的是人能否真正并行，Hallowell 讨论职场效率的损失与补救措施，都没有把多任务的成因归结为环境。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Even minor changes in the workplace will improve work efficiency.",
          "translation": "即使工作场所中很小的改变也能提升工作效率。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Edward Hallowell said that people are losing a lot of efficiency in the workplace due to multitasking, outside distractions and self-distractions. In fact, the changes made to the workplace do not have to be dramatic."
          },
          "synonyms": [
            "“minor changes” 同义替换为原文的 “do not have to be dramatic”，即改动不必很大、可以很小",
            "“improve work efficiency” 同义替换为原文的 “people are losing a lot of efficiency in the workplace” 的反面表述，以及 “would be more efficient if we banned cellphones”",
            "“in the workplace” 在原文中原词复现：“in the workplace”“workplace situations”"
          ],
          "locatingTip": "定位：题干的关键是“小幅改动就能提升职场效率”，而 F 段中由 Edward Hallowell 出面，先说职场效率因多任务与各种分心而大量流失，紧接着指出“改动不必很大（do not have to be dramatic）”，并给出禁带手机、预留一小时专做一件事等小举措。确定答案技巧：把题干拆成“minor changes”与“improve efficiency”两部分，原文的 do not have to be dramatic 对应前者，efficiency in the workplace 对应后者；观点归属者是 Edward Hallowell，故选 E。",
          "analysis": "F 段给出职场建议。定位句：“Edward Hallowell said that people are losing a lot of efficiency in the workplace due to multitasking, outside distractions and self-distractions. In fact, the changes made to the workplace do not have to be dramatic.”（Edward Hallowell 指出，由于多任务、外部干扰与自我干扰，人们在职场中损失了大量效率。事实上，工作场所的改动并不需要很大）。随后作者补充具体的小举措：“No one is suggesting we ban e-mail or make employees focus on only one task. However, certain common workplace situations—such as group meetings—would be more efficient if we banned cellphones, a common distraction.”（没有人主张禁止电子邮件或让员工一次只做一件事，但不让带手机——一个常见的分心源——就能让小组会议之类常见场合更高效），段末又给出“早上第一件事先花一小时专做一项任务”“自我计时”等做法。改动不必大（not dramatic）却能使工作更高效（more efficient），与题干 minor changes … improve work efficiency 严丝合缝；这一观点由 Edward Hallowell 提出，对应选项 E。",
          "traps": [
            "为什么不是 D（Gloria Mark）：Gloria Mark 在 E 段描述的是问题本身（员工每 11 或 12 分钟就被打断、超过 20 分钟专注就会感到不适），并指出罪魁是新科技与媒体形式，并没有提出“小幅改动即可提升效率”的职场建议。",
            "为什么不是 C（David Meyer）：Meyer 讨论任务切换导致的耗时增加，未涉及职场改动与效率提升。",
            "为什么不是 A（Thomas Lehman）或 B（Earl Miller）：Lehman 与 Miller 的研究对象是大脑能否并行处理任务，与工作场所的改善措施无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–26 句子填空（Complete the sentences. Choose NO MORE THAN TWO WORDS from the passage for each answer.）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 26
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "A term used to refer to a situation when you are reading a text and cannot focus on your surroundings is 24 ________.",
          "translation": "用来指代“你在读一条短信、因而无法注意到周围情况”这一情形的术语是 ________。",
          "answer": "email voice",
          "wordClass": "名词短语（术语名称，作句子表语；由两个词构成，符合 NO MORE THAN TWO WORDS 的限制，照原文小写书写，不加引号）",
          "locating": {
            "paragraph": "1",
            "quote": "Maybe they are listening to someone else talk, or maybe they are reading a text on their smartphone and don't hear what you are saying. Lehman called this phenomenon “email voice.”"
          },
          "synonyms": [
            "“reading a text” 同义替换为原文的 “reading a text on their smartphone”，原文明确说读的是手机上的文本",
            "“cannot focus on your surroundings” 同义替换为原文的 “don't hear what you are saying” 与上文 “people become less able to focus on their surroundings”",
            "“a term used to refer to a situation” 同义替换为原文的 “Lehman called this phenomenon”，called … phenomenon 即给某个情形命名"
          ],
          "locatingTip": "定位：题干里的 reading a text 与 focus on your surroundings 都能在第 1 段（A 段）找到；而题干问的是“术语/名称”，只需回原文找表示命名的动词 called 即可，A 段末句 “Lehman called this phenomenon “email voice.”” 就是唯一命名句。确定答案技巧：题干用 a term used to refer to a situation 提示答案是名称而非描述，所以定位到 called this phenomenon 后直接抄引号内的两个词 email voice；注意 NO MORE THAN TWO WORDS，答案恰好是两个词，不要多写 the 或 phenomenon；同时按原文形式小写书写，不必加引号。",
          "analysis": "A 段在解释“多任务者其实无法真正并行处理”时给出一个日常现象：人们与朋友说话时对方反应不正常，可能是因为他们在听别人说话，也可能是因为他们在看手机上的信息而没有听见你说的话。接下来一句即为命名：“Maybe they are listening to someone else talk, or maybe they are reading a text on their smartphone and don't hear what you are saying. Lehman called this phenomenon “email voice.””（也许他们在听别人讲话，也许他们在看手机上的短信而没有听见你说什么。Lehman 把这一现象称为“email voice”）。对照题干：a situation when you are reading a text 对应 reading a text on their smartphone，cannot focus on your surroundings 对应 don't hear what you are saying 以及本段前文的 “people become less able to focus on their surroundings”，a term used to refer to 对应 called this phenomenon，因此答案是 email voice。从词性看，空格在系动词 is 之后，需要名词或名词短语作表语；本答案是不可数概念的专有说法，由两个名词构成，直接照抄原文字形即可，不加冠词、不加引号。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "The 25 ________ part of the brain controls multitasking.",
          "translation": "大脑的 ________ 部位控制着多任务处理。",
          "answer": "prefrontal cortex",
          "wordClass": "名词短语（大脑部位名称，作 part 的定语；两个词，符合 NO MORE THAN TWO WORDS，照原文小写书写，不加定冠词 the）",
          "locating": {
            "paragraph": "3",
            "quote": "Earl Miller, an expert at the Massachusetts Institute of Technology, studied the prefrontal cortex, which guides the brain while a person is multitasking. According to his studies, the size of this cortex varies between species. He found that for humans, it constitutes one-third of the brain, whereas it is only 4 – 5 percent in dogs and about 15 percent in monkeys. Because this cortex is larger in humans, it allows a person to be more flexible and accurate in multitasking."
          },
          "synonyms": [
            "“controls multitasking” 同义替换为原文的 “which guides the brain while a person is multitasking” 与 “it allows a person to be more flexible and accurate in multitasking”",
            "“part of the brain” 同义替换为原文的 “the size of this cortex” 与 “it constitutes one-third of the brain”，cortex 即大脑的一个组成部分",
            "“The … part of the brain” 对应原文的 “a researcher … studied the prefrontal cortex, which guides the brain”"
          ],
          "locatingTip": "定位：题干的关键词是 brain 与 multitasking，以及表示控制关系的动词 controls。全文把“某一大脑部位”与 multitasking 直接联系起来的句子在 C 段开头：“Earl Miller … studied the prefrontal cortex, which guides the brain while a person is multitasking.”确定答案技巧：题干的 controls 对应原文的 guides（指导）与 allows a person to be more flexible and accurate in multitasking（使人更灵活准确地多任务）；该句中被研究、被描述功能的大脑部位就是 prefrontal cortex，两个词正好符合 NO MORE THAN TWO WORDS。填答时只写部位名，不要带上原文的定冠词 the，也不要写成 the prefrontal cortex。",
          "analysis": "C 段开头交代 Earl Miller 的研究对象：“Earl Miller, an expert at the Massachusetts Institute of Technology, studied the prefrontal cortex, which guides the brain while a person is multitasking.”（麻省理工专家 Earl Miller 研究了额叶前部皮层，这块皮层在人进行多任务处理时指导大脑）。同段随后用比例说明其大小（人类占大脑三分之一，狗 4–5%，猴子约 15%），并指出因为人类这块皮层更大，人才能在多任务处理中更灵活、更准确（more flexible and accurate in multitasking）。题干 “The … part of the brain controls multitasking.” 中的 brain 与 multitasking 都在该句出现，controls 与 guides、allows … in multitasking 对应，因此空格应填这块部位的名称 prefrontal cortex。词性上，空格位于定冠词 The 与 part of the brain 之间，需要名词或名词短语作 part 的限定成分；答案为两个词的名词短语，恰好落在 NO MORE THAN TWO WORDS 的上限内，且不应添加冠词。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "The practical solution to multitasking at work is not to allow the use of cellphones in 26 ________.",
          "translation": "解决工作中多任务处理的可行办法是：在 ________ 中不允许使用手机。",
          "answer": "group meetings",
          "wordClass": "名词短语（复数，指工作中的某种会议场合；位于介词 in 之后作介词宾语，与 in 一起构成地点状语，两个词，符合 NO MORE THAN TWO WORDS）",
          "locating": {
            "paragraph": "6",
            "quote": "However, certain common workplace situations—such as group meetings—would be more efficient if we banned cellphones, a common distraction."
          },
          "synonyms": [
            "“not to allow the use of cellphones” 同义替换为原文的 “if we banned cellphones”，banned 即不允许使用",
            "“the practical solution to multitasking at work” 同义替换为原文的 “would be more efficient”，即通过禁手机提高效率",
            "“in …” 对应原文 “such as group meetings” 所列举的具体场合，介词 in 之后需要表示场合的名词短语"
          ],
          "locatingTip": "定位：题干中的 cellphones 与 workplace 场景把范围锁定在末段：F 段提出“禁止在小组会议等场合使用手机”的做法。确定答案技巧：题干把原文的条件句 “would be more efficient if we banned cellphones” 改写成 “is not to allow the use of cellphones in …”，因此空格要填的是“禁手机”这一步所适用的场合。原文用 such as 引出例子 group meetings，它就是 workplace situations 的具体所指，两个词也符合 NO MORE THAN TWO WORDS，故填 group meetings；注意用复数形式，与原文一致。",
          "analysis": "F 段在讨论职场如何减少多任务与分心时写道：“However, certain common workplace situations—such as group meetings—would be more efficient if we banned cellphones, a common distraction.”（然而，某些常见的工作场合——例如小组会议——如果不允许带手机（一种常见的分心源），效率会更高）。题干 “The practical solution to multitasking at work is not to allow the use of cellphones in 26 …” 正是把这一条件句改写为陈述句：not to allow the use of cellphones 对应 banned cellphones，the practical solution 对应 would be more efficient，唯一剩下的信息就是禁手机所适用的场合，也就是破折号中间插入的 group meetings。词性上看，空格在介词 in 之后、句末句号之前，需要名词或名词短语；原文以复数出现 group meetings，属于“某种常见的工作场合”，因此按原文填写 group meetings，不要写成单数 group meeting，也不要带冠词或写成 meetings。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
