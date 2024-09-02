import { BiCheck, BiX } from "react-icons/bi";
import styled, { css } from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import mediaQueryManager from "../styles/MediaQueryManager";

const StyledPlanCard = styled.li`
  padding: 3.2rem 6.4rem;
  border: 1px solid var(--color-red-100);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  transition: all 0.1s;
  &.card--starter {
    background-color: var(--color-grey-0);
  }
  &.card--advance {
    background-color: var(--color-red-50);
  }
  &:hover {
    box-shadow: var(--shadow-lg);
  }

  .card {
    &__best-value {
      position: absolute;
      background-color: var(--color-primary);
      color: var(--color-grey-50);
      top: 5.5rem;
      right: -17rem;
      width: 100%;
      text-align: center;
      transform: rotate(45deg);
      text-transform: uppercase;
      font-weight: 700;
    }
    &__value {
      color: var(--color-grey-800);
      text-align: center;

      &--currency {
        font-weight: 700;
        font-size: 3rem;
      }
      &--price {
        font-weight: 900;
        font-size: 6.4rem;
      }
    }

    &__text {
      text-align: center;
      font-size: 1.4rem;
      margin-bottom: 3rem;
      font-weight: 500;
      color: var(--color-grey-500);
    }

    &__list {
      margin-bottom: 4.8rem;
    }

    &__item {
      font-size: 2rem;
      color: var(--color-grey-600);
      display: flex;
      align-items: center;
      gap: 1.6rem;

      &:not(:last-child) {
        margin-bottom: 0.8rem;
      }
    }

    &__icon {
      color: var(--color-primary);
      font-size: 3.6rem;
    }
  }
  ${mediaQueryManager.phone(css`
    padding: 2.4rem 4.8rem;

    .card {
      &__list {
        margin-bottom: 3.2rem;
      }
      &__best-value {
        top: 4.5rem;
        right: -15rem;
        width: 100%;
        text-align: center;
        transform: rotate(45deg);
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  `)}
`;

function PlanCard({ plan }) {
  const { name, price, include, notInclude } = plan;

  return (
    <StyledPlanCard className={`card card--${name.toLowerCase()}`}>
      {name === "Advance" && <p className="card__best-value">Best Value</p>}
      <Heading as="h1" className="center-text">
        {name}
      </Heading>
      <p className="card__value">
        <sub className="card__value--currency">&#8364;</sub>
        <span className="card__value--price">{price}</span>
      </p>
      <p className="card__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </p>
      <ul className="card__list">
        {include.map((item) => (
          <li className="card__item" key={item}>
            <BiCheck className="card__icon" />
            {item}
          </li>
        ))}
        {notInclude &&
          notInclude.map((item) => (
            <li className="card__item" key={item}>
              <BiX className="card__icon" />
            </li>
          ))}
      </ul>
      <div className="center-text">
        <Button>Start training well</Button>
      </div>
    </StyledPlanCard>
  );
}

export default PlanCard;
