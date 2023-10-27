import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Add hidden because of Main element only scroll
export default function useBodyOverflow() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);
}
