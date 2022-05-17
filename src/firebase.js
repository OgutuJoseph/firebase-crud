import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "fir-crud-cdb0b.firebaseapp.com",
    projectId: "fir-crud-cdb0b",
    storageBucket: "fir-crud-cdb0b.appspot.com",
    messagingSenderId: "783386807238",
    appId: "1:783386807238:web:c768046058d4d493c4c0c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);