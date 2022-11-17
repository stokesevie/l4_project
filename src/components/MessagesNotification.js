
import React from "react";
import { NotificationTitle,StyledNotificationMessage,NotificationText,Arrow ,ContentsNotification,colours} from './styles'
import {Ionicons} from '@expo/vector-icons';
const {secondary,primary}= colours;

export class MessagesNotification extends React.Component {
    render(){
    return (
        <StyledNotificationMessage>
        <NotificationTitle>Student Messages</NotificationTitle>
         <ContentsNotification>
         <Arrow><Ionicons name="ios-mail-outline" size={30} color={primary}/></Arrow>
        <NotificationText>
         8 Unread Messages from students          
        </NotificationText>
        </ContentsNotification>
      </StyledNotificationMessage>
    );
    }
  }