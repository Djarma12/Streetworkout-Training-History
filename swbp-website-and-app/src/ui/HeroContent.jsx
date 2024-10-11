import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import mediaQueryManager from "../styles/MediaQueryManager";

const StyledHeroContent = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 7%;

  ${mediaQueryManager.phone(css`
    padding-bottom: 30%;
  `)}
`;

function HeroContent({ headingText }) {
  const { pathname } = useLocation();

  return (
    <StyledHeroContent>
      <Paragraph variation="tertiary">
        <Link to="/">Home</Link>
        <BiRightArrowAlt />
        {pathname.substring(1)}
        <BiRightArrowAlt />
      </Paragraph>
      <Heading as="h4">{headingText}</Heading>
    </StyledHeroContent>
  );
}

export default HeroContent;
