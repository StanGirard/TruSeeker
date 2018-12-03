 import firebase from 'firebase/app'
 import 'firebase/database'
 import 'firebase/firestore';
  
 const config = {
  apiKey: "AIzaSyDU2FITsG6k4IXpNeAHKTqrdPexdSnu_Ls",
  authDomain: "choisy-rooms-reloaded.firebaseapp.com",
  databaseURL: "https://choisy-rooms-reloaded.firebaseio.com",
  projectId: "choisy-rooms-reloaded",
  storageBucket: "",
  messagingSenderId: "845052601624"
};

firebase.initializeApp(config);

export default firebase;