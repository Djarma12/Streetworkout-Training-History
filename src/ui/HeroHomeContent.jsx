import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Carousel from "./Carousel";
import Heading from "./Heading";
import HeroBackground from "./HeroBackground";
import Paragraph from "./Paragraph";

const StyledHeroHomeContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  margin-left: 10%;
`;

function HeroHomeContent() {
  return (
    <Carousel>
      <HeroBackground imgpath="/home.jpg">
        <StyledHeroHomeContent>
          <Heading as="h4">Unleash Your Inner Strength</Heading>
          <Paragraph variation="secondary">
            Street workouts designed for every level. Train with us and reach
            your fitness goals.
          </Paragraph>
          <Button variation="primary">Crate personal training</Button>
        </StyledHeroHomeContent>
      </HeroBackground>
      <HeroBackground imgpath="/our-team.jpg">
        <StyledHeroHomeContent>
          <Heading as="h4">Calisthenics without limits</Heading>
          <Paragraph variation="secondary">
            Discover the power of bodyweight training. Connect with like-minded
            athletes, push your boundaries, and track your progress with our
            app.
          </Paragraph>
          <Link to="/login">
            <Button variation="primary">Sign Up for Free</Button>
          </Link>
        </StyledHeroHomeContent>
      </HeroBackground>
      <HeroBackground imgpath="/login-background.jpg">
        <StyledHeroHomeContent>
          <Heading as="h4">Get in Touch with Us</Heading>
          <Paragraph variation="secondary">
            Have questions or want to learn more? We’re here to help!
          </Paragraph>
          <Link to="/contact">
            <Button variation="primary">Contact Us</Button>
          </Link>
        </StyledHeroHomeContent>
      </HeroBackground>
    </Carousel>
  );
}

export default HeroHomeContent;
