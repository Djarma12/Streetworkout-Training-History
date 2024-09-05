import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { debounceCallback } from "../utils/helpers";
import { DEBOUNCED_TIME_HEADER } from "../utils/contants";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("");
  const debounced = useDebouncedCallback(
    debounceCallback(scrollDirection, setScrollDirection),
    DEBOUNCED_TIME_HEADER
  );
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const handleLastScroll = (newScroll) => (lastScrollY = newScroll);
    const updateScrollDirection = () =>
      debounced(lastScrollY, handleLastScroll);
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection, debounced]);

  return scrollDirection;
}
