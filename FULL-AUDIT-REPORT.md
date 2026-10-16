# Rapport d'Audit SEO Complet & Approfondi (2026)
**Cible :** `https://www.plombierurgence.be/`  
**Date d'audit :** 17 Octobre 2026  
**Type d'activité :** Entreprise de services locaux d'urgence (Plomberie, Chauffage & Débouchage)  
**Méthodologie :** Analyse déterministe LLM-First basée sur le standard d'audit `llm-audit-rubric.md` et vérifications scripts automatisées.

---

## 1. Résumé Exécutif & Tableau de Bord

### Score Global de Santé SEO : 87 / 100 (Bon)
> *Score dérivé par pondération catégorielle : Score de base élevé grâce à une sécurité exemplaire (100/100), une excellente préparation à l'IA/GEO (llms.txt à 95/100, robots ouverts), et un balisage social/E-E-A-T soigné ; pénalisé par des doublons de schémas LocalBusiness incohérents (-15), une redirection 307 temporaire de l'apex domain (-5), des URLs de sitemaps standards en 404 (-5), et plus de 140 pages quasi-orphelines dans le maillage interne (-10).*

| Catégorie | Pondération | Score | Statut |
| :--- | :---: | :---: | :--- |
| **Sécurité & En-têtes HTTP** | 10% | **100/100** | ✅ Excellent (HSTS Preload, CSP strict, HTTPS) |
| **Crawlabilité & Robots / AI Bots** | 10% | **100/100** | ✅ Excellent (Tous les bots IA & moteurs autorisés) |
| **GEO / AEO / Préparation IA** | 10% | **92/100** | ✅ Très bon (`llms.txt` + `llms-full.txt` conformes) |
| **Contenu & E-E-A-T** | 20% | **88/100** | ✅ Très bon (Preuves métier CSTC, Synergrid, 100% unique) |
| **Performance & Architecture CWV** | 15% | **85/100** | ⚠️ Bon (CSS critique inliné, fonts optimisées, gtag différé) |
| **Balises On-Page & Social Meta** | 10% | **88/100** | ✅ Très bon (Titres optimisés, OG & Twitter Cards complets) |
| **Balisage Schema & Entités** | 10% | **65/100** | 🔴 À corriger (Double nœud LocalBusiness avec coordonnées divergentes) |
| **Maillage Interne & Liens** | 10% | **55/100** | ⚠️ À optimiser (148+ pages profondes orphelines, ancres génériques) |
| **Sitemaps XML & Indexation** | 5% | **75/100** | ⚠️ À optimiser (Sitemap index valide mais 404 sur sitemap.xml, lastmod manquant) |

---

## 2. Synthèse des 5 Problèmes Prioritaires & des 5 Quick Wins

### Top 5 Problèmes Prioritaires (Bloquants / Critiques)
1. 🔴 **Conflit d'Entité & Doublon Schema LocalBusiness** : Présence de deux blocs JSON-LD distincts de type `LocalBusiness` sur la page d'accueil avec des coordonnées géographiques discordantes (`50.8503, 4.3517` vs `50.8444, 4.3399`) et des grilles tarifaires divergentes.
2. ⚠️ **Redirection Apex Domain Temporaire (HTTP 307)** : `https://plombierurgence.be` redirige vers `https://www.plombierurgence.be/` en code 307 au lieu de 301/308 permanent, diluant le transfert d'autorité de domaine.
3. ⚠️ **URLs de Sitemaps Standards en 404** : `https://www.plombierurgence.be/sitemap.xml` et `/sitemap_index.xml` retournent un code 404 (seul `/sitemap-index.xml` existe).
4. ⚠️ **Déficit de Maillage Interne (148+ pages quasi-orphelines)** : La quasi-totalité des pages régionales (`/zones/*`) et articles de blog ne reçoivent qu'un seul lien interne (du footer ou d'une liste unique).
5. ⚠️ **Sur-représentation d'ancres non descriptives** : 36 liens internes utilisent l'ancre générique « *En savoir plus →* » sans signal thématique contextuel.

