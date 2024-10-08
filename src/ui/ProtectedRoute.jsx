import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load authenticated user
  const { isLoading, isAuthenticated } = useUser();
  // 2. If tere is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/");
      }
    },
    [isLoading, isAuthenticated, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading) return null;

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
