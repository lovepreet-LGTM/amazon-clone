// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuQtGmoK4rsw4N_pSDcsERle5WEhvYbnM",
    authDomain: "clone-6d54c.firebaseapp.com",
    projectId: "clone-6d54c",
    storageBucket: "clone-6d54c.appspot.com",
    messagingSenderId: "391711268536",
    appId: "1:391711268536:web:7f4272e2027bd2e7b31e4d",
    measurementId: "G-E8FK860LKL"
  };
//initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export{ db, auth};


