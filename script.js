const mainMenus = [
  { id: "main", en: "Main Menu", th: "เมนูหลัก" },
  { id: "business", en: "Business", th: "ธุรกิจ" },
  { id: "internal", en: "Internal Communication", th: "การสื่อสารภายใน" },
  { id: "industrial", en: "Industrial Operation", th: "ปฏิบัติการอุตสาหกรรม" },
  { id: "corporate", en: "Corporate Library", th: "ห้องสมุดองค์กร" },
];

const templateSubMenus = [
  { id: "presentation", en: "Presentation Slides", th: "สไลด์พรีเซนเทชัน" },
  { id: "cover", en: "Cover Page", th: "หน้าปก" },
  { id: "timeline", en: "Timeline & Roadmap", th: "ไทม์ไลน์และโรดแมป" },
  { id: "infographic", en: "Infographic", th: "อินโฟกราฟิก" },
  { id: "newsletter", en: "Newsletter Banner", th: "แบนเนอร์ข่าวสาร" },
  { id: "wallpaper", en: "Wallpaper", th: "วอลเปเปอร์" },
  { id: "gimmick", en: "Gimmick", th: "ลูกเล่นพิเศษ" },
];

const corporateSubMenus = [
  { id: "brandIdentity", en: "Brand & Identity", th: "แบรนด์และอัตลักษณ์องค์กร" },
  { id: "corporatePhotos", en: "Corporate Photos", th: "ภาพถ่ายองค์กร" },
  { id: "productBusiness", en: "Product & Business", th: "สินค้าและธุรกิจ" },
  { id: "marketingMaterials", en: "Awards and Standards", th: "รางวัลและมาตรฐาน" },
  { id: "eventsActivities", en: "Events & Activities", th: "ภาพกิจกรรมและงานองค์กร" },
  { id: "boardExecutives", en: "Board & Executive Photos", th: "ภาพคณะกรรมการและผู้บริหาร" },
  { id: "madeWithUs", en: "Made with Us", th: "สร้างไปกับพวกเรา" },
];

const subMenuSets = {
  main: templateSubMenus,
  business: templateSubMenus,
  internal: templateSubMenus,
  industrial: templateSubMenus,
  corporate: corporateSubMenus,
};

const copy = {
  en: {
    topExplore: "Library",
    topLogin: "Sign in",
    topJoin: "Join",
    topUpload: "Upload",
    heroTitle: "TKS AI Visual Template Library & Corporate Support",
    findLabel: "Find",
    searchPlaceholder: "Search templates, categories, styles, or keywords",
    featured: "ฉลามบุก",
    guideText: "PDIO STUDIO",
    workspaceEyebrow: "Menu Extensions",
    workspaceTitle: "Template Preview Library",
    browseTitle: "Explore beautiful templates, free for every project.",
    overview: "All Template Categories",
    noResults: "No templates match this search.",
    assetOverviewTitle: "Template assets for every project",
    visualGalleryTitle: "Explore high quality AI visual templates curated for every team.",
    loadMore: "Explore more templates",
    collectionTitle: "Curated collections and template packs",
    collectionTabOne: "Collections",
    collectionTabTwo: "Template Sets",
    articleTitle: "What's new in the TKS AI library?",
    viewAll: "View all",
    viewAllCollections: "View all collections",
    curatedByTitle: "Curated collections",
    allCollectionsTitle: "Curated collections",
    allCollectionsBy: "by INFINA",
    backToBusiness: "Back to Business",
    ctaOneTitle: "Browse ready-made templates",
    ctaOneText: "Start from curated visuals for presentations, internal updates, and operations.",
    ctaOneButton: "See all templates",
    ctaTwoTitle: "Create faster with AI prompts",
    ctaTwoText: "Use template directions as a starting point for your team's visual workflow.",
    ctaTwoButton: "Open guide",
    ctaThreeTitle: "Upload your own template",
    ctaThreeText: "Add internal assets and keep them searchable for everyone in your team.",
    ctaThreeButton: "Upload",
    footerText: "Your Work Starts Here",
    footerFind: "Find",
    footerEditors: "Editor's Choice",
    footerCollections: "Collections",
    footerTemplates: "Templates",
    footerCommunity: "Community",
    footerCreators: "Creators",
    footerAmbassador: "Ambassador",
    footerForum: "Forum",
    footerAbout: "About",
    footerHelp: "Help Center",
    footerTerms: "Terms",
    footerPolicy: "Policy",
  },
  th: {
    topExplore: "คลังเทมเพลต",
    topLogin: "เข้าสู่ระบบ",
    topJoin: "สมัคร",
    topUpload: "อัปโหลด",
    heroTitle: "ทีเคเอส AI เทมเพลต และบริการงานสำหรับองค์กร",
    findLabel: "ค้นหา",
    searchPlaceholder: "ค้นหาเทมเพลต หมวดหมู่ สไตล์ หรือคีย์เวิร์ด",
    featured: "ฉลามบุก",
    guideText: "PDIO STUDIO",
    workspaceEyebrow: "ส่วนขยายเมนู",
    workspaceTitle: "คลังตัวอย่างเทมเพลต",
    browseTitle: "รวมเทมเพลตสวย ๆ พร้อมคุณภาพและความละเอียดสูง ให้ทีมเลือกใช้ฟรี",
    overview: "รวมทุกหมวดเทมเพลต",
    noResults: "ไม่พบเทมเพลตที่ตรงกับคำค้นหา",
    assetOverviewTitle: "แอสเซ็ตเทมเพลตสำหรับทุกโปรเจกต์",
    visualGalleryTitle: "รวมเทมเพลตคุณภาพสูงที่คัดมาให้ทีมเลือกใช้ได้ทันที",
    loadMore: "ดูเทมเพลตเพิ่มเติม",
    collectionTitle: "คอลเลกชันและแพ็กเทมเพลตที่คัดสรรแล้ว",
    collectionTabOne: "คอลเลกชัน",
    collectionTabTwo: "เซตเทมเพลต",
    articleTitle: "มีอะไรใหม่ใน TKS AI Library?",
    viewAll: "ดูทั้งหมด",
    viewAllCollections: "ดูคอลเลกชั่นทั้งหมด",
    curatedByTitle: "คอลเลกชันที่คัดสรรโดยทีม",
    allCollectionsTitle: "คอลเลกชันที่ผ่านการคัดสรร",
    allCollectionsBy: "โดย INFINA",
    backToBusiness: "กลับไปหน้า Business",
    ctaOneTitle: "ดูเทมเพลตพร้อมใช้งาน",
    ctaOneText: "เริ่มจากภาพที่คัดไว้สำหรับพรีเซนเทชัน ข่าวสารภายใน และงานปฏิบัติการ",
    ctaOneButton: "ดูเทมเพลตทั้งหมด",
    ctaTwoTitle: "สร้างงานเร็วขึ้นด้วย AI prompts",
    ctaTwoText: "ใช้แนวทางจากเทมเพลตเป็นจุดเริ่มต้นสำหรับเวิร์กโฟลว์ภาพของทีม",
    ctaTwoButton: "เปิดคู่มือ",
    ctaThreeTitle: "อัปโหลดเทมเพลตของคุณ",
    ctaThreeText: "เพิ่มแอสเซ็ตภายในและทำให้ทุกคนในทีมค้นหาได้ง่าย",
    ctaThreeButton: "อัปโหลด",
    footerText: "Your Work Starts Here",
    footerFind: "ค้นหา",
    footerEditors: "รายการคัดสรร",
    footerCollections: "คอลเลกชัน",
    footerTemplates: "เทมเพลต",
    footerCommunity: "ชุมชน",
    footerCreators: "ผู้สร้าง",
    footerAmbassador: "Ambassador",
    footerForum: "ฟอรัม",
    footerAbout: "เกี่ยวกับเรา",
    footerHelp: "ศูนย์ช่วยเหลือ",
    footerTerms: "เงื่อนไข",
    footerPolicy: "นโยบาย",
  },
};

const templateNames = {
  presentation: ["Executive Pitch", "Quarterly Review", "Project Brief", "Strategy Deck"],
  cover: ["Minimal Cover", "Corporate Cover", "Event Cover", "Report Cover"],
  timeline: ["Launch Roadmap", "Milestone Plan", "Production Flow", "Quarter Timeline"],
  infographic: ["Process Map", "Data Snapshot", "Comparison Matrix", "KPI Overview"],
  newsletter: ["Team Update", "Announcement", "HR Notice", "Campaign Banner"],
  wallpaper: ["Desktop Focus", "Meeting Room", "Brand Pattern", "Dark Mode"],
  gimmick: ["Sticker Set", "Motion Cue", "Highlight Frame", "Prompt Card"],
  brandIdentity: ["Logo System", "Brand Guideline", "Color Palette", "Typography Kit"],
  corporatePhotos: ["Leadership Portrait", "Office Culture", "Team Workspace", "Factory Visit"],
  productBusiness: ["Product Launch", "Business Profile", "Service Overview", "Sales Kit"],
  marketingMaterials: ["Campaign Visual", "Social Banner", "Brochure Layout", "Event Poster"],
  eventsActivities: ["Town Hall", "Workshop", "CSR Activity", "Company Celebration"],
  boardExecutives: ["Board Portrait", "Executive Portrait", "Leadership Group", "Management Profile"],
};

const templateNamesTh = {
  presentation: ["สไลด์ผู้บริหาร", "สรุปไตรมาส", "บรีฟโปรเจกต์", "แผนกลยุทธ์"],
  cover: ["หน้าปกมินิมอล", "หน้าปกองค์กร", "หน้าปกอีเวนต์", "หน้าปกรายงาน"],
  timeline: ["แผนเปิดตัว", "แผนไมล์สโตน", "โฟลว์การผลิต", "ไทม์ไลน์ไตรมาส"],
  infographic: ["แผนผังกระบวนการ", "สรุปข้อมูล", "ตารางเปรียบเทียบ", "ภาพรวม KPI"],
  newsletter: ["อัปเดตทีม", "ประกาศสำคัญ", "ข่าวสาร HR", "แบนเนอร์แคมเปญ"],
  wallpaper: ["วอลเปเปอร์โฟกัส", "ห้องประชุม", "แพตเทิร์นแบรนด์", "โหมดมืด"],
  gimmick: ["ชุดสติกเกอร์", "สัญญาณเคลื่อนไหว", "กรอบไฮไลต์", "การ์ดพรอมป์"],
  brandIdentity: ["ระบบโลโก้", "คู่มือแบรนด์", "ชุดสีองค์กร", "ชุดฟอนต์องค์กร"],
  corporatePhotos: ["ภาพผู้บริหาร", "วัฒนธรรมองค์กร", "พื้นที่ทำงานทีม", "ภาพเยี่ยมชมโรงงาน"],
  productBusiness: ["เปิดตัวสินค้า", "โปรไฟล์ธุรกิจ", "ภาพรวมบริการ", "ชุดขายงาน"],
  marketingMaterials: ["ภาพแคมเปญ", "แบนเนอร์โซเชียล", "โบรชัวร์", "โปสเตอร์อีเวนต์"],
  eventsActivities: ["ทาวน์ฮอลล์", "เวิร์กช็อป", "กิจกรรม CSR", "งานเฉลิมฉลองบริษัท"],
  boardExecutives: ["ภาพคณะกรรมการ", "ภาพผู้บริหาร", "ภาพทีมผู้นำ", "โปรไฟล์ผู้บริหาร"],
};

const imagePool = Array.from({ length: 24 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return `./template-${number}.jpg`;
});

const heroVideoAssets = [
  { src: "./ferris-wheel.mov", tone: "warm" },
  { src: "./neon-fern.mov", tone: "magenta" },
  { src: "./green-fern.mov", tone: "forest" },
  { src: "./sea-blue.mov", tone: "ocean" },
];

const logoItems = [
  { id: "tks-logo-2", title: "TKS Logo 2", image: "./tks-logo-2.png", fileName: "tks-logo-2.png" },
  { id: "tks-logo-2026", title: "TKS Logo 2026", image: "./tks-logo-2026.png", fileName: "tks-logo-2026.png" },
  { id: "siam", title: "SIAM PRESS", image: "./logo-siam.png", fileName: "logo-siam.png" },
  { id: "alpha-prime", title: "Alpha Prime Fulfillment", image: "./alpha-prime-fulfillment.png", fileName: "alpha-prime-fulfillment.png" },
  { id: "marvel-pack", title: "MARVEL PACK", image: "./marvel-pack.png", fileName: "marvel-pack.png" },
  { id: "gofive-01", title: "Gofive Logo 01", image: "./gofive-logo-01.png", fileName: "gofive-logo-01.png" },
  { id: "gofive-02", title: "Gofive Logo 02", image: "./gofive-logo-02.png", fileName: "gofive-logo-02.png" },
  { id: "synnex", title: "Synnex", image: "./synnex.png", fileName: "synnex.png" },
  { id: "shipx", title: "ShipX", image: "./shipx-logo.png", fileName: "shipx-logo.png" },
  { id: "deskdoc", title: "DeskDoc", image: "./deskdoc.png", fileName: "deskdoc.png" },
  { id: "tbdp", title: "TBDP Inno Teck", image: "./tbdp-logo.png", fileName: "tbdp-logo.png" },
  { id: "helm", title: "HELM", image: "./helm-logo-final-2.png", fileName: "helm-logo-final-2.png" },
  { id: "helm-ai-stacked", title: "HELM AI แนวตั้ง", image: "./helm-ai-stacked.png", fileName: "helm-ai-stacked.png" },
  { id: "helm-ai-horizontal", title: "HELM AI แนวนอน", image: "./helm-ai-horizontal.png", fileName: "helm-ai-horizontal.png" },
  { id: "helm-ai-symbol", title: "HELM AI สัญลักษณ์", image: "./helm-ai-symbol.png", fileName: "helm-ai-symbol.png" },
];

const homeAssets = [
  { sub: "presentation", image: "./template-01.jpg" },
  { sub: "cover", image: "./template-02.jpg" },
  { sub: "timeline", image: "./template-03.jpg" },
  { sub: "infographic", image: "./template-04.jpg" },
  { sub: "newsletter", image: "./template-05.jpg" },
  { sub: "wallpaper", image: "./wallpaper-tech-01.jpg" },
  { sub: "gimmick", image: "./template-08.jpg" },
  {
    main: "corporate",
    sub: "brandIdentity",
    image: "./tks-corporate-library-mark.png",
    aggregateCorporate: true,
    fixedPreview: true,
  },
];

const masonryItems = [
  { image: "./mountain.jpg", size: "tall" },
  { image: "./hero-flower.jpg", size: "tall" },
  { image: "./portrait.jpg", size: "tall" },
  { image: "./waves.jpg", size: "wide" },
  { image: "./model-card.png", size: "square" },
  { image: "./template-09.jpg", size: "wide" },
  { image: "./template-10.jpg", size: "medium" },
  { image: "./template-11.jpg", size: "small" },
  { image: "./template-12.jpg", size: "small" },
];

const collections = [
  { en: "Cloud Design", th: "Cloud Design", count: 49, image: "./collection-icon-01-cloud-design.png" },
  { en: "Summer Campaign", th: "Summer Campaign", count: 129, image: "./collection-icon-02-summer-campaign.png" },
  { en: "Europe Travel", th: "Europe Travel", count: 150, image: "./collection-icon-03-europe-travel.png" },
  { en: "Aesthetic Wallpaper", th: "Aesthetic Wallpaper", count: 174, image: "./collection-icon-04-aesthetic-wallpaper.png" },
  { en: "Travel", th: "Travel", count: 119, image: "./collection-icon-05-travel.png" },
  { en: "Wild Animals", th: "Wild Animals", count: 185, image: "./collection-icon-06-wild-animals.png" },
  { en: "Sports", th: "Sports", count: 142, image: "./collection-icon-07-sports.png" },
  { en: "Father's Day", th: "Father's Day", count: 100, image: "./collection-icon-08-fathers-day.png" },
  { en: "Prompt Cards", th: "Prompt Cards", count: 98, image: "./collection-icon-09-prompt-cards.png" },
  { en: "World Day", th: "World Day", count: 193, image: "./collection-icon-10-world-day.png" },
  { en: "Ocean", th: "Ocean", count: 120, image: "./collection-icon-11-ocean.png" },
  { en: "Lifestyle", th: "Lifestyle", count: 162, image: "./collection-icon-12-lifestyle.png" },
];

const collectionBrowserItems = [
  ...collections,
  { en: "Mother's Day", th: "Mother's Day", count: 183, image: "./portrait.jpg" },
  { en: "Fashion", th: "Fashion", count: 249, image: "./template-02.jpg" },
  { en: "Nature Videos", th: "Nature Videos", count: 130, image: "./waves.jpg" },
  { en: "Earth Day", th: "Earth Day", count: 200, image: "./template-03.jpg" },
  { en: "Sky and Space", th: "Sky and Space", count: 250, image: "./template-04.jpg" },
  { en: "Happy Easter", th: "Happy Easter", count: 87, image: "./template-05.jpg" },
  { en: "Spring", th: "Spring", count: 300, image: "./hero-flower.jpg" },
  { en: "Celebrating Women", th: "Celebrating Women", count: 220, image: "./illustration.png" },
  { en: "Valentine's Day", th: "Valentine's Day", count: 250, image: "./gif-card.gif" },
  { en: "Brazil", th: "Brazil", count: 135, image: "./template-06.jpg" },
  { en: "Lunar New Year", th: "Lunar New Year", count: 127, image: "./template-07.jpg" },
  { en: "New Year Resolutions", th: "New Year Resolutions", count: 117, image: "./template-08.jpg" },
];

const articles = [
  {
    id: "ai-presentation-prompt-guide",
    en: "How to use prompts to get exactly the result you want",
    th: "ใช้ prompt ยังไง ให้ได้งานในแบบที่ตรงใจ",
    tagEn: "AI Prompt Guide",
    tagTh: "คู่มือ AI Prompt",
    date: "July 27, 2026",
    image: "./ai-presentation-prompt-guide.png",
  },
  {
    id: "mood-tone-creative-guide",
    en: "MOOD & TONE: The Essential Element of Visual Art",
    th: "MOOD & TONE ตัวสำคัญของงานศิลปะ",
    tagEn: "Creative Guide",
    tagTh: "คู่มืองานสร้างสรรค์",
    date: "July 22, 2026",
    image: "./mood-tone-simple-cover.png",
  },
  {
    id: "popular-color-combinations",
    en: "Popular Color Combinations",
    th: "คู่สีที่นิยมใช้ในงานออกแบบ",
    tagEn: "Color Guide",
    tagTh: "คู่มือการใช้สี",
    date: "July 14, 2026",
    image: "./color-pairing-cover.jpg",
  },
];

const templatePromptBase = `Create a 16:9 minimal modern high-tech corporate meeting room slide background.
The left 45% of the image must remain mostly empty with clean soft neutral negative space, suitable for adding a presentation title and body text. Keep this area uncluttered and free from important objects.
On the right and lower-right side, show a premium executive meeting room atmosphere as a supporting visual element: a clean conference table, partial cropped professionals at the edge of the frame, a laptop, tablet, notebook, glass of water, small plant, and subtle business documents.
Add tasteful high-tech meeting room details: smart glass wall, ultra-thin wall display, discreet video conference camera bar, slim ambient LED lines, faint transparent interface graphics, wireless charging pad on the table, refined acoustic wall panels.
Style: polished corporate presentation illustration, minimal modern business aesthetic, premium and calm, realistic but softly illustrated, refined vector-like simplicity rendered as a high-quality raster image.
Lighting and colors: warm off-white, soft gray, muted charcoal, gentle sage, muted blue digital accents, premium daylight glow, subtle cool LED highlights, low contrast, soft shadows.
Avoid: text, logos, watermarks, clutter, central faces, full group portrait, busy charts, neon cyberpunk style, overly futuristic sci-fi, exaggerated holograms, cartoonish style, strong saturated colors, or any objects crossing into the left text area.`;

const businessInfo17Prompt = `**TITLE: business info17**

Create a high-resolution 16:9 infographic that closely matches the supplied reference image. Reproduce the original composition, proportions, spacing, and visual hierarchy. Do not redesign or rearrange the layout.

**BACKGROUND**
A full-width, softly blurred modern office background with deep violet, purple, indigo, and subtle pink lighting. Add a thin white outer margin and a large rounded rectangular purple canvas.

**MAIN STRUCTURE**
Place exactly four large hexagonal stations horizontally across the middle. Connect them with one continuous, flowing white outline path that dips and rises between stations. Each station contains a simple white line icon in this order: envelope, gear, globe, document.

Use thin, crisp, front-facing 2D vector outlines with subtle translucent purple inner fills. Add a second thin inner hexagonal outline to each station. Keep the hexagons integrated into the continuous connector path. No solid 3D objects.

**CONTENT PLACEMENT**

- Upper left: centered white paragraph, “READ MORE” beneath it, and a vertical line ending in a small dot above the first station.
- Upper center-left: a minimal white-axis bar chart with four translucent purple bars.
- Upper center-right: a second centered white paragraph with “READ MORE” and a vertical dot connector above the third station.
- Upper right: four horizontal rounded progress bars in lavender and purple.
- Lower left: one large flat circular pie chart in two pale gray-purple tones.
- Below the second station: a short vertical connector, bold white “LOREM IPSUM” heading, centered white paragraph, and “READ MORE.”
- Lower center: one regular 4-row by 6-column matrix of evenly spaced circular dots, transitioning from pale lavender to dark purple.
- Below the fourth station: a short vertical connector, bold white “LOREM IPSUM” heading, centered white paragraph, and “READ MORE.”

**VISUAL STYLE**
Minimalist technology infographic, purple glassmorphism atmosphere, blurred photographic office background, thin white vector linework, translucent violet fills, restrained glow, subtle shadows, and crisp readable sans-serif typography.

**CRITICAL GEOMETRY**
The four hexagons must remain in one horizontal row. Preserve the original continuous wave-shaped connector path, including its alternating high and low curves. Keep charts, paragraphs, and decorative data elements in their original relative positions. Maintain generous negative space and precise alignment.

**STRICT NEGATIVE PROMPT**
No extra hexagons, no additional icons, no floating dashboard cards, no rectangular panels around the text, no thick 3D frames, no glass tubes, no cylindrical shapes, no metallic surfaces, no excessive neon glow, no extra charts, no extra text sections, no people in focus, no logos, no watermark, and no rearrangement.

**FINAL REQUIREMENT**
Prioritize reference-image fidelity over creativity. Match the original layout, purple color palette, line thickness, icon scale, background blur, and information density. Keep all major elements fully visible within the 16:9 canvas.`;

const businessInfo19Prompt = `**TITLE: business info19**

Recreate the supplied reference image as closely as possible. Use the reference image as the exact layout and style guide. Do not redesign or reinterpret it.

**CANVAS:** 16:9 landscape presentation infographic, light gray background, soft blurred dark-gray shadows, monochrome gray 3D style, crisp white typography.

**LEFT MAIN CARD:** Place one large horizontal dark-gray oval capsule with a subtle medium-gray gradient, thin darker outline, rounded edges, and a deep soft shadow. Position it on the left, occupying approximately 40% of the canvas width and 53% of its height. Center the following elements vertically:

- Large bold white number “3” at the top.
- Bold uppercase white “POINT” directly underneath.
- Smaller bold uppercase white “INFOGRAPHIC” below POINT.
- One small white horizontal rounded capsule below the text, containing exactly three circular dots: orange, red, and pink from left to right.

**RIGHT-SIDE CARDS:** Place exactly three identical dark-gray horizontal pill-shaped cards in a vertical stack on the right. Each card has a subtle gray gradient, thin darker border, rounded capsule ends, and a pronounced soft shadow. Keep equal widths, consistent heights, and generous vertical spacing. All three cards must use gray, not orange, red, or pink backgrounds.

Each card contains:

- One large white circular badge on the left.
- One bold uppercase letter centered inside the badge: A in orange for the top card, B in red for the middle card, and C in pink for the bottom card.
- On the right of each badge, the bold white heading “LOREM IPSUM”.
- Under the heading, three compact lines of small uppercase white placeholder text, matching the reference's tight line spacing and alignment.

**CONNECTORS:** Draw exactly three thin white dashed connector lines between the main card and the three right-side cards. The top line slopes upward toward card A, the middle line is horizontal toward card B, and the bottom line slopes downward toward card C. Each line has exactly two small white circular endpoint dots, six dots total.

**STYLE AND PROPORTIONS:** Match the reference image's geometry, spacing, scale, alignment, gray palette, typography, and shadow direction. Use a clean minimalist corporate infographic with realistic soft 3D depth. Keep the large left capsule dominant and the three right cards smaller and evenly aligned. Preserve the original composition without adding decorative elements.

**STRICT RULES:** Exactly 1 large left capsule, 3 small right capsules, 3 white letter badges, 3 dotted connectors, 6 endpoint dots, and 3 text paragraphs. Do not add icons, extra shapes, extra dots, colored card backgrounds, photographs, or new text. No purple background, no colorful gradients on the cards, no irregular organic shapes, no oversized right cards, and no rearrangement. Render all elements fully inside the canvas with no cropping.`;

const businessInfo22Prompt = `TITLE: business info22

PRECISE IMAGE CONSTRUCTION

Create the infographic immediately as a standalone image using the exact composition, proportions, placement, spacing, visual hierarchy, and information density specified below. Do not request an image upload. Do not redesign, simplify, or rearrange any element.

1. CANVAS AND BACKGROUND

Landscape infographic poster, 3:2 aspect ratio, approximately 1500 × 1000 pixels.
Full-bleed photographic background with no outer border or separate content panels.
Use a softly blurred natural background with muted olive green, moss green, gray-green, and warm brown tones.
Place a realistic photograph of two human hands cupping dark, fertile soil and a small young green seedling across the center and lower-right portion of the image.
Keep the hands and soil visible beneath the graphics, especially from the center to the right and bottom.
Apply a translucent olive-green and gray-brown overlay to unify the photograph and ensure white text remains legible.
The result must resemble a sophisticated environmental research poster combining photography and flat white vector graphics.
2. HEADER — TOP CENTER

Place the main heading at the top center.

Large, bold, uppercase white sans-serif text: “ECOLOGY”.
Directly underneath, smaller uppercase white text: “INFOGRAPHIC”.
Draw a thin horizontal white dotted line across nearly the entire canvas width, passing behind or alongside the subtitle, with a small visual gap around the centered title.
Maintain generous top margins and exact horizontal centering.
Do not add logos, badges, or additional headings.
3. UPPER-LEFT SECTION

Place a large white outline laboratory flask icon in the upper-left quadrant. Include a simple leaf motif inside the flask.

To its right, place:

Bold uppercase heading: “LOREM IPSUM”.
Four compact lines of small white placeholder text.
Left-aligned typography with tight line spacing.
Directly below this section, create a five-column vertical decorative indicator on the far-left edge. Each column is a tall, narrow white segmented line with consistent spacing and alignment. Add small two-line “LOREM IPSUM” labels underneath each column.

4. UPPER-CENTER SECTION — BAR CHART

Place a wide, compact white bar chart in the upper-center area, extending toward the right.

Exactly five vertical bars.
White-filled bars with rounded upper corners and varied heights.
Thin white horizontal gridlines and a fine vertical axis.
Small numeric labels along the left axis, ranging from 10 to 100.
Short white placeholder labels beneath each bar.
A thin white rising curved arrow above the bars.
Keep the chart flat, precise, and integrated directly into the photograph.
To the right of the chart, place a bold, two-line uppercase “LOREM IPSUM” heading and approximately five short lines of small white descriptive text.

5. MIDDLE-LEFT SECTION — CIRCULAR SYMBOL

Below the decorative vertical indicators, place a large white circular technical symbol resembling concentric segmented rings surrounding a central solid circle.

To its right, add:

Bold uppercase heading: “LOREM IPSUM”.
Five compact lines of small white placeholder text.
Maintain the symbol's strong visual weight and the heading's alignment with the upper-left text block.

6. MIDDLE-CENTER SECTION — RECYCLING

Place a large white recycling-cycle symbol near the center-right of the composition. Use three broad curved arrows arranged in a circular loop around a simple plant pot and two leaves.

To the right of the symbol, place:

Bold uppercase heading: “LOREM IPSUM”.
Five to six lines of compact white placeholder text.
Add one vertical column of small, evenly spaced white dots between the central graphic groups at the stated position and scale.

7. RIGHT EDGE — GAS DATA CALLOUTS

Create exactly two vertically stacked gas data callouts on the right side.

Upper callout

Large white circle containing bold black “CO₂”.
Smaller overlapping olive-green circle containing white “4%”.
A compact block of approximately five lines of small white explanatory text to the right.
Lower callout

Large white circle containing bold black “CO”.
Smaller overlapping dark olive circle containing white “1,5%”.
A compact block of approximately five lines of small white explanatory text to the right.
Keep both groups aligned vertically with consistent spacing. The circles must remain clean, flat, and highly legible.

8. LOWER-LEFT AND LOWER-CENTER — WORLD MAP

Place a large, solid-white world map silhouette across the lower-left and lower-center portions of the image. Use recognizable continental outlines with no country borders, labels, or map background.

To the right of the map, create exactly three vertically stacked data callouts:

Circular white outline badge containing “123”.
Circular white outline badge containing “65”.
Circular white outline badge containing “104”.
Connect each badge to the map using a thin horizontal white leader line ending in a small white dot. Place two to three compact lines of small white explanatory text to the right of each badge.

Keep the map prominent and ensure the hands remain partially visible behind it.

9. LOWER-RIGHT — ENVIRONMENTAL INFORMATION

Arrange three compact information groups vertically across the lower-right portion of the photograph.

Group 1: Sun

A large white sun icon with a solid circular center and straight triangular rays.
Bold uppercase heading “LOREM IPSUM” to its right.
A compact paragraph of small white placeholder text.
Group 2: Oxygen

Large bold white chemical notation “O²”, with the numeral 2 rendered as a superscript.
Two-line bold uppercase heading “LOREM IPSUM” positioned to the left of the notation.
Small white descriptive text adjacent to the heading.
Group 3: Plant growth

Simple white botanical icon with two stylized plant forms.
Two-line bold uppercase heading “LOREM IPSUM”.
A compact paragraph of small white placeholder text.
Preserve this dense editorial arrangement, keeping each icon, heading, and paragraph distinct.

10. TYPOGRAPHY AND GRAPHIC TREATMENT

Use a clean geometric sans-serif typeface, similar to Montserrat, Arial, or Helvetica.
Main title: extra-bold, uppercase, white.
Section headings: bold uppercase white.
Body text: small, regular-weight white, tightly spaced.
Data values: bold white or black according to their badge background.
Icons: simple, high-contrast, solid-white vector shapes.
Lines: thin white strokes with consistent weight.
Dots: small, circular, evenly spaced.
Use minimal shadows and subtle transparency only where needed.
Avoid 3D glass effects, glowing neon outlines, oversized interface circles, cards, and ornamental frames.
11. STRICT COMPOSITION RULES

The composition must follow this approximate spatial hierarchy:

Top 15%: centered title and dotted divider.
Upper 20–40%: laboratory information on the left, bar chart in the center, text on the right.
Middle 40–65%: decorative indicators, circular symbol, recycling diagram, and gas callouts.
Lower 60–95%: world map, three numbered data callouts, sun, oxygen notation, and plant-growth information.`;

const businessInfo27Prompt = `TITLE: business info27

Create the infographic immediately as a standalone image. Follow the exact layout, proportions, colors, typography, 3D materials, lighting, shadows, and element placements specified below. Do not request an image upload, redesign the composition, or add decorations.

CANVAS & BACKGROUND
Wide 16:9 landscape infographic, high resolution, presentation-ready. Use a smooth, solid deep royal-purple and indigo background (#16005F to #200078), with subtle tonal variation. Keep the background clean and uncluttered.

CENTERPIECE — IDEA BULB
Place one oversized, realistic glossy 3D lightbulb in the exact center. The bulb has a rounded, luminous sky-blue upper dome transitioning into vivid electric blue at the lower neck, with soft white highlights and smooth reflective surfaces. Add a thick dark bluish-purple screw base with several horizontal ridges and realistic shading. The bulb occupies approximately 40% of the image height.

Inside the bulb, display centered bold white uppercase text on three lines:

IDEA
BULB
INFOGRAPHIC

Use a heavy geometric sans-serif font. Keep the text crisp, correctly spelled, and centered.

ORBITAL RING
Surround the central bulb with one large circular orbital structure, approximately 42% of the canvas width. Use multiple thin concentric metallic rings in dark navy, steel blue, silver, and pale cyan, with subtle 3D bevels, reflections, and soft shadows. The ring sits behind the bulb and passes around the five circular nodes. Preserve its near-perfect circular geometry.

EXACTLY FIVE NODE BADGES
Place exactly five small circular 3D badges around the orbital ring. Each badge has a thick pale silver-white beveled rim, glossy colored interior, soft shadow, and one simple white line icon. Do not use hexagons or flat neon discs.

TOP CENTER — ORANGE/CORAL: A coral-orange circular badge at the 12 o'clock position above the ring, containing a white teamwork/network icon made of three connected circles. A thick coral-orange connector rises vertically, then turns right horizontally toward the heading “TEAMWORK” at the upper right.
UPPER LEFT — LIME GREEN: A green circular badge at approximately the 10 o'clock position, containing a white gear icon. A thick lime-green connector extends upward, then turns left toward the heading “MANAGEMENT” in the upper-left area.
UPPER RIGHT — CYAN: A cyan circular badge at approximately the 2 o'clock position, containing a white group-of-people icon. A thick cyan connector rises vertically, then turns right toward the heading “COMMUNITY” at the upper right-middle.
LOWER LEFT — PURPLE: A violet circular badge at approximately the 8 o'clock position, containing a simple white exclamation-mark icon. A thick purple connector rises vertically, then turns left toward the heading “COMMUNITY” at the middle-left.
LOWER RIGHT — PINK: A magenta-pink circular badge at approximately the 5 o'clock position, containing a white target icon with concentric circles and a central crosshair. A thick pink connector rises vertically, then turns right toward the heading “AUDIENCE” at the lower right.
Keep all five badges similar in diameter, with metallic rims and glossy, softly illuminated centers. Preserve their exact color distinctions and orbital positions.

TEXT BLOCKS — EXACTLY FIVE
Use five compact text groups placed beside their corresponding connector endpoints. Keep each heading in its assigned accent color, uppercase, bold sans-serif, approximately 25–28 px. Place smaller white sans-serif descriptions directly below, approximately 13–15 px, with tight line spacing and left alignment on the right-side blocks and right alignment on the left-side blocks.

Use these exact headings and descriptions:

TEAMWORK — upper right, orange-coral heading.
“Enhances
productivity and
fosters diverse and
useful skill utilization.”

MANAGEMENT — upper left, lime-green heading.
“Provides organization with top
level data management
systems for intelligence.”

COMMUNITY — upper right-middle, cyan heading.
“Building communication
by conveying a clear
message is crucial
for growth.”

COMMUNITY — middle left, violet heading.
“Building communication
by conveying a clear
message is crucial
for growth.”

AUDIENCE — lower right, magenta-pink heading.
“Building communication
by conveying a clear
message is crucial
for growth.”

Preserve the duplicate COMMUNITY heading exactly as specified. Do not replace it with another label.

CONNECTORS & ALIGNMENT
Use thick, clean, right-angled connector lines with rounded corners, matching each node's accent color. Keep the lines horizontal and vertical only, with no arrows. Connect each line visually to its corresponding badge and text group. Maintain generous negative space, balanced left-right composition, and the exact top, middle, and bottom relationships specified above.

LIGHTING & MATERIALS
Use polished 3D infographic rendering with realistic glossy plastic, metallic silver rims, smooth gradients, soft contact shadows, subtle reflections, and controlled highlights. The central bulb must be the brightest and largest element. Node badges should look like small dimensional glass-and-metal medallions. Avoid excessive glow, bloom, lens flares, or futuristic circuit decorations.

STRICT ELEMENT COUNT

1 central blue 3D lightbulb.
1 large circular orbital ring structure.
Exactly 5 circular colored node badges.
Exactly 5 icons, in the specified order.
Exactly 5 text groups.
Exactly 5 connector paths.
1 central bulb label.
No extra badges, icons, panels, charts, labels, or decorative symbols.
FINAL REQUIREMENT
Final composition: a deep-purple background, a large blue 3D lightbulb centered within a metallic circular orbit, five silver-rimmed colored badges positioned around the orbit, and five color-coded text groups connected by thick right-angle lines. Prioritize accurate geometry, spacing, material realism, and text placement over creative interpretation. No watermark, no photographs, no people, no hexagons, no flat neon infographic style, no additional headings, and no rearrangement.`;

