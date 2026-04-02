const STORAGE_KEY = "repostart-history-v1";
const MAX_HISTORY = 6;

const personas = [
  {
    id: "beginner",
    title: "我是新手",
    note: "希望先知道先读什么、先改什么最稳。",
    routeBias: "docs",
    summaryTone: "先别急着改逻辑，优先找边界清楚的入口。",
  },
  {
    id: "frontend",
    title: "我会一点前端",
    note: "更想从组件、样式、交互和文档演示切进去。",
    routeBias: "ui",
    summaryTone: "优先找有可见结果、改动面可控的点。",
  },
  {
    id: "backend",
    title: "我会一点后端",
    note: "更愿意处理接口、脚本、配置与运行链路。",
    routeBias: "runtime",
    summaryTone: "先摸清运行方式，再找逻辑边界清晰的问题。",
  },
  {
    id: "docs",
    title: "我擅长文档整理",
    note: "更适合从指南、案例、上手门槛优化开始。",
    routeBias: "docs",
    summaryTone: "文档型切口往往是最稳的第一次贡献。",
  },
  {
    id: "simple",
    title: "我只想做简单贡献",
    note: "优先范围小、反馈快、容易讲清楚的工作。",
    routeBias: "small",
    summaryTone: "先赢一个小的，不要第一枪就打复杂链路。",
  },
];

const goals = [
  {
    id: "first-pr",
    title: "我想做第一次 PR",
    note: "重点是最后真的能发出去。",
    emphasis: "action",
  },
  {
    id: "understand",
    title: "我想快速理解这个仓库",
    note: "重点是建立整体地图。",
    emphasis: "map",
  },
  {
    id: "find-issue",
    title: "我想找适合我的 issue",
    note: "重点是筛选低风险切入口。",
    emphasis: "issue",
  },
  {
    id: "worth-it",
    title: "我想判断值不值得投入",
    note: "重点是评估成长价值和维护节奏。",
    emphasis: "decision",
  },
];

const sampleRepos = [
  {
    slug: "react-spectrum",
    url: "https://github.com/adobe/react-spectrum",
    fallback: {
      repo: {
        full_name: "adobe/react-spectrum",
        html_url: "https://github.com/adobe/react-spectrum",
        description: "A collection of libraries and tools that help you build adaptive, accessible, and robust user experiences.",
        stargazers_count: 12800,
        language: "TypeScript",
        topics: ["react", "accessibility", "design-system", "components", "monorepo"],
        default_branch: "main",
        open_issues_count: 812,
        forks_count: 1036,
        watchers_count: 12800,
        homepage: "https://react-spectrum.adobe.com/",
        updated_at: "2026-03-30T10:00:00Z",
      },
      readme:
        "React Spectrum provides libraries, components, and tools for building adaptive and accessible applications. Packages include React Spectrum, React Aria, and React Stately. The repo uses a monorepo structure, documentation, examples, and tests.",
      issues: [
        {
          title: "Improve docs examples for keyboard interactions",
          html_url: "https://github.com/adobe/react-spectrum/issues/1",
          comments: 3,
          labels: [{ name: "documentation" }, { name: "good first issue" }],
          state: "open",
        },
        {
          title: "Fix hover/focus mismatch in form components",
          html_url: "https://github.com/adobe/react-spectrum/issues/2",
          comments: 7,
          labels: [{ name: "bug" }, { name: "components" }],
          state: "open",
        },
      ],
      rootFiles: ["README.md", "CONTRIBUTING.md", "packages/", "examples/", "scripts/", "package.json"],
    },
    accent: "组件库 / 设计系统",
  },
  {
    slug: "turbo",
    url: "https://github.com/vercel/turbo",
    fallback: {
      repo: {
        full_name: "vercel/turbo",
        html_url: "https://github.com/vercel/turbo",
        description: "Incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust.",
        stargazers_count: 27400,
        language: "Rust",
        topics: ["rust", "monorepo", "build-system", "cli", "typescript"],
        default_branch: "main",
        open_issues_count: 640,
        forks_count: 1640,
        watchers_count: 27400,
        homepage: "https://turbo.build/repo",
        updated_at: "2026-03-28T11:00:00Z",
      },
      readme:
        "Turborepo is a high-performance build system for JavaScript and TypeScript codebases. It includes task scheduling, caching, and examples. Contributors often start with docs, examples, or reproduction-focused issues.",
      issues: [
        {
          title: "Docs example uses outdated CLI flag",
          html_url: "https://github.com/vercel/turbo/issues/10",
          comments: 2,
          labels: [{ name: "documentation" }, { name: "good first issue" }],
          state: "open",
        },
        {
          title: "Add reproduction details for cache miss edge case",
          html_url: "https://github.com/vercel/turbo/issues/11",
          comments: 5,
          labels: [{ name: "needs reproduction" }],
          state: "open",
        },
      ],
      rootFiles: ["README.md", "docs/", "examples/", "crates/", "package.json", "turbo.json"],
    },
    accent: "CLI / 工程效率",
  },
  {
    slug: "vscode-docs",
    url: "https://github.com/microsoft/vscode-docs",
    fallback: {
      repo: {
        full_name: "microsoft/vscode-docs",
        html_url: "https://github.com/microsoft/vscode-docs",
        description: "Public documentation for Visual Studio Code.",
        stargazers_count: 5600,
        language: "Markdown",
        topics: ["docs", "vscode", "markdown", "website"],
        default_branch: "main",
        open_issues_count: 184,
        forks_count: 4830,
        watchers_count: 5600,
        homepage: "https://code.visualstudio.com/docs",
        updated_at: "2026-03-25T09:30:00Z",
      },
      readme:
        "This repository contains the public docs for Visual Studio Code, including editor guides, extension docs, and setup tutorials. Contributions often involve clarifications, outdated steps, screenshots, or cross-link fixes.",
      issues: [
        {
          title: "Clarify setup steps for Python debugging article",
          html_url: "https://github.com/microsoft/vscode-docs/issues/20",
          comments: 1,
          labels: [{ name: "documentation" }, { name: "good first issue" }],
          state: "open",
        },
        {
          title: "Update screenshot and terminology for remote development docs",
          html_url: "https://github.com/microsoft/vscode-docs/issues/21",
          comments: 4,
          labels: [{ name: "help wanted" }],
          state: "open",
        },
      ],
      rootFiles: ["README.md", "CONTRIBUTING.md", "docs/", "release-notes/", "package.json"],
    },
    accent: "文档仓库",
  },
  {
    slug: "appwrite",
    url: "https://github.com/appwrite/appwrite",
    fallback: {
      repo: {
        full_name: "appwrite/appwrite",
        html_url: "https://github.com/appwrite/appwrite",
        description: "Build like a team of hundreds with a platform to secure, scale, and ship faster.",
        stargazers_count: 47000,
        language: "TypeScript",
        topics: ["backend", "self-hosted", "api", "docker", "open-source"],
        default_branch: "main",
        open_issues_count: 1580,
        forks_count: 4300,
        watchers_count: 47000,
        homepage: "https://appwrite.io/",
        updated_at: "2026-03-29T12:20:00Z",
      },
      readme:
        "Appwrite is a backend platform with APIs, docs, and self-hosting tools. The repo contains services, consoles, docs, and deployment scripts. New contributors should start with docs, dashboard polish, or focused bug fixes.",
      issues: [
        {
          title: "Improve onboarding docs for self-hosting with Docker",
          html_url: "https://github.com/appwrite/appwrite/issues/30",
          comments: 4,
          labels: [{ name: "documentation" }, { name: "good first issue" }],
          state: "open",
        },
        {
          title: "Dashboard copy mismatch in project creation flow",
          html_url: "https://github.com/appwrite/appwrite/issues/31",
          comments: 6,
          labels: [{ name: "frontend" }, { name: "help wanted" }],
          state: "open",
        },
      ],
      rootFiles: ["README.md", "docs/", "app/", "src/", "docker-compose.yml", "package.json"],
    },
    accent: "产品型平台 / 全栈",
  },
];

