const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurer EJS comme moteur de rendu et configurer le dossier public
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Fonction pour vérifier si un caractère est un emoji
function isEmoji(char) {
  const emojiRegex = /[\p{Emoji}]/u;
  return emojiRegex.test(char);
}

// Page d'accueil pour créer un emoji vibratoire
app.get("/", (req, res) => {
  res.render("index");
});

// Page à propos
app.get("/about", (req, res) => {
  res.render("about");
});

// Route pour afficher l’emoji vibratoire avec génération d'image si nécessaire
app.get("/:emoji", async (req, res) => {
  const emoji = decodeURIComponent(req.params.emoji);

  // Ignorer les requêtes non emoji comme favicon.ico
  if (!isEmoji(emoji)) {
    return res.status(404).send("Not found");
  }

  // Afficher la page avec Open Graph
  res.render("vibrate", { emoji });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
