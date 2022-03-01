import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbpH6KYjHEik5cdTe6afZbZWuMm1sO7Lw",
  authDomain: "gallery-app-55a14.firebaseapp.com",
  projectId: "gallery-app-55a14",
  storageBucket: "gallery-app-55a14.appspot.com",
  messagingSenderId: "587661771819",
  appId: "1:587661771819:web:7f364e2f9114a48fd4d66e",
  measurementId: "G-DP8SY3KXEM",
});

const db = firebaseApp.firestore();

export default db;