const loadingMessages = [
  "正在翻 README",
  "正在扫描 issues",
  "正在辨认根目录和关键文件",
  "正在绘制你的开源路线",
  "正在整理首次 PR 行动清单",
];

const state = {
  selectedPersona: "beginner",
  selectedGoal: "first-pr",
  currentAnalysis: null,
  currentExportText: "",
};

function $(id) {
  return document.getElementById(id);
}

function renderChoiceControls() {
  $("persona-grid").innerHTML = personas
    .map(
      (item) => `
        <button class="choice ${item.id === state.selectedPersona ? "active" : ""}" data-persona="${item.id}">
          <strong>${item.title}</strong>
          <p>${item.note}</p>
        </button>
      `,
    )
    .join("");

  $("goal-grid").innerHTML = goals
    .map(
      (item) => `
        <button class="choice ${item.id === state.selectedGoal ? "active" : ""}" data-goal="${item.id}">
          <strong>${item.title}</strong>
          <p>${item.note}</p>
        </button>
      `,
    )
    .join("");

  $("examples-grid").innerHTML = sampleRepos
    .map(
      (item) => `
        <article class="example-card" data-sample="${item.slug}">
          <p class="panel-kicker">${item.accent}</p>
          <h3>${item.fallback.repo.full_name}</h3>
          <p>${item.fallback.repo.description}</p>
          <div class="chip-row">
            <span>${item.fallback.repo.language || "Mixed"}</span>
            <span>${formatNumber(item.fallback.repo.stargazers_count)} stars</span>
            <span>${item.fallback.repo.default_branch}</span>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll("[data-persona]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPersona = button.dataset.persona;
      renderChoiceControls();
      if (state.currentAnalysis) {
        const rerendered = buildAnalysis(
          state.currentAnalysis.rawData,
          state.selectedPersona,
          state.selectedGoal,
          state.currentAnalysis.meta,
        );
        commitAnalysis(rerendered, false);
      }
    });
  });

  document.querySelectorAll("[data-goal]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedGoal = button.dataset.goal;
      renderChoiceControls();
      if (state.currentAnalysis) {
        const rerendered = buildAnalysis(
          state.currentAnalysis.rawData,
          state.selectedPersona,
          state.selectedGoal,
          state.currentAnalysis.meta,
        );
        commitAnalysis(rerendered, false);
      }
    });
  });

  document.querySelectorAll("[data-sample]").forEach((card) => {
    card.addEventListener("click", () => {
      const sample = sampleRepos.find((item) => item.slug === card.dataset.sample);
      if (!sample) return;
      $("repo-url").value = sample.url;
      analyzeRepository(sample.url, { forceSample: true });
    });
  });
}

function renderLoading(stepIndex = -1, done = false) {
  $("loading-stack").innerHTML = loadingMessages
    .map(
      (message, index) => `
        <div class="loading-step ${done || index < stepIndex ? "done" : ""} ${index === stepIndex && !done ? "active" : ""}">
          <span>${done || index < stepIndex ? "✓" : index + 1}</span>
          <span>${message}</span>
        </div>
      `,
    )
    .join("");
}

function setStatus(mode, title, message, signals = []) {
  const dot = $("source-dot");
  dot.className = `live-dot ${mode}`;
  $("source-badge").textContent =
    mode === "live" ? "实时 GitHub 数据" : mode === "mock" ? "Fallback mock 数据" : "分析提醒";
  $("status-title").textContent = title;
  $("status-message").textContent = message;
  $("signal-list").innerHTML = signals
    .map((signal) => `<span class="signal">${signal}</span>`)
    .join("");
}

function parseGitHubUrl(input) {
  const text = input.trim();
  const match = text.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  if (!match) return null;
  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/, ""),
    url: `https://github.com/${match[1]}/${match[2].replace(/\.git$/, "")}`,
  };
}

