//Ellen Seghers

//Get your a tag element out of your html by the classname
const buttons = document.querySelectorAll(".plusImage");

const changeButtonImage = (index) => {
    const selectedElement = buttons[index]
    console.log(selectedElement.src);
    if(selectedElement.src.includes("plusmark.png")){
        localStorage.setItem(selectedElement,selectedElement.getAttribute);
        selectedElement.src = "checkmark.png";
    }
    else{
        selectedElement.src = "plusmark.png";
        localStorage.removeItem(selectedElement);
    }
    console.log(selectedElement);
}

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        changeButtonImage(index)
    });
})
