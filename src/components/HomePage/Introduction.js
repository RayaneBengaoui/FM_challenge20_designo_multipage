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
      </Presentation>
      <BackgroundCircle src={background_circle} />
      <Phone src={phone} />
    </IntroductionStyle>
  );
};

const IntroductionStyle = styled(motion.section)`
  min-height: 90vh;
  position: relative;
  background-color: var(--peach);
  overflow: hidden;
`;

const Presentation = styled.div``;

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
  bottom: 0;
  max-width: 150%;
  transform: translate(-50%, 38%);
`;

export default Introduction;
