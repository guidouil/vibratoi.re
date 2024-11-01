// Vibration du téléphone
if (navigator.vibrate) {
  navigator.vibrate([200, 100, 200]);
}

// Partage de l'URL
document.getElementById("shareButton").addEventListener("click", async () => {
  const shareData = {
    title: "Vibratoire",
    text: "Regarde cet emoji qui vibre !",
    url: window.location.href,
  };

  try {
    await navigator.share(shareData);
    alert("Lien partagé avec succès !");
  } catch (err) {
    console.error("Erreur lors du partage:", err);
  }
});
