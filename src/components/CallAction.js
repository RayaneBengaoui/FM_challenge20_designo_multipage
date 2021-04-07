import styled from "styled-components";

import { Link } from "react-router-dom";

import bg_circle from "../assets/shared/desktop/bg-pattern-call-to-action.svg";

const CallAction = () => {
  return (
    <CallActionstyle bg={bg_circle}>
      <h1>Let’s talk about your project</h1>
      <p>
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <button>Get in touch</button>
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
  }

  p {
    padding-top: 1rem;
    padding-bottom: 2rem;
    color: white;
    max-width: 20rem;
  }
`;

export default CallAction;
