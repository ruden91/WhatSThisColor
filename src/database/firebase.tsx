import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDbsU93kFNylbMKUnztx-spczCri9SS-Kk',
  authDomain: 'whatsthiscolor.firebaseapp.com',
  databaseURL: 'https://whatsthiscolor.firebaseio.com',
  projectId: 'whatsthiscolor',
  storageBucket: 'whatsthiscolor.appspot.com',
  messagingSenderId: '1014069762190'
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
