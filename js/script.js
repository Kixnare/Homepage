{
    const welcome = () => {
        console.log("Suprise Mothaf*cka!");
    };

    const hideTable = () => {
        const table = document.querySelector(".section__table");
        const changeTableButtonText = document.querySelector(".js-changeTableButtonText");

        table.classList.toggle("section__table--hidden");
        changeTableButtonText.innerText = table.classList.contains("section__table--hidden") ? "Pokaż" : "Schowaj";
    };
    
    const init = () => {
        const hideTableButton = document.querySelector(".js-hideTableButton");
        hideTableButton.addEventListener("click", hideTable);
    };

welcome();
init();

}