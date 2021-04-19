import styled from "styled-components";
import { motion } from "framer-motion";

import three_circle_bg from "../../assets/shared/desktop/bg-pattern-three-circles.svg";
import one_circle_bg from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";

const Information = ({
  images,
  title,
  description,
  theme,
  doubletext,
  flexDir,
}) => {
  return (
    <InformationStyle theme={theme} flexDir={flexDir}>
      <Image images={images} />
      <TextContainer theme={theme}>
        <h2>{title}</h2>
        <p>{description}</p>
        {doubletext && <p className="secondParagraph">{doubletext} </p>}
        {theme === "dark" && <Circle src={one_circle_bg} alt="circle" />}
      </TextContainer>
    </InformationStyle>
  );
};

const InformationStyle = styled(motion.section)`
  min-height: 44rem;
  transition: all 0.5s ease;

  @media screen and (min-width: 700px) {
    border-radius: 15px;
    overflow: hidden;
  }
  @media screen and (min-width: 1250px) {
    max-width: 1111px;
    margin: auto;
    display: flex;
    min-height: ${(props) => (props.theme === "dark" ? "480px" : "640px")};
    flex-direction: ${(props) =>
      props.flexDir === "row" ? "row" : "row-reverse"};
  }
`;
const Image = styled.div`
  height: 320px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 2;
  background-image: url(${(props) => props.images.mobile});

  @media screen and (min-width: 700px) {
    background-image: url(${(props) => props.images.tablet});
  }
  @media screen and (min-width: 1250px) {
    background-image: url(${(props) => props.images.desktop});
    height: unset;
    width: unset;
    flex-basis: 40%;
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

  h2 {
    @media screen and (min-width: 1250px) {
      text-align: left;
      width: 100%;
      max-width: 30rem;
    }
  }

  p {
    color: ${(props) => (props.theme === "dark" ? "white" : "black")};
    max-width: 21rem;
    text-align: center;
    padding-top: 1.5rem;

    @media screen and (min-width: 1250px) {
      max-width: 30rem;
      text-align: left;
    }
  }

  .secondParagraph {
    padding-top: 1rem;
  }

  @media screen and (min-width: 1250px) {
    flex-basis: 60%;
  }
`;

const Circle = styled.img`
  position: absolute;
  width: 20rem;
  transform: rotate(90deg) translateX(-50%);
  right: 0;
  z-index: -1;

  @media screen and (min-width: 700px) {
    left: 0;
    right: unset;
    width: 60vw;
  }
  @media screen and (min-width: 1250px) {
    width: 35rem;
    left: 16%;
    top: -10%;
    transform: unset;
  }
`;

export default Information;
