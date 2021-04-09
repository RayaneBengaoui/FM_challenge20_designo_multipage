import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation } from "../animation";

import Map from "../components/Map";

import ScrollTop from "../components/ScrollTop";

const Locations = () => {
  return (
    <LocationsStyle
      className="home"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Map
        x={45.76}
        y={4.82}
        country={"Canada"}
        office={"Designo Central Office"}
        adress={"3886 Wellington Street Toronto, Ontario M9C 3J5"}
        contactP={"P : +1 253-863-8967"}
        contactM={"M : contact@designo.co"}
      />

      <ScrollTop />
    </LocationsStyle>
  );
};

const LocationsStyle = styled(motion.div)`
  min-height: 100vh;
`;

export default Locations;
