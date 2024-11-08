const themes = {
  emotion: {
    titre: "Résonance Émotionnelle",
    description: "L'état de votre flux émotionnel",
    tags: [
      "sourire",
      "rire",
      "amour",
      "cœur",
      "larme",
      "touché",
      "ému",
      "câlin",
      "gentil",
      "joie",
      "sentiment",
      "émotion",
      "passion",
      "rougir",
      "adorer",
      "aimer",
      "amoureux",
      "béguin",
    ],
    phrases: {
      intro: [
        "L'énergie émotionnelle de %s fait vibrer votre cœur",
        "Les ondes sensibles de %s touchent votre âme",
        "%s révèle la profondeur de vos sentiments",
        "La résonance de %s éveille votre intelligence émotionnelle",
        "Les vibrations de %s harmonisent vos émotions",
        "L'essence de %s ouvre votre cœur à l'amour universel",
        "%s guide votre voyage émotionnel intérieur",
        "La tendresse de %s enveloppe votre être",
        "La sensibilité de %s éveille vos émotions profondes",
        "Les vibrations de %s touchent votre cœur sacré",
        "L'amour universel se manifeste à travers %s",
        "La douceur de %s apaise votre âme",
        "%s révèle la beauté de vos sentiments",
      ],
      conseil: [
        "Laissez %s guider votre cœur vers la lumière",
        "Accueillez l'amour que %s vous transmet",
        "Ouvrez votre chakra du cœur à l'énergie de %s",
        "Dansez avec les vibrations émotionnelles de %s",
        "Respirez l'essence aimante de %s",
        "Laissez %s transformer vos émotions en sagesse",
        "Écoutez le message d'amour de %s",
        "Permettez à %s d'harmoniser vos ressentis",
        "Suivez la guidance du cœur de %s",
        "Baignez-vous dans l'amour inconditionnel de %s",
      ],
    },
  },
  perception: {
    titre: "Vision Intérieure",
    description: "Votre perception subtile",
    tags: [
      "yeux",
      "regarder",
      "voir",
      "vision",
      "observer",
      "captivé",
      "fasciné",
      "impressionné",
      "stupéfait",
      "surpris",
      "étonné",
      "jeter un coup d'œil",
      "regarder fixement",
    ],
    phrases: {
      intro: [
        "Le regard de %s ouvre vos perceptions subtiles",
        "%s éveille votre vision intérieure",
        "Les yeux de %s révèlent les mystères cachés",
        "La présence de %s aiguise votre intuition",
        "L'essence de %s illumine votre regard spirituel",
      ],
      conseil: [
        "Observez les signes subtils de %s",
        "Laissez %s affiner votre vision intérieure",
        "Contemplez la sagesse que %s vous révèle",
        "Ouvrez votre troisième œil aux messages de %s",
        "Permettez à %s d'élargir votre conscience",
        "Accueillez les visions que %s vous apporte",
        "Explorez les dimensions que %s vous dévoile",
        "Suivez la lumière guidante de %s",
        "Laissez %s illuminer votre chemin spirituel",
        "Méditez sur les révélations de %s",
      ],
    },
  },
  mystere: {
    titre: "Voile Mystique",
    description: "Vos énergies mystérieuses",
    tags: [
      "invisible",
      "mystère",
      "brouillard",
      "nuages",
      "distrait",
      "se cacher",
      "dans les nuages",
      "visage dans le brouillard",
      "silence",
      "chut",
    ],
    phrases: {
      intro: [
        "%s vous guide à travers les voiles du mystère",
        "Les brumes de %s cachent des vérités profondes",
        "L'essence voilée de %s révèle ses secrets",
        "La présence mystérieuse de %s vous enveloppe",
      ],
    },
  },
  transformation: {
    titre: "Métamorphose Énergétique",
    description: "Votre processus de transformation",
    tags: [
      "changement",
      "transformation",
      "disparaître",
      "fondre",
      "liquide",
      "liquéfié",
      "se dissoudre",
      "métamorphose",
      "renaissance",
      "renouveau",
    ],
    phrases: {
      intro: [
        "%s catalyse votre transformation profonde",
        "L'énergie de %s active votre métamorphose",
        "La présence de %s dissout les anciennes formes",
        "Les vibrations de %s accompagnent votre renaissance",
      ],
    },
  },
  vibration: {
    titre: "Résonance Vibratoire",
    description: "Vos fréquences énergétiques",
    tags: [
      "vibration",
      "tremblement",
      "secousse",
      "sursaut",
      "secouer",
      "hochement",
      "énergie",
      "force",
      "puissance",
    ],
    phrases: {
      intro: [
        "Les vibrations de %s traversent votre champ énergétique",
        "%s fait résonner vos fréquences subtiles",
        "L'onde vibratoire de %s harmonise vos énergies",
        "La puissance de %s active vos centres vitaux",
      ],
    },
  },
  sagesse: {
    titre: "Sagesse Ancestrale",
    description: "Votre connexion à la sagesse universelle",
    tags: [
      "réflexion",
      "pensif",
      "compris",
      "ok",
      "oui",
      "malin",
      "intelligence",
      "savoir",
      "connaissance",
      "intelligent",
    ],
    phrases: {
      intro: [
        "La sagesse de %s éclaire votre chemin",
        "%s vous connecte aux connaissances ancestrales",
        "L'intelligence de %s guide vos pas",
        "La présence de %s éveille votre sagesse intérieure",
      ],
    },
  },
};

