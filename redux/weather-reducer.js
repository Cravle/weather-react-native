import {weatherAPI} from "../utils/api";

const INITIALIZED_SUCCESS = 'WEATHER-APP/WEATHER-REDUCER/INITIALIZED-SUCCESS';
const SET_WEATHER_DATA = 'WEATHER-APP/WEATHER-REDUCER/SET-WEATHER-DATA';
const SET_ERROR = 'WEATHER-APP/WEATHER-REDUCER/SET-ERROR';
const SET_DAY_TIME = 'WEATHER-APP/WEATHER-REDUCER/SET-DAY-TIME';

let initialState = {
    isFetching: true,
    city: "Kharkov",
    temperature: "23",
    descr: "Sunny",
    error: null,
    daytime: 'night',
    kod: 233,
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
                isFetching: false,
                kod: action.code
            }
        case SET_ERROR :
            return {
                ...state,
                error: action.error
            }
        case SET_DAY_TIME :
            return {
                ...state,
                daytime: action.daytime
            }
        default:
            return state;

    }
}

const setError = (error) => ({
    type: SET_ERROR,
    error
})

const setWeather = (city, temperature, descr, code) => (
    {

        type: SET_WEATHER_DATA,
        city,
        temperature,
        descr,
        code
    }
)

export const setTime = (daytime) => (
    {

        type: SET_DAY_TIME,
        daytime

    }
)

export const setDateTime = () => (dispatch) => {

    const date = new Date();
    const hours = date.getHours();
    let daytime = 'night';
    if(hours >= 6 && hours <= 21) {
        daytime = 'day'
    }

    dispatch(setTime(daytime));
}


export const getWeather = () => (dispatch) => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {

            const data = await weatherAPI.getWeather(position.coords.latitude, position.coords.longitude);


            dispatch(setWeather(data.data[0].city_name, data.data[0].temp, data.data[0].weather.description, data.data[0].weather.code));

        },
        error => {
            dispatch(setError(error));
        }
    );


}


export default weatherReducer;
