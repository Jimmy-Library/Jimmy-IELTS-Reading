(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-medium-209", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-medium-209",
  "meta": {
    "examId": "p2-medium-209",
    "title": "Decision Fatigue 决策疲劳",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–19 段落信息匹配（Which section contains the following information? A–G）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 19
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "research in which two substances that tasted alike had different effects on the subjects",
          "translation": "一项研究：两种味道相似的物质对受试者产生了不同的效果。",
          "answer": "e",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "the sugarless sweeteners tasted similar but did not contain the glucose. Again and again, the sugar restored willpower, but the artificial sweetener had no effect."
          },
          "synonyms": [
            "“two substances that tasted alike” 同义替换为原文的 “the sugary lemonade” 与 “the sugarless sweeteners tasted similar”，即加糖柠檬水与无糖甜味剂味道相似",
            "“had different effects on the subjects” 同义替换为原文的 “the sugar restored willpower, but the artificial sweetener had no effect”，一个恢复了意志力、另一个完全无效",
            "“research” 对应原文的 “experiments involving lemonade mixed either with sugar or with a diet sweetener”，即用加糖或加代糖的柠檬水所做的实验"
          ],
          "locatingTip": "定位：题干的抓手是两个词——two substances（两种物质）与 tasted alike（味道相似）。全文只有 E 段把“味道相似”的两种东西放在同一组实验里对比。确定答案技巧：段落信息匹配题不需要读完整段，抓住“味道相似却效果不同”这组对比即可锁定。E 段先交代实验设计 “experiments involving lemonade mixed either with sugar or with a diet sweetener”，随后给出两者的共同点与差异：“the sugarless sweeteners tasted similar but did not contain the glucose. Again and again, the sugar restored willpower, but the artificial sweetener had no effect.” 味道相似（tasted similar）而结果相反（restored willpower 与 had no effect），正好对应题干的两层含义；下句 “the subjects resisted irrational bias” 又把受试者（the subjects）点了出来。因此答案是 E 段。要特别提防 D 段：D 段同样出现 similar，但说的是两种饮品带来了相似的改善（produced similar improvements in self-control），与题干“效果不同”方向相反。",
          "analysis": "本题出自第 6 段（E 段）。原文先用一句话交代实验目的：“To establish cause and effect, researchers at Baumeister's lab tried refueling the brain in experiments involving lemonade mixed either with sugar or with a diet sweetener.”（为了确立因果关系，Baumeister 实验室的研究者用分别加了糖或加代糖的柠檬水给大脑“补充燃料”，开展了一系列实验）。接着交代两种物质的异同：“The sugary lemonade provided a burst of glucose, the effects of which could be observed immediately in the lab; the sugarless sweeteners tasted similar but did not contain the glucose.”（含糖柠檬水带来了一阵葡萄糖，其效果在实验室里马上就能观察到；无糖甜味剂味道相似，却不含葡萄糖）。最后给出结论：“Again and again, the sugar restored willpower, but the artificial sweetener had no effect.”（一次又一次，糖恢复了意志力，而人工甜味剂毫无作用）。题干中的三个信息点全部命中：two substances 指含糖柠檬水与无糖甜味剂；tasted alike 对应 tasted similar；had different effects on the subjects 对应 the sugar restored willpower 与 the artificial sweetener had no effect 这一对比，并且下文 “the subjects resisted irrational bias” 明确出现了受试者。因此答案是 E 段。辨析要点在于区分“味道相同、效果不同”（E 段）与“味道不同、效果相同”（D 段的奶昔与无味低脂乳饮），这是本题唯一的干扰来源。",
          "traps": [
            "为什么不是 A 段：A 段只讲决策疲劳的整体机制（连续决策要付出生物学代价、大脑寻找捷径），完全没有出现任何两种物质的对照实验。",
            "为什么不是 B 段：B 段讲意志力像肌肉会被消耗，例子是忍住不吃饼干和忍住不哭，没有任何两种饮品或物质的比较。",
            "为什么不是 C 段：C 段是 Jonathan Levav 的裁缝经历与德国汽车经销商选装实验，考察的是选项数量与呈现顺序对购买决定的影响，不涉及尝起来相似的物质。",
            "为什么不是 D 段：D 段确实出现了两种饮品（美味奶昔与无味的低脂乳饮），但实验结论是两者都带来了相似的改善（produced similar improvements in self-control），属于“味道不同、效果相同”，与题干“味道相似、效果不同”恰好相反。",
            "为什么不是 F 段：F 段是 Todd Heatherton 团队对节食者做的脑部扫描研究，比较的是再次看到食物图片前后的大脑活动，没有两种物质的对照。",
            "为什么不是 G 段：G 段是 Baumeister 对最佳决策者习惯的总结与饮食建议，没有任何实验和物质对比。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "an instance where controlling emotions while viewing something upsetting led to a lack of perseverance in other activities",
          "translation": "一个实例：在观看令人难过的东西时控制情绪，导致在其他活动中缺乏毅力。",
          "answer": "b",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "When they tried to resist the urge to cry during a sad movie, afterwards they gave up more quickly on tasks requiring self-discipline, such as working on a geometry puzzle."
          },
          "synonyms": [
            "“controlling emotions while viewing something upsetting” 同义替换为原文的 “tried to resist the urge to cry during a sad movie”，即看悲伤电影时强忍不哭",
            "“a lack of perseverance in other activities” 同义替换为原文的 “afterwards they gave up more quickly on tasks requiring self-discipline”，即随后在需要自律的任务上更快放弃",
            "“an instance” 对应原文由 “For example” 引出的实验例证，是自我损耗研究中的一个具体例子"
          ],
          "locatingTip": "定位：题干的抽象表达是“控制情绪”加“在其他活动中毅力下降”。B 段用 For example 引出的第二个例子同时覆盖这两点：在悲伤电影中忍住不哭（resist the urge to cry），之后在需要自律的任务上更快放弃（gave up more quickly on tasks requiring self-discipline）。确定答案技巧：段落信息匹配常用“抽象概括对应具体例证”的手法——题干用 controlling emotions 概括 resist the urge to cry，用 a lack of perseverance 概括 gave up more quickly，用 in other activities 概括 tasks requiring self-discipline, such as working on a geometry puzzle。定位时抓住 sad movie 这个具体场景词即可一步到位。",
          "analysis": "本题出自第 3 段（B 段）。该段主题是 ego depletion（自我损耗），第 2 句先给出总命题：“His research demonstrated that there is a finite store of mental stamina for exerting self-control.”（他的研究证明，用于施展自我控制的心理耐力储备是有限的）。为说明这一点，作者用 For example 连举两个实验：先是忍住不去吃刚烤好的饼干（fended off the temptation to eat freshly baked biscuits），随后更难以抵抗其他诱惑；第二个就是本题定位句：“When they tried to resist the urge to cry during a sad movie, afterwards they gave up more quickly on tasks requiring self-discipline, such as working on a geometry puzzle.”（当他们在看悲伤电影时努力忍住不哭，之后在做需要自律的任务——比如解几何题——时会更快放弃）。题干把这组实验概括成“观看令人难过的东西时控制情绪，导致在其他活动中缺乏毅力”，四处关键词一一对应：controlling emotions 对应 resist the urge to cry；while viewing something upsetting 对应 during a sad movie；a lack of perseverance 对应 gave up more quickly；in other activities 对应 tasks requiring self-discipline, such as working on a geometry puzzle。段末 “The experiments confirmed the 19th-century notion of willpower being like a muscle that became tired with use” 进一步说明这类实验的结论就是意志力被消耗，与题干落点一致，故选 B 段。",
          "traps": [
            "为什么不是 A 段：A 段只从原理上说明决策要付出生物学代价、大脑会寻找捷径，没有出现任何实验或“忍住情绪”的实例。",
            "为什么不是 C 段：C 段是 Levav 的裁缝经历与汽车选装实验，关注的是选项过多与顺序，没有压制情绪导致毅力下降的内容。",
            "为什么不是 D 段：D 段讲超市收银台摆甜食以及奶昔与无味乳饮的实验，被试喝的是饮品，不存在“观看内容并控制情绪”这一环节。",
            "为什么不是 E 段：E 段比较加糖与加代糖的柠檬水对意志力的不同作用，不涉及情绪控制。",
            "为什么不是 F 段：F 段让节食者看喜剧视频并强忍笑意（forcing themselves to suppress their laughter），确实有情绪控制；但该实验测量的是随后观看食物图片时大脑活动的变化，对应的是第 25 题，原文并未提到“在其他任务上更快放弃”，故不能选 F 段。",
            "为什么不是 G 段：G 段是 Baumeister 关于最佳决策者习惯与建议的总结，没有实验实例。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "an explanation of why it is important to eat something before making a decision at the end of the day",
          "translation": "对“为什么在一天结束时做决定之前要先吃点东西”的解释。",
          "answer": "g",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "\"Even the wisest people won't make good choices when they're not rested and their glucose is low,\" Baumeister notes. If a decision must be made late in the afternoon or in the evening, they know not to do it on an empty stomach."
          },
          "synonyms": [
            "“at the end of the day” 同义替换为原文的 “late in the afternoon or in the evening”",
            "“eat something before making a decision” 是对原文 “not to do it on an empty stomach”（不空着肚子做决定）的反向表述",
            "“why it is important” 对应原文给出的原因 “not rested and their glucose is low”，血糖偏低需要从食物中补充葡萄糖"
          ],
          "locatingTip": "定位：题干的关键线索是时间与进食——at the end of the day 与 eat something。全文只有末尾 G 段谈到“下午晚些时候或晚上做决定”以及“空腹”。确定答案技巧：先按时间词 late in the afternoon or in the evening 锁定句子，再看动作 not to do it on an empty stomach（别空着肚子做），这正是题干 eat something before making a decision 的同义改写；紧邻的前一句 “Even the wisest people won't make good choices when they're not rested and their glucose is low” 给出了原因（血糖低），对应题干 an explanation of why。G 段是全文总结段，作者在此给出操作性建议，与题干“解释为什么重要”吻合。",
          "analysis": "本题出自第 8 段（G 段）。该段是全文的总结与建议。Baumeister 先给出判断：“'Good decision-making is not a trait of the person,' Baumeister says. 'It's a state that fluctuates.'”（好的决策不是人的固有特质，而是一种会波动的状态）；接着说明自控力最强的人的做法——避免诱惑、把选择变成习惯、为重要决定保留意志力。本题定位句紧接其后：“'Even the wisest people won't make good choices when they're not rested and their glucose is low,' Baumeister notes. If a decision must be made late in the afternoon or in the evening, they know not to do it on an empty stomach.”（Baumeister 指出，即便是最睿智的人，在没休息好、血糖偏低时也做不出好的选择；如果决定必须在下午晚些时候或晚上做出，他们懂得不要空着肚子去做）。原句分两层回应题干：一是给出原因，血糖低（their glucose is low）会让人做不出好决定，而葡萄糖来自食物；二是给出具体做法，不要把决定留到空腹时做。late in the afternoon or in the evening 对应题干 at the end of the day，eat something 则是对 on an empty stomach（空腹）的反向表达，因此答案是 G 段。",
          "traps": [
            "为什么不是 A 段：A 段讲连续决策的代价与大脑寻找捷径的机制，没有提到进食或血糖，也没有出现下午或晚上这类具体时间。",
            "为什么不是 B 段：B 段讲意志力储备有限与自我损耗实验，未涉及进食与做决定的时间。",
            "为什么不是 C 段：C 段关注选项数量与呈现顺序如何影响顾客的购买决定，与吃饭、血糖无关。",
            "为什么不是 D 段：D 段虽然提到葡萄糖（glucose）并解释大脑能从食物中获取能量，但落点是意志力与自控力的提升，没有“一天结束时做决定前先吃东西”这一建议。",
            "为什么不是 E 段：E 段比较糖与代糖对意志力的作用，讨论的是恢复意志力，不是做决定前是否进食。",
            "为什么不是 F 段：F 段是 Heatherton 团队的脑部扫描研究，讨论血糖变化与冲动控制，同样没有给出饮食建议。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "a reference to a researcher who was not initially convinced of the effect of glucose",
          "translation": "提到一位最初并不相信葡萄糖作用的学者。",
          "answer": "f",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Todd Heatherton, a pioneer of social neuroscience, believed in ego depletion but didn't see how this process could be caused simply by variations in glucose levels."
          },
          "synonyms": [
            "“a researcher” 具体化为原文的人名 “Todd Heatherton”，其身份是 “a pioneer of social neuroscience”",
            "“was not initially convinced of the effect of glucose” 同义替换为原文的 “didn't see how this process could be caused simply by variations in glucose levels”，以及段首的 “had reservations about the glucose connection”",
            "“initially” 这层“起初”的意思由段末反转印证：“What surprised Heatherton was that administering glucose completely reversed the brain changes”，他被结果惊到，说明此前并不相信"
          ],
          "locatingTip": "定位：题干的抓手是人名与态度词。问“一位学者起初不相信葡萄糖的作用”，回原文找“怀疑、保留”这一类态度，F 段首句 “However, some brain researchers had reservations about the glucose connection” 立刻给出线索，紧随其后的引文点名 Todd Heatherton。确定答案技巧：先在 F 段找到 didn't see how this process could be caused simply by variations in glucose levels（不认为这一过程能仅由血糖变化引起），这正是“不相信葡萄糖作用”的原文表述；再从段末的 surprised（惊讶）确认“起初”二字——他后来被实验结果说服，反衬出此前的不信。人物与态度双重对应，故选 F 段。",
          "analysis": "本题出自第 7 段（F 段）。该段开头写道：“However, some brain researchers had reservations about the glucose connection.”（不过，一些脑研究者对“葡萄糖”这一解释持保留态度），紧接着用引号直接引出代表人物：“'Todd Heatherton, a pioneer of social neuroscience, believed in ego depletion but didn't see how this process could be caused simply by variations in glucose levels.'”（社会神经科学的先驱 Todd Heatherton 相信自我损耗的存在，但不认为这一过程可以仅仅由血糖水平的变化造成）。题干说“提到一位最初并不相信葡萄糖作用的学者”，与此完全吻合：a researcher 就是 Todd Heatherton；was not initially convinced of the effect of glucose 对应 didn't see how this process could be caused simply by variations in glucose levels，并与段首的 had reservations about the glucose connection 呼应。至于 initially（起初）这一层意思，则由段末的反转印证：“What surprised Heatherton was that administering glucose completely reversed the brain changes brought about by ego depletion.”（让 Heatherton 惊讶的是，给予葡萄糖完全逆转了自我损耗带来的脑部变化）——他之所以会惊讶，正是因为此前并不相信葡萄糖的作用，后来被实验结果说服。题干与原文的对应关系完整闭合，答案是 F 段。",
          "traps": [
            "为什么不是 A 段：A 段讲决策疲劳的基本机制，没有提到任何研究者对葡萄糖的态度。",
            "为什么不是 B 段：B 段提到 Roy F. Baumeister 提出 ego depletion，但他是相信并研究这一现象的人，文中也没有任何“保留态度”的表述。",
            "为什么不是 C 段：C 段的主角是 Jonathan Levav，他的关注点是营销与选项顺序，与葡萄糖无关。",
            "为什么不是 D 段：D 段是 Baumeister 团队解释无味饮料为何也有效（大脑从葡萄糖获取能量），是“支持葡萄糖说”的证据，不是质疑。",
            "为什么不是 E 段：E 段用加糖与加代糖的柠檬水论证糖能恢复意志力，同样是支持葡萄糖作用的研究，态度为正面。",
            "为什么不是 G 段：G 段是 Baumeister 对最佳决策者习惯的总结，其中提到血糖低会影响选择，属于接受葡萄糖说的一方，且没有出现任何“起初不相信”的学者。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "an account of research that mirrored an experience the researcher had in his personal life",
          "translation": "一段研究记述，它与研究者本人生活中的一段经历如出一辙。",
          "answer": "c",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Levav put the experience to use in an experiment conducted at German car dealerships"
          },
          "synonyms": [
            "“an experience the researcher had in his personal life” 对应原文前文的裁缝店经历 “He visited a tailor to have a suit made for his wedding”",
            "“mirrored” 同义替换为原文的 “put the experience to use”，即把私人经历照搬到研究设计中",
            "“an account of research” 对应原文的 “an experiment conducted at German car dealerships”，实验中顾客要在换挡杆、发动机配置、内饰颜色等众多选项中挑选"
          ],
          "locatingTip": "定位：题干包含两组信息——研究（research）与研究者本人生活中的经历（an experience in his personal life）。C 段整段就是 Levav 的个人故事加研究：先讲他去裁缝店为婚礼做西装、挑到第三堆面料就分不清（He visited a tailor to have a suit made for his wedding），再用 “Levav put the experience to use in an experiment conducted at German car dealerships” 把这段经历搬进实验。确定答案技巧：抓住 “put the experience to use” 这一衔接语——the experience 回指上文那段私人经历，put ... to use in an experiment 说明研究正源于个人经历，两者如出一辙，所以答案是 C 段。",
          "analysis": "本题出自第 4 段（C 段）。该段前半部分是 Levav 的私人经历：“He visited a tailor to have a suit made for his wedding and began going through the choices of fabric, buttons, and so forth, and when he got through the third pile of fabric samples. Levav recalls, 'I couldn't tell the choices apart anymore. After a while my only response to the tailor became, 「What do you recommend?」'”（他为自己的婚礼去裁缝店做西装，逐一挑选面料、纽扣等等，挑到第三堆面料样板时就分不清彼此的差别了；他回忆说，后来自己对裁缝唯一的回答变成了“您推荐哪个？”）。后半段紧接本题定位句：“Levav put the experience to use in an experiment conducted at German car dealerships”（Levav 把这段经历用到了一项在德国汽车经销商处进行的实验中），随后描写顾客要在四种换挡杆、25 种发动机与变速箱配置、56 种内饰颜色中做选择，随着决策疲劳出现便开始接受默认选项（settling for the default option）。题干的要点是“一项研究与研究者本人的生活经历如出一辙”：an experience in his personal life 对应裁缝店与婚礼那一段，an account of research 对应汽车经销商处的实验，而把两者连接起来的正是原文的 the experience 与 put ... to use（把那段经历加以利用）。因此答案是 C 段。",
          "traps": [
            "为什么不是 A 段：A 段只讲决策疲劳的机制与后果，没有任何研究者的个人故事或据此设计的研究。",
            "为什么不是 B 段：B 段介绍 Baumeister 提出的 ego depletion 及相关实验（饼干、悲伤电影），虽有研究者姓名，但没有个人生活经历被搬进研究的情节。",
            "为什么不是 D 段：D 段讲超市收银台摆放甜食以及奶昔、无味乳饮的对照实验，研究动机来自超市的做法与“补充意志力”的猜想，不是某位研究者的私人经历。",
            "为什么不是 E 段：E 段是用柠檬水做的葡萄糖实验，属于理论驱动的验证，没有个人经历背景。",
            "为什么不是 F 段：F 段是 Heatherton 团队为检验葡萄糖假说而做的脑部扫描研究，同样没有“研究者个人经历”这一层。",
            "为什么不是 G 段：G 段是 Baumeister 的观点总结与建议，没有实验设计，更没有私人经历被复刻的情节。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "an example of how the location of products in a shop can be used to take advantage of 'decision fatigue'",
          "translation": "一个例子，说明商店里商品的摆放位置如何被用来利用“决策疲劳”。",
          "answer": "d",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Similarly, sweet snacks are featured prominently at cash registers at most supermarkets. With their willpower reduced after shopping, people are especially vulnerable to sweet drinks and snacks."
          },
          "synonyms": [
            "“the location of products in a shop” 同义替换为原文的 “featured prominently at cash registers at most supermarkets”，即商品被醒目地摆在收银台",
            "“can be used to take advantage of 'decision fatigue'” 同义替换为原文的 “With their willpower reduced after shopping, people are especially vulnerable”，即顾客购物后意志力下降、更容易被说动",
            "“an example” 对应段首的 “Similarly”，表示这是与 Levav 汽车实验同理的又一个商家利用决策疲劳的实例"
          ],
          "locatingTip": "定位：题干的抓手是“商品摆放位置”与“利用决策疲劳”。看 D 段开头一句 “Similarly, sweet snacks are featured prominently at cash registers at most supermarkets”（大多数超市把甜味零食醒目地摆在收银台），位置词 cash registers 直接命中 location of products in a shop。确定答案技巧：紧接着的一句给出“利用”的逻辑——购物之后意志力下降（willpower reduced after shopping），人们特别容易买下甜饮料和零食（especially vulnerable），这正是 take advantage of「决策疲劳」的含义；段中 “While supermarkets figured this out a long time ago, only recently did researchers discover why” 进一步说明超市早就在利用这一点。因此答案是 D 段。",
          "analysis": "本题出自第 5 段（D 段）。段首两句就是定位句：“Similarly, sweet snacks are featured prominently at cash registers at most supermarkets. With their willpower reduced after shopping, people are especially vulnerable to sweet drinks and snacks.”（与此类似，大多数超市把甜味零食醒目地摆在收银台；购物之后意志力下降，人们特别容易买下甜饮料和零食）。题干中 the location of products in a shop 对应原文的 at cash registers at most supermarkets；be used to take advantage of 'decision fatigue' 对应 with their willpower reduced after shopping, people are especially vulnerable；句子开头的 Similarly 也提示本节与 C 段 Levav 的实验同理，都是商家利用顾客的决策疲劳。段中 “While supermarkets figured this out a long time ago, only recently did researchers discover why.”（超市早就弄懂了这个道理，研究者直到最近才明白原因）进一步印证“商家有意利用”。因此答案是 D 段。",
          "traps": [
            "为什么不是 A 段：A 段讲决策疲劳的原理与大脑寻找捷径，没有出现商店、货架、收银台等场景。",
            "为什么不是 B 段：B 段讲意志力储备与自我损耗实验，与商品摆放位置无关。",
            "为什么不是 C 段：C 段确实涉及商家（汽车经销商）与决策疲劳，但落点是选项数量与呈现顺序，没有“商品在店内的摆放位置”这一信息。",
            "为什么不是 E 段：E 段是加糖与加代糖柠檬水的实验，纯属实验室研究，与商店陈列无关。",
            "为什么不是 F 段：F 段是节食者的脑部扫描研究，讨论食物图片引起的大脑反应，不涉及超市的陈列策略。",
            "为什么不是 G 段：G 段给出的是个人如何保存意志力、避免空腹做决定的建议，站在消费者而非商家的角度，也没有提到商品位置。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 20–22 摘要填空（Summary Completion，ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 20,
        "end": 22
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "Even when people attempt to be 20 ________, they experience 'decision fatigue' if they make several decisions in a row.",
          "translation": "即使人们努力做到 ______，只要连续做出多个决定，就会经历“决策疲劳”。",
          "answer": "rational",
          "wordClass": "形容词（位于系动词 be 之后作表语，与 attempt to be 搭配，说明人所具备的性质；填原级形容词，不加比较级、不改写成副词形式）",
          "locating": {
            "paragraph": "2",
            "quote": "No matter how rational people try to be, they can't make decision after decision without paying a biological price."
          },
          "synonyms": [
            "“attempt to be” 同义替换为原文的 “try to be”",
            "“make several decisions in a row” 同义替换为原文的 “make decision after decision”",
            "“they experience 'decision fatigue'” 同义替换为原文的 “they can't ... without paying a biological price”，付出生理代价即经历决策疲劳"
          ],
          "locatingTip": "定位：摘要的主题是“做决定的生物学代价”，对应原文第 2 段（A 段）首句。“No matter how rational people try to be” 与摘要中 “Even when people attempt to be [20]” 结构完全平行——no matter how 与 even when 都表示让步，try to be 与 attempt to be 同义，空格要填的正是修饰 people 的那个形容词。确定答案技巧：先按 paraphrase 结构定位到 A 段首句，再回填空格处的词义——rational（理性的）在句中作 be 的表语，与 attempt to be 搭配自然；答案是 ONE WORD ONLY，直接抄原文形容词 rational 即可，注意不要写成名词 rationality 或副词 rationally。",
          "analysis": "本题是摘要填空题，对应原文第 2 段（A 段）首句：“No matter how rational people try to be, they can't make decision after decision without paying a biological price.”（无论人们多么努力保持理性，都不可能一个接一个地做决定而不付出生理上的代价）。摘要句 “Even when people attempt to be 20 ______, they experience 'decision fatigue' if they make several decisions in a row” 与之逐层对应：Even when 对应 No matter how；attempt to be 对应 try to be；make several decisions in a row 对应 make decision after decision；experience 'decision fatigue' 对应 can't ... without paying a biological price（付出生理代价就是经历决策疲劳）。三处改写都指向让步结构里那个修饰 people 的词，即 rational。词性上，空格处在 be 之后作表语，需要形容词，rational 正是形容词原形，且摘要说“努力做到理性的”，与原文“无论多么努力保持理性”语义一致。填 ONE WORD ONLY，直接写 rational。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "They are not aware of how 21 ________ they are, but it is increasingly more difficult for their brains to make decisions as the day progresses.",
          "translation": "他们没有意识到自己有多么 ______，但随着一天推进，大脑做决定会越来越困难。",
          "answer": "tired",
          "wordClass": "形容词（在 how tired they are 这一名词性从句中作表语，该从句作介词 of 的宾语；填原级 tired，不加 -ness，也不加 more 构成比较级）",
          "locating": {
            "paragraph": "2",
            "quote": "People are not conscious of being tired, but nevertheless they are low on energy."
          },
          "synonyms": [
            "“are not aware of” 同义替换为原文的 “are not conscious of”",
            "“how tired they are” 同义替换为原文的 “being tired”",
            "“it is increasingly more difficult for their brains to make decisions as the day progresses” 同义替换为原文的 “The more choices one makes throughout the day, the harder it becomes for the brain”"
          ],
          "locatingTip": "定位：摘要第二句的 “not aware of how ... they are” 与原文 “People are not conscious of being tired” 结构一致（not aware of 等于 not conscious of），可一步定位到 A 段第二句所在的小节，而 being tired 中的 tired 就是答案。确定答案技巧：填空前后的语法给出强提示——how 后面接形容词构成宾语从句，因此空格必须是形容词；原文 “being tired” 中 tired 正是形容词形式，填入后 “how tired they are” 语法通顺。要留意后文的转折 “they are low on energy”（精力不足）只是同义补充，不能替代 tired，更不能填 energy。原文中的 ‘decision fatigue’ 一词本身也提示“疲劳（tired）”才是被忽视的状态。",
          "analysis": "本题对应原文第 2 段（A 段）：“People are not conscious of being tired, but nevertheless they are low on energy.”（人们并未意识到自己已经疲劳，然而他们的精力确实处于低位）。摘要写成 “They are not aware of how 21 ______ they are, but it is increasingly more difficult for their brains to make decisions as the day progresses”，其中 not aware of 对应 not conscious of，how ... they are 对应 being tired 这一状态，空格所需的正是 tired。后半句 “it is increasingly more difficult for their brains to make decisions as the day progresses” 则对应原文同段的 “The more choices one makes throughout the day, the harder it becomes for the brain”（一天中做的选择越多，大脑就越吃力），两处表述方向一致，可以互相印证定位无误。词性上，how 之后需要形容词作表语，tired 恰好是形容词原形；后文虽提到 low on energy，但那是原文用来补充说明“精力低”的同义表达，不是被填的那个词，且若填 energy 会与 “how energy they are” 语法冲突。答案是一个词 tired。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "After making many decisions in one day, the brain seeks 22 ________ in order to conserve energy.",
          "translation": "在一天之中做出许多决定之后，大脑会寻求 ______ 以节省能量。",
          "answer": "shortcuts",
          "wordClass": "名词（复数形式，作 seeks 的宾语；原文用复数 shortcuts，指大脑采取的多种省力做法，不能改写成单数）",
          "locating": {
            "paragraph": "2",
            "quote": "The more choices one makes throughout the day, the harder it becomes for the brain, and eventually it looks for shortcuts"
          },
          "synonyms": [
            "“After making many decisions in one day” 同义替换为原文的 “The more choices one makes throughout the day”",
            "“seeks” 同义替换为原文的 “looks for”",
            "“in order to conserve energy” 对应原文的 “the ultimate energy saver” 及 “instead of expending the energy”，即省下能量、少花力气"
          ],
          "locatingTip": "定位：摘要最后一句说“大脑寻求某种东西以节省能量”，原文 A 段在讲“一天中做的选择越多，大脑越吃力”之后紧接着说 “eventually it looks for shortcuts”（最终它会寻找捷径），looks for 与 seeks 同义，shortcuts 就是答案。确定答案技巧：原文用冒号解释了这些捷径是什么——“either to act impulsively instead of expending the energy to think through the possible results, or the ultimate energy saver: do nothing”，说明寻找捷径的目的就是不花力气、节省能量（the ultimate energy saver），与摘要 in order to conserve energy 完全对应。答案是名词复数 shortcuts，注意保留原文复数形式，不要写 shortcut。",
          "analysis": "本题对应原文第 2 段（A 段）中段：“The more choices one makes throughout the day, the harder it becomes for the brain, and eventually it looks for shortcuts”（一天中做的选择越多，大脑就越吃力，最终它会寻找捷径）。原文随即用冒号展开这些捷径：“either to act impulsively instead of expending the energy to think through the possible results, or the ultimate energy saver: do nothing”（要么冲动行事、不再费力去推想可能的结果，要么采取终极省力方案：什么都不做）。“the ultimate energy saver”（终极的省力办法）与摘要的 in order to conserve energy 一一呼应，说明大脑寻找捷径正是为了节省能量。摘要把原文的 the more choices one makes throughout the day 改写为 After making many decisions in one day，把 looks for 改写为 seeks，剩下的宾语 shortcuts 就是空格答案。词性上空格作 seeks 的宾语，是复数名词；原文用复数 shortcuts，因此填写时必须保留复数形式。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 23–26 人物观点匹配（Match each statement with the correct researcher）",
      "mode": "per_question",
      "questionRange": {
        "start": 23,
        "end": 26
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "The energy people have for exercising willpower is limited.",
          "translation": "人们用来施展意志力的能量是有限的。",
          "answer": "a",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "His research demonstrated that there is a finite store of mental stamina for exerting self-control."
          },
          "synonyms": [
            "“The energy people have for exercising willpower” 同义替换为原文的 “a finite store of mental stamina for exerting self-control”",
            "“is limited” 同义替换为原文的 “finite”，表示有上限、储备是有限的",
            "“His research” 中的 His 回指上文点名的 “social psychologist Roy F. Baumeister”，即选项 A"
          ],
          "locatingTip": "定位：题干的关键词是 energy 与 willpower（意志力）。B 段（第 3 段）第 2 句 “His research demonstrated that there is a finite store of mental stamina for exerting self-control” 中，mental stamina 即“心理耐力”，exerting self-control 即“施展自我控制（意志力）”，finite 即“有限的”，三处对应齐备。确定答案技巧：这句的主语 His 需要往前一句找指代对象——该段首句写明 “a term coined by social psychologist Roy F. Baumeister”，所以 His 指 Baumeister，答案是 A。人物观点匹配题最稳妥的做法是先按关键词找到句子，再用代词回指确认是谁的观点。",
          "analysis": "本题对应原文第 3 段（B 段）。“Decision fatigue involves a phenomenon called ego depletion, a term coined by social psychologist Roy F. Baumeister.”（决策疲劳涉及一种名为 ego depletion 的现象，这个术语由社会心理学家 Roy F. Baumeister 提出）。紧接的定位句由代词 His 承接 Baumeister：“His research demonstrated that there is a finite store of mental stamina for exerting self-control.”（他的研究证明，用于施展自我控制的脑力耐力储备是有限的）。题干 The energy people have for exercising willpower is limited 与之一一对应：The energy people have 对应 a store of mental stamina（储备的脑力耐力）；for exercising willpower 对应 for exerting self-control；is limited 对应 finite（有限的）。该段后面用饼干诱惑与悲伤电影两个实验说明这种储备会被消耗，也印证“有限”这一结论出自 Baumeister 的研究。因此答案是 A（Roy F. Baumeister）。",
          "traps": [
            "为什么不是 B（Jonathan Levav）：Levav 的研究对象是德国汽车经销商处的顾客，考察选项数量与呈现顺序对购买决定的影响（第 4 段），他并没有提出“意志力总量有限”这一结论。",
            "为什么不是 C（Todd Heatherton）：Heatherton 关注的是葡萄糖能否逆转自我损耗，并用脑部扫描观察冲动控制的变化（第 7 段）；他相信 ego depletion 的存在，但“用于自控的能量有限”这一命题来自 Baumeister 的研究。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "Even an unpleasant substance had a positive effect on willpower.",
          "translation": "即便是一种令人不快的物质，也对意志力产生了积极作用。",
          "answer": "a",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "However, the experiment also included a control group who drank a tasteless low-fat dairy beverage. It provided them with no pleasure, yet it produced similar improvements in self-control."
          },
          "synonyms": [
            "“an unpleasant substance” 同义替换为原文的 “a tasteless low-fat dairy beverage”，且下句明确它 “provided them with no pleasure”（没有带来任何愉悦）",
            "“had a positive effect on willpower” 同义替换为原文的 “produced similar improvements in self-control”",
            "“Even” 对应原文的 “yet”，表示与预期相反：无味的饮品竟然也有效"
          ],
          "locatingTip": "定位：题干的抓手是“一种令人不快的物质”与“对意志力有积极作用”。D 段（第 5 段）讲 Baumeister 团队测试“先享受快乐可以增强意志力”，实验除奶昔外还设了对照组——喝无味低脂乳饮（a control group who drank a tasteless low-fat dairy beverage），并说明它带来的愉悦为零（provided them with no pleasure），却产生了相似的自控力提升（produced similar improvements in self-control）。确定答案技巧：把 tasteless 与 no pleasure 归纳为 unpleasant（令人不快），把 improvements in self-control 归纳为 a positive effect on willpower，即可确认该句正是题干所指；而本段实验由 Baumeister 的研究团队主持（段中反复出现 Baumeister's research team 与 Baumeister concluded），故答案为 A。",
          "analysis": "本题对应原文第 5 段（D 段）。该段先交代研究动机：“Baumeister's research team tested the notion that people could build up willpower by first indulging in pleasure.”（Baumeister 的研究团队检验了“先享受快乐可以积累意志力”这一想法）。实验发现一杯浓郁美味的奶昔有助于提升意志力，但本题定位句讲的是对照组的意外结果：“However, the experiment also included a control group who drank a tasteless low-fat dairy beverage. It provided them with no pleasure, yet it produced similar improvements in self-control.”（然而实验还设了一个对照组，喝的是无味低脂乳饮。这种饮品没有给他们带来任何愉悦，却带来了相似的自控力提升）。题干 Even an unpleasant substance had a positive effect on willpower 与之对应：an unpleasant substance 就是无味、不带来愉悦的乳饮；had a positive effect on willpower 对应 produced similar improvements in self-control；Even 对应原文的 yet，表示结果出乎意料。该段末尾给出结论 “Baumeister concluded that even the tasteless drink had worked because the brain, like the rest of the body, derived energy from glucose”（Baumeister 总结说，连这种无味的饮品也有效，是因为大脑像身体其他部分一样能从葡萄糖中获取能量），直接点明这是 Baumeister 的发现，因此答案是 A。",
          "traps": [
            "为什么不是 B（Jonathan Levav）：Levav 的实验在第 4 段，研究顾客在汽车选装中如何受选项数量与顺序影响，没有让被试饮用任何物质。",
            "为什么不是 C（Todd Heatherton）：Heatherton 的实验在第 7 段，让节食者看食物图片并做脑部扫描，随后给予葡萄糖，并未测试某种“令人不快的饮品”对意志力的作用。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "People's responses to images changed after having to exercise self-control.",
          "translation": "人们在被迫施展自控之后，对图像的反应发生了变化。",
          "answer": "c",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "When they were again shown pictures of food, further brain scans revealed more activity in the brain's reward centre and a decrease in the amygdala, which helps control impulses."
          },
          "synonyms": [
            "“images” 同义替换为原文的 “pictures of food”",
            "“after having to exercise self-control” 同义替换为原文的 “these dieters watched a comedy video while forcing themselves to suppress their laughter—thereby draining mental energy and inducing ego depletion”",
            "“People's responses to images changed” 同义替换为原文的 “further brain scans revealed more activity in the brain's reward centre and a decrease in the amygdala”，即大脑反应确实发生了变化"
          ],
          "locatingTip": "定位：题干的关键词是 responses to images（对图像的反应）与 after having to exercise self-control（被迫施展自控之后）。F 段（第 7 段）整段都在讲 Heatherton 团队的实验：先让节食者看食物图片，再让他们看喜剧视频并强忍笑意以诱发自我损耗，随后再次看食物图片时脑部扫描出现变化。确定答案技巧：定位句 “When they were again shown pictures of food, further brain scans revealed more activity in the brain's reward centre and a decrease in the amygdala” 中的 again（再次）正说明这是“被迫自控之后”的第二次反应，而 more activity 与 a decrease 就是 responses changed 的具体表现；本段实验的主持者是 Todd Heatherton 的团队，故选 C。",
          "analysis": "本题对应原文第 7 段（F 段）。该段描述 Todd Heatherton 团队的实验：先记录 45 位低热量节食者观看食物图片时的脑部图像，接着 “these dieters watched a comedy video while forcing themselves to suppress their laughter—thereby draining mental energy and inducing ego depletion”（这些节食者观看一段喜剧视频，同时强迫自己忍住不笑，从而消耗脑力、诱发自我损耗）。本题定位句紧接着给出再次看图片时的结果：“When they were again shown pictures of food, further brain scans revealed more activity in the brain's reward centre and a decrease in the amygdala, which helps control impulses.”（当他们再次看到食物图片时，进一步的脑部扫描显示大脑奖赏中枢的活动增多，而帮助控制冲动的杏仁核活动减少）。题干 People's responses to images changed after having to exercise self-control 与之对应：images 对应 pictures of food；after having to exercise self-control 对应 forcing themselves to suppress their laughter ... inducing ego depletion；responses ... changed 对应 further brain scans revealed more activity ... and a decrease。下一句 “The food's appeal, in other words, registered more strongly while impulse control weakened”（换言之，在冲动控制减弱时，食物的吸引力被更强烈地感知）进一步印证反应发生了变化。实验由 Heatherton 的团队完成，因此答案是 C（Todd Heatherton）。",
          "traps": [
            "为什么不是 A（Roy F. Baumeister）：Baumeister 团队的实验用的是加糖与加代糖的柠檬水来验证葡萄糖的作用（第 6 段），并未做脑部扫描，也没有测量对图像的反应变化。",
            "为什么不是 B（Jonathan Levav）：Levav 研究的是顾客在汽车选装中的购买选择（第 4 段），关注选项顺序与默认选项，与对图像的反应无关。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "The sequence of options presented to consumers could be used to the consumers' disadvantage.",
          "translation": "呈现给消费者的选项顺序可能被用来损害消费者的利益。",
          "answer": "b",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "By manipulating the order of the car buyers' choices, the researchers found that customers would end up paying more."
          },
          "synonyms": [
            "“The sequence of options presented to consumers” 同义替换为原文的 “the order of the car buyers' choices”",
            "“could be used to the consumers' disadvantage” 同义替换为原文的 “customers would end up paying more”，多花钱对顾客显然不利",
            "“manipulating” 对应题干的 “could be used”，说明顺序是被人为操控、加以利用的"
          ],
          "locatingTip": "定位：题干的抓手是 sequence of options（选项顺序）与 consumers（消费者）。C 段（第 4 段）末句 “By manipulating the order of the car buyers' choices, the researchers found that customers would end up paying more” 同时覆盖这两点：order of choices 即选项顺序，car buyers 与 customers 即消费者。确定答案技巧：先看“顺序”这一特征词 order，再看“结果不利”paying more（多付钱），两句合并即可确认答案落点；该实验由 Jonathan Levav 设计——“Levav put the experience to use in an experiment conducted at German car dealerships”，故答案是 B。",
          "analysis": "本题对应原文第 4 段（C 段）。该段先讲 Levav 在裁缝店的个人经历，再说明他把这段经历用到汽车经销商的实验里：顾客要在四种换挡杆样式、25 种发动机与变速箱配置、56 种内饰颜色中做出选择，“As they started picking features, customers would carefully weigh the choices, but as decision fatigue set in they would start settling for the default option.”（起初顾客还会仔细权衡，但随着决策疲劳出现，他们开始接受默认选项）。本题定位句是本段最后一句：“By manipulating the order of the car buyers' choices, the researchers found that customers would end up paying more.”（通过操控购车者做选择的顺序，研究者发现顾客最终会花更多的钱）。题干 The sequence of options presented to consumers could be used to the consumers' disadvantage 与之完全对应：sequence of options 对应 the order of the car buyers' choices；presented to consumers 对应 car buyers / customers；could be used to the consumers' disadvantage 对应 customers would end up paying more，其中 manipulating（操控）正体现“被利用”之意。实验由 Jonathan Levav 主导，因此答案是 B（Jonathan Levav）。",
          "traps": [
            "为什么不是 A（Roy F. Baumeister）：Baumeister 是 ego depletion 概念的提出者，他的实验围绕意志力储备、葡萄糖与柠檬水展开（第 3、5、6、8 段），第 4 段汽车经销商的顺序实验不是他做的。",
            "为什么不是 C（Todd Heatherton）：Heatherton 做的是针对节食者的脑部扫描研究（第 7 段），关注血糖与冲动控制，与消费者面对的选项顺序无关。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
