// SEO Pages Data — Urgence, Service+City, and Commercial pages
// Targeting 85 easy/medium keywords from keyword research

export interface UrgencePage {
    city: string;
    slug: string;
    province: string;
    h1: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    heroText: string;
    faqs: { q: string; a: string }[];
    nearbyLinks: { label: string; href: string }[];
}

export interface ServiceCityPage {
    slug: string;
    city: string;
    province: string;
    serviceType: string;
    icon: string;
    h1: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    heroText: string;
    processSteps: { title: string; desc: string }[];
    faqs: { q: string; a: string }[];
}

// ==========================================
// URGENCE LANDING PAGES (5 cities)
// ==========================================
export const urgencePages: UrgencePage[] = [
    {
        city: 'Bruxelles',
        slug: 'bruxelles',
        province: 'Bruxelles-Capitale',
        h1: 'Plombier Urgence Bruxelles — Intervention 24h/24',
        metaTitle: 'Plombier Urgence Bruxelles | Dépannage 24h/24 7j/7 | 30 min',
        metaDescription: 'Plombier urgence Bruxelles 24h/24, 7j/7, nuit et week-end. Intervention en 30 min. SOS plombier. Devis gratuit. ☎ 0465 68 51 58',
        keywords: ['plombier urgence Bruxelles', 'plombier nuit Bruxelles', 'plombier week-end Bruxelles', 'plombier 24h/24 Bruxelles', 'SOS plombier Bruxelles', 'dépannage plomberie Bruxelles', 'fuite d\'eau urgence Bruxelles', 'plombier intervention rapide Bruxelles', 'urgence canalisation bouchée Bruxelles', 'plombier urgence pas cher Bruxelles', 'inondation cave Bruxelles'],
        heroText: 'Une fuite d\'eau ? Une canalisation bouchée ? Une inondation dans votre cave ? Notre équipe de plombiers d\'urgence à Bruxelles intervient en moins de 30 minutes, 24 heures sur 24, 7 jours sur 7 — nuits, week-ends et jours fériés compris. Tarifs transparents, sans surprise. À partir de 60€.',
        faqs: [
            { q: 'Quel est le délai d\'intervention d\'un plombier urgence à Bruxelles ?', a: 'Notre équipe intervient en 30 minutes maximum dans toute la région de Bruxelles-Capitale. Nos techniciens sont répartis stratégiquement dans les 19 communes bruxelloises.' },
            { q: 'Combien coûte un dépannage plomberie en urgence à Bruxelles ?', a: 'Nos tarifs sont transparents et communiqués avant intervention. Le déplacement est gratuit et le devis est sans engagement. Pas de frais cachés, même la nuit et le week-end.' },
            { q: 'Peut-on appeler un plombier la nuit à Bruxelles ?', a: 'Oui, notre service de plombier de nuit à Bruxelles est disponible 24h/24. Que ce soit à 2h du matin ou un dimanche, nos techniciens sont prêts à intervenir.' },
            { q: 'Que faire en cas d\'inondation dans ma cave à Bruxelles ?', a: 'Appelez immédiatement notre SOS plombier Bruxelles au 0465 68 51 58. En attendant, coupez l\'arrivée d\'eau et l\'électricité si possible. Nous intervenons avec du matériel de pompage professionnel.' },
            { q: 'Votre service d\'urgence couvre-t-il toutes les communes de Bruxelles ?', a: 'Oui, nous intervenons dans les 19 communes : Bruxelles-Ville, Ixelles, Uccle, Schaerbeek, Etterbeek, Woluwe, Anderlecht, Molenbeek, Forest, Saint-Gilles, Jette et toutes les autres.' },
        ],
        nearbyLinks: [
            { label: 'Plombier urgence Liège', href: '/urgence/liege' },
            { label: 'Plombier urgence Namur', href: '/urgence/namur' },
            { label: 'Plombier urgence Charleroi', href: '/urgence/charleroi' },
        ],
    },
    {
        city: 'Liège',
        slug: 'liege',
        province: 'Province de Liège',
        h1: 'Plombier Urgence Liège — Dépannage Rapide 24h/24',
        metaTitle: 'Plombier Urgence Liège | Dépannage Plomberie 24h/24 | 30 min',
        metaDescription: 'Plombier urgence Liège : intervention rapide 24h/24, dimanche et jours fériés. Dépannage plomberie Liège. Plombier disponible maintenant. ☎ 0465 68 51 58',
        keywords: ['plombier urgence Liège', 'dépannage plomberie Liège', 'plombier dimanche Liège', 'plombier disponible maintenant Liège'],
        heroText: 'Besoin d\'un plombier en urgence à Liège ? Notre équipe de dépannage plomberie intervient rapidement dans toute la province de Liège, y compris le dimanche et les jours fériés. Un plombier est disponible maintenant pour résoudre votre problème.',
        faqs: [
            { q: 'Peut-on appeler un plombier le dimanche à Liège ?', a: 'Absolument. Notre service de plombier dimanche à Liège est actif 7j/7. Nos techniciens sont disponibles même les jours fériés sans majoration abusive.' },
            { q: 'Quel est le temps d\'intervention pour un dépannage plomberie à Liège ?', a: 'Nous garantissons une intervention en 30 minutes dans Liège-Centre et 45 minutes dans toute la province (Seraing, Herstal, Verviers, Ans).' },
            { q: 'Y a-t-il un plombier disponible maintenant à Liège ?', a: 'Oui, nos techniciens sont de garde 24h/24. Appelez le 0465 68 51 58 pour une intervention immédiate dans la région liégeoise.' },
        ],
        nearbyLinks: [
            { label: 'Plombier urgence Bruxelles', href: '/urgence/bruxelles' },
            { label: 'Plombier urgence Namur', href: '/urgence/namur' },
        ],
    },
    {
        city: 'Namur',
        slug: 'namur',
        province: 'Province de Namur',
        h1: 'Plombier Urgence Namur — Disponible 24h/24 et Jours Fériés',
        metaTitle: 'Plombier Urgence Namur | Intervention Rapide 24h/24 | Jours Fériés',
        metaDescription: 'Plombier urgence Namur disponible 24h/24, jours fériés inclus. Intervention rapide en 30 min. Tuyauterie gelée, fuite, débouchage. ☎ 0465 68 51 58',
        keywords: ['plombier urgence Namur', 'plombier jour férié Namur', 'tuyauterie gelée Namur'],
        heroText: 'Un problème de plomberie urgent à Namur ? Notre équipe intervient rapidement 24h/24, y compris les jours fériés. Fuite d\'eau, tuyauterie gelée en hiver, canalisation bouchée — nous sommes là pour vous, dans toute la province de Namur.',
        faqs: [
            { q: 'Trouvez-vous facilement un plombier un jour férié à Namur ?', a: 'Notre service de plombier jour férié à Namur est toujours actif. Nos techniciens sont de garde 365 jours par an dans la province de Namur.' },
            { q: 'Que faire si ma tuyauterie est gelée à Namur en hiver ?', a: 'N\'essayez pas de dégeler les tuyaux vous-même avec une flamme. Appelez notre service d\'urgence. Nos techniciens utilisent des techniques professionnelles pour dégeler vos canalisations sans risque de les endommager.' },
        ],
        nearbyLinks: [
            { label: 'Plombier urgence Bruxelles', href: '/urgence/bruxelles' },
            { label: 'Plombier urgence Charleroi', href: '/urgence/charleroi' },
        ],
    },
    {
        city: 'Charleroi',
        slug: 'charleroi',
        province: 'Hainaut',
        h1: 'Plombier Urgence Charleroi — SOS Dépannage 24h/24',
        metaTitle: 'Plombier Urgence Charleroi | SOS Plombier 24h/24 | 30 min',
        metaDescription: 'SOS plombier Charleroi : intervention urgente 24h/24. Canalisation bouchée, fuite d\'eau, remontée d\'eau. Plombier pas cher Charleroi. ☎ 0465 68 51 58',
        keywords: ['plombier urgence Charleroi', 'SOS plombier Charleroi'],
        heroText: 'SOS plombier à Charleroi ! Notre équipe d\'urgence intervient en moins de 30 minutes dans tout le grand Charleroi. Canalisation bouchée, fuite d\'eau, remontée d\'eau — nous résolvons votre problème rapidement et à un tarif transparent.',
        faqs: [
            { q: 'Comment contacter un SOS plombier à Charleroi ?', a: 'Appelez directement le 0465 68 51 58. Notre service SOS plombier Charleroi est disponible 24h/24, 7j/7. Un technicien est envoyé immédiatement.' },
            { q: 'L\'intervention d\'urgence à Charleroi est-elle chère ?', a: 'Non. Nous pratiquons des tarifs transparents et compétitifs. Le devis est gratuit et communiqué avant toute intervention. Pas de surprise sur la facture.' },
        ],
        nearbyLinks: [
            { label: 'Plombier urgence Mons', href: '/urgence/mons' },
            { label: 'Plombier urgence Namur', href: '/urgence/namur' },
        ],
    },
    {
        city: 'Mons',
        slug: 'mons',
        province: 'Hainaut',
        h1: 'Plombier Urgence Mons — Dépannage Rapide 24h/24',
        metaTitle: 'Plombier Urgence Mons | Dépannage Plombier Rapide | 24h/24',
        metaDescription: 'Dépannage plombier rapide à Mons. Intervention urgente 24h/24. Peu de concurrents, service premium. Devis gratuit. ☎ 0465 68 51 58',
        keywords: ['plombier urgence Mons', 'dépannage plombier rapide Mons'],
        heroText: 'Besoin d\'un dépannage plombier rapide à Mons ? Notre équipe intervient en urgence dans tout le grand Mons et ses environs. Service disponible 24h/24, 7j/7 avec des tarifs justes et transparents.',
        faqs: [
            { q: 'Quel est le temps d\'intervention pour un dépannage plombier rapide à Mons ?', a: 'Nos techniciens arrivent en 30 minutes maximum dans le centre de Mons et en 45 minutes dans les communes environnantes (La Louvière, Soignies, Ath).' },
            { q: 'Faites-vous des devis gratuits à Mons ?', a: 'Oui, tous nos devis sont gratuits et sans engagement. Le technicien évalue la situation sur place et vous communique un prix fixe avant de commencer les travaux.' },
        ],
        nearbyLinks: [
            { label: 'Plombier urgence Charleroi', href: '/urgence/charleroi' },
            { label: 'Plombier urgence Bruxelles', href: '/urgence/bruxelles' },
        ],
    },
];

