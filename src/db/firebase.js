import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdzv1gJkvK7lNbklI74_saiDfxavAPHYg",
  authDomain: "game-store-589e9.firebaseapp.com",
  projectId: "game-store-589e9",
  storageBucket: "game-store-589e9.appspot.com",
  messagingSenderId: "934644001550",
  appId: "1:934644001550:web:d5e13c838af818df98855f",
  measurementId: "G-R0QXGTJHM4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //db will store purchases made by each user
const auth = firebase.auth(); //authentication

export { db, auth };