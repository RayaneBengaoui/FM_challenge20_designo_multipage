import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation } from "../animation";

import IntroductionProject from "../components/IntroductionProject";
import ViewProject from "../components/ViewProject";
import Project from "../components/Project";
import ScrollTop from "../components/ScrollTop";

import { web_design_images, app_design_images } from "../data";
import image_change from "../assets/graphic-design/desktop/image-change.jpg";
import image_boxed_water from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import image_science from "../assets/graphic-design/desktop/image-science.jpg";

const GraphicDesign = () => {
  return (
    <motion.div
      className="home"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IntroductionProject
        title={"Graphic Design"}
        description={
          "We deliver eye-catching branding materials that are tailored to meet your business objectives."
        }
      />
      <Projects>
        <Project
          title={"tim brown"}
          description={`A book cover designed for 
            Tim Brown’s new release, ‘Change’`}
          image={image_change}
        />
        <Project
          title={"boxed water"}
          description={"A simple packaging concept made for Boxed Water"}
          image={image_boxed_water}
        />
        <Project
          title={"science!"}
          description={
            "A poster made in collaboration with the Federal Art Project"
          }
          image={image_science}
        />
        <ViewProjects>
          <ViewProject
            title="app design"
            images={app_design_images}
            linkPath="/appdesign/"
          />
          <ViewProject
            title="web design"
            images={web_design_images}
            linkPath="/webdesign/"
          />
        </ViewProjects>
      </Projects>
      <ScrollTop />
    </motion.div>
  );
};

const Projects = styled.div`
  min-height: 100vh;
  padding: 0 1.5rem;
`;

const ViewProjects = styled.div`
  margin-top: 6rem;
  margin-bottom: 18.5rem;
`;

export default GraphicDesign;
