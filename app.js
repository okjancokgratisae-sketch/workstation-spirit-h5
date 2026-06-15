const TYPES = {
  T1: { id: 1, name: "规则校准员", short: "你不是爱挑刺，你是在替世界止血。", wings: ["T9", "T2"] },
  T2: { id: 2, name: "人间补位官", short: "你不是天生会照顾人，你是太会听见求救声。", wings: ["T1", "T3"] },
  T3: { id: 3, name: "KPI 永动机", short: "你不是只爱赢，你是怕自己没有战绩就会消失。", wings: ["T2", "T4"] },
  T4: { id: 4, name: "灵魂美化师", short: "你不是矫情，你是受不了人生被做成默认模板。", wings: ["T3", "T5"] },
  T5: { id: 5, name: "冷静拆解器", short: "你不是冷漠，你是在给精神世界上锁。", wings: ["T4", "T6"] },
  T6: { id: 6, name: "风险雷达站", short: "你不是想太多，你是提前听见系统报错。", wings: ["T5", "T7"] },
  T7: { id: 7, name: "快乐改造师", short: "你不是不认真，你是拒绝被无聊封印。", wings: ["T6", "T8"] },
  T8: { id: 8, name: "现场拍板王", short: "你不是强势，你是讨厌世界没人负责。", wings: ["T7", "T9"] },
  T9: { id: 9, name: "办公室降噪器", short: "你不是没脾气，你是太会把爆炸静音。", wings: ["T8", "T1"] }
};

