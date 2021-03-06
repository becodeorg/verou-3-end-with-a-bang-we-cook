fetch("https://testimonialapi.toolcarton.com/api")
.then(response => response.json())
.then(result => {
   getfirst3(result)  
})

const getfirst3 = (result) => {
    let allData = result
     for (let i = 0; i < 8; i++) {
        const people = allData[i];
        compileData(people, i)
    }
}

const compileData = (people) => {
    const id = people.id
    const name = people.name;
    const location = people.location;
    const lorem = people.lorem;
    const rating = people.rating;
    const profilePic = people.avatar;
    
    const onePerson = {id, name, location, lorem, rating, profilePic}
    makeCard(onePerson)   
} 

const makeCard = (onePerson, i) => { 
    const container = document.getElementById('section');
    const content = `   
    <section class="card-container ${'person' +onePerson.id}">
        <section class="card-img">
            <img src="${onePerson.profilePic}" alt="">
        </section>
        <section class="card-text">
            <section class="card-title">
                <h2 class="">${onePerson.name}</h2>
                <h3>${onePerson.location}</h3>
            </section>
            
            <p>${onePerson.lorem}</p>
            <span>${onePerson.rating} stars</span>
        </section>

    </section>
    `
    container.innerHTML += content;
}

function hamburgerMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.hamburgerButton')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    hamburgerMenu();

    console.log("Push the Button");
}