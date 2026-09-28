(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-240", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-240",
  "meta": {
    "examId": "p1-high-240",
    "title": "The Origins of Weather Forecasting 天气预报",
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
          "stem": "In Robert FitzRoy's time, weather forecasting was a respected skill.",
          "translation": "在罗伯特·菲茨罗伊（Robert FitzRoy）所处的时代，天气预报是一门受尊重的技能。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "It was a brave undertaking, because in those days predicting the weather had gained a reputation similar to astrology or fortune-telling. The few people who attempted it had become a national joke when their forecasts inevitably went wrong."
          },
          "synonyms": [
            "“Robert FitzRoy's time” 同义替换为原文的 “in those days”（在那些日子里），指菲茨罗伊生活的 19 世纪中期",
            "“a respected skill” 与原文的 “had gained a reputation similar to astrology or fortune-telling” 相互冲突：原文说预报天气这门技能的名声和占星术、算命差不多",
            "“The few people who attempted it had become a national joke” 进一步说明做预报的人成了全国笑柄，与“受尊重”完全相反"
          ],
          "locatingTip": "定位：题干中的专有名词 Robert FitzRoy 是全文反复出现的人名，第 3 段整段都在介绍他，扫读到该段第 2、3 句即可锁定落点。确定答案技巧：本题的判分词是 respected（受尊重的），要在原文里找当时社会对天气预报这门技能的评价。原文先用 brave undertaking（勇敢之举）说做这件事需要胆量，紧接着用 because 交代原因：当时预测天气的名声“similar to astrology or fortune-telling”（和占星术、算命一样不可信），尝试者还“had become a national joke”（成了全国笑柄）。名声差、被嘲笑，与“受尊重”方向相反，属于事实冲突，故判 FALSE。注意 brave 修饰的对象是菲茨罗伊个人的举动，并不等于这门技能受到尊重——恰恰因为不被尊重，才需要勇气。",
          "analysis": "第 3 段的相关内容为：“The first forecast was the idea of Admiral Robert FitzRoy, head of the newly founded Meteorological Department, and one of Britain's greatest but least-known heroes. It was a brave undertaking, because in those days predicting the weather had gained a reputation similar to astrology or fortune-telling. The few people who attempted it had become a national joke when their forecasts inevitably went wrong.”（首次预报出自海军少将罗伯特·菲茨罗伊之手，他是新成立的气象部门负责人，也是英国最伟大却最不为人知的英雄之一。这是一项勇敢的举动，因为当时预测天气已经落得和占星术、算命差不多的名声；少数尝试者一旦预报出错，就成了全国的笑柄。）题干把原文对这门技能的负面社会评价（名声等同于占星术与算命、从业者沦为笑柄）改写成“a respected skill（一门受尊重的技能）”，二者在评价方向上正面对立。原文给出的所有信息都在说明这门技能“不被信任、被嘲弄”，因此答案是 FALSE。做题提醒：题干含评价性形容词（respected、popular、welcomed 等）的判断题，一定要回到原文找同类评价词，不能因为主语是“英雄人物”就默认他的行当受尊重。",
          "traps": [
            "为什么不是 TRUE：原文明确写天气预报当时的名声“similar to astrology or fortune-telling”，尝试预报的人还“had become a national joke”，全是负面评价；题干却称其为“受尊重的技能”，与原文事实直接相反，因此不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对当时天气预报的社会地位有非常明确的交代（名声等同占星术与算命、从业者被当作笑柄），信息不仅存在，而且与题干相反。存在相反信息时按规则判 FALSE，而不是判信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "When FitzRoy retired from the navy, he had already had a successful career at sea.",
          "translation": "菲茨罗伊从海军退役时，已经拥有了一段成功的海上生涯。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "His background was faultless, most famously his captaining of the ship HMS Beagle on Charles Darwin's voyage around the world, which eventually led to the publication of Darwin's well-known book On the Origin of Species. When FitzRoy retired from active service as an admiral in Britain's navy, he was looking for a new direction."
          },
          "synonyms": [
            "“retired from the navy” 同义替换为原文的 “retired from active service as an admiral in Britain's navy”（以英国海军上将身份退出现役）",
            "“a successful career at sea” 同义替换为原文的 “His background was faultless”，并由 “his captaining of the ship HMS Beagle on Charles Darwin's voyage around the world” 给出具体例证",
            "“had already had” 与原文的语序一致：先说无可挑剔的履历与环球航行经历，再交代退役，说明成功经历发生在退役之前"
          ],
          "locatingTip": "定位：题干的关键动作是 retired from the navy，原文第 4 段第 2 句“When FitzRoy retired from active service as an admiral in Britain's navy”与之精确对应，由此锁定第 4 段前两句。确定答案技巧：题干有 already（已经），问的是退役之前他是否已有成功的海上经历。原文先用“His background was faultless”（背景无可挑剔）给出总体评价，再用 most famously 举出最著名的例证——他担任 HMS Beagle 号舰长，随查尔斯·达尔文完成环球航行，并促成了《物种起源》的出版；随后才说他以上将身份退役、寻找新方向。辉煌的海上履历在前、退役在后，与题干的时间关系一致，故判 TRUE。",
          "analysis": "第 4 段开头两句为：“FitzRoy was different, though. His background was faultless, most famously his captaining of the ship HMS Beagle on Charles Darwin's voyage around the world, which eventually led to the publication of Darwin's well-known book On the Origin of Species. When FitzRoy retired from active service as an admiral in Britain's navy, he was looking for a new direction.”（菲茨罗伊却不一样。他的履历无可挑剔，其中最著名的是在查尔斯·达尔文的环球航行中担任 HMS Beagle 号舰长，这次航行最终促成了达尔文名著《物种起源》的出版。当他以英国海军上将身份退出现役时，他正在寻找新的方向。）题干的落点是“退役时已有成功的海上生涯”：retired from the navy 对应 retired from active service as an admiral in Britain's navy；a successful career at sea 对应 His background was faultless 以及担任 Beagle 号舰长完成环球航行这一具体成就。原文的时间顺序是履历在前、退役在后，与题干 already 所表达的时间关系完全吻合，信息同向，因此答案是 TRUE。做题时注意：判断题中出现 already、before、by the time 这类时间关系词，要核对原文的先后顺序，本题原文的叙述顺序恰好与题干一致。",
          "traps": [
            "为什么不是 FALSE：原文说他“background was faultless（履历无可挑剔）”，并具体列出担任 HMS Beagle 号舰长、参与达尔文环球航行的辉煌经历，随后才写他以海军上将身份退役。退役之前的确是成功的海上生涯，与题干一致，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文既评价了他的海上履历（faultless），又给出了具体事实（舰长、环球航行），还交代了退役，三项信息齐全，足以判断题干成立，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "FitzRoy faced competition from other applicants for the chief statistician's job.",
          "translation": "菲茨罗伊竞争首席统计师一职时，面临其他申请人的竞争。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "He subsequently secured a job as chief statistician at the Meteorological Department, part of the Board of Trade."
          },
          "synonyms": [
            "“the chief statistician's job” 在原文中作原词复现：“a job as chief statistician”",
            "“faced competition from other applicants” 在原文中没有任何对应：原文只写了结果 “secured a job（获得了这份工作）”，既没有提及其他申请人，也没有提及选拔、竞争或落选者",
            "“subsequently” 在原文中只表示时间先后（他随后得到这份工作），不能据此推断出竞争激烈"
          ],
          "locatingTip": "定位：题干中的职位名 chief statistician 是极佳的定位词，原文只在第 4 段出现这一头衔，一读即中。确定答案技巧：本题问的是“过程”（是否面临竞争），而原文只给了“结果”——“He subsequently secured a job as chief statistician at the Meteorological Department”（他随后获得了气象部门首席统计师的工作）。原文没有任何关于申请人数量、面试、择优录取的表述，也没有出现 competition、applicant、rival 之类的词。原文对他“如何得到这份工作”完全没有交代，属于信息缺失，因此判 NOT GIVEN。切忌因为他“随后（subsequently）才得到工作”就自行脑补出“一定经过激烈竞争”。",
          "analysis": "第 4 段相关句为：“When FitzRoy retired from active service as an admiral in Britain's navy, he was looking for a new direction. He subsequently secured a job as chief statistician at the Meteorological Department, part of the Board of Trade.”（当他以英国海军上将身份退出现役时，他正在寻找新的方向。随后他获得了贸易部下属气象部门首席统计师的工作。）句中关于求职的信息只有两点：他想找新方向，以及他得到了这份工作，中间没有提到任何竞争者、选拔程序或落选者。题干却断言“faced competition from other applicants（面临其他申请人的竞争）”，这一层信息原文完全没有提供。按判断题规则，原文既没有说有竞争，也没有说没有竞争，属于纯粹的未提及，所以答案是 NOT GIVEN，而不是 TRUE 或 FALSE。做题技巧：凡是题干出现 competition、other applicants、several candidates、was chosen over 这类涉及“选拔过程”的表达，都要先回原文确认该过程是否被描述过；只写结果不写过程，就是 NOT GIVEN 的信号。",
          "traps": [
            "为什么不是 TRUE：原文只写他“secured a job（获得了这份工作）”，全篇没有任何关于其他申请人、竞争或选拔过程的词句。“找到工作”不等于“经历过竞争”，把结果推断成过程属于超出原文的推理，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文给出相反信息，即原文得说他“没有竞争对手”或“无人与其竞争”，而原文对此毫无交代；没有相反信息就不是 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The British Parliament supported the idea of regular weather forecasts in 1854.",
          "translation": "1854 年，英国议会支持开展定期天气预报这一想法。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Parliament had voted to set up and fund the Meteorological Department on June 30, 1854, to chart the safest sailing routes across the Atlantic Ocean. However, the British Government was not impressed with the idea of collecting weather reports and establishing a weather forecast"
          },
          "synonyms": [
            "“in 1854” 在原文中作原词复现：“on June 30, 1854”",
            "“supported the idea of regular weather forecasts” 与原文的 “was not impressed with the idea of collecting weather reports and establishing a weather forecast” 相互冲突，原文明确说并不认可建立天气预报的想法",
            "原文交代 1854 年议会拨款的目的只是 “to chart the safest sailing routes across the Atlantic Ocean”（绘制最安全的大西洋航线），与天气预报无关，后面的 “was met with laughter from the other MPs”（被其他议员嘲笑）进一步说明反对态度"
          ],
          "locatingTip": "定位：题干年份 1854 是极强的定位词，原文只出现一次，落在第 4 段后半部分。确定答案技巧：这是一道“时间对、内容错”的典型陷阱题，原文在同一段里塞了两件事——①1854 年 6 月 30 日议会投票设立并拨款气象部门，但目的只是绘制最安全的大西洋航线（to chart the safest sailing routes）；②紧接着用 However 转折：英国政府对收集气象报告、建立天气预报这一想法并不认可，一位议员的有关提议还被其他议员报以嘲笑。题干把 1854 这个时间与“议会支持天气预报”绑在一起，等于把两条不同信息错接，而且方向与原文相反，故判 FALSE。做题时要特别警惕“时间 + 事件”的重组型题目，年份正确不代表事件正确。",
          "analysis": "第 4 段后半部分为：“He subsequently secured a job as chief statistician at the Meteorological Department, part of the Board of Trade. Parliament had voted to set up and fund the Meteorological Department on June 30, 1854, to chart the safest sailing routes across the Atlantic Ocean. However, the British Government was not impressed with the idea of collecting weather reports and establishing a weather forecast, and the suggestion by one Member of Parliament for this was met with laughter from the other MPs.”（随后他获得了贸易部下属气象部门首席统计师的工作。议会曾于 1854 年 6 月 30 日投票设立并资助气象部门，目的是绘制横跨大西洋最安全的航线。然而，英国政府对收集气象报告、建立天气预报这一想法并不认可，一位议员为此提出的建议还被其他议员嘲笑。）可见 1854 年议会支持的是“设立气象部门、绘制航线”，并不是“定期天气预报”；而天气预报的构想恰恰被政府否定、被议员嘲笑。题干把“议会拨款”与“支持天气预报”合为一体并挂上 1854 这个年份，与原文冲突，因此答案是 FALSE。提醒：原文用 vote to set up and fund 表示议会确有拨款行为，容易被误读成“支持天气预报”，必须读完整段、抓住 However 之后的态度才不会被骗。",
          "traps": [
            "为什么不是 TRUE：1854 年议会投票支持的是“设立并资助气象部门”，并且明确说明其目的是绘制最安全的大西洋航线；对天气预报这一想法，原文用 However 转折，说政府 “was not impressed”，相关提议还 “was met with laughter”，态度是否定的，与题干“支持定期天气预报”相反。",
            "为什么不是 NOT GIVEN：原文对 1854 年议会的态度有明确且详细的交代（拨款目的 + However 之后的否定 + 议员的嘲笑），信息完整且与题干冲突，不能判为信息缺失。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Progress in technology made it a good time for publicly available weather forecasting to begin.",
          "translation": "技术进步使得此时成为开展面向公众的天气预报的好时机。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "This was just the right moment for a national forecasting service. Knowledge of the weather was improving, barometer readings gave warning of approaching storms, and the invention of the electric telegraph and Morse code in 1844 gave instant communication for the first time."
          },
          "synonyms": [
            "“a good time … to begin” 同义替换为原文的 “just the right moment”（正是绝佳的时机）",
            "“progress in technology” 同义替换为原文的 “the invention of the electric telegraph and Morse code in 1844”，并涵盖 “barometer readings”（气压计读数）这一观测手段的改进",
            "“publicly available weather forecasting” 对应原文的 “a national forecasting service”，第 8 段进一步印证他 “started a public weather forecasting service”"
          ],
          "locatingTip": "定位：题干关键词 technology 与 a good time 抽象程度高，可改抓同义的具体词 right moment，落在第 6 段末两句。确定答案技巧：原文先说 “This was just the right moment for a national forecasting service.”（这正是建立全国性预报服务的好时机），紧接着列举三项条件：气象知识在进步、气压计读数能预警来袭风暴、1844 年电报与摩斯码的发明首次实现即时通讯。这三项都属于技术进步，也正是“好时机”的成因所在。题干用 Progress in technology made it a good time 把“技术进步造成有利时机”的逻辑概括出来，并把全国性服务改写为 publicly available，方向完全一致，故判 TRUE。",
          "analysis": "第 6 段为：“That same year, a total of 1,645 lives were lost off the British coast, and FitzRoy wrote repeatedly to The Times pushing for a storm-warning service for shipping. This was just the right moment for a national forecasting service. Knowledge of the weather was improving, barometer readings gave warning of approaching storms, and the invention of the electric telegraph and Morse code in 1844 gave instant communication for the first time.”（同一年，英国沿海共有 1645 人丧生，菲茨罗伊多次致信《泰晤士报》力推面向航运的风暴预警服务。这正是建立全国性预报服务的好时机：人们对天气的认识在进步，气压计读数能够预警即将到来的风暴，而 1844 年电报与摩斯码的发明首次实现了即时通讯。）题干包含两个信息点：其一是技术进步（progress in technology），其二是这使此时成为开展面向公众的天气预报的好时机（made it a good time … to begin）。原文的 just the right moment 正好对应 a good time，三项技术条件（气象知识、气压计、电报与摩斯码）综合起来就是 progress in technology，而紧接着的第 7 段写他于 1861 年 2 月着手推行预警服务、第 8 段写他开创面向公众的预报服务，正是“begin”的具体落实。两条信息同向且互为因果，因此答案是 TRUE。做题提示：原文用“列举三项进展”来表达“技术条件成熟”，这种“列举即概括”的写法在 TRUE 题中很常见。",
          "traps": [
            "为什么不是 FALSE：原文说 “This was just the right moment for a national forecasting service”，并把三项技术条件（气象知识改进、气压计预警、电报与摩斯码）列为理由，与题干“技术进步带来好时机”完全同向，没有任何矛盾。",
            "为什么不是 NOT GIVEN：原文不仅断言时机正好，还一一列出促成时机的技术进展，甚至在第 7、8 段交代了服务随即开办的事实，信息充分，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–13 表格填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 13
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "FitzRoy received weather reports produced by ships using reliable 6 ________",
          "translation": "菲茨罗伊收到的气象报告，是由使用可靠的 ________ 的船只提供的。",
          "answer": "instruments",
          "wordClass": "名词（复数形式；位于 using 之后作宾语，题干空格前无冠词、泛指一类器具，原文为 standardised instruments，故保持复数 instruments）",
          "locating": {
            "paragraph": "7",
            "quote": "Previously, weather reports had been unreliable, but FitzRoy's innovation was to issue ships with standardised instruments which allowed for accurate weather reports."
          },
          "synonyms": [
            "“reliable …” 同义替换为原文的 “standardised” 与 “accurate”：原文说给船只配发标准化仪器后报告才变得准确，题干把这一因果压缩成一个形容词 reliable",
            "“weather reports produced by ships using …” 同义替换为原文的 “issue ships with …”，即“给船只配发（仪器）”改写成“船只使用（仪器）”",
            "“Previously, weather reports had been unreliable” 与题干的 “reliable” 构成正反呼应：原文先给出反面的旧情况，再给出改进后的可靠结果"
          ],
          "locatingTip": "定位：表格小标题 “February 1861: Storm warning service” 直接对应第 7 段首句 “So in February 1861, FitzRoy pressed ahead with a storm-warning service”，由此进入第 7 段。确定答案技巧：题干说船只配备“reliable（可靠的）”某物，回原文找与“可靠、准确”对应的表述。原文先讲旧状况“weather reports had been unreliable”，再用 but 给出创新——“issue ships with standardised instruments which allowed for accurate weather reports”（给船只配发标准化仪器，由此得到准确的气象报告）。unreliable 与 reliable 正反呼应，standardised、accurate 正是 reliable 的具体化，空格所需的宾语就是 instruments。注意 ONE WORD ONLY，直接填原文的复数形式 instruments，不要写 instrument 或加其他词。",
          "analysis": "第 7 段前两句为：“So in February 1861, FitzRoy pressed ahead with a storm-warning service. Previously, weather reports had been unreliable, but FitzRoy's innovation was to issue ships with standardised instruments which allowed for accurate weather reports.”（于是 1861 年 2 月，菲茨罗伊着手推进风暴预警服务。此前的气象报告一直不可靠，而他的创新之处在于给船只配发标准化仪器，从而获得准确的气象报告。）表格小标题中的 February 1861 与首句时间吻合，题干 “FitzRoy received weather reports produced by ships using reliable [6]” 正是对 “issue ships with standardised instruments which allowed for accurate weather reports” 的压缩改写：船只能给出可靠报告，靠的是被配发的标准化仪器；原文的 standardised 与 accurate 被题干概括为 reliable，配发对象 instruments 就是空格答案。从词性看，空格前是形容词 reliable，其后需要名词，且原文为复数 instruments，题干用无冠词的泛指结构，故填复数 instruments。提醒：同一句里还出现 weather reports、ships 等名词，但能与 reliable 搭配、并解释“报告为何可靠”的只有 instruments。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "storm warnings were telegraphed to 7 ________ along the shore",
          "translation": "风暴警报通过电报发送给沿岸的 ________。",
          "answer": "ports",
          "wordClass": "名词（复数形式；位于介词 to 之后作宾语，原文 ports 为复数，指沿海的多个港口）",
          "locating": {
            "paragraph": "7",
            "quote": "The approach of an incoming storm could be recognised, and from London, FitzRoy could telegraph warnings to ports on the coast"
          },
          "synonyms": [
            "“storm warnings were telegraphed to” 同义替换为原文的 “FitzRoy could telegraph warnings to”：原文是主动语态，题干改成被动语态",
            "“along the shore” 同义替换为原文的 “on the coast”（沿海岸）",
            "“storm” 对应原文上文的 “The approach of an incoming storm could be recognised”，说明这些警报正是关于风暴的"
          ],
          "locatingTip": "定位：题干给出的信息点是 telegraph 与 along the shore，回原文搜索 telegraph，落在第 7 段第 4 句。确定答案技巧：原文 “FitzRoy could telegraph warnings to ports on the coast” 中，telegraph warnings to 与题干的 storm warnings were telegraphed to 语态相反、意思相同，介词 to 后面的名词就是警报的接收方，即 ports（港口）；题干用 along the shore 改写原文的 on the coast，进一步印证落点位置。空格填复数 ports，与原文保持一致；不要填 coast，因为它只是修饰语，且题干已用 along the shore 表达，填进去会与题干重复。",
          "analysis": "第 7 段中段为：“The approach of an incoming storm could be recognised, and from London, FitzRoy could telegraph warnings to ports on the coast, where an ingenious system of flags was hoisted up high for passing ships to read.”（来袭风暴的临近可以被识别出来，而菲茨罗伊可以从伦敦把警报用电报发往沿海港口，那里有一套巧妙的旗帜系统被高高升起，供过往船只读取。）题干 “storm warnings were telegraphed to [7] along the shore” 把原文的主动句改写成被动句：原文主语 FitzRoy 在题干中消失，动作的接收方被提到介词 to 之后，对应的正是 ports on the coast 中的 ports。题干的 along the shore 是原文 on the coast 的同义改写，位置线索一致。从词性看，to 是介词，其后需要名词，原文为复数 ports，故填 ports。避免误填 coast 或 shore：这两个词在题干中已经有对应的表达能力（along the shore），而且 along the coast 是地点状语，不是警报的直接接收者。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "signals for ships were displayed using raised 8 ________",
          "translation": "给船只的信号是通过升起的 ________ 来传达的。",
          "answer": "flags",
          "wordClass": "名词（复数形式；位于 using 之后作宾语，题干空格前无冠词，原文为 a system of flags，故保持复数 flags）",
          "locating": {
            "paragraph": "7",
            "quote": "where an ingenious system of flags was hoisted up high for passing ships to read"
          },
          "synonyms": [
            "“signals for ships were displayed” 同义替换为原文的 “was hoisted up high for passing ships to read”：升起的旗帜就是给过往船只看的信号",
            "“raised” 同义替换为原文的 “hoisted up high”（高高升起）",
            "“system of flags” 中的 flags 与题干的 raised [8] 直接对应，system 一词被题干省略，只留信号的载体"
          ],
          "locatingTip": "定位：本题与上一题同处一句，关键词是 signals 与 raised（对应原文 hoisted），读完第 7 段第 4 句即可同时解决第 7、8 两题。确定答案技巧：原文说港口有 “an ingenious system of flags was hoisted up high for passing ships to read”——一套巧妙的旗帜系统被高高升起，专门给过往船只读取。题干把“供船只读取的旗帜系统”概括为 signals for ships were displayed，把 hoisted up high 改写为 raised，空格要填的就是这套信号的载体 flags（旗帜）。注意 ONE WORD ONLY，填复数 flags，与原文一致；不要填 system（那是旗帜的组合方式，不是被升起的信号本身），也不要填 signals（题干中已出现该词）。",
          "analysis": "仍取第 7 段第 4 句：“The approach of an incoming storm could be recognised, and from London, FitzRoy could telegraph warnings to ports on the coast, where an ingenious system of flags was hoisted up high for passing ships to read.” 句末的 where 引导定语从句修饰 ports，从句讲的是港口如何把电报收到的警报再传递给海上船只——用一套 ingenious（巧妙的）旗帜系统，将其高高升起，供过往船只读取。表格中 “signals for ships were displayed using raised [8]” 正是对该从句的概括：signals for ships 对应 for passing ships to read（给过路船只看的信号），were displayed 对应 was hoisted up high（旗帜升起即信号显示），raised 则把 hoisted up high 简化成一个形容词。由此可见空格需要的名词就是 flags。从词性看，raised 是形容词，其后需名词，原文为复数 flags，故填 flags。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "the storm warning service was the greatest development in sea safety since the 9 ________ was introduced",
          "translation": "风暴预警服务是自 ________ 投入使用以来海上安全领域最大的进步。",
          "answer": "lifeboat",
          "wordClass": "名词（单数形式；位于定冠词 the 之后、was introduced 之前作从句主语，与原文 the lifeboat 对应，只保留名词本体）",
          "locating": {
            "paragraph": "7",
            "quote": "This represented the biggest advance in shipping safety after the introduction of the lifeboat"
          },
          "synonyms": [
            "“the greatest development in sea safety” 同义替换为原文的 “the biggest advance in shipping safety”（biggest 即 greatest，advance 即 development）",
            "“since … was introduced” 同义替换为原文的 “after the introduction of …”，介词短语改写成时间状语从句",
            "“the storm warning service” 对应原文的指示代词 “This”，它回指上文刚讲完的风暴预警服务"
          ],
          "locatingTip": "定位：题干含最高级 greatest，回原文找与“最大进步”对应的最高级表述，落在第 7 段倒数第二句 “This represented the biggest advance in shipping safety after the introduction of the lifeboat”。确定答案技巧：原文用 This 回指上文的整套风暴预警系统，说它是“自救生艇问世以来航运安全方面最大的进步”。题干把 the biggest advance in shipping safety 改写为 the greatest development in sea safety，把 after the introduction of 改写为 since … was introduced，并把语序调整为“自某物被引入以来最大的进步”，因此 since 之后的名词就是 the lifeboat 去掉冠词后的 lifeboat。注意 ONE WORD ONLY，只填 lifeboat，不要带冠词，也不要填 introduction。",
          "analysis": "第 7 段末两句为：“This represented the biggest advance in shipping safety after the introduction of the lifeboat, and in subsequent years the number of lives lost around Britain fell by about a third. FitzRoy became a hero to the fishing and maritime fleets.”（这代表着继救生艇问世之后航运安全领域最大的一次进步，此后数年间英国周边海域的死亡人数下降了约三分之一。菲茨罗伊成了渔船与航运船队心目中的英雄。）句首的 This 回指前文所述的整套风暴预警服务（配发标准化仪器、每日定时电报、绘制天气图、向港口发电报、港口升旗示警）。题干把这条评价改写为 “the storm warning service was the greatest development in sea safety since the [9] was introduced”，三项替换一一对应：This 对应 the storm warning service，the biggest advance in shipping safety 对应 the greatest development in sea safety，after the introduction of 对应 since … was introduced，因此被“引入”的对象就是 the lifeboat，答案填单数 lifeboat。从语法看，空格位于定冠词 the 与 was introduced 之间，应填单数名词。此外，末句的“死亡人数下降约三分之一”从结果侧印证了这项服务确实是海上安全的巨大进步，可作为解题的辅助证据。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "frequently used by the English Queen for safe trips to a favourite 10 ________",
          "translation": "常被英国女王使用，用于前往她喜爱的一处 ________ 的安全旅程。",
          "answer": "island",
          "wordClass": "名词（单数形式；位于介词 to 之后作宾语，空格前有 a favourite 限定，填可数名词单数 island）",
          "locating": {
            "paragraph": "8",
            "quote": "It attracted huge attention, including from Queen Victoria, who regularly sent messengers to FitzRoy's office to get a forecast for the sea crossing over the Solent to an island which she liked to visit off the south coast of England."
          },
          "synonyms": [
            "“the English Queen” 同义替换为原文的 “Queen Victoria”（维多利亚女王，即当时的英国女王）",
            "“frequently used … for safe trips” 同义替换为原文的 “regularly sent messengers to FitzRoy's office to get a forecast for the sea crossing”（定期派人去取渡海预报）",
            "“a favourite …” 同义替换为原文的 “an island which she liked to visit”（她喜欢去的地方），liked 对应 favourite"
          ],
          "locatingTip": "定位：表格第二部分小标题 “August 1861: Public weather forecasting service” 对应第 8 段，题干中的 the English Queen 指向原文专有名词 Queen Victoria，独一无二，可直接定位到第 8 段第 3 句。确定答案技巧：原文说女王 “regularly sent messengers to FitzRoy's office to get a forecast for the sea crossing over the Solent to an island which she liked to visit”。题干把 regularly 改写为 frequently、把取渡海预报改写为 for safe trips、把 an island which she liked to visit 压缩为 a favourite 加空格，空格需要的名词就是她渡海所去的 island（岛屿）。注意填单数 island，与 a favourite 的单数结构一致，不要写复数，也不要填 Solent（那是她渡过的海峡，不是目的地）。",
          "analysis": "第 8 段相关句为：“Encouraged by his storm-warning success, FitzRoy then started a public weather forecasting service. As he had a close connection with The Times, this newspaper introduced his daily forecast in August 1861. It attracted huge attention, including from Queen Victoria, who regularly sent messengers to FitzRoy's office to get a forecast for the sea crossing over the Solent to an island which she liked to visit off the south coast of England.”（在风暴预警取得成功后，菲茨罗伊又开办了面向公众的天气预报服务。由于他与《泰晤士报》关系密切，该报于 1861 年 8 月刊登了他的每日预报。它引起了极大关注，其中包括维多利亚女王——她定期派信使到菲茨罗伊的办公室，为的是获取跨越索伦特海峡、前往英格兰南岸外一处她喜欢造访的岛屿的渡海预报。）表格中 “frequently used by the English Queen for safe trips to a favourite [10]” 是对该句的概括：the English Queen 即 Queen Victoria，frequently 即 regularly，for safe trips 即 get a forecast for the sea crossing（为了安全渡海而取预报），a favourite 加空格即 an island which she liked to visit。从词性看，空格前是 a favourite，需要可数名词单数，故填 island。同位成分 over the Solent 说明的是水路而非目的地，不能作为答案。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "FitzRoy's forecasts were popular with fishermen but not with boat 11 ________",
          "translation": "菲茨罗伊的预报受到渔民欢迎，却不受渔船 ________ 的欢迎。",
          "answer": "owners",
          "wordClass": "名词（复数形式；位于介词 with 之后作宾语，原文为 The owners of fishing vessels，指多位船主，故用复数）",
          "locating": {
            "paragraph": "8",
            "quote": "He was also popular with ordinary fishermen, who were happy not to be out at sea in bad weather. The owners of fishing vessels, however, were not supportive of FitzRoy's forecasts, which often caused delays for them when bad weather was forecast."
          },
          "synonyms": [
            "“popular with fishermen but not with …” 同义替换为原文的 “He was also popular with ordinary fishermen … The owners of fishing vessels, however, were not supportive of …”：原文用两句、以 however 构成对比，题干压成一句",
            "“boat 11” 同义替换为原文的 “vessels”，boat 与 vessels 同义，其所属者即 owners",
            "“not supportive” 即题干的 “not popular”，两处否定方向一致"
          ],
          "locatingTip": "定位：题干包含一组对比（渔民和船只所属者），回原文找同时出现这两类人的段落，即第 8 段最后两句，其中 fishermen 与 vessels 相邻出现。确定答案技巧：原文先说他 “was also popular with ordinary fishermen”（也受普通渔民欢迎），随后以 however 转折——“The owners of fishing vessels … were not supportive of FitzRoy's forecasts”（渔船船主对他的预报并不支持）。题干的 popular with 与 not with 正好对应原文的 popular with … 与 were not supportive of … 这一对比结构，空格位于 boat 之后，对应原文 vessels 的所属者 owners，故填 owners。注意题干用 boat 替换原文的 fishing vessels，只填 owners，不要写 vessels 或 fishermen，也无需加 the。",
          "analysis": "第 8 段末尾两句为：“He was also popular with ordinary fishermen, who were happy not to be out at sea in bad weather. The owners of fishing vessels, however, were not supportive of FitzRoy's forecasts, which often caused delays for them when bad weather was forecast.”（他也很受普通渔民欢迎，因为渔民乐得在恶劣天气里不必出海。但渔船船主对他的预报并不支持，因为一旦预报有恶劣天气，常常给他们造成延误。）题干 “FitzRoy's forecasts were popular with fishermen but not with boat [11]” 正是把这两句合并：前半句 popular with fishermen 直取原文的 popular with ordinary fishermen；后半句 not with boat 加空格对应 The owners of fishing vessels … were not supportive，把原文的否定词 not supportive 简化为 not，把 vessels 的所属者 owners 留作空格答案。从词性看，空格位于介词 with 之后，需要名词，原文 owners 为复数，故填 owners。需要注意题干已用 boat 替换 vessels，如果填 vessels 会与 boat 语义重复且不符合 note 的逻辑（与“渔民”对立的应是“船主”这一人群）；填 fishermen 则与题干前半句重复。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "in modern times FitzRoy's 12 ________ is used for a marine area",
          "translation": "在现代，菲茨罗伊的 ________ 被用于一片海域。",
          "answer": "name",
          "wordClass": "名词（单数形式；空格后为 is used，说明其在该条目中作单数主语，与原文 his name 一致）",
          "locating": {
            "paragraph": "9",
            "quote": "it is only in recent years that he has been recognised as a towering figure in meteorology, with the honour of an area of sea being given his name in the shipping forecast"
          },
          "synonyms": [
            "“in modern times” 同义替换为原文的 “in recent years”（近年来）",
            "“a marine area” 同义替换为原文的 “an area of sea”（一片海域）",
            "“FitzRoy's [12] is used for a marine area” 同义替换为原文的 “an area of sea being given his name in the shipping forecast”：一片海域被冠以他的名字，即他的名字被用于该海域"
          ],
          "locatingTip": "定位：题干的两个信息点是 modern times 与 a marine area，回原文找与“近年”“海域”相关的句子，落在第 9 段第 3 句。确定答案技巧：原文说他近年才被公认为气象学领域的巨擘，随后以 with 引出荣誉——“with the honour of an area of sea being given his name in the shipping forecast”，即航运天气预报中有一片海域被冠以他的名字。题干把 in recent years 改写为 in modern times，把 an area of sea 改写为 a marine area，并把“海域被冠以他的名字”倒转成“菲茨罗伊的某物被用于一片海域”，空格要填的就是 name（名字）。填单数 name，与题干中 is used 的单数主谓一致相符；不要填 honour 或 forecast，它们分别是荣誉本身与它出现的场合。",
          "analysis": "第 9 段中段为：“It is indisputable that FitzRoy was way ahead of his time, but it is only in recent years that he has been recognised as a towering figure in meteorology, with the honour of an area of sea being given his name in the shipping forecast (a radio broadcast of weather reports for the seas around Britain).”（无可争辩的是，菲茨罗伊远超他所处的时代，但直到最近几年他才被公认为气象学领域的一位巨擘，荣誉之一就是在航运天气预报中有一片海域被冠以他的名字——航运天气预报是英国周边海域天气报告的无线电广播。）题干 “in modern times FitzRoy's [12] is used for a marine area” 把原文的被动结构 “an area of sea being given his name” 改写成“他的某物被用于一片海域”，句子成分虽调换，信息点一致：被赋予给那片海域的正是 his name，故答案填 name。从语法看，空格后紧跟 is used，说明空格处是单数主语，name 在此为可数名词单数，符合要求。做题时注意括号内的解释性文字只是对 shipping forecast 的说明，与空格无关。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "FitzRoy produced a 13 ________ which was respected by the scientific community",
          "translation": "菲茨罗伊写出了一部 ________，受到科学界的认可。",
          "answer": "book",
          "wordClass": "名词（单数形式；空格前有不定冠词 a，作 produced 的宾语，与原文 a book 一致）",
          "locating": {
            "paragraph": "9",
            "quote": "But his legacy lives on, because late in his life he published a book about weather forecasting which was recognised by other scientists to be well ahead of its time."
          },
          "synonyms": [
            "“produced” 同义替换为原文的 “published”（出版即产出）",
            "“respected by the scientific community” 同义替换为原文的 “recognised by other scientists to be well ahead of its time”（被其他科学家认可为远超时代）",
            "“a [13]” 与原文的 “a book about weather forecasting” 对应：题干只保留被出版物的类别名词，把 about weather forecasting 这一修饰成分省去"
          ],
          "locatingTip": "定位：题干关键词 scientific community 指向原文的 other scientists，回原文找以科学家为评价主体的句子，正好是第 9 段末句 “which was recognised by other scientists to be well ahead of its time”。确定答案技巧：原文说他晚年 “published a book about weather forecasting which was recognised by other scientists to be well ahead of its time”，即他出版了一本关于天气预报的书，被其他科学家认为远远超前于时代。题干把 published 改写为 produced，把 recognised by other scientists 概括为 respected by the scientific community，被“产出”的对象就是 a book，故空格填 book。注意 ONE WORD ONLY，只填单数 book；不要填 forecasting（那是书的主题）、scientists（那是评价者）或 time。",
          "analysis": "第 9 段末句为：“But his legacy lives on, because late in his life he published a book about weather forecasting which was recognised by other scientists to be well ahead of its time.”（但他的遗产留存至今，因为他在晚年出版了一本关于天气预报的书，该书被其他科学家认为远远超前于时代。）第 13 题所在的行为表格最后一行“FitzRoy produced a [13] which was respected by the scientific community”，与原文的对应非常整齐：produced 对应 published，which was respected by the scientific community 对应 which was recognised by other scientists to be well ahead of its time（be recognised by 即被认可、受尊重，scientific community 是 other scientists 的集合式表达），中间被 produced 的对象就是原文的 a book。从词性看，空格前是不定冠词 a，其后需要可数名词单数，故填 book。回填自检：“FitzRoy produced a book which was respected by the scientific community” 与原文 “he published a book about weather forecasting which was recognised by other scientists to be well ahead of its time” 意思一致，仅语态与措辞做了同义替换，说明答案成立。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
