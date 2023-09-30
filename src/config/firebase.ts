// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQnIA9bVQU_73eGiY_k7_0uSPbkFvoiZI",
  authDomain: "react-firebase-c9b72.firebaseapp.com",
  projectId: "react-firebase-c9b72",
  storageBucket: "react-firebase-c9b72.appspot.com",
  messagingSenderId: "997814250261",
  appId: "1:997814250261:web:04554b5f56475e061d971c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()