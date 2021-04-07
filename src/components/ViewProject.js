import styled from "styled-components";
import { Link } from "react-router-dom";

// import background_circle from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import icon_right_arrow from "../assets/shared/desktop/icon-right-arrow.svg";
const ViewProject = ({ title, images }) => {
  return (
    <ViewProjectStyle images={images}>
      <h1>{title}</h1>
      <LinkContainer>
        <p>View Projects</p>
        <Arrow src={icon_right_arrow} />
      </LinkContainer>
    </ViewProjectStyle>
  );
};

const ViewProjectStyle = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 15px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.images.mobile});
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.625rem;

  h1 {
    font-size: 1.75rem;
    letter-spacing: 1.4px;
  }

  @media screen and (min-width: 700px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.images.tablet});
  }
  @media screen and (min-width: 1400px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.images.desktop});
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  p {
    font-size: 15px;
    color: white;
    letter-spacing: 5px;
  }
`;

const Arrow = styled.img`
  width: 0.5rem;
  margin-left: 0.8rem;
`;

export default ViewProject;
