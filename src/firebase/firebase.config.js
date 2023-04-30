// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPN0F43OoaUFQAyAimJrMtlbQMqnZMst4",
    authDomain: "the-news-dragon-bdf09.firebaseapp.com",
    projectId: "the-news-dragon-bdf09",
    storageBucket: "the-news-dragon-bdf09.appspot.com",
    messagingSenderId: "728809810653",
    appId: "1:728809810653:web:f27eef3adc52efc82b0934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;