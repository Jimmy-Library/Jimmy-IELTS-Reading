(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-high-1012", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-high-1012",
  "meta": {
    "examId": "p3-high-1012",
    "title": "A focal point of academic inquiry 学术探究的焦点",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 28–33 判断题（YES / NO / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 28,
        "end": 33
      },
      "items": [
        {
          "questionId": "q28",
          "questionNumber": 28,
          "stem": "The passage claims that criminal behavior is purely an individual choice resulting from moral failings.",
          "translation": "文章声称犯罪行为纯粹是道德缺陷所导致的个人选择。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "crime is not merely a product of individual failings or moral weakness; rather, it is the outcome of a complex interaction between socioeconomic deprivation and psychological pathology."
          },
          "synonyms": [
            "题干 “purely an individual choice resulting from moral failings” 对应原文 “a product of individual failings or moral weakness”，但原文前面加了否定的 “not merely”（不只是），语气与题干完全相反",
            "题干 “purely”（纯粹）要求把犯罪归因于单一原因，原文 “a complex interaction between socioeconomic deprivation and psychological pathology”（社会经济剥夺与心理病理之间复杂的相互作用）说明作者主张多因论",
            "原文 “the recognition of a multifaceted and intricate array of factors”（承认存在多方面而错综复杂的一系列因素）同样是 “purely” 的反向表述"
          ],
          "locatingTip": "定位：题干的核心词是 individual choice 与 moral failings，这属于对全文论点的概括性表述，因此不必通篇查找细节，直接看最后一段（F 段）的总结句最省时。F 段末出现原词复现 “individual failings or moral weakness”，可立刻锁定答案依据句。确定答案技巧：判断题中凡是出现 purely / only / solely / entirely 这类绝对化限定词，都要先问一句“作者是否只给出一个原因”。F 段用 not merely … rather 的对比结构明确否定单一归因，作者观点与题干相反，所以答案是否定作者观点的 NO。",
          "analysis": "本题问的是“文章声称……”，考查的其实是作者对犯罪成因的总体立场，而不是某个具体事实。F 段（结论段）先点出前文讨论的两条线索：社会经济剥夺与心理病理；随后用 “crime is not merely a product of individual failings or moral weakness” 直接排除道德缺陷这一单因解释，再用 “rather, it is the outcome of a complex interaction between socioeconomic deprivation and psychological pathology” 给出正面的多因结论。也就是说，题干说的那套观点正是作者在文中批评、否认的观点，因此应选 NO，表示“与作者的说法不符”。再看 A 段，作者一开始就把研究从 “simplistic attributions”（简单化归因）推进到 “a multifaceted and intricate array of factors”（多方面而复杂的因素），B 段讲社会经济因素，D、E 段讲心理因素，F 段讲二者交叉，全篇结构都在反驳“纯粹个人道德问题”这一说法，与 NO 的判断互相印证。",
          "traps": [
            "为什么不是 YES：原文 F 段用 “crime is not merely a product of individual failings or moral weakness” 明确否定了“个人道德缺陷”这一解释，题干却把这一被否定的观点说成文章的主张，属于偷换立场；同时 “purely” 与原文 “complex interaction” 直接冲突，所以绝不能选 YES。",
            "为什么不是 NOT GIVEN：原文并不回避犯罪成因，A 段与 F 段都直接、明确地给出了立场，信息完整且有对应的原词（individual failings or moral weakness），不存在“原文未提及”的情况，因此不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q29",
          "questionNumber": 29,
          "stem": "Gangs naturally emerge in deprived areas as a response to economic inequality.",
          "translation": "帮派在贫困地区是作为对经济不平等的回应而自然出现的。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "The emergence of gang cultures in economically deprived areas is one example of how social inequality can lead to criminal behavior."
          },
          "synonyms": [
            "题干 “deprived areas” 同义替换为原文 “economically deprived areas”",
            "题干 “gangs” 对应原文 “gang cultures”",
            "题干 “as a response to economic inequality” 对应原文 “how social inequality can lead to criminal behavior”"
          ],
          "locatingTip": "定位：题干关键词 gangs 在全文只出现在 C 段（“gang cultures”），用这个低出现频率的名词直接定位到 C 段第四句，无需通读。确定答案技巧：锁定句子后要逐词比对，而这道题的“多余信息”藏在副词 naturally 上。原文只把贫困地区的帮派文化当作 “one example”（一个例子），并用情态动词 “can lead to”（可能导致）而非必然语气，完全没有交代帮派是自发、自然形成的。题干新增了原文没有的信息，属于“原文没提”，应选 NOT GIVEN。",
          "analysis": "C 段讨论社会不平等如何加剧犯罪倾向。作者先给出总述 “social inequality exacerbates the propensity for criminal behavior”，接着说贫富与机会差距悬殊的社区往往犯罪率更高，随后用贫困地区的帮派文化作为例证：“The emergence of gang cultures in economically deprived areas is one example of how social inequality can lead to criminal behavior.” 这句话能证实的是：帮派文化的出现在作者眼中是社会不平等可能导致犯罪的一个例子。但题干的落点是 “naturally emerge”（自然而然地出现）——即帮派是自发、必然产生的。原文既没有说这一过程是自发的，也没有把它说成必然结果（can lead to 表示“可能导致”，是可能性而非必然性），更没有讨论帮派形成是“自然”还是“人为促成”。判断题中，只要题干增添了原文未提供的限定信息（这里是 naturally），即使其余部分完全对应，也应判为 NOT GIVEN。",
          "traps": [
            "为什么不是 YES：原文的对应句只说明帮派文化是“社会不平等可能导致犯罪的一个例子”，主干信息（贫困地区、帮派、社会不平等、犯罪）确实吻合，但题干加入了 naturally 这一原文从未出现的限定，把“一个”例子升级成“自然而然、必然”的规律。YES 要求题干每一层信息都能在原文找到依据，naturally 找不到依据，因此不能选 YES。",
            "为什么不是 NO：NO 要求原文存在与题干相矛盾的事实，例如原文说帮派并非自然出现、或并非对不平等的反应。原文没有给出任何此类相反表述，只是未提及 naturally 这一层，因此不能判为 NO。"
          ]
        },
        {
          "questionId": "q30",
          "questionNumber": 30,
          "stem": "Relative deprivation refers to the frustration people experience when they cannot attain the same status as wealthier peers.",
          "translation": "相对剥夺指的是人们在无法获得与更富裕的同龄人相同地位时所体验到的挫败感。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "individuals who perceive themselves as being less fortunate than their peers are more inclined to resort to crime as a means of restoring their perceived social status."
          },
          "synonyms": [
            "题干 “cannot attain the same status as wealthier peers” 同义替换为原文 “perceive themselves as being less fortunate than their peers” 以及 “restoring their perceived social status”",
            "题干 “frustration” 对应原文所描述的“感到自己不如同龄人幸运”带来的负面心理体验（C 段同类情绪被写作 resentment）"
          ],
          "locatingTip": "定位：relative deprivation 是一个专有学术术语，在原文只出现一次，位于 B 段最后一句，扫读段落找术语首词即可一步定位，不需要逐句读。确定答案技巧：题干是“定义+解释”型句式（X refers to …），原文也恰好在同一句给出定义（which posits that …），两者可以直接做同义比对：比较对象是否为“更富裕的同龄人”、结果是否为“地位落差带来的负面情绪”。两处都在讲“与同龄人比较后感到不如人，并想恢复社会地位”，方向一致且没有冲突，故为 YES。",
          "analysis": "B 段先讲贫困、缺乏教育和失业等社会经济因素，随后提到相对剥夺这一概念。定位句 “The argument is further bolstered by the concept of relative deprivation, which posits that individuals who perceive themselves as being less fortunate than their peers are more inclined to resort to crime as a means of restoring their perceived social status.” 给出了该术语的定义：把自己看得比同龄人更不幸（less fortunate than their peers）的人，更倾向于用犯罪来“恢复自己感知到的社会地位”（restoring their perceived social status）。题干说相对剥夺是“无法获得与更富裕的同龄人相同地位时的挫败感”，正是对该定义的同义转述：比较对象是财富/地位更高的同龄人，核心心理是地位落差带来的失落（frustration），动机是重新取得同等地位。作者陈述与题干一致，故答案为 YES。",
          "traps": [
            "为什么不是 NO：题干的三层信息——与他人比较、“比同龄人处境差”带来负面情绪、围绕社会地位——在原文定义句中都有对应（less fortunate than their peers、resort to crime、restoring their perceived social status），没有任何冲突点，所以不能选 NO。",
            "为什么不是 NOT GIVEN：相对剥夺不是只在原文被提名字，而是紧跟 which posits that 给出了完整定义，题干就是对这一定义的同义概括，信息存在且明确，故不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q31",
          "questionNumber": 31,
          "stem": "According to the strain theory, individuals from affluent backgrounds are less likely to commit crimes.",
          "translation": "根据紧张理论，来自富裕背景的个体犯罪的可能性较低。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "individuals from impoverished backgrounds, particularly those who experience chronic deprivation, are more likely to engage in criminal activity."
          },
          "synonyms": [
            "题干 “affluent backgrounds” 与原文 “impoverished backgrounds” 构成反向对应，题干 “less likely to commit crimes” 与原文 “more likely to engage in criminal activity” 构成反向对应",
            "题干 “the strain theory” 对应原文同一段中 “Theories such as strain theory, proposed by Robert Merton”",
            "题干的 “individuals” 对应原文的 “individuals”，题干 “commit crimes” 同义替换为原文 “engage in criminal activity”"
          ],
          "locatingTip": "定位：题干有专有名词 strain theory 与 Robert Merton，但答案依据句是紧挨着紧张理论的那句关于贫困背景人群的统计性结论，两者同在 B 段相邻位置，可以先找到 “strain theory” 再往前后各看一句。确定答案技巧：题干把原文的贫困背景（impoverished）换成富裕背景（affluent）、把“更可能犯罪”换成“较不可能犯罪”，是同一因果命题的正反两面；只要原文明确给出“贫困背景者更可能犯罪”，题干的反向表述就与作者一致，故选 YES。注意不要把文中“可能”读成“必然”，题干用的是 less likely，与原文 more likely 的概率语气相匹配。",
          "analysis": "B 段的核心论点是社会经济因素对犯罪有重要影响。定位句指出 “individuals from impoverished backgrounds, particularly those who experience chronic deprivation, are more likely to engage in criminal activity”，即贫困背景（尤其是长期匮乏）的人更可能从事犯罪活动。紧接着作者用紧张理论（strain theory，由 Robert Merton 提出）解释原因：“crime arises as a response to the inability to achieve socially approved goals through legitimate means”，也就是当人们无法通过合法途径实现社会认可的目标时，犯罪就成了回应。把这两句合起来看：紧张理论所描述的“合法途径受阻”这一压力主要落在贫困背景者身上，反过来意味着不面临这种资源匮乏的富裕背景者犯罪的可能性更低。题干正是这一反向表述，且使用了与原文一致的概率性措辞（less likely 对 more likely），因此选 YES。",
          "traps": [
            "为什么不是 NO：原文没有任何一句说富裕背景者的犯罪倾向更强，也没有否认背景与犯罪之间的关联；相反，作者强调贫困背景与犯罪的正相关，反向推论与作者立场同向，故不能选 NO。",
            "为什么不是 NOT GIVEN：原文既给出了紧张理论的机制，也给出了贫困背景者更可能犯罪的明确结论，题干所需的推理依据完整存在，不属于“原文未提及”，因此不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q32",
          "questionNumber": 32,
          "stem": "Psychological disorders might hinder individuals from overcoming financial hardship.",
          "translation": "心理障碍可能会阻碍个人摆脱经济困境。",
          "answer": "YES",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "those suffering from psychological disorders may find themselves trapped in cycles of poverty and crime, unable to break free due to a lack of access to resources or support."
          },
          "synonyms": [
            "题干 “overcoming financial hardship” 同义替换为原文 “unable to break free” 与 “cycles of poverty”",
            "题干 “Psychological disorders” 与原文 “psychological disorders” 原词对应",
            "题干 “might hinder” 对应原文的 “may find themselves trapped”，情态动词的“可能”语气一致"
          ],
          "locatingTip": "定位：题干关键词 psychological disorders 与 financial hardship 都是 F 段（结论前的综合段）的话题词，直接扫读 F 段中间那句 “those suffering from psychological disorders may find themselves trapped in cycles of poverty and crime” 即可锁定。确定答案技巧：题干用 might（可能）表推测，原文用 may（可能），语气吻合，因此不必担心“过度绝对”的问题；再看因果关系——原文说心理障碍者因缺乏资源与支持而“无法挣脱贫困与犯罪的循环”，正是题干“阻碍其摆脱经济困境”的意思，故为 YES。",
          "analysis": "F 段专门讨论社会经济因素与心理因素的交叉作用，题干问的正是这一交叉点。定位句 “Conversely, those suffering from psychological disorders may find themselves trapped in cycles of poverty and crime, unable to break free due to a lack of access to resources or support.” 说的是：患有心理障碍的人可能发现自己困在贫困与犯罪的循环中，由于缺乏资源或支持而无法挣脱。题干把 “trapped in cycles of poverty … unable to break free” 概括为 “hinder individuals from overcoming financial hardship”（阻碍其摆脱经济困境），把 “psychological disorders” 原样保留，并用 might 对应原文的 may，语气与含义都一致，因此答案为 YES。前面一句还给出了反向的因果链（贫困环境中的长期压力使人更易出现心理健康问题），与本题构成双向互动的论证。",
          "traps": [
            "为什么不是 NO：原文明确说心理障碍者 “unable to break free”（无法挣脱），正是阻碍其摆脱贫困困境的表述，与题干同向，没有相反信息，故不能选 NO。",
            "为什么不是 NOT GIVEN：原文不仅提到了心理障碍，还直接写明了它与贫困循环之间“难以挣脱”的结果关系，信息充分对应，故不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q33",
          "questionNumber": 33,
          "stem": "Social inequality always leads to violent criminal behavior in every situation.",
          "translation": "社会不平等在任何情况下都总是导致暴力犯罪行为。",
          "answer": "NO",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Communities characterized by stark disparities in wealth and opportunity often experience higher rates of crime, particularly violent crime."
          },
          "synonyms": [
            "题干 “wealthy… inequality” 对应原文 “stark disparities in wealth and opportunity”，题干 “violent criminal behavior” 同义替换为原文 “violent crime”",
            "原文的频率副词 “often”（往往）与题干的 “always … in every situation”（总是、在任何情况下）形成语气冲突"
          ],
          "locatingTip": "定位：题干的核心名词是 social inequality 与 violent crime，两者在 C 段开头两句同时出现，扫读 C 段首句 “social inequality exacerbates the propensity for criminal behavior” 即可定位到本段。确定答案技巧：判断题看到 always / every / all / never 这类绝对化词，必须回到原文确认作者使用的是绝对语气还是概率语气。定位句用的是 “often experience higher rates of crime”（往往犯罪率更高），属于概率性、群体性表述，与“总是、在任何情况下”相矛盾，因此选 NO。",
          "analysis": "C 段开头指出 “social inequality exacerbates the propensity for criminal behavior”（社会不平等会加剧犯罪行为的倾向），随后具体说明：定位句 “Communities characterized by stark disparities in wealth and opportunity often experience higher rates of crime, particularly violent crime.” 意思是贫富与机会差距悬殊的社区往往犯罪率更高，尤其是暴力犯罪。注意两个限定：其一 often 只是“往往”，说明是统计上的倾向而非必然规律；其二后面作者用 “This is because inequality fosters a sense of resentment and alienation … which can manifest in criminal actions”，can manifest 同样只表示“可能表现为犯罪”。题干却把它升级为 always leads to … in every situation（在任何情况下总是导致），把可能性和倾向性表述绝对化，属于典型的“过分解读”，因此与作者观点不符，答案为 NO。",
          "traps": [
            "为什么不是 YES：原文用 often（往往）和 can manifest（可能表现为）描述社会不平等与犯罪的关系，题干却用 always … in every situation 把关系说成无一例外的必然规律。只要原文的语气弱于题干的语气，就不能判为 YES。",
            "为什么不是 NOT GIVEN：原文对社会不平等与犯罪（包括暴力犯罪）之间的关系有明确陈述，并非未提及；而且题干的绝对化说法与原文的概率化陈述构成实质性冲突，因此应选 NO 而不是 NOT GIVEN。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 34–36 句子填空题（从原文中选词，NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 34,
        "end": 36
      },
      "items": [
        {
          "questionId": "q34",
          "questionNumber": 34,
          "stem": "According to Robert Merton's strain theory, crime can occur when individuals are unable to achieve socially accepted goals through ______ means.",
          "translation": "根据罗伯特·默顿的紧张理论，当个人无法通过______手段实现社会认可的目标时，犯罪就可能发生。",
          "answer": "legitimate",
          "wordClass": "形容词（修饰后面的名词 means，意为“合法的”）",
          "locating": {
            "paragraph": "B",
            "quote": "Theories such as strain theory, proposed by Robert Merton, assert that crime arises as a response to the inability to achieve socially approved goals through legitimate means."
          },
          "synonyms": [
            "题干 “socially accepted goals” 同义替换为原文 “socially approved goals”",
            "题干 “unable to achieve” 同义替换为原文 “the inability to achieve”",
            "题干 “crime can occur” 对应原文 “crime arises”"
          ],
          "locatingTip": "定位：题干有专有名词 Robert Merton 与 strain theory，这两个词在全文只出现在 B 段一句中，属于最高效的“专名定位”，直接找到该句即完成定位。确定答案技巧：句子填空题先判断空格词性——空格在名词 means 之前，只能是形容词或名词修饰语；再回到定位句，找到与 means 搭配的修饰语 “legitimate”（通过合法手段），且该词在题干中未出现，正好是需要填的词。另外题目要求 NO MORE THAN TWO WORDS，legitimate 是单个词，符合字数限制。",
          "analysis": "B 段讲解犯罪的社会经济成因，其中定位句 “Theories such as strain theory, proposed by Robert Merton, assert that crime arises as a response to the inability to achieve socially approved goals through legitimate means.” 给出了默顿紧张理论的核心内容：犯罪是对“无法通过合法手段实现社会认可目标”这一处境的回应。题干几乎是这句的同义改写：题干的 “socially accepted goals” 对应原文 “socially approved goals”（社会认可的目标），“unable to achieve” 对应 “the inability to achieve”，“crime can occur” 对应 “crime arises”。因此空格处要填的是与 means 搭配、表示“合法”的修饰语，即原文的 legitimate。词性上，空格位于名词 means 之前，需要形容词修饰，legitimate 正是形容词，语法与语义双重吻合；拼写注意不能写成形近词 legislate（动词，立法）。",
          "traps": [
            "注意不要填 legal：原文此处使用的是 legitimate，legal 虽然意思相近但并非原文用词；题目要求从原文中选词，必须逐字照抄 legitimate。",
            "注意字数限制：答案为单个形容词 legitimate，符合 NO MORE THAN TWO WORDS；若把 “through legitimate means” 整段抄入则会超字数并在语法上不合。"
          ]
        },
        {
          "questionId": "q35",
          "questionNumber": 35,
          "stem": "Psychological theories emphasize the role of an individual's ______ and mental state in determining their likelihood of engaging in criminal activities.",
          "translation": "心理学理论强调个人的______和心理状态在决定其从事犯罪活动的可能性方面的作用。",
          "answer": "personality traits",
          "wordClass": "名词短语（复数形式，指个性特征）",
          "locating": {
            "paragraph": "D",
            "quote": "Psychological theories emphasize the individual's mental state, personality traits, and cognitive patterns as significant contributors to criminal actions."
          },
          "synonyms": [
            "题干 “emphasize the role of an individual's … and mental state” 对应原文 “emphasize the individual's mental state, personality traits, and cognitive patterns”",
            "题干 “criminal activities” 对应原文 “criminal actions”",
            "题干 “determining their likelihood of engaging in” 对应原文 “significant contributors to”"
          ],
          "locatingTip": "定位：题干主干词是 Psychological theories、mental state，这两个词在 D 段首句同时出现，用段落主题词 mental state 直接定位到 D 段。确定答案技巧：这是并列结构填空，题干用 “A and mental state” 的结构提示空格是与 mental state 并列的名词；回到原文找到同一并列列表 “mental state, personality traits, and cognitive patterns”，其中 mental state 已被题干预先给出，因此空格应填与它并列的另一个成分 personality traits（两个词，恰好符合 NO MORE THAN TWO WORDS 的限制）。",
          "analysis": "D 段转入心理因素的分析，定位句 “Psychological theories emphasize the individual's mental state, personality traits, and cognitive patterns as significant contributors to criminal actions.” 列出了心理学理论强调的三项个人内部因素：mental state（心理状态）、personality traits（个性特征）与 cognitive patterns（认知模式）。题干用了和原文相同的动词 emphasize 与主体 Psychological theories，只给出 “mental state” 而把另一并列项留空，因此答案为 personality traits。词性分析：空格与 mental state 并列，属于名词短语，原文为复数形式，所以必须写成复数 traits，不能写成单数 trait 或近义的 character（原文未使用该词）。字数上 personality traits 恰好两个词，符合题目 NO MORE THAN TWO WORDS 的要求，书写时不要加上 “an individual's” 等多余词语。",
          "traps": [
            "注意单复数：原文为 “personality traits”，务必保留复数 -s；写成 personality trait 虽然词数合规，但不是原文用词。",
            "注意不要与 cognitive patterns 混淆：cognitive patterns（认知模式）同属并列列表，但题干已经给出了 mental state 与后半句的语义落点，正确答案是与 mental state 并列的 personality traits；此外 cognitive patterns 也是两个词，容易误选，需以并列位置对应关系判断。"
          ]
        },
        {
          "questionId": "q36",
          "questionNumber": 36,
          "stem": "The theory of ______ suggests that crime arises as a response to perceived disparities in wealth and social status.",
          "translation": "______理论认为，犯罪是对财富和社会地位方面感知到的差异的一种回应。",
          "answer": "relative deprivation",
          "wordClass": "名词短语（学术术语，指相对剥夺）",
          "locating": {
            "paragraph": "B",
            "quote": "The argument is further bolstered by the concept of relative deprivation, which posits that individuals who perceive themselves as being less fortunate than their peers are more inclined to resort to crime as a means of restoring their perceived social status."
          },
          "synonyms": [
            "题干 “perceived disparities in wealth and social status” 同义替换为原文 “perceive themselves as being less fortunate than their peers” 与 “restoring their perceived social status”",
            "题干 “crime arises as a response to” 对应原文 “more inclined to resort to crime”",
            "题干 “The theory of … suggests” 对应原文 “the concept of … which posits that”"
          ],
          "locatingTip": "定位：题干的落点是“某种理论/概念”，而四个选项中符合“财富与社会地位差异导致犯罪”这一描述的术语只有 B 段的 relative deprivation，其所在句正是 B 段最后一句，可用术语首词 relative 或 deprivation 直接扫读定位。确定答案技巧：句子填空先判断空格词性——空格位于 “The theory of” 之后，必须是名词或名词短语；再依据题干给出的定义线索（对财富与社会地位的感知差异作出回应）回到定位句核对，只有 relative deprivation 的定义与此完全对应，且该短语为两个词，符合 NO MORE THAN TWO WORDS 的要求。",
          "analysis": "B 段在讲了紧张理论之后，进一步引入第二个概念作为补充论证。定位句 “The argument is further bolstered by the concept of relative deprivation, which posits that individuals who perceive themselves as being less fortunate than their peers are more inclined to resort to crime as a means of restoring their perceived social status.” 说明相对剥夺理论主张：感到自己不如同龄人幸运的人更倾向于用犯罪来恢复自己感知到的社会地位。题干说的是“对财富和社会地位方面感知差异的回应”，正是该定义的同义概括：perceive 对应题干的 perceived，restoring their perceived social status 对应题干的 social status，less fortunate than their peers 对应题干的 disparities in wealth。词性上是名词短语，由形容词 relative 修饰名词 deprivation，按题干 “The theory of ______” 的结构直接填 relative deprivation。注意该术语只出现在 B 段，若误填 strain theory（紧张理论），则与题干“财富与社会地位差异”这一落点不符——紧张理论强调的是“无法通过合法手段达成社会认可目标”。",
          "traps": [
            "注意不要填 strain theory：虽然同为 B 段出现的理论，但紧张理论的要点是“无法通过合法手段实现社会认可目标”，与题干的“财富和社会地位感知差异”不匹配，且题干已排除专有名词线索（未出现 Merton）。",
            "注意字数与拼写：答案为两个词 relative deprivation，符合 NO MORE THAN TWO WORDS；不要写成 relational deprivation 或 relative privation 这类形近错误。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 37–40 选择题（四选一）",
      "mode": "per_question",
      "questionRange": {
        "start": 37,
        "end": 40
      },
      "items": [
        {
          "questionId": "q37",
          "questionNumber": 37,
          "stem": "Which statement best describes the author's view of crime in relation to social and psychological factors?",
          "translation": "下列哪一项最能描述作者对犯罪与社会及心理因素之间关系的看法？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "crime cannot be attributed to a single factor but must be understood as the result of a confluence of social, economic, and psychological variables."
          },
          "synonyms": [
            "正确选项 C 的 “Both social and psychological factors interact to create a complex cause” 同义替换为原文 “a confluence of social, economic, and psychological variables”",
            "原文 “cannot be attributed to a single factor”（不能归因于单一因素）对应选项 C 所说的“复杂的成因”",
            "原文 “The intersection of socioeconomic and psychological factors creates a complex web of causality”（两者的交叉形成复杂的因果网络）对应选项 C 的 “interact”"
          ],
          "locatingTip": "定位：题干问的是作者的整体观点（author's view），这类主旨型选择题应优先看结论段 F 段，尤其是 “The intersection of socioeconomic and psychological factors creates a complex web of causality” 与 “crime cannot be attributed to a single factor …” 这两句总结性表述。确定答案技巧：先用自己的话总结原文立场（多因交叉、不可简化为单因），再逐项与选项比对，凡是把原因单一化、或把两个因素排出高低、或全盘否定某一因素的选项都与原文冲突，只有 C 与 “confluence of social, economic, and psychological variables” 完全吻合。",
          "analysis": "F 段是全文结论段，作者先指出 “The intersection of socioeconomic and psychological factors creates a complex web of causality that is difficult to disentangle”，随后用定位句总结：“crime cannot be attributed to a single factor but must be understood as the result of a confluence of social, economic, and psychological variables.”（犯罪不能被归因于单一因素，而应被理解为社会、经济与心理变量共同作用的结果。）这一结论与前文结构完全呼应：B、C 段讲社会经济因素，D、E 段讲心理因素（个性特征、认知扭曲、社会学习等），F 段把两条线合并。选项 C 说的 “Both social and psychological factors interact to create a complex cause for criminal behavior” 正是 “confluence”（汇合）与 “interact in complex ways”（A 段用语）的同义表达；最后一段的 “crime is not merely a product of individual failings or moral weakness” 也再次确认了多因论立场，因此 C 正确。",
          "traps": [
            "选项 A 错误：A 说犯罪“只由心理因素造成（solely caused by psychological factors）”。原文虽然用 D、E 两段讨论心理因素，但 F 段明确说犯罪是社会经济剥夺与心理病理的“复杂相互作用”，A 段也强调社会经济与心理两类驱动因素并存；把原因局限于心理因素，与作者的多元立场直接冲突，也重犯了题干前面第 28 题所批评的单一归因错误。",
            "选项 B 错误：B 说社会经济贫困对弱势社区的犯罪率“没有显著影响”（has no significant effect）。B 段明确指出贫困、缺乏教育与失业 “are crucial in influencing criminal behavior”，C 段也说贫富差距悬殊的社区犯罪率更高，因此 B 与原文事实完全相反。",
            "选项 D 错误：D 说心理因素的影响力“小于”社会不平等（less influential than）。原文从未对两者进行强弱排序，反而强调二者相互交织、难以割裂（“difficult to disentangle”），甚至存在双向因果（贫困导致心理问题，心理问题又使人困于贫困）。因此 D 属于原文未做的比较，不能选。"
          ]
        },
        {
          "questionId": "q38",
          "questionNumber": 38,
          "stem": "What is identified as a significant barrier to criminal rehabilitation in the passage?",
          "translation": "文中指出，阻碍罪犯改造的重要因素是什么？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Such distortions are often deeply ingrained and resistant to change, posing a significant challenge to rehabilitation efforts."
          },
          "synonyms": [
            "题干 “a significant barrier” 同义替换为原文 “a significant challenge”",
            "题干 “criminal rehabilitation” 同义替换为原文 “rehabilitation efforts”",
            "正确选项 A 的 “cognitive distortions that allow criminals to justify their actions” 同义替换为原文 “the cognitive distortions that contribute to criminal conduct” 与 “criminals often harbor rationalizations that justify their actions”"
          ],
          "locatingTip": "定位：题干关键词 rehabilitation 属于低出现频率名词，全文只在 E 段最后一句出现（“possessing a significant challenge to rehabilitation efforts” 所在句），用它一步定位即可。确定答案技巧：题目问的是“什么被认定为改造的重大障碍”，定位句中 “posing a significant challenge to rehabilitation efforts” 的主语是 “Such distortions”，指代前文的 cognitive distortions，因此答案围绕认知扭曲展开；再核对选项，只有 A 同时说了“认知扭曲”和“为其行为找理由（justify）”，与原文 “rationalizations that justify their actions” 逐层对应。",
          "analysis": "E 段专门讨论犯罪思维（criminal thinking）。作者引用 Yochelson 与 Samenow 的研究说明，罪犯常抱有 “rationalizations that justify their actions”（为自己的行为辩解的合理化说法），这种认知失调（cognitive dissonance）让他们把犯罪行为视为可接受甚至必要；随后用定位句收束：“Such distortions are often deeply ingrained and resistant to change, posing a significant challenge to rehabilitation efforts.”（这类扭曲往往根深蒂固、拒斥改变，对改造工作构成重大挑战。）题干问阻碍改造的重要因素，定位句中 “a significant challenge to rehabilitation efforts” 对应题干 “a significant barrier to criminal rehabilitation”，其主语 Such distortions 指代前句的 cognitive distortions，而定语从句 “that justify their actions” 正对应选项 A 的 “that allow criminals to justify their actions”，因此 A 是原文的直接同义改写。",
          "traps": [
            "选项 B 错误：B 说障碍是“缺乏对犯罪的法律威慑（lack of legal deterrents）”。全文没有讨论法律威慑、刑罚强度或司法制度，B 段只提到法律渠道（legal channels）与合法手段（legitimate means）作为对比，并非说威慑缺失，属于原文未提。",
            "选项 C 错误：C 说障碍是“贫困地区缺乏有效社会政策（absence of effective social policies）”。F 段确实建议政策制定者采取多方面策略并关注资源与支持不足，但原文说的是对个人的资源与支持获取困难（a lack of access to resources or support），并未把“社会政策缺位”认定为改造的重大障碍，主体与落点都不对。",
            "选项 D 错误：D 说障碍是“心理治疗在罪犯改造中失败（the failure of psychological treatments）”。原文只强调认知扭曲本身根深蒂固、抗拒改变（resistant to change），从未评价心理治疗的效果，也未说治疗失败，属于偷换概念。"
          ]
        },
        {
          "questionId": "q39",
          "questionNumber": 39,
          "stem": "What is the most likely outcome for individuals who are both mentally ill and impoverished, according to the passage?",
          "translation": "根据文章，既患有心理疾病又处于贫困状态的个体最可能的结果是什么？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Conversely, those suffering from psychological disorders may find themselves trapped in cycles of poverty and crime, unable to break free due to a lack of access to resources or support."
          },
          "synonyms": [
            "题干 “individuals who are both mentally ill and impoverished” 同义替换为原文 “those suffering from psychological disorders” 与 “cycles of poverty”",
            "题干 “the most likely outcome” 对应原文的 “may find themselves trapped”，表示最可能的结果",
            "正确选项 B 的 “remain trapped in cycles of poverty and crime” 是原文 “trapped in cycles of poverty and crime” 的原词复现"
          ],
          "locatingTip": "定位：题干把心理疾病与贫困并列，这正对应 F 段讲“交叉作用”的段落，扫读该段找到以 Conversely 引出的反向因果句即可定位。确定答案技巧：题干问最可能的结果，原文用 may find themselves trapped … unable to break free 给出结果，即“困在贫困与犯罪的循环中无法挣脱”；选项 B 几乎原词复现，直接命中。其余选项都加入了原文没有的转折（福利政策、地位骤升）或错误动机（自我赋权），应予排除。",
          "analysis": "F 段讨论社会经济因素与心理因素的交叉因果。前半句说贫困环境中的长期压力使人更易出现心理健康问题；定位句用 Conversely 引出反向情形：“those suffering from psychological disorders may find themselves trapped in cycles of poverty and crime, unable to break free due to a lack of access to resources or support.”（患有心理障碍的人可能发现自己困在贫困与犯罪的循环中，因缺乏资源或支持而无法挣脱。）题干中 “mentally ill and impoverished” 正对应 “suffering from psychological disorders” 与 “cycles of poverty”，问“最可能的结果”，原文给出的答案就是被困其中、无法挣脱，与选项 B “remain trapped in cycles of poverty and crime” 逐词对应，故 B 正确。",
          "traps": [
            "选项 A 错误：A 说他们最终会通过社会福利项目摆脱困境（escape their condition through social welfare programs）。原文说的是 “unable to break free due to a lack of access to resources or support”，强调资源与支持匮乏导致无法摆脱；F 段末尾的政策建议是作者对政策制定者的呼吁，并未承诺福利项目会让人脱困，A 属于无据推测。",
            "选项 C 错误：C 说他们的社会地位会突然提升（a sudden improvement in their social standing）。原文恰恰相反，认为他们会困在贫困与犯罪的循环中，没有任何“地位突然改善”的表述，属于凭空添加。",
            "选项 D 错误：D 说他们会以非法活动作为自我赋权的方式（a form of self-empowerment）。原文在 B 段提到相对剥夺者犯罪是为了 “restoring their perceived social status”（恢复自己感知到的社会地位），并非“自我赋权”，而且 F 段对“心理疾病加贫困”这一组合给出的结果是“被困住”，不是主动选择犯罪，D 曲解了原文动机。"
          ]
        },
        {
          "questionId": "q40",
          "questionNumber": 40,
          "stem": "What does the author suggest policymakers should focus on to address crime?",
          "translation": "作者建议政策制定者在应对犯罪时应重点关注什么？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Policymakers must therefore adopt multifaceted strategies that not only address the structural inequalities within society but also provide support for individuals suffering from mental health issues."
          },
          "synonyms": [
            "正确选项 C 的 “Implementing broad reforms to tackle both psychological and social causes” 同义替换为原文 “adopt multifaceted strategies that not only address the structural inequalities … but also provide support for individuals suffering from mental health issues”",
            "题干 “policymakers” 与原文 “Policymakers” 原词对应",
            "原文 “a holistic approach that considers both the external social conditions and the internal psychological processes” 对应选项 C 的 “both psychological and social causes”"
          ],
          "locatingTip": "定位：题干有专有名词 policymakers，全文只在 F 段末尾出现，用这个词一步定位到最后两句。确定答案技巧：定位句中 “not only … but also …” 的并列结构是关键——两方面（社会结构不平等与心理健康支持）都要抓；先用这个并列结构排除只抓一头的 A 与 B，再排除原文从未提及的惩罚性措施 D，剩下 C 即答案。",
          "analysis": "F 段结尾是全文的政策建议。作者先提出 “Addressing the root causes of criminal behavior requires a holistic approach that considers both the external social conditions and the internal psychological processes that contribute to deviance.”（解决犯罪根源需要兼顾外部社会条件与内部心理过程的整体性方案），随后用定位句具体说明：“Policymakers must therefore adopt multifaceted strategies that not only address the structural inequalities within society but also provide support for individuals suffering from mental health issues.”（政策制定者必须采取多方面策略，既处理社会中的结构性不平等，也为有心理健康问题的人提供支持。）题干的 “focus on” 与 “multi-faceted strategies” 对应，选项 C “Implementing broad reforms to tackle both psychological and social causes of crime”（实施广泛改革以同时应对犯罪的心理与社会成因）正是这句的同义概括，因此 C 正确。",
          "traps": [
            "选项 A 错误：A 说“只针对罪犯的心理健康问题（Exclusively addressing mental health issues）”。原文用 not only … but also 的结构要求同时处理社会结构不平等与心理健康支持，Exclusively（仅仅）与原文的双管齐下相冲突，只抓心理一头属于片面理解。",
            "选项 B 错误：B 说“优先推进社会改革、改善经济条件（Prioritizing social reform by improving economic conditions）”。这同样只覆盖了 “address the structural inequalities” 这一半，忽略了 “provide support for individuals suffering from mental health issues”，与原文 multifaceted / holistic 的要求不符。",
            "选项 D 错误：D 说“对违法者采取惩罚性措施以威慑犯罪（punitive measures to deter criminal behavior）”。全文从未提出惩罚或威慑作为对策，作者强调的是 “Addressing the root causes of criminal behavior”（解决犯罪根源），D 与原文的方向完全相反。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
