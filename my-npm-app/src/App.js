import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navegacion from './Componentes/Navegacion';
import Navegador from './Componentes/Navegador';
import Reproductor from './Componentes/Reproductor';

export default function App() {
  return (
    <Router>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Reproductor />} />
        <Route path="/navegador" element={<Navegador />} /> 
      </Routes>
    </Router>
  );
}
//Aqui hice el manejo de las rutas del aplicativo utilizando Router, despues hemm los llamo mediante el Link que esta en Navegacion.