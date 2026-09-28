(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-1003", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-1003",
  "meta": {
    "examId": "p1-medium-1003",
    "title": "A Bar at the Folies 欢乐酒吧",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–5 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 5
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "An elaboration of how Manet created the painting",
          "translation": "对马奈如何创作这幅画所作的详细说明。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The painting was largely completed in a private studio belonging to the painter, where the barmaid posed with a number of bottles, and this was then integrated with quick sketches the artist made at the Folies itself."
          },
          "synonyms": [
            "“An elaboration of how Manet created the painting”（对创作过程的详细说明）同义替换为原文的 “The painting was largely completed in a private studio belonging to the painter … integrated with quick sketches the artist made at the Folies itself”（C 段首句 “did not attempt to recapture every detail of the bar in his rendition” 先把话题从“画了什么”转向“怎么画的”）",
            "“elaboration”（详尽展开）对应原文用并列的两个分句把创作过程拆成“在画室完成主体”和“与现场速写整合”两步的具体说明",
            "“created” 同义替换为原文的 “completed”（完成）与 “made”（绘制）",
            "“the painting” 与原文的 “The painting” 原词复现，锁定信息主体"
          ],
          "locatingTip": "定位：段落信息匹配题先抓题干的性质词。本题的落点是“how Manet created the painting”（怎么画出来的），属于创作过程类信息，先扫各段首句判断主题：A 段讲作品地位与流传归属，B 段描绘画面内容，C 段首句出现 “Manet did not attempt to recapture every detail of the bar in his rendition”，话题由“画了什么”转向“怎么画的”，就是它。确定答案技巧：匹配题不能只盯着原词，要判断整段的信息点是否等于题干的信息点。C 段第二句把过程讲得很具体——主体在画家私人画室完成（女招待在那里摆姿势、旁边放着酒瓶），随后与在 Folies 现场画的速写整合。这种“把过程展开说明”正是 elaboration，故答案选 C。",
          "analysis": "第 3 段（C）共两句。首句是让步：“Although the Folies (-Bergere) was an actual establishment in late nineteenth-century Paris, and the subject of the painting was a real barmaid who worked there, Manet did not attempt to recapture every detail of the bar in his rendition.”（尽管 Folies 是 19 世纪晚期巴黎真实存在的场所，画中人也确有其人，马奈却并不打算在画里还原酒吧的每一处细节）。转折之后紧接着就是本题的定位句：“The painting was largely completed in a private studio belonging to the painter, where the barmaid posed with a number of bottles, and this was then integrated with quick sketches the artist made at the Folies itself.”（这幅画主要是在画家本人的私人画室里完成的，女招待在那里摆姿势，身边放着若干酒瓶；画室完成的部分随后与艺术家在 Folies 现场所作的速写整合在一起）。这句话把创作过程交代得很清楚：第一步在私人画室完成主体，第二步与现场速写合成。题干的 elaboration 就是“把过程展开详述”，how Manet created the painting 对应 was largely completed in a private studio 与 integrated with quick sketches，信息点完全吻合，因此答案是 C。注意 C 段没有评价这幅画多有名（那是 A 段），也没有描写画面细节（那是 B 段），这正是匹配题要逐段比对主题的原因。",
          "traps": [
            "为什么不是 A：A 段讲的是这幅画的地位（One of the most critically renowned paintings）与流传归属（先归作曲家 Emmanuel Chabrier，现藏伦敦 Courtauld Gallery），完全没有提到马奈是怎样创作的。",
            "为什么不是 B：B 段通篇描写画面内容——女招待的衣着神态、吧台上的酒瓶与橙子、镜中映出的观众厅与杂技演员，回答的是“画里有什么”，不是“画家怎么画”。",
            "为什么不是 D、E、F：D 段分析镜中反射与前景的错位关系，E 段解读马奈借这幅画表达的现代职场观，F 段讲学者的争论与普通观众的理解，三段都在讨论画作的含义与解读，与创作过程无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Features of the painting that scholars are most interested in",
          "translation": "学者们最感兴趣的画面特征。",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Yet while academics are understandably drawn to the compositional enigma of the painting, the layperson is always likely to see the much simpler, more human story beneath."
          },
          "synonyms": [
            "“scholars”（学者）同义替换为原文的 “academics”，并与上一句的 “art historians” 互指同一群体",
            "“Features of the painting that scholars are most interested in” 同义替换为原文的 “the compositional enigma of the painting”（画面在构图上的难解之谜），即学者最关注、争论最久的那项特征",
            "“are most interested in” 同义替换为原文的 “are understandably drawn to”（自然而然被吸引），也与前句的 “have produced reams of books and journal articles disputing …”（写了大量书籍和论文争论不休）呼应"
          ],
          "locatingTip": "定位：题干的核心词是 scholars（学者）与 interested in（感兴趣）。扫读各段关于“研究者、学术”的词群即可，第 6 段（F）密集出现 art historians、books and journal articles、academics，是本段独有的主题词。确定答案技巧：本题要找的是“学者最感兴趣的那项特征”，原文用同位结构把它点明为 the compositional enigma of the painting——compositional 对应题干的 features of the painting（画面本身的特征），enigma（谜团）说明它正是学者长期争论、兴趣所在。原文用 Yet while 把 academics 与 the layperson 对照，这种“学者对普通人”的对照结构本身就是“学者最感兴趣”的标志。",
          "analysis": "第 6 段（F）是本篇末段，先说：“Ever since its debut at the Paris Salon of 1882, art historians have produced reams of books and journal articles disputing the positioning of the barmaid and patron in A Bar at the Folies.”（自 1882 年巴黎沙龙首展以来，艺术史学者写了大量书籍和期刊论文，争论画中女招待与顾客的位置安排）；接着说 “Some have even conducted staged representations of the painting in order to ascertain whether Manet's seemingly distorted point of view might have been possible after all.”（有人甚至做了实景搬演，以弄清马奈那种看似扭曲的视角是否真的可能）。这两句都在写学者的兴趣，而定位句一笔点明兴趣的落点：“Yet while academics are understandably drawn to the compositional enigma of the painting, the layperson is always likely to see the much simpler, more human story beneath.”（学者们自然会被这幅画构图上的谜团吸引，而普通人则更可能看到背后那个简单得多、也更有人情味的故事）。compositional enigma 对应题干的 features of the painting 与 scholars are most interested in，语义严丝合缝，所以答案是 F。",
          "traps": [
            "为什么不是 D：D 段确实分析了镜中反射与前景不一致这一“画面特征”，但那是作者本人做的解读，段内没有出现学者、研究者，也没有“学者最感兴趣”的表述。",
            "为什么不是 E：E 段解释马奈为何要制造这种错位（为了表现两种心境、反映现代职场的疏离），落点在画作含义，与“学者感兴趣的特征”无关。",
            "为什么不是 A：A 段只说这幅画如今是 Courtauld Gallery 的藏品、深受观众喜爱，属于作品地位与流传，不涉及学者的研究兴趣。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "The writer's conception of the idea that Manet wants to communicate",
          "translation": "作者对马奈想要传达的观念的理解。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Manet seems to be conveying his understanding of the modern workplace."
          },
          "synonyms": [
            "“The writer's conception”（作者的解读/理解）同义替换为原文的 “Manet seems to be conveying his understanding”，其中 seems（似乎）表明这是作者的推断，而非画家的自述",
            "“the idea that Manet wants to communicate”（马奈想传达的观念）同义替换为原文的 “conveying his understanding of the modern workplace”（传达他对现代职场的理解）",
            "原文紧接着用 “A place — from his perspective — of alienation, where workers felt torn from their 'true' selves and forced to assume an artificial working identity.” 把这一“观念”具体化，其中 from his perspective（在他看来）再次点明这是对马奈意图的解读"
          ],
          "locatingTip": "定位：题干关键词是 writer's conception（作者的理解）与 Manet wants to communicate（马奈想传达）。这类“解读意图”的段落通常带 seems、Perhaps、his understanding、from his perspective 之类表示推断的措辞。扫读各段，第 5 段（E）开头就是 “Why would Manet engage in such deceit? Perhaps for that very reason: to depict two different states of mind or emotion.”，紧接定位句，推断语气与题干完全对应。确定答案技巧：题干问的是“观念/理念是什么”，原文给出的答案是“他对现代职场的理解（his understanding of the modern workplace）”，并进一步展开为 alienation（疏离感）以及工作身份与真实自我的割裂，因此是 E 段，而不是只描写画面内容的 B 段。",
          "analysis": "第 5 段（E）全段都在解读马奈的创作意图。开头用设问提出问题：“Why would Manet engage in such deceit? Perhaps for that very reason: to depict two different states of mind or emotion.”（马奈为什么要制造这种欺骗性的错位？也许正是为了表现两种不同的心境或情绪）；随后给出作者的判断：“Manet seems to be conveying his understanding of the modern workplace.”（马奈似乎在传达他对现代职场的理解），并继续解释这是 “A place — from his perspective — of alienation, where workers felt torn from their 'true' selves and forced to assume an artificial working identity.”（在他看来，那是一个令人疏离的地方：工人被从“真实”的自我中撕扯出来，被迫换上一种人造的工作身份）。题干的三层信息在本段都有对应：the writer's conception 对应 seems、Perhaps、from his perspective 这些推断性措辞；the idea 对应 to depict two different states of mind or emotion 与 his understanding of the modern workplace；Manet wants to communicate 对应 conveying。因此答案是 E。",
          "traps": [
            "为什么不是 D：D 段确实讲马奈如何看待现实与幻象（Manet toys with our ideas about reality），但它描述的是画面上的手法与现象（前景与倒影矛盾、顾客被移位），没有上升到“马奈想传达什么观念”，而且 D 段是第 4 题的答案。",
            "为什么不是 F：F 段写的是学者对构图的争论与普通观众的理解，重心在“别人怎么看这幅画”，而不是马奈的意图。",
            "为什么不是 B：B 段是纯客观的画面描写（女招待、酒瓶、橙子、镜中观众厅与杂技演员），只写“画里有什么”，不含任何对画家意图的解读。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Examples to show why the bar scene is not the reality",
          "translation": "用以说明酒吧场景并非（真实）现实的种种例子。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "In the foreground, for example, the barmaid is standing straight, with a look of lonely detachment on her face. However, in the reflection she seems to be leaning forward and talking to a customer."
          },
          "synonyms": [
            "“Examples”（例子）同义替换为原文标志性的举例信号词 “for example”",
            "“the bar scene is not the reality” 同义替换为原文的 “the relationship between what's happening in the reflection and what's happening in the foreground” 与段末总结的 “This creates a dreamlike separation between reality and illusion.”（现实与幻象之间梦一般的分离）",
            "“why … is not the reality” 对应原文用 “In the foreground … However, in the reflection …” 构成的对比论证方式，用两个具体场景证明镜中所见并非真实"
          ],
          "locatingTip": "定位：题干关键词是 Examples（例子）与 not the reality（并非现实）。全文出现 “for example” 的地方只有第 4 段（D）的 “In the foreground, for example …”，而 reality 与 illusion 这类词也集中在 D 段。确定答案技巧：段内用两处具体的对比事例支撑“场景不真实”的判断——其一，女招待在前景中站得笔直、神情孤寂，在镜中却俯身与顾客交谈；其二，顾客本应被女招待挡住而不可见，却被马奈挪到了侧面。段末由此总结出 reality 与 illusion 的分离，与题干“bar scene is not the reality”同义，故答案选 D。",
          "analysis": "第 4 段（D）集中讨论镜中反射与前景之间的矛盾，并用具体例子加以说明。段首先立论：“the painting is interesting because of the relationship between what's happening in the reflection and what's happening in the foreground. Manet toys with our ideas about reality by using the mirror.”（这幅画之所以有趣，在于镜中倒影与前景所发生之事的关系；马奈借助镜子拨弄我们对现实的认知）。随后就是本题的定位句，也是第一个例子：“In the foreground, for example, the barmaid is standing straight, with a look of lonely detachment on her face. However, in the reflection she seems to be leaning forward and talking to a customer.”（比如在前景中，女招待站得笔直，脸上带着孤独疏离的神情；而在倒影里，她却似乎正俯身与顾客交谈）。紧接着是第二个例子：“In the mirror, he should not be visible because the barmaid is standing in front of him, yet Manet managed to re-position him to the side.”（在镜中，那位男顾客本不该被看见，因为女招待正站在他前面，但马奈还是把他挪到了侧面）。段末总结为 “This creates a dreamlike separation between reality and illusion.”。题干的 examples 与原文的 for example 直接呼应，is not the reality 与 a dreamlike separation between reality and illusion 同义，因此答案是 D。",
          "traps": [
            "为什么不是 B：B 段只是如实描写画面（女招待的衣着、吧台上的物品、镜中的观众厅与杂技演员），没有把镜中与前景作对照，也没有提出“哪一个不是现实”的判断。",
            "为什么不是 E：E 段解释马奈为什么要这样做（表现两种心境、反映现代职场中的疏离），属于对动机的解读，并不是列举“场景不真实”的例子。",
            "为什么不是 F：F 段讲的是学者与普通观众对这幅画的不同关注点，不涉及现实与幻象的例证。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "An explanation about the popularity of the painting",
          "translation": "关于这幅画为何受欢迎的说明。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Originally belonging to the composer Emmanuel Chabrier, it is now in the possession of The Courtauld Gallery in London, where it has also become a favourite with the crowds."
          },
          "synonyms": [
            "“popularity”（受欢迎）同义替换为原文的 “become a favourite with the crowds”（成为观众的宠儿）",
            "“An explanation about …”（关于……的说明）对应原文用 where 引导的定语从句，交代它如今藏于面向公众的伦敦考陶尔德美术馆这一背景",
            "“the painting” 与原文的代词 “it” 互指，回指上句出现的 “A Bar at the Folies”"
          ],
          "locatingTip": "定位：题干关键词是 popularity（受欢迎程度）。扫读各段，只有第 1 段（A）出现与“受欢迎”直接相关的表述 “become a favourite with the crowds”，其余各段分别讲画面内容、创作过程、构图错位、画作含义与学术争论。确定答案技巧：favourite with the crowds 是英式表达，意思就是“深受大众喜爱”，与 popularity 同义；同时本句用 where 从句附带说明了原因性背景——这幅画如今陈列在面向公众的伦敦 Courtauld Gallery，因而能被观众看到并追捧。定位到 favourite with the crowds 即可锁定 A。",
          "analysis": "第 1 段（A）共两句。首句点出作品地位：“One of the most critically renowned paintings of the 19th-Century modernist movement is the French painter Edouard Manet's masterwork, A Bar at the Folies.”（19 世纪现代主义运动中最受评论界推崇的画作之一，是法国画家爱德华·马奈的代表作《欢乐酒吧》）。第二句就是本题的定位句：“Originally belonging to the composer Emmanuel Chabrier, it is now in the possession of The Courtauld Gallery in London, where it has also become a favourite with the crowds.”（这幅画最初属于作曲家埃马纽埃尔·夏布里埃，如今为伦敦考陶尔德美术馆所有，在那里它也成为观众的宠儿）。句末 become a favourite with the crowds 直接说明它在公众中的受欢迎程度，与题干的 popularity 对应；前面的 where 从句同时交代了它能被大众看到的机会（成为美术馆的重要藏品），构成“为什么受欢迎”的背景说明，因此答案是 A。",
          "traps": [
            "为什么不是 F：F 段虽然也提到观众，但原文说的是 “the layperson is always likely to see the much simpler, more human story beneath”，即普通人更倾向于看到画中的人情故事，讲的是“观众如何理解”，不是“这幅画有多受欢迎”。",
            "为什么不是 B、C：B 段描绘画面内容，C 段讲述创作过程，两段都没有评价这幅画的受欢迎程度。",
            "为什么不是 D、E：D 段分析镜中与现实的关系，E 段解读马奈的创作意图，与“受欢迎”无关。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 6–10 简答题（NO MORE THAN THREE WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 6,
        "end": 10
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Name the first owner of A Bar at the Folies?",
          "translation": "说出《欢乐酒吧》（A Bar at the Folies）的第一位拥有者是谁？",
          "answer": "Emmanuel Chabrier",
          "wordClass": "专有名词（人名，姓与名的首字母均大写；回答 Name the first owner…？一题时填入的即原文中与 the composer 同位的那个人名。作答照抄原文写法，不加冠词，也不抄 the composer）",
          "locating": {
            "paragraph": "1",
            "quote": "Originally belonging to the composer Emmanuel Chabrier, it is now in the possession of The Courtauld Gallery in London"
          },
          "synonyms": [
            "“the first owner” 同义替换为原文的 “Originally belonging to”（最初属于），其中 Originally（最初）对应 first，belonging to（归属）对应 owner",
            "“Name …” 要求从原文中提取人名，原文以同位语的形式给出 “the composer Emmanuel Chabrier”",
            "“A Bar at the Folies” 与原文作品名原词复现，帮助锁定定位句"
          ],
          "locatingTip": "定位：题干含专有名词 A Bar at the Folies 与 first owner，全文只有第 1 段（A）讲这幅画的流传与归属，扫读时盯住 Originally、belonging to 之类的词即可。确定答案技巧：原文 “Originally belonging to the composer Emmanuel Chabrier”（最初属于作曲家埃马纽埃尔·夏布里埃）中 Originally 对应题干的 first，belonging to 对应 owner，直接在 to 后面取人名。填写时只写人名 Emmanuel Chabrier，不要连带前面的 the composer，也不要把同句中后来的 The Courtauld Gallery 写进去（那是现在的收藏机构，属于后来的所有者）。",
          "analysis": "本题的答案来自第 1 段第二句：“Originally belonging to the composer Emmanuel Chabrier, it is now in the possession of The Courtauld Gallery in London, where it has also become a favourite with the crowds.”（这幅画最初属于作曲家埃马纽埃尔·夏布里埃，如今为伦敦考陶尔德美术馆所收藏，在那里也成为观众的宠儿）。句子用 Originally belonging to 交代“最初的拥有者”，用 is now in the possession of 交代“如今的收藏机构”，两者构成“最初”与“现在”的时间对照，题干所问的 first owner 正对应前者，因此答案是 Emmanuel Chabrier。作答要点：①人名共两个词，符合 NO MORE THAN THREE WORDS；②保留原文拼写与首字母大写（Emmanuel Chabrier），不要写中文音译；③不要把 the composer 一起抄进答案，因为空格要的是“拥有者”，身份称谓属于冗余限定。",
          "traps": []
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "What dress is the barmaid wearing?",
          "translation": "女招待穿着什么样的衣服？",
          "answer": "A black bodice",
          "wordClass": "名词短语（可数名词单数：不定冠词 a 加形容词 black 加名词 bodice 构成的偏正结构，回答 What dress…？时作题干 wearing 的宾语，指女招待所穿的上衣；照抄原文形式，冠词不可省略）",
          "locating": {
            "paragraph": "2",
            "quote": "fitted out in a black bodice that has a frilly white neckline"
          },
          "synonyms": [
            "“What dress is the barmaid wearing” 同义替换为原文的 “fitted out in …”（穿着……）以及 “bodice”（女式紧身上衣）",
            "“What dress” 询问衣着的种类与颜色，原文以 “a black bodice” 直接给出答案，黑色来自定语形容词 black",
            "“that has a frilly white neckline” 是原文对这件衣服的附加描写（带白色褶边领口），并非空格所需的核心信息，属于干扰细节"
          ],
          "locatingTip": "定位：题干关键词是 barmaid（女招待），全文只有第 2 段（B）描写女招待的衣着。确定答案技巧：在 B 段找到 “A barmaid stands alone behind her bar, fitted out in a black bodice that has a frilly white neckline”，fitted out in 就是“穿着”，其后紧跟的 a black bodice 即所问的衣着。答案必须带冠词 A：原文以名词短语出现，空格问的是“什么样的衣服”，把整个偏正短语写进去才完整。注意区分同句里的 frilly white neckline（领口）和后面的 a spray of flowers（胸前那束花），它们都不是“衣服”本身。",
          "analysis": "第 2 段（B）第二句：“A barmaid stands alone behind her bar, fitted out in a black bodice that has a frilly white neckline, and with a spray of flowers sitting across her décolletage.”（一位女招待独自站在吧台后，身穿一件带白色褶边领口的黑色紧身上衣，胸前别着一束花）。fitted out in 意为“穿着……”，引出衣着本体 a black bodice（bodice 指女式紧身上衣）；其后的 that has a frilly white neckline 是定语从句，只补充领口样式；再往后的 a spray of flowers 是胸花，属于配饰。题干 “What dress is the barmaid wearing?” 问的是衣着的种类与特征，答案即 a black bodice。作答要点：①保留冠词 a，按答案表写成 A black bodice；②共三个词，符合 NO MORE THAN THREE WORDS；③不要写 a frilly white neckline（那是领口）或 a spray of flowers（那是花）。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "What kind of room is seen at the back of the painting?",
          "translation": "在画面的后部可以看到什么样的厅室？",
          "answer": "An auditorium",
          "wordClass": "名词短语（可数名词单数：不定冠词 an 加名词 auditorium；回答 What kind of room…？时作题干被动结构 is seen 的主语，指画面后部镜中所见的厅室；照抄原文形式，冠词不可省略）",
          "locating": {
            "paragraph": "2",
            "quote": "Through this mirror we see an auditorium, bustling with blurred figures and faces"
          },
          "synonyms": [
            "“What kind of room”（什么样的厅室）同义替换为原文的具体场所名词 “an auditorium”（观众厅）",
            "“is seen at the back of the painting” 同义替换为原文的 “Through this mirror we see …” 与 “in the reflection of a mirror behind the barmaid”，即画面后部其实是女招待身后那面镜子的倒影",
            "“see” 与原文的 “we see” 原词复现，明确了提取答案的动词位置"
          ],
          "locatingTip": "定位：题干关键词是 room（厅室）与 at the back of the painting（画面后部）。第 2 段（B）先交代 “much of the activity in the room takes place in the reflection of a mirror behind the barmaid”（房间里的大部分活动都出现在女招待身后那面镜子的倒影中），下一句就是答案句。确定答案技巧：原文用 Through this mirror we see an auditorium 直接给出所见的厅室种类；题干的“画面后部”对应的正是“女招待身后的镜子”，不要误以为画中另有一间单独的房间。填写时保留冠词，写成 An auditorium，仍在三词以内。",
          "analysis": "第 2 段（B）在描完吧台与女招待之后写道：“Also on the bar are some bottles of liquor and a bowl of oranges, but much of the activity in the room takes place in the reflection of a mirror behind the barmaid. Through this mirror we see an auditorium, bustling with blurred figures and faces: men in top hats, a woman examining the scene below her through binoculars.”（吧台上还放着几瓶酒和一碗橙子，但房间里的大部分活动都出现在女招待身后那面镜子的倒影中。透过这面镜子，我们看到一个观众厅，里面满是模糊的身影与面孔：戴高帽的男士、一位正用双筒望远镜端详下方场景的女士）。题干问“画面后部可以看到什么样的厅室”，原文对应的正是镜中映出的 an auditorium（观众厅），其后的 bustling with blurred figures and faces 是对厅内景象的补充描写。答案 a/an auditorium 为可数名词单数并带冠词，按答案表写作 An auditorium。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Who is entertaining the audience?",
          "translation": "谁正在为观众表演？",
          "answer": "A trapeze artist",
          "wordClass": "名词短语（可数名词单数：不定冠词 a 加名词 trapeze 再加名词 artist 构成的偏正结构，表示职业身份；照抄原文形式，冠词不可省略）",
          "locating": {
            "paragraph": "2",
            "quote": "even the feet of a trapeze artist demonstrating acrobatic feats above his adoring crowd"
          },
          "synonyms": [
            "“entertaining the audience”（为观众表演）同义替换为原文的 “demonstrating acrobatic feats above his adoring crowd”（在他那些倾慕的观众上方表演杂技）",
            "“the audience”（观众）同义替换为原文的 “his adoring crowd”（他那些倾慕的观众）",
            "“Who …” 问的是表演者的身份，原文以 “a trapeze artist” 作为中心名词给出，feet 只是镜中可见的局部"
          ],
          "locatingTip": "定位：题干关键词是 entertaining（表演）与 audience（观众）。第 2 段（B）末尾列举镜中可见的种种身影，其中出现 “above his adoring crowd”（在他倾慕的观众上方）与 “demonstrating acrobatic feats”（表演杂技），即本句。确定答案技巧：原句结构是 “the feet of a trapeze artist demonstrating acrobatic feats above his adoring crowd”，动作 demonstrate acrobatic feats 对应题干的 entertaining the audience，adoring crowd 对应 audience，动作的发出者（of 后面的中心名词）就是 a trapeze artist。注意不要填 the feet——镜中只露出双脚，但“表演者”是那整个人；也不要填 crowd，那是观众而非表演者。答案写成 A trapeze artist，共三个词，符合词数限制。",
          "analysis": "第 2 段（B）用冒号列举镜中 auditorium 里的各种身影：“men in top hats, a woman examining the scene below her through binoculars. Another in long gloves, even the feet of a trapeze artist demonstrating acrobatic feats above his adoring crowd.”（戴高帽的男士、一位用双筒望远镜端详下方场景的女士、另一位戴长手套的人，甚至还有一位空中飞人演员在他那些倾慕的观众上方表演杂技时露出的双脚）。定位句中的 demonstrating acrobatic feats（表演杂技）正是题干的 entertaining（表演、娱乐），above his adoring crowd（在他倾慕的观众上方）对应 the audience，因此表演者的身份是 a trapeze artist（空中飞人演员）。作答要点：①原文只写“双足”，但题干问的是“谁在表演”，须回到动作的发出者这一职业身份；②答案含冠词 a，按答案表写成 A trapeze artist；③不要误填 a woman（她只是在用望远镜观看）或 men in top hats（他们只是观众中的身影）。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "In which place did most of the work on the painting occur?",
          "translation": "这幅画的大部分创作工作是在什么地方进行的？",
          "answer": "Manet's private studio",
          "wordClass": "名词短语（所有格 Manet's 加形容词 private 加名词 studio，表示地点；位于介词 in 之后作地点状语）",
          "locating": {
            "paragraph": "3",
            "quote": "The painting was largely completed in a private studio belonging to the painter"
          },
          "synonyms": [
            "“most of the work on the painting” 同义替换为原文的 “The painting was largely completed”，largely（大部分地）对应 most of the work",
            "“did … occur”（进行）同义替换为原文的 “was … completed”（被完成），题干改成疑问句后用 occur 替换具体动作动词",
            "“a private studio belonging to the painter” 同义替换为答案表中的 “Manet's private studio”，belonging to the painter 即“马奈本人的”（Manet's）"
          ],
          "locatingTip": "定位：题干关键词是 most of the work（大部分工作）与 place（地点）。第 3 段（C）是全文唯一讲创作过程的段落，其中 “The painting was largely completed in a private studio belonging to the painter” 与 “most of the work … occur” 完全对应。确定答案技巧：largely（大部分地）对应 most of the work，was completed 对应 the work occur，介词 in 后面就是所问的地点。原文用 “a private studio belonging to the painter”（属于画家的私人画室），答案表把它表述为 Manet's private studio，两者同指，作答照抄答案表即可。注意不要填 the Folies——那里只是画速写的地方，原文明确说主体是在画室完成的；也不要写 the painter，那是人而不是地点。",
          "analysis": "第 3 段（C）第二句：“The painting was largely completed in a private studio belonging to the painter, where the barmaid posed with a number of bottles, and this was then integrated with quick sketches the artist made at the Folies itself.”（这幅画主要是在画家本人的私人画室里完成的，女招待在那里摆着姿势、身旁放着若干酒瓶；随后画室完成的部分与艺术家在 Folies 现场所作的速写整合在一起）。题干问“大部分创作工作在何处进行”，largely（大部分地）与 most of the work 对应，was completed 与 the work occur 对应，介词 in 之后的地点 a private studio belonging to the painter 就是答案，答案表表述为 Manet's private studio，指同一地点，照抄作答即可。改写的关键在于理解 belonging to the painter 等于 Manet's：原文先出现画家全名 Edouard Manet，后文用 the painter、the artist 代指，是同一人，因此填 Manet's private studio 与原文并不矛盾。另需注意段末的 at the Folies itself 只涉及速写（quick sketches），不是完成主体画作的地方，不能误填。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 句子结尾匹配（Complete each sentence with the correct ending, A-F）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Manet misrepresents the likeness of images in the mirror because he",
          "translation": "马奈之所以错误地呈现镜中影像的样子，是因为他……",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Manet toys with our ideas about reality by using the mirror."
          },
          "synonyms": [
            "“misrepresents the likeness of images in the mirror”（错误呈现镜中影像的样子）同义替换为原文的 “the customer's position is also different. In the mirror, he should not be visible because the barmaid is standing in front of him, yet Manet managed to re-position him to the side.”，即镜中影像与真实位置不符",
            "“because he” 引出手段与目的关系，对应原文的 “by using the mirror”（借助镜子），也与第 5 段 “Why would Manet engage in such deceit? Perhaps for that very reason” 的设问呼应",
            "答案 E “wanted to control and manipulate our sense of reality” 中的 reality 与原文 “our ideas about reality” 原词复现；control and manipulate 同义替换为原文的 “toys with”（拨弄、玩弄）"
          ],
          "locatingTip": "定位：题干的主语是 Manet，关键词是 mirror（镜子）与 misrepresents（错误呈现）。全文写“镜中影像与真实不符”的内容集中在第 4 段（D），段内还有 reality 一词，定位句 “Manet toys with our ideas about reality by using the mirror.” 一句就把主体（Manet）、手段（by using the mirror）和目的（toys with our ideas about reality）都交代清楚。确定答案技巧：本题属于“原因/目的”搭配题，要把 because he 之后的内容接到 E 项。原文 toys with our ideas about reality 意为“拨弄我们对现实的认知”，与 E 项 wanted to control and manipulate our sense of reality（想要控制和操纵我们对现实的感知）是同一意思的不同说法：toys with 对应 control and manipulate，our ideas about reality 对应 our sense of reality。判断时还可比对主语：B、D 两项的主语是工人（they），A 项的主语是学者，这三项都不能接在 Manet 之后。",
          "analysis": "第 4 段（D）先提出论点：“the painting is interesting because of the relationship between what's happening in the reflection and what's happening in the foreground”，紧接着就是定位句 “Manet toys with our ideas about reality by using the mirror.”（马奈借助镜子拨弄我们对现实的认知）。随后作者用两个例子说明这种“拨弄”：前景里女招待站得笔直、神情孤寂，倒影里却俯身与顾客交谈；那位顾客在镜中本不该被看见（女招待挡在他前面），却被马奈挪到了侧面。段末总结 “This creates a dreamlike separation between reality and illusion.”。题干说马奈“错误地呈现镜中影像的样子”，原因就在于 toys with our ideas about reality——他不是画错了，而是有意利用镜子扰乱我们对现实的判断，这正对应 E 项 wanted to control and manipulate our sense of reality，其中 toys with 与 control and manipulate 同义，reality 一词在两处直接复现。",
          "traps": [
            "为什么不是 A：A 项 wanted to find out if the painting's viewpoint was realistic 的主语是学者，对应第 6 段 “Some have even conducted staged representations of the painting in order to ascertain whether Manet's seemingly distorted point of view might have been possible after all.”，那是第 13 题的答案，不能接在 Manet 后面。",
            "为什么不是 B：B 项 felt they had to work harder at boring and difficult jobs 说的是工人被迫从事更辛苦、更枯燥的工作，而第 5 段的原文是 “workers felt torn from their 'true' selves and forced to assume an artificial working identity”（被迫换上一种人造的工作身份），落点在“身份”而非“工作强度”，且该信息对应第 12 题。",
            "为什么不是 C：C 项 wanted to understand the lives of normal people at the time 在原文中没有任何依据——第 6 段说普通人（the layperson）自己会看到画中的人情故事，那是观众的视角，不是马奈的动机。",
            "为什么不是 D、F：D 项 felt like they had to become someone else 的主语同样是工人（they），对应第 12 题；F 项 wanted to concentrate on the detail in the painting 与原文 “Manet did not attempt to recapture every detail of the bar in his rendition”（马奈并未试图还原每一处细节）正好相反。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Manet felt modern workers were detached from the work because they",
          "translation": "马奈认为现代工人与工作相疏离，是因为他们……",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "where workers felt torn from their 'true' selves and forced to assume an artificial working identity"
          },
          "synonyms": [
            "“were detached from the work”（与工作、与自身疏离）同义替换为原文的 “alienation” 与 “felt torn from their 'true' selves”（与“真实”的自我割裂）",
            "“because they” 引出原因，对应原文的 “forced to assume”（被迫换上），说明工人之所以疏离的缘由",
            "答案 D “felt like they had to become someone else” 同义替换为原文的 “forced to assume an artificial working identity”（被迫接受一种人造的工作身份）：become someone else 即换上另一种身份，had to 即 forced"
          ],
          "locatingTip": "定位：题干关键词是 modern workers（现代工人）与 detached（疏离）。第 5 段（E）集中讲马奈对现代职场的理解，段内同时出现 “his understanding of the modern workplace” 与 “workers felt torn from their 'true' selves”。确定答案技巧：原文先用 alienation（疏离）概括工人与工作的关系，再用定语从句解释原因：“where workers felt torn from their 'true' selves and forced to assume an artificial working identity”。题干的 detached from the work 对应 torn from their 'true' selves（与真实自我割裂），because 之后要填的就是 forced to assume an artificial working identity 的意思，即 D 项 felt like they had to become someone else。注意 B 项虽然也讲工人，但说的是工作更辛苦、更枯燥，与原文“身份被替换”的落点不同。",
          "analysis": "第 5 段（E）是解读马奈意图的段落，与本题相关的内容是：“A place — from his perspective — of alienation, where workers felt torn from their 'true' selves and forced to assume an artificial working identity.”（在他看来，那是一个令人疏离的地方：工人被从“真实”的自我中撕扯出来，被迫换上一种人造的工作身份）。alienation 即题干所说的“与工作疏离”，定语从句 where workers felt torn from their 'true' selves and forced to assume an artificial working identity 则解释了疏离的原因：工人的真实自我与工作要求发生割裂，只能顶着另一个人造身份去上班。代入选项 D “felt like they had to become someone else”（觉得自己不得不变成另一个人）：felt like they had to 对应 forced to，become someone else 对应 assume an artificial working identity，语义一一吻合。段末 “What we see in the mirrored reflection is the barmaid's working self … The front-on view, however, bears witness to how the barmaid truly feels at work: hopeless, adrift, and alone.”（镜中看到的是女招待的工作自我，正面看到的则是她在工作中的真实感受：无望、漂泊、孤独）也印证了“两种身份”的对立，因此选 D。",
          "traps": [
            "为什么不是 B：B 项 felt they had to work harder at boring and difficult jobs 说的是工作更辛苦、更枯燥，而原文的落点是 “forced to assume an artificial working identity”（被迫换上人造的工作身份），讲的是身份问题而不是工作强度或趣味，属于偷换原因。",
            "为什么不是 E：E 项 wanted to control and manipulate our sense of reality 的主语是马奈（he），不能接在 they 之后，而且它是第 11 题的答案。",
            "为什么不是 A、C、F：A 项 wanted to find out if the painting's viewpoint was realistic 是学者做搬演实验的动机（第 13 题）；C 项 wanted to understand the lives of normal people at the time 在原文没有依据；F 项 wanted to concentrate on the detail in the painting 与原文“马奈并不在意细节”相悖。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Academics have re-built the painting in real life because they",
          "translation": "学者们在现实生活中重新搭建了这幅画的场景，是因为他们……",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Some have even conducted staged representations of the painting in order to ascertain whether Manet's seemingly distorted point of view might have been possible after all."
          },
          "synonyms": [
            "“Academics”（学者）同义替换为原文的 “art historians”，也对应承接上句的 “Some”（指代前一句提到的艺术史学者）",
            "“have re-built the painting in real life”（在现实中重建这幅画）同义替换为原文的 “conducted staged representations of the painting”（进行了实景搬演）",
            "“because they” 引出目的，对应原文的 “in order to ascertain”（为了弄清）；答案 A “wanted to find out if the painting's viewpoint was realistic” 对应原文的 “whether Manet's seemingly distorted point of view might have been possible after all”，find out 即 ascertain，realistic 即 possible after all，viewpoint 与 point of view 原词对应"
          ],
          "locatingTip": "定位：题干关键词是 Academics（学者）与 re-built the painting in real life（在现实中重建）。第 6 段（F）同时出现 art historians、academics 以及 “conducted staged representations of the painting”，关键词齐备，其中 staged representations 即“实景搬演、还原演出”，与 re-built 对应。确定答案技巧：原文用 in order to ascertain（为了查明）标出目的，后面从句 “whether Manet's seemingly distorted point of view might have been possible after all”（马奈那种看似扭曲的视角是否真的可能）就是学者做这件事的原因，与 A 项 wanted to find out if the painting's viewpoint was realistic 逐项对应：find out 即 ascertain，the painting's viewpoint 即 point of view，realistic 即 possible after all。故选 A。",
          "analysis": "第 6 段（F）第二句：“Some have even conducted staged representations of the painting in order to ascertain whether Manet's seemingly distorted point of view might have been possible after all.”（有些人甚至做了这幅画的实景搬演，以弄清马奈那种看似扭曲的视角是否真的成立）。句中 Some 承接上一句的 art historians（艺术史学者），所以主语就是题干所说的 Academics；conducted staged representations of the painting 指按照画中的布局在现实中重新摆演出场景，与题干的 have re-built the painting in real life 对应；in order to ascertain 明确标出目的，从句 whether Manet's seemingly distorted point of view might have been possible after all 说的正是“想弄清这幅画的视角是否真的可行”。逐项对应 A 项 wanted to find out if the painting's viewpoint was realistic：wanted to find out 对应 in order to ascertain，the painting's viewpoint 对应 Manet's seemingly distorted point of view，was realistic 对应 might have been possible after all，语义完全一致，因此选 A。",
          "traps": [
            "为什么不是 C：C 项 wanted to understand the lives of normal people at the time 与原文不符——第 6 段提到的普通人（layperson）是“看画的人”，而学者研究的对象是构图（the compositional enigma of the painting），并非当时普通人的生活。",
            "为什么不是 E：E 项 wanted to control and manipulate our sense of reality 是马奈的动机，对应第 4 段 “Manet toys with our ideas about reality”，主语不可能是学者，且它是第 11 题的答案。",
            "为什么不是 F：F 项 wanted to concentrate on the detail in the painting 与原文相反，第 3 段明确说 “Manet did not attempt to recapture every detail of the bar in his rendition”，而且学者做搬演是为了验证视角是否成立，不是为了研究细节。",
            "为什么不是 B、D：B 项 felt they had to work harder at boring and difficult jobs 与 D 项 felt like they had to become someone else 的主语都是工人（they），描述的是现代工人的处境，与学者的实验无关。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
