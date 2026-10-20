import { Link } from "react-router-dom"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import PageLayout from "../components/layout/PageLayout"
import SectionLabel from "../components/ui/SectionLabel"
import { useRef } from "react"
import { useLanguage, t } from "../contexts/LanguageContext"
import { translations } from "../i18n/translations"
import { projects } from "../data/projects"

export default function HomePage() {
  const { lang } = useLanguage()
  const h = translations.home
  const a = translations.about
  const w = translations.work
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const imgX = useTransform(springX, [0, 1], [-10, 10])
  const imgY = useTransform(springY, [0, 1], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  // Pick top 4 featured projects
  const featuredProjects = projects.slice(0, 4)

  return (
    <PageLayout>
      <div ref={containerRef} onMouseMove={handleMouseMove} className="w-full">

        {/* ─── 1. HERO SECTION ──────────────────────────── */}
        <div className="grid-container min-h-[90svh] flex flex-col justify-between pt-6 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end flex-1">

            {/* Left Col */}
            <div className="lg:col-span-7 flex flex-col justify-end pt-8">
              {/* Eyebrow */}
              <motion.div
                className="text-label mb-6 flex items-center gap-3 text-[var(--accent-dark)] font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="w-5 h-px bg-[var(--accent-dark)] inline-block" />
                {t(h.eyebrow, lang)}
              </motion.div>

              {/* Name Display */}
              <div className="mb-4">
                <div className="overflow-hidden pt-3 -mt-3 pb-1 flex flex-wrap items-baseline gap-4 lg:gap-6">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.18, ease: [0.32, 0.72, 0, 1] }}
                    className="font-display font-extrabold tracking-[-0.035em] text-[var(--text-1)] text-[clamp(2.5rem,5.2vw,4.8rem)] leading-[1.15] pt-1"
                  >
                    ĐỖ KIM ANH
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-[0.8125rem] font-bold tracking-[0.14em] uppercase text-[var(--accent-dark)] bg-[rgba(47,102,0,0.08)] border border-[rgba(47,102,0,0.2)] px-3 py-1.5 rounded-sm"
                  >
                    AIKING INTERN · 2026
                  </motion.div>
                </div>
              </div>

              {/* Subtitle / Focus */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm md:text-base font-semibold uppercase tracking-[0.12em] text-[var(--accent-dark)] mb-6"
              >
                Marketing Operation • AI Automation • Creative Production
              </motion.div>


              {/* Core Statement */}
              <motion.div
                className="max-w-[560px]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                <p className="text-[clamp(1.05rem,1.8vw,1.3rem)] font-normal leading-[1.65] text-[var(--text-2)]">
                  <span className="text-[var(--text-1)] font-semibold">{t(h.statement1, lang)}</span>{" "}
                  {t(h.statement2, lang)}
                </p>
              </motion.div>

              {/* Metrics Badge strip */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 my-6 border-y border-[var(--border)]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
              >
                {h.stats.map((st, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-display font-extrabold text-2xl lg:text-3xl text-[var(--accent-dark)]">
                      {st.val}
                    </span>
                    <span className="text-[11px] text-[var(--text-3)] leading-tight mt-1">
                      {t(st.label, lang)}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex items-center gap-4 flex-wrap"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <a
                  href="#about-section"
                  className="inline-flex items-center gap-2 bg-[var(--text-1)] text-white font-semibold text-[0.75rem] tracking-[0.14em] uppercase px-6 py-3.5 hover:bg-[var(--accent-dark)] transition-colors duration-200 rounded-sm"
                >
                  {t(h.ctaAbout, lang)}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2v8M2 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 border border-[var(--border-mid)] text-[var(--text-1)] font-semibold text-[0.75rem] tracking-[0.14em] uppercase px-6 py-3.5 hover:border-[var(--accent-dark)] hover:text-[var(--accent-dark)] transition-all duration-200 rounded-sm"
                >
                  {t(h.ctaWork, lang)}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  to="/work/aiking-video"
                  className="inline-flex items-center gap-2 text-[var(--text-3)] hover:text-[var(--accent-dark)] text-[0.75rem] font-semibold tracking-[0.12em] uppercase px-3 py-2 transition-colors"
                >
                  🎬 {t(h.ctaShowreel, lang)}
                </Link>
              </motion.div>
            </div>

            {/* Right Col: Interactive Visual Box */}
            <div className="hidden lg:flex lg:col-span-5 flex-col justify-end items-end gap-5 relative">

              <motion.div style={{ x: imgX, y: imgY }} className="relative w-full max-w-[420px]">
                <div className="bg-[var(--bg-surface)] border border-[var(--border)] p-6 rounded-sm shadow-sm">
                  {/* Header bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-4">
                    <span className="text-[10px] tracking-[0.18em] uppercase font-bold text-[var(--accent-dark)]">
                      AIKING INTERNSHIP REPORT
                    </span>
                    <span className="text-[10px] text-[var(--text-3)] font-mono">04–06/2026</span>
                  </div>

                  {/* Thumbnail snippet */}
                  <div className="relative rounded overflow-hidden aspect-[16/10] bg-[var(--bg)] border border-[var(--border)] mb-4">
                    <img
                      src="/projects/aiking_media/image6.png"
                      alt="n8n Marketing Automation Workflow"
                      className="w-full h-full object-cover object-left-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                      <span className="text-white text-xs font-semibold">
                        n8n Multi-Platform Publisher & Lead Capture
                      </span>
                    </div>
                  </div>

                  {/* Quick details */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-[var(--border)]">
                      <span className="text-[var(--text-3)]">{lang === 'vi' ? 'Đơn vị' : 'Company'}</span>
                      <span className="font-semibold text-[var(--text-1)]">AIKING Tech & Marketing</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[var(--border)]">
                      <span className="text-[var(--text-3)]">{lang === 'vi' ? 'Vận hành Lark' : 'Lark Ops'}</span>
                      <span className="font-semibold text-[var(--text-1)]">8 Automations · 8 Nhân sự</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[var(--border)]">
                      <span className="text-[var(--text-3)]">{lang === 'vi' ? 'Phim Fanpage' : 'Fanpage Video'}</span>
                      <span className="font-semibold text-[var(--accent-dark)]">"Tiệm Tạp Hóa" Đăng chính thức</span>
                    </div>
                  </div>
                </div>

                {/* Floating pill */}
                <div className="absolute -left-6 -bottom-4 bg-[var(--accent)] text-[#080808] font-bold text-[10px] tracking-[0.14em] uppercase px-4 py-2 rounded-full shadow-md">
                  ✓ VERIFIED DELIVERABLES
                </div>
              </motion.div>
            </div>

          </div>

          {/* Bottom ticker bar */}
          <div className="border-t border-[var(--border)] pt-4 mt-8 flex items-center justify-between text-label">
            <span>{t(h.tagline, lang)}</span>
            <span className="hidden sm:inline font-mono">01 / 07</span>
            <a href="#about-section" className="hover:text-[var(--accent-dark)] transition-colors flex items-center gap-1">
              Scroll to explore ↓
            </a>
          </div>
        </div>

        {/* ─── 2. EXECUTIVE ABOUT SECTION (PUT BEFORE PROJECTS) ─ */}
        <section id="about-section" className="border-t border-[var(--border)] bg-[var(--bg-surface)] py-16 lg:py-24">
          <div className="grid-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Left col */}
              <div className="lg:col-span-5">
                <SectionLabel delay={0.1}>{t(a.sectionLabel, lang)}</SectionLabel>
                <h2 className="text-display mt-4 mb-6 text-[var(--text-1)]">
                  {lang === 'vi' ? 'Kết hợp tư duy kỹ thuật\nvới tiếp thị số.' : 'Merging Technical Rigor\nwith Marketing.'}
                </h2>
                <p className="text-[var(--text-2)] text-base leading-relaxed mb-6">
                  {t(a.bio1, lang)} <span className="font-semibold text-[var(--text-1)]">{t(a.bio1b, lang)}</span>
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {a.interests.map((it, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.08)] border border-[rgba(47,102,0,0.18)] px-3 py-1 rounded-sm"
                    >
                      {t(it, lang)}
                    </span>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[var(--accent-dark)] text-white text-xs font-bold tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm hover:opacity-90 transition-opacity"
                >
                  {lang === 'vi' ? 'Xem đầy đủ hồ sơ & kinh nghiệm →' : 'View Full Profile & Experience →'}
                </Link>
              </div>

              {/* Right col: 3 Pillars of Competence */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-sm">
                  <div className="text-2xl mb-3">⚙️</div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-1)] mb-2">
                    Marketing Automation
                  </h3>
                  <p className="text-xs text-[var(--text-2)] leading-relaxed">
                    {lang === 'vi'
                      ? 'Thiết kế 6 workflow tự động hóa: đăng bài đa nền tảng, bắt lead qua Facebook Webhook, seeding và phân tích chỉ số.'
                      : 'Built 6 automated workflows: multi-platform distribution, webhook lead capture, seeding, and analytics agent.'}
                  </p>
                </div>

                <div className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-sm">
                  <div className="text-2xl mb-3">📊</div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-1)] mb-2">
                    Vận hành Lark Base & OKR
                  </h3>
                  <p className="text-xs text-[var(--text-2)] leading-relaxed">
                    {lang === 'vi'
                      ? 'Quản trị công việc cho 8 nhân sự tại AIKING với 8 luồng nhắc deadline tự động và bộ tiêu chuẩn chuẩn hóa 7 profile B2B.'
                      : 'Deployed Lark Base project management for 8 members with 8 automated triggers and B2B profile standardization.'}
                  </p>
                </div>

                <div className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-sm">
                  <div className="text-2xl mb-3">✍️</div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-1)] mb-2">
                    Hệ thống Content & Copywriting
                  </h3>
                  <p className="text-xs text-[var(--text-2)] leading-relaxed">
                    {lang === 'vi'
                      ? 'Dashboard sản xuất 30 bài (78 ảnh, 54 carousel) chống trùng lặp; xây dựng web app ContentAI Pro chuẩn AIDA/PAS.'
                      : 'Scaled 30-post campaign engine with anti-duplicate logic; developed ContentAI Pro web app on Gemini API.'}
                  </p>
                </div>

                <div className="p-6 bg-[var(--bg)] border border-[var(--border)] rounded-sm">
                  <div className="text-2xl mb-3">🎬</div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-1)] mb-2">
                    Video AI & UGC Ads
                  </h3>
                  <p className="text-xs text-[var(--text-2)] leading-relaxed">
                    {lang === 'vi'
                      ? 'Sản xuất phim ngắn "Tiệm Tạp Hóa" đăng chính thức trên Fanpage AIKING; phát triển tool Google Flow tạo video UGC từ ảnh sản phẩm.'
                      : 'Produced "Tiệm Tạp Hóa" published on official fanpage; built Google Flow UGC ads generator with identity lock.'}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── 3. FEATURED REAL PROJECTS SECTION ───────────────── */}
        <section className="py-16 lg:py-24 border-t border-[var(--border)]">
          <div className="grid-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[var(--border)]">
              <div>
                <SectionLabel delay={0.1}>{t(w.sectionLabel, lang)}</SectionLabel>
                <h2 className="text-display mt-4 text-[var(--text-1)]">
                  {t(w.heading, lang)}
                </h2>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-[var(--accent-dark)] hover:underline"
              >
                {lang === 'vi' ? `Xem toàn bộ ${projects.length} dự án thực tế →` : `View all ${projects.length} real projects →`}
              </Link>
            </div>

            {/* Project List Preview */}
            <div className="divide-y divide-[var(--border)]">
              {featuredProjects.map((p, i) => (
                <Link
                  key={p.id}
                  to={p.path}
                  className="group block py-10 lg:py-14 hover:bg-[rgba(0,0,0,0.015)] transition-colors duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Media thumbnail */}
                    <div className="lg:col-span-5 aspect-[16/10] overflow-hidden rounded-sm bg-[var(--bg-surface)] border border-[var(--border)] relative">
                      {p.video ? (
                        <video
                          src={p.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[var(--text-3)] text-xs uppercase tracking-widest font-mono">
                          {p.title}
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-[var(--bg)]/90 backdrop-blur-sm border border-[var(--border)] px-2.5 py-1 text-[10px] font-bold text-[var(--accent-dark)] uppercase">
                        {p.category}
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono text-sm font-bold text-[var(--accent-dark)]">{p.num}</span>
                          <span className="text-[11px] uppercase tracking-wider text-[var(--text-3)]">{p.year}</span>
                        </div>
                        <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-[var(--text-1)] group-hover:text-[var(--accent-dark)] transition-colors mb-3 whitespace-pre-line">
                          {p.title}
                        </h3>
                        <p className="text-sm text-[var(--text-2)] leading-relaxed mb-6 max-w-[540px]">
                          {lang === 'vi' ? p.subtitle : p.subtitleEn}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {p.tags.map(tg => (
                            <span
                              key={tg}
                              className="text-[10px] uppercase tracking-wider font-medium text-[var(--text-3)] border border-[var(--border-mid)] px-2.5 py-1"
                            >
                              {tg}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-[var(--accent-dark)]">
                        {t(w.viewCase, lang)}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 10L10 2M10 2H4M10 2v6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-12 text-center">
              <Link
                to="/work"
                className="inline-flex items-center gap-3 bg-[var(--text-1)] text-white font-bold text-xs tracking-[0.16em] uppercase px-8 py-4 rounded-sm hover:bg-[var(--accent-dark)] transition-colors shadow-sm"
              >
                {lang === 'vi' ? 'Xem đầy đủ các dự án đã thực hiện →' : 'Explore All Real Projects →'}
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  )
}
