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
