(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1046", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1046",
  "meta": {
    "examId": "p1-high-1046",
    "title": "Antarctica – in from the cold? 南极洲——走出寒冷？",
    "category": "P1",
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
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "The example of research on weather prediction on agriculture",
          "translation": "天气预报服务于农业的研究实例。",
          "answer": "D",
          "wordClass": "",
          "synonyms": [
            "“weather prediction” 同义替换为原文的 “predictor of rainfall”，即用海洋温度来预测降雨",
            "“on agriculture” 对应原文的 “graziers in northern Queensland”（昆士兰北部的牧畜业者）与 “pasture degradation”（草场退化），都是农业生产的具体环节",
            "“The example of research” 同义替换为原文的 “Recent work is showing that …”，Recent work 指最新研究，其后澳大利亚牧场的案例正是那个 example"
          ],
          "locatingTip": "定位：题干是抽象概括，没有专有名词可用，所以采取“词场扫读”策略，在各段里搜索 weather、rainfall、prediction、agriculture 一类词。A 段讲旧时代对南极的印象，B 段讲认知转变与南极的全球地位，C 段讲大陆解体与冰川形成，E 段讲海冰与磷虾，F 段讲大洋环流，只有 D 段连续出现 predictor of rainfall、graziers、pasture。确定答案技巧：找到 D 段后必须核对“研究”与“农业”两个要素是否同时出现——“Recent work is showing that …”提供研究要素，“graziers in northern Queensland are able to avoid overstocking”提供农业生产要素，两者在同一段内紧密衔接，因此答案是 D。",
          "analysis": "D 段先写南极的极端环境向全球输送强大的力量，随后落到农业案例：“Recent work is showing that the temperature of the ocean may be a better predictor of rainfall in Australia than the pressure difference between Darwin and Tahiti – the Southern Oscillation Index. By receiving more accurate predictions, graziers in northern Queensland are able to avoid overstocking in years when rainfall will be poor. Not only does this limit their losses but it prevents serious pasture degradation that may take decades to repair.”（最新研究表明，海洋温度比达尔文与塔希提之间的气压差——即南方涛动指数——更能预测澳大利亚的降雨。有了更准确的预测，昆士兰北部的牧场主就能在降雨稀少的年份避免过度放牧。这不仅减少了他们的损失，还防止了可能需要数十年才能修复的严重草场退化。）题干要求找出“天气预报用于农业的研究实例”，对应的正是这段：海洋温度预测降雨属于气象研究，牧场主据此调整放牧规模属于农业生产应用，Recent work 是“研究”，graziers 与 pasture 是“农业”，要素齐备，故答案为 D。",
          "traps": [
            "为什么不是 B：B 段虽然结论性地说明南极的巨大质量与低温对气候和洋流影响重大，但通篇是宏观判断，没有出现任何天气预测或农业生产的实例。",
            "为什么不是 F：F 段讲的是全球大洋传送带、海冰被风剥离与海水变咸下沉，全段没有 rainfall、forecast 或农业相关词，与题干无交点。",
            "为什么不是 C：C 段有 prevailing westerly winds 这样看似与“天气”相关的词，但它讲的是西风驱动环极洋流、导致南极变冷的地质过程，与预测天气、服务农业无关。"
          ],
          "locating": {
            "paragraph": "4",
            "quote": "Recent work is showing that the temperature of the ocean may be a better predictor of rainfall in Australia than the pressure difference between Darwin and Tahiti – the Southern Oscillation Index."
          }
        },
        {
          "questionId": "q15",
          "questionNumber": 15,
          "stem": "Antarctic sea ice brings life back to the world oceans' vitality.",
          "translation": "南极海冰让世界海洋重获生机与活力。",
          "answer": "F",
          "wordClass": "",
          "synonyms": [
            "“brings life back to the world oceans' vitality” 同义替换为原文的 “reoxygenates and revitalises the ocean”，revitalise 即“使恢复生机与活力”",
            "“the world oceans” 对应原文的 “well into the northern hemisphere”，说明这种增氧作用一路影响到北半球，覆盖全球海洋",
            "“Antarctic sea ice” 在原文中体现为一条因果链：只有淡水结成海冰，剩余海水变咸变密而下沉，再由 “Cold water carries more oxygen than warm water” 引出海水上涌时给海洋增氧的结果"
          ],
          "locatingTip": "定位：题干的关键词 vitality（活力）与 oceans 都是抽象词，直接扫读找描写“海洋恢复活力”的动词，revitalise、reoxygenate 这类词在全文只出现在 F 段（该段倒数第二句），一步锁定。确定答案技巧：本题最大的干扰来自 E 段——E 段同样大量讲海冰，但落点是磷虾繁殖与鲸、海鸟的觅食；题干强调“把生命力带回世界各大洋”，与 F 段 “it rises, well into the northern hemisphere, it reoxygenates and revitalises the ocean” 精确对应，因此答案是 F。遇到同一个名词在多个段落出现时，要盯住题干真正的谓语含义，而不是那个重复出现的名词。",
          "analysis": "F 段在讲完全球大洋传送带的构成后写道：“Since only freshwater freezes into ice, the water that remains becomes increasingly salty and dense, sinking until it spills over the continental shelf. Cold water carries more oxygen than warm water, so when it rises, well into the northern hemisphere, it reoxygenates and revitalises the ocean.”（由于只有淡水会结成冰，剩下的海水越来越咸、越来越密，下沉直至越出大陆架。冷水比温水携带更多氧气，因此当它上涌、一路进入北半球时，就为海洋重新补充氧气、使其恢复活力。）这里的因果链条与题干完全吻合：海冰形成使海水变咸变密并下沉，下沉的冷水携带更多氧气，上涌时把氧带回大洋，于是“世界大洋重获生机”。题干把 revitalises the ocean 改写成 brings life back to the world oceans' vitality，属于同义改写，故答案为 F。另外本段末句 “The state of the northern oceans and their biological productivity owe much to what happens in the Antarctic.” 也再次确认南极海冰的作用波及全球各大洋。",
          "traps": [
            "为什么不是 E：E 段虽然以海冰为主题，但讲的是海冰范围影响磷虾繁殖、进而影响鲸与海鸟的数量，落点是食物链与动物生存，不是“让海洋恢复活力”。",
            "为什么不是 D：D 段讨论南极沿岸的低压涡旋、南大洋风浪与澳大利亚的降雨预测，虽然提到海，但没有任何关于含氧量或海洋生命力恢复的论述。"
          ],
          "locating": {
            "paragraph": "6",
            "quote": "Cold water carries more oxygen than warm water, so when it rises, well into the northern hemisphere, it reoxygenates and revitalises the ocean."
          }
        },
        {
          "questionId": "q16",
          "questionNumber": 16,
          "stem": "A food chain that influences the animals living pattern based on Antarctic fresh sea ice",
          "translation": "一条以南极新形成的海冰为基础、进而影响动物生存方式的食物链。",
          "answer": "E",
          "wordClass": "",
          "synonyms": [
            "“fresh sea ice” 对应原文的 “sea ice is extensive”，即新结成的海冰范围广阔的年份",
            "“a food chain” 同义替换为原文的 “the staple diet for baleen whales, penguins, some seals, flighted sea birds and many fish”，磷虾作为共同主食把整条食物链串起来",
            "“influences the animals living pattern” 同义替换为原文的 “Many species of baleen whales and flighted sea birds migrate between the hemispheres and when the krill are less abundant they do not thrive”，即食物多少改变动物的迁徙与繁衍状态"
          ],
          "locatingTip": "定位：题干的主题词是 food chain 与 animals，扫读时盯住动物名或摄食关系词，全文只有 E 段密集出现 krill、baleen whales、penguins、seals、flighted sea birds、fish。确定答案技巧：判断标准是“海冰—食物—动物”三者是否构成一条因果链。E 段先说磷虾在海冰广阔的年景繁殖好、海冰不足时繁殖差，紧接着说明鲸类和海鸟随磷虾多少而迁徙或不兴旺，正是题干所说的那条以海冰为基础的食物链，故选 E。",
          "analysis": "E 段先交代海冰的物理作用，随后转入生态链条：“Antarctic krill – the small shrimp-like crustaceans that are the staple diet for baleen whales, penguins, some seals, flighted sea birds and many fish – breed well in years when sea ice is extensive and poorly when it is not. Many species of baleen whales and flighted sea birds migrate between the hemispheres and when the krill are less abundant they do not thrive.”（南极磷虾——这些形似小虾的小型甲壳动物，是须鲸、企鹅、部分海豹、会飞的海鸟和许多鱼类的主食——在海冰广阔的年份繁殖得好，海冰不足时则繁殖很差。许多种须鲸和会飞的海鸟在南北半球之间迁徙，磷虾较少时它们就不兴旺。）把两句连起来就是一条完整的食物链：新形成的海冰决定磷虾（食物源）的丰寡，磷虾又决定鲸与海鸟的迁徙和繁殖状况，正对应题干的 “A food chain that influences the animals living pattern based on Antarctic fresh sea ice”，因此答案是 E。",
          "traps": [
            "为什么不是 F：F 段确实出现了 “as fresh sea ice forms”，但那一句讲的是新海冰被风剥离并吹离、海水因此变咸下沉的物理过程，服务于大洋环流，与食物链无关。",
            "为什么不是 D：D 段虽提到低气压涡旋与南大洋的狂风巨浪，通篇没有食物链或动物摄食的内容。"
          ],
          "locating": {
            "paragraph": "5",
            "quote": "Antarctic krill – the small shrimp-like crustaceans that are the staple diet for baleen whales, penguins, some seals, flighted sea birds and many fish – breed well in years when sea ice is extensive and poorly when it is not."
          }
        },
        {
          "questionId": "q17",
          "questionNumber": 17,
          "stem": "The explanation of how atmosphere pressure above Antarctica can impose an effect on global climate change",
          "translation": "关于南极上空气压如何对全球气候变化产生影响的解释。",
          "answer": "D",
          "wordClass": "",
          "synonyms": [
            "“atmosphere pressure above Antarctica” 同义替换为原文的 “cells of low pressure off the Antarctic coast”，即南极大地沿岸上空生成的低气压涡旋",
            "“impose an effect on global climate change” 同义替换为原文的 “some powerful forces that reverberate around the world”，reverberate 表示影响一路扩散到全球",
            "“The explanation of how” 对应本段随后的层层展开：cells grow and deepen、whipping up the Southern Ocean，逐步解释这些力量怎样影响南半球乃至全球的气候与海况"
          ],
          "locatingTip": "定位：题干的关键词是 atmosphere pressure，回原文找气压或低压系统的表述，A 段谈旧印象、B 段谈认知转变、C 段谈地质与变冷过程、E 段谈海冰与磷虾、F 段谈大洋环流，只有 D 段首两句以 low pressure 与 powerful forces 切入。确定答案技巧：题干问的是“气压如何影响全球”，所以定位句必须同时含气压来源与全球性影响。D 段先用 “some powerful forces that reverberate around the world” 点明影响的全球性，再以 “cells of low pressure off the Antarctic coast” 交代气压这一来源，后文继续说明这些涡旋如何加深、搅动南大洋，构成完整解释，故答案是 D。",
          "analysis": "D 段开篇即写：“Out of this extreme environment come some powerful forces that reverberate around the world. The Earth's rotation, coupled with the generation of cells of low pressure off the Antarctic coast, would allow Astronauts a view of Antarctica that is as beautiful as it is awesome. Spinning away to the northeast, the cells grow and deepen, whipping up the Southern Ocean into the mountainous seas so respected by mariners.”（从这一极端环境中产生出一些在全球回响的强大力量。地球自转，加上南极沿岸生成的低气压涡旋，会使宇航员看到既壮美又令人敬畏的南极景象。这些涡旋向东北方旋转而去，不断生成、加深，把南大洋搅成水手们敬畏的高山般巨浪。）这段正是题干所说的“解释”：气压来源是南极沿岸的低压涡旋，影响机制是它们向东北加深并搅动南大洋，而 reverberate around the world 点明其影响波及全球气候系统，因此答案是 D。",
          "traps": [
            "为什么不是 B：B 段虽说 “Antarctica's great mass and low temperature exert a major influence on climate”，但影响源是质量与低温，不是气压（pressure），与题干问的气压机制不符。",
            "为什么不是 C：C 段出现 prevailing westerly winds（盛行西风），看似与大气相关，但全段讲的是冈瓦纳大陆解体、环极洋流形成与南极变冷的地质历史，没有南极上空气压影响全球气候的论述。"
          ],
          "locating": {
            "paragraph": "4",
            "quote": "Out of this extreme environment come some powerful forces that reverberate around the world. The Earth's rotation, coupled with the generation of cells of low pressure off the Antarctic coast, would allow Astronauts a view of Antarctica that is as beautiful as it is awesome."
          }
        },
        {
          "questionId": "q18",
          "questionNumber": 18,
          "stem": "Antarctica was once thought to be a forgotten and insignificant continent",
          "translation": "南极洲曾被看作一个被人遗忘、无足轻重的大陆。",
          "answer": "A",
          "wordClass": "",
          "synonyms": [
            "“insignificant” 同义替换为原文的 “with no apparent value to anyone”，即对任何人都没有明显的价值",
            "“forgotten” 同义替换为原文的 “removed from everyday reality”，即远离日常生活、被遗忘在现实之外",
            "“was once thought” 对应原文的 “they created an image of Antarctica that was to last well into the 20th century”，说明这是过去形成并流传很久的旧印象"
          ],
          "locatingTip": "定位：题干的关键词 forgotten、insignificant 都是评价性抽象词，可先扫读找 once、image、a century ago 一类时间标志。A 段首句 “A little over a century ago” 立刻把时间锁定在过去，整段讲的正是旧时代人们对南极的印象。确定答案技巧：A 段末句用两个并列的 of 结构一口气说清旧印象——“removed from everyday reality”（被遗忘在现实之外）与 “no apparent value to anyone”（对谁都没有价值），正好覆盖题干的 forgotten 与 insignificant；此外 B 段开头 “our perception of Antarctica has changed” 反向印证这种旧印象在 B 段已经被推翻，故答案为 A。",
          "analysis": "A 段写的是上世纪之交人们对南极的想象：“In the name of Empire and in an age of heroic deeds they created an image of Antarctica that was to last well into the 20th century – an image of remoteness, hardship, bleakness and isolation that was the province of only the most courageous of men. The image was one of a place removed from everyday reality, of a place with no apparent value to anyone.”（在帝国之名与英雄事迹的时代，他们塑造了一种一直延续到 20 世纪的南极形象——遥远、艰苦、荒凉、与世隔绝，只属于最勇敢的人。这一形象描绘的是一个远离日常现实的所在，一个对任何人都没有明显价值的地方。）题干说“南极一度被认为是一个被遗忘、无足轻重的大陆”，其中 forgotten 对应 removed from everyday reality，insignificant 对应 with no apparent value to anyone，两处同义替换一一对应，所以答案是 A。",
          "traps": [
            "为什么不是 B：B 段讲的是 21 世纪认知的转变，南极被视为地球系统中不可或缺的关键组成部分，方向与题干的“被遗忘、无足轻重”完全相反。",
            "为什么不是 C：C 段说 “Antarctica was not always cold”，讨论的是古气候与冰川形成过程，与人们对南极地位的评价无关。"
          ],
          "locating": {
            "paragraph": "1",
            "quote": "The image was one of a place removed from everyday reality, of a place with no apparent value to anyone."
          }
        }
      ]
    },
    {
      "sectionTitle": "Questions 19–21 摘要选词填空（Complete the summary using the list of words, A-F）",
      "mode": "per_question",
      "questionRange": {
        "start": 19,
        "end": 21
      },
      "items": [
        {
          "questionId": "q19",
          "questionNumber": 19,
          "stem": "Globally, Antarctica's mass, size and 19 __________ influence climate change.",
          "translation": "在全球范围内，南极洲的质量、体积和 ______ 共同影响着气候变化。",
          "answer": "D",
          "wordClass": "名词（不可数名词 temperature 温度；与 mass、size 并列作句子主语，故空格需要名词。本题为选词填空，答题卡只填字母，故答案是 D）",
          "synonyms": [
            "“mass” 对应原文的 “great mass”（巨大的质量），题干另加了 size，是对南极“庞大体积”的补充概括",
            "“and 19 …” 同义替换为原文的 “and low temperature”，空格要填的正是与 mass 并列的第二项——温度",
            "“influence climate change” 同义替换为原文的 “exert a major influence on climate and ocean circulation”"
          ],
          "locatingTip": "定位：题干句与 B 段末句的句式高度重合（Antarctica 的 mass 与 influence on climate），回原文找 Antarctica's great mass 即可直接跳到 B 段最后一句。确定答案技巧：原文用 “great mass and low temperature” 并列说明影响气候的两大因素，题干已经把 mass 与 size 写出，空格处剩下的就是与它们并列的 temperature；在 A-F 中 temperature 对应字母 D，故选 D。注意不要把 F（pressure）填进来——气压差是 D 段讨论南方涛动指数的概念，与本题“质量、体积与某项性质共同影响气候”的并列结构不搭。",
          "analysis": "B 段末句是本题的答案依据：“Scientific research during the past half-century has revealed – and continues to reveal – that Antarctica's great mass and low temperature exert a major influence on climate and ocean circulation, factors which influence the lives of millions of people all over the globe.”（过去半个世纪的科学研究已经揭示、并且仍在揭示：南极巨大的质量和低温对气候与海洋环流有重大影响，而这些因素又影响着全球数百万人的生活。）题干把 exert a major influence on climate 概括为 influence climate change，并把原文的并列成分 great mass 与 low temperature 写成 mass, size and 19，其中 size 是对 great mass 的补充描述，空格对应 temperature，选项 D 为 temperature，故答案为 D。从词性看，空格与 mass、size 并列，需要名词，temperature 是不可数名词，恰好符合。",
          "traps": [
            "为什么不是 E（glaciers）：原文把影响因素明确限定为“巨大的质量与低温”，并未把冰川列为并列要素；冰川是 C 段描述南极现状的内容，与本题的因果关系无关。",
            "为什么不是 F（pressure）：pressure 是 D 段解释南方涛动指数时使用的概念（气压差用于预测降雨），与句首 mass、size 的并列语义不相匹配。"
          ],
          "locating": {
            "paragraph": "2",
            "quote": "Scientific research during the past half-century has revealed – and continues to reveal – that Antarctica's great mass and low temperature exert a major influence on climate and ocean circulation, factors which influence the lives of millions of people all over the globe."
          }
        },
        {
          "questionId": "q20",
          "questionNumber": 20,
          "stem": "The 20 __________, contributory to western winds, flows around the continent.",
          "translation": "受盛行西风驱动、环绕南极大陆流动的是 ______。",
          "answer": "A",
          "wordClass": "专有名词（洋流名称 Antarctic Circumpolar Current，缩写 ACC；在句中作主语，与谓语 flows 搭配。选词填空需填字母，故答案是 A）",
          "synonyms": [
            "“flows around the continent” 同义替换为原文的 “flowed from west to east under the influence of the prevailing westerly winds”，并呼应 “created enough space around Antarctica”",
            "“contributory to western winds” 对应原文的 “under the influence of the prevailing westerly winds”，即由盛行西风驱动而行",
            "“The 20 …” 的答案就是原文的同位语成分 “an Antarctic Circumpolar Current (ACC)”"
          ],
          "locatingTip": "定位：题干的 western winds（西风）与 flows around the continent（环绕大陆流动）指向 C 段中的 prevailing westerly winds，扫到 westerly winds 即可停下精读。确定答案技巧：原文给出的“在西风影响下自西向东流动”的水体只有一个，就是 Antarctic Circumpolar Current (ACC)，而且它恰好是在环南极的空间里发育起来的；另外 F 段还补了一句 “The ACC is the longest current in the world and has the largest flow.” 可用来交叉验证 ACC 的唯一性。在 A-F 中 ACC 对应字母 A，所以答案是 A。",
          "analysis": "C 段交代环极洋流的形成：“The slow break-up of the super-continent Gondwana with the northward movements of Africa, South America, India and Australia eventually created enough space around Antarctica for the development of an Antarctic Circumpolar Current (ACC), that flowed from west to east under the influence of the prevailing westerly winds.”（随着冈瓦纳超级大陆缓慢解体，非洲、南美洲、印度和澳大利亚向北漂移，南极周围终于腾出了足够的空间，使南极环极洋流（ACC）得以发育，它在盛行西风的影响下自西向东流动。）题干把 flows from west to east under the influence of the prevailing westerly winds 改写成 contributory to western winds, flows around the continent，主语正是 ACC；F 段又说 “The ACC is the longest current in the world and has the largest flow.”，再次确认这个环绕大陆流动的洋流身份。因此空格填 A。",
          "traps": [
            "为什么不是 B（katabatic winds）：原文中的 katabatic wind 是“呼号着掠过冰盖并吹向大海”的下降风（C 段末与 F 段），它是气流而不是水体，不能与 flows around the continent 的主语搭配。",
            "为什么不是 F（pressure）：pressure 指气压差，属 D 段南方涛动指数的内容，气压不会“环绕大陆流动”，与谓语 flows 主谓不搭。"
          ],
          "locating": {
            "paragraph": "3",
            "quote": "The slow break-up of the super-continent Gondwana with the northward movements of Africa, South America, India and Australia eventually created enough space around Antarctica for the development of an Antarctic Circumpolar Current (ACC), that flowed from west to east under the influence of the prevailing westerly winds."
          }
        },
        {
          "questionId": "q21",
          "questionNumber": 21,
          "stem": "In addition, the Southern Oscillation Index based on air pressure can predict 21 __________ in Australia.",
          "translation": "此外，基于气压的南方涛动指数能预测澳大利亚的 ______。",
          "answer": "C",
          "wordClass": "名词（不可数名词 rainfall 降雨；作动词 predict 的宾语，回答“预测什么”这一问题。选词填空填字母，故答案是 C）",
          "synonyms": [
            "“the Southern Oscillation Index based on air pressure” 同义替换为原文的 “the pressure difference between Darwin and Tahiti – the Southern Oscillation Index”（以气压差为基础的指数）",
            "“can predict 21 … in Australia” 同义替换为原文的 “a better predictor of rainfall in Australia”，predictor 与 predict 同根，预测对象是 rainfall",
            "空格答案 rainfall 对应选项字母 C"
          ],
          "locatingTip": "定位：题干有两个极佳的定位词——专有名词 Southern Oscillation Index 与国名 Australia，二者在 D 段同一句出现，直接跳到 “Recent work is showing that the temperature of the ocean may be a better predictor of rainfall in Australia than the pressure difference between Darwin and Tahiti – the Southern Oscillation Index.” 即可。确定答案技巧：原文用比较结构说明海温与气压差哪一个更能预测“降雨”，紧随其后的 “graziers … are able to avoid overstocking in years when rainfall will be poor” 又把降雨作为核心变量反复提到，可见被预测的对象是降雨；在 A-F 中 rainfall 对应字母 C，故选 C。切勿因为题干出现 air pressure 就误选 F.pressure，气压只是预测的依据，不是被预测的结果。",
          "analysis": "D 段的判断句是本题答案出处：“Recent work is showing that the temperature of the ocean may be a better predictor of rainfall in Australia than the pressure difference between Darwin and Tahiti – the Southern Oscillation Index. By receiving more accurate predictions, graziers in northern Queensland are able to avoid overstocking in years when rainfall will be poor.”（最新研究表明，海洋温度可能比达尔文与塔希提之间的气压差——南方涛动指数——更能预测澳大利亚的降雨。有了更准确的预测，昆士兰北部的牧场主就能在降雨稀少的年份避免过度放牧。）题干把原文拆成两半：based on air pressure 对应 the pressure difference between Darwin and Tahiti，可以预测的内容则对应原文的 rainfall，即选项 C。这道题的干扰在于原文那句里 rainfall 与 pressure difference 同时出现，必须分清谁是被预测的结果（rainfall）、谁是预测的依据（气压差）。",
          "traps": [
            "为什么不是 F（pressure）：pressure 在原文中是被拿来与海温比较的“另一种预测依据”，题干问的是被预测的对象，填 pressure 就把依据当成了结果，语义倒置。",
            "为什么不是 D（temperature）：temperature 在同一句里作为“更好的预测者”出现，属于预测工具；而且温度已在第 19 题中用过，本题的空格对应的是降雨。"
          ],
          "locating": {
            "paragraph": "4",
            "quote": "the temperature of the ocean may be a better predictor of rainfall in Australia than the pressure difference between Darwin and Tahiti – the Southern Oscillation Index."
          }
        }
      ]
    },
    {
      "sectionTitle": "Questions 22–26 单项选择题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 22,
        "end": 26
      },
      "items": [
        {
          "questionId": "q22",
          "questionNumber": 22,
          "stem": "In paragraph B, the author wants to convey which of the following truths about the Antarctic?",
          "translation": "在 B 段中，作者想传达下列关于南极洲的哪一项事实？",
          "answer": "C",
          "wordClass": "",
          "synonyms": [
            "“it is the heart” 同义替换为原文的 “a key component in the Earth System”，即地球系统中的关键一环",
            "“its significance to the global climate and current” 同义替换为原文的 “exert a major influence on climate and ocean circulation, factors which influence the lives of millions of people all over the globe”",
            "“the author wants to convey … truths” 对应原文的 “our perception of Antarctica has changed”，B 段整体就是修正旧印象、说明南极的关键地位"
          ],
          "locatingTip": "定位：题干已把范围限定为 “In paragraph B”，不必通读全篇，只需精读 B 段再逐项核对选项。确定答案技巧：B 段的结构是先让步后转折——先用 although 承认南极并没有变得更近更暖，再用 the continent … are increasingly seen to be an integral part of Planet Earth, and a key component in the Earth System 给出主旨，最后以科学研究的结论（巨大质量与低温左右气候和洋流、影响全球数百万人的生活）作为支撑。把这一层意思概括起来就是“南极处于核心地位、对全球气候与洋流意义重大”，与 C 项吻合。",
          "analysis": "B 段的主干句为：“Although physically Antarctica is no closer and probably no warmer, and to spend time there still demands a dedication not seen in ordinary life, the continent and its surrounding ocean are increasingly seen to be an integral part of Planet Earth, and a key component in the Earth System.”（尽管南极在距离上并没有更近、气温大概也没有更高，要在那里停留仍然需要日常生活中罕见的付出，但南极大陆及其周边海洋越来越被视为地球不可分割的一部分、地球系统中的关键要素。）紧接着的科学研究结论进一步说明它 “exert a major influence on climate and ocean circulation, factors which influence the lives of millions of people all over the globe”。题干问“作者想传达关于南极的哪一项事实”，四个选项中只有 C 项（南极居于核心地位，对全球气候与洋流意义重大）与这两句完全咬合：the heart 对应 a key component，significance to the global climate and current 对应 influence on climate and ocean circulation。A、B、D 三项分别是无中生有、张冠李戴和把修辞当事实。",
          "traps": [
            "A 项错：B 段完全没有提到媒体或“全球变暖的中心话题”，global warming 一词在全文都没有作为 B 段论点出现，属于无中生有。",
            "B 项错：B 段说的是南极影响 climate、ocean circulation 以及数百万人的生活，并没有“巨大的海冰为世界各地的数百万人带来食物”这一说法；海冰与食物（磷虾）的关系在 E 段，与 B 段主旨无关。",
            "D 项错：D 项把 B 段的修辞性反问句 “is it because Antarctica really does occupy a central spot on Earth's mantle?” 误读成地理位置的事实陈述。作者用问句形式否定这种可能，真正的落点是它在科学与气候意义上的关键地位。"
          ],
          "locating": {
            "paragraph": "2",
            "quote": "the continent and its surrounding ocean are increasingly seen to be an integral part of Planet Earth, and a key component in the Earth System."
          }
        },
        {
          "questionId": "q23",
          "questionNumber": 23,
          "stem": "Why do Australian farmers keep an eye on the Antarctic ocean temperature?",
          "translation": "为什么澳大利亚的农民会关注南极海洋的温度？",
          "answer": "A",
          "wordClass": "",
          "synonyms": [
            "“Australian farmers” 同义替换为原文的 “graziers in northern Queensland”（昆士兰北部的畜牧场主）",
            "“keep an eye on the Antarctic ocean temperature” 对应原文上一句的 “the temperature of the ocean may be a better predictor of rainfall in Australia”",
            "“reduce their economic or ecological losses” 同义替换为原文的 “limit their losses”（经济损失）与 “prevents serious pasture degradation”（生态损失），原文用 Not only … but … 把两方面并列"
          ],
          "locatingTip": "定位：题干的关键信息是 Australian farmers 与 ocean temperature，回原文找农业从业者或农事相关名词，D 段出现 “graziers in northern Queensland”，一步锁定本段。确定答案技巧：题目问“为什么关注”，必须找表示目的或结果的句子。原文说牧场主借助更准确的预测在旱年避免过度放牧，随后用 “Not only does this limit their losses but it prevents serious pasture degradation” 说明这样做带来两方面好处——既减少经济损失，又防止草场退化（生态损失），与 A 项的 economic or ecological losses 完全对应，故选 A。",
          "analysis": "D 段的因果表述是本题的落脚点：“By receiving more accurate predictions, graziers in northern Queensland are able to avoid overstocking in years when rainfall will be poor. Not only does this limit their losses but it prevents serious pasture degradation that may take decades to repair.”（由于能得到更准确的预测，昆士兰北部的牧场主就能在降雨稀少的年份避免过度放牧。这不仅减少了他们的损失，还防止了可能需要数十年才能修复的严重草场退化。）牧场主关注海洋温度，是因为海洋温度比气压差更能预测本地降雨（上一句），而知道降雨情况可以让他们调整放牧量；带来的结果是损失减少与草场得到保护，即经济与生态两方面受益，正好对应 A 项。B、C、D 三项都属于把常识或无关信息塞进原文。",
          "traps": [
            "B 项错：原文说的是 prevent serious pasture degradation（预防草场退化），而不是“把已经因过度放牧而退化的草地恢复过来”；retrieve（挽回已经失去的）与原文的预防含义不符。",
            "C 项错：文中牧民的收益被概括为减少损失和防止草场退化，完全没有“防止牲畜死亡”这一层内容，属于借常识补足的无据推断。",
            "D 项错：D 项把 cells 曲解成给草场提供肥料的物质。原文的 cells 是气象术语，指南极沿岸生成的低压涡旋，“提供肥料”纯属无中生有。"
          ],
          "locating": {
            "paragraph": "4",
            "quote": "By receiving more accurate predictions, graziers in northern Queensland are able to avoid overstocking in years when rainfall will be poor. Not only does this limit their losses but it prevents serious pasture degradation that may take decades to repair."
          }
        },
        {
          "questionId": "q24",
          "questionNumber": 24,
          "stem": "How do katabatic winds directly affect the freshly formed sea ice?",
          "translation": "下降风（katabatic winds）是如何直接影响新形成的海冰的？",
          "answer": "C",
          "wordClass": "",
          "synonyms": [
            "“katabatic winds” 对应 F 段的 “the howling katabatics”，并与 C 段末的 “the so-called katabatic wind” 呼应",
            "“freshly formed sea ice” 同义替换为原文的 “as fresh sea ice forms”",
            "“continuously strip it away and blow it out to sea” 同义替换为原文的 “it is continuously stripped away by the wind and may be blown up to 90km in a single day”"
          ],
          "locatingTip": "定位：题干有两个好用的定位词——katabatic winds 与 sea ice。要特别注意 katabatic 在文中共出现两处：C 段末只是给它下定义（“the so-called katabatic wind”），F 段则以 “the howling katabatics” 把它与新海冰的命运联系起来，因此应锁定 F 段而非 C 段。确定答案技巧：题干问“直接影响”，回原文找下降风作施动者、海冰作受动者的句子：F 段说明新海冰一旦形成就被风不断剥离，一天之内可被吹出 90 公里，正对应 C 项 continuously strip it away and blow it out to sea。",
          "analysis": "F 段的句子直接回答本题：“During winter, the howling katabatics sometimes scour the ice off patches of the sea's surface leaving large ice-locked lagoons, or ‘polynyas’. Recent research has shown that as fresh sea ice forms, it is continuously stripped away by the wind and may be blown up to 90km in a single day.”（冬季，呼啸的下降风有时会把一片片海面的冰刮走，留下大片被冰围住的潟湖，即“冰间湖”。最新研究显示，新海冰刚一形成就被风不断剥离，一天之内可能被吹出 90 公里。）题干问下降风如何“直接影响”新形成的海冰，答案就在 stripped away by the wind 与 blown up to 90km：冰被持续剥离并被吹走，即 C 项。C 段里的 katabatic wind 只是交代它能达到每小时 300 公里并造成风寒效应，属于对风的描述，不是它对海冰的作用，所以定位时要分辨这两处。",
          "traps": [
            "A 项错：原文把海冰的消失归因于被风剥离、被风吹走（stripped away、blown up to 90km），并没有提到风摩擦生热使冰融化，melting 属无中生有。",
            "B 项错：与原文方向相反。海冰是被风剥离并被吹离原地，而不是被堆积成巨大的陆架冰盖（continental sheets）。",
            "D 项错：原文说的是海水因只有淡水结冰而变得越来越咸、越来越密（increasingly salty and dense），密度升高的是海水本身，不是“冰下的淡水”，对象被偷换。"
          ],
          "locating": {
            "paragraph": "6",
            "quote": "Recent research has shown that as fresh sea ice forms, it is continuously stripped away by the wind and may be blown up to 90km in a single day."
          }
        },
        {
          "questionId": "q25",
          "questionNumber": 25,
          "stem": "The break of the continental shelf is due to the",
          "translation": "海水越过大陆架边缘（溢流出大陆架）是由……造成的",
          "answer": "A",
          "wordClass": "",
          "synonyms": [
            "“the break of the continental shelf” 对应原文的 “spills over the continental shelf”，指高密度海水越出大陆架边缘",
            "“Salt and density increase” 同义替换为原文的 “becomes increasingly salty and dense”",
            "“is due to” 对应原文的因果标记 “Since only freshwater freezes into ice”，该句解释了盐度与密度为何升高"
          ],
          "locatingTip": "定位：题干关键词 continental shelf 这个短语在全文只出现一次，位于 F 段后半部分，直接跳到该句即可。确定答案技巧：句子以 Since 开头交代因果——只有淡水会结成冰，剩下的海水就越来越咸、越来越密，密度增大后下沉并越出大陆架。可见推动海水越架的是盐度与密度的上升，对应 A 项。这里的 break 是“越出、突破边缘”的意思，不要理解成大陆架碎裂，否则容易跑去其他段落找地质内容。",
          "analysis": "F 段的句子解释了海水如何越出大陆架：“Since only freshwater freezes into ice, the water that remains becomes increasingly salty and dense, sinking until it spills over the continental shelf.”（由于只有淡水会结成冰，剩下的海水就变得越来越咸、越来越密，下沉直至越出大陆架。）题干用 is due to the 询问造成这一现象的原因，原文的因果链条清楚：只有淡水结冰（原因）使残余海水盐度与密度上升（结果一），进而下沉并越出大陆架（结果二）。A 项 Salt and density increase 正对应 becomes increasingly salty and dense，B 项方向相反，C、D 两项在原文都没有依据，故选 A。",
          "traps": [
            "B 项错：原文明确说海水 “becomes increasingly salty and dense”（越来越咸、越来越密），是升高而非降低，与 B 项方向相反。",
            "C 项错：原文把成因完全归于盐度与密度的变化，通篇没有提到全球变暖或温度上升导致越架，属于无中生有。",
            "D 项错：原文的因果与 D 项相反——只有淡水会冻成冰（only freshwater freezes into ice），水分被抽走后海水变咸变密并下沉，并不是“新冰融进海水”造成越架。"
          ],
          "locating": {
            "paragraph": "6",
            "quote": "Since only freshwater freezes into ice, the water that remains becomes increasingly salty and dense, sinking until it spills over the continental shelf."
          }
        },
        {
          "questionId": "q26",
          "questionNumber": 26,
          "stem": "The decrease in the number of Whales and seabirds is due to",
          "translation": "鲸与海鸟数量的减少是由于",
          "answer": "C",
          "wordClass": "",
          "synonyms": [
            "“the number of Whales and seabirds” 对应原文的 “Many species of baleen whales and flighted sea birds” 以及 “baleen whales, penguins, some seals, flighted sea birds”",
            "“food source” 同义替换为原文的 “Antarctic krill”，并对应 “the staple diet for …”（主食）",
            "“Less sea ice reduces the productivity” 同义替换为原文的 “breed well in years when sea ice is extensive and poorly when it is not”（海冰不足时磷虾繁殖很差）与 “when the krill are less abundant they do not thrive”"
          ],
          "locatingTip": "定位：题干关键词是 whales、seabirds 与 decrease，扫读时找动物名称密集的段落，E 段集中出现 krill、baleen whales、penguins、seals、flighted sea birds，一步锁定。确定答案技巧：题目问“为什么减少”，必须找出从海冰到动物数量变化这条因果链。E 段写得很明确——海冰广阔时磷虾繁殖好，海冰不足时繁殖差；磷虾是这些动物的主食，磷虾减少时鲸和海鸟就 “do not thrive”。因此答案是“海冰减少使食物源（磷虾）产能下降，进而导致鲸与海鸟减少”，对应 C 项。",
          "analysis": "E 段的两句构成本题的完整证据链：“Antarctic krill – the small shrimp-like crustaceans that are the staple diet for baleen whales, penguins, some seals, flighted sea birds and many fish – breed well in years when sea ice is extensive and poorly when it is not. Many species of baleen whales and flighted sea birds migrate between the hemispheres and when the krill are less abundant they do not thrive.”（南极磷虾——须鲸、企鹅、部分海豹、会飞的海鸟和许多鱼类的主食——在海冰广阔的年份繁殖得好，海冰不足时繁殖很差。许多种须鲸和会飞的海鸟在南北半球之间迁徙，磷虾较少时它们就不兴旺。）题干说鲸与海鸟数量减少，原文的链条是：海冰减少导致磷虾（食物源）繁殖差、数量少，磷虾不足又使鲸与海鸟无法兴旺，即 C 项 “Less sea ice reduces the productivity of food source”。A、B、D 三项分别涉及虎鲸、海水盐度与海豹繁殖，均非原文所述原因。",
          "traps": [
            "A 项错：原文从未提到虎鲸（killer whales），也没有“虎鲸更活跃”导致鲸与海鸟减少的说法，属于无中生有。",
            "B 项错：原文把海鸟的处境归因于食物（磷虾）不足；盐度（salinity）在 F 段讨论海水下沉时才出现，与海鸟数量毫无关系，属于张冠李戴。",
            "D 项错：seals 只是作为磷虾的捕食者之一被提到一次，原文没有关于海豹繁殖（reproduce babies）的任何信息，更谈不上是鲸与海鸟减少的原因。"
          ],
          "locating": {
            "paragraph": "5",
            "quote": "Many species of baleen whales and flighted sea birds migrate between the hemispheres and when the krill are less abundant they do not thrive."
          }
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
