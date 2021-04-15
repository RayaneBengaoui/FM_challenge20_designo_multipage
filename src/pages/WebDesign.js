import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation } from "../animation";

import IntroductionProject from "../components/IntroductionProject";
import ViewProject from "../components/ViewProject";
import Project from "../components/Project";
import ScrollTop from "../components/ScrollTop";

import { app_design_images, graphic_design_images } from "../data";
import image_express from "../assets/web-design/desktop/image-express.jpg";
import image_transfer from "../assets/web-design/desktop/image-transfer.jpg";
import image_photon from "../assets/web-design/desktop/image-photon.jpg";
import image_builder from "../assets/web-design/desktop/image-builder.jpg";
import image_blogr from "../assets/web-design/desktop/image-blogr.jpg";
import image_camp from "../assets/web-design/desktop/image-camp.jpg";

const WebDesign = () => {
  return (
    <WebDesignStyle
      className="home"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IntroductionProject
        title={"Web Design"}
        description={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <Projects>
        <Project
          title={"express"}
          description={
            "A multi-carrier shipping website for ecommerce businesses"
          }
          image={image_express}
        />
        <Project
          title={"transfer"}
          description={
            "Site for low-cost money transfers and sending money within seconds"
          }
          image={image_transfer}
        />
        <Project
          title={"photon"}
          description={
            "A state-of-the-art music player with high-resolution audio and DSP effects"
          }
          image={image_photon}
        />
        <Project
          title={"builder"}
          description={
            "Connects users with local contractors based on their location"
          }
          image={image_builder}
        />
        <Project
          title={"blogr"}
          description={
            "Blogr is a platform for creating an online blog or publication"
          }
          image={image_blogr}
        />
        <Project
          title={"camp"}
          description={
            "Get expert training in coding, data, design, and digital marketing"
          }
          image={image_camp}
        />
      </Projects>
      <ViewProjects>
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
      </ViewProjects>

      <ScrollTop />
    </WebDesignStyle>
  );
};

const WebDesignStyle = styled(motion.div)`
  @media screen and (min-width: 700px) {
    padding: 0 2.5rem;
  }
  @media screen and (min-width: 1250px) {
    padding: 0 10.25rem;
  }
`;

const Projects = styled.div`
  min-height: 100vh;
  padding: 0 1.5rem;
  @media screen and (min-width: 700px) {
    padding: 0;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1170px;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 10rem;
  }
`;

const ViewProjects = styled.div`
  margin-top: 6rem;
  padding: 0 1.5rem;
  @media screen and (min-width: 700px) {
    padding: 0 0rem;
    margin-bottom: 24rem;
  }
  @media screen and (min-width: 1250px) {
    max-width: 1111px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 318px;
    gap: 2rem;
    margin-top: 10rem;
    margin-bottom: 27rem;
  }
`;

export default WebDesign;
