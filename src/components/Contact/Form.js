import styled from "styled-components";
import { motion } from "framer-motion";

import twoCircles_bg from "../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import bigCircle_bg from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";

const Form = () => {
  return (
    <FormStyle>
      <Header>
        <h2>Contact Us</h2>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </Header>
      <FormContainer onSubmit="return false;">
        <input type="text" name="name" id="name" placeholder="Name" required />
        <input
          type="email"
          name="mail"
          id="mail"
          placeholder="Email Adress"
          required
        />
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone"
          required
        />
        <textarea placeholder="Your Message" className="largeInput"></textarea>
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#FFAD9B",
            color: "white",
          }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button>
      </FormContainer>
    </FormStyle>
  );
};

const FormStyle = styled.div`
  background-color: var(--peach);
  display: flex;
  flex-direction: column;
  padding: 4.5rem 1.5rem;
  background-image: url(${twoCircles_bg});
  background-repeat: no-repeat;
  background-position: 20% 0%;
  @media screen and (min-width: 700px) {
    background-image: url(${bigCircle_bg});
    background-position: -8rem -80%;
    border-radius: 15px;
    padding: 4.5rem 3.75rem;
  }
  @media screen and (min-width: 1250px) {
    background-position: 0% -5.1rem;
    background-size: 50%;
    max-width: 1111px;
    margin: auto;
    flex-direction: row;
    max-height: 475px;
    padding: 3.5rem 3.75rem;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  text-align: center;
  p {
    color: white;
    padding: 1.5rem 0;
    max-width: 22rem;
  }

  @media screen and (min-width: 700px) {
    text-align: left;
    align-items: flex-start;

    h2 {
      width: 100%;
    }
    p {
      width: 100%;
      max-width: 35rem;
    }
  }
  @media screen and (min-width: 1250px) {
    justify-content: center;
    flex-basis: 50%;

    padding: 0 2.5rem;

    p {
      max-width: 445px;
    }
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 1rem 0;
  }

  .largeInput {
    padding-bottom: 5rem;
    margin: 1rem 0;
  }

  button {
    margin-top: 2.5rem;
    align-self: center;
  }

  @media screen and (min-width: 700px) {
    button {
      align-self: flex-end;
    }
  }

  @media screen and (min-width: 1250px) {
    flex-basis: 50%;
    padding: 0 2.5rem;
    button {
      margin-top: 0;
    }
  }
`;

export default Form;
