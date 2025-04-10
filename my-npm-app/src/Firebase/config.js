import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
// confing del firebase , es el codigo que nos da en la pagina donde creamos el proyecto 
const firebaseConfig = {
    apiKey: "AIzaSyB4dZ1Sp_ifTxT6ntLcicFZYsbhnYXuWLg",
    authDomain: "challenge11-5daa7.firebaseapp.com",
    projectId: "challenge11-5daa7",
    storageBucket: "challenge11-5daa7.firebasestorage.app",
    messagingSenderId: "752448183492",
    appId: "1:752448183492:web:e469e5a882c7d55dd23d91",
    measurementId: "G-GRL2GHEX6B"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // esto lo consulte en internet porque la verdad no sabia como hacerlo 

export {
    auth,
    googleProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
};
