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
      <Maps>
        <Map
          x={43.64}
          y={-79.39}
          country={"Canada"}
          office={"Designo Central Office"}
          adress={"3886 Wellington Street Toronto, Ontario M9C 3J5"}
          contactP={"P : +1 253-863-8967"}
          contactM={"M : contact@designo.co"}
        />
        <Map
          x={-30.3}
          y={149.7}
          country={"Australia"}
          office={"Designo AU Office"}
          adress={"19 Balonne Street New South Wales 2443"}
          contactP={"P : (02) 6720 9092"}
          contactM={"M : contact@designo.au"}
        />
        <Map
          x={51.7}
          y={-3.8}
          country={"United Kingdom"}
          office={"Designo UK Office"}
          adress={"13  Colorado Way Rhyd-y-fro SA8 9GA"}
          contactP={"P : 078 3115 1400"}
          contactM={"M : contact@designo.uk"}
        />
      </Maps>
      <ScrollTop />
    </LocationsStyle>
  );
};

const LocationsStyle = styled(motion.div)`
  min-height: 100vh;
`;
const Maps = styled(motion.div)`
  margin-bottom: 18.5rem;
`;

export default Locations;
