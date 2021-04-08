import styled from "styled-components";

const IntroductionProject = ({ title, description }) => {
  return (
    <IntroductionProjectStyle>
      <h1>{title}</h1>
      <p>{description}</p>
    </IntroductionProjectStyle>
  );
};

const IntroductionProjectStyle = styled.div`
  min-height: 20rem;
  background-color: var(--peach);
`;

export default IntroductionProject;
