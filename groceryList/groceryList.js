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

    for (i = 0; i < 7; i++) {
        console.log(week[(day.getDay() + 1 + i) % 7]);
    }
}

day();