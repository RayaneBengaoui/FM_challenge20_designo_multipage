import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import CallAction from "./CallAction";

import logo_light from "../assets/shared/desktop/logo-light.png";
import icon_fb from "../assets/shared/desktop/icon-facebook.svg";
import icon_yt from "../assets/shared/desktop/icon-youtube.svg";
import icon_twitter from "../assets/shared/desktop/icon-twitter.svg";
import icon_pint from "../assets/shared/desktop/icon-pinterest.svg";
import icon_insta from "../assets/shared/desktop/icon-instagram.svg";

const Footer = ({ callAction }) => {
  return (
    <FooterStyle callAction={callAction}>
      <FooterContent>
        {callAction && <CallAction />}
        <Navigation>
          <Logo src={logo_light} />
          <NavLinks>
            <Link to="/about">OUR COMPANY</Link>
            <Link to="/locations">LOCATIONS</Link>
            <Link to="/contact">CONTACT</Link>
          </NavLinks>
        </Navigation>
        <Contacts>
          <Adress>
            <span>Designo Central Office</span> 3886 Wellington Street Toronto,
            Ontario M9C 3J5
          </Adress>
          <Adress>
            <span> Contact Us (Central Office)</span> P : +1 253-863-8967 M :
            contact@designo.co
          </Adress>
          <Socials>
            <Social>
              <img src={icon_fb} alt="facebook" />
            </Social>
            <Social>
              <img src={icon_yt} alt="youtube" />
            </Social>
            <Social>
              <img src={icon_twitter} alt="twitter" />
            </Social>
            <Social>
              <img src={icon_pint} alt="pinterest" />
            </Social>
            <Social>
              <img src={icon_insta} alt="instagram" />
            </Social>
          </Socials>
        </Contacts>
      </FooterContent>
    </FooterStyle>
  );
};

const FooterStyle = styled(motion.footer)`
  position: relative;
  min-height: ${(props) => (props.callAction ? "51rem" : "40rem")};

  padding: 0 1.5rem;
  padding-top: ${(props) => (props.callAction ? "15rem" : "4rem")};
  background-color: var(--footer-bg);

  margin-top: ${(props) => (props.callAction ? "18.5rem" : "0rem")};

  @media screen and (min-width: 700px) {
    padding: 0 2.5rem;
    padding-top: ${(props) => (props.callAction ? "10rem" : "5rem")};
    min-height: ${(props) => (props.callAction ? "423px" : "337px")};
  }
  @media screen and (min-width: 1250px) {
    min-height: ${(props) => (props.callAction ? "393px" : "337px")};
  }
`;

const FooterContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1250px) {
    max-width: 1111px;
    margin: auto;
  }
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 3rem;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  }
`;
const Logo = styled.img`
  max-width: 12.5rem;
  margin-bottom: 2.5rem;
  @media screen and (min-width: 700px) {
    margin-bottom: 0rem;
  }
`;
const NavLinks = styled.div`
  width: 100%;
  border-top: solid 1px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 2.5rem;

  a {
    padding-top: 2rem;
    position: relative;
    transition: all 0.5s ease;
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: white;
    bottom: 0%;
    left: 0;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }

  a:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    border-top: unset;
    margin-bottom: 0rem;
    width: 370px;

    a {
      padding-top: 0rem;
    }
  }
`;
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 12rem;

  @media screen and (min-width: 700px) {
    margin-top: 2.5rem;
    flex-direction: row;
    justify-content: space-between;
    max-width: unset;
    width: 100%;
  }
`;
const Adress = styled.p`
  text-align: center;
  color: white;
  opacity: 0.5;
  padding-bottom: 2.5rem;

  span {
    font-weight: 500;
  }

  @media screen and (min-width: 700px) {
    max-width: 12rem;
    padding-bottom: 0rem;
  }
`;
const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 700px) {
    max-width: 11.5rem;
  }
`;
const Social = styled.a`
  img {
    transition: all 0.5s ease;
    width: 1.5rem;
    cursor: pointer;
    filter: invert(57%) sepia(51%) saturate(557%) hue-rotate(322deg)
      brightness(98%) contrast(85%);
    :hover {
      filter: invert(64%) sepia(49%) saturate(361%) hue-rotate(320deg)
        brightness(107%) contrast(101%);
      transform: scale(1.2);
    }
  }
`;

export default Footer;
