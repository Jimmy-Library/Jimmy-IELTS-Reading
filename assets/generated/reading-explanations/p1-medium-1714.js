(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1714", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1714",
  "meta": {
    "examId": "p1-medium-1714",
    "title": "The Dunedin Study 达尼丁研究",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "The study originally enrolled more than 2,000 babies born in Dunedin.",
          "translation": "该研究最初招募了 2,000 多名在达尼丁出生的婴儿。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The study originally enrolled 1,037 babies born at Queen Mary Hospital in Dunedin between April 1972 and March 1973."
          },
          "synonyms": [
            "“originally enrolled” 与原文 “The study originally enrolled” 逐字一致，动作与时间副词都对得上",
            "“more than 2,000” 与原文的精确数字 “1,037” 直接冲突：1,037 远少于 2,000",
            "“babies born in Dunedin” 对应原文的 “babies born at Queen Mary Hospital in Dunedin”，只是省略了医院名"
          ],
          "locatingTip": "定位：本题的关键词是数字与量词，扫读时专门找第 2 段开头的阿拉伯数字（1,037、1972、1973）。确定答案技巧：数字类判断题的判分点永远是“数量是否吻合”。原文给的是 1,037，是一个精确数字，而题干说 more than 2,000，两者相差近一倍，属于正面对立，无需推理即可判 FALSE。考场提醒：雅思数字题常把原文的精确数字换成“大于/小于/约等于”的模糊表达，遇到 more than、less than、up to 这类词务必回到原文核对具体数值。",
          "analysis": "第 2 段首句：“The study originally enrolled 1,037 babies born at Queen Mary Hospital in Dunedin between April 1972 and March 1973.”（该研究最初招募了 1,037 名在达尼丁玛丽王后医院出生、出生时间介于 1972 年 4 月至 1973 年 3 月的婴儿）。原文给了三个可核对的信息：人数 1,037、出生地 Queen Mary Hospital in Dunedin、出生时间段 1972–1973。题干改写了其中两点：把 1,037 说成 more than 2,000，把出生地简化为 in Dunedin（这一点属于合理概括，不构成错误）。真正的矛盾出在人数上——1,037 无论怎么理解都不可能“多于 2,000”，这是明确的事实冲突，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文写的是 1,037 名，题干写的是“2,000 多名”，1,037 小于 2,000，两者数量矛盾，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对最初招募人数给出了精确数字 1,037，信息并非缺失，而是与题干不同，属于“有信息且相反”的情形，按规则判 FALSE。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The study has retained less than 50% of the original participants.",
          "translation": "该研究保留了不到 50% 的原始参与者。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Remarkably, the study has retained more than 90% of the original participants, an extraordinary achievement in longitudinal research."
          },
          "synonyms": [
            "“has retained” 与原文 “the study has retained” 逐字一致",
            "“less than 50%” 与原文的 “more than 90%” 构成正面对立：一个是不到一半，一个是超过九成",
            "“the original participants” 与原文 “the original participants” 完全一致"
          ],
          "locatingTip": "定位：抓 retained 与百分比符号 %，全文只有第 2 段第三句出现百分数。确定答案技巧：百分比题只看两个方向——数值大小和大小关系（more/less）。原文是 more than 90%，题干是 less than 50%，方向完全相反，直接判 FALSE。注意不要被 Remarkably 这种评价副词干扰，它只表示“令人惊讶”，不改变数据本身。",
          "analysis": "第 2 段第三句：“Remarkably, the study has retained more than 90% of the original participants, an extraordinary achievement in longitudinal research.”（令人惊讶的是，该研究保留了超过 90% 的原始参与者，这在纵向研究中是一项非凡的成就）。原文用 more than 90% 强调留存率极高，题干却把它改成 less than 50%，即“不到一半”。两者在数量与方向上均矛盾：超过九成与不到一半不可能同时成立，因此答案是 FALSE。原句中的 Remarkably 与 an extraordinary achievement 都是在为高留存率做侧证，从这个语气也能反推出研究者讲的是“几乎没有流失”，而不是流失大半——语气的正负号是判断这类数字题的一条捷径。",
          "traps": [
            "为什么不是 TRUE：原文明确写 more than 90%，题干说 less than 50%，90% 以上显然不是“不到 50%”，信息相互排斥。",
            "为什么不是 NOT GIVEN：原文给出了具体百分比，信息明确且与题干相反，不属于原文未提及的范畴。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Many participants travel back to Dunedin for each assessment phase.",
          "translation": "许多参与者为每一个评估阶段都会回到达尼丁。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Many participants now travel back to Dunedin from around the world for each assessment phase, demonstrating their commitment to the project."
          },
          "synonyms": [
            "“Many participants” 与原文 “Many participants now travel back” 中的主语完全一致",
            "“travel back to Dunedin” 与原文 “travel back to Dunedin from around the world” 逐字对应，原文只多了一个出发地状语",
            "“for each assessment phase” 与原文 “for each assessment phase” 完全一致，时间状语未作任何改动"
          ],
          "locatingTip": "定位：本题的定位词是 assessment phase 这一固定搭配，全文只在第 2 段末句出现；不要用 Dunedin 定位，因为它在第 1、2 段反复出现，属于“高频词陷阱”。确定答案技巧：题干是一句正向复述，没有比较级、否定或时间错位，只要原文有同一事实的直陈句即可判 TRUE。原文说参与者“从世界各地回到达尼丁参加每一个评估阶段”，与题干陈述完全吻合，因此答案是 TRUE。",
          "analysis": "第 2 段末句：“Many participants now travel back to Dunedin from around the world for each assessment phase, demonstrating their commitment to the project.”（许多参与者如今为了每一个评估阶段从世界各地回到达尼丁，这体现了他们对项目的投入）。把题干与原文逐项对照：主语 Many participants 相同；谓语 travel back to Dunedin 相同；状语 for each assessment phase 相同。原文多出的 from around the world 只是把“回来”的地点范围说得更具体，demonstrating their commitment to the project 是补充评价，都不影响事实本身。题干只是把原文的信息压缩复述，没有任何扩大、缩小或反向，因此判 TRUE。做这类题时，回原文时先找“谁做了什么”，再看有没有 the first、only、most 等绝对化词——本题没有，所以落在 TRUE 上。",
          "traps": [
            "为什么不是 FALSE：原文用 “Many participants now travel back to Dunedin … for each assessment phase” 正面陈述了这一行为，题干与原文方向一致，找不到任何矛盾信息，FALSE 需要“与原文相反”，本题不成立。",
            "为什么不是 NOT GIVEN：原文不但交代了“许多人回来”，还交代了回来的时间点（each assessment phase）和出发地（from around the world），信息完整明确，不存在缺失，因此不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Researchers found that self-control at age three predicts adult outcomes.",
          "translation": "研究者发现三岁时的自控力可以预测成年后的结果。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Researchers found that children with low self-control at age three were more likely to experience health problems, financial difficulties, and criminal behaviour as adults."
          },
          "synonyms": [
            "“Researchers found that” 与原文 “Researchers found that” 逐字一致",
            "“self-control at age three” 对应原文的 “low self-control at age three”，题干只是省略了 low 这一修饰",
            "“adult outcomes” 同义替换为原文列举的 “health problems, financial difficulties, and criminal behaviour as adults”，即成年后的各类结果",
            "“predicts” 同义替换为原文的 “were more likely to experience”，即早期的自控水平与后来的结果之间存在预测关系"
          ],
          "locatingTip": "定位：self-control 是本题最醒目的关键词，第 4 段开头就以 “concerns the development of self-control” 点题，紧接着一句给出研究结论。确定答案技巧：本题考“概括与列举”的对应。原文把成年后的结果展开列举为健康问题、经济困难、犯罪行为三类，题干用 adult outcomes 一词概括，并把它与 self-control at age three 之间的关联概括为 predicts；概括句与列举句在逻辑上等价，只要列举项都能归入概括词，就判 TRUE。",
          "analysis": "第 4 段前两句：“One of the most famous findings from the Dunedin Study concerns the development of self-control. Researchers found that children with low self-control at age three were more likely to experience health problems, financial difficulties, and criminal behaviour as adults.”（达尼丁研究最著名的发现之一与自控力的发展有关。研究者发现，三岁时自控力低的儿童在成年后更容易出现健康问题、经济困难和犯罪行为）。题干的 predicts adult outcomes 是把原文“三岁时的自控力低导致成年后更可能出现某几类问题”这一因果倾向性概括为“预测成年结果”，属于典型的上位概括；adult outcomes 则覆盖了原文列举的三类后果，三者均发生在 as adults 之后，归类准确。原文随后一句 “This finding held true even after accounting for differences in intelligence and social background.”（即便排除了智力与社会背景差异，这一结论依然成立）进一步强化了该结论的稳健性，也支持题干所说的“预测”关系，因此答案是 TRUE。注意题干省略 low 并不改变判断——原文讲的是“自控力低的三岁儿童成年后更容易出问题”，题干讲的是“三岁时的自控力能预测成年结果”，两者方向一致，没有把结论扩大成“自控力高就必然成功”这种绝对化说法。",
          "traps": [
            "为什么不是 FALSE：原文的结论句与题干同向——早期自控水平确实与后来的成年结果相关联，原文没有任何否定或反向表述，不构成 FALSE。",
            "为什么不是 NOT GIVEN：原文非常具体地列出了成年后可能出现的三类问题，因果关系明确，并非“未提及成年结果”，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The study showed that biological ageing begins after age 40.",
          "translation": "该研究表明生物性衰老在 40 岁之后开始。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "the study showed that biological ageing begins earlier than previously thought, with signs of decline detectable in some people as young as 26."
          },
          "synonyms": [
            "“The study showed that” 与原文 “the study showed that” 逐字一致",
            "“biological ageing begins” 与原文 “biological ageing begins” 逐字一致",
            "“after age 40” 与原文的 “earlier than previously thought … as young as 26” 直接冲突：原文说衰老迹象在 26 岁就可能出现"
          ],
          "locatingTip": "定位：抓 biological ageing 这一学术搭配与年龄数字 26。第 4 段末句以 Another important discovery 引出第二个发现，是全文唯一谈“生物性衰老起始时间”的句子。确定答案技巧：时间判断题看三点——起点、终点、先后顺序。题干把衰老开端定在 40 岁之后，而原文说 it begins earlier than previously thought，并且给出了 as young as 26 这一下限，26 岁远在 40 岁之前，两者矛盾，判 FALSE。注意题干用的是 after age 40（40 岁以后才开始），属于把时间往后推的典型改写，这类“推迟时间”的表述几乎都是 FALSE 的信号。",
          "analysis": "第 4 段末句：“Another important discovery related to ageing: the study showed that biological ageing begins earlier than previously thought, with signs of decline detectable in some people as young as 26.”（另一项与衰老有关的重要发现是：研究表明生物性衰老开始的时间比此前认为的更早，有些人年仅 26 岁就能检测到衰退迹象）。原文给出的两点信息是：衰老开始得比原先以为的更早（earlier than previously thought），并且有人的衰退迹象早在 26 岁就已可检出（as young as 26）。题干却说衰老在 40 岁之后才开始，不仅删掉了“比以前认为的更早”这一比较关系，还凭空把起点后移到 40 岁，与原文的 26 岁直接冲突，因此答案是 FALSE。做题时要特别警惕题干里出现原文没有的具体数字（本题的 40），这类“无中生有的数字”通常就是矛盾点，回原文一查便知原文的数字更小。",
          "traps": [
            "为什么不是 TRUE：原文说衰老迹象在 26 岁即可检出、开始时间比以往认识得更早，而题干说“40 岁之后才开始”，时间明显被推后，与原文事实相反。",
            "为什么不是 NOT GIVEN：原文明确给出了衰老开始得早这一结论以及 26 岁这一具体年龄，信息不仅存在而且与题干冲突，因此不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The study's findings have influenced policy in several countries.",
          "translation": "该研究的发现影响了多个国家的政策。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The study's influence extends far beyond New Zealand. Its findings have been published in leading scientific journals and have informed policy in areas such as child welfare, education, criminal justice, and health care."
          },
          "synonyms": [
            "“The study's findings” 对应原文的 “Its findings”，Its 回指 The Dunedin Study",
            "“have influenced policy” 同义替换为原文的 “have informed policy”，inform 在政策语境中即“为……提供依据、影响”",
            "“in several countries” 对应原文的 “extends far beyond New Zealand”，其后的 “Governments and international organisations have drawn on its results” 也指向新西兰以外的多国"
          ],
          "locatingTip": "定位：题干关键词是 policy 与 countries，第 7 段首句 “The study's influence extends far beyond New Zealand.” 直接点明影响范围超出新西兰，同段随后两处提到 informed policy 与 Governments and international organisations。确定答案技巧：本题考“范围”的等价表述。题干说 several countries，原文没有机械地列出国家名，而是用 far beyond New Zealand（远播新西兰之外）、Governments and international organisations（多国政府与国际组织）来表达“多国”这一概念，属于同义改写而非无据扩大，因此判 TRUE。另外第 5 段末句 “This finding has influenced mental health policy in New Zealand and elsewhere.” 中的 elsewhere（其他地方）也是一处旁证。",
          "analysis": "第 7 段是全文讲“影响力”的段落。首句：“The study's influence extends far beyond New Zealand.”（该研究的影响远超新西兰）；第二句：“Its findings have been published in leading scientific journals and have informed policy in areas such as child welfare, education, criminal justice, and health care.”（其成果发表在顶级科学期刊上，并为儿童福利、教育、刑事司法和医疗保健等领域的政策提供了依据）；第三句：“Governments and international organisations have drawn on its results to design interventions aimed at improving life outcomes for vulnerable children.”（各国政府和国际组织借鉴了它的成果来设计干预措施）。三句话共同指向一个事实：研究结论被用于制定政策，且采用者不止一个国家。题干中的 have influenced policy 对应 have informed policy，several countries 对应 far beyond New Zealand 及 Governments and international organisations，属于合理的概括性替换。旁证还有第 5 段末句 “This finding has influenced mental health policy in New Zealand and elsewhere.”（这一发现有影响新西兰及其他地方的心理健康政策），elsewhere 一词同样说明影响超出新西兰一国。因此答案是 TRUE。注意本题与原文用词高度接近（influence / influenced、policy），是典型的“原词复现型 TRUE”。",
          "traps": [
            "为什么不是 FALSE：原文用 far beyond New Zealand、Governments and international organisations 等表述正面说明影响已超出单一国家，与题干“多个国家”的方向一致，没有任何矛盾。",
            "为什么不是 NOT GIVEN：原文不止一次提到政策受影响（informed policy、influenced mental health policy in New Zealand and elsewhere），证据充分，并非没有交代国家范围。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–10 句子填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 10
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Participants have undergone physical examinations, dental checks, and 7 ________ scans.",
          "translation": "参与者接受了体检、牙科检查以及 7 ________ 扫描。",
          "answer": "brain",
          "wordClass": "名词（单数，作 scans 的前置定语，说明扫描的部位）",
          "locating": {
            "paragraph": "3",
            "quote": "Participants have undergone physical examinations, dental checks, lung function tests, and brain scans."
          },
          "synonyms": [
            "“Participants have undergone” 与原文 “Participants have undergone” 逐字一致",
            "“physical examinations, dental checks” 与原文同名同序复现，可据此确认原句位置",
            "题干省略了原文并列项 “lung function tests”，并用 “7 ________ scans” 留空，对应原文的 “brain scans”"
          ],
          "locatingTip": "定位：题干保留了 physical examinations 与 dental checks 这两个并列名词短语，直接回第 3 段第三句比对即可，几乎可以“照抄式”定位。确定答案技巧：本题是并列结构的填空，题干与原文的并列项顺序一致（体检、牙科检查、[7]、扫描），只需在原文并列项中找到被省掉的那一项。原文四项依次为 physical examinations、dental checks、lung function tests、brain scans，题干在第三项位置留空并紧跟 scans，说明空里要填的是修饰 scans 的词，即 brain。词数上 brain 是一个词，符合 ONE WORD ONLY。",
          "analysis": "第 3 段第三句：“Participants have undergone physical examinations, dental checks, lung function tests, and brain scans.”（参与者接受了体检、牙科检查、肺功能测试和脑部扫描）。题干把四个并列项改写为三个，并删去 lung function tests，在 scans 前留空。由于 scans 在原句中是 brain scans 的中心词，空格需要填其定语，答案只能是 brain。若填 lung function 会与题干已给的 scans 冲突（原文是 lung function tests，不是 lung function scans），因此不能误填。词性上，brain 在此为名词作前置定语，keep 单数原形，不写 brains。核对词数：brain 一个词，满足 ONE WORD ONLY 的限制。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Children with low 8 ________ at age three were more likely to have problems as adults.",
          "translation": "三岁时 8 ________ 较低的儿童在成年后更可能出现问题。",
          "answer": "self-control",
          "wordClass": "名词（不可数，被形容词 low 修饰，指自控力这一抽象特质）",
          "locating": {
            "paragraph": "4",
            "quote": "Researchers found that children with low self-control at age three were more likely to experience health problems, financial difficulties, and criminal behaviour as adults."
          },
          "synonyms": [
            "“Children with low … at age three” 与原文 “children with low self-control at age three” 逐字对应，空格正好落在 low 与 at age three 之间",
            "“were more likely to have problems” 同义替换为原文的 “were more likely to experience health problems, financial difficulties, and criminal behaviour”",
            "“as adults” 与原文 “as adults” 完全一致"
          ],
          "locatingTip": "定位：题干保留了 low … at age three 与 as adults 这两个固定搭配，回第 4 段找 “children with low … at age three” 即可一步到位。确定答案技巧：这是“名词被形容词修饰并留空”的典型考法。原文句式为 children with low self-control at age three，空格恰好位于 low 与 at 之间，说明所需的是被 low 修饰的名词；把原文的 self-control 直接填入即可。注意 self-control 是带连字符的复合名词，按原文写法保留连字符，不要写成 self control 或 selfcontrol。",
          "analysis": "第 4 段第二句：“Researchers found that children with low self-control at age three were more likely to experience health problems, financial difficulties, and criminal behaviour as adults.”（研究者发现，三岁时自控力低的儿童成年后更容易出现健康问题、经济困难和犯罪行为）。题干把原文的列举 collapse 成 have problems，并把 self-control 挖空，其余部分几乎保留原句——children with low、at age three、were more likely to、as adults 全部照搬。因此空格答案就是被 low 修饰的名词 self-control。词性上是不可数抽象名词，不能加复数。词数为一个（连字符算一个词），符合 ONE WORD ONLY。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "The study helped resolve the debate about whether depression is genetic or 9 ________.",
          "translation": "该研究帮助解决了关于抑郁症是遗传性还是 9 ________ 的争论。",
          "answer": "environmental",
          "wordClass": "形容词（与 genetic 并列，作系动词 is 的表语）",
          "locating": {
            "paragraph": "6",
            "quote": "This helped resolve the long-standing debate about whether depression is \"genetic\" or \"environmental\" – it is both."
          },
          "synonyms": [
            "“The study helped resolve the debate” 对应原文的 “This helped resolve the long-standing debate”，This 回指上文所述的研究发现",
            "“whether depression is genetic or …” 与原文 “whether depression is \"genetic\" or \"environmental\"” 结构完全一致",
            "题干省略了原文末尾的 “– it is both”，只保留二选一的争点"
          ],
          "locatingTip": "定位：debate 与 depression 是本题的两把钥匙，第 6 段末句出现 the long-standing debate about whether depression is…。确定答案技巧：题干用 or 把 genetic 与空格并列，说明空格要与 genetic 同类同形（形容词）。回到原文，引号内的两个词恰好是 genetic 与 environmental，答案即 environmental。填词时保留形容词原形，不要改写成 environment（名词），也不要写成 environmentally（副词），因为空格与 is 构成系表结构。",
          "analysis": "第 6 段讲达尼丁研究在基因与环境交互作用上的贡献，末句：“This helped resolve the long-standing debate about whether depression is \"genetic\" or \"environmental\" – it is both.”（这有助于解决长期以来关于抑郁症究竟“源于基因”还是“源于环境”的争论——两者兼有）。题干把 long-standing 删去（属于可删的修饰），保留了 resolve the debate 与 whether … or … 这一选择问结构，并把引号中的第二个选项留空。原文两个引号词是 genetic 与 environmental，故答案为 environmental。词性上，它和 genetic 一样是形容词，在 is 之后作表语，须用原形。另外原文末尾的 it is both 是研究结论，说明答案不偏向任何一方，题干只问争论的两个选项，不影响填空。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Researchers are now beginning to study the 10 ________ of the original participants.",
          "translation": "研究者现在开始研究原参与者的 10 ________。",
          "answer": "children",
          "wordClass": "名词（复数，作介词 of 前的中心名词，指原参与者的子女）",
          "locating": {
            "paragraph": "8",
            "quote": "They are also beginning to study the children of the original participants, creating a third generation of data"
          },
          "synonyms": [
            "“Researchers are now beginning to study” 对应原文的 “They are also beginning to study”，They 回指前文的 Researchers",
            "“the 10 ________ of the original participants” 与原文 “the children of the original participants” 结构完全一致",
            "“now” 对应原文的 “also”，都表示研究在新阶段新增的方向"
          ],
          "locatingTip": "定位：题干保留了 of the original participants 这一固定搭配，回到第 8 段搜索该短语，句中生成为 the children of the original participants。确定答案技巧：空格位于 the 与 of 之间，属于“中心名词加 of 属格”的结构，所需是一个复数名词；原文对应位置正是 children。注意不要填 generation（原文的 third generation 说的是数据的代次，不是参与者的子女）或 data，这两者虽在同句出现，但与 of the original participants 的语义搭配不成立。",
          "analysis": "第 8 段末句：“They are also beginning to study the children of the original participants, creating a third generation of data that will allow even deeper insights into how traits and conditions are passed down through families.”（他们也开始研究原参与者的子女，从而产生第三代数据，使人们能更深入地了解特征与状况如何在家族中传递）。题干保留了 beginning to study 与 of the original participants，把中间的名词挖空。从语义看，能同时满足“属于原参与者”且“可以作为研究对象”的，只有 children；从语法看，空格前有 the、后有 of the original participants，需要名词复数，children 正好是 child 的不规则复数。后半句的 passed down through families（在家族中传递）也反向印证研究对象是下一代。答案为 children，一词，符合 ONE WORD ONLY。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 单选题（四选一）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "How many participants were originally enrolled in the Dunedin Study?",
          "translation": "达尼丁研究最初招募了多少名参与者？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The study originally enrolled 1,037 babies born at Queen Mary Hospital in Dunedin between April 1972 and March 1973."
          },
          "synonyms": [
            "“originally enrolled” 与原文 “The study originally enrolled” 逐字一致，题干与原文的动作时间点相同",
            "题干问 How many，原文直接给出精确数字 1,037",
            "“participants” 对应原文的 “babies”，指同一批最初入组的研究对象"
          ],
          "locatingTip": "定位：题干含疑问词 How many，属于事实细节题的“数字题”，回到第 2 段首句找阿拉伯数字即可。确定答案技巧：数字题要把原文与四个选项逐一比对，只认原文出现过的数字。原文写的是 1,037 babies，与选项 A 完全一致；B 的 2,000 是第 2 题题干里的干扰数字（原文并无此数），C 的 500 在原文中根本不存在，D 的 45 是参与者最近一次接受评估的年龄。抓住“只选原文出现过的数字”这一原则，本题一步定音。",
          "analysis": "第 2 段首句：“The study originally enrolled 1,037 babies born at Queen Mary Hospital in Dunedin between April 1972 and March 1973.”（该研究最初招募了 1,037 名在达尼丁玛丽王后医院出生、出生时间在 1972 年 4 月至 1973 年 3 月之间的婴儿）。原文给出的最初入组人数是 1,037，与选项 A 完全吻合，因此选 A。做本题时建议把四个选项各自的出处理清：B 项 2,000 并未在原文出现（它出现在第 2 题题干里，是被改大的干扰值）；C 项 500 在原文中没有任何依据；D 项 45 出自第 2 段 “most recently at age 45”，那是最近一次评估时的年龄，与最初招募人数毫无关系。这类题最常见的失分原因是把同段出现的其他数字误当成答案，所以定位到句之后一定要把选项与原文数字逐个核对。",
          "traps": [
            "B. 2,000：原文从未出现 2,000 这个数字，它是被放大的干扰项（1,037 才是原文数据），与原文不符。",
            "C. 500：原文没有出现 500，1,037 远大于 500，该选项纯属虚构。",
            "D. 45：45 在原文中是“most recently at age 45”，指参与者最近一次接受评估的年龄，而不是最初招募的人数，属于数字错位。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "What did the study find about mental health problems?",
          "translation": "该研究对心理健康问题有何发现？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "They identified that most people who experience mental health problems do so at some point in their lives, but that the minority with persistent problems account for a disproportionate share of the burden on health services."
          },
          "synonyms": [
            "“the study find” 对应原文的 “They identified that”，identify 与 find 在此同义",
            "“mental health problems” 与原文 “mental health problems” 逐字一致",
            "“A minority with persistent problems account for most of the burden” 同义替换为原文的 “the minority with persistent problems account for a disproportionate share of the burden on health services”，disproportionate share 即“不成比例的大份额”"
          ],
          "locatingTip": "定位：第 5 段专讲心理健康，段中唯一给出研究结论的句子以 They identified that 开头，是本题的落点句。确定答案技巧：本题的判分点是“谁承担了大部分医疗负担”。原文的逻辑是“多数人一生中都会经历心理问题（前半句）”，但“少数持续性问题的人承担了不成比例的大份额负担（后半句）”。选项 C 复述的正是后半句，且把 disproportionate share of the burden 转述为 account for most of the burden，方向一致。做题时务必分清主句的两个分句：前半句被改写成 A、B 两项（都错在把“多数人一生中会经历”说成“多数人从不经历”或“只有少数人经历”），后半句才是 C 所对应的正确信息。",
          "analysis": "第 5 段第三句：“They identified that most people who experience mental health problems do so at some point in their lives, but that the minority with persistent problems account for a disproportionate share of the burden on health services.”（他们发现，多数经历过心理健康问题的人一生中总会在某个阶段出现这类问题，但真正持续存在问题的那少数人，给医疗服务带来了不成比例的大份额负担）。选项 C “A minority with persistent problems account for most of the burden on health services.” 直接对应原文 but 之后的第二个分句，其中 most of the burden 与原文 disproportionate share of the burden 同义，属于正确项。原文是一个“多数—少数”的对比结构：多数人一生中偶发（temporary），少数人持续（persistent）却消耗了大部分医疗资源；选项 C 精准抓取了后一半信息。",
          "traps": [
            "A. Most people never experience mental health problems.：与原文相反。原文说 “most people who experience mental health problems do so at some point in their lives”，即多数人一生中某个阶段都会遇到，而不是“从不”。",
            "B. Only a small number of people experience any mental health problems.：与原文相反。原文用 most people 描述经历过心理问题的人群规模，明确否定了“只有少数人”的说法；少数指的是“持续存在问题的人”，不是“遇到问题的人”。",
            "D. Mental health problems are usually temporary and resolve without treatment.：原文只说研究者能区分 temporary difficulties 与 persistent problems，从未讨论“是否无需治疗即可自行缓解”，属于无中生有。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "What factor has contributed to the success of the Dunedin Study?",
          "translation": "哪一个因素促成了达尼丁研究的成功？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "The success of the Dunedin Study rests on several factors: the stability of the research team, the commitment of the participants, and the vision of its founders."
          },
          "synonyms": [
            "“What factor has contributed to the success of” 对应原文的 “The success of the Dunedin Study rests on several factors”",
            "“The stability of the research team” 与选项 B 逐字一致，属于原词复现型正确项",
            "原文并列的另外两个因素 “the commitment of the participants” 与 “the vision of its founders” 在四个选项中均未出现，可据此排除干扰"
          ],
          "locatingTip": "定位：题干关键词是 success 与 factor，第 9 段首句开门见山列出三个因素，定位极为直接。确定答案技巧：本题是典型的“列举对应”题——把选项与原文列举的三项逐一比对，只要有一项原词复现即为答案，凡原文未出现的因素一律排除。原文列出的三项是研究团队的稳定性、参与者的投入、创始人的远见；四个选项里只有 B（The stability of the research team）在原文中有原词依据，A、C、D 都属于改写出来的“看似合理但文中无据”的选项。",
          "analysis": "第 9 段首句：“The success of the Dunedin Study rests on several factors: the stability of the research team, the commitment of the participants, and the vision of its founders.”（达尼丁研究的成功取决于几个因素：研究团队的稳定、参与者的投入以及创始人的远见）。选项 B “The stability of the research team” 与原文列举的第一项完全一致，属于原词复现，因此选 B。本题的关键在于排除另外三个似是而非的选项：A 谈政府资金、C 谈参与者多样性、D 谈国际媒体关注，这三者在整篇文章中都找不到支撑句。原文强调的是 the stability of the research team（团队稳定），而不是参与者的多样性；参与者在原文中被提到的是投入（commitment）与高留存率（retained more than 90%），与 diversity 无关。做这类“因素题”时，最稳的做法是把原文列举项抄在草稿上，再与选项一一对应，避免凭印象选择。",
          "traps": [
            "A. Large government funding：原文第 9 段列出的三个因素里没有资金，全篇也未提到政府提供大额资助，属于无据推断。",
            "C. The diversity of the original participants：原文强调的是参与者的投入（the commitment of the participants）与超过 90% 的留存率，从未把“多样性”列为成功因素。",
            "D. International media attention：原文提到的是成果发表于顶级期刊、影响政策与培养研究者，并未提及国际媒体关注，属于移花接木的干扰项。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
