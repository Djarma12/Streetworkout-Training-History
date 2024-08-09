import styled from "styled-components";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";
import Section from "../ui/Section";
import { ourProducts } from "../assets/our-products.json";
import { ourPlans } from "../assets/our-training-plan.json";
import ProductCard from "../ui/ProductCard";
import PlanCard from "../ui/PlanCard";

const StyledServices = styled.div`
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
        <Heading as="h5" className="center-text">
          <span className="secondary">Our Clothes</span>Choose your best fit{" "}
          <span>Clothes</span>
        </Heading>
        <ul className="shop">
          {ourProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      </Section>
      <Section>
        {" "}
        <Heading as="h5">
          <span className="secondary">Pricing</span>Train well without breaking
          the <span>Bank</span>
        </Heading>{" "}
        <ul className="shop">
          {ourPlans.map((plan) => (
            <PlanCard plan={plan} key={plan.id} />
          ))}
        </ul>
      </Section>
    </StyledServices>
  );
}

export default Services;
