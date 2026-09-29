(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-227", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-227",
  "meta": {
    "examId": "p1-high-227",
    "title": "The Whale Goes to Court 鲸鱼油",
    "category": "P1",
    "noteType": "逐题解析",
    "verifiedSource": "227. P1 - The Whale Goes to Court 鲸鱼油.pdf",
    "verifiedAt": "2026-09-29"
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
          "stem": "An inspection fee on fish oil was introduced in New York in 1818.",
          "translation": "1818 年，纽约开始对鱼油征收检查费。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The case involved an old law requiring those who sold fish oil to pay a fee in order to have their barrels inspected by city officials, and certified."
          },
          "synonyms": [
            "was introduced in 1818 ↔ an old law（时间矛盾）"
          ],
          "locatingTip": "用 New York、1818 和 inspection fee 定位首段，再判断年份修饰的是案件还是法律。",
          "analysis": "1818 是案件发生的年份。原文称收费依据为 an old law，说明它在案件发生前已存在；题干却说这项检查费于 1818 年才引入，与原文矛盾，选 FALSE。",
          "traps": [
            "不能把案件发生的年份当成收费制度设立的年份。原文的 old 已明确否定“当年新设”，不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Samuel Judd argued that the inspection fee should exclude whale oil.",
          "translation": "塞缪尔·贾德（Samuel Judd）主张检查费不应把鲸鱼油包括在内。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "claiming that no inspection was necessary because it was whale oil, and whales were not fish."
          },
          "synonyms": [
            "argued ↔ claiming",
            "exclude whale oil ↔ no inspection was necessary"
          ],
          "locatingTip": "定位 Samuel Judd 拒缴费用的理由，核对其主张。",
          "analysis": "Judd 认为鲸不是鱼，因此鲸鱼油不需要按鱼油规定接受检查、缴纳费用。这与题干“检查费应排除鲸鱼油”一致，选 TRUE。本题判断的是他的主张，不是法律最终怎样解释。",
          "traps": [
            "不要因为政府不同意 Judd 就选 FALSE；题干问的是 Judd 的立场。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Judd had been in trouble with city officials before the inspection fee disagreement.",
          "translation": "在检查费纠纷之前，贾德（Judd）就曾与市政官员有过节。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "The state disagreed, and so a date was set for a court to decide not a point of law, but the answer to a more fundamental question: is a whale a fish?"
          },
          "synonyms": [
            "inspection fee disagreement ↔ refused to pay / The state disagreed"
          ],
          "locatingTip": "定位首段争议，重点检查 before 所要求的更早经历。",
          "analysis": "首段介绍的是这次拒付检查费及政府反对的经过，没有说明 Judd 此前是否与市政官员发生过纠纷。既不能推出有过，也不能推出没有，选 NOT GIVEN。所列引文用于定位本次事件，并非更早经历的证据。",
          "traps": [
            "文中未提到以往纠纷不等于明确说从未发生，不能选 FALSE。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Many New Yorkers were interested in the court case at the time.",
          "translation": "当时许多纽约人对这起案件很感兴趣。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Indeed, the public debate in New York sparked off by the trial was sensational."
          },
          "synonyms": [
            "Many New Yorkers were interested ↔ public debate ... was sensational"
          ],
          "locatingTip": "在第二段寻找案件引起的社会反响。",
          "analysis": "案件在纽约引发了轰动的公众讨论。public debate 和 sensational 共同说明公众广泛关注此案，与题干一致，选 TRUE。",
          "traps": [
            "sensational 在这里说明讨论轰动，不是说公众对科学分类意见一致。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Traditionally, non-human creatures had been classified in one of three groups.",
          "translation": "传统上，非人类生物一直被归入三类中的一类。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "For as long as anyone could remember, all non-human creatures had been organised according to the categories of birds, beasts and fish."
          },
          "synonyms": [
            "Traditionally ↔ For as long as anyone could remember",
            "three groups ↔ birds, beasts and fish"
          ],
          "locatingTip": "定位 non-human creatures，数清原文列出的类别。",
          "analysis": "原文明列 birds、beasts、fish 三类，并用 For as long as anyone could remember 表示这种分类由来已久。因此题干对传统三分类的概括正确，选 TRUE。",
          "traps": [
            "后文的林奈分类体系是另一套新体系，不能用它否定这里的传统分类。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Generally speaking, ordinary people thought fish were the lowest form of life.",
          "translation": "总体而言，普通人认为鱼是最低等的生命形式。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "For the average person the answer seemed perfectly obvious: whales swam in the sea and therefore they were fish."
          },
          "synonyms": [
            "ordinary people ↔ the average person",
            "lowest form of life 无对应信息"
          ],
          "locatingTip": "先找 ordinary people 的同义表达，再核对 lowest 这一等级判断是否出现。",
          "analysis": "第二段只说普通人因为鲸生活在海里而把它归为鱼类，没有说他们认为鱼是最低等生命。第六段的 a lower place for their own kind 指人类在接受新分类后的位置，既不是鱼类排名，也不是最低等这一最高级判断。故选 NOT GIVEN。",
          "traps": [
            "分类不等于等级排序；lower（较低）不等于 lowest（最低）。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Whales were excluded from the Linnaean system in 1818.",
          "translation": "1818 年，鲸鱼被排除在林奈分类体系之外。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Barely half a century old in 1818, the Linnaean system controversially classified whales as mammals because they shared two mammalian characteristics: they were warm-blooded and breathed air."
          },
          "synonyms": [
            "excluded ↔ classified whales as mammals（相反）"
          ],
          "locatingTip": "定位 Linnaean system 和 1818，查看体系如何处理鲸。",
          "analysis": "原文明说林奈体系将鲸归为 mammals（哺乳动物），理由是恒温并呼吸空气。鲸已被纳入该体系，只是没有被归为鱼类。题干说鲸被排除在体系之外，选 FALSE。",
          "traps": [
            "没有归入鱼类，不等于没有纳入分类体系。"
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
          "stem": "Samuel Mitchill worked as a congressman and a 8 ________",
          "translation": "塞缪尔·米奇尔（Samuel Mitchill）曾担任国会议员和 8 ________。",
          "answer": "lecturer",
          "wordClass": "单数可数名词，表示职业；空前已有 a。",
          "locating": {
            "paragraph": "4",
            "quote": "Mitchill was a renowned natural history lecturer at the college of Physicians and Surgeons who liked to dare his students to test his knowledge of the natural world."
          },
          "synonyms": [
            "worked as ... a ↔ was a ... lecturer"
          ],
          "locatingTip": "在第四段 Samuel Mitchill 的人物介绍中，找 congressman 以外的职业名词。",
          "analysis": "第四段先称 Mitchill 为 congressman，随后明确说他是 natural history lecturer（自然史讲师）。空前已有 a，且题目限 ONE WORD ONLY，取原文职业名词 lecturer。旧答案 scientist 既不是此处的职业原词，也未出现在这篇原文中，不能作为本题答案。",
          "traps": [
            "不要把人物属于 scientific community 概括成 scientist；填空题要求从原文选词。",
            "natural history lecturer 超过一个词，只填 lecturer。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "William Sampson called 9 ________ as witnesses in order to appeal to the common sense of the jury.",
          "translation": "威廉·桑普森（William Sampson）请来了 9 ________ 作为证人，以迎合陪审团的常识。",
          "answer": "whalers",
          "wordClass": "复数可数名词，表示捕鲸人。",
          "locating": {
            "paragraph": "5",
            "quote": "Lead counsel William Sampson turned the trial into a contest between scientific learning and common sense, by asking plain-spoken whalers to make their case before the jury."
          },
          "synonyms": [
            "called ... as witnesses ↔ asking ... to make their case before the jury"
          ],
          "locatingTip": "定位第五段 William Sampson，找 asking 后表示证人身份的名词。",
          "analysis": "Sampson 请 plain-spoken whalers（说话直白的捕鲸人）向陪审团陈述，以诉诸常识。题干要求证人的身份，答案为 whalers，保留原文复数。plain-spoken 是修饰语，不属于所需答案。",
          "traps": [
            "不要填 jury；陪审团是听取陈述的人，不是被召来的证人。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "New Yorkers disliked Mitchill because his ideas came from 10 ________.",
          "translation": "纽约人讨厌米奇尔（Mitchill），因为他的想法来自 10 ________。",
          "answer": "Europe",
          "wordClass": "地名专有名词，表示欧洲。",
          "locating": {
            "paragraph": "6",
            "quote": "The smooth-talking Sampson then claimed Mitchill's beliefs had their origin in Europe - something he rightly judged would infuriate the citizens of always-independent New York."
          },
          "synonyms": [
            "ideas ↔ beliefs",
            "came from ↔ had their origin in",
            "disliked ↔ infuriate"
          ],
          "locatingTip": "在第六段寻找 Mitchill 观点的来源地点。",
          "analysis": "Sampson 声称 Mitchill 的信念源自 Europe，并判断这会激怒强调独立的纽约人。题干以 came from 改写 had their origin in，空格需填地点 Europe。",
          "traps": [
            "Europe 是来源地；New York 是受众所在城市。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "In the end it was statements from local 11 ________, not Mitchill's testimony which helped Judd win.",
          "translation": "最终帮助贾德（Judd）胜诉的，是当地 11 ________ 的陈述，而不是米奇尔（Mitchill）的证词。",
          "answer": "merchants",
          "wordClass": "复数可数名词，表示商人。",
          "locating": {
            "paragraph": "7",
            "quote": "In New York's markets, the merchants implicitly understood that whale oil and fish oil were not the same:"
          },
          "synonyms": [
            "local ↔ In New York's markets",
            "statements ↔ testimony",
            "helped Judd win ↔ led to Judd's victory"
          ],
          "locatingTip": "定位第七段 Ultimately，追踪获胜所依靠的 testimony 来自谁。",
          "analysis": "该段先说胜诉依靠另一个领域的证词，再介绍纽约市场里的 merchants 如何区分两种油，最后用 this testimony 回指这些说法。陈述的发出者是当地商人，填 merchants。markets 是地点，不能作证人身份。",
          "traps": [
            "保留 merchants 的复数；不要误填市场地点 markets。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Whale oil made a good 12 ________ because it was clean.",
          "translation": "鲸鱼油是一种很好的 12 ________，因为它很清洁。",
          "answer": "fuel",
          "wordClass": "名词，表示燃料；原文为 a fuel，空前已有 a。",
          "locating": {
            "paragraph": "7",
            "quote": "whale oil could be used as a fuel for lamps because it could be burned without giving off smoke"
          },
          "synonyms": [
            "made a good ... ↔ could be used as a ...",
            "clean ↔ without giving off smoke"
          ],
          "locatingTip": "在第七段鲸鱼油和鱼油的对比中，寻找鲸鱼油的用途及清洁的原因。",
          "analysis": "鲸鱼油可作为灯用燃料，因为燃烧时不冒烟。题干 clean 概括了 without giving off smoke，made a good 后需要用途名词 fuel。空前已有 a，只填 fuel，不填灯具名称 lamps。",
          "traps": [
            "不要填 fish oil 的用途 tanning leather；题干主语是 whale oil。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Judd's case is relevant today, e.g. in the debate about Earth's 13 ________.",
          "translation": "贾德的案子与今天仍然相关，例如在关于地球 13 ________ 的争论中。",
          "answer": "climate",
          "wordClass": "名词，表示气候；位于所有格 Earth's 之后。",
          "locating": {
            "paragraph": "8",
            "quote": "Whether the issue today is the effects of human activity on the climate of this planet, or one of many other contemporary topics, the legacy of Judd's case continues to be of relevance."
          },
          "synonyms": [
            "Earth's climate ↔ the climate of this planet",
            "relevant today ↔ continues to be of relevance"
          ],
          "locatingTip": "定位末段的 today 与 relevance，寻找作者举出的当代争论例子。",
          "analysis": "作者以人类活动对地球气候的影响为例，说明科学专家与公众意见之间的争论仍有现实意义。the climate of this planet 被题干改写成 Earth's climate，所以填 climate。",
          "traps": [
            "climate change 超出 ONE WORD ONLY，且 change 不是该定位句中的原词。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
