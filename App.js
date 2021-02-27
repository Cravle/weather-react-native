import React, {useState, useEffect} from 'react';
import Loading from "./Components/Loading";
import Weather from "./Components/Weather";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {API_KEY} from './utils/WeatherAPIKey';
import {getWeather} from "./redux/weather-reducer";
import store from "./redux/store";
import WeatherApp from "./Components/WeatherApp";

export default function App() {




    return (

        <WeatherApp/>
    );
}

const Container = styled.View`
  width: 100%; 
  height: 100%;
  background: deepskyblue;
`;

