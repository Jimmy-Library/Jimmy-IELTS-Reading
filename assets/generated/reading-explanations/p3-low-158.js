(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-low-158", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-low-158",
  "meta": {
    "examId": "p3-low-158",
    "title": "Game theory 博弈论",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 单项选择题（Choose the correct letter A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "What does the writer suggest about game-theory software in the first paragraph?",
          "translation": "关于博弈论软件，作者在第一段中暗示了什么？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Game-theory software then evaluates the ability of each of those players to influence others, and hence predicts the course of events."
          },
          "synonyms": [
            "“anticipates the outcome of future events” 同义替换为原文的 “predicts the course of events”，anticipate 对应 predict，the outcome of future events 对应 the course of events",
            "“This software” 回指原文的 “Game-theory software”",
            "原文第二句 “Computer models have been developed to work out how events will unfold” 中的 work out how events will unfold（推算事件将如何发展）同样对应“预判未来事件的走向”，与 C 呼应"
          ],
          "locatingTip": "定位：题干把范围限定为 in the first paragraph，因此只需精读第 1 段，不必通读全文。第 1 段共四句：第一句讲谈判成败取决于他人的选择，第二句讲计算机模型被开发来推算事件如何发展，第三句讲给玩家的目标、动机、影响力赋值，第四句讲软件评估玩家的影响力并预测事件进程。确定答案技巧：段末句的动词 predicts（预测）是本题的判分锚点，选项 C 用 anticipates the outcome of future events（预判未来事件的结果）作同义改写，predict 与 anticipate 同义、the course of events 与 the outcome of future events 同义，因此选 C。其余三个选项都比原文“多说了话”：A 谈传统谈判做法要作补充、B 谈软件成败取决于所赋数值是否准确、D 谈未来商业谈判会被该软件主宰，第 1 段都没有这些内容。",
          "analysis": "第 1 段是全文的概念铺垫，四句话层层递进：“According to game theory, our chances of success in negotiations are based on the choices of others.”（按照博弈论，我们谈判成功的几率取决于他人的选择）；“Computer models have been developed to work out how events will unfold as people and organisations act in what they perceive to be their own best interests.”（人们和组织会按照他们所认为的自身最大利益行事，为此人们开发了计算机模型来推算事件将如何发展）；“Numerical values are placed on the goals, motivations and influence of players, and likely options are considered.”（给玩家的目标、动机和影响力赋予数值，并考虑各种可能的选择）；末句即定位句：“Game-theory software then evaluates the ability of each of those players to influence others, and hence predicts the course of events.”（博弈论软件随后评估每位玩家影响他人的能力，从而预测事件的走向）。题干问作者在第一段对博弈论软件暗示了什么，末句的宾语 the course of events（事件的发展进程）和谓语 predicts（预测）合起来就是“预判未来事件的走向”，与选项 C 完全对应。做本题时注意题干用的是 suggest（暗示），并不要求原文有字面对应的表述，但答案必须落在原文实际提到的功能上：predicts、work out how events will unfold 都支持 C；而 A（补充传统做法）、B（数值准确性决定成败）、D（软件主导未来谈判）在第一段找不到任何依据。",
          "traps": [
            "为什么不是 A：第 1 段只描述软件的运作步骤（赋数值、评估影响力、预测事件走向），完全没有提到“传统谈判做法（traditional negotiating practices）”需要用来补充软件，属于原文未提及的无中生有。",
            "为什么不是 B：原文确实说 “Numerical values are placed on the goals, motivations and influence of players”，但这只是描述软件的运作步骤，并没说软件成功与否取决于这些数值是否准确；accuracy 这一概念恰恰是第 2 段的议题（给软件输入准确数据在政治事务上尤其棘手），把它挪到第 1 段属于跨段偷换。",
            "为什么不是 D：第 1 段只说软件能预测事件的进程，没有任何“未来的商业谈判将由该软件主导（dominated）”的说法，dominated 一词在原文并不存在，属于范围与程度的双重夸大。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Reinier van Oosten says predicting what people will do works best if",
          "translation": "赖尼尔·范·奥斯坦（Reinier van Oosten）说，如果______，预测人们的行为效果最好。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "However, sorting out people's motivations is much easier when making money is the main object."
          },
          "synonyms": [
            "“predicting what people will do” 对应原文的 “sorting out people's motivations”，都是指弄清人的行为动机、据以预测其行动",
            "“works best” 同义替换为原文的 “is much easier”（容易得多，即效果最好）",
            "“profit is the primary motivator” 同义替换为原文的 “making money is the main object”，profit 对应 making money，the primary motivator 对应 the main object"
          ],
          "locatingTip": "定位：题干给出大写人名 Reinier van Oosten，这是第 2 段唯一的人名，扫读时盯住人名即可一步锁定该段，无需读其它段落。确定答案技巧：题干问“什么条件下预测效果最好”，原文用 However 引出转折句 “However, sorting out people's motivations is much easier when making money is the main object.”，when 引导的正是“更容易/最有效”的前提条件——赚钱是主要目标。D 把 making money 改写为 profit、把 the main object 改写为 the primary motivator，是同义替换，因此选 D。特别提醒：C 用到的 hatred 出现在紧邻的上一句，但那是让预测“不可靠”的非理性情绪，方向恰好相反。",
          "analysis": "第 2 段先承认许多个人不喜欢让电脑替自己决策，但很多组织已经在为律所、企业和政府运行这类模拟；随后话锋一转：“But feeding software with accurate data on all the players involved is especially tricky for political matters.”（但是在政治事务上，给软件输入有关所有参与方的准确数据尤其棘手）。接着以荷兰 Decide 公司的 Reinier van Oosten 为例说明原因：“notes that predictions may become unreliable when people unexpectedly give in to 'non-rational emotions', such as hatred, rather than pursuing what is apparently in their best interests.”（他指出，当人们出人意料地屈从于仇恨之类的“非理性情绪”，而不去追求表面上的最大利益时，预测就会变得不可靠）。最后用 However 转折出本题定位句：“However, sorting out people's motivations is much easier when making money is the main object.”（不过，当赚钱是主要目标时，厘清人们的动机就容易得多）。题干把这个转折句改写成正面提问——“什么情况下预测最有效”，答案自然是“金钱（利润）是首要动机”。下一句 “Accordingly, modelling behaviour using game theory is proving especially useful when applied to economics.”（因此，用博弈论给行为建模在应用于经济学时特别有用）从结果侧印证了同一判断：经济领域以赚钱为核心，所以预测最灵，故答案为 D。",
          "traps": [
            "为什么不是 A：原文提到的情绪是负面干扰项——人们陷入 non-rational emotions 时预测会 unreliable（不可靠）；题干问的是“什么条件下预测最有效”，让参与者诚实表达情感只会加重这种非理性，与“最有效”相反。",
            "为什么不是 B：第 2 段完全没有出现 culture、cultural understanding 或任何“理解客户文化”的内容，属于原文未提及。",
            "为什么不是 C：hatred（仇恨）确实是原文出现过的词，但它的角色是“非理性情绪”的举例，用来解释预测为何可能不可靠；C 把导致失灵的因素当成了成功的前提，方向相反。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "After using game-theory software in 2006, Dr Milgrom instructed his clients to",
          "translation": "2006 年使用博弈论软件之后，米尔格罗姆（Milgrom）博士指示他的客户______。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Milgrom's clients were then directed to obtain a collection of smaller, less-expensive licences instead."
          },
          "synonyms": [
            "“instructed” 同义替换为原文的 “were directed to”，原文用被动语态，题干改回主动语态",
            "“a mix of licences” 同义替换为原文的 “a collection of smaller, less-expensive licences”，a mix 对应 a collection，licences 为原词复现",
            "原文前一句 “determined that certain big licences were being over-valued” 交代了改买小牌照的原因，正是它与选项 A “买大牌照”构成对立"
          ],
          "locatingTip": "定位：题干的时间 2006 与专有名词 Dr Milgrom 都集中在第 3 段，第 3 段整段讲的就是美国联邦通信委员会无线电频谱牌照拍卖，扫到 Milgrom 后顺着读到他给客户的指令句即可。确定答案技巧：题干 instructed his clients to 对应原文的被动式 “Milgrom's clients were then directed to obtain …”，动词 direct 与 instruct 同义；接着看“买什么”——原文是 a collection of smaller, less-expensive licences（一批更小、更便宜的牌照），与 D “purchase a mix of licences”（购买多种牌照的组合）对应。判分前务必回看上一句：软件判定某些大牌照被高估（over-valued），所以客户才被引向小牌照，这也说明了 A 为何不成立。",
          "analysis": "第 3 段讲 2006 年美国联邦通信委员会（FCC）举行无线电频谱牌照在线拍卖，斯坦福大学教授 Paul Milgrom 定制博弈论软件协助一个竞标联合体。文中先写软件的功能：“When the auction began, Milgrom's software tracked competitors' bids to estimate their budgets for the 1,132 licences on offer.”（拍卖开始时，米尔格罗姆的软件跟踪竞争对手的竞价，以估算他们对 1132 张待售牌照的预算）；“Crucially, the software estimated the secret values bidders placed on specific licences, and determined that certain big licences were being over-valued.”（关键是，软件估算出竞标者对特定牌照的秘密估值，并判定某些大牌照被高估）；随后就是定位句：“Milgrom's clients were then directed to obtain a collection of smaller, less-expensive licences instead.”（随后他的客户被指引改为获取一批更小、更便宜的牌照）。题干用 instructed 替换 directed，用 a mix of licences 概括 a collection of smaller, less-expensive licences，语义完全一致，因此答案是 D。段末的成果也印证了这一策略：两名客户为等量频谱比竞争对手少付约三分之一，节省近 12 亿美元。",
          "traps": [
            "为什么不是 A：原文说软件判定某些大牌照被高估（being over-valued），客户因此被指引“改为（instead）”购买一批更小更便宜的小牌照；A “买大牌照”与原文的行动方向完全相反。",
            "为什么不是 B：原文没有任何客户与其它竞标方直接谈判的描写——软件的作用是跟踪对手竞价、估算其预算与估值，再由软件给出建议，并非让客户自己去找对手谈。",
            "为什么不是 C：原文没有出现过“在拍卖结束时出一个大报价”这类信息，胜负是靠软件估算估值后选择牌照组合实现的，C 属于原文未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "The writer refers to Stephen Black's ice-cream-seller example in order to",
          "translation": "作者提到斯蒂芬·布莱克（Stephen Black）的冰淇淋摊贩例子，是为了______。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Introduce a third seller, however, and the stifling equilibrium is broken as relocations and pricing changes energise the market."
          },
          "synonyms": [
            "“new competitors” 同义替换为原文的 “a third seller”，第三个摊贩就是新进入的竞争者",
            "“the impact … on business” 同义替换为原文的 “the stifling equilibrium is broken as relocations and pricing changes energise the market”，即新竞争者一进入，原本的僵局被打破、市场被重新激活",
            "原文举例后的总括句 “software designers can assess the effect of change” 中的 the effect of change 与题干的 the impact 呼应，说明举例目的正是展示变化带来的影响"
          ],
          "locatingTip": "定位：题干给出大写人名 Stephen Black 与特征词 ice-cream，两者都只出现在第 4 段，一读即可锁定，不必看其它段落。确定答案技巧：题干用 in order to 提问“举例的目的”，这类题的答案通常在例子之后的总括句里。第 4 段在冰淇淋例子后写 “By studying a chain of events such as this, software designers can assess the effect of change and see the patterns in possible outcomes that may occur.”，其中 the effect of change 正对应选项 A 的 the impact；而例子本身的落点是 “Introduce a third seller, however, and the stifling equilibrium is broken …”，第三个卖家就是新竞争者，因此 A “新竞争者对企业的影响”最贴合。",
          "analysis": "第 4 段讲 PA Consulting 用博弈论建模为客户解决从制药到电视节目制作等具体问题，英国政府部门还请它建模测试分区规则。为说明建模的作用，PA 的建模师 Dr Stephen Black 举了冰淇淋摊的例子：两家冰淇淋摊贩面对同一片长海滩时，会把摊位背靠背摆在中间且都不肯挪动，“each seller prevents the other from relocating—no other spot would be closer to more people”（每个摊贩都阻止对方迁移，因为再没有别的位置能比这里更靠近更多人），结果是海滩两端的顾客倒霉。接着是定位句：“Introduce a third seller, however, and the stifling equilibrium is broken as relocations and pricing changes energise the market.”（然而一旦引入第三个卖家，这种令人窒息的均衡就被打破：重新选址和价格变化让市场重新活跃起来）。例子之后是总结：“By studying a chain of events such as this, software designers can assess the effect of change and see the patterns in possible outcomes that may occur.”（通过研究这样的事件链条，软件设计者可以评估变化带来的影响，并看清可能出现的结果模式）。可见作者举这个例子是为了展示“新增一个竞争者（第三个卖家）”如何改变市场状态，即新竞争者对企业的影响，故选 A。",
          "traps": [
            "为什么不是 B：例子确实含“位置”内容（两家都挤在中间、两端顾客吃亏），但原文恰恰说这种位置格局造成了谁也动不了的僵局，位置只是例子的铺垫，不是作者的论证目的；作者的落点是第三个卖家进入后僵局被打破、市场被激活。",
            "为什么不是 C：原文没有出现“企业必须遵循某种策略（must follow a strategy）”的说法，例子讲的是市场结构因新竞争者出现而变化，而非策略选择的强制性，属于无中生有。",
            "为什么不是 D：pricing changes 确实在原文出现，但它与 relocations 并列，是第三家卖家进入后市场被激活的表现之一；原文并未展开“定价如何影响销售”的机制，把它当成举例目的属于抓住次要词。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "Ponsatí believes business negotiations are more likely to progress if",
          "translation": "庞萨蒂（Ponsatí）认为，如果______，商务谈判更有可能取得进展。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "However, difficult negotiations can often be pushed along by neutral mediators, especially if they are entrusted with the secret bottom lines of all parties. Ponsatí's idea was that if a human mediator was not trusted, affordable or available, a computer could do the job instead."
          },
          "synonyms": [
            "“more likely to progress” 同义替换为原文的 “can often be pushed along”（可以被推动向前）",
            "“mediators or computers” 分别对应原文的 “neutral mediators” 与 “a computer”",
            "“take over the bargaining process” 对应原文的 “do the job instead”，即由电脑替代真人来承担调解工作"
          ],
          "locatingTip": "定位：题干专有名词 Ponsatí 在第 5 段反复出现，第 5 段整段都是她的调解机制构想，锁定该段精读即可。确定答案技巧：题干问“什么情况下谈判更可能推进”，原文用 However 给出推动力来源——“difficult negotiations can often be pushed along by neutral mediators”，紧接着又说若没有可信任、负担得起或可到场的真人调解者，就“a computer could do the job instead”。两句合起来正是“由中立的调解者或电脑接手”，对应 B。注意原文首句给出的相反设定也很关键：先透露自己愿付上限的一方会失去议价能力，因此 A “由利益相关方提出方案”不符合她的设计逻辑——方案应由中立的第三方或电脑提出。",
          "analysis": "第 5 段讲博弈论软件的另一条发展方向——协助谈判与调解。作者先写谈判的困境：“She accepted that, as negotiators everywhere know, the first side to disclose the maximum amount that it is willing to pay loses considerable bargaining power.”（她承认，正如各地谈判者都清楚的那样，先透露自己愿意支付的最高金额的一方会失去相当大的议价能力）；“Without leverage, it can be pushed backward in the bargaining process by a clever opponent.”（没有筹码，它就会被聪明的对手在谈判过程中逼退）；再看定位句段：“However, difficult negotiations can often be pushed along by neutral mediators, especially if they are entrusted with the secret bottom lines of all parties. Ponsatí's idea was that if a human mediator was not trusted, affordable or available, a computer could do the job instead.”（不过，困难的谈判往往可以由中立的调解者推动，尤其是当他们被托付了各方的保密底线时。庞萨蒂的想法是，如果真人调解者不被信任、费用过高或找不到，就可以由电脑来代劳）。题干所说的“谈判更可能取得进展”就是原文的 pushed along，实现者是中立的真人调解者或电脑，因此答案是 B。段末她还总结这类“调解机器”可以“push negotiations forward by unlocking information that would otherwise be withheld from an opponent”（通过公开原本不会透露给对手的信息来推动谈判前进），进一步印证 B。",
          "traps": [
            "为什么不是 A：原文的设计是由中立的调解者或电脑来 “split the difference and propose an agreement”（折中并提议方案），而不是由谈判的某一方（interested party）提出方案；同段还强调先透露底线的一方会失去议价能力，由利益相关方主导提案与原文逻辑相悖。",
            "为什么不是 C：原文没有出现任何关于“谈判规则（the rules of negotiating）”的内容，属于原文未提及。",
            "为什么不是 D：原文说若双方都不透露让步，谈判会 “become very slow or collapse”（变得非常缓慢或崩溃），可见时间被拖延本身就是问题，不是促成进展的条件，D 与原文方向相反。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–35 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 35
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Game-theory software may be unhelpful when dealing with political issues.",
          "translation": "博弈论软件在处理政治事务时可能起不了作用。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "But feeding software with accurate data on all the players involved is especially tricky for political matters."
          },
          "synonyms": [
            "“may be unhelpful” 与原文的 “is especially tricky”（尤其棘手、难办）方向一致：棘手即难以发挥作用",
            "“when dealing with political issues” 同义替换为原文的 “for political matters”",
            "原文随后补充 “predictions may become unreliable when people unexpectedly give in to 'non-rational emotions'”，unreliable（不可靠）进一步支持“可能起不了作用”的判断"
          ],
          "locatingTip": "定位：题干关键词 political 在第 2 段以 political matters 的形式出现，而第 2 段正是讨论政治谈判建模局限的段落，一步即可锁定。确定答案技巧：判断题先划出题干的核心判断——“may be unhelpful（可能没用）”。原文用 But 转折指出在政治事务上给软件输入准确数据 “especially tricky”，紧接着又说预测会 “unreliable”，两处都是负面评价，方向与题干一致，故判 YES。注意题干用的是 may 这种留有余地的语气，与原文 unreliable 的可能性表述刚好匹配；不要因为看到 But/However 转折就误判成作者在反驳题干。",
          "analysis": "第 2 段开头先承认这类模拟已经被广泛使用：“Although many individuals would feel uncomfortable having a computer make decisions for them, many organisations run such computer simulations for law firms, companies and governments.”（尽管许多人对于让电脑替自己做决定感到不适，许多组织还是为律所、企业和政府运行这类计算机模拟）。随后用 But 转折点出局限，即本题定位句：“But feeding software with accurate data on all the players involved is especially tricky for political matters.”（但是，对于政治事务而言，要给软件输入关于所有参与方的准确数据尤其棘手）。紧接着以 Decide 公司的 Reinier van Oosten 为例说明原因：“notes that predictions may become unreliable when people unexpectedly give in to 'non-rational emotions', such as hatred, rather than pursuing what is apparently in their best interests.”（他指出，当人们出人意料地屈从于仇恨之类的“非理性情绪”，而不去追求表面上的最大利益时，预测就可能变得不可靠）。政治谈判中人们的决定容易受非理性情绪影响，因此作者的态度很明确：博弈论软件处理政治事务时可能不管用。题干用 may be unhelpful 对应原文的 especially tricky 与 unreliable，二者同向，故选 YES。",
          "traps": [
            "为什么不是 NO：原文两处表述——“is especially tricky for political matters” 与 “predictions may become unreliable”——都是对政治领域应用的负面评价，与题干“可能起不了作用”方向一致，原文并没有任何“其实很有效”的正面表述可供反驳。",
            "为什么不是 NOT GIVEN：原文用整整两句专门讨论政治事务中建模的困难（准确数据难输入、预测容易失灵），作者的看法已经明确表达，不属于没有提及或语焉不详。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "Dr Milgrom was confident about applying his software to an auction in 2006.",
          "translation": "米尔格罗姆博士对在 2006 年的拍卖中应用自己的软件很有信心。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "customised his game-theory software to assist a consortium of bidders. He was apprehensive at first, but the result was a triumph."
          },
          "synonyms": [
            "“was confident” 与原文的 “was apprehensive” 构成反义对立，apprehensive 意为忧虑的、担心的",
            "“applying his software to an auction in 2006” 同义替换为原文的 “In 2006, in the run-up to an online auction of radio-spectrum licences … customised his game-theory software to assist a consortium of bidders”"
          ],
          "locatingTip": "定位：专有名词 Dr Milgrom 与年份 2006 都出现在第 3 段开头，全文只有这一段写拍卖，扫到人名和年份即可锁定。确定答案技巧：判断题里出现表示心理状态的形容词（confident、worried、reluctant 之类）时，必须回原文找到同类的情绪词。原文明确说 “He was apprehensive at first”，apprehensive 意为“忧虑的、担心的”，与 confident（自信的）正好相反；后半句 but the result was a triumph 只说明结果成功，不能反推他事前有信心，因此判 NO。",
          "analysis": "第 3 段开头交代背景：“In 2006, in the run-up to an online auction of radio-spectrum licences by America's Federal Communications Commission, Dr Paul Milgrom, a consultant and Stanford University professor in the United States, customised his game-theory software to assist a consortium of bidders.”（2006 年，在美国联邦通信委员会无线电频谱牌照在线拍卖的筹备阶段，咨询顾问、美国斯坦福大学教授 Paul Milgrom 博士定制了自己的博弈论软件，以协助一个竞标联合体）。紧接着的一句就是本题的判断依据：“He was apprehensive at first, but the result was a triumph.”（他起初很担心，但结果大获成功）。apprehensive 表示担忧、忐忑，与题干 was confident（很有信心）正好相反。题目考的正是“结果成功不等于事前自信”这一区分：原文用 but 把“事前的担心”和“事后的成功”并列，题干却把事后的成功情绪搬到了事前，因此答案是 NO。",
          "traps": [
            "为什么不是 YES：原文用 apprehensive at first 描述他事前的心理状态，apprehensive 意为“忧虑的、不安的”，与 confident 是反义词；同句后半的 the result was a triumph 说的是结果评价，不能改写成事前信心。",
            "为什么不是 NOT GIVEN：原文对他的心理状态有明确交代（He was apprehensive at first），信息存在且与题干相反，符合 NO 的判定条件，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "Dr Ponsatí believes 'mediation machines' are an inappropriate method of negotiation in areas other than business.",
          "translation": "庞萨蒂博士认为，在商业以外的领域，“调解机器”是一种不合适的谈判手段。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Ponsatí, now head of the Institute of Economic Analysis at the Autonomous University of Barcelona in Spain, says such 'mediation machines' could be employed to push negotiations forward by unlocking information that would otherwise be withheld from an opponent."
          },
          "synonyms": [
            "“are an inappropriate method” 在原文中找不到任何对应：原文用 “could be employed to push negotiations forward”（可以用来推动谈判前进）作正面评价，方向相反",
            "“in areas other than business” 在原文中没有对应表述：庞萨蒂只在一般意义上谈调解机器，从未按业务领域划分适用与不适用",
            "“'mediation machines'” 是原文原词复现，出现在第 5 段末句"
          ],
          "locatingTip": "定位：题干带引号的特征词 mediation machines 在原文第 5 段末句原样出现（原文写作‘mediation machines'），直接锁定该句即可。确定答案技巧：判断题遇到“某人认为某手段在某个领域不合适”这类跨领域评价时，要在原文找“领域适用性”的表态。第 5 段里庞萨蒂只说调解机器能推动谈判、公开对方原本会保留的信息，完全没有“在商业以外不合适”的判断；第 6 段开头反而是作者自己提出问题——这种软件能否从拍卖竞价、公共事业定价扩展到解决政治与军事争端，说明“能否跨领域”在文中仍是开放问题。原文既未肯定也未否定，故判 NOT GIVEN。",
          "analysis": "第 5 段末句是庞萨蒂对调解机器的整体评价，即定位句：“Ponsatí, now head of the Institute of Economic Analysis at the Autonomous University of Barcelona in Spain, says such ‘mediation machines' could be employed to push negotiations forward by unlocking information that would otherwise be withheld from an opponent.”（现任西班牙巴塞罗那自治大学经济分析研究所所长的庞萨蒂说，这类“调解机器”可以被用来推动谈判前进，方法是公开原本不会透露给对手的信息）。句中只有正面用途（push negotiations forward），没有任何“不合适”“不适用于某领域”的评价。紧接着的第 6 段是作者本人的设问：“Could mediation which has been achieved using software based on game theory spread from auction bids and utility pricing to resolving political and military disputes?”（用博弈论软件实现的调解，能否从拍卖竞价、公共事业定价扩展到解决政治与军事争端？），可见跨领域是否可行在文中仍是悬而未决的问题，更没有庞萨蒂的否定表态。题干凭空给庞萨蒂安了一个“商业以外不合适”的立场，属于信息缺失，故判 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文对调解机器只有正面描述（could be employed to push negotiations forward），并没有她说该手段在商业以外不合适的表述；第 6 段提出的跨领域扩展问题也说明原文对此持开放态度，不存在支持“不合适”的证据。",
            "为什么不是 NO：判 NO 需要原文有“她其实认为该手段适用于商业以外领域”的明确表态，而原文既没有按领域向她提问，也没有让她划界，她谈的是一般性的谈判推动机制，既未肯定也未否定，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "Military organisations refuse to accept that software based on game theory could prevent wars.",
          "translation": "军事组织拒绝接受基于博弈论的软件能够防止战争。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Today's game-theory software is not yet sufficiently advanced to mediate between warring countries. But one day opponents on the brink of war might be tempted to use it to exchange information without having to engage in conflict."
          },
          "synonyms": [
            "“Military organisations” 在原文中没有出现：原文涉及战争的主体是 “warring countries”（交战国）与 “opponents on the brink of war”（濒临开战的对手），并不是军事组织",
            "“refuse to accept” 在原文中没有对应：原文只谈技术是否足够先进（not yet sufficiently advanced）与未来可能被采用（might be tempted to use it），没有任何拒斥（refuse）的表态",
            "“software based on game theory could prevent wars” 与原文 “opponents could learn how a war would turn out, skip the fighting and strike a deal” 在“避免战争”这一点上语义相近，但主体与态度都不同"
          ],
          "locatingTip": "定位：题干关键词 war 集中在第 6 段（warring countries、on the brink of war、how a war would turn out），第 6 段是全文唯一谈政治与军事争端的段落。确定答案技巧：逐项核对题干要素——原文明明有“软件目前还不足以调解交战国”“将来濒战的对手可能用它交换信息”这类表述，却完全没有出现 Military organisations（军事组织）这个行为主体，也没有任何 refuse to accept（拒绝接受）的态度描写；主体缺失加上态度缺失，属于典型的信息不存在，故判 NOT GIVEN。切忌把“软件尚不够先进（not yet sufficiently advanced）”想当然读成“军方拒绝接受”：前者是技术评价，后者是机构立场，两者不是一回事。",
          "analysis": "第 6 段是全文收尾，作者先设问调解软件能否从拍卖竞价、公共事业定价扩展到解决政治与军事争端，然后给出判断：“Today's game-theory software is not yet sufficiently advanced to mediate between warring countries.”（如今的博弈论软件还不够成熟，无法在交战国之间进行调解）；“But one day opponents on the brink of war might be tempted to use it to exchange information without having to engage in conflict.”（但总有一天，濒临开战的对手可能会想用它来交换信息，从而不必付诸冲突）；“According to some game theorists, opponents could learn how a war would turn out, skip the fighting and strike a deal.”（一些博弈论学者认为，对手可以借此预知战争的结局，跳过交战直接达成协议）。这些话谈的是技术成熟度以及交战国家的潜在选择，全文从未出现“军事组织”这一主体，更没有说它们拒绝接受什么。题干的两个关键成分（Military organisations 与 refuse to accept）在原文都找不到落点，故判 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文没有出现军事组织这一主体，也没有任何“拒绝接受”的表述；题干把“软件还不够成熟”这一技术判断替换成了“军方拒绝接受”的机构立场，属于无据推断。",
            "为什么不是 NO：判 NO 要求原文明确表示军事组织“接受”该软件能阻止战争，而原文连军事组织都未提及，自然也不存在相反表态；既无肯定证据也无否定证据，只能判 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 36–40 句子结尾匹配（Complete each sentence with the correct ending, A–F）",
      "mode": "per_question",
      "questionRange": {
        "start": 36,
        "end": 40
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "According to Reinier van Oosten, game-theory software fails when",
          "translation": "根据赖尼尔·范·奥斯坦（Reinier van Oosten）的说法，当______时，博弈论软件会失灵。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "notes that predictions may become unreliable when people unexpectedly give in to 'non-rational emotions', such as hatred, rather than pursuing what is apparently in their best interests."
          },
          "synonyms": [
            "“game-theory software fails” 同义替换为原文的 “predictions may become unreliable”，预测不可靠即软件失灵",
            "“when” 与原文的 “when people unexpectedly give in to 'non-rational emotions'” 中的 when 直接对应，都引导失灵的条件",
            "“people allow their feelings to influence decisions” 同义替换为原文的 “give in to 'non-rational emotions', such as hatred, rather than pursuing what is apparently in their best interests”，即让情绪而非利益左右决定"
          ],
          "locatingTip": "定位：题干中的大写人名 Reinier van Oosten 只在第 2 段出现，且“软件失灵的条件”紧跟着他发言的引出语 notes that，一步锁定。确定答案技巧：这类“前半句加结尾”的题，先拆出主干关键词——主语是 game-theory software，谓语是 fails，条件是 when 从句。原文说预测在人们屈从于“非理性情绪”（non-rational emotions）时会变得 unreliable，unreliable 与 fails 同义，情绪化的决定就是让软件失灵的条件，因此选 E。填完后要回读整句：“game-theory software fails when people allow their feelings to influence decisions”，逻辑通顺且与原文一致。",
          "analysis": "第 2 段在提出“给政治事务的软件输入准确数据尤其棘手”之后，引出 Decide 公司的 Reinier van Oosten 的说明，即定位句：“Reinier van Oosten of Decide, a Dutch firm that models political negotiations, notes that predictions may become unreliable when people unexpectedly give in to 'non-rational emotions', such as hatred, rather than pursuing what is apparently in their best interests.”（荷兰为政治谈判建模的公司 Decide 的赖尼尔·范·奥斯坦指出，当人们出人意料地屈从于仇恨之类的“非理性情绪”，而不去追求表面看来最符合自身利益的做法时，预测就可能变得不可靠）。题干用 fails（失灵）概括 unreliable（不可靠），用 people allow their feelings to influence decisions（让人受情感影响做决定）概括 give in to non-rational emotions（屈从于非理性情绪），两处都是同义改写，因此结尾应选 E。注意同段后半句给出的是相反情形——“当赚钱成为主要目标时，厘清动机就容易得多”，那是软件最好用的条件，不是失灵的条件。",
          "traps": [
            "为什么不是 A：something is thought to be worth more than it really is（被高估）对应的是第 3 段软件判定大牌照 over-valued 的情节，属于第 37 题的答案，与范·奥斯坦谈的情绪问题无关。",
            "为什么不是 B：discussions between the parties begin to break down（讨论开始破裂）对应第 5 段 “negotiations can become very slow or collapse”，属于第 40 题的答案。",
            "为什么不是 C：too much information is given to the other parties early on（过早透露过多信息）对应第 5 段“先透露愿付上限者会失去议价能力”，属于第 39 题的答案。",
            "为什么不是 D：businesses consider possible future developments（企业考虑未来可能的发展）对应第 4 段末句 “look at future repercussions when making business decisions”，属于第 38 题的答案。",
            "为什么不是 F：a solution requires face-to-face negotiation（解决方案需要面对面谈判）在原文没有任何对应；恰恰相反，庞萨蒂设想在真人调解者不可得时由电脑代劳，正是为了不必面对面。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "Dr Milgrom's software is successful in detecting if",
          "translation": "米尔格罗姆博士的软件能够成功地检测出是否______。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "the software estimated the secret values bidders placed on specific licences, and determined that certain big licences were being over-valued."
          },
          "synonyms": [
            "“is successful in detecting” 同义替换为原文的 “estimated … and determined”，估算并判定即成功检测出",
            "“something is thought to be worth more than it really is” 同义替换为原文的 “were being over-valued”，被高估即被认为比实际更值钱",
            "“if” 与原文 determined that 引导的宾语从句对应，表示软件判断出的一种情形"
          ],
          "locatingTip": "定位：题干中的 Dr Milgrom 与软件功能都集中在第 3 段，且段内只有一处讲软件“判定”某事，即带有 determined that 的句子。确定答案技巧：题干说软件“成功检测出是否”，重点在检测的对象。原文写软件先估算竞标者对特定牌照的秘密估值（estimated the secret values），再判定某些大牌照被高估（determined that certain big licences were being over-valued）；over-valued 意为被高估，即“被认为比实际更值钱”，正好是选项 A。注意区分同段的另一处软件功能 tracked competitors' bids to estimate their budgets（跟踪竞价估算预算），那是估算预算而非判断高估。",
          "analysis": "第 3 段详述米尔格罗姆的软件在 2006 年在线频谱拍卖中的用途：“When the auction began, Milgrom's software tracked competitors' bids to estimate their budgets for the 1,132 licences on offer.”（拍卖开始时，软件跟踪竞争对手的竞价，估算他们对 1132 张待售牌照的预算）。接着是定位句：“Crucially, the software estimated the secret values bidders placed on specific licences, and determined that certain big licences were being over-valued.”（关键是，软件估算出竞标者对特定牌照私下给出的估值，并判定某些大牌照被高估了）。题干的 detecting（检测出）对应 determined（判定），条件对象则是 over-valued 这一状况，即某些牌照“被认定的价值高于其真实价值”，与选项 A “something is thought to be worth more than it really is” 完全等价，因此答案是 A。这一判定随后直接改变了客户的策略——改为购买一批更小更便宜的牌照，可见“识别高估”正是软件的功劳所在。",
          "traps": [
            "为什么不是 B：discussions between the parties begin to break down（双方讨论开始破裂）是第 5 段描述谈判僵局的内容，与软件估算牌照估值无关。",
            "为什么不是 C：too much information is given to the other parties early on（过早向对方透露过多信息）同样出自第 5 段关于透露底线会丧失议价能力的论述。",
            "为什么不是 D：businesses consider possible future developments（企业考虑未来可能的发展）出自第 4 段布莱克关于建模让客户更关注 future repercussions 的总结。",
            "为什么不是 E：people allow their feelings to influence decisions（人们让情感影响决定）出自第 2 段范·奥斯坦谈的非理性情绪，第 3 段的拍卖模型恰恰建立在“赚钱是主要目标”这一理性前提上。",
            "为什么不是 F：a solution requires face-to-face negotiation（方案需要面对面谈判）在原文找不到依据，且第 5 段设想的是由电脑替代真人调解。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Dr Black's game-theory software is a helpful tool when",
          "translation": "布莱克博士的博弈论软件在______时是一种有用的工具。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "As a result, the use of modelling makes clients more inclined to look at future repercussions when making business decisions, Black says."
          },
          "synonyms": [
            "“is a helpful tool when” 同义替换为原文的 “the use of modelling makes clients more inclined to …”，即建模产生了有益的影响",
            "“businesses consider possible future developments” 同义替换为原文的 “look at future repercussions when making business decisions”，future developments 对应 future repercussions",
            "“Dr Black” 与原文句末的 “Black says” 原词复现，确认这是他的观点"
          ],
          "locatingTip": "定位：题干的人名 Dr Black 只出现在第 4 段，且段末以 Black says 收束，因此本题的答案就在该段最后一句。确定答案技巧：题干说该软件“在什么情况下有用”，原文用 As a result 引出结论：使用建模让客户在做商业决策时更倾向于考虑未来的连带影响（look at future repercussions）。客户的这种行为特征对应选项 D “businesses consider possible future developments”，因此答案是 D。注意不要被本题所在的冰淇淋例子牵着走——那个例子讲的是新竞争者打破僵局（对应第 30 题），而本题问的是布莱克对建模价值的总结。",
          "analysis": "第 4 段先说明 PA Consulting 用博弈论建模帮客户解决具体问题，再用冰淇淋摊的例子说明建模如何展示“变化带来的影响”（By studying a chain of events such as this, software designers can assess the effect of change and see the patterns in possible outcomes that may occur），最后以定位句收束：“As a result, the use of modelling makes clients more inclined to look at future repercussions when making business decisions, Black says.”（布莱克说，其结果是，使用建模让客户在做商业决策时更愿意考虑未来的连带影响）。题干的 a helpful tool（有用的工具）对应 the use of modelling（建模的使用），条件部分对应 look at future repercussions when making business decisions，即企业在决策时会考虑未来的各种可能发展，正是选项 D，因此答案是 D。这一句同时也是本段的结论句，考官常用它来设置“总结性匹配”，做题时要留意 As a result、consequently 这类信号词。",
          "traps": [
            "为什么不是 A：something is thought to be worth more than it really is 出自第 3 段软件对牌照 over-valued 的判定，属于第 37 题的答案。",
            "为什么不是 B：discussions between the parties begin to break down 出自第 5 段 “negotiations can become very slow or collapse”，属于第 40 题的答案。",
            "为什么不是 C：too much information is given to the other parties early on 出自第 5 段透露底线丧失议价能力的论述，属于第 39 题的答案。",
            "为什么不是 E：people allow their feelings to influence decisions 出自第 2 段对非理性情绪的说明，与第 4 段的建模结论无关。",
            "为什么不是 F：a solution requires face-to-face negotiation 在原文没有依据；第 4 段讲的是软件建模评估变化的影响，与谈判形式无关。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "According to Dr Ponsatí, negotiators fall behind if",
          "translation": "根据庞萨蒂（Ponsatí）博士的说法，如果______，谈判者就会落后。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "She accepted that, as negotiators everywhere know, the first side to disclose the maximum amount that it is willing to pay loses considerable bargaining power."
          },
          "synonyms": [
            "“negotiators fall behind” 同义替换为原文的 “loses considerable bargaining power” 以及下一句的 “can be pushed backward in the bargaining process”，落后即处于下风",
            "“if” 与原文的条件含义对应：先透露上限即是导致落后的前提",
            "“too much information is given to the other parties early on” 同义替换为原文的 “the first side to disclose the maximum amount that it is willing to pay”，the first side 对应 early on，disclose the maximum amount 对应 giving too much information"
          ],
          "locatingTip": "定位：题干人名 Dr Ponsatí 与本题所需的“谈判者处于下风”的描述都在第 5 段开头部分，锁定该段前两句即可。确定答案技巧：题干问“什么情况下谈判者会落后”，原文给出的条件十分明确——“the first side to disclose the maximum amount that it is willing to pay loses considerable bargaining power”（先透露自己愿付最高金额的一方会失去相当大的议价能力），下句进一步说没有筹码就会被聪明的对手在谈判过程中逼退（pushed backward）。把这两句合起来，落后者就是“过早把信息给了对方的人”，对应选项 C。注意 the first side 与 early on、disclose the maximum amount 与 too much information 的对应关系。",
          "analysis": "第 5 段在引出庞萨蒂的想法前，先铺陈谈判的普遍规律，即定位句：“She accepted that, as negotiators everywhere know, the first side to disclose the maximum amount that it is willing to pay loses considerable bargaining power.”（她承认，正如各地谈判者都清楚的那样，先透露自己愿意支付的最高金额的一方会失去相当大的议价能力）。下一句是后果的具体化：“Without leverage, it can be pushed backward in the bargaining process by a clever opponent.”（一旦没了筹码，它就会被聪明的对手在谈判过程中逼退）。题干用 negotiators fall behind（谈判者落后）概括 loses considerable bargaining power 与 be pushed backward，条件则是“过早向对方透露了太多信息”，正是选项 C 的内容，因此答案是 C。这也解释了庞萨蒂为何设计出由第三方或电脑掌握各方底线的机制：只有把机密信息交给中立的调解方而非对手，才不会因透露底线而吃亏。",
          "traps": [
            "为什么不是 A：something is thought to be worth more than it really is 出自第 3 段软件判定牌照 over-valued，属于第 37 题的答案。",
            "为什么不是 B：discussions between the parties begin to break down 出自同段 “negotiations can become very slow or collapse”；那是双方都不透露让步时谈判整体崩掉的情形，不是“某一方落后”的原因，且对应第 40 题。",
            "为什么不是 D：businesses consider possible future developments 出自第 4 段布莱克关于 future repercussions 的总结，与庞萨蒂的谈判论述无关。",
            "为什么不是 E：people allow their feelings to influence decisions 出自第 2 段非理性情绪的论述，第 5 段强调的是信息（底线）的透露而非情绪。",
            "为什么不是 F：a solution requires face-to-face negotiation 在原文没有依据；庞萨蒂恰恰设想在真人调解者不可得时由电脑替代。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "Dr Ponsatí's mediation machine is useful when",
          "translation": "庞萨蒂（Ponsatí）博士的调解机器在______时很有用。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "But if neither side reveals the concessions it is prepared to make, negotiations can become very slow or collapse."
          },
          "synonyms": [
            "“discussions between the parties begin to break down” 同义替换为原文的 “negotiations can become very slow or collapse”，collapse 对应 break down",
            "“is useful when” 与原文的条件结构对应：正是这种僵局促使庞萨蒂构想出由第三方或电脑介入的机制",
            "原文下一句 “difficult negotiations can often be pushed along by neutral mediators” 中的 difficult negotiations 也回指这里的僵局"
          ],
          "locatingTip": "定位：题干关键词 mediation machine 与 Dr Ponsatí 都在第 5 段，第 5 段中段的三句形成一个完整的“问题—对策”结构，答案就在问题句里。确定答案技巧：题干问调解机器“何时有用”，要找原文描述谈判陷入困境的句子：“But if neither side reveals the concessions it is prepared to make, negotiations can become very slow or collapse.”（但如果双方都不透露自己准备做出的让步，谈判就可能变得非常缓慢或彻底崩溃）。崩溃即对话破裂，对应选项 B “discussions between the parties begin to break down”。紧接着的 “However, difficult negotiations can often be pushed along by neutral mediators” 与 “a computer could do the job instead” 正是针对这种困境给出的解决方案。",
          "analysis": "第 5 段先铺陈谈判规律：先透露愿付上限的一方会失去议价能力，没有筹码就会被对手逼退。接着进入本题定位句：“But if neither side reveals the concessions it is prepared to make, negotiations can become very slow or collapse.”（但如果双方都不透露自己准备做出的让步，谈判就可能变得非常缓慢或彻底崩溃）。针对这种僵局，作者给出出路：“However, difficult negotiations can often be pushed along by neutral mediators, especially if they are entrusted with the secret bottom lines of all parties.”（不过，困难的谈判往往可以由中立的调解者推动，尤其是当他们被托付了各方的保密底线时）；随即是庞萨蒂的构想：“Ponsatí's idea was that if a human mediator was not trusted, affordable or available, a computer could do the job instead.”（庞萨蒂的想法是，如果真人调解者不被信任、费用过高或找不到，就可以由电脑来代劳）。可见调解机器要解决的正是“双方谁也不肯让步、谈判慢慢拖死或崩掉”的处境，对应选项 B，因此答案是 B。段末的总结也与之呼应：这类“调解机器”可以“push negotiations forward by unlocking information that would otherwise be withheld from an opponent”，即用公开信息的方式把濒临破裂的谈判推回正轨。",
          "traps": [
            "为什么不是 A：something is thought to be worth more than it really is 出自第 3 段的牌照估值判定，属于第 37 题的答案，与调解机器无关。",
            "为什么不是 C：too much information is given to the other parties early on 描述的是“先透露底线导致失去议价能力”，那是造成劣势的原因，不是调解机器发挥作用的场合；而且调解机器正是为了避免把信息直接给对手才被设计出来的。",
            "为什么不是 D：businesses consider possible future developments 出自第 4 段布莱克关于未来影响的总结，属于第 38 题的答案。",
            "为什么不是 E：people allow their feelings to influence decisions 出自第 2 段非理性情绪的论述，第 5 段的困境来自信息不透明而非情绪。",
            "为什么不是 F：a solution requires face-to-face negotiation 与原文设想相反——庞萨蒂的机制恰恰是在真人调解者不可得时改用电脑，并不要求面对面谈判。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