function decodeBase64Unicode(value) {
  try {
    return decodeURIComponent(
      atob(value)
        .split("")
        .map((char) => `%${char.charCodeAt(0).toString(16).padStart(2, "0")}`)
        .join(""),
    );
  } catch (error) {
    return atob(value);
  }
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    const remaining = response.headers.get("x-ratelimit-remaining");
    const reset = response.headers.get("x-ratelimit-reset");
    const error = new Error(`GitHub API failed: ${response.status}`);
    error.status = response.status;
    error.rateLimit = remaining === "0";
    error.reset = reset;
    throw error;
  }

  return response.json();
}

async function fetchRepositoryData(owner, repo) {
  const repoUrl = `https://api.github.com/repos/${owner}/${repo}`;
  const wrap = (promise) =>
    promise
      .then((value) => ({ status: "fulfilled", value }))
      .catch((reason) => ({ status: "rejected", reason }));

  const [repoData, readmeData, issuesData, contentsData] = await Promise.all([
    wrap(fetchJson(repoUrl)),
    wrap(fetchJson(`${repoUrl}/readme`)),
    wrap(fetchJson(`${repoUrl}/issues?state=open&per_page=12&sort=updated&direction=desc`)),
    wrap(fetchJson(`${repoUrl}/contents`)),
  ]);

  if (repoData.status !== "fulfilled") {
    throw repoData.reason;
  }

  const issues = issuesData.status === "fulfilled"
    ? issuesData.value.filter((item) => !item.pull_request)
    : [];

  const readme = readmeData.status === "fulfilled" && readmeData.value.content
    ? decodeBase64Unicode(readmeData.value.content)
    : "";

  const rootFiles = contentsData.status === "fulfilled"
    ? contentsData.value.map((item) => (item.type === "dir" ? `${item.name}/` : item.name))
    : [];

  return {
    repo: repoData.value,
    readme,
    issues,
    rootFiles,
    warnings: [
      readmeData.status !== "fulfilled" ? "README 读取失败，已改用仓库基础信息补足。" : null,
      issuesData.status !== "fulfilled" ? "Issues 读取失败，推荐方向会更多基于仓库结构推断。" : null,
      contentsData.status !== "fulfilled" ? "根目录读取失败，文件推荐会偏启发式。" : null,
    ].filter(Boolean),
  };
}

function getSampleByParsed(parsed) {
  if (!parsed) return null;
  return sampleRepos.find((item) => {
    const sampleParsed = parseGitHubUrl(item.url);
    return sampleParsed && sampleParsed.owner === parsed.owner && sampleParsed.repo === parsed.repo;
  });
}

function normalizeRepositoryData(payload, source) {
  const repo = payload.repo;
  return {
    fullName: repo.full_name,
    htmlUrl: repo.html_url,
    description: repo.description || "这个仓库没有写太多描述，需要更多依赖 README 和目录结构来理解。",
    stars: repo.stargazers_count || 0,
    language: repo.language || detectLanguageFromFiles(payload.rootFiles),
    topics: repo.topics || [],
    defaultBranch: repo.default_branch || "main",
    openIssuesCount: repo.open_issues_count || 0,
    watchers: repo.watchers_count || 0,
    forks: repo.forks_count || 0,
    homepage: repo.homepage || "",
    updatedAt: repo.updated_at || "",
    readmeText: payload.readme || "",
    issues: payload.issues || [],
    rootFiles: payload.rootFiles || [],
    source,
    warnings: payload.warnings || [],
  };
}

function detectLanguageFromFiles(files = []) {
  if (files.includes("Cargo.toml")) return "Rust";
  if (files.includes("requirements.txt") || files.includes("pyproject.toml")) return "Python";
  if (files.includes("go.mod")) return "Go";
  if (files.includes("package.json")) return "JavaScript / TypeScript";
  return "Mixed";
}

function inferProjectType(data) {
  const text = `${data.description} ${data.readmeText}`.toLowerCase();
  if (text.includes("component") || text.includes("design system")) return "组件库";
  if (text.includes("documentation") || text.includes("docs")) return "文档项目";
  if (text.includes("cli") || text.includes("command line")) return "CLI 工具";
  if (text.includes("sdk")) return "SDK / 开发工具";
  if (text.includes("platform") || text.includes("backend") || text.includes("self-hosted")) return "产品平台";
  return "应用或基础设施项目";
}