const businessInfo30Prompt = `TITLE: business info30

Create the infographic immediately as a standalone image using the exact composition, proportions, spacing, colors, typography, and element positions specified below. Do not request an image upload and do not redesign.

CANVAS & BACKGROUND
Landscape 3:2 composition, approximately 1536 × 1024 pixels. Use a smooth dark navy-to-deep-teal gradient background, with teal on the far left transitioning to nearly black navy on the right. Add thin cyan electronic circuit traces only along the outer edges and corners, with small glowing endpoints. Keep the center clean and uncluttered. No photography, no cityscape, no 3D effects.

HEADER
Place “TECHNOLOGY INFOGRAPHIC” across the upper center in one horizontal line. Use widely spaced uppercase sans-serif letters. “TECHNOLOGY” is bright cyan; “INFOGRAPHIC” is white. Medium-bold typography, generous letter spacing, positioned near the top with ample empty space beneath.

MAIN LAYOUT — EXACTLY SIX HEXAGONS
Arrange six large, flat, bright-cyan hexagons in a connected alternating zigzag chain across the middle, following this precise left-to-right order:

Upper-left: analytics bar-chart icon.
Lower-left: magnifying-glass search icon.
Upper-middle: communication speech-bubble icon.
Lower-middle: clock icon.
Upper-right: two gear icons.
Lower-right: globe icon.
Use identical hexagon sizes with broad cyan fills, thin double-line cyan outlines, slightly rounded corners, and dark navy or black line-art icons centered inside. Connect neighboring hexagons with thin curved cyan double-line links. Preserve the specified alternating high-low positioning and generous spacing.

TEXT BLOCKS — EXACTLY SIX
Place one heading and one compact paragraph for each hexagon. Alternate the text blocks above and below the hexagon chain.

Above hexagon 1: “RESEARCH”
Below hexagon 2: “ANALYSIS”
Above hexagon 3: “TARGET MARKET”
Below hexagon 4: “STRATEGY”
Above hexagon 5: “MARKET SHARE”
Below hexagon 6: “PRECISE TOOLS”
Use bold uppercase cyan headings, approximately 20–22 px. Add centered, light-gray placeholder paragraphs beneath each heading, using compact 16–18 px sans-serif text and short lines. Use this exact placeholder copy consistently:

“Lorem ipsum dolor
sit amet consectetur
adipiscing elit Duis
elit sapien convallis
vel enim sit amet,
egestas commodo
arcu.”

Keep the upper text blocks above their respective hexagons and the lower text blocks below theirs. Do not let text overlap the icons or connector lines.

EDGE CIRCUIT GRAPHICS
Add thin cyan circuit paths entering from the left, right, top corners, and bottom corners. Use straight horizontal and diagonal segments with small circular terminals. Keep these traces close to the canvas edges, leaving the main infographic unobstructed. Use a subtle cyan glow and fine line weight.

COLOR & TYPOGRAPHY
Background: deep navy #020525 with dark teal #003443 on the left.
Hexagon fill: bright cyan #43E7EE.
Circuit lines and headings: cyan #37D9E8.
Main title text: white #F5F7FA.
Body text: light gray #D1D4DC.
Icons: dark navy #00152D.

Use clean geometric sans-serif typography similar to Montserrat or Arial. Keep all icons as simple, flat, dark line art. No gradients inside the hexagons.

STRICT RULES
Exactly 6 hexagons, 6 icons, 6 headings, and 6 paragraph blocks. One title only. Preserve the alternating upper/lower layout and the specified icon order. No numbers, labels, cards, extra symbols, extra headings, extra hexagons, photographs, city backgrounds, glowing circles, thick connectors, shadows, glassmorphism, or 3D elements. Do not rearrange, simplify, or add content.

FINAL TARGET
Final composition: a minimalist dark navy technology infographic with a cyan-and-white title, six bright-cyan hexagons connected in a horizontal zigzag, alternating text blocks, dark line icons, and delicate cyan circuit traces framing the edges. Prioritize geometric accuracy and negative space over decorative effects.`;

const businessInfo32Prompt = `TITLE: business info32

Create the infographic immediately as a standalone image on a 16:9 landscape canvas. Follow the exact composition, proportions, spacing, colors, typography, and visual hierarchy specified below. Do not request an image upload, redesign, or rearrange elements.

BACKGROUND & BORDER
Create a smooth medium-to-dark royal-blue background with a subtle gradient and a large dark navy-blue central area. Add thick angular geometric shards along all four edges in cyan, electric blue, and deep navy, with sharp diagonal cuts, subtle gradients, and soft shadows. Include diagonal blue stripe patterns near the upper-left and lower-right edges. Use rounded outer canvas corners.

CENTERPIECE
Place a large circular infographic precisely in the center. Build it from one central blue circle containing bold white uppercase text on two lines: “INFO” and “GRAFIC”. Surround it with exactly three visual circular layers: the central circle, a thick dark navy annular ring, and a thick medium-blue outer annular ring. Use smooth blue gradients, subtle highlights, and soft shadows. Keep the rings flat and clean, not metallic or excessively luminous.

Surround the circular structure with one large white dotted orbital circle. Keep the dots evenly spaced and the orbit perfectly round.

FOUR CIRCULAR ICON NODES
Position exactly four medium-sized blue circular badges at the diagonal quadrants of the outer ring. Each badge has a medium-blue gradient, soft shadow, and a crisp white outline icon:

Upper-left: settings gear.
Upper-right: calendar.
Lower-left: ascending bar chart with a growth arrow.
Lower-right: desktop computer monitor.
Keep all four badges equal in size and aligned symmetrically.

FOUR CORNER TEXT BLOCKS
Place four text groups outside the circular diagram, two at the top and two at the bottom. Each group contains the bold white uppercase heading “YOUR TITLE” and two lines of smaller light-gray text: “Lorem ipsum dolor sit amet,” and “consectetuer adipiscing elit.”

Upper-left block: left of the upper-left gear node.
Upper-right block: right of the upper-right calendar node.
Lower-left block: left of the lower-left analytics node.
Lower-right block: right of the lower-right monitor node.
Use clean sans-serif typography, approximately 30 px for headings and 16 px for descriptions on a 1440 × 810 canvas. Maintain consistent alignment and spacing.

LEFT OPTION CARDS
Place exactly two narrow, vertically oriented blue gradient cards side by side in the middle-left area. Give each card subtly rounded corners and a soft drop shadow. Place a white circular badge with a blue outer rim overlapping the top edge of each card.

First badge: small “OPTION” above a large letter “A”.
Second badge: small “OPTION” above a large letter “B”.
Inside each card, include the centered bold white heading “YOUR TITLE”, a thin white divider, and two short lines of tiny white placeholder text. Preserve identical card dimensions and styling.

RIGHT-SIDE LEGEND
Place one vertical list of exactly four items in the middle-right area. Each item consists of a white circular icon badge with a dark-blue rim and a small light-gray two-line placeholder description to its right.

Use these icons in order from top to bottom:

Calendar.
Desktop computer monitor.
Analytics bar chart.
Settings gear.
Keep all four items evenly spaced and vertically aligned. Do not add a surrounding panel.

BOTTOM SOCIAL ICONS
At the bottom center, place exactly three small white social-media symbols in one horizontal row: WhatsApp, Facebook, and Instagram. Use simple recognizable white glyphs with consistent spacing.

STYLE & RENDERING
Use a corporate blue palette, clean vector graphics, subtle dimensional shading, soft shadows, and restrained gradients. Use deep navy, royal blue, medium blue, cyan, white, and light gray. Maintain generous negative space and a balanced symmetrical composition. The result should resemble a polished corporate presentation infographic with a clean vector/3D hybrid style.

STRICT ELEMENT COUNT

1 central INFO GRAFIC circle.
3 circular structural layers in the center, including the central circle.
1 white dotted orbital circle.
Exactly 4 outer blue icon badges.
Exactly 4 corner text groups.
Exactly 2 left-side option cards with 2 overlapping white circular badges.
Exactly 4 right-side legend icons and descriptions.
Exactly 3 bottom social-media icons.
Angular blue and cyan edge decorations only.
Do not add extra rings, nodes, connectors, charts, panels, headings, or decorative symbols. Do not use a lightbulb, neon-glass effects, metallic silver medallions, excessive glow, or a black background. Avoid distorted text, misspellings, misplaced elements, and cropped content.

FINAL REQUIREMENT: Follow the specified exact layout, scale, blue color relationships, circular geometry, typography hierarchy, and edge decorations. Do not creatively reinterpret the design.`;

const businessInfo34Prompt = `TITLE: business info34

Create the infographic immediately as a standalone image using a clean, flat vector style on a 5:4 landscape canvas, approximately 630 × 490 px. Follow the exact layout, proportions, colors, spacing, and minimalist visual style specified below. Do not request an image upload or redesign.

BACKGROUND
Create a thin off-white outer margin. Inside, divide the canvas vertically into two solid blue sections: a dark royal-blue panel covering approximately 32% of the width on the left, and a medium cyan-blue panel covering the remaining 68% on the right. Use clean, flat colors without gradients or textures.

CENTRAL CIRCLE
Place one large circular hub centered near the vertical split, slightly left of center. The circle overlaps both background panels. Use a dark navy-to-blue subtle gradient fill, a thick bright cyan-blue outer ring, a thin dark inner outline, and a soft shadow cast down and to the left. Inside, place the exact white uppercase text “INFOGRAPHIC,” centered horizontally and vertically, using a small, bold sans-serif font with wide letter spacing.

CONNECTOR LINES
Create exactly five thin, light-cyan curved connector lines extending from different points around the right edge of the central circle toward the right side. Arrange them vertically, corresponding to five text blocks. Use smooth rounded bends and mostly horizontal endings. The top connector curves upward, the second curves gently upward, the third runs almost horizontally, the fourth curves gently downward, and the fifth curves downward before ending horizontally. Keep the lines delicate and unobtrusive, with no arrows, dots, or extra nodes.

RIGHT-SIDE TEXT BLOCKS
Place exactly five compact text blocks in a single vertical column on the right side, evenly spaced from top to bottom. Each block contains:

Heading: “Lorem Ipsum”
Description: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.”
Use bold white sans-serif headings, approximately 14–15 px. Place the description immediately below each heading in smaller white sans-serif text, approximately 8–9 px, arranged over two short lines. Keep all five blocks left-aligned at the same horizontal position, with consistent line spacing and identical typography.

COMPOSITION & COLORS
Maintain the original asymmetrical composition: dark blue left panel, brighter blue right panel, overlapping circular hub on the left, and five connector lines leading to five text blocks on the right. Preserve the generous negative space, flat corporate infographic aesthetic, clean geometry, subtle circle shadow, and restrained cyan accents.

STRICT ELEMENT COUNT
Exactly 1 central circular hub, 1 cyan outer ring, 5 curved connector lines, 5 text headings, and 5 descriptions. No icons, extra circles, additional panels, decorative waves, glassmorphism cards, 3D objects, logos, or extra text.

FINAL VALIDATION
Match the specified proportions, background split, circle size and position, connector curvature, text alignment, spacing, and restrained blue palette. Keep all elements sharp, readable, and fully inside the canvas. Do not creatively reinterpret the design.`;

const businessInfo35Prompt = `TITLE: business info35

PRECISE IMAGE CONSTRUCTION
Create the infographic immediately as a standalone image. Follow the exact layout, proportions, spacing, typography, colors, shadows, and subtle white textured background specified below. Do not request an image upload, redesign, or rearrange any elements.

CANVAS & BACKGROUND
Create a 5:3 landscape infographic, approximately 1340 × 800 px. Use an off-white background with a fine embossed paper texture, soft gray shadows, and a clean minimalist corporate style.

TOP TITLE
At the top center, place the bold dark-gray uppercase heading “INFOGRAPHIC”. Directly below, add the word “Template” in a lighter, regular-weight sans-serif font. Underneath, place exactly three small circular color dots in a horizontal row: cyan blue, orange, and magenta.

LEFT FEATURE CARDS
Place exactly three tall white vertical cards side by side across the left half of the canvas. Each card has a rounded capsule-like lower body, a large circular white medallion at the top, a raised rim, subtle light-gray inner shading, and a soft shadow.

First card — Blue: A simple blue padlock icon centered inside the circle. Below it, add the heading “Lorem Ipsum” in bold cyan blue, followed by a compact four-line dark-gray placeholder description.
Second card — Orange: A simple orange ascending bar-chart icon centered inside the circle. Below it, add the heading “Lorem Ipsum” in bold orange, followed by the same compact four-line dark-gray placeholder description.
Third card — Magenta: A simple magenta pie-chart icon centered inside the circle. Below it, add the heading “Lorem Ipsum” in bold magenta, followed by the same compact four-line dark-gray placeholder description.
Align all three cards evenly with identical dimensions, circular icon sizes, heading positions, and text spacing. Use clean flat-vector icons without unnecessary details.

RIGHT INFORMATION COLUMN
Place exactly three information blocks in a vertical stack on the right side. Each block contains a solid square color swatch on the left and a text section on the right. Use blue for the first, orange for the second, and magenta for the third.

Each text section contains a bold dark-gray heading “Lorem Ipsum” and a compact paragraph in smaller dark-gray sans-serif text, approximately five to six short lines. Keep all three blocks consistently aligned with generous vertical spacing. Do not enclose them in separate cards.

BOTTOM PROGRESS BARS
Place exactly three long horizontal progress bars beneath the feature cards, aligned vertically and extending across the lower-left area.

First bar: bright blue gradient fill at 55%, light-gray remaining track, and blue “55%” label at the right.
Second bar: orange gradient fill at 75%, light-gray remaining track, and orange “75%” label at the right.
Third bar: magenta gradient fill at 25%, light-gray remaining track, and magenta “25%” label at the right.
Use slim rounded tracks with subtle shadows. At the far left of each bar, overlap one small raised white circular badge containing a matching upward-trending arrow icon: blue, orange, and magenta respectively. Keep the percentage labels outside the tracks and aligned consistently.

COLOR PALETTE & MATERIALS
Use a restrained palette of cyan blue, vivid orange, bright magenta, white, light gray, and charcoal gray. Apply subtle gradients only to the colored icons and progress fills. Use soft diffuse shadows, white beveled circular rims, and fine paper grain. Avoid dark backgrounds, excessive gloss, heavy 3D effects, or glassmorphism.

STRICT ELEMENT COUNT

1 title: “INFOGRAPHIC”
1 subtitle: “Template”
3 small colored dots
3 feature cards with 3 circular icon medallions
3 feature icons: padlock, bar chart, pie chart
3 feature headings and 3 feature descriptions
3 right-side square swatches
3 right-side headings and 3 right-side paragraphs
3 progress tracks with blue 55%, orange 75%, and magenta 25% fills
3 percentage labels
3 small circular arrow badges with 3 matching upward-trending arrows
Do not add any other text, icons, cards, decorations, logos, or watermarks.

FINAL VALIDATION
Preserve this exact composition: centered title at the top, three large feature cards across the left, three colored text blocks on the right, and three progress bars along the lower-left portion. Match the specified alignment, spacing, visual hierarchy, and white textured corporate aesthetic. Keep all elements sharp, legible, correctly colored, and fully within the canvas. Do not creatively reinterpret the design.`;

const businessInfo41Prompt = `TITLE: business info41

PRECISE IMAGE CONSTRUCTION
Create the infographic immediately as a standalone image. Follow the exact composition, geometry, proportions, spacing, colors, typography, shadows, and material depth specified below. Do not request an image upload, redesign, or add elements.

CANVAS & BACKGROUND
Landscape 16:9, approximately 1412 × 786 px. Use a smooth dark burgundy-to-muted reddish-brown gradient background, darkest on the left and transitioning to warm terracotta brown on the right. Keep the background clean and minimal.

TOP TITLE
At the top center, place two lines of white uppercase text:

“MODERN” in a thin, lightweight sans-serif font.
“INFOGRAPHIC” directly underneath in bold, larger uppercase sans-serif.
Keep both lines centered with generous spacing above the diagram.
CONNECTING LINES
Below the title, draw one thin white dashed rectangular connector: a long horizontal line across the upper-middle area, with short vertical dashed lines descending from its left, center, and right connection points toward the three numbered badges. Add one short vertical dashed line extending upward from the center badge connection toward the title. Use fine, evenly spaced white dashes.

THREE CIRCULAR STEP CARDS
Place exactly three large circular cards in one horizontal row across the lower-middle portion of the canvas. Keep all three circles identical in size and evenly spaced, with their centers aligned horizontally.

Each card consists of:

A large outer circular ring in vivid coral red, with a subtle red gradient and a narrow pale-peach highlight along the upper-right edge.
A thin dark burgundy inner border.
A large warm golden-orange inner circle with a soft radial gradient, lighter near the center and darker toward the edges.
Deep, pronounced soft shadows cast behind and below each circle, creating a layered, raised paper-medallion appearance.
A small coral-red circular number badge overlapping the top edge of each large circle. Give each badge a thin pale highlight, dark lower edge, and strong drop shadow.
NUMBER BADGES
Use exactly three badges, centered above their respective circles, containing large bold white numerals:

Left: “1”
Center: “2”
Right: “3”
CARD TEXT
Inside each golden-orange circle, position the text slightly left of center using the specified left-aligned text layout. Use dark navy-purple text.

Each circle contains exactly:

One bold heading: “Lorem Ipsum”
One compact paragraph in small, regular-weight sans-serif text, broken into approximately six short lines:
“Lorem ipsum dolor sit amet,
consectetuer adipiscing elit,
sed diam nonummy nibh
euismod tincidunt ut laoreet
dolore magna aliquam erat
volutpat.”

Keep the heading directly above the paragraph. Repeat the same text and formatting in all three circles. Ensure generous empty space around the text and do not center-align the paragraph.

COLOR PALETTE & MATERIALS

Background: deep burgundy, dark plum-brown, muted terracotta.
Outer rings: coral red and warm crimson.
Inner circles: golden orange and soft amber.
Number badges: bright coral red.
Text: dark navy-purple inside the circles; pure white for the title and numerals.
Connectors: thin white dashed lines.
Use smooth gradients, subtle edge highlights, realistic soft shadows, crisp vector geometry, and a refined 3D-paper effect. Avoid excessive gloss, glassmorphism, extra ornaments, and overly bright backgrounds.

STRICT ELEMENT COUNT

1 two-line title: “MODERN” and “INFOGRAPHIC”
1 dashed rectangular connector structure
3 large circular cards
3 coral outer rings and 3 golden-orange inner circles
3 overlapping circular number badges labeled 1, 2, and 3
3 identical headings and 3 identical paragraphs
Do not add icons, arrows, extra labels, additional circles, extra steps, logos, watermarks, or decorative objects.

FINAL VALIDATION
Final composition: centered two-line title at the top, thin dashed connector structure beneath it, and three equally sized red-ringed golden circles across the lower half. Preserve the left-aligned text inside each circle, overlapping number badges, burgundy gradient background, and strong soft shadows. Maintain the specified proportions and visual hierarchy. Do not creatively reinterpret the design.`;

const businessInfo43Prompt = `TITLE: business info43

PRECISE IMAGE CONSTRUCTION
Create the infographic immediately as a standalone image. Follow the exact composition, geometry, proportions, colors, typography, spacing, shadows, and layered 3D vector style specified below. Do not request an image upload, redesign, or add elements.

CANVAS & BACKGROUND
Landscape 16:9, approximately 1448 × 810 px. Use a smooth dark navy-blue to muted steel-blue gradient, darker on the left and brighter toward the upper-right. Clean corporate background with subtle depth and rounded outer corners.

TOP TITLE
Place one centered horizontal title near the top: “MODERN” in thin, lightweight white uppercase sans-serif, immediately followed by “INFOGRAPHIC” in bold white uppercase sans-serif. Keep both words on the same baseline and use this exact visual hierarchy.

MAIN SEMICIRCULAR DIAGRAM
Create one large semicircular fan diagram occupying the lower center of the canvas. It consists of exactly FOUR separate, thick radial wedge segments arranged from left to right, forming a broad 180-degree arc with a flat bottom edge. Each segment has a slightly rounded outer contour, narrow dark gaps, subtle bright edge highlights, gradient fills, and deep soft shadows.

Segment 1, far left: vivid magenta-purple.
Segment 2, upper-left: luminous violet and indigo.
Segment 3, upper-right: medium royal blue.
Segment 4, far right: cyan-blue and teal.
Keep the segments symmetrical around the center, with the two inner segments taller and the outer segments extending outward. Preserve this precise fan-shaped geometry and layered depth.

CENTER FOREGROUND SEMICIRCLE
Place one large, low, half-circular cap in muted blue-gray over the bottom-center junction of the four wedges. It has a flat bottom edge aligned with the diagram’s baseline, a curved top, a pale blue-gray outline, subtle gradient shading, and a pronounced soft shadow. This foreground cap overlaps the inner lower ends of the fan segments. Do not put any number or icon inside it.

FOUR NUMBERED SEGMENTS
Place exactly four large numerals directly on the colored wedges, following these specified positions and rotations:

White-to-pale-pink “1” on the left magenta wedge, slightly rotated.
Pale lavender “2” on the violet wedge.
Bright cyan “3” on the royal-blue wedge, slightly rotated.
Bright turquoise “4” on the right teal wedge, rotated to follow the wedge direction.
Use bold sans-serif numerals, large scale, and no extra numbering.

FOUR CIRCULAR ICON BADGES
Place exactly FOUR matching circular badges, one overlapping the outer edge of each wedge. Each badge is a desaturated blue-gray disc with a pale cyan rim, subtle glossy highlight, and deep drop shadow. Use a simple, solid white icon centered inside each disc:

Far left: ascending bar chart.
Upper-left: envelope.
Upper-right: person silhouette.
Far right: five-point star.
Position the badges precisely: the bar-chart badge overlaps the left outer wedge; the envelope badge sits above the violet wedge; the person badge sits above the royal-blue wedge; the star badge overlaps the right teal wedge. Keep their sizes consistent.

FOUR EXTERNAL TEXT BLOCKS
Use exactly FOUR white text blocks, each containing the heading “LOREM IPSUM” in tall, condensed, bold uppercase sans-serif, followed by two short lines of smaller regular-weight white text:

“Lorem ipsum dolor sit amet,
consectetuer adipiscing vol.”

Place them as follows:

Left-middle: to the left of the bar-chart badge.
Upper-left: above the envelope badge.
Upper-right: above the person badge.
Right-middle: to the right of the star badge.
Align each block left. Keep the headings prominent, body copy compact, and spacing consistent across all four blocks. Do not add connector lines.

VISUAL STYLE
Premium corporate infographic, crisp vector geometry, smooth purple-to-blue-to-teal gradients, beveled edges, subtle luminous outlines, realistic soft shadows, layered paper-like depth, clean white icons, high-resolution typography, a restrained blue palette, and balanced negative space.

STRICT ELEMENT COUNT

1 title line containing “MODERN INFOGRAPHIC”
1 lower semicircular fan diagram
Exactly 4 colored wedge segments
Exactly 4 numerals: 1, 2, 3, 4
Exactly 4 circular icon badges
Exactly 4 icons: bar chart, envelope, person, star
Exactly 4 external text blocks
Exactly 1 foreground blue-gray semicircle
NEGATIVE CONSTRAINTS
No fifth segment, no fifth number, no extra icon badges, no extra icons, no additional text blocks, no title on two lines, no arrows, no connector lines, no extra panels, no logos, no watermark, no people photographs, and no decorative elements. Do not replace the four-part fan with a complete circular chart or a five-step semicircle.

FINAL VALIDATION
Final layout: single-line title at the top; four colored fan-shaped segments across the lower half; four gray-blue icon discs positioned at the outer and upper edges; four matching text blocks surrounding the diagram; and one large gray-blue semicircular cap covering the bottom center. Preserve the specified spacing, proportions, color order, overlaps, and visual hierarchy. Do not creatively reinterpret the design.`;

const businessInfo44Prompt = `TITLE: business info44

PRECISE IMAGE CONSTRUCTION
Create the infographic immediately as a standalone image. Use a 16:9 landscape composition and follow the exact flat-vector style, layout, proportions, colors, spacing, and typography specified below. Do not request an image upload, redesign, or reinterpret.

BACKGROUND & TITLE
Use a solid deep midnight-navy background (#141D40). Center the title at the top: small, widely spaced white text “Your Text Here”, followed by large lowercase white text “infographic” in a clean geometric sans-serif font. Place four small circular dots underneath in white, light gray, teal, and lime green.

CENTER DONUT CHART
Create one large exploded 3D-style donut chart centered horizontally and vertically. Use exactly eight thick, separated extruded segments arranged in a circular ring, viewed from a fixed elevated front perspective. Preserve the original open center, vertical side faces, flat vector surfaces, sharp edges, and consistent extrusion depth. No realistic materials, glossy effects, or excessive shadows.

Follow this exact clockwise color sequence and these segment positions:

Top: bright lime green.
Upper-right: turquoise.
Right: coral pink and vivid orange-red.
Bottom: golden orange.
Bottom-left: bright red and coral pink.
Left: yellow-green.
Upper-left: pale yellow and medium sky blue.
Use vivid solid fills with darker side faces to create simple dimensional depth. Each segment must remain visibly separated by dark gaps. Use asymmetrical exploded-ring geometry with the specified segment heights, inner opening, and front-facing vertical walls.

LEFT COLUMN — EXACTLY FOUR ITEMS
Place four vertically stacked information blocks on the left side of the donut. Each block has a white bold heading “Your Title Here” and two centered lines of smaller white text:

“Vivamus quam dolor, tempor
ac gravida sit amet, porta.”

Position one circular icon badge to the right of each text block, closer to the chart. From top to bottom:

Blue badge with a white water-drop icon.
Yellow badge with a white house icon.
Lime-green badge with a white gear icon.
Red badge with a white outlined star icon.
Use concentric translucent colored rings around each badge. Keep all badges identical in size.

RIGHT COLUMN — EXACTLY FOUR ITEMS
Place four vertically stacked information blocks on the right side of the donut. Each block has a white bold heading “Your Title Here” and two lines of smaller white text:

“Vivamus quam dolor, tempor
ac gravida sit amet, porta.”

Position one circular icon badge to the left of each text block, closer to the chart. From top to bottom:

Lime-green badge with a white stacked-layers icon.
Teal badge with a white shopping-cart icon.
Coral-orange badge with a white umbrella icon.
Orange-yellow badge with a white lightning-bolt icon.
Use the same badge dimensions, concentric translucent rings, and icon scale as the left column.

LAYOUT & ALIGNMENT
Keep the donut chart centered, occupying approximately 34% of the canvas width and 57% of the canvas height. Place four evenly spaced text-and-icon rows on each side. Left text is right-aligned, followed by its icon badge. Right icon badges come first, followed by left-aligned text. Maintain generous margins and exact symmetrical balance.

VISUAL STYLE
Clean flat 2D vector infographic with simple extruded 3D geometry. Solid midnight-navy background, bright saturated colors, crisp white typography, minimal shading, clean edges, and restrained dimensional depth. Use a straight-on elevated viewing angle without perspective distortion.

STRICT ELEMENT COUNT

1 dark navy background.
1 centered title group with 4 small dots.
1 exploded donut chart with exactly 8 colored segments.
8 information blocks: 4 on the left and 4 on the right.
8 circular icon badges.
Exactly 8 icons in the specified order.
No additional elements.
NEGATIVE PROMPT
No six-segment donut, no four-segment fan chart, no numbers on the donut, no extra headings, no extra text blocks, no connector lines, no arrows, no labels on chart segments, no metallic materials, no photorealism, no glassmorphism, no neon glow, no heavy shadows, no gradients on the background, no decorative panels, no logos, no watermark, no additional icons, no changed icon order, no altered camera angle, no cropped elements.

FINAL VALIDATION
Follow every descriptive requirement exactly. Preserve the specified donut geometry, eight segment positions, exact icon order, title placement, four-dot row, text alignment, badge sizes, navy background, and balanced left-right layout. Generate the image immediately without requesting any source image. The result must look like one consistent infographic template, not a redesigned variation.`;

