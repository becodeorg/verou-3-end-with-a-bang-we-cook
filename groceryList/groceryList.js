import bigList from "./javaScript/bigList.js"
import groceryListLoop from "./javaScript/groceryList.js"

let values=JSON.parse(localStorage.getItem("chosenRecipe"));
for (let a = 0; a < values.length; a++){
fetch(values[a]) // 
    .then(response => response.json())
    .then(data => {
        console.log(data);
        groceryListLoop(data); // date Problems
    
    });
}
// bigList(data); // can not put in fetch.... must be one list




const createDivElement = () => {
    const newDiv = document.createElement("div");
    return newDiv;
}

const main = document.querySelector("main");
const pageTitle = createDivElement();
pageTitle.className = "pageTitle";
pageTitle.innerHTML = "Shopping List";
main.append(pageTitle);

const listButton = document.createElement("button");
listButton.id = "bigListButton";
listButton.innerHTML = "Get The Whole List"
pageTitle.appendChild(listButton);




listButton.addEventListener("click", function () {
    const change = document.getElementsByClassName("bigListBody").style.display = "block"; // wont apply
    change();
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
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

    console.log("Push the Button");
}