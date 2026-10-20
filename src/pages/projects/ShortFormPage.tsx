import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'short-form') || projects[0]
const next = (project && projects.find(p => p.id === project.nextId)) || projects[0]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function ShortFormPage() {
  const { lang } = useLanguage()

  const sampleVideos = [
    {
      src: '/projects/tiktok_videos/tiktok_clip_1.mp4',
      title: 'Review & Unbox Sản phẩm #01',
      views: '35.9K Views',
      tag: 'Tranh Van Gogh'
    },
    {
      src: '/projects/tiktok_videos/tiktok_clip_2.mp4',
      title: 'UGC Review Mỹ phẩm #02',
      views: 'High Retention',
      tag: 'Xịt thơm miệng / Khoá nền'
    },
    {
      src: '/projects/tiktok_videos/tiktok_clip_3.mp4',
      title: 'Lifestyle & Unbox #03',
      views: 'Affiliate UGC',
      tag: 'Đèn hoàng hôn / Thời trang'
    },
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
          <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-dark)] font-bold mb-4">{project.num} — TikTok Content Creator</div>
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
          <motion.div className="flex flex-wrap gap-8 mb-8" {...fadeUp(0.3)}>
            {[
              { label: lang === 'vi' ? 'Tài khoản' : 'Account', value: '@_yudhhna (TikTok)' },
              { label: lang === 'vi' ? 'Vai trò' : 'Role', value: 'Creator · Producer · Editor' },
              { label: lang === 'vi' ? 'Định dạng' : 'Format', value: 'Unboxing · Review · UGC Affiliate' },
              { label: lang === 'vi' ? 'Video nổi bật' : 'Top Video', value: '35.9K Views (Tranh Van Gogh)' },
              { label: lang === 'vi' ? 'Thời gian' : 'Timeline', value: '2025–2026' },
            ].map(m => (
              <div key={m.label}>
                <div className="text-label mb-1 text-[var(--text-3)]">{m.label}</div>
                <div className="text-sm font-bold text-[var(--text-1)]">{m.value}</div>
              </div>
            ))}
          </motion.div>
          <motion.div {...fadeUp(0.4)}>
            <a
              href="https://www.tiktok.com/@_yudhhna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent-dark)] text-white text-xs font-bold tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm hover:opacity-90 transition-all shadow-sm"
            >
              Truy cập kênh TikTok @_yudhhna ↗
            </a>
          </motion.div>
        </div>

        {/* Feature Visual: Account Screenshot */}
        <div className="py-12 lg:py-16">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Kênh TikTok' : 'TikTok Channel Proof'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                Giao diện kênh @_yudhhna & Bộ video Review thực tế
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              Đang hoạt động
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/tiktok/tiktok_yudhhna.png"
              alt="Kênh TikTok @_yudhhna"
              className="w-full h-auto object-cover max-h-[650px] object-top"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Ảnh chụp thực tế kênh TikTok @_yudhhna: Danh mục sản phẩm review gồm Tranh Van Gogh (35.9K views), Xịt thơm miệng Kissing Spray, Xịt khóa nền Pramy, Nước hoa nam A:Moures, Đèn hoàng hôn, Quần nỉ ống rộng Fabulous, Mask Pad Emmie...'
              : 'Real screenshot of @_yudhhna: Catalog of unboxed & reviewed products with high retention.'}
          </p>
        </div>

        {/* Real Embedded Videos */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <SectionLabel>{lang === 'vi' ? 'Các Video Đã Sản Xuất Thực Tế' : 'Live Produced TikTok Videos'}</SectionLabel>
          <p className="text-sm text-[var(--text-2)] mt-2 mb-8">
            {lang === 'vi'
              ? 'Các video do Kim Anh trực tiếp lên kịch bản, quay, dựng hiệu ứng và âm thanh trên CapCut:'
              : 'Direct video clips scripted, shot, and edited by Kim Anh using CapCut:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sampleVideos.map((vid, idx) => (
              <div key={idx} className="bg-[var(--bg-surface)] border border-[var(--border)] p-4 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase font-bold text-[var(--accent-dark)]">{vid.tag}</span>
                    <span className="text-[11px] font-semibold text-[var(--text-2)]">{vid.views}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-[var(--text-1)] mb-3">{vid.title}</h4>
                  <div className="rounded overflow-hidden bg-black aspect-[9/16] mb-3">
                    <video
                      src={vid.src}
                      controls
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="text-[11px] text-[var(--text-3)] text-center pt-2 border-t border-[var(--border)]">
                  TikTok Video Source File
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Strategy & Hook Methodology */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4"><SectionLabel>{lang === 'vi' ? 'Chiến lược Sản xuất' : 'Production Strategy'}</SectionLabel></div>
            <div className="lg:col-span-8 space-y-4 text-[var(--text-2)] text-sm leading-relaxed">
              <h2 className="text-heading text-[var(--text-1)]">
                {lang === 'vi'
                  ? 'Quy trình sản xuất độc lập: Tối ưu 2 giây đầu tiên để bứt phá thuật toán.'
                  : 'Independent production workflow: 2-second hook optimization.'}
              </h2>
              <p>
                {lang === 'vi'
                  ? 'Tài khoản @_yudhhna là môi trường rèn luyện kỷ luật sản xuất video ngắn tốc độ cao của Kim Anh: tự nghiên cứu sản phẩm đang thịnh hành (trending), viết kịch bản mở đầu giải quyết ngay sự tò mò của người xem, quay cận cảnh sản phẩm với ánh sáng tự nhiên và cắt dựng nhịp điệu nhanh trên CapCut.'
                  : '@_yudhhna is a testing ground for fast-paced short-form production: researching trending products, drafting curiosity hooks, natural product shooting, and tight CapCut editing.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-sm">
                  <div className="text-[var(--accent-dark)] font-bold text-xs uppercase mb-1">01. Visual Hook</div>
                  <p className="text-xs text-[var(--text-3)]">Cận cảnh chi tiết hoặc hành động mở hộp bất ngờ trong 1.5s đầu.</p>
                </div>
                <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-sm">
                  <div className="text-[var(--accent-dark)] font-bold text-xs uppercase mb-1">02. Pacing & Rhythm</div>
                  <p className="text-xs text-[var(--text-3)]">Cắt gọn mọi khoảng lặng, chuyển cảnh theo nhịp nhạc nền.</p>
                </div>
                <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-sm">
                  <div className="text-[var(--accent-dark)] font-bold text-xs uppercase mb-1">03. Natural CTA</div>
                  <p className="text-xs text-[var(--text-3)]">Kêu gọi vào giỏ hàng hoặc xem phần tiếp theo một cách tự nhiên.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <NextProject title={next.title.replace('\n', ' ')} path={next.path} num={next.num} />
    </PageLayout>
  )
}
