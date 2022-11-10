import styled from 'styled-components/native';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight= Constants.statusBarHeight;

export const colours = {
    primary: "#ffffff",
    secondary: "#528AAE",
    thirdly: "#E1333F"
};

const {primary, secondary, thirdly} = colours;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${statusBarHeight+10}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%
    align-items: center;
`;

export const Dashboard = styled.View`
    flex:1px;
    padding-top:40px;
`;
export const Logo = styled.Image`
    width: 250px;
    height: 200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${secondary};
    padding: 10px;
`;

export const SubTitle= styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    colour: black;
    text-align:center;
`;

export const DashboardInfo = styled.View`
    padding-left:10px;
    padding-right:10px;
    margin:10px;
`;

export const StyledNotification = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    justify-content: center;
    border-radius: 5px;
    height: 120px;
`;
export const StyledNotificationPast = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    justify-content: center;
    border-radius: 5px;
    height: 300px;
`;

export const StyledNotificationMessage = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    justify-content: center;
    border-radius: 5px;
    height: 120px;
`;
export const NotificationTitle = styled.Text`
    color: ${primary};
    font-size: 16px;
    font-weight: bold;
    width:70%;
`;

export const NotificationText = styled.Text`
    color: ${primary};
    padding:15px;
    font-size: 16px;
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;
export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: black;
`;
export const StyledInputLabel = styled.Text`
    color: black;
    font-size: 15px;
    text-align: left;
`;
export const RightArrow = styled.View`
    left:90%;
    align-items:right;
`;


export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
`;

export const Toolbar = styled.View`
    color: ${secondary};
    height:30px;
    bottom-padding:0px;
    
`;