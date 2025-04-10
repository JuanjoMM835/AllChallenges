import { useState } from 'react';
import ListaCanciones from '../Listas/ListaCanciones';

export default function Reproductor() {
  const [lista] = useState(() => {
    const l = new ListaCanciones();
    l.append("Canción 1");
    l.append("Canción 2");
    l.append("Canción 3");
    return l;
  });

  const [listaStr, setListaStr] = useState(lista.print());

  const agregar = () => {
    const valor = prompt("Nombre de la canción:");
    if (valor) {
      lista.append(valor);
      setListaStr(lista.print());
    }
  };

  const buscar = () => {
    const valor = prompt("Canción a buscar:");
    if (valor) {
      alert(lista.peek(valor) ? "Canción encontrada" : "Canción no encontrada");
    }
  };

  const eliminar = () => {
    const valor = prompt("Canción a eliminar:");
    if (valor && lista.remove(valor)) {
      setListaStr(lista.print());
    }
  };

  return (
    <div>
      <h2>Reproductor</h2>
      <p>Lista: {listaStr}</p>
      <p>Tamaño: {lista.size()}</p>
      <div>
        <button onClick={agregar}>Agregar</button>
        <button onClick={buscar}>Buscar</button>
        <button onClick={eliminar}>Eliminar</button>
      </div>
    </div>
  );
}