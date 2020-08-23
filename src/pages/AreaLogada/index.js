import React, { useEffect, useState } from 'react';
import {Button, Text} from 'react-native'; 
import {unlogSession, getUser} from '../../Storage/';


const AreaLogada = ({navigation}) => {
    const [name, setName] = useState('');

    const unlogUser = () => {
      unlogSession('userLogged', () => {
        navigation.navigate('Login', {});
      });
    };

    useEffect(() => {
        getUser('userLogged', (err, data) => {
            const user = JSON.parse(data);
            setName(user.name);
        });
    }, []);
  
    return (
      <>
      <Text>
        Seja bem vindo: {name}
      </Text>
      <Text>
        Você está em uma área restrita
      </Text>
        <Button
          onPress={() => unlogUser()}
          title="Deslogar" />
      </>
    );
  };

  export default AreaLogada;