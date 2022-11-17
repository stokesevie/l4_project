import React from "react";
import { NotificationTitle,StyledNotification,NotificationText,Arrow ,ContentsNotification,colours} from './styles'
import {Ionicons} from '@expo/vector-icons';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const {secondary,primary}= colours;

export class PendingNotifications extends React.Component {
    render(){
      const {onPress}= this.props;
    return (
      <StyledNotification onPress={onPress}>
              <NotificationTitle> Hello </NotificationTitle>
              <ContentsNotification>
              <NotificationText>You have 3 pending surveys</NotificationText>
              <Arrow><Ionicons name="ios-arrow-forward" size={30} color={primary}/></Arrow>
              </ContentsNotification>
            </StyledNotification>

    );

    }

    
  }

 PendingNotifications.propTypes = {
    onPress: PropTypes.func.isRequired,
};
