import { useMutation } from "@tanstack/react-query";
import { updateLikes as updatedLikesApi } from "../../services/apiLikes";

export function useUpdateLikes() {
  const { mutate: updateLikes } = useMutation({
    mutationFn: updatedLikesApi,
    onError: (err) => console.log(err),
  });

  return { updateLikes };
}
