export const LANGS = ["en", "ru", "ja"] as const
export type Lang = (typeof LANGS)[number]

export const LANG_LABELS: Record<Lang, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  ru: { short: "RU", name: "Русский" },
  ja: { short: "日本", name: "日本語" },
}

export type BuildKey =
  | "games"
  | "promo"
  | "realtime"
  | "bots"
  | "telephony"
  | "admin"
  | "integrations"

export type Content = {
  meta: { title: string; description: string }
  name: string
  role: string
  experience: string
  tagline: string
  status: string
  ui: {
    print: string
    theme: string
    language: string
    writeTelegram: string
    generatedWithAI: string
  }
  sections: {
    about: string
    build: string
    how: string
    stack: string
    learning: string
    languages: string
    education: string
  }
  build: Record<BuildKey, { title: string; text: string }>
  how: { title: string; text: string }[]
  nda: string
  stackGroups: {
    daily: string
    frontend: string
    data: string
    infra: string
    platforms: string
    past: string
  }
  learning: { rust: string; japanese: string; gamedev: string }
  languages: { name: string; level: string; value: number }[]
  education: { title: string; detail: string }[]
  cta: { title: string; text: string }
}

const en: Content = {
  meta: {
    title: "Andrei Volzhin — Backend Engineer",
    description:
      "Backend Engineer · 10+ years in production · 5+ years of Go. Game backends, promo campaigns, real-time, bots, telephony.",
  },
  name: "Andrei Volzhin",
  role: "Backend Engineer",
  experience: "10+ years in production · 5+ years of Go",
  tagline:
    "I build backends that survive launch day — and then stay boringly quiet.",
  status: "Open to opportunities",
  ui: {
    print: "Print / save as PDF",
    theme: "Toggle theme",
    language: "Language",
    writeTelegram: "Message me on Telegram",
    generatedWithAI: "Generated with AI",
  },
  sections: {
    about: "About",
    build: "What I build",
    how: "How I work",
    stack: "Tech stack",
    learning: "Currently learning",
    languages: "Languages",
    education: "Education",
  },
  build: {
    games: {
      title: "Game backends",
      text: "Game engines and server-side logic, real-time state over WebSockets. Next level: the client side too.",
    },
    promo: {
      title: "Promo campaigns",
      text: "Backends built for traffic spikes, when the whole audience shows up in the first hour.",
    },
    realtime: {
      title: "Real-time",
      text: "WebSockets and Centrifugo for live updates, chats and notifications.",
    },
    bots: {
      title: "Bots & Mini Apps",
      text: "Telegram and VK bots, Telegram Mini App backends.",
    },
    telephony: {
      title: "Telephony",
      text: "VoIP solutions on Asterisk: call flows, integrations with CRMs and business logic.",
    },
    admin: {
      title: "Admin panels",
      text: "React + TypeScript dashboards for the systems I build, so the client never has to touch the database.",
    },
    integrations: {
      title: "Integrations",
      text: "Payments, CRMs, SMS, LLM APIs, and whatever API the client found last week.",
    },
  },
  how: [
    {
      title: "Modular monolith first",
      text: "Clear module boundaries without paying the microservice tax too early. Splitting things up is easy when the boundaries are already there.",
    },
    {
      title: "Contract-first APIs",
      text: "ConnectRPC: typed end to end, from Go to TypeScript.",
    },
    {
      title: "Infrastructure as code",
      text: "Terraform, Kubernetes, or plain Docker Compose — whatever the project actually needs.",
    },
    {
      title: "AI-assisted development",
      text: "LLMs are part of my daily toolkit: boilerplate, tests, refactoring, docs. The AI types faster; the architecture and the responsibility stay with me.",
    },
    {
      title: "Success = silence",
      text: "My favourite projects are the ones where nothing went down and nobody filed a single “it doesn't work” ticket for the whole lifetime of the project.",
    },
  ],
  nda: "Most of my work is commercial and under NDA, so the GitHub green squares tell only part of the story. Happy to talk through architecture and past cases in a call.",
  stackGroups: {
    daily: "Daily drivers",
    frontend: "Frontend (admin panels)",
    data: "Data & real-time",
    infra: "Infrastructure",
    platforms: "Platforms",
    past: "Also touched over the years",
  },
  learning: {
    rust: "currently negotiating with the borrow checker",
    japanese: "a little every day",
    gamedev:
      "been running game servers for years, now building the game itself",
  },
  languages: [
    { name: "Russian", level: "Native", value: 100 },
    { name: "English", level: "Intermediate", value: 60 },
    { name: "Japanese", level: "Learning", value: 20 },
  ],
  education: [
    {
      title: "South Ural State University",
      detail: "Faculty of Applied Mathematics and Informatics",
    },
    {
      title: "Professional courses",
      detail: "Go · Asterisk · DevOps, Docker, Kubernetes",
    },
  ],
  cta: {
    title: "Got a project that must not fall over?",
    text: "Write to me on Telegram — let's talk.",
  },
}

