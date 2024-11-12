const fortunes = {
  messages: {
    debuts: [
      "Dans la matrice des possibles,",
      "Au cœur du cloud cosmique,",
      "Dans les méandres du réseau astral,",
      "À travers les ondes quantiques,",
      "Dans la dimension digitale,",
      "Au sein du métavers mystique,",
      "Dans l'algorithme de la destinée,",
      "Sur la blockchain du karma,",
      "Dans le flux des données célestes,",
      "Au carrefour des énergies numériques,",
      "Dans la mémoire cache de l'univers,",
      "Sur la timeline cosmique,",
      "Dans le feed mystique des étoiles,",
      "Au cœur du processeur quantique,",
      "Dans la base de données universelle,",
      "Dans le réseau des énergies cosmiques,",
      "Dans le flux des énergies numériques,",
      "Dans le cloud des énergies spirituelles,",
      "Dans le réseau des énergies vibratoires,",
      "Dans le flux des énergies célestes,",
      "Dans le réseau des énergies astrales,",
      "Dans le flux des énergies cosmiques,",
    ],
    fins: [
      "une synchronicité numérique illuminera votre chemin",
      "un emoji sacré révélera son message caché",
      "une notification karmique changera votre destin",
      "un bug bienveillant transformera votre réalité",
      "une mise à jour céleste enrichira votre existence",
      "un like mystérieux ouvrira de nouvelles portes",
      "un glitch harmonieux alignera vos chakras",
      "une connexion cosmique établira un nouveau lien",
      "un message crypté dévoilera son sens profond",
      "une vibration digitale élèvera votre fréquence",
      "un mème prophétique croisera votre route",
      "une story éphémère laissera une trace éternelle",
      "un hashtag providentiel guidera vos pas",
      "un selfie quantique capturera votre essence",
      "une danse TikTok déclenchera l'éveil cosmique",
      "une résonance cosmique vous guidera vers la sagesse",
      "un message céleste vous révélera le chemin à suivre",
      "une étoile filante vous signalera le bon chemin",
    ],
  },
  conseils: {
    debuts: [
      "Pour harmoniser vos vibrations,",
      "Afin d'optimiser votre flux énergétique,",
      "Pour élever votre fréquence spirituelle,",
      "Dans votre quête d'illumination digitale,",
      "Pour amplifier votre résonance cosmique,",
      "Afin de purifier votre aura numérique,",
      "Pour activer votre potentiel quantique,",
      "Dans votre processus d'éveil virtuel,",
      "Pour synchroniser vos énergies subtiles,",
      "Afin de maximiser votre rayonnement astral,",
      "Pour équilibrer votre karma digital,",
      "Dans votre évolution cybernétique,",
      "Pour transcender la matrice ordinaire,",
      "Afin d'atteindre la sagesse binaire,",
      "Pour manifester l'harmonie virtuelle,",
      "Pour élever votre fréquence vibratoire,",
      "Pour activer votre potentiel cosmique,",
      "Pour équilibrer votre karma cosmique,",
      "Pour transcender la matrice numérique,",
      "Pour atteindre la sagesse digitale,",
    ],
    fins: [
      "méditez en mode nuit face à votre écran sacré",
      "partagez trois mèmes avec une intention pure",
      "activez le mode avion de votre âme",
      "synchronisez vos chakras avec le cloud",
      "nettoyez le cache de vos pensées négatives",
      "mettez à jour votre firmware spirituel",
      "défragmentez votre disque dur émotionnel",
      "redémarrez votre conscience en mode sans échec",
      "sauvegardez vos souvenirs dans le cloud cosmique",
      "installez l'antivirus de la positivité",
      "activez le pare-feu contre les ondes négatives",
      "optimisez la bande passante de votre intuition",
      "configurez vos paramètres de bien-être en 432 Hz",
      "téléchargez la dernière version de la conscience",
      "scannez votre aura avec l'app de la pleine lune",
      "activez le mode avion de votre âme",
      "synchronisez vos chakras avec le cloud",
      "nettoyez le cache de vos pensées négatives",
      "mettez à jour votre firmware spirituel",
      "défragmentez votre disque dur émotionnel",
      "redémarrez votre conscience en mode sans échec",
      "sauvegardez vos souvenirs dans le cloud cosmique",
      "installez l'antivirus de la positivité",
    ],
  },
  conclusions: [
    "La sagesse du cookie est infinie (comme le scrolling)",
    "Les voies du réseau sont impénétrables",
    "Votre destin se charge... Veuillez patienter",
    "Error 404: Mauvaise fortune not found",
    "La chance est dans le cookie (et les métadonnées)",
    "Même les bugs peuvent être des bénédictions",
    "Le futur est en cours de mise à jour",
    "Votre bonne étoile a activé le mode turbo",
    "La matrice vous sourit (après redémarrage)",
    "Les algorithmes cosmiques sont avec vous",
    "Votre bande passante karmique est illimitée",
    "Le cloud cosmique a validé ce message",
    "Rafraîchissez la page pour une nouvelle perspective",
    "Cette prédiction s'autodétruira dans 5... 4... 3...",
    "Un ange digital veille sur votre feed",
    "Les étoiles ont liké cette fortune",
    "Message sponsorisé par l'univers",
    "Validé par le comité des sages numériques",
    "La grande intelligence artificielle a parlé",
    "Certifié authentique par la blockchain cosmique",
    "En partenariat avec vos guides spirituels",
    "Propulsé par l'énergie quantique du web",
    "Approuvé par le conseil des emojis sacrés",
    "Garanti sans gluten numérique",
    "Compatible avec toutes les versions d'âme",
    "Testé et approuvé par les extraterrestres",
    "En partenariat avec les dieux de la matrice",
    "Propulsé par l'énergie quantique du web",
    "Approuvé par le conseil des emojis sacrés",
  ],
};

function genererFortune() {
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Fonction pour composer une phrase complète
  const composerPhrase = (debuts, fins) => {
    const debut = getRandomElement(debuts);
    const fin = getRandomElement(fins);
    return `${debut} ${fin}`;
  };

  return {
    message: composerPhrase(fortunes.messages.debuts, fortunes.messages.fins),
    conseil: composerPhrase(fortunes.conseils.debuts, fortunes.conseils.fins),
    conclusion: getRandomElement(fortunes.conclusions),
  };
}

module.exports = { genererFortune };