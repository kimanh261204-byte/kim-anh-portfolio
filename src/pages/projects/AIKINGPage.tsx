import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'aiking-video') || projects[2]
const next = projects.find(p => p.id === project.nextId) || projects[3]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function AIKINGPage() {
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
            {project.num} — {lang === 'vi' ? 'Sản xuất Phim ngắn AI' : 'AI Short Film Production'}
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
              { label: lang === 'vi' ? 'Vai trò' : 'Role', value: 'AI Video Producer' },
              { label: lang === 'vi' ? 'Phát hành' : 'Distribution', value: lang === 'vi' ? 'Đăng Fanpage chính thức' : 'Official AIKING Fanpage' },
              { label: lang === 'vi' ? 'Công cụ' : 'Tools', value: project.tools },
              { label: lang === 'vi' ? 'Năm' : 'Year', value: project.year },
            ].map(m => (
              <div key={m.label}>
                <div className="text-label mb-1 text-[var(--text-3)]">{m.label}</div>
                <div className="text-sm font-bold text-[var(--text-1)]">{m.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured Video Player — "Tiệm Tạp Hóa" */}
        <div className="py-12 lg:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Tác phẩm tiêu biểu — Video chính thức' : 'Featured Work — Official Published Video'}
              </div>
              <h3 className="font-display font-bold text-xl text-[var(--text-1)]">
                "Tiệm Tạp Hóa" — AI Storytelling Short Film
              </h3>
            </div>
            <span className="text-xs font-bold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1.5 rounded-sm border border-[rgba(47,102,0,0.2)]">
              ✓ ĐÃ ĐĂNG TRÊN FANPAGE AIKING
            </span>
          </div>

          {/* Embedded Real Video */}
          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-black shadow-lg aspect-video">
            <video
              src="/projects/videos/tiem-tap-hoa.mp4"
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Tệp video nguồn: 0501.mp4 (trong thư mục Production/TIEMTAPHOA tại AIKING). Sản xuất toàn bộ quy trình: Idea → Script → Storyboard → Generation → Editing → Sound → Post.'
              : 'Master file: 0501.mp4 (from Production/TIEMTAPHOA at AIKING). End-to-end pipeline: Concept → Script → Storyboard → Generation → Editing → Sound.'}
          </p>
        </div>

        {/* Challenge & Approach */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4"><SectionLabel>{lang === 'vi' ? 'Thách thức & Phương pháp' : 'Challenge & Approach'}</SectionLabel></div>
            <div className="lg:col-span-8 space-y-4 text-[var(--text-2)] text-sm leading-relaxed">
              <h2 className="text-heading text-[var(--text-1)]">
                {lang === 'vi' ? 'Video AI phải có chiều sâu cảm xúc, không chỉ là hiệu ứng demo.' : 'AI video must tell a real story, not just showcase software tricks.'}
              </h2>
              <p>
                {lang === 'vi'
                  ? 'Tại AIKING, video không chỉ dừng ở việc tạo cảnh ấn tượng mà phải truyền tải được câu chuyện có hồn, đúng tone giọng thương hiệu và thu hút được tương tác thật từ khán giả trên mạng xã hội.'
                  : 'At AIKING, videos could not simply be visual gimmicks; they had to carry emotional resonance and genuine storytelling capable of driving real engagement on social media.'}
              </p>
              <p className="font-semibold text-[var(--text-1)]">
                {lang === 'vi' ? 'Nguyên lý cốt lõi: Câu chuyện đi trước. AI là công cụ thực thi.' : 'Core principle: Story comes first. AI serves the narrative.'}
              </p>

              {/* Pipeline nodes */}
              <div className="pt-4">
                <div className="flex flex-wrap items-center gap-0">
                  {(lang === 'vi'
                    ? ['Ý tưởng', 'Kịch bản', 'Storyboard', 'Tạo sinh', 'Dựng phim', 'Âm thanh', 'Xuất bản']
                    : ['Concept','Script','Storyboard','Generation','Editing','Sound','Publish']
                  ).map((s, i, arr) => (
                    <div key={s} className="flex items-center">
                      <div className={`wf-node ${i === arr.length - 1 ? 'terminal' : ''}`}>{s}</div>
                      {i < arr.length - 1 && <div className="wf-arrow"/>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Video Productions */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <SectionLabel>{lang === 'vi' ? 'Hai Định dạng Video Thử nghiệm Bổ trợ' : 'Two Supporting Production Formats'}</SectionLabel>
          <p className="text-sm text-[var(--text-2)] mt-2 mb-8">
            {lang === 'vi'
              ? 'Trong cùng kỳ thực tập, Kim Anh sản xuất thêm 2 định dạng video để thử nghiệm các phong cách khác nhau: Video chủ đề sức khỏe và Video giới thiệu sản phẩm.'
              : 'During the same internship, Kim Anh produced two additional formats to test varying visual styles: Health topics and Product showcases.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Health Video */}
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] p-4 rounded-sm">
              <h4 className="font-display font-bold text-sm text-[var(--text-1)] mb-3">
                02 — Video Chủ đề Sức Khỏe (0502.mp4)
              </h4>
              <div className="rounded overflow-hidden bg-black aspect-video mb-3">
                <video src="/projects/videos/video-health.mp4" controls playsInline className="w-full h-full object-contain" />
              </div>
              <p className="text-xs text-[var(--text-3)]">
                {lang === 'vi' ? 'Thử nghiệm nhịp cắt và voiceover thông tin y khoa.' : 'Testing pacing and informative medical voiceover.'}
              </p>
            </div>

            {/* Product Video */}
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] p-4 rounded-sm">
              <h4 className="font-display font-bold text-sm text-[var(--text-1)] mb-3">
                03 — Video Giới Thiệu Sản Phẩm (0528.mp4)
              </h4>
              <div className="rounded overflow-hidden bg-black aspect-video mb-3">
                <video src="/projects/videos/video-product.mp4" controls playsInline className="w-full h-full object-contain" />
              </div>
              <p className="text-xs text-[var(--text-3)]">
                {lang === 'vi' ? 'Thử nghiệm góc quay sản phẩm và chuyển động góc máy mượt mà.' : 'Testing product camera angles and smooth dynamic motion.'}
              </p>
            </div>
          </div>
        </section>

        {/* Takeaway & Learnings */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4"><SectionLabel>{lang === 'vi' ? 'Kết quả & Giá trị đúc kết' : 'Key Takeaways'}</SectionLabel></div>
            <div className="lg:col-span-8">
              <ul className="space-y-3 text-sm text-[var(--text-2)] leading-relaxed">
                {(lang === 'vi' ? [
                  '"Tiệm Tạp Hóa" được ban giám đốc AIKING lựa chọn đăng chính thức trên Fanpage công ty, khẳng định chất lượng đạt tiêu chuẩn thương mại.',
                  'Lên kế hoạch Storyboard chi tiết trước khi render giúp tiết kiệm tới 70% credits tạo sinh và tránh tình trạng lệch nhân vật.',
                  'Kinh nghiệm thực chiến từ 3 video này là nền tảng trực tiếp để xây dựng ứng dụng UGC Creator Studio Pro.',
                ] : [
                  '"Tiệm Tạp Hóa" was selected for official publication on AIKING fanpage, proving commercial quality.',
                  'Storyboard pre-planning reduced wasted generation credits by 70% and avoided character drift.',
                  'This production experience directly fed into building the UGC Creator Studio Pro engine.',
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
