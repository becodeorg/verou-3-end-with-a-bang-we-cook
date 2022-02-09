fetch('https://api.edamam.com/api/recipes/v2?type=public&q=british&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        addData(data);
    });

const addData=(data)=>{
    document.getElementsByTagName("img")[0].src=data.hits[0].recipe.image;
}

/*const Search=()=>{
  const form = document.getElementById("Name")
  const kaarten = document.getElementsByTagName("h2")

  for (let kaart of kaarten) {
    let parent = kaart.parentElement.parentElement;
    if (kaart.textContent.toLowerCase().includes(form.value.toLowerCase())) {
      parent.style.display = "block";
    } else {
      parent.style.display = "none";
    }
  }
}*/
fetch("https://api.edamam.com/api/recipes/v2?type=public&q=british&app_id=dc33d4d0&app_key=4ed7538e5048146690cf86e13c0f1d1b");