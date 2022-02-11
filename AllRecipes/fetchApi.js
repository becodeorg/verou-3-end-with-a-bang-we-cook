window.onload = function() {
  Search();
};

const fetchRecipes=async(query)=>{
    await fetch('https://api.edamam.com/api/recipes/v2?type=public&q='+query+'&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
        .then(response => response.json())
        .then(data => {
          // console.log("oude data");
          //   console.log(data);
            addDataToCards(data);
    });
}

const getRecipesId=(data,i)=>{
  let myArray = data.hits[i].recipe.uri.split("_");
  return myArray[1];
}

const addDataToSelectedCards=async(index)=>{
  
  const recepiId=JSON.parse(localStorage.getItem("chosenRecipe"));
  const recepiImage=JSON.parse(localStorage.getItem("chosenImage"));
  const recepiTitle=JSON.parse(localStorage.getItem("chosenTitle"));
  const recepiUrl=JSON.parse(localStorage.getItem("url"));
   document.getElementsByClassName("image")[index].children[0].src=recepiImage[index];
   document.getElementsByClassName("title")[index].children[0].innerText=recepiTitle[index];      
   document.querySelectorAll(".plusImage")[index].setAttribute("id",recepiId[index]);
   document.querySelectorAll(".plusImage")[index].setAttribute("img",recepiImage[index]);
   document.querySelectorAll(".plusImage")[index].setAttribute("title",recepiTitle[index]);
   document.querySelectorAll(".plusImage")[index].setAttribute("url",recepiUrl[index]);
   document.querySelectorAll(".plusImage")[index].src = "checkmark.png";
   document.getElementsByClassName("buttonRecipe")[index].innerHTML="<a href='"+recepiUrl[index]+"'target='_blank' alt='Broken Link'>view recipe</a>"
}

const addDataToCards=async(data)=>{
  
  let alreadySelected=JSON.parse(localStorage.getItem("chosenRecipe"));
  if(alreadySelected==null){
    for(let i=0;i<20;i++)//add data to all the cards if their is no selected
   {  let recepisId=getRecipesId(data,i);
      document.getElementsByClassName("image")[i].children[0].src=data.hits[i].recipe.image;
      document.getElementsByClassName("title")[i].children[0].innerText=data.hits[i].recipe.label;      
      document.querySelectorAll(".plusImage")[i].setAttribute("id",recepisId);
      document.querySelectorAll(".plusImage")[i].setAttribute("img",data.hits[i].recipe.image);
      document.querySelectorAll(".plusImage")[i].setAttribute("title",data.hits[i].recipe.label);
      document.querySelectorAll(".plusImage")[i].setAttribute("url",data.hits[i].recipe.url);
      document.querySelectorAll(".plusImage")[i].src = "plusmark.png";
      document.getElementsByClassName("buttonRecipe")[i].innerHTML="<a href='"+data.hits[i].recipe.url+"' alt='Broken Link' target='_blank'>view recipe</a>"
    }
  }else{ 
   for(let i=0;i<alreadySelected.length;i++){
    addDataToSelectedCards(i);//add data to already selected cards    
   }
   for(let i=alreadySelected.length;i<20;i++)//add data to rest of cards
   { let recepisId=getRecipesId(data,i); 
     document.getElementsByClassName("image")[i].children[0].src=data.hits[i].recipe.image;
      document.getElementsByClassName("title")[i].children[0].innerText=data.hits[i].recipe.label;      
      document.querySelectorAll(".plusImage")[i].setAttribute("id",recepisId);
      document.querySelectorAll(".plusImage")[i].setAttribute("img",data.hits[i].recipe.image);
      document.querySelectorAll(".plusImage")[i].setAttribute("title",data.hits[i].recipe.label);
      document.querySelectorAll(".plusImage")[i].setAttribute("url",data.hits[i].recipe.url);
      document.querySelectorAll(".plusImage")[i].src = "plusmark.png";
      document.getElementsByClassName("buttonRecipe")[i].innerHTML="<a href='"+data.hits[i].recipe.url+"' alt='Broken Link' target='_blank'>view recipe</a>"
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
