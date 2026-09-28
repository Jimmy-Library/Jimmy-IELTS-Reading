(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-112", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-112",
  "meta": {
    "examId": "p1-low-112",
    "title": "The Tuatara of New Zealand 新西兰蜥蜴",
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
          "stem": "The two living species of tuatara look alike.",
          "translation": "两种现存的蜥蜴（tuatara）外形相似。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Although the two species appear similar, they have genetic differences."
          },
          "synonyms": [
            "“The two living species of tuatara” 同义替换为原文的 “the two species”：前文已交代 “Now only two species survive in New Zealand.”（如今新西兰只剩两个物种存活），可见 the two species 就是指现存的这两个物种",
            "“look alike” 同义替换为原文的 “appear similar”，二者都是“看起来相似”的意思",
            "原文后半句 “they have genetic differences” 说的是基因层面的差异，与题干所讲的“外形相似”属于两个不同层面，并不构成冲突"
          ],
          "locatingTip": "定位：题干关键词是 two species 与 look alike，第 1 段中后部有一句直接对两个物种作比较，即 “Although the two species appear similar, they have genetic differences.”，扫读时看到 Although 引出的让步从句就可以停下精读。确定答案技巧：本题的判分点是“两个物种外表是否相似”。原文用 Although … appear similar 明确承认两个物种外形相似，与题干的 look alike 方向一致；句末的 genetic differences 只是补充它们在基因上不同，题干根本没提基因，所以不构成矛盾，答案选 TRUE。",
          "analysis": "第 1 段先介绍 tuatara 的古老身份与现存物种：“Now only two species survive in New Zealand. One is the Brothers Island tuatara … The other species is the common tuatara, which inhabits many other offshore islands.”（如今只有两个物种存活于新西兰：一个是兄弟岛蜥蜴，另一个是分布更广的普通蜥蜴），紧接着就是本题定位句：“Although the two species appear similar, they have genetic differences.”（虽然这两个物种看起来相似，但它们在基因上存在差异）。题干 “The two living species of tuatara look alike.” 用 living species 概括前文刚刚交代的 two species（现存两个物种），用 look alike 概括原文的 appear similar。原文的让步结构 Although … appear similar 直接肯定了两者外形相似，正是题干的判断；从句之后的 genetic differences 是作者补充的另一层信息（基因不同），与“外形相似”完全不冲突——生物完全可能“长得像但基因不同”。因此原文与题干信息一致，答案是 TRUE。做题时要学会区分让步句中被承认的部分（appear similar）和转折后的补充信息：本题的答案落在让步部分，不要被 genetic differences 误导。",
          "traps": [
            "为什么不是 FALSE：原文确实提到两个物种 “have genetic differences”（存在基因差异），但题干说的只是“外形相似（look alike）”，而原文用 “appear similar” 恰恰承认了这一点；基因不同与外形相似并不矛盾，属于两个层面的事实，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对两个物种的相似性作了明确、直接的比较（appear similar），信息既存在也与题干一致，属于“已提及且相符”，因此不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Many tuatara bones that have been discovered are millions of years old.",
          "translation": "许多已经发现的蜥蜴骨骼有数百万年的历史。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Tuatara bones have been found in many parts of New Zealand; where dated, they are usually a few hundred to 5,000 years old."
          },
          "synonyms": [
            "“have been discovered” 同义替换为原文的 “have been found”",
            "“Many tuatara bones” 对应原文的 “Tuatara bones have been found in many parts of New Zealand”，数量上同样是“多”",
            "“millions of years old” 与原文的 “a few hundred to 5,000 years old” 直接冲突：原文给出的是几百到 5000 年，题干却抬升到数百万年，量级相差上万倍"
          ],
          "locatingTip": "定位：题干关键词是 bones 与 years old，第 1 段末句同时出现 Tuatara bones 和年代信息，即 “Tuatara bones have been found in many parts of New Zealand; where dated, they are usually a few hundred to 5,000 years old.”。确定答案技巧：先抓原文给这些骨骼定的年代区间——a few hundred to 5,000 years old（几百到 5000 年），再拿题干要求的 millions of years（数百万年）去对照，两者量级完全不同，属于事实冲突，判 FALSE。本题最大的干扰来自同段前半部分的 “an ancient lineage of reptiles called Sphenodontia, which is over 250 million years old” 以及 “living fossils”：那些讲的是这个物种所属的古老板块演化历史，不是“被发现的骨骼”的年代，务必把“物种所属支系的年龄”与“实物骨骼被测定出的年代”分开看。",
          "analysis": "第 1 段末尾两句是本题的全部依据：“Tuatara bones have been found in many parts of New Zealand; where dated, they are usually a few hundred to 5,000 years old. It is not known whether these bones belong to the two living species or to others that are now extinct.”（蜥蜴的骨骼在新西兰许多地方被发现；凡被测定年代的，通常只有几百到 5000 年历史。目前尚不清楚这些骨骼属于现存的这两个物种还是已经灭绝的其他物种）。原文用 where dated 引出明确的时间区间 a few hundred to 5,000 years old，而题干把这一区间替换成 millions of years old。数百万年与几百至 5000 年之间差了好几个数量级，属于被原文直接推翻的表述，因此答案是 FALSE。要注意原文的干扰信息有两处：一是同段第 3 句说 tuatara 所属的 Sphenodontia 支系 “is over 250 million years old”，二是第 4 句称它们为 “living fossils”；这两句谈的都是物种谱系年代久远、形态像化石，而不是出土骨骼的实测年代。判断题失分往往就失在这种“同一段里两个数字、一个属于物种、一个属于骨骼”的混淆上，务必据实核对题干的主语——本题主语是 bones。",
          "traps": [
            "为什么不是 TRUE：原文明确写出被定年的骨骼 “are usually a few hundred to 5,000 years old”，与题干的 millions of years 相差悬殊，信息相互矛盾，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不但在 where dated 之前交代了骨骼的发现范围，还直接给出具体年代区间（几百到 5000 年），属于已有明确交代且与题干冲突，因此应为 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The tails of male tuatara are a different colour from those of female tuatara.",
          "translation": "雄性蜥蜴的尾巴与雌性蜥蜴的尾巴颜色不同。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Males are larger than females and have more developed spines in the crest along the neck, back and tail."
          },
          "synonyms": [
            "“The tails of male tuatara” 在原文中只能找到 tail 一词，且出自 “the crest along the neck, back and tail”（颈部、背部和尾部一带的脊冠）",
            "“a different colour” 在原文中没有任何对应表达：原文比较雌雄时给出的差异只有体型更大（larger）与脊刺更发达（more developed spines）两项",
            "原文的 “more developed spines”（更发达的脊刺）谈的是结构而非颜色，不能与 colour 对应"
          ],
          "locatingTip": "定位：题干有三个实词 male、female、tail，第 2 段末句 “Males are larger than females and have more developed spines in the crest along the neck, back and tail.” 一次全部命中，其中 tail 在全篇仅此一处出现。确定答案技巧：找到句子后关键要看题干问的是什么——它问的是尾巴的“颜色（colour）”。原文在比较雌雄时给出的差异是体型（Males are larger than females）和脊刺发育程度（more developed spines），从头到尾没有出现任何颜色词，属于信息缺失，因此判 NOT GIVEN。千万不要因为原文的 tail 一词出现了就以为已经回答了颜色问题。",
          "analysis": "第 2 段讲 tuatara 的解剖特征，本题落在最后一句：“Males are larger than females and have more developed spines in the crest along the neck, back and tail.”（雄性比雌性体型更大，且在沿颈部、背部和尾部延伸的脊冠上长有更发达的脊刺）。这句确实把雄性与雌性作了比较，也出现了 tail 一词，但比较的内容只有两点——体型大小（larger）和脊刺发育程度（more developed spines in the crest）；crest 是脊冠，讲的是沿身体背部中线的一列突起，与尾巴的“颜色”毫无关系。全段其余内容——头骨开口模式、血液中独特的血红蛋白、雄性没有外生殖器、体长 30 至 75 厘米、体重 250 至 1200 克——也没有任何关于体色的描写。题干凭空引入 colour（颜色）这一信息，原文既没有说雌雄尾巴颜色不同，也没有说相同，属于纯信息缺失，答案为 NOT GIVEN。判断题中，一旦题干加入了原文没有的维度（这里从“结构差异”跳到“颜色差异”），就必须判 NOT GIVEN，而不能因为同一句里出现过相关名词就误判为 TRUE 或 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文只在描述脊冠时提到 tail，说的是脊刺更发达（more developed spines），并没有任何关于尾巴颜色的描述，无法支撑“颜色不同”这一说法。",
            "为什么不是 FALSE：FALSE 需要原文给出相反信息，即“雌雄尾巴颜色相同”，而原文对尾巴颜色只字未提，仅仅是没说，所以也不能选 FALSE。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The female tuatara lays her eggs in a burrow.",
          "translation": "雌性蜥蜴把卵产在洞穴（burrow）里。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Tuatara mate in late summer, and the female usually lays 6–10 eggs the following spring in a shallow ground-level nest. She may guard the nest for a few nights, then return to her underground burrow."
          },
          "synonyms": [
            "“lays her eggs” 同义替换为原文的 “lays 6–10 eggs”",
            "“in a burrow” 与原文的 “in a shallow ground-level nest”（产在一个浅浅的地面巢穴里）相互冲突",
            "原文随后的 “return to her underground burrow” 是产卵之后回洞休息的动作，burrow 在这里指母蜥自己的栖身处，而不是产卵地点"
          ],
          "locatingTip": "定位：题干关键词是 female、lays eggs、burrow，第 3 段第 2、3 句把产卵地点交代得清清楚楚，即 “the female usually lays 6–10 eggs the following spring in a shallow ground-level nest. She may guard the nest for a few nights, then return to her underground burrow.”。确定答案技巧：本题考的正是 nest 与 burrow 的地点的区分。原文说卵产在 “a shallow ground-level nest”，到下一句才出现 burrow，但那是她守候巢穴几夜之后 “return to her underground burrow”（回到自己的地下洞穴）。产卵地点是地面浅巢，回洞是产卵之后的动作，题干把两个地点混为一谈，属于事实冲突，判 FALSE。做题时遇到 nest、burrow、den 这类近义栖息词，必须按原文各自搭配的动作逐一核对。",
          "analysis": "第 3 段讲繁殖过程：先是雄性昂首阔步求偶，接着 “Tuatara mate in late summer, and the female usually lays 6–10 eggs the following spring in a shallow ground-level nest. She may guard the nest for a few nights, then return to her underground burrow.”（蜥蜴在夏末交配，雌性通常在次年春天把 6 到 10 枚卵产在一个浅浅的地面巢穴中。她可能会守候这个巢穴几夜，然后回到自己的地下洞穴）。原文的时间与动作链条非常清楚：产卵（lays eggs）发生在 “a shallow ground-level nest”，也就是贴着地面的巢穴。之后才是 “return to her underground burrow”，即母蜥离开巢穴回到自己平日的洞穴居住。题干的落点是把产卵地点说成 in a burrow，与原文的 ground-level nest 直接相反；虽然同段确实有 burrow 这个词，但它出现在产卵之后、并且是母蜥自己的居所。这种“同段出现多个近似地点词”是判断题的经典陷阱，判断时必须以动作与地点的搭配为准——lays eggs 搭配的是 nest，return to 搭配的才是 burrow。因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确写产卵地点是 “a shallow ground-level nest”，而 burrow 出现在下一句，是母蜥产卵并守巢之后返回的住所；题干把产卵地点说成 burrow，与原文相反。",
            "为什么不是 NOT GIVEN：原文对产卵地点有明确而具体的交代（shallow ground-level nest），信息已经给出并与题干矛盾，因此不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "There are more female hatchlings than male hatchlings.",
          "translation": "孵化出来的雌性幼蜥比雄性幼蜥更多。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "warmer eggs are more likely to produce males, while cooler eggs tend to produce females."
          },
          "synonyms": [
            "“hatchlings” 在原文中对应定位句所在句前半部分的 “the sex of hatchlings” 以及定位句里的 “males” 与 “females”",
            "“more female hatchlings than male hatchlings” 这一数量对比在原文没有对应表达：原文只讲温度影响性别的可能性（more likely / tend to），属于条件与倾向，不是雌雄数量的统计"
          ],
          "locatingTip": "定位：题干关键词是 female、male、hatchlings，第 3 段第 5 句整句都在讲幼蜥性别与孵化温度的关系，即 “Evidence indicates that the sex of hatchlings is determined by both genetic and environmental factors: warmer eggs are more likely to produce males, while cooler eggs tend to produce females.”，扫到 hatchlings 与 males / females 即可锁定。确定答案技巧：先看清原文给的是哪一类信息——它讲的是“性别由遗传与环境因素共同决定，偏暖的卵更可能孵出雄性，偏凉的卵更倾向于孵出雌性”，是概率性规律；题干问的却是“雌性幼蜥的总数比雄性多”，属于整体数量比较。原文既没有统计各岛的雌雄数量，也没有比较两者多少，信息缺失，因此判 NOT GIVEN。要特别注意 more likely to produce 中的 more 修饰的是“可能性（likely）”，不要误读成“数量更多”。",
          "analysis": "第 3 段后半部分从巢穴写到孵化的结果：“The eggs incubate for about a year, so hatchlings emerge just as new eggs are being laid the next season. Evidence indicates that the sex of hatchlings is determined by both genetic and environmental factors: warmer eggs are more likely to produce males, while cooler eggs tend to produce females. The hatchlings receive no parental care and must find their own food.”（卵约需孵化一年，因此幼蜥破壳时正值下一季新卵产出。证据表明幼蜥的性别由遗传与环境因素共同决定：较暖的卵更可能孵出雄性，较凉的卵则倾向于孵出雌性。幼蜥得不到任何亲代照料，必须自己觅食）。原文关于性别的唯一信息是“温度影响雌雄的倾向性”：warmer eggs are more likely to produce males，cooler eggs tend to produce females。这是对单个卵的条件性预测，谈的是可能性高低，既没有给出雌雄的实际数量，也没有给出任何比例。题干却要求一个总体比较——“雌性幼蜥比雄性多（more … than …）”，这在原文中找不到任何依据。按判断题规则，原文未提及的信息即 NOT GIVEN，因此本题不能选 TRUE 或 FALSE。做题时一旦看到题干含 more / less 这类比较结构，就要回原文确认是否真的存在相应的数量统计，否则多为一厢情愿的推断。",
          "traps": [
            "为什么不是 TRUE：原文只说明暖卵更容易出雄性、凉卵更容易出雌性，完全没有给出野外雌性与雄性幼蜥的数量或比例，无法证明雌性更多。",
            "为什么不是 FALSE：原文也没有说雄性幼蜥更多，也没有用任何方式否认“雌性更多”，仅仅是没有这项统计，因此不构成矛盾，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Once they have hatched, young tuatara have to look after themselves.",
          "translation": "一旦孵化出来，年幼的蜥蜴就必须自己照顾自己。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The hatchlings receive no parental care and must find their own food."
          },
          "synonyms": [
            "“Once they have hatched” 对应原文的 “The hatchlings”（刚孵出的小蜥蜴），hatchlings 即“已孵化的幼体”",
            "“young tuatara” 同义替换为 “The hatchlings”",
            "“have to look after themselves” 同义替换为 “receive no parental care and must find their own food”：no parental care 对应“没人照顾”，must find their own food 对应“自己觅食”"
          ],
          "locatingTip": "定位：题干关键词是 hatched 与 look after themselves，第 3 段最后一句是全文唯一交代幼蜥孵出后处境的地方，即 “The hatchlings receive no parental care and must find their own food.”。确定答案技巧：本题属于“反义正说”型改写——原文用否定式 receive no parental care（得不到任何亲代照料）加上 must find their own food（必须自己找食物）表达“无人照顾”，题干换成肯定式的 have to look after themselves（必须自己照顾自己），两种说法意思完全一致，故选 TRUE。",
          "analysis": "第 3 段以幼蜥的处境作结：“The hatchlings receive no parental care and must find their own food.”（幼蜥得不到任何亲代照料，必须自己寻找食物）。题干 “Once they have hatched, young tuatara have to look after themselves.” 用 Once they have hatched 对应原文的 hatchlings（已孵化的小蜥蜴），用 young tuatara 对应 hatchlings，再用 have to look after themselves 概括原文的 receive no parental care 与 must find their own food 两层意思：前者说明没有父母照料，后者说明必须自行觅食，两条合起来就是“必须自己照顾自己”。原文与题干之间是典型的正反同义改写，信息方向完全一致，答案 TRUE。这类题容易被“原文用否定句、题干用肯定句”的形式差异干扰，判断时应比较语义而非句式：receive no parental care 与 look after themselves 说的是同一件事的两个角度。",
          "traps": [
            "为什么不是 FALSE：原文明确说幼蜥 receive no parental care（得不到亲代照料），与题干“必须自己照顾自己”方向一致，全段没有任何“父母会照料幼蜥”的表述，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文对幼蜥孵出后的处境有明确交代（无亲代照料、必须自行觅食），信息充分且与题干相符，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 笔记填空（ONE WORD AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "many live to at least 7 ________ years",
          "translation": "许多个体至少能活到 ________ 年。",
          "answer": "80",
          "wordClass": "数词（表示年数的数字，与其后的名词 years 构成数量短语，作介词 to 的宾语，说明寿命长度；原文写作阿拉伯数字 80，空格后已给出名词 years，故只填数字本身）",
          "locating": {
            "paragraph": "4",
            "quote": "Their maximum lifespan is uncertain, but many individuals have lived to 80 years while still looking vigorous and healthy."
          },
          "synonyms": [
            "“maximum lifespan unknown” 对应原文的 “Their maximum lifespan is uncertain”，uncertain 与 unknown 同义",
            "“many live to at least …” 同义替换为原文的 “many individuals have lived to 80 years”，原文直接用具体数字给出可达的年龄",
            "“look after” 类的改写不涉及本题；此处关键是把笔记的概括说法与原文的具体数字对应起来"
          ],
          "locatingTip": "定位：笔记第一栏的关键词是 Lifespan 与 maximum lifespan unknown，回到第 4 段第 2 句 “Their maximum lifespan is uncertain, but many individuals have lived to 80 years while still looking vigorous and healthy.”。确定答案技巧：先用笔记里已经给出的 “maximum lifespan unknown” 与原文 uncertain 对上，确认定位无误；再让 “many live to at least [7] years” 对应原文的 “many individuals have lived to 80 years”，空格要填的就是原文那个具体年数，即 80。笔记中的 at least 只是对“许多个体都能活到 80 岁甚至更久”这一事实的概括。作答时按原文写阿拉伯数字 80，不要写 eighty，也不要再加 years（空格后已有 years）。",
          "analysis": "第 4 段首两句讲寿命：“Tuatara live a long time, reaching reproductive maturity at about 15 years and breeding for many decades. Their maximum lifespan is uncertain, but many individuals have lived to 80 years while still looking vigorous and healthy.”（蜥蜴寿命很长，约 15 岁达到生殖成熟，之后可繁殖数十年。它们的最高寿命尚不确定，但许多个体活到了 80 岁，看上去依然健壮）。笔记 Lifespan 栏的两条小项分别对应这两句：第一条 “maximum lifespan unknown” 对应 maximum lifespan is uncertain，第二条 “many live to at least [7] years” 对应 many individuals have lived to 80 years while still looking vigorous and healthy。原文用 but 转折，把话题从“上限不明”落到“实际有据的年龄”，并给出确切数字 80；既然 many individuals 都能活到这个岁数，笔记概括为 at least（至少）是合理的，空格所填即原文数字 80。从词性看，空格后紧跟单位词 years，所以答案只需数词本身，不必带单位；按 ONE WORD AND/OR A NUMBER 的限制，写 80 即符合要求。同段首句还出现 about 15 years（性成熟年龄），那是繁殖信息不是寿命信息，注意区分，不要误填 15。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "attack other creatures with their 8 ________",
          "translation": "用它们的 ________ 攻击其他生物。",
          "answer": "teeth",
          "wordClass": "名词（复数形式，在笔记条目中与前面的 their 构成名词短语，作介词 with 的宾语，指蜥蜴的主要攻击武器；原文用复数 teeth，不能写成单数 tooth）",
          "locating": {
            "paragraph": "4",
            "quote": "Their teeth are their chief weapons, and a bite can cause serious injury."
          },
          "synonyms": [
            "“attack other creatures” 同义替换为原文的 “a bite can cause serious injury”，咬（bite）即攻击行为的具体表现",
            "“with their …” 对应原文主语位置的 “Their teeth are their chief weapons”，chief weapons 说明牙齿就是它们攻击所用的工具",
            "“other creatures” 对应原文中会被 bite（咬）伤的对象，属泛指，不涉及具体名词替换"
          ],
          "locatingTip": "定位：笔记 Behaviour 栏写着 “attack other creatures with their 8 …”，回第 4 段寻找与攻击、武器相关的表述，即 “Their teeth are their chief weapons, and a bite can cause serious injury.”。确定答案技巧：原文用 chief weapons（主要武器）点明牙齿的用途，与题干 attack other creatures with their … 正好对应，因此空格填原文的名词 teeth。注意原文用的是复数形式 teeth，且题干空格前是 their，语法上也要求复数，所以不能写 tooth；同时受 ONE WORD AND/OR A NUMBER 的限制只能填一个词，抄原文 teeth 即可。",
          "analysis": "第 4 段在讲领地行为时写道：“Both sexes are territorial; males aggressively defend their range by posturing and, if necessary, fighting. Their teeth are their chief weapons, and a bite can cause serious injury.”（雌雄均有领地性；雄性通过摆姿态、必要时打斗来积极捍卫自己的地盘。牙齿是它们的主要武器，被咬一口可能造成严重伤害）。笔记 Behaviour 栏第一条 “attack other creatures with their [8]” 概括的正是 “Their teeth are their chief weapons, and a bite can cause serious injury.” 这两层信息：chief weapons 说明牙齿是攻击工具，a bite can cause serious injury 说明伤害由咬（即牙齿）造成。因此空格应填 teeth。语法层面，空格前是物主代词 their，其后需要名词且通常是复数（指牙齿这一复数概念）——原文本身用的就是复数 teeth，直接照抄最稳妥；填 tooth 会因为与原文用词不符而可能被判错。填写时保持原文形式小写 teeth，不加冠词、不加限定词。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "eat young 9 ________ that share the same burrows, as well as invertebrates and reptiles",
          "translation": "吃与它们共用洞穴的幼年 ________，以及无脊椎动物和爬行动物。",
          "answer": "seabirds",
          "wordClass": "名词（复数，被前面的形容词 young 修饰，两者一起构成 eat 的宾语，其后 that share the same burrows 是修饰它的定语从句，指与蜥蜴共用洞穴的幼鸟；保持原文复数形式）",
          "locating": {
            "paragraph": "4",
            "quote": "Tuatara are carnivorous, feeding on invertebrates, lizards and the baby seabirds with which they often share burrows."
          },
          "synonyms": [
            "“eat” 同义替换为原文的 “feeding on”",
            "“young …” 同义替换为原文的 “the baby seabirds”，baby 与 young 同义",
            "“that share the same burrows” 同义替换为原文的 “with which they often share burrows”",
            "“as well as invertebrates and reptiles” 对应原文的 “invertebrates, lizards”：invertebrates 原词复现，lizards 属于爬行动物，对应 reptiles"
          ],
          "locatingTip": "定位：笔记第二行末尾并列了 “as well as invertebrates and reptiles”，这正是原文 “feeding on invertebrates, lizards and the baby seabirds …” 的改写，扫读第 4 段末句即可命中。确定答案技巧：把两处并列成分对齐——题干 “eat young [9] that share the same burrows, as well as invertebrates and reptiles”，原文 “feeding on invertebrates, lizards and the baby seabirds with which they often share burrows”。invertebrates 两处原词复现；题干的 reptiles 对应原文的 lizards；那么 young [9] 就只能对应 the baby seabirds（baby 与 young 同义，share burrows 也是同义改写）。答案写 seabirds。词数控制很关键：ONE WORD AND/OR A NUMBER 只允许一个词，所以不能写 baby seabirds 或 sea birds。",
          "analysis": "第 4 段末句完整交代食性：“Tuatara are carnivorous, feeding on invertebrates, lizards and the baby seabirds with which they often share burrows.”（蜥蜴是食肉动物，以无脊椎动物、蜥蜴以及与它们经常共用洞穴的幼年海鸟为食）。笔记 Behaviour 栏第二条把这一句拆成带空格的句式：“eat young [9] that share the same burrows, as well as invertebrates and reptiles”。逐项核对可知：feeding on 对应 eat；the baby seabirds 对应 young（baby 即 young）加空格；with which they often share burrows 对应 that share the same burrows；invertebrates 原词对应 invertebrates；lizards 对应 reptiles（蜥蜴是爬行动物）。所有对应关系都指向同一个答案 seabirds。这里还要注意原文的从属结构：with which they often share burrows 是修饰 the baby seabirds 的定语从句，说明“共用洞穴”指的是这些幼鸟，与题干 “that share the same burrows” 的修饰对象完全一致。答案写复数 seabirds，保持原文用词，不加定冠词、不加修饰语。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "abundant until rats were introduced by 10 ________ people",
          "translation": "在老鼠被 ________ 人引入之前，数量一直很多。",
          "answer": "Polynesian",
          "wordClass": "形容词（专有形容词，修饰后面的 people，指波利尼西亚人；首字母必须大写）",
          "locating": {
            "paragraph": "5",
            "quote": "Tuatara were once widespread and abundant on the New Zealand mainland, but when Polynesian settlers arrived (about 1250–1300 AD) they brought Pacific rats, which killed tuatara."
          },
          "synonyms": [
            "“abundant until” 对应原文的 “were once widespread and abundant … but when …”，but when 引出数量由盛转衰的时间点",
            "“rats were introduced by … people” 同义替换为原文的 “they brought Pacific rats”：they 指前文的 Polynesian settlers，brought 即 introduced",
            "“people” 是原文 settlers 的概括说法，用来避免与空格前的修饰语重复"
          ],
          "locatingTip": "定位：笔记 Population 栏的关键词是 rats were introduced，第 5 段首句同时出现 Polynesian、settlers 与 rats，即 “Tuatara were once widespread and abundant on the New Zealand mainland, but when Polynesian settlers arrived (about 1250–1300 AD) they brought Pacific rats, which killed tuatara.”。确定答案技巧：题干用被动结构 “rats were introduced by [10] people”，还原成原文的主动句就是 “Polynesian settlers … brought Pacific rats”，因此空格要填的是修饰 people 的那一个词，即 Polynesian。题干把 settlers 换成 people，正好把空格留给了修饰成分。填写时保留原文首字母大写，且只写一个词（不要写成 Polynesian settlers 或 Polynesians）。",
          "analysis": "第 5 段追溯 tuatara 由盛转衰的过程：“Tuatara were once widespread and abundant on the New Zealand mainland, but when Polynesian settlers arrived (about 1250–1300 AD) they brought Pacific rats, which killed tuatara. By the time of European settlement in the 1840s, tuatara were almost extinct on the mainland.”（蜥蜴曾在新西兰本土大陆分布广泛、数量众多，但约公元 1250 至 1300 年波利尼西亚定居者到来时，他们带来了太平洋鼠，鼠类杀死了蜥蜴。到 1840 年代欧洲人定居时，本土大陆上的蜥蜴几乎灭绝）。笔记 Population 栏第一条 “abundant until rats were introduced by [10] people”，把原文的主动句 “Polynesian settlers … brought Pacific rats” 改写成被动式 “rats were introduced by … people”，动作由谁发出就成了空格的内容；原文中带来鼠类的是 Polynesian settlers，因此答案是 Polynesian。两处细节需留意：其一，原文明确用括号给出时间（about 1250–1300 AD），与笔记的 abundant until 呼应，可辅助验证；其二，题干已经给出了 people 作中心词，填 settlers 会与 people 重复且不符合 ONE WORD 限制，所以只能填修饰词 Polynesian，并且按专有形容词规则首字母大写。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "by the 1840s, hardly any tuatara were found on the 11 ________",
          "translation": "到 19 世纪 40 年代，在 ________ 上几乎已经找不到蜥蜴了。",
          "answer": "mainland",
          "wordClass": "名词（单数，与前面的定冠词 the 构成名词短语，作介词 on 的宾语，指新西兰本土大陆；原文即带 the，题干空格前已给出 the，故只填名词本身）",
          "locating": {
            "paragraph": "5",
            "quote": "By the time of European settlement in the 1840s, tuatara were almost extinct on the mainland."
          },
          "synonyms": [
            "“by the 1840s” 同义替换为原文的 “By the time of European settlement in the 1840s”",
            "“hardly any tuatara were found” 同义替换为原文的 “tuatara were almost extinct”，almost extinct（几乎灭绝）与 hardly any were found 同义",
            "“on the …” 对应原文的 “on the mainland”"
          ],
          "locatingTip": "定位：笔记里的时间 1840s 在文中十分醒目，第 5 段第 2 句 “By the time of European settlement in the 1840s, tuatara were almost extinct on the mainland.” 直接给出答案。确定答案技巧：题干 “by the 1840s, hardly any tuatara were found on the [11]” 与原文 “tuatara were almost extinct on the mainland” 是同义改写，almost extinct 对应 hardly any were found，地点词原样取 mainland。注意本段与第 6 段还出现另外几处地点（near-shore islands、North Brother Island、Cook Strait 等），但只有 mainland 与 1840 年欧洲人定居这一时间点搭配，答案唯一。",
          "analysis": "第 5 段末两句是本题依据：“By the time of European settlement in the 1840s, tuatara were almost extinct on the mainland. Some islands provided temporary refuges, but these too were eventually invaded by rats and other mammalian predators.”（到 1840 年代欧洲人定居时，蜥蜴在新西兰本土大陆上几乎灭绝。一些岛屿曾提供暂时的庇护所，但这些岛屿最终也被鼠类和其他哺乳类天敌入侵）。笔记 Population 栏第二条 “by the 1840s, hardly any tuatara were found on the [11]” 与原文第二句逐项对应：时间 by the 1840s 对应 By the time of European settlement in the 1840s；hardly any … were found 对应 were almost extinct；空格所在的地点与原文 on the mainland 对应，故填 mainland。要注意紧随其后的下一句提到 Some islands（一些岛屿）曾作为临时庇护所，但那是另一处信息，且与 1840 年本土灭绝这一句并不等同；题干已给足时间线索，填 mainland 才与原文吻合。答案为一个单词，保持原文小写，无需加冠词（题干已有 the）。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "islands off the north-eastern coast and in Cook Strait are now home to the 12 ________ tuatara",
          "translation": "东北海岸外以及库克海峡中的一些岛屿，如今是 ________ 蜥蜴的家园。",
          "answer": "common",
          "wordClass": "形容词（修饰 tuatara，指分布较广的那个物种；原文写作小写 common，填写时保持原样）",
          "locating": {
            "paragraph": "6",
            "quote": "A few, such as the Poor Knights Islands off the north-eastern coast of New Zealand and some islands in Cook Strait, still support the common tuatara."
          },
          "synonyms": [
            "“islands off the north-eastern coast and in Cook Strait” 同义替换为原文的 “the Poor Knights Islands off the north-eastern coast of New Zealand and some islands in Cook Strait”",
            "“are now home to” 同义替换为原文的 “still support”（仍然供养着、栖息着）",
            "“the … tuatara” 中留空的定语即原文的 common"
          ],
          "locatingTip": "定位：笔记同时给出两处地理信息——off the north-eastern coast 与 in Cook Strait，第 6 段第 3 句把两者并列在同一句话里（Poor Knights Islands … and some islands in Cook Strait），扫读专有地名即可一步锁定。确定答案技巧：题干把原文的主动表达 “still support the common tuatara” 改成 “are now home to the [12] tuatara”，still support 对应 are now home to，剩下的名词短语 the common tuatara 中 tuatara 已在空格后出现，需要补的正是修饰它的形容词 common。还要结合笔记上下文排除：全篇只有两种蜥蜴，笔记下一行专门写 “Brothers Island tuatara found only on North Brother Island”，说明本行问的不是它，而是分布较广的 common tuatara。",
          "analysis": "第 6 段交代蜥蜴退守离岸小岛后的分布：“Gradually tuatara became confined to 32 near-shore islands. Many of these islands were tiny, some only one hectare in size. A few, such as the Poor Knights Islands off the north-eastern coast of New Zealand and some islands in Cook Strait, still support the common tuatara. The Brothers Island tuatara survived only on North Brother Island, but new populations have been created on Titi Island in the Marlborough Sounds and on Somes Island in Wellington Harbour.”（蜥蜴逐渐被限制在 32 个近岸岛屿上，其中许多小岛面积很小，有的仅一公顷。少数岛屿，例如新西兰东北海岸外的 Poor Knights 群岛以及库克海峡中的一些岛屿，至今仍供养着普通蜥蜴。兄弟岛蜥蜴仅存于北兄弟岛，但已在马尔堡峡湾的 Titi 岛和惠灵顿港的 Somes 岛建立了新种群）。笔记该行 “islands off the north-eastern coast and in Cook Strait are now home to the [12] tuatara” 正是第 3 句的改写：地理信息原样保留，still support 换成 are now home to，空格留给了物种名前的修饰语，即 common。这里的关键在于分清两个物种的分布：common tuatara 分布在这些近岸岛屿上，Brothers Island tuatara 只存活于北兄弟岛（笔记下一行专列此条）。答案写小写的 common 一个词。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "density of tuatara on Stephens Island is up to 13 ________ per hectare",
          "translation": "斯蒂芬斯岛上蜥蜴的密度最高可达每公顷 ________ 只。",
          "answer": "2500",
          "wordClass": "数词（表示每公顷个体数量的数字，与前面的 up to 构成数量短语，在系动词 is 之后作表语，其后 per hectare 说明单位；原文写作 2,500，答案表为 2500，按答案表原样填写数字）",
          "locating": {
            "paragraph": "7",
            "quote": "The largest population is on Stephens Island, where numbers reach up to 2,500 per hectare in some areas, with a total of at least 30,000 individuals."
          },
          "synonyms": [
            "“the largest population” 与 “on Stephens Island” 在原文原词复现，是笔记该行的定位锚点",
            "“density … is up to” 同义替换为原文的 “numbers reach up to”，reach up to 即“最高达到”",
            "“per hectare” 在原文原词复现，说明所填数字的单位是每公顷"
          ],
          "locatingTip": "定位：笔记最后一行给出专有地名 Stephens Island，回第 7 段第 4 句 “The largest population is on Stephens Island, where numbers reach up to 2,500 per hectare in some areas, with a total of at least 30,000 individuals.” 即可。确定答案技巧：题干 “density of tuatara on Stephens Island is up to [13] per hectare” 与原文 “numbers reach up to 2,500 per hectare” 逐项对应，reach up to 对应 is up to，数字 2,500 就是密度上限，按答案表写成 2500（不带千位逗号）。同句还有两个干扰数字：30,000（该岛个体总数）以及下一句的 50,000–100,000（所有岛屿的估计总量），但题干限定 per hectare，只有 2,500 符合，切勿填错。",
          "analysis": "第 7 段讲种群密度：“Tuatara can live in remarkably dense populations. Most tuatara islands support 50–100 individuals per hectare, so an island of just 10 hectares may hold hundreds. Larger islands rich in seabirds and invertebrates—key tuatara prey—may support even greater densities. The largest population is on Stephens Island, where numbers reach up to 2,500 per hectare in some areas, with a total of at least 30,000 individuals. Overall, the tuatara population across all islands is estimated at 50,000–100,000.”（蜥蜴能生活在密度极高的种群中。多数蜥蜴岛屿每公顷可容纳 50 至 100 只，因此仅 10 公顷的岛就可能容纳数百只。海鸟与无脊椎动物丰富的大岛可支撑更高的密度。最大的种群在斯蒂芬斯岛，某些区域的数量高达每公顷 2500 只，总数至少 30000 只。总体而言，所有岛屿上的蜥蜴数量估计在 50000 至 100000 只之间）。笔记该行 “density of tuatara on Stephens Island is up to [13] per hectare” 直接对应 “where numbers reach up to 2,500 per hectare in some areas”，reach up to 与 is up to 同义，所填数字为 2,500，按答案表形式写 2500。答题时要特别注意同句和邻近句子里的其他数字：30,000 是该岛的总只数、50–100 是多数岛屿的密度区间、50,000–100,000 是全岛群总量，题干已经用 per hectare 把范围锁死，只有表示每公顷密度的数字才符合。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
