# SEO-strategiplan — tjenervikar.dk

## Resumé

TjenerVikar er et dansk vikarbureau til hospitality-branchen, der leverer personale til København og Sjælland. Sitet har i øjeblikket **0 organisk trafik, 0 rangerende søgeord, DA=1 og kun 7 backlinks**. Denne plan viser, hvordan TjenerVikar kan slå konkurrenterne gennem teknisk SEO, dybere indhold, programmatisk lokale landingssider og målrettet linkbuilding.

---

## 1. Konkurrenceanalyse

### Direkte konkurrenter (prioriteret efter trusselsniveau)

| Konkurrent              | DA  | Organiske søgeord | Månedlig trafik | Backlinks | Ref. domæner | Fokus                                         |
| ----------------------- | --- | ----------------- | --------------- | --------- | ------------ | --------------------------------------------- |
| **tjenerteamet.dk**     | 14  | 193               | ~142            | 778       | 215          | Tjenere, kokke — stærkeste direkte match      |
| **vikarvagten.dk**      | 20  | 83                | ~388            | 413       | 146          | Generelt vikarbureau i København/Nordsjælland |
| **norstaff.dk**         | 23  | 65                | ~14 (faldende)  | 534       | 268          | Generel bemanding, faldende trafik            |
| **baservice.dk**        | 19  | 30                | ~27             | 458       | 198          | Hotel/restauration-specialist                 |
| **jobbutler.net**       | 9   | 8                 | ~169 (ustabil)  | 150       | 22           | Event/hotel/restaurant, har bookingplatform   |
| **vikarstyrken.dk**     | 5   | 33                | ~9              | 48        | 22           | Hotel/restauration, lav DA                    |
| **copenhagenstaff.com** | 2   | 6                 | ~2              | 9         | 4            | Ny, engelsk først, lignende DA som os         |
| **jatakpersonale.dk**   | 4   | 1                 | ~0              | 5         | 4            | Lille familiedrevet aktør i Storkøbenhavn     |

### Vigtigste fund

- **Lav konkurrence i nichen**: De fleste målrettede søgeord har SEO Difficulty (SD) under 20
- **"vikarbureau københavn"** — kun 10 månedlige søgninger, SD: 18 — meget muligt at vinde
- **"tjener vikar"** — SD: 17, lav volumen men høj købshensigt
- **"kok vikar københavn"** — SD: 12, meget lav konkurrence
- **"vikarbureauet"** — 8.100 månedlige søgninger (bredt søgeord, middel konkurrence)
- **"kokke løn"** — 320 søgninger/måned, lav konkurrence — stærk indholdsmulighed
- **"kokke job københavn"** — 50 søgninger/måned, lav konkurrence

### Konkurrenternes svagheder (vores muligheder)

1. **Tyndt indhold**: De fleste konkurrenter har få sider med basal information — ingen dybde
2. **Manglende prisgennemsigtighed**: Kun tjenerteamet.dk viser priser (49 kr./t.). TjenerVikars prisberegner er en **unik differentiering**
3. **Ingen programmatisk SEO**: Ingen konkurrenter har lokation+service-sider
4. **Ingen strukturerede data**: Konkurrenterne mangler schema.org-markup
5. **Ingen content marketing**: Ingen blogs, guides eller lønressourcer
6. **Svag mobiloplevelse**: Flere konkurrenter har langsomme eller dårligt responsive websites
7. **Mangler anmeldelser/social proof**: De fleste viser ikke Trustpilot eller kundeudtalelser tydeligt

### SERP-analyse — "vikarbureau københavn tjenere kokke"

Top 10-resultater:

1. baservice.dk — "Tjener vikar København"
2. vikarstyrken.dk — "Tjenervikar i København og Sjælland"
3. **tjenerteamet.dk** — "Tjener Vikar 49 kr./t. | Book Online"
4. kokogvikar.dk — "Bliv vikar"
5. vikarvagten.dk — "Vikarbureau København & Nordsjælland"
6. jooble.org — jobopslag (ikke en konkurrent)
7. tjenerskolen.dk — "Job som tjenervikar"
8. instaservice.dk — "Kokke vikar"
9. greenalliance.dk — catering/kantine-vikar
10. thornvikar.com — "Køkken og servering rekruttering"

