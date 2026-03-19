# Traditional SEO Optimization — plombierurgence.be
> Created: 2026-03-19 | Builds on: audit-seo-geo.md + keyword-research.md + geo-optimization.md

---

## Summary of Current State

Based on the live page audit, the site has **strong fundamentals** (good H1s, present OG tags, decent meta descriptions) but is **missing optimized meta on several pages**, has **title tag scope issues** (tarifs page targets only Bruxelles), and lacks **Twitter Cards**, **canonical tags**, and page-level **JSON-LD schemas** for content/blog pages.

---

## 1. Meta Tags — Page-by-Page Audit & Rewrites

### Template Used
```html
<title>{Primary Keyword} — {Brand} | {Secondary Keyword}</title>
<meta name="description" content="{150-160 char compelling description with keyword + CTA}">

<!-- Open Graph -->
<meta property="og:title" content="{Title}">
<meta property="og:description" content="{Description}">
<meta property="og:image" content="https://www.plombierurgence.be/og-image.jpg">
<meta property="og:url" content="{Canonical URL}">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_BE">
<meta property="og:site_name" content="Plombier Urgence">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{Title}">
<meta name="twitter:description" content="{Description}">
<meta name="twitter:image" content="https://www.plombierurgence.be/og-image.jpg">

<!-- Canonical -->
<link rel="canonical" href="{Canonical URL}">
```

---

### Homepage `/`

**Current title:** `Plombier Belgique — Urgence 24/7 & Tarifs Clairs | Plombier Urgence`
**Current meta description:** `Plombier Belgique : intervention rapide 30 min, 24h/24, 7j/7. Le seul plombier en Belgique qui affiche ses prix. Débouchage dès 60€, fuite dès 95€. Bruxelles, Liège, Namur, Charleroi. ☎ 0465 68 51 58`

**Assessment:** ✅ Title good. ✅ Meta good. ❌ No Twitter Card. ❌ No canonical. ❌ OG image not verified.

**Optimized version:**
```html
<title>Plombier Urgence Belgique — Intervention 30 min, 24h/24 | Tarifs dès 60€</title>
<meta name="description" content="Plombier urgence en Belgique : arrivée en 30 min, 24h/24. Débouchage dès 60€, fuite dès 95€, chaudière dès 150€. Prix fixe avant intervention. Bruxelles, Liège, Namur. ☎ 0465 68 51 58">

<meta property="og:title" content="Plombier Urgence Belgique — Intervention 30 min, 24h/24">
<meta property="og:description" content="Le seul plombier belge qui affiche ses prix en ligne. Débouchage dès 60€, fuite dès 95€. Intervention garantie en 30 min, 24h/24 et 7j/7.">
<meta property="og:image" content="https://www.plombierurgence.be/images/og-homepage.jpg">
<meta property="og:url" content="https://www.plombierurgence.be/">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_BE">
<meta property="og:site_name" content="Plombier Urgence">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Plombier Urgence Belgique — 30 min, 24h/24 | dès 60€">
<meta name="twitter:description" content="Débouchage dès 60€, fuite dès 95€. Prix fixe avant intervention. Disponible maintenant.">
<meta name="twitter:image" content="https://www.plombierurgence.be/images/og-homepage.jpg">

<link rel="canonical" href="https://www.plombierurgence.be/">
```

---

### Tarifs Page `/tarifs/`

**Current title:** `Tarifs Plombier Bruxelles | Prix Transparents | Plombier Urgence`
**Current H1:** `Prix Plombier Bruxelles : Tarifs Transparents`

**Issues:**
- ❌ Title and H1 say "Bruxelles" — but page covers all of Belgium. Missed rankable traffic from Liège, Namur, Charleroi.
- ❌ Meta description lacks price anchors for non-Bruxelles cities
- ❌ no `<meta name="keywords">` (low SEO value but completes the template)