function extractReadmeSentences(readmeText) {
  if (!readmeText) return [];
  return readmeText
    .replace(/[#>*`_-]/g, " ")
    .replace(/\s+/g, " ")
    .split(/[。.!?]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 18);
}

function pickFirstFiles(data) {
  const priorities = [
    ["README.md", "先建立项目边界，避免一上来就钻实现细节。"],
    ["CONTRIBUTING.md", "确认本地开发、提交流程和维护者偏好。"],
    ["docs/", "很多第一次贡献其实从文档与示例最容易切。"],
    ["examples/", "先看真实使用方式，比盯源码更容易建立地图。"],
    ["package.json", "能快速看出脚本入口、包管理方式和工作区结构。"],
    ["Cargo.toml", "如果是 Rust / CLI 仓库，这通常是运行入口线索。"],
    ["src/", "在理解用途后，再进入真正实现目录。"],
    ["app/", "产品型仓库常把主应用入口放在这里。"],
  ];

  return priorities
    .filter(([name]) => data.rootFiles.includes(name))
    .slice(0, 4)
    .map(([name, note]) => ({ name, note }))
    .concat(
      priorities.some(([name]) => name === "README.md" && data.rootFiles.includes("README.md"))
        ? []
        : [{ name: "README / 仓库首页", note: "即使 API 没抓到文件列表，也先从仓库首页说明开始。"}],
    )
    .slice(0, 4);
}

function deriveModules(data) {
  const modules = [];
  const fileMap = {
    "docs/": "文档与上手说明",
    "examples/": "示例与用法",
    "src/": "核心源码",
    "packages/": "多包结构",
    "app/": "产品主应用",
    "scripts/": "脚本与自动化",
    "tests/": "测试基线",
    "crates/": "Rust 核心模块",
  };

  data.rootFiles.forEach((file) => {
    if (fileMap[file]) modules.push(fileMap[file]);
  });

  if (modules.length < 3 && data.topics.length) {
    modules.push(...data.topics.slice(0, 4).map((topic) => topic.replace(/-/g, " ")));
  }

  return Array.from(new Set(modules)).slice(0, 5);
}

function buildSetupChecklist(data) {
  const files = data.rootFiles;
  const checklist = [];

  if (files.includes("package.json")) {
    checklist.push({
      label: "确认 Node.js 与包管理器版本",
      status: "must",
      note: "先看 README、package.json 或 lock 文件，不要凭感觉安装依赖。",
    });
  }

  if (files.includes("pnpm-lock.yaml") || files.includes("pnpm-workspace.yaml")) {
    checklist.push({
      label: "优先按 pnpm 工作区方式运行",
      status: "check",
      note: "Monorepo 往往对包管理器敏感，混用 npm / yarn 容易浪费时间。",
    });
  }

  if (files.includes("Cargo.toml") || files.includes("crates/")) {
    checklist.push({
      label: "确认 Rust 工具链是否必须",
      status: "watch",
      note: "如果只是改 docs 或 examples，未必需要先装完整 Rust 环境。",
    });
  }

  if (files.includes("docker-compose.yml")) {
    checklist.push({
      label: "看是否依赖 Docker 或本地服务",
      status: "must",
      note: "产品型仓库常依赖数据库、容器或多服务联调，先确认再开始。",
    });
  }

  if (files.includes("docs/") || data.readmeText.toLowerCase().includes("documentation")) {
    checklist.push({
      label: "先找文档预览或示例运行方式",
      status: "check",
      note: "第一次上手优先跑 demo、docs 或 examples，比直接读实现更省时间。",
    });
  }

  checklist.push({
    label: "确认测试与 lint 触发方式",
    status: "watch",
    note: "第一次 PR 最容易翻车的地方是没跑最小校验脚本。",
  });

  return checklist.slice(0, 5);
}

function personaSpecificPaths(data, persona, goal) {
  const type = inferProjectType(data);
  const personaInfo = personas.find((item) => item.id === persona);
  const goalInfo = goals.find((item) => item.id === goal);

  const basePaths = {
    beginner: {
      title: "从说明和示例先建地图",
      fit: "你现在最需要的是低压理解路径，而不是立刻碰核心代码。",
      steps: [
        "先读 README 和 CONTRIBUTING，确认项目边界、运行方式与维护节奏。",
        "再看 docs/、examples/ 或仓库首页的演示链接，建立真实使用画面。",
        "最后挑一个最小问题点，先做复现或文案级改动。",
      ],
      risk: "最常见的问题是刚读了一个目录就误以为自己已经理解全局。",
      reward: "能更快判断这个仓库适不适合继续投入。",
    },
    frontend: {
      title: "优先找界面、交互与示例体验切口",
      fit: `${type} 里最适合你的入口，多半是可见结果明确、容易验收的体验问题。`,
      steps: [
        "优先搜索 docs、demo、storybook、examples 或前端目录中的体验问题。",
        "锁定一个有截图、有复现路径、影响范围清楚的小问题。",
        "提交时把前后差异讲清楚，降低 reviewer 的理解成本。",
      ],
      risk: "看起来像样式小修，实际可能连带影响多个状态、主题或组件族。",
      reward: "你能更快做出可展示成果，也更容易被合并。",
    },
    backend: {
      title: "从运行链路、脚本和边界清晰的逻辑入口切入",
      fit: "先看脚本、配置与服务边界，比直接冲复杂核心逻辑更稳。",
      steps: [
        "先找启动脚本、配置文件和本地环境要求，明确数据流入口。",
        "优先处理文档不一致、配置说明缺失、脚本行为边界不清的问题。",
        "如果再往深处走，先做复现和最小验证，再考虑代码改动。",
      ],
      risk: "没有先跑通最小链路，就容易把环境问题误判成代码缺陷。",
      reward: "你会更像维护者一样理解这个仓库怎么真正跑起来。",
    },
    docs: {
      title: "把模糊说明变成更可执行的上手体验",
      fit: "文档贡献不是边角料，而是对新手门槛最直接的优化。",
      steps: [
        "对照 README、文档页和实际仓库结构，找描述不清或过时的地方。",
        "优先补步骤、示例、命令、截图或术语解释。",
        "提交前横向检查相邻页面，避免只修一处却留下不一致。",
      ],
      risk: "文档改动看似简单，但术语、版本和语气常常要统一。",
      reward: "这是最容易做成第一次 PR 的路径，也最容易积累信心。",
    },
    simple: {
      title: "先拿一个边界清楚的小胜利",
      fit: "你当前目标不是深入系统，而是完成一次低风险的真实贡献。",
      steps: [
        "只选一个问题，不同时碰功能、重构、样式和文档。",
        "优先改动可见、可验证、好解释的单点内容。",
        "把改动范围压小，让 reviewer 一眼看懂你到底做了什么。",
      ],
      risk: "最容易犯的错是顺手多改几处，结果把小修变成半个重构。",
      reward: "更容易被快速 review，也更适合作为第一次 PR。",
    },
  };

  const first = basePaths[persona] || basePaths.beginner;
  const second = {
    title:
      goalInfo.emphasis === "issue"
        ? "围绕 issue 反向挑入口"
        : goalInfo.emphasis === "decision"
          ? "先做投入判断，再决定是否下场"
          : goalInfo.emphasis === "map"
            ? "建立仓库地图优先"
            : "围绕第一次 PR 倒推路径",
    fit:
      goalInfo.emphasis === "issue"
        ? "这条路更关注 issue 的边界、标签与 reviewer 成本。"
        : goalInfo.emphasis === "decision"
          ? "这条路帮助你先评估复杂度、活跃度与成长回报。"
          : goalInfo.emphasis === "map"
            ? "这条路帮助你先读懂结构，再决定贡献动作。"
            : "这条路帮助你把第一次 PR 的成功率放在第一位。",
    steps: buildGoalSteps(goalInfo.emphasis, data),
    risk:
      goalInfo.emphasis === "decision"
        ? "如果只看 stars 很容易高估参与体验，真正的成本常在环境与 review 节奏。"
        : "如果只盯一个 issue 标题，不先看背景和关联目录，容易选错入口。",
    reward:
      goalInfo.emphasis === "map"
        ? "你会更快建立这个项目的阅读顺序。"
        : goalInfo.emphasis === "decision"
          ? "你会更理性地决定是否长期投入。"
          : "你会更接近一份能真正提交出去的首次贡献。",
  };

  return [first, second];
}

function buildGoalSteps(emphasis, data) {
  if (emphasis === "map") {
    return [
      "先看仓库描述、README 与根目录，判断它的产品边界和模块分层。",
      "再挑 3 到 4 个关键文件建立阅读顺序，不急着追完整源码。",
      "最后再决定自己要不要继续投入或试一小个贡献。",
    ];
  }

  if (emphasis === "issue") {
    return [
      "优先找带有 documentation、good first issue、help wanted 之类标签的问题。",
      "阅读 issue 时确认是否有复现步骤、影响范围和预期结果。",
      "没有清晰边界的 issue 先跳过，把时间放在更稳的切口上。",
    ];
  }

  if (emphasis === "decision") {
    return [
      "看 stars、最近更新时间、open issues 规模，先感受项目活跃度。",
      "结合运行成本和仓库体量，判断你能否在两次晚上投入里跑通最小链路。",
      "如果环境复杂度过高，就先从文档或示例问题热身，不必硬冲核心实现。",
    ];
  }

  return [
    "先确定一个最小贡献点，并找到它对应的文件、说明和 issue 背景。",
    "本地只跑与你改动相关的最小验证链路，不要一上来追全量通过。",
    "提交前把问题、修改范围和验证方式写清楚，降低被打回的概率。",
  ];
}

function pickIssues(data, persona, goal) {
  const desiredLabels =
    persona === "docs" || persona === "beginner" || persona === "simple"
      ? ["documentation", "good first issue", "help wanted"]
      : persona === "frontend"
        ? ["frontend", "ui", "bug", "components"]
        : ["backend", "bug", "enhancement", "needs reproduction"];

  const scored = data.issues.map((issue) => {
    const labels = (issue.labels || []).map((label) => label.name.toLowerCase());
    let score = issue.comments > 8 ? -1 : 1;
    desiredLabels.forEach((label) => {
      if (labels.includes(label)) score += 2;
    });
    if (goal === "find-issue" && labels.includes("good first issue")) score += 2;
    if (goal === "first-pr" && labels.includes("documentation")) score += 1;
    return { issue, score, labels };
  });

  const chosen = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ issue, labels }) => ({
      title: issue.title,
      url: issue.html_url || data.htmlUrl,
      meta: [
        issue.state || "open",
        `${issue.comments || 0} comments`,
        labels.slice(0, 2).join(" / ") || "no label",
      ],
      reason: buildIssueReason(labels, persona, goal),
      readFirst: suggestReadFirst(data, persona),
    }));

  if (chosen.length) return chosen;

  return [
    {
      title: "从文档或示例里找一个描述不清的小问题",
      url: data.htmlUrl,
      meta: ["fallback", "direction", inferProjectType(data)],
      reason: "当 issues 读取不到或标签不清楚时，文档与示例通常是最稳的贡献入口。",
      readFirst: suggestReadFirst(data, persona),
    },
    {
      title: "对照 README 与根目录，找命令、路径或术语不一致的地方",
      url: data.htmlUrl,
      meta: ["fallback", "docs", "safe"],
      reason: "这是对新手最友好的真实贡献类型，且验收标准清晰。",
      readFirst: suggestReadFirst(data, persona),
    },
  ];
}

