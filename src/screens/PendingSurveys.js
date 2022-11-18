import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import {
    Dashboard,
    PageTitle,
    SubTitle,
    colours,
    DashboardInfo,
    Footer,
    ContentJustified,
    Toolbar,
    Arrow,
    Title,
  } from '../components/styles';
import { NavBar } from '../components/NavBar';
import { PendingNotifications } from '../components/PendingSurveyNotifications';
import { NotificationPast } from '../components/NotificationPastLab';
import { TutorFeedbackNotifcation } from '../components/TutorFeedbackNotification';
import ScrollList from '../components/ScrollList';
import {Ionicons} from '@expo/vector-icons';

const {secondary,primary}= colours;

const PendingSurveys = ({navigation}) => {
    
    return (
        <View>
            <ContentJustified>
            <Title>
            <Arrow><Ionicons name="ios-arrow-back" size={30} onPress={()=> {navigation.navigate("TutorDashboard")}} /></Arrow>
            <PageTitle>Mindmap</PageTitle>
             <Arrow></Arrow>  
            </Title>
            <SubTitle> These are your outstanding surveys:
            </SubTitle>
             <ScrollList navigation={navigation}></ScrollList>
            </ContentJustified>
            <NavBar navigation={navigation}></NavBar>

        </View>
    )
}

export default PendingSurveys;