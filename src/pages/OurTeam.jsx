import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";
import Section from "../ui/Section";

const StyledOurTeam = styled.div`
  .heading-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .team-members {
    max-width: 90rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    li {
      height: 50rem;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;

        &:hover + div {
          transform: translateY(-3rem);
        }
      }

      .team-member-info {
        clip-path: polygon(100% 0, 100% 38%, 100% 100%, 0 100%, 0% 38%);
        transition: all 0.1s;
        background-color: orangered;
      }
    }
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
        <ul className="team-members">
          <li>
            <img
              src="public/team-members/team-member-1.jpg"
              alt="Team member"
            />
            <div className="team-member-info">
              <span>Cedo Milovanovic</span>
            </div>
          </li>
          <li>
            <img
              src="public/team-members/team-member-2.jpg"
              alt="Team member"
            />
          </li>
          <li>
            <img src="" alt="Team member" />
          </li>
          <li>
            <img
              src="public/team-members/team-member-4.jpg"
              alt="Team member"
            />
          </li>
          <li>
            <img
              src="public/team-members/team-member-5.jpg"
              alt="Team member"
            />
          </li>
          <li>
            <img src="" alt="Team member" />
          </li>
        </ul>
      </Section>
    </StyledOurTeam>
  );
}

export default OurTeam;
