import React from 'react';
import styled from "styled-components/native/dist/styled-components.native.esm";
import {Text, View, Image} from "react-native";
import {connect} from "react-redux";
import {getWeather} from "../redux/weather-reducer";
import WeatherImgContainer from "./WeatherImg";

const Weather = (props) => {


        return (

            <Container>
                <ContentBlock>
                    <Title>{props.descr}</Title>
                    <City>{props.city}</City>
                </ContentBlock>

                <WeatherBlock>
                    <WeatherImgContainer />
                    <Degree daytime={props.daytime}>{props.temperature}°</Degree>

                </WeatherBlock>
                <Text>{props.error}</Text>
            </Container>


        )

}


const ContentBlock = styled.View`
  margin-top: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
`




const WeatherBlock = styled.View`
  flex: 2;
  align-items: center;
`

const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;

`;

const Degree = styled.Text`
  color: ${props => props.daytime === "night" ? '#8FCAC7' : "yellow"};
  font-size: 80px;
  text-align: center;
  padding-left: 7%;
`

const City = styled.Text`
  color: #fff;
  font-size: 48px;
  font-weight: 600;
  text-align: center;

`

const Title = styled.Text`
  font-size: 60px;
  color: #262626;
  text-align: center;
`
const mapStateToProps = (store) => ({
    city: store.weather.city,
    temperature: store.weather.temperature,
    descr: store.weather.descr,
    error: store.weather.error,
    daytime: store.weather.daytime
});

let WeatherContainer = connect(mapStateToProps, {getWeather})(Weather);


export default WeatherContainer;