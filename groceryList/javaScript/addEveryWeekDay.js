const addEveryWeekDay = () => {
    const weekDay = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let everyDay = [];
    for (let i = 0; i < 7; i++) {
        let day = new Date().getDay();
        everyDay.push(weekDay[(day + i) % 7]);
    }
    return everyDay;
}

export default addEveryWeekDay;