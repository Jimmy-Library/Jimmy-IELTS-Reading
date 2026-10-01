(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-medium-1542", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-medium-1542",
  "meta": {
    "examId": "p2-medium-1542",
    "title": "Natural Choice Coffee and Chocolate 天然之选咖啡与巧克力",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 15–19 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 15,
        "end": 19
      },
      "items": [
        {
          "questionId": "q15",
          "questionNumber": 15,
          "stem": "Nearly three-quarters of the Earth's wildlife species can be found in shade-coffee plantations.",
          "translation": "地球上近四分之三的野生动物物种都能在遮阴咖啡种植园中找到。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "'These habitats support up to 70% of the planet's plant and animal species, and so the production methods of cocoa and coffee can have a hugely significant impact,' explains Dr Paul Donald"
          },
          "synonyms": [
            "“Nearly three-quarters” 与原文的 “up to 70%” 数字相近，但 “up to” 表示“至多、上限”，被题干说成了近似的实际值",
            "“in shade-coffee plantations” 与原文的 “These habitats” 不对应：these habitats 回指的是上一句的 “tropical rainforest regions that are biodiversity hotspots”（热带雨林地区），而不是遮阴咖啡种植园",
            "“the Earth's wildlife species” 同义替换为原文的 “the planet's plant and animal species”"
          ],
          "locatingTip": "定位：题干的数字 Nearly three-quarters 是最显眼的定位词，全文只有第 4 段（D 段）出现 70% 这一比例，锁定该段引语。确定答案技巧：数字题不能只看数字是否接近，必须核对“数字修饰的对象”。原文写 These habitats support up to 70% of the planet's plant and animal species，其中 These habitats 回指上一句的 tropical rainforest regions that are biodiversity hotspots。也就是说，承载全球七成物种的是热带雨林这类生物多样性热点地区，而不是“遮阴咖啡种植园”；此外 up to 70% 是上限表述，题干 Nearly three-quarters 却把它当成一个确定的接近值，两处都不符，故判 FALSE。",
          "analysis": "第 4 段（D 段）先给结论：“It's the same the world over. Species diversity is much higher where coffee is grown in shade conditions.”（全世界都一样：凡是遮阴条件种植咖啡的地方，物种多样性都高出许多）。随后补充来源：“In addition, coffee (and chocolate) is usually grown in tropical rainforest regions that are biodiversity hotspots.”（此外，咖啡和可可通常种在属于生物多样性热点的热带雨林地区）。接下来是引语：“'These habitats support up to 70% of the planet's plant and animal species, and so the production methods of cocoa and coffee can have a hugely significant impact,' explains Dr Paul Donald.”（Paul Donald 博士解释说：这些栖息地供养着地球上多达 70% 的动植物物种，因此可可与咖啡的生产方式能产生极其重大的影响）。题干把 These habitats（热带雨林等生物多样性热点地区）偷换成了 shade-coffee plantations（遮阴咖啡种植园），又把 up to 70%（至多七成）说成 Nearly three-quarters（接近四分之三）这一近乎确定的比例，两处改写都偏离原文，因此答案是 FALSE。做数字类判断题时必须回到原文确认比例所修饰的名词与限定词（up to、about、more than 等），本题的两处偏差恰好都在这里。",
          "traps": [
            "为什么不是 TRUE：70% 这一比例在原文中归属于 These habitats，即上一句所说的热带雨林等生物多样性热点地区，而不是遮阴咖啡种植园；且原文用 up to 70% 表示上限，题干却表述为接近四分之三的确定值，两处均与原文不符。",
            "为什么不是 NOT GIVEN：原文确实出现了物种比例的信息（up to 70%），只是其归属对象与题干的说法冲突，属于已给出且与题干矛盾的信息，应判 FALSE。"
          ]
        },
        {
          "questionId": "q16",
          "questionNumber": 16,
          "stem": "More species survive on the farms studied by the researchers than in the natural El Salvador forests.",
          "translation": "研究人员所研究的那些农场里存活的物种比萨尔瓦多天然森林里的更多。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Bird diversity in shade-grown coffee plantations rivals that found in natural forests in the same region,' says Robert Rice from the Smithsonian Migratory Bird Center."
          },
          "synonyms": [
            "“species survive on the farms” 对应原文的 “Bird diversity in shade-grown coffee plantations”，即遮阴咖啡园中的物种丰富度",
            "“the natural El Salvador forests” 对应原文的 “natural forests in the same region”，即同一地区的天然森林",
            "“more … than” 与原文的 “rivals” 相互冲突：rivals 意为“与……不相上下、相匹敌”，只是相当，并不表示更多"
          ],
          "locatingTip": "定位：题干的关键词是 farms、researchers 与 natural forests。全文比较“农场物种”与“天然林”的地方集中在第 2 段（B 段）与第 6 段（F 段），其中 F 段直接把遮阴咖啡园与同一地区的天然林并提，应优先核对。确定答案技巧：本题的判分点是比较级 more … than。原文用 rivals（与……不相上下）描述遮阴咖啡园的鸟类多样性与天然森林的关系，属于“相当、持平”，而非“更多”；B 段给出的高产数据（如树种近 300 种而对预期仅 100 种）是相对于研究者的预期，并非与萨尔瓦多天然森林作比。据此，题干把“相当”拔高为“更多”，故判 FALSE。",
          "analysis": "第 6 段（F 段）引用 Robert Rice 的话：“Bird diversity in shade-grown coffee plantations rivals that found in natural forests in the same region.”（遮阴咖啡园的鸟类多样性与同一地区天然森林的鸟类多样性不相上下）。原文用 rivals 一词说明二者水平相当，而题干却断言农场的物种比天然森林 more（更多），把持平的关系改写成了单向超出，属于比较方向上的冲突，因此答案是 FALSE。第 2 段（B 段）的数据也支持不了题干：there found a third more species of parasitic wasp than are known to exist in the whole country of Costa Rica 的对象是哥斯达黎加全国，而不是萨尔瓦多的天然森林；On 24 farms they found nearly 300 species of tree when they had expected to find about 100 中的比较对象是研究者的预期值 100 种。换句话说，全文没有任何一处把农场的物种数与萨尔瓦多天然森林的物种数做“谁更多”的比较，唯一涉及二者关系的地方用的是 rivals（相当），与题干的“更多”不符。补充说明：本题在部分公开答案中存有争议，但本解析一律以题库答案表为准，故按 FALSE 处理，请务必记住判分落点是 rivals 与 more … than 的语义冲突。",
          "traps": [
            "为什么不是 TRUE：原文唯一的直接比较用 rival（不相上下）描述咖啡园与天然森林的关系，说明两者相当而非农场更多；B 段的高产数据比较的对象是研究者的预期或哥斯达黎加全国，都不是萨尔瓦多的天然森林，因此无法支持“更多”。",
            "为什么不是 NOT GIVEN：原文对两个对象的关系有明确表述（rivals，相匹敌），并非完全没有提及，只是其表述与题干的“更多”相反，因而落在 FALSE 而不是 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q17",
          "questionNumber": 17,
          "stem": "Shade plantations are important for migrating birds in both Africa and the Americas.",
          "translation": "遮阴种植园对非洲和美洲的迁徙鸟类都很重要。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "In Ghana, West Africa - one of the world's biggest producers of cocoa - 90% of the cocoa is grown under shade, and these forest plantations are a vital habitat for wintering European migrant birds. In the same way, the coffee forests of Central and South America are a refuge for wintering North American migrants."
          },
          "synonyms": [
            "“Africa” 同义替换为原文的 “Ghana, West Africa”，用具体国家指代大洲",
            "“the Americas” 同义替换为原文的 “Central and South America”，进一步以 “In the same way” 表示两地情况相同",
            "“important for migrating birds” 同义替换为原文的 “a vital habitat for wintering European migrant birds” 与 “a refuge for wintering North American migrants”，vital habitat 与 refuge 都表重要"
          ],
          "locatingTip": "定位：题干的两个洲名 Africa 与 the Americas 是分段标志，第 6 段（F 段）后半段先讲西非加纳再讲中南美洲，两处并列出现，锁定该段。确定答案技巧：解答“两地并列”的判断题，要找连接词确认两处情况一致。本段用 In the same way 把加纳的遮阴可可林与中南美洲的咖啡林连起来，两处分别被称作 a vital habitat 与 a refuge，都说明对越冬迁徙鸟至关重要，故判 TRUE。",
          "analysis": "第 6 段（F 段）后半段：“In Ghana, West Africa - one of the world's biggest producers of cocoa - 90% of the cocoa is grown under shade, and these forest plantations are a vital habitat for wintering European migrant birds. In the same way, the coffee forests of Central and South America are a refuge for wintering North American migrants.”（在西非加纳——世界最大的可可产地之一——90% 的可可在遮阴条件下种植，这些林间种植园是越冬的欧洲候鸟至关重要的栖息地。同样，中南美洲的咖啡林则是越冬的北美候鸟的避难所）。原文先给非洲的例子（欧洲候鸟在加纳遮阴可可林越冬），再用 In the same way 引出美洲的例子（北美候鸟在中南美洲咖啡林越冬），两个例子在结构和程度（vital habitat 与 refuge）上都对等，题干用 both … and … 概括两地情况，与原文一致，故判 TRUE。做题时要注意识别 In the same way 这类平行标记词，它们往往就是判断“两地或两类情况相同”的判分依据。",
          "traps": [
            "为什么不是 FALSE：原文明确给出非洲（加纳）与美洲（中南美洲）两处对越冬候鸟至关重要的遮阴林地，两处表述方向一致，没有任何矛盾。",
            "为什么不是 NOT GIVEN：原文对两地都有具体说明，分别提到 vital habitat 与 refuge，信息完整且指向相同结论，并非未提及。"
          ]
        },
        {
          "questionId": "q18",
          "questionNumber": 18,
          "stem": "Full-sun cultivation can increase the costs of farming.",
          "translation": "全日照种植可能会提高耕作成本。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "But this system not only reduces the diversity of flora and fauna, it also requires huge amounts of pesticides and fertilisers."
          },
          "synonyms": [
            "“Full-sun cultivation” 同义替换为原文的 “this system”，回指前句所指的 “‘full sun’” 单一种植模式",
            "“increase the costs of farming” 同义替换为原文的 “requires huge amounts of pesticides and fertilisers”，需要大量农药与化肥即投入与成本更高",
            "“the diversity of flora and fauna” 对应题干隐含的负面后果，与成本提高并列为该模式的两大问题"
          ],
          "locatingTip": "定位：题干关键词是 Full-sun cultivation 与 costs，第 7 段（G 段）在引出 full sun 这一模式后紧接着讲它的代价，锁定该段第二句。确定答案技巧：本题考查“成本”这一经济后果，需要在原文找与投入、耗费有关的表达。原文说 this system not only reduces the diversity of flora and fauna, it also requires huge amounts of pesticides and fertilisers，其中 requires huge amounts of（需要大量）正是成本上升的依据：农药与化肥都要花钱购买，用量巨大自然抬高耕作成本，故判 TRUE。",
          "analysis": "第 7 段（G 段）：“More recently, a combination of the collapse in the world market for coffee and cocoa and a drive to increase yields by producer countries has led to huge swathes of shade-grown coffee and cocoa being cleared to make way for a highly intensive, monoculture pattern of production known as 'full sun'. But this system not only reduces the diversity of flora and fauna, it also requires huge amounts of pesticides and fertilisers.”（最近，国际咖啡与可可市场的崩盘，加上生产国提高产量的诉求，导致大片遮阴咖啡与可可被清除，让位于一种称为“全日照”的高强度单一化种植模式。但这种模式不仅减少了动植物多样性，还需要大量农药和化肥）。题干 Full-sun cultivation can increase the costs of farming 是对该模式代价的概括：requires huge amounts of pesticides and fertilisers 意味着持续的巨额投入，即耕作成本上升。原文用 not only … also … 把“生物多样性下降”与“农药化肥需求巨大”并列，题干取后者作为成本依据，逻辑成立，因此答案是 TRUE。注意不要把成本与下一句的价格信息混淆：原文讲的是投入增加，而不是产品价格变化。",
          "traps": [
            "为什么不是 FALSE：原文明确说全日照模式 requires huge amounts of pesticides and fertilisers（需要大量农药与化肥），用量大必然抬高投入，与题干“提高耕作成本”同向，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文对该模式的投入需求有明确交代（大量农药与化肥），足以支持成本上升的判断，并非未提及。"
          ]
        },
        {
          "questionId": "q19",
          "questionNumber": 19,
          "stem": "Farmers in El Salvador who have tried both methods prefer shade-grown plantations.",
          "translation": "尝试过两种方法的萨尔瓦多农民更偏爱遮阴种植园。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "In El Salvador, Alex Munro says shade-coffee farms have a cultural as well as ecological significance and people are not happy to see them go. But the financial pressures are great, and few of these coffee farms make much money."
          },
          "synonyms": [
            "“Farmers in El Salvador” 对应原文的 “In El Salvador … Alex Munro says”，地名与说话人一致",
            "“have tried both methods” 在原文中没有任何对应：原文从未说明这些农民是否同时采用过遮阴种植与全日照种植两种方式",
            "“prefer shade-grown plantations” 与原文的 “people are not happy to see them go” 只是表面相近：后者说的是人们不愿看到遮阴咖啡园消失，并未提到农民在比较两种方式后的偏好"
          ],
          "locatingTip": "定位：题干的地名 El Salvador 是显眼词，全文多处出现，但“农民是否偏好”这一信息只可能出现在第 9 段（I 段）讨论萨尔瓦多农场处境的地方，应先核对该段。确定答案技巧：本题考查“偏好”这一主观态度，必须回原文找到明确的比较或态度表达。第 9 段确实说 people are not happy to see them go（人们不愿看到遮阴咖啡园消失），也提到 the financial pressures are great（经济压力很大），但既没有说这些农民两种方法都试过，也没有任何“在两者之间更偏爱遮阴种植”的表述，属于信息缺失，故判 NOT GIVEN。",
          "analysis": "第 9 段（I 段）：“In El Salvador, Alex Munro says shade-coffee farms have a cultural as well as ecological significance and people are not happy to see them go. But the financial pressures are great, and few of these coffee farms make much money. 'One farm we studied, a cooperative of 100 families, made just $10,000 a year, $100 per family and that's not taking labour costs into account.'”（在萨尔瓦多，Alex Munro 说遮阴咖啡园既有文化意义也有生态意义，人们不愿看到它们消失。但经济压力很大，这些咖啡园很少能赚到什么钱。我们研究的一个由 100 户家庭组成的合作社，一年只赚 10 000 美元，每户 100 美元，这还没算人工成本）。原文交代了两件事：一是人们对遮阴咖啡园有情感与文化上的不舍，二是这类农场经济效益差、农民收入很低。题干讨论的却是“尝试过两种方法的农民更偏爱遮阴种植”，其中“两种方法都试过”与“比较后的偏好”这两层信息原文完全没有提及；人们的不舍属于普遍态度，无法等同于农民在两种种植方式之间作出的取舍。因此按信息缺失判 NOT GIVEN。做题提示：涉及态度与偏好的判断题，若原文只有情感表述而没有比较动作，通常按 NOT GIVEN 处理；本题的经济与情感信息分别对应第 23 题的答案依据，可相互印证。",
          "traps": [
            "为什么不是 TRUE：原文只说人们不愿看到遮阴咖啡园消失，以及这类农场收益微薄，从未说明农民是否两种方式都试过、更偏爱哪一种，“偏好”这一结论在原文中没有依据。",
            "为什么不是 FALSE：原文并没有说农民其实更偏爱全日照种植，也没有否定他们对遮阴种植的倾向，只是没有做出这种比较，缺乏相反信息，因此不构成 FALSE。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 20–23 人名观点匹配（Match each statement with the correct option, A–E）",
      "mode": "per_question",
      "questionRange": {
        "start": 20,
        "end": 23
      },
      "items": [
        {
          "questionId": "q20",
          "questionNumber": 20,
          "stem": "Encouraging shade growing may lead to farmers using the natural forest for their plantations.",
          "translation": "鼓励遮阴种植可能导致农民把天然林改为种植园。",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "11",
            "quote": "John Rappole of the Smithsonian Conservation and Research Center, for example, argues that shade-grown marketing provides 'an incentive to convert existing areas of primary forest that are too remote or steep to be converted profitably to other forms of cultivation into shade-coffee plantations'."
          },
          "synonyms": [
            "“Encouraging shade growing” 同义替换为原文的 “shade-grown marketing”，即推广遮阴种植的做法",
            "“may lead to” 同义替换为原文的 “provides an incentive to”，提供诱因即可能导致某种行为",
            "“farmers using the natural forest for their plantations” 同义替换为原文的 “to convert existing areas of primary forest … into shade-coffee plantations”，primary forest 即原始天然林"
          ],
          "locatingTip": "定位：题干关键词是 farmers、natural forest 与 plantations，选项栏中的人名是定位辅助。原文第 11 段（K 段）出现 primary forest 与 shade-coffee plantations 的转化表述，且前一句有 John Rappole 的名字，锁定 D 项。确定答案技巧：人物观点匹配题要把题干的核心主张（推广遮阴会促使农民占用原始林）与原文的观点句比对。原文用 argues that 引出 Rappole 的批评：shade-grown marketing provides an incentive to convert existing areas of primary forest … into shade-coffee plantations，与题干表述一致，故选 D。",
          "analysis": "第 11 段（K 段）：“Not all conservationists agree with such measures, however. Some say certification could be leading to the loss not preservation of natural forests. John Rappole of the Smithsonian Conservation and Research Center, for example, argues that shade-grown marketing provides 'an incentive to convert existing areas of primary forest that are too remote or steep to be converted profitably to other forms of cultivation into shade-coffee plantations'.”（然而并非所有保护主义者都认同这些措施。有人说认证可能导致天然林丧失而非得到保护。例如史密森保护与研究中心的 John Rappole 认为，遮阴种植的营销提供了一种诱因，促使人们把那些过于偏远或陡峭、无法作其他有利可图的耕作之用的现有原始林区域改造成遮阴咖啡种植园）。题干 Encouraging shade growing may lead to farmers using the natural forest for their plantations 正是这句话的概括：Encouraging shade growing 对应 shade-grown marketing，may lead to 对应 provides an incentive to，using the natural forest for their plantations 对应 convert existing areas of primary forest … into shade-coffee plantations，观点持有人即 John Rappole，故选 D。注意区分 E 项 Stacey Philpott：她在第 12 段支持遮阴种植，立场与 Rappole 相反，不要混淆。",
          "traps": []
        },
        {
          "questionId": "q21",
          "questionNumber": 21,
          "stem": "If shade-coffee farms match the right criteria, they can be good for wildlife.",
          "translation": "如果遮阴咖啡园符合恰当的评判标准，它们对野生动物是有益的。",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "12",
            "quote": "Ms Philpott argues that as long as the process is rigorous and offers financial gains to the producers, shade growing does benefit the environment."
          },
          "synonyms": [
            "“match the right criteria” 同义替换为原文的 “as long as the process is rigorous”，rigorous 指流程严格、符合标准",
            "“can be good for wildlife” 同义替换为原文的 “shade growing does benefit the environment”，环境受益即包含野生动物",
            "“shade-coffee farms” 对应原文的 “shade growing”，指同一种种植方式"
          ],
          "locatingTip": "定位：题干关键词是 criteria 与 good for wildlife，原文末段（第 12 段 L 段）结尾出现 as long as the process is rigorous 与 does benefit the environment，锁定该句并结合前面的 Ms Philpott 确定选项 E。确定答案技巧：本题强调“有条件的正面评价”，原文用 as long as（只要）引出条件，用 does benefit（确实有益）给出肯定结论，并明确署名 Ms Philpott，与题干 If … match the right criteria, they can be good for wildlife 的条件句结构完全对应，故选 E。",
          "analysis": "第 12 段（L 段）先指出遮阴种植有不同类型：“Those used by subsistence farmers are virtually identical to natural forest (and have a corresponding diversity), while systems that use coffee plants as the understorey and cacao or citrus trees as the overstorey may be no more diverse than full-sun farms. Certification procedures need to distinguish between the two.”（自给农使用的类型几乎等同于天然森林，具有相应的多样性；而以咖啡为下层、以可可或柑橘为上层的方式，其多样性可能与全日照农场不相上下。认证程序必须区分这两类）。随后给出带条件的结论：“and Ms Philpott argues that as long as the process is rigorous and offers financial gains to the producers, shade growing does benefit the environment.”（Philpott 女士认为，只要流程严格、并给生产者带来经济收益，遮阴种植确实有益于环境）。题干 If shade-coffee farms match the right criteria, they can be good for wildlife 正是这一条件句的概括：match the right criteria 对应 the process is rigorous（结合上文对认证程序需区分两类的强调），can be good for wildlife 对应 does benefit the environment，观点持有人是 Stacey Philpott，故选 E。",
          "traps": []
        },
        {
          "questionId": "q22",
          "questionNumber": 22,
          "stem": "There may be as many species of bird found on shade farms in a particular area, as in natural habitats there.",
          "translation": "在某一地区，遮阴农场上的鸟类物种数量可能与那里的自然栖息地一样多。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Bird diversity in shade-grown coffee plantations rivals that found in natural forests in the same region,' says Robert Rice from the Smithsonian Migratory Bird Center."
          },
          "synonyms": [
            "“as many species of bird … as” 同义替换为原文的 “rivals”，rivals 表示数量上不相上下、可以比肩",
            "“shade farms in a particular area” 同义替换为原文的 “shade-grown coffee plantations … in the same region”",
            "“natural habitats there” 同义替换为原文的 “natural forests in the same region”，同地区的天然森林即自然栖息地"
          ],
          "locatingTip": "定位：题干关键词是 species of bird 与 shade farms，第 6 段（F 段）首句整句讲遮阴咖啡园与天然森林的鸟类多样性对比，且明确署名 Robert Rice，锁定 C 项。确定答案技巧：本题的判分词是 as many … as（一样多）。原文用 rivals（可与之匹敌、不相上下）表达同一含义，且限定词 in the same region 对应题干的 in a particular area，人物署名 Robert Rice 与选项 C 对应，故选 C。",
          "analysis": "第 6 段（F 段）首句：“'Bird diversity in shade-grown coffee plantations rivals that found in natural forests in the same region,' says Robert Rice from the Smithsonian Migratory Bird Center.”（史密森候鸟研究中心的 Robert Rice 说：遮阴咖啡种植园中的鸟类多样性与同一地区天然森林的鸟类多样性不相上下）。题干 There may be as many species of bird found on shade farms in a particular area, as in natural habitats there 正是这句话的意译：as many … as 对应 rivals（匹敌、相当），shade farms in a particular area 对应 shade-grown coffee plantations … in the same region，natural habitats there 对应 natural forests in the same region，说话人 Robert Rice 即选项 C。注意本题与第 15 题共用同一句原文，但设问角度相反：本题只问“是否相当”，与 rivals 一致，故选 C；第 15 题问的是“农场是否比天然林更多”，超出了 rivals 的含义，故不能选 TRUE。",
          "traps": []
        },
        {
          "questionId": "q23",
          "questionNumber": 23,
          "stem": "Currently, many shade-coffee farmers earn very little.",
          "translation": "目前，许多遮阴咖啡种植者收入微薄。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "9",
            "quote": "But the financial pressures are great, and few of these coffee farms make much money."
          },
          "synonyms": [
            "“Currently” 同义替换为原文的一般现在时叙述，描述的是当下状况",
            "“earn very little” 同义替换为原文的 “few of these coffee farms make much money”，make much money 与 earn 同义，few … much 表示几乎赚不到钱",
            "“many shade-coffee farmers” 对应原文的 “a cooperative of 100 families … $100 per family”，以 100 户合作社的例子说明大量种植者的收入水平"
          ],
          "locatingTip": "定位：题干关键词是 earn very little，第 9 段（I 段）专门讨论萨尔瓦多遮阴咖啡园的经济困境，出现 financial pressures 与 make much money，锁定该段；该段由 Alex Munro 提供信息，对应选项 A。确定答案技巧：人物观点匹配题要把题干的经济主张（收入微薄）与原文的财务描述比对。原文说 the financial pressures are great, and few of these coffee farms make much money，并以 100 户合作社年收入仅 10 000 美元、每户 100 美元为例，正是“收入很低”的具体说明；该信息的提供者与观察者是 Alex Munro，故选 A。",
          "analysis": "第 9 段（I 段）：“In El Salvador, Alex Munro says shade-coffee farms have a cultural as well as ecological significance and people are not happy to see them go. But the financial pressures are great, and few of these coffee farms make much money. 'One farm we studied, a cooperative of 100 families, made just $10,000 a year, $100 per family and that's not taking labour costs into account.'”（在萨尔瓦多，Alex Munro 说遮阴咖啡园既有文化意义也有生态意义，人们不愿看到它们消失。但经济压力很大，这些咖啡园很少能赚到什么钱。我们研究的一个 100 户家庭的合作社，一年只赚 10 000 美元，每户 100 美元，这还没算人工成本）。题干 Currently, many shade-coffee farmers earn very little 是这段财务描述的概括：few of these coffee farms make much money 指出普遍赚不到钱，100 户合作社每户仅 100 美元的例子则具体说明“很多农户收入极低”。由于该信息出自 Alex Munro 的转述与研究，选项对应 A。注意不要与 John Rappole 混淆：Rappole 谈的是认证可能带来的原始林转化（第 20 题），与收入无关。",
          "traps": []
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–27 特征分类匹配（A 遮阴种植法 / B 全日照种植法 / C 两者皆是）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 27
      },
      "items": [
        {
          "questionId": "q24",
          "questionNumber": 24,
          "stem": "can be used on either coffee or cocoa plantations",
          "translation": "可用于咖啡或可可种植园。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "a combination of the collapse in the world market for coffee and cocoa and a drive to increase yields by producer countries has led to huge swathes of shade-grown coffee and cocoa being cleared to make way for a highly intensive, monoculture pattern of production known as 'full sun'"
          },
          "synonyms": [
            "“either coffee or cocoa plantations” 对应原文并列的 “coffee and cocoa”，两种作物都出现在同一句关于种植方式变化的描述里",
            "“can be used on” 对应原文的 “has led to huge swathes of shade-grown coffee and cocoa being cleared to make way for … 'full sun'”，即两种方式都适用于这两种作物",
            "“the shade-grown method” 的证据见第 5 段 “Traditionally they have grown coffee (and cocoa) under the shade of selectively thinned tracts of rain forest”"
          ],
          "locatingTip": "定位：题干关键词是 coffee or cocoa，第 7 段（G 段）同时出现 coffee and cocoa 与两种种植方式（shade-grown 与 full sun），第 5 段（E 段）也说明遮阴法同时用于咖啡与可可，把两段合看即可确定。确定答案技巧：本题是特征分类题，问“两种作物都适用”，需要证明遮阴法与全日照法都能用于咖啡和可可。第 5 段说 Traditionally they have grown coffee (and cocoa) under the shade（传统上咖啡和可可在遮阴下种植），第 7 段说 shade-grown coffee and cocoa being cleared to make way for … 'full sun'（遮阴种植的咖啡与可可被清除、让位于全日照），两段合起来说明两种方法对两种作物都适用，故选 C。",
          "analysis": "第 5 段（E 段）：“Traditionally they have grown coffee (and cocoa) under the shade of selectively thinned tracts of rain forest in a genuinely sustainable form of farming.”（传统上，他们在经过择伐疏伐的雨林树荫下种植咖啡和可可，这是一种真正可持续的耕作方式）；第 7 段（G 段）：“a combination of the collapse in the world market for coffee and cocoa and a drive to increase yields by producer countries has led to huge swathes of shade-grown coffee and cocoa being cleared to make way for a highly intensive, monoculture pattern of production known as 'full sun'.”（国际咖啡与可可市场崩盘，加上生产国提高产量的诉求，导致大片遮阴种植的咖啡与可可被清除，让位于称为“全日照”的高强度单一化种植模式）。两处都同时并列咖啡与可可，说明无论遮阴法（A）还是全日照法（B）都用于这两种作物，因此“可用于咖啡或可可种植园”这一特征归属于两者皆是，选 C。做这类分类题时要特别留意 (and cocoa) 这样的括注，它是判断“适用范围”的关键证据。",
          "traps": []
        },
        {
          "questionId": "q25",
          "questionNumber": 25,
          "stem": "is expected to produce bigger crops",
          "translation": "预计能带来更高的产量。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "a drive to increase yields by producer countries has led to huge swathes of shade-grown coffee and cocoa being cleared to make way for a highly intensive, monoculture pattern of production known as 'full sun'"
          },
          "synonyms": [
            "“is expected to produce bigger crops” 同义替换为原文的 “a drive to increase yields”，increase yields 即提高产量",
            "“the full-sun method” 对应原文的 “a highly intensive, monoculture pattern of production known as 'full sun'”，全日照正是为提高产量而采用的模式",
            "“is expected to” 对应原文的 “drive”（诉求、推动力），说明生产国的期望驱动了这一转变"
          ],
          "locatingTip": "定位：题干关键词是 produce bigger crops，第 7 段（G 段）出现 increase yields（提高产量）并直接连到 full sun 这一模式，锁定该句与 B 项。确定答案技巧：产量类表述的常见同义改写是 yields 与 crops、increase 与 bigger。原文说 a drive to increase yields … has led to … 'full sun'，即为了增产而转向全日照，可见“预期增产”属于全日照法的特征，故选 B。",
          "analysis": "第 7 段（G 段）：“More recently, a combination of the collapse in the world market for coffee and cocoa and a drive to increase yields by producer countries has led to huge swathes of shade-grown coffee and cocoa being cleared to make way for a highly intensive, monoculture pattern of production known as 'full sun'.”（最近，国际咖啡与可可市场崩盘，加上生产国提高产量的诉求，导致大片遮阴种植的咖啡与可可被清除，让位于一种称为“全日照”的高强度单一化种植模式）。句中 a drive to increase yields（增产的诉求）明确解释了生产国为何转向全日照，说明这种模式被期望带来更高产量；题干中的 bigger crops 正是 yields 的同义改写，expected 对应 drive（期望与推动），故选 B。注意本题不能选 C：原文并未说遮阴法也被期望增产，遮阴法在同一句中恰好是被取代的一方。",
          "traps": []
        },
        {
          "questionId": "q26",
          "questionNumber": 26,
          "stem": "documentation may be used to encourage sales",
          "translation": "可使用证明文件来促进销售。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "10",
            "quote": "They are promoting a 'certification' system that can indicate to consumers that the beans have been grown on shade plantations. Bird-friendly coffee, for instance, is marketed by the Smithsonian Migratory Bird Center."
          },
          "synonyms": [
            "“documentation” 同义替换为原文的 “‘certification’ system”，认证体系即一种出具证明的机制",
            "“to encourage sales” 同义替换为原文的 “is marketed by the Smithsonian Migratory Bird Center”，marketed 即面向市场推广销售",
            "“can indicate to consumers” 对应题干 documentation 的作用，即向消费者出示证明信息"
          ],
          "locatingTip": "定位：题干关键词是 documentation 与 sales，第 10 段（J 段）出现 certification system（认证体系）与 marketed（营销），锁定该段与 A 项。确定答案技巧：documentation 这类抽象名词在原文常以具体制度出现，本题对应 'certification' system；促进销售则对应 marketed 与 harness consumer power（借助消费者力量）。由于认证只针对遮阴种植的豆子，故选 A。",
          "analysis": "第 10 段（J 段）：“The loss of shade-coffee forests has so alarmed a number of North American wildlife organisations that they're now harnessing consumer power to help save these threatened habitats. They are promoting a 'certification' system that can indicate to consumers that the beans have been grown on shade plantations. Bird-friendly coffee, for instance, is marketed by the Smithsonian Migratory Bird Center. The idea is that the small extra cost is passed directly on to the coffee farmers as a financial incentive to maintain their shade-coffee farms.”（遮阴咖啡林的消失让一些北美野生动物组织深感不安，于是他们现在借助消费者的力量来拯救这些受威胁的栖息地。他们正在推广一种认证体系，向消费者表明这些豆子产自遮阴种植园。例如，史密森候鸟研究中心就营销一款“护鸟咖啡”。其设想是把略高的价格直接转给咖啡农，作为维持遮阴咖啡园的财政激励）。题干 documentation may be used to encourage sales 中，documentation 对应 certification system（能向消费者出示证明的制度），used to encourage sales 对应 is marketed（面向市场销售）与 harnessing consumer power（借助消费者购买力），而这一切都围绕遮阴种植的产品展开，故选 A。",
          "traps": []
        },
        {
          "questionId": "q27",
          "questionNumber": 27,
          "stem": "can reduce wildlife diversity",
          "translation": "会降低野生动植物多样性。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "7",
            "quote": "But this system not only reduces the diversity of flora and fauna, it also requires huge amounts of pesticides and fertilisers."
          },
          "synonyms": [
            "“wildlife diversity” 同义替换为原文的 “the diversity of flora and fauna”，flora and fauna 即野生动植物",
            "“can reduce” 同义替换为原文的 “reduces”，情态动词不改变事实判断",
            "“this system” 回指前句的 “‘full sun’”（全日照模式），因此该特征归属于 B"
          ],
          "locatingTip": "定位：题干关键词是 reduce wildlife diversity，第 7 段（G 段）在引出 full sun 之后立刻用 this system reduces the diversity of flora and fauna 说明其危害，锁定该句与 B 项。确定答案技巧：分类题要确认指示代词的指代对象。原文的 this system 承接上一句的 'full sun'，说明减少动植物多样性的是全日照模式；第 8 段（H 段）还用数据佐证：full-sun plantations have 95% fewer species of birds。两条证据都指向 B。",
          "analysis": "第 7 段（G 段）：“led to huge swathes of shade-grown coffee and cocoa being cleared to make way for a highly intensive, monoculture pattern of production known as 'full sun'. But this system not only reduces the diversity of flora and fauna, it also requires huge amounts of pesticides and fertilisers.”（导致大片遮阴咖啡与可可被清除，让位于称为“全日照”的高强度单一化种植模式。但这种模式不仅减少了动植物多样性，还需要大量农药和化肥）。句中的 this system 明确回指紧邻的 'full sun'，因此“减少野生动植物多样性”这一特征是全日照模式的特征。第 8 段（H 段）进一步用研究数据佐证：“One study carried out in Colombia and Mexico found that, compared with shade coffee, full-sun plantations have 95% fewer species of birds.”（在哥伦比亚和墨西哥进行的一项研究发现，与遮阴咖啡相比，全日照种植园的鸟类物种数少了 95%）。理论与数据都指向全日照，故选 B。做题提示：分类题出现 this system、this method 之类回指词时，一定要往前找最近的那个方式名称，本题就是 'full sun'。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
