// src/components/ContactUs.tsx
'use client';

import styled from 'styled-components';

// --- Styled Components ---

const ContactUsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  background-color: #F8F8FD; /* Light background for the section */
  gap: 2rem;
  text-align: center;

  @media (max-width: 992px) {
    padding: 4rem 1rem;
    gap: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: #8A9BFF; /* Purple color from your design */
  line-height: 1.2;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

// The main form card with a gradient border
const FormCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 15px;
  padding: 3rem 4rem; /* Inner padding for the form */
  overflow: hidden;
  z-index: 1;

  /* Gradient Border Effect */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: 15px;
    padding: 4px; /* Border thickness */
    background: linear-gradient(to right, #D9D2FF, #8A9BFF); /* Your gradient colors */
    -webkit-mask:
       linear-gradient(#fff 0 0) content-box,
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2.5rem;
  }
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Space between form groups */
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1.5rem; /* Space between First Name and Last Name inputs */

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FormControl = styled.div`
  flex: 1; /* Allows inputs to take equal width in InputGroup */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligns labels to the left */
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #D9D2FF; /* Light purple border for inputs */
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #333;
  background-color: #F8F8FD; /* Light background for input fields */
  outline: none; /* Remove default outline */

  &:focus {
    border-color: #8A9BFF; /* Darker purple on focus */
    box-shadow: 0 0 0 2px rgba(138, 155, 255, 0.2); /* Subtle focus ring */
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #D9D2FF;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #333;
  background-color: #F8F8FD;
  outline: none;
  resize: vertical; /* Allow vertical resizing only */
  min-height: 120px; /* Minimum height for the textarea */

  &:focus {
    border-color: #8A9BFF;
    box-shadow: 0 0 0 2px rgba(138, 155, 255, 0.2);
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem; /* Space above the button */
  align-self: center; /* Center the button in the form */
`;

const SubmitButton = styled.button`
  position: relative;
  z-index: 1;
  background-color: #D9D2FF; /* Light purple button color */
  border: none;
  border-radius: 12px;
  padding: 1rem 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  color: #333;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translate(-4px, -4px);
  }

  /* The button shadow using a pseudo-element */
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #6D63FF; /* Darker purple shadow color */
    border-radius: 12px;
    top: 8px;
    left: 8px;
    transition: top 0.2s ease-in-out, left 0.2s ease-in-out;
  }

  &:hover::after {
    top: 12px;
    left: 12px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;


// --- The Main ContactUs Component ---
export default function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent! (Form submission logic needs to be implemented)');
  };

  return (
    <ContactUsContainer>
      <SectionTitle>Contact us</SectionTitle>

      <FormCard>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <FormControl>
              <Label htmlFor="firstName">First Name</Label>
              <Input type="text" id="firstName" name="firstName" required />
            </FormControl>
            <FormControl>
              <Label htmlFor="lastName">Last Name</Label>
              <Input type="text" id="lastName" name="lastName" required />
            </FormControl>
          </InputGroup>

          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormControl>

          <FormControl>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} required />
          </FormControl>

          <ButtonWrapper>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ButtonWrapper>
        </Form>
      </FormCard>
    </ContactUsContainer>
  );
}