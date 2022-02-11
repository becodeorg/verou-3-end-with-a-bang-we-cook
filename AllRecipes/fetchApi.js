
const fetchRecipes=async(query)=>{
    await fetch('https://api.edamam.com/api/recipes/v2?type=public&q='+query+'&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
        .then(response => response.json())
        .then(data => {
          console.log("oude data");
            console.log(data);
            addDataToCards(data);
    });
}
const fetchRecipe=async(recipe,index)=>{
  await fetch('https://api.edamam.com/api/recipes/v2/'+recipe+'?type=public&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
  .then(response => response.json())
  .then(data => {
     console.log("nieuwe data")
     console.log(data);
      addDataToSelectedCards(data,index);
});
}
const getRecipeId=(data)=>{
  let myArray = data.recipe.uri.split("_");
  console.log(myArray[1]);
  return myArray[1];
}
const getRecipesId=(data,i)=>{
  let myArray = data.hits[i].recipe.uri.split("_");
  
  return myArray[1];
}
const addDataToSelectedCards=async(data,index)=>{
  //console.log(data);
  const recepiId=getRecipeId(data);
   document.getElementsByClassName("image")[index].children[0].src=data.recipe.image;
   document.getElementsByClassName("title")[index].children[0].innerText=data.recipe.label;      
   document.querySelectorAll(".plusImage")[index].setAttribute("attribute",recepiId);
   document.querySelectorAll(".plusImage")[index].src = "checkmark.png";
}

const addDataToCards=async(data)=>{
  
  let alreadySelected=JSON.parse(localStorage.getItem("chosenRecipe"));
  if(alreadySelected==null){
    for(let i=0;i<20;i++)//add data to all the cards if their is no selected
   {  let recepisId=getRecipesId(data,i);
      document.getElementsByClassName("image")[i].children[0].src=data.hits[i].recipe.image;
      document.getElementsByClassName("title")[i].children[0].innerText=data.hits[i].recipe.label;      
      document.querySelectorAll(".plusImage")[i].setAttribute("attribute",recepisId);
      document.querySelectorAll(".plusImage")[i].src = "plusmark.png";
    }
  }else{ 
   for(let i=0;i<alreadySelected.length;i++){
    await fetchRecipe(alreadySelected[i],i);//add data to already selected cards    
   }
   for(let i=alreadySelected.length;i<20;i++)//add data to rest of cards
   { let recepisId=getRecipesId(data,i); 
     document.getElementsByClassName("image")[i].children[0].src=data.hits[i].recipe.image;
      document.getElementsByClassName("title")[i].children[0].innerText=data.hits[i].recipe.label;      
      document.querySelectorAll(".plusImage")[i].setAttribute("attribute",recepisId);
      document.querySelectorAll(".plusImage")[i].src = "plusmark.png";
    }
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