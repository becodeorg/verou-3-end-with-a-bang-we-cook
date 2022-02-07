let day = () => {
    let day = new Date();
    let week = new Array(
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    );
 // TODO Get more date info for groceryList 
    for (i = 0; i < 7; i++) {
        console.log(week[(day.getDay() + 1 + i) % 7]);
    }
}
// day();


//  what should i do for the groceryList

// TODO events on Card in random Card Pick 
// TODO Look in Variables for links
// TODO Check out ingredients measure options
// TODO create groceryList Holder
// TODO create nodes for api data
// TODO create check box ? 
// TODO ingredients quantity's
// TODO ingredients types ? 
// TODO ingredients name paragraph
// TODO ingredients amount
// TODO create Input Customer
// TODO groceryList Mail option?
console.log("Push the Button");