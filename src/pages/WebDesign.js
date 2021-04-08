import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation } from "../animation";

import IntroductionProject from "../components/IntroductionProject";
import ScrollTop from "../components/ScrollTop";

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
        title={"Web Design"}
        description={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <Projects />
      <ScrollTop />
    </motion.div>
  );
};

const Projects = styled.div`
  min-height: 100vh;
`;

export default WebDesign;
