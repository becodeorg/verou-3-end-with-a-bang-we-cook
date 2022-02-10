export const createDivElement = () => {
    const newDiv = document.createElement("div");
    return newDiv;
}
export const createParagraphElement = () => {
    const newParagraph = document.createElement("p");
    return newParagraph;
}
export const createH3Element = () => {
    const newH3 = document.createElement("h3");
    return newH3;
}
export const createUlElement = () => {
    const newUl = document.createElement("ul")
    return newUl;
}
export const createLiElement = () => {
    const newLi = document.createElement("li");
    return newLi;
}
export const checkBoxElement = () => {
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    return checkBox;
}
