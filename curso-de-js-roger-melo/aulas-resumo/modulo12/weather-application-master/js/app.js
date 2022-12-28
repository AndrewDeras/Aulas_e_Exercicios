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

const showCityCardInfo = async cityName => {
    const [{ Key, LocalizedName }] = await getCityData(cityName);
    const [{ WeatherText, IsDayTime, Temperature, WeatherIcon }] = await getCityWeather(Key);

    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

    IsDayTime
        ? timeImg.src = './/src/day.svg'
        : timeImg.src = './/src/night.svg';

    addInfo(cityNameContainer, LocalizedName);
    addInfo(cityWeatherContainer, WeatherText);
    addInfo(cityTemperatureContainer, Temperature.Metric.Value);
    addIcon(weatherIconContainer, timeIcon);
}

const showLocalStorageCity = () => {
    const city = localStorage.getItem('city');
    if (city) {
        removeClassItem(cityCard, 'd-none')
        showCityCardInfo(city);
    }
}

cityForm.addEventListener('submit', async event => {
    event.preventDefault();
    const inputValue = event.target.city.value;

    showCityCardInfo(inputValue);
    removeClassItem(cityCard, 'd-none')
    localStorage.setItem('city', inputValue)
    cityForm.reset();
});

showLocalStorageCity()