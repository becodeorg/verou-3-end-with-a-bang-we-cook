//Ellen Seghers
import {Search} from "./fetchApi.js";

//Change the buttons images when you click or unclick them
    //Get your a tag element out of your html by the classname
    const buttons = document.querySelectorAll(".plusImage");

const changeButtonImage = (index) => {
    const selectedElement = buttons[index];
    if(selectedElement.src.includes("plusmark.png")){
        console.log(selectedElement);
        localStorage.setItem(selectedElement.getAttribute("attribute"),selectedElement.getAttribute("attribute"));
        selectedElement.src = "checkmark.png";
        console.log(localStorage.getItem(selectedElement.getAttribute("attribute")));
    }
    else{
        selectedElement.src = "plusmark.png";
        localStorage.removeItem(selectedElement.getAttribute("attribute"));
        console.log(localStorage.getItem(selectedElement.getAttribute("attribute")));
    }
}

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            changeButtonImage(index)
        });
    })

//Add an event listener to the search button
    //Get your search button out of your html by classname
    const searchButton = document.querySelector(".searchBarButton");
    const formInput = document.getElementById("searchBar");

    //Add an event listener on the search button
    searchButton.addEventListener("click", Search);

    //Make a function for searching by pressing enter
    formInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            Search();
        }
    });
    console.log(formInput.value);