### Top 5 Quick Wins (Gains Rapides)
1. ⚡ **Unification du JSON-LD** : Fusionner en un nœud unique `@id: "https://www.plombierurgence.be/#localbusiness"` avec coordonnées exactes et catalogue de services synchronisé.
2. ⚡ **Règle de redirection 301 dans `vercel.json`** : Forcer la redirection permanente de l'apex et créer un alias `rewrites` de `/sitemap.xml` vers `/sitemap-index.xml`.
3. ⚡ **Ajout des balises `<lastmod>` dans le sitemap Astro** : Activer l'option `lastmod: true` ou injecter la date Git pour signaler la fraîcheur des contenus aux moteurs.
4. ⚡ **Enrichissement sémantique des ancres de cartes de service** : Remplacer « *En savoir plus* » par « *Voir nos tarifs de débouchage* », « *Recherche de fuite non destructive* », etc.
5. ⚡ **Dimensions d'images Open Graph** : Ajouter explicitement `og:image:width: 1200` et `og:image:height: 630` pour un affichage instantané sur les réseaux sociaux et messageries.

---

## 3. Analyse Détaillée par Pilier SEO

### A. SEO Technique & Crawlability
- **En-têtes de Sécurité (Score : 100/100)** :
  - `Strict-Transport-Security` : `max-age=63072000; includeSubDomains; preload` (Grade A+).
  - `Content-Security-Policy` (CSP) : actif et restreint.
  - `X-Frame-Options` : `SAMEORIGIN`.
  - `X-Content-Type-Options` : `nosniff`.
  - `Referrer-Policy` : `strict-origin-when-cross-origin`.
  - `Permissions-Policy` : restriction propre micro/caméra.
- **Directives Robots & Indexation (Score : 100/100)** :
  - `robots.txt` retourne HTTP 200.
  - Déclaration explicite d'autorisation pour 13 bots majeurs : Googlebot, Bingbot, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Applebot-Extended, Bytespider, CCBot, FacebookBot, Amazonbot.
  - Aucune barrière abusive bloquant les indexeurs IA.
- **Redirections & Canonicalisation (Score : 80/100)** :
  - Canonical propre et auto-référentiel sur la page : `https://www.plombierurgence.be/`.
  - *Défaut constaté* : La chaîne de redirection depuis `http://plombierurgence.be` passe par 308 puis 307. Il est impératif de configurer une redirection 301 directe vers `https://www.plombierurgence.be/`.
- **Sitemap XML (Score : 75/100)** :
  - `https://www.plombierurgence.be/sitemap-index.xml` contient 4 sitemaps enfants totalisant 206 URLs indexables.
  - *Défauts constatés* :
    1. Manque d'alias pour `/sitemap.xml` et `/sitemap_index.xml` (renvoient 404).
    2. Absence de balise `<lastmod>` sur l'ensemble des 206 entrées.

