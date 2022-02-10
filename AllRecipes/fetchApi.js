
const fetchRecipes=(query)=>{
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q='+query+'&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addDataToCards(data);
    });
}
const fetchRecipe=(recipe,i)=>{
  fetch(recipe)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      addDataToSelectedCards(data,i);
});
}

const alreadySelectedToarray=()=>{
  let values = []
  let keys = Object.keys(localStorage)
  let i = keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        
    }
    return values;
}
const addDataToSelectedCards=(data,i)=>{
  console.log(data);
  // document.getElementsByClassName("image")[i].children[0].src=data.recipe.image;
  // document.getElementsByClassName("title")[i].children[0].innerText=data.recipe.label;      
  // document.querySelectorAll(".plusImage")[i].setAttribute("attribute",data);   
}

const addDataToCards=(data)=>{
   const alreadySelected=alreadySelectedToarray();
   for(let i=0;i<alreadySelected.length;i++){
    addDataToSelectedCards(alreadySelected[i],i);//add data to already selected cards    
   }
   for(let i=alreadySelected.length;i<19;i++)
   {  document.getElementsByClassName("image")[i].children[0].src=data.hits[i].recipe.image;
      document.getElementsByClassName("title")[i].children[0].innerText=data.hits[i].recipe.label;      
      document.querySelectorAll(".plusImage")[i].setAttribute("attribute",data.hits[i]._links.self.href);
    }
}

export const Search=()=>{
    const input = document.getElementById("searchBar").value;
  if(input == ""){
    fetchRecipes('lunch');    
  }else{
    fetchRecipes(input.toLowerCase())
    }
}

Search();