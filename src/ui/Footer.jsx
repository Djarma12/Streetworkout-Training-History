import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { BiCaretRight, BiChevronsRight } from "react-icons/bi";

const StyledFooter = styled.footer`
  background-color: var(--color-grey-900);
  color: var(--color-grey-300);
`;

const Copyright = styled.p`
  margin-inline: auto;
  text-align: center;
  padding: 4.8rem 1.6rem;

  a:link,
  a:visited {
    font-weight: 700;
    color: var(--color-red-50);
    transition: all 0.2s;
  }

  a:hover,
  a:active {
    color: var(--color-primary);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div>
        <div>
          <Logo />
        </div>
        <div>
          <span>Explore</span>
          <ul>
            <li>
              <BiChevronsRight />
              <Link to="/about">About us</Link>
            </li>
            <li>Services</li>
            <li>Our Team</li>
            <li>Contact</li>
            <li>Track your progress</li>
          </ul>
        </div>
        <div></div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <Copyright>
        Copyright ©2024 All rights reserved | This website is made with 🤍 by{" "}
        <Link
          to="https://www.instagram.com/street_workout_backa_palanka"
          target="_blank">
          SWBP
        </Link>{" "}
        and{" "}
        <Link to="https://dusan-madjar.netlify.app" target="_blank">
          dusan-madjar
        </Link>
        .
      </Copyright>
    </StyledFooter>
  );
}

export default Footer;
