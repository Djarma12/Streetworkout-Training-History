import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { useContact } from "./useContact";

function ContactForm() {
  const { sendMessage, isSending } = useContact();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  function onSubmit(formData) {
    console.log(formData);
    sendMessage(formData);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical error={errors?.name?.message}>
        <Input
          placeholder="Name"
          name="name"
          disabled={isSending}
          control={control}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>
      <FormRowVertical error={errors?.email?.message}>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          disabled={isSending}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical error={errors?.message?.message}>
        <Input
          as="textarea"
          placeholder="Create a message here"
          name="message"
          disabled={isSending}
          control={control}
          {...register("message", {
            required: "This field is required",
          })}
        />
      </FormRowVertical>
      <Button variation="primary" onClick={() => {}}>
        Send message
      </Button>
    </Form>
  );
}

export default ContactForm;
