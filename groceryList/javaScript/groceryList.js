import addEveryWeekDay from "./addEveryWeekDay.js";
import {createDivElement} from "./createElements.js";
import {createH3Element} from "./createElements.js";
import {createUlElement} from "./createElements.js";
import {createLiElement} from "./createElements.js";
import {checkBoxElement} from "./createElements.js";

const mainElement = document.querySelector("main");

let groceryListLoop = (data) => {
    for (let l = 0; l < 7; l++) {
        // create groceryList Body
        const groceryListBody = createDivElement();
        groceryListBody.className = ("groceryListBody");
        mainElement.appendChild(groceryListBody);

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

export default groceryListLoop;