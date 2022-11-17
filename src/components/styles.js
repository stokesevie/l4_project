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
    padding-top:40px;
    padding:30px
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

export const ContentJustified = styled.View`
    padding-left:10px;
    padding-right:10px;
    padding-top:30px;
    margin:10px;
    height:85.5%;
`;

export const StyledNotification = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    border-radius: 5px;
    height: 120px;
    margin-bottom: 20px;
`;

export const StyledNotificationTutor = styled.View`
    height:60%;
    background-color: ${secondary};
    justify-content: center;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 5px;
`;

export const StyledNotificationPast = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    justify-content: center;
    border-radius: 5px;
    height: 270px;
    margin-bottom: 20px;
`;

export const StyledNotificationMessage = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${secondary};
    justify-content: center;
    border-radius: 5px;
    height: 120px;
    margin-bottom: 20px;
`;
export const NotificationTitle = styled.Text`
    color: ${primary};
    font-size: 16px;
    font-weight: bold;
    width:70%;
`;

export const NotificationText = styled.Text`
    width:85%;
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

export const Arrow = styled.Text`
    padding: 10px;
    width:50px; 
    height: 50px 
`;

export const ContentsNotification = styled.View`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`;

export const Title = styled.View`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    
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
    height:110px;
    width:110%;
    left:-10px;
    border-width:10px;
    border-top-color:${secondary};
    border-left-color:${primary};
    border-right-color:${primary};
    background-color: ${primary};
    padding-left:35px;
    padding-right:35px;
    padding-top:15px;
 
`;

export const IconToolbar = styled.View`
    
`;

export const IconConstraint = styled.View`
    justify-content:space-between;
    display: flex;
    flex-direction:row;
    width:94.5%;
`

export const ScrollText = styled.Text`
    flex-direction:row;
    width: 80%;
    font-size: 19px;
    color: white;
    font-weight: bold;
`
const ContentView = styled.View`
    border-width: 1px;
    border-color: black;
    border-radius:5px;
    padding:10px;
    height: 100px;
    margin-left: 10px;
`;
const Separator = styled.View`
    height: 4px;
    width: 100%;
`;

const ScrollBodyText = styled.Text`
    font-size: 12px;
`;

const TitleIcon = styled.View`
    display: flex;
    flex-direction:row;
`;