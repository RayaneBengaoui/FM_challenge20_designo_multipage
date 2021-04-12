import styled from "styled-components";
import { motion } from "framer-motion";

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
      <FormContainer action="">
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
        <input
          className="largeInput"
          type="text"
          name="message"
          id="message"
          placeholder="Your Message"
          required
        />
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
`;
const Header = styled.div``;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 1rem 0;
    border-bottom: solid 1px white;
  }

  .largeInput {
    padding-bottom: 5rem;
  }
`;

export default Form;
