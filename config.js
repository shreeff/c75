import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDq1r8ZAyFRhUyavvziS34ERQHOoWqXrvw",
  authDomain: "e-ride-dfdc9.firebaseapp.com",
  databaseURL: "https://e-ride-dfdc9-default-rtdb.firebaseio.com",
  projectId: "e-ride-dfdc9",
  storageBucket: "e-ride-dfdc9.appspot.com",
  messagingSenderId: "993875261240",
  appId: "1:993875261240:web:ea11a6e8f112a3253ef3cd"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
