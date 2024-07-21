import styled from "styled-components";
import ContactInfo from "../features/contact/ContactInfo";

const StyledContact = styled.div`
  display: flex;
`;

function Contact() {
  return (
    <StyledContact>
      <ContactInfo />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31777.68188931927!2d19.38643508983724!3d45.25230615628032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b7a7342701e97%3A0xa307f05ee4f66493!2sBa%C4%8Dka%20Palanka!5e0!3m2!1sbs!2srs!4v1721481514185!5m2!1sbs!2srs"
        width="100%"
        height="auto"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </StyledContact>
  );
}

export default Contact;
