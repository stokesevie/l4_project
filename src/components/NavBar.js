import React from "react";
import { Toolbar, IconConstraint, IconToolbar,colours} from './../components/styles'
import {Ionicons} from '@expo/vector-icons';

const {secondary} = colours;

export class NavBar extends React.Component {
    render(){
      const {onPress}= this.props;
    return (<Toolbar>
    <IconConstraint>
    <IconToolbar><Ionicons name="home" color={secondary} size={40} /></IconToolbar>
    <IconToolbar><Ionicons name="ios-mail-outline" color={secondary} size={40}/></IconToolbar>
    <IconToolbar><Ionicons name="school" color={secondary} size={40}/></IconToolbar>
    </IconConstraint>
    </Toolbar>
    );
    }
  }


NavBar.propTypes = {
  onPress: PropTypes.func.isRequired,
};
