import React, {useState, useEffect} from 'react';
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import Loading from "./Loading";
import WeatherContainer from "./Weather";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {getWeather} from "../redux/weather-reducer";
import store from "../redux/store";

const WeatherAppContent = (props) => {
    return (
        <Container>
            {props.initialized ?
                <Loading/> :
                <WeatherContainer/>

            }

        </Container>
    )
}

let mapStateToProps = (store) => ({
    initialized: store.weather.initialized

})

let WeatherAppContainer = connect(mapStateToProps, {getWeather})(WeatherAppContent);

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: deepskyblue;
`;

let WeatherApp = () => {
    return (
        <Provider store={store}>
            <WeatherAppContainer/>
        </Provider>
    )
}

export default WeatherApp;
