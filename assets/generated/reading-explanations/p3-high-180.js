(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-180", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-180",
  "meta": {
    "examId": "p3-high-180",
    "title": "The fluoridation controversy 氟化水争议",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 单项选择（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "The optimum amount of fluoride in fluoridated water is calculated partly according to",
          "translation": "氟化水中氟化物的最佳含量，部分是根据什么来计算的？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "the desired concentration of fluoride in public water is approximately one part per million, depending on the regional temperature and hence the amount of water people are likely to drink"
          },
          "synonyms": [
            "“the optimum amount of fluoride” 同义替换为原文的 “the desired concentration of fluoride”，都是指“理想的、所希望的氟化物含量”",
            "“is calculated partly according to” 同义替换为原文的 “depending on”，即“部分取决于”",
            "“how hot the area is” 同义替换为原文的 “the regional temperature”（地区气温），把专业表述改写成日常说法"
          ],
          "locatingTip": "定位：题干里的 optimum amount、calculated、according to 都是抽象词，没有专有名词可用，可以退一步抓住两个硬信息：表示含量的 concentration 与数字 one part per million，它们都出现在第 1 段第 2 句，扫读时盯住“百万分之一”这组数字即可锁定。确定答案技巧：找到句子后剔掉同义改写的外壳，optimum amount 对应 the desired concentration，is calculated partly according to 对应 depending on，剩下真正起作用的变量就是 the regional temperature（地区气温），因为气温影响人们饮水量，进而影响所需浓度。把 regional temperature 换成日常表达就是 how hot the area is，因此选 A。",
          "analysis": "第 1 段第 2 句是本题的落点：“The fluorine, when mixed with water, becomes fluoride and the desired concentration of fluoride in public water is approximately one part per million, depending on the regional temperature and hence the amount of water people are likely to drink.”（氟溶于水后成为氟化物，公共用水中氟化物所需的浓度约为百万分之一，具体取决于当地气温，因而也取决于人们可能饮用的水量）。题干把这个长句压缩成一句提问，改写链条很清晰：optimum amount of fluoride 对应 the desired concentration of fluoride，is calculated partly according to 对应 depending on。剥掉改写之后，原句交代的决定因素只有一个，即 the regional temperature；hence 之后的 the amount of water people are likely to drink（人们的饮水量）只是气温带来的结果，最终仍由气温决定。因此题干所问的“部分根据什么来计算”对应的正是地区冷暖程度，答案为 A “how hot the area is”。注意 partly 提示“部分取决于”，与原文 depending on 的限定语气一致，不必改动理解。",
          "traps": [
            "为什么不是 B：原文说的是 the regional temperature（地区的气温），是气候意义上的“地区冷热”，不是“水的温度（how warm the water is）”。B 把气温偷换成水温，属于偷换概念，原文全文没有任何关于水温影响浓度的表述。",
            "为什么不是 C：原文交代的变量只有气温与饮水量，从未提到社区里牙科疾病的多少会影响浓度计算。牙病数量出现在第 1 段后面“儿童蛀牙减少”的话题里，与浓度计算无关，C 属于无中生有。",
            "为什么不是 D：原文的意思是浓度按气温（以及由此带来的饮水量）来确定，人们的主观意愿不参与计算；D 把客观的计算结果说成“社区自己选择要在水里放多少氟”，把原文的客观依据改成了主观选择，与原文不符。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "One reason given by the writer for opposing fluoridation is that",
          "translation": "作者所给出的反对氟化的一个理由是什么？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Third, fluoridation is thought to be an infringement on individual rights because it is compulsory medication of all members of a community."
          },
          "synonyms": [
            "“obligatory fluoridation” 同义替换为原文的 “compulsory medication”（强制性用药），都有“强制、非自愿”之义",
            "“takes away personal freedom” 同义替换为原文的 “an infringement on individual rights”（对个人权利的侵犯）",
            "“one reason given by the writer for opposing fluoridation” 对应原文反对理由的第三条，标志词是 “Third”"
          ],
          "locatingTip": "定位：题干关键词 opposing fluoridation 直指第 2 段首句 “Three main grounds for opposition to fluoridation have been expressed.”，该段用 First、Second、Third 标出三条反对理由，结构一目了然，只需读这三条对应的句子。确定答案技巧：把题干的关键词 obligatory（强制性）与 personal freedom（个人自由）分别回原文比对，正好命中第三条理由中的 compulsory medication（强制用药）与 an infringement on individual rights（侵犯个人权利）。同义替换在词和短语两个层面都完全对应，故选 C；同时要排除原文没有出现的“费用”“误加过量”“导致蛀牙”等说法。",
          "analysis": "第 2 段集中列举反对氟化的三条理由：First, opponents claim the benefits are exaggerated or not established.（好处被夸大或未经证实）；Second, there are claims of health risks to parts of the population, for example, allergic reactions.（对部分人群存在健康风险，例如过敏反应）；Third, fluoridation is thought to be an infringement on individual rights because it is compulsory medication of all members of a community.（氟化被视为对个人权利的侵犯，因为它是对社区全体成员的强制用药）。题干问“作者给出的反对理由之一”，第三条与选项 C 严丝合缝：obligatory fluoridation 即 compulsory medication（强制用药），takes away personal freedom 即 an infringement on individual rights（侵犯个人权利）。因此答案是 C。做题时可以把三条理由当成三个候选文件夹，逐一把选项往里放：C 明确落在第三条，A、B、D 在该段以及全文中都找不到依据。",
          "traps": [
            "为什么不是 A：原文第 1 段明确说氟化水使儿童蛀牙率“似乎大大降低（their average rate of tooth decay seems greatly reduced）”，即氟化有助于防蛀；第 2 段列出的三条反对理由中也没有一条说氟会导致蛀牙。A 与原文方向相反。",
            "为什么不是 B：全文没有任何关于费用（expensive、cost）的论述，反对者也没有以“公众负担不起”为由，B 属于原文未提及。",
            "为什么不是 D：原文确实提到有人因为喝水多，摄入的氟“远高于每天 1 毫克的标准量（much more than the standard 1 milligram of fluoride per day）”，但那说的是饮水量大导致摄入过量，并不是被人为地误加入水中，D 曲解了原文的因果。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "The writer mentions Kuhn in order to",
          "translation": "作者提到库恩（Kuhn）的目的是什么？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "According to Kuhn, the shift from one scientific way of thinking to another is not made solely on the basis of clear rules of formal scientific practice, but can include social factors, though Kuhn has never developed a full analysis of what these might be."
          },
          "synonyms": [
            "“science can be influenced by non-scientific considerations” 同义替换为原文的 “can include social factors”（可以包含社会因素），社会因素即非科学层面的考量",
            "“non-scientific considerations” 与原文的 “clear rules of formal scientific practice”（正规科学实践的明确规则）构成对照，前者被表述为后者的例外补充",
            "“in order to” 提示本题考查引用目的：Kuhn 的说法印证了第 5 段首句“科学知识并不总是按有序过程发展”的观点"
          ],
          "locatingTip": "定位：Kuhn 是人名，全文只在第 5 段出现（第 5 段首句与第 2 句两次提到），扫读时盯住大写专有名词即可一步到段。确定答案技巧：目的题的关键是看作者引用某人时落脚的结论句，本段 Kuhn 的核心论断是科学思维方式的转变并非仅仅基于正规科学实践的明确规则，而是可以包含社会因素（but can include social factors）。把 social factors（社会因素）译成同义表达就是 non-scientific considerations（非科学层面的考量），把 can include 理解为 can be influenced by 即会受影响，故答案 D 与原文意思一致；其余选项都与 Kuhn 这句话的指向不符。",
          "analysis": "第 5 段是对第 4 段“科学社会学挑战传统观点”的展开。首句先说 Kuhn (1970) 认为科学知识并不总是按有序过程发展，而是呈现周期性革命；第 2 句就是本题的定位句：“According to Kuhn, the shift from one scientific way of thinking to another is not made solely on the basis of clear rules of formal scientific practice, but can include social factors, though Kuhn has never developed a full analysis of what these might be.”（据库恩所说，从一种科学思维方式转向另一种，并非仅依据正规科学实践的明确规则，而是可以包含社会因素，不过库恩从未对这些社会因素作出完整分析）。作者引用 Kuhn 的目的，就是要证明科学结论的形成并不纯粹由科学内部规则决定，还会受到社会因素的影响，这正是选项 D “show that science can be influenced by non-scientific considerations” 的意思。句末的让步成分（Kuhn 未充分分析这些社会因素）只是补充说明，不改变作者的引用意图。",
          "traps": [
            "为什么不是 A：原文用的是 “Collins (1975) took this concept further”（柯林斯把这个概念进一步推进），说明 Collins 与 Kuhn 是承接递进的关系，作者用 Collins 去印证并发展 Kuhn 的观点，而不是把两人放在对立面上作比较，A 与原文不符。",
            "为什么不是 B：Kuhn 的论断恰恰在打破“科学总是理性有序”的印象，他说科学的转变并非仅依据明确规则，还可能掺杂社会因素。作者引用他正是为了说明科学受非科学因素影响，而不是为科学探究的理性本质提供支持，B 与引用意图相反。",
            "为什么不是 C：原文确实顺带说了 Kuhn 从未对这些社会因素作完整分析，但这只是一句让步性的补充，作者引用 Kuhn 的整体目的仍在论证科学转变可包含社会因素这一观点。C 把作者的顺带点评当成了引用目的，属于本末倒置。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "What did Sutton's research discover about earlier studies in North America?",
          "translation": "Sutton 的研究对北美早期的研究发现了什么问题？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "An example is the study by Sutton in 1960, which analyzed the classic North American studies of the effect of fluoridation on tooth decay, and found that each showed significant methodological shortcomings."
          },
          "synonyms": [
            "“There were failings in the way they were carried out” 同义替换为原文的 “each showed significant methodological shortcomings”（每项研究都存在明显的方法论缺陷）",
            "“earlier studies in North America” 同义替换为原文的 “the classic North American studies”，classic 对应较早的经典研究",
            "“Sutton's research discover” 对应原文的 “the study by Sutton in 1960” 与 “found that”，即研究分析后得出的结论"
          ],
          "locatingTip": "定位：Sutton 是专有名词，全文只出现在第 7 段（连续三句都是关于他的研究），扫读时找到大写人名即可一步锁定。确定答案技巧：题干问 Sutton 的发现，就要找他研究结论中表示结果的那句话，即 “found that each showed significant methodological shortcomings”。这里 each 指代前面的 the classic North American studies，shortcomings 是缺陷，methodological 修饰缺陷的性质，合起来就是这些研究在执行方法上都有问题，与选项 A “There were failings in the way they were carried out” 完全同义。做这道题时特别要留意紧跟其后的第三句 “Sutton's detailed study throws doubt as to the extent of reductions in tooth decay from fluoridation.”，它说明 Sutton 的结论是削弱而非强化氟化的效果，可直接用来排除 D。",
          "analysis": "第 7 段提到 Sutton 1960 年的研究，共三句。第一句（本题定位句）：“An example is the study by Sutton in 1960, which analyzed the classic North American studies of the effect of fluoridation on tooth decay, and found that each showed significant methodological shortcomings.”（一个例子是萨顿 1960 年的研究，他分析了关于氟化对蛀牙影响的那些经典北美研究，发现每一项都存在明显的方法论缺陷）。第二句：“Sutton's detailed study throws doubt as to the extent of reductions in tooth decay from fluoridation.”（萨顿细致的研究使人们对氟化所带来的蛀牙减少幅度产生怀疑）。第三句：“Yet Sutton's book is not cited in a single analysis of the fluoridation issue by any sociologist.”（然而萨顿的书在任何社会学家的氟化问题分析中都未被引用过一次）。题干问 Sutton 对北美早期研究的发现，答案落在第一句的 found that each showed significant methodological shortcomings：significant methodological shortcomings 即研究方法上有严重缺陷，与 A 的 failings in the way they were carried out（开展方式存在缺陷）同义，故答案为 A。",
          "traps": [
            "为什么不是 B：原文只说这些研究存在方法论缺陷，从未提到研究者得出了独一无二（unique）的结果。unique results 在文中找不到任何对应表述。",
            "为什么不是 C：原文没有涉及氟化支持者是否理解长期影响，Sutton 指出的问题属于研究方法的层面（methodological shortcomings），与长期影响无关，C 属于无中生有。",
            "为什么不是 D：原文第二句明确说 Sutton 的研究使人们对氟化带来的蛀牙减少幅度产生怀疑（throws doubt as to the extent of reductions in tooth decay），即认为效果可能被高估；D 说氟化的效果比过去认为的更大，与原文方向相反。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "In the last paragraph, what does the writer say about scientists?",
          "translation": "在最后一段中，作者对科学家说了什么？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "10",
            "quote": "Second, social values are likely to be bound up in any decision about fluoridation, so this is not an issue on which declarations by scientific experts ought to be considered the final word."
          },
          "synonyms": [
            "“They should not decide the fluoridation policy” 同义替换为原文的 “this is not an issue on which declarations by scientific experts ought to be considered the final word”（专家的声明不应被当作最终定论）",
            "“scientists” 同义替换为原文的 “scientific experts”，作者此处讨论的正是专家意见在决策中的地位",
            "“the fluoridation policy” 对应原文的 “any decision about fluoridation”"
          ],
          "locatingTip": "定位：题干已限定“最后一段（the last paragraph）”，直接读第 10 段即可，无需扫全文。确定答案技巧：第 10 段共三句，第 1 句说反对氟化未必不理性，第 2 句说诉诸理性与科学权威更像是推动氟化的一种策略，第 3 句才涉及决策权归属，句中的 ought to be considered the final word 与 decision about fluoridation 正是题干落点。作者的意思是：氟化决策牵涉社会价值，不应由科学专家一锤定音，因此他们不应当决定氟化政策，选 B。做这类“作者说某类人应该怎样”的题，要锁定带情态动词（should、ought to）的句子，情态动词所在处通常就是观点所在处。",
          "analysis": "第 10 段（末段）是全文的结论段：“From the sociological point of view, opposition to fluoridation is not necessarily irrational. Rather, claims to rationality and to scientific authority are better seen as part of a strategy to promote fluoridation than as incontrovertible statements of fact. Second, social values are likely to be bound up in any decision about fluoridation, so this is not an issue on which declarations by scientific experts ought to be considered the final word.”（从社会学角度看，反对氟化未必就是不理性的。相反，那些关于理性与科学权威的宣称，与其说是无懈可击的事实陈述，不如说是推广氟化的一种策略。其次，社会价值很可能与任何氟化决策纠缠在一起，因此这个问题上科学专家的声明不应被视为最终定论）。第 3 句是本题依据：作者用 ought to be considered 这一情态表达明确表态，即专家的声明不能作为最终裁决。题干问作者对科学家说了什么，B “They should not decide the fluoridation policy” 正是把 the final word（最终定论）等价替换为决定政策（decide the policy），因此选 B。",
          "traps": [
            "为什么不是 A：原文第 2 句说诉诸理性与科学权威更像是推动氟化的策略（a strategy to promote fluoridation），这是作者对专家话语性质的评断，并不是要求科学家公开自己的真实动机。A 是对原文的引申，原文并没有提出应当披露动机这样的主张。",
            "为什么不是 C：原文强调社会价值与氟化决策纠缠在一起、专家声明不能算最终定论，恰恰否定了科学家只关心科学真理、与价值无关的说法；C 与原文的立场相反。",
            "为什么不是 D：全文没有讨论科学家内部是否就氟化问题达成一致，也没有把无法达成一致作为作者的观点，D 在末段乃至全文都没有对应信息。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–35 观点判断（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 35
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Scientific knowledge should be kept separate from social values.",
          "translation": "科学知识应当与社会价值保持分离。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "One interpretation of this analysis of science is that traditional distinctions between facts and theories, and between scientific knowledge and values, can no longer be justified."
          },
          "synonyms": [
            "题干 “should be kept separate from social values” 与原文的 “traditional distinctions between facts and theories, and between scientific knowledge and values, can no longer be justified” 指向同一组概念：原文否定科学知识与价值应当区分的传统观念",
            "“scientific knowledge” 与 “values” 在原文中为原词复现，题干把 values 具体化为 social values",
            "作者的态度还在第 4 段得到印证：scientific knowledge is socially negotiated, and inevitably linked to the values of the relevant parties"
          ],
          "locatingTip": "定位：题干关键词 scientific knowledge 与 values 同时出现在第 4 段末与第 6 段，而表达作者明确态度的是第 6 段那句 traditional distinctions 加 can no longer be justified，抓住 can no longer 这一态度标志词即可确认落点。确定答案技巧：这是观点判断题，判分点在于作者是否主张两者应当分开。原文第 4 段已站到科学社会学一边，说科学知识是社会协商形成的、与各相关方的价值不可避免地关联；第 6 段进一步宣布事实与理论、科学知识与价值之间的传统区分已不再能成立。作者要取消的正是这种分离，与题干主张恰好相反，故判 NO。",
          "analysis": "第 6 段继承第 4、5 段的讨论，给出对科学社会学分析的一种解读：“One interpretation of this analysis of science is that traditional distinctions between facts and theories, and between scientific knowledge and values, can no longer be justified.”（对这一科学分析的一种解读是：事实与理论之间、科学知识与价值之间的传统区分，都已不再能够成立）。紧接着又说：“Because social processes are involved at all stages of the creation, evaluation, and establishing of scientific knowledge, social values may also be involved.”（由于在科学知识的创造、评价和确立的每一个阶段都有社会过程参与，社会价值也可能随之参与其中）。作者的意思十分明确：科学知识与价值不可能、也不应当被人为分开，两者的传统边界已经失去合理性。题干却说科学知识应当与社会价值保持分离，这与作者在第 4、6 段反复表达的核心立场冲突，因此答案是 NO，而不是 YES，也不是信息缺失的 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：YES 要求原文有与题干一致的表述。原文恰恰相反，第 4 段说科学知识与各相关方的价值不可避免地关联（inevitably linked to the values of the relevant parties），第 6 段说两者之间的传统区分已不再能成立，作者反对的正是一分为二，所以不能选 YES。",
            "为什么不是 NOT GIVEN：NOT GIVEN 只适用于原文对该问题没有表态。本题中作者从第 4 段到第 6 段连续围绕科学是否与价值有关展开论证，并作出明确判断（can no longer be justified），属于已有明确立场且与题干相反，因此判 NO。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "Many sociologists have disregarded the doubts that some scientists have concerning fluoridation.",
          "translation": "许多社会学家忽视了一些科学家对氟化所持的疑虑。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "In the same way as many scientists who study fluoridation have overlooked social values, sociologists have also downplayed an important part of the debate by ignoring the number of eminent scientists who have questioned aspects of fluoridation."
          },
          "synonyms": [
            "“have disregarded” 同义替换为原文的 “have also downplayed” 与 “by ignoring”，都是忽视、淡化、不予重视的意思",
            "“the doubts that some scientists have concerning fluoridation” 同义替换为原文的 “the number of eminent scientists who have questioned aspects of fluoridation”（一批知名科学家对氟化的某些方面提出质疑）",
            "“Many sociologists” 对应原文的 “sociologists”，其中 the number of eminent scientists 说明提出质疑的科学家并不在少数"
          ],
          "locatingTip": "定位：题干两个主体是社会学家与持怀疑态度的科学家，第 7 段首句把二者放在同一句里对照，句子很长但用 In the same way as A have done … B have also done … 的平行结构，扫到 sociologists 与 questioned aspects of fluoridation 即可锁定。确定答案技巧：判断时只需回答社会学家有没有忽视这些科学家的质疑。原文用 downplayed（淡化）加 ignoring（忽视）两个负面动词，动作发出者正是 sociologists，被忽视的对象正是 the number of eminent scientists who have questioned aspects of fluoridation，与题干陈述一一对应，方向一致，故判 YES。",
          "analysis": "第 7 段首句即本题定位句：“In the same way as many scientists who study fluoridation have overlooked social values, sociologists have also downplayed an important part of the debate by ignoring the number of eminent scientists who have questioned aspects of fluoridation.”（正如许多研究氟化的科学家忽视了社会价值一样，社会学家也淡化了这场辩论的一个重要部分，他们无视了一批质疑氟化某些方面的知名科学家）。句子的平行结构提示这是作者对两类研究者的对称批评：科学家忽视社会价值，社会学家忽视质疑氟化的科学家。题干说许多社会学家忽视了某些科学家对氟化的疑虑，与 sociologists have also downplayed by ignoring the number of eminent scientists who have questioned aspects of fluoridation 完全对应。作者随后还补了一个具体例证：Sutton 1960 年的研究指出了北美经典研究的方法论缺陷，但萨顿的书在任何社会学家的氟化问题分析中都未被引用过一次，这进一步坐实了社会学家忽视这一判断，因此答案选 YES。",
          "traps": [
            "为什么不是 NO：原文对“社会学家忽视”给出的是肯定性陈述（downplayed、ignoring），并没有任何为其辩解或否定的表述，题干与原文方向一致，没有矛盾点，不能选 NO。",
            "为什么不是 NOT GIVEN：原文不仅给出了概括判断，还举出 Sutton 研究未被任何社会学家引用的具体事实作为佐证，信息充分且明确，不属于无法判断作者看法的情况。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "Sutton's findings have been given insufficient attention by scientists outside of North America.",
          "translation": "Sutton 的研究结果没有得到北美以外科学家的足够重视。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Yet Sutton's book is not cited in a single analysis of the fluoridation issue by any sociologist."
          },
          "synonyms": [
            "“have been given insufficient attention” 与原文的 “is not cited in a single analysis” 在未被重视、未被引用这一层意思上方向一致",
            "“by scientists outside of North America” 在原文中找不到对应：原文限定的忽视者是 “by any sociologist”（任何社会学家），题干把主体换成了北美以外的科学家",
            "“North America” 在原文出现的语境是 “the classic North American studies”（Sutton 所分析的北美经典研究），指研究对象，而非研究者所在地区"
          ],
          "locatingTip": "定位：Sutton 是专有名词，全文集中在第 7 段，读到他这一段就能找到所有与他相关的信息。确定答案技巧：判断题要先确认题干的主体与原文的主体是否一致。原文说的是 Sutton 的书没有被任何社会学家引用过，主体是社会学家；题干却说被忽视的是北美以外的科学家，主体被整个替换。而原文提到 North America 时，指的是 Sutton 所分析的北美经典研究，与北美以外的科学家毫无关系。主体不同意味着题干所述信息在原文中没有对应，属于信息缺失，判 NOT GIVEN。千万不要因为“被忽视”这一层意思相近就选 YES。",
          "analysis": "第 7 段关于 Sutton 的三句话分别说：他的研究分析了北美经典研究并发现其方法论缺陷；他的研究使人怀疑氟化减少蛀牙的幅度；以及本题定位句 “Yet Sutton's book is not cited in a single analysis of the fluoridation issue by any sociologist.”（然而萨顿的书在任何社会学家的氟化问题分析中都没有被引用过一次）。题干说 Sutton 的成果未得到北美以外的科学家（scientists outside of North America）足够重视，需要两个要素：被忽视的主体是北美以外的科学家，以及这种忽视是重视不足。原文只交代了社会学家从未引用他，对北美以外的科学家这一群体既没有说有，也没有说没有。题干把一个原文针对社会学家的判断，改成针对一个地域群体（北美以外的科学家）的判断，主体与范围都被置换，原文无从印证，因此判 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文确实提到 Sutton 被忽视，但忽视他的是社会学家（by any sociologist），题干把主体换成了北美以外的科学家。原文中的 North America 是 Sutton 所研究的对象（the classic North American studies），并非指北美以外的科学家这一群体，主体被偷换后题干无法从原文得到支持，不能选 YES。",
            "为什么不是 NO：原文没有说北美以外的科学家曾经重视过 Sutton 的研究，也没有否认他们的忽视，对这一群体完全未作交代。既没有相反信息，就不能判 NO，只能按信息缺失处理。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "There are valid arguments on both sides of the fluoridation debate.",
          "translation": "在氟化之争中，双方都有站得住脚的论点。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "Both arguments consider the scientific evidence concerning fluoridation, but differ in their assessments of the social benefits and costs. This difference is not between rationality and irrationality but is a legitimate difference in values"
          },
          "synonyms": [
            "“valid arguments” 同义替换为原文的 “a legitimate difference in values”（合理的价值分歧），legitimate 与 valid 同为正当、站得住脚之意",
            "“on both sides of the fluoridation debate” 同义替换为原文的 “Both arguments”，指第 8 段并列的支持者与反对者两种论证",
            "“is not between rationality and irrationality” 说明双方都非不理性，进一步印证两方观点都成立"
          ],
          "locatingTip": "定位：题干关键词是 both sides 与 valid，对应第 9 段首句的 Both arguments 与 a legitimate difference in values，第 9 段正是作者对第 8 段两种论证作评价的地方，读到第 8 段后紧接的一段即可。确定答案技巧：作者先用 both arguments consider, but differ 并列双方，再用 not between rationality and irrationality but a legitimate difference in values 作定性。legitimate 与题干的 valid 同义，both arguments 与 both sides 同义，作者的判断明确支持题干，故判 YES。",
          "analysis": "第 8 段完整并列了支持者与反对者的两种论证：支持者以益处的证据充分、危害的证据有限且可疑为由支持氟化；反对者以氟化并非好牙所必需、只要存在一点受害可能就应放弃好处为由反对氟化，并主张自愿使用氟片。第 9 段随即作出作者的评价（本题定位句）：“Both arguments consider the scientific evidence concerning fluoridation, but differ in their assessments of the social benefits and costs. This difference is not between rationality and irrationality but is a legitimate difference in values, for example, the positive value placed on good teeth, the negative value placed on possible health risks, and the social benefits or costs of compulsory or voluntary intake of fluorides.”（两种论证都考察了氟化的科学证据，但在社会收益与代价的评估上不同。这一分歧不是理性与非理性之别，而是正当的价值差异，例如对好牙的正面评价、对潜在健康风险的负面评价，以及强制或自愿摄入氟化物的社会收益或代价）。作者用 legitimate（正当的）为双方定性，并在末段重申从社会学角度看反对氟化未必就是不理性的，可见作者承认两方都言之成理。题干说双方都有站得住脚的论点，与作者立场一致，答案是 YES。",
          "traps": [
            "为什么不是 NO：原文明确说这种分歧不是理性与非理性之别，而是合理的价值差异（a legitimate difference in values），还一一列出双方各自看重的价值（好牙、健康风险、强制与自愿的社会代价），并没有贬低任何一方，题干与作者立场一致。",
            "为什么不是 NOT GIVEN：作者对这一问题的态度非常明确，第 9 段作定性，第 10 段又重申反对氟化未必不理性，属于已经表态而非回避，因此不能判信息缺失。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 36–40 句子结尾匹配（Complete each sentence with the correct ending, A–G）",
      "mode": "per_question",
      "questionRange": {
        "start": 36,
        "end": 40
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "The traditional view of science is that",
          "translation": "关于科学的传统观点是：应接选项 B（science is an unbiased discipline），即科学是一门不带偏见的学科。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The traditional view is that science is a special kind of knowledge, which is established through scientific methods and objectively applied by members of a scientific community."
          },
          "synonyms": [
            "“an unbiased discipline” 同义替换为原文的 “objectively applied”（被客观地应用），unbiased 对应 objectively",
            "“a special kind of knowledge” 与选项的 “discipline” 对应，都指科学这一独特的知识门类",
            "题干 “The traditional view of science is that” 与原文 “The traditional view is that science is” 为原词复现，仅语序调整"
          ],
          "locatingTip": "定位：题干 The traditional view of science 是原文原词，第 4 段第 2 句就是 “The traditional view is that science is a special kind of knowledge, which is established through scientific methods and objectively applied by members of a scientific community.”，按 traditional view 扫读可以一步定位，无需读完全篇。确定答案技巧：找到句子后把传统观点拆成两个要点，科学是通过科学方法确立的知识门类，并由科学共同体成员客观地运用（objectively applied）。选项 B 的 unbiased（不带偏见的、客观的）正对应 objectively applied，discipline（学科）对应 a special kind of knowledge，其余选项都与这句的定义无关，故填 B。",
          "analysis": "第 4 段先把叙述对象分成两派：一派是传统观点，一派是近年兴起并挑战它的科学社会学。第 2 句完整给出传统观点：“The traditional view is that science is a special kind of knowledge, which is established through scientific methods and objectively applied by members of a scientific community.”（传统观点认为，科学是一种特殊的知识，它通过科学方法得以确立，并由科学共同体的成员客观地加以应用）。这句定义有两个关键词：special kind of knowledge（特殊的知识门类）与 objectively applied（被客观地运用），合起来就是在说科学是一门客观、超然、不带偏见的学问，与选项 B “science is an unbiased discipline” 一致。题干把原文的宾语从句提到前面，只留下 The traditional view of science is that，后面要接的就是这一句的判断内容，因此填 B。",
          "traps": [
            "为什么不选 G：G 说的是 scientific knowledge is affected by the beliefs of everyone concerned（科学知识受所有相关方信念的影响），那恰恰是第 4 段紧接着提出的、由科学社会学对传统观点发起的挑战（scientific knowledge is socially negotiated, and inevitably linked to the values of the relevant parties），属于第 37 题的答案，方向与传统观点相反。",
            "为什么不选 A、C、D、E、F：A（研究结果起初常不被理解）来自第 5 段 Collins 的论断，是第 38 题的答案；C（人们应能自主选择是否使用氟化物）和 D（支持谨慎做法缺乏证据）分别是反对者与支持者的推论，对应第 40、39 题；E（氟造成的严重危害远大于其正面效果）在原文中根本没有出现；F（受益者不只是儿童）也从未被提及。传统观点只强调科学是客观特殊的知识，故选 B。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "A sociological view of science argues that",
          "translation": "科学社会学的观点认为：应接选项 G（scientific knowledge is affected by the beliefs of everyone concerned），即科学知识受到所有相关方信念的影响。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "in recent years there has been a major challenge to this picture by a sociology of science that shows how scientific knowledge is socially negotiated, and inevitably linked to the values of the relevant parties, both scientists and nonscientists"
          },
          "synonyms": [
            "“scientific knowledge is affected by the beliefs of everyone concerned” 同义替换为原文的 “scientific knowledge is socially negotiated, and inevitably linked to the values of the relevant parties”（科学知识经社会协商形成，并与各相关方的价值不可避免地关联）",
            "“everyone concerned” 同义替换为原文的 “both scientists and nonscientists” 与 “the relevant parties”，指与科学相关的所有群体",
            "“the beliefs” 对应原文的 “the values”，a sociological view of science 对应原文的 “a sociology of science”"
          ],
          "locatingTip": "定位：题干关键词 sociological view 与第 4 段中的 a sociology of science 直接对应，该段第 3 句（However 转折之后）就是科学社会学的观点，只需读 traditional view 之后的那句即可。确定答案技巧：抓住转折词 However，原文用 However 把传统观点与挑战者观点对立起来，挑战者的核心句是 scientific knowledge is socially negotiated, and inevitably linked to the values of the relevant parties, both scientists and nonscientists。题干的 everyone concerned（所有相关方）正对应 the relevant parties, both scientists and nonscientists，affected by the beliefs 正对应 inevitably linked to the values，故填 G。",
          "analysis": "第 4 段第 3 句是本题定位句：“However, in recent years there has been a major challenge to this picture by a sociology of science that shows how scientific knowledge is socially negotiated, and inevitably linked to the values of the relevant parties, both scientists and nonscientists.”（然而近年来，这一图景受到了科学社会学的重大挑战，该学派指出科学知识是社会协商的产物，并不可避免地与相关各方，无论科学家还是非科学家，的价值观相联系）。第 4 句又补一句：“These challengers do not see scientific knowledge as exempt from social inquiry.”（这些挑战者不认为科学知识可以免于社会考察）。把题干与原文对接：a sociological view of science 即 a sociology of science；argues that 后面的内容即 shows how 后面的内容；scientific knowledge is affected by the beliefs of everyone concerned 把 socially negotiated、linked to the values、both scientists and nonscientists 三点浓缩在一起，因此答案是 G。",
          "traps": [
            "为什么不选 A：A（研究结果起初并不总被理解）出自第 5 段 Collins 的论断（the outcome of experiments was not something whose meaning could be immediately comprehended），是第 38 题的答案，不是科学社会学的整体主张。",
            "为什么不选 B：B（科学是不带偏见的学科）是作者刚刚批判过的传统观点（第 36 题答案）。科学社会学正是要推翻科学客观超然这一图景，把它当作科学社会学的观点属于张冠李戴。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Collins is of the opinion that",
          "translation": "柯林斯（Collins）认为：应接选项 A（the results of scientific research are not always understood at first），即科学研究的结果并不总是能被立刻理解。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Collins (1975) took this concept further when he asserted that the outcome of experiments was not something whose meaning could be immediately comprehended, but rather something for interpretation, discussion between scientists, and reinterpretation in the light of other experiments."
          },
          "synonyms": [
            "“the results of scientific research are not always understood at first” 同义替换为原文的 “the outcome of experiments was not something whose meaning could be immediately comprehended”（实验结果的含义无法被立即领会）",
            "“is of the opinion that” 同义替换为原文的 “he asserted that”",
            "“the results of scientific research” 对应原文的 “the outcome of experiments”，两者都指科研产出的结果"
          ],
          "locatingTip": "定位：Collins 是专有名词，全文只出现在第 5 段末句，扫读时盯住大写人名即可一步锁定。确定答案技巧：题目问 Collins 的看法，就把他 that 从句里的判断读透，即实验结果并不是其意义可以被立即领会的东西（was not something whose meaning could be immediately comprehended），而是需要解释、科学家之间讨论、并结合其他实验重新解释的东西。not immediately comprehended 与选项 A 的 not always understood at first 在不能一开始就理解这一点上完全对应，故填 A。",
          "analysis": "第 5 段先讲 Kuhn 认为科学转变可包含社会因素，末句接着讲 Collins 把这一观点推进：“Collins (1975) took this concept further when he asserted that the outcome of experiments was not something whose meaning could be immediately comprehended, but rather something for interpretation, discussion between scientists, and reinterpretation in the light of other experiments.”（柯林斯 1975 年把这一概念进一步推进，他断言实验结果并不是其意义可以被立即领会的东西，而是有待解释、有待科学家之间讨论、并需参照其他实验重新解释的东西）。题干 Collins is of the opinion that 对应的就是 he asserted that；紧接着的判断句用 not immediately comprehended 否定了实验结果一开始就能被看懂，又用 but rather 转向需要解释与再解释。选项 A 把这层意思用更通俗的说法表达出来（not always at first 对应 not immediately），因此答案是 A。",
          "traps": [
            "为什么不选 G：G（科学知识受所有相关方信念的影响）是第 4 段科学社会学的概括性主张（第 37 题答案），落点在知识与价值的关系；Collins 这句话的落点在实验结果的意义需要解释与再解释，二者层次不同。",
            "为什么不选 B：B（科学是不带偏见的学科）是第 4 段所述的传统观点（第 36 题答案）。Collins 强调实验结果要被反复讨论和重新解读，恰恰在说明科学结论并非一目了然的客观自明之物，与 B 不符。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "The writer suggests that a supporter of fluoridation may conclude that",
          "translation": "作者暗示，氟化的支持者可能得出的结论是：应接选项 D（there is insufficient proof to support a cautious approach），即没有足够的证据来支持一种谨慎的做法。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "The evidence for the benefits of fluoridation is quite substantial, while the evidence for harm is limited and dubious."
          },
          "synonyms": [
            "“there is insufficient proof to support a cautious approach” 同义替换为原文的 “the evidence for harm is limited and dubious”（有害的证据有限且可疑），即主张谨慎、因担心危害而反对氟化的一方拿不出充分证据",
            "“may conclude that” 对应支持者引语中的结论句 “I think the likely benefits outweigh the possible dangers; hence I support fluoridation”",
            "“a supporter of fluoridation” 对应原文的 “A supporter of fluoridation might argue”"
          ],
          "locatingTip": "定位：题干出现 supporter of fluoridation，与第 8 段 “A supporter of fluoridation might argue” 原词对应，直接定位到该段支持者的引语，不必读全段。确定答案技巧：题干问支持者会得出什么结论，要紧扣引语内部的推理链：益处证据相当充分（quite substantial），危害证据有限且可疑（limited and dubious），因此可能的益处大于可能的风险，故支持氟化。把这条推理换一个说法，就是主张谨慎、即因担心危害而反对的那一方缺乏证据，正对应选项 D。注意本题型的结论既可能是引语中 hence、therefore 之后的原话，也可能是对推理链的概括。",
          "analysis": "第 8 段并置两种立场。支持者的原话是：“The evidence for the benefits of fluoridation is quite substantial, while the evidence for harm is limited and dubious. I think the likely benefits outweigh the possible dangers; hence I support fluoridation because it is the cheapest and easiest way to make sure every child reaps the benefits.”（支持氟化的证据相当充分，而有害的证据有限且可疑。我认为可能的益处大于可能的风险，因此我支持氟化，因为它是确保每个孩子都能受益的最廉价、最容易的方式）。这条推理有两个环节：一是认定危害方面的证据不足（limited and dubious），二是据此判断利害相权、益处占优。题干问支持者可能得出的结论，D 正是第一个环节的同义转述，既然危害证据有限可疑，那么主张谨慎行事（即反对氟化）的一方就缺少证据支撑。因此答案是 D。",
          "traps": [
            "为什么不选 C：C（人们应能自主选择是否使用氟化物）对应反对者引语中的 “favor the voluntary use of fluoride tablets by those who want to take them”，属反对者的立场，是第 40 题的答案。",
            "为什么不选 E：E（氟造成的严重危害远大于其正面效果）与支持者益处大于风险的判断正好相反，属于原文中不存在的极端说法，支持者的论据始终围绕儿童的牙齿受益。",
            "为什么不选 F：F（受益者不只是儿童）在原文中没有出现。支持者的推理全程只提到 every child reaps the benefits（每个孩子受益），并未主张受益人群超出儿童。",
            "为什么不选 A、B：A（研究结果起初不被理解）是 Collins 的观点，B（科学是不带偏见的学科）是传统观点，两者都出现在文章前半部分对科学本身的讨论中，与支持者的氟化立场不在同一话题上。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "The writer suggests that an opponent of fluoridation may conclude that",
          "translation": "作者暗示，氟化的反对者可能得出的结论是：应接选项 C（people should be able to choose whether they want fluoride），即人们应当能够选择自己是否使用氟化物。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Therefore, I oppose fluoridation of water supplies and favor the voluntary use of fluoride tablets by those who want to take them."
          },
          "synonyms": [
            "“people should be able to choose whether they want fluoride” 同义替换为原文的 “favor the voluntary use of fluoride tablets by those who want to take them”（赞成让想服用的人自愿使用氟片）",
            "“an opponent of fluoridation” 对应原文的 “An opponent might argue … Therefore, I oppose fluoridation of water supplies”",
            "“may conclude that” 对应原文中的结论标志词 “Therefore”"
          ],
          "locatingTip": "定位：题干出现 an opponent of fluoridation，与第 8 段 “An opponent might argue” 原词对应，直接读反对者的那段引语，看 Therefore 之后的话即可。确定答案技巧：题目问反对者可能的结论，就要抓引语的收束句，反对者先说不必为求好牙而冒险，接着说氟化对某些人可能有害，最后用 Therefore 引出主张：反对在水中加氟，赞成由想服用的人自愿使用氟片。voluntary（自愿的）与 by those who want to take them（由想服用者自己决定）合起来就是人们应当能自己选择是否摄入氟化物，与选项 C 同义，故填 C。",
          "analysis": "第 8 段中反对者的原话是：“Though the evidence for the benefits of fluoridation is substantial, there is some doubt about it. Since fluoridation is not necessary for good teeth, we should forgo the benefits if there is some slight chance of harm. Some scientists claim that a small percentage of the population could be harmed by fluoride. Therefore, I oppose fluoridation of water supplies and favor the voluntary use of fluoride tablets by those who want to take them.”（虽然支持氟化的证据不少，但仍存疑。既然氟化并非拥有好牙的必要条件，只要存在一点受害的可能，我们就应放弃这些好处。有科学家称，一小部分人可能受到氟化物的伤害。因此，我反对在供水中加氟，并赞成让想服用的人自愿使用氟片）。Therefore 之后的这句就是反对者的结论：反对强制加氟、支持个人自愿选择。选项 C 把 voluntary use, by those who want to take them 的意思完整保留下来（自愿、由想用者自己决定），因此答案是 C。",
          "traps": [
            "为什么不选 D：D（支持谨慎做法缺乏证据）出自支持者的推理（益处证据充分、危害证据有限可疑），是第 39 题的答案，属于另一方立场。",
            "为什么不选 E：E（氟造成的严重危害远大于其正面效果）比原文反对者的立场激烈得多。原文反对者只说氟化并非好牙所必需、存在一点受害可能就应放弃好处，属预防性、谨慎性的主张，并未断言危害已经远超益处。",
            "为什么不选 A、B、F、G：A（研究结果起初不被理解）是 Collins 的观点，B（科学是不带偏见的学科）是传统观点，G（科学知识受所有相关方信念影响）是科学社会学的主张，三者都属于文章前半部分对科学性质的讨论；F（受益者不只是儿童）原文从未提及，也与反对者的结论无关。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
