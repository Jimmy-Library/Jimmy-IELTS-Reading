(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-05", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-05",
  "meta": {
    "examId": "p1-high-05",
    "title": "Katherine Mansfield 新西兰作家",
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
          "stem": "The name Katherine Mansfield, which appears on the writer's books, was exactly the same as her original name.",
          "translation": "出现在这位作家书上的名字 Katherine Mansfield，与她原本的名字完全相同。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Katherine Mansfield Beauchamp Murry was born in 1888, into a prominent family in Wellington, New Zealand. She became one of New Zealand's best-known writers, using the pen name of Katherine Mansfield."
          },
          "synonyms": [
            "“the name Katherine Mansfield, which appears on the writer's books” 同义替换为原文的 “the pen name of Katherine Mansfield”，即署在她书上的名字就是她的笔名",
            "“her original name” 对应原文开头的全名 “Katherine Mansfield Beauchamp Murry”",
            "“was exactly the same as” 与原文事实冲突：笔名 Katherine Mansfield 只是全名 Katherine Mansfield Beauchamp Murry 的前两个词，省略了后两个姓氏成分 Beauchamp 与 Murry"
          ],
          "locatingTip": "定位：题干的核心词是人名 Katherine Mansfield 与 original name（原名），而文章开篇第 1 段首句就把她的全名写了出来，第二句随即点明 pen name（笔名），属于开篇即可锁定的题，不必往后读。确定答案技巧：判断题问“两者是否完全相同”时，先把两个对象在原文里的完整形式都找齐：一是书上的署名，原文写作 “the pen name of Katherine Mansfield”；二是她的本名，原文写作 “Katherine Mansfield Beauchamp Murry”。两相比较，笔名只是本名的一部分，题干 “exactly the same”（完全相同）被事实推翻，故判 FALSE。切忌看到 Katherine Mansfield 出现过就选 TRUE。",
          "analysis": "第 1 段首句交代她的本名：“Katherine Mansfield Beauchamp Murry was born in 1888, into a prominent family in Wellington, New Zealand.”（Katherine Mansfield Beauchamp Murry 于 1888 年出生在新西兰惠灵顿一个显赫的家庭）。紧接的第二句写道：“She became one of New Zealand's best-known writers, using the pen name of Katherine Mansfield.”（她成为新西兰最著名的作家之一，使用的是 Katherine Mansfield 这个笔名）。由此可知两点：其一，她的本名是全称 Katherine Mansfield Beauchamp Murry，其中 Beauchamp 是娘家姓、Murry 是夫姓；其二，出现在作品上的 Katherine Mansfield 只是一个 pen name，即由本名的前两个词构成、省去了两个姓氏的简称。题干却声称这个署在书上的名字与她的原名“完全相同（exactly the same as her original name）”，与原文给出的笔名与本名之别直接冲突，因此答案是 FALSE。做题提示：FALSE 与 NOT GIVEN 的分界在于原文有没有相反信息，本题原文既给出了全名又说明了笔名关系，是明确的矛盾，不是信息缺失。",
          "traps": [
            "为什么不是 TRUE：原文明确把 Katherine Mansfield 称为 pen name（笔名），而第 1 段首句给出的本名是全称 Katherine Mansfield Beauchamp Murry。笔名省略了 Beauchamp 和 Murry 两个姓氏成分，与题干 “exactly the same”（完全相同）相矛盾，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文既写出了她的本名全称，也交代了 Katherine Mansfield 是笔名，两条信息都在文中且指向相反结论，属于信息明确且与题干相悖，不是未提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Mansfield won a prize for a story she wrote for the High School Reporter.",
          "translation": "Mansfield 因一篇为《High School Reporter》写的故事而获奖。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Her first published stories appeared in the High School Reporter and the Wellington Girls' High School magazine in 1898 and 1899."
          },
          "synonyms": [
            "“a story she wrote for the High School Reporter” 对应原文的 “Her first published stories appeared in the High School Reporter”，刊物名原词复现",
            "“won a prize” 在原文中找不到任何对应表达：原文只交代了 “published stories appeared”（故事被刊登）这一事实",
            "原文给出的是“发表（appeared in）”与年份 “in 1898 and 1899”，与题干新增的“获奖”这一层信息不在同一层面"
          ],
          "locatingTip": "定位：专有名词 High School Reporter 是独特的刊物名，全文只出现在第 2 段首句，扫读时盯住这个大写词即可一步定位。确定答案技巧：判断题里只要出现 won、prize、award、medal 这类“获奖”类表述，就必须回原文核对有没有相应的奖项信息。本题原文只说她的故事出现在这两本刊物上、并给出年份，通篇没有 prize、award、competition 之类的字眼，属于纯信息缺失，故判 NOT GIVEN。不要因为“她少年时就发表了作品”就顺势推断“她一定得过奖”。",
          "analysis": "第 2 段首句写道：“Her first published stories appeared in the High School Reporter and the Wellington Girls' High School magazine in 1898 and 1899.”（她最早发表的故事出现在 1898 年和 1899 年的 High School Reporter 以及惠灵顿女子中学的校刊上）。原文在这里给出的只有三件事：故事被发表的事实、两本刊物的名称、以及 1898 与 1899 这两个年份。题干的落点却是 “won a prize”（获得奖项），这是一个原文完全没有涉及的新信息——通读全文其余段落，也没有任何一处提到她的获奖经历。因此这既不是与原文一致（无对应依据），也不是与原文矛盾（原文并未否认她获过奖），而是原文没有交代，按判断题规则判 NOT GIVEN。做题提示：判断 FALSE 需要原文存在相反信息，而“原文对此一言不发”只能对应 NOT GIVEN，本题正是典型的“多出来的信息”。",
          "traps": [
            "为什么不是 TRUE：原文只证明她最早的故事发表在两本刊物上，并没有任何获奖或参赛的描写；把“发表”读成“获奖”属于超出原文的推理，不能选 TRUE。",
            "为什么不是 FALSE：原文没有说她未获奖，也没有说这两本刊物不设奖，只是对获奖一事完全没有交代。没有相反信息就不算 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "How Pearl Button Was Kidnapped portrayed Maori people in a favourable way.",
          "translation": "《How Pearl Button Was Kidnapped》以正面的方式描写了毛利人。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "of her interest in the Maori people (New Zealand's native people), who were often portrayed in a sympathetic light in her later stories, such as How Pearl Button Was Kidnapped."
          },
          "synonyms": [
            "“How Pearl Button Was Kidnapped” 在原文中原词复现，作为 “her later stories” 的举例",
            "“portrayed Maori people” 同义替换为原文的 “the Maori people … who were often portrayed”，portrayed 为原词对应",
            "“in a favourable way” 同义替换为原文的 “in a sympathetic light”（以同情的笔调），favourable 与 sympathetic 方向一致"
          ],
          "locatingTip": "定位：斜体作品名 How Pearl Button Was Kidnapped 是非常独特的定位词，全文只出现在第 2 段末句，扫读一眼即可锁定。确定答案技巧：本题考“描写态度”，关键是找出原文对态度的评价词。原文用 sympathetic light（同情的笔调）来描述她后期作品对毛利人的写法，并在 such as 之后拿本题这篇作品作为例证；题干的 a favourable way（正面的方式）与 sympathetic light 属于同向同义的替换，因此判 TRUE。雅思常把 sympathetic、favourable、positive 与“同情的、正面的”互相改写，不要因为用词不同就误判为 NOT GIVEN。",
          "analysis": "第 2 段末句是本题依据：“Mansfield wrote in her journals of feeling isolated to some extent in New Zealand, and, in general terms, of her interest in the Maori people (New Zealand's native people), who were often portrayed in a sympathetic light in her later stories, such as How Pearl Button Was Kidnapped.”（Mansfield 在日记里写到自己在新西兰多少感到被孤立，也写到她对新西兰原住民毛利人的兴趣；在她后期的故事中，毛利人常被以同情的笔调描写，例如《How Pearl Button Was Kidnapped》）。句子结构上，who were often portrayed in a sympathetic light in her later stories 是修饰 the Maori people 的定语从句，such as How Pearl Button Was Kidnapped 则是给 her later stories 举的实例，两者合起来即“这篇作品对毛利人的描写取同情的笔调”。题干把 sympathetic light 换成 a favourable way（正面的方式），把 her later stories 之一直接点名为这篇作品，信息方向完全一致，故答案为 TRUE。注意 sympathetic light 的核心是“同情、同情式地呈现”，属于正面态度，与 favourable 并无程度或方向上的冲突。",
          "traps": [
            "为什么不是 FALSE：原文用 sympathetic light（同情的笔调）描述包括本篇在内的后期作品对毛利人的处理方式，与题干 a favourable way（正面的方式）方向相同，两者不构成矛盾，选 FALSE 没有依据。",
            "为什么不是 NOT GIVEN：原文不仅提到了毛利人，还明确以 sympathetic light 给出描写态度，并用 such as 把 How Pearl Button Was Kidnapped 点名为例，态度信息已经交代清楚，不属于未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "When Mansfield was at Queen's College, she planned to be a professional writer.",
          "translation": "在 Queen's College 就读期间，Mansfield 打算成为一名职业作家。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Mansfield recommenced playing the cello, an occupation that she believed, during her time at Queen's, she would take up professionally."
          },
          "synonyms": [
            "“When Mansfield was at Queen's College” 同义替换为原文的 “during her time at Queen's”",
            "“she planned to be” 同义替换为原文的 “she believed … she would take up”",
            "“a professional writer” 与原文冲突：原文中被计划“take up professionally”（专业地从事）的 occupation 是 playing the cello（拉大提琴），而非写作"
          ],
          "locatingTip": "定位：专有名词 Queen's College 在第 3 段反复出现，题干的时间限定“When Mansfield was at Queen's College”直接把范围压到这一段。确定答案技巧：这类题要特别警惕“时间错位”陷阱——同一个念头在原文别处也许出现过，但必须落在题干限定的时间段内。第 3 段说明她在 Queen's 期间的计划是“把拉大提琴当专业（take up professionally）”，而“立志成为职业作家”的表述出现在第 4 段，是 1906 年她返回新西兰之后的事，时间晚于 Queen's 时期，两处对不上，故判 FALSE。",
          "analysis": "第 3 段第 2 句是本题依据：“Mansfield recommenced playing the cello, an occupation that she believed, during her time at Queen's, she would take up professionally.”（Mansfield 重新开始拉大提琴，她认为在 Queen's 就读期间，这一职业会成为她专业从事的方向）。句中的 occupation 指的是前面刚提到的 playing the cello，也就是说她在 Queen's 阶段设想的职业身份是职业大提琴手，与写作无关。题干却把职业志向改写成 a professional writer（职业作家），与原文在该时段的交代相反。需要注意的是，原文第 4 段确有 “by this time she had her mind set on becoming a professional writer” 一句，但那是紧接着 1906 年“返回新西兰”之后的事，时间上晚于 1903 年起的 Queen's 阶段，不能用来支持题干的时间限定。时间错位是本题的命题点，故答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文在 Queen's 阶段给出的职业设想是当职业大提琴手（把 playing the cello 这一 occupation 专业地从事），不是当职业作家；“立志成为职业作家”出现在第 4 段，属于 1906 年回新西兰之后的另一时间段，时间不符。",
            "为什么不是 NOT GIVEN：原文对她的职业设想有明确交代，只是内容与题干相反，属于信息已给出且矛盾，不是未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Mansfield was unpopular with the other students at Queen's College.",
          "translation": "Mansfield 在 Queen's College 不受其他同学欢迎。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "she was appreciated amongst fellow students at Queen's for her lively and charismatic approach to life and work"
          },
          "synonyms": [
            "“was unpopular with” 与原文的 “was appreciated amongst” 构成反义冲突：appreciated（被欣赏、受欢迎）与 unpopular（不受欢迎）方向相反",
            "“the other students” 同义替换为原文的 “fellow students”",
            "“at Queen's College” 对应原文的 “at Queen's”"
          ],
          "locatingTip": "定位：本题与第 4 题同属 Queen's 就读阶段，定位词仍是 Queen's，回到第 3 段中段寻找对她与同学关系的评价句。确定答案技巧：判断人缘这类态度题，必须找到原文的褒贬词。原文用 appreciated（被欣赏、被认可），题干用 unpopular（不受欢迎），两者语义相反，属于事实矛盾，故判 FALSE。原文同一句还紧接着给出褒扬的理由 “for her lively and charismatic approach to life and work”，进一步确认这是正面评价，不存在“其实大家不喜欢她”的可能。",
          "analysis": "第 3 段中段写道：“She was particularly interested in the works of the French writers of this period and in the 19th-century British writer, Oscar Wilde, and she was appreciated amongst fellow students at Queen's for her lively and charismatic approach to life and work.”（她尤其对这一时期法国作家的作品以及 19 世纪英国作家 Oscar Wilde 感兴趣；在 Queen's，她因对生活和工作活泼而有魅力的态度而受到同学们的欣赏）。本题的判分点在后半句：appreciated amongst fellow students 意为“在同学中得到欣赏、受同学欢迎”，后面还补充了受欢迎的原因（lively and charismatic approach to life and work），是明确的正面评价。题干却说她在同学中 unpopular（不受欢迎），与原文的褒贬方向完全相反，因此答案是 FALSE。做题提示：判断题里态度词的正负号常常是唯一判分点，读懂 appreciated 是正面词就能迅速定案。",
          "traps": [
            "为什么不是 TRUE：原文用 appreciated（被欣赏）描述她在同学中的处境，题干却说她 unpopular（不受欢迎），两个评价方向相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对她在同学中的受欢迎程度有明确表述（被同学们欣赏，并给出理由），信息已经给出且与题干相反，因此不是信息缺失。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "In London, Mansfield showed little interest in politics.",
          "translation": "在伦敦，Mansfield 对政治兴趣不大。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Mansfield did not actively support the suffragette movement in the UK. Women in New Zealand had gained the right to vote in 1893."
          },
          "synonyms": [
            "“showed little interest in politics” 同义替换为原文的 “did not actively support the suffragette movement”，把笼统的 politics 具体化为妇女参政运动这一政治活动，且态度同为消极",
            "“In London” 对应原文第 3 段交代的活动地点：“She moved to London in 1903, where she attended Queen's College”",
            "“suffragette movement” 与 “gain the right to vote” 都属于选举权与参政议题，是把 politics 具体化的表达"
          ],
          "locatingTip": "定位：题干关键词 politics 在原文中没有原词复现，需要先用具体政治活动去搜，第 3 段倒数第二句的 suffragette movement（妇女参政运动）是全篇与政治话题最直接相关的表述，落点即此。确定答案技巧：这类“抽象词换具体事例”的判断题，先在原文锁定唯一对应的具体事实，再比对态度词。原文用 did not actively support（并未积极支持），属于消极态度，与题干的 little interest（兴趣不大）方向一致；紧接着又用 “Women in New Zealand had gained the right to vote in 1893” 提供背景，说明该政治议题在文中只被当作一句客观事实带过，并无她投身其中的描写，故判 TRUE。",
          "analysis": "第 3 段末两句写道：“Mansfield did not actively support the suffragette movement in the UK. Women in New Zealand had gained the right to vote in 1893.”（Mansfield 并未积极支持英国的妇女参政运动。新西兰女性早在 1893 年就获得了投票权）。suffragette movement 指 20 世纪初英国争取女性投票权的运动，是当时最具代表性的政治活动；原文说她“并未积极支持（did not actively support）”，等于交代了她对该政治运动态度消极。把这一信息与题干对应：题干的核心是“对政治兴趣不大（showed little interest in politics）”，与原文的消极态度方向一致。再看全文其余段落，内容依次是她的家庭与童年、求学与写作、迁居与婚姻、健康与遗作出版，没有任何一处提到她参与政治活动或对政治发表看法，也就是说原文关于她本人对政治的态度只留下“并未积极支持妇女参政运动”这一笔，与题干并不冲突，故答案为 TRUE。做题提示：本题的题眼是把 politics 落到 suffragette movement 这一具体事件上，找到它就能判断态度。",
          "traps": [
            "为什么不是 FALSE：原文没有任何一处显示她热心政治，相反，did not actively support the suffragette movement 直接说明她对这一政治运动采取消极态度，与“兴趣不大”同向，不构成矛盾。",
            "为什么不是 NOT GIVEN：原文虽未使用 politics 一词，但以当时最具代表性的政治运动 suffragette movement 作了具体说明，并交代了她“并未积极支持”的立场，属于可据此作出判断的已给信息，不是只字未提。"
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
          "stem": "7 ________ – moved from England back to New Zealand",
          "translation": "________（年份）：从英格兰回到新西兰。",
          "answer": "1906",
          "wordClass": "数词（年份）。笔记是时间轴结构，空格处是年份，作时间标记，与笔记里其他年份条目同类，因此填四位数字 1906。",
          "locating": {
            "paragraph": "4",
            "quote": "After finishing her schooling in England, she returned to her New Zealand home in 1906, only then beginning to write short stories in a serious way."
          },
          "synonyms": [
            "“moved from England back to New Zealand” 同义替换为原文的 “After finishing her schooling in England, she returned to her New Zealand home”，returned to her New Zealand home 即“回到新西兰的家”",
            "“1906” 在原文中以时间状语 “in 1906” 的形式出现，直接修饰 returned 这一动作",
            "“England” 与 “New Zealand” 两个地名在原文中原词复现，构成一一对应的地点线索"
          ],
          "locatingTip": "定位：笔记是时间轴，第一件事是“从英格兰回到新西兰”，据此回原文找 returned to her New Zealand home 即可，落在第 4 段。确定答案技巧：找到事件后不要停在句首，要读完整句——“After finishing her schooling in England” 是背景，“she returned to her New Zealand home in 1906” 才是主句，年份紧跟在地点之后，就是空格要填的 1906。交叉验证：笔记下一行给的是 1908（returned to London），而原文第 5 段说 “Two years later she headed again to London”，1906 加两年正是 1908，年份衔接吻合，答案可靠。按题目要求只写数字 1906。",
          "analysis": "第 4 段第 2 句写道：“After finishing her schooling in England, she returned to her New Zealand home in 1906, only then beginning to write short stories in a serious way.”（在英格兰完成学业之后，她于 1906 年回到新西兰的家，直到那时才开始认真地写短篇小说）。笔记第一条要填的是“从英格兰回到新西兰”这一事件对应的年份，与原文 returned to her New Zealand home 的动作及两个地点完全吻合，时间状语 in 1906 即答案。答案词形为四位阿拉伯数字 1906，符合题目 “ONE WORD AND/OR A NUMBER” 的要求，无需写年份单位，也不要把 1903（她移居伦敦的年份，见第 3 段）填进来——1903 是“去伦敦”，方向相反。交叉验证可看笔记下一行 1908：原文第 5 段说 “Two years later she headed again to London”，两年后即 1908，与 1906 构成完整的时间链条。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "first paid writing work was in a publication based in 8 ________",
          "translation": "她第一份有偿写作工作所在的刊物设在 ________。",
          "answer": "Australia",
          "wordClass": "专有名词（国家名）。空格位于介词 in 之后，作介词 in 的宾语，指刊物所在的国家，故填单个专有名词 Australia，首字母大写，不加冠词。",
          "locating": {
            "paragraph": "4",
            "quote": "She had several works published in Australia in a magazine called The Native Companion, which was her first paid writing work, and by this time she had her mind set on becoming a professional writer."
          },
          "synonyms": [
            "“first paid writing work” 同义替换为原文的 “which was her first paid writing work”，原词复现",
            "“a publication” 同义替换为原文的 “a magazine”（杂志），两词在出版物这一层同义",
            "“based in” 对应原文的地点状语 “published in Australia”，即刊物所在的国家是 Australia"
          ],
          "locatingTip": "定位：笔记关键词 first paid writing work 在原文第 4 段以原词出现，是最可靠的定位依据，找到该句即锁定位置。确定答案技巧：题干问“刊物设在何处”，原文用介词短语 in Australia 给出地点，直接对应 based in 之后的位置，故填 Australia。填写时注意三点：一是只填国家名一个词，不要填刊物名 The Native Companion（那是出版物本身，不是地点）；二是首字母大写；三是保持原文拼写 Australia，不要改写成别的说法，也不要填 England（那只是她上学的地方）。",
          "analysis": "第 4 段第 3 句写道：“She had several works published in Australia in a magazine called The Native Companion, which was her first paid writing work, and by this time she had her mind set on becoming a professional writer.”（她有若干作品发表在澳大利亚一本名为 The Native Companion 的杂志上，这是她第一份有偿的写作工作；到这时她已立志成为职业作家）。句中 which 引导的定语从句把 The Native Companion 与 her first paid writing work 明确划上等号，而该杂志的所在地由地点状语 in Australia 交代。笔记的表述是 “first paid writing work was in a publication based in 8 ________”，问的正是这份有偿写作所依托的刊物所在的位置，因此答案是 Australia。词性上，空格前是介词 in，需要名词性成分，且这是专有地名，须保持首字母大写；另外要注意题干 a publication 与原文 a magazine 的对应关系，publication 是上义词，不是要填的答案内容。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "her 9 ________ and the New Zealand way of life made her feel dissatisfied",
          "translation": "她的 ________ 以及新西兰的生活方式让她感到不满。",
          "answer": "family",
          "wordClass": "名词（单数）。指她的家人这一整体，受物主代词 her 限定，并与并列成分 the New Zealand way of life 一起作 made her feel dissatisfied 的主语，故填单数形式 family。",
          "locating": {
            "paragraph": "5",
            "quote": "Mansfield rapidly grew discontented with the provincial New Zealand lifestyle, and with her family."
          },
          "synonyms": [
            "“the New Zealand way of life” 同义替换为原文的 “the provincial New Zealand lifestyle”，way of life 即 lifestyle",
            "“made her feel dissatisfied” 同义替换为原文的 “grew discontented with”，discontented 与 dissatisfied 同义",
            "“her family” 在原文中原词出现，并与生活方式构成 and with 引出的并列结构"
          ],
          "locatingTip": "定位：笔记里的 “the New Zealand way of life” 与 “made her feel dissatisfied” 是原文 discontented with 的改写，回原文搜索 New Zealand 加不满类词，落在第 5 段首句。确定答案技巧：原句用 “and with” 并列两个让她不满的对象，一个已经出现在笔记里（the New Zealand way of life 对应 the provincial New Zealand lifestyle），另一个就由空格承担。把并列成分逐一对照，剩下的 her family 就是答案；空格前已有物主代词 her，因此只填 family 一个词。注意区分同段其他信息：后文的 father（父亲每年给她 100 英镑补贴）是另一件事，与“让她不满”的对象无关，不要误填 father。",
          "analysis": "第 5 段首句写道：“Mansfield rapidly grew discontented with the provincial New Zealand lifestyle, and with her family.”（Mansfield 很快对偏狭的外省式新西兰生活方式、以及对她自己的家人感到不满）。句中 discontented with 后面接了两个并列宾语：the provincial New Zealand lifestyle 与 her family，两个都是用 with 引导的介词宾语，地位平等。笔记把这一句拆成 “her 9 ________ and the New Zealand way of life made her feel dissatisfied”，其中 the New Zealand way of life 与原文的 the provincial New Zealand lifestyle 对应（way of life 即 lifestyle），made her feel dissatisfied 与 grew discontented with 对应；剩下未被覆盖的并列成分 her family 就是空格要填的内容。词性上，空格受物主代词 her 限定，需要名词，且 family 在此指“她的家人”这一整体，用单数原形而不加复数、不加冠词。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "10 ________ prevented Mansfield and Murry from staying together in Paris",
          "translation": "________ 使 Mansfield 与 Murry 无法继续待在巴黎。",
          "answer": "bankruptcy",
          "wordClass": "名词（不可数，指破产这一事件）。在笔记句中作主语，谓语 prevented 为主动形式，故填名词单数形式 bankruptcy，不加冠词。",
          "locating": {
            "paragraph": "6",
            "quote": "Their attempt to set up as writers in Paris was cut short by Murry's bankruptcy, which resulted from the failure of this and other journals."
          },
          "synonyms": [
            "“prevented Mansfield and Murry from staying together in Paris” 同义替换为原文的 “Their attempt to set up as writers in Paris was cut short by”，was cut short by 即“被打断、无法继续”",
            "“prevented” 同义替换为原文的 “was cut short by”，一个是主动句的“阻止”，一个是被动句的“被打断”",
            "“Murry's bankruptcy” 中的 bankruptcy 是空格所需的核心名词，Murry's 只是它的所有格限定成分"
          ],
          "locatingTip": "定位：笔记中的专有名词 Paris 与 Murry 都是很好用的定位词，第 6 段专门讲两人“在巴黎以作家身份立足”的尝试，找到这段即找到落点。确定答案技巧：笔记用主动句“某事 prevented 某人 from …”，原文用被动句 “was cut short by 某事”，语态相反但语义相同。原文 was cut short by 后面紧跟的 Murry's bankruptcy 就是施动者，去掉所有格限定后，空格应填的就是 bankruptcy。注意区分因果层次：which resulted from the failure of this and other journals 说明杂志失败是破产的原因，journals 不能被填进空格；writers 则是他们想成为的身份，也不是拦截他们的那件事。",
          "analysis": "第 6 段倒数第二句写道：“Their attempt to set up as writers in Paris was cut short by Murry's bankruptcy, which resulted from the failure of this and other journals.”（他们想在巴黎以作家身份立足的尝试，因 Murry 的破产而中断，而这场破产源于这本杂志以及其他几本杂志的失败）。句子的主干是 Their attempt … was cut short by Murry's bankruptcy，即“尝试因破产而中断”，破产是打断既定计划的事件。笔记把这一句改写成 “10 ________ prevented Mansfield and Murry from staying together in Paris”，用主动结构表达“某事让他们无法继续留在巴黎”，与原文的 was cut short by 语义一致：Their 指的就是 Mansfield and Murry 两人。把两者对接，原文施动者 Murry's bankruptcy 中的核心名词 bankruptcy 就是答案。词性上，bankruptcy 在此为不可数名词，作主语时用原形、不加冠词，也不用复数。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "spent time with distinguished 11 ________",
          "translation": "与一些杰出的 ________ 共度时光。",
          "answer": "writers",
          "wordClass": "名词（复数）。受形容词 distinguished 修饰，作介词 with 的宾语；原文 such as 后列举了三位知名人士，说明所指为多位作家，故必须用复数形式 writers。",
          "locating": {
            "paragraph": "7",
            "quote": "She and Murry developed close contact with other well-known writers of the time such as D. H. Lawrence, Bertrand Russell and Aldous Huxley."
          },
          "synonyms": [
            "“distinguished” 同义替换为原文的 “well-known”（知名的、有名的）",
            "“spent time with” 同义替换为原文的 “developed close contact with”（建立了密切的联系、往来密切）",
            "“writers” 在原文中原词出现：“other well-known writers of the time”，并由 such as 引出 D. H. Lawrence 等具体人名佐证"
          ],
          "locatingTip": "定位：笔记的时间栏 1911–1919 与第 7 段开头的 “Between 1915 and 1918” 相衔接，可先把段落锁定在第 7 段；再在该段中找“与知名人士交往”的表述，即 developed close contact with。确定答案技巧：把题干与原文逐层对应——spent time with 对应 close contact with，distinguished 对应 well-known，那么被这两个词修饰的名词 writers 就是答案。这一步的语法提示很关键：such as 后面列出 D. H. Lawrence、Bertrand Russell、Aldous Huxley 三个人名，说明这一类人整体为复数，因此答案必须写复数 writers，写成单数 writer 会与原文的复数指代不符。",
          "analysis": "第 7 段第 2 句写道：“She and Murry developed close contact with other well-known writers of the time such as D. H. Lawrence, Bertrand Russell and Aldous Huxley.”（她与 Murry 和当时其他一些知名作家建立了密切的往来，如 D. H. Lawrence、Bertrand Russell 与 Aldous Huxley）。笔记的这一条是“与一些杰出的某某共度时光”，其对应关系为：spent time with 对应 developed close contact with，distinguished 对应 well-known，而原文中被修饰的中心词是 writers，且用 such as 给出了三位作家的具体名字作为例证，可见这些人都是写作身份。因此空格填 writers，并保持复数形式，与原文 “writers … such as A, B and C” 的数量一致；不必也不应把具体的作家名字填进空格（那样既超出 ONE WORD 的限制，也不符合 “distinguished” 这一形容词所修饰的类别概念）。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "her 12 ________ was consolidated when Bliss and Other Stories was published",
          "translation": "当《Bliss and Other Stories》出版时，她的 ________ 得到了巩固。",
          "answer": "reputation",
          "wordClass": "名词（单数，抽象名词）。受物主代词 her 限定，在笔记句中作主语，其后为被动谓语 was consolidated，指被巩固的那项抽象属性，故填单数 reputation。",
          "locating": {
            "paragraph": "7",
            "quote": "It was the publication of Bliss and Other Stories in 1920 that was to solidify Mansfield's reputation as a writer."
          },
          "synonyms": [
            "“was consolidated” 同义替换为原文的 “was to solidify”（得到巩固、变得稳固）",
            "“when Bliss and Other Stories was published” 同义替换为原文的 “It was the publication of Bliss and Other Stories in 1920 that …”，publication 即 published 的名词形式",
            "“her” 对应原文的所有格 “Mansfield's”，两者都指被巩固的这项属性归属于 Mansfield 本人"
          ],
          "locatingTip": "定位：斜体书名 Bliss and Other Stories 与年份 1920 在第 7 段末句同时出现，属于大写与数字的双重定位词，一眼即可锁定。确定答案技巧：题干说“她的某样东西（由 her 限定）得到巩固”，原文对应表达是 solidify Mansfield's reputation as a writer，其中 solidify 与 consolidate 同义，被巩固的对象 reputation 就是答案。填空时注意排除两个干扰项：一是 publication（出版是促成巩固的原因，原文用 It was … that 强调结构突出的是“出版”这件事，不是被巩固的对象）；二是 writer（那是她作为什么身份出名，不是被巩固的属性本身）。",
          "analysis": "第 7 段末句写道：“It was the publication of Bliss and Other Stories in 1920 that was to solidify Mansfield's reputation as a writer.”（正是 1920 年《Bliss and Other Stories》的出版，巩固了 Mansfield 作为作家的声誉）。这是强调句型 It was … that …，被强调的成分是 the publication of Bliss and Other Stories in 1920（即出版这件事），而主句述语 was to solidify 的宾语是 Mansfield's reputation as a writer，也就是得到巩固的对象。笔记的表述是 “her 12 ________ was consolidated when Bliss and Other Stories was published”，其中 was consolidated 与 was to solidify 对应、when … was published 与 the publication … in 1920 对应，剩下未覆盖的正是被巩固的名词 reputation。词性上，reputation 为单数抽象名词，受物主代词 her 限定并作主语，故填单数原形，不加冠词也不变复数。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Mansfield's 13 ________ published more of her works after her death",
          "translation": "Mansfield 的 ________ 在她去世后出版了她更多的作品。",
          "answer": "husband",
          "wordClass": "名词（单数）。受所有格 Mansfield's 限定，并在笔记句中作 published 的主语，指她生前的那位配偶，故填单数 husband。",
          "locating": {
            "paragraph": "9",
            "quote": "After her death, her husband, Murry, took on the task of editing and publishing her works."
          },
          "synonyms": [
            "“published more of her works” 同义替换为原文的 “took on the task of editing and publishing her works”",
            "“after her death” 同义替换为原文的 “After her death”，原词复现",
            "“Mansfield's” 对应原文的 “her”，两个所有格都指向 Mansfield；原文还给出同位的专有名词 “Murry” 补充说明这位丈夫的身份"
          ],
          "locatingTip": "定位：笔记时间栏是 1923–1924，而第 9 段明确写出两本遗作的出版年份 “published in 1923 and 1924 respectively”，年份精确对应，直接锁定末段。确定答案技巧：题干说“Mansfield 的某某在她死后出版了她更多作品”，原文对应句是 “After her death, her husband, Murry, took on the task of editing and publishing her works”，主语由普通名词 husband 加同位语人名 Murry 共同构成。由于空格前已有所有格 Mansfield's，只需填普通名词 husband，不要填专有名词 Murry；也不要填 editor，因为原文说的是 took on the task of editing，编辑只是任务的一部分，句子主语的身份仍是 husband。",
          "analysis": "第 9 段第 2 句写道：“After her death, her husband, Murry, took on the task of editing and publishing her works.”（在她去世之后，她的丈夫 Murry 承担起了编辑并出版她作品的工作）。该句与上一句 “much of her prose and poetry remained unpublished at her death in 1923” 以及本段末句提到的 “The Doves' Nest and Something Childish, published in 1923 and 1924 respectively” 连成一条线索：1923 年她去世，之后由丈夫接手整理与出版，并陆续推出遗作，这与笔记 “1923–1924 – Mansfield's 13 ________ published more of her works after her death” 的时间栏与内容完全吻合。空格所有格 Mansfield's 已给出归属关系，故填普通名词 husband（单数），不需冠词；若填专有名词 Murry 会与空格前的所有格、以及题干所要求的“关系身份”不符。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