### Folk søger også efter

- Tjener vikar
- Tilkaldevikar københavn
- Tjener vagter
- Vikar companies in copenhagen
- Vikarbureau rengøring København

---

## 2. Nuværende SEO-audit — tjenervikar.dk

### Det der mangler (kritiske huller)

| Problem                          | Status                              | Konsekvens                                  |
| -------------------------------- | ----------------------------------- | ------------------------------------------- |
| **robots.txt**                   | Mangler helt                        | Søgemaskiner får ingen crawl-instruktioner  |
| **sitemap.xml**                  | Mangler helt                        | Sider opdages mindre effektivt              |
| **Strukturerede data (JSON-LD)** | Mangler                             | Ingen rich snippets i Google                |
| **Open Graph-tags**              | Mangler                             | Dårlig visning ved deling på sociale medier |
| **Twitter Card-tags**            | Mangler                             | Dårlig visning ved deling på Twitter/X      |
| **Canonical URL**                | Mangler                             | Risiko for duplicate content                |
| **hreflang**                     | Mangler                             | Ingen tydelig sprog-/regionsmålretning      |
| **Google Business Profile**      | Sandsynligvis mangler               | Ingen lokal SEO-tilstedeværelse             |
| **Google Search Console**        | Ikke forbundet                      | Ingen indekseringsdata                      |
| **Backlinks**                    | Kun 7 (mod konkurrenternes 150-778) | Meget lav autoritet                         |

### Det der allerede fungerer (godt fundament)

- Grundlæggende meta title og description
- Dansk sprog-tag (lang="da")
- Mobilvenligt design
- Prisberegner (unik differentiering)
- Servicekategori-sektion (galleri)
- FAQ-sektion
- Jobansøgningsformular
- Kontaktinformation med telefonnummer
- Tillidssignaler (referencer, fordele)

---

## 3. SEO-strategi — sådan slår vi konkurrenterne

### Fase 1: Teknisk SEO-fundament (uge 1-2)

#### 1.1 Opret robots.txt

```
User-agent: *
Allow: /
Sitemap: https://tjenervikar.dk/sitemap.xml
```

#### 1.2 Opret sitemap.xml

- List alle sider (forside, tak-side og fremtidige service-/lokationssider)
- Opdater automatisk når nye sider tilføjes

#### 1.3 Tilføj strukturerede data (JSON-LD)

Implementér schema.org-markup for:

- **LocalBusiness** — navn, adresse, telefon, dækningsområde, åbningstider
- **Service** — hver personaletype (tjener, kok, bartender osv.)
- **FAQPage** — eksisterende FAQ-sektion
- **Organization** — virksomhedsinfo
- **WebSite** — website-info med søgefunktion
- **BreadcrumbList** — brødkrummenavigation

#### 1.4 Tilføj Open Graph- og Twitter Card-tags

- og:title, og:description, og:image, og:url, og:type
- twitter:card, twitter:title, twitter:description, twitter:image

#### 1.5 Tilføj canonical URLs

- `<link rel="canonical" href="https://tjenervikar.dk/" />`

#### 1.6 Tilføj hreflang

- `<link rel="alternate" hreflang="da-dk" href="https://tjenervikar.dk/" />`

#### 1.7 Indsend til Google Search Console

- Verificér domæneejerskab
- Indsend sitemap
- Overvåg indeksering

### Fase 2: On-page SEO-optimering (uge 2-3)

#### 2.1 Optimer forsidens meta-tags

- **Title**: "Vikarbureau i København | Tjenere, Kokke & Event Personale — TjenerVikar"
- **Description**: "Book erfarne tjenere, kokke, bartendere og event personale i København og på Sjælland. Gennemsigtige priser, hurtig bemanding. Beregn din pris online nu."
- **H1**: "Vikarbureau i København — Book tjenere og kokke nemt"

#### 2.2 Optimer eksisterende indhold

