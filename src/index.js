
document.addEventListener('DOMContentLoaded', function() {
  // Il tuo codice qui
window.addEventListener("scroll", function () {
  var scrollingDiv = document.getElementById("scrollingDiv");

  // Calcola la nuova posizione in base allo scroll
  var newPosition = -200 + window.scrollY;

  // Applica la nuova posizione al div
  scrollingDiv.style.right = newPosition + "px";
});

window.addEventListener("scroll", function () {
  var scrollingDiv2 = document.getElementById("scrollingDiv-2");

  // Controlla se la finestra è stata scrollata di almeno 300 pixel
  if (window.scrollY > 1400) {
    // Mostra il div
    scrollingDiv2.style.display = "block";

    // Calcola la nuova posizione in base allo scroll
    var newPosition = -200 + (window.scrollY - 1400);

    // Applica la nuova posizione al div
    scrollingDiv2.style.left = newPosition + "px";
  } else {
    // Nascondi il div se non hai ancora raggiunto il punto di scorrimento desiderato
    scrollingDiv2.style.display = "none";
  }
});

});
