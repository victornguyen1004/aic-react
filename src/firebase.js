import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAkJOsUuYPBYKd4DrCnXUiTjJ61iDVMD9k",
  authDomain: "it-center-of-dlu.firebaseapp.com",
  databaseURL:
    "https://it-center-of-dlu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "it-center-of-dlu",
  storageBucket: "it-center-of-dlu.appspot.com",
  messagingSenderId: "563435977296",
  appId: "1:563435977296:web:8fa82b7cc7773e07c32f55",
  measurementId: "G-JF1X61G505",
});

const db = firebaseApp.firestore();

export { db };

