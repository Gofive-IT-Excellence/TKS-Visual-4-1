# 2026-10-26 CoverStock 1–96 Website Snapshot

- Updated Business > Cover Page to show 30 templates initially.
- The “ดูเทมเพลตเพิ่มเติม” button reveals the next 30 templates per click until all 96 are visible.

- Added `CoverStock1` through `CoverStock96` to Business > Cover Page in numeric order.
- Added a concise, composition-specific AI prompt to every cover detail page with Copy Prompt support.
- Added downloadable preview images and visible CoverStock labels.
- Updated the home Cover Page preview and item count to use the complete 96-image collection.
- Preserved gallery scroll-position restoration when returning from a template detail page.

This folder is the website package updated on 2026-10-05.

- Corrected the mobile template-detail sequence to show the main preview first, the complete Prompt AI and Edit Text group immediately afterward, and the random image-review gallery last; desktop ordering remains unchanged.

- Removed the moving highlight sweep from the Generate with AI button, leaving only the smooth animated gradient movement.

- Added a soft animated AI-style gradient flow and periodic light sweep to the Generate with AI button, with reduced-motion support for accessibility.

- Reduced the Sign in and EN/TH header-control group by 10%, including its text, spacing, and divider height, and changed the complete group to solid black.

- Reduced the standard Back icon size by 20%, from 46px to 37px, and shifted it downward by 2pt across all views.

- Replaced every standard Back button's visible text and pill background with the supplied circular arrow icon while preserving its original accessible label and navigation behavior.

- Updated the Copy Prompt button to use the same coral, violet, teal, blue, and purple gradient as the Generate with AI button while preserving its existing text, size, and behavior.

- Replaced only the green Generate with AI button background with the supplied coral, violet, teal, blue, and purple gradient direction while preserving its existing text, size, shape, and behavior.

- Restyled Sign in and the EN/TH language selector as a clean text-only header control with a vertical divider, using the embedded Prompt SemiBold font and a unified medium-gray color.

- Right-aligned the Prompt and Edit Text headings and their field labels, styled them with embedded Prompt Medium in dark gray, and changed the field labels to title case without square brackets.

- Removed the code badge beside the template detail heading and replaced the green preview-download button with the supplied download icon, positioned beside the file code below the preview image while preserving the existing download behavior.

- Changed only the category-card subhead labels, such as Presentation Slides and Cover Page, to embedded Prompt Medium while leaving asset counts and other text unchanged.

- Removed the Library, Join, and Upload controls from the top header, leaving Sign in and the EN/TH language toggle.

Use the files in this folder for GitHub Pages upload. The folder includes the current `index.html`, scripts, styles, images, downloads, and hero video files including `sea-blue.mov`.

Update included on 2026-10-05:

- Clipped the oversized home PDIO P gimmick to the main banner boundary so its lower stem no longer extends into the white content area.
- Applied the banner's rounded-corner mask to all hero artwork for a clean, exact edge.
- Replaced the lower-right hero guide text with the all-uppercase label `PDIO STUDIO` in both language modes.
- Left-aligned the top PDIO logo's visible artwork with the main banner edge by removing the horizontal letterboxing created by its fixed-width, max-height image box.
- Aligned the large home PDIO P mark with the main banner's left edge at desktop, tablet, and mobile gutters.
- Left-aligned the footer PDIO logo artwork using its natural aspect ratio so it follows the same content edge.
- Added a reusable random image-review gallery to every asset detail view, including prompt templates, downloadable corporate assets, executive photos, and logos.
- The review gallery displays nine randomly selected prompt-enabled images and refreshes its selection when the page is refreshed.
- Clicking any review image navigates directly to that image's prompt detail page, where its AI prompt can be copied and its preview downloaded.
- The shared review function automatically includes future Presentation, Wallpaper, and Made with Us prompt assets without requiring per-page markup.
- Added 25 newly supplied works to Corporate Library > Made with Us, bringing the total to 54.
- Added a tailored AI image prompt, Copy Prompt flow, and downloadable preview for every new work.
- Made with Us now displays works 1–30 initially; clicking `ดูเทมเพลตเพิ่มเติม` / `Explore more templates` reveals works 31–54.
- Visible titles continue sequentially from `ผลงานที่ 1` through `ผลงานที่ 54` (English: `Work 1` through `Work 54`).
- Removed the duplicated works previously displayed as `ผลงานที่ 25` and `ผลงานที่ 26`.
- Preserved all 11 existing `Made with Us` images and kept 18 supplied images, for a total of 29.
- Renamed the visible Thai titles sequentially from `ผลงานที่ 1` through `ผลงานที่ 29` (English: `Work 1` through `Work 29`).
- Added a tailored AI image prompt for each of the 20 newly supplied images.
- Kept every item linked to its prompt detail page with Copy Prompt and Download Preview Image actions.
- Removed the 12-item browse limit from Corporate Library > Made with Us so all 31 works appear.
- Added a visible short title beneath every Made with Us thumbnail.

