//Ellen Seghers

//Get your a tag element out of your html by the classname
const buttons = document.querySelectorAll(".plusImage");

const changeButtonImage = (index) => {
    const selectedElement = buttons[index]
    console.log(selectedElement.src);
    if(selectedElement.src.includes("plusmark.png")){
        selectedElement.classList.add("selected");
        selectedElement.src = "checkmark.png";
    }
    else{
        selectedElement.src = "plusmark.png";
        selectedElement.classList.remove("selected");
    }
    console.log(selectedElement);
}

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        changeButtonImage(index)
    });
})
