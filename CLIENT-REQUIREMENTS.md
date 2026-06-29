# Client Requirements - TjenerVikar Website Updates

## Priority Changes

### 1. Hero Section Updates

- **Remove**: "Book professional de kar til event service og stor køkken i København"
- **Replace with**: "Book vikar nemt og billigt"
- Remove generic/professional language - focus on simplicity and affordability
- **Background**: Replace current blue background with a subtle background video/animation
  - Should show movement (like joboppler.net example)
  - Can use stock video or AI-generated (must look natural, not obviously AI)
  - Should be subtle, not distracting

### 2. Service Categories (Tjeneste Section)

**Current**: Mixed categories with unclear structure
**New structure** (6 categories total, 3 per row):

**Row 1:**

1. **Tjener** (just "Tjener", not "Ufaglært tjener")
2. **Overtjener/Afvikler** (use female image)
3. **Kok** (just "Kok", not "Kok og køkkenmedhjælper")

**Row 2:** 4. **Køkkenassistent og opvasker** (combined in one card) 5. **Bartender** (change from "Baret" to "Bartender") 6. **Møde/oplægsholder** (new category)

- Each card should be clickable and scroll to pricing section
- Update images accordingly

### 3. Pricing Calculator Section ("Beregn pris")

#### Date Selection

- Add calendar/date picker
- Must support **multiple days** selection (e.g., "next 3 days")
- Date range selection, not just single day

#### Time/Hours Input

- Add field for number of hours needed

#### Rush Fee Structure

- **Within 6 hours**: +54 kr gebyr
- **Within 12 hours**: +19 kr gebyr (or 29 kr - client to confirm)
- **40+ hours notice**: No rush fee

#### Administration Fee

- **Standard fee**: 59 kr (changed from 54 kr)
- This covers: færgepenge, ATP, and full process management
- Fee should be clearly visible but not overly prominent

#### Price Display Strategy

- Show **base hourly rate** prominently (e.g., "Fra 140 kr/t")
- Make administration fee visible but secondary
- Goal: Customer sees low hourly rate first, then realizes total includes fees
- Example: "Tjener fra 140 kr/t" + administration fee breakdown
- All prices include færgepenge (ferry costs)

#### Location Selection

- **Remove**: Jylland option (not servicing Jylland)
- **Keep only**:
  - Stor København
  - Sjælland
  - Fyn
- Remove any Jylland-related text/options

### 4. Content Sections to Remove

#### Remove entirely:

