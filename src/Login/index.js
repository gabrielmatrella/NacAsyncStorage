import React, { useState } from 'react';
import { View } from 'react-native';

import { getUser, setSession } from '../Storage';

import * as S from './styled';

const Login = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const validateFields = () => {
    if (!password || !email) return alert('Senha ou email vázio');

    setEmail('');
    setPassword('');
    setSession('userLogged', true);
    navigation.navigate('Home', {});
  };

  return (
    <View>
      <S.Input
        value={email}
        onChangeText={val => setEmail(val)}
        placeholder="Digite seu email"
      />
      <S.Input
        value={password}
        onChangeText={val => setPassword(val)}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />

      <S.SubmitWrapper >
        <S.Option
          onPress={() => validateFields()}
        >
          <S.Title>Logar</S.Title>
        </S.Option>
        <S.Option
          onPress={() => {
            navigation.navigate('Register', {});
          }}
        >
          <S.Title>Cadastre-se</S.Title>
        </S.Option>
        <S.Option
          onPress={() => {
            navigation.navigate('ForgotPassword', {});
          }}
        >
          <S.Title>Esqueceu sua senha? Clique aqui</S.Title>
        </S.Option>
      </S.SubmitWrapper>
    </View>
  )
};

export default Login;
