import styled from "styled-components";
import ChoseUsReasons from "../ui/ChoseUsReasons";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import HeroHomeContent from "../ui/HeroHomeContent";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import Video from "../ui/Video";

const StyledHome = styled.div`
  .about {
    &__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;
    }
    &__content {
      flex-grow: 1;
      flex-basis: 34rem;
      max-width: 80rem;
    }
  }

  .chose-us {
    text-align: center;
  }
`;

function Home() {
  return (
    <StyledHome>
      <Hero>
        <HeroHomeContent />
      </Hero>
      <Section>
        <div className="about__container">
          <img src="public/posing/posing-1.png" alt="Posing image" />
          <div className="about__content">
            <Heading as="h5">
              <span className="secondary">Information About Us</span>SWBP is a
              team of workout <span>enthusiasts</span>
            </Heading>
            <Paragraph>
              SWBP is a street workout community. We train together, pushing our
              limits and supporting each other. We compete at various levels,
              showcasing our skills and dedication.
            </Paragraph>
            <Paragraph>
              We also organize free training sessions for humanitarian causes to
              promote a healthy lifestyle.
            </Paragraph>
          </div>
        </div>
      </Section>
      <Section variation="redLight">
        <div className="chose-us">
          <Heading as="h5">
            <span className="secondary">Why Chose Us?</span>Push Your Limits{" "}
            <span>Forward</span>
          </Heading>
          <ChoseUsReasons />
        </div>
      </Section>
      <Section>
        <Video src="https://www.youtube.com/embed/7IhGzGfQg9E?si=IaHtb8330hXMplWa" />
      </Section>
    </StyledHome>
  );
}

export default Home;
