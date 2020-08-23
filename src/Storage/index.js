import AsyncStorage from '@react-native-community/async-storage';

export const insertUser = (key, user, callback = null) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(user), callback);
  } catch (e) {
    printError('Não foi possível inserir usuário');
  }
}

export const getUser = (key, callback = null) => {
  try {
    AsyncStorage.getItem(key, callback);
  } catch (e) {
    printError('Nâo foi possível ler o usuário com a chave', key);
  }
}

export const setSession = (key, isLogged, callback = null) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(isLogged), callback);
  } catch (e) {
    printError('Não foi possível setar a sessão');
  }
};

export const unlogSession = (key, callback = null) => {
  try {
    AsyncStorage.removeItem(key, callback);
  } catch (e) {
    printError('Não foi possível remover sessão do usuário');
  }
}; 

const printError = (error) => new Error(error);