**Optimized version:**
```html
<title>Tarifs Plombier Belgique 2025 — Prix Débouchage, Fuite & Chaudière | Plombier Urgence</title>
<meta name="description" content="Tarifs plombier Belgique 2025 : débouchage dès 60€, fuite dès 95€, chaudière dès 150€. Prix fixes avant intervention, sans surprise. Devis gratuit. ☎ 0465 68 51 58">
<meta name="keywords" content="tarif plombier belgique, prix débouchage, coût plombier urgence, tarif chaudière belgique, prix plombier 2025">

<meta property="og:title" content="Tarifs Plombier Belgique 2025 — Prix Fixes Transparents">
<meta property="og:description" content="Débouchage dès 60€ | Fuite dès 95€ | Chaudière dès 150€. Tous nos prix 2025, communiqués avant intervention. Bruxelles, Liège, Namur, Charleroi.">
<meta property="og:url" content="https://www.plombierurgence.be/tarifs/">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Tarifs Plombier Belgique 2025 — Tous les Prix Affichés">
<meta name="twitter:description" content="Débouchage dès 60€ | Fuite dès 95€ | Chaudière dès 150€. Prix fixes, sans surprise.">

<link rel="canonical" href="https://www.plombierurgence.be/tarifs/">
```

**Also update H1 to:**
```
Prix Plombier Belgique 2025 : Tarifs Fixes, Sans Surprise
```

---

### Service: Débouchage Canalisation `/service/debouchage-canalisation/`

**Current title:** `Débouchage Canalisation Belgique — Urgence 24/7 | Tarif 2025 dès 60€`
**Assessment:** ✅ Excellent title. ✅ Good OG. ❌ Missing Twitter Card. ❌ Missing canonical.

**Optimized additions:**
```html
<title>Débouchage Canalisation Belgique — Urgence 24/7 | Dès 60€ | Plombier Urgence</title>
<meta name="description" content="Débouchage canalisation en Belgique : WC, évier, douche, égout. Intervention en 30 min, 24h/24. Tarif fixe dès 60€ TTC, inspection caméra incluse. Garantie 6 mois. ☎ 0465 68 51 58">
<meta name="keywords" content="débouchage canalisation belgique, déboucher WC, déboucher évier, hydrocurage, débouchage urgence prix">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Débouchage Canalisation Belgique — Dès 60€, 30 min">
<meta name="twitter:description" content="WC, évier, canalisation principale. Tarif fixe dès 60€, inspection caméra incluse. 24h/24.">

<link rel="canonical" href="https://www.plombierurgence.be/service/debouchage-canalisation/">
```

---

### Service: Urgence Plomberie `/service/urgence-plomberie/`

**Current title:** `Urgence Plomberie Belgique — Intervention 24/7 en 30 min`
**Assessment:** ✅ Good title and meta. ❌ No Twitter Card. ❌ No canonical.

```html
<title>Urgence Plomberie Belgique — Intervention 24/7 en 30 min | Plombier Urgence</title>
<meta name="description" content="Urgence plomberie en Belgique : fuite, inondation, WC bouché, panne chauffage. Technicien en route en 30 min. 24h/24, 7j/7. Prix fixe avant intervention. ☎ 0465 68 51 58">
<meta name="keywords" content="urgence plomberie belgique, plombier urgence nuit, dépannage plomberie 24h, fuite eau urgence belgique">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Urgence Plomberie Belgique — 30 min, 24h/24">
<meta name="twitter:description" content="Fuite, inondation, WC bouché, panne chauffage. Technicien en route en 30 min, prix fixe garanti.">

<link rel="canonical" href="https://www.plombierurgence.be/service/urgence-plomberie/">
```

---

### Service: Recherche de Fuite `/service/recherche-fuite/`

