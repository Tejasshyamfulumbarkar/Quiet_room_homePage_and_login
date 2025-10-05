// src/components/Footer.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'; // Use Next.js Link for navigation

// --- Styled Components ---

const FooterContainer = styled.footer`
  position: relative; /* For positioning the decorative image */
  width: 100%;
  background-color: #F0F0FF; /* Very light purple background */
  padding: 4rem 5rem;
  border-top: 4px solid #4D6FFF; /* Thick blue bottom border from your design */
  overflow: hidden; /* Hide parts of the decorative image that go outside */

  @media (max-width: 992px) {
    padding: 3rem 2rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr; /* 3 columns with specified ratios */
  gap: 2rem;
  width: 100%;
  max-width: 1200px; /* Max width for content */
  margin: 0 auto; /* Center the grid */
  position: relative; /* Ensure it's above the decorative image */
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns on smaller screens */
    gap: 3rem; /* Increase gap when stacked */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BrandColumn = styled(Column)`
  justify-content: space-between; /* Pushes copyright to the bottom */

  @media (max-width: 768px) {
    align-items: center; /* Center brand on mobile */
    gap: 2rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoText = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
`;

const ColumnTitle = styled.h3`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterLink = styled(Link)`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  color: #555;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #4D6FFF;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
  color: #777;
  margin: 0;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const DecorativeImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1; /* Sits below the grid content but above the background */
  width: 400px; /* Adjust size as needed */
  height: auto;

  @media (max-width: 992px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    opacity: 0.5; /* Fade it out a bit on mobile to not distract */
    width: 250px;
  }
`;


// --- The Footer Component ---
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterGrid>
        {/* --- Column 1: Brand & Copyright --- */}
        <BrandColumn>
          <LogoWrapper>
            <Image src="/logo-icon.png" alt="Quiet Room Logo" width={40} height={40} />
            <LogoText>Quiet Room</LogoText>
          </LogoWrapper>
          <CopyrightText>© {currentYear} Quiet Room</CopyrightText>
        </BrandColumn>

        {/* --- Column 2: Explore Links --- */}
        <Column>
          <ColumnTitle>Explore</ColumnTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/login">Login</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/features">Features</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/faq">Faq</FooterLink>
        </Column>

        {/* --- Column 3: Connect Links --- */}
        <Column>
          <ColumnTitle>Connect</ColumnTitle>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">X</FooterLink>
          <FooterLink href="#">LinkedIn</FooterLink>
        </Column>
      </FooterGrid>
      
      {/* Decorative Background Image */}
      <DecorativeImage
        src="/footer-graphic.png" // Replace with your actual image path
        alt="Decorative background graphic"
        width={400}
        height={200} // Adjust height to match your image's aspect ratio
      />
    </FooterContainer>
  );
}