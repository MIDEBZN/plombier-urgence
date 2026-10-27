/**
 * Configuration centralisée pour les landing pages Google Ads (/lp/*)
 * Source unique de vérité pour les coordonnées, tarifs indicatifs et conditions d'intervention.
 * 
 * Tout détail non vérifié est explicitement mentionné et manipulable en un seul endroit.
 */

export interface LandingBusinessConfig {
  name: string;
  legalEntity: string;
  phoneDisplay: string;
  phoneRaw: string;
  phoneTel: string;
  email: string;
  address: string;
  city: string;
  country: string;
  mapsUrl: string;
  whatsappUrl: string;
  openingHoursDisplay: string;
  coverageHeadline: string;
  communesBruxelles: string[];
  communesPeripherie: string[];
  googleAdsId: string;
  phoneConversionLabel: string;
  pricing: {
    debouchageStart: number;
    fuiteStart: number;
    surchargeNuitWeekend: number;
    vatRateRenovation: number;
    vatRateStandard: number;
    pricingPolicyNotice: string;
  };
  disclaimerUnverified: {
    responseTimeNotice: string;
    quoteNotice: string;
  };
}

export const LANDING_CONFIG: LandingBusinessConfig = {
  name: "Plombier Urgence",
  legalEntity: "Plombier Urgence Belgique",
  phoneDisplay: "0465 68 51 58",
  phoneRaw: "+32465685158",
  phoneTel: "tel:0465685158",
  email: "contact@plombierurgence.be",
  address: "25 Boulevard de l'Abattoir, 1000 Bruxelles",
  city: "Bruxelles",
  country: "Belgique",
  mapsUrl: "https://maps.app.goo.gl/o5ncKidk5CEoTWMr8",
  whatsappUrl: "https://wa.me/32465685158?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20d%C3%A9pannage%20plomberie%20urgent",
  openingHoursDisplay: "Permanence téléphonique 24h/24 & 7j/7",
  coverageHeadline: "Bruxelles (19 communes) & Périphérie",
  
  communesBruxelles: [
    "Bruxelles-Ville (1000)",
    "Schaerbeek (1030)",
    "Etterbeek (1040)",
    "Ixelles (1050)",
    "Saint-Gilles (1060)",
    "Anderlecht (1070)",
    "Molenbeek-Saint-Jean (1080)",
    "Koekelberg (1081)",
    "Berchem-Sainte-Agathe (1082)",
    "Ganshoren (1083)",
    "Jette (1090)",
    "Evere (1140)",
    "Woluwe-Saint-Pierre (1150)",
    "Auderghem (1160)",
    "Watermael-Boitsfort (1170)",
    "Uccle (1180)",
    "Forest (1190)",
    "Woluwe-Saint-Lambert (1200)",
    "Saint-Josse-ten-Noode (1210)"
  ],

  communesPeripherie: [
    "Waterloo",
    "Braine-l'Alleud",
    "Wavre",
    "Vilvorde",
    "Zaventem",
    "Kraainem",
    "Wezembeek-Oppem",
    "Tervuren",
    "Overijse",
    "Dilbeek",
    "Hal",
    "Grimbergen"
  ],

  // Google Ads tracking IDs verified in codebase
  googleAdsId: "AW-17876130811",
  phoneConversionLabel: "AW-17876130811/WvKSCJXeqoIcEPu3gMxC",

  // Pricing based on src/data/pricing.ts reference
  pricing: {
    debouchageStart: 80,
    fuiteStart: 95,
    surchargeNuitWeekend: 50,
    vatRateRenovation: 6, // Logements privés de + de 10 ans
    vatRateStandard: 21,
    pricingPolicyNotice: "Tarif de base indicatif annoncé par téléphone selon la nature de l'intervention. Devis ferme et détaillé validé sur place avec le client avant tout commencement de travail."
  },

  // Wording neutre et conforme pour les points non prouvés par contrat écrit
  disclaimerUnverified: {
    responseTimeNotice: "Départ immédiat du technicien disponible selon le secteur d'intervention et l'état du trafic routier.",
    quoteNotice: "Le devis sur place est présenté pour acceptation avant toute réparation."
  }
};
