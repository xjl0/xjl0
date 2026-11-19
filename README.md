<div align="center">

# Hi, I'm Andrei 👋 <sub>こんにちは！</sub>

**Backend Engineer · 10+ years in production · 5+ years of Go**

I build backends that survive launch day — and then stay boringly quiet.

<a href="https://t.me/pasokon"><img alt="Telegram" src="https://img.shields.io/badge/Telegram-@pasokon-26A5E4?style=flat-square&logo=telegram&logoColor=white"></a>
<img alt="Status" src="https://img.shields.io/badge/status-open_to_opportunities-2EA043?style=flat-square">

</div>

---

```go
type Engineer struct {
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
	},
	KPI:        "zero incidents, zero 'it's slow' tickets",
}
```

### What I build

- 🎮 **Game backends** — game engines and server-side logic, real-time state over WebSockets.
- 🎁 **Promo campaigns** — backends built for traffic spikes, when the whole audience shows up in the first hour.
- ⚡ **Real-time** — WebSockets and [Centrifugo](https://centrifugal.dev) for live updates, chats and notifications.
- 🤖 **Bots & Mini Apps** — Telegram and VK bots, Telegram Mini App backends.
- ☎️ **Telephony** — VoIP solutions on Asterisk: call flows, integrations with CRMs and business logic.
- 🛠️ **Admin panels** — React + TypeScript dashboards for the systems I build, so the client never has to touch the database.
- 🔌 **Integrations** — payments, CRMs, SMS, LLM APIs, and whatever API the client found last week.

### How I work

- **Modular monolith first.** Clear module boundaries without paying the microservice tax too early. Splitting things up is easy when the boundaries are already there.
- **Contract-first APIs** with [ConnectRPC](https://connectrpc.com): typed end to end, from Go to TypeScript.
- **Infrastructure as code.** Terraform, Kubernetes, or plain Docker Compose — whatever the project actually needs.
- **AI-assisted development.** LLMs are part of my daily toolkit: boilerplate, tests, refactoring, docs. The AI types faster; the architecture and the responsibility stay with me.
- **Success = silence.** My favourite projects are the ones where nothing went down and nobody filed a single "it doesn't work" ticket for the whole lifetime of the project.

> Most of my work is commercial and under NDA, so the green squares tell only part of the story.
> Happy to talk through architecture and past cases in a call.

### Tech stack

**Daily drivers**

<p>
  <img alt="Go" src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="ConnectRPC" src="https://img.shields.io/badge/ConnectRPC-5A4FCF?style=flat-square">
  <img alt="Terraform" src="https://img.shields.io/badge/Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white">
  <img alt="AI-assisted development" src="https://img.shields.io/badge/AI--assisted_dev-🧠-111111?style=flat-square">
</p>

**Frontend (admin panels)**

<p>
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB">
</p>

**Data & real-time**

<p>
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white">
  <img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white">
  <img alt="Redis" src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white">
  <img alt="Centrifugo" src="https://img.shields.io/badge/Centrifugo-FF6B35?style=flat-square">
  <img alt="WebSockets" src="https://img.shields.io/badge/WebSockets-333333?style=flat-square">
</p>

**Infrastructure**

<p>
  <img alt="Kubernetes" src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white">
  <img alt="Docker" src="https://img.shields.io/badge/Docker_Compose-2496ED?style=flat-square&logo=docker&logoColor=white">
  <img alt="Caddy" src="https://img.shields.io/badge/Caddy-1F88C0?style=flat-square&logo=caddy&logoColor=white">
  <img alt="Portainer" src="https://img.shields.io/badge/Portainer-13BEF9?style=flat-square&logo=portainer&logoColor=white">
</p>

**Platforms**

<p>
  <img alt="Telegram" src="https://img.shields.io/badge/Telegram_Bots_&_Mini_Apps-26A5E4?style=flat-square&logo=telegram&logoColor=white">
  <img alt="VK" src="https://img.shields.io/badge/VK_Bots-0077FF?style=flat-square&logo=vk&logoColor=white">
  <img alt="Asterisk" src="https://img.shields.io/badge/Asterisk_VoIP-F68F1E?style=flat-square&logo=asterisk&logoColor=white">
</p>

**Currently learning** <sub>(code and otherwise)</sub>

<p>
  <img alt="Rust" src="https://img.shields.io/badge/Rust-🦀_in_progress-000000?style=flat-square&logo=rust&logoColor=white">
  <img alt="Japanese" src="https://img.shields.io/badge/日本語-🗾_勉強中-BC002D?style=flat-square">
</p>

<details>
<summary>Also touched over the years</summary>
<br>
<p>
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
  <img alt="PHP" src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white">
  <img alt="Angular" src="https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white">
  <img alt="Svelte" src="https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white">
  <img alt="Astro" src="https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white">
</p>
</details>

### GitHub stats

<sub>Public activity only, the interesting stuff lives in private repos.</sub>

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=xjl0&theme=github_dark">
    <img alt="Profile details" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=xjl0&theme=github">
  </picture>
  <br>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=xjl0&theme=github_dark">
    <img alt="Repos per language" height="170" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=xjl0&theme=github">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=xjl0&theme=github_dark">
    <img alt="Most commit language" height="170" src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=xjl0&theme=github">
  </picture>
</div>

---

<div align="center">

**Got a project that must not fall over?** → [Telegram @pasokon](https://t.me/pasokon)

</div>
