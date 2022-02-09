fetch("http://testimonialapi.toolcarton.com/api")
.then(response => response.json())
.then(result => {

    for (let i = 0; i < 3; i++) {
        const first3 = result[i]
        createReview(first3)
    }
}
)
.catch(error => console.log('error', error))

const createReview = (result, i) => {
    const name = result.name;
    console.log(name);
    const location = result.location;
    console.log(location);
    const lorem = result.lorem;
    console.log(lorem);
    const rating = result.rating;
    console.log(rating);
    const profilePic = result.avatar
    console.log(profilePic)
};









