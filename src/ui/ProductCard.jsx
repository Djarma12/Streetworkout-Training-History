import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const StyledProductCard = styled.li`
  height: 52rem;
  width: 100%;
  .card {
    height: 100%;
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
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
      box-shadow: var(--shadow-md);

      &--front {
        background-color: var(--color-grey-0);
      }

      &--back {
        transform: rotateY(180deg);
        background-color: var(--color-red-50);
      }
    }
    &:hover {
      .card__side--front {
        transform: rotateY(-180deg);
      }

      .card__side--back {
        transform: rotateY(0deg);
      }
    }

    &__image-holder {
      box-shadow: var(--shadow-md);
      height: 37rem;
    }

    &__image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &__details {
      height: 15rem;
      padding: 2.4rem;
      border-top: 1px solid var(--color-grey-50);
      &--front {
        text-align: center;
      }
      &--back {
        display: flex;
        align-items: center;
        gap: 1.2rem;
      }
    }

    &__name {
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.8px;
      color: var(--color-grey-700);
    }

    &__type {
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 0.8px;
      color: var(--color-grey-800);
      word-wrap: break-word;
      hyphens: auto;
      text-align: justify;
    }

    &__value {
      &--currency {
        font-size: 3rem;
        font-weight: 700;
        margin-right: 0.8rem;
      }
      &--price {
        color: var(--color-primary-dark);
        font-size: 5.2rem;
        font-weight: 900;
      }
    }
  }
`;

function ProductCard({ product }) {
  const { name, type, frontImg, backImg, price } = product;
  return (
    <StyledProductCard>
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__image-holder">
            <img
              loading="lazy"
              src={frontImg}
              className="card__image"
              alt="Front product image"
            />
          </div>
          <div className="card__details card__details--front">
            <span className="card__name">{name}</span>
            <p className="card__value">
              <sub className="card__value--currency">&#8364;</sub>
              <span className="card__value--price">{price}</span>
            </p>
          </div>
        </div>
        <div className="card__side card__side--back">
          <div className="card__image-holder">
            <img
              src={backImg}
              className="card__image"
              alt="Back product image"
            />
          </div>
          <div className="card__details card__details--back">
            <span className="card__type">{type}</span>
            <Link to="/contact">
              <Button>Buy!</Button>
            </Link>
          </div>
        </div>
      </div>
    </StyledProductCard>
  );
}

export default ProductCard;
