import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import weatherReducer from "./weather-reducer";

let reducers = combineReducers({
    weather: weatherReducer
})

const store = createStore(reducers);

export default store;