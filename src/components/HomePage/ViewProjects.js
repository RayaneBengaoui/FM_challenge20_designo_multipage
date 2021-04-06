import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ViewProject from "../ViewProject";
import app_design_image_mobile from "../../assets/home/mobile/image-web-design.jpg";

const ViewProjects = () => {
  return (
    <ViewProjectsStyle>
      <ViewProject title="web design" image={app_design_image_mobile} />
    </ViewProjectsStyle>
  );
};

const ViewProjectsStyle = styled(motion.section)`
  min-height: 100vh;
  padding: 0 1.5rem;
  padding-top: 5rem;
`;

export default ViewProjects;
