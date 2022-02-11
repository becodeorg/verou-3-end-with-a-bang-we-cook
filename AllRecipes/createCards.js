//Ellen Seghers
import {Search} from "./fetchApi.js";

//Change the buttons images when you click or unclick them
//Get your a tag element out of your html by the classname
const buttons = document.querySelectorAll(".plusImage");

const changeButtonImage = (index) => {
    const selectedElement = buttons[index];
    if(selectedElement.src.includes("plusmark.png")){

        if(localStorage.getItem("chosenRecipe")){
           //puts new values in localstorage
            let valuesRecipe=JSON.parse(localStorage.getItem("chosenRecipe"));
            let newValueRecipe=selectedElement.getAttribute("id");
            valuesRecipe.push(newValueRecipe);
            localStorage.setItem("chosenRecipe",JSON.stringify(valuesRecipe));

            let valuesImage=JSON.parse(localStorage.getItem("chosenImage"));
            let newValueImage=selectedElement.getAttribute("img");
            valuesImage.push(newValueImage);
            localStorage.setItem("chosenImage",JSON.stringify(valuesImage));

            let valuesTitle=JSON.parse(localStorage.getItem("chosenTitle"));
            let newValueTitle=selectedElement.getAttribute("title");
            valuesTitle.push(newValueTitle);
            localStorage.setItem("chosenTitle",JSON.stringify(valuesTitle));
        }else {
            //puts the first value in local storage
            const startValue=[
               selectedElement.getAttribute("id")
            ];            
            localStorage.setItem("chosenRecipe",JSON.stringify(startValue));
            const startValueImg=[
                selectedElement.getAttribute("img")
             ];            
             localStorage.setItem("chosenImage",JSON.stringify(startValueImg));
             const startValueTitle=[
                selectedElement.getAttribute("title")
             ];            
             localStorage.setItem("chosenTitle",JSON.stringify(startValueTitle));
        }
        selectedElement.src = "checkmark.png";
    }
    else{//verwijderd value uit local storage+ plusmark ipv checkmark
        selectedElement.src = "plusmark.png";        
        let values=JSON.parse(localStorage.getItem("chosenRecipe"));
        //console.log(values);
        for(let i=0;i<values.length;i++){
            if(values[i]==selectedElement.getAttribute("id")){
                //console.log("een localstorag item zou moeten verwijderen?")
                values.splice(i,1);
                localStorage.setItem("chosenRecipe",JSON.stringify(values))
            }
        }
        values=JSON.parse(localStorage.getItem("chosenImage"));
        //console.log(values);
        for(let i=0;i<values.length;i++){
            if(values[i]==selectedElement.getAttribute("img")){
                //console.log("een localstorag item zou moeten verwijderen?")
                values.splice(i,1);
                localStorage.setItem("chosenImage",JSON.stringify(values))
            }
        }
        values=JSON.parse(localStorage.getItem("chosenTitle"));
        //console.log(values);
        for(let i=0;i<values.length;i++){
            if(values[i]==selectedElement.getAttribute("title")){
                //console.log("een localstorag item zou moeten verwijderen?")
                values.splice(i,1);
                localStorage.setItem("chosenTitle",JSON.stringify(values))
            }
        }
    }
}

    /**
     * This function creates a click event listener on all plusmark images and
     * calls the changeButtonImage function whenever these images are clicked
     */
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

    /**
     * Because off this function you can search by pressing enter
     */
    //Make a function for searching by pressing enter
        formInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                Search();
            }
        });
        console.log(formInput.value);


//toggle between hiding and showing the dropdown content
    //Adda function that gets your Id element off the drop down our your html
    function hamburgerMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.hamburgerButton')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        hamburgerMenu();

        console.log("Push the Button");
    }