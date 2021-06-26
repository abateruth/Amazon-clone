
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCONEZQtigqA00giMN9Yi0sCobtBAIrhwU",
    authDomain: "app-13c70.firebaseapp.com",
    projectId: "app-13c70",
    storageBucket: "app-13c70.appspot.com",
    messagingSenderId: "432847428873",
    appId: "1:432847428873:web:8a2e0e4a19d724452dc7d8",
    measurementId: "G-NQYVZJ2WZR"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };