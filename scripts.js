const url = 'http://api.weatherapi.com/v1/';
const key = 'YOUR_API_KEY';

const setQuery = (e) => {
    if (e.keyCode == "13") {
        getResults(searchBar.value);
    }
};

const getResults = (cityName) => {
    let query = `${url}current.json?key=${key}&q=${cityName}&aqi=no&lang=tr`;
    fetch(query)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
};

const displayResults = (weather) => {
    let city = document.querySelector('.city');
    city.innerText = `${weather.location.name}, ${weather.location.country}`;

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${weather.current.temp_c}<span>°C</span>`;

    let desc = document.querySelector('.desc');
    desc.innerText = weather.current.condition.text;
};

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);



