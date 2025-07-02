import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../lib/auth/auth-context";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
