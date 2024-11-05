const signesData = [
  { id: "belier", nom: "Bélier", emoji: "♈" },
  { id: "taureau", nom: "Taureau", emoji: "♉" },
  { id: "gemeaux", nom: "Gémeaux", emoji: "♊" },
  { id: "cancer", nom: "Cancer", emoji: "♋" },
  { id: "lion", nom: "Lion", emoji: "♌" },
  { id: "vierge", nom: "Vierge", emoji: "♍" },
  { id: "balance", nom: "Balance", emoji: "♎" },
  { id: "scorpion", nom: "Scorpion", emoji: "♏" },
  { id: "sagittaire", nom: "Sagittaire", emoji: "♐" },
  { id: "capricorne", nom: "Capricorne", emoji: "♑" },
  { id: "verseau", nom: "Verseau", emoji: "♒" },
  { id: "poissons", nom: "Poissons", emoji: "♓" },
];

const phrases = {
  positif: [
    "Votre énergie cosmique est particulièrement alignée aujourd'hui",
    "Une opportunité unique se présente dans votre champ vibratoire",
    "Les astres favorisent votre développement personnel",
    "Votre aura rayonne d'une intensité rare",
    "Les énergies célestes convergent en votre faveur",
    "Une période de transformation positive s'annonce",
    "Votre potentiel créatif atteint son apogée",
    "Les portes de l'univers s'ouvrent à vous",
    "Votre magnétisme personnel est à son maximum",
    "Une synergie cosmique exceptionnelle vous accompagne",
    "Les vibrations lunaires amplifient vos capacités",
    "Votre chemin spirituel s'illumine de nouvelles perspectives",
    "Une harmonie céleste particulière vous enveloppe",
    "Les confluences astrales vous sont favorables",
    "Votre essence spirituelle rayonne intensément",
    "Une énergie nouvelle circule dans votre champ vibratoire",
    "Les constellations s'alignent en votre faveur",
    "Votre force intérieure atteint son paroxysme",
    "Une aura protectrice vous enveloppe",
    "Les influences planétaires décuplent vos capacités",
    "Votre karma positif s'intensifie remarquablement",
    "Une renaissance énergétique s'opère en vous",
    "Les étoiles vous guident vers de nouvelles opportunités",
    "Votre énergie cosmique est particulièrement alignée aujourd'hui",
    "Une opportunité unique se présente dans votre champ vibratoire",
    "Les astres favorisent votre développement personnel",
    "Votre aura rayonne d'une intensité rare",
  ],
  complementsPositif: [
    "grâce à l'alignement de Jupiter avec votre signe",
    "sous l'influence bienveillante de Vénus",
    "alors que Mars traverse votre maison astrale",
    "pendant ce cycle lunaire favorable",
    "en harmonie avec les énergies de Mercure",
    "grâce à la conjonction Neptune-Pluton",
    "durant cette phase ascendante",
    "sous l'égide protectrice de Saturne",
    "en résonance avec l'énergie des Pléiades",
    "pendant cette période de pleine lune",
    "grâce aux vibrations de la nouvelle lune",
    "sous l'influence du trigone Soleil-Jupiter",
    "pendant que Mercure est en phase rétrograde",
    "en harmonie avec les énergies de la Lune",
    "pendant que la Lune est en phase ascendante",
    "alors que les énergies de la Lune sont en phase ascendante",
    "pendant que la Lune est en phase descendante",
    "alors que les énergies de la Lune sont en phase descendante",
    "sous l'influence mystérieuse de l'étoile polaire",
    "grâce à l'alignement parfait des cristaux cosmiques",
    "pendant que les anneaux de Saturne dansent",
    "alors que les constellations forment un sourire",
    "sous la protection des anciens sages stellaires",
    "durant cette rare configuration astrale",
    "en harmonie avec la musique des sphères",
    "pendant que les étoiles filantes tracent votre chemin",
    "alors que l'univers vous fait un clin d'œil complice",
    "sous la bienveillance des gardiens célestes",
    "grâce aux énergies du triangle d'or cosmique",
    "pendant que les vortex dimensionnels s'alignent",
  ],
  conseil: [
    "Prenez le temps de méditer sur vos vibrations intérieures",
    "Écoutez votre intuition cosmique",
    "Laissez-vous guider par les énergies bienveillantes",
    "Ouvrez votre esprit aux messages de l'univers",
    "Concentrez-vous sur l'harmonie de vos énergies",
    "Cultivez la patience face aux cycles cosmiques",
    "Explorez les dimensions cachées de votre être",
    "Accueillez les changements avec sérénité",
    "Alignez vos chakras avec les forces universelles",
    "Purifiez votre espace énergétique",
    "Connectez-vous à la sagesse ancestrale",
    "Développez votre conscience spirituelle",
    "Harmonisez votre corps et votre esprit",
    "Suivez le flux naturel des énergies",
    "Restez à l'écoute des synchronicités",
    "Méditez sur les messages subtils de l'univers",
    "Cultivez votre jardin intérieur avec bienveillance",
    "Laissez s'exprimer votre sagesse innée",
    "Accueillez les synchronicités avec gratitude",
    "Honorez vos cycles naturels d'évolution",
    "Nourrissez votre flamme spirituelle",
    "Accordez-vous aux rythmes cosmiques",
    "Vivez en harmonie avec l'éternel flux de l'univers",
  ],
  complementsConseil: [
    "pendant que Mercure est en phase rétrograde",
    "en cette période de transition cosmique",
    "alors que les portes spirituelles s'ouvrent",
    "durant ce passage énergétique important",
    "en harmonie avec les cycles stellaires",
    "pendant l'alignement des chakras cosmiques",
    "lors de ce portail énergétique",
    "durant cette phase d'éveil collectif",
    "en cette période de renouveau karmique",
    "alors que les voiles dimensionnels s'amincissent",
    "en cette période de grand éveil cosmique",
    "pendant que les portails énergétiques sont grands ouverts",
    "alors que la conscience collective s'élève",
    "durant cette phase d'expansion universelle",
    "sous l'influence des maîtres ascensionnés",
    "pendant que les codes sacrés se révèlent",
    "alors que la matrice divine pulse",
    "en cette période de recalibrage vibratoire",
    "durant l'activation des codes galactiques",
    "pendant que les fréquences s'harmonisent",
    "alors que les prophéties s'accomplissent",
    "sous la guidance des êtres de lumière",
  ],
  avertissement: [
    "Attention aux déséquilibres énergétiques",
    "Certaines vibrations négatives pourraient perturber votre harmonie",
    "Veillez à maintenir votre équilibre spirituel",
    "Une période de réalignement pourrait être nécessaire",
    "Protégez-vous des énergies dissonantes",
    "Évitez les influences astrales perturbatrices",
    "Gardez-vous des illusions trompeuses",
    "Restez vigilant face aux perturbations cosmiques",
    "Préservez votre champ énergétique",
    "Ne négligez pas les signes avant-coureurs",
    "Méfiez-vous des parasitages énergétiques",
    "Anticipez les fluctuations vibratoires",
    "Préparez-vous aux changements de phase lunaire",
    "Restez ancré malgré les turbulences astrales",
    "Évitez les décisions hâtives en période de rétrograde",
    "Gardez-vous des énergies dispersantes",
    "Évitez les situations de déséquilibre karmique",
    "Prenez garde aux influences astrales contradictoires",
    "Ne laissez pas les ondes négatives vous atteindre",
    "Restez vigilant face aux perturbations énergétiques",
    "Protégez votre aura des parasitages extérieurs",
    "Méfiez-vous des alignements planétaires défavorables",
  ],
  complementsAvertissement: [
    "à cause de l'influence de Saturne rétrograde",
    "en raison des perturbations de l'équinoxe",
    "du fait des turbulences astrales actuelles",
    "à cause des nœuds lunaires défavorables",
    "en raison de l'opposition Mars-Pluton",
    "pendant cette phase descendante",
    "durant ce carré cosmique tendu",
    "à cause des interférences planétaires",
    "en cette période de grand changement astral",
    "lors de ce passage délicat des planètes",
    "à cause des fluctuations du champ quantique",
    "en raison des perturbations dans la force",
    "suite aux caprices des vents solaires",
    "à cause des interférences cosmiques inattendues",
    "en raison des turbulences dans le vortex temporel",
    "pendant cette phase de réajustement galactique",
    "durant ce passage délicat entre les dimensions",
    "à cause des remous dans l'océan cosmique",
    "suite aux variations du flux énergétique universel",
    "en raison des anomalies dans la trame astrale",
    "pendant cette période de purification karmique",
    "durant ce grand nettoyage céleste",
  ],
  conclusion: [
    "Votre chemin s'éclaire pas à pas",
    "L'univers veille sur votre destinée",
    "Les étoiles guident vos pas",
    "Votre essence spirituelle rayonne",
    "L'harmonie cosmique vous accompagne",
    "Les énergies célestes vous protègent",
    "Votre voyage spirituel s'intensifie",
    "La sagesse ancestrale vous guide",
    "Les portes de la conscience s'ouvrent",
    "L'équilibre universel vous soutient",
    "Votre lumière intérieure grandit jour après jour",
    "Les cycles cosmiques vous sont favorables",
    "Une nouvelle phase spirituelle commence",
    "Votre aura se renforce à chaque instant",
    "Les vibrations positives vous entourent",
    "Votre destinée s'écrit dans les étoiles... et un peu sur Twitter",
    "Les astres vous sourient (et ils ont de belles dents)",
    "Votre karma s'améliore, comme votre connexion WiFi",
    "L'univers conspire en votre faveur (mais gardez quand même un plan B)",
    "Les énergies cosmiques dansent pour vous (la chorégraphie est approximative)",
    "Votre aura brille plus fort que le smartphone de votre voisin",
    "Les anges gardiens veillent sur vous (ils font des heures sup')",
    "La sagesse ancestrale vous guide (avec l'aide du GPS)",
    "Les portes de la conscience s'ouvrent (pensez à huiler les gonds)",
    "L'équilibre universel vous soutient (comme une bonne paire de baskets)",
    "Votre chemin spirituel est en cours de téléchargement...",
    "Les étoiles vous montrent la voie (mais elles ne paieront pas votre essence)",
    "Une nouvelle phase commence (comme la énième saison de votre série préférée)",
    "Votre aura fait des étincelles (attention aux courts-circuits)",
    "Les vibrations positives vous entourent (comme les notifications de votre téléphone)",
    "L'univers vous fait un clin d'œil (vérifiez quand même qu'il n'a pas une poussière dans l'œil)",
    "Les chakras s'alignent (comme les planètes, mais en moins loin)",
    "Votre potentiel spirituel est en pleine expansion (comme votre collection de plantes)",
    "Les énergies cosmiques jouent en votre faveur (les dés ne sont pas pipés, promis)",
    "L'harmonie céleste vous berce (comme une playlist bien construite)",
  ],
  complementsConclusion: [
    "enfin... si Mercure le permet",
    "ou presque",
    "selon les dernières études astrologiques",
    "d'après les statistiques cosmiques",
    "si les étoiles ne changent pas d'avis",
    "en théorie",
    "à quelques années-lumière près",
    "sauf bug dans la matrice",
    "si tout va bien",
    "normalement",
    "à confirmer avec votre horoscope chinois",
    "sous réserve d'acceptation par l'univers",
    "mais ne nous emballons pas",
    "enfin... on l'espère",
    "si les astres ne font pas grève",
    "selon les calculs des mathématiques célestes",
    "d'après le manuel des lois universelles",
    "si les extraterrestres ne s'en mêlent pas",
    "sous réserve de validation par le conseil des sages",
    "après vérification dans le grand livre cosmique",
    "si les licornes galactiques sont d'accord",
    "selon les prévisions du GPS spirituel",
    "d'après le baromètre mystique",
    "si les algorithmes célestes ne plantent pas",
    "conformément au planning cosmique",
    "si le karma ne fait pas de mise à jour",
    "après consultation du service client universel",
  ],
};