Earlier update included on 2026-09-30:

- Added a blank Corporate Library submenu: `Made with Us` / `สร้างไปกับพวกเรา`.
- Added 11 supplied images to Corporate Library > Made with Us.
- Added a unique copyable AI prompt and preview download flow for every Made with Us image.
- Added the supplied HELM logo to Corporate Library > Brand & Identity.
- Embedded the HELM logo in `logo-downloads.js` so the logo download button has the same fallback path as the other brand assets.
- Added 18 supplied wallpaper stock images to Business > Wallpaper.
- Added a unique copyable AI prompt for every new wallpaper image.
- Enabled Wallpaper items to open the prompt detail page when clicked.
- Updated Business > Wallpaper to show all 18 wallpaper templates in order.
- Updated the home visual gallery to randomly show real Presentation and Wallpaper templates.
- Linked each home gallery image directly to its prompt copy detail page.
- Excluded the cinematic mountain mission wallpaper from the home random gallery.
- Updated home submenu card thumbnails to randomly use uploaded Presentation and Wallpaper images.
- Added the supplied `PDIO only P.png` artwork as `pdio-p-mark.png`.
- Reduced and repositioned the large PDIO P mark to match the latest guideline screenshot without covering the header menu.
- Aligned the mark's visible left and right edges to the measured cyan guide range.
- Set the mark at x=40, y=144, width=464 so the top and hero-bottom guide lines cross the mark as shown.
- Moved the large mark into the hero layer below the hero menu/search controls so menu text stays readable and clickable.
- Hid the mark on non-home views so it does not cover browsing or detail pages.

Previous updates included:

- Removed the `Background` / `พื้นหลัง` template menu from the system.
- Removed the `Background` / `พื้นหลัง` tile from the main asset overview.
- Replaced the header and footer logo artwork with the supplied PDIO logo.
- Updated logo alt text and home link label from PINFIND to PDIO.
- Removed the hero credit block showing `PINFINA Studio` / `ฉลามบุก` and its avatar from the top hero area.
- Replaced all 12 Board & Executive portrait images with the new uploaded PNG set.
- Updated board/executive card and detail preview proportions to match the new 1740x2595 portrait ratio.
- Removed the previous one-off preview size override so all board/executive previews share the same balanced size.
- Kept the detail preview width at the reduced balanced size from the previous update.
- Reduced the detail preview size for `board-executive-02` / คุณจุติพันธุ์ มงคลสุธี by 20%.
- Updated all clicked menu gallery pages to use a narrower 3-column image layout.
- Adjusted gallery spacing to match the provided reference style.
- Removed rounded corners from menu gallery images and cards.
- Kept tablet and mobile responsive layouts at 2 columns and 1 column.
- Replaced the header and footer logo with `pinfind-logo.png`.
- Reduced the current header logo size by 20%.
- Added `CPH-004` to Corporate Library > Corporate Photos.
- Added `corporate-photo-tks-building-04.jpg` as a downloadable corporate photo.
- Increased the header INFINA logo to 2x size.
- Adjusted the header height so the larger logo has enough space.
- Added 17 images to Business > Presentation Slides.
- Extended the presentation slide list from `TPL-001` through `TPL-022`.
- Added a custom AI prompt for each newly added image.
- Updated Business > Presentation Slides to show all presentation templates in order.

