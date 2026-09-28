(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-236", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-236",
  "meta": {
    "examId": "p2-high-236",
    "title": "War of the Plants【2026.6新增】",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–21 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 21
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "an example of a plant’s use of chemicals in its reproductive process",
          "translation": "植物在其繁殖过程中使用化学物质的一个例子",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "D",
            "quote": "As an example, recent research on the common thorn apple, Datura stramonium, a weed found throughout Australia, has found that two powerful chemicals are released from the seed during the early stages of germination."
          },
          "synonyms": [
            "题干的 “in its reproductive process”（在繁殖过程中）同义替换为原文的 “during the early stages of germination”（在萌发初期），种子萌发正是植物繁殖的起始环节",
            "题干的 “use of chemicals” 对应原文的 “two powerful chemicals are released from the seed”（种子释放出两种强效化学物质）",
            "题干的 “an example” 在原文中以 “As an example” 直接引出，紧接着的下一句 “In fact, it is necessary for the chemicals to be released from the seed coat so that the seed can germinate.” 进一步说明化学物质与种子萌发的必然联系"
          ],
          "locatingTip": "定位：题干里最容易辨认的不是名词而是 “reproductive process” 这一概念，它对应原文的 seed（种子）与 germination（萌发）；扫读全文时寻找与种子、萌发有关的句子，只有 D 段出现 thorn apple 的种子案例。确定答案技巧：判断“化学物质是否用于繁殖”要看这批化学物质出现在哪个生命阶段——D 段明确说是 “released from the seed during the early stages of germination”，并且 “it is necessary for the chemicals to be released from the seed coat so that the seed can germinate”，说明它直接参与种子萌发这一繁殖环节，而不是用来对付捕食者，因此锁定 D 段。",
          "analysis": "D 段先谈农业中的化感作用，然后给出具体案例：“As an example, recent research on the common thorn apple, Datura stramonium, a weed found throughout Australia, has found that two powerful chemicals are released from the seed during the early stages of germination. In fact, it is necessary for the chemicals to be released from the seed coat so that the seed can germinate. Once released, the chemicals then provide a barrier that inhibits the growth of any potential plant competitor near the thorn apple seedling.”（例如，对澳大利亚常见的杂草曼陀罗（Datura stramonium）的近期研究发现，种子在萌发初期会释放出两种强效化学物质；事实上种子必须释放这些物质才能萌发；一旦释放，它们便形成屏障，抑制幼苗附近任何潜在竞争植物的生长）。题干问的是“植物在繁殖过程中使用化学物质的例子”，原文落点正是种子（繁殖体）在萌发（繁殖的关键步骤）时释放化学物质，属于 D 段独有的信息：B、C 两段中的化学物质用于防御，E、F 两段谈这些物质的特性与利用价值，都不涉及繁殖过程。",
          "traps": [
            "为什么不选 B：B 段的化学物质（毒液、黏胶、刺激性物质）都服务于防御捕食者，与种子的萌发、繁殖无关。",
            "为什么不选 C：C 段只是在总结 “some plants use chemicals to protect themselves”，并引出化感作用的定义，没有给出任何与繁殖相关的案例。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "how some plants use a kind of glue to discourage attack",
          "translation": "有些植物如何用一种胶（黏性物质）来阻止（动物的）侵害",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "In other plants of the same family, the sacs contain a natural adhesive and the unsuspecting insect landing on such a leaf and rupturing a trichome sac is held onto the plant, unable to depart."
          },
          "synonyms": [
            "题干的 “a kind of glue” 同义替换为原文的 “a natural adhesive”（一种天然黏合剂）",
            "题干的 “discourage attack” 对应原文的 “is held onto the plant, unable to depart”（被粘在植物上无法离开），即用胶把昆虫困住，从而阻止其继续危害",
            "题干的 “some plants” 对应原文的 “In other plants of the same family”（同科的其他植物）"
          ],
          "locatingTip": "定位：题干的核心词 glue 在原文中没有原词，要用近义词 adhesive 去扫读；也可以反过来扫 “held onto” 这类表示“被困住”的动词短语。这两处都在 B 段第 5 句。确定答案技巧：判断依据是“胶”这一机制有没有被展开描述——B 段先讲有毒化学物质（tomato），紧接着用 In other plants of the same family 转向黏胶机制，说昆虫一旦弄破小囊就会被粘住无法脱身，正是题干所说的“用胶阻止侵害”。注意 C 段虽然出现了 glues 一词，但那只是对 B 段内容的回指概括，不是题目所问的机制描述。",
          "analysis": "B 段的主线是茄科植物（Solanaceae，包括番茄、马铃薯等）身上的腺毛（glandular trichomes），其小囊（sac）里的化学物质承担不同功能。第一层功能是有毒物质：“an insect landing on a tomato leaf and rupturing the sac is exposed to a toxic chemical which will deter it from feeding on that plant in future.”；第二层功能就是本题的黏胶：“In other plants of the same family, the sacs contain a natural adhesive and the unsuspecting insect landing on such a leaf and rupturing a trichome sac is held onto the plant, unable to depart.”（同科的其他植物中，小囊里装的是一种天然黏合剂，毫无戒备的昆虫落到这种叶子上并弄破一个腺毛小囊后，就被粘在植物上，无法离开）。题干的 glue 对应 natural adhesive，discourage attack 对应被粘住无法离开这一结果，因此答案是 B 段。题干中的 “some plants” 也提示这只是“某些植物”的做法，与原文 “In other plants of the same family” 的限定一致。",
          "traps": [
            "为什么不选 C：C 段开头的 “The poisons and glues of the Solanaceae” 只是对本段之前内容的回头概括（用 glues 一词复述 B 段的黏胶机制），该段随后转入“化感作用”的定义与桉树案例，并未描述用胶阻止攻击的过程。",
            "为什么不选 A：A 段的防御手段是物理性的（叶片紧紧卷起、叶片多毛粗糙），A 段没有出现黏性物质，与题干不符。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "two examples of non-chemical methods of defence in plants",
          "translation": "植物非化学防御方法的两个例子",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "The hairs, or trichomes, which are found on the inner surface of the rolled-up spinifex leaf are believed to assist in minimising water loss. Trichomes also have defensive roles against predators. Many plants, such as the sunflower, have hairy leaves which are rough to the touch."
          },
          "synonyms": [
            "题干的 “non-chemical methods” 同义替换为原文的 “One of these relates to their physical attributes”（其中一点与植物的物理属性有关），即以形态结构而非化学物质来防御",
            "题干的 “two examples” 对应原文在同一段先后给出的两个例子：spinifex（叶片紧紧卷起、内侧绒毛有助减少水分流失）与 sunflower（叶片多毛、口感粗糙）",
            "题干的 “methods of defence” 对应原文的 “Trichomes also have defensive roles against predators” 以及 “the sensation is unpleasant on the tongue and the animal normally moves on to find more palatable food.”"
          ],
          "locatingTip": "定位：题干的关键词是“非化学”，先在心里把 chemical 理解为 B、C 两段讲的有毒物质、黏胶、刺激性物质，那么“非化学”就落在 A 段首句提出的 “physical attributes”（物理属性）。确定答案技巧：题意要求给出两个例子，回 A 段数例子即可——spinifex 的卷叶与绒毛、sunflower 的多毛叶片，恰好两个；而且 A 段有一句总括 “Trichomes also have defensive roles against predators”，说明这些毛发结构本身就是防御手段，不涉及化学物质。",
          "analysis": "A 段在反驳“植物毫无防御力”的误解后，明确指出植物延续物种有两大特征：“One of these relates to their physical attributes.”（其中之一与物理属性有关），随后连举两例。第一例是 spinifex：“Adapted to life in the hot, desert inland, spinifex has developed tightly rolled leaves which reduce the effects of drought stress. The hairs, or trichomes, which are found on the inner surface of the rolled-up spinifex leaf are believed to assist in minimising water loss.”；第二例是 sunflower：“Many plants, such as the sunflower, have hairy leaves which are rough to the touch. When the plant is bitten by a grazing animal, the sensation is unpleasant on the tongue and the animal normally moves on to find more palatable food.”（许多植物，例如向日葵，叶片多毛、摸起来粗糙；被食草动物咬到时，舌头上的感觉很不舒服，动物通常转头去找更可口的食物）。两例都是依靠叶片形态与毛发这类物理特征，没有任何化学物质的参与，与题干的 “non-chemical methods” 完全吻合，故答案是 A 段。",
          "traps": [
            "为什么不选 B：B 段的防御完全依赖腺毛小囊中的化学物质（有毒物质、天然黏合剂、荨麻的刺激性物质），属于化学防御。",
            "为什么不选 E：E 段讨论的是化感化学物质的性质与研发用途，通篇谈化学物质，与“非化学方法”相反。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "a definition of the term allelopathy",
          "translation": "对 allelopathy（化感作用）这一术语的定义",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Chemical interactions that occur between plants are known as ‘allelopathy’, and in natural plant communities it is one of many factors which determine how plants grow in relation to one another."
          },
          "synonyms": [
            "题干的 “a definition of the term” 对应原文的下定义句式 “Chemical interactions that occur between plants are known as ‘allelopathy’”（植物之间发生的化学相互作用被称为化感作用）",
            "术语 allelopathy 为原词复现，定义内容由前面的名词短语 “Chemical interactions that occur between plants” 给出",
            "题干的 “the term” 对应原文的引号标记 ‘allelopathy’，引号本身也是术语首次定义的语言标志"
          ],
          "locatingTip": "定位：术语定义题的常规做法是扫描该术语在文中首次出现的位置（C 段）并寻找 known as / called / means / refers to 这类定义标志词，本题的 “are known as” 就是最直接的定义信号。确定答案技巧：D、E、F 三段虽然反复出现 allelopathy，但都是在“使用”这个概念（讲杂草的竞争、物质的性质、商业价值），只有 C 段用 known as 给出了它的内涵，因此答案是 C 段。",
          "analysis": "C 段承上启下：先总结前面 B 段的化学防御（“The poisons and glues of the Solanaceae and the irritant of the nettle indicate the other major method of plant survival: that some plants use chemicals to protect themselves, sometimes from each other.”），紧接着给出定义：“Chemical interactions that occur between plants are known as ‘allelopathy’, and in natural plant communities it is one of many factors which determine how plants grow in relation to one another.”（植物之间发生的化学相互作用被称为“化感作用”，在自然植物群落中，它是决定植物彼此间如何生长的众多因素之一）。句中的 are known as 是英语中典型的定义句式，被定义项是 allelopathy，定义内容是“植物之间的化学相互作用”；同段随后还给出澳大利亚桉树下植被受抑制的例子，帮助理解这一定义。题干问“对 allelopathy 这一术语的定义”，对应的正是这一句。",
          "traps": [
            "为什么不选 D：D 段是在农业语境中使用 allelopathy 这一概念（杂草的化感与曼陀罗案例），属于对该术语的运用而非定义。",
            "为什么不选 B：B 段只讲腺毛与其化学物质，在此之前的段落尚未出现 allelopathy 一词；E、F 两段虽然频繁提及该术语，但都是在描述它的特性与开发价值。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "descriptions of how plants use chemicals to discourage predators",
          "translation": "对植物如何利用化学物质阻止捕食者（取食）的描述",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "For example, an insect landing on a tomato leaf and rupturing the sac is exposed to a toxic chemical which will deter it from feeding on that plant in future."
          },
          "synonyms": [
            "题干的 “use chemicals to discourage predators” 同义替换为原文的 “is exposed to a toxic chemical which will deter it from feeding on that plant in future”（接触到有毒化学物质，从而使其今后不敢再取食该植物）",
            "题干的 “predators” 对应原文的 “an insect”（取食植物的昆虫），以及下文的 “an animal”（触碰荨麻的动物）",
            "题干的 “descriptions”（描述，复数）对应原文在同一段连续给出的多种化学防御机制：有毒物质、天然黏合剂、荨麻的刺激性物质"
          ],
          "locatingTip": "定位：题干关键词 chemicals 与 predators 都属于抽象词，真正的突破口是段落首句的 glandular trichomes（腺毛）——B 段整段都在讲这类结构里的化学物质如何对付昆虫和动物。确定答案技巧：题意要求“描述”（可理解为多例），回 B 段可以看到三种不同的化学机制依次展开：番茄叶片的有毒物质（deter it from feeding）、同科植物小囊里的天然黏合剂（held onto the plant, unable to depart）、荨麻的刺激性化学物质（a shot of the chemical is discharged through the ‘needle’），数量与内容都满足题干。",
          "analysis": "B 段以腺毛（glandular trichomes）为线索，逐一呈现植物用化学物质对付动物的三种方式：① 有毒物质——“For example, an insect landing on a tomato leaf and rupturing the sac is exposed to a toxic chemical which will deter it from feeding on that plant in future.”（例如，落到番茄叶上并弄破小囊的昆虫会接触到有毒化学物质，从而使其今后不敢再取食该植物）；② 天然黏合剂——同科的另一些植物用小囊中的 adhesive 把昆虫粘住；③ 刺激性物质——荨麻的腺毛像微型皮下注射器，动物一碰就把刺激性化学物质注入其皮肤，“The irritation the chemical causes is a deterrent against future threat.”（这种化学物质造成的刺痛是防止未来威胁的威慑）。三条信息都以“化学物质加生物受挫”的模式展开，正是题干所说的 descriptions of how plants use chemicals to discourage predators，因此答案是 B 段。",
          "traps": [
            "为什么不选 C：C 段对化学防御只有一句概括 “some plants use chemicals to protect themselves, sometimes from each other”，随后立刻转入植物之间的化感作用，没有对“如何用化学物质对付捕食者”展开描述。",
            "为什么不选 A：A 段的两个例子（卷叶、多毛叶片）是物理防御，虽然也提到 “defensive roles against predators”，但依赖的是触感而非化学物质。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "benefits of using plant-based chemicals to control weeds in agricultural areas",
          "translation": "在农业地区使用植物源的化学物质来控制杂草的好处",
          "answer": "F",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Harnessing allelopathy is highly attractive to the farming industry, as at least half of the more than A$200-million annual cost of crop protection in Australia is spent on herbicides. Enhancing allelopathic activity in crop and pasture plants could reduce this enormous bill."
          },
          "synonyms": [
            "题干的 “benefits” 同义替换为原文的 “highly attractive to the farming industry”“could reduce this enormous bill”“might also offer real advantages”",
            "题干的 “plant-based chemicals” 对应原文的 “allelopathic chemicals”“natural herbicides”（从植物中采收的天然除草剂）",
            "题干的 “control weeds in agricultural areas” 对应原文的 “crop protection in Australia”“herbicides”，即用天然除草剂替代合成除草剂来控制农田杂草"
          ],
          "locatingTip": "定位：题干的 benefits 是评价性、收益性的概念，扫读时应盯住 attractive、advantages、reduce、willingness to pay a premium 这类“说好处”的词，它们在全文只集中在 F 段。确定答案技巧：E 段末尾虽提到合成除草剂（synthetic herbicides），但讲的是“研发方向”（attributes being targeted）；只有 F 段从三个角度说明使用植物源化学物质的实际好处——省钱（reduce this enormous bill）、环保（addressing environmental concerns about the over-use of synthetic chemicals）、市场认可（communities are showing an increased willingness to pay a premium for products grown with few or no synthetic chemicals），与题干完全对应。",
          "analysis": "F 段是全篇的收束段，正面谈化感物质的价值：“Allelopathic chemicals may be harvested for development as ‘natural herbicides’, similar to the harvest of pyrethrins from the pyrethrum daisy for use as natural insecticides. Harnessing allelopathy is highly attractive to the farming industry, as at least half of the more than A$200-million annual cost of crop protection in Australia is spent on herbicides. Enhancing allelopathic activity in crop and pasture plants could reduce this enormous bill. Developing and harvesting natural herbicides might also offer real advantages in addressing environmental concerns about the over-use of synthetic chemicals currently used in crop protection. In many parts of the world, communities are showing an increased willingness to pay a premium for products grown with few or no synthetic chemicals, and natural products are becoming increasingly attractive.”（化感化学物质可以被采收、开发成“天然除草剂”，就像从除虫菊中提取除虫菊酯用作天然杀虫剂一样。利用化感作用对农业极具吸引力，因为澳大利亚每年超过 2 亿澳元的作物保护费用中，至少一半花在除草剂上；增强作物与牧草的化感活性有可能削减这笔巨额开支。开发与采收天然除草剂还可能在回应“合成化学物质使用过度”这一环境关切上带来实际优势。在世界上许多地方，消费者越来越愿意为用极少或不含合成化学物质种植的产品支付溢价，天然产品正变得越来越有吸引力）。题干要求“在农业地区使用植物源化学物质控制杂草的好处”，以上三句分别给出省钱、环保、市场三方面的收益，因此答案是 F 段。",
          "traps": [
            "为什么不选 E：E 段讲的是化感化学物质的特性以及合成除草剂的研发正在瞄准这些特性，谈的是“研究”而非“使用植物源化学物质的好处”。",
            "为什么不选 D：D 段讲杂草（尤其是曼陀罗）的化感破坏力，说明的是问题本身，不是使用植物源化学物质的益处。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "a description of the characteristics of allelopathic chemicals",
          "translation": "对化感化学物质特性的描述",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "Allelopathic chemicals function in quite subtle ways. Generally they are active in small quantities, they are effective only with certain other plants, they act by disrupting the plant’s natural processes and they have no known residual effects."
          },
          "synonyms": [
            "题干的 “characteristics” 同义替换为原文的 “attributes”（E 段 “These are the very attributes which are being targeted…”）",
            "题干的 “a description of …” 对应原文首句的总起句 “Allelopathic chemicals function in quite subtle ways.”（化感化学物质的作用方式相当微妙），其后用四个并列分句逐条列举特性",
            "原文列举的四条特性分别为：用量小（active in small quantities）、只对某些植物有效（effective only with certain other plants）、通过干扰植物的自然生理过程起作用（act by disrupting the plant’s natural processes）、没有已知残留影响（have no known residual effects），与题干的 characteristics 一一对应"
          ],
          "locatingTip": "定位：题干 characteristics 是抽象名词，回原文找“列举式描述”的句式特征，即连续用 Generally they are … they are … they are … and they have … 罗列性质，这种结构全文只出现在 E 段首两句。确定答案技巧：注意区分“描述属性”与“描述作用”——D 段讲化感作用在农业中的表现（杂草竞争、曼陀罗案例），F 段讲其利用价值（天然除草剂、省钱、环保），只有 E 段集中给出性质清单，因此答案是 E 段。",
          "analysis": "E 段开头就是本题的落点：“Allelopathic chemicals function in quite subtle ways. Generally they are active in small quantities, they are effective only with certain other plants, they act by disrupting the plant’s natural processes and they have no known residual effects. It has also been found that the activity of these chemicals may be synergistic, that is, two or more such substances may combine to produce an effect that is greater than the effects of the substances acting in isolation. These are the very attributes which are being targeted in the current development of synthetic herbicides.”（化感化学物质的作用方式相当微妙：一般用量很小；只对某些其他植物有效；通过干扰植物的自然生理过程起作用；且没有已知的残留影响。研究还发现，这些化学物质的活性可能是协同性的，即两种或更多此类物质合并作用时，效果大于它们各自单独作用之和。合成除草剂的当前研发瞄准的正是这些特性）。四个并列分句加一句协同性说明，构成一份完整的“性质清单”，并用 attributes 一词对它们做了总结，与题干 “a description of the characteristics of allelopathic chemicals” 精确对应。",
          "traps": [
            "为什么不选 D：D 段描述的是化感作用在农业群落中的表现与具体案例（杂草、曼陀罗），属于“现象与实例”，不是这类化学物质本身的性质清单。",
            "为什么不选 F：F 段谈的是化感化学物质的采收与商业、环境价值，属于“用途评价”。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "an example of a physical characteristic that helps one plant conserve water",
          "translation": "一种帮助某植物保存水分的物理特征（形态特征）的例子",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "A",
            "quote": "Adapted to life in the hot, desert inland, spinifex has developed tightly rolled leaves which reduce the effects of drought stress."
          },
          "synonyms": [
            "题干的 “a physical characteristic” 同义替换为原文的 “has developed tightly rolled leaves”（长出紧紧卷起的叶片，属于形态上的物理特征）",
            "题干的 “helps one plant conserve water” 对应原文的 “reduce the effects of drought stress”（减轻干旱胁迫）以及紧随其后的 “assist in minimising water loss”（有助于把水分流失降到最低）",
            "题干的 “one plant” 对应原文明确点出的单一植物 spinifex grass"
          ],
          "locatingTip": "定位：题眼 conserve water 在原文没有原词，应换成 water loss、drought 等表达去扫读；全文只有 A 段的 spinifex 涉及缺水生存问题。确定答案技巧：A 段先说植物存活的两大特征之一与 physical attributes 有关，紧接着以 spinifex 为例，说明它演化出紧紧卷起的叶片来减轻干旱胁迫，而同段下一句又指出卷叶内侧的绒毛有助于 minimising water loss，两者共同证明“卷叶”这一物理特征服务于保水，因此答案是 A 段。",
          "analysis": "A 段的相关句为：“Spinifex grass, a plant native to Australia, provides a notable example. Adapted to life in the hot, desert inland, spinifex has developed tightly rolled leaves which reduce the effects of drought stress. The hairs, or trichomes, which are found on the inner surface of the rolled-up spinifex leaf are believed to assist in minimising water loss.”（原产澳大利亚的鬣刺草是一个显著例子。为了适应炎热的内陆沙漠生活，鬣刺演化出紧紧卷起的叶片，以减轻干旱胁迫；卷起的叶片内侧的毛发即毛状体被认为有助于把水分流失降到最低）。题干所说的 physical characteristic 对应 tightly rolled leaves 这一形态特征，helps one plant conserve water 对应 reduce the effects of drought stress 与 minimising water loss，且原文只举了 spinifex 一种植物，与题干的 “one plant” 严格对应，因此答案是 A 段。",
          "traps": [
            "为什么不选 B：B 段的 trichomes 虽然是物理结构，但该段的主角是藏在小囊里的化学物质（有毒物质、黏合剂、刺激性物质），全段与保水无关。",
            "为什么不选 D：D 段讨论的是农业环境下的化感竞争，涉及的 water 只是作物争夺资源时列举的三种资源之一（water, nutrients and light），并没有给出保水的物理特征例子。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 22–25 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 22,
        "end": 25
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "The ‘hypodermic syringes’ of the nettle plant are an example of glandular trichomes.",
          "translation": "荨麻植物的“皮下注射器”是腺毛（glandular trichomes）的一个例子。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "B",
            "quote": "In the leaves of the nettle plant these trichomes resemble miniature hypodermic syringes."
          },
          "synonyms": [
            "题干的 “hypodermic syringes” 为原文原词复现，原文作 “miniature hypodermic syringes”（微型皮下注射器）",
            "题干的 “are an example of glandular trichomes” 对应原文的指代词 “these trichomes”，而 these 回指本段第 1 句提出的 “glandular trichomes”",
            "题干的 “the nettle plant” 对应原文的 “In the leaves of the nettle plant”，植物名原词复现"
          ],
          "locatingTip": "定位：题干含引号包裹的独特说法 hypodermic syringes，全文只出现一次，位于 B 段倒数第四句，可一步锁定。确定答案技巧：判断“某物是某类的例子”这类属种关系题，关键是看原文有没有把两者绑定。B 段第 1 句先立出概念 “Some families of plants such as the Solanaceae … feature glandular trichomes.”，此后全段用 these trichomes 反复指代这一概念，荨麻叶上的“注射器”式结构正被包含其中（这些 trichomes resemble miniature hypodermic syringes），说明它是腺毛的一种形态，属种关系成立，故判 TRUE。",
          "analysis": "B 段先引入概念：“Some families of plants such as the Solanaceae, which includes the tomato, the potato and other food plants, feature glandular trichomes. In these structures a tiny sac is carried on the hair, which rises from the epidermis, or skin, of the plant.”（茄科等一些科的植物具有腺毛；这类结构中，一个小囊长在从植物表皮伸出的毛上）。随后该段用 these trichomes 指代这同一类结构，逐步介绍其多样形态：有毒小囊、天然黏合剂小囊，最后是荨麻的“注射器”——“In the leaves of the nettle plant these trichomes resemble miniature hypodermic syringes. An irritant chemical is stored at the base of the ‘syringe’. If an animal touches it, a shot of the chemical is discharged through the ‘needle’ and into the skin of the animal.”（在荨麻的叶片上，这些毛状体形似微型皮下注射器；刺激性化学物质储存在“注射器”底部，动物一碰，一剂化学物质就通过“针头”射入其皮肤）。从行文看，荨麻这些 trichomes 与段首的 glandular trichomes 是同一个上位概念下的具体形态；题干所说的“是腺毛的一个例子”正是原文的属种关系，因此答案是 TRUE。",
          "traps": [
            "为什么不是 FALSE：B 段用 these trichomes 回指第 1 句提出的 glandular trichomes，荨麻的“注射器”式结构被明确纳入这一范畴，题干与原文方向一致，不存在矛盾。",
            "为什么不是 NOT GIVEN：原文不仅给出了 glandular trichomes 这一上位概念，还用指代词把荨麻的结构与它绑定，属种关系有明确交代，并非信息缺失。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Allelopathic plants grow more successfully than plants that rely only on physical features.",
          "translation": "具有化感作用的植物比只依靠物理特征的植物生长得更成功。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "C",
            "quote": "Chemical interactions that occur between plants are known as ‘allelopathy’, and in natural plant communities it is one of many factors which determine how plants grow in relation to one another."
          },
          "synonyms": [
            "题干的 “grow more successfully than …” 是一个优劣比较结构，原文中找不到任何对应的比较级表达",
            "原文对 allelopathy 的定位只是 “one of many factors”（众多因素之一），属于中性、并列的表述，没有把它排在任何其他手段之前",
            "题干的 “plants that rely only on physical features” 在原文中也没有对应：全文只把物理属性与化学手段并列为两大生存特征（“There are two major features of plants that ensure their continuation as species.”），从未讨论“只依靠物理特征”的植物，更没有比较二者"
          ],
          "locatingTip": "定位：题干关键词 allelopathic 对应原文的 allelopathy，集中在 C、D、E、F 四段；但要找的是一个“比较优劣”的命题，而比较级 more successfully than 在原文中并不存在。确定答案技巧：把全文与“生长得好不好”有关的话逐一核对——C 段说 “it is one of many factors which determine how plants grow in relation to one another”，只说化感是决定植物如何生长的众多因素之一；A 段提出植物延续物种有两大特征，两者是并列关系（One of these … the other major method …），并无高下之分。也就是说，原文既没说化感植物占优，也没说它们处于劣势，只是根本没有做这个比较，因此判 NOT GIVEN。切忌把 “weeds are far more physically and chemically aggressive than crop and pasture species”（D 段）误当成化感植物与物理防御植物的对比——那句比较的是杂草与作物、牧草，不是两种防御策略。",
          "analysis": "全文关于化感作用的表述都是功能性的，例如 C 段：“Chemical interactions that occur between plants are known as ‘allelopathy’, and in natural plant communities it is one of many factors which determine how plants grow in relation to one another.”（在自然植物群落中，它只是决定植物彼此如何生长的众多因素之一）；D 段说明化感让杂草在与作物的资源竞争中更强势，但比较对象是“杂草与作物、牧草”，且 D 段还明确把物理竞争与化感化学竞争并列成两种机制：“Competition can be physical, where the growth of one plant maximises the use of water, nutrients and light to the disadvantage of another. Allelopathy, on the other hand, involves plant-produced chemicals which may poison a neighbouring plant.”。题干却构造了一个原文没有的比较——化感植物对“只依靠物理特征的植物”谁长得更成功。这类“两套方案谁更优”的对比是雅思 NOT GIVEN 的经典形态：原文没有给出该比较的任何证据，也不能由“杂草更强势”推出来（那是杂草对农作物的比较，不是防御方式之间的比较），因此答案是 NOT GIVEN。",
          "traps": [
            "为什么不是 TRUE：原文从未把化感植物与“只依靠物理特征的植物”放在一起比较生长成效；“one of many factors” 只是把化感列为众多因素之一，既不褒也不贬，无法推出“更成功”。",
            "为什么不是 FALSE：FALSE 需要原文给出相反信息，即“化感植物并不比只靠物理特征的植物长得更好”；原文对此完全没有交代，只是没说，因此也不构成 FALSE，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "New research into synthetic herbicides is largely focused on individual allelopathic chemicals.",
          "translation": "针对合成除草剂的新研究主要聚焦于单个的化感化学物质。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "E",
            "quote": "It has also been found that the activity of these chemicals may be synergistic, that is, two or more such substances may combine to produce an effect that is greater than the effects of the substances acting in isolation. These are the very attributes which are being targeted in the current development of synthetic herbicides"
          },
          "synonyms": [
            "题干的 “new research into synthetic herbicides” 同义替换为原文的 “the current development of synthetic herbicides”（合成除草剂的当前研发）",
            "题干的 “is largely focused on” 对应原文的 “are being targeted”（正在被瞄准、被作为研发目标）",
            "题干的 “individual allelopathic chemicals” 与原文的 “may be synergistic … two or more such substances may combine”（两种或更多物质合并作用）直接冲突：研发瞄准的首先是协同效应，而不是单个物质的作用"
          ],
          "locatingTip": "定位：synthetic herbicides 是全文唯一的合成除草剂表述，扫读时直接跳到 E 段倒数第二句。确定答案技巧：题干的 individual（单个）是本题的判分点，回原文找与之对应的表述，看到的是它的反面 synergistic（协同的）以及 “two or more such substances may combine to produce an effect that is greater than the effects of the substances acting in isolation”（两种或更多物质合并后的效果大于各自单独作用之和）。原文接下来用 These are the very attributes which are being targeted 把上述所有属性（包括协同性）指定为当前合成除草剂研发的目标，因此被瞄准的是“组合协同”而非“单个物质”，题干与原文相反，判 FALSE。",
          "analysis": "E 段的结构是先列特性、再说研发：“Allelopathic chemicals function in quite subtle ways. Generally they are active in small quantities, they are effective only with certain other plants, they act by disrupting the plant’s natural processes and they have no known residual effects. It has also been found that the activity of these chemicals may be synergistic, that is, two or more such substances may combine to produce an effect that is greater than the effects of the substances acting in isolation. These are the very attributes which are being targeted in the current development of synthetic herbicides.”（其中特别指出这些化学物质的活性可能是协同性的：两种或更多此类物质合并作用时，效果大于各自单独作用之和；而合成除草剂的当前研发瞄准的正是这些特性）。句中的 These 回指前面整个特性清单，其中协同性是最后也是被特意强调的一条，说明研发的方向是模仿“多物质协同”，与题干所说的“主要聚焦于单个化学物质（individual）”正相反。做题时要注意 individual 与 synergistic、acting in isolation 之间的对立关系：原文的 in isolation 是在描述“各自单独作用时效果较小”，而不是说研发聚焦于单个物质。",
          "traps": [
            "为什么不是 TRUE：原文明确说这些化学物质的活性可能是协同性的，两种或更多物质合并使用时效果更强，并且用 These are the very attributes which are being targeted 把这些属性（含协同性）列为研发目标，与“主要聚焦于单个化学物质”不符。",
            "为什么不是 NOT GIVEN：E 段既交代了协同性这一关键属性，也点名了 the current development of synthetic herbicides 正在瞄准这些属性，信息完整且与题干冲突，不属于未提及。"
          ]
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "Herbicides cost Australian farmers over A$200 million a year.",
          "translation": "除草剂每年让澳大利亚农民花费超过 2 亿澳元。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Harnessing allelopathy is highly attractive to the farming industry, as at least half of the more than A$200-million annual cost of crop protection in Australia is spent on herbicides."
          },
          "synonyms": [
            "题干的 “cost … over A$200 million a year” 对应原文的 “the more than A$200-million annual cost”，金额与年度表述一致，但定语不同",
            "原文的 A$200 million 修饰的是 “crop protection”（作物保护）的总开销，而除草剂 (herbicides) 只是其中的 “at least half of”（至少一半），题干把总额直接当成了除草剂的花费",
            "题干的 “Australian farmers” 与原文的 “in Australia”（澳大利亚的作物保护）并不等同：原文说的是全国作物保护费用，题干换成了农民个人支付"
          ],
          "locatingTip": "定位：数字 A$200-million 是全文唯一的金额，也是最好认的定位词，一步落到 F 段第 2 句。确定答案技巧：数字题必须核对两件事——数字修饰的对象和数字的量级关系。原文说 “at least half of the more than A$200-million annual cost of crop protection in Australia is spent on herbicides”：超过 2 亿澳元是“作物保护”的年度总开销，除草剂只占其中至少一半，即至多与总额持平、通常远低于总额。题干把 A$200 million 整个算作除草剂的支出，还改成了“澳大利亚农民”的花费，属于数字所指对象的偷换，因此判 FALSE。",
          "analysis": "F 段第 2 句：“Harnessing allelopathy is highly attractive to the farming industry, as at least half of the more than A$200-million annual cost of crop protection in Australia is spent on herbicides.”（利用化感作用对农业极具吸引力，因为澳大利亚每年超过 2 亿澳元的作物保护费用中，至少有 полови花在除草剂上）。句中 “the more than A$200-million annual cost” 的中心词是 cost of crop protection（作物保护费用），herbicides 前面有 “at least half of” 这一分数限定词，说明除草剂开销是整个作物保护预算的一部分而不是全部；紧接着的下一句 “Enhancing allelopathic activity in crop and pasture plants could reduce this enormous bill.” 也把 “this enormous bill” 指向前文的作物保护总费用。题干则写成 “Herbicides cost Australian farmers over A$200 million a year”，把总费用平移成除草剂费用，并把费用主体改成 farmers，两处改动都与原文不符，因此答案是 FALSE。做数字题的通则：先看数字后的中心名词，再看数字前面有没有 half、more than、up to 之类的限定语。",
          "traps": [
            "为什么不是 TRUE：原文的超过 2 亿澳元是作物保护（crop protection）的年度总开销，除草剂只占其中至少一半，题干把整块开销算作除草剂的花费，与原文的数量关系不符。",
            "为什么不是 NOT GIVEN：原文对数字、费用对象和除草剂所占比例都有明确交代（more than A$200-million、crop protection、at least half），信息完整且与题干冲突，不存在信息缺失，只能判 FALSE。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Question 26 单选题（Choose the correct letter, A, B, C or D）",
      "mode": "per_question",
      "questionRange": {
        "start": 26,
        "end": 26
      },
      "items": [
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "The two main points of this article are that plants can defend themselves in a number of ways, and that",
          "translation": "本文的两个要点是：植物能够以多种方式保护自己，以及……",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "F",
            "quote": "Allelopathic chemicals may be harvested for development as ‘natural herbicides’, similar to the harvest of pyrethrins from the pyrethrum daisy for use as natural insecticides. Harnessing allelopathy is highly attractive to the farming industry, as at least half of the more than A$200-million annual cost of crop protection in Australia is spent on herbicides."
          },
          "synonyms": [
            "题干前半句 “plants can defend themselves in a number of ways” 概括 A–C 段，原文见 A 段 “Plants are able to defend themselves against attack from their environment in many ways.”",
            "题干后半句的落点 “chemicals found in weeds can have practical benefits for agriculture” 同义替换为 F 段的 “Allelopathic chemicals may be harvested for development as ‘natural herbicides’” 以及 “Harnessing allelopathy is highly attractive to the farming industry”",
            "题干的 “practical benefits” 对应原文的 “could reduce this enormous bill”“might also offer real advantages in addressing environmental concerns”，即省钱与环保的实际好处"
          ],
          "locatingTip": "定位：主旨题不靠单个定位词，而要靠文章结构定位。本文前半（A 段物理防御、B 段化学防御、C 段化感作用的定义）回答“植物如何自卫”，后半（D 段杂草的化感破坏、E 段化感物质的性质与研发、F 段天然除草剂的价值）回答“这些化学物质对农业有什么用”。确定答案技巧：把选项与各段一一比对——A 项的 weeds problem 和 B 项的 considerable research 在文中都没有成为论述重心，C 项的 unique（独有）也没有依据，只有 D 项与 F 段的结论（把杂草中的化感化学物质开发成天然除草剂，对农业有实际好处）吻合。",
          "analysis": "全文结构可概括为“两种自卫手段 + 一种应用前景”。A 段先反驳植物无害论，指出植物延续物种的两大特征之一是物理属性（spinifex 的卷叶、sunflower 的多毛叶片）；B 段讲第二套手段——腺毛中的化学物质（有毒物质、黏合剂、荨麻的刺激性物质）；C 段把植物间的化学相互作用定义为 allelopathy（化感作用），并给澳大利亚桉树下植被受抑制的例子；D 段转入农业，说明杂草比作物更具物理与化学攻击性，以曼陀罗种子释放化学物质抑制竞争者为例；E 段梳理化感化学物质的特性（用量小、只对某些植物有效、干扰生理过程、无残留、可能协同），并指出合成除草剂的研发正是瞄准这些属性；F 段给出应用价值：“Allelopathic chemicals may be harvested for development as ‘natural herbicides’ … Harnessing allelopathy is highly attractive to the farming industry, as at least half of the more than A$200-million annual cost of crop protection in Australia is spent on herbicides. Enhancing allelopathic activity in crop and pasture plants could reduce this enormous bill.”（化感化学物质可被采收、开发为“天然除草剂”；利用化感作用对农业极具吸引力，因为澳大利亚每年逾 2 亿澳元的作物保护费用中至少一半用于除草剂，增强作物与牧草的化感活性有望削减这笔巨额开支）。可见文章的第二个要点就是“杂草等植物中的化学物质可以给农业带来实际好处”，与 D 项一致。",
          "traps": [
            "为什么不是 A（combating weeds is a major problem for Australian farmers）：D 段确实说杂草比作物、牧草更有攻击性，F 段也提到除草剂开销巨大，但作者的落点是“利用杂草中的化学物质造福农业”，而不是把除杂草本身当作文章的主要议题之一。",
            "为什么不是 B（considerable research has been carried out into the use of plant chemicals）：文中只提到针对曼陀罗的一项 recent research 以及正在进行的合成除草剂研发（the current development），既没有说研究数量庞大，也没有把它作为主旨之一，属于无据扩大。",
            "为什么不是 C（Australian plants have unique methods of self-protection）：文中举例的 spinifex、桉树（eucalypt）等确实与澳大利亚有关，但作者从未说这些自卫方法为澳大利亚植物所独有（unique），番茄、马铃薯所在的茄科以及荨麻都不是澳大利亚特有物种。"
          ]
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