- Tilføj målrettede søgeord naturligt: "vikarbureau københavn", "tjener vikar", "kok vikar", "event personale københavn"
- Tilføj semantiske søgeord: "vikar service", "personale til events", "køkkenassistent", "opvasker"
- Forbedr overskriftshierarki (H1 → H2 → H3)
- Tilføj intern linking mellem sektioner
- Optimer billeders alt-tekster med relevante søgeord
- Tilføj beskrivende title-attributter til servicekategori-links

#### 2.3 Opret dedikerede servicesider

Opret individuelle HTML-sider for hver servicetype:

- `/tjener-vikar.html` — "Tjener Vikar København | Book Erfarne Tjenere"
- `/kok-vikar.html` — "Kok Vikar København | Lej Faglærte Kokke"
- `/bartender-vikar.html` — "Bartender Vikar København | Book Professionelle Bartendere"
- `/koekkenassistent.html` — "Køkkenassistent Vikar | Fleksibel Bemanding København"
- `/opvasker-vikar.html` — "Opvasker Vikar København | Hurtig og Pålidig Hjælp"
- `/vaert-vikar.html` — "Vært/Værtinde Vikar | Event Personale København"
- `/overtjener-vikar.html` — "Overtjener & Afvikler | Event Management København"
- `/moedeforplejer.html` — "Mødeforplejning | Catering Personale København"

Hver side bør indeholde:

- 500-800 ord unikt og hjælpsomt indhold
- Servicebeskrivelse, priser og proces
- FAQ-sektion specifik for rollen
- Interne links til prisberegner og kontakt
- Schema.org Service-markup
- Kundeudtalelser/referencer

#### 2.4 Opret lokationssider (programmatisk SEO)

Opret lokationsspecifikke landingssider:

- `/vikarbureau-københavn.html` — hovedside for København
- `/vikarbureau-amager.html`
- `/vikarbureau-frederiksberg.html`
- `/vikarbureau-østerbro.html`
- `/vikarbureau-nordsjælland.html`
- `/vikarbureau-sjælland.html`

Hver side bør have unikt indhold om:

- Beskrivelse af dækningsområde
- Typiske venues/restauranter i området
- Responstid for området
- Lokale kundeudtalelser
- Indlejret kort

### Fase 3: Content marketing (uge 3-6)

#### 3.1 Opret blog-/guidesektion

Målret søgeord med indhold:

- **"kokke løn"** (320 søgninger/måned) → "Løn for kokke i Danmark 2026 — Komplet guide"
- **"kokke job københavn"** (50 søgninger/måned) → "Sådan finder du kokkejob i København"
- **"vikarbureauet"** (8.100 søgninger/måned) → "Hvad er et vikarbureau? — Alt du skal vide om vikarbureauer i Danmark"
- **"tjener vagter"** → "Sådan finder du tjenervagter i København"
- **"tilkaldevikar københavn"** → "Tilkaldevikar i København — Hurtig bemanding når du har brug for det"

#### 3.2 Opret ressourcesider

- **Prisguide**: "Timepriser for vikarer i hospitality 2026" (målretter prisrelaterede søgninger)
- **Lønguide**: "Lønninger for tjenere, kokke og bartendere i Danmark"
- **Eventguide**: "Sådan planlægger du personale til dit event i København"
- **Tjekliste**: "Tjekliste: Sådan booker du vikarer til din restaurant"

#### 3.3 Opret sammenligningsindhold

- "Vikarbureau vs. fastansat personale — fordele og ulemper"
- "Hvad koster en vikar? — Sammenlign priser på vikarbureauer i København"

### Fase 4: Lokal SEO (uge 4-5)

#### 4.1 Google Business Profile

- Opret/claim Google Business Profile
- Tilføj virksomhedsnavn: "TjenerVikar"
- Kategori: "Temp agency" / "Employment agency"
- Serviceområde: Storkøbenhavn, Sjælland
- Tilføj billeder af personale og events
- Indsaml og besvar anmeldelser
- Udgiv løbende opdateringer

#### 4.2 Lokale citationer

