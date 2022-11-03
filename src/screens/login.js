import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

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

import {View} from 'react-native'
const {secondary,primary}= colours;

const Login = () => {
  const[hidePassword,setHidePassword]= useState(true);
  return (
    <StyledContainer>
      <InnerContainer>
        <StatusBar style="dark"/>
        <Logo resizeMode="cover" source={require('./../assets/icon.png')} />
        <PageTitle>Mindscape</PageTitle>
        <SubTitle>Log in</SubTitle>
        <Formik
          initialValues={{email:'', password:''}}
          onSubmit={(values)=> {
            console.log(values)
          }}
        >
          {({handleChange,handleBlur,handleSubmit,values})=> (<StyledFormArea>
            <TextInput 
              label = "Email"
              icon ="mail"
              placeholder = "john@mail.com"
              placeholderTextColor={primary}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            <TextInput 
              label ="Password"
              icon ="lock"
              placeholder = "********"
              placeholderTextColor={primary}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
              isPassword={true}

            />
            <StyledButton onPress={handleSubmit}>
              <ButtonText>
                Login
              </ButtonText>
            </StyledButton>
          </StyledFormArea>)}

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