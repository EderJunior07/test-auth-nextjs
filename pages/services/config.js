import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCUEWuQ_ya2TfZXXtj97i899oqSA7Yi5KE',
    authDomain: 'delivery-55207.firebaseapp.com',
    projectId: 'delivery-55207',
    storageBucket: 'delivery-55207.appspot.com',
    messagingSenderId: '572552143021',
    appId: '1:572552143021:web:1414d2e86967fd73166624',
    measurementId: 'G-C6CWBWC6KF',
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}