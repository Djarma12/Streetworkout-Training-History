import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
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
      <FormRowVertical error={errors?.email_id?.message}>
        <Input
          placeholder="Email"
          type="email"
          name="email_id"
          disabled={isSending}
          {...register("email_id", {
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
      <FormRowVertical>
        <Button variation="primary" type="submit" disabled={isSending}>
          {isSending ? <SpinnerMini /> : " Send message"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default ContactForm;