- "Vores priser" section (redundant with calculator)
- "Process start og slut" section (too complex, not needed)
- "Vi dækker hele landet" section (we don't cover Jylland)

#### Keep and simplify:

**"Hvorfor vælge TjenerVikar"** - Keep only 3 points:

1. Hurtigere respons
2. Erfaren personale
3. Gennemsigtige priser

Remove: Fleksibilitet, Pålidelig service

### 5. FAQ Section

- Keep "Ofte stillede spørgsmål" section
- Helps fill out the page with useful content

### 6. How-to Video (Optional/Future)

- Consider adding simple booking process video
- Similar to joboppler.net example
- Shows: Select category → Calculate price → Book
- Not urgent, can be added later

### 7. Email Addresses Needed

Client will set up:

- `job@tjenervikarbooking.dk` (for job applications)
- `info@tjenervikarbooking.dk` (general inquiries)

### 8. SEO Considerations

- Focus on keywords: "vikar", "tjener", "kok", etc.
- Client is using keyword research tools (kwrds.ai with key: e79800f3-04d3-4c17-b725-8d6fbdf546a5)
- Monthly search volumes tracked for optimization
- Balance between search volume and ranking difficulty

### 9. Pricing Structure (CONFIRMED)

**Hourly rates (eks. moms):**

- Tjener: 199 kr/t
- Overtjener/Afvikler: 209 kr/t
- Kok: 235 kr/t
- Køkkenassistent: 199 kr/t
- Opvasker: 174 kr/t
- Vært/Værtinde: 194 kr/t
- Mødeforplejer: 194 kr/t

**Administration fee**: +59 kr/t (covers færgepenge, ATP, full process management)

**Note**: All prices are excluding VAT (eks. moms)

### 10. Brand Name Consistency ✅ COMPLETED

- **Change all instances** of "Vikarstyrken" to "TjenerVikar"
- Ensure consistent branding throughout the site

### 11. Date Range Picker ✅ COMPLETED

- Add start date and end date inputs to calculator form
- Calculate number of days from date range
- Update pricing calculation to multiply total by number of days
- Display days count in calculator output

### 12. Service Category Images ✅ COMPLETED

- Generate new images using Freepik MCP
- Update gallery section to use new images:
  - images/overtjener.png (female overtjener/supervisor)
  - images/bartender.png (bartender)
  - images/modeoplægsholder.png (meeting facilitator)
  - images/koekkenassistent-opvasker.png (kitchen team)
- Keep existing images for Tjener and Kok
- All images are 2k resolution, no text"
- Ensure consistent branding throughout the site

## Design Philosophy

- **Simplicity first**: Make booking as easy as possible
- **Price transparency**: Show base rate prominently, fees clearly but secondarily
- **No friction**: First 10-15 seconds must capture customer attention
- **Avoid complexity**: No multi-step processes like Travel Link
- **Mobile-first**: Ensure everything works perfectly on mobile

## Technical Notes

- Site must be SEO-optimized for Danish market
- Fast loading times critical
- Clear call-to-action: Calculate price and book
- All text in Danish
- Copenhagen/Zealand/Fyn focus (not Jylland)

---

## New Requirements (Meeting June 17, 2026)

### 13. Hero Section — Simplify Further

- **Headline**: Remove "billigt" → **"Book vikar nemt"**
- **Subheadline**: Remove focus on Fyn/Jylland. Main focus is **København and Sjælland**
  - Fyn and Jylland can be mentioned but NOT as main focus
  - Example: "Mangler I tjenere, værter eller køkkenpersonale til events, service og køkken i København og på Sjælland?"
- **Background video**: DO NOT implement. Client decided against AI-generated video — looks too unnatural. Keep current simple design.

### 14. Service Categories — Expand to 8 Total

**New structure** (8 categories, 4 per row):

**Row 1:**

1. **Tjener**
2. **Overtjener/Afvikler** (keep as combined — "det er det samme")
3. **Kok**
4. **Køkkenassistent** (own image/column — split from opvasker)

**Row 2:** 5. **Opvasker** (own image/column — split from køkkenassistent) 6. **Bartender** 7. **Mødeforplejning** (rename from "Møde/oplægsholder" — one word) 8. **Vært/Værtinde** (new category — "hvert og hvert en")

- Each card clickable → scroll to pricing section
- Need new images for: Køkkenassistent, Opvasker, Vært/Værtinde
- Keep existing images for: Tjener, Overtjener/Afvikler, Kok, Bartender, Mødeforplejning

### 15. Pricing Calculator — Remove Rush Fee Section

- **Remove entire** "Er opgaven akut?" section
- Client finds it confusing: "Hvad så hvis den er et minut i over seks timer?"
- Keep it simple: "Jeg skal bruge det her, den koster det her"
- Rush fees can be discussed directly with employees when booking

### 16. Calculator Locations — Add Jylland Back

- **Add "Jylland"** back to location dropdown
- Main focus is still Storkøbenhavn and Sjælland
- Jylland available but NOT promoted
- Remove any text saying "Vi assisterer ikke i Jylland"

### 17. FAQ Section — Update Jylland Answer

- Update question: "Kan vi få en pris med det samme?" or Jylland-related FAQ
- New answer: "Vores **hovedfokus** er Storkøbenhavn og Sjælland. Vi assisterer også i Jylland, men det er ikke vores primære område."
- Remove old answer saying they don't assist in Jylland

### 18. Contact Info — Pending Client Input

- **Phone number**: Client will provide
- **Email addresses** to create:
  - `info@tjenervikar.dk` (already in form)
  - `job@tjenervikar.dk` (for job applications)
- Replace placeholder phone `+45 12 34 56 78` when provided

### 19. Launch Timeline

- **Target**: Ready to go live by **Wednesday**
- Client will provide phone number and confirm email setup
- Then: Submit to Google for indexing
