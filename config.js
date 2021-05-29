import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDKICKPQObo0riOdc9dqfKgqnr99gcL4rU",
    authDomain: "my-app-d2a29.firebaseapp.com",
    databaseURL: "https://my-app-d2a29-default-rtdb.firebaseio.com",
    projectId: "my-app-d2a29",
    storageBucket: "my-app-d2a29.appspot.com",
    messagingSenderId: "471017494592",
    appId: "1:471017494592:web:0a79817f9546dc59e127a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();