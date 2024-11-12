const fortunes = {
  messages: [
    "L'énergie cosmique vous réserve une délicieuse surprise",
    "Un emoji inattendu changera votre destinée",
    "La vibration du jour vous mènera vers un fou rire",
    "Une personne mystérieuse vous enverra un GIF",
    "Votre aura numérique brillera sur les réseaux sociaux",
    "Un bug dans la matrice vous apportera la chance",
    "Les astres prévoient un excellent mème dans votre futur",
    "Une notification importante illuminera votre journée",
    "Un like mystérieux bouleversera votre timeline",
    "La sagesse du cookie vous guidera vers le bonheur",
    "Une mise à jour karmique est en cours de téléchargement",
    "Les étoiles conseillent de sauvegarder vos données",
    "Un emoji bienveillant veille sur votre WiFi",
    "La force vibratoire est particulièrement forte avec votre smartphone",
    "Une synchronicité numérique se manifestera bientôt",
    "Une notification oubliée cache un message important",
    "Votre prochain selfie révélera votre vraie nature cosmique",
    "Un filtre Instagram amplifiera votre charisme astral",
    "Une danse TikTok alignera vos chakras",
    "Un message vocal contient la clé de votre destinée",
    "Un commentaire bienveillant transformera votre journée",
    "Une story éphémère aura un impact éternel",
    "Un hashtag mystérieux vous guidera vers la lumière",
    "Votre batterie à 1% survivra miraculeusement",
    "Un émoji mal placé créera une belle amitié",
    "Une mise à jour inattendue changera votre perspective",
    "Un glitch dans votre feed révélera une vérité profonde",
    "Un ancien message ressurgira avec un nouveau sens",
    "Une connexion WiFi gratuite apparaîtra comme par magie",
    "Un bug se transformera en feature divine",
  ],
  conseils: [
    "Méditez devant votre écran en mode nuit",
    "Partagez un mème pour amplifier les bonnes vibrations",
    "Redémarrez votre chakra digital",
    "Faites une sauvegarde de votre karma",
    "Alignez vos chakras avec votre connexion internet",
    "Nettoyez le cache de votre aura",
    "Mettez à jour vos paramètres spirituels",
    "Synchronisez vos énergies avec le cloud cosmique",
    "Activez le mode zen sur vos notifications",
    "Faites circuler l'énergie avec un tweet positif",
    "Scrollez vers le haut pour inverser le karma",
    "Likez trois posts pour activer la trinité numérique",
    "Faites une capture d'écran de vos rêves",
    "Désactivez les notifications négatives",
    "Utilisez l'emoji 🦋 pour attirer la métamorphose",
    "Créez une playlist pour votre aura",
    "Archivez vos anciennes vibrations",
    "Ajoutez un filtre arc-en-ciel à votre esprit",
    "Téléchargez la dernière mise à jour spirituelle",
    "Activez le mode avion pour voyager astralement",
    "Partagez votre wifi pour multiplier les ondes positives",
    "Utilisez la 5G pour accélérer votre éveil",
    "Faites défiler lentement pour savourer l'instant présent",
    "Activez le mode sombre pour voir la lumière intérieure",
  ],
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
  ],
};

function genererFortune() {
  // Fonction de Fisher-Yates shuffle pour mélanger un array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Fonction de sélection avec "mémoire" pour éviter les répétitions
  const getRandomMessage = (arr) => {
    if (!getRandomMessage.used) getRandomMessage.used = new Set();
    if (getRandomMessage.used.size >= arr.length * 0.8) {
      getRandomMessage.used.clear(); // Reset si 80% des messages ont été utilisés
    }

    let shuffledArr = shuffle([...arr]);
    let message = shuffledArr.find((m) => !getRandomMessage.used.has(m));

    if (!message) {
      message = shuffledArr[0]; // Fallback
      getRandomMessage.used.clear();
    }

    getRandomMessage.used.add(message);
    return message;
  };

  return {
    message: getRandomMessage(fortunes.messages),
    conseil: getRandomMessage(fortunes.conseils),
    conclusion: getRandomMessage(fortunes.conclusions),
  };
}

module.exports = { genererFortune };
