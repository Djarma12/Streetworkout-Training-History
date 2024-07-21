import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";

function ContactForm() {
  return (
    <Form>
      <FormRowVertical>
        <Input placeholder="Name" />
      </FormRowVertical>
      <FormRowVertical>
        <Input placeholder="Email" />
      </FormRowVertical>
      <FormRowVertical>
        <Input as="textarea" placeholder="Create a message here" />
      </FormRowVertical>
      <Button variation="primary" onClick={() => {}}>
        Send message
      </Button>
    </Form>
  );
}

export default ContactForm;
