import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAORVnlc9XglkZZhxnZONH9rtGmhaFkpiw",
    authDomain: "facebook-clone-3f9ba.firebaseapp.com",
    databaseURL: "https://facebook-clone-3f9ba.firebaseio.com",
    projectId: "facebook-clone-3f9ba",
    storageBucket: "facebook-clone-3f9ba.appspot.com",
    messagingSenderId: "120527698537",
    appId: "1:120527698537:web:3449a817f0e150a84380f8",
    measurementId: "G-X1K5RJ43DG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth  = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;