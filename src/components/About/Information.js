import styled from "styled-components";
import { motion } from "framer-motion";

const Information = ({ images, title, description, theme, doubletext }) => {
  return (
    <InformationStyle>
      <Image images={images} />
      <TextContainer theme={theme}>
        <h2>{title}</h2>
        <p>{description}</p>
        {doubletext && <p className="secondParagraph">{doubletext} </p>}
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
  background-color: ${(props) =>
    props.theme === "dark" ? "#E7816B" : "#FDF3F0"};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
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

export default Information;
