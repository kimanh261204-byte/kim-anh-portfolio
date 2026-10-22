import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'ai-photo-classifier') || projects[0]
const next = (project && projects.find(p => p.id === project.nextId)) || projects[0]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function PhotoClassifierPage() {
  const { lang } = useLanguage()

  return (
    <PageLayout>
      <div className="grid-container pt-8 pb-0">
        <Link to="/work" className="inline-flex items-center gap-2 text-label hover:text-[var(--accent-dark)] transition-colors duration-200 mb-8" data-cursor="">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 6H2M6 10L2 6l4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {lang === 'vi' ? 'Dự án' : 'Work'}
        </Link>
      </div>

      <div className="grid-container">
        {/* Header */}
        <div className="border-b border-[var(--border)] pb-12">
          <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-dark)] font-bold mb-4">
            {project.num} — {lang === 'vi' ? 'Công cụ AI Hỗ trợ Production' : 'AI Production Tooling'}
          </div>
          <motion.h1
            className="font-display font-extrabold leading-[1.0] mb-6 text-[var(--text-1)]"
            style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)', letterSpacing: '-0.03em', whiteSpace: 'pre-line' }}
            {...fadeUp(0.1)}
          >
            {project.title}
          </motion.h1>
          <motion.p className="text-[var(--text-2)] text-base max-w-[620px] leading-relaxed mb-8" {...fadeUp(0.2)}>
            {lang === 'vi' ? project.subtitle : project.subtitleEn}
          </motion.p>
          <motion.div className="flex flex-wrap gap-8" {...fadeUp(0.3)}>
            {[
              { label: lang === 'vi' ? 'Đơn vị' : 'Company', value: 'AIKING Tech & Marketing' },
              { label: lang === 'vi' ? 'Công nghệ' : 'Tech', value: 'Google AI Studio · Gemini 1.5' },
              { label: lang === 'vi' ? 'Năng lực' : 'Capacity', value: lang === 'vi' ? '50 ảnh / lượt xử lý' : '50 photos / batch' },
              { label: lang === 'vi' ? 'Xử lý ảnh' : 'Batch Tool', value: 'XnConvert Logo Automation' },
              { label: lang === 'vi' ? 'Thời gian' : 'Timeline', value: '06/2026' },
            ].map(m => (
              <div key={m.label}>
                <div className="text-label mb-1 text-[var(--text-3)]">{m.label}</div>
                <div className="text-sm font-bold text-[var(--text-1)]">{m.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Feature Visual 1: Photo Classifier App */}
        <div className="py-12 lg:py-16">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh 1 — Giao diện Ứng dụng' : 'Visual Proof 1 — App Interface'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                AIKING Event Photo Classifier
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              Gemini Vision Powered
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/aiking_media/image4.png"
              alt="AIKING Event Photo Classifier"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 4 trong Báo cáo thực tập: Ứng dụng xây dựng trên Google AI Studio tích hợp Gemini, hỗ trợ nhập thông tin dự án, tiêu chuẩn động, tải tối đa 50 ảnh, phân loại và xuất báo cáo PDF.'
              : 'Figure 4 from Internship Report: App built with Google AI Studio and Gemini vision to classify event photos dynamically.'}
          </p>
        </div>

        {/* Feature Visual 2: AIKING Discord Community */}
        <div className="py-12 lg:py-16 border-t border-[var(--border)]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh 2 — Hạ tầng Cộng đồng' : 'Visual Proof 2 — Community Infrastructure'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                {lang === 'vi' ? 'Discord "AIKING – Cộng đồng AI Thực Chiến"' : 'AIKING Real-world AI Discord Community'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              10 Phân quyền tự động
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/aiking_media/image10.png"
              alt="Discord Community Setup"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 10 trong Báo cáo thực tập: Thiết lập toàn bộ kênh, khu vực onboarding, workshop, phân quyền 10 vai trò và tích hợp Carl-bot, Arcane tự động.'
              : 'Figure 10 from Internship Report: Full community Discord setup with onboarding bots and 10 role permissions.'}
          </p>
        </div>

      </div>

      <NextProject title={next.title.replace('\n', ' ')} path={next.path} num={next.num} />
    </PageLayout>
  )
}
