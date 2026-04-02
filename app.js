const repoReports = [
  {
    slug: "adobe-react-spectrum",
    url: "https://github.com/adobe/react-spectrum",
    owner: "adobe",
    name: "react-spectrum",
    category: "前端组件库",
    stars: "12.8k",
    difficulty: "中",
    tagline: "一套成熟的 React 组件与可访问性系统，覆盖设计系统与底层 hooks。",
    summary:
      "组件数量很多，但文档、规范和测试都比较完整。只要切口够小，新手也能参与。",
    stats: {
      stack: "React / TypeScript / Monorepo / Storybook",
      audience: "前端初学者、设计系统爱好者、可访问性实践者",
      fit: "可以尝试",
      activity: "活跃",
      commitment: "值得投入，但第一次别直接碰底层 hooks。",
    },
    understand: {
      problem: "帮助团队更稳定地构建一致、可访问的跨产品 UI 组件。",
      users: "设计系统团队、企业前端团队、需要高可访问性的产品项目。",
      modules: ["组件实现", "无障碍 hooks", "文档站", "示例与测试", "样式 tokens"],
      files: [
        {
          name: "README.md",
          note: "先知道项目范围，不要一上来就钻进源码森林。",
        },
        {
          name: "CONTRIBUTING.md",
          note: "这里会直接告诉你本地开发方式和提交流程。",
        },
        {
          name: "packages/react-aria-components/",
          note: "如果从 UI 小修开始，这一层最容易找到边界。",
        },
      ],
    },
    paths: [
      {
        title: "文档与示例修补",
        bestFor: ["beginner", "docs", "simple"],
        fit: "文档信息量大，示例页多，改动范围容易控制。",
        steps: [
          "先对照 README 和文档站，找一个描述不清或示例缺失的地方。",
          "补一小段解释或示例截图，确认不会影响 API 语义。",
        ],
        risk: "容易低估术语含义，提交前要确认文案与实际行为一致。",
        reward: "能快速合并，顺便熟悉仓库的维护风格和 review 节奏。",
      },
      {
        title: "样式或体验小修",
        bestFor: ["frontend", "simple"],
        fit: "适合会一点前端的人练手，能碰到真实组件但不必大改架构。",
        steps: [
          "在 issue 里找视觉错位、focus 状态或文案对齐类问题。",
          "改动一个组件分支后，把关联快照或测试一起补上。",
        ],
        risk: "组件往往同时影响多平台，改动前先查是否有共用抽象层。",
        reward: "你会第一次体会到设计系统里的小改动其实很讲究。",
      },
    ],
    checklist: [
      { label: "Node.js LTS", status: "must", note: "优先用仓库文档建议版本，避免依赖冲突。" },
      { label: "Monorepo 包管理", status: "check", note: "确认使用 npm、yarn 还是 pnpm，不要凭感觉安装。" },
      { label: "Storybook / docs 预览", status: "check", note: "本地先跑文档或 demo，比盯源码更快进入状态。" },
      { label: "测试基线", status: "watch", note: "改组件时别跳过测试，否则很容易在 CI 里翻车。" },
    ],
    issues: [
      {
        title: "补齐某组件 keyboard interaction 文档说明",
        difficulty: "低",
        type: "文档",
        reason: "适合新手，因为能先读行为说明，不必马上理解全部实现。",
        readFirst: ["CONTRIBUTING.md", "specs/", "对应组件文档目录"],
      },
      {
        title: "修复表单组件 hover/focus 样式不一致",
        difficulty: "中",
        type: "bug",
        reason: "如果你会一点前端，这是个边界清晰的真实贡献点。",
        readFirst: ["packages/react-aria-components/", "测试文件", "相关样式 tokens"],
      },
    ],
    pitfalls: [
      "看起来只是样式问题，实际可能牵动多个主题和无障碍状态。",
      "没先跑 demo 就改组件，很容易误解真实交互预期。",
      "PR 范围一旦同时夹带重构，维护者通常会让你拆开。",
    ],
  },
  {
    slug: "vercel-turbo",
    url: "https://github.com/vercel/turbo",
    owner: "vercel",
    name: "turbo",
    category: "CLI 工具",
    stars: "27.4k",
    difficulty: "高",
    tagline: "帮助 monorepo 提速的构建系统与缓存工具。",
    summary:
      "项目影响力强、工程规范成熟，但核心实现偏底层，新手直接改逻辑容易迷路。",
    stats: {
      stack: "Rust / TypeScript / Docs / CLI",
      audience: "工程效率爱好者、前后端开发者、CLI 入门者",
      fit: "先观望",
      activity: "活跃",
      commitment: "学习价值很高，但第一次贡献更适合从文档和 examples 开始。",
    },
    understand: {
      problem: "解决 monorepo 构建慢、任务重复执行和缓存不可复用的问题。",
      users: "有多个前后端应用、共享包和构建流程的大型仓库团队。",
      modules: ["CLI 核心", "缓存机制", "文档站", "examples", "配置系统"],
      files: [
        { name: "docs/site/content/", note: "先建立它到底解决什么问题的大图景。" },
        { name: "examples/", note: "看真实使用姿势，比直接看源码更友好。" },
        { name: "CONTRIBUTING.md", note: "工具链项目的开发链路通常更严格。" },
      ],
    },
    paths: [
      {
        title: "Example 与文档一致性修正",
        bestFor: ["beginner", "docs", "simple", "frontend", "backend"],
        fit: "对 CLI 新手最友好，能先摸清产品能力，不必立刻进 Rust 细节。",
        steps: [
          "找一个 example 与当前文档不一致的点。",
          "补文档、命令说明或最小可复现步骤。",
        ],
        risk: "版本更新快，提交前确认问题没有被近期变更顺手修掉。",
        reward: "这很像真实工程协作的贡献，含金量比想象中高。",
      },
      {
        title: "问题复现与 issue 整理",
        bestFor: ["backend", "simple"],
        fit: "适合愿意跑命令、比对配置和整理重现场景的人。",
        steps: [
          "挑一个复现步骤不完整的 issue，自行补全环境信息和对照案例。",
          "把触发条件压缩成最小仓库结构，减少维护者排查成本。",
        ],
        risk: "容易被环境差异干扰，记录 Node 版本和配置文件非常关键。",
        reward: "你会得到一次非常接近维护者视角的训练。",
      },
    ],
    checklist: [
      { label: "Node.js + 包管理器", status: "must", note: "examples 经常依赖特定包管理器行为。" },
      { label: "Rust 工具链", status: "watch", note: "如果不碰核心实现，可以先不装全套。" },
      { label: "缓存目录理解", status: "check", note: "调试 CLI 行为前先弄懂缓存命中逻辑。" },
      { label: "example 仓库运行", status: "check", note: "先跑通 example，比直接跑主工程更稳。" },
    ],
    issues: [
      {
        title: "修正文档中的配置示例与最新 CLI 参数不一致",
        difficulty: "低",
        type: "文档",
        reason: "新手也能做，而且能快速建立对配置体系的理解。",
        readFirst: ["docs/site/content/", "examples/", "CLI 文档"],
      },
      {
        title: "补充某 issue 的最小复现仓库说明",
        difficulty: "中",
        type: "cleanup",
        reason: "适合愿意折腾环境但不想直接改核心代码的人。",
        readFirst: ["相关 issue", "examples/", "turbo.json 配置说明"],
      },
    ],
    pitfalls: [
      "看到 good first issue 也别盲冲，先判断是否涉及 Rust 核心路径。",
      "没有最小复现时，很多看似简单的问题其实很难 review。",
      "CLI 参数、文档和 example 经常不同步，先交叉验证再动手。",
    ],
  },
  {
    slug: "microsoft-vscode-docs",
    url: "https://github.com/microsoft/vscode-docs",
    owner: "microsoft",
    name: "vscode-docs",
    category: "文档型项目",
    stars: "5.6k",
    difficulty: "低",
    tagline: "VS Code 官方文档仓库，内容型贡献入口非常友好。",
    summary:
      "如果你现在最怕的是环境和复杂代码，这类仓库就是最稳的热身场。",
    stats: {
      stack: "Markdown / Docs / Static Site",
      audience: "新手、文档整理者、英文技术写作爱好者",
      fit: "非常适合",
      activity: "稳定",
      commitment: "很适合做第一次贡献，成果明确、风险低、反馈快。",
    },
    understand: {
      problem: "帮助全球开发者更顺畅地学习和使用 VS Code。",
      users: "VS Code 用户、插件开发者、初学者和团队培训者。",
      modules: ["文档内容", "教程结构", "版本更新说明", "示例截图"],
      files: [
        { name: "README.md", note: "先知道文档站怎么组织。" },
        { name: "docs/editor/", note: "最容易找到用户视角的问题。" },
        { name: "CONTRIBUTING.md", note: "确认术语、格式和提交流程。" },
      ],
    },
    paths: [
      {
        title: "文档改进切入",
        bestFor: ["beginner", "docs", "simple"],
        fit: "修改范围小，贡献结果直观，特别适合作为第一次 PR。",
        steps: [
          "挑一页你真的读得懂的文档，找模糊或过时的说明。",
          "补步骤、截图、示例或更明确的标题结构。",
        ],
        risk: "看起来只是润色，实际可能涉及官方术语统一，提交前先通读上下文。",
        reward: "很容易把贡献过程整理成作品集，适合建立信心。",
      },
    ],
    checklist: [
      { label: "Markdown 基础", status: "must", note: "会写标题、列表、代码块就能开始。" },
      { label: "本地预览方式", status: "check", note: "确认文档站有没有本地预览或校验脚本。" },
      { label: "截图更新", status: "watch", note: "有些文档会要求截图尺寸或版本一致。" },
      { label: "英文术语统一", status: "check", note: "别只改一句，要顺手核对周边表述是否一致。" },
    ],
    issues: [
      {
        title: "补充某页面缺失的步骤截图或命令说明",
        difficulty: "低",
        type: "文档",
        reason: "很适合第一次贡献，因为成果直观、范围清楚。",
        readFirst: ["相关文档页", "CONTRIBUTING.md", "同类页面"],
      },
      {
        title: "修正过时的功能描述或版本差异",
        difficulty: "低",
        type: "cleanup",
        reason: "需要一点细心，但不要求复杂环境搭建。",
        readFirst: ["release-notes/", "目标文档页", "VS Code 当前功能页"],
      },
    ],
    pitfalls: [
      "没有比对现有语气和格式，容易让你的改动显得突兀。",
      "看起来是小改，但跨多个页面时要小心术语前后一致。",
      "没说明为什么要改，reviewer 很难判断你是不是误解了功能。",
    ],
  },
];

