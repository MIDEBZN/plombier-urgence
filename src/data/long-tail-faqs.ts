// Long-tail FAQ pages — focused answer-shaped content for AI search citation
export interface LongTailFAQ {
  slug: string;
  question: string;
  metaTitle: string;
  metaDescription: string;
  /** Direct answer paragraph (2-4 sentences, with prices/times/communes) */
  directAnswer: string;
  /** Expanded body content — HTML string with multiple paragraphs */
  bodyContent: string;
  /** Related service slugs for internal linking */
  relatedServices: string[];
  /** Related commune names for internal linking */
  relatedCommunes: string[];
  /** Sub-FAQs to build FAQ schema on this page */
  subFaqs: { q: string; a: string }[];
}

export const longTailFaqs: LongTailFAQ[] = [
  // ─── DÉBOUCHAGE ─────────────────────────────────
  {
    slug: 'combien-coute-debouchage-urgence-bruxelles',
    question: 'Combien coûte un débouchage d\'urgence à Bruxelles ?',
    metaTitle: 'Prix Débouchage Urgence Bruxelles — Tarif 2025 dès 80€ | Plombier Urgence',
    metaDescription: 'Débouchage urgence Bruxelles : tarif 2025 à partir de 80€ TTC. Intervention en 30 min, 24h/24. WC, évier, canalisation principale. Prix fixe avant intervention. ☎ 0465 68 51 58',
    directAnswer: 'Un débouchage d\'urgence à Bruxelles coûte à partir de 80€ TTC pour un débouchage simple (WC, évier, douche). Pour une canalisation principale, le tarif démarre à 150€. Un supplément de 50€ s\'applique la nuit et le week-end. Le prix exact est toujours communiqué AVANT l\'intervention. Nos plombiers arrivent en 30 minutes dans les 19 communes de Bruxelles.',
    bodyContent: `
      <p>Le prix d'un débouchage à Bruxelles dépend de trois facteurs principaux : le type de sanitaire bouché (WC, évier, canalisation principale), la technique utilisée (furet mécanique ou hydrocurage haute pression) et l'horaire d'intervention (jour, nuit ou week-end).</p>
      <h3>Grille tarifaire débouchage Bruxelles 2025</h3>
      <ul>
        <li><strong>Débouchage WC / évier / douche :</strong> à partir de 80€</li>
        <li><strong>Débouchage canalisation principale :</strong> à partir de 150€</li>
        <li><strong>Hydrocurage haute pression :</strong> à partir de 200€</li>
        <li><strong>Inspection caméra :</strong> incluse dans le prix</li>
        <li><strong>Supplément nuit / week-end / jours fériés :</strong> +50€</li>
      </ul>
      <p>Nous intervenons dans les 19 communes de Bruxelles-Capitale : Bruxelles-Ville, Ixelles, Uccle, Schaerbeek, Etterbeek, Woluwe-Saint-Lambert, Woluwe-Saint-Pierre, Auderghem, Forest, Saint-Gilles, Anderlecht, Molenbeek, Jette, Ganshoren, Berchem-Sainte-Agathe, Koekelberg, Evere, Watermael-Boitsfort et Saint-Josse.</p>
      <p>Notre tarif est 100% transparent : le prix exact est annoncé par téléphone et confirmé sur place AVANT toute intervention. Pas de mauvaise surprise.</p>
    `,
    relatedServices: ['debouchage-canalisation', 'urgence-plomberie'],
    relatedCommunes: ['Bruxelles', 'Ixelles', 'Uccle', 'Schaerbeek', 'Anderlecht'],
    subFaqs: [
      { q: 'Le prix du débouchage inclut-il l\'inspection caméra ?', a: 'Oui. Chez Plombier Urgence, l\'inspection caméra est systématiquement incluse dans le prix du débouchage, contrairement à 90% des concurrents qui la facturent entre 100€ et 200€ en supplément.' },
      { q: 'Y a-t-il des frais de déplacement pour un débouchage à Bruxelles ?', a: 'Non, le déplacement est inclus dans le prix annoncé pour toutes les interventions dans les 19 communes de Bruxelles-Capitale.' },
      { q: 'Combien de temps dure un débouchage à Bruxelles ?', a: 'Un débouchage simple (WC, évier) prend 30 à 45 minutes. Un débouchage de canalisation principale peut prendre 1 à 2 heures.' },
    ],
  },
  {
    slug: 'debouchage-wc-prix-belgique',
    question: 'Quel est le prix d\'un débouchage de WC en Belgique ?',
    metaTitle: 'Prix Débouchage WC Belgique — Tarif 2025 dès 80€ | Plombier Urgence',
    metaDescription: 'Débouchage WC en Belgique : prix 2025 à partir de 80€. WC bouché, toilettes qui débordent. Intervention en 30 min. Prix fixe communiqué avant. ☎ 0465 68 51 58',
    directAnswer: 'Le prix d\'un débouchage de WC en Belgique est de 80€ à 150€ TTC en 2025. Ce tarif comprend le déplacement, le diagnostic, le débouchage par furet ou pompe, et l\'inspection caméra de contrôle. Un supplément de 50€ s\'applique pour les interventions de nuit, le week-end ou les jours fériés.',
    bodyContent: `
      <p>Un WC bouché est l'une des urgences plomberie les plus fréquentes en Belgique. Le prix varie selon la cause du bouchon et la technique nécessaire.</p>
      <h3>Causes fréquentes de WC bouché</h3>
      <ul>
        <li>Accumulation de papier toilette</li>
        <li>Lingettes jetées dans les toilettes (ne jamais jeter de lingettes dans les WC)</li>
        <li>Objets coincés (jouets d'enfants, protections hygiéniques)</li>
        <li>Problème de canalisation en aval (racines, affaissement)</li>
      </ul>
      <h3>Que faire avant l'arrivée du plombier ?</h3>
      <p>Ne tirez surtout pas la chasse d'eau si le niveau monte. Fermez le robinet d'arrêt situé derrière les toilettes. Placez des serpillières au sol pour protéger votre plancher. Ne versez jamais de produits chimiques : ils sont inefficaces sur les bouchons solides et endommagent vos canalisations.</p>
    `,
    relatedServices: ['debouchage-canalisation', 'urgence-plomberie'],
    relatedCommunes: ['Bruxelles', 'Liège', 'Namur', 'Charleroi', 'Mons'],
    subFaqs: [
      { q: 'Peut-on déboucher un WC sans plombier ?', a: 'Pour un petit bouchon (papier), une ventouse spéciale WC peut suffire. Mais si l\'eau ne s\'évacue pas du tout ou si elle refoule, il faut un professionnel équipé d\'un furet ou d\'une pompe haute pression.' },
      { q: 'Est-ce que les produits chimiques marchent pour déboucher un WC ?', a: 'Non. Les produits chimiques de grande surface sont inefficaces contre les bouchons solides et corrodent vos canalisations en PVC. Nous n\'utilisons que des techniques mécaniques (furet, hydrocurage).' },
    ],
  },
  // ─── FUITE ──────────────────────────────────────
  {
    slug: 'comment-detecter-fuite-eau-cachee',
    question: 'Comment détecter une fuite d\'eau cachée dans un mur ou sous le sol ?',
    metaTitle: 'Détecter Fuite d\'Eau Cachée — Mur, Sol, Sans Casse | Plombier Urgence',
    metaDescription: 'Comment détecter une fuite d\'eau cachée ? Caméra thermique, détection acoustique. Localisation sans destruction dès 95€. Intervention 24/7. ☎ 0465 68 51 58',
    directAnswer: 'Pour détecter une fuite d\'eau cachée dans un mur ou sous le sol, nos plombiers utilisent une caméra thermique infrarouge et des capteurs acoustiques. Ces technologies localisent la fuite au centimètre près sans aucune destruction. Le coût de la détection démarre à 95€ TTC, réparation incluse pour les fuites simples. Nous intervenons en 30 minutes à Bruxelles, Liège, Namur et Charleroi.',
    bodyContent: `
      <h3>Les signes d'une fuite cachée</h3>
      <ul>
        <li>Compteur d'eau qui tourne alors que tout est fermé</li>
        <li>Taches d'humidité sur les murs ou plafonds</li>
        <li>Peinture qui cloque ou papier peint qui se décolle</li>
        <li>Augmentation inexpliquée de la facture d'eau</li>
        <li>Odeur de moisi persistante</li>
      </ul>
      <h3>Technologies de détection non invasive</h3>
      <p>Notre équipe utilise trois technologies complémentaires : la <strong>caméra thermique</strong> qui visualise les différences de température causées par l'eau, la <strong>détection acoustique</strong> avec des micro-capteurs qui entendent le bruit de la fuite à travers les murs, et le <strong>gaz traceur</strong> pour les fuites les plus subtiles dans les canalisations enterrées.</p>
      <p>Ces techniques permettent de localiser la fuite sans casser vos murs ni votre sol. Seule une petite ouverture ciblée est nécessaire pour la réparation.</p>
    `,
    relatedServices: ['recherche-fuite', 'urgence-plomberie'],
    relatedCommunes: ['Bruxelles', 'Waterloo', 'Liège', 'Namur'],
    subFaqs: [
      { q: 'Mon assurance couvre-t-elle la recherche de fuite ?', a: 'Oui, dans la plupart des cas. Votre assurance habitation (assurance incendie) couvre la recherche et la réparation de fuite. Nous fournissons un rapport complet avec photos et localisation exacte pour votre dossier.' },
      { q: 'Combien de temps prend une recherche de fuite ?', a: 'La détection prend en moyenne 30 à 60 minutes. La réparation qui suit dépend de la localisation : une fuite accessible se répare en 1 heure, une fuite sous dalle peut nécessiter 2 à 4 heures.' },
    ],
  },
  // ─── CHAUDIÈRE ──────────────────────────────────
  {
    slug: 'entretien-chaudiere-obligatoire-belgique',
    question: 'L\'entretien de chaudière est-il obligatoire en Belgique et combien ça coûte ?',
    metaTitle: 'Entretien Chaudière Obligatoire Belgique — Prix 2025 dès 100€',
    metaDescription: 'Entretien chaudière obligatoire en Belgique : gaz tous les 2 ans, mazout chaque année. Tarif 2025 dès 100€. Attestation officielle incluse. ☎ 0465 68 51 58',
    directAnswer: 'Oui, l\'entretien de chaudière est obligatoire en Belgique. En Wallonie, c\'est tous les ans pour le mazout et tous les 2 ans pour le gaz. À Bruxelles, tous les 2 ans pour le gaz et annuellement pour le mazout. Le prix d\'un entretien complet est de 100€ à 180€ TTC, attestation officielle incluse.',
    bodyContent: `
      <h3>Fréquence d'entretien par région et combustible</h3>
      <ul>
        <li><strong>Wallonie :</strong> Annuel pour le mazout, tous les 2 ans pour le gaz</li>
        <li><strong>Bruxelles :</strong> Tous les 2 ans pour le gaz, annuel pour le mazout</li>
        <li><strong>Flandre :</strong> Tous les 2 ans pour le gaz, annuel pour le mazout</li>
      </ul>
      <h3>Ce que comprend l'entretien</h3>
      <p>Notre entretien complet inclut : le nettoyage du brûleur et de la chambre de combustion, le réglage de la flamme, le contrôle des fumées (analyse de combustion), la vérification de tous les organes de sécurité, et la remise d'une <strong>attestation officielle</strong> conforme à la législation belge.</p>
      <p>Un entretien régulier permet de réduire votre consommation de gaz ou mazout de 5% à 15% par an et prolonge la durée de vie de votre chaudière de 5 à 10 ans.</p>
    `,
    relatedServices: ['depannage-chaudiere'],
    relatedCommunes: ['Bruxelles', 'Liège', 'Namur', 'Charleroi', 'Waterloo', 'Wavre'],
    subFaqs: [
      { q: 'Que risque-t-on sans entretien de chaudière ?', a: 'Sans attestation d\'entretien valide, votre assurance peut refuser de couvrir les dégâts en cas de sinistre lié au chauffage. Vous risquez aussi une amende et, surtout, un danger d\'intoxication au monoxyde de carbone.' },
      { q: 'Sur quelles marques intervenez-vous ?', a: 'Nous intervenons sur toutes les marques : Vaillant, Bulex, Viessmann, Buderus, Junkers, Bosch, De Dietrich, et toutes les autres. Nos chauffagistes sont agréés Cerga/Cedicol.' },
    ],
  },
  // ─── URGENCE ────────────────────────────────────
  {
    slug: 'plombier-urgence-nuit-weekend-belgique',
    question: 'Peut-on appeler un plombier d\'urgence la nuit ou le week-end en Belgique ?',
    metaTitle: 'Plombier Urgence Nuit & Week-end Belgique — Disponible 24/7 | Dès 95€',
    metaDescription: 'Plombier d\'urgence la nuit et le week-end en Belgique. Disponible 24h/24. Supplément nuit/week-end : +50€. Intervention en 30 min. ☎ 0465 68 51 58',
    directAnswer: 'Oui, Plombier Urgence est disponible 24h/24 et 7j/7, y compris la nuit, le week-end et les jours fériés. Le tarif de base démarre à 95€ avec un supplément clairement annoncé de 50€ pour les interventions en dehors des heures ouvrables (après 18h, avant 8h, samedi, dimanche et jours fériés). Un technicien arrive en 30 minutes en moyenne.',
    bodyContent: `
      <h3>Comment fonctionne notre service de garde ?</h3>
      <p>Nous disposons d'équipes de garde roulantes positionnées dans les principales agglomérations belges : Bruxelles, Liège, Namur, Charleroi, Mons et le Brabant wallon. Chaque équipe de garde est équipée d'un véhicule complet avec tout le matériel nécessaire (furets, pompes, pièces de rechange).</p>
      <h3>Quand appeler en urgence ?</h3>
      <ul>
        <li>Fuite d'eau importante ou inondation en cours</li>
        <li>WC bouché qui déborde avec des remontées d'eau</li>
        <li>Panne de chaudière en plein hiver (risque de gel des canalisations)</li>
        <li>Odeur de gaz (dans ce cas, aérez et quittez les lieux immédiatement)</li>
      </ul>
      <p>L'appel téléphonique pour obtenir un diagnostic et une estimation de prix est <strong>toujours gratuit</strong>, même la nuit. La facturation ne commence que lorsque vous validez le déplacement du technicien.</p>
    `,
    relatedServices: ['urgence-plomberie', 'recherche-fuite', 'debouchage-canalisation'],
    relatedCommunes: ['Bruxelles', 'Liège', 'Namur', 'Charleroi', 'Mons'],
    subFaqs: [
      { q: 'L\'appel de nuit est-il facturé ?', a: 'Non. L\'appel pour obtenir un diagnostic et une estimation de prix est gratuit à toute heure. La facturation ne débute que si vous confirmez le déplacement du technicien.' },
      { q: 'En combien de temps un plombier arrive-t-il la nuit ?', a: 'Le délai moyen est de 30 minutes dans les grandes agglomérations (Bruxelles, Liège, Namur, Charleroi) et jusqu\'à 45 minutes dans les zones plus rurales.' },
    ],
  },
  // ─── TARIFS GÉNÉRAL ─────────────────────────────
  {
    slug: 'tarif-plombier-urgence-belgique-2025',
    question: 'Quels sont les tarifs d\'un plombier d\'urgence en Belgique en 2025 ?',
    metaTitle: 'Tarifs Plombier Urgence Belgique 2025 — Prix Fixes & Transparents',
    metaDescription: 'Tarifs plombier urgence Belgique 2025 : débouchage dès 80€, fuite dès 95€, chaudière dès 100€. Prix fixe annoncé avant intervention. ☎ 0465 68 51 58',
    directAnswer: 'Les tarifs d\'un plombier d\'urgence en Belgique en 2025 sont : débouchage canalisation dès 80€, recherche et réparation de fuite dès 95€, dépannage chaudière dès 100€, remplacement robinetterie dès 60€. Tous nos prix sont fixes, communiqués AVANT l\'intervention, et incluent le déplacement, la main d\'œuvre et la garantie.',
    bodyContent: `
      <h3>Grille tarifaire complète 2025</h3>
      <ul>
        <li><strong>Débouchage WC / évier / douche :</strong> à partir de 80€</li>
        <li><strong>Débouchage canalisation principale :</strong> à partir de 150€</li>
        <li><strong>Recherche de fuite (caméra thermique) :</strong> à partir de 95€</li>
        <li><strong>Réparation fuite simple :</strong> à partir de 95€</li>
        <li><strong>Dépannage chaudière :</strong> à partir de 100€</li>
        <li><strong>Entretien chaudière annuel :</strong> 100€ à 180€</li>
        <li><strong>Réparation robinet :</strong> à partir de 60€</li>
        <li><strong>Remplacement chauffe-eau :</strong> à partir de 400€ (fourniture incluse)</li>
        <li><strong>Supplément nuit / week-end / jours fériés :</strong> +50€</li>
      </ul>
      <h3>Notre politique de transparence tarifaire</h3>
      <p>Chez Plombier Urgence, le prix est <strong>toujours communiqué par téléphone</strong> lors de votre appel, puis <strong>confirmé sur place</strong> avant le début de toute intervention. Si le diagnostic sur place révèle un problème différent, un nouveau devis vous est proposé. Vous n'êtes jamais engagé sans avoir accepté le prix.</p>
      <p>Nous acceptons le paiement par Bancontact, virement bancaire et cash. Chaque intervention fait l'objet d'une facture officielle avec TVA.</p>
    `,
    relatedServices: ['debouchage-canalisation', 'recherche-fuite', 'depannage-chaudiere', 'urgence-plomberie'],
    relatedCommunes: ['Bruxelles', 'Liège', 'Namur', 'Charleroi', 'Waterloo'],
    subFaqs: [
      { q: 'Y a-t-il des frais de déplacement ?', a: 'Non. Le déplacement est inclus dans le prix annoncé pour toutes les communes de notre zone d\'intervention (Bruxelles, Brabant wallon, Liège, Namur, Hainaut).' },
      { q: 'Comment est calculé le prix ?', a: 'Le prix est un forfait fixe basé sur le type d\'intervention, et non un tarif horaire. Cela signifie que peu importe si l\'intervention dure 30 minutes ou 2 heures, vous payez le prix convenu à l\'avance.' },
    ],
  },
  // ─── CHAUFFE-EAU ────────────────────────────────
  {
    slug: 'chauffe-eau-en-panne-que-faire',
    question: 'Mon chauffe-eau est en panne, que faire et combien coûte la réparation ?',
    metaTitle: 'Chauffe-Eau en Panne — Que Faire ? Réparation dès 100€ | Plombier Urgence',
    metaDescription: 'Chauffe-eau en panne ? Diagnostic + réparation dès 100€. Remplacement complet dès 400€. Intervention rapide 24/7. Toutes marques. ☎ 0465 68 51 58',
    directAnswer: 'Si votre chauffe-eau est en panne, vérifiez d\'abord le disjoncteur dédié dans votre tableau électrique. Si le problème persiste, contactez-nous : la réparation d\'un chauffe-eau coûte à partir de 100€ (thermostat, résistance). Le remplacement complet d\'un chauffe-eau électrique 100L coûte à partir de 400€, fourniture et pose incluses. Intervention en 30 minutes.',
    bodyContent: `
      <h3>Les causes fréquentes de panne de chauffe-eau</h3>
      <ul>
        <li><strong>Résistance entartrée :</strong> L'eau calcaire dépose du tartre sur la résistance, réduisant son efficacité jusqu'à la panne totale</li>
        <li><strong>Thermostat défaillant :</strong> Le thermostat ne régule plus la température, l'eau reste froide</li>
        <li><strong>Groupe de sécurité qui fuit :</strong> Le groupe de sécurité évacue de l'eau en permanence, signe d'une surpression</li>
        <li><strong>Anode usée :</strong> L'anode en magnésium protège la cuve de la corrosion. Si elle est usée, la cuve rouille de l'intérieur</li>
      </ul>
      <h3>Réparer ou remplacer ?</h3>
      <p>Si votre chauffe-eau a moins de 8 ans, une réparation (thermostat, résistance, anode) est généralement rentable. Au-delà de 10-12 ans, le remplacement est souvent plus économique à long terme. Nos plombiers vous conseillent honnêtement sur la meilleure option.</p>
    `,
    relatedServices: ['reparation-robinetterie', 'depannage-chaudiere'],
    relatedCommunes: ['Bruxelles', 'Liège', 'Namur', 'Waterloo', 'Wavre'],
    subFaqs: [
      { q: 'Combien de temps prend le remplacement d\'un chauffe-eau ?', a: 'Le remplacement complet (dépose de l\'ancien, pose et raccordement du nouveau, mise en service) prend 2 à 3 heures. Vous avez de l\'eau chaude le jour même.' },
      { q: 'Quelle capacité de chauffe-eau choisir ?', a: 'Pour 1-2 personnes : 50-100L. Pour 3-4 personnes : 150-200L. Pour 5+ personnes : 250-300L. Nos plombiers vous conseillent la taille adaptée à votre consommation.' },
    ],
  },
  // ─── QUESTIONS LOCALES ──────────────────────────
  {
    slug: 'plombier-urgence-liege-intervention-rapide',
    question: 'Comment trouver un plombier d\'urgence fiable à Liège ?',
    metaTitle: 'Plombier Urgence Liège — Intervention 30 min, 24/7 | Dès 80€',
    metaDescription: 'Plombier urgence Liège : intervention en 30 min. Débouchage, fuite, chaudière. Disponible 24h/24. Tarifs fixes dès 80€. ☎ 0465 68 51 58',
    directAnswer: 'Pour trouver un plombier d\'urgence fiable à Liège, appelez Plombier Urgence au 0465 68 51 58. Nos techniciens agréés interviennent en 30 minutes dans toute la Cité Ardente et sa province : Seraing, Herstal, Verviers, Ans, Grâce-Hollogne, Flémalle et Chaudfontaine. Tarifs fixes dès 80€, communiqués avant intervention.',
    bodyContent: `
      <h3>Nos services de plomberie à Liège</h3>
      <p>Notre équipe liégeoise intervient pour tous types de problèmes : débouchage de canalisation, recherche et réparation de fuite, dépannage de chaudière, remplacement de robinetterie et sanitaires. Nous couvrons toute la province de Liège, de Liège-Guillemins à Verviers, en passant par Seraing et la Basse-Meuse.</p>
      <h3>Zones d'intervention à Liège et province</h3>
      <ul>
        <li>Liège Centre (Guillemins, Outremeuse, Cathédrale)</li>
        <li>Seraing et Val Saint-Lambert</li>
        <li>Herstal et Basse-Meuse</li>
        <li>Verviers et région verviétoise</li>
        <li>Ans, Grâce-Hollogne, Flémalle</li>
        <li>Chaudfontaine, Visé, Eupen</li>
      </ul>
    `,
    relatedServices: ['debouchage-canalisation', 'recherche-fuite', 'depannage-chaudiere', 'urgence-plomberie'],
    relatedCommunes: ['Liège', 'Seraing', 'Herstal', 'Verviers', 'Ans'],
    subFaqs: [
      { q: 'Quel est le délai d\'intervention à Liège ?', a: 'Notre délai moyen d\'intervention à Liège est de 30 minutes. Nous disposons d\'une équipe basée dans l\'agglomération liégeoise pour une réactivité maximale.' },
      { q: 'Intervenez-vous aussi dans les communes rurales de la province de Liège ?', a: 'Oui, nous couvrons l\'ensemble de la province de Liège, y compris les communes plus éloignées comme Eupen, Visé et Chaudfontaine. Le délai peut être de 45 minutes pour ces zones.' },
    ],
  },
];
