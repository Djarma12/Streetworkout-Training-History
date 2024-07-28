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
    margin-bottom: 4.8rem;
  }

  .team-members {
    max-width: 90rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;

    li {
      height: 50rem;
      overflow: hidden;
      box-shadow: var(--shadow-md);

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
        border-radius: var(--border-radius-sm);

        &:hover + div {
          transform: translateY(-19rem);
        }
      }
    }

    .team-member-info {
      background-color: var(--color-grey-800);
      color: var(--color-red-50);
      text-align: center;
      padding-block: 9.6rem 6.4rem;
      padding-inline: 1.2rem;
      clip-path: polygon(100% 0, 100% 38%, 100% 100%, 0 100%, 0% 38%);
      transition: all 0.1s ease-in-out;
      font-weight: 500;
      font-size: 2rem;
      letter-spacing: 0.6px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 19rem;
        clip-path: polygon(100% 0, 100% 3%, 0 41%, 0% 0%);
        background-color: var(--color-blue-900);
      }

      &:hover {
        transform: translateY(-19rem);
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
            <img
              src="public/team-members/team-member-3.jpg"
              alt="Team member"
            />
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
            <img
              src="public/team-members/team-member-6.jpg"
              alt="Team member"
            />
          </li>
        </ul>
      </Section>
    </StyledOurTeam>
  );
}

export default OurTeam;
