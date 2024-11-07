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
    ],
    phrases: {
      intro: [
        "L'énergie émotionnelle de %s fait vibrer votre cœur",
        "Les ondes sensibles de %s touchent votre âme",
        "%s révèle la profondeur de vos sentiments",
        "La résonance de %s éveille votre intelligence émotionnelle",
        "Les vibrations de %s harmonisent vos émotions",
        "L'essence de %s ouvre votre cœur à l'amour universel",
        "La présence de %s amplifie votre sensibilité",
        "%s guide votre voyage émotionnel intérieur",
      ],
      conseil: [
        "Laissez %s amplifier vos ressentis positifs",
        "Accueillez les messages émotionnels de %s",
        "Dansez avec la joie que %s vous apporte",
        "Ouvrez votre cœur aux énergies de %s",
        "Respirez l'amour que %s vous transmet",
      ],
    },
  },
  spirituel: {
    titre: "Vision Mystique",
    description: "Votre perception spirituelle",
    tags: [
      "étoile",
      "vision",
      "rêve",
      "méditation",
      "réflexion",
      "pensif",
      "invisible",
      "mystère",
      "brouillard",
      "nuages",
      "spirituel",
    ],
    phrases: {
      intro: [
        "La vision mystique de %s éclaire votre chemin",
        "%s ouvre votre troisième œil à la vérité",
        "Les messages de %s traversent le voile de l'illusion",
        "La sagesse de %s pénètre votre conscience",
        "Les énergies de %s élèvent votre perception",
      ],
      conseil: [
        "Méditez sur les symboles de %s",
        "Laissez %s guider votre intuition",
        "Explorez les mystères que %s vous révèle",
        "Contemplez la sagesse cachée de %s",
      ],
    },
  },
  energie: {
    titre: "Flux Vibratoire",
    description: "Votre fréquence énergétique",
    tags: [
      "vibration",
      "tremblement",
      "secousse",
      "énergie",
      "force",
      "puissance",
      "feu",
      "chaleur",
      "lumière",
      "rayonnement",
      "éclair",
    ],
    phrases: {
      intro: [
        "Les vibrations de %s traversent votre champ énergétique",
        "La puissance de %s active vos centres vitaux",
        "%s fait résonner votre fréquence personnelle",
        "L'énergie pure de %s harmonise vos chakras",
        "La force vitale de %s pulse en vous",
      ],
      conseil: [
        "Alignez-vous avec les vibrations de %s",
        "Laissez l'énergie de %s vous transformer",
        "Ressentez la puissance de %s dans chaque cellule",
        "Harmonisez-vous avec la fréquence de %s",
      ],
    },
  },
  transformation: {
    titre: "Métamorphose Cosmique",
    description: "Votre processus de transformation",
    tags: [
      "changement",
      "transformation",
      "métamorphose",
      "renaissance",
      "évolution",
      "cycle",
      "mouvement",
      "transition",
      "renouveau",
    ],
    phrases: {
      intro: [
        "%s guide votre processus de transformation",
        "L'essence de %s catalyse votre métamorphose",
        "Les énergies de %s activent votre renouveau",
        "La présence de %s accompagne votre évolution",
      ],
      conseil: [
        "Embrassez les changements que %s apporte",
        "Laissez %s guider votre transformation",
        "Accueillez la renaissance que %s initie",
        "Suivez le chemin évolutif de %s",
      ],
    },
  },
};

function interpreterEmoji(emoji, emojiData = []) {
  const data = emojiData.find((e) => e.emoji === emoji) || {
    label: "énergie mystérieuse",
    tags: [],
  };

  // Trouver le thème le plus pertinent en fonction des tags de l'emoji
  const themeScore = Object.entries(themes).map(([key, theme]) => {
    const matchingTags = theme.tags.filter((tag) => data.tags.includes(tag));
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
