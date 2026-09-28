(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-low-55", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-low-55",
  "meta": {
    "examId": "p3-low-55",
    "title": "Improving Patient Safety 药品包装设计",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–32 人物匹配（Matching：从 A–D 中为每句陈述选出对应的人物或机构）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 32
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "The elderly would benefit from drug containers that do not require force to open them.",
          "translation": "老年人会从那些不需要用力就能打开的药品容器中受益。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Many child-resistant packs are based on strength but older people may have the same level of strength as a child,' he explained, and suggested that better designs could rely on cognitive skills (e.g. removing the lid using a three-step process)."
          },
          "synonyms": [
            "“The elderly” 同义替换为原文的 “older people”",
            "“drug containers that do not require force to open them” 与原文 “Many child-resistant packs are based on strength” 正相反，Mawle 认为应改为依赖认知能力（could rely on cognitive skills）来设计，即不必靠力气开启",
            "“would benefit” 对应原文语境中所说的老年人 “are ... blocked by child-proof closures”（被防儿童开启装置挡住），获益即解除这种障碍"
          ],
          "locatingTip": "定位：题干关键词是 The elderly 与 open，对应原文第 4 段中 Richard Mawle 的话，那里出现 older people 与 child-resistant packs。确定答案技巧：题干说的是“老人开不动需要用力气的容器”，而原文 Mawle 明确指出 “Many child-resistant packs are based on strength but older people may have the same level of strength as a child”，即老年人和儿童一样力气小，因此他建议改用依赖认知能力的开盖设计（如三步开盖法）。说话人正是 Richard Mawle，故选 C。做人物匹配题时先锁定人名，再用引号内的话核对观点，不要凭段首的机构名乱选。",
          "analysis": "第 4 段先由 Child Accident Prevention Trust 给出数据（70% 因疑似中毒入院的儿童吞下过药物），随后引出 “Richard Mawle, a freelance product designer who feels it is not just children who are blocked by child-proof closures”。他解释道：许多防儿童开启的包装是靠力气（based on strength）来实现防开启的，但老年人可能和儿童力气相当（older people may have the same level of strength as a child），因此他建议更好地设计可以依赖认知技能，比如用一个三步流程来打开瓶盖。题干 “The elderly would benefit from drug containers that do not require force to open them” 正是把 older people 改写成 The elderly，把 not require force 改写成 not based on strength（改用 cognitive skills 开启），观点与 C 项 Richard Mawle 完全一致，故答案为 C。注意 NB 提示字母可重复使用，所以 D 与 C 在同组中多次出现是正常的。",
          "traps": [
            "为什么不选 A（Thea Swayne）：她的观点集中在字形字号、包装反光与颜色标识上（第 3、6 段），从未谈到老年人开启药瓶所需的力量。",
            "为什么不选 B（The Child Accident Prevention Trust）：该机构提供的是儿童误吞药物的统计数据（70%），它评价的对象是防儿童开启瓶盖的效果，而不是老年人的开盖力量。",
            "为什么不选 D（Karel van der Waarde）：他谈的是盲文法规以及监管机构处理包装信息的能力（第 7 段），与老年人开盖无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "Adapting packaging for the blind may disadvantage people who can see.",
          "translation": "为盲人调整包装（加印盲文）可能会给视力正常的人带来不利影响。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "it is not known how much visually impaired patients will benefit nor how much the reading of visually able patients will be impaired"
          },
          "synonyms": [
            "“the blind” 同义替换为原文的 “visually impaired patients”",
            "“people who can see” 同义替换为原文的 “visually able patients”",
            "“Adapting packaging for the blind” 对应原文的 “packaging to include the name of the medicine in Braille”",
            "“may disadvantage” 同义替换为原文的 “will be impaired”（阅读受到影响）"
          ],
          "locatingTip": "定位：题干中的 the blind 与 sight 相关，全文只有第 7 段提到盲文（Braille）与视力障碍者，专有名词 Braille 与 Karel van der Waarde 都是很好的定位锚点。确定答案技巧：原文用 not known ... how much ... benefit nor how much ... impaired 这一双重结构，前半句讲视力障碍者获益多少不明，后半句讲视力正常者阅读受损多少不明，一利一弊并存，正对应题干“为盲人改包装可能不利于看得见的人”。说话人是 Karel van der Waarde，故选 D。注意题干中的 may 与原文 not known 语气一致，都是不确定的口吻，这也是判断依据之一。",
          "analysis": "第 7 段写道，现行英国法规要求药品包装上必须以盲文印出药名，但 “according to Karel van der Waarde, a design consultant to the pharmaceutical industry, ‘it is not known how much visually impaired patients will benefit nor how much the reading of visually able patients will be impaired'”。也就是说，这项为盲人（visually impaired patients）所作的调整究竟能让盲人获益多少尚无定论，同时它会让视力正常者（visually able patients）的阅读受到多大影响也无定论。题干把这一双重不确定的表达概括为 “Adapting packaging for the blind may disadvantage people who can see”，其中 the blind 对应 visually impaired patients，people who can see 对应 visually able patients，may disadvantage 对应 will be impaired，观点出自 Karel van der Waarde，故答案为 D。",
          "traps": [
            "为什么不选 A（Thea Swayne）：她关注的是药品名称或说明书因字号小、包装反光而被误读，以及包装颜色与剂量的关系，没有涉及盲文与视障/视力正常人群的利弊权衡。",
            "为什么不选 B（The Child Accident Prevention Trust）：该组织只提供了儿童误吞药物的比例数据，与盲文法规无关。",
            "为什么不选 C（Richard Mawle）：他的两处发言分别针对儿童防护盖所需力量与药品说明书的信息排列顺序，不涉及盲文对视障与视力正常者的影响。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Specially designed containers have not been able to eliminate drugs being swallowed accidentally.",
          "translation": "经过专门设计的容器并未能彻底杜绝药物被误吞的情况。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "According to the Child Accident Prevention Trust, 70% of children admitted to hospital with suspected poisoning have swallowed medicines, and although child-resistant lids have helped, they are not yet fully effective."
          },
          "synonyms": [
            "“Specially designed containers” 同义替换为原文的 “child-resistant lids”（防儿童开启的瓶盖）",
            "“have not been able to eliminate” 同义替换为原文的 “they are not yet fully effective”（尚未完全有效）",
            "“drugs being swallowed accidentally” 对应原文的 “children admitted to hospital with suspected poisoning have swallowed medicines”"
          ],
          "locatingTip": "定位：题干关键词是 containers、swallowed，而全文提到“被吞下”的只有第 4 段开头，那里同时出现机构名 Child Accident Prevention Trust 与 child-resistant lids。确定答案技巧：题干说专门设计的容器未能“消除”误吞，原文对应句的结构是 although A have helped, they are not yet fully effective（尽管有效，却仍不完全有效），让步结构中的 not yet fully effective 正对应题干的 have not been able to eliminate，发出这一评价的是 Child Accident Prevention Trust，故选 B。看到 although 引导的让步从句要特别注意主句，它才是作者真正要强调的信息。",
          "analysis": "第 4 段首句引出儿童保护话题：“Child protection is another area that gives designers opportunities to improve safety.” 紧接着给出机构的观点：“According to the Child Accident Prevention Trust, 70% of children admitted to hospital with suspected poisoning have swallowed medicines, and although child-resistant lids have helped, they are not yet fully effective.”（据儿童事故预防信托会统计，因疑似中毒入院的儿童中有 70% 吞下过药物；尽管防儿童开启的瓶盖起了作用，但它们尚未完全有效）。题干中的 Specially designed containers 对应原文的 child-resistant lids，have not been able to eliminate drugs being swallowed accidentally 对应 they are not yet fully effective 与 70% 的比例数据，发布这一说法的正是 B 项 Child Accident Prevention Trust，故答案为 B。",
          "traps": [
            "为什么不选 A（Thea Swayne）：她谈的是字形与包装反光导致误读、以及为剂量指定颜色可能让人不看文字，没有评价防儿童开启装置的效果。",
            "为什么不选 C（Richard Mawle）：他指出的问题是防儿童开启包装靠的是力气，建议改用认知能力开启，虽然也涉及 child-proof closures，但那是“怎样改进开启方式”，并没有给出“未能杜绝误吞”的数据或评价。",
            "为什么不选 D（Karel van der Waarde）：他的发言全部围绕盲文标签与监管机构的资源问题。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "Designers have to consider how drugs are used in the home.",
          "translation": "设计者必须考虑药品在家庭环境中是如何被使用的。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "real situations in which medicines are used include a parent giving a cough medicine to a child in the middle of the night; packaging should be designed for moments such as these rather than for the ideal world of a hospital."
          },
          "synonyms": [
            "“how drugs are used in the home” 对应原文的 “a parent giving a cough medicine to a child in the middle of the night”",
            "“have to consider” 同义替换为原文的 “packaging should be designed for”",
            "“in the home” 与原文的 “rather than for the ideal world of a hospital” 形成居家与医院环境的对照"
          ],
          "locatingTip": "定位：题干关键词是 home 与 how drugs are used，原文第 3 段末句出现 “real situations in which medicines are used”，并把场景具体化为“半夜给孩子喂咳嗽药”，正是家庭使用场景。确定答案技巧：题干说设计者必须考虑居家使用，原文末尾以 should be designed for moments such as these rather than for the ideal world of a hospital 直接呼应，说明设计应以家庭等真实使用场景为出发点，而不是理想化的医院环境。这段话出自 Thea Swayne（according to Swayne），故选 A。注意 rather than 结构提示的对比是“家庭对医院”，抓住这个对立就能确认答案。",
          "analysis": "第 3 段围绕 Thea Swayne 的著作 Information Design for Patient Safety 展开，先列举外观或读音相似的药容易混淆、字号小与银箔反光会导致误读、一名患者被误从脊柱（intrathecally）而非静脉（intravenously）注射的悲剧等设计问题。段末写道：“Furthermore, according to Swayne, real situations in which medicines are used include a parent giving a cough medicine to a child in the middle of the night; packaging should be designed for moments such as these rather than for the ideal world of a hospital.”（再者，按 Swayne 所说，药品的真实使用情境包括父母半夜给孩子喂咳嗽药；包装应当针对诸如此类的时刻来设计，而不是针对理想化的医院环境）。题干 “Designers have to consider how drugs are used in the home” 中的 home 对应 a parent giving a cough medicine to a child in the middle of the night 与 rather than ... a hospital，have to consider 对应 should be designed for，提出该观点的人是 A 项 Thea Swayne，故答案为 A。",
          "traps": [
            "为什么不选 B（Child Accident Prevention Trust）：该机构在第 4 段只提供儿童误吞药物的统计数据，不涉及药品使用场景的设计考虑。",
            "为什么不选 C（Richard Mawle）：他讨论的是开启瓶盖所需的力量与说明书信息排列，虽然也提到说明书，但没有把家庭使用场景作为设计依据提出。",
            "为什么不选 D（Karel van der Waarde）：他谈的是盲文法规与监管机构缺少资源的问题。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "Governing bodies need to compare different drug containers rather than studying individual ones.",
          "translation": "监管机构需要把不同的药品包装放在一起比较，而不是孤立地研究单个包装。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "They do not look at the use of packaging in a practical context – they only see one box at a time and not several together as pharmacists would do"
          },
          "synonyms": [
            "“Governing bodies” 同义替换为原文的 “regulatory authorities”（监管机构）",
            "“compare different drug containers” 同义替换为原文的 “see several together as pharmacists would do”",
            "“rather than studying individual ones” 同义替换为原文的 “they only see one box at a time”"
          ],
          "locatingTip": "定位：题干关键词是 Governing bodies（机构）与 compare，回到原文第 7 段末尾，Karel van der Waarde 提到 many regulatory authorities，并用 they 回指这些机构。确定答案技巧：题干要求“对比多个包装，而不是只看单个”，原文对应句为 they only see one box at a time and not several together as pharmacists would do，其中 one box at a time 即“逐个研究”，not several together 即“没有两者对比”；再往前一句还指出这些机构 do not have the resources to handle packaging information properly。发表该批评的是 Karel van der Waarde，故选 D。做题时要注意代词 they 的指代对象是 regulatory authorities，这正是题干的 Governing bodies。",
          "analysis": "第 7 段后半部分集中写 Karel van der Waarde 的看法：“Van der Waarde is sceptical about current legislation and says that many regulatory authorities do not have the resources to handle packaging information properly. ‘They do not look at the use of packaging in a practical context – they only see one box at a time and not several together as pharmacists would do,' he said.”（van der Waarde 对现行立法持怀疑态度，并称许多监管机构没有足够资源妥善处理包装信息。他说：“他们不从实际使用情境来看包装，一次只看一个药盒，而不像药剂师那样把几个放在一起看。”）。题干所说的 Governing bodies 即 regulatory authorities，need to compare different drug containers 即 see several together，rather than studying individual ones 即 one box at a time，观点出自 D 项 Karel van der Waarde，故答案为 D。",
          "traps": [
            "为什么不选 A（Thea Swayne）：她评论的是包装设计本身（混淆、误读、颜色使用），没有谈及监管机构的审查方式。",
            "为什么不选 B（Child Accident Prevention Trust）：该组织提供儿童中毒数据，与监管机构如何审查包装无关。",
            "为什么不选 C（Richard Mawle）：他谈的是开启包装所需的力量以及说明书的信息顺序，未涉及监管机构。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "Information provided with medicine is not listed in the right order.",
          "translation": "随药品提供的信息排列顺序不当。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "There can be an awful lot of junk at the beginning of PILs. For example, why are company details towards the beginning of a leaflet when what might be more vital for the patient is that the medicine should not be taken with alcohol?"
          },
          "synonyms": [
            "“Information provided with medicine” 同义替换为原文的 “PILs”（patient information leaflets）与 “leaflet”",
            "“is not listed in the right order” 对应原文的 “an awful lot of junk at the beginning” 以及 “why are company details towards the beginning ... what might be more vital”",
            "“the right order” 的反面由原文 “company details towards the beginning” 与 “what might be more vital for the patient” 的对比体现：次要信息排在前面，关键警示排在后面"
          ],
          "locatingTip": "定位：题干的 Information provided with medicine 指药品说明书，全文只有第 5 段专门讨论 PILs（patient information leaflets）的内容排列，且该段是 Richard Mawle 的发言。确定答案技巧：原文用疑问句表达批评——为何公司信息（company details）出现在说明书的开头（towards the beginning），而对患者更重要的“不得与酒同服”（should not be taken with alcohol）却排在后面；这正是题干“信息未按正确顺序排列”的意思，说话人是 Richard Mawle，故选 C。注意第 1 段虽然也出现 PILs，但那里只是引出话题，并未评价信息顺序，不要误选。",
          "analysis": "第 5 段写道：“Mawle also worked on a project which involved applying his skills to packaging and PILs. Commenting on the information presented, he said: ‘There can be an awful lot of junk at the beginning of PILs. For example, why are company details towards the beginning of a leaflet when what might be more vital for the patient is that the medicine should not be taken with alcohol?'”（Mawle 还参与过一个把设计技能用于包装与药品说明书的项目。谈到说明书所呈现的信息时他说：“说明书开头常常有一大堆没用的东西。比如，为什么公司信息放在说明书靠前的位置，而对患者可能更重要的‘本品不得与酒同服’却不在前面？”）。题干把这一批评概括为 “Information provided with medicine is not listed in the right order”，即随药提供的信息排序不合理：次要的公司信息占据开头，关键用药警示反而靠后，提出者是 C 项 Richard Mawle，故答案为 C。",
          "traps": [
            "为什么不选 A（Thea Swayne）：她在第 3 段谈的是字号、反光与相似药名造成的误读，以及处方注射事故，第 6 段谈颜色与剂量的关系，均不涉及说明书信息的排列顺序。",
            "为什么不选 B（Child Accident Prevention Trust）：该组织只提供儿童误吞药物的数据。",
            "为什么不选 D（Karel van der Waarde）：他关心的是盲文标签与监管机构的审查资源，不是说明书内容的先后次序。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 33–37 摘要选词填空（Complete the summary using the list of words, A–G）",
      "mode": "per_question",
      "questionRange": {
        "start": 33,
        "end": 37
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "First, a proposal is written by the 33 ________.",
          "translation": "首先，由 ________ 撰写提案。",
          "answer": "marketing team",
          "wordClass": "名词短语（核心名词 team 受名词 marketing 前置修饰；在题干被动句 a proposal is written by … 中作介词 by 的宾语，表示撰写方案的一方；空格前已有定冠词 the，照抄短语 marketing team，不加冠词、不改单复数）",
          "locating": {
            "paragraph": "2",
            "quote": "The marketing team prepares the initial brief and the designers come up with six or seven designs."
          },
          "synonyms": [
            "“a proposal is written by” 同义替换为原文的 “prepares the initial brief”，原文主动语态改写为题干的被动语态",
            "“a proposal” 同义替换为原文的 “the initial brief”（初步说明/需求简报）",
            "“First” 对应原文中该句作为整段流程的第一步出现（其前一句刚交代非处方药包装通常委托外部设计团队）"
          ],
          "locatingTip": "定位：摘要小标题是 Over-the-counter drugs，回到原文第 2 段专讲非处方药包装流程的几句：“The marketing team prepares the initial brief and the designers come up with six or seven designs.” 确定答案技巧：题干说提案（proposal）由谁撰写，原文写的是 prepares the initial brief（拟定初步说明），主语是 The marketing team。注意区分“写提案”的主体与“出设计”的主体：前半句是 marketing team，后半句才是 designers，因此填 marketing team，对应选项 E。",
          "analysis": "第 2 段交代非处方药（over-the-counter medicines）包装设计流程：“For packaging design of over-the-counter medicines ... these are usually commissioned from an external design team. The marketing team prepares the initial brief and the designers come up with six or seven designs. Two or three of these are then tested on a consumer group.”（这类包装通常委托外部设计团队来做。市场团队拟定初步说明，设计者们提出六七套设计方案，其中两三套随后在消费者群体中进行测试）。题干把这一流程压缩为三步：先由谁写提案、再由谁出设计、最后给谁看。第一步对应 prepares the initial brief，主语为 The marketing team，因此空格填 marketing team（选项 E）。",
          "traps": [
            "为什么不选 F pharmaceutical industry：它只是第 2 段用来限定“制药行业”的大范围概念，不是撰写 brief 的具体执行者。",
            "为什么不选 G pharmacists：药剂师在第 1 段是担心现有设计问题的人，与拟定设计说明无关。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "Then several designs are produced by the 34 ________.",
          "translation": "接着，由 ________ 产出若干套设计方案。",
          "answer": "external design team",
          "wordClass": "名词短语（核心名词 team 受 external 与 design 前置修饰；作介词 by 的宾语，表示完成设计工作的一方；空格前已有定冠词 the，照抄 external design team，不加冠词）",
          "locating": {
            "paragraph": "2",
            "quote": "characteristics such as attractiveness and distinguishability are important and so these are usually commissioned from an external design team."
          },
          "synonyms": [
            "“are produced by” 同义替换为原文的 “are usually commissioned from”（通常委托……来做）",
            "“several designs” 对应原文的 “six or seven designs”，即由该团队提出的多套方案",
            "“the external design team” 对应原文的 “an external design team”，只是冠词由不定改为定指"
          ],
          "locatingTip": "定位：仍在这一句的上一句，关键词 external 在全文只出现在第 2 段。确定答案技巧：原文先说非处方药包装“通常委托给外部设计团队（commissioned from an external design team）”，再说市场团队拟定 brief、设计者提出六七套方案，可见“产出设计”的执行者与“承接委托”的是同一方，即 external design team。注意题干用被动语态 are produced by，正好对应原文的被动结构 are usually commissioned from，故填 external design team（选项 C）。",
          "analysis": "第 2 段原文：“For packaging design of over-the-counter medicines, which do not have to be dispensed by a pharmacist but can be bought directly from a sales assistant, characteristics such as attractiveness and distinguishability are important and so these are usually commissioned from an external design team. The marketing team prepares the initial brief and the designers come up with six or seven designs.”（非处方药无需药剂师配药，可直接从售货员处购买，因此吸引力和易辨识等特性很重要，所以这类包装设计通常委托给外部设计团队。市场团队拟定初步说明，设计者们提出六七套方案）。摘要第二步“若干设计方案由谁产出”对应 commissioned from an external design team 与 the designers come up with six or seven designs，即外部设计团队，故填 external design team（选项 C）。同时要利用排除法：后文 prescription-only 部分讲的是 created in-house（公司内部设计团队），不要把两套流程混淆。",
          "traps": [
            "为什么不选 D in-house design team：公司内部团队负责的是处方药（prescription-only products）的设计，摘要此处的限定语是非处方药（Over-the-counter drugs）。",
            "为什么不选 E marketing team：市场团队负责的是拟定 brief，不是产出设计。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "Finally, selected designs are shown to 35 ________.",
          "translation": "最后，入选的设计方案会被展示给 ________。",
          "answer": "consumers",
          "wordClass": "名词（复数形式；作介词 to 的宾语，表示设计被展示给的对象；题干此处不加冠词，须用词表 A 项的复数 consumers，不能用单数）",
          "locating": {
            "paragraph": "2",
            "quote": "Two or three of these are then tested on a consumer group."
          },
          "synonyms": [
            "“are shown to” 同义替换为原文的 “are then tested on”（在……身上做测试）",
            "“selected designs” 对应原文的 “Two or three of these”，即从六七套方案中挑出的两三套",
            "“consumers”（选项 A）对应原文的 “a consumer group”（消费者群体），由群体转指其中的消费者个人"
          ],
          "locatingTip": "定位：接着上一句往下读，第 2 段第三句即 “Two or three of these are then tested on a consumer group.”，关键词 consumer 出现在第 2 段，此处专指非处方药流程中被测试的消费者。确定答案技巧：摘要说“最后把选出的设计给谁看”，原文说的是从六七套方案中挑两三套“在消费者群体中测试”，测试对象就是消费者，故填选项 A consumers。注意题干中 Finally 对应原文的 then、selected designs 对应 Two or three of these，三者合起来表明这里问的就是测试对象。",
          "analysis": "第 2 段第三句：“Two or three of these are then tested on a consumer group.”（其中两三套随后在消费者群体中接受测试）。摘要最后一步写 “Finally, selected designs are shown to 35”，其中 selected designs 对应 Two or three of these，are shown to 对应 are tested on，被测试的对象是 a consumer group，故填 consumers（选项 A）。这里要注意选项给出的是复数名词 consumers，而原文用的是 a consumer group（一个消费者群体），二者指向同一批人，只是表达方式不同：群体名称换成了组成群体的人。",
          "traps": [
            "为什么不选 B design engineers：设计工程师出现在处方的流程里，是接手设计的角色，而不是接受测试的对象。",
            "为什么不选 G pharmacists：药剂师在第 7 段作为与监管机构对照的职业出现，与本题的消费者测试无关。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "The 36 ________ create the design.",
          "translation": "由 ________ 完成设计。",
          "answer": "in-house design team",
          "wordClass": "名词短语（核心名词 team 受 in-house 与 design 前置修饰；在题干句子中作主语，后接复数谓语 create（team 作集合名词）；空格前已有定冠词 the，照抄 in-house design team，保持单数形式）",
          "locating": {
            "paragraph": "2",
            "quote": "In contrast, most designs for prescription-only products are created in-house."
          },
          "synonyms": [
            "“create the design” 同义替换为原文的 “most designs ... are created in-house”",
            "“prescription-only drugs”（摘要小标题）对应原文的 “prescription-only products”",
            "“the in-house design team” 由原文的状语 “in-house” 转写而来，in-house（公司内部的）修饰的正是公司的设计团队"
          ],
          "locatingTip": "定位：摘要第二个小标题 Prescription-only drugs 对应原文第 2 段的 “In contrast, most designs for prescription-only products are created in-house.”确定答案技巧：原文用 in-house 这一状语表示“由公司内部来做”，题干需要的是名词性成分作主语，因此把 in-house 还原成它所修饰的主体 in-house design team。注意 In contrast 是流程转换的信号词，看到它就要把非处方药的做法与处方药的做法分开记忆，避免张冠李戴。",
          "analysis": "第 2 段后半部分写道：“In contrast, most designs for prescription-only products are created in-house. In some cases, this may simply involve the company's design team applying the house design and then handing it over to design engineers rather than testing the design on a consumer group.”（相反，处方药的大多数设计是公司内部完成的。在某些情况下，这不过是公司的设计团队套用公司既有的设计样式，然后将其交给设计工程师，而不对设计做消费者测试）。题干 “The 36 create the design” 对应 are created in-house 与 the company's design team 这两个表述，承担设计工作的就是公司内部的设计团队，故填 in-house design team（选项 D）。这里的关键是把状语 in-house 转换成名词短语，因为题干需要一个主语的施动者。",
          "traps": [
            "为什么不选 C external design team：外部设计团队承接的是非处方药的设计，与本题处方药的 in-house 流程相反。",
            "为什么不选 F pharmaceutical industry：制药行业是整篇文章的背景范围，不是具体执行设计的团队。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "The design is then passed to 37 ________.",
          "translation": "随后设计被交给 ________。",
          "answer": "design engineers",
          "wordClass": "名词（复数形式；核心名词 engineers 受名词 design 前置修饰；作介词 to 的宾语，与被动结构 is passed to … 搭配，表示接手设计的专业人员；题干此处不加冠词，须用复数 design engineers）",
          "locating": {
            "paragraph": "2",
            "quote": "applying the house design and then handing it over to design engineers rather than testing the design on a consumer group."
          },
          "synonyms": [
            "“is then passed to” 同义替换为原文的 “handing it over to”（把设计移交出去）",
            "“The design” 对应原文的 “the house design” 与代词 “it”",
            "“rather than testing the design on a consumer group” 说明接手的对象不是消费者，而是设计工程师"
          ],
          "locatingTip": "定位：紧接第 36 题所在的句子往下看，原文写 “then handing it over to design engineers”，hand over 与题干的 pass to 同义，关键词 engineers 在全文只此处出现。确定答案技巧：题干说设计随后被交给谁，原文说公司设计团队套用既有设计后“把它交给设计工程师（handing it over to design engineers）”，而不是拿去给消费者测试，因此填 design engineers（选项 B）。注意 than 后面提到的 a consumer group 是否定项（rather than），不要误填 consumers。",
          "analysis": "原文第 2 段：“In some cases, this may simply involve the company's design team applying the house design and then handing it over to design engineers rather than testing the design on a consumer group.”（在某些情况下，这不过是公司的设计团队套用公司既有的设计样式，然后把它交给设计工程师，而不是对设计做消费者测试）。题干 “The design is then passed to 37” 中 passed to 对应 handing it over to，The design 对应 the house design 与代词 it，移交的接收方是 design engineers，故填 design engineers（选项 B）。本题的干扰点在于句末的 a consumer group 被 rather than 否定了，说明处方的流程中并不把设计交给消费者看，这正是与非处方药流程的关键区别。",
          "traps": [
            "为什么不选 A consumers：原句用 rather than testing the design on a consumer group 明确否定了消费者测试这一步。",
            "为什么不选 D in-house design team：公司内部团队在本题中是交接的起点（the company's design team），而不是接收方。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 38–40 单项选择（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 38,
        "end": 40
      },
      "items": [
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "In the accident mentioned in the passage, what was the 'design consideration' that caused a drug to be given incorrectly?",
          "translation": "在文中提到的那起事故中，导致给药方式出错的“设计因素”是什么？",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Investigations following this tragedy attributed some blame to the poor choice of typescript used on the drug container."
          },
          "synonyms": [
            "“design consideration” 对应原文的 “the poor choice of typescript used on the drug container”（字体选用的设计失误）",
            "“caused a drug to be given incorrectly” 对应原文的 “a drug that was accidentally injected into a patient through the spine (intrathecally) rather than through the veins (intravenously)”",
            "“the style of print”（选项 B）同义替换为原文的 “typescript”（字体/字样）"
          ],
          "locatingTip": "定位：题干中的 the accident 指向第 3 段被明确称为 tragedy 的案例：药物被误从脊柱注射而非静脉注射。确定答案技巧：题干问的是“设计方面”的原因，原文紧接着写 Investigations following this tragedy attributed some blame to the poor choice of typescript used on the drug container，其中 typescript 即字体、字样，对应选项 B the style of print。注意区分 print 的两层含义：typescript（字样选择）是原文指出的设计问题，而 printing error（印刷错误）在原文并不存在，这正是干扰项 A 的设置点。",
          "analysis": "第 3 段先列举设计问题：外观或读音相似的药易混淆，字号太小、银箔包装反光会导致名称或说明被误读。接着给出具体案例：“One such example is a drug that was accidentally injected into a patient through the spine (intrathecally) rather than through the veins (intravenously). Investigations following this tragedy attributed some blame to the poor choice of typescript used on the drug container.”（其中一个例子是一种药物被误经脊柱而非静脉注入患者体内。事后调查把部分责任归于药瓶上所选用字样不当）。题干问导致给药方式出错的设计因素，原文的归因是 typescript 选择不当，即印刷字体的样式问题，对应选项 B the style of print，故答案为 B。",
          "traps": [
            "为什么不选 A（a printing error）：原文的表述是 poor choice of typescript（字样选用不当），这是设计选择层面的问题，而 printing error 指印刷环节出现的差错，原文并未提及任何印刷失误。",
            "为什么不选 C（an incorrect label）：原文只提到名称或说明被误读（names or instructions being misread），并未说标签内容本身印错。",
            "为什么不选 D（the shape of the bottle）：原文从未描述药瓶的形状，事故归因与瓶身外形无关。"
          ]
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "What do some people say about the use of only black and white as a design feature?",
          "translation": "对于只使用黑白的（单色）设计，有些人是怎么说的？",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "One argument is that if all packaging was white with black lettering, people would have no choice but to read every box carefully."
          },
          "synonyms": [
            "“the use of only black and white” 同义替换为原文的 “all packaging was white with black lettering”",
            "“People would pay more attention to label information”（选项 C）同义替换为原文的 “people would have no choice but to read every box carefully”",
            "“some people say” 对应原文的 “One argument is that ...”，即众多争论中的一种看法"
          ],
          "locatingTip": "定位：题干的关键词是 black and white 这一颜色特征，全文只有第 7 段出现 white with black lettering。确定答案技巧：原文用 One argument is that 引出某一种主张——如果所有包装都是白底黑字，人们就不得不仔细阅读每一个药盒（have no choice but to read every box carefully），这正好对应选项 C“人们会更加注意标签信息”。注意 have no choice but to 是“别无选择只能”的强调说法，程度与 pay more attention 吻合，故答案为 C。",
          "analysis": "第 7 段开头写道：“Design features can provide the basis for lengthy debates. One argument is that if all packaging was white with black lettering, people would have no choice but to read every box carefully.”（设计特征可以成为长时间争论的由头。有一种观点认为，如果所有包装都是白底黑字，人们就只能仔细阅读每一个药盒）。题干中的 some people say 对应 One argument，only black and white 对应 all packaging was white with black lettering，而该主张的推论是人们会更仔细地读药盒上的信息，对应选项 C People would pay more attention to label information，故答案为 C。",
          "traps": [
            "为什么不选 A（Consumers would dislike this option）：原文只说人们不得不仔细读盒子，没有提及消费者是否会不喜欢这种配色。",
            "为什么不选 B（Drug containers would all look too similar）：外观相似（look-alike boxes）的问题出现在第 6 段，指的是药盒彼此相似可能引发错误，且原文并未把它与黑白配色联系起来，更不是“有些人”对黑白配色的评价。",
            "为什么不选 D（Partially sighted people would find these colours more helpful）：原文第 7 段关于视力的话题是盲文标签对视力障碍者的利弊未明，完全没有说黑白配色对弱视者更有帮助，属于无中生有。"
          ]
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "Why does the writer refer to 'the popper' and 'Pluspoint'?",
          "translation": "作者提到 “the popper” 和 “Pluspoint” 是为了什么？",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "On a positive note, a recent innovation exhibition revealed several new designs."
          },
          "synonyms": [
            "“the popper” 与 “Pluspoint” 对应原文所举的两个新设计实例",
            "“to show that progress is being made”（选项 A）同义替换为原文的 “On a positive note, a recent innovation exhibition revealed several new designs”（正面来看，新近的创新展展示了若干新设计）",
            "“progress” 对应文末讨论的 “to stimulate innovation”（刺激创新），说明设计领域已有新成果"
          ],
          "locatingTip": "定位：题干中的两个专有名词 the popper 与 Pluspoint 只出现在最后一段（第 8 段）首句之后。确定答案技巧：注意作者引出这两个设计的方式——“On a positive note, a recent innovation exhibition revealed several new designs”，On a positive note（值得肯定的是）明确了语气是正面的，随后 the popper 帮助关节炎患者取药、Pluspoint 让患者更愿意随身携带药物，都是已取得的改进成果，因此作者举例的目的是说明药品包装设计正在取得进展，选 A。做“作者为何提到某例”这类题，要优先看举例前的信号词（如这里的 On a positive note）与段落功能（创新展示），而不是被后文“挑战仍然存在”的收尾句带偏。",
          "analysis": "第 8 段是全篇的收束段，开头即定调：“On a positive note, a recent innovation exhibition revealed several new designs. 'The popper' aims to help arthritis sufferers remove tablets from blister packs, and ‘Pluspoint' is an adrenaline auto-injector (a device that allows diabetics to inject themselves) aimed at overcoming the fact that many patients do not carry their medication due to its prohibitive size.”（值得肯定的是，最近的一次创新展展示了若干新设计。“The popper” 旨在帮助关节炎患者从泡罩包装中取药；“Pluspoint” 是一支肾上腺素自动注射器，目的在于解决许多患者因体积过大而不随身携带药物的问题）。可见这两个例子都是已经问世的改进设计，作者借它们说明药品包装设计正在向前推进，故答案为 A。段落后半部分确实提到设计指南不具法律约束力、行业面临的挑战是采纳这套标准，但这属于对未来工作的期待，并不改变作者举例时的正面意图。",
          "traps": [
            "为什么不选 B（to give an example of pharmaceutical design problems that can cause accidents）：the popper 与 Pluspoint 是为解决取药困难与携带不便而设计的新方案，不是造成事故的问题案例；文中列举的设计问题（如字体不当导致的注射悲剧）出现在第 3 段。",
            "为什么不选 C（to prove that a lot of work still needs to be done）：虽然段末指出行业挑战是采纳设计标准，但作者用 On a positive note 引出的这两个例子强调的是已经取得的创新成果，属于正面论据，与“仍需大量工作”的方向相反。",
            "为什么不选 D（to point out that patients need to be more informed）：这两个设计针对的是取药与给药方式（泡罩包装取药、自动注射器携带），与患者的用药信息知情无关，那属于说明书内容的话题（第 5 段）。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