```html
<title>Recherche de Fuite d'Eau Belgique — Détection Non Destructive | Plombier Urgence</title>
<meta name="description" content="Recherche fuite d'eau en Belgique : détection acoustique et thermographique, sans démolition. Intervention 24h/24. Rapport assurance fourni. Dès 95€. ☎ 0465 68 51 58">
<meta name="keywords" content="recherche fuite eau belgique, détection fuite non destructive, thermographie fuite, plombier fuite bruxelles">

<meta property="og:title" content="Recherche Fuite d'Eau Belgique — Sans Démolition">
<meta property="og:description" content="Détection acoustique et thermographique. Rapport assurance fourni. 24h/24, dès 95€.">
<meta property="og:url" content="https://www.plombierurgence.be/service/recherche-fuite/">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Recherche Fuite d'Eau — Détection Non Destructive Belgique">
<meta name="twitter:description" content="Sans démolition, rapport assurance inclus. Dès 95€, 24h/24.">

<link rel="canonical" href="https://www.plombierurgence.be/service/recherche-fuite/">
```

---

### Location: Bruxelles `/location/bruxelles/`

**Current title:** `Plombier Bruxelles — Urgence 24/7 | Tarif 2025 dès 60€ | 30 min`
**Assessment:** ✅ Very strong. Minor improvements only.

```html
<title>Plombier Bruxelles — Urgence 24/7 en 20 min | Tarifs 2025 dès 60€ | Plombier Urgence</title>
<meta name="description" content="Plombier à Bruxelles : intervention en 20 min dans les 19 communes. 24h/24, 7j/7. Débouchage dès 60€, fuite dès 95€. Prix fixe garanti avant intervention. ☎ 0465 68 51 58">
<meta name="keywords" content="plombier bruxelles, plombier urgence bruxelles, débouchage bruxelles, dépannage plomberie bruxelles, plombier 19 communes">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Plombier Bruxelles — Urgence 20 min, 24h/24 | Dès 60€">
<meta name="twitter:description" content="19 communes couvertes en 20 min. Débouchage, fuite, chaudière. Prix fixe avant intervention.">

<link rel="canonical" href="https://www.plombierurgence.be/location/bruxelles/">
```

---

### Location Templates — Liège, Namur, Charleroi, Mons

Use this pattern for all location pages:

```html
<!-- LIÈGE -->
<title>Plombier Liège — Urgence 24/7 en 25 min | Tarifs 2025 dès 60€ | Plombier Urgence</title>
<meta name="description" content="Plombier à Liège : intervention rapide en 25 min, 24h/24, 7j/7. Débouchage, fuite, chaudière. Tarifs fixes 2025 dès 60€. Province de Liège couverte. ☎ 0465 68 51 58">
<link rel="canonical" href="https://www.plombierurgence.be/location/liege/">

<!-- NAMUR -->
<title>Plombier Namur — Urgence 24/7 en 25 min | Tarifs 2025 dès 60€ | Plombier Urgence</title>
<meta name="description" content="Plombier à Namur : intervention en 25 min, 24h/24, 7j/7. Débouchage, fuite, panne chaudière. Prix fixe dès 60€, devis gratuit. Province de Namur couverte. ☎ 0465 68 51 58">
<link rel="canonical" href="https://www.plombierurgence.be/location/namur/">

<!-- CHARLEROI -->
<title>Plombier Charleroi — Urgence 24/7 en 30 min | Tarifs 2025 dès 60€ | Plombier Urgence</title>
<meta name="description" content="Plombier à Charleroi : intervention en 30 min, 24h/24, 7j/7. Débouchage, fuite, chaudière. Tarifs fixes 2025 dès 60€. Gilly, Marcinelle, Gosselies couverts. ☎ 0465 68 51 58">
<link rel="canonical" href="https://www.plombierurgence.be/location/charleroi/">

<!-- MONS -->
<title>Plombier Mons — Urgence 24/7 en 30 min | Tarifs 2025 dès 60€ | Plombier Urgence</title>
<meta name="description" content="Plombier à Mons : dépannage en 30 min, 24h/24, 7j/7. Débouchage, fuite, chaudière. Prix fixe dès 60€. La Louvière, Soignies, Tournai couverts. ☎ 0465 68 51 58">
<link rel="canonical" href="https://www.plombierurgence.be/location/mons/">
```

