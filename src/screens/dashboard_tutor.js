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
    ContentJustified
  } from '../components/styles';
import { NavBar } from '../components/NavBar';
import { PendingNotifications } from '../components/PendingSurveyNotifications';
import { NotificationPast } from '../components/NotificationPastLab';
import { TutorFeedbackNotifcation } from '../components/TutorFeedbackNotification';
import { render } from 'react-dom';


const {secondary,primary}= colours;

const TutorDashboard = ({navigation}) => {
  return (
      <View>
        <ContentJustified>
        <PageTitle>Mindmap</PageTitle>
        <SubTitle> Welcome, Tutor !</SubTitle>
          <PendingNotifications
          onPress={() => {
            navigation.navigate("PendingSurveys");
          }
          }
          ></PendingNotifications>
          <NotificationPast onClick={() =>
            navigation.navigate("TutorDashboard")
          }></NotificationPast>
          <TutorFeedbackNotifcation onClick={() =>
            navigation.navigate("PendingSurveys")
          }></TutorFeedbackNotifcation>

          </ContentJustified>

          <NavBar></NavBar>
          

      </View>
  )
};
export default TutorDashboard;