function buildIssueReason(labels, persona, goal) {
  if (labels.includes("good first issue")) {
    return "它已经被维护者标成更适合新贡献者，进入成本会相对更低。";
  }
  if (persona === "frontend") {
    return "它更容易做出可见结果，也比较适合前端从体验问题切入。";
  }
  if (persona === "backend") {
    return "它偏向运行链路或逻辑问题，适合先从可复现边界切进来。";
  }
  if (goal === "worth-it") {
    return "它能帮助你判断这个仓库的 review 节奏和协作方式值不值得继续投入。";
  }
  return "它的范围相对可控，适合作为第一次理解项目或发起贡献的切口。";
}

function suggestReadFirst(data, persona) {
  const base = pickFirstFiles(data).map((item) => item.name);
  if (persona === "frontend" && data.rootFiles.includes("examples/")) base.unshift("examples/");
  if (persona === "backend" && data.rootFiles.includes("scripts/")) base.unshift("scripts/");
  return Array.from(new Set(base)).slice(0, 3);
}

function buildActionList(data, persona, goal, issues) {
  const focusIssue = issues[0];
  const firstFile = pickFirstFiles(data)[0]?.name || "README / 仓库首页";
  return [
    {
      title: "先把仓库边界讲人话",
      description: `先从 ${firstFile} 开始，用自己的话复述这个仓库解决什么问题、谁会用、你打算碰哪一小块。`,
      steps: [
        "看完仓库描述与 README 后，写一句你对项目定位的总结。",
        "确认这次只碰一个问题，不把贡献目标扩散。",
      ],
    },
    {
      title: "锁定一个低风险切口",
      description:
        focusIssue
          ? `当前更推荐你先围绕「${focusIssue.title}」这一类问题切。`
          : "如果暂时没有合适 issue，就从文档、示例或命令说明不一致的地方开始。",
      steps: [
        "先看 issue、README、对应目录是否能互相对上。",
        "确认是否能在 1 到 2 小时内完成最小改动和说明。",
      ],
    },
    {
      title: "只跑与你改动相关的最小验证",
      description:
        persona === "backend"
          ? "你优先确认启动链路、脚本或复现步骤是否成立。"
          : "你优先确认界面、文档或示例是否真的反映了你要修的问题。",
      steps: [
        "先别追全量环境成功，先跑最小页面、示例或脚本。",
        "把验证方式记录下来，PR 描述时可以直接复用。",
      ],
    },
    {
      title: goal === "worth-it" ? "做一次投入判断" : "准备提交 PR",
      description:
        goal === "worth-it"
          ? "如果环境成本或 review 节奏明显过重，可以先把这个仓库标记为以后再战。"
          : "把问题背景、改动范围和验证方式写得足够具体，让 reviewer 一眼看懂。",
      steps: [
        "不要顺手塞进无关重构或额外优化。",
        "如果需要，先开 draft PR 或 issue 评论确认方向。",
      ],
    },
  ];
}

