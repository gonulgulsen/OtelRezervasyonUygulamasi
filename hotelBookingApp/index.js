import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import firebase from '@react-native-firebase/app'; // Firebase kütüphanesini ekledik
import firebaseConfig from './firebaseconfig'; // Firebase'den alınan config bilgileri

// Firebase'i başlat
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);

