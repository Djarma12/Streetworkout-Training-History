import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/apiAuth";

export function useUserData(userId) {
  const { isLoading, data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(userId),
  });

  return {
    isLoading,
    userData,
  };
}