// ==========================================
// SERVICE + CITY PAGES (12 pages)
// ==========================================
export const serviceCityPages: ServiceCityPage[] = [
    {
        slug: 'debouchage-bruxelles',
        city: 'Bruxelles',
        province: 'Bruxelles-Capitale',
        serviceType: 'Débouchage',
        icon: '🚿',
        h1: 'Débouchage Urgent Bruxelles — Canalisation, WC, Évier',
        metaTitle: 'Débouchage Canalisation Bruxelles | WC & Évier Bouché | 24h/24',
        metaDescription: 'Débouchage canalisation à Bruxelles : WC bouché, évier bouché, odeur canalisation, problème évacuation eau. Intervention rapide 24h/24. ☎ 0465 68 51 58',
        keywords: ['canalisation bouchée Bruxelles', 'WC bouché Bruxelles', 'évier bouché Bruxelles', 'odeur canalisation Bruxelles', 'problème évacuation eau Bruxelles', 'détartrage canalisation Bruxelles'],
        heroText: 'Votre canalisation est bouchée à Bruxelles ? WC bouché, évier qui ne s\'écoule plus, mauvaises odeurs de canalisation ? Notre équipe spécialisée en débouchage intervient dans toute la région bruxelloise avec du matériel haute pression professionnel. Résultat garanti. À partir de 60€.',
        processSteps: [
            { title: 'Diagnostic', desc: 'Inspection caméra pour localiser le bouchon avec précision.' },
            { title: 'Débouchage', desc: 'Intervention haute pression pour éliminer le bouchon durablement.' },
            { title: 'Détartrage', desc: 'Nettoyage et détartrage des canalisations pour éviter la récidive.' },
            { title: 'Vérification', desc: 'Test d\'écoulement et inspection caméra de contrôle.' },
        ],
        faqs: [
            { q: 'Combien coûte un débouchage de canalisation à Bruxelles ?', a: 'Le prix d\'un débouchage à Bruxelles dépend de la complexité. Un débouchage simple (évier, WC) coûte entre 60€ et 150€. Un débouchage de canalisation principale peut aller de 150€ à 350€. Devis gratuit sur place.' },
            { q: 'Mon WC est bouché à Bruxelles, que faire ?', a: 'Évitez d\'utiliser des produits chimiques qui peuvent endommager vos canalisations. Appelez notre service de débouchage WC à Bruxelles au 0465 68 51 58. Intervention en 30 minutes.' },
            { q: 'D\'où viennent les mauvaises odeurs de canalisation à Bruxelles ?', a: 'Les odeurs de canalisation à Bruxelles sont souvent causées par un siphon sec, un bouchon partiel ou une mauvaise ventilation. Un diagnostic professionnel permet d\'identifier et résoudre le problème rapidement.' },
            { q: 'Comment éviter les problèmes d\'évacuation d\'eau ?', a: 'Un entretien régulier (détartrage) et l\'utilisation de grilles sur vos évacuations préviennent la plupart des bouchons. Nous proposons des contrats d\'entretien préventif à Bruxelles.' },
        ],
    },
    {
        slug: 'debouchage-liege',
        city: 'Liège',
        province: 'Province de Liège',
        serviceType: 'Débouchage',
        icon: '🚿',
        h1: 'Débouchage Canalisation Liège — Curage Professionnel',
        metaTitle: 'Débouchage Canalisation Liège | WC Bouché | Curage Canalisation',
        metaDescription: 'Débouchage et curage de canalisation à Liège. WC bouché Liège. Intervention rapide et professionnelle. Devis gratuit. ☎ 0465 68 51 58',
        keywords: ['débouchage canalisation Liège', 'curage canalisation Liège', 'WC bouché Liège'],
        heroText: 'Canalisation bouchée à Liège ? Nous proposons un service complet de débouchage et curage de canalisations dans toute la région liégeoise. WC bouché, évier, douche — nos techniciens interviennent avec du matériel haute pression professionnel.',
        processSteps: [
            { title: 'Inspection', desc: 'Passage caméra pour identifier la nature et la position du bouchon.' },
            { title: 'Débouchage HP', desc: 'Utilisation d\'un camion hydrocureur pour les canalisations principales.' },
            { title: 'Curage préventif', desc: 'Nettoyage complet des canalisations pour prévenir les récidives.' },
            { title: 'Rapport', desc: 'Compte-rendu d\'intervention avec recommandations d\'entretien.' },
        ],
        faqs: [
            { q: 'Quelle est la différence entre débouchage et curage de canalisation à Liège ?', a: 'Le débouchage élimine un bouchon précis. Le curage est un nettoyage complet et préventif de l\'ensemble des canalisations. À Liège, nous combinons souvent les deux pour un résultat durable.' },
            { q: 'Mon WC est bouché à Liège, intervenez-vous rapidement ?', a: 'Oui, nous intervenons en 30 à 45 minutes dans tout le grand Liège pour un WC bouché. Appelez le 0465 68 51 58.' },
        ],
    },
    {
        slug: 'debouchage-charleroi',
        city: 'Charleroi',
        province: 'Hainaut',
        serviceType: 'Débouchage',
        icon: '🚿',
        h1: 'Débouchage Canalisation Charleroi — Remontée d\'Eau',
        metaTitle: 'Débouchage Canalisation Charleroi | Remontée d\'Eau | 24h/24',
        metaDescription: 'Canalisation bouchée à Charleroi ? Remontée d\'eau ? Débouchage professionnel 24h/24. Intervention rapide, devis gratuit. ☎ 0465 68 51 58',
        keywords: ['canalisation bouchée Charleroi', 'remontée d\'eau Charleroi'],
        heroText: 'Problème de canalisation bouchée ou de remontée d\'eau à Charleroi ? C\'est un problème grave qui nécessite une intervention rapide. Notre équipe spécialisée débouche vos canalisations et résout les problèmes de remontée d\'eau dans tout le grand Charleroi.',
        processSteps: [
            { title: 'Évaluation urgente', desc: 'Diagnostic immédiat de la remontée d\'eau et de sa cause.' },
            { title: 'Pompage', desc: 'Évacuation des eaux stagnantes si nécessaire.' },
            { title: 'Débouchage', desc: 'Élimination du bouchon par hydrocurage haute pression.' },
            { title: 'Prévention', desc: 'Installation de clapets anti-retour si risque de récidive.' },
        ],
        faqs: [
            { q: 'Que faire en cas de remontée d\'eau à Charleroi ?', a: 'Une remontée d\'eau est une urgence. Coupez l\'arrivée d\'eau et appelez immédiatement le 0465 68 51 58. Nous intervenons en 30 minutes à Charleroi pour diagnostiquer et résoudre le problème.' },
            { q: 'Combien coûte le débouchage d\'une canalisation à Charleroi ?', a: 'Les tarifs varient selon la complexité, mais nous pratiquons des prix transparents. Un débouchage simple démarre à 60€. Devis gratuit et sans engagement.' },
        ],
    },
    {
        slug: 'fuite-eau-bruxelles',
        city: 'Bruxelles',
        province: 'Bruxelles-Capitale',
        serviceType: 'Fuite d\'eau',
        icon: '🔍',
        h1: 'Fuite d\'Eau Urgence Bruxelles — Détection et Réparation',
        metaTitle: 'Fuite d\'Eau Bruxelles | Détection Fuite | Tuyau Percé | 24h/24',
        metaDescription: 'Fuite d\'eau à Bruxelles ? Détection et réparation de fuites, tuyau percé, fuite robinet, fuite chauffe-eau. Intervention rapide sans casse. ☎ 0465 68 51 58',
        keywords: ['fuite d\'eau Bruxelles', 'tuyau percé Bruxelles', 'fuite robinet Bruxelles', 'fuite toit terrasse Bruxelles', 'fuite chauffe-eau Bruxelles', 'détection fuite Bruxelles'],
        heroText: 'Vous avez une fuite d\'eau à Bruxelles ? Qu\'il s\'agisse d\'un tuyau percé, d\'une fuite de robinet, d\'une fuite de chauffe-eau ou même d\'une fuite en toiture terrasse, nous intervenons rapidement avec des technologies de détection non-destructives pour localiser et réparer la fuite. À partir de 60€.',
        processSteps: [
            { title: 'Détection précise', desc: 'Caméra thermique et détection acoustique pour localiser la fuite sans casse.' },
            { title: 'Diagnostic', desc: 'Évaluation de l\'étendue des dégâts et du type de réparation nécessaire.' },
            { title: 'Réparation', desc: 'Réparation ou remplacement du tuyau percé, du robinet ou du raccord défectueux.' },
            { title: 'Test d\'étanchéité', desc: 'Vérification complète après réparation pour garantir l\'absence de fuite.' },
        ],
        faqs: [
            { q: 'Comment détecter une fuite d\'eau cachée à Bruxelles ?', a: 'Nous utilisons des caméras thermiques et des détecteurs acoustiques pour localiser les fuites cachées dans les murs, sols et plafonds sans destruction. C\'est la méthode la plus efficace utilisée par les experts en détection de fuite à Bruxelles.' },
            { q: 'Que faire si j\'ai un tuyau percé à Bruxelles ?', a: 'Coupez immédiatement l\'arrivée d\'eau et appelez le 0465 68 51 58. Nous intervenons en 30 minutes pour réparer ou remplacer le tuyau percé.' },
            { q: 'Réparez-vous les fuites de robinet à Bruxelles ?', a: 'Oui, la fuite de robinet est l\'un de nos services les plus courants. Remplacement du joint, remplacement du robinet complet ou du mitigeur — nous intervenons rapidement.' },
            { q: 'Mon chauffe-eau fuit à Bruxelles, que faire ?', a: 'Une fuite de chauffe-eau à Bruxelles nécessite une intervention urgente. Coupez l\'eau et l\'alimentation du chauffe-eau, puis appelez-nous. Nous diagnostiquons la panne et intervenons sur place.' },
        ],
    },
    {
        slug: 'fuite-eau-liege',
        city: 'Liège',
        province: 'Province de Liège',
        serviceType: 'Fuite d\'eau',
        icon: '🔍',
        h1: 'Fuite d\'Eau Liège — Recherche et Réparation de Fuite',
        metaTitle: 'Fuite d\'Eau Liège | Ballon Eau Chaude en Panne | Réparation',
        metaDescription: 'Fuite d\'eau à Liège ? Ballon d\'eau chaude en panne ? Recherche et réparation de fuite rapide dans toute la province de Liège. ☎ 0465 68 51 58',
        keywords: ['fuite d\'eau Liège', 'ballon eau chaude en panne Liège'],
        heroText: 'Fuite d\'eau ou ballon d\'eau chaude en panne à Liège ? Notre équipe de plombiers experts intervient rapidement dans toute la province de Liège pour détecter et réparer vos fuites. Techniques non-destructives, résultat garanti.',
        processSteps: [
            { title: 'Localisation', desc: 'Technologies de détection avancées pour trouver la fuite.' },
            { title: 'Réparation', desc: 'Intervention ciblée pour réparer la fuite ou le ballon d\'eau chaude.' },
            { title: 'Vérification', desc: 'Test de pression et contrôle d\'étanchéité.' },
            { title: 'Conseil', desc: 'Recommandations pour éviter les futures fuites.' },
        ],
        faqs: [
            { q: 'Mon ballon d\'eau chaude est en panne à Liège, que faire ?', a: 'Un ballon d\'eau chaude en panne peut être dû à un thermostat défectueux, une résistance entartrée ou un groupe de sécurité défaillant. Nous diagnostiquons et réparons ou remplaçons votre ballon d\'eau chaude à Liège.' },
            { q: 'Combien coûte la réparation d\'une fuite d\'eau à Liège ?', a: 'Le prix dépend de la nature et de l\'accessibilité de la fuite. Un devis gratuit est fourni sur place. Nous garantissons des tarifs transparents.' },
        ],
    },
    {
        slug: 'fuite-eau-charleroi',
        city: 'Charleroi',
        province: 'Hainaut',
        serviceType: 'Fuite d\'eau',
        icon: '🔍',
        h1: 'Réparation Fuite d\'Eau Charleroi — Intervention Rapide',
        metaTitle: 'Réparation Fuite Charleroi | Fuite d\'Eau | Plombier 24h/24',
        metaDescription: 'Réparation fuite d\'eau à Charleroi. Intervention rapide 24h/24 par des plombiers experts. Devis gratuit. ☎ 0465 68 51 58',
        keywords: ['réparation fuite Charleroi'],
        heroText: 'Fuite d\'eau à Charleroi ? Nos plombiers spécialisés en réparation de fuites interviennent rapidement dans tout le grand Charleroi. Détection précise, réparation durable et tarifs transparents.',
        processSteps: [
            { title: 'Détection', desc: 'Localisation de la fuite avec caméra thermique.' },
            { title: 'Réparation', desc: 'Intervention ciblée pour stopper la fuite.' },
            { title: 'Contrôle', desc: 'Test d\'étanchéité pour confirmer la réparation.' },
            { title: 'Prévention', desc: 'Conseils pour éviter les futures fuites.' },
        ],
        faqs: [
            { q: 'Est-ce que vous réparez les fuites d\'eau le week-end à Charleroi ?', a: 'Oui, notre service de réparation de fuite à Charleroi est disponible 24h/24, 7j/7, week-ends et jours fériés inclus.' },
        ],
    },
    {
        slug: 'chauffe-eau-bruxelles',
        city: 'Bruxelles',
        province: 'Bruxelles-Capitale',
        serviceType: 'Chauffe-eau',
        icon: '🔥',
        h1: 'Chauffe-Eau Bruxelles — Réparation et Installation',
        metaTitle: 'Chauffe-Eau Bruxelles | Panne | Installation | Remplacement',
        metaDescription: 'Chauffe-eau en panne à Bruxelles ? Installation, remplacement et réparation de chauffe-eau. Toutes marques. Devis gratuit. ☎ 0465 68 51 58',
        keywords: ['chauffe-eau en panne Bruxelles', 'installation chauffe-eau Bruxelles', 'fuite chauffe-eau Bruxelles'],
        heroText: 'Votre chauffe-eau est en panne à Bruxelles ? Plus d\'eau chaude ? Fuite de chauffe-eau ? Nos techniciens spécialisés interviennent rapidement pour la réparation, le remplacement ou l\'installation de votre chauffe-eau. Toutes marques, devis gratuit.',
        processSteps: [
            { title: 'Diagnostic', desc: 'Identification de la panne : thermostat, résistance, anode, fuite.' },
            { title: 'Devis', desc: 'Estimation claire : réparation ou remplacement selon l\'état.' },
            { title: 'Intervention', desc: 'Réparation ou installation du nouveau chauffe-eau.' },
            { title: 'Mise en service', desc: 'Test complet et explication du fonctionnement.' },
        ],
        faqs: [
            { q: 'Combien coûte l\'installation d\'un chauffe-eau à Bruxelles ?', a: 'Le prix d\'installation d\'un chauffe-eau à Bruxelles varie de 300€ à 800€ selon le modèle (électrique, au gaz, thermodynamique). Nous fournissons un devis gratuit et détaillé avant toute intervention.' },
            { q: 'Mon chauffe-eau est en panne à Bruxelles, réparation ou remplacement ?', a: 'Cela dépend de l\'âge et de l\'état de votre chauffe-eau. Si l\'appareil a plus de 10 ans, le remplacement est souvent plus économique. Nos techniciens vous conseillent honnêtement.' },
            { q: 'Quelle marque de chauffe-eau installez-vous à Bruxelles ?', a: 'Nous installons toutes les grandes marques : Atlantic, Vaillant, Bulex, Bosch, Ariston, Junkers. Nos techniciens sont formés sur chaque marque.' },
        ],
    },
    {
        slug: 'chauffe-eau-namur',
        city: 'Namur',
        province: 'Province de Namur',
        serviceType: 'Chauffe-eau',
        icon: '🔥',
        h1: 'Chauffe-Eau Namur — Remplacement et Installation',
        metaTitle: 'Chauffe-Eau Namur | Remplacement | Installation Compteur Eau',
        metaDescription: 'Remplacement chauffe-eau Namur, installation compteur eau. Chauffe-eau en panne ? Intervention rapide dans la province de Namur. ☎ 0465 68 51 58',
        keywords: ['chauffe-eau en panne Namur', 'remplacement chauffe-eau Namur', 'installation compteur eau Namur'],
        heroText: 'Chauffe-eau en panne à Namur ? Besoin d\'un remplacement ou d\'une nouvelle installation ? Nos techniciens spécialisés interviennent dans toute la province de Namur pour le remplacement de chauffe-eau et l\'installation de compteurs d\'eau.',
        processSteps: [
            { title: 'Évaluation', desc: 'Diagnostic de votre installation actuelle.' },
            { title: 'Conseil', desc: 'Sélection du meilleur modèle selon vos besoins et votre budget.' },
            { title: 'Installation', desc: 'Remplacement ou installation professionnelle.' },
            { title: 'Garantie', desc: 'Garantie constructeur + 2 ans main d\'œuvre.' },
        ],
        faqs: [
            { q: 'Combien coûte le remplacement d\'un chauffe-eau à Namur ?', a: 'Le remplacement d\'un chauffe-eau à Namur coûte entre 400€ et 900€ selon le type. Nous déposons l\'ancien appareil et installons le nouveau dans la même journée.' },
            { q: 'Installez-vous des compteurs d\'eau à Namur ?', a: 'Oui, nous procédons à l\'installation et au remplacement de compteurs d\'eau dans toute la province de Namur, en conformité avec les normes belges.' },
        ],
    },
    {
        slug: 'chauffage-charleroi',
        city: 'Charleroi',
        province: 'Hainaut',
        serviceType: 'Chauffage',
        icon: '🔥',
        h1: 'Entretien Chaudière Charleroi — Chauffagiste Agréé',
        metaTitle: 'Entretien Chaudière Charleroi | Chauffagiste Agréé | Dépannage',
        metaDescription: 'Entretien chaudière obligatoire à Charleroi. Chauffagiste agréé Cerga. Entretien, dépannage et remplacement. Devis gratuit. ☎ 0465 68 51 58',
        keywords: ['entretien chaudière Charleroi'],
        heroText: 'L\'entretien annuel de votre chaudière est obligatoire en Belgique. À Charleroi, nos chauffagistes agréés Cerga assurent l\'entretien, le dépannage et le remplacement de votre chaudière gaz ou mazout. Attestation officielle délivrée.',
        processSteps: [
            { title: 'Nettoyage', desc: 'Nettoyage du brûleur, de l\'échangeur et du corps de chauffe.' },
            { title: 'Contrôle', desc: 'Vérification des organes de sécurité et de la combustion.' },
            { title: 'Analyse', desc: 'Mesure des émissions de CO et réglage pour performance optimale.' },
            { title: 'Attestation', desc: 'Délivrance de l\'attestation d\'entretien officielle.' },
        ],
        faqs: [
            { q: 'L\'entretien de chaudière est-il obligatoire à Charleroi ?', a: 'Oui, en Wallonie l\'entretien de chaudière est obligatoire chaque année pour le gaz et tous les 3 ans pour le mazout. Nos chauffagistes agréés à Charleroi délivrent l\'attestation officielle.' },
        ],
    },
    {
        slug: 'chauffage-mons',
        city: 'Mons',
        province: 'Hainaut',
        serviceType: 'Chauffage & Sanitaires',
        icon: '🔧',
        h1: 'Pose Radiateur et Sanitaires à Mons — Plombier Expert',
        metaTitle: 'Pose Radiateur Mons | Toilette Qui Coule | Plombier Mons',
        metaDescription: 'Pose de radiateur à Mons, réparation toilette qui coule. Plombier chauffagiste expert à Mons et environs. Devis gratuit. ☎ 0465 68 51 58',
        keywords: ['pose radiateur Mons', 'toilette qui coule Mons'],
        heroText: 'Besoin d\'un plombier à Mons pour la pose d\'un radiateur ou la réparation d\'une toilette qui coule ? Notre équipe de plombiers-chauffagistes intervient rapidement dans tout le grand Mons pour vos installations et réparations.',
        processSteps: [
            { title: 'Visite technique', desc: 'Évaluation de votre installation et prise de mesures.' },
            { title: 'Devis', desc: 'Proposition détaillée avec choix de radiateurs ou de sanitaires.' },
            { title: 'Installation', desc: 'Pose professionnelle par un chauffagiste qualifié.' },
            { title: 'Mise en route', desc: 'Test de fonctionnement et purge du circuit.' },
        ],
        faqs: [
            { q: 'Combien coûte la pose d\'un radiateur à Mons ?', a: 'La pose d\'un radiateur à Mons coûte entre 150€ et 400€ selon le type et la complexité. Nous installons radiateurs en acier, aluminium et fonte.' },
            { q: 'Ma toilette coule en permanence à Mons, que faire ?', a: 'Une toilette qui coule est souvent due à un flotteur ou un joint de chasse d\'eau défectueux. C\'est une réparation simple que nous effectuons rapidement. Appelez le 0465 68 51 58.' },
        ],
    },
    {
        slug: 'renovation-sdb-liege',
        city: 'Liège',
        province: 'Province de Liège',
        serviceType: 'Rénovation Salle de Bain',
        icon: '🛁',
        h1: 'Rénovation Salle de Bain Liège — Devis Gratuit',
        metaTitle: 'Rénovation Salle de Bain Liège | Douche Italienne | Devis Gratuit',
        metaDescription: 'Rénovation salle de bain à Liège. Douche italienne, baignoire, carrelage. Marché en croissance, artisans qualifiés. Devis gratuit. ☎ 0465 68 51 58',
        keywords: ['rénovation salle de bain Liège'],
        heroText: 'Envie de transformer votre salle de bain à Liège ? Nos artisans qualifiés réalisent la rénovation complète de votre espace bain : douche italienne, baignoire, carrelage, robinetterie moderne. Un projet clé en main avec devis gratuit et sans engagement.',
        processSteps: [
            { title: 'Conception', desc: 'Visite à domicile, prise de mesures et proposition de design.' },
            { title: 'Devis détaillé', desc: 'Estimation complète matériaux + main d\'œuvre, sans surprise.' },
            { title: 'Travaux', desc: 'Démolition, plomberie, carrelage, installation des équipements.' },
            { title: 'Finitions', desc: 'Joints, peinture, nettoyage et livraison clé en main.' },
        ],
        faqs: [
            { q: 'Combien coûte une rénovation de salle de bain à Liège ?', a: 'Une rénovation complète de salle de bain à Liège coûte entre 5 000€ et 15 000€ selon la taille, les matériaux et les équipements choisis. Nous fournissons un devis détaillé gratuit.' },
            { q: 'Combien de temps dure une rénovation de salle de bain à Liège ?', a: 'En général, une rénovation complète prend entre 5 et 10 jours ouvrables. Nous nous engageons sur un planning précis que nous respectons.' },
        ],
    },
    {
        slug: 'plomberie-bruxelles',
        city: 'Bruxelles',
        province: 'Bruxelles-Capitale',
        serviceType: 'Services de Plomberie',
        icon: '🔧',
        h1: 'Services de Plomberie à Bruxelles — Installation et Réparation',
        metaTitle: 'Plombier Bruxelles | Installation WC, Robinetterie, Adoucisseur',
        metaDescription: 'Plombier Bruxelles : installation WC, pose robinetterie, adoucisseur eau, raccordement, inspection caméra, remplacement tuyauterie. ☎ 0465 68 51 58',
        keywords: ['radiateur qui fuit Bruxelles', 'problème chasse d\'eau Bruxelles', 'pression eau faible Bruxelles', 'installation WC Bruxelles', 'pose robinetterie Bruxelles', 'inspection caméra canalisation Bruxelles', 'installation adoucisseur eau Bruxelles', 'raccordement eau Bruxelles', 'remplacement tuyauterie Bruxelles', 'installation douche Bruxelles', 'remplacement baignoire Bruxelles'],
        heroText: 'Votre plombier de confiance à Bruxelles pour tous vos travaux de plomberie : installation WC, pose de robinetterie, raccordement eau, remplacement de tuyauterie, installation d\'adoucisseur d\'eau, inspection caméra de canalisations et bien plus. Des artisans qualifiés au service des Bruxellois.',
        processSteps: [
            { title: 'Contact', desc: 'Décrivez votre besoin par téléphone ou formulaire.' },
            { title: 'Devis gratuit', desc: 'Visite et estimation détaillée sans engagement.' },
            { title: 'Travaux', desc: 'Intervention professionnelle dans les règles de l\'art.' },
            { title: 'Garantie', desc: 'Tous nos travaux sont garantis 2 ans.' },
        ],
        faqs: [
            { q: 'Mon radiateur fuit à Bruxelles, que faire ?', a: 'Un radiateur qui fuit peut être dû à un purgeur défectueux, un joint usé ou une corrosion. Nos plombiers à Bruxelles diagnostiquent et réparent rapidement ce type de panne.' },
            { q: 'Combien coûte l\'installation d\'un WC à Bruxelles ?', a: 'L\'installation d\'un WC à Bruxelles coûte entre 150€ et 400€ selon le modèle (suspendu ou posé) et la complexité du raccordement.' },
            { q: 'Faut-il un adoucisseur d\'eau à Bruxelles ?', a: 'L\'eau à Bruxelles est moyennement calcaire. Un adoucisseur d\'eau prolonge la durée de vie de vos appareils et améliore le confort. Nous installons les meilleures marques d\'adoucisseurs.' },
            { q: 'Pourquoi ma pression d\'eau est faible à Bruxelles ?', a: 'Une pression d\'eau faible peut être causée par des canalisations entartrées, un détendeur défaillant ou un problème sur le réseau. Un diagnostic professionnel permet d\'identifier la cause.' },
            { q: 'Faites-vous l\'inspection par caméra des canalisations à Bruxelles ?', a: 'Oui, notre service d\'inspection caméra permet de visualiser l\'intérieur de vos canalisations pour détecter fuites, bouchons, racines ou fissures sans aucune destruction.' },
        ],
    },
];
