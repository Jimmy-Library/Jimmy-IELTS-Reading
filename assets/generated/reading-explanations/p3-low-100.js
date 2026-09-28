(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-low-100", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-low-100",
  "meta": {
    "examId": "p3-low-100",
    "title": "Mirror 镜子研究",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–30 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 30
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "The conflicting nature of mirrors makes them inappropriate aids for investigating human thought.",
          "translation": "镜子本身自相矛盾的特性，使它们不适宜作为研究人类思维的工具。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "To scientists, the simultaneous simplicity and complexity of mirrors make them effective and accessible tools for exploring questions about perception and cognition in humans and other 'intelligent' species, and about how the brain interprets and acts upon the great mass of sensory information from the external world."
          },
          "synonyms": [
            "“the conflicting nature of mirrors” 对应原文的 “the simultaneous simplicity and complexity of mirrors”：原文说的是“简单与复杂同时并存”，并没有说这两点互相冲突",
            "“inappropriate aids” 与原文的 “effective and accessible tools” 正相反，effective 意为“有效的”、accessible 意为“易于获得和使用的”",
            "“investigating human thought” 同义替换为原文的 “exploring questions about perception and cognition in humans”，perception and cognition（感知与认知）即人类的思维活动"
          ],
          "locatingTip": "定位：题干的核心名词是 aids for investigating human thought，全文只有第 2 段开头讲“镜子为什么是研究思维的合适工具”，抓住 complexity、perception、cognition 这组学术词即可一步锁定，不必读完全篇。确定答案技巧：判断题遇到评价性形容词（inappropriate、useless、harmful、misleading）时，先回原文确认作者的态度是褒是贬。原文明确写 “the simultaneous simplicity and complexity of mirrors make them effective and accessible tools”，把“既简单又复杂”直接当作“有效的、易得的研究工具”的理由，与题干“因性质矛盾而不合适”完全对立，观点冲突即为 NO。",
          "analysis": "第 2 段是本文的科学价值段，首句为：“To scientists, the simultaneous simplicity and complexity of mirrors make them effective and accessible tools for exploring questions about perception and cognition in humans and other 'intelligent' species, and about how the brain interprets and acts upon the great mass of sensory information from the external world.”（在科学家看来，镜子既简单又复杂这一双重特性，使它们成为有效且易于取用的工具，用来探究人类及其他“智能”物种的感知与认知问题，以及大脑如何解读并作用于来自外部世界的大量感官信息）。题干把原文的 “simultaneous simplicity and complexity”（简单与复杂并存）改写为 “the conflicting nature”（相互冲突的性质），又把结论从 “effective and accessible tools”（有效且易得的工具）反转为 “inappropriate aids”（不合适的辅助工具）。两处改写方向都不对：第一处，simultaneous 强调“同时存在”，不等于 conflicting“彼此矛盾”；第二处，effective 与 inappropriate 是典型的态度对立。作者随后还列举了镜子被用于研究自我与他者的区分、距离判断、三维世界的重建等多个认知问题，可见“研究人类思维”正是原文大力肯定的用途。因此题干与原文观点相悖，答案为 NO。",
          "traps": [
            "为什么不是 YES：原文对镜子用于认知研究的评价是积极的（effective and accessible tools），并且紧接着用 “Mirrors are used to study how the brain decides what is self and what is other…” 举证说明它确实被用于这类研究；题干却说镜子“不合适”，与作者观点直接相反，因此不能选 YES。",
            "为什么不是 NOT GIVEN：原文既明确描述了镜子的特性（simultaneous simplicity and complexity），又明确给出了对这一特性的评价（effective and accessible tools），题干所问的两点（性质、是否适合研究思维）原文都有交代，属于“有相反信息”而非“信息缺失”，所以是 NO 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Humans find it difficult to distinguish between reflections of two- and three-dimensional objects.",
          "translation": "人类很难分辨二维物体与三维物体的镜像。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Mirrors are used to study how the brain decides what is self and what is other, how it judges distance, and how it reconstructs the richly three-dimensional quality of the outside world from what is essentially a two-dimensional snapshot taken by the retina of the eye."
          },
          "synonyms": [
            "“two- and three-dimensional” 与原文的 “the richly three-dimensional quality … a two-dimensional snapshot” 使用同一组词，说明题干落在这一句的信息区域内",
            "“reflections of … objects” 对应原文的 “snapshot taken by the retina of the eye”，讲的是眼睛所接收的影像",
            "“find it difficult to distinguish” 在原文中没有任何对应：原文只是客观描述大脑如何 “reconstructs the richly three-dimensional quality”，既没有说人会混淆两者，也没有做任何难度评价"
          ],
          "locatingTip": "定位：题干的独有信息是 two-dimensional / three-dimensional 这组数字加量词，全文只要出现这组词就只在第 2 段第 2 句。确定答案技巧：定位之后要区分“原文描述了什么”和“题干断言了什么”。原文的落点是大脑 “reconstructs the richly three-dimensional quality of the outside world from what is essentially a two-dimensional snapshot”，说的是大脑把二维的视网膜影像重建出三维感，主语是大脑的功能；题干却把话题换成了“人能不能分辨二维与三维物体的镜像”，并且加上了 “find it difficult” 这一主观难度判断。原文对“分辨镜像属于二维还是三维”这件事毫无交代，属于信息缺失，故判 NOT GIVEN。切记：出现相同词汇不等于观点相同，必须核对题干的谓语和评价词在原文有没有对应。",
          "analysis": "原文第 2 段第 2 句：“Mirrors are used to study how the brain decides what is self and what is other, how it judges distance, and how it reconstructs the richly three-dimensional quality of the outside world from what is essentially a two-dimensional snapshot taken by the retina of the eye.”（镜子被用来研究大脑如何判断什么是自我、什么是他者，如何判断距离，以及如何从眼睛视网膜拍下的本质上属于二维的“快照”中重建出外部世界丰富的三维质感）。这句话确实同时出现了 two-dimensional 与 three-dimensional，但它的语义重心是“大脑把二维影像重建为三维知觉”这一加工过程，是对大脑机制的陈述。题干的落点却是 “Humans find it difficult to distinguish between reflections of two- and three-dimensional objects.”，即在问“人是否难以分辨二维物体与三维物体的镜像”。原文既没有说人难以区分，也没有说不难区分，更没有把二维与三维影像的混同作为一项结论或发现。此外，第 2 段后面的 “The object 'inside' the mirror is virtual, but as far as our eyes are concerned, it exists as much as any other object.” 也只在说镜中影像对眼睛而言同样真实，不涉及“难以分辨二维/三维”的难度问题。三者都没有对应信息，因此只能判 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文虽然出现了 two-dimensional 和 three-dimensional，但讲的是大脑“把二维快照重建为三维质感”的能力，方向恰恰是大脑在完成这一转换，而不是人在分辨时遇到困难；而且原文没有出现任何表示难度、混淆或困难的措辞（difficult、confuse、cannot tell 等），无法支持题干。",
            "为什么不是 NO：NO 需要原文给出与题干相反的说法，例如“人们很容易分辨二维与三维的镜像”。原文对此完全没有表态，只讨论了大脑的重建机制，所以不能判 NO，只能判信息缺失的 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Illusions using mirrors can help in the treatment of medical problems.",
          "translation": "利用镜子制造的错觉有助于治疗医学病症。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Mirrors are applied in medicine to create reflected images of patients' limbs or other body parts and thus trick the brain into healing itself. Mirror therapy has been successful in treating chronic pain and paralysis."
          },
          "synonyms": [
            "“Illusions using mirrors” 同义替换为原文的 “create reflected images of patients' limbs or other body parts and thus trick the brain”，trick the brain（欺骗大脑）就是制造错觉",
            "“can help in the treatment” 同义替换为原文的 “has been successful in treating”，can help 与 has been successful 都表示实际有效",
            "“the treatment of medical problems” 同义替换为原文的 “in medicine” 加 “chronic pain and paralysis”，把笼统的“医学病症”具体化为慢性疼痛与瘫痪"
          ],
          "locatingTip": "定位：题干的两个抓手是 mirrors 与 treatment of medical problems，全文把镜子与医学治疗放在一起讲的只有第 2 段中间两句，medicine、Mirror therapy、chronic pain、paralysis 都是极显眼的定位词。确定答案技巧：判断题看到医疗效果，要区分“只是提出设想”与“已经证实有效”。原文先写 “Mirrors are applied in medicine to create reflected images … and thus trick the brain into healing itself.”（用镜中影像欺骗大脑使之自我修复），紧接着给出结论 “Mirror therapy has been successful in treating chronic pain and paralysis.”（镜像疗法已成功治疗慢性疼痛与瘫痪）。successful 一词把“有助于治疗”落到实处，与题干的 can help 意思一致，故判 YES。",
          "analysis": "原文第 2 段第 3、4 句：“Mirrors are applied in medicine to create reflected images of patients' limbs or other body parts and thus trick the brain into healing itself. Mirror therapy has been successful in treating chronic pain and paralysis.”（在医学上，镜子被用来为病人的肢体或其他身体部位制造倒影，从而欺骗大脑让它自我修复。镜像疗法已成功治疗慢性疼痛和瘫痪）。题干的三层信息在原文中一一对应：一是“用镜子制造错觉”，对应 create reflected images … thus trick the brain；二是“医学治疗用途”，对应 applied in medicine 与 Mirror therapy；三是“对医学病症有助益”，对应 has been successful in treating chronic pain and paralysis。原文不仅提出机制，还给出了疗效结论（successful），态度明确为肯定，因此答案是 YES。答题时注意题干用的是 can help（能够有帮助），语气比原文的 has been successful 更弱，弱化表述与更强的原文陈述同向，不构成矛盾。",
          "traps": [
            "为什么不是 NO：原文明确写出 “Mirror therapy has been successful in treating chronic pain and paralysis.”，successful 是正面结论，与题干“有助于治疗”方向一致，不存在任何相反信息，因此不能选 NO。",
            "为什么不是 NOT GIVEN：原文既交代了运作方式（create reflected images … trick the brain into healing itself），又给出了具体疗效（treating chronic pain and paralysis），信息完整且明确支持题干，属于“有相同信息”而非“未提及”，所以是 YES。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "Mirrors for use in scientific experiments have to be constructed to precise specifications.",
          "translation": "用于科学实验的镜子必须按照精确的规格制造。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Whether made of highly polished metal or of glass with a coating of metal on the back, mirrors have fascinated people for thousands of years."
          },
          "synonyms": [
            "“constructed” 与原文的 “made of” 对应，都指镜子的制作方式",
            "“to precise specifications” 在原文中找不到任何对应：原文只给出两种材料（高度抛光的金属、背面镀金属的玻璃），并未提出任何精度或规格要求",
            "第 2 段虽然讲镜子是科研工具，但对它的评语却是 “effective and accessible”（有效且易于取用），accessible 反而暗示没有特别苛刻的制造门槛"
          ],
          "locatingTip": "定位：题干的关键词是 scientific experiments 与 constructed / specifications。全文谈镜子制作方式的只有第 1 段首句（polished metal、coating of metal on the back），谈科研用途的则是第 2 段首句，两处都需要核对。确定答案技巧：题干的核心断言是“必须按精确规格制造（have to be constructed to precise specifications）”，这是一个关于制造标准的要求；原文对制作只作了材料层面的分类描述，对科研用途只给了一句 “effective and accessible tools”（有效且易于取用）的评价，从头到尾没有出现 specification、standard、precision、accuracy 之类的词，也没有说实验用镜有什么特殊要求，属于信息缺失，故判 NOT GIVEN。不要因为原文提到了镜子的“制造”和“科研用途”就自行把两者连起来推出规格要求。",
          "analysis": "第 1 段首句：“Whether made of highly polished metal or of glass with a coating of metal on the back, mirrors have fascinated people for thousands of years.”（无论是由高度抛光的金属制成，还是由背面镀了一层金属的玻璃制成，镜子数千年来一直令人们着迷）。这句话只交代镜子的两种材质，随后全段转入镜子的历史文化用途（古埃及人手持镜子、印度拉贾斯坦邦人把反光玻璃缝在衣服上）。第 2 段虽然把镜子定位为科研工具，但用的表述是 “make them effective and accessible tools for exploring questions about perception and cognition”（使它们成为有效且易于取用的工具），其中 accessible 意为“容易获得、门槛不高”，与题干 “have to be constructed to precise specifications”（必须按精确规格制造）所暗示的严格标准恰恰相反。原文通篇没有提到实验对镜面精度、曲率、材质级别等技术指标的要求，题干所述属于无据推断，因此答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文没有任何一句说科研用镜需要满足特定规格。要支持 YES，原文必须出现“必须达到某种标准”“精度要求”之类的表述，而这类内容在本篇完全缺席；相反，accessible 一词还暗示镜子的取用没有高门槛，所以不能选 YES。",
            "为什么不是 NO：NO 需要原文明确否定“需要精确规格”，例如说“实验用镜无需任何特殊要求”。原文并没有正面否认这一点，只是没有提及制造标准，因此不能判 NO，只能判 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 31–34 单项选择题（四选一）",
      "mode": "per_question",
      "questionRange": {
        "start": 31,
        "end": 34
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "If a mirror is present during certain experiments, the subjects tend to",
          "translation": "如果在某些实验过程中放着一面镜子，受试者往往会",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Subjects tested in a room with a mirror have been found to work harder and to be less inclined to cheat, compared with control groups performing the same exercises in non-mirrored settings."
          },
          "synonyms": [
            "“If a mirror is present during certain experiments” 同义替换为原文的 “Subjects tested in a room with a mirror”，并补出了对照组 “control groups performing the same exercises in non-mirrored settings”",
            "“act more industriously” 同义替换为原文的 “work harder”",
            "“independently” 对应原文的 “less inclined to cheat”，即在没有外部监督的情况下也能自主守规、独立完成练习"
          ],
          "locatingTip": "定位：题干的实验情境词 a mirror is present during certain experiments 直接指向第 3 段第 2 句 —— 原文用 “Subjects tested in a room with a mirror” 与 “control groups … in non-mirrored settings” 做对照实验，受试者（subjects）与实验（tested）两组词一次到位。确定答案技巧：做这类“实验结果指向哪个选项”的题，先把原文的关键动词搭配圈出来 —— 原文是 work harder 与 less inclined to cheat，两个都是正面自我约束的表现；再回选项里找同义改写，只有 B（act more industriously and independently）能同时覆盖“更努力”与“更自律独立”两层意思。",
          "analysis": "第 3 段第 2 句：“Subjects tested in a room with a mirror have been found to work harder and to be less inclined to cheat, compared with control groups performing the same exercises in non-mirrored settings.”（在有镜子的房间里接受测试的受试者被发现比在无镜环境中做同样练习的对照组更努力，也更不容易作弊）。这里包含两组对应关系：work harder 对应选项 B 的 act more industriously（更勤勉），less inclined to cheat 对应选项 B 的 independently（能够自主约束、不依赖监督）。原文随后还补充了另一个正面效应 —— 受试者更不容易依据负面社会刻板印象（性别、种族、宗教）去评判他人，可见“镜子的存在”带来的是自我觉察提升后更自律、更少偏差的行为，方向与 B 一致。原文完全支持 B。",
          "traps": [
            "A（monitor the behaviour of other subjects）错误：原文第 3 段明确说在镜子房间里的人 “were comparatively less likely to make judgements about others based on negative social stereotypes”，注意力是转向内省而不是盯着别人；把“受试者”当成“观察他人者”属于张冠李戴。",
            "C（become less confident of themselves）错误：原文列举的后果是“更努力、更少作弊、更少以刻板印象评判他人”，全部是正面的自我约束与自我觉察，没有任何“自信下降”“缺乏信心”的表述，属于无中生有。",
            "D（focus overwhelmingly on their own reflection）错误：原文说镜子的作用机制是引发自我觉察（when people are made to be self-aware … a shift away from acting on autopilot），落点是行为方式的改变而非把全部注意力放在自己的倒影上；而本段关于镜子效应的描述中，overwhelmingly 这类绝对化的程度词毫无依据。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Research results imply that physical self-reflection leads people to be",
          "translation": "研究结果表明，身体层面的自我审视（即照镜子）会让人们变得",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In addition, the researchers found that people in a room with a mirror were comparatively less likely to make judgements about others based on negative social stereotypes concerning, for example, sex, race or religion."
          },
          "synonyms": [
            "“physical self-reflection” 同义替换为原文第 3 段末句的 “Physical self-reflection”，在本句中则体现为 “people in a room with a mirror”（照镜子的情境）",
            "“leads people to be more tolerant of others” 同义替换为原文的 “less likely to make judgements about others based on negative social stereotypes”，不再凭负面刻板印象评判他人，即对他者更宽容",
            "“Research results imply” 同义替换为原文的 “the researchers found that”"
          ],
          "locatingTip": "定位：题干的 physical self-reflection 是第 3 段末句的原词（Physical self-reflection），它在原文中是对本段研究的总结，因此答案的依据就在这一段里。确定答案技巧：这一段一共给出三项研究结论 —— 更努力工作、更少作弊（第 2 句），更少依据负面社会刻板印象评判他人（第 3 句），自我觉察导致行为方式的改善（第 4、5 句）。题干问的是“对他人”的态度，只与第 3 句的 “less likely to make judgements about others based on negative social stereotypes” 对应，“不以负面偏见评判他人”就是“更宽容（more tolerant）”，故选 A。",
          "analysis": "第 3 段第 3 句：“In addition, the researchers found that people in a room with a mirror were comparatively less likely to make judgements about others based on negative social stereotypes concerning, for example, sex, race or religion.”（此外，研究者发现，在有镜子的房间里，人们相对更不容易根据涉及性别、种族或宗教等的负面社会刻板印象去评判他人）。本段末句进一步总结：“Physical self-reflection, in other words, encourages philosophical self-reflection — a lesson in the ancient Greek notion that you cannot know or appreciate others until you know yourself.”（换言之，身体层面的自我审视促成了精神层面的自我审视 —— 这也印证了古希腊那条“除非认识自己，否则无法了解或欣赏他人”的训诫）。题干问 “physical self-reflection leads people to be …”，落点就是本段所述研究结论。三项结论中唯一涉及“对他人态度”的是“更少以负面刻板印象评判他人”，把 negative social stereotypes 这一评判依据取消，就等于对他人更包容、更少偏见，与选项 A 的 more tolerant of others 完全吻合。",
          "traps": [
            "B（more satisfied with their own lives）错误：原文本段讨论的是对他人的评判方式与自我觉察，完全没有涉及生活满意度；文中唯一带“对自己满意”色彩的内容在第 6 段（人们把自身多个形象 “resolve … in their favour”），那讲的是对自己外貌的看法，不是对自己生活的满意程度。",
            "C（more open to learning from others）错误：原文末句的希腊训诫说的是“先认识自己，才能了解或欣赏他人（know or appreciate others）”，强调的是理解与欣赏他人的前提，而不是“向他人学习（learning from others）”，learning 在原文中没有任何对应。",
            "D（more likely to accept unpopular ideas）错误：原文提到的态度改变集中在“不以性别、种族、宗教等负面刻板印象评判他人”，属于减少偏见，与“接受不受欢迎的观点（unpopular ideas）”是两回事，原文从未讨论观点是否受欢迎。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "The successful completion of a well-known mirror test suggests that the animal subjects",
          "translation": "某种著名镜子测试的成功通过，表明参与测试的动物",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Animals that live in communal units, such as the great apes – chimpanzees, bonobos, orangutans and gorillas – along with dolphins and Asian elephants, have passed the famed mirror self-recognition test, which means they will, when given a mirror, scrutinize marks that have been applied to their faces or bodies."
          },
          "synonyms": [
            "“a well-known mirror test” 同义替换为原文的 “the famed mirror self-recognition test”，famed 意为著名的，self-recognition 补偿了题干的语义空白",
            "“the successful completion of” 同义替换为原文的 “have passed”",
            "“realise that the marks they see are on their own body” 同义替换为原文的 “scrutinize marks that have been applied to their faces or bodies”，动物之所以反复细看涂在自己身上的标记，正是因为它认出镜中影像属于自己"
          ],
          "locatingTip": "定位：题干里的 mirror test 与 animal subjects 是这篇第 4 段的标志性内容，段落中 “mirror self-recognition test”“mark” 等词都是强定位词。确定答案技巧：题干问“通过测试说明了什么”，原文用 which means 这个显式的因果连接词给出了答案，其后紧接的 “they will, when given a mirror, scrutinize marks that have been applied to their faces or bodies” 就是测试的含义 —— 动物对着镜子反复查看涂在自己脸上或身上的标记，说明它把镜中影像认作自身（self-recognition），对应选项 C。做本题的关键是要把 which means 后面的内容当作判定依据，而不要把段落后半句的补充发现（检查口腔、鼻孔等卫生状况）误当成测试本身所证明的内容。",
          "analysis": "第 4 段第 2 句：“Animals that live in communal units, such as the great apes – chimpanzees, bonobos, orangutans and gorillas – along with dolphins and Asian elephants, have passed the famed mirror self-recognition test, which means they will, when given a mirror, scrutinize marks that have been applied to their faces or bodies.”（生活在群体单元中的动物 —— 如大型猿类中的黑猩猩、倭黑猩猩、红毛猩猩和大猩猩，以及海豚和亚洲象 —— 都通过了著名的镜像自我识别测试，也就是说，当给它们一面镜子时，它们会仔细端详涂在自己脸上或身上的标记）。句中 which means 直接解释了“通过测试”的含义：动物会对着镜子反复检查自己身上的标记，这一行为的逻辑前提就是它认出镜中的影像是自己、标记位于自己身上，因此对应选项 C “realise that the marks they see are on their own body”。第 3 句 “The animals will also check up on personal cleanliness, inspecting their mouths, nostrils and bodies.” 是紧接其后的补充观察，用 also 标明它是另外一层发现，而不是测试所证明的内容。",
          "traps": [
            "A（find the image in the mirror uninteresting）错误：原文用的动词是 scrutinize（仔细端详），并且明确说动物会去查看涂在自己身上的标记，说明它们对镜中影像高度关注、反复检视，与“觉得不感兴趣”完全相反。",
            "B（recognise the basic need for personal cleanliness）错误：原文确实提到动物会 “check up on personal cleanliness”，但那是第 3 句用 also 引出的附加发现，属于通过测试之后的另一项行为观察；题干问的是“通过测试本身说明了什么”，原文用 which means 给出的解释只包含对标记的端详，因此 B 属于把补充信息误当成测试含义。",
            "D（understand that marks on their face have been made deliberately）错误：原文只说明标记被涂在动物的脸上或身上（marks that have been applied to their faces or bodies），完全没有任何关于动物是否明白这些标记“是被人有意涂上”的表述，deliberately（故意地）这一层推断在原文中没有依据。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "Which of the following is the most suitable title for Reading Passage 3?",
          "translation": "下列哪一项最适合作为第 3 篇阅读文章（Reading Passage 3）的标题？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Research has shown that mirrors can subtly affect human behaviour, often in surprisingly positive ways."
          },
          "synonyms": [
            "“Psychological responses to mirror images” 概括了全文第 2 至第 7 段的主线：镜子如何影响人的感知、认知、行为与自我认知",
            "“psychological responses” 同义替换为原文的 “affect human behaviour” 与 “perception and cognition”，都属于心理与行为层面",
            "“mirror images” 对应原文 “the face in the mirror”“the object 'inside' the mirror” 等对镜中影像的讨论"
          ],
          "locatingTip": "定位：主旨题没有单一答案句，做法是把各段首句串起来读。第 2 段讲镜子是研究感知与认知的工具，第 3 段讲镜子改变人的行为，第 4 段讲动物的镜像自我识别，第 5 段讲人类对镜中面孔的自我美化，第 6 段讲人们如何拼合出理想化的自我形象，第 7 段讲人们对镜中影像大小的错误估计 —— 六段全部围绕“镜子引发的心理与行为反应”展开。确定答案技巧：主旨题排除的标准是“覆盖面太窄”。把每个选项与全文段落一一对照，只有 B 能涵盖第 2 至第 7 段，其余三项都只能覆盖个别句子或个别段落。",
          "analysis": "本文除第 1 段简述镜子的材质与悠久历史外，主体（第 2 至第 7 段）是一条完整的心理学主线：第 2 段说镜子是研究感知与认知（perception and cognition）的工具，涉及自我与他者的区分、距离判断、三维世界的重建；第 3 段用对照实验说明镜子让人更努力、更少作弊、更少以负面刻板印象评判他人，即 “mirrors can subtly affect human behaviour”；第 4 段讲动物通过镜像自我识别测试；第 5 段讲人们更愿意把经过美化的照片当作自己真实的脸；第 6 段讲人们把不同场合的多个自我形象拼合出一个偏袒自己的心理表征；第 7 段讲人们对镜中脸部大小与后退时影像变化的普遍误解。六段共同回答的问题是“镜中的影像在心理层面引发了什么反应”，因此选项 B “Psychological responses to mirror images” 最全面，作标题最合适。",
          "traps": [
            "A（Conflicting interpretations of mirror research）错误：全文列举的是一项项研究结论（对照实验、自我识别测试、照片选择实验、大小估计实验），各结论之间方向一致 —— 都说明人对镜中影像的反应偏离客观真实，并不存在彼此冲突的观点交锋（conflicting interpretations），第 2 段反而把镜子的“简单与复杂”说成使它有用（make them effective and accessible tools），而非引起分歧。",
            "C（The physical properties of mirrors）错误：镜子的物理属性只在第 1 段（抛光金属、背面镀金属的玻璃）出现过一句，第 7 段虽然涉及影像大小这一光学现象，但落点是人们的错误估计（psychologists interviewed people about what they think a mirror shows them），仍属于心理层面；用“物理属性”作标题会丢掉全文六分之五的内容。",
            "D（The use of mirrors through history）错误：历史内容只集中在第 1 段（古埃及人手持镜子、印度拉贾斯坦邦人把反光玻璃缝进衣服），第 2 段以后全部转向当代的科学与心理学研究，历史只是引子，不能概括全文。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 35–40 句子结尾匹配（Complete each sentence with the correct ending, A–I）",
      "mode": "per_question",
      "questionRange": {
        "start": 35,
        "end": 40
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "Dr Epley found that when identifying images of themselves, people",
          "translation": "埃普利（Epley）博士发现，在辨认自己的照片时，人们……",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Participants identified their personal photographs significantly quicker when their faces had been computer-enhanced to be more appealing and they were likely to call this retouched image their genuine face."
          },
          "synonyms": [
            "“identifying images of themselves” 同义替换为原文的 “identified their personal photographs”",
            "“find the photographs faster” 同义替换为原文的 “identified … significantly quicker”",
            "“if they are made to look attractive” 同义替换为原文的 “their faces had been computer-enhanced to be more appealing”，computer-enhanced 即“被（电脑）修饰过”，appealing 即“有吸引力”"
          ],
          "locatingTip": "定位：题干的人名 Dr Epley 是第 5、6 段的标志词，而“辨认自己的照片”这一具体实验只在第 5 段出现，抓住 personal photographs 与 quicker 即可锁定第二个实验句。确定答案技巧：这类句子结尾匹配题，先把题干的主谓结构找全（people + identify their own images），再回原文找同一动作的动词及其结果状语。原文的动作是 identified their personal photographs，结果状语是 significantly quicker when their faces had been computer-enhanced to be more appealing，把 quicker 与 appealing 依次对应到选项 H 的 faster 与 made to look attractive，即可确定 H。注意题干只问“更快”这一结果，选项 H 的两个要点（faster、attractive）都能在原文找到对应，是唯一完全吻合的选项。",
          "analysis": "第 5 段讲埃普利博士关于“人们并不客观看待自己的脸”的实验。定位句为：“Participants identified their personal photographs significantly quicker when their faces had been computer-enhanced to be more appealing and they were likely to call this retouched image their genuine face.”（当参与者的脸被电脑修饰得更有吸引力时，他们辨认自己的照片明显更快，而且很可能会把这个修饰过的形象称为自己真实的脸）。对应到选项 H “locate the photographs faster if they are made to look attractive.”：locate … photographs 对应 identified their personal photographs，faster 对应 significantly quicker，made to look attractive 对应 had been computer-enhanced to be more appealing。三处要点逐一吻合，故答案为 H。其余选项的排除理由：D（recognise familiar faces much more readily）与本句的“辨认自己的照片”不符（familiar faces 范围过宽，且原文的比较对象是同一批人的两类照片）；E 讲的是镜中脸部大小的估计，属于第 7 段；F 讲的是辨认陌生人照片时的结果，属于第 36 题。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "When trying to identify images of unfamiliar individuals, Dr Epley found that people most frequently",
          "translation": "在辨认不熟悉的人的照片时，埃普利博士发现人们最常……",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "when asked to match photographs of strangers, participants were, in fact, best at spotting unenhanced faces — that is, those not made to look prettier."
          },
          "synonyms": [
            "“unfamiliar individuals” 同义替换为原文的 “strangers”",
            "“trying to identify images of” 同义替换为原文的 “asked to match photographs of”",
            "“most frequently” 同义替换为原文的 “best at”，原文还用 in fact 强调这一结果与直觉相反",
            "“select those photographs which have not been altered” 同义替换为原文的 “best at spotting unenhanced faces”，破折号后的 “that is, those not made to look prettier” 正是对 unenhanced 的解释"
          ],
          "locatingTip": "定位：题干的关键词是 unfamiliar individuals（陌生人），原文第 5 段末尾用 strangers 与之对应，且带有 in fact 这一转折标记，属于作者刻意强调的反直觉发现，非常容易被命题。确定答案技巧：注意本段存在“自己”和“陌生人”两组对照实验 —— 辨认自己的照片时人们偏爱被美化过的版本（第 35 题），辨认陌生人的照片时人们反而最擅长挑出未被美化的版本（第 36 题）。题干出现 unfamiliar individuals 时，务必回原文找 strangers 所在的那半句，锁定 unenhanced faces，其同义解释就是选项 F 的 “those photographs which have not been altered”。千万不要把两个实验的结果混在一起，这是本题最大的陷阱。",
          "analysis": "第 5 段末句：“This self-delusion is not simply the result of a widespread preference for prettiness: when asked to match photographs of strangers, participants were, in fact, best at spotting unenhanced faces — that is, those not made to look prettier.”（这种自我欺骗并不只是普遍偏好美貌的结果：当被要求匹配陌生人的照片时，参与者其实最擅长认出那些未被修饰过的脸 —— 也就是那些没有被做得更漂亮的脸）。题干 “identify images of unfamiliar individuals” 对应原文的 match photographs of strangers，“most frequently” 对应 best at spotting，答案内容是 unenhanced faces，破折号后的同位语 “those not made to look prettier” 明确其含义为“未经修饰的”，即选项 F “select those photographs which have not been altered.”，因此第 36 题选 F。其余选项排除：H 属于“辨认自己的照片”那一半实验的结果（第 35 题）；D 的 familiar faces 与 strangers 正相反；E、C 均出自第 7 段的尺寸估计，与本题无关。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "Dr Epley says that a single objective reflection is impossible because people",
          "translation": "埃普利博士说，单一的客观镜像之所以不可能存在，是因为人们……",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Dr Epley explains that, although we do indeed see ourselves in the mirror every day, we don't look exactly the same every time. There is the just-out-of-bed morning you, the ready-for-work you, the dressed-for-an-elegant-dinner you."
          },
          "synonyms": [
            "“a single objective reflection” 对应原文的 “we don't look exactly the same every time”，既然每次都不一样，就不存在唯一、固定的那个镜中形象",
            "“are confronted daily with their images in a variety of situations” 同义替换为原文的 “we do indeed see ourselves in the mirror every day … the just-out-of-bed morning you, the ready-for-work you, the dressed-for-an-elegant-dinner you”，即每天在各种场合见到自己的样子",
            "“faced with their images” 与原文的 “see ourselves in the mirror” 同义"
          ],
          "locatingTip": "定位：题干的人名 Dr Epley 加上关键词 single / objective reflection，指向第 6 段第 2 句 “Dr Epley explains that, although we do indeed see ourselves in the mirror every day, we don't look exactly the same every time.”。确定答案技巧：题干的原因状语 because 要求找出“为什么没有单一的客观镜像”，原文给出的理由紧跟在 although 之后 —— 我们虽然每天照镜子，但每次的样子并不相同，随后列举“刚起床的你、准备上班的你、盛装赴宴的你”作为“各种场合”的证据，对应选项 B “are confronted daily with their images in a variety of situations.”。做题时要抓住 every day（对应 daily）与 just-out-of-bed / ready-for-work / dressed-for-an-elegant-dinner（对应 a variety of situations）这两个对应点。",
          "analysis": "第 6 段解释人们为何如此自我美化时可以理解为：第 1 句提出疑问 “How can we be so self-delusional when the truth stares back at us?”，第 2 句给出埃普利的解释 —— “Dr Epley explains that, although we do indeed see ourselves in the mirror every day, we don't look exactly the same every time. There is the just-out-of-bed morning you, the ready-for-work you, the dressed-for-an-elegant-dinner you. Which image is you?”（埃普利博士解释说，我们虽然确实每天都照镜子，但每次的样子并不完全一样。有刚起床的你、准备上班的你、盛装赴宴的你。哪一个才是你？）。题干说“单一的客观镜像不可能存在”，原因正是原文所列的“每天在各种场合反复看到不同版本的自己”，对应选项 B “are confronted daily with their images in a variety of situations.”。其余选项排除：I 描述的是“人们如何形成对自己的看法”，回答的是第 38 题；E、C 均出自第 7 段的尺寸估计；G “find there is little change in the image they face” 说的是镜中影像本身变化很小，与“每次的自己都不同”这一原因相反，属于本句的干扰项。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Dr Epley says that when forming an opinion of how they think they look, people",
          "translation": "埃普利博士说，在形成关于自己长什么样的看法时，人们……",
          "answer": "I",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "People on average resolve the question of these multiple images of themselves in their favour. That is, they piece together a mental representation formed from different aspects of themselves when they are looking their best."
          },
          "synonyms": [
            "“forming an opinion of how they think they look” 同义替换为原文的 “resolve the question of these multiple images of themselves” 与 “piece together a mental representation”",
            "“a positive generalised self-image” 同义替换为原文的 “in their favour” 与 “when they are looking their best”，即把“自己最好状态”的各个侧面拼成一个整体的正面形象",
            "“generalised” 对应原文的 “formed from different aspects of themselves”，把不同方面的信息汇成一个总体印象"
          ],
          "locatingTip": "定位：题干的关键词是 forming an opinion of how they think they look，第 6 段末尾用 “resolve the question of these multiple images of themselves” 与 “piece together a mental representation” 表达同一动作，属于该段结论句，非常适合命题。确定答案技巧：抓到结论句后要盯住两个带感情色彩的短语 —— in their favour（对自己有利）和 when they are looking their best（自己最好看的时候），前者说明结果偏正面（positive），后者说明素材来自多个方面并加以汇总（generalised），两者合起来正是选项 I “create a positive generalised self-image.”。注意不要错选 B（are confronted daily with their images in a variety of situations），那句说的是“每天在各种场合见到自己”，回答的是第 37 题的原因，而不是本题所问的“如何形成对自己外貌的看法”。",
          "analysis": "第 6 段末两句：“People on average resolve the question of these multiple images of themselves in their favour. That is, they piece together a mental representation formed from different aspects of themselves when they are looking their best.”（人们平均而言会以对自己有利的方式来解决“哪个才是我”这一问题。也就是说，他们把自己处于最佳状态时的各个不同侧面拼合成一个心理形象）。题干问的是“在形成对自己的外貌的看法时人们会怎么做”，原文的答案是：从多个版本中挑出有利的部分、拼合成一个总体的、正面的自我形象，恰好对应选项 I “create a positive generalised self-image.”：positive 对应 in their favour 与 looking their best，generalised 对应 formed from different aspects of themselves（把方方面面汇总成一个概括形象），self-image 对应 mental representation of themselves。其余选项排除：B（are confronted daily with their images in a variety of situations）对应的是第 37 题那一问（每天在各种场合照镜子），与本题“形成对自己外貌的看法”所指不同；G、C、E 都出自第 7 段的尺寸估计实验。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "When guessing the size of their mirrored face from close up, people",
          "translation": "在就近猜测镜中自己脸部的大小时，人们……",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "To the first question, people overwhelmingly say 'The outline of my face on the mirror would be pretty much the size of my face. As for the second question, that's obvious: if I move away from the mirror, the size of my image will shrink with each step.'"
          },
          "synonyms": [
            "“guessing the size” 同义替换为原文第 7 段的提问 “how big do you think the image of your face is on the surface” 与 “people overwhelmingly say”",
            "“from close up” 对应原文第 1 个问题的情境（站在浴室镜前），与第 2 个问题“往后退”的情形相对",
            "“estimate the image to be larger than it actually is” 依据原文的 “pretty much the size of my face”（以为影像和脸一样大）与后文 “you will find it to be exactly half the size of your real face”（实际只有脸的一半），以为的比实际的大得多"
          ],
          "locatingTip": "定位：题干的关键词是 size of their mirrored face 与 from close up，第 7 段正好是两个问卷问题，其中第 1 问 “how big do you think the image of your face is on the surface” 对应“就近估计脸部大小”，第 2 问对应“向后退”的情形，要看准题目问的是哪一问。确定答案技巧：判断时要“先看人们怎么答、再看事实是什么”。原文第 1 问的回答是 “The outline of my face on the mirror would be pretty much the size of my face.”（我以为镜中脸的轮廓差不多就跟我的脸一样大），而事实是 “Outline your face on a mirror, and you will find it to be exactly half the size of your real face.”（实际只有真实脸的一半）。以为的和脸一样大、实际只有一半，说明人们把影像估大了，对应选项 E “estimate the image to be larger than it actually is.”。",
          "analysis": "第 7 段记录心理学家就“镜子显示了什么”所做的访谈。问卷第 1 问是 “Imagine you are standing in front of a bathroom mirror; how big do you think the image of your face is on the surface?”，人们的回答是 “The outline of my face on the mirror would be pretty much the size of my face.”（镜中我脸的轮廓差不多就是我脸的大小）。而原文随后给出的事实是 “Both answers, it turns out, are wrong. Outline your face on a mirror, and you will find it to be exactly half the size of your real face.”（两个回答都是错的。在镜面上描出你的脸，你会发现它恰好是你真实脸的一半大小）。把“以为等于脸的大小”与“实际只有一半”放在一起，可知人们的估计偏大，对应选项 E “estimate the image to be larger than it actually is.”，故第 39 题选 E。其余选项排除：G（find there is little change in the image they face）描述的是镜中影像“变化很小”这一事实，与本题所问的“就近估计大小”不是同一个问题；C（assume their image will get progressively smaller）对应第 40 题“往后退”的那一问；I 描述的是自我形象的拼合，属于第 38 题。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "As they imagine stepping backwards from a mirror, people",
          "translation": "在想象自己从镜子前向后退时，人们……",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Step back as much as you please, and the size of that outlined oval will not change: it remains half the size of your face, even as the background scene reflected in the mirror steadily changes."
          },
          "synonyms": [
            "“stepping backwards from a mirror” 同义替换为原文的 “Step back” 与提问中的 “if you step steadily backward, away from the glass”",
            "“assume their image will get progressively smaller” 同义替换为原文人们的回答 “if I move away from the mirror, the size of my image will shrink with each step”",
            "原文的事实 “the size of that outlined oval will not change” 与人们的假设正相反，这正是本题的考点"
          ],
          "locatingTip": "定位：题干的 stepping backwards 直接指向第 7 段第 2 问 “what will happen to the size of that image if you step steadily backward, away from the glass?”，锁定该问及其后的回答与结论即可。确定答案技巧：本段同样采用“先给人们的答案、再给事实”的结构。人们的回答是 “if I move away from the mirror, the size of my image will shrink with each step.”（每后退一步影像就缩小一点），而事实是 “Step back as much as you please, and the size of that outlined oval will not change”。题干问的是 people 的想法（imagine / assume），因此要以“人们的回答”为准，即“以为会逐步变小”，对应选项 C。特别提醒：选项 G “find there is little change in the image they face” 说的是原文的事实（影像大小不变），而不是人们的想象，属于把事实与看法对调的干扰项，这是本题最需要防范的陷阱。",
          "analysis": "第 7 段第 2 问：“And what will happen to the size of that image if you step steadily backward, away from the glass?”，人们的回答是 “As for the second question, that's obvious: if I move away from the mirror, the size of my image will shrink with each step.”（至于第二个问题，那很明显：如果我离开镜子，我的影像大小会随着每一步而缩小）。题干 “As they imagine stepping backwards from a mirror, people” 中的 imagine 正对应这种主观设想，因此答案取人们的回答 —— 影像会一步步变小，即选项 C “assume their image will get progressively smaller.”。原文随后用 “Both answers, it turns out, are wrong.” 以及 “Step back as much as you please, and the size of that outlined oval will not change: it remains half the size of your face, even as the background scene reflected in the mirror steadily changes.”（无论你后退多少，那个轮廓椭圆的大小都不会改变：它始终是你脸的一半，尽管镜中反射的背景场景在不断变化）来纠正这一误解 —— 变化的是背景，不是脸部影像的大小。因此 G（find there is little change in the image they face）描述的是事实而非人们的想象，不能选；E 对应第 1 问的就近估计，属于第 39 题。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