const ru: Content = {
  meta: {
    title: "Андрей Волжин — Backend-инженер",
    description:
      "Backend-инженер · 10+ лет в продакшене · 5+ лет на Go. Игровые бэкенды, промо-акции, real-time, боты, телефония.",
  },
  name: "Андрей Волжин",
  role: "Backend-инженер",
  experience: "10+ лет в продакшене · 5+ лет на Go",
  tagline:
    "Делаю бэкенды, которые переживают день запуска — а потом скучно и тихо работают.",
  status: "Открыт к предложениям",
  ui: {
    print: "Печать / сохранить в PDF",
    theme: "Сменить тему",
    language: "Язык",
    writeTelegram: "Написать в Telegram",
    generatedWithAI: "Сгенерировано с помощью AI",
  },
  sections: {
    about: "Обо мне",
    build: "Что я делаю",
    how: "Как я работаю",
    stack: "Стек",
    learning: "Сейчас изучаю",
    languages: "Языки",
    education: "Образование",
  },
  build: {
    games: {
      title: "Игровые бэкенды",
      text: "Игровые движки и серверная логика, real-time состояние через WebSocket. Следующий уровень — клиентская часть.",
    },
    promo: {
      title: "Промо-акции",
      text: "Бэкенды под пиковые нагрузки, когда вся аудитория приходит в первый же час.",
    },
    realtime: {
      title: "Real-time",
      text: "WebSocket и Centrifugo для живых обновлений, чатов и уведомлений.",
    },
    bots: {
      title: "Боты и Mini Apps",
      text: "Боты для Telegram и VK, бэкенды для Telegram Mini Apps.",
    },
    telephony: {
      title: "Телефония",
      text: "VoIP-решения на Asterisk: сценарии звонков, интеграции с CRM и бизнес-логикой.",
    },
    admin: {
      title: "Админ-панели",
      text: "Дашборды на React + TypeScript для систем, которые я строю, — чтобы клиенту никогда не приходилось лезть в базу.",
    },
    integrations: {
      title: "Интеграции",
      text: "Платежи, CRM, SMS, LLM API — и любой API, который клиент нашёл на прошлой неделе.",
    },
  },
  how: [
    {
      title: "Сначала модульный монолит",
      text: "Чёткие границы модулей без преждевременного налога на микросервисы. Разделить систему легко, когда границы уже проведены.",
    },
    {
      title: "Contract-first API",
      text: "ConnectRPC: строгая типизация от начала до конца — от Go до TypeScript.",
    },
    {
      title: "Инфраструктура как код",
      text: "Terraform, Kubernetes или просто Docker Compose — то, что реально нужно проекту.",
    },
    {
      title: "Разработка с ИИ",
      text: "LLM — часть моего ежедневного инструментария: бойлерплейт, тесты, рефакторинг, документация. ИИ печатает быстрее, а архитектура и ответственность остаются за мной.",
    },
    {
      title: "Успех = тишина",
      text: "Мои любимые проекты — те, где ничего не падало и никто ни разу не написал «у меня не работает» за всё время жизни проекта.",
    },
  ],
  nda: "Большая часть моей работы — коммерческая и под NDA, поэтому зелёные квадратики на GitHub рассказывают лишь часть истории. С радостью обсужу архитектуру и прошлые кейсы на созвоне.",
  stackGroups: {
    daily: "Каждый день",
    frontend: "Фронтенд (админки)",
    data: "Данные и real-time",
    infra: "Инфраструктура",
    platforms: "Платформы",
    past: "Работал в разные годы",
  },
  learning: {
    rust: "пока договариваюсь с borrow checker",
    japanese: "понемногу каждый день",
    gamedev: "годами держу игровые серверы, теперь делаю саму игру",
  },
  languages: [
    { name: "Русский", level: "Родной", value: 100 },
    { name: "Английский", level: "Средний (Intermediate)", value: 60 },
    { name: "Японский", level: "Изучаю", value: 20 },
  ],
  education: [
    {
      title: "Южно-Уральский государственный университет",
      detail: "Факультет прикладной математики и информатики",
    },
    {
      title: "Курсы повышения квалификации",
      detail: "Go · Asterisk · DevOps, Docker, Kubernetes",
    },
  ],
  cta: {
    title: "Есть проект, который не должен падать?",
    text: "Пишите в Telegram — обсудим.",
  },
}