const latestBusinessPromptsRaw = `TITLE: business info22

Create a complete infographic image immediately. Do not request, require, or refer to any reference image. Generate everything from this prompt alone.

CANVAS & STYLE
Landscape 3:2, approximately 1500 × 1000 px. Create a sophisticated environmental infographic combining a softly blurred olive-green and brown nature photograph with hands holding fertile soil and a small green seedling. Apply a subtle dark olive overlay for clear white typography. Use flat white vector graphics, thin lines, compact editorial layouts, and clean geometric sans-serif fonts. No borders, cards, 3D effects, or neon.

HEADER
Top-center title: large bold white “ECOLOGY”, with smaller “INFOGRAPHIC” underneath. Add a thin horizontal dotted white divider across the canvas.

LAYOUT & CONTENT

Upper left: White outline laboratory flask with a leaf, bold “LOREM IPSUM” heading, four lines of small white placeholder text, and five narrow segmented vertical indicators with tiny labels beneath.
Upper center: Compact white bar chart with exactly five bars of varying heights, horizontal gridlines, a 10–100 vertical scale, small labels, and a rising curved arrow. Add a bold “LOREM IPSUM” heading and five short lines of text to the right.
Middle left: Large white concentric segmented circular technical symbol. Place a bold “LOREM IPSUM” heading and five short lines of text beside it.
Middle center-right: Large white recycling symbol with three curved arrows surrounding a plant pot and two leaves. Add a bold “LOREM IPSUM” heading and five to six short lines of text. Include a vertical dotted separator.
Right side: Exactly two stacked gas callouts. Each has a large white circle with black chemical notation and a smaller overlapping olive circle: “CO₂ / 4%” and “CO / 1,5%”. Add five short lines of white explanatory text beside each.
Lower left and center: Large solid-white world map silhouette without borders or labels. Beside it, arrange exactly three white circular outline badges labeled “123”, “65”, and “104”, each connected by a thin white leader line ending in a dot, followed by two to three short lines of text.
Lower right: Three vertically stacked environmental information groups: a white sun icon with “LOREM IPSUM” and a short paragraph; bold white “O²” notation with a two-line heading and small text; and a white botanical growth icon with a two-line heading and a short paragraph.
FINAL REQUIREMENTS
Maintain a dense, balanced infographic composition with clearly separated sections, consistent alignment, small readable white text, high-contrast icons, and realistic photographic details visible behind the graphics. Preserve every specified label, icon category, data value, and element count. Do not omit sections or add unrelated content. Render the finished image directly without asking questions or requesting uploads.







TITLE: business info27

Create the complete infographic image immediately. Do not request, require, or refer to any reference image. Generate everything from this prompt alone.

CANVAS & BACKGROUND

Wide 16:9 landscape, high resolution. Solid deep royal-purple/indigo background (#16005F–#200078), clean and uncluttered.

CENTERPIECE

Place one large, glossy 3D lightbulb at the exact center, occupying approximately 40% of the canvas height. Use a luminous sky-blue dome transitioning to electric blue, realistic white reflections, and a dark bluish-purple ridged screw base. Inside, display perfectly centered bold white uppercase text on three lines:

IDEA
BULB
INFOGRAPHIC

Surround the bulb with one near-perfect circular orbital structure made of thin concentric metallic rings in dark navy, steel blue, silver, and pale cyan, with subtle bevels, reflections, and shadows.

EXACTLY FIVE CIRCULAR NODES

Place five equally sized 3D medallions with thick beveled silver-white rims, glossy colored centers, soft shadows, and simple white line icons:

12 o’clock — Coral orange: Connected three-circle teamwork/network icon.
10 o’clock — Lime green: Gear icon.
2 o’clock — Cyan: Group-of-people icon.
8 o’clock — Violet: Exclamation-mark icon.
5 o’clock — Magenta pink: Target with concentric circles and crosshair.
Arrange all nodes around the orbital ring. Connect each badge to its corresponding text block using a thick, clean, right-angled connector in the same accent color. Use horizontal and vertical segments only, with rounded corners and no arrows.

EXACTLY FIVE TEXT GROUPS

Use bold uppercase accent-colored headings (25–28 px) and small white descriptions (13–15 px), with compact line spacing. Right-side blocks are left-aligned; left-side blocks are right-aligned.

Upper right — TEAMWORK (coral orange): “Enhances productivity and fosters diverse and useful skill utilization.”
Upper left — MANAGEMENT (lime green): “Provides organization with top level data management systems for intelligence.”
Upper right-middle — COMMUNITY (cyan): “Building communication by conveying a clear message is crucial for growth.”
Middle left — COMMUNITY (violet): “Building communication by conveying a clear message is crucial for growth.”
Lower right — AUDIENCE (magenta pink): “Building communication by conveying a clear message is crucial for growth.”
Preserve both COMMUNITY headings exactly. Position every connector and text group to match its corresponding node while maintaining balanced spacing and generous negative space.

RENDERING & STRICT RULES

Premium realistic 3D infographic style with glossy plastic, metallic rims, smooth gradients, subtle reflections, controlled highlights, and soft contact shadows. The central bulb must remain the brightest and largest element.

Maintain exactly:

1 central blue 3D lightbulb with its three-line label.
1 circular metallic orbital structure.
5 circular colored node badges and 5 white icons.
5 connector paths and 5 text groups.
No extra icons, badges, panels, charts, labels, or decorations. No photographs, people, watermarks, hexagons, excessive glow, lens flares, or flat neon styling. Prioritize precise geometry, alignment, typography, and the specified composition. Render the finished image directly without asking questions or requesting uploads.





TITLE: business info30

Create the complete infographic immediately. Do not request, require, or refer to any reference image. Generate everything from this prompt alone.

CANVAS & BACKGROUND
Landscape 3:2, approximately 1536 × 1024 px. Dark navy-to-deep-teal gradient (#020525 to #003443), teal on the left and nearly black navy on the right. Add thin cyan electronic circuit traces with small glowing endpoints only along the outer edges and corners. Keep the center clean. Flat vector style, no photography or 3D effects.

HEADER
Top-center, one horizontal line: “TECHNOLOGY INFOGRAPHIC”. Use widely spaced uppercase geometric sans-serif lettering; “TECHNOLOGY” in cyan (#37D9E8), “INFOGRAPHIC” in white (#F5F7FA).

MAIN DIAGRAM — EXACTLY SIX HEXAGONS
Create six identical bright-cyan (#43E7EE) flat hexagons in a connected horizontal zigzag, alternating upper and lower positions from left to right:

Upper-left: dark navy analytics bar-chart icon.
Lower-left: magnifying-glass search icon.
Upper-middle: speech-bubble communication icon.
Lower-middle: clock icon.
Upper-right: two gear icons.
Lower-right: globe icon.
Use thin double-line cyan outlines, slightly rounded corners, dark navy line-art icons (#00152D), and thin curved cyan double-line connectors between neighboring hexagons.

EXACTLY SIX TEXT BLOCKS
Alternate text above and below the hexagons:

Above hexagon 1: “RESEARCH”
Below hexagon 2: “ANALYSIS”
Above hexagon 3: “TARGET MARKET”
Below hexagon 4: “STRATEGY”
Above hexagon 5: “MARKET SHARE”
Below hexagon 6: “PRECISE TOOLS”
Each block has a bold uppercase cyan heading (20–22 px) and this exact light-gray paragraph (#D1D4DC), centered in compact 16–18 px sans-serif text:

“Lorem ipsum dolor
sit amet consectetur
adipiscing elit Duis
elit sapien convallis
vel enim sit amet,
egestas commodo
arcu.”

Keep all six text blocks clear of icons and connectors.

STRICT RULES
Exactly 6 hexagons, 6 icons, 6 headings, 6 paragraphs, and 1 title. Preserve the icon order, alternating layout, colors, and negative space. No extra text, symbols, cards, shadows, photographs, cityscapes, gradients inside hexagons, or 3D effects. Render the finished image directly without asking questions or requesting uploads.







TITLE: business info32

Create the complete infographic immediately. Do not request, require, or refer to any reference image. Generate everything from this prompt alone.

CANVAS & BACKGROUND
Wide 16:9 landscape. Medium-to-dark royal-blue gradient with a large dark navy-blue central area. Add thick angular cyan, electric-blue, and deep-navy shards along all four edges, with diagonal cuts, subtle gradients, and soft shadows. Include diagonal blue stripes near the upper-left and lower-right edges. Rounded outer canvas corners.

CENTRAL CIRCULAR DIAGRAM
Center one circular structure with exactly three structural layers: a blue central circle containing bold white uppercase “INFO” and “GRAFIC” on two lines, a thick dark-navy annular ring, and a thick medium-blue outer annular ring. Use subtle blue gradients and soft shadows, without excessive glow. Surround the structure with one large, perfectly round white dotted orbital circle.

EXACTLY FOUR CIRCULAR ICON NODES
Place four equal-sized blue gradient badges symmetrically at the diagonal quadrants of the outer ring:

Upper-left: white settings gear.
Upper-right: white calendar.
Lower-left: white ascending bar chart with growth arrow.
Lower-right: white desktop monitor.
FOUR CORNER TEXT GROUPS
Place one group in each corner around the diagram: upper-left, upper-right, lower-left, and lower-right. Each contains bold white uppercase “YOUR TITLE” and two smaller light-gray lines:

“Lorem ipsum dolor sit amet,
consectetuer adipiscing elit.”

Use approximately 30 px headings and 16 px descriptions. Keep text outside the circular diagram.

TWO LEFT-SIDE OPTION CARDS
Place exactly two narrow, vertically oriented blue-gradient cards side by side in the middle-left area, with rounded corners and soft shadows. Each has an overlapping white circular badge with blue rim:

First badge: small “OPTION” above a large “A”.
Second badge: small “OPTION” above a large “B”.
Inside each card, use centered bold white “YOUR TITLE”, a thin white divider, and two short lines of tiny white placeholder text. Keep both cards identical in size.

RIGHT-SIDE LEGEND
Create exactly four evenly spaced vertical items in the middle-right area. Each has a white circular icon badge with dark-blue rim and a small light-gray two-line placeholder description. Icon order: calendar, desktop monitor, analytics bar chart, settings gear. No surrounding panel.

BOTTOM SOCIAL ICONS
At bottom center, place exactly three small white recognizable symbols in one horizontal row: WhatsApp, Facebook, Instagram.

STRICT RULES
Exactly 1 central INFO/GRAFIC circle, 3 central structural layers, 1 dotted orbit, 4 outer icon badges, 4 corner text groups, 2 option cards with 2 overlapping white badges, 4 legend icons, and 3 social icons. Preserve the corporate blue palette, composition, spacing, and restrained vector/3D hybrid style. No lightbulb, extra rings, nodes, headings, panels, logos, watermarks, black background, or neon-glass effects. Render immediately without requesting uploads.







TITLE: business info34

Create the complete infographic immediately. Do not request, require, or refer to any reference image. Generate everything from this prompt alone.

CANVAS & BACKGROUND
Landscape 5:4, approximately 630 × 490 px. Add a thin off-white outer margin. Inside, use two flat solid-blue vertical sections: dark royal blue covering 32% of the width on the left and medium cyan-blue covering 68% on the right. No textures or gradients.

CENTRAL HUB
Place one large circular hub slightly left of center, overlapping both blue sections. Use a dark navy-to-blue subtle gradient, thick bright-cyan outer ring, thin dark inner outline, and a soft shadow cast down-left. Center the exact white uppercase word “INFOGRAPHIC” inside, in small bold sans-serif lettering with wide letter spacing.

CONNECTORS
Create exactly five thin light-cyan curved lines extending from different points on the hub’s right edge toward the right side. Arrange them vertically: the first curves upward, the second gently upward, the third nearly horizontal, the fourth gently downward, and the fifth downward before ending horizontally. Smooth rounded bends, no arrows or dots.

RIGHT-SIDE TEXT
Arrange exactly five evenly spaced text blocks in one vertical column. Each contains:

Bold white heading: “Lorem Ipsum”
Smaller white description: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.”
Use approximately 14–15 px headings and 8–9 px descriptions, wrapping each description into two short lines. Left-align every block at the same horizontal position.

STRICT RULES
Exactly 1 central hub, 1 cyan outer ring, 5 curved connectors, 5 headings, and 5 descriptions. Preserve the asymmetrical blue split, hub position, connector curvature, spacing, and flat minimalist corporate style. No icons, extra circles, panels, logos, decorative waves, 3D objects, or additional text. Keep every element sharp and fully inside the canvas. Render directly without asking questions or requesting uploads.









TITLE: business info35

Create the complete infographic immediately. Do not request, require, or refer to any reference image. Generate everything from this prompt alone.

CANVAS & BACKGROUND
Landscape 5:3, approximately 1340 × 800 px. Off-white background with subtle embossed paper texture, fine grain, soft gray shadows, and minimalist corporate styling.

TOP TITLE
Centered bold dark-gray uppercase “INFOGRAPHIC”. Directly underneath, lighter regular-weight “Template”. Below it, exactly three small circular dots in cyan blue, orange, and magenta.

LEFT FEATURE CARDS
Place exactly three tall white vertical cards side by side across the left half. Each has a rounded capsule-like lower body, raised white circular medallion at the top, subtle gray inner shading, and soft shadow.

Blue padlock icon; bold cyan-blue “Lorem Ipsum” heading.
Orange ascending bar-chart icon; bold orange “Lorem Ipsum” heading.
Magenta pie-chart icon; bold magenta “Lorem Ipsum” heading.
Under each heading, use the same compact four-line dark-gray placeholder description. Align all cards with identical dimensions, icon sizes, and text spacing.

RIGHT INFORMATION COLUMN
Place exactly three vertically stacked text groups on the right. Each begins with a solid square swatch in blue, orange, or magenta, followed by a bold dark-gray “Lorem Ipsum” heading and a compact five-to-six-line dark-gray paragraph. No surrounding cards.

BOTTOM PROGRESS BARS
Place exactly three long slim rounded progress tracks below the left feature cards, with light-gray remaining tracks, subtle shadows, and matching upward-trending arrow icons inside raised white circular badges overlapping the left ends.

Blue gradient fill: 55%, with blue “55%” label.
Orange gradient fill: 75%, with orange “75%” label.
Magenta gradient fill: 25%, with magenta “25%” label.
Keep percentage labels outside the tracks and consistently aligned.

STYLE & STRICT RULES
Use cyan blue, vivid orange, bright magenta, white, light gray, and charcoal gray. Apply restrained gradients only to colored icons and progress fills. Preserve the exact three-card, three-information-block, three-progress-bar layout.

Exactly 1 title, 1 subtitle, 3 colored dots, 3 feature cards, 3 circular medallions, 3 feature icons, 3 feature headings and descriptions, 3 square swatches, 3 right-side headings and paragraphs, 3 progress tracks, 3 percentage labels, and 3 arrow badges. No extra elements, logos, watermarks, dark backgrounds, heavy 3D effects, or glassmorphism. Render immediately without requesting uploads.









TITLE: business info41

Create the complete infographic immediately. Do not request, require, or refer to any reference image. Generate everything from this prompt alone.

CANVAS & BACKGROUND
Landscape 16:9, approximately 1412 × 786 px. Smooth dark burgundy-to-muted terracotta-brown gradient, darkest on the left and warmer on the right. Clean, minimal background.

TOP TITLE
Centered two-line white uppercase title:

“MODERN” in thin, lightweight sans-serif.
“INFOGRAPHIC” directly below in larger bold sans-serif.
DASHED CONNECTOR
Below the title, draw one thin white dashed rectangular connector structure: a long horizontal line across the upper-middle area, with short vertical dashed lines descending from the left, center, and right connection points toward three numbered badges. Add one short vertical dashed line upward from the center connection toward the title.

EXACTLY THREE CIRCULAR STEP CARDS
Arrange three identical large circular cards in one horizontal row across the lower-middle area, evenly spaced and horizontally aligned. Each card has:

Vivid coral-red outer ring with subtle gradient and pale-peach upper-right highlight.
Thin dark-burgundy inner border.
Large golden-orange inner circle with a soft radial gradient.
Deep soft shadows behind and below for raised paper-medallion depth.
One small coral-red circular number badge overlapping the top edge, with pale highlight, dark lower edge, and strong shadow.
Number badges contain large bold white numerals: “1”, “2”, and “3”, from left to right.

CARD TEXT
Inside each golden-orange circle, position text slightly left of center and left-align it in dark navy-purple. Repeat the same heading and paragraph in all three cards.

Bold heading: “Lorem Ipsum”

Paragraph, broken into approximately six short lines:

“Lorem ipsum dolor sit amet,
consectetuer adipiscing elit,
sed diam nonummy nibh
euismod tincidunt ut laoreet
dolore magna aliquam erat
volutpat.”

STYLE & STRICT RULES
Use coral red, crimson, golden orange, amber, burgundy, and dark navy-purple. Preserve smooth gradients, crisp vector geometry, white title and numerals, dashed white connectors, and pronounced soft shadows.

Exactly 1 two-line title, 1 dashed connector structure, 3 circular cards, 3 coral outer rings, 3 golden-orange inner circles, 3 overlapping numbered badges, 3 identical headings, and 3 identical paragraphs. No icons, arrows, extra labels, circles, logos, watermarks, or decorative objects. Maintain the title above the connectors and the three cards across the lower half. Render directly without asking questions or requesting uploads.











TITLE: business info43

Create the complete infographic immediately. Do not request, require, or refer to any reference image. Generate everything from this prompt alone.

CANVAS & BACKGROUND
Landscape 16:9, approximately 1448 × 810 px. Smooth dark navy-blue to muted steel-blue gradient, darker on the left and brighter toward the upper-right, with subtle depth and rounded outer corners.

TOP TITLE
Centered on one horizontal line: “MODERN” in thin, lightweight white uppercase sans-serif, immediately followed by “INFOGRAPHIC” in larger bold white uppercase sans-serif.

MAIN SEMICIRCULAR FAN
Create one large 180-degree semicircular fan across the lower center, composed of exactly four separate thick radial wedge segments with slightly rounded outer contours, narrow dark gaps, bright edge highlights, smooth gradients, and deep soft shadows.

Segment 1, far left: vivid magenta-purple.
Segment 2, upper-left: violet and indigo.
Segment 3, upper-right: medium royal blue.
Segment 4, far right: cyan-blue and teal.
Keep the fan symmetrical, with taller inner segments and outward-extending outer segments. Maintain a flat bottom baseline.

Overlay one large muted blue-gray semicircular cap over the lower-center junction. It has a flat bottom edge aligned with the baseline, curved top, pale blue-gray outline, subtle shading, and pronounced soft shadow. It contains no text or icon.

FOUR NUMBERED SEGMENTS
Place exactly four large bold numerals directly on the wedges:

White-to-pale-pink “1” on the left magenta wedge, slightly rotated.
Pale lavender “2” on the violet wedge.
Bright cyan “3” on the royal-blue wedge, slightly rotated.
Bright turquoise “4” on the right teal wedge, rotated along the wedge direction.
FOUR CIRCULAR ICON BADGES
Place four equal-sized desaturated blue-gray circular badges with pale-cyan rims, glossy highlights, and deep shadows, each overlapping the outer edge of its wedge. Center one solid white icon in each:

Far left: ascending bar chart.
Upper-left: envelope.
Upper-right: person silhouette.
Far right: five-point star.
FOUR EXTERNAL TEXT BLOCKS
Place exactly four white text blocks:

Left-middle, left of the bar-chart badge.
Upper-left, above the envelope badge.
Upper-right, above the person badge.
Right-middle, right of the star badge.
Each block contains a tall condensed bold uppercase heading “LOREM IPSUM” and two short lines of smaller regular white text:

“Lorem ipsum dolor sit amet,
consectetuer adipiscing vol.”

Left-align every block. No connector lines.

STYLE & STRICT RULES
Use smooth purple-to-blue-to-teal gradients, beveled edges, subtle luminous outlines, realistic soft shadows, crisp vector geometry, and layered paper-like depth.

Exactly 1 single-line title, 1 semicircular fan, 4 colored wedges, 4 numerals, 4 circular icon badges, 4 icons, 4 external text blocks, and 1 blue-gray foreground semicircle. No fifth segment or number, extra badges, extra text, arrows, connectors, logos, watermarks, photos, or decorations. Do not replace the fan with a full circle or five-step diagram. Render immediately without requesting uploads.











TITLE: business info44

Create the complete infographic immediately. Do not request, require, or refer to any reference image. Generate everything from this prompt alone.

CANVAS & BACKGROUND
Landscape 16:9. Solid deep midnight-navy background (#141D40), clean flat-vector style. Top-center title: small, widely spaced white “Your Text Here”, followed by large lowercase white “infographic” in a geometric sans-serif font. Add exactly four small dots below in white, light gray, teal, and lime green.

CENTER DONUT CHART
Create one centered exploded donut chart, occupying approximately 34% of the canvas width and 57% of its height. Use exactly eight thick, separated extruded segments arranged in a circular ring with an open center, flat vector surfaces, visible vertical side faces, consistent extrusion depth, and dark gaps. Use a fixed elevated front view with minimal dimensional shading.

Clockwise color sequence and positions:

Top: bright lime green.
Upper-right: turquoise.
Right: coral pink and vivid orange-red.
Bottom: golden orange.
Bottom-left: bright red and coral pink.
Left: yellow-green.
Upper-left: pale yellow and medium sky blue.
Keep all eight segments visibly separated, with darker side faces and no labels or numbers on the chart.

LEFT COLUMN — EXACTLY FOUR ITEMS
Place four vertically stacked text groups on the left, each with a bold white “Your Title Here” heading and two smaller white lines:

“Vivamus quam dolor, tempor
ac gravida sit amet, porta.”

Position a circular icon badge between each text group and the donut. From top to bottom:

Blue badge with white water-drop icon.
Yellow badge with white house icon.
Lime-green badge with white gear icon.
Red badge with white outlined star icon.
Use identical badge sizes and concentric translucent colored rings.

RIGHT COLUMN — EXACTLY FOUR ITEMS
Place four vertically stacked text groups on the right, using the same heading and description. Position each circular icon badge between the donut and its text. From top to bottom:

Lime-green badge with white stacked-layers icon.
Teal badge with white shopping-cart icon.
Coral-orange badge with white umbrella icon.
Orange-yellow badge with white lightning-bolt icon.
Match the left-side badge sizes, rings, and icon scale. Left text is right-aligned; right text is left-aligned. Maintain even vertical spacing and balanced symmetry.

STYLE & STRICT RULES
Use a clean flat 2D vector infographic with simple extruded geometry, a solid midnight-navy background, vivid saturated segment colors, crisp white text, minimal shading, and restrained depth. Keep the donut centered and all elements fully visible.

Exactly 1 title group, 4 colored dots, 1 exploded donut with 8 segments, 8 text blocks, 8 circular icon badges, and 8 icons in the specified order. No extra headings, chart labels, numbers, arrows, connector lines, panels, logos, watermarks, extra icons, metallic materials, photorealism, glassmorphism, neon glow, heavy shadows, or altered viewing angle. Render the finished image directly without asking questions or requesting uploads.`;

const latestBusinessPrompts = Object.fromEntries(
  latestBusinessPromptsRaw
    .split(/\n(?=TITLE: business info\d+\n)/)
    .map((prompt) => {
      const titleMatch = prompt.match(/^TITLE: business info(\d+)/);
      return [Number(titleMatch[1]), prompt.trim()];
    }),
);


const businessInfographicPromptOverrides = {
  17: businessInfo17Prompt,
  19: businessInfo19Prompt,
  22: latestBusinessPrompts[22],
  27: latestBusinessPrompts[27],
  30: latestBusinessPrompts[30],
  32: latestBusinessPrompts[32],
  34: latestBusinessPrompts[34],
  35: latestBusinessPrompts[35],
  41: latestBusinessPrompts[41],
  43: latestBusinessPrompts[43],
  44: latestBusinessPrompts[44],
};


const businessInfographicPromptDirections = [
  "Use a deep emerald-green and dark teal 16:9 background with subtle gradients, soft shadows, and thin mint highlights. Place one large horizontal beveled hexagon on the left containing centered white text: 3 very large, POINT bold, and INFOGRAPHIC smaller bold. Place exactly three identical horizontal hexagonal panels on the right, stacked vertically with equal spacing. Each panel contains one circular white icon background on the left and text on the right. Icon order from top to bottom: upward arrow, bar chart, document. Each panel uses heading LOREM IPSUM and one short paragraph. Connect the large hexagon to the three panels with exactly three thin white dashed lines and small white circular endpoints.",
  "Create a bright silver-white modern infographic with a semicircular five-part blue and cyan dial rising from the bottom center. Put numbered wedges 1–5 around a central DESIGN circle, small white icon discs on the rim, and five short text blocks distributed symmetrically around the arc. Use glossy 3D bevels, cool shadows, and ample clean space.",
  "Build a pale blue business growth poster dominated by seven white vertical columns increasing from left to right. Lay a thick curved blue arrow with a white outline across the column tops, ending in an oversized arrowhead at the upper right. Label the columns DATA 01 through DATA 07, add seven small circular business icons along a blue baseline, and reserve a compact title block in the upper left.",
  "Design a black futuristic eight-step infographic arranged as two rows of four rounded rectangular glass cards. Give every card a white number badge, heading, short description, thin gray border, and soft shadow. Decorate the background with flowing magenta and violet mesh waves concentrated on the right while keeping the title centered at the top.",
  "Create a clean white business growth dashboard. On the left, show five ascending bars labeled with values +10.3, +12.0, +22.6, +41.9, and +83.0 under a thick dark navy curved arrow sweeping upward. Add an 80% growth-strategies panel at the upper left, three circular quarterly metrics on the far left, and a narrow right sidebar for completed, recurring, pending, and this-year statistics. Use mint green, navy, and light gray.",
  "Use a saturated cobalt-to-violet fluid 3D wave background. Place a small logo at upper left, a centered technology poster headline and subheading, four translucent numbered section cards in one row, and a simple footer line. Keep all text white and the layout elegant, spacious, and suitable for a product or technology launch.",
  "Create a black premium infographic with five tall translucent rounded capsules standing in a row. Fill each capsule to a different height with a bright gradient color—blue, orange, purple, pink, and magenta—and show a white circular icon at the bottom, a short label in the middle, and percentage figures 50%, 60%, 90%, 100%, and 50% beneath. Add flowing multicolor wave ribbons behind the capsules.",
  "Create a minimal white six-branch hub diagram. Put a large softly shadowed circle in the center labeled INFOGRAPHIC ELEMENTS, then route six thick rounded connector paths to three circular nodes on each side. Use mustard yellow for the upper-left branch, warm gray for the middle-left, dark gray for the lower-left, and teal shades for the right branches. Pair each node with a small icon and a concise text block.",
  "Build a six-segment circular business infographic on a neutral gray background. Use overlapping fan-shaped wedges in navy, coral red, mint, magenta, teal, and golden yellow around a large white central circle with a team icon and BUSINESS INFOGRAPHIC title. Put a white line icon and paragraph inside every colored wedge and use realistic paper-like shadows.",
  "Create a symmetrical ten-item infographic on a light gray background. Leave a large empty white circular hub in the center with a segmented outer ring. Arrange five rounded white cards vertically on each side, connect them to the hub with thin white lines and dot nodes, and attach circular icon tabs to the outer ends. Use only charcoal, white, and small orange accents with curled-paper shadows.",
  "Design a vertical bar-graph poster on white with five colorful house-shaped bars increasing from left to right in dark teal, cyan, green, yellow, and orange. Place values +20.1, +38.9, +45.2, +70.1, and +89.3 inside the bars, add small business icons, number them 01–05 below, and overlay a thick gray curved growth arrow. Include a faint world map and thin leader-line annotations.",
  "Create a minimalist goal-setting composition on an off-white background. Crop a giant red-and-white bullseye on the right edge and pierce it with a black and red 3D arrow. On the left, add a GOALS heading with target symbol, a thin red zigzag line chart with circular points, and a bold BUSINESS CONCEPT title with a short centered description near the bottom.",
  "Create a black analytics infographic with an abstract orange-magenta-yellow wave running across the background. On the left, draw a framed horizontal grouped bar chart comparing three colors across 2022, 2023, and 2024. On the right, stack three long translucent rounded description panels, each with a large white circular icon and a heading tinted blue, orange, or magenta.",
  "Use a desaturated architectural corridor photograph with a translucent gray overlay. Place a large pale circular BUSINESS INFOGRAPHIC hub at the center and connect seven surrounding white ring icons with solid and dotted radial lines. Position balanced text blocks around the perimeter for finance, organization, analytics, banking, growth, and investment themes, all in white.",
  "Create a luminous night-city business infographic. Put a large outlined hexagon in the center containing the title, then surround it with six translucent petal-shaped panels for people, charts, gears, briefcase, time, and finance. Add round white outlined icons at the outer tips and dashed pill-shaped bullet lists extending left and right. Use cyan-white linework over deep blue bokeh.",
  "Design a monochrome business performance infographic over a blurred black-and-white photo of hands using a tablet. Draw a white angular line chart rising from lower left to upper right with ring-shaped data points and circular percentage meters marked 75%, 25%, 50%, and 100%. Add several short white text blocks and one translucent gray gear callout while preserving dramatic photographic contrast.",
  "Create a purple glassmorphism dashboard over a softly blurred office scene. Arrange four large connected hexagonal stations across the middle for mail, settings, global web, and documents, using thin glowing white outlines and vertical connector stems. Add four editorial text sections, a small bar chart, progress bars, pie chart, and dot matrix around the stations.",
  "Use a dramatic upward-looking skyscraper photograph as the full background with a cool gray transparent overlay. Center a large frosted white BUSINESS circle surrounded by two thin rings. Connect six translucent circular icon nodes to the hub—folder, lock, web, checklist, documents, and chat—and place matching text blocks at the outer left and right edges.",
  "Create a soft gray three-point infographic with strong 3D shadows. Put one oversized rounded organic card on the left containing the number 3 and POINT INFOGRAPHIC. Connect it with three short dotted white lines to three stacked pill-shaped cards on the right labeled A, B, and C in orange, red, and pink. Each pill has a white circle badge and compact white copy.",
  "Create a dark blue corporate-network infographic over a blurred office-building background. Place a large pale circular BUSINESS COMPANY hub in the center, surround it with an orbital ring and six connector joints, and extend lines to project cards around the canvas. Each endpoint combines a white teardrop icon badge—documents, chat, folder, location, people, or finance—with a framed label and short text.",
  "Design a vertical five-stage growth infographic on a muted dark-teal background. Build five thick 3D arrows rising from a pale base, increasing in height from left to right, colored cream, peach, coral, light blue, and teal. Number the base blocks 01–05 and place short labels above or beside each arrow, leaving a clean title at the top.",
  "Create a dense ecology infographic over a warm photograph of hands holding soil and a young plant. Use white typography and icons to organize a headline, laboratory symbol, bar chart, circular environmental diagrams, recycling icon, world map, CO2 bubbles, sun, oxygen marker, and several data callouts. Keep the image editorial and information-rich with an olive-green overlay.",
  "Build a vivid green sustainability infographic over a macro photograph of a leaf and water droplet. Divide the layout with a vertical dotted line: left side contains a translucent bar chart and four small environmental info panels; right side contains a large Ecology title, two rows of plant-rating icons marked 3/10 and 7/10, a responsibility paragraph, and a circular water-drop node with three callouts.",
  "Create a futuristic blue city-dashboard infographic. Center a large translucent BUSINESS INFOGRAPHIC circle, attach six circular icon nodes in two columns for cloud, address book, home, analytics, settings, and time, and connect them with thin angular lines to rounded white description bars. Add slim progress bars, a small line graph, and three map pins along the bottom.",
  "Render a minimal 3D bar chart on a smooth charcoal-gray studio background. Use six small rounded rectangular columns growing steadily from left to right, alternating blue, purple, cyan, magenta, and turquoise. Add soft floor shadows and glossy beveled tops, but no extra panels or clutter.",
  "Create a cyan technology hub infographic. Put a large white circular INFOGRAPHICS ELEMENTS disc at center with layered segmented rings and digital interface marks. Connect eight white rounded cards—four on each side—with node lines; give every card a circular icon badge and short description. Use bright cyan-to-blue gradients with navy accents and subtle circuit graphics.",
  "Create a dark violet idea-management infographic centered on a glowing cyan lightbulb labeled IDEA BULB. Surround the bulb with a circular orbital path and five colored node badges for teamwork, community, audience, communication, and management. Connect each node to a small uppercase heading and compact description, using neon pink, orange, green, and purple accents.",
  "Design a five-part radial business infographic on white. Create five large overlapping fan blades around a navy central BUSINESS INFOGRAPHIC circle, colored yellow, orange, magenta, purple, and teal. Each blade contains a thin white heading, underline, and short paragraph; add realistic folded-paper shadows and a thin white ring around the center.",
  "Create a clean white five-part donut infographic. Use five separated rounded segments in yellow, cyan, navy, burgundy, and red around an empty center, with a simple line icon inside each segment. Place three text blocks on the left and two on the right, aligned with the segments and labeled INFODATA 01–05.",
  "Build a dark navy technology infographic with cyan circuit lines framing the edges. Arrange six glowing cyan hexagons in a staggered connected chain, each containing a black line icon for analytics, search, communication, time, gears, or global reach. Alternate heading-and-paragraph blocks above and below the chain and place a wide TECHNOLOGY INFOGRAPHIC title across the top.",
  "Create a vertical white business infographic with five glossy blue 3D columns stepping upward from lower left to upper right. Print 01–05 on their fronts, place large percentages 16%, 21%, 38%, 72%, and 89% near the tops with thin blue leader lines, and reserve a compact title and introductory paragraph in the upper-left corner.",
  "Create a premium navy radial infographic with layered concentric blue rings centered on an INFO GRAFIC circle. Place four round blue icon nodes at the diagonal quadrants, surround the outer ring with white dotted arcs, and add four large title-and-description blocks near the corners. Include two small option cards on the left, a vertical four-icon legend on the right, and angular cyan decorative shards around the border.",
  "Create a black comparison infographic with four tall translucent rounded cards in a row. Inside each card, display a paired vertical bar chart in luminous gradients—blue, orange, magenta, and pink—with a short description and a white circular chart icon below. Add flowing multicolor wave ribbons behind the cards and a centered title at the top.",
  "Design a split blue infographic. Use a deep royal-blue panel on the left and cyan-blue panel on the right. Place a large dark circular INFOGRAPHIC hub near the split, then draw four thin curved connector lines to right-side headings and descriptions. Give the hub a soft glowing ring and subtle 3D shadow.",
  "Create a bright white KPI summary board with soft inset shadows. Across the top, place three large white circular icon badges for security, analytics, and pie data with small captions beneath. On the right, stack three color-keyed paragraphs. Across the bottom, add three horizontal progress bars in blue, orange, and magenta labeled 55%, 75%, and 25%.",
  "Create a minimalist target strategy slide on white. Crop a large red-and-white target at the lower-right corner and pierce it with a red arrow entering diagonally. Put the huge word TARGET in the upper left with a small rounded label, then distribute three neat annotation blocks around the open white space using thin red leader lines and dot endpoints.",
  "Create a black eight-card infographic titled INFOGRAPHIC TEMPLATE. Arrange eight translucent rounded-square cards in a precise 4-by-2 grid, each with a bold white number, heading, dotted divider, and paragraph. Use subtle gray borders and shadows, with luminous teal and green mesh waves flowing behind the cards.",
  "Create a pale-gray six-node process map. Put a small dark circular hub at center labeled INFOGRAPHIC, then route black curved connector lines to six rounded white cards arranged symmetrically in three rows. Accent each card with a colored circular icon tab and faint rainbow glow, using blue, aqua, violet, teal, yellow, and coral.",
  "Create a clean three-branch organizational flowchart on white. Place one long blue-gray rounded header at top, connect it downward to three section headers in gray, red, and charcoal, then connect each header to a large matching text box below. Use thin black orthogonal arrows, white connector dots, gentle gradients, and restrained shadows.",
  "Create a white-and-blue corporate magazine profile layout with an airy architectural 3D floor pattern. Put a large 3D RENDER MAGAZINE title and company-profile copy on the right, a vertical timeline on the left with three milestones and statistic callouts, and three small feature columns. Add small cobalt rectangles and pale-blue geometric accents.",
  "Create a warm burgundy modern infographic with three large circular step cards in one horizontal row. Each circle has layered coral and peach rings, a small red numbered badge 1–3 on top, and a centered paragraph. Connect the circles with a thin rectangular outline and use pronounced soft shadows for a tactile 3D-paper appearance.",
  "Create a dark slate circular infographic with four glossy round nodes placed at top, right, bottom, and left around a double-ring orbit. Color the nodes cyan, violet, teal, and purple, use white icons for mail, search, person, and bar chart, and place four matching heading-and-paragraph blocks outside the ring. Put Modern Infographic in the center.",
  "Create a dark blue semicircular five-step infographic emerging from the bottom. Build five glossy wedge segments numbered 1–5 in purple, indigo, blue, cyan, and teal, place a small white icon disc above each segment, and distribute five short headings around the arc. Use realistic beveled shadows and a centered title above.",
  "Create a navy 3D donut chart made from six separated extruded segments in bright lime, green, cyan, blue, orange, and red. Place the chart at center, then arrange six small colored icon bullets with short descriptions in two vertical columns on the left and right. Use a simple lowercase infographic heading at the top.",
  "Design a tall white circular process infographic using three nested rings. Divide the outer orange-red ring into illustrated business sections with icons and short text, place four large white circular data badges around the middle ring, and use a central white hub with a team icon and title. Include tiny dotted textures and orange-to-yellow gradients.",
  "Create a tall white four-step circular business infographic. Arrange four large colored fan segments numbered 01–04 in red, orange, yellow, and teal around a central white team hub. Place four smaller gray circular info panels between the colored segments, add chart icons, and use realistic overlapping paper shadows.",
  "Create a tall white circular infographic composed of four broad metallic silver petal loops around a central target icon and title. Accent the left and right petals with translucent blue panels containing document, money, chart, and finance icons. Use cool gray gradients, subtle cyan highlights, and strong 3D depth.",
  "Create a flat sky-blue project infographic. On the right, draw a circular hub-and-spoke system with a quartered center disc, anchor icon, and many dark blue circular tool nodes connected by dotted orbital paths. On the left, stack four project titles with short paragraphs. Add a thin top title rule and small yellow status label.",
  "Create a black three-row progress infographic over luminous multicolor mesh waves. Each row is a long dark translucent rounded bar with a colored fill—blue, orange, or pink—stopping at a different length and labeled 50%. Place a large white capsule icon panel near the left-center of each bar and a heading-and-description block at the far left.",
  "Create a black-and-electric-blue technology landing banner. Keep the left half mostly black for a bold two-line 3D RENDERING TECH BANNER BACKGROUND headline, short body copy, and two rectangular confirm/cancel buttons. Fill the right half with a glowing cobalt wave surface made of many fine parallel lines sweeping upward.",
  "Create an immersive cobalt wave landing banner where dense luminous parallel curves fill almost the entire background and form a deep central tunnel. Place a bold white 3D RENDERING TECH BANNER BACKGROUND heading, compact body copy, and blue/gray action buttons in the left-center, maintaining high contrast and cinematic depth.",
  "Create a vertical navy infographic with four diagonal rounded data bars stacked from top to bottom. Give each bar a large circular percentage badge—20%, 40%, 60%, and 80%—and color the bars lavender, yellow-orange, green, and pink. Add a short title and gear icon inside every bar, then extend a thin white line to large step numbers 01–04 on the right.",
  "Create a purple product-launch slide with flowing glossy fabric-like waves. Put a small logo at upper left, a huge centered BIG PRODUCT LAUNCH TITLE, two subtitle lines, and four translucent numbered content cards across the middle. Add a centered footer statement and keep the atmosphere bold, modern, and celebratory.",
  "Create a black infographic with three vertical glowing meter bars on the left labeled A, B, and C, filled in blue, orange, and magenta. On the right, stack three rounded translucent cards labeled A, B, and C with white circular letter badges and short descriptions. Add multicolor wave ribbons behind the composition and a centered title above.",
  "Create a bright white infographic with a stack of large overlapping 3D discs rising from the lower-left corner in purple, blue, green, yellow, orange, and red. Place a white laptop line icon on the top orange disc. On the right, draw four thin gray leader lines to four aligned title-and-description blocks, using soft shadows and faint flowing background curves.",
  "Create a minimalist white 3D RENDER MAGAZINE company-profile slide. Use a huge dark title at upper left with blue typographic accent, an italic blue section heading and body paragraphs below, then place a three-point horizontal timeline across the right. Fill the lower half with an abstract white stepped floor pattern and a few cobalt geometric bars.",
  "Create a clean white target-goal infographic. Place a large red-and-white bullseye with two arrows on the left, then arrange four vertically stacked numbered callouts 01–04 with small colored circular icons and brief text on the right. Use thin gray rules, red highlights, and ample white space.",
  "Create a white innovation ecosystem infographic with a glowing lightbulb standing on stacked colorful platform blocks at center. Orbit the bulb with circular arrows and four analytic icons for growth, analytics, operations, and cloud sync. Add numbered stage markers 01–04 along the base and small business annotations around the composition.",
  "Create a bright blue target landing page. Place a large red-and-white 3D target pierced by an arrow on the left, a bold TARGET headline and short landing-page copy on the right, a small Learn More button, and a minimal navigation menu across the top. Use smooth blue gradients and generous spacing.",
  "Create a futuristic white circular development-concept diagram inside a luminous 3D architectural tunnel. Put DEVELOPMENT CONCEPT in the center, surround it with six small blue icon nodes and text blocks, and connect all nodes with multiple dotted elliptical orbits. Use glossy white surfaces, cobalt accents, and precise symmetry.",
  "Create a deep blue three-step infographic with layered flowing wave patterns. Place a large metallic arrowhead and circular three-segment chart at center-left, label it 3 STEPS INFOGRAPHIC, and put three white icon/description groups around it for mail, analytics, and star. Use peach and navy segments with soft 3D shadows.",
  "Create a black three-column infographic over glowing orange, yellow, purple, and pink wave ribbons. Use three large white vertical pill cards containing icons for security, bar analytics, and pie data, with short descriptions at their bases. Keep the title centered above and use crisp white surfaces with subtle shadows.",
  "Create a luminous blue geometric infographic with four raised hexagonal tiles arranged as two upper and two lower modules. Put white circular icon badges above each tile for bar chart, mail, user, and search, and place short descriptions inside. Use blue-to-violet gradients, beveled depth, and a small DESIGN heading at the upper right.",
  "Create a minimal white three-column metric board. Place three tall rounded white pill cards with soft shadows, each topped by a circular icon for security, analytics, or pie data. Add one short heading and paragraph beneath each icon, with tiny cyan, orange, and magenta accents and a simple title centered above.",
  "Create a black comparison infographic with three tall translucent vertical gauges showing 55%, 75%, and 25%. Fill the gauges with cyan, orange, and magenta, place a white circular trend icon at each base, and add three color-keyed explanatory paragraphs along the left. Use flowing red-orange-yellow mesh waves in the background.",
  "Create a purple hexagonal process infographic. Stack six glossy purple hexagon cubes in a pyramid, each bearing a white icon for person, mail, book, star, bookmark, or chart. Surround the pyramid with six short heading-and-description callouts connected by thin cyan leader lines, and add a faint honeycomb pattern to the background.",
  "Create a dark navy 3D pie-chart infographic. Place a thick extruded five-segment pie chart at center in orange, red, purple, blue, and turquoise. Connect each segment with dotted right-angle leader lines to five short text blocks distributed around the chart. Use compact uppercase headings and ample negative space.",
  "Create a bright white five-icon KPI board with soft inset shadows. Arrange five circular white icon badges across the top for security, analytics, pie data, comparison chart, and web panel, each with a short caption. Below, place three long progress bars in blue, orange, and magenta marked 55%, 75%, and 25%.",
  "Create a gray business-target poster with a large red-and-white target cropped in the upper-right corner and a thick dark blue zigzag arrow rising into its center. Keep the left and lower areas mostly empty, add small widely spaced BUSINESS TARGET lettering along the bottom, and use a sharp modern 3D style.",
  "Create a purple five-step process infographic. On the left, stack five glossy circular platforms descending in size like a tiered staircase, colored pink, violet, blue, cyan, and teal and labeled STEP 1–STEP 5. On the right, align five matching horizontal explanation bands under a 5 STEPS INFOGRAPHIC title.",
  "Create a dark cinematic industrial network infographic over a smoky particle background. Show four translucent neon-green wireframe cubes floating in perspective, each labeled with a sector code and manufacturing topic. Connect the cubes using glowing green lines and polygonal data paths, with scattered white network particles.",
  "Create a white target-alignment infographic. Put a large red-and-white bullseye in the center with four arrows entering from the four diagonal directions in yellow, navy, red, and cyan. Arrange four subtitle blocks near the corners and connect them to the arrows using curved dotted paths and tiny monochrome icons.",
  "Create a white goal timeline where a large red target sits on the right and a long horizontal arrow enters it from the left. Place three circular milestone points along the arrow, each with a vertical leader line to a short infographic description above or below. Use mustard, teal, and navy accents with ample whitespace.",
  "Create a bright white business-idea infographic centered on a glossy yellow 3D lightbulb surrounded by colorful rings, coins, upward arrows, and small bar charts. Put BUSINESS INFOGRAPHIC at upper left and arrange five numbered text sections 01–05 on both sides in purple, cyan, orange, and green.",
  "Create a sophisticated blue business-idea infographic. Put a large cyan circular IDEA lightbulb graphic at center-right, split into analytic quadrants with gears and charts. Place a 75% BUSINESS IDEA callout on the left and a 25% BUSINESS IDEA callout at the upper right, each with sample text and thin data lines over a textured navy background.",
  "Create a black circular-diagram infographic with magenta and violet neon connectors. Place a dark square CIRCULAR DIAGRAM card left of center, then branch five angular glowing lines to small square icon modules on the right for analytics, search, home, target, and people. Add a short heading-and-description beside every icon over subtle cloudy smoke.",
  "Create a white layered percentage infographic using five large overlapping folded ribbons sweeping diagonally upward from bottom right to top center. Color the layers coral, orange, pink, magenta, and purple and label them 50%, 40%, 30%, 20%, and 10%. Place five corresponding text callouts with thin gray leader lines along the left and upper right.",
  "Create a black four-stage infographic over dramatic blue ink clouds. Arrange four floating dark translucent rectangular cards labeled 01–04 in one row, each with a small blue square icon tab for people, settings, play, or ideas. Use cyan outlines, white headings, concise copy, and moody volumetric ink texture.",
  "Create a corporate coaching concept over a bright photograph of a person touching a virtual interface. Place a honeycomb cluster of dark and colored circles at center labeled VISION, STUDY, GOALS, SUCCESS, ADVISER, and MENTOR, with gear icons below. Add a concise vertical bullet list on the right for success, innovation, creativity, strategy, and vision.",
  "Create a modern business problem-solving framework on white. Put a large line-art lightbulb filled with a colorful network diagram at center, then arrange four rounded cards around it labeled DEFINE, EXPLORE, LEARN, and CHOOSE, plus a smaller TEST section below. Use friendly flat illustrations, pale cyan and peach accents, and clean instructional hierarchy.",
  "Create a black target infographic. Put the word TARGETING stacked in bold red, cyan, white, and yellow letters on the left. Center a blue-white-red target on a tripod, pierce it with an arrow, and connect three numbered colored callouts to three short description blocks on the right. Use strong shadows and high contrast.",
  "Create a warm mustard-yellow target infographic. Use the same central tripod target with blue, white, red, and yellow rings, a bold stacked TARGETING title on the left, and three numbered leader-line callouts with descriptions on the right. Add a subtle oval ground shadow and playful flat-vector styling.",
  "Create a clean white target infographic with a black-framed blue-white-red bullseye on a tripod. Place the stacked word TARGETING in red, cyan, black, and yellow on the left, then attach three numbered callout tabs in red, cyan, and black to three right-aligned text blocks. Keep the composition crisp, flat, and spacious.",
];

