import { useCallback, useEffect, useState } from "react"
import { CONTENT, LANGS, type Lang } from "@/content"

function read(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable — ignore */
  }
}

const isLang = (v: string | null): v is Lang =>
  !!v && (LANGS as readonly string[]).includes(v)

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(location.search).get("lang")
  if (isLang(fromUrl)) return fromUrl
  const stored = read("lang")
  if (isLang(stored)) return stored
  for (const l of navigator.languages ?? [navigator.language]) {
    const short = l.slice(0, 2).toLowerCase()
    if (isLang(short)) return short
  }
  return "en"
}

export function useLang() {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    const c = CONTENT[lang]
    document.documentElement.lang = lang
    document.title = c.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", c.meta.description)
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    write("lang", l)
    const url = new URL(location.href)
    url.searchParams.set("lang", l)
    history.replaceState(null, "", url)
  }, [])

  return [lang, setLang] as const
}

export function useTheme() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", dark)
    // Always print on a light background.
    const before = () => root.classList.remove("dark")
    const after = () => root.classList.toggle("dark", dark)
    window.addEventListener("beforeprint", before)
    window.addEventListener("afterprint", after)
    return () => {
      window.removeEventListener("beforeprint", before)
      window.removeEventListener("afterprint", after)
    }
  }, [dark])

  const toggle = useCallback(() => {
    setDark((d) => {
      write("theme", d ? "light" : "dark")
      return !d
    })
  }, [])

  return [dark, toggle] as const
}
