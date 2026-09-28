(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-1133", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-1133",
  "meta": {
    "examId": "p3-high-1133",
    "title": "Cosmic Black Holes 宇宙黑洞",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 28–34 句子结尾匹配（从 A–N 中选出正确结尾）",
      "mode": "per_question",
      "questionRange": {
        "start": 28,
        "end": 34
      },
      "items": [
        {
          "questionId": "q28",
          "questionNumber": 28,
          "stem": "Newton’s law of gravitation ________",
          "translation": "牛顿的万有引力定律 ________。（正确结尾 I：无法解释水星绕太阳运行的轨道。）",
          "answer": "I",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "In essence, Newton’s law of gravitation stated that the gravitational force between two objects, for example, two astronomical bodies, is directly proportional to their masses. Astronomers found that it accurately predicted all the observable data that science at that time was able to collect, with one exception—a very slight variation in the orbit of the planet Mercury around the sun."
          },
          "synonyms": [
            "「Newton’s law of gravitation」在原文中原词复现：「Newton’s law of gravitation stated that …」",
            "「could not explain」同义替换为原文的「with one exception」（唯一的例外），即该定律在这一点上失效、解释不了",
            "「Mercury’s path around the sun」同义替换为原文的「the orbit of the planet Mercury around the sun」，path 对应 orbit"
          ],
          "locatingTip": "定位：句子主语 Newton’s law of gravitation 是专有名词加抽象名词的组合，全文只在第 1 段出现，扫读时看到 Newton 与 Mercury 就停下精读。确定答案技巧：匹配结尾题的关键是把句子主干补全成一句完整的话后再回原文核对。原句主干是“牛顿定律 ________”，原文第 1 段先肯定它“准确预测了当时科学所能收集到的全部可观测数据”，紧接着用 with one exception 给出唯一例外——水星绕日轨道有极微小偏差。这个“例外”正好就是选项 I 的 could not explain Mercury’s path around the sun，主语与结尾在语法与语义上都严丝合缝，故选 I。",
          "analysis": "第 1 段共三句：第一句介绍牛顿 1687 年的巨著《自然哲学的数学原理》，含万有引力理论；第二句给出定律内容“两物体间的引力与其质量成正比”；第三句是本题的落点——「Astronomers found that it accurately predicted all the observable data that science at that time was able to collect, with one exception—a very slight variation in the orbit of the planet Mercury around the sun.」（天文学家发现它能准确预测当时科学所能收集到的一切可观测数据，只有一个例外——水星绕日轨道存在极微小的偏差）。这里的 it 指牛顿的引力定律，one exception 就是唯一的失效之处，破折号后的 a very slight variation in the orbit of the planet Mercury around the sun 正是选项 I 中 Mercury’s path around the sun 的原文出处。把选项 I 填回句子读一遍：“Newton’s law of gravitation could not explain Mercury’s path around the sun.”（牛顿的万有引力定律无法解释水星绕太阳的轨道），与原文 one exception 完全吻合。注意原文说的是“极微小的偏差（a very slight variation）”，程度很轻，但性质确实是“解释不了”，所以仍然是本题答案。",
          "traps": [
            "为什么不选 G（did not apply to most astronomical bodies）：原文说该定律“准确预测了当时所能收集到的一切可观测数据”，只承认一个例外，说明它对绝大多数天体都适用，选项 G 恰与原文相反。",
            "为什么不选 J（caused doubt about the existence of black holes）：怀疑黑洞存在的是爱因斯坦本人，而且出现在第 3 段谈相对论的位置，与牛顿定律无关，属于跨段张冠李戴的干扰项。",
            "为什么不选 B（suggested the presence of black holes in outer space）：预言黑洞存在的是爱因斯坦的相对论（第 3 段），不是牛顿的引力定律，选项 B 应留给第 29 题。"
          ]
        },
        {
          "questionId": "q29",
          "questionNumber": 29,
          "stem": "Einstein’s theory of relativity ________",
          "translation": "爱因斯坦的相对论 ________。（正确结尾 B：预示了外太空存在黑洞。）",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Among other phenomena, Einstein’s theory predicted the existence of black holes, although initially he had doubts about their existence."
          },
          "synonyms": [
            "「suggested the presence of」同义替换为原文的「predicted the existence of」，suggest 对应 predict，presence 对应 existence",
            "「black holes in outer space」对应原文的「black holes」，outer space 是原文 areas in space 的概括说法",
            "「Einstein’s theory of relativity」对应原文第 2 段的「Albert Einstein’s general theory of relativity」以及本句开头回指的「Einstein’s theory」"
          ],
          "locatingTip": "定位：专有名词 Einstein 与 theory of relativity 是极佳的路标，第 2 段出现了完整说法 Albert Einstein’s general theory of relativity，第 3 段开头用 Einstein’s theory 回指并给出它预言的内容，两段相接处精读即可。确定答案技巧：先看句子的语法需求——主语是“理论”，空格处需要一个由动词词组构成的谓语部分。原文说该理论“预言了黑洞的存在（predicted the existence of black holes）”，恰好与选项 B 的 suggested the presence of black holes in outer space 构成同义改写，故选 B。注意 although 从句里的“爱因斯坦本人一开始怀疑黑洞存在”是干扰信息，主语是“理论”而不是“爱因斯坦本人”，不要被引到选项 J。",
          "analysis": "第 2 段介绍爱因斯坦 1915 年的广义相对论：它修正了牛顿定律，精确算出水星轨道的形状，并首次验证了理论；其核心是“物质与能量会扭曲时空，造成时空弯曲，我们所谓的引力其实是这种弯曲的效应”。第 3 段开篇接着说：「Among other phenomena, Einstein’s theory predicted the existence of black holes, although initially he had doubts about their existence.」（在诸多现象之中，爱因斯坦的理论预言了黑洞的存在，尽管他本人起初曾怀疑黑洞是否真的存在）。前半句给出了“理论预言黑洞存在”这一结论，正是选项 B 的依据；后半句虽然提到 doubts，但主语是爱因斯坦本人的态度，与选项 J（caused doubt about the existence of black holes）完全不同——选项 J 是把“怀疑”归到理论或发现身上，属于偷换主体，不能选。因此答案是 B。",
          "traps": [
            "为什么不选 C（when a single star collapses）：那描述的是某一类黑洞的成因，原文在第 5 段讲紧凑型黑洞（compact ones）时出现，不适用于“理论”作主语的句子。",
            "为什么不选 J（caused doubt about the existence of black holes）：原文的怀疑来自爱因斯坦个人（although initially he had doubts），不是理论造成了怀疑；主语错位，属典型的主语张冠李戴干扰项。",
            "为什么不选 I（could not explain Mercury’s path around the sun）：恰恰相反，相对论“精确预测”了水星轨道，是它能解释水星问题、牛顿定律不能，选项 I 应留给第 28 题。"
          ]
        },
        {
          "questionId": "q30",
          "questionNumber": 30,
          "stem": "We define black holes as areas that have ________",
          "translation": "我们把黑洞定义为具有 ________ 的区域。（正确结尾 F：一种无法逃脱的引力。）",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Black holes are areas in space where the gravitational field is so strong that nothing can escape them."
          },
          "synonyms": [
            "「areas」在原文中原词复现：「Black holes are areas in space where …」",
            "「have an inescapable gravitational pull」同义替换为原文的「the gravitational field is so strong that nothing can escape them」，inescapable 对应「nothing can escape them」",
            "「We define … as …」对应原文的判断句式「Black holes are areas in space where …」，都是下定义的表达"
          ],
          "locatingTip": "定位：题干的核心名词是 black holes 与 areas，回原文找直接给黑洞下定义的句子，第 3 段第二句正是「Black holes are areas in space where the gravitational field is so strong that nothing can escape them.」确定答案技巧：题干用“areas that have ______”把定义压缩成一个“拥有某属性”的结构，而原文用 so strong that nothing can escape them 来描述引力场强到无法逃脱。把选项 F 填回：“areas that have an inescapable gravitational pull”，与原文“引力强到什么也逃不掉”完全等价，故选 F。注意语法搭配：have 后需接名词性成分，an inescapable gravitational pull 正好是名词短语，而像 C（when a single star collapses）这类状语从句形式的结尾无法直接跟在 have 之后。",
          "analysis": "第 3 段第二句是全文对黑洞的正式定义：「Black holes are areas in space where the gravitational field is so strong that nothing can escape them.」（黑洞是空间中的一些区域，那里的引力场强到任何东西都无法逃脱）。随后两句补充这一引力场带来的结果：它会吞掉靠近的一切光线，因此是“黑”的；既不发光也不反光，所以看不见。题干把定义句改写成“We define black holes as areas that have ______”，用 have 引出属性，选项 F 的 an inescapable gravitational pull（无法逃脱的引力）就是「the gravitational field is so strong that nothing can escape them」的压缩同义改写，其中 inescapable 精准对应 nothing can escape。填入后句子为“areas that have an inescapable gravitational pull”，语法通顺、语义与原文一致，因此答案是 F。",
          "traps": [
            "为什么不选 E（barely visible light）：原文说黑洞既不发光也不反光、完全看不见，而且 light 是被黑洞吞掉的对象，不能被黑洞“拥有”。",
            "为什么不选 M（with large event horizons）：事件视界在第 4 段才出现，且原文明确说它 relatively small size（相对很小），与 large 相反，同时 with 短语也无法直接跟在 have 之后。",
            "为什么不选 N（at the center of each black hole）：原文的位置关系是事件视界围着黑洞（第 4 段 Surrounding each black hole），而不是黑洞拥有一个位于其中心的部件，介词短语也不能作 have 的宾语。"
          ]
        },
        {
          "questionId": "q31",
          "questionNumber": 31,
          "stem": "Scientists study black holes ________",
          "translation": "科学家研究黑洞 ________。（正确结尾 A：通过观测它们周围物质的方式。）",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Due to this, they can be studied only by inference based on observations of their effect on the matter—both stars and gases—around them and by computer simulation."
          },
          "synonyms": [
            "「Scientists study black holes」同义替换为原文的被动式「they can be studied」，study 对应 studied",
            "「by observing the matter around them」同义替换为原文的「based on observations of their effect on the matter—both stars and gases—around them」，observing 对应 observations",
            "「the matter around them」与原文的「the matter—both stars and gases—around them」一一对应"
          ],
          "locatingTip": "定位：题干关键词 study 与 black holes，回原文找讲“如何研究黑洞”的句子，即第 3 段第四句，句首 Due to this 承接“黑洞看不见”这一前提。确定答案技巧：题干问研究方式，空格后需要一个 by 引导的方式状语。原文用的是 by inference based on observations of their effect on the matter around them（依据对周围物质所受影响的观测进行推断），选项 A 把它压缩为 by observing the matter around them，介词 by 与 observing 都一致，故选 A。要特别小心选项 H（by direct observation）：原文用 only by inference 明确排除直接观测，且前面刚说黑洞 invisible，因此 H 是典型的反义干扰。",
          "analysis": "第 3 段先说明黑洞因为吞掉光线、不发光也不反光，所以是看不见的（invisible），紧接着给出因此只能采取的研究手段：「Due to this, they can be studied only by inference based on observations of their effect on the matter—both stars and gases—around them and by computer simulation.」（正因如此，对它们的研究只能依据对周围物质——恒星和气体——所受影响的观测来进行推断，并结合计算机模拟）。题干把被动句改写成主动句“Scientists study black holes ______”，方式状语的位置留给选项。原文提供两条途径：①依据对周围物质的观测进行推断；②计算机模拟。选项 A（by observing the matter around them）正是第一条途径的概括，其中 them 指代黑洞，the matter around them 就是原文的 the matter—both stars and gases—around them。选项 H（by direct observation）与原文 only by inference 直接冲突，必须排除。故答案为 A。",
          "traps": [
            "为什么不选 H（by direct observation）：原文用的是 only by inference（只能靠推断），并强调黑洞 invisible，直接观测恰恰是被否定的方式，属反义干扰项。",
            "为什么不选其他方式类结尾：原文另提的 by computer simulation 是第二条途径，但选项池中没有与 simulation 对应的结尾，且题干“Scientists study black holes”后若接模拟类结尾也无法与原文的两条并列途径对应。",
            "为什么不选 D（difficult to study）：虽然原文确有“难以观测”的意思，但那说的是事件视界（第 4 段），且题干需要的是“用什么方式研究”，选项 D 也无法与 study 搭配成句。"
          ]
        },
        {
          "questionId": "q32",
          "questionNumber": 32,
          "stem": "Gases that are pulled into a black hole ________",
          "translation": "被吸入黑洞的气体 ________。（正确结尾 L：变得非常热。）",
          "answer": "L",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In particular, when gases are being pulled into a black hole, they can reach temperatures up to 1,000 times the heat of the sun and become an intensely glowing source of X-rays."
          },
          "synonyms": [
            "「Gases that are pulled into a black hole」在原文中原句复现：「when gases are being pulled into a black hole」",
            "「become very hot」同义替换为原文的「can reach temperatures up to 1,000 times the heat of the sun」，very hot 对应温度高达太阳热度的 1000 倍",
            "「become」对应原文的「become an intensely glowing source of X-rays」，提示主语在过程结束后转变的状态"
          ],
          "locatingTip": "定位：题干里的 gases 与 pulled into a black hole 是第 3 段末尾句的原词，句首 In particular 表明这是对黑洞吞光特性的具体举例，扫到 gases are being pulled 即可停止。确定答案技巧：题干需要的是“气体会怎么样”，即一个描述状态的谓语部分。原文给出两个结果：温度可高达太阳热量的 1000 倍、并成为强烈的 X 射线源。选项 L（become very hot）正是“温度极高”的概括；选项 E（barely visible light）与 K（lose visibility）都不符合“气体被吸入后温度飙升并发光”这一描述，因此选 L。",
          "analysis": "第 3 段末句是本题的唯一定位句：「In particular, when gases are being pulled into a black hole, they can reach temperatures up to 1,000 times the heat of the sun and become an intensely glowing source of X-rays.」（尤其是当气体被吸入黑洞时，它们的温度可达到太阳热度的 1000 倍，并成为极其明亮的 X 射线源）。题干把原文的时间状语从句“when gases are being pulled into a black hole”改写成定语从句“Gases that are pulled into a black hole”，主语与条件完全对应；原文给出的结果上升为谓语部分：温度高达太阳的 1000 倍，即“非常热”，与选项 L 对应。另外注意原文 and become an intensely glowing source of X-rays 说明气体并非“失去可见度”，反而是变得极亮——只不过发出的是 X 射线，这一点常被用来设置选项 K 的陷阱。故答案确定为 L。",
          "traps": [
            "为什么不选 E（barely visible light）：原文说气体被吸入后成为强烈的 X 射线源（intensely glowing），是变亮、变热，与“微弱可见的光”相反。",
            "为什么不选 K（lose visibility）：失去可见性的是黑洞本身（第 3 段说黑洞 invisible），不是被吸入的气体；气体的表现是温度剧增并辐射出 X 射线。",
            "为什么不选 M（with large event horizons）：事件视界的大小属于第 4 段的内容，与“气体被吸入后怎样”无关，且 with 短语不能让原句成立。"
          ]
        },
        {
          "questionId": "q33",
          "questionNumber": 33,
          "stem": "Event horizons are ________",
          "translation": "事件视界 ________。（正确结尾 D：难以研究。）",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Because observations of event horizons are difficult due to their relatively small size, even less is known about them than about black holes themselves."
          },
          "synonyms": [
            "「Event horizons are」与原文的「observations of event horizons are difficult」主语与系动词结构对应，题干省略 observation 一词、直接把结论归于视界",
            "「difficult to study」同义替换为原文的「observations … are difficult」，difficult 原词复现",
            "「difficult to study」与原文的「even less is known about them」同义呼应：了解得更少，也就意味着更难研究"
          ],
          "locatingTip": "定位：专有名词 event horizon 集中出现在第 4 段（该段三句都围绕它展开；第 7 段讲黑洞成长时虽也顺带提到 the black hole’s event horizon，但不是本题依据），一步定位到第 4 段即可。确定答案技巧：题干需要形容词性成分作表语，描述事件视界是何性质。原文第 4 段第三句明说“由于体积相对很小，对事件视界的观测十分困难（observations of event horizons are difficult）”，并且“人们对它们的了解甚至比对黑洞本身更少”。困难与了解少都指向“难以研究”，故选 D。警惕选项 M 的 large event horizons——原文强调的恰恰是 relatively small size，形容词正好相反。",
          "analysis": "第 4 段三句：①「Surrounding each black hole is an “event horizon,” which defines the area over which the gravitational force of the black hole operates.」（环绕每个黑洞的是一个“事件视界”，它划定了黑洞引力起作用的范围）；②「Anything passing over the lip of the event horizon is pulled into the black hole.」（任何越过事件视界边缘的东西都会被吸进黑洞）；③「Because observations of event horizons are difficult due to their relatively small size, even less is known about them than about black holes themselves.」（由于体积相对较小，对事件视界的观测是困难的，所以人们对它们的了解甚至比对黑洞还要少）。本题的落点是第三句：difficult 一词直接给出答案性质，even less is known 又进一步印证“难以研究”。题干“Event horizons are ______”只需一个形容词性结尾，选项 D（difficult to study）与之对应，故答案为 D。",
          "traps": [
            "为什么不选 M（with large event horizons）：原文明确指出事件视界 relatively small size（体积相对很小），选项 M 的 large 与原文矛盾，是典型的反义干扰项。",
            "为什么不选 N（at the center of each black hole）：原文说事件视界是 surround（环绕）黑洞的，而不是位于黑洞中心；位置关系完全颠倒。",
            "为什么不选 F（an inescapable gravitational pull）：那是黑洞本身具有的属性（第 3 段的定义句），用于回答第 30 题，事件视界只是划定引力作用范围的边界。"
          ]
        },
        {
          "questionId": "q34",
          "questionNumber": 34,
          "stem": "Compact black holes occur ________",
          "translation": "紧凑型黑洞发生于 ________。（正确结尾 C：当单颗恒星坍缩时。）",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Compact ones, called star-mass black holes and which have been known to exist for some time, are believed to be the result of the death of a single star. When a star has consumed itself to the point that it no longer has the energy to support its mass, the core collapses and forms a black hole."
          },
          "synonyms": [
            "「Compact black holes」同义替换为原文的「Compact ones, called star-mass black holes」，黑体词 compact 原词复现",
            "「occur」同义替换为原文的「are believed to be the result of」与「forms a black hole」，都是“产生、形成”的意思",
            "「when a single star collapses」同义替换为原文的「the result of the death of a single star」和「the core collapses and forms a black hole」"
          ],
          "locatingTip": "定位：题干形容词 compact 是独特词，第 5 段第 2 句即「Compact ones, called star-mass black holes …」，看到 Compact 就可停在该段精读。确定答案技巧：题干以 occur 结尾，需要一个由 when 引导的时间状语从句来补足，这类结尾在选项中只有 C（when a single star collapses）。回原文核对：紧凑型黑洞“被认为源于单颗恒星死亡（the result of the death of a single star）”，随后的句子把过程展开为“恒星耗尽自身、核心坍缩形成黑洞”，与选项 C 完全对应，故选 C。",
          "analysis": "第 5 段按体积把黑洞分为三类：紧凑型（compact ones，即星质量黑洞）、超大质量黑洞（supermassive black holes）以及新发现的中间型黑洞（intermediate black hole）。本题落在介绍紧凑型黑洞的两句上：「Compact ones, called star-mass black holes and which have been known to exist for some time, are believed to be the result of the death of a single star. When a star has consumed itself to the point that it no longer has the energy to support its mass, the core collapses and forms a black hole.」（紧凑型黑洞又称星质量黑洞，人们很早就知道它们存在，被认为源于单颗恒星的死亡。当一颗恒星自我消耗到再也没有能量支撑自身质量时，其核心就会坍缩并形成黑洞）。第一句给出成因是“单颗恒星的死亡”，第二句具体描述坍缩过程（核心坍缩、随后冲击波炸开外壳）。选项 C 的 when a single star collapses 把这两句压缩成一个时间状语从句，语法上与 occur 搭配自然（“紧凑型黑洞在单颗恒星坍缩时产生”），语义上与 the death of a single star、the core collapses 完全一致，故答案为 C。",
          "traps": [
            "为什么不选 M（with large event horizons）：原文没有任何“黑洞要具备大型事件视界”的说法，第 4 段反而说事件视界体积相对很小，选项 M 无原文依据。",
            "为什么不选 N（at the center of each black hole）：位置类选项与“紧凑型黑洞如何产生”无关；原文只在讲黑洞分布时说它们位于大多数星系的中心（第 6 段 lie at the center of most galaxies），这说的是分布而非紧凑型黑洞的产生条件。",
            "为什么不选 E/K 一类状态选项：occur 需要的是发生的时间或条件，而 barely visible light、lose visibility 描述的是光的可见性，无法与 occur 搭成一个完整句子。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 35–36 单项选择（A / B / C / D）",
      "mode": "per_question",
      "questionRange": {
        "start": 35,
        "end": 36
      },
      "items": [
        {
          "questionId": "q35",
          "questionNumber": 35,
          "stem": "Black holes can be found",
          "translation": "黑洞可以 ________ 发现。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Current scientific data suggest that black holes are fairly common and lie at the center of most galaxies."
          },
          "synonyms": [
            "「can be found」同义替换为原文的「are fairly common and lie at the center of」（既相当常见，又位于……），find 与 common/lie 表达的是“存在、能在哪里遇到”",
            "「in most galaxies」同义替换为原文的「at the center of most galaxies」，most galaxies 原词复现"
          ],
          "locatingTip": "定位：题干关键词 black holes 与 be found，回原文找讲黑洞分布范围的句子，即第 6 段首句 Current scientific data suggest that black holes are fairly common and lie at the center of most galaxies。确定答案技巧：选择“分布范围”类选项时，要区分原文的“普遍性”与选项的“绝对限定词”。原文说黑洞“相当常见（fairly common）并位于大多数星系中心”，对应选项 B 的 in most galaxies；务必要警觉 only 这类绝对词，它们几乎总是把原文的“多数/常见”夸大为“唯一”。",
          "analysis": "第 6 段首句：「Current scientific data suggest that black holes are fairly common and lie at the center of most galaxies.」（目前的科学数据表明，黑洞相当常见，并且位于大多数星系的中心）。题干把这句话压缩成“Black holes can be found ______”，需要补出地点范围。原文的关键词是 most galaxies（大多数星系），选项 B（in most galaxies）与之逐字对应，因此是正确答案。紧接着的第二句用 X 射线望远镜的间接证据补充说明“在我们银河系及更远处已定位了数千个黑洞”，进一步支持“分布广泛”这一判断，也说明黑洞并非只存在于某个特定星系。",
          "traps": [
            "为什么不是 A（only in the Milky Way）：银河系只是原文举出的一个例子（第 6 段下半部分讲银河系中心的 Sagittarius A*），原文明说黑洞“在银河系内外（in our galaxy and beyond）”都能被定位，范围远不止银河系，only 更无从谈起。",
            "为什么不是 C（close to the sun）：全文没有把黑洞与太阳的距离作为分布特征；文中与太阳有关的比较都属于质量和温度这类属性（如四百万倍于太阳、气体温度达太阳的 1000 倍），与分布无关。",
            "为什么不是 D（only at the centers of galaxies）：原文确实说黑洞“位于大多数星系的中心（lie at the center of most galaxies）”，但同时说它们 fairly common（相当常见），第 6 段还提到有上万个较小的黑洞绕银河系中心的黑洞运行，恒星质量黑洞也并不都在星系中心，选项 D 的 only 把原文的“多数”绝对化为“唯一位置”，属过度绝对化干扰项。"
          ]
        },
        {
          "questionId": "q36",
          "questionNumber": 36,
          "stem": "Sagittarius A* is",
          "translation": "人马座 A*（Sagittarius A*）是 ________。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "The black hole at the center of the Milky Way, known as Sagittarius A* (pronounced “A-star”), is a supermassive one, containing roughly four million times the mass of our sun. Astronomers suggest that orbiting around Sagittarius A*, 26,000 light years from Earth, may be as many as tens of thousands of smaller black holes."
          },
          "synonyms": [
            "「Sagittarius A*」原文原词复现：「known as Sagittarius A* (pronounced “A-star”)」",
            "「located 26,000 light years from Earth」同义替换为原文的「26,000 light years from Earth」，该距离在原文中修饰的就是 Sagittarius A*",
            "「a black hole」对应原文的「The black hole at the center of the Milky Way, known as Sagittarius A*」"
          ],
          "locatingTip": "定位：专有名词 Sagittarius A*（含星号，极易识别）在全文只出现在第 6 段第三、四句，扫读时看到 Sagittarius 立即停在该段精读。确定答案技巧：本题的关键是分析原文中 26,000 light years from Earth 这个距离短语修饰谁。原句是“Astronomers suggest that orbiting around Sagittarius A*, 26,000 light years from Earth, may be as many as tens of thousands of smaller black holes.”——距离短语紧接 Sagittarius A* 之后，作它的同位补充，说明人马座 A* 距离地球 26000 光年，故选项 A 成立。还要顺便核对其他属性：它是银河系中心的超大质量黑洞、质量约为太阳的四百万倍。",
          "analysis": "第 6 段第三、四句是本题的定位范围。第三句：「The black hole at the center of the Milky Way, known as Sagittarius A* (pronounced “A-star”), is a supermassive one, containing roughly four million times the mass of our sun.」（银河系中心的那个黑洞被称为人马座 A*（读作“A-star”），是一个超大质量黑洞，质量约为太阳的四百万倍）。第四句：「Astronomers suggest that orbiting around Sagittarius A*, 26,000 light years from Earth, may be as many as tens of thousands of smaller black holes.」（天文学家认为，在距地球 26000 光年的人马座 A* 周围，可能环绕着多达数万个小黑洞）。第四句中的距离短语 26,000 light years from Earth 以插入语形式紧跟在 Sagittarius A* 之后，说明的是人马座 A* 距地球的距离，因此选项 A（a black hole located 26,000 light years from Earth）与原文一致。第三句还可用于检验其他选项：它是 supermassive（超大质量）而非 compact，并且位于银河系（Milky Way）而非仙女座星系，故 C、D 均错。",
          "traps": [
            "为什么不是 B（one of thousands of black holes orbiting Earth）：原文说的是有数万个小黑洞绕 Sagittarius A* 运行（orbiting around Sagittarius A*），被环绕的中心是人马座 A*，而不是地球；选项把主客颠倒，且数量表述也与原文不符。",
            "为什么不是 C（a well-known compact black hole）：原文明确说它是 a supermassive one（超大质量黑洞），并在同句给出“约为太阳四百万倍”的质量；compact（即星质量黑洞）是第 5 段所讲的另一类，两者不能混为一谈。",
            "为什么不是 D（a supermassive black hole in the Andromeda Galaxy）：虽然“超大质量”这一修饰与原文一致，但原文说的是它位于 the center of the Milky Way（银河系中心），全文从未出现仙女座星系（Andromeda），选项把所属星系偷换掉了。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 37–40 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 37,
        "end": 40
      },
      "items": [
        {
          "questionId": "q37",
          "questionNumber": 37,
          "stem": "It is not certain when the big bang occurred.",
          "translation": "宇宙大爆炸发生的时间尚不确定。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "It is thought that the first black holes came into existence not long after the big bang."
          },
          "synonyms": [
            "「the big bang」在原文中原词复现：「not long after the big bang」",
            "「when the big bang occurred」在原文中没有对应表达：原文只给出“黑洞出现于大爆炸之后不久”这一先后关系，从未交代大爆炸本身的年代",
            "「It is not certain」在原文中没有对应表达：原文没有出现任何关于大爆炸时间是否确定、是否存疑的说明"
          ],
          "locatingTip": "定位：专有名词 the big bang 只在第 7 段首句出现，一步定位。确定答案技巧：题干由两个信息块组成——大爆炸发生的“时间”以及这一时间“不确定”。原文的 not long after the big bang 只是说明黑洞出现得比大爆炸晚一点点，属于相对先后关系，并没有给出大爆炸的时间；更没有任何句子讨论“大爆炸的时间是否确定”。信息缺失即为 NOT GIVEN，切忌把“原文用词模糊（not long after）”等同于“原文承认时间不确定”。",
          "analysis": "第 7 段开头三句：「It is thought that the first black holes came into existence not long after the big bang. Newly created clouds of gases slowly coalesced into the first stars. As these early stars collapsed, they gave rise to the first black holes.」（人们认为，第一批黑洞在大爆炸后不久就出现了。新形成的云气缓慢聚合成最早的恒星。当这些早期恒星坍缩时，便产生了第一批黑洞）。这段话回答的是“第一批黑洞何时出现、怎样出现”，其中大爆炸只作为一个时间参照被提及（not long after）。题干问的却是“大爆炸发生的时间是否确定”，原文对此既没有肯定也没有否定，全篇也没有任何句子涉及大爆炸年代或相关争议，属于信息缺失，按判断题规则判 NOT GIVEN。做本题时要克制“黑洞研究尚有很多未解问题，所以大爆炸时间大概也不确定”这类联想——文章末段确实说新研究带来更多疑问，但那些疑问针对的是黑洞的起源，不是大爆炸的时间。",
          "traps": [
            "为什么不是 TRUE：原文只把大爆炸当作已知的时间参照点来交代黑洞的出现（not long after the big bang），通篇没有一句说“大爆炸的时间存在争议或无法确定”，题干的“不确定”在原文找不到任何依据。",
            "为什么不是 FALSE：原文也没有给出大爆炸发生的具体年代或明确表态“时间已经确定”，不存在与题干相反的信息。既无支持也无反对，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q38",
          "questionNumber": 38,
          "stem": "According to the “seed” theory, the first black holes eventually became supermassive black holes.",
          "translation": "根据“种子”理论，最早的黑洞最终变成了超大质量黑洞。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "A number of theories proposed that the first black holes were essentially “seeds,” which then gravitationally attracted and consumed enormous quantities of matter found in adjacent gas clouds and dust. This allowed them to grow into the supermassive black holes that now sit in the centers of galaxies."
          },
          "synonyms": [
            "「the “seed” theory」对应原文的「A number of theories proposed that the first black holes were essentially “seeds,”」，seed 加引号在原文中原样出现",
            "「the first black holes」在原文中原词复现：「the first black holes were essentially “seeds”」",
            "「eventually became supermassive black holes」同义替换为原文的「This allowed them to grow into the supermassive black holes」，became 对应 grow into"
          ],
          "locatingTip": "定位：题干的关键词 seed 在文中带引号出现，位于第 7 段中段，非常醒目，看到引号内的 seeds 就精读其前后两句。确定答案技巧：判断题遇到“根据某理论/某人说法”的题干，必须只核对与该理论相关的那部分内容，不要被随后出现的反方证据带偏。原文先说第一批黑洞是“种子”，随后明确写道这些种子“成长为如今天位于星系中心的超大质量黑洞（grow into the supermassive black holes）”，题干用 eventually became 概括 grow into，方向与程度一致，故为 TRUE。",
          "analysis": "第 7 段中段是“种子”理论的完整表述：「A number of theories proposed that the first black holes were essentially “seeds,” which then gravitationally attracted and consumed enormous quantities of matter found in adjacent gas clouds and dust. This allowed them to grow into the supermassive black holes that now sit in the centers of galaxies.」（许多理论提出，最早的黑洞本质上就是“种子”，它们随后通过引力吸引并吞食了邻近气体云和尘埃中的大量物质。这使它们得以成长为如今位于星系中心的那些超大质量黑洞）。题干把这一过程概括为“根据种子理论，最早的黑洞最终变成了超大质量黑洞”，其中第一句给出种子身份，第二句的 This allowed them to grow into the supermassive black holes 给出最终归宿，与题干 the first black holes eventually became supermassive black holes 一一对应，因此答案为 TRUE。需要注意的是，紧接着原文用 However 引出新模拟结果（成长极为有限），但那是另一种观点与证据，并不改变“种子理论本身是怎样主张的”。题干问的是“根据种子理论（According to the “seed” theory）”，所以只按种子理论自己的主张判断，不受后面反驳内容影响。",
          "traps": [
            "为什么不是 FALSE：原文在陈述种子理论时明确说第一批黑洞“成长为……超大质量黑洞（grow into the supermassive black holes）”，这与题干完全一致，没有任何矛盾。后面 However 引出的新模拟只是质疑其可能性（make it far less likely），并非否定该理论的主张内容。",
            "为什么不是 NOT GIVEN：题干中“最早的黑洞最终变成超大质量黑洞”这一因果关系在原文中有明确的句子对应（This allowed them to grow into the supermassive black holes），信息充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q39",
          "questionNumber": 39,
          "stem": "The “seed” theory has been proven true by computer simulation.",
          "translation": "“种子”理论已被计算机模拟证实。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The new simulations do not definitively invalidate the seed theory, but they make it far less likely."
          },
          "synonyms": [
            "「computer simulation」同义替换为原文的「The new simulations」，simulation 原词复现",
            "「has been proven true」与原文的「do not definitively invalidate … but they make it far less likely」相互冲突：模拟并没有证实该理论，反而让它成立的可能性大大降低",
            "「the “seed” theory」在原文中原词复现：「the seed theory」"
          ],
          "locatingTip": "定位：题干同时出现 seed theory 与 computer simulation，两者在第 7 段中段交汇，紧随“种子成长说”之后的那句计算机模拟结论就是答案句。确定答案技巧：看到“证明（proven）”这类绝对化的动词要立刻警觉。原文的表述是“新的模拟并没有确凿地推翻种子理论，但使它的可能性大大降低（do not definitively invalidate … but they make it far less likely）”——既不支持、更谈不上证实，反而在削弱它。题干的 proven true 与原文 make it far less likely 正面对立，故判 FALSE。",
          "analysis": "第 7 段在介绍完种子理论后，用 However 转折引入新的计算机模拟：「However, a new computer simulation proposes that such growth was minimal. … Being in essence “starved,” it grew by less than 1 percent over the course of its first hundred million years. The new simulations do not definitively invalidate the seed theory, but they make it far less likely.」（然而，一项新的计算机模拟提出这种成长极为有限……由于本质上处于“饥饿”状态，它在最初一亿年里成长不到 1%。新模拟并没有确凿地推翻种子理论，但使其成立的可能性大大降低）。题干说该理论“已被计算机模拟证实（has been proven true）”，而原文的模拟结果恰恰相反：它显示种子黑洞几乎无法获得物质、成长不到 1%，并把该理论的可能性压低。模拟既没有证实，甚至也没有彻底否定，只是使理论变得更加站不住脚——无论如何都与“被证实为真”矛盾，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文的模拟结果对种子理论是负面证据——“成长极为有限”“最初一亿年成长不到 1%”“使其可能性大大降低”，没有任何一句说模拟证实了该理论，题干与原文方向相反。",
            "为什么不是 NOT GIVEN：原文明确交代了计算机模拟与种子理论之间的关系（The new simulations do not definitively invalidate the seed theory, but they make it far less likely），信息明确且与题干冲突，属于有相反证据的情形，必须判 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q40",
          "questionNumber": 40,
          "stem": "The black holes that existed in the early universe were all compact black holes.",
          "translation": "早期宇宙中存在的黑洞全都是紧凑型黑洞。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "On the other hand, it is known that black holes a billion times more massive than our sun did exist in the early universe."
          },
          "synonyms": [
            "「black holes … in the early universe」在原文中原词复现：「black holes a billion times more massive than our sun did exist in the early universe」，exist 对应 existed",
            "「all compact black holes」与原文的「black holes a billion times more massive than our sun」相互冲突：早期宇宙中的黑洞质量是太阳的十亿倍，属于超大质量黑洞而绝非紧凑型",
            "「compact black holes」的原义见第 5 段：「Compact ones, called star-mass black holes …」——紧凑型（星质量）黑洞的质量只相当于一颗恒星"
          ],
          "locatingTip": "定位：题干关键信息是 early universe 与 black holes，第 7 段末尾句直接出现 in the early universe 与 a billion times more massive than our sun，一步锁定。确定答案技巧：本题的判分点是“all（全部）”与黑洞的类型。原文说早期宇宙中确实存在质量达太阳十亿倍的黑洞，而第 5 段已交代紧凑型黑洞即星质量黑洞（质量仅相当于一颗恒星）、超大质量黑洞才含数百万乃至数十亿颗恒星的质量。可见早期宇宙存在的是超大质量级别的黑洞，题干的“全都是紧凑型（all compact）”被直接推翻，故判 FALSE。",
          "analysis": "第 7 段最后两句：「On the other hand, it is known that black holes a billion times more massive than our sun did exist in the early universe. Researchers have yet to discover how these supermassive black holes were formed in such a short time, and the origin of these giants poses one of the most fundamental questions in astrophysics.」（另一方面，已知在早期宇宙中确实存在质量比太阳大十亿倍的黑洞。研究人员尚未弄清这些超大质量黑洞如何在如此短的时间内形成，这些庞然大物的起源是天体物理学中最根本的问题之一）。题干断言“早期宇宙中的黑洞全部都是紧凑型黑洞”，而原文明确指出早期宇宙中存在的是比太阳重十亿倍的巨型黑洞，紧接着还把后文用 these supermassive black holes 回指它们，即属于超大质量黑洞一类；按第 5 段的分类，紧凑型（compact/star-mass）黑洞的质量只相当于一颗恒星的量级，二者相差极其悬殊。原文信息与题干正面对立，因此答案是 FALSE。答题时要特别留意题干中的 all：只要原文能举出一个反例，全称判断即被推翻。",
          "traps": [
            "为什么不是 TRUE：原文明说早期宇宙中存在质量达太阳十亿倍的黑洞，并称其为这些超大质量黑洞（these supermassive black holes）；而紧凑型黑洞在第 5 段被定义为星质量黑洞，二者类型与量级完全不同，题干的全称判断与原文冲突。",
            "为什么不是 NOT GIVEN：原文不仅指出了早期宇宙黑洞的存在，还给出了它们的质量量级和类型归属（supermassive），对“是不是全是紧凑型”这一问题有明确的反向信息，属于有据可查而非未提及，故不能判 NOT GIVEN。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
