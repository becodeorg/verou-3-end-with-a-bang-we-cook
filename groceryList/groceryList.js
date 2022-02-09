// let day = () => {
//     let day = new Date();
//     let week = new Array(
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday"
//     );
//     // TODO Get more date info for groceryList 
//     for (i = 0; i < 7; i++) {
//         console.log(week[(day.getDay() + 1 + i) % 7]);
//     }
// }

fetch('https://api.edamam.com/api/recipes/v2?type=public&q=british&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        groceryList(data);
    });

//  What should i do for the groceryList

// TODO events on Card in random Card Pick 
// TODO Look in Variables for links
// TODO Check out ingredients measure options
const createDivElement = () => {
    const newDiv = document.createElement("div");
    return newDiv;
}

const createParagraphElement = () => {
    const newParagraph = document.createElement("p");
    return newParagraph;
}

const createH1Element = () => {
    const newH1 = document.createElement("h1");
    return newH1;
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
    let checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    return checkBox;
  }

const groceryList = (data) => {
    // Link to HTML
    const main = document.querySelector("main");

    // create groceryList Body
    const groceryListBody = createDivElement();
    groceryListBody.className = ("groceryListBody");
    main.appendChild(groceryListBody);

    // create groceryList Title
    const groceryListTitle = createH1Element();
    groceryListTitle.innerHTML = ("Grocery List");
    groceryListBody.appendChild(groceryListTitle);

    // create date Holder
    const date = createDivElement();
    date.className = ("date");
    date.innerText = ("get date of js");
    groceryListBody.appendChild(date);

    // create a loop for ingredients
    for (let i = 0; i < data.hits[0].recipe.ingredients.length; i++) {

        // create ingredientsHolder
        const ingredientsHolder = createUlElement();
        ingredientsHolder.className = ("ingredientsHolder");
        groceryListBody.appendChild(ingredientsHolder);

        // create checkBox
        const checkBox = checkBoxElement();
        ingredientsHolder.appendChild(checkBox);
    
        //create ingredientsParagraph
        let ingredientsParagraph = createLiElement();
        ingredientsParagraph.innerHTML = data.hits[0].recipe.ingredients[i].food;
        ingredientsHolder.append("ingredientsParagraph");

        console.log(ingredientsParagraph); // log check
    }
    
}

//  // create recipeNameParagraph
//  let recipeNameParagraph = createLiElement();
//  recipeNameParagraph.innerHTML = data.hits[i].recipe.label; // recipe Name
//  ingredientsHolder.appendChild(recipeNameParagraph);
//  console.log(recipeNameParagraph); // log check

// TODO create nodes for api data
// TODO create check box ? 
// TODO ingredients quantity's
// TODO ingredients types ? 
// TODO ingredients name paragraph
// TODO ingredients amount
// TODO create Input Customer
// TODO groceryList Mail option?
console.log("Push the Button");