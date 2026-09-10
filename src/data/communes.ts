// Slug helper
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['']/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export interface Commune {
  name: string;
  slug: string;
  province: string;
  provinceSlug: string;
  description: string;
  services: string[];
  landmarks: string;
  population?: string;
  h1?: string;
  title?: string;
  buildingStock?: string;
  commonProblems?: string;
  waterHardness?: string;
  parkingAccess?: string;
  averageArrival?: string;
  technician?: { name: string; role: string; experience: string };
  customerReview?: { text: string; author: string; area: string; rating: number };
  recentIntervention?: { title: string; desc: string };
  neighbourhoods?: string[];
  servicePricing?: { service: string; price: string }[];
}

export interface Province {
  name: string;
  slug: string;
  icon: string;
  communes: Commune[];
}

function makeCommune(name: string, province: string, provinceSlug: string, extras?: Partial<Commune>): Commune {
  const description = extras?.description || `Votre plombier de confiance à ${name}. Intervention rapide en 30 minutes, 24h/24 et 7j/7. Débouchage, recherche de fuite, dépannage chaudière et rénovation salle de bain à ${name}. Nos techniciens certifiés interviennent chez vous avec des tarifs transparents et fixes.`;
  
  return {
    name,
    slug: slugify(name),
    province,
    provinceSlug,
    description,
    h1: extras?.h1,
    title: extras?.title,
    services: [
      `Débouchage de canalisations à ${name}`,
      `Recherche et réparation de fuites à ${name}`,
      `Dépannage et entretien chaudière à ${name}`,
      `Réparation robinetterie et sanitaires à ${name}`,
      `Rénovation salle de bain à ${name}`,
      `Urgence plomberie à ${name} 24h/24`,
    ],
    landmarks: extras?.landmarks || `${name} et ses environs`,
    ...extras,
  };
}

