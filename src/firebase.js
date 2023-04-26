// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";

import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAOM-7zurhPV1BoFLSQBQ_YdOfrw3nAQAg",
  authDomain: "twitter-clone-2ebdc.firebaseapp.com",
  projectId: "twitter-clone-2ebdc",
  storageBucket: "twitter-clone-2ebdc.appspot.com",
  messagingSenderId: "717437128273",
  appId: "1:717437128273:web:07e349a2b780bdbca2f270",
  measurementId: "G-FJJMSBT1N5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);


export const GoogleProvider = new GoogleAuthProvider();
const db = firebaseApp.firestore();
export default db;
