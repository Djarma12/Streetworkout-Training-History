import styled from "styled-components";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import HeroHomeContent from "../ui/HeroHomeContent";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import StyledVideoYt from "../ui/VideoYt";

const StyledHome = styled.div`
  .about-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
  }

  .chose-us {
    text-align: center;

    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8rem;
    }
    &__background {
      background-color: var(--color-grey-0);
      height: 8rem;
      width: 8rem;
      border-radius: 50%;
      margin-inline: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2.4rem;
      transition: all 0.2s;

      &:hover {
        background-color: var(--color-red-100);
      }
    }
    &__image {
      height: 4.8rem;
      width: 4.8rem;
    }
    &__name {
      font-size: 2rem;
      font-weight: 700;
      display: inline-block;
      margin-bottom: 1.6rem;
    }
  }
`;

function Home() {
  return (
    <StyledHome>
      <Hero>
        <HeroHomeContent />
      </Hero>
      <Section>
        <div className="about-container">
          <img src="public/posing/posing-1.png" alt="Posing image" />
          <div>
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
          <ul>
            <li>
              <span className="chose-us__background">
                <img
                  className="chose-us__image"
                  src="public/chose-us/orange-juice.png"
                  alt="Orange-juice image"
                />
              </span>
              <span className="chose-us__name">Healthy nutrition plan</span>
              <Paragraph>
                Our healthy eating plan offers balanced, customized meal
                guidelines to support your calisthenics goals and improve
                overall well-being.
              </Paragraph>
            </li>
            <li>
              <span className="chose-us__background">
                <img
                  className="chose-us__image"
                  src="public/chose-us/gym.png"
                  alt="Gym image"
                />
              </span>
              <span className="chose-us__name">Proffesponal training plan</span>
              <Paragraph>
                Our professional training plan provides customized workouts for
                peak results. Receive expert guidance to enhance your
                performance.
              </Paragraph>
            </li>
            <li>
              <span className="chose-us__background">
                <img
                  className="chose-us__image"
                  src="public/chose-us/hearth.png"
                  alt="Hearth image"
                />
              </span>
              <span className="chose-us__name">Unique to your needs</span>
              <Paragraph>
                Tailored to your needs, our approach ensures every plan is
                customized specifically for your unique goals, preferences, and
                lifestyle.
              </Paragraph>
            </li>
          </ul>
        </div>
      </Section>
      <StyledVideoYt src="https://www.youtube.com/watch?v=DkJM2rkolkk&t=527s" />
    </StyledHome>
  );
}

export default Home;
