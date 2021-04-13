import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import background_circle from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import phone from "../../assets/home/desktop/image-hero-phone.png";

import { Hide } from "../../layout";

import { titleAnim, fade } from "../../animation";

const Introduction = () => {
  const { scrollY } = useViewportScroll();
  const phone_y = useTransform(scrollY, [300, 500], [350, 500]);

  return (
    <IntroductionStyle>
      <Presentation>
        <Hide>
          <motion.h1 variants={titleAnim}>
            Award-winning custom designs and digital branding solutions
          </motion.h1>
        </Hide>
        <motion.p variants={fade}>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </motion.p>
        <motion.button
          variants={fade}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FFAD9B",
            color: "white",
          }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </Presentation>
      <BackgroundCircle src={background_circle} />
      <Phone src={phone} style={{ y: phone_y, translateX: "-50%" }} />
    </IntroductionStyle>
  );
};

const IntroductionStyle = styled(motion.section)`
  min-height: 53rem;
  position: relative;
  background-color: var(--peach);
  overflow: hidden;
  padding: 0 2.5rem;

  @media screen and (min-width: 700px) {
    border-radius: 15px;
  }
`;

const Presentation = styled.div`
  padding-top: 5rem;
  text-align: center;
  max-width: 21.5rem;
  margin: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    max-width: 36rem;

    p {
      max-width: 26rem;
    }
  }

  p {
    color: white;

    padding: 1.5rem 0rem;
    font-size: 15px;
  }
`;

const BackgroundCircle = styled(motion.img)`
  position: absolute;
  width: 44rem;
  top: 5rem;
  right: -20rem;
  transform: rotate(-5deg);
  transition: all 0.5s ease;

  @media screen and (min-width: 700px) {
    top: 8rem;
    right: -15rem;
  }
`;

const Phone = styled(motion.img)`
  position: absolute;
  left: 50%;
  bottom: -1.5rem;
  max-width: 150%;
  /* transform: translate(-50%, 38%); */
`;

export default Introduction;
