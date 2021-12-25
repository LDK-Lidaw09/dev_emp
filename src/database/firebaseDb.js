import  firebase from 'firebase';
import "firebase/auth"
import "firebase/firebase-firestore"

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

const db = fire.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();

const storage = firebase.storage();



export{auth, provider,storage, db};
export default fire;