---

### À Propos `/a-propos/`

**Current title:** `À Propos` ❌ (Terrible — zero SEO value)
**Current H1:** `Votre Partenaire Plomberie de Confiance`

```html
<title>À Propos — Plombier Urgence Belgique | 15 Ans d'Expérience, Certifié & Agréé</title>
<meta name="description" content="Découvrez Plombier Urgence : plus de 15 ans d'expérience en plomberie en Belgique. Techniciens certifiés CP1/CP2, garantie 2 ans, disponibles 24h/24. Votre plombier de confiance.">
<meta name="keywords" content="plombier agréé belgique, plombier certifié, plombier expérimenté bruxelles, entreprise plomberie belgique">

<meta property="og:title" content="À Propos — Plombier Urgence | 15 Ans d'Expérience en Belgique">
<meta property="og:description" content="Techniciens certifiés CP1/CP2, 15+ ans d'expérience, garantie 2 ans. Le plombier de confiance en Belgique.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.plombierurgence.be/a-propos/">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="À Propos — Plombier Urgence Belgique Certifié">
<meta name="twitter:description" content="15+ ans d'expérience, certifiés CP1/CP2, garantie 2 ans.">

<link rel="canonical" href="https://www.plombierurgence.be/a-propos/">
```

**Also update H1 to:**
```
Plombier Urgence : 15 Ans d'Expertise en Plomberie en Belgique
```

---

### Blog Post Template

Apply to ALL `/blog/` articles:

```html
<title>{Article Title} — Plombier Urgence | Guide {Year}</title>
<meta name="description" content="{Direct answer to question, 150-160 chars, includes primary keyword + data point}">
<meta name="keywords" content="{keyword1}, {keyword2}, {keyword3}">

<meta property="og:title" content="{Article Title}">
<meta property="og:description" content="{Description}">
<meta property="og:image" content="https://www.plombierurgence.be/images/blog/{slug}-og.jpg">
<meta property="og:url" content="https://www.plombierurgence.be/blog/{slug}/">
<meta property="og:type" content="article">
<meta property="article:published_time" content="{YYYY-MM-DD}">
<meta property="article:author" content="Plombier Urgence">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{Short punchy title}">
<meta name="twitter:description" content="{Description}">

<link rel="canonical" href="https://www.plombierurgence.be/blog/{slug}/">
```

**Example — `/blog/cout-plombier-urgence/`:**
```html
<title>Combien Coûte un Plombier en Urgence la Nuit ? (Tarifs 2025) — Plombier Urgence</title>
<meta name="description" content="Tarifs réels d'un plombier d'urgence la nuit en Belgique 2025 : supplément 30–50% de nuit, exemples de prix concrets. Fuite à 3h du matin → voici le coût exact.">
<meta name="keywords" content="tarif plombier urgence nuit, coût plombier week-end, prix plombier nuit belgique, supplément urgence plombier">
<meta property="og:type" content="article">
<meta property="article:published_time" content="2025-01-15">
<link rel="canonical" href="https://www.plombierurgence.be/blog/cout-plombier-urgence/">
```

---

## 2. JSON-LD Schemas — Per Page Type

### WebPage Schema (for all non-blog, non-service pages)

Add to: Homepage, Tarifs, Zones, Contact, À Propos

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "{Page Title}",
  "description": "{Meta Description}",
  "url": "{Canonical URL}",
  "inLanguage": "fr-BE",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Plombier Urgence",
    "url": "https://www.plombierurgence.be"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.plombierurgence.be/"},
      {"@type": "ListItem", "position": 2, "name": "{Page Name}", "item": "{Canonical URL}"}
    ]
  }
}
```

---

### Article Schema (for all `/blog/` posts)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{Blog Post Title}",
  "description": "{Meta Description}",
  "author": {
    "@type": "Organization",
    "name": "Plombier Urgence",
    "url": "https://www.plombierurgence.be"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Plombier Urgence",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.plombierurgence.be/logo.png"
    }
  },
  "datePublished": "{YYYY-MM-DD}",
  "dateModified": "{YYYY-MM-DD}",
  "url": "https://www.plombierurgence.be/blog/{slug}/",
  "inLanguage": "fr-BE",
  "image": "https://www.plombierurgence.be/images/blog/{slug}.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.plombierurgence.be/blog/{slug}/"
  }
}
```

