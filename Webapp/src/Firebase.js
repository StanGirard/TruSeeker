 import firebase from 'firebase/app'
 import 'firebase/database'
  
  const config = {
    apiKey: "AIzaSyBTi4CjSycB9XIS-ts7yHOgyGA7xTYN0wI",
    authDomain: "trueseeker-9242a.firebaseapp.com",
    databaseURL: "https://trueseeker-9242a.firebaseio.com",
    projectId: "trueseeker-9242a",
    storageBucket: "trueseeker-9242a.appspot.com",
    messagingSenderId: "410726854765"
  };
  firebase.initializeApp(config);
  export const provider =new firebase.auth.GoogleAuthProvider();
  export const auth=firebase.auth();
  export default firebase;