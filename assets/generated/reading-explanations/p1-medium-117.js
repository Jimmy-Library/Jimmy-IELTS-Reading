(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-117", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-117",
  "meta": {
    "examId": "p1-medium-117",
    "title": "What Lucy Taught Us 露西化石",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Donald Johanson was uncertain about the nature of the elbow bone he found in Afar.",
          "translation": "唐纳德·约翰逊（Donald Johanson）对他在阿法尔（Afar）发现的那块肘部骨头的性质并不确定。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Surveying the area, palaeoanthropologist Donald Johanson spotted a small piece of bone. Straight away, he recognised that it came from the elbow of a human ancestor."
          },
          "synonyms": [
            "“was uncertain about the nature of the elbow bone” 与原文 “Straight away, he recognised that it came from the elbow of a human ancestor” 正面冲突：原文是“立刻认出”，题干却说“不确定”",
            "“the elbow bone he found in Afar” 对应原文的 “spotted a small piece of bone” 以及紧接的 “it came from the elbow of a human ancestor”",
            "“Afar” 对应原文第 1 段首句的地点 “in an isolated spot in the Afar region of Ethiopia”"
          ],
          "locatingTip": "定位：题干含专有名词 Donald Johanson 与地名 Afar，两者都在第 1 段开头出现，扫读时盯住大写人名即可锁定该段前两句。确定答案技巧：本题的判分点是题干的态度词 uncertain（不确定）。原文用了 Straight away（立刻、马上）加 recognised（认出）两个词，明确表示约翰逊一眼就认出这块骨头来自人类祖先的肘部，是“高度确定”而非“不确定”，两者方向相反，属于事实矛盾，因此判 FALSE。判断题中如果题干出现 unsure、uncertain、doubted、was not sure 这类表示“不确定”的措辞，一定要回原文核对是否真有犹豫、迟疑的表述；本题原文的 straight away 正是最直接的反证。",
          "analysis": "第 1 段前三句为本句的定位与判分依据：“On a Sunday morning in late November 1974, a team of scientists were digging in an isolated spot in the Afar region of Ethiopia. Surveying the area, palaeoanthropologist Donald Johanson spotted a small piece of bone. Straight away, he recognised that it came from the elbow of a human ancestor.”（1974 年 11 月下旬的一个星期天早晨，一队科学家正在埃塞俄比亚阿法尔地区一处偏僻地点发掘。在勘察该地区时，古人类学家唐纳德·约翰逊发现了一小块骨头。他立刻认出这块骨头来自人类祖先的肘部。）题干将其改写为“约翰逊对他在阿法尔发现的肘部骨头的性质并不确定（was uncertain about the nature of the elbow bone）”。原文的 spotted（发现）之后紧接着就是 Straight away, he recognised（他立刻认出），时间副词 straight away 与动词 recognised 一起构成“迅速且明确地判断”的含义，与 uncertain（不确定）在语义上完全对立。因此本题属于“原文有相反信息”的 FALSE，而不是“信息缺失”的 NOT GIVEN。做题时还要注意，第 1 段后面约翰逊说的话（“As I looked up the slopes to my left, I saw bits of the skull…”）是补充发现更多骨头，与“是否确定骨头性质”这一判分点无关，不要被它带偏。",
          "traps": [
            "为什么不是 TRUE：原文用 Straight away 和 recognised 明确写出约翰逊当场就认出这是人类祖先的肘部骨头，态度是确定的；题干的 uncertain 与原文的立即辨认恰好相反，选 TRUE 没有依据。",
            "为什么不是 NOT GIVEN：原文对“约翰逊当时是否确定骨头的性质”这一点有非常明确的交代（Straight away, he recognised…），并非未提及；既然有信息且与题干相反，就应判 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Several bones were found by Donald Johanson at the same site in Afar.",
          "translation": "唐纳德·约翰逊在阿法尔同一地点发现了若干块骨头。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "\"As I looked up the slopes to my left, I saw bits of the skull, a chunk of jaw, a couple of vertebrae,\" says Johanson."
          },
          "synonyms": [
            "“Several bones” 同义替换为原文的 “bits of the skull, a chunk of jaw, a couple of vertebrae”，即多个不同部位的骨头",
            "原文的 “And there were plenty more.” 也支持“骨头数量多”这一含义",
            "“the same site in Afar” 对应原文的 “an isolated spot in the Afar region of Ethiopia”，指同一次发掘的同一地点"
          ],
          "locatingTip": "定位：题干的关键词是专有名词 Donald Johanson 与地名 Afar，直接锁定第 1 段。确定答案技巧：要确认“是否发现了多块骨头”，就要在第 1 段里数原文列举的骨头数量。原句用逗号并列三个名词短语——bits of the skull（头骨碎片）、a chunk of jaw（一块下颌）、a couple of vertebrae（几节脊椎），加上前面发现的肘部骨头，得数远超一块；后面还有一句 “And there were plenty more.”（还有更多）。题干的 several bones 与这一列举完全吻合，故判 TRUE。做题提醒：判断题里的数量词（several、a number of、many）要在原文找到对应的多项列举或复数表达来支撑，本题的复数并列结构就是依据。",
          "analysis": "第 1 段是本题唯一相关段落。原文先写约翰逊发现肘部骨头，随后用引语补充：“And there were plenty more. \"As I looked up the slopes to my left, I saw bits of the skull, a chunk of jaw, a couple of vertebrae,\" says Johanson.”（还有更多。约翰逊说：“当我向左边的斜坡望去，我看到头骨碎片、一块下颌、几节脊椎。”）题干说“约翰逊在阿法尔同一地点发现了若干块骨头（Several bones were found by Donald Johanson at the same site in Afar）”。原文的列举中 skull（头骨）、jaw（下颌）、vertebrae（脊椎）分别是身体不同部位的骨骼，bits 与 a couple of 也都表示复数数量，与题干的 Several bones 属于同向同义改写；地点上，原文说整个发现都发生在 “an isolated spot in the Afar region of Ethiopia”，与题干 at the same site in Afar 一致。信息吻合且无冲突，因此答案是 TRUE。注意不要把题干中的被动语态 were found by Donald Johanson 误读成“别人发现、约翰逊只是旁观”——原文主语正是 Donald Johanson spotted，主动被动只是句式转换。",
          "traps": [
            "为什么不是 FALSE：原文不但列举了头骨碎片、下颌、脊椎等多个部位的骨头，还明说 “there were plenty more”，与题干“发现若干块骨头”完全一致，不存在矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对骨头的数量和种类有具体交代（多个部位的复数列举），信息充分且与题干相符，不属于未提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The experts realised the importance of the discovery at Afar.",
          "translation": "专家们意识到了阿法尔这一发现的重要性。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "It was immediately obvious that the skeleton was a significant find, because the sediments at the site were known to be 3.5 million years old."
          },
          "synonyms": [
            "“realised the importance” 同义替换为原文的 “It was immediately obvious that … was a significant find”",
            "“the discovery” 同义替换为原文的 “the skeleton”，指第 1 段刚描述的那具骨架",
            "“The experts” 对应原文语境中的科学家团队（a team of scientists）以及第 1 段的 “palaeoanthropologist Donald Johanson”",
            "“at Afar” 对应前一段已交代的地点 “the Afar region of Ethiopia”"
          ],
          "locatingTip": "定位：题干没有醒目的人名或数字，可用名词 discovery 与地名 Afar 结合段落推进顺序定位——第 1 段讲发现，第 2 段紧接着评价这次发现，所以答案句在第 2 段首句。确定答案技巧：本题判分点是“是否意识到重要性”。原文用 It was immediately obvious（立刻显而易见）加 a significant find（一次重大发现）明说了这次发现的地位，与题干的 realised the importance 属同义改写，故判 TRUE。注意证据：“the sediments at the site were known to be 3.5 million years old” 是给出“为什么重要”的原因，不要把它错当成答案依据去和题干比对，题干问的是是否认识到重要性，而不是年代是否已知。",
          "analysis": "第 2 段首句：“It was immediately obvious that the skeleton was a significant find, because the sediments at the site were known to be 3.5 million years old.”（这具骨架显然是一次重大发现，因为该地点的沉积物已知有 350 万年之久。）题干说“专家们意识到阿法尔这一发现的重要性（The experts realised the importance of the discovery at Afar）”。原文的 a significant find 即“重大发现”，与题干的 the importance of the discovery 直接对应；It was immediately obvious 表示这种判断在当时就立即形成，对应题干的 realised（意识到）。两句主语虽表述不同（原文以“显而易见”这一无人称结构表达，题干则用 The experts 作主语），但意思一致，都属于同向改写，所以答案是 TRUE。可以这样自测：把题干翻译回英文核对一遍——“the skeleton was a significant find”就等于“the discovery was important”，语义没有增减。",
          "traps": [
            "为什么不是 FALSE：原文明确称这次发现为 a significant find（重大发现），与题干说的“意识到重要性”方向一致；若要判 FALSE，原文必须否定其重要性，而原文并没有。",
            "为什么不是 NOT GIVEN：原文既点明了发现的重要性，又给出了重要性的理由（沉积物年代达 350 万年），认为其重要这一信息非常充分，不属于未提及，故不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "It was the upper part of the skeleton that had suffered the least damage.",
          "translation": "这具骨架受损最轻的是上半身。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Later it became apparent that it was also the most complete – 40% of the skeleton had been preserved."
          },
          "synonyms": [
            "“the skeleton … had suffered the least damage” 与原文的 “it was also the most complete … 40% of the skeleton had been preserved” 只在大意上相关，程度上并不等同：原文说的是整体完整度 40%，而不是“受损最少的部分”",
            "“the upper part of the skeleton” 在原文中没有任何对应表达，原文通篇只按整体（the skeleton）谈完整度，从未区分上下半身",
            "“40% of the skeleton had been preserved” 只给出保存比例这一整体数据，无法推出哪一个部位受损最轻"
          ],
          "locatingTip": "定位：题干的关键词是 the skeleton 与 damage 的语义场，第 2 段末句在谈骨架的完整程度（the most complete、40% had been preserved），是全文唯一与“受损程度”沾边的句子。确定答案技巧：判断题要盯住题干的限定成分——本题的限定词是 the upper part（上半身）。原文只给出整具骨架的完整度，完全没有任何按部位（上半身、下半身、头颅等）比较受损程度的内容，即“整具骨架保存了 40%”这一信息无法回答“哪一部分受损最轻”。限定信息缺失即判 NOT GIVEN，绝不能用“最完整”去等同于“上半身受损最少”。",
          "analysis": "第 2 段末句：“Later it became apparent that it was also the most complete – 40% of the skeleton had been preserved.”（后来又发现它还是保存最完整的，骨架有 40% 被保存了下来。）这句话谈论的对象始终是整具骨架（the skeleton），衡量标准是整体的完整比例 40%。题干却把落点放在 the upper part of the skeleton（骨架的上半部分），断言“上半身受损最轻”。原文通篇没有对骨架做过上下半身的分区描写：第 4 段谈头骨、下颌与脑容量，第 5 段谈骨盆、膝、踝、脚，那是身体部位的特征比较，而非“哪个部位保存得最好/受损最少”。也就是说，题干提出的这一比较关系在原文中根本不存在对应信息，既无法证实也无法否证，按雅思规则判 NOT GIVEN。做题提醒：凡题干出现 the most、the least 这类比较级或最高级限定，务必确认原文确实做过同一维度、同一范围的比较；原文只给了整体数据时，“部分最如何”属于典型的 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说整具骨架是最完整的、保存了 40%，并没有任何按部位比较受损程度的内容；“整体最完整”不能推出“上半身受损最轻”，属于超出原文的推断，不能选 TRUE。",
            "为什么不是 FALSE：原文没有说上半身比其它部位损坏更严重，也没有任何与之相反的表述；信息只是缺失，并不构成矛盾，所以不能选 FALSE。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The skeleton's measurements helped Johanson's team to decide if it was male or female.",
          "translation": "这具骨架的尺寸数据帮助约翰逊的团队判断出它是雄性还是雌性。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "as the feeling was that the skeleton was female due to its size, someone suggested calling it Lucy"
          },
          "synonyms": [
            "“The skeleton's measurements” 同义替换为原文的 “its size”（尺寸、大小）",
            "“helped … to decide if it was male or female” 同义替换为原文的 “the feeling was that the skeleton was female”",
            "“Johanson's team” 对应原文现场的 “At the group's campsite that night” 这一团队场景，其中也包括 Johanson 本人"
          ],
          "locatingTip": "定位：题干涉及性别判断，属于第 3 段命名露西的情节，该段首句的 Beatles 歌名与人名 Johanson 都是醒目的定位词。确定答案技巧：本题要核对的是“判断性别的依据是否是尺寸”。原文的因果结构非常清楚：due to its size（因为它的尺寸）说明大家判断骨架为雌性的理由正是体型大小；题干的 measurements 即 measurements of the skeleton，与 size 对应。有了明确依据又得出明确结论，与题干一致，故判 TRUE。注意原文的 the feeling was that 语气偏“判断/倾向”，题干的 decide（判定）在雅思判断题里被视为同向表达，不必因为语气强弱而误判为 FALSE。",
          "analysis": "第 3 段写发现当晚的营地场景：“At the group's campsite that night, Johanson played a Beatles song called \"Lucy in the Sky with Diamonds\", and, as the feeling was that the skeleton was female due to its size, someone suggested calling it Lucy.”（当晚在队伍的营地里，约翰逊播放了一首披头士的歌《Lucy in the Sky with Diamonds》，由于从体型判断这具骨架是雌性，有人建议就叫它露西。）题干说“这具骨架的尺寸数据帮助约翰逊的团队判断出它是雄性还是雌性”。原文的 size 与题干的 measurements 同义；due to its size 明确把“体型大小”标为性别判断的依据；判断的结果是 female，说明“是雄是雌”这一问题确实已经被团队根据尺寸解决。两处信息一一对应，因此答案是 TRUE。做题提醒：本题的干扰点是 the feeling（感觉、判断），有的考生会认为“感觉”不如“确定”可靠而选 FALSE，但雅思判断题只比对事实内容是否一致：原文给出了依据（size）与结论（female），题干的 helped … to decide 正是对这一过程的概括。",
          "traps": [
            "为什么不是 FALSE：原文明确写出判断性别的依据是它的尺寸（due to its size），与题干的 measurements 完全一致；若原文说无法判断或不是按尺寸判断，才可能是 FALSE。",
            "为什么不是 NOT GIVEN：性别判断的依据与结果在原文中都交代得很具体（依据 size、结果为 female），信息完整且与题干吻合，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 13
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "upright movement possibly started among the 6 ______ of trees",
          "translation": "直立行走可能起源于树木的 ______ 之间。",
          "answer": "branches",
          "wordClass": "名词（复数，指“树枝”）；空格位于介词 among 之后作其宾语，前有定冠词 the、后有 of trees 修饰（among the branches of trees）；原文用复数形式 branches，仍是一个词，符合 ONE WORD ONLY",
          "locating": {
            "paragraph": "6",
            "quote": "It may be that upright walking evolved in the trees, as a way to walk along branches that would otherwise be too flexible."
          },
          "synonyms": [
            "“upright movement” 同义替换为原文的 “upright walking”",
            "“possibly started” 同义替换为原文的 “It may be that … evolved”，may 与 possibly 同表推测",
            "“among the … of trees” 对应原文的 “along branches”，即树上那些树枝之间",
            "“in the trees” 与题干的 “of trees” 都指向树木这一场景"
          ],
          "locatingTip": "定位：笔记的 Movement 一行承接上文第 5 段“露西直立行走”的内容，回到原文找“直立行走”与“树”同现的句子，落在第 6 段第 2 句。确定答案技巧：题干说直立行走可能起源于树上的某个东西之间（among the … of trees），原文给出的是 walk along branches（沿树枝行走），branches 正是“树上可供行走、且会晃动的东西”，其后的定语从句 that would otherwise be too flexible（否则会太软）也印证它是树枝。空格填 branches，注意原文用复数，且 ONE WORD ONLY 不能再加 tree。",
          "analysis": "第 6 段前两句：“She may have walked like a human, but Lucy spent at least some of her time up in the trees, as chimpanzees and orangutans still do today. It may be that upright walking evolved in the trees, as a way to walk along branches that would otherwise be too flexible.”（她也许像人类一样行走，但露西至少有一部分时间是在树上度过的，就像今天黑猩猩和红毛猩猩那样。也许直立行走就是在树上进化出来的，为的是沿那些否则会太软的树枝行走。）笔记 Movement 栏写“直立行走可能起源于树木的 6 ______ 之间”，对应原文第二句。原文的 It may be that … evolved 对应题干的 possibly started（均表推测与起源），upright walking 对应 upright movement，in the trees 对应 of trees，而横线处要填的就是行走所沿的东西——branches（树枝）。从语法看，among the … of trees 需要一个表示树上结构、且能与 of trees 搭配的可数名词复数，原文的复数形式 branches 完全吻合。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "probably moved to the 7 ______ in search of food",
          "translation": "（他们）可能是为了觅食而转移到 ______ 上。",
          "answer": "ground",
          "wordClass": "名词（单数，指“地面”，不可数）；空格位于介词 to 之后作其宾语（moved to the ground），前面有定冠词 the，不加复数",
          "locating": {
            "paragraph": "6",
            "quote": "But hunting for food may have been the real reason for heading to the ground, says Chris Stringer of the Natural History Museum in London."
          },
          "synonyms": [
            "“moved to” 同义替换为原文的 “heading to”，都表示“朝某处移动”",
            "“in search of food” 同义替换为原文的 “hunting for food”",
            "“probably” 对应原文的 “may have been the real reason”，同表推测",
            "“the 7 ______” 对应原文的 “the ground”，冠词 the 也在原文中保留"
          ],
          "locatingTip": "定位：本题紧随第 6 题，仍在第 6 段，笔记说“可能是为了觅食而转移到某处”，回原文找表示“移动地点”的动词短语，即 heading to the ground；人名 Chris Stringer 与机构名 Natural History Museum 可作辅助定位。确定答案技巧：题干把“原因”和“去向”写成 in search of food 与 moved to，原文的对应结构是 hunting for food（原因）与 heading to（去向），介词 to 后的名词就是答案 ground。注意区分干扰项：同段还有 savannahs were gradually opening up、trees were spaced further apart，那是解释“为什么离开树”的环境背景，而题干问的是他们转移到哪里，并且紧接后文就是 hunting for food 的觅食原因，所以答案锁定 ground。",
          "analysis": "第 6 段后半部分讨论露西为何离开树：“It's not clear why Lucy left the safety of the trees. It is thought that savannahs were gradually opening up, so trees were spaced further apart. But hunting for food may have been the real reason for heading to the ground, says Chris Stringer of the Natural History Museum in London.”（露西为何离开树上的安全环境还不清楚。有人认为稀树草原逐渐开阔，树与树之间距离变远。但伦敦自然历史博物馆的 Chris Stringer 说，寻找食物可能才是走向地面的真正原因。）笔记的句子“probably moved to the 7 ______ in search of food”与末句严丝合缝：hunting for food 即 in search of food，may have been the real reason 即 probably，heading to 即 moved to，介词 to 的宾语 the ground 就是答案。词性上，ground 在此为单数名词，前有定冠词 the，无复数形式，故填 ground。注意不要把 savannah 填入：原文说草原逐渐开阔只是环境变化的背景推测，而“为了觅食而走向地面”才是 Chris Stringer 给出的真正原因，两者在原文中由转折词 But 明确区分。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "analysis of food in the 8 ______ of the skeletons of early humans shows changes in their diet",
          "translation": "对早期人类骨骼 ______ 上残留食物的分析显示他们的饮食发生了变化。",
          "answer": "teeth",
          "wordClass": "名词（复数，指“牙齿”，teeth 是 tooth 的复数形式）；空格位于介词 in 之后作其宾语（in the teeth of the skeletons of early humans）；原文形式为 human teeth，此处只填名词 teeth",
          "locating": {
            "paragraph": "7",
            "quote": "Studies of the remains of food trapped on preserved human teeth indicate that several species, including Lucy's, were expanding their diet around 3.5 million years ago."
          },
          "synonyms": [
            "“analysis of food” 同义替换为原文的 “Studies of the remains of food trapped”",
            "“in the … of the skeletons of early humans” 对应原文的 “on preserved human teeth”，牙齿是骨骼遗存的一部分，preserved 与 skeletons 呼应",
            "“shows changes in their diet” 同义替换为原文的 “were expanding their diet”"
          ],
          "locatingTip": "定位：笔记 Diet and eating habits 一栏谈“分析食物残留”，回到原文找 analysis/studies 与 food 同现的句子，落在第 7 段首句。确定答案技巧：题干说食物残留在早期人类骨骼的某个部位上，原文的介词短语是 trapped on preserved human teeth（附着在保存下来的人类牙齿上），说明食物残渣附着的部位是牙齿，故填 teeth。填写时注意原文用复数 human teeth，答案必须写复数 teeth，不能写 tooth、也不能写 tooths；此外空格处在 “in the … of the skeletons” 结构中，teeth 属于骨架遗存的一部分，与 of the skeletons 的限定语兼容。",
          "analysis": "第 7 段首句：“Studies of the remains of food trapped on preserved human teeth indicate that several species, including Lucy's, were expanding their diet around 3.5 million years ago.”（对附着在保存下来的人类牙齿上的食物残留的研究表明，包括露西所属物种在内的若干物种，大约在 350 万年前正在扩大它们的食谱。）笔记句“analysis of food in the 8 ______ of the skeletons of early humans shows changes in their diet”与这句话逐项对应：Studies of the remains of food 对应 analysis of food，trapped on preserved human teeth 对应 in the … of the skeletons of early humans（牙齿是骨骼遗存中承载食物残留的部位），were expanding their diet 对应 shows changes in their diet。因此空格要填的就是食物残留所附着的部位 teeth。词性上是名词复数：原文是 human teeth，且为泛指（不指某颗牙），故必须写复数形式。做题提示：这类“把介词短语 of 结构留空”的填空题，只要照抄原文被留空的那个名词即可，注意单复数与原文一致。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "it is likely that meat and grasses were substituted for 9 ______",
          "translation": "很可能肉类和草类替代了 ______。",
          "answer": "fruit",
          "wordClass": "名词（不可数，指“水果”；作介词 for 的宾语，保持原文形式 fruit，不加复数）",
          "locating": {
            "paragraph": "7",
            "quote": "Instead of mostly eating fruit from trees, they began to include grasses and possibly meat."
          },
          "synonyms": [
            "“were substituted for” 与原文的 “Instead of” 表达同一关系：用新食物取代旧食物，只是题干从“取代方”视角叙述，原文从“被取代方”视角叙述",
            "“meat and grasses” 对应原文的 “grasses and possibly meat”，语序互换",
            "“it is likely that” 对应原文的 “possibly”，同表推测",
            "“fruit” 即原文 “eating fruit from trees” 中被逐步放弃的那类食物"
          ],
          "locatingTip": "定位：本题与第 8 题同在第 7 段，笔记说“肉类与草类取代了某物”，回原文找表示“取代”关系的表达，即 Instead of mostly eating fruit from trees。确定答案技巧：Instead of 表示“以前常吃、现在不再以之为主”，因此被取代的对象就是 instead of 后面的 fruit。判断时要把视角转过来：原文说“不再主要吃树上的水果，而开始吃草类、可能还有肉”，题干说“肉和草取代了水果”，两者同义。空格填 fruit，注意原文为不可数用法、无冠词无复数，照抄原词即可。",
          "analysis": "第 7 段：“Studies of the remains of food trapped on preserved human teeth indicate that several species, including Lucy's, were expanding their diet around 3.5 million years ago. Instead of mostly eating fruit from trees, they began to include grasses and possibly meat.”（……大约在 350 万年前正在扩大食谱。他们不再主要以树上的水果为食，而开始把草类、可能还有肉类纳入饮食。）笔记句“it is likely that meat and grasses were substituted for 9 ______”把原文的因果视角整体倒装：原文先说放弃什么（Instead of mostly eating fruit from trees），再说新纳入了什么（grasses and possibly meat）；题干则先说新食物（meat and grasses），再用 substituted for（取代）引出被换掉的旧食物。被取代的旧食物即 instead of 之后的核心名词 fruit，故答案为 fruit。词性上，fruit 在此指水果这一类食物，作不可数名词使用，不加冠词也不变复数，直接照抄原文形式。注意不要填 trees：trees 只是 fruit 的来源，不是被取代的食物。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "10 ______ that were located close to Lucy suggest these were also part of her diet",
          "translation": "在露西附近发现的 ______ 表明这些也是她食物的一部分。",
          "answer": "eggs",
          "wordClass": "名词（复数，指“蛋”）；空格在题干中作 suggest 的主语，后接 that were located close to Lucy 定语从句，复数谓语表明须用复数 eggs",
          "locating": {
            "paragraph": "7",
            "quote": "Fossilised crocodile and turtle eggs were found near her skeleton, suggesting that Lucy died while foraging for them in a nearby lake."
          },
          "synonyms": [
            "“located close to Lucy” 同义替换为原文的 “were found near her skeleton”",
            "“suggest these were also part of her diet” 与原文的 “suggesting that Lucy died while foraging for them” 对应：forage 意为觅食，说明这些东西属于她的食物",
            "“10 ______ that were located …” 中的复数形式对应原文的 eggs（crocodile and turtle eggs）",
            "“Fossilised” 对应笔记中“在露西附近发现”的化石遗存语境"
          ],
          "locatingTip": "定位：笔记 Diet and eating habits 一栏的最后一条说“露西附近发现的某物也是她的食物”，回到第 7 段末句，那里出现 near her skeleton 与 foraging。确定答案技巧：题干句型是 “10 ______ that were located close to Lucy suggest these were also part of her diet”，被发现的复数名词就是原文 Fossilised crocodile and turtle eggs 的中心词 eggs。判断依据在于从句 “suggesting that Lucy died while foraging for them”（暗示露西是在搜寻它们时死去的）：forage 即觅食，既然为了它们而死，说明它们是食物，与题干的 “these were also part of her diet” 一致。填 eggs 时注意：ONE WORD ONLY，不能写 crocodile、turtle 或 fossilised。",
          "analysis": "第 7 段末句：“Fossilised crocodile and turtle eggs were found near her skeleton, suggesting that Lucy died while foraging for them in a nearby lake.”（在她骨架附近发现了鳄鱼和龟的蛋化石，这暗示露西可能是在附近的湖里觅食这些蛋时死去的。）笔记句“10 ______ that were located close to Lucy suggest these were also part of her diet”与之对应：were found near her skeleton 对应 were located close to Lucy，foraging for them 对应 “these were also part of her diet”（forage 是觅食，说明这些蛋是她寻找的食物之一）。因此空格要填的是被发现的复数名词 eggs。判定这道题的第二个依据来自原句的复数一致：原文 eggs 是鳄鱼蛋和龟蛋的统称，谓语为 were found，题干的定语从句同样用 were located、主句谓语用复数的 suggest，与复数形式呼应，可以据此排除单数候选词。词性上 eggs 为名词复数，照原文形式填写。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "11 ______ that were found had marks on them, possibly made by tools used for eating",
          "translation": "被发现的 ______ 上有痕迹，可能是进食时使用的工具留下的。",
          "answer": "bones",
          "wordClass": "名词（复数，指“骨头”）；空格在题干中作 had 的主语，后接 that were found 定语从句，复数谓语表明须用复数 bones",
          "locating": {
            "paragraph": "8",
            "quote": "However, in 2010 archaeologists uncovered animal bones with scratches that seem to have been made by stone tools."
          },
          "synonyms": [
            "“had marks on them” 同义替换为原文的 “with scratches”",
            "“possibly made by” 同义替换为原文的 “seem to have been made by”，seem 与 possibly 同表不确定",
            "“were found” 同义替换为原文的 “archaeologists uncovered”",
            "“tools used for eating” 对应原文下一句的 “used stone tools to eat meat”"
          ],
          "locatingTip": "定位：笔记 Diet and eating habits 一栏的最后一条谈“带有痕迹、可能由工具造成的东西”，回到第 8 段找 tool 与 marks 的语义场，落在 “archaeologists uncovered animal bones with scratches” 这一句。确定答案技巧：题干说“被发现的某物身上有痕迹”，原文对应的是 animal bones with scratches，with 引导的介词短语正是“身上的痕迹”，因此被发现的物体是 bones。同时下一句 “This suggests that Lucy and her relatives used stone tools to eat meat.” 用工具吃肉，与题干 tools used for eating 相合，可以双向确认。填 bones 时注意单复数：原文为复数 animal bones，且题干的定语从句与主句谓语分别为 were found、had，都要求复数，写 bone 会因语法不符而失分。",
          "analysis": "第 8 段：“How did early humans process all these new foods? Later species, like Homo erectus, are known to have used simple stone tools, but no tools have ever been found from this far back. However, in 2010 archaeologists uncovered animal bones with scratches that seem to have been made by stone tools. This suggests that Lucy and her relatives used stone tools to eat meat.”（早期人类如何处理这些新食物？像直立人这样较晚的物种已知使用过简单的石器，但如此久远的年代从未发现过任何工具。然而，2010 年考古学家出土了带有刮痕的动物骨头，这些刮痕似乎是由石器造成的。这暗示露西及其亲属曾用石器吃肉。）笔记句“11 ______ that were found had marks on them, possibly made by tools used for eating”对应的正是第三句：archaeologists uncovered（发现）对应 were found，animal bones（骨头）是被发现并带痕迹的主体，with scratches 对应 had marks on them，seem to have been made by stone tools 对应 possibly made by tools used for eating。故空格填 bones，且必须用复数。注意不能填 scratches：那是骨头上的痕迹本身，而不是“被发现的某物”；也不能填 tools，因为原文中如此久远年代的工具有无仍在争论，且 tools 与 “had marks on them” 的搭配不通。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "modern-day humans have a longer 12 ______ than Lucy did",
          "translation": "现代人的 ______ 比露西的更长。",
          "answer": "childhood",
          "wordClass": "名词（单数／不可数，指“童年时期”）；空格位于 a longer 之后，受比较级形容词 longer 修饰，作 have 的宾语（have a longer childhood），填原文形式 childhood",
          "locating": {
            "paragraph": "9",
            "quote": "It also seems that Lucy's childhood was much briefer than ours and that she had to fend for herself from a young age."
          },
          "synonyms": [
            "“modern-day humans have a longer … than Lucy did” 与原文的 “Lucy's childhood was much briefer than ours” 为同一比较关系的两种叙述：ours 即现代人，比较方向相反但结论一致",
            "“longer” 与原文的 “much briefer” 构成反向对应：露西的童年更短，等于现代人的更长",
            "“It also seems that” 对应笔记 Comparisons with modern-day humans 这一对比的推测口吻"
          ],
          "locatingTip": "定位：笔记最后一部分 Comparisons with modern-day humans 谈现代人与露西的对比，回到第 9 段找儿童期、成长速度相关的表述，落在首句 “Lucy's childhood was much briefer than ours”。确定答案技巧：本题的关键是把比较对象和方向摆正。原文说“露西的童年比我们的短得多”（briefer 修饰 Lucy's childhood，ours 指现代人的童年），题干反过来说“现代人的 X 比露西的长”，两者是同一比较的镜像表达，X 自然是 childhood。填词时按原文形式写 childhood，注意它是一个整体名词、不加复数、不加冠词。",
          "analysis": "第 9 段首句：“It also seems that Lucy's childhood was much briefer than ours and that she had to fend for herself from a young age.”（似乎露西的童年也比我们的短得多，而且她从小就得自己谋生。）笔记句“modern-day humans have a longer 12 ______ than Lucy did”与这句话构成镜像改写：原文以 Lucy's childhood 为比较主语、ours（我们的童年，即现代人的童年）为参照，结论是 briefer（更短）；题干以 modern-day humans 为主语、Lucy 为参照，结论是 longer（更长）。同一事实的两种表达都指向“现代人的童年更长、露西的童年更短”，因此被比较的对象就是 childhood。原文后续内容（she had to fend for herself from a young age、grew to full size very quickly、time of death was when she was around 12 years old）都属于同一段对成长速度的补充说明，可作旁证但不必写入答案。词性上 childhood 为不可数名词，前有比较级 longer 修饰，直接照抄原文形式即可。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "the 13 ______ of modern-day humans appear to develop later than Lucy's did",
          "translation": "现代人的 ______ 似乎比露西的发育得更晚。",
          "answer": "brains",
          "wordClass": "名词（复数，指“大脑”）；空格位于定冠词 the 之后作主语，与复数谓语 appear 一致，故填原文形式 brains",
          "locating": {
            "paragraph": "9",
            "quote": "In line with that, a recent study of a 3-year-old early human suggested that their brains matured much earlier than ours do."
          },
          "synonyms": [
            "“develop” 同义替换为原文的 “matured”（成熟、发育）",
            "“later than Lucy's did” 与原文的 “much earlier than ours do” 构成反向对应：早期人类的脑成熟得更早，等于现代人的更晚",
            "“modern-day humans” 对应原文的 “ours”（我们现代人的），原句前半的 their 指早期人类",
            "“the 13 ______ of modern-day humans” 对应原文 ours do 之前被比较的对象 brains"
          ],
          "locatingTip": "定位：本题与第 12 题同在第 9 段，题干关键词是 develop / later 与 modern-day humans，回原文末句找“成熟更早或更晚”的比较，即 “their brains matured much earlier than ours do”。确定答案技巧：要先辨清代词。原句 their 指前文的那位 3 岁早期人类（早期人类），ours 指代现代人的大脑，因此比较关系是“早期人类的大脑成熟得比我们早得多”，反过来说即“现代人的大脑发育得更晚”，与题干一致。空格要填的是被比较的对象 brains。注意题干的 appear 是复数谓语（不是 appears），Lucy's 也指 Lucy's brains，两处都提示此处应为复数名词，故写 brains 而非 brain。",
          "analysis": "第 9 段：“It also seems that Lucy's childhood was much briefer than ours and that she had to fend for herself from a young age. We know that Lucy was a full-grown adult because she had wisdom teeth and her bones had fused. But unlike modern humans, she seems to have grown to full size very quickly, and the time of death was when she was around 12 years old. In line with that, a recent study of a 3-year-old early human suggested that their brains matured much earlier than ours do.”（……与此一致的是，最近一项对一个 3 岁早期人类的研究表明，他们的大脑成熟得比我们早得多。）笔记句“the 13 ______ of modern-day humans appear to develop later than Lucy's did”对应的正是最后一句的比较：matured 对应 develop，much earlier 与题干 later 是同一比较从相反视角的表述（早期人类更早，即现代人更晚），their（早期人类）与 ours（现代人）分别对应 Lucy 与 modern-day humans，被比较的核心名词 brains 就是答案。词性上 brains 为名词复数：原句 their brains 为泛指复数，题干的 appear 也要求复数主语，Lucy's 后省略的中心词同样是 brains。填写时照抄原文形式 brains。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
