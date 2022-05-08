// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCn9pGM9dPGtcOCoM3umnzh4MopL7FlAxE",
    authDomain: "home-decor-bd.firebaseapp.com",
    projectId: "home-decor-bd",
    storageBucket: "home-decor-bd.appspot.com",
    messagingSenderId: "983100812218",
    appId: "1:983100812218:web:de1c97f8f4ed7d7a5f8b83",
    measurementId: "G-12HYR3SNCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };