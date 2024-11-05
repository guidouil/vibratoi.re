const express = require("express");
const path = require("path");
const { signesData, genererHoroscope } = require("./public/data/signes.js");
const expressLayouts = require("express-ejs-layouts");

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
  res.render("about", { title: "À propos de Vibratoi.re®" });
});

// Route pour la page de sélection du signe
app.get("/horoscope", (req, res) => {
  res.render("horoscope", { title: "Horoscope Vibratoi.re®", signesData });
});

// Route pour l'horoscope d'un signe spécifique
app.get("/horoscope/:signe", (req, res) => {
  const signe = req.params.signe.toLowerCase();
  const signeData = signesData.find((s) => s.id === signe);
  if (!signeData) {
    return res.redirect("/horoscope");
  }
  res.render("horoscope-signe", {
    title: `Horoscope ${signeData.nom}`,
    signeData,
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
  res.render("vibrate", { title: `Vibratoi.re® ${emoji}`, emoji });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
