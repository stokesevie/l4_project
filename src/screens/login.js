import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import {Formik} from 'formik';
import {Octicons, Ionicons} from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
  Logo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  colours
} from './../components/styles';

import {View} from 'react-native';
const {secondary,primary}= colours;


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("TutorDashboard");
      }
    })

    return unsubscribe
  }, [])



  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        navigation.navigate("TutorDashboard");
      })
      .catch(alert(password))
  }
  
  return (
    <StyledContainer>
      <InnerContainer>
        <StatusBar style="dark"/>
        <Logo resizeMode="cover" source={require('./../assets/icon.png')} />
        <PageTitle>Mindmap</PageTitle>
        <SubTitle>Log in</SubTitle>
        <Formik
        >
          <StyledFormArea>
            <TextInput 
              label = "Email"
              icon ="mail"
              placeholder = "john@mail.com"
              placeholderTextColor={primary}
              onChangeText={text => setEmail(text)}
              value={email}
              keyboardType="email-address"
              autoCapitalize='none'
            />
            <TextInput 
              label ="Password"
              icon ="lock"
              isPassword={true}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              placeholderTextColor= {'white'}
              autoCapitalize='none'
              secureTextEntry

            />
            <StyledButton
                onPress={handleLogin}>
              <ButtonText>
                Login
              </ButtonText>
            </StyledButton>
          </StyledFormArea>

        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const TextInput = ({label, icon, isPassword, ...props}) =>{
  return(
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={primary}/>
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props}/>
      {isPassword && (
        <RightIcon>
          <Ionicons size={30} colour={primary}/>
        </RightIcon>
      )}
    </View>
  )
}

export default Login;