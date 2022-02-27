import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4wQ1P7XGcOvRDfkTfhYB6Yw6UD7Yi18s",
  authDomain: "linkedin-clone-85d7e.firebaseapp.com",
  projectId: "linkedin-clone-85d7e",
  storageBucket: "linkedin-clone-85d7e.appspot.com",
  messagingSenderId: "579686133701",
  appId: "1:579686133701:web:67e3d5e20c9df4f878a5ac",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
