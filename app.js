const TYPES = {
  T1: { id: 1, name: "规则校准员", short: "公司可以抽象，但流程不能抽象。", wings: ["T9", "T2"] },
  T2: { id: 2, name: "人间补位官", short: "哪里没人管，哪里就会自动出现我。", wings: ["T1", "T3"] },
  T3: { id: 3, name: "KPI 永动机", short: "不是我爱卷，是结果需要有人推进。", wings: ["T2", "T4"] },
  T4: { id: 4, name: "灵魂美化师", short: "方案可以普通，但不能没有灵魂。", wings: ["T3", "T5"] },
  T5: { id: 5, name: "冷静拆解器", short: "你们先吵，我先把逻辑捋出来。", wings: ["T4", "T6"] },
  T6: { id: 6, name: "风险雷达站", short: "我不是想太多，我只是提前看见了坑。", wings: ["T5", "T7"] },
  T7: { id: 7, name: "快乐改造师", short: "只要还有新玩法，这班就还能上。", wings: ["T6", "T8"] },
  T8: { id: 8, name: "现场拍板王", short: "别绕了，谁负责，什么时候交。", wings: ["T7", "T9"] },
  T9: { id: 9, name: "办公室降噪器", short: "今天大家别撕起来，就是一种胜利。", wings: ["T8", "T1"] }
};

