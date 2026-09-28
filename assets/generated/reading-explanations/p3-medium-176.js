(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p3-medium-176", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p3-medium-176",
  "meta": {
    "examId": "p3-medium-176",
    "title": "The Analysis of Fear 猴子恐惧实验",
    "category": "P3",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 27–30 选择题（单选 A/B/C/D）",
      "mode": "per_question",
      "questionRange": {
        "start": 27,
        "end": 30
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 27,
          "stem": "In the first paragraph, the writer points out that",
          "translation": "在第一段中，作者指出：",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "Over the years, the majority of people acquire a range of skills for coping with frightening situations."
          },
          "synonyms": [
            "“most humans” 同义替换为原文的 “the majority of people”",
            "“develop strategies for dealing with fear” 同义替换为原文的 “acquire a range of skills for coping with frightening situations”，其中 develop 对应 acquire，strategies 对应 a range of skills，dealing with fear 对应 coping with frightening situations",
            "“the writer points out” 对应原文直接陈述这一事实的首句，作者在段首即给出总括性判断"
          ],
          "locatingTip": "定位：本题问“第一段中作者指出什么”，题干本身几乎没有可搜索的实词，属于段落主旨题。做法是只读第一段，抓住段首这个总括句。确定答案技巧：第一段的结构是“总起—举例—转折—提问”，首句 “Over the years, the majority of people acquire a range of skills for coping with frightening situations.” 就是全段的总起句，后面用安抚发怒的老师或老板、被陌生人追赶时大叫奔跑等日常例子加以证明，选项 B 正是对首句的概括，因此选 B。",
          "analysis": "第一段共四句。首句给出普遍事实：多年来，多数人都获得了一整套应对可怕情境的技能（acquire a range of skills for coping with frightening situations）。第二句用两个日常场景说明这些技能：他们会尝试安抚发怒的老师或老板（placate a vexed teacher or boss），被怀有敌意的陌生人追赶时会大叫着逃跑。第三句用 But 转折，说有些人在别人认为压力极小的情形下也会不知所措，例如害怕被嘲笑而在一群人面前发言时发抖，或极度害怕陌生人而躲在家里、无法工作或买日用品。末句发问：为什么某些人会陷入过度的恐惧？题干问作者在首段“指出”了什么，落点就是首句这个总括性的事实判断——多数人会发展出应对恐惧的方法，与选项 B 完全对应。做题时要把“作者指出（points out）”理解为要求概括段落主旨句，而不是细节举例句。",
          "traps": [
            "为什么不是 A：原文第一段没有把 fear 与 stress 作为两种不同的情感去比较或区分，全段只有 minimally stressful 一处提到压力，说的是别人觉得压力极小的情形，与“fear 和 stress 是不同感受”无关。",
            "为什么不是 C：原文确实提到 placate a vexed teacher or boss（安抚发怒的老师或老板），句子里的 boss 容易让人联想到商业场合，但这只是“多数人具备应对技能”所举的日常例子之一，原文并没有说商业场合造成的恐惧比其他场合更多。",
            "为什么不是 D：原文说的是 some individuals become overwhelmed（有些人在小事上就崩溃），即存在过度恐惧的人，但从未说“有些人从不体验恐惧”；首句反而强调多数人都要应对 frightening situations，与 D 的说法相冲突。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 28,
          "stem": "When discussing the use of rhesus monkeys as experimental subjects, the writer notes that",
          "translation": "在讨论把恒河猴用作实验对象时，作者指出：",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "These animals undergo many of the same physiological and psychological developmental stages that humans do, but in a more compressed time span."
          },
          "synonyms": [
            "“their mental growth” 同义替换为原文的 “psychological developmental stages”（心理发育阶段）",
            "“resembles that of humans” 同义替换为原文的 “many of the same … that humans do”（与人类经历许多相同的阶段）",
            "“rhesus monkeys as experimental subjects” 对应原文的 “they have turned their attention to another primate, the rhesus monkey”，即把恒河猴当作研究对象"
          ],
          "locatingTip": "定位：题干里的专有名词 rhesus monkey 全文只在第 2 段出现一次，扫读时盯住恒河猴这个名字即可一步到位。确定答案技巧：题目问作者“指出”了关于恒河猴的什么，因此要在第 2 段中找出带有评价或说明性质的句子，也就是 “These animals undergo many of the same physiological and psychological developmental stages that humans do”——强调猴子会经历许多与人类相同的生理与心理发育阶段，对应选项 C 的 mental growth resembles that of humans。注意不要被后半句 but in a more compressed time span 带偏：它说的是猴子的发育阶段历时更短（便于研究），不是“对恐惧反应更快”。",
          "analysis": "第 2 段先说明研究思路：威斯康星大学麦迪逊分校的 Kalin 和 Shelton 通过识别调节恐惧及其相关行为的特定大脑过程来解决“为什么有人过度恐惧”这一问题；尽管有无创的计算机成像技术，这类信息在人类身上仍极难获得，所以他们把注意力转向另一种灵长类——恒河猴。接着给出选择恒河猴的理由：“These animals undergo many of the same physiological and psychological developmental stages that humans do, but in a more compressed time span.”（这些动物会经历许多与人类相同的生理和心理发育阶段，只是时间跨度被压缩了）。本段还说明研究目的：搞清调节猴子恐惧的神经回路后，就有可能找出导致人类过度焦虑的脑过程并设计新疗法，且早期干预尤其有价值。题干问作者就“把恒河猴用作实验对象”指出了什么，对应句的落点是“发育阶段与人类相同”，即心理成长与人类相似，故答案为 C。",
          "traps": [
            "为什么不是 A：原文的 more compressed time span 说的是猴子的发育阶段在更短的时间跨度内完成（几天几周相当于人类的数月数年），属于发育速度快、便于在有限时间内观察，并非“对恐惧的反应比人类更快”，两者讨论的对象不同。",
            "为什么不是 B：原文只比较了发育阶段的相同与时间跨度的压缩，从未比较猴子和人类“谁更受恐惧影响”；B 属于把原文的 developmental stages 偷换成了对恐惧的影响力。",
            "为什么不是 D：原文完全没有提到猴子大脑的处理速度（work more slowly）；more compressed time span 修饰的是发育过程的时间跨度，不是大脑运算速度，将其理解成大脑工作更慢属于概念错位。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 29,
          "stem": "Which of the following did Kalin and Shelton outline as the second stage in their research project?",
          "translation": "下列哪一项是 Kalin 和 Shelton 所列研究计划的第二阶段？",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "With such information in hand, they could then proceed to determine the age at which monkeys begin to match defensive behaviors selectively to specific cues."
          },
          "synonyms": [
            "“the second stage” 同义替换为原文的顺序标记语 “could then proceed to”（随后才能着手），与第一步的 would first have to、第三步的 Finally 形成序列",
            "“the study of reactions to fear in monkeys of different ages” 同义替换为原文的 “determine the age at which monkeys begin to match defensive behaviors selectively to specific cues”",
            "“reactions to fear” 对应原文的 “defensive behaviors”，即猴子面对恐惧线索时作出的防御行为反应"
          ],
          "locatingTip": "定位：题干关键词 Kalin and Shelton 在全文多次出现，无法单靠人名定位，要靠“second stage（第二阶段）”这一顺序信息去第 3 段找表示步骤先后的标志词。确定答案技巧：第 3 段用三个次序标志把研究计划切成三步——would first have to（第一步）、could then proceed to（第二步）、Finally（第三步）。第二步的动词是 determine the age at which monkeys begin to match defensive behaviors selectively to specific cues，即研究不同年龄的猴子何时开始把防御行为有选择地对应到特定线索，正是选项 D。",
          "analysis": "第 3 段是全文集中叙述研究计划的一段，三个句子对应三个步骤：第一步 “they would first have to find cues that elicit fear and identify behaviors that reflect different types of anxiety”（先要找出引发恐惧的线索，并识别反映不同类型焦虑的行为）；第二步 “With such information in hand, they could then proceed to determine the age at which monkeys begin to match defensive behaviors selectively to specific cues.”（掌握这些信息后，他们进而可以确定猴子在什么年龄开始把防御行为有选择地与特定线索相匹配）；第三步 “Finally, by determining the parts of the brain that reach maturity during the same time span, they could gain clues to the regions that underlie the regulation of fear and fear-related behavior.”（最后，通过确定在同一时间段内成熟的大脑部位，可以为找到调节恐惧及相关行为的脑区提供线索）。题干问的是第二阶段，对应 then proceed to 之后的内容：研究对象是不同年龄的猴子，研究内容是它们对恐惧线索的反应何时变得有选择性，即 the study of reactions to fear in monkeys of different ages，故选 D。",
          "traps": [
            "为什么不是 A：识别猴子焦虑的表现形式属于第一阶段，对应第一步中的 identify behaviors that reflect different types of anxiety（识别反映不同类型焦虑的行为），不是第二阶段。",
            "为什么不是 B：识别引起猴子应激的情境同样属于第一阶段，对应第一步中的 find cues that elicit fear（找出引发恐惧的线索），与题干所问的第二阶段不符。",
            "为什么不是 C：分析猴子的大脑发育是第三步，由 Finally 引出，对应 determining the parts of the brain that reach maturity during the same time span，时间顺序上排在第二阶段之后。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 30,
          "stem": "In the fourth paragraph, the writer notes that the three related situations",
          "translation": "在第四段中，作者指出这三种相关的情境：",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "These positions are no more frightening than those that primates encounter frequently in the wild, or those that human infants meet whenever they are left at a day-care centre."
          },
          "synonyms": [
            "“reflect common experiences” 同义替换为原文的 “no more frightening than those that … encounter frequently in the wild, or those that human infants meet”，即实验情境不过就是它们日常常遇到的情形",
            "“for infant humans and monkeys” 对应原文的 “primates”（指猴子等灵长类）与 “human infants”（人类婴儿）",
            "“the three related situations” 同义替换为原文的 “These positions”，指代上文 alone、no-eye-contact、stare 三种实验情境"
          ],
          "locatingTip": "定位：题干直接指定第四段，段落前半部分交代实验地点与做法，作者的评价集中在段末以 These positions 开头的一句，因此读到段尾这个指代短语就要停下精读。确定答案技巧：段末用 no more frightening than 把三种实验情境与“灵长类在野外经常遇到的情形”以及“人类婴儿被送到日托中心时会遇到的情形”相提并论，等于说这些情境都是猴子和人类婴儿日常熟悉的经历，对应选项 A。注意 no more … than 意为“并不比……更”，是否定程度上的差别，不能读成“更可怕”。",
          "analysis": "第 4 段交代实验设计：实验在威斯康星大学麦迪逊分校进行，Kalin 和 Shelton 让 6 至 12 个月大的猴子接触三种相关情境——alone（与母亲分离、独自留在笼中十分钟）、no-eye-contact（有人在笼外不动但不看这只幼猴）、stare（有人同样在场不动，但以中性表情直视猴子）。段末作者给出评价：“These positions are no more frightening than those that primates encounter frequently in the wild, or those that human infants meet whenever they are left at a day-care centre.”（这些情境并不比灵长类在野外经常遇到的情形、或人类婴儿被送到日托中心时会遇到的情形更可怕）。作者把三种实验情境与猴子、人类婴儿的日常经历放在同一水平上，说明它们反映的是两者共有的常见经历，故选 A。",
          "traps": [
            "为什么不是 B：原文提到人类婴儿只是用 day-care centre（日托中心）作为“常见经历”的类比对象，并没有比较猴子与人类婴儿的照护方式是否相似；“育幼方式的相似性”在原文中根本没有提及。",
            "为什么不是 C：原文说这三种情境并不比日常情形更可怕（no more frightening than），语气是否定程度差别，与“预计会让猴子比人类婴儿更痛苦”恰好相反，原文也没有做过猴子和人类婴儿痛苦程度的对比预测。",
            "为什么不是 D：第四段只说三种情境是 related situations（相关情境），并没有交代它们按对幼猴的潜在影响被分级排序；体现恐惧程度递进的说法（more frightening no-eye-contact situation）出现在第五段，是对结果的说明，不是第四段所写的设计意图。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 31–35 匹配题（从 A、B、C 三个情境中选择）",
      "mode": "per_question",
      "questionRange": {
        "start": 31,
        "end": 35
      },
      "items": [
        {
          "questionId": "q5",
          "questionNumber": 31,
          "stem": "aggressive facial expressions",
          "translation": "攻击性的面部表情",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "The monkeys made several hostile gestures: barking (forcing air from the abdomen through the vocal cords to emit a harsh, growl-like sound) and staring back."
          },
          "synonyms": [
            "“aggressive facial expressions” 同义替换为原文的 “hostile gestures … and staring back”，hostile 对应 aggressive，staring back（回瞪）属于面部的攻击性表现",
            "“the stare condition” 由原文上一句的 “So the stare condition evoked a third set of responses.” 给出归属"
          ],
          "locatingTip": "定位：先在第五段找与“攻击性、表情”对应的描写，落在 “The monkeys made several hostile gestures: barking … and staring back.” 一句。确定答案技巧：让步回看引导句 “So the stare condition evoked a third set of responses.”，可知这一整组反应都属于 stare 情境；题干说的“攻击性的面部表情”对应 hostile gestures 中的 staring back（回瞪），而回瞪正是面部层面的攻击信号，因此归属 C（the stare condition）。注意不要被同段后文的 fear grimaces 迷惑：原文说它属于 submissive（顺从）表现，不是攻击性的。",
          "analysis": "第五段按情境顺序描写猴子的反应：独自（alone）时猴子变得活跃并发出柔和的 coo 叫声；no-eye-contact 时活动大幅减少甚至长时间僵住；到 stare 时，原文写 “So the stare condition evoked a third set of responses. The monkeys made several hostile gestures: barking (forcing air from the abdomen through the vocal cords to emit a harsh, growl-like sound) and staring back.”（于是瞪视情境引发了第三组反应：猴子做出若干敌意动作——吠叫（把气从腹部经声带挤出，发出粗厉如低吼的声响）以及回瞪）。题干 aggressive facial expressions（攻击性的面部表情）对应其中的 staring back：hostile 与 aggressive 同义，回瞪是通过面部与目光表达的敌意。这一组反应明确由 the stare condition 引出，所以答案是 C。",
          "traps": [
            "为什么不是 A（the alone condition）：归属句写明这组反应由 the stare condition 引发；alone 情境的反应是变得非常活跃并发出轻柔的 coo 叫声，与攻击性表现无关。",
            "为什么不是 B（the no-eye-contact condition）：该情境下猴子的反应是大幅减少活动、有时长时间僵住（reduced their activity greatly and sometimes froze），方向是降低自身存在感，与“攻击性面部表情”正好相反。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 32,
          "stem": "prolonged stillness",
          "translation": "长时间的静止不动",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In contrast, in the more frightening no-eye-contact situation, the monkeys reduced their activity greatly and sometimes froze for extended periods of time."
          },
          "synonyms": [
            "“prolonged stillness” 同义替换为原文的 “froze for extended periods of time”，prolonged 对应 extended，stillness 对应 froze",
            "“the no-eye-contact condition” 在原文中原词复现：“the more frightening no-eye-contact situation”"
          ],
          "locatingTip": "定位：题干关键词是“静止不动”，第五段中表示僵住的动词只有 froze，扫读该词即可锁定句子。确定答案技巧：定位句开头就点名情境 “In contrast, in the more frightening no-eye-contact situation”，所以 prolonged stillness 归属 B（the no-eye-contact condition）。句首的 In contrast 也提示这一反应与前面 alone 情境的反应恰好相反，可用来验证归属没有选错。",
          "analysis": "第五段用 In contrast 把 no-eye-contact 情境与 alone 情境对照：“In contrast, in the more frightening no-eye-contact situation, the monkeys reduced their activity greatly and sometimes froze for extended periods of time.”（相反，在更可怕的“无目光接触”情境中，猴子活动大幅减少，有时还会长时间僵住）。题干 prolonged stillness（长时间的静止）与 froze for extended periods of time 一一对应，而该句开头已明确情境为 the more frightening no-eye-contact situation，故答案选 B。原文随后解释其功能：幼猴发现潜在捕食者时，目标从吸引母亲转为让自己不显眼，而抑制活动和僵住正是许多物种实现这一目标的常见手段，可见“僵住”属于 no-eye-contact 这类更危险情境下的反应。",
          "traps": [
            "为什么不是 A（the alone condition）：alone 情境下的行为与“静止”相反，原文说 most monkeys became very active（大多数猴子变得非常活跃），并频繁发出柔和的 coo 叫声。",
            "为什么不是 C（the stare condition）：stare 情境下猴子做的是吠叫、回瞪等敌意动作，以及威胁性与顺从性表现混合的动作，属于主动向对方发出信号，不是长时间静止不动。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 33,
          "stem": "a combination of contradictory signals",
          "translation": "相互矛盾的信号的组合",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Sometimes the animals mixed the threatening displays with submissive ones, such as fear grimaces, which look something like wary grins, or grinding of teeth."
          },
          "synonyms": [
            "“a combination of contradictory signals” 同义替换为原文的 “mixed the threatening displays with submissive ones”，combination 对应 mixed … with，contradictory 对应 threatening 与 submissive 的相互对立",
            "“the stare condition” 由上文 “So the stare condition evoked a third set of responses.” 及其后整段描写给出归属"
          ],
          "locatingTip": "定位：在第五段末尾寻找同时出现两类相反表现的句子，即 “mixed the threatening displays with submissive ones”。确定答案技巧：这一句仍处在 stare 情境反应的描写段落内（从 “So the stare condition evoked a third set of responses” 一直讲到段末），句中 threatening（威胁性）与 submissive（顺从性）彼此对立，正是题干的 contradictory signals，因此归属 C（the stare condition）。",
          "analysis": "第五段末句：“Sometimes the animals mixed the threatening displays with submissive ones, such as fear grimaces, which look something like wary grins, or grinding of teeth.”（有时这些动物会把威胁性的表现与顺从性的表现混在一起，例如像警觉的咧嘴笑那样的恐惧怪相，或磨牙）。句中 mixed … with 表示两类表现同时出现，而 threatening（威胁）与 submissive（顺从）在语义上互相对立，构成“相互矛盾的信号组合”，与题干 a combination of contradictory signals 完全对应。该句紧接 “So the stare condition evoked a third set of responses” 之后的整段描写，属于 stare 情境这一组反应，所以答案是 C。",
          "traps": [
            "为什么不是 A（the alone condition）：alone 情境的反应是活跃、发出柔和 coo 叫声，其功能是吸引母亲注意，原文没有出现“威胁与顺从交杂”的任何描写。",
            "为什么不是 B（the no-eye-contact condition）：该情境下猴子的反应是减少活动、长时间僵住，属于单一方向的抑制型反应，不存在两类相反信号同时出现的组合。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 34,
          "stem": "appeals for maternal protection",
          "translation": "向母亲寻求保护的诉求",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "when an infant monkey is separated from its mother, it yearns to regain the closeness and security provided by nearness to the parent. These responses help to draw the mother's attention"
          },
          "synonyms": [
            "“appeals for maternal protection” 同义替换为原文的 “yearns to regain the closeness and security provided by nearness to the parent” 加上 “help to draw the mother's attention”",
            "“maternal” 对应原文的 “mother” 与 “parent”，appeals 对应 draw the mother's attention（吸引母亲注意）",
            "“the alone condition” 在原文中原词复现，本组描写的引导句即 “In the alone condition”"
          ],
          "locatingTip": "定位：题干讲的是“向母亲发出的求助”，在第五段中找与母亲相关的句子，落在 “These responses help to draw the mother's attention”。确定答案技巧：这一句所在的一组描写从段首 “In the alone condition, most monkeys became very active …” 开始，讲的是与母亲分离后为重新获得亲近与安全感、吸引母亲注意而作出的反应，与题干 appeals for maternal protection 一致，因此归属 A（the alone condition）。",
          "analysis": "第五段开篇写 alone 情境：猴子与母亲分离，变得活跃并发出 coo 叫声。随后两句交代这些反应的功能：“More than 40 years ago it was deduced that when an infant monkey is separated from its mother, it yearns to regain the closeness and security provided by nearness to the parent. These responses help to draw the mother's attention.”（四十多年前人们就推断，幼猴与母亲分离时渴望重获靠近父母所带来的亲近与安全感；这些反应有助于吸引母亲的注意）。题干 appeals for maternal protection（向母亲寻求保护的诉求）正是这两句的概括：yearns to regain the closeness and security 说明诉求的内容是安全感，help to draw the mother's attention 说明诉求的方式是引起母亲注意，两者都出现在 In the alone condition 这一情境的描写中，故答案选 A。",
          "traps": [
            "为什么不是 B（the no-eye-contact condition）：该情境下猴子的目标已从吸引母亲转为 becoming inconspicuous（变得不显眼），手段是抑制活动、长时间僵住，不再以吸引母亲注意为目的。",
            "为什么不是 C（the stare condition）：stare 情境下猴子做的是吠叫、回瞪等敌意动作，以及威胁与顺从混合的表现，目标是 warding off an attack（抵御攻击），与向母亲求助无关。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 35,
          "stem": "the production of soft sounds",
          "translation": "发出轻柔的声音",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "In the alone condition, most monkeys became very active and emitted frequent gentle \"coo\" calls made with pursed lips."
          },
          "synonyms": [
            "“soft sounds” 同义替换为原文的 “gentle “coo” calls”，soft 对应 gentle，sounds 对应 calls",
            "“the production of” 同义替换为原文的 “emitted”，即发出（声音）",
            "“the alone condition” 在原文中原词复现，就在该句句首"
          ],
          "locatingTip": "定位：题干关键词是“轻柔的声音”，第五段中表示声音的词是 calls，且被 gentle 修饰，扫读到 coo 一词即可锁定句子。确定答案技巧：定位句句首就是 “In the alone condition”，因此 the production of soft sounds 归属 A（the alone condition）。判断时可对照另两种情况的声音特征：no-eye-contact 情境强调安静与僵住，stare 情境中的吠叫被形容为 harsh、growl-like（粗厉如低吼），都不属于“轻柔的声音”。",
          "analysis": "题干 the production of soft sounds（发出轻柔的声音）对应第五段第一句：“In the alone condition, most monkeys became very active and emitted frequent gentle “coo” calls made with pursed lips.”（在“独自”情境中，大多数猴子变得非常活跃，并频繁发出用撮起的嘴唇做出的轻柔“咕咕”叫声）。emitted 对应 the production of，gentle coo calls 对应 soft sounds，而句子开头即点明情境是 the alone condition，故答案选 A。原文随后解释这类叫声的功能是吸引母亲的注意，与第 34 题 appeals for maternal protection 同属 alone 情境，两道题落在同一情境上并不矛盾，因为题目说明中已提示“任何字母都可以重复使用”。",
          "traps": [
            "为什么不是 B（the no-eye-contact condition）：该情境下猴子大幅减少活动、有时长时间僵住，强调的是安静与不动，即让自己变得不引人注意，而不是发出轻柔的声音。",
            "为什么不是 C（the stare condition）：stare 情境下猴子发出的是吠叫声，原文形容为 harsh、growl-like（粗厉、像低吼）的声响，与“轻柔的声音”正好相反。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 36–40 摘要填空（NO MORE THAN THREE WORDS AND/OR A NUMBER）",
      "mode": "per_question",
      "questionRange": {
        "start": 36,
        "end": 40
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 36,
          "stem": "Once they had identified three types of defensive behaviour, Kalin and Shelton grouped the monkeys according to their ________ , in order to discover precisely when they were able to respond appropriately to different fear-related cues.",
          "translation": "在识别出三类防御行为之后，Kalin 和 Shelton 按照猴子的 ________ 把它们分组，以便精确查明它们何时能够对不同的恐惧相关线索作出恰当反应。",
          "answer": "age",
          "wordClass": "名词（不可数，表示年龄；受所有格 their 限定，整体作介词 according to 的宾语，故填单数不可数形式 age，不加 -s、不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "they examined four groups of infant monkeys ranging in age up to 12 weeks old"
          },
          "synonyms": [
            "“grouped the monkeys according to their age” 同义替换为原文的 “examined four groups of infant monkeys ranging in age up to 12 weeks old”，即按年龄把猴子分成四组",
            "“Once they had identified three types of defensive behaviour” 同义替换为原文的 “Having identified three categories of defensive behaviours”",
            "“in order to discover precisely when they were able to respond appropriately to different fear-related cues” 同义替换为原文的 “To establish the critical period of development”"
          ],
          "locatingTip": "定位：摘要第一句的关键信息是“按某个标准把猴子分组”，回第六段找表示分组的句子，只有 “they examined four groups of infant monkeys ranging in age up to 12 weeks old” 提到四个组。确定答案技巧：原文说这四组是 ranging in age up to 12 weeks old（年龄跨度直到 12 周大），可见分组依据就是年龄；题干用 according to their 引出这一标准，空格应填名词 age。注意不要误填 groups（那是被分出的组数）或 weeks（那是时间的单位，不是分组依据）。",
          "analysis": "原文第六段：“Having identified three categories of defensive behaviours, Kalin and Shelton set about determining when infant monkeys first begin to apply them effectively. … To establish the critical period of development, they examined four groups of infant monkeys ranging in age up to 12 weeks old.”（在识别出三类防御行为之后，Kalin 和 Shelton 着手确定幼猴最早何时能有效运用这些行为……为确定发育的关键期，他们检查了年龄直到 12 周大的四组幼猴）。摘要把这层信息改写为 grouped the monkeys according to their ________，原文与之对应的内容就是 ranging in age up to 12 weeks old 中的 age，即按年龄分组。词性上，空格位于 according to their 之后，需要名词性成分作宾语，原文用的是单数不可数名词 age，故填 age。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 37,
          "stem": "They videotaped their results and found that monkeys as young as ________ reacted to the cues but in a haphazard fashion.",
          "translation": "他们把结果录像并发现，小到 ________ 的猴子就会对这些线索作出反应，但方式杂乱无章。",
          "answer": "two weeks",
          "wordClass": "名词短语（数词加时间单位，表示年龄；位于 as young as 之后，作该比较结构的基准成分，按原文填 two weeks）",
          "locating": {
            "paragraph": "6",
            "quote": "They found that the infants in the youngest group (no more than two weeks old) engaged in defensive behaviours, but they lacked some motor control and seemed to act randomly, as if they had not noticed the human beings that were present."
          },
          "synonyms": [
            "“monkeys as young as two weeks” 同义替换为原文的 “the infants in the youngest group (no more than two weeks old)”",
            "“but in a haphazard fashion” 同义替换为原文的 “seemed to act randomly”，haphazard 对应 random",
            "“They videotaped their results” 同义替换为原文的 “All sessions were videotaped for analysis”"
          ],
          "locatingTip": "定位：摘要此处要填年龄，回第六段找描述“最小的一组”的括号信息，即 (no more than two weeks old)。确定答案技巧：原文说最年幼组的幼猴不超过两周大，随后用 but 转折指出它们缺乏某些运动控制、行为看起来随机（seemed to act randomly），与摘要的 reacted to the cues but in a haphazard fashion 完全对应，因此空格填 two weeks。注意“不超过三个词”的限制：two weeks 只有两个词，符合要求；不要写成 two-week-old，也不要照抄 no more than two weeks（超词数）。",
          "analysis": "原文第六段：“All sessions were videotaped for analysis. They found that the infants in the youngest group (no more than two weeks old) engaged in defensive behaviours, but they lacked some motor control and seemed to act randomly, as if they had not noticed the human beings that were present.”（所有实验过程都被录像以供分析。他们发现最年幼一组的幼猴（不超过两周大）会做出防御行为，但缺乏某些运动控制，看起来行为随机，仿佛没有注意到在场的人）。摘要把这一结论概括为：小到某个年龄的猴子就会对线索作出反应，但方式杂乱。as young as 对应 no more than two weeks old，in a haphazard fashion 对应 seemed to act randomly，因此答案是 two weeks，填词时按原文保留数词加时间单位的形式。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 38,
          "stem": "The researchers noted that they seemed to be unaware of the ________ who were around them.",
          "translation": "研究者注意到，它们似乎没有察觉到周围 ________ 的存在。",
          "answer": "human beings",
          "wordClass": "名词短语（复数，指人；位于介词 of 之后作其宾语，其后有 who 引导的定语从句修饰，按原文填复数 human beings）",
          "locating": {
            "paragraph": "6",
            "quote": "as if they had not noticed the human beings that were present"
          },
          "synonyms": [
            "“seemed to be unaware of” 同义替换为原文的 “as if they had not noticed”，unaware 对应 not noticed",
            "“who were around them” 同义替换为原文的 “that were present”，around them 对应 present",
            "“The researchers noted” 同义替换为原文的 “They found”"
          ],
          "locatingTip": "定位：本题紧接上一题，仍出自第六段同一句，题干关键词是 unaware 与 around them，回原文对应 as if they had not noticed … that were present。确定答案技巧：原文说幼猴仿佛没有注意到“在场的人”，即 the human beings that were present；题干用 the ________ who were around them 复述，空格要填的正是被定语从句修饰的名词短语 human beings。作答时注意答案必须是复数形式，也不要换成 people，因为原文用词是 human beings。",
          "analysis": "定位句位于第六段中间：“… but they lacked some motor control and seemed to act randomly, as if they had not noticed the human beings that were present.”（……它们缺乏某些运动控制，看起来行为随机，仿佛没有注意到在场的人）。摘要把同一信息改写为 they seemed to be unaware of the ________ who were around them：be unaware of 对应 had not noticed，who were around them 对应 that were present，被定语从句修饰的名词就是 human beings。因此答案是 human beings，注意复数形式与两个单词的写法，不要填成单数 human being 或 people。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 39,
          "stem": "Despite demonstrating ________ , the monkeys in the middle groups failed to react in ways corresponding to the experimental situation.",
          "translation": "尽管表现出 ________，中间组的猴子仍未能按实验情境作出相应反应。",
          "answer": "good motor control",
          "wordClass": "名词短语（形容词 good 修饰不可数名词 motor control；作动名词 demonstrating 的宾语，demonstrating 短语与介词 Despite 一起作让步状语，按原文填 good motor control，不加冠词）",
          "locating": {
            "paragraph": "6",
            "quote": "Babies in the two intermediate-age groups had good motor control, but their actions seemed unrelated to the test condition."
          },
          "synonyms": [
            "“demonstrating good motor control” 同义替换为原文的 “had good motor control”",
            "“the monkeys in the middle groups” 同义替换为原文的 “Babies in the two intermediate-age groups”，middle 对应 intermediate-age",
            "“failed to react in ways corresponding to the experimental situation” 同义替换为原文的 “their actions seemed unrelated to the test condition”"
          ],
          "locatingTip": "定位：题干关键词是 middle groups（中间年龄组），回第六段找 intermediate-age，落在 “Babies in the two intermediate-age groups had good motor control …” 一句。确定答案技巧：原文用 had 加名词短语说明这组幼猴具备的特征（良好的运动控制），随后用 but 转折说它们的动作似乎与测试情境无关；摘要把 had good motor control 改写成 Despite demonstrating ________（尽管表现出……），空格填的正是被“表现出”的那个特征 good motor control。注意词数限制：good motor control 共三个词，符合“不超过三个词”的要求。",
          "analysis": "原文第六段：“Babies in the two intermediate-age groups had good motor control, but their actions seemed unrelated to the test condition.”（两个中间年龄组的幼猴具备良好的运动控制能力，但它们的动作似乎与测试情境无关）。摘要把这一句改写为“尽管表现出 ________，中间组的猴子仍未能按实验情境作出反应”：Despite demonstrating 对应 had，failed to react in ways corresponding to the experimental situation 对应 their actions seemed unrelated to the test condition，空格处正是 had 的宾语 good motor control。答案由形容词 good 与名词短语 motor control 组成，填词时保持原文形式，不要改成 well motor control 或 good control。",
          "traps": []
        },
        {
          "questionId": "q14",
          "questionNumber": 40,
          "stem": "The oldest group, however, reacted in the same way as ________ , and the researchers concluded that monkeys are capable of selective responding between nine and 12 weeks old.",
          "translation": "不过，最年长的一组反应方式与 ________ 相同，研究者由此得出结论：猴子在 9 至 12 周大之间具备有选择地作出反应的能力。",
          "answer": "mature monkeys",
          "wordClass": "名词短语（形容词加复数名词，作介词 as 的宾语；原文形式为 mature monkeys）",
          "locating": {
            "paragraph": "6",
            "quote": "and their reactions were both appropriate and identical to those of mature monkeys"
          },
          "synonyms": [
            "“reacted in the same way as” 同义替换为原文的 “their reactions were both appropriate and identical to those of”，identical to 对应 in the same way as",
            "“The oldest group” 同义替换为原文的 “animals in the oldest group (nine- to 12-week-old)”",
            "“those of mature monkeys” 中的 those 指代 mature monkeys 的反应，与摘要的 reacted in the same way as 指向同一参照对象"
          ],
          "locatingTip": "定位：题干关键词是 oldest group，回第六段找 the oldest group，落在 “Only animals in the oldest group (nine- to 12-week-old) conducted themselves differently in each situation, and their reactions were both appropriate and identical to those of mature monkeys.” 确定答案技巧：原文说最年长组的反应与成年猴子的反应完全相同（identical to those of mature monkeys），摘要用 reacted in the same way as ________ 复述，空格填的正是被比较的对象 mature monkeys。注意 those of 指代的是“成年猴子的反应”，空格处只需填群体名称，不要填 reactions。",
          "analysis": "原文第六段：“Only animals in the oldest group (nine- to 12-week-old) conducted themselves differently in each situation, and their reactions were both appropriate and identical to those of mature monkeys.”（只有最年长一组（9 至 12 周大）的动物在不同情境中表现不同，它们的反应既恰当，又与成年猴子的反应完全相同）。摘要把它改写为“最年长的一组反应方式与 ________ 相同，研究者由此得出猴子在 9 至 12 周大时具备有选择地作出反应的能力”：reacted in the same way as 对应 identical to those of，those of 之后的 mature monkeys 就是比较的参照对象，因此答案填 mature monkeys。共两个词，符合“不超过三个词”的要求；注意 mature 不要误写成 matured 或 adult。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
