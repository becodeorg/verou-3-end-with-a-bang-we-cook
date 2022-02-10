import bigList from "./javaScript/bigList.js"
import groceryListLoop from "./javaScript/groceryList.js"

fetch('https://api.edamam.com/api/recipes/v2?type=public&q=british&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        bigList(data);
        groceryListLoop(data);
    });

//  What should i do for the groceryList

// TODO events on Card in random Card Pick 
// TODO Look in Variables for links
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




listButton.addEventListener("click", function (){
    const change = document.getElementById("bigListBody").style.display ="flex";
});



// TODO create Input Customer
// TODO groceryList Mail option?
console.log("Push the Button");