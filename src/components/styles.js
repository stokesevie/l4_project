import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight= Constants.statusBarHeight;

export const colours = {
    primary: "#ffffff",
    secondary: "#ADD8E6",
    thirdly: "#E1333F"
};

const {primary, secondary, thirdly} = colours;



export const styledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${statusBarHeight+10}px;
    background-color: ${primary};
`;

export const innerContainer = styled.View`
    flex: 1;
    width: 100%
    align-items: center;
`;
export const logo = styled.Image`
    width: 250px;
    height: 200px;
`;

export const pageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    colour: ${secondary};
    padding: 10
`;

