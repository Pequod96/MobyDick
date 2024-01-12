document.addEventListener("DOMContentLoaded", function () {
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

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-wrap .menu a");
  const checkbox = document.querySelector(".menu-wrap .toggler");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Chiudi l'hamburger menu impostando 'checked' a false
      checkbox.checked = false;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const musicToggle = document.getElementById("music-toggle");

  musicToggle.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }

    updateMusicIcon(); // Aggiorna l'icona in base allo stato corrente
  });

  // Funzione per aggiornare l'icona in base allo stato corrente
  function updateMusicIcon() {
    const icon = musicToggle.querySelector("img");
    if (audioPlayer.paused) {
      icon.src = "./asset/images/icona-musica-play.png";
      icon.alt = "Icona Musica Play";
      icon.setAttribute("data-state", "play");
    } else {
      icon.src = "./asset/images/icona-musica-pausa.png";
      icon.alt = "Icona Musica Pausa";
      icon.setAttribute("data-state", "pause");
    }
  }
});