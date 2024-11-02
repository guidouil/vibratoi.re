// retour page précédente si la page precédente existe sinon aller à l'accueil
document.getElementById("emoji").addEventListener("click", () => {
  // Vibration du téléphone
  if (navigator.vibrate) {
    navigator.vibrate([
      420, 100, 420, 100, 420, 100, 420, 100, 420, 100, 420, 100, 420,
    ]);
  }
  // ajouter le meme emoji dans l'url
  window.location.assign(
    `${window.location.pathname}${document.getElementById("emoji").textContent}`
  );
});

// retour à la page précédente si la page précédente existe sinon aller à l'accueil
document.getElementById("backButton").addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.assign("/");
  }
});
