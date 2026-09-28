(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1583", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1583",
  "meta": {
    "examId": "p1-medium-1583",
    "title": "Psychology of new product adoption 新产品采纳心理学",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–4 人名观点匹配（Match each statement with the correct option, A–C）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 4
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "stated a theory which bears potential fault in the application",
          "translation": "提出了一个在应用上存在潜在缺陷的理论",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "In the 1960s, communications scholar Everett Rogers called the concept “relative advantage” and identified it as the most critical driver of new-product adoption. This argument assumes that companies make unbiased assessments of innovations and of consumers, likelihood of adopting them. Although compelling, the theory has one major flaw: It fails to capture the psychological biases that affect decision making."
          },
          "synonyms": [
            "“bears potential fault（带有潜在缺陷）” 同义替换为原文 “has one major flaw（存在一个重大缺陷）”",
            "“in the application（在应用中）” 对应原文 “fails to capture the psychological biases that affect decision making（没能涵盖影响决策的心理偏差）”",
            "原文 “theory” 与题干 “theory” 为同一名词的直接对应，题干 “stated a theory” 对应原文 “called the concept … and identified it as the most critical driver”"
          ],
          "locatingTip": "定位：题干的核心实词是 theory 与 fault，先用大写人名扫读法在 E 段找到 communications scholar Everett Rogers，再注意让步词 Although 与评价词 flaw 所在的句意转折处。确定答案技巧：题干 bears potential fault 是负面评价，原文 the theory has one major flaw 正是对这一理论唯一的批评，而这个理论的提出者已由同段点明是 Everett Rogers，故选 B。",
          "analysis": "E 段先说明企业长期以来的假设——只要创新在客观上优于现有产品，消费者就有足够动力购买，随后引出 1960 年代传播学者 Everett Rogers 把这一概念命名为 “relative advantage”，并称其为新产品采纳最关键的动力。但紧接一句用 Although compelling 让步后指出该理论有一个重大缺陷：它没能涵盖影响决策的心理偏差。题干 “stated a theory which bears potential fault in the application” 正是“提出理论但该理论应用时有缺陷”，与原文一一对应，故答案是 B（Everett Rogers）。",
          "traps": [
            "为什么不是 A（Richard Thaler）：Thaler 出现在 H 段，他的贡献是把“高估自己已有之物”这一偏差命名为 “endowment effect”，属于揭示偏差的人，而不是提出有缺陷理论的人。",
            "为什么不是 C（Kahneman and Tversky）：Kahneman 与 Tversky 出现在 F、G、J 段，他们提出的是 “loss aversion（损失厌恶）” 并解释了现状偏差的成因，原文并未说他们的理论有重大缺陷。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "decided the consumers’ several behavior features when they face other options",
          "translation": "确定了消费者在面对其他选项时的若干行为特征",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Kahneman and Tversky showed, and others have confirmed, that human beings’ responses to the alternatives before they have four distinct characteristics."
          },
          "synonyms": [
            "“when they face other options（面对其他选项时）” 同义替换为原文 “responses to the alternatives（对面前各种备选方案的反应）”",
            "“several behavior features（若干行为特征）” 同义替换为原文 “four distinct characteristics（四个明显特征）”，several 被具体化为数字 four",
            "“decided” 对应原文 “showed, and others have confirmed（提出并经他人证实）”"
          ],
          "locatingTip": "定位：用 alternatives 与数量特征词定位。题干 several（若干）在学术文章中常被具体化为 three、four 之类的数字，F 段末句的 four distinct characteristics 正与此对应，紧随其后的 G 段用 First、Second、Third、Fourth 逐条展开这四点。确定答案技巧：该结论的提出者是 Kahneman and Tversky，故选 C。",
          "analysis": "F 段介绍 Kahneman 与 Tversky 的研究，段末句说人类面对各种备选方案时的反应有四个明显特征，G 段随即用 First 到 Fourth 把四个特征逐条列出（主观价值、参照点、得失归类、损失影响更大）。题干 “decided the consumers’ several behavior features when they face other options” 中 several behavior features 正是 four distinct characteristics 的宽泛表达，提出者是 Kahneman and Tversky，故答案是 C。",
          "traps": [
            "为什么不是 A（Richard Thaler）：Thaler 在 H 段谈的是消费者对自己已有物品的估值（endowment effect），讨论的是单一偏差，不是面对多个选项时的一整套行为特征。",
            "为什么不是 B（Everett Rogers）：Rogers 在 E 段提出的是 “relative advantage” 这一个概念，而且原文说明该理论有一个重大缺陷，并不涉及消费者行为的四个特征。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "generalised that customers value more of their possession they are going to abandon for a purpose than alternative they are going to swap in",
          "translation": "总结出：相比将要换入的替代品，消费者更看重自己即将为此放弃的已有物品",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "H",
            "quote": "According to behavioral economist Richard Thaler, consumers value what they own, but many have to give up, much more than they value what they don’t own but could obtain. Thaler called that bias the “endowment effect.”"
          },
          "synonyms": [
            "“their possession they are going to abandon（将要放弃的已有之物）” 同义替换为原文 “what they own, but many have to give up”",
            "“alternative they are going to swap in（将要换入的替代品）” 同义替换为原文 “what they don’t own but could obtain”",
            "“value more of … than …” 同义替换为原文 “value … much more than …”，程度词 more 对应 much more"
          ],
          "locatingTip": "定位：抓核心比较结构 value A more than B。在 H 段找到行为经济学家 Richard Thaler 对 endowment effect（禀赋效应）的定义句，句式与题干几乎逐字对应。确定答案技巧：题干说的是“对已有物的估值高于可获得的替代品”，原文正是 consumers value what they own … much more than … what they don’t own but could obtain，提出者 Thaler，故选 A。",
          "analysis": "H 段承接 G 段的 loss aversion，指出损失厌恶使人们更看重已属于自己的东西，并引述行为经济学家 Richard Thaler 的表述：消费者对自己拥有、但不得不放弃的东西的估值，远高于对不拥有但本可获得的东西的估值，Thaler 把这一偏差命名为 “endowment effect”。题干中 “possession they are going to abandon” 对应 what they own but have to give up，“alternative they are going to swap in” 对应 what they don’t own but could obtain，比较关系也完全一致，故答案是 A。",
          "traps": [
            "为什么不是 B（Everett Rogers）：Rogers 的 relative advantage 讲的是新产品自身的客观价值更高，完全不含“高估自己已有物品”这层意思。",
            "为什么不是 C（Kahneman and Tversky）：Kahneman 与 Tversky 提出的是 loss aversion 这一普遍原理，而把“高估已拥有物”正式命名并给出上述定义的，原文明确说是 Richard Thaler。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "answered the reason why people don’t replace existing products",
          "translation": "解释了人们为什么不更换已有的产品",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "J",
            "quote": "Kahneman and Tversky’s research also explains why people tend to stick with what they have even if a better alternative exists."
          },
          "synonyms": [
            "“answered the reason why” 同义替换为原文 “explains why”",
            "“don’t replace existing products（不更换已有产品）” 同义替换为原文 “tend to stick with what they have even if a better alternative exists（即使有更好的选择也倾向于守着现有的东西）”",
            "“existing products” 对应原文 “what they have / what they already had”"
          ],
          "locatingTip": "定位：提取题干动作 don’t replace existing products，在文中搜索表示“维持现状、不愿更换”的表述。J 段首句的 stick with what they have even if a better alternative exists 高度呼应，且句子主语明确指出这是 Kahneman and Tversky 的研究结论。确定答案技巧：该句 also explains why 正对应题干 answered the reason why，故选 C。",
          "analysis": "J 段开篇即说，Kahneman 与 Tversky 的研究也解释了为什么人们即使面对更好的替代品也倾向于守着现有的东西，随后用 1989 年 Knetsch 的马克杯与巧克力实验展示所谓 “status quo bias（现状偏差）”。题干 “answered the reason why people don’t replace existing products” 与该句 explains why people tend to stick with what they have 完全对应，提出者是 Kahneman and Tversky，故答案是 C。",
          "traps": [
            "为什么不是 A（Richard Thaler）：Thaler 的贡献是命名 endowment effect（H 段），重点在“高估自己已拥有的东西”；而“为什么不愿意更换（现状偏差背后的机制）”在原文明说是 Kahneman and Tversky 的研究（J 段），两者重点不同。",
            "为什么不是 B（Everett Rogers）：Rogers 的 relative advantage 恰恰假设“只要客观上更好，消费者就会购买”，与“不愿更换现有产品”正好相反。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–9 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 9
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The products of innovations which beat existing alternatives can guarantee a successful market share.",
          "translation": "优于现有替代品的创新产品能够保证获得成功的市场份额。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "Few would question the objective advantages of many innovations over existing alternatives, but that’s often not enough for them to succeed."
          },
          "synonyms": [
            "“innovations which beat existing alternatives（胜过现有替代品的创新）” 同义替换为原文 “the objective advantages of many innovations over existing alternatives（许多创新相对现有替代品的客观优势）”",
            "“can guarantee a successful market share（能够保证成功的市场份额）” 与原文 “often not enough for them to succeed（往往不足以让它们成功）” 构成直接矛盾",
            "“guarantee（保证）” 对应原文绝对化程度上的否定评价 “not enough”"
          ],
          "locatingTip": "定位：用 innovations 与 existing alternatives 两个核心名词回到 B 段，第 4 句同时出现了这两者。确定答案技巧：抓题干里的绝对化词 guarantee；原文用 Few would question 先让步承认客观优势，再用 but 转折给出否定结论 often not enough for them to succeed，与此直接冲突。",
          "analysis": "原文承认几乎没有人会质疑许多创新相对现有替代品的客观优势，但紧接着用 but 转折指出：这种优势往往不足以让它们取得成功。题干把“有客观优势”升级成“能够保证获得成功的市场份额（can guarantee a successful market share）”，加入了原文并不存在的“保证”含义，与原文的否定判断相反，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确否认了优势可以直接转化为成功（often not enough for them to succeed），而题干说的正是这种“保证成功”。",
            "为什么不是 NOT GIVEN：原文对“有优势是否就能成功”给出了清晰的负面评价，信息完整且方向对立，不属于未提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The fact that most companies recognised the benefits of switching to new products guarantees a successful innovation.",
          "translation": "多数公司认识到了转向新产品所带来的好处这一事实，保证了创新能够成功。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "What businesses don’t take into account, however, are the psychological costs associated with behavior change. Many products fail because of a universal, but largely ignored, psychological bias: People irrationally overvalue benefits they currently possess relative to those they don’t."
          },
          "synonyms": [
            "“most companies recognised the benefits of switching（多数公司认识到转换的得失）” 对应原文 “economic switching costs that most companies routinely anticipate（多数公司习惯上都会预料到的经济转换成本）”",
            "“guarantees a successful innovation（保证创新成功）” 与原文 “Many products fail because of a universal, but largely ignored, psychological bias” 构成矛盾",
            "“don’t take into account / largely ignored（没有考虑、被忽视）” 对应题干中未被企业认识到的心理层面"
          ],
          "locatingTip": "定位：用 switching、companies 定位到 C 段末句，再顺势读到下一段 D 段（跨段定位时注意每段开头的字母标号不参与引文）。C 段末句 All of these are economic switching costs that most companies routinely anticipate 说企业习惯上都能预料到经济层面的转换成本，D 段首句用 however 转折指出企业没有把心理成本计算在内，紧接的 Many products fail 进一步说明结果。确定答案技巧：抓 D 段的转折词 however 与否定表达 don’t take into account，以及 Many products fail，说明“企业已认识到常规因素”并不等于成功。",
          "analysis": "C 段列举了消费者改变行为要承担的各类经济成本（开通费、学习成本、过时成本），并在末句说这些都是多数公司习惯上会预料到的转换成本。D 段用 however 转折，指出企业没有把与行为改变相关的心理成本计算在内，而许多产品正是由于一个普遍却被严重忽视的心理偏差而失败。既然企业考虑了常规因素之后产品依然大量失败，题干中“认识到转换的益处就能保证创新成功”就被原文直接否定，故答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：文章通篇在论证，即使企业做过常规测算，创新失败率仍高达 40%–90%，原文的落脚点恰恰是失败而非保证成功。",
            "为什么不是 NOT GIVEN：企业认知与创新结果之间的关系在 C、D 两段有清晰论述（预料到经济成本，却忽视心理成本，导致产品失败），属于明确的反驳，不是信息缺失。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Gender affects the loss and gain outcome in the real market place.",
          "translation": "性别会影响现实市场中的得失结果。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "For instance, studies show that most people will not accept a bet in which there is a 50% chance of winning $100 and a 50% chance of losing $100."
          },
          "synonyms": [
            "“loss and gain outcome（得失结果）” 对应原文 “losing $100 … winning $100” 以及本段反复出现的 losses 与 gains",
            "“the real market place（现实市场）” 对应原文 “in the marketplace” 与 studies、a survey of 1,500 customers 这类现实场景",
            "“most people / human beings / consumers” 等不区分性别的泛指词，说明原文没有做性别维度的切分"
          ],
          "locatingTip": "定位：用 loss and gain 这一语义场定位到 G 段（loss aversion 与赌局、电力公司客户调查）。确定答案技巧：带着“性别”这个核查点回原文扫读 gender、male、female、men、women 等词，全篇均未出现，因此题干所述既无法证实也无法证伪。",
          "analysis": "G 段在说明损失厌恶时使用的都是笼统的主体：studies show that most people、human beings、a survey of 1,500 customers of Pacific Gas and Electric，讨论的是人类普遍的心理特征，全篇没有任何按性别分组的数据、比较或结论，也没有出现 gender、men、women 一类词。题干把“得失结果”与“性别”建立因果联系，这在原文中没有对应信息，故答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文没有任何支持性别差异的证据，无法证实性别会影响得失结果。",
            "为什么不是 FALSE：原文既没有比较男女差异，也没有否定性别的作用，只是完全不涉及这一维度，因此不属于与原文矛盾，不能判 FALSE。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Endowment-effect experiment showed there was a huge gap between the seller’s anticipation and the chooser’s offer.",
          "translation": "禀赋效应实验显示，卖方的预期价格与选择方的出价之间存在巨大差距。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "I",
            "quote": "In one trial of this experiment, the Sellers priced the mug at $7.12, on average, but the Choosers were willing to pay only $3.12. In another trial, the Sellers and the Choosers valued the mug at $7.00 and $3.50, respectively. Overall, the Sellers always demanded at least twice as much to give up the mugs as the Choosers would pay to obtain them."
          },
          "synonyms": [
            "“the seller’s anticipation（卖方的预期价格）” 对应原文 “the Sellers priced the mug at $7.12 / the Sellers … valued the mug at $7.00”",
            "“the chooser’s offer（选择方的出价）” 同义替换为原文 “the Choosers were willing to pay only $3.12 / $3.50”",
            "“a huge gap（巨大差距）” 同义替换为原文 “the Sellers always demanded at least twice as much … as the Choosers would pay（卖方要价始终至少是买方愿付价格的两倍）”"
          ],
          "locatingTip": "定位：用 endowment-effect 以及实验中的角色名 Sellers 与 Choosers 定位到 I 段的马克杯实验。确定答案技巧：抓两组数字的直接对比（7.12 对 3.12、7.00 对 3.50），并验证段末总结句 at least twice as much，数字与总结句同时成立才能判 TRUE。",
          "analysis": "I 段描述 Thaler 及其同事测量禀赋效应量级的实验：一组人是 Sellers，被要求给出愿意出让马克杯的价格；另一组是 Choosers，被问在每一价位上是否选择马克杯。第一次试验中卖方平均要价 7.12 美元，而买方只愿付 3.12 美元；另一次试验两者分别为 7.00 与 3.50 美元；段末总结卖方要价始终至少是买方愿付价格的两倍。这与题干“卖方预期与买方出价之间存在巨大差距”完全一致，故答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文的四个具体价格与总结句 at least twice as much 都在支持“差距巨大”，与题干方向一致，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文明确给出了实验数据和总结性结论，属于事实性陈述，没有信息缺失。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Customers accept the fact peacefully when they are revealed the status quo bias.",
          "translation": "当现状偏差被揭示给顾客时，顾客会平静地接受这一事实。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "K",
            "quote": "In study after study, when researchers presented people with evidence that they had irrationally overvalued the status quo, they were shocked, skeptical, and more than a bit defensive."
          },
          "synonyms": [
            "“when they are revealed the status quo bias（当现状偏差被揭示给他们时）” 同义替换为原文 “when researchers presented people with evidence that they had irrationally overvalued the status quo”",
            "“accept the fact peacefully（平静地接受事实）” 与原文 “were shocked, skeptical, and more than a bit defensive（震惊、怀疑并且相当有抵触情绪）” 构成态度上的直接矛盾",
            "“irrationally overvalued the status quo” 对应题干中的 the status quo bias"
          ],
          "locatingTip": "定位：用 status quo bias 定位到全文最后一段 K 段。确定答案技巧：抓情绪形容词 shocked、skeptical、defensive 与题干 peacefully 之间的强烈反差；K 段末句 “awareness of them is not” 进一步说明人们对自身偏差缺乏觉察，也支持否定判断。",
          "analysis": "K 段说，人们对禀赋效应和现状偏差所隐含的行为倾向往往毫无觉察；在一个又一个研究中，当研究者拿出证据说明他们非理性地高估了现状时，他们的反应是震惊（shocked）、怀疑（skeptical）并且相当有防御性（more than a bit defensive）。段末总结这些行为倾向人人皆有，但人们对它们的觉察并不存在。题干说顾客会“平静地接受”，与原文描述的情绪反应相反，故答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文描述的是震惊、怀疑和防御性抵触，与“平静接受（peacefully）”完全相反。",
            "为什么不是 NOT GIVEN：原文明确写出了被揭示偏差后的情绪反应，属于对题干态度的直接否定，信息完整。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–13 单项选择题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 13
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "What does paragraph A illustrate in the business creative venture?",
          "translation": "A 段在商业创新事业方面说明了什么？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "According to one study, 47% of first movers have failed, meaning that approximately half the companies that pioneered new product categories later pulled out of those businesses."
          },
          "synonyms": [
            "“roughly half（大约一半）” 同义替换为原文 “approximately half”，也与前面的 47% 相呼应",
            "“new product business failed（新产品业务失败）” 同义替换为原文 “first movers have failed … later pulled out of those businesses”",
            "“business creative venture（商业创新事业）” 对应原文 “create new product categories or revolutionize old ones” 所描述的创新行为"
          ],
          "locatingTip": "定位：题干已把范围锁定在 A 段，只需读该段的数字与段末收束句。确定答案技巧：把四个选项与段落里的数字逐一对应——A 段唯一出现“约一半”的地方就是 47% 与 approximately half，其余选项的数字或说法都在 A 段找不到支撑。",
          "analysis": "A 段整体在说明新产品失败率极高：依品类不同，失败率在 40% 到 90% 之间，且过去 25 年几乎没有改善；美国包装食品行业每年推出 3 万个产品，其中 70% 到 90% 在货架上停留不超过 12 个月；即使是最具创新性的产品也多半不成功。段末用一项研究收束：47% 的先入者失败了，也就是说约有一半开创新产品类别的公司后来退出了这一业务。选项 C “大约一半的新产品业务失败”正是这一结论的概括，故答案是 C。",
          "traps": [
            "A 选项（above 70% of products stored in the warehouse）：原文说的是 70% 到 90% 的产品在货架上停留不超过 12 个月（don’t stay on store shelves for more than 12 months），既不是“存放在仓库”，也不是“70% 以上”这一表述，属于偷换概念。",
            "B 选项（only US packaged goods industry affected）：美国包装食品行业只是原文用 for instance 举出的一个例子，文章并未说只有该行业受影响，绝对化词 only 错误。",
            "D 选项（new products have a long life span）：与原文所述的高失败率和短货架寿命完全相反，A 段的重点是失败与退出，而不是长寿。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "What do specialists and freshers tend to think about why a product sells well?",
          "translation": "专家和新手倾向于认为产品为什么能畅销？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "After the fact, experts and novices alike tend to dismiss unsuccessful innovations as bad ideas that were destined to fail. Why do consumers fail to buy innovative products even when they offer distinct improvements over existing ones?"
          },
          "synonyms": [
            "“specialists and freshers（专家和新手）” 同义替换为原文 “experts and novices alike”",
            "“being creative and innovative enough（足够有创意和创新）” 对应原文 “innovative products … distinct improvements over existing ones”",
            "“why a product sells well（产品为什么卖得好）” 由原文的反问 “Why do consumers fail to buy innovative products …” 反向推出"
          ],
          "locatingTip": "定位：用 experts and novices（对应题干的 specialists and freshers）定位到 B 段首句。确定答案技巧：原文先陈述这些人“事后把失败的创新简单说成注定失败的坏点子”，再用反问句质疑“既然有显著改进，消费者为什么不买”，可见他们坚信“足够创新、有明显改进就该畅销”，而这正是作者要反驳的误区。",
          "analysis": "B 段首句说，事后来看专家和新手都倾向于把失败的创新判定为注定要失败的坏点子；紧接着的两个反问点出他们的隐含逻辑——创新产品相对现有产品有显著改进（distinct improvements），消费者理应购买，公司也没必要怀疑新产品的前景。也就是说，他们认为产品能否畅销取决于它是否足够有创意、改进是否足够明显。选项 B “足够有创意和创新”与之对应，故答案是 B。",
          "traps": [
            "A 选项（as more products stored on a shelf）：货架停留时间短是 A 段用来证明失败率高的现象，不是专家认为产品畅销的原因，属于张冠李戴。",
            "C 选项（having more chain stores）：全文没有任何关于连锁店数量的信息，属于无中生有。",
            "D 选项（learning from a famous company like Webvan）：Webvan 在整篇文章中都没有出现，是无关的干扰项。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "According to this passage, a number of products fail because of the following reason:",
          "translation": "根据本文，许多产品失败的原因是下列哪一项：",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "Many products fail because of a universal, but largely ignored, psychological bias: People irrationally overvalue benefits they currently possess relative to those they don’t. The bias leads consumers to value the advantages of products they own more than the benefits of new ones."
          },
          "synonyms": [
            "“a number of products fail because of（许多产品失败的原因是）” 同义替换为原文 “Many products fail because of”",
            "“they ignore the fact（它们忽视了这个事实）” 同义替换为原文 “a universal, but largely ignored, psychological bias”",
            "“people tend to overvalue the product they own（人们往往高估自己拥有的产品）” 同义替换为原文 “People irrationally overvalue benefits they currently possess”"
          ],
          "locatingTip": "定位：用 products fail 与 psychological 定位到 D 段，这一段正是解释失败原因的核心段落。确定答案技巧：题目问原因，因此锁定 because of 之后的名词短语 psychological bias，再看冒号后对它的解释——人们非理性地高估自己当前拥有的好处。",
          "analysis": "D 段明确给出失败原因：许多产品之所以失败，是因为一个普遍却被严重忽视的心理偏差，即人们会非理性地高估自己当前已经拥有的好处，而相对低估自己没有的东西。原文还进一步说明，这一偏差既让消费者高估自己已有产品的优势，也让企业高估自己开发的创新、看轻现有产品的优点。选项 A “它们忽视了人们往往高估自己拥有的产品这一事实”与原文的 largely ignored 以及 overvalue benefits they currently possess 完全吻合，故答案是 A。",
          "traps": [
            "B 选项（they are not confident with their products）：与原文相反，B 段指出企业对新产品往往信心过度（have more faith in new products than is warranted）。",
            "C 选项（they are familiar with people’s psychology state）：与原文相反，D 段明确说企业没有把心理成本纳入考虑（What businesses don’t take into account … are the psychological costs），是“不熟悉”而非“熟悉”。",
            "D 选项（they forget to mention the advantages of products）：原文表明企业很清楚产品在客观上的优势（objective advantages），失败并非因为忘记宣传优势。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "What does the “status quo bias” experiment, which was conducted by Kahneman and Tversky, suggest?",
          "translation": "由 Kahneman 和 Tversky 所做的“现状偏差”实验说明了什么？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "J",
            "quote": "Only 11% of the students who had been given the mugs and 10% of those who had been given the chocolate bars wanted to exchange their products. To approximately 90% of the students, giving up what they already had seemed like a painful loss and shrank their desire to trade."
          },
          "synonyms": [
            "“only 10% of chocolate bar owner is willing to swap（只有 10% 的巧克力持有者愿意交换）” 同义替换为原文 “10% of those who had been given the chocolate bars wanted to exchange their products”，swap 与 exchange 同义",
            "“status quo bias” 对应原文 “what economists William Samuelson and Richard Zeckhauser called the ‘status quo bias’” 的实验演示",
            "“only 10% / approximately 90%” 两个数字构成同一结论的两种表达"
          ],
          "locatingTip": "定位：用 status quo bias 与实验物品 chocolate bar 定位到 J 段。确定答案技巧：注意原文的推理链条——先给出偏好几乎五五开的分布（56% 选杯子、44% 选巧克力），再用 Logically … about half … should have traded 提出理论预期，随后用 That didn’t happen 推翻，最终落在真实的 11% 与 10% 两个数字上。",
          "analysis": "J 段先说 Kahneman 与 Tversky 的研究解释了人们为何即使有更好的替代品也倾向于守着现有的东西，随后给出 1989 年 Knetsch 对所谓 “status quo bias” 的实验演示（题目把实验归到 Kahneman and Tversky 名下，实际执行者是 Knetsch，理论来源是二人的研究）。实验中一开始被允许自由选择的学生有 56% 选马克杯、44% 选巧克力，几乎平分；按逻辑，后来拿到杯子的学生应有约一半愿意换成巧克力，反之亦然。但原文用 That didn’t happen 指出并非如此：拿到杯子的学生只有 11%、拿到巧克力的学生只有 10% 愿意交换，对约 90% 的学生来说，放弃已有的东西像是一种痛苦的损失。选项 D “只有 10% 的巧克力持有者愿意交换”精确对应原文的 10% 这一数字，故答案是 D。",
          "traps": [
            "A 选项（about half of them are willing to change）：约一半只是按偏好分布“逻辑上应当”交换的人数（Logically, therefore, about half … should have traded），原文紧接着用 That didn’t happen 否定了实际发生的情况。",
            "B 选项（student is always to welcome new items）：实验显示约 90% 的学生并不愿意交换，对新物品并非欢迎态度，与原文相反。",
            "C 选项（90% of both owners in a neutral position）：原文说对约 90% 的学生而言，放弃已有物品像是一种痛苦的损失（seemed like a painful loss），并因此削弱了交换意愿，绝不是中立态度。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
