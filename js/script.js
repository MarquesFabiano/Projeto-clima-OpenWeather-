const apiKey = "f1fa786020cf7448474242c208b61a6";
const apiCountryURL = "https://flagsapi.com/png/";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search");

const cityElemente = document.getElementById("city");
const tempElemente = document.getElementById("temperature span");
const descElemente = document.getElementById("descripttion");
const weatherIconElemente = document.getElementById("wather-icon");
const countryElemente = document.getElementById("country");
const umidityElemente = document.getElementById("umidity span");
const windElemente = document.getElementById("wind span");

//funções:
const getWeatherData = async(city) => {}

const showWatherData = (city) => {
    console.log(city)
}

// aqui vai os eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWatherData(city);
});
