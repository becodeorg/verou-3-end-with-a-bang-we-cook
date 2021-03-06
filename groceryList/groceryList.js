import groceryListLoop from "./javaScript/groceryList.js"
import addEveryWeekDay from "./javaScript/addEveryWeekDay.js";
addEveryWeekDay();

let foodFetch = async () => {
    let values = JSON.parse(localStorage.getItem("chosenRecipe"));
    for (let a = 0; a < values.length; a++) {
        await fetch('https://api.edamam.com/api/recipes/v2/' + values[a] + '?type=public&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')  
            .then(response => response.json())
            .then(data => {
                console.log(data);
                groceryListLoop(data,a); 


            });
    }
}
foodFetch();

const createH2Element = () => {
    const newH2Div = document.createElement("h2");
    return newH2Div;
}

const createDivElement = () => {
    const newDiv = document.createElement("div");
    return newDiv;
}

const main = document.querySelector("main");
const pageTitleDiv = createDivElement();
pageTitleDiv.className = "pageTitleHolder";
main.append(pageTitleDiv);
const pageTitle = createH2Element();
pageTitle.className = "pageTitle";
pageTitle.innerHTML = "Ingredient Lists";
pageTitleDiv.append(pageTitle);


function dDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    dDown();

}