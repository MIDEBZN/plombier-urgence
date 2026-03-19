export interface LocationPage {
    slug: string;
    city: string;
    province: string;
    metaTitle: string;
    metaDescription: string;
    population: string;
    postalCodes: string;
    responseTime: string;
    // Neighborhoods
    neighborhoods: { name: string; responseTime: string; highlight: string }[];
    // Driving directions
    directions: { from: string; duration: string; route: string }[];
    // Weather challenges
    weatherChallenges: { season: string; icon: string; challenge: string; service: string }[];
    // Major employers
    employers: { name: string; type: string }[];
    // Local specifics
    localContent: { title: string; text: string }[];
    // Competitor comparison
    competitors: { feature: string; us: string; others: string }[];
    // FAQs
    faqs: { q: string; a: string }[];
}

export const locationPages: LocationPage[] = [
    // ─── BRUXELLES ─────────────────────────────
    {
        slug: 'bruxelles',
        city: 'Bruxelles',
        province: 'Bruxelles-Capitale',
        population: '1 200 000 (Région)',
        postalCodes: '1000 à 1210',
        responseTime: '20 min',
        metaTitle: 'Plombier Bruxelles — Urgence 24/7 | Tarif 2025 dès 60€ | 30 min',
        metaDescription: 'Plombier à Bruxelles : intervention en 20 min dans les 19 communes. Urgence 24/7, tarifs clairs 2025 dès 60€. Débouchage, fuite, chaudière. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Bruxelles-Ville (Centre)', responseTime: '15 min', highlight: 'Immeubles anciens : tuyauterie en plomb, canalisations étroites nécessitant un savoir-faire spécifique' },
            { name: 'Ixelles & Saint-Gilles', responseTime: '18 min', highlight: 'Maisons de maître avec plomberie centenaire. Problèmes fréquents de pression d\'eau et fuites dans les murs' },
            { name: 'Uccle & Forest', responseTime: '22 min', highlight: 'Zone résidentielle avec grandes propriétés. Chauffe-eau vieillissants et rénovations de salle de bain fréquentes' },
            { name: 'Schaerbeek & Evere', responseTime: '20 min', highlight: 'Quartiers mixtes : immeubles à appartements et maisons unifamiliales. Débouchages fréquents dans les anciennes canalisations' },
            { name: 'Woluwe & Auderghem', responseTime: '22 min', highlight: 'Zone résidentielle aisée. Demandes fréquentes de rénovation haut de gamme et d\'entretien préventif' },
            { name: 'Anderlecht & Molenbeek', responseTime: '18 min', highlight: 'Quartiers denses avec plomberie ancienne. Urgences débouchage et fuite les plus fréquentes de la région' },
            { name: 'Etterbeek & Quartier Européen', responseTime: '15 min', highlight: 'Zone internationale avec logements modernes et anciens. Interventions multilingues (FR/NL/EN)' },
            { name: 'Jette, Ganshoren & Koekelberg', responseTime: '22 min', highlight: 'Quartiers résidentiels calmes. Problèmes fréquents de chaudière en hiver et d\'humidité' },
        ],
        directions: [
            { from: 'Grand-Place', duration: '10 min', route: 'Via Boulevard Anspach et Rue de la Loi. Notre dépôt central est à Bruxelles-Ville.' },
            { from: 'Gare du Midi', duration: '12 min', route: 'Via Avenue Fonsny et Boulevard du Midi. Accès rapide depuis Saint-Gilles et Forest.' },
            { from: 'Quartier Européen', duration: '8 min', route: 'Via Rue de la Loi et Rond-point Schuman. Intervention rapide pour bureaux et résidences.' },
            { from: 'Woluwe Shopping Center', duration: '18 min', route: 'Via Boulevard de la Woluwe et E40. Dessert tout l\'est de Bruxelles.' },
            { from: 'Basilique de Koekelberg', duration: '15 min', route: 'Via Boulevard Léopold II. Couvre Jette, Ganshoren et Berchem-Sainte-Agathe.' },
        ],
        weatherChallenges: [
            { season: 'Hiver (Nov–Mars)', icon: '❄️', challenge: 'Gel des canalisations exposées, pannes de chaudière, radiateurs froids', service: 'Dégel de tuyaux, dépannage chaudière urgent, purge de radiateurs' },
            { season: 'Printemps (Avr–Mai)', icon: '🌧️', challenge: 'Fortes pluies : infiltrations, cave inondée, remontées d\'égout', service: 'Pompage, débouchage égout, étanchéité cave' },
            { season: 'Été (Juin–Août)', icon: '☀️', challenge: 'Sécheresse : mouvements de sol, tuyaux qui se décalent, fuites lentes', service: 'Détection et réparation de fuites, inspection caméra' },
            { season: 'Automne (Sept–Oct)', icon: '🍂', challenge: 'Feuilles mortes bouchant les gouttières et évacuations extérieures', service: 'Débouchage gouttières et regards, entretien préventif chaudière' },
        ],
        employers: [
            { name: 'Commission Européenne & Parlement', type: 'Institutions' },
            { name: 'OTAN (Evere)', type: 'Organisation internationale' },
            { name: 'Hôpitaux (Saint-Luc, Erasme, Brugmann)', type: 'Santé' },
            { name: 'Proximus, Bpost, SNCB', type: 'Entreprises publiques' },
            { name: 'Universités (ULB, VUB, UCLouvain Saint-Louis)', type: 'Enseignement' },
            { name: 'Centres commerciaux (City2, Docks, Woluwe)', type: 'Commerce' },
        ],
        localContent: [
            { title: 'Plomberie dans les maisons bruxelloises', text: 'Bruxelles possède un parc immobilier unique : maisons de maître du XIXe siècle, immeubles art nouveau, et constructions modernes mélangés. Chaque type nécessite une expertise différente. Nos plombiers connaissent les spécificités de chaque quartier et époque de construction.' },
            { title: 'Réglementations bruxelloises', text: 'À Bruxelles, l\'entretien de chaudière gaz est obligatoire tous les 2 ans (Arrêté du Gouvernement de la Région de Bruxelles-Capitale). Nous fournissons l\'attestation officielle conforme à la législation de Bruxelles Environnement (IBGE).' },
            { title: 'Problèmes d\'eau dure à Bruxelles', text: 'L\'eau à Bruxelles est moyennement dure (25-30°f). Cela provoque un entartrage progressif des chauffe-eau, robinets et canalisations. Un détartrage régulier prolonge la durée de vie de vos installations de 5 à 10 ans.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '20 min (19 communes)', others: '1 à 3 heures' },
            { feature: 'Prix affichés en ligne', us: '✅ Tous les tarifs publiés', others: '❌ "Devis sur place" uniquement' },
            { feature: 'WhatsApp (envoi photo)', us: '✅ Diagnostic par photo', others: '❌ Téléphone uniquement' },
            { feature: 'Inspection caméra', us: '✅ Incluse dans le prix', others: '❌ 100-200€ en supplément' },
            { feature: 'Avis Google', us: '⭐ 4.9/5 (500+ avis)', others: '⭐ 3.5-4.2/5 (10-50 avis)' },
            { feature: 'Paiement Bancontact', us: '✅ Bancontact, virement, cash', others: '❌ Cash uniquement souvent' },
            { feature: 'Garantie travaux', us: '✅ 2 ans pièces et MO', others: '❌ 3-6 mois maximum' },
        ],
        faqs: [
            { q: 'Quel est le meilleur plombier à Bruxelles ?', a: 'Plombier Urgence est noté 4.9/5 sur Google avec plus de 500 avis vérifiés. Nous sommes le seul plombier bruxellois à afficher tous nos tarifs en ligne.' },
            { q: 'Combien coûte un plombier à Bruxelles ?', a: 'Nos tarifs démarrent à 60€ pour un débouchage simple. Réparation de fuite dès 95€. Remplacement robinet dès 60€. Tous les prix sont fixes et communiqués AVANT intervention.' },
            { q: 'Intervenez-vous dans toutes les communes de Bruxelles ?', a: 'Oui, nous couvrons les 19 communes de la Région de Bruxelles-Capitale : Bruxelles-Ville, Ixelles, Uccle, Schaerbeek, Etterbeek, Woluwe, Anderlecht, Forest, Saint-Gilles, Molenbeek, Jette, et toutes les autres.' },
            { q: 'Quel est votre délai d\'intervention à Bruxelles ?', a: 'Notre temps de réponse moyen est de 20 minutes dans les 19 communes. En centre-ville (Bruxelles, Ixelles, Etterbeek), nous arrivons souvent en 15 minutes.' },
        ],
    },

    // ─── LIÈGE ─────────────────────────────────
    {
        slug: 'liege',
        city: 'Liège',
        province: 'Province de Liège',
        population: '197 000',
        postalCodes: '4000 à 4032',
        responseTime: '25 min',
        metaTitle: 'Plombier Liège — Urgence 24/7 | Tarif 2025 dès 60€ | Intervention 25 min',
        metaDescription: 'Plombier à Liège : intervention en 25 min. Urgence 24/7, tarifs clairs 2025. Débouchage, fuite, chaudière. Seraing, Herstal, Verviers aussi couverts. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Centre-ville & Outremeuse', responseTime: '20 min', highlight: 'Quartier historique avec immeubles anciens en bord de Meuse. Problèmes fréquents d\'humidité et de canalisations vétustes' },
            { name: 'Guillemins & Laveu', responseTime: '22 min', highlight: 'Quartier rénové autour de la gare Calatrava. Mix d\'ancien et de neuf, fuites dans les rénovations récentes' },
            { name: 'Saint-Laurent & Sainte-Walburge', responseTime: '25 min', highlight: 'Quartiers en hauteur : pression d\'eau souvent insuffisante, chaudières sollicitées en hiver' },
            { name: 'Angleur & Chênée', responseTime: '28 min', highlight: 'Zone le long de l\'Ourthe. Risques d\'inondation lors de crues, caves humides' },
            { name: 'Seraing', responseTime: '30 min', highlight: 'Anciennes cités ouvrières avec plomberie des années 60-70 à rénover entièrement' },
            { name: 'Herstal', responseTime: '28 min', highlight: 'Zone mixte industrielle et résidentielle. Canalisations anciennes et entretien chaudières' },
        ],
        directions: [
            { from: 'Gare des Guillemins', duration: '15 min', route: 'Via Rue des Guillemins et Boulevard d\'Avroy. Accès direct au centre.' },
            { from: 'CHU de Liège (Sart-Tilman)', duration: '20 min', route: 'Via E25 direction centre-ville. Couvre aussi Angleur et Chênée.' },
            { from: 'Médiacité', duration: '12 min', route: 'Via Boulevard de la Sauvenière. Dessert tout le centre et Outremeuse.' },
            { from: 'Seraing (Val Saint-Lambert)', duration: '25 min', route: 'Via N90 le long de la Meuse. Intervention rapide sur toute la vallée.' },
        ],
        weatherChallenges: [
            { season: 'Hiver', icon: '❄️', challenge: 'Gel intense (-10°C possible) : tuyaux gelés, pannes chaudière mazout fréquentes', service: 'Dégel express, dépannage chaudière gaz et mazout' },
            { season: 'Printemps', icon: '🌧️', challenge: 'Crues de la Meuse et de l\'Ourthe : inondations (cf. 2021)', service: 'Pompage urgence, assèchement, réparation post-inondation' },
            { season: 'Été', icon: '☀️', challenge: 'Orages violents : infiltrations, gouttières débordantes', service: 'Étanchéité, débouchage gouttières, réparation fuites' },
            { season: 'Automne', icon: '🍂', challenge: 'Pluies continues : humidité dans les caves, moisissures', service: 'Drainage, traitement humidité, entretien préventif' },
        ],
        employers: [
            { name: 'CHU de Liège (Sart-Tilman)', type: 'Hôpital' },
            { name: 'Université de Liège (ULiège)', type: 'Enseignement' },
            { name: 'FN Herstal', type: 'Industrie' },
            { name: 'Liège Airport (cargo)', type: 'Transport' },
            { name: 'Arcelor Mittal', type: 'Industrie' },
        ],
        localContent: [
            { title: 'Plomberie à Liège : le défi de l\'ancien', text: 'Liège possède l\'un des parcs immobiliers les plus anciens de Belgique. De nombreuses maisons datent du XVIIIe et XIXe siècle avec des canalisations en plomb ou en fonte. Nos plombiers sont spécialisés dans la rénovation de ces installations anciennes.' },
            { title: 'Après les inondations de 2021', text: 'Les inondations de juillet 2021 ont durement touché la région liégeoise. Depuis, de nombreuses installations ont été rénovées, mais des dégâts cachés subsistent. Nous proposons des inspections préventives pour détecter les problèmes avant qu\'ils ne s\'aggravent.' },
            { title: 'Chaudières au mazout : une spécialité liégeoise', text: 'La province de Liège compte encore de nombreuses chaudières au mazout (non raccordées au gaz de ville). Nos chauffagistes sont agréés Cedicol pour l\'entretien et le dépannage mazout — obligatoire chaque année en Wallonie.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '25 min (Liège + couronne)', others: '1 à 4 heures' },
            { feature: 'Prix affichés en ligne', us: '✅ Tous les tarifs publiés', others: '❌ Tarifs cachés' },
            { feature: 'Chaudière mazout', us: '✅ Agréés Cedicol', others: '❌ Souvent gaz uniquement' },
            { feature: 'WhatsApp', us: '✅ Diagnostic photo', others: '❌ Non disponible' },
            { feature: 'Avis Google', us: '⭐ 4.9/5', others: '⭐ 3.2-4.0/5' },
            { feature: 'Garantie', us: '✅ 2 ans', others: '❌ Aucune écrite' },
        ],
        faqs: [
            { q: 'Quel est votre délai d\'intervention à Liège ?', a: 'Nous arrivons en moyenne en 25 minutes dans la ville de Liège et 30 minutes dans la couronne (Seraing, Herstal, Chênée, Angleur).' },
            { q: 'Intervenez-vous à Verviers ?', a: 'Oui, nous couvrons Verviers, Spa, et toute la province de Liège. Le délai d\'intervention à Verviers est d\'environ 40 minutes.' },
            { q: 'Faites-vous l\'entretien de chaudière au mazout ?', a: 'Oui, nos chauffagistes sont agréés Cedicol pour les chaudières mazout. Entretien annuel obligatoire en Wallonie à partir de 100€, attestation incluse.' },
        ],
    },

    // ─── NAMUR ─────────────────────────────────
    {
        slug: 'namur',
        city: 'Namur',
        province: 'Province de Namur',
        population: '112 000',
        postalCodes: '5000 à 5100',
        responseTime: '25 min',
        metaTitle: 'Plombier Namur — Urgence 24/7 | Tarif 2025 dès 60€ | 25 min',
        metaDescription: 'Plombier à Namur : intervention en 25 min. Tarifs clairs 2025. Débouchage, fuite, chaudière. Capitale wallonne et province. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Centre-ville & Corbeille', responseTime: '20 min', highlight: 'Cœur historique au confluent Sambre-Meuse. Immeubles anciens avec plomberie du XIXe siècle' },
            { name: 'Jambes & Erpent', responseTime: '22 min', highlight: 'Rive droite de la Meuse. Quartiers résidentiels avec maisons des années 50-70' },
            { name: 'Salzinnes & Saint-Servais', responseTime: '25 min', highlight: 'Quartiers mixtes proches du centre. Problèmes fréquents de canalisations anciennes' },
            { name: 'Wépion & Lives-sur-Meuse', responseTime: '28 min', highlight: 'Zone résidentielle le long de la Meuse. Risques d\'inondation et de remontées d\'eau' },
            { name: 'Belgrade & Temploux', responseTime: '30 min', highlight: 'Périphérie sud avec maisons individuelles. Fosses septiques et assainissement autonome' },
        ],
        directions: [
            { from: 'Citadelle de Namur', duration: '10 min', route: 'Descente vers le centre-ville via la Route Merveilleuse.' },
            { from: 'Gare de Namur', duration: '8 min', route: 'Via Place de la Station et Boulevard Ernest Mélot.' },
            { from: 'Parlement Wallon', duration: '5 min', route: 'En plein centre-ville, intervention quasi-immédiate.' },
        ],
        weatherChallenges: [
            { season: 'Hiver', icon: '❄️', challenge: 'Gel modéré : tuyaux extérieurs exposés, pannes de chaudière', service: 'Dégel, dépannage chaudière, installation antigel' },
            { season: 'Printemps', icon: '🌧️', challenge: 'Crues Sambre-Meuse : caves inondées dans les quartiers bas', service: 'Pompage, étanchéité, clapets anti-retour' },
            { season: 'Été', icon: '☀️', challenge: 'Sécheresse : mouvements de terrain, tuyaux qui bougent', service: 'Détection fuite, réparation joints, inspection caméra' },
            { season: 'Automne', icon: '🍂', challenge: 'Pluies : saturation des fosses septiques en zone rurale', service: 'Vidange fosse, débouchage, entretien préventif' },
        ],
        employers: [
            { name: 'Parlement de Wallonie', type: 'Institution' },
            { name: 'SPW (Service Public de Wallonie)', type: 'Administration' },
            { name: 'CHR Namur (Hôpital)', type: 'Santé' },
            { name: 'Université de Namur', type: 'Enseignement' },
            { name: 'BEP (Bureau Économique Province)', type: 'Développement' },
        ],
        localContent: [
            { title: 'Namur : capitale wallonne et plomberie historique', text: 'Namur est la capitale de la Wallonie avec un centre historique au confluent de la Sambre et de la Meuse. Les immeubles anciens présentent des défis uniques : tuyauterie en plomb, siphons désuets et canalisations étroites nécessitant un savoir-faire adapté.' },
            { title: 'Fosses septiques en province de Namur', text: 'De nombreuses habitations en province de Namur ne sont pas raccordées au tout-à-l\'égout et disposent de fosses septiques. Nous assurons le débouchage, l\'inspection et l\'entretien de ces installations. Vidange recommandée tous les 4 ans.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '25 min', others: '1 à 3 heures' },
            { feature: 'Prix en ligne', us: '✅ Tarifs publiés', others: '❌ Sur devis uniquement' },
            { feature: 'Fosse septique', us: '✅ Expertise complète', others: '❌ Pas toujours couvert' },
            { feature: 'WhatsApp', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Avis Google', us: '⭐ 4.9/5', others: '⭐ 3.5-4.0/5' },
        ],
        faqs: [
            { q: 'Intervenez-vous dans toute la province de Namur ?', a: 'Oui : Namur, Dinant, Gembloux, Andenne, Ciney, Sambreville et toutes les communes de la province.' },
            { q: 'Combien de temps pour venir à Namur ?', a: 'Notre temps de réponse moyen est de 25 min dans Namur-ville, 30-40 min dans le reste de la province.' },
        ],
    },

    // ─── CHARLEROI ─────────────────────────────
    {
        slug: 'charleroi',
        city: 'Charleroi',
        province: 'Hainaut',
        population: '202 000',
        postalCodes: '6000 à 6200',
        responseTime: '25 min',
        metaTitle: 'Plombier Charleroi — Urgence 24/7 | Tarif 2025 dès 60€ | 25 min',
        metaDescription: 'Plombier à Charleroi : intervention en 25 min. Urgence 24/7, tarifs clairs 2025. Débouchage, fuite, chaudière. Toute la région couverte. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Centre-ville & Ville Basse', responseTime: '20 min', highlight: 'Zone urbanisée dense en pleine rénovation. Immeubles des années 50-70 avec plomberie à moderniser' },
            { name: 'Marcinelle & Mont-sur-Marchienne', responseTime: '22 min', highlight: 'Quartiers résidentiels au sud. Maisons individuelles avec chaudières mazout' },
            { name: 'Gilly & Châtelet', responseTime: '25 min', highlight: 'Zone est de Charleroi. Anciennes cités ouvrières avec canalisations en fonte' },
            { name: 'Gosselies & Jumet', responseTime: '25 min', highlight: 'Zone nord proche de l\'aéroport. Quartiers mixtes résidentiel et commercial' },
            { name: 'Marchienne & Monceau', responseTime: '28 min', highlight: 'Bord de Sambre. Problèmes d\'humidité, risques d\'inondation' },
        ],
        directions: [
            { from: 'Rive Gauche (centre commercial)', duration: '10 min', route: 'Via Boulevard Joseph Tirou et Ring de Charleroi.' },
            { from: 'Aéroport de Charleroi (Gosselies)', duration: '20 min', route: 'Via R3 et N5. Dessert tout le nord de l\'agglomération.' },
            { from: 'Bois du Cazier', duration: '18 min', route: 'Via N579 depuis Marcinelle. Couvre tout le sud de Charleroi.' },
        ],
        weatherChallenges: [
            { season: 'Hiver', icon: '❄️', challenge: 'Gel : Charleroi plus froid que Bruxelles de 2-3°C. Tuyaux gelés fréquents', service: 'Dégel, isolation tuyaux, dépannage chaudière' },
            { season: 'Printemps', icon: '🌧️', challenge: 'Crues de la Sambre : zones basses inondables', service: 'Pompage, clapets anti-retour, réparation post-crue' },
            { season: 'Été', icon: '☀️', challenge: 'Canicule : surconsommation d\'eau, chauffe-eau sous pression', service: 'Réparation chauffe-eau, détartrage, groupe de sécurité' },
            { season: 'Automne', icon: '🍂', challenge: 'Pluies : gouttières bouchées, infiltrations toitures', service: 'Débouchage, étanchéité, raccordements' },
        ],
        employers: [
            { name: 'BSCA (Aéroport de Charleroi)', type: 'Transport' },
            { name: 'GHdC (Grand Hôpital de Charleroi)', type: 'Santé' },
            { name: 'Université ouverte (UCharleroi)', type: 'Enseignement' },
            { name: 'Caterpillar/NLMK', type: 'Industrie' },
            { name: 'Rive Gauche Shopping Center', type: 'Commerce' },
        ],
        localContent: [
            { title: 'Charleroi en rénovation', text: 'Charleroi est en pleine transformation urbaine. De nombreux bâtiments sont rénovés, ce qui nécessite souvent une mise aux normes complète de la plomberie. Nous accompagnons propriétaires et promoteurs dans ces chantiers.' },
            { title: 'Chauffage au mazout dans le Hainaut', text: 'Le Hainaut est la province belge avec le plus grand nombre de chaudières au mazout. Entretien annuel obligatoire de 100€ à 180€, attestation Cedicol incluse.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '25 min', others: '2 à 4 heures' },
            { feature: 'Prix affichés', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Mazout + gaz', us: '✅ Les deux', others: '❌ Souvent un seul' },
            { feature: 'WhatsApp', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Avis Google', us: '⭐ 4.9/5', others: '⭐ 3.0-3.8/5' },
        ],
        faqs: [
            { q: 'Couvrez-vous toute la région de Charleroi ?', a: 'Oui : Charleroi et les 15 sections (Marcinelle, Gilly, Gosselies, Jumet, Couillet, etc.) + Châtelet, Fleurus, Fontaine-l\'Évêque.' },
            { q: 'Combien coûte un plombier à Charleroi ?', a: 'Nos tarifs sont les mêmes dans toute la Belgique : débouchage dès 60€, fuite dès 95€, chauffe-eau dès 150€. Prix fixe avant intervention.' },
        ],
    },

    // ─── MONS ──────────────────────────────────
    {
        slug: 'mons',
        city: 'Mons',
        province: 'Hainaut',
        population: '95 000',
        postalCodes: '7000 à 7034',
        responseTime: '30 min',
        metaTitle: 'Plombier Mons — Urgence 24/7 | Tarif 2025 dès 60€ | 30 min',
        metaDescription: 'Plombier à Mons : intervention en 30 min. Tarifs clairs 2025. Débouchage, fuite, chaudière. Mons et arrondissement. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Centre-ville & Grand-Place', responseTime: '25 min', highlight: 'Centre historique avec le Beffroi UNESCO. Immeubles anciens, plomberie à rénover' },
            { name: 'Jemappes & Flénu', responseTime: '28 min', highlight: 'Quartiers ouest. Anciennes maisons ouvrières avec canalisations en fonte' },
            { name: 'Cuesmes & Hyon', responseTime: '30 min', highlight: 'Quartiers résidentiels sud. Maisons individuelles avec fosses septiques' },
            { name: 'Ghlin & Nimy', responseTime: '30 min', highlight: 'Zone nord le long du Canal. Problèmes d\'humidité et de drainage' },
        ],
        directions: [
            { from: 'Grand-Place de Mons', duration: '10 min', route: 'Centre-ville, accès direct depuis la Grand-Place et le Beffroi.' },
            { from: 'Gare de Mons', duration: '12 min', route: 'Via Boulevard Charles Quint et Avenue Reine Astrid.' },
            { from: 'SHAPE (Casteau)', duration: '20 min', route: 'Via E42/A7, dessert toute la périphérie nord de Mons.' },
        ],
        weatherChallenges: [
            { season: 'Hiver', icon: '❄️', challenge: 'Gel : zone plus froide que Bruxelles, pannes chaudière fréquentes', service: 'Dépannage chaudière urgent, dégel tuyaux' },
            { season: 'Printemps', icon: '🌧️', challenge: 'Fortes pluies : saturation des canalisations', service: 'Débouchage, pompage, inspection caméra' },
            { season: 'Été', icon: '☀️', challenge: 'Sécheresse : fissures dans les sols argileux, tuyaux qui bougent', service: 'Détection fuite, réparation joints' },
            { season: 'Automne', icon: '🍂', challenge: 'Humidité : caves humides, moisissures', service: 'Drainage, ventilation, traitement humidité' },
        ],
        employers: [
            { name: 'SHAPE / OTAN (Casteau)', type: 'Défense' },
            { name: 'UMons (Université de Mons)', type: 'Enseignement' },
            { name: 'CHU Ambroise Paré', type: 'Santé' },
            { name: 'Google (Data Center Saint-Ghislain)', type: 'Tech' },
        ],
        localContent: [
            { title: 'Mons : patrimoine et plomberie', text: 'Mons possède un riche patrimoine (Beffroi UNESCO, Mundaneum) et de nombreuses maisons anciennes du centre nécessitant des interventions de plomberie adaptées aux constructions historiques.' },
            { title: 'Base OTAN de Casteau', text: 'Le SHAPE emploie des milliers de personnes internationales vivant à Mons et dans les communes environnantes. Nous offrons un service multilingue (FR/EN/NL) pour cette communauté.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '30 min', others: '2 à 5 heures' },
            { feature: 'Prix en ligne', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Service multilingue', us: '✅ FR/EN/NL', others: '❌ FR uniquement' },
            { feature: 'WhatsApp', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Avis Google', us: '⭐ 4.9/5', others: '⭐ 3.0-4.0/5' },
        ],
        faqs: [
            { q: 'Intervenez-vous dans tout l\'arrondissement de Mons ?', a: 'Oui : Mons et toutes les sections (Jemappes, Cuesmes, Ghlin, Nimy, Hyon), plus La Louvière, Saint-Ghislain, Boussu et Quaregnon.' },
            { q: 'Parlez-vous anglais pour la communauté OTAN ?', a: 'Oui, nos plombiers parlent français, néerlandais et anglais. Service adapté pour la communauté internationale de SHAPE.' },
        ],
    },

    // ─── WATERLOO ──────────────────────────────
    {
        slug: 'waterloo',
        city: 'Waterloo',
        province: 'Brabant Wallon',
        population: '30 000',
        postalCodes: '1410',
        responseTime: '25 min',
        metaTitle: 'Plombier Waterloo — Urgence 24/7 | Tarif 2025 | Intervention 25 min',
        metaDescription: 'Plombier à Waterloo et Brabant Wallon : intervention en 25 min. Tarif 2025. Débouchage, fuite, chaudière, rénovation SDB. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Centre de Waterloo', responseTime: '22 min', highlight: 'Quartier aisé avec grandes villas. Rénovations haut de gamme et entretien préventif' },
            { name: 'Chenois', responseTime: '25 min', highlight: 'Zone résidentielle calme. Maisons individuelles avec jardins, fosses septiques' },
            { name: 'Braine-l\'Alleud', responseTime: '25 min', highlight: 'Commune voisine en plein développement, nombreuses nouvelles constructions' },
            { name: 'La Hulpe & Rixensart', responseTime: '30 min', highlight: 'Zone verte proche de la Forêt de Soignes. Propriétés haut de gamme' },
        ],
        directions: [
            { from: 'Butte du Lion', duration: '10 min', route: 'Via Chaussée de Bruxelles. Centre de Waterloo facilement accessible.' },
            { from: 'Carrefour de la Drève', duration: '8 min', route: 'Intersection principale de Waterloo, accès à tous les quartiers.' },
            { from: 'Wavre (centre)', duration: '15 min', route: 'Via N275. Dessert aussi Ottignies et Louvain-la-Neuve.' },
        ],
        weatherChallenges: [
            { season: 'Hiver', icon: '❄️', challenge: 'Zone plus froide que Bruxelles de 1-2°C : gel de tuyaux extérieurs', service: 'Dégel, protection antigel, dépannage chaudière' },
            { season: 'Printemps', icon: '🌧️', challenge: 'Forte pluviométrie : drainage insuffisant dans les grandes propriétés', service: 'Installation drainage, pompage, clapets anti-retour' },
            { season: 'Été', icon: '☀️', challenge: 'Arrosage massif : pression d\'eau insuffisante en période de pointe', service: 'Optimisation réseau, surpresseur, détection fuite' },
            { season: 'Automne', icon: '🍂', challenge: 'Feuilles dans les gouttières des grandes propriétés', service: 'Débouchage gouttières, entretien préventif' },
        ],
        employers: [
            { name: 'GlaxoSmithKline (Wavre)', type: 'Pharma' },
            { name: 'UCLouvain (Louvain-la-Neuve)', type: 'Enseignement' },
            { name: 'Headquarters internationaux (La Hulpe)', type: 'Finance' },
            { name: 'Carrefour Belgium (Braine-l\'Alleud)', type: 'Grande distribution' },
        ],
        localContent: [
            { title: 'Waterloo : quartier premium, service premium', text: 'Waterloo est l\'une des communes les plus huppées de Belgique. Les propriétés y sont grandes, souvent avec piscine et systèmes de plomberie complexes. Nos plombiers sont habitués aux installations haut de gamme et aux marques premium (Dornbracht, Hansgrohe Axor, Duravit).' },
            { title: 'Brabant Wallon : TVA 6% sur la rénovation', text: 'La majorité des habitations en Brabant Wallon ont plus de 10 ans, ce qui vous permet de bénéficier du taux réduit de TVA à 6% sur les travaux de rénovation (au lieu de 21%). Nous gérons l\'attestation TVA pour vous.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '25 min', others: '1 à 3 heures' },
            { feature: 'Marques premium', us: '✅ Dornbracht, Hansgrohe, Duravit', others: '❌ Marques basiques' },
            { feature: 'Rénovation haut de gamme', us: '✅ Avec plan 3D', others: '❌ Standard' },
            { feature: 'WhatsApp', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Avis Google', us: '⭐ 4.9/5', others: '⭐ 3.5-4.0/5' },
        ],
        faqs: [
            { q: 'Couvrez-vous tout le Brabant Wallon ?', a: 'Oui : Waterloo, Braine-l\'Alleud, Wavre, La Hulpe, Rixensart, Ottignies-LLN, Nivelles, Genappe, Tubize et toutes les communes.' },
            { q: 'Travaillez-vous avec des matériaux haut de gamme ?', a: 'Oui, nous installons toutes les marques premium : Dornbracht, Hansgrohe, Grohe, Duravit, Geberit. Fourniture possible à tarif professionnel.' },
        ],
    },

    // ─── WAVRE ─────────────────────────────────
    {
        slug: 'wavre',
        city: 'Wavre',
        province: 'Brabant Wallon',
        population: '35 000',
        postalCodes: '1300 à 1301',
        responseTime: '28 min',
        metaTitle: 'Plombier Wavre — Urgence 24/7 | Tarif 2025 | Intervention Rapide',
        metaDescription: 'Plombier à Wavre et Brabant Wallon est : intervention rapide. Tarifs 2025. Débouchage, fuite, chaudière. Ottignies-LLN, Rixensart couverts. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Centre de Wavre', responseTime: '25 min', highlight: 'Chef-lieu du Brabant Wallon. Mix de commerces et résidences avec plomberie diverse' },
            { name: 'Limal & Bierges', responseTime: '28 min', highlight: 'Quartiers résidentiels le long de la Dyle. Risques d\'humidité en bord de rivière' },
            { name: 'Ottignies-Louvain-la-Neuve', responseTime: '30 min', highlight: 'Ville universitaire avec logements étudiants. Débouchages fréquents et fuites' },
        ],
        directions: [
            { from: 'Walibi Belgium', duration: '10 min', route: 'Direction centre de Wavre via la N4.' },
            { from: 'Louvain-la-Neuve (Aula Magna)', duration: '12 min', route: 'Via E411 direction Wavre. Dessert toute la zone universitaire.' },
        ],
        weatherChallenges: [
            { season: 'Hiver', icon: '❄️', challenge: 'Gel : zone semi-rurale plus froide, canalisations extérieures vulnérables', service: 'Dégel, isolation, dépannage chaudière' },
            { season: 'Printemps', icon: '🌧️', challenge: 'Crues de la Dyle possibles', service: 'Pompage, drainage, clapets anti-retour' },
            { season: 'Été', icon: '☀️', challenge: 'Sécheresse : mouvements terrain en zone argileuse', service: 'Détection fuite, réparation' },
            { season: 'Automne', icon: '🍂', challenge: 'Feuilles et humidité', service: 'Débouchage, entretien préventif' },
        ],
        employers: [
            { name: 'GlaxoSmithKline (pharma)', type: 'Industrie pharmaceutique' },
            { name: 'UCLouvain (LLN)', type: 'Enseignement' },
            { name: 'Walibi Belgium', type: 'Loisirs' },
        ],
        localContent: [
            { title: 'Wavre : centre du Brabant Wallon', text: 'Chef-lieu du Brabant Wallon, Wavre est une ville dynamique entre Bruxelles et Namur. Le mélange de constructions anciennes (centre) et récentes (extensions) crée des besoins variés en plomberie.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '28 min', others: '2+ heures' },
            { feature: 'Prix en ligne', us: '✅ Oui', others: '❌ Non' },
            { feature: 'WhatsApp', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Avis Google', us: '⭐ 4.9/5', others: '⭐ 3.5/5' },
        ],
        faqs: [
            { q: 'Couvrez-vous Ottignies-Louvain-la-Neuve ?', a: 'Oui, intervention en 30 min à LLN et Ottignies. Nous intervenons régulièrement dans les kots étudiants et résidences.' },
        ],
    },

    // ─── NIVELLES ──────────────────────────────
    {
        slug: 'nivelles',
        city: 'Nivelles',
        province: 'Brabant Wallon',
        population: '28 000',
        postalCodes: '1400',
        responseTime: '30 min',
        metaTitle: 'Plombier Nivelles — Urgence 24/7 | Tarif 2025 | Intervention 30 min',
        metaDescription: 'Plombier à Nivelles : intervention en 30 min. Tarifs clairs 2025. Brabant Wallon sud, Genappe, Tubize couverts. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Centre de Nivelles', responseTime: '28 min', highlight: 'Centre historique autour de la Collégiale. Immeubles anciens avec plomberie à moderniser' },
            { name: 'Baulers & Thines', responseTime: '30 min', highlight: 'Quartiers résidentiels périphériques avec maisons individuelles' },
            { name: 'Genappe & Villers-la-Ville', responseTime: '35 min', highlight: 'Zone rurale avec fosses septiques et chaudières mazout' },
        ],
        directions: [
            { from: 'Collégiale Sainte-Gertrude', duration: '5 min', route: 'Centre de Nivelles, intervention quasi-immédiate.' },
            { from: 'N25 (sortie Nivelles)', duration: '10 min', route: 'Accès rapide depuis l\'autoroute de Wallonie.' },
        ],
        weatherChallenges: [
            { season: 'Hiver', icon: '❄️', challenge: 'Gel fréquent en zone semi-rurale', service: 'Dégel, chaudière, isolation' },
            { season: 'Printemps', icon: '🌧️', challenge: 'Pluies fortes : saturation des sols et fosses', service: 'Drainage, pompage, vidange fosse' },
            { season: 'Été', icon: '☀️', challenge: 'Sécheresse', service: 'Détection fuite' },
            { season: 'Automne', icon: '🍂', challenge: 'Humidité', service: 'Entretien préventif' },
        ],
        employers: [
            { name: 'Zone commerciale Nivelles-Sud', type: 'Commerce' },
            { name: 'Industries locales', type: 'Industrie' },
        ],
        localContent: [
            { title: 'Nivelles et le sud du Brabant Wallon', text: 'Nivelles est la porte d\'entrée du Brabant Wallon depuis le Hainaut. La zone combine urbanisation et ruralité, avec des besoins plomberie allant de la rénovation d\'appartements à l\'entretien de fosses septiques.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '30 min', others: '3+ heures' },
            { feature: 'Prix en ligne', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Avis Google', us: '⭐ 4.9/5', others: '⭐ 3.0-3.5/5' },
        ],
        faqs: [
            { q: 'Intervenez-vous à Genappe et Villers-la-Ville ?', a: 'Oui, nous couvrons tout le sud du Brabant Wallon : Nivelles, Genappe, Tubize, Braine-le-Château, Ittre.' },
        ],
    },

    // ─── LA LOUVIÈRE ───────────────────────────
    {
        slug: 'la-louviere',
        city: 'La Louvière',
        province: 'Hainaut',
        population: '80 000',
        postalCodes: '7100 à 7110',
        responseTime: '30 min',
        metaTitle: 'Plombier La Louvière — Urgence 24/7 | Tarif 2025 | 30 min',
        metaDescription: 'Plombier à La Louvière : urgence 24/7, intervention 30 min. Tarifs clairs 2025. Débouchage, fuite, chaudière. Centre et Le Roeulx. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Centre-ville', responseTime: '28 min', highlight: 'Zone commerciale et résidentielle. Immeubles des années 50-80 avec plomberie vieillissante' },
            { name: 'Haine-Saint-Paul & Haine-Saint-Pierre', responseTime: '30 min', highlight: 'Quartiers résidentiels historiques le long de la Haine' },
            { name: 'Strépy-Bracquegnies', responseTime: '32 min', highlight: 'Proximité du Canal du Centre et des ascenseurs hydrauliques UNESCO' },
        ],
        directions: [
            { from: 'Centre-ville La Louvière', duration: '10 min', route: 'Accès via N55 et Ring de La Louvière.' },
            { from: 'Ascenseurs du Canal du Centre', duration: '15 min', route: 'Via N535 depuis Strépy-Bracquegnies.' },
        ],
        weatherChallenges: [
            { season: 'Hiver', icon: '❄️', challenge: 'Gel et pannes chaudière mazout fréquentes', service: 'Dépannage chaudière, dégel' },
            { season: 'Printemps', icon: '🌧️', challenge: 'Inondations le long de la Haine', service: 'Pompage, réparation' },
            { season: 'Été', icon: '☀️', challenge: 'Sécheresse et sols instables', service: 'Détection fuite' },
            { season: 'Automne', icon: '🍂', challenge: 'Humidité et condensation', service: 'Ventilation, drainage' },
        ],
        employers: [
            { name: 'IDEA (intercommunale)', type: 'Service public' },
            { name: 'Sonaca (aéronautique)', type: 'Industrie' },
            { name: 'Centres commerciaux La Louvière', type: 'Commerce' },
        ],
        localContent: [
            { title: 'La Louvière : le Centre du Hainaut', text: 'La Louvière est une ville industrielle en reconversion avec un important patrimoine UNESCO (ascenseurs du Canal du Centre). Le parc immobilier, majoritairement des années 50 à 80, nécessite souvent des rénovations complètes de plomberie.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '30 min', others: '3+ heures' },
            { feature: 'Prix en ligne', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Avis Google', us: '⭐ 4.9/5', others: '⭐ 3.0/5' },
        ],
        faqs: [
            { q: 'Couvrez-vous Le Roeulx et Soignies ?', a: 'Oui, nous couvrons La Louvière, Le Roeulx, Soignies, Binche et tout le Centre du Hainaut.' },
        ],
    },

    // ─── TOURNAI ───────────────────────────────
    {
        slug: 'tournai',
        city: 'Tournai',
        province: 'Hainaut',
        population: '69 000',
        postalCodes: '7500 à 7548',
        responseTime: '35 min',
        metaTitle: 'Plombier Tournai — Urgence 24/7 | Tarif 2025 | Intervention Rapide',
        metaDescription: 'Plombier à Tournai : urgence 24/7, tarifs clairs 2025. Débouchage, fuite, chaudière. Tournai et Hainaut occidental. ☎ 0465 68 51 58',
        neighborhoods: [
            { name: 'Centre historique', responseTime: '32 min', highlight: 'Patrimoine UNESCO (Beffroi, Cathédrale). Plomberie très ancienne dans les immeubles du centre' },
            { name: 'Marquain & Templeuve', responseTime: '35 min', highlight: 'Quartiers sud proches de la frontière française' },
            { name: 'Froyennes & Froidmont', responseTime: '35 min', highlight: 'Zone résidentielle nord avec maisons individuelles' },
        ],
        directions: [
            { from: 'Grand-Place de Tournai', duration: '10 min', route: 'Centre historique, intervention rapide depuis notre point de départ.' },
            { from: 'Cathédrale Notre-Dame', duration: '10 min', route: 'Même zone que la Grand-Place, accès immédiat.' },
        ],
        weatherChallenges: [
            { season: 'Hiver', icon: '❄️', challenge: 'Gel : zone humide proche de l\'Escaut', service: 'Dégel, chaudière, isolation' },
            { season: 'Printemps', icon: '🌧️', challenge: 'Crues de l\'Escaut : inondations dans les zones basses', service: 'Pompage, clapets, réparation' },
            { season: 'Été', icon: '☀️', challenge: 'Sécheresse modérée', service: 'Détection fuite' },
            { season: 'Automne', icon: '🍂', challenge: 'Humidité chronique due à la proximité de l\'Escaut', service: 'Drainage, ventilation' },
        ],
        employers: [
            { name: 'Hôpital Notre-Dame (AZ Tournai)', type: 'Santé' },
            { name: 'UCLouvain (site de Tournai)', type: 'Enseignement' },
            { name: 'Industries de Tournai-Ouest', type: 'Industrie' },
        ],
        localContent: [
            { title: 'Tournai : la plus ancienne ville de Belgique', text: 'Tournai est la plus ancienne ville de Belgique avec un patrimoine exceptionnel. Les bâtiments historiques du centre nécessitent une expertise spécialisée en plomberie ancienne que peu de professionnels possèdent.' },
        ],
        competitors: [
            { feature: 'Temps de réponse', us: '35 min', others: '3+ heures' },
            { feature: 'Prix en ligne', us: '✅ Oui', others: '❌ Non' },
            { feature: 'Avis Google', us: '⭐ 4.9/5', others: '⭐ 3.0/5' },
        ],
        faqs: [
            { q: 'Intervenez-vous aussi à Mouscron ?', a: 'Oui, nous couvrons Tournai, Mouscron, Ath, Péruwelz et tout le Hainaut occidental.' },
        ],
    },
];
