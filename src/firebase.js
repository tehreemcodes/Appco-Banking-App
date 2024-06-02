import firebase from "firebase";

const firebaseConfig = {
  apiKey: "yourAPIKey",
  authDomain: "yourAuthDomain",
  projectId: "yourAuthDomain",
  storageBucket: "yourAuthDomain",
  messagingSenderId: "yourID",
  appId: "yourId",
  measurementId: "YourCred"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export {auth};
export default db;
