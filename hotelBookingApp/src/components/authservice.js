// authservice.js

import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Storage Error:', e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error('Storage Error:', e);
    return null;
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Storage Error:', e);
  }
};

const signIn = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    await storeData('isLoggedIn', 'true');
    console.log('Giriş başarılı');
  } catch (error) {
    console.error('Giriş hatası:', error);
  }
};

const signUp = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    await storeData('isLoggedIn', 'true');
    console.log('Kayıt başarılı');
  } catch (error) {
    console.error('Kayıt hatası:', error);
  }
};

const signOut = async () => {
  try {
    await auth().signOut();
    await removeData('isLoggedIn');
    console.log('Çıkış başarılı');
  } catch (error) {
    console.error('Çıkış hatası:', error);
  }
};

export { signIn, signUp, signOut, getData };

