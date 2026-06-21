# SEO Strategy Plan — tjenervikar.dk

## Executive Summary

TjenerVikar is a Danish hospitality temp staffing agency (vikarbureau) serving Copenhagen and Zealand. The site currently has **zero organic traffic, zero ranked keywords, DA=1, and only 7 backlinks**. This plan outlines how to beat competitors through technical SEO, content depth, programmatic local pages, and targeted link building.

---

## 1. Competitive Landscape Analysis

### Direct Competitors (ranked by threat level)

| Competitor | DA | Organic KWs | Monthly Traffic | Backlinks | Ref Domains | Focus |
|---|---|---|---|---|---|---|
| **tjenerteamet.dk** | 14 | 193 | ~142 | 778 | 215 | Tjenere, kokke — strongest direct match |
| **vikarvagten.dk** | 20 | 83 | ~388 | 413 | 146 | General vikarbureau CPH/Nordsjælland |
| **norstaff.dk** | 23 | 65 | ~14 (declining) | 534 | 268 | General staffing, traffic dropping |
| **baservice.dk** | 19 | 30 | ~27 | 458 | 198 | Hotel/restauration specialist |
| **jobbutler.net** | 9 | 8 | ~169 (volatile) | 150 | 22 | Event/hotel/restaurant, has booking platform |
| **vikarstyrken.dk** | 5 | 33 | ~9 | 48 | 22 | Hotel/restauration, low DA |
| **copenhagenstaff.com** | 2 | 6 | ~2 | 9 | 4 | New, English-first, similar DA to us |
| **jatakpersonale.dk** | 4 | 1 | ~0 | 5 | 4 | Small family-run, Storkøbenhavn |

### Key Findings

- **Low competition niche**: Most target keywords have SEO Difficulty (SD) < 20
- **"vikarbureau københavn"** — only 10 monthly searches, SD: 18 — very winnable
- **"tjener vikar"** — SD: 17, low volume but high intent
- **"kok vikar københavn"** — SD: 12, very low competition
- **"vikarbureauet"** — 8,100 monthly searches (broad, medium competition)
- **"kokke løn"** — 320 searches/month, low competition — content opportunity
- **"kokke job københavn"** — 50 searches/month, low competition

### Competitor Weaknesses (Our Opportunities)

1. **Thin content**: Most competitors have single pages with basic info — no depth
2. **No price transparency**: Only tjenerteamet.dk shows prices (49 kr./t.). TjenerVikar's price calculator is a **unique differentiator**
3. **No programmatic SEO**: None of the competitors have location+service pages
4. **No structured data**: Competitors lack schema.org markup
5. **No content marketing**: No blogs, guides, or salary resources
6. **Poor mobile UX**: Several competitors have slow, non-responsive sites
7. **No reviews/social proof**: Most lack Trustpilot or testimonials prominently displayed

### SERP Analysis — "vikarbureau københavn tjenere kokke"

Top 10 results:
1. baservice.dk — "Tjener vikar København"
2. vikarstyrken.dk — "Tjenervikar i København og Sjælland"
3. **tjenerteamet.dk** — "Tjener Vikar 49 kr./t. | Book Online"
4. kokogvikar.dk — "Bliv vikar"
5. vikarvagten.dk — "Vikarbureau København & Nordsjælland"
6. jooble.org — job listing (not a competitor)
7. tjenerskolen.dk — "Job som tjenervikar"
8. instaservice.dk — "Kokke vikar"
9. greenalliance.dk — catering/kantine vikar
10. thornvikar.com — "Køkken og servering rekruttering"

### People Also Search For
- Tjener vikar
- Tilkaldevikar københavn
- Tjener vagter
- Vikar companies in copenhagen
- Vikarbureau rengøring København

---

## 2. Current Site Audit — tjenervikar.dk

### What's Missing (Critical Gaps)

| Issue | Status | Impact |
|---|---|---|
| **robots.txt** | Missing entirely | Search engines can't find crawl rules |
| **sitemap.xml** | Missing entirely | Pages not discovered efficiently |
| **Structured data (JSON-LD)** | Missing | No rich snippets in Google |
| **Open Graph tags** | Missing | Poor social sharing appearance |
| **Twitter Card tags** | Missing | Poor Twitter/X sharing |
| **Canonical URL** | Missing | Duplicate content risk |
| **hreflang** | Missing | No language/region targeting |
| **Google Business Profile** | Likely missing | No local SEO presence |
| **Google Search Console** | Not connected | No indexing data |
| **Backlinks** | Only 7 (vs 150-778 for competitors) | Very low authority |

