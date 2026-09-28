(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-low-85", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-low-85",
  "meta": {
    "examId": "p3-low-85",
    "title": "Music soothes and awes 音乐疗愈",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–32 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 32
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "Dan Ellsey has been able to communicate through music since he was very young.",
          "translation": "Dan Ellsey 从很小的时候起就能够借助音乐与人交流。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In the last few years, Ellsey, who was born with cerebral palsy, has discovered another, almost miraculous way of expressing himself: composing music with a special computerized system called Hyperscore."
          },
          "synonyms": [
            "“since he was very young” 与原文 “In the last few years” 相互冲突：原文说他是在最近几年才发现了这种表达方式，而题干说自幼便会",
            "“has been able to communicate through music” 同义替换为原文 “has discovered another, almost miraculous way of expressing himself: composing music with a special computerized system called Hyperscore”",
            "“communicate” 对应原文上一句的 “eye contact were his only means of transcending the prison of his body” 与本句的 “way of expressing himself”，都指表达与交流"
          ],
          "locatingTip": "定位：题干的核心是专有名词 Dan Ellsey，全文只在第 1 段、第 2 段和末段出现，而与“用音乐表达”有关的落点是第 2 段第二句 In the last few years, Ellsey … has discovered another, almost miraculous way of expressing himself，扫读到 Ellsey 后重点读第 2 段前两句即可。确定答案技巧：本题的判分点不在“能不能用音乐交流”，而在“从什么时候开始”。题干用 since he was very young 给出时间起点，原文给的时间却是 In the last few years（最近几年），二者直接冲突；第 1 段还刻意写明他 33 岁、天生脑瘫（born with cerebral palsy），出生患病与自幼能演奏是两回事，不能混为一谈，因此判 NO。",
          "analysis": "第 2 段开头两句：“But it isn't. In the last few years, Ellsey, who was born with cerebral palsy, has discovered another, almost miraculous way of expressing himself: composing music with a special computerized system called Hyperscore.”（但事实并非如此。最近几年，天生患有脑瘫的 Ellsey 发现了另一种近乎奇迹的自我表达方式：用一种名为 Hyperscore 的专用电脑系统作曲）。第 1 段把落点放在身体的囚禁上——他用目光的注视来超越身体的囚笼（eye contact were his only means of transcending the prison of his body），第 2 段第一句则用 But it isn't 否定了“只能用眼神交流”的处境。原文对时间的交代很清楚：has discovered（才发现）加上 In the last few years（最近几年），说明音乐表达是近年才获得的能力；题干却写成 since he was very young（从小就如此），把时间起点前移了几十年，属于事实矛盾，因此答案是 NO。做题提示：判断题里出现 since、until、from an early age 这类时间标志时，务必回原文核对起点与终点。",
          "traps": [
            "为什么不是 YES：原文明确说这种表达能力是 has discovered（近年才发现），时间限定为 In the last few years，与题干的 since he was very young 直接矛盾，不能选 YES。",
            "为什么不是 NOT GIVEN：原文既交代了他天生的疾病（born with cerebral palsy），也交代了他掌握音乐表达的时间（In the last few years），关于“何时开始”的信息是明确给出的，只是与题干相反，所以是 NO 而非信息缺失。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Armies respond to music that is loud and rhythmic.",
          "translation": "军队会对响亮而有节奏的音乐作出反应。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "It can rouse armies to battle, soothe babies to sleep, communicate peaks of joy and depths of sorrow that mere words cannot."
          },
          "synonyms": [
            "“respond to music” 与原文 “rouse armies to battle” 方向相近，都表示音乐对军队与人所起的作用（激励、调动）",
            "“armies” 在原文中原词复现：“rouse armies to battle”",
            "“loud and rhythmic” 在原文中找不到任何对应：原文只说明音乐能把军队激励上战场，完全没有描写这段音乐的响度（loud）或节奏（rhythmic）"
          ],
          "locatingTip": "定位：armies 是全文唯一一处提到军队的词，直接落在第 2 段最后一句 “It can rouse armies to battle, soothe babies to sleep …”。确定答案技巧：本题看似可以靠常识作答（军歌确实响亮、有节奏），但判断题只认原文。原文强调的是音乐“有力量”这一总评，并给出三组例子（激励军队、哄婴儿入睡、传递喜悦与悲伤），题干的落点却是音乐的两个具体声学特征 loud 与 rhythmic，这两项在原文中从未出现。既无法印证也无法否证，属于信息缺失，因此判 NOT GIVEN。切忌用背景知识补全原文没有的内容。",
          "analysis": "第 2 段在提出“音乐具有几乎无法解释的力量”之后，用一句排比举例：“It can rouse armies to battle, soothe babies to sleep, communicate peaks of joy and depths of sorrow that mere words cannot.”（它能激励军队上战场，能把婴儿哄睡，能传递言语无法表达的极度喜悦与深切悲伤）。三种作用都指向音乐对人或军队的影响力，与题干前半的 “Armies respond to music” 方向一致；但题干后半追加了限定条件 that is loud and rhythmic（响亮而有节奏的）。原文通篇没有关于音乐音量、节奏特征的描写——第 6 段虽然出现过 rhythmic training（有节奏的训练）与 metronome（节拍器），但那是中风患者步态康复的内容，与军队无关，不能张冠李戴。信息缺失即 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文只证明音乐能把军队激励上战场，并没有说明这样的音乐必须响亮、有节奏；loud 与 rhythmic 两项特征原文完全没有提及，无法从原文得到印证。",
            "为什么不是 NO：原文也没有否定响亮或有节奏的音乐能够激励军队，它只是根本没有讨论音乐的特征；既然没有相反信息，就不能判 NO，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Researchers have determined why people react so emotionally to music.",
          "translation": "研究者已经弄清人们为何会对音乐产生如此强烈的情感反应。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Why evolution would have endowed our brains with the neural machinery to make music is a mystery. 'It's unclear why humans are so uniquely sensitive to music."
          },
          "synonyms": [
            "“Researchers have determined” 与原文的 “is a mystery” 以及 “unclear” 直接对立",
            "“why people react so emotionally to music” 同义替换为原文 “why humans are so uniquely sensitive to music”",
            "“react so emotionally” 还对应第 4 段的 “the chills, or visceral feelings of awe”，说明题干所指的正是对音乐的情感反应"
          ],
          "locatingTip": "定位：题干的关键词是 why … react to music 与 determined，第 3 段整段都在讨论“大脑为何能处理音乐”这一谜题，段首 is a mystery 与段中 unclear 都是强烈的否定信号。确定答案技巧：判断题里 determined、known、established、clear 这类“已经查明”的表态，往往对应原文 mystery、unclear、debate 之类“尚未定论”的措辞，方向相反即判 NO。原文接连用 is a mystery（是个谜）和 It's unclear（尚不清楚）表示原因未明，学者之间还在争论语言与歌唱谁先出现，与题干“已经弄清”正好相反，故选 NO。",
          "analysis": "第 3 段开头：“Why evolution would have endowed our brains with the neural machinery to make music is a mystery.”（进化为何赋予我们大脑制造音乐的神经机制，至今仍是个谜）。紧接着引用神经学家 Oliver Sacks 的话：“'It's unclear why humans are so uniquely sensitive to music.'”（人类为何对音乐如此独特地敏感，尚不清楚）。段末又说 “Other researchers debate which came first in evolution, speech or song.”（另一些研究者仍在争论，在进化过程中先出现的是言语还是歌唱）。作者在本段的结论是 “What is clear is that the brain is abundantly wired to process music.”（清楚的是，大脑为处理音乐配备了极其丰富的神经连接）——注意这句 clear 的对象是“大脑处理音乐的能力”，而不是“音乐为何能引发情感”的原因。题干把“原因已查明（have determined why）”当作判断对象，与原文连续两处 mystery、unclear 直接冲突，因此答案是 NO。本题的陷阱在于段末那个 clear 极易被误读为“研究已经弄清”，必须看清它修饰的到底是哪一层内容。",
          "traps": [
            "为什么不是 YES：原文不但没有给出原因，反而用 is a mystery 与 It's unclear 明确表示原因未知，并把语言与歌唱的先后列为争论点，与“已经弄清”完全相反。",
            "为什么不是 NOT GIVEN：原文对“是否弄清原因”这一问题的态度非常明确（mystery、unclear），属于存在相反信息，应按 NO 处理，而不是信息缺失。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "Both music and speech are composed of sound segments.",
          "translation": "音乐与言语都由声音片段构成。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Certainly, music shares many features with spoken language, and our brains are particularly developed to process the rapid tones and segments of sound that are common to both"
          },
          "synonyms": [
            "“speech” 同义替换为原文 “spoken language”",
            "“sound segments” 同义替换为原文 “segments of sound”",
            "“Both music and speech are composed of” 对应原文 “shares many features with spoken language” 以及 “the rapid tones and segments of sound that are common to both”，即两者共有快速音与音段这些构成要素"
          ],
          "locatingTip": "定位：题干关键词是 segments，本篇只有第 3 段 Sacks 的话里出现 segments of sound，可直接跳到该句。确定答案技巧：定位后重点看两个结构——“music shares many features with spoken language”（音乐与口语共享许多特征）和 “the rapid tones and segments of sound that are common to both”（两者共有的快速音与音段）。that are common to both 里的 both 指音乐与言语，说明音段（segments of sound）确实为两者共有，与题干“两者都由声音片段构成”一致，故选 YES。",
          "analysis": "第 3 段引述神经学家 Oliver Sacks 的观点：“Certainly, music shares many features with spoken language, and our brains are particularly developed to process the rapid tones and segments of sound that are common to both.”（可以肯定的是，音乐与口语共享许多特征，而我们的大脑特别擅长处理两者共有的快速音与音段）。句子从两方面支撑题干：一是 music shares many features with spoken language 表明音乐与言语在构成上有共同点；二是 the rapid tones and segments of sound that are common to both 直接点出 segments of sound 为两者共有，其中 both 指代前面的 music 与 spoken language。题干把“共有音段”改写为“两者都由声音片段构成”，属于同义改写且方向一致，故答案为 YES。做题提示：common to both、shared by、as well as 这类词是找“共性”判断的关键信号。",
          "traps": [
            "为什么不是 NO：原文用 shares many features with 与 common to both 双重肯定音乐与言语共有快速音与音段，没有任何否定或限定，无法判 NO。",
            "为什么不是 NOT GIVEN：原文明确提到了二者共有的构成要素 segments of sound，信息是给出的，并非缺失。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "It is clear that song developed more quickly than speech.",
          "translation": "可以确定的是，歌唱比言语发展得更快。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Other researchers debate which came first in evolution, speech or song.' What is clear is that the brain is abundantly wired to process music."
          },
          "synonyms": [
            "“It is clear that” 对应原文 “What is clear is that”，但原文 clear 的对象是大脑处理音乐的能力，与题干所说的“歌唱发展更快”无关",
            "“song developed more quickly than speech” 与原文 “debate which came first in evolution, speech or song” 相互冲突：原文说谁先出现尚在争论",
            "“more quickly” 在原文中没有任何依据：原文只讨论先后（which came first），并未讨论发展速度"
          ],
          "locatingTip": "定位：题干关键词是 song、speech、clear，第 3 段末尾两句同时出现 “debate which came first in evolution, speech or song” 与 “What is clear is that …”，一句之内就能定位到两处对照信息。确定答案技巧：本题是典型的“偷换 clear 的对象”。原文说 clear 的是“大脑为处理音乐配备了丰富的神经连接”，而“言语与歌唱谁先出现”恰恰是研究者 debate（争论）的问题；题干却把 clear 挪去修饰“歌唱比言语发展更快”，既换了主语，又添了原文没有的“更快”这层比较。原文表示未定论，题干表示已成定论，方向相反，故判 NO。",
          "analysis": "第 3 段连续两句：“Other researchers debate which came first in evolution, speech or song.' What is clear is that the brain is abundantly wired to process music.”（另一些研究者仍在争论，在进化过程中先出现的是言语还是歌唱。“可以确定的是，大脑为处理音乐配备了极其丰富的神经连接。”）原文对言语与歌唱的关系给出的是“尚未定论”——动词 debate 表明学界仍在争论谁先出现；而 clear 所修饰的是另一个命题，即大脑处理音乐的能力有充分的神经基础。题干把它改写成 “It is clear that song developed more quickly than speech”，一方面把 debate 的内容（谁先出现）替换成 clear 的内容，另一方面擅自加入“更快（more quickly）”这一速度比较，而原文从头到尾只讨论先后、没有讨论发展速度。信息方向由“争论未定”变为“确定如此”，构成矛盾，故答案 NO。",
          "traps": [
            "为什么不是 YES：原文用的是 debate（争论），表示言语与歌唱的先后尚未定论，更没有出现任何关于二者发展速度的比较，无法支持“歌唱发展更快”。",
            "为什么不是 NOT GIVEN：原文对言语与歌唱的先后明确给出“仍在争论”的态度，属于有明确信息且与题干方向相反，因此不能按信息缺失处理。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Emotional reactions to music have been scientifically demonstrated.",
          "translation": "对音乐的情绪反应已得到科学证明。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Scientists at the Montreal Neurological Institute and Hospital, for instance, have found dramatic evidence on brain scans that the chills, or visceral feelings of awe, that people report when listening to their favorite music are real."
          },
          "synonyms": [
            "“scientifically demonstrated” 同义替换为原文 “have found dramatic evidence on brain scans”",
            "“Emotional reactions to music” 同义替换为原文 “the chills, or visceral feelings of awe, that people report when listening to their favorite music”",
            "“have been demonstrated” 对应原文的 “are real”，说明这些感受并非主观错觉，而是已被证据证实的事实"
          ],
          "locatingTip": "定位：题干关键词是 emotional reactions 与 scientifically，第 4 段首句同时出现 Scientists（科学家）、brain scans（脑部扫描，即科学手段）以及 the chills, or visceral feelings of awe（寒战、敬畏之感，即情绪反应），一句即可锁定。确定答案技巧：判断题要区分“有人声称”与“已被证明”。原文的结构是 have found dramatic evidence on brain scans that … are real，即科学家用脑部扫描找到了有力证据，证明这些感受真实存在，这正是“已被科学证明”；题干 emotional reactions 与 scientifically demonstrated 分别对应 feelings of awe 与 evidence on brain scans，方向一致，故选 YES。",
          "analysis": "第 4 段首句：“Scientists at the Montreal Neurological Institute and Hospital, for instance, have found dramatic evidence on brain scans that the chills, or visceral feelings of awe, that people report when listening to their favorite music are real.”（例如，蒙特利尔神经学研究所与医院的科学家通过脑部扫描找到了有力的证据，证明人们在听自己喜爱的音乐时所报告的寒战，也就是那种令人敬畏的内心感受，是真实的）。句中三层信息与题干一一对应：主语 Scientists 与手段 on brain scans 对应题干的 scientifically；the chills, or visceral feelings of awe 对应 Emotional reactions；are real 对应 have been demonstrated。原文强调的是“已找到有力证据”这一完成状态，因此题干“已得到科学证明”成立，答案是 YES。本段随后提到的 Zatorre 实验（喜欢的音乐与不喜欢的音乐激活的脑区不同）是补充证据，但判分落点仍在首句的脑部扫描证据上。",
          "traps": [
            "为什么不是 NO：原文明确说这些感受 are real（是真实的），并强调证据是 dramatic evidence on brain scans，没有任何一处否定这种情绪反应的客观性。",
            "为什么不是 NOT GIVEN：原文不仅提到有人报告这种感受，还交代了科学家通过脑部扫描取得的证据，属于信息充分且明确，不是缺失。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 33–35 单选题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 33,
        "end": 35
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "According to the article, music stimulates higher brain activity when it",
          "translation": "根据文章，当音乐处于什么状态时，它会刺激大脑更高级的活动。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Music that a person likes, but not music that is disliked, activates the higher thinking centers in the brain's cortex"
          },
          "synonyms": [
            "“stimulates higher brain activity” 同义替换为原文 “activates the higher thinking centers in the brain's cortex”",
            "“when it is pleasing” 同义替换为原文 “Music that a person likes”",
            "同句的 “but not music that is disliked” 从反面进一步限定条件：只有被喜欢的音乐才有此效果"
          ],
          "locatingTip": "定位：题干的关键词是 higher（brain activity）与 music，第 4 段中 “activates the higher thinking centers in the brain's cortex” 是全文唯一出现 higher thinking centers 的地方，可直接锁定该句。确定答案技巧：题干问“什么样的音乐才能激活高级中枢”，原文给出的条件非常明确——Music that a person likes, but not music that is disliked，即“被喜欢的音乐”才算。把这一条件换成选项用语就是 D “is pleasing（令人愉悦、讨人喜欢）”，故选 D。本题要抓住 likes 与 disliked 这一对反义对比：作者用 but not 把“喜欢”确立为唯一有效的条件。",
          "analysis": "第 4 段的实验结论句：“Music that a person likes, but not music that is disliked, activates the higher thinking centers in the brain's cortex and, perhaps more importantly, the 'ancient circuitry, the motivation and reward system,' according to experimental psychologist Robert Zatorre, a member of the Montreal team.”（实验心理学家、蒙特利尔团队成员 Robert Zatorre 指出，一个人喜欢的音乐——而不是他不喜欢的音乐——会激活大脑皮层中更高级的思维中枢，或许更重要的是激活“古老的回路，即动机与奖赏系统”）。题干问音乐在什么条件下会刺激更高级的大脑活动，原文给出的变量是“喜欢还是不喜欢”：喜欢（a person likes）时会激活 the higher thinking centers，不喜欢（disliked）时则不会。选项 D is pleasing 正是 music that a person likes 的同义改写，因此为正确答案。",
          "traps": [
            "为什么不是 A（provokes hunger）：原文提到 hunger 是在后一句 “This primeval part of the brain also governs basic drives such as hunger, thirst and sex”，说的是那块古老脑区本身还管辖饥饿等基本驱动，与“音乐激活高级中枢的条件”无关，属于同段名词干扰。",
            "为什么不是 B（requires thought）：原文说被激活的是 the higher thinking centers（高级思维中枢），这是听音乐时大脑的反应部位，而不是音乐本身需要听者思考；原文给出的条件始终是喜好（likes 与 disliked）。",
            "为什么不是 C（is soothing）：soothe 出现在第 2 段的 “soothe babies to sleep”，讲的是音乐能哄婴儿入睡，既不在第 4 段，也与本句的激活条件无关，属于跨段干扰。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "According to Dr Schlaug's research, some stroke patients may regain speech if",
          "translation": "根据 Schlaug 博士的研究，一些中风患者在什么条件下可能恢复言语能力。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "some stroke patients can use melodic intonation therapy, which involves singing using two tones relatively close in pitch, to communicate. Schlaug's research suggests that with intensive therapy, some patients can even move from this two-tone singing back to actual speech."
          },
          "synonyms": [
            "“practise making sounds that are close together” 同义替换为原文 “singing using two tones relatively close in pitch”",
            "“regain speech” 同义替换为原文 “move from this two-tone singing back to actual speech”",
            "“Dr Schlaug's research” 在原文中以 “Schlaug's research suggests” 原词复现"
          ],
          "locatingTip": "定位：题干的人名 Schlaug 在文中仅出现在第 5 段（共两处），其中 Schlaug's research suggests 正好位于第 5 段末尾，直接锁定该句。确定答案技巧：题干的 regain speech 对应原文 move from this two-tone singing back to actual speech，其前提是前面的 this two-tone singing；再往前看定语从句 which involves singing using two tones relatively close in pitch，即“用两个音高相近的音来唱”。把这一条件换成选项用语就是 A “they practise making sounds that are close together”，故选 A。看到 close in pitch 就应与 A 匹配。",
          "analysis": "第 5 段后半部分：“But if the right side, where a lot of music is processed, is intact, some stroke patients can use melodic intonation therapy, which involves singing using two tones relatively close in pitch, to communicate. Schlaug's research suggests that with intensive therapy, some patients can even move from this two-tone singing back to actual speech.”（但如果处理大量音乐信息的右脑是完好的，一些中风患者可以使用旋律语调疗法来交流，这种疗法用两个音高相对接近的音来唱。Schlaug 的研究表明，经过强化治疗，一些患者甚至能从这种双音唱法回到正常的言语）。逻辑链条很清楚：做法是用两个音高相近的音来唱（two tones relatively close in pitch）加上强化治疗（intensive therapy），结果是回到真正的言语（back to actual speech）。选项 A 的 “practise making sounds that are close together” 正是 two tones relatively close in pitch 的同义改写，因此为正确答案。",
          "traps": [
            "为什么不是 B（reactivate the left side of the brain）：原文说的前提恰恰是左脑受损、右脑（where a lot of music is processed）完好，疗法借助的是右脑的音乐通路；原文还强调左脑中风会 wipes out a major part of communication，从未提及重新激活左脑。",
            "为什么不是 C（receive music therapy daily）：原文的条件是 with intensive therapy（强化治疗），intensive 说明的是治疗强度，文中没有任何关于“每天治疗”这一频率的信息。",
            "为什么不是 D（listen to tunes in groups）：原文的疗法是患者自己用两个音高的音唱出来（singing using two tones），并没有集体听曲这种形式，in groups 属于无中生有。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "According to the Cochrane Collaboration review, some research into the link between music and pain relief suggests",
          "translation": "根据 Cochrane 协作组织的那篇综述，关于音乐与止痛之间关系的一些研究表明了什么。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "A 2007 review by the Cochrane Collaboration, a nonprofit, international organization that evaluates medical research, pooled data from 51 pain studies and concluded that, although listening to music can reduce the intensity of pain and the need for narcotic drugs, the benefit, overall, was small."
          },
          "synonyms": [
            "“the value of music may be limited” 同义替换为原文 “the benefit, overall, was small”",
            "“some research into the link between music and pain relief” 同义替换为原文 “pooled data from 51 pain studies”",
            "“the Cochrane Collaboration review” 在原文中直接复现为 “A 2007 review by the Cochrane Collaboration”"
          ],
          "locatingTip": "定位：题干专有名词 Cochrane Collaboration 在全文只出现在第 7 段（第 8 段用 Cochrane reviews 回指），直接锁定第 7 段 “A 2007 review by the Cochrane Collaboration” 一句。确定答案技巧：题干问综述的结论，回原文找 concluded that 之后的内容——although listening to music can reduce the intensity of pain …, the benefit, overall, was small。让步从句承认有效，主句给出关键判断“总体益处很小”，即价值有限，对应选项 B。做本题要习惯先读主干再读让步：concluded that 之后的主句才是结论所在，although 引导的只是退让。",
          "analysis": "第 7 段末句：“A 2007 review by the Cochrane Collaboration, a nonprofit, international organization that evaluates medical research, pooled data from 51 pain studies and concluded that, although listening to music can reduce the intensity of pain and the need for narcotic drugs, the benefit, overall, was small.”（Cochrane 协作组织——一个评估医学研究的非营利国际组织——2007 年的综述汇总了 51 项止痛研究的数据，结论是：尽管听音乐能够减轻疼痛强度、减少对麻醉类药物的需求，但总体而言益处很小）。句子的重点是 concluded that 之后的主句 the benefit, overall, was small，它与选项 B “the value of music may be limited（音乐的价值可能有限）”完全对应；although 从句只是承认音乐确有一定作用，并不改变“整体效果很小”这一结论，因此答案是 B。本题也提示：若把让步内容当作结论（如选项 A 所说的“被低估”），就落入了片面取义的陷阱。",
          "traps": [
            "为什么不是 A（the value of music is underestimated）：原文的判断是 the benefit, overall, was small（总体益处很小），说的是效果有限，而不是外界低估了音乐的价值；underestimate 需要原文出现“被低估”这层评价，文中并没有。",
            "为什么不是 C（more studies are needed in these areas）：该综述汇总了 51 项研究并已给出明确结论，原文没有呼吁继续研究，“还需要更多研究”在文中没有依据。",
            "为什么不是 D（patients welcome this research）：全文没有涉及患者对研究的态度，属于原文未提及的内容。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 36–40 句子结尾配对（Complete each sentence with the correct ending, A–H）",
      "mode": "per_question",
      "questionRange": {
        "start": 36,
        "end": 40
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "Burn victims who receive music therapy",
          "translation": "接受音乐治疗的烧伤患者（应接结尾 F：承受的不适更少）。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "A number of studies, however, show that music therapy can reduce pain, such as a 2001 study on burn patients, whose burns must be frequently scraped to reduce dead tissue."
          },
          "synonyms": [
            "“Burn victims” 同义替换为原文 “burn patients”",
            "“suffer less discomfort” 同义替换为原文 “music therapy can reduce pain”，减轻疼痛即减少不适",
            "“who receive music therapy” 对应原文 “music therapy can reduce pain” 中隐含的治疗关系，即这些患者的疼痛因音乐疗法而减轻"
          ],
          "locatingTip": "定位：题干关键词是 Burn victims，第 8 段 “such as a 2001 study on burn patients” 是全文唯一提到烧伤患者的地方，一步定位。确定答案技巧：句尾配对要先给题干找到谓语所需的结果。原文的因果是 music therapy can reduce pain（音乐疗法能减轻疼痛），结果就是疼痛减轻，换成句尾用语即 F “suffer less discomfort”。注意区分同段另外几个主语：精神分裂症患者对应精神状态与功能，自闭症儿童对应交流能力，早产儿对应体重，住院儿童对应免疫反应，各归各题，不要串位。",
          "analysis": "第 8 段首句：“A number of studies, however, show that music therapy can reduce pain, such as a 2001 study on burn patients, whose burns must be frequently scraped to reduce dead tissue.”（然而，多项研究显示音乐疗法能够减轻疼痛，例如 2001 年一项针对烧伤患者的研究，这些患者的创面必须频繁刮除以减少坏死组织）。句子的逻辑是“总说音乐疗法能减轻疼痛，再用烧伤患者的研究为例”，可见烧伤患者接受音乐疗法得到的直接好处就是疼痛减轻。结尾 F “suffer less discomfort（承受的痛苦更少）”与 reduce pain 同义，填入后句子为 “Burn victims who receive music therapy suffer less discomfort.”，与原文语义一致。做题提醒：本段信息高度密集，一句话里连着出现烧伤患者、精神分裂症患者、自闭症儿童、早产儿与住院儿童，必须逐题回到各自的句子核对，尤其不要把“疼痛减轻”这一结论套到其他人群身上。",
          "traps": [
            "为什么不是 A（rely less on drugs）：原文中“减少用药”属于做结肠镜检查的人——“need fewer sedative drugs”，出自第 7 段，与烧伤患者无关。",
            "为什么不是 B（get heavier）：体重增加是早产儿的结果（gain more weight，第 39 题）。",
            "为什么不是 C（exhibit improved social interaction）：交流互动改善属于自闭症儿童（communication in children with autistic spectrum disorders，第 38 题）。",
            "为什么不是 D（experience psychological benefits）：精神状态与功能的改善属于精神分裂症患者（improve mental state and functioning in people with schizophrenia，第 37 题）。",
            "为什么不是 H（have stronger resistance to disease）：抗病力增强对应住院儿童的免疫反应改善（improvement in immune response，第 40 题）。",
            "为什么不是 E（sleep more soundly）与 G（accept their situation more easily）：原文全篇没有提到音乐疗法能改善睡眠质量或让人更容易接受自身处境，这两项属于无中生有的干扰项。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "People with schizophrenia who receive music therapy",
          "translation": "接受音乐治疗的精神分裂症患者（应接结尾 D：获得心理方面的益处）。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Music therapy may improve mental state and functioning in people with schizophrenia, and communication in children with autistic spectrum disorders, according to Cochrane reviews."
          },
          "synonyms": [
            "“People with schizophrenia” 在原文中原词复现",
            "“experience psychological benefits” 同义替换为原文 “improve mental state and functioning”",
            "“according to Cochrane reviews” 说明该结论出自 Cochrane 综述，与第 7 段提到的 Cochrane Collaboration 是同一家机构"
          ],
          "locatingTip": "定位：题干关键词 schizophrenia 在全文只出现一次，位于第 8 段第二句，一步定位。确定答案技巧：句尾必须与题干的 who receive music therapy 组成完整语义，因此要找原文中音乐疗法给精神分裂症患者带来的结果动词。原文写 improve mental state and functioning（改善精神状态与功能），其中 mental 一词直接指向心理层面，对应结尾 D “experience psychological benefits”。本句后半讲的是自闭症儿童（communication），属于第 38 题，注意切分清楚。",
          "analysis": "第 8 段第二句：“Music therapy may improve mental state and functioning in people with schizophrenia, and communication in children with autistic spectrum disorders, according to Cochrane reviews.”（根据 Cochrane 的综述，音乐疗法可以改善精神分裂症患者的精神状态与功能，也能改善自闭症谱系障碍儿童的交流能力）。这句话用 and 并列了两类人群的两种结果，本题只取前半：人群是 people with schizophrenia，结果动词是 improve，宾语是 mental state and functioning。mental state（精神状态）属于心理层面，functioning（功能）属日常能力，二者合起来正是结尾 D 所说的 psychological benefits。填入后句子为 “People with schizophrenia who receive music therapy experience psychological benefits.”，与原文一致。",
          "traps": [
            "为什么不是 A（rely less on drugs）：减少用药对应的是第 7 段做结肠镜检查的人 “need fewer sedative drugs”，与精神分裂症患者无关。",
            "为什么不是 B（get heavier）：体重增加对应第 8 段中部的早产儿 “gain more weight”（第 39 题）。",
            "为什么不是 C（exhibit improved social interaction）：communication 改善在本句中修饰的是 children with autistic spectrum disorders（第 38 题），不是精神分裂症患者。",
            "为什么不是 F（suffer less discomfort）：疼痛减轻对应的是烧伤患者那一项（reduce pain，第 36 题）。",
            "为什么不是 E、G、H：原文没有提到音乐疗法改善睡眠（E）或使人更易接受处境（G）；而抗病力增强（H）属住院儿童的免疫反应改善（第 40 题）。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "Autistic children who receive music therapy",
          "translation": "接受音乐治疗的自闭症儿童（应接结尾 C：社交互动得到改善）。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Music therapy may improve mental state and functioning in people with schizophrenia, and communication in children with autistic spectrum disorders, according to Cochrane reviews."
          },
          "synonyms": [
            "“Autistic children” 同义替换为原文 “children with autistic spectrum disorders”",
            "“exhibit improved social interaction” 同义替换为原文 “improve … communication”，交流能力的改善即社交互动的改善",
            "“who receive music therapy” 对应原文主语 “Music therapy may improve …”，治疗的接受方正是这些儿童"
          ],
          "locatingTip": "定位：题干关键词 Autistic 在全文只出现一次，即第 8 段第二句的 children with autistic spectrum disorders，一步定位。确定答案技巧：本句结构是 Music therapy may improve A in people with schizophrenia, and B in children with autistic spectrum disorders，两个宾语要看清楚各自属于哪类人群：mental state and functioning 属精神分裂症患者，communication 属自闭症儿童。自闭症儿童对应 communication（交流），与结尾 C 的 improved social interaction 同义，故选 C。",
          "analysis": "仍看第 8 段第二句：“Music therapy may improve mental state and functioning in people with schizophrenia, and communication in children with autistic spectrum disorders, according to Cochrane reviews.”（音乐疗法可以改善精神分裂症患者的精神状态与功能，以及自闭症谱系障碍儿童的交流能力）。句中第二个宾语 communication 的归属由介词短语 in children with autistic spectrum disorders 决定，因此自闭症儿童接受音乐治疗得到的益处就是交流能力改善。交流正是社交互动的核心，与结尾 C “exhibit improved social interaction” 对应，填入后句子为 “Autistic children who receive music therapy exhibit improved social interaction.”。本题与第 37 题共用一句话，做题时必须按 in people with schizophrenia 与 in children with autistic spectrum disorders 两个介词短语把两个宾语分别归位，切忌见 improve 就套用。",
          "traps": [
            "为什么不是 A（rely less on drugs）：减少用药出自第 7 段做结肠镜检查的研究（need fewer sedative drugs），与自闭症儿童无关。",
            "为什么不是 B（get heavier）：体重增加是早产儿的结果（gain more weight，第 39 题）。",
            "为什么不是 D（experience psychological benefits）：精神状态与功能的改善属于精神分裂症患者（improve mental state and functioning，第 37 题），本句中最贴近自闭症儿童的是 communication，不是 mental state。",
            "为什么不是 F（suffer less discomfort）：疼痛减轻对应烧伤患者（reduce pain，第 36 题）。",
            "为什么不是 E、G、H：原文未提音乐疗法改善睡眠（E）或让人更易接受处境（G）；而 H（抗病力增强）指的是住院儿童的免疫反应改善（第 40 题）。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "Premature babies who receive music therapy",
          "translation": "接受音乐治疗的早产儿（应接结尾 B：体重更重）。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Premature infants who listen to lullabies learn to suck better and gain more weight than those who don't get music therapy."
          },
          "synonyms": [
            "“Premature babies” 同义替换为原文 “Premature infants”",
            "“get heavier” 同义替换为原文 “gain more weight”",
            "“who receive music therapy” 对应原文的对照结构 “who listen to lullabies … than those who don't get music therapy”，前者即接受音乐治疗的一组"
          ],
          "locatingTip": "定位：题干关键词 Premature 在全文只出现一次，位于第 8 段中部的 Premature infants who listen to lullabies，一步定位。确定答案技巧：原文用比较结构给出结果——早产儿不仅 learn to suck better（吸吮更好），而且 gain more weight（体重增加更多），其中与句尾选项直接对应的是 weight，即结尾 B “get heavier”。本句有两个结果，不要被 suck better 带走，因为选项中没有与吸吮对应的表述，而 B 明确对应 weight。",
          "analysis": "第 8 段中段：“Premature infants who listen to lullabies learn to suck better and gain more weight than those who don't get music therapy.”（听摇篮曲的早产儿比不接受音乐治疗的早产儿吸吮得更好、体重增加得更多）。句子用 than those who don't get music therapy 构成对照，把“接受音乐治疗”与“未接受”的婴儿加以比较，结论落在两项指标上：suck better（吸吮能力提升）与 gain more weight（体重增长更多）。题干问的是接受音乐治疗的早产儿应接什么结尾，选项中与体重对应的是 B “get heavier”，故答案 B。此题与第 40 题容易混淆，因为早产儿通常也属于住院儿童，但第 40 题依据的是另一句中专门研究 hospitalized children 的免疫反应，两句的主语与结果都不同，取题时必须以原文句子的主语为准。",
          "traps": [
            "为什么不是 A（rely less on drugs）：减少用药是第 7 段做结肠镜检查者的结果（need fewer sedative drugs）。",
            "为什么不是 C（exhibit improved social interaction）：交流改善属自闭症儿童（communication in children with autistic spectrum disorders，第 38 题）。",
            "为什么不是 D（experience psychological benefits）：精神状态与功能改善属精神分裂症患者（第 37 题）。",
            "为什么不是 F（suffer less discomfort）：疼痛减轻属烧伤患者（reduce pain，第 36 题）。",
            "为什么不是 H（have stronger resistance to disease）：免疫反应改善属另一句中的住院儿童（improvement in immune response among hospitalized children，第 40 题）；早产儿这一句讲的是吸吮与体重，不涉及免疫。",
            "为什么不是 E、G：原文没有提到音乐疗法让婴儿睡得更沉（E）或更易接受处境（G）。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "Hospitalised children who receive music therapy",
          "translation": "接受音乐治疗的住院儿童（应接结尾 H：抗病能力更强）。",
          "answer": "H",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "Deforia Lane, director of music therapy at the University Hospitals Ireland Cancer Center in Cleveland, has found an improvement in immune response among hospitalized children who played, sang and created music, compared with children who did not get music therapy."
          },
          "synonyms": [
            "“Hospitalised children” 与原文 “hospitalized children” 仅为英式与美式拼写差异，指同一群体",
            "“have stronger resistance to disease” 同义替换为原文 “an improvement in immune response”，免疫反应改善即抗病能力增强",
            "“who receive music therapy” 对应原文 “children who played, sang and created music … compared with children who did not get music therapy”，前一组即接受音乐治疗的儿童"
          ],
          "locatingTip": "定位：题干关键词 Hospitalised 在文中只出现一次，即第 8 段 Deforia Lane 那一句里的 hospitalized children；人名 Deforia Lane 与机构名 University Hospitals Ireland Cancer Center 也都是唯一出现的专有名词，定位非常直接。确定答案技巧：句尾要接的是音乐治疗带给住院儿童的结果。原文的结果名词是 improvement in immune response（免疫反应改善），免疫反应属于身体抵抗力，对应结尾 H “have stronger resistance to disease”。本句的对照结构 compared with children who did not get music therapy 已经把“接受”与“未接受”两组区分清楚，填入时不必再额外添加信息。",
          "analysis": "第 8 段倒数第三句：“Deforia Lane, director of music therapy at the University Hospitals Ireland Cancer Center in Cleveland, has found an improvement in immune response among hospitalized children who played, sang and created music, compared with children who did not get music therapy.”（克利夫兰大学医院爱尔兰癌症中心的音乐治疗主任 Deforia Lane 发现，参与演奏、歌唱和创作音乐的住院儿童，其免疫反应相比未接受音乐治疗的儿童有所改善）。句子的研究对象是 hospitalized children，研究成果是 improvement in immune response，其中 immune response（免疫反应）直接关系到身体对疾病的抵抗能力，与结尾 H “have stronger resistance to disease” 对应，因此答案是 H。注意与第 39 题的区分：早产儿那一句的结论是体重增加（gain more weight），而本句专门讲住院儿童的免疫功能，两题的原文句子不同、人群描述也不同，切勿混答。",
          "traps": [
            "为什么不是 A（rely less on drugs）：减少用药属第 7 段做结肠镜检查者（need fewer sedative drugs），本句未涉及用药。",
            "为什么不是 B（get heavier）：体重增加属早产儿（gain more weight，第 39 题）。",
            "为什么不是 C（exhibit improved social interaction）：交流互动改善属自闭症儿童（第 38 题）。",
            "为什么不是 D（experience psychological benefits）：精神状态与功能改善属精神分裂症患者（第 37 题）。",
            "为什么不是 F（suffer less discomfort）：疼痛减轻属烧伤患者（reduce pain，第 36 题）。",
            "为什么不是 E、G：原文没有提到音乐治疗改善住院儿童的睡眠（E）或让他们更易接受处境（G），这两项属于无凭据的干扰项。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
