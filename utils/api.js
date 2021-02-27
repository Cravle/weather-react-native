import {API_KEY} from '../utils/WeatherAPIKey';

import * as axios from 'axios';

export const fetchWeather = (lat = 25, lon = 25) => {

}

export const weatherAPI = {
    async getWeather(lat = 25, lon = 25) {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
            .then(response => response.data);

    }
}