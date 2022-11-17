import React from "react";
import { NotificationTitle,StyledNotificationTutor,NotificationText,Arrow ,ContentsNotification,colours, ScrollText} from './styles'
import {Ionicons} from '@expo/vector-icons';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { FlatList } from "react-native";
import styled from 'styled-components/native';

const {secondary,primary}= colours;
const ContentView = styled.View`
    border-width: 1px;
    border-color: white;
    border-radius:5px;
    padding:10px;
    height: 100px;
    margin-left: 10px;
    
`;
const Separator = styled.View`
    height: 4px;
    width: 100%;
`;

const ScrollBodyText = styled.Text`
    font-size: 12px;
    color: white;
`;

const TitleIcon = styled.View`
    display: flex;
    flex-direction:row;
`;



export class PendingStudentsTutors extends React.Component {
    render(){
    return (
      <StyledNotificationTutor >
        
              <NotificationTitle> Hello </NotificationTitle>
              <ContentsNotification>
                
              <NotificationText>5 of your students have been flagged this week</NotificationText>
              <Arrow><Ionicons name="ios-arrow-forward" size={30} color={primary}/></Arrow>

              </ContentsNotification>
              <FlatList
                data={[{id:1, title: "Evie Stokes" , warning: "Found 3 labs harder than rest of class"},
                {id:2, title: "Ben Johnson", warning: "In danger zone for 3 labs"},
                 {id:3, title: "Jessica Boath", warning: "Found 2 labs very hard"},
                  {id:4, title: "Alex Richardson", warning: "Found 2 labs hard to prepare for"},
                   {id:5, title:"Saorla McGurk", warning: "Found 1 lab very hard"}]}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={
                    ({ item }) => 
                        <ContentView>
                            <TitleIcon>
                            <ScrollText>{item.title}</ScrollText>
                            <Arrow><Ionicons name="alert" size={30} color={secondary}/></Arrow>
                            </TitleIcon>
                            <ScrollBodyText> {item.warning}</ScrollBodyText>
                        </ContentView>
                }
            />
            </StyledNotificationTutor>

    );

    }

    
  }