---

### Organization Schema (for À Propos page)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Plombier Urgence",
  "url": "https://www.plombierurgence.be",
  "logo": "https://www.plombierurgence.be/logo.png",
  "description": "Plombier d'urgence en Belgique depuis plus de 15 ans. Débouchage, réparation fuite, dépannage chaudière. Certifié et agréé. Disponible 24h/24, 7j/7.",
  "telephone": "+32465685158",
  "email": "contact@plombierurgence.be",
  "foundingDate": "2009",
  "areaServed": "Belgique",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "10+"
  },
  "knowsAbout": [
    "Débouchage canalisation",
    "Réparation fuite d'eau",
    "Dépannage chaudière",
    "Rénovation salle de bain",
    "Urgence plomberie"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "Certification CP1/CP2 Synergrid"
    }
  ],
  "sameAs": [
    "https://maps.app.goo.gl/i7W6nLrabKjKykHE9"
  ]
}
```

---

### Service Schema (for each `/service/` page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{Service Name}",
  "serviceType": "Plomberie",
  "provider": {
    "@type": "Plumber",
    "name": "Plombier Urgence",
    "url": "https://www.plombierurgence.be",
    "telephone": "+32465685158"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Belgique"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "servicePhone": "+32465685158",
    "availableLanguage": "Français"
  },
  "offers": {
    "@type": "Offer",
    "price": "{Starting Price}",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "{Starting Price}",
      "priceCurrency": "EUR",
      "description": "Prix de base. Devis gratuit fourni avant intervention."
    }
  },
  "hasWarranty": {
    "@type": "WarrantyPromise",
    "durationOfWarranty": "P2Y",
    "warrantyScope": "Pièces et main d'œuvre"
  }
}
```

**Service-specific fill-ins:**

| Service Page | Service Name | Starting Price |
|---|---|---|
| `/service/debouchage-canalisation/` | Débouchage canalisation | 60 |
| `/service/recherche-fuite/` | Recherche et réparation de fuite | 95 |
| `/service/depannage-chaudiere/` | Dépannage chaudière | 150 |
| `/service/renovation-salle-de-bain/` | Rénovation salle de bain | 500 |
| `/service/reparation-robinetterie/` | Réparation robinetterie | 60 |
| `/service/urgence-plomberie/` | Urgence plomberie | 60 |

---

## 3. On-Page SEO Checklist

### ✅ / ❌ Current Status Per Element

| Element | Homepage | Tarifs | Services | Locations | Blog | À Propos |
|---|---|---|---|---|---|---|
| H1 contains primary keyword | ✅ | ⚠️ Brussels only | ✅ | ✅ | ✅ | ❌ |
| Single H1 per page | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| H2/H3 logical hierarchy | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Title tag optimized | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| Meta description 150–160 chars | ✅ | ⚠️ | ✅ | ✅ | ✅ | ⚠️ |
| Canonical tag | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| OG title + description | ✅ | ✅ | ✅ | ✅ | ⚠️ | ⚠️ |
| OG image (1200×630) | ❓ | ❓ | ❓ | ❓ | ❌ | ❌ |
| Twitter Card | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Images with alt text | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| Internal links | ✅ | ✅ | ✅ | ✅ | ⚠️ | ⚠️ |
| External links noopener | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |
| JSON-LD schema | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Mobile-friendly | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Page speed < 3s | ❓ | ❓ | ❓ | ❓ | ❓ | ❓ |

