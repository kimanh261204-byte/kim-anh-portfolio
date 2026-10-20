import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Lang } from '../i18n/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'vi',
  setLang: () => {},
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('portfolio-lang')
    return (saved === 'en' || saved === 'vi') ? saved : 'vi'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)
  const toggle = () => setLangState(prev => prev === 'vi' ? 'en' : 'vi')

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

/** Helper: pick the correct string from a {vi, en} object */
export function t<T extends { vi: string; en: string }>(obj: T, lang: Lang): string {
  return obj[lang]
}