const RESULTS = {
  T1: {
    mode: "公司一抽象，你体内的“内部审判庭”会立刻开庭。别人还在适应混乱，你已经开始找定义、边界、责任、标准和错别字。你真正受不了的不是忙，而是所有人明明看见问题，却一起装成没看见。",
    guard: "你守护的是“正确感”。对你来说，错误不是一个小瑕疵，而像空气里的污染物。如果不立刻清理，它会扩散到所有人身上。",
    truth: "你最不想承认的是：你有时不是在追求完美，而是在害怕“我也不够好”这件事被坐实。所以你先把世界修好，仿佛这样就能证明自己没有失控。",
    power: "你能把一团浆糊校准成流程，把模糊话术逼回人类语言。你是团队里的质量刹车，不一定讨喜，但经常救命。",
    friction: "你最累的地方是：你以为自己在修事情，别人却觉得你在审判人。你嘴上说“我只是提个建议”，但灵魂已经拿着红笔站上法庭。",
    turn: "你的反转按钮是：把标准从“审判”变成“导航”。你不需要降低要求，只需要让别人感觉你是在带路，不是在判刑。",
    best: "人间补位官。TA 能帮你给标准包一层人味，让别人更愿意接住你的正确。",
    fear: "快乐改造师。TA 的“先玩起来”会让你觉得规则地基正在塌方。",
    share: "我是「规则校准员」。公司可以疯，但请按流程疯。"
  },
  T2: {
    mode: "公司一抽象，你会自动扫描“谁需要我”。谁没回消息、谁表情不对、谁快撑不住、哪个坑没人填，你都能听见。你不是在上班，你像一个被系统强制绑定的团队充电宝。",
    guard: "你守护的是“被需要感”。别人需要你的那一刻，你会觉得自己被放回了世界中央；没人需要你时，你反而会怀疑自己是不是多余。",
    truth: "你最不想承认的是：你的付出里有时藏着一句很小声的“请看见我”。你不是单纯爱帮忙，你是在用照顾别人，换一种不必开口的被爱。",
    power: "你能在别人开口前补位，在场面冷掉前递台阶，在项目断气前续一口。很多事情没崩，是因为你悄悄垫了一下。",
    friction: "你最危险的内耗是：一边说“没事我来”，一边希望有人看见你其实也快没电了。你很会照顾别人，但常常把自己的需求折叠到最小。",
    turn: "你的反转按钮是：先问自己“我是真的想帮，还是怕不帮就不被喜欢”。当你敢说出需要，你的温柔才不再透支。",
    best: "规则校准员。TA 能帮你划边界，不让“帮一下”变成“以后都你来”。",
    fear: "现场拍板王。TA 太直接时，你会觉得自己的感受被当成空气略过。",
    share: "我是「人间补位官」。哪里没人管，哪里就会刷新一个快没电的我。"
  },
  T3: {
    mode: "公司一抽象，你会把混乱压缩成目标、动作、节点和结果。别人还在理解世界观，你已经在心里生成战报封面。你不是单纯爱卷，你是受不了一整局打完没有结算画面。",
    guard: "你守护的是“价值感”。成果像你的身份证，战绩像你的存在证明。只要没有被看见、被认可、被结算，你就会觉得自己在空转。",
    truth: "你最不想承认的是：你很怕那个没有成绩、没有标签、没有人鼓掌的自己。你不是不会停，你是怕一停下来，就不知道自己还值不值得被爱。",
    power: "你有强推进力，能把散掉的人和事重新拽回主线。只要你进入战斗模式，项目就会突然长出进度条。",
    friction: "你最隐秘的疲惫是：你经常把“事情没成”翻译成“我不够好”。你看起来很能扛，其实很怕自己失去掌声、战绩和可见度。",
    turn: "你的反转按钮是：允许自己在没有战绩的时候也存在。真正稳定的价值感，不该只在漂亮数据出现时才上线。",
    best: "风险雷达站。TA 能帮你在冲刺时看见暗坑，不让胜利画面变成翻车实录。",
    fear: "办公室降噪器。TA 的慢和缓，会让你感觉主线任务正在掉帧。",
    share: "我是「KPI 永动机」。不是我想赢，是没有战绩的人生太像加载失败。"
  },
  T4: {
    mode: "公司一抽象，你最怕的不是加班，而是所有东西变成复制粘贴、默认模板、没有灵魂的灰色方块。你会本能地寻找情绪、质感、记忆点和“只有我能看见的那一下”。",
    guard: "你守护的是“独特感”。你害怕自己被做成普通零件，更害怕认真表达后没人懂。对你来说，不被理解有时比失败更痛。",
    truth: "你最不想承认的是：你一边渴望被懂，一边又害怕真的被看穿。于是你把痛感打磨成品味，把孤独包装成风格，像是在说“我不需要你们”，其实心里很想有人走近。",
    power: "你能把无聊内容做出气味，把普通方案做出记忆点。你对氛围和表达的敏感，是很多人学不会的雷达。",
    friction: "你最容易被一句“差不多就行”刺伤。你不一定要所有人夸你，但你希望有人看见：这里面有你认真放进去的灵魂。",
    turn: "你的反转按钮是：相信平凡不是消失。真正的独特不需要每秒证明自己特别，它也可以安静、稳定、落在生活里。",
    best: "KPI 永动机。TA 能帮你的灵感落到结果里，让美不只停在感觉上。",
    fear: "规则校准员。TA 的标准化会让你觉得灵魂被压成表格。",
    share: "我是「灵魂美化师」。普通可以，没灵魂不行；交付可以，变成模板不行。"
  },
  T5: {
    mode: "公司一抽象，你不会立刻冲进去。你会先后退半步，把人声关小，把信息拆开，把混乱导入脑内模型。别人以为你沉默，其实你在给世界重新编译。",
    guard: "你守护的是“边界感”。你的时间、注意力、脑子和私人空间不能被随便闯入。你需要一个没人追问、没人消耗、没人突然贴近的安全舱。",
    truth: "你最不想承认的是：你有时不是不需要人，而是太怕别人一靠近就开始索取。于是你把知识修成墙，把理性变成门锁，躲在“我先想想”后面保持完整。",
    power: "你能把情绪堆成的问题拆回结构，把巨大噪音过滤成关键变量。越混乱，你越能看见真正的问题骨架。",
    friction: "你最怕被人连续调用。别人一句“你怎么看”，可能已经把你从精神洞穴里强行拖出来。你不是不关心，你只是需要先确认自己还有能量。",
    turn: "你的反转按钮是：把分享当成连接，而不是损耗。不是所有人靠近你，都是来抢走你的空间。",
    best: "现场拍板王。TA 能帮你把分析变成行动，不让模型永远停在脑内。",
    fear: "人间补位官。TA 的情绪雷达太密集，会让你感觉边界被温柔入侵。",
    share: "我是「冷静拆解器」。我不是冷，我是在给精神世界上锁。"
  },
  T6: {
    mode: "公司一抽象，你的风险雷达会自动开机。别人看到机会，你同时看到预算、人手、口径、背锅路径、老板变卦和系统崩溃的 17 种可能。你不是悲观，你是脑内预案太勤快。",
    guard: "你守护的是“安全感”。你需要知道坑在哪里、谁可信、出了事怎么退、有没有备用路线。确定性对你来说不是奢侈品，是氧气瓶。",
    truth: "你最不想承认的是：你不是不信别人，你是太怕自己信错人。你一边渴望靠近可靠的人，一边又把每个人都放进压力测试里跑一遍。",
    power: "你能提前发现团队兴奋时忽略的暗坑。你是副本里的预警插件，常常在大家开香槟前提醒地板其实在裂。",
    friction: "你最累的是：你一边希望自己别想太多，一边又觉得不想清楚会出事。你不是不敢行动，你只是需要一个可以相信的支点。",
    turn: "你的反转按钮是：把预案做成行动，而不是把行动困在预案里。真正的安全感，不是没有风险，而是你知道自己能处理风险。",
    best: "KPI 永动机。TA 能帮你把风险判断变成推进动作，而不是一直停在预演里。",
    fear: "快乐改造师。TA 的“先试试”会让你的雷达响到冒烟。",
    share: "我是「风险雷达站」。不是我扫兴，是你们真的把副本玩得太裸奔。"
  },
  T7: {
    mode: "公司一抽象，你会本能地寻找出口、新玩法、支线任务和一点点快乐。别人说“这事很麻烦”，你脑内已经开始把它改造成活动、梗、玩法、彩蛋或逃生通道。",
    guard: "你守护的是“自由感”。你怕被困住、被规定死、被无聊钉在一个没有选择的格子里。没有出口的场景，会让你像被关进低电量模式。",
    truth: "你最不想承认的是：你不是永远快乐，你只是太擅长把痛苦切到后台。你开玩笑、找新鲜、换玩法，有时不是因为轻松，而是因为你不想被沉重抓住。",
    power: "你能把沉闷局面重新点亮，把死气沉沉的任务变成能启动的东西。你是团队里的新鲜氧气，虽然有时氧气带点烟花味。",
    friction: "你最容易在新鲜感消失后撤退。你不是没能力坚持，而是痛苦和重复一靠近，你就想打开下一扇门。",
    turn: "你的反转按钮是：在有限里继续创造，而不是一痛就换地图。真正的自由不是一直逃走，是你留下来也不会被困住。",
    best: "规则校准员。TA 能帮你的点子落地，不让烟花炸完只剩烟。",
    fear: "风险雷达站。TA 的每一个“但是”，都像在你的快乐上安装刹车片。",
    share: "我是「快乐改造师」。只要还能整活，这班就没有彻底输。"
  },
  T8: {
    mode: "公司一抽象，你最受不了大家绕圈、甩锅、试探、假装客气。你会直接把话放到桌面上：谁负责、怎么干、什么时候交。没人拍板时，你会忍不住把方向盘抢过来。",
    guard: "你守护的是“主权感”。你怕被操控、被糊弄、被迫接受一个软弱又不公平的局面。失控对你来说不是状态，是挑衅。",
    truth: "你最不想承认的是：你强硬的外壳下面，其实很怕自己变得无力。你宁愿先表现得不好惹，也不想让别人发现你也会受伤、会委屈、会需要保护。",
    power: "你能在混乱现场定方向、扛压力、保护弱者、结束无效讨论。你的存在会让团队从“还在聊”进入“马上干”。",
    friction: "你最容易把脆弱藏成强硬。你以为自己只是直接，别人可能已经感觉被你的气场按在墙上。你不是没有柔软，只是不喜欢让它暴露在战场上。",
    turn: "你的反转按钮是：把力量从控制别人，转成托住别人。真正的强不是没人敢反对你，而是别人靠近你也不会害怕。",
    best: "办公室降噪器。TA 能帮你降低冲突烈度，让你的力量不只压场，也能服众。",
    fear: "冷静拆解器。TA 的长时间分析会让你感觉行动权正在被拖走。",
    share: "我是「现场拍板王」。别绕，别演，谁负责，什么时候交。"
  },
  T9: {
    mode: "公司一抽象，你最先听见的不是任务，而是气氛的裂缝。谁开始硬了，谁快委屈了，谁要爆了，你都能感觉到。你会本能地降噪、缓冲、打圆场，让事情别失控到无法收拾。",
    guard: "你守护的是“和平感”。你害怕冲突升级、关系断裂，也害怕自己被迫站到某一边。对你来说，撕裂感比加班还消耗。",
    truth: "你最不想承认的是：你不是没有立场，你只是太会把自己的声音调小。你把愤怒静音，把需求延后，把“我也不舒服”压成一句“都行”。",
    power: "你能让紧绷场面慢慢松下来，让对立的人重新听见彼此。你是团队里的静音结界，很多爆炸被你提前调成了小雨。",
    friction: "你最常牺牲的是自己的立场。你以为“先放着”是在维持和谐，但有些不说出口的东西，会在心里变成慢性噪音。",
    turn: "你的反转按钮是：把和平从“忍住自己”变成“带着自己一起在场”。真正的和谐不是没人有意见，而是你的意见也有位置。",
    best: "现场拍板王。TA 能帮你把拖住的事往前推，不让和平变成停滞。",
    fear: "规则校准员。TA 的直接纠错会让你感觉空气又要紧起来。",
    share: "我是「办公室降噪器」。我的上班愿望很朴素：今天大家别在我面前爆炸。"
  }
};

