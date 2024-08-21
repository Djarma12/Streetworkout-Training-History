import styled from "styled-components";

const HeroBackground = styled.div`
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

  @media only screen and (max-width: 37.5rem) {
    background-image: linear-gradient(
        to bottom left,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.4)
      ),
      url(${(props) => props.imgpathSmall});
  }
`;

export default HeroBackground;
