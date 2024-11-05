const express = require("express");
const path = require("path");
const { signesData, genererHoroscope } = require("./public/data/signes.js");

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

// API pour les horoscopes
app.get("/api/signes", (req, res) => {
  res.json(signesData);
});

app.get("/api/horoscope/:signe", (req, res) => {
  const signe = req.params.signe.toLowerCase();
  res.json(genererHoroscope(signe));
});

// Page à propos
app.get("/about", (req, res) => {
  res.render("about");
});

// Route pour la page de sélection du signe
app.get("/horoscope", (req, res) => {
  res.render("horoscope", { signesData });
});

// Route pour l'horoscope d'un signe spécifique
app.get("/horoscope/:signe", (req, res) => {
  const signe = req.params.signe.toLowerCase();
  if (!signesData[signe]) {
    return res.redirect("/horoscope");
  }
  res.render("horoscope-signe", {
    signe,
    signeData: signesData[signe],
    prediction: genererHoroscope(signe),
  });
});

// Route pour afficher l’emoji vibratoire avec génération d'image si nécessaire
app.get("/:emoji", async (req, res) => {
  const emoji = decodeURIComponent(req.params.emoji);

  // Ignorer les requêtes non emoji comme favicon.ico
  if (!isEmoji(emoji)) {
    return res.status(404).render("vibrate", { emoji: "🍌" });
  }

  // Afficher la page avec Open Graph
  res.render("vibrate", { emoji });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
