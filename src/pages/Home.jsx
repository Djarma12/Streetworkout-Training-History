import Hero from "../ui/Hero";
import HeroHomeContent from "../ui/HeroHomeContent";
import StyledVideoYt from "../ui/VideoYt";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import styled from "styled-components";

const StyledHome = styled.div`
  .about-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    letter-spacing: 0.7px;
    line-height: 1.6;
    color: var(--color-grey-500);
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 1.2rem;
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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              odit omnis rem magni labore, dolorem quaerat tenetur maiores,
              tempore iusto quasi quidem inventore cumque. Aliquid voluptatibus
              aspernatur.
            </p>
            <p>
              Aaboriosam accusamus beatae recusandae minima, aperiam aut ad
              incidunt quos mollitia nulla expedita minus quia officiis
              perferendis soluta non fugit iste. Eos, aut.
            </p>
          </div>
        </div>
      </Section>
      <StyledVideoYt src="https://www.youtube.com/watch?v=DkJM2rkolkk&t=527s" />
    </StyledHome>
  );
}

export default Home;
