import styled from "styled-components";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const StyledContactInfo = styled.div`
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-200);
  width: 100%;
`;

function ContactInfo() {
  return (
    <StyledContactInfo>
      <ContactDetails />
      <ContactForm />
    </StyledContactInfo>
  );
}

export default ContactInfo;
