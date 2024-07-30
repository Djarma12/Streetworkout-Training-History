import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";
import Section from "../ui/Section";
import OurTeamCards from "../ui/OurTeamCards";

const StyledOurTeam = styled.div`
  .heading-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4.8rem;
  }
`;

function OurTeam() {
  return (
    <StyledOurTeam>
      <Hero>
        <HeroBackground imgpath="public/our-team.jpg">
          <HeroContent headingText="Our Team" />
        </HeroBackground>
      </Hero>
      <Section>
        <div className="heading-bar">
          <Heading as="h5">
            <span className="secondary">Our Team</span>Train with{" "}
            <span>Experts</span>
          </Heading>
          <Link to="/contact">
            <Button variation="primary">Appointment</Button>
          </Link>
        </div>
        <OurTeamCards />
      </Section>
    </StyledOurTeam>
  );
}

export default OurTeam;
