//Ellen Seghers

const create28Cards = () => {
    for (let i=0 ; i<28 ; i++){
        create1Card();
    }
}

//Create card
const create1Card = () => {
    //Create elements you need for the cards
    const div1 = document.createElement("div");
    const image = document.createElement("img");
    const div2 = document.createElement("div");
    const pTag = document.createElement("p");
    const div3 = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    //Assign the type of button to the html
    button1.innerHTML = "Add to week planning";
    button2.innerHTML = "preparation method";

    //Add the elements to the html
    document.body.append(div1);
    div1.appendChild(image);
    div1.appendChild(div2);
    div2.appendChild(pTag);
    div1.appendChild(div3);
    div3.appendChild(button1);
    div3.appendChild(button2);

    //Add classnames to the div tags
    div1.className = "card";
    div3.className = "buttons";

    //Add click listener
    clickListener(div1);
}

const clickListener = (div1) => {
    div1.addEventListener("click", addBorder);
}

const addBorder = (event) => {
    console.log(event.target);
}

create28Cards();
