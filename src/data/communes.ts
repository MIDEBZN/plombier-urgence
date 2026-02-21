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
}

export interface Province {
  name: string;
  slug: string;
  icon: string;
  communes: Commune[];
}

function makeCommune(name: string, province: string, provinceSlug: string, extras?: Partial<Commune>): Commune {
  return {
    name,
    slug: slugify(name),
    province,
    provinceSlug,
    description: `Votre plombier de confiance à ${name}. Intervention rapide en 30 minutes, 24h/24 et 7j/7. Débouchage, recherche de fuite, dépannage chaudière et rénovation salle de bain.`,
    services: [
      'Débouchage de canalisations',
      'Recherche et réparation de fuites',
      'Dépannage et entretien chaudière',
      'Réparation robinetterie et sanitaires',
      'Rénovation salle de bain',
      'Urgence plomberie',
    ],
    landmarks: `${name} et ses environs`,
    ...extras,
  };
}

export const provinces: Province[] = [
  {
    name: 'Bruxelles-Capitale',
    slug: 'bruxelles-capitale',
    icon: '🏛️',
    communes: [
      makeCommune('Bruxelles', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '185 000', landmarks: 'Grand-Place, Manneken Pis, Quartier Européen' }),
      makeCommune('Ixelles', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '87 000', landmarks: 'Place Flagey, Étangs d\'Ixelles, Université Libre de Bruxelles' }),
      makeCommune('Uccle', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '83 000', landmarks: 'Forêt de Soignes, Observatoire Royal, Parc de Wolvendael' }),
      makeCommune('Schaerbeek', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '133 000', landmarks: 'Parc Josaphat, Gare de Schaerbeek, Maison Autrique' }),
      makeCommune('Etterbeek', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '48 000', landmarks: 'Parc du Cinquantenaire, Quartier des Casernes' }),
      makeCommune('Woluwe-Saint-Lambert', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '56 000', landmarks: 'Roodebeek, Shopping Center Woluwe, Parc de Woluwe' }),
      makeCommune('Woluwe-Saint-Pierre', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '42 000', landmarks: 'Parc de Woluwe, Stockel, Bibliotheca Wittockiana' }),
      makeCommune('Auderghem', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '34 000', landmarks: 'Rouge-Cloître, Forêt de Soignes, Prieuré de Val Duchesse' }),
      makeCommune('Forest', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '56 000', landmarks: 'Parc de Forest, Abbaye de Forest, Forest National' }),
      makeCommune('Saint-Gilles', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '50 000', landmarks: 'Parvis de Saint-Gilles, Hôtel de Ville, Barrière de Saint-Gilles' }),
      makeCommune('Anderlecht', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '120 000', landmarks: 'Stade Constant Vanden Stock, Maison d\'Érasme, Parc Astrid' }),
      makeCommune('Molenbeek', 'Bruxelles-Capitale', 'bruxelles-capitale', { population: '97 000', landmarks: 'Parc des Muses, Canal de Bruxelles, Tour & Taxis' }),
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
      makeCommune('Waterloo', 'Brabant Wallon', 'brabant-wallon', { population: '30 000', landmarks: 'Butte du Lion, Mémorial de la Bataille de Waterloo' }),
      makeCommune('Wavre', 'Brabant Wallon', 'brabant-wallon', { population: '35 000', landmarks: 'Walibi Belgium, Hôtel de Ville, Maca' }),
      makeCommune('Nivelles', 'Brabant Wallon', 'brabant-wallon', { population: '28 000', landmarks: 'Collégiale Sainte-Gertrude, Grand-Place de Nivelles' }),
      makeCommune('Ottignies-Louvain-la-Neuve', 'Brabant Wallon', 'brabant-wallon', { population: '32 000', landmarks: 'UCLouvain, Aula Magna, Musée Hergé' }),
      makeCommune('Braine-l\'Alleud', 'Brabant Wallon', 'brabant-wallon', { population: '40 000', landmarks: 'Butte du Lion (proximité), Bois de la Houssière' }),
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
      makeCommune('Liège', 'Province de Liège', 'province-de-liege', { population: '197 000', landmarks: 'Gare de Liège-Guillemins, Montagne de Bueren, Cathédrale Saint-Paul' }),
      makeCommune('Seraing', 'Province de Liège', 'province-de-liege', { population: '64 000', landmarks: 'Val Saint-Lambert, Château de Seraing' }),
      makeCommune('Herstal', 'Province de Liège', 'province-de-liege', { population: '40 000', landmarks: 'FN Herstal, Préhistomuseum' }),
      makeCommune('Verviers', 'Province de Liège', 'province-de-liege', { population: '56 000', landmarks: 'Grand Théâtre, Musée des Beaux-Arts et de la Céramique' }),
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
      makeCommune('Namur', 'Province de Namur', 'province-de-namur', { population: '112 000', landmarks: 'Citadelle de Namur, Confluent Sambre-Meuse, Parlement Wallon' }),
      makeCommune('Dinant', 'Province de Namur', 'province-de-namur', { population: '14 000', landmarks: 'Citadelle de Dinant, Collégiale Notre-Dame, Adolphe Sax' }),
      makeCommune('Sambreville', 'Province de Namur', 'province-de-namur', { population: '28 000', landmarks: 'Abbaye d\'Aulne, Sambre' }),
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
      makeCommune('Charleroi', 'Hainaut', 'hainaut', { population: '202 000', landmarks: 'Musée de la Photographie, Bois du Cazier, Rive Gauche' }),
      makeCommune('Mons', 'Hainaut', 'hainaut', { population: '95 000', landmarks: 'Beffroi de Mons, Grand-Place, Doudou, Mundaneum' }),
      makeCommune('La Louvière', 'Hainaut', 'hainaut', { population: '80 000', landmarks: 'Ascenseurs du Canal du Centre, Musée Ianchelevici' }),
      makeCommune('Tournai', 'Hainaut', 'hainaut', { population: '69 000', landmarks: 'Cathédrale Notre-Dame, Beffroi, Grand-Place, Escaut' }),
      makeCommune('Mouscron', 'Hainaut', 'hainaut', { population: '58 000', landmarks: 'Château des Comtes, Parc communal, Hurlus' }),
      makeCommune('Binche', 'Hainaut', 'hainaut', { population: '33 000', landmarks: 'Carnaval de Binche (UNESCO), Remparts, Musée du Masque' }),
      makeCommune('Soignies', 'Hainaut', 'hainaut', { population: '28 000', landmarks: 'Collégiale Saint-Vincent, Carrières de Soignies' }),
      makeCommune('Ath', 'Hainaut', 'hainaut', { population: '29 000', landmarks: 'Ducasse d\'Ath (UNESCO), Tour Burbant, Dendre' }),
      makeCommune('Enghien', 'Hainaut', 'hainaut', { population: '14 000', landmarks: 'Parc d\'Enghien, Château d\'Enghien, Centre historique' }),
      makeCommune('Braine-le-Comte', 'Hainaut', 'hainaut', { population: '22 000', landmarks: 'Église Saint-Géry, Aquascope Virelles (proximité)' }),
    ],
  },
  {
    name: 'Brabant Flamand',
    slug: 'brabant-flamand',
    icon: '🌿',
    communes: [
      makeCommune('Louvain', 'Brabant Flamand', 'brabant-flamand', { population: '102 000', landmarks: 'KU Leuven, Hôtel de Ville gothique, Grand Béguinage' }),
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
