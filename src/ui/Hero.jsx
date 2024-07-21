import styled from "styled-components";
import Heading from "./Heading";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledHero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -10;
`;

const StyledHeroImage = styled.div`
  height: 80dvh;
  padding-inline: 4.8rem;
  color: var(--color-red-50);
  background-image: linear-gradient(
      to bottom left,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.4)
    ),
    url(${(props) => props.imgpath});
  background-size: cover;
  background-position: center 17%;
  background-repeat: no-repeat;
  display: flex;
`;

const HeroContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  margin-left: 10%;

  h1 {
    font-style: italic;
    line-height: 1.1;
    font-size: 6.4rem;
    color: var(--color-red-50);
    margin-bottom: 1.2rem;
    width: 60rem;
  }

  p {
    font-size: 2rem;
    width: 45rem;
    color: var(--color-red-100);
    margin-bottom: 3.2rem;
  }
`;

function Hero({ imgpath = "" }) {
  return (
    <StyledHero>
      <Carousel
        axis="horizontal"
        infiniteLoop={true}
        autoPlay={true}
        className={StyledHero}
        transitionTime={750}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        <StyledHeroImage imgpath="public/home.jpg">
          <HeroContent>
            <Heading as="h1">Unleash Your Inner Strength</Heading>
            <p>
              Street workouts designed for every level. Train with us and reach
              your fitness goals.
            </p>
            <Button variation="primary">Crate personal training</Button>
          </HeroContent>
        </StyledHeroImage>
        <StyledHeroImage imgpath="public/our-team.jpg">
          <HeroContent>
            <Heading as="h1">Calisthenics without limits</Heading>
            <p>
              Discover the power of bodyweight training. Connect with
              like-minded athletes, push your boundaries, and track your
              progress with our app.
            </p>
            <Link to="/login">
              <Button variation="primary">Sign Up for Free</Button>
            </Link>
          </HeroContent>
        </StyledHeroImage>
        <StyledHeroImage imgpath="public/login-background.jpg">
          <HeroContent>
            <Heading as="h1">Get in Touch with Us</Heading>
            <p>Have questions or want to learn more? We’re here to help!</p>
            <Link to="/contact">
              <Button variation="primary">Contact Us</Button>
            </Link>
          </HeroContent>
        </StyledHeroImage>
      </Carousel>
    </StyledHero>
  );
}

export default Hero;
