import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Arrow,colours } from './styles';
import { Ionicons } from '@expo/vector-icons';

const {secondary,primary}= colours;

const books = [
    { id: 0, title: 'JavaScript & JQuery: Web Development' },
    { id: 1, title: 'To Sleep in a Cloud of Stars' },
    { id: 2, title: 'Dance on the Moon' },
    { id: 3, title: 'Best birthday party with enemies' },
    { id: 4, title: 'Second thought changed my life' },
    { id: 5, title: 'Master data science with deep neural network' },
    { id: 6, title: 'Rest Api with SpringBoot Data Rest Modified Title2' },
    { id: 7, title: 'Rest Api with Django rest framework' },
    { id: 8, title: 'Change life with Yoga' },
    { id: 9, title: 'How the mind works' },
    { id: 10, title: 'How to analyze people' }
];

const ContentView = styled.TouchableOpacity`
    border-width: 1px;
    border-color: black;
    border-radius:5px;
    padding:10px;
    height: 100px;
    margin-left: 10px;
`;
const Separator = styled.View`
    height: 4px;
    width: 100%;
`;

const ScrollText = styled.Text`
    flex-direction:row;
    width: 80%;
    font-size: 19px;
    font-weight: bold;
    color:Black;
`;

const ScrollBodyText = styled.Text`
    font-size: 12px;
`;

const TitleIcon = styled.View`
    display: flex;
    flex-direction:row;
`;



class ScrollList extends React.Component {
    render(){
        const {navigation}= this.props
    return(
        <View>
            <FlatList
                style={{
                    height: 589
                }}
                data={books}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={
                    ({item}) => 
                        <ContentView onPress={()=>{navigation.navigate("StudentDashboard")}}>
                            <TitleIcon>
                            <ScrollText>{item.title}</ScrollText>
                            <Arrow><Ionicons name="alert" size={30} color={secondary}/></Arrow>
                            </TitleIcon>
                            <ScrollBodyText> You need to complete this survey</ScrollBodyText>
                        </ContentView>
                }
            />
        </View>
    );
    
    }
};


export default ScrollList;