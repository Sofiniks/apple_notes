import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXGbgMqQ3s4NYNj-VvAKBSJp52tIha35M",
  authDomain: "apple-notes-abd46.firebaseapp.com",
  projectId: "apple-notes-abd46",
  storageBucket: "apple-notes-abd46.appspot.com",
  messagingSenderId: "971153857821",
  appId: "1:971153857821:web:a68aa0b14915480ce195f4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export  {db, auth};
