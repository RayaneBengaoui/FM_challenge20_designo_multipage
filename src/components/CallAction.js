import styled from "styled-components";

import { Link } from "react-router-dom";

import bg_circle from "../assets/shared/desktop/bg-pattern-call-to-action.svg";
import { motion } from "framer-motion";

const CallAction = () => {
  return (
    <CallActionstyle bg={bg_circle}>
      <div>
        <h1>Let’s talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: "#FFAD9B",
          color: "white",
        }}
        whileTap={{ scale: 0.9 }}
      >
        Get in touch
      </motion.button>
    </CallActionstyle>
  );
};

const CallActionstyle = styled.div`
  background-color: var(--peach);
  background-image: ${(props) => `url(${props.bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  width: 90%;
  min-height: 380px;
  padding: 3rem 1.5rem;
  border-radius: 15px;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    max-width: 15rem;
    margin: auto;
  }

  p {
    padding-top: 1rem;
    padding-bottom: 2rem;
    color: white;
    max-width: 20rem;
  }

  @media screen and (min-width: 700px) {
    transform: translateY(-75%);
    h1 {
      font-size: 2.5rem;
      max-width: 21rem;
    }

    p {
      max-width: 28rem;
    }
  }
  @media screen and (min-width: 1250px) {
    max-width: 1111px;
    min-height: 292px;
    flex-direction: row;
    justify-content: space-between;

    text-align: left;
    padding: 0 6rem;
    h1 {
      font-size: 2.5rem;
      max-width: 21rem;
      margin: unset;
    }

    p {
      max-width: 28rem;
      padding-bottom: 0rem;
    }
  }
`;

export default CallAction;
