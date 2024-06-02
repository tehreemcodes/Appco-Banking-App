import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1W1XGMpXUfj0UX_IqI5o9DD3rCyKcrvw",
  authDomain: "my-e-wallet-1630.firebaseapp.com",
  projectId: "my-e-wallet-1630",
  storageBucket: "my-e-wallet-1630.appspot.com",
  messagingSenderId: "468282967940",
  appId: "1:468282967940:web:c08cbd2d3cad469e283fd1",
  measurementId: "G-0RZ5TG7W8F"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export {auth};
export default db;
