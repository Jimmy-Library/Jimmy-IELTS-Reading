(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-110", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-110",
  "meta": {
    "examId": "p1-high-110",
    "title": "The Pearls 珍珠",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–4 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 4
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "difficulties in the cultivation process",
          "translation": "培育（养殖）过程中的种种困难",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Often, the irritant may be rejected, the pearl will be terrifically misshapen, or the oyster may simply die from disease or countless other complications."
          },
          "synonyms": [
            "“difficulties in the cultivation process” 对应原文第 3 段的失败清单：“the irritant may be rejected, the pearl will be terrifically misshapen, or the oyster may simply die from disease or countless other complications”",
            "“cultivation process” 同义替换为原文的 “the process usually takes several years”，第 3 段首句已点明本段在讲获取珍珠的整个流程",
            "“difficulties” 还对应同一段的两个比例数字：“only 50% of the oysters will have survived” 与 “only approximately 5% are of a quality substantial enough for top jewelry makers”，成活率与合格率之低正是“困难”的具体体现"
          ],
          "locatingTip": "定位：本题没有专有名词可用，需抓抽象名词 cultivation（养殖）与 difficulties（困难）构成的语义场。全文只有第 3 段（C 段）通篇在讲“养殖过程为什么难”：先给流程周期（蚌育成要 3 年、刺激物就位后再要 3 年），再给失败清单（刺激物被排斥、珍珠严重畸形、牡蛎病死），最后给比例（存活 50%、达标 5%）。确定答案技巧：段落匹配题找的是“信息集中落点”。第 3 段首句 “Regardless of the method used to acquire a pearl, the process usually takes several years.” 用 process 一词开场，与本段后文的风险描述共同构成围绕“过程有多难”的完整论述，语义与题干完全重合，故选 C 段。",
          "analysis": "第 3 段（C 段）把“养殖过程有多难”分层写透。首句先交代时间成本：“Regardless of the method used to acquire a pearl, the process usually takes several years.”（不论用哪种方式获得珍珠，这个过程通常都要好几年）。接着说明周期之长：“Mussels must reach a mature age, which can take up to 3 years, and then be implanted or naturally receive an irritant. Once the irritant is in place, it can take up to another 3 years for the pearl to reach its full size.”（蚌要长到成熟最多需要 3 年，之后才会被植入或自然接触到刺激物；刺激物就位后，珍珠还要再花最多 3 年才能长到足尺）。随后连用 Often 引出三类失败：“Often, the irritant may be rejected, the pearl will be terrifically misshapen, or the oyster may simply die from disease or countless other complications.”（刺激物常被排斥，珍珠会严重畸形，或牡蛎干脆病死，或因数不清的其他并发症死亡）。最后用两个百分比收尾：“By the end of a 5 to 10 year cycle, only 50% of the oysters will have survived. And of the pearls produced, only approximately 5% are of a quality substantial enough for top jewelry makers.”（5 到 10 年一轮下来只有 50% 的牡蛎存活；产出的珍珠里也只有约 5% 的品相足以供应顶级珠宝商）。周期漫长、失败频发、存活率与合格率极低，全都是题干 difficulties in the cultivation process 的依据，故答案选 C 段（第 3 段）。",
          "traps": [
            "为什么不是 B 段（第 2 段）：B 段确实讲了珍珠的形成过程（天然珍珠由异物包裹层层沉积而成，养殖珍珠经历相同过程，仿制珍珠另当别论），但落点是“三类珍珠如何形成、彼此有何不同”，通篇没有一处提到过程中的失败、危险或低成活率，因此不承担 difficulties 这一信息。",
            "为什么不是 D 段（第 4 段）：D 段讨论的是“如何判断珍珠的价值”，列出光泽与大小两大标准，并解释大小与牡蛎年龄、养殖地点有关，属于品质与估价问题，与养殖难度无关。",
            "为什么不是 A 段（第 1 段）：A 段讲珍珠在古代的地位与用途（宝石女王、价值连城、埃及贵族陪葬、东方与波斯帝国磨粉入药），是历史与习俗信息，完全没有涉及培育过程。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "causes affecting the size of natural pearls",
          "translation": "影响（天然）珍珠大小的原因",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Size, on the other hand, has to do with the age of the oyster that created the pearl (the more mature oysters produce larger pearls) and the location in which the pearl was cultured."
          },
          "synonyms": [
            "“causes affecting the size” 同义替换为原文的 “has to do with the age of the oyster … and the location in which the pearl was cultured”，即“与……有关”改写为“影响……的因素”",
            "“the size” 与原文原词复现（“Size, on the other hand” 以及 “produce larger pearls”）",
            "“causes” 的第一个具体表现是原文括号内的 “the more mature oysters produce larger pearls”（牡蛎越成熟，产出的珍珠越大）；第二个表现是 “the location in which the pearl was cultured”，同一段随后还用 because 补充了环境层面的原因：“probably because the water along the coastline is supplied with rich nutrients from the ocean floor”"
          ],
          "locatingTip": "定位：题干的核心名词是 size 与 causes。全文专门讨论“珍珠大小”的只有第 4 段（D 段），该段第 2 句先把两大标准摆出来：“Luster and size are generally considered the two main factors to look for.”，随后用一整句专门讲大小的影响因素，扫读到 “Size, on the other hand” 即可锁定。确定答案技巧：段落匹配题看到 causes、reasons、factors 这类表因果的词，要在原文中找 has to do with、because、due to 之类表因果的句式。D 段用 has to do with 引出两个成因（牡蛎年龄、养殖地点），再用 because 补充澳大利亚南海海域营养丰富这一环境原因，成因信息全部集中在本段，故选 D 段。",
          "analysis": "第 4 段（D 段）开篇先提问：“How can untrained eyes determine a pearl's worth?”（未经训练的眼睛如何判断珍珠的价值？）随后给出两大标准：“Luster and size are generally considered the two main factors to look for.”（光泽和大小通常被认为是最值得关注的两个主要因素）。讲完光泽（“Luster, for instance, depends on the fineness and evenness of the layers. The deeper the glow, the more perfect the shape and surface, the more valuable they are.”）之后，作者用 “Size, on the other hand, has to do with the age of the oyster that created the pearl (the more mature oysters produce larger pearls) and the location in which the pearl was cultured.”（而大小则与产出珍珠的牡蛎的年龄——越成熟的牡蛎产出越大的珍珠——以及养殖珍珠的地点有关）专门交代大小的影响因素。本段最后两句又用澳大利亚海域为例说明“地点为什么起作用”：“The South Sea waters of Australia tend to produce the larger pearls; probably because the water along the coastline is supplied with rich nutrients from the ocean floor. Also, the type of mussel being common to the area seems to possess a predilection for producing comparatively large pearls.”（澳大利亚南海海域往往产出较大的珍珠，可能是因为沿岸海水富含来自海床的养分；此外，该地区常见的贻贝品种似乎特别偏爱产出较大的珍珠）。题干 causes affecting the size of natural pearls 要的正是这一串对“大小由什么决定”的因果解释（牡蛎年龄、养殖地点、海域养分、蚌的品种），信息集中在第 4 段，故答案 D 段（第 4 段）。",
          "traps": [
            "为什么不是 G 段（第 7 段）：G 段虽然也出现 Australia 与 South Sea，但落点是颜色与当代产地分布（黑珍珠最稀有、日本控制约 80% 的市场），谈的是颜色和价值稀罕程度，而不是大小由什么决定。",
            "为什么不是 B 段（第 2 段）：B 段解释三类珍珠的形成机理差异，只在讲养殖珍珠的珠核 “is much larger than in a natural pearl” 时顺带提到大小，视角是“核心大小之别”而非“决定珍珠大小的原因”。",
            "为什么不是 A 段（第 1 段）：A 段讲古代珍珠的地位与用途，没有出现任何关于尺寸成因的信息。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "ancient customs around pearls",
          "translation": "与珍珠有关的古代习俗",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Many Egyptian leaders treasured pearls so much that they were often buried along with their cherished pearl collection."
          },
          "synonyms": [
            "“ancient customs around pearls” 中的 custom 对应原文的陪葬做法：“were often buried along with their cherished pearl collection”（把珍爱的珍珠藏品随葬）",
            "同段紧接着还给出第二种“习俗”：“In the Orient and Persian Empire, pearls were ground into costly powders to cure anything from heart disease to epilepsy, with possible aphrodisiac uses as well.”（把珍珠磨成昂贵的粉末用来治病乃至催情）",
            "“ancient” 对应原文的 “The ancient Egyptians” 以及 “Throughout much of recorded history”"
          ],
          "locatingTip": "定位：题干的关键词是 ancient 与 customs，都没有专有名词可抓。全文交代“古代”的只有第 1 段（A 段），该段密集出现 ancient Egyptians、recorded history、the Orient and Persian Empire 等时间与地域标志。确定答案技巧：customs 这类抽象词在原文里往往以具体做法出现。第 1 段给了两个具体做法：一是埃及贵族死后把珍珠藏品随葬，二是把珍珠研磨成粉治疗从心脏病到癫痫的各种疾病（还可能有催情用途）。凡是“古人加具体做法”的段落就是答案落点，故选 A 段。",
          "analysis": "第 1 段（A 段）通篇写珍珠在古代世界的历史与习俗。先写它在历史上的地位：“Long known as the “Queen of Gems” … a natural pearl necklace comprised of matched spheres was a treasure of almost incomparable value, in fact, the most expensive jewelry in the world.”（珍珠素有“宝石女王”之称，由大小相配的珠子串成的天然珍珠项链价值几乎无可比拟，实际上曾是世界上最昂贵的珠宝）。接着转入具体习俗：“The ancient Egyptians were particularly fond of their pearls. Many Egyptian leaders treasured pearls so much that they were often buried along with their cherished pearl collection.”（古埃及人尤其钟爱珍珠，许多埃及领袖珍视珍珠到如此地步，以至于死后常与珍爱的珍珠藏品一同下葬），这是典型的丧葬习俗。随后又给出另一个地区的另一种做法：“In the Orient and Persian Empire, pearls were ground into costly powders to cure anything from heart disease to epilepsy, with possible aphrodisiac uses as well.”（在东方与波斯帝国，珍珠被磨成昂贵的粉末，用来治疗从心脏病到癫痫的各种疾病，可能还被用作催情剂），这是医药习俗。题干的 ancient customs around pearls（与珍珠有关的古代习俗）正是这两处具体做法的概括，因此选 A 段（第 1 段）。",
          "traps": [
            "为什么不是 F 段（第 6 段）：F 段写的是波斯湾珍珠业的历史与现状（历史上世界最好的珍珠产于此地、1930 年代因石油发现与污染而骤然终结、巴林禁止养殖珍珠进入市场以保护传统），属于近代产业史与贸易政策，不是“古代习俗”。",
            "为什么不是 G 段（第 7 段）：G 段讲珍珠的颜色种类与当代产地分布，完全没有涉及古代人的做法。",
            "为什么不是 B 段（第 2 段）：B 段是珍珠成因的科普（三类珍珠、刺激物如何被包裹），不涉及任何习俗。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "distinctions between cultured pearls and natural ones",
          "translation": "养殖珍珠与天然珍珠之间的区别",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The only difference between natural pearls and cultured pearls is that the irritant is a surgically implanted bead or piece of shell called Mother of Pearl."
          },
          "synonyms": [
            "“distinctions between cultured pearls and natural ones” 同义替换为原文的 “The only difference between natural pearls and cultured pearls”",
            "原文先用 “A cultured pearl undergoes the same process.” 交代两者共同点，再点出唯一差异在于刺激物的来源（人工植入的珠核）",
            "“cultured pearls and natural ones” 与原文的 “natural pearls and cultured pearls” 语序互换，指同一对概念；“distinctions” 与 “difference” 是同义替换的高频对应"
          ],
          "locatingTip": "定位：题干里 cultured pearls 与 natural pearls 是核心名词，回到原文扫读这两个词同时密集出现的段落，第 2 段（B 段）第 1 句就列出三类珍珠，之后逐句对照：“A natural pearl forms when …”“A cultured pearl undergoes the same process.”“The only difference between natural pearls and cultured pearls is …”。确定答案技巧：抓 difference 与 distinction 的同义对应，一旦读到 “The only difference … is that the irritant is a surgically implanted bead or piece of shell called Mother of Pearl”，就已经拿到“区别何在”的直接答案依据（天然珍珠的刺激物是沙粒之类的天然异物，养殖珍珠的刺激物是手术植入的珍珠母珠核，由此形成的核心也大得多），故选 B 段。",
          "analysis": "第 2 段（B 段）的主线就是“三类珍珠的异同”。开篇先分类：“Pearls usually fall into three categories—natural pearls, cultured pearls and simulated pearls.”（珍珠通常分为三类：天然珍珠、养殖珍珠和仿制珍珠）。随后讲天然珍珠的成因：“A natural pearl forms when an irritant, such as a piece of sand, works its way into a particular species of oyster, mussel, or clam. As a defense mechanism, the mollusk secretes a fluid to coat the irritant. Layer upon layer of this coating is deposited on the irritant until a lustrous pearl is formed.”（当沙粒之类的刺激物进入某种牡蛎、贻贝或蛤蜊体内，软体动物会分泌液体包裹刺激物作为防御机制，层层沉积直至形成有光泽的珍珠）。接着说养殖珍珠过程相同：“A cultured pearl undergoes the same process.”，紧接着给出本题定位句：“The only difference between natural pearls and cultured pearls is that the irritant is a surgically implanted bead or piece of shell called Mother of Pearl.”（天然珍珠与养殖珍珠之间唯一的区别在于，养殖珍珠的刺激物是外科手术植入的珠核或壳片，即所谓的“珍珠母”）。该句之后还补充了这种珠核的价值与结果（“The resulting core is much larger than in a natural pearl.”）。题干 distinctions between cultured pearls and natural ones 要的正是这个“唯一区别”，原文以 The only difference 直接作答，因此答案选 B 段（第 2 段）。",
          "traps": [
            "为什么不是 E 段（第 5 段）：E 段确实同时出现 cultured 与 natural，但它的落点是“如何鉴别与估价”——用 X 光检查珠核判断是养殖还是天然、养殖珍珠价值低于天然珍珠、仿制珍珠几乎没有价值，重点是鉴定方法与价值排序，而不是两类珍珠在成因上的区别本身。",
            "为什么不是 C 段（第 3 段）：C 段讲的是养殖过程耗时与风险（成熟期、可能被排斥、存活率低），没有比较天然与养殖珍珠的差异。",
            "为什么不是 D 段（第 4 段）：D 段讲如何凭光泽和大小判断价值，未涉及两类珍珠的区别。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 5–10 摘要选词填空（Complete the summary using the list of words, A–K）",
      "mode": "per_question",
      "questionRange": {
        "start": 5,
        "end": 10
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Throughout history, people in ________ used pearls for medicine and philtres.",
          "translation": "纵观历史，________ 的人们曾把珍珠用于医药和催情剂。",
          "answer": "J",
          "wordClass": "地名（专有名词）。空格位于介词 in 之后，需要一个地点名词作宾语，词库中的 Persia（波斯）符合；作答时按题库要求只填选项字母 J。",
          "locating": {
            "paragraph": "1",
            "quote": "In the Orient and Persian Empire, pearls were ground into costly powders to cure anything from heart disease to epilepsy, with possible aphrodisiac uses as well."
          },
          "synonyms": [
            "“medicine” 同义替换为原文的 “to cure anything from heart disease to epilepsy”（用来治疗从心脏病到癫痫的各种疾病）",
            "“philtres”（催情药）同义替换为原文的 “possible aphrodisiac uses”（可能用作催情剂）",
            "“people in Persia” 对应原文的 “In the Orient and Persian Empire”，Persian Empire 即波斯帝国，与选项 J Persia 对应"
          ],
          "locatingTip": "定位：摘要有两个极好的抓手——medicine 与 philtres（催情药）。philtres 是低频词，在全文只能对上第 1 段（A 段）末的 “with possible aphrodisiac uses as well”，一句命中。确定答案技巧：先锁定句子再定词。原句说“在东方与波斯帝国，珍珠被磨成昂贵的粉末，用来治疗从心脏病到癫痫的各种疾病，还可能具有催情功效”，句中 Persian Empire 正是选项中的 Persia（J）；同时句首 In the Orient and Persian Empire 恰好充当“某地的人们”这一主语成分，与题干的 people in [5] 完全对应，故选 J。注意 medicine 与 cure 是常规同义替换，philtres 与 aphrodisiac 也是医学词汇层的对应，两处都能互相印证。",
          "analysis": "第 1 段（A 段）在讲完埃及人的陪葬习俗之后写道：“In the Orient and Persian Empire, pearls were ground into costly powders to cure anything from heart disease to epilepsy, with possible aphrodisiac uses as well.”（在东方与波斯帝国，珍珠被研磨成昂贵的粉末，用来治疗从心脏病到癫痫的各种病症，还可能被当作催情剂使用）。这句话包含两层信息，正好对应题干的两个落点：used pearls for medicine 对应 to cure anything from heart disease to epilepsy（用于治病），philtres 对应 possible aphrodisiac uses（催情剂）。而句首的地点状语 In the Orient and Persian Empire 明确指出做这件事的人是波斯帝国一带的人，词库中的 J Persia 与之对应（Persia 即波斯，其疆域与 Persian Empire 一致）。题干中的 Throughout history 是对整段历史语境的概括，第 1 段本身就以 “Throughout much of recorded history” 与 “The ancient Egyptians” 铺陈古代语境，因此时间限定也吻合。答案填选项字母 J（Persia）。",
          "traps": [
            "为什么不是 H Egypt：埃及虽然在第 1 段出现（“The ancient Egyptians were particularly fond of their pearls.”），但原文交代埃及人与珍珠相关的做法是随葬（“they were often buried along with their cherished pearl collection”），与题干的 medicine 和 philtres 毫无关系，属于同一段内的错位干扰。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "And ________ owns the reputation for its imitation pearl industry.",
          "translation": "而 ________ 以仿制珍珠产业闻名。",
          "answer": "K",
          "wordClass": "地名（专有名词）。空格作 owns 的主语，指一个地方；词库中的 Mallorca（马略卡岛）符合；作答填选项字母 K。",
          "locating": {
            "paragraph": "2",
            "quote": "The island of Mallorca in Spain is known for its imitation pearl industry."
          },
          "synonyms": [
            "“owns the reputation for” 同义替换为原文的 “is known for”（以……著称）",
            "“imitation pearl industry” 与原文原词复现",
            "“Mallorca” 对应原文的 “The island of Mallorca in Spain”，题干省略了其所属国家西班牙"
          ],
          "locatingTip": "定位：imitation pearl industry 这一搭配在全文只出现一次，直接扫第 2 段（B 段）末句“The island of Mallorca in Spain is known for its imitation pearl industry.” 确定答案技巧：题干前半句已经交代“天然与养殖珍珠生长过程相似，而仿制珍珠不同”，接着用 And 引出“某地以仿制珍珠产业闻名”，这正是原文该句的改写：is known for 对应 owns the reputation for，宾语 imitation pearl industry 原词照搬，因此“某地”就是 Mallorca（选项 K）。注意不要与紧挨着的 “One can usually tell an imitation by biting on it.” 混淆，那句讲的是咬一下就能辨别仿制品，属于鉴别方法，与“产地”无关。",
          "analysis": "第 2 段（B 段）在分别讲完天然珍珠与养殖珍珠的成因后转向仿制珍珠：“Imitation pearls are a different story altogether. In most cases, a glass bead is dipped into a solution made from fish scales. This coating is thin and may eventually wear off. One can usually tell an imitation by biting on it. The island of Mallorca in Spain is known for its imitation pearl industry.”（仿制珍珠则完全是另一回事：通常是把玻璃珠浸入用鱼鳞制成的溶液；这层涂层很薄，最终会脱落；通常一咬就能辨别出仿制品。西班牙的马略卡岛以仿制珍珠产业闻名）。其中最后一句是本题的定位句，is known for 与题干的 owns the reputation for 同义（都以“享有名声”表达“著名”），宾语 imitation pearl industry 完全一致，因此空格填 Mallorca，即选项 K。摘要的逻辑衔接也吻合：上一句刚说仿制珍珠（与天然、养殖珍珠不同），紧接着用 And 引出“以仿制珍珠产业闻名的地方”，正是对同一话题的延续。",
          "traps": [
            "为什么不是 B Philippines：菲律宾只在最后一段的当代珍珠产地清单中作为珍珠来源国出现（“pearls predominantly come from Japan, Australia, Indonesia, Myanmar, China, India, the Philippines, and Tahiti”），原文从未说它生产仿制珍珠。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "The country ________ usually produces the larger pearls due to the favourable environment along the coastline",
          "translation": "________ 这个国家因沿海地带有利的环境而通常产出较大的珍珠。",
          "answer": "C",
          "wordClass": "国家名（专有名词）。空格作 The country 的同位说明，需要一个国名；词库中的 Australia（澳大利亚）符合；作答填选项字母 C。",
          "locating": {
            "paragraph": "4",
            "quote": "The South Sea waters of Australia tend to produce the larger pearls; probably because the water along the coastline is supplied with rich nutrients from the ocean floor."
          },
          "synonyms": [
            "“usually produces the larger pearls” 同义替换为原文的 “tend to produce the larger pearls”",
            "“due to the favourable environment along the coastline” 同义替换为原文的 “probably because the water along the coastline is supplied with rich nutrients from the ocean floor”",
            "“The country” 对应原文的 “The South Sea waters of Australia”，原文用海域点出所属国家"
          ],
          "locatingTip": "定位：题干有两个抓手——the larger pearls 与 along the coastline，两处均出自第 4 段（D 段）讲“大小”的那几句。确定答案技巧：先用 the larger pearls 锁定 D 段，再逐项核对照应关系：tend to produce 对应 usually produces（往往产出），probably because 对应 due to（因为），the water along the coastline is supplied with rich nutrients 对应 the favourable environment along the coastline（沿岸海水富含海床养分就是“有利环境”）。三处一一对应之后，句中的 Australia 就是题干所缺的国家，故选 C。这里的 favourable 是原文 rich nutrients 的褒义概括，属于常规正向改写，不改变事实。",
          "analysis": "第 4 段（D 段）在讲完“大小与牡蛎年龄、养殖地点有关”之后，用澳大利亚海域举例：“The South Sea waters of Australia tend to produce the larger pearls; probably because the water along the coastline is supplied with rich nutrients from the ocean floor. Also, the type of mussel being common to the area seems to possess a predilection for producing comparatively large pearls.”（澳大利亚的南海海域往往产出较大的珍珠，可能是因为沿岸海水富含来自海床的养分；此外，该地区常见的贻贝品种似乎特别偏爱产出较大的珍珠）。题干把它改写为“某个国家因沿海有利环境而通常产出较大珍珠”，produces the larger pearls 原词复现，usually 对应 tend to（往往、通常），due to the favourable environment 对应 probably because 加富营养的海水，因此空格填 Australia（选项 C）。作答时注意区分“国家”与“海域”：原文只说 The South Sea waters of Australia（澳大利亚的南海海域），题干要求填的是国家名，故填 Australia 而不是 South Sea。",
          "traps": [
            "为什么不是 E China、I Myanmar：中国与缅甸都出现在最后一段的当代珍珠产地清单里（“Nowadays, pearls predominantly come from Japan, Australia, Indonesia, Myanmar, China, India, the Philippines, and Tahiti.”），原文别处提到中国时也只说其历史记载印证了珍珠的重要性，从未说这两个国家产出较大珍珠。",
            "为什么不是 A America：原文全文未曾出现美国，与“沿海有利环境”“较大珍珠”都无从对应。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "while the nation of ________ manufactures some of the most glistening cultured pearls.",
          "translation": "而 ________ 这个国家生产一些最具光泽的养殖珍珠。",
          "answer": "F",
          "wordClass": "国家名（专有名词）。空格位于介词 of 之后作其宾语，与前面的 the nation 构成同位关系，需要一个国名；词库中的 Japan（日本）符合；作答填选项字母 F。",
          "locating": {
            "paragraph": "5",
            "quote": "Among cultured pearls, Akoya pearls from Japan are some of the most lustrous."
          },
          "synonyms": [
            "“glistening” 同义替换为原文的 “lustrous”（有光泽的）",
            "“manufactures some of the most … cultured pearls” 对应原文的 “Among cultured pearls, Akoya pearls from Japan are some of the most lustrous”，即日本产出光泽最好的养殖珍珠",
            "“the nation of” 对应原文的 “from Japan”，原文用国名加上产地介词表达“某国的产品”"
          ],
          "locatingTip": "定位：题干的关键形容词是 glistening（闪亮有光泽）与 cultured pearls。全文把“养殖珍珠”与“光泽最好”放在一起说的只有第 5 段（E 段）的一句：“Among cultured pearls, Akoya pearls from Japan are some of the most lustrous.” 确定答案技巧：抓同义形容词是本题的关键。若只按 cultured pearls 搜索，B 段与 E 段都会命中，必须叠加“最有光泽”这一特征才能唯一锁定 E 段的 Akoya 珍珠；原文中的 Akoya pearls 产自日本，因此国家是 Japan（选项 F）。另外要注意原文 some of the most lustrous 与题干的 some of the most glistening 结构完全平行，属于同义形容词的等价替换，不改变程度。",
          "analysis": "第 5 段（E 段）先比较三类珍珠的价值并介绍 X 光鉴别法，随后转到品质评价：“Among cultured pearls, Akoya pearls from Japan are some of the most lustrous.”（在养殖珍珠中，日本的 Akoya 珍珠属于最有光泽的品种之一）。题干写 “while the nation of [8] manufactures some of the most glistening cultured pearls”，与原文形成三重对应：lustrous 对应 glistening（有光泽的），among cultured pearls 对应 cultured pearls（养殖珍珠），from Japan 对应 the nation of（某国）。因此空格填 Japan，即选项 F。摘要的两句是并列对比结构（“某个国家通常产出较大珍珠，而另一个国家生产最有光泽的养殖珍珠”），前一句答案是澳大利亚，后一句对应日本，二者在原文分处第 4 段与第 5 段，属于不同段落的不同特征，不要混淆。",
          "traps": [
            "为什么不是 C Australia：澳大利亚在第 4 段被说成产较大珍珠的地方、在第 7 段被说成黑珍珠的产地，原文从未说它出产最有光泽的养殖珍珠；本题题干用的是 while 引出的对比，正是要把它与上一空的澳大利亚区分开。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "In the past, the country ________ in the Persian Gulf produced the world's best pearls.",
          "translation": "过去，波斯湾的 ________ 这个国家出产世界上最好的珍珠。",
          "answer": "D",
          "wordClass": "国家名（专有名词）。空格作 the country 的同位说明，并被 in the Persian Gulf 限定，需要波斯湾沿岸的国家名；词库中的 Bahrain（巴林）符合；作答填选项字母 D。",
          "locating": {
            "paragraph": "6",
            "quote": "Historically, the world's best pearls came from the Persian Gulf, especially around what is now Bahrain."
          },
          "synonyms": [
            "“In the past” 同义替换为原文的 “Historically”",
            "“produced the world's best pearls” 对应原文的 “the world's best pearls came from”",
            "“the country in the Persian Gulf” 对应原文的 “the Persian Gulf, especially around what is now Bahrain”，巴林即今日波斯湾内的岛国，由 especially 强调它是具体所指"
          ],
          "locatingTip": "定位：题干保留了大写专有名词 Persian Gulf，全文集中出现该词的段落是第 6 段（F 段）。确定答案技巧：题干的时间标志 In the past 对应原文 Historically，句子落点 the world's best pearls 与原文完全一致；原文用 especially 强调“尤其是如今巴林一带”，说明历史上出产最好珍珠的具体地方就是 Bahrain（选项 D）。本题务必与第 10 空区分时间方向：第 9 空问的是“过去”，答案是巴林；第 10 空问的是“如今”，对应原文 “Nowadays, the largest stock of natural pearls probably resides in India.”，答案是印度。两空时间标志相反，不能互相串用。",
          "analysis": "第 6 段（F 段）开头两句是本题依据：“Historically, the world's best pearls came from the Persian Gulf, especially around what is now Bahrain. The pearls of the Persian Gulf were naturally created and collected by breath-hold divers.”（历史上，世界上最好的珍珠来自波斯湾，尤其是如今巴林所在的一带；波斯湾的珍珠是由闭气潜水员采集天然形成的）。Historically 与题干的 In the past 同义，the world's best pearls came from 与题干的 produced the world's best pearls 同义，而 especially around what is now Bahrain 把地名具体化为“今日的巴林”，因此空格填 Bahrain，即选项 D。此外，本段后文继续以巴林为中心展开（“Still, Bahrain remains one of the foremost trading centers for high quality pearls. In fact, cultured pearls are banned from the Bahrain pearl market…”，即巴林至今仍是高品质珍珠的重要交易中心，甚至禁止养殖珍珠进入本地市场以保护传统），进一步印证巴林与波斯湾优质珍珠的紧密关联。",
          "traps": [
            "为什么不是 J Persia：波斯（Persia）在第 1 段只作为“古代把珍珠磨粉入药”的地区出现，原文从未说波斯是波斯湾内出产世界最好珍珠的国家；题干限定的是“波斯湾中的国家”，原文指向巴林。",
            "为什么不是 G India：印度在第 6 段被说成如今天然珍珠存量最大的地方（“Nowadays, the largest stock of natural pearls probably resides in India.”），那是下一空的答案，而且印度不属于波斯湾国家，与本题的地点限定不符。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "At present, the major remaining suppliers of natural pearls are in ________.",
          "translation": "目前，剩余的主要天然珍珠供应地在 ________。",
          "answer": "G",
          "wordClass": "国家名（专有名词）。空格位于介词 in 之后作地点宾语，需要国名；词库中的 India（印度）符合；作答填选项字母 G。",
          "locating": {
            "paragraph": "6",
            "quote": "Nowadays, the largest stock of natural pearls probably resides in India."
          },
          "synonyms": [
            "“At present” 同义替换为原文的 “Nowadays”",
            "“the major remaining suppliers of natural pearls” 同义替换为原文的 “the largest stock of natural pearls”（存量最大的天然珍珠来源地）",
            "“are in India” 与原文的 “resides in India” 对应，都是“位于印度”"
          ],
          "locatingTip": "定位：题干的时间标志 At present 是本题最稳的定位词，原文第 6 段（F 段）用 Nowadays 与之对应，扫读时只要盯住表示“如今”的副词即可。确定答案技巧：找到 Nowadays 之后看“谁的天然珍珠存量最大”——原文说 “the largest stock of natural pearls probably resides in India”，largest stock（最大存量）即题干 the major remaining suppliers（主要剩余的供应来源），因此空格填 India（选项 G）。另外本段紧接着用 Unlike 对比补充：“Unlike Bahrain, which has essentially lost its pearl resource, traditional pearl fishing is still practiced on a small scale in India.”（与基本失去珍珠资源的巴林不同，印度仍在小规模地进行传统珍珠捕捞），这句话正是让本题与上一空泾渭分明的关键句。",
          "analysis": "第 6 段（F 段）在讲完波斯湾珍珠业因石油污染与过度捕捞而终结之后写道：“Nowadays, the largest stock of natural pearls probably resides in India. Ironically, much of India's stock of natural pearls came originally from Bahrain. Unlike Bahrain, which has essentially lost its pearl resource, traditional pearl fishing is still practiced on a small scale in India.”（如今，最大的天然珍珠存量大概在印度；颇具讽刺意味的是，印度这批天然珍珠大多最初来自巴林。与基本上已失去珍珠资源的巴林不同，印度仍在小规模地进行传统珍珠捕捞）。Nowadays 与题干的 At present 同义，the largest stock of natural pearls 与题干的 the major remaining suppliers of natural pearls 同义，resides in India 与题干的 are in [10] 对应，因此空格填 India，即选项 G。本段 Unlike 一句还从反面强化了因果关系：巴林已经没有珍珠资源了，所以“如今剩下的来源”只能是印度。",
          "traps": [
            "为什么不是 D Bahrain：巴林虽然是“过去”出产世界最好珍珠的地方（本段首句 Historically），但原文紧跟着说它与印度不同、已经 essentially lost its pearl resource，与题干 At present（如今仍是主要供应地）的限定正好相反，因此不能填 Bahrain。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 11–13 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 11,
        "end": 13
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "A cultured pearl's centre is often significantly larger than that in a natural pearl.",
          "translation": "养殖珍珠的中心往往明显比天然珍珠的中心更大。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The resulting core is much larger than in a natural pearl."
          },
          "synonyms": [
            "“centre” 同义替换为原文的 “core”（核心）",
            "“often significantly larger” 同义替换为原文的 “much larger”（大得多）",
            "“than that in a natural pearl” 与原文的 “than in a natural pearl” 完全对应，其中 that 指代 centre、原文省略的宾语指代 core"
          ],
          "locatingTip": "定位：题干的两个抓手是 cultured pearl 与 larger。原文把养殖珍珠与天然珍珠的核心大小放在一起比较的只有第 2 段（B 段）：该段先交代养殖珍珠的刺激物是外科手术植入的珠核（“the irritant is a surgically implanted bead or piece of shell called Mother of Pearl”），紧接着给出结论句 “The resulting core is much larger than in a natural pearl.” 确定答案技巧：判断题先做同义替换再核对方向与程度。centre 与 core 同义，significantly larger 与 much larger 同义，两句都在讲“养殖珍珠的核心比天然珍珠的大得多”，方向一致、程度相当，故选 TRUE。解题关键在于把 “The resulting core” 的指代还原为“养殖珍珠（因人工植入珠核而）形成的核心”，指代一还原，答案即成立。",
          "analysis": "第 2 段（B 段）先解释天然珍珠的成因：“A natural pearl forms when an irritant, such as a piece of sand, works its way into a particular species of oyster, mussel, or clam. As a defense mechanism, the mollusk secretes a fluid to coat the irritant. Layer upon layer of this coating is deposited on the irritant until a lustrous pearl is formed.”（当沙粒之类的刺激物进入某种牡蛎、贻贝或蛤蜊体内时，天然珍珠开始形成；软体动物分泌液体包裹刺激物作为防御，层层沉积直至形成有光泽的珍珠）。随后说明养殖珍珠过程相同，唯一的差别在刺激物：“A cultured pearl undergoes the same process. The only difference between natural pearls and cultured pearls is that the irritant is a surgically implanted bead or piece of shell called Mother of Pearl. Often, these shells are ground oyster shells that are worth significant amounts of money in their own right as irritant-catalysts for quality pearls. The resulting core is much larger than in a natural pearl.”（养殖珍珠经历同样的过程；天然珍珠与养殖珍珠唯一的区别是，养殖珍珠的刺激物是外科植入的珠核或壳片，即“珍珠母”，而这类壳片往往就是磨碎的牡蛎壳，作为优质珍珠的刺激物催化剂本身价值不菲；由此形成的核心比天然珍珠里的核心大得多）。题干的 centre 对应 core，often significantly larger 对应 much larger，落点正是最后这句结论句，信息完全一致，故判 TRUE。做题提示：这一段存在一条因果链——“刺激物被人工换成大块珠核”导致“形成的核心更大”，因果清晰、无须额外推断，也不涉及程度折扣。",
          "traps": [
            "为什么不是 FALSE：原文用 much larger 明确承认养殖珍珠的核心比天然珍珠大得多，与题干 significantly larger 同向同量，不存在矛盾。需要注意“核心大小”与“珍珠价值”是两回事：第 5 段说养殖珍珠的价值低于天然珍珠，那是价值的比较，与本题问的尺寸无关，不能据此误判 FALSE。",
            "为什么不是 NOT GIVEN：原文既交代了养殖珍珠的珠核来自手术植入，又用 “The resulting core is much larger than in a natural pearl.” 给出直接比较结论，信息明确且与题干一致，不属于“未提及”，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Imitation pearls are usually the same price as natural ones.",
          "translation": "仿制珍珠通常与天然珍珠价格相同。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In general, cultured pearls are less valuable than natural pearls, whereas imitation pearls have almost no value."
          },
          "synonyms": [
            "“the same price” 与原文的价值排序 “less valuable than … have almost no value” 相互冲突",
            "“Imitation pearls” 与原文的 “imitation pearls” 原词复现",
            "“natural ones” 对应原文的 “natural pearls”；“price” 对应原文的价值词 valuable 与 value"
          ],
          "locatingTip": "定位：题干的核心名词是 Imitation pearls 与 natural ones，比较点是 price。原文把三类珍珠的价值放在一起排序的是第 5 段（E 段）首句：“cultured pearls are less valuable than natural pearls, whereas imitation pearls have almost no value.” 确定答案技巧：判断题遇到价格或价值比较，先看原文有没有排序。原文用 whereas 把天然珍珠、养殖珍珠、仿制珍珠按价值分为三档，仿制珍珠处在“几乎没有价值”的最低档；题干却把仿制珍珠与天然珍珠说成“价格相同”，与原文的价值梯度直接相反，故选 FALSE。旁证来自第 1 段：天然珍珠项链被称为世界上“最昂贵的珠宝”，与“几乎没有价值”形成极大反差。",
          "analysis": "第 5 段（E 段）首句是本题定位句：“In general, cultured pearls are less valuable than natural pearls, whereas imitation pearls have almost no value.”（一般而言，养殖珍珠的价值低于天然珍珠，而仿制珍珠则几乎没有价值）。句中 whereas 引出对比，把三类珍珠按价值分成三档，仿制珍珠处于最低档。第 1 段（A 段）又提供了强度更大的旁证：“a natural pearl necklace comprised of matched spheres was a treasure of almost incomparable value, in fact, the most expensive jewelry in the world.”（由大小相配的珠子串成的天然珍珠项链价值几乎无可比拟，实际上曾是世界上最昂贵的珠宝）。一边是“世界上曾经最昂贵的珠宝”，一边是“几乎没有价值”，二者的价格显然不可能相同；题干用 usually the same price 把二者拉到同一价位，与原文的价值排序正面矛盾，因此判 FALSE。做题时抓 price 对应的价值词 valuable、value、worth 即可完成同义识别，本段的表述属于常规同义域替换。",
          "traps": [
            "为什么不是 TRUE：原文明确给出价值排序，仿制珍珠 have almost no value（几乎没有价值），而天然珍珠是价值最高的一档（第 1 段甚至称天然珍珠项链为世界上最昂贵的珠宝），二者价格不可能相同，故选 TRUE 没有依据。",
            "为什么不是 NOT GIVEN：原文对三类珍珠的价值都有明确表述，并且明确把仿制珍珠与天然珍珠分在不同档位，属于“已有相反信息”而非“信息缺失”，因此不能选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Akoya pearls from Japan glow more deeply than South Sea pearls from Australia.",
          "translation": "日本的 Akoya 珍珠比澳大利亚的南海珍珠光泽更深（更亮）。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Among cultured pearls, Akoya pearls from Japan are some of the most lustrous."
          },
          "synonyms": [
            "“Akoya pearls from Japan” 与原文原词复现",
            "“glow more deeply” 与原文的 “lustrous”（有光泽）属于同一语义场，原文第 4 段也把光泽深度表述为 “The deeper the glow”",
            "“South Sea pearls from Australia” 在原文中分别出现于第 4 段（“The South Sea waters of Australia tend to produce the larger pearls”）与第 7 段（“usually only being found in the South Sea near Australia”），但两处都没有与 Akoya 珍珠比较光泽"
          ],
          "locatingTip": "定位：题干的三个抓手是 Akoya pearls from Japan、South Sea pearls from Australia 以及比较结构 more deeply than。Akoya 在全文只出现一次，位于第 5 段（E 段）：“Among cultured pearls, Akoya pearls from Japan are some of the most lustrous.”；南海与澳大利亚则分别出现在第 4 段（讲大小）与第 7 段（讲黑珍珠）。确定答案技巧：判断题里的比较级只有在“比较双方同框”时才能判分。原文只对日本 Akoya 珍珠给出“极有光泽”的单方评价，对澳大利亚南海珍珠只用来说“个头较大”与“出产最罕见的黑珍珠”，两边从未就光泽深浅放在一起比较，属于比较关系缺失，故判 NOT GIVEN。切勿把“Akoya 是最有光泽的珍珠之一”直接升级为“比南海珍珠更有光泽”。",
          "analysis": "第 5 段（E 段）在讲完养殖珍珠与天然珍珠的 X 光鉴别法之后，插入一句品质评价：“Among cultured pearls, Akoya pearls from Japan are some of the most lustrous.”（在养殖珍珠中，日本的 Akoya 珍珠属于最有光泽的品种之一）。第 4 段（D 段）提到澳大利亚海域时讲的是大小：“The South Sea waters of Australia tend to produce the larger pearls”，并在解释光泽时给出一般性原理 “The deeper the glow, the more perfect the shape and surface, the more valuable they are.”（光泽越深、形状与表面越完美，珍珠就越值钱）。第 7 段（G 段）提到南海时讲的是颜色稀有度：“a deep lustrous black pearl is one of the rarest finds in the pearling industry, usually only being found in the South Sea near Australia.”（深色且有光泽的黑珍珠是珍珠业最罕见的发现之一，通常只见于澳大利亚附近的南海）。把这三处放在一起可以看出：原文确实分别提到日本 Akoya 珍珠光泽好、澳大利亚南海珍珠个头大且出产罕见黑珍珠，但从头到尾没有一句话比较两者的光泽深浅。题干的落点是 “glow more deeply than”（比……光泽更深），属于比较关系，而原文缺少可供比较的另一方信息，因此判 NOT GIVEN。做题总结：凡题干出现比较级或最高级，必须回原文找“两个对象同框”的句子；只有单方评价（some of the most lustrous）不足以支撑比较结论，这正是 NOT GIVEN 的典型设题方式。",
          "traps": [
            "为什么不是 TRUE：原文只说 Akoya 珍珠属于“最有光泽的品种之一（some of the most lustrous）”，既没有与澳大利亚南海珍珠做比较，也没有给出两者光泽深浅的具体信息；“是其中之一”不等于“比另一方更强”，把单方评价当成比较结论就属于过度推断。",
            "为什么不是 FALSE：原文没有任何一句说南海珍珠的光泽比 Akoya 珍珠更深或更浅，缺少相反信息，因此也不能判 FALSE。三选一里只有 NOT GIVEN 对应“双方未做过比较”这一情形。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
