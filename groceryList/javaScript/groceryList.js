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


let ingredientsLoop = (groceryListBody, data) => {

    for (let i = 0; i < data.recipe.ingredients.length; i++) {

      
        const ingredientsHolder = createUlElement();
        ingredientsHolder.className = ("ingredientsHolder");
        groceryListBody.appendChild(ingredientsHolder);

        const checkBox = checkBoxElement();
        checkBox.className = ("checkBox")
        ingredientsHolder.appendChild(checkBox);

        let ingredientsParagraph = createLiElement();
        ingredientsParagraph.className = "ingredientsLi";
        ingredientsParagraph.innerHTML = data.recipe.ingredients[i].food;
        ingredientsHolder.appendChild(ingredientsParagraph);

        let amount = createLiElement();
        amount.innerHTML = data.recipe.ingredients[i].quantity.toPrecision(1);
        ingredientsHolder.appendChild(amount);

        let measure = createLiElement();
        measure.innerHTML = data.recipe.ingredients[i].measure;
        ingredientsHolder.appendChild(measure);

       
    }
}

const mainElement = document.querySelector("main");


let groceryListLoop = (data,a) => {
    for (let l = 0; l < data.recipe.label[l].length; l++) {
        // create groceryList Body
        const groceryListBody = createDivElement();
        groceryListBody.className = ("groceryListBody");
        mainElement.append(groceryListBody);

        const groceryListTitle = createH3Element();
        groceryListTitle.innerHTML = (data.recipe.label);
        groceryListBody.appendChild(groceryListTitle);

        // create date Holder
        const date = createDivElement();
        date.className = ("date");
        date.innerText = addEveryWeekDay()[a];
        console.log(date);
        groceryListBody.appendChild(date);
        ingredientsLoop(groceryListBody, data);
    }
}


export default groceryListLoop;