(function () {
  var WHATSAPP = "https://wa.me/message/Y43IPYV4PWANA1";
  var APP = "https://app.ecorpa.com";

  function mount() {
    var wrap = document.getElementById("ecorpa-header-ctas");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.id = "ecorpa-header-ctas";
      wrap.className = "ecorpa-header-ctas";
      wrap.innerHTML =
        '<a class="ecorpa-talk" href="' +
        WHATSAPP +
        '" target="_blank" rel="noopener noreferrer">Habla con nosotros</a>' +
        '<a class="ecorpa-start" href="' +
        APP +
        '" target="_blank" rel="noopener noreferrer">Comenzar</a>';
      document.body.appendChild(wrap);
      return;
    }
    var start = wrap.querySelector(".ecorpa-start");
    if (start) start.textContent = "Comenzar";
  }

  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
  window.addEventListener("load", mount);
})();
