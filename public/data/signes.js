const signesData = {
  belier: { nom: "Bélier", emoji: "♈" },
  taureau: { nom: "Taureau", emoji: "♉" },
  gemeaux: { nom: "Gémeaux", emoji: "♊" },
  cancer: { nom: "Cancer", emoji: "♋" },
  lion: { nom: "Lion", emoji: "♌" },
  vierge: { nom: "Vierge", emoji: "♍" },
  balance: { nom: "Balance", emoji: "♎" },
  scorpion: { nom: "Scorpion", emoji: "♏" },
  sagittaire: { nom: "Sagittaire", emoji: "♐" },
  capricorne: { nom: "Capricorne", emoji: "♑" },
  verseau: { nom: "Verseau", emoji: "♒" },
  poissons: { nom: "Poissons", emoji: "♓" },
};

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
  conclusion: [
    "Votre chemin s'éclaire pas à pas 🌟",
    "L'univers veille sur votre destinée ✨",
    "Les étoiles guident vos pas 🌠",
    "Votre essence spirituelle rayonne 💫",
    "L'harmonie cosmique vous accompagne 🌙",
    "Les énergies célestes vous protègent ⭐",
    "Votre voyage spirituel s'intensifie 🌌",
    "La sagesse ancestrale vous guide 🎯",
    "Les portes de la conscience s'ouvrent 🔮",
    "L'équilibre universel vous soutient 🎭",
    "Votre lumière intérieure grandit jour après jour 🌅",
    "Les cycles cosmiques vous sont favorables 🌍",
    "Une nouvelle phase spirituelle commence 🌱",
    "Votre aura se renforce à chaque instant ✴️",
    "Les vibrations positives vous entourent 🎋",
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
  ],
};

function genererPhrase(base, complements) {
  const phrase = base[Math.floor(Math.random() * base.length)];
  const complement =
    complements[Math.floor(Math.random() * complements.length)];
  return `${phrase}, ${complement}`;
}

function genererHoroscope(signe) {
  const positif = genererPhrase(phrases.positif, phrases.complementsPositif);
  const conseil = genererPhrase(phrases.conseil, phrases.complementsConseil);
  const avertissement = genererPhrase(
    phrases.avertissement,
    phrases.complementsAvertissement
  );
  const conclusion =
    phrases.conclusion[Math.floor(Math.random() * phrases.conclusion.length)];

  return {
    signe: signesData[signe].nom,
    emoji: signesData[signe].emoji,
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
