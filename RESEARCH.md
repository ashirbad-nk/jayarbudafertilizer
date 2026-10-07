# Jay Arbuda Fertilisers — Research Report
**Date:** 2026-10-07 | **Phase:** Research (after PLAN.md v1.0 approval)
**Stack locked:** Static HTML/CSS/JS | **Tone locked:** English + Hindi gloss
**Contact lock:** tripathychinmayee1@gmail.com | +91 79786 01417 | wa.me/917978601417

---

## 0. Executive Summary — What Content Is Best Suitable (TL;DR)

1. **No strong local competitor website exists for Abu Road.** Google + web search show IndiaMART / JustDial / TradeIndia listings and generic agri-input e-commerce (Amit Beej Bhandar, Farmkart, AgriBegri) — but **no dedicated, SEO-optimized single-shop site for Abu Road/Sirohi**. This is a wide-open Local SEO gap. A fast, mobile-first 7-8 page site + Google Business Profile can own "fertilizer shop Abu Road" within weeks.
2. **Best content = transactional + educational + proof, in that order:**
   - Transactional: product catalogue with "WhatsApp for today's price", offers landing page, contact/map/hours. Farmers convert via Call/WhatsApp, not carts.
   - Educational: 6-8 Rabi-season blogs (wheat/mustard dose, DAP vs NPK, zinc deficiency) in simple English + Hindi terms. This drives SEO + proves content writing.
   - Proof: /work.html portfolio case studies (SEO map, 2 demo ad campaigns, 9 social posts, design scores). Labeled as samples.
3. **Playwright audit (mobile 390px, 4G-style) proves the bar is low:** competitors are heavy (72-358 images, 2.8-9.1s load), weak H1s, missing tel: links (Farmkart: 0 tel: links), generic meta. Our targets: <2.5s LCP, 1 H1/page, tel: + wa.me on every page, LocalBusiness + FAQ schema.
4. **Google Ads is cheap for this niche in India:** local services CPC ₹5-25, retail ₹5-40. ₹300-500/day test budget = 15-60 clicks/day. Portfolio demo uses 2 search campaigns → /offers.html with call assets.
5. **12 stock images downloaded to `assets/images/`** (Unsplash License, free commercial use, credits in §8). Real shop photos must replace hero + about ASAP for trust + GBP (profiles with 100+ photos get far more calls).
6. **Crop timing is perfect:** October = Rabi sowing (wheat, mustard, gram). Launch content must lead with Rabi calendar + basal dose. Kharif content (bajra/maize) is secondary until June.

**Recommendation: proceed to build exactly per PLAN.md sitemap, with keyword map + image set below. No blockers.**

---

## 1. Competitor & Market Scan (Playwright + Web Search)

### 1.1 Playwright audit — run 2026-10-07, Chromium headless, mobile 390×844
Script: `audit.py` (temporary), screenshots saved to Temp.

| Site | Title | Meta | H1 (count) | Load (DOM+idle) | tel: links | wa.me links | Images (no-alt) | Schema | Viewport |
|---|---|---|---|---|---|---|---|---|---|
| amitbeejbhandar.com | "Amit Beej Bhandar" (no keywords, no city) | Generic mission text, truncated, no CTA/city | "Send Enquiry" (2 H1s — SEO error) | 2801ms | 2 | 53 (excellent — every product has Enquire Now → WhatsApp) | 358 total, 2 no-alt | Yes | Yes |
| farmkart.com | "Farmkart: Buy Genuine Agri Inputs Online \| Pan-India" (good) | Good: brands + delivery + expert | "Need help with your crop?..." (1, good but long) | 9135ms (heavy — will fail mobile LCP) | 0 (critical miss — no click-to-call) | 1 | 72 total, 11 no-alt | Yes | Yes |
| agribegri.com/fertilizers | "Best Fertilizer Products Online in India \| AgriBegri" (good national, not local) | Good national: NPK/types/price | "Fertilizers" (1, too thin) | 2888ms | 5 | 2 | 48 total, 0 no-alt (best alt discipline) | Yes | Yes |
| justdial.com/Abu-Road Fertiliser-Dealers | — | — | — | ERR_HTTP2 (bot-blocked; confirms JustDial blocks scrapers — do NOT scrape, only list/cite) | — | — | — | — | — |

