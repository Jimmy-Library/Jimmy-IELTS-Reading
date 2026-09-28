(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-medium-1827", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-medium-1827",
  "meta": {
    "examId": "p3-medium-1827",
    "title": "The Rise of Big Data 大数据的崛起",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 选择题（四选一）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q27",
          "questionNumber": 27,
          "stem": "What does the passage suggest is the main difference between the Internet and Big Data?",
          "translation": "文章暗示互联网与大数据之间的主要区别是什么？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "Unlike the Internet, which connects people and enables communication, Big Data connects data to other data."
          },
          "synonyms": [
            "“the Internet … connects people” 对应原文的 “the Internet, which connects people and enables communication”，说明互联网的作用是把人与人连接起来、便于沟通",
            "“Big Data connects data to other data” 与原文用词完全一致，原文正是 “Big Data connects data to other data”",
            "“the main difference between the Internet and Big Data” 对应原文的对比句式 “Unlike the Internet … Big Data …”，Unlike 一词本身就点明了两者之间的差异",
            "“communication” 在原文中对应的表达是 “enables communication”，题干仅把两个功能并列对照，未改变原意"
          ],
          "locatingTip": "定位：题干中的两个大写专有名词 Internet 和 Big Data 在第 A 段第 3 句同时出现，而且该句以 Unlike 开头，是全文唯一一处把互联网与大数据直接对照的句子，扫读到 Unlike 就可以停下精读。确定答案技巧：对比句的判分点在于 Unlike 之后两半各自陈述了什么。原文前半说互联网 “connects people and enables communication”（连接人、实现沟通），后半说大数据 “connects data to other data”（把数据与其他数据连接起来）。选项 B 把这两半原封不动地搬进题干，措辞与原文一致，所以是正解。",
          "analysis": "第 A 段是本篇的定义段，作者用一句话给大数据定性并顺势与互联网作对比：“Unlike the Internet, which connects people and enables communication, Big Data connects data to other data.”（与连接人与人、便于沟通的互联网不同，大数据连接的是数据与其他数据）。这句对比包含两个信息点：一是互联网的核心功能 connects people，二是大数据的核心功能 connects data to other data。题干的落点是“互联网与大数据之间的主要差别”，选项 B 完整复现这两个信息点，属于原文原词复现型答案。本题的解题要害是识别 Unlike 这一对比信号词——雅思选择题常把 Unlike / In contrast / whereas 之后的两个分句直接拆成选项，只要找准信号词，答案几乎不需要额外推理。另外要注意题干问的是 main difference（主要差别），原文这句正是开篇之后作者给出的第一条区分性论述，与“主要”二字吻合。",
          "traps": [
            "为什么不是 A：原文从未比较两者的新旧或成熟程度，全篇没有出现 older、more established 之类关于出现时间先后的表述，选项 A 属于无中生有。",
            "为什么不是 C：原文提到互联网的用途是 “connects people and enables communication”（连接和沟通），而大数据的用途是连接数据、做出预测（“transforms scattered fragments of digital information into meaningful patterns, predictions, and insights”），并没有说大数据只是用来“存储（storage）”；事实上存储只是第 A 段列举的数据处理环节之一，不能代表大数据的功能，属于张冠李戴。",
            "为什么不是 D：原文说大数据把分散的数字信息转化为有意义的模式与预测，并称 “nearly every human activity leaves a digital trace”，说明其应用范围极其广泛，第 B 段又举出流感追踪、信用卡反欺诈、城市交通规划等多个领域，与选项 D 所说的“局限于特定应用（limited to specific applications）”正相反。"
          ]
        },
        {
          "questionId": "q28",
          "questionNumber": 28,
          "stem": "According to the passage, what makes it possible to track the spread of influenza using Google?",
          "translation": "根据文章，是什么让谷歌能够追踪流感的传播？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "Google can track the spread of influenza by monitoring search terms related to flu symptoms, providing results that are faster and sometimes more accurate than those collected by public health agencies."
          },
          "synonyms": [
            "“makes it possible to track … using Google” 对应原文的 “Google can track the spread of influenza”，can 表示“能够做到”，与 makes it possible 同义",
            "“Monitoring search terms related to flu symptoms” 与原文的 “by monitoring search terms related to flu symptoms” 用词一致，by 引出实现追踪的手段",
            "“the spread of influenza” 在原文中以原词复现：the spread of influenza"
          ],
          "locatingTip": "定位：题干的核心专有名词是 Google，全文只在第 B 段第 5 句出现一次，直接跳到该段即可；同句还有 influenza 与 flu symptoms，都是很好认的词。确定答案技巧：题干问的是“什么使得追踪成为可能”，对应原文由 by 引出的方式状语。原文写 “Google can track the spread of influenza by monitoring search terms related to flu symptoms”，by 之后的内容就是手段，即通过监测与流感症状相关的搜索词，与选项 B 逐词对应，故选 B。注意题干用的是动名词 monitoring 起头的名词性短语，与原文的介词短语结构不同但所指相同。",
          "analysis": "第 B 段讲大数据如何改变社会研究：过去靠小样本问卷，如今可以实时分析整个人群，随后用三个例子加以说明。本题落在第一个例子：“For example, Google can track the spread of influenza by monitoring search terms related to flu symptoms, providing results that are faster and sometimes more accurate than those collected by public health agencies.”（例如，谷歌可以通过监测与流感症状相关的搜索词来追踪流感的传播，其结果比公共卫生机构收集的更快速、有时也更准确）。句中 by monitoring search terms related to flu symptoms 就是“能够追踪”的手段，题干把这个手段改写成一个 what 引导的疑问，答案仍是同一件事，即选项 B。另外，句末提到公共卫生机构收集的结果只是用来作对比，说明大数据更快更准，而不是追踪所依赖的手段，这一点是排除选项 A 的关键。",
          "traps": [
            "为什么不是 A：原文末句的 “those collected by public health agencies” 是拿来与谷歌结果作对比的参照物（比公共卫生机构的结果更快、有时更准确），而不是谷歌追踪流感所依据的数据来源；选项 A 把被比较的对象误当成方法，属于因果错位。",
            "为什么不是 C：原文中 GPS movements 的确出现过，但位置在第 A 段列举数据痕迹时（“GPS movements”）以及第 B 段讲城市交通规划时（“data from mobile phones and GPS devices can reveal how people move through cities”），与流感追踪无关；而且原文说的是人们的位置移动数据帮助规划交通，并非“感染者的移动轨迹”，选项 C 属于跨段信息拼贴。",
            "为什么不是 D：credit card transactions 出现在原文紧接的下一句，讲的是信用卡公司比对交易识别欺诈（“detect fraud within seconds by comparing a transaction against millions of others”），与流感追踪属于两个并列的独立例子，选项 D 把下一个例子的内容安到流感上，属于邻句干扰。"
          ]
        },
        {
          "questionId": "q29",
          "questionNumber": 29,
          "stem": "What concern about privacy is raised in the passage?",
          "translation": "文章提出了关于隐私的什么担忧？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Data that seems anonymous can often be re-identified when combined with other datasets."
          },
          "synonyms": [
            "“concern about privacy” 对应原文的 “One of the most pressing concerns is privacy”，concern 一词原样复现",
            "“Data that seems anonymous can often be re-identified” 与原文用词一致：原文即 “Data that seems anonymous can often be re-identified when combined with other datasets”",
            "“can often be re-identified” 与题干选项中的情态与频率副词 can often 完全对应，说明这是原文陈述的可能性而非绝对断言"
          ],
          "locatingTip": "定位：题干关键词 privacy 在第 C 段第 2 句出现（“One of the most pressing concerns is privacy”），该段紧接着给出具体担忧，本句即答案句，扫读时只要锁定 privacy 所在段落精读即可。确定答案技巧：题干问“文中提出了什么隐私担忧”，要在原文找对隐私的具体论述。原文说“看似匿名的数据在与其他数据集合并后常常可以被重新识别”，并进一步说研究者仅凭年龄、性别、邮编等少量数据点就能从匿名数据中认出个人。选项 A 即 “Data that seems anonymous can often be re-identified”，是原文原句，故选 A。",
          "analysis": "第 C 段是全篇的伦理讨论段，先点出最紧迫的担忧是隐私：“One of the most pressing concerns is privacy. In a world where every action is recorded and stored, the concept of personal privacy becomes increasingly difficult to maintain.” 随后给出具体机制：“Data that seems anonymous can often be re-identified when combined with other datasets.”（看似匿名的数据，在与其他数据集结合后往往可以被重新识别出来）。下一句紧接着用研究证据支撑：“Researchers have demonstrated that it is possible to identify individuals from anonymized data using just a few data points, such as their age, gender, and zip code.”（研究者已经证明，仅凭年龄、性别、邮编等少量数据点就能从匿名数据中识别出个人）。题干问的隐私担忧，对应的正是“匿名数据可被重新识别”这一条，选项 A 与原文原句一致，毫无改写痕迹。做题时要注意本段末尾还提到 fears of surveillance, manipulation, and discrimination，这些是隐私风险带来的后果列举，不是对隐私问题的具体机制描述，因此不要被这些词带偏。",
          "traps": [
            "为什么不是 B：原文说 “Companies and governments now possess more information about individuals than at any other time in history”，即政府与企业掌握的个人信息比历史上任何时期都多，与选项 B 所说的“政府已停止收集个人信息”完全相反，属于事实相反项。",
            "为什么不是 C：同上，原文明确说企业拥有的个人信息空前之多（more information … than at any other time in history），并且 “In a world where every action is recorded and stored”，一切都还在被记录和存储，选项 C 的“公司不再存储个人数据”与原文直接矛盾。",
            "为什么不是 D：原文通篇讨论的是大数据带来的隐私泄露风险，从未提到隐私法律使数据分析变得不可能；文中只出现 “Privacy, fairness, transparency, and accountability are not technical issues” 一句，是说隐私等属于社会政治议题，并未涉及法律禁止数据分析，选项 D 属于无中生有。"
          ]
        },
        {
          "questionId": "q30",
          "questionNumber": 30,
          "stem": "Why does the passage argue that Big Data is not necessarily objective?",
          "translation": "文章为什么认为大数据未必是客观的？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "However, the data itself is shaped by human choices: what to collect, how to categorize it, and which questions to ask."
          },
          "synonyms": [
            "“not necessarily objective” 与原文的 “Big Data is often assumed to be objective because it is based on numbers rather than human judgment. However, the data itself is shaped by human choices” 构成直接的反驳关系：原文先摆出“被认为客观”的看法，再用 However 转折否定",
            "“human choices” 在原文原样复现：“the data itself is shaped by human choices”",
            "“shape what data is collected and how it is interpreted” 同义替换为原文的 “what to collect, how to categorize it, and which questions to ask” 以及末句的 “data always speaks through the lens of those who collect and interpret it”",
            "“interpreted” 对应原文末句的动词 interpret：“those who collect and interpret it”"
          ],
          "locatingTip": "定位：题干关键词 objective 在第 D 段第 2 句出现（“Big Data is often assumed to be objective”），答案就在紧接的转折句里，抓住 However 这一转折信号词即可锁定。确定答案技巧：题干问“为什么说大数据未必客观”，原文先承认常有人假设它客观（因为基于数字而非人的判断），再用 However 给出反驳——数据本身是被人的选择塑造的：收集什么、如何分类、问什么问题。选项 B 把这三项选择概括为“人类的选择决定了收集什么数据、如何解读数据”，与原文的反驳逻辑一致，故选 B。",
          "analysis": "第 D 段讨论偏见问题，行文结构是先立后破。第 2 句先给出通常的看法：“Big Data is often assumed to be objective because it is based on numbers rather than human judgment.”（大数据常被认为是客观的，因为它基于数字而不是人的判断）。第 3 句用 However 立刻转折：“However, the data itself is shaped by human choices: what to collect, how to categorize it, and which questions to ask.”（然而数据本身是被人的选择塑造的：收集什么、如何归类、提出哪些问题）。第 4 句进一步推论：“If these choices reflect existing prejudices, the resulting analysis will simply reproduce those prejudices at a larger scale.”（如果这些选择反映了既有的偏见，那么分析结果只会把这些偏见以更大的规模复制出来）。段末再用一句话收束：“The idea that data speaks for itself is a myth; data always speaks through the lens of those who collect and interpret it.”（数据自己会说话的说法是个迷思；数据总是通过收集者和解读者的视角说话）。可见作者否定“客观”的理由落在人的选择这一环上，选项 B 正是对该论点的准确概括。本题的解法是抓 However 之后的论点句，而不是 However 之前的常识句——很多考生误选是因为只读到“基于数字”就下了结论。",
          "traps": [
            "为什么不是 A：原文说大数据基于数字（“it is based on numbers rather than human judgment”），但作者并未否定数字本身的可靠性，他的反驳点是数据被谁收集、如何归类，即人的选择介入；选项 A 说“数字总是不可靠”，把攻击对象从数据来源的选取错移到数字本身，属于论点错位。",
            "为什么不是 C：原文完全没有提到计算机在分析中出错，全段的关键词是 human choices（人的选择）和 prejudices（偏见），不是技术错误；选项 C 属于无中生有。",
            "为什么不是 D：原文说的是人的选择可能反映既有偏见（“If these choices reflect existing prejudices”），偏见来自数据收集与解读环节的人为选择，而不是选项 D 所说的“统计方法本身固有偏见”；把偏见归因于统计方法属于扩大并歪曲原文的归因对象。"
          ]
        },
        {
          "questionId": "q31",
          "questionNumber": 31,
          "stem": "What limitation of focusing on correlation rather than causation is mentioned?",
          "translation": "文中提到了只关注相关性而非因果关系所带来的什么局限？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Correlations can be spurious, leading to false conclusions."
          },
          "synonyms": [
            "“limitation” 对应原文的 “However, it also has limitations.”",
            "“focusing on correlation rather than causation” 对应原文的 “Big Data, by contrast, often focuses on correlation. It can tell us that two things are related, but not why.”",
            "“can be spurious and lead to false conclusions” 与原文 “Correlations can be spurious, leading to false conclusions” 用词一致，仅把分词短语改写成并列谓语",
            "“interventions based on correlations may fail or even backfire” 是原文给出的进一步后果说明，同属局限性这一层"
          ],
          "locatingTip": "定位：题干关键词 correlation 与 causation 集中在第 E 段，段落先讲科学长期追求因果、大数据偏重相关，再在段末列举这种转向的局限，扫读时找到 limitations 一词即可锁定答案句。确定答案技巧：题干问的是“只关注相关性而非因果”的局限，原文对应句是 “Correlations can be spurious, leading to false conclusions.”，其中 spurious 指“虚假的、伪相关”，leading to false conclusions 即导致错误结论。选项 B 把原文的分词结构改写为两个并列谓语 “can be spurious and lead to false conclusions”，意思完全一致，故选 B。",
          "analysis": "第 E 段讨论大数据对因果观念的挑战。段落先交代背景：“For centuries, science has sought to understand the world by identifying cause-and-effect relationships. Big Data, by contrast, often focuses on correlation. It can tell us that two things are related, but not why.”（几个世纪以来，科学一直通过确定因果关系来理解世界；相比之下，大数据常常关注相关性，它能告诉我们两件事有关联，却不能说明为什么）。随后作者既讲好处也讲代价：“This shift from 'why' to 'what' has practical benefits. Businesses can use correlations to predict consumer behavior without understanding the underlying reasons. However, it also has limitations.”（这种从“为什么”到“是什么”的转向有实际好处，企业无需了解深层原因就能用相关性预测消费者行为；然而它也有局限）。紧接着的局限句就是本题的答案句：“Correlations can be spurious, leading to false conclusions. Without an understanding of causation, interventions based on correlations may fail or even backfire.”（相关性可能是虚假的，会导向错误结论；若不理解因果关系，基于相关性做出的干预可能失败甚至适得其反）。题干的 limitation 直接对应原文的 limitations，选项 B 则是答案句的同义改写。破解本题的关键是分清段落里“好处”与“局限”的分界：practical benefits 之后的内容属于优点，However 之后的内容才属于缺点，答案只在后半部分。",
          "traps": [
            "为什么不是 A：原文恰好相反，作者明说相关性会误导 “Correlations can be spurious, leading to false conclusions”，spurious 意为虚假的、站不住脚的；选项 A 说相关性总是准确可靠，与原文直接对立，也与题干问的“局限”这一负面立场不符。",
            "为什么不是 C：原文从未讨论计算机计算相关性是否困难，相反说这种做法带来实际好处（“Businesses can use correlations to predict consumer behavior”），说明计算上并无障碍；选项 C 属于无中生有。",
            "为什么不是 D：选项 D 说“相关性需要理解深层原因”，这与原文陈述刚好相反——原文强调的是大数据可以 “without understanding the underlying reasons” 就预测行为，并且指出缺乏对因果的理解正是隐患所在；把“需要理解”当成局限，是把原文的因果关系倒转，属于典型的逻辑反置。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–36 摘要填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 36
      },
      "items": [
        {
          "questionId": "q32",
          "questionNumber": 32,
          "stem": "Big Data has transformed how we understand society by allowing researchers to analyze entire 32 ________ in real time, rather than relying on small samples.",
          "translation": "大数据改变了我们理解社会的方式，它让研究者能够实时分析整个 ________，而不必依赖小样本。",
          "answer": "populations",
          "wordClass": "名词（复数形式；空格前有形容词 entire 修饰，作不定式 analyze 的宾语，指被分析的整个人群，原文用复数 populations）",
          "locating": {
            "paragraph": "B",
            "quote": "With Big Data, it is possible to analyze entire populations in real time."
          },
          "synonyms": [
            "“allowing researchers to analyze” 同义替换为原文的 “it is possible to analyze”，原文用 it is possible 表示“可以做到”，题干改为动名词 allowing 结构",
            "“entire 32 ________” 与原文 “entire populations” 逐字对应，形容词 entire 原样保留",
            "“rather than relying on small samples” 对应原文上一句的 “researchers relied on small samples, surveys, and questionnaires”，题干用 rather than 把过去的做法转成对比"
          ],
          "locatingTip": "定位：先看摘要首句的语境，它讲的是大数据对社会研究的改变，关键词 entire 和 in real time 都指向第 B 段前半部分；回原文找到 “analyze entire populations in real time” 即可锁定。确定答案技巧：空格前是形容词 entire，后有介词短语 in real time 和 rather than relying on small samples，补全后必须与 entire 搭配并符合“被分析的对象”这一角色。原文对应句为 “With Big Data, it is possible to analyze entire populations in real time.”，宾语就是 populations（整个人群），把过去 small samples（小样本）与现在 entire populations（全部人口）对照起来，逻辑完全吻合，故填 populations。",
          "analysis": "第 B 段开头是本篇社会意义的核心论述：“This transformation has profound implications for how we understand society. In the past, researchers relied on small samples, surveys, and questionnaires to draw conclusions about human behavior. These methods were slow, expensive, and often inaccurate. With Big Data, it is possible to analyze entire populations in real time.”（这种转变深刻影响我们理解社会的方式。过去研究者依靠小样本、调查和问卷来推断人类行为，这些方法缓慢、昂贵且常常不准确；有了大数据，就可以实时分析整个人群）。摘要把这段的两半压缩成一句，用 rather than relying on small samples 保留了原文的对照信息，空格处正是原文的宾语 populations。词性上，空格前有 entire 修饰，说明要填一个可数名词的复数形式（若为单数则 entire 后常需 a）；从语意看，被实时分析的是“整个人群”，而不是 sample、data 或 society——society 虽在前一句出现，但它是被理解的对象而非被分析的数据集合，填 society 既不符合 entire 的搭配习惯，也无法与 rather than small samples 形成数量上的对照。因此答案是 populations。",
          "traps": []
        },
        {
          "questionId": "q33",
          "questionNumber": 33,
          "stem": "Credit card companies use Big Data to detect 33 ________ within seconds by comparing transactions against millions of others.",
          "translation": "信用卡公司利用大数据，通过把一笔交易与数百万笔其他交易进行比对，在几秒内检测出 ________。",
          "answer": "fraud",
          "wordClass": "名词（不可数名词，作动词 detect 的宾语，指信用卡欺诈行为，原文用单数不可数形式 fraud）",
          "locating": {
            "paragraph": "B",
            "quote": "Similarly, credit card companies can detect fraud within seconds by comparing a transaction against millions of others to identify patterns that deviate from the norm."
          },
          "synonyms": [
            "“use Big Data to detect” 同义替换为原文的 “credit card companies can detect”，原文用 can 表示“能够”，题干改为 use Big Data to 的目的结构",
            "“within seconds” 与原文完全一致：detect fraud within seconds",
            "“by comparing transactions against millions of others” 与原文的 “by comparing a transaction against millions of others” 仅单复数之别，比对方式信息一致"
          ],
          "locatingTip": "定位：摘要第二句的关键词是 Credit card companies，这是第 B 段第二个例子（“Similarly, credit card companies can detect fraud within seconds …”），扫读时用专有名词性质的信用卡公司与 within seconds 组合定位，一步到位。确定答案技巧：题干的结构是 detect 加空格，即要找 detect 的宾语。原文对应句 “credit card companies can detect fraud within seconds by comparing a transaction against millions of others” 中，detect 后面紧跟的宾语就是 fraud（欺诈），后面的 by comparing … 是方式状语，与摘要里的 by comparing transactions against millions of others 完全对应，两句衔接一致，故填 fraud。",
          "analysis": "第 B 段用三个 “Similarly / For example” 引出的例子证明大数据的实际威力，第二个例子即本题出处：“Similarly, credit card companies can detect fraud within seconds by comparing a transaction against millions of others to identify patterns that deviate from the norm.”（同样，信用卡公司可以在几秒内识别出欺诈，办法是把一笔交易与数百万笔其他交易比对，找出偏离常规的模式）。摘要保留了 Credit card companies、within seconds、comparing … against millions of others 这些标志性信息，只把 detect 的宾语挖空，因此答案就是 fraud。需要注意原文用的是单数不可数形式 fraud，不能写成 frauds，也不能误填 crime（犯罪）或 transaction（交易）——transaction 是比对的对象而非被检测出的结果；原文的 to identify patterns that deviate from the norm 说的是识别异常模式，这是手段的延伸而非 detect 的直接宾语，所以答案确定为 fraud。",
          "traps": []
        },
        {
          "questionId": "q34",
          "questionNumber": 34,
          "stem": "In urban planning, data from mobile phones and GPS devices helps planners design more efficient 34 ________ systems.",
          "translation": "在城市规划中，来自手机和 GPS 设备的数据帮助规划者设计更高效的 ________ 系统。",
          "answer": "transport",
          "wordClass": "名词（在此作前置定语修饰 systems，表示“交通的”，原文为名词连用的固定搭配 transport systems，不加复数、不加所有格）",
          "locating": {
            "paragraph": "B",
            "quote": "data from mobile phones and GPS devices can reveal how people move through cities, helping planners design more efficient transport systems"
          },
          "synonyms": [
            "“In urban planning” 对应原文的 “In the realm of urban planning”，题干省略了 realm of",
            "“helps planners design more efficient” 同义替换为原文的 “helping planners design more efficient”，原文用现在分词作结果状语，题干改为谓语动词 helps",
            "“34 ________ systems” 与原文 “transport systems” 完全对应，空格承担 systems 的前置定语"
          ],
          "locatingTip": "定位：摘要第三句的定位词是 urban planning 与 mobile phones and GPS devices，二者同时出现在第 B 段末尾的城市规划例子里，是本段最后一个例子，扫到 urban planning 即可确定段落并定位到末句。确定答案技巧：空格在 systems 之前，说明要填一个修饰 systems 的成分，且必须与“规划者设计更高效的什么系统”这一语境吻合。原文对应部分为 “helping planners design more efficient transport systems”，其中 more efficient 与题干的 more efficient 一字不差，后面的名词短语 transport systems 就是答案，故填 transport。",
          "analysis": "第 B 段第三个例子讲大数据在城市规划中的应用：“In the realm of urban planning, data from mobile phones and GPS devices can reveal how people move through cities, helping planners design more efficient transport systems.”（在城市规划领域，来自手机和 GPS 设备的数据可以揭示人们如何在城市中移动，从而帮助规划者设计更高效的交通系统）。摘要把这句话压缩为一句，保留了 urban planning、mobile phones and GPS devices、more efficient 等标志词，只把 systems 前面的定语挖空。这个空格的语法提示非常明确：systems 是复数名词，其前通常需要形容词或名词作定语，而原文恰好用的是名词连用的固定搭配 transport systems（交通系统），因此答案只能是 transport。答题时不要写成 transportation（词形与原文不符），也不要错填 efficiency 或 movement 之类的抽象词——它们虽然在同段出现，但与 systems 搭配不通或改变原意。",
          "traps": []
        },
        {
          "questionId": "q35",
          "questionNumber": 35,
          "stem": "However, concerns about privacy arise because data that seems anonymous can often be 35 ________ when combined with other datasets.",
          "translation": "然而，隐私方面的担忧随之产生，因为看似匿名的数据在与其他数据集结合后往往会被 ________。",
          "answer": "re-identified",
          "wordClass": "动词的过去分词（位于系动词 be 之后，与 be 构成被动语态，在句中作表语（主语补足语），表示“被重新识别出来”；保持原文带连字符的形式 re-identified，同句已有 when combined 的被动结构作参照）",
          "locating": {
            "paragraph": "C",
            "quote": "Data that seems anonymous can often be re-identified when combined with other datasets."
          },
          "synonyms": [
            "“concerns about privacy arise” 对应原文的 “the rise of Big Data also raises significant ethical and philosophical questions. One of the most pressing concerns is privacy.”，即隐私是最紧迫的担忧之一",
            "“data that seems anonymous” 与原文用词一致：Data that seems anonymous",
            "“can often be 35 ________” 与原文 “can often be re-identified” 完全对应，情态动词与频率副词均原样保留",
            "“when combined with other datasets” 与原文的 “when combined with other datasets” 逐字一致"
          ],
          "locatingTip": "定位：摘要第四句的定位词是 anonymous 与 combined with other datasets，两者都出现在第 C 段讲隐私的那一部分，原句为 “Data that seems anonymous can often be re-identified when combined with other datasets.”，整句几乎与题干重合，属于送分定位。确定答案技巧：空格位于 be 之后，前面有 can often，说明是被动语态中缺少的过去分词；原文该位置正是 re-identified。再结合同句后面的 when combined 也是被动结构，两个被动连用、逻辑呼应，答案确定无疑。填词时保持原文的连字符形式 re-identified，不要拆成 reidentified。",
          "analysis": "第 C 段的核心观点是隐私正在变得难以维护，其中一句直接解释原因：“Data that seems anonymous can often be re-identified when combined with other datasets.”（看似匿名的数据，在与其他数据集合并之后往往可以被重新识别出来）。紧接着的一句给出证据：“Researchers have demonstrated that it is possible to identify individuals from anonymized data using just a few data points, such as their age, gender, and zip code.”（研究者已经证明，仅凭年龄、性别、邮编等少量数据点，就能从匿名数据中识别出个人）。摘要保留了原句的 Data that seems anonymous、can often be、when combined with other datasets 等几乎全部成分，仅把谓语动词挖空，答案为 re-identified。词性上要特别注意：空格前是 be 动词，说明缺的是过去分词，构成被动语态，表示数据“被识别”；这属于 NO MORE THAN TWO WORDS 范围内的一个词，且连字符计入一个词，符合字数限制。若误填 identifying 或 identified，都会改变语态或丢失“重新”这一关键含义，与原文不符。",
          "traps": []
        },
        {
          "questionId": "q36",
          "questionNumber": 36,
          "stem": "Another issue is that algorithms trained on historical data may reproduce existing 36 ________, such as racial profiling in policing or discrimination in hiring.",
          "translation": "另一个问题是，基于历史数据训练的算法可能会复制既有的 ________，例如执法中的种族定性或招聘中的歧视。",
          "answer": "prejudices",
          "wordClass": "名词（复数形式；空格前有 existing 修饰，作动词 reproduce 的宾语，表示既有的种种偏见，原文用复数形式 prejudices；不可数化改写会丢失复数含义）",
          "locating": {
            "paragraph": "D",
            "quote": "If these choices reflect existing prejudices, the resulting analysis will simply reproduce those prejudices at a larger scale."
          },
          "synonyms": [
            "“Another issue” 对应原文的 “Another concern is the issue of bias.”，即本段讨论的是偏见这一问题",
            "“algorithms trained on historical data may reproduce existing …” 对应原文的 “the resulting analysis will simply reproduce those prejudices at a larger scale”，reproduce 一词原样复现",
            "“such as racial profiling in policing or discrimination in hiring” 概括了原文紧接着的两例：预测警务算法可能强化种族定性，招聘算法可能歧视女性或少数族裔",
            "“prejudices” 与原文 “If these choices reflect existing prejudices” 中的 existing prejudices 完全对应，连修饰语 existing 都保留"
          ],
          "locatingTip": "定位：摘要末句的定位词是 reproduce existing 以及随后的 racial profiling、hiring 这些例证词，它们集中在第 D 段讲偏见的部分，尤其段末的 “If these choices reflect existing prejudices, the resulting analysis will simply reproduce those prejudices at a larger scale.” 与题干的 reproduce existing … 高度重合。确定答案技巧：空格前有 existing，后有逗号和 such as 引出的例子，说明要填一个可数名词的复数，表示既有的那些成见。原文中的 prejudices 正处在 existing 之后、reproduce 之后的近义位置（reproduce those prejudices），与题干形成对应，故填 prejudices。",
          "analysis": "第 D 段第 4、5 句是本题的依据。第 4 句：“If these choices reflect existing prejudices, the resulting analysis will simply reproduce those prejudices at a larger scale.”（如果这些选择反映了既有的偏见，那么由此得出的分析只会把这些偏见以更大的规模复制出来）。随后作者用两个例子说明这种复制如何发生：“For example, predictive policing algorithms that analyze crime data may reinforce racial profiling if the original data reflects biased policing practices. Similarly, hiring algorithms trained on historical data may discriminate against women or minorities if past hiring decisions were biased.”（例如，分析犯罪数据的预测警务算法，如果原始数据反映的是带偏见的执法实践，就可能强化种族定性；同样，用历史数据训练的招聘算法，如果过去的招聘决定带有偏见，就可能歧视女性或少数族裔）。摘要的 such as racial profiling in policing or discrimination in hiring 正好把这两个例子压缩成短语，因此空格对应的是第 4 句中的 prejudices。词性上，空格前有 existing 修饰、后有复数意义的举例，故必须用复数 prejudices；同时注意不要误填 bias（偏见），因为 bias 出现在本段首句 “Another concern is the issue of bias.”，是段落主题词，而题干用 reproduce existing 加 such as 的例子结构，精确指向的是 reproduce those prejudices 这一表达。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 37–40 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 37,
        "end": 40
      },
      "items": [
        {
          "questionId": "q37",
          "questionNumber": 37,
          "stem": "Predictive policing algorithms are always fair and unbiased.",
          "translation": "预测性警务算法总是公平且无偏见的。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "predictive policing algorithms that analyze crime data may reinforce racial profiling if the original data reflects biased policing practices"
          },
          "synonyms": [
            "“Predictive policing algorithms” 在原文中以原词复现：“predictive policing algorithms that analyze crime data”",
            "“are always fair and unbiased” 与原文的 “may reinforce racial profiling”“reflects biased policing practices” 直接冲突：原文说这类算法可能强化种族定性、其数据来源带有偏见，而非公平无偏",
            "“always” 这一绝对化的频率副词在原文中没有任何支持，原文用的反而是表示可能的 may 和表示条件的 if"
          ],
          "locatingTip": "定位：题干有两个识别度很高的词——Predictive policing 与 algorithms，它们在整篇中只出现在第 D 段倒数第三句，扫读大写或专业名词即可直接跳到该段精读，无需读其他段落。确定答案技巧：判断题中凡出现 always、all、never、only 这类绝对化词语，都要重点核对原文是否给出同样绝对的表述。原文说的是 “predictive policing algorithms that analyze crime data may reinforce racial profiling if the original data reflects biased policing practices”，即这类算法可能强化种族定性，前提是原始数据反映带偏见的执法；may 表示可能性，if 表示条件，语气与“总是公平无偏”完全相反，因此判 NO。",
          "analysis": "第 D 段讨论偏见问题，作者先给出总论点（数据被人的选择塑造，偏见会被放大复制），再用两个 if 条件句举例，第一个例子就是本题的来源：“For example, predictive policing algorithms that analyze crime data may reinforce racial profiling if the original data reflects biased policing practices.”（例如，分析犯罪数据的预测性警务算法，如果原始数据反映的是带偏见的执法做法，就可能强化种族定性）。这句话传达的核心是：算法的输出可能被原始数据中的偏见带偏，甚至加剧歧视。而题干断言这类算法 “are always fair and unbiased”（总是公平、无偏见），不仅与原文的 may reinforce racial profiling 相冲突，而且用 always 把一件“可能发生的问题”说成了“从不发生问题”，属于事实相反且语气相反的表述，因此答案是 NO。做题时要特别注意：原文的 may … if … 结构与题干的 always 正好形成“可能”对“必然”、“有条件的风险”对“绝对的公正”的双重对立，这类绝对化表述是判断题中最常见的设错手法。",
          "traps": [
            "为什么不是 YES：原文明确说这类算法可能强化种族定性（may reinforce racial profiling），并指出其依据的原始数据可能带有偏见（reflects biased policing practices），与“总是公平且无偏见”明显矛盾，所以不能选 YES。",
            "为什么不是 NOT GIVEN：原文对预测性警务算法有明确且详细的陈述——它分析犯罪数据、可能强化种族定性、受原始数据偏见影响，信息是充分给出的，只是与题干相反。既然存在相反信息，就按规则判 NO，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q38",
          "questionNumber": 38,
          "stem": "Understanding causation is less important than identifying correlations.",
          "translation": "理解因果关系不如识别相关性重要。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Without an understanding of causation, interventions based on correlations may fail or even backfire."
          },
          "synonyms": [
            "“Understanding causation” 对应原文的 “an understanding of causation”，用词一致",
            "“less important than” 与原文的论证方向相反：原文说缺乏对因果的理解会让基于相关性的干预失败甚至适得其反，并把“把大数据的能力与传统科学方法的严谨结合起来”视为未来的挑战，即因果关系仍然重要",
            "“identifying correlations” 对应原文的 “Big Data, by contrast, often focuses on correlation”，但原文只把它当作一种有局限的做法，并未说它比因果更重要"
          ],
          "locatingTip": "定位：题干的关键词 causation 与 correlations 都集中在第 E 段，该段前四句讲科学与大数据的取向差异，随后用 However 转折列举局限，答案落在段末的限制性表述上。确定答案技巧：题干是一个比较级判断（理解因果“不如”识别相关重要），核对时要看原文对两者地位的评价。原文说 “Without an understanding of causation, interventions based on correlations may fail or even backfire.”（如果不理解因果关系，基于相关性的干预可能失败甚至适得其反），段末又说 “The challenge for the future is to combine the power of Big Data with the rigor of traditional scientific methods.”（未来的挑战是把大数据的力量与传统科学方法的严谨结合起来），可见作者认为因果关系不可或缺，并不认为它次要，故判 NO。",
          "analysis": "第 E 段的论证脉络是：先讲大数据偏重相关而放弃追问原因（“Big Data, by contrast, often focuses on correlation. It can tell us that two things are related, but not why.”），接着承认这种转向有实际好处（企业无需理解深层原因就能预测消费者行为），然后用 However 摆出局限：“Correlations can be spurious, leading to false conclusions. Without an understanding of causation, interventions based on correlations may fail or even backfire.”（相关性可能是虚假的，会导向错误结论；如果不理解因果关系，基于相关性的干预可能失败甚至适得其反），最后用一句总结收束：“The challenge for the future is to combine the power of Big Data with the rigor of traditional scientific methods.”（未来的挑战在于把大数据的力量与传统科学方法的严谨结合起来）。这段话的立场很清楚：作者认为忽视因果关系会带来实际风险，因此需要把两者结合，因果关系绝非次要。题干却说“理解因果不如识别相关重要”，把作者着力批评的偏差说成是作者的主张，属于与原文立场相反，因此答案是 NO。",
          "traps": [
            "为什么不是 YES：原文不但没有抬高相关性、贬低因果，反而指出只看相关会带来风险——相关性可能虚假、基于它的干预可能失败甚至适得其反，并强调未来要把大数据与传统科学方法（即追求因果的科学方法）结合，可见作者认为因果理解不可替代，不能选 YES。",
            "为什么不是 NOT GIVEN：原文对“相关与因果孰轻孰重”有正面表态：它明确列出了缺乏因果理解的危害，并给出“两者结合”的结论，态度鲜明而非含糊未提；题干提出的正是作者已经表明立场的问题，因此不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q39",
          "questionNumber": 39,
          "stem": "In medicine, Big Data is helping to develop treatments tailored to individual patients.",
          "translation": "在医学领域，大数据正在帮助开发为个别患者量身定制的治疗方法。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "In medicine, researchers are using data from electronic health records, genetic sequencing, and wearable devices to develop personalized treatments tailored to individual patients."
          },
          "synonyms": [
            "“In medicine” 与原文的 “In medicine” 完全一致，位置同为首句开头",
            "“is helping to develop” 同义替换为原文的 “are using data … to develop”，原文用现在进行时表示正在发生的事，题干同样使用现在进行时",
            "“treatments tailored to individual patients” 与原文的 “personalized treatments tailored to individual patients” 一致，题干仅省略了 personalized 这一修饰语",
            "“individual patients” 原词复现，tailored to 这一表达也原样保留"
          ],
          "locatingTip": "定位：题干开头的 In medicine 是第 F 段第一个例子的标志，段落用 “Despite these challenges, the potential benefits of Big Data are immense.” 引出三个领域的好处，医学排在第一位，扫读到 In medicine 即可锁定该句。确定答案技巧：核对时要逐项比对题干与原文的三处对应：领域（In medicine）、动作（正在帮助开发）、成果（为个别患者量身定制的治疗）。原文说 “researchers are using data from electronic health records, genetic sequencing, and wearable devices to develop personalized treatments tailored to individual patients”，其中 developing personalized treatments tailored to individual patients 与题干的 develop treatments tailored to individual patients 完全对应，现在进行时也一致，属于同向同义改写，故判 YES。",
          "analysis": "第 F 段先转折后举例：“Despite these challenges, the potential benefits of Big Data are immense.”（尽管有这些挑战，大数据的潜在好处是巨大的），随后分三个领域举例说明：医学、教育、环境科学。本题的定位句是第一例：“In medicine, researchers are using data from electronic health records, genetic sequencing, and wearable devices to develop personalized treatments tailored to individual patients.”（在医学领域，研究者正在利用电子健康档案、基因测序和可穿戴设备的数据，开发为个别患者量身定制的个性化治疗）。题干把原文的动作与成果保留下来：helping to develop 对应 are using data … to develop（都是“正在为开发而使用数据”）；treatments tailored to individual patients 对应 personalized treatments tailored to individual patients（题干省略 personalized 并不改变含义，tailored to individual patients 已经包含了“个性化”的语义）。方向、时态、对象三项完全一致，没有矛盾也没有缺失，因此答案是 YES。做题时注意同段后面还举了教育与环境的例子，它们属于平行的其他领域，与本题无关，不要被混淆。",
          "traps": [
            "为什么不是 NO：原文明确说研究者正在用各类医疗数据 “to develop personalized treatments tailored to individual patients”（开发为个别患者量身定制的个性化治疗），与题干说法完全相同，不存在任何矛盾信息。",
            "为什么不是 NOT GIVEN：题干考的是“医学领域是否在借助大数据开发个性化治疗”这一具体事实，原文不仅提到，还给出了所用数据的三个具体来源（电子健康档案、基因测序、可穿戴设备），信息充分，绝非未提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q40",
          "questionNumber": 40,
          "stem": "The decisions made today about data use will have long-term consequences for future generations.",
          "translation": "如今就数据使用所做的决定将对子孙后代产生长期影响。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "As Big Data becomes ever more pervasive, the decisions we make today about how to collect, analyze, and use data will shape the world for generations to come."
          },
          "synonyms": [
            "“The decisions made today about data use” 同义替换为原文的 “the decisions we make today about how to collect, analyze, and use data”，题干用名词短语概括了原文的定语从句",
            "“will have long-term consequences” 同义替换为原文的 “will shape the world for generations to come”，for generations to come 即未来世世代代，对应题干的长远影响",
            "“for future generations” 对应原文的 “for generations to come”，两者都指子孙后代",
            "“The future will belong not just to those who can harness the power of data, but to those who can do so wisely and ethically” 是紧随其后的呼应句，进一步强调今日决定的长远意义"
          ],
          "locatingTip": "定位：题干关键词 decisions、today、future generations 集中在全文末段，段中有 “the decisions we make today … will shape the world for generations to come” 一句，几乎与题干逐项对应，找到 generations 一词即可锁定。确定答案技巧：题干是将来时判断（如今的决定将产生长远影响），核对原文时看时态与影响范围是否吻合。原文用将来时 will shape 并限定范围 for generations to come（未来的一代代人），与题干的 will have long-term consequences for future generations 完全同向，属于典型的同义改写题，判 YES。",
          "analysis": "第 G 段是全篇总结段，作者把讨论提升到价值观层面：“Ultimately, the rise of Big Data represents a fundamental shift in how we understand and interact with the world. It offers unprecedented opportunities to solve complex problems, but it also demands that we think carefully about the values we want to preserve.”（归根结底，大数据的兴起代表着我们理解世界与与世界互动方式的根本转变，它提供了前所未有的机会，但也要求我们慎重思考想要守护的价值）。接着点明隐私、公平、透明与问责属于社会政治议题，最后是本题的定位句：“As Big Data becomes ever more pervasive, the decisions we make today about how to collect, analyze, and use data will shape the world for generations to come.”（随着大数据日益无处不在，我们今天关于如何收集、分析和使用数据所做的决定，将塑造未来世世代代的世界）。题干把 this 决定的内容抽象为 data use，把影响表述为 long-term consequences for future generations，而原文的 will shape the world for generations to come 说的正是这种跨代影响，时态（will）与范围（generations）都吻合，因此答案是 YES。段末再补一句 “The future will belong not just to those who can harness the power of data, but to those who can do so wisely and ethically.”，进一步强化“今日决定影响未来”的立场，与题干方向一致。",
          "traps": [
            "为什么不是 NO：原文用将来时明确断言今日的决定 will shape the world for generations to come（将塑造未来世代的世界），与题干的长远影响说法一致，没有任何相反或削弱的信息，故不能选 NO。",
            "为什么不是 NOT GIVEN：题干的三个要素都在原文有对应——决定（the decisions we make today）、数据使用（how to collect, analyze, and use data）、跨代影响（shape the world for generations to come），信息完整明确，不属于未提及，因此不能选 NOT GIVEN。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
