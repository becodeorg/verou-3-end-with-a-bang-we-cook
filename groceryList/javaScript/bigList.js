import {createDivElement} from "./createElements.js";
import {createH3Element} from "./createElements.js";
import {createUlElement} from "./createElements.js";
import {createLiElement} from "./createElements.js";
import {checkBoxElement} from "./createElements.js";


const mainElement = document.querySelector("main");

let bigList = (data) => {

    const bigListBody = createDivElement();
    bigListBody.className = ("bigListBody");
    mainElement.appendChild(bigListBody);

    const bigListTitle = createH3Element();
    bigListTitle.className = ("bigListTitle")
    bigListTitle.innerHTML = ("Big Shopping List");
    bigListBody.appendChild(bigListTitle);

    for (let i = 0; i < data.hits[0].recipe.ingredients.length; i++) {

        const bigListIngredientsHolder = createUlElement();
        bigListIngredientsHolder.className = ("bigListIngredientsHolder");
        bigListBody.appendChild(bigListIngredientsHolder);

        // create checkBox
        const checkBox = checkBoxElement();
        checkBox.className = ("checkBox")
        bigListIngredientsHolder.append(checkBox);

        let amount = createLiElement();
        amount.innerHTML = data.hits[0].recipe.ingredients[i].quantity.toPrecision(2);
        bigListIngredientsHolder.appendChild(amount);

        let measure = createLiElement();
        measure.innerHTML = data.hits[0].recipe.ingredients[i].measure;
        bigListIngredientsHolder.appendChild(measure);

        //create ingredientsParagraph
        let ingredientsParagraph = createLiElement();
        ingredientsParagraph.className = "ingredientsLi";
        ingredientsParagraph.innerHTML = data.hits[i].recipe.ingredients[i].food;
        bigListIngredientsHolder.appendChild(ingredientsParagraph);
    }
}

export default bigList;