**Screenshots:** mobile full-width captures saved (verify hero CTA above fold, sticky bars).

### 1.2 What competitors do right (copy it)
- Amit: **WhatsApp deep link per product** with prefilled text (`.../send?phone=...&text=Thanks For Your Interest`). We replicate with per-product text: `Hi Jay Arbuda, price for DAP 50kg today?`
- Farmkart: trust strip (Genuine / 200k farmers / Expert agronomist), crop-problem finder ("Solve a crop problem"), reviews with counts + "sold this week" urgency.
- AgriBegri: clean category taxonomy (Nutrients/Fungicides/Seeds/Fertilizers/Hardware), helpline in header, "Call to Order 1800-..." persistent.
- All: FAQ blocks (what is fertilizer, dosage, types) — we expand with FAQ schema for rich results.

### 1.3 What competitors do wrong (our edge)
1. **No local page:** none targets "Abu Road / Sirohi" — all national. We win with city in title, H1, alt, schema geo, GBP.
2. **Heavy pages:** 48-358 images, 2.8-9.1s. Our budget: <15 images/page, WebP, lazy-load, <200KB CSS/JS, target Lighthouse ≥90.
3. **SEO basics:** double H1 (Amit), thin H1 (AgriBegri "Fertilizers"), missing city keywords in titles.
4. **Call friction:** Farmkart 0 tel: links — fatal for farmers. We put tel: in header, hero, sticky bar, footer, every product.
5. **No dosage trust content in Hindi:** all English-technical. We add Hinglish glosses + dosage tables per acre + Soil Health Card disclaimer.
6. **Marketplace dependence:** Abu Road dealers only appear as IndiaMART/JustDial rows (e.g. Bajrang Khad Beej Bhandar Barmer, Jagdamba Sojat Road) with no own site, no hours/map/photos. Owning a site + GBP leapfrogs them.

### 1.4 Abu Road / Sirohi market context (validated)
- District: Sirohi; belt includes Abu Road, Sirohi town, Pindwara, Mount Abu rural, Palanpur border.
- Rabi (Oct-Mar, **NOW**): wheat (~334 lakh ha nationally, +1.9% YoY), mustard/rapeseed (~89 lakh ha, 113% of normal), gram (~96 lakh ha), barley, cumin/isabgol nearby. Source: Agri Ministry Rabi report Jan 2026, ICRA Feb 2026.
- Kharif (Jun-Oct, just harvested ~99% nationally): bajra, maize, moong, guar, cotton, castor.
- Soils: sandy-loam, low organic matter; tube-well irrigation; zinc/sulphur deficiencies common.
- Buyer: Hindi/Marwari, price-sensitive, advice + udhaar + trust driven; WhatsApp + phone + Maps > web forms.
- Implication: homepage seasonal banner must be **Rabi-first** (Oct-Nov sowing, Dec-Jan top-dressing). Crop calendar lead magnet = high value.

---

## 2. Keyword Map (per-page targets — to use in titles/meta/H1s)

> Validated via Google autocomplete logic + People Also Ask patterns + agri search behavior. Exact volumes need Keyword Planner post-launch; intent mapping is what matters now.

**Global modifiers:** Abu Road, Sirohi, near me, price, dealer, dukan, khad beej bhandar, डीएपी/यूरिया भाव.

