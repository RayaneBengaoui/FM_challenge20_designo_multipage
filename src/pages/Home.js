import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Introduction from "../components/HomePage/Introduction";
import ViewProjects from "../components/HomePage/ViewProjects";
import Features from "../components/HomePage/Features";
import ScrollTop from "../components/ScrollTop";

import { pageAnimation } from "../animation";

const Home = () => {
  return (
    <motion.div
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
    </motion.div>
  );
};

export default Home;
