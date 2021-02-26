import React from 'react';
import {ActivityIndicator} from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";


const Loading = () => {
    return (
        <Container>
            <ActivityIndicator size="large" color="#00ff00" />
        </Container>
    )
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;



export default  Loading;