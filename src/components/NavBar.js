import React from "react";
import { Toolbar, IconConstraint, NavButton,colours} from './../components/styles'
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';

const {secondary} = colours;

export class NavBar extends React.Component {
    render(){

      const { navigation } = this.props;
      const { onPress } = this.props;
    return (<Toolbar>
    <IconConstraint>
    <NavButton><Ionicons name="home" color={secondary} size={40} onPress={() => {
              navigation.navigate("StudentDashboard");
    }}/></NavButton>
    <NavButton><Ionicons name="ios-mail-outline" color={secondary} size={40} onPress={() => {
              navigation.navigate("Messages");
    }}/></NavButton>
    <NavButton><Ionicons name="school" color={secondary} size={40} onPress={() => {
              navigation.navigate("Labs");
    }}/></NavButton>
    </IconConstraint>
    </Toolbar>
    );
    }
  }

NavBar.propTypes = {
    onPress: PropTypes.func.isRequired,
};