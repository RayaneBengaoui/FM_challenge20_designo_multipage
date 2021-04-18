import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation } from "../animation";

import Map from "../components/Map";

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
          x={-30.329}
          y={149.788}
          country={"Australia"}
          office={"Designo AU Office"}
          adress={"19 Balonne Street New South Wales 2443"}
          contactP={"P : (02) 6720 9092"}
          contactM={"M : contact@designo.au"}
          flexDir="reverse"
        />
        <Map
          x={51.732}
          y={-3.862}
          country={"United Kingdom"}
          office={"Designo UK Office"}
          adress={"13  Colorado Way Rhyd-y-fro SA8 9GA"}
          contactP={"P : 078 3115 1400"}
          contactM={"M : contact@designo.uk"}
        />
      </Maps>
    </LocationsStyle>
  );
};

const LocationsStyle = styled(motion.div)`
  min-height: 100vh;

  @media screen and (min-width: 700px) {
    padding: 0 2.5rem;
  }

  @media screen and (min-width: 1250px) {
    padding: 0 10.25rem;
  }
`;
const Maps = styled(motion.div)``;

export default Locations;
