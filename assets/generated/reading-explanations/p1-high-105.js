(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-105", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-105",
  "meta": {
    "examId": "p1-high-105",
    "title": "A survivor’s story 新西兰猫头鹰",
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
          "stem": "Early European settlers made detailed studies of the morepork.",
          "translation": "早期的欧洲定居者对猫头鹰（morepork）做过详细的研究。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "This bird was widespread throughout the islands when European settlers arrived in the middle of the 19th century and it remained in good numbers for some years thereafter."
          },
          "synonyms": [
            "“Early European settlers” 在原文中对应 “European settlers arrived in the middle of the 19th century”，题干用 early 概括原文的时间信息“19 世纪中叶”",
            "“made detailed studies of the morepork” 在原文中没有任何对应表达：全文没有“欧洲定居者研究 morepork”的记载（第 3 段的 recorded、第 8 段的 measuring the population 均与定居者无关）",
            "原文提到定居者的那句话，其主语是 “This bird”，指的是前文的笑鸮（laughing owl），而不是题干所查的 morepork；settlers 只是用来交代笑鸮当年繁盛的时间背景"
          ],
          "locatingTip": "定位：题干中的 “European settlers” 是大写起首的专有表达，全文只出现在第 1 段（“when European settlers arrived in the middle of the 19th century”），抓住 settlers 一词即可一步锁定，无需通读全文。确定答案技巧：判断题的核心信息是 “made detailed studies”（做过详细研究），属于“行为 + 程度”类表述，必须回原文找到“谁在什么时候对 morepork 做了研究”这一命题。第 1 段提及定居者时只在说笑鸮当时遍布各岛、数量可观，settlers 纯属时间坐标；此后各段讲的是 morepork 的外形、繁殖、捕食、威胁与保护，通篇没有出现欧洲定居者研究 morepork 的任何记载。原文对题干所述信息只字未提，既没说研究过，也没说没研究过，故判 NOT GIVEN。",
          "analysis": "第 1 段交代的是笑鸮（laughing owl）的兴衰史，首句 “As an island country with a fauna dominated by birds, New Zealand was once home to an owl species which is now extinct, the laughing owl, named for its distinctive cry.”（作为一个动物群以鸟类为主的岛国，新西兰曾是现已灭绝的一种猫头鹰——因叫声独特而得名的笑鸮——的家园）。段中唯一出现欧洲定居者的地方是：“This bird was widespread throughout the islands when European settlers arrived in the middle of the 19th century and it remained in good numbers for some years thereafter.”（当欧洲定居者于 19 世纪中叶到来时，这种鸟遍布各岛，此后若干年数量仍然可观）。可见 settlers 在这句话里的功能只是给出时间坐标，用来衬托笑鸮当时的繁盛，作者并未交代他们做过任何研究；句子的谈论对象也只是笑鸮，不是 morepork。文章从第 2 段起转入 morepork 的外形（29 厘米、175 克、羽缘有流苏状构造）、繁殖（10 月筑巢、每窝最多三枚白蛋）、捕食（夜间捕食甲虫、飞蛾、蜘蛛、小鸟和老鼠）以及威胁与保护，前后九段中也没有出现欧洲定居者研究 morepork 的情节（第 8 段的 measuring、monitoring 是环保部门对该鸟的监测，与定居者无关）。题干把 settlers 与研究行为拼接成一条独立信息，而原文对这一信息毫无交代，按判断题规则应判 NOT GIVEN。做这类题时要注意：原文提到某个人群或人物，不等于原文交代了他们做某件事，两者必须分开核对。",
          "traps": [
            "为什么不是 TRUE：原文第 1 段只说欧洲定居者到来时笑鸮遍布岛屿、数量众多，settlers 只是时间背景；全文没有任何关于欧洲定居者研究 morepork 的记载。把“人出现了”推断成“人做了详细研究”，属于超出原文的想象，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文有与题干相矛盾的内容，例如“定居者从未研究过 morepork”“对 morepork 的研究很少”“研究是后来才做的”。原文对定居者与 morepork 研究之间的关系完全没有涉及，仅仅是“没说”，所以也不能选 FALSE，三选一里只有 NOT GIVEN 对应信息缺失。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The Polynesian rat had a negative effect on the number of laughing owls.",
          "translation": "波利尼西亚鼠对笑鸮（laughing owl）的数量产生了负面影响。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Where other native birds suffered from predation by the Polynesian rat, the laughing owl turned the tables and adapted its diet to include the rodent."
          },
          "synonyms": [
            "“the Polynesian rat” 在原文中为原词复现 “the Polynesian rat”",
            "“had a negative effect on the number of laughing owls” 与原文的 “other native birds suffered from predation by the Polynesian rat” 方向相反：受鼠害的是 other native birds（其他本土鸟类），而不是笑鸮",
            "“the laughing owl” 在原文中的动作是 “turned the tables and adapted its diet to include the rodent”，即反守为攻、把鼠类纳入自己的食谱，说明老鼠是它的食物而不是威胁"
          ],
          "locatingTip": "定位：题干的两个关键词都是大写或专有表达——Polynesian rat（波利尼西亚鼠）与 laughing owl（笑鸮），它们在第 1 段同句出现，扫读大写 P 开头的 Polynesian 或引号外的 laughing owl 即可锁定，无需读第 2 段以后的内容。确定答案技巧：本题考“谁受害、谁受益”，是 FALSE 的高频设置方式。原文句式为 “Where other native birds suffered from predation by the Polynesian rat, the laughing owl turned the tables and adapted its diet to include the rodent.”，Where 引导对比状语，把受害方（other native birds）与受益方（the laughing owl）清晰分开；固定短语 turn the tables 意为“扭转局面、反败为胜”，说明笑鸮不但没有被鼠类影响，反而吃掉了鼠类。题干却把负面影响安到笑鸮头上，与原文事实相反，故判 FALSE。核对时还可借助同段末尾列出的灭绝原因（specimen collectors、habitat changes、non-native predators including cats and stoats），其中并不包含波利尼西亚鼠，进一步印证老鼠不是笑鸮数量下降的原因。",
          "analysis": "第 1 段讲笑鸮为何能在其他本土鸟类衰败时保持强势，本题定位句是：“Where other native birds suffered from predation by the Polynesian rat, the laughing owl turned the tables and adapted its diet to include the rodent.”（在其他本土鸟类饱受波利尼西亚鼠捕食之苦的地方，笑鸮却反守为攻，把这种鼠类纳入了自己的食谱）。句中信息分工非常明确：suffered from predation by the Polynesian rat 的主语是 other native birds，而 laughing owl 的动作是 turned the tables（扭转局势）和 adapted its diet to include the rodent（调整食谱以把鼠类纳入其中），也就是说老鼠在笑鸮这里从“威胁”变成了“口粮”。紧接的下一句进一步说明笑鸮的实力：“It was also capable of catching and killing the other New Zealand owl, the morepork, and even larger birds, such as the weka.”（它甚至能够捕捉并杀死新西兰另一种猫头鹰 morepork，以及 weka 这类体型更大的鸟）。而段末列出的灭绝原因同样与鼠无关：“its demise caused by specimen collectors, habitat changes, and non-native predators including cats and stoats.”（它的灭绝由标本采集者、栖息地改变以及猫和白鼬等外来捕食者造成）。因此，题干所说的“波利尼西亚鼠对笑鸮数量造成负面影响”与原文所述的事实正好相反，答案是 FALSE。做题提示：遇到“A 对 B 有坏处”这类因果题，务必回到原文确认主语与宾语的位置，雅思常把受害对象与受益对象对调来制造 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文把“遭受波利尼西亚鼠捕食之苦”的受害方限定为 other native birds，而笑鸮是反过来吃掉老鼠的一方（turned the tables and adapted its diet to include the rodent），题干把老鼠说成笑鸮数量的负面因素，与原文事实直接对立。",
            "为什么不是 NOT GIVEN：原文对“老鼠与笑鸮之间谁受害”这一关系交代得非常明确，并非未提及；而且段末交代的笑鸮灭绝原因（标本采集者、栖息地变化、猫和白鼬等外来捕食者）中也没有老鼠这一项，信息存在且与题干冲突，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The laughing owl was larger than the morepork.",
          "translation": "笑鸮（laughing owl）的体型比猫头鹰（morepork）更大。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Surprisingly, it is the smaller owl, the morepork, that has managed to survive until this day."
          },
          "synonyms": [
            "“The laughing owl was larger than the morepork” 与原文的 “it is the smaller owl, the morepork” 是同一比较关系的两种说法：morepork 被明确称为 smaller owl（较小的那种猫头鹰），因此笑鸮就是较大的那一种",
            "“larger” 同义替换为原文比较级 “smaller”，只是比较的出发方相反",
            "原文的 “the other New Zealand owl, the morepork” 把两种鸟并列为同类比较对象，与题干的比较结构一致"
          ],
          "locatingTip": "定位：本题的比较对象是 laughing owl 与 morepork 这两种鸟，两者在第 1 段反复出现。最直接的证据在段末一句，其中 smaller owl 后紧跟同位语 the morepork，属于典型的“身份说明”结构，看到 smaller 即可锁定。确定答案技巧：题干是比较级判断（A 比 B 大），原文却用反向比较级表达（the smaller owl, the morepork），解题时只要把主语换位即可——原文说 morepork 是较小的猫头鹰，等价于笑鸮是较大的那一种。另外同段 “It was also capable of catching and killing the other New Zealand owl, the morepork, and even larger birds, such as the weka.” 也提供佐证：笑鸮能捕杀 morepork，甚至能捕杀体型更大的 weka，说明它在体型与力量上强于 morepork。两条证据方向一致，故判 TRUE。",
          "analysis": "第 1 段末句是本题的关键：“Surprisingly, it is the smaller owl, the morepork, that has managed to survive until this day.”（令人惊讶的是，存活至今的却是体型较小的那种猫头鹰——morepork）。这里使用强调句式 it is … that …，把 the smaller owl 提到显著性位置，并用同位语 the morepork 直接指明“较小的猫头鹰”就是 morepork。既然 morepork 是二者中较小的一种，那么题干所说的“笑鸮比 morepork 更大”就与该句完全一致，答案判 TRUE。同段倒数第二句还提供了另一条佐证：“It was also capable of catching and killing the other New Zealand owl, the morepork, and even larger birds, such as the weka.”（它还能捕捉并杀死新西兰另一种猫头鹰 morepork，甚至能捕杀 weka 这类体型更大的鸟）。作者用 even larger birds 作递进，把 morepork 放在“更小的猎物”这一层，而把 weka 归入“更大的鸟”，逻辑上再次确认笑鸮大于 morepork。做比较级判断题时要注意方向词：原文可能从“较小的一方”入手，题干则从“较大的一方”入手，只要等价关系成立就应判 TRUE，不要因为词面不同而误判。",
          "traps": [
            "为什么不是 FALSE：原文两次给出同向证据——段末把 morepork 称为 the smaller owl（较小的猫头鹰），前文又说笑鸮能捕杀 morepork 甚至更大的 weka。两处都指向笑鸮体型更大，与题干一致，没有任何矛盾之处，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文并非没有比较，而是明确用比较级 smaller 交代了二者的相对大小（并在同段用 even larger birds 作旁证），信息存在且与题干相符，因此不属于信息缺失。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Rats pose a risk to young moreporks.",
          "translation": "老鼠对幼小的猫头鹰（morepork）构成威胁。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "As the female is a hole-nester, she is vulnerable to predators such as stoats and possums during the breeding season, and eggs and chicks will also be at risk from rats."
          },
          "synonyms": [
            "“young moreporks” 同义替换为原文的 “eggs and chicks”（蛋和雏鸟），即尚未长大成鸟的幼小个体",
            "“pose a risk to” 同义替换为原文的 “will also be at risk from”，都是“使某人处于危险之中”的意思，只是主动与被动角度不同",
            "“Rats” 在原文中为原词复现 “rats”"
          ],
          "locatingTip": "定位：题干的关键词是 rats，回原文搜索 rats，最直接的落点在讲 morepork 所面临威胁的第 7 段（段首用 Although moreporks are still considered to be relatively common 转入“数量下降与威胁”）。确定答案技巧：本题的替换点是“幼鸟”这一表述，题干用 young moreporks 泛指幼小个体，原文用 eggs and chicks（蛋与雏鸟）具体列出，二者外延一致，属于上位与下位的合理替换。同时要看清句子结构：and eggs and chicks will also be at risk from rats 与前一分句并列，说明除了雌鸟易受白鼬、负鼠攻击外，蛋和雏鸟还面临老鼠的威胁，风险来源清清楚楚写着 rats，方向与题干完全相同，故判 TRUE。注意不要把前面提到的 stoats and possums 误当成答案来源，它们威胁的是成鸟雌鸟而非幼鸟。",
          "analysis": "第 7 段集中说明 morepork 的生存威胁：“Although moreporks are still considered to be relatively common, it is likely that numbers are in gradual decline due to predation and loss of habitat. As the female is a hole-nester, she is vulnerable to predators such as stoats and possums during the breeding season, and eggs and chicks will also be at risk from rats.”（虽然 morepork 目前仍被认为相对常见，但由于被捕食和栖息地丧失，其数量很可能在逐渐减少。由于雌鸟在树洞中筑巢，繁殖季节里它容易遭到白鼬和负鼠这类捕食者的攻击，而蛋和雏鸟也会面临老鼠的威胁）。本题的判分点就在后半句：eggs and chicks（蛋与雏鸟）对应题干的 young moreporks（幼小的 morepork），will also be at risk from（也将面临……的危险）对应 pose a risk to（对……构成风险），rats 原词复现。三处对应严丝合缝，信息方向一致，故判 TRUE。词句理解上可注意：young 在这里并非指“年轻”这一相对概念，而是与成鸟相对的幼小阶段，恰好覆盖蛋与雏鸟，因此该替换成立；这类填空式替换（用上位概念替换原文的具体列举）是雅思常常使用的处理方式。",
          "traps": [
            "为什么不是 FALSE：原文明确写着 eggs and chicks will also be at risk from rats，即老鼠确实会威胁到蛋和雏鸟，这正是题干所说的“老鼠对幼小的 morepork 构成威胁”，两者一致，没有任何矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对老鼠的危险有直接交代（at risk from rats），并非只说“蛋和雏鸟有危险”而不指明来源；风险来源、受害对象两项信息都齐全，因此不属于信息缺失。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The New Zealand Department of Conservation is hoping to limit the population of moreporks.",
          "translation": "新西兰环保部希望限制猫头鹰（morepork）的种群数量。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "The New Zealand Department of Conservation is taking steps to ensure the preservation of New Zealand's only native owl."
          },
          "synonyms": [
            "“The New Zealand Department of Conservation” 在原文中为原词复现 “The New Zealand Department of Conservation”",
            "“hoping to” 同义替换为原文的 “is taking steps to”（正在采取措施）以及段末的 “it is hoped that”（人们希望），两者都表示该机构的意图与愿望",
            "“limit the population” 与原文的 “ensure the preservation”（确保存续保护）以及 “the morepork will continue to survive and thrive”（希望它继续生存并兴旺）方向完全相反：一个是限制数量，一个是保护并促其繁衍"
          ],
          "locatingTip": "定位：题干含机构专有名词 The New Zealand Department of Conservation，全文只出现在第 8 段首句，关键词非常显眼，一步定位。确定答案技巧：题目考的是“官方机构的意图”，必须回原文确认该机构的行动目标。原文首句用 ensure the preservation（确保保护、保存）说明其目的是保护这种鸟，段末又说 “it is hoped that the morepork will continue to survive and thrive”（希望 morepork 继续存活并兴旺），survive and thrive 表示希望种群延续壮大；而题干的 limit the population 意为“限制种群数量”，两者方向完全相反。preservation 与 limit 构成反义对立，属于典型的事实矛盾，故判 FALSE。做题时一旦在题干中看到 limit、reduce、restrict 这类“减量”动作，就要立刻回到原文核对机构或人物的真实意图是保护还是抑制。",
          "analysis": "第 8 段讲新西兰政府机构对 morepork 的保护：“The New Zealand Department of Conservation is taking steps to ensure the preservation of New Zealand's only native owl. The department is involved in measuring the population of moreporks and has put transmitters on a number of birds to determine survival and mortality. As well as being New Zealand's only native owl, the morepork has symbolic and spiritual importance, so in monitoring the birds it is hoped that the morepork will continue to survive and thrive.”（新西兰环保部正在采取措施，以确保新西兰唯一本土猫头鹰的存续。该部门参与统计 morepork 的种群数量，并给若干只鸟装上发射器以测定其存活与死亡情况。除了是新西兰唯一的本土猫头鹰之外，morepork 还具有象征与精神层面的重要性，因此监测这些鸟的目的是希望 morepork 能够继续生存、繁衍兴旺）。整段的关键词是 preservation、measuring the population、transmitters、survive and thrive，全部指向“保护与延续”：统计数量（measuring the population）是保护行动的手段，而不是为了控制数量；给鸟装发射器是为了了解存活率；段末的 thrive（兴旺、繁衍）更是明确表达希望种群向好。而题干的 limit the population 意为“限制种群数量”，与原文的保护意图正好相反。理解上的陷阱在于把“统计种群数量”误解为“控制种群数量”，须知 measuring 只是“测量、统计”，与 limiting（限制）在语义上完全不同，故本题判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文两处表明官方意图是保护而非抑制——首句 ensure the preservation（确保存续保护），段末 it is hoped that the morepork will continue to survive and thrive（希望 morepork 继续生存并兴旺）。thrive 意为繁荣、兴旺，与“限制数量”背道而驰，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对环保部的目的交代得很完整（保护、统计、装发射器、希望其 continue to survive and thrive），属于已有明确信息且与题干冲突的情形，不符合 NOT GIVEN 所要求的“无相关信息”。注意不要因为原文提到 measuring the population（统计种群数量）就以为信息不足——测量与限制是两个不同的概念。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Other bird species are frightened away when they hear the morepork's cry.",
          "translation": "其他鸟类听到猫头鹰（morepork）的叫声就会被吓跑。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In the day, these small birds sometimes mob drowsy moreporks and chase them away from their roosts; they force the sleepy predators to search for a more peaceful spot."
          },
          "synonyms": [
            "“Other bird species” 在原文中对应 “these small birds” 以及前文列举的 “robins, grey warblers and fantails”",
            "“are frightened away” 与原文的 “mob drowsy moreporks and chase them away” 方向相反：被赶走的是 morepork 自己，赶走它的是小鸟，而不是小鸟被叫声吓跑",
            "“when they hear the morepork's cry” 在原文中找不到对应：第 5 段讲小鸟围攻 morepork 时并未提及叫声，第 9 段虽然谈叫声，但讲的是叫声所象征的吉凶含义"
          ],
          "locatingTip": "定位：题干的关键词有两组——Other bird species（其他鸟类）与 the morepork's cry（morepork 的叫声）。前者在第 5 段末句以 robins, grey warblers and fantails 以及 these small birds 的形式出现，后者集中在第 9 段。两处都要核对。确定答案技巧：这是 NOT GIVEN 最典型的设置方式——原文有若干“像”的信息，但把它们拼起来也凑不出题干要的因果关系。第 5 段确实出现“小鸟赶走 morepork”的情节，但方向反了：被 mob（围攻）并 chased away（赶走）的是 morepork，赶走它的是小鸟，而且原因是它是白天昏睡的捕食者，与叫声无关。第 9 段几处提到叫声，分别讲 morepork 用叫声联络同类、宣示领地，以及低叫预示好、高叫预示坏，依旧没有“其他鸟听到叫声受惊逃走”这层信息。全文对“叫声导致其他鸟逃离”这一因果关系毫无交代，故判 NOT GIVEN。切忌把第 5 段的“鸟与鸟之间的驱赶”想当然地当成“被叫声吓跑”。",
          "analysis": "本题需要在原文中寻找“morepork 的叫声”与“其他鸟类逃离”之间的因果联系。第 5 段末尾确实写到了鸟类之间的驱赶，但主客颠倒：“Moreporks are clever hunters, and birds such as robins, grey warblers and fantails can end up as their prey. In the day, these small birds sometimes mob drowsy moreporks and chase them away from their roosts; they force the sleepy predators to search for a more peaceful spot.”（morepork 是聪明的猎手，知更鸟、灰莺和扇尾鹟这类小鸟可能成为它的猎物。白天，这些小鸟有时会围攻昏睡的 morepork，把它们从栖息处赶走，迫使这些困倦的捕食者另找安静的地方）。这里被赶走、被迫另寻栖处的是 morepork 本身，驱动因素是它白天昏睡（drowsy、sleepy）因而易受围攻，原文丝毫未提叫声。第 9 段几处涉及叫声，例如：一是 “At dusk, the melancholy sound of the morepork can be heard in forests and parks as it calls to other moreporks and claims territory.”（黄昏时，morepork 那忧郁的叫声可在森林与公园中听到，它以此呼唤同类、宣示领地）；二是段末 “The occasional high, piercing call of the morepork signified bad news, but the lower-pitched and more common “ruru” call heralded good news.”（偶尔出现的尖利叫声预示坏消息，而更常见的低音“ruru”叫声带来好消息）。这些内容讲的都是叫声的功能或象征意义，与“其他鸟类被吓跑”无关。全文找不到“鸟听到叫声受惊离开”的表述，信息缺失，故判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文描述的是小鸟在白天围攻并赶走昏睡的 morepork（mob drowsy moreporks and chase them away from their roosts），方向是“鸟赶走猫头鹰”；全文没有任何句子说其他鸟听到 morepork 的叫声会受惊逃走，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文出现相反信息，例如“鸟听到叫声毫无反应”或“morepork 的叫声不会影响其他鸟”。原文对此完全没有交代，只是没说；同时第 9 段讲的也只是鸟鸣的吉凶寓意，与题干所问的种间行为无关，因此信息不存在，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "In Māori tradition, the low call of the morepork had negative associations.",
          "translation": "在毛利传统中，猫头鹰（morepork）低沉的叫声带有负面的联想含义。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "The occasional high, piercing call of the morepork signified bad news, but the lower-pitched and more common “ruru” call heralded good news."
          },
          "synonyms": [
            "“the low call” 同义替换为原文的 “the lower-pitched and more common “ruru” call”（音调较低、更常见的“ruru”叫声）",
            "“had negative associations” 与原文的 “heralded good news”（预示好消息）方向相反：负面含义对应的是高亢的叫声",
            "“signified bad news” 在原文中的主语是 “high, piercing call”（高亢刺耳的叫声），题干把这一负面寓意错接到了低叫上"
          ],
          "locatingTip": "定位：题干含两处特色信息——Māori tradition 与 the low call，前者在第 9 段（In the tradition of the Māori people of New Zealand …），后者在段末一句以 lower-pitched 出现，扫读 Māori 与 lower-pitched 即可锁定第 9 段末句。确定答案技巧：本题考“声音高低”与“吉凶寓意”的对应，原文用 but 把两种情况对照排列：“The occasional high, piercing call … signified bad news, but the lower-pitched and more common “ruru” call heralded good news.” 高亢刺耳的（high, piercing）对应坏消息，低沉的（lower-pitched）对应好消息。题干说低叫有负面联想，恰好把两者对调，属于典型的信息错位型 FALSE。解题时先把原文的两组对应关系列出，再与题干比对，命中相反即可确认答案；注意句中的 lower-pitched 与 high 构成明确的对比关系，不要因同一个 morepork 能发出两种叫声而混淆指代。",
          "analysis": "第 9 段讲 morepork 在毛利文化中的形象与象征：“At dusk, the melancholy sound of the morepork can be heard in forests and parks as it calls to other moreporks and claims territory. Its Māori name (ruru) echoes its two-part cry. In the tradition of the Māori people of New Zealand, the morepork, or ruru, was often seen as a careful guardian. … Moreporks were believed to act as messengers to the gods in the heavens, flying along spiritual paths in the sky. They were the mediums used to communicate with the gods. The occasional high, piercing call of the morepork signified bad news, but the lower-pitched and more common “ruru” call heralded good news.”（黄昏时，morepork 那忧郁的叫声会回荡在森林与公园中，它以此呼唤同类、宣示领地。它的毛利语名字 ruru 模仿了它两段式的叫声。在毛利人的传统中，morepork（或称 ruru）常被视为细心的守护者。……人们相信 morepork 是飞越天空中的精神之路、到天上众神那里去的信使，是与神沟通的媒介。偶尔出现的尖利叫声预示坏消息，而音调较低、更常见的“ruru”叫声则带来好消息）。末句用 but 并列对照，把 two-part cry 的两种音高与吉凶寓意一一挂接：high, piercing（高亢、尖利）对应 bad news，lower-pitched 与 more common 的 ruru 叫声对应 good news。题干说在毛利传统中 low call 有负面联想，正好把高低两类叫声的寓意调换，与原文直接矛盾，因此判 FALSE。做本题时要留意题干往往只改动一个方向词（low 对 high、negative 对 positive），只要在原文中找到对照结构，先把两边关系抄清楚再比对，就不会被表面相近的词骗到。",
          "traps": [
            "为什么不是 TRUE：原文明确把负面寓意给了高亢刺耳的叫声（The occasional high, piercing call … signified bad news），而把 low call 明确对应到好消息（the lower-pitched and more common “ruru” call heralded good news）。题干把负面联想安到低叫上，与原文正好相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文用一整句完整交代了两种叫声各自的寓意，既有“低叫”这一对象，也有“好、坏消息”这一性质判定，信息清晰且与题干冲突，属于事实矛盾而非信息缺失，因此不是 NOT GIVEN。"
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
          "stem": "approximately 8 ________ in length",
          "translation": "长度大约为 ________。",
          "answer": "29 centimetres",
          "wordClass": "数量表达（数词加计量单位；在笔记条目 approximately ___ in length 中作说明长度的数量短语，属条目片段而非完整句，空格前是副词 approximately，其后是介词短语 in length）。原文把数字与单位一起写，题目要求 ONE WORD AND/OR A NUMBER，故整体照抄 29 centimetres，不要只写 29，也不要改成 29 cm",
          "locating": {
            "paragraph": "2",
            "quote": "Speckled dark brown, with yellow eyes and long tails, they are around 29 centimetres long from head to tail and 175 grams in weight."
          },
          "synonyms": [
            "“approximately” 同义替换为原文的 “around”（大约）",
            "“8 ________ in length” 同义替换为原文的 “29 centimetres long from head to tail”，即把“从头到尾 29 厘米长”改写为“长度约 29 厘米”",
            "笔记栏目 “Appearance”（外形）对应原文第 2 段对 morepork 外观的描述（深褐色斑点、黄眼、长尾、175 克）"
          ],
          "locatingTip": "定位：笔记第一行属于 Appearance（外形）栏，对应原文第 2 段首句，该句集中列出身体尺寸与重量（29 centimetres、175 grams），数字是最醒目的定位标记，扫读数字即可锁定。确定答案技巧：题干与原文都围绕“长度”这一个信息点，approximately 对应 around，in length 对应 long from head to tail，因此空格要填的是原文紧接 around 之后的数量表达 29 centimetres。作答时注意三点：一是题目允许“ONE WORD AND/OR A NUMBER”，单位 centimetres 与数字同属一个答案整体，应完整照抄；二是要区分钟与重两类数字，175 grams 是体重，属于干扰项；三是不要自行缩写成 29 cm，因为题目要求用原文的词，原文写的是 centimetres。",
          "analysis": "原文第 2 段首句是本题唯一的取材处：“Speckled dark brown, with yellow eyes and long tails, they are around 29 centimetres long from head to tail and 175 grams in weight.”（它们身上有深褐色斑点，黄眼睛，长尾巴，从头到尾大约 29 厘米长，体重 175 克）。笔记 Appearance 栏的第一条写的是 approximately 8 ________ in length，其中 approximately（大约）对应原文的 around，in length（在长度上）对应原文的 long from head to tail，剩下的核心信息就是数量表达 29 centimetres，故空格填 29 centimetres。要注意本题的干扰信息有两个：一是紧跟在后的 175 grams in weight（体重 175 克），它是描述重量而非长度，与空格的 in length 不符；二是原文中的 35 days、three white eggs、20 to 30 days 等数字属于其它段落的内容，与 Appearance 栏无关，不应跨栏取用。另外，题目要求 ONE WORD AND/OR A NUMBER，指的是“一个词和/或一个数字”，数字加计量单位作为固定搭配可以整体填入，这正是本题的常规处理方式；但务必保持原文写法 centimetres（英式拼写、复数），不要写成 29 cm 或 29 centimeter。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "nests in trees, plants or spaces in roots and 9 ________",
          "translation": "在树、植物以及树根间的空隙和 ________ 中筑巢。",
          "answer": "rocks",
          "wordClass": "名词（复数形式；与并列名词 roots 一起作介词 in 的宾语，构成 spaces in roots and rocks；题干里给的是 in，不是原文的 among）。题面已给出 roots，故填 rocks，保持复数不加冠词",
          "locating": {
            "paragraph": "3",
            "quote": "Moreporks nest in tree hollows, in clumps of plants, or in cavities among rocks and roots."
          },
          "synonyms": [
            "“nests in trees” 同义替换为原文的 “nest in tree hollows”（在树洞里筑巢）",
            "“plants” 同义替换为原文的 “clumps of plants”（成丛的植物）",
            "“spaces in roots and 9 ________” 同义替换为原文的 “cavities among rocks and roots”，即把“岩石与树根之间的洞穴”拆写成“树根间的空隙和岩石”，因此空格对应 rocks"
          ],
          "locatingTip": "定位：笔记 Nesting（筑巢）栏对应原文第 3 段首句，该句集中交代三种筑巢地点（tree hollows、clumps of plants、cavities among rocks and roots），扫读 nest 一词即可锁定。确定答案技巧：本题的解题关键是把握并列结构的一一对应。题面写 “nests in trees, plants or spaces in roots and 9 ________”，把原文三个并列地点压缩改写：tree hollows 压缩成 trees，clumps of plants 压缩成 plants，第三项 cavities among rocks and roots 被拆成“树根间的空隙（spaces in roots）”加上一个空格。原文中该短语里的并列名词是 rocks and roots，题面已给出 roots，剩下的 rocks 即答案。答题时要注意形式：原文是复数 rocks，与后面的 roots 并列，因此必须保留复数形式，不能写成单数 rock；同时它只是名词本身，不能加冠词或介词。",
          "analysis": "原文第 3 段首句：“Moreporks nest in tree hollows, in clumps of plants, or in cavities among rocks and roots.”（morepork 在树洞里、成丛的植物中，或岩石与树根之间的洞穴里筑巢）。全句用 or 并列三个地点：in tree hollows、in clumps of plants、in cavities among rocks and roots。笔记把这三项压缩成一行：“nests in trees, plants or spaces in roots and 9 ________”，其中 trees 对应 tree hollows（把“树洞”简化为“树”），plants 对应 clumps of plants，第三项则把 cavities among rocks and roots（岩石与树根之间的洞穴）改写为 spaces in roots and ________（树根间的空隙和某个东西），可见空格要补的是与 roots 并列的另一个名词，即原文的 rocks（岩石）。确定答案时还可以借助介词线索：原文用 among rocks and roots 表示“在岩石与树根之间”，笔记用 spaces in roots and ________，把 among 的并列对象拆开，仍保留 rocks 与 roots 的并列关系。词性上，rocks 是复数名词，与 roots 保持数的一致；书写时照抄原文小写复数形式 rocks 即可（注意句首外的单词在笔记中均小写，答案大小写通常不敏感，但按原文形式最稳妥）。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "transports its prey using its 10 ________",
          "translation": "用它的 ________ 来搬运猎物。",
          "answer": "bill",
          "wordClass": "名词（单数可数，指鸟的喙；位于所有格 its 之后，与 its 一起构成分词 using 的宾语 using its bill）。故填名词单数形式，不加冠词、不用复数",
          "locating": {
            "paragraph": "5",
            "quote": "A morepork uses its sharp talons to catch or stun its prey, which it then carries away in its bill."
          },
          "synonyms": [
            "“transports its prey using its 10 ________” 同义替换为原文的 “carries away in its bill”，其中 transports 对应 carries away（运走）",
            "“using its …” 与原文的 “in its bill” 表达同一意思：用什么部位完成搬运动作",
            "原文的 “uses its sharp talons to catch or stun its prey” 提供了对照项 talons（利爪）用于捕捉与击晕，与搬运环节区分开"
          ],
          "locatingTip": "定位：笔记 Hunting（捕食）栏的第一条讲“运走猎物”，对应原文第 5 段中描写捕食动作的那句，关键词是 talons、prey 和 bill，扫读 talons 或 carries away 即可锁定。确定答案技巧：题干的动作是 transports（运输、搬运），原文用了两个临近但不同的动作——先用 talons 捕捉或击晕（catch or stun），再用 bill 把猎物带走（carries away）。题干的 using its 正好对应原文的 in its（用……这个部位），因此空格要填的是承担“搬运”这一环节的器官 bill（喙）。答题时注意区分两个器官：talons（利爪）负责捕捉与击晕，bill（喙）负责衔走猎物，若把 talons 填进去就与“运输”这一动作不匹配；此外空格前已有 its 修饰，只填名词原形 bill，不加冠词也不变复数。",
          "analysis": "原文第 5 段描写 morepork 的捕食方式：“By night, they hunt a variety of animals – mainly large invertebrates including scarab and huhu beetles, moths, caterpillars and spiders. They also take small birds and mice. They can find suitable food in pine forest as well as native forest. A morepork uses its sharp talons to catch or stun its prey, which it then carries away in its bill.”（夜间它们捕食多种动物，主要是大型无脊椎动物，包括金龟子和 huhu 甲虫、飞蛾、毛虫和蜘蛛，也捕食小鸟和老鼠。它们能在松林和原生林中找到合适的食物。morepork 用锋利的爪子捕捉或击晕猎物，然后用喙把猎物衔走）。解答本题的关键是把原文的复合动作拆成两段：catch or stun（捕捉或击晕）用的是 sharp talons（锋利的爪子），carries away（搬运、带走）用的是 its bill（它的喙）。题干的 transports its prey using its ________ 只问搬运环节所使用的部位，因此答案是 bill，而不是用来抓捕的 talons。作为对照，笔记下一行讲“白天会被其他鸟赶走”属于第 5 段末句的内容，可见 Hunting 栏的各条备注并非按原文句序排列，需要逐条回到原文核对对应的动作，不能凭段落顺序推测。词性上，bill 在此为可数名词单数，作介词 in 的宾语，题面空格前已有 its 提供限定，照抄原文的 bill 即可。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "can be chased away by other birds during the 11 ________",
          "translation": "在 ________ 期间会被其他鸟赶走。",
          "answer": "day",
          "wordClass": "名词（单数，作介词 during 的宾语，指一天中的某个时段；原文用 in the day，题面改写成 during the ________，填 day 即可，不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "In the day, these small birds sometimes mob drowsy moreporks and chase them away from their roosts; they force the sleepy predators to search for a more peaceful spot."
          },
          "synonyms": [
            "“can be chased away by other birds” 同义替换为原文的 “these small birds sometimes mob drowsy moreporks and chase them away from their roosts”，题面把主动句改为被动 “can be chased away by other birds”，主语换成 morepork",
            "“during the 11 ________” 同义替换为原文的 “In the day”，in the day 与 during the day 意思相同，都表示“白天”",
            "“other birds” 对应原文的 “these small birds”，其具体种类在前文列举为 “robins, grey warblers and fantails”"
          ],
          "locatingTip": "定位：笔记 Hunting 栏中“被其他鸟赶走”这一条对应原文第 5 段末句，句中的 chase them away from their roosts 是关键动作，扫读 chase away 即可锁定。确定答案技巧：本题要填的是时间状语。原文句首明确写着 “In the day”，即“白天”；题面把这一时间状语改写成 during the ________，in 与 during 在这里都表示“在……期间”，因此空格填 day（不加冠词）。作答时有两条自查线索：一是语法上 during 后面需要名词性成分，day 正好符合；二是逻辑上要区分昼夜，原文紧接着说 they force the sleepy predators to search for a more peaceful spot，其中 sleepy（困倦的）也暗示事情发生在白天，与 By day, moreporks sleep in roosts 的作息相呼应。注意不要填 roosts（栖息处，那是地点不是时间），也不要填 night（夜间 morepork 反而在捕食，不会昏睡被围攻）。",
          "analysis": "原文第 5 段末句是本题的取材处，其上下文为：“By day, moreporks sleep in roosts. By night, they hunt a variety of animals … Moreporks are clever hunters, and birds such as robins, grey warblers and fantails can end up as their prey. In the day, these small birds sometimes mob drowsy moreporks and chase them away from their roosts; they force the sleepy predators to search for a more peaceful spot.”（白天，morepork 在栖息处睡觉；夜间则捕食多种动物……morepork 是聪明的猎手，知更鸟、灰莺和扇尾鹟这类小鸟可能沦为它的猎物。白天，这些小鸟有时会围攻昏睡的 morepork，把它们从栖息处赶走，迫使这些困倦的捕食者另找安静的地方）。本题的语法关系正好与第 10 题互为镜像：第 10 题问器官（bill），本题问时段（day），题面把原文的主动结构 these small birds … chase them away 改写成被动结构 can be chased away by other birds，动作的承受者成为主语（即 morepork），而动作发生的时间由原文句首的 In the day 改写为 during the ________，故答案为 day。这一替换在雅思中很常见：in the day 与 during the day 属同义表达，都表示“在白天”，填 day 即完整还原原文信息。注意不要因为题面用了定冠词 the 就试图在前面补写 the 或改写为 daytime，因为答案必须是原文出现的词，且只填一个词。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "attacked 12 ________ that had been introduced to Motuora Island",
          "translation": "袭击了被引入 Motuora 岛的 ________。",
          "answer": "plovers",
          "wordClass": "名词（复数，鸟名；作 attacked 的宾语，并在其后由 that 引导的定语从句修饰，与原文复数形式一致，填 plovers）",
          "locating": {
            "paragraph": "6",
            "quote": "Scientists trying to establish a population of plovers on Motuora Island in New Zealand's Hauraki Gulf were mystified as to why only two birds survived out of the 75 placed there."
          },
          "synonyms": [
            "“attacked 12 ________ that had been introduced to Motuora Island” 同义替换为原文的 “The culprits turned out to be five pairs of moreporks that ate or chased away the new arrivals”，其中 attacked 对应 ate or chased away（吃掉或赶走）",
            "“had been introduced to Motuora Island” 同义替换为原文的 “placed there”（被放到那里）以及前一句的 “establish a population of plovers on Motuora Island”",
            "“Motuora Island” 在原文中为原词复现"
          ],
          "locatingTip": "定位：专有名词 Motuora Island 是极强的定位词，全文只出现在第 6 段，两处都指向同一群鸟，扫读 Motuora 即可锁定整段。确定答案技巧：题干的结构是 attacked（加空格）加 that had been introduced to Motuora Island，需要同时满足三个条件：被袭击的对象、是外来引入 Motuora 岛的、且是被 morepork 攻击的。第 6 段先说科学家在 Motuora 岛上试图建立 plovers（鸻鸟）的种群，75 只只活下 2 只；紧接着揭开谜底：the culprits turned out to be five pairs of moreporks that ate or chased away the new arrivals，可见被吃或赶走的 new arrivals 就是前文的 plovers。ate or chased away 对应题干的 attacked，placed there 对应 had been introduced，空格因此填 plovers。答题时注意三点：一是首字母在句子中间仍保持原文小写 plovers；二是必须用复数形式，因为原文指的是一个种群的多只鸟；三是不要误填 moreporks（袭击者是 morepork，不是被袭击者），也不要用 the new arrivals（那是原文的指代性表达，不是具体的鸟名）。",
          "analysis": "原文第 6 段讲 morepork 扮演了不友好的“东道主”：“Moreporks have proved to be ungracious hosts. Scientists trying to establish a population of plovers on Motuora Island in New Zealand's Hauraki Gulf were mystified as to why only two birds survived out of the 75 placed there. The culprits turned out to be five pairs of moreporks that ate or chased away the new arrivals.”（morepork 被证明是不友善的东道主。科学家们试图在新西兰豪拉基湾的 Motuora 岛上建立一个鸻鸟种群，却困惑于为何放养的 75 只鸟只有两只存活下来。罪魁祸首原来是五对 morepork，它们吃掉了新来者，或把它们赶走）。这一段提供了完整的因果链：被引入的是 plovers（放养 75 只），施害者确认是 five pairs of moreporks，手段是 ate or chased away，对象用 the new arrivals 回指 plovers。题干用 attacked 把“吃掉或赶走”概括为一个动词，用 had been introduced to Motuora Island 概括前两句的“被带到岛上放养”，空格问的就是被袭击的对象，即 plovers。此外要注意 the new arrivals 是名词化指代，指的就是前一句的 plovers，做题时应把指代还原到具体名词再作答，不能直接用 new arrivals 填空；同时 plovers 作为物种名在此为复数、小写，照原文填写即可。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "may be exposed to 13 ________ in their prey",
          "translation": "可能会在它们的猎物体内接触到 ________。",
          "answer": "poison",
          "wordClass": "名词（不可数，作介词 to 的宾语，指蓄积在猎物体内的毒素；原文用 accumulative poison 与 ingested poison，填 poison 一个词，不加冠词也不变复数）",
          "locating": {
            "paragraph": "7",
            "quote": "As moreporks are at the top of the food chain, they could be affected by an accumulative poison by consuming prey that has ingested poison."
          },
          "synonyms": [
            "“may be exposed to 13 ________” 同义替换为原文的 “they could be affected by an accumulative poison”，exposed to（接触到）对应 affected by（受到影响）",
            "“in their prey” 同义替换为原文的 “by consuming prey that has ingested poison”，原文用定语从句说明猎物已经摄入毒素，题面压缩为 in their prey",
            "笔记 Threats（威胁）栏对应原文第 7 段整体，该段讲数量下降、被捕食、农药等威胁"
          ],
          "locatingTip": "定位：笔记 Threats（威胁）栏对应原文第 7 段，题干关键词是 their prey，回到该段找与“猎物、毒素”有关的表述，落在段末一句（consuming prey that has ingested poison）。确定答案技巧：题干说 morepork 可能在猎物体内接触到某种东西，原文对应的句子是 “they could be affected by an accumulative poison by consuming prey that has ingested poison”，其中 by consuming prey that has ingested poison 解释了毒素如何进入 morepork 体内——通过吃掉已经摄入毒素的猎物，这与题干的 in their prey（在它们的猎物身上）完全吻合，故空格填 poison。阅读该段时还要注意上一句 “The use of pesticides is another possible threat to the owls, though not a direct one.”（使用农药是另一种可能的威胁，但不是直接威胁），它交代了威胁来源（农药）并强调“非直接”，正好引出本句的“间接途径”——通过食物链蓄积，两句连读可以确认空格要的是蓄积在猎物体内的 poison，而不是 pesticide 这个来源词。填词时保持不可数名词 poison 的原形。",
          "analysis": "原文第 7 段末尾两句讲农药带来的间接威胁：“The use of pesticides is another possible threat to the owls, though not a direct one. As moreporks are at the top of the food chain, they could be affected by an accumulative poison by consuming prey that has ingested poison.”（农药的使用是猫头鹰面临的另一种可能威胁，不过并非直接威胁。由于 morepork 处于食物链顶端，它们可能因吃掉已摄入毒物的猎物而受到蓄积性毒物的影响）。第一句先点明“农药是威胁但不是直接的”，第二句随即解释“间接”的含义：morepork 位于食物链顶端，毒素先进入它的猎物（prey that has ingested poison），再通过捕食转移到它体内，并因蓄积（accumulative）而构成危害。笔记 Threats 栏写的是 may be exposed to 13 ________ in their prey，其中 in their prey 正对应原文 by consuming prey that has ingested poison 中“猎物已摄入毒物”这一信息，被接触的对象就是 poison，故空格填 poison。本题容易误填的两个词是：pesticides（原文提到的威胁来源，属于外部施加的化学物质，而不是蓄积在猎物体内的那层含义，且是复数形式）和 food chain（那是说明传递路径的名词短语，与 be exposed to 搭配不通）。此外要留意本段前文还提到 stoats、possums、rats 等捕食者，它们属于其他威胁条目（例如第 4 题所依据的 rats），不要与本题的毒素混淆。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
