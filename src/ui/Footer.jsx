import { BiChevronsRight, BiLogoInstagram, BiSend } from "react-icons/bi";

import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  background-color: var(--color-grey-800);
  color: var(--color-grey-300);
`;

const Copyright = styled.p`
  background-color: var(--color-grey-900);
  margin-inline: auto;
  text-align: center;
  padding: 4.8rem 1.6rem;
  font-size: 1.4rem;
`;

const FooterContent = styled.div`
  max-width: 130rem;
  margin-inline: auto;
  padding: 6.4rem 3.2rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr 1.2fr;
  gap: 2.4rem;

  .overview {
    div {
      margin-top: 1.2rem;
      display: flex;
      gap: 0.8rem;
    }
  }

  .title {
    color: var(--color-red-50);
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    li {
      display: flex;
      gap: 0.4rem;

      span {
        display: flex;
        align-items: center;
        color: var(--color-primary);
        font-size: 2.4rem;
      }
    }
  }

  .images {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
    align-content: center;

    li {
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    color: var(--color-grey-200);
    font-weight: 500;
    transition: all 0.2s;
  }
  &:hover,
  &:active {
    color: var(--color-primary);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <div className="overview">
          <Logo />
          <p>
            We motivate and educate people through sports, promoting a healthy
            lifestyle and humanitarian work.
          </p>
          <div>
            <Link
              to="https://www.instagram.com/street_workout_backa_palanka"
              target="_blank"
            >
              <ButtonIcon variation="primary">
                <BiLogoInstagram />
              </ButtonIcon>
            </Link>
            <Link to="mailto:swbackapalanka@gmail.com">
              <ButtonIcon variation="primary">
                <BiSend />
              </ButtonIcon>
            </Link>
          </div>
        </div>
        <div>
          <span className="title">Explore</span>
          <ul className="list">
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <StyledLink to="/about">About us</StyledLink>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <StyledLink to="/services">Services</StyledLink>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <StyledLink to="/our-team">Our Team</StyledLink>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <StyledLink to="/contact">Contact</StyledLink>
            </li>
            <li>
              <span>
                <BiChevronsRight />
              </span>
              <StyledLink to="/trainings">Track your progress</StyledLink>
            </li>
          </ul>
        </div>
        <div>
          <span className="title">Our Contacts</span>
          <ul className="list">
            <li>
              <span>
                <BiLogoInstagram />
              </span>
              <StyledLink
                to="https://www.instagram.com/street_workout_backa_palanka"
                target="_blank"
              >
                street_workout_backa_palanka
              </StyledLink>
            </li>
            <li>
              <span>
                <BiSend />
              </span>
              <StyledLink to="mailto:swbackapalanka@gmail.com">
                swbackapalanka@gmail.com
              </StyledLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="images">
            <li>
              <img src="public/back-lever.jpg" alt="Training image" />
            </li>
            <li>
              <img src="public/training-1.jpg" alt="Training image" />
            </li>
            <li>
              <img src="public/front-lever.jpg" alt="Training image" />
            </li>
            <li>
              <img src="public/push-up.jpg" alt="Training image" />
            </li>
            <li>
              <img src="public/pull-up.jpg" alt="Training image" />
            </li>
            <li>
              <img src="public/training-2.jpg" alt="Training image" />
            </li>
          </ul>
        </div>
      </FooterContent>
      <Copyright>
        Copyright ©2024 All rights reserved | This website is made with 🤍 by{" "}
        <StyledLink
          to="https://www.instagram.com/street_workout_backa_palanka"
          target="_blank"
        >
          SWBP
        </StyledLink>{" "}
        and{" "}
        <StyledLink to="https://dusan-madjar.netlify.app" target="_blank">
          dusan-madjar
        </StyledLink>
        .
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;
