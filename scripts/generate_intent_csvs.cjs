const fs = require('fs');
const path = require('path');

const REPORTS_DIR = path.join(__dirname, '../reports');

// --- gsc-query-page-verification.csv ---
const gscData = [
  'query,page,clicks,impressions,ctr,position,verified,date_range',
  'plombier urgence bruxelles,https://www.plombierurgence.be/,6,1289,0.47%,6.7,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'plombier bruxelles urgence,https://www.plombierurgence.be/,2,522,0.38%,7.7,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'urgence plombier,https://www.plombierurgence.be/,0,324,0.00%,1.1,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'plombier bruxelles,https://www.plombierurgence.be/,1,1724,0.06%,25.0,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'plombier 24h namur,https://www.plombierurgence.be/zones/province-de-namur/namur/,1,246,0.41%,2.2,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'plombier urgence namur,https://www.plombierurgence.be/zones/province-de-namur/namur/,0,396,0.00%,6.6,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'plombier 24h verviers,https://www.plombierurgence.be/zones/province-de-liege/verviers/,0,240,0.00%,3.7,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'plombier urgence verviers,https://www.plombierurgence.be/zones/province-de-liege/verviers/,1,247,0.40%,4.9,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'réparation robinetterie bruxelles,https://www.plombierurgence.be/service/reparation-robinetterie/,0,474,0.00%,7.8,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'replacement robinet bruxelles,https://www.plombierurgence.be/service/reparation-robinetterie/,0,358,0.00%,8.8,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'installation robinetterie bruxelles,https://www.plombierurgence.be/service/reparation-robinetterie/,0,305,0.00%,8.9,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
  'débouchage prix bruxelles,https://www.plombierurgence.be/blog/prix-debouchage-canalisation-bruxelles/,0,255,0.00%,9.8,Yes (inferred from content),9 Jun 2026 - 8 Sep 2026',
];

fs.writeFileSync(path.join(REPORTS_DIR, 'gsc-query-page-verification.csv'), gscData.join('\n'));
console.log('Generated reports/gsc-query-page-verification.csv');

// --- seo-intent-map.csv ---
const intentData = [
  'primary_query,secondary_queries,search_intent,primary_url,supporting_urls,decision,reason,title,h1,content_action,internal_link_sources',
  'plombier urgence bruxelles,"plombier bruxelles urgence, urgent plombier bruxelles, plombier 24h bruxelles, plombier bruxelles",Emergency Plumber Brussels,https://www.plombierurgence.be/,,Homepage owns main Brussels intent,Primary URL,"Plombier Urgence Bruxelles 24h/24 | Dès 80€","Plombier urgence Bruxelles 24h/24",Target exact cluster in first 150 words,Sitewide (Logo)',
  'plombier urgence namur,plombier 24h namur,Emergency Plumber Namur,https://www.plombierurgence.be/zones/province-de-namur/namur/,,Keep and improve,Existing page matches well,"Plombier Urgence Namur 24h/24 | Intervention rapide","Plombier urgence Namur 24h/24",Add unique local content,Homepage / Zones / Footer',
  'plombier verviers,plombier 24h verviers,Emergency Plumber Verviers,https://www.plombierurgence.be/zones/province-de-liege/verviers/,,Keep and improve,Existing page matches well,"Plombier Verviers 24h/24 | Dépannage et urgence","Plombier Verviers 24h/24",Add unique local content,Province hub / Services',
  'réparation robinetterie bruxelles,"replacement robinet bruxelles, installation robinetterie bruxelles",Faucet Repair Brussels,https://www.plombierurgence.be/service/reparation-robinetterie/,,Keep and retarget to Brussels demand,Strongest relevant page,"Réparation robinetterie Bruxelles | Tarif et dépannage 24/7","Réparation et installation de robinetterie à Bruxelles",Fix grammar and remove off-topic sections,Homepage / Pricing / Guides',
  'tarif plombier bruxelles,,Commercial Pricing,https://www.plombierurgence.be/tarifs/,https://www.plombierurgence.be/blog/prix-maximum-garanti-plombier/,Keep as main pricing page,Consolidate commercial intent,"Tarif plombier Bruxelles 2026 | Prix dépannage et débouchage","Tarifs plombier à Bruxelles en 2026",Update to 2026 rates,Sitewide / Services',
  'combien coûte un plombier en Belgique,,Informational Pricing,https://www.plombierurgence.be/blog/tarif-plombier-urgence-belgique-2025/,,Keep as informational guide,Separate from commercial,"Combien coûte un plombier en Belgique en 2026 ?","Combien coûte un plombier en Belgique ?",Explain rates and factors,Guides',
  'débouchage canalisation bruxelles,,Commercial Drain Unblocking,https://www.plombierurgence.be/service/debouchage-canalisation/,https://www.plombierurgence.be/blog/debouchage-canalisation-bruxelles-solutions-rapides/,Consolidate competing service URLs,Avoid cannibalization,"Débouchage canalisation Bruxelles 24h/24 | Dès 80€","Débouchage de canalisation à Bruxelles",Consolidate thin pages,Homepage / Pricing',
  'prix débouchage canalisation bruxelles,débouchage prix bruxelles,Informational Drain Prices,https://www.plombierurgence.be/blog/prix-debouchage-canalisation-bruxelles/,https://www.plombierurgence.be/blog/quel-est-le-prix-debouchage-bruxelles/,Keep one informational price guide,Avoid cannibalization,"Prix débouchage canalisation Bruxelles 2026 | Guide","Prix débouchage canalisation Bruxelles",Consolidate thin pages,Services / Guides',
  'rénovation salle de bain bruxelles,,Bathroom Renovation,https://www.plombierurgence.be/service/renovation-salle-de-bain/,,Improve existing service page,Currently ranks poorly,"Rénovation salle de bain Bruxelles | Devis et réalisation","Rénovation de salle de bain à Bruxelles",Add process and scope,Homepage / Services'
];

fs.writeFileSync(path.join(REPORTS_DIR, 'seo-intent-map.csv'), intentData.join('\n'));
console.log('Generated reports/seo-intent-map.csv');
