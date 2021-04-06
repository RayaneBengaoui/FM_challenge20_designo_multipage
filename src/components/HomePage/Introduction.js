import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import background_circle from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import phone from "../../assets/home/desktop/image-hero-phone.png";

const Introduction = () => {
  return (
    <IntroductionStyle>
      <Presentation>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button>Learn More</button>
      </Presentation>
      <BackgroundCircle src={background_circle} />
      <Phone src={phone} />
    </IntroductionStyle>
  );
};

const IntroductionStyle = styled(motion.section)`
  min-height: 53rem;
  position: relative;
  background-color: var(--peach);
  overflow: hidden;
  padding: 0 2.5rem;
`;

const Presentation = styled.div`
  padding-top: 5rem;
  text-align: center;
  max-width: 21.5rem;
  margin: auto;
  position: relative;
  z-index: 1;

  p {
    color: white;
    line-height: 1.625rem;
    padding: 1.5rem 0rem;
    font-size: 15px;
  }
`;

const BackgroundCircle = styled.img`
  position: absolute;
  width: 44rem;
  top: 5rem;
  right: -20rem;
  transform: rotate(-45deg);
`;

const Phone = styled.img`
  position: absolute;
  left: 50%;
  bottom: -1.5rem;
  max-width: 150%;
  transform: translate(-50%, 38%);
`;

export default Introduction;