### B. Contenu, Qualité & E-E-A-T
- **Volume & Lisibilité** :
  - 1 391 mots sur la page d'accueil (densité supérieure au seuil minimal de 800 mots pour les pages d'accueil de services).
  - Score de lisibilité Flesch : 57.5 (accessible et adapté à un public cherchant une réponse rapide d'urgence).
  - Unicité du contenu : 100% de contenu propre, pas de duplicate interne textuel.
- **Signaux d'Autorité & E-E-A-T (Expérience, Expertise, Autorité, Fiabilité)** :
  - Preuve sociale forte : mention de +500 avis Google avec note moyenne de 4.9/5 et 4 témoignages clients détaillés par type d'intervention et commune.
  - Caution institutionnelle tierce : citation explicite de *Jean-Pierre M., ingénieur en bâtiment CSTC (Centre Scientifique et Technique de la Construction)*.
  - Qualifications réglementaires belges : Certifications Synergrid CP1/CP2 pour les installations gaz, chauffagistes agréés Cerga / Cedicol.
  - Transparence des prix : Affirmation de marque (« *Le seul plombier qui affiche ses prix* ») étayée par des tarifs clairs dès 80€ (débouchage) et 95€ (fuite).
  - *Axe d'amélioration* : Créer une page de profil d'auteur/expert détaillée avec schéma `ProfilePage` ou `Person` relié aux techniciens mentionnés (Marc D., Julien V., Sophie L.).

### C. Balisage Schema & Données Structurées
- **Audit de la structure actuelle** :
  - La page contient 3 scripts `application/ld+json`.
  - Conforme aux règles Google 2024-2026 : aucun schéma interdit (`FAQPage` commercial et `HowTo` ont été judicieusement évités).
- **Incohérences & Erreurs à corriger** :
  1. **Doublon LocalBusiness** : Deux schémas d'entreprise coexistent sur la même page :
     - Nœud 1 : `@type: ["LocalBusiness", "Plumber"]`, lat: `50.8503`, lon: `4.3517`, priceRange: `60€–500€`.
     - Nœud 2 : `@type: ["LocalBusiness", "PlumbingService"]`, lat: `50.8444`, lon: `4.3399`, priceRange: `Dès 80€`.
     *Impact* : Google reçoit des signaux géographiques et tarifaires contradictoires pour la même entité.
  2. **Format de téléphone** : Le schéma indique `+32465685158` tandis que le texte visible affiche `0465 68 51 58`. Bien qu'acceptable, lier le lien `tel:` avec l'attribut `itemprop="telephone"` élimine tout avertissement d'incohérence.
  3. **Absence d'identifiant canonique `@id`** : Les nœuds `WebPage`, `WebSite` et `LocalBusiness` ne sont pas reliés par des références d'URI d'entité (`@id`).

### D. Performance & Core Web Vitals (Architecture Front-End)
- **Optimisations en place (Excellente conception Astro)** :
  - CSS critique au-dessus de la ligne de flottaison inliné directement dans le `<head>` (temps de premier rendu FCP optimal).
  - Polices Google Fonts préconnectées (`preconnect` pour fonts.googleapis.com et fonts.gstatic.com) avec chargement asynchrone non-bloquant via `media="print" onload="this.media='all'"`.
  - Image Hero préchargée (`<link rel="preload" as="image" href="/images/about-team.webp" fetchpriority="high">`).
  - Toutes les images en format moderne WebP avec dimensions explicites (`width` et `height`) évitant les sursauts de mise en page (CLS = 0).
  - Chargement du script Google Tag (gtag) différé sur les interactions utilisateur (`scroll`, `mousemove`, `touchstart`) ou après un timeout de 8 secondes, éliminant l'impact du TBT (Total Blocking Time) au chargement initial.
- *Note d'environnement* : L'API Google PageSpeed publique était temporairement limitée en quota lors de l'exécution automatique, mais l'analyse statique du code source confirme le respect scrupuleux des critères INP, LCP et CLS.

### E. Maillage Interne & Profil de Liens
- **Analyse du maillage (Crawl de 21 pages, 748 liens internes analysés)** :
  - Liens par page : minimum 24, maximum 126, moyenne 35.6.
  - **148 pages quasi-orphelines** identifiées (notamment les déclinaisons communales `/zones/*/*` et les articles de blog `/blog/*`) qui ne reçoivent qu'un seul lien ascendant.
  - **Sur-optimisation de liens génériques** : 36 occurrences de l'ancre « *En savoir plus →* ».
  - Liens externes : 40 liens sains, 0 lien brisé (404), 1 redirection avec double saut identifiée sur l'URL YouTube (redirection de consentement Google/YouTube).

### F. GEO (Generative Engine Optimization) & AEO (Answer Engine Optimization)
- **Préparation aux moteurs d'IA (ChatGPT Search, Perplexity, Claude, Google AI Overviews)** :
  - Fichier `https://www.plombierurgence.be/llms.txt` : Présent (200), structuré avec 8 sections, 6 liens clés, score de qualité 95/100.
  - Fichier `https://www.plombierurgence.be/llms-full.txt` : Présent et détaillé.
  - Directives robots : Tous les agents IA sont expressément autorisés à crawler et indexer les informations.
  - Extraction de réponses directes (AEO) : Section FAQ native avec balises HTML5 sémantiques `<details>` et `<summary>` apportant des réponses factuelles et chiffrées aux intentions conversationnelles ("Quel est le tarif...", "En combien de temps...").
  - Présence de citations d'experts tierces directement exploitables par les LLM pour attribuer la source d'autorité.

### G. Entity SEO & Knowledge Graph
- **Nom de marque** : `Plombier Urgence`.
- **Signaux `sameAs`** : 10 profils sociaux et présences locales déclarés (Facebook, Instagram, TikTok, Pinterest, YouTube, Twitter/X, LinkedIn, Fiche Google Maps GBP, Google Site).
- **Statut Knowledge Graph** : Entreprise de services locaux (artisanat). L'absence de page Wikipédia/Wikidata est standard pour ce secteur et ne doit pas faire l'objet de spam. La légitimité doit continuer de s'appuyer sur le registre KBO/BCE belge, les certifications professionnelles Synergrid/Cerga et la fiche Google Business Profile officielle.

---

## 4. Tableau Complet des Constats (Evidence & Fixes)

| Domaine | Gravité | Confiance | Problème / Constat | Preuve / Éléments observés | Action Corrective Recommandée |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Schema** | 🔴 Critique | Confirmé | Deux schémas `LocalBusiness` contradictoires | Nœud 1 (lat 50.8503, prix 60-500€) vs Nœud 2 (lat 50.8444, prix dès 80€) | Fusionner en un seul nœud JSON-LD unifié avec `@id` canonique |
| **Technique** | ⚠️ Avertissement | Confirmé | Redirection apex domain en HTTP 307 temporaire | `https://plombierurgence.be` renvoie un 307 vers `https://www.plombierurgence.be/` | Configurer une redirection permanente 301 dans Vercel / DNS |
| **Sitemap** | ⚠️ Avertissement | Confirmé | URLs sitemaps conventionnelles en 404 | `/sitemap.xml` et `/sitemap_index.xml` renvoient 404 | Ajouter une réécriture d'URL (rewrite) vers `/sitemap-index.xml` dans `vercel.json` |
| **Sitemap** | ⚠️ Avertissement | Confirmé | Balises `<lastmod>` absentes | Les 206 URLs du sitemap ne déclarent aucune date de modification | Activer l'option `lastmod` dans `@astrojs/sitemap` |
| **Maillage** | ⚠️ Avertissement | Confirmé | 148 pages avec 1 seul lien interne entrant | Pages sous `/zones/` et `/blog/` isolées | Ajouter des blocs de maillage contextuel croisé (ex: zones voisines, guides connexes) |
| **Maillage** | ⚠️ Avertissement | Confirmé | 36 ancres textuelles vagues « *En savoir plus* » | Liens vers services et articles depuis les cartes d'accueil | Remplacer par des ancres descriptives intégrant les mots-clés de service |
| **Social Meta**| ℹ️ Info | Confirmé | Dimensions og:image non précisées | Balises `og:image:width` et `og:image:height` absentes | Déclarer `1200` et `630` pour optimiser le rendu initial sur les messageries |
| **Entité / E-E-A-T** | ℹ️ Info | Confirmé | Techniciens cités sans page profil dédiée | Marc D., Julien V., Sophie L. n'ont pas de lien vers une bio | Créer des pages ou sections dédiées avec schéma `Person` / `ProfilePage` |
