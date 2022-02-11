
const fetchRecipes=async(query)=>{
    await fetch('https://api.edamam.com/api/recipes/v2?type=public&q='+query+'&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addDataToCards(data);
    });
}
const fetchRecipe=async(recipe,index)=>{
  await fetch(recipe)
  .then(response => response.json())
  .then(data => {
     
      addDataToSelectedCards(data,index);
});
}

const addDataToSelectedCards=async(data,index)=>{
  //console.log(data);
   document.getElementsByClassName("image")[index].children[0].src=data.recipe.image;
   document.getElementsByClassName("title")[index].children[0].innerText=data.recipe.label;      
   document.querySelectorAll(".plusImage")[index].setAttribute("attribute",data._links.self.href);
   document.querySelectorAll(".plusImage")[index].src = "checkmark.png";  
}

const addDataToCards=async(data)=>{
  
  let alreadySelected=JSON.parse(localStorage.getItem("chosenRecipe"));
  if(alreadySelected==null){
    alreadySelected=JSON.parse(JSON.stringify([]));
  } 
   for(let i=0;i<alreadySelected.length;i++){
    await fetchRecipe(alreadySelected[i],i);//add data to already selected cards    
   }
   for(let i=alreadySelected.length;i<19;i++)//add data to rest of cards
   {  document.getElementsByClassName("image")[i].children[0].src=data.hits[i].recipe.image;
      document.getElementsByClassName("title")[i].children[0].innerText=data.hits[i].recipe.label;      
      document.querySelectorAll(".plusImage")[i].setAttribute("attribute",data.hits[i]._links.self.href);
      document.querySelectorAll(".plusImage")[i].src = "plusmark.png";
    }
}

export const Search=async ()=>{
    const input = document.getElementById("searchBar").value;
  if(input == ""){
    await fetchRecipes('lunch');    
  }else{
    await fetchRecipes(input.toLowerCase())
    }
}

Search();