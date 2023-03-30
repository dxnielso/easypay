// React router
import { Navigate, Outlet } from "react-router-dom";

// Firebase
import { useAuth } from "../../firebase";

// Navigate, useNavigate

const PrivateRoutes = () => {
  const currentUser = useAuth()

  // Si aun no procesa la peticion Firebase
  if (currentUser === undefined) {
    return null; // or loading spinner, etc...
  }
  
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
