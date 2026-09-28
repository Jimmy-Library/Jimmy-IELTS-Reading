(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-24", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-24",
  "meta": {
    "examId": "p1-high-24",
    "title": "Rubber 橡胶",
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
          "stem": "Rubber plants grow only in certain regions of the world.",
          "translation": "橡胶植物只生长在世界上某些特定的地区。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The plants that produce rubber are spread right across the globe, and grow in many different habitats."
          },
          "synonyms": [
            "“Rubber plants” 同义替换为原文的 “The plants that produce rubber”，指同一批产胶植物",
            "“grow” 与原文的 “grow in many different habitats” 动词原词复现",
            "“only in certain regions of the world” 与原文的 “are spread right across the globe, and grow in many different habitats” 正面对立：原文强调遍布全球、生境多样，题干却收窄为“只在某些地区”"
          ],
          "locatingTip": "定位：题干关键词是 rubber plants 与 regions，原文第 1 段第 1 句就以 “The plants that produce rubber are spread right across the globe” 开篇，是全篇第一处信息，不需要读完全文。确定答案技巧：题干里的 only（只、仅仅）是典型的绝对化限定词，判断题读到这类词要把全副注意力放在“范围与数量”上。原文用 spread right across the globe（遍布全球）加 grow in many different habitats（生长在多种生境）从空间和生境两个角度双重强调分布之广，与题干“只生长在世界上某些地区”的收缩性表述方向完全相反，属于事实冲突，因此判 FALSE。",
          "analysis": "原文第 1 段首句：“The plants that produce rubber are spread right across the globe, and grow in many different habitats.”（产胶植物遍布全球，生长在多种不同的生境中）。这一句是全文的起点，作者先讲产胶植物分布之广、适应生境之多，接着用 “One might think it likely, therefore, that humankind has known about rubber for thousands of years.”（因此人们可能会以为人类认识橡胶已有数千年）铺垫人们的想当然，随后转折指出橡胶实际上长期默默无闻。题干的落点是“橡胶植物只生长在世界上某些特定的地区（only in certain regions of the world）”，其中 only 表示排他性限制，与原文的 spread right across the globe（right 还起强调作用，意为“完全、遍布”）以及 many different habitats（多种生境）构成直接矛盾。原文说的是“广而多样”，题干说的是“窄而有限”，两者不能同时为真，所以答案是 FALSE。做题提示：right across the globe、many、all、only 这类范围词是判断题的判分核心，本题只要盯住 only，判分点就非常明确。",
          "traps": [
            "为什么不是 TRUE：题干要求原文支持“只生长在某些地区”，而原文明确写 “spread right across the globe, and grow in many different habitats”，即遍布全球、生境多样，与“只在特定地区”恰好相反，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对产胶植物的分布范围交代得非常具体（遍布全球、多种生境），属于“已有明确信息且与题干矛盾”，不属于信息缺失，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Rubber was extracted in Mexico as early as the sixth century.",
          "translation": "早在六世纪，墨西哥就已经在提取橡胶了。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "the Aztecs of what is now Mexico were the first to be recorded using the substance; a wall painting dating back to the sixth century depicts a scene of a tribute offering of crude rubber."
          },
          "synonyms": [
            "“in Mexico” 对应原文的 “the Aztecs of what is now Mexico”，地点信息一致",
            "“as early as the sixth century” 对应原文的 “a wall painting dating back to the sixth century”，时间信息一致",
            "“was extracted” 在原文中没有任何对应：原文说的是 “using the substance”（使用橡胶）和 “a tribute offering of crude rubber”（进献生胶），全段未提第六世纪在墨西哥“提取（extract）”橡胶；提取（extraction）最早只出现在第 2 段对 Torquemada 的描述中"
          ],
          "locatingTip": "定位：题干的两个抓手是地点 Mexico 和时间 the sixth century，都是在原文中极好认的“钓鱼词”，第 1 段第 4 句两者同时出现（what is now Mexico 与 dating back to the sixth century），扫读到 sixth century 就停下来精读。确定答案技巧：本题的陷阱在于动词 extracted（提取）。原文给的是两个不同的动作——using the substance（使用这种物质）和 a tribute offering of crude rubber（进献生胶），说的是六世纪的壁画描绘了墨西哥的阿兹特克人进献生胶的场面，这只能证明当时人们在“使用/进献”橡胶，并没有交代这些橡胶是在墨西哥“被提取”出来的。全篇第一次出现提取相关描述是在第 2 段（Juan de Torquemada 对 latex extraction 的描述），与六世纪和墨西哥都不搭。题干把“使用”偷换成“提取”，属于原文未给出的信息，因此判 NOT GIVEN。",
          "analysis": "原文第 1 段第 4 句：“The Indians of South America appear to be the first people to have understood the properties of rubber, and the Aztecs of what is now Mexico were the first to be recorded using the substance; a wall painting dating back to the sixth century depicts a scene of a tribute offering of crude rubber.”（南美洲的印第安人似乎是最早理解橡胶特性的人，而据记载，如今的墨西哥一带的阿兹特克人是最早使用这种物质的人；一幅可追溯至六世纪的壁画描绘了进献生胶的场景）。句中信息可以拆成三层：一是南美印第安人最早理解橡胶的特性；二是墨西哥阿兹特克人最早被记录使用橡胶；三是六世纪的壁画描绘进献生胶的场面。题干的落点是 “Rubber was extracted in Mexico as early as the sixth century.”，把“使用（using）”与“进献（tribute offering）”替换成了“提取（extracted）”。提取是生产环节，使用与进献是消费环节，二者不能等同；原文也没有任何一句说这些生胶产自墨西哥。文中真正的“提取”出现在第 2 段首句 “The first description of latex (liquid rubber) extraction was made by Juan de Torquemada”，时间远在六世纪之后，与题干无关。既然原文对“六世纪在墨西哥提取橡胶”这一说法全无交代，既没有肯定也没有否定，答案就是 NOT GIVEN。答题提醒：Location、Time 对上了不等于答案对上，判断题必须逐个核对题干中的“动词”，本题正是在动词上被偷偷换了概念。",
          "traps": [
            "为什么不是 TRUE：原文只说明六世纪的壁画描绘墨西哥阿兹特克人进献生胶（tribute offering of crude rubber），这属于“使用/进献”，并未说六世纪的墨西哥人已经在“提取”橡胶；原文中“提取”的最早记录出现在几个世纪之后的第 2 段，时间与地点都对不上，所以不能选 TRUE。",
            "为什么不是 FALSE：原文并没有否认六世纪墨西哥有橡胶被使用或被提取，只是对“提取”这一具体动作完全没有交代。否定信息不存在时不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Rubber from the Castilla elastica plant is of poorer quality than that from the Para plant.",
          "translation": "来自 Castilla elastica 植物的橡胶在品质上比来自 Para 植物的橡胶差。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Rubber was also used to make raincoats, shoes, jars, torches and musical instruments, all of which must have been made from the indigenous Castilla elastica, as the Para rubber plant now favoured for rubber cultivation does not grow in the Mexican region."
          },
          "synonyms": [
            "“the Castilla elastica plant” 与原文的 “the indigenous Castilla elastica” 原词对应，均指当地原生橡胶植物",
            "“the Para plant” 与原文的 “the Para rubber plant now favoured for rubber cultivation” 原词对应",
            "“of poorer quality than” 在原文中找不到任何对应：原文只交代 Para 植物如今更受橡胶种植青睐（now favoured）以及它不生长在墨西哥地区，全段没有出现 quality、better、worse、superior 等品质或等级的比较词"
          ],
          "locatingTip": "定位：题干含两个植物专名 Castilla elastica 与 Para，都是斜体化的拉丁学名或专名，只在第 1 段末句出现，扫读时找到 Para 即可锁定整句。确定答案技巧：本题考“两者品质高低”，而原文的落点是“谁被用于什么”和“谁生长在哪里”。原文说雨衣、鞋子、罐子、火把和乐器这些物品“必定是用当地原生的 Castilla elastica 制成的”，理由是“如今更受橡胶种植青睐的 Para 橡胶树并不生长在墨西哥地区”。这里的 favoured 讲的是种植偏好，属于用途与产地层面；题干的 poorer quality 讲的是品质等级，属于性能层面。作者虽暗示 Para 更受青睐，却从未把两者放在质量天平上比较，属于信息缺失，因此判 NOT GIVEN。切忌把“更受青睐”自行推导成“品质更好”。",
          "analysis": "原文第 1 段末句：“Rubber was also used to make raincoats, shoes, jars, torches and musical instruments, all of which must have been made from the indigenous Castilla elastica, as the Para rubber plant now favoured for rubber cultivation does not grow in the Mexican region.”（橡胶还被用来制作雨衣、鞋子、罐子、火把和乐器，这些物品必定都是用当地原生的 Castilla elastica 制成的，因为如今橡胶种植更青睐的 Para 橡胶树并不生长在墨西哥地区）。整句的逻辑是“由物推料”：因为 Para 不在墨西哥生长，所以墨西哥当地那些橡胶制品只能用本地的 Castilla elastica 来做。句中关于两种植物的比较只有一处，即 now favoured for rubber cultivation（如今在橡胶种植中更受青睐），这是种植选择上的偏好，其原因原文并未说明，可能是产量、适应气候、抗病性，也可能与品质无关。题干却把它读成 “is of poorer quality than”（品质更差），凭空增加了一个品质高低的价值判断。雅思判断题的规则是：原文未提及的信息即 NOT GIVEN，即便这个推断听起来很合理（现实中 Para 橡胶确实品质更好），也不能代人原文作答，因此答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说 Para 如今在橡胶种植中更受青睐，并且不生长在墨西哥地区，没有任何一句比较两种橡胶的品质优劣。更受青睐的原因原文未给，把它理解为“品质更好”属于超出原文的推断。",
            "为什么不是 FALSE：原文也没有反过来说 Castilla elastica 的品质更好，或者两者品质相当，即不存在与题干相反的表述。既无支持也无反驳，属于信息缺失，所以不是 FALSE。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "A French mathematician inspired real interest in rubber amongst Europeans.",
          "translation": "一位法国数学家激发了欧洲人对橡胶的真正兴趣。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "However, no real interest in rubber was shown by any European until Charles de la Condamine, a French mathematician, published an account of his journey to South America in 1735."
          },
          "synonyms": [
            "“A French mathematician” 与原文的 “Charles de la Condamine, a French mathematician” 完全对应，人名与身份原词复现",
            "“real interest in rubber” 与原文的 “no real interest in rubber” 原词对应，题干通过肯定句式表达了原文双重否定的意思",
            "“inspired” 对应原文的 “published an account of his journey”：正是他的游记出版才引来欧洲人的关注",
            "“amongst Europeans” 对应原文的 “by any European”，而下一句 “The publications of Condamine and Fresneau created considerable excitement among French scientists.” 进一步证实兴趣来自他的出版"
          ],
          "locatingTip": "定位：题干的关键是身份词组 French mathematician（法国数学家），原文第 2 段第 2 句直接以 “Charles de la Condamine, a French mathematician” 明确给出，一步锁定，人名前后无干扰项。确定答案技巧：本题考“谁带来了兴趣”，原文用的是 no … until … 的双重否定结构：直到 Condamine 于 1735 年发表南美游记之前，任何欧洲人都没有对橡胶表现出真正的兴趣（no real interest in rubber was shown by any European until …）。把双重否定还原成肯定就是：Condamine 发表游记之后，欧洲人开始对橡胶产生真正的兴趣。这与题干“一位法国数学家激发了欧洲人对橡胶的真正兴趣”完全同向；紧接着下一句 “The publications of Condamine and Fresneau created considerable excitement among French scientists.”（Condamine 与 Fresneau 的出版物在法国科学家中引起相当大的轰动）再次印证这一因果，因此判 TRUE。",
          "analysis": "原文第 2 段第 2、3 句：“However, no real interest in rubber was shown by any European until Charles de la Condamine, a French mathematician, published an account of his journey to South America in 1735. The journey was undertaken on behalf of the Paris Academy of Sciences to measure an arc of the meridian line on the equator, but the journey home was to turn out to be more significant than the true purpose of the trip.”（然而，直到法国数学家 Charles de la Condamine 于 1735 年发表他的南美游记，欧洲人才对橡胶表现出真正的兴趣。那次旅行本是受巴黎科学院之托去测量赤道子午线的一段弧，但回程的意义却比此行的本来目的更为重大）。再往下还有 “The publications of Condamine and Fresneau created considerable excitement among French scientists.”（两人的出版成果在法国科学家中引起相当大的轰动）。把这几句串起来，链条是：此前无人真正感兴趣；Condamine 出版游记；兴趣与轰动随之而来；他的游记所记录的内容（当地人用整块凝固乳胶做防水靴等）正是橡胶知识的传播源。题干用 “inspired real interest in rubber amongst Europeans” 概括这一因果，与原文的双重否定句等价，故答案 TRUE。做题提示：no … until … 与 not … before … 这类结构在判断题中几乎总是与肯定式题干同义，先做句式还原再判断，可以避开否定词的干扰。",
          "traps": [
            "为什么不是 FALSE：原文没有任何一句否认 Condamine 的作用，相反，no real interest … until … 这一结构把“兴趣的起点”明确安放在他发表游记之后，另有下一句的 considerable excitement 作旁证，信息方向与题干一致，因此不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干中“法国数学家”这一身份、“激发真正兴趣”这一结果、“欧洲人”这一范围，在原文中分别有 a French mathematician、no real interest … until、any European 三处直接对应，信息完整并非缺失，所以不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The process of vulcanisation was discovered by accident.",
          "translation": "硫化法的发现纯属偶然。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Then in 1839 the American Charles Goodyear discovered that it was possible to stabilise rubber by mixing it with sulphur while exposing it to heat"
          },
          "synonyms": [
            "“The process of vulcanisation” 与原文的 “a process he called vulcanisation” 原词对应",
            "“was discovered” 同义替换为原文的 “Charles Goodyear discovered”，并保留了时间 1839 年与做法（mixing it with sulphur while exposing it to heat）",
            "“by accident” 在原文中没有任何对应：全段没有出现 accident、accidentally、by chance、unexpectedly 之类的词，也没有讲述发现的经过或动机"
          ],
          "locatingTip": "定位：vulcanisation 是一个生僻的专有术语，全篇只出现一次，出现在第 4 段末尾，扫读时可直接跳读前几段，只找这个词。确定答案技巧：本题考“发现的方式”，判分点在于原文有没有交代发现是偶然还是有意。原文只说 “Charles Goodyear discovered that it was possible to stabilise rubber by mixing it with sulphur while exposing it to heat”，即他发现了“把橡胶与硫磺混合并加热就能稳定橡胶”这一方法，并给它取名 vulcanisation；关于他是怎样发现的（是做实验时的意外，还是长期研究的结果）原文只字未提。虽然现实中 Goodyear 的发现确有偶然成分，但雅思判断题只认原文，原文没写就是 NOT GIVEN。",
          "analysis": "原文第 4 段：“Despite their beneficial qualities, such as waterproofing, rubber goods were still not particularly popular as they had some major flaws, including the fact that they dissolved malodorously. They also became pliant when warm and rigid when cold. Then in 1839 the American Charles Goodyear discovered that it was possible to stabilise rubber by mixing it with sulphur while exposing it to heat — a process he called vulcanisation — and the full versatility of this extraordinary substance became apparent.”（尽管有防水等优点，橡胶制品仍不太受欢迎，因为它们有若干重大缺陷，比如溶解时会发出恶臭。它们还遇热变软、遇冷变硬。1839 年，美国人 Charles Goodyear 发现，把橡胶与硫磺混合并加热就可以使它稳定，这个工序他称之为硫化，于是这种非凡物质的全部多功能性便显现出来）。这一段给出的信息有四项：橡胶的缺陷（溶解发臭、随温度变软变硬）、发现的时间与人物（1839 年、Goodyear）、发现的内容与方法（硫磺加加热可以稳定橡胶，称为 vulcanisation）以及带来的结果（多功能性显现）。题干的落点是 “was discovered by accident.”，即追问发现的过程是否出于偶然。原文对这一过程没有任何描写，既没说是有意试验，也没说是意外获得，因此只能判 NOT GIVEN。答题提醒：判断题中 “by accident、on purpose、by mistake、deliberately” 这类表示“方式与动机”的状语，是 NOT GIVEN 的高发区，只要原文没写动机或过程，就不要用常识去补。",
          "traps": [
            "为什么不是 TRUE：原文只给出 “Charles Goodyear discovered that it was possible to stabilise rubber by mixing it with sulphur while exposing it to heat”，说明了他发现了什么，却没有交代发现的过程是偶然还是有意，缺少“偶然”这一信息，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文有相反信息，即明确说这是有计划的实验或刻意研究的结果，而原文对发现方式毫无交代，既未证实也未否认，所以也不能选 FALSE。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Imports of crude rubber into Britain fell during the nineteenth century.",
          "translation": "十九世纪期间，英国的生胶进口量下降了。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "In 1830 Britain had imported just 211 kg of crude rubber. This had risen to 10,000 kg in 1857, and by 1874 levels were just under six times as much again."
          },
          "synonyms": [
            "“Imports of crude rubber into Britain” 同义替换为原文的 “Britain had imported … crude rubber”，主被动转换，指同一件事",
            "“fell” 与原文的 “had risen” 以及 “just under six times as much again” 直接冲突：原文一路讲的是增长",
            "“during the nineteenth century” 对应原文的三个年份 1830、1857、1874，全部落在 19 世纪之内"
          ],
          "locatingTip": "定位：题干关键词是 Imports、crude rubber、Britain 与 nineteenth century，这四个词的信息集中在第 6 段末尾连续三句，出现 Britain had imported just 211 kg of crude rubber 即可锁定。确定答案技巧：本题考“趋势方向”，只要读出数字的变化方向就够了。原文给出三个时间点：1830 年进口 211 千克，1857 年涨到 10,000 千克，1874 年又增至接近前者的六倍；三个数字一路向上，作者还用 “bear witness to its irrepressible rise”（见证其不可遏制的上升）作总括。题干却说 fell（下降），与原文的增长趋势正面对立，故判 FALSE。看到一串年份和数字，先在心里判断单调方向，再与题干的趋势词对照。",
          "analysis": "原文第 6 段末尾：“The import levels of rubber over the nineteenth century bear witness to its irrepressible rise. In 1830 Britain had imported just 211 kg of crude rubber. This had risen to 10,000 kg in 1857, and by 1874 levels were just under six times as much again.”（橡胶在整个十九世纪的进口量见证了它不可遏制的增长。1830 年英国仅进口了 211 千克生胶；到 1857 年这一数字升至 10,000 千克；到 1874 年，进口量又接近前者的六倍）。这段话的信息层次非常清楚：先用一句概括点明“增长（rise）”，再用三组数字作为证据，211 千克、10,000 千克、再到约六倍于此，形成一条持续上扬的曲线。题干把它写成 “Imports of crude rubber into Britain fell during the nineteenth century.”（进口量在十九世纪下降），趋势词 fell 与原文的 risen、rise 以及数字的上升序列构成直接矛盾，因此答案是 FALSE。注意原文里的 just 与 just under 都属于细节，不影响趋势判断，判分点始终落在“涨还是跌”上。",
          "traps": [
            "为什么不是 TRUE：原文三组数字全为增长——1830 年 211 千克、1857 年 10,000 千克、1874 年又接近六倍——并用 “bear witness to its irrepressible rise” 概括为不可遏制的上升，与“下降”相反，故不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对英国十九世纪生胶进口量给出了具体数字和趋势概括，信息明确且与题干冲突，不属于信息缺失，因此不能选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 摘要填空（NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "In 1818, 7 ________ was produced using rubber",
          "translation": "1818 年，使用橡胶生产出了 ________。",
          "answer": "waterproof cloth",
          "wordClass": "名词短语（不可数，指防水布料这一类材料；空格后紧跟 was produced，说明所填内容作主语，由形容词 waterproof 加名词 cloth 构成，两词，符合 NO MORE THAN THREE WORDS 限制）",
          "locating": {
            "paragraph": "3",
            "quote": "In 1818 a British medical student named James Syme first used rubber to make waterproof cloth."
          },
          "synonyms": [
            "“In 1818” 与原文的 “In 1818” 原词复现，是本题最硬的定位锚点",
            "“was produced using rubber” 同义替换为原文的 “used rubber to make”，原文是主动语态“用橡胶做成某物”，题干改成被动语态“某物由橡胶制成”",
            "“7 ________” 对应原文 make 的宾语 waterproof cloth"
          ],
          "locatingTip": "定位：摘要填空的第一空通常只靠年份就能锁定，本题的 1818 在原文第 3 段首句原样出现，一步到位，不必通读全文。确定答案技巧：题干是 “In 1818, 7 ___ was produced using rubber”，即问 1818 年用橡胶做出了什么。原文对应句 “In 1818 a British medical student named James Syme first used rubber to make waterproof cloth.” 中，used rubber to make 与 produce using rubber 同义，make 的宾语 waterproof cloth 就是被生产出来的东西。注意题干把原文的主动句改写成被动句，动作的宾语（waterproof cloth）被提到主语位置、只留一个空格，因此答案填 waterproof cloth；不要填 James Syme（那是人，不是被生产出的产品），也不要写 medical student 之类的身份词。答案照抄原文两词形式，保持小写。",
          "analysis": "原文第 3 段首句：“In 1818 a British medical student named James Syme first used rubber to make waterproof cloth.”（1818 年，一位名叫 James Syme 的英国医学生首次用橡胶制作防水布料）。摘要文本说 “Early European travellers gave accounts of various rubber objects in use in Central and South America, and these accounts created interest in the commercial exploitation of rubber. In 1818, 7 ___ was produced using rubber”，把时间作为唯一线索，要求补出当年用橡胶制成的产品。原文的动作结构是 used rubber to make 加宾语，题干改写为 “（被制成品）was produced using rubber”，句子成分的转换关系是：原文的宾语 waterproof cloth 变为题干的主语，原文的状语 using rubber 由主动的 used rubber 改写而来。因此空格所填就是 waterproof cloth。从语法上看，空格后紧跟谓语 was produced，说明空格必须是名词性成分作主语，且是单数概念（不可数短语 waterproof cloth 与单数谓语 was 一致）；从词数看，waterproof cloth 为两个词，符合 NO MORE THAN THREE WORDS。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "in 1820 a machine was invented for recycling 8 ________ of rubber",
          "translation": "1820 年，有人发明了一种机器，用于回收橡胶的 ________。",
          "answer": "waste strips",
          "wordClass": "名词短语（复数，指橡胶生产中被丢弃的长条状边角料；作 recycling 的宾语，waste 在此为名词作定语修饰复数名词 strips，两词，符合 NO MORE THAN THREE WORDS 限制）",
          "locating": {
            "paragraph": "3",
            "quote": "In 1820 Thomas Hancock, an English manufacturer of rubber goods such as driving belts, industrial rollers and rubber hoses, invented a machine he called the 'masticator', which chewed up waste strips for re-use."
          },
          "synonyms": [
            "“in 1820 a machine was invented” 与原文的 “In 1820 … invented a machine” 一一对应，仅语态由主动变被动",
            "“for recycling” 同义替换为原文的 “chewed up … for re-use”，recycle 与 re-use 都表示“重新利用”",
            "“8 ________ of rubber” 对应原文 chewed up 的宾语 waste strips"
          ],
          "locatingTip": "定位：年份 1820 在原文第 3 段第 4 句原样出现，紧接第 7 题那句之后，扫读到 1820 直接停下。确定答案技巧：题干问“机器是用来回收橡胶的什么的”，原文对应处是 “invented a machine he called the 'masticator', which chewed up waste strips for re-use”，其中 chewed up … for re-use 正对应题干的 for recycling，被“嚼碎再利用”的对象就是 waste strips（边角料）。题干结构 “recycling [8] of rubber” 中，of rubber 已经交代了材料属性，空格要填的是被回收的物件本身，因此答案填 waste strips；不要错填 masticator（那是机器的名字，对应题干的 a machine），也不要填 driving belts、industrial rollers、rubber hoses（那是 Hancock 生产的橡胶制品，与“回收”无关）。答案为复数形式，照抄原文两词。",
          "analysis": "原文第 3 段第 4 句：“In 1820 Thomas Hancock, an English manufacturer of rubber goods such as driving belts, industrial rollers and rubber hoses, invented a machine he called the 'masticator', which chewed up waste strips for re-use.”（1820 年，生产传动带、工业滚筒和橡胶软管等橡胶制品的英国制造商 Thomas Hancock 发明了一种他称之为“masticator（咀嚼机）”的机器，把边角料嚼碎以便再利用）。摘要文本写 “in 1820 a machine was invented for recycling 8 ___ of rubber”，信息点与原文精确对应：时间同为 1820；a machine was invented 对应 invented a machine；for recycling 对应 for re-use；而空格承担的正是被处理的对象，即 which chewed up 的宾语 waste strips。做题时还要注意区分同一句里的三类名词：Thomas Hancock 是人、masticator 是机器的名字、driving belts 等是他的主要产品，只有 waste strips 是“被回收”的对象，可依据 recycle（重新利用）的语义排除其余选项。语法上，of rubber 作后置定语，前面需要一个表示物件的复数名词短语，waste strips 恰好两词，符合词数限制。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "rubber products smelt bad when they were dissolved, and could turn either soft or 9 ________ depending on the temperature",
          "translation": "橡胶制品溶解时会发出难闻的气味，而且会随温度变化变软或变 ________。",
          "answer": "rigid",
          "wordClass": "形容词（作系动词 turn 的表语，与前面的形容词 soft 并列；描述橡胶在低温下的状态，保持原级，无需加 -ly 或比较级）",
          "locating": {
            "paragraph": "4",
            "quote": "They also became pliant when warm and rigid when cold."
          },
          "synonyms": [
            "“could turn either soft or …” 同义替换为原文的 “became pliant when warm and rigid when cold”，pliant 即“柔软的”对应 soft，两个状态并列呈现",
            "“depending on the temperature” 对应原文的 “when warm” 与 “when cold”，把两种温度条件概括为一个抽象条件",
            "“smelt bad when they were dissolved” 同义替换为原文的 “they dissolved malodorously”，malodorously 意为“带有恶臭地”"
          ],
          "locatingTip": "定位：题干的 rubber products 与 dissolved 对应原文第 4 段 “they dissolved malodorously”，顺着这一句往下读一句就是答案句。确定答案技巧：题干用 either … or … 列出两个相反的状态——“soft（软）”与空格，并提示条件是 temperature。原文同一位置写的是 “They also became pliant when warm and rigid when cold.”，同样是两个相反状态加两个温度条件：warm 对应 soft 一侧（pliant 意为柔顺、易弯），cold 就对应空格一侧，答案是 rigid（坚硬的）。判定时用“反义配对”最稳：soft 与 rigid 是一对反义词，warm 与 cold 也是一对反义词，两组配对互相印证。注意 rigid 是形容词原形，照抄原文。",
          "analysis": "原文第 4 段前两句：“Despite their beneficial qualities, such as waterproofing, rubber goods were still not particularly popular as they had some major flaws, including the fact that they dissolved malodorously. They also became pliant when warm and rigid when cold.”（尽管有防水等优点，橡胶制品仍不太受欢迎，因为存在若干重大缺陷，其中包括溶解时会散发恶臭。它们还会遇热变软、遇冷变硬）。摘要句 “rubber products smelt bad when they were dissolved, and could turn either soft or 9 ___ depending on the temperature” 把这两句合并改写：dissolved malodorously 对应 smelt bad when they were dissolved；became pliant when warm and rigid when cold 对应 could turn either soft or [9] depending on the temperature，其中词汇替换为 pliant 换作 soft、when warm 与 when cold 概括为 depending on the temperature。按照同一句内的对应顺序，soft 已用掉 warm 一侧的信息，剩下的 cold 一侧对应的状态词就是 rigid。词性上，turn 在此为系动词（表示“变得”），后面接形容词作表语，且与并列成分 soft 保持同一词性，故填形容词 rigid，不能填名词 rigidity，也不需要加比较级。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "in 1839 a new process to 10 ________ the substance greatly increased its potential",
          "translation": "1839 年，一种使该物质变得 ________ 的新工艺大大提升了它的潜力。",
          "answer": "stabilise",
          "wordClass": "动词原形（位于不定式标记 to 之后，与 the substance 构成动宾关系，意为“使……稳定”；保持原形，不加 -s、-ing 或 -ed）",
          "locating": {
            "paragraph": "4",
            "quote": "Then in 1839 the American Charles Goodyear discovered that it was possible to stabilise rubber by mixing it with sulphur while exposing it to heat"
          },
          "synonyms": [
            "“in 1839” 与原文的 “in 1839” 原词复现，是本题最直接的定位锚点",
            "“a new process to 10 ________ the substance” 同义替换为原文的 “a process he called vulcanisation”，题干把工艺名称换成了它的功能动词",
            "“the substance” 同义替换为原文的 “rubber”，并对应紧接着的 “the full versatility of this extraordinary substance became apparent”",
            "“greatly increased its potential” 同义替换为原文的 “the full versatility of this extraordinary substance became apparent”，即多功能性被释放、潜力大增"
          ],
          "locatingTip": "定位：年份 1839 在原文第 4 段末句原样出现，并且紧接在第 9 题的同一段内，扫读到 1839 即可停。确定答案技巧：题干说 1839 年出现一种新工艺，其作用是“对 the substance 做某事（to [10] the substance）”，并因此大大提升了潜力。原文对应句是 “Then in 1839 the American Charles Goodyear discovered that it was possible to stabilise rubber by mixing it with sulphur while exposing it to heat — a process he called vulcanisation”，这里的不定式 to stabilise rubber 与题干的不定式 to [10] the substance 结构完全吻合（rubber 即 the substance），因此空格填 stabilise。还要注意 vulcanisation 这个词虽然显眼，但它只是这套工序的名称，题干已经把 process 这个词用掉了，空格要的是工序的作用（动词），而不是名称（名词）。答案照抄原文英式拼写 stabilise，不要写成 stabilize。",
          "analysis": "原文第 4 段末句：“Then in 1839 the American Charles Goodyear discovered that it was possible to stabilise rubber by mixing it with sulphur while exposing it to heat — a process he called vulcanisation — and the full versatility of this extraordinary substance became apparent.”（1839 年，美国人 Charles Goodyear 发现，把橡胶与硫磺混合并加热就可以使它稳定；这个工序他称为硫化；于是这种非凡物质的全部多功能性便显现出来）。摘要句 “However, in 1839 a new process to 10 ___ the substance greatly increased its potential.” 与原文三处对应：in 1839 时间相同；a new process 对应 a process he called vulcanisation；the substance 对应 rubber（并且紧接的 versatility of this extraordinary substance 也用了 substance 一词，印证指代）；greatly increased its potential 对应 the full versatility … became apparent（多功能性充分释放即潜力大增）。空格处在不定式 to 之后、宾语 the substance 之前，需要一个及物动词原形，原文给出的是 stabilise，意为“使……稳定”，正好与宾语 the substance 搭配。因此答案填 stabilise。作答时注意两点：一是词形必须为动词原形（题干结构 to 加动词加宾语，不是名词），二是保持原文的英式拼写 stabilise，不要写成美式 stabilize。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "rubber was used in the creation of the 11 ________ industry during the Industrial Revolution",
          "translation": "在工业革命期间，橡胶被用于创建 ________ 产业。",
          "answer": "steam engines",
          "wordClass": "名词短语（复数，指蒸汽机这一类机器；位于 the 与 industry 之间作定语，说明该产业与蒸汽机相关，两个词，符合 NO MORE THAN THREE WORDS 限制）",
          "locating": {
            "paragraph": "5",
            "quote": "It played an important role in the Industrial Revolution, being employed in the steam engines found in factories, mills, mines and railways."
          },
          "synonyms": [
            "“was used in” 同义替换为原文的 “being employed in”，employed 意为“被使用于”",
            "“during the Industrial Revolution” 与原文的 “in the Industrial Revolution” 原词对应，是本题的定位锚点",
            "“the 11 ________ industry” 对应原文的 “the steam engines found in factories, mills, mines and railways”，原文列举蒸汽机应用的具体场所（工厂、磨坊、矿井、铁路），题干概括为“相关产业”"
          ],
          "locatingTip": "定位：专有名词 Industrial Revolution（工业革命）是全篇仅出现一次的固定说法，出现在第 5 段，扫读到它即可停下精读该句。确定答案技巧：题干说橡胶被用于创建“某种产业”，原文对应句是 “It played an important role in the Industrial Revolution, being employed in the steam engines found in factories, mills, mines and railways.”，即橡胶被用在工厂、磨坊、矿井和铁路的蒸汽机上。原文列举的那串场所都属于使用蒸汽机的行业，题干把这些场所概括为 the [11] industry，因此空格里要填的核心概念是蒸汽机 steam engines。填两词短语，注意保持复数形式与原文一致；不要填 Industrial（那是题干已给的 the Industrial Revolution），也不要填 factories 或 railways（那是蒸汽机的使用场所，只是列举项，不能代表整个产业）。",
          "analysis": "原文第 5 段：“Rubber goods could now be manufactured which had all the beneficial qualities of the material, such as durability, elasticity and variability, but which were not sticky, soluble or governed by the vagaries of the weather. The economic potential of rubber was now clearly evident. It played an important role in the Industrial Revolution, being employed in the steam engines found in factories, mills, mines and railways.”（如今可以生产出兼具耐久性、弹性、可变性等一切优点，又不粘、不溶、不受天气摆布的橡胶制品。橡胶的经济潜力此时已显而易见。它在工业革命中扮演了重要角色，被应用于工厂、磨坊、矿井和铁路上的蒸汽机）。摘要句 “rubber was used in the creation of the 11 ___ industry during the Industrial Revolution” 把 “being employed in the steam engines” 概括为“参与缔造了某个产业”，并把原文列举的 factories, mills, mines and railways 抽象为该产业的组成部分，因此空格应填 steam engines。从语法看，空格夹在 the 与 industry 之间作定语，需要一个名词性短语，steam engines 为复数形式的名词短语，符合结构；从词数看两个词符合限制。注意本题容易误填 factories 或 railways，但原文真正的“主角”是蒸汽机，场所只是它出现的地方。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Then in 1888 the 12 ________ was developed",
          "translation": "随后在 1888 年，________ 被研发出来。",
          "answer": "pneumatic tyre",
          "wordClass": "名词短语（可数名词单数，被定冠词 the 修饰并作句子的主语，与单数谓语 was developed 保持一致；tyre 用英式拼写，两词，符合 NO MORE THAN THREE WORDS 限制）",
          "locating": {
            "paragraph": "6",
            "quote": "One of the most important rubber inventions was made in 1888, when an Irishman called John Boyd Dunlop produced the first pneumatic tyre."
          },
          "synonyms": [
            "“in 1888” 与原文的 “in 1888” 原词复现，是本题最直接的定位锚点",
            "“was developed” 同义替换为原文的 “produced the first”，原文为主动语态“生产出第一个……”，题干改为被动语态“被研发出来”",
            "“the 12 ________” 对应原文 produced 的宾语 the first pneumatic tyre"
          ],
          "locatingTip": "定位：年份 1888 在原文第 6 段首句原样出现，扫读到这一年份即可停止。确定答案技巧：题干的结构是 “the [12] was developed”，需要一个作主语的名词短语。原文对应句 “One of the most important rubber inventions was made in 1888, when an Irishman called John Boyd Dunlop produced the first pneumatic tyre.” 中，produced the first pneumatic tyre 与 was developed 同义（首次生产即研发问世），宾语的核心名词就是 pneumatic tyre。填答案时去掉原文的 the first（题干已有 the 作限定），只保留 pneumatic tyre 两个词；不要填 John Boyd Dunlop（那是发明者，不是发明物），也不要填 Irishman（身份词）。另外注意保持英式拼写 tyre，不要写成 tire。",
          "analysis": "原文第 6 段首句：“One of the most important rubber inventions was made in 1888, when an Irishman called John Boyd Dunlop produced the first pneumatic tyre.”（1888 年诞生了橡胶领域最重要的发明之一，一位名叫 John Boyd Dunlop 的爱尔兰人制造出了第一条充气轮胎）。摘要句 “Then in 1888 the 12 ___ was developed” 把原文的主动句 “Dunlop produced the first pneumatic tyre” 改写为被动句 “the [12] was developed”，动作的宾语被提到主语位置，the first 这一限定成分因题干已有定冠词 the 而省略，其余照抄，因此答案是 pneumatic tyre（充气轮胎）。从语法看，空格前有 the、后有单数谓语 was developed，需要可数名词单数（或不可数名词），pneumatic tyre 与之相符；从词数看为两词，符合 NO MORE THAN THREE WORDS。上下文也能互证：紧接着一句 “Solid rubber tyres had been used for the previous 18 years, but Dunlop's new design … immediately became popular.” 用 solid rubber tyres（实心轮胎）作对照，说明新发明是与此相对的充气轮胎。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "and a few years later the 13 ________ of the motor car began",
          "translation": "几年之后，汽车的 ________ 开始了。",
          "answer": "mass production",
          "wordClass": "名词短语（不可数，表示“大批量生产”这一生产模式；位于 the 与 of the motor car 之间作主语，两词，符合 NO MORE THAN THREE WORDS 限制）",
          "locating": {
            "paragraph": "6",
            "quote": "In 1895 Dunlop's tyres were first used in motor cars, and with the mass production of cars just over the horizon the rubber industry had never looked healthier."
          },
          "synonyms": [
            "“a few years later” 同义替换为原文的时间铺垫 “In 1895”，即 1888 年之后数年",
            "“the motor car” 与原文的 “motor cars” 原词对应，仅单复数有别",
            "“the 13 ________ … began” 对应原文的 “the mass production of cars just over the horizon”，原文说量产“即将到来”，题干说量产“开始了”，把即将发生的趋势落实为实现的时点"
          ],
          "locatingTip": "定位：本题紧接第 12 题之后，仍在第 6 段，线索是 motor car / cars 与“几年之后（a few years later）”。原文写 “In 1895 Dunlop's tyres were first used in motor cars, and with the mass production of cars just over the horizon the rubber industry had never looked healthier.”，年份 1895 距 1888 正好几年。确定答案技巧：题干说“汽车的什么开始了”，句子结构为 the [13] of the motor car began，空格需要一个与 of the motor car 搭配的名词短语。原文给出的是 the mass production of cars，正是同一结构（the 加名词短语加 of cars），因此答案是 mass production。原文的 just over the horizon（即将来临）与题干的 began（开始）方向一致，都属于“即将发生/刚刚发生”的同一阶段。不要误填 tyres（那是第 12 题所在的事实）或 rubber industry（原文说的是该产业前景好，不是“开始了”），也不要写成 production 一词而丢掉 mass。",
          "analysis": "原文第 6 段第 3 句：“In 1895 Dunlop's tyres were first used in motor cars, and with the mass production of cars just over the horizon the rubber industry had never looked healthier.”（1895 年，Dunlop 的轮胎首次被用于汽车；随着汽车的大批量生产即将成为现实，橡胶工业的景况前所未有地好）。摘要句 “Then in 1888 the [12] was developed, and a few years later the [13] of the motor car began.” 的时间链与原文一致：1888 年是充气轮胎问世，1895 年是轮胎首次用于汽车，两者相隔数年，正好对应“a few years later”。题干问“汽车的什么开始了”，原文提供的结构是 the mass production of cars just over the horizon，其中 the mass production of cars 与题干的 the [13] of the motor car 结构完全相同，只需把 cars 换成 motor car，空格即 mass production。从语义看，just over the horizon（即将到来）与 began（开始）表示的是同一件事在两个略不同的时间点上的状态，方向一致，不存在矛盾。从词性看，mass production 是不可数名词短语，可受定冠词 the 修饰并与 of 结构连用；两词符合词数限制，照原文拼写即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
