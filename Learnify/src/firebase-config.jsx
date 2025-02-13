// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHz58ahKX6pEomGvl3ofKEESkYM_DhNNk",
  authDomain: "learnify-ce846.firebaseapp.com",
  projectId: "learnify-ce846",
  storageBucket: "learnify-ce846.firebasestorage.app",
  messagingSenderId: "946994299658",
  appId: "1:946994299658:web:9a065776fa7563caf3f0f3",
  measurementId: "G-249F04LDCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// export const db = getFirestore(app);
export const auth = getAuth(app);
console.log("Firebase Analytics initialized:", analytics);
