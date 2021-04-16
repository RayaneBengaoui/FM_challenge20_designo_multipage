import styled from "styled-components";
import { motion } from "framer-motion";

import ViewProject from "../ViewProject";

import {
  web_design_images,
  app_design_images,
  graphic_design_images,
} from "../../data";

import leaf_bg from "../../assets/shared/desktop/bg-pattern-leaf.svg";

const ViewProjects = () => {
  return (
    <ViewProjectsStyle>
      <BgLeaf src={leaf_bg} />
      <ViewProject
        title="web design"
        images={web_design_images}
        linkPath="/webdesign/"
        row="1/3"
        column="1"
      />
      <ViewProject
        title="app design"
        images={app_design_images}
        linkPath="/appdesign/"
      />
      <ViewProject
        title="graphic design"
        images={graphic_design_images}
        linkPath="/graphicdesign/"
      />
    </ViewProjectsStyle>
  );
};

const ViewProjectsStyle = styled(motion.section)`
  min-height: 50vh;
  padding: 0 1.5rem;
  padding-top: 5rem;

  @media screen and (min-width: 700px) {
    padding: 0 0rem;
    padding-top: 5rem;
  }
  @media screen and (min-width: 1250px) {
    max-width: 1111px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.5rem;
    min-height: 640px;
    position: relative;
    margin: 5rem auto;
  }
`;

const BgLeaf = styled.img`
  position: absolute;
  display: none;
  @media screen and (min-width: 1250px) {
    z-index: -1;
    display: unset;
    top: -55%;
    left: -15%;
  }
`;

export default ViewProjects;
