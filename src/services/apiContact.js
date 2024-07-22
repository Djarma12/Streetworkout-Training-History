import emailjs from "@emailjs/browser";

export async function sendMessage(message) {
  await emailjs.send("service_284tpr9", "template_87q8uuc", message, {
    publicKey: "ldXcDX38RU44_oqbW",
  });
}
