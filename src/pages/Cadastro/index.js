import React, {useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {insertUser, getUser} from '../../Storage';
import Button from '../../components/Button';
import * as S from './styles';

const Cadastro = ({navigation}) => {
  const [user, setUser] = useState({});

  const handleRegister = () => {
    if (!user.name) {
      alert('preencha o nome');
    }
    if (!user.email) {
      alert('preencha o email');
    }
    if (!user.password) {
      alert('preencha a senha ');
    }

    getUser(user.email, (error, data) => {
      if (data) return alert('Usuário já existe no sistema');

      insertUser(user.email, user, (error) => {
        if (error) return alert(error);
        alert('Cadastrado com sucesso !');
        setUser({});
        navigation.navigate('Login');
      });
    });
  };

  return (
    <S.Container>
      <S.RegisterText marginb={30} size={40} color="#707070">
        Cadastro
      </S.RegisterText>
      <S.RegisterInput
        placeholder="Nome"
        value={user.name}
        onChangeText={(text) => setUser((data) => ({...data, name: text}))}
      />
      <S.RegisterInput
        placeholder="Email..."
        value={user.email}
        onChangeText={(text) => setUser((data) => ({...data, email: text}))}
      />
      <S.RegisterInput
        value={user.password}
        placeholder="Senha..."
        secureTextEntry
        onChangeText={(text) => setUser((data) => ({...data, password: text}))}
      />

      <Button width="80" marginTop="10" onPress={() => handleRegister()}>
        <S.RegisterText size={20} color="#ffff">
          Cadastrar
        </S.RegisterText>
      </Button>
    </S.Container>
  );
};

export default Cadastro;
