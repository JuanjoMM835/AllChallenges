import { Link } from 'react-router-dom';

export default function Navegacion() {
  return (
    <nav>
      <Link to="/">Reproductor</Link>
      <Link to="/navegador">Navegador</Link>
    </nav>
  );
}