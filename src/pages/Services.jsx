import styled from "styled-components";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";
import Section from "../ui/Section";
import { ourProducts } from "../assets/our-products.json";
import ProductCard from "../ui/ProductCard";

const StyledServices = styled.div`
  h5 {
    text-align: center;
  }
  .shop {
    display: flex;
    /* flex-wrap: wrap; */
    gap: 6.4rem;
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
        <ul className="shop">
          {ourProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      </Section>
    </StyledServices>
  );
}

export default Services;
