import React from 'react';

import {connect, Provider} from "react-redux";
import Loading from "./Loading";
import WeatherContainer from "./Weather";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {getWeather, setDateTime} from "../redux/weather-reducer";
import store from "../redux/store";



class WeatherAppContent extends React.Component {
    componentDidMount() {
        this.props.getWeather();
        this.props.setDateTime();


    }


    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <Container  daytime={this.props.daytime}>
                {this.props.isFetching ?
                    <Loading/> :
                    <WeatherContainer />

                }

            </Container>
        )
    }
}

let mapStateToProps = (store) => ({
    isFetching: store.weather.isFetching,
    daytime: store.weather.daytime

})

let WeatherAppContainer = connect(mapStateToProps, {getWeather, setDateTime})(WeatherAppContent);

const Container = styled.View`
  width: 100%;
  height: 100%;
  
  background:${props => props.daytime === 'night'  ? 'darkblue' : 'deepskyblue'};
`;

let WeatherApp = () => {
    return (
        <Provider store={store}>
            <WeatherAppContainer/>
        </Provider>
    )
}

export default WeatherApp;
