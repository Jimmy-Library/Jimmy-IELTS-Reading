(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-174", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-174",
  "meta": {
    "examId": "p3-high-174",
    "title": "Some views on the use of headphones 耳机使用",
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
          "stem": "Young people are easily persuaded by surveys that listening to music is beneficial.",
          "translation": "年轻人很容易被那些声称听音乐有益的调查说服。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "In survey after survey, people report with confidence that music makes them happier, better at concentrating, and more productive."
          },
          "synonyms": [
            "“Young people” 对应原文第 1 段的 “younger workers”（Up to half of younger workers listen to music on their headphones）",
            "“surveys” 原词复现，原文为 “In survey after survey”（一次又一次的调查中）",
            "“listening to music is beneficial” 同义替换为原文的 “music makes them happier, better at concentrating, and more productive”",
            "“are easily persuaded by” 在原文中找不到任何对应：原文只写人们 “report with confidence”（自信地表示），完全没提他们是被调查说服的"
          ],
          "locatingTip": "定位：题干含两个易找的信息点——Young people 和 surveys。回到原文扫读，第 1 段同时出现 “younger workers” 与 “In survey after survey”，即可锁定该段精读。确定答案技巧：本题是典型的“把原文信息强度改大”的判断题。原文的落点是人们“自信地（with confidence）”表示音乐让自己更快乐、更专注、更有效率，这只说明受访者主观上确信音乐有益，并没有说他们的看法来自调查的说服，更没有“容易被动摇（easily persuaded）”这层评价。判断题只要出现原文没有的新增逻辑环节（此处是“被调查说服”这一因果），且原文既不支持也不否认，就应判 NOT GIVEN，切忌把“相信”偷换成“被说服”。",
          "analysis": "第 1 段共三句：①描写现代办公室里十几首歌同时在放却没人听到；②“Up to half of younger workers listen to music on their headphones, and nearly all of them think it makes them better at their jobs.”（近半数年轻员工用耳机听音乐，且几乎所有人都认为这让他们更擅长工作）；③本题定位句 “In survey after survey, people report with confidence that music makes them happier, better at concentrating, and more productive.”（在一次又一次的调查中，人们自信地表示音乐让自己更快乐、更专注、更有效率）。题干把第③句的“在调查中自信地表示”改写成“被调查说服（easily persuaded by surveys）”，把受访者的主动确信变成了被动接受影响；同时对好处只保留了“有益（beneficial）”这一概括。原文提供的信息是“人们（含年轻人）相信音乐有益”，而“他们这种相信是不是被调查说服的结果”原文只字未提，属于信息缺失，因此答案是 NOT GIVEN。做题提醒：题干里出现 easily（容易地）这类程度副词时，要回原文核对是否真有同等强度的表述，本题中唯一带程度色彩的词是 with confidence，它修饰的是“表述的自信”，与“容易被说服”无关。",
          "traps": [
            "为什么不是 YES：原文说人们 report with confidence（自信地表示），这是受访者自己的主观感受陈述，原文并没有任何“被调查说服”的表述；把“自信地表示”读成“容易被说服”是超出原文的推断，不能判 YES。",
            "为什么不是 NO：原文也没有否认年轻人会被调查说服，只是根本没有提到“说服”这一环节以及年轻人是否易被影响，既无相反信息，就不是 NO，而应按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Different studies share the same conclusions about the desirability of working in silence.",
          "translation": "关于在安静环境中工作的可取性，不同的研究得出了相同的结论。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "A Taiwanese study linked music that has lyrics to lower marks on concentration tests for college students, and other research has shown music with lyrics scrambles our brains' verbal-processing skills. “As silence has the best overall performance, it would still be advisable that people work in silence,” another reporter dryly concluded."
          },
          "synonyms": [
            "“Different studies” 同义替换为原文并列出现的 “A Taiwanese study” 与 “other research”",
            "“share the same conclusions” 同义替换为三项一致的表述：台湾研究把带歌词的音乐与更低的专注测试成绩挂钩，其他研究指出带歌词的音乐扰乱大脑语言加工能力",
            "“the desirability of working in silence” 同义替换为原文的 “it would still be advisable that people work in silence”（在安静中工作仍然是可取的）"
          ],
          "locatingTip": "定位：题干关键词是 studies 与 working in silence，后者是全文唯一的“silence 加 work”组合，只出现在第 2 段末句的引语里。确定答案技巧：本题考“多项研究结论是否一致”，解题方法是把原文里所有研究逐一列出并比方向——台湾研究（A Taiwanese study）说带歌词的音乐让大学生专注测试得分更低；其他研究（other research）说带歌词的音乐扰乱大脑的语言加工能力；引语中的记者总结“安静时整体表现最好，因此仍然建议人们在安静中工作”。三处结论方向完全一致，都指向“音乐有害、安静更可取”，与题干的 same conclusions 吻合，故选 YES。注意不要被 dryly（干巴巴地）这类语气词误导成作者在否定该结论——dryly 只描述说话口吻，不改变结论本身。",
          "analysis": "第 2 段的核心是“科学界不认同年轻人对音乐的乐观看法”。原文先说 “Scientists do not share this belief; they maintain that listening to music hurts people's ability to recall other things they should be doing, and any pop song, loud or soft, reduces overall performance for both extroverts and introverts.”（科学家并不认同这一看法；他们认为听音乐会损害人们记忆其他该做之事的能力，而且任何流行歌曲无论音量大还是小，都会降低外向者与内向者的整体表现）。随后举出两项研究：台湾研究（带歌词的音乐与大学生专注力测试的更低分数相关）与另外的研究（带歌词的音乐扰乱大脑的言语加工技能），最后以记者之口总结 “As silence has the best overall performance, it would still be advisable that people work in silence.”（既然安静时整体表现最好，人们在安静环境中工作仍然是可取的）。题干的三段信息与原文一一对应：Different studies 对应原文提到的多项研究；share the same conclusions 对应它们方向一致（都主张音乐拖累表现）；the desirability of working in silence 对应 advisable that people work in silence。信息方向一致且明确，因此答案是 YES。",
          "traps": [
            "为什么不是 NO：原文列出的台湾研究、其他研究以及引语结论指向同一方向——带歌词的音乐有害、安静时表现最好，彼此并无分歧，题干说“结论相同”与原文不冲突，不能选 NO。",
            "为什么不是 NOT GIVEN：原文具体点出了研究（A Taiwanese study、other research）并给出了各自的结论，还对“安静是否可取”作了正面回答（advisable that people work in silence），信息充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Some doctors recommend wearing headphones to lower blood pressure.",
          "translation": "一些医生建议佩戴耳机来降低血压。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Lending strength to the argument for headphones at work is evidence that music relaxes our muscles, improves our mood, and may even moderately reduce blood pressure, heart rate and anxiety."
          },
          "synonyms": [
            "“lower blood pressure” 同义替换为原文的 “moderately reduce blood pressure”",
            "“wearing headphones” 与原文的 “headphones at work” 属同一话题范围",
            "“Some doctors recommend” 在原文中没有任何对应：原文只说 evidence（证据）显示 music（音乐）有放松肌肉、改善情绪、降低血压等作用，既没有出现 doctors，也没有出现 recommend"
          ],
          "locatingTip": "定位：题干最好的定位词是血压 blood pressure，这个短语在第 3 段末句出现，且全文仅此一处。确定答案技巧：找到定位句后要核对两件事——主语是谁、有没有“医生建议”这一动作。原文的主语是 music（音乐），说的是音乐有降低血压等生理效果；题干却把主体换成 headphones（耳机），并把“有研究表明音乐可以降低血压”升格为“一些医生建议戴耳机以降低血压”。原文从未出现医生这一群体，也没有任何“建议”的行为，新增的主体与动作在原文中空缺，属于典型的信息缺失，因此判 NOT GIVEN。切记不要因为词面有 blood pressure 就选 YES。",
          "analysis": "第 3 段解释“耳机对效率不好，为何职场仍人人佩戴”。原文先给出经济结构的变化（从农业与制造业转向服务型经济，办公岗位更强调专注、思考与创造力），再指出约七成白领在开放式办公室工作、因此更需要为自己造一个“声音的密闭气泡”，最后用一句证据收尾：“Lending strength to the argument for headphones at work is evidence that music relaxes our muscles, improves our mood, and may even moderately reduce blood pressure, heart rate and anxiety.”（为职场使用耳机提供支持的是这样的证据：音乐能放松肌肉、改善情绪，甚至可能适度降低血压、心率和焦虑）。由此可见，原文讲的是“音乐（music）”的生理作用，且措辞是 may even moderately（甚至可能适度地），本身还带保留语气；题干却写成“一些医生建议（Some doctors recommend）佩戴耳机（wearing headphones）来降低血压”，凭空加入了医生这一施动者与建议这一行为。原文对此毫无交代，既没说有医生这样建议，也没说没有，故答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文的主语是 music 而不是 headphones，且说的是有证据显示音乐可能有此效果（may even moderately），并未出现任何医生（doctors）或建议（recommend）的表述；把“音乐有降低血压的作用”读成“医生建议戴耳机降血压”，多出了原文没有的主体与行为。",
            "为什么不是 NO：原文并没有否认医生会给出这类建议，只是完全没有提及医生这一群体，缺少的是信息而不是与之相反的信息，所以判 NOT GIVEN 而非 NO。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "Nathaniel Baldwin was a respected government researcher.",
          "translation": "纳撒尼尔·鲍德温是一位受人尊敬的政府研究员。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "The letter writer, an eccentric inventor and repairman named Nathaniel Baldwin, from the US state of Utah, made what at the time was an astonishing claim"
          },
          "synonyms": [
            "“Nathaniel Baldwin” 原词复现，全文只出现一次，是最好的定位词",
            "“a respected government researcher” 与原文的 “an eccentric inventor and repairman”（古怪的发明者兼修理工）直接冲突：身份完全不同",
            "“respected” 在原文中没有对应，反而有带贬义色彩的 “eccentric”（古怪的）；原文也没有出现 government（政府）身份，政府一方是收信的美国海军（the US Navy）"
          ],
          "locatingTip": "定位：题干的人名 Nathaniel Baldwin 是大写专有名词且全文唯一，一步定位到第 4 段第 2 句。确定答案技巧：判断题中“身份类”题干（某人是什么职业、什么身份）要回原文核对同位语或定语。原文用同位语写明他是 an eccentric inventor and repairman（古怪的发明者兼修理工），题干的“受人尊敬的政府研究员”与之毫无重叠：职业不符（发明者兼修理工对研究员），评价相反（eccentric 对 respected），归属也不符（他住在犹他州，只是给美国海军写信的人，本人不是政府人员）。信息明确且与题干冲突，因此判 NO。注意不能因为他“给海军发明了耳机”就推断他是政府研究员——这是考生的常识脑补，不是原文信息。",
          "analysis": "第 4 段讲耳机的起源：1910 年美国海军收到一封写在粉蓝相间纸上、用紫色墨水写成的怪信；写信人是一位来自犹他州的古怪发明者兼修理工 Nathaniel Baldwin，他在自家厨房里造出了一种能放大声音的新型耳机，海军要求做声音测试后欣然采用，并在第一次世界大战中用于舰艇无线电通讯。定位句 “The letter writer, an eccentric inventor and repairman named Nathaniel Baldwin, from the US state of Utah, made what at the time was an astonishing claim: he had built, in his kitchen, a new kind of headset that could amplify sound.” 用同位语清楚交代了他的身份：an eccentric inventor and repairman。题干的三个信息点全部落空——职业（researcher 对 inventor and repairman）、评价色彩（respected 对 eccentric）、机构归属（government 对个人发明者，政府一方是作为买家的美国海军）。身份类信息在原文中明确给出且与题干矛盾，故答案是 NO。做题提醒：见到 was a（某人是某身份）这类判断，先回原文找身份同位语，再逐项比职业、评价、所属机构。",
          "traps": [
            "为什么不是 YES：原文明确写作 an eccentric inventor and repairman，职业是“发明者兼修理工”，评价色彩是“古怪的”，与题干“受人尊敬的政府研究员”三项全不符，没有任何支持 YES 的依据。",
            "为什么不是 NOT GIVEN：原文对他的身份、住地、发明地点都有具体交代（inventor and repairman、Utah、in his kitchen），信息是明确给出的，只是与题干相反，因此属于 NO 而不是信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "The effect of the invention of headphones is comparable to the effect of the invention of writing.",
          "translation": "耳机发明所带来的影响可与文字发明所带来的影响相媲美。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "If music evolved as a social glue for the species, as a way to make groups and keep them together, headphones have done what writing and literacy did for language - they made music private."
          },
          "synonyms": [
            "“The effect of the invention of headphones” 对应原文的 “headphones have done what writing and literacy did for language”，即耳机对音乐所起的作用",
            "“is comparable to” 同义替换为原文的 “have done what … did”（做到了文字与读写所做的事），作者用 do what … did 的句型把二者并列",
            "“the invention of writing” 对应原文的 “writing and literacy”（文字与读写能力）"
          ],
          "locatingTip": "定位：题干的两个关键概念是 headphones 与 writing，二者同时出现在第 5 段最后一句，属于同句对比，扫到 writing 就能停。确定答案技巧：本题考查类比关系，判分点是原文有没有把“耳机对音乐的影响”和“文字对语言的影响”并列。原文的句型 “headphones have done what writing and literacy did for language - they made music private” 中，have done what … did 就是“做到了同样的事”的意思，破折号后还给出共同的后果 they made music private（两者都让对象变得私密化：文字让语言私密，耳机让音乐私密），类比关系非常明确，与题干的 comparable to（可比拟）同义，故选 YES。看到 such as、like、do what … did、just as 这类比较结构，基本可以直接判 YES。",
          "analysis": "第 5 段讨论耳机的功能与音乐的社会属性。原文先说明耳机的作用是 “to concentrate a quiet and private sound in the ear of the listener, which is a radical departure from music's social purpose in history”（把安静、私密的声音集中在听者耳中，这与音乐历史上承担的社会功能截然不同），随后引用学者观点说音乐是与舞蹈一同演化、充当“社会黏合剂”的技术，再用考古证据说明音乐的久远（3500 年前的苏美尔乐谱、1995 年在南欧发现的约 4.4 万年前的骨笛），最后落到本题定位句：“If music evolved as a social glue for the species, as a way to make groups and keep them together, headphones have done what writing and literacy did for language - they made music private.”（如果音乐是作为维系群体的社会黏合剂演化而来的，那么耳机就做到了文字与读写对语言所做的事——它们让音乐变得私密了）。句中 have done what writing and literacy did 明确把耳机的作用与文字的作用进行类比，破折号后的 they made music private 进一步点明两者的共同效果（让原本公开的交流对象私人化）。题干的 comparable to（可比拟）正是这一类比关系的同义表述，因此答案是 YES。注意破折号在这里不是转折，而是解释说明，前后方向一致。",
          "traps": [
            "为什么不是 NO：原文用 “headphones have done what writing and literacy did for language” 的句式，把耳机的效果直接等同于文字对语言的效果，二者方向一致、性质相同，不存在否认或矛盾，不能选 NO。",
            "为什么不是 NOT GIVEN：原文明确作出了这一类比，并进一步用 they made music private 点明共同后果，信息是正面给出的，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 32–36 单选题（A / B / C / D）",
      "mode": "per_question",
      "questionRange": {
        "start": 32,
        "end": 36
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "What does the writer suggest about a service economy?",
          "translation": "关于服务型经济，作者暗示了什么？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "One factor to consider is that countries like the USA have moved from a farming and manufacturing economy to a service economy, with an emphasis on jobs in offices that require higher levels of concentration, reflection and creativity."
          },
          "synonyms": [
            "“The work is mentally demanding” 同义替换为原文的 “jobs in offices that require higher levels of concentration, reflection and creativity”（需要更高程度的专注、思考与创造力的办公室工作）",
            "“a service economy” 原词复现，出现在 “moved from a farming and manufacturing economy to a service economy” 中"
          ],
          "locatingTip": "定位：题干关键词 service economy 是原文中的固定搭配，出现在第 3 段第 2 句，扫读时搜 service economy 即可一步锁定。确定答案技巧：找到定义句后提炼服务型经济的特征——原文说它 with an emphasis on jobs in offices that require higher levels of concentration, reflection and creativity，即重点在于需要高度专注、深思与创造力的脑力型办公工作；higher levels of 加 concentration、reflection、creativity 这三项都是智力活动，因此对应选项 A“工作对脑力要求高”。做抽象概括题时，把原文的具体名词（concentration、reflection、creativity）归并为一个上位概念（mentally demanding），就是正确答案的常见写法。",
          "analysis": "第 3 段回答“既然耳机有损效率，为什么职场人还都要戴”。作者列出第一个因素：美国这类国家已从农业与制造业经济转向服务型经济，其重心是 “jobs in offices that require higher levels of concentration, reflection and creativity”（要求更高程度专注、思考与创造力的办公室岗位）；紧接着又提到约七成白领在开放式办公室办公，因此更需要为自己制造一个声音的密闭空间。题干问作者对服务型经济暗示了什么，原文给出的唯一实质特征是这类工作对专注、思考、创造力有更高要求，这三点合起来即为“脑力负担重”，与选项 A“The work is mentally demanding”完全对应，故选 A。",
          "traps": [
            "B 错在“为年轻人提供就业”：原文提到 younger workers 是在第 1 段讲年轻人听音乐，与服务型经济发展毫无关系，属于跨段拼接与张冠李戴。",
            "C 错在“只占国家经济的一小部分”：原文说的是经济结构从农业与制造业转向服务型经济（moved from … to a service economy），强调的是服务业的转型与重心地位，并没有说它规模很小，该项与原文方向相反。",
            "D 错在“工人必须住在市中心”：原文第 3 段确实提到开放式办公室，而“居住地由城市边缘迁往市中心”是第 7 段谈个人音乐设备与公共空间关系时的内容，且那里说的是大众趋势，不是对服务型经济的描述，属跨段错配。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "When the writer mentions the historical evidence for early music, he is",
          "translation": "作者提到早期音乐的历史证据，是为了",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Songs don't leave behind bones, but evidence of musical notation dates back to Sumeria, 3,500 years ago, and in 1995 archaeologists discovered a bone flute in southern Europe estimated to be 44,000 years old."
          },
          "synonyms": [
            "“the historical evidence for early music” 同义替换为原文的 “evidence of musical notation dates back to Sumeria, 3,500 years ago” 与 “a bone flute in southern Europe estimated to be 44,000 years old”",
            "“lending support to the view that music has been important in human history” 同义替换为原文上一句的论断 “Music, together with dance, co-evolved biologically and culturally to serve as a technology of social bonding” 以及本段的 “a social glue for the species”"
          ],
          "locatingTip": "定位：题干关键词 historical evidence 与 early music 指向原文的考古证据，即乐谱与骨笛这两处年代信息，位于第 5 段中部。确定答案技巧：本题考查“举例/引用论证的目的”，必须看证据前后一句的论点。证据之前是学者观点“音乐与舞蹈在生物与文化上共同演化，成为一种社会联结的技术”；证据之后是 “If music evolved as a social glue for the species …”（如果音乐是作为社会黏合剂演化而来的……）。可见两处年代证据都是为“音乐自古就在人类社会中承担重要功能”这一论点服务，因此对应选项 C。做“作者为什么提某事”的题，答案永远落在论点而非细节本身。",
          "analysis": "第 5 段的核心论点是音乐在人类历史上一直是社会联结的手段，耳机则把音乐从公共变成私密。定位句写道：“Songs don't leave behind bones, but evidence of musical notation dates back to Sumeria, 3,500 years ago, and in 1995 archaeologists discovered a bone flute in southern Europe estimated to be 44,000 years old.”（歌曲不会留下骨骼，但乐谱证据可追溯到 3500 年前的苏美尔，1995 年考古学家还在南欧发现了一支估计有 4.4 万年历史的骨笛）。作者先用 Songs don't leave behind bones 承认音乐本身难以留下实物，随即用两项考古发现说明音乐活动极其久远，紧随其后便是结论句 “If music evolved as a social glue for the species, as a way to make groups and keep them together …”（如果音乐是为把群体聚拢、维系在一起而演化成物种的社会黏合剂……）。可见年代证据的作用是给“音乐在人类历史上一直重要”这一观点提供支撑，与选项 C 对应，故选 C。",
          "traps": [
            "A 错在“强调音乐形式的多样性”：原文列举乐谱与骨笛两项证据是为了说明音乐之久远，并未比较或列举音乐样式的丰富程度，属无中生有。",
            "B 错在“表达对考古证据有限的沮丧”：原文的确说 Songs don't leave behind bones，但这是让步性的交代，随即用两项考古发现正面补充，语气是论证而非抱怨，更谈不上 frustration。",
            "D 错在“绘制音乐演化的地理图”：原文只给出苏美尔与南欧两个地点作为年代证据，并未按地域梳理音乐演化的路线，属把定位词误读成论点。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "What does the writer say about the social effects of listening to music through headphones?",
          "translation": "关于用耳机听音乐带来的社会影响，作者说了什么？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The purpose of headphones is to concentrate a quiet and private sound in the ear of the listener, which is a radical departure from music's social purpose in history."
          },
          "synonyms": [
            "“the social effects of listening to music through headphones” 对应原文的 “a radical departure from music's social purpose in history”",
            "“It has changed the traditional role of music in society” 同义替换为原文的 “they made music private” 与 “headphones have done what writing and literacy did for language”",
            "“the traditional role of music” 对应原文的 “music's social purpose in history” 与 “a social glue for the species”"
          ],
          "locatingTip": "定位：题干问的是耳机听音乐的“社会影响”，原文中 social 一词与耳机直接挂钩的句子就在第 5 段首句（music's social purpose in history）以及末句（a social glue for the species）。确定答案技巧：抓住原文的评价性词语 radical departure（彻底的背离）。作者说耳机把安静私密的声音集中到听者耳中，这与音乐在历史上承担的社会功能“截然相反”，并且点明耳机使音乐由公共变为私密（made music private）。把音乐原本的社会黏合功能变成私人享受，正是“改变音乐在社会中的传统角色”，对应选项 D。做本题要能把 departure、made music private 这类表述归并为“角色变化”。",
          "analysis": "第 5 段首句 “The purpose of headphones is to concentrate a quiet and private sound in the ear of the listener, which is a radical departure from music's social purpose in history.”（耳机的目的是把安静而私密的声音集中在听者耳中，这与音乐在历史上所承担的社会功能是彻底的背离）。随后引用《音乐的起源》中“音乐与舞蹈共同演化，作为一种社会联结的技术”的论述，并用乐谱与骨笛证明音乐自古以来就是维系群体（a social glue for the species）的手段；末句指出耳机 “made music private”（让音乐私密化）。两句合起来表达的是：音乐原本是社会性的、公开的黏合剂，耳机使它变成个人化的私密体验，这就是音乐在社会中角色与功能的改变，与选项 D“It has changed the traditional role of music in society”完全吻合，故选 D。",
          "traps": [
            "A 错在“使听音乐的人变少了”：原文第 1 段恰恰说近半数年轻员工都在戴耳机听音乐、第 7 段甚至说很多人只是戴着不播放，人数是增多的趋势，该项与原文相反。",
            "B 错在“增加了人们参加音乐活动的参与度”：原文强调的是耳机把音乐变成私密体验、让人与他人隔绝（separating them from other people），与社会性的音乐活动参与无关，方向相反。",
            "C 错在“减少了全球音乐风格的多样性”：原文第 5 段谈的是音乐的社会功能演变，全篇没有任何关于全球音乐风格趋同或减少的论述，属无中生有。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "What does the writer say about personal independence?",
          "translation": "关于个人独立，作者说了什么？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Marche is right; wealth can buy – and modern technology can deliver – personal independence, and it is this that people have always sought."
          },
          "synonyms": [
            "“Personal independence is something that can be purchased” 同义替换为原文的 “wealth can buy … personal independence”（财富可以买到个人独立）",
            "“personal independence” 原词复现，本段出现两次（personal independence and privacy、personal independence）",
            "原文同时用 “modern technology can deliver”（现代技术可以带来）补充说明获得途径，与 buy 一并支撑“可被购买/获得”这一结论"
          ],
          "locatingTip": "定位：题干关键词 personal independence 在第 6 段连续出现，且该段末尾的 Marche is right 是作者的明确表态句，直接锁定该句。确定答案技巧：作者认同（Marche is right）之后的句子就是本题答案句。原文写 wealth can buy – and modern technology can deliver – personal independence，即财富能买到、现代技术能实现个人独立，与选项 B“Personal independence is something that can be purchased”直接对应。两个破折号中间插入的是并列成分，不影响主干 wealth can buy personal independence 的判断；破折号不要误读为转折。",
          "analysis": "第 6 段引述专栏作家 Stephen Marche 的观点：与人的隔离是普通美国人最舍得花钱去实现的事情之一，这是“长期存在的民族性独立渴望的副产品”；随后作者表态 “Americans are not alone in their desire for personal independence and privacy.”（美国人并非唯一渴望个人独立与隐私的人），并在末句给出本题定位句 “Marche is right; wealth can buy – and modern technology can deliver – personal independence, and it is this that people have always sought.”（Marche 说得对；财富可以买到、现代技术可以带来个人独立，而人们一直以来追求的就是这个）。主干“wealth can buy … personal independence”就是选项 B 的原意，破折号内的 modern technology can deliver 只是补充另一条获得途径，不改变“个人独立可以买到”的结论，故选 B。",
          "traps": [
            "A 错在“美国人对个人独立的渴望是独一无二的”：原文明确写 Americans are not alone in their desire for personal independence and privacy，直接否定了“独有、独一无二”的说法。",
            "C 错在“追求个人独立是近期现象”：原文用 it is this that people have always sought（人们一直以来追求的就是这个）以及 a long-standing national appetite（长期存在的渴望）表明这是由来已久的事，与“近期现象”相反。",
            "D 错在“个人独立破坏社会联系”：原文只讲人们愿意花钱换取与他人隔离、财富与技术可以实现个人独立，并未评价它对社会联系具有破坏作用，属于无中生有的价值判断。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "Why does the writer quote Jonah Lehrer in the last paragraph?",
          "translation": "作者在最后一段引用乔纳·莱勒的话，是为了什么？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "“When our minds are at ease, we're more likely to direct the spotlight of attention inward,” Jonah Lehrer wrote in his book Imagine: How Creativity Works."
          },
          "synonyms": [
            "“Why does the writer quote” 对应原文的引用结构 “Jonah Lehrer wrote in his book Imagine: How Creativity Works”",
            "“To support the writer's own view” 对应作者自己的论断以及引语中与之一致的说法：“music causes people to relax and reflect and pause” 与 “we're more likely to direct the spotlight of attention inward”",
            "“the spotlight of attention inward” 与作者前一句的 “our attention radiates outward … rather than inward” 形成正反呼应，引用起到印证作者观点（with music 时注意力转向内在）的作用"
          ],
          "locatingTip": "定位：题干给出的专有名词 Jonah Lehrer 是全文唯一人名之一，一步定位到第 8 段后半。确定答案技巧：解“作者为何引用”类题，必须看引语前后的作者自述。引用之前作者已经提出自己的观点：音乐能让人放松、沉思、暂停，而在专注时刻注意力是向外的；引用之后引语说“当心智放松时，我们更可能把注意力投向内在”，并补一句“答案其实一直都在，只是我们没在听”。可见莱勒的话是被用来印证作者关于“音乐使注意力转向内在、激发灵感”的主张，属于为自己的观点提供佐证，对应选项 A。",
          "analysis": "第 8 段是全文收束，作者先重申科学界虽认为耳机有损效率，人们仍在工作中佩戴，原因在于音乐让人 relax and reflect and pause（放松、沉思、暂停），而这种效果无法被逐分钟的效率指标衡量；接着指出在极度专注时注意力是向外的（our attention radiates outward, toward the problem, rather than inward, on how to solve the problem）；随后引用本题定位句 “However, with music 'When our minds are at ease, we're more likely to direct the spotlight of attention inward,' Jonah Lehrer wrote in his book Imagine: How Creativity Works. 'The answers have been there all along. We just weren't listening.'”（在音乐作用下，“当我们的心智处于放松状态时，更可能把注意力的聚光灯转向内在”，Jonah Lehrer 在《想象：创造力如何运作》一书中写道。“答案其实一直都在，只是我们没在听”）。引语的落点与作者前文观点完全一致：音乐带来放松，从而让注意力由外在问题转向内在思考，帮助人听见自己。引用的功能就是为作者自己的主张提供佐证，故选 A。",
          "traps": [
            "B 错在“为了引人注意一本关于音乐的权威著作”：作者的落点在于莱勒这句话的内容（心智放松使注意力内转）与自己的观点一致，而不是提醒读者去关注某本书；书只是出处信息。",
            "C 错在“唤起人们对倾听能力丧失的警觉”：引语末句 We just weren't listening 是比喻，指此前没有注意到内在的答案，并非讨论人们听音乐或倾听他人的能力下降，属曲解比喻义。",
            "D 错在“说明音乐让人彼此更亲近”：全篇恰恰相反，耳机的作用是让人彼此隔离（separating them from other people），第 8 段强调的是向内听自己（helping us listen to ourselves），与“拉近人际距离”方向相反。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 37–40 摘要填空（用词库 A–I 选词填空）",
      "mode": "per_question",
      "questionRange": {
        "start": 37,
        "end": 40
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "Dr Michael Bull believes that listening to music through headphones has changed the 37 ________ the wearers of headphones have with public spaces.",
          "translation": "迈克尔·布尔博士认为，通过耳机听音乐已经改变了戴耳机的人与公共空间之间的 ________。",
          "answer": "B",
          "wordClass": "名词（可数，单数，抽象名词；受定冠词 the 限定，作 changed 的宾语，其后为省略了 that 的定语从句 the wearers of headphones have with public spaces，故选 B relationship）",
          "locating": {
            "paragraph": "7",
            "quote": "Dr Michael Bull, an expert on personal music devices from the University of Sussex in the UK, has repeatedly made the larger point that personal music devices change how we relate to public spaces."
          },
          "synonyms": [
            "“has changed the relationship … have with public spaces” 同义替换为原文的 “change how we relate to public spaces”（改变了我们与公共空间发生关联的方式）",
            "“Dr Michael Bull believes” 对应原文的 “Dr Michael Bull … has repeatedly made the larger point”",
            "“listening to music through headphones” 对应原文的 “personal music devices”（个人音乐设备，即耳机一类的听歌设备）"
          ],
          "locatingTip": "定位：题干给出专有人名 Dr Michael Bull，这是全文唯一出现该姓名的地方，直接定位到第 7 段首句。确定答案技巧：原文说个人音乐设备 “change how we relate to public spaces”，其中 relate to（与……发生关联）是动词，题干把它改写成名词结构 “the [37] … have with public spaces”，需要一个表示“关系”的名词填入，词库中只有 B relationship 能构成 “the relationship the wearers have with public spaces” 这一搭配。注意词库里的 obstacles、barriers 虽也是名词，但都不能与介词搭配 have with public spaces，语法上即可排除。",
          "analysis": "第 7 段引述英国萨塞克斯大学个人音乐设备专家 Michael Bull 的观点：定位句 “Dr Michael Bull, an expert on personal music devices from the University of Sussex in the UK, has repeatedly made the larger point that personal music devices change how we relate to public spaces.”（Michael Bull 反复强调一个更宏观的观点：个人音乐设备改变了我们与公共空间的关联方式）。摘要句把原句的动词短语 change how we relate to public spaces 名词化，改写为 “has changed the [37] the wearers of headphones have with public spaces”，空格处需要填表示“关系”的名词，与 have with public spaces 搭配，因此答案是 B relationship。选项里其他名词与 have … with 的搭配均不成立：obstacles、barriers 通常用 between … and … 或 to 搭配，disapproval、courtesy、difficulty 也不能与 have with public spaces 构成合理语义。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Living in the centre of cities is becoming popular, as people become less keen on living in the 38 ________.",
          "translation": "住在市中心正变得流行，因为人们越来越不愿意住在 ________。",
          "answer": "E",
          "wordClass": "名词（复数，地点名词；位于介词 in 与定冠词 the 之后，作介词 in 的宾语，词库中 E suburbs 只以复数形式出现）",
          "locating": {
            "paragraph": "7",
            "quote": "Controlling our public spaces is more important now that more people are moving from the edges of cities to live in urban centres."
          },
          "synonyms": [
            "“Living in the centre of cities is becoming popular” 同义替换为原文的 “more people are moving from the edges of cities to live in urban centres”",
            "“less keen on living in the suburbs” 对应原文的 “moving from the edges of cities”（搬离城市边缘地区）",
            "“urban centres” 与题干 the centre of cities 一一对应，都指城市中心"
          ],
          "locatingTip": "定位：题干关键词 the centre of cities 与原文 urban centres 对应，该信息出现在第 7 段第 2 句，紧跟在 Bull 的观点之后。确定答案技巧：原文说人们 moving from the edges of cities to live in urban centres，搬离的是“城市边缘（the edges of cities）”，迁入的是“城市中心（urban centres）”；题干把“搬离某地”反向表述为“不愿住在某地（less keen on living in …）”，空格就问那被搬离的地方，词库中与城市边缘对应的是 E suburbs（郊区）。做题时要抓住题干 less keen on 与原文 from 的方向对应：from 说明这是被离开的地点，不是被迁入的中心区。",
          "analysis": "第 7 段第 2 句 “Controlling our public spaces is more important now that more people are moving from the edges of cities to live in urban centres.”（如今更多人口从城市边缘迁往城市中心居住，因此对公共空间的控制变得更为重要）。摘要句把这层意思展开为“住在市中心变得流行（Living in the centre of cities is becoming popular），因为人们越来越不愿住在 [38]”，其中 the centre of cities 对应 urban centres，less keen on living in 对应原文的迁出方向 from the edges of cities，故空格应填表示“城市边缘地带”的词，即 E suburbs（郊区）。词库中的 D countryside（乡村）虽也是郊野类地点，但原文明说是城市本身的边缘（the edges of cities）而非乡村，故不能选 D。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "In densely populated city centres, headphones form 39 ________ that isolate people from fellow citizens and from their environment.",
          "translation": "在人口密集的市中心，耳机构成了一种 ________，把人从其他市民和周围环境中隔离开来。",
          "answer": "G",
          "wordClass": "名词（可数，复数；作谓语动词 form 的宾语，并与定语从句中的复数谓语 isolate 保持数的一致，故用复数 barriers）",
          "locating": {
            "paragraph": "7",
            "quote": "Headphones create shields for wearers, separating them from other people and their surroundings."
          },
          "synonyms": [
            "“headphones form barriers” 同义替换为原文的 “Headphones create shields”（耳机为佩戴者造出屏障）",
            "“isolate people from fellow citizens and from their environment” 同义替换为原文的 “separating them from other people and their surroundings”",
            "“In densely populated city centres” 对应原文的 “the urban space, the more it's inhabited” 所描述的拥挤城市空间"
          ],
          "locatingTip": "定位：题干关键词 isolate 与 environment 指向原文的 separating … from other people and their surroundings，该句在第 7 段中后部，紧跟 Bull 关于城市空间的引语。确定答案技巧：原文用 create shields（制造屏障）表示耳机的隔离作用，shields 与词库中的 G barriers（屏障、隔阂）语义对应；再核对语法线索——题干谓语是 form，后面跟 that isolate（复数从句谓语），说明空格必须是可数名词复数，barriers 正好符合，而 H obstacles 虽是近义名词，但 obstacles 多指具体的“障碍物、绊脚石”，与 isolate … from 的语境不如 barriers 贴切（不过 obstacles 复数形式也满足语法），解题的关键区分点是 shields 所对应的抽象屏障义与 barriers 一致。",
          "analysis": "第 7 段在引用 Bull 关于城市空间的看法后写道 “Headphones create shields for wearers, separating them from other people and their surroundings.”（耳机为佩戴者制造出屏障，把他们与他人及周围环境隔开）。摘要句把它改写为 “headphones form [39] that isolate people from fellow citizens and from their environment”，其中 form 对应 create，isolate … from 对应 separating … from，fellow citizens 对应 other people，their environment 对应 their surroundings，空格处需要的是 shields 的同义名词，即 G barriers（屏障）。语法上，空格前无冠词而谓语为复数形式（that isolate），说明填入的是可数名词复数，barriers 满足这一要求。词库中 H obstacles 虽同为“障碍”义，但更偏向需要绕行的具体障碍物，且本题的考点是“屏蔽外界、制造隔绝”的抽象屏障义，故选 G。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "Wearers of headphones are treated with 40 ________ that other people do not receive.",
          "translation": "戴耳机的人会受到别人得不到的 ________ 对待。",
          "answer": "A",
          "wordClass": "名词（不可数，抽象名词；位于介词 with 之后，作介词 with 的宾语，与被动结构 are treated 构成 be treated with 的固定搭配）",
          "locating": {
            "paragraph": "7",
            "quote": "Headphones have their own rules of good manners; they are like wearing a “Do not disturb” sign. We assume that people wearing them are busy and we should respect their privacy, so now people wear them to appear busy."
          },
          "synonyms": [
            "“are treated with [40]” 同义替换为原文的 “We assume that people wearing them are busy and we should respect their privacy”",
            "“courtesy” 同义替换为原文的 “rules of good manners”（礼节、礼貌准则）与 “should respect their privacy”（应当尊重其隐私）",
            "“that other people do not receive” 对应原文的 “Headphones have their own rules of good manners”，即这种礼遇只为戴耳机者保留"
          ],
          "locatingTip": "定位：题干关键词 treated with（受到……对待）对应原文的 rules of good manners 与 should respect their privacy，位于第 7 段后部。确定答案技巧：原文说耳机“有自己的礼貌准则”，戴着它就像挂出“请勿打扰”的牌子，人们会认为佩戴者很忙、应当尊重其隐私；题干把这一整套“被礼貌对待、被尊重”的现象概括为 are treated with [40]，词库中表示礼貌、礼遇的名词是 A courtesy，与 good manners 直接对应，故选 A。注意与 I disapproval（不赞成）区分：原文的情绪是体谅与尊重而非反感，方向相反。",
          "analysis": "第 7 段在讲耳机如何隔离佩戴者之后写道：“Headphones have their own rules of good manners; they are like wearing a 'Do not disturb' sign. We assume that people wearing them are busy and we should respect their privacy, so now people wear them to appear busy.”（耳机自有一套礼貌准则；戴上它就像挂出“请勿打扰”的牌子。我们会认为佩戴者正忙，应当尊重他们的隐私，于是如今人们戴耳机是为了显得忙碌）。摘要句 “Wearers of headphones are treated with [40] that other people do not receive”（戴耳机者受到别人得不到的某种对待）概括的正是这种“别人会替他们着想、不去打扰”的礼遇，而 that other people do not receive 对应原文所谓“耳机自有的礼貌准则”。词库中 A courtesy（礼貌、礼遇）与 good manners 及 respect one's privacy 完全对应，且 be treated with courtesy 是固定搭配，故答案是 A。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
