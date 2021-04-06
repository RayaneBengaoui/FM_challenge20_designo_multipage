import { Link } from "react-router-dom";

import Introduction from "../components/HomePage/Introduction";
import ViewProjects from "../components/HomePage/ViewProjects";

const Home = () => {
  return (
    <div className="home">
      <Introduction />
      <ViewProjects />
    </div>
  );
};

export default Home;
