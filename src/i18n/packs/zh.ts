import {
  BRAND_NAME,
  COMPANY_NAME,
  PRODUCT_NAME,
  SIGNUP_PATH,
} from "@/lib/constants";
import type { ContentPack } from "../types";

export const zh: ContentPack = {
  ui: {
    backToHome: "返回首页",
    billingPeriod: "计费周期",
    monthly: "按月",
    yearly: "按年",
    twoMonthsFree: "免两个月",
    individuals: "个人",
    forTeams: "团队",
    allDocs: "全部文档",
    documentation: "文档",
    privacyFooterBefore: "我们只用运行产品所需的信息。详见",
    privacyFooterLink: "隐私",
    language: "语言",
    skipToContent: "跳到正文",
    homeCrumb: "首页",
    shortVersion: "简要说明",
    contactHeading: "联系",
    changesHeading: "变更",
    legalLabel: "法律",
    bestFor: "适合:",
    homeAria: "Refract 首页",
    openMenu: "打开菜单",
    githubHeading: "GitHub",
    connectHeading: "连接",
  },
  seo: {
    defaultTitle: "Refract — AI 写好了。让它真正能上线。",
    defaultDescription: "Refract 把 AI 生成的代码，变成更干净、更一致、真正能维护的软件。",
    ogTitle: "AI 写好了。让它真正能上线。",
    ogDescription: "生成之后的那一步。Refract 清理并收紧 AI 生成的代码，让你继续上线。",
    ogImageAlt: "Refract — AI 写完代码之后的那一步。",
    jsonLdDescription: "Refract 把 AI 生成的代码，变成更干净、更一致、真正能维护的软件。",
  },
  nav: {
    marketingLinks: [
      { label: "产品", href: "/product" },
      { label: "定价", href: "/pricing" },
      { label: "文档", href: "/docs" },
    ],
    footerSections: [
      {
        title: "产品",
        links: [
          { label: "产品", href: "/product" },
          { label: "定价", href: "/pricing" },
          { label: "安全", href: "/security" },
        ],
      },
      {
        title: "文档",
        links: [
          { label: "快速开始", href: "/docs/getting-started" },
          { label: "批准", href: "/docs/approve" },
          { label: "常见问题", href: "/docs/faq" },
          { label: "全部文档", href: "/docs" },
        ],
      },
      {
        title: "公司",
        links: [
          { label: "关于", href: "/about" },
          { label: "联系我们", href: "/contact" },
        ],
      },
      {
        title: "法律",
        links: [
          { label: "隐私", href: "/privacy" },
          { label: "条款", href: "/terms" },
        ],
      },
    ],
    footerBrandLine: "Refract — AI 写完代码之后的那一步。",
    footerFinePrint: "面向 GitHub 上的 React 和 TypeScript。",
    githubAppLabel: "连接 GitHub",
    discordLabel: "Discord",
    signIn: "登录",
    getStarted: "开始使用",
  },
  brand: {
    attribution: `${PRODUCT_NAME} 由 ${COMPANY_NAME} 旗下的 ${BRAND_NAME} 打造。`,
    copyrightLine: `${BRAND_NAME}，${COMPANY_NAME} 旗下公司。`,
    operatorSentence: `${PRODUCT_NAME} 是 ${COMPANY_NAME} 旗下 ${BRAND_NAME} 的产品。`,
    about: {
      title: `关于 — ${PRODUCT_NAME}`,
      description: `${PRODUCT_NAME} 是 AI 写完代码之后的那一步。它是 ${COMPANY_NAME} 旗下 ${BRAND_NAME} 的产品。`,
      label: "公司",
      headline: PRODUCT_NAME,
      intro: `${PRODUCT_NAME} 在 GitHub 拉取请求上审查 AI 生成的代码，安全时准备清理，并等待你批准。`,
      sections: [
        {
          title: "谁在做",
          body: `${PRODUCT_NAME} 是 ${COMPANY_NAME} 旗下 ${BRAND_NAME} 的产品。`,
        },
      ],
      founder: {
        label: "背后的人",
        name: "Adilson Lopes",
        role: "Lintel 创始人 · Refract 的创造者",
        story:
          "Refract 由 Adilson Lopes 打造，他也是 Lintel 的创始人。他来自安哥拉，现居葡萄牙。他围绕一个简单的判断在做这件事：AI 改变了软件的写法，用来保住这份软件的工具——审阅、清理、让它继续长——也必须跟着变。",
        company: "Lintel 是 Refract 背后的公司。",
        linkedinLabel: "LinkedIn",
      },
    },
  },
  home: {
    seo: {
      title: "Refract — AI 写好了。让它真正能上线。",
      description: "Refract 把 AI 生成的代码，变成更干净、更有条理的软件——赶在混乱变成项目之前。",
      ogTitle: "AI 写好了。让它真正能上线。",
      ogDescription: "生成之后的那一步。Refract 清理并收紧 AI 生成的代码，让你继续上线。",
    },
    hero: {
      pill: { label: "在 GitHub Check 上批准", href: "/docs/approve" },
      headline: "AI 写好了。让它真正能上线。",
      subhead:
        "Refract 把你的 AI 工具写出的代码，变成更干净、更一致、更好维护的软件——这样项目长大时才不会散架。",
      primary: { label: "开始使用", href: SIGNUP_PATH },
      secondary: { label: "了解原理", href: "/product" },
      trust: "每一处改动都由你批准。Refract 绝不会自行改写你的项目。",
      caption: "在它变成代码库之前",
      stack: "React · TypeScript · GitHub",
    },
    problem: {
      headline: "能跑的代码，仍然可能是一团乱。",
      bullets: [
        "同样的行为被复制，而不是被共享",
        "界面代码在做不该由它做的事",
        "只在当时说得通的残留 State 和 Effects",
        "对单个文件合理、对一个产品不合理的结构",
      ],
      close: "你需要的不是更多生成代码。你需要的是，生成出来的代码一直保持良好。",
    },
    turn: {
      headline: "Refract 就是 AI 写完代码之后发生的事。",
      lede: "不是又一份抱怨清单。而是一个更干净的项目。",
      more: { label: "了解原理", href: "/product" },
    },
    result: {
      headline: "结果是你能留下来的代码。",
      points: [
        {
          title: "更干净",
          body: "明显的混乱会被<strong>从界面里抽出来</strong>，放到它该在的地方。",
        },
        {
          title: "更一致",
          body: "<strong>重复的逻辑不再成倍增加。</strong>项目开始像一个产品，而不是十二份初稿。",
        },
        {
          title: "更好改",
          body: "你可以<strong>加上下一件东西</strong>，而不必穿过没人打算建出来的迷宫。",
        },
        {
          title: "仍然是你的",
          body: "<strong>你点头之前，什么都不会改。</strong>你会看到将要发生什么。合并按钮还在你手里。",
        },
      ],
    },
    does: {
      headline: "它不只是指出问题。它让代码变得更好。",
      more: { label: "查看产品", href: "/product" },
      points: [
        {
          number: "1",
          title: "先了解这个项目",
          body: "Refract 看的是软件实际怎么拼起来的——不只是最后改过的那个文件——所以清理会贴合你已有的项目。",
        },
        {
          number: "2",
          title: "找出 AI 常常留下的乱",
          body: "被复制的逻辑。写在界面里的数据请求。没人用的 State。拖着不走的 Effects。应用一长大就会疼的结构。",
        },
        {
          number: "3",
          title: "告诉你先清理什么",
          body: "问题不止一个时，你会得到说得通的顺序——不是一堵噪音墙。",
        },
        {
          number: "4",
          title: "可以替你做清理",
          body: "当改动安全且范围可控时，Refract 会准备好。你批准。它应用改动，并检查项目是否仍然站得住。如果不能安全地改，它会直说，而不是猜。",
        },
      ],
    },
    world: {
      headline: "它出现在代码即将变成项目的地方。",
      lede: "连接你在意的仓库。有新代码被提出时，Refract 就地审查。",
      caption: "一个结果。由你决定。",
      decide: "你会得到一个清楚的结果：",
      close: "在 GitHub 上批准。留在你已有的流程里。Refract 不会让你再住进第二个收件箱。",
    },
    trust: {
      headline: "每一次改动都由你批准。",
      points: [
        {
          title: "由你批准。",
          body: "你动手之前，Refract 绝不会应用改动。",
        },
        {
          title: "宁可沉默，也不说错。",
          body: "如果它无法证明有问题，就不会为了显得忙碌而编造一个。",
        },
        {
          title: "不能安全清理时，不会假装能。",
          body: "你得到的是解释，不是鲁莽的重写。",
        },
        {
          title: "它会检查自己的工作。",
          body: "清理落地后，Refract 会再看一遍。失败的清理绝不会被说成成功。",
        },
        {
          title: "它不是在改写你应用的聊天机器人。",
          body: "它应用的清理具体且有边界。创造性的猜测不是“修复”。",
        },
      ],
    },
    steps: {
      headline: "三步。然后它在你工作时运行。",
      note: "安装应用不等于登录。你的 Refract 账户和 GitHub 访问权限被有意分开。",
      cta: { label: "开始使用", href: SIGNUP_PATH },
      steps: [
        {
          number: "1",
          title: "创建账户",
          body: "邮箱和密码。这是你的 Refract 登录方式——不是用 GitHub 登录。",
        },
        {
          number: "2",
          title: "连接 GitHub 并选择仓库",
          body: "在你想清理的项目上安装 Refract 应用。选哪些，由你决定。",
        },
        {
          number: "3",
          title: "继续上线",
          body: "像往常一样打开拉取请求。Refract 在项目上下文中阅读这次改动。如果清理已准备好，你批准。准备好了再合并。",
        },
      ],
    },
    audience: {
      headline: "给用 AI 构建、却仍要和结果一起生活的人。",
      points: [
        {
          title: "个人",
          body: "你在用 Copilot、Cursor 或下一个模型交付产品。代码来得很快。你希望它仍然是你能维护的东西。",
        },
        {
          title: "团队",
          body: "好几个人同时在生成。仓库是共享记忆。Refract 让这份记忆保持连贯。",
        },
        {
          title: "为今天而建",
          body: "GitHub 上的 React 和 TypeScript。眼下这个问题在这里最响。其他技术栈等真正就绪再来——不会当成首页上的承诺。",
        },
      ],
    },
    ships: {
      headline: "更新",
      more: { label: "查看文档", href: "/docs" },
      items: [
        { date: "2026年8月", title: "在 GitHub Check 上批准", href: "/docs/approve" },
        { date: "2026年8月", title: "加入 Discord", href: "https://discord.gg/SH787P4rP4" },
        { date: "2026年8月", title: "登录后连接 GitHub", href: "/docs/connect-github" },
      ],
    },
    social: {
      headline: "加入社区",
      line: "提问、分享 pull request，和其他用 Refract 的人待在一起。",
      discord: {
        kicker: "Discord",
        title: "和其他 builder 聊天",
        body: "给早期团队、产品问题、以及 pull request 上出问题的地方。",
        cta: "加入 Discord",
      },
      github: {
        kicker: "GitHub",
        title: "在 Refract 中连接",
        body: "先注册登录。App 在引导流程中安装，以便与你的账号关联。",
        cta: "开始使用",
      },
    },
    honesty: {
      headline: "Refract 不是什么。",
      paragraphs: [
        "它不是 IDE。它不是你的 AI 编程工具的替代品。它不是通用的代码检查器。它不是在每一行留下二十条评论的机器人。",
        "它不会一夜之间重组整个产品。它不会自动修好每一个安全问题。它不会替你合并。",
        "它会让 React 和 TypeScript 项目中由 AI 生成的部分更干净、更清楚、更好维护——主导权在你。",
      ],
    },
    cta: {
      headline: "AI 写好了。让它真正能上线。",
      body: "创建账户，连接 GitHub，让 Refract 把初稿带到后半程。",
      primary: { label: "开始使用", href: SIGNUP_PATH },
      secondary: { label: "查看定价", href: "/pricing" },
    },
  },
  product: {
    seo: {
      title: "Refract 如何工作 — 在 GitHub 上清理 AI 代码",
      description: "Refract 在 GitHub 拉取请求上审查 AI 生成的代码，在安全时准备清理，并等待你的批准。",
      ogTitle: "Refract 如何工作",
      ogDescription: "连接 GitHub。继续上线。Refract 在安全时清理 AI 生成的代码——动手前会先问你。",
    },
    hero: {
      headline: "从生成的代码，到你能留下来的代码。",
      subhead: "Refract 阅读项目，找出将会变乱的地方，并准备好由你批准的清理。做决定时不必离开 GitHub。",
      cta: { label: "开始使用", href: SIGNUP_PATH },
    },
    loop: {
      headline: "一个简单的循环",
      beats: [
        {
          number: "1",
          title: "看清整个项目",
          body: "Refract 把软件当作整体来看，这样一处界面上的改动也能尊重其余部分。",
        },
        {
          number: "2",
          title: "找出以后会疼的东西",
          body: "它寻找代码被快速生成时出现的模式：被复制的逻辑、缠在一起的界面、残留的 State、经不起时间的结构。如果代码里留下了敏感内容——比如凭证——它会告诉你。它不会悄悄“修好”密钥。",
        },
        {
          number: "3",
          title: "能清理的就清理",
          body: "清理安全时，你会得到一处具体改动来批准。不安全时，你会得到清楚的解释，而不是猜测。",
        },
        {
          number: "4",
          title: "检查，然后记住",
          body: "你批准后，Refract 应用改动并再看一遍。随着时间推移，你能看到项目是在变干净，还是仍在把混乱送上线。",
        },
      ],
    },
    places: {
      headline: "在 GitHub 上做决定。其余用网站。",
      close: "网站不是第二个接受清理的地方。决定留在代码旁边。",
      github: {
        title: "在 GitHub 上",
        items: ["在拉取请求上查看结果", "批准一次清理", "不适用时忽略", "准备好了再合并"],
      },
      web: {
        title: "在网站上",
        items: ["创建账户", "连接 GitHub App", "选择仓库", "随时间查看已连接的内容"],
      },
    },
    results: {
      headline: "你会看到几种诚实结果中的一种",
      items: [
        { title: "仍在工作", body: "请等待。这不是通过。" },
        { title: "看起来没问题", body: "这次改动不需要你处理 Refract 的事项。" },
        { title: "清理已就绪", body: "一处安全的清理已准备好。在 GitHub 上批准。" },
        {
          title: "请看一眼",
          body: "有重要的东西，而 Refract 不会替你改。请阅读说明。",
        },
        {
          title: "出了问题",
          body: "分析失败了。Refract 会直说。它不会刷出假的成功。",
        },
      ],
    },
    cleans: {
      headline: "“更干净”在实践中意味着什么",
      body: "在 React 和 TypeScript 项目上，Refract 尤其擅长处理快速生成留下的东西：",
      bullets: [
        "数据请求混进了界面",
        "同一段逻辑写了两遍",
        "从未真正被使用的 State",
        "不会自我清理的 Effects",
        "边缘缺少超时和错误处理",
        "界面在做本该别处完成的工作",
      ],
      close: "其中一些，它可以替你清理。其中一些，它只会指出——这是故意的。一次糟糕的自动重写，比一条诚实的说明更糟。",
    },
    start: {
      headline: "大约十分钟即可开始",
      steps: ["创建账户", "安装 GitHub App 并选择仓库", "打开一个拉取请求"],
      note: "连接 GitHub 不会让你登录 Refract，登录 Refract 也不会安装 GitHub 访问权限。两步，两件事。",
      cta: { label: "创建账户", href: SIGNUP_PATH },
    },
    faqs: [
      {
        q: "这会和我的 AI 工具打架吗？",
        a: "不会。继续生成。Refract 是让结果保持可维护的那一遍。",
      },
      {
        q: "它会在我不在场时改代码吗？",
        a: "不会。你批准。你合并。",
      },
      {
        q: "我必须学一个新的工作区吗？",
        a: "不必。日常你仍待在 GitHub 上。",
      },
    ],
  },
  pricing: {
    seo: {
      title: "定价 — Refract | Free、$12 Starter、$24 Pro",
      description: "Free $0。Starter $12。Pro $24/月。Ultimate $49。团队方案从 $149 起。免费开始——注册时不会扣款。",
      ogTitle: "Refract 定价 — Free 到 Pro $24/月",
      ogDescription: "Free $0。Starter $12。Pro $24/月。团队从 $149 起。结账即将上线；注册时不会扣款。",
    },
    hero: {
      headline: "为更干净的软件付费——不是为更多噪音。",
      subhead: "从一个真实仓库开始。当项目——或团队——需要更大空间时再升级。",
      priceLine: "Free $0。Starter $12。Pro $24/月。Ultimate $49。团队从 $149 起。",
      banner: "今天就免费开始。列出付费方案，是为了让你知道接下来往哪走。结账即将上线；注册时不会扣款。",
    },
    individualPlans: [
      {
        name: "Free",
        monthlyPrice: "$0",
        yearlyPrice: "$0",
        period: "",
        yearlyPeriod: "",
        description: "在真实项目上试用 Refract。",
        features: ["2 个仓库", "每月 50 次审查", "每月 5 次可批准的清理", "GitHub 上的建议结果"],
        cta: "开始使用",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "在自己的代码上亲眼看看",
      },
      {
        name: "Starter",
        monthlyPrice: "$12",
        yearlyPrice: "$120",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "给每天在少量项目上使用 AI 的独立开发者。",
        features: ["5 个仓库", "每月 150 次审查", "在该审查额度内无限清理", "最多 2 个仓库可设为必需检查"],
        cta: "开始使用",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "一个人，几个活跃仓库",
      },
      {
        name: "Pro",
        monthlyPrice: "$24",
        yearlyPrice: "$240",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "给用 AI 交付真实产品的人。",
        features: [
          "15 个仓库",
          "每月 400 次审查",
          "在该审查额度内无限清理",
          "每个已连接仓库都可设为必需检查",
          "随时间变干净的完整历史",
        ],
        cta: "开始使用",
        href: SIGNUP_PATH,
        badge: "最受欢迎",
        bestFor: "默认方案",
        highlight: true,
      },
      {
        name: "Ultimate",
        monthlyPrice: "$49",
        yearlyPrice: "$490",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "给管理许多仓库或客户项目的运营者。",
        features: ["40 个仓库", "每月 1,000 次审查", "在该审查额度内无限清理", "优先审查", "完整保护选项"],
        cta: "开始使用",
        href: SIGNUP_PATH,
        badge: null,
        bestFor: "许多项目，一位运营者",
      },
    ],
    teamPlans: [
      {
        name: "Team",
        monthlyPrice: "$149",
        yearlyPrice: "$1,490",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "一家小公司，一个 GitHub 组织，日常使用 AI。",
        features: ["10 人", "30 个仓库", "1 个 GitHub 组织", "每月 1,000 次审查"],
        cta: "联系我们",
        href: "/contact",
        badge: null,
        bestFor: "一家小公司",
      },
      {
        name: "Business",
        monthlyPrice: "$399",
        yearlyPrice: "$3,990",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "更多服务、更大用量、真正的商务关系。",
        features: ["30 人", "100 个仓库", "2 个 GitHub 组织", "每月 4,000 次审查", "优先审查", "入门通话"],
        cta: "联系我们",
        href: "/contact",
        badge: null,
        bestFor: "更大用量",
      },
      {
        name: "Scale",
        monthlyPrice: "$999",
        yearlyPrice: "$9,990",
        period: "/ 月",
        yearlyPeriod: "/ 年",
        description: "多个项目、高用量，以及一位了解你账户的对接人。",
        features: ["75 人", "250 个仓库", "5 个 GitHub 组织", "每月 12,000 次审查"],
        cta: "联系我们",
        href: "/contact",
        badge: null,
        bestFor: "高用量",
      },
      {
        name: "Enterprise",
        monthlyPrice: "$2,500 起",
        yearlyPrice: "$2,500 起",
        period: "/ 月",
        yearlyPeriod: "/ 月",
        description: "当你需要合同、自定义额度或安全审查时。",
        features: [],
        cta: "联系我们",
        href: "/contact",
        badge: null,
        bestFor: "合同与自定义额度",
        custom: true,
      },
    ],
    footnote:
      "按年付相当于免两个月。“审查”指每次分析拉取请求上的新代码。无限清理仍受该月审查额度约束。",
    value: {
      headline: "你付的不是评论。",
      paragraphs: [
        "你付的是：在继续生成的同时，项目仍然可维护。",
        "Free 让你在真实仓库上感受到一次真正的清理。Pro 让这变成日常。团队方案让一群同时生成的人，不会把仓库变成十二种初稿风格。",
        "我们不会因为一次改动是健康的而额外收费。沉默也是产品的一部分。",
      ],
    },
    faqs: [
      {
        q: "今天能付款吗？",
        a: "创建账户并开始即可。银行卡结账正在推出。注册时不会突然扣款。",
      },
      {
        q: "包含 GitHub 吗？",
        a: "不包含。GitHub 是分开的。Refract 是我们的。",
      },
      {
        q: "达到额度会怎样？",
        a: "你会看到明确的升级提示。我们不会悄悄停下，还假装一切正常。",
      },
      {
        q: "Pro 按人头收费吗？",
        a: "不。个人方案按仓库数和每月审查次数定价，不按有多少人敲过键盘。",
      },
      {
        q: "能用在公司仓库上吗？",
        a: "可以，只要你能在那里安装 GitHub Apps。共享账单和席位请用 Team，或联系我们。",
      },
      {
        q: "Free 上接受 / 清理是锁定的吗？",
        a: "Free 每月包含少量清理，让你感受到真正的产品——而不是永远不改代码的演示。",
      },
    ],
  },
  docs: {
    seo: {
      title: "文档 — Refract",
      description: "创建 Refract 账户，连接 GitHub，并在你已经打开的拉取请求上开始清理 AI 生成的代码。",
    },
    headline: "文档",
    intro: "使用 Refract 所需的一切。",
    groups: [
      {
        title: "从这里开始",
        numbered: true,
        links: [
          { label: "快速开始", href: "/docs/getting-started" },
          { label: "创建账户", href: "/docs/account" },
          { label: "连接 GitHub", href: "/docs/connect-github" },
          { label: "第一次清理", href: "/docs/first-cleanup" },
        ],
      },
      {
        title: "使用 Refract",
        links: [
          { label: "拉取请求上你会看到什么", href: "/docs/on-github" },
          { label: "批准或忽略", href: "/docs/approve" },
          { label: "网站", href: "/docs/web" },
          { label: "仓库", href: "/docs/repositories" },
        ],
      },
      {
        title: "参考",
        links: [
          { label: "常见问题", href: "/docs/faq" },
          { label: "安全", href: "/security" },
          { label: "额度", href: "/docs/limits" },
          { label: "故障排除", href: "/docs/troubleshooting" },
        ],
      },
    ],
    pages: [
      {
        slug: "getting-started",
        title: "快速开始",
        description: "创建账户，连接 GitHub，打开一个拉取请求。大约 10 分钟。",
        blocks: [
          { type: "lede", text: "大约 10 分钟。" },
          {
            type: "p",
            text: "你需要一个 GitHub 账户、一个可以连接的 React / TypeScript 仓库，以及一个邮箱地址。",
          },
          { type: "h2", text: "1. 创建账户" },
          {
            type: "p",
            text: "前往开始使用。姓名、邮箱、密码。如果我们要求，请确认邮箱，然后登录。",
          },
          { type: "p", text: "这不是“使用 GitHub 登录”。" },
          { type: "h2", text: "2. 连接 GitHub" },
          {
            type: "p",
            text: "你会来到“连接 GitHub”。安装 GitHub App，选择账户和仓库，回来后再选择 Refract 应监视哪些项目。",
          },
          {
            type: "p",
            text: "在完成之前，主要界面会保持关闭。这是故意的。",
          },
          { type: "h2", text: "3. 打开一个拉取请求" },
          {
            type: "p",
            text: "在已连接的仓库上打开一个 PR。等待 Refract。如果清理已就绪，在 GitHub 上批准。",
          },
          { type: "h2", text: "4. 需要更长视角时再使用网站" },
          {
            type: "p",
            text: "概览显示已连接的内容。日常你仍待在拉取请求上。",
          },
          {
            type: "html",
            html: '下一步：<a href="/docs/connect-github">连接 GitHub</a> · <a href="/docs/first-cleanup">第一次清理</a>',
          },
        ],
      },
      {
        slug: "account",
        title: "你的 Refract 账户",
        description: "用姓名、邮箱和密码注册。GitHub 是单独的一步。",
        blocks: [
          { type: "p", text: "用姓名、邮箱和密码注册。" },
          { type: "html", html: '从 <a href="/login">登录</a> 进入。' },
          {
            type: "p",
            text: "忘记密码：如果该地址有账户，我们会发送重置链接。",
          },
          { type: "p", text: "在应用中退出登录。" },
          {
            type: "p",
            text: "这个账户不是 GitHub 权限。连接仓库是单独的一步。",
          },
          {
            type: "p",
            text: "在 设置 → 账户 中，可以编辑我们在产品里显示的名称。",
          },
        ],
      },
      {
        slug: "connect-github",
        title: "连接 GitHub",
        description: "安装 GitHub App，以便 Refract 读取拉取请求、发布一条结果，并在你批准后应用清理。",
        blocks: [
          {
            type: "p",
            text: "Refract 需要 GitHub App 来读取拉取请求、发布一条结果，并且——只有在你批准之后——应用清理。",
          },
          {
            type: "html",
            html: `<ol>
          <li>登录 Refract</li>
          <li>打开“连接 GitHub”</li>
          <li>从应用内安装 GitHub App — 不要从本站安装 — 以便与你的账号关联</li>
          <li>选择特定仓库（推荐）</li>
          <li>返回 Refract，确认要监视哪些</li>
        </ol>`,
          },
          { type: "h2", text: "已安装与必需" },
          {
            type: "p",
            text: "已连接意味着 Refract 会审查新代码。它本身不会阻止合并。如果希望 GitHub 等待 Refract，那是你在 GitHub 里设置的必需检查——我们可以在设置里指给你。安装过程中我们绝不会替你打开它。",
          },
          { type: "h2", text: "卸载" },
          {
            type: "p",
            text: "在 GitHub → 设置 → Applications 中移除该 App。Refract 将停止监视这些仓库。",
          },
        ],
      },
      {
        slug: "first-cleanup",
        title: "第一次清理",
        description: "打开一个拉取请求，等待 Refract，并在 GitHub 上批准清理。",
        blocks: [
          {
            type: "p",
            text: "开始前：已创建账户，已连接 GitHub，并至少选择了一个 React / TypeScript 仓库。",
          },
          {
            type: "ol",
            items: [
              "打开一个拉取请求",
              "在 Checks 中找到 Refract",
              "等到它完成——进行中不是成功",
              "阅读简短结果",
            ],
          },
          { type: "h2", text: "如果清理已就绪" },
          {
            type: "p",
            text: "在检查上批准。Refract 把改动应用到分支。它再看一遍。合并仍由你来做。",
          },
          { type: "h2", text: "如果它请你看一眼" },
          {
            type: "p",
            text: "它发现了不会自动改的东西。阅读说明。自己修，或先放下——由你决定。",
          },
          { type: "h2", text: "如果出了问题" },
          {
            type: "p",
            text: "我们会直说。推送一个小提交再试。我们不会展示假的绿色结果。",
          },
        ],
      },
      {
        slug: "on-github",
        title: "在 GitHub 上",
        description: "一次检查。一条摘要评论，就地更新——不是一堆机器人噪音。",
        blocks: [
          {
            type: "p",
            text: "一次检查。一条摘要评论，就地更新——不是一堆机器人噪音。",
          },
          {
            type: "p",
            text: "检查可能仍在工作、看起来没问题、有清理就绪、请你看一眼，或报告错误。",
          },
          {
            type: "p",
            text: "清理就绪时，检查上会出现接受（和忽略）。",
          },
          { type: "h2", text: "必需检查" },
          {
            type: "p",
            text: "可选。若希望合并等待，在 GitHub 分支规则中设置。连接应用不会替你完成这一步。",
          },
        ],
      },
      {
        slug: "approve",
        title: "批准或忽略",
        description: "批准会在 GitHub 上应用清理。忽略表示你选择不应用。",
        blocks: [
          {
            type: "p",
            text: "这发生在 GitHub 上、Refract 的检查里——不是网站上的主按钮。",
          },
          { type: "h2", text: "批准" },
          {
            type: "p",
            text: "把准备好的清理应用到分支。检查会再跑一遍。准备好了再合并。这不是自动合并。",
          },
          { type: "h2", text: "忽略" },
          {
            type: "p",
            text: "在你理解说明并选择不应用时使用。它不是对整个项目的永久“永远忽略”。",
          },
          { type: "h2", text: "当批准不见了" },
          {
            type: "p",
            text: "没有安全的自动清理。阅读说明；如果检查失败，就等待。",
          },
        ],
      },
      {
        slug: "web",
        title: "网站",
        description: "设置完成后，网站显示已连接的内容。批准仍发生在 GitHub 上。",
        blocks: [
          { type: "p", text: "设置完成后，你会看到：" },
          {
            type: "html",
            html: "<p><strong>概览</strong> — 已连接的内容，以及之后关于项目是否在变干净的简单图景。早期账户往往历史很少。这是诚实，不是坏了。</p>",
          },
          {
            type: "html",
            html: "<p><strong>仓库</strong> — 你选择的项目。</p>",
          },
          {
            type: "html",
            html: "<p><strong>拉取请求</strong> — 最近的结果，用来回忆。实时批准仍发生在 GitHub 上。</p>",
          },
          {
            type: "html",
            html: "<p><strong>洞察</strong> — 有足够历史之后的长期模式。我们不会编一个分数来显得健康。</p>",
          },
          {
            type: "html",
            html: "<p><strong>设置</strong> — 账户、哪些仓库，以及每个仓库被对待的严格程度。结账上线后，账单会放在这里。</p>",
          },
          { type: "p", text: "网站不是第二个接受收件箱。" },
        ],
      },
      {
        slug: "repositories",
        title: "仓库",
        description: "安装 App 授予权限。选择仓库决定 Refract 监视什么。",
        blocks: [
          { type: "p", text: "从一个活跃的产品仓库开始。之后可在设置中添加更多。" },
          {
            type: "p",
            text: "在 GitHub 上安装 App 授予权限。在 Refract 中选择仓库决定产品监视什么。两者都需要。",
          },
          { type: "h2", text: "语言" },
          {
            type: "p",
            text: "最擅长 React / TypeScript。其他技术栈可能覆盖很少，甚至没有。我们宁愿直说，也不假装有把握。",
          },
        ],
      },
      {
        slug: "limits",
        title: "额度",
        description: "Refract 擅长什么——以及它不会假装能做什么。",
        blocks: [
          {
            type: "p",
            text: "Refract 擅长处理 AI 生成的 React 和 TypeScript 中出现的具体混乱——以及在清理安全时把它应用上去。",
          },
          {
            type: "p",
            text: "它不保证找出每一个缺陷。它不是完整的人工审查。它不是对你架构的重建。",
          },
          {
            type: "p",
            text: "如果我们无法证明问题，我们就保持沉默。如果无法安全清理，我们就不会提供批准。",
          },
          {
            type: "html",
            html: '非常大的改动可能更久。方案额度见 <a href="/pricing">定价</a> 页。',
          },
        ],
      },
      {
        slug: "troubleshooting",
        title: "故障排除",
        description: "常见的设置和 GitHub 检查问题，以及如何摆脱卡住。",
        blocks: [
          { type: "h2", text: "我总是被送到“连接 GitHub”" },
          {
            type: "p",
            text: "在 App 已安装、并且在 Refract 中至少选择了一个仓库之前，设置不算完成。",
          },
          { type: "h2", text: "GitHub 账户不对" },
          {
            type: "p",
            text: "从已登录到拥有这些仓库的账户的浏览器会话中安装。",
          },
          { type: "h2", text: "检查始终不出现" },
          {
            type: "p",
            text: "确认仓库既已在 GitHub 上安装，又已在 Refract 中选中。等一分钟。刷新 Checks。",
          },
          { type: "h2", text: "批准没有任何效果" },
          {
            type: "p",
            text: "使用检查上的操作，而不只是评论。确认 App 仍有写入权限。GitHub 分支规则可能阻止应用——阅读 GitHub 的错误信息。",
          },
          { type: "h2", text: "重置邮件一直没到" },
          { type: "p", text: "检查垃圾邮件。确认地址。再试一次。" },
          { type: "h2", text: "仍然卡住" },
          {
            type: "html",
            html: '通过 <a href="/contact">联系我们</a> 说明：你期望什么、实际发生了什么、拉取请求链接，以及时间（含时区）。',
          },
        ],
      },
    ],
  },
  faq: {
    seo: {
      title: "常见问题 — Refract",
      description: "关于 Refract 是什么、它如何在 GitHub 上工作、信任、账户和定价的解答。",
    },
    title: "常见问题",
    groups: [
      {
        title: "产品",
        items: [
          {
            q: "Refract 是什么？",
            a: "AI 写完代码之后的那一步。它把生成的软件变成更干净、更好维护的代码——就在你已经打开的 GitHub 拉取请求上。",
          },
          {
            q: "这是 AI 审查器吗？",
            a: "不是。它不是在你的代码差异上留下长文的聊天机器人。它寻找具体的混乱，加以解释，并在可以时准备好由你批准的清理。",
          },
          {
            q: "它会让我的代码更好，还是只会唠叨？",
            a: "清理安全时，它可以在你批准后应用。不安全时，它会告诉你。目的是更好的项目，不是更长的评论串。",
          },
          {
            q: "能和 Cursor / Copilot / ChatGPT 一起用吗？",
            a: "能，而且是唯一重要的那种能：那些工具写入 GitHub。Refract 监视结果。我们不必住在你的编辑器里。",
          },
          {
            q: "支持哪些语言？",
            a: "首先是 React 和 TypeScript。其他技术栈不是一声不响的“可以”。",
          },
          {
            q: "它能替代代码审查吗？",
            a: "不能。它从你盘子里拿走一类可维护性问题，好让人去审查仍然需要人的工作。",
          },
        ],
      },
      {
        title: "信任",
        items: [
          {
            q: "它能不问就改我的仓库吗？",
            a: "不能。",
          },
          {
            q: "你们会合并我的拉取请求吗？",
            a: "不会。批准清理，然后由你合并。",
          },
          {
            q: "你们会用我们的代码训练模型吗？",
            a: '不会。我们不会用你的仓库训练模型。拉取请求内容只会发给模型服务商，用于审查该改动并准备你批准的清理。我们不出售你的代码。见 <a href="/security">安全</a>。',
          },
          {
            q: "如果它错了呢？",
            a: "它宁可漏过，也不编造。你可以忽略一次清理。改动成为项目的一部分之前，你总能看见。",
          },
        ],
      },
      {
        title: "账户",
        items: [
          {
            q: "我用 GitHub 登录吗？",
            a: "不用。Refract 用邮箱和密码。GitHub 访问是你安装的 App。",
          },
          {
            q: "为什么要两步？",
            a: "登录和授予仓库访问是不同的事。分开能让权限更清楚。",
          },
          {
            q: "不接 GitHub 能试用吗？",
            a: "你可以创建账户。在连接仓库之前，产品保持关闭——否则没有可清理的东西。",
          },
        ],
      },
      {
        title: "费用",
        items: [
          {
            q: "定价已经生效了吗？",
            a: "方案是真实的。银行卡结账正在推出。免费开始。",
          },
        ],
      },
      {
        title: "公司",
        items: [
          {
            q: "谁在做 Refract？",
            a: "Refract 由 Lintel 旗下的 Devrefract 打造。Lintel 是母公司，一家科技公司。Devrefract 打造开发者技术。Refract 是其当前产品。",
          },
        ],
      },
    ],
  },
  legal: {
    security: {
      title: "安全 — Refract",
      description: "Refract 如何访问 GitHub、在拉取请求上读什么，以及未经你批准绝不会做的事。",
      headline: "你的代码。你的批准。没有静默操作。",
      paragraphs: [
        "你用邮箱和密码登录 Refract。",
        "GitHub 访问仅限于你安装的 App，以及你允许的仓库。",
        "我们读取拉取请求以便审查。我们发布一条结果。我们只在你批准后应用清理。",
        "我们不会替你合并。",
        "我们不会仅为打开网站而用 GitHub 让你登录。",
        "我们不会把你的仓库当作商品出售。",
        "审查失败时，我们不会假装成功。",
        "如果在拉取请求中看到凭证，我们会告诉你。请轮换任何已暴露的内容。",
        "你可以卸载 GitHub App，并收窄我们能看到的仓库。",
      ],
      operator: `${PRODUCT_NAME} 是 ${COMPANY_NAME} 旗下 ${BRAND_NAME} 的产品。`,
      reportLabel: "报告问题",
      reportHtml: `使用 <a href="/contact">联系我们</a> 并选择安全。我们会优先处理。`,
    },
    contact: {
      title: "联系我们 — Refract",
      description: "关于 Refract、早期团队、账单，或拉取请求上出了问题的疑问。",
      headline: "联系我们",
      intro: "关于 Refract、早期团队、账单，或拉取请求上出了问题的疑问。",
      fields: {
        name: "姓名",
        email: "邮箱",
        topic: "主题",
        message: "留言",
        link: "仓库或拉取请求链接（可选）",
      },
      topics: ["产品", "账单", "安全", "其他"],
      submit: "发送留言",
      success: "谢谢——我们会回复到该邮箱。",
      error: "出了问题。请再试一次。",
      bugs: "报告缺陷时，请写上你期望什么、实际发生了什么、拉取请求链接，以及时间。",
    },
    privacy: {
      title: "隐私 — Refract",
      description: "Refract 收集什么、如何通过 GitHub App 处理仓库访问，以及如何就隐私问题联系我们。",
      headline: "隐私",
      updated: "最近更新：2026 年 8 月 16 日",
      short: [
        "网站账户：邮箱和密码。",
        "代码访问：仅通过 GitHub App，限于你允许的仓库。",
        "我们处理拉取请求内容，用于审查、应用你批准的清理，以及在产品中向你展示历史。",
        "我们不会替你合并。",
        "我们不会出售你的仓库内容。",
      ],
      collectHeadline: "我们收集什么",
      collect: "账户邮箱和姓名。GitHub 安装与仓库选择。审查结果，以及产品所需的历史。",
      operator: `${PRODUCT_NAME} 是 ${COMPANY_NAME} 旗下 ${BRAND_NAME} 的产品。`,
      contactHtml: `隐私问题请通过 <a href="/contact">联系我们</a>。`,
      changes: "本政策变更时，我们会更新本页和日期。",
    },
    terms: {
      title: "条款 — Refract",
      description: "Refract 的使用条款：账户、GitHub 访问、批准、套餐，以及我们对你的代码会做什么、不会做什么。",
      headline: "条款",
      updated: "最近更新：2026 年 8 月 16 日",
      operator: `${PRODUCT_NAME} 是 ${COMPANY_NAME} 旗下 ${BRAND_NAME} 的产品。`,
      short: [
        "只连接你有权连接的仓库。",
        "每一次清理都由你批准。Refract 不会替你合并，也不会自行改写项目。",
        "代码访问仅通过 GitHub App，且仅限你允许的仓库。",
        "代码仍归你所有。我们不出售仓库内容。",
        "免费开始。结账即将上线；注册时不会扣费。",
      ],
      sections: [
        {
          title: "这些条款",
          paragraphs: [
            "当你使用 Refract（网站、产品和 GitHub App）时，适用这些条款。若不同意，请不要使用产品。",
            "GitHub 仍适用 GitHub 的条款。这些条款覆盖 Refract。",
          ],
        },
        {
          title: "产品",
          paragraphs: [
            "Refract 会审查拉取请求，查找让 AI 生成代码难以长期维护的模式。清理安全时，会准备一项供你在 GitHub 上批准的改动；不安全时会说明。审查失败时，不会假装成功。",
            "Refract 不能替代人工审查、你的编辑器或 GitHub。它不会替你合并。",
          ],
        },
        {
          title: "你的账户",
          paragraphs: [
            "你用电子邮箱和密码创建账户。你对该账户负责。请自行保管密码。",
            "若你为组织使用 Refract，即确认你有权连接其仓库，并有权代表该组织接受这些条款。",
          ],
        },
        {
          title: "GitHub 与你的仓库",
          paragraphs: [
            "GitHub 访问仅限你安装的 App，以及你允许的仓库。我们不会仅为打开网站而用 GitHub 登录。",
            "你声明有权连接这些仓库。若无权，请不要连接。",
            "你可以随时卸载 GitHub App，或缩小我们可见的仓库范围。",
          ],
        },
        {
          title: "批准",
          paragraphs: [
            "我们处理拉取请求内容，用于审查、应用你批准的清理，以及在产品中展示历史。",
            "清理只有在你于 GitHub 上批准后才会落地。决定留在代码旁边。你仍对合并的内容负责。",
          ],
        },
        {
          title: "可接受的使用",
          paragraphs: [
            "不要连接你无权连接的代码。不要试图破坏、抓取或过载服务。不要用 Refract 隐藏恶意软件，或对已暴露的凭据置之不理。",
            "若我们在拉取请求中看到凭据，会告知你。轮换已暴露的凭据由你负责。",
          ],
        },
        {
          title: "套餐与计费",
          paragraphs: [
            "套餐与限额见定价页。免费套餐用于在真实仓库上试用 Refract。",
            "付费套餐已列出，方便你了解后续方向。结账即将上线；注册时不会扣费。开始计费时，网站和结账页会在你付款前说明。",
          ],
        },
        {
          title: "你的代码",
          paragraphs: [
            "代码仍归你所有。连接仓库不会把所有权转让给我们。",
            "我们不出售你的仓库内容，也不将其当作产品来用。",
            "Refract 名称、网站和产品归 Lintel 旗下的 Devrefract 所有。",
          ],
        },
        {
          title: "可用性",
          paragraphs: [
            "我们努力让 Refract 保持运行。我们不保证它始终可用，也不保证每次审查都完整或正确。",
            "请把结果当作仍需你判断的内容。Refract 是工具，不是保证。",
          ],
        },
        {
          title: "若出现问题",
          paragraphs: [
            "Refract 按现状提供。在法律允许的范围内，我们不对因使用或不使用产品而产生的利润损失、代码丢失、延误或其他间接损害承担责任。",
          ],
        },
        {
          title: "停止使用",
          paragraphs: [
            "你可以随时停止使用 Refract。卸载 GitHub App 即可切断对你仓库的访问。",
            "若你违反这些条款或滥用服务，我们可以暂停或终止访问。账户问题请通过联系我们。",
          ],
        },
      ],
      contactHtml: `法律问题请通过 <a href="/contact">联系我们</a>。`,
      changes: "这些条款变更时，我们会更新本页和日期。若你在变更后继续使用 Refract，即表示接受更新后的条款。",
    },
    notFound: {
      title: "页面未找到 — Refract",
      description: "这个页面不在这里。",
      headline: "这个页面不存在。",
      body: "链接有误，或页面已移动。",
      cta: "返回首页",
    },
  },
};
