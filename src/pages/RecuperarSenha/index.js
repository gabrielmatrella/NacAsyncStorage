import React, {useState} from 'react';
import {updatePassword, getUser} from '../../Storage';
import Button from '../../components/Button';
import * as S from './styles';

const Cadastro = ({navigation}) => {
  const [user, setUser] = useState({});

  const handleChangePassword = () => {
    if (!user.email) {
     return alert('preencha o email');
    }
    if (!user.password) {
     return alert('preencha a nova senha');
    }
    if (!user.confirmPassword) {
     return alert('confirme a nova senha');
    }

    getUser(user.email, (error, data) => {
      if (!data) return alert('Usuário não existe no sistema');
        const {name} = JSON.parse(data);
        user.name = name;

      updatePassword(user.email, user, (error) => {
        if (error) return alert(error);
        alert('Senha alterada com sucesso!');
        setUser({});
        navigation.navigate('Login');
      });
    });
  };

  return (
    <S.Container>
      <S.RegisterText size={40} color="#707070">
        Atualizar senha
      </S.RegisterText>
      <S.RegisterInput
        placeholder="Email"
        value={user.email}
        onChangeText={(text) => setUser((data) => ({...data, email: text}))}
      />
      <S.RegisterInput
        placeholder="Senha"
        value={user.password}
        onChangeText={(text) => setUser((data) => ({...data, password: text}))}
      />
      <S.RegisterInput
        value={user.confirmPassword}
        placeholder="Confirmar senha"
        secureTextEntry
        onChangeText={(text) => setUser((data) => ({...data, confirmPassword: text}))}
      />

      <Button
        onPress={() => handleChangePassword()}>
        <S.RegisterText size={20} color="#ffff">
          Atualizar
        </S.RegisterText>
      </Button>
    </S.Container>
  );
};

export default Cadastro;
