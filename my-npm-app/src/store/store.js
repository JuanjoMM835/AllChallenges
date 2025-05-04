import { configureStore } from '@reduxjs/toolkit';
import { db } from '../firebase/confing';
import firebaseReducer from '../firebase/firebaseSlice';

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { db }, // Inyecta Firebase en los thunks
      },
      serializableCheck: false,
    }),
});