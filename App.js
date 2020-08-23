import 'react-native-gesture-handler';
import React from 'react';
import Cadastro from './src/pages/Cadastro';
import {Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {unlogSession} from './src/Storage';

import LoginScreen from './src/pages/Login';
import AreaLogada from './src/pages/AreaLogada';
import RecuperarSenha from './src/pages/RecuperarSenha';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={AreaLogada}
          options={{title: 'Bem vindo', headerLeft: null}}
        />
        <Stack.Screen
          name="Register"
          component={Cadastro}
          options={{title: 'Cadastro'}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={RecuperarSenha}
          options={{title: 'Recuperar senha'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
