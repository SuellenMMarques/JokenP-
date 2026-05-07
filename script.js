const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".list-menu-container");
const linkMenu = document.querySelectorAll(".link-menu");

linkMenu.forEach(clickedLink);

btnMenu.addEventListener("click", function () {
    btnMenu.style.display = "none";
    menu.classList.toggle("active");
});

function clickedLink(item) {
    item.addEventListener("click", function () {
        menu.classList.remove("active");
        btnMenu.style.display = "block";
    });
};