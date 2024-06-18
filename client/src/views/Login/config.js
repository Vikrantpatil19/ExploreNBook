
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk0MGiexjKKvdiYmjyyEMuFJqPbrVpsVE",
  authDomain: "explorenbook-73a57.firebaseapp.com",
  projectId: "explorenbook-73a57",
  storageBucket: "explorenbook-73a57.appspot.com",
  messagingSenderId: "792210209010",
  appId: "1:792210209010:web:43b3fc90ea4758ca85f86b",
  measurementId: "G-2TL818BM7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth , provider};

