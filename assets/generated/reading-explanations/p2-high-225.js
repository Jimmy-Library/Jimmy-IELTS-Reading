(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p2-high-225", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p2-high-225",
  "meta": {
    "examId": "p2-high-225",
    "title": "The problem of graffiti 涂鸦之困",
    "category": "P2",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 14–18 段落信息匹配（Which paragraph contains the following information?）",
      "mode": "per_question",
      "questionRange": {
        "start": 14,
        "end": 18
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 14,
          "stem": "A suggestion that might assist in bringing an effective legal action against graffitists",
          "translation": "某种可能有助于对涂鸦者提起有效法律诉讼的建议",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "To aid in achieving a successful prosecution, they encourage owners of properties to take photographs of any new graffiti, as there could be other related incidents occurring locally."
          },
          "synonyms": [
            "「An effective legal action against graffitists」同义替换为原文的「a successful prosecution」，即「成功起诉／检控涂鸦者」",
            "「a suggestion that might assist in …」同义替换为原文的「they encourage owners of properties to take photographs of any new graffiti」，鼓励业主拍照取证就是警方提出的做法",
            "「legal action」与原文的「the police」「possible culprits」构成同一执法语境，说明该段讨论的是追究涂鸦者责任而非清除污渍"
          ],
          "locatingTip": "定位：题干的关键词 legal action 属于抽象话题词，原文不会原词复现，必须先在脑中把它转换成原文可能的说法，如 prosecution（起诉）、police（警方）、culprits（作案人）。带着这几个词扫读六段，只有第 2 段密集出现 police、prosecution、identify possible culprits，一步锁定。确定答案技巧：段落匹配题找的是「信息点」而不是「单词」。第 2 段先说警方希望接到新涂鸦事件的报告（the police like to be notified of new graffiti incidents），紧接着交代这么做的目的：为了帮助成功起诉（To aid in achieving a successful prosecution），警方鼓励业主给新出现的涂鸦拍照，因为当地可能还有相关案件，案件规律（incidence pattern）和涂鸦者的标记（'tag'）有助于锁定嫌疑人。题干中的「a suggestion that might assist in bringing an effective legal action」正是这套取证建议的概括，故答案为 B。",
          "analysis": "第 2 段先讲涂鸦者不挑表面（are indiscriminate about the surfaces they choose），再讲为何要尽快清除，最后一段收在执法这条线上：「For this reason, the police like to be notified of new graffiti incidents.」（因此，警方希望接到新涂鸦事件的报告）「To aid in achieving a successful prosecution, they encourage owners of properties to take photographs of any new graffiti, as there could be other related incidents occurring locally.」（为了有助于成功起诉，他们鼓励业主拍下任何新涂鸦的照片，因为当地可能发生其他相关事件）「An incidence pattern can help to identify possible culprits, as can their 'tag' - the distinctive mark graffitists leave to show the graffiti is their work.」（事件发生的规律有助于识别可能的作案人，他们的「标记」也同样有助于识别——那是涂鸦者留下的、用来表明作品归属的独特记号）。这三句构成完整的链条：为了成功起诉（顺利追究法律责任），警方建议业主拍照取证，再配合案件规律与涂鸦者标记锁定作案人。题干把这一整套做法压缩成「a suggestion that might assist in bringing an effective legal action against graffitists」（某个可能有助于对涂鸦者采取有效法律行动的建议），其中 effective legal action 对应 a successful prosecution，suggestion 对应 police 鼓励业主拍照这一建议，graffitists 对应 possible culprits。信息点完全吻合，选 B。注意本题的干扰点在于全篇都在谈「处理涂鸦」，但只有第 2 段把落点放在「追究涂鸦者的法律责任」上。",
          "traps": [
            "为什么不是 D：第 4 段讲的是去除涂鸦过程中如何保护路人和操作者（passers-by、protective clothing、airborne particles），属于清除作业的安全问题，与对涂鸦者提起法律诉讼无关。",
            "为什么不是 E：第 5 段列举的是防范措施（泛光灯照明、闭路电视监控、围栏等障碍物）及其成本，属于事前预防，并没有出现起诉、警方取证之类的执法建议。",
            "为什么不是 C：第 3 段讨论的是「如何选择清除方法」（清洗试验、由最温和的方法入手），与法律行动无关。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 15,
          "stem": "An explanation why all instances of graffiti cannot be removed in the same way",
          "translation": "对为什么不能以相同方式清除所有涂鸦的解释",
          "answer": "C",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Consequently, as no two sites are the same, there is no one treatment which will be suitable for all situations; each site must be looked at individually."
          },
          "synonyms": [
            "「all instances of graffiti cannot be removed in the same way」同义替换为原文的「there is no one treatment which will be suitable for all situations」，即没有任何一种处理方法适用于所有情况",
            "「An explanation why」对应原文的因果标记「Consequently」与说明原因的从属连词「as no two sites are the same」（因为没有任何两个场地是相同的）",
            "「cannot be removed in the same way」还对应原文的「each site must be looked at individually」（每个场地都必须单独评估），强调必须区别对待"
          ],
          "locatingTip": "定位：题干问的是「原因解释」，抓住两组关键词就不能跑偏——一是「不能一视同仁」（in the same way、all instances），二是「清除」（removed）。扫读六段，第 3 段开头第一句就是「Any proposal to remove graffiti has to be carefully considered because techniques designed for robust or utilitarian surfaces may result in considerable damage to older, more historic buildings.」（任何清除涂鸦的方案都必须慎重考虑，因为为坚固或实用表面设计的技术可能会严重损坏更古老的建筑），紧接着给出结论句，正是本题的定位句。确定答案技巧：段落匹配题要抓「因果关系」这类逻辑信号。定位句用 Consequently 起头承接前因，再用 as no two sites are the same 直接给出理由：没有任何两个场地是完全相同的，所以不存在一种适用于所有情况的处理方法，每个场地都要单独评估。这就是题干所要的 explanation——为什么不能以同一方式清除所有涂鸦，故答案为 C。",
          "analysis": "第 3 段是全文最典型的「说明原因」段。首句说明为何清除方案要慎重：为坚固表面或实用性表面设计的技术，可能会对更古老、更具历史价值的建筑造成相当大的损坏（may result in considerable damage to older, more historic buildings）。第二句给出结论：「Consequently, as no two sites are the same, there is no one treatment which will be suitable for all situations; each site must be looked at individually.」（因此，由于没有任何两个场地是相同的，不存在一种适用于所有情况的处理方法；每个场地都必须单独评估）。随后才展开操作层面的建议：业主可以自己处理或委托专业承包商（a specialist contractor），但无论走哪条路都要遵循系统化的流程（a systematic approach），第一步是做清洗试验（cleaning trials），从最温和的方法（least aggressive cleaning method）开始，通常用水。题干的三层信息在原文中层层对应：An explanation 对应 Consequently 加 as 引出的原因；all instances of graffiti 对应 no two sites are the same（场地各不相同正是「所有情况」的另一种说法）；cannot be removed in the same way 对应 no one treatment which will be suitable for all situations 与 each site must be looked at individually。要特别注意，第 4 段才真正列举化学与机械两类具体方法，第 3 段讲的是「为什么不能一刀切」，题干问的正是后者，所以答案只能是 C。",
          "traps": [
            "为什么不是 D：第 4 段确实讲了不同方法（chemical and mechanical systems），但那是具体方法的介绍与安全要求，并没有解释「为何不能对所有涂鸦采用同一种清除方式」，属于「讲了方法却没讲原因」。",
            "为什么不是 B：第 2 段谈的是尽快清除的必要性（防止模仿、涂料变干更难去除），落点在「快」，而不是「因场地不同而方法不同」。",
            "为什么不是 F：第 6 段只介绍屏障涂层这一种预防手段能让清除变得更容易，没有解释不同场地为何需要不同处理。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 16,
          "stem": "An argument that graffiti can have a negative effect on community life",
          "translation": "涂鸦可能对社区生活产生负面影响的论证",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "A more important factor, however, is that graffiti can lead to more serious forms of vandalism and, ultimately, to the deterioration of a neighborhood area, and in this way contributes to a general social decline."
          },
          "synonyms": [
            "「community life」同义替换为原文的「a neighborhood area」与「a general social decline」（社区区域、整体社会衰退）",
            "「have a negative effect on」同义替换为原文的「lead to more serious forms of vandalism」与「the deterioration of」（导致更严重的蓄意破坏、导致……的恶化）",
            "「An argument」对应原文的论述性标志「A more important factor, however, is that …」，表示作者在提出并论证一条更重要的理由"
          ],
          "locatingTip": "定位：题干的两个核心词是 negative effect（负面影响）与 community life（社区生活），原文不会照抄，需换成 deterioration（恶化）、social decline（社会衰退）、neighborhood（社区）这类词去扫读。第 2 段中段出现的整句罗列了从涂鸦到破坏行为再到社区衰败的逐步恶化链条，正是本题的落点。确定答案技巧：段落匹配题看到 negative 这类评价性形容词，就要找原文中的「贬义链条」，即由轻到重的连续后果。定位句用 lead to … and, ultimately, to … 层层递进：涂鸦可能导致更严重的蓄意破坏行为，最终导致社区区域恶化，并以 in this way contributes to a general social decline 收尾。这一连串后果正是题干所说的「负面影响」，影响的对象 a neighborhood area 与 a general social decline 也就是题干的 community life，故答案为 B。",
          "analysis": "第 2 段的主线是「为什么要尽快清除涂鸦」，并为清除给出三条理由：一是防止模仿（prevent 'copy-cat' emulation），一块干净表面被破坏后很容易迅速出现跟风者，所以许多公司和议会规定在接到报告后一两小时内清除；二是涂料、胶水和墨水变干后会越来越难清除（as paints, glues, and inks dry out, they can become increasingly difficult to remove）；三是最重要的一条，即本题的定位句：「A more important factor, however, is that graffiti can lead to more serious forms of vandalism and, ultimately, to the deterioration of a neighborhood area, and in this way contributes to a general social decline.」（然而，一个更重要的因素是，涂鸦可能导致更严重的蓄意破坏行为，并最终导致社区区域的恶化，从而助长整体社会的衰退）。句中的 A more important factor, however 是明显的「论证」信号，说明作者在提出并强调一条更有分量的理由；lead to 与 ultimately 引出由轻到重的后果链，从 vandalism（蓄意破坏）到 deterioration of a neighborhood area（社区恶化）再到 a general social decline（社会整体衰退），一步步指向 negative effect on community life。题干把这条链条概括为「涂鸦可能对社区生活产生负面影响」的论证，与原文完全对应，选 B。做本题时不要被同段前两条理由干扰——防止模仿与清除难度讲的都是「清理的紧迫性」，只有第三条真正涉及社区与社会层面的负面影响。",
          "traps": [
            "为什么不是 A：第 1 段虽然提到古代涂鸦具有珍贵的历史与考古价值，也承认近代涂鸦已成为普遍问题（a pervasive problem），但只是客观陈述现象本身，并没有论证它对社区生活造成负面影响。",
            "为什么不是 E：第 5 段讨论的是防范措施（照明、监控、围栏）及其成本，属于应对手段的讨论，没有展开涂鸦对社区生活的负面影响。",
            "为什么不是 C：第 3 段的落点是清除方案必须因场地而异，不涉及涂鸦的社会后果。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 17,
          "stem": "An admission that some strategies for tackling graffiti may lead to an increase in graffiti",
          "translation": "对某些对付涂鸦的策略反而可能导致涂鸦增多的承认",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "physical obstacles such as fences, railings, doors, or gates can be introduced to discourage unauthorized access, though in some cases, these obstacles simply provide a new surface for graffiti."
          },
          "synonyms": [
            "「An admission」同义替换为原文的让步结构「though in some cases」（尽管在某些情况下），作者在这里承认自己所介绍的措施存在副作用",
            "「may lead to an increase in graffiti」同义替换为原文的「these obstacles simply provide a new surface for graffiti」，障碍物反倒为涂鸦提供了新的表面，等于让涂鸦更多",
            "「strategies for tackling graffiti」同义替换为原文的「physical obstacles such as fences, railings, doors, or gates」，即用来阻止擅自进入的障碍物措施"
          ],
          "locatingTip": "定位：题干的关键是「承认（admission）」与「反而增多（increase）」这一对转折意味。原文中用 though、however、unfortunately 这类让步或转折词的地方，最容易出现作者的「承认」。第 5 段末尾的 though in some cases 正是这样的位置：作者先说物理障碍物（围栏、栏杆、门、闸门）可以阻止擅自进入，随即承认在某些情况下这些障碍物反而给涂鸦提供了新的表面。确定答案技巧：抓住「副作用」的表述——supply a new surface for graffiti 就是「增加涂鸦量」的同义改写；而题干中的 some strategies 对应 physical obstacles 这一类措施，故答案为 E。注意本题问的不是「作者推荐什么措施」，而是「作者承认哪些措施有反效果」，落点在让步从句而非主句。",
          "analysis": "第 5 段先立论：对付反复出现的涂鸦问题可以采取多种措施，而防范措施（protection measures）最终比反复清除更成功、破坏更小。接着列举既有做法：涂鸦多发于容易到达的平整表面，但涂鸦者也可能会爬上桥梁让作品更显眼；防范办法可以用泛光灯照亮暗处，再配合闭路电视之类的监控系统，研究显示位置显眼的摄像头能减少反复发生涂鸦区域的涂鸦数量。随后话锋一转：「Unfortunately, the cost of any of these measures may be too high, and so physical obstacles such as fences, railings, doors, or gates can be introduced to discourage unauthorized access, though in some cases, these obstacles simply provide a new surface for graffiti.」（不幸的是，这些措施中的任何一种成本都可能过高，因此可以设置围栏、栏杆、门或闸门之类的物理障碍来阻止擅自进入，尽管在某些情况下，这些障碍物只是为涂鸦提供了新的表面）。最后半句就是本题的落点：作者先推荐障碍物，随即用 though in some cases 承认它可能适得其反——障碍物本身变成了新的涂鸦载体，等于让涂鸦增加。题干中的 admission 对应这个让步语气，some strategies 对应 physical obstacles 这类措施，may lead to an increase in graffiti 对应 simply provide a new surface for graffiti，故答案为 E。本题的坑在于：全段主句都在讲「如何防范」，只有让步从句才交代「可能反效果」，读段落时若跳过 though 之后的半句就会误选。",
          "traps": [
            "为什么不是 B：第 2 段提到要尽快清除以防「模仿」（prevent 'copy-cat' emulation），意思是拖延清除会让涂鸦迅速在干净表面上蔓延，强调的是清除要及时，并非承认某项策略本身会导致涂鸦增多。",
            "为什么不是 F：第 6 段确实承认屏障涂层「不能阻止涂鸦被涂上」（Although this will not stop graffiti being applied），但作者随即指出它能让清除容易得多，属于说明手段的局限，而不是「导致涂鸦增加」。",
            "为什么不是 C：第 3 段只讨论清除方法的选择与操作流程，没有涉及任何措施的副作用。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 18,
          "stem": "Some risks people face when graffiti is being removed",
          "translation": "清除涂鸦时人们面临的一些风险",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "When using either of these systems, care must be taken with regard to protecting both passers-by and the person carrying out the graffiti removal."
          },
          "synonyms": [
            "「Some risks people face when graffiti is being removed」对应原文的「protecting both passers-by and the person carrying out the graffiti removal」，需要保护的对象正是面临风险的人",
            "「when graffiti is being removed」同义替换为原文的「the person carrying out the graffiti removal」与「When using either of these systems」，均指清除作业过程",
            "「risks」还对应原文后文的「protective clothing」「being hurt by hard airborne particles」「potentially harmful chemicals」「aerial mists」，都是风险的具体表现"
          ],
          "locatingTip": "定位：题干的落点是「人在清除过程中的风险」，那么原文一定要有「人」和「危险」两类信息。扫读六段，第 4 段集中出现 passers-by（路人）、the person carrying out the graffiti removal（实施清除的人）、protective clothing（防护服）、being hurt by hard airborne particles（被坚硬的飞溅颗粒伤到）、potentially harmful chemicals（可能有害的化学物质），全是人身风险词汇，因此锁定第 4 段。确定答案技巧：把题干抽象成「清除时，谁有危险」，回原文核对保护对象即可。定位句说使用化学或机械系统时，必须注意保护路人和实施清除的人，说明这两类人在作业中面临风险；后文进一步给出防护要求（穿防护服、控制化学径流、避免气雾飘散），都是从不同角度降低这些风险，故答案为 D。",
          "analysis": "第 4 段承接第 3 段的「清洗试验」，系统介绍清除涂鸦的两大类方法：化学系统与机械系统。段首即点明安全主题：「When using either of these systems, care must be taken with regard to protecting both passers-by and the person carrying out the graffiti removal.」（使用这两种系统中的任何一种时，都必须注意保护路人和实施涂鸦清除的人）。随后分别展开：化学制剂靠溶解涂鸦介质（based on dissolving the graffiti media），溶剂从温和到可能危险的化学「混合液」（potentially dangerous chemical 'cocktails'）不等，使用时必须穿防护服（wear protective clothing）、采取措施尽量减少有害化学物质的径流（minimize any run-off of potentially harmful chemicals）、避免气雾飘散（avoid the drifting of aerial mists）；机械系统多为钢丝刷打磨与喷砂（wire-brushing and grit blasting），靠削除涂鸦介质，操作者同样必须穿防护服以免被坚硬的飞溅颗粒所伤（to avoid being hurt by hard airborne particles），而且这种方法常常会在表面留下痕迹。题干中的 some risks people face when graffiti is being removed（清除涂鸦时人们面临的一些风险）恰好概括了本段反复强调的两类风险主体——路人（passers-by）与操作者（operators），以及化学危害与飞溅颗粒等具体风险，故答案落在 D 段。做题提示：段落匹配题中，凡是出现 passers-by、protective、harmful、hurt 这类「人身安全」词群的段落，基本就是考查「风险与安全」的段落。",
          "traps": [
            "为什么不是 E：第 5 段虽然也提到措施的成本与副作用，但讨论的是防范手段（照明、监控、物理障碍），没有涉及清除作业中的人身风险。",
            "为什么不是 C：第 3 段出现「least aggressive cleaning method」「cleaning trials」时容易让人联想到操作安全，但该段的重点是方法选择与操作程序，谈到「人」时说的是业主自己处理还是找专业承包商，与作业风险无关。",
            "为什么不是 F：第 6 段讲屏障涂层使清除只需用水，落点是「降低对基面的损伤」，而不是人的风险。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 19–20 多选（Choose TWO letters, A-E）：去除涂鸦的方法",
      "mode": "per_question",
      "questionRange": {
        "start": 19,
        "end": 20
      },
      "items": [
        {
          "questionId": "q6",
          "questionNumber": 19,
          "stem": "The article gives details about different methods of removing graffiti. Which TWO points are made by the writer of this article? (Choose TWO letters, A-E)",
          "translation": "文章给出了关于不同涂鸦清除方法的细节。作者提出了以下哪两个观点？（从 A-E 中选择两项）",
          "answer": "B",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "These trials should be carried out on a small unobtrusive area if possible and should always start with the least aggressive cleaning method, usually water, and stop once a successful method has been found."
          },
          "synonyms": [
            "「An inconspicuous part of a surface」同义替换为原文的「a small unobtrusive area」，unobtrusive（不显眼的）对应 inconspicuous",
            "「should be used to test a cleaning method」同义替换为原文的「These trials should be carried out … to see which method is suitable for the removal of the graffiti media used」，即先做清洗试验来检验方法",
            "「a cleaning method」对应原文的「the least aggressive cleaning method」（最温和的清洗方法）"
          ],
          "locatingTip": "定位：题目问「清除涂鸦的方法」，对应原文第 3 段与第 4 段。选项 B 的关键词 inconspicuous（不显眼的）在原文中的同义词是 unobtrusive，两词意思一致，直接扫读该词即可锁定第 3 段的「These trials should be carried out on a small unobtrusive area if possible」。确定答案技巧：同义换词题要在验证「细节是否被真正提到」时才下判断——原文先说第一步是进行清洗试验以确定适合的方法（The first step is to carry out cleaning trials），紧接着要求试验尽量在不显眼的小面积上进行，并且从最温和的方法开始。题干 B 把这两点合并成「应当在不显眼的部分测试清洗方法」，与原文字面意思一致，故 B 正确。",
          "analysis": "第 3 段在讲完「清除方案必须因场地而异、要遵循系统化流程」之后，给出了具体操作步骤：「The first step is to carry out cleaning trials to see which method is suitable for the removal of the graffiti media used, and also which method has the least impact on the site surface.」（第一步是进行清洗试验，以确定哪种方法适合清除所使用的涂鸦介质，同时也确定哪种方法对场地表面的影响最小）「These trials should be carried out on a small unobtrusive area if possible and should always start with the least aggressive cleaning method, usually water, and stop once a successful method has been found.」（如果可能，这些试验应当在一块不显眼的小面积上进行，而且始终要从最温和的清洗方法开始，通常就是用水，一旦找到成功的方法就立刻停止）。选项 B 把 a small unobtrusive area 换写成 an inconspicuous part of a surface，把 these trials should be carried out 换成 should be used to test a cleaning method，语义完全对等，因此 B 是作者明确表述过的观点。本题是 Choose TWO 题型，第 20 题与本题同组，另一个正确选项是 D（见第 20 题解析）。",
          "traps": [
            "为什么不是 A：原文全篇没有说化学药剂价格昂贵。提到 cost 的只有第 5 段「the cost of any of these measures may be too high」，那是指泛光灯、监控系统、物理障碍等防范措施成本可能过高，与化学清除剂的费用无关；第 4 段只说溶剂从温和到危险不等（range from mild to potentially dangerous chemical 'cocktails'），谈的是危险性而不是价格。",
            "为什么不是 C：原文对化学制剂的描述是「Chemical preparations are based on dissolving the graffiti media」，即化学制剂基于溶解涂鸦介质，并说这些溶剂从温和到可能危险的化学混合液不等，完全没有提到「酒精基（alcohol-based）制剂」或它成功率高低，属于无中生有。",
            "为什么不是 E：原文的要求恰好相反——清洗试验「should always start with the least aggressive cleaning method, usually water」（始终应从最温和的方法开始，通常是用水），并强调找到有效方法后立即停止，所以「使用可用的最强方法」与原文相悖。",
            "同组的另一个正确答案是 D（对应第 20 题），两项共同构成 Choose TWO 的答案，本题只排除 A、C、E 三个干扰项。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 20,
          "stem": "The article gives details about different methods of removing graffiti. Which TWO points are made by the writer of this article? (Choose TWO letters, A-E)",
          "translation": "文章给出了关于不同涂鸦清除方法的细节。作者提出了以下哪两个观点？（从 A-E 中选择两项）",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "When using chemicals, it is important to wear protective clothing, take measures to minimize any run-off of potentially harmful chemicals, and avoid the drifting of aerial mists."
          },
          "synonyms": [
            "「Localised pollution」同义替换为原文的「any run-off of potentially harmful chemicals」与「the drifting of aerial mists」，即有害化学物质的径流与气雾飘散造成的局部污染",
            "「can result from some cleaning methods」对应原文的「When using chemicals …」，说明这些污染是化学清除方法可能带来的后果",
            "「take measures to minimize」对应题干的 can result from，原文用「采取措施尽量减少」间接承认了污染物确实会产生"
          ],
          "locatingTip": "定位：选项 D 的关键词是 pollution（污染）与 cleaning methods（清除方法）。原文不会直接用 pollution，而会用它的具体表现，如 run-off（径流）、chemicals（化学物质）、aerial mists（气雾）。第 4 段在讲化学制剂的使用要求时，明确要求「缓解潜在有害化学物质的径流并避免气雾飘散」，正是局部污染问题。确定答案技巧：判断「是否被提到」时要注意原文的隐含表达方式。原文并未直接说「这会造成污染」，而是提出防范要求——尽量减少径流、避免气雾飘散，需要防范的东西必然是已经存在的危害，因此可以断定作者承认化学清除方法会产生局部污染，D 正确。",
          "analysis": "第 4 段先指出在使用化学或机械系统时都要注意保护路人与操作者，然后集中讲化学方法：「Chemical preparations are based on dissolving the graffiti media; these solvents can range from mild to potentially dangerous chemical 'cocktails'.」（化学制剂靠溶解涂鸦介质起作用；这些溶剂从温和的到可能危险的化学混合液不等）「When using chemicals, it is important to wear protective clothing, take measures to minimize any run-off of potentially harmful chemicals, and avoid the drifting of aerial mists.」（使用化学品时，重要的是穿防护服、采取措施尽量减少可能有害的化学物质的径流，并避免气雾飘散）。其中的 run-off（径流）与 aerial mists（气雾）都是污染扩散的形式，minimize 与 avoid 两个动词说明这类污染确实会发生，所以才需要防范，这与选项 D「某些清除方法会造成局部污染」完全对应，故 D 正确。本题与第 19 题同组，另一正确选项是 B（见第 19 题解析）。注意不要被同段的机械方法描述干扰：机械方法讲的是飞溅颗粒伤人（be hurt by hard airborne particles）以及留下痕迹（leaves marks on a surface），那属于人身安全与表面损伤，不是污染。",
          "traps": [
            "为什么不是 A：如第 19 题所述，原文只在第 5 段为防范措施的成本发愁（the cost of any of these measures may be too high），从未提到化学清除剂昂贵。",
            "为什么不是 C：原文只把化学制剂概括为基于溶解涂鸦介质的溶剂（solvents），并按其危险性排列，从温和到危险不等，没有任何关于「酒精基制剂」或「往往很成功」的表述。",
            "为什么不是 E：与原文相反，第 3 段明确要求从最温和的方法开始（should always start with the least aggressive cleaning method, usually water），找出有效方法后立即停止，作者并未主张使用最强的方法。",
            "同组的另一个正确答案是 B（对应第 19 题），两项共同构成 Choose TWO 的答案，本题只排除 A、C、E 三个干扰项。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 21–22 多选（Choose TWO letters, A-E）：应对反复出现的涂鸦问题",
      "mode": "per_question",
      "questionRange": {
        "start": 21,
        "end": 22
      },
      "items": [
        {
          "questionId": "q8",
          "questionNumber": 21,
          "stem": "The writer describes ways of combating a recurring problem of graffiti. Which TWO of these ideas are mentioned by the writer? (Choose TWO letters, A-E)",
          "translation": "作者描述了应对反复出现的涂鸦问题的办法。以下哪两项想法是作者提到的？（从 A-E 中选择两项）",
          "answer": "D",
          "wordClass": "",
          "locating": {
            "paragraph": "5",
            "quote": "Possible protection measures may include a combination of floodlighting to illuminate dark areas and surveillance systems such as closed-circuit television."
          },
          "synonyms": [
            "「Ensuring surfaces are visible … both day and night」同义替换为原文的「floodlighting to illuminate dark areas」，用泛光灯照亮黑暗区域，等于让表面在夜间也清晰可见",
            "「monitored」同义替换为原文的「surveillance systems such as closed-circuit television」，闭路电视之类的监控系统即对表面实施监视",
            "「combating a recurring problem of graffiti」对应原文首句「Different measures can be adopted to combat a recurring problem of graffiti」，题干与原文措辞几乎一致"
          ],
          "locatingTip": "定位：题干的关键词组合非常特别——recurring problem of graffiti（反复出现的涂鸦问题），原文第 5 段首句几乎原词复现：「Different measures can be adopted to combat a recurring problem of graffiti.」，一步定位第 5 段（第 6 段虽也讲防范，但用的是 Another strategy 承接，属同一主题的延伸）。确定答案技巧：核对「可见＋监控」这两个要素。原文说防范措施可以包括「floodlighting to illuminate dark areas」（用泛光灯照亮暗处）与「surveillance systems such as closed-circuit television」（闭路电视之类的监控系统）的组合，前者对应选项 D 的 visible（可见），后者对应 monitored（受监控）；dark areas 被照亮意味着夜间也能看清，因此 both day and night 成立，D 正确。",
          "analysis": "第 5 段的主题是防范（protection）优于反复清除：「It is clear that protection measures will ultimately be more successful and less damaging than multiple removal treatments.」（显然，防范措施最终会比反复清除更成功、破坏更小）。随后列举具体做法：涂鸦多发于容易到达、涂上就立刻显眼的平整表面，但也不尽然，涂鸦者还会爬上桥梁让作品更醒目；接着给出防范措施的组合——「Possible protection measures may include a combination of floodlighting to illuminate dark areas and surveillance systems such as closed-circuit television.」（可能的防范措施包括用泛光灯照亮黑暗区域，再配合闭路电视之类的监控系统）并补充研究结论：位置显眼的摄像头能减少反复发生涂鸦区域的涂鸦数量（prominently placed cameras can reduce the incidence of graffiti in areas with a recurring problem）。选项 D 把这套措施概括为「确保表面昼夜可见并处于监控之下」：floodlighting to illuminate dark areas 对应 visible（照亮暗处即夜间可见），surveillance systems such as closed-circuit television 与 prominently placed cameras 对应 monitored，两项措施的组合正好覆盖「昼与夜」，因此 D 是作者提到的想法。本题与第 22 题同组，另一正确选项是 E（见第 22 题解析）。",
          "traps": [
            "为什么不是 A：原文从未提到开展反对涂鸦的广告宣传活动。第 5 段提到的是照明、监控与物理障碍三类措施，第 6 段提到的是屏障涂层，都与广告宣传无关。",
            "为什么不是 B：原文说的是在已有表面上「涂上一层可去除的防涂鸦屏障涂层」（apply a removable anti-graffiti barrier-coating），属于对现有基面的处理，而不是创造一种新的建筑材料（a new building material）；选项把「涂层」偷换成「新建材」，与原文不符。",
            "为什么不是 C：原文提到的是监控摄像头与闭路电视（cameras、closed-circuit television）以及物理障碍（fences, railings, doors, or gates），并未提到雇用保安或增加警方巡逻；警方的角色只在第 2 段出现，且是接受涂鸦事件报告与取证，不是巡逻。",
            "同组的另一个正确答案是 E（对应第 22 题），两项共同构成 Choose TWO 的答案，本题只排除 A、B、C 三个干扰项。"
          ]
        },
        {
          "questionId": "q9",
          "questionNumber": 22,
          "stem": "The writer describes ways of combating a recurring problem of graffiti. Which TWO of these ideas are mentioned by the writer? (Choose TWO letters, A-E)",
          "translation": "作者描述了应对反复出现的涂鸦问题的办法。以下哪两项想法是作者提到的？（从 A-E 中选择两项）",
          "answer": "E",
          "wordClass": "",
          "locating": {
            "paragraph": "6",
            "quote": "Barrier coatings are usually applied by brush or spray, leaving a thin veneer that essentially serves to isolate the graffiti from the surface."
          },
          "synonyms": [
            "「Adding a covering layer」同义替换为原文的「apply a removable anti-graffiti barrier-coating」与「leaving a thin veneer」，即在表面加上一层屏障涂层、留下一层薄膜",
            "「that graffiti cannot penetrate」同义替换为原文的「serves to isolate the graffiti from the surface」，把涂鸦与基面隔离开，使涂鸦无法渗入表面",
            "「Another strategy」与题干「ways of combating a recurring problem of graffiti」呼应，说明屏障涂层也是应对反复涂鸦的一种办法"
          ],
          "locatingTip": "定位：题干问「应对反复涂鸦问题的办法」，第 5、6 两段都在回答，第 6 段以「Another strategy is to apply a removable anti-graffiti barrier-coating as a form of preventive measure.」开头，明确把这层涂层列为又一种策略。选项 E 的关键词 covering layer 与原文的 coating、veneer 直接对应。确定答案技巧：核对「覆盖层」与「无法穿透」两个要素。原文说屏障涂层通常用刷子或喷涂方式施涂（applied by brush or spray），留下一层很薄的薄膜（leaving a thin veneer），其作用本质上是把涂鸦与表面隔离开（isolate the graffiti from the surface）；「隔离」就意味着涂鸦无法渗入基面，与选项 E 的「graffiti cannot penetrate」一致，故 E 正确。",
          "analysis": "第 6 段给出最后一种策略：施加可去除的防涂鸦屏障涂层作为预防手段（apply a removable anti-graffiti barrier-coating as a form of preventive measure）。作者并不夸大它的作用，而是坦率说明：「Although this will not stop graffiti being applied, it will make its removal much easier and usually only involves using water, which reduces the possibility of damage to the site surface.」（虽然这不能阻止涂鸦被涂上，但它会让清除容易得多，而且通常只需用水，从而降低损坏场地表面的可能性）接着说明施涂方式与原理：「Barrier coatings are usually applied by brush or spray, leaving a thin veneer that essentially serves to isolate the graffiti from the surface.」（屏障涂层通常用刷子或喷涂施涂，留下一层薄薄的薄膜，其作用本质上就是把涂鸦与表面隔离开）。选项 E 把这句概括为「加上一层涂鸦无法穿透的覆盖层」：covering layer 对应 barrier coating 与 thin veneer，cannot penetrate 对应 isolate the graffiti from the surface（涂鸦被隔离在表面之外，自然无法渗入），因此 E 是作者提到的想法。文末的总结句「there are some steps that can be taken to minimize the impact of graffiti and to protect vulnerable surfaces」进一步确认屏障涂层属于这些步骤之一。本题与第 21 题同组，另一正确选项是 D（见第 21 题解析）。",
          "traps": [
            "为什么不是 A：原文没有提到任何广告宣传活动，第 6 段只介绍屏障涂层这一种做法。",
            "为什么不是 B：选项说的是「创造一种新的建筑材料来排斥涂鸦」，而原文的屏障涂层是涂在既有表面上的处理层（applied by brush or spray），并非建筑材料；这是把「涂层」与「材料」混为一谈。",
            "为什么不是 C：原文提到的监控手段是摄像头与闭路电视（prominently placed cameras、closed-circuit television），并说这些设备位置显眼能减少涂鸦；「雇用保安、增加警方巡逻」在原文中没有出现。",
            "同组的另一个正确答案是 D（对应第 21 题），两项共同构成 Choose TWO 的答案，本题只排除 A、B、C 三个干扰项。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 23–26 句子填空（NO MORE THAN TWO WORDS）",
      "mode": "per_question",
      "questionRange": {
        "start": 23,
        "end": 26
      },
      "items": [
        {
          "questionId": "q10",
          "questionNumber": 23,
          "stem": "Ancient graffiti is studied because it records a 23 ________ of the culture of that period.",
          "translation": "人们研究古代涂鸦，是因为它记录了那个时期文化的一份 ________。",
          "answer": "social history",
          "wordClass": "名词短语（形容词 social 作前置定语修饰中心词 history，与题干给出的不定冠词 a 一起构成名词短语，作动词 records 的宾语，其后 of the culture of that period 作 history 的后置定语；此处为可数用法，故用单数形式，共两个单词）",
          "locating": {
            "paragraph": "1",
            "quote": "In such circumstances, it has acquired invaluable historical and archaeological significance as it provides a social history of life and events at that time."
          },
          "synonyms": [
            "「Ancient graffiti is studied」同义替换为原文的「it has acquired invaluable historical and archaeological significance」，因为具有珍贵的历史与考古价值，所以才被研究",
            "「records」同义替换为原文的「provides」，即「提供／记载」",
            "「the culture of that period」同义替换为原文的「life and events at that time」，即当时的生活与事件"
          ],
          "locatingTip": "定位：空格前的信息是 Ancient graffiti（古代涂鸦）与 studied（被研究），回到原文第 1 段，该段正好交代古代涂鸦的意义：「It is not a new phenomenon; examples can be found on ancient structures around the world, in some cases predating the Greeks and Romans.」（这不是新现象，世界各地古代建筑上都能找到例子，有些甚至早于希腊人和罗马人）随后一句说明它的价值。确定答案技巧：题干用 because 引出原因，对应原文的原因连词 as；题干说「records a … of the culture of that period」，原文说「provides a social history of life and events at that time」，把 provides 换成 records、把 life and events at that time 换成 the culture of that period，于是空格处就应填 a 与 of 之间的 social history。注意答案限定为不超过两个单词，social history 恰好两个词，必须完整写成「social history」，不能只写 history，也不能添加冠词。",
          "analysis": "第 1 段先给涂鸦下定义：该词源自意大利语 graffio（意为 scratching，刮擦），可定义为未经许可在物品、建筑结构和自然景观上刮刻或涂抹的标记或文字（uninvited markings or writing scratched or applied to objects, built structures, and natural features）。随后强调它不是新现象，世界各地的古代建筑上都有实例，有些甚至早于希腊人与罗马人。接着是本段的关键句：「In such circumstances, it has acquired invaluable historical and archaeological significance as it provides a social history of life and events at that time.」（在这样的情况下，它获得了珍贵的历史与考古意义，因为它提供了当时生活与事件的社会史）。最后指出近代涂鸦则完全不同，由于廉价而快速的标记手段（包括无处不在的喷漆）普及，近五十年来涂鸦已成为普遍问题。题干把「研究古代涂鸦的原因」表述为「it records a 23 ________ of the culture of that period」，与原文的 as it provides a social history of life and events at that time 一一对应：原因连词 as 对应 because，provides 对应 records，life and events at that time 对应 the culture of that period，空格填入 social history。本题的干扰点在于同段还有 historical、archaeological、significance 等看似可填的名词，但它们分别与 historical 和 archaeological 搭配成固定短语，且题干空格外已有 a … of 结构，只有 social history 能与 of the culture of that period 自然衔接。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 24,
          "stem": "The unique signature of graffitists, known as a 24 ________, can assist police in finding and prosecuting them.",
          "translation": "涂鸦者那种独特的签名——被称为 ________——可以帮助警方找到并起诉他们。",
          "answer": "tag",
          "wordClass": "名词（单数，指涂鸦者留下的独特标记；位于介词 as 之后作介词宾语，与 known as 一起说明前面的 signature；空格前有不定冠词 a，故用单数形式 tag，不加复数）",
          "locating": {
            "paragraph": "2",
            "quote": "An incidence pattern can help to identify possible culprits, as can their 'tag' - the distinctive mark graffitists leave to show the graffiti is their work."
          },
          "synonyms": [
            "「The unique signature of graffitists」同义替换为原文的「their 'tag' - the distinctive mark graffitists leave to show the graffiti is their work」，即涂鸦者留下以表明作品归属的独特标记",
            "「known as」同义替换为原文的破折号解释结构，原文用「- the distinctive mark …」对 tag 作出解释",
            "「can assist police in finding and prosecuting them」同义替换为原文的「An incidence pattern can help to identify possible culprits」与上一句的「To aid in achieving a successful prosecution」"
          ],
          "locatingTip": "定位：题干有三个抓手——graffitists、police、prosecuting，这些词都密集出现在第 2 段后半部分。再配合题干里的 signature（签名）、known as（被称为）这种「命名式」表述，回到原文找对某个标记下定义的地方即可。确定答案技巧：原文用破折号给出定义：「An incidence pattern can help to identify possible culprits, as can their 'tag' - the distinctive mark graffitists leave to show the graffiti is their work.」（事件发生的规律有助于识别可能的作案人，他们的「标记」也同样有用——那是涂鸦者留下的、用来表明作品归属的独特记号）。破折号之前是名称 tag，破折号之后是对它的解释 distinctive mark，正好对应题干的 the unique signature … known as a …，因此空格填 tag。答案为一个单词，且空格前已有 a，写 tag 即可，不要写成 tag mark 或 the tag。",
          "analysis": "第 2 段在讲「为什么要尽快清除涂鸦」的同时，交代了警方对涂鸦事件的处理方式：「For this reason, the police like to be notified of new graffiti incidents.」（因此，警方希望接到新涂鸦事件的报告）「To aid in achieving a successful prosecution, they encourage owners of properties to take photographs of any new graffiti, as there could be other related incidents occurring locally.」（为了有助于成功起诉，他们鼓励业主拍下任何新涂鸦的照片，因为当地可能还有其他相关事件发生）随后是本题的定位句：「An incidence pattern can help to identify possible culprits, as can their 'tag' - the distinctive mark graffitists leave to show the graffiti is their work.」（事件发生的规律有助于识别可能的作案人，他们的「标记」也同样有助于识别——那是涂鸦者留下的、用以表明作品归属的独特记号）。题干把 the distinctive mark graffitists leave to show the graffiti is their work 概括为 the unique signature of graffitists（涂鸦者独特的签名），把 identify possible culprits 与 a successful prosecution 概括为 assist police in finding and prosecuting them，两个动作的主体和目的都一一对应，空格所问的正是这个标记的名称，也就是破折号前的 tag。注意答案必须用原文的单数形式 tag；同时不要误填 incident pattern（那是「事件规律」，不是涂鸦者的个人标记，且题干已用 signature 限定了含义）。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 25,
          "stem": "Operators of both chemical and mechanical graffiti removal systems must have 25 ________.",
          "translation": "化学与机械两类涂鸦清除系统的操作人员都必须配备 ________。",
          "answer": "protective clothing",
          "wordClass": "名词短语（形容词 protective 作前置定语修饰不可数名词 clothing，作动词 must have 的宾语；clothing 为不可数名词，不加复数、不加冠词，共两个单词）",
          "locating": {
            "paragraph": "4",
            "quote": "When using chemicals, it is important to wear protective clothing, take measures to minimize any run-off of potentially harmful chemicals, and avoid the drifting of aerial mists. Mechanical systems are often in the form of wire-brushing and grit blasting, which attempt to chip off the graffiti media. Operators of mechanical systems must also wear protective clothing to avoid being hurt by hard airborne particles."
          },
          "synonyms": [
            "「Operators of both chemical and mechanical … systems」对应原文的「When using chemicals」(使用化学品时)与「Operators of mechanical systems」（机械系统的操作者），两处合起来正是两类系统的操作者",
            "「must have」同义替换为原文的「it is important to wear」与「must also wear」（必须穿戴／配备）",
            "「protective clothing」在原文中两处原词复现，化学方法要求「wear protective clothing」，机械方法要求「must also wear protective clothing」，also 一词尤其关键，说明两类作业都适用"
          ],
          "locatingTip": "定位：题干的关键词是 chemical（化学的）、mechanical（机械的）与 operators（操作者），这三个词集中在第 4 段。该段把清除方法分为化学与机械两大系统，并分别说明各自的安全要求。确定答案技巧：题干用 both … and … 要求「同时适用于两类系统」的答案，因此不能只看化学或只看机械，必须找那个被重复提及的东西。原文在化学部分说「it is important to wear protective clothing」（重要的是穿防护服），在机械部分又说「Operators of mechanical systems must also wear protective clothing」（机械系统的操作者同样必须穿防护服），两处都是 protective clothing，其中 must also wear 的 also 正对应题干的 both … and …，所以答案是 protective clothing。答案限定为不超过两个单词，protective clothing 恰好两个词，clothing 不可写成 clothes 或复数形式。",
          "analysis": "第 4 段是「清除方法」的核心段落：除水之外，清除涂鸦的方法大体分为化学系统与机械系统（broadly, these are divided into chemical and mechanical systems），使用任一系统都要注意保护路人和实施清除的人（care must be taken with regard to protecting both passers-by and the person carrying out the graffiti removal）。随后分别展开：化学制剂基于溶解涂鸦介质，溶剂从温和到可能危险的化学混合液不等，使用时必须穿防护服（wear protective clothing）、尽量减少有害化学物质的径流、避免气雾飘散；机械系统多为钢丝刷打磨与喷砂，靠削除涂鸦介质，其操作者同样必须穿防护服，以免被坚硬的飞溅颗粒所伤（Operators of mechanical systems must also wear protective clothing to avoid being hurt by hard airborne particles）。题干用 Operators of both chemical and mechanical graffiti removal systems（两类系统的操作人员）把原文分头叙述的两句话合并，用 must have 概括原文的 wear 与 must also wear，空格所问的正是那个两类作业都要求配备的东西，即 protective clothing。作答时的关键是抓住 also 这个词：它把机械部分的要求与前文化学部分的要求并列起来，证明防护服并非只针对机械系统。此外不要误填 protective 之外的词（如 clothing 单独的表述不完整），也不能写成 protective clothes、protection clothing 等变体。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 26,
          "stem": "Surfaces treated with a barrier-coating can normally be cleaned with 26 ________.",
          "translation": "经过屏障涂层处理的表面通常可以用 ________ 来清洁。",
          "answer": "water",
          "wordClass": "名词（不可数，作介词 with 的宾语，指用于清洗涂鸦的水；不加冠词、不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "Although this will not stop graffiti being applied, it will make its removal much easier and usually only involves using water, which reduces the possibility of damage to the site surface."
          },
          "synonyms": [
            "「can normally be cleaned with」同义替换为原文的「usually only involves using water」，即通常只需要用水",
            "「Surfaces treated with a barrier-coating」同义替换为原文的「Another strategy is to apply a removable anti-graffiti barrier-coating」以及本句中的 it，指经过屏障涂层处理的表面",
            "「normally」对应原文的「usually」，两者都表示通常、一般情况下"
          ],
          "locatingTip": "定位：题干的关键词是 barrier-coating（屏障涂层）与 cleaned with（用什么清洁），这两点只出现在第 6 段。该段首句即点明另一种策略是施加可去除的防涂鸦屏障涂层。确定答案技巧：先看涂层能带来什么结果——原文紧接着说明它不能阻止涂鸦被涂上，但会让清除容易得多（make its removal much easier），而且通常只需用水（usually only involves using water），并因此减少对场地表面造成损坏的可能性。题干把「通常只需用水」改写成「通常可以用某物来清洁」，usually 对应 normally，空格处就填 water。答案为一个单词，且 water 在原文中不加冠词、也不用复数，直接写 water。注意本题与第 23 题容易混淆：第 23 题的答案 social history 出自第 1 段，本题的 water 出自第 6 段，做题时务必逐题回到各自段落核对，不要因为两题都涉及「水」或「历史」就串位。",
          "analysis": "第 6 段介绍最后一种策略：施加可去除的防涂鸦屏障涂层作为预防措施（apply a removable anti-graffiti barrier-coating as a form of preventive measure）。作者随即客观说明其效果与限度：「Although this will not stop graffiti being applied, it will make its removal much easier and usually only involves using water, which reduces the possibility of damage to the site surface.」（虽然这不能阻止涂鸦被涂上，但它会使清除容易得多，而且通常只需用水，从而降低损坏场地表面的可能性）接着补充施涂方式与原理：屏障涂层通常用刷子或喷涂施涂，留下一层很薄的薄膜，其作用本质是把涂鸦与表面隔离开（isolate the graffiti from the surface）。文末总结：虽然没有针对每一次涂鸦事件的万能处方（there is no prescription for dealing with every graffiti incident），但仍有一些步骤可以尽量减少涂鸦的影响并保护脆弱的表面。题干把「经过屏障涂层处理的表面通常可以怎样清洁」与原文的 usually only involves using water 对应起来：cleaned with 对应 using，normally 对应 usually，空格即 water。从词性看，with 是介词，其后需要名词或名词性成分，water 在此为不可数名词，不用冠词也不用复数，直接填 water 即可。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
