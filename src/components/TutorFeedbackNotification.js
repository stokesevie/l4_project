
import React from "react";
import { NotificationTitle,StyledNotificationMessage,NotificationText,RightArrow ,ContentsNotification,colours} from './styles'
import {Ionicons} from '@expo/vector-icons';
const {secondary,primary}= colours;

export class TutorFeedbackNotifcation extends React.Component {
    render(){
    return (
        <StyledNotificationMessage>
        <NotificationTitle>Tutor's Feedback</NotificationTitle>
         <ContentsNotification>
         <RightArrow><Ionicons name="ios-mail-outline" size={30} color={primary}/></RightArrow>
        <NotificationText>
         You need to catch up on NOSE2           
        </NotificationText>
        </ContentsNotification>
      </StyledNotificationMessage>
    );
    }
  }
