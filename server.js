const express = require("express");
const path = require("path");
const { signesData, genererHoroscope } = require("./public/data/signes.js");
const expressLayouts = require("express-ejs-layouts");
const { genererThemoji } = require("./public/data/themoji.js");
const emojibaseData = require("./public/data/emojibase-data.json");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurer EJS et les layouts
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/layout");
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
  res.render("about", { title: "Énergie Vibratoi.®e" });
});

// Route pour la page de sélection du signe
app.get("/horoscope", (req, res) => {
  res.render("horoscope", { title: "Horoscope Vibratoi.®e", signesData });
});

// Route pour l'horoscope d'un signe spécifique
app.get("/horoscope/:signe", (req, res) => {
  const signe = req.params.signe.toLowerCase();
  const signeData = signesData.find((s) => s.id === signe);
  if (!signeData) {
    return res.redirect("/horoscope");
  }
  res.render("horoscope-signe", {
    title: `Horoscope ${signeData.nom} ${signeData.emoji}`,
    signeData,
    prediction: genererHoroscope(signe),
  });
});

app.post("/api/themoji", express.json(), (req, res) => {
  const { emojis } = req.body;
  if (!emojis || !Array.isArray(emojis) || emojis.length !== 5) {
    return res.status(400).json({ error: "5 emojis sont requis" });
  }
  const themoji = genererThemoji(emojis, emojibaseData);
  res.json(themoji);
});

app.get("/themoji", (req, res) => {
  res.render("themoji", { title: "Themoji Vibratoi.®e" });
});

// Route pour afficher l’emoji vibratoire avec génération d'image si nécessaire
app.get("/:emoji", async (req, res) => {
  const emoji = decodeURIComponent(req.params.emoji);

  // Ignorer les requêtes non emoji comme favicon.ico
  if (!isEmoji(emoji)) {
    return res
      .status(404)
      .render("vibrate", { title: "Symbole Vibratoi.®e", emoji: "🍌" });
  }

  // Afficher la page avec Open Graph
  res.render("vibrate", { title: "Symbole Vibratoi.®e", emoji });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
