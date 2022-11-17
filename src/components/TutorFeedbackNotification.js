
import React from "react";
import { NotificationTitle,StyledNotificationMessage,NotificationText,Arrow ,ContentsNotification,colours} from './styles'
import {Ionicons} from '@expo/vector-icons';
const {secondary,primary}= colours;

export class TutorFeedbackNotifcation extends React.Component {
    render(){
    return (
        <StyledNotificationMessage>
        <NotificationTitle>Tutor's Feedback</NotificationTitle>
         <ContentsNotification>
         <Arrow><Ionicons name="ios-mail-outline" size={30} color={primary}/></Arrow>
        <NotificationText>
         You need to catch up on NOSE2           
        </NotificationText>
        </ContentsNotification>
      </StyledNotificationMessage>
    );
    }
  }
