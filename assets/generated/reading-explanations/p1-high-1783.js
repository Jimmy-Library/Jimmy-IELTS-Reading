(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1783", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1783",
  "meta": {
    "examId": "p1-high-1783",
    "title": "Thomas Young - The Last True know-it-all 托马斯·杨——最后的真通才",
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
          "stem": "‘The last man who knew everything’ has also been claimed to other people.",
          "translation": "“无所不知的最后一人”这一说法也被用来称呼其他人。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Young has competition, however: The phrase, which Robinson takes for his title, also serves as the subtitle of two other recent biographies"
          },
          "synonyms": [
            "“has also been claimed to other people” 同义替换为原文的 “also serves as the subtitle of two other recent biographies”：原文的 two other（另外两位）正对应题干的 other people（其他人）",
            "“The last man who knew everything” 与原文 “The phrase, which Robinson takes for his title” 指同一短语：罗宾逊把它直接用作书名，即题干引号中的那串说法",
            "“claimed”（被冠以、被归属）同义替换为原文的 “serves as the subtitle”（被用作副标题）"
          ],
          "locatingTip": "定位：题干引号内的固定短语 ‘The last man who knew everything’ 是全文独一无二的专有表达，只出现在第 1 段末尾，扫读时只要盯住引号词即可一步落位；同段出现的转折提示词 however 更是判分信号。确定答案技巧：判断题要盯住题干的结论性表述——“has also been claimed to other people”（这个称号也被别人用过）。回原文核对发现，作者先说罗宾逊拿这个短语当书名，紧接着说它同时还是另外两部传记的副标题（另外两位传主是 Joseph Leidy 和 Athanasius Kircher），还特意补了一句 “Young has competition”（杨有竞争者）。另外两人也共享这个称号，与题干的 “other people” 完全一致，属于明确同向的信息，因此判 TRUE。",
          "analysis": "第 1 段末尾是本题的落点。原文先写 “In an ambitious new biography, Andrew Robinson argues that Young is a good contender for the epitaph “the last man who knew everything.””（在这部雄心勃勃的新传记中，Andrew Robinson 认为杨有资格获得“无所不知的最后一人”这一墓志铭），紧接着一句就是定位句：“Young has competition, however: The phrase, which Robinson takes for his title, also serves as the subtitle of two other recent biographies: Leonard Warren’s 1998 life of paleontologist Joseph Leidy (1823-1891) and Paula Findlen’s 2004 book on Athanasius Kircher (1602-1680), another polymath.”。句中的 however 是阅读时的关键路标：它提示前面刚说杨“配得上”这个称号，后面马上要出现与直觉相反的信息——这个短语并非杨的专属，它还是另外两部近期传记的副标题。题干用被动式 “has also been claimed to other people”（也被用了在其他人身上）来概括这一事实，与原文的 two other recent biographies（另外两部近期传记）在数量与方向上完全吻合，因此答案是 TRUE。做本题时不要被 “another polymath” 结尾的描述分散注意力，判分依据只有两点：短语是否被重复使用，以及使用者是否为“其他人”。",
          "traps": [
            "为什么不是 FALSE：原文没有出现任何相反信息。定位句用 “also serves as the subtitle of two other recent biographies” 正面说明该短语还用在另外两位传主（Joseph Leidy、Athanasius Kircher）身上，作者还专门用 “Young has competition” 一句强调这一点，与题干陈述方向完全一致，没有可冲突之处，不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干的每个信息点原文都有交代——“the last man who knew everything” 是文中原词复现的短语，“other people” 由 “two other recent biographies” 以及两位具体人名支撑，“also been claimed” 对应 “serves as the subtitle”。信息完整且明确，不属于未提及，故不选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "All Young's articles were published in Encyclopedia Britannica.",
          "translation": "杨的所有文章都发表在《大英百科全书》上。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Between 1816 and 1825 he contributed his many and various entries to the Encyclopedia Britannica, and throughout his career, he authored numerous books, essays and papers."
          },
          "synonyms": [
            "“articles” 同义替换为原文的 “entries”（百科全书的条目、词条）以及 “books, essays and papers”",
            "“All … were published in Encyclopedia Britannica” 与原文的范围相冲突：原文一方面说他向《大英百科全书》供稿，另一方面说他 “throughout his career, he authored numerous books, essays and papers”，即作品还发表在别处",
            "原文的 “Between 1816 and 1825” 把向百科全书供稿限定为一段时间，而题干的 All（全部）是无范围的绝对表述"
          ],
          "locatingTip": "定位：题干核心词有专有名词 Encyclopedia Britannica 与绝对词 All。Britannica 在第 1 段和第 5 段都出现，第 1 段讲的是他供稿的篇数与种类，第 5 段则交代了他全部著作的分布，后者才是判分句。确定答案技巧：含 All（全部）、only（只有）、always（总是）这类绝对词的判断题，判分关键是看原文有没有把范围限定住。原文第 5 段末句用两个并列分句分工说明：1816 至 1825 年间他 “contributed his many and various entries to the Encyclopedia Britannica”，而 “throughout his career, he authored numerous books, essays and papers”（整个职业生涯中还写了许多书、随笔和论文）。也就是说，百科全书只是他写作的一部分，此外还有大量其他出版物，题干的 All 与原文的实际范围直接矛盾，因此判 FALSE。",
          "analysis": "第 5 段末句：“Between 1816 and 1825 he contributed his many and various entries to the Encyclopedia Britannica, and throughout his career, he authored numerous books, essays and papers.”（1816 至 1825 年间，他为《大英百科全书》撰写了大量各式条目；而纵观其整个职业生涯，他还著有许多书籍、随笔和论文）。这句用 and 把两类写作成果并列起来：一类是给百科全书的条目（entries），另一类是书籍、随笔和论文（books, essays and papers）。此外第 1 段也交代他给百科全书供稿 63 篇（其中 46 篇为传记条目），第 3 段还提到他的研究成果发表于 Britannica 的 Egypt 条目，这些都属于“部分”信息。题干却写成 “All Young’s articles were published in Encyclopedia Britannica”（他的所有文章都发表在《大英百科全书》上），把“一部分作品”扩张为“全部作品”，属于范围上的绝对化改写，与原文给出的其他出版物形成事实冲突，故判 FALSE。做题提示：雅思阅读中绝对化词（all、only、every）是 FALSE 的高发标志，只要原文出现“另外还有”一类的补充信息，就可以据此否定“全部”的说法。",
          "traps": [
            "为什么不是 TRUE：原文明确说除了百科全书的条目之外，他还 “authored numerous books, essays and papers”，即作品的发表渠道并不止《大英百科全书》一家；题干把范围写成 All，与原文的“部分加另有其他”直接冲突，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“文章在哪里发表”这一问题给出了十分具体的交代（既有百科全书的条目，又有书籍、随笔、论文），信息充分且与题干矛盾，属于已有相反信息，按规则判 FALSE 而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Like others, Young wasn't so brilliant when growing up.",
          "translation": "和许多人一样，杨在成长过程中并不那么聪颖出众。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "These are the landmark achievements of a man who was a child prodigy and who, unlike many remarkable children, did not disappear into oblivion as an adult."
          },
          "synonyms": [
            "“when growing up” 同义替换为原文的 “a child prodigy” 所涵盖的童年阶段，与 “as an adult” 形成时间对照",
            "“Like others” 与原文的 “unlike many remarkable children” 相反：原文说的是他与其他神童“不同”，题干说的是他与别人“相同”",
            "“wasn’t so brilliant”（不那么出众）与原文的 “was a child prodigy”（童年神童）相互冲突"
          ],
          "locatingTip": "定位：题干讲的是“成长时期的才华”，对应原文集中评价他童年表现的句子，落在第 3 段末句；句中 “a child prodigy” 与 “as an adult” 正好构成“成长中”与“成年后”的时间对照，是极佳的定位锚点。确定答案技巧：本题设了两个陷阱——Like others（与别人一样）和 wasn’t so brilliant（不那么聪明）。回原文核对：作者写他是 “a child prodigy”（童年神童），并且说他 “unlike many remarkable children, did not disappear into oblivion as an adult”（与许多杰出的孩子不同，他成年后并没有湮没无闻）。前半句直接否定“不那么出众”，后半句的 unlike 又否定“和别人一样”。两个改写点同时与原文相反，是典型的事实冲突，故判 FALSE。",
          "analysis": "第 3 段在讲完罗塞塔石碑与 Indo-European 这一术语之后，用末句收束全段：“These are the landmark achievements of a man who was a child prodigy and who, unlike many remarkable children, did not disappear into oblivion as an adult.”（这些成就都属于这样一个人：他是童年神童，而且与许多杰出的孩子不同，他成年后并没有湮没无闻）。句中关于成长阶段的信息有两层：其一，他是 a child prodigy，即从小就才华出众；其二，很多杰出儿童长大后会“disappear into oblivion”（归于沉寂），而他恰恰不是这类人。题干却把这两层都拧反了：用 “wasn’t so brilliant”（并不那么聪明）否定“神童”，用 “Like others”（和他人一样）否定 unlike。原文的对照结构是为了突出他不坠神童之名的罕见，属于事实陈述，与题干给出的相反判断形成直接冲突，因此答案是 FALSE。另外，第 4 段还补充他两岁起便博览群书、靠自主努力精通拉丁语、希腊语、数学与自然哲学，进一步印证其早慧，可作为辅助证据。",
          "traps": [
            "为什么不是 TRUE：原文称他为 “a child prodigy”（童年神童），并说他并未像许多神童那样成年后归于沉寂，全篇更没有“长大后就不那么出色”的说法；题干对此的否定没有原文依据，反而与之相反，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对“他成长时期是否聪明出色”有明确评价（child prodigy、did not disappear into oblivion），对“是否与别人相同”也有明确比较（unlike many remarkable children）。信息不但存在，而且与题干相反，因此属于 FALSE，而不是未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Young's talent as a doctor surpassed his other skills.",
          "translation": "杨作为医生的才能超过了他的其他技能。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Young's skill as a physician, however, did not equal his skill as a scholar of natural philosophy or linguistics."
          },
          "synonyms": [
            "“talent as a doctor” 同义替换为原文的 “skill as a physician”（physician 即医生、内科医师）",
            "“his other skills” 同义替换为原文的 “his skill as a scholar of natural philosophy or linguistics”（他在自然哲学与语言学方面的才能）",
            "“surpassed”（超过）与原文的 “did not equal”（不及、比不上）互为反义，是本题的判分点"
          ],
          "locatingTip": "定位：题干关键词 doctor 与 other skills 指向原文对他各项才能的比较，落在第 5 段首句。第 5 段处于人物生平的后半段，紧跟第 4 段“他学医、行医、成为医师”的叙述，扫读到 physician 一词即可落位。确定答案技巧：本题考“比较关系谁高谁低”，必须逐字看清原文的比较词。原文用 “did not equal”（比不上）说明他作为医生的能力不如他作为自然哲学或语言学学者的能力，而题干用 “surpassed”（超过）把两者的高低关系整个倒转过来，属于典型的关系倒置型 FALSE。另外，转折词 however 也提示读者：前面第 4 段刚讲他顺利从医、当上圣乔治医院医师，这里作者马上要“泼冷水”。",
          "analysis": "第 5 段首句是本题的定位句：“Young’s skill as a physician, however, did not equal his skill as a scholar of natural philosophy or linguistics.”（然而，杨作为医生的能力，比不上他作为自然哲学或语言学学者的能力）。句中的 however 承接第 4 段——上一段刚交代他读完医学训练、在伦敦开业行医、成为皇家内科医师学会会员并被任命为圣乔治医院医师，读者容易顺势以为他的医术是他最突出的才能。作者用 however 一转，明确给出比较结论：他作为医生的才能不及他作为学者的才能。题干把这一比较关系反写成 “talent as a doctor surpassed his other skills”（作为医生的才能超过其他技能），高低关系正好颠倒。此外第 6 段还强调 “Few men contributed so much to so many technical fields”，侧面说明他的卓越之处在学术领域，与原文判断一致。因此答案是 FALSE。做题提示：涉及比较级的判断题，务必把原文与题干的比较方向逐字对照，这是雅思常见的“关系倒置”陷阱。",
          "traps": [
            "为什么不是 TRUE：原文用的是否定式比较 “did not equal”（不及），明确说他行医的才能低于他研究自然哲学与语言学的才能；题干却说他行医的才能“超过”其他技能，与原文完全相反，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不但提到了他的医术，还给出了医术与其他学术才能的明确高低比较，信息十分充分，属于已有相反信息，应按规则判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Young's advice was sought by people responsible for local and national issues.",
          "translation": "负责地方与国家事务的人会征询杨的意见。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "His opinions were sought on civic and national matters, such as the introduction of gas lighting to London and methods of ship construction."
          },
          "synonyms": [
            "“Young’s advice was sought” 同义替换为原文的 “His opinions were sought”（被动语态与原句完全平行，opinions 即 advice）",
            "“local and national issues” 同义替换为原文的 “civic and national matters”：civic（市政的、城市的）对应 local",
            "“people responsible for … issues” 对应原文中征询他意见的那一方，即下文列举的伦敦煤气照明、船舶建造等事务的主管机构"
          ],
          "locatingTip": "定位：题干的关键词是 advice、local、national，原文对应句用 opinions、civic、national，用同义词改写的词往往比原词更难扫读，因此建议改用结构定位——第 5 段在讲完授课、秘书职务之后，出现一段罗列他承担的社会性事务，定位句就在其中。确定答案技巧：本题是典型的同义词替换题。把题干与原文逐一对照：advice 对应 opinions，was sought 对应 were sought，local and national issues 对应 civic and national matters，三组替换方向一致、程度相当，没有增减信息，因此判 TRUE。需要注意的是 civic（市政的）与 local（地方的）属于同一层级的近义词，雅思常用它来替换 local，不要因为词形不同就误判为信息不符。",
          "analysis": "第 5 段中段写道：“His opinions were sought on civic and national matters, such as the introduction of gas lighting to London and methods of ship construction.”（在市政与国家事务上，人们会征询他的意见，例如向伦敦引入煤气照明以及船舶建造的方法）。这句话的结构与题干几乎逐一对应：“His opinions”（他的意见）即题干的 “Young’s advice”；“were sought”（被征询）即题干的 “was sought”；“civic and national matters”（市政与国家事务）即题干的 “local and national issues”；而 “on … matters”（就…… 事务）这一介词结构正说明征询意见者正是负责这些事务的人，与题干的 “people responsible for … issues” 吻合。句末列举的两个例子（伦敦煤气照明、船舶建造方法）分别属于市政与国家级事务，又为“地方与国家”的双重范围提供了实证。信息方向完全一致且没有多余限定，故答案是 TRUE。辅助佐证还有第 5 段开头的 “he had been appointed to a professorship … at the Royal Institution” 以及 “In 1804 Young had become secretary to the Royal Society”，说明他在公共事务中的影响力。",
          "traps": [
            "为什么不是 FALSE：原文正面陈述他的意见被就市政与国家事务征询，并用两个具体例子（煤气照明、船舶建造）加以说明，题干只是把 civic 换成 local、opinions 换成 advice，内容方向一致，没有任何矛盾信息，不能选 FALSE。",
            "为什么不是 NOT GIVEN：题干的三个信息点——征询的对象（负责地方与国家事务的人）、内容（意见）、范围（地方与国家层面）——在原文中都有对应表述与实例支撑，信息是给出的而非缺失的，因此不选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Young took part in various social pastimes.",
          "translation": "杨参加了各种社交消遣活动。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Young was introduced into elite society, attended the theatre and learned to dance and play the flute. In addition, he was an accomplished horseman."
          },
          "synonyms": [
            "“took part in” 同义替换为原文的 “attended”“learned to” 以及 “was an accomplished …”——都是参与或从事某项活动的表达",
            "“various social pastimes” 同义替换为原文列举的 “the theatre”“dance”“play the flute”，以及 “an accomplished horseman”（骑马）这些休闲技艺",
            "“social” 与原文的 “elite society”（上流社会）呼应，说明这些活动带有社交性质"
          ],
          "locatingTip": "定位：题干的关键词是 social pastimes（社交消遣），这类信息通常集中在人物传记的“个人生活”叙述里，由第 6 段中间几句承担；段落转折词 Yet 之后、However 之前正是“个人生活”部分，定位句就在其中。确定答案技巧：本题考“多项活动”的列举，判断依据是原文有没有给出成串的休闲活动。原文连续写了 attended the theatre（看戏）、learned to dance（学跳舞）、play the flute（吹长笛）、was an accomplished horseman（精通骑术），并用 In addition 把它们串成一组，与题干的 various（各种）高度契合，故判 TRUE。要留意的反而是段落末尾的 However, his personal life looks pale …，那句是在说他的“私人生活细节”记载不足，否定的是“传记能否写透他的私生活”，而不是否定他参加过社交活动，不能据此误判为 FALSE。",
          "analysis": "第 6 段在评论传记写完人物工作之后，专门用几句勾勒杨的社交与娱乐生活：“Young was introduced into elite society, attended the theatre and learned to dance and play the flute. In addition, he was an accomplished horseman.”（杨被引介进入上流社会，去剧院看戏，还学会了跳舞和吹长笛。此外，他还是一位出色的骑手）。这几句列举了多项活动：进入上流社会社交、看戏、跳舞、吹长笛，再加上骑马，全都属于社交或娱乐消遣，且范围覆盖“社交场合”（elite society、theatre）与“个人嗜好”（dance、flute、horseman）两类，正好对应题干的 various social pastimes。作者甚至还具体描写了他会在医学讲座笔记上随手涂写希腊语拉丁语短语、把年轻女士写在凉亭墙上的诗句译成希腊挽歌（doodling、translating），同样属于精神性的消遣，为“various”提供了更多旁证。题干仅用一句概括这些事实，没有添加原文以外的内容，故答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文列举的看戏、跳舞、吹长笛、骑马都是明确写出的活动，且这些活动本身就是社交或娱乐，与题干并不冲突；段末的 “his personal life looks pale next to his vibrant career and studies” 是在感叹传记材料对其私生活着墨不足，并非否认他参与过社交消遣，不能当作反证据。",
            "为什么不是 NOT GIVEN：题干的两个要素——是否参与（took part in）以及是否为社交消遣（various social pastimes）——原文都有具体活动与场景作支撑（elite society、the theatre、dance、flute、horseman），信息充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Young suffered from a disease in his later years.",
          "translation": "杨晚年曾患过某种疾病。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Later in his life, when he was in his forties, Young was instrumental in cracking the code that unlocked the unknown script on the Rosetta Stone"
          },
          "synonyms": [
            "“in his later years” 同义替换为原文的 “Later in his life”",
            "“suffered from a disease”（患病）在原文中没有任何对应表达：全文只写他晚年的研究、职务与家庭生活，没有出现 disease、illness、sick 一类的词",
            "原文还把 “in his forties” 明确为四十多岁，属于事业活跃期，并没有交代他的健康状况"
          ],
          "locatingTip": "定位：题干的时间词 in his later years 是唯一可用的锚点，原文用 “Later in his life” 表述同一时段，落在第 3 段首句；另外第 5 段还有 “a post he would hold until his death”“From 1824 to 1829 he was physician to … the Palladian Insurance Company” 等关于晚年的叙述，可以一并核对。确定答案技巧：本题考“疾病”这一信息是否存在，方法是带着 disease、illness 这类词到原文做逆向排查。结果全文只谈他的著作、职务、家庭与性格，从未提到他患过任何疾病，既没有说他生病，也没有说他健康，属于纯粹的信息缺失，因此判 NOT GIVEN。切记不要把 “until his death”（任职直至去世）脑补成“因病去世”——去世的原因与方式原文完全没有交代。",
          "analysis": "原文第 3 段首句：“Later in his life, when he was in his forties, Young was instrumental in cracking the code that unlocked the unknown script on the Rosetta Stone, a tablet that was “found” in Egypt by the Napoleonic army in 1799.”（晚年，也就是他四十多岁时，杨在破译罗塞塔石碑上那段未知文字的过程中起了关键作用……）。这句是全文唯一以 “Later in his life” 明确点出晚年时段的句子，但它的内容全是研究成就，没有任何健康信息。第 5 段继续写他晚年的工作强度：1804 年起担任皇家学会秘书 “a post he would hold until his death”，1819 年起任《航海历书》主管，1824 至 1829 年任 Palladian 保险公司的医师与核算稽查员，直到生命尽头他都在承担职务，但同样没有一句提到疾病。第 7 段谈婚姻、父母关系与传记评价，也没有涉及病痛。全文对“他晚年是否患病”完全沉默，题干的 “suffered from a disease” 无法在原文中找到任何依据，只能判 NOT GIVEN。做判断题时要注意，“原文提到晚年”“原文提到去世”都不能自动等于“原文提到疾病”，凡是题干新增的、原文没有任何词句触及的信息点，一律按 NOT GIVEN 处理。",
          "traps": [
            "为什么不是 TRUE：原文没有任何一处提到 Young 生病或身体不适，也没有出现疾病名称、治疗、卧床之类的描述；题干所说的 “suffered from a disease” 属于原文完全未提供的新信息，不能凭他晚年仍坚持工作或最终去世就推断他患了病。",
            "为什么不是 FALSE：FALSE 需要原文出现与题干相反的信息，也就是要写明他晚年身体健康、从未生病或并非因病离世，而原文对此同样一字未提。既没有正面信息也没有反面信息，只能按信息缺失判 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 简答题（NO MORE THAN THREE WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "How many life stories did Young write for the Encyclopedia Britannica?",
          "translation": "杨为《大英百科全书》撰写了多少篇人物传记？",
          "answer": "46",
          "wordClass": "数词（回答 How many 的数量提问，用阿拉伯数字写出，代表 46 篇传记条目）",
          "locating": {
            "paragraph": "1",
            "quote": "Thomas Young (1773-1829) contributed 63 articles to the Encyclopedia Britannica, including 46 biographical entries (mostly on scientists and classicists)"
          },
          "synonyms": [
            "“life stories” 同义替换为原文的 “biographical entries”（传记类条目）",
            "“wrote for the Encyclopedia Britannica” 同义替换为原文的 “contributed … to the Encyclopedia Britannica”",
            "“How many” 对应原文给出的具体数字：63 articles 是总供稿数，46 biographical entries 才是传记类篇数"
          ],
          "locatingTip": "定位：题干关键词是专有名词 Encyclopedia Britannica 与 life stories，全文最早出现 Britannica 的地方正是第 1 段首句，一句之内就给出了 63 与 46 这两个关键数字，是本题的落点。确定答案技巧：本题的数字陷阱设置得很典型——句中出现 63 和 46 两个数字，必须看清各自修饰什么。63 articles 是他在《大英百科全书》发表的文章总数，46 biographical entries 才是其中“传记类条目”的数量，题干的 life stories 对应的正是后者，所以答案是 46。作答时按题目要求用阿拉伯数字写出，不要写成 forty-six（词数虽够，但题目要求用文章里的数字形式）。",
          "analysis": "第 1 段首句：“Thomas Young (1773-1829) contributed 63 articles to the Encyclopedia Britannica, including 46 biographical entries (mostly on scientists and classicists) and substantial essays on “Bridge,” “Chromatics,” “Egypt,” “Languages” and “Tides”.”（托马斯·杨 1773—1829，为《大英百科全书》撰写了 63 篇文章，其中包括 46 篇传记条目（大多关于科学家与古典学者），以及关于“桥”“色彩学”“埃及”“语言”和“潮汐”的长篇论文）。题干问的是“他为《大英百科全书》写了多少篇人物传记（life stories）”，对应原文的 46 biographical entries：biographical 即“传记的”，entries 即百科全书的条目，二者合起来正是“传记类条目”。including 之后的结构表明 46 篇是从 63 篇总数中细分出来的一个子类，因此不能答 63。另外，句末列举的长篇论文（Bridge、Chromatics、Egypt、Languages、Tides）属于另一类内容，与题干所问的“人物传记”无关，不要混淆。答案用阿拉伯数字 46 填写即可。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "What aspect of scientific research did Young focus on in his first academic paper?",
          "translation": "杨在第一篇学术论文中关注的是科学研究的哪个方面？",
          "answer": "human eye",
          "wordClass": "名词短语（名词 human 作前置定语修饰名词 eye；回答 What aspect 的提问，在句中作介词 on 的宾语，填写时不含冠词 the）",
          "locating": {
            "paragraph": "2",
            "quote": "In the paper, Young explained the process of accommodation in the human eye —on how the eye focuses properly on objects at varying distances."
          },
          "synonyms": [
            "“his first academic paper” 同义替换为原文的 “his first paper to the Royal Society of London” 以及下文回指的 “In the paper”",
            "“focus on” 同义替换为原文的 “explained the process of”",
            "“What aspect of scientific research” 对应原文的具体研究对象 “the process of accommodation in the human eye”（人眼的调节过程），答案落在所研究的器官 human eye 上"
          ],
          "locatingTip": "定位：题干的关键提示是 first paper（第一篇论文），第 2 段开头 “He presented his first paper to the Royal Society of London at the age of 20” 一句直接给出这一时间锚点，紧接着的 “In the paper, Young explained …” 便是本题的答案句。确定答案技巧：题目问“论文研究的是哪个方面”，答案要从论文内容句中提取。原文说他在论文中解释了 “the process of accommodation in the human eye”（人眼的调节过程），研究的对象器官就是 human eye，因此答案填 human eye。注意题目限制 NO MORE THAN THREE WORDS，而专有表述 “Human eye accommodation” 也是题库认可的另一种答案形式，但写 human eye 更短、更保险（两个词）。同时不要错填 the eye（原文中 the eye 出现在破折号后、属于对调节过程的进一步说明），也不要填 the lens（那是另一句中的假设内容）。",
          "analysis": "第 2 段开头三句构成完整的定位链：“He presented his first paper to the Royal Society of London at the age of 20 and was elected a Fellow a week after his 21st birthday. In the paper, Young explained the process of accommodation in the human eye —on how the eye focuses properly on objects at varying distances. Young hypothesized that this was achieved by changes in the shape of the lens.”（他 20 岁时向伦敦皇家学会提交了第一篇论文，并在 21 岁生日后一周当选为会员。论文中，杨解释了人眼的调节过程，即眼睛如何在不同距离上准确对焦。他假设这是通过晶状体形状的改变实现的）。题干问 “What aspect of scientific research did Young focus on in his first academic paper”，对应句就是 “In the paper, Young explained the process of accommodation in the human eye”。从词数上看，整句研究对象是 the process of accommodation in the human eye，超出三词限制，因此需要把答案压缩到核心名词上，即所研究的身体部位 human eye（人眼）。同样合乎题目限制的表述还有 human eye accommodation（三个词），两者在题库中并列收录，写 human eye 便已正确。注意原文中出现的 the lens 是下一句关于“机制”的假设，不是论文研究的“方面”本身。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "What name did Young introduce to refer to a group of languages?",
          "translation": "杨引入了什么名称来指代一个语系？",
          "answer": "Indo-European",
          "wordClass": "专有名词（术语名称，由连字符连接、首字母大写；回答 What name 的提问，在句中作 introduce 的宾语）",
          "locating": {
            "paragraph": "3",
            "quote": "In another entry, he coined the term Indo-European to describe the family of languages spoken throughout most of Europe and northern India."
          },
          "synonyms": [
            "“introduce a name” 同义替换为原文的 “coined the term”（创造出这一术语）",
            "“a group of languages” 同义替换为原文的 “the family of languages”（语系）",
            "“refer to” 同义替换为原文的 “to describe”（用来描述、指称）"
          ],
          "locatingTip": "定位：题干的关键词是 name（名称）与 languages（语言），原文第 3 段倒数第二句同时出现 coined the term（创造术语）与 the family of languages，一句之内即可锁定。确定答案技巧：先确认动作词——原文的 coined the term 正是“引入一个名称”的意思，再从动作词后面直接取名词：he coined the term Indo-European to describe the family of languages spoken throughout most of Europe and northern India。to describe 后面说明这个名称所指的是欧洲大部与印度北部所使用的语言家族，与题干的 “to refer to a group of languages” 完全对应，所以答案是 Indo-European。填写时务必保留连字符与首字母大写，写作 Indo-European，不要写成 Indo European、IndoEuropean 或缩写 IE。",
          "analysis": "第 3 段在讲完罗塞塔石碑与 demotic 文字之后继续写：“In another entry, he coined the term Indo-European to describe the family of languages spoken throughout most of Europe and northern India.”（在另一则条目中，他创造了“印欧语系”这一术语，用以描述欧洲大部分地区以及印度北部所使用的语言家族）。题干问“杨引入了什么名称来指代一个语言群体”，与这句话一一对应：What name 对应 the term Indo-European，did … introduce 对应 coined，to refer to a group of languages 对应 to describe the family of languages。答案就是术语本身 Indo-European（印欧语系）。词性上它是专有名词术语，带连字符、I 与 E 大写，属于固定拼写，不能改写。同时可以对照题干与原文的两个同义表达：a group of languages 与 the family of languages（语言家族、语系），introduce 与 coin（创造术语），两处替换都成立，进一步印证答案。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Who inspired Young to start his medical studies?",
          "translation": "是谁激励杨开始学医的？",
          "answer": "Richard Brocklesby",
          "wordClass": "专有名词（人名，名与姓的首字母均大写，共两个词）",
          "locating": {
            "paragraph": "4",
            "quote": "greatly encouraged by his mother's uncle, Richard Brocklesby, a physician and Fellow of the Royal Society. Following Brocklesby's lead, Young decided to pursue a career in medicine."
          },
          "synonyms": [
            "“inspired” 同义替换为原文的 “greatly encouraged”（大力鼓励），并与下文 “Following Brocklesby’s lead” 呼应",
            "“start his medical studies” 同义替换为原文的 “decided to pursue a career in medicine”，紧接其后还写他 “studied in London … then moved on to more formal education in Edinburgh, Gottingen and Cambridge”",
            "题干问的是“谁”（Who），答案取原文中发出鼓励动作的人 Richard Brocklesby"
          ],
          "locatingTip": "定位：题干的关键词是 medical studies，全文谈他“决定从医”的只有第 4 段，其中出现医学训练的细节（Edinburgh、Gottingen、Cambridge、1808 年完成训练），定位词集中、容易锁定。确定答案技巧：题目问 Who，就要在原文里找“谁鼓励了他”。原文明写 “he was greatly encouraged by his mother’s uncle, Richard Brocklesby, a physician and Fellow of the Royal Society”，紧接着一句 “Following Brocklesby’s lead, Young decided to pursue a career in medicine” 把“受鼓励”与“决定学医”直接连成因果关系，动作发出者就是 Richard Brocklesby。填写时要注意大小写与拼写：Richard Brocklesby，两个词，都在三词限制之内；不要填成他的身份描述（a physician），也不要误填 Richard 或 Brocklesby 的亲属称谓（mother’s uncle）。",
          "analysis": "第 4 段叙述杨的成长与求学历程：“After leaving school, he was greatly encouraged by his mother’s uncle, Richard Brocklesby, a physician and Fellow of the Royal Society. Following Brocklesby’s lead, Young decided to pursue a career in medicine. He studied in London, following the medical circuit, and then moved on to more formal education in Edinburgh, Gottingen and Cambridge.”（离开学校后，他深受母亲舅舅 Richard Brocklesby 的鼓励——此人是医师，也是皇家学会会员。追随 Brocklesby 的脚步，杨决定从医。他先后在伦敦学习、走医学巡回路线，之后又前往爱丁堡、哥廷根和剑桥接受更正规的教育）。这段话给出清晰的因果链：Brocklesby 鼓励（greatly encouraged）并且以身作则（Following Brocklesby’s lead），杨因此决定从医（decided to pursue a career in medicine）并开始系统学习。题干用 Who inspired Young to start his medical studies 概括这一因果，答案就是 Richard Brocklesby。注意他名字后紧跟的同位语 “a physician and Fellow of the Royal Society” 是在介绍其身份，不能当作答案；题干只问“谁”，人名两个词即可，符合三词上限。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Where did Young get a teaching position?",
          "translation": "杨在哪里获得了教职？",
          "answer": "Royal Institution",
          "wordClass": "专有名词（机构名称，首字母大写，共两个词；回答 Where 的提问，在句中作地点状语，填写时不含冠词 the）",
          "locating": {
            "paragraph": "5",
            "quote": "Earlier, in 1801, he had been appointed to a professorship of natural philosophy at the Royal Institution, where he delivered as many as 60 lectures in a year."
          },
          "synonyms": [
            "“a teaching position” 同义替换为原文的 “a professorship of natural philosophy”（自然哲学教授职位）",
            "“get” 同义替换为原文的 “had been appointed to”（被任命担任）",
            "“Where” 对应原文介词 at 之后的机构名称 the Royal Institution"
          ],
          "locatingTip": "定位：题干问“在哪里任教”，teaching position 在原文中最直接的对应是 professorship（教授职位）以及 lectures（授课）；第 5 段出现的 “he had been appointed to a professorship of natural philosophy at the Royal Institution, where he delivered as many as 60 lectures in a year” 一句同时含职位与授课信息，是最好的落点。确定答案技巧：确定“教职”后，看向介词 at 后面的成分——at the Royal Institution 就是任职机构，也就是题目所问的地点，答案填 Royal Institution。注意不要误填自然哲学的学科名（natural philosophy），也不要填后文出现的 the Royal Society（那是他担任秘书的机构，不是教职所在）或 Board of Longitude（那是经度委员会）。填写时去掉冠词 the，保留两个词的机构名。",
          "analysis": "第 5 段第二句：“Earlier, in 1801, he had been appointed to a professorship of natural philosophy at the Royal Institution, where he delivered as many as 60 lectures in a year. These were published in two volumes in 1807.”（更早的 1801 年，他被任命为皇家研究院的自然哲学教授，一年中授课多达 60 次；这些讲稿在 1807 年出版为两卷）。题干问 “Where did Young get a teaching position”，原文用 “appointed to a professorship”（被任命担任教授职位）表达“获得教职”，用 “delivered as many as 60 lectures in a year”（一年授课多达 60 次）进一步补足“教学”这一属性，地点则由介词 at 引出，即 the Royal Institution（皇家研究院）。该段后面还出现 the Royal Society（皇家学会，他任秘书处）、the Board of Longitude（经度委员会）、the Palladian Insurance Company（保险公司的医务与核算职务），这些都是他担任的其他职务，与“教职”无关，属于典型干扰项，作答时必须回到 professorship 与 lectures 所在的这一句取词。答案保留机构名两个词，去掉冠词 the。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "What contribution did Young make to London?",
          "translation": "杨为伦敦做出了什么贡献？",
          "answer": "gas lighting",
          "wordClass": "名词短语（名词 gas 作前置定语修饰名词 lighting；回答 What contribution 的提问，在句中作 make 的宾语，填两个词，不加冠词）",
          "locating": {
            "paragraph": "5",
            "quote": "such as the introduction of gas lighting to London and methods of ship construction."
          },
          "synonyms": [
            "“make a contribution to London” 同义替换为原文的 “the introduction … to London”（向伦敦引入某事）",
            "“What contribution” 对应原文 such as 引出的实例 “the introduction of gas lighting”",
            "“to London” 在原文与题干中位置一致，都是说明贡献对象的介词短语"
          ],
          "locatingTip": "定位：题干关键词是专有地名 London，全文出现 London 的地方有第 1 段之外的若干处，但只有第 5 段把“某事被引入伦敦”与他的意见并列在一起，定位句为 “such as the introduction of gas lighting to London and methods of ship construction”。确定答案技巧：题干问“他对伦敦的贡献是什么”，原文用 “the introduction of gas lighting to London”（把煤气照明引入伦敦）表述，只是把主动的“他推动引入”改成了名词短语 the introduction of …。去掉介词与冠词后，被引入的事物就是 gas lighting，答案填 gas lighting（两个词，符合三词上限）。注意不要误填 methods of ship construction，那是并列的另一个例子，对象不是伦敦；也不要只填 lighting（原文固定搭配为 gas lighting，gas 是不可省略的限定成分）。",
          "analysis": "第 5 段中段：“His opinions were sought on civic and national matters, such as the introduction of gas lighting to London and methods of ship construction.”（在市政与国家事务上人们会征询他的意见，例如向伦敦引入煤气照明以及船舶建造的方法）。题干问 “What contribution did Young make to London”，原文的对应部分是 such as 引出的第一个例子 the introduction of gas lighting to London。这里需要完成一次结构转换：原文是名词短语 “the introduction of X to London”（把 X 引入伦敦），题干是疑问句 “What contribution … to London”，问的正是 X。去掉限定词与介词后，X 即 gas lighting（煤气照明），两个词在三词上限之内。判定时要注意 such as 引出的两个例子分属不同对象——煤气照明是引入伦敦的，船舶建造方法则与地点无关，因此不能选 methods of ship construction；另外 gas 在此不是可有可无的修饰语，煤气照明是当时的专有说法，只写 lighting 会因信息不全而失分。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
