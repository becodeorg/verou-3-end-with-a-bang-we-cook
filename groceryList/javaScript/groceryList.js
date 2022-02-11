import addEveryWeekDay from "./addEveryWeekDay.js";
import {
    createDivElement
} from "./createElements.js";
import {
    createH3Element
} from "./createElements.js";
import {
    createUlElement
} from "./createElements.js";
import {
    createLiElement
} from "./createElements.js";
import {
    checkBoxElement
} from "./createElements.js";

const mainElement = document.querySelector("main");


let groceryListLoop = (data) => {
    for (let l = 0; l < data.recipe.label[l].length; l++) {

        // create groceryList Body
        const groceryListBody = createDivElement();
        groceryListBody.className = ("groceryListBody");
        mainElement.appendChild(groceryListBody);

        // create groceryList Title
        const groceryListTitle = createH3Element();
        groceryListTitle.innerHTML = (data.recipe.label);
        groceryListBody.appendChild(groceryListTitle);
        ingredientsLoop(groceryListBody, dateLoop, data);
    }
    for (let i = 0; i < 7; i++) {
        // create date Holder
       const date = createDivElement();
       date.className = ("date");
       groceryListBody.appendChild(date);
       date.innerText = addEveryWeekDay();
       console.log(date);
       groceryListLoop(data);
   }
   for (let i = 0; i < data.recipe.ingredients.length; i++) {
    
    // create ingredientsHolder
    const ingredientsHolder = createUlElement();
    ingredientsHolder.className = ("ingredientsHolder");
    groceryListBody.appendChild(ingredientsHolder);

    // create checkBox
    const checkBox = checkBoxElement();
    checkBox.className = ("checkBox")
    ingredientsHolder.appendChild(checkBox);

    let amount = createLiElement();
    amount.innerHTML = data.recipe.ingredients[i].quantity.toPrecision(2);
    ingredientsHolder.appendChild(amount);

    let measure = createLiElement();
    measure.innerHTML = data.recipe.ingredients[i].measure;
    ingredientsHolder.appendChild(measure);

    let ingredientsParagraph = createLiElement();
    ingredientsParagraph.className = "ingredientsLi";
    ingredientsParagraph.innerHTML = data.recipe.ingredients[i].food;
    ingredientsHolder.appendChild(ingredientsParagraph);
}

}






export default groceryListLoop;