import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { XYGrid, XYGridText,XMin, YMin, Grid, YText, YTextMin } from '../components/styles';
import { NavBar } from '../components/NavBar';
import {

    PageTitle,
    SubTitle,

    ContentJustified,

  } from '../components/styles';

const Survey = ({navigation}) => {
    return (
        <View>
          <ContentJustified>
          <PageTitle>Mindmap</PageTitle>
          <SubTitle> This is a survey for your lab NOSE2: week 4</SubTitle>
          <XYGrid>
            <XMin>
        <XYGridText>X Label Max</XYGridText> 
        </XMin>
          <YMin><YTextMin >Y Label Min</YTextMin>
          <Grid></Grid>
          {/* style={{transform:[{rotate:'270deg'}]}} */}
          <YText> Y Label Max </YText>
          
          </YMin>

          <XYGridText>X Label Min</XYGridText>

          </XYGrid>
          
          </ContentJustified>
          <NavBar navigation={navigation}></NavBar>
        </View>
    )
}

export default Survey;
 