(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-46", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-46",
  "meta": {
    "examId": "p1-low-46",
    "title": "Sydney Opera House 悉尼歌剧院",
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
          "stem": "Utzon was famous for his work before he designed the Opera House.",
          "translation": "乌松在设计歌剧院之前就因其作品而闻名。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "It attracted more than 200 entries from around the world and was won by Jørn Utzon, a relatively little-known architect from Denmark."
          },
          "synonyms": [
            "“was famous for his work” 与原文 “a relatively little-known architect”（一位相对鲜为人知的建筑师）意思相反，famous 的对立面正是 little-known",
            "“before he designed the Opera House” 与原文同句交代的时间点重合：原文把这一评价放在他 1956 年赢得竞赛、设计尚未动工之时",
            "“Utzon” 与原文人名 “Jørn Utzon” 原词复现，是本题最直接的定位词"
          ],
          "locatingTip": "定位：人名 Utzon 全文反复出现，不能作为唯一定位依据；应改用 “famous” 加 “before he designed” 这组描述“名望与出道时间”的词，回原文找到介绍其身份的那句，位于第 2 段——“a relatively little-known architect from Denmark”。确定答案技巧：判断题中出现 famous、well-known、renowned 这类“名气”评价词时，务必回原文核对对人物身份的定性词，看是抬高还是压低。原文用 relatively little-known（相对鲜为人知）定性，且这句话就写在他赢得竞赛的同一句里，直接否定了“赛前即出名（famous before he designed）”的说法，属于事实冲突，故判 FALSE。",
          "analysis": "第 2 段讲 1956 年新南威尔士州州长宣布举办国际设计竞赛：“It attracted more than 200 entries from around the world and was won by Jørn Utzon, a relatively little-known architect from Denmark.”（竞赛吸引了两百多份来自世界各地的方案，最终由来自丹麦、当时相对鲜为人知的建筑师约恩·乌松赢得）。句中 a relatively little-known architect 作同位语，专门补充交代乌松当时的身份与知名度：little-known 意为“鲜为人知”，副词 relatively 表示“相对地”，说明他当时并非知名人士。题干却说“Utzon was famous for his work before he designed the Opera House”（乌松在设计歌剧院之前就因其作品而闻名），把 little-known 直接替换成了 famous，还把时间限定在“设计之前”。原文的定性词与题干结论正好相反，构成事实矛盾，因此答案是 FALSE。本题最值得记住的判断依据是“名气类形容词方向”：原文出现 little-known、unknown、not well-known 时，任何 famous、renowned、celebrated 的说法都应判 FALSE，不要因为“他后来确实成名了”而误选 TRUE——题干限定的时间点（before he designed the Opera House）恰恰就是原文给出 little-known 评价的时间点。",
          "traps": [
            "为什么不是 TRUE：原文用 a relatively little-known architect from Denmark 明确说他中选时相对鲜为人知，famous（著名）与 little-known（鲜为人知）互为反义，信息方向相反，原文没有任何支持 TRUE 的表述。",
            "为什么不是 NOT GIVEN：原文对乌松赛前的知名度有直接、明确的定性（little-known），并非没有提及；这一定性与“赢得竞赛”写在同一句中，时间关系清楚，属于“存在相反信息”的 FALSE，而不是“信息缺失”的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Utzon's design was favoured by the four judges of the competition from the beginning.",
          "translation": "乌松的设计从一开始就受到竞赛四位评委的青睐。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "one judge, American architect Eero Saarinen, arrived in Sydney after the other three judges had started assessing the entries. He looked through their rejected entries and stopped at the Utzon design, declaring it to be outstanding."
          },
          "synonyms": [
            "“the four judges” 对应原文的 “one judge … the other three judges”（一位评委与另外三位评委），合起来正是四位评委",
            "“was favoured by” 与原文 “declaring it to be outstanding”（宣称它极为出色）方向一致，表示赞许",
            "“from the beginning” 与原文 “after the other three judges had started assessing the entries” 以及 “their rejected entries” 相互冲突：另外三位评委早已把他的方案列入淘汰之列"
          ],
          "locatingTip": "定位：题干的 competition、judges、Saarinen 都是第 2 段独有的信息，其中人名 Eero Saarinen 全文只出现一次，扫到它即可锁定第 2 段后半部分。确定答案技巧：本题的判分点在“四位评委”与“从一开始”这两个限定上。原文把评委分成两拨：一位（美国建筑师 Eero Saarinen）晚到，另外三位已经开始评审；他是从“被他们否决的方案（their rejected entries）”里翻出乌松设计的。也就是说，明确赞成乌松的只有一位评委，另外三位此前并未青睐，题干“四位评委从一开始就青睐”与原文的分化情形直接矛盾，故判 FALSE。看到 all、both、four、from the beginning 这类“全体或起点”的限定词，就要警惕原文是否只提到部分人或部分时间。",
          "analysis": "第 2 段后两句交代竞赛评审的内情：“The story goes that during the judging of the competition, one judge, American architect Eero Saarinen, arrived in Sydney after the other three judges had started assessing the entries. He looked through their rejected entries and stopped at the Utzon design, declaring it to be outstanding.”（据说评审期间，一位评委——美国建筑师埃罗·沙里宁——在另外三位评委已开始评审之后才抵达悉尼。他翻看被他们否决的方案，在乌松的设计前停下来，宣称它极为出色）。逐点比对题干：其一，“the four judges”在原文中呈现为 one judge 与 the other three judges，人数确实共四位，但态度并不一致；其二，“was favoured”只有 Saarinen 一人 declaring it to be outstanding，另外三位评委的态度体现在 their rejected entries（被他们淘汰的方案）之中，说明他们并未选中乌松方案；其三，“from the beginning”更站不住脚，Saarinen 本人都是迟到的评委（arrived in Sydney after the other three judges had started assessing the entries），谈不上“从一开始”就获得全体青睐。三点均与题干不合，因此答案是 FALSE。本题的命题手法是把“一位评委力挺”夸大为“四位评委一致青睐”，属于人数与范围的偷换；做题时应把人物的数量与态度逐一对上，不能只看到表示赞许的词语就仓促选 TRUE。",
          "traps": [
            "为什么不是 TRUE：原文只写一位评委（Eero Saarinen）宣称乌松方案 outstanding，另外三位评委的相关信息是 their rejected entries（被他们否决的方案），说明他们并未青睐该方案；题干把一位评委的赞许扩写成四位评委的共同态度，又加上 from the beginning，与原文不符。",
            "为什么不是 NOT GIVEN：原文对四位评委的人数和评审过程都有明确交代（一位迟到并力挺、三位此前已将其方案列入淘汰），信息清楚且与题干相反，属于“有相反信息”的 FALSE，而不是“没有信息”的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Utzon's knowledge of boats gave him the idea for parts of the Opera House.",
          "translation": "乌松对船只的了解为他设计歌剧院的部分结构提供了灵感。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "His early exposure to shipbuilding provided the inspiration for the design of the roof, which is a series of curved 'shells' that look like the sails of a sailing ship billowing in the wind."
          },
          "synonyms": [
            "“knowledge of boats” 同义替换为原文的 “his maritime background” 与 “His early exposure to shipbuilding”（海事背景、早年接触造船）",
            "“gave him the idea for” 同义替换为原文的 “provided the inspiration for”",
            "“parts of the Opera House” 具体对应原文的 “the design of the roof”，屋顶是以船帆为原型的贝壳状结构，属于歌剧院的一部分"
          ],
          "locatingTip": "定位：题干关键词 boats 与 shipbuilding 属于本文辨识度最高的一组词，可在第 3 段找到 maritime background、shipbuilding、sails 等词群；若先扫到专有名词 Mexico，其前一句就是本题的定位句。确定答案技巧：题干把“航海经历”与“歌剧院某一部分”建立因果（gave him the idea for parts of the Opera House）。原文对应句 “His early exposure to shipbuilding provided the inspiration for the design of the roof” 中，His early exposure to shipbuilding 正是题干 knowledge of boats 的同义改写，provided the inspiration for 正是 gave him the idea for，宾语 the design of the roof 即“歌剧院的一部分（parts）”。同段还有 “he used his maritime background to study naval charts of Sydney Harbour” 作为旁证，两处线索方向一致，故判 TRUE。",
          "analysis": "第 3 段首句点明本段主题：“It was Utzon's life and travels that had shaped his design for the Sydney Opera House.”（正是乌松的生活经历与游历塑造了他对悉尼歌剧院的设计。）随后分述三处来源：其一是海事背景，“Though he had never visited the site, he used his maritime background to study naval charts of Sydney Harbour.”（尽管从未到过现场，他仍运用自己的海事背景研究悉尼港的海图）；其二是造船经历，即本题定位句“His early exposure to shipbuilding provided the inspiration for the design of the roof, which is a series of curved 'shells' that look like the sails of a sailing ship billowing in the wind.”（他早年接触造船的经历为屋顶设计提供了灵感，屋顶是一系列弯曲的“贝壳”，看上去像迎风鼓起的船帆）；其三是墨西哥之行，“From his travels to Mexico, he had the idea of placing his building on a wide horizontal platform.”。题干 “Utzon's knowledge of boats gave him the idea for parts of the Opera House” 中，knowledge of boats 对应 his maritime background 与 His early exposure to shipbuilding，gave him the idea for 对应 provided the inspiration for，parts of the Opera House 对应 the design of the roof。原文不仅给出灵感来源，还用 look like the sails of a sailing ship 进一步点明船与建筑的联系，方向一致、因果明确，所以答案是 TRUE。本题的替换特点是“抽象概括对应具体细节”：题干用泛化的 knowledge of boats 概括原文的 maritime background 与 shipbuilding，用 parts 概括具体的 the roof，只要认出这层概括关系，就不会误判为 NOT GIVEN。",
          "traps": [
            "为什么不是 FALSE：原文正面陈述“早年接触造船的经历为屋顶设计提供了灵感”，即关于船的知识确实转化为歌剧院某一部分的设计，与题干完全同向，没有矛盾点。",
            "为什么不是 NOT GIVEN：原文既提到他研究海图、接触造船，又明确指出这为屋顶（贝壳形、形似船帆）提供了灵感，因果关系被直接写出，信息完备，属于已提及且一致。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Utzon was impressed by the opera houses he had seen in Mexico.",
          "translation": "乌松对他在墨西哥见过的那些歌剧院印象深刻。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "From his travels to Mexico, he had the idea of placing his building on a wide horizontal platform."
          },
          "synonyms": [
            "“his travels to Mexico” 与原文 “From his travels to Mexico” 完全对应，墨西哥之行的信息在原文确实存在",
            "“the opera houses he had seen” 在原文中没有任何对应：原文只说他从墨西哥之行得到“把建筑放在宽阔水平平台上”的想法，没有提到他看过任何歌剧院",
            "“was impressed by” 这一心理评价同样无处对应：原文用的是 “he had the idea of”（他产生了……的想法），只交代灵感的产物，不涉及是否被打动或印象深刻"
          ],
          "locatingTip": "定位：专有名词 Mexico 在全文只出现一次，位于第 3 段末句，扫到它即可立刻锁定。确定答案技巧：本题是“部分信息为真、核心信息缺失”的典型 NOT GIVEN 结构。原文确实写了乌松的墨西哥之行，但给出的唯一内容是 “he had the idea of placing his building on a wide horizontal platform”（他由此产生了把建筑置于宽阔水平平台上的想法）；题干真正的落点却是“他在墨西哥见过的歌剧院”以及他的主观感受（was impressed by）。原文既没说他在墨西哥看过歌剧院，也没有任何关于他感受的评价，信息缺失，判 NOT GIVEN；不能因为他确实去过墨西哥就选 TRUE。",
          "analysis": "第 3 段末句：“From his travels to Mexico, he had the idea of placing his building on a wide horizontal platform.”（从墨西哥之行中，他产生了把建筑置于宽阔水平平台上的想法。）这句话提供两项信息：行程地点是墨西哥；收获是把建筑架在水平大平台上。题干 “Utzon was impressed by the opera houses he had seen in Mexico” 提供的信息是：他在墨西哥看过一些歌剧院，且对这些歌剧院印象深刻（was impressed by）。两者只有 Mexico 一词重合，题干真正的两个信息点——墨西哥的歌剧院、以及他被打动——在原文中都找不到任何对应文字。值得注意的是，本段谈的是屋顶与平台的设计灵感，从头到尾没有把 opera house 与乌松的墨西哥见闻联系起来，也没有出现 impressed、admired、inspired by 之类的感受词。按判断题规则，题干所述信息原文未提及即判 NOT GIVEN。做题提醒：这类题要防止凭常识联想（墨西哥确实有著名建筑），必须严格以原文为限；他曾去过某地，并不等于他在某地做了题干所述的事。",
          "traps": [
            "为什么不是 TRUE：原文只说他从墨西哥之行得到了“把建筑放在宽阔水平平台上”的想法，从未提到他在墨西哥参观过歌剧院，更没有任何表示他印象深刻（impressed）的评价，题干的两项核心信息都缺乏原文依据。",
            "为什么不是 FALSE：原文既没有否认他在墨西哥看过歌剧院，也没有说他对墨西哥的建筑不感兴趣，只是对这些内容未作交代，缺乏相反信息，因此不能判 FALSE。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Utzon changed his designs in the 1960s after construction began.",
          "translation": "乌松在施工开始之后于 20 世纪 60 年代修改了自己的设计。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Construction of the platform began in 1959, and throughout the early 1960s Utzon amended his original designs in order to develop a way to build the large 'shells' that cover the two main halls."
          },
          "synonyms": [
            "“changed his designs” 同义替换为原文的 “amended his original designs”",
            "“in the 1960s” 同义替换为原文的 “throughout the early 1960s”（20 世纪 60 年代初，属于 60 年代的一部分）",
            "“after construction began” 同义替换为原文的时间顺序 “Construction of the platform began in 1959, and throughout the early 1960s …”，1959 年开工在前，60 年代初的修改在后"
          ],
          "locatingTip": "定位：题干的关键信息是时间关系——1960s 与 construction began，二者都与施工、设计有关，直接读第 4 段开头即可找到“施工始于 1959 年、60 年代初修改设计”的表述。确定答案技巧：本题的判定点在于先后顺序是否与题干一致。原文把两个时间点写进同一句：平台施工 began in 1959，随后 throughout the early 1960s Utzon amended his original designs。开工 1959 年在前，修改 60 年代在后，与题干 “in the 1960s after construction began” 完全吻合；amended his original designs 与 changed his designs 同义。故判 TRUE。",
          "analysis": "第 4 段首句：“Construction of the platform began in 1959, and throughout the early 1960s Utzon amended his original designs in order to develop a way to build the large 'shells' that cover the two main halls.”（平台的施工始于 1959 年，整个 20 世纪 60 年代初，乌松不断修改自己的原设计，以找出一套建造覆盖两个主厅的大型“贝壳”屋面的方法。）题干 “Utzon changed his designs in the 1960s after construction began” 包含三项信息：主体是乌松；时间是 20 世纪 60 年代；动作是在施工开始之后修改设计。逐项对应：乌松在原文中就是主语；the early 1960s 落在 1960s 之内，属于合理的范围概括；原文先写平台施工 began in 1959，再讲 60 年代初的修改，先后关系一目了然，“after construction began” 成立。三处信息与原文一一契合，因此答案 TRUE。有两点需要留意：其一，原文的施工对象是 the platform（平台），题干只笼统说 construction，属于合理的上位概括，并未改变事实；其二，不要因为题干用一般过去时而原文用 throughout the early 1960s（贯穿 60 年代初）就产生怀疑，两者只是强调“持续方式”不同，事件本身一致。",
          "traps": [
            "为什么不是 FALSE：原文明确写着施工于 1959 年开工，而修改设计发生在早 1960 年代，即修改确实发生在开工之后，与题干所述的时间关系一致，原文没有任何可用来判 FALSE 的矛盾。",
            "为什么不是 NOT GIVEN：原文对施工起始年份（1959）与修改设计的时间（the early 1960s）都有明确交代，并把两者写在同一句里，先后顺序清楚，信息完整，不属于未提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Seidler defended Utzon's role as architect.",
          "translation": "塞德勒为乌松作为建筑师的地位进行了辩护。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Following his resignation, there were protests through the streets led by prominent architect Harry Seidler and others, demanding that Utzon be reinstated as architect."
          },
          "synonyms": [
            "“Seidler” 与原文 “prominent architect Harry Seidler” 人名原词复现，原文还补充说明他也是知名建筑师",
            "“defended Utzon's role as architect” 同义替换为原文的 “demanding that Utzon be reinstated as architect”（要求恢复乌松的建筑师职务），即为他的建筑师身份公开发声",
            "“defended” 对应原文的 protests（抗议）与 demanding（要求）这类公开表态行为"
          ],
          "locatingTip": "定位：题干的人名 Seidler 是全文辨识度很高的专有名词，只在第 5 段出现一次，扫读全篇找到它即可锁定；同段的 resignation、1966 等事件与时间线索可作佐证。确定答案技巧：判断“某人是否支持某人”的题，要去原文找该人对当事人采取的行动或表达的态度。原文说 Seidler and others 领导的抗议（protests）旨在 demanding that Utzon be reinstated as architect，即要求恢复乌松的建筑师职位，这正是为其建筑师身份所做的公开辩护。题干把这一具体行为概括为 defended Utzon's role as architect，语义一致、方向相同，故判 TRUE。注意不要把 protest 理解成负面行为：此处抗议的对象是政府，目的是替乌松讨回职位。",
          "analysis": "第 5 段讲乌松被迫离职：“Following his resignation, there were protests through the streets led by prominent architect Harry Seidler and others, demanding that Utzon be reinstated as architect.”（他辞职之后，由知名建筑师哈里·塞德勒等人带领，街头发生了抗议，要求恢复乌松的建筑师职务。）由此可知塞德勒不仅没有与乌松切割，反而站在最前面（led）领导抗议，公开要求让乌松回到建筑师岗位。题干的 defended Utzon's role as architect（为乌松的建筑师角色辩护）正是对 demanding that Utzon be reinstated as architect 的概括：defend 对应“公开支持、力争”，Utzon's role as architect 对应 as architect（建筑师职位）。原文既交代了他的立场，又给出具体手段（protests through the streets）和目标（reinstated），依据充分，故答案 TRUE。此外本段后面还写了 “However, Utzon was not reinstated and left Australia in 1966.”（乌松并未被复位，并于 1966 年离开澳大利亚），说明抗议虽由塞德勒发起却未能改变结果；但题干问的是“他是否为之辩护”，原文的行动描写已经足够，结果成败不影响判断。",
          "traps": [
            "为什么不是 FALSE：原文明确写塞德勒领导抗议并要求恢复乌松的职务，这正是为其建筑师身份辩护的正面行为，原文没有任何反对或质疑他的表述，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文给出的是行动层面的明确证据（protests through the streets led by prominent architect Harry Seidler and others, demanding that Utzon be reinstated as architect），并非只提人名而未谈态度，因此属于“有信息且一致”的 TRUE，而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Utzon went back to Australia in 1973 for the opening of the Opera House.",
          "translation": "乌松于 1973 年回到澳大利亚参加歌剧院的落成典礼。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "However, Utzon was not reinstated and left Australia in 1966. He never returned, and new architects were appointed to complete the building in his absence."
          },
          "synonyms": [
            "“went back to Australia” 与原文 “left Australia in 1966. He never returned” 相互冲突：原文明确写他再未返回澳大利亚",
            "“in 1973” 在原文中确实出现，但指的是 “the Opera House was not formally completed until 1973”，即建筑的正式完工年份，与乌松本人是否回国无关",
            "“in his absence” 与题干的“回国出席”场景相反：原文说新建筑师是在他缺席的情况下完成建筑的"
          ],
          "locatingTip": "定位：题干同时给了人名 Utzon 与年份 1973，两者都集中在第 5 段——乌松的离职与“从未返回”在前，1973 年的完工在后，因此本题与紧随其后的第 8 题共用同一段落。确定答案技巧：本题的陷阱是把“歌剧院 1973 年完工”误读成“乌松 1973 年回国参加典礼”。原文写 “He never returned”，是毫不含糊的否定；同时新建筑师是在 in his absence（他缺席）的情况下完成建筑的，说明 1973 年的完工现场并无他的身影。题干所述与原文直接冲突，故判 FALSE。做题时看到年份，要核对这个年份在原文里修饰的是谁或哪件事。",
          "analysis": "第 5 段后半段依次交代三个事实：“However, Utzon was not reinstated and left Australia in 1966.”（然而乌松没有被复位，并于 1966 年离开澳大利亚）；“He never returned, and new architects were appointed to complete the building in his absence.”（此后再未回国，新建筑师受命在他缺席的情况下完成建筑）；“However, the Opera House was not formally completed until 1973, having cost $102 million.”（歌剧院直到 1973 年才正式完工，造价达 1.02 亿美元）。题干 “Utzon went back to Australia in 1973 for the opening of the Opera House” 包含两个信息点：回国这一动作，以及 1973 年这个时间并将其与落成典礼绑定。原文中 1973 确实存在，但它修饰的是 the Opera House was not formally completed until 1973（歌剧院正式完工），与乌松本人的行踪毫无关系；而涉及乌松行踪的表述是 He never returned（他再也没回来），并有 in his absence（在他缺席时）作为旁证。把两者拼在一起，题干必然为假，因此答案是 FALSE。本题的命题手法是“真实年份加错误主体”：年份本身正确，动作主体与内容却被张冠李戴，若不细读很容易把 1973 与 Utzon 直接连线而误选 TRUE。",
          "traps": [
            "为什么不是 TRUE：原文用 He never returned 明确说他 1966 年离开澳大利亚后再未回国，并说新建筑师是在他缺席（in his absence）的情况下完成建筑的；1973 在原文中只是歌剧院正式完工的年份，无法推出乌松当年回国出席落成典礼。",
            "为什么不是 NOT GIVEN：原文对乌松 1966 年之后的行踪有明确交代（从未返回、缺席完工），属于“存在相反信息”的情形，因此是 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 笔记填空（ONE WORD AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Final cost 8 $ ________",
          "translation": "最终造价：8 ______ 美元。",
          "answer": "102 million",
          "wordClass": "数词短语（表金额的数量；空格前已有美元符号 $，故填数词加单位，照抄原文形式 102 million，数字与单位两部分都要写出）",
          "locating": {
            "paragraph": "5",
            "quote": "However, the Opera House was not formally completed until 1973, having cost $102 million."
          },
          "synonyms": [
            "“Final cost” 同义替换为原文的 “having cost $102 million”，原文用分词短语补充说明完工时的实际花费",
            "题干表格中已给出的 $ 符号与原文 $102 million 中的符号对应，空格需要填的是符号之后的数字与单位",
            "“Final” 与原文的 “formally completed” 呼应，说明这一金额是完工定案的花费，而非最初估算"
          ],
          "locatingTip": "定位：表格第一栏 Final cost 对应的信息点是“造价”，全文只有一处给出最终金额，即第 5 段末句的 $102 million；但该段还出现过 the original cost estimate … was $7 million，需要区分“最终造价”与“最初估算”。确定答案技巧：题干问 Final cost（最终造价），原文对应表述是 having cost $102 million，即完工时的实际花费；而 $7 million 属于 the original cost estimate（最初的造价估算），并非最终造价。表格已提供 $ 符号，因此空格写 102 million 即可，词数限制为 ONE WORD AND/OR A NUMBER，正好符合。",
          "analysis": "第 5 段末句：“However, the Opera House was not formally completed until 1973, having cost $102 million.”（然而歌剧院直到 1973 年才正式完工，造价达到 1.02 亿美元。）同一段前文还有一句干扰信息：“The original cost estimate for the Opera House was $7 million, with the completion date set for 26 January 1963.”（歌剧院最初的造价估算是 700 万美元，预定的完工日期是 1963 年 1 月 26 日。）两句形成鲜明对比：7 million 是 original cost estimate（最初估算），102 million 是实际完工时的花费（having cost 与完工结果同时出现）。表格写的是 Final cost（最终造价），指向实际发生的花费，因此答案是 102 million。填写时注意题干已经给出 $ 符号，空格只填数字与单位 102 million（两部分组合，符合 ONE WORD AND/OR A NUMBER 的词数上限），不要重复写美元符号。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Over a million tiles from 9 ________",
          "translation": "超过一百万片瓦片来自 9 ______。",
          "answer": "sweden",
          "wordClass": "专有名词（国名，规范首字母大写；位于介词 from 之后作宾语，与 from 构成说明瓦片来源的介词短语；答案表记作小写 sweden，按答案表原样照抄）",
          "locating": {
            "paragraph": "7",
            "quote": "The 'shells' are covered with 1,056,006 white and cream-coloured tiles manufactured in a factory in Sweden that generally produced stoneware tiles for the paper-mill industry."
          },
          "synonyms": [
            "“Over a million tiles” 同义替换为原文的 “1,056,006 white and cream-coloured tiles”，原文给出精确数字，题干用概数表述",
            "“from Sweden” 对应原文的 “manufactured in a factory in Sweden”，即瓦片是在瑞典的一家工厂制造的",
            "“tiles” 与原文的 tiles 原词复现，可直接用于定位"
          ],
          "locatingTip": "定位：表格给出的是数字线索 Over a million tiles，全文只有第 7 段出现瓦片的具体数量（1,056,006），扫读数字即可锁定该段第 2 句。确定答案技巧：要填的是瓦片的来源地。原文说这些瓦片是 manufactured in a factory in Sweden（在瑞典的一家工厂制造），题干用 from 加空格问来源，与原文的地点指向一致，因此填 Sweden，并按答案表原样写作小写 sweden。注意同段还提到 the development of the special ceramic tiles took over three years（特种瓷砖的研发耗时三年多），那说的是研发时间，不是产地，不要混填。",
          "analysis": "第 7 段第 2 句：“The 'shells' are covered with 1,056,006 white and cream-coloured tiles manufactured in a factory in Sweden that generally produced stoneware tiles for the paper-mill industry.”（“贝壳”屋面覆盖着 1,056,006 片白色与奶油色的瓷砖，这些砖出自瑞典的一家工厂，该厂通常为造纸工业生产炻器砖。）表格栏目写 Over a million tiles from 9，其中 Over a million 与原文的 1,056,006 形成概数与精确数的对应（1,056,006 确实超过一百万），from 引出的是产地，正对应原文 manufactured in a factory in Sweden，因此答案是 Sweden。同段其余信息可作排除：“The design solution and construction of the shell structure took eight years to complete, and the development of the special ceramic tiles took over three years.” 讲的是时间；而 “Apart from the tiles covering the 'shells', the building's exterior is mostly clad with granite quarried in Australia.” 讲的是外墙的石材（正是第 10 题的内容）。答案照答案表写作小写 sweden。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "10 ________ from Australia covering the outside walls",
          "translation": "来自澳大利亚的 10 ______ 覆盖在外墙上。",
          "answer": "granite",
          "wordClass": "名词（不可数，石材名称；在笔记条目中作中心词，被其后的介词短语 from Australia 修饰，说明外墙所用的石材；保持不可数形式 granite，不加冠词、不变复数）",
          "locating": {
            "paragraph": "7",
            "quote": "Apart from the tiles covering the 'shells', the building's exterior is mostly clad with granite quarried in Australia."
          },
          "synonyms": [
            "“from Australia” 同义替换为原文的 “quarried in Australia”（在澳大利亚开采），即产地是澳大利亚",
            "“covering the outside walls” 同义替换为原文的 “the building's exterior is mostly clad with”（建筑外立面大多覆以……）",
            "“Apart from the tiles” 提示本句与上一句形成对比：上一句讲覆盖“贝壳”的瓦片，本句讲覆盖外立面的石材，两句信息不可混用"
          ],
          "locatingTip": "定位：题干的 from Australia 与 covering the outside walls 都集中在第 7 段末句，句式也与表格栏目一一对应（exterior 对应 outside walls）。确定答案技巧：题干问的是一种来自澳大利亚、覆盖外墙的材料。原文的 clad with 意为“以……作外覆层”，其后的 granite 就是材料，quarried in Australia 补充说明产地，与表格的 from Australia 吻合。注意与上一句区分：tiles 覆盖的是“贝壳”屋面（第 9 题），花岗岩覆盖的是建筑外墙面（第 10 题），题干已用 covering the outside walls 作了明确界定，因此答案填 granite；该词为不可数名词，照抄原形即可。",
          "analysis": "第 7 段末句：“Apart from the tiles covering the 'shells', the building's exterior is mostly clad with granite quarried in Australia.”（除覆盖“贝壳”屋面的瓷砖之外，建筑的外立面大多覆以在澳大利亚开采的花岗岩。）表格这一条写 “10 from Australia covering the outside walls”，与原文逐项对应：covering the outside walls 对应 the building's exterior is mostly clad with，from Australia 对应 quarried in Australia，而位于 clad with 之后的名词 granite 就是所需填入的材料，答案是 granite。本题的干扰点在于上一句刚讲瓷砖产自瑞典，若把两句混起来，容易误把 Sweden 或 tiles 搬到第 10 题；但原文用 Apart from the tiles（除了瓷砖之外）明确把话题切换到外墙材料，题干又用 covering the outside walls 限定位置，双重线索都指向 granite。另外注意 granite 不可数，直接照抄原形，不加冠词也不加复数。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "11 ________ performing-arts companies have their home base at the Opera House",
          "translation": "有 11 ______ 家表演艺术团体把歌剧院作为自己的驻地。",
          "answer": "four",
          "wordClass": "数词（基数词，修饰复数名词 companies，表示数量；按原文照抄单词 four，不要写成序数词 fourth）",
          "locating": {
            "paragraph": "8",
            "quote": "It hosts a large number of performing-arts companies, including the four resident companies: Opera Australia, the Australian Ballet, the Sydney Theatre Company and the Sydney Symphony Orchestra."
          },
          "synonyms": [
            "“have their home base at the Opera House” 同义替换为原文的 “hosts … the four resident companies”，resident（常驻的）即“以该处为驻地”",
            "“performing-arts companies” 与原文的 performing-arts companies 原词复现",
            "“11 ________” 对应原文的 “the four”，数字要从 resident companies 的数量中读出"
          ],
          "locatingTip": "定位：题干落在表演艺术团体与数量上，与表格 Use 一栏的 More than 1,500 performances annually 同属第 8 段，扫读 performing-arts companies 即可锁定本段第 3 句。确定答案技巧：原文说歌剧院 host 了大量表演艺术团体，其中特别点出 the four resident companies（四家驻院团体），并随即列出名单：Opera Australia、the Australian Ballet、the Sydney Theatre Company、the Sydney Symphony Orchestra，正好四家，数量自洽。题干的 have their home base at the Opera House 正是 resident（常驻）的同义替换，因此空格填数词 four。书写时注意按答案表写 four，不要写成 4，也不要写 fourth。",
          "analysis": "第 8 段：“Contrary to its name, Sydney Opera House includes multiple performance venues. It is among the busiest performing-arts centres in the world, holding over 1,500 performances each year. It hosts a large number of performing-arts companies, including the four resident companies: Opera Australia, the Australian Ballet, the Sydney Theatre Company and the Sydney Symphony Orchestra.”（与名字给人的印象不同，悉尼歌剧院包含多个演出场地。它是世界上最繁忙的表演艺术中心之一，每年举办 1,500 多场演出。这里驻有大量表演艺术团体，其中包括四家驻院团体：澳大利亚歌剧院、澳大利亚芭蕾舞团、悉尼剧团和悉尼交响乐团。）题干 “11 performing-arts companies have their home base at the Opera House” 问的是把歌剧院作为驻地的团体数量。原文的 a large number of 只是笼统说法，能够明确数出的只有 the four resident companies，冒号后正好列出四家，因此空格填 four。判定关键是识别 resident 与 have their home base 的同义关系：resident companies 指以该场馆为常驻演出基地的团体，正是“home base”之义。需注意不要把 Over 1,500 performances 误当作团体数量填入 1,500，那是年演出场次，与团体数量无关。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "A large 12 ________ at the foot of a wide staircase",
          "translation": "位于宽阔台阶底部的巨大 12 ______。",
          "answer": "forecourt",
          "wordClass": "名词（单数，指建筑外部的场地；空格前有不定冠词 a 与形容词 large，填可数名词单数 forecourt）",
          "locating": {
            "paragraph": "9",
            "quote": "There is a sizeable outdoor forecourt from which people ascend to the main entrance. The steps, which lead up from the forecourt to the main performance venues, are nearly 100 metres wide."
          },
          "synonyms": [
            "“A large” 同义替换为原文的 “a sizeable”（规模可观的），sizeable 与 large 同义",
            "“at the foot of a wide staircase” 同义替换为原文的 “The steps, which lead up from the forecourt … are nearly 100 metres wide”，即前院位于拾级而上的台阶下方",
            "“forecourt” 对应原文的 “outdoor forecourt”（室外前院），outdoor 与题干表达的室外属性一致"
          ],
          "locatingTip": "定位：题干关键词 staircase 与 large 指向的是建筑外部空间，回原文找同时出现台阶与外部区域的句子，落在第 9 段第 3、4 句（forecourt 与 steps 同现）。确定答案技巧：题干说“在宽阔台阶底部有一个很大的某物”。原文第 3 句先介绍 “There is a sizeable outdoor forecourt”（有一个颇具规模的室外前院），第 4 句再说明台阶是从前院通向主要演出场地、宽近 100 米。由此形成的位置关系是：台阶从前院向上通往场馆，所以前院就在台阶底部。wide staircase 对应 nearly 100 metres wide 的 the steps，large 对应 sizeable，被描述的实体就是 forecourt。故填 forecourt，词数为单个名词，与冠词 a、形容词 large 搭配。",
          "analysis": "第 9 段讲音乐厅及其外部环境：“There is a sizeable outdoor forecourt from which people ascend to the main entrance. The steps, which lead up from the forecourt to the main performance venues, are nearly 100 metres wide.”（有一个颇具规模的室外前院，人们从前院拾级而上到达主入口。这些台阶从该前院通向主要演出场地，宽近 100 米。）表格这一条写 “A large 12 at the foot of a wide staircase”，逐项对应：large 对应 sizeable，at the foot of a wide staircase 对应 the steps … nearly 100 metres wide 以及人们从前院向上（ascend、lead up from the forecourt）的描写——既然台阶是“从前院向上”通往场馆，前院自然处在台阶下方，即 at the foot of the staircase。因此空格填 forecourt。辨析时还要看清原文的层级：Concert Hall 是 “The largest of all interior venues”（所有室内场地中最大的），若把 largest 误接到题干的 A large 上，会误填 Concert Hall 或 hall，但题干限定的是 at the foot of a wide staircase（台阶底部），属于室外空间，只能是 forecourt。答案为一个单词，保持原文形式 forecourt。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Openings made the 13 ________ visible from foyers",
          "translation": "这些开口使人们可以从门厅中看见 13 ______。",
          "answer": "harbour",
          "wordClass": "名词（单数，专指悉尼港；位于定冠词 the 之后，作 made 的宾语，保持单数形式 harbour，注意英式拼写保留字母 u）",
          "locating": {
            "paragraph": "10",
            "quote": "This Utzon-led project, completed in 2006, enabled theatre patrons to see the harbour for the first time from the theatre foyers."
          },
          "synonyms": [
            "“made … visible from foyers” 同义替换为原文的 “enabled theatre patrons to see … from the theatre foyers”，enable somebody to see 即“使某人得以看见”",
            "“Openings” 同义替换为原文 “a new colonnade, which shades nine large glass openings in the previously solid exterior wall” 中的 glass openings",
            "“in 2006” 与表格上一行的 A colonnade was added in 2006 共用原文同句的 “completed in 2006”，指向同一个项目"
          ],
          "locatingTip": "定位：表格 Alterations 一栏已给出 A colonnade was added in 2006 作为提示，直接回原文找 colonnade 与 2006，落在第 10 段倒数第二句。确定答案技巧：题干说“开口使某物可以从门厅中看见”，原文对应句写 enabled theatre patrons to see the harbour for the first time from the theatre foyers——被看见的对象就在 see 之后，即 the harbour；题干把主动的 see 改写成被动含义的 made … visible，观看位置由 from the theatre foyers 提供，与题干 from foyers 完全对应。因此空格填 harbour。注意该句前面还有 nine large glass openings（九个大型玻璃开口），那是达成条件的设施（对应题干的 Openings），不是被看见的对象，切勿混填。",
          "analysis": "第 10 段讲 1999 年乌松被重新聘请制定设计原则之后的首次外部改动：“The first alteration to the exterior was the addition of a new colonnade, which shades nine large glass openings in the previously solid exterior wall. This Utzon-led project, completed in 2006, enabled theatre patrons to see the harbour for the first time from the theatre foyers.”（外部的第一项改动是增设一道新的柱廊，为原本实心的外墙上的九个大型玻璃开口遮阳。这项由乌松主导、2006 年完成的项目，首次让剧院观众可以从剧院门厅中看到海港。）表格这一条写 “Openings made the 13 visible from foyers”，与原文逐项对应：Openings 对应 nine large glass openings，made … visible 对应 enabled … to see，from foyers 对应 from the theatre foyers，被看见的对象就是 see 的宾语 the harbour，所以答案是 harbour（英式拼写，保留字母 u）。此外本段末句 “The design also incorporates the first public lift and interior escalators to assist less-mobile patrons.”（设计还纳入了首部公共电梯与室内自动扶梯，方便行动不便的观众）属于同一项目的其他改动，与“从门厅能看见什么”无关，可作干扰项排除。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
