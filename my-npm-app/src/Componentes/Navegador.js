import { useState } from 'react';
import HistorialNavegacion from '../Listas/HistorialNavegacion';

export default function Navegador() {
  const [historial] = useState(() => {
    const h = new HistorialNavegacion();
    h.append("Página 1");
    h.append("Página 2");
    h.append("Página 3");
    return h;
  });

  const [pagina, setPagina] = useState(historial.actual?.valor || "Ninguna");
  const [historialStr, setHistorialStr] = useState(historial.print());

  const agregarPagina = () => {
    const valor = prompt("URL de la página:");
    if (valor) {
      historial.append(valor);
      setPagina(valor);
      setHistorialStr(historial.print());
    }
  };

  return (
    <div>
      <h2>Navegador</h2>
      <p>Página actual: {pagina}</p>
      <p>Historial: {historialStr}</p>
      <div>
        <button onClick={() => {
          const nuevaPagina = historial.atras();
          if (nuevaPagina) {
            setPagina(nuevaPagina);
            setHistorialStr(historial.print());
          }
        }}>Atrás</button>
        <button onClick={() => {
          const nuevaPagina = historial.adelante();
          if (nuevaPagina) {
            setPagina(nuevaPagina);
            setHistorialStr(historial.print());
          }
        }}>Adelante</button>
        <button onClick={agregarPagina}>Nueva Página</button>
      </div>
    </div>
  );
}