# Plan d'Action SEO Priorisé (Plombier Urgence)
**URL cible :** `https://www.plombierurgence.be/`  
**Date :** 17 Octobre 2026

Ce plan d'action hiérarchise les interventions selon leur impact SEO direct et leur facilité de mise en œuvre (Impact vs Effort vs Dépendances).

---

## Phase 1 : Bloquants Immédiats (Critique — Résolu ✅)

### 1.1 Unifier et corriger le balisage Schema.org `LocalBusiness` — [RÉSOLU ✅]
- **Statut :** Appliqué et validé le 17 Octobre 2026.
- **Corrections apportées :**
  - Fusionné les schémas en un seul nœud `LocalBusiness` canonique avec `@id: "https://www.plombierurgence.be/#organization"`.
  - Éliminé le doublon `localBusinessSchema` dans [index.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/pages/index.astro).
  - Remplacé le faux `LocalBusiness` de [plombier-bruxelles-urgence.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/pages/plombier-bruxelles-urgence.astro) par un schéma `Service` relié au `#organization`.
  - Retiré les schémas dépréciés `HowTo` (supprimés par Google depuis Septembre 2023).
  - Harmonisé les coordonnées GPS exactes (`50.8454, 4.3399`) et synchronisé les tarifs du catalogue avec le référentiel [pricing.ts](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/data/pricing.ts).
  - Relié le nœud `WebPage` et `WebSite` via `publisher` et `about` vers `#organization`.

---

## Phase 2 : Quick Wins (Fort Impact, Faible Effort — Résolu ✅)

### 2.1 Forcer la redirection permanente 301 de l'Apex Domain (`plombierurgence.be`) — [RÉSOLU ✅]
- **Statut :** Configuré dans [vercel.json](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/vercel.json) avec `has: [{ "type": "host", "value": "plombierurgence.be" }]` redirigeant vers `https://www.plombierurgence.be/:path*` en `permanent: true` (HTTP 301/308).

### 2.2 Créer les réécritures/alias pour les URLs standards de Sitemap — [RÉSOLU ✅]
- **Statut :** Ajouté dans [vercel.json](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/vercel.json) sous `"rewrites"` : alias directs pour `/sitemap.xml` et `/sitemap_index.xml` vers `/sitemap-index.xml`.

### 2.3 Remplacer les ancres internes génériques « En savoir plus » — [RÉSOLU ✅]
- **Statut :** Remplacé sur l'ensemble des composants et gabarits :
  - [ServiceCard.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/components/ServiceCard.astro) : `Détails & tarifs — {title}`.
  - [commune.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/pages/zones/%5Bprovince%5D/%5Bcommune%5D.astro) : `Intervention & tarifs {service} à {commune.name} →`.
  - [service.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/pages/service/%5Bservice%5D.astro) : `Découvrir le service {r.title} →`.
  - [faq slug.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/pages/faq/%5Bslug%5D.astro) : `Voir les détails de {r.title} →`.
  - Articles de blog : liens d'ancres descriptifs enrichis vers `/a-propos/`.

### 2.4 Ajouter les dimensions d'images Open Graph — [RÉSOLU ✅]
- **Statut :** Balises `og:image:width: 1200` et `og:image:height: 630` injectées dans [Layout.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/layouts/Layout.astro) pour l'ensemble des 206 pages.

---

## Phase 3 : Améliorations Stratégiques (Phase 3 — Résolu ✅)

### 3.1 Maillage Interne Transversal & Désenclavement des 148 Pages Régionales et Articles de Blog — [RÉSOLU ✅]
- **Statut :** Appliqué et vérifié par graphe d'analyse de liens internes (0 page orpheline sur 206 pages).
- **Corrections apportées :**
  - **Maillage circulaire inter-communes :** Dans [commune.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/pages/zones/%5Bprovince%5D/%5Bcommune%5D.astro), remplacement du `.slice(0, 5)` par une rotation déterministe glissante de 6 communes voisines afin que 100% des communes reçoivent des liens entrants réciproques.
  - **Désenclavement des pages Province :** Corrigé le fil d'Ariane pour lier vers `/zones/${province.slug}/` (au lieu de l'ancre `/zones#slug`) et ajouté les liens cliquables sur les en-têtes de [zones.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/pages/zones.astro).
  - **Communes -> Guides de Blog :** Injection automatique de 4 guides de blog pertinents distribués de façon pseudo-aléatoire et déterministe sur chacune des 88 pages communales (352 liens sortants vers les guides).
  - **Blog -> Communes & Interlinking Blog :** Création du composant [BlogTransversalLinks.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/components/BlogTransversalLinks.astro) injecté dans [Layout.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/layouts/Layout.astro) sur l'ensemble des 103 articles de blog :
    - 4 articles connexes par article (boucle continue de crawl).
    - 8 chips de zones d'intervention locales géographiquement réparties avec ancres riches (ex: *Plombier {commune} (dépannage 24/7)*).
  - **Services -> Régions :** Ciblage direct des cartes de zones d'intervention depuis [service.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/pages/service/%5Bservice%5D.astro) vers les pages de provinces et de communes.
  - **FAQ Interlinking :** Remplacement du filtre partiel par une liaison transversale complète entre questions fréquentes.

### 3.2 Injecter les balises `<lastmod>` dans le Sitemap XML — [RÉSOLU ✅]
- **Statut :** Configuré dans [astro.config.mjs](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/astro.config.mjs) via `lastmod: new Date()` et le sérialiseur `@astrojs/sitemap`. Validé dans `dist/sitemap-0.xml` avec balises `<lastmod>` horodatées présentes sur l'intégralité des 206 URLs.

### 3.3 Renforcer les pages E-E-A-T et Profils d'Experts
- **Statut :** Page expert [julien-v.astro](file:///c:/Users/MEDLO/Desktop/coding%20projects/new%20plombier/src/pages/expert/julien-v.astro) créée ; profils d'experts additionnels à planifier.

---

## Phase 4 : Surveillance & Suivi (Récurrent)

1. **Google Search Console** :
   - Surveiller la couverture d'indexation des 206 URLs du sitemap.
   - Vérifier l'absence d'erreurs d'exploration sur les redirections.
2. **Monitoring Core Web Vitals (CrUX)** :
   - Maintenir LCP < 2.5s, INP < 200ms et CLS < 0.1 sur mobile sur l'ensemble des templates Astro.
3. **Moteurs d'IA (Perplexity, ChatGPT Search, Gemini)** :
   - Vérifier régulièrement la citation du domaine lors des requêtes d'urgence plomberie en Belgique grâce aux synthèses fournies par `llms.txt`.
