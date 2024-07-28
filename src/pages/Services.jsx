import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";

function Services() {
  return (
    <>
      <Hero>
        <HeroBackground imgpath="public/training-3.jpg">
          <HeroContent headingText="Contact Us" />
        </HeroBackground>
      </Hero>
    </>
  );
}

export default Services;
