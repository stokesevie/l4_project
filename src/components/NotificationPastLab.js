

import React from "react";
import { NotificationTitle,StyledNotificationPast,NotificationText,RightArrow ,ContentsNotification,colours} from './styles'

const {secondary,primary}= colours;

export class NotificationPast extends React.Component {
    render(){
    return (
        <StyledNotificationPast>
        <NotificationTitle>Class X</NotificationTitle>
        <ContentsNotification>
        <NotificationText>You found the lab this week harder than the average student
        </NotificationText>
        </ContentsNotification>
        </StyledNotificationPast>
    );
    }
  }