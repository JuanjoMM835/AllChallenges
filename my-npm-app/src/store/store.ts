import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';
import stackReducer from '../stack/stackSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stack: stackReducer
  }
});
//se realiza la configuracion de la tienda en tipo typescript , lo demas lo hice con javascript.