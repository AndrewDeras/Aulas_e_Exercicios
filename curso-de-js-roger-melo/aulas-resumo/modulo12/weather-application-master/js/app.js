const cityForm = document.querySelector('[data-js="change-location"]');

const cityNameContainer = document.querySelector('[data-js="city-name"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]');
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]');

const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]');
let weatherIconContainer = document.querySelector('[data-js="time-icon"]')

const removeClassItem = (item, className) => {
    if (item.classList.contains(className)) {
        item.classList.remove(className)
    }
}

const addInfo = (item, info) => {
    item.textContent = info
}

const addIcon = (item, icon) => {
    item.innerHTML = icon
}

cityForm.addEventListener('submit', async event => {
    event.preventDefault();
    const inputValue = event.target.city.value;
    const [{ Key, LocalizedName }] = await getCityData(inputValue);
    const [{ WeatherText, IsDayTime, Temperature, WeatherIcon }] = await getCityWeather(Key);

    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

    removeClassItem(cityCard, 'd-none')

    IsDayTime
        ? timeImg.src = './/src/day.svg'
        : timeImg.src = './/src/night.svg';

    addInfo(cityNameContainer, LocalizedName);
    addInfo(cityWeatherContainer, WeatherText);
    addInfo(cityTemperatureContainer, Temperature.Metric.Value);
    addIcon(weatherIconContainer, timeIcon);

    cityForm.reset();
})