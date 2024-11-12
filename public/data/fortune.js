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
  ],
};

function genererFortune() {
  const getMessage = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return {
    message: getMessage(fortunes.messages),
    conseil: getMessage(fortunes.conseils),
    conclusion: getMessage(fortunes.conclusions),
  };
}

module.exports = { genererFortune };
