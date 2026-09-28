(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1041", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1041",
  "meta": {
    "examId": "p1-medium-1041",
    "title": "Ancient Chinese Chariots 中国古代战车",
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
          "stem": "When discovered, the written records of the grave goods proved to be accurate.",
          "translation": "这些随葬品（grave goods）的文字记录在被发现时被证明是准确的。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "These grave goods are confirmed by the oracle texts, which constitute almost all of the first hand written record we possess of the Shang Dynasty."
          },
          "synonyms": [
            "「the written records」同义替换为原文的「the oracle texts, which constitute almost all of the first hand written record」（甲骨文字即我们掌握的商代第一手文字记录，二者指同一样东西）",
            "「the grave goods proved to be accurate」同义替换为原文的「These grave goods are confirmed by ...」（confirmed 与 proved to be accurate 都表示“得到印证、证明无误”，方向一致）",
            "「When discovered」对应原文 Discovered in 1976 与 These grave goods（随葬品与墓葬同期被发现）"
          ],
          "locatingTip": "定位：题干关键词 grave goods 与 written records 都是抽象名词，不便扫读，但第 2 段（B 段）整段都在讲妇好墓的发掘与随葬品，段落中唯一出现 written record 的句子就是定位句；也可用同段的专有名词 Yinxu、Fu Hao 迅速锁定 B 段。确定答案技巧：判断题出现 proved to be accurate / correct / reliable 这类“证实”表述时，回原文找 confirm、verify、prove、corroborate 之类动词。原文说随葬品 are confirmed by the oracle texts（被甲骨文字所证实），与题干“记录被证明准确”完全同向，没有任何冲突或缺失，故选 TRUE。",
          "analysis": "第 2 段（B 段）先交代妇好墓的位置（殷墟、今河南安阳）、1976 年被发现以及墓主身份，随后列出随葬品种类（玉器、骨器、青铜器等），紧接着写道：“These grave goods are confirmed by the oracle texts, which constitute almost all of the first hand written record we possess of the Shang Dynasty.”（这些随葬品为甲骨文字所证实，而甲骨文字构成我们掌握的商代几乎全部第一手文字记录）。题干把这个关系表述为“随葬品的文字记录被证明是准确的”：the written records 对应原文的 the oracle texts / the first hand written record，proved to be accurate 对应 are confirmed by（被证实、得到印证），When discovered 对应整段交代的 1976 年发掘这一事实背景。原文是正向证实，题干也是正向证实，信息方向一致且无额外添加，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文用 are confirmed by the oracle texts 明确表示随葬品得到了甲骨文字的印证，与题干“被证明是准确的”同向，原文不存在任何相反信息。",
            "为什么不是 NOT GIVEN：原文既有 oracle texts（文字记录）这一明确信息，又直接说明随葬品被其证实，题干所说的“记录准确”有直接依据，并非原文未提及，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Human skeletons in Anyang tomb were identified as soldiers who were killed in the war.",
          "translation": "安阳墓葬中的人类骸骨被认定为战死沙场的士兵。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Below the corpse was a small pit holding the remains of six sacrificial dogs and along the edge lay the skeletons of human slaves, evidence of human sacrifice."
          },
          "synonyms": [
            "「Human skeletons in Anyang tomb」对应原文的「the skeletons of human slaves」（地点由本段 Anyang、Yinxu 交代）",
            "「were identified as soldiers」与原文的「human slaves」（人类奴隶）相互冲突，原文对骸骨的身份认定是奴隶而非士兵",
            "「who were killed in the war」与原文的「evidence of human sacrifice」（人祭的证据）相互冲突，原文说明这些人是祭祀的殉葬者，不是战场阵亡者",
            "「six sacrificial dogs」中的 sacrificial（祭祀用的）也表明这批遗骸属于陪葬祭祀体系"
          ],
          "locatingTip": "定位：题干里的 Human skeletons 与 Anyang tomb 是极佳的定位线索，第 2 段（B 段）末句以 along the edge lay the skeletons of human slaves 直接点名骸骨，同段又出现 Anyang 这一城市名，一步即可锁定。确定答案技巧：凡涉及“身份认定（identified as）”的判断题，都要回原文找对该对象所用的定性名词。原文给出的是 slaves（奴隶）并附 evidence of human sacrifice（人祭的证据），与题干“战死的士兵”属于完全不同的身份，构成事实冲突，故判 FALSE。",
          "analysis": "第 2 段（B 段）描述妇好墓的结构时写道：“Below the corpse was a small pit holding the remains of six sacrificial dogs and along the edge lay the skeletons of human slaves, evidence of human sacrifice.”（尸体下方有一个小坑，里面是六只祭祀用狗的遗骸，边缘还躺着人类奴隶的骨架，这是人祭的证据）。此外第 1 段（A 段）在讲殷墟王陵发掘时也说出土物 containing weapons of war and remains from both animal and human sacrifices（包含兵器以及人和动物的祭祀遗存），两处都把这些人骨定性为祭祀陪葬的奴隶。题干却写成 they were identified as soldiers who were killed in the war（被认定为战死的士兵），把原文的 slaves 换成 soldiers、把 human sacrifice 换成 killed in the war，属于与原文直接对立的事实错误，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文只写 human slaves 与 human sacrifice，全段没有出现 soldiers、war 这类词，更没有任何“战死”的表述，题干身份与原文冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对这些骸骨给出了明确且相反的定性（奴隶、祭祀殉葬者），属于“有信息但不一致”，按规则判 FALSE，而非信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The Terracotta Army was discovered by people who lived nearby by chance.",
          "translation": "兵马俑是被住在附近的居民偶然发现的。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The terracotta soldiers were accidentally discovered when a group of local farmers was digging a well during a drought"
          },
          "synonyms": [
            "「by chance」同义替换为原文的「accidentally」（偶然地、意外地）",
            "「people who lived nearby」同义替换为原文的「a group of local farmers」（当地农民，即居住在附近的居民）",
            "「The Terracotta Army was discovered」对应原文的「The terracotta soldiers were accidentally discovered」（兵马俑即这些陶俑士兵）"
          ],
          "locatingTip": "定位：专有名词 Terracotta Army 是全文最醒目的定位词，第 3 段（C 段）首句即出现，紧随其后的句子说明发现经过。确定答案技巧：题干把“发现者身份”和“发现方式”两个要素都写死了，必须逐点核对——原文用 accidentally 表“偶然”，用 local farmers 表“居住在附近的人”，两点逐一对应且无任何矛盾，因此判 TRUE。切忌因为题干 by chance 比原文 accidentally 更口语就怀疑改写。",
          "analysis": "第 3 段（C 段）第一句交代兵马俑于 1974 年 3 月 29 日在陕西西安以东被发现，第二句说明发现经过：“The terracotta soldiers were accidentally discovered when a group of local farmers was digging a well during a drought...” （这些陶俑士兵是当地一群农民在旱季打井时被偶然发现的）。题干中的 by chance 与原文 accidentally 同义；people who lived nearby 与 local farmers（本地农民，即附近居民）同义；was discovered 与 were accidentally discovered 对应。原文还交代了打井、旱灾等具体背景，进一步印证“偶然发现”这一点。信息方向一致、要素齐全，没有缺失也没有冲突，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文的 accidentally discovered by local farmers 与题干“附近的人偶然发现”意思一致，没有任何相反信息，故不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干所问的两个要素（谁发现、如何发现）原文都明确交代了，属于信息充分而非缺失，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The size of King Tutankhamen's tomb is bigger than that of Qin Emperor's tomb.",
          "translation": "图坦卡蒙（King Tutankhamen）陵墓的规模比秦始皇陵更大。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In contrast, the burial of Tutank Hamun yielded six complete but dismantled chariots of unparalleled richness and sophistication."
          },
          "synonyms": [
            "「King Tutankhamen's tomb」对应原文的「the burial of Tutank Hamun」（原文对同一座陵墓的称谓，人名拼作 Tutank Hamun）",
            "「Qin Emperor's tomb」对应原文的「the Qin Emperors tomb」（第 3 段）与第 6 段的「Qin Shi Huang was buried in the most opulent tomb complex ever constructed in China」",
            "「The size ... is bigger than」在原文找不到对应：原文只比较了两处墓葬所出战车的数量与工艺（six complete but dismantled chariots of unparalleled richness），从未比较两座陵墓的大小"
          ],
          "locatingTip": "定位：题干含人名 Tutankhamen 与 Qin Emperor，第 3 段（C 段）中 Tutank Hamun 与 the Qin Emperors tomb 同段出现，第 6 段（F 段）又提到 Qin Shi Huang 的陵墓，精读这两处即可覆盖题干的全部信息点。确定答案技巧：判断“A 比 B 更大／更小”这类比较题，必须找到原文中的比较结构（than、bigger、larger、in contrast 等引出的大小对比）。第 3 段的 In contrast 比的是两处出土的陪葬战车（六辆完整但被拆散、工艺无比精美），不是陵墓规模；第 6 段只把秦始皇陵夸为“中国有史以来最豪华、城市般大小的陵墓建筑群”，没有与图坦卡蒙墓做任何大小比较。原文缺少这一比较信息，故判 NOT GIVEN。",
          "analysis": "第 3 段（C 段）在介绍兵马俑之后写道：“In contrast, the burial of Tutank Hamun yielded six complete but dismantled chariots of unparalleled richness and sophistication. Each was designed for two people (90 cm long) and had its axle sawn through to enable it to be brought along the narrow corridor into the tomb.”（相比之下，图坦卡蒙的墓葬出土了六辆完整但被拆散的战车，其华丽与精巧无与伦比；每辆供两人乘坐，车轴被锯开以便通过狭窄的墓道运入墓中）。原文在这里对比的是两处墓葬所出车辆的境况（数量、长度、工艺），并且只写到图坦卡蒙墓的墓道狭窄，并未给出陵墓的面积或体积。第 6 段（F 段）说 Qin Shi Huang was buried in the most opulent tomb complex ever constructed in China, a sprawling, city-size collection of underground caverns（秦始皇葬于中国有史以来最豪华、城市般大小的地下宫室建筑群），描述的仍是该陵的豪华程度与地下宫室的规模，同样没有与图坦卡蒙陵墓作比较。题干的比较对象（两座陵墓）和比较维度（size）在原文都没有对应的比较句，既没有肯定也没有否定，因此答案是 NOT GIVEN；不要因为第 6 段出现 city-size 就自行推断谁更大。",
          "traps": [
            "为什么不是 TRUE：原文没有任何一句把两座陵墓的大小拿来比较，更没有出现“图坦卡蒙陵更大”的说法，选 TRUE 属于无据推断。",
            "为什么不是 FALSE：原文同样没有说“秦始皇陵更大、图坦卡蒙陵更小”。第 6 段的 most opulent、city-size 是形容秦始皇陵自身的气派与范围，并非与另一座墓对比后的结论；原文既未肯定也未否定题干的比较，只能判 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–10 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 10
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The hub is made of wood from the tree of 5 ________",
          "translation": "车毂（hub）是由 ________ 这种树的木料制成的。",
          "answer": "elm",
          "wordClass": "名词（单数，树木／木材名称；空格前是介词 of，作 of 的宾语，填名词单数形式，不加冠词、不加复数）",
          "locating": {
            "paragraph": "4",
            "quote": "Wheels were constructed from a variety of woods: elm provided the hub, rose-wood the spokes and oak the felloes."
          },
          "synonyms": [
            "「The hub」在原文原词复现：「elm provided the hub」",
            "「is made of wood from the tree of」同义替换为原文的「Wheels were constructed from a variety of woods: elm provided the hub」（原文以“某种木料 + provided + 部件”的句式说明各部件的用材，与题干“用某树之木制成”对应）",
            "「a variety of woods」说明木材不止一种，需要按部件配对，elm 才是与 hub 配对的那一种"
          ],
          "locatingTip": "定位：题干里的 hub 是车辆部件的技术名词，第 4 段（D 段）专讲中国古代战车的构造与考古发现，该段第二句就以 elm provided the hub 给出答案，扫读时盯住 hub 即可。确定答案技巧：ONE WORD 笔记题先判断空格需要什么——此处需要一种木材名（名词）。原文用冒号引出三项并列：elm provided the hub, rose-wood the spokes and oak the felloes，句式是「木料 + 对应部件」，因此与 the hub 配对的那一种就是答案 elm。注意只写一个词，不写 elm tree，也不加冠词。",
          "analysis": "第 4 段（D 段）第二句：“Wheels were constructed from a variety of woods: elm provided the hub, rose-wood the spokes and oak the felloes.”（车轮由多种木料制成：榆木做车毂，花梨木做辐条，橡木做轮辋）。冒号后的三个并列小句分别说明车轮三个部件的用材，其中与 the hub（车毂）对应的正是 elm（榆木）。笔记题干把主动句改写为被动式 The hub is made of wood from the tree of ______，只是把“榆木做车毂”换成“车毂用某树之木做成”，指的仍是同一种木材。rose-wood（花梨木）与 oak（橡木）分别对应辐条和轮辋，是本题的主要干扰项，只有在句式上与 hub 直接配对的那一个才能填。答案填 elm 即可，不需要写成 elm tree，也不能加冠词或复数。",
          "traps": []
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The room through the hub was to put tapering axle in which is wrapped up by leather aiming to retain 6 ________",
          "translation": "穿过车毂的孔道用于插入锥形（tapering）车轴，整体用皮革包裹，目的在于保住 ________。",
          "answer": "oil",
          "wordClass": "名词（不可数，液体名称；空格前是动词 retain，作其宾语，只填核心名词 oil，不能带上修饰语 lubricating）",
          "locating": {
            "paragraph": "4",
            "quote": "The hub was drilled through to form an empty space into which the tapering axle was fitted, the whole being covered with leather to retain lubricating oil."
          },
          "synonyms": [
            "「The room through the hub」同义替换为原文的「The hub was drilled through to form an empty space」（车毂被钻孔形成的空间）",
            "「was to put tapering axle in」同义替换为原文的「into which the tapering axle was fitted」（锥形车轴插入其中）",
            "「is wrapped up by leather」同义替换为原文的「the whole being covered with leather」（整体用皮革包裹）",
            "「aiming to retain」与原文的「to retain」原词复现，两者都表示包裹皮革的目的"
          ],
          "locatingTip": "定位：题干首句给出 hub、tapering axle、leather 三个技术词，第 4 段（D 段）第三句同时出现 drilled through、tapering axle、covered with leather，可与题干逐词对上，直接锁定。确定答案技巧：空格落在表示目的的 to retain 之后，问的是“皮革包裹是为了保住什么”。原文 to retain lubricating oil 中 lubricating 只是修饰语（使……润滑的），中心名词是 oil，题目限定 ONE WORD，因此只能填 oil；若填 lubricating 则答非所问且词性不符。",
          "analysis": "第 4 段（D 段）第三句：“The hub was drilled through to form an empty space into which the tapering axle was fitted, the whole being covered with leather to retain lubricating oil.”（车毂被钻通形成中空，锥形车轴插入其中，整体再用皮革包裹，以保住润滑油）。笔记题干的几段信息在此逐一对上：the room through the hub 对应 the hub was drilled through to form an empty space；to put tapering axle in 对应 into which the tapering axle was fitted；is wrapped up by leather aiming to retain 对应 the whole being covered with leather to retain。空格与原文 to retain 之后的成分位置一致，问的是被保住的物质。原文写的是 lubricating oil 两个词，而本题要求从原文选一个词，故取中心名词 oil（润滑油）。它指的是防止车轴干涩的润滑油脂，与第 10 题由同段末句 to retain bronze 得出的 bronze 不是同一物质，两题必须分别定位、不能互相借用答案。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The number of spokes varied from 18 to 7 ________",
          "translation": "辐条（spokes）的数量从 18 根到 ________ 根不等。",
          "answer": "32",
          "wordClass": "数词／数字（表示辐条数量的上限；原文写作英文数词 thirty-two，题干已用阿拉伯数字 18，故照此写 32，符合 ONE WORD ONLY）",
          "locating": {
            "paragraph": "4",
            "quote": "Though the number of spokes varied, a wheel by the fourth century BC usually had eighteen to thirty-two of them."
          },
          "synonyms": [
            "「The number of spokes varied」与原文的「the number of spokes varied」原词复现（题干用 varied from 18 to ... 具体化）",
            "「from 18」同义替换为原文的「eighteen」（阿拉伯数字 18 与英文数词 eighteen）",
            "「to ______」对应原文的「to thirty-two」，即数量的上限"
          ],
          "locatingTip": "定位：题干关键词 spokes（辐条）只出现在第 4 段（D 段）讲车轮构造的部分，扫读时盯住 spokes 与数字即可锁定该段第四句。确定答案技巧：数字填空题要把原文的英文数词与题干的阿拉伯数字对应起来——题干给了下限 18，原文是 eighteen to thirty-two，因此空格填上限 thirty-two 的数字形式 32。注意本段还有其他数字与信息（the fourth century BC 公元前四世纪、millet grains 小米粒等）属于干扰，只有与 eighteen 成对出现的那个数字才对。",
          "analysis": "第 4 段（D 段）第四句：“Though the number of spokes varied, a wheel by the fourth century BC usually had eighteen to thirty-two of them.”（虽然辐条的数量各不相同，但到公元前四世纪，车轮通常有 18 到 32 根辐条）。笔记题干把这句话压缩成 The number of spokes varied from 18 to ______，空格的落点就是数量的上限。原文用英文数词 eighteen to thirty-two 表达区间，题干已把下限写成阿拉伯数字 18，因此上限按同一形式填 32 即可（写 thirty-two 也符合原文，但答案表给出的是 32）。该句的 usually 表示“通常情况下”，与题干“从 18 到 32 不等”的表述一致，不需要额外推断。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "The shape of wheel resembles a 8 ________",
          "translation": "车轮的形状类似一个 ________。",
          "answer": [
            "cone",
            "dish"
          ],
          "wordClass": "名词（单数可数，形状名称；空格前有不定冠词 a，故填单数形式，不加复数、不加冠词）",
          "locating": {
            "paragraph": "4",
            "quote": "Dishing refers to the dish-like shape of an advanced wooden wheel, which looks rather like a flat cone."
          },
          "synonyms": [
            "「The shape of wheel」同义替换为原文的「the dish-like shape of an advanced wooden wheel」",
            "「resembles」同义替换为原文的「looks rather like」（看上去很像）",
            "「a ______」承接原文的「a flat cone」，空格取中心名词 cone；「dish」则来自同一句的 dish-like shape 与上一句的 dishing（碟形化）"
          ],
          "locatingTip": "定位：题干关键词 shape 与 wheel 指向第 4 段（D 段）讲车轮构造优势的部分，该段用 dishing、dish-like、flat cone 反复描述车轮的形态，扫读时看到 Dishing refers to 即到答案区。确定答案技巧：题干用 resembles a ______ 提问形状，原文用 which looks rather like a flat cone 作答，去掉修饰语 flat 后得到中心名词 cone；答案表同时接受 dish，因为原文把这一构造称为 dishing、把轮形称为 dish-like，都与“碟子”这一形状对应。两种写法都只填一个词，注意不要填 flat cone（两个词）或 dishing（那是工艺名称，且与前文重复）。",
          "analysis": "第 4 段（D 段）在讲完车轮检验之后写道：“One outstanding constructional asset of the ancient Chinese wheel was dishing. Dishing refers to the dish-like shape of an advanced wooden wheel, which looks rather like a flat cone.”（古代中国车轮一项突出的构造优势是“碟形化”。碟形指先进木轮那种碟子般的形状，看上去很像一个扁平的锥体）。笔记题干 The shape of wheel resembles a ______ 与末句完全对口：the shape of wheel 对应 the dish-like shape of an advanced wooden wheel，resembles 对应 looks rather like，空格承接 a flat cone 的中心名词，故填 cone。答案表同时列出 cone 与 dish 两种可接受写法：cone 来自“看上去像一个扁平锥体”的明喻，dish 来自“碟子般的形状（dish-like）”这一描述本身，两者指向的都是同一特征——车轮呈碟形／锥形，因此填任一均可；若填 flat cone 就超过一个词，填 dishing 则是工艺而非形状名称，都不符合要求。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Two 9 ________ were used to strengthen the wheel.",
          "translation": "使用了两个 ________ 来加固车轮。",
          "answer": "struts",
          "wordClass": "名词（复数，构件名称；空格前有数词 Two、后有复数谓语动词 were，必须填复数形式 struts）",
          "locating": {
            "paragraph": "4",
            "quote": "On occasion they chose to strengthen a dished wheel with a pair of struts running from rim to rim on each of the hub."
          },
          "synonyms": [
            "「Two」同义替换为原文的「a pair of」（一对即两个）",
            "「were used to strengthen the wheel」同义替换为原文的「they chose to strengthen a dished wheel」",
            "「struts」在原文原词出现，且下一句以「these extra supports」回指，说明它们的作用是加固车轮"
          ],
          "locatingTip": "定位：题干关键词 strengthen 与 wheel 指向第 4 段（D 段）谈论车轮加固的部分，该段倒数第三句出现 strengthen a dished wheel，紧接的 a pair of struts 即为答案。确定答案技巧：笔记题要照顾语法一致——空格前是数词 Two，对应原文的 a pair of（一对、两个），因此答案必须是复数名词 struts，不能写单数 strut；同段下一句的 these extra supports / added even greater strength to the wheel 进一步印证这对构件的用途就是加固，可作为二次核对。",
          "analysis": "第 4 段（D 段）倒数第三、二句：“On occasion they chose to strengthen a dished wheel with a pair of struts running from rim to rim on each of the hub. As these extra supports were inserted separately into the felloes, they would have added even greater strength to the wheel.”（有时他们会用一对从轮辋到轮辋、连接车毂的支柱来加固碟形车轮；由于这些额外的支撑是分别插入轮辋的，它们会给车轮增加更大的强度）。笔记题干 Two ______ were used to strengthen the wheel 正是这两句的改写：strengthen the wheel 对应 strengthen a dished wheel 与 added even greater strength to the wheel，Two 对应 a pair of（两个），were used to 对应 they chose to。答案 struts 必须写复数，因为原文就是复数形式、且空前有数词 Two、空后是复数谓语 were，语法上也要求复数。下一句的 extra supports 用复数回指，可作为复核。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Leather wrapped up the edge of the wheel aimed to retain 10 ________",
          "translation": "皮革包裹车轮边缘，目的在于保住 ________。",
          "answer": "bronze",
          "wordClass": "名词（不可数，金属材料名；空格前是动词 retain，作其宾语，填名词不可数形式 bronze，不加冠词、不加复数）",
          "locating": {
            "paragraph": "4",
            "quote": "Leather wrapped up the edge of the wheel aimed to retain bronze."
          },
          "synonyms": [
            "「Leather wrapped up the edge of the wheel」与原文「Leather wrapped up the edge of the wheel」原词复现",
            "「aimed to retain」与原文「aimed to retain」原词复现，都表示包裹皮革的目的",
            "「bronze」在原文原词出现，是被皮革包边所要保住的金属材料"
          ],
          "locatingTip": "定位：题干几乎逐词照搬第 4 段（D 段）末句，只要按 Leather 或 wrapped up the edge 扫读该段末尾即可一步锁定，是全文定位最直接的一题。确定答案技巧：空格落在 to retain 之后的宾语位置，问“要保住什么”，原文给的答案是 bronze（青铜），填名词原形即可。本题与第 6 题句式高度相似（两处都用 to retain 引出被保住的物质），务必注意区分：第 6 题在“车毂钻孔、车轴插入、整体包皮革”那一句，被保住物是润滑油 oil；本题在本段最后一句，被保住物是车轮边缘的青铜 bronze，两题分别对应本段不同的两句，不能混填。",
          "analysis": "第 4 段（D 段）末句：“Leather wrapped up the edge of the wheel aimed to retain bronze.”（皮革包裹车轮边缘，目的在于保住青铜）。笔记题干与这句话几乎逐词相同（Leather wrapped up the edge of the wheel aimed to retain 原样照搬），空格落在句尾宾语处，答案显然取原文该位置的 bronze。全段讲车轮的构造与工艺：木材做各部件、皮革包车毂保住润滑油、检验车轮平衡、碟形化、加支柱加固，最后以皮革包边保住金属收尾，答案与上下文逻辑连贯，不需要额外推断。填 bronze 即可，不加冠词、不加复数。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 简答题（NO MORE THAN THREE WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "From which body part of the horse was pressure released to the shoulder?",
          "translation": "马的哪个身体部位不再受压，压力被转移到了肩部？",
          "answer": [
            "neck",
            "his neck"
          ],
          "wordClass": "名词（身体部位名称，单数；原文写作 his neck，答案表给出 neck 与 his neck 两种可接受写法，均在三个词以内）",
          "locating": {
            "paragraph": "5",
            "quote": "Because the shafts curved upwards, and the harness pressed against a horse’s shoulders, not his neck, the shaft chariot was incredibly efficient."
          },
          "synonyms": [
            "「pressure released to the shoulder」同义替换为原文的「the harness pressed against a horse’s shoulders, not his neck」（马具的压力作用在肩部而不在颈部，等于把压力从颈部让给了肩部）",
            "「the horse」对应原文的「a horse’s」",
            "「not his neck」中的否定结构点明了被让出的部位正是 neck（颈部）"
          ],
          "locatingTip": "定位：题干关键词 shoulder 与 body part of the horse 指向第 5 段（E 段）讲辕木与马具的那一句；该段依次讲辕式战车的效率、戟（halberd）、速度，只有这一句同时出现 shoulders 与 neck。确定答案技巧：题干用被动式“pressure was released to the shoulder”提问，原文用“pressed against a horse’s shoulders, not his neck”正面陈述，not 之后的成分就是被让出的部位，答案为 neck；若保留原文的物主代词写成 his neck 也符合答案表，两种写法都在三个词以内。",
          "analysis": "第 5 段（E 段）说明带辕战车（shaft chariot）为何高效：“Because the shafts curved upwards, and the harness pressed against a horse’s shoulders, not his neck, the shaft chariot was incredibly efficient.”（由于辕木向上弯曲，马具压在马的肩部而不是颈部，这种辕式战车效率极高）。题干问“马的哪个身体部位不再受压、压力被转移到肩部”，正对应原句的 not his neck：原文用否定结构明确指出受压部位是肩部而非颈部，反过来说颈部正是被解除压力的部位，因此答案是 neck（也可写 his neck）。定位时注意题干 shoulder 与原文 shoulders、pressure 与 harness pressed 的对应关系；不要误填 shoulders（那是接受压力的部位，与题干“释放到肩部”的落点相反）。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "On what kind of road surface did the researchers measure the speed of the chariot?",
          "translation": "研究人员是在何种路面上测量战车速度的？",
          "answer": [
            "sand",
            "the sand"
          ],
          "wordClass": "名词（地表材料名称，不可数；原文写作 on the sand，答案表给出 sand 与 the sand 两种可接受写法，均在三个词以内）",
          "locating": {
            "paragraph": "5",
            "quote": "The speed of chariot which was tested on the sand was quite fast."
          },
          "synonyms": [
            "「did the researchers measure the speed」同义替换为原文的「The speed of chariot which was tested」（主动提问与被动态陈述互换，测量对象都是战车的速度）",
            "「road surface」对应原文的地点状语「on the sand」（路面材料即沙地）",
            "「researchers」对应原文测试的执行者（原文用被动语态省略，语境指测试人员）"
          ],
          "locatingTip": "定位：题干关键词 the speed of the chariot 与 road surface 指向第 5 段（E 段）倒数第二句，该段只在结尾处谈速度并用 on the sand 交代场地，扫读时盯住 speed 即可锁定。确定答案技巧：题干问“在哪种路面（what kind of road surface）”，原文用介词短语 on the sand 回答，去掉介词后得到的名词就是答案 sand；答案表也接受带定冠词的 the sand，两者都不超过三个词。注意不要误填同段的其他信息（shafts、halberd、charioteer 等），也不要自己推断出“desert、earth road”这类原文没有的路面词。",
          "analysis": "第 5 段（E 段）末尾讲战车速度：“The speed of chariot which was tested on the sand was quite fast.”（战车的速度曾在沙地上测试，是相当快的）。题干问研究人员在何种路面上测量战车速度，对应原文的地点状语 on the sand：on 表示“在……之上”，the sand 即沙地，因此答案是 sand（也可写 the sand）。原文用被动语态 was tested（被测），题干用主动语态 did the researchers measure（研究者测量），语态虽然不同，但测试对象（战车的速度）与测试场所（沙地）完全一致。注意原文该句语法略有不规范（which 从句修饰 chariot），但信息明确：速度测试是在沙地上进行的。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "In what part of his afterlife palace was Emperor Qin Shi Huang buried?",
          "translation": "秦始皇被葬在其来世宫殿的哪一部分？",
          "answer": [
            "caverns",
            "underground caverns"
          ],
          "wordClass": "名词（复数，地下宫室名称；原文写作 underground caverns，答案表给出 caverns 与 underground caverns 两种可接受写法，均为复数形式，均在三个词以内）",
          "locating": {
            "paragraph": "6",
            "quote": "Qin Shi Huang was buried in the most opulent tomb complex ever constructed in China, a sprawling, city-size collection of underground caverns containing everything the emperor would need for the afterlife."
          },
          "synonyms": [
            "「his afterlife palace」同义替换为原文的「the most opulent tomb complex ... containing everything the emperor would need for the afterlife」（为皇帝来世准备一切的陵墓建筑群）",
            "「Emperor Qin Shi Huang」与原文「Qin Shi Huang」原词复现，并以 was buried in 直接给出埋葬地点",
            "「In what part ... was buried」对应原文介词 in 之后的「a collection of underground caverns」，同位语部分就是答案所在的组成部分"
          ],
          "locatingTip": "定位：专有名词 Qin Shi Huang 只在第 6 段（F 段）出现，一步即可锁定该段第三句，句中的 was buried in 与题干 was buried 完全对应。确定答案技巧：题干问“in what part（在哪一部分）”，要抓原文 in 后面表示陵墓构成的名词短语——原文先给出整体 the most opulent tomb complex ever constructed in China，再用同位语 a sprawling, city-size collection of underground caverns 说明其构成，答案取同位语的中心名词 underground caverns，也可只写核心名词 caverns（答案表两者都接受）。不要填 tomb complex（那是整座陵墓的统称，不是其中“哪一部分”），也不要填 city-size（那是形容词性修饰语）。",
          "analysis": "第 6 段（F 段）第三句：“Qin Shi Huang was buried in the most opulent tomb complex ever constructed in China, a sprawling, city-size collection of underground caverns containing everything the emperor would need for the afterlife.”（秦始皇被葬在中国有史以来最豪华的陵墓建筑群中，一片城市般大小、由地下洞室组成的建筑群，其中包含他在来世所需的一切）。题干把这座陵墓称为 his afterlife palace（他的来世宫殿），正对应原文 containing everything the emperor would need for the afterlife 这一描述；题干问的是埋葬在其中的“哪一部分”，原文用同位语点明这座建筑群是 a collection of underground caverns，即由地下洞室构成，因此答案是 underground caverns，也可只写核心名词 caverns。本段前一句提到 the warring states 与 Qin unification，末句又说古中国人相信陪葬品乃至陪葬的人可以随死者进入来世，都属于背景信息，不影响本题定位；注意别把 tomb complex 或 most opulent 当成答案。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
