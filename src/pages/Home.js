import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>
        <Link to="/webdesign/">webdesign link</Link>
      </h2>
    </div>
  );
};

export default Home;
