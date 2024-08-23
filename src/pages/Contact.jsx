import styled from "styled-components";
import ContactInfo from "../features/contact/ContactInfo";
import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";
import MapLocation from "../ui/MapLocation";

const StyledContact = styled.div`
  display: flex;
`;

function Contact() {
  return (
    <StyledContact>
      <Hero>
        <HeroBackground
          imgpath="/training-3.webp"
          imgpathSmall="/training-3-small.webp"
        >
          <HeroContent headingText="Contact Us" />
        </HeroBackground>
      </Hero>
      <ContactInfo />
      <MapLocation />
    </StyledContact>
  );
}

export default Contact;
