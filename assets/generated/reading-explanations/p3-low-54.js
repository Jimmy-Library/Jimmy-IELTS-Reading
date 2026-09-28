(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-low-54", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-low-54",
  "meta": {
    "examId": "p3-low-54",
    "title": "Movement Underwater 水下运动",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "A strategy to avoid being attacked",
          "translation": "一种避免被攻击的策略",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "At dawn, they sink back down in an effort to escape predators"
          },
          "synonyms": [
            "“A strategy” 对应原文的 “in an effort to”（为了某目的而采取的行动，即一种做法、策略）",
            "“to avoid being attacked” 同义替换为原文的 “to escape predators”（躲避捕食者）",
            "“avoid” 与原文的 “escape” 同为“躲开、逃脱”之意，“being attacked” 与 “predators” 对应，被天敌捕食即遭攻击"
          ],
          "locatingTip": "定位：题干关键词是 avoid / attacked，但原文不会原词复现，要用 escape predators、avoid predation 这类同义表达去扫读。全文有两处涉及“躲避天敌”：A 段末句列举移动的原因时出现 “avoiding predation”，D 段末句则是浮游动物黎明下沉的行为 “At dawn, they sink back down in an effort to escape predators”。确定答案技巧：题干的中心词是 a strategy（一个具体的策略、做法），A 段那串只是名词罗列的原因，没有给出任何可操作的做法，属于“原因”而非“策略”；D 段则把下沉这一具体动作解释为避敌手段，符合“策略”的定义，故选 D。",
          "analysis": "D 段整段讲浮游动物的垂直迁移：白天待在阳光照不到的深处，“Species that live below the level where sunlight reaches nightly swim hundreds of meters up to the surface to feed in the relative safety of darkness.”，而到黎明时“At dawn, they sink back down in an effort to escape predators—a double journey equivalent to a person swimming 700 km a day.”（黎明时它们又下沉回去，以躲避捕食者，这趟往返相当于一个人一天游 700 公里）。题干 “A strategy to avoid being attacked” 中的 strategy 落在这句的 “in an effort to”（有目的地做某事）上，avoid being attacked 落在 “to escape predators” 上：下沉是手段，躲避捕食者是目的，与题干完全吻合。A 段的 “avoiding predation” 只是列举移动的根本需求（finding food, avoiding predation, seeking a mate...），属于解释“生物为何要移动”的清单之一，并未描述任何一种避敌做法，因此不能因为出现 avoid predation 就误选 A。",
          "traps": []
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "How fish are able to keep afloat naturally",
          "translation": "鱼类如何能够自然地保持漂浮",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Most fishes have swim bladders to help them offset the density of their bodies and so maintain neutral buoyancy with minimal effort."
          },
          "synonyms": [
            "“keep afloat” 同义替换为原文的 “maintain neutral buoyancy”（保持中性浮力）",
            "“How ... are able to” 对应原文交代的手段 “have swim bladders to help them ...”（靠鱼鳔这一构造做到）",
            "“naturally” 同义替换为原文的 “with minimal effort”，即不需付出多少能量、靠自身结构自然实现"
          ],
          "locatingTip": "定位：keep afloat 在原文里有 maintain neutral buoyancy / stay afloat 两个同义表达，都可以用来扫读。B 段第 4 句出现 “organisms need to spend relatively little energy to stay afloat”，C 段首句出现 “maintain neutral buoyancy with minimal effort”。确定答案技巧：题干问的是 “how fish are able to”，即需要一个“靠什么构造、靠什么机制”的交代。B 段那句的主语是泛指的 organisms，讲的是水的密度带来浮力这一物理特性，并没有说鱼靠什么装置做到；C 段首句则直接给出机制——most fishes have swim bladders（靠鱼鳔），并且说明效果是 maintain neutral buoyancy with minimal effort，与题干的 naturally 精确对应，故选 C。",
          "analysis": "C 段首句：“Most fishes have swim bladders to help them offset the density of their bodies and so maintain neutral buoyancy with minimal effort.”（大多数鱼有鳔，用以抵消身体的密度，从而以极小的消耗保持中性浮力）。这句话把“鱼如何自然漂浮”讲得很完整：手段是 swim bladders（鱼鳔），效果是 maintain neutral buoyancy（保持中性浮力），代价是 with minimal effort（几乎不费力）。题干的 keep afloat 就是 maintain neutral buoyancy 的通俗说法，naturally 对应 with minimal effort（不必额外耗能，靠生理构造自然完成）。同段下文还补充鱼鳔内部的血管网能增减氧气、二氧化碳等气体，进一步说明这套装置如何运作。B 段第 4 句的 stay afloat 虽然字面更接近 keep afloat，但那句在解释水的物理性质（密度带来浮力），既没提鱼鳔，也没回答“鱼靠什么做到”，因此排除。",
          "traps": []
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "The physical process by which fish propel themselves ahead",
          "translation": "鱼类把自己推向前方所依据的物理过程",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The body is thrown into a series of curves that press sideways and back against the water, producing a forward thrust."
          },
          "synonyms": [
            "“propel themselves ahead” 同义替换为原文的 “producing a forward thrust”（产生向前的推力）",
            "“The physical process” 对应原文的 “The body is thrown into a series of curves that press sideways and back against the water”，即身体弯曲压水的物理机制",
            "“by which” 提示寻找产生推力的机制，原文用现在分词 “producing” 引出结果，正是所问的因果关系"
          ],
          "locatingTip": "定位：propel ahead 在原文中对应 forward thrust，thrust（推力）是全篇唯一直接表示“推着往前”的词，用它可以一步扫到 G 段。确定答案技巧：G 段首句先点题 “Almost all fishes swim by undulation.”，随后给出完整的物理链条——W 形肌肉沿体侧依次收缩、身体形成一连串曲线、把水向侧后方压、水产生反作用力形成向前的推力，正好是题干所问的 physical process。注意排除两个看似相关的段落：E 段虽讲运动，但落点是减小三种阻力（drag），属于“如何省力”而非“如何前进”；F 段讲的是游泳能力的三种专长（速度、加速、机动性），与推进的物理过程无关。",
          "analysis": "G 段集中解释鱼如何游动：“Almost all fishes swim by undulation. Strong W-shaped muscles along the side of the body progressively contract and relax in sequence, from head to tail and from side to side, creating a traveling horizontal wave. The body is thrown into a series of curves that press sideways and back against the water, producing a forward thrust.”（几乎所有鱼都靠身体波动游动。体侧强壮的 W 形肌肉从头到尾、由一侧到另一侧依次收缩与放松，形成一道行进中的水平波。身体于是被抛出一连串曲线，向侧后方压水，从而产生向前的推力）。题干的 “The physical process by which fish propel themselves ahead” 要求的正是这条因果链：肌肉收缩产生波动，波动使身体压水，水的反作用力形成 forward thrust。其中 propel themselves ahead 与 producing a forward thrust 一一对应，The physical process 对应波动压水的描述，因此答案是 G。E 段的 three types of drag 讨论的是如何减小阻碍，而不是如何产生前进的动力；F 段的 fast, steady cruising、swift acceleration、maneuverability 谈的是能力的分类，都不是推进机制。",
          "traps": []
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "A list of reasons why different creatures move from one place to another",
          "translation": "不同生物从一处移动到另一处的原因清单",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "finding food, avoiding predation, seeking a mate or a safe place to have young, or migrating to an area with more favorable conditions"
          },
          "synonyms": [
            "“A list of reasons” 对应原文用逗号和 or 串联的并列结构 “finding food, avoiding predation, seeking a mate or a safe place to have young, or migrating ...”",
            "“different creatures” 对应原文的 “many organisms” 与 “marine creatures”，都是泛指各类生物",
            "“move from one place to another” 同义替换为原文的 “migrating to an area with more favorable conditions”，migrating 即从一处迁往另一处"
          ],
          "locatingTip": "定位：题干的核心信息是 “a list of reasons”（一串理由），全文只有 A 段末句用 or 和逗号并列了一串动名词短语，一次给出四个原因。确定答案技巧：看到题干里的 list 就要找原文中的并列结构。A 段末句 “the basic requirements are the same—finding food, avoiding predation, seeking a mate or a safe place to have young, or migrating to an area with more favorable conditions”，理由数为四，结构是典型的清单，可直接锁定 A 段。注意 D 段虽然也写到浮游动物每天上浮下沉的长途往返（a double journey equivalent to a person swimming 700 km a day），但那是单一物种的具体行为记录，不是“不同生物”的多种原因，属于干扰。",
          "analysis": "A 段先总述自推动力是许多生物的基本能力，用浮游生物摆动鞭毛、海豚逐浪等例子说明海洋生物的运动方式千差万别，随后用转折交代本题所需的内容：“Each species has its own particular need for the evolutionary developments that have taken place, but the basic requirements are the same—finding food, avoiding predation, seeking a mate or a safe place to have young, or migrating to an area with more favorable conditions.”（每个物种对已经发生的进化演变都有各自的需求，但根本诉求是相同的：觅食、躲避捕食、寻找配偶或安全的育幼之地，或者迁移到条件更有利的区域）。句末这一串由 or 连接的四项动名词短语就是题干所说的 “a list of reasons why different creatures move”，其中最后一项 migrating to an area with more favorable conditions 与 “move from one place to another” 直接对应，前面的 finding food、avoiding predation、seeking a mate 也都是移动的原因。题干要求“清单”，此处一次列全，因此答 A。",
          "traps": []
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "How the medium of water both restricts and aids movement",
          "translation": "水这一介质如何既限制运动又帮助运动",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Consequently, there is much more resistance to movement than on land, as anyone will know who has ever tried to wade through waist-deep water. However, with density comes much greater buoyancy, so that organisms need to spend relatively little energy to stay afloat."
          },
          "synonyms": [
            "“restricts movement” 同义替换为原文的 “there is much more resistance to movement than on land”（阻力更大，即限制运动）",
            "“aids movement” 同义替换为原文的 “with density comes much greater buoyancy”，浮力更大使生物几乎不耗能量即可漂浮",
            "“the medium of water” 对应原文的 “The particular physical properties of water that most affect movement”"
          ],
          "locatingTip": "定位：题干用 both ... and 明确要求同一段里同时出现“限制”和“帮助”两种相反作用。B 段的结构正是这种一负一正：先用 Consequently 引出 “there is much more resistance to movement than on land”（限制），再用 However 转折引出 “with density comes much greater buoyancy ... stay afloat”（帮助）。确定答案技巧：扫读时重点捕捉表示对比的 However 与 Consequently，全文只有 B 段围绕水的物理性质把两面都写出来，因此答案是 B。C 段只讲鱼鳔这一具体的适应构造，E 段只讲如何克服阻力，都只有“限制”一面。",
          "analysis": "B 段开头先点明讨论对象：“The particular physical properties of water that most affect movement are density, viscosity (stickiness), and buoyancy.”（对运动影响最大的水的物理特性是密度、黏性和浮力），紧接着先写水的“限制”一面：“Seawater is about 800 times denser than air and nearly 100 times as viscous. Consequently, there is much more resistance to movement than on land, as anyone will know who has ever tried to wade through waist-deep water.”（海水密度约为空气的 800 倍，黏性接近 100 倍，因此运动阻力远大于陆地，在齐腰深的水里行走过的人都能体会到）；随后用 However 转折写出水的“帮助”一面：“However, with density comes much greater buoyancy, so that organisms need to spend relatively little energy to stay afloat.”（不过密度也带来大得多的浮力，生物因此只需耗费很少的能量就能浮着）。一负一正恰好对应题干的 both restricts and aids movement，故答 B。做题时抓住 Consequently 与 However 这对信号词即可稳定命中，避免只读到“阻力大”就仓促作答。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–35 表格填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 35
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Ability to maintain the same 32 ________ over long distances（另见右栏 Example fish species: Swordfish）",
          "translation": "长距离保持相同 ________ 的能力（右栏示例鱼种为剑鱼 Swordfish）",
          "answer": "speed",
          "wordClass": "名词（在表格“专项能力”一栏的条目短语中作 the same 之后的中心名词，表示“同样的速度”；用单数形式，不加复数，the same 之后不再加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "Tuna, swordfish, and mackerel all specialize in fast, steady cruising, but there are many other fishes for whom sustained speed is less important, such as the barracuda."
          },
          "synonyms": [
            "“maintain the same ... over long distances” 同义替换为原文的 “steady cruising” 与 “sustained speed”：steady 表示速率稳定不变，对应 the same；sustained 表示持续，对应 over long distances",
            "“Ability to” 同义替换为原文的 “specialize in”（专长于某事）",
            "“Swordfish” 在原文中原词复现于 “Tuna, swordfish, and mackerel all specialize in fast, steady cruising”"
          ],
          "locatingTip": "定位：先用表格右栏的 Swordfish 定位，F 段首句同时出现 Tuna, swordfish, and mackerel。确定答案技巧：左栏描述是 “Ability to maintain the same [32] over long distances”，关键信息是“长期保持不变的某一属性”。原文把这类鱼的专长称作 fast, steady cruising，其中 steady（稳定、不波动）对应 the same，cruising（巡游）对应 over long distances，两个修饰语共同修饰的属性就是“速度”，所以填 speed。同段后半句 “sustained speed is less important” 再次出现 speed 一词，可用来反向印证答案。",
          "analysis": "F 段开头：“Speed is only one of three important aspects of swimming ability. Tuna, swordfish, and mackerel all specialize in fast, steady cruising, but there are many other fishes for whom sustained speed is less important, such as the barracuda.”（速度只是游泳能力三个重要方面之一。金枪鱼、剑鱼和鲭鱼都专长于快速而稳定的巡航，但也有许多鱼并不看重持续的速度，例如梭鱼）。表格第一行要求填“长距离保持相同 ____ 的能力”，例句鱼是 Swordfish（剑鱼）：原文用 fast, steady cruising 描述这一专长，steady 对应 the same（保持同一速率），cruising 对应 over long distances（长距离巡游），受这两个词共同限定的核心名词就是 speed；紧接着的 “sustained speed is less important” 又给出了 speed 的同义搭配（持续的速度），双重印证答案。词性上空格前是 the same，需要不可数名词原形，故填 speed，不要写 speeds 或 cruising。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "Rapid 33 ________（另见右栏 Example fish species: Barracuda）",
          "translation": "迅速的 ________（右栏示例鱼种为梭鱼 Barracuda）",
          "answer": "acceleration",
          "wordClass": "名词（不可数；在表格“专项能力”一栏的条目短语中被形容词 Rapid 前置修饰，作该短语的中心名词；不加复数、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "This formidable predator specializes in swift acceleration, and has a far higher success rate for its attacks than its steady-cruising cousins."
          },
          "synonyms": [
            "“Rapid” 同义替换为原文的 “swift”（两者都表示迅速）",
            "“Rapid 33” 是原文 “specializes in swift acceleration” 的压缩改写，删去了动词 specializes in，只保留修饰语加中心名词",
            "“This formidable predator” 通过上文的 “such as the barracuda” 与表格右栏的 Barracuda 指同一种鱼"
          ],
          "locatingTip": "定位：用表格右栏的 Barracuda 定位，F 段上文出现 “many other fishes ... such as the barracuda”。确定答案技巧：左栏只给了 “Rapid [33]”，需要补出被“迅速”修饰的那个名词。紧接 barracuda 之后的一句以 This formidable predator（这种可怕的天敌）回指梭鱼，句中 specializes in swift acceleration 的 swift 与题干的 Rapid 同义，故 swift 所修饰的中心名词 acceleration 即为答案。注意不要把 specializes in 后的整个短语写成 swift acceleration，词数限制是 NO MORE THAN TWO WORDS，而空格前已有 Rapid，只需填 acceleration。",
          "analysis": "F 段在讲完快速稳定巡航的鱼类之后写道：“...but there are many other fishes for whom sustained speed is less important, such as the barracuda. This formidable predator specializes in swift acceleration, and has a far higher success rate for its attacks than its steady-cruising cousins.”（但也有许多鱼并不看重持续的速度，例如梭鱼。这种可怕的天敌专长于迅速加速，其攻击成功率远高于那些匀速巡航的同类）。表格第二行要求填“迅速的 ____”，右栏示例鱼为 Barracuda：原文中 This formidable predator 与上文 such as the barracuda 构成指代关系，指向同一种鱼，其专长被表述为 swift acceleration。swift 与题干 Rapid 同义，空格要的是 swift 所修饰的名词，即 acceleration（加速）。这一段把梭鱼与 steady-cruising cousins 作对比，也提醒读者它依靠的是瞬时加速而非持续速度，可从语义上确认不是 speed。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "Sudden attack on prey following period of lying in wait｜Example fish species: 34 ________",
          "translation": "潜伏一段时间之后对猎物发动突然袭击｜示例鱼种：________",
          "answer": "freshwater pike",
          "wordClass": "名词短语（鱼种名称，出现在表格“示例鱼种”一栏；核心名词 pike 受 freshwater 前置修饰，按原文小写、保留两词形式 freshwater pike）",
          "locating": {
            "paragraph": "6",
            "quote": "The freshwater pike, which lurks in the shadows until its quarry is within striking distance and then lunges with great rapidity"
          },
          "synonyms": [
            "“lying in wait” 同义替换为原文的 “lurks in the shadows until its quarry is within striking distance”（潜伏在暗处等待猎物进入攻击距离）",
            "“Sudden attack on prey” 同义替换为原文的 “lunges with great rapidity”（极快地猛扑）",
            "“following period of” 对应原文的 “then”，即等待之后才发动攻击，先后关系一致"
          ],
          "locatingTip": "定位：空格在右栏“示例鱼种”，因此要用左栏的行为描述去原文找对应的鱼名。左栏关键词是“潜伏等待之后突然袭击”，F 段中 “The freshwater pike, which lurks in the shadows until its quarry is within striking distance and then lunges with great rapidity” 把“潜伏加暴起”写得最完整。确定答案技巧：lurks in the shadows 对应 lying in wait，lunges with great rapidity 对应 sudden attack，唯一与之对应的主语即 freshwater pike。注意同段还有 “has a far higher success rate for its attacks” 描述梭鱼，但梭鱼在表格上一行已经用过，且其特点是 swift acceleration，不要混填。",
          "analysis": "F 段第 4 句：“The freshwater pike, which lurks in the shadows until its quarry is within striking distance and then lunges with great rapidity, achieves a remarkable 70–80 percent success rate.”（淡水狗鱼潜伏在阴影中，等猎物进入攻击距离后极快地猛扑，成功率高达 70% 至 80%）。句中的 which 从句把这种鱼的行为分成前后两个阶段：先用 lurks in the shadows until its quarry is within striking distance 表示长久潜伏、耐心等待，再用 then lunges with great rapidity 表示瞬间发动袭击。题干的 “Sudden attack on prey following period of lying in wait” 正是这一先后顺序的概括，因此空格所问的示例鱼种就是从句所修饰的主语 freshwater pike。填写时按原文写法写 freshwater pike（两个词，全部小写），符合 NO MORE THAN TWO WORDS 的要求；答案表同时接受只写 pike 的简写形式。注意不要误填 70–80 percent，那是成功率（结果），不是鱼名。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "Rapid changes of direction｜Example fish species: 35 ________",
          "translation": "方向的迅速改变｜示例鱼种：________",
          "answer": "butterfly fishes",
          "wordClass": "名词短语（鱼种名称，出现在表格“示例鱼种”一栏；核心名词 fishes 受名词 butterfly 前置修饰，按原文保留两词形式与复数 fishes）",
          "locating": {
            "paragraph": "6",
            "quote": "The third specialization is maneuverability, best demonstrated by the butterfly fishes."
          },
          "synonyms": [
            "“Rapid changes of direction” 同义替换为原文的 “maneuverability”，即能迅速改变行进方向的机动性，原文下一句的 “abrupt changes of track”（路线的突然改变）也与之对应",
            "“Example fish species” 同义替换为原文的 “best demonstrated by the butterfly fishes”，demonstrated by 表示“以某物种为最佳示例”",
            "“The third specialization” 对应表格“Specialisation”这一栏的统属关系"
          ],
          "locatingTip": "定位：左栏 “Rapid changes of direction” 是抽象能力，原文用 maneuverability 一词概括，扫读这个词可落在 F 段倒数第三句。确定答案技巧：该句紧接着写 “best demonstrated by the butterfly fishes”，demonstrated by 正是表格右栏所需要的“示例鱼种”，下一句 “These have disk-shaped bodies that permit abrupt changes of track.” 又用 abrupt changes of track 印证了“迅速改变方向”的含义，因此空格填 butterfly fishes。注意 H 段也出现 butterfly fishes，但那里讲的是它们如何摆动背鳍腹鳍在珊瑚礁间转向，是对鳍的功能的描写；本题要的是“以哪一鱼种说明机动性”，依据在 F 段。",
          "analysis": "F 段把游泳能力分为三类专长，最后一种写道：“The third specialization is maneuverability, best demonstrated by the butterfly fishes. These have disk-shaped bodies that permit abrupt changes of track.”（第三种专长是机动性，最能体现它的是蝴蝶鱼。它们有盘状的身体，可以突然改变行进路线）。题干的 “Rapid changes of direction” 对应 maneuverability 以及 abrupt changes of track，而表格右栏要求的是示例鱼种，原文用 best demonstrated by the butterfly fishes 明确点出，故填 butterfly fishes。填写时保留原文两个词与复数形式，不要写成 butterfly fish 或单数形式，也无需加冠词；词数限制是 NO MORE THAN TWO WORDS，butterfly fishes 恰好两个词。H 段末句 “butterfly fishes undulate their broad dorsal and ventral fins, twisting and turning with great precision through intricate coral reefs” 虽然也讲蝴蝶鱼转向，但它服务于“鳍的样式与排列对机动性至关重要”这一论点，不是本题“以鱼种举例”的落点。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 36–40 图表填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 36,
        "end": 40
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "图表标注：Streamlined shape narrowing towards the rear to reduce 36 ________ drag（流线型身体向尾部收窄，以减少 36 ________ 阻力）",
          "translation": "向尾部逐渐收窄的流线型身体，用以减少 ________ 阻力",
          "answer": "turbulent",
          "wordClass": "形容词（在图表标注中作名词 drag 的前置定语，表示“湍流的”；用原级形式，照抄原文的 turbulent）",
          "locating": {
            "paragraph": "5",
            "quote": "To reduce the turbulent drag created as water flows around the moving shape, a rounded front end and tapered back end are required."
          },
          "synonyms": [
            "“narrowing towards the rear” 同义替换为原文的 “tapered back end”（后端收窄、渐细）",
            "“Streamlined shape” 对应原文构成该外形的两个条件 “a rounded front end and tapered back end”（前端圆润、后端收窄）",
            "“to reduce ... drag” 与原文的 “To reduce the ... drag” 完全对应，说明所求的是被减少的阻力类型"
          ],
          "locatingTip": "定位：图中标注的关键组合是“向尾部收窄 + 减少某种阻力”，E 段把三种阻力及其对策分开写，找 tapered back end 或 rounded front end 即可落到该句。确定答案技巧：原文 “To reduce the turbulent drag created as water flows around the moving shape, a rounded front end and tapered back end are required.” 与本条标注一一对应，故填 turbulent。注意同段另外两句分别对应别的阻力：黏液覆盖的鳞片是对付表面摩擦（surface friction），横截面积最小是对付形状阻力（form drag），三条不能互换，务必按形状特征（前端圆、后端收窄）选 turbulent。",
          "analysis": "E 段先总说游泳效率靠减小摩擦、湍流和体形三种阻力取得，然后逐一给出对策。针对“水流绕过运动形体时产生的那类阻力”，原文写道：“To reduce the turbulent drag created as water flows around the moving shape, a rounded front end and tapered back end are required.”（为减少水流绕过运动形体时形成的湍流阻力，需要前端圆润、后端收窄）。图表此处的标注 “Streamlined shape narrowing towards the rear to reduce 36 ____ drag” 中，narrowing towards the rear 就是 tapered back end 的改写，reduce 与原句一致，被 reduce 的宾语是 turbulent drag，空格位于 drag 之前作定语，因此答案是形容词 turbulent（湍流的）。E 段另两处对策可作对照：减少表面摩擦靠 “the scales of most fishes are coated with slime to lubricate their passage through water”，减少形状阻力靠 “the cross-sectional area of the body should be minimal”，即本题对应的图注是“向尾部收窄”，只与湍流阻力匹配。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "图表标注：Fins controlling 37 ________ movement（箭头指向鱼体侧面的鳍；控制 37 ________ 方向运动的鳍）",
          "translation": "控制 ________ 方向运动的鳍（指鱼体侧面的胸鳍等）",
          "answer": "up-and-down",
          "wordClass": "复合形容词（在图表标注中作名词 movement 的前置定语，表示“上下方向的”；按原文保留连字符形式 up-and-down，不另加词）",
          "locating": {
            "paragraph": "8",
            "quote": "up-and-down motion is controlled by the pectoral and pelvic fins on the fish's sides"
          },
          "synonyms": [
            "“movement” 同义替换为原文的 “motion”",
            "“Fins controlling ...” 是原文被动结构 “motion is controlled by the ... fins” 主动化后的改写，主语与宾语的语序正好互换",
            "“up-and-down” 在原文中原词出现，属于直接复现的答案词"
          ],
          "locatingTip": "定位：图中两条标注文字完全相同（都写作 Fins controlling ____ movement），只能靠箭头所指的鱼鳍部位区分，因此先看 37 的箭头落在鱼的哪个鳍上。37 的箭头指向鱼体侧面的胸鳍一带，回到 H 段找与 pectoral fins 相关的句子：“up-and-down motion is controlled by the pectoral and pelvic fins on the fish's sides.”确定答案技巧：句子把两种鳍与两种运动配对，胸鳍和腹鳍（on the fish's sides）对应的是 up-and-down motion，因此 37 填 up-and-down；背鳍与腹部鳍对应 sideways motion，是 38 的答案。填写时照抄原文的连字符形式 up-and-down。",
          "analysis": "H 段第 2 句把鱼鳍与运动方向一一配对：“The vertically oriented dorsal and ventral fins on the back and belly control sideways motion, while up-and-down motion is controlled by the pectoral and pelvic fins on the fish's sides.”（背部和腹部呈垂直方向的背鳍与腹鳍控制横向运动，而上下运动则由鱼身体两侧的胸鳍和腹鳍控制）。图中 37 的箭头指向鱼体侧面的鳍，即原文所说的 pectoral and pelvic fins on the fish's sides，对应的正是从句中的 up-and-down motion，故空格填 up-and-down。做题提示：本图两条标注文字一模一样，判断顺序是先定箭头指向的部位，再把部位代入原文的配对关系，切记不要按 37、38 的编号顺序去套原文语序——原文先讲 sideways（背鳍腹鳍），后讲 up-and-down（胸鳍腹鳍），与图中编号顺序相反。答案须照抄连字符形式，写成 up and down 会与原文措辞不符。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "图表标注：Fins controlling 38 ________ movement（箭头指向鱼腹部下方伸出的鳍；控制 38 ________ 方向运动的鳍）",
          "translation": "控制 ________ 方向运动的鳍（指鱼背部与腹部的背鳍、腹鳍）",
          "answer": "sideways",
          "wordClass": "形容词（在图表标注中作名词 movement 的前置定语，表示“侧向的”；按原文用单词形式 sideways，不另加词）",
          "locating": {
            "paragraph": "8",
            "quote": "The vertically oriented dorsal and ventral fins on the back and belly control sideways motion"
          },
          "synonyms": [
            "“movement” 同义替换为原文的 “motion”",
            "“Fins controlling ...” 对应原文的主动结构 “the ... fins on the back and belly control sideways motion”，句式由主动改为分词短语，含义不变",
            "“sideways” 在原文中原词出现，属于直接复现的答案词"
          ],
          "locatingTip": "定位：与 37 同出一句，仍靠箭头指向区分。38 的箭头指向鱼腹部下方伸出的那片鳍，对应原文 dorsal and ventral fins on the back and belly 中 belly 一侧的 ventral fins。确定答案技巧：H 段同一个句子的前半段写 “The vertically oriented dorsal and ventral fins on the back and belly control sideways motion”，主语正是箭头所指的这两类鳍，宾语 sideways motion 中的 sideways 就是答案。填写时只写一个词 sideways，不要把 motion 一起抄进去。",
          "analysis": "H 段第 2 句前半段：“The vertically oriented dorsal and ventral fins on the back and belly control sideways motion”（背部和腹部呈垂直方向的背鳍与腹鳍控制横向运动），后半段才转折到 “while up-and-down motion is controlled by the pectoral and pelvic fins on the fish's sides”。图中 38 的箭头落在鱼腹部下方伸出的那片鳍（原文的 ventral fins）上，与前半句的主语对应，因此空格填 sideways。需要注意原文的 motion 与题干的 movement 是同义替换，这一层改写不影响答案词的选择；答案只保留 sideways 一个词即可，写成 sideways motion 会超出 NO MORE THAN TWO WORDS 且重复题干已有的 movement。另需提醒的是，图的编号顺序（37 对应上下运动、38 对应横向运动）与原文叙述顺序（先 sideways 后 up-and-down）相反，做题时以箭头所指部位为准。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "图表标注：Fins which are important for 39 ________ of fish（对鱼的 39 ________ 很重要的鳍）",
          "translation": "对鱼的 ________ 很重要的鳍",
          "answer": "maneuverability",
          "wordClass": "名词（不可数；在图表标注中作介词 for 的宾语，与 important for 构成搭配，表示“对……很重要”；照抄原文的美式拼写 maneuverability，不加复数）",
          "locating": {
            "paragraph": "8",
            "quote": "the style and arrangement of the other fins are crucial for maneuverability"
          },
          "synonyms": [
            "“are important for” 同义替换为原文的 “are crucial for”（至关重要）",
            "“Fins which” 同义替换为原文的具体所指 “the style and arrangement of the other fins”",
            "“39 ____ of fish” 对应原文的 “maneuverability”，即鱼改变方向、精准转向的机动能力"
          ],
          "locatingTip": "定位：图中标签 “Fins which are important for 39 ____ of fish” 的落点是形容词 important，原文用同义词 crucial 表达同一意思，扫读 crucial for 即可落到 H 段后半句 “the style and arrangement of the other fins are crucial for maneuverability”。确定答案技巧：介词 for 的宾语就是要填的名词，即 maneuverability。F 段虽也出现 “The third specialization is maneuverability”，但那句是把机动性列为三种专长之一，并未与“鳍的作用”建立因果关系；本题问的是“鳍对什么很重要”，按 crucial for 定位到 H 段更准确。",
          "analysis": "H 段后半句：“Whereas the shape of the tail fin relates directly to speed—crescent-moon-shaped for fast cruising, broad and flat for acceleration—the style and arrangement of the other fins are crucial for maneuverability.”（尾鳍的形状直接关系到速度，新月形适合快速巡航，宽而平适合加速；而其余各种鳍的样式与排列对机动性至关重要）。题干把 “the style and arrangement of the other fins” 概括成 “Fins which”，把 crucial 改写成 important，空格所缺的正是介词 for 之后的名词宾语 maneuverability。本段最后一句以蝴蝶鱼为例：“butterfly fishes undulate their broad dorsal and ventral fins, twisting and turning with great precision through intricate coral reefs”，在珊瑚礁间精准地扭身转向，正是 maneuverability（机动性）的具体表现，可反向印证词义。填写时照抄原文的美式拼写 maneuverability，一个词，不加冠词也不变复数。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "图表标注：Minimal cross-sectional body area to decrease 40 ________ drag（尽可能小的身体横截面积，以减少 40 ________ 阻力）",
          "translation": "尽可能小的身体横截面积，用以减少 ________ 阻力",
          "answer": "form",
          "wordClass": "名词（在图表标注中作名词 drag 的前置定语，属名词作定语的用法，指“形体阻力”中的“形体”；用单数形式，不加复数）",
          "locating": {
            "paragraph": "5",
            "quote": "To reduce form drag, the cross-sectional area of the body should be minimal"
          },
          "synonyms": [
            "“Minimal cross-sectional body area” 同义替换为原文的 “the cross-sectional area of the body should be minimal”，原文的系表结构被改写为名词短语",
            "“to decrease ... drag” 同义替换为原文的 “To reduce ... drag”（decrease 与 reduce 同义）",
            "“body” 与原文的 “of the body” 直接对应"
          ],
          "locatingTip": "定位：图中第二条标注的关键信息是“横截面积尽可能小”，E 段在讲三种阻力时只有一处提到横截面积，即 “To reduce form drag, the cross-sectional area of the body should be minimal”。确定答案技巧：该句的不定式直接给出被减少的阻力类型，空格位于 drag 之前，故填 form。若一时不确定词义，可用紧接其后的比喻 “a pencil shape would be ideal”（铅笔形最为理想）来验证：铅笔形正是横截面积最小的体形，说明该阻力与身体轮廓形状有关，即 form drag。",
          "analysis": "E 段在讲完减少摩擦阻力和湍流阻力的办法之后写道：“To reduce form drag, the cross-sectional area of the body should be minimal—a pencil shape would be ideal.”（要减少形状阻力，身体的横截面积应当尽可能小，铅笔形最为理想）。图中标注 “Minimal cross-sectional body area to decrease 40 ____ drag” 与这句完全对应：cross-sectional area of the body 对应 cross-sectional body area，minimal 位置虽变但含义一致，decrease 对应 reduce，空格所需的就是 reduce 后面所修饰的阻力类型 form。E 段开头的总述也把三种阻力讲清了：“Swimming efficiency has been achieved by minimizing the three types of drag created by friction, turbulence, and body form.”，其中 body form 正是 form drag 的来源，可知该阻力由体形所致，与横截面积最小这一对策相互印证；因此本题填 form 而非 turbulent（湍流阻力对应的对策是前端圆润、后端收窄）。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
