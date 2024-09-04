import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useUpdateLikes } from "./useUpdateLikes";
import { DEBOUNCED_TIME_LIKES } from "../../utils/contants";

export function useDebouncedLikes({ likes }) {
  const [pendingLikes, setPendingLikes] = useState(likes.all_likes);
  const [count, setCount] = useState(0);
  const { updateLikes } = useUpdateLikes();
  const debouncedUpdate = useDebouncedCallback(
    () => updateLikes({ ...likes, all_likes: pendingLikes }),
    DEBOUNCED_TIME_LIKES
  );

  useEffect(() => {
    if (count > 0) {
      debouncedUpdate();
    }
  }, [count, pendingLikes, debouncedUpdate]);

  const handleCount = () => {
    setPendingLikes((prev) => prev + 1);
    setCount((v) => v + 1);
  };

  return { handleCount, count, pendingLikes };
}
