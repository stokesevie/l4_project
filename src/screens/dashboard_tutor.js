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
  } from '../components/styles';
import { NavBar } from '../components/NavBar';
import { PendingNotifications } from '../components/PendingSurveyNotifications';
import { NotificationPast } from '../components/NotificationPastLab';
import { TutorFeedbackNotifcation } from '../components/TutorFeedbackNotification';


const {secondary,primary}= colours;

const TutorDashboard = () => {
  const navigation = useNavigation();
    return (
        <View>
          <Dashboard></Dashboard>

          <PageTitle>Mindmap</PageTitle>
          <SubTitle> Welcome, Tutor !</SubTitle>
          <DashboardInfo>
            <PendingNotifications></PendingNotifications>
            <NotificationPast></NotificationPast>
            <TutorFeedbackNotifcation></TutorFeedbackNotifcation>

            </DashboardInfo>


            <NavBar></NavBar>

        </View>
    )
};
export default StudentDashboard;