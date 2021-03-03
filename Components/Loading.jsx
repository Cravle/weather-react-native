import React, {useState} from 'react';
import {ActivityIndicator} from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {Text, View, Image} from "react-native";


const Loading = () => {

    const [errorMsg, setErrorMessage] = useState("");

    setTimeout(() => {
        setErrorMessage("Something went wrong! Please check your connection and swipe up to refresh.")
    }, 8000)

    return (
        <Container>
            {!errorMsg ?
                <View>
                    <ActivityIndicator size="large" color="#00ff00"/>
                    <Created>Created by Cravle</Created>
                </View> :
                <Container>
                    <Img source={require("../assets/img/error.png")}/>
                    <Error>{errorMsg}</Error>
                </Container>
            }
        </Container>
    )
}


const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const Error = styled.Text`
text-align: center;
font-size: 18px;
color: #262626;
`;
const Created = styled.Text`
text-align: center;
font-size: 18px;
color: #8FCAC7;
`;

const Img = styled.Image`
justify-content: center;
width: 50px;
height: 50px;
`


export default  Loading;