const personas = [
  { id: "beginner", title: "我是新手", note: "希望有人告诉我先看什么、先做什么。" },
  { id: "frontend", title: "我会一点前端", note: "更想从样式、组件、体验优化切进去。" },
  { id: "backend", title: "我会一点后端", note: "更愿意碰接口、脚本、数据流和服务逻辑。" },
  { id: "docs", title: "我擅长文档整理", note: "愿意从指南、示例和内容补全开始。" },
  { id: "simple", title: "我只想做简单贡献", note: "优先范围小、容易合并、成就感快。" },
];

const goals = [
  { id: "first-pr", title: "我想做第一次 PR", note: "希望最后真的能发出去，而不是只看懂。" },
  { id: "understand", title: "我想快速理解这个仓库", note: "先弄明白值不值得花时间深挖。" },
  { id: "find-issue", title: "我想找适合我的 issue", note: "优先给我低风险、清晰边界的切入口。" },
  { id: "worth-it", title: "我想判断值不值得投入", note: "想先评估维护节奏、复杂度和成长价值。" },
];

let selectedRepo = repoReports[0];
let selectedPersona = "beginner";
let selectedGoal = "first-pr";

function renderChoices() {
  const personaGrid = document.getElementById("persona-grid");
  const goalGrid = document.getElementById("goal-grid");
  const quickPicks = document.getElementById("quick-picks");
  const examplesGrid = document.getElementById("examples-grid");

  personaGrid.innerHTML = personas
    .map(
      (item) => `
        <button class="choice ${item.id === selectedPersona ? "active" : ""}" data-persona="${item.id}">
          <strong>${item.title}</strong>
          <p>${item.note}</p>
        </button>
      `,
    )
    .join("");

  goalGrid.innerHTML = goals
    .map(
      (item) => `
        <button class="choice ${item.id === selectedGoal ? "active" : ""}" data-goal="${item.id}">
          <strong>${item.title}</strong>
          <p>${item.note}</p>
        </button>
      `,
    )
    .join("");

  quickPicks.innerHTML = repoReports
    .map(
      (repo) => `
        <button data-pick="${repo.slug}">试试 ${repo.name}</button>
      `,
    )
    .join("");

  examplesGrid.innerHTML = repoReports
    .map(
      (repo) => `
        <article class="example-card" data-example="${repo.slug}">
          <div class="meta-row">
            <span class="panel-label">${repo.category}</span>
            <span class="meta-badge">${repo.difficulty}</span>
          </div>
          <h3>${repo.name}</h3>
          <p>${repo.tagline}</p>
          <div class="chip-row">
            ${repo.stats.stack
              .split(" / ")
              .slice(0, 3)
              .map((chip) => `<span>${chip}</span>`)
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");

  personaGrid.querySelectorAll("[data-persona]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedPersona = btn.dataset.persona;
      renderChoices();
      renderReport();
    });
  });

  goalGrid.querySelectorAll("[data-goal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedGoal = btn.dataset.goal;
      renderChoices();
      renderReport();
    });
  });

  quickPicks.querySelectorAll("[data-pick]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slug = btn.dataset.pick;
      const found = repoReports.find((repo) => repo.slug === slug);
      if (!found) return;
      selectedRepo = found;
      document.getElementById("repo-url").value = found.url;
      renderReport();
    });
  });

  examplesGrid.querySelectorAll("[data-example]").forEach((card) => {
    card.addEventListener("click", () => {
      const slug = card.dataset.example;
      const found = repoReports.find((repo) => repo.slug === slug);
      if (!found) return;
      selectedRepo = found;
      document.getElementById("repo-url").value = found.url;
      renderReport();
      document.getElementById("report").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderReport() {
  const repo = selectedRepo;
  document.getElementById("repo-name").textContent = `${repo.owner}/${repo.name}`;
  document.getElementById("repo-tagline").textContent = repo.tagline;
  document.getElementById("repo-summary").textContent = repo.summary;
  document.getElementById("understand-problem").textContent = repo.understand.problem;
  document.getElementById("understand-users").textContent = repo.understand.users;

  const statsMap = [
    ["技术栈", repo.stats.stack],
    ["适合人群", repo.stats.audience],
    ["第一次贡献", repo.stats.fit],
    ["活跃度", repo.stats.activity],
    ["推荐投入", repo.stats.commitment],
  ];

  document.getElementById("repo-stats").innerHTML = statsMap
    .map(
      ([label, value]) => `
        <div class="stat-card">
          <strong>${label}</strong>
          <span>${value}</span>
        </div>
      `,
    )
    .join("");

  document.getElementById("understand-modules").innerHTML = repo.understand.modules
    .map((item) => `<span>${item}</span>`)
    .join("");

  document.getElementById("priority-files").innerHTML = repo.understand.files
    .map(
      (item) => `
        <div class="file-item">
          <strong>${item.name}</strong>
          <span>${item.note}</span>
        </div>
      `,
    )
    .join("");

  const pathList = repo.paths.filter((item) => item.bestFor.includes(selectedPersona));
  const visiblePaths = pathList.length ? pathList : repo.paths;

  document.getElementById("path-grid").innerHTML = visiblePaths
    .map(
      (path) => `
        <article class="path-card">
          <p class="panel-label">推荐路线</p>
          <h4>${path.title}</h4>
          <p>${path.fit}</p>
          <ol>
            ${path.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
          <div class="footer-note">
            <div><strong>风险点</strong><p>${path.risk}</p></div>
            <div><strong>做完能拿到什么</strong><p>${path.reward}</p></div>
          </div>
        </article>
      `,
    )
    .join("");

  document.getElementById("check-grid").innerHTML = repo.checklist
    .map(
      (item) => `
        <div class="check-item">
          <div>
            <strong>${item.label}</strong>
            <p>${item.note}</p>
          </div>
          <span class="status-pill ${item.status}">${statusText(item.status)}</span>
        </div>
      `,
    )
    .join("");

  document.getElementById("issue-list").innerHTML = repo.issues
    .map(
      (issue) => `
        <article class="issue-item">
          <div class="meta-row">
            <h4>${issue.title}</h4>
            <div class="issue-meta">
              <span>${issue.difficulty}</span>
              <span>${issue.type}</span>
            </div>
          </div>
          <p>${issue.reason}</p>
          <div class="chip-row">
            ${issue.readFirst.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");

  document.getElementById("pitfall-grid").innerHTML = repo.pitfalls
    .map(
      (item, index) => `
        <article class="pitfall-card">
          <p class="panel-label">避坑提醒 0${index + 1}</p>
          <p>${item}</p>
        </article>
      `,
    )
    .join("");
}

function statusText(status) {
  if (status === "must") return "必须先确认";
  if (status === "check") return "建议先检查";
  return "容易踩坑";
}

document.getElementById("analyze-btn").addEventListener("click", () => {
  const input = document.getElementById("repo-url").value.trim();
  const matched = repoReports.find((repo) => input.includes(repo.slug.split("-").slice(-1)[0])) ||
    repoReports.find((repo) => input.includes(repo.owner) || input.includes(repo.name)) ||
    selectedRepo;
  selectedRepo = matched;
  renderReport();
  document.getElementById("report").scrollIntoView({ behavior: "smooth" });
});

renderChoices();
renderReport();
