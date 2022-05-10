// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlVFx1uZ9lZKx6mmxUH6j1PX4nyxHWlug",
    authDomain: "tekmiapp-c1f14.firebaseapp.com",
    projectId: "tekmiapp-c1f14",
    storageBucket: "tekmiapp-c1f14.appspot.com",
    messagingSenderId: "103473074239",
    appId: "1:103473074239:web:2c6e21cb3977d776f9688a",
    measurementId: "G-K8ZGQXVLT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth();

export { db, collection, googleAuthProvider, auth };