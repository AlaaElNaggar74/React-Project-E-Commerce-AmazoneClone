import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7HIVljrsczSuqtpGprwAJwYub5RlXSEQ",
  authDomain: "reactclone-c811f.firebaseapp.com",
  projectId: "reactclone-c811f",
  storageBucket: "reactclone-c811f.appspot.com",
  messagingSenderId: "1022572769855",
  appId: "1:1022572769855:web:2313bc6d01f4bf4465be8a",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const auth = firebase.auth(firebaseApp);

export { auth };
