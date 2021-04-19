import styled from "styled-components";
import { motion } from "framer-motion";

import Feature from "../Feature";

import illustration_passionate from "../../assets/home/desktop/illustration-passionate.svg";
import illustration_resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
import illustration_friendly from "../../assets/home/desktop/illustration-friendly.svg";
import leaf_bg from "../../assets/shared/desktop/bg-pattern-leaf.svg";

const Features = () => {
  return (
    <FeaturesStyle>
      <BgLeaf src={leaf_bg} alt="leaf" />
      <Feature
        illustration={illustration_passionate}
        title="Passionate"
        description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        circle_rotation="0deg"
      />
      <Feature
        illustration={illustration_resourceful}
        title="Resourceful"
        description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        circle_rotation="-90deg"
      />
      <Feature
        illustration={illustration_friendly}
        title="Friendly"
        description=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        circle_rotation="90deg"
      />
    </FeaturesStyle>
  );
};

const FeaturesStyle = styled(motion.section)`
  min-height: 50vh;
  padding: 0 1.5rem;
  padding-top: 5rem;

  :last-child {
    margin-bottom: 20rem;
  }

  @media screen and (min-width: 700px) {
    padding: 0 2.5rem;
    padding-top: 5rem;

    :last-child {
      margin-bottom: 0rem;
    }
  }

  @media screen and (min-width: 1250px) {
    padding: 0 0;
    padding-top: 5rem;
    max-width: 1111px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`;

const BgLeaf = styled.img`
  position: absolute;
  display: none;
  transform: rotate(180deg);
  @media screen and (min-width: 1250px) {
    z-index: -1;
    display: unset;
    bottom: -40%;
    right: -15%;
  }
`;

export default Features;
