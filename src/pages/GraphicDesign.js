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
import leaf_bg from "../assets/shared/desktop/bg-pattern-leaf.svg";

const GraphicDesign = () => {
  return (
    <GraphicDesignStyle
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
        <BgLeaf src={leaf_bg} />
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
      </Projects>
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

      <ScrollTop />
    </GraphicDesignStyle>
  );
};

const GraphicDesignStyle = styled(motion.div)`
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
    min-height: 50vh;
    max-width: 1170px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10rem;
    position: relative;
  }
`;

const ViewProjects = styled.div`
  margin-top: 6rem;
  padding: 0 1.5rem;
  @media screen and (min-width: 700px) {
    margin-bottom: 24rem;
    padding: 0 0;
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

const BgLeaf = styled.img`
  position: absolute;
  display: none;
  @media screen and (min-width: 1440px) {
    z-index: -1;
    display: unset;
    top: -60%;
    left: -15%;
  }
`;

export default GraphicDesign;
