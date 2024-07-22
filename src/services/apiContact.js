import emailjs from "@emailjs/browser";

export async function sendMessage(message) {
  try {
    await emailjs.sendForm("service_m0re627", "template_87q8uuc", message, {
      publicKey: "ldXcDX38RU44_oqbW",
    });
    console.log("SUCCESS!");
  } catch (error) {
    console.log("FAILED...", error.text);
  }
}
