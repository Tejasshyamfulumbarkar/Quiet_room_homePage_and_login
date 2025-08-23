// src/app/login/page.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

// --- Shared Gradient Border Style ---
const RoundedGradientBorder = `
  border-radius: 15px;
  border: 6px solid transparent; /* thickness of border */
  background: 
    linear-gradient(#fff, #fff) padding-box, /* inner background */
    linear-gradient(135deg, #E9D5FF, #C084FC) border-box; /* gradient border */
`;

// --- Styled Components ---

const LoginPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100dvh; /* dynamic viewport height */
  width: 100%;
  overflow: hidden; /* prevent scrollbars */
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5vw; 
  max-width: 100%; /* prevent overflow */
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden; /* ensure no overflow from image */
  background-color: #f0e8ff;
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
`;

const LoginLinkContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 24px;
  color: #6B7280;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

// --- The Login Page Component ---

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <FormContainer>
        <Heading>Ready to Enter the Dojo?</Heading>
        <Subheading>Let's create your Quiet Room pass.</Subheading>

        <Input type="text" placeholder="Your Good name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />

        <SubmitButton>Create Account</SubmitButton>

        <LoginLinkContainer>
          Already have account?
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
    </LoginPageContainer>
  );
}
