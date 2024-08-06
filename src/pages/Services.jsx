import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";
import Section from "../ui/Section";

const StyledServices = styled.div`
  text-align: center;
  .shop {
    display: flex;
    gap: 6.4rem;
  }
  .card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 52rem;
    width: 100%;

    &__side {
      height: 52rem;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 3px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      img {
        height: 37rem;
        width: 100%;
        object-fit: cover;
      }

      &--front {
        /* background-color: var(--color-grey-50); */
        background-color: orange;
      }

      &--back {
        transform: rotateY(180deg);
        background-color: blue;
      }
    }
    &:hover {
      .card__side--front {
        background-color: blue;
        transform: rotateY(-180deg);
      }

      .card__side--back {
        transform: rotateY(0deg);
      }
    }

    &__details {
      padding: 2.4rem;
    }
  }
`;

function Services() {
  return (
    <StyledServices>
      <Hero>
        <HeroBackground imgpath="public/training-3.jpg">
          <HeroContent headingText="Services" />
        </HeroBackground>
      </Hero>
      <Section>
        <Heading as="h5">
          <span className="secondary">Our Clothes</span>Choose your best fit{" "}
          <span>Clothes</span>
        </Heading>
        <div className="shop">
          <div className="card">
            <div className="card__side card__side--front">
              <img src="public/shop-products/t-shirt-1.jpg" alt="" />
              <div className="card__details">
                <p>
                  <span>&#8364;12</span>
                </p>
              </div>
            </div>
            <div className="card__side card__side--back">
              <img src="public/shop-products/t-shirt-2.jpg" alt="" />
              <div className="card__details">
                <Button>Buy Now!</Button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front">
              <img src="public/shop-products/sweatshirt-1.jpg" alt="" />
              <div className="card__details">
                <p>
                  <span>&#8364;12</span>
                </p>
              </div>
            </div>
            <div className="card__side card__side--back">
              <img src="public/shop-products/sweatshirt-2.jpg" alt="" />
              <div className="card__details">
                <Button>Buy Now!</Button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__side card__side--front">
              <img src="public/shop-products/t-shirt-3.jpg" alt="" />
              <div className="card__details">
                <p>
                  <span>&#8364;12</span>
                </p>
              </div>
            </div>
            <div className="card__side card__side--back">
              <img src="public/shop-products/t-shirt-4.jpg" alt="" />
              <div className="card__details">
                <Button>Buy Now!</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </StyledServices>
  );
}

export default Services;
