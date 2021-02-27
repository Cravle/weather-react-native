import React, {useEffect} from 'react';
import styled from "styled-components/native/dist/styled-components.native.esm";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Text, View, Image} from "react-native";
import MemoedTouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import {connect} from "react-redux";
import {getWeather} from "../redux/weather-reducer";

class Weather extends React.Component {


    // useEffect(() => {
    //     props.getWeather();
    // }, [])
    render() {
        return (

            <Container>
                <ContentBlock>
                    <Title>{this.props.descr}</Title>
                    <City>{this.props.city}</City>
                </ContentBlock>

                <WeatherBlock>
                    <WeatherImg
                        source={require('../assets/img/sun_PNG13441.png')}
                    />
                    <Degree>{this.props.temperature}°</Degree>

                </WeatherBlock>
                <Text>{this.props.error}</Text>
            </Container>


        )
    }
}


const ContentBlock = styled.View`
  margin-top: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
`


const WeatherImg = styled.Image`
  justify-content: center;
  width: 200px;
  height: 200px;
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
  color: yellow;
  font-size: 80px;
  text-align: center;
  padding-left: 7%;
`

const City = styled.Text`
  color: #FFF;
  font-size: 48px;
  font-weight: 600;
  text-align: center;

`

const Title = styled.Text`
  font-size: 72px;
`
const mapStateToProps = (store) => ({
    city: store.weather.city,
    temperature: store.weather.temperature,
    descr: store.weather.descr,
    error: store.weather.error,
});

let WeatherContainer = connect(mapStateToProps, {getWeather})(Weather);


export default WeatherContainer;