import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ViewProject from "../ViewProject";

import web_design_image_mobile from "../../assets/home/mobile/image-web-design.jpg";
import web_design_image_tablet from "../../assets/home/tablet/image-web-design.jpg";
import web_design_image_desktop from "../../assets/home/desktop/image-web-design-large.jpg";

import app_design_image_mobile from "../../assets/home/mobile/image-app-design.jpg";
import app_design_image_tablet from "../../assets/home/tablet/image-app-design.jpg";
import app_design_image_desktop from "../../assets/home/desktop/image-app-design.jpg";

import graphic_design_image_mobile from "../../assets/home/mobile/image-graphic-design.jpg";
import graphic_design_image_tablet from "../../assets/home/tablet/image-graphic-design.jpg";
import graphic_design_image_desktop from "../../assets/home/desktop/image-graphic-design.jpg";

const ViewProjects = () => {
  const web_design_images = {
    mobile: web_design_image_mobile,
    tablet: web_design_image_tablet,
    desktop: web_design_image_desktop,
  };

  const app_design_images = {
    mobile: app_design_image_mobile,
    tablet: app_design_image_tablet,
    desktop: app_design_image_desktop,
  };

  const graphic_design_images = {
    mobile: graphic_design_image_mobile,
    tablet: graphic_design_image_tablet,
    desktop: graphic_design_image_desktop,
  };

  return (
    <ViewProjectsStyle>
      <ViewProject title="web design" images={web_design_images} />
      <ViewProject title="app design" images={app_design_images} />
      <ViewProject title="graphic design" images={graphic_design_images} />
    </ViewProjectsStyle>
  );
};

const ViewProjectsStyle = styled(motion.section)`
  min-height: 100vh;
  padding: 0 1.5rem;
  padding-top: 5rem;
`;

export default ViewProjects;
