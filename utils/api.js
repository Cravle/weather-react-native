

import * as axios from 'axios';

export const weatherAPI = {
    async getWeather(lat = 25, lon = 25) {
        return axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=cc423ca7cfee43fcb794fa8d741c4248&include=metric`)
            .then(response => response.data);

    }
}