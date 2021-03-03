import {applyMiddleware, combineReducers, createStore} from "redux";
import weatherReducer from "./weather-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    weather: weatherReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;