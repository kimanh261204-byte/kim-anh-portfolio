import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'n8n-marketing') || projects[0]
const next = (project && projects.find(p => p.id === project.nextId)) || projects[0]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function N8NMarketingPage() {
  const { lang } = useLanguage()

  const workflows = [
    {
      title: lang === 'vi' ? 'Đăng nội dung đa nền tảng' : 'Multi-Platform Distribution (Meta + YouTube)',
      status: lang === 'vi' ? 'Đã chạy thực tế' : 'Live in Production',
      desc: lang === 'vi' ? 'Tự động đồng bộ bài viết, ảnh và video lên đồng thời Facebook Page và YouTube Shorts/Video với lịch hẹn trước.' : 'Automated scheduling and multi-channel publishing to Facebook Page and YouTube simultaneously.'
    },
    {
      title: lang === 'vi' ? 'Facebook Webhook thu thập SĐT, Email & Gửi tài liệu' : 'Facebook Webhook Lead Capture & Auto Fulfillment',
      status: lang === 'vi' ? 'Đã chạy thực tế' : 'Live in Production',
      desc: lang === 'vi' ? 'Bắt webhook từ lead form/comment fanpage, trích xuất số điện thoại & email, lưu vào database và tự động gửi lead magnet tài liệu qua email/tin nhắn.' : 'Captures webhooks from Meta leads/comments, parses email and phone, stores in DB, and auto-delivers lead magnets.'
    },
    {
      title: lang === 'vi' ? 'Quy trình Seeding "Chim mồi" tự động' : 'Automated Seeding & Engagement Workflow',
      status: lang === 'vi' ? 'Đã chạy thực tế' : 'Live in Production',
      desc: lang === 'vi' ? 'Kịch bản nuôi dưỡng tương tác tự nhiên, kích hoạt thảo luận ban đầu dưới bài viết để tăng điểm phân phối thuật toán của nền tảng.' : 'Automated engagement seeding to stimulate initial organic discussion and boost algorithmic reach.'
    },
    {
      title: lang === 'vi' ? 'Analytics Agent — Thu thập & Báo cáo chỉ số' : 'Analytics Agent — Metric Tracking & Reporting',
      status: lang === 'vi' ? 'Demo tại Workshop AIKING' : 'Demoed at AIKING Workshop',
      desc: lang === 'vi' ? 'Agent do Kim Anh trực tiếp phụ trách phát triển: tự động cào dữ liệu hiệu suất, tổng hợp báo cáo chỉ số và gửi thông báo qua Telegram/Lark.' : 'Directly developed by Kim Anh: aggregates social metrics, generates weekly analytical summaries, and alerts the team.'
    },
    {
      title: lang === 'vi' ? 'Publisher Agent' : 'Publisher Agent',
      status: lang === 'vi' ? 'Demo tại Workshop AIKING' : 'Demoed at AIKING Workshop',
      desc: lang === 'vi' ? 'Agent trực tiếp phụ trách duyệt bài và kiểm soát luồng xuất bản nội dung tự động.' : 'Automated agent for publishing approval gates and schedule dispatching.'
    },
    {
      title: lang === 'vi' ? 'AI Content Writer Agent' : 'AI Content Writer Agent',
      status: lang === 'vi' ? 'Phối hợp phát triển' : 'Co-developed',
      desc: lang === 'vi' ? 'Agent viết bài tự động tuân thủ ngữ cảnh và giọng văn (brand voice) của thương hiệu.' : 'Agent that generates drafts adhering strictly to company brand guidelines.'
    },
  ]

  return (
    <PageLayout>
      <div className="grid-container pt-8 pb-0">
        <Link to="/work" className="inline-flex items-center gap-2 text-label hover:text-[var(--accent-dark)] transition-colors duration-200 mb-8" data-cursor="">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 6H2M6 10L2 6l4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {lang === 'vi' ? 'Dự án' : 'Work'}
        </Link>
      </div>

      <div className="grid-container">
        {/* Hero Header */}
        <div className="border-b border-[var(--border)] pb-12">
          <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-dark)] font-bold mb-4">
            {project.num} — {lang === 'vi' ? 'Hệ thống Tự động hóa Marketing' : 'Marketing Automation System'}
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
              { label: lang === 'vi' ? 'Vai trò' : 'Role', value: lang === 'vi' ? 'Chuyên viên Tự động hóa Marketing' : project.roleEn },
              { label: lang === 'vi' ? 'Công cụ' : 'Tools', value: project.tools },
              { label: lang === 'vi' ? 'Kết quả' : 'Impact', value: lang === 'vi' ? '6 Workflows · 2 chạy thực tế' : '6 Workflows · 2 in production' },
              { label: lang === 'vi' ? 'Thời gian' : 'Timeline', value: '04–06/2026' },
            ].map(m => (
              <div key={m.label}>
                <div className="text-label mb-1 text-[var(--text-3)]">{m.label}</div>
                <div className="text-sm font-bold text-[var(--text-1)]">{m.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Feature Visual: n8n Multi-platform Publisher */}
        <div className="py-12 lg:py-16">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh 1 — n8n Workflow' : 'Visual Proof 1 — n8n Workflow'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                {lang === 'vi' ? 'Quy trình Đăng nội dung đa nền tảng (Meta + YouTube)' : 'Multi-Platform Distribution Workflow'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              {lang === 'vi' ? 'Đang chạy thực tế' : 'Live Production'}
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/aiking_media/image6.png"
              alt="n8n Multi-platform Publishing Workflow"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 6 trong Báo cáo thực tập: Workflow tự động kết nối nguồn nội dung, xử lý media và phân phối đồng thời sang fanpage Meta và YouTube Shorts/Video.'
              : 'Figure 6 from Internship Report: Workflow connecting content sources, processing media, and publishing synchronously to Meta fanpages and YouTube.'}
          </p>
        </div>

        {/* The Problem & Challenge */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>{lang === 'vi' ? 'Bối cảnh & Thách thức' : 'Context & Challenge'}</SectionLabel>
            </div>
            <div className="lg:col-span-8 space-y-4 text-[var(--text-2)] text-sm leading-relaxed">
              <h2 className="text-heading text-[var(--text-1)]">
                {lang === 'vi'
                  ? 'Vận hành tiếp thị thủ công gây lãng phí 80% thời gian đăng bài và thất lạc khách hàng tiềm năng.'
                  : 'Manual marketing operations waste 80% of distribution time and leak qualified leads.'}
              </h2>
              <p>
                {lang === 'vi'
                  ? 'Tại AIKING, đội ngũ marketing phải thường xuyên sản xuất nội dung, đăng bài lên nhiều kênh (Fanpage, Group, YouTube), theo dõi tin nhắn và thu thập thông tin người quan tâm qua form/comment. Làm thủ công không chỉ tốn nhiều nhân lực mà còn dẫn đến việc phản hồi chậm trễ và bỏ sót khách hàng.'
                  : 'At AIKING, the marketing team handled content publishing across multiple platforms, monitoring leads, and capturing contact information from forms and comments. Doing this manually wasted valuable hours and delayed response times.'}
              </p>
              <p className="font-semibold text-[var(--text-1)]">
                {lang === 'vi'
                  ? 'Mục tiêu: Xây dựng hệ thống tự động hóa khép kín: Đăng bài tự động → Seeding kích hoạt thuật toán → Bắt lead tức thì bằng Webhook → Tổng hợp báo cáo chỉ số.'
                  : 'Goal: Construct an end-to-end automated system: Automated Distribution → Algorithmic Seeding → Instant Webhook Lead Capture → Automated Metric Reporting.'}
              </p>
            </div>
          </div>
        </section>

        {/* 6 Workflows breakdown */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <SectionLabel>{lang === 'vi' ? 'Danh mục 6 Workflow n8n đã xây dựng' : '6 Deployed n8n Workflows'}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {workflows.map((wf, idx) => (
              <div key={idx} className="p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[var(--accent-dark)]">0{idx + 1}</span>
                    <span className="text-[10px] tracking-wider uppercase font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-2.5 py-0.5 rounded-sm">
                      {wf.status}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[var(--text-1)] mb-2">
                    {wf.title}
                  </h3>
                  <p className="text-xs text-[var(--text-2)] leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Second Feature Visual: Analytics Agent */}
        <div className="py-12 lg:py-16 border-t border-[var(--border)]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh 2 — Analytics Agent' : 'Visual Proof 2 — Analytics Agent'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                {lang === 'vi' ? 'Analytics Agent: Thu thập, phân tích và báo cáo chỉ số' : 'Analytics Agent: Data Ingestion & Metric Reporting'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              Demo @ AIKING Workshop
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/aiking_media/image7.png"
              alt="Analytics Agent Workflow"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 7 trong Báo cáo thực tập: Kim Anh trực tiếp phụ trách phát triển Analytics Agent, tự động hóa toàn bộ việc trích xuất dữ liệu tương tác và báo cáo cho đội ngũ.'
              : 'Figure 7 from Internship Report: Kim Anh directly spearheaded the Analytics Agent, automating engagement data extraction and executive reporting.'}
          </p>
        </div>

        {/* Key Results */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>{lang === 'vi' ? 'Kết quả & Giá trị mang lại' : 'Results & Business Impact'}</SectionLabel>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4 text-sm text-[var(--text-2)] leading-relaxed">
                {(lang === 'vi' ? [
                  '2 workflow vận hành thực tế hỗ trợ đội ngũ xuất bản nội dung nhanh chóng, loại bỏ nguy cơ trễ lịch đăng bài.',
                  'Webhook bắt lead thời gian thực (real-time) giúp tỷ lệ phản hồi khách hàng tiềm năng đạt dưới 3 phút.',
                  'Kịch bản seeding tự động kích hoạt lượt tương tác mồi ban đầu, cải thiện độ hiển thị tự nhiên của bài viết.',
                  'Hai Agent (Publisher & Analytics) do Kim Anh phát triển được ban giám đốc đánh giá cao và chọn demo trực tiếp tại Workshop công ty (19/05/2026).',
                ] : [
                  '2 production workflows deployed live, eliminating manual multi-platform publishing overhead.',
                  'Real-time webhook capture enabled sub-3-minute customer response times.',
                  'Automated seeding workflows primed organic algorithm distribution for company posts.',
                  'Both Publisher & Analytics agents developed by Kim Anh were selected for live demonstration at the company workshop (May 19, 2026).',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-[var(--bg-surface)] border border-[var(--border)] rounded-sm">
                    <span className="text-[var(--accent-dark)] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>

      <NextProject title={next.title.replace('\n', ' ')} path={next.path} num={next.num} />
    </PageLayout>
  )
}
