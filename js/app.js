/* ===================================================
   SISTEMA DE NAVEGAÇÃO ENTRE TELAS – SIGAE
=================================================== */

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(`screen-${id}`).classList.add("active");

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.screen === id);
  });

  document.querySelectorAll(".secondary-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.screen === id);
  });
}

function initNavigation() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      showScreen(btn.dataset.screen);
    });
  });

  document.querySelectorAll(".secondary-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      showScreen(btn.dataset.screen);
    });
  });

  showScreen("login"); // tela inicial
}

/* ===================================================
   FORMULÁRIO DE LOGIN (SIMULAÇÃO)
=================================================== */

function initForms() {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showScreen("aluno-dashboard");
  });
}

/* INICIALIZAÇÃO */
initNavigation();
initForms();
