import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import {Formik} from 'formik';
import {Octicons, Ionicons} from '@expo/vector-icons';
import {
    StyledContainer,
    InnerContainer,
    Logo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    colours
  } from './../components/styles';

const StudentDashboard = () => {
    return (
        <View>
        <StyledContainer>
      <InnerContainer>
        <StatusBar style="dark"/>
        <PageTitle>Mindscape</PageTitle>
        </InnerContainer>
        </StyledContainer>
        </View>
    )
};
export default StudentDashboard;