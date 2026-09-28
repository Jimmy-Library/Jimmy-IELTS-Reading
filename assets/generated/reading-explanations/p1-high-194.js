(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-194", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-194",
  "meta": {
    "examId": "p1-high-194",
    "title": "The history of the British wool industry 英国羊毛产业的历史",
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
          "stem": "The process of making cloth from wool was introduced to Britain by the Romans.",
          "translation": "用羊毛织布的工艺是由罗马人传入不列颠的。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "It was made into cloth there in the Bronze Age, which began about 1900 BC. By the time the Romans invaded in 55 BC the Britons had developed a wool industry, and this was encouraged by their new masters."
          },
          "synonyms": [
            "“making cloth from wool” 同义替换为原文的 “made into cloth”（织成布）",
            "“was introduced to Britain” 与原文的 “the Britons had developed a wool industry”（不列颠人已经发展出自己的羊毛产业）方向相反：一个说工艺由外人带来，一个说当地人早已掌握",
            "“by the Romans” 在原文只对应 “encouraged by their new masters”（被新的统治者鼓励、扶持），并未说罗马人引入了织布工艺"
          ],
          "locatingTip": "定位：题干的关键词是 the Romans 与 Britain，均在第 1 段出现，扫读时盯住第 1 段中罗马人入侵的时间节点 “By the time the Romans invaded in 55 BC” 即可锁定。确定答案技巧：判断“某工艺由谁传入”的题目，核心是核对该工艺在“传入者”到来之前是否已经存在。原文先给出 “It was made into cloth there in the Bronze Age, which began about 1900 BC”，说明早在公元前 1900 年左右的青铜时代当地就已经把羊毛织成布；随后又说罗马人公元前 55 年入侵时 “the Britons had developed a wool industry”，用的是过去完成时 had developed，明确表示这一产业在罗马人到来的**之前**就已经形成，罗马人只是 “encouraged”（鼓励、扶持）了它。时间线一看就矛盾：织布早于罗马人，而不是由罗马人带入，所以答案是 FALSE。",
          "analysis": "第 1 段前三句构成完整的时间线：①“Wool is part of Britain's history and heritage, more so than any other commodity ever produced in that country.”（羊毛是这个国家历史与遗产的一部分，程度超过该国出产过的任何其他商品）；②“It was made into cloth there in the Bronze Age, which began about 1900 BC.”（公元前 1900 年开始的青铜时代，当地人已经把羊毛织成布）；③“By the time the Romans invaded in 55 BC the Britons had developed a wool industry, and this was encouraged by their new masters.”（到公元前 55 年罗马人入侵时，不列颠人已经发展出羊毛产业，这一产业得到新统治者的鼓励）。题干说织布工艺 “was introduced to Britain by the Romans”（由罗马人传入不列颠），而原文的时间顺序恰恰相反：青铜时代（约公元前 1900 年）就已经有了织布，罗马人公元前 55 年才到，而且原文用的动词是 “encouraged”（鼓励），不是 introduced（引入）。题干把“罗马人扶持既有产业”偷换为“罗马人引入这一工艺”，与原文事实相反，因此判 FALSE。做本题的关键是抓时间线索与动词性质：had developed 说明产业先于罗马人存在，encouraged 只表示支持，不等于引入。",
          "traps": [
            "为什么不是 TRUE：原文明确把织布的时间定在青铜时代（约公元前 1900 年），并说罗马人入侵（公元前 55 年）时不列颠人 “had developed a wool industry”，即产业在罗马人到来的**之前**就已存在；罗马人所做的只是 “encouraged”（鼓励）。题干说工艺由罗马人引入，与这条时间线直接冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文既交代了织布出现的年代（Bronze Age, about 1900 BC），也交代了罗马人到来时该产业的状态（已经发展起来、被新统治者鼓励），信息完整而明确，只是与题干相反。存在明确相反信息时应判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "In the twelfth century, exporting woollen cloth was less profitable than exporting raw wool.",
          "translation": "在 12 世纪，出口毛料布料不如出口原毛赚钱。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Cloth making was widespread, particularly in the large towns of southern and eastern England, nearest to France. But the greatest wealth came from exports of raw wool."
          },
          "synonyms": [
            "“exporting woollen cloth” 对应原文的 “Cloth making”（布料的制作）",
            "“less profitable” 同义替换为原文的 “the greatest wealth came from exports of raw wool”：最大的财富来自原毛出口，说明原毛出口获利更高，即布料出口相对更不赚钱",
            "“In the twelfth century” 对应上一句的 “By the twelfth century”",
            "原文用转折词 “But” 把 “Cloth making was widespread” 与 “the greatest wealth came from exports of raw wool” 对比，构成“布料虽普遍、但最赚钱的是原毛”的逻辑"
          ],
          "locatingTip": "定位：题干的时间状语 In the twelfth century 是最好用的定位词，回到第 1 段找 “By the twelfth century”，该句之后到段末就是答句所在，段尾的 “But the greatest wealth came from exports of raw wool” 是直接依据。确定答案技巧：这是一道比较级判断题（A 比 B 获利少），解题关键是看原文有没有把两者的“获利高低”排序。原文先说织布很普遍，紧接着用转折 But 指出 “the greatest wealth came from exports of raw wool”（最大的财富来自原毛出口）。最高级 the greatest 已经把“获利最多”的位置给了原毛出口，反过来就等于说布料出口获利不如原毛，与题干 less profitable 方向一致，故选 TRUE。注意不要因为原文说 “Cloth making was widespread”（织布很普遍）而误判 FALSE——普遍程度不等于获利水平，雅思常把“量大”和“利高”分开陈述。",
          "analysis": "第 1 段末尾三句是本题的落点：“By the twelfth century, wool was becoming England's greatest national asset. Cloth making was widespread, particularly in the large towns of southern and eastern England, nearest to France. But the greatest wealth came from exports of raw wool.”（到 12 世纪，羊毛正成为英格兰最大的国家财富来源。织布活动十分普遍，尤其集中在离法国最近的英格兰南部和东部大城市。但最大的财富来自原毛出口）。题干把原文的两层意思合成一个比较句：In the twelfth century（对应 By the twelfth century）说明时间相同；exporting woollen cloth 对应 Cloth making；less profitable than exporting raw wool 对应 “the greatest wealth came from exports of raw wool”。原文用 the greatest wealth（最大的财富）给原毛出口排了第一名，等于承认织布出口赚得比它少，两者逻辑同向，因此答案是 TRUE。做题时要注意命题人常用的“比较级改写”手法：原文给出最高级或排序，题干用比较级表述，只要方向一致就是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文的 “But the greatest wealth came from exports of raw wool” 明确把“最大的财富”归给原毛出口，即原毛出口比布料出口获利更多，与题干“布料出口获利更少”完全同向，没有矛盾点，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅说明织布普遍，还用 But 引出对比、用最高级 the greatest wealth 给出获利排序，两者的获利高低关系已经写明，并非没有提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Rulers had a financial interest in the success of the wool industry.",
          "translation": "统治者从羊毛产业的兴旺中获得了经济利益。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Kings and their ministers welcomed the revenue that resulted from exports and export taxes"
          },
          "synonyms": [
            "“Rulers” 同义替换为原文的 “Kings and their ministers”（国王及其大臣）",
            "“had a financial interest in” 同义替换为原文的 “welcomed the revenue”（欢迎由此而来的收入）",
            "“the success of the wool industry” 对应原文的 “exports and export taxes”（羊毛出口与出口税）"
          ],
          "locatingTip": "定位：题干主语 Rulers 是抽象概括词，原文不会直接出现，需要靠同义替换去找：表示“统治者”的 Kings and their ministers 出现在第 2 段首句，一步定位。确定答案技巧：本题的落点是 “financial interest”（经济利益），原文用 “welcomed the revenue that resulted from exports and export taxes” 正面回答——国王与大臣欢迎羊毛出口及出口税带来的财政收入，这正是“经济利益”的体现。再看第 2 段后文 “the power it gave to the king, who could grant or withdraw permits”，说明这项收入还附带权力，进一步印证统治者与羊毛产业利益攸关，因此判 TRUE。",
          "analysis": "第 2 段开头：“Kings and their ministers welcomed the revenue that resulted from exports and export taxes – and also the power it gave to the king, who could grant or withdraw permits for the wool towns and for the industry.”（国王及其大臣欢迎羊毛出口与出口税带来的财政收入，也看重由此获得的权力——国王可以授予或撤销羊毛城镇及该行业的生产许可）。题干用概括词 Rulers 替换原文的 Kings and their ministers，用 had a financial interest in 替换 welcomed the revenue，指向的都是同一件事：统治者的钱袋子与羊毛出口、出口税直接挂钩。原文中 “revenue”（财政收入）与 “export taxes”（出口税）都属于明确的金钱利益，与题干 financial interest 一一对应；后半句的 “the power it gave to the king” 虽然谈的是权力，但它同样源于这项产业，不构成矛盾。因此题干与原文同向，答案选 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文说国王及其大臣 “welcomed the revenue that resulted from exports and export taxes”，收入直接来自羊毛出口与出口税，说明统治者在羊毛产业中有切实的经济利益，与题干一致，选 FALSE 没有依据。",
            "为什么不是 NOT GIVEN：本题最容易误判为 NOT GIVEN，因为题干只提“经济利益”，而原文还提到权力。但原文首句已经用 revenue（财政收入）把经济收益讲得清清楚楚，属于已明确交代的信息；权力只是额外补充，不影响“有经济利益”这一点成立，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "An outbreak of bubonic plague led to a sharp fall in sheep numbers.",
          "translation": "一次黑死病的爆发导致绵羊数量急剧下降。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "This led to an increase of the sheep flocks, for there were not enough people left to cultivate the land for arable crops."
          },
          "synonyms": [
            "“bubonic plague” 在原文原词复现：“by bubonic plague (the Black Death)”",
            "“led to” 同义替换为原文的 “This led to”（This 指代上一句的黑死病造成的人口锐减）",
            "“a sharp fall in sheep numbers” 与原文的 “an increase of the sheep flocks”（羊群数量增加）直接矛盾：一个是下降，一个是上升"
          ],
          "locatingTip": "定位：题干的关键词是 bubonic plague，这一词组较生僻、辨识度高，回原文第 3 段找 “and by bubonic plague (the Black Death)”，紧接其后的因果句就是判分句。确定答案技巧：这是一道典型的“因果 + 数量变化”判断题，命题人把原因（plague）保留、把结果（羊的数量）反着说。原文说黑死病导致人口大量死亡，紧接着 “This led to an increase of the sheep flocks, for there were not enough people left to cultivate the land for arable crops”，即因为没人种地，羊群反而增多了。题干的 sharp fall（急剧下降）与原文的 an increase（增加）方向完全相反，因此判 FALSE。看到因果判断题，一定要先把原文的结果词（increase / fall、rise / decline）圈出来再与题干比对。",
          "analysis": "第 3 段后半部分讲黑死病的后果：“...But it was overshadowed by a long war with France (export taxes on wool were one of the principal means of financing the war) and by bubonic plague (the Black Death), which in 1349 caused devastation: in many villages as much as three-quarters of the population died. This led to an increase of the sheep flocks, for there were not enough people left to cultivate the land for arable crops.”（……但这一繁荣被与法国的长期战争以及黑死病所笼罩，1349 年的疫情造成毁灭性后果：许多村庄多达四分之三的人口死亡。这反而导致羊群数量增加，因为已经没有足够的人手去耕种土地、种植农作物）。题干保留了原因（bubonic plague），却把结果改成 “a sharp fall in sheep numbers”（绵羊数量急剧下降），而原文的结果恰恰相反——是 “an increase of the sheep flocks”。原文给出的因果链是：人口锐减、无人耕作农地，于是羊群得以扩张。题干与原文在结果方向上正面对立，属事实矛盾，答案判 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确写 “This led to an increase of the sheep flocks”（这导致羊群增加），并与题干 “a sharp fall in sheep numbers”（羊数量急剧下降）直接对立。题干与原文结果相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅提到黑死病，还专门用一句交代了它对羊群数量的影响（increase of the sheep flocks）及其原因（劳动力不足、农地无人耕种），信息完整且与题干相反，不属于未提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Worsted cloth was cheaper to produce than other types of woollen fabric.",
          "translation": "精纺呢绒（worsted）的生产成本低于其他类型的毛织品。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Instead, East Anglia used the long, fine wool from its native sheep breeds to produce a cloth which did not require the fulling process. This was the type of cloth which is now called 'worsted', after the village of Worstead."
          },
          "synonyms": [
            "“Worsted cloth” 在原文原词出现：“the type of cloth which is now called 'worsted'”",
            "“did not require the fulling process” 只说明工艺流程中省去了缩绒（fulling）一步，并不等于成本更低",
            "“cheaper to produce” 在原文找不到任何对应表述：原文既没有提价格、成本，也没有把 worsted 与其他毛织品的成本做比较"
          ],
          "locatingTip": "定位：题干关键词 Worsted cloth 是专有名词，其定义句出现在第 5 段末尾 “the type of cloth which is now called 'worsted'”，据此锁定第 5 段；注意 worsted 一词在第 5 段还见于 “dominated the worsted trade”，第 6 段另有 “output of worsted from Yorkshire”，只搜单词容易被带到第 6 段，应认准定义句与 “did not require the fulling process” 这一依据句。确定答案技巧：题目问的是“更便宜（cheaper）”，属于价格/成本维度。原文确实说这种布 “did not require the fulling process”（不需要缩绒工序），讲的只是工艺差异；省掉一道工序容易被读者自行推断为“更便宜”，但原文在讲 worsted 的这几句里没有出现 cost、price、cheap、expensive 之类的词（第 8 段的 inexpensive 说的是煤炭价格，与本题无关），也没有把 worsted 同其他毛织品放在一起比较成本。按判断题规则，“原文未提及”一律判 NOT GIVEN，不能靠常识脑补。",
          "analysis": "第 5 段：“In East Anglia there was soft water, but no hills or fast-running streams to provide power for fulling mills. Instead, East Anglia used the long, fine wool from its native sheep breeds to produce a cloth which did not require the fulling process. This was the type of cloth which is now called 'worsted', after the village of Worstead.”（东盎格利亚有软水，却没有山丘或湍急溪流来为缩绒作坊提供动力。于是东盎格利亚改用本地羊种产出的细长羊毛，织出一种无需缩绒工序的布料。这种布后来以沃斯特德村命名为 worsted）。原文提供的信息只有三类：东盎格利亚缺乏缩绒用水力、改用本地细长羊毛、这种布不需要缩绒工序。题干问的是 “cheaper to produce”（生产成本更低），属于价格维度，原文完全没有涉及；而且原文只把 worsted 与“其他需要缩绒的布料”在**工序**上作了区分，并未作成本比较。信息缺失，答案判 NOT GIVEN。本题的陷阱在于“不需缩绒”很容易被读成“更省事、更便宜”，但雅思判断严格依据原文陈述，任何超出原文的推断都不能作为判分依据。",
          "traps": [
            "为什么不是 TRUE：原文只说 worsted “did not require the fulling process”（不需要缩绒工序），这是工艺流程上的差别，并未提及成本或价格；把“少一道工序”推断为“更便宜”属于超出原文的推理，不能选 TRUE。",
            "为什么不是 FALSE：原文既没有说 worsted 更贵，也没有否认它更便宜，对“成本高低”这一问题完全没有表态。没有相反信息就不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
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
          "stem": "16th century: skilled 6 ________ emigrated to England",
          "translation": "16 世纪：技艺娴熟的 ________ 移居英格兰。",
          "answer": "weavers",
          "wordClass": "名词（复数，指人；空格后紧跟谓语 emigrated，作其主语，原文为复数 French weavers，故填复数形式）",
          "locating": {
            "paragraph": "6",
            "quote": "In the sixteenth century, French weavers, persecuted for their Protestant religion, sought refuge in England and took their skills with them."
          },
          "synonyms": [
            "“16th century” 同义替换为原文的 “In the sixteenth century”",
            "“skilled” 同义替换为原文的 “took their skills with them”（把技艺一并带了过来），也呼应前文第 2 段对 weavers 的释义 “people who produce cloth from woollen threads”",
            "“emigrated to England” 同义替换为原文的 “sought refuge in England”（到英格兰寻求庇护，即移居英格兰）"
          ],
          "locatingTip": "定位：用时间线索 16th century 回原文找 “In the sixteenth century”，落在第 6 段中部；也可先用国家/地区名 England 缩小范围。确定答案技巧：题干结构是 “skilled [6] emigrated to England”，需要在原文找“移居英格兰的、有技艺的人”。原文对应句为 “French weavers, persecuted for their Protestant religion, sought refuge in England and took their skills with them”，其中 sought refuge in England 即 emigrated to England，took their skills with them 即 skilled，动作的发出者就是 French weavers。空格位于形容词 skilled 之后、谓语 emigrated 之前，是句子的主语；原文用的是复数 French weavers，因此答案必须写复数名词 weavers。",
          "analysis": "第 6 段：“In the sixteenth century, French weavers, persecuted for their Protestant religion, sought refuge in England and took their skills with them.”（16 世纪，因信奉新教而受到迫害的法国织工到英格兰避难，并把他们的技艺带了过来）。笔记第一条 “16th century: skilled 6 ____ emigrated to England” 与这句话逐项对应：时间一致（the sixteenth century）；主体是 French weavers；skilled 对应 took their skills with them（技艺随身而来，说明他们是熟练织工）；emigrated to England 对应 sought refuge in England。因此空格要填的名词是 weavers。从语法看，空格前是形容词 skilled、空格后是谓语 emigrated，说明空格充当句子的主语；原文用的是复数 French weavers，因此答案应写复数 weavers，与答案表一致。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "end 17th century: majority of English 7 ________ were wool products",
          "translation": "17 世纪末：英格兰 ________ 的大部分都是毛纺产品。",
          "answer": "exports",
          "wordClass": "名词（复数；空格位于介词 of 之后，与 majority 一起构成主语，后面的复数谓语 were 要求用复数形式 exports）",
          "locating": {
            "paragraph": "6",
            "quote": "England began to surpass Flanders in woollen manufacture; by the end of the seventeenth century it comprised two-thirds of the value of its exports."
          },
          "synonyms": [
            "“end 17th century” 同义替换为原文的 “by the end of the seventeenth century”",
            "“majority of English …” 同义替换为原文的 “two-thirds of the value of its exports”（三分之二已超过一半，属严格多数，与题干 majority 一致）",
            "“were wool products” 对应原文前半句的 “woollen manufacture”（毛纺织业，即它构成了出口总值的三分之二）"
          ],
          "locatingTip": "定位：题干的时间 “end 17th century” 对应原文第 6 段的 “by the end of the seventeenth century”，一步定位。确定答案技巧：本题要填的是被“三分之二”修饰的那个名词，即 “two-thirds of the value of its exports” 中的 exports。题干说 “majority of English [7] were wool products”，主语是复数、谓语用 were，说明空格必须是复数名词；exports 正好是复数，且 “two-thirds of the value of its exports” 表示出口总值中三分之二来自毛纺织业，等价于“英格兰出口产品大部分是毛纺产品”。注意代词 it 回指前文的 woollen manufacture，理解这层指代是判定的关键。",
          "analysis": "第 6 段：“English cloth quickly achieved an international reputation. From being primarily a raw wool exporter, the country became in the fourteenth and fifteenth centuries a manufacturer and exporter of cloth. ... England began to surpass Flanders in woollen manufacture; by the end of the seventeenth century it comprised two-thirds of the value of its exports.”（英格兰布料很快赢得国际声誉。它从一个以原毛出口为主的国家，在 14、15 世纪变成了布料的制造国与出口国。……英格兰在毛纺织方面开始超越佛兰德斯；到 17 世纪末，毛纺织已占其出口总值的三分之二）。句中 it 回指上文的 woollen manufacture（毛纺织业），即“毛纺织占出口总值的三分之二”，转换成题干的说法就是“英格兰出口品的大部分是毛纺产品”，空格所填正是 exports。语法上，题干谓语为复数 were，主语必须是复数名词，exports 符合；若填单数 export 或名词 exportation 都会与谓语不一致或不符合 ONE WORD ONLY 的原词要求。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "18th century: production of worsted cloth increased in Yorkshire – growth of five key manufacturing 8 ________",
          "translation": "18 世纪：约克郡的精纺呢绒产量增加——五个主要制造业 ________ 成长起来。",
          "answer": "towns",
          "wordClass": "名词（复数，指城镇；空格前有数词 five 和 manufacturing 修饰，在笔记条目中作介词 of 的宾语中心语，须用复数形式 towns）",
          "locating": {
            "paragraph": "6",
            "quote": "By 1770, output of worsted from Yorkshire equalled that of East Anglia, and its cloth manufacturing district began to take shape with the expansion of major towns: Leeds, Bradford, Halifax, Huddersfield, and Wakefield."
          },
          "synonyms": [
            "“production of worsted cloth increased in Yorkshire” 同义替换为原文的 “output of worsted from Yorkshire equalled that of East Anglia”，表示约克郡的产量赶上了东盎格利亚、地位上升",
            "“18th century” 对应原文的时间点 “By 1770”（1770 年，属 18 世纪后期）",
            "“growth of five key manufacturing …” 同义替换为原文的 “the expansion of major towns”，expansion 即 growth，并随后列出五座城镇名"
          ],
          "locatingTip": "定位：题干中的 Yorkshire 与 worsted 都是高频专有词，回原文第 6 段末尾找 “output of worsted from Yorkshire”，随后一句即判分句。确定答案技巧：题干说“五座主要制造业 ______ 成长起来”，数量词 five 是关键提示，回原文找列了五个项目的地方。原文 “the expansion of major towns: Leeds, Bradford, Halifax, Huddersfield, and Wakefield” 正好列出五座城镇（冒号后逐一列名），expansion 与题干 growth 同义，故空格填 towns。语法上空格被数词 five 修饰，必须写复数 towns；不要误填列举出来的具体城市名（ONE WORD ONLY 且题干已用 five key 概括，不要求举例）。",
          "analysis": "第 6 段末句：“By 1770, output of worsted from Yorkshire equalled that of East Anglia, and its cloth manufacturing district began to take shape with the expansion of major towns: Leeds, Bradford, Halifax, Huddersfield, and Wakefield.”（到 1770 年，约克郡的精纺呢绒产量已与东盎格利亚相当，随着主要城镇的扩张，它的布料制造区开始成形：利兹、布拉德福德、哈利法克斯、哈德斯菲尔德和韦克菲尔德）。笔记第三条 “18th century: production of worsted cloth increased in Yorkshire – growth of five key manufacturing [8]” 与此一一对应：时间 1770 属 18 世纪；产量变化用 equalled that of East Anglia 表达（由追赶到并驾齐驱、产量上升）；空格所在短语 “growth of five key manufacturing …” 对应 “the expansion of major towns”，而冒号后恰好列出五座城镇，数量吻合。答案 towns 为复数名词，与数词 five 一致。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "1750–1850: new machinery was developed – initially for the production of 9 ________",
          "translation": "1750—1850 年：新机器问世——最初用于 ________ 的生产。",
          "answer": "cotton",
          "wordClass": "名词（不可数，指棉花／棉纺织业；作介词 of 的宾语，用不可数形式 cotton，不加复数、不加冠词）",
          "locating": {
            "paragraph": "7",
            "quote": "It led the way for new inventions stemming from the Lancashire cotton industry, to mechanize and speed dramatically the processes of spinning and weaving."
          },
          "synonyms": [
            "“1750–1850” 同义替换为原文的 “The Industrial Revolution of 1750–1850”，年份区间原样对应",
            "“new machinery was developed” 同义替换为原文的 “led the way for new inventions … to mechanize”，inventions 与 machinery 同指新设备",
            "“initially for the production of …” 同义替换为原文的 “stemming from the Lancashire cotton industry”，说明新机器最初源自棉纺织业、服务于棉花生产"
          ],
          "locatingTip": "定位：题干给出明确的年代区间 1750–1850，回原文第 7 段首句 “The Industrial Revolution of 1750–1850 also brought change”，第二句即为判分句。确定答案技巧：题干说“新机器最初是用于某种生产”，原文写 “new inventions stemming from the Lancashire cotton industry”，意思是这些新机器起源于兰开夏的棉纺织业，最初服务的对象就是棉花（cotton）。题干把 “cotton industry”（棉花工业）压缩为 “the production of [9]”，空格承担 industry 前的材料/门类词，填 cotton。注意只写一个词，填 cotton 而非 cotton industry；也不要填 inventions 或 machinery，那是题干已给出的信息。",
          "analysis": "第 7 段：“The Industrial Revolution of 1750–1850 also brought change. It led the way for new inventions stemming from the Lancashire cotton industry, to mechanize and speed dramatically the processes of spinning and weaving.”（1750—1850 年的工业革命同样带来了变化。它催生了源自兰开夏棉纺织业的新发明，用机器大幅加快并加速了纺纱与织布过程）。笔记第四条 “1750–1850: new machinery was developed – initially for the production of [9]” 对应第二句：new machinery 对应 new inventions；was developed 对应 it led the way for（催生）；initially for the production of 对应 stemming from the Lancashire cotton industry——机器最初诞生于棉纺织业，也就是首先用于棉花的生产。因此答案是 cotton。语法上 of 后需要名词性成分，cotton 是不可数名词，填原形即可（不加 -s，也不加 the）。下一句 “Mechanization had been opposed in the past and it was again.” 讲的是对机械化的抵制，与本题空格无关，不要误填。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "1812: protests resulted in the 10 ________ of machinery",
          "translation": "1812 年：抗议导致了机器的 ________。",
          "answer": "destruction",
          "wordClass": "名词（不可数，表示“毁坏”这一动作；位于介词 in 之后作宾语，空格前有定冠词 the、后有 of machinery，故填名词单数形式 destruction）",
          "locating": {
            "paragraph": "7",
            "quote": "The widespread unrest of 1812 led to the destruction of equipment by bands of rioters, who feared they would lose employment."
          },
          "synonyms": [
            "“1812” 与原文年份原样对应（“The widespread unrest of 1812”）",
            "“protests” 同义替换为原文的 “widespread unrest”（大范围的骚乱、动乱）与 “bands of rioters”（成群的闹事者）",
            "“resulted in” 同义替换为原文的 “led to”（导致）",
            "“machinery” 同义替换为原文的 “equipment”（设备），指被砸毁的机器"
          ],
          "locatingTip": "定位：题干以年份 1812 开头，是最好用的定位词，回原文第 7 段找到 “The widespread unrest of 1812”，同一句就是判分句。确定答案技巧：题干结构是 “protests resulted in the [10] of machinery”，需要在原文找“抗议导致机器的某种结果”。原文 “The widespread unrest of 1812 led to the destruction of equipment by bands of rioters” 中，unrest 对应 protests、led to 对应 resulted in、equipment 对应 machinery，剩下的 “the … of” 结构里的名词就是 destruction。语法上空格前有定冠词 the、后面接 of machinery，需要一个名词填充 “the [10] of machinery” 这一名词短语，答案填 destruction，不要写成动词 destroy。",
          "analysis": "第 7 段后半：“Mechanization had been opposed in the past and it was again. The widespread unrest of 1812 led to the destruction of equipment by bands of rioters, who feared they would lose employment. But machinery won the day.”（过去就有人反对机械化，此时反对再次出现。1812 年大范围的骚乱导致成群的闹事者砸毁设备，他们担心自己会失去工作。但最终机器占了上风）。笔记第五条 “1812: protests resulted in the [10] of machinery” 与中间一句完全对应：年份相同；protests 概括了 unrest 与 rioters；resulted in 对应 led to；machinery 对应 equipment；空格位于 the 与 of machinery 之间，构成 “the destruction of machinery”。答案 destruction 是不可数名词，保持不变形，也不要误填与骚乱有关的 rioting 或 unrest（那属于题干抗议一侧的信息）。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "19th century: in Yorkshire mechanisation increased, aided by the availability of cheap 11 ________",
          "translation": "19 世纪：约克郡的机械化程度提高，得益于廉价 ________ 的供应。",
          "answer": "coal",
          "wordClass": "名词（不可数，指煤炭；受前面的形容词 cheap 修饰，与 cheap 一起构成介词 of 的宾语，原文为 inexpensive coal，故用 coal）",
          "locating": {
            "paragraph": "8",
            "quote": "supported by abundant supplies of inexpensive coal to generate steam and, later, electrical power."
          },
          "synonyms": [
            "“19th century” 对应原文第 8 段首句的 “Over the course of the nineteenth century”",
            "“mechanisation increased” 同义替换为原文的 “where machinery was more readily accepted” 与 “The younger industry jumped ahead and never lost its lead”",
            "“aided by the availability of” 同义替换为原文的 “supported by abundant supplies of”（由充足的供应支撑）",
            "“cheap” 同义替换为原文的 “inexpensive”（廉价）"
          ],
          "locatingTip": "定位：题干的关键词是 Yorkshire 与 19th century，回原文第 8 段找 “Over the course of the nineteenth century ... They were overtaken by Yorkshire”，随后一句讲约克郡的优势即为判分句。确定答案技巧：题干问“得益于廉价的什么”，需要在原文找被 cheap 修饰的名词。原文写 “supported by abundant supplies of inexpensive coal to generate steam and, later, electrical power”，其中 inexpensive 对应 cheap、abundant supplies of 对应 the availability of，被修饰的名词就是 coal。coal 在此是不可数名词，填原形即可；不要填 steam 或 electrical power，那是煤被用来产生的东西，属于后置的目的，不是“廉价供应”的对象。",
          "analysis": "第 8 段：“Over the course of the nineteenth century, the older industries in areas such as East Anglia, where opposition had been most bitter, permanently declined. They were overtaken by Yorkshire, where machinery was more readily accepted. The younger industry jumped ahead and never lost its lead, supported by abundant supplies of inexpensive coal to generate steam and, later, electrical power.”（在 19 世纪的进程中，东盎格利亚等反对最激烈的地区，老产业永久衰落了。它们被约克郡超越——那里对机器更容易接受。这个更年轻的产业一马当先，从此再未失去优势，其支撑是大量廉价的煤炭供应，用来产生蒸汽，后来又用于发电）。笔记第六条 “19th century: in Yorkshire mechanisation increased, aided by the availability of cheap [11]” 与后两句对应：Yorkshire 对应同一句的主语；mechanisation increased 对应 machinery was more readily accepted 与 jumped ahead；aided by the availability of 对应 supported by abundant supplies of；cheap 对应 inexpensive。因此空格填 coal。语法上，空格处于 supplies of 之后、被 cheap 修饰，需要不可数名词原形，故写 coal。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Scotland – specialised in 12 ________",
          "translation": "苏格兰——专门生产 ________。",
          "answer": "tweeds",
          "wordClass": "名词（复数，指花呢这一类织物；空格位于介词 in 之后作宾语（笔记条目短语），原文用复数形式 tweeds，需照抄复数）",
          "locating": {
            "paragraph": "8",
            "quote": "Other specialised types of manufacturing developed in Scotland, famed for its tweeds (a range of coloured woollen cloth with characteristic designs)"
          },
          "synonyms": [
            "“specialised in” 同义替换为原文的 “specialised types of manufacturing developed in Scotland, famed for …”（专门化的生产类型在苏格兰发展起来，以某物闻名）",
            "“Scotland” 在原文原词复现",
            "“tweeds” 在原文给出并附有解释：“(a range of coloured woollen cloth with characteristic designs)”"
          ],
          "locatingTip": "定位：题干给出地名 Scotland 与栏目词 Growth of specialisation，回原文第 8 段末尾找 “Scotland”，紧接的就是 “famed for its tweeds”，一步锁定。确定答案技巧：题干说“苏格兰专门生产某物”，原文写 “Other specialised types of manufacturing developed in Scotland, famed for its tweeds”，famed for（以……闻名）与 specialised in（以……为专长）同义，被“以之闻名”的对象就是答案 tweeds。注意 tweeds 在原文为复数形式，且后文用括号给出了释义（一种带花纹的彩色毛织布料），要照原文复数形式填写，不要写成单数 tweed。",
          "analysis": "第 8 段末句：“Other specialised types of manufacturing developed in Scotland, famed for its tweeds (a range of coloured woollen cloth with characteristic designs), and in the West Country, which focused on the production of high-quality, woven carpets.”（另一些专业化的制造类型在苏格兰发展起来，它以花呢闻名——那是一类带有独特花纹的彩色毛织布料；在西郡则集中在高品质机织地毯的生产上）。笔记 “Growth of specialisation” 一栏下的 “Scotland – specialised in [12]” 对应前半句：Scotland 原词出现，specialised in 对应 famed for（以某物闻名即以此见长），答案即 tweeds。括号中的解释 “a range of coloured woollen cloth with characteristic designs” 是对 tweeds 的补充说明，填入后读作 “Scotland – specialised in tweeds”，与原文语义一致。注意该词在原文是复数，按原样填写 tweeds。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "West Country – specialised in 13 ________",
          "translation": "西郡（West Country）——专门生产 ________。",
          "answer": "carpets",
          "wordClass": "名词（复数，指地毯；空格位于介词 in 之后作宾语（笔记条目短语），原文为复数 woven carpets，需照抄复数形式）",
          "locating": {
            "paragraph": "8",
            "quote": "and in the West Country, which focused on the production of high-quality, woven carpets."
          },
          "synonyms": [
            "“West Country” 在原文原词复现（“in the West Country”）",
            "“specialised in” 同义替换为原文的 “focused on the production of”（集中生产某物）",
            "“carpets” 在原文以 “high-quality, woven carpets” 出现，其中 woven（机织的）与栏目所属的纺织制造业相呼应"
          ],
          "locatingTip": "定位：本题与第 12 题同在一句、并列结构以 and 连接，找到 Scotland 之后的 “and in the West Country” 即可，无需重新扫读全文。确定答案技巧：题干 “West Country – specialised in [13]” 对应原文 “which focused on the production of high-quality, woven carpets”，focused on the production of 与 specialised in 同义，被“集中生产”的宾语就是 carpets。空格只能填一个词，所以取中心名词 carpets（high-quality、woven 都是它的修饰语，不能一并填入）。答案照原文用复数 carpets。",
          "analysis": "第 8 段末句后半：“and in the West Country, which focused on the production of high-quality, woven carpets”（而在西郡，则集中生产高品质的机织地毯）。笔记 “Growth of specialisation” 的第二条 “West Country – specialised in [13]” 与此对应：地名原词复现；specialised in 对应 focused on the production of；答案是被生产的物品名 carpets，前面的 high-quality 与 woven 只是定语，不符合 ONE WORD ONLY 的要求。因此填 carpets，并保持原文的复数形式。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
