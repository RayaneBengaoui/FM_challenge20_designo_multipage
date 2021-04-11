import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation } from "../animation";

import Information from "../components/About/Information";
import ScrollTop from "../components/ScrollTop";

import {
  about_hero_images,
  about_deal_images,
  about_talent_images,
} from "../data";

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
        doubletext={
          "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        }
      />
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
      <ScrollTop />
    </AboutStyle>
  );
};

const AboutStyle = styled(motion.div)`
  min-height: 100vh;
`;

export default About;
