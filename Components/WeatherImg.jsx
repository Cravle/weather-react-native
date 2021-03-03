import React from "react";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {connect} from "react-redux";
import {WeatherVars} from "../utils/WeatherVars";

const WeatherImg = (props) => {
    const code = props.kod
    if(code === 804)
        return (
            <Img
                source={WeatherVars["common"].overcast}
            />
        )

    if ( code >= 801 && code <= 803)
        return (
            <Img
                source={WeatherVars[props.daytime].cloud}
            />
        )

    if(code === 800)
        return (
            <Img
                source={WeatherVars[props.daytime].clear}
            />
        )

    if (code >= 741 && code <= 751)
        return <Img
            source={WeatherVars["common"].fog}
        />

    if (code >= 700 && code <= 731)
        return <Img
            source={WeatherVars["common"].mist}
        />

    if (code >= 621 && code <= 623 || code >= 600 && code <= 602)
        return <Img
            source={WeatherVars[props.daytime].snow}
        />

    if (code >= 610 && code <= 612 )
        return <Img
            source={WeatherVars[props.daytime].sleet}
        />

    if (code >= 300 && code <= 522 )
        return <Img
            source={WeatherVars[props.daytime].rain}
        />

    if (code >= 200 && code <= 233 )
        return <Img
            source={WeatherVars[props.daytime].rain_thunder}
        />


    return (
        <Img
            source={WeatherVars["common"].mist}
        />
    )
}
//
// WeatherImg.defaultProps = {
//     code: 800,
//     daytime: "night"
// }

const Img = styled.Image`
  justify-content: center;
  width: 200px;
  height: 200px;
`


const mapStateToProps = (store) => ({

    daytime: store.weather.daytime,
    kod: store.weather.kod,

});


let WeatherImgContainer = connect(mapStateToProps, {})(WeatherImg);

export default WeatherImgContainer;