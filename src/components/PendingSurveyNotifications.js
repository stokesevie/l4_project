import React from "react";
import { NotificationTitle,StyledNotification,NotificationText,RightArrow ,ContentsNotification,colours} from './styles'
import {Ionicons} from '@expo/vector-icons';

const {secondary,primary}= colours;

export class PendingNotifications extends React.Component {
    render(){
    return (
      <StyledNotification>
              <NotificationTitle>Hello</NotificationTitle>
              <ContentsNotification>
              <NotificationText>You have 3 pending surveys</NotificationText>
              <RightArrow><Ionicons name="ios-arrow-forward" size={30} color={primary}/></RightArrow>
              </ContentsNotification>
            </StyledNotification>
    );
    }
  }