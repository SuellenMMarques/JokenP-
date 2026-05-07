const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".list-menu-container");
const linkMenu = document.querySelectorAll(".link-menu");
let btnGestures = document.querySelectorAll(".btn-gestures");
let btnChosenUser = "";
const gestures = ["Pedra", "Papel", "Tesoura"];
let btnChosenAlexa
let pontUser = document.querySelector(".pont-user");
let pontAlexa = document.querySelector(".pont-alexa");
let numberPontUser = 0;
let numberPontAlexa = 0;
const btnReset = document.querySelector(".btn-reset");

btnMenu.addEventListener("click", function () {
    btnMenu.style.display = "none";
    menu.classList.toggle("active");
});

linkMenu.forEach(clickedLink);

function clickedLink(item) {
    item.addEventListener("click", function () {
        menu.classList.remove("active");
        btnMenu.style.display = "block";
    });
};

window.addEventListener("click", function (event) {
    if (menu.contains(event.target) == false && !btnMenu.contains(event.target)) {
        menu.classList.remove("active");
        btnMenu.style.display = "block";
    }
});

btnGestures.forEach(clickedGesture);

function clickedGesture(item) {
    item.addEventListener("click", function (event) {

        if (event.target.id == "pedra") {
            btnChosenUser = "Pedra";
        } else if (event.target.id == "papel") {
            btnChosenUser = "Papel";
        } else {
            btnChosenUser = "Tesoura";
        }

        chosenAlexa();
        checkWinner();
    });
};

function chosenAlexa() {
    let i = Math.floor(Math.random() * 3);
    btnChosenAlexa = gestures[i];
    console.log(btnChosenAlexa);
}

function checkWinner() {

    if (btnChosenUser === btnChosenAlexa) {
        alert("Empate: Ninguém ganhou!");
    } else if (btnChosenUser == "Pedra" && btnChosenAlexa == "Tesoura") {
        alert("Parabéns Você Ganhou!");
        numberPontUser += 1;
        pontUser.innerHTML = numberPontUser; 
    } else if (btnChosenUser == "Papel" && btnChosenAlexa == "Pedra") {
        alert("Parabéns Você Ganhou!");
        numberPontUser += 1;
        pontUser.innerHTML = numberPontUser; 
    } else if (btnChosenUser == "Tesoura" && btnChosenAlexa == "Papel") {
        alert("Parabéns Você Ganhou!");
        numberPontUser += 1;
        pontUser.innerHTML = numberPontUser; 
    } else {
        alert("Que Pena Você Perdeu!");
        numberPontAlexa += 1;
        pontAlexa.innerHTML = numberPontAlexa; 
    }
};

btnReset.addEventListener("click", function () {
    numberPontAlexa = 0;
    numberPontUser = 0;
    pontUser.innerHTML = 0;
    pontAlexa.innerHTML = 0;
});