import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

import Introduction from "../components/HomePage/Introduction";
import ViewProjects from "../components/HomePage/ViewProjects";
import Features from "../components/HomePage/Features";
import ScrollTop from "../components/ScrollTop";

import { pageAnimation } from "../animation";

const Home = () => {
  return (
    <HomeStyle
      className="home"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Introduction />
      <ViewProjects />
      <Features />
      <ScrollTop />
    </HomeStyle>
  );
};

const HomeStyle = styled(motion.div)`
  @media screen and (min-width: 700px) {
    padding: 0 2.5rem;
  }
`;

export default Home;
