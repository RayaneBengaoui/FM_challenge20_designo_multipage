import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo_dark from "../assets/shared/desktop/logo-dark.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggle]);

  return (
    <NavStyle>
      <Logo src={logo_dark} />
      <Burger
        toggle={toggle}
        onClick={() => setToggle((prevState) => !prevState)}
      >
        <Line className="line1" />
        <Line className="line2" />
        <Line className="line3" />
      </Burger>
      <NavLinks toggle={toggle}>
        <Link
          className="firstLink"
          to="/"
          onClick={() => setToggle((prevState) => !prevState)}
        >
          <span>OUR COMPANY</span>
        </Link>
        <Link
          to="/locations"
          onClick={() => setToggle((prevState) => !prevState)}
        >
          <span>LOCATIONS</span>
        </Link>
        <Link
          className="lastLink"
          to=""
          onClick={() => setToggle((prevState) => !prevState)}
        >
          <span> CONTACT</span>
        </Link>
      </NavLinks>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  min-height: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

const Logo = styled.img`
  max-width: 12.5rem;
`;
const Burger = styled.div`
  position: relative;
  cursor: pointer;

  .line1 {
    transform: ${(props) =>
      props.toggle
        ? "rotateZ(45deg) translateY(290%)"
        : "rotateZ(0deg) translateY(0%)"};
    background: ${(props) => (props.toggle ? `#E7816B` : "black")};
  }
  .line2 {
    opacity: ${(props) => (props.toggle ? "0" : "1")};
  }
  .line3 {
    transform: ${(props) =>
      props.toggle
        ? "rotateZ(-45deg) translateY(-290%)"
        : "rotateZ(0deg) translateY(0%)"};
    background: ${(props) => (props.toggle ? `#E7816B` : "black")};
  }
`;
const Line = styled.span`
  background: var(--burger-span);
  padding: 0.125rem 0.75rem;
  margin: 0.25rem 0rem;
  display: block;
  transition: all 0.5s ease;
`;

const NavLinks = styled.nav`
  position: fixed;
  z-index: 2;
  top: ${(props) => (props.toggle ? `6rem` : "100%")};
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  transition: top 0.5s ease;

  a {
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: 400;
    background: black;
    padding: 0rem 1rem;

    span {
      position: relative;
      transition: all 0.5s ease;
    }
  }

  span::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: white;
    bottom: 0%;
    left: 0;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }

  span:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  .firstLink {
    padding-top: 2.5rem;
    padding-bottom: 2rem;
  }
  .lastLink {
    padding-top: 2rem;
    padding-bottom: 2.5rem;
  }
`;

export default Nav;
