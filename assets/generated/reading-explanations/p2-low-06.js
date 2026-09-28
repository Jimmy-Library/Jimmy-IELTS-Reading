(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-low-06", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-low-06",
  "meta": {
    "examId": "p2-low-06",
    "title": "Biomimicry 仿生学",
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
          "stem": "Which paragraph contains the following information? a reference to a natural process that appears simpler than it actually is",
          "translation": "哪一段提到了这样一种自然过程：它看起来比实际上更简单？",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Plants can manage it with humbling ease. But, as the 40 researchers from 11 institutes who have collaborated to form the Australian Artificial Photosynthesis Network have realised, it is very complex."
          },
          "synonyms": [
            "“a natural process” 对应原文的 “Photosynthesis is the process by which green plants use energy from the sun to convert water and carbon dioxide into carbohydrates and oxygen”，指光合作用这一自然过程",
            "“appears simpler than it actually is” 对应原文的 “Plants can manage it with humbling ease. But … it is very complex.”：humbling ease（轻松得令人汗颜）说明看上去很简单，it is very complex 说明实际上非常复杂，两者构成表里不一的对比",
            "“a reference to” 对应原文除了描述过程本身，还给出 40 名研究者来自 11 所机构合作研究的规模，进一步反衬它的复杂性"
          ],
          "locatingTip": "定位：题干关键词是 natural process 与 appears simpler than it actually is，属于“外表与实质不符”的描述。先扫各段首句做减法：A 段讲 Velcro 的发明，B 段讲 Benyus 的书与人类远离自然，C 段讲人类与自然的关系，D、E 段讲 Finnigan 的海洋能源装置，F 段讲 Pearce 的白蚁丘降温楼。只有 G 段在讲一个具体的自然过程——photosynthesis（光合作用）。确定答案技巧：G 段第 2、3 句用转折构成鲜明对比，“Plants can manage it with humbling ease.”（植物做起来轻松得令人惭愧）与 “But … it is very complex.”（但它非常复杂）正好对应题干“看起来比实际上简单”，故选 G。",
          "analysis": "G 段第 1 句先下定义：“Photosynthesis is the process by which green plants use energy from the sun to convert water and carbon dioxide into carbohydrates and oxygen.”（光合作用是绿色植物利用太阳能把水和二氧化碳转化为碳水化合物和氧气的过程），明确点出题干所说的 a natural process。紧接着第 2 句 “Plants can manage it with humbling ease.”（植物做起来轻松得令人汗颜）描述的是外表的轻松与简单；第 3 句立刻用 But 转折：“as the 40 researchers from 11 institutes who have collaborated to form the Australian Artificial Photosynthesis Network have realised, it is very complex.”（正如组成澳大利亚人工光合作用网络的 11 所机构 40 名研究者所认识到的，它非常复杂）。40 名研究者、11 所机构共同攻关这一细节，本身就说明该过程绝不简单。题干把 “humbling ease” 与 “very complex” 这一对矛盾概括为 appears simpler than it actually is（看起来比实际简单），两处信息完全对应，答案 G。做题时注意：“看起来简单”这类表述不一定出现 simple / easy 等形容词，本题用 humbling ease 这一名词短语来表达。",
          "traps": [
            "为什么不是 A：A 段讲的是 de Mestral 观察种子钩环结构从而发明 Velcro 的故事，主角是人造发明，没有任何对自然过程难易程度的评价。",
            "为什么不是 B：B 段讲 Benyus 的书出版后的影响、人类自古模仿自然以及农业出现后人类远离自然的心理变化，讨论的是人与自然的观念史，不涉及某个自然过程本身是否简单。",
            "为什么不是 C：C 段的重点是“人类独立于自然的错觉被全球变暖与化石燃料枯竭击碎”，落点在可持续发展的紧迫性，没有出现“看似简单实则复杂”的对比。",
            "为什么不是 D、E：D 段讲鲨鱼高效游动启发潮汐发电装置，E 段讲海藻与波浪能发电机的柔顺设计，两段都在讲模仿动物的运动机制，均无繁简对比。",
            "为什么不是 F：F 段讲白蚁丘的蒸发降温原理以及 Pearce 的复制方案，重点是“怎么做到的”，同样没有“看起来比实际简单”的评价。只有 G 段用 humbling ease 与 very complex 直接构成这一对比。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "Which paragraph contains the following information? a description of an invention that can protect itself under extreme conditions",
          "translation": "哪一段描述了一种能在极端条件下自我保护的发明？",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In the manner of aquatic plants and animals, Finnigan's designs respond to changing current or wave conditions by reorienting to maximise energy capture. And in severe weather, to avoid a battering, his wave energy generator will lie flat against the ocean floor."
          },
          "synonyms": [
            "“an invention” 对应原文的 “his wave energy generator”（他的波浪能发电机）与前一句的 “Finnigan's designs”",
            "“under extreme conditions” 同义替换为原文的 “in severe weather”（在恶劣天气中）",
            "“can protect itself” 对应原文的 “to avoid a battering … will lie flat against the ocean floor”：为躲避巨浪拍击而主动平躺到海床上，是发明在极端条件下保护自己的动作",
            "“a description of” 对应原文对该设计如何随水流、波浪改变姿态的整段说明（reorienting to maximise energy capture）"
          ],
          "locatingTip": "定位：题干核心词是 invention 与 protect itself under extreme conditions。全文提到发明的有 A、D、E、F 四段：A 段是被种子钩环结构启发而发明的 Velcro，D 段是仿鲨鱼尾的潮汐流发电机，E 段是仿海藻的波浪能发电机，F 段是 Pearce 的楼宇冷却系统。逐一排查，只有 E 段末尾谈到“恶劣天气”这一极端条件。确定答案技巧：E 段倒数第 2 句说设计会随水流、波浪重新调整朝向以最大化能量捕获（respond to changing current or wave conditions by reorienting），最后一句用 And in severe weather 引出极端情形——“to avoid a battering, his wave energy generator will lie flat against the ocean floor”，装置主动平躺以躲开打击，正是“自我保护”，故选 E。",
          "analysis": "E 段（第 5 段）先以 diver 的观察引出思路：海底植物在巨浪中剧烈摆动却“never seem to be pulled out”（似乎从不被拔出）。接着倒数第 2 句说明 Finnigan 的设计原则：“In the manner of aquatic plants and animals, Finnigan's designs respond to changing current or wave conditions by reorienting to maximise energy capture.”（Finnigan 的设计仿照水生植物和动物，通过重新调整朝向以最大化能量捕获来回应水流或波浪的变化）。末句进一步给出极端情况下的应对：“And in severe weather, to avoid a battering, his wave energy generator will lie flat against the ocean floor.”（而在恶劣天气里，为避免被拍击，他的波浪能发电机会平躺在海床上）。这句里的 in severe weather 对应题干的 under extreme conditions，lie flat against the ocean floor 与 to avoid a battering 合起来对应 protect itself，主语 his wave energy generator 就是题干所说的 invention，三处一一对应，所以答案是 E。",
          "traps": [
            "为什么不是 D：D 段讲的是鲨鱼以流线型身体和坚挺高位尾鳍把高达 90% 的身体能量转化为前推动力，Finnigan 由此设计出 18 米长的仿生鲨鱼尾潮汐流发电机，全段谈的是提升能量转换效率，没有提到装置在极端条件下如何自保。",
            "为什么不是 F：F 段确实描述了发明（Pearce 的楼宇冷却系统），但落点是节能——“cut energy use to 10 per cent of a similar air-conditioned building”，与“极端条件下自我保护”无关；楼里的巨型风扇只是用来降温。",
            "为什么不是 A、B、C、G：A 段讲 Velcro 的发明过程，B 段讲仿生学史，C 段讲人与自然的关系，G 段讲光合作用与实验室条件，四段都没有描述任何一项“能在极端条件下自我保护”的发明。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "Which paragraph contains the following information? the reasons why humans no longer feel they are free from nature",
          "translation": "哪一段给出了人类不再觉得自己可以脱离自然的原因？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The scientific, industrial, petrochemical and genetic engineering revolutions have repeatedly reinforced the idea that we are liberated from biological constraints. In recent years, however, the illusion that we are independent of nature has been shattered by the spectre of global warming and the looming end to fossil fuel supplies."
          },
          "synonyms": [
            "“no longer feel they are free from nature” 同义替换为原文的 “the illusion that we are independent of nature has been shattered”：错觉（illusion）被击碎（shattered），即不再觉得自己独立于自然",
            "“the reasons why” 对应原文由 by 引出的两个原因：“the spectre of global warming”（全球变暖的幽灵）与 “the looming end to fossil fuel supplies”（迫在眉睫的化石燃料供应终结）",
            "“humans … free from nature” 对应原文的 “we are independent of nature” 与上一句的 “we are liberated from biological constraints”"
          ],
          "locatingTip": "定位：题干关键词是 humans no longer feel free from nature，属于“观念发生变化”的表述，B、C 两段都涉及人类与自然的关系，需要分辨观点转变的方向。确定答案技巧：C 段用 In recent years, however 这一转折把前后态度对立起来——前面说历次科技革命不断强化“we are liberated from biological constraints”（我们已从生物限制中解放出来）的想法，后面说 the illusion that we are independent of nature has been shattered；has been shattered 是完成时，恰好对应题干的 no longer，而被击碎的原因由 by 逐一列出：global warming 与 the looming end to fossil fuel supplies，正好回答 the reasons why，故选 C。",
          "analysis": "C 段（第 3 段）第 1 句先说人的错觉来源：“The scientific, industrial, petrochemical and genetic engineering revolutions have repeatedly reinforced the idea that we are liberated from biological constraints.”（科学、工业、石化与基因工程革命反复强化了我们已脱离生物限制的想法）。第 2 句立刻转折：“In recent years, however, the illusion that we are independent of nature has been shattered by the spectre of global warming and the looming end to fossil fuel supplies.”（然而近年来，“我们独立于自然”这一错觉被全球变暖的威胁和化石燃料供应即将终结的前景击碎）。题干 the reasons why humans no longer feel they are free from nature 的两个信息点分别落在：no longer feel free from nature 对应 the illusion … has been shattered；the reasons why 对应 by 引出的 the spectre of global warming 与 the looming end to fossil fuel supplies，所以答案是 C。注意本段后半句 “Since few of us would be willing to forgo the products and services we've grown accustomed to …” 讲的是这一认识转变带来的挑战（可持续性），不是错觉被击碎的原因，不要混淆。",
          "traps": [
            "为什么不是 B：B 段确实谈到人类与自然关系的变化，但方向相反——它说的是农业出现后人类“drift away from nature”（远离自然）、“fooled ourselves into believing that we didn't need other organisms at all”（自欺地以为根本不需要其他生物），那是错觉形成的过程，而题干问的是错觉被击碎的原因。",
            "为什么不是 G：G 段讲光合作用的机制以及实验室条件下可优化变量，讨论的是科研方法，完全没有涉及人类对自然的依赖感。",
            "为什么不是 D、E、F：D、E 段讲海洋能源装置如何模仿鲨鱼与海藻，F 段讲仿白蚁丘的降温楼，三段都是技术案例，没有讨论人类观念层面“是否独立于自然”的问题。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "Which paragraph contains the following information? a reference to an animal that influenced the diet of some humans",
          "translation": "哪一段提到了一种影响了某些人类饮食的动物？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "referring to African tribes that found edible plants by observing the dining habits of chimpanzees."
          },
          "synonyms": [
            "“an animal” 对应原文的 “chimpanzees”（黑猩猩）",
            "“influenced the diet of some humans” 对应原文的 “African tribes that found edible plants by observing the dining habits of chimpanzees”：非洲部落通过观察黑猩猩的进食习惯而找到可食用的植物，饮食信息来源就是这种动物",
            "“some humans” 同义替换为原文的 “African tribes”（非洲部落），是部分人群而非全人类",
            "“a reference to” 对应原文以 Benyus 的举例形式出现：“referring to African tribes …”"
          ],
          "locatingTip": "定位：题干关键词是 animal 与 diet of some humans，回原文找“动物”与“吃什么”的组合。全文提到的动物有三处：B 段的 chimpanzees（黑猩猩）、D 段的 sharks（鲨鱼）、F 段的 termites（白蚁）。逐一核对：鲨鱼影响的是能量转换效率，白蚁影响的是建筑降温，只有黑猩猩与“饮食”有关。确定答案技巧：B 段 “referring to African tribes that found edible plants by observing the dining habits of chimpanzees” 中，found edible plants（找到可食用的植物）对应 diet 的信息来源，dining habits of chimpanzees（黑猩猩的进食习惯）对应 an animal，African tribes 对应 some humans，故选 B。",
          "analysis": "B 段（第 2 段）中 Benyus 解释人类模仿自然是一种古老冲动时说：“‘I think it's an old impulse for humans to take their cues from other organisms,' she says, referring to African tribes that found edible plants by observing the dining habits of chimpanzees.”（“我认为从其他生物身上获取启示是人类由来已久的冲动，”她说，指的是非洲部落通过观察黑猩猩的进食习惯来找到可食用植物）。题干的三要素在这里一一落地：an animal 是 chimpanzees；influenced the diet 是 found edible plants（找到可吃的植物，即获取食物的方式受其启发）；some humans 是 African tribes（不是全人类，题干用 some 精确概括）。这属于“人类从动物身上学吃”的信息，全篇只有 B 段涉及，所以答案是 B。",
          "traps": [
            "为什么不是 A：A 段涉及的生物线索是植物种子（seeds），动物没有被提及，也没有饮食的话题。",
            "为什么不是 D：D 段的鲨鱼确实是一种动物，但它被借用来解决流体动力学与发电效率问题，“sharks convert up to 90 per cent of their body energy into forward thrust”，与人类饮食无关。",
            "为什么不是 F：F 段的白蚁（termites）是动物，但它启发的是建筑降温（evaporative cooling），与饮食无关。",
            "为什么不是 C、E、G：C 段讨论人类与自然的关系和可持续性，E 段讲海洋装置设计，G 段讲光合作用，三段都没有把动物与人类饮食联系起来。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "Which paragraph contains the following information? specific reasons why science should copy nature",
          "translation": "哪一段给出了科学应当模仿自然的具体理由？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Living creatures have done everything we want to do, without guzzling fossil fuel or polluting the planet. What better models could there be?"
          },
          "synonyms": [
            "“science should copy nature” 对应原文的反问 “What better models could there be?”：models 即可供效法的对象，反问句表达“没有比自然更好的榜样”，等价于“科学应当模仿自然”",
            "“specific reasons” 对应原文并列给出的两条理由：“Living creatures have done everything we want to do”（生物已经做到了我们想做的一切）与 “without guzzling fossil fuel or polluting the planet”（不必狂耗化石燃料、不污染地球）",
            "“copy” 对应上一句的 “Nature has learnt to fly, live in the depths of the ocean and craft miracle materials”，即自然已掌握人类追求的各种能力"
          ],
          "locatingTip": "定位：题干问“科学为什么应当模仿自然”的理由，这类观点句最常出现在引用专家原话的地方，且 C 段结尾正是 Benyus 的引语。确定答案技巧：C 段先交代前提——人类不愿放弃现代技术产品，所以必须在可持续范围内满足文明需求；随后引用 Benyus 给出理由：“Living creatures have done everything we want to do, without guzzling fossil fuel or polluting the planet.”（生物已做到了我们想做的一切，却不狂耗化石燃料、不污染地球），并反问 “What better models could there be?”（还能有比它们更好的榜样吗？）。两条并列理由加一句反问，正是题干 specific reasons why science should copy nature，故选 C。",
          "analysis": "C 段（第 3 段）末两句是本题依据。Benyus 先写：“‘Nature has learnt to fly, live in the depths of the ocean and craft miracle materials,’”（自然已经学会飞翔、在深海生活、制造奇迹般的材料）；接着写：“‘Living creatures have done everything we want to do, without guzzling fossil fuel or polluting the planet. What better models could there be?’”（生物已做到了我们想做的一切，既不狂耗化石燃料也不污染地球。还能有什么更好的榜样呢？）。这两句给出了“为什么要模仿自然”的两条具体理由：一是生物的成就不输人类的目标（done everything we want to do），二是它们的做法零油耗、零污染（without guzzling fossil fuel or polluting the planet）；末句的反问 What better models could there be? 就是“应当把自然当作榜样”的断言。题干 specific reasons 对应这两条理由，why science should copy nature 对应 models 的反问，故选 C。注意：D、E 段虽然展示了模仿自然的成果，但那是“已经这么做”的实例，不是“应当这么做”的理由。",
          "traps": [
            "为什么不是 B：B 段同样引用了 Benyus，但内容是仿生学发展的历史与人类疏远自然的原因（对应第 21、23 题），没有给出“科学应当模仿自然”的理由。",
            "为什么不是 D、E：D 段和 E 段展示的是 Finnigan 已经问世的两项设计（仿鲨鱼尾潮汐发电机、仿海藻波浪能发电机），属于模仿自然的成果实例，而不是“应当模仿”的理由论证。",
            "为什么不是 G：G 段谈光合作用与实验室条件可控，落点是科学相对自然的优势（对应第 20 题），方向与“科学应当模仿自然”相反。",
            "为什么不是 A、F：A 段是 Velcro 的发明轶事，F 段是白蚁丘降温技术的成功案例，二者都只是具体故事，没有给出普适性的理由。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 19–23 观点匹配（Match each statement with the correct researcher）",
      "mode": "per_question",
      "questionRange": {
        "start": 19,
        "end": 23
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "Designs often fail when they try to resist natural forces.",
          "translation": "当设计试图抵御自然的力量时，往往以失败告终。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The trouble with conventional designs, according to Finnigan, is that they're made to stand rigidly against the power of the ocean. 'The structures we try to build in the ocean just never end up being strong enough to survive out there"
          },
          "synonyms": [
            "“Designs” 对应原文的 “conventional designs”（传统设计）与 “The structures we try to build in the ocean”（我们试图在海洋中建造的结构）",
            "“fail” 同义替换为原文的 “never end up being strong enough to survive out there”（最终总是不够结实、无法在那里存活）",
            "“try to resist natural forces” 同义替换为原文的 “made to stand rigidly against the power of the ocean”（被造来僵硬地对抗海洋的力量）",
            "说话人由原文的 “according to Finnigan” 与 “says Finnigan” 标明，对应研究者名单中的 C Tim Finnigan"
          ],
          "locatingTip": "定位：题干关键词 resist natural forces 与 fail，全文只有 E 段（Finnigan 谈海洋结构）在讲“与海洋硬碰硬必然失败”。确定答案技巧：原文用 “The trouble with conventional designs, according to Finnigan, is that they're made to stand rigidly against the power of the ocean.” 指出传统设计的问题在于僵硬对抗；紧接引语 “The structures we try to build in the ocean just never end up being strong enough to survive out there” 给出失败的结果。两句合起来正是“试图抵御自然力量就会失败”，说话人被两处标注为 Finnigan，对应名单里的 C。",
          "analysis": "E 段（第 5 段）里 Finnigan 先指出传统做法的毛病：“The trouble with conventional designs, according to Finnigan, is that they're made to stand rigidly against the power of the ocean.”（在 Finnigan 看来，传统设计的问题在于它们被造来僵硬地对抗海洋的力量）。随后引用他的原话：“‘The structures we try to build in the ocean just never end up being strong enough to survive out there,’ says Finnigan.”（“我们试图在海里建造的结构，最终总是结实不到能在那里存活下去的程度，”Finnigan 说）。题干的 resist natural forces 对应 stand rigidly against the power of the ocean（刚性对抗海洋的力量），fail 对应 never end up being strong enough to survive out there，观点归属由 according to Finnigan / says Finnigan 直接标注，Tim Finnigan 在名单中是 C，故答案 C。注意：本题的“失败”不是指工程事故，而是指这种硬抗思路走不通，因此他才改用随波调整姿态的柔性设计。",
          "traps": [
            "为什么不选 A Georges de Mestral：A 段讲他 1948 年在草丛中发现种子钩在裤子上，由此发明 Velcro，全段没有任何关于设计失败的论述。",
            "为什么不选 B Janine Benyus：B 段的核心是仿生学历史与人类何时开始疏远自然（对应第 21、23 题），没有谈设计失败的机制。",
            "为什么不选 D Mick Pearce：F 段讲 Pearce 因资金不足转向仿白蚁丘的降温设计并成功把能耗降到同类空调建筑的 10%，是成功案例（对应第 22 题），与“对抗自然力量而失败”相反。",
            "为什么不选 E Tom Collings：G 段讲实验室条件可控带来的优势（对应第 20 题），完全没有“设计对抗自然力量”的话题。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "Science has certain key advantages over nature.",
          "translation": "相对于自然，科学具备某些关键优势。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "In nature, environmental variables like temperature, carbon dioxide and light availability limit the rate of photosynthesis. In a laboratory these variables can be optimized. 'We don't have to cope with drought or frost. We can work with a highly controlled, specified set of conditions"
          },
          "synonyms": [
            "“Science” 对应原文的 “In a laboratory”（在实验室里）与 “a highly controlled, specified set of conditions”（一组高度可控、明确指定的条件）",
            "“has certain key advantages over nature” 对应原文的对照结构：“In nature, environmental variables … limit the rate of photosynthesis. In a laboratory these variables can be optimized.”：自然界有限制，实验室里可以优化",
            "“advantages” 的具体内容就是原文的 “We don't have to cope with drought or frost.”（我们不必应付干旱或霜冻）",
            "说话人由原文的 “says Tom Collings, the group's spokesman” 标明，对应研究者名单中的 E Tom Collings"
          ],
          "locatingTip": "定位：题干关键词 advantages over nature 属于“比较优劣”型表述，回原文找 nature 与 laboratory 的对照结构。G 段连续出现 In nature … / In a laboratory …，一步锁定。确定答案技巧：原文先承认自然界的限制——“In nature, environmental variables like temperature, carbon dioxide and light availability limit the rate of photosynthesis.”，再说实验室的优势——“In a laboratory these variables can be optimized.”，最后用 Collings 的原话补充具体好处：不必应付干旱或霜冻、可在高度可控且明确指定的条件下工作。说话人 Tom Collings 在名单中是 E，故答案 E。",
          "analysis": "G 段（第 7 段）先说光合作用本身很复杂（it is very complex），随后用 However, there is one aspect working in our favour 转出有利因素：“In nature, environmental variables like temperature, carbon dioxide and light availability limit the rate of photosynthesis. In a laboratory these variables can be optimized.”（在自然界中，温度、二氧化碳和光照可得性等环境变量限制着光合作用的速率；而在实验室里，这些变量可以优化）。紧接着引用发言人：“‘We don't have to cope with drought or frost. We can work with a highly controlled, specified set of conditions,' says Tom Collings, the group's spokesman.”（“我们不必应付干旱或霜冻。我们可以在一组高度可控、明确指定的条件下工作，”该组织的发言人 Tom Collings 说）。题干的两层意思都有原文支撑：advantages over nature 对应 In nature … limit … 与 In a laboratory … can be optimized 的对照；science 对应 In a laboratory 与 highly controlled, specified set of conditions。说话人是 Tom Collings，对应于名单 E，故答案 E。",
          "traps": [
            "为什么不选 C Tim Finnigan：D、E 段讲的是把鲨鱼与海藻的运动原理用于海洋能源装置，从未比较实验室与自然条件的优劣。",
            "为什么不选 B Janine Benyus：B 段讨论人类对自然的疏远以及仿生学的历史，没有涉及科学相对自然的优势。",
            "为什么不选 D Mick Pearce：F 段是仿白蚁丘降温的成功建筑案例，属于技术应用，没有“实验室条件可优化”这一层论断。",
            "为什么不选 A Georges de Mestral：A 段只有 Velcro 的发明故事，既没有实验室，也没有自然条件限制的讨论。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "People have been copying nature for thousands of years.",
          "translation": "人类模仿自然已经有数千年之久。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "According to Benyus, our ancestors were practised in the art of biomimicry. 'I think it's an old impulse for humans to take their cues from other organisms"
          },
          "synonyms": [
            "“People” 对应原文的 “our ancestors”（我们的祖先）与 “humans”",
            "“have been copying nature” 同义替换为原文的 “were practised in the art of biomimicry”（精通仿生这门技艺）与 “take their cues from other organisms”（从其他生物身上获得启示）",
            "“for thousands of years” 对应原文的 “ancestors”（祖先）与 “an old impulse”（一种古老的冲动），用时间久远的说法替代具体年数",
            "观点归属由原文的 “According to Benyus” 标明，对应研究者名单中的 B Janine Benyus"
          ],
          "locatingTip": "定位：题干关键词 copying nature 与时间久远（thousands of years），回原文搜索“祖先、古老、自古以来”一类表述。B 段 “According to Benyus, our ancestors were practised in the art of biomimicry.” 一步命中。确定答案技巧：雅思常用 ancestors、old impulse 这类词表达“千百年”；copying nature 对应 practised in the art of biomimicry 与 take their cues from other organisms；观点归属由 According to Benyus 直接标注，Benyus 在名单中是 B，故答案 B。",
          "analysis": "B 段（第 2 段）在介绍 Benyus 的书之后写道：“According to Benyus, our ancestors were practised in the art of biomimicry. ‘I think it's an old impulse for humans to take their cues from other organisms,' she says, referring to African tribes that found edible plants by observing the dining habits of chimpanzees.”（按照 Benyus 的说法，我们的祖先精通仿生这门技艺。“我认为从其他生物身上获得启示是人类由来已久的冲动，”她说，指的是那些通过观察黑猩猩进食习惯来找到可食用植物的非洲部落）。题干三处都能对上：People 对应 our ancestors / humans；have been copying nature 对应 practised in the art of biomimicry 与 take their cues from other organisms；for thousands of years 对应 ancestors 与 an old impulse（久远的冲动，并非几百年的新事）。观点由 Benyus 本人提出，对应名单 B，故答案 B。注意本题与第 23 题同选 B，题干 NB 已提示研究者可重复使用。",
          "traps": [
            "为什么不选 A Georges de Mestral：A 段的 de Mestral 是 1948 年从种子得到启发的人，属于现代个案，无法支撑“数千年”这一时间跨度。",
            "为什么不选 C Tim Finnigan：D、E 段讲的是当代海洋工程师向鲨鱼、海藻学习，全是现代研究，与古代人类无关。",
            "为什么不选 D Mick Pearce：F 段是当代津巴布韦的建筑项目，同样不涉及古代。",
            "为什么不选 E Tom Collings：G 段谈的是实验室条件下研究光合作用，与人类长期模仿自然的历史无关。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "A shortage of money can inspire innovative design.",
          "translation": "资金短缺反而可能催生创新的设计。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "We were building office blocks for a client in Zimbabwe and we ran out of funds. So we looked for ways to make a building without traditional air conditioning"
          },
          "synonyms": [
            "“A shortage of money” 同义替换为原文的 “we ran out of funds”（资金用尽）",
            "“inspire innovative design” 同义替换为原文的 “So we looked for ways to make a building without traditional air conditioning”（于是我们寻找不用传统空调来造楼的方案）",
            "“can” 对应原文的 So 所表达的因果：正因为没钱了，才被迫另想办法",
            "说话人由 F 段主角 Mick Pearce 的直接引语标明，对应研究者名单中的 D Mick Pearce"
          ],
          "locatingTip": "定位：题干关键词与“钱”有关（shortage of money），扫读全文找 money、funds、expensive 一类词，只有 F 段出现 “we ran out of funds”。确定答案技巧：原文 “We were building office blocks for a client in Zimbabwe and we ran out of funds.” 中的 ran out of funds 就是 a shortage of money；其后的 “So we looked for ways to make a building without traditional air conditioning.” 是被迫另辟蹊径的结果，对应 inspire innovative design。这段引语出自 F 段主角 Mick Pearce 之口，他在名单中是 D，故答案 D。",
          "analysis": "F 段（第 6 段）开头写 Pearce 遇到的困境，并用直接引语说明缘由：“‘We were building office blocks for a client in Zimbabwe and we ran out of funds. So we looked for ways to make a building without traditional air conditioning.’”（“我们当时正为客户在津巴布韦建造办公楼，结果资金用完了。于是我们寻找不用传统空调来造楼的办法。”）。题干把这两句压缩成“资金短缺催生创新设计”：A shortage of money 对应 ran out of funds；innovative design 对应 a building without traditional air conditioning（放弃传统空调，本身就是颠覆常规的设计思路）；can inspire 对应 So 引导的因果与转向。随后他果然从白蚁丘得到灵感，做出把能耗降到同类建筑 10% 的降温系统，印证了“困境催生创新”。观点归属是 Mick Pearce，名单中为 D，故答案 D。",
          "traps": [
            "为什么不选 B Janine Benyus：B 段讨论人类模仿自然的历史与远离自然的心理，与资金没有任何关系。",
            "为什么不选 C Tim Finnigan：D、E 段讲海洋能源装置，从未提到经费或预算问题。",
            "为什么不选 E Tom Collings：G 段谈实验室条件与光合作用研究，属于科研条件问题，不是经费短缺。",
            "为什么不选 A Georges de Mestral：A 段是种子启发 Velcro 的故事，没有任何关于资金的内容。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "The discovery that humans could produce food themselves caused them to turn away from nature.",
          "translation": "人类发现自己能够自己生产食物，这一发现使他们背离了自然。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Benyus thinks our drift away from nature started with the advent of agriculture: 'When we broke free from the challenges of hunting and gathering and learnt to stock our cupboards, we fooled ourselves into believing that we didn't need other organisms at all"
          },
          "synonyms": [
            "“The discovery that humans could produce food themselves” 同义替换为原文的 “the advent of agriculture”（农业的出现）与 “learnt to stock our cupboards”（学会把食物储进橱柜）",
            "“caused them to turn away from nature” 同义替换为原文的 “our drift away from nature started with …”（我们偏离自然的漂移正是始于……）",
            "“humans” 对应原文的 we / our，指人类整体",
            "观点归属由原文的 “Benyus thinks” 以及 she says 标明，对应研究者名单中的 B Janine Benyus"
          ],
          "locatingTip": "定位：题干关键词 produce food themselves 与 turn away from nature，回原文找“农业、储存食物、远离自然”的组合。B 段末尾 “Benyus thinks our drift away from nature started with the advent of agriculture” 直接命中。确定答案技巧：原文把“自己生产食物”表达为 the advent of agriculture 与 learnt to stock our cupboards（学会把食物存进橱柜）；把“背离自然”表达为 our drift away from nature started with …，并补充说人类因此误以为不需要其他生物。观点由 Benyus thinks 明确归属，名单中为 B，故答案 B。",
          "analysis": "B 段（第 2 段）末尾引出 Benyus 关于人类疏远自然的判断：“Benyus thinks our drift away from nature started with the advent of agriculture: ‘When we broke free from the challenges of hunting and gathering and learnt to stock our cupboards, we fooled ourselves into believing that we didn't need other organisms at all,’ she says.”（Benyus 认为我们偏离自然的漂移始于农业的出现：“当我们摆脱了狩猎采集的挑战、学会把食物储存进橱柜时，我们便自欺地以为根本不需要其他生物了，”她说）。题干的两半分别对应：humans could produce food themselves 对应 the advent of agriculture 与 learnt to stock our cupboards（不再依赖狩猎采集，能自己存粮）；caused them to turn away from nature 对应 our drift away from nature started with … 以及 fooled ourselves into believing that we didn't need other organisms at all。观点归属由 Benyus thinks 直接标注，名单中为 B，故答案 B。注意第 21 题也选 B，本题与它同段不同句，做题时要各归各位：第 21 题依据 ancestors were practised in the art of biomimicry，本题依据 drift away from nature started with the advent of agriculture。",
          "traps": [
            "为什么不选 D Mick Pearce：F 段讲的是建筑降温技术（对应第 22 题），虽然涉及自然界的白蚁丘，但完全没有讨论人类食物来源的变化。",
            "为什么不选 C Tim Finnigan：D、E 段讲仿鲨鱼与仿海藻的发电装置，与农业和饮食无关。",
            "为什么不选 E Tom Collings：G 段虽然提到光合作用（植物制造有机物），但 Collings 谈的是实验室条件可控，并未说人类因此背离自然。",
            "为什么不选 A Georges de Mestral：A 段只讲 Velcro 的发明故事，没有涉及农业生产或人类与自然关系的转变。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–26 摘要填空（Summary completion，ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 26
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "The design of his office block can be compared to that of a termite's 24 ________.",
          "translation": "他的办公楼设计可以与白蚁的________相类比。",
          "answer": "mound",
          "wordClass": "名词（可数，单数；在题干中作所有格 termite's 的中心词，原文以单数形式 a large mound 出现）",
          "locating": {
            "paragraph": "6",
            "quote": "One day, driving through the grasslands, he saw a large mound created by termites, the ant-like insect common in Africa."
          },
          "synonyms": [
            "“a termite's mound” 与原文的 “a large mound created by termites” 互为改写：原文用 created by 后置修饰，题干改用所有格 termite's",
            "“can be compared to” 同义替换为原文的 “Pearce wanted to reproduce this principle”（Pearce 想要复制这一原理）",
            "“The design of his office block” 对应原文的 “in his building”（在他的大楼里）与 “Pearce's termite-inspired cooling system”（Pearce 受白蚁启发的降温系统）"
          ],
          "locatingTip": "定位：摘要标题是 A building project in Zimbabwe，与 F 段（Pearce 在津巴布韦的项目）对应，直接跳到 F 段精读。确定答案技巧：题干说“他的办公楼设计可与白蚁的某种结构相比”，原文对应句是 “he saw a large mound created by termites”（他看到白蚁堆起的大土丘），created by termites 与题干的 termite's 对应，因此空格要填被白蚁建造出来的那个名词 mound（土丘）。答案必须从原文选词且只能一个词，不要写 nest 或 mound created by termites 之类原文没有或超词数的形式。",
          "analysis": "F 段（第 6 段）交代 Pearce 的灵感来源：“One day, driving through the grasslands, he saw a large mound created by termites, the ant-like insect common in Africa.”（一天，他开车穿过草原时，看到一座由白蚁——非洲常见的类蚂蚁昆虫——堆起的大土丘）。随后两句解释其中的原理：“He noticed that air entering at the base of the mound was mixed with water drawn from subterranean levels by the termites, causing evaporative cooling.”（他注意到从土丘底部进入的空气与白蚁从地下抽取的水混合，形成蒸发冷却）；“Pearce wanted to reproduce this principle but he needed an alternative system …”（Pearce 想复制这一原理，但需要一个替代方案……）。摘要第一句 “The design of his office block can be compared to that of a termite's 24” 正是把“他想复制这一原理”转述成“他的设计可与白蚁的某结构相比”，空格对应的就是原文反复出现的 mound。词性上，mound 是可数名词，此处作所有格 termite's 的中心词、表示一座具体的土丘，故用单数原形 mound。",
          "traps": [
            "为什么不是 nest：原文用的一律是 mound（土丘），全篇没有出现 nest 一词，题目要求“从原文选一个词”，因此必须写 mound。",
            "为什么不写 mounds：题干是 a termite's …，所有格加单数中心词，原文也是 a large mound，写复数形式会与原文及题干语法都不符。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "Termites use 25 ________ to cool the air.",
          "translation": "白蚁利用________来冷却空气。",
          "answer": "water",
          "wordClass": "名词（不可数，物质名词；作及物动词 use 的宾语，表示用于降温的物质）",
          "locating": {
            "paragraph": "6",
            "quote": "He noticed that air entering at the base of the mound was mixed with water drawn from subterranean levels by the termites, causing evaporative cooling."
          },
          "synonyms": [
            "“Termites use water to cool the air” 对应原文的 “air entering at the base of the mound was mixed with water drawn from subterranean levels by the termites, causing evaporative cooling”",
            "“to cool the air” 同义替换为原文的 “causing evaporative cooling”（造成蒸发冷却）",
            "“use” 对应原文的 “water drawn from subterranean levels by the termites”：水由白蚁主动从地下抽取上来使用"
          ],
          "locatingTip": "定位：本题与第 24 题同在 F 段，继续往下读白蚁丘的降温机制句即可。确定答案技巧：原文说从土丘底部进入的空气 was mixed with water drawn from subterranean levels by the termites（与白蚁从地下抽取的水混合），从而 causing evaporative cooling（造成蒸发冷却）。摘要把它改写成 “Termites use [25] to cool the air”，动作主体仍是白蚁，被使用的物质是 water。空格前是 use，其后需要一个名词，且只有一个词，所以填 water，不填 cooling 或 evaporative。",
          "analysis": "F 段（第 6 段）第 4 句是白蚁丘的原理说明：“He noticed that air entering at the base of the mound was mixed with water drawn from subterranean levels by the termites, causing evaporative cooling.”（他注意到从土丘底部进入的空气与白蚁从地下深处抽取上来的水混合，形成了蒸发冷却）。摘要第二句前半 “Termites use 25 to cool the air” 是对这一机制的概括：施动者 termites 对应 drawn from subterranean levels by the termites；动作 use 对应 was mixed with water drawn …（白蚁取水并用）；目的 to cool the air 对应 causing evaporative cooling。因此空格要填白蚁用来降温的物质名词 water。词性上 water 在此为不可数物质名词，直接作 use 的宾语，不加冠词也不变复数。作答时要与下半句区分开：题干用 but 转折，后半句问的是 Pearce 的替代办法（第 26 题），不要与这一空混填。",
          "traps": [
            "为什么不填 cooling：causing evaporative cooling 是“造成蒸发冷却”，讲的是结果，而空前的 use 要求填白蚁所凭借的物质，即 water。",
            "为什么不填 air：air 是进入土丘被处理的对象，与它混合的才是降温用的 water，题干的主语 termites 使用的不是空气。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "but in Pearce's system this cooling effect was produced by 26 ________.",
          "translation": "但在 Pearce 的系统中，这种冷却效果是由________产生的。",
          "answer": "fans",
          "wordClass": "名词（可数，复数；作被动结构 was produced by 的施动者，原文用复数 massive fans，故须写 fans 而非 fan）",
          "locating": {
            "paragraph": "6",
            "quote": "Pearce wanted to reproduce this principle but he needed an alternative system, and in his building massive fans were employed at the base of the structure to lower the temperature of the circulating air."
          },
          "synonyms": [
            "“in Pearce's system” 对应原文的 “in his building”（在他的大楼里）",
            "“this cooling effect was produced by fans” 同义替换为原文的 “massive fans were employed … to lower the temperature of the circulating air”：lower the temperature 即 cooling effect，were employed 即 was produced by",
            "“but … an alternative system” 对应原文的 “he needed an alternative system”：白蚁靠水（第 25 题），Pearce 改用别的办法，题干用 but 标出这一对比"
          ],
          "locatingTip": "定位：题干关键词 Pearce's system 与 cooling effect，仍在 F 段，找“用什么给楼降温”。确定答案技巧：题干用 but 构成对比——白蚁靠水（第 25 题），Pearce 则另有办法；原文对应表述是 “in his building massive fans were employed at the base of the structure to lower the temperature of the circulating air.”，其中 were employed 对应 was produced by，lower the temperature 对应 cooling effect，充当施动者的名词是 fans。原文用复数 massive fans，所以必须写 fans，不能写单数 fan。",
          "analysis": "F 段（第 6 段）后半给出 Pearce 的实际做法：“Pearce wanted to reproduce this principle but he needed an alternative system, and in his building massive fans were employed at the base of the structure to lower the temperature of the circulating air.”（Pearce 想复制这一原理，但需要一个替代方案；在他的大楼里，结构底部使用了巨型风扇来降低循环空气的温度）。摘要末句 “but in Pearce's system this cooling effect was produced by 26” 与这句一一对应：Pearce's system 对应 in his building；produced by 对应 were employed；this cooling effect 对应 to lower the temperature of the circulating air；空格处即句子的施动者 fans。原文特意用 he needed an alternative system 表明 Pearce 没有照搬白蚁的“水冷却”，而是改用风扇强制降温，所以不能沿用第 25 题的 water。填词时注意原文是复数 massive fans，故写 fans，与题干被动结构中“多个施动者”的事实一致；同时不要写 massive（那是修饰语，超词数且非答案）。本段最后一句还给出成效：“Pearce's termite-inspired cooling system cut energy use to 10 per cent of a similar air-conditioned building.”，可作为验证——这套系统正是靠风扇降温的仿生设计。",
          "traps": [
            "为什么不填 water：抽地下水混入空气是白蚁丘的做法，原文明确说 Pearce 需要 an alternative system，他改用巨型风扇，所以该空不能照抄第 25 题的答案。",
            "为什么不写 fan：原文是复数 massive fans，且这些风扇在结构底部并列工作，写成单数会与原文不符。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
