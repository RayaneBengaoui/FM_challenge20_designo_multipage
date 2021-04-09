import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation } from "../animation";

import IntroductionProject from "../components/IntroductionProject";
import ViewProject from "../components/ViewProject";
import Project from "../components/Project";
import ScrollTop from "../components/ScrollTop";

import { web_design_images, graphic_design_images } from "../data";
import image_airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import image_eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import image_faceit from "../assets/app-design/desktop/image-faceit.jpg";
import image_loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import image_todo from "../assets/app-design/desktop/image-todo.jpg";

const WebDesign = () => {
  return (
    <motion.div
      className="home"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IntroductionProject
        title={"App Design"}
        description={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />
      <Projects>
        <Project
          title={"airfilter"}
          description={
            "Solving the problem of poor indoor air quality by filtering the air"
          }
          image={image_airfilter}
        />
        <Project
          title={"eyecam"}
          description={
            "Product that lets you edit your favorite photos and videos at any time"
          }
          image={image_eyecam}
        />
        <Project
          title={"faceit"}
          description={
            "Get to meet your favorite internet superstar with the faceit app"
          }
          image={image_faceit}
        />
        <Project
          title={"todo"}
          description={
            "A todo app that features cloud sync with light and dark mode"
          }
          image={image_todo}
        />
        <Project
          title={"loopstudios"}
          description={"A VR experience app made for Loopstudios"}
          image={image_loopstudios}
        />

        <ViewProjects>
          <ViewProject
            title="web design"
            images={web_design_images}
            linkPath="/webdesign/"
          />
          <ViewProject
            title="graphic design"
            images={graphic_design_images}
            linkPath="/graphicdesign/"
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

export default WebDesign;
