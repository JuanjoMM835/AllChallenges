import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from './components/Login';
import { Logout } from './components/Logout';

function App() {
  const { status } = useSelector(state => state.auth);

  return (
    <div>
      {status === 'authenticated' ? <Logout /> : <Login />}
    </div>
  );
}

export default App;
// el modo de funcionaiento es que te aparece un login y en un boton te dice si quieres hacer el registro por google y ya se ponen las credenciales 
//y el login funciona bien , te sale un mensaje de bienvenida jaja 