- Tilføj virksomheden til danske erhvervskataloger:
  - Krak.dk
  - Degulesider.dk
  - Eniro.dk
  - LinkedIn-virksomhedsside
  - Facebook-virksomhedsside
  - Trustpilot-profil

### Fase 5: Linkbuilding (uge 5-8)

#### 5.1 Backlink-gap

Nuværende: 7 backlinks fra 7 domæner
Mål: 50+ backlinks fra 30+ domæner på 3 måneder

#### 5.2 Linkbuilding-taktikker

1. **Indsendelse til kataloger**: Danske erhvervskataloger (Krak, Eniro, De Gule Sider)
2. **Branchepartnerskaber**: Event venues, cateringfirmaer og hoteller
3. **Gæsteindlæg**: Hospitality-blogs og sider om restaurationsbranchen
4. **Ressourcebaseret linkbuilding**: Opret lønguides, som andre vil linke til
5. **Lokal PR**: Pressemeddelelser om lancering og partnerskaber
6. **Sociale profiler**: LinkedIn, Facebook, Instagram (link tilbage til sitet)
7. **Trustpilot**: Få anmeldelser og links
8. **Brancheforeninger**: Meld jer ind i Horesta (hvis relevant)

### Fase 6: Konverteringsoptimering (løbende)

#### 6.1 Forbedr CTA'er

- Gør "Beregn pris" mere fremtrædende
- Tilføj sticky CTA på mobil
- A/B-test knaptekst

#### 6.2 Tilføj tillidssignaler

- Trustpilot-widget
- Kundelogoer
- Cases
- Personale-/teamfotos
- Google review-embed

#### 6.3 Tilføj live chat eller hurtig kontakt

- WhatsApp-knap
- Hurtig tilbudsformular
- Ring tilbage-formular

---

## 4. Prioritering af målrettede søgeord

### Niveau 1 — Primære søgeord (vind disse først)

| Søgeord                   | Volumen | SD  | Prioritet |
| ------------------------- | ------- | --- | --------- |
| vikarbureau københavn     | 10      | 18  | HØJ       |
| tjener vikar              | —       | 17  | HØJ       |
| kok vikar københavn       | —       | 12  | HØJ       |
| tjener vikar københavn    | —       | —   | HØJ       |
| event personale københavn | —       | —   | HØJ       |

### Niveau 2 — Sekundære søgeord (content marketing)

| Søgeord                       | Volumen | SD     | Prioritet              |
| ----------------------------- | ------- | ------ | ---------------------- |
| vikarbureauet                 | 8.100   | MIDDEL | MIDDEL                 |
| kokke løn                     | 320     | LAV    | MIDDEL                 |
| kokke job københavn           | 50      | LAV    | MIDDEL                 |
| vikarbureau sundhedspersonale | 260     | MIDDEL | LAV (ikke vores niche) |

### Niveau 3 — Long-tail (programmatisk SEO)

- "tjener vikar københavn" → dedikeret side
- "kok vikar københavn" → dedikeret side
- "bartender vikar københavn" → dedikeret side
- "opvasker vikar københavn" → dedikeret side
- "køkkenassistent vikar københavn" → dedikeret side
- "vikarbureau amager" → lokationsside
- "vikarbureau frederiksberg" → lokationsside
- "tilkaldevikar københavn" → dedikeret side
- "lej tjener københavn" → dedikeret side
- "book kok københavn" → dedikeret side

---

## 5. Implementeringsplan

### Uge 1: Teknisk fundament

- [x] Opret robots.txt
- [x] Opret sitemap.xml
- [x] Tilføj JSON-LD-strukturerede data (LocalBusiness, FAQ, Service)
- [x] Tilføj Open Graph + Twitter Card meta-tags
- [x] Tilføj canonical URLs
- [x] Optimer forsidens meta-tags (title, description, H1)
- [ ] Indsend til Google Search Console
- [ ] Opret Google Business Profile

### Uge 2: Servicesider

