import styled from "styled-components";

import bg_circle from "../assets/shared/desktop/bg-pattern-small-circle.svg";
import bg_multiple_circles from "../assets/web-design/desktop/bg-pattern-intro-web.svg";
const IntroductionProject = ({ title, description }) => {
  return (
    <IntroductionProjectStyle>
      <h1>{title}</h1>
      <p>{description}</p>
      <Circle src={bg_circle} alt="circle" />
      <MultipleCircles src={bg_multiple_circles} alt="circles" />
    </IntroductionProjectStyle>
  );
};

const IntroductionProjectStyle = styled.div`
  position: relative;
  min-height: 20rem;
  background-color: var(--peach);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1.5rem;
  margin-bottom: 6rem;
  overflow: hidden;

  h1 {
    z-index: 2;
  }
  p {
    color: white;
    padding: 1.5rem 0rem;
    font-size: 15px;
    max-width: 21rem;
    z-index: 2;
  }

  @media screen and (min-width: 700px) {
    padding: 0 2.5rem;
    border-radius: 15px;
    p {
      max-width: 23rem;
    }
  }
  @media screen and (min-width: 1250px) {
    max-width: 1111px;
    margin: auto;
    margin-bottom: 6rem;
  }
`;

const Circle = styled.img`
  position: absolute;
  width: 17rem;
  transform: rotate(-90deg);
  @media screen and (min-width: 700px) {
    display: none;
  }
`;
const MultipleCircles = styled.img`
  position: absolute;
  display: none;
  z-index: 1;
  @media screen and (min-width: 700px) {
    display: unset;
    right: -10%;
  }
`;

export default IntroductionProject;
