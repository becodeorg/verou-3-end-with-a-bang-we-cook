let day = () => {
    let day = new Date();
    let week = new Array(
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    );
    // TODO Get more date info for groceryList 
    for (i = 0; i < 7; i++) {
        console.log(week[(day.getDay() + 1 + i) % 7]);
    }
}

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
// TODO create groceryList Holder
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
    for (i = 0; i < 7; i++) {

        // create ingredientsHolder
        const ingredientsHolder = createUlElement();
        ingredientsHolder.className = ("ingredientsHolder");
        groceryListBody.appendChild(ingredientsHolder);

        // create ingredientsParagraph
        const ingredientsParagraph = createLiElement();
        ingredientsParagraph.innerText = data.hits[0].recipe.ingredientLines[i];
        ingredientsHolder.appendChild(ingredientsParagraph);
    }
    //console.log(data.hits[i].recipe.ingredients[i].text); // some DATA index
}

// TODO create nodes for api data
// TODO create check box ? 
// TODO ingredients quantity's
// TODO ingredients types ? 
// TODO ingredients name paragraph
// TODO ingredients amount
// TODO create Input Customer
// TODO groceryList Mail option?
console.log("Push the Button");