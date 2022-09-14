
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwqi5XAt0Rc5biFQbQgflB7ERDjPFpWNQ",
    authDomain: "chatapp-f51fc.firebaseapp.com",
    projectId: "chatapp-f51fc",
    storageBucket: "chatapp-f51fc.appspot.com",
    messagingSenderId: "995925946929",
    appId: "1:995925946929:web:fec23c68410bca62abdb10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)