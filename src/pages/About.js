import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation } from "../animation";

import Information from "../components/About/Information";
import CityLocation from "../components/CityLocation";

import {
  about_hero_images,
  about_deal_images,
  about_talent_images,
} from "../data";

import illustration_australia from "../assets/shared/desktop/illustration-australia.svg";
import illustration_canada from "../assets/shared/desktop/illustration-canada.svg";
import illustration_united_kingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";
import leaf_bg from "../assets/shared/desktop/bg-pattern-leaf.svg";

const About = () => {
  return (
    <AboutStyle
      className="home"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Information
        images={about_hero_images}
        title={"About Us"}
        description={
          "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
        }
        theme={"dark"}
        doubletext={false}
      />
      <Information
        images={about_talent_images}
        title={"World-class talent"}
        description={
          "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
        }
        theme={"light"}
        flexDir="row"
        doubletext={
          "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        }
      />
      <CityLocations>
        <BgLeafTop src={leaf_bg} alt="leaf" />
        <BgLeafBot src={leaf_bg} alt="leaf" />
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
      <Information
        images={about_deal_images}
        title={"The real deal"}
        description={
          "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        }
        theme={"light"}
        doubletext={
          "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        }
      />
    </AboutStyle>
  );
};

const AboutStyle = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;

  @media screen and (min-width: 700px) {
    padding: 0 2.5rem;
    margin-bottom: 26rem;

    section:nth-child(2) {
      margin-top: 7.5rem;
    }
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
    max-width: 1111px;
    margin: 7.5rem auto;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`;

const BgLeafBot = styled.img`
  position: absolute;
  display: none;
  transform: rotate(180deg);
  z-index: -5;
  @media screen and (min-width: 1250px) {
    display: unset;
    top: 42%;
    right: -50%;
  }
`;
const BgLeafTop = styled.img`
  position: absolute;
  display: none;
  z-index: -5;
  @media screen and (min-width: 1250px) {
    display: unset;
    top: -240%;
    left: -15%;
  }
`;

export default About;