const Q = window.QUESTIONS;
const SHARE_CONFIG = window.H5_SHARE_CONFIG || {};
const ASSET_BASE = SHARE_CONFIG.assetBase || "../assets";
const ASSET_VERSION = "20260615-human-v1";

const state = {
  screen: "home",
  gender: "",
  current: 0,
  answers: Array.from({ length: Q.length }, () => [])
};

const app = document.querySelector("#app");

const ASSET_SLUGS = {
  T1: "01_rules",
  T2: "02_support",
  T3: "03_kpi",
  T4: "04_soul",
  T5: "05_logic",
  T6: "06_risk",
  T7: "07_fun",
  T8: "08_decider",
  T9: "09_noise"
};

function q(kind, title, options) {
  return { kind, title, max: 1, options };
}

function o(label, text, scores) {
  return { label, text, scores };
}

function assetName(typeKey) {
  return ASSET_SLUGS[typeKey];
}

function shareCardPath(gender, typeKey) {
  const name = assetName(typeKey);
  return `${ASSET_BASE}/share_cards/${gender}/${name}_${gender}_share_card.png?v=${ASSET_VERSION}`;
}

function characterPath(gender, typeKey) {
  return `${ASSET_BASE}/characters/${gender}/${assetName(typeKey)}.png?v=${ASSET_VERSION}`;
}

