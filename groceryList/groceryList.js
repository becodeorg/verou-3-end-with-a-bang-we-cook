const addEveryWeekDay = () => {
    const weekDay = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let everyDay = [];
    for (let i = 0; i < 7; i++) {
        let day = new Date().getDay();
        everyDay.push(weekDay[(day + i) % 7]);
    }
    return everyDay;
}
addEveryWeekDay();

fetch('https://api.edamam.com/api/recipes/v2?type=public&q=british&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        groceryListLoop(data);
    });

//  What should i do for the groceryList

// TODO events on Card in random Card Pick 
// TODO Look in Variables for links
const createDivElement = () => {
    const newDiv = document.createElement("div");
    return newDiv;
}
const createParagraphElement = () => {
    const newParagraph = document.createElement("p");
    return newParagraph;
}
const createH3Element = () => {
    const newH3 = document.createElement("h3");
    return newH3;
}
const createUlElement = () => {
    const newUl = document.createElement("ul")
    return newUl;
}
const createLiElement = () => {
    const newLi = document.createElement("li");
    return newLi;
}
const checkBoxElement = () => {
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    return checkBox;
}
const main = document.querySelector("main");
const pageTitle = createDivElement();
pageTitle.className = "pageTitle";
pageTitle.innerHTML = "Shopping List";
main.append(pageTitle);
console.log(pageTitle);

let groceryListLoop = (data) => {
    for (let l = 0; l < 7; l++) {
        // create groceryList Body
        const groceryListBody = createDivElement();
        groceryListBody.className = ("groceryListBody");
        main.appendChild(groceryListBody);

        // create groceryList Title
        const groceryListTitle = createH3Element();
        groceryListTitle.innerHTML = (data.hits[l].recipe.label);
        groceryListBody.appendChild(groceryListTitle);

        // create date Holder
        const date = createDivElement();
        date.className = ("date");
        date.innerText = addEveryWeekDay()[l];
        groceryListBody.appendChild(date);
        ingredientsLoop(groceryListBody, data);
    }
}
// ingredients element LOOP
let ingredientsLoop = (groceryListBody, data) => {
    // create a loop for ingredients
    for (let i = 0; i < data.hits[0].recipe.ingredients.length; i++) {

        // create ingredientsHolder
        const ingredientsHolder = createUlElement();
        ingredientsHolder.className = ("ingredientsHolder");
        groceryListBody.appendChild(ingredientsHolder);

        // create checkBox
        const checkBox = checkBoxElement();
        checkBox.className = ("checkBox")
        ingredientsHolder.appendChild(checkBox);

        let amount = createLiElement();
        amount.innerHTML = data.hits[0].recipe.ingredients[i].quantity.toPrecision(2);
        ingredientsHolder.appendChild(amount);

        let measure = createLiElement();
        measure.innerHTML = data.hits[0].recipe.ingredients[i].measure;
        ingredientsHolder.appendChild(measure);

        

        //create ingredientsParagraph
        let ingredientsParagraph = createLiElement();
        ingredientsParagraph.className = "ingredientsLi";
        ingredientsParagraph.innerHTML = data.hits[0].recipe.ingredients[i].food;
        ingredientsHolder.appendChild(ingredientsParagraph);    
    }

}

// TODO create Input Customer
// TODO groceryList Mail option?
console.log("Push the Button");