import styled from "styled-components";
import { motion } from "framer-motion";

import three_circle_bg from "../../assets/shared/desktop/bg-pattern-three-circles.svg";
import one_circle_bg from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";

const Information = ({ images, title, description, theme, doubletext }) => {
  return (
    <InformationStyle>
      <Image images={images} />
      <TextContainer theme={theme}>
        <h2>{title}</h2>
        <p>{description}</p>
        {doubletext && <p className="secondParagraph">{doubletext} </p>}
        {theme === "dark" && <Circle src={one_circle_bg} />}
      </TextContainer>
    </InformationStyle>
  );
};

const InformationStyle = styled(motion.section)`
  min-height: 44rem;
`;
const Image = styled.div`
  height: 320px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.images.mobile});

  @media screen and (min-width: 700px) {
    background-image: url(${(props) => props.images.tablet});
  }
  @media screen and (min-width: 1400px) {
    background-image: url(${(props) => props.images.desktop});
  }
`;
const TextContainer = styled.div`
  position: relative;
  z-index: 0;
  background-color: ${(props) =>
    props.theme === "dark" ? "#E7816B" : "#FDF3F0"};
  color: ${(props) => (props.theme === "dark" ? "white" : "#E7816B")};
  background-image: ${(props) =>
    props.theme === "dark" ? `` : `url(${three_circle_bg})`};
  background-repeat: no-repeat;
  min-height: 24.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;

  p {
    color: ${(props) => (props.theme === "dark" ? "white" : "black")};
    max-width: 21rem;
    text-align: center;
    padding-top: 1.5rem;
  }

  .secondParagraph {
    padding-top: 1rem;
  }
`;

const Circle = styled.img`
  position: absolute;
  width: 20rem;
  transform: rotate(90deg) translateX(-50%);
  right: 0;
  z-index: -1;
`;

export default Information;
