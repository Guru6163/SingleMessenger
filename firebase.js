import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnz3c4IiiKKg3S8513qSh8X8m2eFgwilg",
  authDomain: "signal-clone-a4d19.firebaseapp.com",
  projectId: "signal-clone-a4d19",
  storageBucket: "signal-clone-a4d19.appspot.com",
  messagingSenderId: "27292909616",
  appId: "1:27292909616:web:5bbdb025a8421942eeedf5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
