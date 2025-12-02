/* --------------------------------------------------------
   SIGAE – Lógica de navegação e formulários
---------------------------------------------------------*/

// Função que troca tela
function showScreen(id) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach(s => s.classList.remove("active"));

  const active = document.getElementById(`screen-${id}`);
  if (active) active.classList.add("active");
}

// Inicializa navegação
function initNavigation() {
  // botões principais (login, aluno, etc)
  const mainTabs = document.querySelectorAll(".tab-btn");

  mainTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      showScreen(btn.dataset.screen);
    });
  });

  // botões secundários
  const secondaryTabs = document.querySelectorAll(".secondary-tab-btn");

  secondaryTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      showScreen(btn.dataset.screen);
    });
  });

  // Tela inicial
  showScreen("login");
}

// Login fake só troca para dashboard
function initLogin() {
  const form = document.getElementById("form-login");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    showScreen("aluno-dashboard");
  });
}

// Inicia tudo
(function init() {
  initNavigation();
  initLogin();
})();
