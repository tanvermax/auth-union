// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCxQ-hDnmIvdYASroiIP195TVsSBT6Xlo",
  authDomain: "moha-milon-89a5d.firebaseapp.com",
  projectId: "moha-milon-89a5d",
  storageBucket: "moha-milon-89a5d.firebasestorage.app",
  messagingSenderId: "589510934266",
  appId: "1:589510934266:web:8796b1a7724bda283d5343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);