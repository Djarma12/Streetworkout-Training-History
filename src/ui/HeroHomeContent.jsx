import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Carousel from "./Carousel";
import Heading from "./Heading";
import HeroBackground from "./HeroBackground";

const StyledHeroHomeContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  margin-left: 10%;

  h4 {
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 2rem;
    width: 45rem;
    color: var(--color-red-100);
    margin-bottom: 3.2rem;
  }
`;

function HeroHomeContent() {
  return (
    <Carousel>
      <HeroBackground imgpath="public/home.jpg">
        <StyledHeroHomeContent>
          <Heading as="h4">Unleash Your Inner Strength</Heading>
          <p>
            Street workouts designed for every level. Train with us and reach
            your fitness goals.
          </p>
          <Button variation="primary">Crate personal training</Button>
        </StyledHeroHomeContent>
      </HeroBackground>
      <HeroBackground imgpath="public/our-team.jpg">
        <StyledHeroHomeContent>
          <Heading as="h4">Calisthenics without limits</Heading>
          <p>
            Discover the power of bodyweight training. Connect with like-minded
            athletes, push your boundaries, and track your progress with our
            app.
          </p>
          <Link to="/login">
            <Button variation="primary">Sign Up for Free</Button>
          </Link>
        </StyledHeroHomeContent>
      </HeroBackground>
      <HeroBackground imgpath="public/login-background.jpg">
        <StyledHeroHomeContent>
          <Heading as="h4">Get in Touch with Us</Heading>
          <p>Have questions or want to learn more? We’re here to help!</p>
          <Link to="/contact">
            <Button variation="primary">Contact Us</Button>
          </Link>
        </StyledHeroHomeContent>
      </HeroBackground>
    </Carousel>
  );
}

export default HeroHomeContent;
