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


// fetch('https://api.edamam.com/api/recipes/v2?type=public&q=british&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
//   .then(response => response.json())
//   .then(data => console.log(data));


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

const groceryList = () => {
    // Link to HTML
    const main = document.querySelector("main");

    // create groceryListBody
    const groceryListBody = createDivElement();
    groceryListBody.className = ("groceryListBody");
    main.appendChild(groceryListBody);

    // create groceryListTitle
    const groceryListTitle = createH1Element();
    groceryListTitle.innerHTML = ("Grocery List");
    groceryListBody.appendChild(groceryListTitle);

    const ingredientsHolder = createDivElement();
    ingredientsHolder.className = ("ingredientHolder");
}
groceryList();
console.log(main);
// TODO create nodes for api data
// TODO create check box ? 
// TODO ingredients quantity's
// TODO ingredients types ? 
// TODO ingredients name paragraph
// TODO ingredients amount
// TODO create Input Customer
// TODO groceryList Mail option?
console.log("Push the Button");