import { useQuery } from "@tanstack/react-query";
import { getLikes } from "../../services/apiLikes";

export function useLikes() {
  const { isLoading, data: likes } = useQuery({
    queryKey: ["likes"],
    queryFn: getLikes,
  });
  return { isLoading, likes };
}
