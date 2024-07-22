import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const StyledHero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -10;
`;

function Hero({ children }) {
  return <StyledHero>{children}</StyledHero>;
}

export default Hero;
