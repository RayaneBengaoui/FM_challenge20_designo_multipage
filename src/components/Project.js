import styled from "styled-components";

const Project = ({ title, description, image }) => {
  return (
    <ProjectStyle>
      <ImageContainer>
        <Image src={image} alt="project cover"></Image>
      </ImageContainer>

      <TextContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TextContainer>
    </ProjectStyle>
  );
};

const ProjectStyle = styled.div`
  background-color: #fdf3f0;
  border-radius: 15px;
  overflow: hidden;
  height: 478px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  max-width: 20.5rem;
  margin: auto;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    height: 310px;
    max-width: 100%;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    height: 478px;
    max-width: 20.5rem;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.5s, filter 0.5s ease-in-out;

  &:hover {
    filter: invert(100%);
    transform: scale(1.2) rotate(10deg);
  }

  @media screen and (min-width: 700px) {
    width: 339px;
    height: unset;
  }
  @media screen and (min-width: 1440px) {
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 33%;

  h3 {
    color: #e7816b;
    padding-bottom: 1rem;
  }

  p {
    text-align: center;
    max-width: 17rem;
  }

  @media screen and (min-width: 700px) {
    height: unset;
    flex-basis: 58%;
  }
  @media screen and (min-width: 1440px) {
    flex-basis: 36%;
  }
`;

export default Project;
