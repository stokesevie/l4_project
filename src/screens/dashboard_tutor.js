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
    ContentJustified,
    ContentsNotification
  } from '../components/styles';
import { NavBar } from '../components/NavBar';
import { TutorFeedbackNotifcation } from '../components/TutorFeedbackNotification';
import { PendingStudentsTutors } from '../components/PendingStudentsTutors';
import { render } from 'react-dom';
import { MessagesNotification } from '../components/MessagesNotification';


const {secondary,primary}= colours;

const TutorDashboard = ({navigation}) => {
  return (
      <View>
        <ContentJustified>
        <PageTitle>Mindmap</PageTitle>
        <SubTitle> Welcome, Tutor !</SubTitle>
          <PendingStudentsTutors>
          </PendingStudentsTutors>
          <MessagesNotification onClick={() =>
            navigation.navigate("PendingSurveys")
          }></MessagesNotification>

          </ContentJustified>

          <NavBar></NavBar>
          

      </View>
  )
};
export default TutorDashboard;