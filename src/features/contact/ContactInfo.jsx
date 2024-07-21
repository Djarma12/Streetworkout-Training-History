import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import ContactForm from "./ContactForm";

const StyledContactInfo = styled.div`
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-200);
  width: 100%;
  h3 {
    color: var(--color-grey-800);
    margin-left: 4.8rem;
  }

  p {
    color: var(--color-grey-700);
    font-size: 1.2rem;
    letter-spacing: 0.3px;
    margin-bottom: 1.2rem;
    margin-left: 4.8rem;
  }

  .contact__media {
    display: flex;
    gap: 3.2rem;
    margin-left: 4.8rem;

    span {
      color: var(--color-grey-800);
      display: block;
      font-weight: 700;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    a:link,
    a:visited {
      color: var(--color-grey-700);
      font-size: 1.4rem;
      transition: all 0.1s;
    }
    a:hover,
    a:active {
      color: var(--color-primary);
    }
  }
`;

function ContactInfo() {
  return (
    <StyledContactInfo>
      <Heading as="h3">Contact Us</Heading>
      <p>We are open for any suggestion or just to have a chat.</p>
      <div className="contact__media">
        <div>
          <span>Instagram:</span>
          <Link
            to="https://www.instagram.com/street_workout_backa_palanka"
            target="_blank"
          >
            street_workout_backa_palanka
          </Link>
        </div>
        <div>
          <span>Email:</span>
          <Link to="mailto:swbackapalanka@gmail.com">
            swbackapalanka@gmail.com
          </Link>
        </div>
      </div>
      <ContactForm />
    </StyledContactInfo>
  );
}

export default ContactInfo;
