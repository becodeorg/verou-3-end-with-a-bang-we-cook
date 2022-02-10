//Ellen Seghers

//Get your a tag element out of your html by the classname
const buttons = document.querySelectorAll(".plusImage");

const changeButtonImage = (index) => {
    const selectedElement = buttons[index];
    if(selectedElement.src.includes("plusmark.png")){
        localStorage.setItem(selectedElement,selectedElement.getAttribute("attribute"));
        selectedElement.src = "checkmark.png";
        console.log(localStorage.getItem(selectedElement));
    }
    else{
        selectedElement.src = "plusmark.png";
        localStorage.removeItem(selectedElement);
        console.log(localStorage.getItem(selectedElement));
    }
}

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        changeButtonImage(index)
    });
})
