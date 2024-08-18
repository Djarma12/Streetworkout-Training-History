import styled from "styled-components";
import { ourProducts } from "../assets/our-products.json";
import { ourPlans } from "../assets/our-training-plan.json";
import Heading from "../ui/Heading";
import Hero from "../ui/Hero";
import HeroBackground from "../ui/HeroBackground";
import HeroContent from "../ui/HeroContent";
import PlanCard from "../ui/PlanCard";
import ProductCard from "../ui/ProductCard";
import Section from "../ui/Section";

const StyledServices = styled.div`
  .shop {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    gap: 6.4rem;
  }
`;

function Services() {
  return (
    <StyledServices>
      <Hero>
        <HeroBackground imgpath="/training-3.jpg">
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
        <Heading as="h5">
          <span className="secondary">Pricing</span>Train well without breaking
          the <span>Bank</span>
        </Heading>
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
