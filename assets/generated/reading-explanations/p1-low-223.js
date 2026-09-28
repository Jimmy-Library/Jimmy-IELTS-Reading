(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-223", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-223",
  "meta": {
    "examId": "p1-low-223",
    "title": "Effect and Cause 湖泊海啸研究",
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
          "stem": "According to Gregory of Tours, the landslide which caused the flood happened near Tauredunum.",
          "translation": "据图尔的格雷戈里（Gregory of Tours）记载，引发洪水的那次山体滑坡发生在 Tauredunum 附近。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "He wrote of a big rockfall in the year 563 AD in the vicinity of a place called Tauredunum."
          },
          "synonyms": [
            "“the landslide” 同义替换为原文的 “a big rockfall”，二者都指大量岩体的崩塌坠落",
            "“happened near” 同义替换为原文的 “in the vicinity of”，意为“在……附近”",
            "“Tauredunum” 原词复现：原文写作 “a place called Tauredunum”（一个叫 Tauredunum 的地方）",
            "“which caused the flood” 对应原文下一句 “The debris plunged into the river, and a great mass of water 'overwhelmed with a sudden and violent flood …'”，即岩崩碎屑坠入河中才引发了洪水",
            "“According to Gregory of Tours” 对应原文首句 “In the sixth century Gregory of Tours, a chronicler of the Germanic people known as the Franks, told of an extraordinary event”"
          ],
          "locatingTip": "定位：题干里有两个超高辨识度的专有名词——人名 Gregory of Tours 和地名 Tauredunum，其中 Tauredunum 全篇只出现在第 2 段，扫读时盯住大写词即可一步锁定该段，不必读完全文。确定答案技巧：判断题先拆出“谁、在何时何地、发生了什么”三要素。原文写明他记述 563 年 “a big rockfall”（一场大型岩崩）发生在 “in the vicinity of a place called Tauredunum”，随后碎屑坠河引发巨浪。landslide 与 rockfall 是同义替换，near 与 in the vicinity of 是同义替换，地点、时间与因果关系与题干完全吻合，故选 TRUE。",
          "analysis": "第 2 段先交代格雷戈里的身份与时代（六世纪的编年史家），第 2 句就是本题的落点：“He wrote of a big rockfall in the year 563 AD in the vicinity of a place called Tauredunum.”（他记述了公元 563 年在一个叫 Tauredunum 的地方附近发生的一场大型岩崩）。紧接着第 3 句说明后果：“The debris plunged into the river, and a great mass of water 'overwhelmed with a sudden and violent flood all that was on the banks as far as the city of Geneva,'”（碎屑坠入河中，一大团水体以突然而猛烈的洪水淹没了河岸上直到日内瓦城为止的一切）。题干说“引发洪水的那次山体滑坡发生在 Tauredunum 附近”，其中 landslide（山体滑坡）与原文的 rockfall（岩崩）在雅思中属于常见同义替换，near 与 in the vicinity of 同义，Tauredunum 为原词复现，而且原文的因果链正好是“岩崩在先、洪水在后”，与题干的定语从句 which caused the flood 完全一致。信息方向、地点、因果全部吻合，故答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确写着岩崩发生的年代是 563 AD，地点是 “in the vicinity of a place called Tauredunum”，与题干的 near Tauredunum 意思完全一致，不存在任何冲突点。",
            "为什么不是 NOT GIVEN：此处原文既给出了地点（一个叫 Tauredunum 的地方附近）又给出了时间（公元 563 年），并且交代了岩崩引发洪水这一因果，信息完整且与题干相符，不属于未提及。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "The city of Geneva was undamaged by the tsunami that Gregory described.",
          "translation": "格雷戈里所描述的那场海啸并未对日内瓦城造成破坏。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The Geneva bridge was demolished, and several people inside the city walls of Geneva were killed."
          },
          "synonyms": [
            "“The city of Geneva” 同义替换为原文的 “the city walls of Geneva”，再加上同段出现的 “The Geneva bridge”，都指向日内瓦城本身",
            "“was undamaged” 与原文的 “was demolished”（被摧毁）以及 “were killed”（有人被冲死）直接冲突：桥毁人亡显然属于遭到破坏",
            "“the tsunami that Gregory described” 对应原文上一句的 “overwhelmed with a sudden and violent flood all that was on the banks as far as the city of Geneva”，即格雷戈里笔下的那场巨浪"
          ],
          "locatingTip": "定位：本题与第 1 题同在第 2 段，题干的定位词是专有名词 Geneva，该段中 Geneva 共出现四次（Lake Geneva、the city of Geneva、the Geneva bridge、the city walls of Geneva），读到 “the city walls of Geneva” 一句即可停。确定答案技巧：判断题里像 undamaged（未受损）、unaffected、unchanged 这类带否定前缀的词是 FALSE 的高发点，因为原文往往紧接着给出被破坏的证据。原文写 “The Geneva bridge was demolished, and several people inside the city walls of Geneva were killed.”，桥被摧毁、城墙内数人丧生，重建出的画面是城市被严重破坏，与“未受损”正相反，故判 FALSE。",
          "analysis": "第 2 段在描述完那团巨浪淹没了直至日内瓦城的河岸之后，立即给出损失清单：“The Geneva bridge was demolished, and several people inside the city walls of Geneva were killed.”（日内瓦桥被摧毁，日内瓦城墙内还有数人死亡）。这两项都是破坏性后果：桥被拆毁般冲垮（demolished），城墙之内（inside the city walls）也有人丧命，说明灾害已经直接作用到城内及其居民。题干却断言 “The city of Geneva was undamaged”（日内瓦城未受损），与原文的 demolished、were killed 构成正面对立，属于事实冲突，因此答案是 FALSE。做题时要注意：题干的 undamaged 是一个绝对化的否定表述，只要原文中出现任何一处受损证据即可否掉它；本题原文给出的不止一处，而是“桥被毁”加“城内有人死亡”两条，证据非常充分。",
          "traps": [
            "为什么不是 TRUE：原文写明日内瓦桥被摧毁、城墙内数人死亡，城市显然遭受了破坏，题干说“未受损”与原文相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对日内瓦的受损情况交代得非常具体（桥被 demolished、城内有人被杀），属于已给出且与题干相反的信息，不是信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The work of Marius of Avenches supported the idea that there was a tsunami.",
          "translation": "阿旺什的马略（Marius of Avenches）的记述支持了当时发生过海啸这一观点。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Historians and scientists have long believed that Gregory and another chronicler, Marius of Avenches, who told a similar tale, were describing a tsunami that raced across the lake."
          },
          "synonyms": [
            "“Marius of Avenches” 原词复现，原文点明他是 “another chronicler”（另一位编年史家）",
            "“The work of … supported the idea” 同义替换为原文的 “who told a similar tale”（他讲了一个类似的故事），也就是说他的记述与格雷戈里相互印证",
            "“there was a tsunami” 同义替换为原文的 “were describing a tsunami that raced across the lake”（两人所描述的是一场掠过湖面的海啸）",
            "“supported” 还对应原文的 “Historians and scientists have long believed”，即学界长期以来正是依据两人的记述相信发生过海啸"
          ],
          "locatingTip": "定位：题干的人名 Marius of Avenches 是带介词的大写专名，全文只出现一次，位于第 2 段最后两句，扫读大写词即可锁定。确定答案技巧：本题的关键是把“支持了某种看法”还原成原文的表述。原文说 “Gregory and another chronicler, Marius of Avenches, who told a similar tale, were describing a tsunami that raced across the lake.”，其中 told a similar tale（讲述了类似的故事）意味着他的记述与格雷戈里互相印证，两条独立记载指向同一事件，正是“支持”的意思；而 were describing a tsunami 正是那个被支持的“想法”本身。所以答案是 TRUE。",
          "analysis": "第 2 段末句：“Historians and scientists have long believed that Gregory and another chronicler, Marius of Avenches, who told a similar tale, were describing a tsunami that raced across the lake. But there has not been any direct evidence of it until now.”（历史学家和科学家长期以来一直相信，格雷戈里与另一位编年史家——阿旺什的马略，他讲述了类似的故事——所描述的是掠过湖面的一场海啸。但直到现在都没有任何直接证据）。这句话包含两层意思：其一，马略的记述与格雷戈里类似（told a similar tale），两条记载相互印证；其二，学界正是依据这些记载长期以来相信发生过海啸。题干说“马略的记述支持了发生过海啸这一想法”，与 told a similar tale 以及 have long believed 所表达的“相互印证、共同支撑”完全一致，因此答案是 TRUE。注意末句的 “But there has not been any direct evidence of it until now” 讲的是缺少物证（sediment 之类的直接证据），并不否定“两个记述互相支持”这一点，不要被它带偏而误选 FALSE。",
          "traps": [
            "为什么不是 FALSE：原文用 told a similar tale 明确指出马略讲了一个与格雷戈里类似的故事，两人的记载被并列在一起、共同支撑了“发生过海啸”的判断，题干与原文同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文虽然没有出现 supported 这个词，但 told a similar tale 加 have long believed 已经完整表达了“他的记述与另一人的记述相互印证、共同支撑这一看法”的关系，属于可用同义改写推出的明确信息，不是未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "The rocks which fell into the delta were very hard and dense.",
          "translation": "落入三角洲的那些岩石非常坚硬且致密。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The researchers think that large boulders crashed down onto soft sediments which had accumulated at the river mouth because of the slowing of the river's flow when it enters the lake."
          },
          "synonyms": [
            "“The rocks which fell into the delta” 同义替换为原文的 “large boulders crashed down onto soft sediments”，即坠落在三角洲沉积物上的大块岩石",
            "“the delta” 原词复现：原文紧接着说 “These sediments formed an underwater delta”",
            "“very hard and dense” 在原文中找不到任何对应表述：原文只交代了岩石的体积很大（large boulders），以及被撞击的沉积物很软（soft sediments），从未评价岩石本身的硬度或密度"
          ],
          "locatingTip": "定位：题干的关键是“落入三角洲的岩石”，回原文搜索与岩石、三角洲有关的句子，落在第 3 段讲成因的那一串句子，尤其是 “large boulders crashed down onto soft sediments”。确定答案技巧：碰到形容词类限定（very hard and dense）要回原文逐一核对是否出现等价描述。原文提到岩石时只用了 large（大），提到沉积物时用了 soft（软）——注意 soft 修饰的是 sediments（沉积物）而不是 rocks（岩石），且原文完全没有出现 hard、dense、solid、compact 之类描述岩石质地的词。既没肯定也没否定，属于信息缺失，因此判 NOT GIVEN。",
          "analysis": "第 3 段讲的是研究团队推断的事件经过：“The researchers think that large boulders crashed down onto soft sediments which had accumulated at the river mouth because of the slowing of the river's flow when it enters the lake. These sediments formed an underwater delta that had several canyon-like channels. When the falling rocks hit the delta they destabilised the sediments and caused the canyons to collapse.”（研究者认为，大块岩石砸落在因河流入湖减速而在河口堆积起来的松软沉积物上。这些沉积物形成了一个带有若干峡谷状水道的水下三角洲。当坠落的岩石撞上三角洲时，沉积物失稳，水道随之坍塌）。原文对岩石的全部描述只有 large boulders（大块岩石）与 the falling rocks（坠落的岩石），对三角洲沉积物的描述是 soft（松软）；至于岩石是否“非常坚硬且致密”，全篇没有任何句子涉及。题干凭空添加了 hardness（硬度）与 density（密度）这两项物理属性，属于原文未提供的信息，按规则判 NOT GIVEN。特别提醒：soft 形容的是 sediments，不要因为看到了 soft 就顺手推断岩石 hard，原文并未作此对比。",
          "traps": [
            "为什么不是 TRUE：原文只说明坠落物是“大块岩石”（large boulders），既没有说它们坚硬，也没有说它们致密，题干的两项属性都没有原文依据，不能凭常识（岩石一般坚硬）来选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文存在相反信息，例如原文说岩石是软的或疏松的；但原文对岩石的硬度与密度毫无交代，只是没说，因此只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Richard Schweickert has published studies on lake tsunamis that have occurred in several countries.",
          "translation": "理查德·施韦克特（Richard Schweickert）发表过关于发生在多个国家的湖泊海啸的研究。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "Lake tsunami, although unusual, are not unknown, says Richard Schweickert, an Emeritus Professor of Geology at the University of Nevada in Reno, in the United States. He cites evidence that the collapse of part of the shoreline of Lake Tahoe in northern California within the past 20,000 years caused a tsunami with wave heights of about 30 metres."
          },
          "synonyms": [
            "“Richard Schweickert” 原词复现，原文注明其身份是 “an Emeritus Professor of Geology at the University of Nevada in Reno, in the United States”",
            "“lake tsunamis” 同义替换为原文的 “Lake tsunami, although unusual, are not unknown”",
            "“has published studies on … in several countries” 在原文中无任何对应：原文只说他 cites evidence（引用了证据）并给出加州北部 Lake Tahoe 这一个例子，既没有说他发表过研究，也没有说涉及的湖泊海啸发生在多个国家"
          ],
          "locatingTip": "定位：题干人名 Richard Schweickert 是拼写独特的大写专名，全文只出现在第 7 段首句，扫读时一眼可辨。确定答案技巧：本题的核心信息有三块——“发表过研究”“关于湖泊海啸”“涉及多个国家”。回到原文核对：①原文说他 cites evidence（引用证据），引用证据与自行发表研究是两回事；②原文只举了一个湖（Lake Tahoe，位于美国加州北部）的例子，数量上只涉及一个国家；③整段中 Professor 的学术身份并不等于“发表过研究”。三块信息在原文中都没有着落，属于信息缺失，因此判 NOT GIVEN。要警惕由“他是地质学荣誉教授”这一身份反推“他一定发表过研究”的常识性脑补。",
          "analysis": "第 7 段开篇即本题定位句：“Lake tsunami, although unusual, are not unknown, says Richard Schweickert, an Emeritus Professor of Geology at the University of Nevada in Reno, in the United States. He cites evidence that the collapse of part of the shoreline of Lake Tahoe in northern California within the past 20,000 years caused a tsunami with wave heights of about 30 metres.”（美国内华达大学里诺分校地质学荣休教授理查德·施韦克特说，湖泊海啸虽然罕见，但并非闻所未闻。他引用证据指出，加州北部太浩湖部分湖岸在过去两万年间崩塌，曾引发约 30 米高的海啸）。整段接下来讲的都是他引用的证据（湖底有两条断层）、他对瑞士研究者计算结果的评价（would certainly be capable of moving a large amount of material）以及他建议的后续验证方法（用海岸线测绘寻找巨型波浪留下的异常沉积或侵蚀）。全段关于他本人的信息只有两个：学术头衔，以及他说过的话；题干所说的“发表过关于多个国家湖泊海啸的研究”在原文中没有任何对应——原文只举了美国的一个湖，也从未提到他写过论文或著作，故该题只能判 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文只说施韦克特 cites evidence（引用证据）并给出 Lake Tahoe 一例，没有说他发表过研究，更没有说他研究过多个国家的湖泊海啸，题干的两个要点都缺少原文支撑。",
            "为什么不是 FALSE：原文并没有否认他发表过研究，也没有说湖泊海啸只发生在某一个国家，只是对这两点没有交代；没有相反信息就属于信息缺失，应判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The shoreline of Lake Tahoe has remained unchanged for 20,000 years.",
          "translation": "太浩湖（Lake Tahoe）的湖岸线在两万年间始终没有发生变化。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "He cites evidence that the collapse of part of the shoreline of Lake Tahoe in northern California within the past 20,000 years caused a tsunami with wave heights of about 30 metres."
          },
          "synonyms": [
            "“The shoreline of Lake Tahoe” 原词复现：“the collapse of part of the shoreline of Lake Tahoe”",
            "“for 20,000 years” 同义替换为原文的 “within the past 20,000 years”（在过去两万年之内）",
            "“has remained unchanged” 与原文的 “the collapse of part of the shoreline”（湖岸的一部分发生了崩塌）直接冲突：崩塌本身就是地形改变"
          ],
          "locatingTip": "定位：专有名词 Lake Tahoe 是极佳的定位词，全文只出现在第 7 段第二句，读到它即可停下精读。确定答案技巧：本题的判分点是 remained unchanged（保持不变）。原文该句的谓语是 the collapse of part of the shoreline（湖岸的一部分发生崩塌），崩塌意味着岸线形状被改变；“part of” 也说明并非只是无关紧要的局部，而是足以引发 30 米高海啸的大规模塌方。题干说“两万年间一直没变”，与“发生过崩塌”相矛盾，故判 FALSE。",
          "analysis": "第 7 段第二句：“He cites evidence that the collapse of part of the shoreline of Lake Tahoe in northern California within the past 20,000 years caused a tsunami with wave heights of about 30 metres.”（他引用的证据表明，加州北部太浩湖部分湖岸在过去两万年间发生崩塌，并引发了约 30 米高的海啸）。把题干与原文对照：时间上 “for 20,000 years” 对应 “within the past 20,000 years”；对象上 “The shoreline of Lake Tahoe” 原词复现；但性质上，原文说的是 the collapse of part of the shoreline，即过去两万年间湖岸的一部分发生了崩塌塌落，地貌显然被改变过。题干却用 remained unchanged 断言“始终未变”，与原文的事实正相反，因此答案是 FALSE。做题要点：remain unchanged、stay the same 这类“不变”表述在雅思判断题里属于强断言，只要原文给出任何变化（build、collapse、erode、shift 等）就能立刻否掉。",
          "traps": [
            "为什么不是 TRUE：原文明确写着过去两万年间 Lake Tahoe 的部分湖岸发生了崩塌（the collapse of part of the shoreline），并且由此引发海啸，岸线显然发生过巨大变化，与“保持不变”不符。",
            "为什么不是 NOT GIVEN：原文对这两万年间湖岸的情况交代得很具体（崩塌、引发约 30 米高的海啸），是已经给出且与题干冲突的信息，不属于未提及。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Parts of the population of Geneva now live closer to the lake than was the case in the sixth century.",
          "translation": "如今日内瓦有部分人口居住得比六世纪时更靠近湖边。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "In the sixth century, Geneva was a small community, mostly behind walls on a hill, whereas today it is home to international organisations and about 200,000 people, many living in low-lying areas near the water."
          },
          "synonyms": [
            "“in the sixth century” 原词复现",
            "“Parts of the population of Geneva now live” 同义替换为原文的 “today it is home to … about 200,000 people, many living in …”，many 即“部分人口”",
            "“closer to the lake” 同义替换为原文的 “low-lying areas near the water”（低洼近水区域），并与六世纪 “mostly behind walls on a hill”（大多在山上城墙之内）形成远近对照"
          ],
          "locatingTip": "定位：题干的比较对象是“今昔日内瓦的居住位置”，回原文找同时出现第六世纪与今天（today）的句子，落在第 8 段第 2 句。确定答案技巧：本题考的是今昔对比，解题关键是找到两个时间点在“位置”上的差异。原文先用 “In the sixth century … mostly behind walls on a hill” 说明昔日居民住在山上城墙之内（离湖远、地势高），再用 “whereas today … about 200,000 people, many living in low-lying areas near the water” 说明如今许多人住在近水的低洼地带。由“山上”变为“近水低洼”，方向就是更靠近湖面，与题干的 closer to the lake 完全一致，故选 TRUE。",
          "analysis": "第 8 段第 2 句是本题定位句：“In the sixth century, Geneva was a small community, mostly behind walls on a hill, whereas today it is home to international organisations and about 200,000 people, many living in low-lying areas near the water.”（六世纪时，日内瓦是一个小小的聚落，居民大多住在山上城墙之内；而今天它是众多国际组织的所在地，有约二十万人口，其中许多人住在靠近水域的低洼地区）。原文用 whereas 作今昔对照：过去是 a small community, mostly behind walls on a hill（山上、城墙内），现在是 about 200,000 people, many living in low-lying areas near the water（二十万人中许多人住在近水的低洼处）。从山上的城墙内迁移到湖边低洼地带，居住位置相对湖面明显更近，many living 也对应题干所说的 parts of the population（部分人口），两处对应严丝合缝，因此答案是 TRUE。做题提示：含 than 的比较级判断题，务必把原文两侧的对照信息都找齐，只看到“今天人口多”还不够，必须确认位置关系确实发生了变化。",
          "traps": [
            "为什么不是 FALSE：原文明确指出如今 “many living in low-lying areas near the water”，而六世纪居民 “mostly behind walls on a hill”，由山上迁至近水低地，方向与题干的 closer to the lake 一致，没有矛盾。",
            "为什么不是 NOT GIVEN：原文既给了六世纪的位置（山上城墙内），也给了今天的位置（许多人住在近水低洼区），今昔位置都交代清楚，足以判断远近变化，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 8–13 流程图填空（ONE WORD AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 8,
        "end": 13
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Katrina Kremer was looking for indications of prehistoric 8 ________ that had occurred before the sixth-century event.",
          "translation": "卡特里娜·克雷默（Katrina Kremer）当时正在寻找史前时期发生过的洪水迹象，这些洪水发生在六世纪那场事件之前。",
          "answer": "floods",
          "wordClass": "名词（复数形式：位于形容词 prehistoric 之后，作介词 of 的宾语，并作其后定语从句 that had occurred … 的先行词；原文指多次史前大洪水，故填复数 floods，不加冠词）",
          "locating": {
            "paragraph": "4",
            "quote": "Katrina Kremer, a University of Geneva doctoral student and the study's lead author, had been conducting seismic soundings, searching for thin sediment layers that might be evidence of major floods that had taken place in pre-historic times, long before the event described by Gregory of Tours."
          },
          "synonyms": [
            "“indications of” 同义替换为原文的 “searching for thin sediment layers that might be evidence of”，即她寻找的是能证明史前洪水存在的沉积层",
            "“prehistoric” 同义替换为原文的 “in pre-historic times”，只是词性与位置不同",
            "“had occurred before the sixth-century event” 同义替换为原文的 “long before the event described by Gregory of Tours”，而格雷戈里记述的事件发生在六世纪",
            "“that had occurred” 与原文定语从句 “that had taken place” 对应，动词同义"
          ],
          "locatingTip": "定位：先看流程图——这一格的主语是人名 Katrina Kremer，专有名词直接把她锁定到第 4 段（第 4 段第 2 句同时出现她与研究负责人身份，第 3 句继续讲她的工作）。确定答案技巧：题干说她寻找的是“史前的（某物）的迹象”，回原文找她当时的研究动作：had been conducting seismic soundings, searching for thin sediment layers that might be evidence of major floods（她一直在做地震测深，寻找可能证明史前大洪水的薄沉积层）。空格要填的正是 evidence of 后面那个被寻找的事物，即 major floods；因空格后的从句谓语是复数 had occurred，需保持复数形式，故填 floods。切勿误填 layers 或 sediments，那是“证据”本身而不是“被寻找的现象”。",
          "analysis": "第 4 段第 2 句交代了克雷默的原定研究任务：“Katrina Kremer, a University of Geneva doctoral student and the study's lead author, had been conducting seismic soundings, searching for thin sediment layers that might be evidence of major floods that had taken place in pre-historic times, long before the event described by Gregory of Tours.”（日内瓦大学博士生、该研究的第一作者卡特里娜·克雷默当时一直在做地震测深，寻找可能证明史前时期大洪水存在的薄沉积层——那些洪水远早于格雷戈里记述的那场事件）。流程图这一格把原文的长句压缩成 “looking for indications of prehistoric [8] that had occurred before the sixth-century event”：indications of 对应原文的 evidence of，prehistoric 对应 in pre-historic times，before the sixth-century event 对应 long before the event described by Gregory of Tours（格雷戈里笔下的事件发生在六世纪）。逐项比对后，空格所指的是被寻找的现象本身，也就是 major floods，故答案为 floods。语法上，空格后的定语从句用的是复数谓语 had occurred，与 floods 的数一致；同时 “ONE WORD AND/OR A NUMBER” 限定了只写一个词，所以既不能加冠词也不能写成 flood 的单数形式。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Researchers extracted samples from the deposit and dated organic material such as 9 ________",
          "translation": "研究人员从沉积层中取样，并对诸如 ________ 之类的有机物质进行了年代测定。",
          "answer": "leaves",
          "wordClass": "名词（复数形式：位于 such as 之后作介词宾语，原文用复数 leaves，故不加冠词、不变单数）",
          "locating": {
            "paragraph": "5",
            "quote": "The researchers then took samples of the sediments and used carbon-dating techniques on remains of leaves and other organic matter they found to determine when the deposit formed."
          },
          "synonyms": [
            "“extracted samples from the deposit” 同义替换为原文的 “took samples of the sediments”",
            "“dated organic material such as” 同义替换为原文的 “used carbon-dating techniques on remains of leaves and other organic matter”（对树叶残骸等有机物质做碳测年）",
            "“such as” 对应原文列举结构中的 “and other organic matter”，说明后面要填的是原文给出的具体例证"
          ],
          "locatingTip": "定位：流程图此格讲的是“取样后对有机物质做年代测定”，关键词 organic material 只在第 5 段出现，直接锁定 “The researchers then took samples of the sediments and used carbon-dating techniques on remains of leaves and other organic matter …”。确定答案技巧：原文用 “remains of leaves and other organic matter” 给出“具体例证加概括”的结构，题干改写成 “organic material such as [9]”，such as 后面必须接原文举出的那个具体例子，即 leaves（树叶残骸）。注意不要误填 organic（那是题干里已有的概括词）或 matter（原文的 other organic matter 是同类列举的收尾，不是 such as 的例证）。",
          "analysis": "第 5 段首句是本题定位句：“The researchers then took samples of the sediments and used carbon-dating techniques on remains of leaves and other organic matter they found to determine when the deposit formed.”（研究人员随后对沉积物取样，并对他们找到的树叶残骸及其他有机物质使用碳测年技术，以确定该沉积层形成的年代）。英文的 “A and other B” 结构里，A 是具体例证，B 是上位概括，所以 remains of leaves（树叶残骸）就是具体的有机物质样本，other organic matter（其他有机物质）是同类中的概括项。题干用 such as 引出需要填写的那一项，正是原文 A 位置的 leaves。词性上，空格位于 such as 之后、需与 dated 的宾语结构一致，leaves 是名词复数（leaf 的不规则复数），且已是原文原词形式，直接照抄即可；按 “ONE WORD AND/OR A NUMBER” 的要求只写一个词，不要写成 leaves and other matter。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Carbon-dating confirmed that the deposit was present in the lake by the beginning of the 10 ________ century.",
          "translation": "碳测年确认，该沉积层在 ________ 世纪初就已存在于湖中。",
          "answer": "seventh",
          "wordClass": "序数词（作 century 的定语，与空格前的定冠词 the 连用，表示“第七个世纪”，故填序数词 seventh 而非基数词 seven）",
          "locating": {
            "paragraph": "5",
            "quote": "This narrowed the range to a period between the late fourth century and the early seventh century."
          },
          "synonyms": [
            "“Carbon-dating confirmed” 对应原文上一句的 “used carbon-dating techniques … to determine when the deposit formed”，即用碳测年确定年代",
            "“by the beginning of the [10] century” 同义替换为原文的 “the early seventh century”（七世纪初期）",
            "“was present in the lake” 对应原文的 “when the deposit formed”（沉积层形成之时），意味着它已经沉入湖中",
            "“between the late fourth century and the early seventh century” 这一区间中的上限，正是题干的 “beginning of the seventh century”"
          ],
          "locatingTip": "定位：本题顺承第 9 题，同在第 5 段，定位词是 carbon-dating 与 century，回原文找给出年代区间的那一句 “This narrowed the range to a period between the late fourth century and the early seventh century.”。确定答案技巧：题干问“到第几个世纪初时沉积层已存在于湖中”，即要取年代区间的上限。原文说区间是“四世纪晚期到七世纪早期”，最晚的一端就是 the early seventh century，与题干的 “by the beginning of the [10] century” 对应，故填 seventh。注意两个坑：一是不要填 fourth（那是区间起点，指最早可能）；二是空格后已有 century，只能填序数词 seventh，不能填基数词 seven 或阿拉伯数字。",
          "analysis": "第 5 段先讲方法再讲结论。方法句：“The researchers then took samples of the sediments and used carbon-dating techniques on remains of leaves and other organic matter they found to determine when the deposit formed.”（研究人员取样并用碳测年技术测定沉积层形成的年代）。结论句即定位句：“This narrowed the range to a period between the late fourth century and the early seventh century. Other than the rockfall, there is no record of any special event during that period, Simpson says.”（这把年代范围缩小到四世纪晚期至七世纪早期之间。辛普森说，除那次岩崩之外，该时期没有任何特殊事件的记载）。流程图问的是“沉积层在某个世纪初就已经存在于湖中”，也就是要求确定该沉积层形成时间的最晚界限；原文区间的最晚一端是 the early seventh century（七世纪早期），early 与题干 beginning（初期）同义，所以空格应填 seventh。填入后题干读作 “by the beginning of the seventh century”，即“最迟到七世纪初”，正好落在原文区间之内。注意区分区间两端：late fourth century 是起点，说明它最早可能出现于四世纪晚期；而题目问的是“到什么时候肯定已经存在”，取的是上限。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The volume of the deposit was then 11 ________ by the scientists.",
          "translation": "随后，科学家们对该沉积层的体积进行了 ________。",
          "answer": "estimated",
          "wordClass": "动词的过去分词（构成被动语态 was then estimated by the scientists，与前面的 was 一起使用，故用过去分词形式 estimated，而非原形或过去式）",
          "locating": {
            "paragraph": "6",
            "quote": "The researchers estimated that the deposit, which is at least 9.6 kilometres long by 4.8 kilometres wide, and averages about five metres thick, contains more than 248 million cubic metres of material."
          },
          "synonyms": [
            "“by the scientists” 同义替换为原文的 “The researchers”（研究人员）",
            "“was then [11]” 与原文主动语态 “The researchers estimated” 对应，题干把主动句改写成被动句，动词仍是 estimated",
            "“The volume of the deposit” 对应原文同一长句里的 “at least 9.6 kilometres long by 4.8 kilometres wide, and averages about five metres thick, contains more than 248 million cubic metres of material”，正是体积的测算结果"
          ],
          "locatingTip": "定位：第 6 段首句就是本题定位句，段落主语 The researchers estimated 与题干的 by the scientists 直接对应，题干关键词 volume 也由该句的尺寸与体积数据（9.6 kilometres long、4.8 kilometres wide、five metres thick、248 million cubic metres）支撑。确定答案技巧：题干把原文的主动句 “The researchers estimated” 改写为被动句 “was then [11] by the scientists”，空格位于 was 之后、by 之前，说明需要填的是及物动词的过去分词。回到原文，主语后紧跟的实义动词就是 estimated，因此答案是 estimated。注意不要填名词形式（如 estimation）或改写为 calculated、measured 等同义词，填空题必须照抄原文用词。",
          "analysis": "第 6 段首句：“The researchers estimated that the deposit, which is at least 9.6 kilometres long by 4.8 kilometres wide, and averages about five metres thick, contains more than 248 million cubic metres of material.”（研究人员估算，该沉积层至少长 9.6 公里、宽 4.8 公里、平均厚约 5 米，所含物质超过 2.48 亿立方米）。题干把这句话的主动结构改写成被动结构：“The volume of the deposit was then [11] by the scientists.”（该沉积层的体积随后由科学家们进行了什么）。主动句中动作的发出者是 The researchers（对应题干的 by the scientists），动作是 estimated（估算），宾语是从句 that 引导的内容（对应题干的 The volume of the deposit）。语态改写后，动词需以过去分词形式出现在 was 与 by 之间，故填 estimated。语法提示：空格前是 be 动词 was、空格后是 by 加施动者，这一结构是识别被动语态与过去分词的最明显信号；同时要注意 estimated 在此处不加 -ing，也不能换成名词 estimation，因为题干已由 was 固定了动词位置。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "The researchers established the approximate 12 ________ and speed of the tsunami through extensive computer modelling.",
          "translation": "研究人员通过大量计算机模拟，确定了这场海啸的大致 ________ 与速度。",
          "answer": "height",
          "wordClass": "名词（单数，与后面的 speed 并列作 established 的宾语，不加冠词、不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "They ran multiple computer simulations showing that the collapse of that much sediment at the mouth of the Rhone would have caused a tsunami with an estimated height of 7.9 metres at Geneva - where it would have arrived in about 70 minutes."
          },
          "synonyms": [
            "“through extensive computer modelling” 同义替换为原文的 “ran multiple computer simulations”（运行多次计算机模拟）",
            "“established the approximate …” 对应原文的 “an estimated height of 7.9 metres”，approximate 与 estimated 同义",
            "“and speed” 对应原文的 “the collapse … would have caused a tsunami with an estimated height of 7.9 metres at Geneva - where it would have arrived in about 70 minutes”，70 分钟抵达日内瓦即速度信息"
          ],
          "locatingTip": "定位：第 6 段第 2 句提到 computer simulations，与题干的 computer modelling 对应，直接锁定该句。确定答案技巧：题干用 and 把两个被确定的对象并列——approximate [12] 和 speed；回原文找量化描述，句中出现的是 “an estimated height of 7.9 metres”（高度约 7.9 米）与 “in about 70 minutes”（约 70 分钟抵达，隐含速度）。题干已经把时间信息压缩成 speed，那么与它并列的空格就只能是 height。填入后 “the approximate height and speed of the tsunami” 与原文的估计高度与到达时间完全对应。注意不要填 metres 或 7.9（那是数值本身而非被测量的物理量），也不要填 water。",
          "analysis": "第 6 段第 2 句即本题定位句：“They ran multiple computer simulations showing that the collapse of that much sediment at the mouth of the Rhone would have caused a tsunami with an estimated height of 7.9 metres at Geneva - where it would have arrived in about 70 minutes.”（他们运行了多次计算机模拟，显示罗讷河口如此巨量的沉积物一旦崩塌，会在日内瓦造成约 7.9 米高的海啸，并在约 70 分钟后抵达那里）。流程图句把原文的模拟结论概括为 “The researchers established the approximate [12] and speed of the tsunami through extensive computer modelling”：extensive computer modelling 对应 multiple computer simulations；approximate 对应 estimated；而原文为海啸提供的两项量化特征，一是高度（an estimated height of 7.9 metres），二是抵达时间（in about 70 minutes，由此可推算速度）。题干已把时间维度概括为 speed，剩下的空格自然承接高度这一维度，故填 height。词性上，height 与 speed 并列作 established 的宾语，是可数名词单数，与空格前的 the approximate 搭配，不需要加冠词或变复数。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "A likely cause of the rockfall was a significant 13 ________",
          "translation": "这场岩崩的一个可能原因是强烈的一次 ________。",
          "answer": "earthquake",
          "wordClass": "名词（单数，作系动词 was 后面的表语，与 a significant 一起构成名词短语；空格前有不定冠词 a 和形容词 significant 修饰，故填单数形式 earthquake，不加复数、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "The rockfall itself may have been set off by a major earthquake, as some scientists have speculated."
          },
          "synonyms": [
            "“A likely cause of the rockfall” 同义替换为原文的 “may have been set off by”（可能被……引发），set off 即“触发、引起”",
            "“was a significant …” 同义替换为原文的 “a major earthquake”，significant 对应 major",
            "“The rockfall” 原词复现：原文主语是 “The rockfall itself”"
          ],
          "locatingTip": "定位：第 6 段最后一句以 The rockfall 开头，与题干主语一致，直接锁定 “The rockfall itself may have been set off by a major earthquake, as some scientists have speculated.”。确定答案技巧：题干用的是“结果加原因”的名词化表达——A likely cause of the rockfall was a significant [13]；原文用的是被动语态的动词结构——may have been set off by a major earthquake（可能被一次大地震引发）。把两者对齐：A likely cause 对应 set off by（可能引发），a significant 对应 a major，因此空格要填被引出的那个施动者，即 earthquake。注意空格前已有不定冠词 a，只填单数名词 earthquake，不能加冠词或写成复数。",
          "analysis": "第 6 段末句：“The rockfall itself may have been set off by a major earthquake, as some scientists have speculated.”（这场岩崩本身可能是被一次大地震引发的，正如一些科学家推测的那样）。题干把原文的被动句 “may have been set off by a major earthquake” 转换成“原因加结果”的名词结构：“A likely cause of the rockfall was a significant [13]”。两处对应关系清楚：likely 对应 may have been（可能性），cause 与 set off by 同义（引发），significant 与 major 同义（重大/强烈），而空格所要填的正是 major 后面那个引发者 earthquake。另需注意，第 8 段开头辛普森再次提到 “the Rhone delta sediments might collapse again, perhaps from an earthquake or even their own weight”，同样把地震列为崩塌的诱因，可与本题互相印证。按 “ONE WORD AND/OR A NUMBER” 要求，只填一个词 earthquake。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