### What Exists (Good Foundation)
- Basic meta title and description
- Danish language tag (lang="da")
- Mobile-responsive design
- Price calculator (unique differentiator)
- Service category pages (gallery)
- FAQ section
- Job application form
- Contact information with phone number
- Trust signals (references, benefits)

---

## 3. SEO Strategy — How We Beat the Competition

### Phase 1: Technical SEO Foundation (Week 1-2)

#### 1.1 Create robots.txt
```
User-agent: *
Allow: /
Sitemap: https://tjenervikar.dk/sitemap.xml
```

#### 1.2 Create sitemap.xml
- List all pages (index, tak, and future service/location pages)
- Auto-update when new pages are added

#### 1.3 Add structured data (JSON-LD)
Implement schema.org markup for:
- **LocalBusiness** — name, address, phone, area served, opening hours
- **Service** — each staff type (tjener, kok, bartender, etc.)
- **FAQPage** — existing FAQ section
- **Organization** — company info
- **WebSite** — site info with search action
- **BreadcrumbList** — navigation breadcrumbs

#### 1.4 Add Open Graph & Twitter Card meta tags
- og:title, og:description, og:image, og:url, og:type
- twitter:card, twitter:title, twitter:description, twitter:image

#### 1.5 Add canonical URLs
- `<link rel="canonical" href="https://tjenervikar.dk/" />`

#### 1.6 Add hreflang
- `<link rel="alternate" hreflang="da-dk" href="https://tjenervikar.dk/" />`

#### 1.7 Submit to Google Search Console
- Verify domain ownership
- Submit sitemap
- Monitor indexing

### Phase 2: On-Page SEO Optimization (Week 2-3)

#### 2.1 Optimize homepage meta tags
- **Title**: "Vikarbureau i København | Tjenere, Kokke & Event Personale — TjenerVikar"
- **Description**: "Book erfarne tjenere, kokke, bartendere og event personale i København og på Sjælland. Gennemsigtige priser, hurtig bemanding. Beregn din pris online nu."
- **H1**: "Vikarbureau i København — Book tjenere og kokke nemt"

#### 2.2 Optimize existing content
- Add target keywords naturally: "vikarbureau københavn", "tjener vikar", "kok vikar", "event personale københavn"
- Add semantic keywords: "vikar service", "personale til events", "køkkenassistent", "opvasker"
- Improve heading hierarchy (H1 → H2 → H3)
- Add internal linking between sections
- Optimize image alt texts with keywords
- Add descriptive title attributes to service category links

#### 2.3 Create dedicated service pages
Create individual HTML pages for each service type:
- `/tjener-vikar.html` — "Tjener Vikar København | Book Erfarne Tjenere"
- `/kok-vikar.html` — "Kok Vikar København | Lej Faglærte Kokke"
- `/bartender-vikar.html` — "Bartender Vikar København | Book Professionelle Bartendere"
- `/koekkenassistent.html` — "Køkkenassistent Vikar | Fleksibel Bemanding København"
- `/opvasker-vikar.html` — "Opvasker Vikar København | Hurtig og Pålidig Hjælp"
- `/vaert-vikar.html` — "Vært/Værtinde Vikar | Event Personale København"
- `/overtjener-vikar.html` — "Overtjener & Afvikler | Event Management København"
- `/moedeforplejer.html` — "Mødeforplejning | Catering Personale København"

Each page should include:
- 500-800 words of unique, helpful content
- Service description, pricing, process
- FAQ section specific to that role
- Internal links to price calculator and contact
- Schema.org Service markup
- Testimonials/references

#### 2.4 Create location pages (Programmatic SEO)
Create location-specific landing pages:
- `/vikarbureau-københavn.html` — Main Copenhagen page
- `/vikarbureau-amager.html`
- `/vikarbureau-frederiksberg.html`
- `/vikarbureau-østerbro.html`
- `/vikarbureau-nordsjælland.html`
- `/vikarbureau-sjælland.html`

