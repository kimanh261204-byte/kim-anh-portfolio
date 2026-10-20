import { motion } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import SectionLabel from '../components/ui/SectionLabel'
import { useLanguage, t } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } },
})

export default function AchievementsPage() {
  const { lang } = useLanguage()
  const a = translations.achievements

  return (
    <PageLayout>
      <div className="grid-container">

        {/* Header */}
        <div className="pt-8 pb-12 border-b border-[var(--border)]">
          <SectionLabel delay={0.1}>{t(a.sectionLabel, lang)}</SectionLabel>
          <motion.h1
            className="text-display mt-4 text-[var(--text-1)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {t(a.heading1, lang)}<br />{t(a.heading2, lang)}
          </motion.h1>
        </div>

        {/* Intro */}
        <motion.p
          className="max-w-[580px] text-[clamp(1rem,1.6vw,1.1rem)] leading-[1.8] text-[var(--text-2)] py-12 lg:py-16"
          {...fadeUp(0.3)}
        >
          {t(a.intro, lang)}
        </motion.p>

        {/* Achievements grid */}
        <div className="mb-20">
          <motion.div className="text-label mb-8 text-[var(--text-3)]" {...fadeUp(0.35)}>
            {t(a.achieveLabel, lang)}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
            {a.items.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[var(--bg)] p-8 lg:p-10 flex flex-col justify-between hover:bg-[var(--bg-surface)] transition-colors duration-300 group"
                {...fadeUp(0.4 + i * 0.1)}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[9px] tracking-[0.16em] uppercase text-[var(--accent-dark)] font-semibold border border-[var(--border-mid)] px-2 py-0.5">
                      {t(item.tag, lang)}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--text-1)] mb-2 group-hover:text-[var(--accent-dark)] transition-colors">
                    {t(item.title, lang)}
                  </h3>
                  <div className="text-[10px] tracking-[0.12em] uppercase text-[var(--text-3)] mb-4">
                    {t(item.context, lang)}
                  </div>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">
                    {t(item.desc, lang)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-20 border-t border-[var(--border)] pt-16">
          <motion.div className="text-label mb-8 text-[var(--text-3)]" {...fadeUp(0.5)}>
            {t(a.certLabel, lang)}
          </motion.div>

          <div className="space-y-px bg-[var(--border)] border border-[var(--border)]">
            {a.certs.map((cert, i) => (
              <motion.div
                key={i}
                className="bg-[var(--bg)] px-8 py-5 flex items-center justify-between gap-4 hover:bg-[var(--bg-surface)] transition-colors"
                {...fadeUp(0.55 + i * 0.05)}
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-[var(--text-3)]">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <span className="text-sm font-semibold text-[var(--text-1)] block md:inline md:mr-3">
                      {t(cert.name, lang)}
                    </span>
                    <span className="text-xs text-[var(--text-3)]">{cert.issuer}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-xs text-[var(--text-3)] hidden sm:inline">{cert.year}</span>
                  <span className={`text-[9px] tracking-[0.14em] uppercase font-semibold px-2.5 py-1 ${
                    cert.status === 'completed'
                      ? 'bg-[rgba(61,92,0,0.1)] text-[var(--accent-dark)] border border-[rgba(61,92,0,0.2)]'
                      : 'bg-[var(--bg-surface)] text-[var(--text-3)] border border-[var(--border)]'
                  }`}>
                    {cert.status === 'completed' ? t(a.completed, lang) : t(a.inProgress, lang)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          className="border-t border-[var(--border)] py-16 text-center"
          {...fadeUp(0.8)}
        >
          <p className="text-xl md:text-2xl font-display font-medium text-[var(--text-2)]">
            {t(a.closing1, lang)}{' '}
            <span className="text-[var(--text-1)] font-bold">{t(a.closing2, lang)}</span>
          </p>
        </motion.div>

      </div>
    </PageLayout>
  )
}
