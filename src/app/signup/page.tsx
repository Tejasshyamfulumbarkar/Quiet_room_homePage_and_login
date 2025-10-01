// src/app/signup/page.tsx 
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

// --- Shared Gradient Border Style ---
const RoundedGradientBorder = `
  border-radius: 15px;
  border: 6px solid transparent;
  background: 
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(135deg, #E9D5FF, #C084FC) border-box;

  // Make border thinner on smaller screens
  @media (max-width: 768px) {
    border-width: 4px;
  }
`;

// --- Styled Components ---

const SignupPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100dvh;
  width: 100%;
  overflow: hidden;

  // Switch to a single-column layout on tablets and below
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5vw;
  max-width: 100%;
  box-sizing: border-box;
  overflow-y: auto; // Allow scrolling on small screens if content overflows

  // Center the form content on larger screens and when the image is hidden
  @media (max-width: 992px) {
    margin: 0 auto;
    max-width: 600px;
    padding: 2rem;
    height: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f0e8ff;

  // Hide the image on tablets and smaller devices
  @media (max-width: 992px) {
    display: none;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0 3rem 0;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  ${RoundedGradientBorder}
  width: 100%;
  height: 70px;
  margin-bottom: 1.5rem;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: #333;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    font-weight: 500;
    font-size: 24px;
    color: #999;
  }

  // Decrease size for tablets
  @media (max-width: 768px) {
    height: 60px;
    font-size: 18px;
    &::placeholder {
      font-size: 18px;
    }
  }

  // Further decrease size for mobile phones
  @media (max-width: 480px) {
    height: 55px;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }
  }
`;

const SubmitButton = styled.button`
  ${RoundedGradientBorder}
  width: 100%;
  height: 70px;
  margin-top: 1rem;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  background: 
    linear-gradient(#F3E8FF, #F3E8FF) padding-box,
    linear-gradient(135deg, #E9D5FF, #C084FC) border-box;

  // Adjust size for tablets
  @media (max-width: 768px) {
    height: 60px;
    font-size: 18px;
  }

  // Adjust size for mobile
  @media (max-width: 480px) {
    height: 55px;
    font-size: 16px;
  }
`;

const LoginLinkContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 24px;
  color: #6B7280;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; // Allow wrapping on medium screens
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  // Stack elements vertically on small mobile screens
  @media (max-width: 480px) {
    font-size: 16px;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const LoginLink = styled(Link)`
  ${RoundedGradientBorder}
  font-weight: bold;
  text-decoration: none;
  margin-left: 1rem;
  color: #333;
  padding: 0.5rem 1rem;
  background: 
    linear-gradient(#F3E8FF, #F3E8FF) padding-box,
    linear-gradient(135deg, #E9D5FF, #C084FC) border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  // Remove margin when stacked vertically
  @media (max-width: 480px) {
    margin-left: 0;
  }
`;

// --- The Signup Page Component ---
// I've renamed the main container to SignupPageContainer for clarity
export default function SignupPage() {
  return (
    <SignupPageContainer>
      <FormContainer>
        <Heading>Ready to Enter the Dojo?</Heading>
        <Subheading>Let's create your Quiet Room pass.</Subheading>

        <Input type="text" placeholder="Your Good name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />

        <SubmitButton>Create Account</SubmitButton>

        <LoginLinkContainer>
          Already have an account?
          <LoginLink href="/login">Login &gt;</LoginLink>
        </LoginLinkContainer>
      </FormContainer>

      <ImageContainer>
        <Image
          src="/loginimage.png"
          alt="Character walking through a door to focus"
          fill
          style={{ objectFit: 'cover' }} 
        />
      </ImageContainer>
    </SignupPageContainer>
  );
}