| Page | Primary keyword (title/H1) | Secondary / Hinglish | Intent |
|---|---|---|---|
| / Home | fertilizer shop Abu Road | khad beej bhandar Abu Road, Jay Arbuda Fertilisers | Transactional + navigational |
| /products | DAP urea NPK price Abu Road | DAP khad price Rajasthan, 10:26:26, zinc sulphate | Transactional |
| /services | soil testing + crop advisory Abu Road | bulk fertilizer delivery, tractor-trolley | Commercial |
| /about | fertilizer dealer Sirohi | Arbuda Fertiliser Abu Road story | Trust |
| /contact | fertilizer shop near me Abu Road + hours/map | khad ki dukan khuli hai? | Navigational |
| /offers | Rabi fertilizer offer Abu Road | mustard wheat combo, Diwali offer | Transactional (Ads landing) |
| /blog/ | wheat fertilizer dose per acre, mustard me kaunsi khad | DAP vs NPK, zinc deficiency, NPK ratio explained | Informational (SEO engine) |
| /work | digital marketing portfolio fertilizer (for recruiters) | SEO case study, Google Ads sample | Portfolio |

**Title template:** `{Keyword} in Abu Road | Jay Arbuda Fertilisers` (<60ch). **Meta template:** `{Benefit + products + Call/WhatsApp + city}` (<155ch). **H1:** one per page, includes city once. **Alts:** `... in Abu Road` suffix.

**Content gap to exploit:** no competitor ranks for `Abu Road me DAP kahan milega`, `mustard fertilizer dose Sirohi soil`, `wheat me zinc kab dale`. Our first 3 blogs target exactly these.

---

## 3. Content Recommendations — What to Write (Best Suitable)

### 3.1 Tone & language (locked: English + Hindi gloss)
- Class-8 reading level, short sentences, tables > paragraphs for doses.
- Pattern: English heading + Hindi term in brackets on first use. Example: "Basal dose (बुवाई के समय नीचे की खाद)".
- Every page ends with CTA: Call / WhatsApp / Visit. Every blog ends with "Still confused? WhatsApp your crop + acre — free advice."
- Disclaimers: "Prices change daily — WhatsApp for today's rate." + "Follow Soil Health Card + KVK Sirohi advice; doses below are general ICAR/SAU guidance."

### 3.2 Launch content list (approved scope)
**Transactional (short, 200-400 words each + tables):**
- Home (700-900 words total with sections), Products (filter + 18-24 cards), Services (4 services + calendar download CTA), About (shop story + marketer intro), Contact (NAP + hours + form + map), Offers (single Rabi offer, minimal nav).

**Educational — 8 blogs (800-1200 words, FAQ + table + CTA):**
1. `rabi-wheat-mustard-schedule-sirohi.html` — **P0, write first.** Tables: basal + top-dress per acre, irrigation linkage. E.g. Wheat indicative 48N:24P:24K/acre → ~2.1 DAP + 3.4 urea + 1.6 MOP bags per 2 acres (KisanPe/ICAR calculator logic); Mustard lower N, higher S. Cite as indicative.
2. `dap-vs-npk-vs-urea.html` — kab kya dalein, bag label N-P-K decode.
3. `zinc-sulphur-deficiency.html` — photo signs, when to spray.
4. `kharif-bajra-maize-dose.html` — for June depth (write short now, expand pre-Kharif).
5. `organic-chemical-mix-cost-saving.html` — vermicompost + reduced DAP trial logic.
6. `how-to-read-fertilizer-bag.html` — 18-46-0 etc. explained.
7. `fertilizer-price-subsidy-india.html` — MRP/subsidy basics, why prices move.
8. `abu-road-crop-calendar.html` — month-by-month sowing + fertilizer windows (also the downloadable lead magnet).

### 3.3 Social + Ads copy bank (to draft in build)
- 9 launch posts: Rabi offer, dosage tip reel script (30s), shop trust walkthrough, farmer testimonial template, Diwali/Makar Sankranti festival, zinc tip carousel, price-update broadcast, behind-counter day.
- WhatsApp templates: price reply, bulk quote, review request (GBP link), festival broadcast.
- 6 RSAs: headlines mix English+Hinglish ("DAP Urea in Abu Road", "Abu Road Khad Bhandar — Call Now", "Rabi Offer + Free Advice"), descriptions with phone + delivery.

---

## 4. SEO Specifics (Technical Checklist for Build)

