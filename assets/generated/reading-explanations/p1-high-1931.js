(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1931", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1931",
  "meta": {
    "examId": "p1-high-1931",
    "title": "Wooden Buildings 木制建筑",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–4 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 4
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "More houses are built of wood in Australia than in the USA.",
          "translation": "澳大利亚用木材建造的房屋比美国更多。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "Still today, 80% of houses in the USA are built of wood. In Australia the proportion is slightly smaller since stone is also a popular choice, particularly in the southern states, while in New Zealand the figure is more like 85%."
          },
          "synonyms": [
            "“More houses are built of wood in Australia than in the USA” 与原文 “In Australia the proportion is slightly smaller” 构成反义对照：原文说澳大利亚的比例“更小”",
            "“the proportion / the figure” 同义替换为题干里 “More houses are built of wood”，两者都指“木结构房屋所占的比例”"
          ],
          "locatingTip": "定位：题干出现两个大写国家名 Australia、USA，都是极易扫读的专有名词；A 段第四句正是讲美国的木结构房屋比例，直接在第 1 段（A 段）顺读即可锁定 “80% of houses in the USA are built of wood”，下一句紧接着就是对澳大利亚的描述。确定答案技巧：题干是“澳大利亚多于美国”的比较结构，只要回到原文核对比较方向即可；原文用 “slightly smaller”（略小）说明澳大利亚的比例低于美国，方向被写反，故答案为 FALSE。注意句末的 “New Zealand … 85%” 是干扰数据，不要拿它去和美国比较。",
          "analysis": "题干说澳大利亚用木材盖的房子比美国更多。原文 A 段先给出美国的情况：Still today, 80% of houses in the USA are built of wood（直至今日，美国 80% 的房屋是木结构）；紧接着写 In Australia the proportion is slightly smaller since stone is also a popular choice, particularly in the southern states（在澳大利亚这一比例略小，因为石材也很受欢迎，尤其在南部各州）；句末才补充 while in New Zealand the figure is more like 85%（而新西兰的这一数字更接近 85%）。可见原文明确把美国（80%）排在澳大利亚之前，澳大利亚“slightly smaller”，题干却声称澳大利亚比美国多，方向恰好相反，属于与原文事实直接冲突，因此选 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文用 slightly smaller 直接说明澳大利亚的比例小于美国，题干把大小关系说反了。",
            "为什么不是 NOT GIVEN：原文既给了美国 80% 的具体数字，又对澳大利亚作了明确的大小比较，信息完整且与题干矛盾，不属于未提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "There are solutions to the problems of building with wood.",
          "translation": "用木材建房所存在的问题是有解决办法的。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "Certainly, there are problems associated with wooden constructions: wood can rot when exposed to water and is said to be a fire risk. However, with modern technology these issues can be eliminated"
          },
          "synonyms": [
            "“solutions to the problems” 同义替换为 “these issues can be eliminated”（问题能够被消除，即存在解决办法）",
            "“the problems of building with wood” 同义替换为 “problems associated with wooden constructions”"
          ],
          "locatingTip": "定位：题干核心名词 problems 与介词短语 of building with wood 对应 A 段末尾的 “problems associated with wooden constructions”。确定答案技巧：找到 problems 后不要停下来，必须继续读完紧跟的 However 句，因为转折之后才是作者的结论：with modern technology these issues can be eliminated。雅思判断题常把“问题可以被消除”转述成“存在解决办法”，二者含义一致，故答案为 TRUE；冒号后列举的 rot 与 fire risk 只是铺垫，不要据此误判为 FALSE。",
          "analysis": "题干说木结构建筑的问题是有解决办法的。原文 A 段末尾：Certainly, there are problems associated with wooden constructions: wood can rot when exposed to water and is said to be a fire risk. 作者先承认木结构确实有缺陷——遇水会腐烂，且被认为存在火灾风险。但紧接着用转折词 However 给出结论：However, with modern technology these issues can be eliminated, which has led to a dramatic renewal of interest in wood as a building material in recent years.（然而，借助现代技术，这些问题都可以被消除，这也带来了近年来人们对木材作为建筑材料兴趣的显著复苏。）关键动宾结构 issues can be eliminated 表示“问题可以被消除”，与题干 solutions to the problems（存在解决办法）是同一层意思，因此题干与原文信息一致，答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文虽然在转折前承认了 rot 和 fire risk 两个问题，但转折后明确说这些问题 can be eliminated，并未否认解决办法。",
            "为什么不是 NOT GIVEN：原文既提出问题，又给出“可以被现代技术消除”的明确结论，信息完整，不存在缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Several different species of tree were used to construct the HoHo building.",
          "translation": "建造 HoHo 大楼使用了若干种不同的树木。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "Then came the 84-meter HoHo building in Vienna, home to a hotel, offices and apartments. Although the HoHo building has a concrete core, most of the structure, as well as the floors, are built of wood."
          },
          "synonyms": [
            "题干中的 “Several different species of tree” 在原文找不到任何对应信息，原文只用笼统的 “built of wood” 说明材料，并未区分树种"
          ],
          "locatingTip": "定位：专有名词 HoHo building 在全文只出现一次，位于 B 段第三句，直接扫读大写专有名词即可锁定。确定答案技巧：判定 NOT GIVEN 的关键是核对题干引入的“新信息”是否在原文出现——题干问的是树种（species of tree），而原文该句只说了大楼的高度、所在地、用途，以及“除混凝土核心筒外大部分结构与楼板为木材”，既没有出现任何具体树名，也没有出现 several / different 之类的数量或种类描述，全文也没有第二处提到 HoHo 的用材（Douglas fir 只出现在 C 段且属于另一栋建筑）。信息既不能被证实也不能被否证，故答案为 NOT GIVEN。",
          "analysis": "题干说建造维也纳的 HoHo 大楼使用了若干种不同的树。原文 B 段相关句为：Then came the 84-meter HoHo building in Vienna, home to a hotel, offices and apartments. Although the HoHo building has a concrete core, most of the structure, as well as the floors, are built of wood.（接着出现了维也纳 84 米高的 HoHo 大楼，内设酒店、办公室和公寓。虽然 HoHo 大楼有一个混凝土核心筒，但其大部分结构以及楼板都是木制的。）原文只笼统交代了用材是 wood，并补充说明核心筒为混凝土，完全没有涉及树木的种类或数量。题干额外加入了 “Several different species of tree” 这一原文不存在的具体信息，属于典型的“原文未提及”，因此选 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文没有任何关于 HoHo 大楼使用了何种树木或多少种树木的表述，无法证实题干。",
            "为什么不是 FALSE：原文也没有说它只使用一种树、或者没有使用树木，无法与题干构成直接矛盾。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Research at the Technical Institute in Graz improved wooden building technology.",
          "translation": "格拉茨技术学院的研究改进了木结构建筑技术。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "Many of these advances have been made possible by research at the Technical Institute in Graz, Austria, where new engineering systems based on wood construction have been pioneered."
          },
          "synonyms": [
            "“improved wooden building technology” 同义替换为 “new engineering systems based on wood construction have been pioneered”（开创了基于木结构的新工程体系，即改进了技术）",
            "“advances have been made possible by research” 同义替换为题干里的 “Research … improved”"
          ],
          "locatingTip": "定位：两个连续的大写专有名词词组 the Technical Institute in Graz 出现在 B 段最后一句，全文仅此一处，定位极为可靠。确定答案技巧：核对题干动词 improved 是否在原文有对应——原文说这些 advances（进步）“have been made possible by research”，并指出那里 pioneered（开创）了基于木材的新型工程体系，两处都指向该研究推动了木结构技术进步，与题干含义一致，故答案为 TRUE。",
          "analysis": "题干说格拉茨技术学院的研究改进了木结构建筑技术。原文 B 段末句：Many of these advances have been made possible by research at the Technical Institute in Graz, Austria, where new engineering systems based on wood construction have been pioneered. 句中 these advances 指前文列举的一系列高层木结构建筑成就（挪威 52.8 米塔楼、加拿大 53 米学生宿舍、维也纳 84 米 HoHo 大楼），made possible by research 说明这些进步之所以能够实现，正是依赖格拉茨的研究；而 where 引导的定语从句进一步说明该学院开创了以木结构为基础的新型工程体系。把 “改进技术” 与 “开创基于木材的新工程体系、并使这些进步成为可能” 对照，二者语义一致，因此答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文用 advances、made possible、pioneered 三个正面表述肯定了该研究的作用，没有任何否定信息。",
            "为什么不是 NOT GIVEN：原文明确点名格拉茨技术学院，并具体说明其研究产生了新的工程体系，信息完整。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–8 流程图填空（Complete the flow-chart，ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 8
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Wooden planks were joined together using ______",
          "translation": "木板是用 ______ 连接在一起的。",
          "answer": "glue",
          "wordClass": "名词（不可数名词，意为“胶水、黏合剂”；空格位于现在分词 using 之后，作其宾语）",
          "locating": {
            "paragraph": "C",
            "quote": "The first stage in the construction of the building saw large planks of Douglas fir being fastened to one another with glue, which these days can be stronger than nails or screws."
          },
          "synonyms": [
            "“joined together” 同义替换为 “fastened to one another”（fasten 意为“固定、连接”）",
            "“using” 同义替换为原文的介词 “with”",
            "“Wooden planks” 同义替换为 “large planks of Douglas fir”"
          ],
          "locatingTip": "定位：流程图标题 Building the Wood Innovation and Design Centre 对应 C 段第一句 “A good example of these techniques is found at the Wood Innovation and Design Centre …”，由此进入 C 段；流程图第一步的 planks 与 joined together 对应 C 段第二句的 large planks 与 fastened to one another。确定答案技巧：空格前是介词 using，其后必须接名词；原文用介词 with 引出连接方式，把题干的 using 与原文的 with 对应起来，紧随其后的 glue 就是答案。注意限制 ONE WORD ONLY，且 nails、screws 出现在 than 之后，是“胶比它们更牢固”的对比对象，不能填。",
          "analysis": "流程图第一步说木板是用某种材料连接在一起的。原文 C 段第二句：The first stage in the construction of the building saw large planks of Douglas fir being fastened to one another with glue, which these days can be stronger than nails or screws. 其中 the first stage（第一阶段）与流程图的顺序完全对应，large planks of Douglas fir 对应题干的 wooden planks，fastened to one another 是 joined together 的同义表达，而 with glue 正是“用胶水”这一方式。原文还特意补充这种胶如今比钉子或螺丝更牢固，进一步确认 glue 是用于连接的材料。由于题干要求 ONE WORD ONLY，答案只能是单个词 glue（不可数名词，用原形），不能写成 glue and nails。",
          "traps": [
            "为什么不是 nails 或 screws：它们出现在比较结构 than 之后，是胶水“比它们更强”的参照物，并非连接木板的手段。",
            "为什么不是 planks 或 fir：planks 是被连接的木板本身（句子的主语），Douglas fir 是木板所用的木材种类，都不是“连接方式”。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Sheets were cut using ______",
          "translation": "板材是用 ______ 切割的。",
          "answer": "Lasers",
          "wordClass": "名词（复数形式，意为“激光（器）”；空格位于现在分词 using 之后作宾语，原文用 employed lasers，故保留复数形式）",
          "locating": {
            "paragraph": "C",
            "quote": "These sheets then had to be precision-cut to create the thousands of columns and beams necessary-the team employed lasers for this purpose."
          },
          "synonyms": [
            "“cut” 同义替换为 “precision-cut”（precision 意为“精确地”）",
            "“using” 同义替换为 “employed … for this purpose”（employ 意为“使用、采用”，for this purpose 指代前文的精确切割）"
          ],
          "locatingTip": "定位：流程图第二步的关键词 sheets 与 cut 对应 C 段第三、四句（This produced large heavy sheets of wooden material … These sheets then had to be precision-cut …），顺着 C 段的施工流程往下读即可锁定。确定答案技巧：空格前是 using，需要填名词；原文使用的动词是 employed（使用），宾语是 lasers，句末 for this purpose 回指前面的 precision-cut，说明激光正是用来完成切割的，因此答案是 lasers。抄写时注意保留原文的复数与大小写形式。",
          "analysis": "流程图第二步说板材是用某种工具切割的。原文 C 段第三句先说胶合的结果：This produced large heavy sheets of wooden material; these became the basic structural components for the building.（由此产生大块厚重的木制板材，它们成为建筑的基本结构构件。）第四句接着说：These sheets then had to be precision-cut to create the thousands of columns and beams necessary-the team employed lasers for this purpose.（这些板材随后必须被精确切割，以制造所需的数千根柱与梁——团队为此使用了激光。）题干把 These sheets 简写为 Sheets、precision-cut 简写为 cut、employed lasers for this purpose 转述为 using，空格处正是 employed 的宾语 lasers。答案为 lasers。",
          "traps": [
            "为什么不是 columns 或 beams：它们是切割之后要制造出来的构件（to create the thousands of columns and beams），不是切割所使用的手段。",
            "为什么不是 Douglas fir：那是第一步中木板所用的木材，与第二步的切割方式无关。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The building was constructed in the same way as a ______",
          "translation": "这座建筑的建造方式与 ______ 相同。",
          "answer": "cake",
          "wordClass": "名词（单数可数名词，意为“蛋糕”；空格前有不定冠词 a，作介词 as 的宾语，必须填单数形式）",
          "locating": {
            "paragraph": "C",
            "quote": "The building was constructed one storey at a time, layer upon layer, not unlike the system used to make a large cake."
          },
          "synonyms": [
            "“in the same way as” 同义替换为 “not unlike the system used to make”（not unlike 为双重否定，表示“与……相似”）",
            "“constructed” 同义替换为 “make”（都是“建造、制作”之意）"
          ],
          "locatingTip": "定位：流程图第四步 “The building was constructed …” 与原文 C 段句子几乎逐字重合，直接到 C 段搜索 The building was constructed 即可。确定答案技巧：题干 in the same way as 对应原文 not unlike（双重否定表肯定，意为“与……相似”），其后 the system used to make a large cake 中，make a large cake 就是被比较的对象；又因空格前有不定冠词 a，需要单数可数名词，故只能填 cake。",
          "analysis": "流程图第四步说这座建筑的建造方式与某样东西相同。原文 C 段写道：The building was constructed one storey at a time, layer upon layer, not unlike the system used to make a large cake.（这座建筑一层一层地建造，层层叠加，与制作一个大蛋糕的方法颇为相似。）原文先描述施工顺序 one storey at a time, layer upon layer（一次一层、层层叠加），再用 not unlike 引出类比对象——做大蛋糕的方法。题干的 in the same way as 正是 not unlike the system used to make 的同义改写，被类比的事物是 a large cake，故空格填 cake。",
          "traps": [
            "为什么不是 storey：storey（楼层）是衡量施工进度的单位（one storey at a time），不是被类比的物件。",
            "为什么不是 layer：layer upon layer 形容的是层层堆叠的状态，被类比的对象仍是“做大蛋糕（make a large cake）”这件事。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "In about 100 years' time, the wood can be ______",
          "translation": "大约 100 年后，这些木材可以被 ______。",
          "answer": "recycled",
          "wordClass": "动词过去分词（与前面的 can be 共同构成被动语态，意为“被回收利用”）",
          "locating": {
            "paragraph": "C",
            "quote": "When the Wood Innovation and Design Centre eventually has to be demolished, it will be possible for its principal building material to be recycled, which is not usually practical with steel or concrete."
          },
          "synonyms": [
            "“In about 100 years' time” 同义替换为 “in around 100 years' time”（原文另有 “at the end of a building's life” 作呼应）",
            "“can be recycled” 同义替换为 “it will be possible … to be recycled”（可以被回收）",
            "“the wood” 同义替换为 “its principal building material”（主要建材，即木材）"
          ],
          "locatingTip": "定位：流程图最后一步的时间标志 In about 100 years' time 对应 C 段倒数第二句的 in around 100 years' time，由此进入 C 段末句。确定答案技巧：题干结构是 the wood can be + 过去分词，原文对应结构为 it will be possible for its principal building material to be recycled，其中 building material 与题干的 the wood 指同一事物，to be recycled 正是答案；注意 ONE WORD ONLY，只填 recycled，并保留过去分词形式（不能填 recycling 或 recycle）。",
          "analysis": "流程图最后一步说大约一百年后木材可以被怎样处理。原文 C 段倒数第二句先交代时间：one of the great advantages of wood comes at the end of a building's life, in around 100 years' time.（木材的一大优势出现在建筑寿命结束时，也就是大约一百年之后。）紧接着的末句给出具体结果：When the Wood Innovation and Design Centre eventually has to be demolished, it will be possible for its principal building material to be recycled, which is not usually practical with steel or concrete.（当这座建筑最终不得不被拆除时，其主要建筑材料是可以被回收利用的，而这一点对钢材和混凝土通常并不实际。）题干的 the wood 对应原文 its principal building material，can be 对应 it will be possible … to be，空格处即 recycled。故答案为 recycled。",
          "traps": [
            "为什么不是 demolished：demolish 描述的是建筑被拆除这一动作，与主语 the wood 搭配不当，也不是木材最终“被如何处理”的结果。",
            "为什么不是 steel 或 concrete：原文用 with steel or concrete 作对比，说明这两类材料通常无法回收，它们不是木材的属性。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 笔记填空（Complete the notes，NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Experience with the Höryü-ji Temple proves that ______ are easier with wood.",
          "translation": "法隆寺的经验证明，木结构更容易进行 ______。",
          "answer": "major repairs",
          "wordClass": "名词短语（形容词 major 修饰复数名词 repairs，意为“大修、重大修缮”；空格后谓语为 are，要求复数名词短语作主语）",
          "locating": {
            "paragraph": "D",
            "quote": "One thing that has been learned from maintaining the Höryü-ji Temple over many centuries is that it is often simpler to make major repairs to wooden structures than to those made of concrete and steel."
          },
          "synonyms": [
            "“easier” 同义替换为 “simpler”",
            "“Experience with the Höryü-ji Temple” 同义替换为 “learned from maintaining the Höryü-ji Temple over many centuries”",
            "“______ are easier with wood” 同义替换为 “simpler to make major repairs to wooden structures”"
          ],
          "locatingTip": "定位：笔记栏目 Japan 与专有名词 Höryü-ji Temple 同时出现。需注意该寺名在 A 段也被提到（讲它历史悠久），但谈“维护经验”的只有 D 段第二句，因此定位到 D 段。确定答案技巧：一是看语法信号——空格后是 are（复数谓语），说明所填内容必须是复数名词短语；二是看语义对应，原文 it is often simpler to make major repairs to wooden structures 中 simpler 对应题干 easier，to make … 的动作对象 major repairs 正好落在主语位置，故填 major repairs，共两个词，符合 NO MORE THAN TWO WORDS（只写 repairs 亦被接受）。",
          "analysis": "笔记说日本法隆寺的经验证明，木结构更容易进行某项操作。原文 D 段第二句：One thing that has been learned from maintaining the Höryü-ji Temple over many centuries is that it is often simpler to make major repairs to wooden structures than to those made of concrete and steel.（多年来维护法隆寺所得到的一点认识是：对木结构进行大修，往往比对混凝土和钢结构进行大修更简单。）原文的比较结构 it is often simpler … than to those made of concrete and steel 与题干的 easier with wood 完全对应，其中 simpler 即 easier 的同义替换，被比较的内容是 make major repairs（进行大修），其宾语 major repairs 就是空格答案。答案也可只写 repairs。",
          "traps": [
            "为什么不是 Höryü-ji Temple：它是被维护的对象，题干中已用 Experience with the Höryü-ji Temple 交代，填入会造成语义重复。",
            "为什么不是 concrete 或 steel：原文是拿木结构与它们作对比，说明木结构更易维修，它们并非“更容易做的事”。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "New technologies and new ______ make large buildings such as Sumitomo Tower possible.",
          "translation": "新技术与新的 ______ 使住友大厦这类大型建筑成为可能。",
          "answer": "regulations",
          "wordClass": "名词（复数形式，意为“法规、规定”；与前面的 new technologies 并列作 make 的主语，且原文 these are being relaxed 中的 these 所指代的就是它）",
          "locating": {
            "paragraph": "D",
            "quote": "Until quite recently, regulations in Japan have made the construction of very large wooden structures difficult. However, in recognition of new technologies, these are being relaxed by the government, with the result that ever more ambitious projects are being announced."
          },
          "synonyms": [
            "“New technologies and new regulations” 同义替换为 “in recognition of new technologies, these [regulations] are being relaxed”",
            "“make large buildings … possible” 同义替换为 “regulations … have made the construction … difficult” 被放宽后带来 “ever more ambitious projects are being announced”",
            "“such as Sumitomo Tower” 对应原文下一句 “Perhaps the most radical example is the proposed Sumitomo Tower”"
          ],
          "locatingTip": "定位：笔记栏目 Japan 与专有名词 Sumitomo Tower 指向 D 段后半；Sumitomo Tower 在 D 段末句，而使其成为可能的原因在前两句。确定答案技巧：从语法入手——题干是 “New technologies and new ______ make … possible”，空格必须是与 new technologies 并列、共同作 make 主语的名词（复数）。回到原文，第三句 Until quite recently, regulations in Japan have made the construction of very large wooden structures difficult 先出现 regulations；第四句 in recognition of new technologies, these are being relaxed by the government 中的 these 回指 regulations，“放宽规定”加上新技术，才使大型项目不断被公布、包括住友大厦。因此空格填 regulations（复数与 these are being relaxed 一致）。",
          "analysis": "笔记说新技术和新的某项规定使住友大厦这类大型建筑成为可能。原文 D 段：Until quite recently, regulations in Japan have made the construction of very large wooden structures difficult. However, in recognition of new technologies, these are being relaxed by the government, with the result that ever more ambitious projects are being announced. Perhaps the most radical example is the proposed Sumitomo Tower, a skyscraper of 70 storeys to be built largely of wood in central Tokyo; its completion date is 2041. 原文的逻辑链是：过去日本的 regulations 使超大型木结构建筑难以建造；后来由于新技术的出现，政府放宽了这些规定（these are being relaxed），于是越来越多雄心勃勃的项目得以公布，其中最激进的就是提议中的住友大厦（70 层、以木材为主）。可见“新技术 + 新法规放宽”共同促成了大型木结构建筑的落地，空格所填的正是 regulations。",
          "traps": [
            "为什么不是 technologies：题干已经写出 New technologies，空格与它并列，语义上不能重复。",
            "为什么不是 projects：原文说规定放宽的结果是更多 ambitious projects 被公布，projects 是结果而非“使之成为可能的原因”，且结构上不能与 new technologies 并列。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Wynn Williams House in New Zealand is earthquake-proof and is an example of how wooden buildings can have ______.",
          "translation": "新西兰的 Wynn Williams House 抗震，是木结构建筑能够拥有 ______ 的例证。",
          "answer": "attractive interiors",
          "wordClass": "名词短语（形容词 attractive 修饰复数名词 interiors，意为“吸引人的室内环境”；位于 have 之后作宾语，用复数形式）",
          "locating": {
            "paragraph": "E",
            "quote": "The wood has been left exposed inside the house to showcase how this type of construction provides attractive interiors as well."
          },
          "synonyms": [
            "“can have” 同义替换为 “provides”（提供、拥有）",
            "“is an example of how” 同义替换为 “to showcase how this type of construction”（用以展示）",
            "“earthquake-proof” 同义替换为原文 “wood construction can significantly improve building safety in the event of a natural disaster”"
          ],
          "locatingTip": "定位：专有名词 Wynn Williams House 在全文只出现在 E 段第二、三句，配合国家名 New Zealand 可快速锁定。确定答案技巧：题干 have 之后需要一个名词性成分作宾语；回到原文，as has been demonstrated at the new Wynn Williams House 之后紧接一句 The wood has been left exposed … to showcase how this type of construction provides attractive interiors as well，其中 provides 与题干的 have 对应，宾语 attractive interiors 就是答案，共两个词，符合 NO MORE THAN TWO WORDS。",
          "analysis": "笔记说 Wynn Williams House 抗震，并展示了木结构建筑还能拥有什么。原文 E 段：Because wood is more flexible than steel, it has great potential in countries prone to earthquakes, such as Japan and New Zealand. Engineers in New Zealand believe that wood construction can significantly improve building safety in the event of a natural disaster, as has been demonstrated at the new Wynn Williams House. The wood has been left exposed inside the house to showcase how this type of construction provides attractive interiors as well. 原文先说木材比钢材更具柔韧性，因此在地震多发国大有可为；新西兰工程师认为木结构能显著提升自然灾害发生时的建筑安全性，Wynn Williams House 就是证明；接着指出该住宅室内故意让木材裸露，以展示这种建造方式还带有 attractive interiors（吸引人的室内观感）。题干 earthquake-proof 对应 improve building safety，空格处对应 provides 的宾语，故填 attractive interiors。",
          "traps": [
            "为什么不是 safety：建筑安全已由题干 earthquake-proof（抗震）涵盖，不需要重复；空格前 have 需要的是“建筑还拥有什么额外优势”。",
            "为什么不是 wood 或 flexibility：它们只是实现抗震的手段与原因（more flexible than steel），不是这栋房子所展示的额外优势。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Wood is so light that a new library in Australia was built right next to ______.",
          "translation": "木材很轻，因此澳大利亚的一座新图书馆就建在 ______ 旁边。",
          "answer": "water",
          "wordClass": "名词（不可数名词，意为“水”；空格前是复合介词 next to，作其宾语；原文为 beside the water，作答时只写 water 一词）",
          "locating": {
            "paragraph": "E",
            "quote": "In Australia, the benefits of lightweight have been taken advantage of in the city of Melbourne, where a large wooden library has been constructed directly beside the water, on land so soft that a heavier building would have been impossible."
          },
          "synonyms": [
            "“right next to” 同义替换为 “directly beside”（directly 与 right 同义，beside 与 next to 同义）",
            "“Wood is so light” 同义替换为 “the benefits of lightweight”（轻量化的好处）",
            "“was built” 同义替换为 “has been constructed”"
          ],
          "locatingTip": "定位：笔记中的两个关键词 Australia 与 library 同现于 E 段倒数第二句（In Australia … a large wooden library …），一句即可定位。确定答案技巧：题干 was built right next to 对应原文 has been constructed directly beside，空格位于表示方位的介词之后，必须填名词或名词短语；原文 beside 后面是 the water，去掉冠词后填 water。so light 对应上文的 the benefits of lightweight，可用来交叉验证定位无误。",
          "analysis": "笔记说木材很轻，所以澳大利亚的一座新图书馆紧邻某物而建。原文 E 段：Another advantage of wood is that it is so light, particularly when compared to steel and concrete. In Australia, the benefits of lightweight have been taken advantage of in the city of Melbourne, where a large wooden library has been constructed directly beside the water, on land so soft that a heavier building would have been impossible. 原文先指出木材的另一大优势是“非常轻”，接着以墨尔本为例说明轻量化的好处：大型木结构图书馆就直接建在水边（directly beside the water），因为那里的土地太软，换作更重的建筑根本无法建成。题干的 so light 对应 the benefits of lightweight，right next to 对应 directly beside，故空格填 water。",
          "traps": [
            "为什么不是 Melbourne：Melbourne 是图书馆所在的城市，题干已用 in Australia 概括了地点，且句子结构要求填“紧邻的对象”。",
            "为什么不是 land：原文 on land so soft … 说的是图书馆脚下的地基很软，是解释为何必须用轻质材料的原因，不是图书馆“紧邻”的对象。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Finland's Puukuokka Block illustrates that wood provides a good ______ in addition to structural strength.",
          "translation": "芬兰的 Puukuokka Block 表明，木材除了提供结构强度，还能提供良好的 ______。",
          "answer": "heat insulation",
          "wordClass": "名词短语（不可数名词短语，意为“保温、隔热”；位于 good 之后作宾语中心语，由 heat 修饰 insulation，共两个词，符合 NO MORE THAN TWO WORDS）",
          "locating": {
            "paragraph": "E",
            "quote": "In Finland, where winter temperatures can fall to -30°C, wood provides all the load-bearing structures for the Puukuokka Block but also guarantees excellent heat insulation as well."
          },
          "synonyms": [
            "“structural strength” 同义替换为 “load-bearing structures”（承重结构即强度）",
            "“provides … in addition to” 同义替换为 “provides … but also guarantees … as well”（不仅……还……的并列结构）",
            "“a good ______” 同义替换为 “excellent heat insulation”（excellent 与 good 同义）"
          ],
          "locatingTip": "定位：专有名词 Puukuokka Block 在全文只出现一次，位于 E 段最后一句，配合国家名 Finland 可瞬间锁定。确定答案技巧：题干 in addition to structural strength 对应原文 all the load-bearing structures … but also guarantees … as well 这一“不仅……还……”的并列结构，其中 load-bearing structures 对应 structural strength；空格处是 guarantees（对应 provides）的宾语中心语，去掉修饰语 excellent 后即为 heat insulation，共两个词，符合 NO MORE THAN TWO WORDS（只写 insulation 亦被接受）。",
          "analysis": "笔记说芬兰的 Puukuokka Block 表明，木材除了结构强度之外还能提供良好的某项性能。原文 E 段末句：In Finland, where winter temperatures can fall to -30°C, wood provides all the load-bearing structures for the Puukuokka Block but also guarantees excellent heat insulation as well.（在冬季气温可低至零下 30 摄氏度的芬兰，木材为 Puukuokka Block 提供了全部承重结构，同时还保证了极佳的保温隔热性能。）原文用 but also … as well 形成递进，前半 all the load-bearing structures 对应题干的 structural strength，后半 guarantees excellent heat insulation 对应 “provides a good ______”，因此答案为 heat insulation。",
          "traps": [
            "为什么不是 structures：all the load-bearing structures 已被题干 structural strength 涵盖，属于同一项优势，不能重复作答。",
            "为什么不是 temperatures 或 winter：它们只是交代芬兰严寒的气候背景，用来解释为何需要保温，并不是木材本身提供的性能。",
            "为什么不是 excellent：excellent 是修饰语（与题干 good 同义），雅思填空题一般只填承载答案信息的核心名词短语，填 excellent 会超出答案词数且语义不完整。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
