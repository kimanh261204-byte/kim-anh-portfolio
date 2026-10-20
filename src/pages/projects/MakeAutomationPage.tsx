import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'make-automation') || projects[0]
const next = (project && projects.find(p => p.id === project.nextId)) || projects[0]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function MakeAutomationPage() {
  const { lang } = useLanguage()

  const nodes = [
    {
      num: '01',
      title: lang === 'vi' ? 'Lập lịch & Kích hoạt luồng (Scheduler / Trigger)' : 'Scheduler & Event Trigger',
      desc: lang === 'vi'
        ? 'Thiết lập kích hoạt theo chu kỳ hàng ngày hoặc tiếp nhận tín hiệu từ Webhook khi có ý tưởng/chủ đề nội dung mới được thêm vào bảng kế hoạch.'
        : 'Configured scheduled cron triggers or incoming webhooks whenever new content topics are queued in the master planner.'
    },
    {
      num: '02',
      title: lang === 'vi' ? 'Module Get Content AI (Sinh bài viết tự động)' : 'Get Content AI Module',
      desc: lang === 'vi'
        ? 'Gửi prompt có cấu trúc đến mô hình ngôn ngữ lớn để tạo nội dung theo công thức AIDA/PAS, tự sinh tiêu đề lôi cuốn, thân bài và bộ hashtag tối ưu SEO.'
        : 'Dispatches structured prompt payloads to LLM endpoints generating high-converting AIDA/PAS copy, engaging hooks, and tailored hashtags.'
    },
    {
      num: '03',
      title: lang === 'vi' ? 'Router & Xử lý chuẩn hóa dữ liệu' : 'Router & Multi-branch Formatter',
      desc: lang === 'vi'
        ? 'Phân luồng dữ liệu thông minh, trích xuất text, liên kết ảnh và chuẩn bị định dạng phù hợp với từng nền tảng trước khi đẩy sang cổng API.'
        : 'Smart routing and data transformation, extracting copy blocks, pairing image assets, and formatting payloads specifically for API contracts.'
    },
    {
      num: '04',
      title: lang === 'vi' ? 'Facebook Pages Post (Xuất bản tự động)' : 'Facebook Pages Post Module',
      desc: lang === 'vi'
        ? 'Kết nối trực tiếp Meta Graph API qua Page Access Token để tạo bài đăng kèm hình ảnh, thiết lập quyền hiển thị công khai và nhận ID bài viết phản hồi.'
        : 'Direct integration with Meta Graph API via verified Page Token to publish full post with media attachments and capture return post IDs.'
    },
  ]

  const metrics = [
    { label: lang === 'vi' ? 'Nền tảng' : 'Platform', value: 'Make.com (Integromat)' },
    { label: lang === 'vi' ? 'Vai trò' : 'Role', value: lang === 'vi' ? 'Chuyên viên Tự động hóa' : 'Automation Specialist' },
    { label: lang === 'vi' ? 'Công cụ' : 'Tools', value: 'Make · OpenAI/Gemini · Meta API' },
    { label: lang === 'vi' ? 'Hiệu quả' : 'Impact', value: lang === 'vi' ? 'Tự động 100% · Tiết kiệm 80% thời gian' : '100% Autonomous · 80% Time Saved' },
    { label: lang === 'vi' ? 'Thời gian' : 'Timeline', value: '2025–2026' },
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
        {/* Hero Header */}
        <div className="border-b border-[var(--border)] pb-12">
          <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-dark)] font-bold mb-4">
            {project.num} — {lang === 'vi' ? 'Hệ thống Tự động hóa Marketing trên Make.com' : 'Make.com Marketing Automation Pipeline'}
          </div>
          <motion.h1
            className="font-display font-extrabold leading-[1.05] mb-6 text-[var(--text-1)]"
            style={{ fontSize: 'clamp(2.25rem,5.5vw,4.5rem)', letterSpacing: '-0.03em', whiteSpace: 'pre-line' }}
            {...fadeUp(0.1)}
          >
            {project.title}
          </motion.h1>
          <motion.p className="text-[var(--text-2)] text-base max-w-[660px] leading-relaxed mb-8" {...fadeUp(0.2)}>
            {lang === 'vi' ? project.subtitle : project.subtitleEn}
          </motion.p>
          <motion.div className="flex flex-wrap gap-8" {...fadeUp(0.3)}>
            {metrics.map(m => (
              <div key={m.label}>
                <div className="text-label mb-1 text-[var(--text-3)]">{m.label}</div>
                <div className="text-sm font-bold text-[var(--text-1)]">{m.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Master Showcase Visual: Full Make.com Workflow */}
        <div className="py-12 lg:py-16">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Sơ đồ Vận hành Thực tế' : 'Live Production Architecture'}
              </div>
              <div className="text-sm font-semibold text-[var(--text-1)] mt-1">
                {lang === 'vi' ? 'Workflow Tự Động Hóa Content & Đăng Bài Đa Kênh trên Make.com' : 'Make.com End-to-End Content Generation & Auto-Posting Pipeline'}
              </div>
            </div>
            <span className="text-[10px] text-[var(--accent-dark)] font-bold tracking-[0.14em] uppercase bg-[rgba(47,102,0,0.08)] px-2.5 py-1 border border-[rgba(47,102,0,0.2)]">
              MAKE.COM SCENARIO
            </span>
          </div>

          <motion.div
            className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-md"
            {...fadeUp(0.35)}
          >
            <img
              src="/projects/make/make_workflow_overview.png"
              alt="Workflow Tự Động Hóa Content và Đăng Bài trên Make.com"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <p className="text-xs text-[var(--text-3)] mt-3 italic">
            {lang === 'vi'
              ? 'Ảnh chụp kịch bản thực tế trên Make.com: Kết nối các module AI sinh nội dung, định dạng văn bản, xử lý ảnh và tự động đăng tải trực tiếp lên Facebook Pages.'
              : 'Actual scenario snapshot on Make.com: Orchestrating AI content generation, text formatting, media attachment, and autonomous Facebook Page publishing.'}
          </p>
        </div>

        {/* Detailed Modules Deep Dive */}
        <div className="py-12 border-t border-[var(--border)]">
          <SectionLabel>{lang === 'vi' ? 'Chi Tiết Các Module Thành Phần' : 'Deep Dive Into Core Modules'}</SectionLabel>
          <h2 className="text-display mt-4 mb-8 text-[var(--text-1)]" style={{ fontSize: 'clamp(1.75rem,3.5vw,2.75rem)' }}>
            {lang === 'vi' ? 'Bóc Tách Hai Điểm Nút Trọng Yếu' : 'Inside the Two Core Nodes'}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Node 1: Get Content AI */}
            <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-6 rounded-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border)]">
                <span className="text-[10px] font-bold text-[var(--accent-dark)] tracking-[0.16em] uppercase">
                  NODE 01 · CONTENT GENERATION
                </span>
                <span className="text-xs font-mono text-[var(--text-3)]">Get Content AI</span>
              </div>
              <div className="aspect-[16/10] overflow-hidden rounded-sm border border-[var(--border)] mb-4 bg-white">
                <img
                  src="/projects/make/make_get_content_ai.png"
                  alt="Get Content AI Node trên Make.com"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-1)] mb-2">
                {lang === 'vi' ? 'Module Trí Tuệ Nhân Tạo Sinh Nội Dung (Get Content AI)' : 'AI Content Generation Node'}
              </h3>
              <p className="text-xs text-[var(--text-2)] leading-relaxed">
                {lang === 'vi'
                  ? 'Cấu hình prompt hệ thống chuẩn hóa để tạo bài viết theo cấu trúc bài đăng chuyên nghiệp: tiêu đề hook 3 giây, nội dung giải quyết vấn đề (PAS/AIDA), lời kêu gọi hành động (CTA) và hashtag phân loại.'
                  : 'System prompt configuration generating structured post copy: 3-second hook headline, problem-solving body (PAS/AIDA), clear call-to-action, and categorized hashtags.'}
              </p>
            </div>

            {/* Node 2: Facebook Post */}
            <div className="border border-[var(--border)] bg-[var(--bg-surface)] p-6 rounded-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border)]">
                <span className="text-[10px] font-bold text-[var(--accent-dark)] tracking-[0.16em] uppercase">
                  NODE 02 · SOCIAL PUBLISHER
                </span>
                <span className="text-xs font-mono text-[var(--text-3)]">Facebook Pages Post</span>
              </div>
              <div className="aspect-[16/10] overflow-hidden rounded-sm border border-[var(--border)] mb-4 bg-white">
                <img
                  src="/projects/make/make_facebook_post.png"
                  alt="Facebook Pages Post Node trên Make.com"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-1)] mb-2">
                {lang === 'vi' ? 'Module Xuất Bản Trực Tiếp Lên Fanpage (Facebook Post)' : 'Direct Fanpage Publishing Node'}
              </h3>
              <p className="text-xs text-[var(--text-2)] leading-relaxed">
                {lang === 'vi'
                  ? 'Tích hợp Meta Graph API thông qua Page Access Token; tự động gắn link ảnh, đặt nội dung caption từ module AI và kiểm soát xuất bản tức thời hoặc theo lịch hẹn giờ mà không cần thao tác tay.'
                  : 'Integrates Meta Graph API via secure Page Access Token; automatically attaches generated captions and image URLs for immediate or scheduled delivery without manual touch.'}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Steps Architecture */}
        <div className="py-12 border-t border-[var(--border)]">
          <SectionLabel>{lang === 'vi' ? 'Kiến Trúc Vận Hành' : 'Operational Architecture'}</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {nodes.map(n => (
              <div key={n.num} className="border border-[var(--border)] bg-[var(--bg-surface)] p-6 rounded-sm">
                <div className="text-xl font-display font-bold text-[var(--accent-dark)] mb-3">{n.num}</div>
                <div className="font-semibold text-sm text-[var(--text-1)] mb-2">{n.title}</div>
                <p className="text-xs text-[var(--text-2)] leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <div className="py-12 border-t border-[var(--border)]">
          <div className="p-8 bg-[rgba(47,102,0,0.04)] border border-[rgba(47,102,0,0.15)] rounded-sm">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent-dark)] font-bold mb-3">
              {lang === 'vi' ? 'NGUYÊN LÝ VẬN HÀNH' : 'OPERATIONAL PHILOSOPHY'}
            </div>
            <p className="font-display text-lg lg:text-xl font-bold text-[var(--text-1)] leading-relaxed italic">
              "{lang === 'vi' ? project.statement : project.statementEn}"
            </p>
          </div>
        </div>

        {/* Next Project */}
        <NextProject
          title={next.title}
          path={next.path}
          num={next.num}
        />
      </div>
    </PageLayout>
  )
}