export const provinces: Province[] = [
  {
    name: 'Bruxelles-Capitale',
    slug: 'bruxelles-capitale',
    icon: '🏛️',
    communes: [
      makeCommune('Bruxelles', 'Bruxelles-Capitale', 'bruxelles-capitale', { 
        population: '185 000', 
        landmarks: 'Grand-Place, Manneken Pis, Quartier Européen, Avenue Louise',
        description: 'Plombier Urgence Bruxelles : Intervention ultra-rapide dans le centre-ville et les quartiers périphériques. Spécialiste du débouchage de canalisations anciennes et de la réparation de fuites d\'eau dans les bâtiments historiques bruxellois. Disponible 24h/24.'
      }),
      makeCommune('Ixelles', 'Bruxelles-Capitale', 'bruxelles-capitale', { 
        population: '87 000', 
        landmarks: 'Place Flagey, Étangs d\'Ixelles, Université Libre de Bruxelles, Quartier Matongé',
        title: 'Plomberie Ixelles | Dépannage Urgent & Débouchage 24/7',
        h1: '<span class="text-accent">Plomberie Ixelles</span> : Votre Expert de Confiance',
        description: 'Une fuite d eau dans votre logement ? Faites appel à notre service de plomberie ixelles pour une intervention rapide. Nous gérons tout dépannage urgent, que ce soit pour des canalisations bouchées ou pour limiter les dégâts des eaux. Une simple fuite d\'eau peut vite s\'aggraver, c\'est pourquoi nos artisans interviennent près de la Place Flagey et de l\'ULB en moins de 30 minutes. Disponibles 24h/24.',
        buildingStock: 'Maisons de maître bruxelloises, appartements des années 60 et nombreux kots étudiants.',
        commonProblems: 'Tuyauterie vétuste en plomb nécessitant un remplacement, dépôts de calcaire importants sur les chauffe-eaux et problèmes de pression dans les immeubles hauts.',
        waterHardness: 'Dureté de l\'eau élevée (environ 32 à 36 °f), forte tendance à l\'entartrage.',
        parkingAccess: 'Le stationnement est très difficile près de Flagey et du Châtelain. Nos techniciens utilisent des véhicules utilitaires compacts pour s\'y garer facilement.',
        averageArrival: '15 à 25 minutes',
        technician: { name: 'Marc D.', role: 'Chef Plombier Ixelles', experience: '12 ans sur la commune' },
        customerReview: { text: "Débouchage express de mon évier un dimanche soir près de Flagey. Le technicien a été très poli et a tout laissé propre.", author: "Sophie T.", area: "Quartier Flagey", rating: 5 },
        recentIntervention: { title: "Remplacement Chauffe-eau près de l\'ULB", desc: "Intervention d\'urgence dans un kot étudiant pour remplacer un boiler électrique percé par le calcaire. Remise en eau en 2 heures." },
        neighbourhoods: ["Cimetière d\'Ixelles", "Châtelain", "Flagey", "Matongé", "Quartier Louise", "Boondael"],
        servicePricing: [
          { service: 'Débouchage WC/Évier', price: 'Dès 75€' },
          { service: 'Recherche de fuite (sans casse)', price: 'Dès 95€' },
          { service: 'Dépannage chauffe-eau', price: 'Dès 85€' }
        ]
      }),
      makeCommune('Uccle', 'Bruxelles-Capitale', 'bruxelles-capitale', { 
        population: '83 000', 
        landmarks: 'Forêt de Soignes, Observatoire Royal, Parc de Wolvendael, Avenue Brugmann',
        description: 'Plombier à Uccle pour interventions résidentielles de haute qualité. Recherche de fuite non-destructive et rénovation de salle de bain de luxe à Uccle. Disponibilité totale jour et nuit.',
        buildingStock: 'Villas spacieuses, résidences de standing et maisons familiales luxueuses.',
        commonProblems: 'Entretien des chaudières haut de gamme, rénovation de salles de bain anciennes, et problèmes d\'évacuation vers le réseau public.',
        waterHardness: 'Dureté élevée justifiant souvent l\'installation d\'adoucisseurs d\'eau.',
        parkingAccess: 'Le stationnement est généralement aisé dans les quartiers résidentiels (Fort-Jaco, Prince d\'Orange).',
        averageArrival: '15 à 25 minutes',
        technician: { name: 'Julien V.', role: 'Maître Plombier', experience: '15 ans de service haut de gamme' },
        customerReview: { text: "Service impeccable pour la réparation de notre chauffage par le sol. Artisan propre, discret et très poli.", author: "Marie-Claire D.", area: "Fort-Jaco", rating: 5 },
        recentIntervention: { title: "Installation d\'un adoucisseur d\'eau", desc: "Mise en place d\'un système anti-calcaire complet pour une villa 4 salles de bain au Prince d\'Orange." },
        neighbourhoods: ["Fort-Jaco", "Prince d\'Orange", "Observatoire", "Saint-Job", "Dieweg"],
        servicePricing: [
          { service: 'Recherche de fuite (sans casse)', price: 'Dès 95€' },
          { service: 'Pose adoucisseur d\'eau', price: 'Sur devis' },
          { service: 'Dépannage chaudière gaz', price: 'Dès 100€' }
        ]
      }),
      makeCommune('Schaerbeek', 'Bruxelles-Capitale', 'bruxelles-capitale', { 
        population: '133 000', 
        landmarks: 'Parc Josaphat, Gare de Schaerbeek, Maison Autrique, Boulevard Lambermont',
        description: 'Plombier Schaerbeek : intervention rapide 24/7 dans la cité des ânes. Spécialiste du dépannage de plomberie ancienne et de l\'entretien de chaudière à Schaerbeek. Prix fixes garantis avant intervention.',
        buildingStock: 'Large mix de maisons bourgeoises 1900 et de logements collectifs plus récents.',
        commonProblems: 'Canalisations bouchées à cause de diamètres d\'évacuation trop petits dans les anciennes maisons, usure des conduites en fonte.',
        waterHardness: 'Dureté moyenne à forte (30°f - 34°f).',
        parkingAccess: 'Le quartier Josaphat et Dailly peut être congestionné, mais nos camionnettes sont équipées d\'un macaron d\'intervention rapide.',
        averageArrival: '20 à 30 minutes',
        technician: { name: 'Karim S.', role: 'Expert Sanitaire', experience: '8 ans d\'intervention à Schaerbeek' },
        customerReview: { text: "Fuite d\'eau réparée en un temps record près du Parc Josaphat. Très professionnel et tarif correct.", author: "Antoine L.", area: "Quartier des Fleurs", rating: 5 },
        recentIntervention: { title: "Dégât des eaux près de la Maison Autrique", desc: "Recherche de fuite non-destructive par thermographie suite à une infiltration. Tuyau en cuivre encastré remplacé avec succès." },
        neighbourhoods: ["Quartier Josaphat", "Dailly", "Plasky", "Quartier des Fleurs", "Gare de Schaerbeek"],
        servicePricing: [
          { service: 'Débouchage WC/Évier', price: 'Dès 75€' },
          { service: 'Recherche de fuite (sans casse)', price: 'Dès 95€' },
          { service: 'Dépannage chaudière', price: 'Dès 100€' }
        ]
      }),
      makeCommune('Etterbeek', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '48 000', landmarks: 'Parc du Cinquantenaire, Quartier des Casernes' }),
      makeCommune('Woluwe-Saint-Lambert', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '56 000', landmarks: 'Roodebeek, Shopping Center Woluwe, Parc de Woluwe' }),
      makeCommune('Woluwe-Saint-Pierre', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '42 000', landmarks: 'Parc de Woluwe, Stockel, Bibliotheca Wittockiana' }),
      makeCommune('Auderghem', 'Bruxelles-Capitale', 'bruxelles-capitale', { 
        population: '34 000', 
        landmarks: 'Rouge-Cloître, Forêt de Soignes, Prieuré de Val Duchesse',
        title: 'Plombier Auderghem 24h/24 | Intervention Rapide',
        h1: 'Plombier Auderghem 24h/24',
        description: 'Vous résidez à Auderghem et faites face à un imprévu sanitaire ? Plombier urgence Bruxelles intervient en 30 minutes. Fuites, débouchage, chaudière. 24h/24.',
        buildingStock: 'Maisons unifamiliales, villas en bordure de forêt et appartements résidentiels.',
        commonProblems: 'Infiltrations d\'eau et problèmes de toiture/gouttières liés à la proximité de la forêt.',
        waterHardness: 'Dureté moyenne à forte.',
        averageArrival: '20 minutes',
        technician: { name: 'Olivier F.', role: 'Spécialiste Auderghem', experience: '10 ans' },
        customerReview: { text: "Dépannage chauffage un dimanche matin. Rapide et efficace.", author: "Benoît H.", area: "Herrmann-Debroux", rating: 5 },
        recentIntervention: { title: "Débouchage égouts", desc: "Passage caméra et curage haute pression près du Rouge-Cloître." },
        neighbourhoods: ["Saint-Julien", "Herrmann-Debroux", "Rouge-Cloître", "Val Duchesse"],
        servicePricing: [
          { service: 'Débouchage WC', price: 'Dès 75€' },
          { service: 'Recherche fuite d\'eau', price: 'Dès 95€' }
        ]
      }),
      makeCommune('Forest', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '56 000', landmarks: 'Parc de Forest, Abbaye de Forest, Forest National' }),
      makeCommune('Saint-Gilles', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '50 000', landmarks: 'Parvis de Saint-Gilles, Hôtel de Ville, Barrière de Saint-Gilles' }),
      makeCommune('Anderlecht', 'Bruxelles-Capitale', 'bruxelles-capitale', { 
        population: '120 000', 
        landmarks: 'Stade Constant Vanden Stock, Maison d\'Érasme, Parc Astrid, Westland Shopping',
        description: 'Besoin d\'un plombier à Anderlecht ? Nos techniciens interviennent près du Westland et du stade en moins de 30 minutes. Débouchage express et réparation de fuites à Anderlecht, 24h/24.'
      }),
      makeCommune('Molenbeek', 'Bruxelles-Capitale', 'bruxelles-capitale', { 
        population: '97 000', 
        landmarks: 'Parc des Muses, Canal de Bruxelles, Tour & Taxis, Karreveld',
        description: 'Plombier Molenbeek-Saint-Jean : dépannage urgent de plomberie et chauffage. Spécialiste du débouchage de canalisations collectives et individuelles à Molenbeek. Service fiable et agréé.'
      }),
      makeCommune('Jette', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '52 000', landmarks: 'Parc de la Jeunesse, Musée René Magritte, Hôpital Brugmann' }),
      makeCommune('Ganshoren', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '25 000', landmarks: 'Parc Roi Baudouin, Basilique de Koekelberg (proximité)' }),
      makeCommune('Berchem-Sainte-Agathe', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '25 000', landmarks: 'Parc du Scheutbos, Église Sainte-Agathe' }),
      makeCommune('Koekelberg', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '22 000', landmarks: 'Basilique du Sacré-Cœur, Parc Élisabeth' }),
      makeCommune('Evere', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '42 000', landmarks: 'Siège de l\'OTAN, Cimetière de Bruxelles, Parc du Bon Pasteur' }),
      makeCommune('Watermael-Boitsfort', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '25 000', landmarks: 'Hippodrome de Boitsfort, Cités-jardins Le Logis et Floréal' }),
      makeCommune('Saint-Josse', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '27 000', landmarks: 'Place Saint-Josse, Botanique, Quartier Madou' }),
    ],
  },
  {
    name: 'Brabant Wallon',
    slug: 'brabant-wallon',
    icon: '🏡',
    communes: [
      makeCommune('Waterloo', 'Brabant Wallon', 'brabant-wallon', { 
        population: '30 000', 
        landmarks: 'Butte du Lion, Mémorial de la Bataille de Waterloo, Centre de Waterloo',
        title: 'Plomberie Waterloo | Dépannage & Urgence 24h/24',
        h1: 'Plomberie Waterloo : Dépannage & Urgence',
        description: 'Besoin d\'un dépannage urgent à Waterloo ? Nos plombiers interviennent rapidement pour tous vos problèmes sanitaires. Débouchage et réparation de chaudière. Intervention 24h/24.',
        buildingStock: 'Villas de standing, résidences familiales spacieuses et commerces au centre.',
        commonProblems: 'Entretien de chaudières haut de gamme et installation d\'adoucisseurs d\'eau.',
        waterHardness: 'Dureté très élevée, adoucisseur fortement conseillé.',
        averageArrival: '20 minutes',
        technician: { name: 'Antoine M.', role: 'Expert Plombier', experience: '15 ans à Waterloo' },
        customerReview: { text: "Service impeccable et courtois pour une fuite dans la salle de bain.", author: "Marie V.", area: "Chenois", rating: 5 },
        recentIntervention: { title: "Rénovation Sanitaire", desc: "Remplacement complet de la robinetterie dans une villa." },
        neighbourhoods: ["Faubourg", "Chenois", "Mont-Saint-Jean", "Joli-Bois", "Centre"],
        servicePricing: [
          { service: 'Dépannage chaudière', price: 'Dès 105€' },
          { service: 'Pose adoucisseur', price: 'Sur devis' }
        ]
      }),
      makeCommune('Wavre', 'Brabant Wallon', 'brabant-wallon', { 
        population: '35 000', 
        landmarks: 'Walibi Belgium, Hôtel de Ville, Maca',
        title: 'Plombier Wavre 24h/24 | Dépannage Urgence & Fuites',
        h1: 'Plombier Wavre 24h/24',
        description: 'Urgence plomberie à Wavre ? Intervention rapide 24h/24. Dépannage chaudière, recherche de fuite et débouchage. Appelez le 0465 68 51 58.',
        buildingStock: 'Maisons de ville au centre et nombreuses villas résidentielles en périphérie.',
        commonProblems: 'Canalisations bouchées et pannes de chaudières fréquentes en hiver.',
        waterHardness: 'Dureté moyenne (environ 25°f).',
        averageArrival: '20 à 30 minutes',
        technician: { name: 'Kevin R.', role: 'Expert Wavrien', experience: '12 ans sur Wavre' },
        customerReview: { text: "Intervention rapide et propre pour un évier bouché. Prix annoncé respecté.", author: "Lucie D.", area: "Centre Wavre", rating: 5 },
        recentIntervention: { title: "Dépannage Chaudière", desc: "Remplacement d'une pompe de circulation sur une chaudière gaz." },
        neighbourhoods: ["Centre Wavre", "Limal", "Bierges", "Profondsart"],
        servicePricing: [
          { service: 'Débouchage WC/Évier', price: 'Dès 75€' },
          { service: 'Dépannage chaudière', price: 'Dès 95€' }
        ]
      }),
      makeCommune('Nivelles', 'Brabant Wallon', 'brabant-wallon', { 
        population: '28 000', 
        landmarks: 'Collégiale Sainte-Gertrude, Grand-Place de Nivelles',
        title: 'Plombier Nivelles 24h/24 | Dépannage et Urgence',
        h1: 'Plombier Nivelles 24h/24',
        description: 'Besoin d\'un plombier à Nivelles ? Dépannage rapide 24h/24. Débouchage, fuites et chauffage. Appelez le 0465 68 51 58.',
        buildingStock: 'Centre historique dense et quartiers résidentiels récents.',
        commonProblems: 'Entartrage des chauffe-eaux et canalisations anciennes dans le centre.',
        waterHardness: 'Dureté élevée (32°f), adoucisseur recommandé.',
        averageArrival: '30 minutes',
        technician: { name: 'Sébastien L.', role: 'Plombier Nivellois', experience: '8 ans' },
        customerReview: { text: "Fuite d'eau réparée en 40 minutes après mon appel. Top !", author: "Marc P.", area: "Quartier de la Collégiale", rating: 5 },
        recentIntervention: { title: "Installation adoucisseur", desc: "Pose d'un système anti-calcaire complet pour une famille." },
        neighbourhoods: ["Centre-ville", "Baulers", "Monstreux", "Bornival", "Thines"],
        servicePricing: [
          { service: 'Recherche de fuite', price: 'Dès 95€' },
          { service: 'Installation WC', price: 'Sur devis' }
        ]
      }),
      makeCommune('Ottignies-Louvain-la-Neuve', 'Brabant Wallon', 'brabant-wallon', { population: '32 000', landmarks: 'UCLouvain, Aula Magna, Musée Hergé' }),
      makeCommune('Braine-l\'Alleud', 'Brabant Wallon', 'brabant-wallon', { 
        population: '40 000', 
        landmarks: 'Butte du Lion (proximité), Bois de la Houssière',
        title: 'Plombier Braine l\'Alleud | Dépannage & Urgence 24h/24',
        h1: '<span class="text-accent">Plombier Braine l\'Alleud</span> : Dépannage & Urgence',
        description: 'Vous habitez à braine l alleud et vous avez besoin d\'une intervention rapide ? Un plombier qualifié est à votre disposition pour résoudre tous vos problèmes dans le domaine de la plomberie. Que ce soit pour réparer une fuite d eau, dépanner un chauffe eau ou réaliser une nouvelle installation de plomberie, nous garantissons un résultat soigné et durable. Intervention garantie 24h/24.'
      }),
      makeCommune('Rixensart', 'Brabant Wallon', 'brabant-wallon', { population: '22 000', landmarks: 'Château de Rixensart, Lac de Genval' }),
      makeCommune('La Hulpe', 'Brabant Wallon', 'brabant-wallon', { population: '8 000', landmarks: 'Domaine Solvay, Fondation Folon, Forêt de Soignes' }),
      makeCommune('Genappe', 'Brabant Wallon', 'brabant-wallon', { population: '16 000', landmarks: 'Ferme de la Cour, Sucrerie de Genappe' }),
      makeCommune('Jodoigne', 'Brabant Wallon', 'brabant-wallon', { population: '14 000', landmarks: 'Église Saint-Médard, Geer, Centre historique' }),
      makeCommune('Tubize', 'Brabant Wallon', 'brabant-wallon', { population: '26 000', landmarks: 'Stade Leburton, Canal Bruxelles-Charleroi' }),
    ],
  },
  {
    name: 'Province de Liège',
    slug: 'province-de-liege',
    icon: '🌉',
    communes: [
      makeCommune('Liège', 'Province de Liège', 'province-de-liege', { 
        population: '197 000', 
        landmarks: 'Gare de Liège-Guillemins, Montagne de Bueren, Cathédrale Saint-Paul, Outremeuse',
        description: 'Plombier Liège : Dépannage en 30 minutes dans toute la Cité Ardente et la région liégeoise. Experts en recherche de fuite et débouchage de canalisation à Liège. Certifié Cerga pour vos interventions gaz.',
        buildingStock: 'Habitations typiques liégeoises anciennes (Outremeuse, Saint-Léonard), avec un fort besoin de rénovation sanitaire.',
        commonProblems: 'Canalisations vétustes en fonte ou grès, bouchons fréquents dus au calcaire et aux graisses, pannes de chaudières anciennes.',
        waterHardness: 'Dureté élevée à très élevée (parfois > 38°f), le placement d\'un adoucisseur est fortement recommandé.',
        parkingAccess: 'Le centre-ville et Outremeuse sont difficiles d\'accès, nos camionnettes sont optimisées pour ce type d\'environnement urbain.',
        averageArrival: '20 à 30 minutes au centre-ville',
        technician: { name: 'Laurent B.', role: 'Spécialiste Dépannage', experience: '14 ans sur le bassin liégeois' },
        customerReview: { text: "Excellente intervention pour une fuite invisible. Ils ont utilisé une caméra thermique pour ne pas casser tout mon carrelage. Merci !", author: "Nadine F.", area: "Guillemins", rating: 5 },
        recentIntervention: { title: "Débouchage égouts en Outremeuse", desc: "Passage caméra et hydrocurage haute pression pour désintégrer un bouchon de calcaire et racines dans une cave voûtée." },
        neighbourhoods: ["Outremeuse", "Guillemins", "Saint-Léonard", "Cointe", "Amercœur"],
        servicePricing: [
          { service: 'Débouchage égout', price: 'Dès 95€' },
          { service: 'Recherche de fuite (caméra)', price: 'Dès 120€' },
          { service: 'Entretien chaudière gaz', price: 'Dès 105€' }
        ]
      }),
      makeCommune('Seraing', 'Province de Liège', 'province-de-liege', { 
        population: '64 000', 
        landmarks: 'Val Saint-Lambert, Château de Seraing, Bois de l\'Abbaye',
        description: 'Plombier Seraing : dépannage urgent plomberie et chauffage. Spécialiste de la réparation de canalisations anciennes dans le bassin sidérurgique serésien. Intervention 30 min.'
      }),
      makeCommune('Herstal', 'Province de Liège', 'province-de-liege', { 
        population: '40 000', 
        landmarks: 'FN Herstal, Préhistomuseum, Hôtel de Ville de Herstal',
        description: 'Plombier Herstal : votre expert local pour débouchage et fuite d\'eau. Nous intervenons rapidement à Herstal et Basse-Meuse pour tous vos problèmes sanitaires.'
      }),
      makeCommune('Verviers', 'Province de Liège', 'province-de-liege', { 
        population: '56 000', 
        landmarks: 'Grand Théâtre, Musée des Beaux-Arts, La Vesdre, Place du Marché',
        title: 'Plombier Verviers 24h/24 | Dépannage et urgence',
        h1: 'Plombier Verviers 24h/24',
        description: 'Urgence plomberie à Verviers ? Dépannage rapide 24h/24 dans la cité lainière. Spécialistes du débouchage et des fuites. Appelez le 0465 68 51 58.',
        buildingStock: 'Maisons de ville traditionnelles, anciens bâtiments industriels réhabilités et nouvelles constructions en périphérie.',
        commonProblems: 'Dégâts des eaux fréquents liés aux crues historiques de la Vesdre, vétusté des évacuations.',
        waterHardness: 'Dureté de l\'eau faible à moyenne (idéal pour les chauffe-eaux).',
        parkingAccess: 'Nos camionnettes accèdent facilement au centre-ville et aux quartiers résidentiels.',
        averageArrival: '20 à 30 minutes',
        technician: { name: 'David M.', role: 'Expert Plombier Verviétois', experience: '11 ans sur Verviers' },
        customerReview: { text: "Intervention très rapide suite à une fuite dans la salle de bain. Le plombier a été de très bon conseil.", author: "Caroline D.", area: "Centre Verviers", rating: 5 },
        recentIntervention: { title: "Dépannage chaudière à Lambermont", desc: "Remplacement en urgence d\'une vanne thermostatique bloquée en plein hiver." },
        neighbourhoods: ["Centre Verviers", "Lambermont", "Petit-Rechain", "Heusy", "Ensival"],
        servicePricing: [
          { service: 'Débouchage WC', price: 'Dès 75€' },
          { service: 'Réparation de fuite', price: 'Dès 95€' },
          { service: 'Dépannage chauffage', price: 'Dès 105€' }
        ]
      }),
      makeCommune('Ans', 'Province de Liège', 'province-de-liege', { population: '28 000', landmarks: 'Château d\'Ans, Parc Communal' }),
      makeCommune('Grâce-Hollogne', 'Province de Liège', 'province-de-liege', { population: '23 000', landmarks: 'Aéroport de Liège, Liège Airport Business Park' }),
      makeCommune('Flémalle', 'Province de Liège', 'province-de-liege', { population: '27 000', landmarks: 'Château de Flémalle, Meuse' }),
      makeCommune('Chaudfontaine', 'Province de Liège', 'province-de-liege', { population: '21 000', landmarks: 'Sources thermales, Château des Thermes, Vesdre' }),
      makeCommune('Visé', 'Province de Liège', 'province-de-liege', { population: '18 000', landmarks: 'Collégiale Saint-Martin, Meuse, Fort d\'Eben-Emael' }),
      makeCommune('Eupen', 'Province de Liège', 'province-de-liege', { population: '20 000', landmarks: 'Barrage de la Vesdre, Hoge Venen, Centre historique' }),
    ],
  },
  {
    name: 'Province de Namur',
    slug: 'province-de-namur',
    icon: '🏰',
    communes: [
      makeCommune('Namur', 'Province de Namur', 'province-de-namur', { 
        population: '112 000', 
        landmarks: 'Citadelle de Namur, Confluent Sambre-Meuse, Parlement Wallon, Vieux Namur',
        title: 'Plombier Urgence Namur 24h/24 | Intervention rapide',
        h1: 'Plombier urgence Namur 24h/24',
        description: 'Besoin d\'un plombier à Namur ? Intervention rapide 24h/24 au pied de la Citadelle et dans le Grand Namur. Débouchage et fuites. Appelez le 0465 68 51 58.',
        buildingStock: 'Maisons de ville anciennes, villas sur les hauteurs (Jambes, Bouge) et immeubles modernes en bord de Meuse.',
        commonProblems: 'Humidité liée à la proximité des fleuves, problèmes de pression d\'eau dans les zones vallonnées, refoulement d\'égouts en cas de fortes pluies.',
        waterHardness: 'Dureté moyenne à forte (28°f - 35°f) selon le captage.',
        parkingAccess: 'Le vieux Namur présente des défis de stationnement, mais nos équipes sont équipées pour intervenir rapidement même dans les piétonniers.',
        averageArrival: '30 minutes dans le centre, 45 minutes périphérie',
        technician: { name: 'Thomas G.', role: 'Chef d\'équipe Namurois', experience: '10 ans sur la province' },
        customerReview: { text: "Canalisation bouchée un samedi. Ils sont intervenus très vite malgré l\'accès difficile dans les petites rues du vieux Namur.", author: "Pierre W.", area: "Vieux Namur", rating: 5 },
        recentIntervention: { title: "Dépannage chaudière à Jambes", desc: "Remplacement du circulateur d\'une chaudière tombée en panne en plein hiver. Remise en service le jour même." },
        neighbourhoods: ["Vieux Namur", "Jambes", "Salzinnes", "Bouge", "Erpent", "Flawinne"],
        servicePricing: [
          { service: 'Débouchage WC/Évier', price: 'Dès 75€' },
          { service: 'Hydrocurage', price: 'Dès 140€' },
          { service: 'Dépannage fuite d\'eau', price: 'Dès 85€' }
        ]
      }),
      makeCommune('Dinant', 'Province de Namur', 'province-de-namur', { population: '14 000', landmarks: 'Citadelle de Dinant, Collégiale Notre-Dame, Adolphe Sax' }),
      makeCommune('Sambreville', 'Province Namur', 'province-de-namur', { population: '28 000', landmarks: 'Abbaye d\'Aulne, Sambre' }),
      makeCommune('Gembloux', 'Province de Namur', 'province-de-namur', { population: '25 000', landmarks: 'Faculté des Sciences Agronomiques, Abbaye de Gembloux' }),
      makeCommune('Andenne', 'Province de Namur', 'province-de-namur', { population: '27 000', landmarks: 'Collégiale Sainte-Begge, Musée de la Céramique' }),
      makeCommune('Ciney', 'Province de Namur', 'province-de-namur', { population: '16 000', landmarks: 'Foire de Ciney, Collégiale Notre-Dame' }),
      makeCommune('Rochefort', 'Province de Namur', 'province-de-namur', { population: '13 000', landmarks: 'Grottes de Han, Abbaye de Rochefort, Château Comtal' }),
      makeCommune('Profondeville', 'Province de Namur', 'province-de-namur', { population: '12 000', landmarks: 'Meuse, Rochers de Frênes, Lustin' }),
      makeCommune('Mettet', 'Province de Namur', 'province-de-namur', { population: '13 000', landmarks: 'Circuit de Mettet, Abbaye de Brogne' }),
      makeCommune('Fosses-la-Ville', 'Province de Namur', 'province-de-namur', { population: '10 000', landmarks: 'Collégiale Saint-Feuillen, Marche folklorique' }),
    ],
  },
  {
    name: 'Hainaut',
    slug: 'hainaut',
    icon: '⚒️',
    communes: [
      makeCommune('Charleroi', 'Hainaut', 'hainaut', { 
        population: '202 000', 
        landmarks: 'Musée de la Photographie, Bois du Cazier, Rive Gauche, Ville Haute',
        description: 'Plombier Charleroi : SOS Plombier disponible immédiatement dans le Pays Noir. Spécialistes du débouchage de canalisation par hydrocurage et de la réparation urgente de fuite à Charleroi.',
        buildingStock: 'Fort héritage industriel, maisons mitoyennes classiques, immeubles de rapport et nouvelles constructions au centre.',
        commonProblems: 'Remontées d\'égouts, tuyauteries obsolètes, problèmes d\'isolation des canalisations extérieures (gel hivernal).',
        waterHardness: 'Dureté moyenne à forte, nécessitant un entretien régulier des chaudières.',
        parkingAccess: 'Nos véhicules d\'intervention accèdent facilement à la plupart des quartiers de la périphérie carolo.',
        averageArrival: '25 à 35 minutes sur le grand Charleroi',
        technician: { name: 'Alain M.', role: 'Plombier Chauffagiste', experience: '20 ans d\'expérience' },
        customerReview: { text: "Un vrai pro. Arrivé à l\'heure à Gosselies, il a réparé la fuite de mon WC en 30 minutes sans surfacturer.", author: "Michel R.", area: "Gosselies", rating: 5 },
        recentIntervention: { title: "Dépannage pompe de relevage", desc: "Remplacement d\'une pompe de relevage de cave inondée suite à des fortes pluies à Marcinelle. Opération réalisée le dimanche." },
        neighbourhoods: ["Ville Basse", "Ville Haute", "Marcinelle", "Gosselies", "Jumet", "Marchienne-au-Pont"],
        servicePricing: [
          { service: 'Débouchage canalisation', price: 'Dès 80€' },
          { service: 'Réparation fuite WC', price: 'Dès 65€' },
          { service: 'Intervention urgence inondation', price: 'Dès 120€' }
        ]
      }),
      makeCommune('Mons', 'Hainaut', 'hainaut', { 
        population: '95 000', 
        landmarks: 'Beffroi de Mons, Grand-Place, Doudou, Mundaneum, Grands Prés',
        description: 'Plombier Mons : Dépannage plomberie et chauffage dans la Cité du Doudou. Intervention rapide pour fuite, débouchage et chaudière à Mons. Tarifs fixes, sans surprise.'
      }),
      makeCommune('La Louvière', 'Hainaut', 'hainaut', { 
        population: '80 000', 
        landmarks: 'Ascenseurs du Canal du Centre, Musée Ianchelevici, Place Maugrétout',
        description: 'Plombier La Louvière : service d\'urgence 24h/24 dans la cité des loups. Débouchage haute pression et recherche de fuite à La Louvière. Techniciens agréés et rapides.'
      }),
      makeCommune('Tournai', 'Hainaut', 'hainaut', { 
        population: '69 000', 
        landmarks: 'Cathédrale Notre-Dame, Beffroi, Grand-Place, Escaut, Pont des Trous',
        description: 'Plombier Tournai : intervention en 30 minutes dans la plus ancienne ville de Belgique. Expertise en plomberie historique et moderne à Tournai. Disponible 24/7.',
        buildingStock: 'Centre historique dense avec des bâtiments patrimoniaux, maisons de ville anciennes et quelques constructions récentes en périphérie.',
        commonProblems: 'Mise aux normes des installations sanitaires dans des bâtiments très anciens, fuites encastrées dans des murs épais, refoulements liés au niveau de l\'Escaut.',
        waterHardness: 'Dureté élevée (supérieure à 35°f), fort impact sur la robinetterie et les chauffe-eaux.',
        parkingAccess: 'Le centre historique pavé et étroit rend le stationnement difficile, mais nos artisans ont l\'habitude d\'y intervenir rapidement.',
        averageArrival: '30 minutes',
        technician: { name: 'Thierry D.', role: 'Plombier Urgence', experience: '9 ans d\'expertise locale' },
        customerReview: { text: "Très réactifs ! Notre baignoire fuyait au travers du plafond. Ils ont localisé et réparé la fuite rapidement sans abîmer notre carrelage ancien.", author: "Élise C.", area: "Centre Historique", rating: 5 },
        recentIntervention: { title: "Rénovation de la tuyauterie en plomb", desc: "Remplacement complet de l\'arrivée d\'eau en plomb par du multicouche dans une bâtisse des années 1920." },
        neighbourhoods: ["Centre Historique", "Quartier Saint-Piat", "Froyennes", "Kain", "Gaurain"],
        servicePricing: [
          { service: 'Débouchage WC', price: 'Dès 75€' },
          { service: 'Remplacement robinetterie', price: 'Dès 90€' },
          { service: 'Recherche fuite encastrée', price: 'Dès 110€' }
        ]
      }),
      makeCommune('Mouscron', 'Hainaut', 'hainaut', { 
        population: '58 000', 
        landmarks: 'Château des Comtes, Parc communal, Hurlus, Grand-Place de Mouscron',
        description: 'Plombier Mouscron : dépannage rapide à la frontière française. Spécialiste du débouchage de WC et réparation de chaudière à Mouscron. Service de garde disponible 24h/24.'
      }),
      makeCommune('Binche', 'Hainaut', 'hainaut', { population: '33 000', landmarks: 'Carnaval de Binche (UNESCO), Remparts, Musée du Masque' }),
      makeCommune('Soignies', 'Hainaut', 'hainaut', { population: '28 000', landmarks: 'Collégiale Saint-Vincent, Carrières de Soignies' }),
      makeCommune('Ath', 'Hainaut', 'hainaut', { 
        population: '29 000', 
        landmarks: 'Ducasse d\'Ath (UNESCO), Tour Burbant, Dendre',
        title: 'Plombier Ath | Dépannage & Urgence 24h/24',
        h1: '<span class="text-accent">Plombier Ath</span> : Dépannage & Urgence',
        description: 'Vous cherchez un expert de confiance à Ath ? Notre équipe intervient rapidement pour tous vos travaux de plomberie et de chauffage. Que vous ayez besoin d\'un dépannage urgent, d\'une réparation de fuite d\'eau ou d\'un entretien de chaudière, nous vous garantissons un service professionnel, propre et au juste prix. Disponibilité totale 24h/24.'
      }),
      makeCommune('Enghien', 'Hainaut', 'hainaut', { population: '14 000', landmarks: 'Parc d\'Enghien, Château d\'Enghien, Centre historique' }),
      makeCommune('Braine-le-Comte', 'Hainaut', 'hainaut', { population: '22 000', landmarks: 'Église Saint-Géry, Aquascope Virelles (proximité)' }),
    ],
  },
  {
    name: 'Brabant Flamand',
    slug: 'brabant-flamand',
    icon: '🌿',
    communes: [
      makeCommune('Louvain', 'Brabant Flamand', 'brabant-flamand', { 
        population: '102 000', 
        landmarks: 'KU Leuven, Hôtel de Ville gothique, Grand Béguinage, Oude Markt',
        description: 'Plombier Louvain (Leuven) : Service de plomberie rapide pour étudiants et résidents. Débouchage, fuite et chauffage à Louvain. Intervention 24h/24, 7j/7.'
      }),
      makeCommune('Vilvorde', 'Brabant Flamand', 'brabant-flamand', { population: '45 000', landmarks: 'Drie Fonteinen, Canal de Willebroek, Centre-ville' }),
      makeCommune('Hal', 'Brabant Flamand', 'brabant-flamand', { population: '40 000', landmarks: 'Basilique Saint-Martin, Hallerbos (Bois de Hal)' }),
      makeCommune('Dilbeek', 'Brabant Flamand', 'brabant-flamand', { population: '43 000', landmarks: 'Château de Grand-Bigard, Pajottenland' }),
      makeCommune('Zaventem', 'Brabant Flamand', 'brabant-flamand', { population: '34 000', landmarks: 'Aéroport de Bruxelles-National, NATO HQ (proximité)' }),
      makeCommune('Tervuren', 'Brabant Flamand', 'brabant-flamand', { population: '22 000', landmarks: 'AfricaMuseum, Parc de Tervuren, Arboretum' }),
      makeCommune('Overijse', 'Brabant Flamand', 'brabant-flamand', { population: '26 000', landmarks: 'Région du raisin de table, Jezus-Eik, Forêt de Soignes' }),
      makeCommune('Hoeilaart', 'Brabant Flamand', 'brabant-flamand', { population: '11 000', landmarks: 'Serres royales (proximité), Forêt de Soignes' }),
      makeCommune('Beersel', 'Brabant Flamand', 'brabant-flamand', { population: '25 000', landmarks: 'Château de Beersel, Brasseries de lambic, Huizingen' }),
      makeCommune('Grimbergen', 'Brabant Flamand', 'brabant-flamand', { population: '39 000', landmarks: 'Abbaye de Grimbergen, Basilique Saint-Servais' }),
    ],
  },
];

// Flatten all communes
export function getAllCommunes(): Commune[] {
  return provinces.flatMap(p => p.communes);
}

// Get commune by slugs
export function getCommune(provinceSlug: string, communeSlug: string): Commune | undefined {
  const province = provinces.find(p => p.slug === provinceSlug);
  return province?.communes.find(c => c.slug === communeSlug);
}

// Get province by slug
export function getProvince(slug: string): Province | undefined {
  return provinces.find(p => p.slug === slug);
}