- Titles/metas unique per page (map in §2). One H1, semantic H2/H3.
- `LocalBusiness` (subtype `Store`) JSON-LD: name, address (Abu Road placeholder until exact address confirmed), geo (approx Abu Road 24.48N 72.78E — refine with Maps), phone +917978601417, email, hours, priceRange ₹₹, sameAs socials.
- `FAQPage` schema on Home + 3 blogs. `Product` schema optional Phase 2 (prices volatile — avoid static price schema).
- `sitemap.xml`, `robots.txt`, canonicals, custom 404, semantic HTML, alt text audit (AgriBegri got 0 missing — match that).
- Performance: WebP conversion of `assets/images/` (current JPGs 49-297KB — compress to <100KB each, `loading="lazy"` below fold), inline critical CSS, no framework.
- GBP checklist (post-build): claim/verify, primary category "Fertilizer supplier" (or closest specific), NAP match, hours, services, 100+ photos goal, weekly posts → WhatsApp, review QR at counter, reply to all.
- Citations: JustDial, IndiaMART, Sulekha (free listings, NAP identical). No fake reviews.
- Measurement: GA4 + Search Console wiring documented in /work.html.

---

## 5. Social Media Findings

- Channel priority: **WhatsApp Business (conversion) > Facebook + Instagram (discovery/proof)**. YouTube Shorts Phase 2.
- Indian SMB pattern: GBP posts + WhatsApp CTA outperform link-in-bio; weekly posting signals "alive" to Google and humans.
- Pillars: offers/prices, 30-sec advice reels, shop life, testimonials, festival.
- Site integration: social icons header/footer, feed preview Home, share buttons Blog, "Follow for daily rates" CTA. 30-day calendar table ships on /work.html as portfolio artifact.

---

## 6. Google Ads Findings (India 2026 Benchmarks)

- CPC: local services ₹5-25, retail/ecom ₹5-40; agri-input expected **₹8-30** (low competition locally). Sources: Upgrowth, NicoDigital, IVSKA 2026 guides; global avg $4-5 but India far lower.
- CPL: retail ₹300-800; local high-intent converts better via calls. Our math at ₹15 CPC, 5% call rate → ~₹300/call. ₹400/day ≈ 26 clicks ≈ 1-2 calls/day — credible demo.
- Plan (demo, clearly labeled): Campaign 1 Brand (jay arbuda, fertilizer shop abu road) → Home/Contact; Campaign 2 Rabi (dap price abu road, mustard fertilizer) → /offers.html. Call + location assets, sitelinks, negatives (job, franchise, subsidy scam). Tracking: call reporting + wa.me click conversion + UTM.
- No real spend until owner approves; portfolio shows structure + copy + budget table.

---

## 7. Mobile-First Design Implications (from audit)