const ja: Content = {
  meta: {
    title: "アンドレイ・ヴォルジン — バックエンドエンジニア",
    description:
      "バックエンドエンジニア・本番運用10年以上・Go歴5年以上。ゲームバックエンド、プロモーション、リアルタイム、ボット、電話システム。",
  },
  name: "アンドレイ・ヴォルジン",
  role: "バックエンドエンジニア",
  experience: "本番運用 10年以上 · Go 5年以上",
  tagline:
    "ローンチ当日を乗り越え、その後は退屈なほど静かに動き続けるバックエンドを作っています。",
  status: "お仕事のご相談受付中",
  ui: {
    print: "印刷 / PDFで保存",
    theme: "テーマ切替",
    language: "言語",
    writeTelegram: "Telegramで連絡する",
    generatedWithAI: "AIで生成",
  },
  sections: {
    about: "自己紹介",
    build: "つくっているもの",
    how: "仕事の進め方",
    stack: "技術スタック",
    learning: "勉強中",
    languages: "言語",
    education: "学歴",
  },
  build: {
    games: {
      title: "ゲームバックエンド",
      text: "ゲームエンジンとサーバーサイドロジック、WebSocketによるリアルタイムな状態管理。次のステップはクライアント側も。",
    },
    promo: {
      title: "プロモーションキャンペーン",
      text: "開始1時間でユーザーが一斉に押し寄せる、急激なトラフィックに耐えるバックエンド。",
    },
    realtime: {
      title: "リアルタイム",
      text: "WebSocketとCentrifugoによるライブ更新、チャット、通知。",
    },
    bots: {
      title: "ボット & ミニアプリ",
      text: "Telegram・VKのボット、Telegram Mini Appのバックエンド。",
    },
    telephony: {
      title: "電話システム",
      text: "AsteriskによるVoIPソリューション：通話フロー、CRMやビジネスロジックとの連携。",
    },
    admin: {
      title: "管理画面",
      text: "自分が構築したシステム向けのReact + TypeScriptダッシュボード。クライアントがデータベースに触れる必要はありません。",
    },
    integrations: {
      title: "外部連携",
      text: "決済、CRM、SMS、LLM API、そしてクライアントが先週見つけてきたあらゆるAPI。",
    },
  },
  how: [
    {
      title: "まずはモジュラーモノリス",
      text: "明確なモジュール境界を保ちつつ、早すぎるマイクロサービス化のコストは払わない。境界さえあれば、分割はいつでも簡単です。",
    },
    {
      title: "コントラクトファーストAPI",
      text: "ConnectRPCでGoからTypeScriptまで端から端まで型安全に。",
    },
    {
      title: "Infrastructure as Code",
      text: "Terraform、Kubernetes、あるいはシンプルなDocker Compose — プロジェクトに本当に必要なものを。",
    },
    {
      title: "AIを活用した開発",
      text: "LLMは日常のツールの一部：ボイラープレート、テスト、リファクタリング、ドキュメント。タイピングはAIの方が速いですが、設計と責任は自分が持ちます。",
    },
    {
      title: "成功 = 静けさ",
      text: "一番好きなプロジェクトは、一度も落ちず、運用期間中に「動かない」という報告が一件もなかったものです。",
    },
  ],
  nda: "仕事の大半は商用案件で秘密保持契約（NDA）下にあるため、GitHubの草はストーリーの一部にすぎません。設計や過去の事例については、通話で喜んでお話しします。",
  stackGroups: {
    daily: "日常的に使用",
    frontend: "フロントエンド（管理画面）",
    data: "データ & リアルタイム",
    infra: "インフラ",
    platforms: "プラットフォーム",
    past: "これまでに触れた技術",
  },
  learning: {
    rust: "ボローチェッカーと交渉中",
    japanese: "毎日少しずつ",
    gamedev: "長年ゲームサーバーを運用してきて、今はゲームそのものを開発中",
  },
  languages: [
    { name: "ロシア語", level: "ネイティブ", value: 100 },
    { name: "英語", level: "中級", value: 60 },
    { name: "日本語", level: "勉強中", value: 20 },
  ],
  education: [
    {
      title: "南ウラル国立大学",
      detail: "応用数学・情報学部",
    },
    {
      title: "専門講座",
      detail: "Go · Asterisk · DevOps, Docker, Kubernetes",
    },
  ],
  cta: {
    title: "落ちてはいけないプロジェクトがありますか？",
    text: "Telegramでお気軽にご連絡ください。",
  },
}

