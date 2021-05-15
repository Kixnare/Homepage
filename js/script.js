{
    const welcome = () => {
        console.log("Suprise Mothaf*cka!");
    };

    const hideTable = () => {
        const table = document.querySelector(".table");
        const changeTableButtonText = document.querySelector(".js-changeTableButtonText");

        table.classList.toggle("table--hidden");
        changeTableButtonText.innerText = table.classList.contains("table--hidden") ? "Pokaż" : "Schowaj";
    };
    
    const init = () => {
        const hideTableButton = document.querySelector(".js-hideTableButton");
        hideTableButton.addEventListener("click", hideTable);
    };

welcome();
init();

}