Each with unique content about:
- Service area description
- Typical venues/restaurants in the area
- Response time for that area
- Local testimonials
- Map embed

### Phase 3: Content Marketing (Week 3-6)

#### 3.1 Create blog/guide section
Target keywords with content:
- **"kokke løn"** (320 searches/month) → "Løn for kokke i Danmark 2026 — Komplet guide"
- **"kokke job københavn"** (50 searches/month) → "Sådan finder du kokkejob i København"
- **"vikarbureauet"** (8,100 searches/month) → "Hvad er et vikarbureau? — Alt du skal vide om vikarbureauer i Danmark"
- **"tjener vagter"** → "Sådan finder du tjenervagter i København"
- **"tilkaldevikar københavn"** → "Tilkaldevikar i København — Hurtig bemanding når du har brug for det"

#### 3.2 Create resource pages
- **Prisguide**: "Timepriser for vikarer i hospitality 2026" (targeting price-related searches)
- **Lønguide**: "Lønninger for tjenere, kokke og bartendere i Danmark"
- **Event guide**: "Sådan planlægger du personale til dit event i København"
- **Checklist**: "Tjekliste: Sådan booker du vikarer til din restaurant"

#### 3.3 Create comparison content
- "Vikarbureau vs. fastansat personale — fordele og ulemper"
- "Hvad koster en vikar? — Sammenlign priser på vikarbureauer i København"

### Phase 4: Local SEO (Week 4-5)

#### 4.1 Google Business Profile
- Create/claim Google Business Profile
- Add business name: "TjenerVikar"
- Category: "Temp agency" / "Employment agency"
- Service area: Storkøbenhavn, Sjælland
- Add photos of staff, events
- Collect and respond to reviews
- Post regular updates

#### 4.2 Local citations
- Add to Danish business directories:
  - Krak.dk
  - Degulesider.dk
  - Eniro.dk
  - LinkedIn company page
  - Facebook business page
  - Trustpilot profile

### Phase 5: Link Building (Week 5-8)

#### 5.1 Target backlink gap
Current: 7 backlinks from 7 domains
Target: 50+ backlinks from 30+ domains in 3 months

#### 5.2 Link building tactics
1. **Directory submissions**: Danish business directories (Krak, Eniro, De Gule Sider)
2. **Industry partnerships**: Event venues, catering companies, hotels
3. **Guest posting**: Hospitality blogs, restaurant industry sites
4. **Resource link building**: Create salary guides that others will link to
5. **Local PR**: Press releases for business launch, partnerships
6. **Social profiles**: LinkedIn, Facebook, Instagram (link back to site)
7. **Trustpilot**: Get reviews and link
8. **Industry associations**: Join Horesta (Danish hospitality association)

### Phase 6: Conversion Optimization (Ongoing)

#### 6.1 Improve CTAs
- Make "Beregn pris" more prominent
- Add sticky CTA on mobile
- A/B test button text

#### 6.2 Add trust signals
- Trustpilot widget
- Client logos
- Case studies
- Staff photos
- Google review embed

#### 6.3 Add live chat or quick contact
- WhatsApp button
- Quick quote form
- Callback request

---

## 4. Target Keywords Priority

### Tier 1 — Primary (Win these first)
| Keyword | Volume | SD | Priority |
|---|---|---|---|
| vikarbureau københavn | 10 | 18 | HIGH |
| tjener vikar | — | 17 | HIGH |
| kok vikar københavn | — | 12 | HIGH |
| tjener vikar københavn | — | — | HIGH |
| event personale københavn | — | — | HIGH |

### Tier 2 — Secondary (Content marketing)
| Keyword | Volume | SD | Priority |
|---|---|---|---|
| vikarbureauet | 8,100 | MED | MEDIUM |
| kokke løn | 320 | LOW | MEDIUM |
| kokke job københavn | 50 | LOW | MEDIUM |
| vikarbureau sundhedspersonale | 260 | MED | LOW (not our niche) |

