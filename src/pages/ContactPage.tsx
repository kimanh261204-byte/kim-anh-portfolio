import { motion } from 'framer-motion'
import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { useLanguage, t } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const { lang } = useLanguage()
  const c = translations.contact

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageLayout>
      <div className="grid-container min-h-[80svh] flex flex-col justify-between">

        {/* Main content */}
        <div className="pt-8 flex-1 flex flex-col">

          {/* Big headline */}
          <div className="mb-12 lg:mb-16">
            <div className="overflow-hidden pt-4 -mt-4 pb-2 mb-1">
              <motion.div
                className="font-display font-bold leading-[1.12] text-[var(--text-1)] pt-2"
                style={{ fontSize: 'clamp(3.5rem,10vw,9.5rem)', letterSpacing: '-0.04em' }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              >
                {t(c.headline1, lang)}
              </motion.div>
            </div>
            <div className="overflow-hidden pt-4 -mt-4 pb-2">
              <motion.div
                className="font-display font-bold leading-[1.12] text-[var(--accent-dark)] pt-2"
                style={{ fontSize: 'clamp(3.5rem,10vw,9.5rem)', letterSpacing: '-0.04em' }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.32, 0.72, 0, 1] }}
              >
                {t(c.headline2, lang)}
              </motion.div>
            </div>
          </div>

          {/* 2-col layout: contact info + form */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >

            {/* LEFT: Info */}
            <div>
              {/* Contact info */}
              <div className="space-y-6 mb-10">
                {[
                  { label: t(c.email, lang), value: 'kimanh261204@gmail.com', href: 'mailto:kimanh261204@gmail.com' },
                  { label: t(c.phone, lang), value: '085 2700 897', href: 'tel:+84852700897' },
                  { label: t(c.tiktok, lang), value: '@_yudhhna', href: 'https://tiktok.com/@_yudhhna' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="text-label mb-1 text-[var(--text-3)]">{item.label}</div>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--text-1)] hover:text-[var(--accent-dark)] transition-colors duration-200"
                      data-cursor=""
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <a
                href="mailto:kimanh261204@gmail.com"
                className="inline-flex items-center gap-3 bg-[var(--accent)] text-[#080808] font-bold text-[0.6875rem] tracking-[0.16em] uppercase px-8 py-4 hover:bg-[#DEFF2A] transition-colors duration-200 shadow-sm"
                data-cursor=""
              >
                {t(c.cta, lang)}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* RIGHT: Contact form */}
            <div>
              <div className="text-label mb-6 text-[var(--text-3)]">{t(c.formTitle, lang)}</div>
              {sent ? (
                <motion.div
                  className="border border-[var(--accent-dark)] bg-[rgba(61,92,0,0.05)] p-8 text-center rounded-sm"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-[var(--accent-dark)] text-2xl mb-3 font-bold">✓</div>
                  <p className="text-sm text-[var(--text-1)] font-medium">{t(c.sentMsg, lang)}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="text-label block mb-2 text-[var(--text-3)]">{t(c.fieldName, lang)}</label>
                    <input
                      type="text"
                      required
                      placeholder={t(c.fieldNamePh, lang)}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-mid)] px-4 py-3 text-sm text-[var(--text-1)] placeholder-[var(--text-3)] focus:outline-none focus:border-[var(--accent-dark)] transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-label block mb-2 text-[var(--text-3)]">{t(c.fieldEmail, lang)}</label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-mid)] px-4 py-3 text-sm text-[var(--text-1)] placeholder-[var(--text-3)] focus:outline-none focus:border-[var(--accent-dark)] transition-colors duration-200"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-label block mb-2 text-[var(--text-3)]">{t(c.fieldSubject, lang)}</label>
                    <input
                      type="text"
                      placeholder={t(c.fieldSubjectPh, lang)}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-mid)] px-4 py-3 text-sm text-[var(--text-1)] placeholder-[var(--text-3)] focus:outline-none focus:border-[var(--accent-dark)] transition-colors duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-label block mb-2 text-[var(--text-3)]">{t(c.fieldMsg, lang)}</label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t(c.fieldMsgPh, lang)}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-mid)] px-4 py-3 text-sm text-[var(--text-1)] placeholder-[var(--text-3)] focus:outline-none focus:border-[var(--accent-dark)] transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-mid)] text-[var(--text-1)] font-semibold text-[0.6875rem] tracking-[0.16em] uppercase py-4 hover:border-[var(--accent-dark)] hover:text-[var(--accent-dark)] transition-all duration-200"
                  >
                    {t(c.sendBtn, lang)}
                  </button>
                </form>
              )}
            </div>

          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="border-t border-[var(--border)] py-5 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span className="text-label text-[var(--text-3)]">{t(c.footer, lang)}</span>
          <span className="text-label text-[var(--text-3)]">© {new Date().getFullYear()}</span>
        </motion.div>

      </div>
    </PageLayout>
  )
}