const businessInfographicElementCounts = [
  "1 large left hexagon; 3 right hexagonal panels; 3 circular icon discs; 3 icons; 3 headings; 3 paragraphs; 3 dashed connectors; 6 endpoint dots.",
  "1 lower semicircular dial; 5 numbered wedges; 5 rim icon discs; 1 center circle; 5 external text blocks.",
  "7 vertical columns; 1 curved growth arrow; 7 DATA labels; 7 bottom icon circles; 1 title block; 1 baseline.",
  "8 rounded cards in a 4-by-2 grid; 8 number badges; 8 headings; 8 paragraphs; 8 dividers; 1 title.",
  "5 ascending bars; 1 curved arrow; 1 top-left 80% panel; 3 left metric circles; 1 right sidebar; 3 sidebar status rows; 1 this-year section.",
  "1 logo placeholder; 1 main headline; 2 subtitle lines; 4 numbered cards; 1 footer line; no other panels.",
  "5 vertical capsules; 5 colored fills; 5 bottom icon discs; 5 icons; 5 labels; 5 percentage values; 1 title.",
  "1 central circle; 6 connector paths; 6 outer circular nodes; 6 icons; 6 text blocks; exactly 3 branches per side.",
  "1 central circle; 6 colored radial wedges; 6 icons; 6 paragraphs; 1 team icon; 1 main title.",
  "1 central circular hub; 1 segmented ring with 10 sections; 10 side cards; 10 icon tabs; 10 connector lines; 10 text blocks.",
  "5 house-shaped bars; 5 numeric values; 5 icons; 5 step numbers; 5 lower captions; 1 curved arrow; 5 annotation leaders.",
  "1 cropped target; 1 embedded arrow; 1 GOALS heading; 1 target symbol; 1 zigzag line with 4 circular points; 1 business-concept block.",
  "1 grouped chart frame; 9 horizontal bars in 3 year groups; 3 year labels; 3 right information panels; 3 icon discs; 1 title.",
  "1 central circle; 2 surrounding rings; 7 radial branches; 7 icon nodes; 7 outer text groups; no additional nodes.",
  "1 central hexagon; 6 surrounding petal panels; 6 outer icon circles; 6 icons; 6 dashed bullet capsules; 6 text blocks.",
  "1 angular line chart; 6 circular data nodes; 4 percentage rings; 5 text blocks; 1 gear callout panel; 1 title panel.",
  "4 connected hexagonal stations; 4 icons; 4 text sections; 1 bar chart; 1 progress group; 1 pie chart; 1 dot matrix.",
  "1 central circle; 2 concentric rings; 6 circular nodes; 6 icons; 6 outer text blocks; exactly 3 nodes per side.",
  "1 large left card; 3 right pill cards; 3 letter badges A–C; 3 dotted connectors; 6 endpoint dots; 3 paragraphs.",
  "1 central circular hub; 1 orbital ring; 6 connector joints; 6 endpoint cards; 6 teardrop icon badges; 6 text groups.",
  "5 upward arrows; 5 numbered base blocks; 5 top labels; 1 title; no chart grid or extra arrows.",
  "1 ecology title; 1 laboratory icon; 1 five-bar chart; 2 circular environmental diagrams; 1 recycle icon; 1 world map; 2 gas bubbles; 1 sun; 3 map data callouts.",
  "1 vertical divider; 1 bar chart with 4 bars; 4 left info panels; 1 Ecology title; 2 rows of 10 rating icons; 1 paragraph; 1 water node; 3 callouts.",
  "1 central circle; 6 icon nodes; 6 rounded description bars; 6 icons; 6 angular connectors; 3 progress bars; 1 line graph; 3 map pins.",
  "6 freestanding 3D bars only; no labels, panels, grid, arrows, or icons.",
  "1 center disc; 3 layered interface rings; 8 side cards; 8 icon badges; 8 icons; 8 connectors; exactly 4 cards per side.",
  "1 central lightbulb; 1 orbital circle; 5 colored nodes; 5 icons; 5 headings; 5 descriptions; no additional nodes.",
  "1 central circle; 5 large fan blades; 5 headings; 5 underlines; 5 paragraphs; 1 thin center ring.",
  "1 donut with 5 separated segments; 5 segment icons; 5 text blocks; exactly 3 text blocks left and 2 right.",
  "6 connected hexagons; 6 icons; 6 heading-and-paragraph blocks; 1 title; circuit lines only at the edges.",
  "5 3D columns; 5 front numbers 01–05; 5 percentage values; 5 leader lines; 1 title block; 1 intro paragraph.",
  "1 central circle; 3 concentric solid rings; 4 diagonal icon nodes; 2 dotted orbital arcs; 4 corner text blocks; 2 option cards; 4 legend icons.",
  "4 translucent chart cards; 8 vertical bars total, 2 per card; 4 descriptions; 4 bottom chart icons; 1 title.",
  "1 central-left circular hub; 1 outer glow ring; 4 curved connectors; 4 right-side text blocks; 1 vertical color split.",
  "3 top icon circles; 3 icons; 3 short captions; 3 right paragraphs; 3 bottom progress bars; 3 percentage labels.",
  "1 target; 1 arrow; 1 TARGET heading; 1 rounded label; 3 annotation blocks; 3 leader lines; no other shapes.",
  "8 rounded-square cards; 8 number badges; 8 headings; 8 dotted dividers; 8 paragraphs; exactly 4 cards per row.",
  "1 central hub; 6 outer cards; 6 icon tabs; 6 icons; 6 curved connectors; exactly 3 cards per side.",
  "1 top header; 3 middle headers; 3 lower text boxes; 6 downward arrows; 7 connector dots; no side branches.",
  "1 main magazine title; 1 company-profile text group; 1 vertical timeline; 3 timeline milestones; 3 statistic callouts; 3 feature columns.",
  "3 circular step cards; 3 top number badges; 3 paragraphs; 1 rectangular connecting outline; no fourth step.",
  "1 double-ring orbit; 4 circular nodes; 4 icons; 4 external text blocks; 1 centered title.",
  "1 lower semicircle; 5 wedges; 5 numbers; 5 icon discs; 5 icons; 5 external text blocks; 1 title.",
  "1 extruded donut; 6 colored segments; 6 icon bullets; 6 descriptions; exactly 3 bullets per side; 1 title.",
  "3 nested rings; 1 outer orange-red ring divided into 4 main sections; 4 large white data circles; 1 central hub; 1 team icon.",
  "1 central hub; 4 colored fan segments; 4 gray circular info panels; 4 step numbers; 4 chart icons; no fifth segment.",
  "1 central circle; 4 metallic petal loops; 4 blue information panels; 4 icons; no additional petals.",
  "1 right circular hub; 1 quartered center disc; 1 anchor icon; 12 small tool nodes; 3 dotted orbit paths; 4 left project sections.",
  "3 horizontal progress rows; 3 colored fills; 3 percentage labels; 3 white capsule icon panels; 3 icons; 3 left text blocks.",
  "1 two-line headline; 1 body paragraph; 2 buttons; 1 blue wave structure occupying the right half; no other UI cards.",
  "1 two-line headline; 1 body paragraph; 2 buttons; 1 full-background wave tunnel; no additional panels.",
  "4 stacked diagonal bars; 4 circular percentage badges; 4 titles; 4 gear icons; 4 right leader lines; 4 step numbers.",
  "1 logo placeholder; 1 main title; 2 subtitle lines; 4 section cards; 1 footer statement; no additional cards.",
  "3 vertical meters; 3 labels A–C; 3 right information cards; 3 letter badges; 3 descriptions; 1 title.",
  "6 stacked 3D discs; 1 laptop icon; 4 leader lines; 4 right text blocks; no extra discs.",
  "1 magazine title; 1 section heading; 2 body text groups; 1 three-point timeline; 3 feature columns; 3 timeline dots.",
  "1 target; 2 arrows; 4 numbered callouts; 4 icons; 4 descriptions; no extra targets.",
  "1 central lightbulb; 4 platform blocks; 1 circular arrow orbit; 4 analytics icons; 4 stage markers 01–04.",
  "1 target; 1 arrow; 1 TARGET headline; 1 copy block; 1 button; 1 top navigation row.",
  "1 center title; 6 blue icon nodes; 6 text blocks; 3 dotted elliptical orbits; 1 architectural tunnel.",
  "1 large arrowhead; 1 three-segment circle; 3 icon groups; 3 icons; 3 text blocks; 1 title.",
  "3 white pill cards; 3 icons; 3 descriptions; 1 title; no fourth card.",
  "4 raised hexagonal tiles; 4 circular icon badges; 4 icons; 4 descriptions; 1 DESIGN heading.",
  "3 tall pill cards; 3 icon circles; 3 icons; 3 headings; 3 paragraphs; 1 title.",
  "3 vertical gauges; 3 percentage labels; 3 trend icons; 3 left paragraphs; 1 title.",
  "6 hexagon cubes in a 1-2-3 pyramid; 6 icons; 6 callouts; 6 leader lines; no seventh cube.",
  "1 extruded pie chart with 5 segments; 5 leader paths; 5 headings; 5 paragraphs; no legend box.",
  "5 top icon badges; 5 icons; 5 captions; 3 bottom progress bars; 3 percentage labels; 1 title.",
  "1 cropped target; 1 zigzag arrow; 1 bottom caption; no text panels, icons, or charts.",
  "5 stacked circular platforms; 5 step labels; 5 right explanation bands; 1 title; no sixth platform.",
  "4 wireframe cubes; 4 sector labels; 1 connecting network; no fifth cube or conventional chart.",
  "1 central target; 4 incoming arrows; 4 corner text blocks; 4 curved dotted paths; 4 small icons.",
  "1 horizontal arrow; 1 target; 3 milestone circles; 3 vertical leader lines; 3 text descriptions.",
  "1 central lightbulb; 5 numbered sections; 5 section headings; 5 paragraphs; 3 chart blocks; multiple decorative coins limited to the central cluster.",
  "1 large circular IDEA graphic; 2 percentage callouts; 2 text blocks; 4 internal analytic quadrants; no extra circles.",
  "1 main square card; 5 small icon modules; 5 icons; 5 neon connector branches; 5 text blocks.",
  "5 overlapping folded ribbons; 5 percentage labels; 5 text callouts; 5 leader lines; no sixth layer.",
  "4 rectangular stage cards; 4 number labels; 4 icon tabs; 4 icons; 4 text blocks; no fifth card.",
  "1 central honeycomb cluster; 6 labeled circles; 2 gear icons; 1 right bullet list with 5 items; no charts.",
  "1 central lightbulb; 4 main cards; 1 smaller TEST section; 5 illustrated icons; no extra framework stages.",
  "1 tripod target; 1 arrow; 1 stacked TARGETING title; 3 numbered callouts; 3 right text blocks.",
  "1 tripod target; 1 arrow; 1 stacked TARGETING title; 3 numbered callouts; 3 right text blocks.",
  "1 tripod target; 1 arrow; 1 stacked TARGETING title; 3 numbered callouts; 3 right text blocks.",
];

const businessCoverTemplates = [
  { id: "cover-stock-01", code: "CoverStock1", titleEn: "CoverStock1", titleTh: "CoverStock1", image: "./assets/cover-stock/CoverStock1.jpg", fileName: "CoverStock1.jpg", prompt: `Wide 3:2 corporate agency banner. Strictly match reference geometry: left white content area, sharp diagonal navy divider, right-side blue/teal geometric field, glass skyscraper photo above and white-bordered diamond business photo overlapping center-right. Three navy diamond service markers across mid-left; two small diamond photos at bottom-left; navy “50% OFF” diamond badge. Palette: white, navy, royal blue, teal. Preserve spacing and proportions.` },
  { id: "cover-stock-02", code: "CoverStock2", titleEn: "CoverStock2", titleTh: "CoverStock2", image: "./assets/cover-stock/CoverStock2.jpg", fileName: "CoverStock2.jpg", prompt: `Wide 16:9 marketing agency banner. Deep royal-blue/navy textured background with subtle diagonal tech lines. Large smiling suited man on left-center; rounded outlined service panel at far left. Right side dominated by tall condensed yellow “MARKETING” and white “AGENCY”, with white script above. Bright yellow angular footer and white register button. Palette strictly blue, yellow, white; preserve the diagonal composition and title scale.` },
  { id: "cover-stock-03", code: "CoverStock3", titleEn: "CoverStock3", titleTh: "CoverStock3", image: "./assets/cover-stock/CoverStock3.jpg", fileName: "CoverStock3.jpg", prompt: `Wide 16:9 webinar banner. Full-bleed office photo under a strong cobalt-blue overlay. Grayscale man in black suit on the left; thin white rounded speech-bubble frame occupies the right-center, with large white title inside. Small white logo/social icons at top; long white pill-shaped contact bar along bottom. Palette: vivid blue, white, grayscale. Keep the clean geometric outline and original balance.` },
  { id: "cover-stock-04", code: "CoverStock4", titleEn: "CoverStock4", titleTh: "CoverStock4", image: "./assets/cover-stock/CoverStock4.jpg", fileName: "CoverStock4.jpg", prompt: `Wide 16:9 bold business-growth banner. White/light-grey angular background crossed by a thick slanted charcoal band. Huge condensed white “GROW” on the dark band; black italic headline below and a bright red strip for “10 MARKETING TIPS”. Smiling man with glasses and checked blazer cutout on the right, thick white edge. Red subscribe badge and blurred red accents. Palette: black, white, grey, red; preserve strong diagonals.` },
  { id: "cover-stock-05", code: "CoverStock5", titleEn: "CoverStock5", titleTh: "CoverStock5", image: "./assets/cover-stock/CoverStock5.jpg", fileName: "CoverStock5.jpg", prompt: `Wide 16:9 webinar banner. Bright yellow upper field with faint monochrome background photo and layered diagonal yellow shapes; large sweeping white curved area across the lower half. Large grayscale male portrait at left; three small circular grayscale speaker portraits with yellow rings near center; event icons/details at right. Palette: yellow, white, black, grayscale. Keep the diagonal split and airy layout.` },
  { id: "cover-stock-06", code: "CoverStock6", titleEn: "CoverStock6", titleTh: "CoverStock6", image: "./assets/cover-stock/CoverStock6.jpg", fileName: "CoverStock6.jpg", prompt: `Wide 16:9 annual business webinar banner. Cobalt-to-royal-blue gradient with oversized low-opacity outlined background lettering. White curved logo corner at top-left; two business portraits on the left over translucent lime-green angled panels. Large white title across top; lime-green date strip with dark-blue label on right; small outlined lime register button at bottom. Palette: blue, lime, white. Preserve angular panels and spacing.` },
  { id: "cover-stock-07", code: "CoverStock7", titleEn: "CoverStock7", titleTh: "CoverStock7", image: "./assets/cover-stock/CoverStock7.jpg", fileName: "CoverStock7.jpg", prompt: `Wide 16:9 seminar poster. Deep navy-to-blue gradient with subtle grain. Exactly five male guest portraits aligned across upper-middle, backed by five narrow vertical blue panels. Centered title: yellow “MARKETING” above oversized white “WEBINAR”. Dark rounded date/time bar at bottom with yellow join button and small yellow corner blocks. Palette: navy, royal blue, yellow, white. Keep symmetry and bold typography.` },
  { id: "cover-stock-08", code: "CoverStock8", titleEn: "CoverStock8", titleTh: "CoverStock8", image: "./assets/cover-stock/CoverStock8.jpg", fileName: "CoverStock8.jpg", prompt: `Wide 16:9 digital marketing webinar banner. Solid vivid yellow background, black abstract shapes, dotted patterns, diagonal stripes and white organic shapes behind the subject. Left side has stacked condensed black headline, thin date box and white register button; right side has a seated woman with laptop. Slim black navigation row at top and compact contact/social icons at bottom. Palette: yellow, black, white, with blue jeans as accent. Preserve split layout.` },
  { id: "cover-stock-09", code: "CoverStock9", titleEn: "CoverStock9", titleTh: "CoverStock9", image: "./assets/cover-stock/CoverStock9.jpg", fileName: "CoverStock9.jpg", prompt: `Wide 16:9 futuristic conference banner. Nearly black navy background with purple/magenta glow, electric-blue highlights, faint HUD circles and dark silhouettes. Woman in coral-pink hoodie with laptop fills the left; right side has neon-blue script title above tall white condensed headline. Red glowing play icons near corners and red subscribe button at lower-right. Palette: black, navy, purple, magenta, electric blue, coral, white. Keep left/right contrast.` },
  { id: "cover-stock-10", code: "CoverStock10", titleEn: "CoverStock10", titleTh: "CoverStock10", image: "./assets/cover-stock/CoverStock10.jpg", fileName: "CoverStock10.jpg", prompt: `Wide 16:9 live webinar banner. Purple city/auditorium background with grid overlay and gradient fading to near-black at bottom. Exactly three presenters grouped on the left; oversized low-opacity “LIVE TALK” behind them. Right side: magenta “LIVE” pill and large white “ONLINE WEBINAR”, small magenta topic strips and white rounded register button. Palette: violet, purple, magenta, white. Preserve the three-person group and dark lower fade.` },
];

const businessCoverPromptDescriptions = [
  `Wide 16:9 exclusive webinar banner. Large Asian female host at center-left, two circular guest portraits along the bottom, bold yellow and white geometry, navy footer, and oversized headline on the right. Palette: yellow, white, navy, and black.`,
  `Wide 16:9 digital marketing agency banner. Place bold white text on the left, curved purple and cyan rings in the center, and modern glass skyscrapers on the right. Use a deep blue corporate palette with crisp geometric overlays.`,
  `Wide 16:9 exclusive webinar cover. Black background with yellow diagonal accents, two male presenters on the right, four circular speaker portraits along the lower left, and white event information cards. Strong condensed typography in yellow and white.`,
  `Wide 16:9 business banner in dark navy and orange. Large bold headline and pill-shaped labels on the left, businessman in an office on the right inside a sharp diagonal orange frame. Clean high-contrast corporate style.`,
  `Wide 16:9 creative marketing agency banner. Purple gradient background with yellow angular shapes, male guest centered left, compact services panel at far left, and huge stacked headline on the right. Modern energetic editorial layout.`,
  `Wide 16:9 business growth banner. Blue-tinted glass building and geometric overlays on the left, service checklist and text block beside it, gray male silhouette on the right, and a compact order button. Palette: cyan, navy, gray, and white.`,
  `Wide 16:9 business landing-page hero. Dark teal background, strong headline on the left, suited Asian businessman on the right inside a diagonal white-outline frame, with lime and teal translucent accents. Add a minimal top navigation.`,
  `Wide 16:9 business webinar banner. Deep blue background, bold yellow and white title on the left, bearded male presenter on the right, and angular yellow shapes along the bottom. Clean modern event layout.`,
  `Wide 16:9 social media marketing banner. Light blue background with bold text on the left, a glass office tower on the right under diagonal navy overlays, and a blue speaker name ribbon near the bottom. Airy corporate styling.`,
  `Wide 16:9 consulting agency banner. Dark navy background with text and buttons on the left, business technology photo on the right inside a large slanted rounded frame, and a bright white diagonal separator. Minimal premium look.`,
  `Wide 16:9 startup marketing banner. White background, bold orange and black typography on the left, city photo on the right, and an oversized orange chevron dividing the layout. Clean geometric composition.`,
  `Wide 16:9 digital marketing course banner. Dark navy background, older woman giving a thumbs-up on the left, neon green loops and play icon, large course title on the right, and a red subscribe button. Energetic YouTube-inspired style.`,
  `Wide 16:9 creative social media agency banner. Vivid blue background, woman on the left inside a vertical yellow panel, and oversized white and yellow headline on the right. Bold minimal commercial design.`,
  `Wide 16:9 CEO event banner. Cyan background with a large male portrait on the left, three circular guest portraits across the lower center, event details on the right, and a faint city backdrop. Use white and navy typography.`,
  `Wide 16:9 YouTube business conference banner. Pale lavender background, large title on the left, camera operator silhouette on the right, and red play-button accents. Spacious modern event design.`,
  `Wide 16:9 online business conference banner. Dark navy background with exactly six vertical portrait columns on the left, bold yellow and white title on the right, and a compact date bar. Structured conference layout.`,
  `Wide 16:9 innovative business banner. Pale blue background with text on the left and several blue-edged hexagonal meeting photos clustered on the right. Use navy, cyan, and white with subtle technology patterns.`,
  `Wide 16:9 live conference banner. Navy background with huge lime title on the left, four circular male speaker portraits below, and a large main speaker on the right over an office photo. Add a bright green information panel.`,
  `Wide 16:9 creative agency banner. Blue geometric background, headline on the left, and a grayscale businessman on the right cut by diagonal shapes with a cyan office image above. Crisp editorial composition.`,
  `Wide 16:9 live talk webinar banner. Orange and white split layout with a grayscale male host on the left, bold title on the upper right, three small speaker portraits below, and a full orange side panel.`,
  `Wide 16:9 marketing business banner. Blue and cyan gradient background, text on the left, and an Asian businesswoman inside a diamond-shaped photo frame on the right. Add thin cyan outlines and minimal accents.`,
  `Wide 16:9 live talk webinar cover. Purple gradient background, oversized male presenter at center-left, topic list at far left, and two smaller speaker portraits on the right. Use bold white type and neon purple accents.`,
  `Wide 16:9 business workshop banner. Teal background with orange accents, title on the left, and a Black businessman inside a white polygon frame on the right. Add a large orange curved panel for depth.`,
  `Wide 16:9 ecommerce training banner. Dark navy background, bold title on the left, and a male guest holding coffee on the right inside a white circular ring. Use orange and yellow highlights.`,
  `Wide 16:9 online business conference banner. Neon purple and blue background, large title on the left, smiling woman with laptop and cup on the right, and floating red play icons. Futuristic digital style.`,
  `Wide 16:9 corporate business banner. Navy background with text and buttons on the left, suited man on the right inside an angled photo frame, and strong orange diagonal accents.`,
  `Wide 16:9 online business banner. Bright blurred office background, rounded red text panel on the left, and a young Asian woman using a laptop on the right. Clean red, white, and gray palette.`,
  `Wide 16:9 business success banner. Dark red and purple background, glowing gold headline on the left, suited man on the right, and a prominent 95% success-rate badge. Premium dramatic lighting.`,
  `Wide 16:9 workshop webinar banner. White and orange design with a blonde presenter on the left inside an orange curve, bold title at top-right, two circular speaker portraits, and a compact topic list.`,
  `Wide 16:9 leadership training banner. Cyan background with a woman inside a yellow rounded rectangle on the left, large white headline on the right, and a red enroll button. Bright minimal commercial style.`,
  `Wide 16:9 creative marketing agency banner. White background, large blue polygon with title on the left, woman with glasses working at a laptop on the right, and a yellow subscribe button.`,
  `Wide 16:9 professional business banner. Deep blue geometric background, three businessmen grouped on the left, a compact service list, and a huge yellow headline on the right. Strong corporate contrast.`,
  `Wide 16:9 online webinar banner. Purple and pink auditorium background with a woman and man centered, large title at bottom-left, and soft city lights behind them. Modern event-poster styling.`,
  `Wide 16:9 webinar masterclass banner. Dark navy background with exactly four grayscale speaker cards on the left, bold title and icons on the right, and a red footer strip.`,
  `Wide 16:9 digital marketing agency banner. Bright blue background with bold title on the left, glass office building on the right, and abstract circles and dot patterns. Clean professional layout.`,
  `Wide 16:9 social media business banner. Pale lavender background, oversized title on the left, woman at a laptop on the right, and floating red play and blue like icons. Soft modern composition.`,
  `Wide 16:9 influencer marketing banner. White and light office setting, large cyan and red headline on the left, and a young woman holding a laptop on the right against a blurred streaming background.`,
  `Wide 16:9 marketing agency banner. Charcoal and blue background with stacked title on the left, woman using a tablet inside a circular frame on the right, and a slim orange accent arc.`,
  `Wide 16:9 creative marketing agency banner. Teal and white layout with headline on the left and a man talking on the phone inside a rounded angled photo frame on the right. Clean geometric style.`,
  `Wide 16:9 creative business solutions banner. Dark city background, suited man centered, huge orange title on the right, orange and yellow rings, and a slim top navigation. High-end dramatic look.`,
  `Wide 16:9 digital marketing webinar banner. White background with purple and orange geometry, giant title on the left, date and register details below, and a bearded man at a laptop inside an angled photo frame on the right.`,
  `Wide 16:9 business conference banner. Navy background with exactly four portrait columns across the upper center, large white title below, and lime name labels and date accents.`,
  `Wide 16:9 influencer marketing banner. Blue overlay background with large title on the left, one yellow script word, and a smiling Asian woman on the right. Use soft diagonal transparency effects.`,
  `Wide 16:9 marketing agency banner. White and light-blue background, bold text on the left, woman at a laptop on the right, and layered blue chevrons dividing the layout.`,
  `Wide 16:9 corporate solutions banner. Teal background with title and supporting text on the left, exactly five businesspeople grouped on the right, and cyan diagonal shapes.`,
  `Wide 16:9 digital marketing webinar banner. White and orange split composition with a large female speaker in the center, title on the left, and event date and registration details on the right.`,
  `Wide 16:9 KPI training banner. Blue-tinted meeting photo on the left, circular female speaker portrait at center-right, and a dark blue wedge on the far right. Use crisp white and cyan typography.`,
  `Wide 16:9 creative social media banner. Vivid blue background with title on the left and an Asian man holding coffee at center-right inside a vertical yellow panel. Bold playful style.`,
  `Wide 16:9 digital marketing bootcamp banner. Bright blue background, title on the left, Asian woman in a red shirt using a laptop on the right, yellow date bar, and red enrollment button.`,
  `Wide 16:9 creative agency banner. Blue background with text on the left, woman using a phone inside a white outlined hexagon on the right, and a slim address bar across the bottom.`,
  `Wide 16:9 creative marketing agency banner. Dark navy and cyan background, text on the left, grayscale city photo inside a large circular frame on the right, and segmented cyan rings.`,
  `Wide 16:9 training session banner. Dark gray and cyan background with exactly four portrait arch cards on the left, large title on the right, and compact registration information below.`,
  `Wide 16:9 annual report business cover. Dark navy diagonal panel on the left, blurred grayscale office image on the right, and layered cyan trapezoids. Minimal corporate typography.`,
  `Wide 16:9 social media marketing webinar. Green gradient background, woman inside a tilted phone frame on the left, bold title and red watch button on the right, with floating emoji and play icons.`,
  `Wide 16:9 marketing solution banner. White and light-blue background, oversized title on the left, woman holding a phone and drink on the right behind diagonal white bands, and a blue call-to-action button.`,
  `Wide 16:9 training session banner. Dark navy background with orange accents, exactly three tilted speaker cards on the left, bold title on the right, and a clean date and registration bar.`,
  `Wide 16:9 online webinar banner. Black city skyline background, male host on the left with a glowing social-media icon, huge white title on the right, and a red register button.`,
  `Wide 16:9 marketing growth banner. White background with orange and charcoal arcs, large title on the left, man speaking inside a circular photo on the right, and a small 50% discount badge.`,
  `Wide 16:9 digital marketing agency banner. White background with bold black and red text on the left, meeting photo on the right, and oversized red chevrons dividing the layout.`,
  `Wide 16:9 technology banner background. Black-to-navy field with flowing luminous blue ribbed waves on the left and lower edge, bold white title and two rounded buttons on the left.`,
  `Wide 16:9 digital marketing agency banner. White textured background, cyan rounded text panel on the left, and a gray woman-with-laptop silhouette on the right. Soft paper and halftone details.`,
  `Wide 16:9 digital marketing agency cover. Rich orange city background, giant black title at the top, man with a laptop emerging from a smartphone at center, and floating social icons.`,
  `Wide 16:9 corporate digital marketing cover. Skyscraper photo on the left under diagonal blue overlays, title and business icons on the right, and a blue speaker name ribbon along the bottom.`,
  `Wide 16:9 digital marketing bootcamp banner. Bright blue background, suited Asian man on the left over a large yellow organic shape, and title, class date, funding note, and enrollment button on the right.`,
  `Wide 16:9 business impact landing page. White background with bold blue and black title on the left, grayscale man reading inside an angular photo frame on the right, blue and black chevrons, and minimal top navigation.`,
  `Wide 16:9 UI/UX workshop banner. White background with navy and orange stripes, oversized title on the left, and a male presenter inside a layered circular frame on the right.`,
  `Wide 16:9 business growth banner. Cyan background with large white and yellow headline on the left, suited man checking his phone inside circular rings on the right, and minimal geometric accents.`,
  `Wide 16:9 UI/UX workshop banner. Dark navy background, bold white title on the left, female presenter silhouette on the right, and layered cyan, yellow, and white diagonal bars.`,
  `Wide 16:9 digital marketing expert banner. Bright blue and white composition with large title on the left, grayscale older businessman on the right, and intersecting translucent diagonal shapes.`,
  `Wide 16:9 digital marketing agency banner. White background with exactly three men meeting on the left, large black and cyan title on the right, and a giant cyan chevron through the center.`,
  `Wide 16:9 business solutions banner. White background with orange and charcoal curves, headline on the left, woman with a phone inside a white circular frame on the right, and a 50% discount badge.`,
  `Wide 16:9 marketing business banner. White and orange geometric background, large title on the left, woman using a phone beside a laptop inside a circular frame on the right, and a 50% badge.`,
  `Wide 16:9 business webinar banner. Bright white background with exactly four grayscale male portraits in vertical panels across the upper half, lime title centered below, and a yellow-black geometric base.`,
  `Wide 16:9 creative marketing agency banner. Cyan background, stacked white headline on the left, Asian woman holding a laptop inside a large yellow organic shape on the right, and rounded yellow accents.`,
  `Wide 16:9 creative marketing agency banner. Deep navy background, yellow and white text on the left, grayscale building inside a circular image on the right, and thin yellow orbital rings.`,
  `Wide 16:9 marketing agency banner. White background with large blue and black title on the left, grayscale man talking on a phone on the right, and bold blue diagonal ribbons.`,
  `Wide 16:9 content marketing class banner. Split black and yellow background, strong white and yellow text on the left, and an excited Asian woman holding a laptop while seated on the right.`,
  `Wide 16:9 creative digital marketing agency banner. Strong red border, seated man on the left, dark services card in the center, and title and contact information on the right over a white geometric background.`,
  `Wide 16:9 business conference banner. Dark royal-blue background with exactly three speaker silhouettes in the center, one foreground and two behind, white hexagon backplates, and a yellow center accent.`,
  `Wide 16:9 digital marketing expert template. Blue and white curved layout with large title on the left, contact details below, logo at top-right, and an oversized empty circular portrait frame on the right.`,
  `Wide 16:9 digital marketing agency banner. Dark red background, male presenter centered holding a tablet, large title on the left, service list and contact details on the right, and subtle angular overlays.`,
  `Wide 16:9 creative marketing agency banner. Indigo background with white and periwinkle headline on the left, grayscale building inside a circular image on the right, and multiple concentric arcs.`,
  `Wide 16:9 business webinar banner. White background with exactly three speaker silhouettes along the lower center, bold yellow and black title at the top, geometric yellow-black base, and a rounded register button.`,
  `Wide 16:9 technology background. Dark navy-to-blue gradient with fine flowing curved lines and a bright cyan light wave along the lower left. Add only a small minimal technology title near the left center.`,
  `Wide 16:9 corporate business banner. White background with hands using a laptop photo in an upper-left diagonal frame, business title and centered text on the right, and soft lavender geometric corners.`,
  `Wide 16:9 digital marketing expert banner. Blue and gray split composition with large white and black title on the left, a gray portrait placeholder on the right, and overlapping translucent diagonal ribbons.`
];

businessCoverTemplates.push(
  ...businessCoverPromptDescriptions.map((prompt, index) => {
    const number = index + 11;
    return {
      id: `cover-stock-${String(number).padStart(2, "0")}`,
      code: `CoverStock${number}`,
      titleEn: `CoverStock${number}`,
      titleTh: `CoverStock${number}`,
      image: `./assets/cover-stock/CoverStock${number}.jpg`,
      fileName: `CoverStock${number}.jpg`,
      prompt
    };
  })
);

const businessInfographicTemplates = Array.from({ length: 83 }, (_, index) => {
  const number = index + 1;
  const paddedNumber = String(number).padStart(2, "0");
  const direction = businessInfographicPromptDirections[index];
  const elementCount = businessInfographicElementCounts[index];
  return {
    id: `business-infographic-${paddedNumber}`,
    code: `business info${number}`,
    titleEn: `business info${number}`,
    titleTh: `business info${number}`,
    image: `./assets/business-infographic/business-info-${paddedNumber}.jpg`,
    fileName: `business-info-${paddedNumber}.jpg`,
    prompt: businessInfographicPromptOverrides[number] ?? `TITLE
business info${number}

REFERENCE ANALYSIS
Reconstruct the reference image faithfully. Identify and preserve its dominant geometry, exact color relationships, material treatment, typography hierarchy, shadow depth, and information density. Do not reinterpret the concept.

LAYOUT & POSITION
${direction}

ELEMENT COUNT
${elementCount}
The count is mandatory. Do not add, remove, merge, split, or duplicate any listed element.

VISUAL STYLE
Match the reference image's aspect ratio and exact palette described above. Preserve its vector or photo-composite treatment, gradients, highlights, shadows, background texture, border weight, corner radius, and depth. Use crisp high-resolution presentation graphics.

TEXT & ICONS
Use only the headings, numbers, labels, paragraphs, and icon types explicitly specified above. Keep the same reading order, relative font sizes, capitalization, weight, and alignment. Use clean readable sans-serif typography. Do not invent extra labels or icons.

CONNECTION & ALIGNMENT
Keep every connector, leader line, arrow, orbit, dotted line, node, and endpoint in the stated direction and relationship. Maintain the source image's symmetry, margins, spacing, stacking order, and center alignment.

STRICT RESTRICTIONS
No additional shapes, panels, charts, icons, people, photographs, logos, decorative objects, or text beyond the specification. Do not change the number of sections. No watermark, illegible text, misspellings, distorted geometry, duplicated elements, cropped content, or visual clutter.

REFERENCE FIDELITY
Prioritize structural similarity to the reference over creativity. Do not redesign, modernize, simplify, expand, or rearrange the layout. Preserve the exact composition and visual hierarchy.

FINAL VALIDATION
Before rendering, verify the mandatory element count, left/right/top/bottom positions, colors, text order, icon order, connector directions, spacing, and restrictions. Render only after every item matches this specification.`,
  };
});