function buildPitfalls(data, persona) {
  const pitfalls = [
    "不要把“看起来简单”误判成“影响范围一定小”，尤其是组件、脚本和配置相关改动。",
    "没先确认运行方式就动手，常常会把环境问题误当成仓库缺陷。",
    "第一次 PR 最容易失败在范围失控，而不是技术做不到。",
  ];

  if (!data.rootFiles.includes("CONTRIBUTING.md")) {
    pitfalls.push("仓库里没明显看到 CONTRIBUTING 指南时，要更主动地观察现有 PR 和 issue 的沟通方式。");
  }

  if (persona === "frontend") {
    pitfalls.push("体验类改动提交前，要明确说明影响状态、页面或组件边界，不要只说“看起来更好了”。");
  }

  if (persona === "docs") {
    pitfalls.push("文档改动不只是改一句话，术语、截图、命令和版本往往需要一起核对。");
  }

  if (data.warnings.length) {
    pitfalls.push("当前有部分 API 数据读取失败，所以这份建议里有一部分是启发式推断，提交前记得再人工核对。");
  }

  return pitfalls.slice(0, 4);
}

function buildSummary(data, persona, goal) {
  const type = inferProjectType(data);
  const personaInfo = personas.find((item) => item.id === persona);
  const goalInfo = goals.find((item) => item.id === goal);
  const readmeSentences = extractReadmeSentences(data.readmeText);
  const projectSentence = readmeSentences[0] || data.description;

  return {
    tagline: `${type} · ${data.language || "Mixed"} · ${personaInfo.title} / ${goalInfo.title}`,
    summary: `${projectSentence} ${personaInfo.summaryTone} ${
      goal === "worth-it"
        ? "你这次更该关注投入产出比，而不是盲目追求参与感。"
        : "目标不是把仓库一次看完，而是找到一条你真的能走下去的第一步。"
    }`,
    problem: projectSentence,
    users:
      goal === "worth-it"
        ? `如果你愿意投入到 ${inferProjectType(data)} 这类项目，并且能接受 ${data.openIssuesCount} 个 open issues 代表的协作复杂度，它值得继续观察。`
        : `如果你现在是以「${personaInfo.title}」进入开源，这个仓库更适合从 ${personaInfo.routeBias === "docs" ? "说明与示例" : personaInfo.routeBias === "ui" ? "界面与体验问题" : "运行链路与脚本"} 开始，不建议第一步就碰最核心实现。`,
  };
}

function buildAnalysis(rawData, persona, goal, meta = {}) {
  const summary = buildSummary(rawData, persona, goal);
  const files = pickFirstFiles(rawData);
  const issues = pickIssues(rawData, persona, goal);
  const analysis = {
    rawData,
    meta,
    repoName: rawData.fullName,
    summary,
    modules: deriveModules(rawData),
    files,
    setup: buildSetupChecklist(rawData),
    paths: personaSpecificPaths(rawData, persona, goal),
    issues,
    actions: buildActionList(rawData, persona, goal, issues),
    pitfalls: buildPitfalls(rawData, persona),
    exportText: buildExportText(rawData, persona, goal, summary, issues, files),
  };
  return analysis;
}

function buildExportText(data, persona, goal, summary, issues, files) {
  const personaTitle = personas.find((item) => item.id === persona)?.title || persona;
  const goalTitle = goals.find((item) => item.id === goal)?.title || goal;
  return [
    "RepoStart · 我的开源行动计划",
    `仓库: ${data.fullName}`,
    `链接: ${data.htmlUrl}`,
    `背景: ${personaTitle}`,
    `目标: ${goalTitle}`,
    "",
    "仓库速览",
    summary.summary,
    "",
    "优先阅读",
    ...files.map((item, index) => `${index + 1}. ${item.name} - ${item.note}`),
    "",
    "推荐方向",
    ...issues.map((item, index) => `${index + 1}. ${item.title} - ${item.reason}`),
    "",
    "提醒",
    `- 默认分支: ${data.defaultBranch}`,
    `- Stars: ${formatNumber(data.stars)}`,
    `- Open issues: ${formatNumber(data.openIssuesCount)}`,
    `- 数据来源: ${data.source === "live" ? "实时 GitHub API" : "Fallback mock 数据"}`,
  ].join("\n");
}

