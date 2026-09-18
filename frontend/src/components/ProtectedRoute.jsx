import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth.js";

export default function ProtectedRoute({ children }) {
  const hasToken = isAuthenticated();

  if (!hasToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
