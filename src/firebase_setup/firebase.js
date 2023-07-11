// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDem77eTYr0lzx9w50QkZ-LsTH_usCpbZA",
  authDomain: "loopin-persona-test.firebaseapp.com",
  databaseURL: "https://loopin-persona-test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "loopin-persona-test",
  storageBucket: "loopin-persona-test.appspot.com",
  messagingSenderId: "353356592053",
  appId: "1:353356592053:web:de2b11612c98f455285ffc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);