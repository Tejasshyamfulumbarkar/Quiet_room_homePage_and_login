// src/app/login/page.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

// --- Shared Gradient Border Style ---
// This style is used for inputs and buttons to create a consistent look.
const RoundedGradientBorder = `
  border-radius: 15px;
  border: 6px solid transparent;
  background: 
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(135deg, #E9D5FF, #C084FC) border-box;
`;

// --- Styled Components ---

const LoginPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100dvh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
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
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f0e8ff;

   @media (max-width: 768px) {
    display: none;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0 3rem 0;
  color: #555;
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
`;

// NEW: A container for the login button and "Forgot password" link
const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

// UPDATED: This button is for logging in. The background matches the image.
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
`;

// NEW: Styled link for the "Forgot your password?" text
const ForgotPasswordLink = styled(Link)`
  font-size: 1rem;
  color: #8B5CF6; /* A matching purple color */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

// UPDATED: Container for the "Create Account" section
const CreateAccountContainer = styled.div`
  margin-top: 2rem;
  font-size: 24px;
  color: #6B7280;
  display: flex;
  align-items: center;
`;

// UPDATED: The link-styled button for creating an account
const CreateAccountLink = styled(Link)`
  ${RoundedGradientBorder}
  font-weight: bold;
  text-decoration: none;
  margin-left: 1rem;
  color: #333;
  padding: 0.5rem 1.5rem;
  /* The white background inside the gradient border gives it the "outline" look */
  background: 
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(135deg, #E9D5FF, #C084FC) border-box;
`;

// --- The Login Page Component ---

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <FormContainer>
        {/* UPDATED: Text changed to match the login page image */}
        <Heading>Welcome Back, Warrior</Heading>
        <Subheading>Your dojo awaits.</Subheading>

        {/* UPDATED: Removed name and confirm password fields */}
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        {/* UPDATED: New layout for the primary action buttons/links */}
        <ActionContainer>
          <LoginButton>Login</LoginButton>
          <ForgotPasswordLink href="/forgot-password">
            Forgot your password?
          </ForgotPasswordLink>
        </ActionContainer>
        
        {/* UPDATED: Text and link now direct users to the signup page */}
        <CreateAccountContainer>
          Don't have account?
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