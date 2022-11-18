import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { XYGrid, XYGridText,XMin, YMin } from '../components/styles';
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
          <YMin><XYGridText >Y Label Min</XYGridText>
          {/* style={{transform:[{rotate:'270deg'}]}} */}
          <XYGridText>Y Label Max</XYGridText>
          </YMin>
          <XMin>
          <XYGridText>X Label Min</XYGridText>
          </XMin>
          </XYGrid>
          
          </ContentJustified>
          <NavBar navigation={navigation}></NavBar>
        </View>
    )
}

export default Survey;
 