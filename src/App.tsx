import type { ComponentType, ReactNode } from "react"
import {
  ArrowUpRight,
  Bot,
  Gamepad2,
  Gift,
  LayoutDashboard,
  Lock,
  Moon,
  Phone,
  Plug,
  Printer,
  Send,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react"

import { GoCode } from "@/components/go-code"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  type BuildKey,
  CONTENT,
  GITHUB_URL,
  GO_SNIPPET,
  LANG_LABELS,
  LANGS,
  STACK,
  TELEGRAM_URL,
} from "@/content"
import { useLang, useTheme } from "@/hooks"
import { cn } from "@/lib/utils"
import photo from "@/assets/photo.jpg"

const BUILD_ICONS: Record<BuildKey, ComponentType<{ className?: string }>> = {
  games: Gamepad2,
  promo: Gift,
  realtime: Zap,
  bots: Bot,
  telephony: Phone,
  admin: LayoutDashboard,
  integrations: Plug,
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

function Section({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("break-inside-avoid-page", className)}>
      <h2 className="mb-4 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function App() {
  const [lang, setLang] = useLang()
  const [dark, toggleTheme] = useTheme()
  const t = CONTENT[lang]

  return (
    <TooltipProvider>
      <div className="min-h-svh bg-background">
        {/* Toolbar */}
        <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur print:hidden">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-4">
            <span className="font-mono text-sm text-muted-foreground">
              ~/xjl0
            </span>
            <div className="flex items-center gap-1.5">
              <div
                role="radiogroup"
                aria-label={t.ui.language}
                className="flex rounded-lg border p-0.5"
              >
                {LANGS.map((l) => (
                  <button
                    key={l}
                    role="radio"
                    aria-checked={lang === l}
                    lang={l}
                    title={LANG_LABELS[l].name}
                    onClick={() => setLang(l)}
                    className={cn(
                      "h-7 min-w-9 rounded-md px-2 text-xs font-medium transition-colors",
                      lang === l
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {LANG_LABELS[l].short}
                  </button>
                ))}
              </div>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={t.ui.theme}
                      onClick={toggleTheme}
                    />
                  }
                >
                  {dark ? <Sun /> : <Moon />}
                </TooltipTrigger>
                <TooltipContent>{t.ui.theme}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={t.ui.print}
                      onClick={() => window.print()}
                    />
                  }
                >
                  <Printer />
                </TooltipTrigger>
                <TooltipContent>{t.ui.print}</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-5xl px-4 py-10 sm:py-14 print:py-0">
          {/* Hero */}
          <header className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <Avatar className="size-24 rounded-2xl after:rounded-2xl sm:size-28">
              <AvatarImage src={photo} alt={t.name} className="rounded-2xl" />
              <AvatarFallback className="rounded-2xl">AV</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <Badge
                variant="outline"
                className="gap-1.5 border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 print:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {t.status}
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.name}{" "}
                <span className="align-middle text-base font-normal text-muted-foreground">
                  こんにちは！
                </span>
              </h1>
              <p className="text-lg">
                <span className="font-medium">{t.role}</span>
                <span className="text-muted-foreground"> · {t.experience}</span>
              </p>
              <p className="max-w-2xl text-pretty text-muted-foreground">
                {t.tagline}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={buttonVariants({ size: "lg" })}
                >
                  <Send />
                  Telegram @pasokon
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <GitHubIcon className="size-4" />
                  github.com/xjl0
                </a>
              </div>
            </div>
          </header>

          <Separator className="my-10 sm:my-12" />

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 print:block print:space-y-8">
            {/* Main column */}
            <div className="min-w-0 space-y-12 print:space-y-8">
              <Section title={t.sections.build}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(Object.keys(BUILD_ICONS) as BuildKey[]).map((key) => {
                    const Icon = BUILD_ICONS[key]
                    return (
                      <Card
                        key={key}
                        size="sm"
                        className="break-inside-avoid transition-colors hover:bg-muted/40 sm:last:odd:col-span-2"
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2.5">
                            <span className="flex size-7 items-center justify-center rounded-md bg-muted">
                              <Icon className="size-4" />
                            </span>
                            {t.build[key].title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                          {t.build[key].text}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </Section>

              <Section title={t.sections.how}>
                <ol className="space-y-5">
                  {t.how.map((item, i) => (
                    <li key={item.title} className="flex gap-4 break-inside-avoid">
                      <span className="mt-0.5 font-mono text-sm text-muted-foreground tabular-nums">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="mt-1 text-sm text-pretty text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex gap-3 rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
                  <Lock className="mt-0.5 size-4 shrink-0" />
                  <p className="text-pretty">{t.nda}</p>
                </div>
              </Section>

              <Section title={t.sections.about} className="print:hidden">
                <GoCode code={GO_SNIPPET} />
              </Section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-10 print:space-y-8">
              <Section title={t.sections.stack}>
                <div className="space-y-4">
                  {STACK.map(({ group, items }) => (
                    <div key={group}>
                      <h3 className="mb-2 text-sm font-medium">
                        {t.stackGroups[group]}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((tech) => (
                          <Badge
                            key={tech.name}
                            variant="outline"
                            className={cn(
                              "h-6 gap-1.5 px-2",
                              group === "past" && "text-muted-foreground"
                            )}
                          >
                            <span
                              className="size-1.5 rounded-full"
                              style={{ backgroundColor: tech.color }}
                            />
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={t.sections.learning}>
                <ul className="space-y-3 text-sm">
                  {(
                    [
                      ["🦀", "Rust", t.learning.rust],
                      ["🗾", "日本語", t.learning.japanese],
                      ["🎮", "GameDev", t.learning.gamedev],
                    ] as const
                  ).map(([emoji, name, note]) => (
                    <li key={name} className="flex gap-3">
                      <span aria-hidden>{emoji}</span>
                      <div>
                        <span className="font-medium">{name}</span>
                        <p className="text-muted-foreground">{note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title={t.sections.languages}>
                <ul className="space-y-3 text-sm">
                  {t.languages.map((l) => (
                    <li key={l.name}>
                      <div className="mb-1.5 flex justify-between gap-2">
                        <span className="font-medium">{l.name}</span>
                        <span className="text-muted-foreground">{l.level}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${l.value}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title={t.sections.education}>
                <ul className="space-y-3 text-sm">
                  {t.education.map((e) => (
                    <li key={e.title}>
                      <p className="font-medium">{e.title}</p>
                      <p className="text-muted-foreground">{e.detail}</p>
                    </li>
                  ))}
                </ul>
              </Section>
            </aside>
          </div>

          {/* CTA */}
          <Card className="mt-14 break-inside-avoid bg-muted/40 print:mt-8">
            <CardContent className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-lg font-semibold">{t.cta.title}</p>
                <p className="text-sm text-muted-foreground">{t.cta.text}</p>
              </div>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t.ui.writeTelegram}
                className={cn(buttonVariants({ size: "lg" }), "print:hidden")}
              >
                @pasokon
                <ArrowUpRight />
              </a>
              <span className="hidden font-mono text-sm print:inline">
                t.me/pasokon · github.com/xjl0
              </span>
            </CardContent>
          </Card>

          <footer className="mt-10 text-center font-mono text-xs text-muted-foreground print:hidden">
            React · shadcn/ui · Tailwind — © {new Date().getFullYear()}{" "}
            {t.name}
            <span className="mt-1 flex items-center justify-center gap-1.5">
              <Sparkles className="size-3" />
              {t.ui.generatedWithAI}
            </span>
          </footer>
        </main>
      </div>
    </TooltipProvider>
  )
}
