import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";

const StyledHeroContent = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 7%;

  p {
    text-transform: uppercase;
    font-weight: 500;
    color: var(--color-grey-200);
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
    letter-spacing: 0.4px;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    a:link,
    a:visited {
      color: var(--color-grey-200);
      font-weight: 500;
      transition: all 0.2s;
    }
    a:hover,
    a:active {
      color: var(--color-primary);
    }
  }
`;

function HeroContent({ headingText }) {
  const { pathname } = useLocation();

  return (
    <StyledHeroContent>
      <p>
        <Link to="/home">Home</Link> <BiRightArrowAlt />
        {pathname.substring(1)}
        <BiRightArrowAlt />
      </p>
      <Heading as="h4">{headingText}</Heading>
    </StyledHeroContent>
  );
}

export default HeroContent;
