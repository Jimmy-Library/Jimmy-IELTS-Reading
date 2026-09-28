(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-48", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-48",
  "meta": {
    "examId": "p1-low-48",
    "title": "The history of the guitar 吉他的历史",
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
          "stem": "The instrument found in Queen Shub-Ad's tomb is the world's oldest known version of a harp.",
          "translation": "在舒布-阿德王后（Queen Shub-Ad）墓中发现的乐器是世界上已知最古老的竖琴。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Around 2500-2000 BC, more advanced harps, such as the beautifully carved 11-stringed instrument found in the tomb of Queen Shub-Ad in ancient Mesopotamia, now modern-day Iraq, started to appear."
          },
          "synonyms": [
            "“the instrument found in Queen Shub-Ad's tomb” 与原文 “the beautifully carved 11-stringed instrument found in the tomb of Queen Shub-Ad” 完全对应，指同一件乐器",
            "“world's oldest known version” 与原文 “more advanced harps” 相互冲突：原文说的是更先进、更晚出现的版本，题干的措辞却把它换成了“最古老的版本”",
            "判断依据还在于同段首句 “The earliest stringed instruments currently known to archaeologists are bowl harps.”，原文把“已知最早”这项身份给了 bowl harps，而不是王后墓中的乐器"
          ],
          "locatingTip": "定位：题干中的专有名词 Queen Shub-Ad 是大写人名，全文只出现一次，扫读时只要盯住第 1 段后半部分即可锁定，无需读完全文。确定答案技巧：这类含最高级（the world's oldest）的判断题，判分关键是看“已知最早”这个头衔在原文里到底给了谁。原文分两步否定题干：第 1 段首句先宣布“考古学家目前已知最早的弦乐器是碗状竖琴（bowl harps）”，紧接着又说王后墓中那把 11 弦乐器只是公元前 2500–2000 年“开始出现的更先进的竖琴（more advanced harps）”。时间更晚、形制更进步，都与“最古老”相反，属于事实冲突而非同义改写，因此判 FALSE。",
          "analysis": "原文第 1 段共四句，分两层交代：①“The earliest stringed instruments currently known to archaeologists are bowl harps.”（考古学家目前已知最早的弦乐器是碗状竖琴），并说这类碗状竖琴用龟壳作共鸣箱、弯木棍作琴颈；②“Around 2500-2000 BC, more advanced harps, such as the beautifully carved 11-stringed instrument found in the tomb of Queen Shub-Ad in ancient Mesopotamia, now modern-day Iraq, started to appear.”（大约公元前 2500–2000 年，开始出现更先进的竖琴，例如出土于美索不达米亚——今伊拉克——舒布-阿德王后墓中那把雕刻精美的 11 弦乐器）。题干把后一句所讲的“更先进、出现更晚的竖琴”改写成“世界上已知最古老的竖琴（the world's oldest known version of a harp）”，把原文的 more advanced（更先进）硬换成 oldest（最古老），并把首句已经明确给 bowl harps 的“已知最早”身份移花接木到王后墓中的乐器上，属于典型的最高级偷换与事实矛盾，因此答案是 FALSE。做本题时一定要警惕 the world's oldest / the first 这类绝对化表述：本题中 earliest 修饰的是 bowl harps，而不是 Queen Shub-Ad 的 11 弦乐器。",
          "traps": [
            "为什么不是 TRUE：原文明确把“已知最早”给了 bowl harps（“The earliest stringed instruments currently known to archaeologists are bowl harps.”），并且说王后墓中的乐器出现于公元前 2500–2000 年，属于 more advanced harps（更先进的竖琴）。题干把“更晚出现的先进版本”抬升为“世界最古老的版本”，与原文事实直接对立，所以不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文既交代了“最早的是 bowl harps”，也交代了王后墓中乐器的年代与性质，两条信息都非常明确，只是与题干相反。存在明确且相反的信息时按规则判 FALSE，而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Today's Afghan panchtar is very similar to an ancient Mesopotamian instrument.",
          "translation": "今天的阿富汗 panchtar 与一种古代美索不达米亚乐器非常相似。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Many of these instruments have survived into modern times in almost unchanged form, for example, folk instruments of the region such as the Turkish saz and Afghan panchtar."
          },
          "synonyms": [
            "“Today's” 同义替换为原文的 “survived into modern times”（流传至今）",
            "“very similar” 同义替换为原文的 “in almost unchanged form”（形态几乎未变）",
            "“an ancient Mesopotamian instrument” 对应原文上一句的 “many similar relics amongst the ruins of the ancient Mesopotamian civilisation”",
            "“Afghan panchtar” 是原文给出的具体例证：“folk instruments of the region such as the Turkish saz and Afghan panchtar”"
          ],
          "locatingTip": "定位：题干里有两个专有名词 Afghan panchtar 和 Mesopotamian，都是很好的“钓鱼词”，第 2 段末尾同时出现，扫读到 Afghan panchtar 就可以停下来精读。确定答案技巧：句子类比题（A 与 B 相似）要在原文里找“同一件东西从古到今”的表述。原文先说 “Many of these instruments have survived into modern times in almost unchanged form”，再举例 “such as the Turkish saz and Afghan panchtar”，等于直接说阿富汗 panchtar 就是那些从古代美索不达米亚时代一直保存到今天的乐器之一，且形态几乎没变；almost unchanged form 与题干的 very similar 方向一致、程度相当，故选 TRUE。",
          "analysis": "第 2 段讲 tanbur 由碗状竖琴发展而来，末尾两句是本题的落点。倒数第二句：“Archaeologists have also found many similar relics amongst the ruins of the ancient Mesopotamian civilisation.”（考古学家还在古代美索不达米亚文明的废墟中发现了很多类似的遗物）；最后一句：“Many of these instruments have survived into modern times in almost unchanged form, for example, folk instruments of the region such as the Turkish saz and Afghan panchtar.”（其中许多乐器以几乎未改变的形式保存到了现代，例如该地区的民间乐器，如土耳其 saz 和阿富汗 panchtar）。两句连起来逻辑链条完整：这些乐器源自古代美索不达米亚文明，形态几乎没变地流传到现在，阿富汗 panchtar 就是其中之一。题干中的 Today's 对应 survived into modern times，very similar 对应 in almost unchanged form，an ancient Mesopotamian instrument 对应 relics amongst the ruins of the ancient Mesopotamian civilisation，三处改写一一对应，信息方向完全一致，所以答案是 TRUE。注意 almost unchanged（几乎未变）与 very similar（非常相似）在逻辑上属于同一等级的说法，雅思常把“几乎没变化”改写成“非常相似”，不要因为原文有 almost 就误判程度减弱而选 FALSE。",
          "traps": [
            "为什么不是 FALSE：题干的核心是“今天的 panchtar 与古代美索不达米亚乐器非常相似”，而原文说这些乐器“以几乎未改变的形式（in almost unchanged form）保存到了现代”，并举 panchtar 为例，两者是同向同义的表述，没有矛盾点，所以不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅给出了古乐器遗物（relics amongst the ruins of the ancient Mesopotamian civilisation），还用 for example 把 Afghan panchtar 明确点出来作为“几乎未变流传至今”的实例，相似性与传承关系的证据充分，并非没有提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The Egyptian singer Har-Mose was an excellent tanbur player.",
          "translation": "埃及歌手 Har-Mose 是一位出色的 tanbur 演奏者。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "At 3,500 years old, the tanbur which belonged to the Egyptian singer Har-Mose is the earliest known example of this instrument."
          },
          "synonyms": [
            "“the Egyptian singer Har-Mose” 在原文中人名与身份原词复现：“the Egyptian singer Har-Mose”",
            "“an excellent … player” 在原文中找不到任何对应表达：原文只交代了乐器的归属（belonged to）、年代（3,500 years old）和地位（the earliest known example），完全没有评价他的演奏水平"
          ],
          "locatingTip": "定位：利用专有名词 Har-Mose 这一人名（含连字符，非常好认）加身份词 Egyptian singer，一步定位到第 3 段第 1 句。确定答案技巧：判断题遇到主观评价类形容词（excellent、talented、skilled、popular）要特别小心，这类词是 NOT GIVEN 的高发区。回原文核对会发现，原文只说他“拥有（belonged to）”这把 3500 年前的 tanbur，并称它是这类乐器已知最早的实例，对他本人弹得好不好只字未提，属于纯信息缺失，因此判 NOT GIVEN。切忌因为“他拥有最古老的乐器”就自行脑补“他一定是个出色的演奏者”。",
          "analysis": "第 3 段开头写道：“At 3,500 years old, the tanbur which belonged to the Egyptian singer Har-Mose is the earliest known example of this instrument.”（这把有 3500 年历史的 tanbur 属于埃及歌手 Har-Mose，是这类乐器已知最早的实例）。句中关于 Har-Mose 的信息只有两点：他是埃及歌手，以及这把琴归他所有。接下来的两句继续描述这把乐器本身（三根弦、用绳挂着的拨子、香柏木与生皮做的共鸣箱），以及它今天陈列在开罗的考古博物馆，依旧没有任何关于他演奏水平的描写。题干的落点却是 an excellent tanbur player（出色的 tanbur 演奏者），这个“出色”是原文没有给出的评价。按判断题规则，“原文未提及某项信息”即 NOT GIVEN——既没有说他很出色，也没有说他演奏得差，所以不是 TRUE 也不是 FALSE，而是 NOT GIVEN。做题技巧：当自己的题前预测（“拥有名琴的人大概是名家”）出现时，必须回到原文逐字核对，原文没有的那一层评价就是本答案的依据。",
          "traps": [
            "为什么不是 TRUE：原文只说明这把 tanbur 属于他、并且是最早的实例，从未出现 excellent、skilful、renowned 之类的评价词。把“拥有最古老的乐器”推断成“演奏水平出色”属于超出原文的推理，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 要求原文有与之矛盾的信息，即原文得说他“弹得不好”或“并非演奏者”，而原文对此毫无交代，仅仅是没说，所以也不是 FALSE。三选一里只有 NOT GIVEN 对应“信息缺失”。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The Cairo Archaeological Museum contains many historic musical instruments.",
          "translation": "开罗考古博物馆收藏着许多历史悠久的乐器。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The soundbox, which increased the volume, was made of beautifully polished cedarwood and covered in rawhide. It can be seen today at the Archaeological Museum in Cairo."
          },
          "synonyms": [
            "“The Cairo Archaeological Museum” 与原文的 “the Archaeological Museum in Cairo” 语序互换，指同一座博物馆",
            "“contains many historic musical instruments” 在原文中没有任何对应：原文的 “It can be seen today …” 只说明 Har-Mose 那一件乐器如今陈列于此",
            "原文用单数代词 “It” 回指前文的 tanbur，范围限定为一件，与题干的 “many … instruments”（许多乐器）在数量上不对应"
          ],
          "locatingTip": "定位：题目里的两个大写词 Cairo 和 Archaeological Museum 都是极佳的定位词，直接跳到第 3 段最后一句。确定答案技巧：先弄清原文句子里代词 It 指什么——它回指的是上一句谈到的 Har-Mose 那把 tanbur 的乐器本体，也就是说原文只交代了“这一件乐器今天能在开罗考古博物馆看到”。题干却把这个单件信息扩张成“馆内藏有许多历史乐器”，多出来的 many 和“整馆藏品”这一范围是原文没有的，所以是 NOT GIVEN。这类“由单件推广到整体”的推断题，只要抓住原文代词的指代范围和数量词，就能快速排除 TRUE。",
          "analysis": "第 3 段末句：“It can be seen today at the Archaeological Museum in Cairo.”（它今天可以在开罗的考古博物馆看到）。句中 It 承接上文，指的是 Har-Mose 那把有三根弦、共鸣箱用香柏木和生皮制成的 tanbur，是单数、特指的一件展品。题干却写成“开罗考古博物馆 contains many historic musical instruments（收藏许多历史乐器）”，把“这一件在馆内”扩展为“馆内有许多件历史乐器”。原文既没有说明该馆藏品的数量，也没有说明是否还有其他乐器，题干的 many 无从对应，只能判 NOT GIVEN。注意本题与第 3 题紧挨在同一段，属于同段两题，做题时顺序不受影响，但一定要逐题回到原文找各自对应的那句话，避免把第 3 题的答案印象带到第 4 题。",
          "traps": [
            "为什么不是 TRUE：原文只证明了“这一件 tanbur 在开罗的博物馆展出”，由单个展品无法推出该馆“收藏许多历史乐器”；题干把范围从一件扩大到整馆藏品，属于无据扩大，不能选 TRUE。",
            "为什么不是 FALSE：原文并没有否认馆里还有其他乐器，也没有说馆内没有历史乐器，只是对“许多”这个说法没有交代。没有相反信息就不是 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "The instrument carved in stone at Alaca Huyuk is consistent with Dr Michael Kasha's definition of a guitar.",
          "translation": "在阿拉贾休于克（Alaca Huyuk）石雕上的乐器与迈克尔·卡夏（Michael Kasha）博士对吉他的定义一致。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The oldest known visual representation of such an instrument is a stone carving at Alaca Huyuk in Turkey, which shows a 3,300-year-old instrument with a long neck and sides that clearly curve inwards."
          },
          "synonyms": [
            "“the instrument carved in stone at Alaca Huyuk” 同义替换为原文的 “a stone carving at Alaca Huyuk in Turkey”",
            "“consistent with Dr Michael Kasha's definition of a guitar” 同义替换为原文的 “The oldest known visual representation of such an instrument”，其中 such an instrument 直接回指 Kasha 博士刚刚给出的吉他定义",
            "“with a long neck and sides that clearly curve inwards” 与定义中的 “a long, fretted neck … with sides that curve inwards” 逐一对应，构成判断一致性的具体依据"
          ],
          "locatingTip": "定位：题干有两个专有名词——人名 Dr Michael Kasha 和地名 Alaca Huyuk，前者出现在第 4 段第 2 句，后者出现在第 4 段第 3 句，两个词在同一段内一前一后，扫到任意一个就停在第 4 段精读。确定答案技巧：本题考“某物是否符合某定义”，解题关键是抓住原文的指代衔接词 such an instrument。第 4 段先给出 Kasha 的定义（长而有品的琴颈、平的木质面板、侧板向内弯曲等），紧接着说“这种乐器（such an instrument）已知最早的图像就是 Alaca Huyuk 的石雕”，而石雕上那把乐器的特征（long neck、sides that clearly curve inwards）恰好与定义吻合。作者用 such 一词已经把石雕乐器与定义画上等号，因此题干所说的“一致”正是原文之意，判 TRUE。",
          "analysis": "第 4 段是本篇说明“什么才算吉他”的定义段。第 2 句：“Music expert Dr Michael Kasha defines a guitar as having 'a long, fretted neck, flat wooden soundboard, ribs, and a flat back, most often with sides that curve inwards'.”（音乐专家 Michael Kasha 博士把吉他定义为具有“长而有品的琴颈、平的木质面板、侧板以及平坦的背板，通常侧板向内弯曲”的乐器）。第 3 句：“The oldest known visual representation of such an instrument is a stone carving at Alaca Huyuk in Turkey, which shows a 3,300-year-old instrument with a long neck and sides that clearly curve inwards.”（这类乐器已知最早的图像是土耳其 Alaca Huyuk 的一处石雕，上面刻着一把 3300 年前的乐器，有很长的琴颈，侧板明显向内弯曲）。这里 such an instrument 中的 such 是回指性用法，明确表示石雕上的乐器就是“符合上述定义的那种乐器”；随后给出的两个特征（long neck、sides that clearly curve inwards）又和定义里的 a long, fretted neck、sides that curve inwards 严丝合缝。题干说该石雕乐器“与 Kasha 博士的吉他定义一致（is consistent with … definition）”，正是原文用 such an instrument 所要表达的意思，因此答案是 TRUE。做题提示：抽象名词 definition 与具体对象之间的对应关系，雅思常通过 such / this kind of / the same 这类回指词来暗示，认出这类指代就等于找到了判分依据。",
          "traps": [
            "为什么不是 FALSE：原文用 such an instrument（此类乐器）把石雕乐器与 Kasha 的定义直接挂钩，且石雕乐器的长琴颈、内弯侧板与定义中的描述完全吻合，两者不存在任何矛盾，选 FALSE 没有依据。",
            "为什么不是 NOT GIVEN：原文不仅给出了定义，还在下一句立刻给出“符合定义的最早图像”，正是对“石雕乐器是否符合定义”这一关系的正面回答，信息完整且明确，不属于未提及。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The different instruments that appeared in medieval literature had the same number of strings.",
          "translation": "出现在中世纪文献中的各种乐器琴弦数量相同。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Many such instruments, and variations with from three to five strings, can be seen in mediaeval illustrated manuscripts."
          },
          "synonyms": [
            "“medieval literature” 同义替换为原文的 “mediaeval illustrated manuscripts”（中世纪带插图的手稿）",
            "“the different instruments” 同义替换为原文的 “Many such instruments, and variations”",
            "“had the same number of strings” 与原文的 “variations with from three to five strings”（三到五根弦的多种变体）相互冲突：数量是变动的、不统一的"
          ],
          "locatingTip": "定位：题干的关键词是 medieval（美式拼写）与 strings，原文写作英式拼法 mediaeval，两者出现在第 6 段第 3 句，注意同义拼写不要漏掉。确定答案技巧：本题考“数量是否一致”，判分点就是原文有没有给出弦数范围。原文写 “variations with from three to five strings”，即同一类乐器有三根、四根、五根弦的多种变体，弦数并不统一；题干却断言“琴弦数量相同（the same number of strings）”，与原文给出的区间直接对立，故判 FALSE。看到 from … to … 的数字区间，就要意识到它强调的是“范围与多样性”，与 the same 是反义关系。",
          "analysis": "第 6 段讲 tanbur 和竖琴随旅行者、商人、船员传播到古代世界各地，其中说：“The earliest guitar-like instruments to arrive in Europe had, most often, four strings.”（最早到达欧洲的吉他类乐器大多有四根弦），紧接着一句就是本题定位句：“Many such instruments, and variations with from three to five strings, can be seen in mediaeval illustrated manuscripts.”（这类乐器以及三到五根弦不等的各种变体，都能在中世纪带插图的手稿中看到）。原文的逻辑重心在于“三到五根弦不等（variations with from three to five strings）”，强调的是同一类乐器内部弦数存在差异、版本多样；而题干的落点是“the same number of strings（琴弦数量相同）”，明确要求各乐器弦数一致。两者一个是“有差别”，一个是“无差别”，形成正面对立，因此判 FALSE。注意题干把 mediaeval illustrated manuscripts 概括为 medieval literature，这是合理替换（带插图的手稿也属于文献），替换层面没有问题；错误只出在“same number”这一点上——判断 TRUE / FALSE 时要盯住题干的结论性表述（数量、程度、时间、因果），本题的结论性表述被原文的区间数字直接推翻。",
          "traps": [
            "为什么不是 TRUE：原文用 “from three to five strings” 明确给出 3 至 5 根弦的区间，并称之为 variations（变体），说明弦数各不相同；题干说“数量相同”，与原文相悖，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对琴弦数量的描述非常具体（三到五根不等），属于已经交代且与题干冲突的信息，不是没有提及，因此不能选 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 表格填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "was a development of an earlier instrument called the 7 ________",
          "translation": "（Chitarra 琴）是由一种名为 ________ 的早期乐器发展而来的。",
          "answer": "chartar",
          "wordClass": "名词（单数，乐器名称；空格前有定冠词 the，因此填名词单数形式，不加复数、不加冠词）",
          "locating": {
            "paragraph": "7",
            "quote": "When the four-stringed Persian chartar arrived in Spain, however, it changed in form and construction, acquiring pairs of strings tuned to the same note instead of single strings. It became known as the chitarra."
          },
          "synonyms": [
            "“a development of an earlier instrument called …” 同义替换为原文的 “it changed in form and construction … It became known as the chitarra”，即旧乐器演变、改名后成为新乐器",
            "“an earlier instrument” 对应原文的 “the four-stringed Persian chartar”，是 chitarra 的前身",
            "“was a development of” 对应原文的 “changed in form and construction”，表示形制上的演进"
          ],
          "locatingTip": "定位：先看表格左侧栏目——13th–19th century 这一行的乐器名是专有名词 Chitarra，属于极佳的定位词，回到原文找 Chitarra / chitarra 即可，出现在第 7 段开头。确定答案技巧：本行说 Chitarra 是“一种更早的乐器（an earlier instrument called …）”发展来的，需要在原文里找它改名前叫什么。原文说四弦波斯 chartar 传入西班牙后改变形制，随后 “It became known as the chitarra”，可见新名字是 chitarra，改名之前的旧乐器就是 chartar；再结合第 5 段末尾“the Persian three-stringed setar and four-stringed chartar”已把 chartar 列为波斯乐器名，答案确定为 chartar。填写时按原文保持小写形式 chartar，且是 ONE WORD ONLY 的单个词。",
          "analysis": "表格第一行讲 Chitarra（13th–19th century），第一条备注是“由一种更早的乐器发展而来”。原文第 7 段首句：“When the four-stringed Persian chartar arrived in Spain, however, it changed in form and construction, acquiring pairs of strings tuned to the same note instead of single strings. It became known as the chitarra.”（当四弦的波斯 chartar 传入西班牙后，它的形制与构造发生了变化，单根弦变成了成对调成同音的弦，随后它被称为 chitarra）。这段话清楚给出演变链条：chartar（旧名）经过形制改变后叫做 chitarra（新名）。题干用结果式表达“was a development of an earlier instrument called the 7 …”，即把 chitarra 的结果反过来问它的前身叫什么，对应回原文就是 chartar。另外，第 5 段已经交代了命名规律：“Many have names that end in 'tar', with a prefix indicating the number of strings, such as … the Persian three-stringed setar and four-stringed chartar.”（波斯三弦 setar、四弦 chartar），可见 chartar 的 cha- 与弦数有关，而 chartar 与 chitarra 仅差一个字母，也印证了二者是同源名称的先后形式。答案词性为乐器名称单数，故填 chartar。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "its shape a result of modifications, including a larger 8 ________ introduced by Antonio Torres",
          "translation": "它的形状是一系列改良的结果，其中包括由安东尼奥·托雷斯（Antonio Torres）引入的更大的 ________。",
          "answer": "body",
          "wordClass": "名词（单数，指吉他的某个物理部件；空格前有不定冠词 a 和比较级形容词 larger，故填可数名词单数形式）",
          "locating": {
            "paragraph": "8",
            "quote": "when the Spanish guitar maker Antonio Torres increased the size of the body, altered its proportions, and introduced the revolutionary fan-braced top"
          },
          "synonyms": [
            "“a larger 8 …” 同义替换为原文的 “increased the size of the body”，即“把某部件做得更大”改写成“更大的某部件”",
            "“modifications” 对应原文并列的 “altered its proportions, and introduced the revolutionary fan-braced top”",
            "“introduced by Antonio Torres” 对应原文的 “the Spanish guitar maker Antonio Torres increased …”，人名直接复现"
          ],
          "locatingTip": "定位：用表格里的专有名词 Antonio Torres（人名）和乐器名 Classical guitar 定位到第 8 段介绍古典吉他成形的那一句，人名在文中只出现一次，一步到位。确定答案技巧：题干的 larger 是形容词比较级，说明原句一定在讲“某部件变大了”，据此在原文中寻找表示尺寸变化的动词短语 increased the size of the …，其宾语 the body 就是被变大的部件。同理还要留意并列结构：increased the size of the body（变大）、altered its proportions（改比例）、introduced the revolutionary fan-braced top（引入扇形音梁面板），三项改动中只有第一项与 larger 对应，因此答案锁定 body。填空时注意 ONE WORD ONLY，且空格前已有 a larger 提供全部限定成分，答案写名词原形 body 即可。",
          "analysis": "原文第 8 段：“At the beginning of the 19th century, the present-day guitar began to take shape, although bodies were still fairly small and narrow-waisted. The modern classical guitar first appeared in its current form in the mid-19th century, when the Spanish guitar maker Antonio Torres increased the size of the body, altered its proportions, and introduced the revolutionary fan-braced top.”（19 世纪初，现代吉他的雏形开始形成，但琴身仍然偏小、腰部较窄。现代古典吉他在 19 世纪中叶首次以如今的形态出现，当时西班牙制琴师 Antonio Torres 加大了琴身尺寸、改变了比例，并引入革命性的扇形音梁面板）。题干把这一长句拆成“its shape a result of modifications, including a larger 8 ________”，其中 modifications 概括了 altered its proportions 等改动，larger 对应 increased the size of，空格所需的宾语就是 body（琴身）。这也是表格填空最常见的收窄手段：把原文的“动词加 the size of 加名词”改写成“形容词比较级加名词”并留空名词。从词性看，空格前已有冠词 a 和比较级 larger，后面紧跟过去分词短语 introduced by Antonio Torres 作后置定语，结构为“a larger 加名词单数”，故只能填可数名词单数 body。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "changes produced better tone and greater 9 ________",
          "translation": "这些改变带来了更好的音色和更大的 ________。",
          "answer": "volume",
          "wordClass": "名词（不可数，表示乐器的声学属性；与前面的 tone 并列，受比较级 greater 修饰）",
          "locating": {
            "paragraph": "8",
            "quote": "His design radically increased the volume and improved the tone of the instrument, and very soon became the norm."
          },
          "synonyms": [
            "“better tone” 同义替换为原文的 “improved the tone”",
            "“greater …” 同义替换为原文的 “radically increased the …”，即“增大某属性”改写成“更大的某属性”",
            "“changes” 同义替换为原文的 “His design”，指代前一句 Torres 所做的各项改动"
          ],
          "locatingTip": "定位：本题紧跟第 8 题，同在第 8 段，题干关键词是 tone 与 greater，回原文找与音色、音量有关的效果句即可，即 “His design radically increased the volume and improved the tone of the instrument”。确定答案技巧：题干用 and 把两个好处并列——better tone 和 greater [9]；原文同样用 and 并列两件事——increased the volume 和 improved the tone。把两处并列对应起来：improved the tone 对应 better tone，那么剩下的 increased the volume 就对应 greater volume，空格填 volume。注意不要被语序迷惑，原文是先 volume 后 tone，题干是先 tone 后 [9]，顺序相反但内容一一对应；同时也别填 improvement 之类的抽象名词，因为空格要的是被“增大”的那个属性名词本身。",
          "analysis": "原文第 8 段第 3 句：“His design radically increased the volume and improved the tone of the instrument, and very soon became the norm.”（他的设计大幅提升了乐器的音量，并改善了音色，很快成为通行标准）。第 8 题所在句讲的是 Torres 对琴身、比例和面板的改动（做什么），本句讲的是这些改动的效果（带来什么结果），题干用 changes produced … 概括这种因果关系。对应关系为：improved the tone 对应 better tone，radically increased the volume 对应 greater volume，因此答案是 volume（音量）。词性上，volume 在此为不可数名词，与 tone 并列作 produced 的宾语，前面有比较级 greater 修饰，但其本身不加冠词也不变复数；填入时保持原文的单词形式 volume 即可（ONE WORD ONLY，无需改写）。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "first made in 10 ________ in the mid-19th century",
          "translation": "于 19 世纪中叶首次在 ________ 制造。",
          "answer": "America",
          "wordClass": "专有名词（国家名，首字母大写；位于题干已给的介词 in 之后作其宾语，与 in 一起构成表示首次制造地点的状语）",
          "locating": {
            "paragraph": "9",
            "quote": "At the time when Torres made his breakthrough, German immigrants to America – among them Christian Friedrich Martin – began making guitars with X-braced tops."
          },
          "synonyms": [
            "“first made in …” 同义替换为原文的 “began making guitars with X-braced tops”，began 对应 first",
            "“in the mid-19th century” 对应原文的 “At the time when Torres made his breakthrough”，而 Torres 的突破发生在 19 世纪中叶（上一段已交代）",
            "“X-braced top guitar” 这一表格栏目与原文的 “guitars with X-braced tops” 完全对应"
          ],
          "locatingTip": "定位：表格第三行的乐器名 X-braced top guitar 是非常独特的复合词，回到原文搜索 X-braced，只出现在第 9 段，可直接跳过前面所有段落。确定答案技巧：题干问“首次制造”的地点，句型是 first made in 加地点加时间。原文对应句是 “German immigrants to America … began making guitars with X-braced tops”，动作 began making（首次开始制造）对应 first made，制造者是移居美国（to America）的德国移民，介词 to 后的 America 就是地点；时间上原文说 “At the time when Torres made his breakthrough”，接上一段可知 Torres 的突破发生在 mid-19th century，与题干时间一致。答案为一个单词 America，注意首字母大写，不要写 USA、the US 或 Germany（德国移民的身份容易造成干扰，但制造地是美国）。",
          "analysis": "原文第 9 段首句：“At the time when Torres made his breakthrough, German immigrants to America – among them Christian Friedrich Martin – began making guitars with X-braced tops.”（托雷斯取得突破的同一时期，移居美国的德国移民——其中包括 Christian Friedrich Martin——开始制作 X 形音梁面板的吉他）。表格第三行的乐器是 X-braced top guitar，题干第一条备注是“19 世纪中叶首次在某个地方制造”，对应到原文即 “German immigrants to America … began making guitars with X-braced tops”。题干把主动句 “immigrants to America began making” 改写为被动结构 “first made in [10]”，动作的发出者变成了地点状语，只剩国家名 America。判定时要抓住两点：一是 began making 中的 began 对应题干的 first（首次）；二是务必区分“人从哪来”和“在哪制造”——文中是 German immigrants to America（德国移民移居到美国），制造发生在美国境内，所以填 America 而不是 Germany。同时注意题干的 in the mid-19th century 是原文 “At the time when Torres made his breakthrough” 的同义改写（上一段已明确 Torres 的突破发生在 mid-19th century），两条线索互相印证。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "strings made of 11 ________ became available around 1900",
          "translation": "由 ________ 制成的琴弦在 1900 年前后面世。",
          "answer": "steel",
          "wordClass": "名词（材料名，作介词 of 的宾语，说明琴弦的制作材料；保持不可数形式 steel，不变复数、不加冠词）",
          "locating": {
            "paragraph": "9",
            "quote": "Steel strings, which became widely available several decades later in the early 1900s, offered the promise of a much louder guitar"
          },
          "synonyms": [
            "“strings made of steel” 同义替换为原文的 “Steel strings”，原文用名词作前置定语，题干改写为 “made of …” 后置结构",
            "“became available” 同义替换为原文的 “became widely available”",
            "“around 1900” 同义替换为原文的 “in the early 1900s”，即 1900 年代初期、约 1900 年前后"
          ],
          "locatingTip": "定位：题干的关键信息是时间 around 1900，回原文找 1900s 之类的年代表述，落在第 9 段第 2 句 “in the early 1900s”。确定答案技巧：确定时间后看该时间点“变普及”的到底是什么——原文说 “Steel strings … became widely available”，主角是 Steel strings；题干把 Steel strings 改写成 “strings made of [11]”，把材料信息从定语位置挪到了介词 of 之后，因此空格要填的就是 steel（钢）。注意答案只写材料名 steel 一个词，不要写 steel strings（超出词数限制）。",
          "analysis": "原文第 9 段第 2 句：“Steel strings, which became widely available several decades later in the early 1900s, offered the promise of a much louder guitar, but the increased tension was too much for the fan-braced top.”（钢弦在几十年后，即 1900 年代初广泛面世，为更响亮的吉他带来希望，但张力增加对扇形音梁面板来说太大了）。表格第三行第二条备注是“1900 年前后面世的某种材料制成的琴弦”，与原文的时间 “in the early 1900s”（约 1900 年）和主体 Steel strings（钢弦）精确对应。题干的结构改写是本题的关键：原文用名词前置定语 Steel strings，题干拆成 strings made of [11]，空格承担的是材料这一信息点，所以填 steel。从词性看，of 是介词，其后需要名词或名词性成分作宾语，steel 作为材料名词不变复数、无需冠词。此外要注意下一句还提到 the increased tension（张力增大），那是钢弦带来的后果，与空格无关，不要误填 tension。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "in the 1920s, 12 ________ were added to guitars",
          "translation": "在 20 世纪 20 年代，________ 被加装到吉他上。",
          "answer": "pickups",
          "wordClass": "名词（复数；在句中作主语，与复数谓语动词 were added to 保持数的一致，故必须写复数形式 pickups）",
          "locating": {
            "paragraph": "10",
            "quote": "The electric guitar was born when pickups were fitted to Hawaiian and jazz guitars in the late 1920s"
          },
          "synonyms": [
            "“were added to” 同义替换为原文的 “were fitted to”，都是“被安装到”的意思",
            "“in the 1920s” 同义替换为原文的 “in the late 1920s”，题干给的是更宽泛的时间区间",
            "“Electric guitar” 这一表格栏目与原文的 “The electric guitar was born …” 完全对应"
          ],
          "locatingTip": "定位：表格第四行的时间栏是 1920s onwards，乐器栏是 Electric guitar，回到原文找 electric guitar 与 1920s，落在第 10 段（也是全文最后一段）。确定答案技巧：题干说某样东西“在 1920 年代被加装到吉他上（were added to）”，而且谓语是复数 were，提示答案应是复数名词。原文对应句 “when pickups were fitted to Hawaiian and jazz guitars in the late 1920s” 中，fitted to 与 added to 同义，were 与 were 对应，被装上吉他的东西就是 pickups（拾音器），所以答案填 pickups。这一步的语法提示非常关键：看到空格后的 were added to 就要预判复数，写 pickup 会因语法不符而失分。",
          "analysis": "原文第 10 段（末段）最后两句：“At the end of the 19th century, guitar manufacturer Orville Gibson added steel strings to a body constructed like a cello, a combination which produced more volume. The electric guitar was born when pickups were fitted to Hawaiian and jazz guitars in the late 1920s, but met with little success until 1936, when Gibson introduced its famous ES150 model.”（19 世纪末，制琴商 Orville Gibson 把钢弦装到按大提琴方式构造的琴身上，这一组合带来了更大的音量。20 世纪 20 年代后期，当拾音器被安装到夏威夷吉他和爵士吉他上时，电吉他诞生了，但直到 1936 年 Gibson 推出著名的 ES150 型号才大获成功）。表格第四行“Electric guitar, 1920s onwards”的两条备注正好对应末段这两件事的不同部分：第一条“在 1920 年代，某种东西被加装到吉他上”对应 “pickups were fitted to … guitars in the late 1920s”，其中 fitted to 即 added to，主语 pickups 即答案。注意不能填 steel（那是 19 世纪末到 20 世纪初的事，属于 X-braced top 那一行），也不能填 strings（原文中被加装的部件不是 strings）。答案写成复数 pickups，与复数谓语 were 一致。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "a well-known version was brought out by 13 ________",
          "translation": "一款著名的型号由 ________ 推出。",
          "answer": "Gibson",
          "wordClass": "专有名词（制造商或品牌名称；位于介词 by 之后，作被动句的动作发出者，首字母大写）",
          "locating": {
            "paragraph": "10",
            "quote": "until 1936, when Gibson introduced its famous ES150 model."
          },
          "synonyms": [
            "“a well-known version” 同义替换为原文的 “its famous ES150 model”，well-known 对应 famous，version 对应 model",
            "“was brought out by” 同义替换为原文的 “Gibson introduced”，原文是主动语态“推出”，题干改写为被动语态“被推出”",
            "“Gibson” 在原文中作 introduced 的主语，在题干中转为介词 by 后的施动者"
          ],
          "locatingTip": "定位：本题顺承第 12 题，仍在第 10 段末尾，找与“推出某款著名型号”有关的句子，即 “until 1936, when Gibson introduced its famous ES150 model”。确定答案技巧：题干用被动语态 “was brought out by [13]”，要把它还原成主动句：brought out 即 introduced，a well-known version 即 famous model，那么动作的发出者就出现在原文主语的位置上，即 Gibson。填空时注意介词 by 后面要求名词性成分，且 Gibson 是品牌或厂商专有名词，首字母必须大写，保持原文拼写 Gibson；不要误填 ES150（那是型号，与题干 a well-known version 属于同一成分，不能既做宾语又做主语）。",
          "analysis": "原文第 10 段末句：“The electric guitar was born when pickups were fitted to Hawaiian and jazz guitars in the late 1920s, but met with little success until 1936, when Gibson introduced its famous ES150 model.”（电吉他诞生后一直不太受欢迎，直到 1936 年 Gibson 推出著名的 ES150 型号才成功）。表格第四行第二条备注是“一款著名的型号由某个公司或品牌推出”，与原文的判断完全吻合：a well-known version 对应 its famous ES150 model（famous 即 well-known，model 即 version），was brought out by 对应 introduced，只不过语态由主动转为被动。原文用主动句 “Gibson introduced …”，主语 Gibson 就是要填的制造者，因此答案是 Gibson（首字母大写）。作答时可以这样自检：把词填回题干读一遍——“a well-known version was brought out by Gibson”，与原文 “Gibson introduced its famous ES150 model” 意思一致，语态转换正确，说明答案成立。注意同一段前面还出现过制琴商 Orville Gibson（19 世纪末），而 1936 年推出 ES150 的 Gibson 此时已指以他命名的公司品牌，考场上只需按原文句子如实填写 Gibson 一个词即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
