import styled from "styled-components";

const Project = ({ title, description, image }) => {
  return (
    <ProjectStyle>
      <Image src={image}></Image>
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
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    width: 105%;
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
`;

export default Project;