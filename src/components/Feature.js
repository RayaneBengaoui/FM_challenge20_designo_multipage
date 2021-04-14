import styled from "styled-components";

import image_small_circle from "../assets/shared/desktop/bg-pattern-small-circle.svg";

const Feature = ({ illustration, title, description, circle_rotation }) => {
  return (
    <FeatureStyle>
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
        <p>{description}</p>
      </TextContainer>
    </FeatureStyle>
  );
};

const FeatureStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 850px) {
    margin: auto;
    max-width: 45rem;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
  }
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
  }

  p {
    padding-top: 2rem;
    padding-bottom: 5rem;
  }

  @media screen and (min-width: 850px) {
    max-width: 27.5rem;
    text-align: left;

    p {
      padding-top: 1rem;
      padding-bottom: 5rem;
    }
  }

  @media screen and (min-width: 1250px) {
    max-width: 34rem;
    text-align: center;
  }
`;

export default Feature;
