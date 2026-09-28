(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-34", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-34",
  "meta": {
    "examId": "p1-low-34",
    "title": "The Slow Food Organization 慢食运动组织",
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
          "stem": "The Ark of Taste lists food plant and animal species in danger of extinction.",
          "translation": "“美味方舟”（Ark of Taste）列出了濒临灭绝的食用植物和动物物种。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The Ark of Taste is the catalog of endangered food plant and animal species that Slow Food has resolved to protect against the rising global tide of fast food."
          },
          "synonyms": [
            "“lists” 同义替换为原文的 “is the catalog of”，catalog（目录、名录）即把物种逐条列出",
            "“in danger of extinction” 同义替换为原文的 “endangered”（濒危的），这是最核心的一处改写",
            "“food plant and animal species” 在原文中为原词复现：“endangered food plant and animal species”"
          ],
          "locatingTip": "定位：题干的关键词是大写专有名词 Ark of Taste（美味方舟），这是文章自造的专有名称，全文出现在第 1 段末尾、第 2 段（两处）与第 3 段，扫读时看到 Ark of Taste 立刻停在第 2 段首句。确定答案技巧：本题考“名录收录的对象是什么”，原文首句直接把 Ark of Taste 定义为 “the catalog of endangered food plant and animal species”，其中 catalog 与题干的 lists 同义（都是“把对象登记、列举出来”），endangered 与题干的 in danger of extinction 同义。两处改写方向完全一致，没有任何矛盾或缺失，因此判 TRUE。做这类“A 是 B 的名单／目录”型判断时，只要题干的两个关键信息（收录对象、收录标准）都能在原文找到同义对应，就直接选 TRUE。",
          "analysis": "原文第 2 段第 1 句：“The Ark of Taste is the catalog of endangered food plant and animal species that Slow Food has resolved to protect against the rising global tide of fast food.”（美味方舟是 Slow Food 决心保护、以抵御快餐全球化浪潮的濒危食用动植物物种的名录）。题干把这句话压缩成“The Ark of Taste lists food plant and animal species in danger of extinction”，逐项比对：原文的 catalog（名录）对应题干的 lists（列出）；原文的 endangered（濒危的）对应题干的 in danger of extinction（有灭绝危险的）；原文的 food plant and animal species 与题干完全一致。三处对应全部成立，题干只是把原文的“名录”动词化、把“濒危”换成同义短语，信息方向毫无改变，所以答案是 TRUE。注意不要被后半句 “that Slow Food has resolved to protect against the rising global tide of fast food” 干扰——那只是补充说明 Slow Food 编这份名录的目的，与题干陈述的“名录收录了什么”并不冲突。",
          "traps": [
            "为什么不是 FALSE：原文明确说美味方舟是 “the catalog of endangered food plant and animal species”，收录对象正是“濒危的食用动植物物种”，与题干完全吻合，不存在任何相反信息。",
            "为什么不是 NOT GIVEN：题干问的两件事（收录的对象是动植物物种、收录标准是濒危）原文都直接写明，属于已充分交代的信息，不是未提及，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Slow Food considers that the term ‘biodiversity’ should be restricted to wild species.",
          "translation": "Slow Food 认为“生物多样性”一词应仅限于野生物种。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Biodiversity is a term commonly associated with discussions of threats to wild species, but according to Slow Food the biodiversity of the domesticated species people have depended on for centuries is no less important."
          },
          "synonyms": [
            "“should be restricted to wild species” 与原文 “the biodiversity of the domesticated species people have depended on for centuries is no less important” 直接冲突：原文认为被驯化的物种同样属于生物多样性范畴，且重要性丝毫不减",
            "“commonly associated with” 只是说“人们通常把 biodiversity 一词与野生物种联系起来”，这是普通大众的联想，不是 Slow Food 的主张；原文用 but according to Slow Food 转折，恰恰是在纠正这种联想",
            "“Slow Food considers” 对应原文的 “according to Slow Food”（根据 Slow Food 的看法）"
          ],
          "locatingTip": "定位：题干的定位词是 biodiversity 与 Slow Food，第 2 段第 3 句同时出现这两个词并给出立场，是本题唯一相关句。确定答案技巧：本题是“某方主张把某概念限制在某一范围”的判断题，判分点是原文里 Slow Food 的态度方向。原文句式是先让步后转折：前半句说 biodiversity 这个词“通常（commonly）与野生物种的威胁话题联系在一起”，后半句用 but according to Slow Food 一转，指出“人类依赖了数个世纪的驯化物种的生物多样性同样重要（no less important）”。no less important 是明确的“同等重要”，说明 Slow Food 要把驯化物种纳入 biodiversity，而题干却说要“restricted to（限制在）野生物种”，方向正好相反，因此判 FALSE。切记不能把原文描述“通常联想”的那半句当成 Slow Food 的观点。",
          "analysis": "第 2 段第 3 句：“Biodiversity is a term commonly associated with discussions of threats to wild species, but according to Slow Food the biodiversity of the domesticated species people have depended on for centuries is no less important.”（生物多样性这个词通常让人联想到关于野生物种所受威胁的讨论，但按照 Slow Food 的看法，人类依赖了数百年的那些驯化物种的生物多样性同样重要）。这句是典型的“让步加转折”结构：commonly associated with 说的是外界的普遍印象（把 biodiversity 与 wild species 挂钩），but according to Slow Food 才是本句的论点所在，即 Slow Food 主张把驯化物种也纳入生物多样性，并强调其重要性“不亚于（no less important）”野生物种。题干却写成 “Slow Food considers that the term 'biodiversity' should be restricted to wild species”（Slow Food 认为该词应仅限于野生物种），把落点放在被原文否定掉的“通常印象”上，与 Slow Food 的真实立场恰好相反，所以答案是 FALSE。阅读时务必盯住 according to / but 这类态度标记词，判断题经常把“让步分句里的普通看法”偷换成本题所问一方的观点。",
          "traps": [
            "为什么不是 TRUE：原文的 but according to Slow Food 之后的句子明确要求把驯化物种（domesticated species）纳入 biodiversity 并强调其同等重要，而题干说应“限制在野生物种”，与原文立场相反。",
            "为什么不是 NOT GIVEN：原文对 Slow Food 在 biodiversity 范围上的态度交代得非常明确（no less important），信息存在且与题干矛盾，因此不是信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The genes of heritage plants may be of vital importance to modern plant breeders.",
          "translation": "传统（传家）植物的基因对现代植物育种者可能至关重要。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "For example, when the latest patented hybrid variety of plant proves unable to withstand fungal or bacterial disease, plant breeders will need the disease-resistant genes which can be obtained from heritage plant varieties."
          },
          "synonyms": [
            "“may be of vital importance” 同义替换为原文的 “will need”（需要）加上同段末句的 “irreplaceable and possibly crucial sets of corn genes would have been lost forever”（不可替代、可能至关重要的基因），crucial 与 vital importance 对应",
            "“modern plant breeders” 对应原文的 “plant breeders”（植物育种者），原文用 “the latest patented hybrid variety”（最新的专利杂交品种）交代了“现代”这一背景",
            "“heritage plants” 同义替换为原文的 “heritage plant varieties”"
          ],
          "locatingTip": "定位：题干的关键词 heritage plants 与 plant breeders 同现于第 2 段第 4 句，句中还有植物病理名词 disease、fungal、bacterial 可辅助确认。确定答案技巧：本题考“传统植物基因对育种者的重要性”，原文用 For example 引出一个具体假设情景：当最新专利杂交品种抗不住真菌或细菌病害时，“plant breeders will need the disease-resistant genes which can be obtained from heritage plant varieties”。will need（将会需要）说明这是育种者在关键时刻必须依赖的东西，与题干的 may be of vital importance（可能至关重要）方向一致；紧接着的末句更用 “irreplaceable and possibly crucial sets of corn genes” 把这种重要性抬到“不可替代、可能至关重要”的高度。两处证据同向，因此判 TRUE。注意题干用的是 may（可能），属于弱化表述，只要原文显示“确有这种需要”，即可成立。",
          "analysis": "第 2 段第 4 句：“For example, when the latest patented hybrid variety of plant proves unable to withstand fungal or bacterial disease, plant breeders will need the disease-resistant genes which can be obtained from heritage plant varieties.”（例如，当最新的专利杂交品种被证明无法抵御真菌或细菌病害时，植物育种者将会需要那些可从传统植物品种中获得的抗病基因）。这句把“传统品种的基因”与“现代育种者的需求”直接连了起来：主语 plant breeders（育种者）是“现代”的代表，谓语 will need（必将需要）表达的是刚性依赖，所需之物正是 heritage plant varieties 中的 disease-resistant genes。第 2 段末句进一步强化：“If Iroquois white corn had fallen out of production … irreplaceable and possibly crucial sets of corn genes would have been lost forever.”（如果易洛魁白玉米停产……不可替代、可能至关重要的玉米基因组就会永远消失），其中 irreplaceable 与 possibly crucial 正对应题干 may be of vital importance。两句话一个讲“需要”，一个讲“一旦失去后果严重”，共同支持题干，故答案是 TRUE。做题提示：判断题中 may / possibly 这类弱化词并不等于“信息不确定”，它常与原文的 will need 或假设条件句配套出现，不必因为语气不强就怀疑答案。",
          "traps": [
            "为什么不是 FALSE：原文说育种者在杂交品种抗病失败时“将会需要”传统品种里的抗病基因，并称这类基因“不可替代、可能至关重要”，与题干的“可能至关重要”同向，没有矛盾。",
            "为什么不是 NOT GIVEN：原文不仅提到 heritage plant varieties，还用 For example 具体说明了育种者为什么需要它们的基因，证据完整，不属于未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Countries can sell the genes of their heritage plant varieties internationally.",
          "translation": "各国可以在国际上出售其传统植物品种的基因。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "the Native Americans who grow, roast, and grind this corn and, at the same time, helping to preserve the specific cookery and religious uses that the corn has been selected to support over hundreds of years"
          },
          "synonyms": [
            "原文确有 markets（市场）与 income（收入）的表述，即 Slow Food 为易洛魁白玉米这种古老板品种寻找新市场、保证种植者有收入，但主语是 Slow Food 这个组织，不是题干所说的 Countries（各国）",
            "原文交易与保护的对象是这种玉米本身及其烹饪与宗教用途（this ancient variety of corn、the specific cookery and religious uses），题干所说的 the genes of their heritage plant varieties（传统植物品种的基因）在国际上出售，在原文中找不到任何对应句",
            "“internationally” 在原文中没有对应表述：文中谈的是 Slow Food 帮玉米找新市场，没有涉及跨国出售基因的行为主体与渠道"
          ],
          "locatingTip": "定位：题干的核心词是 genes、heritage plant varieties 与 sell，这些词指向第 2 段（谈濒危基因）和第 3 段（谈为传统玉米开辟新市场）两个区域。确定答案技巧：本题考“是否存在‘国家在国际上出售传统植物基因’这一事实”。第 2 段只讲传统品种的基因对育种者的价值与流失风险（be obtained from、would have been lost forever），完全没有“出售”的含义；第 3 段出现 markets 与 income，但主语是 Slow Food（为古老板玉米寻找新市场、给种植者带来收入），卖出的是玉米这种农产品，而不是“基因”，主体也不是“国家”，更谈不上国际间的基因交易。原文既没有肯定也没有否定国家能否这么做，属于完全未提及，故判 NOT GIVEN。切忌把原文的“找市场、有收入”直接脑补成“国家在国际上卖基因”。",
          "analysis": "与本题相关的原文信息分布在两个段落，但都不构成对题干的正面回答。第 2 段末句说如果易洛魁白玉米停产，“irreplaceable and possibly crucial sets of corn genes would have been lost forever”（不可替代、可能至关重要的玉米基因组将永远消失），讲的是基因一旦流失的损失，属于保护语境，与“出售”无关。第 3 段则写道：“By working to find new markets for this ancient variety of corn, Slow Food is ensuring a source of income for the Native Americans who grow, roast, and grind this corn and, at the same time, helping to preserve the specific cookery and religious uses that the corn has been selected to support over hundreds of years.”（通过为这种古老板玉米寻找新市场，Slow Food 既保证了种植、烘烤、研磨这种玉米的原住民有收入来源，同时也帮助保存了这种玉米数百年来被选育所支持的特定烹饪方式和宗教用途）。这里虽然同时出现了“市场”“收入”，但① 行为主体是 Slow Food 组织，不是 Countries；② 交易标的是玉米本身，不是玉米的基因；③ 全文没有任何一句提到国家之间或国际范围内买卖传统品种基因这件事。因此题干所陈述的事实是一个原文完全没有涉及的新信息，按判断题规则应判 NOT GIVEN。这类题的陷阱在于“主题词都在原文出现过”，但组合起来的那件事并未发生——核对时要把“谁做什么、对什么做”三项逐一落实。",
          "traps": [
            "为什么不是 TRUE：原文提及的市场与收入，主体是 Slow Food 组织、对象是古老板玉米本身，并非“国家”在“国际上出售传统植物品种的基因”，题干的事实链条在原文中拼不出来。",
            "为什么不是 FALSE：原文既没有说国家不得出售基因，也没有否认存在这类交易，只是一字未提，属于信息缺失，理应按 NOT GIVEN 处理，而不是判成矛盾。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Slow Food maintains that food and culture exist independently of each other.",
          "translation": "Slow Food 主张食物与文化彼此独立存在。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "In this way, local producers will be able to continue producing the food which for many years has been a defining factor of their cultural identity."
          },
          "synonyms": [
            "“exist independently of each other” 与原文 “a defining factor of their cultural identity”（是其文化身份的决定性因素）直接冲突：食物被说成文化的组成部分，而不是与文化互不相干",
            "“Slow Food maintains” 对应原文中 Slow Food 一贯的主张，第 3 段也说 “The movement understands that … they also embody a set of social practices, and in some cases even a way of life of previous generations”",
            "原文另有 “a specific, irreplaceable mode of life that a particular people have devised for living in a particular part of the Earth”，进一步说明某种食物或畜种消失意味着一种生活方式随之消失，食物与文化不可分割"
          ],
          "locatingTip": "定位：题干的关键词是 food 与 culture，原文第 4 段出现 cultural identity，第 3 段出现 social practices、way of life，都可作为定位线索。确定答案技巧：本题考“食物与文化的关系是相互独立还是相互依存”。原文用 “a defining factor of their cultural identity” 明确表示当地食物产品长期以来是构成其文化身份的决定性要素，第 3 段更进一步说这些食物与植物品种 “embody a set of social practices … even a way of life of previous generations”。也就是说，在 Slow Food 看来食物与文化是一体的、互为载体；题干却说二者 “exist independently of each other”（彼此独立存在），与原文的观点正相反，因此判 FALSE。判断题遇到 “independently、unrelated、separate” 这类“切断联系”的说法时，要特别注意原文是否存在把两者绑在一起的表述。",
          "analysis": "第 4 段第 4 句：“In this way, local producers will be able to continue producing the food which for many years has been a defining factor of their cultural identity.”（这样一来，当地生产者才能够继续生产那种多年来一直是其文化身份决定性要素的食物）。句中 a defining factor of their cultural identity（其文化身份的决定性要素）说明食物是文化的构成部分，二者高度绑定，绝非“彼此独立”。第 3 段的论述与之一致：“The movement understands that all the food and plant species in its Ark of Taste carry not only information about genetic traits but they also embody a set of social practices, and in some cases even a way of life of previous generations.”（这场运动认识到，美味方舟里的所有食物与植物物种不仅携带遗传性状信息，还体现着一整套社会实践，某些情况下甚至是前人的生活方式）；同段还有 “when a variety of food or breed of animal disappears, something greater also disappears: a specific, irreplaceable mode of life…”（当某个食物品种或动物品种消失时，消失的还有更重要的东西：一种特定而不可替代的生活方式）。三处表述都把食物当作文化的载体，题干所说的“互相独立”与之完全对立，所以答案是 FALSE。做题提示：判断“关系类”陈述时，先在原文找出作者对二者关系的定性词（defining factor、embody、mode of life），再看题干的定性词（independently）是否与之一致。",
          "traps": [
            "为什么不是 TRUE：原文三处都把食物当作文化的构成要素或载体（defining factor of their cultural identity、embody a set of social practices、a specific, irreplaceable mode of life），明确定义了二者相互依存的关系，与“彼此独立”相反。",
            "为什么不是 NOT GIVEN：原文对食物与文化的关系给出了清楚的定性，不是没有提及；既然有关联的明确表述与题干冲突，就应判 FALSE。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Some Native Americans are now giving cookery classes featuring Iroquois white corn.",
          "translation": "一些原住民目前正在开设以易洛魁白玉米为特色的烹饪课。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "the Native Americans who grow, roast, and grind this corn and, at the same time, helping to preserve the specific cookery and religious uses that the corn has been selected to support over hundreds of years"
          },
          "synonyms": [
            "“Native Americans” 与 “Iroquois white corn” 在原文原词复现，且原文确有 “cookery” 一词，但那是 “the specific cookery and religious uses”，指这种玉米被用来支撑的特定烹饪方式和宗教用途",
            "“are now giving cookery classes”（现在正在开设烹饪课）在原文中没有任何对应：原文只说 Slow Food 帮助保存这种玉米的烹饪与宗教用途，没有任何人授课、开班的信息",
            "原文出现的动词是 grow, roast, and grind（种植、烘烤、研磨），属于原住民的传统加工做法，不等于 “classes”（课程教学）"
          ],
          "locatingTip": "定位：题干的定位词是 Iroquois white corn 与 Native Americans，两者同现于第 3 段最后一句，是全文唯一相关句。确定答案技巧：本题的关键在于分辨“保存烹饪传统”与“开设烹饪课”是不是一回事。原文说 Slow Food 通过与市场对接，让种植、烘烤、研磨这种玉米的原住民有收入，同时 “helping to preserve the specific cookery and religious uses”（帮助保存特定的烹饪方式和宗教用途）。这里只强调了保存这种玉米所承载的烹饪与宗教用途，动作主体是 Slow Food，受益者是原住民，全文没有任何 “classes / teaching / lessons” 之类表示教学活动的内容。题干所加的 “are now giving cookery classes” 属于原文没有的新信息，因此判 NOT GIVEN。原文里出现了 cookery 这个词正是命题人设置的词形诱饵，看到熟悉的词更要核对其所在的短语究竟在说什么。",
          "analysis": "第 3 段末句：“By working to find new markets for this ancient variety of corn, Slow Food is ensuring a source of income for the Native Americans who grow, roast, and grind this corn and, at the same time, helping to preserve the specific cookery and religious uses that the corn has been selected to support over hundreds of years.”（通过为这种古老板玉米寻找新市场，Slow Food 既保证种植、烘烤、研磨这种玉米的原住民有收入，同时也帮助保存这种玉米数百年来被选育所支撑的特定烹饪方式和宗教用途）。这句里与题干相关的信息只有三项：原住民的身份（Native Americans）、玉米品种（Iroquois white corn，本段前面已点明 “An example of this is the Iroquois white corn.”）、以及慢食组织帮助保存的“烹饪方式和宗教用途”。题干却把 “preserve the specific cookery … uses” 拔高为 “are now giving cookery classes”（现在正在开设烹饪课）：从“保存某种烹饪用途”到“开办教学课程”，中间隔着原文完全没有交代的一步，而且原文也没说这些活动是原住民发起的。原文未提及，故答案是 NOT GIVEN。做题提示：凡是题干把原文的“保存某物”扩展成“教学、培训、讲座”等具体活动形式，都要先回原文确认有没有相应的教学活动词。",
          "traps": [
            "为什么不是 TRUE：原文只提到 Slow Food 帮助保存这种玉米的烹饪与宗教用途，并没有任何人开设课程的信息；cookery 一词在原文中修饰的是 uses（用途），不是 classes（课程），属于词形相似而含义不同。",
            "为什么不是 FALSE：原文没有否认原住民办过或正在办烹饪课，只是对此毫无交代；没有相反信息时只能按信息缺失处理。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–9 表格填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 9
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Slow food — Taste: 7 ________ (Quantities sold: 8 ________, Cost: high)",
          "translation": "慢食食物的味道（Taste）：________。（同一行还给出“销量 8 空”“价格 high”）",
          "answer": "unique",
          "wordClass": "形容词（填原级 unique，作表格“Taste”栏中 Slow food 一行的条目，说明其味道的特点；原文 be unique to … 意为“为……所独有”，故不加比较级、不加复数）",
          "locating": {
            "paragraph": "4",
            "quote": "the taste of a recognized Slow Food is unique to that food."
          },
          "synonyms": [
            "表格栏目标题 “Taste” 对应原文的 “the taste of a recognized Slow Food”（被认可的慢食食物的味道）",
            "“Slow food” 与 “recognized Slow Food” 对应，指同一种经过认定的慢食产品",
            "本题空格要填的是描述味觉特征的词，原文用 “is unique to that food”（为该食物所独有）说明慢食的味道独一无二，故填 unique"
          ],
          "locatingTip": "定位：表格第一行是 Slow food 与三个比较维度 Taste、Quantities sold、Cost，本空问 Taste，回原文找同时谈“味道”与“慢食”的句子，即第 4 段中部的对比句 “the taste of a recognized Slow Food is unique to that food”。确定答案技巧：该句用 Whereas 把快餐与慢食的味道作对比——快餐是 “an unchanging taste wherever in the world it is eaten”（不论在世界上哪里吃，味道都一成不变），慢食则是 “unique to that food”（味道为那种食物所独有）。空格所在的栏目是 Taste，答案必须落在描述慢食味道的那个形容词上，即 unique。填词注意：题目要求 ONE WORD ONLY，原文短语 unique to that food 中只有 unique 是被比较的属性词，to that food 只是限定成分，不能一并抄入。",
          "analysis": "第 4 段的对比句是本题的落点：“Whereas global fast food companies aim to sell food that has an unchanging taste wherever in the world it is eaten, the taste of a recognized Slow Food is unique to that food.”（全球快餐公司追求的是不论在世界何处食用都味道一成不变的食物，而被认可的慢食食物，其味道是那种食物所独有的）。表格以三种食物属性做纵横对比：Taste、Quantities sold、Cost；本行主体是 Slow food，因此只需在句中找到描述慢食味道的那一项。原文用 unique to that food 明确表达“独有、独一无二”，其对应词即为 unique。词性上 unique 是形容词，在句中作表语（is unique to），回填表格后 “Slow food, Taste: unique, Cost: high” 语义通顺。注意不要把快餐那一侧的 unchanging 误填到本空格——unchanging 是第 9 空（Fast food 的味道）的答案，命题人正是用同一句话里的两个形容词分设两题，需要看清每行对应的是哪一方。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Slow food — Quantities sold: 8 ________ (Taste: 7 ________, Cost: high)",
          "translation": "慢食食物的销量（Quantities sold）：________。（同一行还给出“味道 7 空”“价格 high”）",
          "answer": "limited",
          "wordClass": "形容词（由过去分词转化而来，填原级 limited，作表格“Quantities sold”栏中 Slow food 一行的条目，说明其销量有限；该栏是条目片段，只填形容词本身，不补 are 等动词）",
          "locating": {
            "paragraph": "4",
            "quote": "In the case of fast food, these are enormous, but the quantities of Slow Food products which are available for selling are limited, due to the rarity of the plants or animals."
          },
          "synonyms": [
            "表格栏目 “Quantities sold” 对应原文的 “the quantities of Slow Food products which are available for selling”（可供销售的慢食产品数量）",
            "“Slow food” 对应原文的 “Slow Food products”，本空要填的是描述其销量大小的词，原文用 are limited（有限）表达",
            "原文用 but 把快餐的 enormous 与慢食的 limited 对立起来，表格中 Fast food 行的 Quantities sold 已给出 enormous，反推 Slow food 行对应 limited"
          ],
          "locatingTip": "定位：表格第一行主体是 Slow food，本空所在栏目是 Quantities sold，回原文找同时出现 quantities 与 Slow Food 的句子，即第 4 段倒数第二句。确定答案技巧：该句先给快餐 “these are enormous”（这些数量巨大），再用 but 转折说明慢食 “the quantities of Slow Food products which are available for selling are limited”（可供销售的慢食产品数量是有限的），句末还用 due to the rarity of the plants or animals（因为植物或动物稀有）解释了原因。题干问的是数量，答案就是描述该数量的形容词 limited；同时表格里 Fast food 一行已标明 enormous，两侧正好构成对比，可以互相印证。填词注意：ONE WORD ONLY，只写 limited，不要写 are limited 或 limited due to the rarity。",
          "analysis": "第 4 段倒数第二句：“Another aspect is the quantities sold of these two types of food. In the case of fast food, these are enormous, but the quantities of Slow Food products which are available for selling are limited, due to the rarity of the plants or animals.”（另一个方面是这两类食物的销售数量。快餐的销量极其庞大，而可供销售的慢食产品数量则是有限的，原因在于植物或动物本身稀有）。这句紧接 “Another aspect is the quantities sold of these two types of food”，明确把“销量”列为第二个比较维度，与表格的 Quantities sold 栏一一对应。表格中 Fast food 行的该栏已填 enormous，正是原文 “In the case of fast food, these are enormous” 的对应；剩下 Slow food 一行的数量描述即为 limited。词性上 limited 由过去分词转化为形容词，在 are 之后作表语，表示“有限的”，符合表格中对属性词的填写要求。做题时可用表格已给出的对照项反查：enormous（巨大）与 limited（有限）正好是一对反义描述，说明填词方向正确。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Fast food — Taste: 9 ________ (Quantities sold: enormous, Cost: low)",
          "translation": "快餐的味道（Taste）：________。（同一行还给出“销量 enormous”“价格 low”）",
          "answer": "unchanging",
          "wordClass": "形容词（由现在分词转化而来，填原级 unchanging，作表格“Taste”栏中 Fast food 一行的条目，说明快餐的味道一成不变；表格为条目片段，故不写成副词、不加比较级）",
          "locating": {
            "paragraph": "4",
            "quote": "global fast food companies aim to sell food that has an unchanging taste wherever in the world it is eaten"
          },
          "synonyms": [
            "表格栏目 “Taste” 对应原文的 “has an unchanging taste”（味道一成不变）",
            "“Fast food” 对应原文的 “global fast food companies”（全球快餐公司）所卖的食物",
            "原文用 Whereas 把快餐的 unchanging 与慢食的 unique 对立，表格中 Slow food 行已给出 unique，反推 Fast food 行的味道特征即 unchanging"
          ],
          "locatingTip": "定位：表格第二行主体是 Fast food，本空栏目是 Taste，回原文找描述快餐味道的句子，仍是第 4 段的 Whereas 对比句。确定答案技巧：该句前半部分说 “global fast food companies aim to sell food that has an unchanging taste wherever in the world it is eaten”，即快餐公司追求的是不论在哪里食用都“一成不变的味道”，用来修饰 taste 的词就是 unchanging；后半句的 unique 已经作为第 7 空（Slow food 的味道）使用，两行答案互为一组对立描述，可相互验证。填词注意：ONE WORD ONLY，只写 unchanging 一词，不要写成 doesn't change 或 not changing 这类多词改写。",
          "analysis": "第 4 段的对比句：“Whereas global fast food companies aim to sell food that has an unchanging taste wherever in the world it is eaten, the taste of a recognized Slow Food is unique to that food.”（全球快餐公司追求的是不论在世界何处食用都味道一成不变的食物，而被认可的慢食食物，其味道是那种食物所独有的）。表格第二行主体为 Fast food，本空的栏目是 Taste，因此要取的是描述快餐味道特征的那个词，原文对应为 unchanging taste，空格填 unchanging。该句用 Whereas 构成对比结构：unchanging（一成不变）与 unique（独一无二）分别落在快餐与慢食两侧，而表格的 Cost 栏也用 high 与 low、Quantities sold 栏用 enormous 与有限的数量形成同样的两侧对照，说明表格是围绕“快餐与慢食的差异”来设计的，只要判断本行属于哪一方即可。词性上 unchanging 是现在分词转化的形容词，作前置定语修饰 taste；回填后 “Fast food, Taste: unchanging, Quantities sold: enormous, Cost: low” 与原文完全对应。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 10–13 简答题（ONE WORD AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 10,
        "end": 13
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "What were farmers in the USA given so that they could raise endangered turkeys?",
          "translation": "美国农民得到了什么，以便他们能够饲养濒危的火鸡？",
          "answer": "eggs",
          "wordClass": "名词（复数形式，回答问句 What were farmers … given?，代替疑问词作 given 的宾语，指原文中供给农户的“蛋”；题目限 ONE WORD AND/OR A NUMBER，只填 eggs 一词）",
          "locating": {
            "paragraph": "5",
            "quote": "The farmers had to begin by hatching the eggs they had been supplied with, then raising the young turkeys to adults."
          },
          "synonyms": [
            "“were given” 同义替换为原文的 “had been supplied with”（被提供、被供应），被动结构一致",
            "“so that they could raise endangered turkeys” 对应原文的 “raising the young turkeys to adults”，指把幼火鸡养大",
            "被给出的东西在原文中是 “the eggs”，即题干所问的对象；同段前一句 “raise a total of 5,000 turkeys from eggs which had been selected from four varieties of endangered turkey” 也确认起点是 eggs"
          ],
          "locatingTip": "定位：题干的关键词是 farmers in the USA 与 endangered turkeys，直接锁定第 5 段（讲美国农民参与慢食火鸡项目）。确定答案技巧：题目问“农民被给了什么”，要在原文中找被动语态的 provide / give / supply 类动词。第 5 段第 3 句写 “The farmers had to begin by hatching the eggs they had been supplied with”，had been supplied with 正是 were given 的同义被动表达，被提供的东西就是 eggs；前一句 “raise a total of 5,000 turkeys from eggs which had been selected from four varieties of endangered turkey” 也说明项目的起点是这些蛋，两者互相印证。填词注意：题目限 ONE WORD AND/OR A NUMBER，答案只写 eggs 一个词，不要写 the eggs。",
          "analysis": "第 5 段讲 “Some years ago, a network of farmers in the USA volunteered to take part in a national Slow Food project.”（若干年前，美国的一个农民网络自愿参加了一项全国性的慢食项目），随后交代项目的具体做法：“The project was for the farmers to raise a total of 5,000 turkeys from eggs which had been selected from four varieties of endangered turkey. The farmers had to begin by hatching the eggs they had been supplied with, then raising the young turkeys to adults.”（这个项目要求农民用从四种濒危火鸡品种中挑选出的蛋来饲养总共 5000 只火鸡。农民必须先孵化提供给他们的那些蛋，再把小火鸡养大）。题干问 “What were farmers in the USA given”（美国农民被给了什么），对应原文第三句 “the eggs they had been supplied with” 中的 supplied with，即被提供给他们的蛋；也就是说，农民拿到的是蛋，然后自己孵化、养大。词性上 eggs 是复数名词，在定语从句中作 had been supplied with 的宾语。答案写 eggs 一词即可，符合 ONE WORD AND/OR A NUMBER 的限制。注意不要把 5,000 turkeys 当答案：题干问的是“为了饲养火鸡而被给出的东西”，给出的是蛋，火鸡是养成的结果。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "How many varieties of endangered turkey benefited from the project?",
          "translation": "有多少个濒危火鸡品种从这个项目中受益？",
          "answer": [
            "4",
            "four"
          ],
          "wordClass": "数词（回答 How many，作 varieties 的数量限定语，可写阿拉伯数字 4，也可写英文 four；题目限 ONE WORD AND/OR A NUMBER，两种写法都只占一个词或一个数字）",
          "locating": {
            "paragraph": "5",
            "quote": "The project was for the farmers to raise a total of 5,000 turkeys from eggs which had been selected from four varieties of endangered turkey."
          },
          "synonyms": [
            "“How many varieties” 对应原文的 “four varieties”，题干把陈述句改写为 how many 疑问句",
            "“endangered turkey” 与原文的 “endangered turkey” 原词复现",
            "“benefited from the project” 对应原文的 “The project was for the farmers to raise …”，即这些品种正是该项目的保护对象"
          ],
          "locatingTip": "定位：题干的关键词 varieties、endangered turkey 与 project 同现于第 5 段第 2 句，句中即可找到数字。确定答案技巧：题目问数量（How many），回原文找与之搭配的名词 varieties，原文写 “eggs which had been selected from four varieties of endangered turkey”（从四种濒危火鸡品种中挑选出的蛋），four 就是答案。填写时按题目要求可写数字 4，也可写英文 four，两者都被接受；注意不要误填同句中的 5,000（那是火鸡总只数，不是品种数），也不要把同段其他数字误当成答案。",
          "analysis": "第 5 段第 2 句：“The project was for the farmers to raise a total of 5,000 turkeys from eggs which had been selected from four varieties of endangered turkey.”（这个项目要求农民用从四种濒危火鸡品种中挑选出的蛋来饲养总共 5000 只火鸡）。题干问 “How many varieties of endangered turkey”（多少个濒危火鸡品种），句中直接给出 four varieties of endangered turkey，数量词 four 即答案；同时这句也点明了这些品种是项目的保护对象，符合题干 benefited from the project 的表述。此处有两个数字，务必分清层级：5,000 是火鸡的总只数（a total of 5,000 turkeys），four 是品种数（four varieties），题干问的是 varieties，因此只能取 four。答案可写阿拉伯数字 4 或英文 four，均符合题目 ONE WORD AND/OR A NUMBER 的要求；本题答案表同时接受两种写法。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Who was not happy with the size of the turkeys?",
          "translation": "谁对火鸡的个头（大小）不满意？",
          "answer": "chefs",
          "wordClass": "名词（复数形式，回答 Who 的提问，代替 Who 在句中作主语，指原文中抱怨火鸡太小的餐馆厨师，故填复数名词 chefs，不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "chefs in some restaurants where the turkeys were on the menu complained that the Slow Food turkeys were smaller than industrially produced turkeys"
          },
          "synonyms": [
            "“was not happy with” 同义替换为原文的 “complained”（抱怨、不满）",
            "“the size of the turkeys” 同义替换为原文的 “were smaller than industrially produced turkeys”（比工业化养殖的火鸡更小），原文用比较级具体说明了对大小的不满",
            "被问及的对象由原文主语给出：“chefs in some restaurants where the turkeys were on the menu”"
          ],
          "locatingTip": "定位：题干的关键词是 not happy 与 the size of the turkeys，第 5 段倒数第二句用 Although 引出一处“不满”，只有这一处负面表述。确定答案技巧：与“不满”对应的是原文的 complained（抱怨），其主语是 chefs（厨师们），抱怨的内容正是火鸡的个头——the Slow Food turkeys were smaller than industrially produced turkeys。题干把 “complained that … were smaller” 概括为 “was not happy with the size”，主体与内容都能对上，因此答案填 chefs。填词注意：题目限 ONE WORD 或一个数字，只写 chefs；不要填 restaurants（那是厨师所在的场所），也不要填 consumers（他们对味道的反应是正面的，恰恰相反）。",
          "analysis": "第 5 段倒数第二句：“Although chefs in some restaurants where the turkeys were on the menu complained that the Slow Food turkeys were smaller than industrially produced turkeys, the distinctive flavors were very well received by consumers.”（尽管某些餐馆里把这种火鸡列入菜单的厨师抱怨，慢食火鸡比工业化养殖的火鸡个头小，但其独特的风味却深受消费者欢迎）。这句用 Although 构成对比：一侧是厨师（chefs）的 complain，一侧是消费者（consumers）对风味的认可。本题问“谁对火鸡的大小不满意”，对应 complain 的主体 chefs；题干中的 not happy with 是 complained 的同义转述，the size of the turkeys 则对应 smaller than industrially produced turkeys（比工业化生产的火鸡小）。词性上 chefs 是复数名词，作 complained 的主语，填写时保持原文复数形式，且只需一个词。这里与第 13 题正好是一正一负两种态度，务必按题干问的是“不满”还是“喜欢”分别取词。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Who liked the taste of the endangered turkeys?",
          "translation": "谁喜欢这种濒危火鸡的味道？",
          "answer": "consumers",
          "wordClass": "名词（复数形式，回答 Who 的提问，代替 Who 作 liked 的主语，指原文中喜欢这种火鸡味道的消费者，故填复数名词 consumers，不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "the distinctive flavors were very well received by consumers"
          },
          "synonyms": [
            "“liked the taste” 同义替换为原文的 “the distinctive flavors were very well received”（独特风味深受欢迎）",
            "“Who” 的答案由 by 的宾语给出：“by consumers”，即消费者是喜欢的一方",
            "“the taste” 同义替换为原文的 “the distinctive flavors”（独特的风味）"
          ],
          "locatingTip": "定位：题干关键词是 liked the taste，第 5 段倒数第二句的后半部分正是对风味的正面评价，与前半部分的抱怨形成对比。确定答案技巧：原文用 “the distinctive flavors were very well received by consumers”（独特风味深受消费者欢迎）表达好评；be well received 与 like 同义，动作的接受者由 by 引出，即 consumers。题干把原文的被动结构改问 “Who liked …”，答案就落在 by 后面的施事名词上，填 consumers。填词注意只写一个词 consumers（复数），不要写 customers（原文用的是 consumers）或 chefs（那是抱怨大小的一方）。",
          "analysis": "第 5 段倒数第二句后半部分：“the distinctive flavors were very well received by consumers”（独特的风味受到消费者的高度欢迎）。原文先说厨师抱怨火鸡个头小，随即用逗号接出这一句，形成“厨师挑剔大小、消费者欣赏风味”的对照。题干问 “Who liked the taste of the endangered turkeys”，其中 liked the taste 对应 were very well received（受到欢迎即被喜爱），the taste 对应 flavors；而动作的接受者由介词 by 点明，是 consumers。词性上 consumers 是复数名词，作 by 的宾语；填写时保持原文拼写与复数形式，只写一个词。注意区分本题与第 12 题的两方主体：厨师（chefs）抱怨的是大小，消费者（consumers）喜欢的是味道，题目分别问“谁不满意大小”和“谁喜欢味道”，答案正好互换，回到原文逐句核对即可避免混淆。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
