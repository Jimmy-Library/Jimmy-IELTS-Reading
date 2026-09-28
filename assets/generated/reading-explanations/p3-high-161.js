(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-161", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-161",
  "meta": {
    "examId": "p3-high-161",
    "title": "Insect-inspired robots 昆虫机器人",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–32 段落信息匹配（Which section contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 32
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "positive and negative possibilities for the use of insect-inspired robots",
          "translation": "昆虫启发的机器人在用途上既有积极可能，也有消极可能。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "International experts believe there are tremendous opportunities in biorobotics. However, delegates at the conference had differing visions for the future of the science."
          },
          "synonyms": [
            "「positive ... possibilities」同义替换为原文的「tremendous opportunities in biorobotics」（巨大的机会）",
            "「negative possibilities」同义替换为原文的「were concerned that ...」「were concerned about the ethical implications」（代表们的担忧）",
            "「the use of insect-inspired robots」同义替换为原文的「the initial applications of biorobotics」与「insect-like robots」"
          ],
          "locatingTip": "定位：本题题干没有专有名词，只能用概括性关键词 positive and negative possibilities 与 use 去扫读。做法是先速读 A 至 F 段首句判断各段话题：A 段给定义、B 段讲黄蜂导航、C 段讲沙漠蚂蚁、D 段讲火星飞行器、E 段讲蟑螂机器人，只有 F 段是在做整体评价，因此锁定 F 段。确定答案技巧：F 段首句给出正面判断（tremendous opportunities，机会巨大），紧接着用 While 引出反面声音（some were concerned that the initial applications of biorobotics may be military，有人担心初期应用会用于军事），末句又提伦理担忧（the ethical implications）。一段之内正反两面俱全，与题干的 positive and negative possibilities 精确对应，故答案是 F。",
          "analysis": "F 段第 1、2 句是本题的判分点：「International experts believe there are tremendous opportunities in biorobotics. However, delegates at the conference had differing visions for the future of the science.」（国际专家认为仿生机器人领域机会巨大，然而与会代表对这门科学的未来看法不一）。题干要求找「关于昆虫启发的机器人用途的积极与消极可能」，而 F 段随后两层展开：积极的一面是 Dr Barbara Webb 预言会出现成群的、廉价的、昆虫般的机器人充当社会的清洁工和收集者，Sonja Kleinlogel 期待螳螂虾的超光谱眼睛能造出监测海洋环境健康的遥感器；消极的一面是「some were concerned that the initial applications of biorobotics may be military」以及「Several delegates were concerned about the ethical implications of biorobotics」。其余段落都在介绍某一种具体的仿生技术（黄蜂地标导航、蚂蚁偏光导航、火星扑翼飞行器、蟑螂六足机器人），只讲技术细节，不评价用途的利弊。既能包含正面前景又能包含负面担忧的只有 F 段，所以选 F。做题提示：这类「哪一段包含某信息」的题，概括性强的题干通常对应总述段或总结段，本篇即末段 F。",
          "traps": [
            "为什么不是 A：A 段讲的是昆虫如何解决运动、视觉、导航等复杂问题，并给出 biomimetics 与 biorobotics 的定义，属于全篇引入，没有对机器人用途作正面或负面评价。",
            "为什么不是 C：C 段全部围绕沙漠蚂蚁 Cataglyphis 的导航机制以及据此建造的 Sahabot 展开，是单一技术的描写，既不谈利也不谈弊。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "how perceived size is used as an aid to navigation",
          "translation": "感知到的大小如何被用作导航的辅助手段。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The landmarks are then scaled, from small to large, so that the robot can recognise whether it is getting closer to or further away from them."
          },
          "synonyms": [
            "「perceived size」同义替换为原文的「scaled, from small to large」（按由小到大的比例缩放）",
            "「used as an aid to navigation」同义替换为原文的「so that the robot can recognise whether it is getting closer to or further away from them」（据此判断自己是靠近还是远离）",
            "「landmarks」在原文中直接复现，是机器人导航的参照物"
          ],
          "locatingTip": "定位：题干的关键概念是 size（大小）与 navigation（导航）。全文提到大小的段落不多，扫读时抓住 scaled、small to large 这类表示尺寸变化的词，落在 B 段中部。确定答案技巧：题干问的是「感知大小如何帮助导航」，原文给出的是因果句：地标先「scaled, from small to large」，结果是机器人能判断自己是 closer 还是 further away。看到地标在视野中变大变小即判断远近，正是「用感知到的大小作为导航辅助」，因此答案是 B。注意不要被 C 段的 distance（测距）或 B 段的 map 干扰：它们讲的是别的导航手段，并不是本题的判分依据。",
          "analysis": "B 段叙述 Zelinsky 团队的机器人如何靠地标导航，其中两句构成完整逻辑链：「The robot's panoramic camera logs the surrounding area and its key landmarks, which are then stored in its computer according to how reliable they are as navigational aids.」（全景相机记录周边区域与关键地标，并按它们作为导航依据的可靠程度存入计算机）接着是本题定位句：「The landmarks are then scaled, from small to large, so that the robot can recognise whether it is getting closer to or further away from them.」（随后这些地标按由小到大的比例缩放，以便机器人识别自己是正在靠近还是远离它们）。原文把「大小」当作判断距离的依据，这就是题干所说的「perceived size is used as an aid to navigation」。同段的 map（operates at different scales，按不同比例尺运作的地图）说明 B 段讲的正是地标与地图导航，进一步印证本题落在 B 段。其余段落中的导航手段各不相同：C 段用偏光、路线积分与快照图像，E 段是腿自行判断的控制方式，都不涉及「用大小判断远近」，故答案只能是 B。",
          "traps": [
            "为什么不是 C：C 段确实讲蚂蚁的导航，但用的是偏光（polarised light）、内部指南针、快照图像与 path integrator（路线积分器）测距，题干所说的「用感知到的大小」在 C 段没有出现。",
            "为什么不是 E：E 段也出现 navigate safely toward goals，但那是讲蟑螂与机器人避开障碍、穿越复杂地形，与物体大小的判断无关。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "an example of decision-making taking place in the limbs",
          "translation": "一个「决策发生在肢体之中」的例子。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The key to the cockroach's remarkable cross-country performance lies partly in the fact that its legs do a lot of the thinking without having to consult the brain."
          },
          "synonyms": [
            "「decision-making」同义替换为原文的「do a lot of the thinking」（承担大量思考工作）",
            "「in the limbs」同义替换为原文的「its legs ... without having to consult the brain」（腿自行处理，无需请示大脑）",
            "「an example」对应原文的具体例证，即蟑螂奔跑时的表现 remarkable cross-country performance"
          ],
          "locatingTip": "定位：题干的关键词是 limbs（肢体）与 decision-making（决策）。全文提到腿最多的是 E 段（legs、six legs、whegs），而「思考发生在腿里」这一说法非常独特，只要扫到 thinking、brain、legs 三个词同现即可锁定 E 段。确定答案技巧：原文说 legs do a lot of the thinking without having to consult the brain，即原本由大脑负责的判断改由腿来完成，这正是题干「决策发生在肢体中」的同义改写，因此答案是 E。注意 C 段也讲「计算发生在不同器官里」（in different organs），但 organs 是器官并非 limbs，且那讲的是蚂蚁的多器官分工，不是腿做决策，属于典型的近义干扰。",
          "analysis": "E 段讲 Quinn 与 Ritzmann 从蟑螂身上取经，其中第 3 句是本题落点：「The key to the cockroach's remarkable cross-country performance lies partly in the fact that its legs do a lot of the thinking without having to consult the brain.」（蟑螂越野本领惊人的部分原因在于，它的腿承担了大量思考工作，不必请示大脑）。原文用 do a lot of the thinking（做大量思考）表达「决策」，用 its legs（它的腿）表达「肢体」，并强调 without having to consult the brain（无需请示大脑），即判断权下放到腿部，与题干「decision-making taking place in the limbs」完全对应。段落后半句进一步说他们据此设计出机械步行者与控制策略，让机器人能够穿越复杂地形、安全抵达目标并避开障碍，也延续了「腿承担智能」这一主题。C 段虽然有「performs a number of complex calculations in different organs」（在不同器官中进行复杂计算）的相近表述，但 organs 泛指器官、并非题干限定的 limbs，且那一段的中心是多种导航机制并行，故不选 C。",
          "traps": [
            "为什么不是 C：C 段的计算分布在「different organs（不同器官）」中，指的是蚂蚁把复杂运算分散到各个器官进行，并未说决策由腿这一「肢体」完成，概念范围与题干不符。",
            "为什么不是 B：B 段机器人靠全景相机采集信息、由计算机进行存储与判断，决策发生在机器人的计算机中，与「肢体做决策」相反。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "a description of a potential aid in space exploration",
          "translation": "对一种可能用于太空探索的辅助工具的描述。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Professor Robert Michelson had a different desert challenge – to design a flying robot that can not only navigate but also stay aloft and hover in the thin atmosphere of Mars."
          },
          "synonyms": [
            "「space exploration」同义替换为原文的「the thin atmosphere of Mars」与后文的「the thin Martian air」（火星环境），即太空场景",
            "「a potential aid」同义替换为原文的「to design a flying robot that can not only navigate but also stay aloft and hover」（一种尚在设计中的飞行机器人）",
            "「a description」同义替换为原文对 Entomopter 结构的描写，如「a sort of double-ended dragonfly whose wings beat reciprocally」"
          ],
          "locatingTip": "定位：题干里最强的定位词是 space（太空），全文只有 D 段出现 Mars、Martian air 这类与太空相关的词，一步即可锁定 D 段。确定答案技巧：找到 Mars 之后要确认它确实是「太空探索辅助工具」的描写——原文说 Michelson 要设计一种能在火星稀薄大气中飞行、悬停的机器人，并称之为 Entomopter，还说明它比固定翼飞行器升力更大、可低速飞行或悬停，而固定翼飞行器必须以超过 400 km/h 飞行且无法停下勘察。这些正是对「可能用于太空探索的装置」的完整描述，故选 D。",
          "analysis": "D 段开篇即点题：「Professor Robert Michelson had a different desert challenge – to design a flying robot that can not only navigate but also stay aloft and hover in the thin atmosphere of Mars.」（Robert Michelson 教授面对的是另一项沙漠挑战——设计一种不仅能导航、还能在火星稀薄大气中保持飞行与悬停的飞行机器人）。随后具体描写这一装置：「The “Entomopter” is a sort of double-ended dragonfly whose wings beat reciprocally.」（Entomopter 如同一只双头蜻蜓，双翅做往复拍动），并说明其优势在于「gives the craft unusually high lift compared with a fixed-wing flyer, enabling it to fly slowly or hover in the thin Martian air」。整段就是一个太空用途装置的介绍，与题干「a description of a potential aid in space exploration」严丝合缝，答案是 D。比较：A 段虽总述昆虫各种本领，但没有任何航天内容；C 段的 Sahara Desert 是地球上真实的沙漠，只是研究地点，不是太空探索；E 段的全地形车仍在地面使用。因此带 Mars 的 D 段是唯一答案。",
          "traps": [
            "为什么不是 C：C 段出现的沙漠是撒哈拉沙漠，是 Wehner 研究蚂蚁的野外地点，属于地球环境，与 space exploration 无关。",
            "为什么不是 A：A 段泛泛提到昆虫解决 movement、vision、navigation 等难题并催生仿生技术，没有描述任何航天装置。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "the range of skills that have inspired biorobotics",
          "translation": "启发仿生机器人技术的一系列（多种）能力。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Using the most basic of equipment and brains tinier than a pin-head, insects constantly solve complex problems of movement, vision and navigation – processing data that would challenge a super-computer."
          },
          "synonyms": [
            "「the range of skills」同义替换为原文的「problems of movement, vision and navigation」，即多项不同能力",
            "「have inspired biorobotics」同义替换为原文的「is driving one of the most exciting new fields of technology – biomimetics and biorobotics」",
            "「insects」对应原文列举的昆虫实例，如 A tiny insect、A cockroach、The mantis shrimp"
          ],
          "locatingTip": "定位：题干的核心词 biorobotics 是全文的话题词，但在 A 段以定义形式出现（biomimetics and biorobotics, the imitation of insect systems to control man-made machines），因此应先在 A 段核对。确定答案技巧：题干要的是「一系列技能」的清单，A 段用并列结构一次性列出 movement、vision and navigation 三种能力，并在前面用三个昆虫实例（走盐滩的昆虫、翻越障碍的蟑螂、用超光谱眼睛扫描水下世界的螳螂虾）分别印证运动、视觉与导航，信息点一一对应，所以答案是 A。其他段落都只聚焦一种技能，范围不足以称为 the range of skills。",
          "analysis": "A 段是全篇的引子，先给三个具体画面：一只小昆虫在毫无特征的盐滩上找到方向、一只蟑螂想出如何翻越障碍、螳螂虾用超光谱眼睛扫描水中的世界；随后总结：「Using the most basic of equipment and brains tinier than a pin-head, insects constantly solve complex problems of movement, vision and navigation – processing data that would challenge a super-computer.」（凭借最简陋的装备和比针尖还小的大脑，昆虫不断解决运动、视觉与导航方面的复杂问题——处理连超级计算机都难以应付的数据）。紧接着点明：「How they do it is driving one of the most exciting new fields of technology – biomimetics and biorobotics, the imitation of insect systems to control man-made machines.」（它们如何做到这一点，正推动着一个最令人兴奋的新技术领域——仿生学与仿生机器人学，即模仿昆虫系统来控制人造机器）。原文把 movement、vision、navigation 三项能力并列，正是题干 the range of skills 所指；说这些能力 driving（推动）仿生机器人领域，即题干 have inspired biorobotics。信息完整对应，故答案 A。",
          "traps": [
            "为什么不是 E：E 段只谈蟑螂奔跑与穿越复杂地形这一种运动能力，范围单一，称不上「一系列技能」。",
            "为什么不是 F：F 段讨论的是仿生机器人的前景、军事隐忧与伦理问题，并未列举启发该领域的各项技能。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "how a variety of navigational methods operate at the same time",
          "translation": "多种导航方法如何同时运作。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Like a super-computer, the ant has many separate sub-routines going on simultaneously."
          },
          "synonyms": [
            "「a variety of navigational methods」同义替换为原文的「many separate sub-routines」（许多各自独立的子程序）",
            "「operate at the same time」同义替换为原文的「going on simultaneously」（同时进行）",
            "「the ant」即上文列举的多种机制主体 Cataglyphis，包括偏光定向、快照图像、测距与路线积分"
          ],
          "locatingTip": "定位：题干的关键词是 a variety of（多种）与 at the same time（同时）。全文只有 C 段密集罗列了蚂蚁的多套导航机制（polarised light、internal compass、snapshot image、measuring distance、path integrator），并有 simultaneously 一词，因此直取 C 段。确定答案技巧：定位到 simultaneously 之后，要把前后两句连起来读——前一句说蚂蚁不在大脑里统一处理所有信息，而是「in different organs」做多项复杂计算，本句说它「has many separate sub-routines going on simultaneously」，合起来就是多种导航方法并行运作，与题干完全对应，故选 C。不要被 B 段的 map 或 E 段的 control strategies 误导，它们都不是「多种方法同时进行」。",
          "analysis": "C 段在讲完蚂蚁的多套导航手段之后，用两句作出总结：「Rather than integrate all the information it receives in its brain, the ant actually performs a number of complex calculations in different organs.」（蚂蚁并不是把所有接收到的信息在大脑中统一整合，而是在不同器官中完成多项复杂计算）以及本题定位句：「Like a super-computer, the ant has many separate sub-routines going on simultaneously.」（就像一台超级计算机，蚂蚁有许多各自独立的子程序在同时运行）。前文已经列出了蚂蚁使用的多种方法：用偏光（polarised light）辨别方向、太阳移动时更新内部指南针、用其他眼部感受器储存地标快照图像并与之比对、测量行走距离、由 path integrator 定期告知当前位置。这些机制「many separate sub-routines」并且「simultaneously」，正对应题干「a variety of navigational methods operate at the same time」，所以答案是 C。做题提示：段落信息匹配题里，题干中的 variety（多种）与 same time（同时）这类概括词，往往对应原文的并列结构加 simultaneously、at the same time 之类的副词。",
          "traps": [
            "为什么不是 B：B 段的机器人主要依靠一台全景相机建立地图，原地标按可靠度存入计算机，属于一套统一系统，没有多种导航方法并行运作的描写。",
            "为什么不是 E：E 段讲的是腿与大脑的分工（legs do a lot of the thinking），以及机器人如何避开障碍，并未涉及多种导航方法同时运行。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 33–36 简答题（NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 33,
        "end": 36
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "Which creature sees particularly well under water?",
          "translation": "哪种生物在水下的视力特别好？",
          "answer": "mantis shrimp",
          "wordClass": "名词（生物名称，作主语；mantis shrimp 单复数同形，原文即以单数形式出现）",
          "locating": {
            "paragraph": "1",
            "quote": "The mantis shrimp scans its aquatic world through hyperspectral eyes."
          },
          "synonyms": [
            "「sees particularly well」同义替换为原文的「through hyperspectral eyes」（用超光谱眼睛观察），视觉能力异常突出",
            "「under water」同义替换为原文的「its aquatic world」（它的水中世界）",
            "「Which creature」对应原文的具体生物名 mantis shrimp"
          ],
          "locatingTip": "定位：题干关键词是 creature 与 under water，回到原文找水生生物即可。A 段第 3 句出现「The mantis shrimp scans its aquatic world through hyperspectral eyes.」，aquatic（水生的）与题干 under water 直接对应，mantis shrimp 即答案。确定答案技巧：注意 mantis shrimp 在 F 段（超光谱眼睛可用于海洋环境监测）也出现过，但只有 A 段把它与「水中世界 + 超光谱视觉」绑在一起；题干问的是视力好的水生生物，依据在 A 段。作答限三词以内，写 mantis shrimp 两词即可，不要加上冠词或后面的 eyes 等信息。",
          "analysis": "A 段的三个开篇画面分别对应昆虫的运动、视觉与导航三种能力，其中与视觉有关的是第 3 句：「The mantis shrimp scans its aquatic world through hyperspectral eyes.」（螳螂虾用超光谱眼睛扫描它的水中世界）。hyperspectral eyes 指能感知极宽光谱的眼睛，意味着它看到了人类看不到的大量光信息，正是题干 sees particularly well（看得特别好）的依据；而 aquatic world 表明它生活在水下，对应题干 under water。两个信息点吻合，故答案是 mantis shrimp。F 段末尾 Sonja Kleinlogel 希望研究螳螂虾的超光谱眼睛以造出监测海洋的遥感器，可作为旁证（说明这种眼睛的确是特别出色的水中视觉器官），但直接回答题干的那句话仍在 A 段。",
          "traps": [
            "本题限三词以内，mantis shrimp 已是最简且与答案表一致；不要附带冠词或 eyes 等原文其他词而改变答案形式。",
            "不要误填 Cataglyphis 或 ant：沙漠蚂蚁是 C 段的主角，但它靠偏光分辨方向，原文并未说它水下视力好。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "In addition to a computer, what technical equipment is fitted in Dr Zelinsky's robot?",
          "translation": "除了计算机之外，泽林斯基博士的机器人上还装有哪种技术设备？",
          "answer": "a panoramic camera",
          "wordClass": "名词短语（设备名称；可数名词单数，含不定冠词 a，共三个词，符合 NO MORE THAN THREE WORDS 的限制）",
          "locating": {
            "paragraph": "2",
            "quote": "A research team led by Dr Zelinsky has shown that a robot can navigate its way among 50 different landmarks by recognising them individually using a panoramic camera."
          },
          "synonyms": [
            "「technical equipment ... fitted in」同义替换为原文的「using a panoramic camera」（机器人借助全景相机工作）",
            "「In addition to a computer」对应原文的「stored in its computer」，说明相机与计算机是两件不同的装置",
            "「Dr Zelinsky's robot」同义替换为原文的「A research team led by Dr Zelinsky has shown that a robot ...」"
          ],
          "locatingTip": "定位：题干有两个现成的定位词——人名 Dr Zelinsky 与 equipment camera 的概念词，B 段第 2 句即出现「using a panoramic camera」，一步锁定。确定答案技巧：题目问「除了计算机，还装了什么设备」，回原文找与相机、镜头、传感器相关的名词即可。B 段说机器人「by recognising them individually using a panoramic camera」，而计算机（its computer）在同一段后文才出现，两者是并列的两件装置；题干给出的 a computer 与原文 its computer 对应，那么待填的设备就是 a panoramic camera。作答限三词以内，答案表同时接受 a panoramic camera 与 panoramic camera 两种写法。",
          "analysis": "B 段第 2 句：「A research team led by Dr Zelinsky has shown that a robot can navigate its way among 50 different landmarks by recognising them individually using a panoramic camera.」（Zelinsky 博士领导的研究团队已经证明，机器人可以借助全景相机逐个识别 50 个不同地标，从而在其中穿行导航）。第 5 句又说：「The robot's panoramic camera logs the surrounding area and its key landmarks, which are then stored in its computer according to how reliable they are as navigational aids.」（机器人的全景相机记录周边区域和关键地标，随后它们按可靠程度被存入计算机）。可见机器人身上同时具备两套装置：负责采集画面的 panoramic camera 与负责存储处理的 computer。题干已把 computer 给出，问另一件设备，答案就是 a panoramic camera。注意词数限制：a panoramic camera 恰好三个词；答案表也接受去掉冠词的 panoramic camera，两种写法都算对。",
          "traps": [
            "答案表同时接受 a panoramic camera 与 panoramic camera 两种写法，都符合三词上限；但不能再加词（例如加 digital 之类）而超出限制。",
            "不要误填 computer 或 robot：题干已经把 computer 排除在外，问的是相机这一件设备。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "Where is the Cataglyphis ant found?",
          "translation": "Cataglyphis 蚂蚁在哪里被发现（栖息于何处）？",
          "answer": "the sahara desert",
          "wordClass": "专有名词（地点名称，含定冠词 the，地名首字母大写；回答题干 Where 的提问，作地点状语，指这种蚂蚁的分布地）",
          "locating": {
            "paragraph": "3",
            "quote": "For three decades, Professor Ruediger Wehner has journeyed from Switzerland to the Sahara Desert where Cataglyphis, a tiny ant with a brain weighing just 0.1 mg, performs acts of navigational genius when it leaves its nest, forages for food and returns successfully."
          },
          "synonyms": [
            "「Where ... found」同义替换为原文的地点表达「to the Sahara Desert」，即蚂蚁出没、生活的地方",
            "「Cataglyphis ant」在原文中以专有名词「Cataglyphis」直接出现，无需转换",
            "「is found」对应原文的「journeyed from Switzerland to ... where Cataglyphis ... performs acts of navigational genius」所隐含的分布地"
          ],
          "locatingTip": "定位：题干含专有名词 Cataglyphis，全文只出现在 C 段（首句与第 2 句），锁定 C 段首句即可。确定答案技巧：C 段首句说 Wehner 三十年来「from Switzerland to the Sahara Desert」，Cataglyphis 就出现在 where 引导的定语从句所修饰的地点之后，where 指代前面的 the Sahara Desert，即蚂蚁的栖息地。填空时注意区分两个地名：Switzerland 是研究者 Wehner 的出发地，Sahara Desert 才是蚂蚁所在之处，答案应取后者，且按答案表保留冠词 the（the sahara desert 与 sahara desert 两种写法答案表都接受）。",
          "analysis": "C 段首句：「For three decades, Professor Ruediger Wehner has journeyed from Switzerland to the Sahara Desert where Cataglyphis, a tiny ant with a brain weighing just 0.1 mg, performs acts of navigational genius when it leaves its nest, forages for food and returns successfully.」（三十年来，Ruediger Wehner 教授从瑞士远赴撒哈拉沙漠，在那里，大脑仅重 0.1 毫克的小蚂蚁 Cataglyphis 离家觅食后总能成功返回，展现出导航天赋）。句中关系副词 where 紧接 the Sahara Desert，用来引出蚂蚁的活动场景，也就是题干所问的「Cataglyphis 蚂蚁在哪里」。要小心 from Switzerland 这一干扰：介词 from 引出的是出发地，to the Sahara Desert 才是目的地与栖息地。答案写 the sahara desert（含冠词共三词，符合限制），答案表也接受省略冠词的 sahara desert。",
          "traps": [
            "不要误填 Switzerland：原文说的是 Wehner 教授从瑞士出发，瑞士是研究者所在国，不是蚂蚁的栖息地，介词 from 与 to 已把两地角色分得很清楚。",
            "答案需在两到三个词之间（the sahara desert 或 sahara desert 均可）；若再添加 Africa、desert 以外的词就会超出 NO MORE THAN THREE WORDS 的限制。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "What atmospheric effect helps the Cataglyphis ant to know its direction?",
          "translation": "什么大气效应帮助 Cataglyphis 蚂蚁辨别方向？",
          "answer": "polarised light",
          "wordClass": "名词短语（不可数，指偏振光这一光学现象；回答题干 What atmospheric effect 的提问，在题干中作主语；前面不加冠词，保持原文的 polarised light）",
          "locating": {
            "paragraph": "3",
            "quote": "Cataglyphis uses polarised light, caused when air molecules scatter light, to orient and steer itself."
          },
          "synonyms": [
            "「atmospheric effect」同义替换为原文的解释性短语「caused when air molecules scatter light」（由空气中的分子散射光线所造成）",
            "「helps the ant to know its direction」同义替换为原文的「to orient and steer itself」（用来定向与掌控行进方向）",
            "「What」提问的对象即原文 uses 的直接宾语 polarised light"
          ],
          "locatingTip": "定位：题干重复出现专有名词 Cataglyphis，配合关键词 direction，C 段第 2 句即「Cataglyphis uses polarised light ... to orient and steer itself.」，一步锁定。确定答案技巧：题干问「什么大气效应」，原文对 polarised light 作了定义式解释——「caused when air molecules scatter light」，即由空气分子散射光线造成，这正是「大气效应」的含义；而 orient and steer itself 对应题干 know its direction。因此答案是 polarised light（偏光/偏振光）。填空时注意两点：一是拼写须与原文一致，用英式拼法 polarised；二是不要填 air molecules 或 scatter light，它们只是这一效应的成因，不是效应本身。",
          "analysis": "C 段第 2 句：「Cataglyphis uses polarised light, caused when air molecules scatter light, to orient and steer itself.」（Cataglyphis 利用偏振光来定向与掌控方向，而偏振光是空气分子散射光线时产生的）。这句话同时满足了题干的三重要求：主体是 Cataglyphis（题意中的蚂蚁）、目的是 orient and steer itself（定向，即题干 know its direction）、手段是 polarised light，且原文用 caused when air molecules scatter light 说明它是一种由大气散射造成的光学现象，与题干的 atmospheric effect 精确对应。紧接的下一句进一步说蚂蚁眼睛上缘有一组特殊感光细胞专门探测偏振光，随后又说太阳移动时它会更新内部罗盘，这些都在强化「偏振光帮助蚂蚁辨向」这一主线。答案写 polarised light，保持原文英式拼写（-ised），不要写成 polarized light。",
          "traps": [
            "不要误填 air molecules 或 scatter：这两个词只是解释偏振光成因的成分，题干问的是「效应」本身，即 polarised light。",
            "拼写要与原文一致：polarised light 用英式拼法 -ised；写成 polarized light 属于改动原文，应按原文形式作答。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 37–40 人名与机器人匹配（Matching: people and robots）",
      "mode": "per_question",
      "questionRange": {
        "start": 37,
        "end": 40
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "Dr Alex Zelinsky",
          "translation": "亚历克斯·泽林斯基博士（对应选项 D：依据有用程度对环境信息进行分类的机器人）。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The robot's panoramic camera logs the surrounding area and its key landmarks, which are then stored in its computer according to how reliable they are as navigational aids."
          },
          "synonyms": [
            "「categorises information from the environment according to its usefulness」同义替换为原文的「stored in its computer according to how reliable they are as navigational aids」（按作为导航依据的可靠程度分类存储）",
            "「information from the environment」同义替换为原文的「the surrounding area and its key landmarks」（周边区域与关键地标）",
            "「a robot」对应原文的「The robot's panoramic camera」所指的 Zelinsky 团队的导航机器人"
          ],
          "locatingTip": "定位：人名匹配题先用人名回原文定位。Dr Alex Zelinsky 只在 B 段出现（首句与第 2 句），因此把 B 段当作答案区。确定答案技巧：逐句读 B 段，找与选项 D 语义重合的表述。选项 D 的核心是「按有用程度对环境信息进行分类」，而 B 段第 5 句说机器人把记录下来的周边环境和关键地标「stored in its computer according to how reliable they are as navigational aids」——according to how reliable 即按可靠性（有用程度），stored 即分类归置，完全吻合。确认其他选项在 B 段无对应之后，答案定为 D。",
          "analysis": "B 段专讲 Zelinsky 团队的地标导航机器人。第 2 句说机器人靠全景相机逐个识别 50 个地标来导航；第 5 句是本题的关键：「The robot's panoramic camera logs the surrounding area and its key landmarks, which are then stored in its computer according to how reliable they are as navigational aids.」（机器人的全景相机记录周边区域和关键地标，这些信息随后按它们作为导航依据的可靠程度被存入计算机）。原文的 according to how reliable they are（依据可靠程度）就是选项 D 的 according to its usefulness（依据有用程度），stored（存入并分类）对应 categorises（分类），the surrounding area and its key landmarks 就是选项 D 所说的 information from the environment。三个信息点一一对应，因此 Zelinsky 对应 D。其余选项与 B 段不符：B 段没有地形、光照、清洁或军事相关的内容。",
          "traps": [
            "为什么不是 A：选项 A 说机器人同时利用光和存储的图像导航，对应的是 C 段 Wehner 团队的 Sahabot（靠偏振阳光与记忆中的地标图像）；B 段的机器人靠全景相机拍照并建立地图，没有把「光」作为导航线索。",
            "为什么不是 C：选项 C 说机器人能在困难地面移动，这是 E 段 Quinn 与 Ritzmann 的六足/轮腿机器人的特点，B 段的机器人只在 50 个地标之间穿行导航，不涉及地形。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Professor Ruediger Wehner",
          "translation": "吕迪格·韦纳教授（对应选项 A：既利用光也利用存储的图像进行导航的机器人）。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Wehner and colleagues have built \"Sahabot,\" a small vehicle that uses polarisers and a CCD camera to store 360° images of its surroundings. It navigates by using polarised sunlight and comparing the current images of landmarks to the ones in its memory."
          },
          "synonyms": [
            "「makes use of light ... for navigational purposes」同义替换为原文的「It navigates by using polarised sunlight」（靠偏振阳光导航，偏振阳光即光）",
            "「stored images」同义替换为原文的「comparing the current images of landmarks to the ones in its memory」（把当前地标图像与记忆中的图像比对）",
            "「a robot」同义替换为原文的「Sahabot, a small vehicle that uses polarisers and a CCD camera to store 360° images of its surroundings」"
          ],
          "locatingTip": "定位：人名 Professor Ruediger Wehner 出现在 C 段首句，且 C 段末尾还有「Wehner and colleagues have built \"Sahabot\"」，因此答案区在 C 段。确定答案技巧：抓住 Sahabot 的两条工作线索——「uses polarisers and a CCD camera to store 360° images」（存储图像）与「navigates by using polarised sunlight and comparing the current images of landmarks to the ones in its memory」（用偏振阳光并与记忆图像比对）。前者对应选项 A 的 stored images，后者对应选项 A 的 makes use of light，两项合起来正好是 A 的完整表述，故选 A。对照其他选项：C 段没有困难地形、没有清洁收集、没有军事用途，也不存在「超越昆虫原型」的说法（Sahabot 恰恰在模仿蚂蚁用偏光导航）。",
          "analysis": "C 段末尾写：「Using the ant's ability to steer by polarised light and to store and reuse landscape images, Wehner and colleagues have built \"Sahabot,\" a small vehicle that uses polarisers and a CCD camera to store 360° images of its surroundings. It navigates by using polarised sunlight and comparing the current images of landmarks to the ones in its memory.」（利用蚂蚁靠偏振光定向以及储存并复用景观图像的能力，Wehner 与同事造出了 Sahabot，一种小型车辆，用偏振器和 CCD 相机存储周围环境的 360 度图像，并靠偏振阳光、把当前看到的地标图像与记忆中的图像作比较来导航）。选项 A 的表述是「a robot that makes use of light as well as stored images for navigational purposes」，其中 light 对应 polarised sunlight，stored images 对应 the ones in its memory（以及 store 360° images），for navigational purposes 对应 It navigates。三处一一吻合，可见 Wehner 对应的机器人是 Sahabot，答案 A。",
          "traps": [
            "为什么不是 D：选项 D 强调按有用程度对信息分类，那是 B 段 Zelinsky 机器人的做法；Sahabot 只是把地标图像存入记忆并直接比对，没有分类存储的描写。",
            "为什么不是 F：选项 F 说机器人超越了它所模仿的昆虫的能力，对应 D 段 Michelson 的 Entomopter（原文用 he has gone beyond nature）；Sahabot 依然是对蚂蚁偏光导航本领的忠实模仿，并未超越。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "Professor Robert Michelson",
          "translation": "罗伯特·米切尔森教授（对应选项 F：在某方面超越了作为原型的那种昆虫能力的机器人）。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Drawing inspiration from insect flight, he has gone beyond nature to devise a completely new concept for a flying machine."
          },
          "synonyms": [
            "「improved on the ability of the insect on which it is based」同义替换为原文的「he has gone beyond nature」（超出自然界已有的做法）",
            "「the insect on which it is based」对应原文的「insect flight」以及同段把它比作蜻蜓的说明「a sort of double-ended dragonfly」",
            "「a robot」对应原文命名的「Entomopter」，一种会飞的机器"
          ],
          "locatingTip": "定位：人名 Professor Robert Michelson 只在 D 段出现，答案区即为 D 段。确定答案技巧：D 段第 2 句是关键——「Drawing inspiration from insect flight, he has gone beyond nature to devise a completely new concept for a flying machine.」，其中 Drawing inspiration from insect flight 说明它源自昆虫原型，has gone beyond nature 说明它超越了自然，两者合起来正是选项 F「a robot that has improved on the ability of the insect on which it is based」。后文用「unusually high lift compared with a fixed-wing flyer」「fly slowly or hover」进一步说明这种超越带来的实际好处，可作为佐证。",
          "analysis": "D 段第 1 句交代 Michelson 的挑战：设计一种能在火星稀薄大气中飞行并悬停的机器人。第 2 句点明思路：「Drawing inspiration from insect flight, he has gone beyond nature to devise a completely new concept for a flying machine.」（从昆虫飞行中获得灵感，他超越自然，构想出一种全新的飞行器概念）。第 3、4 句说明这一设计的形态与优势：Entomopter 像一只双头蜻蜓、双翅往复拍动，扑翼设计带来的升力远超固定翼飞行器，因而能在火星稀薄的空气中慢速飞行或悬停，而固定翼飞行器必须以 400 公里以上的时速飞行且无法停下勘察。选项 F 说的是「该机器人在其模仿对象（昆虫）的能力基础上有所改进」，对应原文的 has gone beyond nature（超越自然），因此 Michelson 匹配 F。",
          "traps": [
            "为什么不是 C：选项 C 说机器人能在困难地面移动，这是 E 段六足与轮腿（whegs）机器人的特点；Michelson 的 Entomopter 是飞行器，原文完全在地面移动方面没有任何描写。",
            "为什么不是 G：选项 G 说机器人可以取代士兵参战，而原文只提到部分代表担心仿生机器人的早期应用可能用于军事（may be military），既没有说取代士兵，也没有把它与 Entomopter 联系起来。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "Roger Quinn and Professor Roy Ritzmann",
          "translation": "罗杰·奎因与罗伊·里茨曼教授（对应选项 C：能够在困难地面上移动的机器人）。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The team has already designed a series of robots that run on six legs or on whegs, enabling them to handle surprisingly rugged terrain."
          },
          "synonyms": [
            "「can move over difficult surfaces」同义替换为原文的「handle surprisingly rugged terrain」（应对异常崎岖的地形）",
            "「a robot」同义替换为原文的「a series of robots that run on six legs or on whegs」，并呼应前文的「a completely new all-terrain vehicle」",
            "「move」同义替换为原文的「run on six legs or on whegs」（用六条腿或轮腿奔跑）"
          ],
          "locatingTip": "定位：人名 Roger Quinn 与 Professor Roy Ritzmann 都只在 E 段出现，答案区为 E 段。确定答案技巧：把选项 C 的关键词 difficult surfaces 与 E 段反复出现的 terrain 类词对应起来。E 段先说蟑螂能「run very fast over rough terrain」，进而可能催生「a completely new all-terrain vehicle with six legs」「wheel-like legs called whegs」，末句则说团队已设计的机器人能「handle surprisingly rugged terrain」。rugged terrain 即困难地面，与 can move over difficult surfaces 同义，故选 C。注意 E 段主旨正是「适应复杂地形的运动能力」，与选项 C 唯一对应。",
          "analysis": "E 段专讲 Quinn 与 Ritzmann 以蟑螂为灵感的工作。第 2 句说蟑螂「run very fast over rough terrain」的能力或许会催生一种全新的全地形六足车，甚至带有轮状腿（whegs）。第 3 句说明关键机理：腿承担了大量思考工作（legs do a lot of the thinking）。第 4 句说明他们借此设计机械步行者与控制策略，使机器人能穿越复杂地形、绕开障碍安全抵达目标。末句是定位句：「The team has already designed a series of robots that run on six legs or on whegs, enabling them to handle surprisingly rugged terrain.」（该团队已经设计出一系列用六条腿或轮腿奔跑的机器人，使它们能够应对异常崎岖的地形）。rugged terrain（崎岖地形）与选项 C 的 difficult surfaces（困难地面）同义，six legs 与 whegs 是移动方式，故 Quinn 与 Ritzmann 对应 C。",
          "traps": [
            "为什么不是 E：选项 E（清洁表面、收集垃圾）对应的是 F 段 Dr Barbara Webb 预言的 society's cleaners and collectors，与 Quinn 团队在崎岖地形上移动的机器人无关。",
            "为什么不是 B：选项 B（有助于环境健康）对应 F 段 Sonja Kleinlogel 期望用于监测海洋环境健康的遥感器，不属于本组人名的研究成果。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
