import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'lark-operations') || projects[0]
const next = (project && projects.find(p => p.id === project.nextId)) || projects[0]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function LarkOperationsPage() {
  const { lang } = useLanguage()

  const automations = [
    { title: 'Thông báo dự án mới', desc: 'Tự động tạo kênh trao đổi và ping thành viên liên quan khi dự án được khởi tạo.' },
    { title: 'Phân công task mới', desc: 'Gửi tin nhắn trực tiếp đến người phụ trách kèm deadline và tài liệu brief đính kèm.' },
    { title: 'Báo quản lý khi nộp bài', desc: 'Cập nhật trạng thái và chuyển thông báo đến leader để vào duyệt sản phẩm.' },
    { title: 'Thông báo task bị từ chối', desc: 'Gửi phản hồi yêu cầu chỉnh sửa kèm ghi chú chi tiết từ người duyệt.' },
    { title: 'Hoàn thành task & lưu trữ', desc: 'Ghi nhận tiến độ vào dashboard tổng và tự động chuyển task vào kho lưu trữ.' },
    { title: 'Cảnh báo blocker & trở ngại', desc: 'Gửi cảnh báo khẩn cấp khi task bị kẹt hoặc thiếu tài nguyên đầu vào.' },
    { title: 'Nhắc trước deadline 1 ngày', desc: 'Tự động nhắc nhở người phụ trách kiểm tra tiến độ trước hạn nộp.' },
    { title: 'Cảnh báo trễ hạn quá deadline', desc: 'Gửi thông báo định kỳ đến cả nhân sự và leader khi task quá hạn.' },
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
            {project.num} — {lang === 'vi' ? 'Vận hành Tiếp thị & Tự động hóa' : 'Marketing Operations & Automation'}
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
              { label: lang === 'vi' ? 'Quy mô' : 'Scale', value: lang === 'vi' ? 'Triển khai cho 8 nhân sự' : 'Deployed for 8 team members' },
              { label: lang === 'vi' ? 'Tự động hóa' : 'Automation', value: lang === 'vi' ? '8 luồng đang chạy' : '8 live triggers' },
              { label: lang === 'vi' ? 'Chuẩn hóa thương hiệu' : 'Branding', value: lang === 'vi' ? '7 Profile chuyên gia AI' : '7 B2B AI Expert Profiles' },
              { label: lang === 'vi' ? 'Thời gian' : 'Timeline', value: '05–06/2026' },
            ].map(m => (
              <div key={m.label}>
                <div className="text-label mb-1 text-[var(--text-3)]">{m.label}</div>
                <div className="text-sm font-bold text-[var(--text-1)]">{m.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Feature Visual 1: Lark Base Management */}
        <div className="py-12 lg:py-16">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh 1 — Lark Base Database' : 'Visual Proof 1 — Lark Base Database'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                {lang === 'vi' ? 'Hệ thống Quản lý Task & Dự án trên Lark Base' : 'Lark Base Project & Task Management Database'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              8 Nhân sự vận hành
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/aiking_media/image1.png"
              alt="Lark Base Project & Task Management"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 1 trong Báo cáo thực tập: Cơ sở dữ liệu dự án và công việc trên Lark Base do Kim Anh thiết lập dưới sự cố vấn của chị Thảo (PM phụ trách Lark Suite tại UpBase) và chị Thùy Trinh.'
              : 'Figure 1 from Internship Report: Project and task database designed by Kim Anh under the guidance of Lark Suite PM.'}
          </p>
        </div>

        {/* Feature Visual 2: Lark Automations Center */}
        <div className="py-12 lg:py-16 border-t border-[var(--border)]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh 2 — Trung tâm Automation' : 'Visual Proof 2 — Automation Center'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                {lang === 'vi' ? 'Trung tâm Automation với 8 luồng đang hoạt động' : 'Automation Center with 8 Active Triggers'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              8 Luồng kích hoạt tự động
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/aiking_media/image2.png"
              alt="Lark Automations Center"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 2 trong Báo cáo thực tập: 8 luồng automation nhắc việc tự động giúp xóa bỏ nguy cơ bỏ sót hạn nộp bài và giảm 90% việc nhắn tin giục việc thủ công.'
              : 'Figure 2 from Internship Report: 8 active automation triggers eliminating missed deadlines.'}
          </p>
        </div>

        {/* 8 Luồng Automation */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <SectionLabel>{lang === 'vi' ? '8 Luồng Automation vận hành trên Lark' : '8 Active Automation Workflows'}</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {automations.map((a, idx) => (
              <div key={idx} className="p-5 bg-[var(--bg-surface)] border border-[var(--border)] rounded-sm">
                <span className="font-mono text-xs font-bold text-[var(--accent-dark)] mb-2 block">LUỒNG 0{idx + 1}</span>
                <h4 className="font-display font-bold text-sm text-[var(--text-1)] mb-2">{a.title}</h4>
                <p className="text-xs text-[var(--text-2)] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Visual 3: B2B Profile Standardization */}
        <div className="py-12 lg:py-16 border-t border-[var(--border)]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh 3 — Chuẩn hóa Thương hiệu B2B' : 'Visual Proof 3 — B2B Brand Standardization'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                {lang === 'vi' ? 'Bộ tiêu chuẩn Profile/Fanpage chuyên gia AI (Thang điểm 50)' : 'AI Expert Profile Audit Rubric (50-point scale)'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              7 Tài khoản chuẩn hóa
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm max-w-[900px]">
            <img
              src="/projects/aiking_media/image3.png"
              alt="Profile B2B Standardization"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 3 trong Báo cáo thực tập: Kim Anh nghiên cứu, xây dựng thang điểm 50 và trực tiếp giám sát chuẩn hóa 7 tài khoản chuyên gia AI của AIKING phục vụ chiến dịch AIKING AI Hackathon – Summer Course 2026.'
              : 'Figure 3 from Internship Report: 50-point rubric developed by Kim Anh to standardize 7 B2B AI expert profiles.'}
          </p>
        </div>

      </div>

      <NextProject title={next.title.replace('\n', ' ')} path={next.path} num={next.num} />
    </PageLayout>
  )
}
