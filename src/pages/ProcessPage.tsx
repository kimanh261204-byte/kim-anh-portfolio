import { motion } from "framer-motion"
import PageLayout from "../components/layout/PageLayout"
import SectionLabel from "../components/ui/SectionLabel"
import { useLanguage, t } from "../contexts/LanguageContext"
import { translations } from "../i18n/translations"

export default function ProcessPage() {
  const { lang } = useLanguage()
  const p = translations.process

  return (
    <PageLayout>
      <div className="grid-container">

        <div className="pt-8 pb-10 border-b border-[var(--border)]">
          <SectionLabel delay={0.1}>{t(p.sectionLabel, lang)}</SectionLabel>
          <motion.h1
            className="mt-4 font-display font-extrabold text-[var(--text-1)] leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.25rem)" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {t(p.heading1, lang)}<br/>{t(p.heading2, lang)}
          </motion.h1>
        </div>

        <motion.p
          className="max-w-[560px] text-sm md:text-base leading-relaxed text-[var(--text-3)] py-8 lg:py-12"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t(p.intro, lang)}
        </motion.p>

        <div className="relative pb-16">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />

          {p.steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative pl-8 md:pl-14 border-b border-[var(--border)] py-8 md:py-10 group"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.07, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="absolute left-[-3.5px] top-8 md:top-10 w-[8px] h-[8px] rounded-full bg-[var(--accent-dark)]" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-baseline">
                <div className="md:col-span-1">
                  <span
                    className="font-display font-bold leading-none text-[var(--bg-elevated)] group-hover:text-[var(--accent-dark)] transition-colors duration-300"
                    style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", letterSpacing: "-0.03em" }}
                  >{step.num}</span>
                </div>
                <div className="md:col-span-4">
                  <h2
                    className="font-display font-bold text-[var(--text-1)] group-hover:text-[var(--accent-dark)] transition-colors duration-300"
                    style={{ fontSize: "clamp(1.05rem,1.8vw,1.35rem)", letterSpacing: "-0.02em" }}
                  >{t(step.title, lang)}</h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[var(--text-3)] text-xs md:text-sm leading-relaxed group-hover:text-[var(--text-2)] transition-colors duration-300">
                    {t(step.desc, lang)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="py-12 md:py-16 border-t border-[var(--border)]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p
            className="font-display font-bold tracking-tight max-w-[640px]"
            style={{ fontSize: "clamp(1.25rem,2.2vw,1.85rem)", letterSpacing: "-0.02em", lineHeight: 1.35 }}
          >
            <span className="text-[var(--text-4)]">{t(p.closing1, lang)}</span>{" "}
            <span className="text-[var(--text-1)]">{t(p.closing2, lang)}</span>
          </p>
        </motion.div>

      </div>
    </PageLayout>
  )
}
