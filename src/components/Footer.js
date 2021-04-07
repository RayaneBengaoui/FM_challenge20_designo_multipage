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
      {callAction && <CallAction />}
      <Navigation>
        <Logo src={logo_light} />
        <NavLinks>
          <Link to="">
            <a>OUR COMPANY</a>
          </Link>
          <Link to="">
            <a>LOCATIONS</a>
          </Link>
          <Link to="">
            <a>CONTACT</a>
          </Link>
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
    </FooterStyle>
  );
};

const FooterStyle = styled(motion.footer)`
  position: relative;
  min-height: ${(props) => (props.callAction ? "51rem" : "40rem")};

  padding: 0 1.5rem;
  padding-top: ${(props) => (props.callAction ? "15rem" : "0rem")};
  background-color: var(--footer-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  max-width: 12.5rem;
  margin-bottom: 2.5rem;
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
  }
`;
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 12rem;
`;
const Adress = styled.p`
  text-align: center;

  color: white;
  opacity: 0.5;
  padding-bottom: 2.5rem;

  span {
    font-weight: 500;
  }
`;
const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Social = styled.a`
  img {
    width: 1.5rem;
  }
`;

export default Footer;
