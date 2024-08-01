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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              odit omnis rem magni labore, dolorem quaerat tenetur maiores,
              tempore iusto quasi quidem inventore cumque. Aliquid voluptatibus
              aspernatur.
            </Paragraph>
            <Paragraph>
              Aaboriosam accusamus beatae recusandae minima, aperiam aut ad
              incidunt quos mollitia nulla expedita minus quia officiis
              perferendis soluta non fugit iste. Eos, aut.
            </Paragraph>
          </div>
        </div>
      </Section>
      <StyledVideoYt src="https://www.youtube.com/watch?v=DkJM2rkolkk&t=527s" />
    </StyledHome>
  );
}

export default Home;
