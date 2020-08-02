import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcYkk0DoP52-DTIkwwt72kPWYr7AkkPRo",
  authDomain: "tiktok-clone-20027.firebaseapp.com",
  databaseURL: "https://tiktok-clone-20027.firebaseio.com",
  projectId: "tiktok-clone-20027",
  storageBucket: "tiktok-clone-20027.appspot.com",
  messagingSenderId: "583402038725",
  appId: "1:583402038725:web:3366bb992c2026e64c57ac",
  measurementId: "G-RFPZHZCEMF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