function characterPreviewPath(gender, typeKey) {
  return `${ASSET_BASE}/characters/${gender}/${assetName(typeKey)}_preview.png?v=${ASSET_VERSION}`;
}

function preloadImage(src) {
  const img = new Image();
  img.src = src;
}

function preloadGenderPreviews() {
  preloadImage(characterPreviewPath("male", "T3"));
  preloadImage(characterPreviewPath("female", "T3"));
}

function render() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (state.screen === "home") renderHome();
  if (state.screen === "gender") renderGender();
  if (state.screen === "quiz") renderQuiz();
  if (state.screen === "result") renderResult();
}

function renderHome() {
  app.className = "app-shell";
  app.innerHTML = `
    <section class="hero">
      <div class="panel">
        <p class="eyebrow">正式版工位精神体测试</p>
        <h1>测测你的工位精神体：公司越疯，你越像谁？</h1>
        <p class="lead">公司副本一开，精神值就开始漏电。有人原地召唤规则圣剑，有人被迫奶全队，有人把空气推进成 KPI，也有人只想在工位废墟里安静存活。</p>
        <p class="hint">共 20 题，预计 3-5 分钟。请按第一反应选择，不要选“我觉得自己应该这样”。</p>
        <div class="actions">
          <button class="btn" data-action="go-gender">开始检测我的工位精神体</button>
          <button class="btn secondary" data-action="share-h5">转发给同事</button>
        </div>
      </div>
    </section>
  `;
  preloadGenderPreviews();
}

