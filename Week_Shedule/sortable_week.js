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
    this.innerHTML = e.dataTransfer.getData('text/html');
    //TODO: write code to localstorage get and set the order of the array.
  }

  return false;
}

let items = document.querySelectorAll('#week .day');

items.forEach(function (item) {
  console.log(item);
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragend', handleDragEnd);
  item.addEventListener('drop', handleDrop);

});

});


//weekshedule 
const createDayElements=()=>{
  const days=document.getElementById("weekDays");
  const d = new Date();
  let day = d.getDay();
  console.log(day);
  for(let i=0;i<7;i++){
    const newDiv=document.createElement("div");
    newDiv.className="weekDay";
    newDiv.innerText=newDay(day);
    if(day==6){
      day=0;
    }else {day=day+1;}
    days.appendChild(newDiv);
  }
}
const newDay=(currentDay)=>{
  let weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return weekDays[currentDay];
}

createDayElements();

//temporary fetch
fetch('https://api.edamam.com/api/recipes/v2?type=public&q=british&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        addDataToCards(data);
});
//send all info to the groceries
const addDataToCards=(data)=>{
  document.getElementById("sendButton").addEventListener("click", sendData);
}
const sendData=()=>{
  const week=document.getElementById("week");
  let arrayData=[];
  for (let i=0;i<7;i++){
    arrayData[i]=week.children[i].innerHTML
  }
  return arrayData;
}