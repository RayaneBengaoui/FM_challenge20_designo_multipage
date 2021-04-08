import styled from "styled-components";
import { motion } from "framer-motion";

import ViewProject from "../ViewProject";

import {
  web_design_images,
  app_design_images,
  graphic_design_images,
} from "../../data";

const ViewProjects = () => {
  return (
    <ViewProjectsStyle>
      <ViewProject
        title="web design"
        images={web_design_images}
        linkPath="/webdesign/"
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
  min-height: 100vh;
  padding: 0 1.5rem;
  padding-top: 5rem;
`;

export default ViewProjects;