function renderGender() {
  app.innerHTML = `
    <section class="hero">
      <div class="panel">
        <p class="eyebrow">结果卡形象</p>
        <h2>先选一个结果卡形象</h2>
        <p class="lead">你的答案决定工位人格，这一步只决定最后出现在卡片上的角色形象。</p>
        <div class="choice-grid">
          ${genderCard("male", "使用男生形象", "结果页和分享卡调用男生版角色。", "T3")}
          ${genderCard("female", "使用女生形象", "结果页和分享卡调用女生版角色。", "T3")}
        </div>
        <div class="actions">
          <button class="btn secondary" data-action="go-home">返回</button>
        </div>
      </div>
    </section>
  `;
}

function genderCard(gender, title, desc, typeKey) {
  const selected = state.gender === gender ? " selected" : "";
  return `
    <button class="gender-card${selected}" data-action="select-gender" data-gender="${gender}">
      <span class="gender-title">${title}</span>
      <span class="gender-desc">${desc}</span>
      <img src="${characterPreviewPath(gender, typeKey)}" alt="${title}" loading="eager" decoding="async">
    </button>
  `;
}

function renderQuiz() {
  const question = Q[state.current];
  const selected = state.answers[state.current];
  const percent = Math.round(((state.current + 1) / Q.length) * 100);
  app.innerHTML = `
    <section class="screen">
      <div class="topbar">
        <span>第 ${state.current + 1} / ${Q.length} 题</span>
        <span>单选</span>
      </div>
      <div class="progress" aria-label="答题进度"><span style="width:${percent}%"></span></div>
      <div class="panel question-card">
        <div>
          <p class="question-meta">按第一反应选择</p>
          <h2>${question.title}</h2>
        </div>
        <div class="option-list">
          ${question.options.map((option, index) => optionButton(option, index, selected)).join("")}
        </div>
        <div class="quiz-footer">
          <button class="btn secondary" data-action="prev" ${state.current === 0 ? "disabled" : ""}>上一题</button>
          <button class="btn" data-action="next" ${selected.length ? "" : "disabled"}>${state.current === Q.length - 1 ? "查看结果" : "下一题"}</button>
          <button class="btn ghost" data-action="reset">重新开始</button>
        </div>
      </div>
    </section>
  `;
}

function optionButton(option, index, selected) {
  const isSelected = selected.includes(index);
  return `
    <button class="option-card${isSelected ? " selected" : ""}" data-action="select-option" data-index="${index}" data-label="${option.label}">
      ${option.text}
    </button>
  `;
}

function renderResult() {
  const computed = computeResult();
  const type = TYPES[computed.typeKey];
  const result = RESULTS[computed.typeKey];
  const wingType = TYPES[computed.wingKey];
  const genderLabel = state.gender === "female" ? "女生版" : "男生版";
  app.innerHTML = `
    <section class="screen">
      <div class="result-layout">
        <div class="panel">
          <span class="result-badge">${genderLabel} · 主型 ${type.id} 号 · ${type.id}w${wingType.id}</span>
          <h1 class="result-title">你是「${type.name}」</h1>
          <p class="result-subtitle">${type.short}</p>
          ${computed.mixed ? `<div class="info-box"><p>你的工位人格带有混合倾向，说明你在不同公司抽象场景里会切换求生模式。本次仍以最高分结果作为主型展示。</p></div>` : ""}
          <div class="result-grid">
            ${info("抽象生存模式", result.mode)}
            ${info("你真正守护的是", result.guard)}
            ${info("你最不想承认的是", result.truth)}
            ${info("高光能力", result.power)}
            ${info("隐藏内耗", result.friction)}
            ${info("反转按钮", result.turn)}
            ${info("最佳搭子", result.best)}
            ${info("最怕搭子", result.fear)}
            ${info("朋友圈文案", result.share)}
          </div>
        </div>
        <aside class="share-card">
          <img src="${shareCardPath(state.gender, computed.typeKey)}" alt="${type.name}${genderLabel}分享卡">
        </aside>
      </div>
      <div class="panel compact">
        <h3>分数分布</h3>
        <div class="score-list">
          ${scoreRows(computed.scores)}
        </div>
      </div>
      <div class="result-actions">
        <button class="btn" data-action="copy-share">复制朋友圈文案</button>
        <button class="btn secondary" data-action="share-h5">转发这个测试</button>
        <button class="btn secondary" data-action="reset">重新测试</button>
      </div>
    </section>
  `;
}