function genererPhraseAvecComplement(base, complements, probabilite = 0.85) {
  const phrase = base[Math.floor(Math.random() * base.length)];

  // Utilisation d'une probabilité pour l'ajout de compléments
  if (Math.random() < probabilite) {
    // Sélection de 1 ou 2 compléments avec une faible probabilité pour 2
    const nbComplements = Math.random() < 0.15 ? 2 : 1;

    if (nbComplements === 1) {
      const complement =
        complements[Math.floor(Math.random() * complements.length)];
      return `${phrase}, ${complement}`;
    } else {
      // Sélection de deux compléments différents
      let complement1, complement2;
      do {
        complement1 =
          complements[Math.floor(Math.random() * complements.length)];
        complement2 =
          complements[Math.floor(Math.random() * complements.length)];
      } while (complement1 === complement2);

      return `${phrase}, ${complement1} et ${complement2}`;
    }
  }

  return phrase;
}

function genererHoroscope(signe) {
  const signeData = signesData.find((s) => s.id === signe);

  const positif = genererPhraseAvecComplement(
    phrases.positif,
    phrases.complementsPositif
  );
  const conseil = genererPhraseAvecComplement(
    phrases.conseil,
    phrases.complementsConseil
  );
  const avertissement = genererPhraseAvecComplement(
    phrases.avertissement,
    phrases.complementsAvertissement
  );
  const conclusion = genererPhraseAvecComplement(
    phrases.conclusion,
    phrases.complementsConclusion
  );

  return {
    signe: signeData.nom,
    emoji: signeData.emoji,
    message: {
      positif,
      conseil,
      avertissement,
      conclusion,
    },
  };
}

// Pour Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { signesData, genererHoroscope };
}
