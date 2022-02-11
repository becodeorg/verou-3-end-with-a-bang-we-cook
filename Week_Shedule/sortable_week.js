//drag and drop menu's
//followed this guide: https://www.html5rocks.com/en/tutorials/dnd/basics//
document.addEventListener('DOMContentLoaded', (event) => {
var dragSrcEl=null;
function handleDragStart(e) {
  this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
  this.style.opacity = '1';
 
  return false;
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}
function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.style.opacity = '1';
    dragSrcEl.style.opacity='1';
    this.innerHTML = e.dataTransfer.getData('text/html');
    //TODO: write code to localstorage get and set the order of the array.
  }

  return false;
}

let items = document.querySelectorAll('#week .day');

items.forEach(function (item) {
  
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragend', handleDragEnd);
  item.addEventListener('drop', handleDrop);

});

});


//weekshedule 
const createDayElements=(i,selectedImages,selectedTitles,selectedUrls)=>{
    
  const newCard = document.createElement("div");
  newCard.className = "weekDay"; //Create a card
  
  
  const newDayTitle = document.createElement("h3"); //Create a Day
  newDayTitle.textContent = newDay(i);
  newCard.appendChild(newDayTitle); //add the title to the card

  const newCardElement = document.createElement("div");
  newCardElement.className = "day"; //Create a card
  newCardElement.draggable="true";
  newCard.appendChild(newCardElement);

  const newImage = document.createElement("img"); //Create a Image
  newImage.src = selectedImages[i]; //asign a value to the Image
  newImage.className="image";
  newCardElement.appendChild(newImage); //add the Image to the card

  const newTitle = document.createElement("p"); //Create a Title
  newTitle.textContent = selectedTitles[i];
  newCardElement.appendChild(newTitle); //add the title to the card

  const newButton = document.createElement("button"); //Create a Paragraph for the score
  newButton.innerHTML ="<a href='"+selectedUrls[i]+"'target='_blank' alt='Broken Link'>view recipe</a>"
  newCardElement.appendChild(newButton); //add the Paragraph to the designerdiv

  document.getElementById("week").appendChild(newCard);
}
const newDay=(i)=>{
  let d=new Date;
  let currentDay=d.getDay();
  let weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return weekDays[(currentDay+i)%7];
}




//send all info to the groceries
const addDataToCards=()=>{
  const selectedImages=JSON.parse(localStorage.getItem("chosenImage"));
  const selectedTitles=JSON.parse(localStorage.getItem("chosenTitle"));
  const selectedUrls=JSON.parse(localStorage.getItem("url"));
  for(let i=0;i<selectedImages.length;i++){
    createDayElements(i,selectedImages,selectedTitles,selectedUrls);
  }
}

addDataToCards();