function info(title, text) {
  return `<div class="info-box"><h3>${title}</h3><p>${text}</p></div>`;
}

function scoreRows(scores) {
  const max = Math.max(...Object.values(scores), 1);
  return Object.keys(TYPES).map((key) => {
    const type = TYPES[key];
    const val = scores[key];
    const width = Math.max(3, Math.round((val / max) * 100));
    return `
      <div class="score-row">
        <span>${type.id}号 ${type.name}</span>
        <span class="score-bar"><span style="width:${width}%"></span></span>
        <span>${val}</span>
      </div>
    `;
  }).join("");
}

function computeResult() {
  const scores = Object.fromEntries(Object.keys(TYPES).map((key) => [key, 0]));
  state.answers.forEach((answer, qIndex) => {
    answer.forEach((optionIndex) => {
      const option = Q[qIndex].options[optionIndex];
      Object.entries(option.scores).forEach(([key, val]) => {
        scores[key] += val;
      });
    });
  });

  const ranked = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const typeKey = ranked[0];
  const [wingA, wingB] = TYPES[typeKey].wings;
  const wingKey = scores[wingA] >= scores[wingB] ? wingA : wingB;
  return {
    scores,
    typeKey,
    wingKey,
    mixed: scores[ranked[0]] - scores[ranked[1]] <= 3
  };
}

function resetAll() {
  state.screen = "home";
  state.gender = "";
  state.current = 0;
  state.answers = Array.from({ length: Q.length }, () => []);
  render();
}

function toast(text) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}

async function shareH5() {
  const title = SHARE_CONFIG.title || document.title;
  const text = SHARE_CONFIG.desc || "来测测你的工位人格。";
  const url = location.href.split("#")[0];
  if (navigator.share && /^https?:/.test(url)) {
    await navigator.share({ title, text, url });
    return;
  }
  if (/MicroMessenger/i.test(navigator.userAgent)) {
    showShareGuide();
    return;
  }
  try {
    await navigator.clipboard.writeText(url);
    toast(/^file:/.test(url) ? "本地预览链接已复制。正式转发请先上传到 HTTPS。" : "链接已复制");
  } catch {
    showShareGuide();
  }
}

function showShareGuide() {
  const old = document.querySelector(".share-guide");
  if (old) old.remove();
  const guide = document.createElement("div");
  guide.className = "share-guide";
  guide.innerHTML = `
    <div class="share-guide-arrow">↗</div>
    <div class="share-guide-card">
      <h3>分享到朋友圈</h3>
      <p>点击右上角「···」，选择“分享到朋友圈”或“发送给朋友”。</p>
      <button class="btn" data-close-share-guide>知道了</button>
    </div>
  `;
  document.body.appendChild(guide);
  guide.addEventListener("click", (event) => {
    if (event.target === guide || event.target.closest("[data-close-share-guide]")) {
      guide.remove();
    }
  });
}

app.addEventListener("click", async (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "go-home") {
    state.screen = "home";
    render();
  }
  if (action === "go-gender") {
    state.screen = "gender";
    render();
  }
  if (action === "select-gender") {
    state.gender = target.dataset.gender;
    state.screen = "quiz";
    state.current = 0;
    render();
  }
  if (action === "select-option") {
    const optionIndex = Number(target.dataset.index);
    const question = Q[state.current];
    const current = state.answers[state.current];
    state.answers[state.current] = [optionIndex];
    renderQuiz();
  }
  if (action === "prev" && state.current > 0) {
    state.current -= 1;
    renderQuiz();
  }
  if (action === "next") {
    if (state.current === Q.length - 1) {
      state.screen = "result";
      render();
    } else {
      state.current += 1;
      renderQuiz();
    }
  }
  if (action === "reset") {
    resetAll();
  }
  if (action === "copy-share") {
    const computed = computeResult();
    const text = RESULTS[computed.typeKey].share;
    try {
      await navigator.clipboard.writeText(text);
      toast("朋友圈文案已复制");
    } catch {
      toast(text);
    }
  }
  if (action === "share-h5") {
    try {
      await shareH5();
    } catch {
      showShareGuide();
    }
  }
});

document.title = SHARE_CONFIG.title || document.title;
render();
