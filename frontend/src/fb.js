import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDyibpXJGNn7VX-Fa262CkqYfU9bnmZZns",
    authDomain: "linkedin-clone-1c518.firebaseapp.com",
    projectId: "linkedin-clone-1c518",
    storageBucket: "linkedin-clone-1c518.appspot.com",
    messagingSenderId: "248278629116",
    appId: "1:248278629116:web:8bcc58bbedcbaa2948f579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export { db, auth };