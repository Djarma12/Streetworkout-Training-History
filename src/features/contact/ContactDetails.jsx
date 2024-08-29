import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Heading from "../../ui/Heading";
import mediaQueryManager from "../../styles/MediaQueryManager";

const StyledContactDetails = styled.div`
  padding-inline: 4.8rem;
  max-width: 70rem;
  margin-inline: auto;
  h3 {
    color: var(--color-grey-800);
  }

  p {
    color: var(--color-grey-700);
    font-size: 1.2rem;
    letter-spacing: 0.3px;
    margin-bottom: 1.2rem;
  }

  .contact__media {
    display: flex;
    gap: 3.2rem;

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

  ${mediaQueryManager.phone(css`
    padding-inline: 3.2rem;
    .contact__media {
      flex-wrap: wrap;
      gap: 1.2rem;
    }
  `)}
`;

function ContactDetails() {
  return (
    <StyledContactDetails>
      <Heading as="h3">Contact Us</Heading>
      <p>We are open for any suggestion or just to have a chat.</p>
      <div className="contact__media">
        <div>
          <span>Instagram:</span>
          <Link
            to="https://www.instagram.com/street_workout_backa_palanka"
            target="_blank">
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
    </StyledContactDetails>
  );
}

export default ContactDetails;
