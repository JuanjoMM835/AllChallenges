import { Navigate } from "react-router-dom";
import { useAuth } from "../Autenticacion/AuthContext";

const RutaPrivada = ({ children }) => {
  const { usuario } = useAuth();
  return usuario ? children : <Navigate to="/" />;
};

export default RutaPrivada;
