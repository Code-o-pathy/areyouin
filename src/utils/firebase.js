// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaILfG-ADSQLFzgS5paICkWOqE37-muPw",
  authDomain: "areyouin-2cc40.firebaseapp.com",
  projectId: "areyouin-2cc40",
  storageBucket: "areyouin-2cc40.firebasestorage.app",
  messagingSenderId: "581009586851",
  appId: "1:581009586851:web:c4498f8549290dc2f55d16",
  measurementId: "G-D76RBYSM5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();