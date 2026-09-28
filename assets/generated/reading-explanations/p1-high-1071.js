(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1071", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1071",
  "meta": {
    "examId": "p1-high-1071",
    "title": "Biodiversity 生物多样性",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–7 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 7
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "The term “biodiversity” consists of living creatures and the environment that they live in.",
          "translation": "“生物多样性”这一术语包含生物以及它们所生存的环境。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "biodiversity comprises every form of life, from the smallest microbe to the largest animal or plant, the genes that give them their specific characteristics, and the ecosystems of which they are a part."
          },
          "synonyms": [
            "“the term biodiversity” 回指原文首句引入的 “biodiversity” 一词，原文紧接着给出 “a good working definition”，即本题的定义依据",
            "“consists of” 同义替换为原文的 “comprises”（均由“包含、构成”之义）",
            "“living creatures” 同义替换为原文的 “every form of life, from the smallest microbe to the largest animal or plant”",
            "“the environment that they live in” 同义替换为原文的 “the ecosystems of which they are a part”（生态系统即生物所栖息、所归属的环境）"
          ],
          "locatingTip": "定位：题干的核心词是加引号的 biodiversity，原文第 A 段正是为 biodiversity 下定义的位置，扫读时只要在第 A 段找到 “The Convention on Biological Diversity … provides a good working definition”，就不必再往别处找。确定答案技巧：本题考“定义是否被完整覆盖”。原文的定义由三项并列组成——every form of life（一切生命形式）、the genes（基因）、the ecosystems of which they are a part（它们所归属的生态系统）。题干的两个成分正好落在其中两项上：living creatures 对应 every form of life，the environment that they live in 对应 ecosystems of which they are a part；题干省略的 genes 属于定义中的补充项，省略不等于否定，不构成冲突。方向一致、成分可一一对号入座，因此判 TRUE。",
          "analysis": "第 A 段先设问 “But what exactly is it?”，随后借《生物多样性公约》给出工作定义：“biodiversity comprises every form of life, from the smallest microbe to the largest animal or plant, the genes that give them their specific characteristics, and the ecosystems of which they are a part.”（生物多样性包含一切生命形式，从最小的微生物到最大的动物或植物，包含赋予它们特定特征的基因，也包含它们所归属的生态系统）。题干的落点是“consists of living creatures and the environment that they live in”，其中 living creatures 是 every form of life（小至微生物、大至动植物）的概括说法，the environment that they live in 则是 the ecosystems of which they are a part 的同义改写——of which they are a part 正表示“生物是其中一部分”的栖息环境。原文所列的第二项 the genes 只是定义中的附加成分，题干未提并不构成矛盾。三项信息方向一致，故答案是 TRUE。做题提醒：定义类判断题要把题干拆成成分，再逐项回原文比对，只要求“原文说过的题干也说到了、没有相反信息”，不要求题干覆盖定义的全部要素。",
          "traps": [
            "为什么不是 FALSE：原文明确把 ecosystems（生态系统，即生物所栖息的环境）列进 biodiversity 的构成之中，“the ecosystems of which they are a part” 与题干 “the environment that they live in” 同义，两者方向一致，找不到任何冲突点。",
            "为什么不是 NOT GIVEN：题干谈的是 biodiversity 这一术语的构成，原文第 A 段用 “a good working definition” 直接给出了构成要素（生命形式、基因、生态系统），信息完整且正面回应了题干，不属于未提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "There are species that have not been researched because it’s unnecessary to study all creatures.",
          "translation": "有些物种之所以没有被研究，是因为研究所有生物没有必要。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "Some 1.2 million species of animals and 270,000 species of plants have been classified, but the well-being of only a fraction has been assessed. The resources are simply not available."
          },
          "synonyms": [
            "“species that have not been researched” 同义替换为原文的 “the well-being of only a fraction has been assessed”（只对极小一部分物种做过评估）",
            "“because it’s unnecessary” 与原文给出的原因 “The resources are simply not available.”（资源根本不够）在因果关系上冲突",
            "原文紧跟的 “The IUCN reports that 5,714 plants are threatened, for example, but admits that only 4% of known plants have been assessed.” 进一步说明未研究的原因是评估比例极低，而不是“没必要”"
          ],
          "locatingTip": "定位：题干关键词是 species 与 researched，对应第 B 段讲红皮书数据低估危机的那几句，段中出现 classified、assessed 等与“研究/评估”同域的词，可一眼锁定。确定答案技巧：这是一道“因果关系判断题”，判分点在原因而不在现象。现象上原文与题干并不冲突——原文确实说只有一小部分物种（only a fraction、only 4%）被评估过，等于承认有许多物种没被研究；但题干把这个现象的原因归为 “unnecessary to study all creatures”，而原文给出的原因白纸黑字是 “The resources are simply not available.”（资源根本不够用）。原因被替换成“没必要”，属于典型的因果偷换，因此判 FALSE。切忌因为第 C 段出现 “it isn’t necessary to observe every single type of organism in an area” 就选 TRUE：那是另一件事、另一套语境。",
          "analysis": "第 B 段讲 IUCN 更新红色名录后发现数据低估了危机，原文的逻辑链条是：已定名的动物约 120 万种、植物约 27 万种，但 “the well-being of only a fraction has been assessed”（只评估了其中极小一部分的健康状况），原因就是紧接着的一句 “The resources are simply not available.”（资源根本不够用）；随后还举例说 IUCN 报告有 5714 种植物受威胁，却承认只评估了已知植物的 4%。可见原文对“为什么许多物种没被研究”给出的理由是资源限制（人力、资金不足），属于客观条件问题。题干的落点却是 “because it’s unnecessary to study all creatures”（因为研究所有生物没必要），把客观的资源不足改写成主观上的“没有必要”。原文并未说研究全部物种没有必要，只说“做不到”；现象相同而原因相反，按判断题规则判 FALSE。做题提醒：出现 because、due to、as a result of 的题干，必须回原文核对原因是否原样成立，很多 FALSE 就藏在原因被偷换的地方。",
          "traps": [
            "为什么不是 TRUE：题干的后半句 “it’s unnecessary to study all creatures” 是判断的关键。原文明确写 “The resources are simply not available.”，把未研究归因于资源不足，而不是“研究全部生物没有必要”，原因与题干对立，所以不能判 TRUE。",
            "为什么不是 NOT GIVEN：原文对“许多物种未被研究”这一现象及其原因都做了交代（only a fraction has been assessed 加 The resources are simply not available），信息是明确的、且与题干的原因表述相反，属于冲突而非缺失，故不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "It is not necessary to investigate all creatures in a certain place.",
          "translation": "没有必要对某一特定区域内的所有生物都进行调查。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "But it isn’t necessary to observe every single type of organism in an area to get a snapshot of the health of the ecosystem."
          },
          "synonyms": [
            "“investigate” 同义替换为原文的 “observe”（观察即调查）",
            "“all creatures” 同义替换为原文的 “every single type of organism”（每一类生物）",
            "“in a certain place” 同义替换为原文的 “in an area”",
            "“it is not necessary” 与原文的 “it isn’t necessary” 完全对应，连否定形式都一致"
          ],
          "locatingTip": "定位：题干的结构句是 “It is not necessary to …”，属于好认的否定陈述，回到原文找同样的句式即可，第 C 段第 2 句 “But it isn’t necessary to observe every single type of organism in an area …” 与之几乎逐词对应。确定答案技巧：本题的确定依据在于三处同义替换同时成立：investigate 对 observe（观察也是调查手段之一），all creatures 对 every single type of organism（每一类生物即全部生物），in a certain place 对 in an area。另外要注意句末的 to get a snapshot of the health of the ecosystem 这一目的状语——原文的意思是“为了给生态系统的健康状况做一次快照式评估，不必逐个观察每一种生物”，前提与结论都完整，与题干完全一致，故选 TRUE。本题与第 2 题形似而实质不同：第 2 题问的是“某些物种为什么没被研究”，本文问的是“评估一个地区时是否需要穷尽所有生物”，两题分别落在 B 段和 C 段，务必分开定位。",
          "analysis": "第 C 段讲的是“如何给地球生命的多样性拍一张快照”。首句说明现在就要建立生物多样性的图景，以便将来做比较、看趋势；第 2 句紧接一个转折：“But it isn’t necessary to observe every single type of organism in an area to get a snapshot of the health of the ecosystem.”（但为了取得生态系统健康状况的快照，并不需要对一个地区内的每一种生物都进行观察）。第 3 句进一步解释原因：许多栖息地中存在对环境条件变化特别敏感（particularly susceptible to shifting conditions）的物种，可以拿它们当指示物种（indicator species）。原文的语义是“抽样即可、不必全查”，题干的语义是 “It is not necessary to investigate all creatures in a certain place”，两者不仅方向一致，连句式和否定都一样，只是把 observe 换成 investigate、an area 换成 a certain place，因此答案是 TRUE。做题提醒：当题干与原文出现几乎一模一样的句式时，不要怀疑自己看错，只需确认替换词是否同义、有无程度或范围的偷换；本题中 every single type of organism 与 all creatures 的范围完全吻合，没有偷换。",
          "traps": [
            "为什么不是 FALSE：原文用 “it isn’t necessary to observe every single type of organism in an area” 明确否认了“必须逐个观察所有生物”的做法，题干只是把这一否定换一种说法复述，两者同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文不仅给出了“不必观察每一种生物”的判断，还给出了理由（可用 indicator species 作指示物种），信息完整明确，因此属于 TRUE 而非信息缺失。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The press more often than not focuses on animals well-known.",
          "translation": "媒体往往把注意力集中在名气大的动物身上。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "In the media, it is usually large, charismatic animals such as pandas, elephants, tigers, and whales that get all the attention when a loss of biodiversity is discussed."
          },
          "synonyms": [
            "“the press” 同义替换为原文的 “the media”（媒体/新闻界）",
            "“more often than not” 同义替换为原文的 “usually”（通常、往往）",
            "“focuses on” 同义替换为原文的 “get all the attention”（获得全部关注）",
            "“animals well-known” 同义替换为原文的 “large, charismatic animals such as pandas, elephants, tigers, and whales”（大而富有魅力的明星物种）"
          ],
          "locatingTip": "定位：题干的关键词是 the press 与 animals，原文第 D 段开头即 “In the media …”，且在讨论生物多样性丧失时媒体的注意力分配，属于一眼可锁定的同域表达；段内紧接着还出现 However 引出真正的重点（keystone species），所以第 4 题只对应 D 段第 1 句。确定答案技巧：本题是“程度词对应”题，题干用了 more often than not（往往）这一弱化的频率副词，原文用 usually（通常），两者在频率上等值，不存在程度偷换；再核对关注对象——题干的 animals well-known 对应原文的 charismatic animals 加四个具体例子（熊猫、大象、老虎、鲸），都是家喻户晓的物种，对应关系成立，故选 TRUE。",
          "analysis": "第 D 段开头写道：“In the media, it is usually large, charismatic animals such as pandas, elephants, tigers, and whales that get all the attention when a loss of biodiversity is discussed.”（在媒体上，谈到生物多样性丧失时，通常是大而富有魅力的动物——如熊猫、大象、老虎和鲸——吸引了全部注意力）。这句话用的是强调结构 “it is … that …”，把 large, charismatic animals 这一焦点成分突显出来，与题干 “The press more often than not focuses on animals well-known” 完全同向：the press 对应 the media，more often than not 对应 usually，focuses on 对应 get all the attention，animals well-known 对应 large, charismatic animals（charismatic 指有魅力、受公众喜爱的，正是 well-known 的意思）。四项替换逐一成立，且原文没有任何限定词削弱这一说法，因此答案是 TRUE。注意本段第 2 句的 However 是转向下文的 keystone species（第 8 题所在之处），不要把它误读为对本句的否定。",
          "traps": [
            "为什么不是 FALSE：原文明确说媒体“通常（usually）把全部注意力给大而富有魅力的动物（get all the attention）”，与题干“往往关注名气大的动物”方向一致，没有任何相反信息，不能判 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅说明了媒体关注谁，还点出了具体物种（pandas, elephants, tigers, and whales）作为例证，信息非常具体，不存在未提及的情况。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "There is a successful case where the cactus moth plays a positive role in the US.",
          "translation": "有一个仙人掌蛾（cactus moth）在美国发挥积极作用的成功案例。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "It solved the cactus menace, but unfortunately, some of the moths have now reached the US mainland – borne on winds and in tourists’ luggage – where they are devastating the native cactus populations of Florida."
          },
          "synonyms": [
            "“plays a positive role” 与原文的 “are devastating the native cactus populations of Florida”（正在毁掉佛罗里达的原生仙人掌种群）方向相反",
            "“a successful case” 对应原文的 “It was so successful … It solved the cactus menace”，但成功发生在被引入的澳大利亚和加勒比岛屿，而不是美国",
            "原文的 “was introduced to Australia”（被引入澳大利亚）与末句 “have now reached the US mainland”（如今已到达美国本土）形成地点上的对比，即“成功”与“灾难”分属不同地点"
          ],
          "locatingTip": "定位：题干关键词是 cactus moth 与 the US，第 G 段专讲仙人掌蛾这一外来物种，段中同时出现 the US mainland、Florida，可一次性锁定。确定答案技巧：本题是“地点错位型”判断题，判分关键是分清“在哪儿成功、在哪儿成灾”。原文先说仙人掌蛾被引入澳大利亚以控制蔓延的仙人掌，结果 “It solved the cactus menace”（解决了仙人掌之患），后来又被引入加勒比岛屿，同样“It was so successful”；但转折词 unfortunately 之后交代，部分蛾子已经到达美国本土（the US mainland），并且 “where they are devastating the native cactus populations of Florida”（正在毁掉佛罗里达的原生仙人掌）。也就是说，美国那一环是灾难而非成功案例，题干把“在美国”和“积极作用”拼在一起，与原文直接冲突，故判 FALSE。",
          "analysis": "第 G 段整段讲的是“关键物种一旦进入错误的生态系统反而可能造成浩劫”。原文的时间与地点线索层层推进：①“The cactus moth, whose caterpillar is a voracious eater of prickly pear, was introduced to Australia to control the rampant cacti.”（仙人掌蛾的幼虫贪婪地取食仙人掌，它被引入澳大利亚以控制疯长的仙人掌）；②“It was so successful that someone thought it would be a good idea to introduce it to Caribbean islands that had the same problem.”（它如此成功，以至于有人觉得把它引入同样问题的加勒比岛屿是个好主意）；③“It solved the cactus menace, but unfortunately, some of the moths have now reached the US mainland – borne on winds and in tourists’ luggage – where they are devastating the native cactus populations of Florida.”（它解决了仙人掌之患，但不幸的是，一些蛾子如今已随风和游客行李到达美国本土，正在毁掉佛罗里达的原生仙人掌种群）。可见“成功”发生在澳大利亚与加勒比岛屿，而美国本土得到的结果是 devastating（毁坏性）的。题干把成功案例与在美国发挥积极作用绑定，与原文在“地点”这一关键信息上发生冲突，因此答案是 FALSE。做题提醒：遇到含地点状语的判断题，要把原文里每一个地点与其对应的结果逐一对号，尤其警惕 unfortunately、however 之后的转折句。",
          "traps": [
            "为什么不是 TRUE：原文说仙人掌蛾“如今已到达美国本土……正在毁掉佛罗里达的原生仙人掌种群”，在美国起到的是破坏作用而非积极作用；原文中的成功（solved the cactus menace、so successful）都发生在澳大利亚和加勒比岛屿，与题干的地点不符，因此不能判 TRUE。",
            "为什么不是 NOT GIVEN：原文明确交代了仙人掌蛾在美国本土（the US mainland、Florida）造成的后果，信息存在且与题干相反，属于冲突而非缺失，故不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Usage of hardwoods is forbidden in some European countries.",
          "translation": "在一些欧洲国家，硬木的使用是被禁止的。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "I",
            "quote": "with the emphasis on minimizing the use of rainforest hardwoods in the developed world and on rigorous replanting of whatever trees are harvested"
          },
          "synonyms": [
            "“Usage of hardwoods” 对应原文的 “the use of rainforest hardwoods”，对象一致（硬木/雨林硬木的使用）",
            "“is forbidden” 与原文的 “minimizing the use”（尽量减少使用）程度不符：minimize 是“尽可能减少”，不是“禁止”",
            "“in some European countries” 在原文中没有对应：该句只说 “in the developed world”（发达国家），并未点名任何国家或地区，也没有出现欧洲国家"
          ],
          "locatingTip": "定位：题干关键词是 hardwoods，全文只有第 I 段出现 rainforest hardwoods，可一步定位到可持续林业那一句。确定答案技巧：这类判断题要从两个角度核对：①程度词——题干的 forbidden（禁止）是绝对化表述，原文用的是 minimizing the use（尽量减少使用），两者强弱等级不同；②范围词——题干限定了 in some European countries，原文只说 in the developed world，既没有点出欧洲国家，也没有给出任何国家名单。原文对“是否有国家禁止硬木”完全没有交代，属于信息缺失，因此判 NOT GIVEN。遇到原文用 reduce、minimize、cut down 等“减量词”而题干用 ban、forbid、prohibit 等“禁止词”时，要高度警惕 false 与 not given 的分界：本题原文并未否认存在禁令，只是没有提及，所以按 NOT GIVEN 处理。",
          "analysis": "第 I 段先给出乐观的理由——人们越来越认识到可持续农业与可持续旅游对保护生物多样性的必要性，接着写道：“Problems such as illegal logging are being tackled through sustainable forestry programs, with the emphasis on minimizing the use of rainforest hardwoods in the developed world and on rigorous replanting of whatever trees are harvested.”（非法砍伐等问题正通过可持续林业项目加以解决，重点在于在发达国家尽量减少雨林硬木的使用，并严格补种所有被采伐的树木）。原文的信息点有三个：手段是可持续林业项目，做法是 minimize（尽量减少）使用雨林硬木，地域限定是 the developed world。题干却写成 “Usage of hardwoods is forbidden in some European countries”，把“减少使用”升级为“禁止使用”，并把“发达国家”缩窄为“一些欧洲国家”。原文既没有说任何国家禁止硬木，也没有提到欧洲国家是否立法，这一层信息整体缺失；同时，虽然“减少”弱于“禁止”看似冲突，但原文并未否定存在禁令，所以按雅思的判定规则应选 NOT GIVEN 而不是 FALSE。做题提醒：判断信息缺失，要看题干的核心信息（这里是“某个地方存在禁令”这件事）在原文里是否被提到过——本题完全没有提到，因此是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说 “minimizing the use of rainforest hardwoods in the developed world”，即尽量减少使用，属于程度上的削减而非法律上的禁止；题干把它写成“被禁止（forbidden）”，并且地点从发达国家收窄为一些欧洲国家，原文都无从支持，因此不能判 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文有相反信息，例如原文说“没有任何国家禁止硬木”或“欧洲国家允许使用硬木”；而原文只说重点在于减少使用，对是否存在禁令完全未作交代，也没有否认欧洲国家有此类规定，故属于信息缺失而非冲突，应判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Agriculture experts advise farmers to plant single crops in the field in terms of sustainable farming.",
          "translation": "在可持续农业方面，农业专家建议农民在田里种植单一作物。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "I",
            "quote": "In the same way, sustainable farming techniques that minimize environmental damage and avoid monoculture."
          },
          "synonyms": [
            "“in terms of sustainable farming” 同义替换为原文的 “sustainable farming techniques”",
            "“plant single crops” 与原文的 “avoid monoculture” 相冲突：monoculture 即单一作物连作，原文主张的是“避免单一作物种植”",
            "“agriculture experts advise farmers” 在原文中没有任何对应：原文只描述可持续农业技术本身，没有出现“专家”这一主体，也没有“建议农民”这一行为"
          ],
          "locatingTip": "定位：题干的两个关键词 sustainable farming 与 single crops（原文用 monoculture 表达）都落在第 I 段最后一句 “sustainable farming techniques that minimize environmental damage and avoid monoculture”。确定答案技巧：本题的落点是“谁建议谁做什么”。原文的句子是一个没有主句谓语收尾的技术描述——它说明可持续农业技术应当 minimize environmental damage（把环境破坏降到最低）并 avoid monoculture（避免单一作物连作），通篇没有出现 agriculture experts，也没有 advise farmers 这类动作；题干却补出了“农业专家建议农民种单一作物”这一整层信息。主体与行为在原文中都不存在，属于信息缺失。同时要注意 monoculture 的含义就是“单一作物种植”，题干说“种单一作物”与原文的 avoid monoculture 方向相反，但真正让本题落到 NOT GIVEN 的是“专家建议农民”这件事原文从未提及——当题干的核心陈述（某人建议某事）整体缺席时，不能因为其中一个片段与原文相反就改判 FALSE。",
          "analysis": "第 I 段最后一句：“In the same way, sustainable farming techniques that minimize environmental damage and avoid monoculture.”（同样地，还有那些把环境破坏降到最低并避免单一作物连作的可持续农业技术）。这句话与前面的可持续林业、森林补种并列表述“可持续做法”，句中出现两个要点：一是 minimize environmental damage（尽量降低环境破坏），二是 avoid monoculture（避免单一作物连作）。题干的落点却是 “Agriculture experts advise farmers to plant single crops in the field”，包含三层信息：主体 agriculture experts、行为 advise farmers、内容 plant single crops。逐层核对：①“单一作物”在原文中确实出现，但方向相反（原文是 avoid monoculture，避免单一作物）；②“农业专家”这一主体在原文中根本没有出现；③“建议农民”这一动作也不存在。也就是说，题干陈述的核心事实（专家的建议行为）在本段乃至全文都找不到依据，只是借用了原文的两个词 sustainable farming 与 monoculture 来干扰。按规则，原文未提及题干所述事项，应判 NOT GIVEN。做题提醒：不要在发现“avoid monoculture 与 plant single crops 相反”时就立刻选 FALSE，要先确认题干陈述的事件是否真的在原文发生过；本题中事件本身不存在，所以是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说可持续农业技术“避免单一作物连作（avoid monoculture）”，完全没有农业专家建议农民种单一作物这一层信息，题干所述事实在原文中不存在，不能判 TRUE。",
            "为什么不是 FALSE：虽然题干的 “plant single crops” 表面上与原文的 “avoid monoculture” 相反，但 FALSE 需要原文明确陈述一个相反事实。原文并没有说“农业专家建议农民不要种单一作物”这类具体事件，题干的“专家建议”这一主体与行为整体缺失，按“信息缺失”规则应判 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 摘要填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Because of the ignorance brought by media, people tend to neglect significant creatures called 8 ________.",
          "translation": "由于媒体带来的忽视，人们往往忽略了一类被称为 ________ 的重要生物。",
          "answer": "keystone species",
          "wordClass": "名词短语（called 之后的名词性成分，与 called 构成过去分词短语作后置定语修饰其前的 creatures，指称一类物种；原文用复数形式 keystone species，若写 keystone 亦可，两词均在 NO MORE THAN TWO WORDS 限制内）",
          "locating": {
            "paragraph": "D",
            "quote": "However, animals or plants far lower down the food chain are often the ones vital for preserving habitats – in the process saving the skins of those more glamorous species. There are known as keystone species."
          },
          "synonyms": [
            "“significant creatures” 同义替换为原文的 “animals or plants … the ones vital for preserving habitats”（对维系栖息地至关重要的动植物）",
            "“people tend to neglect” 对应原文 “large, charismatic animals … get all the attention”，即公众与媒体把注意力都给了明星物种，反而忽略了真正关键的物种",
            "“called” 对应原文的 “known as”，空格要填的就是这个术语本身"
          ],
          "locatingTip": "定位：summary 的第一句讲“媒体带来忽视、人们忽略某类重要生物”，对应原文第 D 段讲媒体只关注魅力物种、却忽略食物链下层关键物种的论述；空格前的 called 提示此处要填一个“名称/术语”，回到 D 段末尾即可看到 “There are known as keystone species.”。确定答案技巧：summary 填空要顺着语义找“被定义的名词”。原文先说“animals or plants far lower down the food chain are often the ones vital for preserving habitats”，再点出这类生物的名称；题干的 significant creatures 就是 vital for preserving habitats 的概括，因此空格填 keystone species。注意字数限制为 NO MORE THAN TWO WORDS，keystone species 恰好两个词，写 keystone 单词也可以，但不要写 “keystone creatures” 之类原文没有的搭配。",
          "analysis": "第 D 段的逻辑是先抑后扬：第 1 句说在媒体上，“large, charismatic animals such as pandas, elephants, tigers, and whales that get all the attention when a loss of biodiversity is discussed”（谈论生物多样性丧失时，熊猫、大象、老虎、鲸这类大而富有魅力的动物夺走了全部关注）；第 2 句用 However 转折，指出 “animals or plants far lower down the food chain are often the ones vital for preserving habitats – in the process saving the skins of those more glamorous species”（食物链中位置低得多的动植物往往才是维系栖息地的关键，甚至反过来保护了那些更光鲜的物种）；第 3 句给出名称：“There are known as keystone species.”（它们被称为关键物种）。summary 用了因果转述：Because of the ignorance brought by media（因为媒体造成的忽视）对应第 1 句媒体注意力分配失衡，people tend to neglect significant creatures called [8] 则对应第 2、3 句被忽略却最关键、并被命名为 keystone species 的这类生物。答案词性为名词短语，取原文术语 keystone species。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Every creature has diet connections with others, such as 9 ________, which provide a majority of foods for other species.",
          "translation": "每种生物都与其他生物存在食物联系，例如 ________，它们为其他物种提供大部分食物。",
          "answer": "fig family",
          "wordClass": "名词短语（such as 后接的举例成分；原文用 the members of the fig family 表示“榕属这一大类”，答案取其中的核心短语 fig family，两个词）",
          "locating": {
            "paragraph": "E",
            "quote": "For example, the members of the fig family are the staple food for hundreds of different species in many different countries"
          },
          "synonyms": [
            "“diet connections” 同义替换为原文的 “the complex feeding relationships within habitats”（栖息地内复杂的取食关系）",
            "“provide a majority of foods for other species” 同义替换为原文的 “are the staple food for hundreds of different species”（是数百种不同物种的主食）",
            "“such as” 与原文的 “For example” 对应，都引出具体例证，说明空格处应填一个具体的类群名称"
          ],
          "locatingTip": "定位：summary 提到“生物之间的食物联系”，对应原文第 E 段开头 “By studying the complex feeding relationships within habitats …”；紧接着的 For example 与题干的 such as 功能相同，其后出现的类群名就是答案所在。确定答案技巧：题干用 which provide a majority of foods for other species 描述这类生物的作用，原文对应的表述是 “the members of the fig family are the staple food for hundreds of different species in many different countries”，其中 staple food（主食）即“为其他物种提供大部分食物”的同义改写，hundreds of different species 即 other species。因此空格要填的是例句的主语核心 fig family，即“榕属（榕树家族）”。填 the members of the fig family 会超过两词上限，故只取 fig family。",
          "analysis": "第 E 段先说明研究栖息地内复杂的取食关系可以看出哪些物种对环境影响特别大，随后举例：“For example, the members of the fig family are the staple food for hundreds of different species in many different countries, so important that scientists sometimes call figs 'jungle burgers.'”（例如，榕属植物是许多国家中数百种不同物种的主食，重要到科学家有时把榕果称为“丛林汉堡”）。后面继续补充，从微小昆虫到鸟类和大型哺乳动物都以榕树为食。summary 把这段信息压缩为“Every creature has diet connections with others, such as [9], which provide a majority of foods for other species”：diet connections 对应 feeding relationships，a majority of foods 对应 staple food（主食，即食物构成的主要部分），for other species 对应 for hundreds of different species。据此可以确定空格应填被举例的那个类群，即 fig family。词性上是名词短语，字数符合 NO MORE THAN TWO WORDS 的要求。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "In some states of America, the decline in the number of sea otters leads to the boom of 10 ________.",
          "translation": "在美国的一些州，海獭数量的下降导致 ________ 的数量激增。",
          "answer": "sea urchins",
          "wordClass": "名词短语（复数名词，指某类海洋生物；在原文中以复数形式 sea urchins 出现，作 of 的宾语）",
          "locating": {
            "paragraph": "F",
            "quote": "The result is that the sea urchin population grows unchecked, and they roam the seafloor eating young kelp fronds."
          },
          "synonyms": [
            "“the decline in the number of sea otters” 同义替换为原文的 “when the sea otter population declines”",
            "“leads to” 同义替换为原文的 “The result is that”（结果就是）",
            "“the boom of” 同义替换为原文的 “the … population grows unchecked”（种群数量不受控制地增长）",
            "“in some states of America” 对应原文第 F 段提到的 California and Alaska，二者均为美国的海岸州"
          ],
          "locatingTip": "定位：summary 出现 sea otters 这一专有名词式的话题词，全文只在第 F 段集中讨论海獭与海带森林的关系，且是在美国（California and Alaska）沿岸，可一步锁定整段。确定答案技巧：题干问“海獭数量下降导致什么激增”，原文对应句是 “The result is that the sea urchin population grows unchecked”（结果海胆种群不受控制地增长）。grows unchecked 即“激增”，the sea urchin population 的主词是 sea urchin，题干要求不超过两词，故填 sea urchins。注意不要误填 kelp（海带）：海獭减少的后果是海胆增多、海带被吃光，海带是被损害的一方而不是激增的一方。",
          "analysis": "第 F 段以海獭与巨藻森林的共生关系为例说明关键物种的作用：海獭捕食海胆，控制海胆数量，海胆因此不得不躲在岩缝里，海带得以生长，形成“海洋雨林”，为众多物种提供栖息地。段落后半段写到失衡的情况：“The problems start when the sea otter population declines.”（问题始于海獭种群数量下降）、“As large predators, they are vulnerable – their numbers are relatively small, so disease or human hunters can wipe them out.”（作为大型捕食者，它们很脆弱，数量本就不多，疾病或人类猎杀都可能让它们灭绝），随后给出结果：“The result is that the sea urchin population grows unchecked, and they roam the seafloor eating young kelp fronds.”（结果海胆种群不受控制地增长，它们在海底游荡，啃食幼嫩的海带叶），最终导致海带长不长、森林无法形成，对生物多样性造成巨大影响。summary 的三处对应关系是：the decline in the number of sea otters 对 the sea otter population declines；leads to 对 The result is that；the boom 对 grows unchecked。可见空格指向海胆，答案取复数形式 sea urchins。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "An impressive case is that imported 11 ________ successfully tackles the plant cacti in 12 ________.",
          "translation": "一个引人注目的案例是，被引入的 ________ 在 ________ 成功地治理了仙人掌这种植物。",
          "answer": "cactus moth",
          "wordClass": "名词短语（表示昆虫名称，作 that 从句的主语，imported 为定语修饰该名词；原文用单数形式 The cactus moth，答案照原文写 cactus moth）",
          "locating": {
            "paragraph": "G",
            "quote": "The cactus moth, whose caterpillar is a voracious eater of prickly pear, was introduced to Australia to control the rampant cacti."
          },
          "synonyms": [
            "“imported” 同义替换为原文的 “was introduced to”（被引入到）",
            "“tackles the plant cacti” 同义替换为原文的 “to control the rampant cacti”（控制疯长的仙人掌）",
            "“successfully” 对应原文紧随其后的 “It was so successful that …” 以及 “It solved the cactus menace”"
          ],
          "locatingTip": "定位：题干关键词是 imported 与 the plant cacti（仙人掌），全文只有第 G 段讲仙人掌蛾治仙人掌，段首即出现 “The cactus moth … was introduced to Australia to control the rampant cacti”，一步锁定。确定答案技巧：题干把原文的主动句 “The cactus moth … was introduced to Australia” 改写成被动式 “imported [11] … in [12]”，其中 imported 对应 was introduced to，动作的承受者（被引入者）是 The cactus moth，地点状语是 Australia，因此空格 11 填 cactus moth。判断时要注意 cactus moth 是一个整体名词短语，不能只写 moth（会丢失“仙人掌”这一限定成分），也不能写成 caterpillars——原文虽说其幼虫是贪婪的取食者，但被引入的是蛾本身。",
          "analysis": "第 G 段开头：“The cactus moth, whose caterpillar is a voracious eater of prickly pear, was introduced to Australia to control the rampant cacti.”（仙人掌蛾的幼虫贪婪地取食仙人掌，它被引入澳大利亚以控制疯长的仙人掌）。题干用 “An impressive case is that imported [11] successfully tackles the plant cacti in [12]” 复述这一事件：imported 是 was introduced to 的被动改写，tackles the plant cacti 是 to control the rampant cacti 的同义改写，而 successfully 的依据是原文紧接着的 “It was so successful that someone thought it would be a good idea to introduce it to Caribbean islands”（它如此成功，以至于有人想把它引入加勒比岛屿）。被动句 “imported [11]” 中，空格承担的是动作承受者，即原文主句主语 The cactus moth；故答案是 cactus moth。词性为名词短语，共两个词，符合 NO MORE THAN TWO WORDS 的限制。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "An impressive case is that imported 11 ________ successfully tackles the plant cacti in 12 ________.",
          "translation": "一个引人注目的案例是，被引入的 ________ 在 ________ 成功地治理了仙人掌这种植物。",
          "answer": "Australia",
          "wordClass": "专有名词（国家名，作介词 in 的宾语，表示事件发生的地点；首字母必须大写）",
          "locating": {
            "paragraph": "G",
            "quote": "The cactus moth, whose caterpillar is a voracious eater of prickly pear, was introduced to Australia to control the rampant cacti."
          },
          "synonyms": [
            "“in [12]” 同义替换为原文的 “was introduced to Australia”，介词 to 后的地点即事件发生地",
            "“successfully tackles the plant cacti” 同义替换为原文的 “to control the rampant cacti” 加 “It was so successful”",
            "“imported cactus moth” 同义替换为原文的 “The cactus moth … was introduced”"
          ],
          "locatingTip": "定位：与第 11 题同一句，关键词仍是 cactus moth 与 cacti，落在第 G 段首句，可直接从该句读答案。确定答案技巧：题干问“在哪儿成功治理了仙人掌”，原文首句是被动结构 “was introduced to Australia to control the rampant cacti”，介词 to 引出被引入的地点 Australia；后文还说 “It solved the cactus menace”，即在该地确实控制住了仙人掌之害。答题时注意三点：①只需填一个国家名，不写 “Australia and Caribbean islands”（超出两词限制，且加勒比岛屿是其后的第二次引入）；②首字母大写 Australia；③不要与第 5 题的美国混淆——美国是仙人掌蛾后来造成破坏的地方，不是成功案例发生地。",
          "analysis": "第 G 段首句：“The cactus moth, whose caterpillar is a voracious eater of prickly pear, was introduced to Australia to control the rampant cacti.”（仙人掌蛾的幼虫贪婪地取食仙人掌，它被引入澳大利亚以控制疯长的仙人掌）。此句中 was introduced to 表示被引入的目的地，即事件发生的地点 Australia；随后原文用 “It was so successful” 与 “It solved the cactus menace” 确认这一措施在当地获得了成功，与题干的 successfully tackles the plant cacti 相对应。需要注意的是，段落后半部分又提到把蛾子引入加勒比岛屿（Caribbean islands），并最终流入美国本土造成灾害，但 summary 句子只说“被引入的仙人掌蛾在某地成功治理仙人掌”，对应的正是首句中的 Australia。词性上，空格位于介词 in 之后，需要一个地点名词，答案填 Australia，首字母大写。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "However, the operation is needed for the government to increase its financial support in 13 ________.",
          "translation": "然而，这一行动需要政府在 ________ 方面加大资金支持。",
          "answer": "public education",
          "wordClass": "名词短语（介词 in 后的名词性成分，作介词 in 的宾语，表示政府增加财政支持所投入的领域；public 为形容词作定语修饰 education，共两个词）",
          "locating": {
            "paragraph": "J",
            "quote": "Action at a national level often means investing in public education and awareness."
          },
          "synonyms": [
            "“the government” 同义替换为原文的 “at a national level”（在国家层面，即政府层面）",
            "“increase its financial support in” 同义替换为原文的 “investing in”（投资、投入资金）",
            "“the operation” 同义替换为原文的 “Action”（所采取的行动）"
          ],
          "locatingTip": "定位：summary 最后一句出现 government 与 financial support 这类关键词，回到原文找讲“国家层面行动、投入资金”的段落，即第 J 段首句 “Action at a national level often means investing in public education and awareness.”。确定答案技巧：题干用被动式 “the government to increase its financial support in [13]” 转述原文的 “Action at a national level often means investing in …”，其中 at a national level 对应 the government，investing in 对应 increase its financial support in，因此空格要填的是投资的对象。原文该句的宾语是 “public education and awareness”，在 NO MORE THAN TWO WORDS 的限制下取核心名词短语 public education（两个词）即可；awareness 与 education 并列且由 and 连接，超出词数上限，不应一并填入。",
          "analysis": "第 J 段讲国家层面的行动：“Action at a national level often means investing in public education and awareness.”（国家层面的行动往往意味着投资于公众教育与公众意识）。随后原文进一步说明让普通人参与的作用（Getting people like you and me involved can be very effective），并以澳大利亚和许多欧洲国家高效回收生活垃圾为例，说明这既能保护自然资源、减少化石燃料使用，又能通过减少污染直接有利于生物多样性。summary 的对应链条是：the operation 对应 Action；the government 对应 at a national level；increase its financial support 对应 investing in；空格则是投资的具体领域，即 public education。从词性看，in 是介词，后面需要名词性成分，public 作定语修饰不可数名词 education，答案是 public education 这一两词短语。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
