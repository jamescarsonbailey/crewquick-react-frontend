import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { token } = useContext(AuthContext);

  if (!token) {
    // Not authenticated → redirect to login
    return <Navigate to="/login" replace />;
  }

  // Authenticated → render children (dashboard or other protected pages)
  return <>{children}</>;
}
