import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProveedorAutenticacion } from "./Autenticacion/AuthContext";
import RutaPrivada from "./Componentes/RutaPrivada";
import Inicio from "./Paginas/inicio";
import Privado from "./Paginas/privado";

const App = () => {
  return (
    <ProveedorAutenticacion>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/privado" element={<RutaPrivada><Privado /></RutaPrivada>} />
        </Routes>
      </Router>
    </ProveedorAutenticacion>
  );
};

export default App;
