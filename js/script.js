console.log("Suprise Mothaf*cka!");

let button = document.querySelector(".section__button");
let table = document.querySelector(".section__table");
let showText = "Pokaż Tabelkę";
let hideText = "Schowaj Tabelkę";

button.innerText = showText;

button.addEventListener("click", () => {
    table.classList.toggle("section__hidden");
    button.innerText = table.classList.contains("section__hidden") ? showText : hideText;
});