### Tier 3 — Long-tail (Programmatic pages)
- "tjener vikar københavn" → dedicated page
- "kok vikar københavn" → dedicated page
- "bartender vikar københavn" → dedicated page
- "opvasker vikar københavn" → dedicated page
- "kökkenassistent vikar københavn" → dedicated page
- "vikarbureau amager" → location page
- "vikarbureau frederiksberg" → location page
- "tilkaldevikar københavn" → dedicated page
- "lej tjener københavn" → dedicated page
- "book kok københavn" → dedicated page

---

## 5. Implementation Roadmap

### Week 1: Technical Foundation
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Add JSON-LD structured data (LocalBusiness, FAQ, Service)
- [ ] Add Open Graph + Twitter Card meta tags
- [ ] Add canonical URLs
- [ ] Optimize homepage meta tags (title, description, H1)
- [ ] Submit to Google Search Console
- [ ] Create Google Business Profile

### Week 2: Service Pages
- [ ] Create /tjener-vikar.html
- [ ] Create /kok-vikar.html
- [ ] Create /bartender-vikar.html
- [ ] Create /koekkenassistent.html
- [ ] Create /opvasker-vikar.html
- [ ] Create /vaert-vikar.html
- [ ] Create /overtjener-vikar.html
- [ ] Create /moedeforplejer.html
- [ ] Add internal linking from homepage to service pages
- [ ] Add navigation menu items for service pages

### Week 3: Location Pages
- [ ] Create /vikarbureau-københavn.html
- [ ] Create /vikarbureau-amager.html
- [ ] Create /vikarbureau-frederiksberg.html
- [ ] Create /vikarbureau-nordsjælland.html
- [ ] Create /vikarbureau-sjælland.html
- [ ] Add location pages to sitemap

### Week 4-5: Content Marketing
- [ ] Create /blog/ section
- [ ] Write "Løn for kokke i Danmark 2026" guide
- [ ] Write "Hvad er et vikarbureau?" article
- [ ] Write "Sådan finder du kokkejob i København" guide
- [ ] Write "Tilkaldevikar i København" guide
- [ ] Write "Prisguide for vikarer i hospitality" page

### Week 6: Link Building & Local SEO
- [ ] Submit to Krak.dk, Eniro.dk, De Gule Sider
- [ ] Create LinkedIn company page
- [ ] Create Facebook business page
- [ ] Create Trustpilot profile
- [ ] Join Horesta (if applicable)
- [ ] Reach out to 10 local venues for partnership links

### Week 7-8: Optimization & Monitoring
- [ ] Monitor Google Search Console indexing
- [ ] Track keyword rankings
- [ ] Optimize based on initial data
- [ ] Build more backlinks
- [ ] Add more content based on search queries

---

## 6. Expected Results

### 3-month targets
- 20+ indexed pages (from 2 currently)
- 10+ ranked keywords (from 0 currently)
- 50+ backlinks (from 7 currently)
- DA 5+ (from 1 currently)
- 50+ monthly organic visits (from 0 currently)

### 6-month targets
- 30+ indexed pages
- 30+ ranked keywords
- 100+ backlinks
- DA 10+
- 150+ monthly organic visits
- Top 10 for "tjener vikar københavn"
- Top 10 for "kok vikar københavn"

### 12-month targets
- 50+ indexed pages
- 50+ ranked keywords
- 200+ backlinks
- DA 15+
- 300+ monthly organic visits
- Top 5 for "tjener vikar københavn"
- Top 5 for "kok vikar københavn"
- Top 10 for "vikarbureau københavn"

---

## 7. Competitive Advantages to Leverage

1. **Price transparency** — Only site with a real-time price calculator. Competitors hide prices.
2. **Modern UX** — Clean, fast, mobile-first design. Most competitors have dated sites.
3. **Niche focus** — Hospitality-only (not diluted across industries like Norstaff/Vikarvagten)
4. **Quick booking** — Price calculator → contact flow is smoother than competitors
5. **Danish-first** — Unlike copenhagenstaff.com which is English-first
6. **Content gap** — No competitor has salary guides, hiring checklists, or event planning content

---

## 8. Tools & Resources

- **Google Search Console** — Monitor indexing and search performance
- **Google Analytics 4** — Track traffic and conversions
- **Ubersuggest** — Keyword tracking and competitor monitoring
- **KWRDS.ai** — Keyword research and SERP analysis
- **Exa** — Competitor content research
- **Firecrawl** — Competitor site scraping and analysis
