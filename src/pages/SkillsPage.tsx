import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import SectionLabel from '../components/ui/SectionLabel'
import { useLanguage, t } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'

export default function SkillsPage() {
  const { lang } = useLanguage()
  const s = translations.skills

  const categories = [
    s.categories.creative,
    s.categories.video,
    s.categories.ai,
  ]

  return (
    <PageLayout>
      <div className="grid-container">

        {/* Header */}
        <div className="pt-8 pb-12 border-b border-[var(--border)]">
          <SectionLabel delay={0.1}>{t(s.sectionLabel, lang)}</SectionLabel>
          <motion.h1
            className="text-display mt-4 text-[var(--text-1)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {t(s.heading, lang)}
          </motion.h1>
        </div>

        {/* Skill columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[var(--border)]">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className={`py-12 md:py-16 ${catIdx > 0 ? 'md:border-l md:border-[var(--border)] md:pl-10' : ''} ${catIdx < 2 ? 'border-b md:border-b-0 border-[var(--border)]' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Category heading */}
              <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-dark)] font-semibold mb-8 pb-4 border-b border-[var(--border)]">
                {t(cat.label, lang)}
              </div>

              {/* Skills list */}
              <ul className="space-y-0">
                {cat.items.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 py-3 border-b border-[var(--border)] text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors duration-200 group cursor-default last:border-b-0"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + catIdx * 0.1 + i * 0.04 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-dark)] opacity-60 flex-shrink-0 group-hover:opacity-100 transition-opacity" />
                    {t(skill, lang)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring */}
        <motion.div
          className="py-12 lg:py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="text-label text-[var(--text-3)]">{t(s.exploringLabel, lang)}</div>
            <div className="text-xs text-[var(--text-3)] italic">{t(s.exploringNote, lang)}</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {s.exploring.map((item, idx) => (
              <span
                key={idx}
                className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-2)] border border-[var(--border-mid)] bg-[var(--bg-surface)] px-3.5 py-2 hover:border-[var(--accent-dark)] hover:text-[var(--text-1)] transition-all duration-200"
              >
                {t(item, lang)}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </PageLayout>
  )
}
