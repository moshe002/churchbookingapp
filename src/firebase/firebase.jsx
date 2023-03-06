// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore'
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWJbbHZOrAp6Q0Uh4rMWbGQ4o751HGm7g",
  authDomain: "praybook-4b0a1.firebaseapp.com",
  projectId: "praybook-4b0a1",
  storageBucket: "praybook-4b0a1.appspot.com",
  messagingSenderId: "209500712723",
  appId: "1:209500712723:web:20323ffba159e685feb4e6",
  measurementId: "G-95CE31BF7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app)

