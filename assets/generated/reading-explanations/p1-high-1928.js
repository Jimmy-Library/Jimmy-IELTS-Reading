(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1928", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1928",
  "meta": {
    "examId": "p1-high-1928",
    "title": "Willpower 意志力",
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
          "stem": "Willpower is the most significant factor in determining success in life.",
          "translation": "意志力是决定人生成功的最重要因素。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Although willpower does not shape our decisions, it determines whether and how long we can follow through on them. It almost single-handedly determines life outcomes."
          },
          "synonyms": [
            "“the most significant factor” 同义替换为原文的 “almost single-handedly determines”（几乎单凭一己之力就决定），两者都表示“近乎唯一的决定性因素”",
            "“in determining success in life” 同义替换为原文的 “determines life outcomes”（决定人生的结果）",
            "“Willpower” 原词复现，原文第二句的主语 It 即回指第一句的 willpower"
          ],
          "locatingTip": "定位：题干的核心词 willpower 与 life，第 1 段开头两句就以 willpower 作主语，第二句紧接出现 life outcomes，扫读首段即可一次锁定。确定答案技巧：本题考的是“程度最强”的表述（the most significant factor），判分关键看原文有没有给出同等级别的强度。原文用 almost single-handedly determines life outcomes（几乎是单凭它一项就决定了人生的结果）来评价意志力，其强度与“最重要因素”相当，方向一致，因此判 TRUE。注意不要因为首句的让步 “willpower does not shape our decisions” 就误判 FALSE——让步之后的主句仍然强调意志力决定我们能否坚持、坚持多久。",
          "analysis": "第 1 段开头两句即本题依据：“Although willpower does not shape our decisions, it determines whether and how long we can follow through on them. It almost single-handedly determines life outcomes.”（尽管意志力并不塑造我们的决定，但它决定我们能否把决定坚持执行下去、能坚持多久。它几乎单凭一己之力就决定了人生的结果）。题干把原文的 determines life outcomes 概括为 determining success in life，把 almost single-handedly determines（几乎独自决定）概括为 the most significant factor（最重要的因素），两处替换都是同向且强度相当的。原文随后还说，研究显示大众其实都意识到意志力对自身幸福有多么重要（how essential willpower is to their wellbeing），调查对象普遍把“缺乏意志力”列为作出有益人生改变的最大障碍，这些内容同样支持“意志力是最重要的因素”这一说法。需要特别注意的是首句的让步结构：原文承认意志力不参与“做决定”这一环节（does not shape our decisions），但它决定决定的“执行”与“坚持”，整句的重心落在后面的 it determines whether and how long we can follow through on them，而不是否定意志力的重要性。因此题干与原文信息一致，答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文没有任何与题干相反的信息。首句的 does not shape our decisions 只是一处让步（意志力不塑造决定本身），紧接着的 it determines whether and how long we can follow through 以及 It almost single-handedly determines life outcomes 都在正面抬高意志力的地位，与题干同向，无矛盾可言，故不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文对意志力的分量给出了明确判断句，即 “It almost single-handedly determines life outcomes.”，这是对“意志力在决定人生命运中占到什么地位”的直接回答，并非信息缺失，所以不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "People with more free time typically have better willpower.",
          "translation": "拥有更多空闲时间的人通常意志力更强。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "There is a widespread misperception, for example, that increased leisure time would lead to subsequent increases in willpower."
          },
          "synonyms": [
            "“People with more free time” 同义替换为原文的 “increased leisure time”（空闲时间增加）",
            "“typically have better willpower” 对应原文的 “would lead to subsequent increases in willpower”（随之带来意志力的提升）",
            "原文用 “a widespread misperception”（一种普遍存在的误解）给这一说法定性，而题干的陈述语气把它当成了事实，两者的立场正好相反"
          ],
          "locatingTip": "定位：题干里的 free time 与 willpower 是普通名词，但第 1 段末尾刚好出现 leisure time（空闲时间）这一近义表达，且与 willpower 同句出现，一眼即可锁定该句。确定答案技巧：本句的判分词是 misperception（误解）——原文不是“陈述这件事”，而是“指出这种想法是错的”。题干却把这种被否定的观点原样搬来作断言，因此与原文立场相反，判 FALSE。看到 misperception、misconception、myth、a common but false belief 这类“定性词”，就要立刻意识到其后 that 从句的内容是被作者否掉的。",
          "analysis": "第 1 段末句是本题的唯一依据：“There is a widespread misperception, for example, that increased leisure time would lead to subsequent increases in willpower.”（例如，有一种普遍存在的误解，认为空闲时间的增加会随之带来意志力的提升）。句子结构是 There is a widespread misperception that …，其中 that 从句的内容是被作者明确标记为“误解（misperception）”的。题干 “People with more free time typically have better willpower.”（空闲时间更多的人通常意志力更好）正是这个被否定的观点本身，只不过把 would lead to 改成了表示一般规律的 typically have，语气由“误解中的预测”变成“事实断言”。原文既已将其定性为误解，就说明作者认为空闲时间多并不会带来意志力提升，题干与原文立场直接相反，因此答案是 FALSE。做本题时如果把 misperception 当作可有可无的修饰词跳过，只抓住 leisure time 与 willpower 就同意题干，就会落入“只对关键词、不看态度词”的典型陷阱。",
          "traps": [
            "为什么不是 TRUE：原文并没有认可“空闲时间多的人意志力更强”，相反，它把这一说法明确称为 a widespread misperception（普遍误解）。作者的态度是否定，题干却以肯定语气陈述，两者对立，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅提到了空闲时间与意志力的关系，还对该关系作出了明确的价值判断（是误解），属于“有信息且与题干冲突”，而非“没有信息”，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Willpower mostly applies to matters of diet and exercise.",
          "translation": "意志力主要适用于饮食与锻炼方面的事情。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Yet willpower also involves elements such as overriding negative thought processes, biting your tongue in social situations, or persevering through a difficult activity."
          },
          "synonyms": [
            "“mostly applies to matters of diet and exercise”（主要只用于饮食与锻炼）与原文的 “it refers in fact to a variety of behaviours and situations”（实际上指涉多种行为与情境）相互冲突",
            "“also involves elements such as …” 中的 also（还涉及）表明饮食、锻炼只是其中一部分，此外还有压制负面思维、社交场合忍住不说、在困难任务中坚持等，范围远大于题干所说的 diet and exercise",
            "原文把甜饮、懒床、喝水、去健身房的例子放在 “a common perception”（一种常见的看法）之下，说明那只是大众印象，而非意志力的全部适用领域"
          ],
          "locatingTip": "定位：本题落在第 2 段。先在第 2 段找到饮食与锻炼的例子（a sugary drink、drinking water、going to the gym），然后往后读一句就会碰到 Yet willpower also involves elements such as …，句首的 Yet（然而）与 also（还）正是作者要扩大范围的信号词。确定答案技巧：判断题中凡出现 mostly、only、mainly、always 这类“范围或程度收窄”的词，都要回到原文核对有没有被更宽的表述推翻。原文先说意志力“实际上指涉多种行为与情境”，再用 also 补出思维、社交、坚持等多个领域，明显说明饮食与锻炼只是其中一小部分，题干的 mostly 站不住，判 FALSE。",
          "analysis": "第 2 段全段都在纠正“意志力只关乎饮食与锻炼”这一印象。段首先给出总判断：“Although the concept of willpower is often explained through single-word terms, such as 'resolve' or 'drive', it refers in fact to a variety of behaviours and situations.”（尽管意志力常被用 resolve 或 drive 这类单个词来解释，它实际上指涉多种多样的行为与情境）。接着作者承认 diet 与 exercise 类的例子很常见——“There is a common perception that willpower entails resisting some kind of a 'treat', such as a sugary drink or a lazy morning in bed, in favour of decisions that we know are better for us, such as drinking water or going to the gym.”（人们普遍认为意志力就是抵制甜饮、赖床这类“放纵”，转而选择喝水、去健身房这类我们明知更好的决定）——但作者随即用 “Of course this is a familiar phenomenon for all.” 承认它只是“大家都熟悉的”一类现象，再用 “Yet willpower also involves elements such as overriding negative thought processes, biting your tongue in social situations, or persevering through a difficult activity.”（然而意志力还包含压制负面思维过程、在社交场合忍住不说、在困难活动中坚持下去这些要素）把范围大大扩展。题干用 mostly（主要）把意志力的适用范围压缩到饮食与锻炼，与原文“多种行为与情境”的宽泛界定相矛盾，因此答案是 FALSE。写作本题解析的关键在于抓住 Yet 与 also 这两个扩展信号，它们说明作者在前文列举饮食、锻炼只是铺垫，真正的主张是范围更广。",
          "traps": [
            "为什么不是 TRUE：原文虽然确实举了喝水、去健身房、抵制甜饮等饮食与锻炼方面的例子，但这只是“a common perception”（一种常见的看法），作者紧接着用 Yet willpower also involves elements such as … 明确补充了思维、社交、坚持等更多领域，并总括为 a variety of behaviours and situations。说意志力“主要是”饮食与锻炼的事，与原文的宽泛界定不符，故不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对意志力适用于哪些方面交代得非常清楚（既列举了饮食锻炼，又列举了其他三类情形，还有 a variety of behaviours and situations 的总结句），不存在信息缺失，只是题干的 mostly 与原文不符，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The strongest indicator of willpower is the ability to choose long-term rather than short-term rewards.",
          "translation": "意志力最强的体现是选择长期回报而非短期回报的能力。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "At the heart of any exercise of willpower, however, is the notion of 'delayed gratification', which involves resisting immediate satisfaction for a course that will yield greater or more permanent satisfaction in the long run."
          },
          "synonyms": [
            "“The strongest indicator of willpower” 同义替换为原文的 “At the heart of any exercise of willpower”（任何一次意志力运用中最核心的东西）",
            "“the ability to choose long-term rather than short-term rewards” 同义替换为原文的 “resisting immediate satisfaction for a course that will yield greater or more permanent satisfaction in the long run”（为长期更大或更持久的满足而抵制眼前满足）",
            "“delayed gratification” 与题干的 “choose long-term rather than short-term rewards” 是同一概念的不同表述：推迟即时满足，换取长期收益"
          ],
          "locatingTip": "定位：题干的核心概念是 long-term 与 short-term 的取舍，第 2 段末句出现 immediate satisfaction 与 in the long run 这一对对立表达，且句首 At the heart of … 正好对应题干的 the strongest indicator，可直接锁定。确定答案技巧：本题的判分点是“核心程度”是否匹配。原文用 At the heart of any exercise of willpower 把 delayed gratification 定为核心，any 更强调无一例外；题干用 the strongest indicator 表达同样的“最重要体现”。再把 delayed gratification 的定义（为长期更大的满足而抵制即时满足）与题干的 choose long-term rather than short-term rewards 对齐，两处改写一一对应，故判 TRUE。",
          "analysis": "第 2 段末句是本题依据：“At the heart of any exercise of willpower, however, is the notion of 'delayed gratification', which involves resisting immediate satisfaction for a course that will yield greater or more permanent satisfaction in the long run.”（然而，任何一次意志力的运用，其核心都是“延迟满足”这一概念，即为了一条在长期能带来更大或更持久满足的道路而抵制眼前的满足）。句中 At the heart of any exercise of willpower 是原文对“最重要、最核心的体现”的表述，与题干的 The strongest indicator of willpower 对应；其后的 which 从句就是“延迟满足”的定义：resisting immediate satisfaction（抵制即时满足，即题干说的 short-term rewards）for a course that will yield greater or more permanent satisfaction in the long run（为了长远能带来更大或更永久满足的道路，即题干说的 long-term rewards）。整句等于说：意志力最核心的体现就在于为长远利益而放弃眼前利益，与题干完全一致。作答本题时要注意题干用的是 strongest indicator（最强体现）而不是唯一内容——原文只说 delayed gratification 处于核心位置，并未否认意志力还包含其他要素（如本段前面提到的压制负面思维、社交场合克制等），这一点上题干与原文并不冲突，因此答案确定为 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文用 At the heart of any exercise of willpower（任何意志力运用中的核心）来定位 delayed gratification，并把它定义为抵制眼前满足、换取长期更大满足，与题干“选择长期而非短期回报的能力是意志力最强体现”完全同向，没有矛盾信息，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文并没有回避“意志力的核心是什么”这一问题，而是用 At the heart of any exercise of willpower 直接给出了核心概念，并附上完整定义，信息明确且充分，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Researchers have studied the genetic basis of willpower.",
          "translation": "研究者已经研究过意志力的基因基础。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Scientists are making general investigations into why some individuals are better able than others to delay gratification and thus employ their willpower, but the genetic or environmental origins of this ability remain a mystery for now."
          },
          "synonyms": [
            "“Researchers” 同义替换为原文的 “Scientists”",
            "“the genetic basis of willpower” 与原文的 “the genetic or environmental origins of this ability” 表面上接近，但原文把这一来源定性为 “remain a mystery for now”（目前仍是谜团），即尚未查明，而不是说有人专门研究过",
            "原文所述的研究对象是 “why some individuals are better able than others to delay gratification”（为何有人更擅长延迟满足），是一般性调查（general investigations），与题干“研究基因基础”这一具体命题不对应"
          ],
          "locatingTip": "定位：题干的两个关键词 researchers 与 genetic 都指向第 3 段首句——Scientists（研究者）与 the genetic or environmental origins（遗传或环境来源）同句出现，一步锁定。确定答案技巧：本题的分辨点在于“做过研究”与“找到了来源”是两回事。原文说的是科学家正在做一般性调查，但这一能力的遗传或环境来源“目前仍是谜团”，换句话说，原文既没说有人专门研究过基因基础，也没给出任何基因研究的结果。判断题遇到“已经研究过/已经证明”这类对研究行为或成果的断言，而原文只提供“来源仍是谜”这样的模糊交代时，应按信息缺失处理，判 NOT GIVEN。",
          "analysis": "第 3 段首句是本题依据：“Scientists are making general investigations into why some individuals are better able than others to delay gratification and thus employ their willpower, but the genetic or environmental origins of this ability remain a mystery for now.”（科学家正在就为什么有些人比另一些人更善于延迟满足、从而运用意志力这一问题进行一般性的调查研究，但这一能力的遗传或环境来源目前仍是一个谜）。原文的信息层次是：科学家的研究主题是“为何个体差异存在”，而遗传与环境来源尚未解开。题干却断言“研究者已经研究过意志力的基因基础（the genetic basis of willpower）”，把“来源仍是谜团”偷换成了“已经研究过基因基础”这一行为事实。原文既没有说明是否有研究者专门考察基因基础，也没有给出任何基因层面的研究结论或数据，属于信息缺失，因此判 NOT GIVEN。后文 “Some groups who are particularly vulnerable to reduced willpower capacity, such as those with addictive personalities, may claim a biological origin for their problems.”（某些意志力容易受损的群体，如具有成瘾人格的人，可能声称他们的问题有生物学来源）只是某些群体的主观 claim（声称），更不是研究结论，不能作为“研究者研究过基因基础”的依据。",
          "traps": [
            "为什么不是 TRUE：原文虽然出现了 genetic（遗传的）一词，但说的是 the genetic or environmental origins … remain a mystery for now（遗传或环境来源目前仍是谜），强调的是“尚未查明”，而不是“已经研究了基因基础”，两者不是一回事；关于基因的研究结论原文一句也没有给出，故不能判 TRUE。",
            "为什么不是 FALSE：原文并没有否认有人研究基因基础，也没有说基因基础不存在或不重要，只是对此没有交代。没有相反信息时不能判 FALSE，只能按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Levels of willpower usually stay the same throughout our lives.",
          "translation": "意志力水平在我们的一生中通常保持不变。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "What is clear is that levels of willpower typically remain consistent over time (studies tracking individuals from early childhood to their adult years demonstrate a remarkable consistency in willpower abilities)."
          },
          "synonyms": [
            "“Levels of willpower” 与原文的 “levels of willpower” 原词复现",
            "“usually stay the same” 同义替换为原文的 “typically remain consistent over time”，typically 对应 usually，remain consistent 对应 stay the same",
            "“throughout our lives” 对应原文括号里的 “from early childhood to their adult years”（从幼年到成年），是一生跨度的具体化"
          ],
          "locatingTip": "定位：题干的主语 levels of willpower 与谓语 stay the same，第 3 段中间一句以 “What is clear is that levels of willpower typically remain consistent over time …” 明确作答，句首的 What is clear（明确的是）本身就是强定位信号。确定答案技巧：看到题干有 usually 这样的频率副词，要在原文里找 typically、generally、tend to 之类的对应词，两者都是“通常”的意思，程度相符即可判 TRUE；括号里的研究证据（从幼年到成年追踪，意志力能力表现出高度一致性）进一步把 over time 落实为“一生”，与题干的 throughout our lives 吻合。",
          "analysis": "第 3 段第三句是本题依据：“What is clear is that levels of willpower typically remain consistent over time (studies tracking individuals from early childhood to their adult years demonstrate a remarkable consistency in willpower abilities).”（明确的是，意志力水平通常随着时间保持稳定；从幼年追踪到成年的研究显示，意志力能力具有惊人的一致性）。原文用 typically（通常）与题干的 usually 对应，用 remain consistent over time（随时间保持稳定）与题干的 stay the same 对应；括号中的补充说明把 over time 的时间跨度具体化为 from early childhood to their adult years（从幼年到成年），并用 remarkable consistency（高度一致）加强语气，这正是题干 throughout our lives（一生）的同义表达。三处替换一一对应且方向一致，因此答案是 TRUE。需要注意的是紧随其后的 “In the short term, however, our ability to draw on willpower can fluctuate dramatically due to factors such as fatigue, diet and stress.”（然而在短期内，我们调用意志力的能力会因疲劳、饮食和压力等因素而剧烈波动）说的是短期波动，与题干“一生中通常保持不变”这一长期规律并不冲突：原文的长期一致性与短期波动是同一段中并列的两层信息，不要把短期波动误当成对题干的否定。",
          "traps": [
            "为什么不是 FALSE：原文明确说意志力水平“typically remain consistent over time”，并用从幼年到成年的追踪研究证明其一致性；题干只是把这一长期规律改写为 stay the same throughout our lives，两者同向。同段后面提到的短期波动（fluctuate dramatically）说的是 fatigue、diet、stress 引起的一时变化，与“一生中通常稳定”这一长期结论不构成矛盾，故不能判 FALSE。",
            "为什么不是 NOT GIVEN：原文对意志力水平随时间的稳定性给出了直接陈述（What is clear is that …）以及研究证据（studies tracking individuals from early childhood to their adult years），信息明确完整，并非没有提及，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Regular physical exercise improves our willpower ability.",
          "translation": "规律的体育锻炼能提升我们的意志力。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Indeed, research by Matthew Gailliot suggests that willpower, even in the absence of physical activity, both requires and drains blood glucose levels, suggesting that willpower operates more or less like a 'muscle', and, like a muscle, requires fuel for optimum functioning."
          },
          "synonyms": [
            "“physical exercise” 与原文的 “physical activity”（身体活动）用词接近，但原文只在让步结构 “even in the absence of physical activity”（即使没有身体活动）中提及，用来强调“不运动也照样消耗血糖”，并无“运动有益”之意",
            "“improves our willpower ability” 在原文中找不到任何对应：原文只说明意志力需要并消耗血糖（requires and drains blood glucose levels），从未提到锻炼能够提高意志力",
            "原文的像肌肉那样的比喻（operates more or less like a 'muscle' … requires fuel for optimum functioning）说的是“需要燃料（血糖）”，属机制说明，不等于“锻炼可以增强意志力”"
          ],
          "locatingTip": "定位：题干两项关键词 physical 与 willpower 在第 3 段末句同现——Matthew Gailliot 的研究句里既有 physical activity 又有 willpower，扫读段末即可锁定。确定答案技巧：区分“提到某个词”与“表达某个意思”是关键。原文的 even in the absence of physical activity 是一处让步插入语，意思是“即便不进行身体活动，意志力照样消耗血糖”，physical activity 是用来做对比的，作者并没有说运动对意志力有任何提升作用。判断题中凡题干把原文一笔带过的词当作论述重点延展成因果（运动提升意志力），而原文并无相应论述时，应判 NOT GIVEN。",
          "analysis": "第 3 段末句是本题唯一涉及 physical activity 的地方：“Indeed, research by Matthew Gailliot suggests that willpower, even in the absence of physical activity, both requires and drains blood glucose levels, suggesting that willpower operates more or less like a 'muscle', and, like a muscle, requires fuel for optimum functioning.”（事实上，Matthew Gailliot 的研究表明，意志力即使在没有身体活动的情况下，也需要并消耗血液中的葡萄糖，这说明意志力的运作多少有点像“肌肉”，而像肌肉一样，它需要燃料才能最佳运转）。整句的论述重点是“意志力会消耗血糖”这一生理机制，physical activity 以 even in the absence of 的形式被排除在外，可见原文并不在讨论运动与意志力的关系。题干却提出 “Regular physical exercise improves our willpower ability.”（规律的体育锻炼能提升意志力），这一因果关系在原文中完全没有出现——原文既没有说要通过锻炼来增强意志力，也没有给出任何锻炼与意志力水平高低的联系。虽然段落前面提到意志力会受疲劳、饮食和压力影响（fatigue, diet and stress），但那是列举影响因素，并未提运动。信息缺失即 NOT GIVEN，不能因为“运动有益健康”的常识就补出原文没有的结论。",
          "traps": [
            "为什么不是 TRUE：原文提到 physical activity 时用的是 even in the absence of physical activity，是为了说明“即便不运动，意志力也照样消耗血糖”，并没有表达运动能提高意志力的意思；全文没有任何一句把锻炼与意志力提升联系起来，因此不能选 TRUE。",
            "为什么不是 FALSE：原文并没有说运动不能提升意志力，也没有否定锻炼的作用，只是对“运动与意志力提升”这一关系没有交代。既无相反信息，就不能判 FALSE，只能按未提及判 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 人名观点匹配（Match each statement with A–E）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "identified a key factor that is necessary for willpower to function.",
          "translation": "指出了意志力得以发挥作用所必需的一个关键因素。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "as psychologist Roy Baumeister has discovered, a lack of willpower may not be the sole impediment every time our good intentions fail to manifest themselves. A critical precursor, he suggests, is motivation"
          },
          "synonyms": [
            "“a key factor that is necessary for willpower to function” 同义替换为原文的 “A critical precursor”（关键前提），precursor 表示“先决条件”，与 necessary 对应",
            "“identified” 同义替换为原文的 “has discovered” 与 “he suggests”，都是“提出、指出”的意思",
            "“Roy Baumeister” 是原文所述观点的人名，直接对应选项 E"
          ],
          "locatingTip": "定位：本题先抓观点内容中的抽象名词 motivation 与 precursor，其中 precursor 一词全文仅在第 6 段出现；同时第 6 段第 1 句直接写出人名 Roy Baumeister（psychologist Roy Baumeister has discovered），双线索同段，一步定位。确定答案技巧：匹配题的题干把观点“去人名化”后重述，必须抓住观点的核心名词。原文说 “A critical precursor, he suggests, is motivation” ——他（Baumeister）认为关键前提是动机，即意志力要产生效果，先得有动机这一必要因素，与题干 a key factor that is necessary 完全对应，因此选 E。注意不要被同段后半段 Muraven 关于 monitoring 的内容干扰，那是另一题的证据。",
          "analysis": "第 6 段开头两句是本题依据：“Willpower is clearly fundamental to our ability to follow through on our decisions but, as psychologist Roy Baumeister has discovered, a lack of willpower may not be the sole impediment every time our good intentions fail to manifest themselves. A critical precursor, he suggests, is motivation – if we are only mildly invested in the change we are trying to make, our efforts are bound to fall short.”（意志力显然是我们执行决定的基础，但正如心理学家 Roy Baumeister 所发现的，每次我们的良好意愿未能实现时，缺乏意志力未必是唯一的障碍。他指出，一个关键前提是动机——如果我们对想要作出的改变投入不多，我们的努力注定不足）。题干 “identified a key factor that is necessary for willpower to function.”（指出了意志力发挥作用所必需的关键因素）把原文的 A critical precursor（关键前提）改写为 a key factor that is necessary，把 motivation 抽象为“一个关键因素”，因此对应人名 Roy Baumeister，即选项 E。这里要注意 precursor 一词的力度：它表示“在意志力起作用之前必须先有的东西”，正合“necessary for willpower to function”之意；而后半句 if we are only mildly invested in the change … our efforts are bound to fall short（投入不足则努力必然落空）进一步从反面证明动机是不可或缺的前提。",
          "traps": [
            "为什么不选 A（Matthew Gailliot）：Gailliot 的研究（第 3 段末）讲的是意志力消耗血糖、运作像肌肉，属于生理机制，并没有提出“意志力运作必需的关键因素”这一动机论观点。",
            "为什么不选 B（Gregory M. Walton）：Walton 的发现（第 4 段）是言语提示（告诉受试者困难任务能“充电”）能显著改变他们可调用的意志力，讲的是意志力可以被提示提升，而非“必需的前提因素”。",
            "为什么不选 C（Mark Muraven）：第 6 段中 Muraven 强调的是 monitoring progress（监控进展、记录目标）的价值（对应第 11 题），以及第 5 段中外部权威施压会加速意志力耗竭（对应第 12 题），均与“意志力运作的关键前提”不是同一观点。",
            "为什么不选 D（Veronika Job）：Job 的研究（第 5 段末）讨论的是“认为意志力是有限资源”这一信念会加速意志力耗尽，属于信念影响意志力（对应第 9 题），不是提出意志力运作的前提条件。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "suggested that willpower is affected by our beliefs.",
          "translation": "提出意志力会受到我们信念的影响。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "This idea that our mental convictions can influence willpower was borne out by Veronika Job. Her research indicates that those who think that willpower is a finite resource exhaust their supplies of this commodity long before those who do not hold this opinion."
          },
          "synonyms": [
            "“our beliefs” 同义替换为原文的 “our mental convictions”（心理信念）以及后句的 “those who think that …” 与 “this opinion”（持此看法的人）",
            "“willpower is affected by our beliefs” 对应原文的 “our mental convictions can influence willpower”，原文从信念的角度说信念影响意志力，题干换成被动语态说意志力受信念影响",
            "“suggested” 同义替换为原文的 “Her research indicates”（她的研究表明）"
          ],
          "locatingTip": "定位：题干最独特的词是 beliefs（信念）这一抽象概念，第 5 段末句前的 “our mental convictions”（心理信念）与之对应，同句还出现人名 Veronika Job，一段一句即锁定。确定答案技巧：抓“谁影响谁”的方向。原文说 our mental convictions can influence willpower（信念影响意志力），题干说 willpower is affected by our beliefs（意志力受信念影响），只是主动改被动，方向一致；Job 的研究结果（认为意志力是有限资源的人更快耗尽意志力）正是这一观点的证据，故匹配 D。",
          "analysis": "第 5 段末两句是本题依据：“This idea that our mental convictions can influence willpower was borne out by Veronika Job. Her research indicates that those who think that willpower is a finite resource exhaust their supplies of this commodity long before those who do not hold this opinion.”（“心理信念能够影响意志力”这一观点，得到了 Veronika Job 的证实。她的研究表明，那些认为意志力是一种有限资源的人，会比不持这种看法的人早得多地耗尽自己的意志力储备）。题干 “suggested that willpower is affected by our beliefs.”（认为意志力受信念影响）与原文的 our mental convictions can influence willpower 是同一命题的两种语态表述：beliefs 对应 mental convictions，affected by 对应 can influence；而 Job 的研究又用“认为意志力有限的人更快耗尽”这一对比，具体演示了信念对意志力的影响，因此对应人名 Veronika Job，即选项 D。定位本题时可借助第 5 段的论证顺序——作者先举“把糖果放进抽屉就少吃”的“眼不见心不烦”实验说明外部环境的影响，再引 Muraven 说明外部施压的负面作用，最后收到 Job 的“信念决定意志力是否有限”这一内部因素上。",
          "traps": [
            "为什么不选 A（Matthew Gailliot）：Gailliot 讲的是血糖与意志力的生理关系，与“信念影响意志力”无关。",
            "为什么不选 B（Gregory M. Walton）：Walton 讲的是外部言语提示（verbal cue）能让受试者调动更多意志力，强调的是提示与自我激励（optimistic self-talk），落点在“提示/自我对话”而非“信念体系”。",
            "为什么不选 C（Mark Muraven）：Muraven 在第 5 段的观点是外部权威施压会加速意志力耗竭（对应第 12 题），在第 6 段的观点是监控进展的价值（对应第 11 题），都不是“信念影响意志力”。",
            "为什么不选 E（Roy Baumeister）：Baumeister 提出的是“意志力不足未必是唯一障碍、动机才是关键前提”（对应第 8 题），与信念对意志力的影响不是同一观点。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "examined how our body responds to the use of willpower.",
          "translation": "研究了我们的身体对使用意志力作出怎样的反应。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Indeed, research by Matthew Gailliot suggests that willpower, even in the absence of physical activity, both requires and drains blood glucose levels"
          },
          "synonyms": [
            "“examined” 同义替换为原文的 “research by … suggests”（由某人所做的研究提出）",
            "“how our body responds to the use of willpower” 同义替换为原文的 “willpower … both requires and drains blood glucose levels”，其中 blood glucose levels（血糖水平）是身体指标，requires and drains（需要并消耗）即身体的反应方式",
            "“Matthew Gailliot” 是原文所述研究的人名，直接对应选项 A"
          ],
          "locatingTip": "定位：题干关键词 body、responds 与 willpower，指向“意志力作用于身体”的生理类描述；全文涉及身体指标的只有第 3 段末句 Gailliot 关于 blood glucose 的研究，人名与研究内容同句出现。确定答案技巧：匹配题中若题干出现人体、生理、身体反应一类词，就要优先在文中搜 blood、levels、drains、fatigue 等生理词；本题原文的 requires and drains blood glucose levels 明确说明意志力会消耗血糖，属于身体对意志力使用的生理反应，因此匹配 Matthew Gailliot，即选项 A。",
          "analysis": "第 3 段末句提供了本题依据：“Indeed, research by Matthew Gailliot suggests that willpower, even in the absence of physical activity, both requires and drains blood glucose levels, suggesting that willpower operates more or less like a 'muscle', and, like a muscle, requires fuel for optimum functioning.”（事实上，Matthew Gailliot 的研究表明，意志力即使在没有身体活动的情况下，也需要并消耗血液中的葡萄糖，这说明意志力的运作多少像一块“肌肉”，而像肌肉一样，它需要燃料才能达到最佳运转状态）。题干 “examined how our body responds to the use of willpower.”（研究了身体对使用意志力作何反应）正是对这一研究的概括：面对意志力的动用，身体表现为血糖水平被消耗（drains blood glucose levels），而意志力本身也需要血糖作为燃料（requires … blood glucose levels），研究者据此把意志力比作需要燃料的肌肉。人名 Matthew Gailliot 与这一身体反应的研究内容同在句中，故答案为选项 A。做题时的有效技巧是给每位人名贴一个“标签词”：Gailliot 对应血糖（body / glucose），Walton 对应言语提示（verbal cue），两者都与“意志力被使用时的即时反应”有关，但只有 Gailliot 落在身体生理层面。",
          "traps": [
            "为什么不选 B（Gregory M. Walton）：Walton 研究的是言语提示（告诉受试者困难任务能“充电”）如何改变意志力的调用量，属于心理层面的提示效应，与身体的生理反应（血糖）无关。",
            "为什么不选 C（Mark Muraven）：Muraven 的两项发现分别关于外部施压导致意志力耗竭（第 5 段）与监控进展的重要性（第 6 段），均未涉及身体的生理指标。",
            "为什么不选 D（Veronika Job）：Job 研究的是信念（认为意志力是否有限）对意志力耗尽速度的影响，落脚点是观念而非身体反应。",
            "为什么不选 E（Roy Baumeister）：Baumeister 提出动机才是意志力发挥作用的 critical precursor（关键前提），属于行为动机层面，不涉及身体如何回应意志力。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "discovered how important it is to make and track goals.",
          "translation": "发现制定并追踪目标非常重要。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "In addition, Muraven emphasises the value of monitoring progress towards a desired result, such as by using a fitness journal, or keeping a record of savings toward a new purchase."
          },
          "synonyms": [
            "“track goals” 同义替换为原文的 “monitoring progress towards a desired result”，track 对应 monitoring，goals 对应 a desired result",
            "“how important it is” 同义替换为原文的 “emphasises the value of”（强调其价值）",
            "“discovered” 对应原文的 “emphasises”，都是某人提出的主张；人名 Muraven 直接对应选项 C"
          ],
          "locatingTip": "定位：题干关键词是 track 与 goals，第 6 段中后部出现 monitoring progress towards a desired result 以及具体做法（使用健身记录、记录储蓄进度），同句主语为 Muraven，一步锁定。确定答案技巧：匹配题的题干常把原文的动词名词化或反过来，本题原文用 monitoring（监控）与 a desired result（期望的结果），题干用 track（追踪）与 goals（目标），属同义替换，且原文用 emphasises the value of 表示“很重要”，与题干 how important 对应，因此匹配 Mark Muraven，即选项 C。注意同一段前面还有 Baumeister 的动机论（对应第 8 题），两题同段，答题时要看句子的主语人名。",
          "analysis": "第 6 段中后部提供了本题依据：“In addition, Muraven emphasises the value of monitoring progress towards a desired result, such as by using a fitness journal, or keeping a record of savings toward a new purchase. The importance of motivation and monitoring cannot be overstated.”（此外，Muraven 强调监控朝目标结果的进展很重要，比如使用健身日志，或记录为购买新物品而攒钱的进度。动机与监控的重要性怎么强调都不过分）。题干 “discovered how important it is to make and track goals.”（发现制定并追踪目标很重要）与原文一一对应：track 对应 monitoring，goals 对应 a desired result，how important 对应 emphasises the value of / The importance … cannot be overstated。原文紧接着用两个具体例子（fitness journal、keeping a record of savings）把“追踪目标”落到实处，并总结“动机和监控的重要性再怎么强调都不过分”，可见作者认为这是 Muraven 的重要贡献。人名 Muraven 与该主张同在句中，故答案为选项 C。",
          "traps": [
            "为什么不选 A（Matthew Gailliot）：Gailliot 研究的是血糖与意志力的关系（对应第 10 题），与制定、追踪目标无关。",
            "为什么不选 B（Gregory M. Walton）：Walton 关注的是言语提示如何提升可调用的意志力，虽然也涉及任务坚持，但并未提出“制定并追踪目标的重要性”。",
            "为什么不选 D（Veronika Job）：Job 讨论的是信念（意志力是否有限）对耗竭速度的影响，属于观念与实际消耗的关系，不涉及目标追踪。",
            "为什么不选 E（Roy Baumeister）：Baumeister 提出的是动机这一关键前提（对应第 8 题），原文把 monitoring 的功劳归于 Muraven 的强调，两者不可混同。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "found that taking actions to please others decreases our willpower.",
          "translation": "发现为取悦他人而采取行动会削弱我们的意志力。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In another study, Mark Muraven found that those who felt compelled by an external authority to exert self-control experienced far greater rates of willpower depletion than those who identified their own reasons for taking a particular course of action."
          },
          "synonyms": [
            "“taking actions to please others” 同义替换为原文的 “felt compelled by an external authority to exert self-control”（因外部权威的强制而动用自控）",
            "“decreases our willpower” 同义替换为原文的 “experienced far greater rates of willpower depletion”（意志力耗竭的速率大大加快）",
            "“found” 与原文的 “found” 原词复现；人名 Mark Muraven 直接对应选项 C"
          ],
          "locatingTip": "定位：题干的核心语义是“为他人（外部要求）而行动”，第 5 段中部的 Muraven 研究句用 an external authority（外部权威）表达这一意思，并同时出现 willpower depletion，人名与关键词同句。确定答案技巧：本题的词汇难点是 depletion（耗竭）。题干用 decreases our willpower（削弱意志力），原文用 far greater rates of willpower depletion（耗竭速度大大加快），属同向同义替换；而“因外部权威而被迫自控”即题干所说的“为取悦他人而行动”，因此匹配 Mark Muraven，即选项 C。注意本题与第 11 题答案同为 C，题干已提示“You may use any letter more than once”，同一人名可以被多次使用。",
          "analysis": "第 5 段中部提供本题依据：“In another study, Mark Muraven found that those who felt compelled by an external authority to exert self-control experienced far greater rates of willpower depletion than those who identified their own reasons for taking a particular course of action.”（在另一项研究中，Mark Muraven 发现，那些因外部权威而感到被迫动用自控力的人，其意志力耗竭的速度远高于那些能为自己的行为找到自身理由的人）。题干所说的 “taking actions to please others”（为取悦他人而采取行动）对应原文的 felt compelled by an external authority（感到了外部权威的强制），属于“为了他人或外部要求而行动”的典型情形；题干所说的 “decreases our willpower”（削弱意志力）对应 experienced far greater rates of willpower depletion（意志力耗竭得更快）。原文通过与他人对比（those who identified their own reasons）凸显：行动的理由来自外部还是来自自己，直接决定意志力的消耗速度。这一发现归属于 Mark Muraven，故答案为选项 C。作答时要注意本题与第 11 题的答案同为人名 C——同一份人名表被两道题共用（题干已注明可以使用同一字母多次），不要因为已经用过 C 就改选其他选项。",
          "traps": [
            "为什么不选 A（Matthew Gailliot）：Gailliot 关注的是血糖这一生理指标，未涉及“为他人而行动”的社会心理机制。",
            "为什么不选 B（Gregory M. Walton）：Walton 的研究是外部言语提示带来的正面激励效果，方向是提升意志力，而题干说的是意志力被削弱，两者相反。",
            "为什么不选 D（Veronika Job）：Job 讨论的是信念（意志力是否为有限资源）对耗竭的影响，题干强调的却是“行动是为了谁”，对应的不是 Job 的观点。",
            "为什么不选 E（Roy Baumeister）：Baumeister 从动机角度指出意志力不足未必是唯一障碍，与“为取悦他人导致意志力下降”这一具体发现不同。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "found that willpower can increase through simple positive thoughts.",
          "translation": "发现意志力可以通过简单的积极想法而增强。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Gregory M. Walton, for example, found that a single verbal cue – telling research participants how strenuous mental tasks could 'energise' them for further challenging activities – made a profound difference in terms of how much willpower participants could draw upon to complete the activity."
          },
          "synonyms": [
            "“simple positive thoughts” 同义替换为原文的 “a single verbal cue”（单一言语提示）与下一句的 “encouragement or optimistic self-talk”（鼓励或乐观的自我对话）",
            "“willpower can increase” 同义替换为原文的 “made a profound difference in terms of how much willpower participants could draw upon”（大幅改变了受试者能调用的意志力多少）与 “willpower can also be boosted”（意志力也能被提升）",
            "“found” 与原文的 “found” 原词复现；人名 Gregory M. Walton 直接对应选项 B"
          ],
          "locatingTip": "定位：题干关键词 positive thoughts 指向“想法、言语”类信息，第 4 段中出现 verbal cue（言语提示）与 optimistic self-talk（乐观的自我对话），并紧接人名 Gregory M. Walton，一步锁定。确定答案技巧：本题要注意同义替换的层次——原文的 verbal cue 指“告诉受试者困难任务能给他们充电”这一句话，本质上就是一种积极想法；下文更直接点明 “it appears that willpower can also be boosted by other prompts, such as encouragement or optimistic self-talk”，其中 boosted 对应题干的 increase，optimistic 对应 positive。人名与观点同句，故匹配 Gregory M. Walton，即选项 B。",
          "analysis": "第 4 段中后部是本题依据：“Gregory M. Walton, for example, found that a single verbal cue – telling research participants how strenuous mental tasks could 'energise' them for further challenging activities – made a profound difference in terms of how much willpower participants could draw upon to complete the activity. Just as our willpower is easily drained by negative influences, it appears that willpower can also be boosted by other prompts, such as encouragement or optimistic self-talk.”（例如，Gregory M. Walton 发现，一个简单的言语提示——告诉受试者艰巨的脑力任务如何能为他们应对后续挑战性活动“充电”——会显著影响受试者能调用多少意志力来完成该活动。正如我们的意志力容易受到负面影响而消耗，看来意志力也能被其他提示所提升，例如鼓励或乐观的自我对话）。题干的 simple positive thoughts 与原文的 a single verbal cue（简单的一句话提示）、encouragement（鼓励）、optimistic self-talk（乐观的自我对话）对应，题干的 willpower can increase 与原文的 made a profound difference in terms of how much willpower participants could draw upon、willpower can also be boosted 对应，方向都是“意志力被积极的想法或提示提升”。该发现归属于 Gregory M. Walton，故答案为选项 B。本题与第 3 段 Gailliot 的“意志力像肌肉一样会被消耗”形成对照：第 4 段的落点正是“意志力不仅可以被消耗，也能被积极提示提升”，这正是题干“可以通过简单的积极想法而增强”的意思。",
          "traps": [
            "为什么不选 A（Matthew Gailliot）：Gailliot 说的是意志力需要并消耗血糖，强调的是消耗而非提升，与题干相反。",
            "为什么不选 C（Mark Muraven）：Muraven 的发现一是外部施压加速意志力耗竭（第 5 段），二是监控进展的重要性（第 6 段），都没有提出“积极想法能提升意志力”。",
            "为什么不选 D（Veronika Job）：Job 讲的是“认为意志力有限”这一信念会加速意志力耗尽，落点在信念对消耗速度的影响，而非积极想法带来的提升。",
            "为什么不选 E（Roy Baumeister）：Baumeister 提出动机是意志力发挥作用的关键前提，属于动机层面的必要条件，与“一句积极提示即能提升意志力”的可即时起效的发现不同。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Question 14 单选题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 14
      },
      "items": [
        {
          "questionId": "q14",
          "questionNumber": 14,
          "stem": "Which of the following is NOT mentioned as a factor in willpower?",
          "translation": "下列哪一项没有被提及为影响意志力的因素？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "In the short term, however, our ability to draw on willpower can fluctuate dramatically due to factors such as fatigue, diet and stress."
          },
          "synonyms": [
            "“physical factors such as tiredness” 同义替换为原文的 “factors such as fatigue”（疲劳），fatigue 与 tiredness 同义",
            "“our fundamental ability to delay pleasure” 同义替换为原文第 2 段的 “delayed gratification” 与第 3 段的 “delay gratification”，即延迟满足这一根本能力",
            "“environmental cues such as the availability of a trigger” 对应原文第 5 段的 “avoiding willpower depletion triggers” 以及“把糖果放在桌上还是抽屉里”的实验（糖果就是可获得的诱因）",
            "“the levels of certain chemicals in our brains” 在原文中找不到对应：原文只提 “blood glucose levels”（血液中的葡萄糖水平），并未提到“大脑中某些化学物质的水平”"
          ],
          "locatingTip": "定位：题干问“哪一个没有被提及”，属于排除型选择题，正确做法是把四个选项逐一回到原文核对。三处线索分散在第 3 段中部（fatigue, diet and stress 对应 A）、第 2 段末与第 3 段首（delayed gratification / delay gratification 对应 B）、第 5 段（depletion triggers 与糖果实验对应 D）。确定答案技巧：核对时要盯住修饰语的确切范围。原文关于化学物质的唯一表述是 “requires and drains blood glucose levels”，说的是血液中的葡萄糖（血糖），既不是“大脑中的”，也不是泛指“某些化学物质”；而 A、B、D 三项都能在原文找到明确落点，因此未被提及的只有 C。切记不要因为看到 glucose（一种化学物质）就认为 C 被提及——血糖出现在血液中，用来解释意志力的燃料消耗，与“大脑中某些化学物质的水平”这一说法并不等同。",
          "analysis": "本题问的是“哪一项没有被提及”，属于反向选择题，需要逐项在原文中印证。选项 A “physical factors such as tiredness”：第 3 段写道 “In the short term, however, our ability to draw on willpower can fluctuate dramatically due to factors such as fatigue, diet and stress.”（然而在短期内，由于疲劳、饮食和压力等因素，我们调用意志力的能力会剧烈波动），其中 fatigue 即 tiredness，属身体因素，已在原文提及。选项 B “our fundamental ability to delay pleasure”：第 2 段末句提出 “At the heart of any exercise of willpower, however, is the notion of 'delayed gratification'”，第 3 段又提到 “why some individuals are better able than others to delay gratification”，延迟满足被列为意志力的核心与个体差异所在，已在原文提及。选项 D “environmental cues such as the availability of a trigger”：第 5 段先说 “avoiding willpower depletion triggers”（避开导致意志力耗竭的诱因），接着举实验 “In one study, workers who kept a bowl of enticing candy on their desks were far more likely to indulge than those who placed it in a desk drawer.”（把诱人的糖果摆在桌面的人远比放进抽屉的人更容易放纵自己），正是“环境线索、诱因是否触手可及”的例证，已在原文提及。选项 C “the levels of certain chemicals in our brains”：全文唯一涉及化学物质的表述是第 3 段 Gailliot 研究中的 blood glucose levels（血糖水平），它说明意志力需要并消耗血液中的葡萄糖，涉及的是血液而非大脑，原文从未讨论“大脑中某些化学物质的水平”（如神经递质），因此 C 没有被提及，是本题答案。",
          "traps": [
            "为什么 A 不是答案：原文明确提到身体因素——“can fluctuate dramatically due to factors such as fatigue, diet and stress”，其中 fatigue 就是题干里的 tiredness，属于已提及，故不能选 A。",
            "为什么 B 不是答案：原文两处提到延迟满足这一根本能力——第 2 段的 “the notion of 'delayed gratification'” 与第 3 段的 “better able than others to delay gratification”，与题干 “the ability to delay pleasure” 对应，属于已提及，故不能选 B。",
            "为什么 D 不是答案：原文第 5 段提到避开 “willpower depletion triggers”（意志力耗竭诱因），并用糖果摆在桌上还是收进抽屉的实验说明环境线索的影响，与题干 “environmental cues such as the availability of a trigger” 对应，属于已提及，故不能选 D。",
            "为什么选 C：原文只出现 “blood glucose levels”（血糖水平），讲的是意志力消耗血液中的葡萄糖，并未提及大脑中某些化学物质的水平；glucose 虽属化学物质，但出处是血液而非大脑，范围不符，因此 C 是唯一未被提及的选项。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
