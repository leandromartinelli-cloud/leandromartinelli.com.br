/* Menu mobile e rodape dinamico.
   Arquivo externo porque a CSP do site usa script-src 'self',
   que bloqueia scripts inline. */

(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (!toggle || !menu) return;

  function fechar() {
    menu.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  }

  toggle.addEventListener("click", function () {
    var aberto = menu.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
    toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });

  menu.addEventListener("click", function (evento) {
    if (evento.target.tagName === "A") fechar();
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") fechar();
  });
})();

document.querySelectorAll("footer p").forEach(function (p) {
  p.textContent = p.textContent.replace(/© \d{4}/, "© " + new Date().getFullYear());
});