import 'react-native-gesture-handler';
import React from 'react';
import {
  View,Text,Button,StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Button title="Logar" onPress={()=> {navigation.navigate('Home', {})}}></Button>
      <Button title="Não é registrado? Clique aqui" onPress={()=> {navigation.navigate('Register', {})}}></Button>
    </View>
  );
}
const HomeScreen = () => {
  return <Text>Seja bem vindo: ((Preencher com usuario logado do asyncstorage))</Text>;
};
const RegisterScreen = () => {
  return <Text>Criar formulario de registro com campos nome,email,senha,confirmar senha</Text>;
};
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} options={{title:"Bem vindo"}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{title:"Cadastro"}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});




export default App;
