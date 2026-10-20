import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'content-workspace') || projects[0]
const next = (project && projects.find(p => p.id === project.nextId)) || projects[0]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function ContentWorkspacePage() {
  const { lang } = useLanguage()

  const modules = [
    { title: 'Social Media Posts', desc: lang === 'vi' ? 'Tạo bài viết Facebook, LinkedIn theo phễu nhận diện và chuyển đổi.' : 'High-engagement posts for Facebook & LinkedIn tailored to buyer stages.' },
    { title: 'Blog & Long-form Articles', desc: lang === 'vi' ? 'Xây dựng bài viết chuẩn SEO, chiều sâu chuyên môn cao.' : 'SEO-optimized in-depth articles reinforcing domain authority.' },
    { title: 'Email Marketing Sequences', desc: lang === 'vi' ? 'Chuỗi email chào mừng, nuôi dưỡng và chốt sale tự động.' : 'Automated welcome, nurturing, and promotional email sequences.' },
    { title: 'High-Converting Ads', desc: lang === 'vi' ? 'Tiêu đề và copy quảng cáo Meta Ads theo công thức AIDA & PAS.' : 'Performance advertising copy structured around AIDA & PAS frameworks.' },
    { title: 'Product Descriptions', desc: lang === 'vi' ? 'Mô tả lợi ích cốt lõi theo framework BAB & FAB thúc đẩy quyết định mua.' : 'Benefit-centric copy utilizing BAB & FAB to overcome buying friction.' },
    { title: 'Video Scripts (Short-form & TVC)', desc: lang === 'vi' ? 'Kịch bản video ngắn TikTok/Reels với hook 3 giây và CTA mạch lạc.' : 'Short-form scripts with powerful 3-second hooks and strong CTAs.' },
  ]

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
            {project.num} — {lang === 'vi' ? 'Hệ thống Nội dung & Ứng dụng AI' : 'Content Engine & AI Application'}
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
              { label: lang === 'vi' ? 'Sản lượng' : 'Output', value: lang === 'vi' ? '30 Bài · 78 Ảnh · 54 Slides' : '30 Posts · 78 Visuals · 54 Slides' },
              { label: lang === 'vi' ? 'Ứng dụng' : 'Web App', value: 'ContentAI Pro (Hosted)' },
              { label: lang === 'vi' ? 'Công cụ' : 'Tools', value: project.tools },
              { label: lang === 'vi' ? 'Thời gian' : 'Timeline', value: '06/2026' },
            ].map(m => (
              <div key={m.label}>
                <div className="text-label mb-1 text-[var(--text-3)]">{m.label}</div>
                <div className="text-sm font-bold text-[var(--text-1)]">{m.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Feature Visual 1: Content Creation Workspace Dashboard */}
        <div className="py-12 lg:py-16">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh 1 — Workspace Dashboard' : 'Visual Proof 1 — Workspace Dashboard'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                {lang === 'vi' ? 'Dashboard Tổng hợp 30 bài Content, Ảnh & Carousel của AIKING' : 'AIKING Content Creation Workspace Dashboard'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              30 Bài hoàn chỉnh
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/aiking_media/image8.png"
              alt="AIKING Content Creation Workspace Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 8 trong Báo cáo thực tập: Cấu trúc Content Creation Workspace do Kim Anh xây dựng bằng Antigravity IDE và Claude, tổng hợp 30 bài với 30 tiêu đề độc nhất: 12 bài ảnh đơn, 12 infographic và 6 carousel đa slide.'
              : 'Figure 8 from Internship Report: Content Creation Workspace built by Kim Anh using Antigravity IDE and Claude, aggregating 30 posts: 12 single-image, 12 infographics, and 6 carousels.'}
          </p>
        </div>

        {/* The Core Challenge & Architecture */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>{lang === 'vi' ? 'Bài toán & Giải pháp' : 'Challenge & Solution'}</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-4 text-[var(--text-2)] text-sm leading-relaxed">
              <h2 className="text-heading text-[var(--text-1)]">
                {lang === 'vi'
                  ? 'Sản xuất nội dung số lượng lớn mà không bị cạn ý tưởng hay lệch chuẩn nhận diện thương hiệu.'
                  : 'Producing scaled content without idea exhaustion or brand voice degradation.'}
              </h2>
              <p>
                {lang === 'vi'
                  ? 'Khi sản xuất liên tục hàng chục bài viết mỗi tuần, vấn đề lớn nhất của các agency và doanh nghiệp là các ý tưởng thường bị lặp lại, hình ảnh thiếu đồng nhất và phụ thuộc vào cảm hứng của người viết.'
                  : 'When producing dozens of posts weekly, marketing teams struggle with idea fatigue, repetitive angles, and erratic copy tone.'}
              </p>
              <p className="font-semibold text-[var(--text-1)]">
                {lang === 'vi'
                  ? 'Giải pháp: Kim Anh thiết lập cơ chế kiểm tra chống trùng lặp (Anti-duplicate logic) — trước khi sinh nội dung mới, hệ thống tự động so khớp ý tưởng với kho bài cũ để đảm bảo 100% góc nhìn mới mẻ và đúng ngữ cảnh thương hiệu AIKING.'
                  : 'Solution: Kim Anh instituted an anti-duplicate verification gate — matching new proposals against the historical library to guarantee 100% fresh angles adhering strictly to AIKING brand guidelines.'}
              </p>
            </div>
          </div>
        </section>

        {/* Feature Visual 2: ContentAI Pro */}
        <div className="py-12 lg:py-16 border-t border-[var(--border)]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh 2 — Web App Đã Host' : 'Visual Proof 2 — Live Hosted Web App'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                ContentAI Pro — {lang === 'vi' ? 'Ứng dụng tạo nội dung AI trên GitHub Pages' : 'AI Copywriting App Hosted on GitHub Pages'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              Live on GitHub Pages
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm max-w-[800px]">
            <img
              src="/projects/aiking_media/image9.png"
              alt="ContentAI Pro Hosted on GitHub Pages"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 9 trong Báo cáo thực tập: Minh chứng ứng dụng ContentAI Pro do Kim Anh xây dựng toàn bộ (HTML/CSS/JS kết nối Gemini API), đã được host thành công trên GitHub Pages.'
              : 'Figure 9 from Internship Report: Proof of ContentAI Pro built end-to-end by Kim Anh (HTML/CSS/JS with Gemini API), successfully hosted on GitHub Pages.'}
          </p>
        </div>

        {/* 6 Modules of ContentAI Pro */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <SectionLabel>{lang === 'vi' ? '6 Phân hệ Copywriting trong ContentAI Pro' : '6 Core Copywriting Modules'}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {modules.map((m, idx) => (
              <div key={idx} className="p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-sm">
                <span className="font-mono text-xs font-bold text-[var(--accent-dark)] mb-2 block">MODULE 0{idx + 1}</span>
                <h4 className="font-display font-bold text-base text-[var(--text-1)] mb-2">{m.title}</h4>
                <p className="text-xs text-[var(--text-2)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <NextProject title={next.title.replace('\n', ' ')} path={next.path} num={next.num} />
    </PageLayout>
  )
}
