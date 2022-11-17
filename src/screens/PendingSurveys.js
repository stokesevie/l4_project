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
  } from '../components/styles';
import { NavBar } from '../components/NavBar';
import { PendingNotifications } from '../components/PendingSurveyNotifications';
import { NotificationPast } from '../components/NotificationPastLab';
import { TutorFeedbackNotifcation } from '../components/TutorFeedbackNotification';
import ScrollList from '../components/ScrollList';


const {secondary,primary}= colours;

const PendingSurveys = ({navigation}) => {
    
    return (
        <View>
            <ContentJustified>
            <PageTitle>Mindmap</PageTitle>
            <SubTitle> These are your outstanding surveys:
            </SubTitle>
            <ScrollList></ScrollList>
            </ContentJustified>
            <NavBar></NavBar>

        </View>
    )
}

export default PendingSurveys;