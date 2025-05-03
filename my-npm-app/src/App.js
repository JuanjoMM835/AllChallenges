import React, { useRef, useState } from 'react';
import { BinaryTree } from './arbol';
import { ArbolBinario } from './arbolBinario';

function App() {
  const arbolRef = useRef(new ArbolBinario());
  const [valor, setValor] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [recorridos, setRecorridos] = useState({ pre: [], in: [], post: [] });
  const [encontrado, setEncontrado] = useState(null);

  const actualizarRecorridos = () => {
    setRecorridos({
      pre: [...arbolRef.current.preorden()],
      in: [...arbolRef.current.inorden()],
      post: [...arbolRef.current.postorden()]
    });
  };

  const manejarInsercion = () => {
    const num = Number(valor);
    if (!isNaN(num)) {
      arbolRef.current.insertar(num);
      actualizarRecorridos();
      setValor('');
    }
  };

  const manejarBusqueda = () => {
    const num = Number(busqueda);
    setEncontrado(arbolRef.current.contiene(num));
    setBusqueda('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Ingresa un número"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={manejarInsercion} style={{ padding: '5px 15px' }}>
          Insertar
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar número"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={manejarBusqueda} style={{ padding: '5px 15px' }}>
          Buscar
        </button>
        {encontrado !== null && (
          <p style={{ color: encontrado ? 'green' : 'red', marginTop: '10px' }}>
            {encontrado ? "¡Valor encontrado!" : "Valor no existe"}
          </p>
        )}
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Recorridos:</h3>
        <p><strong>Preorden:</strong> {recorridos.pre.join(', ') || 'Vacío'}</p>
        <p><strong>Inorden:</strong> {recorridos.in.join(', ') || 'Vacío'}</p>
        <p><strong>Postorden:</strong> {recorridos.post.join(', ') || 'Vacío'}</p>
      </div>

      <h3>Visualización del Árbol:</h3>
      <BinaryTree arbol={arbolRef.current} />
    </div>
  ); // en esta parte de la visualizacion del arbol lo estuve probando y creo que hay cieras incertidumbres , ciertos vacios que jumm serian pequeños errores , pero el mapeo de los 3 tipos de orden si se hacen bien :)
}

export default App;