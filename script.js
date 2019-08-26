function getWeather() {

    const cityName = document.querySelector("input").value;

    // Make a request for a user with a given ID
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee79a981af6eda48c391deddd8b947cc`)
    .then(function (response) {
        // handle success
        // console.log(response.data);
        document.querySelector("h3").innerHTML =`Weather: ${response.data.weather[0].main}`;
        document.querySelector("h1").innerHTML =`"${response.data.name}"`;
    })
    .catch(function (error) {
        // handle error
        alert("Not Found!");
    })
    .finally(function () {
        // always executed
    });
}