function commitAnalysis(analysis, shouldPersist = true) {
  state.currentAnalysis = analysis;
  state.currentExportText = analysis.exportText;
  renderReport(analysis);
  setStatus(
    analysis.rawData.source,
    analysis.rawData.source === "live" ? "已经生成实时报告" : "已切到 fallback 报告",
    analysis.rawData.source === "live"
      ? "GitHub API 已成功返回仓库数据，下面这份报告基于实时仓库信息和前端分析逻辑生成。"
      : "当前报告使用了内置 mock 或部分 fallback 数据，页面不会空掉，但建议你稍后再试一次实时分析。",
    [
      `${formatNumber(analysis.rawData.stars)} stars`,
      analysis.rawData.language || "Mixed language",
      `${analysis.rawData.defaultBranch} branch`,
      `${formatNumber(analysis.rawData.openIssuesCount)} open issues`,
    ],
  );
  renderLoading(loadingMessages.length, true);

  if (shouldPersist) {
    saveHistory(analysis);
  }
}

function renderReport(analysis) {
  $("repo-name").textContent = analysis.repoName;
  $("repo-tagline").textContent = analysis.summary.tagline;
  $("repo-summary").textContent = analysis.summary.summary;
  $("understand-problem").textContent = analysis.summary.problem;
  $("understand-users").textContent = analysis.summary.users;

  $("repo-stats").innerHTML = [
    ["Stars", formatNumber(analysis.rawData.stars)],
    ["Language", analysis.rawData.language || "Mixed"],
    ["Topics", analysis.rawData.topics.length ? analysis.rawData.topics.slice(0, 3).join(" / ") : "暂无 topic"],
    ["Default branch", analysis.rawData.defaultBranch],
    ["Open issues", formatNumber(analysis.rawData.openIssuesCount)],
    ["Updated", formatDate(analysis.rawData.updatedAt)],
  ]
    .map(
      ([label, value]) => `
        <article class="stat-card">
          <strong>${label}</strong>
          <span>${value}</span>
        </article>
      `,
    )
    .join("");

  $("understand-modules").innerHTML = analysis.modules
    .map((item) => `<span>${item}</span>`)
    .join("");

  $("priority-files").innerHTML = analysis.files
    .map(
      (item) => `
        <div class="file-item">
          <strong>${item.name}</strong>
          <span>${item.note}</span>
        </div>
      `,
    )
    .join("");

  $("path-grid").innerHTML = analysis.paths
    .map(
      (path) => `
        <article class="path-card">
          <p class="panel-kicker">Recommended path</p>
          <h4>${path.title}</h4>
          <p>${path.fit}</p>
          <ol>${path.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
          <div class="path-footer">
            <div><strong>风险点</strong><p>${path.risk}</p></div>
            <div><strong>做完会得到什么</strong><p>${path.reward}</p></div>
          </div>
        </article>
      `,
    )
    .join("");

  $("check-grid").innerHTML = analysis.setup
    .map(
      (item) => `
        <article class="check-item">
          <div>
            <strong>${item.label}</strong>
            <p>${item.note}</p>
          </div>
          <span class="status-pill ${item.status}">${statusText(item.status)}</span>
        </article>
      `,
    )
    .join("");

  $("issue-list").innerHTML = analysis.issues
    .map(
      (item) => `
        <article class="issue-item">
          <div class="issue-top">
            <div>
              <h4>${item.title}</h4>
              <p>${item.reason}</p>
            </div>
            <div class="issue-meta">
              ${item.meta.map((meta) => `<span>${meta}</span>`).join("")}
            </div>
          </div>
          <div class="chip-row">${item.readFirst.map((part) => `<span>${part}</span>`).join("")}</div>
          <a href="${item.url}" target="_blank" rel="noreferrer">查看这个入口</a>
        </article>
      `,
    )
    .join("");

  $("action-grid").innerHTML = analysis.actions
    .map(
      (item) => `
        <article class="action-item">
          <strong>${item.title}</strong>
          <p>${item.description}</p>
          <ol>${item.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </article>
      `,
    )
    .join("");

  $("pitfall-grid").innerHTML = analysis.pitfalls
    .map(
      (item, index) => `
        <article class="pitfall-card">
          <p class="panel-kicker">Pitfall 0${index + 1}</p>
          <p>${item}</p>
        </article>
      `,
    )
    .join("");

  $("export-card").innerHTML = `
    <p class="small-label">可复制摘要</p>
    <pre>${escapeHtml(analysis.exportText)}</pre>
  `;
}

function statusText(status) {
  if (status === "must") return "必须先确认";
  if (status === "check") return "建议先检查";
  return "容易踩坑";
}

