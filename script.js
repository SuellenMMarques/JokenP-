const button = document.querySelector(".btn-menu");
const nav = document.querySelector(".list-menu-container");

// Função para abrir/fechar o menu
button.addEventListener("click", (event) => {
  event.stopPropagation(); // Impede que o clique no botão chegue no 'window'
  nav.classList.toggle("active");
});

// Lógica para fechar ao clicar fora ou em um link
window.addEventListener("click", (event) => {
  // Se o menu está aberto E o clique NÃO foi dentro do menu
  if (nav.classList.contains("active") && !nav.contains(event.target)) {
    nav.classList.remove("active");
  }
});

// Opcional: Fechar o menu automaticamente ao clicar em um link (melhor UX)
const menuLinks = document.querySelectorAll(".list-menu-container a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});