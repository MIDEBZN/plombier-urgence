// Detailed data for individual service pages
export interface ServicePageData {
    slug: string;
    icon: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    heroSubtitle: string;
    // What's included
    included: { item: string; detail: string }[];
    // Common problems
    problems: { title: string; description: string }[];
    // Process steps
    process: { step: number; title: string; description: string }[];
    // Why choose us
    whyUs: { icon: string; title: string; text: string }[];
    // FAQs
    faqs: { q: string; a: string }[];
    // Emergency info
    emergency: {
        available: boolean;
        responseTime: string;
        extraCost: string;
        description: string;
    };
    // Pricing hint
    priceFrom: string;
    priceRange: string;
    // Service areas
    serviceAreas: string[];
    // Related service slugs
    relatedServices: string[];
}

export const servicePages: ServicePageData[] = [
    // ─── DÉBOUCHAGE ────────────────────────────
    {
        slug: 'debouchage-canalisation',
        icon: '🚿',
        title: 'Débouchage Canalisation',
        metaTitle: 'Débouchage Canalisation Belgique — Urgence 24/7 | Tarif 2025 dès 80€',
        metaDescription: 'Débouchage canalisation en Belgique : WC, évier, douche, égout. Intervention en 30 min, 24h/24. Tarif 2025 dès 80€. Inspection caméra incluse. ☎ 0470 12 34 56',
        heroSubtitle: 'Canalisation bouchée ? Notre équipe intervient en 30 minutes avec du matériel haute pression professionnel. Résultat garanti, prix fixe communiqué AVANT intervention.',
        priceFrom: '80 €',
        priceRange: '80 € – 350 €',
        included: [
            { item: 'Diagnostic complet', detail: 'Analyse de la nature et localisation du bouchon avant intervention' },
            { item: 'Débouchage mécanique', detail: 'Utilisation de furets professionnels pour éliminer les bouchons simples' },
            { item: 'Hydrocurage haute pression', detail: 'Nettoyage haute pression jusqu\'à 350 bars pour les bouchons résistants' },
            { item: 'Inspection caméra', detail: 'Caméra endoscopique pour vérifier l\'état des canalisations et confirmer le débouchage' },
            { item: 'Nettoyage de la zone', detail: 'Nous laissons votre espace propre après intervention' },
            { item: 'Rapport d\'intervention', detail: 'Compte-rendu écrit avec photos/vidéo caméra si nécessaire' },
            { item: 'Garantie 6 mois', detail: 'Si le même bouchon revient dans les 6 mois, nous revenons gratuitement' },
            { item: 'Conseils de prévention', detail: 'Recommandations personnalisées pour éviter les futurs bouchons' },
        ],
        problems: [
            { title: 'WC bouché', description: 'Toilettes qui ne se vident plus ou débordent. Cause fréquente : objets coincés, accumulation de papier ou problème de canalisation.' },
            { title: 'Évier ou lavabo bouché', description: 'Eau stagnante dans l\'évier. Souvent causé par l\'accumulation de graisses, restes alimentaires ou cheveux.' },
            { title: 'Douche ou baignoire bouchée', description: 'Eau qui ne s\'évacue plus. Principalement dû aux cheveux et résidus de savon accumulés.' },
            { title: 'Canalisation principale bouchée', description: 'Remontées d\'eau dans plusieurs appareils en même temps. Problème au niveau du collecteur principal.' },
            { title: 'Odeurs nauséabondes', description: 'Mauvaises odeurs venant des canalisations. Signe d\'un bouchon partiel ou d\'un siphon défaillant.' },
            { title: 'Remontées d\'eau', description: 'Eau sale qui remonte par les évacuations. Bouchon sérieux nécessitant une intervention professionnelle urgente.' },
        ],
        process: [
            { step: 1, title: 'Appel et diagnostic à distance', description: 'Vous nous appelez ou envoyez une photo par WhatsApp. Nous identifions le problème et vous communiquons un prix fixe AVANT de venir.' },
            { step: 2, title: 'Arrivée en 30 minutes', description: 'Notre plombier le plus proche se déplace chez vous avec tout le matériel nécessaire. Pas d\'attente, pas de mauvaise surprise.' },
            { step: 3, title: 'Diagnostic sur place', description: 'Inspection visuelle et, si nécessaire, caméra endoscopique pour localiser précisément le bouchon et évaluer son importance.' },
            { step: 4, title: 'Débouchage professionnel', description: 'Utilisation de la technique adaptée : furet mécanique, hydrocurage haute pression ou extraction manuelle selon le type de bouchon.' },
            { step: 5, title: 'Vérification et nettoyage', description: 'Test de débit pour confirmer le débouchage complet. Nettoyage de la zone d\'intervention. Inspection caméra de contrôle.' },
            { step: 6, title: 'Facturation claire', description: 'Paiement au prix convenu : Bancontact, virement ou cash. Facture officielle avec TVA et garantie 6 mois.' },
        ],
        whyUs: [
            { icon: '⚡', title: 'Intervention en 30 min', text: 'Nos équipes sont réparties dans toute la Belgique pour une arrivée ultra-rapide.' },
            { icon: '💰', title: 'Prix fixe avant intervention', text: 'Pas de surprise : vous connaissez le prix AVANT qu\'on commence. Dès 80€.' },
            { icon: '🔍', title: 'Inspection caméra incluse', text: 'Contrairement à 90% des concurrents, notre inspection caméra est incluse dans le prix.' },
            { icon: '✅', title: 'Garantie 6 mois', text: 'Si le bouchon revient dans les 6 mois, nous intervenons gratuitement.' },
        ],
        faqs: [
            { q: 'Combien coûte un débouchage de canalisation ?', a: 'Un débouchage simple (évier, WC) coûte à partir de 80€. Un débouchage de canalisation principale démarre à 150€. Le prix exact dépend de la complexité et est toujours communiqué AVANT intervention.' },
            { q: 'Combien de temps dure un débouchage ?', a: 'Un débouchage simple prend 30 à 45 minutes. Un débouchage de canalisation principale peut prendre 1 à 2 heures. Nous restons jusqu\'à ce que le problème soit 100% résolu.' },
            { q: 'Pouvez-vous intervenir la nuit ou le dimanche ?', a: 'Oui, nous sommes disponibles 24h/24 et 7j/7, y compris nuits, week-ends et jours fériés. Un supplément de 50€ s\'applique en dehors des heures ouvrables.' },
            { q: 'L\'inspection caméra est-elle vraiment incluse ?', a: 'Oui. Contrairement à d\'autres plombiers qui facturent 100€ à 200€ en supplément, notre inspection caméra est incluse dans chaque débouchage.' },
            { q: 'Que faire en attendant le plombier si mon WC est bouché ?', a: 'Ne versez PAS de produits chimiques. Essayez une ventouse. Si l\'eau déborde, fermez le robinet d\'arrêt des WC (derrière les toilettes). Placez des serpillières.' },
            { q: 'Utilisez-vous des produits chimiques ?', a: 'Non, jamais. Les produits chimiques endommagent vos canalisations et sont dangereux. Nous utilisons uniquement des techniques mécaniques et haute pression.' },
        ],
        emergency: {
            available: true,
            responseTime: '30 minutes',
            extraCost: '+50€ nuit/week-end',
            description: 'WC qui déborde, remontées d\'eau, inondation par les canalisations : nous intervenons en urgence 24h/24 avec un temps de réponse moyen de 30 minutes dans toute la Belgique.',
        },
        serviceAreas: ['Bruxelles (19 communes)', 'Liège et province', 'Namur et province', 'Charleroi et arrondissement', 'Mons et Hainaut', 'Brabant wallon (Waterloo, Wavre, Nivelles)', 'Ottignies-Louvain-la-Neuve'],
        relatedServices: ['recherche-fuite', 'urgence-inondation'],
    },

    // ─── RECHERCHE DE FUITE ────────────────────
    {
        slug: 'recherche-fuite',
        icon: '🔍',
        title: 'Recherche & Réparation de Fuite',
        metaTitle: 'Détection Fuite d\'Eau Belgique — Sans Casse | Caméra Thermique | Tarif 2025',
        metaDescription: 'Détection fuite d\'eau en Belgique sans destruction. Caméra thermique et acoustique. Réparation immédiate. Tarif 2025 dès 95€. Intervention 24/7. ☎ 0470 12 34 56',
        heroSubtitle: 'Fuite d\'eau visible ou cachée ? Nous localisons et réparons toutes les fuites avec des technologies non invasives. Pas de casse inutile, résultat garanti.',
        priceFrom: '95 €',
        priceRange: '95 € – 300 €',
        included: [
            { item: 'Détection par caméra thermique', detail: 'Localisation précise des fuites derrière murs et sols sans aucune destruction' },
            { item: 'Détection acoustique', detail: 'Micro-capteurs pour détecter les fuites dans les canalisations enterrées' },
            { item: 'Recherche par gaz traceur', detail: 'Injection d\'un gaz inoffensif pour localiser les fuites les plus subtiles' },
            { item: 'Réparation immédiate', detail: 'Colmatage, remplacement de tuyau ou joint — réparation le jour même' },
            { item: 'Test d\'étanchéité', detail: 'Mise sous pression pour vérifier qu\'aucune autre fuite n\'existe' },
            { item: 'Rapport pour assurance', detail: 'Document détaillé avec photos et localisation exacte pour votre dossier d\'assurance' },
            { item: 'Garantie 2 ans', detail: 'Toute réparation est garantie 2 ans pièces et main d\'œuvre' },
            { item: 'Conseils de prévention', detail: 'Recommandations pour éviter les futures fuites et protéger votre habitation' },
        ],
        problems: [
            { title: 'Fuite robinet', description: 'Robinet qui goutte ou qui fuit à la base. Joint usé, cartouche défaillante ou robinet à remplacer.' },
            { title: 'Tuyau percé', description: 'Fuite visible sur un tuyau apparent. Corrosion, gel ou choc mécanique en sont les causes fréquentes.' },
            { title: 'Fuite cachée dans un mur', description: 'Tache d\'humidité, peinture qui cloque, moisissure. La fuite est derrière le mur et nécessite une détection spécialisée.' },
            { title: 'Fuite sous le sol', description: 'Augmentation inexpliquée de la facture d\'eau. Fuite sur une canalisation enterrée sous la dalle.' },
            { title: 'Fuite chauffe-eau', description: 'Eau qui s\'écoule du ballon ou du groupe de sécurité. Peut être le signe d\'un appareil en fin de vie.' },
            { title: 'Humidité et moisissure', description: 'Odeur de moisi, taches noires sur les murs. Souvent le signe d\'une fuite lente non détectée depuis des semaines.' },
        ],
        process: [
            { step: 1, title: 'Signalement et évaluation', description: 'Décrivez les symptômes par téléphone ou envoyez des photos par WhatsApp. Nous estimons la gravité et le coût prévisible.' },
            { step: 2, title: 'Arrivée rapide avec matériel', description: 'Notre technicien arrive avec caméra thermique, détecteur acoustique et matériel de réparation.' },
            { step: 3, title: 'Détection non invasive', description: 'Scanning complet des zones suspectes avec la technologie adaptée : thermique, acoustique ou gaz traceur.' },
            { step: 4, title: 'Localisation confirmée', description: 'Le point exact de la fuite est identifié et marqué. Nous vous montrons le résultat sur l\'écran de la caméra.' },
            { step: 5, title: 'Réparation immédiate', description: 'Ouverture ciblée minimale (si nécessaire), réparation du tuyau ou du joint, puis test d\'étanchéité sous pression.' },
            { step: 6, title: 'Rapport et facturation', description: 'Rapport détaillé pour votre assurance. Facturation au prix convenu. Garantie 2 ans sur toute réparation.' },
        ],
        whyUs: [
            { icon: '🔬', title: 'Technologies de pointe', text: 'Caméra thermique, détection acoustique, gaz traceur : nous trouvons TOUTES les fuites.' },
            { icon: '🏠', title: 'Sans destruction', text: 'Pas de casse inutile. Nos technologies permettent de localiser la fuite sans démolir vos murs.' },
            { icon: '📋', title: 'Rapport pour assurance', text: 'Document détaillé avec photos — accepté par toutes les compagnies d\'assurance belges.' },
            { icon: '🛡️', title: 'Garantie 2 ans', text: 'Chaque réparation est garantie 2 ans. Si la fuite revient, on revient gratuitement.' },
        ],
        faqs: [
            { q: 'Combien coûte une recherche de fuite ?', a: 'La détection de fuite coûte à partir de 95€, réparation incluse pour les fuites simples. Pour une détection par caméra thermique, comptez 150€ à 300€.' },
            { q: 'La détection de fuite est-elle sans destruction ?', a: 'Oui. Nos technologies (caméra thermique, acoustique, gaz traceur) permettent de localiser la fuite sans casser murs ni sols. Seule une petite ouverture ciblée est faite pour la réparation.' },
            { q: 'Mon assurance couvre-t-elle la recherche de fuite ?', a: 'Oui, dans la plupart des cas. Votre assurance habitation (incendie) couvre la recherche et la réparation de fuite. Nous fournissons un rapport complet pour votre dossier.' },
            { q: 'Comment savoir si j\'ai une fuite cachée ?', a: 'Les signes : compteur d\'eau qui tourne quand tout est fermé, taches d\'humidité, peinture qui cloque, augmentation de la facture d\'eau, odeur de moisi.' },
            { q: 'Intervenez-vous en urgence pour une fuite d\'eau ?', a: 'Oui, 24h/24 et 7j/7. En cas de fuite importante, coupez l\'arrivée d\'eau et appelez-nous immédiatement. Intervention en 30 min.' },
        ],
        emergency: {
            available: true,
            responseTime: '30 minutes',
            extraCost: '+50€ nuit/week-end',
            description: 'Fuite importante, dégât des eaux, inondation en cours : appelez immédiatement. En attendant, coupez l\'arrivée d\'eau générale et l\'électricité si l\'eau atteint des prises.',
        },
        serviceAreas: ['Bruxelles (19 communes)', 'Liège et province', 'Namur et province', 'Charleroi et arrondissement', 'Mons et Hainaut', 'Brabant wallon', 'Ottignies-Louvain-la-Neuve'],
        relatedServices: ['debouchage-canalisation', 'urgence-inondation'],
    },

    // ─── DÉPANNAGE CHAUDIÈRE ───────────────────
    {
        slug: 'depannage-chaudiere',
        icon: '🔥',
        title: 'Dépannage & Entretien Chaudière',
        metaTitle: 'Dépannage Chaudière Belgique — Toutes Marques 24/7 | Tarif 2025 dès 100€',
        metaDescription: 'Dépannage chaudière en Belgique : gaz, mazout, condensation. Chauffagiste agréé, toutes marques. Entretien annuel dès 100€. Intervention 24/7. ☎ 0470 12 34 56',
        heroSubtitle: 'Chaudière en panne ou entretien obligatoire ? Nos chauffagistes agréés interviennent sur toutes les marques. Dépannage le jour même, attestation officielle.',
        priceFrom: '100 €',
        priceRange: '100 € – 500 €',
        included: [
            { item: 'Diagnostic complet', detail: 'Analyse du code erreur, vérification de tous les composants et test de fonctionnement' },
            { item: 'Dépannage toutes marques', detail: 'Vaillant, Bulex, Viessmann, Buderus, Junkers, Bosch, De Dietrich et toutes autres marques' },
            { item: 'Entretien annuel obligatoire', detail: 'Nettoyage, réglage du brûleur, contrôle de combustion, vérification de sécurité' },
            { item: 'Attestation officielle', detail: 'Certificat d\'entretien conforme à la législation belge (obligatoire tous les 2-3 ans)' },
            { item: 'Remplacement de pièces', detail: 'Pièces de rechange d\'origine ou compatibles, disponibles en stock' },
            { item: 'Conseils en économie d\'énergie', detail: 'Optimisation des réglages pour réduire votre consommation jusqu\'à 15%' },
            { item: 'Garantie 2 ans', detail: 'Garantie sur toute pièce remplacée et sur la main d\'œuvre' },
            { item: 'Installation neuve', detail: 'Pose et mise en service de chaudières neuves avec prime énergie si éligible' },
        ],
        problems: [
            { title: 'Chaudière en panne', description: 'Plus de chauffage ni d\'eau chaude. Code erreur affiché. Peut être un problème de pression, de pompe, d\'allumage ou d\'électronique.' },
            { title: 'Plus d\'eau chaude', description: 'L\'eau reste froide malgré la chaudière allumée. Vanne 3 voies, échangeur ou sonde de température défaillants.' },
            { title: 'Chaudière qui fuit', description: 'Eau qui coule sous la chaudière. Problème de pression, soupape de sécurité ou échangeur percé.' },
            { title: 'Bruit anormal', description: 'Cognements, sifflements, vibrations. Souvent lié à de l\'air dans le circuit ou un problème de pompe.' },
            { title: 'Pression qui descend', description: 'Manomètre en dessous de 1 bar. Fuite dans le circuit de chauffage ou vase d\'expansion défaillant.' },
            { title: 'Radiateur froid', description: 'Un ou plusieurs radiateurs ne chauffent pas. Air dans le circuit, boue dans les tuyaux ou vanne thermostatique bloquée.' },
        ],
        process: [
            { step: 1, title: 'Appel et diagnostic à distance', description: 'Communiquez-nous la marque/modèle et le code erreur. Dans 50% des cas, nous pouvons identifier le problème par téléphone.' },
            { step: 2, title: 'Intervention rapide', description: 'Notre chauffagiste agréé le plus proche se déplace avec les pièces de rechange les plus courantes en stock.' },
            { step: 3, title: 'Diagnostic sur place', description: 'Vérification complète : pression, combustion, composants électroniques, circuits hydrauliques et sécurités.' },
            { step: 4, title: 'Réparation ou remplacement', description: 'Remplacement de la pièce défaillante, réglage et test complet de fonctionnement.' },
            { step: 5, title: 'Test et validation', description: 'Mise en route complète, vérification de la pression, de la flamme et de l\'eau chaude.' },
            { step: 6, title: 'Attestation et facture', description: 'Remise de l\'attestation officielle (si entretien), facture détaillée et conseils d\'utilisation.' },
        ],
        whyUs: [
            { icon: '🏅', title: 'Chauffagistes agréés', text: 'Tous nos techniciens sont agréés Cerga/Cedicol pour le gaz et le mazout.' },
            { icon: '🔧', title: 'Toutes marques', text: 'Vaillant, Bulex, Viessmann, Buderus, Junkers, De Dietrich — nous intervenons sur tout.' },
            { icon: '📦', title: 'Pièces en stock', text: 'Les pièces les plus courantes sont dans notre véhicule : 80% des pannes réparées le jour même.' },
            { icon: '📜', title: 'Attestation officielle', text: 'Certificat conforme à la législation belge, accepté par toutes les assurances.' },
        ],
        faqs: [
            { q: 'L\'entretien de chaudière est-il obligatoire en Belgique ?', a: 'Oui. En Wallonie, l\'entretien est obligatoire tous les ans pour le mazout et tous les 2 ans pour le gaz. À Bruxelles, tous les 2 ans pour le gaz et annuel pour le mazout.' },
            { q: 'Combien coûte un entretien de chaudière ?', a: 'L\'entretien annuel coûte entre 100€ et 180€ selon le type de chaudière (gaz ou mazout, murale ou sol). Attestation officielle incluse.' },
            { q: 'Combien coûte un dépannage de chaudière ?', a: 'Un dépannage simple (réinitialisation, purge, réglage de pression) coûte 100€ à 150€. Un remplacement de pièce varie de 150€ à 500€ selon la pièce.' },
            { q: 'Intervenez-vous sur les chaudières au mazout ?', a: 'Oui, nos techniciens sont agréés pour le gaz ET le mazout. Toutes marques et tous modèles.' },
            { q: 'Pouvez-vous installer une nouvelle chaudière ?', a: 'Oui. Nous conseillons, fournissons et installons des chaudières neuves (condensation gaz, pompe à chaleur). Nous vous aidons aussi à obtenir les primes énergie régionales.' },
        ],
        emergency: {
            available: true,
            responseTime: '45 minutes',
            extraCost: '+50€ nuit/week-end',
            description: 'Panne de chauffage en plein hiver, fuite de gaz, odeur suspecte : appelez immédiatement. En cas d\'odeur de gaz, aérez et quittez le logement.',
        },
        serviceAreas: ['Bruxelles (19 communes)', 'Liège et province', 'Namur et province', 'Charleroi et arrondissement', 'Mons et Hainaut', 'Brabant wallon', 'Ottignies-Louvain-la-Neuve'],
        relatedServices: ['reparation-robinetterie', 'recherche-fuite'],
    },

    // ─── RÉPARATION ROBINETTERIE ───────────────
    {
        slug: 'reparation-robinetterie',
        icon: '🔧',
        title: 'Réparation Robinetterie & Sanitaires',
        metaTitle: 'Réparation Robinetterie & Sanitaires Belgique — Tarif 2025 dès 60€',
        metaDescription: 'Réparation robinet, mitigeur, chasse d\'eau, WC, chauffe-eau en Belgique. Remplacement et installation sanitaires. Dès 60€. Intervention rapide. ☎ 0470 12 34 56',
        heroSubtitle: 'Robinet qui fuit, chasse d\'eau qui coule, sanitaire à remplacer ? Nos plombiers interviennent rapidement pour toutes vos réparations et installations.',
        priceFrom: '60 €',
        priceRange: '60 € – 400 €',
        included: [
            { item: 'Réparation robinet et mitigeur', detail: 'Remplacement de cartouche, joint, aérateur ou robinet complet' },
            { item: 'Résolution chasse d\'eau', detail: 'Réglage, remplacement du mécanisme ou du flotteur' },
            { item: 'Installation WC', detail: 'Pose de WC standard, suspendu ou broyeur avec raccordement complet' },
            { item: 'Remplacement chauffe-eau', detail: 'Dépose de l\'ancien, pose et raccordement du nouveau, mise en service' },
            { item: 'Détartrage sanitaires', detail: 'Détartrage chauffe-eau, robinets, pomme de douche' },
            { item: 'Installation adoucisseur', detail: 'Pose et raccordement d\'adoucisseur d\'eau pour protéger vos installations' },
            { item: 'Raccordement appareils', detail: 'Machine à laver, lave-vaisselle, frigo américain' },
            { item: 'Garantie 2 ans', detail: 'Toute réparation et installation garantie 2 ans pièces et main d\'œuvre' },
        ],
        problems: [
            { title: 'Robinet qui goutte', description: 'Goutte à goutte constant, même robinet fermé. Joint usé ou cartouche céramique défaillante. Gaspille jusqu\'à 120 litres par jour.' },
            { title: 'Chasse d\'eau qui coule', description: 'L\'eau coule en permanence dans la cuvette. Mécanisme de chasse usé ou mauvais réglage du flotteur.' },
            { title: 'Toilette qui fuit', description: 'Eau au sol autour du WC. Joint de cire usé ou raccordement défaillant. À traiter rapidement pour éviter les dégâts.' },
            { title: 'Chauffe-eau en panne', description: 'Plus d\'eau chaude. Résistance entartrée, thermostat défaillant ou ballon en fin de vie.' },
            { title: 'Pression d\'eau faible', description: 'Débit insuffisant aux robinets. Problème de réducteur de pression, tuyauterie entartrée ou fuite cachée.' },
            { title: 'Eau marron ou rouille', description: 'Eau colorée à l\'ouverture du robinet. Corrosion interne des tuyaux ou du chauffe-eau.' },
        ],
        process: [
            { step: 1, title: 'Description du problème', description: 'Appelez ou envoyez une photo par WhatsApp. Nous vous donnons un diagnostic et un prix fixe immédiatement.' },
            { step: 2, title: 'Intervention planifiée', description: 'Rendez-vous à l\'heure qui vous convient (ou intervention d\'urgence en 30 min si besoin).' },
            { step: 3, title: 'Diagnostic et devis', description: 'Vérification sur place, confirmation du diagnostic et du prix avant de commencer.' },
            { step: 4, title: 'Réparation ou remplacement', description: 'Intervention propre et soignée. Utilisation de pièces d\'origine ou haute qualité.' },
            { step: 5, title: 'Test et mise en service', description: 'Vérification du bon fonctionnement, test d\'étanchéité et nettoyage de la zone.' },
            { step: 6, title: 'Facture et garantie', description: 'Paiement par Bancontact, virement ou cash. Facture officielle avec garantie 2 ans.' },
        ],
        whyUs: [
            { icon: '💧', title: 'Toutes marques sanitaires', text: 'Grohe, Hansgrohe, Roca, Geberit, Ideal Standard — nous travaillons avec toutes les marques.' },
            { icon: '📦', title: 'Pièces en véhicule', text: 'Les pièces les plus courantes sont en stock dans nos véhicules : 80% des réparations le jour même.' },
            { icon: '🪪', title: 'Devis gratuit', text: 'Estimation gratuite par téléphone ou WhatsApp. Pas de frais de déplacement pour un devis.' },
            { icon: '✅', title: 'Garantie 2 ans', text: 'Toute réparation et installation est garantie 2 ans. Travail soigné et durable.' },
        ],
        faqs: [
            { q: 'Combien coûte le remplacement d\'un robinet ?', a: 'Le remplacement d\'un robinet coûte entre 80€ et 200€ (fourniture et pose), selon le modèle choisi. La réparation d\'un robinet existant coûte 60€ à 120€.' },
            { q: 'Ma chasse d\'eau coule en permanence, que faire ?', a: 'C\'est généralement le mécanisme de chasse qui est usé. Le remplacement coûte 80€ à 130€ (pièce + main d\'œuvre). En attendant, vous pouvez couper l\'arrivée d\'eau du WC.' },
            { q: 'Combien coûte l\'installation d\'un WC ?', a: 'L\'installation d\'un WC standard coûte 150€ à 300€ (hors fourniture du WC). Un WC suspendu avec bâti-support coûte 300€ à 500€ de pose.' },
            { q: 'Pouvez-vous remplacer mon chauffe-eau ?', a: 'Oui. Remplacement complet (dépose ancien + pose nouveau + raccordement) à partir de 400€ pour un chauffe-eau électrique 100L, fourniture incluse.' },
            { q: 'Acceptez-vous le paiement par Bancontact ?', a: 'Oui. Nous acceptons Bancontact, virement bancaire et cash. Toujours avec facture officielle.' },
        ],
        emergency: {
            available: true,
            responseTime: '30 minutes',
            extraCost: '+50€ nuit/week-end',
            description: 'Fuite de robinet importante, WC qui déborde, chauffe-eau qui fuit : coupez l\'arrivée d\'eau et appelez-nous. Intervention d\'urgence 24h/24.',
        },
        serviceAreas: ['Bruxelles (19 communes)', 'Liège et province', 'Namur et province', 'Charleroi et arrondissement', 'Mons et Hainaut', 'Brabant wallon', 'Ottignies-Louvain-la-Neuve'],
        relatedServices: ['recherche-fuite', 'debouchage-canalisation'],
    },

    // ─── RÉNOVATION SALLE DE BAIN ──────────────
    {
        slug: 'renovation-salle-de-bain',
        icon: '🛁',
        title: 'Rénovation Salle de Bain',
        metaTitle: 'Rénovation Salle de Bain Belgique — Devis Gratuit 2025 | Dès 5 000€',
        metaDescription: 'Rénovation salle de bain en Belgique : douche italienne, carrelage, mobilier, plomberie. Devis gratuit, TVA 6%. Résultat garanti. ☎ 0470 12 34 56',
        heroSubtitle: 'Transformez votre salle de bain en un espace moderne et fonctionnel. Design personnalisé, matériaux de qualité, plomberie intégrée. Devis gratuit et sans engagement.',
        priceFrom: '5 000 €',
        priceRange: '5 000 € – 15 000 €',
        included: [
            { item: 'Conception et design', detail: 'Étude de votre espace, plan 3D, sélection des matériaux et équipements avec vous' },
            { item: 'Dépose de l\'ancien', detail: 'Démolition propre de l\'existant, évacuation des gravats incluse' },
            { item: 'Plomberie complète', detail: 'Refonte des arrivées d\'eau, évacuations, raccordements de tous les appareils' },
            { item: 'Installation douche italienne', detail: 'Receveur extra-plat ou douche à l\'italienne avec étanchéité garantie' },
            { item: 'Carrelage sol et murs', detail: 'Pose carrelage, faïence, mosaïque — matériaux au choix' },
            { item: 'Meuble vasque et miroir', detail: 'Installation de mobilier de salle de bain moderne et fonctionnel' },
            { item: 'Éclairage et prises', detail: 'Points lumineux, prises sécurisées, miroir LED si souhaité' },
            { item: 'Nettoyage final', detail: 'Livraison clé en main : nettoyage complet et vérification finale' },
        ],
        problems: [
            { title: 'Salle de bain vieillissante', description: 'Carrelage daté, robinetterie usée, joints noircis. Une rénovation redonne de la valeur à votre bien.' },
            { title: 'Problèmes d\'humidité', description: 'Moisissures, joints qui noircissent, peinture qui s\'écaille. Souvent lié à une mauvaise ventilation ou étanchéité.' },
            { title: 'Baignoire à remplacer par douche', description: 'Gain de place, accessibilité, modernité : le remplacement baignoire par douche italienne est la rénovation la plus demandée.' },
            { title: 'Manque de rangement', description: 'Espace mal optimisé, pas de meuble vasque, pas de niche. La rénovation permet de tout repenser.' },
            { title: 'Fuite ou canalisation usée', description: 'Tuyauterie vétuste qui fuit ou risque de fuir. La rénovation est l\'occasion de tout refaire en neuf.' },
            { title: 'Adaptation PMR', description: 'Rendre la salle de bain accessible : douche de plain-pied, barres d\'appui, siège de douche.' },
        ],
        process: [
            { step: 1, title: 'Visite gratuite et prise de mesures', description: 'Notre architecte d\'intérieur se déplace gratuitement pour mesurer, écouter vos envies et définir le budget.' },
            { step: 2, title: 'Devis détaillé et plan 3D', description: 'Réception d\'un devis complet avec plan 3D de votre future salle de bain sous 48h.' },
            { step: 3, title: 'Sélection des matériaux', description: 'Nous vous accompagnons pour choisir carrelage, robinetterie, meuble — dans votre budget.' },
            { step: 4, title: 'Travaux de rénovation', description: 'Dépose, plomberie, électricité, étanchéité, carrelage, installation sanitaires — en 5 à 10 jours.' },
            { step: 5, title: 'Finitions et nettoyage', description: 'Joints silicone, peinture si nécessaire, nettoyage complet. Livraison clé en main.' },
            { step: 6, title: 'Réception et garantie', description: 'Visite de réception avec vous, vérification point par point. Garantie 5 ans sur l\'étanchéité.' },
        ],
        whyUs: [
            { icon: '🎨', title: 'Design personnalisé', text: 'Plan 3D gratuit de votre future salle de bain. Résultat visualisé avant les travaux.' },
            { icon: '📋', title: 'Tout inclus', text: 'Plomberie, carrelage, électricité, sanitaires — un seul interlocuteur pour tout le projet.' },
            { icon: '💶', title: 'TVA 6% si éligible', text: 'Pour les logements de plus de 10 ans, vous bénéficiez du taux de TVA réduit à 6%.' },
            { icon: '🛡️', title: 'Garantie 5 ans', text: 'Étanchéité garantie 5 ans, robinetterie et installation garanties 2 ans.' },
        ],
        faqs: [
            { q: 'Combien coûte une rénovation de salle de bain ?', a: 'Une rénovation complète coûte entre 5 000€ et 15 000€ selon la taille et les matériaux choisis. Les tarifs incluent la plomberie, le carrelage, les sanitaires et la main d\'œuvre.' },
            { q: 'Combien de temps durent les travaux ?', a: 'Une rénovation complète de salle de bain standard (4-6 m²) prend 5 à 10 jours ouvrables, de la dépose à la livraison clé en main.' },
            { q: 'Puis-je bénéficier de la TVA à 6% ?', a: 'Oui, si votre logement a plus de 10 ans et que les travaux sont réalisés par un professionnel enregistré. C\'est notre cas — vous économisez 15% de TVA.' },
            { q: 'Fournissez-vous les matériaux ?', a: 'Oui, nous pouvons tout fournir (carrelage, sanitaires, robinetterie) à des tarifs professionnels. Vous pouvez aussi acheter vos propres matériaux si vous le préférez.' },
            { q: 'Peut-on remplacer une baignoire par une douche italienne ?', a: 'Oui, c\'est notre spécialité. Le remplacement baignoire par douche italienne coûte entre 3 000€ et 6 000€ selon les finitions.' },
        ],
        emergency: {
            available: false,
            responseTime: 'Sur rendez-vous',
            extraCost: 'N/A',
            description: 'La rénovation de salle de bain est un service planifié. Nous planifions votre chantier dans les 2 à 4 semaines suivant l\'acceptation du devis.',
        },
        serviceAreas: ['Bruxelles (19 communes)', 'Liège et province', 'Namur et province', 'Charleroi et arrondissement', 'Brabant wallon (Waterloo, Wavre, Nivelles)'],
        relatedServices: ['reparation-robinetterie', 'recherche-fuite'],
    },

    // ─── URGENCE INONDATION ────────────────────
    {
        slug: 'urgence-inondation',
        icon: '🌊',
        title: 'Urgence Inondation',
        metaTitle: 'Urgence Inondation Belgique — Pompage 24/7 | Intervention Immédiate',
        metaDescription: 'Urgence inondation en Belgique : pompage cave, sous-sol, assèchement professionnel. Intervention immédiate 24h/24. Mise en sécurité électrique. ☎ 0470 12 34 56',
        heroSubtitle: 'Cave inondée, dégât des eaux, fuite majeure ? Notre équipe d\'urgence intervient immédiatement pour pomper l\'eau, sécuriser les lieux et limiter les dégâts.',
        priceFrom: '150 €',
        priceRange: '150 € – 800 €',
        included: [
            { item: 'Pompage d\'eau', detail: 'Pompes professionnelles haute capacité pour évacuer l\'eau rapidement' },
            { item: 'Mise en sécurité électrique', detail: 'Coupure et sécurisation des circuits électriques dans les zones inondées' },
            { item: 'Recherche de la source', detail: 'Identification et colmatage de la source de l\'inondation (fuite, remontée, infiltration)' },
            { item: 'Assèchement professionnel', detail: 'Installation de déshumidificateurs industriels pour un assèchement complet' },
            { item: 'Nettoyage et désinfection', detail: 'Nettoyage des surfaces touchées, traitement anti-moisissure' },
            { item: 'Rapport pour assurance', detail: 'Documentation complète avec photos, causes, travaux réalisés pour votre dossier' },
            { item: 'Réparation de la cause', detail: 'Réparation de la fuite, du tuyau cassé ou de la canalisation à l\'origine du sinistre' },
            { item: 'Suivi post-intervention', detail: 'Vérification de l\'assèchement complet sous 48-72h' },
        ],
        problems: [
            { title: 'Cave inondée', description: 'Eau dans la cave après fortes pluies, remontée de nappe ou rupture de canalisation. Intervention de pompage urgente.' },
            { title: 'Rupture de canalisation', description: 'Tuyau principal éclaté inondant la maison. Coupez l\'arrivée d\'eau immédiatement et appelez-nous.' },
            { title: 'Dégât des eaux', description: 'Fuite d\'un appareil (lave-linge, chauffe-eau) ou du voisin du dessus provoquant une inondation.' },
            { title: 'WC qui déborde', description: 'WC bouché avec débordement d\'eau sale. Urgence sanitaire nécessitant une intervention rapide.' },
            { title: 'Remontée d\'égout', description: 'Eau usée qui remonte par les canalisations. Bouchon sur le collecteur principal ou le réseau public.' },
            { title: 'Infiltration par les murs', description: 'Eau qui s\'infiltre par les murs du sous-sol lors de fortes pluies. Problème d\'étanchéité extérieure.' },
        ],
        process: [
            { step: 1, title: 'Appel d\'urgence', description: 'Appelez immédiatement le 0470 12 34 56. En attendant : coupez l\'eau et l\'électricité si possible, mettez les biens en hauteur.' },
            { step: 2, title: 'Arrivée en 20 minutes', description: 'Notre équipe d\'urgence la plus proche se déplace immédiatement avec tout le matériel de pompage.' },
            { step: 3, title: 'Sécurisation des lieux', description: 'Coupure électrique sécurisée des zones inondées, évaluation des risques, protection des biens.' },
            { step: 4, title: 'Pompage et évacuation', description: 'Pompage de l\'eau avec nos pompes haute capacité. Évacuation vers l\'extérieur ou le réseau.' },
            { step: 5, title: 'Réparation de la cause', description: 'Identification et réparation de la source : fuite, canalisation bouchée, tuyau cassé.' },
            { step: 6, title: 'Assèchement et rapport', description: 'Installation de déshumidificateurs si nécessaire. Rapport complet pour votre assurance.' },
        ],
        whyUs: [
            { icon: '🚨', title: 'Intervention immédiate', text: 'Temps de réponse moyen de 20 minutes pour les urgences inondation. Disponible 24h/24.' },
            { icon: '⚡', title: 'Matériel professionnel', text: 'Pompes haute capacité, déshumidificateurs industriels, détecteurs d\'humidité.' },
            { icon: '🔌', title: 'Sécurité électrique', text: 'Mise en sécurité des circuits électriques AVANT tout pompage. Votre sécurité d\'abord.' },
            { icon: '📋', title: 'Dossier assurance complet', text: 'Rapport avec photos, causes, travaux — accepté par toutes les assurances belges.' },
        ],
        faqs: [
            { q: 'Que faire en cas d\'inondation dans ma maison ?', a: '1) Coupez l\'électricité au disjoncteur. 2) Coupez l\'arrivée d\'eau si la source est un tuyau. 3) Mettez les biens en hauteur. 4) Appelez-nous au 0470 12 34 56.' },
            { q: 'Combien coûte un pompage de cave ?', a: 'Le pompage de cave coûte à partir de 150€ pour une petite cave. Le prix varie selon le volume d\'eau et la cause. Devis exact communiqué à l\'arrivée.' },
            { q: 'Mon assurance couvre-t-elle l\'inondation ?', a: 'Oui, la plupart des assurances habitation (incendie) couvrent les dégâts des eaux et les inondations. Nous fournissons un rapport détaillé pour votre dossier.' },
            { q: 'Intervenez-vous la nuit et le week-end ?', a: 'Oui, notre service d\'urgence inondation est disponible 24h/24, 7j/7, 365 jours par an. Pas de supplément pour les urgences inondation.' },
            { q: 'Combien de temps pour assécher une cave ?', a: 'Le pompage prend 1 à 3 heures selon le volume. L\'assèchement complet avec déshumidificateur prend 2 à 5 jours selon la surface et les matériaux.' },
        ],
        emergency: {
            available: true,
            responseTime: '20 minutes',
            extraCost: 'Pas de supplément urgence',
            description: 'L\'inondation est TOUJOURS une urgence. Appelez-nous immédiatement, jour ou nuit. Pas de supplément pour les urgences inondation car chaque minute compte.',
        },
        serviceAreas: ['Bruxelles (19 communes)', 'Liège et province', 'Namur et province', 'Charleroi et arrondissement', 'Mons et Hainaut', 'Brabant wallon', 'Toute la Belgique'],
        relatedServices: ['recherche-fuite', 'debouchage-canalisation'],
    },
];
