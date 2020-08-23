import 'react-native-gesture-handler';
import React from 'react';
import Cadastro from './src/pages/Cadastro';
import {Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {unlogSession} from './src/Storage';

import LoginScreen from './src/pages/Login';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const unlogUser = () => {
    unlogSession('userLogged', () => {
      navigation.navigate('Login', {});
    });
  };

  return (
    <Text>
      Seja bem vindo: ((Preencher com usuario logado do asyncstorage))
      <Button
        onPress={() => unlogUser()}
        title="Deslogar" />
    </Text>
  );
};

const ForgotPasswordScreen = () => {
  return <Text>Formulario para criar nova senha para o usuario</Text>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Bem vindo', headerLeft: null}}
        />
        <Stack.Screen
          name="Register"
          component={Cadastro}
          options={{title: 'Cadastro'}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{title: 'Recuperar senha'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
