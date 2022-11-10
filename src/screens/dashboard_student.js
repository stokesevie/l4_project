import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import {Formik} from 'formik';
import {Octicons, Ionicons} from '@expo/vector-icons';
import {
    Dashboard,
    InnerContainer,
    Logo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightArrow,
    StyledButton,
    ButtonText,
    colours,
    DashboardInfo,
    StyledNotification,
    StyledNotificationMessage,
    StyledNotificationPast,
    NotificationText,
    NotificationTitle,
    Toolbar
  } from './../components/styles';


const {secondary,primary}= colours;

const StudentDashboard = () => {
  const navigation = useNavigation();
    return (
        <View>
          <Dashboard></Dashboard>

          <PageTitle>Mindscape</PageTitle>
          <SubTitle> Welcome, Student !</SubTitle>
          <DashboardInfo>
            <StyledNotification>
              <NotificationTitle>Hello</NotificationTitle>
              <RightArrow><Ionicons name="ios-arrow-forward" size={30} color={primary}/></RightArrow>
              <NotificationText>You have 3 pending surveys</NotificationText>
              
            </StyledNotification>

            <StyledNotificationPast>
              <NotificationTitle>Class X</NotificationTitle>
              <NotificationText>You found the lab this week harder than the average student</NotificationText>
            </StyledNotificationPast>

            <StyledNotificationMessage>
              <NotificationTitle>Tutor's Feedback</NotificationTitle>
              <NotificationText>
                
              <RightArrow><Ionicons name="ios-mail-outline" size={30} color={primary}/></RightArrow>
              You need to catch up on NOSE2
              </NotificationText>
            </StyledNotificationMessage>

            </DashboardInfo>


            <Toolbar>
              <Text>heguibwdhni</Text>
            </Toolbar>

        </View>
    )
};
export default StudentDashboard;