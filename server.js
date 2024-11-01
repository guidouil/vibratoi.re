const express = require("express");
const path = require("path");
const fs = require("fs-extra");
const puppeteer = require("puppeteer");

const app = express();
const PORT = process.env.PORT || 3000;

// Configurer EJS comme moteur de rendu et configurer le dossier public
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Dossier où stocker les images générées
const imagesDir = path.join(__dirname, "public/images");

// Fonction pour vérifier si un caractère est un emoji
function isEmoji(char) {
  const emojiRegex = /[\p{Emoji}]/u;
  return emojiRegex.test(char);
}

// Fonction pour générer une image Open Graph avec l'emoji en utilisant Puppeteer
async function generateEmojiImage(emoji) {
  // Dossier où l'image sera sauvegardée
  const imagePath = path.join(
    imagesDir,
    `emoji_${encodeURIComponent(emoji)}.png`
  );

  // Initialiser Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Générer le contenu HTML avec l'emoji
  const htmlContent = `
        <html>
            <body style="display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: white;">
                <span style="font-size: 500px;">${emoji}</span>
            </body>
        </html>
    `;

  // Charger le contenu HTML
  await page.setContent(htmlContent);

  // Définir la taille de la page pour correspondre à l'image souhaitée
  await page.setViewport({ width: 1200, height: 630 });

  // Prendre une capture d'écran et sauvegarder
  await page.screenshot({ path: imagePath });

  // Fermer le navigateur
  await browser.close();
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
  if (!isEmoji(emoji) || emoji.length > 2) {
    return res.status(404).send("Not found");
  }

  // Afficher la page avec Open Graph
  res.render("vibrate", { emoji });

  const imagePath = path.join(
    imagesDir,
    `emoji_${encodeURIComponent(emoji)}.png`
  );

  // Si l'image n'existe pas, la générer
  if (!fs.existsSync(imagePath)) {
    await generateEmojiImage(emoji);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
