import {fetchWeather} from "../utils/api";

const INITIALIZED_SUCCESS = 'WEATHER-APP/WEATHER-REDUCER/INITIALIZED-SUCCESS';
const SET_WEATHER_DATA = 'WEATHER-APP/WEATHER-REDUCER/SET-WEATHER-DATA';
const SET_ERROR = 'WEATHER-APP/WEATHER-REDUCER/SET-ERROR';

let initialState = {
    initialized: false,
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
                ...action.data
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

const setWeather = (city, temperature, descr) => ({
    type: SET_WEATHER_DATA,
    city,
    temperature,
    descr
})



export const getWeather = () => async (dispatch) => {

    const json = navigator.geolocation.getCurrentPosition(
        position => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        error => {
            dispatch(setError(error));
        }
    );

    dispatch(setWeather(json.name, json.main.temp, json.weather[0].description));




}

export default weatherReducer;
