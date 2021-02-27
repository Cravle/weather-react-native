import {fetchWeather, weatherAPI} from "../utils/api";

const INITIALIZED_SUCCESS = 'WEATHER-APP/WEATHER-REDUCER/INITIALIZED-SUCCESS';
const SET_WEATHER_DATA = 'WEATHER-APP/WEATHER-REDUCER/SET-WEATHER-DATA';
const SET_ERROR = 'WEATHER-APP/WEATHER-REDUCER/SET-ERROR';

let initialState = {
    isFetching: false,
    city: "Kharkov",
    temperature: "23",
    descr: "Sunny",
    error: null,
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case SET_WEATHER_DATA:
            return {
                ...state,
                city: action.city,
                temperature: action.temperature,
                descr: action.descr,
                isFetching: false
            }
        case SET_ERROR :
            return {
                ...state,
                error: action.error
            }
        default:
            return state;

    }
}

const setError = (error) => ({
    type: SET_ERROR,
    error
})

const setWeather = (city, temperature, descr) => (
    {

        type: SET_WEATHER_DATA,
        city,
        temperature,
        descr
    })


export const getWeather = () => (dispatch) => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {

            const data = await weatherAPI.getWeather(position.coords.latitude, position.coords.longitude);

            console.log(data);
            dispatch(setWeather(data.name, data.main.temp, data.weather[0].description));


        },
        error => {
            dispatch(setError(error));
        }
    );


}

export default weatherReducer;