function formatNumber(value) {
  const numeric = Number(value || 0);
  if (numeric >= 1000000) return `${(numeric / 1000000).toFixed(1).replace(/\.0$/, "")}m`;
  if (numeric >= 1000) return `${(numeric / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(numeric);
}

function formatDate(value) {
  if (!value) return "未知";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "未知";
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveHistory(analysis) {
  const history = loadHistory().filter((item) => item.repoName !== analysis.repoName);
  history.unshift({
    repoName: analysis.repoName,
    repoUrl: analysis.rawData.htmlUrl,
    persona: state.selectedPersona,
    goal: state.selectedGoal,
    routeTitle: analysis.paths[0]?.title || "",
    summary: analysis.summary.summary,
    source: analysis.rawData.source,
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
  renderHistory();
}

function renderHistory() {
  const history = loadHistory();
  if (!history.length) {
    $("history-grid").innerHTML = `<div class="empty-state">还没有保存记录。先分析一个仓库，这里会留下最近的开源行动计划。</div>`;
    return;
  }

  $("history-grid").innerHTML = history
    .map(
      (item) => `
        <article class="history-card">
          <p class="panel-kicker">${item.source === "live" ? "实时分析" : "fallback 记录"}</p>
          <h3>${item.repoName}</h3>
          <p>${item.summary}</p>
          <div class="chip-row">
            <span>${personas.find((p) => p.id === item.persona)?.title || item.persona}</span>
            <span>${goals.find((g) => g.id === item.goal)?.title || item.goal}</span>
          </div>
          <div class="history-actions">
            <button type="button" data-history-url="${item.repoUrl}" data-history-persona="${item.persona}" data-history-goal="${item.goal}">重新打开</button>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll("[data-history-url]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPersona = button.dataset.historyPersona;
      state.selectedGoal = button.dataset.historyGoal;
      $("repo-url").value = button.dataset.historyUrl;
      renderChoiceControls();
      analyzeRepository(button.dataset.historyUrl);
    });
  });
}

async function copyPlan() {
  if (!state.currentExportText) return;
  try {
    await navigator.clipboard.writeText(state.currentExportText);
    setStatus(
      state.currentAnalysis?.rawData.source || "live",
      "已复制行动计划",
      "“我的开源行动计划”已经复制到剪贴板，你可以直接发给自己、贴进备忘录或 PR 草稿里。",
      [
        state.currentAnalysis?.repoName || "RepoStart",
        personas.find((item) => item.id === state.selectedPersona)?.title || "",
        goals.find((item) => item.id === state.selectedGoal)?.title || "",
      ].filter(Boolean),
    );
  } catch {
    setStatus("error", "复制失败", "当前浏览器可能不支持剪贴板接口，请手动复制下方摘要卡片。");
  }
}

async function analyzeRepository(inputValue, options = {}) {
  const parsed = parseGitHubUrl(inputValue);
  if (!parsed) {
    renderLoading();
    setStatus("error", "链接格式不对", "请输入标准 GitHub 仓库链接，例如 https://github.com/owner/repo");
    return;
  }

  renderLoading(0);
  setStatus("live", "正在读取仓库", "先尝试走 GitHub API，如果失败会自动降级，不会让页面空掉。", [
    parsed.owner,
    parsed.repo,
  ]);

  const matchedSample = getSampleByParsed(parsed);

  try {
    renderLoading(1);
    const repositoryPayload = options.forceSample && matchedSample
      ? matchedSample.fallback
      : await fetchRepositoryData(parsed.owner, parsed.repo);

    renderLoading(2);
    const normalized = normalizeRepositoryData(
      repositoryPayload,
      options.forceSample ? "mock" : "live",
    );
    renderLoading(3);
    const analysis = buildAnalysis(normalized, state.selectedPersona, state.selectedGoal, {
      warnings: normalized.warnings,
    });
    renderLoading(4);
    commitAnalysis(analysis, true);
    $("report").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    const sample = matchedSample;
    if (sample) {
      const normalized = normalizeRepositoryData(sample.fallback, "mock");
      normalized.warnings = [
        error.rateLimit
          ? "GitHub API 达到 rate limit，当前展示的是内置示例数据。"
          : "GitHub API 请求失败，当前展示的是内置示例数据。",
      ];
      const analysis = buildAnalysis(normalized, state.selectedPersona, state.selectedGoal, {
        fallbackReason: error.message,
      });
      commitAnalysis(analysis, true);
      $("report").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const generic = {
      repo: {
        full_name: `${parsed.owner}/${parsed.repo}`,
        html_url: parsed.url,
        description: "GitHub API 当前不可用，以下报告基于通用开源仓库启发式模板生成。",
        stargazers_count: 0,
        language: "Mixed",
        topics: [],
        default_branch: "main",
        open_issues_count: 0,
        watchers_count: 0,
        forks_count: 0,
        homepage: "",
        updated_at: new Date().toISOString(),
      },
      readme:
        "Fallback analysis mode. Check repository homepage, README, contribution guide, and examples first. Start with a small, low-risk contribution.",
      issues: [],
      rootFiles: ["README.md", "CONTRIBUTING.md", "docs/", "src/"],
      warnings: [
        error.rateLimit
          ? "GitHub API rate limit 已触发，当前报告是通用 fallback 版本。"
          : "GitHub API 请求失败，当前报告是通用 fallback 版本。",
      ],
    };

    const normalized = normalizeRepositoryData(generic, "mock");
    const analysis = buildAnalysis(normalized, state.selectedPersona, state.selectedGoal, {
      fallbackReason: error.message,
    });
    commitAnalysis(analysis, true);
    $("report").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function bindEvents() {
  $("analyze-btn").addEventListener("click", () => {
    analyzeRepository($("repo-url").value);
  });

  $("copy-plan-btn").addEventListener("click", copyPlan);

  $("repo-url").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      analyzeRepository($("repo-url").value);
    }
  });
}

function bootstrap() {
  renderChoiceControls();
  renderLoading();
  renderHistory();
  bindEvents();

  const initialSample = sampleRepos[0];
  const initialData = normalizeRepositoryData(initialSample.fallback, "mock");
  const initialAnalysis = buildAnalysis(initialData, state.selectedPersona, state.selectedGoal);
  commitAnalysis(initialAnalysis, false);
}

bootstrap();
