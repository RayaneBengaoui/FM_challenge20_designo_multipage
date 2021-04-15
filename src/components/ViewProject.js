import styled from "styled-components";
import { Link } from "react-router-dom";

import icon_right_arrow from "../assets/shared/desktop/icon-right-arrow.svg";

const ViewProject = ({ title, images, linkPath, row, column }) => {
  return (
    <ViewProjectContainer row={row} column={column}>
      <Link to={linkPath}>
        <ViewProjectStyle className="projectStyle" images={images}>
          <HoverBg className="hoverBg" />
          <h1>{title}</h1>
          <LinkContainer>
            <p>View Projects</p>
            <Arrow className="arrow" src={icon_right_arrow} />
          </LinkContainer>
        </ViewProjectStyle>
      </Link>
    </ViewProjectContainer>
  );
};

const ViewProjectContainer = styled.div`
  @media screen and (min-width: 1250px) {
    grid-row: ${(props) => props.row};
    grid-column: ${(props) => props.column};
  }
`;

const ViewProjectStyle = styled.div`
  position: relative;
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
  overflow: hidden;

  :hover {
    .hoverBg {
      background: rgba(231, 129, 107, 0.75);
    }

    .arrow {
      filter: invert(0%) sepia(0%) saturate(7486%) hue-rotate(340deg)
        brightness(94%) contrast(106%);
      z-index: 2;
      transform: translateX(100%) rotate(180deg) scale(1.2);
    }
  }

  h1 {
    font-size: 1.75rem;
    letter-spacing: 1.4px;
    z-index: 2;
  }

  @media screen and (min-width: 700px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.images.tablet});
    max-height: 200px;

    h1 {
      font-size: 2.5rem;
      letter-spacing: 2px;
    }
  }
  @media screen and (min-width: 1250px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.images.desktop});

    max-height: 100%;
    height: 100%;
    margin-top: 0rem;
  }
`;

const HoverBg = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(231, 129, 107, 0);
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media screen and (min-width: 700px) {
    margin-top: 1.5rem;
  }

  p {
    font-size: 15px;
    color: white;
    letter-spacing: 5px;
    z-index: 1;
  }
`;

const Arrow = styled.img`
  width: 0.5rem;
  margin-left: 0.8rem;
  transition: all 0.5s ease;
  filter: invert(88%) sepia(31%) saturate(5865%) hue-rotate(308deg)
    brightness(90%) contrast(91%);
`;

export default ViewProject;
