import { Link } from "react-router-dom";
import { useAuth } from "../Autenticacion/AuthContext";

const Privado = () => {
  const { usuario, cerrarSesion } = useAuth();

  return (
    <div>
      <h2>Página Privada</h2>
      <p>Bienvenido, {usuario.nombre}</p>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
      <Link to="/">Ir a Inicio</Link>
    </div>
  );
};

export default Privado;
