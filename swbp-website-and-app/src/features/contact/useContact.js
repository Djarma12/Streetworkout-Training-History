import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendMessage as sendMessageApi } from "../../services/apiContact";

export function useContact() {
  const { mutate: sendMessage, isLoading: isSending } = useMutation({
    mutationFn: sendMessageApi,
    onSuccess: () => {
      toast.success(
        "The message has been sent successfully, expect a reply as soon as possible."
      );
    },
    onError: (err) =>
      toast.error(
        `There was a problem while sending the message, contact us on Instagram or Mail. ${err}`
      ),
  });

  return { sendMessage, isSending };
}
