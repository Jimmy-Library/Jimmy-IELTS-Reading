(function registerReadingExplanationData(global) {
  'use strict';
  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {
    throw new Error("reading_explanation_registry_missing");
  }
  global.__READING_EXPLANATION_DATA__.register("p1-medium-115", {
  "schemaVersion": "ReadingExplanationV2",
  "examId": "p1-medium-115",
  "meta": {
    "examId": "p1-medium-115",
    "title": "Tunnelling under the Thames 泰晤士河隧道",
    "category": "P1",
    "noteType": "逐题解析"
  },
  "passageNotes": [],
  "questionExplanations": [
    {
      "sectionTitle": "Questions 1–8 判断题（TRUE / FALSE / NOT GIVEN）",
      "mode": "per_question",
      "questionRange": {
        "start": 1,
        "end": 8
      },
      "items": [
        {
          "questionId": "q1",
          "questionNumber": 1,
          "stem": "In the early 19th century, the port of London was considered a safer destination than other ports.",
          "translation": "在 19 世纪初，伦敦港被认为是比其他港口更安全的目的地。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "At the beginning of the 19th century, the port of London was the busiest in the world."
          },
          "synonyms": [
            "“In the early 19th century” 同义替换为原文的 “At the beginning of the 19th century”，两者都表示 19 世纪初",
            "“the port of London” 在原文中原词复现，完全对应",
            "“a safer destination than other ports” 在原文中没有任何对应：原文给出的评价词是 “the busiest”（最繁忙的），谈的是繁忙程度，而题干谈的是安全程度，两者不是同一维度",
            "原文并未对伦敦港作任何安全评价——全篇出现的安全类词语只有第 6 段形容黏土的 “safer”（a more solid and safer substance to dig through）和第 7 段的 “a danger”，都与港口无关；原文也没有把伦敦港与其他港口做过任何安全性比较"
          ],
          "locatingTip": "定位：题干的时间状语 In the early 19th century 与专有名词 the port of London 是两把好用的定位钥匙，回到原文扫读第 2 段首句即可一步锁定。确定答案技巧：定位句的表语是 the busiest in the world（世界上最繁忙的），而题干的落点在 a safer destination than other ports（比其他港口更安全的目的地）。busiest 与 safer 属于两个完全不同的评价维度，原文既没有说伦敦港“安全”，也没有拿它与其他港口比“谁更安全”。这类“原文有相近话题、但没有题干那层比较”的情形正是 NOT GIVEN 的典型，绝不能因为“最繁忙”听起来像“条件好”就判 TRUE。",
          "analysis": "原文第 2 段开头写道：“At the beginning of the 19th century, the port of London was the busiest in the world.”（19 世纪初，伦敦港是世界上最繁忙的港口）。这一句只交代了一件事：伦敦港的业务量全球第一。接下来的三句继续说明繁忙带来的后果——货物卸在泰晤士河岸，运往英国南部的货却要先抬上马车、穿过码头再挤过伦敦桥，到 1820 年伦敦桥成了世界上最大的交通堵塞中心。全段围绕“忙”与“堵”展开，从未涉及“安全”这一评价。题干却把 the busiest 换成了 was considered a safer destination than other ports，凭空加入了两层原文没有的信息：一是“被认为安全（considered safer）”，二是“与其他港口相比（than other ports）”。按判断题规则，原文未提及的信息即为 NOT GIVEN——原文既没说伦敦港更安全，也没说它更危险，所以既不能判 TRUE 也不能判 FALSE。做题提醒：本题的陷阱在于 busiest（最繁忙）常被考生脑补为“最好、最安全”，但雅思判断题只认原文写出来的词，最繁忙不等于最安全。",
          "traps": [
            "为什么不是 TRUE：原文只说伦敦港 the busiest（最繁忙），题干说的却是 a safer destination（更安全的目的地）。繁忙程度与安全程度是两个互不相干的维度，原文没有为“更安全”提供任何依据，不能选 TRUE。",
            "为什么不是 FALSE：判 FALSE 需要原文有与题干矛盾的信息，例如原文说“伦敦港比其他港口更危险”或“人们认为伦敦港不安全”。原文对安全性只字未提，仅仅是没有交代，因此属于 NOT GIVEN，而不是 FALSE。"
          ]
        },
        {
          "questionId": "q2",
          "questionNumber": 2,
          "stem": "London Bridge provided quick access for cargo being sent to southern Britain.",
          "translation": "伦敦桥为运往英国南部的货物提供了快捷的通道。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "2",
            "quote": "Consignments intended for the southern parts of Britain had to be lifted onto horse carts, pulled through the docks and across London Bridge, built in the 12th century and as impractical as its early date implies. By 1820, London Bridge had become the centre of the world's largest traffic jam."
          },
          "synonyms": [
            "“cargo” 同义替换为原文的 “Consignments”（托运的货物）",
            "“being sent to southern Britain” 同义替换为原文的 “intended for the southern parts of Britain”",
            "“London Bridge” 在原文中原词复现，属直接定位词",
            "“quick access” 与原文的 “as impractical as its early date implies”（像它初建年代那样不便实用）以及 “the centre of the world's largest traffic jam”（世界上最大交通堵塞的中心）直接冲突",
            "原文的 “had to be lifted onto horse carts”（必须被抬上马车）描写的是一连串繁难的操作，与 quick（快捷）方向相反"
          ],
          "locatingTip": "定位：题干中的大写专有名词 London Bridge 是醒目的定位词（该词在原文第 2 段出现两次），本题的落点也正在第 2 段中间：运往英国南部的货物如何过河这一段。看到 southern parts of Britain 就可以确定是这一处。确定答案技巧：本题的判分点是“快捷”这一评价。原文用了三重反面证据——货物必须（had to）先抬上马车、被拉着穿过码头再跨过伦敦桥；伦敦桥建于 12 世纪、as impractical as its early date implies（不便实用到与它古老年代相称）；到 1820 年它已成为 the centre of the world's largest traffic jam（世界上最大交通堵塞的中心）。三重证据都指向“慢”和“堵”，与题干的 quick access 恰好相反，因此判 FALSE。注意题干只是把“运输方式”换成了同义词，真正被改写的是“速度快慢”这一结论，这正是判 FALSE 的依据。",
          "analysis": "第 2 段讲 19 世纪初伦敦港的货物上岸后所遭遇的运输困境。定位句：“Consignments intended for the southern parts of Britain had to be lifted onto horse carts, pulled through the docks and across London Bridge, built in the 12th century and as impractical as its early date implies.”（运往英国南部的货物必须被抬上马车，拉着穿过码头、跨过伦敦桥，而这座桥建于 12 世纪，其不便实用正如它古老的年代所显示的那样）。紧接一句：“By 1820, London Bridge had become the centre of the world's largest traffic jam.”（到 1820 年，伦敦桥已经成为世界上最大交通堵塞的中心）。题干把 cargo 改写成原文的 Consignments、把 being sent to southern Britain 改写成 intended for the southern parts of Britain，这两处替换都成立；问题出在 quick access 这一结论上：原文用 had to be lifted、pulled through 这一连串被动动作强调过程之繁琐，又用 as impractical 和 the centre of the world's largest traffic jam 直接给出“不便、拥堵”的定性。原文说“堵得全球第一”，题干说“提供了快捷通道”，一正一反构成事实冲突，因此答案是 FALSE。做题提示：看到题干里的评价性形容词（quick、easy、efficient），要立刻回原文找对应的形容词或结果句，本题的 as impractical 与 the largest traffic jam 就是判 FALSE 的铁证。",
          "traps": [
            "为什么不是 TRUE：原文不仅没有说伦敦桥通行快捷，反而用 “as impractical as its early date implies” 明确批评它不便实用，并用 “the centre of the world's largest traffic jam” 说明它是最拥堵的地方；货物还 “had to be lifted onto horse carts”（必须抬上马车）才能通过。这些信息与 quick 完全相反，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文对伦敦桥的通行状况给出了非常具体且明确否定的描述（不实用、全球最大堵点），属于“有明确信息且与题干冲突”，符合 FALSE 的判定条件，而不是信息缺失。"
          ]
        },
        {
          "questionId": "q3",
          "questionNumber": 3,
          "stem": "It was generally believed that a new river crossing would be profitable.",
          "translation": "人们普遍认为，新建一条过河通道会带来利润。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "It was an intolerable situation, and it was clear that if private enterprise could build another crossing closer to the docks, there would be good money to be made in tolls paid by users."
          },
          "synonyms": [
            "“It was generally believed” 同义替换为原文的 “it was clear”，两者都表示这是一个大家公认、显而易见的事实",
            "“a new river crossing” 同义替换为原文的 “another crossing closer to the docks”",
            "“would be profitable” 同义替换为原文的 “there would be good money to be made in tolls paid by users”（可以向使用者收通行费、能赚到不少钱）"
          ],
          "locatingTip": "定位：题干的关键词是 a new river crossing 与 profitable，回到原文找讨论“过河通道能否赚钱”的句子，落在第 3 段首句。确定答案技巧：本题要把两处表达对应起来——原文的 it was clear 表示“（大家）看得很清楚、公认如此”，对应题干的 it was generally believed（人们普遍认为）；原文的 there would be good money to be made in tolls 表示“能靠收通行费赚到大钱”，对应题干的 would be profitable（会有利润）。两处改写方向完全一致、程度相当，属于同义转述，故判 TRUE。做题时不要被从句里的条件词 if 干扰：if private enterprise could build another crossing 只是说明赚钱的前提是“由私人企业来建”，并不否定“能赚钱”这一判断。",
          "analysis": "第 3 段首句：“It was an intolerable situation, and it was clear that if private enterprise could build another crossing closer to the docks, there would be good money to be made in tolls paid by users.”（这是一个令人无法忍受的局面，而且看得很清楚：如果私人企业能在更靠近码头的地方再建一条过河通道，就能靠使用者缴纳的通行费赚到不少钱）。句子分两层：第一层 it was an intolerable situation 交代动机（现状难以忍受）；第二层用 it was clear 引出共识性判断——只要有人建成第二条通道，收通行费就能赚大钱。题干用 It was generally believed 概括 it was clear 所表达的“公认”，用 a new river crossing 概括 another crossing closer to the docks，用 profitable 概括 there would be good money to be made in tolls。三处改写逐一对应，且方向一致，因此答案是 TRUE。做题提示：判断题里凡是出现“人们普遍认为 / 一般认为（it was generally believed, it was widely thought）”这类表述，原文通常会出现 it was clear、it was obvious、everyone knew 之类的对应说法，要善于把“客观显然”与“普遍相信”视作同一层意思。另外要区分本题与第 4 题：第 3 题谈“过河通道能赚钱”（原文肯定），第 4 题谈“再建一座桥是最佳方案”（原文明确否定），两题同一段但落点不同，切勿混用。",
          "traps": [
            "为什么不是 FALSE：原文用 it was clear 明确表示“能靠通行费赚到大钱”是一个显而易见的判断，并给出了具体理由（靠近码头、由私人企业承建）；题干说“人们普遍认为新建过河通道会有利润”，与原文方向一致，没有任何矛盾点，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到过河通道与通行费，还直接给出结论 “there would be good money to be made in tolls paid by users”，等于回答了“是否有利可图”这一问题，信息明确且充分，不属于未提及。"
          ]
        },
        {
          "questionId": "q4",
          "questionNumber": 4,
          "stem": "Building a second bridge crossing was initially considered to be the best solution.",
          "translation": "建造第二座跨河桥梁最初被认为是最好的解决方案。",
          "answer": "FALSE",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Another bridge was out of the question, as this would deny sailing ships access to the city centre, and ambitious men turned their thoughts to tunnelling beneath the Thames instead."
          },
          "synonyms": [
            "“Building a second bridge crossing” 同义替换为原文的 “Another bridge”",
            "“the best solution” 与原文的 “was out of the question”（根本不可能、不予考虑）直接冲突",
            "“instead”（转而）表明人们在排除建桥方案之后才转向隧道，桥属于被否决的选项，而非最佳方案",
            "“as this would deny sailing ships access to the city centre” 给出了否决建桥的理由（再建一座桥会挡住帆船进入市中心的航道）"
          ],
          "locatingTip": "定位：题干的关键词是 a second bridge crossing 与 the best solution，回到原文找关于“再建一座桥”的评价，落在第 3 段第二句 “Another bridge was out of the question”。确定答案技巧：本题的判分点是一个惯用短语 out of the question，意思是“根本不可能、不予考虑”。原文紧接着给出否定的理由（会挡住帆船进入市中心的通道），并说雄心勃勃的人转而（instead）考虑在泰晤士河底挖隧道，可见“再建一座桥”一开始就被排除，绝非“最初被认为是最好的方案”。题干把被否决的方案说成 the best solution，与原文正面对立，故判 FALSE。这里要特别注意 out of the question 与 out of question 的差别，前者是“不可能”，后者是“不成问题”，雅思喜欢考这个短语。",
          "analysis": "第 3 段第二、三句：“Another bridge was out of the question, as this would deny sailing ships access to the city centre, and ambitious men turned their thoughts to tunnelling beneath the Thames instead. This was not such an obvious idea as it might appear.”（再建一座桥是不可能的，因为那会挡掉帆船进入市中心的航路，于是有雄心的人转而考虑在泰晤士河底下挖隧道。这个想法并不像乍看上去那么显而易见）。原文的逻辑链非常清楚：先看桥（因为会阻断水路通航而被否决），再看隧道（成为实际选项）。题干说“建造第二座跨河桥梁最初被认为是最好的解决方案（the best solution）”，而原文用的是 out of the question（根本不予考虑）加 instead（转而）——桥是被排除的出局方案，隧道才是被采纳的方向，两者完全相反，因此答案是 FALSE。做题提示：凡是题干出现 the best / the first choice / the preferred 这类“最优选”表述，都要回原文核对该项到底是被肯定还是被否定；本题原文的 as this would deny sailing ships access to the city centre 就是作者给桥的“否决理由”，认出这条理由就能确定桥不是最佳方案。",
          "traps": [
            "为什么不是 TRUE：原文用 “Another bridge was out of the question” 明确否定了再建桥的可行性，并给出理由（会挡住帆船进入市中心），随后才转向隧道方案。把被否决的方案说成“最好的解决方案”，与原文直接冲突，不能选 TRUE。",
            "为什么不是 NOT GIVEN：原文不仅提到再建桥，还对其可行性作出了明确判断（不可能），并交代了否决原因和替代方案，信息完整且与题干相反，属于 FALSE 而不是信息缺失。"
          ]
        },
        {
          "questionId": "q5",
          "questionNumber": 5,
          "stem": "It was believed that coal could be found under the River Thames.",
          "translation": "人们认为在泰晤士河底下可以找到煤。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "3",
            "quote": "Although increasing demand for coal had meant a great many tunnels had been dug in mines in Britain, working methods remained primitive; tunnels were dug by men with simple tools, by candlelight."
          },
          "synonyms": [
            "“coal” 在原文中原词复现：“increasing demand for coal”",
            "原文谈煤所处的位置是 “in mines in Britain”（英国的矿井里），题干却把煤挪到了 “under the River Thames”，原文没有这一信息",
            "“could be found under the River Thames” 在原文中没有任何对应表述，原文提到泰晤士河底时谈的是挖隧道的想法，不是找煤"
          ],
          "locatingTip": "定位：coal 是全文出现次数极少的实词，扫读时一旦看到 coal 就停下，落在第 3 段最后一句。确定答案技巧：看清原文这句中 coal 出现的位置——increasing demand for coal had meant a great many tunnels had been dug in mines in Britain，说的是“对煤的需求增长导致英国矿井里挖了大量隧道”，煤是英国矿井里的东西，段落提它只是为了说明“挖隧道在英国并不新鲜、但技术在矿井里很原始”。题干却把这个词搬到 River Thames 底下，问“是否有人认为泰晤士河底下有煤”。原文通篇没有出现泰晤士河底有煤的说法，既未肯定也未否定，属于信息缺失，故判 NOT GIVEN。做题提醒：认出一个实词并找到句子，不等于找到了答案；“词在句中但意思不对位”正是 NOT GIVEN 最常见的陷阱。",
          "analysis": "第 3 段最后两句：“This was not such an obvious idea as it might appear. Although increasing demand for coal had meant a great many tunnels had been dug in mines in Britain, working methods remained primitive; tunnels were dug by men with simple tools, by candlelight.”（这个想法并不像乍看上去那么显而易见。尽管对煤日益增长的需求意味着英国矿井里已经挖了很多隧道，但施工方法仍然很原始：隧道是人们用简单的工具、借烛光挖出来的）。这段话的用意有二：一是说明隧道技术在当时并不成熟（primitive、用简单工具、靠烛光），二是用矿井里的隧道作为类比，衬托泰晤士河底隧道的难度。coal 在这里只是说明矿道开挖的动因，地理范围被明确限定为 in mines in Britain（英国矿井）。题干把煤与 River Thames 联系起来，声称“人们认为泰晤士河底下能找到煤”，原文对此没有任何交代——既没说河底有煤，也没说河底没有煤。按判断题规则，信息缺失即 NOT GIVEN。注意本题与第 3、4 题同在第 3 段，但三题的落点各不相同：第 3 题看首句（能否赚钱），第 4 题看第二句（桥是否可行），第 5 题看末句（煤在何处），必须逐题回原文核对，不能凭段落印象连带作答。",
          "traps": [
            "为什么不是 TRUE：原文提到 coal 时限定在英国矿井（in mines in Britain）这一语境下，与泰晤士河底毫无关系；原文从未表示有人认为河底能找到煤，缺少支撑 TRUE 的任何信息。",
            "为什么不是 FALSE：原文也没有说“泰晤士河底下没有煤”或否定过类似说法，只是完全没有涉及这一话题。既无肯定又无否定，只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q6",
          "questionNumber": 6,
          "stem": "The Thames Archway Company was the first group to try tunnelling below the Thames.",
          "translation": "泰晤士拱道公司是第一个尝试在泰晤士河下方挖掘隧道的团体。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Their ambition was to tunnel below the Thames, but there was little to guide them as there had been no previous attempt to do this."
          },
          "synonyms": [
            "“The Thames Archway Company” 在上一句原词复现，指同一家公司，Their 即回指该公司",
            "“the first group to try” 同义替换为原文的 “there had been no previous attempt”，即在他们之前没有任何人尝试过",
            "“tunnelling below the Thames” 同义替换为原文的 “to tunnel below the Thames”"
          ],
          "locatingTip": "定位：先在第 4 段首句找到大写公司名 Thames Archway Company，第二句即本题定位句。确定答案技巧：题干的核心词是 the first group（第一个团体），对应原文的 there had been no previous attempt to do this（此前没有人尝试过这件事）。no previous attempt 等于“他们是最早的一批人”，这是同义转述而非推理；同时原文还补充说 there was little to guide them（几乎没有可参考的先例），也从侧面印证了前人未曾涉足。两处信息方向一致，故判 TRUE。做题提示：the first / the earliest / no previous 这类表述是判断题的高频对应关系，只要原文出现 no previous、never before、for the first time，基本就与题干的最先、首创说法一致。",
          "analysis": "第 4 段开头：“However, in 1807 a group of businessmen set themselves up as the Thames Archway Company. Their ambition was to tunnel below the Thames, but there was little to guide them as there had been no previous attempt to do this.”（然而在 1807 年，一群商人组建了泰晤士拱道公司。他们的目标是打通泰晤士河底的隧道，但几乎没有什么可供参考，因为此前没有人尝试过这件事）。题干说该公司是第一个尝试在泰晤士河下方挖隧道的团体，原文的对应点是 there had been no previous attempt to do this（此前没有过这样的尝试），其中 no previous attempt 与 the first group to try 构成标准的同义转述；Their ambition was to tunnel below the Thames 又与题干后半段完全重合。两条信息叠加，答案确为 TRUE。此外原文用 but there was little to guide them 进一步说明缺乏先例、无从借鉴，也呼应了“首创”这一身份。需要留意的是，同一段后面讲的是该公司工程失败（泥浆涌入、资金耗尽、特里维西克生病），失败的事实不影响“他们是第一个尝试者”这一判断——本题问的是顺序（谁最先），不是成败。",
          "traps": [
            "为什么不是 FALSE：原文明确说 there had been no previous attempt to do this（此前没有过这样的尝试），即该公司确实是第一个尝试者，题干与原文并不矛盾，反而完全一致。工程后来失败并不改变“第一个尝试”的身份。",
            "为什么不是 NOT GIVEN：原文不仅提到该公司要挖泰晤士河底隧道，还直接交代了“此前无人尝试”这一关键信息，正好回答了“是不是第一个”的问题，属于已明确给出，不是未提及。"
          ]
        },
        {
          "questionId": "q7",
          "questionNumber": 7,
          "stem": "Some of Trevithick's men were injured during a mudslide at his tunnel.",
          "translation": "特里维西克的一些工人在他隧道里的塌方（泥浆涌入）中受了伤。",
          "answer": "NOT GIVEN",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "His men made progress at the beginning, but then things began to go disastrously wrong, with muddy soil pouring into the tunnel."
          },
          "synonyms": [
            "“Trevithick's men” 同义替换为原文的 “His men”，其中 His 回指上一句的 Richard Trevithick",
            "“a mudslide” 与原文的 “muddy soil pouring into the tunnel”（泥浆涌入隧道）对应，都指大量湿泥冲进隧道这一事故",
            "“were injured” 在原文中没有任何对应：原文只说事情开始变得灾难性地糟糕（go disastrously wrong），从未提到任何人身体受伤"
          ],
          "locatingTip": "定位：人名 Trevithick 是原文中的大写专有名词（全文仅第 4 段出现两次），回原文扫到即落在第 4 段中间；紧随其后的 His men 就是题干所说的 Trevithick's men。确定答案技巧：题干的落点是 were injured（有人受伤）这一结果，而原文给出的只是一连串事件的描述：一开始有进展，随后事情开始 go disastrously wrong，muddy soil pouring into the tunnel。原文承认了泥浆事故的严重性（disastrously），却没有交代任何伤亡情况——没有 injured、wounded、killed，也没有 any of his men was hurt 之类的说法。事故发生了，但后果是否包括伤亡，原文未说，属于信息缺失，故判 NOT GIVEN。做题提醒：不要用“灾难性地糟糕（disastrously wrong）”自行脑补出“有人受伤”，形容词的严重程度不等于具体事实。",
          "analysis": "第 4 段中间部分写道：“Their chief engineer was Richard Trevithick, designer of the world's first high-pressure steam engine. His men made progress at the beginning, but then things began to go disastrously wrong, with muddy soil pouring into the tunnel.”（他们的总工程师是理查德·特里维西克，世界第一台高压蒸汽机的设计者。他的工人起初取得了进展，但随后事情开始变得灾难性地糟糕，泥浆不断涌入隧道）。题干涉及三件事：主体（Trevithick's men，对应 His men）、事件（a mudslide，对应 muddy soil pouring into the tunnel）、结果（were injured，原文无对应）。前两项都对得上，第三项却落空：原文确实承认发生了严重事故（disastrously wrong、泥浆涌入），但随后转去讲公司的结局——“Eventually, the Thames Archway Company had had enough. Its funds were exhausted, Trevithick was sick from exposure to the river water…”，生病的是特里维西克本人，且原因是 exposure to the river water（接触河水），并非在塌方中受伤；至于他的工人有没有受伤，全文没有任何交代。因此答案只能是 NOT GIVEN，而不是 TRUE。做题提示：本题是“事故真实存在，但伤亡情况未提”的典型考法；只要题干出现 injured、killed、hurt 这类具体后果词，就必须回原文逐字确认，不要被上一句的严重程度形容词带偏。",
          "traps": [
            "为什么不是 TRUE：原文只描述了泥浆涌入隧道和局面变得灾难性地糟糕，从未提到任何工人受伤；后文提到身体不适的是总工程师特里维西克本人（sick from exposure to the river water），且与塌方无关。缺少“受伤”这一事实依据，不能选 TRUE。",
            "为什么不是 FALSE：原文也没有说“没有人受伤”或“工人们安然无恙”，它对伤亡情况完全没有表态，既未肯定也未否定，因此只能判 NOT GIVEN。"
          ]
        },
        {
          "questionId": "q8",
          "questionNumber": 8,
          "stem": "The Thames Archway Company ran out of money to finance the tunnel project.",
          "translation": "泰晤士拱道公司用光了用来资助隧道工程的资金。",
          "answer": "TRUE",
          "wordClass": "",
          "locating": {
            "paragraph": "4",
            "quote": "Eventually, the Thames Archway Company had had enough. Its funds were exhausted, Trevithick was sick from exposure to the river water, and its efforts had proved only that a passage under the river exceeded the limits of contemporary mining technology."
          },
          "synonyms": [
            "“ran out of money” 同义替换为原文的 “Its funds were exhausted”（其资金被耗尽）",
            "“The Thames Archway Company” 在原文中原词复现",
            "“to finance the tunnel project” 对应原文的 “Its funds”，即用来支撑这项隧道工程的资金"
          ],
          "locatingTip": "定位：本题与第 6、7 题同在第 4 段，顺着段落往下读，找到讲公司结局的那一句：Eventually, the Thames Archway Company had had enough. Its funds were exhausted。确定答案技巧：题干的 ran out of money 是一个动作性短语，意思是“钱花光了”，原文用被动语态 Its funds were exhausted 表达同一意思（资金被耗尽），两者是同义转述，只是语态不同（主动与被动）。同句中 had had enough（受够了、不再继续）与 Trevithick was sick 并列说明项目终止的多重原因，其中“资金耗尽”正是题干所问的财政原因，可直接判 TRUE。做题提示：填空题和判断题都常见“主动语态改被动语态”的替换方式，看到 ran out of 与 were exhausted 这类不同语态的同义表达要敢于对应。",
          "analysis": "第 4 段后半段：“Eventually, the Thames Archway Company had had enough. Its funds were exhausted, Trevithick was sick from exposure to the river water, and its efforts had proved only that a passage under the river exceeded the limits of contemporary mining technology.”（最终，泰晤士拱道公司受够了。它的资金已经耗尽，特里维西克因接触河水而生病，而它所付出的一切只证明了：在当时采矿技术的极限之外，河底通道是无法建成的）。句子用逗号并列了三项“公司放弃”的依据：资金耗尽（Its funds were exhausted）、总工程师生病（Trevithick was sick）、技术不可行（exceeded the limits of contemporary mining technology）。题干只取第一项，用 ran out of money to finance the tunnel project 复述 Its funds were exhausted，属于标准的主动与被动同义转换，方向一致，因此答案是 TRUE。做题提示：本题与第 7 题紧挨在同一段，一题 NOT GIVEN、一题 TRUE，很容易串味。区分方法很简单：第 7 题问的是“工人是否受伤”（原文没写）；第 8 题问的是“公司是否没钱了”（原文写了 funds were exhausted）。判断题必须一题一句地回到原文找依据，不能因为相邻题的印象就顺势作答。",
          "traps": [
            "为什么不是 FALSE：原文明确写出 “Its funds were exhausted”，即资金被耗尽，与题干的 ran out of money 意思完全一致，不存在任何矛盾，不能选 FALSE。",
            "为什么不是 NOT GIVEN：原文不仅提到资金，还直接用 were exhausted 作出“已耗尽”的判断，正是对题干所问财政状况的正面回答，信息明确，不属于未提及。"
          ]
        }
      ]
    },
    {
      "sectionTitle": "Questions 9–13 笔记填空（ONE WORD ONLY）",
      "mode": "per_question",
      "questionRange": {
        "start": 9,
        "end": 13
      },
      "items": [
        {
          "questionId": "q9",
          "questionNumber": 9,
          "stem": "Brunel noticed how a kind of 9 ________ made its tunnels in wood.",
          "translation": "布鲁内尔注意到一种 ________ 是如何在木头中挖掘隧道的。",
          "answer": "worm",
          "wordClass": "名词（单数，指虫）；空格前为 a kind of，空格作介词 of 的宾语，与 a kind of 一起充当 made 的主语；原文作复数 worms，答案表按 ONE WORD ONLY 给出单数形式 worm，作答照抄答案表，只写一个词，不加冠词、不加复数",
          "locating": {
            "paragraph": "5",
            "quote": "Examining the wood through a magnifying glass, he observed it was infested with creatures that looked like worms. Brunel realised that, as they tunnelled through the wood, they pushed chewed fibres into their mouths"
          },
          "synonyms": [
            "“a kind of worm” 对应原文的 “creatures that looked like worms”（看起来像蠕虫的生物）",
            "“made its tunnels in wood” 同义替换为原文的 “they tunnelled through the wood”（它们从木头中掘洞穿过）",
            "“noticed” 同义替换为原文的 “observed” 与紧跟其后的 “realised”（观察并意识到）",
            "“Brunel” 在原文中原词复现，是稳定的定位词"
          ],
          "locatingTip": "定位：笔记小标题 Marc Brunel's tunnel 与 Preparing to build the tunnel 提示这一空落在讲“准备阶段”，回到原文找布鲁内尔观察木头的段落，即第 5 段后半部分；Brunel 这一人名原词复现，非常好定位。确定答案技巧：笔记句说的是“布鲁内尔注意到某种生物是怎样在木头中挖隧道的”，原文对应句是 he observed it was infested with creatures that looked like worms 以及随后 Brunel realised that, as they tunnelled through the wood…。可见这种生物就是 worms（蠕虫），“在木头中挖隧道”对应 tunnelled through the wood，动作与对象完全吻合，因此空格填 worm。注意空格前的 a kind of 要求填可数名词单数，答案表给出的也是单数 worm（原文用复数 worms），填写时以答案表为准，只写一个词。",
          "analysis": "原文第 5 段先讲当时的处境：矿井里只有抽水机（the only machines used in mines were pumps），需要一个能防止隧道顶壁坍塌的新机器，而这个人就是已成为英国最杰出工程师之一的法国人 Marc Brunel。接着写他的灵感来源：“Not long after the failure of the Thames Archway Company, Brunel saw a rotten piece of wood lying on the river bank. Examining the wood through a magnifying glass, he observed it was infested with creatures that looked like worms. Brunel realised that, as they tunnelled through the wood, they pushed chewed fibres into their mouths, digested them, then excreted a hard substance that lined the new tunnel.”（泰晤士拱道公司失败后不久，布鲁内尔在河岸上看到一块朽木。他用放大镜观察这块木头，发现里面爬满了形似蠕虫的生物。布鲁内尔意识到，它们在木头中开掘通道时，会把咀嚼过的纤维塞进嘴里，消化后排出一种坚硬物质，为新建的通道做内衬）。笔记句“Brunel noticed how a kind of 9 made its tunnels in wood”正是对这一段的压缩：noticed 概括 observed 与 realised，a kind of worm 概括 creatures that looked like worms，made its tunnels in wood 概括 tunnelled through the wood。空格位置在 a kind of 之后，需填名词，答案是 worm。词数限制（ONE WORD ONLY）决定了不能填两个词，也不能加冠词；答案表给出单数形式 worm，照抄即可，不必改成原文的复数 worms。",
          "traps": []
        },
        {
          "questionId": "q10",
          "questionNumber": 10,
          "stem": "Brunel planned to build a shallow tunnel so the earth would have a higher content of 10 ________.",
          "translation": "布鲁内尔计划建一条浅层隧道，这样土壤中 ________ 的含量会更高。",
          "answer": "clay",
          "wordClass": "名词（不可数，指一种土壤成分；位于介词 of 之后作宾语，保持不可数形式 clay，不加冠词、不变复数）",
          "locating": {
            "paragraph": "6",
            "quote": "Brunel's team carefully examined earth samples taken from beneath the riverbed and decided to dig the tunnel close to the muddy river bottom, where they expected to find clay—a more solid and safer substance to dig through than the sand found deeper down."
          },
          "synonyms": [
            "“planned to build a shallow tunnel” 同义替换为原文的 “decided to dig the tunnel close to the muddy river bottom”（决定贴近泥泞的河底挖掘，即浅层而非深层）",
            "“the earth would have a higher content of clay” 对应原文的 “where they expected to find clay”（预期在那里找到黏土）",
            "“a higher content” 对应原文的 “a more solid and safer substance to dig through than the sand found deeper down”，即浅处的黏土比例高于深层的沙",
            "“Brunel's team” 与笔记标题中的 Brunel 对应，是稳定定位词"
          ],
          "locatingTip": "定位：本题仍在讲准备阶段（Preparing to build the tunnel），关键词是 shallow tunnel 与 earth，回到原文第 6 段末句找与“挖哪里、土质如何”有关的句子，即 Brunel's team carefully examined earth samples…decided to dig the tunnel close to the muddy river bottom。确定答案技巧：题干的 shallow（浅的）对应原文的 close to the muddy river bottom（贴近泥泞的河底），是同一空间概念；题干的 the earth would have a higher content of [10] 对应原文的 where they expected to find clay。原文接下来的同位语 a more solid and safer substance to dig through than the sand found deeper down 进一步解释了为什么选这一层——因为这里黏土多于深层的沙，正好印证题干所说的“含量更高”。因此空格填 clay。作答时按 ONE WORD ONLY 只写名词 clay。",
          "analysis": "第 6 段末句：“Brunel's team carefully examined earth samples taken from beneath the riverbed and decided to dig the tunnel close to the muddy river bottom, where they expected to find clay—a more solid and safer substance to dig through than the sand found deeper down.”（布鲁内尔的团队仔细检查了从河床下取出的土样，决定把隧道挖在贴近泥泞河底的位置，他们预期在那里能找到黏土——一种比更深处所见的沙更坚实、更安全的可开挖物质）。这句话包含两层信息：一是选址（close to the muddy river bottom，即浅层），二是选此处的理由（expected to find clay，且黏土比深层之沙更适合开挖）。笔记句“Brunel planned to build a shallow tunnel so the earth would have a higher content of [10]”把这两层压缩成一句因果：因为浅层土中黏土比例更高，所以选择浅挖。空格前的 of 是介词，需要名词或名词性成分，答案是材料名词 clay，属不可数名词，填原形即可。注意不要把 a more solid and safer substance 整句当作答案，那是用来解释 clay 性质的定语，不是被问的对象；同时要区分 clay（黏土，浅层）与 sand（沙，深层），题干问的是“含量更高”的那一种，即 clay。",
          "traps": []
        },
        {
          "questionId": "q11",
          "questionNumber": 11,
          "stem": "The miners suffered from 11 ________ because of pollution in the tunnels.",
          "translation": "由于隧道内的污染，矿工们患有 ________。",
          "answer": "headaches",
          "wordClass": "名词（复数；作介词 from 的宾语，与动词短语 suffer from 搭配，原文用复数 headaches，保持复数形式）",
          "locating": {
            "paragraph": "7",
            "quote": "They also complained of frequent headaches, caused by poor air quality. The air underground was dirty and stale, contaminated because of the lack of an adequate ventilation system."
          },
          "synonyms": [
            "“suffered from” 同义替换为原文的 “complained of”（抱怨患有某种不适）",
            "“pollution in the tunnels” 同义替换为原文的 “poor air quality” 以及 “dirty and stale, contaminated”（空气污浊、变质、受污染）",
            "“frequent” 在原文中原词复现：“complained of frequent headaches”",
            "“miners” 与原文的 “the miners” 对应，是稳定的定位词"
          ],
          "locatingTip": "定位：笔记进入 Problems faced by miners 部分，关键词是 miners、pollution 与身体不适，回到原文第 7 段找与空气质量和健康有关的句子，即 They also complained of frequent headaches, caused by poor air quality。确定答案技巧：题干用 suffered from [11] because of pollution 表示“因污染而患某病”，原文对应处是 complained of frequent headaches, caused by poor air quality，其中 caused by 与题干的 because of 对应，poor air quality 就是题干所说的 pollution（后一句还补充说空气 dirty and stale, contaminated）。被抱怨的对象 frequent headaches 便是答案 headaches。注意原文用复数形式，且这属于可数名词的泛指用法，必须写复数 headaches；也不能填 air quality 或 pollution，因为空格前的 from 需要的是“患病症状”而非“致病原因”。",
          "analysis": "第 7 段先讲水患（抽水机不可靠、隧道被淹、矿工弃工具逃命），随后转入其他困难：“They also complained of frequent headaches, caused by poor air quality. The air underground was dirty and stale, contaminated because of the lack of an adequate ventilation system.”（他们还抱怨经常头痛，这是由糟糕的空气质量引起的。地下的空气又脏又陈旧，因缺乏足够的通风系统而受到污染）。笔记句“The miners suffered from [11] because of pollution in the tunnels”与原文两处对应：suffered from 对应 complained of（都是“身体上有不适”的表达，只是原文语气更委婉），because of pollution 对应 caused by poor air quality 以及后一句的 dirty and stale, contaminated，被抱怨的症状 frequent headaches 就是答案。词形上要注意两点：一是必须写复数 headaches（原文用复数，与 frequent 搭配表示反复发作），二是不能因为原文有 poor air quality 就填 air，空格的语义角色是“患了什么（症状）”，不是“因为什么（原因）”。本题与第 12 题同在第 7 段，一题问健康影响（headaches）、一题问照明事故的后果（accidents），要分别对位。",
          "traps": []
        },
        {
          "questionId": "q12",
          "questionNumber": 12,
          "stem": "Lighting problems led to several 12 ________.",
          "translation": "照明问题导致了好几起 ________。",
          "answer": "accidents",
          "wordClass": "名词（复数，指事故）；空格受前面 several 修饰，必须用复数形式 accidents，并作介词 to 的宾语（led to several accidents）",
          "locating": {
            "paragraph": "7",
            "quote": "Illuminating the tunnels by candlelight was a constant challenge: lamps gave off only a very weak glow, and there were a number of accidents because the miners could not see what they were doing."
          },
          "synonyms": [
            "“Lighting problems” 同义替换为原文的 “Illuminating the tunnels by candlelight was a constant challenge” 以及 “lamps gave off only a very weak glow”",
            "“led to” 同义替换为原文的 “there were … because …”，原文用原因从句表达同一因果关系",
            "“several” 同义替换为原文的 “a number of”（若干、好几起）",
            "“the miners could not see what they were doing” 解释了事故成因，即照明不足"
          ],
          "locatingTip": "定位：笔记 Problems faced by miners 部分紧接着的一条就是照明问题，原文用 There were lighting problems too 引出，落点在第 7 段后半 “Illuminating the tunnels by candlelight was a constant challenge”。确定答案技巧：题干的句型是“照明问题导致了好几起 [12]”，原文对应句是 there were a number of accidents because the miners could not see what they were doing，其中 a number of 与题干的 several 对应（都表示“若干、不止一起”），because 与 led to 对应（因果关系）。被“导致”出来的对象是 accidents（事故），所以答案填复数 accidents。词形提示：several 只能修饰复数可数名词，空格必须是复数形式，写 accident 会因语法不符而失分。",
          "analysis": "第 7 段在讲完空气问题后写道：“There were lighting problems too. Illuminating the tunnels by candlelight was a constant challenge: lamps gave off only a very weak glow, and there were a number of accidents because the miners could not see what they were doing.”（照明问题也同样存在。靠烛光照亮隧道始终是一大难题：灯只发出极其微弱的光，而且因为矿工看不清自己正在做什么，发生了若干起事故）。笔记句“Lighting problems led to several [12]”把这段话压缩成一句因果：Lighting problems 概括 Illuminating the tunnels by candlelight was a constant challenge 与 lamps gave off only a very weak glow；led to several 概括 a number of … because 所表达的因果关系；被引发的后果 a number of accidents 就是答案 accidents。词形上必须用复数，一是因为原文本身用复数 accidents，二是因为空格前的 several 只能接复数可数名词。另外不要误填 glow 或 candles，那些是照明问题的表现（原因侧），空格要的是这些问题造成的后果（结果侧）。",
          "traps": []
        },
        {
          "questionId": "q13",
          "questionNumber": 13,
          "stem": "Brunel did not have enough money to repay his debt to the 13 ________.",
          "translation": "布鲁内尔没有足够的钱偿还他欠 ________ 的债务。",
          "answer": "government",
          "wordClass": "名词（单数，指政府机构）；空格位于介词 to 之后作其宾语，前面有定冠词 the，保持单数形式 government，不加复数、首字母小写即可",
          "locating": {
            "paragraph": "8",
            "quote": "Brunel had gone bankrupt long before the project was completed, and the government loan he had required to finish the work had to be paid back with interest."
          },
          "synonyms": [
            "“repay his debt to” 同义替换为原文的 “had to be paid back with interest”（须偿还，且要付利息）",
            "“did not have enough money” 同义替换为原文的 “had gone bankrupt”（已经破产），破产即无力偿债",
            "“the government” 在原文中作 loan 的前置定语：“the government loan”，即他借自政府的那笔贷款",
            "“the project was completed” 与笔记中 The tunnel was finally completed in 1841 对应，可用来确认段落"
          ],
          "locatingTip": "定位：笔记最后一部分 After the tunnel was finished 提到 Brunel did not have enough money 与 repay his debt，回到原文找讲完工后财务状况的段落，即第 8 段；关键词 bankrupt 与 loan 都在这一句。确定答案技巧：题干问“欠谁的钱”，原文的说法是 the government loan he had required to finish the work had to be paid back with interest，其中 the government 是修饰 loan 的定语，说明这笔贷款来自政府；had to be paid back 与题干的 repay 对应，had gone bankrupt 与题干的 did not have enough money 对应。因此空格（the 之后、表债权方）填 government。注意介词 to 与定冠词 the 已经给出，只需填一个名词，且保持小写 government。",
          "analysis": "第 8 段讲隧道完工后的困局：“Despite all these setbacks, the tunnel finally emerged on the opposite river bank on 12 August 1841. Brunel's triumph, however, was only partial. … Brunel had gone bankrupt long before the project was completed, and the government loan he had required to finish the work had to be paid back with interest.”（尽管遭遇了所有这些挫折，隧道终于在 1841 年 8 月 12 日从对岸穿出。然而布鲁内尔的胜利只是部分意义上的。……早在工程完工之前布鲁内尔就已破产，而他为完成工程所借的那笔政府贷款还须连本带息偿还）。笔记句“Brunel did not have enough money to repay his debt to the [13]”对应其中两处：did not have enough money 对应 had gone bankrupt（破产、无力偿债）；repay his debt to 对应 had to be paid back with interest（必须偿还并支付利息）。空格处问的是债权方，原文用 government 修饰 loan（the government loan），说明债主是政府，故答案是 government。词性为普通可数名词，此处特指该国政府，用定冠词 the，保持小写即可。另外要注意区分第 8 段中另一个易混信息——the thousands of visitors who flocked to see the marvel 与 the small payment per person，那是参观者带来的微不足道的门票收入，与本题所问的债权方无关。",
          "traps": []
        }
      ]
    }
  ]
});
})(typeof window !== "undefined" ? window : globalThis);
