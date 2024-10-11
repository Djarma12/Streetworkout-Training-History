import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function CheckLoginRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (
        location.pathname.slice(1) === "login" &&
        isAuthenticated &&
        !isLoading
      ) {
        navigate("/trainings");
      }
    },
    [isLoading, isAuthenticated, navigate, location]
  );

  if (isLoading) return null;

  // If there ISN'T a user, render the login page
  if (!isAuthenticated) return children;
}

export default CheckLoginRoute;
