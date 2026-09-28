(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-medium-58", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-medium-58",
  "meta": {
    "examId": "p2-medium-58",
    "title": "Insect Decision-Making 昆虫决策",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–19 段落标题匹配（List of Headings）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 19
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "Paragraph A — choose the correct heading from the list of headings.",
          "translation": "段落 A：从标题列表中为它选择正确的标题。",
          "answer": "vii",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "If, for example, each member of a jury has only partial information, the majority decision is more likely to be correct than a decision arrived at by a single juror. Moreover, the probability of a correct decision increases with the size of the jury."
          },
          "synonyms": [
            "标题中的「the number of decision-makers」同义替换为原文的「the size of the jury」，指参与决策的人有多少",
            "标题中的「affects the decision」同义替换为原文的「the probability of a correct decision increases with the size of the jury」，即人数规模一变，决策的正确率跟着变",
            "原文把「decisions made collectively by large groups of people」与「decisions made by individuals」对举，正是标题所说「决策者数量」这一变量的体现"
          ],
          "locatingTip": "定位：段落标题题先读 A 段首尾的主题句。首句就是 decisions made collectively by large groups of people 与 decisions made by individuals 的对比，末句把「人多」量化成 the size of the jury，两处都以「人数」为轴。确定答案技巧：标题 vii 有两个信息点，一是 decision-makers 的数量，二是它对决策的影响。回原文一一核对，the size of the jury 对应数量，increases with 对应影响，整段又是 Condorcet 的「陪审团定理」，与 vii 完全吻合。注意不要被 jury（陪审团）这个法律色彩词带偏，本段谈的是人数与正确率的关系，与法律程序无关。",
          "analysis": "第 1 段共五句，全部围绕「群体决策比个人决策更可靠」展开：首句说长期以来人们认为由大群体共同作出的决定比个人作出的决定更可能准确；第二句把这一思想追溯到 18 世纪法国哲学家 Nicolas de Condorcet 的「陪审团定理」；第三句说 Condorcet 的理论描述了集体决策，指出民主决策往往优于独裁决策；第四句给出具体例子：如果陪审团每位成员都只掌握部分信息，多数人的决定比单个陪审员作出的决定更可能是正确的；第五句是本题的关键——「Moreover, the probability of a correct decision increases with the size of the jury.」（而且，决策正确的概率随陪审团规模增大而提高）。标题 vii 是「How the number of decision-makers affects the decision」（决策者的人数如何影响决策），其两个要点与原文严丝合缝：the number of decision-makers 对应 the size of the jury（jury 的人数），affects the decision 对应 the probability of a correct decision increases with …（人数的变化改变决策正确率）。全段没有出现任何昆虫、实验或人造装置，因此其余标题都无法覆盖本段。解题时抓住一个判断标准：标题题要找的是「整段的论述重心」，A 段的每一句都在说人越多、决定越准，重心就是人数这一变量。",
          "traps": [
            "为什么不是 iii「昆虫用来告知某项发现的信号」：A 段完全没有出现昆虫，讲的是人类陪审团与 Condorcet 的理论，信号（waggle dance）出现在 B 段。",
            "为什么不是 v「用受过训练的昆虫来检验科学理论」：A 段既没有昆虫，也没有任何实验设计，只做了理论回顾，与「检验理论」无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "Paragraph B — choose the correct heading from the list of headings.",
          "translation": "段落 B：从标题列表中为它选择正确的标题。",
          "answer": "iii",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Among the bees that depart are some that have searched for and found some new nest sites, and reported back using a characteristic body movement known as a 'waggle dance' to indicate to the other bees the suitable places they have located."
          },
          "synonyms": [
            "标题中的「Signals」同义替换为原文的「a characteristic body movement known as a 'waggle dance'」，摇摆舞正是一种信号",
            "标题中的「used by certain insects」同义替换为原文的「Among the bees that depart are some that have searched for and found some new nest sites」，是离巢的那部分蜜蜂发出的",
            "标题中的「to indicate a discovery」同义替换为原文的「to indicate to the other bees the suitable places they have located」，即把「发现了合适地点」这一消息告知同伴"
          ],
          "locatingTip": "定位：B 段很长，先扫读找具体名词。waggle dance（摇摆舞）是本段唯一的特殊术语，也是最醒目的定位词；标题题只要确认「段落是否在讲某种昆虫的信号」，看到 waggle dance 即可判定。确定答案技巧：把标题 iii 的三个成分拆开核对——Signals 对应 a characteristic body movement（摇摆舞这一身体动作），certain insects 对应 bees，to indicate a discovery 对应 to indicate to the other bees the suitable places they have located。三条线索全部命中，故选 iii。此外要注意本段后段的 The process eventually leads to a consensus on the best site 也是围绕「共享信息达成共识」展开，进一步支持「信号传递发现」这一主题。",
          "analysis": "第 2 段讲群居动物（蚂蚁、蜜蜂、鸟、海豚）同样依靠集体决策，其中重点写蜜蜂分巢。全段逻辑是：蜜蜂集体决策而且做得很出色（Christian List 的研究）——蜂后带走约三分之二的工蜂，在旧巢留下女儿蜂后与其余工蜂——离巢的蜜蜂中有一些已经找到新的筑巢地点，它们回来时用被称为「waggle dance（摇摆舞）」的特有身体动作向其他蜜蜂示意自己发现的好地点，舞跳得越久表示地点越好——过一会儿其他蜜蜂也去探访同伴指示的地点亲眼查看，回来后跳更多的摇摆舞——这一过程最终使蜂群就最佳地点达成共识并迁巢。其中「摇摆舞」就是一个信息载体：蜜蜂并不能说话，它靠身体动作这条「信号」把「我发现了合适的新居所」这一消息告诉群体里的其他成员。标题 iii「Signals used by certain insects to indicate a discovery」中的 Signals、certain insects、indicate a discovery 分别对应原文的 a characteristic body movement、bees、indicate to the other bees the suitable places they have located，覆盖了本段的核心事件，因此是 B 段的标题。",
          "traps": [
            "为什么不是 vii「决策者人数如何影响决策」：vii 对应的是 A 段（陪审团人数与正确率），B 段虽然也讲集体决策，但重心落在蜜蜂用什么方式传递发现，人数不是本段的论述对象。",
            "为什么不是 iv「紧迫性如何影响寻找新家的过程」：B 段完全没有紧迫、受威胁的表述，蜂群是主动分巢而非被迫迁移，紧迫性出现在 E 段的蚂蚁实验中。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "Paragraph C — choose the correct heading from the list of headings.",
          "translation": "段落 C：从标题列表中为它选择正确的标题。",
          "answer": "vi",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "To find out, Dr List and his colleagues used a computer-generated model of the decision-making process."
          },
          "synonyms": [
            "标题中的「virtual scenarios」同义替换为原文的「a computer-generated model」，电脑生成的模型即虚拟情境",
            "标题中的「the study of insect behaviour」同义替换为原文的「a computer-generated model of the decision-making process」，研究的正是昆虫（蜜蜂）的决策行为",
            "原文的「By experimenting with it, they found that, when bees in the model were very good at finding nesting sites but did not share their information」说明研究者是在模型里做实验、改变条件，正是标题所说的「用虚拟情境研究」"
          ],
          "locatingTip": "定位：C 段首句提出疑问，第二句立刻给出方法——computer-generated model。computer-generated 是「虚拟」的强信号，扫读时看到它就要停下来判断标题。确定答案技巧：标题 vi 是「The use of virtual scenarios in the study of insect behaviour」。核对三步：virtual scenarios 对应 a computer-generated model；in the study of 对应 To find out … used … 的研究方法；insect behaviour 对应蜜蜂在模型中的行为（不共享信息会拖慢迁巢、盲从摇摆舞会出错）。三条都对上，故选 vi。同时注意本段出现的是「模型里的蜜蜂」，并非真实蜜蜂，这也是排除 v（用昆虫检验理论）的关键。",
          "analysis": "第 3 段回答「蜜蜂究竟如何达成如此稳健的共识」。为了查明原因，List 博士与同事使用了一个由计算机生成的决策过程模型，并通过改变模型条件来做实验：一种情形是模型中的蜜蜂很擅长寻找巢址却不共享信息，结果是迁巢被大幅拖慢，蜂群无处安身、处境危险；另一种情形（Conversely）是模型中的蜜蜂不先核实就盲目跟随同伴的摇摆舞。研究者据此得出结论：蜜蜂能否成功且迅速地识别最佳地点，取决于两件事——在传递最佳位置信息上相互依赖，以及在亲自确认这些信息上保持独立。本段的实验对象始终是 computer-generated model（电脑生成的模型）里的虚拟蜜蜂，而不是真实蜂群，研究方式也就是改变模型条件后观察虚拟昆虫的行为。标题 vi「The use of virtual scenarios in the study of insect behaviour」中的 virtual scenarios 正对应 computer-generated model，in the study of insect behaviour 正对应研究者借助该模型分析蜜蜂的决策行为，因此是 C 段的标题。做题提示：「虚拟情境」类标题的标志词是 model、simulation、computer-generated、virtual 等，见到这类词优先考虑 vi。",
          "traps": [
            "为什么不是 v「用受过训练的昆虫检验科学理论」：C 段的实验对象是计算机模型里的虚拟蜜蜂，不是被训练的活体昆虫；v 的落点是「用昆虫当工具检验理论」，与 C 段的建模方法不符。",
            "为什么不是 iii「昆虫用来告知发现的信号」：摇摆舞这一信号在第 2 段（B 段）已经讲完，C 段提到 waggle dance 只是作为模型中的一个条件，重心是建模研究而非信号本身。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "Paragraph D — choose the correct heading from the list of headings.",
          "translation": "段落 D：从标题列表中为它选择正确的标题。",
          "answer": "i",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Jose Halloy of the Free University of Brussels in Belgium used robotic cockroaches to subvert the behaviour of living cockroaches and control their decision-making process."
          },
          "synonyms": [
            "标题中的「man-made imitations」同义替换为原文的「robotic cockroaches」，机器人蟑螂正是人造仿制品",
            "标题中的「the effect … on insects」同义替换为原文的「to subvert the behaviour of living cockroaches and control their decision-making process」，即人造仿制品改变了活体蟑螂的行为与决策",
            "原文的「the artificial bugs … were perceived by the real cockroaches as equals」中 artificial（人造的）与 the real cockroaches（真实昆虫）形成对照，正是标题所说的「人造仿制品对昆虫的影响」"
          ],
          "locatingTip": "定位：D 段的专有名词 Jose Halloy 与人造物 robotic cockroaches 是最佳定位点，首句就把「用机器人蟑螂影响真蟑螂」交代清楚。确定答案技巧：标题 i 是「The effect of man-made imitations on insects」，判断标准有两条——有没有人造仿制品、受影响的是不是昆虫。D 段两条全中：man-made imitations 对应 robotic cockroaches 和 artificial bugs，on insects 对应 living cockroaches 与 the real cockroaches。本段最容易误选的是 v（用受过训练的昆虫检验科学理论），但 v 的主角是「被当成研究工具的昆虫」，而 D 段的主角是「人造机器人」，昆虫是被影响的一方，方向相反，务必区分。",
          "analysis": "第 4 段讲集体决策被裹挟的情形：当动物与关键信息源隔离，或者被群体中其他成员支配时，也会产生集体决策。Jose Halloy 用机器人蟑螂去扰乱活体蟑螂的行为并控制它们的决策过程：人造虫被放进真蟑螂中间后，很快就融入得足够好，以至于真蟑螂把它们视作同类；接着 Halloy 操纵这些占少数的机器人，成功诱使真蟑螂选择了一个不合适的藏身处——甚至是它们在被人造虫渗入之前已经拒绝过的那个地方。本段的行为主体是 man-made（人造的）机器人蟑螂，受体是真实的活体蟑螂，研究结论是「人造仿制品能够左右昆虫的行为选择」。标题 i「The effect of man-made imitations on insects」中的 man-made imitations 对应 robotic cockroaches、artificial bugs，on insects 对应 living cockroaches、the real cockroaches，概括了整段内容，故选 i。",
          "traps": [
            "为什么不是 v「用受过训练的昆虫检验科学理论」：v 讲的是把昆虫当作检验理论的工具，而 D 段恰恰相反——是用人造机器人去操纵昆虫，机器人才是工具，昆虫是被影响的对象，主客关系颠倒，故不能选 v。",
            "为什么不是 vi「在昆虫行为研究中使用虚拟情境」：虚拟情境（computer-generated model）出现在 C 段；D 段用的是能真实混入群体、产生实际影响的有形机器人，属于实物而非虚拟模型。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "Paragraph E — choose the correct heading from the list of headings.",
          "translation": "段落 E：从标题列表中为它选择正确的标题。",
          "answer": "iv",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Franks and his associates reported how the insects reduce the problems associated with making a necessarily swift choice. If the ants' existing nest becomes suddenly threatened, the insects choose certain ants to act as scouts to find a new nest."
          },
          "synonyms": [
            "标题中的「urgency」同义替换为原文的「a necessarily swift choice」与「becomes suddenly threatened」，家园突然受威胁而必须迅速做出取舍，即紧迫性",
            "标题中的「affect the process of finding a new home」同义替换为原文的「reduce the problems associated with …」「choose certain ants to act as scouts to find a new nest」以及「How quickly they accomplish the transfer to a new home depends not only on how soon the best available site is found」",
            "标题中的「a new home」同义替换为原文的「a new nest」，即蚁群的新巢"
          ],
          "locatingTip": "定位：E 段有专有名词 Nigel Franks 与机构 University of Bristol，是很好的定位词；扫读时重点找表示「急迫」的词。necessarily swift choice 与 suddenly threatened 都是紧迫性的直接信号。确定答案技巧：标题 iv 是「How urgency can affect the process of finding a new home」，题干落点是「紧迫性」与「寻找新家的过程」。原文先说昆虫设法减少「必须迅速作出选择」带来的问题，再说旧巢突然受威胁时才派侦察蚁去找新巢，最后说搬家的快慢既取决于多快找到最佳地点，也取决于多快完成迁移——整段都在讲「由于时间紧迫，寻找并迁往新家的过程被如何安排」，与 iv 完全对应。注意排除 ii，因为「指示、引导其他蚂蚁」是 F 段的内容。",
          "analysis": "第 5 段承接上文的集体决策，转向决策的执行：昆虫落实集体决策的方式可能很复杂，而且与决策本身同样重要。在布里斯托大学，Nigel Franks 及其同事研究了一种蚂蚁如何建立新巢，并报告了这些昆虫如何减少「必须迅速作出选择」所带来的一系列问题——如果蚂蚁现有的巢突然受到威胁，它们就会挑选一些蚂蚁充当 scouts（侦察蚁）去寻找新巢；搬入新家的速度快慢，不仅取决于多快找到现有的最佳地点，还取决于能否尽快完成向那里的迁移。本段的关键词是 necessarily swift choice 与 suddenly threatened，都在强调事态紧急、必须尽快决定；而全段讨论的正是这种紧急状态如何影响「找新巢、迁新居」的整个流程。标题 iv「How urgency can affect the process of finding a new home」中的 urgency 对应 necessarily swift choice 与 suddenly threatened，finding a new home 对应 find a new nest 与 accomplish the transfer to a new home，与段落主旨一致，故选 iv。",
          "traps": [
            "为什么不是 ii「需要去指导更多的昆虫向导」：E 段只说到派出侦察蚁去找新巢，尚未讲到「带领、指引其他蚂蚁」这一步，返回旧巢带路是 F 段的内容。",
            "为什么不是 i「人造仿制品对昆虫的影响」：E 段完全是蚂蚁的自然行为观察，没有任何人造装置介入。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "Paragraph F — choose the correct heading from the list of headings.",
          "translation": "段落 F：从标题列表中为它选择正确的标题。",
          "answer": "ii",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Once the suitable new nest is identified, the chosen ants begin to lead others, which have made it to the new site or which may simply be in the vicinity, back to the original threatened nest. In this way, those ants which are familiar with the route can help transport, for example, the queen and young ants to the new site, and simultaneously show the way to those ants which have been left behind to guard the old nest."
          },
          "synonyms": [
            "标题中的「the need to instruct」同义替换为原文的「begin to lead others」「show the way to those ants」，即给其他蚂蚁带路、指示方向",
            "标题中的「additional insect guides」同义替换为原文的「the chosen ants which are familiar with the route」，也就是被选出并熟悉路线的那些蚂蚁（向导）",
            "标题中的「additional」还对应原文的「those ants which have been left behind to guard the old nest」，即除已在新区或附近的蚂蚁之外，还需要被指引的那些留守蚂蚁"
          ],
          "locatingTip": "定位：F 段首句是关键。寻找表示「带路、指引」的动词，lead others、show the way 都出现在首句与第二句，一眼可辨。确定答案技巧：标题 ii 是「The need to instruct additional insect guides」，要点是「需要对更多向导发号施令」。原文说被选中的蚂蚁开始引领其他蚂蚁回到原来受威胁的巢，熟悉的蚂蚁帮忙运送蚁后和幼蚁并同时给留守旧巢的蚂蚁指路——正是「派出向导、指引更多同伴」的意思。instruct 对应 lead、show the way，additional insect guides 对应 the chosen ants which are familiar with the route，因此选 ii。注意区分 E 段与 F 段：E 段是「因为紧迫而去找新家」，F 段才是「带路指引、提高搬迁效率」。",
          "analysis": "第 6 段讲决策的落实如何提高效率：一旦确定了合适的新巢，被选中的蚂蚁就开始引领其他蚂蚁——包括已经到达新址的，或者只是在新址附近的——返回原来受威胁的旧巢。这样，熟悉路线的蚂蚁就能帮忙把蚁后和幼蚁等搬运到新址，同时给那些留守旧巢的蚂蚁指示道路；这样一来，搬迁过程完成得更快、更高效。随后作者把话题提升到人：集体决策的动态与决策的高效执行密切相关，这一点对人类有何启示目前尚不清楚，但它确实提示了「为一个目标招募有行动力的领导者」的重要性，因为如这些昆虫实验所示，集体决策中最重要的事情就是让别人跟随。标题 ii「The need to instruct additional insect guides」中的 instruct 对应 lead others 与 show the way，additional insect guides 对应被选中且熟悉路线的蚂蚁，本段的动作就是「训练／指派向导去引领更多同伴」，因此是 F 段的标题。",
          "traps": [
            "为什么不是 iv「紧迫性如何影响寻找新家的过程」：紧迫性、suddenly threatened 是 E 段的落点；F 段已经进入「新巢已定」之后的执行阶段，讲的是带路与引导，不是紧迫性本身。",
            "为什么不是 vii「决策者人数如何影响决策」：F 段提到的 leaders 是执行环节的引导者，段落并未讨论人数与决策正确率的关系，vii 属于 A 段。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 20–23 观点配对（Matching Findings to Academics）",
      "mode": "per_question",
      "questionRange": {
        "start": 20,
        "end": 23
      },
      "items": [
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "Certain members can influence the rest of the group to alter a previous decision.",
          "translation": "某些成员能够影响群体中的其他成员，从而改变此前已经作出的决定。",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "By manipulating the robots, which were in the minority, Halloy was able to persuade the living cockroaches to choose an inappropriate shelter—even one which they had rejected before being infiltrated by the robots."
          },
          "synonyms": [
            "「Certain members」同义替换为原文的「the robots, which were in the minority」，即群体中只占少数的那部分成员",
            "「influence the rest of the group」同义替换为原文的「Halloy was able to persuade the living cockroaches」，persuade 即施加影响",
            "「alter a previous decision」同义替换为原文的「choose an inappropriate shelter—even one which they had rejected before」，蟑螂改变了自己先前的选择，选了曾拒绝过的地方"
          ],
          "locatingTip": "定位：题干提到「少数成员改变群体已有决定」，第 4 段的 in the minority（少数）与 had rejected before（先前拒绝过）是两条独特的线索，直接把你带到 Halloy 的机器人蟑螂实验，对应学者 José Halloy，即选项 C。确定答案技巧：人物配对题先划出题干的核心动作（influence、alter a previous decision），再回原文找同一动作。原文说 Halloy 操纵占少数的机器人，诱使活体蟑螂选择了不合适的藏身处，甚至是它们被人造虫渗入前已经拒绝过的那个地方——「占少数」对应 certain members，「诱使」对应 influence，「拒绝过又选它」对应 alter a previous decision，三处一一对应，故答案是 C。",
          "analysis": "题干的关键词有三处：certain members（部分成员）、influence the rest of the group（影响群体其余成员）、alter a previous decision（改变此前决定）。第 4 段写道，Halloy 把机器人蟑螂放进活体蟑螂群里，这些人工虫很快融入并被真蟑螂视作同类；随后 Halloy 操纵这些占少数的机器人，成功让活体蟑螂选择了一个不合适的藏身处，甚至是一个它们在被人造虫渗入之前已经拒绝过的地方。这里「占少数」正是题干的 certain members，「让活体蟑螂选择别处」正是 influence the rest of the group，而「选了自己先前拒绝过的地点」则精确对应 alter a previous decision（推翻先前的决定）。这些内容出自 José Halloy 的实验，因此答案是 C。做人物配对题时要注意题干往往把实验的具体描述抽象成一般性结论，反过来在原文里寻找「具体动作」比找同义形容词更可靠。",
          "traps": [
            "为什么不是 A（Nicolas de Condorcet）：Condorcet 只是提出陪审团定理，讨论人数规模与决策正确率的关系，完全没有涉及「少数成员改变群体已有决定」这一现象。",
            "为什么不是 B（Christian List and colleagues）：List 团队研究的是蜜蜂共享信息与自我确认信息的重要性，落点在信息传递，不存在「推动群体推翻原决定」的情形。",
            "为什么不是 D（Nigel Franks and colleagues）：Franks 研究蚂蚁受威胁时如何选新巢、如何带路搬迁，讲的是效率与引导，与「影响他人改变已有决定」无关。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "Individual verification of a proposed choice is important for a successful decision outcome.",
          "translation": "个体对某一拟选方案进行亲自核实，对于成功的决策结果十分重要。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "The researchers concluded that the ability of bees to identify successfully and quickly the best site depends on both the bees' interdependence in communicating the whereabouts of the best site, and their independence in confirming this information for themselves."
          },
          "synonyms": [
            "「Individual verification of a proposed choice」同义替换为原文的「their independence in confirming this information for themselves」，即每个个体亲自去确认信息",
            "「important for a successful decision outcome」同义替换为原文的「the ability of bees to identify successfully and quickly the best site depends on」，说明它决定决策能否成功",
            "「The researchers」即原文的「Dr List and his colleagues」，对应选项 B 的 Christian List and colleagues"
          ],
          "locatingTip": "定位：题干的核心词是 verification（核实）与 individual（个体），回原文找表示「自己去确认」的表达。第 3 段末尾的 independence in confirming this information for themselves 是同义表述，而该句的主语正是 The researchers，也就是选项 B 的 Christian List 团队。确定答案技巧：学界配对题要靠「人名加研究结论」绑定。原文结论句说蜜蜂成功且迅速找到最佳地点取决于两点——在传递信息上相互依赖，以及在确认信息上保持独立（independence）；题干只强调了后半句「个体核实」，用的是 is important for 的说法，与原文 The researchers concluded that … depends on … 一致，故答案是 B。",
          "analysis": "第 3 段先讲 List 博士与同事用计算机模型研究蜜蜂如何达成稳健共识：若模型中的蜜蜂很擅长找巢址却不共享信息，迁巢会大幅减慢，蜂群将无处安身；相反，若蜜蜂不先核实就盲目跟随别人的摇摆舞，也会出问题。随后给出结论：「The researchers concluded that the ability of bees to identify successfully and quickly the best site depends on both the bees' interdependence in communicating the whereabouts of the best site, and their independence in confirming this information for themselves.」（研究者得出结论：蜜蜂能否成功且迅速地找到最佳地点，既取决于它们在传递最佳地点位置上相互依赖，也取决于它们在亲自确认这些信息上保持独立）。题干把后半句抽出来写成 Individual verification of a proposed choice is important for a successful decision outcome，其中 individual verification 对应 independence in confirming this information for themselves，important for a successful decision outcome 对应 the ability of bees to identify successfully and quickly the best site depends on。这一结论出自 List 博士及其同事，对应选项 B（Christian List and colleagues）。注意题干只取结论的一半，做题时不要因为原文还提到 interdependence 就怀疑答案，判断依据是「人物加观点」是否匹配，而不要求句子长度一致。",
          "traps": [
            "为什么不是 A（Nicolas de Condorcet）：Condorcet 讨论的是人数与正确率的关系，从未涉及个体亲自核实信息的重要性。",
            "为什么不是 C（José Halloy）：Halloy 做的是用机器人蟑螂操纵群体选择，讲的是「少数影响多数」，与个体核实无关。",
            "为什么不是 D（Nigel Franks and colleagues）：Franks 团队研究蚂蚁如何挑选侦察蚁、如何快速完成搬迁，落点在执行效率，没有讨论个体核实信息。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "The more individuals taking part in a decision, the better the decision will be.",
          "translation": "参与决策的个体越多，决策就会越好。",
          "answer": "A",
          "wordClass": "",
          "locating": {
            "paragraph": "1",
            "quote": "It has long been held that decisions made collectively by large groups of people are more likely to turn out to be accurate than decisions made by individuals. The idea goes back to the 'jury theorem' of Nicolas de Condorcet"
          },
          "synonyms": [
            "「The more individuals taking part in a decision」同义替换为原文的「decisions made collectively by large groups of people」以及后文「the probability of a correct decision increases with the size of the jury」",
            "「the better the decision will be」同义替换为原文的「are more likely to turn out to be accurate」，准确即决策质量更高",
            "「Nicolas de Condorcet」在原文中原词复现，其「jury theorem」正是这一观点的来源，对应选项 A"
          ],
          "locatingTip": "定位：题干讲「人数越多，决策越好」，这一命题的唯一出处是第 1 段的 Condorcet 陪审团定理。段中的人名 Nicolas de Condorcet 是极佳定位词，一次锁定 A 段。确定答案技巧：题干是「比较级加比较级」的结构（The more …, the better …），原文同样用比较结构表达：decisions made collectively by large groups of people are more likely to turn out to be accurate than decisions made by individuals，末句又补上 the probability of a correct decision increases with the size of the jury，把「人越多越准」讲得更直白。观点归属 Condorcet，因此答案是 A。注意区分：本段说的是「人数」，第 3 段 List 讲的是「共享信息与个体核实」，两者都在谈如何提高决策质量，但只有 A 段把「人数多」当作原因。",
          "analysis": "第 1 段开篇即说：「It has long been held that decisions made collectively by large groups of people are more likely to turn out to be accurate than decisions made by individuals.」（长期以来人们认为，由大群体共同作出的决定比个人作出的决定更可能准确），接着指出这一思想可追溯到 18 世纪法国哲学家 Nicolas de Condorcet 的「陪审团定理」，并在末句用「the probability of a correct decision increases with the size of the jury」（决策正确的概率随陪审团规模增大而提高）把「人多则决策更优」量化。题干「The more individuals taking part in a decision, the better the decision will be」中的 the more individuals 对应 large groups of people 与 the size of the jury，the better the decision will be 对应 more likely to turn out to be accurate，观点提出者是 Condorcet，故选 A。做本题要防止被 B 干扰：Christian List 也研究群体决策，但 List 的结论落在「信息共享与个体核实」而非「人数多少」，题干强调的恰恰是参与人数。",
          "traps": [
            "为什么不是 B（Christian List and colleagues）：List 的结论是蜜蜂的成功取决于相互依赖地传递信息与独立地确认信息，属于「机制」层面，而非「人数越多决策越好」这一规模效应。",
            "为什么不是 C（José Halloy）：Halloy 证明的是少数个体可以误导群体做出错误选择，与「人数越多决策越优」的结论方向相反。",
            "为什么不是 D（Nigel Franks and colleagues）：Franks 团队关心的是受威胁时如何快速完成搬迁，并未讨论参与者数量与决策质量的关系。"
          ]
        },
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "The decision-making process of certain insects produces excellent results even when fine distinctions are required.",
          "translation": "某些昆虫的决策过程即使在需要作出细微区分时，也能产生极佳的结果。",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "The decision is remarkably reliable, with the bees choosing the best site even when there are only small differences between alternative sites."
          },
          "synonyms": [
            "「The decision-making process of certain insects」同义替换为原文的「The decision is remarkably reliable」，主语是前文一直讨论的蜜蜂的集体决策过程",
            "「produces excellent results」同义替换为原文的「remarkably reliable」，即结果极为可靠",
            "「even when fine distinctions are required」同义替换为原文的「even when there are only small differences between alternative sites」，备选地点之间差别很小，仍需精细辨别"
          ],
          "locatingTip": "定位：题干的关键是「细微区分」这一说法，对应原文的 small differences between alternative sites。这段出现在第 2 段末句，主题是蜜蜂分巢，对应的学者是 Christian List 及其同事，即选项 B。确定答案技巧：题干中 even when 引导的让步状语与原文的 even when there are only small differences between alternative sites 结构完全一致，是典型的同义改写标志；前半句 produces excellent results 对应 remarkably reliable，也是对同一句的改写。整句位于描写蜜蜂决策可靠性的收尾处，而第 2 段的研究者正是 List 团队，故答案是 B。注意「某些昆虫」在原文中是 bees，不要被 D（Franks 研究蚂蚁）误导，蚂蚁的内容在第 5、6 段。",
          "analysis": "第 2 段在描述了蜜蜂用摇摆舞传递新巢信息、其他蜜蜂亲自探访并继续跳舞、最终达成共识迁巢之后，用一句总结收尾：「The decision is remarkably reliable, with the bees choosing the best site even when there are only small differences between alternative sites.」（这一决定极为可靠，即便备选地点之间只有很小的差别，蜜蜂也能选出最好的那个）。题干的 the decision-making process of certain insects 对应蜜蜂的决策过程，produces excellent results 对应 remarkably reliable，even when fine distinctions are required 对应 even when there are only small differences between alternative sites，三处改写一一对应。本段讨论的是蜜蜂分巢，研究者是 Christian List 及其同事（原文明确说 Bees make collective decisions, and they do it rather well, according to Christian List），因此答案是 B。",
          "traps": [
            "为什么不是 A（Nicolas de Condorcet）：Condorcet 的结论是关于人类陪审团的数量效应，从未涉及昆虫，也没有「差别细微仍能选对」的表述。",
            "为什么不是 C（José Halloy）：Halloy 的实验结果是蟑螂被误导选择了不合适的藏身处，属于「决策失败」而非「极佳结果」，方向恰好相反。",
            "为什么不是 D（Nigel Franks and colleagues）：Franks 研究的是蚂蚁，讨论搬迁速度与带路效率，并未提到在差别极小的选项中仍能选出最佳地点。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 24–26 摘要填空（Summary Completion，ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 24,
        "end": 26
      },
      "items": [
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "A Bristol University study looked at how insects make decisions when their home has been 24 ________",
          "translation": "布里斯托大学的一项研究考察了昆虫在其家园被 ________ 时如何做出决定。",
          "answer": "threatened",
          "wordClass": "动词的过去分词（与 has been 构成被动语态，作谓语的一部分，说明家园所处的状态；须填过去分词 threatened，不能填原形 threaten）",
          "locating": {
            "paragraph": "5",
            "quote": "At the University of Bristol, in the UK, Nigel Franks and his colleagues studied how a species of ant establishes a new nest. Franks and his associates reported how the insects reduce the problems associated with making a necessarily swift choice. If the ants' existing nest becomes suddenly threatened"
          },
          "synonyms": [
            "「A Bristol University study」同义替换为原文的「At the University of Bristol, in the UK, Nigel Franks and his colleagues studied」，布里斯托大学即 Bristol University 的另一种说法",
            "「how insects make decisions」同义替换为原文的「how the insects reduce the problems associated with making a necessarily swift choice」，讲的是昆虫如何应对需要迅速决定的情形",
            "「when their home has been 24 …」同义替换为原文的「If the ants' existing nest becomes suddenly threatened」，their home 即 the ants' existing nest，受威胁即 threatened"
          ],
          "locatingTip": "定位：题干给出专有信息「Bristol University」，第 5 段首句的 At the University of Bristol 与之对应，一步锁定本段。确定答案技巧：空格所在结构是 when their home has been 加空格，说明要填的是一个表示「家园处于什么状态」的词，回原文找与 home（对应 nest）搭配的形容词或分词。原文说 If the ants' existing nest becomes suddenly threatened（如果蚂蚁现有的巢突然受到威胁），threatened 正好填在 has been 之后构成被动语态，句意与题干完全吻合。填词时注意：ONE WORD ONLY，只写 threatened，不要连 suddenly 一起写；同时要保留 -ed 形式，因为 has been 之后必须是过去分词。",
          "analysis": "摘要的首句说「布里斯托大学的一项研究考察了昆虫在其家园被 ______ 时如何做决定」。回到第 5 段，开头写道 At the University of Bristol, in the UK, Nigel Franks and his colleagues studied how a species of ant establishes a new nest，机构名称与题干一一对应；随后又说 Franks and his associates reported how the insects reduce the problems associated with making a necessarily swift choice（这些昆虫如何减少「必须迅速作出选择」所带来的问题），说明研究关注的是「急迫情形下的决策」；紧接着给出条件句 If the ants' existing nest becomes suddenly threatened（如果蚂蚁现有的巢突然受到威胁），正是昆虫「家园受威胁」这一前提。题干把 the ants' existing nest 概括为 their home，把 becomes suddenly threatened 改写成 has been threatened，因此空格填 threatened。从词性看，has been 之后需要过去分词构成被动语态，threatened 既符合语法也符合原文用词；字数限制为 ONE WORD ONLY，所以不能写成 was threatened 或 suddenly threatened。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "The ants in the experiment relied on the use of individuals called 25 ________ to find a new nest and efficiently direct the others to go there.",
          "translation": "实验中的蚂蚁依靠被称为 ________ 的个体去寻找新巢，并高效地指引其他蚂蚁前往那里。",
          "answer": "scouts",
          "wordClass": "名词（复数，作过去分词 called 的宾语，指被选中外出寻找新巢的侦察蚁；原文用复数 scouts，填空时保持复数形式）",
          "locating": {
            "paragraph": "5",
            "quote": "the insects choose certain ants to act as scouts to find a new nest. How quickly they accomplish the transfer to a new home depends not only on how soon the best available site is found, but also on how quickly the migration there can be achieved."
          },
          "synonyms": [
            "「individuals called 25 …」同义替换为原文的「certain ants to act as scouts」，空格所填即它们的名称",
            "「to find a new nest」同义替换为原文的「to find a new nest」，原词复现",
            "「efficiently direct the others to go there」同义替换为原文第 6 段的「the chosen ants begin to lead others … and simultaneously show the way to those ants which have been left behind to guard the old nest」，以及本段的「How quickly they accomplish the transfer to a new home depends not only on how soon the best available site is found, but also on how quickly the migration there can be achieved」"
          ],
          "locatingTip": "定位：摘要提到「去寻找新巢的个体」，第 5 段中 find a new nest 原词复现，紧跟其前的 to act as scouts 就是答案所在。确定答案技巧：空格前的 individuals called 明确提示后面要填一个「称呼、名称」，回原文找到被选出执行这一任务的蚂蚁被称作什么——choose certain ants to act as scouts，scouts 正是这一称谓。至于「高效地指引其他蚂蚁前往那里」，在第 6 段得到印证：被选中的蚂蚁开始引领其他蚂蚁，并给留守旧巢的蚂蚁指路，使搬迁更快更有效率。答案为一个词 scouts，注意保持原文的复数形式。",
          "analysis": "摘要第二句说「实验中的蚂蚁依靠被称为 ______ 的个体去寻找新巢，并高效地指引其他蚂蚁前往那里」。第 5 段对应句是 If the ants' existing nest becomes suddenly threatened, the insects choose certain ants to act as scouts to find a new nest（如果蚂蚁现有的巢突然受到威胁，它们会挑选某些蚂蚁充当 scouts 去寻找新巢），其中 to find a new nest 与摘要的 to find a new nest 完全一致，act as scouts 就是 individuals called ______ 所对应的称谓，因此空格填 scouts。摘要后半句的「高效地指引其他蚂蚁前往那里」在第 6 段展开：the chosen ants begin to lead others … back to the original threatened nest，并且那些熟悉路线的蚂蚁还能帮忙运送蚁后和幼蚁，simultaneously show the way to those ants which have been left behind to guard the old nest，结果是 moving processes are accomplished faster and more efficiently——与摘要的 efficiently 一词遥相呼应。词性上 scouts 是名词并且以复数出现（certain ants 是复数，与之对应的称谓也用复数），填单数 scout 会与原文及语境不符。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "The study emphasized the necessity, for people as well as insects, of having active 26 ________ in order to execute decisions successfully.",
          "translation": "该研究强调，无论对人类还是昆虫而言，为了成功执行决策，都有必要拥有积极主动的 ________。",
          "answer": "leaders",
          "wordClass": "名词（复数，作动名词 having 的宾语，指为某个目标去带动他人的领导者；空格前有形容词 active 修饰，须填名词，并按原文用复数形式 leaders）",
          "locating": {
            "paragraph": "6",
            "quote": "But it does suggest, even for humans, the importance of recruiting dynamic leaders to a cause, because the most important thing about collective decision-making, as shown by these insect experiments, is to get others to follow."
          },
          "synonyms": [
            "「the necessity … of having active 26 …」同义替换为原文的「the importance of recruiting dynamic leaders to a cause」，necessity 对应 importance，active 对应 dynamic",
            "「for people as well as insects」同义替换为原文的「even for humans, … as shown by these insect experiments」，人类与昆虫并提",
            "「in order to execute decisions successfully」同义替换为原文的「the most important thing about collective decision-making … is to get others to follow」，因为要让别人跟随，才需要能带动他人的领导者"
          ],
          "locatingTip": "定位：摘要末句讲「人与昆虫都需要某种东西来成功执行决策」，第 6 段末句正是把话题从昆虫推到人类的地方，标志词是 even for humans。确定答案技巧：空格前是 having active（拥有积极的、有行动力的），回原文找到对应的名词短语——recruiting dynamic leaders to a cause，recruiting 对应 having，dynamic 对应 active，to a cause 对应 in order to execute decisions，可见空格要填的就是 leaders。注意答案只写 leaders 一词，且必须用复数，与原文 recruiting dynamic leaders 一致；也不要误填 cause，因为 cause 是这个短语中介词 to 的宾语，与空格前的 active 无法搭配。",
          "analysis": "摘要末句说「该研究强调，无论对人类还是昆虫而言，为了成功执行决策，都有必要拥有积极主动的 ______」。第 6 段末句正是对应句：How this might apply to choices that humans make is, as yet, unclear. But it does suggest, even for humans, the importance of recruiting dynamic leaders to a cause, because the most important thing about collective decision-making, as shown by these insect experiments, is to get others to follow.（这对人类的选择有何启示目前尚不明确，但它确实提示了为某一目标招募有行动力的领导者的重要性，因为如这些昆虫实验所示，集体决策中最重要的事情就是让别人跟随）。题干把 importance 概括为 necessity，把 dynamic 换成了 active，把 recruiting … to a cause 换成了 having … in order to execute decisions successfully，被招募、被拥有的对象就是 leaders，因此空格填 leaders。从词性看，空格前是 having active，需要一个受形容词修饰的名词，且原文用复数形式 leaders，故保持复数。注意不要填 follow（那是动词，且与 active 不搭）或 cause（虽然同句出现，但它位于介词 to 之后，与 active 无法构成搭配）。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
