import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBAxMXvIfvr7z1gFqBA6iV7hpQO8cI7Vaw",
    authDomain: "estructuras-cce58.firebaseapp.com",
    projectId: "estructuras-cce58",
    storageBucket: "estructuras-cce58.firebasestorage.app",
    messagingSenderId: "1019805343424",
    appId: "1:1019805343424:web:c4023d50caf70d42d95725",
    measurementId: "G-3Y32F3J6Y6"
  }; // configuracion del firebase segun el proyecto que tengo creado en firebase en la web me refiero 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db, onValue, push, ref, set };