For future edits, create a new folder named with the edit date, for example:

`outputs/2026-09-24-latest`

Keep each dated folder as a separate snapshot so previous versions are easy to recover.

- Shifted the home hero PDIO gimmick left at desktop, tablet, and mobile sizes so the lower vertical stem aligns with the banner's left edge while remaining clipped inside the banner frame.
- Increased the menu asset-count text size by 20% and linked every displayed count to the actual number of images rendered by that menu. Business > Presentation Slides now displays 22 items automatically.
- Removed the placeholder-image disclaimer below template previews and moved the download button directly beneath the image.
- Simplified the random review heading to only: “คลิกภาพเพื่อดูและคัดลอก Prompt”.
- Removed the gray stroke from all nine random review image cards, including their hover state.
- Increased the footer logo and all footer typography by 35%, and changed the tagline below the logo to “Your Work Starts Here” in both languages.
- Reduced all footer typography by 15% from the previous revision while keeping the enlarged footer logo unchanged.
- Removed the outer drop shadow from the template Prompt panel for a cleaner page appearance.
- Removed the random review gallery from download/detail pages in six Corporate Library submenus: Brand & Identity, Corporate Photos, Product & Business, Marketing Materials, Events & Activities, and Board & Executive Photos. Made with Us keeps the review gallery.
- Increased the home asset menu-card stroke width by 20%, from 1px to 1.2px, while retaining the original gray color tone.
- Updated the home asset menu-card stroke to 2px and changed it to PDIO blue (`#3f80d7`), including the hover state.
- Removed the home asset menu-card stroke entirely and replaced the white card surface with a very light 8% neutral-gray fill (`rgba(31, 31, 34, 0.08)`).
- Increased the hero “PDIO STUDIO” label by 20% using the existing font, with PDIO set in bold and STUDIO set in a clearly lighter weight.
- Removed the inner Prompt box stroke and changed its surface to a subtle 8% neutral-gray fill (`rgba(31, 31, 34, 0.08)`).
- Removed the home-only visibility rule from the cropped PDIO banner mark so it remains visible throughout every page, menu, and detail view.
- Set the “PDIO STUDIO” banner label to sit exactly 5mm above the lower edge of the banner.
- Embedded `assets/fonts/Prompt-Light.ttf` and set the entire website to use Prompt Light at weight 300. Existing component weight rules are overridden and synthetic bold is disabled, so the typography remains consistently light on computers without Prompt installed.
- Embedded `assets/fonts/Prompt-Bold.ttf` and applied it only to the “PDIO” word in the banner's lower-right label; “STUDIO” remains Prompt Light.
- Embedded `assets/fonts/Prompt-Medium.ttf` and applied it to the main navigation menu, increasing its font size by 50% from 13.2px to 19.8px.
- Reduced the Prompt Medium main-menu font size by 30%, from 19.8px to 13.86px, to prevent English menu labels from overlapping.
- Standardized submenu-page headings: the main category headline uses embedded Prompt Medium (500), while the submenu title directly below remains embedded Prompt Light (300).
- Applied embedded Prompt Medium (500) to the “Prompt (คำสั่งสำหรับ AI)” and “ปรับแต่งข้อความ (Edit Text)” section headings; their content remains Prompt Light.
- Standardized all semantic website headlines (`h1`, `h2`, and `h3`) to embedded Prompt Medium (500), covering the home-page section titles and headings across collection, detail, CTA, and footer sections. Non-heading copy remains Prompt Light.
- Replaced the semantic headline treatment with embedded Prompt Regular (400) across home, collection, detail, CTA, footer, category, and Prompt-form headings. Main navigation remains Prompt Medium and the PDIO banner word remains Prompt Bold.
- Reduced the Copy Prompt box's neutral-gray screen by 50%, changing its opacity from 8% to 4% (`rgba(31, 31, 34, 0.04)`).
