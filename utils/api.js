import API_KEY from '../utils/WeatherAPIKey';

export const fetchWeather = (lat = 25, lon = 25) => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
        .then(res => res.json())
}
