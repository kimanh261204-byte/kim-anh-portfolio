import { Link } from 'react-router-dom'
import PageLayout from '../../components/layout/PageLayout'
import SectionLabel from '../../components/ui/SectionLabel'
import NextProject from '../../components/project/NextProject'
import { projects } from '../../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const project = projects.find(p => p.id === 'prompt-arch') || projects[0]
const next = (project && projects.find(p => p.id === project.nextId)) || projects[0]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] } }
})

export default function PromptArchPage() {
  const { lang } = useLanguage()

  const promptSteps = [
    {
      num: '01',
      title: lang === 'vi' ? 'Ý tưởng thô' : 'Raw Idea',
      desc: lang === 'vi' ? 'Brief, tài liệu tham khảo hoặc tia sáng sáng tạo ban đầu.' : 'Brief, reference, or creative spark. Unstructured input.'
    },
    {
      num: '02',
      title: lang === 'vi' ? 'Định hướng sáng tạo' : 'Creative Direction',
      desc: lang === 'vi' ? 'Chuyển đổi ý tưởng thành tone, mood, phong cách hình ảnh và thông điệp.' : 'Translate idea into tone, mood, visual style, and narrative intent.'
    },
    {
      num: '03',
      title: lang === 'vi' ? 'Master Prompt' : 'Master Prompt',
      desc: lang === 'vi' ? 'Bộ khung mẫu có cấu trúc với các slot: sản phẩm, nhân vật, bối cảnh, ánh sáng, góc máy.' : 'Structured template with named slots: product, character, scene type, mood, camera, lighting.'
    },
    {
      num: '04',
      title: lang === 'vi' ? 'Product Evidence' : 'Product Evidence',
      desc: lang === 'vi' ? 'Hình ảnh tham chiếu neo chắc hình dạng sản phẩm, chống sai lệch khi tạo sinh.' : 'Visual reference anchors injected into each scene prompt to prevent product drift.'
    },
    {
      num: '05',
      title: lang === 'vi' ? 'Prompt từng cảnh' : 'Scene Prompt',
      desc: lang === 'vi' ? 'Prompt cấp độ cảnh trích từ master: cỡ cảnh, chuyển động, môi trường và hành động.' : 'Scene-level prompt derived from master. Includes shot type, action, environment, product state.'
    },
    {
      num: '06',
      title: lang === 'vi' ? 'Tạo sinh' : 'Generation',
      desc: lang === 'vi' ? 'Chạy qua Google Flow / AI tools. Nhiều lượt render nếu cần, ghi chép thông số.' : 'Run through Google Flow. Multiple passes if required. Output documented.'
    },
    {
      num: '07',
      title: lang === 'vi' ? 'Kiểm soát chất lượng' : 'Quality Check',
      desc: lang === 'vi' ? 'Đánh giá theo rubric: sản phẩm chuẩn, nhân vật đồng nhất, đúng kịch bản, không lỗi glitch.' : 'Review against rubric: product visible, character consistent, scene matches script, no artifacts.'
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
        <div className="border-b border-[var(--border)] pb-12">
          <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--accent-dark)] font-semibold mb-4">
            {project.num} — {lang === 'vi' ? 'Nghiên cứu quy trình AI' : 'AI Workflow Case Study'}
          </div>
          <motion.h1
            className="font-display font-bold leading-[1.1] mb-8 text-[var(--text-1)]"
            style={{ fontSize: 'clamp(2.8rem,8vw,7rem)', letterSpacing: '-0.04em', whiteSpace: 'pre-line' }}
            {...fadeUp(0.1)}
          >
            {project.title}
          </motion.h1>
          <motion.p className="text-[var(--text-2)] text-base max-w-[520px] leading-relaxed mb-10" {...fadeUp(0.2)}>
            {lang === 'vi' ? 'Khung kiến trúc prompt có cấu trúc từ ý tưởng thô đến video AI hoàn chỉnh' : project.subtitle}
          </motion.p>
          <motion.div className="flex flex-wrap gap-10" {...fadeUp(0.3)}>
            {[
              { label: lang === 'vi' ? 'Vai trò' : 'Role', value: lang === 'vi' ? 'Kiến trúc Prompt · Thiết kế Workflow' : project.role },
              { label: lang === 'vi' ? 'Công cụ' : 'Tools', value: project.tools },
              { label: lang === 'vi' ? 'Loại hình' : 'Type', value: lang === 'vi' ? 'Thiết kế hệ thống · Workflow AI' : 'System Design · AI Workflow' },
              { label: lang === 'vi' ? 'Năm' : 'Year', value: project.year },
            ].map(m => (
              <div key={m.label}>
                <div className="text-label mb-1 text-[var(--text-3)]">{m.label}</div>
                <div className="text-sm font-semibold text-[var(--text-1)]">{m.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Problem */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4"><SectionLabel>{lang === 'vi' ? 'Vấn đề' : 'The Problem'}</SectionLabel></div>
            <div className="lg:col-span-8">
              <h2 className="text-heading mb-6 text-[var(--text-1)]">
                {lang === 'vi' ? 'Prompt tùy hứng dẫn đến sản phẩm thiếu nhất quán và tốn kém chi phí.' : 'Ad-hoc prompts produce inconsistent, expensive results.'}
              </h2>
              <div className="space-y-4 text-[var(--text-2)] text-sm leading-relaxed">
                <p>
                  {lang === 'vi'
                    ? 'Dùng công cụ video AI mà không có khung prompt chuẩn sẽ luôn dẫn đến: kết quả ngẫu nhiên, lãng phí credits và kéo dài thời gian sản xuất.'
                    : 'Using AI video tools without a structured prompt framework leads to the same outcome: inconsistent outputs, wasted generation credits, and slow production cycles.'}
                </p>
                <p>
                  {lang === 'vi' ? (
                    <>Vòng lặp <strong className="text-[var(--text-1)] font-semibold">tạo → kết quả tệ → sửa prompt mù quáng → tạo lại</strong> rất tốn kém và thiếu tin cậy.</>
                  ) : (
                    <>Without a system, each video is effectively a new experiment. <strong className="text-[var(--text-1)] font-semibold">The loop of generate → bad output → revise → generate is expensive and unpredictable.</strong></>
                  )}
                </p>
                <p>
                  {lang === 'vi'
                    ? 'Tôi xây dựng framework này để giải quyết tận gốc ở tầng cấu trúc: không chỉ viết từng prompt tốt hơn, mà thiết kế cả một hệ sinh thái để prompt vận hành.'
                    : 'I built a framework to solve this at the structural level — not by getting better at writing individual prompts, but by designing the system the prompts live inside.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Framework — vertical steps */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>{lang === 'vi' ? 'Hệ thống' : 'The System'}</SectionLabel>
              <p className="text-xs text-[var(--text-3)] mt-4 leading-relaxed">
                {lang === 'vi' ? 'Ý tưởng thô → Sản phẩm cuối.\nMọi bước đều kiểm soát được.' : 'Raw Idea → Production Output.\nEvery step accountable.'}
              </p>
            </div>
            <div className="lg:col-span-8">
              {/* Vertical prompt flow */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border-mid)]" />
                {promptSteps.map((step) => (
                  <div key={step.num} className="relative pb-8 last:pb-0 group">
                    <div className="absolute left-[-3.5px] top-[7px] w-2 h-2 rounded-full border border-[var(--accent-dark)] bg-[var(--bg)] group-hover:bg-[var(--accent)] transition-all duration-200" />
                    <div className="grid grid-cols-12 gap-4 items-start">
                      <div className="col-span-2 sm:col-span-1 text-[10px] tracking-[0.16em] text-[var(--accent-dark)] font-semibold pt-1">{step.num}</div>
                      <div className="col-span-10 sm:col-span-4 font-semibold text-[var(--text-1)] text-sm pt-0.5">{step.title}</div>
                      <div className="col-span-12 sm:col-span-7 text-[var(--text-2)] text-sm leading-relaxed">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <SectionLabel>{lang === 'vi' ? 'Các thành phần của Framework' : 'Framework Components'}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border)] mt-8 bg-[var(--bg)]">
            {[
              {
                label: 'Master Prompt',
                desc: lang === 'vi' ? 'Bộ mẫu tái sử dụng với các slot biến đổi. Đảm bảo mọi cảnh đều kế thừa cùng ngôn ngữ thị giác.' : 'Reusable template with variable slots. Ensures every scene inherits the same visual identity.'
              },
              {
                label: lang === 'vi' ? 'Tiêu chí chất lượng (Rubric)' : 'Quality Rubric',
                desc: lang === 'vi' ? 'Checklist kiểm duyệt sau mỗi lượt render. Không cảnh nào được đưa vào dựng nếu chưa qua QC.' : 'Structured checklist run after every generation pass. No scene proceeds without passing QC.'
              },
              {
                label: lang === 'vi' ? 'Thư viện Benchmark' : 'Benchmark Library',
                desc: lang === 'vi' ? 'Tập hợp các video chuẩn đối chiếu để xác định tiêu chuẩn chất lượng đầu ra cho từng dự án.' : 'Reference outputs that define the target quality level for each project type.'
              },
            ].map((item, i) => (
              <div key={item.label} className={`p-8 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-[var(--border)]' : ''}`}>
                <div className="text-[var(--accent-dark)] font-semibold text-[10px] tracking-[0.18em] uppercase mb-3">{item.label}</div>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Output & Visual Proof */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="flex justify-between items-end mb-6">
            <div>
              <SectionLabel>{lang === 'vi' ? 'Minh chứng Hình ảnh & Trợ lý GPT' : 'Visual Proof & GPT Assistant'}</SectionLabel>
              <h3 className="font-display font-bold text-xl text-[var(--text-1)] mt-2">
                {lang === 'vi' ? 'Trợ lý Google Flow Tool Prompt Architect & Bóc tách Kỹ thuật' : 'Google Flow Tool Prompt Architect Assistant'}
              </h3>
            </div>
            <a
              href="https://labs.google/fx/tools/flow/shared/tool/669e6b04-ab0d-4c49-9cde-360f076fc0b8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[var(--accent-dark)] bg-[rgba(47,102,0,0.1)] px-4 py-2 rounded-sm border border-[rgba(47,102,0,0.2)] hover:bg-[var(--accent)] hover:text-black transition-colors"
            >
              {lang === 'vi' ? 'Mở Google Flow Shared Tool ↗' : 'Open Google Flow Tool ↗'}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[var(--bg-surface)] p-4 border border-[var(--border)] rounded-sm">
              <h4 className="font-display font-bold text-sm text-[var(--text-1)] mb-3">
                {lang === 'vi' ? 'Trợ lý Google Flow Tool Prompt Architect trong ChatGPT' : 'Google Flow Tool Prompt Architect in ChatGPT'}
              </h4>
              <div className="rounded overflow-hidden border border-[var(--border)]">
                <img src="/projects/aiking_media/image12.png" alt="Google Flow Prompt Architect in ChatGPT" className="w-full h-auto object-cover" />
              </div>
              <p className="text-xs text-[var(--text-3)] mt-2">
                {lang === 'vi' ? 'Hình 12 trong Báo cáo thực tập: Trợ lý GPT chuyên biệt biến brief thô thành prompt chuẩn hóa cho Google Flow Tools.' : 'Figure 12 from Report: GPT assistant converting raw briefs into standardized Google Flow prompts.'}
              </p>
            </div>

            <div className="bg-[var(--bg-surface)] p-4 border border-[var(--border)] rounded-sm">
              <h4 className="font-display font-bold text-sm text-[var(--text-1)] mb-3">
                {lang === 'vi' ? 'Cấu trúc Bóc tách Kỹ thuật Sáng tạo' : 'Creative Reverse-Engineering Structure'}
              </h4>
              <div className="rounded overflow-hidden border border-[var(--border)]">
                <img src="/projects/aiking_media/image13.png" alt="Creative Reverse-Engineering" className="w-full h-auto object-cover" />
              </div>
              <p className="text-xs text-[var(--text-3)] mt-2">
                {lang === 'vi' ? 'Hình 13 trong Báo cáo thực tập: Sơ đồ bóc tách kỹ thuật sáng tạo, phân rã video thành prompt, phong cách và thông số có thể tái tạo.' : 'Figure 13 from Report: Reverse-engineering creative reference videos into repeatable prompts.'}
              </p>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="border-t border-[var(--border)] py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4"><SectionLabel>{lang === 'vi' ? 'Bài học then chốt' : 'Key Learnings'}</SectionLabel></div>
            <div className="lg:col-span-8">
              <ul className="space-y-0">
                {(lang === 'vi' ? [
                  'Kiến trúc prompt gần với thiết kế hệ thống phần mềm hơn là viết lách thông thường. Bạn đang xây dựng hạ tầng, không phải chỉ viết câu chữ.',
                  'Thành phần giá trị nhất là bảng tiêu chí Rubric — nó biến việc đánh giá cảm tính thành chuẩn Đạt / Không đạt rõ ràng.',
                  'Tài liệu tham chiếu hình ảnh (Product Evidence) có tác động đến độ nhất quán cao hơn bất kỳ mô tả văn bản nào.',
                  'Framework giúp quá trình triển khai dự án video tiếp theo gần như không mất thời gian chuẩn bị.',
                ] : [
                  'Prompt architecture is closer to system design than to writing. You\'re building infrastructure, not composing text.',
                  'The most valuable component was the quality rubric — it gave every generation pass a defined pass/fail condition.',
                  'Visual evidence (product reference images) had more impact on output consistency than any written description.',
                  'The framework made it easier to onboard the next video — zero ramp-up time.',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 border-b border-[var(--border)] last:border-b-0 text-sm text-[var(--text-2)] leading-relaxed">
                    <span className="text-[var(--accent-dark)] font-bold flex-shrink-0 mt-0.5">→</span>{item}
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
