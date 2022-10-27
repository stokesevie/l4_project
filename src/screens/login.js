import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {Formik} from 'formik';
import {Octicons} from '@expo/vector-icons';
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
  colours
} from './../components/styles';

import {View} from 'react-native'
const {secondary,primary}= colours;

const Login = () => {
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
          </StyledFormArea>)}

        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const TextInput = ({label, icon, ...props}) =>{
  return(
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={primary}/>
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props}/>
    </View>
  )
}

export default Login;