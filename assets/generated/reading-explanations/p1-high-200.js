(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-200", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-200",
  "meta": {
    "examId": "p1-high-200",
    "title": "Australia’s Airborne Dentists 澳洲飞行牙医",
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
          "stem": "Many of the RFDS doctors work as volunteers.",
          "translation": "许多 RFDS 医生都是以志愿者身份工作的。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The RFDS provides free medical care to people who live, work or travel in remote and regional parts of Australia."
          },
          "synonyms": [
            "“RFDS doctors” 对应原文的 “The RFDS provides free medical care” 以及同段反复出现的 doctors and nurses，指同一批医护服务人员",
            "“work as volunteers” 在原文中找不到任何对应表达：原文只交代服务是免费的（free medical care），从未说明医护人员是志愿者还是受薪雇员",
            "“Many of” 这一数量限定同样没有依据：原文没有提及志愿者的存在，更谈不上人数多少"
          ],
          "locatingTip": "定位：题干的核心词是专有缩写 RFDS 与 doctors，回原文扫读第 1 段，第 3、4、5 句连续出现 The RFDS、medical care 与 doctors and nurses，一步锁定第 1 段。确定答案技巧：本题的关键词是 volunteers（志愿者）。原文对 RFDS 的介绍集中在“免费医疗（free medical care）”“非营利机构（non-profit organisation）”“世界上同类服务中最古老、规模最大的空中医疗服务”“自 1928 年起用小型飞机运送医生和护士”这几点上，全篇从未出现 volunteer、voluntary、unpaid 之类的词。诊断这类题要区分“服务不向病人收费”和“医生本人不收报酬”两件事：前者原文说了，后者原文没有交代，属于信息缺失，因此判 NOT GIVEN。",
          "analysis": "第 1 段介绍 RFDS 的由来与性质：偏远地区的澳大利亚人就医困难，于是成立了 RFDS 这类机构；“The RFDS provides free medical care to people who live, work or travel in remote and regional parts of Australia.”（RFDS 为在澳大利亚偏远和地区性区域生活、工作或旅行的人提供免费医疗）；“This non-profit organisation is the oldest and largest airborne health service of its kind in the world, and since 1928 it has used small aircraft to send doctors and nurses to some of Australia's most far-away communities.”（这家非营利机构是世界上同类空中医疗服务中最古老、规模最大的，自 1928 年起就用小型飞机把医生和护士送往澳大利亚最偏远的社区）。与题干可能挂钩的只有 free（免费）与 non-profit（非营利）两个词，但它们描述的是“服务不收费”和“机构不以营利为目的”，属于机构性质与收费方式，并不等于“许多医生是无偿志愿者”。全文其余九段分别讲牙医服务的内容与困难（自带设备、出诊频率低、假牙难做、提供宣教与护齿套、加氟水等），同样没有一句涉及医护人员的报酬或志愿身份。题干信息在原文中不存在，故判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：非营利与免费医疗说明的是机构性质和病人无需付费，不能等同于“医生本人做志愿者”；原文从未出现 volunteer 一类词，也没有任何关于医生薪酬、雇佣方式的信息，无法支持 TRUE。",
            "为什么不是 FALSE：判 FALSE 需要原文给出相反信息，例如说明医生是领薪雇员、并非志愿者。原文对此完全沉默，只是没有提及，因此不能因为“看起来不像志愿者”就判 FALSE。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "RFDS dentists make trips to outback communities each month.",
          "translation": "RFDS 的牙医每个月都会前往内陆社区。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "RFDS dentists might only visit a community once every few months, or sometimes once per year."
          },
          "synonyms": [
            "“make trips to … communities” 同义替换为原文的 “visit a community”",
            "“each month” 与原文的 “once every few months, or sometimes once per year” 直接冲突：原文说每隔几个月才一次，有时一年才一次",
            "“outback communities” 对应原文同段首句的 “People in remote areas”，也对应第 1 段的 “outback Australian communities”"
          ],
          "locatingTip": "定位：题干关键词是 dentists 与表示频率的 each month，回原文找讲“牙医多久去一次”的句子，落在第 3 段第 2 句，句中 once every few months 是标志性频率表达。确定答案技巧：本题考频率，判分点就是原文给出的时间间隔。原文写 “might only visit a community once every few months, or sometimes once per year”，周期是几个月甚至一年；题干却写成 each month（每月一次），频率明显更高，属于事实冲突，因此判 FALSE。看到 every … / once a … 这类频率表达，一定要把周期数字与原文逐一核对，不要因为“都会定期去”就判 TRUE。",
          "analysis": "第 3 段开头两句：“People in remote areas have very infrequent visits by health staff. RFDS dentists might only visit a community once every few months, or sometimes once per year.”（偏远地区的人很少得到医护人员来访。RFDS 的牙医可能每隔几个月才去一个社区一次，有时一年只去一次）。题干把 visit a community 改写成 make trips to outback communities，把 once every few months / once per year 改写成 each month。原文用 infrequent（频繁程度很低的）概括医护来访，并给出两个具体周期，重点都在“间隔长”；each month 表示每月一次，是明显更短的周期。紧接着的句子还补充说明：“Because of infrequent dentist visits, patients in these areas often need to put up with their dental problems before they can get treatment.”（正因为牙医来访稀少，这些地区的病人常常得先忍着牙病才能治疗），再一次印证原文强调的是“来访稀少”。题干与原文在频率上正面对立，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文用 infrequent 描述医护来访，并明确给出 once every few months 甚至 once per year 的周期，都比 each month 长得多，题干与原文相悖。",
            "为什么不是 NOT GIVEN：原文对牙医来访频率有非常具体的交代（每几个月一次、有时一年一次），属于已经给出且与题干冲突的信息，不是没有提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "RFDS dentists are accompanied on their journeys to remote areas by a dental nurse.",
          "translation": "RFDS 的牙医在前往偏远地区的途中有一名牙科护士随行。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In recent years, the RFDS has also started to fly dentists to regional Australia."
          },
          "synonyms": [
            "“on their journeys to remote areas” 同义替换为原文的 “fly dentists to regional Australia”，即用飞机把牙医送往偏远地区",
            "“a dental nurse” 在原文中完全没有对应：原文只说运送 dentists，从未提到有牙科护士随行",
            "第 1 段虽出现 “send doctors and nurses”，但那讲的是 1928 年以来 RFDS 送医送护的总体服务，既未说明护士与牙医同行，也不是 dental nurse"
          ],
          "locatingTip": "定位：题干关键词是 dentists 加一个职业名词 dental nurse，回原文搜索 nurse。nurse 只在第 1 段出现两处：第 2 句的 “doctors, nurses and dentists”（泛指偏远居民难以就近获得医护帮助）与末句的 “send doctors and nurses”，而讲牙医出诊的句子在第 2 段首句。确定答案技巧：核对原文讲到牙医出诊时的“人”和“物”——第 4 段详细列出牙医必须自带的东西（钻头、牙科椅、便携 X 光机、电脑），全是设备，没有任何随行人员；第 1 段的 nurses 属于 RFDS 长期以来送医送护的笼统描述，护士的身份与是否与牙医同机都没有交代。题干凭空加入“牙科护士随行（accompanied … by a dental nurse）”这一细节，原文既没有支持也没有否定，属于信息缺失，因此判 NOT GIVEN。",
          "analysis": "第 2 段首句：“In recent years, the RFDS has also started to fly dentists to regional Australia.”（近年来，RFDS 也开始用飞机把牙医送到地区性的澳大利亚）。全篇交代牙医出诊时由谁前往、有无随行人员的只有这一处，说的是 fly dentists（运送牙医）；第 4 段虽出现 the small planes that transport dentists，那是在讲机舱空间与设备，同样没有随行人员的说明。全篇出现 nurse 的地方都在第 1 段，除第 2 句的 “doctors, nurses and dentists”（泛指偏远居民难以就近获得医护帮助）外，最贴近题干的是末句：“since 1928 it has used small aircraft to send doctors and nurses to some of Australia's most far-away communities.”（自 1928 年起，它就用小型飞机把医生和护士送往澳大利亚最偏远的社区）。这句描述的是 RFDS 近百年来送医送护的总体服务，护士是一般护士还是牙科护士、是否与牙医同机，原文均未交代。第 4 段在说明出诊困难时也只是罗列设备，并未提到人员配置。题干加入了“牙科护士随行”这一原文没有的信息，故答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只在第 1 段泛泛提到过 nurse，从未说明牙医出诊有牙科护士随行；把“RFDS 会送护士”理解为“牙医身边一定有牙科护士”是超出原文的推断。",
            "为什么不是 FALSE：原文没有说牙医单独出诊，也没有说没有护士，对这一信息完全沉默，缺少相反证据就不能判 FALSE。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "RFDS dentists must provide a wide range of dental services.",
          "translation": "RFDS 的牙医必须提供种类繁多的牙科服务。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "While dentists in town or city centres can specialise in certain types of treatment, RFDS dentists need to be ‘all-rounders'. They need to be able to do all kinds of dental procedures, as they don't have the ability to refer patients to more specialised dentists."
          },
          "synonyms": [
            "“must provide” 同义替换为原文的 “need to be able to do”，都表示职责上的必须",
            "“a wide range of dental services” 同义替换为原文的 “all kinds of dental procedures”，并由 “all-rounders”（多面手）进一步强化覆盖范围之广",
            "这种“必须”还有原文的原因句作支撑：“as they don't have the ability to refer patients to more specialised dentists”（因为他们无法把病人转给更专科的牙医），所以什么项目都得自己做"
          ],
          "locatingTip": "定位：题干关键词是 dentists 与 a wide range of services，回原文找描写牙医工作范围的段落，第 5 段首两句同时出现 specialists（专科医生）与 ‘all-rounders'（多面手），是最直接的落点。确定答案技巧：原文用 While 构成对照——城镇或城市中心的牙医可以专精于某类治疗（specialise in certain types of treatment），而 RFDS 牙医必须做“多面手”，要能做 all kinds of dental procedures；随后给出原因：他们无法把病人转介给专科医生。必须覆盖各种牙科操作，与题干的 must provide a wide range of dental services 完全一致，故选 TRUE。",
          "analysis": "第 5 段首两句是本题的落点：“While dentists in town or city centres can specialise in certain types of treatment, RFDS dentists need to be ‘all-rounders'. They need to be able to do all kinds of dental procedures, as they don't have the ability to refer patients to more specialised dentists.”（城镇或市中心的牙医可以专精于某些类型的治疗，而 RFDS 的牙医则必须是“多面手”。他们需要能做各种牙科操作，因为他们无法把病人转介给更专科的牙医）。原文用 While 构成对比：一边是可以挑着做的专科牙医，一边是什么都得做的 RFDS 牙医。all kinds of dental procedures（各种牙科操作）对应题干的 a wide range of dental services；need to be able to 表示职责要求，对应题干的 must provide。原因从句进一步说明这种广覆盖不是可选项而是必需——没有转诊渠道，只能自己承担全部治疗。全段下文讲即使身为多面手也有难做的项目（假牙需要多次复诊、不现实），恰恰印证“服务范围广”这一特点。三处对应方向一致，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确把 RFDS 牙医定义为必须做 all kinds of dental procedures 的 all-rounders，与题干“必须提供种类繁多的服务”方向完全一致，没有任何冲突信息。",
            "为什么不是 NOT GIVEN：原文不仅点出服务覆盖面广这一事实，还解释了原因（无法转诊给专科医生），信息完整明确，不属于未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Rural dental patients are more informed about oral hygiene than urban patients.",
          "translation": "农村的牙病患者比城市患者更了解口腔卫生。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Because there aren't a lot of dental services in remote areas, people living in these areas also receive less education about good dental hygiene than their city counterparts do."
          },
          "synonyms": [
            "“rural dental patients” 同义替换为原文的 “people living in these areas”（即 remote areas 的居民）",
            "“urban patients” 同义替换为原文的 “their city counterparts”",
            "“are more informed about” 与原文的 “receive less education about” 直接冲突：原文说偏远地区居民得到的教育更少，题干却称他们懂得更多"
          ],
          "locatingTip": "定位：题干是比较结构 more informed … than，关键词是 oral hygiene 与 urban/city，回原文找同时涉及口腔卫生教育和城乡对比的句子，即第 7 段首句，句中 less education … than their city counterparts 是标准比较句式。确定答案技巧：比较题的命门是方向。原文用 less education 说明偏远地区居民在牙齿卫生方面受到的教育少于城市居民；题干把方向颠倒，说农村患者 more informed（了解得更多）。一个“更少”、一个“更多”，方向相反，答案必为 FALSE。做题时一旦看到 than，先在原文找到对应的 than 结构，再确认谁多谁少。",
          "analysis": "第 7 段首句：“Because there aren't a lot of dental services in remote areas, people living in these areas also receive less education about good dental hygiene than their city counterparts do.”（由于偏远地区牙科服务不多，这些地区的居民在良好牙齿卫生方面所受到的教育也比城市居民少）。句子包含两层信息：原因（牙科服务少）与结果（口腔卫生教育少于城市居民）。紧接着的句子进一步说明差距：“Australians in very remote communities might not be aware of things that people in cities take for granted, such as the importance of daily tooth brushing.”（极偏远社区的澳大利亚人可能不了解城市人习以为常的事情，例如每天刷牙的重要性）。两处都在强调偏远地区居民的口腔卫生知识更欠缺。题干却断言 rural dental patients are more informed about oral hygiene than urban patients，把原文的 less（更少）换成 more（更多），比较方向完全相反，因此答案是 FALSE。",
          "traps": [
            "为什么不是 TRUE：原文明确写 receive less education（接受的教育更少），并补充说他们可能不了解城市人习以为常的每日刷牙的重要性，题干“更了解”与原文正好相反。",
            "为什么不是 NOT GIVEN：原文既做了城乡对比，又给出比较结果（less … than their city counterparts），信息明确且与题干冲突，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "RFDS dentists educate patients about good eating habits.",
          "translation": "RFDS 的牙医会向病人宣导良好的饮食习惯。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "As well as treating patients, RFDS dentists try to focus on preventative oral health and educate their patients on good oral hygiene, such as tooth brushing and flossing."
          },
          "synonyms": [
            "“educate patients” 与原文 “educate their patients on good oral hygiene” 中的 educate 原词复现",
            "“good eating habits” 在原文中没有对应：原文用 such as 举出的宣导内容是 “tooth brushing and flossing”（刷牙与使用牙线），都属于口腔清洁行为，不是饮食习惯",
            "第 7 段提到的 “the importance of daily tooth brushing” 同样是清洁习惯，也与饮食无关"
          ],
          "locatingTip": "定位：题干关键词是 educate 与 eating habits，回原文搜索 educate，落在第 8 段首句；同一句用 such as 列举了宣导的具体内容，正是判断依据所在。确定答案技巧：这类题要盯住 such as 后面的例证范围。原文说牙医宣导的是 good oral hygiene（良好口腔卫生），例子是 tooth brushing and flossing（刷牙、用牙线），全篇再没有出现 diet、food、sugar 等与饮食相关的词（eating 只作为 treating 的一部分出现，并非独立的饮食用词）。题干把“口腔清洁习惯”换成“饮食习惯（good eating habits）”，超出了原文列举的范围；原文既没说牙医讲饮食，也没说他们不讲，属于信息缺失，因此判 NOT GIVEN。不要因为“饮食影响牙齿健康”属于常识，就替原文补上这一条。",
          "analysis": "第 8 段首句：“As well as treating patients, RFDS dentists try to focus on preventative oral health and educate their patients on good oral hygiene, such as tooth brushing and flossing.”（除了治疗病人，RFDS 的牙医还努力把重点放在预防性口腔健康上，并教育病人养成良好的口腔卫生，例如刷牙和使用牙线）。句中 educate … on good oral hygiene 与题干 educate patients about good … habits 句式相近，但宾语核心词不同：原文是 oral hygiene（口腔卫生），such as 之后给出的例证是 tooth brushing and flossing；题干换成了 eating habits（饮食习惯）。原文全篇涉及的“宣导内容”只有第 7 段的 daily tooth brushing 与第 8 段的 tooth brushing and flossing，都属于口腔清洁行为；第 9 段虽提到使用含氟牙膏刷牙，也是清洁与防龋措施，没有饮食建议。因此“牙医宣导饮食习惯”这一信息在原文中并不存在，答案只能是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文用 such as 限定了宣导内容——刷牙与使用牙线，全篇没有出现 diet、food、sugar 等饮食相关词，无法证明牙医讲饮食习惯。",
            "为什么不是 FALSE：原文并没有说牙医不提供饮食方面的建议，只是没有提及，缺少相反信息，因此不能判 FALSE。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Urban Australians generally have better teeth because their water is treated.",
          "translation": "澳大利亚城市居民牙齿普遍更好，因为他们的水经过了处理。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "City dwellers in Australia use water supplies that have been fluoridated, and their rates of tooth decay are lower because of this."
          },
          "synonyms": [
            "“Urban Australians” 同义替换为原文的 “City dwellers in Australia”",
            "“have better teeth” 同义替换为原文的 “their rates of tooth decay are lower”（龋齿率更低，即牙齿状况更好）",
            "“because their water is treated” 同义替换为原文的 “water supplies that have been fluoridated” 与 “because of this”，把“加氟处理”概括为“经过处理（treated）”"
          ],
          "locatingTip": "定位：题干关键词是 urban/city 与 water，回原文找讲城市供水的句子，第 9 段第 2 句同时出现 City dwellers、water supplies、fluoridated，一步锁定。确定答案技巧：本题考因果关系，题干结构是“结果 because 原因”。原文用 and 连接两件事：城市居民使用加氟水（that have been fluoridated），他们的龋齿率因此更低（are lower because of this），因果关系由 because of this 明确标出。题干把“加氟水”概括为“水经过处理”，把“龋齿率更低”概括为“牙齿更好”，并把 because of this 改写为 because，两处概括都合理且方向一致，故选 TRUE。",
          "analysis": "第 9 段开头三句：“Adding fluoride to water supplies has been proven to reduce the incidence of tooth decay in many parts of the world. City dwellers in Australia use water supplies that have been fluoridated, and their rates of tooth decay are lower because of this. In remote areas, it is not practical to fluoridate drinking water supplies, and so people living in these areas are more subject to tooth decay.”（在供水系统中加氟已被证明能在世界许多地方降低龋齿发生率。澳大利亚的城市居民使用经过加氟处理的供水，他们的龋齿率因此更低。而在偏远地区给饮用水加氟并不现实，因此这些地区的人更容易患龋齿）。题干包含三部分：对象 urban Australians 对应 city dwellers in Australia；结果 better teeth 对应 rates of tooth decay are lower（龋齿率更低即牙齿更好）；原因 their water is treated 对应 water supplies that have been fluoridated。三部分一一对应，且原文用 because of this 明确指出因果，与题干的 because 一致。treated 是对 fluoridated 的合理概括——第 9 段通篇讲的就是加氟这一具体的水处理方式，不存在范围或程度上的偏差，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确写出城市居民使用加氟水，且他们的龋齿率因此更低，因果关系由 because of this 标明，与题干完全吻合。",
            "为什么不是 NOT GIVEN：原文既给出对象与结果（龋齿率更低），也给出原因（加氟水）并点明因果，信息完整，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "need to bring equipment including 8 ________ for records",
          "translation": "需要携带设备，其中包括用于记录病历的 ________。",
          "answer": "computers",
          "wordClass": "名词（复数；紧跟介词 including 之后作其宾语，是对笔记中 equipment 的举例；原文以复数形式出现，指牙医随身携带、用于记录病人治疗情况的设备）",
          "locating": {
            "paragraph": "4",
            "quote": "This includes drills, dentists' chairs, portable X-ray machines, and computers for keeping track of patients' treatments."
          },
          "synonyms": [
            "“for records” 同义替换为原文的 “for keeping track of patients' treatments”（用于追踪记录病人的治疗情况）",
            "“equipment including …” 同义替换为原文的 “This includes …”，其列举项为 drills、dentists' chairs、portable X-ray machines 和 computers",
            "“need to bring” 同义替换为原文的 “dentists have to bring everything with them”"
          ],
          "locatingTip": "定位：笔记第一题的线索词是 equipment 与 for records，回原文找罗列牙医自带物品的句子，即第 4 段第 2 句，句中 includes 之后就是设备清单。确定答案技巧：题干的 for records 是对用途的概括，原文写的是 for keeping track of patients' treatments（追踪病人的治疗情况），两者同指“做病历记录”。在 includes 列出的四样东西中，drills、chairs、X-ray machines 都是诊疗器械，只有 computers 具备记录与追踪功能，因此答案锁定 computers。填空时注意 ONE WORD ONLY，且原文用的是复数 computers，要照抄复数形式；写 computer 既与原文形式不符，也与“多处诊所、多台设备”的语境不合。",
          "analysis": "第 4 段前两句：“In some locations that the RFDS visits, there are no suitable dental facilities, so dentists have to bring everything with them. This includes drills, dentists' chairs, portable X-ray machines, and computers for keeping track of patients' treatments.”（在 RFDS 到访的一些地方没有合适的牙科设施，所以牙医必须把所有东西都带上。这包括钻头、牙科椅、便携式 X 光机，以及用于记录病人治疗情况的电脑）。题干把 bring everything 概括为 need to bring equipment including，把 for keeping track of patients' treatments 概括为 for records，空格正是清单中承担记录功能的那一项。四项中前三项是治疗设备，第四项 computers 才是记录工具，故填 computers。词性上，computers 是复数普通名词，与并列的 drills、chairs、machines 形式一致，必须保留复数词尾，且它是一个单词，符合 ONE WORD ONLY。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "aircraft used to carry equipment have restricted 9 ________",
          "translation": "用于运送设备的飞机 ________ 受到限制。",
          "answer": "space",
          "wordClass": "名词（不可数，指飞机机内可供装载的容积；受前置定语 restricted 修饰，作谓语 have 的宾语，不加冠词、不变复数）",
          "locating": {
            "paragraph": "4",
            "quote": "Equipment can weigh up to 100 kilograms, and since the small planes that transport dentists have limited space, dentists cannot always bring everything that they need."
          },
          "synonyms": [
            "“restricted” 同义替换为原文的 “limited”（有限的）",
            "“aircraft used to carry equipment” 同义替换为原文的 “the small planes that transport dentists”",
            "“have restricted …” 对应原文的 “have limited space”，被限制的对象即空格所需名词 space"
          ],
          "locatingTip": "定位：笔记第二行的线索词是 aircraft、equipment 与 restricted，回原文找同时讲飞机和设备的句子，落在第 4 段末句，句中 small planes that transport dentists 与 have limited space 并存。确定答案技巧：把题干与原文逐项对齐——aircraft 对应 planes，used to carry equipment 对应 that transport dentists（飞机的主要任务就是运送牙医及其设备），restricted 对应 limited，那么被 limited 修饰的名词 space 就是答案，意思是“机内空间有限”。填完后做语法自检：aircraft … have restricted space 中 space 作不可数名词直接跟在形容词后，不加冠词，正好满足 ONE WORD ONLY；不要误填 100 kilograms 或 weight 之类原文没有对应结构的词。",
          "analysis": "第 4 段末句：“Equipment can weigh up to 100 kilograms, and since the small planes that transport dentists have limited space, dentists cannot always bring everything that they need.”（设备重量可达 100 公斤，而运送牙医的小型飞机空间有限，所以牙医并不总能带齐需要的一切）。句子由 since 引导原因：因为小飞机空间有限，所以牙医无法带齐全部物品。题干把原因部分抽出来做成笔记条 “aircraft used to carry equipment have restricted [9]”。对应关系是：aircraft 对应 small planes；used to carry equipment 对应 that transport dentists（第 4 段整段都在讲牙医把设备搬上飞机）；restricted 对应 limited；空格即 space。词性上，space 在此为不可数名词，作 have 的宾语，前面可以有 restricted 这类修饰语，不加冠词也不加复数；若误填复数 spaces 会改变含义（指一段段空白），因此必须写 space。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "problems offering some services, e.g. fitting 10 ________",
          "translation": "提供某些服务存在困难，例如安装 ________。",
          "answer": "dentures",
          "wordClass": "名词（复数；紧跟在动名词 fitting 之后作其宾语，指假牙；空格前无冠词，原文即以复数 dentures 出现，须照抄复数形式）",
          "locating": {
            "paragraph": "5",
            "quote": "For example, dentures (or artificial teeth) can be very difficult to provide, as they need to be the right shape and size for the patient, and this requires many visits over a long period of time."
          },
          "synonyms": [
            "“problems offering some services” 同义替换为原文上文的总述 “there are some services that are particularly challenging for RFDS dentists”，并用 “e.g.” 对应原文的 “For example”",
            "“fitting” 同义替换为原文的 “they need to be the right shape and size for the patient”，即必须按病人的牙形与尺寸量身定制",
            "“difficult to provide” 与题干的 “problems offering” 方向一致，均指提供服务有难度"
          ],
          "locatingTip": "定位：笔记第三行的线索词是 services 与举例标志 e.g.，回原文找带 For example 的难做项目，即第 5 段第 4 句，句中 provide 与 dentures 同时出现。确定答案技巧：原文先总说 “there are some services that are particularly challenging for RFDS dentists”，再用 For example 引出实例 dentures。题干用 offering some services 概括“提供服务”，用 fitting（装配、安装）概括原文“必须符合病人的形状和尺寸”，被举例的项目就是 dentures。填完后核对形式：空格前没有冠词，而原文写的是复数 dentures（一副假牙），因此照抄 dentures，不要写单数 denture，也不要写成两个词 artificial teeth——那既是原文括号里的解释性同义替换，也超出 ONE WORD ONLY 的限制。",
          "analysis": "第 5 段后半部分：“Even with their broad experience, there are some services that are particularly challenging for RFDS dentists. For example, dentures (or artificial teeth) can be very difficult to provide, as they need to be the right shape and size for the patient, and this requires many visits over a long period of time. As a result, it is not practical to make dentures available.”（即使经验丰富，仍有一些服务对 RFDS 牙医来说特别有难度。例如假牙很不容易提供，因为它们必须适合病人的形状与尺寸，而这需要长期多次复诊。因此，提供假牙并不现实）。题干 “problems offering some services, e.g. fitting [10]” 正是这一部分的浓缩：problems 对应 particularly challenging，offering services 对应 provide，e.g. 对应 For example，fitting 对应“必须符合病人形状和尺寸”这一具体工序，所以答案是 dentures。原文用括号给出了 artificial teeth 作为解释，只能帮助理解词义，不能作为答案（否则不是 ONE WORD ONLY）。答案保留原文复数形式 dentures。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "11 ________ and 12 ________ for regular use",
          "translation": "供日常使用的 ________ 和 ________。（本空为第一个空）",
          "answer": "toothpaste",
          "wordClass": "名词（不可数，指牙膏；在笔记的并列结构中位于 and 之前，与后一空并列，共同受 for regular use 修饰）",
          "locating": {
            "paragraph": "7",
            "quote": "Also, basic dental hygiene items such as toothpaste and toothbrushes can be more expensive in outback areas. Many people are on low incomes, meaning they have extra difficulty affording these products. If this is the case, the RFDS supplies these."
          },
          "synonyms": [
            "“RFDS provides” 同义替换为原文的 “the RFDS supplies these”，supplies 对应 provides，these 即上文列举的物品",
            "“If necessary” 同义替换为原文的 “If this is the case”，所指条件就是 “Many people are on low incomes, meaning they have extra difficulty affording these products”",
            "“for regular use” 对应原文的 “basic dental hygiene items” 与第 7 段的 “the importance of daily tooth brushing”，均指每天都要用的基本卫生用品"
          ],
          "locatingTip": "定位：第二组笔记的小标题是 Products supplied by RFDS dentists，回原文搜索 supplies 一类词，落在第 7 段末句 “the RFDS supplies these”，其前一句正是这些物品的名称，即可锁定答案出处。确定答案技巧：本题的关键是原文的指代链——末句的 these 回指上一句的 these products，而 these products 又回指更前一句的 “basic dental hygiene items such as toothpaste and toothbrushes”。也就是说，RFDS 免费发放的正是低收入病人买不起的基本牙齿卫生用品。题干用 for regular use 概括“日常使用”，用 If necessary 对应原文的条件句，第一个空格按原文列举顺序填 toothpaste。填写时照抄原文单词，toothpaste 是不可数名词，保持单数形式，不加冠词、不加复数。",
          "analysis": "第 7 段最后三句：“Also, basic dental hygiene items such as toothpaste and toothbrushes can be more expensive in outback areas. Many people are on low incomes, meaning they have extra difficulty affording these products. If this is the case, the RFDS supplies these.”（此外，牙膏、牙刷等基本牙齿卫生用品在内陆地区可能更贵。许多人收入较低，意味着他们更难负担得起这些产品。如果情况如此，RFDS 会提供这些物品）。题干把这部分压缩为 “If necessary RFDS provides: 11 ________ and 12 ________ for regular use”，其中 If necessary 对应 If this is the case，provides 对应 supplies，for regular use 对应 basic dental hygiene items 与 daily tooth brushing 所体现的“日常使用”。原文用 such as 引出基本牙齿卫生用品的实例，也就是说 toothpaste and toothbrushes 是这批供给品的典型代表；第 11 空按原文列举顺序在前，填 toothpaste。词性上 toothpaste 为不可数名词，原文即以单数形式出现，写 toothpastes 属于拼写形式错误，也不能填 dental（它只是理解难点 “basic dental hygiene items” 中的一个形容词）。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "11 ________ and 12 ________ for regular use",
          "translation": "供日常使用的 ________ 和 ________。（本空为第二个空）",
          "answer": "toothbrushes",
          "wordClass": "名词（复数；原文以复数形式出现，指牙刷；在笔记的并列结构中位于 and 之后，与前一空并列，共同受 for regular use 修饰）",
          "locating": {
            "paragraph": "7",
            "quote": "Also, basic dental hygiene items such as toothpaste and toothbrushes can be more expensive in outback areas. Many people are on low incomes, meaning they have extra difficulty affording these products. If this is the case, the RFDS supplies these."
          },
          "synonyms": [
            "“for regular use” 对应原文的 “basic dental hygiene items” 与 “daily tooth brushing”，即每天都要使用的基本清洁用品",
            "“RFDS provides” 同义替换为原文的 “the RFDS supplies these”，these 即上文列举的 toothpaste 与 toothbrushes",
            "原文用 such as 把 “toothpaste and toothbrushes” 并举，与题干用 and 连接的两个空格一一对应，顺序也一致"
          ],
          "locatingTip": "定位：与第 11 题同出第 7 段末三句，仍靠 supplies 与基本卫生用品清单定位。确定答案技巧：先看清原文的指代链——末句 these 回指 these products，these products 又回指 basic dental hygiene items such as toothpaste and toothbrushes；既然这些用品“买不起就由 RFDS 提供”，题干的 “RFDS provides … for regular use” 对应的就是这份清单。清单只有两个词，第 11 空填 toothpaste，第 12 空按原文顺序填 toothbrushes。注意数的一致：原文用复数 toothbrushes，必须保留词尾 s，写成 toothbrush 既与原文形式不符，也与“为众多居民提供多支牙刷”的语境不符。",
          "analysis": "本题与第 11 题出自同样的三句原文。题干把原文的 “basic dental hygiene items such as toothpaste and toothbrushes” 拆成两个并列空格，因此第 12 空按原文列举顺序填写第二个物品 toothbrushes。支撑信息来自后面两句：一是“这些用品在内陆地区更贵、低收入者更难负担”（can be more expensive … extra difficulty affording these products），解释了为什么需要 RFDS 免费发放以供 for regular use；二是末句的条件与动作 “If this is the case, the RFDS supplies these”，与题干的 “If necessary RFDS provides” 完全对应。词性上，toothbrush 是可数名词，原文使用复数形式，题干的两个空构成并列，故填 toothbrushes；它是一个单词，符合 ONE WORD ONLY，不要写成 tooth brush 或 toothbrush。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "13 ________ to limit dental accidents on the sports field",
          "translation": "用于减少运动场上牙齿意外的 ________。",
          "answer": "mouthguards",
          "wordClass": "名词（复数；笔记中的条目短语，后接不定式 to limit 说明用途；原文以复数形式出现，指运动护齿套）",
          "locating": {
            "paragraph": "8",
            "quote": "The RFDS also provides mouthguards for young sports players. Playing contact sports, such as rugby league or Australian rules football, can damage young people's teeth, so mouthguards provide protection which prevents accidental injuries."
          },
          "synonyms": [
            "“limit dental accidents” 同义替换为原文的 “prevents accidental injuries”（防止意外受伤），伤害的具体对象是牙齿，见原文 “can damage young people's teeth”",
            "“on the sports field” 同义替换为原文的 “Playing contact sports, such as rugby league or Australian rules football”，原文用橄榄球联赛、澳式足球举例说明运动场景",
            "“provides” 与原文 “The RFDS also provides mouthguards” 中的 provides 原词复现，提供者是同一个 RFDS"
          ],
          "locatingTip": "定位：笔记最后一行的线索词是 sports field 与 dental accidents，回原文找讲运动与牙齿保护的句子，落在第 8 段末两句，句中 sports、contact sports、injuries、teeth 同时出现。确定答案技巧：题干的 “to limit dental accidents on the sports field” 是目的状语，回原文找目的相同的物品——原文说 RFDS provides mouthguards for young sports players，并在下一句交代原因：橄榄球联赛、澳式足球这类对抗性运动会损伤年轻人的牙齿，所以 mouthguards provide protection which prevents accidental injuries。提供者（RFDS）与目的（防止运动伤牙）都对得上，答案即 mouthguards。注意照抄复数形式，不要误填 injuries 或 protection（它们虽在原文出现，却不是在运动场上被发放的产品）。",
          "analysis": "第 8 段末两句：“The RFDS also provides mouthguards for young sports players. Playing contact sports, such as rugby league or Australian rules football, can damage young people's teeth, so mouthguards provide protection which prevents accidental injuries.”（RFDS 还为年轻运动者提供护齿套。打橄榄球联赛或澳式足球这类对抗性运动会损伤年轻人的牙齿，所以护齿套能提供保护、防止意外受伤）。题干写成 “13 ________ to limit dental accidents on the sports field”：on the sports field 概括了 contact sports 的对抗性运动场景，limit dental accidents 概括了 prevents accidental injuries（受伤部位由前句的 damage young people's teeth 可知就是牙齿），而 RFDS 提供并起这一作用的物品是 mouthguards。词性上 mouthguards 是可数名词复数，作 provides 的宾语，须保留复数词尾；它是一个合成词，仍算 ONE WORD ONLY。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
