(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1348", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1348",
  "meta": {
    "examId": "p1-high-1348",
    "title": "Detection of a Meteorite Lake 发现陨石湖",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "With the investigation of the lake, the scientist may predict the climate changes in the future.",
          "translation": "通过对该湖的考察，科学家或许可以预测未来的气候变化。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "the lake holds an untapped reservoir of information that could help scientists predict future climate changes by looking at evidence from the past"
          },
          "synonyms": [
            "「may predict」同义替换为原文的「could help scientists predict」，could 与 may 都表示可能性",
            "「the climate changes in the future」同义替换为原文的「future climate changes」，原词组序调整但含义不变",
            "「With the investigation of the lake」同义替换为原文的「by looking at evidence from the past」以及语境中的「an untapped reservoir of information」，即通过考察湖中保存的过去证据"
          ],
          "locatingTip": "定位：题干的关键词是 predict、climate changes、future，这三个信息点在第 1 段第二句集中出现，而且该句还带有 scientists 一词，扫读时抓住 climate changes 就能一步锁定第 1 段。确定答案技巧：本题是典型的「可能性＋未来」判断题，判断点是原文用的是 could（能够、有可能）而不是 will（将会）。could help scientists predict 表达的是「有助于科学家预测」，是一种可靠的可行性陈述；题干把它说成 may predict（或许可以预测），可能性语气一致，并未夸大，因此判 TRUE。做这类题要特别注意情态动词：若原文说 could 而题干说 will／is able to，往往会被判 FALSE；本题两端都是推测语气，所以成立。",
          "analysis": "第 1 段铺垫研究背景：太阳升起在风景如画的博苏姆维湖（Lake Bosumtwi）上，锡拉丘兹大学的研究团队准备再用一整天操作先进设备帮助探测湖底（to help bottom）。第二句给出本段的核心理由：这座湖坐落于加纳腹地，蕴藏着一座尚未被开发的「信息宝库」（an untapped reservoir of information），它可以通过研究过去的证据，帮助科学家预测未来的气候变化（could help scientists predict future climate changes by looking at evidence from the past）。第三句补充，这些信息还会加深科学家对「遭受巨大陨石撞击的地区所发生的变化」的理解。题干所说「通过考察这座湖，科学家或许能够预测未来的气候变化」正是第二句的转述：investigation of the lake 对应 looking at evidence from the past／reservoir of information，may predict 对应 could help ... predict，the climate changes in the future 对应 future climate changes。三处对应严丝合缝，且语气同为推测，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确说湖中信息「could help scientists predict future climate changes」，即预测未来气候这一功能是被正面肯定了的，与题干完全同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文不仅有「预测」的表述，还交代了预测的方法（by looking at evidence from the past），信息完整具体，并非未提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The crater resulted from a meteorite impact is the largest and most preserved one in the world.",
          "translation": "由陨石撞击形成的这个陨石坑是世界上最大、保存最完好的一个。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The resulting crater is one of the largest and most well-preserved geologically young craters in the world"
          },
          "synonyms": [
            "「The crater resulted from a meteorite impact」同义替换为原文的「The resulting crater」，resulting 表示「由此产生的」，其来源即上句的「when a giant meteor crashed into the Earth's surface」",
            "「most preserved」同义替换为原文的「most well-preserved」，well-preserved 意为保存完好",
            "「the largest one in the world」与原文的「one of the largest ... craters in the world」存在数量范围上的差异：原文是「世界上最大的……之一」，题干改写为独一无二的最大者"
          ],
          "locatingTip": "定位：本段有三个强定位词——Lake Bosumtwi、1.1 million years ago、crater，其中 crater 首次出现即给出本题信息，锁定第 2 段第二句即可。确定答案技巧：判断题遇到 the largest／the most／the best 这类「绝对第一」的表述时，务必回原文核对是「唯一第一」还是「其中之一」。原文写的是 one of the largest and most well-preserved geologically young craters in the world，强调它是「世界上最大的、保存最完好的地质年轻陨石坑之一」，既限定了「之一」的范围，又附带了 geologically young（地质上年轻）这一限定；题干把这些限定全部去掉，直接宣称它是「世界上最大、保存最好的一个」。需要说明的是，题库给出的标准答案是 NOT GIVEN：因为「之一」并不排斥它恰好也是最大的那一个，原文并没有给出任何排名先后或「世界第一」的明确信息，这一层信息属于未提及，所以判 NOT GIVEN。",
          "analysis": "第 2 段交代研究项目的由来：该项目由文理学院地球科学教授 Christopher Scholz 主持、国家科学基金会（NSF）资助，是首次对博苏姆维湖进行大规模研究；这座湖形成于 110 万年前，当时一颗巨大的流星撞入地球表面（when a giant meteor crashed into the Earth's surface）。紧接着是本题定位句：「The resulting crater is one of the largest and most well-preserved geologically young craters in the world, says Scholz」（据 Scholz 说，由此形成的陨石坑是世界上最大、保存最完好的地质年轻陨石坑之一）。题干把「one of the largest and most well-preserved geologically young craters in the world」压缩为「the largest and most preserved one in the world」，去掉了「之一（one of）」这一范围限定，也去掉了「geologically young（地质上年轻）」这一修饰。按雅思判断题的规则，原文说「是最大的之一」只能证明它属于最大的那一批，并不能证明它排在第一；「它究竟是不是世界第一」这一点原文并未交代，属于信息缺失，因此官方答案为 NOT GIVEN。做本题的关键在于不要看到 largest 与 most well-preserved 就在题干中「认亲」——一定要核对范围词（one of、all、only）是否被偷换，本题的偷换点正是 one of 的消失。",
          "traps": [
            "为什么不是 TRUE：原文的表述是「one of the largest and most well-preserved geologically young craters」，即「最大、保存最好的年轻陨石坑之一」，并没有断言它就是世界第一；题干把「之一」改成「唯一的最（the largest ... one）」，多出来的排名信息在原文中找不到依据，所以不能判 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文给出与之相反的信息，例如原文若说明「另一个陨石坑更大」才成立。原文既没有说它是第一，也没有说它不是第一，「之一」的说法与「是最大的」之间并不矛盾，因此只能按信息缺失判 NOT GIVEN。",
            "特别说明：本题存在争议版本，有的讲解会因为 one of 被改成 the 而判 FALSE。本题按题库给出的答案表统一处理为 NOT GIVEN，理由是原文只提供了「属于最大之一」这一范围信息，未提供任何排名先后信息。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The water stored in lake Bosumtwi was gone only by seeping through the lake sediments.",
          "translation": "博苏姆维湖中储存的水只通过渗入湖底沉积物的方式流失。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Streams flow into the lake, Scholz says, but the water leaves only by evaporation, or by seeping through the lake sediments."
          },
          "synonyms": [
            "「The water stored in lake Bosumtwi」同义替换为原文的「the water」，原文上文用「the lake, which is about 8 kilometers in diameter, has no natural outlet」界定了同一水体",
            "「was gone」同义替换为原文的「the water leaves」，即水离开湖体的过程",
            "「only by seeping through the lake sediments」与原文的「only by evaporation, or by seeping through the lake sediments」冲突：原文给出了蒸发与渗漏两条途径"
          ],
          "locatingTip": "定位：题干关键词是 water、seeping、lake sediments，其中 seeping through the lake sediments 是原文特有的搭配，只在第 3 段出现，可直接定位到该段第三句。确定答案技巧：本题的判分点是 only 与 or 的冲突。原文说水只能通过两种方式离开：evaporation（蒸发）或者 seeping through the lake sediments（渗入湖底沉积物），两者是并列选择关系；题干却用 only by seeping 把其中一条途径说成唯一途径。原文给的是「A 或 B」，题干说的是「只有 B」，两者直接冲突，因此判 FALSE。看到题干里出现 only、solely、merely 等排他性副词，第一反应就是回原文核对是否存在其他并列项。",
          "analysis": "第 3 段先说这座湖的重要特征：湖直径约 8 公里，没有天然出口（has no natural outlet）；火山口边缘高出水面约 250 米。接着是本题定位句：「Streams flow into the lake, Scholz says, but the water leaves only by evaporation, or by seeping through the lake sediments.」（Scholz 说，溪流流入湖中，但水只能通过蒸发或者渗入湖底沉积物的方式离开）。这一句明确给出两条离开途径，而题干只承认其中一条（seeping through the lake sediments），并把另一条（evaporation）排除在外，属于以偏概全式的信息失真，因此答案是 FALSE。此外，该段接着说这座湖在过去的百万年里充当了一个「热带雨量计」（acted as a tropical rain gauge），随降水与热带气候变化而涨落，可见蒸发确实是水流失的重要途径之一，题干把它删掉在逻辑上也与下文不合。做题时注意本题与第 4 题同在第 3 段，两题取材位置不同：第 3 题取「水如何离开」，第 4 题取「变化记录藏在何处」，需分别回到各自的句子核对。",
          "traps": [
            "为什么不是 TRUE：原文用「evaporation, or by seeping through the lake sediments」给出了两条并存的水流失途径，题干只承认渗漏一条，属于把并列关系偷换成唯一关系，与原文相反。",
            "为什么不是 NOT GIVEN：原文对水的流失方式交代得非常明确（蒸发与渗漏），并非没有提及；既然已有明确且与题干冲突的信息，就应判 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Historical climate changes can be detected by the analysis of the sediment in the lake.",
          "translation": "通过分析湖中的沉积物可以检测出历史上的气候变化。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "For the past million years, the lake has acted as a tropical rain gauge, filling and drying with changes in precipitation and the tropical climate. The record of those changes is hidden in the sediment below the lake bottom."
          },
          "synonyms": [
            "「Historical climate changes」同义替换为原文的「changes in precipitation and the tropical climate」，并在上文以「For the past million years」限定为历史上的变化",
            "「can be detected by the analysis of the sediment」同义替换为原文的「The record of those changes is hidden in the sediment below the lake bottom」，record hidden in the sediment 意味记录保存在沉积物中、可被读取分析",
            "「the sediment in the lake」同义替换为原文的「the sediment below the lake bottom」，指湖底沉积物"
          ],
          "locatingTip": "定位：题干关键词是 sediment 与 climate changes，sediment 一词在第 3 段连续出现两次（seeping through the lake sediments、the sediment below the lake bottom），锁定位置后在第二处找到「记录藏在沉积物里」这一关键信息。确定答案技巧：本题的推理链是「湖像雨量计一样记录气候变化」加「记录藏在湖底沉积物中」，两句合起来就等于「通过分析沉积物可以检测出历史气候变化」。雅思判断题允许将原文的「记录被保存在某处」理解为「该记录可以被检出／读出」，因为 for the past million years 已经把时间范围限定在历史时期。抓住 record（记录）与 sediment（沉积物）这对搭配，答案就成立了。",
          "analysis": "第 3 段在说明湖没有天然出口、水只靠蒸发与渗漏离开之后，给出进一步的推论：「For the past million years, the lake has acted as a tropical rain gauge, filling and drying with changes in precipitation and the tropical climate.」（过去一百万年里，这座湖就像一个热带雨量计，随降水与热带气候的变化而涨落）。紧接着是本题定位的关键句：「The record of those changes is hidden in the sediment below the lake bottom.」（这些变化的记录就藏在湖底以下的沉积物中）。随后 Scholz 又强调这座湖是世界上研究热带气候变化最好的地点之一（one of the best sites in the world for the study of tropical climate changes）。把三句串起来：气候变化一湖的涨落一记录沉积一下一步即可研究。题干的写法是「Historical climate changes can be detected by the analysis of the sediment」，把原文的「记录藏在沉积物里」正面表述为「可以借助沉积物分析检测出」，属于同一逻辑链的合理改写，因此判 TRUE。做题时注意 hidden（藏在）不等于无法获得，隐藏一词描述的是记录所在的位置，而不是否认可获取性，这是本题最容易误判的地方。",
          "traps": [
            "为什么不是 FALSE：原文从未否认沉积物中可以读出气候变化信息，反而强调这是世界上研究热带气候变化最好的地点之一，学校随后采集湖底数据的行动也印证了沉积物可用于分析，因此不存在矛盾信息。",
            "为什么不是 NOT GIVEN：题干的两个要素（sediment 与 climate changes 的记录关系）在原文中同句出现，信息明确具体，不是未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The greatest obstacle to the research of scientists had been the interference by the locals due to their indigenous believes.",
          "translation": "科学家研究过程中最大的障碍一直是当地人出于本土信仰的干扰。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Problems that arose were primarily non-scientific – tree stumps, fishing nets, cultural barriers, and occasional misunderstandings with local villagers."
          },
          "synonyms": [
            "「the interference by the locals」同义替换为原文的「cultural barriers, and occasional misunderstandings with local villagers」，local villagers 即 locals",
            "「The greatest obstacle ... had been」与原文的「Problems that arose were primarily non-scientific」及「a few relatively minor adjustments」相冲突：原文把出现的问题定位为非科学性的、轻微的",
            "「due to their indigenous believes」在原文中没有对应：与当地人信仰有关的内容出现在第 8 段（is sacred to the Ashanti people），原文交代的是研究前需要取得部落酋长的特别许可，而不是当地人因信仰而干扰研究"
          ],
          "locatingTip": "定位：题干的关键词是 obstacle、locals、indigenous believes，其中 local villagers 与「问题清单」都集中在第 7 段末句，可直接锁定。确定答案技巧：这类「最大障碍」题要同时核对三个维度：问题的性质（是否重大）、问题的来源（是否来自当地人）、以及问题是否与信仰有关。原文说出现的问题「primarily non-scientific」（主要是非科学性的），列举的也是树桩、渔网、文化障碍与偶发误解，且作者在上一句刚强调「Except for a few relatively minor adjustments, the equipment and the boat worked well」（除了几处相对轻微的调整外，设备与船只运转良好）。可见研究遇到的都是小麻烦，不存在「最大障碍」；与信仰相关的内容（把湖视为圣地）对应的是第 8 段中需要向酋长取得特别许可这一程序性事项，第 9 段还明确说当地人了解情况后非常帮忙（they were very helpful）。三处证据都指向题干失实，因此判 FALSE。",
          "analysis": "第 7 段交代野外工作状况：团队成员在加纳采集数据约四周，每周工作七天，日出后即到湖边；顺利时午后即可收工返回码头（by early afternoon）。作者先给出总体评价——「Except for a few relatively minor adjustments, the equipment and the boat worked well.」（除了几处相对轻微的调整之外，设备和船只运转良好）。紧接着是本题定位句：「Problems that arose were primarily non-scientific – tree stumps, fishing nets, cultural barriers, and occasional misunderstandings with local villagers.」（出现的问题主要是非科学性的——树桩、渔网、文化障碍，以及与当地村民偶尔的误解）。从这句可以读出三层信息：第一，出现的问题被定性为 non-scientific（非科学性、技术性之外的琐事）；第二，问题的程度是 occasional（偶发）与 minor（轻微，见上一句）；第三，涉及的当地人互动只是 misunderstandings（误解），而非题干所说的 interference（干扰）。再看第 8 段：博苏姆维湖对阿散蒂人（Ashanti people）而言是圣地，研究开始前 Scholz 需要取得部落酋长的特别许可（had to secure special permission from tribal chiefs）——这说明宗教文化因素是作为「程序前提」被妥善处理的，而非研究失败的根源。第 9 段更明确：起初有各种谣言，但当地人了解研究缘由后非常帮忙（they were very helpful）。因此题干所说的「当地人出于本土信仰的干扰是最大的障碍」与原文数据相冲突，应判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文对问题的定性是 primarily non-scientific 与 minor，并明确说设备与船只运作良好，还交代当地人后来很帮忙；没有任何一处支持「当地人因信仰而干扰并构成最大障碍」这一说法。",
            "为什么不是 NOT GIVEN：如果原文对研究障碍只字未提，才考虑 NOT GIVEN；但原文对出现的问题有明确的、系统性的交代（非科学性、轻微、偶发），与题干的说法方向相反，因此判 FALSE。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–9 笔记填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 9
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Use a high-pressure 6 ________ to create small pneumatic explosions in the water.",
          "translation": "使用一个高压的 6 ________ 在水中制造小型气动爆炸。",
          "answer": "air gun",
          "wordClass": "名词短语（不可数名词 air 作前置定语修饰可数名词 gun 单数；前面已有冠词 a 与形容词 high-pressure，因此填名词原形，不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "In this process, a high-pressure air gun is used to create small, pneumatic explosions in the water."
          },
          "synonyms": [
            "「Use a high-pressure ...」同义替换为原文的「a high-pressure air gun is used」，原文为被动语态，题干改为祈使句式的主动表达",
            "「to create small pneumatic explosions」在原文中原样出现：「is used to create small, pneumatic explosions in the water」",
            "「high-pressure」一词在原文中原词复现：「a high-pressure air gun」"
          ],
          "locatingTip": "定位：笔记里的关键词是 high-pressure 与 pneumatic explosions，这两个词都是低频技术词，只在第 5 段出现一次，扫读时抓住 pneumatic 就能瞬间定位。确定答案技巧：题干已给出修饰语 high-pressure，说明空格要填的是「被高压修饰的那个装置」，回原文找到 a high-pressure air gun is used，主干名词就是 air gun 两个词，正好符合 NO MORE THAN TWO WORDS 的限制。填写时注意不要连冠词一起抄（a air gun 不合语法），也不要写成 airgun（原文分写为两个单词）；同时不要把后面用于制造爆炸的手段误当作装置名称。",
          "analysis": "第 5 段介绍数据采集所用的技术：五名队员于一月中旬返回 Abono，开始使用一种叫做地震反射剖面法（seismic reflection profiling）的技术采集湖底地下的数据。随后两句解释该技术的原理：在这一过程中，用一把高压气枪（a high-pressure air gun）在水中制造小型气动爆炸（small, pneumatic explosions）；声能会穿透湖底地下约 1,000 到 2,000 米，然后再反弹回水面（The sound energy penetrates about 1,000 to 2,000 meters into the lake's subsurface before bouncing back to the surface of the water）。笔记句「Use a high-pressure 6 ____ to create small pneumatic explosions in the water」是把原文的被动句「a high-pressure air gun is used to create small, pneumatic explosions」改写为「使用……制造……」的等价表达，空格与原文的 air gun 严格对应。从词性看，air 是不可数名词作定语修饰 gun，属于「名词加名词」的两词短语，填入后整句为「a high-pressure air gun」，与原文完全一致。注意本题与第 7 题共用第 5 段但取材不同：第 6 题取制造爆炸的工具，第 7 题取随后在湖底传播的介质（sound energy）。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The 7 ________ penetrates about 1,000 to 2,000 meters into the lake's subsurface before bouncing back.",
          "translation": "7 ________ 在反弹回来之前，会穿透湖底地下约 1,000 到 2,000 米。",
          "answer": "sound energy",
          "wordClass": "名词短语（不可数名词 energy 作中心词，sound 作前置定语；在句中作主语，与单数谓语动词 penetrates 保持一致）",
          "locating": {
            "paragraph": "5",
            "quote": "The sound energy penetrates about 1,000 to 2,000 meters into the lake's subsurface before bouncing back to the surface of the water."
          },
          "synonyms": [
            "「penetrates about 1,000 to 2,000 meters into the lake's subsurface」在原文中原样出现，仅把结尾的「to the surface of the water」概括为「before bouncing back」",
            "「The 7 sound energy」即原文主句主语「The sound energy」，题干与原文的主语完全相同",
            "「bouncing back」同义替换为原文的「until ... bouncing back to the surface of the water」，表示声能反射回水面"
          ],
          "locatingTip": "定位：本题与第 6 题同在第 5 段，紧接气枪爆炸之后，题干保留了 1,000 to 2,000 meters 这一组具体数字，属于极强的定位线索，直接搜索这组数字即可。确定答案技巧：数字出现在原文第三句，而该句的主语就是空格所缺的成分。题干说「某个东西穿透 1,000 到 2,000 米」，原文同位置的句子主语是 The sound energy（声能），谓语 penetrates 与原文一致，因此答案填 sound energy。注意空格前已有定冠词 The，所以只填两个实词即可（sound energy），不要写成 the sound energy 三个词，以免超出 NO MORE THAN TWO WORDS 的限制。",
          "analysis": "第 5 段第三句写道：「The sound energy penetrates about 1,000 to 2,000 meters into the lake's subsurface before bouncing back to the surface of the water.」（声能会穿入湖底地下约 1,000 到 2,000 米，然后反弹回水面）。笔记句「The 7 ____ penetrates about 1,000 to 2,000 meters into the lake's subsurface before bouncing back」几乎是原句的复制，只是把句末的「to the surface of the water」省略为题干的 before bouncing back，谓语 penetrates 与数字区间都完全一致。这样保留谓语与数字的题型，本质上是找出原文同一句的主语，因此答案锁定 sound energy。词性上，sound energy 是「名词作定语加不可数名词」构成的两词名词短语，作句子主语，与第三人称单数谓语 penetrates 相匹配，符合语法与词数要求。做题时不要被前一句的 air gun 干扰：气枪是制造爆炸的工具，穿透地层的是爆炸产生的声能，两者在原文中是先后出现的两个不同成分。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "A 50-meter-long 8 ________ towed behind the boat carries the underwater microphones.",
          "translation": "一条拖在船后、长 50 米的 8 ________ 承载着水下麦克风。",
          "answer": "cable",
          "wordClass": "名词（单数可数，前面已有不定冠词 A 与复合形容词 50-meter-long 作定语，因此填名词原形；该名词由 that 引导的定语从句修饰）",
          "locating": {
            "paragraph": "6",
            "quote": "embedded in a 50-meter-long cable that is towed behind the boat as it crosses the lake in a carefully designed grid pattern"
          },
          "synonyms": [
            "「A 50-meter-long」在原文中原词复现：「a 50-meter-long cable」",
            "「towed behind the boat」在原文中原词复现：「that is towed behind the boat」",
            "「carries the underwater microphones」同义替换为原文的「underwater microphones ... embedded in a 50-meter-long cable」，embedded in 表示水下麦克风被埋设／固定在这条缆线中"
          ],
          "locatingTip": "定位：题干保留了 50-meter-long 与 towed behind the boat 两个极具辨识度的表达，两者都只在第 6 段出现，直接锁定第 6 段第一句。确定答案技巧：句子的主干是「一条 50 米长的东西拖着，里面装着水下麦克风」，回原文找同样的结构：水下麦克风（underwater microphones）是 embedded in（嵌在……之中）一条 50-meter-long 的东西里，这个东西就是 cable（缆线）。题目把原文的「麦克风嵌在缆线中」改写成「缆线承载着麦克风」，主语与宾语的位置互换，被询问的对象仍是缆线本身。填写时注意只填 cable 一个词：A 与 50-meter-long 都已在题干给出，不要把它们重复写进空格。",
          "analysis": "第 6 段解释回收环节：「The reflected sound energy is detected by underwater microphones – called hydrophones – embedded in a 50-meter-long cable that is towed behind the boat as it crosses the lake in a carefully designed grid pattern.」（反射回来的声能由水下麦克风探测——这种麦克风叫水听器（hydrophones）——它们嵌在一条 50 米长的缆线中，缆线被拖在船后，船按精心设计的网格路线横穿湖面）。随后的句子交代数据记录与分析流程：船载计算机记录信号，得到的数据再在实验室中处理与分析（processed and analyzed in the laboratory）。笔记句把原文的「麦克风嵌在缆线里」倒装为「缆线承载麦克风」，题干中的 50-meter-long 与 towed behind the boat 都是原文的逐字保留，因此空格对应的就是 cable（缆线）。从词性看，cable 是可数名词单数，前面已有冠词 A 与复合形容词 50-meter-long，其后由 that 引导的定语从句修饰，语法位置完全吻合；只填 cable 即满足 NO MORE THAN TWO WORDS 的要求。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Underwater microphones called 9 ________ detect the reflected sound energy.",
          "translation": "被称为 9 ________ 的水下麦克风探测反射回来的声能。",
          "answer": "hydrophones",
          "wordClass": "名词（复数，在 called 后作宾语补足成分，指这一类设备；原文以复数形式出现，须保持复数）",
          "locating": {
            "paragraph": "6",
            "quote": "The reflected sound energy is detected by underwater microphones – called hydrophones – embedded in a 50-meter-long cable"
          },
          "synonyms": [
            "「Underwater microphones」在原文中原词复现：「underwater microphones – called hydrophones –」",
            "「called hydrophones」在原文中原样出现，破折号之间的 called hydrophones 正是名称的给出方式",
            "「detect the reflected sound energy」同义替换为原文的被动表达「The reflected sound energy is detected by underwater microphones」，题干将被动改为主动"
          ],
          "locatingTip": "定位：题干完整保留了 underwater microphones 这一关键名词短语，并保留 detect 与 reflected sound energy，三者在第 6 段首句同时出现，直接锁定。确定答案技巧：注意原文的标点——名字是用一对破折号引出的：「underwater microphones – called hydrophones – embedded in ...」，called 就是「被称为」的信号词，与题干的 called 完全对应，所以答案就是紧接着 called 出现的那个词。另外本题有一个语法提示：原文描述的是设备类名词且用复数（microphones 与 hydrophones 对应），题干中的谓语 detect 也是复数形式，因此必须写成复数 hydrophones，写单数 hydrophone 会因与谓语不一致而失分。",
          "analysis": "第 6 段首句是本题的唯一出处：「The reflected sound energy is detected by underwater microphones – called hydrophones – embedded in a 50-meter-long cable that is towed behind the boat as it crosses the lake in a carefully designed grid pattern.」句子用一对破折号插入名称解释：水下麦克风「被称为水听器（hydrophones）」，随后说明这些设备嵌在一条 50 米长的缆线中，缆线被拖在船后按网格路线穿行湖面。笔记句「Underwater microphones called 9 ____ detect the reflected sound energy」把原文的被动句「The reflected sound energy is detected by ...」改写为主动句「水下麦克风探测反射声能」，其余成分照搬，空格处即 called 之后的名称 hydrophones。词性上，hydrophones 是可数名词复数，与前面的复数名词 microphones 以及题干的复数谓语 detect 在数上保持一致；填写时须保留词尾 -s，否则语法出错。注意本题与第 8 题取材同一句但指向不同成分：第 8 题问承载设备的缆线（cable），第 9 题问设备本身的名称（hydrophones），审题时务必分清题干的主语是谁。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–14 摘要填空（NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 14
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "The boat-double R/V Kilindi crossed the lake was dismantled and stored in a 10 ________.",
          "translation": "这艘名为 R/V Kilindi 的双体船在横穿湖面之前曾被拆解，并收纳在一个 10 ________ 之中。",
          "answer": "shipping container",
          "wordClass": "名词短语（动名词 shipping 作前置定语修饰可数名词 container 单数；前面已有不定冠词 a，故填名词原形）",
          "locating": {
            "paragraph": "4",
            "quote": "It was constructed in modules that were dismantled, packed inside a shipping container, and reassembled over a 10-day period in late November and early December 1999 in the rural village of Abono, Ghana."
          },
          "synonyms": [
            "「dismantled」在原文中原词复现：「constructed in modules that were dismantled」",
            "「stored in」同义替换为原文的「packed inside」，即装进、收纳进某个容器",
            "「a shipping container」在原文中原词出现，题干以它作为被运载与拆解的那艘船的装载容器"
          ],
          "locatingTip": "定位：摘要句提到了船名 R/V Kilindi，这个专有名词在第 4 段原文中原样出现（The boat – dubbed R/V Kilindi – was built in Florida last year），锁定第 4 段后逐句阅读即可找到 dismantled 所在的那一句。确定答案技巧：题干有两个动作提示——dismantled（拆解）与 stored in（收纳在……中），而原文对应句同时含有 dismantled 与 packed inside，packed inside 后面的名词就是答案所在。原文写的是「packed inside a shipping container」，即拆成模块后装进一个船运集装箱里，因此答案是 shipping container 两个词，正好在 NO MORE THAN THREE WORDS 的范围内。填词时注意 a 已在题干给出，不要重复抄冠词。",
          "analysis": "第 4 段交代作业船的准备过程：在研究人员探查湖底之前，他们需要一艘拥有大面积可用甲板、能够承载八吨科学设备的船（a boat with a large, working deck area that could carry eight tons of scientific equipment）。这艘船被命名为 R/V Kilindi，去年在佛罗里达建造（was built in Florida last year）。随后是本题定位句：「It was constructed in modules that were dismantled, packed inside a shipping container, and reassembled over a 10-day period in late November and early December 1999 in the rural village of Abono, Ghana.」（它是按模块建造的，这些模块被拆解、装进一个船运集装箱，然后于 1999 年 11 月下旬到 12 月初在加纳的乡村阿博诺用十天时间重新组装起来）。摘要句「was dismantled and stored in a 10 ____」正是这一串动作的压缩：dismantled 对应原文的 dismantled，stored in 对应 packed inside，空格即其后紧跟的名词短语 shipping container。从词性看，shipping 是动名词作前置定语，container 是可数名词单数，前面已有不定冠词 a，填入后构成 a shipping container，与原文形态一致。做题时注意不要把 reassembled 的时间「10-day period」误当作答案：题干中的 10 是题号，不是数量词，真正的空在 stored in 之后。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The technology they used called 11 ________;",
          "translation": "他们所使用的技术被称为 11 ________；",
          "answer": "seismic reflection profiling",
          "wordClass": "名词短语（专业术语名称，由形容词 seismic、名词 reflection 与动名词 profiling 三词构成，作 called 的宾语补足成分）",
          "locating": {
            "paragraph": "5",
            "quote": "returned to Abono to begin collecting data about the lake's subsurface using a technique called seismic reflection profiling"
          },
          "synonyms": [
            "「The technology they used」同义替换为原文的「using a technique」，technique 即技术、方法",
            "「called seismic reflection profiling」在原文中原样出现：「a technique called seismic reflection profiling」，called 为原词复现",
            "「they」在原文中有明确对应：该句主语是上文列举的五名队员（five members of the team），指研究团队"
          ],
          "locatingTip": "定位：题干的关键信号词是 called，原文中只有少数几处用 called 引出名称（the lake ... 一处是 technique called seismic reflection profiling，另一处是 microphones – called hydrophones –），结合题干提到的 technology（技术），可直接锁定第 5 段中 technique 所在的那一句。确定答案技巧：called 在原文与题干中都出现，属于「原词锁位」；called 后面的名词短语就是名称本身，即 seismic reflection profiling。这个词组由三个词构成，恰好符合本题 NO MORE THAN THREE WORDS 的上限，是本题最容易数错词数的地方：seismic、reflection、profiling 各算一个词，不可省略其中任何一部分，也不能把前面的 a technique 一起抄进去。",
          "analysis": "第 5 段开头先交代人员与任务：一月中旬，团队五名成员返回阿博诺，开始采集湖底地下（the lake's subsurface）的数据。随后给出所采用的方法：「... using a technique called seismic reflection profiling.」（使用一种被称为地震反射剖面法的技术）。接下来的两句解释这一技术的原理——用高压气枪在水中制造小型气动爆炸，声能穿透湖底地下约 1,000 到 2,000 米后反弹回水面。摘要句「The technology they used called 11 ____」把原文的 using a technique called ... 转写为「他们所使用的技术被称为……」，called 与原句的 called 一一对应，因此空格严格等于 seismic reflection profiling。从词类看，这是一个由形容词 seismic 修饰、以动名词 profiling 为中心词的复合术语，属于不可随意拆分或改写的固定名称，填写时必须三词齐全且保持拼写一致；同时注意它已是三个词，若再加上冠词就会超出词数限制。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Then the data had been analyzed and processed in the 12 ________",
          "translation": "随后这些数据在 12 ________ 中被处理和分析。",
          "answer": "laboratory",
          "wordClass": "名词（单数可数，前面有定冠词 the，作介词 in 的宾语，表示数据处理分析的地点）",
          "locating": {
            "paragraph": "6",
            "quote": "On-board computers record the signals, and the resulting data are then processed and analyzed in the laboratory."
          },
          "synonyms": [
            "「analyzed and processed」同义替换为原文的「processed and analyzed」，两者都指数据处理与分析，仅语序调换",
            "「the data」同义替换为原文的「the resulting data」，即由船载计算机记录下来的那些数据",
            "「in the laboratory」在原文中原词出现：「processed and analyzed in the laboratory」"
          ],
          "locatingTip": "定位：题干的关键词是 data、analyzed、processed，三者集中在第 6 段第二句，且该句包含了与题干几乎相同的动词组合，属于原词锁位。确定答案技巧：题干说数据「在某个地方被处理分析」，原文同句给出地点状语 in the laboratory，介词 in 后的名词就是答案。这里要注意题干与原文的语序差异：原文是 processed and analyzed，题干是 analyzed and processed，顺序相反但两个动作完全相同，不影响地点判断。填写时保留定冠词后的名词原形 laboratory，只填一个词，符合 NO MORE THAN THREE WORDS 的限制。",
          "analysis": "第 6 段按流程顺序介绍数据链路：第一句讲硬件与采集——反射回来的声能由嵌在 50 米长缆线中的水听器探测，缆线拖在船后，船按精心设计的网格路线横穿湖面。第二句是本题定位句：「On-board computers record the signals, and the resulting data are then processed and analyzed in the laboratory.」（船载计算机记录这些信号，得到的数据随后在实验室中被处理和分析）。第三、四句是 Scholz 对成果的展望，说明结果将揭示盆地的形状、沉积层的厚度以及沉积物堆积发生重大变化的时空位置，团队正在构建湖底地下与沉积层的三维图像（three-dimensional perspective）。摘要句「Then the data had been analyzed and processed in the 12 ____」把原文的被动句 processed and analyzed in the laboratory 转为同一个意思，只调换了两个动词的先后顺序，介词短语 in the laboratory 保持不变，因此答案为 laboratory。从词性看，laboratory 是可数名词单数，前面有定冠词 the，作介词 in 的宾语，填入后与题干结构完全吻合。做题时不要与第 13 题的 three-dimensional 混淆：第 12 题问分析地点，第 13 题问团队正在构建的东西，两者出自同一段但分属不同句子。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Scholz also added that they were now building 13 ________ . View of the sediment or sub-image in the bottom of the lake.",
          "translation": "Scholz 还补充说，他们现在正在构建 13 ________ （关于湖底沉积物或地下的）视图。",
          "answer": "three-dimensional",
          "wordClass": "形容词（复合形容词，由数词 three 与形容词性成分 dimensional 组合而成，修饰后面的名词 View／perspective，题干中作定语）",
          "locating": {
            "paragraph": "6",
            "quote": "We are now developing a three-dimensional perspective of the lake's subsurface and the layers of sediment that have been laid down."
          },
          "synonyms": [
            "「Scholz also added that」同义替换为原文的直接引语标记「Scholz says」，即研究者本人的补充说明",
            "「they were now building ... View」同义替换为原文的「We are now developing a three-dimensional perspective」，developing 对应 building，perspective 对应 View",
            "「View of the sediment or sub-image in the bottom of the lake」同义替换为原文的「perspective of the lake's subsurface and the layers of sediment」，subsurface 对应 sub-image，layers of sediment 对应 sediment"
          ],
          "locatingTip": "定位：题干点明了说话人是 Scholz，并且出现了 View／perspective、sediment、subsurface 等词，回第 6 段找到 Scholz 讲「正在构建某种视角」的那句引语即可。确定答案技巧：题干的语法位置很关键——空格后面紧跟名词 View，说明空格填的是修饰 View 的形容词性成分；原文对应结构中，perspective 之前的修饰语正是 three-dimensional（三维的）。题干把 developing a three-dimensional perspective 改写成 building the three-dimensional View，两处逐词对应，因此答案填 three-dimensional。注意这是一个带连字符的复合形容词，必须整体写出，不可拆成 three dimensional 两个词看待（即使拆开，题目上限是三个词，也仍然容得下，但标准写法应保持连字符）。",
          "analysis": "第 6 段最后是 Scholz 的两句评论。第一句：「The results will give us a good idea of the shape of the basin, how thick the layers of sediment are, and when and where there were major changes in sediment accumulation.」（结果将让我们很好地了解盆地的形状、沉积层的厚度，以及沉积物堆积发生重大变化的时间和地点）。第二句即本题定位句：「We are now developing a three-dimensional perspective of the lake's subsurface and the layers of sediment that have been laid down.」（我们现在正在构建湖底地下与已沉积下来的沉积层的三维图像）。摘要句「Scholz also added that they were now building 13 ____ . View of the sediment or sub-image in the bottom of the lake」把原文的 We are now developing a three-dimensional perspective of the lake's subsurface and the layers of sediment 做了一次拆分：perspective 被改写为 View，subsurface 与 layers of sediment 被改写为 sub-image 与 the sediment in the bottom of the lake，而 perspective 前面原有的修饰语 three-dimensional 被留成了空格。因此答案是从句法中「剥离」出来的那个定语 three-dimensional。从词性看，它是「数词加形容词」构成的复合形容词，带连字符，用来修饰后面的名词；填入后 whole phrase 读作 a three-dimensional view，与原文 a three-dimensional perspective 完全对应。做题时注意不要填 perspective：那个词已经被题干改写为 View 占用了位置，空格问的是它的修饰语。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "The whole set of equipment works well yet the ship should avoid physical barrier including tree stumps or 14 ________ . Floating on the surface of the lake.",
          "translation": "整套设备运转良好，但船需要避开包括树桩或 14 ________ 在内的实体障碍物。",
          "answer": "fishing nets",
          "wordClass": "名词短语（动名词 fishing 作前置定语修饰复数名词 nets，与前面的 tree stumps 并列作 including 的宾语）",
          "locating": {
            "paragraph": "7",
            "quote": "Problems that arose were primarily non-scientific – tree stumps, fishing nets, cultural barriers, and occasional misunderstandings with local villagers."
          },
          "synonyms": [
            "「physical barrier including tree stumps or ...」同义替换为原文的「Problems that arose were primarily non-scientific – tree stumps, fishing nets」，题干把原文的问题清单概括为「实体障碍物」",
            "「The whole set of equipment works well」同义替换为原文的「Except for a few relatively minor adjustments, the equipment and the boat worked well」",
            "「the ship should avoid」同义替换为原文的「Problems that arose」，即船在作业中被这些障碍物影响，因此需要避开"
          ],
          "locatingTip": "定位：题干保留了 tree stumps 这一具体名词，而 tree stumps 在全篇只出现在第 7 段末句的问题清单里，属于一步定位。确定答案技巧：原文用破折号把非科学性问题的清单列了出来——tree stumps, fishing nets, cultural barriers, and occasional misunderstandings with local villagers（树桩、渔网、文化障碍、与当地村民偶发的误解）。题干用 including tree stumps or 14 ____ 要求考生在清单中继续列举与树桩同类、且属于水中实体障碍物的一项。清单中与树桩并列、且同样会妨碍船只在湖面航行的显然是 fishing nets（渔网）。此外，cultural barriers 与 misunderstandings 属于人际层面的软性障碍，与题干的 physical barrier（实体障碍物）不搭，可以排除。答案填 fishing nets 两个词，符合 NO MORE THAN THREE WORDS 的限制。",
          "analysis": "第 7 段记录野外作业实况：团队成员在加纳采集数据约四周，每周工作七天，日出后即到湖边；顺利时午后就能收工返航。作者随后给出总体评价：「Except for a few relatively minor adjustments, the equipment and the boat worked well.」（除了几处相对轻微的调整，设备与船只运转良好）。紧接着是本题定位句：「Problems that arose were primarily non-scientific – tree stumps, fishing nets, cultural barriers, and occasional misunderstandings with local villagers.」（出现的问题主要是非科学性质的——树桩、渔网、文化障碍，以及与当地村民偶发的误解）。摘要句把「设备运转良好」与「需要避开的问题」两处信息合并：The whole set of equipment works well 对应 the equipment and the boat worked well，physical barrier including tree stumps or 14 ____ 对应清单中被实物化的前两项。清单四项里，tree stumps（树桩）与 fishing nets（渔网）都是漂在或沉在水中的实体物件，会挡住船只航行，题干又用 or 把它们并列，因此空格填 fishing nets。从词性看，fishing 是动名词作定语修饰复数名词 nets，整个短语作 including 的宾语，与 tree stumps 保持同样的名词性结构；填写时须保留复数形式与两个单词的完整形态。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
