import React from 'react';
import "./App.css";
import StackControls from './Componentes/ControlarStack';
import Counter from './Componentes/Counter';
import StackDisplay from './Componentes/StackDisplay';

function App() { // invocacion de el controller , counter y el display del stack y ya jaja
  return (
    <div style={{ padding: '20px' }}>
      <h1>Redux Challenge </h1>
      <Counter />
      <hr />
      <StackControls />
      <StackDisplay />
    </div>
  );
}

export default App;
