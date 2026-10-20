import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'sua-la-meo') || projects[0]
const next = (project && projects.find(p => p.id === project.nextId)) || projects[0]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function SuaLaMeoPage() {
  const { lang } = useLanguage()

  const petVideos = [
    {
      src: '/projects/tiktok_videos/tiktok_clip_4.mp4',
      title: 'Khoảnh khắc Sứa Là Mèo #01',
      tag: '57.4K Views Ghim',
      desc: 'Câu chuyện đời thường giàu cảm xúc và thu hút tương tác bình luận cao.'
    },
    {
      src: '/projects/tiktok_videos/tiktok_clip_5.mp4',
      title: 'Pet UGC Review & Đời sống #02',
      tag: '8.7K Views / Dazzle Pet Food',
      desc: 'Video review hạt Dazzle & pate iMEO lồng ghép tự nhiên vào thói quen ăn uống của mèo.'
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
          <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-dark)] font-bold mb-4">
            {project.num} — {lang === 'vi' ? 'Kênh TikTok Đời sống Thú Cưng & UGC' : 'TikTok Pet Lifestyle & UGC Creator'}
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
          <motion.div className="flex flex-wrap gap-8 mb-8" {...fadeUp(0.3)}>
            {[
              { label: lang === 'vi' ? 'Tài khoản' : 'Account', value: 'Sứa Là Mèo! (@sua_la_meo)' },
              { label: lang === 'vi' ? 'Vai trò' : 'Role', value: 'Pet Content Creator · Storyteller' },
              { label: lang === 'vi' ? 'Kỷ lục View' : 'Top Video', value: '57.4K Views (Video ghim)' },
              { label: lang === 'vi' ? 'Hợp tác nhãn hàng' : 'Brand UGC', value: 'Pate iMEO · Thức ăn hạt Dazzle' },
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
              href="https://www.tiktok.com/@sua_la_meo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent-dark)] text-white text-xs font-bold tracking-[0.14em] uppercase px-6 py-3.5 rounded-sm hover:opacity-90 transition-all shadow-sm"
            >
              Truy cập kênh TikTok @sua_la_meo ↗
            </a>
          </motion.div>
        </div>

        {/* Feature Visual: Account Screenshot */}
        <div className="py-12 lg:py-16">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Kênh TikTok Thú Cưng' : 'Pet Channel Proof'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                Kênh "Sứa Là Mèo!" — Video ghim 57.4K Views & Chuỗi Video Đời Sống
              </h3>
            </div>
            <span className="text-xs font-semibold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-3 py-1 rounded-sm">
              Đang hoạt động
            </span>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/tiktok/tiktok_sua_la_meo.png"
              alt="Kênh TikTok Sứa Là Mèo!"
              className="w-full h-auto object-cover max-h-[650px] object-top"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Ảnh chụp thực tế kênh @sua_la_meo: Video ghim đầu kênh đạt 57.4K views, chuỗi video đời sống và review sản phẩm chăm sóc thú cưng (hạt Dazzle 8.7K views, video 7.6K views, pate iMEO...).'
              : 'Real screenshot of @sua_la_meo: Pinned video reached 57.4K views with consistent lifestyle and pet care UGC.'}
          </p>
        </div>

        {/* Real Embedded Pet Videos */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <SectionLabel>{lang === 'vi' ? 'Các Video Đã Sản Xuất Trên Kênh' : 'Channel Video Source Clips'}</SectionLabel>
          <p className="text-sm text-[var(--text-2)] mt-2 mb-8">
            {lang === 'vi'
              ? 'Các video do Kim Anh quay và dựng thực tế, khai thác biểu cảm tự nhiên và kịch bản thoại gần gũi:'
              : 'Real footage shot and edited by Kim Anh capturing authentic pet moments:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px]">
            {petVideos.map((vid, idx) => (
              <div key={idx} className="bg-[var(--bg-surface)] border border-[var(--border)] p-5 rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase font-bold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-2.5 py-0.5 rounded-sm">
                      {vid.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-[var(--text-1)] mb-2">{vid.title}</h4>
                  <p className="text-xs text-[var(--text-2)] mb-4">{vid.desc}</p>
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

        {/* Storytelling & Pet UGC Insights */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4"><SectionLabel>{lang === 'vi' ? 'Bài học & Năng lực' : 'Insights & Competence'}</SectionLabel></div>
            <div className="lg:col-span-8 space-y-4 text-[var(--text-2)] text-sm leading-relaxed">
              <h2 className="text-heading text-[var(--text-1)]">
                {lang === 'vi'
                  ? 'Kể chuyện chân thực xây dựng tệp khán giả trung thành và thúc đẩy chuyển đổi tự nhiên.'
                  : 'Authentic storytelling drives loyal community and native affiliate conversions.'}
              </h2>
              <p>
                {lang === 'vi'
                  ? 'Nội dung thú cưng đòi hỏi sự kiên nhẫn bắt trọn khoảnh khắc tự nhiên kết hợp lồng ghép lời bình dí dỏm. Khi review sản phẩm (như pate hoặc hạt dinh dưỡng), việc đưa vào ngữ cảnh sinh hoạt hàng ngày giúp nội dung không mang cảm giác quảng cáo lộ liễu, từ đó tỷ lệ tin tưởng và xem hết video (completion rate) đạt mức rất cao.'
                  : 'Pet content requires capturing spontaneous moments combined with engaging voiceovers. Native product placement into daily feeding routines preserves high retention and organic viewer trust.'}
              </p>
            </div>
          </div>
        </section>

      </div>

      <NextProject title={next.title.replace('\n', ' ')} path={next.path} num={next.num} />
    </PageLayout>
  )
}
