import styled from "styled-components";
import { fade } from "../animation";
import { motion } from "framer-motion";

import image_small_circle from "../assets/shared/desktop/bg-pattern-small-circle.svg";

const CityLocation = ({ illustration, title, circle_rotation }) => {
  return (
    <CityLocationStyle>
      <Illustration rotation={circle_rotation}>
        <img src={illustration} alt="illustration" />
        <img
          className="bg_circle"
          src={image_small_circle}
          alt="background circle"
        />
      </Illustration>
      <TextContainer>
        <h3>{title}</h3>
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FFAD9B",
            color: "white",
          }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </TextContainer>
    </CityLocationStyle>
  );
};

const CityLocationStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;
const Illustration = styled.div`
  position: relative;

  .bg_circle {
    position: absolute;
    left: 50%;
    transform: ${(props) => `translateX(-50%) rotate(${props.rotation})`};
    z-index: -1;
  }
`;
const TextContainer = styled.div`
  text-align: center;
  max-width: 21rem;

  h3 {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  button {
    background: var(--peach);
    color: white;
  }
`;

export default CityLocation;
