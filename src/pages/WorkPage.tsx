import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import SectionLabel from '../components/ui/SectionLabel'
import { projects, type Project } from '../data/projects'
import { useLanguage, t } from '../contexts/LanguageContext'
import { translations } from '../i18n/translations'

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } }
}

export default function WorkPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('ALL')
  const { lang } = useLanguage()
  const w = translations.work

  const categories = [
    { id: 'ALL', labelVi: 'Tất cả', labelEn: 'All Work' },
    { id: 'Marketing Automation', labelVi: 'Marketing Automation', labelEn: 'Marketing Automation' },
    { id: 'Content Marketing', labelVi: 'Content Marketing', labelEn: 'Content Marketing' },
    { id: 'AI Video Production', labelVi: 'Sản xuất Video AI', labelEn: 'AI Video Production' },
    { id: 'Operations', labelVi: 'Vận hành Lark Base', labelEn: 'Operations' },
    { id: 'AI Tooling', labelVi: 'Công cụ AI', labelEn: 'AI Tooling' },
  ]

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <PageLayout>
      <div className="grid-container">

        {/* Header */}
        <div className="pt-8 pb-10 border-b border-[var(--border)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <SectionLabel delay={0.1}>{t(w.sectionLabel, lang)}</SectionLabel>
              <motion.h1
                className="text-display mt-4 text-[var(--text-1)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              >
                {t(w.heading, lang)}
              </motion.h1>
              <p className="text-sm text-[var(--text-2)] mt-3 max-w-[600px]">
                {lang === 'vi'
                  ? 'Tổng hợp các sản phẩm thực tế từ Báo cáo kết quả thực tập tại Công ty Cổ phần Công nghệ và Tiếp thị AIKING (01–06/2026).'
                  : 'Portfolio of real deliverables from the internship report at AIKING Technology & Marketing JSC (01–06/2026).'}
              </p>
            </div>
            <motion.div
              className="text-label pb-2 text-[var(--text-3)] font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {filteredProjects.length.toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')} {t(w.total, lang)}
            </motion.div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-sm border transition-all duration-200 ${activeCategory === c.id
                  ? 'bg-[var(--accent-dark)] text-white border-[var(--accent-dark)] shadow-sm'
                  : 'bg-[var(--bg-surface)] text-[var(--text-2)] border-[var(--border)] hover:border-[var(--accent-dark)] hover:text-[var(--text-1)]'
                  }`}
              >
                {lang === 'vi' ? c.labelVi : c.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Project Index — Editorial List */}
        <motion.div variants={stagger} initial="initial" animate="animate" key={activeCategory}>
          {filteredProjects.map((project, i) => (
            <motion.div key={project.id} variants={fadeUp}>
              <Link
                to={project.path}
                className="project-row block group"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-cursor="OPEN"
              >
                <div className={`grid gap-8 py-10 md:py-14 transition-all duration-500 ${i % 2 === 0
                  ? 'md:grid-cols-[1fr_460px] items-center'
                  : 'md:grid-cols-[460px_1fr] items-center'
                  }`}>

                  {/* Odd index on desktop: media left, text right */}
                  {i % 2 !== 0 && (
                    <div className="hidden md:block">
                      <ProjectVisual project={project} isHovered={hoveredId === project.id} lang={lang} />
                    </div>
                  )}

                  {/* Text content */}
                  <div>
                    {/* Project number + Category */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span
                        className="font-display font-black leading-none select-none transition-colors duration-400"
                        style={{
                          fontSize: 'clamp(3rem, 6vw, 5rem)',
                          letterSpacing: '-0.04em',
                          color: hoveredId === project.id ? 'var(--accent-dark)' : 'rgba(0,0,0,0.1)',
                        }}
                      >
                        {project.num}
                      </span>
                      <span className="text-[10px] tracking-[0.14em] uppercase font-bold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.08)] px-2.5 py-1 rounded-sm border border-[rgba(47,102,0,0.2)]">
                        {project.category}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-[0.12em] uppercase font-medium text-[var(--text-3)] border border-[var(--border)] px-2.5 py-1 transition-all duration-300"
                          style={{
                            borderColor: hoveredId === project.id ? 'var(--accent-dark)' : undefined,
                            color: hoveredId === project.id ? 'var(--accent-dark)' : undefined
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2
                      className="font-display font-extrabold leading-[1.05] tracking-tight mb-3 transition-colors duration-300"
                      style={{
                        fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                        letterSpacing: '-0.03em',
                        color: hoveredId === project.id ? 'var(--accent-dark)' : 'var(--text-1)',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {project.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-[var(--text-2)] text-sm leading-relaxed mb-6 max-w-[420px]">
                      {lang === 'vi' ? project.subtitle : project.subtitleEn}
                    </p>

                    {/* Role + CTA */}
                    <div className="flex items-center justify-between gap-4 pt-2 border-t border-[var(--border)]">
                      <span className="text-xs text-[var(--text-3)] font-medium">
                        {lang === 'vi' ? project.role : project.roleEn}
                      </span>
                      <div
                        className="flex items-center gap-2 text-xs tracking-[0.14em] uppercase transition-all duration-300 font-bold"
                        style={{ color: hoveredId === project.id ? 'var(--accent-dark)' : 'var(--text-1)' }}
                      >
                        {t(w.viewCase, lang)}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 10L10 2M10 2H4M10 2v6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Even index on desktop: media right */}
                  {i % 2 === 0 && (
                    <div className="hidden md:block">
                      <ProjectVisual project={project} isHovered={hoveredId === project.id} lang={lang} />
                    </div>
                  )}

                  {/* Mobile visual (always below) */}
                  <div className="md:hidden">
                    <ProjectVisual project={project} isHovered={hoveredId === project.id} lang={lang} />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </PageLayout>
  )
}

function ProjectVisual({ project, isHovered, lang }: { project: Project; isHovered: boolean; lang: 'vi' | 'en' }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm"
      style={{ aspectRatio: '16/10' }}
      animate={{ scale: isHovered ? 1.02 : 1 }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
    >
      {/* Real Media Rendering */}
      {project.video ? (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center flex-col gap-2 p-6">
          <span className="text-[10px] tracking-[0.16em] uppercase text-[var(--accent-dark)] font-bold">
            {lang === 'vi' ? '[DỰ ÁN THỰC CHIẾN AIKING]' : '[AIKING DELIVERABLE]'}
          </span>
          <span className="text-[11px] text-[var(--text-3)]">{project.year}</span>
        </div>
      )}

      {/* Statement overlay on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-[rgba(247,246,242,0.92)] backdrop-blur-sm flex items-center justify-center p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm font-medium leading-relaxed italic text-[var(--text-1)]">
              "{lang === 'vi' ? project.statement : project.statementEn}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
