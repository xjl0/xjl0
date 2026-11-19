import type { ReactNode } from "react"

// Tiny Go highlighter, just enough for the profile snippet.
const TOKEN =
  /("(?:[^"\\]|\\.)*")|(\/\/.*$)|\b(type|struct|var|map)\b|\b(string)\b|\b([A-Z]\w*)(?=:)|\b(Engineer)\b/gm

function highlight(code: string): ReactNode[] {
  const out: ReactNode[] = []
  let last = 0
  for (const m of code.matchAll(TOKEN)) {
    const i = m.index ?? 0
    if (i > last) out.push(code.slice(last, i))
    const [text, str, comment, kw, type, field, name] = m
    const cls = str
      ? "text-emerald-600 dark:text-emerald-400"
      : comment
        ? "text-muted-foreground italic"
        : kw
          ? "text-fuchsia-600 dark:text-fuchsia-400"
          : type
            ? "text-sky-600 dark:text-sky-400"
            : field
              ? "text-amber-700 dark:text-amber-300"
              : name
                ? "text-sky-600 dark:text-sky-400 font-medium"
                : ""
    out.push(
      <span key={i} className={cls}>
        {text}
      </span>
    )
    last = i + text.length
  }
  if (last < code.length) out.push(code.slice(last))
  return out
}

export function GoCode({ code }: { code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-muted/40">
      <div className="flex items-center gap-1.5 border-b px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-400/80" />
        <span className="size-2.5 rounded-full bg-amber-400/80" />
        <span className="size-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          me.go
        </span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed [tab-size:4]">
        <code>{highlight(code)}</code>
      </pre>
    </div>
  )
}
