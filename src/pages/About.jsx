import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";

function About() {
  return (
    <>
      <Hero>
        <HeroBackground imgpath="public/our-team.jpg">
          <HeroContent headingText="About Us" />
        </HeroBackground>
      </Hero>
    </>
  );
}

export default About;
