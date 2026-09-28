(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-low-73", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-low-73",
  "meta": {
    "examId": "p2-low-73",
    "title": "The Power of Smell 嗅觉的力量",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–19 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 19
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "a finding that humans can distinguish between two extremely similar substances",
          "translation": "一项发现：人类能够区分两种极其相似的物质。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "We are also exceptionally gifted at telling smells apart, even in the case of two molecules whose only difference is that their structures are mirror images of one another."
          },
          "synonyms": [
            "“distinguish between” 同义替换为原文的 “telling smells apart”（把气味分辨开来）",
            "“two extremely similar substances” 同义替换为原文的 “two molecules whose only difference is that their structures are mirror images of one another”，即两者的唯一差别是结构互为镜像，相似程度极高",
            "“a finding” 对应原文 George Dodd 引语中的结论性表述 “That is fantastic sensitivity”，属于一项研究发现"
          ],
          "locatingTip": "定位：题干的核心是“区分（distinguish）+ 两种极相似的东西（two extremely similar substances）”。扫读 A–G 段时抓住表“分辨”的动作词：D 段开头引语里的 telling smells apart 就是 distinguish 的对应表达，紧接着的 two molecules whose only difference is that their structures are mirror images of one another 把“极其相似”写到极致（两种分子唯一的差别是结构互为镜像）。两个要素在同一句里汇合，答案就是 D。确定答案技巧：题干用的是抽象名词 substances，原文用的是 molecules（分子），属于同义上下位替换；判分就看有没有一处同时包含“分辨动作”与“两者几乎一样”的细节，C 段虽然也讲灵敏度，但讲的是“能察觉极微量”，与“区分两种相似物”是两个维度，不要混。",
          "analysis": "D 段（第 4 段）引述调香师 George Dodd 的话：“We are also exceptionally gifted at telling smells apart, even in the case of two molecules whose only difference is that their structures are mirror images of one another. That is fantastic sensitivity,” says George Dodd…（我们在分辨气味方面也格外有天赋，即便是两种分子，只要它们的结构互为镜像、其余毫无差别，我们也能分辨。这是惊人的敏感度）。这里 exceptionally gifted at telling smells apart 对应题干的 can distinguish（能够区分），two molecules whose only difference is that their structures are mirror images of one another 对应 two extremely similar substances（两种极其相似的物质）。题干把这些信息概述为“一项发现（a finding）”，而原文由研究者以研究发现的口吻给出结论 That is fantastic sensitivity，信息完全吻合，因此选 D。做本题要注意题干中的 substances 是概括词，原文具体化为 molecules，且“相似”是通过 mirror images（镜像）这一化学细节体现的，抓住 only difference 就等于抓住了 extremely similar。",
          "traps": [
            "为什么不是 C：C 段说的是灵敏度（One study, for example, found that we can detect certain chemicals diluted in water to less than one part per billion），即“能察觉到极微小的量”，落脚点在“量”，而题干落在“区分两种极相似的物质”，两个信息点不同。",
            "为什么不是 B：B 段讲的是 Broca 对哺乳动物嗅觉能力的分类（macrosmatic 与 microsmatic），该段并未涉及人类分辨相似物质的能力。",
            "为什么不是 F：F 段讲气味对决策的负面影响（performed significantly worse than normal），讨论的是决策质量，与“分辨相似物质”无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "a categorisation of species according to their sensitivity to smell",
          "translation": "一种按动物对气味的敏感程度来对物种进行的分类。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "he suggested that mammals can be classed into two broad groups: macrosmatic mammals, such as dogs, have a finely tuned sense of smell which they rely on to perceive the world, while we, along with other primates and the marine mammals, are microsmatic"
          },
          "synonyms": [
            "“a categorisation of species” 同义替换为原文的 “mammals can be classed into two broad groups”（把哺乳动物分成两大类）",
            "“according to their sensitivity to smell” 同义替换为原文的 “macrosmatic mammals, such as dogs, have a finely tuned sense of smell” 与 “are microsmatic”",
            "“species” 与原文的 “mammals” 为上下位同义表达，分类对象都是动物物种"
          ],
          "locatingTip": "定位：题干的名词 categorisation 提示原文应有“分门别类”的动作，扫描全文找 class … into … groups 或 two groups 之类表述，只有 B 段出现 “mammals can be classed into two broad groups”。确定答案技巧：分类的标准就是题干所说的 sensitivity to smell，原文用两个本义相反的术语表示：macrosmatic（嗅觉灵敏，如狗，finely tuned sense of smell）与 microsmatic（嗅觉器官小、只在小程度上依赖），并且明确把人类与其他灵长类、海洋哺乳动物归入 microsmatic。看到这一对术语即可确认答案为 B。",
          "analysis": "B 段（第 2 段）先交代人物：“One of the first people to assert the relative unimportance of human smelling was Pierre Paul Broca, an influential 19th-century anatomist.”（最早主张人类嗅觉相对不重要的学者之一是 19 世纪有影响力的解剖学家 Pierre Paul Broca），随后给出本题定位句：After comparing the proportion of the brain devoted to smell in different animals, he suggested that mammals can be classed into two broad groups: macrosmatic mammals, such as dogs, have a finely tuned sense of smell which they rely on to perceive the world, while we, along with other primates and the marine mammals, are microsmatic（在比较了不同动物大脑中用于嗅觉的比例后，他提出哺乳动物可分为两大类：大型嗅觉动物如狗拥有灵敏的嗅觉并倚赖它感知世界，而我们与其他灵长类、海洋哺乳动物则属于嗅觉退化型）。这里的 class … into two broad groups 即题干的 categorisation，macrosmatic 与 microsmatic 的区分标准正是“对气味的敏感度”，因此本题答案锁定 B。注意题干说的是 species，原文说的是 mammals，动物界中被分类的这一大类即物种层面，属于合理的概括。",
          "traps": [
            "为什么不是 C：C 段是对 Broca 结论的修正与反驳（Yet these findings may have been misleading），讨论人与其他动物受体数量的差别以及人脑与嗅觉的紧密连接，并没有再对物种作分类。",
            "为什么不是 A：A 段只说人类鼻子其实是高度灵敏的仪器、气味会影响情绪与行为，属于对“人类嗅觉被低估”这一误解的澄清，没有出现任何物种分类。",
            "为什么不是 G：G 段讨论气味与记忆的关系，虽提到大脑区域，但与物种按嗅觉敏感度分类无关。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "an instance where smell negatively affected people's ability to make choices",
          "translation": "一个气味对人们做选择的能力产生负面影响的实例。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "during a task used to test decision-making skills, they performed significantly worse than normal. The researchers conclude the scent stimulated brain areas connected with emotion, making their decisions emotional rather than rational."
          },
          "synonyms": [
            "“people's ability to make choices” 同义替换为原文的 “decision-making skills”（决策技能）",
            "“negatively affected” 同义替换为原文的 “performed significantly worse than normal”（表现明显比正常情况差）",
            "“an instance” 同义替换为原文的 “A study by William Overman and colleagues at the University of North Carolina in the United States found that …”，即一项具体实验"
          ],
          "locatingTip": "定位：题干的两条线索分别是“做选择的能力（make choices）”与“负面影响（negatively affected）”。回原文找与决策有关的实验：F 段中 a task used to test decision-making skills 直接对应 make choices，performed significantly worse than normal 直接对应 negatively affected，两个要素同段同句，答案即 F。确定答案技巧：注意 F 段结论句进一步说明 “making their decisions emotional rather than rational”，把“决策被情绪干扰”再次点明，与题干“负面影响选择能力”完全一致；本题与第 22 题同段落，属于同段两题，逐题回到各自的句子核对即可。",
          "analysis": "F 段（第 6 段）整段围绕“气味会影响认知能力”展开：“Other work has found that scent can influence our cognitive skills. A study by William Overman and colleagues at the University of North Carolina in the United States found that when men were subjected to a novel smell – either good or bad – during a task used to test decision-making skills, they performed significantly worse than normal. The researchers conclude the scent stimulated brain areas connected with emotion, making their decisions emotional rather than rational.”（其他研究发现气味能影响认知技能。美国北卡罗来纳大学的 William Overman 及其同事发现，当男性在完成一项用于测试决策技能的任务时接触到一种新的气味——不论好闻还是难闻——他们的表现都明显比平时差。研究者认为，气味刺激了与情绪相关的脑区，使他们的决定变得情绪化而非理性）。题干中的 an instance 对应那项具体研究，ability to make choices 对应 decision-making skills，negatively affected 对应 performed significantly worse than normal，三处一一对应，故选 F。",
          "traps": [
            "为什么不是 D：D 段确实提到气味与思维有关（That suggests a link between smell and the way we think），但那只是提出一种关联性推测，没有给出任何“决策能力变差”的实例或实验数据。",
            "为什么不是 E：E 段列举的都是气味带来的中性或正面行为改变（跳舞更多、觉得夜晚更愉快、自觉打扫），与“负面影响选择能力”相反。",
            "为什么不是 G：G 段讲气味引发记忆，且明确纠正“气味带来的记忆更详细”这一迷思，与决策能力无关。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "a study that proved humans could perceive a tiny quantity of a substance",
          "translation": "一项证明人类能够感知某物质极微小剂量的研究。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "One study, for example, found that we can detect certain chemicals diluted in water to less than one part per billion."
          },
          "synonyms": [
            "“a study” 同义替换为原文的 “One study, for example, found that …”（有一项研究发现）",
            "“a tiny quantity of a substance” 同义替换为原文的 “certain chemicals diluted in water to less than one part per billion”，less than one part per billion 是“十亿分之一以下”，即极微小的量",
            "“perceive” 同义替换为原文的 “detect”（察觉）"
          ],
          "locatingTip": "定位：题干出现 study 与 tiny quantity，回原文找带研究者的证据句，C 段中 One study, for example, found that we can detect certain chemicals diluted in water to less than one part per billion 是全文唯一给出“能察觉到极微量”的具体数据，答案即 C。确定答案技巧：紧跟其后的 That means that a person can detect just a few drops of a strong smell like ethyl mercaptan in an Olympic-sized pool（这意味着一泳池大小的水里滴入几滴强烈气味物质都能被察觉）用形象化比喻再次强调“极微量”，两句互为印证。做题时要特别区分第 17 题（C：能察觉极微小量）与第 14 题（D：能区分两种极相似物质），前者讲“量”，后者讲“相似度”。",
          "analysis": "C 段（第 3 段）先推翻旧结论：“Yet these findings may have been misleading. Brain scans now show that more of the brain is devoted to smell processing than Broca's anatomical studies suggested.”（不过这些发现可能具有误导性。脑扫描如今显示，用于处理气味的脑区比 Broca 的解剖研究显示得更多），随后指出人类鼻子与大脑连接异常紧密，并用研究数据佐证：“One study, for example, found that we can detect certain chemicals diluted in water to less than one part per billion. That means that a person can detect just a few drops of a strong smell like ethyl mercaptan in an Olympic-sized pool.”（例如一项研究发现，我们能察觉被稀释到十亿分之一以下的某些化学物质，这意味着一泳池大小的水中只要滴入几滴像乙硫醇这样气味强烈的物质，人也能察觉）。题干中的 a study 对应 One study，proved humans could perceive 对应 found that we can detect，a tiny quantity of a substance 对应 diluted in water to less than one part per billion，信息完全对应，答案选 C。",
          "traps": [
            "为什么不是 D：D 段讲的是分辨两种结构互为镜像的分子，落点是“区分相似物”而非“感知极小量”。",
            "为什么不是 A：A 段只是概括地说人类鼻子其实是灵敏的仪器，并引用 Mujica-Parodi 关于偏见的评论，没有给出任何“研究证明微量感知”的实验数据。",
            "为什么不是 B：B 段的任务是给出物种分类，受体数量的差别（400 种受体）谈的是种类多少，不是可感知的剂量大小，属于同一话题下的干扰信息。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "an observation that studies of the sense of smell have been undervalued",
          "translation": "一种观察意见：关于嗅觉的研究一直未受到足够重视。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Noses have certainly never been at the forefront of sensory research, and were pushed aside until recently in favour of the seemingly more vital senses of vision and hearing."
          },
          "synonyms": [
            "“studies of the sense of smell” 同义替换为原文的 “sensory research” 中与鼻子相关的部分，原文直接点名为 “the forefront of sensory research”",
            "“have been undervalued” 同义替换为原文的 “have certainly never been at the forefront of sensory research, and were pushed aside until recently”（从未处于感官研究的前沿，且一直被搁置）",
            "“an observation” 同义替换为原文的 “There has been a lot of prejudice that people are not that influenced by olfactory stimuli”，即研究者对这一现状的观察与评论"
          ],
          "locatingTip": "定位：题干的关键词是 undervalued（被低估），原文用“从未处于前沿（never been at the forefront）”与“被搁置（pushed aside）”来表达同一层意思，这句在 A 段后半部分，只要扫读各段表“地位/重要性”的句子就能锁定 A。确定答案技巧：本段紧接着引用 Lilianne Mujica-Parodi 的话 “There has been a lot of prejudice that people are not that influenced by olfactory stimuli”（人们一直存在偏见，认为人不太受嗅觉刺激影响），其中的 prejudice 与 never been at the forefront、pushed aside 互相印证，共同指向“嗅觉研究长期被轻视”，所以答案是 A。",
          "analysis": "A 段（第 1 段）先破题：人类鼻子其实非常灵敏，气味能影响情绪、行为和选择；随后解释“为什么我们反而没意识到”：The big mystery is why we aren't more aware of our nasal activity. Noses have certainly never been at the forefront of sensory research, and were pushed aside until recently in favour of the seemingly more vital senses of vision and hearing.（最令人费解的是，我们为什么对自己的嗅觉活动如此不敏感。鼻子当然从未处于感官研究的前沿，直到最近还因为视觉、听觉这些看似更要紧的感官而被搁置一旁）。题干的 an observation that studies of the sense of smell have been undervalued 正是对这句话的概括：studies of the sense of smell 对应 sensory research，undervalued 对应 never been at the forefront 与 pushed aside。段末研究者的话进一步说明这种轻视的根源是偏见（prejudice），所以选 A。",
          "traps": [
            "为什么不是 C：C 段说的是早年那些研究结论“可能有误导性（may have been misleading）”，讨论的是结论是否站得住脚，而不是嗅觉研究这一领域是否被忽视。",
            "为什么不是 G：G 段虽然用了 myth 一词，但指的是“气味会触发比其他刺激更详细的记忆”这一流传说法，属于对具体结论的纠正，与“研究未受重视”无关。",
            "为什么不是 B：B 段讲 19 世纪 Broca 的分类学说，是研究史的内容，并未对嗅觉研究的地位作评价。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "an example of using smell to prompt people to buy something",
          "translation": "一个利用气味促使人们购买东西的例子。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The power of smell will be no news to estate agents, who often advocate the smell of baking bread or brewing coffee to promote the sale of a house."
          },
          "synonyms": [
            "“to prompt people to buy something” 同义替换为原文的 “to promote the sale of a house”（促进房屋的销售）",
            "“use smell” 同义替换为原文的 “often advocate the smell of baking bread or brewing coffee”",
            "“an example” 同义替换为原文的 “will be no news to estate agents”，房产中介的做法即一个现成实例"
          ],
          "locatingTip": "定位：题干中的 buy 在原文里以同源名词 sale 出现，所以可以直接找 promote the sale，只有 E 段首句出现这一表述，且句中主语是 estate agents（房产中介），正是商业场景。确定答案技巧：E 段后面两个例子（夜店加香让客人跳得更多、宿舍学生自觉打扫）都属于行为影响，不涉及买卖，不要被它们带走；只有在“卖房”这件事上，气味是直接为交易服务的，因此答案是 E。",
          "analysis": "E 段（第 5 段）开头写道：“The power of smell will be no news to estate agents, who often advocate the smell of baking bread or brewing coffee to promote the sale of a house.”（气味的力量对房产中介来说早已不是新闻，他们常常提倡用烤面包或煮咖啡的香味来促进房屋销售）。题干的 an example of using smell to prompt people to buy something 与此完全对应：using smell 对应 the smell of baking bread or brewing coffee，prompt people to buy 对应 promote the sale。紧随其后的 But there are more subtle and surprising effects too 表示后面举的例子属于“更微妙的影响”，即夜店跳舞（Hendrik Schifferstein）与学生打扫（Rob Holland），它们都不是购买行为，因此答案只能是 E。",
          "traps": [
            "为什么不是 D：D 段只谈人类分辨气味的能力以及嗅觉中枢与边缘系统（limbic system）的关联，没有任何消费或购买场景。",
            "为什么不是 F：F 段讲的是气味让决策变差（making their decisions emotional rather than rational），属于决策质量受损，不是促成交易。",
            "为什么不是 G：G 段讨论气味唤起的记忆与情绪，完全没有提及买卖。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 20–23 人物观点匹配（Match each statement with the correct person A–F）",
      "mode": "per_question",
      "questionRange": {
        "start": 20,
        "end": 23
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "A faint smell could motivate people to do household chores",
          "translation": "一种微弱的气味就能促使人们去做家务。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Meanwhile, Rob Holland, of the University of Utrecht in the Netherlands, found that the hint of aroma wafting out of a hidden bucket of citrus-scented cleaner was enough to persuade students in a hostel to clean up after themselves."
          },
          "synonyms": [
            "“A faint smell” 同义替换为原文的 “the hint of aroma wafting out of a hidden bucket of citrus-scented cleaner”（藏起来的桶里飘出的淡淡香气）",
            "“motivate people to do household chores” 同义替换为原文的 “persuade students in a hostel to clean up after themselves”（说服旅馆学生自己动手打扫）",
            "“was enough to” 对应题干的 could，表示气味强度虽小但已足够生效"
          ],
          "locatingTip": "定位：先在文中扫读 A–F 六个人名。E 段的人物 Hendrik Schifferstein and colleagues 与 Rob Holland 都做实验，容易混淆，题干说的是“做家务（chores）”，只有 E 段末句出现打扫行为（clean up after themselves），而 Schifferstein 的实验结果是跳舞与评价（danced more, rated their night as more enjoyable）。确定答案技巧：抓住 faint 与 enough 这组对应——原文用 the hint of aroma（一丝香气）、hidden bucket（桶还是藏起来的）强调气味之微弱，用 was enough to persuade 强调效果之强；人物 Rob Holland 即选项 E。",
          "analysis": "E 段（第 5 段）末句：“Meanwhile, Rob Holland, of the University of Utrecht in the Netherlands, found that the hint of aroma wafting out of a hidden bucket of citrus-scented cleaner was enough to persuade students in a hostel to clean up after themselves.”（与此同时，荷兰乌得勒支大学的 Rob Holland 发现，藏在桶里的柑橘味清洁剂散发出的那一丝香气，就足以促使旅馆里的学生自己把环境打扫干净）。题干 A faint smell 对应 the hint of aroma wafting out of a hidden bucket，motivate people to do household chores 对应 persuade students in a hostel to clean up after themselves。人物为 Rob Holland，对应名单中的选项 E。名单中其他人均无此项内容，故答案为 E。",
          "traps": [
            "为什么不是 D（Hendrik Schifferstein and colleagues）：他们做的是夜店加香实验，pumped the smell of orange, seawater or peppermint into a nightclub，结果是客人跳得更多、觉得夜晚更愉快，属于休闲娱乐体验，与做家务无关。",
            "为什么不是 A（Lilianne Mujica-Parodi）：她说的是人们普遍存在偏见（There has been a lot of prejudice that people are not that influenced by olfactory stimuli），是对研究现状的评论，不是任何实验结论。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "Humans are better equipped to interpret smell than other species are",
          "translation": "与其他物种相比，人类在解读气味方面的“装备”更好。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "And although we may have fewer types of receptor than other mammals, Charles Greer at Yale University in the United States has shown that the human nose and brain are unusually well connected, with each group of receptors linking to many more neural regions than is the case in other animals."
          },
          "synonyms": [
            "“better equipped to interpret smell” 同义替换为原文的 “the human nose and brain are unusually well connected, with each group of receptors linking to many more neural regions”",
            "“than other species are” 同义替换为原文的 “than is the case in other animals” 与 “than other mammals”",
            "“interpret” 同义替换为原文的 “process incoming scents”（处理传入的气味信息），见本段上一句"
          ],
          "locatingTip": "定位：题干含比较结构 than other species，说明原文句子里一定有 than 引导的跨物种对比；扫读后只有 C 段 Charles Greer 的研究句出现 “linking to many more neural regions than is the case in other animals”，且人名 Charles Greer 属于名单选项 C。确定答案技巧：题干说“装备更好”，不要被“我们受体种类更少（fewer types of receptor）”误导为劣势——原文用 although 让步，真正的主句是 unusually well connected（连接异常紧密），且下一句 That should give us a good ability to process incoming scents 正面说明处理气味的能力强，与 better equipped 一致。",
          "analysis": "C 段（第 3 段）在推翻 Broca 旧说之后写道：“And although we may have fewer types of receptor than other mammals, Charles Greer at Yale University in the United States has shown that the human nose and brain are unusually well connected, with each group of receptors linking to many more neural regions than is the case in other animals. That should give us a good ability to process incoming scents.”（虽然我们的受体种类比其他哺乳动物少，但美国耶鲁大学的 Charles Greer 已经证明，人的鼻子与大脑连接异常紧密，每一组受体连接的神经区域都比其他动物多得多。这应当使我们具备良好的处理传入气味的能力）。题干的 Humans are better equipped to interpret smell than other species are 正是 unusually well connected 加 many more neural regions 加 good ability to process incoming scents 的概括，人物为 Charles Greer，对应选项 C。做本题时注意 although 从句只是让步，不能用来支持“人类不如其他物种”的错觉。",
          "traps": [
            "为什么不是 B（Pierre Paul Broca）：Broca 的观点恰恰相反——他把人类归入 microsmatic，认为我们嗅觉器官小、只在小程度上依赖嗅觉，与“装备更好”直接冲突。",
            "为什么不是 F（William Overman and colleagues）：他们研究的是气味对决策的负面影响，根本不涉及跨物种的能力比较。",
            "为什么不是 A（Lilianne Mujica-Parodi）：她谈的是学界与社会对嗅觉影响的偏见，而非人和其他动物在嗅觉解读能力上的比较。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "Smell is associated with feelings, rather than the logical part of the brain",
          "translation": "气味与情绪有关，而不是与大脑的逻辑部分有关。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "The researchers conclude the scent stimulated brain areas connected with emotion, making their decisions emotional rather than rational."
          },
          "synonyms": [
            "“feelings” 同义替换为原文的 “emotion” 与 “emotional”",
            "“the logical part of the brain” 同义替换为原文的 “rational”，原文用 emotional rather than rational 构成同一组对比",
            "“Smell is associated with” 同义替换为原文的 “the scent stimulated brain areas connected with emotion”，即气味作用于与情绪相连的脑区"
          ],
          "locatingTip": "定位：题干的关键是“情绪（feelings）与逻辑（logical）”这组对比，回原文找同时出现情绪词与理性词的句子：F 段结论句 emotional rather than rational 正是唯一一处，人物为 William Overman and colleagues（该段研究由他们完成），对应选项 F。确定答案技巧：注意 D 段也出现情绪相关表述（the brain's olfactory centres are intimately linked to its limbic system, which is involved in emotion, fear and memory），但那是作者紧接调香师 George Dodd 引语之后的自述（Dodd 本人的话只涉及分辨气味的能力），且 George Dodd 不在人名列表中，同时那句只说嗅觉中枢与边缘系统相连，没有“而非逻辑/理性”的对比，因此不能选。",
          "analysis": "F 段（第 6 段）的实验以决策任务为主，末句给出结论：“The researchers conclude the scent stimulated brain areas connected with emotion, making their decisions emotional rather than rational.”（研究者认为，气味刺激了与情绪相连的脑区，使他们的决定变得情绪化而非理性）。题干 Smell is associated with feelings, rather than the logical part of the brain 与这句话逐项对应：feelings 对应 emotion / emotional，the logical part of the brain 对应 rational，associated with 对应 stimulated brain areas connected with emotion。该研究由 William Overman and colleagues 完成（F 段第 2 句 A study by William Overman and colleagues at the University of North Carolina in the United States found that …），所以选 F。D 段虽也讲情绪，但那只是作者在 George Dodd 引语之后的自述（并非 Dodd 本人的话），且未涉及“理性”这一对立面，属于常见干扰。",
          "traps": [
            "为什么不是 D（Hendrik Schifferstein and colleagues）：他们的实验里客人 rated their night as more enjoyable，说的是主观愉悦度的提高，属于体验评价，并未出现“情绪对理性”这一组对立概念。",
            "为什么不是 E（Rob Holland）：他发现气味能促使学生打扫，讨论的是行为被触发，与大脑的情绪/逻辑分工无关。",
            "为什么不是 C（Charles Greer）：他谈的是鼻脑连接与气味处理能力，属于生理机制层面，不涉及情绪与理性的对立。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Humans do not require a sophisticated ability to smell",
          "translation": "人类并不需要多么发达的嗅觉能力。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "One of the first people to assert the relative unimportance of human smelling was Pierre Paul Broca, an influential 19th-century anatomist."
          },
          "synonyms": [
            "“Humans do not require a sophisticated ability to smell” 同义替换为原文的 “the relative unimportance of human smelling”（人类嗅觉相对不重要）",
            "“do not require” 与原文 “only rely on to a small extent”（只在小程度上依赖）方向一致，见本段 “we have small olfactory organs that we only rely on to a small extent”",
            "“a sophisticated ability” 与原文的 “microsmatic”（嗅觉器官小、能力弱）形成反向对应：题干用否定表达，原文用术语表达同一判断"
          ],
          "locatingTip": "定位：题干是“不需要发达嗅觉能力”这一判断，人名题先锁定提出该判断的人。B 段首句就点名 Pierre Paul Broca，说他是最早主张人类嗅觉相对不重要的人（assert the relative unimportance of human smelling），与题干意思一致，人物对应选项 B。确定答案技巧：判断题干与主张方向，注意题干用否定（do not require），容易与 C 段 Charles Greer 的“人类能力很强”混淆；判断依据是“谁提出了人类嗅觉不重要/不发达的看法”——Broca 提出 macrosmatic 与 microsmatic 的二分，并把人类列入 microsmatic，答案即 B。",
          "analysis": "B 段（第 2 段）开头：“One of the first people to assert the relative unimportance of human smelling was Pierre Paul Broca, an influential 19th-century anatomist.”（最早主张人类嗅觉相对不重要的人之一，是 19 世纪颇具影响力的解剖学家 Pierre Paul Broca）。随后他提出哺乳动物分为 macrosmatic 与 microsmatic 两类，“while we, along with other primates and the marine mammals, are microsmatic – we have small olfactory organs that we only rely on to a small extent”（而我们与灵长类、海洋哺乳动物同属嗅觉退化型，我们的嗅觉器官小，只在小程度上依赖它）。题干 Humans do not require a sophisticated ability to smell 说的正是这一判断：人类嗅觉器官小、依赖程度低，无需高度发达的嗅觉能力。人物为 Pierre Paul Broca，对应选项 B。",
          "traps": [
            "为什么不是 C（Charles Greer）：Greer 的结论是人类鼻子与大脑连接异常紧密、能很好地处理气味，恰好在反驳“人类不需要发达嗅觉”的说法，方向相反。",
            "为什么不是 F（William Overman and colleagues）：他们研究的主题是气味对决策的负面影响，不涉及人类是否需要发达嗅觉。",
            "为什么不是 A（Lilianne Mujica-Parodi）：她说的是人们普遍低估嗅觉影响这一偏见，属于对研究现状的评论，不是对人类嗅觉能力的判断。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–26 句子填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 26
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "The ________ is a part of the brain that deals with feelings and smell.",
          "translation": "________ 是大脑中处理情绪和嗅觉的一个部分。",
          "answer": "amygdala",
          "wordClass": "名词（解剖学术语，单数；空格前有定冠词 The，在句中作主语，需与单数谓语 is 保持一致）",
          "locating": {
            "paragraph": "7",
            "quote": "there are certain brain areas dedicated to both emotion and olfaction, such as the amygdala, and there is a strong link between emotion and memory"
          },
          "synonyms": [
            "“a part of the brain” 同义替换为原文的 “certain brain areas”（某些脑区）",
            "“deals with feelings” 同义替换为原文的 “dedicated to … emotion”，即 feelings 与 emotion 同义",
            "“deals with … smell” 同义替换为原文的 “dedicated to … olfaction”，即 smell 与 olfaction（嗅觉）同义，且两者由 both … and 并列"
          ],
          "locatingTip": "定位：题干要求一个“同时处理情绪与嗅觉的脑区”。只需扫读文中 emotion 与 olfaction / smell 并列出现的位置，全文只有 G 段出现 “certain brain areas dedicated to both emotion and olfaction, such as the amygdala”。确定答案技巧：such as 后面紧接着的 the amygdala 就是该脑区的具体名称，即答案；填写时按 ONE WORD ONLY 只写 amygdala 一个词，不要把冠词 the 抄进去，也不要填 such as。",
          "analysis": "G 段（第 7 段）写道：“This isn't surprising when you consider that there are certain brain areas dedicated to both emotion and olfaction, such as the amygdala, and there is a strong link between emotion and memory.”（考虑到有些脑区同时负责情绪和嗅觉，例如杏仁核，而情绪与记忆之间又有很强的联系，这一点就不足为奇了）。题干 The [24] is a part of the brain that deals with feelings and smell 与定位句严格对应：a part of the brain 对应 certain brain areas，deals with feelings 对应 dedicated to … emotion，deals with smell 对应 dedicated to … olfaction；而 such as 引出的 the amygdala 正是作者举例说明的那一脑区，所以答案是 amygdala。词性上，amygdala 在此为可数名词单数（其复数形式为 amygdalae），题干用定冠词 The 加单数谓语 is，恰好与之一致；按题目要求只填一个词，写 amygdala 即可（首字母小写与原文 “such as the amygdala” 中的形式一致）。",
          "traps": [
            "为什么不是 limbic system：D 段说 “the brain's olfactory centres are intimately linked to its limbic system, which is involved in emotion, fear and memory”，但 limbic system 是两个词，不符合 ONE WORD ONLY 的限制；而且它本身是与嗅觉中枢相连、涉及情绪、恐惧和记忆的系统，并非题干所指“处理情绪与嗅觉的脑区”。",
            "为什么不是 brain：brain 是上位概念，填进题干会变成 “The brain is a part of the brain”，语义重复且逻辑不通。",
            "为什么不是 olfaction：它表示“嗅觉”这一功能，不是脑区名称，与题干要求的“大脑的一个部分”不符。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "________ smells create especially powerful associations with memories.",
          "translation": "________ 的气味能与记忆形成格外强烈的关联。",
          "answer": "unpleasant",
          "wordClass": "形容词（作定语修饰名词 smells，说明气味的性质；位于句首，首字母在陈述句中不必大写）",
          "locating": {
            "paragraph": "7",
            "quote": "In 2009, Yeshurun found that the link between a memory and a smell is stronger if the smell is unpleasant rather than pleasant."
          },
          "synonyms": [
            "“create especially powerful associations with memories” 同义替换为原文的 “the link between a memory and a smell is stronger”，associations 对应 link，especially powerful 对应 stronger",
            "“smells” 与原文的 “the smell is …” 复现同一名词",
            "“unpleasant” 在原文中直接复现：“if the smell is unpleasant rather than pleasant”"
          ],
          "locatingTip": "定位：题干的核心是“气味与记忆的关联特别强”，回原文找 memory 与 smell 的 link 被描述为 stronger 的句子，即 G 段 “In 2009, Yeshurun found that the link between a memory and a smell is stronger if the smell is unpleasant rather than pleasant”。确定答案技巧：条件句用 if … rather than … 给出两种气味的对比，题干问的是“哪一类气味关联特别强”，答案是被判定为 stronger 的那一端，即 unpleasant；务必注意 rather than 后面被排除的是 pleasant，不要填反。此法还可用本段首句对照：气味记忆的特殊性在于更情绪化，而情绪强度与气味的愉悦度有关。",
          "analysis": "G 段（第 7 段）中：“In 2009, Yeshurun found that the link between a memory and a smell is stronger if the smell is unpleasant rather than pleasant.”（2009 年，Yeshurun 发现，如果气味是令人不快的而不是令人愉快的，记忆与气味之间的联系会更强）。题干 [25] smells create especially powerful associations with memories 把原文的名词结构 the link between a memory and a smell is stronger 改写为动词结构 create especially powerful associations with memories，把条件句 if the smell is unpleasant 提升为定语，空格处所要填的正是“哪类气味”，即 unpleasant（令人不快的）。词性上，空格位于名词 smells 之前，需要一个形容词作定语，unpleasant 由否定前缀 un- 加 pleasant 构成，与原文中作为对比项的 pleasant 形成一对；由于题干把限定成分移到句首，书写时不必大写首字母。注意不要因为原文同一段还有 more emotional 而误填 emotional，那是描述记忆特征而非气味类型的词。",
          "traps": [
            "为什么不是 pleasant：原文用 rather than 明确把 pleasant 排除在“关联更强”之外——令人愉快的气味带来的联系弱于令人不快的气味，填 pleasant 会与原文结论相反。",
            "为什么不是 emotional：G 段确实说气味记忆 “is more emotional”，但那是与记忆的准确性、细节多少作对比，并非修饰 smells 的性质，也不能表示“哪一类气味”，与题干结构不符。",
            "为什么不是 detailed：本段明确纠正“气味引发的记忆更详细”这一说法（The memory is not more accurate and you don't remember more details），填 detailed 属于原文否认的内容。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "Of all the senses, smell has the capacity to prompt memories of ________.",
          "translation": "在所有感官中，只有嗅觉能够唤起关于 ________ 的记忆。",
          "answer": "childhood",
          "wordClass": "名词（表示人生阶段，不可数，作介词 of 的宾语）",
          "locating": {
            "paragraph": "7",
            "quote": "Since those first encounters with a smell would have happened at a young age, this explains why smells often transport us back to our childhood."
          },
          "synonyms": [
            "“Of all the senses” 同义替换为原文的 “That doesn't happen with any other sense”（其他任何感官都做不到），即嗅觉的独有性",
            "“has the capacity to prompt memories of” 同义替换为原文的 “this explains why smells often transport us back to”，transport us back 即唤起往事的记忆",
            "“at a young age” 与 “our childhood” 互为同义提示，都指向人生的童年阶段"
          ],
          "locatingTip": "定位：题干先说“所有感官中唯此一家”，原文的对应表达是 “That doesn't happen with any other sense”，紧接着一句给出被唤起的记忆内容 “this explains why smells often transport us back to our childhood”，答案即 childhood。确定答案技巧：空格位于介词 of 之后，需要名词；前半句的 Since those first encounters with a smell would have happened at a young age 已在暗示“年幼时”，at a young age 与 childhood 同指一个阶段，两条线索相互印证。注意不要填 child（指“孩子”，是人的身份，不表示时间段）或 age（原文的 age 只出现在时间状语 at a young age 中）。",
          "analysis": "G 段（第 7 段）末句：“Since those first encounters with a smell would have happened at a young age, this explains why smells often transport us back to our childhood.”（由于与某种气味的最初接触往往发生在年幼之时，这也就解释了我们为什么常被气味带回童年）。题干 Of all the senses, smell has the capacity to prompt memories of [26] 对应两句原文：Of all the senses 对应上一句 “That doesn't happen with any other sense”（这不会发生在其他任何一种感官上），has the capacity to prompt memories of 对应 transport us back to，而被唤起的记忆内容就是 our childhood，故填 childhood。词性上 childhood 为不可数名词，作介词 of 的宾语，形式上不加冠词、不加复数；注意题干已经用 memories of，因此只需填时期名称，不要填 child 或 memories。",
          "traps": [
            "为什么不是 age：原文出现了 at a young age，但那只是表示“在年幼时”的时间状语，题干问的是“关于什么的记忆”，对应的名词短语是 our childhood（我们的童年）。",
            "为什么不是 memory：题干中已有 memories of，重复填入 memory 会造成 “memories of memory” 的语义循环，且原文强调的是“唯一能唤起童年记忆的感官”，落点在童年。",
            "为什么不是 smell：题干的讨论对象本身就是嗅觉，填 smell 会让句子变成“嗅觉唤起关于气味的记忆”，与原文所指的童年记忆不符。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
