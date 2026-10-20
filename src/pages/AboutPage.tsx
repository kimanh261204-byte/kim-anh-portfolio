import { motion } from "framer-motion"
import PageLayout from "../components/layout/PageLayout"
import SectionLabel from "../components/ui/SectionLabel"
import { useLanguage, t } from "../contexts/LanguageContext"
import { translations } from "../i18n/translations"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function AboutPage() {
  const { lang } = useLanguage()
  const a = translations.about

  const facts = [
    { label: t(a.facts.background, lang), value: t(a.facts.bgVal, lang) },
    { label: t(a.facts.focus, lang),      value: t(a.facts.focusVal, lang) },
    { label: t(a.facts.location, lang),   value: t(a.facts.locationVal, lang) },
    { label: t(a.facts.edu, lang),        value: t(a.facts.eduVal, lang) },
    { label: t(a.facts.status, lang),     value: t(a.facts.statusVal, lang) },
    { label: t(a.facts.lang, lang),       value: t(a.facts.langVal, lang) },
  ]

  return (
    <PageLayout>
      <div className="grid-container">

        {/* Header */}
        <div className="pt-8 pb-12 border-b border-[var(--border)]">
          <SectionLabel delay={0.1}>{t(a.sectionLabel, lang)}</SectionLabel>
          <motion.h1 className="text-display mt-4 text-[var(--text-1)]" {...fadeUp(0.2)}>
            {t(a.heading, lang)}
          </motion.h1>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 py-16 lg:py-24">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-16">

            {/* 1. BIO */}
            <motion.div {...fadeUp(0.3)}>
              <div className="text-label mb-6">{t(a.introLabel, lang)}</div>
              <p className="text-[clamp(1rem,1.8vw,1.2rem)] leading-[1.85] text-[var(--text-2)] mb-5">
                {t(a.bio1, lang)}{" "}
                <span className="text-[var(--text-1)] font-normal">{t(a.bio1b, lang)}</span>
              </p>
              <p className="text-[clamp(1rem,1.8vw,1.2rem)] leading-[1.85] text-[var(--text-2)]">
                {t(a.bio2, lang)}{" "}
                <span className="text-[var(--text-1)] font-normal">{t(a.bio2b, lang)}</span>
              </p>
            </motion.div>

            {/* 2. FACTS */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-8 pb-12 border-b border-[var(--border)]"
              {...fadeUp(0.38)}
            >
              {facts.map(item => (
                <div key={item.label}>
                  <div className="text-label mb-1">{item.label}</div>
                  <div className="text-sm text-[var(--text-1)]">{item.value}</div>
                </div>
              ))}
            </motion.div>

            {/* 3. CAREER OBJECTIVE */}
            <motion.div {...fadeUp(0.44)}>
              <div className="text-label mb-6">{t(a.goalLabel, lang)}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="border border-[var(--border)] p-6 hover:border-[var(--accent-dark)] hover:border-opacity-40 transition-colors duration-300">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent-dark)] mb-3">{t(a.goalShortTitle, lang)}</div>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">{t(a.goalShortDesc, lang)}</p>
                </div>
                <div className="border border-[var(--border)] p-6 hover:border-[var(--accent-dark)] hover:border-opacity-40 transition-colors duration-300">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent-dark)] mb-3">{t(a.goalLongTitle, lang)}</div>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">{t(a.goalLongDesc, lang)}</p>
                </div>
              </div>
            </motion.div>

            {/* 4. EDUCATION */}
            <motion.div {...fadeUp(0.5)}>
              <div className="text-label mb-8">{t(a.eduLabel, lang)}</div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />
                <div className="relative pl-7 pb-8">
                  <div className="absolute left-[-3.5px] top-[7px] w-[8px] h-[8px] rounded-full border border-[var(--accent-dark)]" />
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[var(--text-3)] mb-1.5">2022 — 2026</div>
                  <div className="font-medium text-[var(--text-1)] text-sm mb-0.5">{t(a.eduDegree, lang)}</div>
                  <div className="text-[var(--text-3)] text-xs mb-1.5 tracking-wide">{t(a.eduSchool, lang)}</div>
                  <div className="text-[var(--text-3)] text-xs">{t(a.eduNote, lang)}</div>
                </div>
              </div>
            </motion.div>

            {/* 5. EXPERIENCE */}
            <motion.div {...fadeUp(0.56)}>
              <div className="text-label mb-8">{t(a.expLabel, lang)}</div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />
                {a.timeline.map((item, i) => (
                  <div key={i} className="relative pl-7 pb-10 last:pb-0">
                    <div className="absolute left-[-3.5px] top-[7px] w-[8px] h-[8px] rounded-full bg-[var(--accent-dark)]" />
                    <div className="text-[10px] tracking-[0.18em] uppercase text-[var(--accent-dark)] mb-1.5">{t(item.year, lang)}</div>
                    <div className="font-medium text-[var(--text-1)] text-sm mb-0.5">{t(item.role, lang)}</div>
                    <div className="text-[var(--text-3)] text-xs mb-2 tracking-wide">{t(item.company, lang)}</div>
                    <div className="text-[var(--text-2)] text-sm leading-relaxed">{t(item.desc, lang)}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 space-y-10">

            {/* Portrait */}
            <motion.div {...fadeUp(0.35)}>
              <div className="relative mb-8 overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
                <img
                  src="/assets/portrait.jpg"
                  alt="Đỗ Kim Anh"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[var(--accent-dark)] opacity-60" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[var(--accent-dark)] opacity-60" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[var(--accent-dark)] opacity-60" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[var(--accent-dark)] opacity-60" />
              </div>
              <div className="text-label mb-4">{t(a.interestsLabel, lang)}</div>
              <div className="flex flex-wrap gap-2">
                {a.interests.map((tag, i) => (
                  <span key={i} className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-3)] border border-[var(--border)] px-2.5 py-1 hover:border-[var(--accent-dark)] hover:text-[var(--text-1)] transition-all duration-200">
                    {t(tag, lang)}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
