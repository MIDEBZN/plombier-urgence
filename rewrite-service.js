import * as fs from 'fs';
import * as path from 'path';

const file = path.join(process.cwd(), 'src/data/service-details.ts');
let content = fs.readFileSync(file, 'utf8');

// The replacement object literal for urgency
const newUrgencyService = `    // ─── URGENCE PLOMBERIE ─────────────────────
    {
        slug: 'urgence-plomberie',
        icon: '🚨',
        title: 'Urgence Plomberie',
        metaTitle: 'Urgence Plomberie Belgique — Intervention 24/7 en 30 min',
        metaDescription: 'Urgence plomberie en Belgique : dépannage rapide 24h/24 et 7j/7. Fuite, débouchage, chauffage, inondation. Prix fixe. ☎ 0465 68 51 58',
        heroSubtitle: 'Une urgence n\\'attend pas. Fuite majeure, canalisation bloquée, dégât des eaux ou panne de chauffage : notre équipe de garde est disponible 24h/24 pour intervenir en 30 minutes.',
        priceFrom: '95 €',
        priceRange: '95 € – 400 €',
        included: [
            { item: 'Diagnostic immédiat', detail: 'Identification rapide de la cause de l\\'urgence (fuite, bouchon, panne)' },
            { item: 'Mise en sécurité', detail: 'Coupure d\\'eau ou d\\'électricité pour stopper les dégâts immédiatement' },
            { item: 'Débouchage express', detail: 'Toilettes débordantes, égouts refoulant, ou évacuations bloquées' },
            { item: 'Colmatage de fuite', detail: 'Arrêt immédiat des fuites d\\'eau ou de gaz sur vos installations' },
            { item: 'Pompage inondation', detail: 'Évacuation rapide de l\\'eau en cas de cave ou sous-sol inondé' },
            { item: 'Dépannage chauffage', detail: 'Rétablissement de l\\'eau chaude ou du chauffage en pleine nuit' },
            { item: 'Réparation définitive ou provisoire', detail: 'Solution immédiate pour rétablir votre confort de vie' },
            { item: 'Rapport d\\'intervention assurance', detail: 'Document complet avec photos pour faciliter votre prise en charge' },
        ],
        problems: [
            { title: 'Dégât des eaux / Fuite Majeure', description: 'Une canalisation a éclaté, un robinet a cédé ou votre plafond fuit. Risque de dommages importants sur l\\'habitat.' },
            { title: 'Toilettes bouchées & Remontées', description: 'L\\'eau sale remonte et déborde. Situation insalubre qui nécessite un débouchage professionnel immédiat.' },
            { title: 'Cave ou logement inondé', description: 'De fortes pluies ou une rupture réseau ont provoqué une infiltration massive. Nous intervenons avec des pompes.' },
            { title: 'Panne totale de chauffage ou d\\'eau chaude', description: 'Plus de chauffage en plein hiver avec des températures glaciales. Une réparation d\\'urgence s\\'impose.' },
            { title: 'Fuite de Gaz détectée', description: 'Une odeur de gaz anormale. Danger de mort. Aérez, quittez les lieux, et appelez-nous immédiatement.' },
            { title: 'Canalisation principale bloquée', description: 'L\\'ensemble des équipements sanitaires du domicile sont inutilisables dû à un bouchon sur la voie principale.' },
        ],
        process: [
            { step: 1, title: 'Appel d\\'urgence (0465 68 51 58)', description: 'Décrivez l\\'urgence. Nous vous donnons les premiers consignes (ex: \\"coupez l\\'eau\\") et vous annonçons un prix d\\'intervention de base.' },
            { step: 2, title: 'Départ immédiat du technicien', description: 'Le plombier de garde le plus proche vous est assigné. Délai d\\'arrivée moyen constaté : 30 minutes.' },
            { step: 3, title: 'Mise hors de danger', description: 'Dès son arrivée, le technicien agit pour stopper l\\'aggravation du problème (fermeture de réseaux, protection).' },
            { step: 4, title: 'Diagnostic et Devis', description: 'Une fois la situation stabilisée, nous confirmons le devis pour la réparation du problème.' },
            { step: 5, title: 'Réparation et Nettoyage', description: 'Intervention sur la fuite, la panne ou le bouchon. Nettoyage de la zone après réparation.' },
            { step: 6, title: 'Attestation pour Assurance', description: 'Remise de la facture et du rapport détaillé d\\'intervention pour être remboursé par votre assurance auto/habitation.' },
        ],
        whyUs: [
            { icon: '🚨', title: 'Réactivité 30 min', text: 'Notre promesse fondamentale : un technicien chez vous en environ 30 minutes pour limiter les dégâts.' },
            { icon: '🌙', title: 'Vrai service 24/7', text: 'Nous disposons toujours d\\'équipes de garde roulantes. Nous décrochons même à 3h du matin.' },
            { icon: '💰', title: 'Tarifs transparents', text: 'Pas de prix à la tête du client. Les suppléments de nuit/week-end sont clairs et annoncés à l\\'appel.' },
            { icon: '🛠️', title: 'Multidisciplinaire', text: 'Plomberie, chauffage, débouchage, inondation... nos urgentistes maîtrisent tous les corps d\\'état sanitaire.' },
        ],
        faqs: [
            { q: 'Quel est le tarif pour l\\'intervention d\\'un plombier en urgence ?', a: 'Le prix de base en journée démarre à 80-95€. Un supplément d\\'urgence (nuit, week-end, fériés) de 50€ à 100€ est appliqué. Le prix exact de la réparation est confirmé sur place avant de commencer les travaux définitifs.' },
            { q: 'Puis-je être remboursé par mon assurance habitation ?', a: 'Oui, dans la plupart des cas de dommages consécutifs à une fuite imprévue, votre assurance couvre l\\'intervention d\\'urgence (recherche de fuite, sauvetage). Nous fournissons les attestations nécessaires.' },
            { q: 'Quels sont les gestes de premiers secours en cas de fuite grave ?', a: 'Localisez et fermez la vanne d\\'arrêt d\\'eau principale (souvent près du compteur). S\\'il y a un risque électrique, disjonctez immédiatement la zone touchée. Ne touchez pas l\\'eau stagnante près des prises.' },
            { q: 'Est-ce que l\\'appel de nuit compte immédiatement comme facturation ?', a: 'Non, le fait de nous appeler pour obtenir des conseils ou une estimation est gratuit. La facturation ne débute que lorsque vous validez le déplacement.' },
            { q: 'En combien de temps êtes-vous sur place ?', a: 'Notre délai d\\'intervention moyen est de 30 minutes sur les grandes agglomérations (Bruxelles, Liège, Namur, Charleroi) et jusqu\\'à 45 minutes pour les zones plus reculées.' },
        ],
        emergency: {
            available: true,
            responseTime: '30 minutes',
            extraCost: 'Supplément nuit/dimanche : 50€',
            description: 'Ce service est par définition notre pôle d\\'intervention prioritaire. Si vous lisez ceci et êtes dans l\\'urgence, appelez sans attendre le 0465 68 51 58.',
        },
        serviceAreas: ['Bruxelles (19 communes)', 'Liège et province', 'Namur et province', 'Charleroi et arrondissement', 'Mons et Hainaut', 'Brabant wallon', 'Toute la Belgique'],
        relatedServices: ['recherche-fuite', 'debouchage-canalisation', 'depannage-chaudiere'],
    },`;

// Replace related service references
content = content.replace(/'urgence-inondation'/g, "'urgence-plomberie'");

// Find start and end of Urgence Inondation block
const startIndex = content.indexOf('    // ─── URGENCE INONDATION ────────────────────');
if (startIndex !== -1) {
    const nextItemIndex = content.indexOf('];', startIndex); // It's the last item
    const originalBlock = content.slice(startIndex, nextItemIndex);
    
    // Replace it
    content = content.replace(originalBlock, newUrgencyService + '\\n');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log("Successfully updated service data.");
} else {
    console.log("Could not find the original block.");
}