> ❓ = Could not verify remotely — must be checked in browser DevTools or PageSpeed Insights.

---

## 4. Image Alt Text Guidelines

Every image on the site must have a descriptive alt attribute. Current images are likely missing proper alt text.

**Naming formula:**
```
alt="{what is shown} — {keyword context} | Plombier Urgence"
```

**Examples per page:**

| Image | Bad Alt | Good Alt |
|---|---|---|
| Hero image of plumber working | `""` or `"hero"` | `"Technicien plombier intervenant en urgence à Bruxelles — Plombier Urgence"` |
| Débouchage photo | `"image1.jpg"` | `"Hydrocurage haute pression pour débouchage canalisation en Belgique"` |
| Chaudière repair | `""` | `"Dépannage chaudière gaz par technicien certifié CP1 en Belgique"` |
| Map/zone image | `""` | `"Carte des zones d'intervention de Plombier Urgence en Belgique"` |
| Team photo | `""` | `"Équipe de plombiers certifiés de Plombier Urgence, disponibles 24h/24"` |
| Logo | `""` | `"Logo Plombier Urgence — Plombier d'urgence en Belgique"` |

---

## 5. Internal Linking Strategy

### Current State
- Basic navigation links exist (Accueil → Services → Tarifs → Zones → Avis → Contact)
- Service pages link to each other ("Vous pourriez aussi avoir besoin de…")
- Blog posts appear to have minimal internal links

### Recommended Internal Link Map

```
Homepage
├── → Services (hub page)
│   ├── → /service/debouchage-canalisation/
│   ├── → /service/urgence-plomberie/
│   ├── → /service/recherche-fuite/
│   ├── → /service/depannage-chaudiere/
│   ├── → /service/renovation-salle-de-bain/
│   └── → /service/reparation-robinetterie/
├── → Tarifs (from every service page)
├── → /location/bruxelles/ (from "Bruxelles" mentions in content)
├── → /location/liege/, /namur/, /charleroi/ (from respective city mentions)
└── → Blog articles (contextual links from service pages)

Blog Posts → Internal Links Required
├── /blog/deboucher-wc/ → /service/debouchage-canalisation/ (CTA)
├── /blog/fuite-eau-que-faire/ → /service/recherche-fuite/ (CTA)
├── /blog/panne-chaudiere/ → /service/depannage-chaudiere/ (CTA)
├── /blog/tarif-plombier/ → /tarifs/ (link "grille tarifaire")
└── /blog/cout-plombier-urgence/ → /tarifs/ + /service/urgence-plomberie/
```

### Anchor Text Rules
- **DO:** Use descriptive anchor text: `"nos tarifs de débouchage"`, `"plombier urgence à Bruxelles"`
- **DON'T:** Use generic anchors like `"cliquez ici"`, `"en savoir plus"`, `"voir"`
- **Target 2–5 internal links per page** minimum
- Every blog post should have **at least 1 internal link to a service page**

---

## 6. External Links — Security Fix

All external links must include `rel="noopener noreferrer"` to prevent tab-napping and signal trust to Google.

**Check and fix these external links:**
```html
<!-- Google Maps links (multiple pages) -->
<a href="https://maps.app.goo.gl/i7W6nLrabKjKykHE9" 
   target="_blank" 
   rel="noopener noreferrer">
  Voir sur Google Maps →
</a>

<!-- WhatsApp link -->
<a href="https://wa.me/32465685158" 
   target="_blank" 
   rel="noopener noreferrer">
  WhatsApp
</a>

<!-- Any citation links added per geo-optimization.md -->
<a href="https://statbel.fgov.be" 
   target="_blank" 
   rel="noopener noreferrer">
  Statbel
</a>
```

---

## 7. Page Speed & Core Web Vitals Recommendations

Cannot measure remotely without browser access, but based on Astro framework and site structure:

