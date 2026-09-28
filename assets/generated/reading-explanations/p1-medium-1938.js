(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1938", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1938",
  "meta": {
    "examId": "p1-medium-1938",
    "title": "A Brief History of Glassmaking 玻璃制造简史",
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
          "stem": "By about 450 BC, glass had become as important as ceramics in Greece.",
          "translation": "到约公元前450年，玻璃在希腊已经变得和陶器同等重要。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "Meanwhile, the Greeks still concentrated their energies on ceramics, and used glass simply for coloured inlays in sculptures"
          },
          "synonyms": [
            "题干中的时间状语 “By about 450 BC” 对应原文第 B 段段首的 “By about 450 BC”",
            "题干中的 “ceramics” 与原文的 “ceramics” 为同一词，说明该句正是考点所在",
            "题干说玻璃与陶器 “as important as”（同等重要），而原文用 “concentrated their energies on ceramics” 与 “used glass simply for coloured inlays” 构成对比，表示玻璃只是被当作装饰材料的次要用途"
          ],
          "locatingTip": "定位：题干里的年代 “about 450 BC” 是极好用的时间定位词，同时 “ceramics” 和 “Greece/Greeks” 都是专有性较强的名词，直接把它们放到 B 段查读，第一句就出现 “By about 450 BC”，第三句即出现 Greeks 与 ceramics。确定答案技巧：判断题看的是“程度/关系”是否被原文改写。原文说希腊人“仍然把精力集中在陶器上”，玻璃“仅仅”用于雕塑上的彩色镶嵌（simply），这个 “simply” 与 “still” 直接否定了“同等重要”，因此判 FALSE。",
          "analysis": "题干核心是“玻璃在希腊的地位已经和陶器一样重要”。回到原文第 B 段：By about 450 BC, artisans in the glass workshops of the Persian Empire had learned to apply other techniques…（公元前450年左右，技术领先的是波斯帝国的玻璃作坊），紧接着 Meanwhile, the Greeks still concentrated their energies on ceramics, and used glass simply for coloured inlays in sculptures。原文用 Meanwhile（与此同时）把波斯与希腊作对比：希腊人仍把主要精力放在陶器上，玻璃只被“简单地（simply）”用于雕塑的彩色镶嵌。既然玻璃在希腊只承担装饰性、附属性的角色，而陶器才是主业，就不可能“和陶器同等重要”。题干把一个“从属、次要”的关系夸大成“同等重要”，属于与原文相矛盾，所以答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文用 “still concentrated their energies on ceramics”（仍然把主要精力放在陶器上）和 “used glass simply for coloured inlays”（只是把玻璃用于彩色镶嵌），两个词都说明玻璃在希腊处于次要地位，不存在“同等重要”的意思。",
            "为什么不是 NOT GIVEN：原文对希腊的陶器与玻璃各自的地位有明确、直接的表述，信息已经给出，只是与题干不符，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The glassmakers of the early Roman Empire made copies of luxury Greek items.",
          "translation": "早期罗马帝国的玻璃工匠制作了希腊奢侈品的仿制品。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "This industry was in turn to have a profound effect on the glass art of the early-Roman Empire."
          },
          "synonyms": [
            "题干中的 “the early Roman Empire” 与原文的 “the early-Roman Empire” 为同一表达，是本题的最强定位词",
            "题干中的 “luxury Greek items” 对应原文第 C 段的 “an industry of luxury glass items” 与 “former Greek areas”",
            "原文用 “have a profound effect on”（产生深远影响）来描述影响关系，而题干换成 “made copies of”（制作仿制品），两者并不是同义替换，后者在原文中没有对应信息"
          ],
          "locatingTip": "定位：先把 “early Roman Empire” 圈出来，这是全文唯一出现的位置几乎都在 C 段末句；再用 “Greek / luxury” 在 C 段确认，C 段前半句讲的就是 former Greek areas 中的奢侈品玻璃产业。确定答案技巧：判断题遇到 “made copies of”“copied”“similar to” 这类“具体行为”的断言时，要先回原文找有没有该行为本身。原文只讲影响（effect）与延续（in turn），从未出现“复制/仿制”的动作，故为 NOT GIVEN。",
          "analysis": "题干说“早期罗马帝国的玻璃工匠仿制了希腊奢侈品”。原文第 C 段说：in the 1st and 2nd centuries BC, an industry of luxury glass items of various forms did emerge in former Greek areas strongly influenced by eastern cultures. This industry was in turn to have a profound effect on the glass art of the early-Roman Empire. 也就是说，公元前1至2世纪，在前希腊地区（受东方文化强烈影响）出现了一个生产各种奢侈品玻璃的产业，这个产业反过来对早期罗马帝国的玻璃艺术产生了深远影响。原文给出的唯一关系是“影响（effect）”，而题干问的是“具体行为——制作仿制品（made copies）”。“受影响”可以有很多种形式（技法、风格、审美），并不等于“照抄复制”，原文完全没有提到罗马工匠仿制希腊器物这一动作，信息缺失，所以答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说前希腊地区的奢侈品玻璃产业对早期罗马帝国的玻璃艺术有 “profound effect”，从未说罗马工匠 “made copies of” 希腊器物。“有影响”与“制作仿制品”不等价。",
            "为什么不是 FALSE：原文没有出现任何否定性表达（如 did not copy、never imitated），只是没有提及“仿制”这一行为，属于信息不存在，而不是信息相反，所以不选 FALSE。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "With the rise of the Roman Empire, glass objects became more common.",
          "translation": "随着罗马帝国的崛起，玻璃制品变得更加常见。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "The rise of the Roman Empire (1st century BC) was accompanied by an increase in glass production in the Mediterranean region."
          },
          "synonyms": [
            "题干中的 “With the rise of the Roman Empire” 同义替换为原文的 “The rise of the Roman Empire … was accompanied by”",
            "题干中的 “glass objects became more common” 同义替换为原文的 “an increase in glass production in the Mediterranean region”",
            "题干中的 “more common” 与下文的 “the steps from luxury to mass production”（从奢侈品走向大批量生产）方向一致，都表示玻璃器物越来越普遍"
          ],
          "locatingTip": "定位：题干保留了大写专有名词 “Roman Empire”，而 “rise” 是动词化的抽象词，容易在首句中找见。第 D 段第一句即 “The rise of the Roman Empire (1st century BC) was accompanied by an increase in glass production…”，几乎是逐字对应，属于最容易得分的题。确定答案技巧：判断题中，只要题干是对原文同义改写的正面陈述（产量增加即更常见），且没有改变程度、范围、因果，就判 TRUE。",
          "analysis": "题干说“随着罗马帝国的崛起，玻璃制品变得更加常见”。原文第 D 段首句：The rise of the Roman Empire (1st century BC) was accompanied by an increase in glass production in the Mediterranean region.（罗马帝国的崛起伴随着地中海地区玻璃产量的增长。）“rise of the Roman Empire” 与题干完全一致；“an increase in glass production” 就是“产量增加”，产量增加自然意味着物件在市场上更常见、更普遍，这正好对应题干的 “became more common”。本段末尾还补充 However, as the empire expanded, the steps from luxury to mass production, and from decorative objects to vessels for daily use, were gradually taken.（随着帝国扩张，玻璃逐步从奢侈品走向大批量生产，从装饰品走向日常用具），进一步印证玻璃器物日益普及。题干与原文信息一致，故答案为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确给出 “an increase in glass production”，即产量增加，与题干“变得更常见”方向完全一致，不存在矛盾。",
            "为什么不是 NOT GIVEN：产量是否增加是原文直接给出的信息，并非未提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Syrian glassmakers created many different types of objects by blowing glass.",
          "translation": "叙利亚的玻璃工匠通过吹制玻璃制造出许多不同类型的器物。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "glass, when melted, can be made into shapes by blowing down a hollow metal tube. Thus it became possible for these craftsmen to produce a large variety of vessels for different uses"
          },
          "synonyms": [
            "题干中的 “created … objects by blowing glass” 同义替换为原文的 “can be made into shapes by blowing down a hollow metal tube”",
            "题干中的 “many different types of objects” 同义替换为原文的 “a large variety of vessels for different uses”",
            "题干中的 “Syrian glassmakers” 对应原文的 “the Syrian glassmakers”"
          ],
          "locatingTip": "定位：专有名词 “Syrian glassmakers” 是全文唯一的强定位词，直接锁定 E 段首句。确定答案技巧：本题两个信息点都要逐一核对——(1) 方式是否为“吹制玻璃”；(2) 产物是否为“许多不同类型”。原文 “blowing down a hollow metal tube” 对应吹制，“a large variety of vessels for different uses”（供不同用途的大量不同容器）对应 many different types of objects，两个信息点全部吻合，因此判 TRUE。",
          "analysis": "题干说“叙利亚玻璃工匠用吹制的方式造出许多不同类型的器物”。原文第 E 段首句：The groundwork for this was the Syrian glassmakers' discovery at the beginning of the 1st century BC that glass, when melted, can be made into shapes by blowing down a hollow metal tube.（这一切的基础，是叙利亚玻璃工匠在公元前1世纪初的发现：玻璃熔化后可以通过向中空金属管里吹气来成形。）这里的 blowing down a hollow metal tube 正是“吹制法”。紧接着第二句：Thus it became possible for these craftsmen to produce a large variety of vessels for different uses – from simple bottles to more decorative and complex pieces.（因此工匠们得以生产出供不同用途的大量不同容器，从简单瓶子到更具装饰性的复杂器物。）large variety of vessels for different uses 完全对应 “many different types of objects”；craftsmen 回指前句的 Syrian glassmakers。题干的两个信息点都能在原文逐字找到依据，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：题干的两处关键信息（吹制成形、多种不同器物）在原文都有直接依据，不存在与原文相反的情况。",
            "为什么不是 NOT GIVEN：原文既点明了叙利亚工匠，也点明了吹制技法和器物种类的丰富性，信息完整，不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The Roman road network provided a safer way of transporting glass than previous methods.",
          "translation": "罗马的道路网络提供了比以前的方法更安全的玻璃运输方式。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "The well-planned network of roads in the Roman Empire ensured that the new shapes of manufactured glass objects, and the newly developed techniques used to produce them, were quickly spread and adopted."
          },
          "synonyms": [
            "题干中的 “The Roman road network” 同义替换为原文的 “The well-planned network of roads in the Roman Empire”",
            "题干中的 “transporting glass” 与原文的 “were quickly spread and adopted” 属于相关但不相同的概念，原文谈的是器物与技术的传播、被采用，而非运输本身",
            "题干中的 “safer”（更安全）在原文中没有任何对应表达，原文强调的是 “quickly”（迅速）"
          ],
          "locatingTip": "定位：用 “road / roads” 或 “network” 扫读全文，只在 F 段首句出现。确定答案技巧：判断题必须逐词核对形容词比较级这类“隐藏考点”。原文只给出道路带来的结果是 “quickly spread and adopted”（迅速传播并被采用），比较点落在“速度”上；而题干的比较点落在 “safer”（安全性）上，且用 “than previous methods” 作比较。原文既没有比较安全性，也没有与“以前的方法”对比，属于信息缺失，故判 NOT GIVEN。本段后面还谈到 sand、soda ash、生产中心，与“安全运输”无关。",
          "analysis": "题干说“罗马道路网让玻璃的运输比以前的方法更安全”。原文第 F 段首句：The well-planned network of roads in the Roman Empire ensured that the new shapes of manufactured glass objects, and the newly developed techniques used to produce them, were quickly spread and adopted.（罗马帝国规划良好的道路网，保证了制造玻璃的新器形以及生产它们的新技术能够迅速传播和被采用。）原文说的是道路网的“规划良好（well-planned）”以及结果是“迅速（quickly）传播与采用”，焦点在速度与接受度上。题干却把它改写为“更安全的运输方式（a safer way of transporting glass）并与以前的方法比较（than previous methods）”。原文根本没有提到运输安全性，也没有提到更早的运输方式，更谈不上比较。这类“看似相关、实则偷换了比较维度”的题干是典型的 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只强调道路网使新器形与新技术 “quickly spread and adopted”，并未给出任何关于“运输更安全”的信息，也没有与以往方法作比较。",
            "为什么不是 FALSE：原文没有否定性表述（如运输并不更安全），只是完全没提安全性，属于信息不存在，故不能判 FALSE。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Roman glass vessels produced in the 1st century AD were restricted to simple designs.",
          "translation": "公元1世纪生产的罗马玻璃器皿仅限于简单的设计。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "G",
            "quote": "Even vessels technically very difficult to produce have been found, such as playful bottles in the shape of birds or other animals."
          },
          "synonyms": [
            "题干中的 “in the 1st century AD” 对应原文第 G 段首句的 “Starting in the 1st century AD”",
            "题干中的 “restricted to simple designs” 与原文的 “vessels technically very difficult to produce”（制作难度极高的器物）构成直接矛盾",
            "题干中的 “vessels” 与原文的 “vessels” 为同一词，是本题的定位锚点"
          ],
          "locatingTip": "定位：时间词 “1st century AD” 在全文只出现在 G 段开头（Starting in the 1st century AD），先锁定该段；再看 “vessels/design” 的说法。确定答案技巧：判断题中的绝对化表达 “restricted to”（仅限于）是重点警戒词，只要原文举出哪怕一个反例就足以判 FALSE。本段既说 bowls in all shapes（各种形状的碗），又在末句给出 “Even vessels technically very difficult to produce… playful bottles in the shape of birds or other animals”，反例明确，故判 FALSE。",
          "analysis": "题干说“公元1世纪的罗马玻璃器皿仅限于简单的设计”。原文第 G 段首句：Starting in the 1st century AD, small vessels and utensils in Roman households came to be made predominantly of wheel-blown glass…（从公元1世纪开始，罗马家庭中的小型器皿与用具主要用轮吹法制造玻璃。）随后列举：there were bowls in all shapes – some formed on the wheel; some blown – plates, lamps, and much more.（有各种形状的碗，有的用轮子成形，有的吹制，还有盘子、灯具等等。）段末更直接：Even vessels technically very difficult to produce have been found, such as playful bottles in the shape of birds or other animals.（甚至发现了技术上极难制作的器物，例如做成鸟或其他动物形状的趣味瓶子。）原文反复强调种类多、形状多、甚至有高难度器物，与题干的 “restricted to simple designs”（只限于简单设计）正好相反，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确写到 bowls in all shapes（各种形状的碗）、plates, lamps, and much more，以及技术上极难制作的鸟形、动物形趣味瓶，说明设计绝不限于简单样式。",
            "为什么不是 NOT GIVEN：原文对公元1世纪罗马玻璃器的复杂程度有直接、清楚的描述，信息已给出且与题干矛盾，因此不选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 笔记填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "greater emphasis on glass having a ______, lightness and transparency",
          "translation": "更加重视玻璃所具有的______、轻盈和透明。",
          "answer": "shiny surface",
          "wordClass": "名词短语（形容词 shiny 修饰名词 surface；位于不定冠词 a 之后，与后面的 lightness、transparency 并列，一起作动名词 having 的宾语；用单数形式，共两个词，符合 NO MORE THAN TWO WORDS）",
          "locating": {
            "paragraph": "H",
            "quote": "from the 2nd century AD, the transparency and also lightness of the material as well as its shiny surface, came to be valued more"
          },
          "synonyms": [
            "笔记小标题 “2nd century AD” 与原文的 “from the 2nd century AD” 对应，是本题的定位锚点",
            "题干中的 “greater emphasis on” 同义替换为原文的 “came to be valued more”",
            "题干中的 “lightness and transparency” 与原文的 “the transparency and also lightness” 为同义并列，只是顺序颠倒，说明该并列结构正是答案所在处",
            "题干中空格前的冠词 “a” 对应原文的 “its shiny surface”，答案必须是单数名词短语"
          ],
          "locatingTip": "定位：笔记的层级标签 “2nd century AD” 直接指向原文第 H 段（全段以 “from the 2nd century AD” 起头）。确定答案技巧：填空题先看并列结构——题干给出 “______, lightness and transparency”，空格与 lightness、transparency 并列，说明答案也是材料的一种“外观属性”。原文同处并列三项：the transparency and also lightness of the material as well as its shiny surface，其中唯一带所有格 “its” 的正是 shiny surface，与题干冠词 a 吻合。还要注意不超过两个词，“shiny surface” 恰好两个词。答案写法：全小写，普通名词短语不保留大写。",
          "analysis": "题干要求填出与 lightness（轻盈）、transparency（透明）并列的玻璃特征。原文第 H 段：Whereas colour characterised the appearance of early Roman glass – in keeping with the Greek tradition – from the 2nd century AD, the transparency and also lightness of the material as well as its shiny surface, came to be valued more.（早期罗马玻璃以色彩为特征，这与希腊传统一致；但从公元2世纪起，材料的透明性、轻盈性以及它闪亮的表面，逐渐受到更高的重视。）原文用 “came to be valued more” 表达“更被看重”，即题干的 “greater emphasis on”；并列项中的 transparency 与 lightness 与题干完全一致，剩下的第三项 its shiny surface（它闪亮的表面）就是答案。空格前有冠词 a，对应原文的 its，形式匹配。因此答案填 shiny surface。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "complex ______ were often added, as well as coloured accents",
          "translation": "常常会加上复杂的______，以及一些彩色点缀。",
          "answer": "details",
          "wordClass": "名词（可数名词复数，指细部装饰；位于形容词 complex 之后，作从句的主语，与谓语 were 一致；用复数形式，单数 detail 不合语法）",
          "locating": {
            "paragraph": "H",
            "quote": "There was, though, an increasing tendency to apply intricate details, and a few coloured accents can be observed."
          },
          "synonyms": [
            "题干中的 “complex” 同义替换为原文的 “intricate”",
            "题干中的 “were often added” 同义替换为原文的 “an increasing tendency to apply”（越来越倾向于施加/添加）",
            "题干中的 “as well as coloured accents” 同义替换为原文的 “and a few coloured accents can be observed”"
          ],
          "locatingTip": "定位：题干的 “coloured accents（彩色点缀）” 是全段最具辨识度的搭配，在第 H 段倒数第二句出现，直接锁定该句。确定答案技巧：看语法——空格后是 were，说明所填词必须是复数名词；再看搭配，complex 修饰该名词，原文对应处用的是形容词 intricate 修饰 details，且题干 “were often added” 与原文 “an increasing tendency to apply” 语义相同、位置一致，因此答案为 details。注意：若填 detail（单数）将与 were 不一致。答案写法：全小写。",
          "analysis": "题干说“常常加上复杂的______，以及一些彩色点缀”。原文第 H 段：There was, though, an increasing tendency to apply intricate details, and a few coloured accents can be observed.（不过，当时越来越倾向于施加精细的细节，也能看到少量彩色点缀。）其中 intricate 与题干的 complex 构成同义替换，tendency to apply 与 were often added 对应，a few coloured accents can be observed 与 coloured accents 对应。剩下唯一未对应的实义名词就是 details，它被 intricate 修饰，正是题干 complex 所要修饰的词。语法上原文用复数 details，题干谓语用 were，形式一致。因此答案填 details（全小写）。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "extra threads of glass used to highlight the ______ of vessels",
          "translation": "用来突出器皿______的额外玻璃细线。",
          "answer": "mouths",
          "wordClass": "名词（可数名词复数，指器皿的口部；位于定冠词 the 之后，作动词 highlight 的宾语，并与后面的复数 vessels 呼应；用复数 mouths，单数不合语法）",
          "locating": {
            "paragraph": "H",
            "quote": "Different coloured glass was also used for simple handles, or for one or two threads or strings of extra glass wrapped around the rims to give emphasis to the vessels' mouths."
          },
          "synonyms": [
            "题干中的 “extra threads of glass” 同义替换为原文的 “one or two threads or strings of extra glass”",
            "题干中的 “used to highlight” 同义替换为原文的 “to give emphasis to”",
            "题干中的 “the ______ of vessels” 对应原文的 “the vessels' mouths”，原文用所有格，题干用 of 结构"
          ],
          "locatingTip": "定位：题干的核心名词短语 “extra threads of glass” 只在第 H 段末句出现（one or two threads or strings of extra glass），定位毫无难度。确定答案技巧：把题干与原文做逐词对齐——extra threads of glass 对应 one or two threads or strings of extra glass；highlight 对应 give emphasis to；the ______ of vessels 对应 the vessels' mouths（原文用所有格 vessels' mouths，题干改写为 the … of vessels）。因此空格填 mouths。注意两个细节：一是要填复数 mouths（原文 the vessels' mouths 是复数，指多个器皿的口沿）；二是不能写成 mouth，也不要超两个词。答案写法：全小写。",
          "analysis": "题干说“用来突出器皿______的额外玻璃细线”。原文第 H 段末句：Different coloured glass was also used for simple handles, or for one or two threads or strings of extra glass wrapped around the rims to give emphasis to the vessels' mouths.（不同颜色的玻璃也被用于简单的手柄，或者用一两根缠绕在器口边沿的额外玻璃细线或细丝，以强调器皿的口部。）两条信息完全对应：extra threads of glass 对应 one or two threads or strings of extra glass；highlight 对应 give emphasis to；the … of vessels 对应 the vessels' mouths。因此答案是 mouths（复数，全小写）。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "high point of later Roman glassmaking can be seen in containers like the ______",
          "translation": "后期罗马玻璃制造的巅峰可见于诸如______之类的容器。",
          "answer": "shellfish beaker",
          "wordClass": "名词短语（具体器物的名称，由名词 shellfish 修饰名词 beaker；位于介词 like 与定冠词 the 之后，作 like 的宾语；共两个词，符合 NO MORE THAN TWO WORDS）",
          "locating": {
            "paragraph": "I",
            "quote": "Later vessels such as the so-called shellfish beaker represented a climax in glassmaking of the later Roman period"
          },
          "synonyms": [
            "笔记小标题 “Late Roman period” 对应原文的 “the late Roman period”，锁定第 I 段",
            "题干中的 “high point … can be seen in” 同义替换为原文的 “represented a climax in”",
            "题干中的 “containers” 同义替换为原文的 “vessels”",
            "题干中的 “like” 同义替换为原文的 “such as”"
          ],
          "locatingTip": "定位：笔记标签 “Late Roman period” 直指第 I 段（该段首句即 In the late Roman period (3rd and 4th centuries AD)…）；再在段内找 “climax/high point”。确定答案技巧：空格前有定冠词 the，空格后无其他成分，说明答案是一个可作为特定器物名的名词短语。原文用 Later vessels such as the so-called shellfish beaker represented a climax…，其中 such as 对应题干的 like，climax 对应 high point，the so-called 之后的名词短语即为所填答案。注意答案由两个词组成，符合 NO MORE THAN TWO WORDS 的限制；答案写法上本题为器物俗称，按规范小写书写。",
          "analysis": "题干说“后期罗马玻璃制造的巅峰可以从诸如______这样的容器中看到”。原文第 I 段：In the late Roman period (3rd and 4th centuries AD) the tendency towards complexity was also reflected in the growing popularity of cut and engraved work. … Later vessels such as the so-called shellfish beaker represented a climax in glassmaking of the later Roman period…（后期的器物，如所谓的 shellfish beaker，代表了罗马后期玻璃制造的巅峰。）其中 climax 与题干的 high point 构成同义替换，Later vessels such as 与题干的 containers like 对应，因此紧跟在 such as the so-called 之后的 shellfish beaker 就是答案。该段随后一句还解释了它的工艺：fish and similar objects were blown separately, formed with special tools, and melted onto the walls of simply-shaped vessels，这正对应笔记中下一条要点“某些工具被用来制作形状，然后附着到简单器皿上”，可反证定位正确。答案填 shellfish beaker。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "from the 15th century, Venetians used old techniques like ______ and thread-glass decoration",
          "translation": "从15世纪起，威尼斯人使用了诸如______和细线玻璃装饰之类的古老技法。",
          "answer": "mosaic glass",
          "wordClass": "名词短语（技法名称，由名词 mosaic 修饰名词 glass；位于介词 like 之后，与后面的 thread-glass decoration 并列作 used 的宾语；共两个词，符合 NO MORE THAN TWO WORDS）",
          "locating": {
            "paragraph": "J",
            "quote": "much of the world-famous Venetian glass art from the early 15th century was based on the revival of such methods as thread-glass decoration or mosaic glass"
          },
          "synonyms": [
            "笔记小标题 “Later developments” 与题干 “from the 15th century” 对应原文的 “from the early 15th century”，锁定第 J 段",
            "题干中的 “Venetians” 同义替换为原文的 “Venetian glass art”",
            "题干中的 “used old techniques like” 同义替换为原文的 “based on the revival of such methods as”",
            "题干中的 “and thread-glass decoration” 对应原文的 “thread-glass decoration or mosaic glass”，原文用 or 连接，题干改写为 and"
          ],
          "locatingTip": "定位：专有名词 Venetians/Venetian 加上年代 “15th century” 两个锚点同时出现的位置只有第 J 段首句。确定答案技巧：题干已经免费给出一半的并列内容 “thread-glass decoration”，只要在原文中找出与之并列的另一个表达即可。原文是 such methods as thread-glass decoration or mosaic glass，两者由 or 并列，题干的 like … and … 是对同一并列结构的改写；题干把 mosaic glass 位置留空，说明答案是 thread-glass decoration 之外的那一项，即 mosaic glass。注意 “thread-glass” 是带连字符的合成词，不要写错；“mosaic glass” 两个词，符合词数限制。",
          "analysis": "题干说“从15世纪起，威尼斯人使用诸如______和细线玻璃装饰（thread-glass decoration）之类的古老技法”。原文第 J 段首句：Roman glass art continued to be exemplary, and much of the world-famous Venetian glass art from the early 15th century was based on the revival of such methods as thread-glass decoration or mosaic glass.（罗马玻璃艺术一直堪称典范，15世纪初举世闻名的威尼斯玻璃艺术，很大程度上建立在对细线玻璃装饰、马赛克玻璃等技法的复兴之上。）原文用 such methods as … or … 引出两种被复兴的古老技法，其中一项 thread-glass decoration 已在题干中给出，另一项 mosaic glass 即为答案。原文 “based on the revival of” 对应题干 “used old techniques”，语义一致。因此答案填 mosaic glass。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "acceptance of ______ as a subject for serious study in the 19th century led to improvements in glassmaking technology.",
          "translation": "19世纪，______作为一门严肃研究科目被接受，从而带来了玻璃制造技术的改进。",
          "answer": "chemistry",
          "wordClass": "名词（不可数，学科名称；位于介词 of 之后作其宾语，说明被当作严肃研究对象而接受的学科；单数，不加冠词）",
          "locating": {
            "paragraph": "J",
            "quote": "Until chemistry became an established scientific discipline in the second quarter of that century, glassmaking technology underwent only minor improvements."
          },
          "synonyms": [
            "题干中的 “in the 19th century” 对应原文的 “in the second quarter of that century”（该世纪即上文提到的19世纪）",
            "题干中的 “acceptance … as a subject for serious study” 同义替换为原文的 “became an established scientific discipline”",
            "题干中的 “led to improvements in glassmaking technology” 与原文的 “glassmaking technology underwent only minor improvements” 形成时间上的因果对应（化学成为学科之后，玻璃技术才得以改进）"
          ],
          "locatingTip": "定位：题干给出两个抓手——年代 “19th century” 与专有名词 “glassmaking technology”。第 J 段同时出现 European glass art even up to the early 19th century、Until chemistry became an established scientific discipline in the second quarter of that century 以及 glassmaking technology underwent only minor improvements，三处均落在同一句群，可精确定位。确定答案技巧：空格前是介词 of，后面接 as a subject for serious study，所填必须是名词（学科名）。原文对应表达为 chemistry became an established scientific discipline（化学成为一门确立的科学学科），an established scientific discipline 正对应 “as a subject for serious study”，因此答案是 chemistry。注意学科名 chemistry 不是专有名词，按规范小写书写。",
          "analysis": "题干说“19世纪，______被作为一门严肃研究的科目而接受，从而带来了玻璃制造技术的改进”。原文第 J 段：In fact, most methods of glassmaking and glass-decoration changed very little in the centuries following the Roman Empire. This is true of the development of European glass art, even up to the early 19th century. Until chemistry became an established scientific discipline in the second quarter of that century, glassmaking technology underwent only minor improvements.（事实上，罗马帝国之后的数百年里，玻璃制造与装饰的方法几乎没什么变化；欧洲玻璃艺术的发展也是如此，直到19世纪初。直到该世纪第二个二十五年化学成为一门确立的科学学科之前，玻璃技术只经历过很小的改进。）原文的 “became an established scientific discipline” 与题干的 “acceptance … as a subject for serious study” 同义；时间上原文用 “in the second quarter of that century” 指19世纪第二个二十五年，对应题干的 in the 19th century；原文用 Until…only minor improvements 的句式说明：化学成为独立学科之后，玻璃技术才获得实质改进，与题干 “led to improvements in glassmaking technology” 因果一致。因此答案填 chemistry。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "some methods dating back to the Roman Empire continue to be a ______ for today's glassmakers",
          "translation": "一些可追溯到罗马帝国时期的方法，对今天的玻璃工匠来说仍然是一个______。",
          "answer": "puzzle",
          "wordClass": "名词（可数名词单数，抽象名词；位于不定冠词 a 之后，作不定式 to be 的表语，说明这些方法对今天的玻璃工匠而言仍是个难题）",
          "locating": {
            "paragraph": "J",
            "quote": "several of the techniques used in the Roman Empire remain a puzzle that modern glass technicians cannot resolve."
          },
          "synonyms": [
            "题干中的 “some methods” 同义替换为原文的 “several of the techniques”",
            "题干中的 “dating back to the Roman Empire” 同义替换为原文的 “used in the Roman Empire”",
            "题干中的 “today's glassmakers” 同义替换为原文的 “modern glass technicians”",
            "题干中的 “continue to be a ______” 同义替换为原文的 “remain a puzzle”"
          ],
          "locatingTip": "定位：年代词 “Roman Empire” 与人物词 “glassmakers/technicians” 在同一句出现的只有第 J 段最后一句。确定答案技巧：题干 “continue to be a ______ for today's glassmakers” 与原文 “remain a puzzle that modern glass technicians cannot resolve” 逐词对应——continue to be 对应 remain，today's glassmakers 对应 modern glass technicians，因此空格所填必须是能与冠词 a 搭配的单数名词，原文中即为 puzzle。注意不要填 resolve 或 technicians 之类的干扰成分；puzzle 为抽象名词，按规范小写。",
          "analysis": "题干说“一些可追溯到罗马帝国时期的方法，对今天的玻璃工匠而言仍然是一个______”。原文第 J 段末句：Even now, however, several of the techniques used in the Roman Empire remain a puzzle that modern glass technicians cannot resolve.（然而即便在现在，罗马帝国时期使用过的若干技术，仍然是现代玻璃技术人员无法解开的谜题。）四个关键成分一一对应：several of the techniques 对应 some methods；used in the Roman Empire 对应 dating back to the Roman Empire；modern glass technicians 对应 today's glassmakers；remain a … 对应 continue to be a …。原文中紧跟在冠词 a 之后的名词是 puzzle，与题干空格前冠词 a 完全一致，因此答案填 puzzle，全小写。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
