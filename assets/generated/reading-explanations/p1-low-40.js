(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-40", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-40",
  "meta": {
    "examId": "p1-low-40",
    "title": "Dyes and fabric dyeing 染料的历史",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–8 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 8
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "Ochre was used in paintings before it was used in fabric dyes.",
          "translation": "赭石（ochre）先被用于绘画，之后才被用于染布料。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Scientists have been able to date the black, white, yellow and reddish pigments made from ochre, used in cave paintings, to over 15,000 BCE. With the development of fixed settlements and agriculture, around 7,000 to 2,000 BCE, people began to produce fabrics, and used natural substances such as ochre to color them."
          },
          "synonyms": [
            "“Ochre” 与原文的 “ochre” 原词复现，指同一种含氧化铁的黄褐色天然土",
            "“used in paintings” 同义替换为原文的 “used in cave paintings”（用于洞窟壁画），题干把具体场景概括为一般的绘画",
            "“before it was used in fabric dyes” 对应原文两处年代所体现的先后关系：壁画用赭石被定年为 “over 15,000 BCE”，而用赭石给布料上色始于 “around 7,000 to 2,000 BCE”",
            "“fabric dyes” 同义替换为原文的 “used natural substances such as ochre to color them”，其中 them 回指前文的 fabrics"
          ],
          "locatingTip": "定位：题干关键词是 ochre（该词在全文只出现在第 1 段）以及表示先后关系的 before。回原文扫读 ochre，第 1 段第 2 至第 5 句连续讲赭石的用途与年代，可一步锁定。确定答案技巧：本题考“先后顺序”，判分点不在“有没有用”，而在两件事发生的时间谁更早。原文先把 “pigments made from ochre, used in cave paintings” 定年到 “over 15,000 BCE”，随后才说 “around 7,000 to 2,000 BCE, people began to produce fabrics, and used natural substances such as ochre to color them”，一个是公元前 15000 年以前，一个是公元前 7000 至 2000 年，壁画用赭石明显早于染布，顺序与题干一致，因此判 TRUE。",
          "analysis": "第 1 段以“人类开始动手创造时也开始了给生活上色”开篇，随后按用途与时间依次交代赭石：先用于 “stain animal hides, decorate shells and feathers, and paint on the walls of caves”（染兽皮、装饰贝壳与羽毛、在洞窟壁上作画），紧接着给出科学测年 “Scientists have been able to date the black, white, yellow and reddish pigments made from ochre, used in cave paintings, to over 15,000 BCE.”（用赭石制成的黑、白、黄、红色颜料被用于洞窟壁画，其年代可追溯到公元前 15000 年以前）。段落最后一句才转入布料：“With the development of fixed settlements and agriculture, around 7,000 to 2,000 BCE, people began to produce fabrics, and used natural substances such as ochre to color them.”（随着定居与农业的发展，约公元前 7000 至 2000 年，人们开始生产布料，并使用赭石等天然物质给布料上色）。题干把这两条时间线压缩成一个先后关系：“Ochre was used in paintings before it was used in fabric dyes.”，其中 before 恰好对应 15,000 BCE 早于 7,000 至 2,000 BCE 这一事实，方向完全一致，故答案为 TRUE。做这类顺序题时，必须把两个时间点都在原文中找出来核对，而不是只看到“两种用途都被提到”就下结论。",
          "traps": [
            "为什么不是 FALSE：原文的年份区间直接支持题干的顺序——壁画用赭石 “to over 15,000 BCE”，而给布料上色在 “around 7,000 to 2,000 BCE”，前者远早于后者，原文没有任何相反信息，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文两处用途与两处年代都写得很明确（第 1 段第 3 至第 5 句），先后关系可以由数字直接推出，属于已交代的信息，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Natural dyes that need a mordant are rare.",
          "translation": "需要媒染剂的天然染料很少见。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Most natural dyes are adjective dyes, and require the application of a mordant solution to the fibers at some point in the dyeing process."
          },
          "synonyms": [
            "“Natural dyes that need a mordant” 同义替换为原文的 “adjective dyes”，原文紧接着解释 “Adjective dyes require a mordant (usually a metal salt)”",
            "“rare” 与原文的 “Most natural dyes are adjective dyes” 相互冲突：Most 表示“大多数、占多数”，rare 表示“稀少”，两者在数量上是反义关系",
            "“mordant” 原词复现，原文解释它是起固色作用、防止颜色被洗掉或被阳光漂白的物质（通常为金属盐）"
          ],
          "locatingTip": "定位：题干核心名词 mordant（媒染剂）在全文只出现在第 2 段，该段专门讲天然染料的两大分类，扫到 mordant 即可停下来精读整段。确定答案技巧：判断题里出现 rare、few、only、most、all 这类数量词，永远是判分的敏感点。原文说 “Most natural dyes are adjective dyes”（大多数天然染料都是需要媒染剂的间接染料），Most 与题干 rare（稀少）在数量方向上正好相反，属于直接冲突，因此判 FALSE。",
          "analysis": "第 2 段整段都在给天然染料分类：先分为 substantive（直接染料）与 adjective（需要媒染剂的间接染料）两类，再解释 “Adjective dyes require a mordant (usually a metal salt), which acts as a fixative and prevents the color from washing out or being bleached by sunlight.”（间接染料需要一种媒染剂，通常是金属盐，它起固色作用，防止颜色被洗掉或被阳光漂白）。紧接着的结论句是本题落点：“Most natural dyes are adjective dyes, and require the application of a mordant solution to the fibers at some point in the dyeing process.”（大多数天然染料都属于间接染料，在染色过程的某个环节都需要把媒染剂溶液施用到纤维上）。题干把“大多数（Most）”改写成“稀少（rare）”，数量关系被彻底反转：原文描述的是普遍现象，题干描述的是罕见现象，二者对立，因此答案是 FALSE。补充说明：Most 与 rare 的差别是雅思判断题最常见的陷阱之一，答案常常就藏在 most、majority、few、rare、only 这类词上。",
          "traps": [
            "为什么不是 TRUE：原文用 “Most natural dyes…”（大多数）说明需要媒染剂的天然染料是主流而非例外，与题干 rare（稀少）意思相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅提到了媒染剂，还明确交代了比例（Most natural dyes are adjective dyes），信息已经给出且与题干冲突，因此不是信息缺失，而是 FALSE。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "In medieval times people sometimes wore fabric made of undyed wool.",
          "translation": "在中世纪，人们有时会穿未经染色的羊毛织物。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "It was a common medieval fabric worn in both dyed and natural colors and was processed by both professional manufacturers and by people in their own homes."
          },
          "synonyms": [
            "“In medieval times” 同义替换为原文的 “a common medieval fabric”，形容词 medieval 原词复现",
            "“undyed wool” 对应原文的 “natural colors”，即未经染色、保持羊毛本色的状态",
            "“sometimes wore” 同义替换为原文的 “in both dyed and natural colors”：既有染色的也有本色的，说明“有时”穿未染色的",
            "“fabric made of wool” 对应原文的 “It was a common medieval fabric”，其中 It 回指上一句的 Wool fabric"
          ],
          "locatingTip": "定位：题干关键词 wool 与 medieval，第 3 段开头即说 “Historically, three natural fibers were used in making fabrics: wool, silk and cotton.”，紧接着第 2 至第 3 句专讲羊毛，可按首句的顺序直接落到羊毛那两句。确定答案技巧：题干问的是中世纪人们是否穿过未染色的羊毛织物。原文 “It was a common medieval fabric worn in both dyed and natural colors” 中的 natural colors 就是“未经染色、保持羊毛本来的颜色”，both … and … 说明染色与未染色两种都在穿，与题干的 sometimes（有时）一致，因此判 TRUE。不要因为原文没有出现 undyed 一词就判 NOT GIVEN，natural colors 就是它的同义表达。",
          "analysis": "第 3 段按 wool、silk、cotton 三种纤维依次展开。首句总起：“Historically, three natural fibers were used in making fabrics: wool, silk and cotton.”（历史上用于制布的有三种天然纤维：羊毛、蚕丝和棉花）。第 2 句给出羊毛的年代证据 “Wool fabric remains have been found in Europe dating back to 2,000 BCE.”，第 3 句是本题定位句：“It was a common medieval fabric worn in both dyed and natural colors and was processed by both professional manufacturers and by people in their own homes.”（它是中世纪常见的织物，既有染色的也有本色的，既由专业作坊加工，也由家庭自己加工）。句中 It 回指前一句的 Wool fabric，natural colors 指羊毛未经染色时的天然本色，both dyed and natural colors 明确表示染色与不染色两种织物都在使用，因此“中世纪人们有时穿未染色羊毛织物”与原文相符，答案为 TRUE。做题提示：雅思常用 natural colors、its natural state、undyed 等不同说法表达同一个意思，看到 both A and B 结构就要意识到它同时肯定了两种情况都存在。",
          "traps": [
            "为什么不是 FALSE：原文说羊毛织物 “worn in both dyed and natural colors”，两种颜色都在穿，从未否认未染色织物的存在，选 FALSE 没有依据。",
            "为什么不是 NOT GIVEN：原文用 natural colors 明确给出了“本色、未染色”这一信息，只是换了说法，并非没有提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Silk has always been more expensive than cotton and wool.",
          "translation": "丝绸一直比棉花和羊毛更昂贵。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "These silk production centers also became centers of dye technology, as most silk was dyed and required the highest quality dyes available."
          },
          "synonyms": [
            "“Silk” 在原文中原词复现（第 3 段第 4 至第 5 句），指同一种纤维",
            "“more expensive than cotton and wool” 在原文中没有任何对应：原文只说丝绸需要 “the highest quality dyes available”（最好的染料），没有与棉、毛作价格比较",
            "“has always been” 这一绝对化的时间限定在原文中没有支撑，原文只涉及 14 至 16 世纪的丝绸生产中心，以及棉花装船前已染色等事实",
            "“was considered a luxury fabric” 是原文对 Cotton 的评价，说明棉花同样贵重，反而不支持“丝绸一直更贵”"
          ],
          "locatingTip": "定位：用大写名词 Silk 定位到第 3 段讲丝绸的两句（第 4 至第 5 句），同行还出现 France、Spain、Italy 等大写地名，容易确认位置。确定答案技巧：题干是比较结构（more expensive than）加绝对化时间（has always been），这两类词都是 NOT GIVEN 的高发点。回原文核对会发现，原文关于丝绸只说它从中国进口、14 至 16 世纪在法国、西班牙、意大利建立生产中心，且 “most silk was dyed and required the highest quality dyes available”，全程没有出现价格、费用或贵重程度的比较；价格高低属于原文未交代的信息，因此判 NOT GIVEN。切忌把“需要质量最好的染料”推演成“丝绸比棉毛都贵”。",
          "analysis": "第 3 段后半部分集中讲丝绸：“Silk was imported from China to Europe, and in the 14th to 16th centuries major silk manufacturing centers were set up in France, Spain and Italy. These silk production centers also became centers of dye technology, as most silk was dyed and required the highest quality dyes available.”（丝绸从中国输入欧洲，14 至 16 世纪在法国、西班牙和意大利建立了大型丝绸制造中心。这些丝绸生产中心同时也成为染色技术中心，因为大多数丝绸都要染色，且需要能获得的最优质染料）。同段讲棉花时则说 “Cotton was considered a luxury fabric in Europe, as it was imported all the way from India and was dyed before it was shipped.”（棉花在欧洲被视为奢侈品，因为它从印度远道运来，而且在装船前就已染色）。可见原文对丝绸强调的是“需要最好的染料”，对棉花强调的是“奢侈品”，两者都贵重，并没有给出谁更贵的比较，更没有涉及羊毛的价格。题干用 more expensive than 作比较、用 has always been 作时间上的绝对断言，这两层信息在原文中都不存在，属于无中生有的比较与绝对化，按规则判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文没有出现任何价格比较；丝绸需要最好的染料、棉花被视为奢侈品，这两点都无法推出“丝绸始终比棉花和羊毛都贵”，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文有相反信息，即原文得说丝绸不比棉毛贵或更便宜，而原文对价格完全没有作比较，仅仅是没说，因此也不能选 FALSE。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Cotton imported from India was dyed upon arrival in Europe.",
          "translation": "从印度进口的棉花在运抵欧洲后才染色。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Cotton was considered a luxury fabric in Europe, as it was imported all the way from India and was dyed before it was shipped."
          },
          "synonyms": [
            "“Cotton imported from India” 同义替换为原文的 “Cotton … was imported all the way from India”",
            "“upon arrival in Europe” 与原文的 “was dyed before it was shipped”（在装船之前就已染色）相互冲突：一个是到岸后染色，一个是出运前染色",
            "“was dyed” 在原文中原词复现，但染色时间状语被题干改动，成为本题的判分点"
          ],
          "locatingTip": "定位：大写词 Cotton 与 India 都集中在第 3 段最后两句，扫读 Cotton 与 India 即可锁定。确定答案技巧：本题的判分点是一个时间关系，即在装运前染色还是抵达后染色。原文写 “it was imported all the way from India and was dyed before it was shipped”，即棉花在印度装船之前就已经染好，染色发生在产地；题干却改成“运抵欧洲后才染色（upon arrival in Europe）”，先后顺序被倒置，属于事实矛盾，故判 FALSE。做时间状语题时，务必把原文的 after、before、upon、prior to 一类连接词圈出来，本句的 before 与题干的 upon 恰好相反。",
          "analysis": "第 3 段末两句讲棉花：“Cotton was considered a luxury fabric in Europe, as it was imported all the way from India and was dyed before it was shipped. Cotton was also valued because of the brightness and colorfastness of the dyes used to color it.”（棉花在欧洲被视为奢侈品，因为它从印度远道运来，而且在装船之前就已染色。棉花受重视还因为其所用染料色泽鲜亮、色牢度好）。原文的 “was dyed before it was shipped” 明确表示染色发生在装运之前，也就是在印度（产地）完成，运到欧洲时已经是染好的成品；而题干的 “was dyed upon arrival in Europe” 把染色推到抵达欧洲之后，染色时间与地点都被倒置，与原文构成直接矛盾，因此答案是 FALSE。判分的关键在于看清 before it was shipped 这一时间状语，题干用 upon arrival 替换它，属于典型的时间关系偷换。",
          "traps": [
            "为什么不是 TRUE：原文明确指出棉花是 “dyed before it was shipped”（装船前染色），即到达欧洲之前就已染色，与题干“到欧洲后才染”相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对染色时间有明确交代（before it was shipped），并且这一信息与题干相冲突，属于有信息且相反，不是信息缺失。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Perkin became more famous than his teacher, von Hofmann.",
          "translation": "珀金（Perkin）比他的老师冯·霍夫曼（von Hofmann）更出名。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "W. H. Perkin, a student of celebrated European scientist Wilhelm von Hofmann, accidentally discovered the first synthetic dye, later called mauve."
          },
          "synonyms": [
            "“Perkin” 与 “von Hofmann” 在原文中原词复现：“W. H. Perkin, a student of celebrated European scientist Wilhelm von Hofmann”",
            "“his teacher” 同义替换为原文的 “a student of celebrated European scientist Wilhelm von Hofmann”，师生关系由 student of 体现",
            "“became more famous than” 在原文中没有任何对应：原文只称 von Hofmann 是 “celebrated European scientist”（著名的欧洲科学家），并说 Perkin 发现合成染料后开办工厂、继续开发新颜色，却没有对两人的名气作任何比较"
          ],
          "locatingTip": "定位：两个人名 W. H. Perkin 与 Wilhelm von Hofmann 是天然的大写定位词，同时出现在第 6 段第 2 句，可一步锁定。确定答案技巧：题干是“A 比 B 更有名”的比较题，回到原文只找到师生关系的描述与各自的成就，找不到任何关于知名度高低的表述。原文对 von Hofmann 用了 celebrated（著名的）这个修饰词，对 Perkin 讲的是他的发现与办厂，但这两条信息都不能构成“谁更有名”的比较，属于原文未交代，故判 NOT GIVEN。注意不要由“学生发现了第一支合成染料”推导出“学生比老师更有名”，这属于超出原文的推断。",
          "analysis": "第 6 段讲 19 世纪中叶化学兴趣高涨带来染整技术的若干革新，第 2 句是本题定位句：“W. H. Perkin, a student of celebrated European scientist Wilhelm von Hofmann, accidentally discovered the first synthetic dye, later called mauve.”（W. H. Perkin 是欧洲著名科学家 Wilhelm von Hofmann 的学生，他意外发现了第一种合成染料，后来被称为苯胺紫）。句中对两人的交代只有两层：一是师生关系（a student of），二是 von Hofmann 本人的身份与声誉（celebrated European scientist）。接下来两句讲的是 Perkin 发现染料带来的后续影响：“The color was so popular that Perkin was able to open a factory of his own and went on to develop more synthetic dye colors.”（这种颜色极受欢迎，Perkin 因此开办了自己的工厂，并继续开发更多的合成染料颜色）。通篇没有出现 famous、renowned、well-known 之类的评价用于比较两人，也没有任何表示“比……更……”的比较结构。题干的核心 “Perkin became more famous than his teacher” 在原文中无从落实，既不能说对，也不能说错，只能判 NOT GIVEN。做题提示：当题干使用比较级而原文只是并列陈述两个对象时，比较关系本身往往就是“未给出”的那部分信息。",
          "traps": [
            "为什么不是 TRUE：原文只交代师生关系，并称 von Hofmann 是著名的欧洲科学家，对 Perkin 只说其发现与办厂经历，没有任何“谁比谁更有名”的信息，不能选 TRUE。",
            "为什么不是 FALSE：原文没有否认 Perkin 成名，也没有说 von Hofmann 比 Perkin 更有名，缺少相反信息，不能判 FALSE；这类“未作比较”的情况只能是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Very few synthetic dyes were produced in Europe in the second half of the 19th century.",
          "translation": "在 19 世纪下半叶，欧洲生产的合成染料非常少。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Synthetic dye production grew in Europe, and hardly a year passed until the end of the century without a new synthetic dye being patented."
          },
          "synonyms": [
            "“in the second half of the 19th century” 同义替换为原文的 “until the end of the century”，其时间参照点是同段开头交代的 “in the mid-19th century”（19 世纪中叶）",
            "“Very few” 与原文的 “hardly a year passed … without a new synthetic dye being patented” 相互冲突：原文说的是几乎每年都有新染料获得专利，数量极多",
            "“synthetic dyes were produced in Europe” 同义替换为原文的 “Synthetic dye production grew in Europe”"
          ],
          "locatingTip": "定位：题干关键词 synthetic dyes 与 Europe 集中在第 6 段，尤其段末句同时出现 “Synthetic dye production grew in Europe” 与 “the end of the century”，扫读即得。确定答案技巧：本题考数量多寡，判分点是句中的双重否定 “hardly a year passed until the end of the century without a new synthetic dye being patented”，其字面意思是“到世纪末为止，几乎没有哪一年是没有新合成染料获得专利的”，换句话说就是几乎每年都有一项新专利，产量与种类都很多；题干却说 “Very few”（非常少），与原文正好相反，所以选 FALSE。",
          "analysis": "第 6 段在讲完 Perkin 的发现后，末两句交代合成染料在欧洲的扩散：“The color was so popular that Perkin was able to open a factory of his own and went on to develop more synthetic dye colors. Synthetic dye production grew in Europe, and hardly a year passed until the end of the century without a new synthetic dye being patented.”（这种颜色极受欢迎，Perkin 得以开设自己的工厂并继续开发更多合成染料颜色。合成染料生产在欧洲不断增长，直到世纪末几乎每年都有新的合成染料获得专利）。本题定位句的后半部分是典型的双重否定结构 hardly … without …，语义为“几乎没有一年不出现一项新专利”，即年年都有新染料问世，说明 19 世纪下半叶欧洲合成染料的产量与品种都在快速增长。题干的 Very few 表示“极少”，与原文“蓬勃发展、年年上新”完全对立，因此答案是 FALSE。做题时遇到 hardly、barely、seldom 与 without 搭配的双重否定，务必先把它翻译成肯定的意思，再与题干的量化表达比较。",
          "traps": [
            "为什么不是 TRUE：原文说 “Synthetic dye production grew in Europe”，并用 hardly … without 强调几乎每年都有新染料获得专利，说明数量很多，与 Very few 相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对 19 世纪下半叶合成染料的增长与专利频率有明确描述，信息已经给出且与题干冲突，因此不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Today the commercial production of natural dyes is limited to a small number of isolated communities.",
          "translation": "如今，天然染料的商业化生产仅局限于少数与世隔绝的社区。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "now the use of natural dyes on a commercial scale only exists in a few remote areas where people have either little access to synthetic dyes or a vested interest in retaining their ancient dyeing customs."
          },
          "synonyms": [
            "“Today” 同义替换为原文的 “now”",
            "“the commercial production of natural dyes” 同义替换为原文的 “the use of natural dyes on a commercial scale”（以商业规模使用天然染料）",
            "“limited to a small number of” 同义替换为原文的 “only exists in a few …”，其中 only 与 a few 共同表达“仅限少数”",
            "“isolated communities” 同义替换为原文的 “remote areas”（偏远地区），题干用 communities 指在这些地区生活的人群"
          ],
          "locatingTip": "定位：末段是全篇结尾，题干关键词 commercial 在文中只出现于第 7 段的 “on a commercial scale”，扫读 commercial 即可一步锁定该段唯一的长句。确定答案技巧：本题考“现状与范围”，把题干与原文逐词对应即可：Today 对应 now，commercial production 对应 use … on a commercial scale，limited to a small number of 对应 only exists in a few，isolated communities 对应 remote areas。原文还补充了原因 “where people have either little access to synthetic dyes or a vested interest in retaining their ancient dyeing customs”（那里的人们或难以获得合成染料，或有保留古老染色习俗的既得利益），进一步说明范围之小，与题干意思一致，故判 TRUE。",
          "analysis": "全文末段是本题的落点：“Eventually, the old natural dyes lost popularity in favor of the newer synthetic ones, and now the use of natural dyes on a commercial scale only exists in a few remote areas where people have either little access to synthetic dyes or a vested interest in retaining their ancient dyeing customs.”（最终，古老的天然染料不再受青睐，让位于较新的合成染料；如今，以商业规模使用天然染料只存在于少数偏远地区，那里的人们要么很难获得合成染料，要么有意保留其古老的染色习俗）。题干把这句话压缩成 “Today the commercial production of natural dyes is limited to a small number of isolated communities.”，其中 Today 对应 now，commercial production 对应 use … on a commercial scale，limited to a small number of 对应 only exists in a few，isolated communities 对应 remote areas，四处改写一一对应，语义完全一致，因此答案是 TRUE。做题提示：remote areas（偏远地区）与 isolated communities（与世隔绝的社区）在雅思中属于常见的同义替换组合，不要因为用词不同就误判 NOT GIVEN。",
          "traps": [
            "为什么不是 FALSE：原文 “only exists in a few remote areas” 与题干 “limited to a small number of isolated communities” 意思相同，句中给出的两个原因（难以获得合成染料、有意保留传统习俗）只是解释范围为何如此之小，没有任何与题干相悖的信息。",
            "为什么不是 NOT GIVEN：原文对天然染料的现状、规模与分布都写得很明确（only exists in a few remote areas），信息完整，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Tyrian purple: mucus from 9 ________ found in the Mediterranean",
          "translation": "提尔紫：来自地中海、其黏液可用于制作提尔紫的 ________。",
          "answer": "shellfish",
          "wordClass": "名词（单复数同形，指贝类这一生物类别；位于介词 from 之后作宾语，按原文形式照抄 shellfish，不加 -s、不加冠词）",
          "locating": {
            "paragraph": "4",
            "quote": "the mucus found in certain species of shellfish produced the deep, rich Tyrian purple"
          },
          "synonyms": [
            "“mucus from …” 同义替换为原文的 “the mucus found in certain species of shellfish”，原文用 found in 表示来源，题干改写为 from",
            "“found in the Mediterranean” 同义替换为原文的 “originated in the Mediterranean 2,000 years ago”",
            "“Tyrian purple” 原词复现，原文写作 “the deep, rich Tyrian purple”"
          ],
          "locatingTip": "定位：笔记这一行的名称栏是专有名词 Tyrian purple，回到原文搜索 Tyrian purple，该词只出现在第 4 段；同一行还有 Mediterranean，也出现在第 4 段，两条线索互相印证。确定答案技巧：题干要填的是“黏液来自哪种生物”，原文结构为 the mucus found in certain species of shellfish produced the deep, rich Tyrian purple，主语中心词是 mucus，来源由介词短语 in certain species of shellfish 表示，空格位于 from 之后，因此填 shellfish。注意答案是 ONE WORD ONLY，不能写成 shellfish species 或 sea creatures；同时 shellfish 单复数同形，按原文照抄即可，不要改写成 shellfishes。",
          "analysis": "第 4 段先总述名贵染料，再逐一举例，定位句为：“The color known as Tyrian purple, for example, originated in the Mediterranean 2,000 years ago, and cochineal is the name given to the red dye from Latin America. Both of these colors came from animals; the mucus found in certain species of shellfish produced the deep, rich Tyrian purple and cochineal was extracted from insects.”（例如，被称为提尔紫的颜色两千年前起源于地中海；胭脂虫红则是对来自拉丁美洲的红色染料的称呼。这两种颜色都来自动物：某些贝类体内发现的黏液制成了浓郁深沉的提尔紫，而胭脂虫红是从昆虫中提取的）。笔记这一行写 “Tyrian purple / mucus from 9 [shellfish] found in the Mediterranean”，正好对应原文的 “the mucus found in certain species of shellfish”，其中 shellfish 就是被填入的名词；题干把 found in 改写成 from，把来源生物放在空格位置，其余信息（地中海的地缘、提尔紫的名称）都与原文一致。从词性看，shellfish 是可数名词且单复数同形，原文用 certain species of 修饰，作答时保持原文形式 shellfish 即可。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "cochineal (a red dye) made from 10 ________ found in Latin America",
          "translation": "胭脂虫红（一种红色染料）由来自拉丁美洲的 ________ 制成。",
          "answer": "insects",
          "wordClass": "名词（复数，指一类动物；位于介词 from 之后作宾语，原文用复数 insects，故填复数形式）",
          "locating": {
            "paragraph": "4",
            "quote": "Both of these colors came from animals; the mucus found in certain species of shellfish produced the deep, rich Tyrian purple and cochineal was extracted from insects."
          },
          "synonyms": [
            "“made from” 同义替换为原文的 “cochineal was extracted from”（从……中提取）",
            "“found in Latin America” 同义替换为原文的 “the red dye from Latin America”",
            "“cochineal (a red dye)” 对应原文的 “cochineal is the name given to the red dye from Latin America”"
          ],
          "locatingTip": "定位：本行名称栏是 cochineal，原文只在第 4 段出现该词，且与 Latin America 同段出现，可直接锁定。确定答案技巧：题干问“胭脂虫红由什么制成”，原文对应句是 cochineal was extracted from insects，extracted from 就是 made from 的同义替换，介词 from 后面的 insects 即答案。注意不要把上一行的 shellfish 误填进来——shellfish 对应的是提尔紫；两种染料虽然都来自动物（原文说 Both of these colors came from animals），但具体来源物不同，本题必须填 insects。",
          "analysis": "第 4 段定位句为：“cochineal is the name given to the red dye from Latin America. Both of these colors came from animals; the mucus found in certain species of shellfish produced the deep, rich Tyrian purple and cochineal was extracted from insects.”（胭脂虫红是对来自拉丁美洲的红色染料的称呼。这两种颜色都来自动物：某些贝类体内发现的黏液制成了提尔紫，而胭脂虫红是从昆虫中提取的）。笔记第二行写 “cochineal (a red dye) / made from 10 [insects] found in Latin America”，其中 made from 对应原文的 extracted from，found in Latin America 对应原文的 the red dye from Latin America，两条线索彼此印证。答案 insects 为复数形式，与原文一致；若写成 insect 虽为同一个单词，却改变了原文的形态，填空题应严格照抄原文的单词形式，故写 insects。此外，本行与上一行（Tyrian purple）同在第 4 段，来源都属于动物界，做题时必须分清：提尔紫来自贝类（shellfish），胭脂虫红来自昆虫（insects）。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "17th-century Europe / dyes made by country people: 11 ________ had two uses (jam / blue dye)",
          "translation": "17 世纪的欧洲，乡下人自制的染料：________ 有两种用途（做果酱；作蓝色染料）。",
          "answer": "blackberries",
          "wordClass": "名词（复数，指一种野果；在笔记中作主语，原文用复数 blackberries，故填复数形式）",
          "locating": {
            "paragraph": "5",
            "quote": "People who picked blackberries to make jam soon recognized this wild fruit as a source for a blue dye."
          },
          "synonyms": [
            "“had two uses” 对应原文一句中并列出现的两种用途：“picked blackberries to make jam”（做果酱）与 “a source for a blue dye”（作蓝色染料来源）",
            "“dyes made by country people” 同义替换为原文的 “Home dyers used any plants they could find that would give a good color”（家庭染匠用能找到的任何能染出好颜色的植物）",
            "“17th-century Europe” 对应原文的 “by the 17th century a worldwide shipping and trading network was in place”"
          ],
          "locatingTip": "定位：笔记小标题是 17th-century Europe 与 dyes made by country people，回原文找 17th century，落在第 5 段；再在第 5 段后半部分找与 jam、blue dye 同时相关的句子。确定答案技巧：笔记给出两个用途作为线索，即 jam 与 blue dye，原文对应句为 “People who picked blackberries to make jam soon recognized this wild fruit as a source for a blue dye.”，其中 make jam 对应 jam，a source for a blue dye 对应 blue dye，两种用途共同指向的物品就是 blackberries，因此空格填 blackberries。注意原文用的是复数形式，作答时保持复数，不要写成 blackberry。",
          "analysis": "第 5 段讲 17 世纪染料贸易网络形成后，上流阶层能买到各种进口染料，而下层乡民的服装颜色受限（black, brown, grey and tan），随后详细列举乡民自制的颜色来源：“They had always used local plants as food, and many of these plants were also used as medicines and in some cases as sources of dyes. Home dyers used any plants they could find that would give a good color. People who picked blackberries to make jam soon recognized this wild fruit as a source for a blue dye.”（他们一直把当地植物当食物，许多植物也作药用，有些还用作染料来源。家庭染匠会使用任何能找到的、能染出好颜色的植物。采摘黑莓做果酱的人很快发现，这种野果还是蓝色染料的来源）。笔记这一行只用 “had two uses” 概括，下面用 jam 与 blue dye 两个小项展开，正好对应原文一句之内同时出现的两种用途（做果酱与作蓝色染料），两者共同的物品就是 blackberries。答案取原文复数形式 blackberries；原文称它为 this wild fruit（这种野果），也可作为确认依据。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "liquid from cleaning 12 ________ had two uses (making mead / yellow dye)",
          "translation": "清洗 ________ 所得的液体有两种用途（酿制蜂蜜酒；作黄色染料）。",
          "answer": "beehives",
          "wordClass": "名词（复数，指蜂箱；位于动名词 cleaning 之后作宾语，原文用复数 beehives，故填复数形式）",
          "locating": {
            "paragraph": "5",
            "quote": "Washing beehives in preparation for making mead (a popular drink containing honey) yielded a liquid that could be used as a yellow dye."
          },
          "synonyms": [
            "“liquid from cleaning …” 同义替换为原文的 “Washing beehives … yielded a liquid”，Washing 即 cleaning，yielded a liquid 即得到液体",
            "“making mead” 同义替换为原文的 “in preparation for making mead”",
            "“yellow dye” 同义替换为原文的 “a liquid that could be used as a yellow dye”，只是位置由宾语变成了用途说明"
          ],
          "locatingTip": "定位：笔记同一行另一处线索是 making mead，回第 5 段搜索 mead，该词在全文只出现一次，位于 “Washing beehives in preparation for making mead …” 一句。确定答案技巧：题干的结构是“清洗某物所得的液体”，原文的结构是 “Washing beehives … yielded a liquid”，Washing 与 cleaning 对应，yielded a liquid 与“得到液体”对应，因此被清洗的对象 beehives 就是答案。答案应为复数 beehives，与原文一致；同时不要与上一行的 blackberries 混淆——那一行给的线索是 jam，这一行给的是 mead。",
          "analysis": "第 5 段在列举乡民可用的颜色来源时连续给出三个例子：“People who picked blackberries to make jam soon recognized this wild fruit as a source for a blue dye. Washing beehives in preparation for making mead (a popular drink containing honey) yielded a liquid that could be used as a yellow dye. The mosses which grow in many parts of Europe were used to produce green dye.”（采摘黑莓做果酱的人很快发现这种野果可作蓝色染料来源。为酿制蜂蜜酒而清洗蜂箱，会得到一种可用作黄色染料的液体。欧洲许多地方生长的苔藓被用来制成绿色染料）。本题的笔记行是 “liquid from cleaning 12 [beehives] had two uses / making mead / yellow dye”，与原文第二句逐一对应：Washing 改写成 cleaning，beehives 位于 cleaning 之后作宾语，yielded a liquid 改写成 liquid from…，in preparation for making mead 对应笔记的 making mead，could be used as a yellow dye 对应笔记的 yellow dye。注意这里的逻辑顺序：原文是先为酿酒做准备而清洗蜂箱，得到液体后才用作黄色染料；笔记把“做蜂蜜酒”和“作黄色染料”并列成两种用途，是对同一句信息的重新组织，并不改变事实。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "19th-century Europe: progress in study of 13 ________ led to synthetic dyes",
          "translation": "19 世纪的欧洲：对 ________ 研究上的进展促成了合成染料。",
          "answer": "chemistry",
          "wordClass": "名词（不可数，学科名称；位于介词 of 之后作宾语，按原文填 chemistry，不加冠词、不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "With the tremendous rise of interest in chemistry in the mid-19th century, several important innovations in dyeing came about."
          },
          "synonyms": [
            "“progress in study of …” 同义替换为原文的 “the tremendous rise of interest in …”，progress 与 study 对应 interest 和 rise",
            "“led to synthetic dyes” 同义替换为原文的 “several important innovations in dyeing came about”，其后 Perkin 发现第一种合成染料即为其标志性成果",
            "“19th-century Europe” 对应原文的 “in the mid-19th century”，并呼应同段 “Synthetic dye production grew in Europe”"
          ],
          "locatingTip": "定位：笔记小标题是 19th-century Europe 与 synthetic dyes，回原文找 19th century 与 synthetic，前者见第 6 段首句的 “in the mid-19th century”，后者在本段多处出现（“the first synthetic dye”、“Synthetic dye production”），可一步锁定。确定答案技巧：题干说“对某学科研究的进展促成了合成染料”，原文首句是 “With the tremendous rise of interest in chemistry in the mid-19th century, several important innovations in dyeing came about.”，其中 With 引导的原因状语 the tremendous rise of interest in chemistry 正对应题干的 progress in study of [13]，介词 of 后面要填的学科就是 chemistry。注意答案是学科名词 chemistry 一个词，不要写成 chemical（化学制品，词性与词义都不符），也不要写 chemical industry。",
          "analysis": "第 6 段首句给出 19 世纪染整技术革新的起因：“With the tremendous rise of interest in chemistry in the mid-19th century, several important innovations in dyeing came about.”（随着 19 世纪中叶人们对化学的兴趣急剧上升，染整领域出现了若干重要革新）。紧接着用 Perkin 的事例加以证明：“W. H. Perkin, a student of celebrated European scientist Wilhelm von Hofmann, accidentally discovered the first synthetic dye, later called mauve.”（Perkin 是著名欧洲科学家 von Hofmann 的学生，他意外发现了第一种合成染料，后来被称为苯胺紫）。笔记这一行写 “19th-century Europe / progress in study of 13 [chemistry] led to synthetic dyes”，其中 progress in study of 对应原文的 the tremendous rise of interest in，led to synthetic dyes 对应原文染料领域的诸多革新（其中最标志性的就是第一种合成染料的发现），因此空格所填的学科是 chemistry。词性上，chemistry 作不可数名词，位于介词 of 之后，不加冠词也不变复数，照原文形式填写即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