const businessPresentationTemplates = [
  {
    id: "business-presentation-test-01",
    code: "TPL-001",
    titleEn: "Minimal High-Tech Meeting Room",
    titleTh: "ห้องประชุมไฮเทคมินิมอล",
    image: "./business-presentation-01.jpg",
    prompt: templatePromptBase,
  },
  {
    id: "business-presentation-test-02",
    code: "TPL-002",
    titleEn: "Corporate Meeting Room",
    titleTh: "ห้องประชุมองค์กร",
    image: "./business-presentation-02.jpg",
    prompt: templatePromptBase,
  },
  {
    id: "business-presentation-test-03",
    code: "TPL-003",
    titleEn: "Dark High-Tech Meeting Room",
    titleTh: "ห้องประชุมไฮเทคโทนเข้ม",
    image: "./business-presentation-03.jpg",
    prompt: templatePromptBase,
  },
  {
    id: "business-presentation-test-04",
    code: "TPL-004",
    titleEn: "High-Tech Corporate Briefing",
    titleTh: "บรีฟองค์กรไฮเทค",
    image: "./business-presentation-04.jpg",
    prompt: templatePromptBase,
  },
  {
    id: "business-presentation-test-05",
    code: "TPL-005",
    titleEn: "Tech Growth ESG Cover",
    titleTh: "ปก Tech Growth ESG",
    image: "./business-presentation-05.jpg",
    prompt: templatePromptBase,
  },
  {
    id: "business-presentation-test-06",
    code: "TPL-006",
    titleEn: "Executive Copy Space",
    titleTh: "ผู้บริหารพร้อมพื้นที่ข้อความ",
    image: "./business-presentation-06.jpg",
    prompt: `Create a 16:9 corporate presentation slide background featuring a cropped Asian businessman in a dark suit standing with crossed arms on the left side, with a softly blurred modern office interior extending across the frame.
Keep the right 55% as clean copy space for headline and body text, with no important objects or faces in that area. Use shallow depth of field, bright window light, subtle lens glow, and a polished professional atmosphere.
Style: realistic corporate stock photo, premium business presentation cover, calm confident mood, cool gray-blue office tones with warm highlights, high-quality raster image.
Avoid: readable text, logos, watermarks, busy patterns, direct full-face portrait, harsh contrast, cartoon style, clutter in the copy space.`,
  },
  {
    id: "business-presentation-test-07",
    code: "TPL-007",
    titleEn: "Partnership Handshake",
    titleTh: "จับมือพาร์ตเนอร์ธุรกิจ",
    image: "./business-presentation-07.jpg",
    prompt: `Create a 16:9 business partnership presentation background showing two professionals shaking hands in a bright office, with a subtle double-exposure city skyline and soft corporate light leaks.
Place the handshake as the main focal point slightly left of center, while leaving soft negative space around the upper-right and lower-right areas for presentation text. The scene should feel trustworthy, collaborative, and suitable for partnership or agreement topics.
Style: premium corporate photography, airy modern office, soft pastel blue and magenta highlights, realistic depth of field, elegant business mood.
Avoid: logos, readable text, watermarks, crowded meeting room, exaggerated effects, distorted hands, overly saturated colors.`,
  },
  {
    id: "business-presentation-test-08",
    code: "TPL-008",
    titleEn: "Confident Executive Portrait",
    titleTh: "พอร์ตเทรตผู้บริหารมั่นใจ",
    image: "./business-presentation-08.jpg",
    prompt: `Create a 16:9 corporate slide background with a cropped executive in a black suit and tie standing confidently with crossed arms on the right side against a clean blue-gray studio background.
Reserve the left 55% as uncluttered negative space for a title, subtitle, and key message. Keep the executive cropped below the nose to avoid a full face while preserving a professional leadership tone.
Style: clean executive portrait, premium corporate presentation, minimal studio lighting, cool neutral palette, crisp suit detail, high-quality realistic photo.
Avoid: logos, text, watermarks, full facial portrait, busy office background, harsh shadows, cartoon or illustration style.`,
  },
  {
    id: "business-presentation-test-09",
    code: "TPL-009",
    titleEn: "Mobile Business Brief",
    titleTh: "บรีฟธุรกิจบนมือถือ",
    image: "./business-presentation-09.jpg",
    prompt: `Create a 16:9 corporate presentation background showing a cropped businessman in a dark suit holding a smartphone on the right side, with a softly blurred modern office lobby in cool blue tones.
Leave the left 60% mostly empty and softly lit for slide title and content. The composition should communicate mobile business, executive updates, digital workflow, and professional decision-making.
Style: realistic corporate photography, clean glass office, cool blue daylight, shallow depth of field, premium calm tone.
Avoid: readable phone screen content, logos, watermarks, full face, clutter, strong reflections, neon sci-fi elements.`,
  },
  {
    id: "business-presentation-test-10",
    code: "TPL-010",
    titleEn: "Growth Chart Touch",
    titleTh: "แตะกราฟการเติบโต",
    image: "./business-presentation-10.jpg",
    prompt: `Create a 16:9 business growth presentation background featuring a close-up of a businessperson touching a glowing upward line graph, with translucent blue arrows rising across the foreground.
Keep the composition dynamic but clean, with room for text in the upper-left or lower-left area. The visual should suggest positive performance, KPI growth, market momentum, and strategic progress.
Style: realistic corporate technology photo composite, cool blue financial palette, soft glow, polished executive presentation look.
Avoid: readable numbers, logos, watermarks, overly busy charts, harsh neon, distorted finger anatomy, cartoon style.`,
  },
  {
    id: "business-presentation-test-11",
    code: "TPL-011",
    titleEn: "Future Growth Strategy",
    titleTh: "กลยุทธ์การเติบโตในอนาคต",
    image: "./business-presentation-11.jpg",
    prompt: `Create a 16:9 corporate strategy slide background with a blurred business executive touching a bright upward arrow, surrounded by semi-transparent growth arrows across a deep blue gradient.
Place the brightest focal arrow on the right side and keep the left side darker and calmer for title text. The mood should communicate ambition, business expansion, target achievement, and future growth.
Style: premium business technology composite, cinematic blue lighting, soft bokeh, realistic suit detail, modern presentation background.
Avoid: readable text, logos, watermarks, cluttered data, exaggerated holograms, heavy contrast, cartoon visuals.`,
  },
  {
    id: "business-presentation-test-12",
    code: "TPL-012",
    titleEn: "Digital Workflow Loading",
    titleTh: "เวิร์กโฟลว์ดิจิทัล",
    image: "./business-presentation-12.jpg",
    prompt: `Create a 16:9 digital transformation presentation background showing a cropped businessman holding a smartphone, with translucent interface overlays, network graphics, people icons, and soft progress-style visual elements.
Keep the design clean enough for slide text, with a light open area on the right and upper center. The concept should feel like digital workflow, innovation, mobile operations, and connected business systems.
Style: realistic corporate photo composite, blue and warm gold highlights, glassmorphism overlays, polished modern enterprise look.
Avoid: readable placeholder text, brand logos, watermarks, cluttered UI, excessive sci-fi effects, distorted phone or hands.`,
  },
  {
    id: "business-presentation-test-13",
    code: "TPL-013",
    titleEn: "Urban Business Technology",
    titleTh: "ธุรกิจเทคโนโลยีเมือง",
    image: "./business-presentation-13.jpg",
    prompt: `Create a 16:9 corporate presentation background featuring a suited businessperson holding an open laptop, blended with a modern city skyline and glass high-rise buildings through a clean double-exposure effect.
Keep the center and upper-right bright and airy, suitable for title overlays, while preserving a premium urban business atmosphere. The concept should communicate enterprise technology, investment, smart city, and executive planning.
Style: realistic double-exposure corporate photography, cool blue city palette, bright daylight, polished and aspirational.
Avoid: logos, readable text, watermarks, crowded streets, full face detail, dark heavy contrast, cartoon or vector style.`,
  },
  {
    id: "business-presentation-test-14",
    code: "TPL-014",
    titleEn: "Interactive Business Panel",
    titleTh: "แผงข้อมูลธุรกิจแบบอินเทอร์แอคทีฟ",
    image: "./business-presentation-14.jpg",
    prompt: `Create a 16:9 business presentation background with a cropped businesswoman on the right touching a transparent horizontal interface panel, against a soft blue city blur.
Reserve the left 60% as clean layered blue copy space for slide text. The composition should feel modern, interactive, strategic, and suitable for digital service or management topics.
Style: realistic corporate photo composite, translucent glass UI bands, soft blue gradient, minimal clean business aesthetic.
Avoid: readable text, logos, watermarks, cluttered dashboards, full face, overly bright highlights, cartoon style.`,
  },
  {
    id: "business-presentation-test-15",
    code: "TPL-015",
    titleEn: "Digital Marketing Growth",
    titleTh: "การตลาดดิจิทัลและการเติบโต",
    image: "./business-presentation-15.jpg",
    prompt: `Create a 16:9 digital marketing and business growth presentation background showing a cropped executive touching a glowing digital button, with network lines, bar charts, and upward arrows in a blue technology environment.
Keep the right side and upper areas clean enough for slide text, while the touch point remains the main visual anchor. The scene should communicate online commerce, promotion, analytics, and scalable digital services.
Style: premium corporate technology photo composite, clean blue palette, subtle glow, modern enterprise presentation look.
Avoid: readable labels, logos, watermarks, cluttered icons, extreme neon, distorted hands, cartoon illustration.`,
  },
  {
    id: "business-presentation-test-16",
    code: "TPL-016",
    titleEn: "ESG Governance Concept",
    titleTh: "แนวคิด ESG และธรรมาภิบาล",
    image: "./business-presentation-16.jpg",
    prompt: `Create a 16:9 ESG presentation background with large clean ESG lettering and connected icons representing environment, social responsibility, and governance on a dark navy background.
Use glowing cyan-to-blue linework, balanced spacing, and a centered professional infographic composition suitable for sustainability reports, board decks, and corporate governance slides.
Style: modern vector-style business graphic rendered as a high-quality raster image, crisp icons, dark premium palette, clean corporate technology feel.
Avoid: extra text beyond ESG, logos, watermarks, clutter, complex charts, low contrast, childish icon style.`,
  },
  {
    id: "business-presentation-test-17",
    code: "TPL-017",
    titleEn: "Investment Management",
    titleTh: "การบริหารกองทุนและการลงทุน",
    image: "./business-presentation-17.jpg",
    prompt: `Create a 16:9 investment management presentation background featuring a suited businessperson holding a laptop, blended with a pale city skyline and faint financial chart overlays.
Keep the right half soft, bright, and low-detail for title and body copy. The image should communicate fund management, market analysis, portfolio review, and financial strategy.
Style: realistic corporate double exposure, light blue financial palette, premium soft daylight, clean executive presentation tone.
Avoid: readable numbers, logos, watermarks, sharp busy charts, full face, heavy dark contrast, exaggerated holograms.`,
  },
  {
    id: "business-presentation-test-18",
    code: "TPL-018",
    titleEn: "Financial Indicator Touch",
    titleTh: "แตะตัวชี้วัดการเงิน",
    image: "./business-presentation-18.jpg",
    prompt: `Create a 16:9 financial analysis presentation background showing a close-up of a businessperson touching a glowing upward curve, with subtle bar charts in the lower area and a calm teal-blue background.
Leave the left side spacious and clean for slide text, while the glowing fingertip and rising curve communicate performance improvement, accounting indicators, and market analysis.
Style: realistic corporate finance photo composite, refined blue and teal tones, soft glow, premium professional look.
Avoid: readable numbers, logos, watermarks, crowded graphs, distorted hand anatomy, harsh neon, cartoon effects.`,
  },
  {
    id: "business-presentation-test-19",
    code: "TPL-019",
    titleEn: "Business Solution Interface",
    titleTh: "อินเทอร์เฟซ Business Solution",
    image: "./business-presentation-19.jpg",
    prompt: `Create a 16:9 corporate business solution slide background with a cropped executive pressing a transparent blue interface panel across the center.
Use layered translucent horizontal bands, a clean blue gradient, and a professional enterprise atmosphere. Keep the design suitable for solution overview, consulting, HR systems, or digital transformation presentations.
Style: realistic business photo composite, glass UI panel, clean corporate blue palette, polished presentation cover.
Avoid: excessive text, logos, watermarks, cluttered dashboard elements, full face, harsh contrast, cartoon style.`,
  },
  {
    id: "business-presentation-test-20",
    code: "TPL-020",
    titleEn: "Executive Agreement",
    titleTh: "ข้อตกลงผู้บริหาร",
    image: "./business-presentation-20.jpg",
    prompt: `Create a 16:9 executive agreement presentation background showing two businesspeople shaking hands near a large office window, with warm sunset light and a softly blurred city view.
Keep the upper-left and center-left areas calm enough for presentation text. The image should communicate trust, successful negotiation, partnership, and executive-level collaboration.
Style: realistic corporate photography, warm golden backlight, refined office atmosphere, soft depth of field, premium professional mood.
Avoid: logos, readable text, watermarks, full faces, crowded room, overly dramatic flare, cartoon style.`,
  },
  {
    id: "business-presentation-test-21",
    code: "TPL-021",
    titleEn: "Target Achievement",
    titleTh: "เป้าหมายและความสำเร็จ",
    image: "./business-presentation-21.jpg",
    prompt: `Create a 16:9 business target achievement presentation background showing a cropped executive touching a glowing target icon, with translucent upward arrows rising across a clean blue background.
Keep the left side and lower-left area open for title and supporting text. The concept should suggest clear goals, measurable growth, KPI success, and strategic focus.
Style: modern corporate technology photo composite, bright blue palette, clean glow, polished enterprise presentation design.
Avoid: readable labels, logos, watermarks, cluttered charts, distorted finger, excessive neon, cartoon look.`,
  },
  {
    id: "business-presentation-test-22",
    code: "TPL-022",
    titleEn: "Modern Office Handshake",
    titleTh: "จับมือในออฟฟิศโมเดิร์น",
    image: "./business-presentation-22.jpg",
    prompt: `Create a 16:9 modern office handshake presentation background with two professionals in suits shaking hands in close-up, warm daylight entering from the side, and a softly blurred office interior behind them.
Keep the upper-left and lower-left areas softly lit and usable for headline text. The mood should be optimistic, professional, and suitable for partnership, sales closing, client success, and business agreement slides.
Style: realistic premium corporate photography, warm natural light, shallow depth of field, refined business atmosphere.
Avoid: logos, watermarks, readable text, crowded background, awkward hands, harsh contrast, cartoon or illustration style.`,
  },
];

const wallpaperTemplates = [
  {
    id: "wallpaper-tech-01",
    code: "WAL-001",
    titleEn: "Cyan Hex Glow",
    titleTh: "หกเหลี่ยมไซแอนเรืองแสง",
    image: "./wallpaper-tech-01.jpg",
    fileName: "wallpaper-tech-01.jpg",
    prompt: `Create a 16:9 futuristic technology wallpaper with large glowing cyan hexagonal glass panels arranged in a honeycomb pattern. Use beveled dark edges, soft internal light, subtle depth, and a clean premium blue atmosphere. The composition should feel modern, abstract, and suitable for a digital platform hero background. Avoid text, logos, watermarks, people, icons, and clutter.`,
  },
  {
    id: "wallpaper-tech-02",
    code: "WAL-002",
    titleEn: "Blue Modular Grid",
    titleTh: "กริดโมดูลาร์สีน้ำเงิน",
    image: "./wallpaper-tech-02.jpg",
    fileName: "wallpaper-tech-02.jpg",
    prompt: `Create a 16:9 abstract blue 3D wallpaper showing a modular grid of raised rectangular panels viewed from a low diagonal angle. Use saturated blue material, cyan rim highlights, soft shadows inside the grooves, and a clean geometric rhythm. Keep the scene minimal, polished, and futuristic. Avoid text, logos, watermarks, people, icons, and noisy details.`,
  },
  {
    id: "wallpaper-tech-03",
    code: "WAL-003",
    titleEn: "Perspective Blue Ribs",
    titleTh: "เส้นนูนมุมมองสีน้ำเงิน",
    image: "./wallpaper-tech-03.jpg",
    fileName: "wallpaper-tech-03.jpg",
    prompt: `Create a 16:9 blue architectural abstract wallpaper with long raised parallel ribs receding toward a bright horizon. Use strong perspective, clean cyan edge highlights, smooth matte surfaces, and a calm gradient sky-like background. The image should feel precise, modern, and spacious for desktop or presentation use. Avoid text, logos, watermarks, people, and clutter.`,
  },
  {
    id: "wallpaper-tech-04",
    code: "WAL-004",
    titleEn: "Low Poly Tech Surface",
    titleTh: "พื้นผิวโลว์โพลีเทค",
    image: "./wallpaper-tech-04.jpg",
    fileName: "wallpaper-tech-04.jpg",
    prompt: `Create a 16:9 futuristic low-poly blue surface wallpaper made of angular triangular glass facets. Use metallic dark-blue geometry, cyan glowing edges, shallow depth of field, and dramatic but clean lighting across the polygon peaks. The mood should be high-tech, premium, and abstract. Avoid text, logos, watermarks, people, icons, and busy overlays.`,
  },
  {
    id: "wallpaper-tech-05",
    code: "WAL-005",
    titleEn: "Triangular Blue Mesh",
    titleTh: "เมชสามเหลี่ยมสีน้ำเงิน",
    image: "./wallpaper-tech-05.jpg",
    fileName: "wallpaper-tech-05.jpg",
    prompt: `Create a 16:9 close-up blue low-poly mesh wallpaper with triangular raised outlines across a smooth surface. Use bright cyan ridges, soft blue depth blur, subtle shadows in the seams, and a polished abstract technology look. Keep the design clean and suitable as a corporate digital background. Avoid text, logos, watermarks, people, and clutter.`,
  },
  {
    id: "wallpaper-tech-06",
    code: "WAL-006",
    titleEn: "Honeycomb Light Panels",
    titleTh: "แผงรังผึ้งเรืองแสง",
    image: "./wallpaper-tech-06.jpg",
    fileName: "wallpaper-tech-06.jpg",
    prompt: `Create a 16:9 futuristic honeycomb wallpaper with layered blue hexagonal panels, beveled borders, and bright cyan light rays. Use a dark-to-light gradient from left to right, glossy 3D depth, and premium digital interface energy. Keep the image abstract and clean for hero backgrounds. Avoid text, logos, watermarks, people, and unnecessary interface icons.`,
  },
  {
    id: "wallpaper-tech-07",
    code: "WAL-007",
    titleEn: "Neon Circuit Corridor",
    titleTh: "โถงวงจรนีออน",
    image: "./wallpaper-tech-07.jpg",
    fileName: "wallpaper-tech-07.jpg",
    prompt: `Create a 16:9 dark futuristic technology corridor wallpaper with black metallic circuit panels and electric blue neon lines converging toward the center. Use glossy surfaces, thin cyan light strips, subtle orange accents, and a cinematic depth perspective. Keep the center clean and powerful. Avoid text, logos, watermarks, people, and cluttered symbols.`,
  },
  {
    id: "wallpaper-tech-08",
    code: "WAL-008",
    titleEn: "Dark Hex Copy Space",
    titleTh: "พื้นที่ว่างหกเหลี่ยมมืด",
    image: "./wallpaper-tech-08.jpg",
    fileName: "wallpaper-tech-08.jpg",
    prompt: `Create a 16:9 dark minimal technology wallpaper with matte black hexagonal tiles placed mostly on the right side and large clean empty space on the left. Add cyan glowing outlines on selected hexagons, soft white corner nodes, and subtle blue rim light. The image should feel premium and spacious for adding text later. Avoid text, logos, watermarks, people, and clutter.`,
  },
  {
    id: "wallpaper-tech-09",
    code: "WAL-009",
    titleEn: "Glowing Hex Nodes",
    titleTh: "โหนดหกเหลี่ยมเรืองแสง",
    image: "./wallpaper-tech-09.jpg",
    fileName: "wallpaper-tech-09.jpg",
    prompt: `Create a 16:9 black futuristic honeycomb wallpaper with raised matte hexagonal tiles and several selected hexagons outlined by cyan glowing circuit lines. Use soft blue halo lighting, subtle depth, and an organized scattered pattern across the frame. Keep it premium, abstract, and suitable for technology branding. Avoid text, logos, watermarks, people, and busy UI elements.`,
  },
  {
    id: "wallpaper-tech-10",
    code: "WAL-010",
    titleEn: "Cinematic Mountain Mission",
    titleTh: "ภารกิจภูเขาแบบภาพยนตร์",
    image: "./wallpaper-tech-10.jpg",
    fileName: "wallpaper-tech-10.jpg",
    prompt: `Create a 16:9 cinematic action wallpaper showing a small squad of tactical explorers running uphill on a rocky mountain path at sunset, with a vast valley, river, distant futuristic city, flags, dust, and dramatic golden clouds behind them. Use dynamic motion, realistic lighting, epic scale, and detailed terrain. Avoid text, logos, watermarks, gore, weapons pointed at camera, and distorted faces.`,
  },
  {
    id: "wallpaper-tech-11",
    code: "WAL-011",
    titleEn: "Cyber Frame Copy Space",
    titleTh: "เฟรมไซเบอร์พื้นที่ว่าง",
    image: "./wallpaper-tech-11.jpg",
    fileName: "wallpaper-tech-11.jpg",
    prompt: `Create a 16:9 dark cyber technology wallpaper with metallic diagonal frames and circuit-board patterns around the edges, leaving a large clean dark center for copy space. Use cyan glowing strips, thin technical linework, glossy black panels, and subtle blue haze. The result should feel sleek and enterprise-grade. Avoid text, logos, watermarks, people, and clutter in the center.`,
  },
  {
    id: "wallpaper-tech-12",
    code: "WAL-012",
    titleEn: "Circuit Beam Interface",
    titleTh: "อินเทอร์เฟซลำแสงวงจร",
    image: "./wallpaper-tech-12.jpg",
    fileName: "wallpaper-tech-12.jpg",
    prompt: `Create a 16:9 futuristic circuit interface wallpaper with a dark graphite background, detailed blue circuit traces on the right, a sleek horizontal cyan light beam crossing the frame, and subtle high-tech panel details. Keep the upper-left area calm and open. Use polished sci-fi realism without readable UI. Avoid text, logos, watermarks, people, and clutter.`,
  },
  {
    id: "wallpaper-tech-13",
    code: "WAL-013",
    titleEn: "Blue Network Hex Panel",
    titleTh: "แผงเครือข่ายหกเหลี่ยม",
    image: "./wallpaper-tech-13.jpg",
    fileName: "wallpaper-tech-13.jpg",
    prompt: `Create a 16:9 blue technology network wallpaper with translucent hexagon panels, connected node lines, dotted textures, and a soft purple-to-cyan gradient. Place a large outlined hexagon on the right and flowing circuit paths on the left. The composition should be clean, airy, and suitable for corporate innovation themes. Avoid text, logos, watermarks, people, and crowded symbols.`,
  },
  {
    id: "wallpaper-tech-14",
    code: "WAL-014",
    titleEn: "Purple Hex Panel",
    titleTh: "แผงหกเหลี่ยมม่วง",
    image: "./wallpaper-tech-14.jpg",
    fileName: "wallpaper-tech-14.jpg",
    prompt: `Create a 16:9 premium abstract wallpaper with deep purple hexagonal panels, beveled dark outlines, thin cyan light strips, and subtle warm rim highlights. Use a close-up diagonal composition with layered hexagon shapes and fine surface texture. The mood should be modern, elegant, and high-tech. Avoid text, logos, watermarks, people, and clutter.`,
  },
  {
    id: "wallpaper-tech-15",
    code: "WAL-015",
    titleEn: "Indigo Hex Grid",
    titleTh: "กริดหกเหลี่ยมอินดิโก",
    image: "./wallpaper-tech-15.jpg",
    fileName: "wallpaper-tech-15.jpg",
    prompt: `Create a 16:9 dark indigo technology wallpaper with a semi-transparent hexagonal grid drifting across the left side and open negative space on the right. Add layered line patterns, subtle depth, and muted blue-violet highlights for a clean digital background. Keep the style restrained and professional. Avoid text, logos, watermarks, people, and overly bright neon.`,
  },
  {
    id: "wallpaper-tech-16",
    code: "WAL-016",
    titleEn: "Luminous Hex Tunnel",
    titleTh: "อุโมงค์หกเหลี่ยมเรืองแสง",
    image: "./wallpaper-tech-16.jpg",
    fileName: "wallpaper-tech-16.jpg",
    prompt: `Create a 16:9 futuristic blue honeycomb tunnel wallpaper with layered hexagonal panels curving into depth. Use glowing white and cyan edge lights, glossy blue material, subtle magenta accents, and a strong diagonal perspective. The scene should feel immersive, premium, and technological. Avoid text, logos, watermarks, people, and noisy overlays.`,
  },
  {
    id: "wallpaper-tech-17",
    code: "WAL-017",
    titleEn: "Bright Cyan Honeycomb",
    titleTh: "รังผึ้งไซแอนสว่าง",
    image: "./wallpaper-tech-17.jpg",
    fileName: "wallpaper-tech-17.jpg",
    prompt: `Create a 16:9 bright cyan honeycomb wallpaper with raised hexagonal tiles separated by glowing white channels. Use clean 3D depth, soft shadows, crisp beveled edges, and a polished modern technology style. Keep the image energetic but minimal for a digital product background. Avoid text, logos, watermarks, people, and extra icons.`,
  },
  {
    id: "wallpaper-tech-18",
    code: "WAL-018",
    titleEn: "Purple Cyan Circuit Flow",
    titleTh: "วงจรม่วงไซแอนไหล",
    image: "./wallpaper-tech-18.jpg",
    fileName: "wallpaper-tech-18.jpg",
    prompt: `Create a 16:9 futuristic circuit wallpaper with dark graphite panels, cyan circuit lines flowing horizontally, and a soft purple glow on the left edge. Keep the right side smooth and atmospheric with gentle blue haze, thin technical traces, and a premium digital interface mood. Avoid text, logos, watermarks, people, and clutter.`,
  },
];

