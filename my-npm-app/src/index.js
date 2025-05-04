import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';


setTimeout(() => {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('¡Elemento root no encontrado!');
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}, 100); // Pequeño retardo para sincronización