const RESULTS = {
  T1: {
    mode: "当公司开始抽象，你会本能地寻找标准、边界和正确做法。别人看到的是“你又开始较真了”，但你心里想的是：如果现在不把问题说清楚，后面会用十倍成本补回来。",
    power: "你擅长发现漏洞、校准标准、守住质量底线。混乱场面里，你往往是那个让事情重新变得可控的人。",
    friction: "你容易把“不够好”看得太重，也容易对低标准产生持续愤怒。你不是不能放松，而是很难对明显的问题假装没看见。",
    best: "人间补位官。TA 能帮你照顾人的感受，让你的标准更容易被团队接住。",
    fear: "快乐改造师。TA 的灵活和跳脱会让你觉得边界正在消失。",
    share: "我测出来是「规则校准员」。不是我爱挑刺，是我真的看不得公司抽象到没有边界。"
  },
  T2: {
    mode: "当公司开始抽象，你会自动扫描哪里没人管、谁快撑不住、哪个缺口要有人补。你的工位像一个临时服务台，文件、情绪、咖啡、烂摊子都可能被你接住。",
    power: "你有很强的感知力和支持力，能在别人开口前发现问题。很多项目能活下来，是因为你在没人注意的地方默默补了一手。",
    friction: "你容易把“被需要”当成价值证明，也容易在长期补位后突然委屈。你需要练习把“我愿意帮”与“这不是我的责任”分开。",
    best: "规则校准员。TA 能帮你明确边界，减少无止境的情绪劳动。",
    fear: "现场拍板王。TA 的直接和强势，可能让你感觉自己被忽略。",
    share: "我测出来是「人间补位官」。建议公司给我配一个专属充电口，因为我每天都在给别人续命。"
  },
  T3: {
    mode: "当公司开始抽象，你会迅速把混乱拆成目标、动作、节点和结果。别人还在讨论感觉，你已经在心里拉出进度表，顺手把“谁负责”标了出来。",
    power: "你目标感强、行动快、结果意识重，擅长在混乱里抓关键指标。只要你认定这件事值得做，就会把它推进到能看见成果。",
    friction: "你容易把“没有结果”理解成“我不够好”，也容易对低效的人失去耐心。你需要记得，价值不只存在于数据和掌声里。",
    best: "风险雷达站。TA 能帮你在冲刺时看见坑，避免跑太快翻车。",
    fear: "办公室降噪器。TA 的慢和缓，可能让你觉得项目快没电了。",
    share: "我测出来是「KPI 永动机」。可以没人夸我，但数据最好会说话。"
  },
  T4: {
    mode: "当公司开始抽象，你最怕的不是忙，而是所有东西都变得普通、无聊、没有表达。你会忍不住问：这个方案有记忆点吗？这个内容有情绪吗？这个品牌有灵魂吗？",
    power: "你对氛围、审美、表达和差异化很敏感，能把平平无奇的东西做出记忆点。你擅长让内容不只是“完成”，而是“被感受到”。",
    friction: "你容易在“独特”与“被理解”之间拉扯。你不想随波逐流，但也会在别人不懂你的时候感到失落。",
    best: "KPI 永动机。TA 能帮你的表达落到结果上，不只停留在感觉里。",
    fear: "规则校准员。TA 的标准化可能让你觉得灵感被压扁。",
    share: "我测出来是「灵魂美化师」。不想做正确但无聊的东西，是我的职业底线。"
  },
  T5: {
    mode: "当公司开始抽象，你不会急着表态。你会先退半步，看信息是否完整、逻辑是否成立、问题到底是什么。别人以为你在发呆，其实你已经在脑内建模。",
    power: "你擅长分析、拆解、归纳和判断关键变量。越混乱的场景，越能体现你把问题从情绪里拎出来的能力。",
    friction: "你容易因为信息不完整而迟迟不行动，也容易在被频繁打扰时迅速耗电。你需要给自己保留空间，同时练习在不完美信息下先做小判断。",
    best: "现场拍板王。TA 能帮你把分析变成行动。",
    fear: "人间补位官。TA 的高频情绪感知可能让你觉得能量被不断调用。",
    share: "我测出来是「冷静拆解器」。别急着开会，先让我把问题想明白。"
  },
  T6: {
    mode: "当公司开始抽象，你的雷达会自动开机。别人看到机会，你同时看到供应链、客诉、预算、执行、人手和老板又变卦的可能性。",
    power: "你擅长预判风险、建立兜底方案、维护团队安全感。你不是扫兴，你是在帮大家降低翻车概率。",
    friction: "你容易过度担心，也容易在不确定中反复确认。你需要分清“真实风险”和“脑内预演”，否则会把自己长期放在紧绷状态。",
    best: "KPI 永动机。TA 能帮你把风险判断转成推进动作。",
    fear: "快乐改造师。TA 的“先试试”会让你的雷达响个不停。",
    share: "我测出来是「风险雷达站」。不是我悲观，是你们真的太乐观。"
  },
  T7: {
    mode: "当公司开始抽象，你会本能地找新玩法、新可能、新出口。别人觉得这班快上不下去了，你已经开始想：能不能换个形式？能不能做成活动？能不能让它至少有点意思？",
    power: "你有很强的创意、弹性和乐观感，能在沉闷重复的工作里找到突破口。你常常是团队里的灵感加速器。",
    friction: "你容易逃开沉重和重复，也容易在新鲜感消失后失速。你需要让好点子多走几步，不要只停在“好像很有趣”。",
    best: "规则校准员。TA 能帮你的点子落地，不让创意飞散。",
    fear: "风险雷达站。TA 的每一个“但是”都可能让你感觉快乐被暂停。",
    share: "我测出来是「快乐改造师」。生活已经够苦了，工作不能再没意思。"
  },
  T8: {
    mode: "当公司开始抽象，你最受不了绕来绕去。你会直接问：谁负责？怎么干？什么时候交？如果没人拍板，你很可能自己站出来把方向定了。",
    power: "你果断、有担当、能扛事，适合处理高压和混乱现场。很多时候，你的存在会让团队从“无限讨论”进入“马上行动”。",
    friction: "你容易因为太直接而压迫到别人，也容易把脆弱藏起来，只留下强硬。你需要记得，柔软不是失控，倾听也不是让步。",
    best: "办公室降噪器。TA 能帮你降低冲突烈度，让你的决策更容易被团队接受。",
    fear: "冷静拆解器。TA 的反复分析可能让你觉得时间正在被浪费。",
    share: "我测出来是「现场拍板王」。别问了，我来扛，但最好别让我一直扛。"
  },
  T9: {
    mode: "当公司开始抽象，你最先感受到的是气氛变化。你会希望大家先别吵、别冲、别把事情搞到无法收场。你的超能力，是让很多即将升级的冲突慢慢降温。",
    power: "你稳定、包容、能缓冲冲突，是团队里的气氛稳定器。很多时候，你让事情没有变得更糟，这本身就是价值。",
    friction: "你容易为了维持和谐而压住自己的意见，也容易把“不想冲突”变成“先放着”。你需要练习表达立场，不必等到忍无可忍才开口。",
    best: "现场拍板王。TA 能帮你把拖住的事往前推。",
    fear: "规则校准员。TA 的直接纠错可能让你觉得气氛又要紧起来。",
    share: "我测出来是「办公室降噪器」。我的核心 KPI：今天大家别撕起来。"
  }
};

const Q = window.QUESTIONS;
const SHARE_CONFIG = window.H5_SHARE_CONFIG || {};
const ASSET_BASE = SHARE_CONFIG.assetBase || "./assets";
const ASSET_VERSION = "20260614-fast-avatar";

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
            ${info("高光能力", result.power)}
            ${info("隐藏内耗", result.friction)}
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
