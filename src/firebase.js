import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDurm6k-eQBPWOI6qqIbEB40-I8aQyGRAQ",
  authDomain: "fb-mern-clone-cc50b.firebaseapp.com",
  databaseURL: "https://fb-mern-clone-cc50b.firebaseio.com",
  projectId: "fb-mern-clone-cc50b",
  storageBucket: "fb-mern-clone-cc50b.appspot.com",
  messagingSenderId: "505189348567",
  appId: "1:505189348567:web:0bd79ba28050b5306dac92",
  measurementId: "G-5B4R3ZV85Y"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth  = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;