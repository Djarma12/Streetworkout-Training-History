import Hero from "../ui/Hero";
import HeroHomeContent from "../ui/HeroHomeContent";
import StyledVideoYt from "../ui/VideoYt";

function Home() {
  return (
    <>
      <Hero>
        <HeroHomeContent />
      </Hero>
      <StyledVideoYt src="https://www.youtube.com/watch?v=DkJM2rkolkk&t=527s" />
    </>
  );
}

export default Home;