const madeWithUsTemplates = [
  {
    id: "made-with-us-01",
    code: "MWU-001",
    titleEn: "Marine Life Museum",
    titleTh: "พิพิธภัณฑ์ชีวิตใต้ทะเล",
    image: "./made-with-us-01.jpg",
    fileName: "made-with-us-01.jpg",
    prompt: `Create a 16:9 cinematic museum exhibition poster showing an elegant marine life gallery with a giant aquarium wall, blue underwater light, whales, rays, sharks, turtles, tropical fish, coral displays, polished glass cases, and classical dark architecture. Add refined premium typography in the center: "AESTHETIC" and a small subtitle "The Museum of Marine Life". Mood: majestic, educational, immersive, luxury museum design, detailed lighting, realistic fantasy. Avoid messy layout, low resolution, distorted animals, extra unreadable text, logos, and watermark.`,
  },
  {
    id: "made-with-us-02",
    code: "MWU-002",
    titleEn: "City of Gacha",
    titleTh: "เมืองกาชาแฟนตาซี",
    image: "./made-with-us-02.jpg",
    fileName: "made-with-us-02.jpg",
    prompt: `Create a 16:9 epic fantasy city poster filled with ornate golden gacha towers, glass capsule machines, floating spheres, dramatic clouds, sun rays, and a heroic team running up grand stairs toward a huge central palace labeled "Boss of Gacha". Use gold, white, and warm cinematic lighting with maximal detail and symmetrical composition. Add title text near the bottom: "City of Gacha". Style: premium game event key visual, fantasy steampunk, high detail. Avoid cluttered unreadable text, distorted people, logos, watermark, and low quality.`,
  },
  {
    id: "made-with-us-03",
    code: "MWU-003",
    titleEn: "Humanoid Evolution",
    titleTh: "วิวัฒนาการหุ่นยนต์ฮิวแมนนอยด์",
    image: "./made-with-us-03.jpg",
    fileName: "made-with-us-03.jpg",
    prompt: `Create a 16:9 futuristic technology timeline poster about the evolution of humanoid robots. Divide the scene into four vertical eras from vintage mechanical robot to modern service robot to friendly social robot to advanced humanoid robot in a blue neon laboratory. Add large glowing center title text: "HUMANOID" and subtitle "The Evolution of Humanoid Robots". Use cinematic sci-fi lighting, holographic interface lines, deep blue and purple panels, high contrast. Avoid brand logos, messy text, distorted robots, watermark, and low resolution.`,
  },
  {
    id: "made-with-us-04",
    code: "MWU-004",
    titleEn: "Nostalgia Cinema",
    titleTh: "โรงภาพยนตร์นอสตัลเจีย",
    image: "./made-with-us-04.jpg",
    fileName: "made-with-us-04.jpg",
    prompt: `Create a 16:9 cinematic poster of a moody vintage movie theater interior with rows of dark seats, a center aisle, soft overhead spotlights, textured teal-gray walls, and a large aged marquee sign on the screen reading "NOSTALGIA" in warm amber neon. Style: retro cinema, dramatic symmetry, dark premium atmosphere, realistic interior render. Keep the composition clean and centered. Avoid people, logos, watermark, extra unreadable text, distorted perspective, and low quality.`,
  },
  {
    id: "made-with-us-05",
    code: "MWU-005",
    titleEn: "Durian Sprint",
    titleTh: "สวนทุเรียนสปรินต์",
    image: "./made-with-us-05.jpg",
    fileName: "made-with-us-05.jpg",
    prompt: `Create a 16:9 sunny tropical orchard poster with lush durian trees, golden sunlight through leaves, hanging durian fruits arranged like festive ornaments, and stylized yellow letters spelling "SPRINT" across the fruits. Add a large organic number 9 made from a curled vine or durian stem on the right. Mood: fresh, playful, Thai tropical, bright green, natural bokeh, polished event visual. Avoid clutter, low resolution, watermark, distorted fruit, and extra unreadable text.`,
  },
  {
    id: "made-with-us-06",
    code: "MWU-006",
    titleEn: "Strait of Hormuz",
    titleTh: "เรือบรรทุกน้ำมันช่องแคบฮอร์มุซ",
    image: "./made-with-us-06.jpg",
    fileName: "made-with-us-06.jpg",
    prompt: `Create a 16:9 cinematic maritime poster from the bow of a large red oil tanker sailing through a deep blue strait between dry rocky mountains under a clear sky. Add subtle oversized translucent title text across the sky: "SPRINT 8" and smaller text above: "At Strait of Hormuz". Use realistic photography style, strong central perspective, crisp daylight, industrial detail, ocean scale. Avoid logos, watermark, distorted ship geometry, clutter, and extra unreadable text.`,
  },
  {
    id: "made-with-us-07",
    code: "MWU-007",
    titleEn: "Songkran Festival",
    titleTh: "สงกรานต์เฟสติวัล",
    image: "./made-with-us-07.jpg",
    fileName: "made-with-us-07.jpg",
    prompt: `Create a 16:9 bright Songkran festival poster with colorful water guns, splashing water arcs, Thai silver bowl, jasmine flowers, golden traditional ornaments, colorful bunting flags, and a soft light blue background. Add elegant Thai headline text in the center celebrating Songkran 2026, with festive blue and orange accents. Style: cheerful 3D festival illustration, clean symmetrical layout, high detail, glossy water effects. Avoid watermark, messy text, distorted objects, and low quality.`,
  },
  {
    id: "made-with-us-08",
    code: "MWU-008",
    titleEn: "If I Were a Singer",
    titleTh: "คอนเสิร์ต If I Were a Singer",
    image: "./made-with-us-08.jpg",
    fileName: "made-with-us-08.jpg",
    prompt: `Create a 16:9 dramatic concert poster from the stage looking toward a huge outdoor crowd at night, with blue spotlights, orange audience lights, mountain silhouettes, smoke machines, microphones, and wet reflective stage floor. Add large metallic gothic title text: "If I Were a Singer" with decorative chrome spikes and a smaller subtitle "Sprint 15". Style: epic live music event, cinematic lighting, high energy. Avoid logos, watermark, unreadable extra text, distorted stage equipment, and low resolution.`,
  },
  {
    id: "made-with-us-09",
    code: "MWU-009",
    titleEn: "Self Awareness",
    titleTh: "เซลฟ์อะเวareness",
    image: "./made-with-us-09.jpg",
    fileName: "made-with-us-09.jpg",
    prompt: `Create a 16:9 conceptual self-awareness poster showing a side profile portrait of a thoughtful young Asian man facing right, blended with watercolor textures, sky clouds, teal ink splashes, and white puzzle pieces dissolving from the back of his head. Add clean soft typography on the right: "SELF AWARENESS". Mood: reflective, psychological, calm, artistic, premium editorial design. Avoid watermark, distorted face, harsh contrast, clutter, and unreadable extra text.`,
  },
  {
    id: "made-with-us-10",
    code: "MWU-010",
    titleEn: "Back to Ayutthaya Era",
    titleTh: "ย้อนสู่กรุงศรีอยุธยา",
    image: "./made-with-us-10.jpg",
    fileName: "made-with-us-10.jpg",
    prompt: `Create a 16:9 epic Thai historical fantasy poster showing a modern man standing before a grand Ayutthaya royal court, golden palace architecture, traditional guards, seated crowd, banners, warm sunlight, and a large ornate golden food cover at the center. Add Thai-style golden headline text about returning to the Ayutthaya era and a mission across time. Style: cinematic period drama, rich gold details, realistic crowd, grand scale. Avoid watermark, distorted faces, messy text, and low resolution.`,
  },
  {
    id: "made-with-us-11",
    code: "MWU-011",
    titleEn: "Worth Every Baht",
    titleTh: "พาหนะของพ่อ",
    image: "./made-with-us-11.jpg",
    fileName: "made-with-us-11.jpg",
    prompt: `Create a 16:9 cinematic motorcycle journey poster at sunset, showing a rider leaning into a coastal road curve with motion blur, glowing city skyline, harbor, mountains, and a dramatic orange-blue sky. Add a luminous circular time arc above with year markers and large bold title text: "Worth Every Baht", with smaller event text and Thai subtitle near the bottom. Mood: emotional, nostalgic, energetic, premium road movie poster. Avoid watermark, distorted motorcycle, messy typography, and low resolution.`,
  },
  {
    id: "made-with-us-12", code: "MWU-012", image: "./made-with-us-12.jpg", fileName: "made-with-us-12.jpg",
    prompt: `Create a 16:9 futuristic IT sprint presentation cover in a vivid neon cyberpunk style. Place a large metallic title "Sprint 12.0" on the left with bold yellow Thai subtitle text below. On the right, show a glossy sci-fi gacha machine filled with colorful glass capsules labeled as support tickets, user requests, BI dashboard, AI project, emergency fix, data and ETL, and requirements. Add sleek dashboard panels, charts, sprint overview, velocity, and team-power icons around the machine. Use deep navy, electric blue, purple, cyan, green, and gold lighting, premium 3D render, crisp corporate infographic layout, dramatic reflections, high detail. Leave organized areas for presenter, date, and sprint period. Avoid watermarks, distorted typography, duplicated objects, clutter, and low resolution.`,
  },
  {
    id: "made-with-us-13", code: "MWU-013", image: "./made-with-us-13.jpg", fileName: "made-with-us-13.jpg",
    prompt: `Create a 16:9 modern music-themed IT sprint presentation cover with a dark emerald stage background. Put the headline "Sprint 15.0" and subtitle "If I Were a Singer" in large clean white and lime typography on the left. Place a realistic standing microphone under bright concert spotlights on the right, with glowing green audio equalizer bars, flowing sound waves, and small music-note icons across the scene. Include neat information rows for presenter, presentation date, and sprint period using simple circular icons. Style: elegant corporate event poster, dramatic stage lighting, balanced negative space, premium and highly legible. Avoid watermarks, extra text, distorted microphone, and messy layout.`,
  },
  {
    id: "made-with-us-14", code: "MWU-014", image: "./made-with-us-14.jpg", fileName: "made-with-us-14.jpg",
    prompt: `Create a 16:9 emotional concert poster in a dreamy hand-painted anime illustration style. Show a young male singer from behind on the left holding a microphone toward a vast glowing audience, surrounded by sweeping musical staff lines, notes, sparkles, and warm stage lights. On the right, add a vintage gold microphone and the large expressive brush-script title "If I Were a Singer". Use a deep navy, violet, peach, and warm gold palette with cinematic bloom. Add a cream brush-stroke panel near the bottom for sprint details and a dark brush label for the presenter. Mood: inspiring, romantic, energetic, polished event key visual. Avoid watermark, illegible text, distorted hands, and crowded composition.`,
  },
  {
    id: "made-with-us-15", code: "MWU-015", image: "./made-with-us-15.jpg", fileName: "made-with-us-15.jpg",
    prompt: `Create a 16:9 elegant Thai historical presentation cover for "IT Sprint 17.0 – Back to the Ayutthaya Era". Use a refined cream and dark forest-green layout with thin gold ornamental borders. Place the large title and presenter/date/sprint-period details on the left. On the right, show Wat Chaiwatthanaram and ancient Ayutthaya temple ruins beside a calm river at golden sunset, with a traditional wooden Thai boat in the foreground, warm sky, birds, and tree branches framing the scene. Style: premium heritage tourism editorial, realistic cinematic photography, symmetrical and spacious. Avoid watermarks, modern buildings, distorted architecture, and unreadable text.`,
  },
  {
    id: "made-with-us-16", code: "MWU-016", image: "./made-with-us-16.jpg", fileName: "made-with-us-16.jpg",
    prompt: `Create a 16:9 soulful live-music story poster set on a dim intimate stage. Put a glowing vintage microphone in sharp focus near the center-right, with blurred guitar, drums, green and amber spotlights, and warm cinematic bokeh behind it. On the left, use elegant handwritten title typography "If I Were a Singer" followed by a bold Thai song title and a thoughtfully arranged Thai story or lyric excerpt with selected lime-green highlights. On the right foreground, place a handwritten lyric sheet clipped to a black music stand and wrapped with tiny fairy lights. Use black, amber, cream, and olive green. Style: premium live-soul album artwork, emotional, realistic, legible. Avoid watermark, malformed Thai text, and clutter.`,
  },
  {
    id: "made-with-us-17", code: "MWU-017", image: "./made-with-us-17.jpg", fileName: "made-with-us-17.jpg",
    prompt: `Create a 16:9 inspirational infographic poster themed "If I Were a Singer". On the left, show a singer from behind performing to a glowing crowd at sunrise, with music notes and sweeping staff lines. In the center, create a single majestic tree divided into four seasons—pink spring blossoms, lush green summer foliage, rainy dark branches, and snowy winter branches—with a large antique clock at its heart. On the right, arrange clean paper-like information cards for song title, message, quote, and reminder in Thai. Use warm cream paper textures, sky blue, pink, green, and winter gray. Mood: reflective, hopeful, life journey, polished editorial infographic. Avoid watermarks, illegible text, visual clutter, and distorted anatomy.`,
  },
  {
    id: "made-with-us-18", code: "MWU-018", image: "./made-with-us-18.jpg", fileName: "made-with-us-18.jpg",
    prompt: `Create a 16:9 Thai historical food-story poster set in the Ayutthaya era. Divide the layout with a dark forest-green editorial panel on the left and a richly lit food photograph on the right. Feature a large rustic bowl of spicy minced pork basil over rice topped with two crispy sunny-side-up duck eggs, surrounded by fresh basil, Thai ceramic jars, and an Ayutthaya riverside view at golden hour. Add bold Thai brush typography, a small "Sprint Story" label, a "Sprint 17.0" ribbon, a handwritten note, and a row of simple ingredient icons along the bottom. Use deep green, gold, warm brown, and parchment cream. Style: premium Thai heritage cookbook meets sprint storytelling. Avoid watermarks, malformed food, duplicated eggs, and unreadable copy.`,
  },
  {
    id: "made-with-us-19", code: "MWU-019", image: "./made-with-us-19.jpg", fileName: "made-with-us-19.jpg",
    prompt: `Create a 16:9 employee appreciation and team-recognition poster in a warm pink scrapbook-office style. Feature a friendly smiling Asian female manager on the right holding a tablet and stylus, wearing a black blazer and staff badge. Build the background from vanity bulbs, pinned notes, speech bubbles, Polaroid photos, hearts, crowns, and a to-do checklist. Add a large hand-lettered headline "Appreciation & Team Recognition" and a centered Thai thank-you message on layered paper cards. Include four colorful icon badges for support, creative ideas, care, and dedication. Use blush pink, cream, coral, soft gold, and black. Mood: cheerful, personal, supportive, professional. Avoid watermark, distorted face or hands, unreadable Thai, and excessive clutter.`,
  },
  {
    id: "made-with-us-20", code: "MWU-020", image: "./made-with-us-20.jpg", fileName: "made-with-us-20.jpg",
    prompt: `Create a 16:9 dark fantasy appreciation presentation cover. On the left, show a young Asian man in ornate black knight armor kneeling with both hands resting on a glowing longsword, inside a shadowy ancient hall with embers, carved pillars, and warm firelight. Reserve the right half as a clean textured black panel with refined gold serif typography: "Appreciation & Team Recognition", a thin ornamental divider, the subtitle "Honoring the people behind the journey", and a small sprint label near the bottom. Use black, bronze, amber, and antique gold, cinematic realism, premium game-key-art quality, elegant symmetry. Avoid watermarks, distorted armor or hands, clutter, and illegible type.`,
  },
  {
    id: "made-with-us-21", code: "MWU-021", image: "./made-with-us-21.jpg", fileName: "made-with-us-21.jpg",
    prompt: `Create a 16:9 cinematic fantasy thank-you slide. Show an armored knight seated in a field of small flowers on the left, gazing toward a distant gothic castle silhouetted against a blazing orange sunset. Blend the landscape gradually into a deep textured black panel on the right. Add large elegant antique-gold serif text "Thank You", a delicate ornamental divider, the message "For your time, support, and collaboration", and a small sprint theme label at the bottom. Use rich black, bronze, burnt orange, and gold with subtle vintage border details. Mood: grateful, reflective, heroic, premium. Avoid watermark, distorted armor, cluttered typography, and low resolution.`,
  },
  {
    id: "made-with-us-22", code: "MWU-022", image: "./made-with-us-22.jpg", fileName: "made-with-us-22.jpg",
    prompt: `Create a 16:9 clean Thai heritage team-recognition slide on a warm ivory background with dark forest-green and gold accents. Place a large headline "Appreciation & Team Recognition" at top left and a green vertical "Sprint 17.0" ribbon at top right. Across the center, arrange five elegant portrait frames containing young Asian men wearing traditional Ayutthaya-inspired brown garments, photographed against temple and canal scenery at golden hour. Add a concise gratitude statement above the portraits and subtle Ayutthaya temple silhouettes along the bottom edge. Use restrained Thai ornamental motifs, generous whitespace, consistent portrait lighting, corporate polish. Avoid watermarks, duplicated faces, distorted hands, and clutter.`,
  },
  {
    id: "made-with-us-23", code: "MWU-023", image: "./made-with-us-23.jpg", fileName: "made-with-us-23.jpg",
    prompt: `Create a 16:9 cozy illustrated sprint presentation cover in a handmade scrapbook aesthetic. Center a large cream paper card clipped and taped to a wooden table, with bold playful lettering "One Card, One Story" and a smaller line for sprint dates and presenter. Surround it with a pastel instant camera, four symbolic story cards, a coffee mug, pen, notebook, stacked books, pressed flowers, Polaroid landscape photo, binder clips, gingham tape, hearts, and small stars. Background: tranquil mountain lake at golden sunset. Use peach, coral, cream, sage, dusty blue, and warm wood. Style: soft storybook gouache, charming, organized, nostalgic, highly detailed. Avoid watermark, illegible typography, warped objects, and overcrowding.`,
  },
  {
    id: "made-with-us-24", code: "MWU-024", image: "./made-with-us-24.jpg", fileName: "made-with-us-24.jpg",
    prompt: `Create a 16:9 cozy anime-style IT sprint cover titled "AESTHETIC & Start Over". Use a warm cream-and-sage bedroom scene with a cute young woman in a dark green hoodie relaxing in bed while playing a handheld game, with a laptop, popcorn, mug, lantern, books, plants, and soft window light. Place large dimensional sage typography on the left with a sprint date badge and a short Thai motivational quote. Along the bottom, add a clean five-part navigation strip with polished 3D icons for Sprint Story, Sprint Impact, Challenges, OKR Progress, and Appreciation. Mood: calm, wholesome, productive reset, soft cinematic lighting, premium 3D illustration. Avoid watermark, distorted hands, illegible text, and clutter.`,
  },
  {
    id: "made-with-us-27", code: "MWU-027", image: "./made-with-us-27.jpg", fileName: "made-with-us-27.jpg",
    prompt: `Create a 16:9 warm sage-and-cream anime infographic slide titled "1. Sprint Story & Connection". Use a split editorial layout: on the left, two rounded information panels explain an aesthetic comfort theme and a "Start Over" personal-growth theme in Thai, supported by cute 3D icons such as a book, plant, game controller, media player, circular reset symbol, and colorful directional signpost. On the right, show two cozy lifestyle scenes of the same young woman in a green hoodie—relaxing in bed with a handheld game and laptop above, then studying languages in a notebook beside a globe and goal board below. Use soft golden morning light, plants, books, string lights, and gentle depth. Avoid watermark, inconsistent character design, unreadable text, and clutter.`,
  },
  {
    id: "made-with-us-28", code: "MWU-028", image: "./made-with-us-28.jpg", fileName: "made-with-us-28.jpg",
    prompt: `Create a 16:9 dark medieval-fantasy IT sprint presentation cover. On the left, show a lone armored knight sitting tired but composed inside a rustic wooden shelter on a rainy night, illuminated by a warm lantern, with a sword resting on the floor and a distant castle visible through the open doorway. Reserve the right half as a textured black title panel with elegant antique-gold serif typography: "IT Sprint 13.0", spaced subtitle "AESTHETIC", presenter name, two simple line icons for chatbot and ticket desk, sprint dates, and delicate ornamental dividers. Use cinematic low-key lighting, black, deep blue, bronze, and gold. Avoid watermark, distorted armor, unreadable text, and clutter.`,
  },
  {
    id: "made-with-us-29", code: "MWU-029", image: "./made-with-us-29.jpg", fileName: "made-with-us-29.jpg",
    prompt: `Create a 16:9 vibrant Thai travel-story poster about Chachoengsao local culture. Show a grand white-and-gold Thai temple under a clear saturated blue sky, photographed from a wide low angle. Place a full-body young Thai man on the right wearing casual travel clothes and sunglasses, greeting with a wai. Use oversized energetic white Thai brush lettering and a large yellow handwritten English word "Native" on the left, with playful yellow-and-white Thai captions about local nicknames on the upper right. Style: cheerful tourism campaign, crisp daylight, bold editorial typography, clean cutout composition, high contrast blue and gold. Avoid watermark, malformed hands, distorted temple architecture, and illegible Thai.`,
  },
  {
    id: "made-with-us-30", code: "MWU-030", image: "./made-with-us-30.jpeg", fileName: "made-with-us-30.jpeg",
    prompt: `Create a 16:9 playful handcrafted diorama poster for "IT Sprint 18.0 – Worth Every Baht". Feature a cute fabric-doll character of a young man seated on a small wooden crate giving a thumbs-up, wearing a navy team T-shirt and bright orange sneakers. Build the scene on a nostalgic hobby desk filled with a vintage camera, crayons, travel photos, stacked idea books, toy airplane, yellow toy car, globe, Rubik's cube, and tiny gift boxes. Center layered torn notebook-paper signs with the sprint title, dates, Thai question text, presenter, and team labels. Use warm amber desk-lamp lighting, felt and paper textures, shallow depth of field, whimsical stop-motion style, highly detailed. Avoid watermark, distorted lettering, extra fingers, and cluttered hierarchy.`,
  },
  {
    id: "made-with-us-31", code: "MWU-031", image: "./made-with-us-31.jpg", fileName: "made-with-us-31.jpg",
    prompt: `Create a 16:9 minimalist adventure-motorcycle sprint presentation cover in cool pale-blue tones. Use a wide scenic mountain road curving beside a lake and layered misty mountains under a bright sky. On the right, show a fully equipped touring motorcyclist in black protective gear stopped beside a black adventure bike with luggage, looking over the landscape. Add a subtle dotted travel route with location pins across the sky and hills. Place clean thin blue typography on the left: "IT Sprint 18.0", subtitle "Worth Every Baht", and presenter line. Style: premium travel editorial, realistic photography, airy composition, generous negative space, calm aspirational mood. Avoid watermark, distorted motorcycle geometry, extra riders, and clutter.`,
  },
  { id: "made-with-us-32", code: "MWU-032", image: "./made-with-us-32.jpg", fileName: "made-with-us-32.jpg", prompt: `Create a 16:9 cinematic IT Sprint 19.0 cover titled "My Rule of Life". Show a flooded modern city at night under violent rain, huge storm clouds, broken roadside barriers in churning water, elevated highway, distant towers and reflected streetlights. Place clean icy-blue title and presenter typography on the left. Photorealistic disaster atmosphere, deep navy palette, dramatic lightning glow, wide editorial composition. Avoid watermark, illegible text, duplicated buildings, and low detail.` },
  { id: "made-with-us-33", code: "MWU-033", image: "./made-with-us-33.jpg", fileName: "made-with-us-33.jpg", prompt: `Create a 16:9 Appreciation & Team Recognition slide set in a storm-flooded city at night. Center a respectful portrait of a young Asian man wearing a translucent blue raincoat inside a luminous ice-and-water frame. Surround him with torrential rain, dark towers, elevated roads, floating debris and blue-white reflections. Add a large elegant silver-blue headline across the top. Cinematic realism, heroic recognition mood, symmetrical premium layout. Avoid watermark, distorted face, extra people, and unreadable text.` },
  { id: "made-with-us-34", code: "MWU-034", image: "./made-with-us-34.jpeg", fileName: "made-with-us-34.jpeg", prompt: `Create a 16:9 warm editorial poster titled "One Card, One Story". Use a cream paper background with large dark-green handwritten typography on the left, sprint-date badge and a Thai call-to-action on a painted brush strip. On the right, arrange a dark green Deep Talk card box, coffee cup, vintage map, travel photo, notebook, pencil and four reflective question cards. Soft window light, sage and beige palette, premium stationery photography, generous whitespace. Avoid watermark, malformed Thai, clutter and warped cards.` },
  { id: "made-with-us-35", code: "MWU-035", image: "./made-with-us-35.jpg", fileName: "made-with-us-35.jpg", prompt: `Create a 16:9 Sprint Story & Connection slide over a dramatic rainy flooded-city background. Put a large icy-blue heading on the left. On the right, create a split comparison panel: the old feeling shows an exhausted office woman surrounded by clocks, cables and guilt; the new reality shows the same professional calmly resting in a bright office with concepts such as Rest equals Input, Sustainable Performance and Balance is Work. Use cold blue versus warm gold lighting, photorealistic corporate storytelling, clear information hierarchy. Avoid watermark and unreadable text.` },
  { id: "made-with-us-36", code: "MWU-036", image: "./made-with-us-36.jpeg", fileName: "made-with-us-36.jpeg", prompt: `Create a 16:9 cozy anime kitchen poster titled "one card one story". Show a joyful young woman with hair in a ribbon bun, floral apron and wooden spoon singing while cooking at a stove in a sunlit rustic kitchen. Add floating music notes, botanical doodles, a taped life-lessons question card on the left and a dark-green Thai caption strip along the bottom. Use warm cream, olive green and honey-gold tones, textured storybook paper, wholesome nostalgic mood. Avoid watermark, distorted hands and unreadable copy.` },
  { id: "made-with-us-37", code: "MWU-037", image: "./made-with-us-37.jpg", fileName: "made-with-us-37.jpg", prompt: `Create a 16:9 premium motorcycle thank-you slide at blue-hour sunset. Show a black sport-touring motorcycle parked on a winding mountain road above a lake, misty layered peaks and a glowing horizon. Place a large clean gradient-blue "Thank You" headline and presenter line on the left with a subtle brush underline. Photorealistic travel campaign, cool navy palette, crisp reflections and spacious composition. Avoid watermark, rider, distorted motorcycle geometry and clutter.` },
  { id: "made-with-us-38", code: "MWU-038", image: "./made-with-us-38.jpeg", fileName: "made-with-us-38.jpeg", prompt: `Create a 16:9 logistics presentation key visual inside a warm warehouse at sunset. Center giant glossy 3D typography "DELIVERY IMPACT" in white and golden yellow. Add a miniature white delivery truck driving on a glowing route line toward a location pin, with stacked parcels, conveyor belt, pallet jack and a truck outside the loading bay. Cinematic orange lighting, shallow depth of field, polished corporate 3D style. Avoid watermark, extra text, distorted vehicles and clutter.` },
  { id: "made-with-us-39", code: "MWU-039", image: "./made-with-us-39.jpg", fileName: "made-with-us-39.jpg", prompt: `Create a 16:9 Appreciation & Team Recognition slide for a motorcycle team. Place three framed portraits of young Asian men in black riding jackets across the center, against a sunrise mountain-road background. Add a blue motorcycle on the far left, helmet and gloves on the right, a small MT-03 banner and a large clean blue headline above. Use white brush-edged portrait frames, natural warm backlight and premium adventure-brand photography. Avoid watermark, duplicated faces, distorted hands and illegible typography.` },
  { id: "made-with-us-40", code: "MWU-040", image: "./made-with-us-40.jpeg", fileName: "made-with-us-40.jpeg", prompt: `Create a 16:9 warehouse-themed 3D slide centered on huge glossy letters "OKR" in white and golden yellow. Add a metallic target with an arrow behind the O, a rising bar chart and upward arrow behind the R, and a glowing golden route line sweeping through the composition. Frame the scene with parcels, conveyor belt, pallet jack, warehouse shelves and a delivery truck outside. Warm sunset light, premium corporate miniature style, strong depth. Avoid watermark and clutter.` },
  { id: "made-with-us-41", code: "MWU-041", image: "./made-with-us-41.jpeg", fileName: "made-with-us-41.jpeg", prompt: `Create a 16:9 minimalist warehouse appreciation slide. Place large friendly 3D word "Appreciation" in white and warm golden yellow at center, with a hand-drawn heart, accent rays and a sweeping gold underline. Use a charcoal warehouse wall, amber desk lamp, stacks of cartons, pallet jack, shelves and soft plants around the edges while preserving clean central space. Warm cinematic light, cheerful professional mood. Avoid watermark, extra text and distorted letters.` },
  { id: "made-with-us-42", code: "MWU-042", image: "./made-with-us-42.jpeg", fileName: "made-with-us-42.jpeg", prompt: `Create a 16:9 handcrafted felt-doll appreciation poster for an infrastructure team in a warehouse. Show a cute button-eyed male doll in an orange team shirt waving in the center, with a smaller mascot above and a stitched Thai name banner. Surround the scene with branded parcels, delivery truck, pallet jack, traffic cone, plants, thank-you note and chalkboard reading "Infra Team". Warm sunset light, textile textures, stop-motion charm, clean hierarchy. Avoid watermark, malformed Thai and extra limbs.` },
  { id: "made-with-us-43", code: "MWU-043", image: "./made-with-us-43.jpeg", fileName: "made-with-us-43.jpeg", prompt: `Create a 16:9 handcrafted felt-doll thank-you slide in a cozy warehouse. On the left, seat a cute button-eyed male doll wearing a navy company T-shirt and jeans on a cardboard box, waving. Center a large cream fabric sign stitched with "Thank You!" in blue and orange felt letters, plus heart and smile icons. Add parcels, pallet jack, hard hat, plants and warm work lights around the edges. Stop-motion textile aesthetic, amber lighting, uncluttered composition. Avoid watermark and distorted lettering.` },
  { id: "made-with-us-44", code: "MWU-044", image: "./made-with-us-44.jpg", fileName: "made-with-us-44.jpg", prompt: `Create a 16:9 futuristic technology partnership poster showing HELM and Desk as two friendly armored robots. The left robot wears blue gear-themed armor with a mechanical cog head and HELM chest mark; the right robot wears vivid green armor with a smiling square screen head and Desk chest mark. Show them exchanging glowing MCP data streams and floating tool, document, chart and settings icons in a blue-green sci-fi chamber. Reserve the left side for Thai headline, supporting copy and command example, with a three-step workflow bar along the bottom. Premium 3D cyber corporate style. Avoid watermark and unreadable UI.` },
  { id: "made-with-us-45", code: "MWU-045", image: "./made-with-us-45.jpeg", fileName: "made-with-us-45.jpeg", prompt: `Create a 16:9 heartfelt leadership thank-you poster in warm cream and sage. Place a confident young Asian male leader on the right wearing a black shirt and dark green cape with a star medal, backed by sun rays and a mountain summit with a flag. On the left, add large elegant handwritten "Thank You", a Thai appreciation message on a green brush stroke, a short quote and four line icons for confident guidance, clear advice, full support and always being beside the team. Soft parchment texture, gold accents, inspirational editorial design. Avoid watermark and distorted face.` },
  { id: "made-with-us-46", code: "MWU-046", image: "./made-with-us-46.jpeg", fileName: "made-with-us-46.jpeg", prompt: `Create a 16:9 industrial workshop Appreciation & Team Recognition poster. Show a focused Asian technician in a blue work jacket assembling a large illuminated metal sign reading "HELM" on a cluttered workbench. Use bold condensed white-and-yellow headline typography on the left, three icon statements about ideas, effort and impact, and a handwritten thank-you line. Add gears, engineering sketches, spotlight, coffee mug and clapperboard in a warm cinematic studio. Photorealistic, heroic craftsmanship, premium campaign layout. Avoid watermark and distorted hands.` },
  { id: "made-with-us-47", code: "MWU-047", image: "./made-with-us-47.jpeg", fileName: "made-with-us-47.jpeg", prompt: `Create a 16:9 epic fantasy Appreciation & Team Recognition poster. On the left, portray a young Asian guardian in ornate blue-and-gold armor holding a magical staff, haloed by a brilliant golden arcane circle and storm clouds, one hand projecting a protective blue energy shield. Along the bottom, show a tired technology team safely sleeping at desks with laptops and monitoring dashboards beneath the shield. On the right, add grand gold serif title and a Thai reassurance about resting while the guardian watches over the team. Cinematic fantasy realism, navy and gold palette. Avoid watermark, distorted faces and clutter.` },
  { id: "made-with-us-48", code: "MWU-048", image: "./made-with-us-48.jpeg", fileName: "made-with-us-48.jpeg", prompt: `Create a 16:9 futuristic infographic titled "Challenges & Adaptation — Turning Challenges into Energy for Growth". Use a dark navy space-like background with brilliant blue particle streams flowing from both sides into a white-gold energy core. On the left, arrange orange Drive Output items and cyan Incident items in clean rounded panels with matching icons and arrows aimed at the core. Add a bottom framework bar for Focus, Adapt, Transform and Grow. High-tech corporate visualization, luminous data trails, strong hierarchy. Avoid watermark and unreadable labels.` },
  { id: "made-with-us-49", code: "MWU-049", image: "./made-with-us-49.jpg", fileName: "made-with-us-49.jpg", prompt: `Create a 16:9 elegant IT Sprint 17.0 cover titled "Back to the Ayutthaya Era". Use a dark forest-green transparent overlay across a panoramic photograph of Wat Chaiwatthanaram reflected in still water. Place refined white and antique-gold serif title on the upper left, thin gold border and small star ornament, with period and presenter details aligned along the lower left. Heritage editorial style, restrained luxury, spacious and highly legible. Avoid watermark and distorted architecture.` },
  { id: "made-with-us-50", code: "MWU-050", image: "./made-with-us-50.jpg", fileName: "made-with-us-50.jpg", prompt: `Create a 16:9 Thai historical team thank-you slide at golden hour. On the right, show three smiling colleagues wearing elegant Ayutthaya-inspired traditional clothing in green, indigo and burgundy, standing before a carved wooden pavilion; one gives a peace sign and one waves. On the left, preserve calm dark-green negative space with temple silhouettes and river scenery. Add a large warm-gold Thai "ขอบคุณ" headline at lower right. Photorealistic period portrait, warm cinematic light. Avoid watermark, distorted hands and duplicated faces.` },
  { id: "made-with-us-51", code: "MWU-051", image: "./made-with-us-51.jpg", fileName: "made-with-us-51.jpg", prompt: `Create a 16:9 luminous Thai historical fantasy cover for IT Sprint 17.0 titled "Back to the Ayutthaya Era — A Taste From The Future". Show an idyllic Ayutthaya riverside city at golden sunset with temple towers, Thai boats, blossoms and petals. Center an ornate open wooden treasure chest glowing with magical golden light on a richly patterned red cloth, surrounded by traditional blue-white ceramics, brass bowls, spices and flowers. Add elegant heritage typography and presenter details. Lavish cinematic realism, gold and pastel sky. Avoid watermark and clutter.` },
  { id: "made-with-us-52", code: "MWU-052", image: "./made-with-us-52.jpg", fileName: "made-with-us-52.jpg", prompt: `Create a 16:9 Sprint Story & Connection slide in a romantic Ayutthaya sunset setting. On the right foreground, feature rich fudgy chocolate brownies on an ornate blue-and-white ceramic platter, with cocoa, brass tea ware, patterned Thai silk and white flowers. Behind them, show river boats and temple towers glowing at sunset. Reserve the left for elegant serif heading and a Thai story about presenting chocolate brownie flavors to people of the Ayutthaya era. Premium food photography blended with historical fantasy, warm gold palette. Avoid watermark and distorted food.` },
  { id: "made-with-us-53", code: "MWU-053", image: "./made-with-us-53.jpg", fileName: "made-with-us-53.jpg", prompt: `Create a 16:9 thank-you slide set in a luminous Ayutthaya riverside city at sunset. Center a pyramid of glossy chocolate brownie squares on richly patterned red-and-gold Thai silk, accompanied by a small "Chocolate Brownie" card, blue-white porcelain tea cup, brass lantern, traditional jars and plumeria flowers. Place a huge elegant dark-brown serif "THANK YOU!" headline in the sky with a small subtitle "Back to the Ayutthaya Era". Cinematic heritage food advertising, warm golden realism. Avoid watermark and illegible text.` },
  { id: "made-with-us-54", code: "MWU-054", image: "./made-with-us-54.jpg", fileName: "made-with-us-54.jpg", prompt: `Create a 16:9 cozy culinary sprint cover in a rustic kitchen on a rainy morning. Show a wooden worktable with handwritten recipe book, coffee mug, eggs, rolling pin, mixing bowl, whisk, flour and cocoa jars, illuminated by warm window light through rain-speckled glass and green leaves. Center elegant cream-and-gold title "IT Sprint 13.0 [AESTHETIC]" with cooking icons, dates and botanical ornaments. Add a small black-and-gold presenter card at bottom right. Cinematic food-editorial photography, dark amber palette. Avoid watermark and clutter.` },
  { id: "made-with-us-55", code: "MWU-055", image: "./made-with-us-55.jpg", fileName: "made-with-us-55.jpg", prompt: `Create a 16:9 dark warm Sprint Story & Connection slide about learning through cooking. On the left, show a young man from behind in a blue running shirt cooking at a small rustic kitchen stove beside an open rain-lit window, jars, eggs and recipe notes. On the right, use a near-black panel with elegant cream-and-gold title, Thai introduction and three vertical lessons: try something new, dare to experiment and make mistakes, grow in your own way. Add refined cooking and growth icons plus a process strip along the bottom. Cinematic realism, intimate amber mood. Avoid watermark and unreadable copy.` },
  { id: "made-with-us-56", code: "MWU-056", image: "./made-with-us-56.jpg", fileName: "made-with-us-56.jpg", prompt: `Create a 16:9 glowing culinary thank-you slide in a rustic kitchen. Place an oversized elegant handwritten "Thank You!" in brilliant warm gold across the center, with sparkling dust, heart flourish, botanical ornament and thin gold decorative border. Behind it, show a cozy recipe table with notebook, coffee, eggs, rolling pin, mixing bowl, whisk, flour and cocoa jars beside a sunlit leafy window. Dark amber cinematic photography, magical golden typography, premium closing-slide composition. Avoid watermark, extra text and clutter.` },
].map((template, index) => ({
  ...template,
  titleEn: `Work ${index + 1}`,
  titleTh: `ผลงานที่ ${index + 1}`,
}));

const awardsStandardsTemplates = [
  { id: "awards-standards-01", code: "AWS-001", titleEn: "Siam Press Standards (PPT)", titleTh: "มาตรฐาน Siam Press (PPT)", image: "./awards-standards-01.jpg", fileName: "awards-standards-01.jpg" },
  { id: "awards-standards-02", code: "AWS-002", titleEn: "TKS Standards (PPT)", titleTh: "มาตรฐาน TKS (PPT)", image: "./awards-standards-02.jpg", fileName: "awards-standards-02.jpg" },
  { id: "awards-standards-03", code: "AWS-003", titleEn: "ESG Activity 1", titleTh: "กิจกรรม ESG 1", image: "./awards-standards-03.jpg", fileName: "awards-standards-03.jpg" },
  { id: "awards-standards-04", code: "AWS-004", titleEn: "ESG Activity 2", titleTh: "กิจกรรม ESG 2", image: "./awards-standards-04.jpg", fileName: "awards-standards-04.jpg" },
  { id: "awards-standards-05", code: "AWS-005", titleEn: "ESG Facebook", titleTh: "ESG สำหรับ Facebook", image: "./awards-standards-05.jpg", fileName: "awards-standards-05.jpg" },
  { id: "awards-standards-06", code: "AWS-006", titleEn: "ESG for Web", titleTh: "ESG สำหรับเว็บไซต์", image: "./awards-standards-06.jpg", fileName: "awards-standards-06.jpg" },
  { id: "awards-standards-07", code: "AWS-007", titleEn: "ISO 14064-1:2018", titleTh: "มาตรฐาน ISO 14064-1:2018", image: "./awards-standards-07.png", fileName: "awards-standards-07.png" },
  { id: "awards-standards-08", code: "AWS-008", titleEn: "ISO 14064-1:2018 Web Banner", titleTh: "แบนเนอร์ ISO 14064-1:2018", image: "./awards-standards-08.png", fileName: "awards-standards-08.png" },
  { id: "awards-standards-09", code: "AWS-009", titleEn: "TSCN Sustainability Awards (Facebook)", titleTh: "รางวัล TSCN Sustainability (Facebook)", image: "./awards-standards-09.jpg", fileName: "awards-standards-09.jpg" },
  { id: "awards-standards-10", code: "AWS-010", titleEn: "TSCN Sustainability Awards (Web)", titleTh: "รางวัล TSCN Sustainability (เว็บไซต์)", image: "./awards-standards-10.jpg", fileName: "awards-standards-10.jpg" },
  { id: "awards-standards-11", code: "AWS-011", titleEn: "AGM 2026 (Facebook / LINE)", titleTh: "AGM 2026 (Facebook / LINE)", image: "./awards-standards-11.jpg", fileName: "awards-standards-11.jpg" },
  { id: "awards-standards-12", code: "AWS-012", titleEn: "AGM 2026 Main Banner", titleTh: "แบนเนอร์หลัก AGM 2026", image: "./awards-standards-12.jpg", fileName: "awards-standards-12.jpg" },
  { id: "awards-standards-13", code: "AWS-013", titleEn: "CAC Change Agent Recognition (Web)", titleTh: "การรับรอง CAC Change Agent (เว็บไซต์)", image: "./awards-standards-13.jpg", fileName: "awards-standards-13.jpg" },
  { id: "awards-standards-14", code: "AWS-014", titleEn: "CAC Change Agent Recognition", titleTh: "การรับรอง CAC Change Agent", image: "./awards-standards-14.jpg", fileName: "awards-standards-14.jpg" },
  { id: "awards-standards-15", code: "AWS-015", titleEn: "CGR Score 2026 (Web)", titleTh: "ผลประเมิน CGR 2569 (เว็บไซต์)", image: "./awards-standards-15.jpg", fileName: "awards-standards-15.jpg" },
  { id: "awards-standards-16", code: "AWS-016", titleEn: "CGR Score 2026 (Facebook)", titleTh: "ผลประเมิน CGR 2569 (Facebook)", image: "./awards-standards-16.jpg", fileName: "awards-standards-16.jpg" },
];

const corporatePhotoTemplates = [
  {
    id: "corporate-photo-tks-building-01",
    code: "CPH-001",
    titleEn: "TKS Building Exterior 01",
    titleTh: "ภาพตึก TKS 01",
    image: "./corporate-photo-tks-building-01.jpg",
    fileName: "corporate-photo-tks-building-01.jpg",
  },
  {
    id: "corporate-photo-tks-building-02",
    code: "CPH-002",
    titleEn: "TKS Building Exterior 02",
    titleTh: "ภาพตึก TKS 02",
    image: "./corporate-photo-tks-building-02.png",
    fileName: "corporate-photo-tks-building-02.png",
  },
  {
    id: "corporate-photo-tks-building-03",
    code: "CPH-003",
    titleEn: "TKS Building Signage",
    titleTh: "ภาพป้ายอาคาร TKS",
    image: "./corporate-photo-tks-building-03.jpg",
    fileName: "corporate-photo-tks-building-03.jpg",
  },
  {
    id: "corporate-photo-tks-building-04",
    code: "CPH-004",
    titleEn: "TKS Building Aerial View",
    titleTh: "ภาพมุมสูงอาคาร TKS",
    image: "./corporate-photo-tks-building-04.jpg",
    fileName: "corporate-photo-tks-building-04.jpg",
  },
  {
    id: "corporate-photo-tks-building-logo-1",
    code: "CPH-005",
    titleEn: "TKS Building",
    titleTh: "อาคาร TKS",
    image: "./tks-building-logo-1.jpg",
    fileName: "tks-building-logo-1.jpg",
  },
  {
    id: "corporate-photo-tks-building-logo-2",
    code: "CPH-006",
    titleEn: "TKS Group Building",
    titleTh: "อาคาร TKS Group",
    image: "./tks-building-logo-2.jpg",
    fileName: "tks-building-logo-2.jpg",
  },
  {
    id: "corporate-photo-tks-group-banner-02",
    code: "CPH-007",
    titleEn: "TKS Group Banner 02",
    titleTh: "แบนเนอร์ TKS Group 02",
    image: "./tks-group-banner-02.jpg",
    fileName: "tks-group-banner-02.jpg",
  },
  {
    id: "corporate-photo-tks-group-banner-01",
    code: "CPH-008",
    titleEn: "TKS Group Banner 01",
    titleTh: "แบนเนอร์ TKS Group 01",
    image: "./tks-group-banner-01.jpg",
    fileName: "tks-group-banner-01.jpg",
  },
];

const productBusinessTemplates = [
  {
    id: "product-business-01",
    code: "PRD-001",
    titleEn: "6K Product 2",
    titleTh: "6Kproduct2",
    image: "./product-business-01.png",
    fileName: "product-business-01.png",
  },
  {
    id: "product-business-02",
    code: "PRD-002",
    titleEn: "6K Product 1",
    titleTh: "6Kproduct1",
    image: "./product-business-02.png",
    fileName: "product-business-02.png",
  },
  {
    id: "product-business-03",
    code: "PRD-003",
    titleEn: "Box 1",
    titleTh: "box1",
    image: "./product-business-03.png",
    fileName: "product-business-03.png",
  },
  {
    id: "product-business-04",
    code: "PRD-004",
    titleEn: "Box 2",
    titleTh: "box2",
    image: "./product-business-04.png",
    fileName: "product-business-04.png",
  },
  {
    id: "product-business-05",
    code: "PRD-005",
    titleEn: "Box 3",
    titleTh: "box3",
    image: "./product-business-05.png",
    fileName: "product-business-05.png",
  },
  {
    id: "product-business-06",
    code: "PRD-006",
    titleEn: "Box 4",
    titleTh: "box4",
    image: "./product-business-06.png",
    fileName: "product-business-06.png",
  },
  {
    id: "product-business-07",
    code: "PRD-007",
    titleEn: "CodeG 1",
    titleTh: "CodeG1",
    image: "./product-business-07.png",
    fileName: "product-business-07.png",
  },
  {
    id: "product-business-08",
    code: "PRD-008",
    titleEn: "Passport 1",
    titleTh: "passport1",
    image: "./product-business-08.png",
    fileName: "product-business-08.png",
  },
  {
    id: "product-business-09",
    code: "PRD-009",
    titleEn: "RFID 1",
    titleTh: "RFID1",
    image: "./product-business-09.png",
    fileName: "product-business-09.png",
  },
  {
    id: "product-business-10",
    code: "PRD-010",
    titleEn: "TKS Paper 1",
    titleTh: "กระดาษทีเคเอส1",
    image: "./product-business-10.png",
    fileName: "product-business-10.png",
  },
  {
    id: "product-business-11",
    code: "PRD-011",
    titleEn: "Stamp 1",
    titleTh: "แสตมป์1",
    image: "./product-business-11.png",
    fileName: "product-business-11.png",
  },
  {
    id: "product-business-12",
    code: "PRD-012",
    titleEn: "Action 1",
    titleTh: "action1",
    image: "./product-business-12.png",
    fileName: "product-business-12.png",
  },
  {
    id: "product-business-13",
    code: "PRD-013",
    titleEn: "Label 1",
    titleTh: "Lable1",
    image: "./product-business-13.png",
    fileName: "product-business-13.png",
  },
  {
    id: "product-business-14",
    code: "PRD-014",
    titleEn: "Label 2",
    titleTh: "Lable2",
    image: "./product-business-14.png",
    fileName: "product-business-14.png",
  },
  {
    id: "product-business-15",
    code: "PRD-015",
    titleEn: "Security 2",
    titleTh: "security2",
    image: "./product-business-15.png",
    fileName: "product-business-15.png",
  },
  {
    id: "product-business-16",
    code: "PRD-016",
    titleEn: "Security 3",
    titleTh: "security3",
    image: "./product-business-16.png",
    fileName: "product-business-16.png",
  },
  {
    id: "product-business-17",
    code: "PRD-017",
    titleEn: "TKS Paper 2",
    titleTh: "กระดาษทีเคเอส2",
    image: "./product-business-17.png",
    fileName: "product-business-17.png",
  },
  {
    id: "product-business-18",
    code: "PRD-018",
    titleEn: "Tax 1",
    titleTh: "ภาษี1",
    image: "./product-business-18.png",
    fileName: "product-business-18.png",
  },
  {
    id: "product-business-19",
    code: "PRD-019",
    titleEn: "Digital Printing 2",
    titleTh: "digital printing 2",
    image: "./product-business-19.png",
    fileName: "product-business-19.png",
  },
  {
    id: "product-business-20",
    code: "PRD-020",
    titleEn: "Digital Printing 1",
    titleTh: "digital printing 1",
    image: "./product-business-20.png",
    fileName: "product-business-20.png",
  },
  {
    id: "product-business-21",
    code: "PRD-021",
    titleEn: "Security 1",
    titleTh: "security1",
    image: "./product-business-21.png",
    fileName: "product-business-21.png",
  },
  {
    id: "product-business-22",
    code: "PRD-022",
    titleEn: "Untitled 1",
    titleTh: "Untitled-1",
    image: "./product-business-22.png",
    fileName: "product-business-22.png",
  },
  {
    id: "product-business-23",
    code: "PRD-023",
    titleEn: "Coupon and Insert",
    titleTh: "คูปองและในเซอร์",
    image: "./product-business-23.png",
    fileName: "product-business-23.png",
  },
  {
    id: "product-business-24",
    code: "PRD-024",
    titleEn: "Cheque",
    titleTh: "เช็ค",
    image: "./product-business-24.png",
    fileName: "product-business-24.png",
  },
  {
    id: "product-business-25",
    code: "PRD-025",
    titleEn: "Exam Solution",
    titleTh: "โซลูชั่นข้อสอบ",
    image: "./product-business-25.png",
    fileName: "product-business-25.png",
  },
  {
    id: "product-business-26",
    code: "PRD-026",
    titleEn: "Passbook",
    titleTh: "พาสบุ๊ก",
    image: "./product-business-26.png",
    fileName: "product-business-26.png",
  },
];

