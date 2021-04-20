import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBs2BMBoyum5LJ_ZqLt9SUjRgs6wjl-fUg",
    authDomain: "react-app-curso-a084a.firebaseapp.com",
    projectId: "react-app-curso-a084a",
    storageBucket: "react-app-curso-a084a.appspot.com",
    messagingSenderId: "404922168249",
    appId: "1:404922168249:web:ef87bfb195c7319fa5bc68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  
  export{
      db,
      googleAuthProvider,
      firebase
  }
