import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useWindowSize } from "./WindowSize";

import logo_dark from "../assets/shared/desktop/logo-dark.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    if (size.width > 700) {
      document.body.style.overflow = "auto";
    }
  }, [toggle, size.width]);

  const toggleHandler = () => {
    if (window.innerWidth >= 700) {
    } else {
      setToggle((prevState) => !prevState);
    }
  };

  return (
    <NavStyle>
      <NavContainer>
        <Link className="logoContainer" to="">
          <Logo src={logo_dark} />
        </Link>
        <Burger
          toggle={toggle}
          onClick={() => setToggle((prevState) => !prevState)}
        >
          <Line className="line1" />
          <Line className="line2" />
          <Line className="line3" />
        </Burger>
        <NavLinks toggle={toggle}>
          <Link className="firstLink" to="/about" onClick={toggleHandler}>
            <span>OUR COMPANY</span>
          </Link>
          <Link to="/locations" onClick={toggleHandler}>
            <span>LOCATIONS</span>
          </Link>
          <Link className="lastLink" to="/contact" onClick={toggleHandler}>
            <span> CONTACT</span>
          </Link>
        </NavLinks>
      </NavContainer>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  height: 6rem;
  padding: 0 1.5rem;

  @media screen and (min-width: 700px) {
    height: 155px;
    padding: 0 2.5rem;
  }

  @media screen and (min-width: 1250px) {
    padding: 0 10.25rem;
  }

  .logoContainer {
    display: flex;
  }
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  align-items: center;
  @media screen and (min-width: 1250px) {
    max-width: 1111px;
    margin: auto;
  }
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

  @media screen and (min-width: 700px) {
    display: none;
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
  z-index: 3;
  top: ${(props) => (props.toggle ? `6rem` : "100%")};
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  transition: top 0.5s ease;

  @media screen and (min-width: 700px) {
    position: unset;
    height: unset;
    flex-direction: row;
    top: unset;
    left: unset;
    background: unset;
    width: unset;
    min-width: 370px;
    justify-content: space-between;
  }

  a {
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: 400;
    background: black;
    padding: 0rem 1rem;

    @media screen and (min-width: 700px) {
      background: unset;
      color: black;
      font-size: 14px;
      padding: 0 0;
    }

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

    @media screen and (min-width: 700px) {
      background: black;
      height: 1px;
    }
  }

  span:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  .firstLink {
    padding-top: 2.5rem;
    padding-bottom: 2rem;

    @media screen and (min-width: 700px) {
      padding-top: unset;
      padding-bottom: unset;
    }
  }
  .lastLink {
    padding-top: 2rem;
    padding-bottom: 2.5rem;

    @media screen and (min-width: 700px) {
      padding-top: unset;
      padding-bottom: unset;
    }
  }
`;

export default Nav;
