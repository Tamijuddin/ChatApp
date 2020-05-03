import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBJNfS0nJ36xLvi7Ew7m0JTa9bG6en8yDc",
    authDomain: "vue-chat-app-40aaf.firebaseapp.com",
    databaseURL: "https://vue-chat-app-40aaf.firebaseio.com",
    projectId: "vue-chat-app-40aaf",
    storageBucket: "vue-chat-app-40aaf.appspot.com",
    messagingSenderId: "85503492546",
    appId: "1:85503492546:web:0782243559a762c9b2565b",
    measurementId: "G-PCRS872DLM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()  