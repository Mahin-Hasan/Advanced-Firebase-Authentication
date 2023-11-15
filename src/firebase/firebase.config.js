// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP2Oorm-Th3tzWLXUmU-tSCAuXAbv5mn0",
  authDomain: "advanced-auth-firebase.firebaseapp.com",
  projectId: "advanced-auth-firebase",
  storageBucket: "advanced-auth-firebase.appspot.com",
  messagingSenderId: "34087041773",
  appId: "1:34087041773:web:c2152618e35e9ca0246ae4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;