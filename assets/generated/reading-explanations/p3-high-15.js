(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-15", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-15",
  "meta": {
    "examId": "p3-high-15",
    "title": "Whale Culture 鲸鱼文化",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–31 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 31
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "Resident killer whales appear to remain with their maternal group for life.",
          "translation": "定居型虎鲸似乎终生留在其母系群体中。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Calves stay with their mothers throughout adulthood, and in many years of observation no one has ever seen a whale switch pods."
          },
          "synonyms": [
            "“remain with their maternal group” 同义替换为原文的 “stay with their mothers”",
            "“for life” 同义替换为原文的 “throughout adulthood”（从幼鲸到整个成年期都在一起）",
            "“maternal group” 对应原文的 “pods”：第 3 段已交代 pod 是由两三位母亲及其后代组成的稳定群体，即母系群体",
            "“appear to” 对应原文的观察性措辞 “in many years of observation no one has ever seen”，即依据长期观察得出的结论，与题干留有余地的说法一致"
          ],
          "locatingTip": "定位：题干的主语是专有名词 Resident killer whales，全文集中讨论定居型与过客型虎鲸差异的是 C 段（第 3 段），扫读时只要盯住 Residents 一词即可锁定。确定答案技巧：本题问“是否终生与母系群体在一起”，要在原文里找“幼鲸一直跟着母亲、且从不换群”这两重信息。原文给出两条相互印证的说法：Calves stay with their mothers throughout adulthood（幼鲸到成年都跟随母亲）和 in many years of observation no one has ever seen a whale switch pods（多年观察中从未见到有鲸改换群体）。两条证据都指向“终生不离开”，与题干方向完全一致，因此判 YES。注意题干用 appear to（似乎）而不是绝对化表述，与原文“观察所得、从未见过反例”的口径正好吻合。",
          "analysis": "第 3 段先说明虎鲸被分为定居型（residents）与过客型（transients）两个互不往来的群体，随后重点描写定居型的社会结构：“Residents live in stable groups, or ‘pods', made up of two or three mothers and their offspring - perhaps 20 whales in all. Calves stay with their mothers throughout adulthood, and in many years of observation no one has ever seen a whale switch pods.”（定居型虎鲸生活在稳定的群体即 pod 中，由两三位母亲及其后代组成，总共约 20 头。幼鲸在整个成年期都跟随母亲，多年观察中从未有人见过有鲸更换群体）。题干的三处信息在这里逐一对上：母系群体（maternal group）即由母亲及其后代构成的 pod；终生（for life）即 throughout adulthood（整个成年期都在一起）；“似乎留在”对应原文以长期观察为依据的结论性陈述。原文没有出现任何“会离开群体”的相反信息，而是用“从未见过换群”把反例封死，所以这个陈述与作者的说法一致，答案是 YES。做本题时要把 pods 的含义先弄清：本段已经解释 pod 是“两三位母亲加它们的后代”，所以 maternal group 并不是新信息，而是对 pod 的换一种说法。",
          "traps": [
            "为什么不是 NO：原文明确说 “Calves stay with their mothers throughout adulthood”，并且 “no one has ever seen a whale switch pods”（没有人见过虎鲸更换群体）。这两句都支持“终生留在母系群体中”，与题干同向，不存在任何矛盾点，所以不能选 NO。",
            "为什么不是 NOT GIVEN：NOT GIVEN 要求原文对“是否终生留在母系群体”这件事没有交代。但原文既交代了幼鲸在整个成年期都与母亲同群，又交代了从未观察到换群现象，信息是明确给出的，属于“说过且说法一致”，因此不是 NOT GIVEN，而是 YES。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Resident killer whales have a more restricted range of calls than transients.",
          "translation": "定居型虎鲸的叫声种类比过客型虎鲸更有限（更少）。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Transients have only a few such calls, and all transient societies share the same ones. Residents have a much more extensive repertoire, and each family group has its own unique and distinctive set of calls."
          },
          "synonyms": [
            "“range of calls” 同义替换为原文的 “such calls” 与 “repertoire”（曲库、叫声总汇）",
            "“restricted”（受限的、少的）在原文中只与过客型对应：“Transients have only a few such calls”（过客型只有少数几种叫声）",
            "“more … than transients” 这一比较关系与原文 “Residents have a much more extensive repertoire” 正好相反：原文说定居型的曲库远为丰富"
          ],
          "locatingTip": "定位：题干比较的两方是 Resident killer whales 与 transients，第 4 段（D 段）整段都在对比两者的叫声系统，扫到 Transients 与 Residents 这对关键词即可停下精读。确定答案技巧：这是典型的“比较对象颠倒”陷阱。原文先说 “Transients have only a few such calls”（过客型只有少数几种叫声），紧接着说 “Residents have a much more extensive repertoire”（定居型的曲库要丰富得多）。也就是说，“叫声种类少”这顶帽子属于过客型，而题干把它扣到了定居型头上，还说定居型“比过客型更少”，比较方向完全反了，因此判 NO。做比较型判断题要养成习惯：先在原文找到两方各自的属性，再核对题干把属性分配给了谁。",
          "analysis": "第 4 段的核心是定居型与过客型“传递信息的方式”不同。段落先总说虎鲸用 squeaks, whistles and whines（尖叫声、口哨声、哀鸣声）这套词汇交流，然后分述两类群体：“Transients have only a few such calls, and all transient societies share the same ones. Residents have a much more extensive repertoire, and each family group has its own unique and distinctive set of calls.”（过客型只有少数几种这样的叫声，而且所有过客型群体共用同一套；定居型的曲库要丰富得多，每个家族群体都有自己独有而鲜明的叫声组合）。题干的逻辑是“定居型的叫声种类比过客型更少（more restricted）”，而原文的分配恰恰相反：few calls 属于 transients，much more extensive repertoire 属于 residents。两者一少一多，正好颠倒，属于事实性矛盾，所以答案是 NO。要注意 restricted 与 extensive 是一对反义表述：extensive（广泛的、丰富的）对应 extensive repertoire，说明定居型的叫声不是更少而是更多。",
          "traps": [
            "为什么不是 YES：YES 要求原文支持“定居型叫声更少”。原文写的是 “Transients have only a few such calls”（只有少数几种叫声的是过客型），而 “Residents have a much more extensive repertoire”（定居型的叫声库丰富得多）。题干把少与多的归属弄反了，与原文直接冲突，所以不能选 YES。",
            "为什么不是 NOT GIVEN：原文对两类群体的叫声数量都作了明确交代——过客型 few，定居型 much more extensive，信息完整而且与题干相反。存在明确且相反的原文依据时按规则判 NO，不能因为题干只是“比较关系”就当成未提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "There is a vocabulary of sounds which is common to all transient killer whales.",
          "translation": "存在一套为所有过客型虎鲸所共有的声音词汇。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Transients have only a few such calls, and all transient societies share the same ones."
          },
          "synonyms": [
            "“a vocabulary of sounds” 同义替换为原文的 “such calls”：such 回指上一句刚提到的 “a vocabulary of squeaks, whistles and whines”",
            "“common to all transient killer whales” 同义替换为 “all transient societies share the same ones”，其中 share the same ones 即“共用同一套”",
            "“There is” 对应原文用陈述句直接给出的 “Transients have only a few such calls”"
          ],
          "locatingTip": "定位：题干的关键词是 transient，第 4 段以 Transients 开头的句子只有一句，直接锁定。确定答案技巧：题干问“是否存在一套所有过客型虎鲸共有的声音词汇”，判分点在“共有（common to all）”这一限定。原文 “all transient societies share the same ones” 中的 all 与 share the same 已经把这个限定条件完整满足：所有过客型群体共用同一套叫声。注意 “such calls” 的 such 是回指上文虎鲸交流所用的 squeaks, whistles and whines，也就是题干所说的 vocabulary of sounds，所以“声音词汇”这一表述与原文吻合，答案判 YES。",
          "analysis": "第 4 段在说明虎鲸用 “a vocabulary of squeaks, whistles and whines”（尖叫声、口哨声与哀鸣声组成的一套词汇）交流之后，紧接着对比两类群体：“Transients have only a few such calls, and all transient societies share the same ones.”（过客型只有少数几种这样的叫声，而且所有过客型群体共用同一套）。句中的 such calls 通过 such 回指前句的叫声词汇，ones 又替代 calls，因此整句的意思就是“过客型都使用同一套有限的叫声”。题干说“存在一套为所有过客型虎鲸共有的声音词汇”，与 all transient societies share the same ones 完全同义，方向一致，所以答案是 YES。阅读时要注意 “share the same ones” 这类代词替代结构：ones 指代的正是前面的 calls，不能把它理解成别的东西。相比之下，定居型是 “each family group has its own unique and distinctive set of calls”（每个家族各有自己的叫声），两类群体在这一点上恰好形成对照，这也再次印证题干说的“全体共有”只适用于过客型。",
          "traps": [
            "为什么不是 NO：原文用 all transient societies share the same ones 明确说所有过客型群体共用同一套叫声，支持的是“存在共有词汇”，与题干同向。若题目谈的是定居型才应判 NO，因为定居型是每个家族各有方言；本题谈的是过客型，故不能选 NO。",
            "为什么不是 NOT GIVEN：原文不仅说 “Transients have only a few such calls”（交代了数量少），还进一步说 “all transient societies share the same ones”（交代了为全体共有）。既有数量信息又有共有关系，信息明确，不属于未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "Resident killer whales share the dialects of other resident communities living in the same waters.",
          "translation": "定居型虎鲸与其他生活在同一水域的定居型群体共用方言。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Despite regular interaction between them, each resident pod sticks firmly to its own dialect."
          },
          "synonyms": [
            "“share the dialects of other resident communities” 与原文的 “each resident pod sticks firmly to its own dialect”（每个定居型群体坚守自己的方言）方向相反",
            "“other resident communities living in the same waters” 对应原文的 “regular interaction between them”，也与第 3 段 “They live in the same stretch of water, but they don't mingle” 呼应",
            "“Despite” 引导的让步结构说明：原文先承认彼此经常接触，再强调依然各守方言，正是对题干“会共用方言”的否定"
          ],
          "locatingTip": "定位：题干落在定居型与“同水域其他群体”的关系上，第 4 段末两句的 each resident pod 与 its own dialect 是直接落点，扫到 resident pod 即可停读。确定答案技巧：题干的关键动词是 share（共用），原文的关键动词是 sticks firmly to its own（坚守自己的）。作者还用 Despite regular interaction between them 先做让步，等于排除了“因为接触多所以方言混同”的可能，结论是各自坚守。既然不共用而是各守，题干与原文相反，判 NO。这类题要特别注意让步结构：Despite X, Y 的重心永远落在 Y 上，不能拿 X（彼此经常往来）去支持题干。",
          "analysis": "第 4 段最后两句是本题的落点：“Residents have a much more extensive repertoire, and each family group has its own unique and distinctive set of calls. Despite regular interaction between them, each resident pod sticks firmly to its own dialect.”（定居型的曲库丰富得多，每个家族群体都有自己独有而鲜明的叫声组合。尽管它们之间经常往来，每个定居型群体依然牢牢坚守自己的方言）。原文的立场非常清楚：同一水域的定居型群体虽有经常性的互动，却各自保有独立方言，并不互相混用；第 3 段也早已铺垫 “They live in the same stretch of water, but they don't mingle”（同处一片水域却不混杂）。题干说它们“共用（share）其他定居群体的方言”，与 “sticks firmly to its own dialect” 构成直接对立，因此答案是 NO。题干里的 other resident communities living in the same waters 在原文中有两处呼应：一是本段的 regular interaction between them，二是第 3 段的 same stretch of water，所以定位与替换层面都没有问题，唯一的冲突点就在“共用”与“各守”这一对反义动作上，而这一点足以定 NO。",
          "traps": [
            "为什么不是 YES：原文明确说 each resident pod sticks firmly to its own dialect，即各群体坚守自己的方言，没有共用。题干说它们共用其他群体的方言，与“坚守自己的方言”直接冲突，所以不能选 YES。",
            "为什么不是 NOT GIVEN：原文既给出了“同水域、经常往来”这一前提，又给出了“依然各守方言”这一结论，对题干所问的共用与否作出了明确回答，属于“说过且相反”，不是信息缺失，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "The dialects of transient killer whales remain constant over time.",
          "translation": "过客型虎鲸的方言随时间保持不变。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Research shows these dialects are maintained for at least 40 years."
          },
          "synonyms": [
            "“remain constant over time” 表面上与原文的 “are maintained for at least 40 years”（至少维持 40 年）相似",
            "但原文的 “these dialects” 指代的是上一句的 “each resident pod … its own dialect”，即定居型的方言，而非题干的 transient killer whales",
            "“transient killer whales” 在本段的对应表述是 “Transients have only a few such calls, and all transient societies share the same ones” 一句，该句只讲叫声种类少与全体共用，完全没有涉及时间上的稳定性"
          ],
          "locatingTip": "定位：题干主语是 transient killer whales 的 dialects，全文谈 dialects 的主要是 D 段与 E 段，扫读时先看有没有“过客型方言随时间变化与否”的表述。确定答案技巧：本题的陷阱在于把“定居型方言稳定 40 年”这一信息误戴到过客型头上。原文 “Research shows these dialects are maintained for at least 40 years” 中的 these dialects 紧跟上一句 “each resident pod sticks firmly to its own dialect”，指代的是定居型各群体的方言；而关于过客型，原文只说它们叫声种类少、全体共用同一套，从未交代这套方言随时间是否变化。题目所问的“过客型方言是否长期不变”在原文找不到任何依据，既不能证实也不能证伪，因此判 NOT GIVEN。",
          "analysis": "第 4 段谈过客型的两句是 “Transients have only a few such calls, and all transient societies share the same ones”（过客型只有少数几种叫声，所有过客型群体共用同一套），讲的是“数量少”和“全体一致”，并未涉及时间维度。紧接着的 “Research shows these dialects are maintained for at least 40 years”（研究显示这些方言至少维持了 40 年）确实提到了方言在时间上的稳定性，但句首的 these dialects 指代的是上文 “each resident pod sticks firmly to its own dialect” 中的定居型方言，与过客型无关。题干把主语换成 transient killer whales，问它们的方言是否随时间保持不变，而原文对过客型方言的时间稳定性没有任何交代：既没说它们一成不变，也没说它们在变化。按判断题规则，原文对该信息毫无提及即判 NOT GIVEN。作答时的关键动作是追查代词的指代对象：these dialects 指代谁，决定了这条信息能不能用于本题；把定居型的结论套到过客型身上，正是本题设置的主要失分点。此外还要注意，第 2 段讲到座头鲸的歌会随年份改变（during the breeding season the sounds change），但那说的是 humpback，与过客型虎鲸不是同一对象，也不能拿来作依据。",
          "traps": [
            "为什么不是 YES：原文中“方言至少维持 40 年”这一说法的主语是定居型各群体的方言（these dialects 回指定居型），并没有说这是过客型方言的情况。用定居型的信息去证实题干中对过客型的断言，属于张冠李戴，因此不能选 YES。",
            "为什么不是 NO：NO 需要原文给出与题干相反的说法，即“过客型方言会随时间改变”。原文对过客型方言的时间稳定性只字未提，没有相反依据，所以不能选 NO。三选一里只有 NOT GIVEN 对应“信息缺失”。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–34 摘要填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 34
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "It has been observed that resident killer whales invariably live in fixed family groups, known as 32 ________.",
          "translation": "据观察，定居型虎鲸总是生活在固定的家族群体中，这种群体被称为 ________。",
          "answer": "pods",
          "wordClass": "名词（复数）。空格前是过去分词短语 known as，作介词 as 的宾语（known as 短语整体作后置定语修饰 groups），指由两三位母亲及其后代组成的稳定群体；原文以 ‘pods' 形式出现，故填复数名词 pods。",
          "locating": {
            "paragraph": "3",
            "quote": "Residents live in stable groups, or 'pods', made up of two or three mothers and their offspring - perhaps 20 whales in all."
          },
          "synonyms": [
            "“invariably live in fixed family groups” 同义替换为原文的 “Residents live in stable groups”：invariably 对应 Residents（定居型本来就如此），fixed 对应 stable",
            "“known as” 对应原文的同位语提示词 “or”（即“也就是、称为”）",
            "“family groups … made up of mothers and their offspring” 与原文的 “made up of two or three mothers and their offspring” 完全对应"
          ],
          "locatingTip": "定位：题干关键词 resident killer whales 与 family groups 指向第 3 段讲定居型社会结构的那句，第 3 段以 Residents 开头的句子正是落点。确定答案技巧：题干用 known as 引出填空，说明空格处是这种群体的“名称”，回原文找与名称有关的信号词——本句用 or 引出同位语 ‘pods'，or 在这里表示“又称、即”，因此空格填 pods。词数上符合 NO MORE THAN TWO WORDS，填复数形式 pods（原文即为复数，指的是多个这样的群体）。不要误填 groups（那是普通名词，题干已用 groups 一词）或 pod（原文用的是复数）。",
          "analysis": "第 3 段介绍定居型虎鲸的社会结构：“Residents live in stable groups, or ‘pods', made up of two or three mothers and their offspring - perhaps 20 whales in all.”（定居型虎鲸生活在稳定的群体即 pod 中，由两三位母亲及其后代组成，总共约 20 头）。题干的摘要句把这一信息改写成 “invariably live in fixed family groups, known as [32]”：invariably（总是）与原文的 Residents 语义相当，fixed（固定的）对应 stable（稳定的），family groups 对应 made up of two or three mothers and their offspring（由母亲与后代组成的家族），最后的 known as 则对应原文用 or 引出的同位语名称 ‘pods'。因此空格应填 pods。词性上 pods 是复数名词，原文即为复数（因为是“多个群体”这一类别），题干的 groups 也是复数，形式上一致；答案不能改写为 pod、group 或 unit。要注意原文中 pods 两侧用的是引号（‘pods'），引号只是提示这是术语，填写时不带引号。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "As the same areas of ocean contain many different groups with widely varying dialects, it is clear that these differences could not have emerged as a result of the whales' 33 ________.",
          "translation": "由于同一片海域中存在许多方言差异很大的群体，可见这些差异不可能是由鲸鱼的 ________ 造成的。",
          "answer": "physical environment",
          "wordClass": "名词短语（形容词 physical 作前置定语修饰名词 environment）。空格前是名词所有格 the whales'，整个短语作介词 of 的宾语（a result of ... 后接名词短语），说明差异不源自某种外部因素；两个词都必须写全。",
          "locating": {
            "paragraph": "5",
            "quote": "Animals with different dialects share the same waters, so the variation can't be a product of physical environment."
          },
          "synonyms": [
            "“the same areas of ocean contain many different groups” 同义替换为原文的 “Animals with different dialects share the same waters”",
            "“widely varying dialects” 同义替换为原文的 “different dialects” 与 “the variation”",
            "“could not have emerged as a result of” 同义替换为原文的 “can't be a product of”",
            "“the whales' …” 对应原文作 of 宾语的 “physical environment”，即外部物理环境"
          ],
          "locatingTip": "定位：题干的核心论证是“同水域却方言各异，说明差异不来自某因素”，第 5 段（E 段）开头两句话正是这一逻辑，扫到 “share the same waters” 即可锁定。确定答案技巧：原文用 so 引出结论 “the variation can't be a product of physical environment”，其中 can't be a product of 与题干的 could not have emerged as a result of 完全对应，of 后面的名词短语 physical environment 就是答案。词数上限为两个词，恰好是 physical 加 environment 两个单词，必须写全，不能只写 environment（不完整会失分）或写成 environmental（词性不符，介词 of 后需要名词）。",
          "analysis": "第 5 段讨论方言是否属于虎鲸文化：“To qualify as part of killer whale culture, dialects must be learnt from other members of the pod. Animals with different dialects share the same waters, so the variation can't be a product of physical environment.”（要算作虎鲸文化的一部分，方言必须是从群体其他成员那里学来的。拥有不同方言的动物共享同一片水域，所以这种差异不可能是物理环境的产物）。这里用的是排除法：如果方言由外部环境造成，那么同处一片水域的群体本应方言相同，而事实是它们方言各异，于是可以排除“物理环境”这一因素。题干把这一推理完整复述，只把结论中的论据名词留空：“these differences could not have emerged as a result of the whales' [33]”。对应关系清楚：the same areas of ocean contain many different groups 对应 share the same waters，could not have emerged as a result of 对应 can't be a product of，因此空格填 physical environment。词性上 of 是介词，后面需要名词或名词短语作宾语，physical 在此为形容词修饰名词 environment，两词缺一不可；答案保持原文形式与顺序（physical environment），不要颠倒语序。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "According to tests conducted by Lance Barrett-Lennard, a calf communicates exclusively with the dialect of the group to which its 34 ________ belongs.",
          "translation": "根据 Lance Barrett-Lennard 所做的测试，幼鲸只使用其 ________ 所属群体的方言进行交流。",
          "answer": "mother",
          "wordClass": "名词（单数）。空格前是物主代词 its，its mother 在定语从句 the group to which its mother belongs 中作主语；原文用形容词 maternal（母系的）修饰 pod，题干改写为名词 mother，指幼鲸的母亲。",
          "locating": {
            "paragraph": "5",
            "quote": "A calf uses the calls of its maternal pod very precisely."
          },
          "synonyms": [
            "“communicates exclusively with the dialect of” 同义替换为原文的 “uses the calls of … very precisely”：exclusively（只）对应 very precisely 与前文 “There's no input from the father”",
            "“the group to which its mother belongs” 同义替换为原文的 “its maternal pod”：maternal 意为“母亲的”，pod 即上文所说的群体",
            "“tests conducted by Lance Barrett-Lennard” 对应原文的 “His paternity tests reveal …” 与句末的 “says Barrett-Lennard”"
          ],
          "locatingTip": "定位：题干有专有名词 Lance Barrett-Lennard，人名在第 5 段两度出现，锁定本段后找 calf 一词，即可落在 “A calf uses the calls of its maternal pod very precisely.” 确定答案技巧：题干把原文的形容词 maternal（母系的）改写成名词结构 “the group to which its [34] belongs”，需要把修饰语还原成它所描述的人：maternal 就是“母亲的”，因此空格填 mother（单数，无冠词，因为前面已有 its）。注意原文的 pod 对应题干的 the group，不要填 pod（题干已经用 the group 表达了这个意思，空格问的是“谁”）。另外，本段前文说 “There's no input from the father”，正反面都排除了父亲，进一步确认答案只能是 mother。",
          "analysis": "第 5 段借 Lance Barrett-Lennard 的研究排除方言由遗传来决定的可能：“His paternity tests reveal that female killer whales invariably attract mates from outside their own pod – males with a very different dialect. If dialects were programmed by genetics, call patterns from both father and mother would be passed on to the calf. ‘A calf uses the calls of its maternal pod very precisely. There's no input from the father,' says Barrett-Lennard.”（他的亲子鉴定显示，雌性虎鲸总是从自己群体之外吸引配偶，即方言差异很大的雄性。如果方言由基因决定，来自父亲与母亲的叫声模式都会传给幼鲸。Barrett-Lennard 说：“幼鲸非常准确地使用它母系群体的叫声，其中没有来自父亲的输入。”）。题干把最后这句改写成 “a calf communicates exclusively with the dialect of the group to which its [34] belongs”：uses the calls of 对应 communicates with the dialect of，very precisely 与“没有父亲的输入”共同对应 exclusively，而 its maternal pod 这一名词短语被展开为 “the group to which its mother belongs”。maternal 的词根来自 mother，意思就是“母亲的”，所以空格填 mother。词性上 its 是限定词，其后需要单数可数名词，mother 的形式与题干结构完全契合，不需要加冠词，也不能写成 mothers 或 maternal。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 35–37 多选（Choose THREE letters A–F）",
      "mode": "per_question",
      "questionRange": {
        "start": 35,
        "end": 37
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "Which THREE of the following features of whales are mentioned in the passage? A intelligence",
          "translation": "下列鲸鱼特征中，哪三项在文中被提到？A 智力",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Whales have several biological attributes that give them an advantage in social learning. Apart from their advanced mental abilities, they are adept at recognising sounds: ideal for communicating in the marine environment."
          },
          "synonyms": [
            "“intelligence” 同义替换为原文的 “advanced mental abilities”（高级的心智能力）",
            "“features of whales” 对应原文的 “biological attributes”（生物学特征）",
            "原文用 Apart from 引出并列，说明“高级心智能力”是与“善于辨音”并列的一项特征，被明确提及"
          ],
          "locatingTip": "定位：本题为三选一的多选题，需要逐项在全文核对是否出现。选项 A intelligence 对应词是智力，全文讨论鲸鱼能力的是第 6 段（F 段），该段以 “Whales have several biological attributes” 开头，正是集中列举特征之处。确定答案技巧：看到 intelligence 要在原文找 mental / brain / ability 之类同义表达，第 6 段的 “advanced mental abilities”（高级心智能力）即是，故 A 正确。这类多选题的解题策略是先把有明显同义替换的选项（A 智力、C 对声音敏感、D 寿命长）选定，再用排除法确认其余选项确实未被提及。",
          "analysis": "第 6 段回答“这算不算文化”的问题，并列举鲸鱼在社会学习方面的先天优势：“Whales have several biological attributes that give them an advantage in social learning. Apart from their advanced mental abilities, they are adept at recognising sounds: ideal for communicating in the marine environment. Many species spend years rearing their offspring, and live in small, stable, multi-generational societies, a social system that provides ample opportunity for teaching and learning.”（鲸鱼具备若干让它们在社会学习上占优的生物学特征。除了高级的心智能力，它们还善于辨别声音，这非常适合在海洋环境中交流。许多物种要花多年时间养育后代，并生活在规模小、稳定、多代同堂的社会中，这样的社会结构为教与学提供了充足的机会）。选项 A intelligence 与 advanced mental abilities 直接对应，属于原文明确提到的特征，因此 A 是三个正确选项之一。判断时要注意题干问的是“文中提到的”，而不必是作者论证的重点；advanced mental abilities 平实地出现在特征列表的第一项，属于无疑问的提及。",
          "traps": [
            "为什么 B physical strength（体力）错误：全文从未提到鲸鱼的体力、力量大小或体能优势，第 6 段列举的特征是心智能力、辨音能力、长期养育后代与稳定社会结构，与体力无关，属于原文未提及。",
            "为什么 E lengthy period of fertility（生育期长）错误：第 8 段说的是鲸鱼在生育后代之后还能再活四分之一个世纪（live up to a quarter of a century after they have had their descendants），强调的是“生育之后寿命仍很长”，即寿命长，而不是“生育期长”。把 after they have had their descendants 误读为“长期保持生育能力”就会选错 E。",
            "为什么 F adaptability to a variety of foods（能适应多种食物）错误：第 7 段确实反复谈到食物（the availability of food、a plentiful supply of fish、share information about food hot spots），但那是在说海洋中的食物供应会突然变化，鲸鱼靠分享食物信息来应对，不是把“能适应多种食物”列为鲸鱼的自身特征，属于对原文信息的错误引申。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "Which THREE of the following features of whales are mentioned in the passage? C sensitivity to sound",
          "translation": "下列鲸鱼特征中，哪三项在文中被提到？C 对声音敏感",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Apart from their advanced mental abilities, they are adept at recognising sounds: ideal for communicating in the marine environment."
          },
          "synonyms": [
            "“sensitivity to sound” 同义替换为原文的 “adept at recognising sounds”（善于辨别声音）",
            "“ideal for communicating” 说明原文把辨音能力写成一项具体的生物学优势，与题干所说的“特征”性质一致",
            "第 4 段 “Killer whales detect prey with a range of echo-locating clicks, but converse with a vocabulary of squeaks, whistles and whines” 也从声呐定位与声音交流两方面印证鲸鱼对声音的高度依赖"
          ],
          "locatingTip": "定位：选项 C 的关键词是 sound，第 6 段 “they are adept at recognising sounds” 是直接对应句，第 4 段关于 echo-locating clicks 与叫声词汇的描写是旁证。确定答案技巧：题干用名词 sensitivity to sound（对声音的敏感性）表述特征，原文用动词短语 be adept at recognising sounds（善于辨别声音）表述同一件事，属于词性转换加同义替换，故 C 正确。做题时要注意把“听得准”与“发得出声”区分开：原文既讲了虎鲸用回声定位的咔嗒声探测猎物（声音的使用），又讲了它们善于辨别声音（对声音的敏感），后者才是本选项的依据。",
          "analysis": "第 6 段在列举鲸鱼在社会学习上的生物优势时说：“Apart from their advanced mental abilities, they are adept at recognising sounds: ideal for communicating in the marine environment.”（除了高级的心智能力，它们还善于辨认声音，这非常适合在海洋环境中交流）。adept at recognising sounds 正是“对声音的敏感性”这一选项的原文依据，作者还补充说明这一能力在海洋环境中对交流极为有利，进一步确认它是被明确提及的一项特征。文章其他段落也反复强化鲸鱼与声音的关系：第 4 段说虎鲸用回声定位的咔嗒声（echo-locating clicks）探测猎物，并用尖叫声、口哨声、哀鸣声这套词汇（a vocabulary of squeaks, whistles and whines）交流；第 2 段讲座头鲸的歌，第 4、5 段讲方言。整篇文章的声音线索非常密集，因此 C 是三个正确选项之一。作答时注意题干要求选出“文中提到的”三项，只要原文有一处明确对应的表述即可入选，不要求全篇反复论述。",
          "traps": [
            "为什么 B physical strength（体力）错误：文章从头到尾没有讨论鲸鱼的体力或身体力量。第 6 段的特征列表谈的是心智、辨音、养育后代与社会结构，第 8 段谈的是寿命，均与体力无关，属于未提及。",
            "为什么 E lengthy period of fertility（生育期长）错误：第 8 段的相关表述是 “they live up to a quarter of a century after they have had their descendants”，落点是“生育之后仍活很久”，说明的是寿命长（对应选项 D），而非生育能力持续很久。把“生育后寿命长”读成“生育期长”是把两个不同概念混为一谈。",
            "为什么 F adaptability to a variety of foods（能适应多种食物）错误：第 7 段讲到食物的内容是说海洋中的食物供应变化剧烈（one moment there might be a plentiful supply of fish, the next they've disappeared），虎鲸靠群体分享“食物密集点”的信息来应对，讨论的是信息共享与生态压力，并未说鲸鱼本身能适应多种食物，属于超出原文的推断。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "Which THREE of the following features of whales are mentioned in the passage? D prolonged life span",
          "translation": "下列鲸鱼特征中，哪三项在文中被提到？D 寿命长",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Female killer whales, like humans, are very unusual in that they live up to a quarter of a century after they have had their descendants."
          },
          "synonyms": [
            "“prolonged life span” 同义替换为原文的 “live up to a quarter of a century after they have had their descendants”（生育后代之后还能再活四分之一个世纪，即寿命长）",
            "“very unusual” 说明原文把这一现象作为一项引人注目的特征来强调，与题干所问的“特征”对应",
            "“like humans” 暗示这种长寿在动物界罕见，进一步印证这是一项被特别提及的生物学特征"
          ],
          "locatingTip": "定位：选项 D 的关键词是 life span（寿命），全文谈寿命与时序的是第 8 段（H 段），首句已经提示该段讲“共享信息导致了生物学上的变化”。确定答案技巧：看到 prolonged life span 不要只找 life 一词，要理解为“活得比一般情况更久”。第 8 段的 “they live up to a quarter of a century after they have had their descendants”（在生育后代之后还能再活四分之一个世纪）正是对长寿的具体描述，且以 very unusual（非常罕见）加以强调，故 D 正确。注意与选项 E 划清界限：原文强调的是“生育之后还能活很久”，落点在寿命而非生育期，所以选 D 不选 E。",
          "analysis": "第 8 段写道：“Female killer whales, like humans, are very unusual in that they live up to a quarter of a century after they have had their descendants. And what whale matriarchs offer is the most important thing of all – cultural knowledge, vital for the group's survival, passed directly from one generation to the next.”（雌性虎鲸和人类一样非常少见：它们在生育后代之后还能再活四分之一个世纪。而鲸群的雌性长辈所提供的，是最重要的东西——对群体生存至关重要的文化知识，一代代直接传下去）。前一句讲的就是寿命：一般动物在生育期结束后很快死亡，而雌性虎鲸能在完成生育之后再活约 25 年，这属于“寿命延长”的明确描写，与选项 D prolonged life span 对应，因此 D 是三个正确选项之一。后一句进一步说明这种长寿的意义——雌性长辈因此得以长期把文化知识传给后代，把寿命长与文化传承联系起来。作答时要把 D 与 E 明确区分：原文的落点是年龄（寿命），不是生育能力的持续时间，after they have had their descendants 只是时间起点的限定，不能反推出“生育期长”。",
          "traps": [
            "为什么 B physical strength（体力）错误：文中没有任何关于鲸鱼体力或身体力量的描述。第 8 段讲的是寿命与文化传承，第 6 段讲的是心智、辨音、育幼与社会结构，均未涉及体力，属于未提及。",
            "为什么 E lengthy period of fertility（生育期长）错误：选项 E 与原文表述极为接近，最容易误选。原文说 “they live up to a quarter of a century after they have had their descendants”，重心是“在生育之后还能活 25 年”，即寿命长；它恰恰说明生育集中在较早阶段，而不是生育期很长。把 after they have had their descendants 理解成“一直在生育”是对时间状语的误读。",
            "为什么 F adaptability to a variety of foods（能适应多种食物）错误：第 7 段虽然谈到食物，但讨论的是食物供应的剧烈波动以及鲸鱼通过分享“食物密集点”信息来应对，属于群体信息共享与生态压力的议题，原文并未把“能适应多种食物”作为鲸鱼的特征列出，属于无据引申。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 38–40 段落信息匹配（Which paragraph contains the following information？A–H）",
      "mode": "per_question",
      "questionRange": {
        "start": 38,
        "end": 40
      },
      "items": [
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "an example of the kind of information passed by whales to each other",
          "translation": "鲸鱼彼此传递的某类信息的一个例子。",
          "answer": "G",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "The dialects of killer whales allow members of the group to identify each other, enabling them to share information about food hot spots."
          },
          "synonyms": [
            "“an example of the kind of information passed by whales to each other” 同义替换为原文的 “share information about food hot spots”：food hot spots（食物密集点）就是被传递的那类信息的具体例子",
            "“passed … to each other” 同义替换为原文的 “share information”",
            "“whales” 与原文的 “The dialects of killer whales” 对应，说明传递信息的双方是同一群体内的虎鲸"
          ],
          "locatingTip": "定位：题干的关键词是 information passed、each other 与 example。全文出现 share information 的是第 7 段（G 段），扫读时抓住 information 一词即可命中。确定答案技巧：题干要的是“传递信息的例子”，而 G 段在说明方言的用处时说 “share information about food hot spots”，food hot spots 就是被分享的信息内容，属于具体例证；同段还提到 “the past experience of senior members of the group – and the ability to share this knowledge”，与 sharing information 形成前后呼应。段落匹配题的题干常把具体对象抽象化，本题的解法就是把 food hot spots 识别为一个“例子”，落段为 G。",
          "analysis": "第 7 段解释鲸类为何进化出向他者学习的能力，末尾两句是本题依据：“When that happens, the past experience of senior members of the group – and the ability to share this knowledge – is a huge asset. The dialects of killer whales allow members of the group to identify each other, enabling them to share information about food hot spots.”（遇到这种情况，群体中年长成员的过往经验、以及分享这些知识的能力，就成了一大财富。虎鲸的方言让群体成员能够彼此辨识，从而使它们得以分享关于食物密集点的信息）。题干要求找“鲸鱼彼此传递的某类信息的一个例子”，而原文给出的正是被分享的信息内容——食物密集点（food hot spots）的位置，这是一个具体而明确的例子，因此答案是 G。其他段落也谈信息或在群体中传承，但侧重点不同：第 4 段讲方言本身的差异，第 5 段讲方言是从群体学来的而非遗传，第 8 段讲文化知识一代代传递，都没有给出“被传递的信息究竟是什么”的实例；只有 G 段落到 food hot spots 这一具体对象上，符合题干对“example”的要求。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "a reference to variations in communication styles between different cultures within one species",
          "translation": "提到同一物种内部不同“文化”之间在交流方式上的差异。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Residents have a much more extensive repertoire, and each family group has its own unique and distinctive set of calls. Despite regular interaction between them, each resident pod sticks firmly to its own dialect."
          },
          "synonyms": [
            "“variations in communication styles” 同义替换为原文的 “each family group has its own unique and distinctive set of calls”（每个家族都有自己独有而鲜明的叫声组合）",
            "“between different cultures within one species” 同义替换为原文的 “each resident pod sticks firmly to its own dialect”：同一物种虎鲸内部的不同群体各有方言，即“不同文化”",
            "“a reference to” 只要求在文中被提及，本段整段正是对定居型与过客型、以及各家族之间叫声体系差异的对照描写"
          ],
          "locatingTip": "定位：题干关键词是 communication styles、variations 与 within one species。全文系统描写“同一物种不同群体的交流方式差异”的是第 4 段（D 段），该段首句 “One of the most obvious distinctions between the transient and resident societies is the way they impart information” 已直接点题。确定答案技巧：题干中的 one species 指虎鲸，different cultures 指第 3 段所说的 “two quite separate cultures”（定居型与过客型）以及各家族群体。D 段先对比两类群体叫声数量的多寡，再指出定居型“每个家族各有自己的叫声组合、各自坚守方言”，正是“同一物种内部交流方式存在差异”的集中表述，因此选 D。注意区分：第 2 段讲的座头鲸歌曲差异属于不同海洋的种群差异，第 5 段讲的是方言的来源（学得而非遗传），都不如 D 段贴合“同一物种内部不同文化之间的交流差异”这一表述。",
          "analysis": "第 3 段已经铺垫了“文化”这一概念：虎鲸被分为定居型与过客型两个群体，“In effect, they belong to two quite separate cultures”（实际上它们属于两种相当不同的文化）。第 4 段则集中描写这两类文化在交流方式上的差异：“Killer whales detect prey with a range of echo-locating clicks, but converse with a vocabulary of squeaks, whistles and whines. Transients have only a few such calls, and all transient societies share the same ones. Residents have a much more extensive repertoire, and each family group has its own unique and distinctive set of calls. Despite regular interaction between them, each resident pod sticks firmly to its own dialect.”（虎鲸用一系列回声定位的咔嗒声探测猎物，却用尖叫声、口哨声与哀鸣声这套词汇交谈。过客型只有少数几种叫声，所有过客型群体共用同一套；定居型的曲库丰富得多，每个家族群体都有自己独有而鲜明的叫声组合。尽管彼此经常往来，每个定居型群体依然坚守自己的方言）。这段话里既有群体之间（定居型对过客型）的差异，也有群体内部（各家族、各 pod）的差异，而比较的对象同属虎鲸这一个物种，完全对应题干所说的“同一物种内部不同文化之间在交流方式上的差异”，因此答案是 D。段落信息匹配题常常一个段落对应多个题干，第 4 段就同时服务于本题与前面的判断题（Q28–31），只要题干信息确实落在该段即可，不必担心重复。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "ways in which the skills of whales are favourable for the development of culture",
          "translation": "鲸鱼的哪些能力有利于文化的发展。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Many species spend years rearing their offspring, and live in small, stable, multi-generational societies, a social system that provides ample opportunity for teaching and learning."
          },
          "synonyms": [
            "“ways in which the skills of whales are favourable for the development of culture” 同义替换为原文的 “a social system that provides ample opportunity for teaching and learning”（社会结构为教与学提供了充足机会）",
            "“the skills of whales” 对应本段列举的生物学特征：“biological attributes that give them an advantage in social learning” 与 “advanced mental abilities”、“adept at recognising sounds”、“spend years rearing their offspring”",
            "“favourable for the development of culture” 同义替换为原文的 “give them an advantage in social learning”（在社会学习上占据优势），社会学习正是文化形成的基础"
          ],
          "locatingTip": "定位：题干关键词是 skills、favourable 与 development of culture。全文集中列举鲸鱼在文化方面先天优势的是第 6 段（F 段），该段以 “Whales have several biological attributes that give them an advantage in social learning.” 开篇，句意与题干几乎重合。确定答案技巧：题干问的是“哪些能力有利于文化发展”，要在原文找“能力特点”与“有利于学习或文化形成”之间的因果或优势关系。F 段先总说鲸鱼的若干生物学特征让它们在社会学习上占优，接着用 Apart from 逐项列出：高级心智能力、善于辨音、多年养育后代、生活在规模小且稳定的多代社会中，最后以 “a social system that provides ample opportunity for teaching and learning” 收束——这就是“有利于文化发展”的明确表述，因此选 F。",
          "analysis": "第 6 段是讨论“这算不算文化”的段落，作者先引 Frans de Waal 的观点，把文化视为一种在众多生物身上演化出来的生物学适应，随后说明鲸鱼为何在这方面具备优势：“Whales have several biological attributes that give them an advantage in social learning. Apart from their advanced mental abilities, they are adept at recognising sounds: ideal for communicating in the marine environment. Many species spend years rearing their offspring, and live in small, stable, multi-generational societies, a social system that provides ample opportunity for teaching and learning.”（鲸鱼具有若干让它们在社会学习上占优的生物学特征。除了高级的心智能力，它们还善于辨认声音，非常适合在海洋环境中交流。许多物种要花多年养育后代，并生活在规模小、稳定、多代同堂的社会中，这样的社会结构为教与学提供了充足的机会）。题干问“鲸鱼的哪些能力有利于文化的发展”，本段正好列举了一组“能力加优势”的配对：advanced mental abilities、adept at recognising sounds、spend years rearing their offspring、live in small, stable, multi-generational societies，每一项都直接说明它们如何有利于学习与传承；段落末句更把社会结构总结为“为教与学提供了充足机会”，即文化发展所依赖的条件。因此答案是 F。要区分第 7 段：G 段讲的是“为什么会进化出向他者学习的能力”（生态因素与食物供应的变化），侧重成因；第 6 段讲的是“鲸鱼具备哪些有利于文化形成的先天条件”，侧重条件，与本题干完全对应。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