// Ajout de phrases conseil génériques pour tous les thèmes
const conseilsGeneriques = [
  "Méditez sur l'essence divine de %s",
  "Accueillez les énergies transformatrices de %s",
  "Laissez %s vous guider vers votre vérité",
  "Respirez en conscience avec %s",
  "Ouvrez-vous aux messages cosmiques de %s",
  "Permettez à %s d'élever votre fréquence vibratoire",
  "Explorez les mystères que %s vous révèle",
  "Harmonisez-vous avec la sagesse de %s",
  "Suivez la guidance spirituelle de %s",
  "Intégrez les enseignements sacrés de %s",
  "Laissez %s activer vos dons spirituels",
  "Connectez-vous à l'intelligence universelle via %s",
  "Accueillez la transformation que %s initie",
  "Dansez avec les énergies cosmiques de %s",
  "Célébrez la présence divine en %s",
];

// Ajouter les conseils génériques à chaque thème
Object.values(themes).forEach((theme) => {
  theme.phrases.conseil = [
    ...(theme.phrases.conseil || []),
    ...conseilsGeneriques,
  ];
});

function tagMatch(emojiTag, themeTag) {
  // Recherche partielle et gestion des accents
  return (
    emojiTag
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(themeTag.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
    themeTag
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(emojiTag.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  );
}

function interpreterEmoji(emoji, emojiData = []) {
  const data = emojiData.find((e) => e.emoji === emoji) || {
    label: "énergie mystérieuse",
    tags: [],
  };

  // Score amélioré avec correspondance partielle
  const themeScore = Object.entries(themes).map(([key, theme]) => {
    const matchingTags = theme.tags.filter((themeTag) =>
      data.tags.some((emojiTag) => tagMatch(emojiTag, themeTag))
    );
    return { key, score: matchingTags.length };
  });

  // Si aucun tag ne correspond, choisir un thème au hasard
  const bestTheme = themeScore.some((t) => t.score > 0)
    ? themeScore.reduce((a, b) => (a.score > b.score ? a : b))
    : {
        key: Object.keys(themes)[
          Math.floor(Math.random() * Object.keys(themes).length)
        ],
      };

  const theme = themes[bestTheme.key];
  const getRandomPhrase = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return {
    emoji,
    label: data.label,
    titre: theme.titre,
    description: theme.description,
    interpretation: getRandomPhrase(theme.phrases.intro).replace(
      /%s/g,
      data.label
    ),
    conseil: getRandomPhrase(theme.phrases.conseil).replace(/%s/g, data.label),
    mots_clefs: [
      ...new Set([
        ...theme.tags.filter((tag) => data.tags.includes(tag)).slice(0, 2),
        ...data.tags.slice(0, 2),
      ]),
    ].slice(0, 3),
  };
}

function genererThemoji(emojis, emojiData = []) {
  if (emojis.length !== 5) {
    throw new Error("Le Themoji nécessite exactement 5 emojis");
  }

  return emojis.map((emoji) => interpreterEmoji(emoji, emojiData));
}

module.exports = {
  genererThemoji,
};
