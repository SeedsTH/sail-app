import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTJYkZcOE-H3QVJGyKWkI6EOIvHzy_Czc",
    authDomain: "technoji.firebaseapp.com",
    projectId: "technoji",
    storageBucket: "technoji.appspot.com",
    messagingSenderId: "1090356610167",
    appId: "1:1090356610167:web:ade821d4b6058faa69f272"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();