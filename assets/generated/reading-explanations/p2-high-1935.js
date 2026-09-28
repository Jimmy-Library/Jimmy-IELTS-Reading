(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-1935", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-1935",
  "meta": {
    "examId": "p2-high-1935",
    "title": "Photovoltaics 光伏发电",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–19 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 19
      },
      "items": [
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "examples of countries where electricity use is greater during the day than at night",
          "translation": "使用电力白天多于夜间的国家的例子。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "During the day, when the home may not be using much electricity, excess power from the solar array is fed back to the grid, to factories and offices that need daytime power. At night, power flows the opposite way."
          },
          "synonyms": [
            "“examples of countries” 同义替换为原文的 “This occurs in places like California in the US and Japan”，原文用 California、the US、Japan 这些具体地点来举例",
            "“electricity use is greater during the day than at night” 同义替换为原文的 “excess power from the solar array is fed back to the grid, to factories and offices that need daytime power. At night, power flows the opposite way.”，白天电力被送往“需要白天用电”的用户，夜间电力反向流动",
            "“during the day” 与原文 “During the day” 原词复现；“at night” 与原文 “At night” 原词复现，构成一对时间对照词"
          ],
          "locatingTip": "定位：题干最强的信号是 daytime 与 night 这对时间对照，扫读时专门找 during the day / At night 同时出现的段落，全文只有第 2 段（B 段）把这两个时间点并排写出。确定答案技巧：第 2 段先说白天住宅用电不多，多余的电被送回电网、供给“需要白天用电的工厂和办公室（factories and offices that need daytime power）”，再说夜里电力流向相反；随后又用 “This occurs in places like California in the US and Japan” 把这种“白天用电多、夜间用电少”的情形落到具体国家和地区上，与题干 examples of countries 完全吻合，故确定答案为 B。",
          "analysis": "第 2 段（B 段）是全文唯一一段把白天与夜间的用电差异讲清楚的段落。段落中段写道：“During the day, when the home may not be using much electricity, excess power from the solar array is fed back to the grid, to factories and offices that need daytime power. At night, power flows the opposite way.”（白天家里用电可能不多，太阳能阵列产生的多余电力被送回电网，供给需要白天用电的工厂和办公室；到了夜里，电力则反向流动）。这句话把一天的用电节奏交代得很明白：白天是工厂、办公室的用电高峰（need daytime power），住宅自身用电反而少，夜里则由电网向住宅送电，即白天用电量大于夜间。题干要的是“白天用电多于夜间的国家的例子”，原文紧接着给出答案：“This occurs in places like California in the US and Japan, where air-conditioning loads for offices and factories are large but heating loads for the home are small.”（这种情况出现在美国加利福尼亚和日本等地，那里办公室和工厂的空调负荷很大，而住宅的供暖负荷很小）。places like California in the US and Japan 正是题干 countries 的例证，air-conditioning loads for offices and factories are large 也再次说明白天（工作时间）用电量更大。据此可确定 answer 为 B。注意本题的落点不在某个国家名上，而在“白天用电多于夜间”这一关系上，答题时要看整句的时间对比，而不是只抓到 Japan 就草率落笔。",
          "traps": [
            "为什么不选 D 段：D 段（第 4 段）讲的是日本在六甲岛（Rokko Island）设立的住宅测试站、18 座“假人”住宅以及测试条件，全段谈的是实验装置与技术探索，没有任何关于白天与夜间用电量对比的内容。",
            "为什么不选 F 段：F 段（第 6 段）讲日本“百万屋顶计划”的目标与 1994 年的起步（539 套系统、50% 补贴），虽然同为日本，但落点是计划的规模与政府补贴，与用电的时间分布无关。"
          ]
        },
        {
          "questionId": "q15",
          "questionNumber": 15,
          "stem": "a detailed description of an experiment that led to photovoltaics being promoted throughout the country",
          "translation": "对一项实验的详细描述，该实验促使光伏发电在全国推广。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "This test station has allowed the technical issues involved in using photovoltaics within the electricity network to be explored in a systematic way, under well-controlled test conditions. With no insurmountable problems identified, the Japanese have used the experience gained from this station to begin their own massive residential photovoltaics campaign."
          },
          "synonyms": [
            "“an experiment” 同义替换为原文的 “test station”（六甲岛住宅测试站）与 “well-controlled test conditions”（受严格控制的测试条件）",
            "“a detailed description of an experiment” 对应原文对实验的细描：“This installation consists of 18 'dummy' house, each equipped with its own 2-5 kilowatt photovoltaic system (about 20-50 square metres for each system).”",
            "“led to photovoltaics being promoted throughout the country” 同义替换为原文的 “used the experience gained from this station to begin their own massive residential photovoltaics campaign”，即“以该站所得经验为起点，在全国推开大规模住宅光伏推广”",
            "“with no insurmountable problems identified” 说明实验结论是可行的，这正是“得以推广”的前提"
          ],
          "locatingTip": "定位：题干的落点是“实验”与“全国推广”的因果关系。回原文先找与实验有关的词，如 experiment、test station、dummy houses、well-controlled test conditions，集中出现在第 4 段（D 段）；再确认该段末尾是否出现“因这项实验而走向大规模推广”的表述。确定答案技巧：这类题要在段落里找准因果链——实验（test station、测试条件）加结论（no insurmountable problems identified）加结果（begin their own massive residential photovoltaics campaign）。原文用 the Japanese（一个国家的人）与 massive residential 对应题干的 throughout the country，因果关系完整，故答案为 D。",
          "analysis": "第 4 段（D 段）整段就是对一项实验的详细描述：首句交代美国项目退出后日本的 Sunshine Project 走到前台；“A large residential test station was installed on Rokko Island beginning in 1986.”（1986 年起在六甲岛建起一座大型住宅测试站）；接着给出细节：“This installation consists of 18 'dummy' house, each equipped with its own 2-5 kilowatt photovoltaic system (about 20-50 square metres for each system). For the other systems, electronics simulate these household loads.”（该装置由 18 座“假人”住宅组成，每座都配有自己的 2 至 5 千瓦光伏系统，约合每套 20–50 平方米；其余系统则用电子装置模拟这些住户负荷）。这些正是题干所要求的 detailed description。段末两句给出实验的意义与结果：“This test station has allowed the technical issues involved in using photovoltaics within the electricity network to be explored in a systematic way, under well-controlled test conditions. With no insurmountable problems identified, the Japanese have used the experience gained from this station to begin their own massive residential photovoltaics campaign.”（该测试站使在电网中使用光伏所涉技术问题得以在受严格控制的条件下系统研究；由于没有发现无法克服的问题，日本人便用从该站获得的经验，开始了他们自己的大规模住宅光伏推广运动）。实验（test station 加受控测试）引出结论（没有不可克服的问题），再引出全国性推广（the Japanese、massive campaign），与题干 experiment、led to、throughout the country 三处一一对应，所以答案选 D。注意不要把答案给到 C 段：美国 1970 年代的 experiment stations 也是实验，但该实验的结局是被政府叫停（halted），并未带来全国推广，属于典型干扰。",
          "traps": [
            "为什么不选 C 段：C 段（第 3 段）确实写了美国 1970 年代在各地设立 “residential experiment stations”、用 “dummy houses” 做实验，看似吻合；但该段末句明确说 “A change in US government priorities in the early 1980s halted this program.”，即实验被中止，没有任何“因此在全国推广”的结果，缺少题干的因果后半段。",
            "为什么不选 F 段：F 段（第 6 段）写的是日本“百万屋顶计划”的目标与 1994 年的起步，属于推广计划本身，段中虽提到 Rokko Island test site，但只是把它当作计划的成因一笔带过，没有对实验本身的详细描述。"
          ]
        },
        {
          "questionId": "q16",
          "questionNumber": 16,
          "stem": "the negative effects of using conventional means of generating electricity",
          "translation": "使用传统发电方式带来的负面影响。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "The use of fossil fuels to generate electricity is not only costly in financial terms, but also in terms of environmental damage. Gases produced by the burning of fossil fuels in the production of electricity are a major contributor to the greenhouse effect."
          },
          "synonyms": [
            "“conventional means of generating electricity” 同义替换为原文的 “The use of fossil fuels to generate electricity”，化石燃料发电即传统发电方式",
            "“negative effects” 同义替换为原文的 “costly in financial terms” 与 “in terms of environmental damage”，即经济代价与环境破坏两重负面影响",
            "“negative effects” 还对应原文的 “a major contributor to the greenhouse effect”（温室效应的主要来源之一）"
          ],
          "locatingTip": "定位：题干的关键词是 conventional means of generating electricity 与 negative effects，对应的原文用语是 fossil fuels 与 environmental damage、greenhouse effect。全文谈化石燃料发电危害的只有第 8 段（H 段），其中 fossil fuels 连续出现两次，扫到即可锁定。确定答案技巧：段落用 not only … but also … 的并列结构列出化石燃料发电的两项坏处（经济上昂贵、环境上破坏），又进一步点明燃烧化石燃料产生的气体是温室效应的主要成因，这些都是明确的“负面影响”，因此答案是 H。",
          "analysis": "第 8 段（H 段）的主题就是传统发电方式的代价。段落写道：“This is good news, not only for the photovoltaic industry, but for everyone concerned with the environment. The use of fossil fuels to generate electricity is not only costly in financial terms, but also in terms of environmental damage. Gases produced by the burning of fossil fuels in the production of electricity are a major contributor to the greenhouse effect.”（这不仅是光伏产业的好消息，也是所有关心环境的人的好消息。用化石燃料发电不仅在金钱上代价高昂，在环境破坏方面同样如此。发电时燃烧化石燃料所产生的气体是造成温室效应的主要原因之一）。题干中的 conventional means of generating electricity 指的就是 the use of fossil fuels to generate electricity；negative effects 则由两处措辞共同支撑：一是 costly in financial terms 与 in terms of environmental damage 的并列，二是紧随其后的 a major contributor to the greenhouse effect（温室效应的主要成因之一）。原文随后还说许多政府开始提出严格的温室气体排放目标（stringent targets on the amount of greenhouse gas emissions permitted），进一步印证前文所指的是负面的环境后果。整段信息与题干完全对应，故选 H，段落号是第 8 段。本题容易误判到 I 段：I 段虽然也提到 reduce fossil fuel emissions，但重点放在未来的建筑规范与节约措施上，属于解决对策而非“负面影响的陈述”。",
          "traps": [
            "为什么不选 I 段：I 段（第 9 段）谈的是未来政府可能出台建筑规范、把安装光伏列为条件等应对措施（reduce fossil fuel emissions 只是这些举措想要达到的目的之一），落点在解决办法，而不是陈述传统发电的负面影响。",
            "为什么不选 A 段：A 段（第 1 段）只是介绍住宅用电过去没有选择、如今可以选择太阳能，并解释了什么是 photovoltaics，全段没有涉及化石燃料发电的危害。"
          ]
        },
        {
          "questionId": "q17",
          "questionNumber": 17,
          "stem": "an explanation of the photovoltaic system",
          "translation": "对光伏系统的说明/解释。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The photovoltaic-powered home remains connected to the power lines, but no storage is required on-site, only a box of electronics (the inverter) to interface between the photovoltaics and the grid network. Figure 1 illustrates the system."
          },
          "synonyms": [
            "“the photovoltaic system” 同义替换为原文的 “the system”（该段用 “Figure 1 illustrates the system.” 直接点明在说明这套系统）",
            "“an explanation” 对应原文对系统构成的交代：“remains connected to the power lines”“no storage is required on-site”“only a box of electronics (the inverter) to interface between the photovoltaics and the grid network”，逐项说明系统如何运作",
            "“the photovoltaic system” 还对应原文的 “The photovoltaic-powered home”，指同一套光伏供电系统"
          ],
          "locatingTip": "定位：题干问的是对光伏系统的“说明”，这类题要到原文中找系统构成与运作原理被逐项解释的段落，最具标识性的词是 the system 与 Figure 1。第 2 段（B 段）先交代光伏住宅仍与电网相连、现场不需要储能、只需要一个电子盒（逆变器）来衔接光伏板与电网，紧接着写 “Figure 1 illustrates the system.”，前后都是对系统的结构性说明。确定答案技巧：判断依据是“该段是否在解释系统如何构成与工作”，B 段从部件（power lines、inverter、grid network）到作用（白天送电上网、夜间反向送电、电网充当储能）全在讲系统本身，故选 B。",
          "analysis": "第 2 段（B 段）承担了“解释光伏系统”的功能。段首两句是定位句：“The photovoltaic-powered home remains connected to the power lines, but no storage is required on-site, only a box of electronics (the inverter) to interface between the photovoltaics and the grid network. Figure 1 illustrates the system.”（使用光伏的住宅仍与电力线相连，但现场不需要储能，只需一个电子盒即逆变器，用来衔接光伏板与电网系统。图 1 展示了该系统的样子）。这里交代了系统的三个构件及其关系：户内光伏阵列、作为接口的逆变器、外部电网；Figure 1 illustrates the system 更是直接点明本段在“说明这套系统”。紧接的同段内容继续解释系统如何运行：“During the day … excess power from the solar array is fed back to the grid … At night, power flows the opposite way. The grid network effectively provides storage.”（白天多余电力送回电网，夜间电力反向流动，电网实际上起到了储能作用）。这些内容与题干 an explanation of the photovoltaic system 完全吻合，故答案为 B。注意与第 1 段区分：A 段只是下定义式的介绍（photovoltaics 是装在屋顶的简单装置，solar energy 是阳光转换为能量），讲的是“什么是光伏”，真正对整套系统做结构性说明的是 B 段。",
          "traps": [
            "为什么不选 A 段：A 段（第 1 段）只给出术语定义——solar energy 是把阳光转换成能量，photovoltaics 是装在屋顶上的简单装置，属于概念介绍，没有说明系统由哪些部件构成、如何与电网互动。",
            "为什么不选 D 段：D 段（第 4 段）描述的是六甲岛测试站的实验装置（18 座住宅、每套 2 至 5 千瓦系统等），属于某一具体实验的细描，而不是对光伏系统一般原理的说明。"
          ]
        },
        {
          "questionId": "q18",
          "questionNumber": 18,
          "stem": "the long-term benefits of using photovoltaics",
          "translation": "使用光伏发电带来的长期好处。",
          "answer": "I",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "Although there is an initial cost in attaching the system to the rooftop, the householder's outlay is soon compensated with the savings on energy bills. In addition, everyone living on the planet stands to gain from the more benign environmental impact."
          },
          "synonyms": [
            "“long-term benefits” 同义替换为原文的 “the householder's outlay is soon compensated with the savings on energy bills”，前期投入很快由日后电费节省补偿回来，属于长期收益",
            "“the long-term benefits” 还对应原文的 “everyone living on the planet stands to gain from the more benign environmental impact”，即对所有人的长远环境收益",
            "“Although there is an initial cost …” 中的 although 把“短期成本”与“长期获益”对举，正是题干 long-term 的落点",
            "“everyone would benefit” 与原文 “If this were to happen, everyone would benefit.” 直接对应"
          ],
          "locatingTip": "定位：题干的关键是 long-term benefits，回原文找把“先花钱、后受益”或“对未来有利”写出来的段落。第 9 段（I 段）末尾出现 although 让步结构：先承认安装有初期成本（initial cost），再说很快被电费节省补回，等于把短期成本与长期收益并置。确定答案技巧：只要抓住表示“长期回报”的措辞（soon compensated with the savings on energy bills、stands to gain、more benign environmental impact）即可锁定 I 段；另可注意同段出现的 everyone would benefit 与题干 benefits 呼应。",
          "analysis": "第 9 段（I 段）在结尾处集中谈光伏的长期收益。定位句写道：“Although there is an initial cost in attaching the system to the rooftop, the householder's outlay is soon compensated with the savings on energy bills. In addition, everyone living on the planet stands to gain from the more benign environmental impact.”（虽然把系统装到屋顶上存在一笔初期成本，但住户的支出很快就会被电费上的节省所补偿；此外，生活在这个星球上的每个人都将从更温和的环境影响中获益）。这里有两层收益：对住户是很快由电费节省补回前期投入、长期省电费；对全社会是环境损害更小。句中 although 让步句先说短期支出，主句再说“很快被补偿”，In addition 又补上更广泛的收益，恰好对应题干的 long-term benefits。整个 I 段还提到未来政府可能出台建筑规范、把安装光伏列为条件，并总结 “If this were to happen, everyone would benefit.”，与题干的 benefits 直接照应，因此答案是 I。作答技巧：题干出现 long-term 时，要在原文中寻找“初期成本与日后回报”的对举，或表示未来持续受益的动词（gain、benefit、compensate），而不是只看到一处 cost 就以为是消极内容。",
          "traps": [
            "为什么不选 H 段：H 段（第 8 段）虽然也说光伏的好消息（This is good news），但其主体内容是化石燃料发电的代价与温室气体排放目标，属于环境问题的严重性，而长期收益在 I 段才具体展开。",
            "为什么不选 E 段：E 段（第 5 段）讲德国 1990 年的“1000 屋顶计划”以及政府补贴占系统成本约 70%，落点在补贴与计划受欢迎程度，并未讨论光伏本身带来的长期回报。"
          ]
        },
        {
          "questionId": "q19",
          "questionNumber": 19,
          "stem": "a reference to wealthy countries being prepared to help less wealthy countries have access to photovoltaics",
          "translation": "提及富裕国家准备帮助较不富裕国家获得光伏发电。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The European Commission has called for one million solar residential systems before the year 2010, with 500,000 in Europe and 500,000 in the developing world, to be subsidised by the Commission."
          },
          "synonyms": [
            "“wealthy countries” 对应原文的 “The European Commission”（欧盟委员会，代表欧洲富裕国家）与 “in Europe”",
            "“less wealthy countries” 同义替换为原文的 “the developing world”（发展中世界）",
            "“being prepared to help … have access to photovoltaics” 同义替换为原文的 “to be subsidised by the Commission”，即由委员会出资补贴，帮助其安装太阳能住宅系统",
            "“photovoltaics” 对应原文的 “solar residential systems”（住宅太阳能系统）"
          ],
          "locatingTip": "定位：题干的核心是“富国帮助穷国用上光伏”，原文的关键词是 subsidised（补贴）与 the developing world（发展中世界）。全文出现向发展中国家提供补贴的只有第 7 段（G 段）：欧盟委员会提出到 2010 年前建成一百万套住宅太阳能系统，其中 50 万在欧洲、50 万在发展中世界，由委员会补贴。确定答案技巧：先靠定专有名词 The European Commission 找到 G 段，再核对两个数字 500,000 与 the developing world，就能确认“欧洲出钱、发展中世界受益”这一关系与题干完全对应，故选 G。",
          "analysis": "第 7 段（G 段）写道：“The Japanese initiative in embracing residential photovoltaics on a large scale prompted responses in both Europe and the US. The European Commission has called for one million solar residential systems before the year 2010, with 500,000 in Europe and 500,000 in the developing world, to be subsidised by the Commission.”（日本大规模采用住宅光伏的举措在欧洲和美国都引发了响应。欧盟委员会呼吁在 2010 年之前建成一百万套住宅太阳能系统，其中 50 万套在欧洲、50 万套在发展中世界，由委员会提供补贴）。句中 subsidised by the Commission 明确表示由欧盟委员会出钱补贴，with 500,000 in the developing world 表明这项资金安排覆盖发展中世界，这就是“富裕国家（欧洲）出资帮助较不富裕国家（发展中世界）获得光伏系统”的直接依据。题干中的 have access to photovoltaics 对应原文的 solar residential systems 加补贴安排，being prepared to help 对应 has called for … to be subsidised。因此答案是 G（第 7 段）。本题的干扰点在于 E 段：德国 1990 年计划也有大额政府补贴（accounting in most cases for 70 per cent of the total system costs），但受补贴者是本国的 2000 户私人住宅，不涉及帮助其他国家，所以不能选 E。",
          "traps": [
            "为什么不选 E 段：E 段（第 5 段）的补贴（subsidies，约占系统成本 70%）由德国联邦与地方政府提供，受益对象是德国境内 1000 户、后来扩展到 2000 户的私人住宅，属于对内补贴，没有“帮助较不富裕国家”的内容。",
            "为什么不选 F 段：F 段（第 6 段）讲日本计划的政府补贴为 50%（with a government subsidy of 50 per cent），同样只是本国政策，未涉及向发展中国家提供帮助。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 20–26 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 20,
        "end": 26
      },
      "items": [
        {
          "questionId": "q20",
          "questionNumber": 20,
          "stem": "Photovoltaics are used to store electricity.",
          "translation": "光伏装置被用来储存电力。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The photovoltaic-powered home remains connected to the power lines, but no storage is required on-site, only a box of electronics (the inverter) to interface between the photovoltaics and the grid network."
          },
          "synonyms": [
            "“are used to store electricity” 与原文的 “no storage is required on-site”（现场不需要储能）方向相反，原文直接否定了“用光伏储电”这一用途",
            "原文把储能功能明确交给电网：“The grid network effectively provides storage.”，储电的是电网，不是光伏装置",
            "“Photovoltaics” 在原文中的功能是转换能量（第 1 段：“Solar energy, the conversion of sunlight into energy, is made possible through the use of 'photovoltaics'”），而不是储存"
          ],
          "locatingTip": "定位：题干的核心词是 store electricity，回原文搜索 storage / store 一类词，全文只在第 2 段（B 段）出现两处：no storage is required on-site 与 The grid network effectively provides storage。确定答案技巧：先看第一处，作者说光伏住宅现场“不需要储能”，只配一个逆变器把光伏与电网衔接起来；接着又说“电网实际上提供了储能”。原文既没有说光伏装置用于储电，还把储能功能归给电网，与题干正相矛盾，因此判 FALSE。切记：这类题的判分点是“谁在储电”，而不是“有没有提到 storage”。",
          "analysis": "第 2 段（B 段）开头：“The photovoltaic-powered home remains connected to the power lines, but no storage is required on-site, only a box of electronics (the inverter) to interface between the photovoltaics and the grid network.”（使用光伏的住宅仍与电力线相连，但现场无需储能，只需一个电子盒即逆变器，用来衔接光伏板与电网系统）。句子的逻辑很清楚：光伏住宅之所以不需要储能，是因为它仍然连着电网；光伏一侧只需要一个逆变器作接口。随后同段又说 “At night, power flows the opposite way. The grid network effectively provides storage.”（夜里电力反向流动，电网实际上提供了储能）。可见在作者的表述里，储能这一功能由 the grid network 承担，photovoltaics 扮演的是把阳光转换为电能并送入系统的角色（第 1 段已说明 solar energy 是 conversion of sunlight into energy，靠 photovoltaics 实现）。题干断言 “Photovoltaics are used to store electricity”，与原文两句相关表述都相反：既是“现场无需储能”，又是“储电由电网提供”，因此答案是 FALSE。做题提醒：遇到 A 用于做 B 的句式，要到原文核对 A 的实际功能动词，本题原文对 photovoltaics 的功能表述是 interface（衔接）和 conversion（转换），并非 storage。",
          "traps": [
            "为什么不是 TRUE：原文明确说现场 no storage is required on-site，并把储电功能归给电网（The grid network effectively provides storage），同时把光伏装置的用途限定为能量转换与通过逆变器接入电网，没有任何一处说光伏用于储电，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：如果原文对储能只字未提，才考虑 NOT GIVEN；但原文两次谈到 storage（现场无需储能、电网提供储能），信息是明确给出且与题干相反的，所以属于 FALSE。"
          ]
        },
        {
          "questionId": "q21",
          "questionNumber": 21,
          "stem": "Since the 1970s, the US government has provided continuous support for the use of photovoltaics on homes.",
          "translation": "自 20 世纪 70 年代以来，美国政府一直持续支持在住宅上使用光伏发电。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "A change in US government priorities in the early 1980s halted this program."
          },
          "synonyms": [
            "“continuous support” 与原文的 “halted this program”（终止了该计划）直接冲突：支持并非持续，中途被叫停",
            "“Since the 1970s” 对应原文的 “began in the US during the 1970s”，时间起点一致，但原文随后交代了中断",
            "“the US government” 与原文原词复现：“US government priorities”"
          ],
          "locatingTip": "定位：题干专有名词 the US government 与时间 the 1970s 都是好定位词，回原文搜索 1970s，直接落在第 3 段（C 段）首句。确定答案技巧：本题的判分点是 continuous（持续不断）。原文说美国住宅光伏的系统性探索始于 1970 年代，但段末一句写 “A change in US government priorities in the early 1980s halted this program.”，即 1980 年代初政府优先事项变化，该计划被终止。有了明确的中断，就不存在 continuous support，判 FALSE。",
          "analysis": "第 3 段（C 段）讲的是美国最早的系统性探索：“The first systematic exploration of the use of photovoltaics on homes began in the US during the 1970s, a well-conceived program started with the siting of a number of 'residential experiment stations' at selected locations around the country, representing different climatic zones.”（对住宅光伏使用的首次系统性探索于 1970 年代在美国开始，这是一个构思良好的计划，首先在全国选定的地点设立若干“住宅实验站”，以代表不同的气候带）。本段最后一句是定位句：“A change in US government priorities in the early 1980s halted this program.”（1980 年代初美国政府优先事项的变化终止了该计划）。把两句合起来看：政府支持确实从 1970 年代开始，但在 1980 年代初就中断了，此后 D 段还明确写 “with the US effort dropping away”（美国的努力逐渐消失），日本项目才接棒。题干说 “has provided continuous support”（一直持续支持），其中 continuous 与 halted、dropping away 直接矛盾，属于事实冲突，故答案为 FALSE。这类题的关键是把题干里的程度副词（continuous、always、only、never）单独拎出来核对，本题正是副词 continuous 成了失分点。",
          "traps": [
            "为什么不是 TRUE：原文承认支持起于 1970 年代，但明确写 1980 年代初政府优先事项变化致使计划被终止（halted this program），此后美国的努力也退场（with the US effort dropping away），支持并不连续，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对支持的中断交代得非常具体（时间、原因、结果俱全），不是信息缺失，而是与题干的 continuous 直接相反，所以是 FALSE。"
          ]
        },
        {
          "questionId": "q22",
          "questionNumber": 22,
          "stem": "The solar-powered houses on Rokko Island are uninhabited.",
          "translation": "六甲岛（Rokko Island）上的太阳能住宅无人居住。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "This installation consists of 18 'dummy' house, each equipped with its own 2-5 kilowatt photovoltaic system (about 20-50 square metres for each system). For the other systems, electronics simulate these household loads."
          },
          "synonyms": [
            "“uninhabited”（无人居住） 同义替换为原文的 “'dummy' house”（假人住宅/样板住宅），dummy 一词即表明这些房子不是真正住人的住宅",
            "“the solar-powered houses” 同义替换为原文的 “each equipped with its own 2-5 kilowatt photovoltaic system”，每座都装有独立的光伏系统",
            "“are uninhabited” 还由原文的 “electronics simulate these household loads”（用电子装置模拟住户用电负荷）得到印证：住户用电需要模拟，说明并没有真实住户"
          ],
          "locatingTip": "定位：题干的两个定位词是 Rokko Island 与 houses，专有名词 Rokko Island 在第 4 段（D 段）出现时正是介绍岛上的测试站住宅（第 6 段虽也提到 Rokko Island 的测试站，但只是追溯计划经验的来源），一步到位。确定答案技巧：本题的判分点在 uninhabited（无人居住）。原文称这批住宅为 “18 'dummy' house”，dummy 是“假的、用于试验的”意思，并且说其他系统的住户负荷要由 “electronics simulate”（用电子装置模拟），如果真有人居住就无需模拟。两点合起来支持“无人居住”，故选 TRUE。",
          "analysis": "第 4 段（D 段）介绍六甲岛测试站的构成：“A large residential test station was installed on Rokko Island beginning in 1986. This installation consists of 18 'dummy' house, each equipped with its own 2-5 kilowatt photovoltaic system (about 20-50 square metres for each system). For the other systems, electronics simulate these household loads.”（1986 年起在六甲岛建起一座大型住宅测试站。该装置由 18 座“假人”住宅组成，每座都配有自己的 2 至 5 千瓦光伏系统，约合每套 20–50 平方米；其余系统则用电子装置模拟住户用电负荷）。这里的 'dummy' house 与电子模拟 household loads 都指向同一件事：这些“住宅”是实验用的人造住户，并非真正有人居住的房屋。题干用 uninhabited 概括这一性质，与 dummy（假的、试验用的）以及 loads 需被 simulate 的说法一致，因此判 TRUE。需要注意的是，原文有 “For the other systems”，说明其余系统的住户用电负荷同样是由电子设备模拟出来的，而非真实住户所需；作者已用 dummy 一词为本段所有住宅定性；本题只问“六甲岛的太阳能住宅是否无人居住”，仅凭 dummy house 与 simulate 两点即可得出 TRUE，不需额外推理。",
          "traps": [
            "为什么不是 FALSE：原文没有任何文字说这些住宅有人居住；相反，dummy 一词与 electronics simulate these household loads 都表明它们是为测试而设、由电子装置模拟住户用电的样板房，与题干说法一致，因此不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文虽然没有直接用 uninhabited 这个词，但 'dummy' house 与 electronics simulate these household loads 已经明确给出“无人居住”的证据，属于信息充分且同向，故判 TRUE 而非 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q23",
          "questionNumber": 23,
          "stem": "In 1994, the Japanese government was providing half the money required for installing photovoltaics on homes.",
          "translation": "1994 年，日本政府承担了住宅安装光伏所需费用的一半。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "The program made a modest start in 1994, when 539 systems were installed with a government subsidy of 50 per cent."
          },
          "synonyms": [
            "“In 1994” 与原文 “in 1994” 原词复现",
            "“was providing half the money required” 同义替换为原文的 “a government subsidy of 50 per cent”，50 per cent 即 a half",
            "“the Japanese government” 对应原文的 “a government subsidy”，其前文已点明这是日本的项目（Japan's 'one million roof program'）",
            "“installing photovoltaics on homes” 同义替换为原文的 “539 systems were installed”，即系统被安装到住宅上"
          ],
          "locatingTip": "定位：题型是一道时间加数字的细节题，题干给出 1994 这个年份，回原文搜索 1994，只在第 6 段（F 段）出现一次：The program made a modest start in 1994。确定答案技巧：找到年份后核对同一句中的资金信息——a government subsidy of 50 per cent（政府补贴 50%），正好等于题干所说的 half the money。同时确认项目归属：本段首句已说明这是 Japan's 'one million roof program'，所以政府即日本政府。三个信息点（年份、比例、主体）全部吻合，判 TRUE。",
          "analysis": "第 6 段（F 段）写道：“Japan's 'one million roof program' was prompted by the experience gained in the Rokko Island test site and success of the German 1000 roof program. The initially quoted aims of the Japanese New Energy Development Organisation were to have 70,000 homes equipped with photovoltaics by the year 2000, on the way to one million by 2020. The program made a modest start in 1994, when 539 systems were installed with a government subsidy of 50 per cent.”（日本的“百万屋顶计划”受六甲岛测试站的经验与德国 1000 屋顶计划的成功所推动。日本新能源开发机构最初公布的目标是到 2000 年让 70,000 户住上装有光伏的房子，并朝 2020 年达到一百万户前进。该计划在 1994 年小规模起步，当年安装了 539 套系统，政府补贴 50%）。题干的三项信息与原文一一对应：年份 1994 相同；in installing photovoltaics on homes 对应 539 systems were installed（这些系统就装在本计划的住宅上）；half the money required 对应 a government subsidy of 50 per cent。由于该计划是日本的国家计划，subsidy 的出资方就是日本政府，因此题干表述成立，答案为 TRUE。本题属于“同义数字转换”型：50 per cent 与 half、subsidy 与 providing the money 是常见替换，见到百分数要立刻在心里换算成分数，避免因措辞不同而误判。",
          "traps": [
            "为什么不是 FALSE：原文给出 1994 年与 government subsidy of 50 per cent 两项硬信息，与题干的 1994 和 half the money required 完全一致，没有任何矛盾点。",
            "为什么不是 NOT GIVEN：原文对补贴比例有明确数字（50 per cent），且明确交代项目为日本国家计划，资金来源就是政府补贴，信息完整，不属于未提及。"
          ]
        },
        {
          "questionId": "q24",
          "questionNumber": 24,
          "stem": "Germany, Italy, the Netherlands and Australia all have strict goals with regard to greenhouse gas emissions.",
          "translation": "德国、意大利、荷兰和澳大利亚都在温室气体排放方面制定了严格的目标。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Since then, several other countries including Germany, Italy, the Netherlands and Australia, have announced their own targets for residential photovoltaics."
          },
          "synonyms": [
            "四个国名 “Germany, Italy, the Netherlands and Australia” 在原文中逐字复现",
            "“goals” 同义替换为原文的 “targets”，但原文的 targets 修饰的是 “residential photovoltaics”（住宅光伏），不是温室气体排放",
            "“strict” 在原文中找不到对应评价：原文只说 announced（宣布了目标），既没有说明目标是否严格，也没有把目标与温室气体排放挂钩"
          ],
          "locatingTip": "定位：题干把四个国名一次性列举出来，是极强的定位信号，原文中也正是这四个国家连在一起出现在第 7 段（G 段）末句。确定答案技巧：找到句子后要逐项核对题干的每个限定成分——国家名对上了，targets 也对上了，但 targets 后面的限定语是 for residential photovoltaics（住宅光伏），而题干说的是 greenhouse gas emissions（温室气体排放）；此外 strict 这个评价词原文完全没有。题干把“光伏装机目标”偷换成“温室气体排放目标”，并把未提及的“严格”当作既有事实，属于信息缺失，因此判 NOT GIVEN。注意第 8 段确实提到温室气体排放目标，但主语是 many governments（许多政府），并未点明这四个国家，不能跨段拼接。",
          "analysis": "第 7 段（G 段）末句：“Since then, several other countries including Germany, Italy, the Netherlands and Australia, have announced their own targets for residential photovoltaics.”（自那以后，包括德国、意大利、荷兰和澳大利亚在内的另外几个国家也宣布了各自的住宅光伏目标）。原文对这四国的交代只有一点：它们宣布了住宅光伏方面的目标。题干却改成了“都在温室气体排放方面有严格目标”，出现了两处超出原文的改动：一是目标的领域由 residential photovoltaics 换成 greenhouse gas emissions；二是加了 strict 这一定性评价。虽然第 8 段（H 段）说许多政府正在提出严格的温室气体排放目标（many governments are now proposing stringent targets on the amount of greenhouse gas emissions permitted），但该句的主语是泛指的 many governments，并没有指明包括这四国；原文也确实没有说明这些国家的光伏目标同时属于温室气体排放目标，也无法推断其严格程度。按判断题规则，原文未提供的信息判 NOT GIVEN，因此答案是 NOT GIVEN。做题提示：列举型题干（多个国家、多个术语并列）最容易做“话题偷换”，核对时一定要把 targets 后面的限定语一并比出来。",
          "traps": [
            "为什么不是 TRUE：原文只说这四国宣布了“住宅光伏”目标，题干却把它们说成“温室气体排放”目标，还加了 strict 的评价；两者话题不同，且“严格”在原文没有依据，无法判为一致。",
            "为什么不是 FALSE：原文并没有否认这些国家有温室气体排放目标，也没有说它们的目标不严格，只是没有就这一点提供信息，因此不属于原文与题干相矛盾的情况。"
          ]
        },
        {
          "questionId": "q25",
          "questionNumber": 25,
          "stem": "Residential electricity use is the major source of greenhouse gas emissions.",
          "translation": "住宅用电是温室气体排放的主要来源。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "These targets mean that all sources of greenhouse gas emissions, including residential electricity use, will receive closer attention in the future."
          },
          "synonyms": [
            "“Residential electricity use” 在原文中逐字复现：“including residential electricity use”",
            "“the major source” 与原文的 “a major contributor” 看似接近，但原文说的是 “Gases produced by the burning of fossil fuels in the production of electricity are a major contributor to the greenhouse effect.”，其主语是发电时燃烧化石燃料所生的气体，不是住宅用电",
            "“all sources … including residential electricity use” 表明住宅用电只是众多排放源之一，原文并未把它列为最主要的那一个"
          ],
          "locatingTip": "定位：题干关键词 residential electricity use 是极佳的低频短语，全文只出现在第 8 段（H 段）末句。确定答案技巧：先弄清原文那句的主语结构——all sources of greenhouse gas emissions, including residential electricity use，意思是“包括住宅用电在内的所有排放源都会被更密切关注”，住宅用电是被 include 进去的一个，属于众多来源之一；而 the major source 这一“最重要来源”的定位，原文给了发电燃烧化石燃料所生的气体（a major contributor to the greenhouse effect），且措辞是 a major contributor 而非 the，与题干的 the major source 并不等同。原文既没有说住宅用电是最大来源，也没有做这类排序，因此判 NOT GIVEN。",
          "analysis": "第 8 段（H 段）有两处涉及温室气体与用电：一处是 “Gases produced by the burning of fossil fuels in the production of electricity are a major contributor to the greenhouse effect.”（发电时燃烧化石燃料所产生的气体是导致温室效应的主要来源之一）；另一处是定位句 “These targets mean that all sources of greenhouse gas emissions, including residential electricity use, will receive closer attention in the future.”（这些目标意味着包括住宅用电在内的所有温室气体排放源，今后都会受到更密切的关注）。把两句合起来看，原文的表述层级很清楚：化石燃料发电产生的气体是 a major contributor（主要来源之一，注意是不定冠词 a，表示“其中之一”），住宅用电则被列入 all sources 的清单，与其它排放源并列。题干却断言住宅用电是“the major source（那个最主要的来源）”，把并列列举中的一项抬升为排序第一；原文对此既无数据也无比较，属于典型的信息缺失，故判 NOT GIVEN。另一处细节也值得注意：原文的发言对象是 greenhouse effect（温室效应），题干写成 greenhouse gas emissions（温室气体排放），虽然两者关系紧密，但原文并未讨论各排放源之间的占比大小。做题时看到 the major / the most important 这类最高级判断，就应回到原文确认是否真有多寡比较，本题正是缺失了这层比较。",
          "traps": [
            "为什么不是 TRUE：原文把“主要来源”的描述给了发电燃烧化石燃料产生的气体（a major contributor），并把住宅用电列为 all sources 中的一项 included 因素，从未表示它是最主要的排放源；题干的说法在原文没有根据。",
            "为什么不是 FALSE：原文并未否认住宅用电是温室气体排放源（恰恰相反，它被列入 all sources of greenhouse gas emissions），也没有说它不重要，只是没有给出“是否为最大来源”的判断，因此属于信息缺失而非矛盾。"
          ]
        },
        {
          "questionId": "q26",
          "questionNumber": 26,
          "stem": "Energy-saving measures must now be included in the design of all new homes and improvements to buildings.",
          "translation": "现在，所有新住宅的设计以及建筑的改造都必须包含节能措施。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "It is likely that, in the future, governments will develop building codes that attempt to constrain the energy demands of new housing."
          },
          "synonyms": [
            "“must now be included” 与原文的 “It is likely that, in the future”（将来很可能会）直接冲突：原文说的是未来可能发生，不是现在已经强制",
            "“must” 与原文的 “attempt to constrain” 以及后文的 “may be stipulated”“may also be conditional upon” 冲突：原文用的都是可能、倾向于一类的情态，不含强制性",
            "“all new homes” 与原文的 “new housing” 不能等同，原文没有 all 这种全量限定",
            "“improvements to buildings” 对应原文的 “building renovations”（建筑翻新），但原文只说审批可能以此为条件，并非必须包含"
          ],
          "locatingTip": "定位：题干关键词 building codes 与 energy-saving measures 指向第 9 段（I 段）：该段先写未来政府可能制定建筑规范以约束新住宅的能源需求，再举两例（新建住宅可能被规定使用光伏，翻新审批可能以采取节能措施为条件）。确定答案技巧：本题的判分点在 must now 这一强制加当下的语气。原文通篇用 It is likely that, in the future、may be stipulated、may also be conditional upon，都是推测与可能性，没有一处是现在时的强制要求；同时 all new homes 的全量表述在原文也没有对应。语气与时间双重不符，故判 FALSE。",
          "analysis": "第 9 段（I 段）开头：“It is likely that, in the future, governments will develop building codes that attempt to constrain the energy demands of new housing. For example, the use of photovoltaics or the equivalent may be stipulated to lessen demands on the grid network and hence reduce fossil fuel emissions. Approvals for building renovations may also be conditional upon taking such energy-saving measures.”（未来政府很可能会制定建筑规范，试图约束新建住宅的能源需求。例如，可能会规定使用光伏或同等装置，以减轻电网负担并减少化石燃料排放；建筑翻新的审批也可能以采取此类节能措施为条件）。原文的语气层次非常明确：it is likely that（很可能）、in the future（将来）、may be stipulated（可能被规定）、may also be conditional upon（也可能以……为条件），全段都是在预测未来政策走向，没有任何“现在已经必须”的表述。题干的 must now（现在必须）把可能性说成强制现实，并把 “new housing” 扩大为 all new homes、把 “building renovations” 扩大为 improvements to buildings 且必须包含节能措施，与原文的可能性表述相冲突，因此答案是 FALSE。此外，段末虽然写这种情形发生会 everyone would benefit，但那也是在假设（If this were to happen）之下的推断，同样不能支撑“现在必须”。做题时要对情态动词和时态高度敏感：must、have to、will 与 may、might、likely、future 之间往往就是 TRUE 与 FALSE 的分界线。",
          "traps": [
            "为什么不是 TRUE：原文全段使用未来概率与可能性措辞（It is likely that, in the future、may be stipulated、may also be conditional upon），并未表示现在对新建住宅与建筑改造的强制要求；题干把可能性改写成 must now，与原文语气冲突。",
            "为什么不是 NOT GIVEN：原文确实谈到了建筑规范、新住宅设计与翻新审批等具体安排，信息是给出的，只是与题干的强制性和时间不一致，属于矛盾而非缺失，所以判 FALSE。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
