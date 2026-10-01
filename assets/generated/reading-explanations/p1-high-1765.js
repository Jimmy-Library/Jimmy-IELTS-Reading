(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-high-1765", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-high-1765",
  "meta": {
    "examId": "p1-high-1765",
    "title": "The History of the Chicken 鸡的历史",
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
          "stem": "Chicken is globally popular because it can be used for different styles of cooking.",
          "translation": "鸡肉在全球广受欢迎，因为它可以被用于不同风格的烹饪。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Chicken is the universal food of our era, crossing cultural boundaries with ease. With its mild and uniform flavor, it adapts easily to any cuisine."
          },
          "synonyms": [
            "「globally popular」同义替换为原文的「the universal food of our era, crossing cultural boundaries with ease」，universal 与 crossing cultural boundaries 表达全球普遍",
            "「can be used for different styles of cooking」同义替换为原文的「it adapts easily to any cuisine」，any cuisine 对应 different styles of cooking"
          ],
          "locatingTip": "定位：题干核心词 Chicken 与 cooking 出现在第 1 段开头三句，含 cuisine 一词，属于饮食类专有语境，扫读第 1 段即可锁定。确定答案技巧：题干的因果关系是「受欢迎（果）因为适配各种烹饪（因）」，原文用「the universal food of our era」「crossing cultural boundaries」说明全球流行，再用「adapts easily to any cuisine」说明适配各种菜肴，因果与程度都吻合，故选 TRUE。",
          "analysis": "第 1 段开头写道：「The story begins 10,000 years ago in a jungle in Asia and ends today in kitchens all over the world. Chicken is the universal food of our era, crossing cultural boundaries with ease. With its mild and uniform flavor, it adapts easily to any cuisine.」（故事始于一万年前亚洲的一片丛林，结束于今天世界各地的厨房。鸡肉是我们这个时代的普遍食物，轻易跨越文化界限；凭借其温和而一致的风味，它能轻松适配任何菜肴）。原文用 universal food（普遍食物）和 crossing cultural boundaries（跨越文化界限）表达「全球广受欢迎」，用 adapts easily to any cuisine（轻松适配任何菜肴）表达「可用于不同烹饪风格」，题干的两个信息点与之一一对应，故答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文用「universal food of our era」「crossing cultural boundaries with ease」正面肯定了鸡肉的全球受欢迎程度，又用「adapts easily to any cuisine」正面肯定其适配各种菜肴，与题干完全同向，无从产生矛盾。",
            "为什么不是 NOT GIVEN：题干的「全球流行」与「适配不同烹饪」两个信息点在原文中都明确出现，并非信息缺失，因此不选 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Chickens have poor capacity for flight compared to junglefowl.",
          "translation": "与野鸡（junglefowl）相比，家鸡的飞行能力很差。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "In its habitat, which stretches from northeastern India to the Philippines, the red junglefowl looks on the forest floor for insects, seeds and fruit, and flies up to nest in the trees at night. That's about as much flying as it can manage, a trait that made it relatively easy for humans to capture and domesticate it."
          },
          "synonyms": [
            "「poor capacity for flight」对应原文的「That's about as much flying as it can manage」，即飞行能力有限",
            "关键的错位在于主语与关系：原文这句话描述的是「the red junglefowl」（原鸡本身），而题干把它变成「家鸡与野鸡的比较」，原文并没有出现「家鸡」这一比较对象，也没有任何两者飞行能力的对比"
          ],
          "locatingTip": "定位：题干出现专有名词 junglefowl，第 2 段谈其野生祖先 red junglefowl 的习性，定位到该段中「flies up to nest in the trees at night」一带。确定答案技巧：核对主语与比较关系。原文说「That's about as much flying as it can manage」的主语是 the red junglefowl（原鸡），只是说明原鸡自身的飞行能力有限，并以「a trait that made it relatively easy for humans to capture and domesticate it」交代这一特点使它容易被驯化；原文从未把家鸡（chickens）的飞行能力拿来与原鸡作比较，题干所说的「家鸡相对野鸡飞行更差」这一比较关系在原文中并不存在，故判 NOT GIVEN。",
          "analysis": "第 2 段描述原鸡习性：「In its habitat, which stretches from northeastern India to the Philippines, the red junglefowl looks on the forest floor for insects, seeds and fruit, and flies up to nest in the trees at night. That's about as much flying as it can manage, a trait that made it relatively easy for humans to capture and domesticate it.」（在其从印度东北部延伸到菲律宾的栖息地中，原鸡在地面觅食昆虫、种子和水果，夜里飞上树去栖息。这就是它能做到的飞行极限——这一特点使人类相对容易捕获并驯化它）。可见原文描述的对象是 red junglefowl（原鸡）本身，说的是它自己的飞行能力有限；原文既没有把家鸡的飞行能力单列出来，也没有做「家鸡 vs 野鸡」的比较，更没有说家鸡飞得更差。题干凭空添加了这一比较关系，属于原文信息缺失，故判 NOT GIVEN。",
          "traps": [
            "为什么不是 FALSE：原文并没有出现与题干相反的说法（没说家鸡飞行能力不比原鸡差，也没否认这类比较），只是完全没做这个比较；「原文没提」在判断题里对应 NOT GIVEN，而不是 FALSE。",
            "为什么不是 TRUE：原文只说明原鸡自身的飞行能力有限，没有任何关于家鸡飞行能力的数据或比较，支撑不了题干「家鸡比野鸡差」的断言。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Scientists believe that the domestic chicken has more than one ancestor.",
          "translation": "科学家认为家鸡不止有一个祖先。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "But the red junglefowl is not the sole ancestor of the modern chicken. Scientists have identified three closely related species that might have bred with the red junglefowl."
          },
          "synonyms": [
            "「has more than one ancestor」同义替换为原文的「is not the sole ancestor」，sole ancestor 的否定即「不止一个祖先」",
            "「Scientists believe」对应原文的「Scientists have identified three closely related species that might have bred with the red junglefowl」，即科学家已认定另有近缘物种参与"
          ],
          "locatingTip": "定位：题干关键词 ancestor 与 Scientists，第 2 段后半用「the red junglefowl is not the sole ancestor」转折，随后立即出现 Scientists 一词，一句定位。确定答案技巧：原文先用 not the sole ancestor 否定「唯一祖先」，再用「three closely related species」（三个近缘物种）说明可能另有祖先来源，与题干「不止一个祖先」一致，故选 TRUE。",
          "analysis": "第 2 段在介绍完原鸡后转折：「But the red junglefowl is not the sole ancestor of the modern chicken. Scientists have identified three closely related species that might have bred with the red junglefowl.」（但原鸡并不是现代家鸡的唯一祖先，科学家已识别出三个可能曾与原鸡杂交的近缘物种）。原文用「not the sole ancestor」（不是唯一祖先）直接对应题干的「more than one ancestor」（不止一个祖先），并补充三个近缘物种作为证据，还提到家鸡从灰原鸡继承了黄皮肤这一性状，多重信息一致，故答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确说原鸡「不是唯一祖先」，并列出三个可能的近缘物种，正面支持「不止一个祖先」，不存在矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅说「不是唯一祖先」，还给出了近缘物种与遗传性状（黄皮肤来自灰原鸡）等具体依据，信息充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "A modern chicken has the same skin colour as the grey junglefowl.",
          "translation": "现代家鸡的皮肤颜色与灰原鸡相同。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "However, recent research suggests that modern chickens inherited at least one trait, their yellow skin, from the grey junglefowl of southern India."
          },
          "synonyms": [
            "「has the same skin colour as the grey junglefowl」同义替换为原文的「inherited at least one trait, their yellow skin, from the grey junglefowl」，由灰原鸡继承黄皮肤即皮肤颜色相同",
            "「skin colour」对应原文的「their yellow skin」，same 对应「inherited ... from」，继承即来源相同"
          ],
          "locatingTip": "定位：题干专有名词 grey junglefowl 在全文只出现一次，位于第 2 段最后一句，一步锁定。确定答案技巧：核对「颜色是否相同」。原文说现代家鸡从灰原鸡继承了 yellow skin（黄色皮肤），说明二者的皮肤颜色一致，与题干 same skin colour 对应，故选 TRUE。",
          "analysis": "第 2 段末句：「However, recent research suggests that modern chickens inherited at least one trait, their yellow skin, from the grey junglefowl of southern India.」（然而，近期研究表明，现代家鸡至少从一个性状——它们的黄色皮肤——是继承自印度南部的灰原鸡的）。句中「inherited ... their yellow skin ... from the grey junglefowl」表明家鸡的皮肤颜色（黄色）与灰原鸡相同，否则谈不上继承；题干用「has the same skin colour」概括这一继承关系，信息一致，故答案是 TRUE。注意本题容易因「继承」一词而误读为「只是来源相同、颜色未必相同」，但原文点明所继承的性状就是皮肤颜色本身，故「颜色相同」成立。",
          "traps": [
            "为什么不是 FALSE：原文明确说家鸡的黄色皮肤继承自灰原鸡，二者皮肤颜色一致，题干并无意相反，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文专门交代了皮肤颜色这一性状及其来源，信息明确，不属于未提及。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "After the Roman Empire ended, chicken consumption in Europe declined.",
          "translation": "罗马帝国灭亡后，欧洲的鸡肉消费量下降。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "But the chicken's status in Europe appears to have diminished with the collapse of Rome. In the period after the fall of the Roman Empire, chicken farms vanished and the birds returned to the size they had been 1,000 years earlier."
          },
          "synonyms": [
            "「After the Roman Empire ended」同义替换为原文的「In the period after the fall of the Roman Empire」，collapse of Rome 与 the fall of the Roman Empire 同义",
            "「consumption ... declined」同义替换为原文的「the chicken's status in Europe appears to have diminished」以及「chicken farms vanished」，diminished 与 vanished 都表示衰退、减少"
          ],
          "locatingTip": "定位：题干关键词 Roman Empire 在全文只出现于第 5 段（及其 collapse of Rome），属于极佳的定位词。确定答案技巧：核对时间（帝国灭亡之后）与趋势（下降）。原文写「with the collapse of Rome ... status ... diminished」，又写「after the fall of the Roman Empire, chicken farms vanished」，即地位与养鸡场都减少，与题干「消费量下降」方向一致，故选 TRUE。",
          "analysis": "第 5 段后半写道：「But the chicken's status in Europe appears to have diminished with the collapse of Rome. In the period after the fall of the Roman Empire, chicken farms vanished and the birds returned to the size they had been 1,000 years earlier.」（但随着罗马的崩溃，鸡在欧洲的地位似乎有所下降。在罗马帝国灭亡之后的时期，养鸡场消失了，鸡的体型也回到了 1000 年前的水平）。原文用「status ... diminished」（地位下降）和「chicken farms vanished」（养鸡场消失）表达鸡肉相关需求与消费的衰退，时间点也锁定在「after the fall of the Roman Empire」（帝国灭亡之后），与题干的时间与趋势两方面都吻合，故答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：原文明确说鸡在欧洲的地位「diminished」、养鸡场「vanished」，都是下降、减少的方向，与题干「declined」一致，无矛盾。",
            "为什么不是 NOT GIVEN：原文既点明了时间（罗马帝国灭亡之后），又给出了趋势（地位下降、养鸡场消失），两条信息齐全，不属于信息缺失。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Some people criticise the methods involved in factory farming chickens.",
          "translation": "有些人批评工厂化养鸡所采用的方法。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "This allowed chickens to be raised indoors and be protected from cold temperatures and heavy rain as well as predators. This factory farming represents the chicken's final step in its transformation into a big protein-producing business."
          },
          "synonyms": [
            "「criticise the methods」在原文中找不到对应：原文只陈述工厂化养殖的做法（raised indoors、protected）与结果（transformation into a big protein-producing business），没有任何人提出反对或批评",
            "「factory farming」在原文中只是中性描述（This factory farming represents ...），未附带评价"
          ],
          "locatingTip": "定位：题干关键词 factory farming 是第 6 段末句的核心词，该段讲抗生素与维生素使工厂化养殖成为可能。确定答案技巧：核查原文是否有「批评」这一动作。原文只说这种养殖方式「使鸡能在室内饲养、免受寒冷雨淋与天敌侵害」，并称其为「向蛋白质生产生意转变的最后一步」，全是中性或事实性陈述，没有任何人对此表示反对，属信息缺失，故选 NOT GIVEN。",
          "analysis": "第 6 段末说：「This allowed chickens to be raised indoors and be protected from cold temperatures and heavy rain as well as predators. This factory farming represents the chicken's final step in its transformation into a big protein-producing business.」（这使鸡能够在室内饲养，免受寒冷、大雨以及天敌的侵害。这种工厂化养殖代表着鸡向大规模蛋白质生产生意转变的最后一步）。全段是客观陈述工厂化养殖的条件与意义，既没有出现批评者，也没有任何负面的评价性词汇；题干所说的「Some people criticise the methods」是原文完全没有的内容，因此判 NOT GIVEN。做判断题时要注意区分「原文描述了某种做法」与「原文有人批评该做法」，前者不构成后者的证据。",
          "traps": [
            "为什么不是 TRUE：原文对工厂化养殖只作中性描述，从未出现任何人批评其方法的表述，「有些人批评」这一信息无从对应，不能选 TRUE。",
            "为什么不是 FALSE：FALSE 需要原文有相反信息（例如说「没有人批评这种做法」），而原文对此完全没有交代，只是没说，故按信息缺失判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "In the USA, fewer people are keeping expensive breeds of chicken at home.",
          "translation": "在美国，在家里养昂贵品种鸡的人更少了。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "8",
            "quote": "In the USA, exotic and heritage breeds of chicken are being sold for considerable sums of money as the fashion for keeping chickens in the backyard becomes more popular."
          },
          "synonyms": [
            "「expensive breeds」同义替换为原文的「exotic and heritage breeds ... sold for considerable sums of money」，售价高昂即昂贵品种",
            "「fewer people are keeping」与原文的「the fashion for keeping chickens in the backyard becomes more popular」直接冲突：原文说的是越来越流行，人数在增加而非减少"
          ],
          "locatingTip": "定位：题干专有名词 USA 在全文只出现在第 8 段，倒数第二句末，一步锁定。确定答案技巧：核对趋势方向。原文说后院养鸡的时尚「becomes more popular」（越来越流行），说明养鸡的人越来越多；题干却说「fewer people」（人更少），方向相反，故选 FALSE。",
          "analysis": "第 8 段末句：「In the USA, exotic and heritage breeds of chicken are being sold for considerable sums of money as the fashion for keeping chickens in the backyard becomes more popular.」（在美国，随着在后院养鸡的时尚日益流行，异域品种与传承品种的鸡被卖到相当高的价格）。原文的两条信息是：这些鸡售价不菲（对应题干的 expensive breeds）以及后院养鸡越来越流行（说明养的人越来越多）。题干却断言「fewer people are keeping」（养的人更少），与「more popular」正相反，因此答案是 FALSE。做本题要抓住趋势词 more popular 与 fewer 的对立。",
          "traps": [
            "为什么不是 TRUE：原文明确说养鸡时尚「becomes more popular」（越来越流行），意味着养鸡人数增多，与题干「fewer people」（更少）方向相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对养鸡趋势有明确交代（more popular），信息完整且与题干冲突，因此按规则判 FALSE，而非信息缺失。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