| Recommendation | How to Implement in Astro |
|---|---|
| **Lazy load images** | Add `loading="lazy"` to all `<img>` below the fold |
| **WebP format** | Astro's `<Image>` component handles this automatically |
| **Preload LCP image** | Add `<link rel="preload" as="image" href="/hero.webp">` to Layout.astro |
| **Minimize render-blocking CSS** | Use Astro's built-in CSS scoping |
| **Font display swap** | Add `font-display: swap` in CSS for Google Fonts |
| **Defer non-critical JS** | Astro's `client:idle` or `client:visible` directives |

**Target metrics:**
- LCP (Largest Contentful Paint) < 2.5s
- FID / INP < 100ms
- CLS (Cumulative Layout Shift) < 0.1

---

## 8. Priority Action Plan — Traditional SEO

| # | Priority | Action | Page(s) | Impact |
|---|---|---|---|---|
| 1 | 🔴 | Add `<link rel="canonical">` to ALL pages (implement in Layout.astro) | ALL | High — prevents duplicate indexing |
| 2 | 🔴 | Add Twitter Card meta to ALL pages | ALL | Medium — social sharing |
| 3 | 🔴 | Fix `À Propos` title tag (currently just "À Propos") | a-propos | Medium — zero-keyword title |
| 4 | 🔴 | Fix Tarifs page: change H1 + title from "Bruxelles" to "Belgique 2025" | tarifs | High — losing national traffic |
| 5 | 🔴 | Add `Article` JSON-LD schema to all blog posts | 20+ blog posts | High — E-E-A-T + AI |
| 6 | 🔴 | Add `Organization` JSON-LD to À Propos page | a-propos | High — brand entity |
| 7 | 🟠 | Add `Service` JSON-LD schema to all 6 service pages | 6 service pages | High — rich results |
| 8 | 🟠 | Audit and fix all image alt text | ALL | Medium — accessibility + SEO |
| 9 | 🟠 | Add `datePublished` to all blog posts (visible + meta) | 20+ blog posts | Medium — freshness signal |
| 10 | 🟠 | Add `rel="noopener noreferrer"` to all external links | ALL | Low — security signal |
| 11 | 🟠 | Implement internal linking map (blog → service pages) | Blog posts | High — PageRank flow |
| 12 | 🟠 | Create OG images (1200×630) for homepage, services, cities | Key pages | Medium — CTR on social |
| 13 | 🟢 | Add `WebPage` + `BreadcrumbList` schema to all pages | ALL | Medium — SERP breadcrumbs |
| 14 | 🟢 | Add `og:locale` = `fr_BE` to all pages | ALL | Low |
| 15 | 🟢 | Add `og:site_name` = `Plombier Urgence` to all pages | ALL | Low |

---

## 9. Astro Implementation Guide

Since the site is built with Astro, most of these changes belong in `Layout.astro` or page-level front matter.

### In `Layout.astro` — Add once, applies everywhere:

```astro
---
const { title, description, canonical, ogImage = '/images/og-default.jpg', ogType = 'website' } = Astro.props;
const canonicalURL = canonical || new URL(Astro.url.pathname, Astro.site).toString();
---

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>{title}</title>
  <meta name="description" content={description} />
  
  <!-- Canonical -->
  <link rel="canonical" href={canonicalURL} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:type" content={ogType} />
  <meta property="og:locale" content="fr_BE" />
  <meta property="og:site_name" content="Plombier Urgence" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</head>
```

### In each page's frontmatter — pass props:

```astro
---
// e.g., tarifs.astro
const title = "Tarifs Plombier Belgique 2025 — Prix Fixes Transparents | Plombier Urgence";
const description = "Tarifs plombier Belgique 2025 : débouchage dès 60€, fuite dès 95€, chaudière dès 150€. Prix fixes avant intervention. Devis gratuit. ☎ 0465 68 51 58";
const canonical = "https://www.plombierurgence.be/tarifs/";
---
<Layout title={title} description={description} canonical={canonical}>
  <!-- page content -->
</Layout>
```