const boardExecutiveTemplates = [
  {
    id: "board-executive-01",
    code: "BEX-001",
    titleEn: "Supant Mongkolsuthree",
    titleTh: "สุพันธุ์ มงคลสุธี",
    image: "./board-executive-01.png",
    fileName: "board-executive-01.png",
  },
  {
    id: "board-executive-02",
    code: "BEX-002",
    titleEn: "Jutiphan Mongkolsuthree",
    titleTh: "จุติพันธุ์ มงคลสุธี",
    image: "./board-executive-02.png",
    fileName: "board-executive-02.png",
  },
  {
    id: "board-executive-03",
    code: "BEX-003",
    titleEn: "Sutida Mongkolsuthree",
    titleTh: "สุธิดา มงคลสุธี",
    image: "./board-executive-03.png",
    fileName: "board-executive-03.png",
  },
  {
    id: "board-executive-04",
    code: "BEX-004",
    titleEn: "Patinya Dheva-Aksorn",
    titleTh: "ปฏิญญา เทวอักษร",
    image: "./board-executive-04.png",
    fileName: "board-executive-04.png",
  },
  {
    id: "board-executive-05",
    code: "BEX-005",
    titleEn: "Apisak Tantiworawong",
    titleTh: "อภิศักดิ์ ตันติวรวงศ์",
    image: "./board-executive-05.png",
    fileName: "board-executive-05.png",
  },
  {
    id: "board-executive-06",
    code: "BEX-006",
    titleEn: "Pratana Mongkolkul",
    titleTh: "ปรารถนา มงคลกุล",
    image: "./board-executive-06.png",
    fileName: "board-executive-06.png",
  },
  {
    id: "board-executive-07",
    code: "BEX-007",
    titleEn: "Distat Hotrakitya",
    titleTh: "ดิสทัต โหตระกิตย์",
    image: "./board-executive-07.png",
    fileName: "board-executive-07.png",
  },
  {
    id: "board-executive-08",
    code: "BEX-008",
    titleEn: "Somchai Harnhirun",
    titleTh: "สมชาย หาญหิรัญ",
    image: "./board-executive-08.png",
    fileName: "board-executive-08.png",
  },
  {
    id: "board-executive-09",
    code: "BEX-009",
    titleEn: "Parkpoom Pooudom",
    titleTh: "ภาคภูมิ ภูอุดม",
    image: "./board-executive-09.png",
    fileName: "board-executive-09.png",
  },
  {
    id: "board-executive-10",
    code: "BEX-010",
    titleEn: "Thanthip Srengamphong",
    titleTh: "ธารทิพย์ ศรีงามผ่อง",
    image: "./board-executive-10.png",
    fileName: "board-executive-10.png",
  },
  {
    id: "board-executive-11",
    code: "BEX-011",
    titleEn: "Jiraphong Wachirathanaporn",
    titleTh: "จิรพงศ์ วชิราธนาภรณ์",
    image: "./board-executive-11.png",
    fileName: "board-executive-11.png",
  },
  {
    id: "board-executive-12",
    code: "BEX-012",
    titleEn: "Rujee Jonpipob",
    titleTh: "รุจี จรพิภพ",
    image: "./board-executive-12.png",
    fileName: "board-executive-12.png",
  },
];

const state = {
  lang: "th",
  main: "main",
  view: "home",
  sub: "presentation",
  query: "",
  logoPreview: null,
  templatePreview: null,
  articlePreview: null,
  articleReturnScrollY: 0,
  galleryReturnPosition: null,
  madeWithUsExpanded: false,
  businessInfographicExpanded: false,
  businessCoverVisibleCount: 30,
  businessTimelineVisibleCount: 30,
  heroVideo: 0,
  heroVideoLayer: 0,
};

const pageTransition = {
  duration: 160,
  timer: null,
  layer: null,
};

const els = {
  hero: document.querySelector(".hero"),
  heroVideos: document.querySelectorAll(".hero-video"),
  sliderDots: document.querySelector(".slider-dots"),
  mainMenu: document.querySelector("#main-menu"),
  subMenu: document.querySelector("#sub-menu"),
  search: document.querySelector("#search"),
  grid: document.querySelector("#template-grid"),
  activeTitle: document.querySelector("#active-title"),
  activeSubtitle: document.querySelector("#active-subtitle"),
  homeBack: document.querySelector("#home-back-button"),
  browseMore: document.querySelector(".browse-more"),
  browseCollectionsHead: document.querySelector(".browse-collections-head"),
  mainHome: document.querySelector("#main-home"),
  workspace: document.querySelector("#template-workspace"),
  page: document.querySelector(".page"),
  collectionBrowser: document.querySelector("#collection-browser"),
  featuredCollectionGrid: document.querySelector("#featured-collection-grid"),
  collectionBrowserGrid: document.querySelector("#collection-browser-grid"),
  openCollections: document.querySelector("#open-collections"),
  backFromCollections: document.querySelector("#back-from-collections"),
  homeAssetGrid: document.querySelector("#home-asset-grid"),
  homeMasonry: document.querySelector("#home-masonry"),
  collectionGrid: document.querySelector("#collection-grid"),
  articleGrid: document.querySelector("#article-grid"),
  articleDetail: document.querySelector("#article-detail"),
  langButtons: document.querySelectorAll(".lang-option"),
  i18n: document.querySelectorAll("[data-i18n]"),
};

function label(items, id) {
  return items.find((item) => item.id === id)?.[state.lang] ?? id;
}

function getSubMenus(mainId = state.main) {
  return subMenuSets[mainId] ?? templateSubMenus;
}

function allSubMenus() {
  return [...templateSubMenus, ...corporateSubMenus];
}

function subLabel(id, mainId = state.main) {
  return label(getSubMenus(mainId), id) === id ? label(allSubMenus(), id) : label(getSubMenus(mainId), id);
}

function firstSubFor(mainId) {
  return getSubMenus(mainId)[0]?.id ?? "presentation";
}

function randomHeroVideoIndex(excludeIndex = state.heroVideo) {
  if (heroVideoAssets.length <= 1) return 0;
  const candidates = heroVideoAssets
    .map((_, index) => index)
    .filter((index) => index !== state.heroVideo && index !== excludeIndex);
  const pool = candidates.length > 0
    ? candidates
    : heroVideoAssets.map((_, index) => index).filter((index) => index !== state.heroVideo);
  return pool[Math.floor(Math.random() * pool.length)] ?? 0;
}

function renderHeroDots() {
  els.sliderDots.replaceChildren();
  heroVideoAssets.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = `dot${index === state.heroVideo ? " active" : ""}`;
    els.sliderDots.append(dot);
  });
}

function setHeroVideo(index, immediate = false) {
  const nextVideo = heroVideoAssets[index];
  const activeLayer = els.heroVideos[state.heroVideoLayer];
  const nextLayerIndex = immediate ? state.heroVideoLayer : Number(!state.heroVideoLayer);
  const nextLayer = els.heroVideos[nextLayerIndex];
  const activateLayer = () => {
    els.hero.dataset.tone = nextVideo.tone;
    state.heroVideo = index;
    state.heroVideoLayer = nextLayerIndex;
    renderHeroDots();

    nextLayer.classList.add("is-active");
    if (!immediate) {
      activeLayer.classList.remove("is-active");
    }
  };

  nextLayer.onloadeddata = activateLayer;
  nextLayer.onerror = () => {
    window.setTimeout(() => {
      setHeroVideo(randomHeroVideoIndex(index), immediate);
    }, 120);
  };
  nextLayer.src = nextVideo.src;
  nextLayer.load();
  const playPromise = nextLayer.play();
  if (playPromise) {
    playPromise.catch(() => {});
  }

  if (nextLayer.readyState >= 2) {
    activateLayer();
  }
}

function startHeroVideoRotation() {
  if (!els.hero || els.heroVideos.length < 2 || heroVideoAssets.length === 0) return;
  state.heroVideo = randomHeroVideoIndex();
  setHeroVideo(state.heroVideo, true);

  window.setInterval(() => {
    setHeroVideo(randomHeroVideoIndex());
  }, 4000);
}

function isLogoLibrary() {
  return state.main === "corporate" && state.sub === "brandIdentity";
}

function setBrowseExtrasHidden(hidden) {
  els.browseMore.hidden = hidden;
  els.browseCollectionsHead.hidden = hidden;
  els.featuredCollectionGrid.hidden = hidden;
}

function isPromptTemplateDetailAvailable(item) {
  return item?.subId === "presentation"
    || (item?.menuId === "business" && item?.subId === "cover")
    || (item?.menuId === "business" && item?.subId === "timeline")
    || item?.subId === "wallpaper"
    || item?.subId === "madeWithUs"
    || (item?.menuId === "business" && item?.subId === "infographic");
}

function isDownloadTemplateDetailAvailable(item) {
  return Boolean(item?.fileName);
}

function getCustomTemplates(menuId, subId) {
  if (menuId === "business" && subId === "cover") {
    return businessCoverTemplates;
  }

  if (menuId === "business" && subId === "infographic") {
    return businessInfographicTemplates;
  }

  if (menuId === "business" && subId === "timeline") {
    return businessTimelineTemplates;
  }

  if (menuId === "business" && subId === "presentation") {
    return businessPresentationTemplates;
  }

  if (menuId === "business" && subId === "wallpaper") {
    return wallpaperTemplates;
  }

  if (menuId === "corporate" && subId === "corporatePhotos") {
    return corporatePhotoTemplates;
  }

  if (menuId === "corporate" && subId === "productBusiness") {
    return productBusinessTemplates;
  }

  if (menuId === "corporate" && subId === "marketingMaterials") {
    return awardsStandardsTemplates;
  }

  if (menuId === "corporate" && subId === "boardExecutives") {
    return boardExecutiveTemplates;
  }

  if (menuId === "corporate" && subId === "madeWithUs") {
    return madeWithUsTemplates;
  }

  return [];
}

function getMenuAssetCount(menuId, subId) {
  if (menuId === "corporate" && subId === "brandIdentity") {
    return logoItems.length;
  }

  if (menuId === "business" && subId === "cover") {
    return businessCoverTemplates.length;
  }

  if (menuId === "business" && subId === "timeline") {
    return businessTimelineTemplates.length;
  }

  const customCount = getCustomTemplates(menuId, subId).length;
  const hasGeneratedTemplates = Boolean(templateNames[subId]?.length);
  return hasGeneratedTemplates ? Math.max(12, customCount) : customCount;
}

function getCorporateLibraryAssetCount() {
  return corporateSubMenus.reduce(
    (total, menu) => total + getMenuAssetCount("corporate", menu.id),
    0
  );
}

function shuffleItems(items) {
  return items
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function getHomeMasonryTemplates() {
  const promptTemplates = [
    ...businessPresentationTemplates.map((template) => ({ ...template, subId: "presentation" })),
    ...wallpaperTemplates.map((template) => ({ ...template, subId: "wallpaper" })),
  ].filter((template) => template.id !== "wallpaper-tech-10");

  return shuffleItems(promptTemplates)
    .slice(0, masonryItems.length)
    .map((template, index) => ({
      ...template,
      size: masonryItems[index]?.size ?? "medium",
    }));
}

function getRandomReviewItems(currentId) {
  const reviewPool = [
    ...businessPresentationTemplates.map((template) => ({
      ...template,
      menuId: "business",
      subId: "presentation",
    })),
    ...businessInfographicTemplates.map((template) => ({
      ...template,
      menuId: "business",
      subId: "infographic",
    })),
    ...wallpaperTemplates.map((template) => ({
      ...template,
      menuId: "business",
      subId: "wallpaper",
    })),
    ...madeWithUsTemplates.map((template) => ({
      ...template,
      menuId: "corporate",
      subId: "madeWithUs",
    })),
  ].filter((template) => template.id !== currentId);

  return shuffleItems(reviewPool).slice(0, 9);
}

const corporateSubMenusWithoutReviews = new Set([
  "brandIdentity",
  "corporatePhotos",
  "productBusiness",
  "marketingMaterials",
  "eventsActivities",
  "boardExecutives",
]);

function appendRandomReviewGallery(host, currentItem) {
  if (!host) return;
  const currentSubMenu = currentItem?.subId ?? state.sub;
  if (state.main === "corporate" && corporateSubMenusWithoutReviews.has(currentSubMenu)) return;
  const reviews = getRandomReviewItems(currentItem?.id);
  if (reviews.length === 0) return;

  const section = document.createElement("section");
  section.className = "random-review-section";
  section.innerHTML = `
    <header class="random-review-header">
      <p>${state.lang === "th" ? "คลิกภาพเพื่อดูและคัดลอก Prompt" : "Click an image to view and copy the Prompt"}</p>
    </header>
    <div class="random-review-grid"></div>
  `;

  const grid = section.querySelector(".random-review-grid");
  reviews.forEach((item) => {
    const title = state.lang === "th" ? item.titleTh : item.titleEn;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "random-review-card";
    card.setAttribute("aria-label", `${state.lang === "th" ? "เปิด Prompt ของ" : "Open prompt for"} ${title}`);
    card.innerHTML = `<img src="${item.image}" alt="${title}" loading="lazy" /><span>${title}</span>`;
    card.addEventListener("click", () => {
      transitionTo(() => {
        state.main = item.menuId;
        state.sub = item.subId;
        state.view = "browse";
        state.templatePreview = item.id;
        state.logoPreview = null;
        state.query = "";
        state.madeWithUsExpanded = true;
        els.search.value = "";
      }, { scrollTop: true });
    });
    grid.append(card);
  });

  host.append(section);
}

function getHomeAssetPreviewItems(assets) {
  const coverPreviews = businessCoverTemplates.map((template) => template.image);
  const timelinePreviews = businessTimelineTemplates.map((template) => template.image);
  const presentationPreviews = businessPresentationTemplates.map((template) => template.image);
  const wallpaperPreviews = wallpaperTemplates
    .filter((template) => template.id !== "wallpaper-tech-10")
    .map((template) => template.image);
  const uploadedPreviews = shuffleItems([...presentationPreviews, ...wallpaperPreviews]);
  let previewIndex = 0;

  return assets.map((item) => {
    if (item.fixedPreview) return item;

    const previewPool = item.sub === "presentation"
      ? presentationPreviews
      : item.sub === "cover"
        ? coverPreviews
        : item.sub === "timeline"
          ? timelinePreviews
        : item.sub === "wallpaper"
          ? wallpaperPreviews
          : uploadedPreviews;
    const randomPreview = previewPool[Math.floor(Math.random() * previewPool.length)]
      ?? uploadedPreviews[previewIndex % uploadedPreviews.length]
      ?? item.image;

    previewIndex += 1;
    return { ...item, image: randomPreview };
  });
}

function makeTemplates() {
  const all = [];
  const menuIds = state.main === "main" ? mainMenus.slice(1).map((menu) => menu.id) : [state.main];

  menuIds.forEach((menuId) => {
    const availableSubMenus = getSubMenus(menuId);
    const subIds = state.sub && availableSubMenus.some((menu) => menu.id === state.sub)
      ? [state.sub]
      : availableSubMenus.map((menu) => menu.id);

    subIds.forEach((subId) => {
      const names = (state.lang === "th" ? templateNamesTh[subId] : templateNames[subId]) ?? [];
      const menuIndex = Math.max(0, mainMenus.slice(1).findIndex((menu) => menu.id === menuId));
      const subIndex = Math.max(0, availableSubMenus.findIndex((menu) => menu.id === subId));
      const customTemplates = getCustomTemplates(menuId, subId);

      customTemplates.forEach((template) => {
        all.push({
          id: template.id,
          code: template.code,
          title: state.lang === "th" ? template.titleTh : template.titleEn,
          menu: label(mainMenus, menuId),
          menuId,
          category: subLabel(subId, menuId),
          subId,
          image: template.image,
          fileName: template.fileName,
          prompt: template.prompt ?? templatePromptBase,
        });
      });

      if (names.length === 0) return;

      const templateTarget = menuId === "business" && subId === "cover"
        ? customTemplates.length
        : 12;

      for (let i = 0; i < templateTarget - customTemplates.length; i += 1) {
        const imageIndex = (menuIndex * 8 + subIndex * 4 + i) % imagePool.length;
        const templateNumber = customTemplates.length + i + 1;
        all.push({
          id: `${menuId}-${subId}-${templateNumber}`,
          code: `TPL-${String(menuIndex * 80 + subIndex * 12 + templateNumber).padStart(3, "0")}`,
          title: names[i % names.length],
          menu: label(mainMenus, menuId),
          menuId,
          category: subLabel(subId, menuId),
          subId,
          image: imagePool[imageIndex],
          prompt: templatePromptBase,
        });
      }
    });
  });

  const query = state.query.trim().toLowerCase();
  const visible = query
    ? all.filter((item) => `${item.title} ${item.menu} ${item.category}`.toLowerCase().includes(query))
    : all;
  const shouldShowAll =
    (state.main === "business" && state.sub === "presentation") ||
    (state.main === "business" && state.sub === "cover") ||
    (state.main === "business" && state.sub === "timeline") ||
    (state.main === "business" && state.sub === "infographic") ||
    (state.main === "business" && state.sub === "wallpaper") ||
    (state.main === "corporate" && state.sub === "productBusiness") ||
    (state.main === "corporate" && state.sub === "marketingMaterials") ||
    (state.main === "corporate" && state.sub === "madeWithUs");

  return shouldShowAll ? visible : visible.slice(0, 12);
}

function renderCopy() {
  document.documentElement.lang = state.lang;
  els.i18n.forEach((node) => {
    node.textContent = copy[state.lang][node.dataset.i18n];
  });
  els.search.placeholder = copy[state.lang].searchPlaceholder;
}

function renderHomeAssets() {
  els.homeAssetGrid.replaceChildren();
  const query = state.query.trim().toLowerCase();
  const visibleAssets = homeAssets.filter((item) => {
    const menuId = item.main ?? "business";
    const itemLabel = item.aggregateCorporate
      ? label(mainMenus, "corporate")
      : subLabel(item.sub, menuId);
    const itemCount = item.aggregateCorporate
      ? getCorporateLibraryAssetCount()
      : getMenuAssetCount(menuId, item.sub);
    if (!query) return true;
    return `${itemLabel} ${itemCount}`.toLowerCase().includes(query);
  });
  getHomeAssetPreviewItems(visibleAssets).forEach((item) => {
    const menuId = item.main ?? "business";
    const itemCount = item.aggregateCorporate
      ? getCorporateLibraryAssetCount()
      : getMenuAssetCount(menuId, item.sub);
    const itemLabel = item.aggregateCorporate
      ? label(mainMenus, "corporate")
      : subLabel(item.sub, menuId);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `home-asset-card${item.fixedPreview ? " home-asset-card-fixed" : ""}`;
    button.innerHTML = `
      <span>
        <strong>${itemLabel}</strong>
        <small>${itemCount} ${state.lang === "th" ? "รายการ" : "assets"}</small>
      </span>
      <img src="${item.image}" alt="" />
    `;
    button.addEventListener("click", () => {
      transitionTo(() => {
        state.main = menuId;
        state.view = "browse";
        state.sub = item.sub;
        state.templatePreview = null;
        state.query = "";
        els.search.value = "";
      }, { scrollTop: true });
    });
    els.homeAssetGrid.append(button);
  });
  if (visibleAssets.length === 0) {
    const empty = document.createElement("p");
    empty.className = "home-empty";
    empty.textContent = copy[state.lang].noResults;
    els.homeAssetGrid.append(empty);
  }
}

function renderHomeMasonry() {
  els.homeMasonry.replaceChildren();
  getHomeMasonryTemplates().forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `masonry-card ${item.size}`;
    card.setAttribute("aria-label", state.lang === "th" ? item.titleTh : item.titleEn);
    card.innerHTML = `<img src="${item.image}" alt="${state.lang === "th" ? item.titleTh : item.titleEn}" />`;
    card.addEventListener("click", () => {
      transitionTo(() => {
        state.main = "business";
        state.view = "browse";
        state.sub = item.subId;
        state.templatePreview = item.id;
        state.logoPreview = null;
        state.query = "";
        els.search.value = "";
      }, { scrollTop: true });
    });
    els.homeMasonry.append(card);
  });
}

function renderCollections() {
  els.collectionGrid.replaceChildren();
  collections.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "collection-item";
    button.innerHTML = `
      <img src="${item.image}" alt="" />
      <span>
        <strong>${item[state.lang]}</strong>
        <small>${item.count} ${state.lang === "th" ? "รายการ" : "items"}</small>
      </span>
    `;
    els.collectionGrid.append(button);
  });
}

function openCollection(item) {
  transitionTo(() => {
    state.main = "business";
    state.view = "browse";
    state.sub = firstSubFor("business");
    state.templatePreview = null;
    state.query = "";
    els.search.value = "";
  }, { scrollTop: true });
}

function renderFeaturedCollections() {
  els.featuredCollectionGrid.replaceChildren();
  collections.slice(7, 10).forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "featured-collection-card";
    card.innerHTML = `
      <img src="${item.image}" alt="" />
      <strong>${item[state.lang]}</strong>
      <span>${item.count} ${state.lang === "th" ? "รายการ" : "items"}</span>
    `;
    card.addEventListener("click", () => openCollection(item));
    els.featuredCollectionGrid.append(card);
  });
}

function renderCollectionBrowser() {
  els.collectionBrowserGrid.replaceChildren();
  const query = state.query.trim().toLowerCase();
  const visibleItems = collectionBrowserItems.filter((item) => {
    if (!query) return true;
    return `${item.en} ${item.th} ${item.count}`.toLowerCase().includes(query);
  });
  visibleItems.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "collection-browser-card";
    card.innerHTML = `
      <img src="${item.image}" alt="" />
      <span>
        <strong>${item[state.lang]}</strong>
        <small>${item.count} ${state.lang === "th" ? "รายการ" : "items"}</small>
      </span>
    `;
    card.addEventListener("click", () => openCollection(item));
    els.collectionBrowserGrid.append(card);
  });
  if (visibleItems.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = copy[state.lang].noResults;
    els.collectionBrowserGrid.append(empty);
  }
}

function renderArticles() {
  els.articleGrid.replaceChildren();
  articles.forEach((article) => {
    const card = document.createElement("article");
    card.className = "article-card";
    card.innerHTML = `
      <img src="${article.image}" alt="" />
      <span class="article-tag">${state.lang === "th" ? article.tagTh : article.tagEn}</span>
      <h3>${article[state.lang]}</h3>
    `;
    if (article.id) {
      card.classList.add("article-card-clickable");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", article[state.lang]);
      const openArticle = () => {
        const returnScrollY = window.scrollY;
        transitionTo(() => {
          state.articlePreview = article.id;
          state.articleReturnScrollY = returnScrollY;
        }, { scrollTop: true });
      };
      card.addEventListener("click", openArticle);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openArticle();
        }
      });
    }
    els.articleGrid.append(card);
  });
}

function renderArticleDetail() {
  if (state.articlePreview === "popular-color-combinations") {
    const colorPairs = [
      ["Blue & Orange", "#1f5687", "#f5a13a", "น่าเชื่อถือ ตื่นตัว โดดเด่น", "Corporate · Technology · Advertising"],
      ["Navy & Gold", "#173356", "#d8b66d", "หรูหรา มีระดับ พรีเมียม", "Luxury · Executive · Award"],
      ["Teal & Mint", "#168579", "#d0eee6", "ทันสมัย สบายตา สดชื่น", "Health · Wellness · Sustainability"],
      ["Coral & Yellow", "#ea4d70", "#ffca55", "สนุก สดใส เป็นมิตร มีพลัง", "Marketing · Campaign · Lifestyle"],
      ["Purple & Yellow", "#60419a", "#f5ce4d", "สร้างสรรค์ แตกต่าง น่าจดจำ", "Creative · Innovation · Pop Art"],
      ["Black & White", "#252c35", "#f2f2f0", "คลาสสิก เรียบคม ชัดเจน", "Minimal · Editorial · Modern"],
      ["Terracotta & Beige", "#bf6139", "#dec6a5", "อบอุ่น เป็นธรรมชาติ มีรสนิยม", "Organic · Interior · Lifestyle"],
    ];
    const pairCards = colorPairs.map(([name, first, second, mood, use]) => `
      <article class="color-pair-card">
        <div class="color-pair-swatches" aria-hidden="true">
          <span style="background:${first}"></span><span style="background:${second}"></span>
        </div>
        <div><h3>${name}</h3><p>${mood}</p><small>${use}</small></div>
      </article>
    `).join("");

    els.articleDetail.innerHTML = `
      <article class="prompt-guide-article color-guide-article">
        <button class="back-button article-detail-back" type="button">ย้อนกลับ</button>
        <header class="prompt-guide-hero color-guide-hero">
          <div class="prompt-guide-hero-copy">
            <span class="prompt-guide-kicker">COLOR PALETTE &amp; HARMONY</span>
            <h1>Popular Color Combinations</h1>
            <p>คู่สีที่นิยมใช้ในงานออกแบบ</p>
          </div>
          <img src="./color-pairing-hero.png" alt="ภาพวงเกลียวสีรุ้งสำหรับประกอบบทความทฤษฎีสี" />
        </header>

        <div class="prompt-guide-content color-guide-content">
          <p class="prompt-guide-lead">คู่สีเหล่านี้เป็นชุดสีที่พบได้บ่อยในงาน Branding, Advertising, Presentation และ Digital Design เพราะมีบุคลิกและการใช้งานที่ชัดเจน</p>

          <section class="color-pairs-section">
            <h2>Popular Color Combinations</h2>
            <div class="color-pair-list">${pairCards}</div>
          </section>

          <section>
            <h2>ทฤษฎีสีและการจับคู่สีอย่างมืออาชีพ</h2>
            <p>สีเป็นเครื่องมือสำคัญในการสื่อสารอารมณ์ สร้างจุดสนใจ และกำหนดบุคลิกของงานออกแบบ การเลือกสีที่เหมาะสมช่วยให้ Presentation, Advertising และ Branding ดูโดดเด่นและสื่อสารได้ดีขึ้น</p>
          </section>

          <section>
            <h2>1. Color Fundamentals</h2>
            <ul>
              <li><strong>Hue</strong> — ชนิดของสี เช่น แดง น้ำเงิน เขียว</li>
              <li><strong>Saturation</strong> — ความสดหรือความหม่นของสี</li>
              <li><strong>Value</strong> — ความสว่างและความมืดของสี</li>
            </ul>
            <p>การปรับทั้ง 3 องค์ประกอบช่วยสร้าง Mood &amp; Tone ให้แตกต่างกัน แม้จะใช้สีพื้นฐานเดียวกัน</p>
          </section>

          <section>
            <h2>2. Color Harmony</h2>
            <ul>
              <li><strong>Monochromatic</strong> — สีเดียวหลายระดับ เหมาะกับงาน Minimal และ Luxury</li>
              <li><strong>Analogous</strong> — สีใกล้เคียงกัน ให้ความกลมกลืนและสบายตา</li>
              <li><strong>Complementary</strong> — สีคู่ตรงข้าม เพิ่มความโดดเด่นและ Contrast</li>
              <li><strong>Split Complementary</strong> — สีหลักกับสีใกล้คู่ตรงข้าม ให้ความสมดุล</li>
              <li><strong>Triadic</strong> — 3 สีที่กระจายเท่ากัน ให้ความสดใสและมีพลัง</li>
              <li><strong>Tetradic</strong> — 4 สีที่สร้างความหลากหลาย เหมาะกับงาน Creative</li>
            </ul>
          </section>

          <section>
            <h2>3. Popular Color Combinations</h2>
            <p>คู่สีที่นิยมใช้ใน Branding, Advertising, Presentation และ Digital Design</p>
            <ul class="color-combination-summary">
              <li><strong>Blue &amp; Orange</strong> — น่าเชื่อถือ มีพลัง</li>
              <li><strong>Navy &amp; Gold</strong> — หรูหรา มีระดับ</li>
              <li><strong>Teal &amp; Mint</strong> — ทันสมัย สดชื่น</li>
              <li><strong>Coral &amp; Yellow</strong> — สนุก สดใส</li>
              <li><strong>Purple &amp; Yellow</strong> — Creative, Pop Art</li>
              <li><strong>Black &amp; White</strong> — เรียบคม คลาสสิก</li>
              <li><strong>Terracotta &amp; Beige</strong> — อบอุ่น เป็นธรรมชาติ</li>
            </ul>
          </section>

          <section>
            <h2>4. Beautiful Contrast — คู่สีตัดกัน</h2>
            <div class="color-table-wrap"><table class="color-contrast-table">
              <thead><tr><th>คู่สี</th><th>Mood</th></tr></thead>
              <tbody>
                <tr><td>Blue &amp; Orange</td><td>Professional, Energy</td></tr>
                <tr><td>Purple &amp; Yellow</td><td>Creative, Bold</td></tr>
                <tr><td>Black &amp; Yellow</td><td>Strong, High Impact</td></tr>
                <tr><td>Red &amp; Cyan</td><td>Dynamic, Contemporary</td></tr>
                <tr><td>Green &amp; Pink</td><td>Unique, Sophisticated</td></tr>
                <tr><td>Blue &amp; Lime</td><td>Futuristic, Technology</td></tr>
              </tbody>
            </table></div>
            <p class="color-technique"><strong>เทคนิค:</strong> หากสีตัดกันแรงเกินไป ให้ลดความสดของสีใดสีหนึ่ง หรือใช้สีขาว เทา ดำ ช่วยสร้างสมดุล</p>
          </section>

          <section>
            <h2>5. Warm &amp; Cool Colors</h2>
            <div class="temperature-cards">
              <div class="warm-card"><h3>Warm Colors</h3><strong>แดง ส้ม เหลือง</strong><p>อบอุ่น มีพลัง ดึงดูดความสนใจ</p></div>
              <div class="cool-card"><h3>Cool Colors</h3><strong>น้ำเงิน เขียว ม่วง</strong><p>สงบ สุขุม สบายตา น่าเชื่อถือ</p></div>
            </div>
          </section>

          <section>
            <h2>6. Color Ratio — กฎ 60–30–10</h2>
            <ul>
              <li><strong>60% Dominant</strong> — สีหลัก ใช้กับพื้นหลังหรือพื้นที่ส่วนใหญ่</li>
              <li><strong>30% Secondary</strong> — สีรอง ใช้สร้างมิติ</li>
              <li><strong>10% Accent</strong> — สีเน้น ใช้กับ Headline หรือจุดสำคัญ</li>
            </ul>
            <p class="prompt-example"><strong>ตัวอย่าง:</strong> White 60% + Navy 30% + Orange 10%</p>
          </section>

          <section>
            <h2>7. RGB, CMYK &amp; Pantone</h2>
            <ul>
              <li><strong>RGB</strong> — ใช้กับหน้าจอ Website, Presentation และ Social Media</li>
              <li><strong>CMYK</strong> — ใช้กับงานพิมพ์ เช่น Poster, Packaging และ Brochure</li>
              <li><strong>Pantone</strong> — ระบบรหัสสีมาตรฐาน ช่วยควบคุมสีให้ตรงกันระหว่าง Designer และผู้ผลิต</li>
            </ul>
            <p>สีบนหน้าจออาจแตกต่างจากงานพิมพ์จริง จึงควรตรวจสอบตัวอย่างสีเมื่อผลิตงาน</p>
          </section>
        </div>
      </article>
    `;

    els.articleDetail.querySelector(".article-detail-back").addEventListener("click", () => {
      const returnScrollY = state.articleReturnScrollY;
      transitionTo(() => { state.articlePreview = null; });
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => window.scrollTo({ top: returnScrollY, behavior: "auto" }));
      });
    });
    return;
  }

  if (state.articlePreview === "mood-tone-creative-guide") {
    els.articleDetail.innerHTML = `
      <article class="prompt-guide-article mood-tone-article">
        <button class="back-button article-detail-back" type="button">ย้อนกลับ</button>
        <header class="prompt-guide-hero mood-tone-hero">
          <div class="prompt-guide-hero-copy">
            <span class="prompt-guide-kicker">CREATIVE VISUAL GUIDE</span>
            <h1>MOOD &amp; TONE</h1>
            <p>กำหนดอารมณ์ เปลี่ยนความรู้สึกของภาพ</p>
          </div>
          <img src="./mood-tone-hero-collage.png" alt="ภาพศิลปะคอลลาจโทนสีฟ้า แดง ขาว และดำ" />
        </header>

        <div class="prompt-guide-content">
          <p class="prompt-guide-lead">Mood &amp; Tone คือการกำหนดอารมณ์และบุคลิกของภาพ เพื่อให้ภาพสื่อสารไปในทิศทางเดียวกัน และสร้างความรู้สึกที่ต้องการให้ผู้ชมรับรู้</p>

          <div class="mood-tone-definition">
            <p><strong>Mood</strong> = ภาพให้อารมณ์แบบไหน เช่น สนุก จริงจัง อบอุ่น หรือน่าเชื่อถือ</p>
            <p><strong>Tone</strong> = ภาพมีลักษณะการนำเสนอแบบไหน เช่น สีสด สีพาสเทล มืด เท่ เรียบหรู หรือ Pop Art</p>
          </div>

          <section>
            <h2>1. Mood &amp; Tone ที่นิยมใช้</h2>
            <div class="mood-tone-types">
              <div><h3>Modern &amp; Clean</h3><p>ทันสมัย สะอาด เรียบง่าย เหมาะกับงานเทคโนโลยีและองค์กร</p></div>
              <div><h3>Energetic &amp; Dynamic</h3><p>สดใส สนุก มีพลัง เหมาะกับงานโฆษณา โปรโมชั่น และกิจกรรม</p></div>
              <div><h3>Trust &amp; Professional</h3><p>น่าเชื่อถือ สุขุม เป็นมืออาชีพ เหมาะกับงานธุรกิจและการนำเสนอผู้บริหาร</p></div>
              <div><h3>Sustainable &amp; Green</h3><p>ธรรมชาติ เป็นมิตร รักษ์โลก เหมาะกับงาน ESG และความยั่งยืน</p></div>
              <div><h3>Warm &amp; Friendly</h3><p>อบอุ่น เข้าถึงง่าย เป็นกันเอง เหมาะกับงานสื่อสารกับลูกค้าและบุคลากร</p></div>
              <div><h3>Creative &amp; Playful</h3><p>สร้างสรรค์ แปลกใหม่ สนุก เหมาะกับงานไอเดียและงานออกแบบ</p></div>
            </div>
          </section>

          <section>
            <h2>2. นำ Mood &amp; Tone ไปใช้กับ Prompt อย่างไร?</h2>
            <p>เพียงเพิ่มคำอธิบาย Mood &amp; Tone เข้าไปใน Prompt เพื่อควบคุมทิศทางภาพ เช่น อารมณ์ สี แสง และรูปแบบการออกแบบ</p>
            <div class="prompt-sample">
              <h3>ตัวอย่าง Prompt</h3>
              <pre>Create a modern corporate presentation visual about business innovation. Use a clean, professional and confident mood, blue and white color palette, minimal composition, soft lighting, modern geometric elements and premium corporate style. 16:9.</pre>
            </div>
          </section>

          <section>
            <h2>3. เทคนิคการเลือก Mood &amp; Tone</h2>
            <ul>
              <li>เลือกอารมณ์ให้เหมาะกับเนื้อหาและกลุ่มเป้าหมาย</li>
              <li>กำหนดโทนสีหลักประมาณ 2–4 สี เพื่อให้ภาพดูเป็นระเบียบ</li>
              <li>ใช้ภาพ แสง และองค์ประกอบที่สอดคล้องกับอารมณ์ที่ต้องการ</li>
              <li>หลีกเลี่ยงการผสมหลายสไตล์จนภาพขาดทิศทาง</li>
              <li>หากเป็น Presentation ควรใช้ Mood &amp; Tone เดียวกันตลอดทั้งชุด เพื่อให้ทุกสไลด์ดูเป็นเอกภาพ</li>
            </ul>
          </section>

          <aside class="professional-tip mood-tone-tip">
            <span>PROFESSIONAL TIP</span>
            <strong>Choose the Mood. Define the Tone. Create the Visual.</strong>
            <p>เลือกอารมณ์ที่ต้องการ สร้างทิศทางให้ชัดเจน แล้วปล่อยให้ AI ช่วยถ่ายทอดไอเดียออกมาเป็นภาพ</p>
          </aside>
        </div>
      </article>
    `;

    els.articleDetail.querySelector(".article-detail-back").addEventListener("click", () => {
      const returnScrollY = state.articleReturnScrollY;
      transitionTo(() => {
        state.articlePreview = null;
      });
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => window.scrollTo({ top: returnScrollY, behavior: "auto" }));
      });
    });
    return;
  }

  els.articleDetail.innerHTML = `
    <article class="prompt-guide-article">
      <button class="back-button article-detail-back" type="button">ย้อนกลับ</button>
      <header class="prompt-guide-hero">
        <div class="prompt-guide-hero-copy">
          <span class="prompt-guide-kicker">AI PROMPT GUIDE</span>
          <h1>AI PRESENTATION PROMPT GUIDE</h1>
          <p>คู่มือการใช้ Prompt สร้างสไลด์นำเสนออย่างมืออาชีพ</p>
        </div>
        <img src="./ai-presentation-prompt-guide.png" alt="ผู้ใช้งาน AI วิเคราะห์แดชบอร์ดธุรกิจ" />
      </header>

      <div class="prompt-guide-content">
        <p class="prompt-guide-lead">การสร้างสไลด์ด้วย AI ให้สวยและสื่อสารได้ดี ไม่ใช่แค่การบอกให้ AI ออกแบบสไลด์ แต่ต้องกำหนดเนื้อหา ลำดับความสำคัญของข้อความ และรูปแบบการจัดวางให้ชัดเจน</p>

        <section>
          <h2>1. รู้จักองค์ประกอบสำคัญของสไลด์</h2>
          <p>ก่อนเขียน Prompt ควรรู้จักองค์ประกอบพื้นฐาน 5 ส่วน</p>
          <h3>1. Headline (หัวข้อหลัก)</h3>
          <p>ข้อความสำคัญที่สุดของสไลด์ ต้องสั้น กระชับ และสื่อสารประเด็นหลักได้ทันที</p>
          <p class="prompt-example"><strong>ตัวอย่าง:</strong> “Driving Business Growth Through Innovation”</p>
          <h3>2. Subhead (หัวข้อรอง)</h3>
          <p>ข้อความขยายความ Headline เพื่อให้ผู้อ่านเข้าใจเนื้อหามากขึ้น</p>
          <p class="prompt-example"><strong>ตัวอย่าง:</strong> “ยกระดับองค์กรด้วยเทคโนโลยีและนวัตกรรมเพื่อการเติบโตอย่างยั่งยืน”</p>
          <h3>3. Supporting Text (ข้อความสนับสนุน)</h3>
          <p>รายละเอียดเพิ่มเติม เช่น คำอธิบาย ตัวเลข หรือข้อมูลสำคัญ ควรใช้ข้อความสั้น อ่านง่าย</p>
          <h3>4. Visual (ภาพประกอบ)</h3>
          <p>ภาพถ่าย ภาพกราฟิก ไอคอน หรือ Infographic ที่ช่วยอธิบายเนื้อหา</p>
          <h3>5. Layout (รูปแบบการจัดวาง)</h3>
          <p>ตำแหน่งข้อความ ภาพประกอบ พื้นที่ว่าง และลำดับการอ่านของสไลด์</p>
        </section>

        <section>
          <h2>2. เทคนิคการเขียน Prompt สำหรับสร้างสไลด์</h2>
          <p>ระบุรายละเอียดให้ครบ 6 ข้อ</p>
          <ol>
            <li><strong>Slide Purpose:</strong> สไลด์นี้สร้างขึ้นเพื่ออะไร เช่น เปิดการนำเสนอ สรุปผล หรือแสดงกลยุทธ์</li>
            <li><strong>Headline:</strong> กำหนดหัวข้อหลักให้ชัดเจน</li>
            <li><strong>Subhead:</strong> เขียนข้อความขยายความให้เข้าใจง่าย</li>
            <li><strong>Key Content:</strong> ระบุข้อมูลสำคัญที่ต้องการนำเสนอ</li>
            <li><strong>Visual Direction:</strong> กำหนดภาพประกอบ สี และสไตล์การออกแบบ</li>
            <li><strong>Layout &amp; Format:</strong> กำหนดตำแหน่งองค์ประกอบและขนาดสไลด์ เช่น 16:9</li>
          </ol>
        </section>

        <section>
          <h2>3. คำศัพท์ที่ควรรู้สำหรับการออกแบบสไลด์</h2>
          <ul class="prompt-guide-terms">
            <li><strong>Clean Layout</strong> – การจัดวางที่สะอาด ไม่รก</li>
            <li><strong>Minimal Design</strong> – การออกแบบเรียบง่าย</li>
            <li><strong>Visual Hierarchy</strong> – การจัดลำดับความสำคัญของข้อมูล</li>
            <li><strong>Negative Space</strong> – พื้นที่ว่างรอบข้อความและภาพ</li>
            <li><strong>Two-column Layout</strong> – การจัดวางแบบ 2 คอลัมน์</li>
            <li><strong>Full-bleed Image</strong> – ภาพเต็มพื้นที่สไลด์</li>
            <li><strong>Infographic</strong> – การนำเสนอข้อมูลด้วยภาพ</li>
            <li><strong>Data Visualization</strong> – การแสดงข้อมูลในรูปแบบกราฟ</li>
            <li><strong>Consistent Typography</strong> – การใช้รูปแบบตัวอักษรที่สม่ำเสมอ</li>
          </ul>
        </section>

        <section>
          <h2>4. ตัวอย่าง Prompt สำหรับนำไปใช้งาน</h2>
          <div class="prompt-sample">
            <h3>ตัวอย่างที่ 1: สไลด์เปิดการนำเสนอ (Title Slide)</h3>
            <pre>Create a professional corporate presentation cover slide.

Headline: "Driving Business Growth"

Subhead: "Innovation, Technology and Sustainable Development"

Use a premium corporate design, modern typography, sophisticated blue and white color palette, elegant visual elements and balanced composition.

Place the headline prominently with the subhead directly below. Use a professional business-related background image.

16:9 widescreen presentation format.</pre>
          </div>
          <div class="prompt-sample">
            <h3>ตัวอย่างที่ 2: สไลด์นำเสนอข้อมูล (Content Slide)</h3>
            <pre>Create a modern corporate presentation slide.

Headline: "Our Strategic Priorities"

Subhead: "Three key directions for sustainable business growth"

Key Content:
1. Business Innovation
2. Operational Excellence
3. Customer Experience

Use a clean three-column layout with a simple icon or visual illustration for each topic. Keep text short and easy to read. Use consistent typography, balanced spacing and a professional corporate style.

16:9 widescreen format.</pre>
          </div>
          <div class="prompt-sample">
            <h3>ตัวอย่างที่ 3: สไลด์แสดงข้อมูล (Infographic Slide)</h3>
            <pre>Create a professional business infographic presentation slide.

Headline: "Our Business Performance"

Subhead: "Key achievements and growth indicators"

Present three key metrics:
- Revenue Growth: 25%
- Customer Satisfaction: 95%
- Operational Efficiency: 90%

Use large numerical highlights, clear data visualization, simple icons and clean visual hierarchy. Make all figures easy to read and visually prominent.

16:9 widescreen format.</pre>
          </div>
        </section>

        <section>
          <h2>5. เคล็ดลับการสร้างสไลด์ให้ดูเป็นมืออาชีพ</h2>
          <ul>
            <li>Headline ควรสั้นและโดดเด่น อ่านแล้วเข้าใจทันที</li>
            <li>Subhead ควรช่วยอธิบายหัวข้อหลัก ไม่ควรยาวเกินไป</li>
            <li>หนึ่งสไลด์ควรมีประเด็นสำคัญเพียงหนึ่งเรื่อง</li>
            <li>หลีกเลี่ยงข้อความยาวและรายละเอียดที่ไม่จำเป็น</li>
            <li>ใช้ภาพประกอบที่สัมพันธ์กับเนื้อหา ไม่ใช่เพียงเพื่อความสวยงาม</li>
            <li>กำหนดสีและรูปแบบตัวอักษรให้เหมือนกันทุกสไลด์</li>
            <li>ตรวจสอบความถูกต้องของข้อความ ตัวเลข และข้อมูลก่อนนำเสนอ</li>
          </ul>
        </section>

        <aside class="professional-tip">
          <span>PROFESSIONAL TIP</span>
          <strong>One Slide. One Message. One Clear Story.</strong>
          <p>สไลด์ที่ดีไม่จำเป็นต้องมีข้อมูลมากที่สุด แต่ต้องทำให้ผู้ชมเข้าใจประเด็นสำคัญได้รวดเร็วที่สุดครับ</p>
        </aside>

        <p class="prompt-guide-closing">เริ่มจากกำหนด Headline ให้ชัดเจน ตามด้วย Subhead และข้อมูลสนับสนุน จากนั้นจึงใช้ Prompt สั่ง AI ออกแบบภาพและจัดวางองค์ประกอบให้เหมาะสม เพียงเท่านี้คุณก็จะสามารถสร้างผลงานที่ตรงใจและง่ายสำหรับคุณ</p>
      </div>
    </article>
  `;

  els.articleDetail.querySelector(".article-detail-back").addEventListener("click", () => {
    const returnScrollY = state.articleReturnScrollY;
    transitionTo(() => {
      state.articlePreview = null;
    });
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => window.scrollTo({ top: returnScrollY, behavior: "auto" }));
    });
  });
}

