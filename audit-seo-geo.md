# SEO-GEO Audit — plombierurgence.be
> Audited: 2026-03-19 | URL: https://www.plombierurgence.be/

---

## Overall Score: 59/100

| Category | Score | Notes |
|---|---|---|
| Title / Meta Tags | 9/10 | Excellent — city-specific, price-in-meta, phone in meta |
| H1/H2 Structure | 8/10 | Good hierarchy, H1 keyword-matched on all pages |
| Sitemap | 6/10 | Exists but: www mismatch, no lastmod, /sitemap.xml 404 |
| robots.txt | 5/10 | Functional but lacks AI bot clarity & www URL |
| Schema / JSON-LD | 1/10 | Critical gap — no LocalBusiness, no FAQ, no Review schemas |
| AI Bot Access | 7/10 | All bots allowed via *, but not explicitly declared |
| GEO Readiness | 4/10 | Good content for AI, but no structured data for AI citation |
| E-E-A-T | 5/10 | Social proof present but not machine-readable |
| Content Quality | 8/10 | Specific pricing, 40+ local pages, 20+ blog articles |

---

## 1. Technical SEO — Strengths ✅

- **Title tags** are excellent on every page (e.g. `Plombier Belgique — Urgence 24/7 & Tarifs Clairs | Plombier Urgence`)
- **Meta descriptions** include pricing (60€, 95€), cities, and phone number — great
- **Single H1** per page, keyword-matched, no duplication
- **H2/H3 hierarchy** is logical and consistent
- **OG tags** present (`og:description`)
- **60+ URLs** in sitemap: 6 service pages, 5 urgence pages, 40+ zone/commune pages, 20+ blog articles
- **Dedicated location pages** per city (`/location/bruxelles/`, etc.) with local titles and meta
- **Dedicated service pages** per service (`/service/debouchage-canalisation/`, etc.)

---

## 2. Critical Issues ❌

### 🔴 Priority 1 — Fix Immediately

**Issue 1: No JSON-LD Structured Data (Schema)**
> This is the #1 gap. No `LocalBusiness`, `Plumber`, `FAQPage`, `Service`, or `AggregateRating` schema detected anywhere on the site.
> AI engines (Perplexity, ChatGPT, Gemini) rely heavily on structured data to cite local businesses.

Recommended schema for homepage (`LocalBusiness`):
```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Plombier Urgence",
  "url": "https://www.plombierurgence.be",
  "telephone": "+32465685158",
  "priceRange": "60€–500€",
  "openingHours": "Mo-Su 00:00-23:59",
  "areaServed": ["Bruxelles", "Liège", "Namur", "Charleroi", "Mons"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200"
  }
}
```

Recommended schema for service/home pages (`FAQPage`):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le tarif pour un débouchage en Belgique ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le débouchage démarre à 60€ TTC chez Plombier Urgence."
      }
    },
    {
      "@type": "Question",
      "name": "En combien de temps un plombier intervient-il en urgence ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos plombiers interviennent en moins de 30 minutes, 24h/24 et 7j/7."
      }
    }
  ]
}
```

---

**Issue 2: www vs non-www Canonical Mismatch**
- `robots.txt` sitemap URL: `https://plombierurgence.be/sitemap-index.xml` (non-www)
- Sitemap-0.xml URLs: `https://plombierurgence.be/...` (non-www)
- Live site serves: `https://www.plombierurgence.be/` (www)

> Google may index both versions as separate pages → duplicate content penalty risk.
> **Fix:** Update all sitemap URLs to use `www.` and ensure 301 redirect from non-www → www.

---

**Issue 3: `/sitemap.xml` Returns 404**
- `https://www.plombierurgence.be/sitemap.xml` → **404**
- Only `https://plombierurgence.be/sitemap-index.xml` works
> Many SEO tools and crawlers probe `/sitemap.xml` by default. Add a redirect or create the file.

---

**Issue 4: robots.txt — Missing Explicit AI Bot Directives**

Current `robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://plombierurgence.be/sitemap-index.xml
```

Recommended:
```
User-agent: *
Allow: /

# AI Search Engines — explicitly welcomed
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: GoogleBot-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://www.plombierurgence.be/sitemap-index.xml
```

---

### 🟠 Priority 2 — Fix This Month

**Issue 5: `/thank-you/` Page in Sitemap**
- Should have `<meta name="robots" content="noindex">` and be removed from sitemap.

**Issue 6: Sitemap Missing `<lastmod>` Tags**
- All `<url>` entries only have `<loc>`. Adding `<lastmod>` helps crawlers prioritize re-crawling.

**Issue 7: Fake WhatsApp Number**
- Link: `https://wa.me/32470123456` — `470123456` is a placeholder Belgian number.
- Must be replaced with real WhatsApp number.

**Issue 8: Blog articles lack `datePublished` / `author` / `Article` schema**
- AI engines prefer citing content with clear authorship and dates.
- Add `Article` JSON-LD to all blog posts.

---

## 3. AI Bot Access Status

| AI Bot | Crawler Name | Status |
|---|---|---|
| Google AI / Gemini | `Googlebot` | ✅ Allowed (via *) |
| Bing / Copilot | `Bingbot` | ✅ Allowed (via *) |
| Perplexity | `PerplexityBot` | ✅ Allowed (via *) |
| ChatGPT browsing | `ChatGPT-User` | ✅ Allowed (via *) |
| OpenAI training | `GPTBot` | ✅ Allowed (via *) |
| Claude / Anthropic | `ClaudeBot` | ✅ Allowed (via *) |
| Meta AI | `FacebookBot` | ✅ Allowed (via *) |

> All AI bots are technically allowed. However, explicitly listing them is best practice (see Issue 4 fix above).

---

## 4. GEO (AI Search Optimization) Assessment

### What's already good for AI engines
- **Specific prices stated clearly** (60€, 95€, 150€) — AI loves quoting exact numbers
- **40+ local zone pages** — gives AI geographic context to cite for local queries
- **20+ blog articles** answering common questions (déboucher WC, tarif plombier, etc.)
- **Phone number repeated** throughout — easy for AI to extract contact info
- **Clear brand entity**: "Plombier Urgence" used consistently

### What's missing for AI engines
1. **No structured data** → AI can't reliably cite or verify business info
2. **No E-E-A-T signals in schema** → Ratings, reviews, certifications not machine-readable
3. **No Google Business Profile embed** → Missing geo coordinates and live rating
4. **No BreadcrumbList schema** → AI can't understand site navigation structure

---

## 5. Action Plan Summary

| Priority | Action | Impact |
|---|---|---|
| 🔴 1 | Add `LocalBusiness` + `Plumber` JSON-LD to homepage & location pages | Very High |
| 🔴 2 | Add `FAQPage` JSON-LD to homepage and service pages | High |
| 🔴 3 | Fix www/non-www: update sitemap + canonical tags | High |
| 🔴 4 | Update robots.txt with explicit AI bot list + fix Sitemap URL | Medium |
| 🟠 5 | Noindex `/thank-you/` and remove from sitemap | Low |
| 🟠 6 | Add `<lastmod>` to sitemap | Medium |
| 🟠 7 | Replace fake WhatsApp number | Medium |
| 🟠 8 | Add `Article` schema + `datePublished` + `author` to all blog posts | Medium |
| 🟢 9 | Add `AggregateRating` schema (4.9/5 already exists on page) | High |
| 🟢 10 | Add `BreadcrumbList` schema on all pages | Low |
| 🟢 11 | Enrich "À propos" page with certifications, team info (E-E-A-T) | High |
