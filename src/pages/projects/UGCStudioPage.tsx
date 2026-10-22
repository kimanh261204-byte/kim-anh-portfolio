import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'ugc-studio') || projects[0]
const next = (project && projects.find(p => p.id === project.nextId)) || projects[0]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function UGCStudioPage() {
  const { lang } = useLanguage()

  const workflow = lang === 'vi'
    ? ['Ảnh sản phẩm', 'Ý tưởng', 'Kịch bản', 'Nhân vật', 'Storyboard', 'Tạo sinh cảnh', 'Lồng tiếng', 'Dựng phim', 'Sản phẩm hoàn chỉnh']
    : ['Product Image','Concept','Script','Character','Storyboard','Scene Generation','Voiceover','Editing','Final Output']

  return (
    <PageLayout>
      {/* Back */}
      <div className="grid-container pt-8 pb-0">
        <Link to="/work" className="inline-flex items-center gap-2 text-label hover:text-[var(--accent-dark)] transition-colors duration-200 mb-8" data-cursor="">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 6H2M6 10L2 6l4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {lang === 'vi' ? 'Dự án' : 'Work'}
        </Link>
      </div>

      {/* Project Hero */}
      <div className="grid-container">
        <div className="border-b border-[var(--border)] pb-12">
          <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-dark)] font-semibold mb-4">
            {project.num} — {lang === 'vi' ? 'Dự án trọng tâm' : 'Hero Project'}
          </div>
          <motion.h1
            className="font-display font-bold leading-[1.1] mb-8 text-[var(--text-1)]"
            style={{ fontSize: 'clamp(2.8rem,8vw,7rem)', letterSpacing: '-0.04em', whiteSpace: 'pre-line' }}
            {...fadeUp(0.1)}
          >
            {project.title}
          </motion.h1>
          <motion.p className="text-[var(--text-2)] text-base max-w-[520px] leading-relaxed mb-10" {...fadeUp(0.2)}>
            {lang === 'vi' ? 'Quy trình ứng dụng AI sản xuất video UGC toàn trình từ đầu đến cuối' : project.subtitle}
          </motion.p>

          {/* Meta */}
          <motion.div className="flex flex-wrap gap-10" {...fadeUp(0.3)}>
            {[
              { label: lang === 'vi' ? 'Vai trò' : 'Role', value: lang === 'vi' ? 'Sản xuất Video AI · Thiết kế Workflow' : project.role },
              { label: lang === 'vi' ? 'Công cụ' : 'Tools', value: project.tools },
              { label: lang === 'vi' ? 'Loại hình' : 'Type', value: lang === 'vi' ? 'Workflow AI · Sản xuất UGC' : 'AI Workflow · UGC' },
              { label: lang === 'vi' ? 'Năm' : 'Year', value: project.year },
            ].map(m => (
              <div key={m.label}>
                <div className="text-label mb-1 text-[var(--text-3)]">{m.label}</div>
                <div className="text-sm font-semibold text-[var(--text-1)]">{m.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="grid-container">

        {/* Video hero / Real Visual */}
        <motion.div className="py-12 lg:py-16" {...fadeUp(0.3)}>
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-label text-[var(--text-3)]">
                {lang === 'vi' ? 'Minh chứng Hình ảnh — Giao diện Công cụ' : 'Visual Proof — Tool Interface'}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-1)]">
                Marketing AI Studio & UGC Creator Studio Pro
              </h3>
            </div>
            <a
              href="https://labs.google/fx/tools/flow/shared/tool/169e3d95-3d71-4d6b-9a1d-9242f66e1901"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-4 py-2 rounded-sm border border-[rgba(47,102,0,0.2)] hover:bg-[var(--accent)] hover:text-black transition-colors"
            >
              {lang === 'vi' ? 'Mở Google Flow Tool ↗' : 'Open Google Flow Tool ↗'}
            </a>
          </div>

          <div className="rounded-sm overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <img
              src="/projects/aiking_media/image5.png"
              alt="Marketing AI Studio"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xs text-[var(--text-3)] mt-3">
            {lang === 'vi'
              ? 'Hình 5 trong Báo cáo thực tập: Marketing AI Studio / UGC Creator Studio Pro được xây dựng trên Google Flow, tích hợp khóa nhận diện sản phẩm (Product Identity Lock) và xuất video UGC chuẩn phát hành.'
              : 'Figure 5 from Internship Report: Marketing AI Studio / UGC Creator Studio Pro built on Google Flow with Product Identity Lock.'}
          </p>
        </motion.div>

        {/* The Challenge */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>{lang === 'vi' ? 'Thách thức' : 'The Challenge'}</SectionLabel>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-heading mb-6 text-[var(--text-1)]">
                {lang === 'vi' ? 'Video UGC khó mở rộng quy mô.\nTôi tạo ra hệ thống để giải quyết.' : 'UGC is hard to scale.\nI built a system to fix that.'}
              </h2>
              <div className="space-y-4 text-[var(--text-2)] leading-relaxed text-sm">
                <p>
                  {lang === 'vi'
                    ? 'Video quảng cáo phong cách UGC quay thủ công rất tốn kém và khó mở rộng số lượng lớn. Cứ mỗi sản phẩm mới lại phải bắt đầu lại từ con số 0: tìm mẫu, lên concept, quay từng cảnh rời rạc.'
                    : 'UGC ads are expensive to produce manually and nearly impossible to scale. Every new product means starting from zero — new concept, new character, new scenes.'}
                </p>
                <p>
                  <strong className="text-[var(--text-1)] font-semibold">
                    {lang === 'vi'
                      ? 'Câu hỏi cốt lõi: Làm sao xây dựng quy trình chỉ từ một bức ảnh sản phẩm có thể tạo ra video quảng cáo UGC chuẩn chỉnh — lặp lại được và chất lượng luôn đồng đều?'
                      : 'The core question: Can I build a workflow that takes a product image and outputs a production-ready UGC ad — consistently, and repeatably?'}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Approach */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>{lang === 'vi' ? 'Phương pháp tiếp cận' : 'The Approach'}</SectionLabel>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-heading mb-6 text-[var(--text-1)]">
                {lang === 'vi' ? 'Không tạo video ngẫu hứng lẻ tẻ.\nXây dựng cả hệ thống sản xuất.' : 'Don\'t generate one-off videos.\nBuild a production system.'}
              </h2>
              <div className="space-y-4 text-[var(--text-2)] leading-relaxed text-sm">
                <p>
                  {lang === 'vi'
                    ? 'Thay vì coi mỗi video là một thử nghiệm ngẫu nhiên, tôi thiết kế một pipeline sản xuất hoàn chỉnh trong đó bước này làm đầu vào chuẩn cho bước kế tiếp. Mọi thông số đều được quy chuẩn.'
                    : 'Instead of approaching each video as a fresh project, I designed a full production pipeline where each step feeds the next. Every output is documented. Every decision is a template.'}
                </p>
                <p>
                  <strong className="text-[var(--text-1)] font-semibold">
                    {lang === 'vi'
                      ? '3 bài toán khó được giải quyết triệt để: Khóa nhận diện sản phẩm (không méo mó), đồng nhất nhân vật qua các cảnh, và liên tục cảnh quay tự nhiên.'
                      : 'Three core challenges solved: product identity lock, character consistency across scenes, and scene continuity without manual intervention.'}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>{lang === 'vi' ? 'Quy trình sản xuất' : 'Workflow'}</SectionLabel>
              <p className="text-xs text-[var(--text-3)] mt-4 leading-relaxed">
                {lang === 'vi' ? '9 bước. Từ dữ liệu thô đến video hoàn chỉnh. Mọi bước đều có tài liệu hướng dẫn.' : '9 steps. Input to output. Every step documented.'}
              </p>
            </div>
            <div className="lg:col-span-8">
              {/* Horizontal flow */}
              <div className="flex flex-wrap items-center gap-0 mb-10">
                {workflow.map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className={`wf-node ${i === workflow.length - 1 ? 'terminal' : ''}`}>{step}</div>
                    {i < workflow.length - 1 && <div className="wf-arrow mx-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Systems */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <SectionLabel>{lang === 'vi' ? 'Các hệ thống cốt lõi' : 'Key Systems Built'}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border)] mt-8 bg-[var(--bg)]">
            {[
              {
                label: lang === 'vi' ? 'Khóa nhận diện sản phẩm' : 'Product Identity Lock',
                desc: lang === 'vi' ? 'Kỹ thuật neo hình ảnh tham chiếu giúp AI giữ nguyên bao bì và nhãn mác sản phẩm qua mọi góc quay.' : 'Visual reference anchors prevent AI drift. The product looks the same in every scene.'
              },
              {
                label: lang === 'vi' ? 'Kiến trúc Prompt modul hóa' : 'Prompt Architecture',
                desc: lang === 'vi' ? 'Template mẹ tích hợp các tham số biến thiên về nhân vật, cảm xúc và ánh sáng để dễ dàng tạo biến thể.' : 'A master template with slots for product, mood, character, and scene — not a single prompt.'
              },
              {
                label: lang === 'vi' ? 'Cổng kiểm duyệt chất lượng' : 'Quality Rubric',
                desc: lang === 'vi' ? 'Mỗi lượt render phải vượt qua bộ lọc tiêu chuẩn: thấy rõ sản phẩm, gương mặt tự nhiên, không biến dạng vật lý.' : 'Every generation pass goes through a structured gate: product visible, character consistent, no artifacts.'
              },
            ].map((item, i) => (
              <div key={item.label} className={`p-8 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-[var(--border)]' : ''}`}>
                <div className="text-[var(--accent-dark)] font-semibold text-[10px] tracking-[0.18em] uppercase mb-3">{item.label}</div>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Learnings */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>{lang === 'vi' ? 'Bài học rút ra' : 'Key Learnings'}</SectionLabel>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-0">
                {(lang === 'vi' ? [
                  'Kỹ thuật chuẩn bị dữ liệu hình ảnh (Product evidence framing) là yếu tố quyết định. Không có hình neo chuẩn, AI sẽ sinh ra sai lệch.',
                  'Kiến trúc prompt là thiết kế hệ thống, không phải tài năng văn chương. Bạn đang dựng sẵn một khuôn mẫu tái sử dụng.',
                  'Giá trị thực sự nằm ở quy trình vận hành chứ không chỉ là một video đơn lẻ. Hệ thống có tài liệu chuẩn mới là tài sản lâu dài.',
                  'Độ nhất quán của nhân vật ảo đòi hỏi quy trình tạo ảnh tham chiếu riêng biệt ngay từ ban đầu.',
                ] : [
                  'Product evidence framing is everything. Without strong visual anchors, AI generation drifts.',
                  'Prompt architecture is not prompt writing — it\'s system design. You\'re building a template.',
                  'The value is in the workflow, not the individual output. A documented system is the real deliverable.',
                  'Character consistency requires a dedicated reference generation step, not an afterthought.',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 border-b border-[var(--border)] last:border-b-0 text-sm text-[var(--text-2)] leading-relaxed">
                    <span className="text-[var(--accent-dark)] font-bold flex-shrink-0 mt-0.5">→</span>
                    {item}
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
