import styled from "styled-components";

import bg_circle from "../assets/shared/desktop/bg-pattern-small-circle.svg";

const IntroductionProject = ({ title, description }) => {
  return (
    <IntroductionProjectStyle>
      <h1>{title}</h1>
      <p>{description}</p>
      <Circle src={bg_circle} alt="circle" />
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
  p {
    color: white;
    padding: 1.5rem 0rem;
    font-size: 15px;
    max-width: 21rem;
  }
`;

const Circle = styled.img`
  position: absolute;

  width: 17rem;
  /* right: 10%; */

  transform: rotate(-90deg);
`;

export default IntroductionProject;
