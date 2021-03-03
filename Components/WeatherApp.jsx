import React, {useState, useEffect} from 'react';
import {connect, Provider} from "react-redux";
import Loading from "./Loading";
import WeatherContainer from "./Weather";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {getWeather, setDateTime} from "../redux/weather-reducer";
import store from "../redux/store";
import {RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

const date = new Date();
const hours = date.getHours();


const WeatherAppContent = (props) => {

    const [refreshing, setRefreshing] = useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    useEffect(() => {
        //props.getWeather();
        props.setDateTime();


    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        props.setDateTime();

        wait(3500).then(() => {
            props.getWeather();
            setRefreshing(false)});
    }, []);


    return (
        <Container daytime={props.daytime}>
            <SafeAreaView>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {props.isFetching ?
                        <Loading/>:
                        <WeatherContainer/>
                    }
                </ScrollView>
            </SafeAreaView>
        </Container>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,

    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,

    },
});

let mapStateToProps = (store) => ({
    isFetching: store.weather.isFetching,
    daytime: store.weather.daytime,
    error: store.weather.error
})

let WeatherAppContainer = connect(mapStateToProps, {getWeather, setDateTime})(WeatherAppContent);

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  background: ${props => props.daytime === 'night' ? '#094B7C' : '#0099CF'};
  color: #EBEEF3;
`;

let WeatherApp = () => {
    return (
        <Provider store={store}>
            <WeatherAppContainer/>
        </Provider>
    )
}

export default WeatherApp;
