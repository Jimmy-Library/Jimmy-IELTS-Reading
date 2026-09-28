(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-181", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-181",
  "meta": {
    "examId": "p3-high-181",
    "title": "The Fruit Book 果实之书",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–32 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 32
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "A description of Shanley's initial data collection",
          "translation": "对 Shanley 最初数据收集过程的描述。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "But six years of field research yielded a mass of data on their flowering and fruiting behaviour. During 1993 and 1994, 30 families weighed everything they used from the forest"
          },
          "synonyms": [
            "“initial data collection” 同义替换为 “six years of field research yielded a mass of data on their flowering and fruiting behaviour”",
            "“a description of ... collection” 同义替换为 “During 1993 and 1994, 30 families weighed everything they used from the forest”，即把村民实际称重、记录来源的操作称为一次数据采集的描述",
            "“fruiting behaviour”（结实表现）对应原文随后列举的 game, fruit, fibre, medicinal plants，说明称重对象就是他们从森林取用的东西"
          ],
          "locatingTip": "定位：题干关键词是 initial data collection（最初的数据收集），属于“过程描述”类信息，因此要跳过讲结论、讲市场的段落，专找描写“怎么做、收了多少数据”的句子。全文只有 D 段后部出现了六年的野外研究、1993 与 1994 年、30 户人家逐一称重（weighed everything）这些过程性细节，位置落在第 5 段末尾。确定答案技巧：题干里的 initial 提示“研究早期”，D 段用 During 1993 and 1994 给出最早期的数据采集年份，两者严丝合缝；同时 D 段之前各段都没有任何称重、记录的描写，因此 D 为唯一可能。",
          "analysis": "D 段（第 5 段）讲 Shanley 如何真正动手研究。段中先说村民对树木的经济价值毫无概念（they had no measure of the trees' financial worth），接着写 “The only way to find out, Shanley decided, was to start from scratch with a scientific study.”（唯一办法是从零开始做一项科学研究），随后就是本题的定位句：“But six years of field research yielded a mass of data on their flowering and fruiting behaviour. During 1993 and 1994, 30 families weighed everything they used from the forest – game, fruit, fibre, medicinal plants – and documented its source.”（六年的野外研究积累了关于这些树开花结果习性的大量数据。1993 至 1994 年间，30 户人家把他们从森林里取用的每一样东西——猎物、果实、纤维、药用植物——都称了重，并记录来源。）这一段是全篇唯一详细描述“最初如何收集数据”的地方：研究时长（six years）、时间范围（1993 and 1994）、样本量（30 families）、方法（weighed ... and documented its source），四点都是 description of initial data collection 的直接对应。因此答案选 D。注意与第 30 题（起点）区分：B 段交代的是研究的缘起和时间起点，本题问的是“数据收集过程”的描写，不能混为一谈。",
          "traps": [
            "为什么不是 B 段（第 3 段）：B 段只说 “Shanley's work on the book began a decade ago, with a plea for help from the Rural Workers' Union of Paragominas”，交代的是研究何时、因何开始（对应第 30 题的 starting point），并没有描写她如何采集数据。",
            "为什么不是 C 段（第 4 段）：C 段写工会与外界想弄清“采果是否比卖木更合算”，是研究的动机与背景（对应第 29 题），同样没有数据采集过程。",
            "为什么不是 F 段（第 7 段）：F 段虽有“给猎物称重”的相似动作（persuaded local hunters to weigh their catch），但那是研究后期的专项比较（比较不同树种下的猎获量），时间上不属于 initial 的初次采集，且研究对象是猎获物而非居民的全部取用物品。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Why a government official also contributes to the book",
          "translation": "一位政府官员也为这本书撰稿的原因。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Its blend of hard science and local knowledge on the use and trade of 35 native forest species has been so well received (and well used) that no less a dignitary than Brazil's environment minister, Marina Silva, has written the foreword."
          },
          "synonyms": [
            "“a government official” 同义替换为 “Brazil's environment minister, Marina Silva”，巴西环境部长属政府官员，dignitary（显要人物）也提示其官方身份",
            "“contributes to the book” 同义替换为 “has written the foreword”，为该书撰写序言就是为书作贡献的具体形式",
            "“also” 体现“除 Shanley 本人之外的第三者”，原文用 no less a dignitary than ... has written the foreword 点出这一层",
            "“why” 对应原文的 so ... that 因果结构：正因为该书把硬科学与当地知识结合得很好、广受好评并被广泛使用，部长才为它作序"
          ],
          "locatingTip": "定位：government official 是抽象身份词，无法直接扫读，应拆成两个可检索线索：其一是 book（fruit book / The second edition），其二是官员的职务或贡献动作（foreword）。book 主要出现在 A 段与 I 段，而 foreword（序言）全文只出现在第 2 段的 A 段，并紧跟着 Brazil's environment minister，由此一步锁定第 2 段。确定答案技巧：题干问“为什么”这位官员也参与进来，答案必须落在因果句上；原文用 so well received (and well used) that no less a dignitary than ... has written the foreword 的 so ... that 结构，把“书广受好评并被广泛使用”与“部长作序”直接连成因果，这正是题干的 why。",
          "analysis": "A 段（第 2 段）介绍这本书本身。段中说书的全名是 Fruit Trees and Useful Plants in the Lives of Amazonians，俗称 fruit book，第二版应西亚马孙地区政界人士之请而编；接着是本题定位句：“Its blend of hard science and local knowledge on the use and trade of 35 native forest species has been so well received (and well used) that no less a dignitary than Brazil's environment minister, Marina Silva, has written the foreword.”（它把硬科学知识与当地关于 35 种原生森林物种（native forest species）的使用和贸易的知识融合在一起，广受好评并被广泛使用，以至于巴西环境部长 Marina Silva 这样一位显要人物都为它写了序言。）题干问的是“一位政府官员为什么也为这本书撰稿”，原文给出的原因就是前半句：书的质量高（hard science 与 local knowledge 的结合）、读者接受度好、实际使用多，所以连环境部长都愿意作序。Marina Silva 的身份是环境部长，属政府官员；written the foreword 就是“撰稿”的具体形式。因此答案选 A。做题时要注意题干里的 also，它暗示这份 contribution 来自 Shanley 以外的人，而全书提到的、为这本书作序（即这份 contribution）的人只有 A 段的 Marina Silva。",
          "traps": [
            "为什么不是 I 段（第 10 段）：I 段虽然也大篇幅讲这本书（印刷 3000 册、极具影响力、成功的原因），但通篇没有出现任何政府官员，更没有“官员作序”的信息，那一段对应的是第 32 题。",
            "为什么不是 C 段（第 4 段）：C 段确实提到 “environmental groups and green-minded businesses were promoting the idea”，但主体是环保团体与有环保意识的企业，属于民间组织而非政府官员，是本题最容易误选的干扰项。",
            "为什么不是 B 段（第 3 段）：B 段出现的是 Rural Workers' Union（农村工人工会）和镇政府所在的 Paragominas，工会是民间组织，不能算政府官员，而且该段讲的是研究缘起，与“为书作序”无关。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Reasons why the community asked Shanley to conduct the research",
          "translation": "社区请 Shanley 开展这项研究的原因。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "\"The union was keen to discover whether it made more sense conserving the forest for subsistence use and the possible sale of fruit, game and medicinal plants, than selling trees for timber,\" says Shanley."
          },
          "synonyms": [
            "“the community” 同义替换为 “The Rural Workers' Union”（Paragominas 的农村工人工会，代表当地社区发声）",
            "“asked Shanley to conduct the research” 同义替换为 “was keen to discover whether ...”，社区主动提出要弄清的问题，就是委托研究的实质",
            "“reasons” 同义替换为 “whether it made more sense ... than ...”，即动机在于权衡“保林取果”与“卖木换钱”哪个收益更高",
            "同段还有两处理由：“There was a lot of interest in trading non-timber forest products (NTFPs)” 与 “The researchers had calculated that revenues from the sale of fruits could far exceed those from a one-off sale of trees to loggers”"
          ],
          "locatingTip": "定位：题干核心是“社区为什么要求做这项研究”，所以要找社区（工会）主动表达诉求、想知道什么的句子。B 段与 C 段都出现 Rural Workers' Union，是本题的混淆点：B 段给的是“事情的起点”（began a decade ago, a plea for help），C 段才有“想知道／很想弄清”的动机句（wanted to know whether...、was keen to discover whether...）。确定答案技巧：抓住三个动机信号词——interest（对 NTFP 贸易的兴趣）、calculated（Nature 论文算出果实收入可远超卖木）、keen to discover（想弄清保护森林用于自给是否更划算），它们全部集中在 C 段，且指向的都是“为什么要研究”，而非“研究何时开始”，故答案为 C。",
          "analysis": "C 段（第 4 段）讲研究的动机与当时的舆论背景。段首即点题：“The Rural Workers' Union wanted to know whether harvesting wild fruits would make economic sense in the Rio Capim.”（工会想知道在 Rio Capim 采集野果是否有经济上的意义。）随后给出三层原因：一是 “There was a lot of interest in trading non-timber forest products (NTFPs)”（当时对非木材林产品贸易兴趣浓厚）；二是环境团体和绿色企业在推广这一理念，1989 年发表于 Nature 的论文 Valuation of an Amazonian Rainforest 计算出“出售水果的收益可能远远超过一次性把树卖给伐木商”；三是本题定位句，Shanley 回忆说工会急于弄清楚“把森林保护起来用于自给，并出售果实、猎物和药用植物，是否比把树当木材卖掉更合算”。这些都是社区委托研究的原因，主体是代表社区的工会（the community），动作是 wanted to know 与 keen to discover（要求研究），因此答案选 C。段末的 “Whether it would work for the caboclos was far from clear.” 说明研究尚无定论，恰好解释了为什么必须请 Shanley 来做这项研究，进一步印证 C 段。",
          "traps": [
            "为什么不是 B 段（第 3 段）：B 段虽然也有 Rural Workers' Union，但它的作用是交代研究的起点与当时的处境（伐木公司将至、村民不识树木价值），用的是 began、plea for help 这类“开端”措辞，属于第 30 题的定位范围，而不是说明研究的原因。",
            "为什么不是 D 段（第 5 段）：D 段写的是村民对 Shanley 的怀疑以及她最终如何用六年研究取得数据，属于研究的过程，不是社区委托研究的原因。",
            "为什么不是 G 段（第 8 段）：G 段是研究之后 Shanley 向工会反馈结论（Nature 论文的结论不能照搬到该社区），属于研究结果，不是最初的原因。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "Reference to the starting point of her research",
          "translation": "提到她这项研究的起点。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Shanley's work on the book began a decade ago, with a plea for help from the Rural Workers' Union of Paragominas, a Brazilian town whose prosperity is based on exploitation of timber."
          },
          "synonyms": [
            "“the starting point of her research” 同义替换为 “Shanley's work on the book began a decade ago”（以 began 明确点出起点与时间）",
            "“her research” 同义替换为 “Shanley's work on the book”，后文交代这项研究就是为了写书而做的调查",
            "“the starting point” 同义替换为 “with a plea for help from the Rural Workers' Union of Paragominas”，起点具体表现为工会的一次求助"
          ],
          "locatingTip": "定位：starting point 属于时间与起始类信息，扫读时盯住各段首句中表示“开始”的动词与时间状语。B 段首句即以 “Shanley's work on the book began a decade ago” 开头，是全文唯一明确交代这项工作何时、因何开始的句子。确定答案技巧：D 段虽有 “The only way to find out, Shanley decided, was to start from scratch with a scientific study.”，但那里的 start from scratch 说的是研究方法“从零做起”，目的在于说明当时几乎没有相关知识，并不是研究工作的时间起点，属于典型的同词不同义干扰；而 B 段的 began a decade ago 加 plea for help（一次求助）才是起点本身。",
          "analysis": "B 段（第 3 段）开篇即是本题定位句：“Shanley's work on the book began a decade ago, with a plea for help from the Rural Workers' Union of Paragominas, a Brazilian town whose prosperity is based on exploitation of timber.”（Shanley 的这项工作始于十年前，起因是 Paragominas 农村工人工会的一次求助；这座巴西小镇的繁荣建立在木材开采之上。）句中 began a decade ago 给出起点的时间，with a plea for help 给出起点的缘由与推动者，二者合起来就是题干所说的 the starting point of her research。随后的内容也顺着“起点”展开：工会意识到伐木公司即将找上门，而 caboclos 村民既与世隔绝又不识字，对自家树木的真实价值毫无概念，下游社区甚至已经廉价卖掉了大片森林；Shanley 回忆当时大家最想知道的就是“这些森林到底值多少钱”。整段都在交代事情的由来，因此答案选 B。这一题与第 29 题相邻且同在 B、C 两段取材，答题时务必按题干措辞取舍：起点看 began，原因看 wanted to know 与 keen to discover。",
          "traps": [
            "为什么不是 D 段（第 5 段）：D 段中的 start 出现在 “The only way to find out, Shanley decided, was to start from scratch with a scientific study.”，这里 start from scratch 意指“从零开始做实验”，说明此前对这三种树几乎一无所知，讲的是研究方法而非研究的时间起点。",
            "为什么不是 A 段（第 2 段）：A 段介绍成书本身与部长作序，时间上反而在后（书已出版并出第二版），不可能成为研究的起点。",
            "为什么不是 C 段（第 4 段）：C 段列出的是研究的原因与当时的舆论背景（interest、promoting the idea、Nature 论文的计算），题干问的是“起点”的提及，B 段的 began a decade ago 才是与之直接对应的表述。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "Two factors that alter food consumption patterns",
          "translation": "改变食物消费模式的两种因素。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "The fire and logging also changed the nature of the caboclo diet. In 1993 most households ate game two or three times a month. By 1999 some were fortunate if they ate game more than two or three times a year."
          },
          "synonyms": [
            "“two factors” 同义替换为 “The fire and logging”，即森林大火与伐木这两个因素",
            "“alter food consumption patterns” 同义替换为 “changed the nature of the caboclo diet”（改变了当地人饮食的性质）",
            "“food consumption” 的具体化：原文用 1993 年每月吃两三次猎物（two or three times a month）与 1999 年每年才吃两三次（two or three times a year）的前后对比来体现消费模式的变化",
            "同段还有同类证据：“Average annual household consumption of forest fruit had fallen from 89 to 28 kilograms between 1993 and 1999.”"
          ],
          "locatingTip": "定位：题干要求“两个因素”，因此要一眼扫出成对出现的致因名词。E 段首句 “After three logging sales and a major fire in 1997” 已同时出现 logging 与 fire，随后定位句用 The fire and logging also changed ... 把这两项正式确立为改变饮食的因素，位置在第 6 段。确定答案技巧：题干说 food consumption patterns，判分点在于原文有没有“前后对比”的量化表述；E 段用 from 89 to 28 kilograms、from around 20 to 4 kilograms 以及 monthly 与 yearly 的对比反复呈现消费的锐减，是全文唯一系统描写“消费模式变化”的段落。",
          "analysis": "E 段（第 6 段）报告长期跟踪研究的发现。段首交代背景：“After three logging sales and a major fire in 1997, the researchers were also able to study the ecosystem's reaction to logging and disturbance.”（在三次伐木交易和 1997 年一场大火之后，研究者得以观察生态系统对伐木与干扰的反应。）接着给出三项对比数据：家庭年均森林果实消费量从 89 公斤降到 28 公斤、纤维用量从约 20 公斤降到 4 公斤、猎物消费从每月两三次降到每年两三次；最后一句就是本题定位句：“The fire and logging also changed the nature of the caboclo diet. In 1993 most households ate game two or three times a month. By 1999 some were fortunate if they ate game more than two or three times a year.”（大火和伐木还改变了当地人饮食的性质。1993 年大多数家庭每月吃两三次猎物，到 1999 年有些家庭一年能吃上两三次就算幸运了。）可见改变消费模式的两个因素就是 fire 与 logging，具体表现是果实、纤维、猎物三类食物的消费量同时大幅下降。因此答案选 E。Shanley 在段中的原话 “fruit collection could coexist with a certain amount of logging, but after the forest fire, it dropped dramatically” 也把伐木与大火并列为影响消费的两大变量，与题干 two factors 精确对应。",
          "traps": [
            "为什么不是 F 段（第 7 段）：F 段讲的是“不同树种下猎获量”的比较（piquia 树下 232 公斤、copaiba 63 公斤、uxi 38 公斤），目的是判断哪些树值得保留，属于对某一类食物的专项产量研究，没有涉及居民整体饮食或消费模式的变化。",
            "为什么不是 G 段（第 8 段）：G 段以 uxi 为例说明结实量不可预测（1994 年一户采到 3654 个果子，次年一个也没有），谈的是果实收成的波动，而不是消费模式被两大因素改变。",
            "为什么不是 C 段（第 4 段）：C 段提到 game（猎物）只是作为可供出售的森林产品之一列举（the possible sale of fruit, game and medicinal plants），并非饮食消费量的变化。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Why the book is successful",
          "translation": "这本书成功的原因。",
          "answer": "I",
          "wordClass": "",
          "locating": {
            "paragraph": "10",
            "quote": "The first print run was only 3,000 copies, but the fruit book has been remarkably influential, and is used by colleges, peasant unions, industries and the caboclos themselves. Its success is largely due to the fact that people with poor literacy skills can understand much of the information it contains about the non-timber forest products, thanks to its illustrations, anecdotes, stories and songs."
          },
          "synonyms": [
            "“successful” 同义替换为 “remarkably influential” 以及同段的 “Its success is largely due to ...”，二者都是对这本书成功与影响的概括",
            "“why” 同义替换为 “due to the fact that ...”，原文用 due to 明确给出因果",
            "成功的原因具体化为 “people with poor literacy skills can understand much of the information it contains ... thanks to its illustrations, anecdotes, stories and songs”，即识字水平不高的读者也能看懂，靠的是插图、轶事、故事和歌谣"
          ],
          "locatingTip": "定位：success 是极佳的信号词，末段 I 段有 “Its success is largely due to ...”（首段末句 It has proved a big success 只是笼统的结论，未给出原因），据此可直接跳到末段。确定答案技巧：题干问原因，就要在 success 所在句里找表示因果的 due to；原文用 “Its success is largely due to the fact that ...” 明确回答“为什么成功”，理由是该书大量采用插图、轶事、故事与歌谣，使识字水平低的人也能读懂其中的非木材林产品知识。前一句的 remarkably influential、used by colleges, peasant unions, industries and the caboclos themselves 则是“成功”的具体表现，与原因句配合构成完整答案。",
          "analysis": "I 段（第 10 段）是全文收尾，交代这本书的成书与影响。段中先写 Shanley 与两位同事一起写成了 fruit book，这本书与《圣经》、一本关于药用植物的小册子是该河段沿途几乎仅有的读物；接着用出版量与实际使用情况证明其影响：“The first print run was only 3,000 copies, but the fruit book has been remarkably influential, and is used by colleges, peasant unions, industries and the caboclos themselves.”（首印只有 3000 册，但这本书影响极大，被大学、农民工会、企业和当地人自己使用。）紧接着即是本题定位句：“Its success is largely due to the fact that people with poor literacy skills can understand much of the information it contains about the non-timber forest products, thanks to its illustrations, anecdotes, stories and songs.”（它的成功很大程度上是因为识字水平不高的人也能读懂书中关于非木材林产品的大量信息，这得益于书中的插图、轶事、故事和歌谣。）原文以 Its success is largely due to 直接给出成功的原因，题干 why the book is successful 与之完全对应，因此答案选 I。段末引述 “The book doesn't tell people what to do, but it does provide them with choices.”，以及当地人读后更清楚哪些树该卖给伐木商、哪些该保护，进一步说明该书把知识交到了最需要的人手里，与 A 段引语 “It gives science back to the poor” 首尾呼应。",
          "traps": [
            "为什么不是 A 段（第 2 段）：A 段确实有 “has been so well received (and well used)”，但这是为引出环境部长作序这一事实（第 28 题的落点），只说明书受到欢迎，没有解释受欢迎、成功的原因。",
            "为什么不是 C 段（第 4 段）：C 段的 promoting 讲的是环保团体与绿色企业在推广“采集非木材林产品”的理念，推广对象是 NTFP 贸易而非这本书，与书的成功无关。",
            "为什么不是 D 段（第 5 段）：D 段讲村民起初的怀疑（a foreigner who'd come to rob me of my trees）与研究工作，属于研究过程，不涉及书的成功。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 33–40 摘要填空（NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 33,
        "end": 40
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "Forest fire has caused local villagers to consume less: 33 ________",
          "translation": "森林大火使得当地村民消耗得更少：33 ________。",
          "answer": "forest fruit",
          "wordClass": "名词短语（不可数，指森林果实；题干是摘要中的条目片段，空格跟在 consume less 之后，列出村民减少消费的东西，填原文原词 forest fruit，也可只写 fruit）",
          "locating": {
            "paragraph": "6",
            "quote": "Average annual household consumption of forest fruit had fallen from 89 to 28 kilograms between 1993 and 1999."
          },
          "synonyms": [
            "“consume less” 同义替换为 “consumption ... had fallen from 89 to 28 kilograms”，用具体数字表现消耗减少",
            "“local villagers” 同义替换为 “household”（当地的家庭住户）",
            "“Forest fire has caused” 对应同段首句 “After three logging sales and a major fire in 1997” 与 Shanley 的话 “after the forest fire, it dropped dramatically”"
          ],
          "locatingTip": "定位：摘要首句已经给出 Forest fire 与 consume less 这两个信号，回原文的 E 段（第 6 段）找“什么东西的消耗量下降”。E 段连续给出两组数字：从 89 降到 28 公斤（forest fruit）与从约 20 降到 4 公斤（fibre），正好对应 33、34 两个空格。确定答案技巧：按数字句出现的先后顺序取答案，先出现的 forest fruit 对应 33，后出现的 fibre 对应 34；两处都用 had fallen / dropped 表示“减少”，与题干的 consume less 同义。注意 game（猎物）在摘要中已经给出，不在空格内，但它的减少由 monthly 与 yearly 的对比印证。",
          "analysis": "E 段（第 6 段）报告 1993 与 1999 两次调查的对比结果。段中先交代背景（三次伐木交易与 1997 年大火），接着是本题定位句：“Average annual household consumption of forest fruit had fallen from 89 to 28 kilograms between 1993 and 1999.”（1993 至 1999 年间，家庭年均森林果实消费量从 89 公斤下降到 28 公斤。）紧接着引述 Shanley 的话说明原因：“fruit collection could coexist with a certain amount of logging, but after the forest fire, it dropped dramatically.”（果实采集可以与一定量的伐木共存，但在森林大火之后急剧下降。）摘要把这一现象概括为“森林大火使当地村民消耗更少”，其下按类别列出三项：森林果实（33）、纤维（34）与猎物（game，已给出），因此第一个空格填 forest fruit。词性上，空格与 fibre、game 并列，属于“被消耗的东西”，应为名词短语；原文用的是 forest fruit 这一不可数名词短语，故答案写 forest fruit（只写 fruit 亦可，但不含 fibre 之类的限定词时语义更宽泛，推荐照原文写 forest fruit）。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "Forest fire has caused local villagers to consume less: 34 ________",
          "translation": "森林大火使得当地村民消耗得更少：34 ________。",
          "answer": "fibre",
          "wordClass": "名词（不可数，指从森林采集的纤维材料；同为摘要中 consume less 之后列出的条目，故填原文原词 fibre）",
          "locating": {
            "paragraph": "6",
            "quote": "Over the same period, fibre use also dropped from around 20 to 4 kilograms."
          },
          "synonyms": [
            "“consume less” 同义替换为 “fibre use also dropped”，即纤维的使用量下降",
            "“from around 20 to 4 kilograms” 用数字说明下降的幅度，对应题干的 less",
            "“Over the same period” 与题干的 Forest fire has caused 呼应，说明这一下降与伐木及大火同期发生",
            "also 提示这是与 forest fruit 并列的第二项，即摘要中 33 之后的第二个空格"
          ],
          "locatingTip": "定位：33 题答案句的下一句就是 34 题答案句，同在第 6 段（E 段）中段。确定答案技巧：抓住 also 一词——它表示“纤维同果实一样也下降了”，说明这是并列的第二类物资；题干摘要的第二个项目正好紧随 forest fruit 之后、game 之前，因此填 fibre。填词时只需原文原词，注意英式拼写 fibre，不要写成美式 fiber。",
          "analysis": "在 33 题所在句之后，原文继续写道：“Over the same period, fibre use also dropped from around 20 to 4 kilograms.”（同一时期，纤维的使用量也从约 20 公斤降到 4 公斤。）从约 20 公斤跌到 4 公斤，降幅达八成，与森林果实的下降幅度相仿，说明当地人对森林的取用结构在大火与伐木之后被整体压缩。摘要把这三类物资并列为“消耗变少”的清单，其中第二项空格的答案就是 fibre。词性上，fibre 与 forest fruit、game 属于同一层级的名词类别，在原文中作 use 的限定成分（fibre use），填入空格后与前后项并列通顺。另一个可用的旁证是 D 段（第 5 段）在列举称重对象时也写到了 “game, fruit, fibre, medicinal plants”，可见 fibre 是当地人长期从森林取用的基本物资之一，本题的下降并非偶发。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "There is the least amount of game hunted under 35 ________",
          "translation": "在 ________ 树下猎获的猎物数量最少。",
          "answer": "uxi trees",
          "wordClass": "名词短语（可数名词复数，指 uxi 这种树；位于介词 under 之后，作介词 under 的宾语，与过去分词 hunted 一起说明捕猎地点；答案也可只写 uxi）",
          "locating": {
            "paragraph": "7",
            "quote": "Over the year, they trapped five species of game averaging 232 kilogrammes under piquia trees. Under copaiba, they caught just two species averaging 63 kilogrammes; and under uxi, four species weighing 38 kilogrammes."
          },
          "synonyms": [
            "“the least amount of game” 同义替换为 “four species weighing 38 kilogrammes”，38 公斤是三个树种中最小的猎获总量",
            "“hunted under ...” 同义替换为 “trapped ... under piquia trees” 与 “caught ... under copaiba”“weighing ... under uxi”，都是“在某种树下捕猎”的表达",
            "“game” 在原文中原词复现（five species of game）",
            "“There is the least amount” 对应三组数字 232、63、38 的比较结果"
          ],
          "locatingTip": "定位：题干关键词是 game hunted under，回到原文找“在树下捕猎并称重”的描写，只有 F 段（第 7 段）有：Shanley's team persuaded local hunters to weigh their catch, noting the trees under which the animals were caught，随后列出三组数据。确定答案技巧：把三组数字放在一起比较——piquia 树下 232 公斤（五物种）、copaiba 树下 63 公斤（两物种）、uxi 树下 38 公斤（四物种），重量最小的是 uxi，因此答案是 uxi trees。要特别注意题干问的是 amount（数量／总量），应按重量而非物种数判断：copaiba 的物种数最少（两种），但重量高于 uxi，属于本题最典型的干扰项。",
          "analysis": "F 段（第 7 段）研究“哪些树值得保留”。段首指出某些树种的消失尤为重要，接着说明方法——“Shanley's team persuaded local hunters to weigh their catch, noting the trees under which the animals were caught.”（Shanley 的团队说服当地猎人给猎获物称重，并记录动物是在哪些树下捕到的。）随后给出三组数据：piquia 树下一年捕到五物种、平均 232 公斤；copaiba 树下仅两物种、平均 63 公斤；uxi 树下四物种、共 38 公斤。按猎获重量比较，uxi 树下的 38 公斤是三者中最少的，因此摘要中“在某种树下猎获的猎物数量最少”对应的就是 uxi trees（原文只写 under uxi，题干与答案把树名补全为 uxi trees）。紧接着的 G 段（第 8 段）以 uxi 为例说明 “Fruiting patterns of trees such as uxi were unpredictable”，正好与第 36 题衔接，也印证了 uxi 组的特殊性。做题时还要注意，F 段的重点结论其实是 piquia 树下猎物最多（232 公斤，远高于其他树种），这正是第 37 题“应当保留 piquia trees”的依据，两题一多一少，切勿互换。",
          "traps": [
            "为什么不是 copaiba：copaiba 树下捕到的物种数最少（just two species），但总重量为 63 公斤，高于 uxi 的 38 公斤；题干问的是 amount（猎获量），应按重量比较，故不能选 copaiba。",
            "为什么不是 piquia trees：piquia 树下猎获量最大（five species averaging 232 kilogrammes），是三者中的最多者，与题干的 the least 恰好相反；它对应的是第 37 题“更应保留的树”，是本题最大的干扰项。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "; yield is also 36 ________.",
          "translation": "；其产量也是 ________ 的。",
          "answer": "unpredictable",
          "wordClass": "形容词（位于分句 yield is also 36 ___ 的系动词 is 之后，作表语（主语补足语），说明果实产量无法预测）",
          "locating": {
            "paragraph": "8",
            "quote": "Fruiting patterns of trees such as uxi were unpredictable, for example. In 1994, one household collected 3,654 uxi fruits; the following year, none at all."
          },
          "synonyms": [
            "“yield” 同义替换为 “Fruiting patterns”（结实规律，即果实产量的表现）",
            "“is also unpredictable” 与原文 “were unpredictable” 同义替换，只差人称与时态",
            "产量不稳定的具体证据：one household collected 3,654 uxi fruits; the following year, none at all（一户人家 1994 年采到 3654 个果子，次年一个也没有）"
          ],
          "locatingTip": "定位：36 题与 35 题围绕同一种树（uxi）展开，顺着 F 段（第 7 段）往下读，G 段（第 8 段）首句即出现 uxi。“Fruiting patterns of trees such as uxi were unpredictable, for example.” 是唯一以 uxi 为对象、描述其产果特性的句子。确定答案技巧：先确定 yield（产量）对应原文的 Fruiting patterns（结实规律），再看系动词后的表语 unpredictable 就是答案；随后的数字对比（3654 个对零）为“不可预测”提供了直接证据。填词时注意空格前是系动词 is，故必须填形容词 unpredictable，不能填 variability 之类的名词。",
          "analysis": "G 段（第 8 段）交代研究结论对社区的实际影响。段首说 Shanley 不得不告诉 Paragominas 工会，Nature 论文的结论无法整体套用到该社区——采集非木材林产品并不总能比卖木材收益更高。紧接着举 uxi 为例：“Fruiting patterns of trees such as uxi were unpredictable, for example. In 1994, one household collected 3,654 uxi fruits; the following year, none at all.”（例如 uxi 这类树的结实规律难以预测。1994 年有一户人家采到 3654 个 uxi 果实，第二年却一个也没有。）摘要的 “yield is also 36 ...” 承接 35 题的 uxi，把 Fruiting patterns 概括为 yield（产量），把 were unpredictable 直接转写为 is unpredictable，因此答案填形容词 unpredictable（不可预测的）。这一题与 35 题构成一个完整的论证：uxi 树下猎获量最少，果实产量又极不稳定，所以它不值得作为重点保护或推销的树种，而这一逻辑正好导向第 37 题“更应保留 piquia trees”的结论。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "Thus, it is more reasonable to keep 37 ________.",
          "translation": "因此，更合理的做法是保留 ________。",
          "answer": "piquia trees",
          "wordClass": "名词短语（可数名词复数，作动词 keep 的宾语，指 piquia 这种树；答案也可只写 piquia）",
          "locating": {
            "paragraph": "7",
            "quote": "\"This showed that selling piquia trees to loggers for a few dollars made little sense,\" explains Shanley. \"Their local value lies in providing a prized fruit, as well as flowers which attract more game than any other species.\""
          },
          "synonyms": [
            "“Thus, it is more reasonable to keep ...” 同义替换为 “selling piquia trees to loggers for a few dollars made little sense”（卖掉不合算，等价于保留更明智）",
            "“more reasonable” 与 made little sense 构成正反两面的转述",
            "“keep” 同义替换为 “Their local value lies in providing a prized fruit, as well as flowers which attract more game than any other species”，说明保留的理由是它提供珍贵果实并吸引最多猎物"
          ],
          "locatingTip": "定位：题干以 Thus 开头，说明它是承接前文“树下猎获量比较”得出的结论，因此回到 F 段（第 7 段）末尾作者表态的句子。原文用 made little sense（卖掉没道理）与 Their local value lies in（本地价值在于）双向论证“留下这棵树更划算”，主角是 piquia trees。确定答案技巧：先把题干的 more reasonable to keep 反向理解为“卖掉不划算”，再找 made little sense 的主语即可锁定答案；同时不要把 36 题的 uxi 或干扰项 copaiba 带进来，本句的主语是 selling piquia trees ... made little sense，即该保留的是 piquia trees。",
          "analysis": "F 段（第 7 段）在给出三组猎获数据之后作出判断：“At last, the team was getting a handle on which trees were worth keeping, and which could reasonably be sold.”（团队终于开始弄清哪些树值得保留、哪些可以合理卖掉。）随后是本题定位句：“This showed that selling piquia trees to loggers for a few dollars made little sense,” explains Shanley. “Their local value lies in providing a prized fruit, as well as flowers which attract more game than any other species.”（Shanley 解释说，这表明为几个美元就把 piquia 树卖给伐木商很不明智；它们的本地价值在于提供珍贵的果实，以及能吸引比其他任何树种都多猎物的花朵。）摘要句“Thus, it is more reasonable to keep 37 ...”正对应这一结论：把 made little sense（卖掉不合理）转成正面的“保留更合理”，把 piquia trees 填进 keep 的宾语位置。词性上 piquia trees 是可数名词复数，与原文 selling piquia trees 中的形式一致；原文数据也支持这一选择——piquia 树下猎获量 232 公斤，远高于 copaiba 的 63 公斤和 uxi 的 38 公斤，且吸引的猎物种类最多。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "All the trees can also be used for 38 ________ besides selling them to loggers.",
          "translation": "除了卖给伐木商，所有这些树还可以用于 ________。",
          "answer": "subsistence use",
          "wordClass": "名词短语（subsistence 作前置定语，修饰中心词 use；位于介词 for 之后作介词宾语，表示“用于自给自足”；答案也可只写 subsistence）",
          "locating": {
            "paragraph": "9",
            "quote": "On the contrary, argues Shanley, they are critical for subsistence, something that is often ignored in much of the current research on NTFPs, which tends to focus on their commercial potential."
          },
          "synonyms": [
            "“used for subsistence use” 同义替换为 “they are critical for subsistence”（对自给自足至关重要，即用于 subsistence）",
            "“besides selling them to loggers” 对应原文前文的 “selling piquia trees to loggers”，题干用 besides 明确区分“卖木换钱”与“自用”两种用途",
            "可互证的同类表述：C 段（第 4 段）也出现 “conserving the forest for subsistence use”，与答案形式一致"
          ],
          "locatingTip": "定位：题干的关键是“除了卖树之外的用途”，属于“价值／用途”类信息，回原文找谈论 forest products 用途（而不仅是商业价值）的段落。H 段（第 9 段）首两句用 “This is not to say that wild fruit trees were unimportant. On the contrary, argues Shanley, they are critical for subsistence ...” 明确给出 subsistence 这一用途。确定答案技巧：H 段是典型的让步转折结构，考点落在 On the contrary 之后；把题干的 used for 与原文的 critical for 对应起来，for 后面的 subsistence 就是答案。进一步核证可回 C 段找到完全一致的搭配 conserving the forest for subsistence use，可见“自给自足式使用”是全文反复出现的概念，答案写 subsistence use（或 subsistence）均可。",
          "analysis": "H 段（第 9 段）是对“果实贸易不如卖木”这一结论的重要补充。段首先让步：“This is not to say that wild fruit trees were unimportant.”（这并不是说野生果树不重要。）随后转折并给出本题定位句：“On the contrary, argues Shanley, they are critical for subsistence, something that is often ignored in much of the current research on NTFPs, which tends to focus on their commercial potential.”（恰恰相反，Shanley 认为，它们对自给自足（生计）至关重要，而这一点在当今大量关于非木材林产品的研究中常被忽略，那些研究往往只关注它们的商业潜力。）这句同时回答了 38 与 39 两题：38 题问“除了卖给伐木商还能用于什么”，答案是 subsistence（use）；39 题问“研究关注的是什么”，答案是 commercial potential。从词形看，答案在原文中是介词 for 后的宾语 subsistence，题目允许 THREE WORDS，写作 subsistence use 更完整，也与第 4 段的 conserving the forest for subsistence use 呼应。注意不要填 game、fruit 之类的具体林产品——它们是被取用的对象，而 subsistence 才是取用的目的（用途本身）。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "But this is often ignored, because most research usually focuses on the 39 ________ of the trees.",
          "translation": "但这一点常被忽视，因为大多数研究通常关注这些树的 ________。",
          "answer": "commercial potential",
          "wordClass": "名词短语（形容词 commercial 修饰不可数名词 potential，位于介词 on 之后作宾语）",
          "locating": {
            "paragraph": "9",
            "quote": "something that is often ignored in much of the current research on NTFPs, which tends to focus on their commercial potential"
          },
          "synonyms": [
            "“most research usually focuses on” 同义替换为 “much of the current research on NTFPs, which tends to focus on”",
            "“often ignored” 与原文 often ignored 原词复现",
            "“the 39 ... of the trees” 同义替换为 “their commercial potential”，their 回指前文的 wild fruit trees"
          ],
          "locatingTip": "定位：题干有两个高识别度的信号词——often ignored 与 focus on，它们在 H 段（第 9 段）同一句话中同时出现，可一句锁定 38、39 两题。确定答案技巧：题干用 because 引出“被忽视”的原因，原文用 which tends to focus on their commercial potential 定语从句给出同一层信息，只需把 focus on 的宾语抄进空格即可，答案为 commercial potential。注意不要被 F 段“卖树给伐木商”的内容带偏：本题讨论的是研究关注的焦点，必须锁定 research / focus on 这类研究类词汇，而不是“卖”这一动作。",
          "analysis": "39 题与 38 题出自 H 段（第 9 段）的同一个长句：“they are critical for subsistence, something that is often ignored in much of the current research on NTFPs, which tends to focus on their commercial potential.”（它们对自给自足至关重要，而这一点在当今大量非木材林产品研究中常被忽略——那些研究往往聚焦于它们的商业潜力。）句中 something that is often ignored 对应题干的 this is often ignored，tends to focus on 对应题干的 focuses on，因此空格处应填 focus on 的宾语 their commercial potential，即 commercial potential（商业潜力）。语义上，作者是在批评现有研究只盯着“能不能卖钱”，因而忽略了树木对当地人日常生计的根本价值，这也是第 38 题 subsistence 之所以成立的对照面：一个是被忽视的 subsistence（自给），一个是被过度关注的 commercial potential（商业）。词性上，commercial 为形容词，修饰不可数名词 potential，整体作介词 on 的宾语，故答案写 commercial potential。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "The purpose of the book: To give information about 40 ________.",
          "translation": "这本书的目的：提供关于 ________ 的信息。",
          "answer": "non-timber forest products",
          "wordClass": "名词短语（可数名词 products 为中心词，non-timber 与 forest 作前置定语；位于介词 about 之后，作介词 about 的宾语，指非木材林产品，答案也可写缩写 NTFPs）",
          "locating": {
            "paragraph": "10",
            "quote": "people with poor literacy skills can understand much of the information it contains about the non-timber forest products"
          },
          "synonyms": [
            "“To give information about” 同义替换为 “understand much of the information it contains about”",
            "“non-timber forest products” 在原文中原词复现，全文亦多次用缩写 NTFPs 指同一概念",
            "“the book” 对应原文的 it，回指前文的 the fruit book"
          ],
          "locatingTip": "定位：题干围绕 the book 与 information，答案应落在集中介绍这本书内容的 I 段（第 10 段）。该段唯一出现 information 一词的句子就是定位句：“people with poor literacy skills can understand much of the information it contains about the non-timber forest products”，information 后的 about 正好引出题干所问的内容对象。确定答案技巧：把题干的 give information about 与原文的 understand ... the information ... about 对应起来，about 后面的名词短语即答案；注意字数限制 NO MORE THAN THREE WORDS，故既可写三词短语 non-timber forest products，也可写全文通用的缩写 NTFPs（一个词）。",
          "analysis": "I 段（第 10 段）讲这本书的成书与影响，其中解释成功原因的一句同时交代了书的内容：“Its success is largely due to the fact that people with poor literacy skills can understand much of the information it contains about the non-timber forest products, thanks to its illustrations, anecdotes, stories and songs.”（它的成功很大程度上是因为识字水平不高的人也能读懂书中关于非木材林产品的大量信息，这得益于书中的插图、轶事、故事和歌谣。）摘要把该书的目的概括为“提供关于某种东西的信息”，对应原文的 the information it contains about the non-timber forest products，因此答案是 non-timber forest products（非木材林产品）。这也与全文脉络吻合：C 段与 H 段反复以 NTFPs 指代果实、猎物、纤维、药用植物等林产品，第 38、39 两题讨论的正是这些产品的 subsistence 用途与被研究的 commercial potential，而这本书的作用就是把这类知识用最通俗的方式（插图、轶事、故事、歌谣）交还给当地的穷人——正如 A 段引语所说 “It gives science back to the poor”。词性上 products 是可数名词复数，non-timber 与 forest 作前置定语，故答案写 non-timber forest products。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
