import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { // configuracion con el proyecto de firebase 
    apiKey: "AIzaSyB7QZQR5EkWvDQasoozmoD4LIUza2F6oiU",
    authDomain: "challenge12-d26a6.firebaseapp.com",
    projectId: "challenge12-d26a6",
    storageBucket: "challenge12-d26a6.firebasestorage.app",
    messagingSenderId: "313663777675",
    appId: "1:313663777675:web:fd798bda5e9ce103555d8e",
    measurementId: "G-GDK6080E7N"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
