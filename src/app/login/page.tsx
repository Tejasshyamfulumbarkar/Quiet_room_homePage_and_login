// src/app/login/page.tsx
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

const LoginPageContainer = styled.div`
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
  padding: 0 5vw; // Use viewport width for flexible padding
  max-width: 100%; 
  box-sizing: border-box;

  // Center the form content on larger screens and when the image is hidden
  @media (min-width: 992px) {
    // No change needed, stays on the left
  }
  @media (max-width: 992px) {
    margin: 0 auto;
    max-width: 600px;
    padding: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f0e8ff;

  // Hide the image on tablets and smaller devices to save space
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

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap; // Allow items to wrap on smaller screens

  // Stack elements on small mobile screens for better readability
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const LoginButton = styled.button`
  ${RoundedGradientBorder}
  padding: 0 3rem;
  height: 70px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  background: 
    linear-gradient(#F3E8FF, #F3E8FF) padding-box,
    linear-gradient(135deg, #E9D5FF, #C084FC) border-box;
  
  // Decrease size for tablets
  @media (max-width: 768px) {
    height: 60px;
    font-size: 18px;
    padding: 0 2rem;
  }
  
  // Further decrease size for mobile phones
  @media (max-width: 480px) {
    width: 100%; // Make button full-width for a better mobile UX
    height: 55px;
    font-size: 16px;
  }
`;

const ForgotPasswordLink = styled(Link)`
  font-size: 1rem;
  color: #8B5CF6; 
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CreateAccountContainer = styled.div`
  margin-top: 2rem;
  font-size: 24px;
  color: #6B7280;
  display: flex;
  align-items: center;
  flex-wrap: wrap; // Allow items to wrap
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    flex-direction: column; // Stack text and button vertically
    align-items: flex-start;
    gap: 0.75rem;
    margin-top: 3rem;
  }
`;

const CreateAccountLink = styled(Link)`
  ${RoundedGradientBorder}
  font-weight: bold;
  text-decoration: none;
  margin-left: 1rem;
  color: #333;
  padding: 0.5rem 1.5rem;
  background: 
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(135deg, #E9D5FF, #C084FC) border-box;
  
  @media (max-width: 480px) {
    margin-left: 0; // Remove left margin when stacked
  }
`;

// --- The Login Page Component ---
// (No changes needed in the JSX, all adjustments are in the styles)
export default function LoginPage() {
  return (
    <LoginPageContainer>
      <FormContainer>
        <Heading>Welcome Back, Warrior</Heading>
        <Subheading>Your dojo awaits.</Subheading>

        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <ActionContainer>
          <LoginButton>Login</LoginButton>
          <ForgotPasswordLink href="/forgot-password">
            Forgot your password?
          </ForgotPasswordLink>
        </ActionContainer>
        
        <CreateAccountContainer>
          Don't have an account?
          <CreateAccountLink href="/signup">Create Account &gt;</CreateAccountLink>
        </CreateAccountContainer>
      </FormContainer>

      <ImageContainer>
        <Image
          src="/loginimage.png"
          alt="Character walking through a door to focus"
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
    </LoginPageContainer>
  );
}