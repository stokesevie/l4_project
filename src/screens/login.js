import React from 'react';

import {
  styledContainer,
  innerContainer,
  logo,
  pageTitle
} from './../components/styles';

const Login = () => {
  return (
    <styledContainer>
      <innerContainer>
        <logo resizeMode="cover" source={require('./../assets/icon.png')} />
        <pageTitle>Mindscape</pageTitle>
      </innerContainer>
    </styledContainer>
  );
}
export default Login;