export const CONTENT: Record<Lang, Content> = { en, ru, ja }

export const TELEGRAM_URL = "https://t.me/pasokon"
export const GITHUB_URL = "https://github.com/xjl0"

type Tech = { name: string; color: string }

export const STACK: { group: keyof Content["stackGroups"]; items: Tech[] }[] = [
  {
    group: "daily",
    items: [
      { name: "Go", color: "#00ADD8" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "ConnectRPC", color: "#5A4FCF" },
      { name: "Terraform", color: "#7B42BC" },
      { name: "AI-assisted dev", color: "#888888" },
    ],
  },
  { group: "frontend", items: [{ name: "React", color: "#61DAFB" }] },
  {
    group: "data",
    items: [
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MySQL", color: "#4479A1" },
      { name: "Redis", color: "#DC382D" },
      { name: "Centrifugo", color: "#FF6B35" },
      { name: "WebSockets", color: "#888888" },
    ],
  },
  {
    group: "infra",
    items: [
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Docker Compose", color: "#2496ED" },
      { name: "Caddy", color: "#1F88C0" },
      { name: "Portainer", color: "#13BEF9" },
    ],
  },
  {
    group: "platforms",
    items: [
      { name: "Telegram Bots & Mini Apps", color: "#26A5E4" },
      { name: "VK Bots", color: "#0077FF" },
      { name: "Asterisk VoIP", color: "#F68F1E" },
    ],
  },
  {
    group: "past",
    items: [
      { name: "Python", color: "#3776AB" },
      { name: "PHP", color: "#777BB4" },
      { name: "Angular", color: "#DD0031" },
      { name: "Svelte", color: "#FF3E00" },
      { name: "Astro", color: "#BC52EE" },
    ],
  },
]

export const GO_SNIPPET = `type Engineer struct {
	Name       string
	Role       string
	Experience map[string]string
	Loves      []string
	PairsWith  string
	Learning   []string
	KPI        string
}

var me = Engineer{
	Name:       "Andrei Volzhin",
	Role:       "Backend Engineer",
	Experience: map[string]string{"backend": "10+ years", "go": "5+ years"},
	Loves:      []string{"clean modules", "boring deploys", "empty bug trackers"},
	PairsWith:  "LLMs // they write the boilerplate, I review every line",
	Learning: []string{
		"Rust",     // currently negotiating with the borrow checker
		"日本語",    // 毎日少しずつ — a little every day
		"GameDev",  // been running game servers for years, now building the game itself
	},
	KPI:        "zero incidents, zero 'it's slow' tickets",
}`
