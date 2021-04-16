import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation } from "../animation";

import Form from "../components/Contact/Form";
import CityLocation from "../components/CityLocation";
import ScrollTop from "../components/ScrollTop";

import illustration_australia from "../assets/shared/desktop/illustration-australia.svg";
import illustration_canada from "../assets/shared/desktop/illustration-canada.svg";
import illustration_united_kingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";

const Contact = () => {
  return (
    <ContactStyle
      className="home"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <FormContainer>
        <Form />
      </FormContainer>
      <CityLocations>
        <CityLocation
          illustration={illustration_canada}
          title="canada"
          circle_rotation="90deg"
        />
        <CityLocation
          illustration={illustration_australia}
          title="australia"
          circle_rotation="0deg"
        />
        <CityLocation
          illustration={illustration_united_kingdom}
          title="united kingdom"
          circle_rotation="-90deg"
        />
      </CityLocations>

      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  min-height: 100vh;

  @media screen and (min-width: 700px) {
    padding: 0 2.5rem;
  }
  @media screen and (min-width: 1250px) {
    padding: 0 10.25rem;
  }
`;
const CityLocations = styled(motion.div)`
  min-height: 100vh;
  padding: 0 1.5rem;
  margin: 7.5rem 0;

  @media screen and (min-width: 1250px) {
    min-height: 10vh;
    max-width: 1111px;
    margin: 7.5rem auto;
    display: flex;
    justify-content: space-between;
  }
`;
const FormContainer = styled(motion.div)`
  min-height: 48rem;

  @media screen and (min-width: 1250px) {
    min-height: 30rem;
  }
`;

export default Contact;
