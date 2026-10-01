(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-1118", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-1118",
  "meta": {
    "examId": "p1-low-1118",
    "title": "Coffee Then and Now 咖啡的今昔",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Ripe coffee fruits are called cherries because of their colour.",
          "translation": "成熟的咖啡果实之所以被称为 cherries（樱桃），是因为它们的颜色。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "These ripen over a period of six to eight months and turn a deep red when ripe, which explains their name."
          },
          "synonyms": [
            "“Ripe coffee fruits” 同义替换为原文的 “The ripe berry-like fruits which are harvested”，题干把原文的修饰语 berry-like 略去，指同一批果实",
            "“are called cherries” 同义替换为原文的 “which explains their name”，name 指的就是前句的 cherries 这一名称",
            "“because of their colour” 同义替换为原文的 “turn a deep red when ripe”，原文说果实成熟时变成深红色，而 which explains their name 明确把这个颜色与名字的由来挂钩"
          ],
          "locatingTip": "定位：题干关键词是 cherries 与 colour，第 3 段开头就出现 cherries 一词，扫读时看到带引号的 ’cherries’ 即可锁定整段。确定答案技巧：解题要抓住因果信号词 which explains their name——原文先说果实成熟后在六到八个月里变成深红色，紧接着用 which explains their name 指出“这正是它们得名的原因”，与题干 because of their colour 完全吻合，因此判 TRUE。",
          "analysis": "第 3 段（C 段）开头两句：“The ripe berry-like fruits which are harvested are called 'cherries.' These ripen over a period of six to eight months and turn a deep red when ripe, which explains their name.”（收获下来的成熟浆果状果实被称为‘樱桃’。它们在六到八个月里成熟，成熟时变成深红色，这正是它们得名的原因）。题干把两句压缩成一个因果句：Ripe coffee fruits（成熟的咖啡果实）对应原文 The ripe berry-like fruits 与回指代词 These；are called cherries 对应 are called 'cherries.' 与被当作名字来源的 which explains their name；because of their colour（因为颜色）则对应 turn a deep red when ripe（成熟时变成深红）。原文的 which explains their name 已经把“颜色”和“命名”直接连成因果关系，题干的因果表述与之一致，所以答案是 TRUE。注意本题不要被 berry-like 迷惑：原文用在 fruits 前面的 berry-like 只是形容果实像浆果，并没有否定它被称为 cherry 这一事实。",
          "traps": [
            "为什么不是 FALSE：原文明确写出 turn a deep red when ripe, which explains their name，即深红色确实是名字的来源，与题干的 because of their colour 同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文不仅给出了颜色变化，还用 which explains their name 把颜色与命名绑定，信息完整，并非未提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The modern 'wet method' of curing is more efficient than the old 'dry method.'",
          "translation": "现代的“湿法”处理比古老的“干法”效率更高。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The 'wet method' is a more recent development, and it is employed for high-quality hand-picked cherries."
          },
          "synonyms": [
            "“the modern” 同义替换为原文的 “a more recent development”（较晚才出现的发展）",
            "“wet method of curing” 与原文的 “The 'wet method'” 原词复现，curing 即本段开头交代的 curing 这一处理工序",
            "“more efficient” 在原文中没有任何对应表达：原文只说湿法用于高品质的手摘樱桃，完全没有比较两种方法效率高低的词句"
          ],
          "locatingTip": "定位：题干关键词是 wet method 与 dry method，两种处理方法都集中在第 3 段后半部分，看到带引号的 ’wet method’ 即可停下精读。确定答案技巧：本题的比较点是 more efficient（效率更高），这类“谁更好、谁更快、谁更便宜”的比较型判断题必须回原文找到明确的比较级或比较结构。原文介绍湿法时只交代两点：一是它 a more recent development（出现较晚），二是 it is employed for high-quality hand-picked cherries（用于高品质手摘樱桃），至于两种方法孰快孰慢、产出高低，全文只字未提，属于信息缺失，故判 NOT GIVEN。切忌把 more recent 误读成 more efficient，两个词长得像但意思完全不同。",
          "analysis": "第 3 段（C 段）依次介绍两种 curing 方法：干法是把樱桃摊在阳光下晒到全干再去除干皮与果肉；湿法则是 “The 'wet method' is a more recent development, and it is employed for high-quality hand-picked cherries.”（湿法是较晚出现的做法，用于高品质的手摘樱桃）。原文对湿法的描述只落在“出现时间较晚”和“适用对象档次较高”上，没有任何关于效率、速度或产量的比较；题干却把落点设在 “more efficient than the old 'dry method'”，要求对两种方法作出效率高低的评判。雅思判断题中，凡题干出现比较级而原文只有并列描述、没有比较结构时，一律按信息缺失处理，所以答案是 NOT GIVEN。另外提醒：原文的 more recent 只是时间先后的说明，不能改写为 more efficient；题干中的 old 也只是对 dry method 的修饰，同样没有原文依据。",
          "traps": [
            "为什么不是 TRUE：原文没有出现 any 效率、速度或成本的比较，把“较晚出现、用于高品质樱桃”理解为“效率更高”属于无据推断，不能选 TRUE。",
            "为什么不是 FALSE：原文并没有说湿法比干法慢或差，只是没有比较而已；没有相反信息就不构成 FALSE，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Green beans are usually roasted before being exported.",
          "translation": "生豆通常在出口之前就被烘焙。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "In both cases, the green beans are sorted, graded, and packed for export. Roasting tends to be done in the country of import."
          },
          "synonyms": [
            "“roasted before being exported” 与原文的 “packed for export … Roasting tends to be done in the country of import” 相互冲突：原文把烘焙安排在进口国，而不是出口前",
            "“usually” 同义替换为原文的 “tends to be”（往往、倾向于）",
            "“green beans” 与原文的 “the green beans” 原词复现，指同一批未经烘焙的豆子"
          ],
          "locatingTip": "定位：题干的两个实词 green beans 与 export 都是显眼词，第 4 段（D 段）开头同时出现，一步定位。确定答案技巧：本题考工序与地点的先后关系，解题关键是分清“出口前做什么”和“到哪里才做什么”。原文说生豆先被 sorted, graded, and packed for export（分级打包待运），随后说 Roasting tends to be done in the country of import（烘焙往往在进口国进行）。也就是说，烘焙发生在出口之后、运抵进口国之时，与题干 before being exported 的先后顺序正好相反，故判 FALSE。",
          "analysis": "第 4 段（D 段）前两句：“In both cases, the green beans are sorted, graded, and packed for export. Roasting tends to be done in the country of import.”（无论用哪种处理法，生豆都要经过分选、分级并打包待运。烘焙则往往在进口国完成）。原文给出的工序链条是：处理完成（curing）之后先分选、分级、打包出口，抵达进口国之后才烘焙。题干把烘焙挪到“出口之前（before being exported）”，与原文的 in the country of import 直接冲突。此外题干的 usually 与原文的 tends to be 属于同义替换，词汇层面没有问题，错误只出在时间先后与地点这一结论性信息上。判断 TRUE / FALSE 时要盯住题干的顺序词与地点状语，本题的 before 就是判分点。",
          "traps": [
            "为什么不是 TRUE：原文明确说 Roasting tends to be done in the country of import，烘焙在进口国进行，即出口之后而非出口之前，与题干顺序相反。",
            "为什么不是 NOT GIVEN：原文对烘焙的时间与地点都有明确交代，属于已给出且与题干矛盾的信息，不是未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The roasting process improves both the smell and the taste of coffee.",
          "translation": "烘焙过程能同时改善咖啡的气味和味道。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The roasting process is necessary to reduce the acidity of the beans and to develop the aromatic oils, which give the coffee its aroma and flavour."
          },
          "synonyms": [
            "“The roasting process” 与原文的 “The roasting process” 原词复现",
            "“improves” 同义替换为原文的 “is necessary to reduce the acidity of the beans and to develop the aromatic oils”，去除酸味、生成芳香油即为改善",
            "“the smell” 同义替换为原文的 “aroma”，“the taste” 同义替换为原文的 “flavour”，原文用 aroma and flavour 并列，与题干 both the smell and the taste 一一对应"
          ],
          "locatingTip": "定位：题干关键词是 roasting 与 smell、taste 这一类感官词，第 4 段（D 段）第三句同时出现 roasting 与 aroma、flavour，直接锁定。确定答案技巧：本题考“烘焙带来哪些好处”，解题时要把题干的两个并列结果（气味、味道）与原文的两个并列结果逐一对应。原文说烘焙 is necessary to reduce the acidity（降低酸度）并 to develop the aromatic oils（生成芳香油），而 aromatic oils 正是 give the coffee its aroma and flavour（赋予咖啡香气与风味）的东西。两个结果都指向正面改善，题干用 both … and … 并列 smell 与 taste，与原文的 aroma and flavour 完全吻合，因此判 TRUE。",
          "analysis": "第 4 段（D 段）第三句：“The roasting process is necessary to reduce the acidity of the beans and to develop the aromatic oils, which give the coffee its aroma and flavour.”（烘焙过程是必要的，它能降低豆子的酸度并生成芳香油，正是这种油赋予咖啡香气与风味）。原文用 reduce the acidity（降酸）和 develop the aromatic oils（生成芳香油）说明烘焙的作用，又用 which 从句把 aromatic oils 与 aroma and flavour 挂钩：香气（aroma，即题干 the smell）和风味（flavour，即题干 the taste）同出一源，都是烘焙的正面结果。题干说烘焙 improves both the smell and the taste，与原文的因果链一致，故判 TRUE。做题提示：见到 both … and … 这类并列结构，务必回原文核对两个并列项是否都成立；本题两个都成立，所以是 TRUE 而不是 FALSE。",
          "traps": [
            "为什么不是 FALSE：原文明确说芳香油 give the coffee its aroma and flavour，说明烘焙确实同时改善了香气与风味，与题干同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文对烘焙的作用有具体说明（降酸、生成芳香油并赋予香气和风味），信息完整且正面，不属于未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Arabica coffee is harder to grow than robusta coffee.",
          "translation": "阿拉比卡咖啡比罗布斯塔咖啡更难种植。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The most important of these is coffee arabica, which grows on steep mountain slopes at high altitudes."
          },
          "synonyms": [
            "“Arabica coffee” 与原文的 “coffee arabica”“arabica” 指同一种咖啡",
            "“is harder to grow” 由原文的 “which grows on steep mountain slopes at high altitudes”（生长在陡峭山坡、高海拔处）与下一段的 “Grown on the lower slopes, where cultivation is easier”（罗布斯塔种在低坡、耕作更容易）共同推出：种植条件更苛刻即更难种",
            "“robusta coffee” 对应原文第 6 段的 “robusta”，其栽培被明说 “cultivation is easier”，与 arabica 形成难易对照"
          ],
          "locatingTip": "定位：题干的两个品种名 arabica 与 robusta 都是全文的段内关键词，第 5 段（E 段）讲 arabica，第 6 段（F 段）讲 robusta，先找到 arabica 的出现句。确定答案技巧：本题是比较型判断题，要在原文里找两处可对照的种植条件描述。第 5 段说 arabica grows on steep mountain slopes at high altitudes（生长在陡峭的高海拔山坡上），第 6 段说 robusta 长在 the lower slopes, where cultivation is easier（较低的坡地，耕作更容易）。两者一比，arabica 的种植环境更险峻、管理更难，robusta 则被原文直接评为 easier，与题干 harder 的方向一致，故判 TRUE。",
          "analysis": "第 5 段（E 段）：“The most important of these is coffee arabica, which grows on steep mountain slopes at high altitudes.”（其中最重要的是阿拉比卡咖啡，它生长在陡峭山坡的高海拔地带）；第 6 段（F 段）开头：“The other main variety, coffee canephora, produces the coffee bean known as robusta. Grown on the lower slopes, where cultivation is easier, robusta beans have a higher caffeine content than arabica beans.”（另一主要品种卡内弗拉产出的豆子称为罗布斯塔。它种植在较低的坡地上，那里耕作更容易，罗布斯塔豆的咖啡因含量高于阿拉比卡豆）。把两处对照可以发现，原文对两个品种的种植条件给出了明确反差：arabica 需要陡坡高海拔，robusta 在低坡即可且 cultivation is easier。题干说 arabica is harder to grow than robusta，正是这一反差的合理概括，因此答案是 TRUE。注意本题的判断依据是“栽培条件的难易”，而非产量或价格；原文提到 robusta 价格只有 arabica 的一半、用于廉价拼配，那属于其他维度的信息，不要拿来当作判分点。",
          "traps": [
            "为什么不是 FALSE：原文把 robusta 的耕作明说为 easier，而 arabica 需要陡峭山坡与高海拔，二者难易反差明确且与题干同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文对两个品种的种植条件都有具体交代（陡坡高海拔与较低坡地、耕作更容易），足以支持“哪一种更难种”的比较，并非未提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The best instant coffee is a mix of arabica and robusta coffee.",
          "translation": "品质最好的速溶咖啡是阿拉比卡与罗布斯塔的混合品。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The best instant coffees are freeze-dried. For these, an arabica coffee concentrate is frozen and processed in a vacuum to produce crisp, dry particles of coffee."
          },
          "synonyms": [
            "“The best instant coffee” 同义替换为原文的 “The best instant coffees”，原文用复数泛指这一类产品",
            "“a mix of arabica and robusta coffee” 与原文的 “an arabica coffee concentrate is frozen” 相冲突：最好的速溶咖啡只用阿拉比卡浓缩液，并未混合罗布斯塔",
            "原文另用 “the better ones include some arabica beans” 说明“混入部分阿拉比卡”的是次一级的颗粒咖啡，与“最好的”不是同一档"
          ],
          "locatingTip": "定位：题干关键词是 instant coffee 与 best，第 7 段（G 段）整段讲三类速溶咖啡，按价格从低到高排列，直接读该段末两句即可。确定答案技巧：解题关键是把握本段的等级排序。原文先讲最便宜的用罗布斯塔制成，再讲部分喷雾干燥粉经再加热制成颗粒咖啡，且 the better ones include some arabica beans（较好的那些会掺一些阿拉比卡豆——这正是题干所说的混合），最后才说 The best instant coffees are freeze-dried，且只用 an arabica coffee concentrate（纯阿拉比卡浓缩液）。也就是说，“混合”对应的是中间档的颗粒咖啡，“最好的”对应的是纯阿拉比卡冻干咖啡，题干把两档混为一谈，故判 FALSE。",
          "analysis": "第 7 段（G 段）按品质从低到高介绍三种速溶咖啡：最低档用罗布斯塔豆制成浓缩液喷雾干燥成粉；中档是部分喷雾干燥粉再加热制成的颗粒咖啡，原文特意说明 “the better ones include some arabica beans”（较好的那些会掺入一些阿拉比卡豆）；最高档则写 “The best instant coffees are freeze-dried. For these, an arabica coffee concentrate is frozen and processed in a vacuum to produce crisp, dry particles of coffee.”（最好的速溶咖啡是冻干的，做法是把阿拉比卡咖啡浓缩液冷冻并在真空中处理，制成爽脆干燥的咖啡颗粒）。由此可见，原文把“混合阿拉比卡与罗布斯塔”这一特征给了中间档的颗粒咖啡，而把 pure arabica（纯阿拉比卡）给了最高档的冻干咖啡。题干说 the best instant coffee is a mix of arabica and robusta，把中档特征安到最高档产品上，二者矛盾，因此答案是 FALSE。做题时要留意这类的档次错位陷阱：原文往往用 cheapest、the better ones、the best 排出三个等级，题目只要把相邻两级的特征对调，就能制造出 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文说最好的是 freeze-dried 且只用 arabica coffee concentrate，并未出现 robusta，混合物是次一级颗粒咖啡的特征，题干张冠李戴。",
            "为什么不是 NOT GIVEN：原文对最高档速溶咖啡的成分有明确交代（纯阿拉比卡浓缩液冻干），属于已给出且与题干冲突的信息，不能判 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Early 7 ________ suggest that coffee was grown in Yemen.",
          "translation": "早期 ________ 表明也门种植过咖啡。",
          "answer": "records",
          "wordClass": "名词（复数可数；作主语，与复数谓语 suggest 保持一致，须用复数形式 records）",
          "locating": {
            "paragraph": "1",
            "quote": "there are records of coffee cultivation in Yemen as early as the 6th century"
          },
          "synonyms": [
            "“was grown in Yemen” 同义替换为原文的 “coffee cultivation in Yemen”，cultivation 即种植",
            "“Early” 同义替换为原文的 “as early as the 6th century”，指最早的年代记载",
            "“suggest that” 对应原文的 “there are records of”，即史料记载能证明这一事实"
          ],
          "locatingTip": "定位：题干出现专有名词 Yemen 与时间词 Early，第 1 段（A 段）第一句同时出现 Yemen 与 as early as the 6th century，一步到位。确定答案技巧：空格前的 Early 是形容词、空格后的 suggest 是复数动词，可预判空格应填一个复数名词。原文 there are records of coffee cultivation in Yemen as early as the 6th century 中，records of 后接的正是“记载”，与题干的 Early … suggest（早期记载表明）语义吻合，故填 records。填写时注意 keep 复数，不可写 record。",
          "analysis": "第 1 段（A 段）首句：“Coffee originated around the Red Sea, most probably in Africa, and there are records of coffee cultivation in Yemen as early as the 6th century.”（咖啡起源于红海一带，很可能在非洲；早在 6 世纪就有也门种植咖啡的记载）。题干把原文的 there are records of coffee cultivation 改写为 Early 7 ________ suggest that coffee was grown，其中 was grown 对应 cultivation，suggest that 概括了“有记载”这一证据性质，Early 则对应 as early as the 6th century。语法上，空格后是复数动词 suggest，空格前是形容词 Early，故所填必须是复数名词，原文的 records 形式与数都吻合，答案为 records。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Europeans first heard about coffee from 8 ________.",
          "translation": "欧洲人最早是从 ________ 那里听说了咖啡。",
          "answer": "traders",
          "wordClass": "名词（复数；作介词 from 的宾语，指带来消息的一类人，用复数形式）",
          "locating": {
            "paragraph": "1",
            "quote": "News of the drink was brought to Europe by traders"
          },
          "synonyms": [
            "“Europeans first heard about coffee from” 同义替换为原文的 “News of the drink was brought to Europe by”，原文用被动语态表达“消息被带到欧洲”",
            "“first heard about” 对应原文的 “News of the drink”，即关于这种饮品的最初消息",
            "“from traders” 对应原文的 “by traders”，介词短语表施动者，含义相同"
          ],
          "locatingTip": "定位：题干关键词是 Europeans 与 coffee，第 1 段（A 段）第三句出现 Europe 与 the drink（指咖啡），锁定该句。确定答案技巧：题目问“从谁那里听说”，需要在原文里找把消息带到欧洲的施动者。原文用被动句 News of the drink was brought to Europe by traders，by 后的 traders 就是信息的来源，填入后与题干 Europeans first heard about coffee from traders 意思一致。注意答案是复数名词 traders，不能填单数 trader，也不要误填同句出现的 new（new drink 是修饰语，不是人）。",
          "analysis": "第 1 段（A 段）第三句：“News of the drink was brought to Europe by traders, but people there were at first wary of the new drink.”（这种饮品的消息由商人带到欧洲，但当地人起初对这种新饮品心存戒备）。题干把被动句还原为主动句：“Europeans first heard about coffee from 8 ________”，其中 Europeans first heard about 对应 News of the drink was brought to Europe，from 对应 by，空格所要填的就是原文中介词 by 后面的施动者 traders。从词性看，介词 from 之后需要名词或名词性成分，且 traders 指一类人，用复数形式；这也是笔记填空常见的被动转主动改写，抓住 by 后的名词即可锁定答案。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Coffee drinking became a 9 ________ in Europe only after Pope Clement VIII drank some of it.",
          "translation": "只有在教皇克雷芒八世喝过咖啡之后，饮用咖啡才在欧洲成为一种 ________。",
          "answer": "trend",
          "wordClass": "名词（单数可数；前面有不定冠词 a，指一股潮流、风尚）",
          "locating": {
            "paragraph": "1",
            "quote": "Pope Clement the Eighth gave the drink his seal of approval after trying a cup for himself, and the trend quickly caught on."
          },
          "synonyms": [
            "“Pope Clement VIII” 即原文的 “Pope Clement the Eighth”，罗马数字与序数词写法互换，指同一位教皇",
            "“drank some of it” 同义替换为原文的 “after trying a cup for himself”",
            "“became a …” 同义替换为原文的 “and the trend quickly caught on”，即这种风尚迅速流行起来"
          ],
          "locatingTip": "定位：题干的人名 Pope Clement VIII 是全文唯一的大写专有名词组合，第 1 段（A 段）第四句即出现，锁定后精读整句。确定答案技巧：题干说“教皇喝过之后，喝咖啡才 became a [9]”，需要在原文找与 become 或流行相关的名词。原文相应位置写的是 and the trend quickly caught on，其中 catch on 意为“流行起来”，the trend 就是“潮流、风尚”，与题干的 became a … 对应。语法上不定冠词 a 提示空格用单数可数名词，trend 正好符合。",
          "analysis": "第 1 段（A 段）第四句：“However, Pope Clement the Eighth gave the drink his seal of approval after trying a cup for himself, and the trend quickly caught on.”（不过，教皇克雷芒八世亲自尝过一杯之后为这种饮品盖上了认可的印章，这股风尚便迅速流行开来）。题干的因果关系与原文一致：only after Pope Clement VIII drank some of it 对应 after trying a cup for himself，became a [9] 对应 the trend quickly caught on。原文用定冠词 the trend 指“这股风尚”，题干改为不定冠词 a 的泛指用法，名词本身不变，故填 trend。注意不要填 approval（那是“认可”，动作对象是饮品，不是一种社会现象）。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "People such as painters and 10 ________ began to get together in cafés in major European cities.",
          "translation": "画家和 ________ 之类的人开始在欧洲大城市的咖啡馆里聚会。",
          "answer": "politicians",
          "wordClass": "名词（复数；与 painters 并列作 such as 的列举项，指政客这一类人）",
          "locating": {
            "paragraph": "1",
            "quote": "they soon became the favourite meeting places of politicians and were also known to attract artists of all kinds"
          },
          "synonyms": [
            "“get together in cafés” 同义替换为原文的 “the favourite meeting places”，即咖啡馆成了他们常聚的场所",
            "“cafés in major European cities” 同义替换为原文的 “Coffee houses opened in Vienna, Paris, and London”，维也纳、巴黎、伦敦即欧洲大城市",
            "“painters” 同义替换为原文的 “artists of all kinds”，画家属于各类艺术家之一"
          ],
          "locatingTip": "定位：题干的关键词是 cafés 与 people，第 1 段（A 段）第五、六句讲咖啡馆在欧洲各大城市开设并成为聚集地，锁定这两句。确定答案技巧：题干用 such as painters and … 列举两类人，与原文的 politicians 和 artists of all kinds 两组人对应。原文的结构是 they soon became the favourite meeting places of politicians and were also known to attract artists of all kinds，把“政客”与“各类艺术家”并列；题干把 artists 换成具体的 painters，那么另一个列举项自然就是 politicians。填写时用复数，与并列项 painters 在数上一致。",
          "analysis": "第 1 段（A 段）第五、六句：“Coffee houses opened in Vienna, Paris, and London, and they soon became the favourite meeting places of politicians and were also known to attract artists of all kinds.”（咖啡馆在维也纳、巴黎和伦敦开设起来，很快成为政客们最爱去的聚会场所，也以吸引各类艺术家而闻名）。题干 People such as painters and [10] began to get together in cafés 把原文的两类人拆开：painters 对应 artists of all kinds（画家是艺术家的一种，题目用下义词具体化），空格则对应 politicians。原文用 of politicians 与 attract artists of all kinds 两个并列结构点出这两类常客，据此可以确定答案是 politicians。词性上，空格与 painters 并列，须用复数可数名词。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Today, coffee is grown only in tropical regions to avoid damage caused by 11 ________.",
          "translation": "如今，咖啡只在热带地区种植，以避免 ________ 造成的损害。",
          "answer": "frost",
          "wordClass": "名词（不可数；作介词 by 的宾语，指霜冻这一自然现象）",
          "locating": {
            "paragraph": "2",
            "quote": "Because it is vulnerable to frost, coffee can only be grown successfully between the Tropics of Cancer and Capricorn."
          },
          "synonyms": [
            "“is grown only in tropical regions” 同义替换为原文的 “can only be grown successfully between the Tropics of Cancer and Capricorn”，南北回归线之间即热带地区",
            "“damage caused by” 同义替换为原文的 “it is vulnerable to”，vulnerable to 表示易受某种损害",
            "“to avoid” 对应原文的原因连词 “Because”，说明限定在热带种植的原因就是要避开这种危害"
          ],
          "locatingTip": "定位：题干关键词是 tropical regions 与 damage，第 2 段（B 段）第二句出现 Tropics of Cancer and Capricorn（南北回归线，即热带）与 vulnerable to，一步定位。确定答案技巧：题目问“要避开的是什么造成的损害”，对应原文 it is vulnerable to 后面的名词。原文的逻辑是咖啡对霜冻很敏感，所以只能在南北回归线之间成功种植；题干则把因果倒过来表述成“只在热带种植以避开某种损害”，被避开的东西就是 frost。词性上，by 后需名词，frost 为不可数名词，用原形。",
          "analysis": "第 2 段（B 段）第二句：“Because it is vulnerable to frost, coffee can only be grown successfully between the Tropics of Cancer and Capricorn.”（由于咖啡易受霜冻侵害，只有在南北回归线之间才能成功种植）。题干把原文的“因为易受 X 侵害，所以只能种在热带”改写为“只在热带种植，以避免 X 造成的损害”，X 即 frost。句中 vulnerable to（易受……伤害）与题干的 damage caused by（由……造成的损害）语义对应，between the Tropics of Cancer and Capricorn 与题干 only in tropical regions 对应，两条线索互相印证。注意空格前是介词 by，后面没有冠词，说明所填多为不可数名词，frost 正好符合；不要填 tropics 或 weather 之类的词，它们都不是原文所说的危害来源。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "In coffee cultivation, the 12 ________ is generally done manually.",
          "translation": "在咖啡种植中，________ 通常是人工完成的。",
          "answer": "picking",
          "wordClass": "名词（动名词，单数；前有定冠词 the，指采摘这一动作）",
          "locating": {
            "paragraph": "2",
            "quote": "The plants require constant care and attention, and in most areas, the picking is carried out by hand."
          },
          "synonyms": [
            "“In coffee cultivation” 对应原文 “crop maintenance” 所在段落，即咖啡种植与养护这一话题",
            "“is generally done” 同义替换为原文的 “in most areas … is carried out”，都是“大多数情况下由……完成”的意思",
            "“manually” 同义替换为原文的 “by hand”，都表示用手工而非机器完成"
          ],
          "locatingTip": "定位：题干关键词是 cultivation 与 manually，第 2 段（B 段）末句出现 crop maintenance、picking 与 by hand，锁定该句。确定答案技巧：题干的 done manually 明确对应原文的 by hand，只要锁定 by hand，其前面的主语 the picking 就是答案。语法上，空格前有定冠词 the、后面是单数谓语 is carried out，故填单数动名词 picking；主语形式上必须与单数谓语一致，不能写 pickings。",
          "analysis": "第 2 段（B 段）末两句：“In addition, crop maintenance is labour-intensive. The plants require constant care and attention, and in most areas, the picking is carried out by hand.”（此外，作物养护是劳动密集型的工作。咖啡树需要持续照料，而且在大多数地区，采摘都是靠手工完成的）。题干把主语信息挖空：In coffee cultivation, the [12] is generally done manually，其中 In coffee cultivation 对应原文的 crop maintenance 与 The plants require constant care，is generally done 对应 is carried out，manually 对应 by hand，空格所缺正是原文主语 the picking。词性上，picking 是动名词，前有定冠词 the 且谓语为单数 is carried out，故用单数形式。这题也说明笔记填空常把原文的主语挖成空格，作答时先找到同义改写的谓语部分，再回头取主语。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Using carbon dioxide is the ideal way of removing caffeine because it maintains the 13 ________ of the coffee.",
          "translation": "使用二氧化碳是去除咖啡因的理想方式，因为它能保持咖啡的 ________。",
          "answer": "flavour",
          "wordClass": "名词（不可数；前有定冠词 the，指咖啡的风味）",
          "locating": {
            "paragraph": "8",
            "quote": "The latter is thought to be the best method as it does not affect the flavour and there is no residue."
          },
          "synonyms": [
            "“is the ideal way” 同义替换为原文的 “is thought to be the best method”，ideal 对应 best",
            "“using carbon dioxide” 对应原文的 “The latter”，即上句提到的 carbon dioxide 这一方法",
            "“it maintains the … of the coffee” 同义替换为原文的 “it does not affect the flavour”，不破坏风味即保持风味"
          ],
          "locatingTip": "定位：题干关键词是 carbon dioxide 与 caffeine，第 8 段（H 段）讲脱因处理，其中 carbon dioxide 出现在倒数第二句，锁定该句。确定答案技巧：题目说二氧化碳法之所以理想，是因为它 maintains（保持）咖啡的某项属性，对应原文 as it does not affect the flavour and there is no residue 中 does not affect 后面的名词。原文从反面说“不影响风味、没有残留”，题干从正面说“保持”，方向一致，取名词 flavour 即可。词性上，定冠词 the 之后填不可数名词，保持原文拼写 flavour（英式）。",
          "analysis": "第 8 段（H 段）最后两句：“Caffeine is removed by soaking the beans in water, or by the use of solvents or carbon dioxide. The latter is thought to be the best method as it does not affect the flavour and there is no residue.”（去除咖啡因的办法有用水浸泡豆子，或使用溶剂、二氧化碳。最后一种被认为是最好的方法，因为它不影响风味而且没有残留）。题干以 Using carbon dioxide is the ideal way of removing caffeine 概括 The latter is thought to be the best method，以 because it maintains the … of the coffee 概括 as it does not affect the flavour and there is no residue。原文用否定式 does not affect（不影响）说明该方法的优点，题干改用肯定式 maintains（保持），二者语义等价，空格所填就是被保护的对象 flavour。注意不要填 residue（残留），那是原文说该方法不产生的东西，与空格前的 maintains 搭配不当。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
