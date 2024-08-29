import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";
import OurTeamCards from "../ui/OurTeamCards";
import Section from "../ui/Section";

const StyledOurTeam = styled.div`
  .heading-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    flex-wrap: wrap;
    gap: 2.4rem;

    h5 {
      margin-bottom: 0;
    }
  }
`;

function OurTeam() {
  return (
    <StyledOurTeam>
      <Hero>
        <HeroBackground
          imgpath="/our-team.webp"
          imgpathSmall="/our-team-small.webp">
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
            <Button variation="primary">Train With Us</Button>
          </Link>
        </div>
        <OurTeamCards />
      </Section>
    </StyledOurTeam>
  );
}

export default OurTeam;
