
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRCvCWUU7IZGfULlKr3J0nhbACF54EMiE",
    authDomain: "twitter-clone-70029.firebaseapp.com",
    projectId: "twitter-clone-70029",
    storageBucket: "twitter-clone-70029.appspot.com",
    messagingSenderId: "30282008523",
    appId: "1:30282008523:web:c9b25bb13a78977b07d84e",
    measurementId: "G-19F1N1PFN9"
  };

  const firebaseApp = firebase.intializeApp(firebaseConfig);

  const db = firebaseApp.firestore()

  export default db;