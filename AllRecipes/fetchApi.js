
const fetchRecipes=(query)=>{
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q='+query+'&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addDataToCards(data);
    });
}

const addSelectedToarray=()=>{
    let dataArray=[];
    let allSelected=document.getElementsByClassName("selected");
    for(let i=0;i<allSelected.length;i++){
        dataArray[i]= localStorage.getItem(key, allSelected[i].parent.parent.getAttribute());
    }
}

const addDataToCards=(data)=>{
   
   for(let i=0;i<20;i++)
    { document.getElementsByClassName("image")[i].children[0].src=data.hits[i].recipe.image;
      document.getElementsByClassName("title")[i].children[0].innerText=data.hits[i].recipe.label;      
      document.querySelectorAll(".plusImage")[i].setAttribute("attribute",data.hits[i]._links.self.href);
    }
}

export const Search=()=>{
    const input = document.getElementById("searchBar").value;
  if(input == ""){
    fetchRecipes('lunch');
  }else{
    fetchRecipes(input.toLowerCase());
    }
}

Search();