(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-low-70", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-low-70",
  "meta": {
    "examId": "p1-low-70",
    "title": "Fluorescence Deep sea discovery深海发光生物研究",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–6 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 6
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "During his 2007 dive, Michiels expected to encounter total darkness at about 15 metres.",
          "translation": "在 2007 年的那次潜水中，Michiels 预计自己会在约 15 米深处遇到完全的黑暗。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "In theory, once he reached about 15 metres, he should have been plunged into darkness."
          },
          "synonyms": [
            "“expected to encounter total darkness” 同义替换为原文的 “In theory … he should have been plunged into darkness”，in theory（理论上）与 should have been（按推算本应）都表示“他事先的判断与预期”",
            "“total darkness” 同义替换为原文的 “plunged into darkness”， plunged into 强调完全没入黑暗，与 total（完全的）程度相当",
            "“at about 15 metres” 与原文 “about 15 metres” 逐字对应，数字与约数词都没有改动",
            "“his 2007 dive” 对应原文第 1 段第 2 句的 “In September 2007 he decided to find out how far red light could penetrate the ocean depths.”，说明这次下潜发生在 2007 年"
          ],
          "locatingTip": "定位：题干的时间 2007 与数字 15 metres 是两道天然路标，属于全文最早出现的信息，扫读第 1 段即可锁定 “In September 2007 …” 和 “In theory, once he reached about 15 metres …”。确定答案技巧：本题考“是否预期”，关键在于分清原文里哪些内容属于“预判”、哪些属于“实况”。原文先说他在埃及下潜的目的，接着给出海水对不同颜色光吸收规律的常识，然后用 In theory 明确引出他的推断：到 15 米左右“本应陷入黑暗（should have been plunged into darkness）”。预期与题干完全吻合，因此判 TRUE。注意后面 “Sure enough, 20 metres down it was as dark as night.” 讲的是 20 米处的实际所见，是引出“意外发现红色”的铺垫，它并不否定 15 米的预期，反而印证了这条理论判断成立，所以不能因为“实际是 20 米才黑”而误判 FALSE。",
          "analysis": "第 1 段按“背景—目的—常识—推断—实况”的顺序展开。先交代人物身份：“Nico Michiels is an ecologist from the University of Tübingen in Germany who spends part of each year in Egypt, where he dives in the Red Sea …”（Nico Michiels 是德国图宾根大学的生态学家，每年有一部分时间在埃及，在红海潜水）；随即点明时间与目的：“In September 2007 he decided to find out how far red light could penetrate the ocean depths.”（2007 年 9 月，他决定查明红光能穿透到海洋多深的地方）。接着给出常识依据：“Seawater absorbs different colours at different depths, and as an experienced diver, Michiels was aware that red light is extinguished not far below the surface whereas blue-green light penetrates deeper.”（海水在不同深度吸收不同颜色的光；作为有经验的潜水员，他知道红光在离水面不深处就会消失，而蓝绿光能穿透得更深）。本题的定位句紧接着出现：“In theory, once he reached about 15 metres, he should have been plunged into darkness.”（理论上，一旦他到达约 15 米深处，本应陷入一片黑暗）。句首的 In theory 直接标明这是推算、预判；should have been 是“按道理本应是”的典型表达；plunged into darkness 即“完全陷入黑暗”，与题干的 total darkness 程度一致；15 米与题干的 about 15 metres 数字、约数词全同；dive 的时间则由本段首句的 September 2007 坐实。题干把“预判”如实还原为 expected to encounter total darkness，信息方向完全一致，所以答案是 TRUE。做题提醒：本题的干扰来自紧随其后的实况句 “Instead, something totally unexpected happened. Sure enough, 20 metres down it was as dark as night.”，但那是 20 米的实测，不是对 15 米预期的否定；只要抓住 In theory 这个信号词，就不会把“预期”和“实况”混为一谈。",
          "traps": [
            "为什么不是 FALSE：FALSE 需要原文与题干相矛盾。原文用 “In theory, once he reached about 15 metres, he should have been plunged into darkness.” 明确写出他在约 15 米处预期完全黑暗，与题干同向；后文 20 米才黑属于实际观察，并未推翻他的预判，两者不构成矛盾。",
            "为什么不是 NOT GIVEN：原文不仅给出了 15 米这个具体数字，还用了 In theory 和 should have been 两个表示推断的表达，把“预期”交代得非常清楚。信息明确存在，不能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "Michiels could see the red markings on fish without the aid of the red filter.",
          "translation": "Michiels 不用红色滤光片也能看见鱼身上的红色斑纹。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Even with the red filter removed, Michiels could pick them out without much trouble once his eyes grew accustomed to the gloom."
          },
          "synonyms": [
            "“without the aid of the red filter” 同义替换为原文的 “with the red filter removed”，即滤光片已摘下、不再借助它",
            "“could see the red markings on fish” 同义替换为原文的 “could pick them out”，them 回指上一段末尾提到的红光斑点与红眼鱼",
            "“could see … without much trouble” 与原文 “could pick them out without much trouble” 对应，均表示辨认并不费力",
            "“Once his eyes grew accustomed to the gloom” 补充说明条件：肉眼适应幽暗环境后即可辨认，进一步证明不需要滤光片"
          ],
          "locatingTip": "定位：题干关键词是 red filter（红色滤光片），这个短语在第 2 段和第 8 段都出现；题干强调“没有滤光片也能看见”，所以要找的是滤光片“被摘下之后”的描述，即第 2 段首句的 “Even with the red filter removed”。确定答案技巧：本题考“是否需要借助工具”，判分点是 Even 这个让步副词与 removed 这个词。Even with the red filter removed 意为“即使把红色滤光片摘掉”，后面立刻说 Michiels could pick them out without much trouble（他不费力就能把它们认出来），可见不靠滤光片同样能看见红色斑纹，与题干一致，故判 TRUE。做这类题要警惕把“借助器具才看见”（第 1 段戴滤光片下潜）与“撤去器具仍能看见”（第 2 段）混为一谈，两段是先后两个阶段，题干问的是后者。",
          "analysis": "第 1 段讲 Michiels 为了查明红光在红海消失的深度，把特制红色滤光片装在潜水面罩上下潜，结果在 20 米处意外看到红色斑点和红眼虾虎鱼。第 2 段接着写这一发现被进一步确认：“Even with the red filter removed, Michiels could pick them out without much trouble once his eyes grew accustomed to the gloom.”（即使把红色滤光片摘掉，Michiels 在眼睛适应幽暗环境后也能毫不费力地把它们辨认出来）。句中 Even 是让步副词，暗示“在通常情况下人们会以为必须靠滤光片才看得见，但事实并非如此”；red filter removed 即题干所说的 without the aid of the red filter；pick them out 是“从背景中辨认出”，与题干的 see the red markings on fish 对应；them 承接上文，指第 1 段末尾 “red spots began to show up all over the reef” 和 “a group of goby fish with bright red eyes” 中的那些红色标记；without much trouble 说明辨认没有任何困难。整句与题干的信息完全同向，因此答案是 TRUE。下一句 “It seems strange that no diver or researcher had spotted all this red before …”（奇怪的是以前没有潜水员或研究者注意到这些红色）从反面强化了“肉眼可见、只是没人想到去看”这一事实，可作旁证。",
          "traps": [
            "为什么不是 FALSE：原文用 Even with the red filter removed 加 could pick them out without much trouble，直接说明撤去滤光片后他照样看得见，与题干“不用滤光片也能看见红色斑纹”完全一致，没有任何相反信息。",
            "为什么不是 NOT GIVEN：原文对“没有滤光片时是否看得见”给出了明确回答，并且还补充了 “once his eyes grew accustomed to the gloom” 这个前提条件，信息完整，不属于未提及。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "Other divers had assumed they would see fish with red markings.",
          "translation": "其他潜水员曾以为自己会看到带有红色斑纹的鱼。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "It seems strange that no diver or researcher had spotted all this red before, but as Michiels points out, no one saw it because no one expected to see it."
          },
          "synonyms": [
            "“other divers” 同义替换为原文的 “no diver or researcher”，原文把潜水员与研究者的范围整体点出",
            "“had assumed” 与原文的 “expected” 同义，都表示事先的预设",
            "“would see fish with red markings” 对应原文的 “expected to see it”，it 回指 all this red（这些红色）",
            "原文的 “no one saw it because no one expected to see it” 与题干 “had assumed they would see” 构成正面对立：原文说没有人预料会看到，题干说他们以为会看到"
          ],
          "locatingTip": "定位：题干关键词 other divers 在第 2 段以 no diver or researcher 的形式出现，同段第 2 句即定位句。确定答案技巧：本题考“是否预期到”，原文的逻辑是“以前没人注意到这些红色，原因是没人预期会看到（no one saw it because no one expected to see it）”。题干却说其他潜水员 had assumed they would see（曾以为自己会看到），把原文的否定预期改成了肯定预期，方向正好相反，因此判 FALSE。这类题要特别留意 not、no、never 之类的否定信息：原句主干是 no one expected，题干却写成 they had assumed，属于典型的“否定改肯定”式矛盾。",
          "analysis": "第 2 段第 2 句是本题的定位句：“It seems strange that no diver or researcher had spotted all this red before, but as Michiels points out, no one saw it because no one expected to see it.”（奇怪的是，以前没有任何潜水员或研究者注意到这些红色，但正如 Michiels 指出的，没人看见是因为没人预料会看到）。句中有两层信息：一是事实层面，此前任何人都没有发现这些红色；二是原因层面，之所以没人发现，恰恰因为大家心里根本没预期会有这种东西。也就是说，其他潜水员不仅没有“看到”，更没有“以为自己会看到”。题干却把对象换成 other divers，把动词换成 had assumed they would see，断言他们事先以为自己会看到带红斑的鱼，这与原文 “no one expected to see it” 直接冲突，属于事实矛盾，故判 FALSE。注意本句的 because 是解题关键：它把“没看见”的成因归结为“没有预期”，而题干恰恰声称有这种预期，两者无法共存。后一句 “On that one dive, Michiels discovered three fish species with prominent red markings, and has found many others since.”（在那一次潜水中他就发现了三种有明显红色斑纹的鱼，此后又找到许多）进一步说明这项发现是他个人的、反常的，而不是同行们的共同预期。",
          "traps": [
            "为什么不是 TRUE：原文明确写 no one expected to see it（没有人预料会看到它），即当时所有潜水员与研究者都没有“以为自己会看到红斑鱼”这种预设，题干与之相反。",
            "为什么不是 NOT GIVEN：原文对“其他人是否预期”这件事交代得非常直接（no one saw it because no one expected to see it），是有明确信息的否定表述，与题干冲突，因此属于 FALSE 而非信息缺失。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "All the fish with red markings that Michiels found during his diving expeditions came from the Red Sea.",
          "translation": "Michiels 在潜水考察中发现的所有带红色斑纹的鱼都来自红海。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "On that one dive, Michiels discovered three fish species with prominent red markings, and has found many others since."
          },
          "synonyms": [
            "“found during his diving expeditions” 同义替换为原文的 “discovered … and has found many others since”，其中 since 表示此后陆续的发现",
            "“fish with red markings” 同义替换为原文的 “fish species with prominent red markings”",
            "“All … came from the Red Sea” 在原文找不到对应表达：原文只说那一次下潜（On that one dive）在红海发现了三种，对“此后发现的许多种来自哪里”以及“是否全部来自红海”都没有交代"
          ],
          "locatingTip": "定位：题干关键词是数字范围和地点，可先用专有名词 Red Sea 与 red markings 定位到第 1、2 段。确定答案技巧：本题的判分点在量词 All。原文第 2 段末句说得很清楚：在那一次潜水中发现了三种带红斑的鱼，此后又找到许多（many others since），但没有说明这些后续的发现是在哪里进行的；文中另有线索显示他回国后还买了热带鱼养在实验室里（“once back in Germany, he bought an assortment of tropical fish and installed them in his lab.”），说明研究对象并不限于红海。原文既然没有给出“所有带红斑的鱼都出自红海”这一全称结论，题干就属于无据的全称断言，判 NOT GIVEN。遇到 all、every、only 这类范围词，先回原文核对是否真有对应全称表述，没有就不能强行判 TRUE。",
          "analysis": "第 2 段末句是本题的落点：“On that one dive, Michiels discovered three fish species with prominent red markings, and has found many others since.”（在那一次潜水中，Michiels 发现了三种带有明显红色斑纹的鱼，此后又找到了许多其他种类）。句子只交代了两件事：一是那一次（On that one dive，按第 1 段可知就是红海那次）发现了三种；二是此后陆续又发现许多种，但没有交代这些后续发现发生在哪里。全文其他地方也没有把“全部带红斑的鱼”与红海绑定：第 5 段还提到他回到德国后买了各种热带鱼放进实验室观察 “Then, once back in Germany, he bought an assortment of tropical fish and installed them in his lab.”，说明他的研究对象涵盖实验室里来自其他海域的热带鱼；第 6 段说他和同事共鉴定出约 50 种带红色荧光的鱼 “have identified some 50 species with red fluorescence.”，同样没有说明这些鱼的地理来源是否全部属于红海。题干用一个 All 把范围锁死为“所有带红斑的鱼都来自红海”，这个全称判断在原文里既没有被证实也没有被否定，属于信息缺失，因此判 NOT GIVEN。做题提示：Michiels 常年在红海潜水（“spends part of each year in Egypt, where he dives in the Red Sea”）只是一个背景事实，不能据此推出他所有样本都来自红海，这是典型的“以偏概全”陷阱。",
          "traps": [
            "为什么不是 TRUE：原文只确认红海那次下潜发现了三种带红斑的鱼，并把此后的发现模糊地表述为 “has found many others since”，从未说所有发现都出自红海；而且他回国后还在实验室研究买来的多种热带鱼，可见样本来源并非单一。题干的 All 在原文没有依据。",
            "为什么不是 FALSE：原文并没有否认“都来自红海”，也没有说他的发现来自别的海域，只是对此没有交代。既未证实也未否定，属信息缺失，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "Michiels first thought of the possibility that fish could fluoresce while he was in Germany.",
          "translation": "Michiels 第一次想到鱼可能发出荧光这一可能性，是在德国的时候。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "At 20 metres down, there had to be some other explanation for the red Michiels was seeing. He suspected fluorescence."
          },
          "synonyms": [
            "“first thought of the possibility that fish could fluoresce” 同义替换为原文的 “He suspected fluorescence”，suspected 即“产生怀疑、想到某种可能”",
            "“while he was in Germany” 与原文的地点线索相冲突：He suspected fluorescence 出现在第 3 段，讲的是他在红海 20 米深处的现场推理，而回到德国是第 5 段才发生的事",
            "第 5 段 “With only a week left in Egypt, and lacking the equipment to confirm that the fish were fluorescent, Michiels photographed as many of them as he could.” 说明他离开埃及前就已经带着“鱼在发荧光”这一猜想，德国之行只用于后续验证"
          ],
          "locatingTip": "定位：题干的核心是“首次产生荧光猜想的地点”，因此要盯住荧光（fluorescence / fluoresce）这一想法第一次出现的位置。荧光第一次出现在第 3 段：“He suspected fluorescence.”，而该段讲的是红海 20 米深处的推理过程；德国（Germany）直到第 5 段才作为回国后的地点出现。确定答案技巧：把两处时间地点串起来就能判 FALSE——他是在埃及的红海现场（第 3 段）先怀疑是荧光，回国（第 5 段）只是为了用实验室设备确认。题干的 while he was in Germany 把地点安错了，属于事实矛盾。做时间地点类判断题，最佳做法是把事件按原文顺序排出时间轴，再看题干给的时间点是否落在正确的事件上。",
          "analysis": "第 3 段回答“在没有红光的地方鱼为什么呈红色”这一问题：普通红色颜料靠反射红光显红，而在 20 米深处没有红光，因此必有别的解释。原文写道：“At 20 metres down, there had to be some other explanation for the red Michiels was seeing. He suspected fluorescence.”（在 20 米深处，Michiels 看到的红色必定有别的解释。他怀疑是荧光）。这句 He suspected fluorescence 就是“想到鱼可能发出荧光”这一念头的首次出现，位置在红海 20 米深处的现场，也就是他在埃及期间。第 5 段才写回国后的验证：“With only a week left in Egypt, and lacking the equipment to confirm that the fish were fluorescent, Michiels photographed as many of them as he could. Then, once back in Germany, he bought an assortment of tropical fish and installed them in his lab. Here he confirmed that the fish did indeed fluoresce.”（在埃及只剩一周，又缺乏确认鱼是否发荧光的设备，他尽量多拍照片。随后回到德国后，他买了各种热带鱼放进实验室，在这里他确认这些鱼确实发荧光）。可见 Germany 对应的是“实验验证”阶段，而“首次产生荧光猜想”发生在埃及的红海潜水中。题干把首次想到荧光的地点写成德国，与原文的先后顺序相反，故判 FALSE。注意 lacking the equipment to confirm 这一细节：如果猜想到德国才产生，就不存在“在埃及因设备不足而无法确认”的问题，这一句本身也从侧面证明猜想在离埃及时已经存在。",
          "traps": [
            "为什么不是 TRUE：原文清楚显示猜想出现在红海潜水现场（第 3 段 He suspected fluorescence），德国只是后来做实验验证的地方（第 5 段 he confirmed that the fish did indeed fluoresce），两者阶段不同，不能把首次猜想安在德国。",
            "为什么不是 NOT GIVEN：原文既交代了猜想产生的时间地点（第 3 段，红海 20 米深处），也交代了德国阶段所做的事（买热带鱼、实验室确认），信息完备且与题干相反，因此是 FALSE 而不是信息缺失。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "Michiels remains uncertain as to what creates fluorescence in fish.",
          "translation": "关于鱼身上是什么产生了荧光，Michiels 至今仍不确定。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "However, Michiels says they are still not sure exactly what is fluorescing."
          },
          "synonyms": [
            "“remains uncertain” 同义替换为原文的 “are still not sure”，still 对应 remains，not sure 对应 uncertain",
            "“what creates fluorescence in fish” 同义替换为原文的 “what is fluorescing”，即“究竟是什么在发荧光”",
            "原文 “Michiels says they are still not sure” 中的 they 指 Michiels 与其研究团队，与题干的 Michiels 指向一致"
          ],
          "locatingTip": "定位：题干关键词是 uncertain（不确定），属于表态类词汇，回原文找表示“不确定、仍不清楚”的句子，落在第 5 段末的 “However, Michiels says they are still not sure exactly what is fluorescing.”。确定答案技巧：这类题靠表态词锁死——still not sure 与 remains uncertain 是同义替换（remains 对应 still，uncertain 对应 not sure），而 what is fluorescing 就是题干所说的 what creates fluorescence。再看下文 “It's not the crystals themselves. It's probably a fluorescent protein built into the crystals, and we have a suspicion that it might be made by bacteria.”：probably、a suspicion、might be 一连串推测性词汇，说明结论尚未确定，与题干完全吻合，故判 TRUE。注意不要被同段的肯定句 “he confirmed that the fish did indeed fluoresce” 误导——已确认的是“鱼确实会发荧光”这一现象，未确定的是“具体是什么物质在发荧光”，题干问的是后者。",
          "analysis": "第 5 段讲 Michiels 回国后在实验室的验证工作。他先确认了现象本身：“Here he confirmed that the fish did indeed fluoresce.”（他在这里确认这些鱼确实发荧光）；接着说明荧光的来源部位：“In most of the fish he looked at, the fluorescence could be traced to specialised pigment cells that lie in the skin beneath the scales. These cells contain 'guanine crystals', which scatter light to give fish their silvery sheen.”（在他看过的大多数鱼中，荧光可以追溯到位于鳞片下方皮肤中的特殊色素细胞；这些细胞含有鸟嘌呤晶体，晶体散射光线使鱼呈现银色光泽）。随后话锋一转，点出尚未解决的问题，即本题定位句：“However, Michiels says they are still not sure exactly what is fluorescing.”（然而 Michiels 说，他们仍不确定到底是什么在发荧光）。紧接着的引语进一步印证这种不确定性：“'It's not the crystals themselves. It's probably a fluorescent protein built into the crystals, and we have a suspicion that it might be made by bacteria.'”（不是晶体本身，很可能是嵌在晶体中的一种荧光蛋白，我们怀疑它也许由细菌产生）。句中 probably（很可能）、a suspicion（一种猜测）、might be（也许）都是典型的推测性表达，没有一个是确定结论。题干用 remains uncertain 概括这一状态，用 what creates fluorescence 概括 what is fluorescing，与原文严丝合缝，因此答案是 TRUE。做题提醒：本段同时存在“已确认（confirmed）”与“仍不确定（still not sure）”两层信息，判断题必须看清题干问的是哪一层，题干问的是机制（是什么在发荧光），对应的是后者。",
          "traps": [
            "为什么不是 FALSE：如果题干声称“已经查明荧光由什么产生”，那才与原文矛盾；但题干说 remains uncertain（仍不确定），恰与 still not sure 及 probably、a suspicion、might be 等措辞一致，方向相同，不能判 FALSE。",
            "为什么不是 NOT GIVEN：原文用 However 引出的那句直接交代了“他们仍不确定是什么在发荧光”，这是对题干问题的正面回答，信息明确存在，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 7–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 7,
        "end": 13
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Michiels has observed: 50 types of fish with red fluorescence in total; markings mainly near the 7 ________",
          "translation": "Michiels 观察到：总共 50 种带红色荧光的鱼；斑纹主要在 ________ 附近。",
          "answer": "head",
          "wordClass": "名词（单数，指身体部位；空格前是介词 near 和定冠词 the，作介词 near 的宾语，填单数 head，不加复数、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "The most common markings tend to be on the body towards the head and to a lesser extent around the eyes, and then the fins."
          },
          "synonyms": [
            "“markings mainly near” 同义替换为原文的 “The most common markings tend to be on the body towards the head”，most common 对应 mainly，towards 对应 near",
            "“50 types of fish with red fluorescence in total” 同义替换为原文的 “have identified some 50 species with red fluorescence”",
            "原文用 “to a lesser extent around the eyes, and then the fins” 排出次要位置，说明题干所问的“主要位置”只能是 head"
          ],
          "locatingTip": "定位：笔记的上一条“50 types of fish with red fluorescence”直接对应第 6 段第 2 句 “have identified some 50 species with red fluorescence”，顺着下一句就能找到斑纹分布。确定答案技巧：题干说斑纹“主要在某个部位附近（mainly near the 7）”，原文用最高频表述 “The most common markings tend to be on the body towards the head” 给出主次排序：最主要在朝向头部一侧的身体上，其次是眼睛周围，再次是鱼鳍。三者之中只有 head 与 mainly 对应，故填 head。填写时注意 ONE WORD ONLY，且空格前已有 the，只写名词原形 head，不要写成 heads 或 the head。",
          "analysis": "第 6 段讲 Michiels 系统搜寻红色荧光鱼的成果与他对这些斑纹意义的判断。第 2、3 句是本题依据：“He and his colleagues, Nils Anthes and Dennis Sprenger, have identified some 50 species with red fluorescence. The most common markings tend to be on the body towards the head and to a lesser extent around the eyes, and then the fins.”（他和同事 Nils Anthes、Dennis Sprenger 已鉴定出约 50 种带红色荧光的鱼。最常见的斑纹多在身体朝向头部的一侧，程度稍轻的出现于眼睛周围，然后是鱼鳍）。笔记第一栏 “Michiels has observed” 下已给出 “50 types of fish with red fluorescence in total”，与原文 some 50 species with red fluorescence 对应；紧接着的第二条 “markings mainly near the [7]” 则对应 The most common markings tend to be on the body towards the head：most common 是“最常见”，对应题干的 mainly；towards the head 是“朝向头部方向”，对应题干的 near。原文用 to a lesser extent 与 and then 把眼睛周围和鱼鳍降为次要位置，反证“主要位置”只能是 head。从词性看，head 在此为可数名词单数，位于定冠词 the 之后、作介词 near 的宾语，形式上保持原形即可，因此答案是 head。",
          "traps": []
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "Some of Michiels's beliefs are that: red fluorescence is used specifically for 8 ________ purposes",
          "translation": "Michiels 的某些看法是：红色荧光被专门用于 ________ 目的。",
          "answer": "communication",
          "wordClass": "名词（不可数，抽象名词；作 purposes 的前置定语，填不可数形式 communication，不加复数、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "To Michiels, the distribution of these markings is one of the strongest indications that red fluorescence has a very particular function: communication with other members of the species."
          },
          "synonyms": [
            "“some of Michiels's beliefs” 同义替换为原文的 “To Michiels”，即这一判断出自 Michiels 的看法",
            "“is used specifically for … purposes” 同义替换为原文的 “has a very particular function”，particular 对应 specifically，function 对应 purposes",
            "“communication purposes” 与原文冒号后的同位语 “communication with other members of the species” 直接对应，冒号即解释说明功能究竟是什么"
          ],
          "locatingTip": "定位：笔记的引导语 “Some of Michiels's beliefs are that” 对应原文的 To Michiels 这一视角表达，位于第 6 段第 4 句。确定答案技巧：题干说红色荧光“专门用于某种目的”，原文对应句的结构是 function 后接冒号加解释，功能被直接说成 communication with other members of the species（与同种其他成员交流）。冒号后的名词就是答案。填写时只写 communication 一个词，不写 with other members of the species，也不能改成 communicative 之类的形容词——空格后面还有 purposes，需要的是名词定语功能的原形 communication。",
          "analysis": "第 6 段第 4 句是本题定位句：“To Michiels, the distribution of these markings is one of the strongest indications that red fluorescence has a very particular function: communication with other members of the species.”（在 Michiels 看来，这些斑纹的分布是表明红色荧光有特定功能的最有力证据之一：与同种其他成员交流）。句中 To Michiels 标记这是他的观点，与笔记的 “Some of Michiels's beliefs” 对应；one of the strongest indications that 引出结论，即红色荧光 has a very particular function（有非常特定的功能），对应题干的 is used specifically for … purposes（被专门用于某种目的），particular 与 specifically 同义；冒号之后即功能的具象化说明 communication with other members of the species，其中 communication 就是要填的核心词。原文接下来还从旁佐证这一功能：“According to several recent studies, a whole range of animals employ fluorescence as a natural highlighter to boost the visibility of body parts they use to signal, for example to ward off enemies. In reef fish, the red tends to be confined to parts of the body used to signal, suggesting these markings serve a similar function.”（多项近期研究表明，许多动物把荧光当作天然高亮笔，以提高用于传递信号的身体部位的可见度，例如驱赶来敌；在珊瑚礁鱼类中，红色往往局限于用于传递信号的部位，说明这些斑纹起类似作用）。词性上，communication 是不可数抽象名词，在句中作 purposes 的前置定语（communication purposes 即“交流用途”），用原形即可，不加冠词也不变复数。",
          "traps": []
        },
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Some of Michiels's beliefs are that: fish, like some animals, use fluorescence to keep 9 ________ away",
          "translation": "Michiels 的某些看法是：鱼像某些动物一样，用荧光来把 ________ 赶走。",
          "answer": "enemies",
          "wordClass": "名词（复数，指被驱赶的对象；位于动词 keep 与副词 away 之间作宾语，原文用复数 enemies，须保持复数形式）",
          "locating": {
            "paragraph": "6",
            "quote": "According to several recent studies, a whole range of animals employ fluorescence as a natural highlighter to boost the visibility of body parts they use to signal, for example to ward off enemies."
          },
          "synonyms": [
            "“fish, like some animals” 同义替换为原文的 “a whole range of animals employ fluorescence”，原文先说多种动物如此，随后才把这套机制类比到珊瑚礁鱼类",
            "“use fluorescence to keep … away” 同义替换为原文的 “employ fluorescence as a natural highlighter … for example to ward off enemies”，ward off 即 keep away",
            "“enemies” 与原文的 “enemies” 原词复现，指“来敌”"
          ],
          "locatingTip": "定位：题干关键词是 keep … away（赶走），回原文找同义的驱赶表达，即第 6 段第 5 句中的 ward off enemies（驱赶来敌）。确定答案技巧：ward off 与 keep away 是一对同义短语，都表示“把某对象挡开、赶走”，其宾语 enemies 就是空格所缺的词。注意本题的类比结构：原文先说 a whole range of animals（多种动物）用荧光提高信号部位的可见度以 ward off enemies，再说在珊瑚礁鱼类中红色也集中于信号部位，暗示鱼类同样如此，这正对应题干 “fish, like some animals”（鱼像某些动物一样）。填 enemies 时保持原文复数形式，不能写 enemy 或 enemies away。",
          "analysis": "第 6 段第 5 句是本题依据：“According to several recent studies, a whole range of animals employ fluorescence as a natural highlighter to boost the visibility of body parts they use to signal, for example to ward off enemies.”（根据多项近期研究，许多种类的动物把荧光当作天然高亮笔，用以提高其用于传递信号的身体部位的可见度，例如用来驱赶来敌）。句中 employ 与题干的 use 同义，fluorescence 原词复现；a natural highlighter（天然高亮笔）对应题干“用荧光来标示”；for example to ward off enemies 是信号用途的具体例子，ward off 意为“挡开、驱赶”，与题干的 keep away 完全同义，其宾语 enemies 即为答案。紧接的第 6 句把这一普遍规律落到鱼身上：“In reef fish, the red tends to be confined to parts of the body used to signal, suggesting these markings serve a similar function.”（在珊瑚礁鱼类中，红色往往局限于用于传递信号的部位，说明这类斑纹起类似作用），这正是题干 “fish, like some animals” 这一类比结构的来源。词性上，enemies 是可数名词复数，作 ward off / keep away 的宾语，须保持复数形式；填空时若写成单数 enemy，则与原文用词不一致，会被判错。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Some of Michiels's beliefs are that: gobies depend on red fluorescence to show their 10 ________",
          "translation": "Michiels 的某些看法是：虾虎鱼依靠红色荧光来显示自己的 ________。",
          "answer": "location",
          "wordClass": "名词（单数，抽象名词，作 show 的宾语并由 their 限定；填单数形式 location，不加复数、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "For example, fish commonly use eye rings to signal that they are present and their direction of gaze, and Michiels suspects that red-eyed gobies use signals to indicate their location and keep their group together."
          },
          "synonyms": [
            "“gobies” 对应原文的 “red-eyed gobies”，原文用 red-eyed 限定，与题干所说的红眼虾虎鱼是同一对象",
            "“to show their …” 同义替换为原文的 “to indicate their …”，show 与 indicate 同义",
            "“depend on red fluorescence” 对应原文的 “use signals”，原文在此处把红眼虾虎鱼发出的信号与上文讨论的红色荧光联系起来"
          ],
          "locatingTip": "定位：题干关键词 gobies 是全文独有的一种鱼名，第 6 段末句出现 red-eyed gobies，一步即可锁定。确定答案技巧：题干说虾虎鱼靠红色荧光“显示自己的某个信息”，原文用两个并列动词的短语给出用途：indicate their location（标示自己的位置）和 keep their group together（保持群体聚集）。空格后没有别的词，前面是 their，说明要填的是 indicate 的宾语，即 location。注意区分两个用途：location 是“显示”的内容，keep their group together 是另一个并列目的，不能混填 group，也不能填 signals（那是手段而非内容）。",
          "analysis": "第 6 段末句是本题定位句：“For example, fish commonly use eye rings to signal that they are present and their direction of gaze, and Michiels suspects that red-eyed gobies use signals to indicate their location and keep their group together.”（例如，鱼类常用眼环来表明自己的存在与视线方向，Michiels 怀疑红眼虾虎鱼也用信号来标示自己的位置并保持群体聚集）。句子前半段举例说明鱼类如何用身体标记传递信号，后半段进入本题考点：red-eyed gobies 对应题干的 gobies；use signals to indicate their location 对应题干的 depend on red fluorescence to show their …，其中 indicate 与 show 同义，their 在原句与题干中都出现，因此宾语 location 就是答案。原文把用处写成两个并列的动词短语 indicate their location 与 keep their group together，二者都是信号的功能；题干只留一个空并紧跟 their，说明只取第一项的信息内容 location。词性上，location 在此为单数抽象名词，受限定词 their 修饰，保持原形即可，不写成复数 locations，也不加冠词。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "Some of Michiels's beliefs are that: there are variations in the markings of fish among those 11 ________ which are very similar",
          "translation": "Michiels 的某些看法是：那些非常相似的 ________ 之间，鱼的斑纹存在差异。",
          "answer": "species",
          "wordClass": "名词（复数，单复数同形；作介词 among 的宾语，those 为其限定语，并由 which 引导的定语从句修饰，填 species）",
          "locating": {
            "paragraph": "7",
            "quote": "And closely related species do not have completely identical markings, which suggests they might be important in species recognition."
          },
          "synonyms": [
            "“which are very similar” 同义替换为原文的 “closely related”，即亲缘关系近、彼此相似的物种",
            "“there are variations in the markings” 同义替换为原文的 “do not have completely identical markings”，not identical 即存在差异",
            "“among those species” 与原文的 “closely related species” 对应，species 一词原词复现"
          ],
          "locatingTip": "定位：笔记这一条的“非常相似的鱼类之间斑纹存在差异”概念独特，直接对应第 7 段末句 “closely related species do not have completely identical markings”。确定答案技巧：题干的结构是 those [11] which are very similar，定语从句先行词需要一个表示“类群”的名词；原文说 closely related species（亲缘关系近的物种）没有完全相同的斑纹，closely related 对应 which are very similar，do not have completely identical markings 对应 there are variations。因此空格填 species。注意 species 单复数同形，原文用的就是复数含义，直接照抄 species 即可，不要写 speciess 或 specie，也不要填 recognition（那是同句后半部分提到的、由斑纹差异推出的另一件事）。",
          "analysis": "第 7 段讲红色信号为何“私密”以及斑纹在物种辨识中的意义：“Red light, whatever its source, doesn't travel far through water, which suggests signals are intended to be private, seen only by nearby fish of the right species. There are several lines of evidence to support this, says Michiels. And closely related species do not have completely identical markings, which suggests they might be important in species recognition.”（红光无论来源如何都传不远，这说明信号本意就是私密的，只有附近同类鱼才能看到。Michiels 说有多条证据支持这一点。而且亲缘关系很近的物种，其斑纹并不完全相同，这暗示这些斑纹在物种识别上可能很重要）。本题定位在最后一句：closely related species 即题干所说的 those … which are very similar（非常相似的类群）；do not have completely identical markings 即题干 there are variations in the markings（斑纹存在差异）。空格前的 those 与空格后的 which are very similar 共同限定中心名词，只有表示物种的 species 能同时满足语义与结构要求。词性上，species 为单复数同形的可数名词，此处表复数概念，填 species 即可，不加 s。同句末尾的 species recognition（物种识别）说明斑纹差异的功能，那是结果而非空格内容，切勿填 recognition。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Other benefits of red fluorescence: fish cannot easily be seen near backgrounds of 12 ________ which give off a red light",
          "translation": "红色荧光的其他好处：在会发出红光的 ________ 背景附近，鱼不容易被发现。",
          "answer": "corals",
          "wordClass": "名词（复数，指会发出微弱红光的海洋生物；作介词 of 的宾语，并由 which 引导的定语从句修饰，原文用复数 corals，须保持复数形式，不加冠词）",
          "locating": {
            "paragraph": "8",
            "quote": "During his first dive with the red filter, he noticed corals glow a dark but faint red too. Against this irregular red background, a fish that glows red all over would be hard to distinguish."
          },
          "synonyms": [
            "“fish cannot easily be seen” 同义替换为原文的 “a fish that glows red all over would be hard to distinguish”，hard to distinguish 对应 cannot easily be seen",
            "“backgrounds of … which give off a red light” 同义替换为原文的 “corals glow a dark but faint red too” 与 “this irregular red background”，glow a faint red 即发出微弱红光",
            "“Other benefits” 对应原文引出第二项作用的首句 “Michiels suspects red fluorescence has another important role for some reef fish: helping them blend in.”，blend in 即“融入背景、不易被看见”"
          ],
          "locatingTip": "定位：笔记的栏目名 “Other benefits of red fluorescence” 对应第 8 段首句 “Michiels suspects red fluorescence has another important role for some reef fish: helping them blend in.”，全段都在讲“融入背景”这一好处。确定答案技巧：题干要的是“会发红光、构成红色背景”的东西，原文写 he noticed corals glow a dark but faint red too，紧接着说 Against this irregular red background, a fish that glows red all over would be hard to distinguish（在这样不规则的红色背景下，通体发红光的鱼很难被分辨出来）。glow a faint red 对应 which give off a red light，this irregular red background 对应 backgrounds of，因此填 corals。注意保持复数 corals，且不要填 background（那是被 corals 构成的东西）。",
          "analysis": "第 8 段讲红色荧光的第二项作用——帮助部分珊瑚礁鱼类隐蔽。“Michiels suspects red fluorescence has another important role for some reef fish: helping them blend in. During his first dive with the red filter, he noticed corals glow a dark but faint red too. Against this irregular red background, a fish that glows red all over would be hard to distinguish. More compelling for Michiels is the case of the scorpionfish, which lies perfectly still until food swims past, which it then sucks in.”（Michiels 怀疑红色荧光对某些珊瑚礁鱼还有一项重要作用：帮助它们融入环境。第一次戴着红色滤光片下潜时，他就注意到珊瑚同样泛着暗而微弱的红光。在这样不规则的红色背景下，一条通体发红光的鱼会很难被分辨出来。对 Michiels 来说更有说服力的是蝎子鱼的情况：它一动不动地趴着，直到食物游过便一口吸入）。题干与本句的对应关系清晰：corals glow a dark but faint red too 说明珊瑚会发出（泛出）微弱的红光，对应 backgrounds of [12] which give off a red light；Against this irregular red background … hard to distinguish 对应 fish cannot easily be seen。因此空格填 corals，且须保持原文的复数形式；若填单数 coral，与原文用词不符。另外下一句提到的 scorpionfish 是隐蔽能力的另一例证，属于同段不同细节，与空格无关。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "The ability to see red amongst fish: the only fish proven to have this ability is the 13 ________",
          "translation": "鱼类的辨红能力：唯一被证实具备这种能力的鱼是 ________。",
          "answer": "seahorse",
          "wordClass": "名词（单数，鱼名；位于定冠词 the 之后作表语，填单数形式 seahorse，不加复数、不加冠词）",
          "locating": {
            "paragraph": "9",
            "quote": "Fish that live in a world dominated by blue-green light are assumed to have eyes tuned to those wavelengths, and most marine fish that have been studied are thought incapable of seeing red. One exception is the seahorse, whose eyes are sensitive to red."
          },
          "synonyms": [
            "“the only fish proven to have this ability” 同义替换为原文的 “One exception is the seahorse”，exception 即“唯一的例外”",
            "“this ability” 即前文的 “seeing red”，原文表述为 “whose eyes are sensitive to red”（眼睛对红色敏感）",
            "“proven” 与原文的 “have been studied”“are thought incapable of seeing red” 形成对照：被研究过的大多数海鱼被认为看不见红色，而被确认的例外是海马"
          ],
          "locatingTip": "定位：笔记最后一条栏目是 “The ability to see red amongst fish”，对应第 9 段（末段）关于鱼类辨红能力的讨论，关键信号词是 exception（例外）与 sensitive to red（对红色敏感）。确定答案技巧：题干中的 the only 对应原文的 One exception，proven to have this ability 对应 whose eyes are sensitive to red，因此空格填 seahorse。注意本段前面说 most marine fish … are thought incapable of seeing red（大多数被研究过的海鱼被认为看不见红色），这是一般情况；题干问的是唯一例外，务必落到 One exception is the seahorse 这半句，不要误填与前文并列出现的其他鱼名。填词只写 seahorse 一个词，保持原文小写形式。",
          "analysis": "第 9 段（末段）讨论“鱼若要利用红色，就必须看得见红色”这一前提：“Yet if red plays any part in a fish's life, then it must be able to see it. Fish that live in a world dominated by blue-green light are assumed to have eyes tuned to those wavelengths, and most marine fish that have been studied are thought incapable of seeing red. One exception is the seahorse, whose eyes are sensitive to red. As for the other fish, it remains to be seen.”（然而，如果红色在鱼的生活中起任何作用，鱼就必须能看见红色。生活在蓝绿光主导环境中的鱼被认为其眼睛调适到了那些波长，大多数被研究过的海鱼被认为无法看见红色。唯一的例外是海马，它的眼睛对红色敏感。至于其他鱼类，还有待观察）。本题定位在后两句：One exception 即题干 the only fish（唯一的例外），seahorse 是被明确点出的例外物种，whose eyes are sensitive to red 对应题干 proven to have this ability（被证实具备这种能力）。注意原文用词的分寸：most marine fish that have been studied are thought incapable of seeing red（大多数被研究过的海鱼“被认为”看不见红色），用的是 thought、assumed 这类推测表达，只有海马被正面肯定 eyes are sensitive to red；末句 As for the other fish, it remains to be seen（其他鱼类还有待观察）则把其余情况悬置，进一步凸出海马作为确定例外的地位。词性上，seahorse 是单数名词（鱼名），位于定冠词 the 之后作表语，用原形、不加复数即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
