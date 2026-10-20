export type Lang = 'vi' | 'en'

export const translations = {
  // ── NAVBAR ──────────────────────────────────────────
  nav: {
    about:        { vi: 'Về tôi',    en: 'About' },
    work:         { vi: 'Dự án',     en: 'Work' },
    process:      { vi: 'Quy trình', en: 'Process' },
    skills:       { vi: 'Kỹ năng',   en: 'Skills' },
    achievements: { vi: 'Thành tựu', en: 'Achievements' },
    contact:      { vi: 'Liên hệ',   en: 'Contact' },
  },

  // ── HOME ────────────────────────────────────────────
  home: {
    eyebrow:      { vi: 'Marketing Operation & AI Automation · TP.HCM', en: 'Marketing Operation & AI Automation · HCM City' },
    role:         { vi: 'Marketing Operation\n& AI Automation', en: 'Marketing Operation\n& AI Automation' },
    statement1:   { vi: 'Tôi không chỉ tạo nội dung hay ứng dụng AI đơn lẻ.', en: 'I do not just create content or isolated AI experiments.' },
    statement2:   { vi: 'Tôi xây dựng hệ thống tự động hóa Marketing và quy trình sản xuất đằng sau chúng.', en: 'I build the marketing automation engines and production pipelines behind them.' },
    objective:    { vi: 'Mục tiêu: Chuyên gia Marketing Operation & AI Automation —', en: 'Goal: Marketing Operation & AI Automation Specialist —' },
    objectiveSub: { vi: 'thiết kế hệ thống thu lead, phân phối nội dung đa kênh và tự động hóa vận hành tăng trưởng.', en: 'designing lead capture pipelines, multi-channel content distribution, and growth automation.' },
    ctaAbout:     { vi: 'Khám phá hồ sơ', en: 'Explore Profile' },
    ctaWork:      { vi: 'Xem dự án thực tế', en: 'View Real Projects' },
    ctaShowreel:  { vi: 'Video Tiệm Tạp Hóa', en: 'Watch Short Film' },
    basedIn:      { vi: 'Hoạt động tại', en: 'Based in' },
    hcm:          { vi: 'TP. Hồ Chí Minh', en: 'Ho Chi Minh City' },
    tagline:      { vi: 'Marketing Operation • AI Automation • Creative Production', en: 'Marketing Operation • AI Automation • Creative Production' },
    statsLabel:   { vi: 'Dấu ấn thực tập AIKING', en: 'AIKING Internship Highlights' },
    stats: [
      { val: '13', label: { vi: 'Nhóm sản phẩm hoàn thành', en: 'Product groups shipped' } },
      { val: '06', label: { vi: 'Workflow n8n Marketing', en: 'n8n marketing workflows' } },
      { val: '08', label: { vi: 'Automation vận hành Lark', en: 'Lark operations triggers' } },
      { val: '30+', label: { vi: 'Bài Content & Carousel', en: 'Campaign posts & carousels' } },
    ]
  },

  // ── WORK ────────────────────────────────────────────
  work: {
    sectionLabel:   { vi: '02 — Các dự án đã thực hiện', en: '02 — Shipped Projects' },
    heading:        { vi: 'Dự án thực tế', en: 'Real Projects' },
    total:          { vi: 'Dự án', en: 'Projects' },
    filterAll:      { vi: 'Tất cả', en: 'All' },
    viewCase:       { vi: 'Xem chi tiết', en: 'View Case Study' },
    addVisual:      { vi: '[HÌNH ẢNH MINH CHỨNG]', en: '[VERIFIED VISUAL]' },
  },

  // ── ABOUT ───────────────────────────────────────────
  about: {
    sectionLabel:   { vi: '01 — Về tôi & Định hướng', en: '01 — Profile & Focus' },
    heading:        { vi: 'Giới thiệu', en: 'Profile' },
    introLabel:     { vi: 'Hành trình & Năng lực', en: 'Journey & Core Strengths' },
    bio1:           { vi: 'Tôi xuất phát từ nền tảng Công nghệ thông tin nhưng đam mê sâu sắc với Marketing thực chiến. Tôi nhận ra rằng những kết quả tăng trưởng đột phá nhất không đến từ việc làm thủ công rời rạc —', en: 'I come from an Information Technology background with a deep passion for hands-on Marketing. I realized that the most impactful growth results do not come from disconnected manual tasks —' },
    bio1b:          { vi: 'mà đến từ việc xây dựng hệ thống tự động hóa và chuẩn hóa quy trình vận hành.', en: 'they come from building robust automation systems and standardizing operations.' },
    bio2:           { vi: 'Trong kỳ thực tập tại Công ty Cổ phần Công nghệ và Tiếp thị AIKING, tôi đã trực tiếp triển khai 13 nhóm sản phẩm trải dài từ Marketing Automation (n8n đăng đa nền tảng, thu thập lead webhook, seeding, Analytics Agent), chuẩn hóa vận hành trên Lark Base cho 8 nhân sự, đến sản xuất video storytelling "Tiệm Tạp Hóa" được chọn đăng chính thức trên Fanpage công ty.', en: 'During my internship at AIKING Technology & Marketing JSC, I delivered 13 product groups across Marketing Automation (n8n multi-platform distribution, webhook lead capture, seeding, Analytics Agent), Lark Base operations for 8 team members, and the storytelling film "Tiệm Tạp Hóa" officially published on AIKING fanpage.' },
    bio2b:          { vi: 'Tôi không dừng lại ở ý tưởng; tôi biến chiến lược thành hệ thống đo lường và mở rộng được.', en: 'I do not stop at concepts; I translate strategy into measurable, scalable systems.' },
    bio3:           { vi: 'Trọng tâm hiện tại của tôi: Marketing Operation, Tự động hóa quy trình với n8n/Lark, AI Copywriting Engine, và Sản xuất video UGC chuyển đổi cao.', en: 'My current core focus: Marketing Operations, Workflow Automation with n8n/Lark, AI Copywriting Engines, and High-converting UGC Video Production.' },
    bio3b:          { vi: 'Công cụ: n8n · Lark Suite · Gemini API · Google Flow · CapCut · Meta Webhooks · Antigravity IDE.', en: 'Stack: n8n · Lark Suite · Gemini API · Google Flow · CapCut · Meta Webhooks · Antigravity IDE.' },

    factsLabel:     { vi: 'Thông tin nhanh', en: 'Quick Facts' },
    facts: {
      background:   { vi: 'Nền tảng', en: 'Background' },
      bgVal:        { vi: 'CNTT & Tiếp thị số', en: 'IT & Digital Marketing' },
      focus:        { vi: 'Chuyên môn trọng tâm', en: 'Core Specialization' },
      focusVal:     { vi: 'Marketing Operation & AI Automation', en: 'Marketing Operation & AI Automation' },
      location:     { vi: 'Địa điểm', en: 'Location' },
      locationVal:  { vi: 'TP. Hồ Chí Minh', en: 'Ho Chi Minh City' },
      edu:          { vi: 'Học vấn', en: 'Education' },
      eduVal:       { vi: 'Đại học Nguyễn Tất Thành', en: 'Nguyen Tat Thanh Univ.' },
      status:       { vi: 'Trạng thái', en: 'Status' },
      statusVal:    { vi: 'Sẵn sàng nhận cơ hội mới', en: 'Open to Opportunities' },
      lang:         { vi: 'Ngôn ngữ', en: 'Languages' },
      langVal:      { vi: 'Tiếng Việt · Tiếng Anh', en: 'Vietnamese · English' },
    },

    goalLabel:      { vi: 'Mục tiêu nghề nghiệp', en: 'Career Objective' },
    goalShortTitle: { vi: 'Ngắn hạn · 2026', en: 'Short-term · 2026' },
    goalShortDesc:  { vi: 'Phát triển chuyên sâu vai trò Marketing Operation & AI Automation Specialist — xây dựng các luồng thu thập lead, nuôi dưỡng khách hàng và phân phối nội dung tự động.', en: 'Advance as a specialized Marketing Operation & AI Automation Specialist — building automated lead acquisition, nurturing funnels, and scalable content pipelines.' },
    goalLongTitle:  { vi: 'Dài hạn · 3–5 năm', en: 'Long-term · 3–5 years' },
    goalLongDesc:   { vi: 'Dẫn dắt bộ phận Tăng trưởng & Vận hành Marketing (Marketing Ops Lead) — kết nối dữ liệu, tự động hóa và sáng tạo nội dung AI để tối ưu hóa chi phí và gia tăng chuyển đổi kinh doanh.', en: 'Lead a Growth & Marketing Operations unit — unifying data, automation, and AI creative production to maximize business conversion and ROI.' },

    eduLabel:       { vi: 'Học vấn & Đào tạo', en: 'Education & Training' },
    eduDegree:      { vi: 'Cử nhân Công nghệ thông tin', en: 'Bachelor of Information Technology' },
    eduSchool:      { vi: 'Đại học Nguyễn Tất Thành', en: 'Nguyen Tat Thanh University' },
    eduNote:        { vi: 'Chuyên Ngành Khoa Học Dữ Liệu', en: 'Data Science Major' },

    expLabel:       { vi: 'Kinh nghiệm thực chiến', en: 'Hands-on Experience' },
    timeline: [
      {
        year:    { vi: '09/2026 – Nay', en: '09/2026 – Present' },
        role:    { vi: 'Nhà sáng tạo nội dung & Pet UGC Storytelling', en: 'Pet Content Creator & UGC Storyteller' },
        company: { vi: 'Kênh Cá Nhân (@sua_la_meo)', en: 'Personal Channel (@sua_la_meo)' },
        desc:    { vi: 'Sáng tạo nội dung video ngắn & Pet UGC Review (kênh Sứa Là Mèo!); kịch bản giữ chân người xem, video ghim đạt 57.4K views, 8.7K views; xây dựng cộng đồng gắn kết và hợp tác thương hiệu.', en: 'Short-form pet UGC review & storytelling creator (Sứa Là Mèo! channel); audience retention script design, top pinned videos reached 57.4K & 8.7K views; community building and brand deals.' },
      },
      {
        year:    { vi: '03/2026 – Nay', en: '03/2026 – Present' },
        role:    { vi: 'Nhà sáng tạo nội dung Unbox & UGC Review', en: 'Unbox & UGC Review Creator' },
        company: { vi: 'Kênh Cá Nhân (@_yudhhna)', en: 'Personal Channel (@_yudhhna)' },
        desc:    { vi: 'Sản xuất video ngắn Unbox & Review độc lập từ A–Z: nghiên cứu xu hướng, tối ưu hook 2 giây đầu, kịch bản AIDA; video review Tranh Van Gogh đạt 35.9K views cùng danh mục sản phẩm affiliate chuyển đổi cao.', en: 'Solo unboxing & product review creator: trend research, 2-second hook optimization, AIDA scripts; Van Gogh review video reached 35.9K views with high-converting affiliate portfolio.' },
      },
      {
        year:    { vi: '01/2026 – 06/2026', en: '01/2026 – 06/2026' },
        role:    { vi: 'Thực tập sinh Marketing Operation • AI Automation • Production', en: 'Marketing Operation • AI Automation • Production Intern' },
        company: { vi: 'AIKING (Công ty CP Công nghệ & Tiếp thị AIKING)', en: 'AIKING Technology & Marketing JSC' },
        desc:    { vi: 'Hoàn thành 13 nhóm sản phẩm: Xây dựng hệ thống OKR & Task trên Lark cho 8 nhân sự (8 luồng automation); 6 workflow n8n (đăng đa nền tảng, webhook lead, seeding, Analytics Agent); sản xuất video "Tiệm Tạp Hóa" đăng chính thức trên Fanpage; xây dựng ContentAI Pro host GitHub Pages.', en: 'Delivered 13 product groups: Built Lark Base OKR & Task system for 8 members with 8 automations; 6 n8n marketing workflows (multi-platform, webhook lead, seeding, Analytics Agent); produced "Tiệm Tạp Hóa" published on official fanpage; built & hosted ContentAI Pro.' },
      },
      {
        year:    { vi: '08/2025 – 01/2026', en: '08/2025 – 01/2026' },
        role:    { vi: 'Thực tập sinh Workflow Tự động hóa', en: 'Workflow Automation Intern' },
        company: { vi: 'Datalytics Company', en: 'Datalytics Company' },
        desc:    { vi: 'Thiết kế các pipeline tự động hóa dữ liệu và tích hợp API. Nền tảng tư duy hệ thống và quy chuẩn vận hành số.', en: 'Designed data automation pipelines and API integrations. Established foundational systems thinking for digital operations.' },
      },
    ],

    interestsLabel: { vi: 'Lĩnh vực thế mạnh', en: 'Core Competencies' },
    interests: [
      { vi: 'Marketing Automation (n8n)', en: 'Marketing Automation (n8n)' },
      { vi: 'Vận hành Lark Suite & OKR', en: 'Lark Suite & OKR Operations' },
      { vi: 'Hệ thống Content 30+ bài', en: 'Scaled Content Engines' },
      { vi: 'Thu thập Lead qua Webhook', en: 'Webhook Lead Capture' },
      { vi: 'Sản xuất Video AI & UGC', en: 'AI Video & UGC Production' },
      { vi: 'AIDA / PAS Copywriting', en: 'AIDA / PAS Copywriting' },
      { vi: 'Google Flow Prompt Systems', en: 'Google Flow Prompt Systems' },
    ],

    testimonialLabel: { vi: 'Đánh giá & Nhận xét', en: 'Feedback & Mentorship' },
    testimonials: [
      {
        quote:  { vi: 'Kim Anh có khả năng chuyển yêu cầu vận hành thực tế thành quy trình tự động hóa rõ ràng trên Lark và n8n. Tinh thần chủ động giải quyết bài toán khó rất đáng khen.', en: 'Kim Anh demonstrates an exceptional ability to translate operational briefs into clear automation workflows on Lark and n8n. Her proactive problem-solving spirit is commendable.' },
        author: { vi: 'Quản lý vận hành & Hướng dẫn', en: 'Operations Lead & Mentor' },
        role:   { vi: 'AIKING Technology & Marketing', en: 'AIKING Technology & Marketing' },
      },
      {
        quote:  { vi: 'Video "Tiệm Tạp Hóa" do Kim Anh sản xuất bằng Google Flow và CapCut đạt tiêu chuẩn chất lượng để đăng tải trực tiếp trên Fanpage chính thức của công ty.', en: 'The video "Tiệm Tạp Hóa" produced by Kim Anh using Google Flow and CapCut met the quality standards to be published directly on the company official fanpage.' },
        author: { vi: 'Ban Giám Đốc / Leader', en: 'Director / Creative Leader' },
        role:   { vi: 'AIKING Studio', en: 'AIKING Studio' },
      },
    ],
    addPortrait:    { vi: '[ẢNH CHÂN DUNG KIM ANH]', en: '[PORTRAIT PHOTO]' },
  },

  // ── PROCESS ─────────────────────────────────────────
  process: {
    sectionLabel: { vi: '03 — Quy trình tiếp cận', en: '03 — Methodology' },
    heading1:     { vi: 'Từ Chiến lược', en: 'From Strategy' },
    heading2:     { vi: 'đến Hệ thống Vận hành', en: 'to Automated Engine' },
    intro:        { vi: 'Mọi chiến dịch marketing hay sản phẩm AI đều tuân thủ nguyên lý: Chiến lược trước → Chuẩn hóa quy trình → Tự động hóa bằng công cụ → Đo lường dữ liệu.', en: 'Every marketing campaign and AI product follows the core principle: Strategy first → Process standardization → Tool automation → Data measurement.' },
    closing1:     { vi: 'Công cụ chỉ là đòn bẩy.', en: 'Tools are just leverage.' },
    closing2:     { vi: 'Hệ thống vận hành bài bản mới tạo ra kết quả bền vững.', en: 'A systematic operational engine creates sustainable growth.' },
    steps: [
      { num: '01', title: { vi: 'Xác định Mục tiêu & Bài toán', en: 'Problem & Objective' }, desc: { vi: 'Phân tích yêu cầu Marketing/Vận hành: mục tiêu số bài, số lead, hoặc nút thắt cần giải quyết trước khi chạm vào công cụ.', en: 'Analyze the Marketing/Operations brief: define target volume, lead goals, or bottlenecks before touching any software.' } },
      { num: '02', title: { vi: 'Thiết kế Luồng (Architecture)', en: 'Architecture Design' }, desc: { vi: 'Vẽ sơ đồ quy trình từ đầu vào đến đầu ra: dữ liệu đi qua đâu, điều kiện kích hoạt là gì, ai phê duyệt.', en: 'Map the workflow from input to output: data flow, trigger conditions, approval gates, and exception paths.' } },
      { num: '03', title: { vi: 'Chuẩn hóa Dữ liệu & Tiêu chuẩn', en: 'Standardization' }, desc: { vi: 'Xây dựng tiêu chuẩn: bảng mẫu Lark Base, bộ prompt mẹ, hoặc tiêu chí chấm điểm profile chuyên gia (thang điểm 50).', en: 'Build standards: Lark Base schemas, master prompt templates, or expert profile audit rubrics (50-point scale).' } },
      { num: '04', title: { vi: 'Xây dựng Automation & Mini App', en: 'Automation & Tooling' }, desc: { vi: 'Triển khai n8n workflow, kết nối Webhook Facebook, xây dựng ứng dụng với Gemini API hoặc Google Flow.', en: 'Deploy n8n workflows, connect Meta webhooks, and build tailored web tools using Gemini API or Google Flow.' } },
      { num: '05', title: { vi: 'Sản xuất Nội dung & Sáng tạo', en: 'Creative Production' }, desc: { vi: 'Sản xuất bài viết AIDA/PAS, carousel, ảnh infographic hoặc render video kể chuyện với Google Flow và CapCut.', en: 'Produce AIDA/PAS copy, carousels, infographics, or render narrative video assets using Google Flow & CapCut.' } },
      { num: '06', title: { vi: 'Kiểm soát Chất lượng (QC)', en: 'Quality Check' }, desc: { vi: 'Đối chiếu với rubric: sản phẩm đúng nhận diện, nội dung không trùng lặp, link hoạt động trơn tru.', en: 'Evaluate against the rubric: brand identity lock, zero duplicate angles, smooth automation delivery.' } },
      { num: '07', title: { vi: 'Phát hành & Đo lường (Analytics)', en: 'Publish & Analytics' }, desc: { vi: 'Đăng đa kênh, kích hoạt seeding chim mồi, thu lead tự động và theo dõi chỉ số qua Analytics Agent.', en: 'Multi-channel distribution, automated seeding, webhook lead capture, and performance tracking via Analytics Agent.' } },
      { num: '08', title: { vi: 'Bàn giao & Tài liệu hóa', en: 'Handover & Scaling' }, desc: { vi: 'Lập tài liệu hướng dẫn và bàn giao kỹ thuật để đội ngũ có thể tái sử dụng ngay lập tức mà không phụ thuộc cá nhân.', en: 'Document operations and technical handover packages so the team can scale immediately without friction.' } },
    ],
  },

  // ── SKILLS ──────────────────────────────────────────
  skills: {
    sectionLabel:     { vi: '04 — Kỹ năng & Năng lực', en: '04 — Core Skills' },
    heading:          { vi: 'Năng lực cốt lõi', en: 'Core Competencies' },
    exploringLabel:   { vi: 'Công cụ & Hạ tầng tiếp tục mở rộng', en: 'Continuous Tooling Exploration' },
    exploringNote:    { vi: 'Cập nhật liên tục theo xu hướng công nghệ tiếp thị AI.', en: 'Constantly expanding alongside modern AI marketing tech.' },
    categories: {
      creative: {
        label: { vi: 'Marketing Automation & Vận hành', en: 'Marketing Automation & Ops' },
        items: [
          { vi: 'Workflow n8n Tự động hóa Tiếp thị', en: 'n8n Marketing Automation Workflows' },
          { vi: 'Thu thập Lead qua Facebook Webhook', en: 'Facebook Webhook Lead Capture' },
          { vi: 'Tự động hóa Đăng đa nền tảng (Meta + YouTube)', en: 'Multi-platform Distribution (Meta + YouTube)' },
          { vi: 'Hệ thống Quản trị OKR & Task trên Lark Base', en: 'Lark Base OKR & Task Management' },
          { vi: 'Tự động hóa Seeding & Nurturing', en: 'Automated Seeding & Customer Nurturing' },
          { vi: 'Analytics Agent phân tích & báo cáo chỉ số', en: 'Analytics Agent Performance Reporting' },
        ],
      },
      video: {
        label: { vi: 'Chiến lược Nội dung & Copywriting', en: 'Content Strategy & Copywriting' },
        items: [
          { vi: 'Bộ máy sản xuất 30+ bài content & carousel', en: 'Batch Content Engine (30+ posts & carousels)' },
          { vi: 'Ứng dụng Copywriting AIDA, PAS, BAB, FAB', en: 'AIDA, PAS, BAB, FAB Copywriting' },
          { vi: 'Thiết kế cấu trúc Hook giữ chân người xem', en: 'Audience Retention & Hook Architecture' },
          { vi: 'Bộ tiêu chuẩn Profile & Fanpage B2B (Thang điểm 50)', en: 'B2B Profile & Fanpage Standardization (50-pt Rubric)' },
          { vi: 'Thiết kế infographic & carousel đa slide', en: 'Multi-slide Carousel & Infographic Design' },
          { vi: 'Xây dựng & phân quyền Discord cộng đồng', en: 'Discord Community Architecture & Onboarding' },
        ],
      },
      ai: {
        label: { vi: 'Sản xuất Video AI & Ứng dụng Công nghệ', en: 'AI Video & Creative Tooling' },
        items: [
          { vi: 'Sản xuất Phim ngắn AI ("Tiệm Tạp Hóa" - Fanpage)', en: 'AI Short Film Production ("Tiệm Tạp Hóa" on Fanpage)' },
          { vi: 'UGC Creator Studio Pro (Video quảng cáo sản phẩm)', en: 'UGC Creator Studio Pro (Video Ad Engine)' },
          { vi: 'Kiến trúc Prompt Google Flow Tools có cấu trúc', en: 'Structured Google Flow Prompt Architecture' },
          { vi: 'Phát triển Web App với Gemini API (ContentAI Pro)', en: 'Web App Development with Gemini API (ContentAI Pro)' },
          { vi: 'Phân loại ảnh sự kiện bằng Google AI Studio', en: 'Batch Photo Classifier with Google AI Studio' },
          { vi: 'Hậu kỳ CapCut & Khóa nhận diện sản phẩm (Identity Lock)', en: 'CapCut Editing & Product Identity Lock' },
        ],
      },
    },
    exploring: [
      { vi: 'n8n Advanced AI Agents', en: 'n8n Advanced AI Agents' },
      { vi: 'Meta Conversion API', en: 'Meta Conversion API' },
      { vi: 'Gemini 1.5 Pro Multimodal', en: 'Gemini 1.5 Pro Multimodal' },
      { vi: 'Google Flow Video Systems', en: 'Google Flow Video Systems' },
      { vi: 'TikTok Shop Automation', en: 'TikTok Shop Automation' },
      { vi: 'Automated CRM Sync', en: 'Automated CRM Sync' },
    ],
  },

  // ── ACHIEVEMENTS ─────────────────────────────────────
  achievements: {
    sectionLabel:   { vi: '05 — Minh chứng thực tế', en: '05 — Real Proof' },
    heading1:       { vi: 'Kết quả Thực tập', en: 'Internship Results &' },
    heading2:       { vi: 'tại AIKING', en: 'Verified Milestones' },
    intro:          { vi: 'Mọi thành tựu đều được bảo chứng bằng sản phẩm thực tế, workflow đang chạy và minh chứng trong Báo cáo kết quả thực tập tại AIKING.', en: 'Every achievement is backed by real deployed products, live workflows, and documentation from the AIKING Internship Report.' },
    achieveLabel:   { vi: '13 Nhóm Sản phẩm Nổi bật tại AIKING', en: '13 AIKING Deliverables' },
    certLabel:      { vi: 'Chứng chỉ & Nền tảng chuyên môn', en: 'Certificates & Professional Foundation' },
    completed:      { vi: 'Đã hoàn thành', en: 'Completed' },
    inProgress:     { vi: 'Đang triển khai', en: 'In Progress' },
    closing1:       { vi: 'Lý thuyết mở ra con đường.', en: 'Theory opens the path.' },
    closing2:       { vi: 'Hệ thống vận hành thực tế mới tạo ra giá trị đo lường được.', en: 'Real deployed systems create measurable business value.' },
    items: [
      {
        icon: '⚡',
        title:   { vi: 'Hệ thống 6 Workflow n8n Marketing', en: '6 n8n Marketing Automation Workflows' },
        context: { vi: 'AIKING · 2026', en: 'AIKING · 2026' },
        desc:    { vi: 'Tự động hóa đăng nội dung đa nền tảng (Meta + YouTube), Webhook thu thập lead (SĐT/Email), kịch bản seeding chim mồi và Analytics Agent báo cáo chỉ số được demo tại workshop.', en: 'Automated multi-platform posting, lead webhook capture, seeding workflows, and Analytics Agent demoed at AIKING company workshop.' },
        tag:     { vi: 'Marketing Automation', en: 'Marketing Automation' },
        image:   '/projects/aiking_media/image6.png',
      },
      {
        icon: '🎬',
        title:   { vi: '"Tiệm Tạp Hóa" — Đăng Fanpage chính thức', en: '"Tiệm Tạp Hóa" — Official AIKING Fanpage' },
        context: { vi: 'AIKING · 2026', en: 'AIKING · 2026' },
        desc:    { vi: 'Sản xuất 3 video AI end-to-end bằng Google Flow và CapCut. Phim ngắn storytelling "Tiệm Tạp Hóa" được ban giám đốc chọn đăng chính thức trên Fanpage công ty.', en: 'Produced 3 AI short films with Google Flow & CapCut. "Tiệm Tạp Hóa" chosen for official company fanpage publication.' },
        tag:     { vi: 'AI Video Storytelling', en: 'AI Video Storytelling' },
        image:   '/projects/aiking_media/image5.png',
      },
      {
        icon: '📊',
        title:   { vi: 'Hệ thống OKR & Task trên Lark cho 8 nhân sự', en: 'Lark Base OKR & Task Management for 8 Members' },
        context: { vi: 'AIKING · 2026', en: 'AIKING · 2026' },
        desc:    { vi: 'Xây dựng cơ sở dữ liệu dự án/task với 8 luồng automation nhắc việc tự động, đưa toàn bộ quy trình quản trị công việc công ty về một nền tảng thống nhất.', en: 'Built project & task databases with 8 active automation alerts, unifying company work management onto one single platform.' },
        tag:     { vi: 'Marketing Operations', en: 'Marketing Operations' },
        image:   '/projects/aiking_media/image1.png',
      },
      {
        icon: '✍️',
        title:   { vi: 'Content Creation Workspace & ContentAI Pro', en: 'Content Creation Engine & ContentAI Pro' },
        context: { vi: 'AIKING · 2026', en: 'AIKING · 2026' },
        desc:    { vi: 'Tạo dashboard 30 bài content (78 ảnh, 54 carousel) có logic chống trùng ý tưởng; xây dựng web app ContentAI Pro kết nối Gemini API host trên GitHub Pages.', en: 'Built 30-post campaign dashboard with anti-duplicate logic; built and hosted ContentAI Pro web app on GitHub Pages.' },
        tag:     { vi: 'Content Marketing', en: 'Content Marketing' },
        image:   '/projects/aiking_media/image8.png',
      },
    ],
    certs: [
      { name: { vi: 'Google AI Essentials', en: 'Google AI Essentials' }, issuer: 'Google', year: '2025', status: 'completed' },
      { name: { vi: 'Nền tảng AI Tạo sinh (Generative AI)', en: 'Foundations of Generative AI' }, issuer: 'Google Cloud Skills Boost', year: '2025', status: 'completed' },
      { name: { vi: 'Tự động hóa Make & n8n Automation', en: 'Make & n8n Automation Systems' }, issuer: 'Make Academy / Self-built', year: '2025–2026', status: 'completed' },
      { name: { vi: 'Dựng phim CapCut & Hậu kỳ chuyên nghiệp', en: 'CapCut Video Editing Professional' }, issuer: 'CapCut Academy', year: '2026', status: 'completed' },
      { name: { vi: 'Google Flow Video Tools & AI Vision', en: 'Google Flow Video Tools & AI Vision' }, issuer: 'Google DeepMind / Flow Labs', year: '2026', status: 'completed' },
    ],
  },

  // ── CONTACT ─────────────────────────────────────────
  contact: {
    headline1:      { vi: "KẾT NỐI &", en: "LET'S BUILD" },
    headline2:      { vi: "HỢP TÁC.", en: "SOMETHING REAL." },
    subCopy:        { vi: 'Bạn đang tìm kiếm giải pháp tự động hóa Marketing,\nvận hành quy trình số hay sản xuất video AI hiệu quả?\nHãy liên hệ ngay.', en: "Looking for marketing automation solutions,\ndigital operations, or scalable AI creative production?\nLet's connect." },
    email:          { vi: 'Email', en: 'Email' },
    phone:          { vi: 'Điện thoại', en: 'Phone' },
    tiktok:         { vi: 'TikTok', en: 'TikTok' },
    linkedin:       { vi: 'LinkedIn', en: 'LinkedIn' },
    formTitle:      { vi: 'Gửi tin nhắn trao đổi', en: 'Send a Message' },
    fieldName:      { vi: 'Họ tên *', en: 'Full name *' },
    fieldNamePh:    { vi: 'Nguyễn Văn A', en: 'John Doe' },
    fieldEmail:     { vi: 'Email *', en: 'Email *' },
    fieldSubject:   { vi: 'Mục đích hợp tác', en: 'Subject' },
    fieldSubjectPh: { vi: 'Cơ hội việc làm / Tự động hóa Marketing / Dự án...', en: 'Job opportunity / Marketing Automation / Project inquiry...' },
    fieldMsg:       { vi: 'Nội dung tin nhắn *', en: 'Message *' },
    fieldMsgPh:     { vi: 'Mô tả bài toán hoặc nhu cầu hợp tác của bạn...', en: 'Describe your brief, challenge or project...' },
    sendBtn:        { vi: 'Gửi tin nhắn trực tiếp →', en: 'Send Message →' },
    sentMsg:        { vi: 'Đã nhận thông tin. Mình sẽ phản hồi qua email/điện thoại sớm nhất có thể!', en: "Message received. I will get back to you as soon as possible!" },
    cta:            { vi: 'Liên hệ qua Email', en: 'Get in Touch' },
    footer:         { vi: 'Đỗ Kim Anh — Marketing Operation • AI Automation • Creative Production', en: 'Do Kim Anh — Marketing Operation • AI Automation • Creative Production' },
  },
} as const
