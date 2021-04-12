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

        {/* <input
          className="largeInput"
          type="text"
          name="message"
          id="message"
          placeholder="Your Message"
          required
        /> */}

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
`;

export default Form;