function renderHomePage() {
  renderHomeAssets();
  renderHomeMasonry();
  renderCollections();
  renderArticles();
}

function renderMainMenu() {
  els.mainMenu.replaceChildren();
  mainMenus.forEach((menu, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `menu-pill${state.main === menu.id ? " active" : ""}${index === 0 ? " plain" : ""}`;
    button.textContent = menu[state.lang];
    button.addEventListener("click", () => {
      transitionTo(() => {
        state.main = menu.id;
        state.view = menu.id === "main" ? "home" : "browse";
        if (menu.id !== "main") {
          state.sub = firstSubFor(menu.id);
        }
        state.logoPreview = null;
        state.templatePreview = null;
        state.articlePreview = null;
        state.madeWithUsExpanded = false;
        state.businessInfographicExpanded = false;
        state.businessCoverVisibleCount = 30;
        state.businessTimelineVisibleCount = 30;
        state.query = "";
        els.search.value = "";
      });
    });
    els.mainMenu.append(button);
  });
}

function renderSubMenu() {
  els.subMenu.replaceChildren();
  const activeMain = state.main === "main" ? "business" : state.main;
  getSubMenus(activeMain).forEach((menu) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `sub-pill${state.sub === menu.id ? " active" : ""}`;
    button.textContent = menu[state.lang];
    button.addEventListener("click", () => {
      transitionTo(() => {
        state.main = activeMain;
        state.view = "browse";
        state.sub = menu.id;
        state.logoPreview = null;
        state.templatePreview = null;
        state.articlePreview = null;
        state.madeWithUsExpanded = false;
        state.businessInfographicExpanded = false;
        state.businessCoverVisibleCount = 30;
        state.businessTimelineVisibleCount = 30;
        state.query = "";
        els.search.value = "";
      });
    });
    els.subMenu.append(button);
  });
}

function renderGrid() {
  if (isLogoLibrary()) {
    renderLogoLibrary();
    return;
  }

  const templates = makeTemplates();
  const selectedTemplate = templates.find((item) => item.id === state.templatePreview);
  els.homeBack.hidden = Boolean(selectedTemplate && isPromptTemplateDetailAvailable(selectedTemplate));
  els.grid.replaceChildren();
  els.grid.className = [
    "browse-grid",
    state.sub === "boardExecutives" ? "board-executive-grid" : "",
    state.sub === "productBusiness" ? "product-business-grid" : "",
    state.sub === "marketingMaterials" ? "awards-standards-grid" : "",
  ].filter(Boolean).join(" ");
  els.activeTitle.textContent = label(mainMenus, state.main);
  els.activeSubtitle.textContent = selectedTemplate ? selectedTemplate.title : subLabel(state.sub, state.main);

  if (selectedTemplate && isPromptTemplateDetailAvailable(selectedTemplate)) {
    setBrowseExtrasHidden(true);
    renderTemplateDetail(selectedTemplate);
    return;
  }

  if (selectedTemplate && isDownloadTemplateDetailAvailable(selectedTemplate)) {
    setBrowseExtrasHidden(true);
    renderTemplateDownloadDetail(selectedTemplate);
    return;
  }

  setBrowseExtrasHidden(false);

  const isMadeWithUsGallery = state.main === "corporate" && state.sub === "madeWithUs";
  const isBusinessInfographicGallery = state.main === "business" && state.sub === "infographic";
  const isBusinessCoverGallery = state.main === "business" && state.sub === "cover";
  const isBusinessTimelineGallery = state.main === "business" && state.sub === "timeline";
  const isCollapsedGallery = (isMadeWithUsGallery && !state.madeWithUsExpanded)
    || (isBusinessInfographicGallery && !state.businessInfographicExpanded);
  const visibleTemplates = isBusinessCoverGallery
    ? templates.slice(0, state.businessCoverVisibleCount)
    : isBusinessTimelineGallery
      ? templates.slice(0, state.businessTimelineVisibleCount)
    : isCollapsedGallery
      ? templates.slice(0, 30)
      : templates;
  const hasMoreBusinessCovers = isBusinessCoverGallery
    && state.businessCoverVisibleCount < templates.length;
  const hasMoreBusinessTimeline = isBusinessTimelineGallery
    && state.businessTimelineVisibleCount < templates.length;
  els.browseMore.hidden = !(
    hasMoreBusinessCovers
    || hasMoreBusinessTimeline
    || (isCollapsedGallery && templates.length > 30)
  );

  visibleTemplates.forEach((item) => {
    const card = document.createElement("button");
    const isExecutivePhoto = item.subId === "boardExecutives";
    const isProductBusiness = item.subId === "productBusiness";
    const isAwardsStandards = item.subId === "marketingMaterials";
    const isMadeWithUs = item.subId === "madeWithUs";
    const isBusinessCover = item.menuId === "business" && item.subId === "cover";
    const isBusinessInfographic = item.menuId === "business" && item.subId === "infographic";
    const isBusinessTimeline = item.menuId === "business" && item.subId === "timeline";
    card.className = [
      "browse-card",
      isExecutivePhoto ? "board-executive-card" : "",
      isProductBusiness ? "product-business-card" : "",
      isAwardsStandards ? "awards-standards-card" : "",
      isMadeWithUs ? "made-with-us-card" : "",
      isBusinessCover ? "made-with-us-card business-cover-card" : "",
      isBusinessInfographic ? "made-with-us-card business-infographic-card" : "",
      isBusinessTimeline ? "made-with-us-card business-timeline-card" : "",
    ].filter(Boolean).join(" ");
    card.type = "button";
    card.dataset.templateId = item.id;
    card.setAttribute("aria-label", `${item.menu} ${item.category} ${item.title}`);
    card.innerHTML = isExecutivePhoto
      ? `<img src="${item.image}" alt="${item.title}" /><span class="board-executive-name">${item.title}</span>`
      : isMadeWithUs || isBusinessCover || isBusinessInfographic || isBusinessTimeline
        ? `<img src="${item.image}" alt="${item.title}" /><span class="made-with-us-name">${item.title}</span>`
        : `<img src="${item.image}" alt="${item.title}" />`;
    if (isPromptTemplateDetailAvailable(item) || isDownloadTemplateDetailAvailable(item)) {
      card.addEventListener("click", () => {
        const galleryReturnPosition = {
          itemId: item.id,
          scrollY: window.scrollY,
          viewportTop: card.getBoundingClientRect().top,
          main: state.main,
          sub: state.sub,
          madeWithUsExpanded: state.madeWithUsExpanded,
          businessInfographicExpanded: state.businessInfographicExpanded,
          businessCoverVisibleCount: state.businessCoverVisibleCount,
          businessTimelineVisibleCount: state.businessTimelineVisibleCount,
        };
        transitionTo(() => {
          state.galleryReturnPosition = galleryReturnPosition;
          state.templatePreview = item.id;
        }, { scrollTop: true });
      });
    }
    els.grid.append(card);
  });
  if (visibleTemplates.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = copy[state.lang].noResults;
    els.grid.append(empty);
  }
  renderFeaturedCollections();
}

function copyText(text, button) {
  const doneText = state.lang === "th" ? "คัดลอกแล้ว" : "Copied";
  const defaultText = button.textContent;
  const markDone = () => {
    button.textContent = doneText;
    window.setTimeout(() => {
      button.textContent = defaultText;
    }, 1400);
  };
  const copyWithTextarea = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-999px";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    markDone();
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(markDone).catch(copyWithTextarea);
    return;
  }

  copyWithTextarea();
}

function base64ToBlob(base64Data, mimeType) {
  const binary = window.atob(base64Data);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new Blob([bytes], { type: mimeType });
}

function getPreviewDownloadFileName(item) {
  const imagePath = item.image.split("?")[0].split("#")[0];
  const extension = imagePath.includes(".")
    ? imagePath.split(".").pop().toLowerCase()
    : "png";
  const safeExtension = ["jpg", "jpeg", "png", "webp"].includes(extension) ? extension : "png";
  const safeCode = (item.code || "template").toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  const safeId = (item.id || "preview").toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  return `${safeCode}-${safeId}-preview.${safeExtension}`;
}

async function downloadPreviewAsset(item) {
  const imagePath = item.image.split("?")[0].split("#")[0];
  const assetName = imagePath.split("/").pop();
  const fileName = getPreviewDownloadFileName(item);
  const extension = fileName.split(".").pop().toLowerCase();

  const startDownload = (href, revokeDelay = 0) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    if (revokeDelay > 0) {
      window.setTimeout(() => URL.revokeObjectURL(href), revokeDelay);
    }
  };

  const saveBlob = (blob) => {
    startDownload(URL.createObjectURL(blob), 1000);
  };

  const saveEmbeddedAsset = () => {
    const embeddedAsset = window.previewDownloadData?.[assetName]
      || window.templateDownloadData?.[assetName]
      || window.templateDownloadData?.[fileName];
    if (!embeddedAsset) return false;

    if (typeof embeddedAsset === "string") {
      startDownload(embeddedAsset);
      return true;
    }

    if (embeddedAsset.mimeType && embeddedAsset.data) {
      saveBlob(base64ToBlob(embeddedAsset.data, embeddedAsset.mimeType));
      return true;
    }

    return false;
  };

  const saveFromCanvas = () =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        const type = safeExtension === "jpg" || safeExtension === "jpeg" ? "image/jpeg" : "image/png";
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Could not prepare preview download"));
            return;
          }
          startDownload(URL.createObjectURL(blob), 1000);
          resolve();
        }, type, 0.98);
      };
      image.onerror = () => reject(new Error("Could not load preview image"));
      image.src = item.image;
    });

  if (saveEmbeddedAsset()) return;

  try {
    const response = await fetch(item.image);
    if (!response.ok) {
      throw new Error("Preview download request failed");
    }
    startDownload(URL.createObjectURL(await response.blob()), 1000);
  } catch (error) {
    try {
      await saveFromCanvas();
    } catch (canvasError) {
      startDownload(item.image);
    }
  }
}

function renderTemplateDetail(item) {
  els.grid.className = "template-detail-wrap";
  const title = `${item.title} Template`;
  const previewFileName = getPreviewDownloadFileName(item);
  const detail = document.createElement("article");
  detail.className = "template-detail";
  detail.innerHTML = `
    <div class="template-detail-main">
      <button class="back-button template-back" type="button">${
        state.lang === "th" ? "กลับไปยังหน้าหลัก" : "Back to templates"
      }</button>
      <header class="template-detail-title">
        <h2>${title}</h2>
      </header>
      <figure class="template-preview-figure">
        <img src="${item.image}" alt="${title}" />
        <div class="template-preview-actions">
          <span class="template-preview-filename">${item.code}</span>
          <a class="template-preview-download" href="${item.image}" download="${previewFileName}" aria-label="${
            state.lang === "th" ? `ดาวน์โหลดภาพตัวอย่าง ${item.code}` : `Download preview image ${item.code}`
          }">
            <img src="./download-icon-cropped.png" alt="" aria-hidden="true" />
          </a>
        </div>
      </figure>
    </div>
    <aside class="template-prompt-panel">
      <section class="prompt-card">
        <h3>${state.lang === "th" ? "Prompt (คำสั่งสำหรับ AI)" : "Prompt for AI"}</h3>
        <div class="prompt-copy-box">
          <p>${item.prompt}</p>
          <button class="prompt-copy" type="button">${
            state.lang === "th" ? "คัดลอก Prompt" : "Copy Prompt"
          }</button>
        </div>
      </section>
      <section class="prompt-form-section">
        <h3>${state.lang === "th" ? "ปรับแต่งข้อความ (Edit Text)" : "Edit Text"}</h3>
        <label>
          <span>Headline</span>
          <input class="prompt-field" data-token="headline" placeholder="${
            state.lang === "th" ? "ใส่หัวข้อหลักที่นี่" : "Add headline here"
          }" />
        </label>
        <label>
          <span>Subhead</span>
          <textarea class="prompt-field" data-token="subhead" placeholder="${
            state.lang === "th" ? "ใส่คำอธิบายที่นี่" : "Add description here"
          }"></textarea>
        </label>
        <label>
          <span>Footnote</span>
          <input class="prompt-field" data-token="footnote" placeholder="${
            state.lang === "th" ? "ใส่ข้อมูลเพิ่มเติมที่นี่" : "Add footnote here"
          }" />
        </label>
        <label>
          <span>Logo Position</span>
          <select class="prompt-field" data-token="logo">
            <option>Bottom Right</option>
            <option>Bottom Left</option>
            <option>Top Right</option>
            <option>Top Left</option>
          </select>
        </label>
        <label>
          <span>Image Position</span>
          <select class="prompt-field" data-token="image">
            <option>Right Side</option>
            <option>Left Side</option>
            <option>Center</option>
            <option>Full Background</option>
          </select>
        </label>
        <button class="generate-button" type="button">${
          state.lang === "th" ? "สร้างภาพด้วย AI" : "Generate with AI"
        }</button>
        <div class="generation-status" aria-live="polite" hidden></div>
      </section>
    </aside>
  `;

  const promptText = item.prompt;
  detail.querySelector(".template-back").addEventListener("click", () => {
    const returnPosition = state.galleryReturnPosition;
    transitionTo(() => {
      state.templatePreview = null;
      if (returnPosition) {
        state.main = returnPosition.main;
        state.sub = returnPosition.sub;
        state.madeWithUsExpanded = returnPosition.madeWithUsExpanded;
        state.businessInfographicExpanded = returnPosition.businessInfographicExpanded;
        state.businessCoverVisibleCount = returnPosition.businessCoverVisibleCount ?? 30;
        state.businessTimelineVisibleCount = returnPosition.businessTimelineVisibleCount ?? 30;
      }
    }, { restoreGalleryPosition: returnPosition });
  });
  detail.querySelector(".prompt-copy").addEventListener("click", (event) => {
    copyText(promptText, event.currentTarget);
  });
  detail.querySelector(".generate-button").addEventListener("click", () => {
    const fields = Object.fromEntries(
      [...detail.querySelectorAll(".prompt-field")].map((field) => [field.dataset.token, field.value.trim()])
    );
    const finalPrompt = `${promptText}
Headline: ${fields.headline || "[HEADLINE]"}
Subhead: ${fields.subhead || "[SUBHEAD]"}
Footnote: ${fields.footnote || "[FOOTNOTE]"}
Logo position: ${fields.logo}
Image position: ${fields.image}`;
    const status = detail.querySelector(".generation-status");
    status.hidden = false;
    status.textContent = state.lang === "th"
      ? "จัดลำดับคำสั่งเรียบร้อย พร้อมส่งต่อให้ AI ที่เชื่อมต่อกับเว็บ"
      : "Prompt sequence is ready for the connected AI workflow.";
    copyText(finalPrompt, detail.querySelector(".generate-button"));
  });

  appendRandomReviewGallery(detail.querySelector(".template-detail-main"), item);

  els.grid.append(detail);
}

async function downloadTemplateAsset(item) {
  const startDownload = (href, revokeDelay = 0) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = item.fileName;
    document.body.append(link);
    link.click();
    link.remove();
    if (revokeDelay > 0) {
      window.setTimeout(() => URL.revokeObjectURL(href), revokeDelay);
    }
  };

  const saveBlob = (blob) => {
    startDownload(URL.createObjectURL(blob), 1000);
  };

  const saveEmbeddedAsset = () => {
    const embeddedAsset = window.templateDownloadData?.[item.fileName];
    if (!embeddedAsset) return false;

    if (typeof embeddedAsset === "string") {
      startDownload(embeddedAsset);
      return true;
    }

    if (embeddedAsset.mimeType && embeddedAsset.data) {
      saveBlob(base64ToBlob(embeddedAsset.data, embeddedAsset.mimeType));
      return true;
    }

    return false;
  };

  const saveFromCanvas = () =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        const type = item.fileName.toLowerCase().endsWith(".jpg") || item.fileName.toLowerCase().endsWith(".jpeg")
          ? "image/jpeg"
          : "image/png";
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Could not prepare template download"));
            return;
          }
          saveBlob(blob);
          resolve();
        }, type, 0.98);
      };
      image.onerror = () => reject(new Error("Could not load template image"));
      image.src = item.image;
    });

  try {
    const response = await fetch(item.image);
    if (!response.ok) {
      throw new Error("Template download request failed");
    }
    saveBlob(await response.blob());
  } catch (error) {
    if (saveEmbeddedAsset()) return;

    try {
      await saveFromCanvas();
    } catch (canvasError) {
      startDownload(item.image);
    }
  }
}

function renderTemplateDownloadDetail(item) {
  els.grid.className = "browse-grid logo-preview-wrap";
  const detail = document.createElement("article");
  detail.className = "logo-preview";
  const isExecutivePhoto = item.subId === "boardExecutives";
  const previewStageClass = [
    "logo-preview-stage",
    "template-download-stage",
    isExecutivePhoto ? "executive-preview-stage" : "",
    item.id ? `preview-${item.id}` : "",
  ].filter(Boolean).join(" ");
  detail.innerHTML = `
    <div class="logo-preview-toolbar">
      <button class="back-button template-download-back" type="button">${
        state.lang === "th" ? "ย้อนกลับไปดูภาพทั้งหมด" : "Back to all photos"
      }</button>
      <a class="download-button" href="${item.image}" download="${item.fileName}" aria-label="${
        state.lang === "th" ? `ดาวน์โหลด ${item.title}` : `Download ${item.title}`
      }">
        <span class="download-symbol" aria-hidden="true">↓</span>
        ${state.lang === "th" ? "ดาวน์โหลด" : "Download"}
      </a>
    </div>
    <div class="${previewStageClass}">
      <img src="${item.image}" alt="${item.title}" />
    </div>
  `;
  detail.querySelector(".template-download-back").addEventListener("click", () => {
    const returnPosition = state.galleryReturnPosition;
    transitionTo(() => {
      state.templatePreview = null;
      if (returnPosition) {
        state.main = returnPosition.main;
        state.sub = returnPosition.sub;
      }
    }, { restoreGalleryPosition: returnPosition });
  });
  appendRandomReviewGallery(detail, item);
  els.grid.append(detail);
}

function renderLogoLibrary() {
  const selectedLogo = logoItems.find((item) => item.id === state.logoPreview);
  els.grid.replaceChildren();
  setBrowseExtrasHidden(true);
  els.activeTitle.textContent = label(mainMenus, state.main);
  els.activeSubtitle.textContent = selectedLogo ? selectedLogo.title : subLabel(state.sub, state.main);

  if (selectedLogo) {
    renderLogoPreview(selectedLogo);
    return;
  }

  const query = state.query.trim().toLowerCase();
  const visibleLogos = query
    ? logoItems.filter((item) => item.title.toLowerCase().includes(query))
    : logoItems;

  els.grid.className = "browse-grid logo-grid";
  visibleLogos.forEach((item) => {
    const card = document.createElement("button");
    card.className = "logo-card";
    card.type = "button";
    card.dataset.templateId = item.id;
    card.setAttribute("aria-label", item.title);
    card.innerHTML = `
      <span class="logo-card-media">
        <img src="${item.image}" alt="${item.title}" />
      </span>
      <strong>${item.title}</strong>
    `;
    card.addEventListener("click", () => {
      const galleryReturnPosition = {
        itemId: item.id,
        scrollY: window.scrollY,
        viewportTop: card.getBoundingClientRect().top,
        main: state.main,
        sub: state.sub,
      };
      transitionTo(() => {
        state.galleryReturnPosition = galleryReturnPosition;
        state.logoPreview = item.id;
      }, { scrollTop: true });
    });
    els.grid.append(card);
  });

  if (visibleLogos.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = copy[state.lang].noResults;
    els.grid.append(empty);
  }
}

async function downloadLogoAsset(item) {
  const startDownload = (href, revokeDelay = 0) => {
    const link = document.createElement("a");
    link.href = href;
    link.download = item.fileName;
    document.body.append(link);
    link.click();
    link.remove();
    if (revokeDelay > 0) {
      window.setTimeout(() => URL.revokeObjectURL(href), revokeDelay);
    }
  };

  const saveBlob = (blob) => {
    startDownload(URL.createObjectURL(blob), 1000);
  };

  const saveEmbeddedAsset = () => {
    const embeddedAsset = window.logoDownloadData?.[item.fileName];
    if (!embeddedAsset) return false;

    if (typeof embeddedAsset === "string") {
      startDownload(embeddedAsset);
      return true;
    }

    if (embeddedAsset.mimeType && embeddedAsset.data) {
      saveBlob(base64ToBlob(embeddedAsset.data, embeddedAsset.mimeType));
      return true;
    }

    return false;
  };

  const saveFromCanvas = () =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Could not prepare logo download"));
            return;
          }
          saveBlob(blob);
          resolve();
        }, "image/png");
      };
      image.onerror = () => reject(new Error("Could not load logo image"));
      image.src = item.image;
    });

  try {
    const response = await fetch(item.image);
    if (!response.ok) {
      throw new Error("Logo download request failed");
    }
    saveBlob(await response.blob());
  } catch (error) {
    if (saveEmbeddedAsset()) return;

    try {
      await saveFromCanvas();
    } catch (canvasError) {
      window.alert(
        state.lang === "th"
          ? "ดาวน์โหลดไม่สำเร็จ กรุณาลองเปิดผ่านเว็บเซิร์ฟเวอร์หรือแจ้งผู้ดูแลระบบ"
          : "Download could not start. Please try opening the site through a web server or contact support."
      );
    }
  }
}

function renderLogoPreview(item) {
  els.grid.className = "browse-grid logo-preview-wrap";
  const preview = document.createElement("article");
  preview.className = "logo-preview";
  preview.innerHTML = `
    <div class="logo-preview-toolbar">
      <button class="back-button logo-back" type="button">${
        state.lang === "th" ? "ย้อนกลับไปดูโลโก้ทั้งหมด" : "Back to all logos"
      }</button>
      <button class="download-button" type="button" aria-label="${
        state.lang === "th" ? `ดาวน์โหลด ${item.title}` : `Download ${item.title}`
      }">
        <span class="download-symbol" aria-hidden="true">↓</span>
        ${state.lang === "th" ? "ดาวน์โหลด" : "Download"}
      </button>
    </div>
    <div class="logo-preview-stage">
      <img src="${item.image}" alt="${item.title}" />
    </div>
  `;
  preview.querySelector(".logo-back").addEventListener("click", () => {
    const returnPosition = state.galleryReturnPosition;
    transitionTo(() => {
      state.logoPreview = null;
      if (returnPosition) {
        state.main = returnPosition.main;
        state.sub = returnPosition.sub;
      }
    }, { restoreGalleryPosition: returnPosition });
  });
  preview.querySelector(".download-button").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    downloadLogoAsset(item);
  });
  appendRandomReviewGallery(preview, item);
  els.grid.append(preview);
}

function renderLangButtons() {
  els.langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

function render() {
  renderCopy();
  renderMainMenu();
  renderSubMenu();
  els.page.dataset.view = state.view;
  if (state.view === "home") {
    const hasArticlePreview = ["ai-presentation-prompt-guide", "mood-tone-creative-guide", "popular-color-combinations"]
      .includes(state.articlePreview);
    els.mainHome.hidden = hasArticlePreview;
    els.articleDetail.hidden = !hasArticlePreview;
    els.workspace.hidden = true;
    els.collectionBrowser.hidden = true;
    if (hasArticlePreview) {
      renderArticleDetail();
    } else {
      renderHomePage();
    }
  } else if (state.view === "collections") {
    els.mainHome.hidden = true;
    els.articleDetail.hidden = true;
    els.workspace.hidden = true;
    els.collectionBrowser.hidden = false;
    renderCollectionBrowser();
  } else {
    els.mainHome.hidden = true;
    els.articleDetail.hidden = true;
    els.workspace.hidden = false;
    els.collectionBrowser.hidden = true;
    els.homeBack.hidden = false;
    renderGrid();
  }
  renderLangButtons();
}

function removeTransitionLayer() {
  window.clearTimeout(pageTransition.timer);
  if (pageTransition.layer) {
    pageTransition.layer.remove();
    pageTransition.layer = null;
  }
}

function restoreGalleryPosition(position) {
  if (!position) return;
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const targetCard = [...els.grid.querySelectorAll("[data-template-id]")]
        .find((card) => card.dataset.templateId === position.itemId);
      if (!targetCard) {
        window.scrollTo({ top: position.scrollY, behavior: "auto" });
        return;
      }
      const targetTop = window.scrollY + targetCard.getBoundingClientRect().top - position.viewportTop;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
      targetCard.focus({ preventScroll: true });
    });
  });
}

function transitionTo(updateState, options = {}) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  removeTransitionLayer();

  if (reduceMotion) {
    updateState();
    if (options.scrollTop) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    render();
    restoreGalleryPosition(options.restoreGalleryPosition);
    return;
  }

  const layer = els.page.cloneNode(true);
  layer.classList.add("page-transition-layer");
  layer.setAttribute("aria-hidden", "true");
  layer.style.transform = `translateY(-${window.scrollY}px)`;
  document.body.append(layer);
  pageTransition.layer = layer;

  updateState();
  if (options.scrollTop) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  render();
  restoreGalleryPosition(options.restoreGalleryPosition);

  window.requestAnimationFrame(() => {
    layer.classList.add("is-fading");
  });

  pageTransition.timer = window.setTimeout(() => {
    removeTransitionLayer();
  }, pageTransition.duration + 60);
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.templatePreview = null;
  if (state.main === "main") {
    renderHomeAssets();
  } else if (state.view === "collections") {
    renderCollectionBrowser();
  } else {
    renderGrid();
  }
});

els.browseMore.addEventListener("click", () => {
  const isMadeWithUsGallery = state.main === "corporate" && state.sub === "madeWithUs";
  const isBusinessInfographicGallery = state.main === "business" && state.sub === "infographic";
  const isBusinessCoverGallery = state.main === "business" && state.sub === "cover";
  const isBusinessTimelineGallery = state.main === "business" && state.sub === "timeline";
  if (!isMadeWithUsGallery && !isBusinessInfographicGallery && !isBusinessCoverGallery && !isBusinessTimelineGallery) return;
  if (isMadeWithUsGallery) state.madeWithUsExpanded = true;
  if (isBusinessInfographicGallery) state.businessInfographicExpanded = true;
  if (isBusinessCoverGallery) state.businessCoverVisibleCount += 30;
  if (isBusinessTimelineGallery) state.businessTimelineVisibleCount += 30;
  renderGrid();
});

els.langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    transitionTo(() => {
      state.lang = button.dataset.lang;
    });
  });
});

els.openCollections.addEventListener("click", () => {
  transitionTo(() => {
    state.view = "collections";
    state.templatePreview = null;
    state.query = "";
    els.search.value = "";
  }, { scrollTop: true });
});

els.backFromCollections.addEventListener("click", () => {
  transitionTo(() => {
    state.view = "browse";
    state.main = "business";
  });
});

els.homeBack.addEventListener("click", () => {
  transitionTo(() => {
    state.main = "main";
    state.view = "home";
    state.sub = firstSubFor("business");
    state.templatePreview = null;
    state.logoPreview = null;
    state.articlePreview = null;
    state.galleryReturnPosition = null;
    state.madeWithUsExpanded = false;
    state.businessInfographicExpanded = false;
    state.businessCoverVisibleCount = 30;
    state.businessTimelineVisibleCount = 30;
    state.query = "";
    els.search.value = "";
  }, { scrollTop: true });
});

startHeroVideoRotation();
render();
