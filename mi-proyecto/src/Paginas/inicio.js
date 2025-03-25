import { Link } from "react-router-dom";
import { useAuth } from "../Autenticacion/AuthContext";

const Inicio = () => {
  const { iniciarSesion } = useAuth();
  console.log("Función iniciarSesion:", iniciarSesion); 
  return (
    <div>
      <h2>Página Pública</h2>
      <button onClick={() => {console.log("Botón presionado"); iniciarSesion("Juan Pérez")}}>Iniciar Sesión</button>
      <Link to="/privado">Ir a Página Privada</Link>
    </div>
  );
};

export default Inicio;
