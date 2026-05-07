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


.list-menu-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    position: absolute;
    top: 100%;
    /* Isso faz ele começar exatamente onde o header termina */
    right: 0;
    background-color: #c08497c5;
    width: 100%;
    display: none;
    z-index: 1000;
    /* Garante que ele fique por cima do conteúdo */
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
}

.list-menu-container ul li {
    display: flex;
    list-style: none;
    justify-content: center;
}

.menu-btn-container {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.list-menu-container {
    position: absolute;
    top: 60px;
    right: 0;
    background: #C08497;
    width: 100%;
    display: none;
    opacity: 0;
    /* Começa invisível */
    visibility: hidden;
    /* Impede cliques enquanto escondido */
    transform: translateY(-20px);
    /* Começa 20px acima da posição original */
    transition: all 0.4s ease;
    display: block !important;
    /* Garante que o display seja block para o menu funcionar corretamente */
}

.list-menu-container ul {
    display: flex !important;
    flex-direction: column;
    padding: 1.25rem;
    gap: 1rem;
}

.list-menu-container.active {
    opacity: 1;
    /* Fica totalmente visível */
    visibility: visible;
    /* Torna o menu clicável */
    transform: translateY(0);
}