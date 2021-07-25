import  firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDWt7YG4sjwsBub1AnVAyNgEQTnqpK2zPQ",
    authDomain: "memoire-57233.firebaseapp.com",
    projectId: "memoire-57233",
    storageBucket: "memoire-57233.appspot.com",
    messagingSenderId: "422155600521",
    appId: "1:422155600521:web:2edc8a86bc2572df02bc58"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

/*const db = fire.firestore();

const functions = firebase.functions();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();*/

export default fire;