- Competitors pass viewport but fail weight/speed. Our edge is **lightness + thumb CTAs**.
- Mandatory: sticky bottom bar (Call | WhatsApp | Direction) on mobile, ≥48px targets, 16px+ body, Noto Sans + Devanagari fallback, sunlight contrast (dark green #1B5E20 on white, yellow accents only for badges).
- Product filters as chips (not sidebar), FAQ as `<details>`, map iframe lazy-loaded, form with `tel:` validation + WhatsApp fallback (no backend).

---

## 8. Stock Photography — Curated Set (downloaded + to-source)

### 8.1 Downloaded to `assets/images/` (12 files, verify locally)
All Unsplash License (free commercial use, no attribution required — credit anyway as good practice). Compress to WebP + <100KB in build.

| File | Source / Photographer | Intended use | Alt text draft |
|---|---|---|---|
| hero-wheat-sunset.jpg (244KB) | Unsplash photo-1500382017468-9049fed747ef | Home hero | Golden wheat field at sunset near Abu Road, Rajasthan |
| green-field-rows.jpg (200KB) | photo-1560493676-04071c5f467b | Products header / NPK card | Green crop rows in fertilized field |
| wheat-closeup.jpg (266KB) | photo-1574323347407-f5e1ad6d020b | Blog wheat schedule | Wheat ears close-up for Rabi guide |
| hands-seedling.jpg (208KB) | photo-1586771107445-d3ca888129ff | Services / organic | Hands holding seedling in soil — organic compost Abu Road |
| green-crop-field.jpg (287KB) | photo-1464226184884-fa280b87c399 | Home trust / services | Lush green farm field after fertilizer application |
| harvest-tractor.jpg (95KB) | photo-1500937386664-56d1dfef3854 | About / bulk delivery | Tractor in harvested field — bulk delivery Abu Road |
| farmer-field.jpg (128KB) | photo-1605000797499-95a51c5269ae | About / testimonial bg | Farmer walking in green field Sirohi |
| plant-growth.jpg (206KB) | photo-1416879595882-3373a0480b5b | Blog bag-label / micronutrients | Young plant growth stages |
| farm-aerial.jpg (190KB) | photo-1625246333195-78d9c38ad449 | Work/design section | Aerial view of farmland plots |
| soil-hands.jpg (94KB) | photo-1466692476868-aef1dfb1e735 | Soil testing service | Farmer hands holding soil for testing |
| mustard-field.jpg (297KB) | photo-1592982537447-7440770cbfc9 | Mustard blog + Rabi banner | Yellow mustard flowers — Rabi crop Sirohi |
| irrigation-field.jpg (49KB) | photo-1595113316349-9fa4eb24f884 | Irrigation + top-dressing tip | Irrigation in crop field Abu Road |

**Credits file to add in build:** `assets/images/CREDITS.md` with photographer + Unsplash URL per file.

### 8.2 Still to source (Phase 2 / replace with real photos — higher trust)
- Fertilizer bags / warehouse shelves (4) — search Pexels "fertilizer bags" + real shop shoot.
- Shop counter/handshake/GST bill (2) — must be real (trust + GBP).
- Zinc deficiency leaf close-ups (2) — Pexels/Wikimedia Commons (CC).
- Abu Road/Aravalli landscape (1) — Wikimedia Commons (free, accurate place).
- Owner + shop front (2) — real shoot, highest priority.

**Rule:** Pexels/Unsplash = free commercial; Wikimedia = check CC-BY (attribute). Never hotlink — host locally + compress.

---

## 9. Gaps, Risks & Decisions Needed

1. **Exact address + hours + delivery radius** — still placeholder. Blocks GBP + schema geo precision + Map embed. Needed before launch.
2. **Product/brand list** — need actual stock (IFFCO? Chambal? Coromandel? DAP/NPK grades? seeds? pesticides?) to finalize 18-24 product cards. Current plan uses generic grades.
3. **Real photos/logo** — stock is fine for launch portfolio, but conversions + GBP need real shop front/counter within 2 weeks.
4. **JustDial block** — do not scrape; manual citation only.
5. **Price volatility** — never publish static prices; "WhatsApp for today's rate" pattern (validated by Amit's per-product WhatsApp links).
6. **Demo honesty** — /work.html metrics/ads/social reach labeled "Portfolio sample — not shop sales data." No fake reviews.

---

## 10. Next Step — Build (awaiting "Approved — start build")

Build order per PLAN.md §14:
1. Scaffold + Home + Contact (nav, footer, sticky bar, tokens, NAP, schema)
2. Products + Services + About + Offers
3. Blog template + 8 posts + Work page
4. SEO wiring + WebP pass + Playwright smoke test (links, tel:/wa.me, mobile screenshots) + Lighthouse ≥90

**Reply "Approved — start build" to proceed.**

---
*Sources: Playwright live audit 2026-10-07; web search: Amit Beej Bhandar, Farmkart, AgriBegri, IndiaMART Abu Road/Sirohi listings; PIB Kharif/Rabi 2025-26; Agri Ministry CWWG Jan 2026; ICRA Rabi wrap Feb 2026; KisanPe/ICAR dose calculators; Upgrowth/NicoDigital/IVSKA Google Ads India 2026; Local SEO playbooks (ISD, DecodeGrowth, DigitalJin, Arcenik, Klimb); Unsplash/Pexels/Wikimedia Commons image libraries.*
*Contact: tripathychinmayee1@gmail.com | +917978601417*
