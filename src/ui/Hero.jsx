import styled from "styled-components";
import Heading from "./Heading";

const StyledHero = styled.div`
  color: var(--color-red-50);
  background-image: linear-gradient(
      to bottom left,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2)
    ),
    url(${(props) => props.imgPath});
  background-size: cover;
  background-repeat: no-repeat;
  height: 80dvh;
  padding-top: 9.6rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -10;
`;

function Hero({ imgPath }) {
  return (
    <StyledHero imgPath={imgPath}>
      <Heading as="h1">Heading</Heading>
    </StyledHero>
  );
}

export default Hero;
