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

//temporary fetch=> wordt nieuwe fetch afhankelijk van localstorage=> mss niet meer nodig?
const fetchRecipe=(selectedRecipe)=>{
  fetch(selectedRecipe)
      .then(response => response.json())
      .then(data => {
        
        console.log(data);
 //       return data;
          
  });
}
//send all info to the groceries
const addDataToCards=()=>{
  const selectedRecipes=readLocalData();
  
  for(let i=0;i<selectedRecipes.length;i++){
    console.log(selectedRecipes[i]);
    fetchRecipe(selectedRecipes[i]);
  }
}
const readLocalData=()=>{ 
  if (localStorage!=null){
  let values = []
  let keys = Object.keys(localStorage)
  let i = keys.length;
  console.log (i);
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        localStorage.removeItem(keys[i]);
    }
    console.log(values);

    return values;
  }else{
    alert('please select your recipes first');
  }

}
const sendData=()=>{
  const week=document.getElementById("week");
  let arrayData=[];
  for (let i=0;i<7;i++){
    arrayData[i]=week.children[i].innerHTML
  }
  return arrayData;
}
addDataToCards();