
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { auth } from './Firebase/config';
import { login, logout } from './store/auth/authSlice';
import { store } from './store/store';

// Observador de autenticación
auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }));
  } else {
    store.dispatch(logout());
  }
});

// Renderizado para React 
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);