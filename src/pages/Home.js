import { Link } from "react-router-dom";

import Introduction from "../components/HomePage/Introduction";
import ViewProjects from "../components/HomePage/ViewProjects";
import Features from "../components/HomePage/Features";

const Home = () => {
  return (
    <div className="home">
      <Introduction />
      <ViewProjects />
      <Features />
    </div>
  );
};

export default Home;
