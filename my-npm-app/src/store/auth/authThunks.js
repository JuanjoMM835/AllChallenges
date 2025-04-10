import {
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { auth, googleProvider } from '../../Firebase/config';
import { checkingCredentials, login, logout } from './authSlice';
  
  export const startLoginWithEmail = (email, password) => {
    return async (dispatch) => {
      dispatch(checkingCredentials());
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        dispatch(login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
      } catch (error) {
        dispatch(logout({ errorMessage: error.message }));
      }
    };
  };
  
  export const startGoogleSignIn = () => {
    return async (dispatch) => {
      dispatch(checkingCredentials());
      try {
        const { user } = await signInWithPopup(auth, googleProvider);
        dispatch(login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
      } catch (error) {
        dispatch(logout({ errorMessage: error.message }));
      }
    };
  };
  
  export const startLogout = () => {
    return async (dispatch) => {
      try {
        await signOut(auth);
        dispatch(logout());
      } catch (error) {
        console.log(error);
      }
    };
  };