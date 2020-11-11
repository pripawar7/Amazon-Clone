import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDI3HfKMfmTwY5vCxqSmty5NKl77eEaPuA",
    authDomain: "clone-e9374.firebaseapp.com",
    databaseURL: "https://clone-e9374.firebaseio.com",
    projectId: "clone-e9374",
    storageBucket: "clone-e9374.appspot.com",
    messagingSenderId: "959009116105",
    appId: "1:959009116105:web:1cd20b3479ea11f6286218",
    measurementId: "G-T7ZG4CLVE9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