- [ ] Opret /tjener-vikar.html
- [ ] Opret /kok-vikar.html
- [ ] Opret /bartender-vikar.html
- [ ] Opret /koekkenassistent.html
- [ ] Opret /opvasker-vikar.html
- [ ] Opret /vaert-vikar.html
- [ ] Opret /overtjener-vikar.html
- [ ] Opret /moedeforplejer.html
- [ ] Tilføj intern linking fra forsiden til servicesider
- [ ] Tilføj servicesider til navigationen

### Uge 3: Lokationssider

- [ ] Opret /vikarbureau-københavn.html
- [ ] Opret /vikarbureau-amager.html
- [ ] Opret /vikarbureau-frederiksberg.html
- [ ] Opret /vikarbureau-nordsjælland.html
- [ ] Opret /vikarbureau-sjælland.html
- [ ] Tilføj lokationssider til sitemap

### Uge 4-5: Content marketing

- [ ] Opret /blog/ sektion
- [ ] Skriv "Løn for kokke i Danmark 2026"-guide
- [ ] Skriv "Hvad er et vikarbureau?"-artikel
- [ ] Skriv "Sådan finder du kokkejob i København"-guide
- [ ] Skriv "Tilkaldevikar i København"-guide
- [ ] Skriv "Prisguide for vikarer i hospitality"-side

### Uge 6: Linkbuilding og lokal SEO

- [ ] Indsend til Krak.dk, Eniro.dk, De Gule Sider
- [ ] Opret LinkedIn-virksomhedsside
- [ ] Opret Facebook-virksomhedsside
- [ ] Opret Trustpilot-profil
- [ ] Meld jer ind i Horesta (hvis relevant)
- [ ] Kontakt 10 lokale venues med henblik på partnerlinks

### Uge 7-8: Optimering og overvågning

- [ ] Overvåg indeksering i Google Search Console
- [ ] Track søgeordsplaceringer
- [ ] Optimer baseret på de første data
- [ ] Byg flere backlinks
- [ ] Tilføj mere indhold baseret på søgeforespørgsler

---

## 6. Forventede resultater

### Mål efter 3 måneder

- 20+ indekserede sider (fra 2 nu)
- 10+ rangerende søgeord (fra 0 nu)
- 50+ backlinks (fra 7 nu)
- DA 5+ (fra 1 nu)
- 50+ månedlige organiske besøg (fra 0 nu)

### Mål efter 6 måneder

- 30+ indekserede sider
- 30+ rangerende søgeord
- 100+ backlinks
- DA 10+
- 150+ månedlige organiske besøg
- Top 10 for "tjener vikar københavn"
- Top 10 for "kok vikar københavn"

### Mål efter 12 måneder

- 50+ indekserede sider
- 50+ rangerende søgeord
- 200+ backlinks
- DA 15+
- 300+ månedlige organiske besøg
- Top 5 for "tjener vikar københavn"
- Top 5 for "kok vikar københavn"
- Top 10 for "vikarbureau københavn"

---

## 7. Konkurrencefordele der skal udnyttes

1. **Prisgennemsigtighed** — eneste site med realtids-prisberegner. Konkurrenterne skjuler priser.
2. **Moderne UX** — rent, hurtigt og mobilvenligt design. De fleste konkurrenter har forældede sites.
3. **Nichefokus** — kun hospitality (ikke spredt ud over mange brancher som Norstaff/Vikarvagten)
4. **Hurtig booking** — prisberegner → kontaktflow er mere effektivt end hos konkurrenterne
5. **Dansk først** — i modsætning til copenhagenstaff.com, som er engelsk først
6. **Indholdsgap** — ingen konkurrent har lønguides, booking-tjeklister eller eventplanlægningsindhold

---

## 8. Værktøjer og ressourcer

- **Google Search Console** — overvåg indeksering og organisk performance
- **Google Analytics 4** — track trafik og konverteringer
- **Ubersuggest** — søgeordstracking og konkurrentovervågning
- **KWRDS.ai** — søgeordsanalyse og SERP-analyse
- **Exa** — research af konkurrentindhold
- **Firecrawl** — scraping og analyse af konkurrenters websites
