import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAMuprsUUSBvAFgoCUDqKkCEq-V0JkHL2c',
  authDomain: 'tanya-dokter-01.firebaseapp.com',
  databaseURL: 'https://tanya-dokter-01.firebaseio.com',
  projectId: 'tanya-dokter-01',
  storageBucket: 'tanya-dokter-01.appspot.com',
  messagingSenderId: '409568839786',
  appId: '1:409568839786:web:038f054db4bdebc042e213',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Firebase = firebase;

export default Firebase;
