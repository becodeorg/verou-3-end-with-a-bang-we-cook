//Ellen Seghers

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
