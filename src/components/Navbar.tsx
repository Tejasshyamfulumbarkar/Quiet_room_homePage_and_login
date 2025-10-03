// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

// --- Styled Components ---

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border: 1px solid #000;
  border-radius: 15px;
  background-color: #fff;
  margin: 2rem;
  position: relative;
  z-index: 20;

  background-image: radial-gradient(#e0e0e0 1px, transparent 1px);
  background-size: 16px 16px;

  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
    margin: 1.5rem;
  }

  /* --- Breakpoint for switching to mobile view --- */
  @media (max-width: 900px) {
    padding: 1rem;
    margin: 1rem;
    background: transparent;
    border: none;
  }
`;

const LogoImage = styled.img`
  width: 56px;
  height: 53px;
  z-index: 11;

  @media (max-width: 1024px) {
    width: 52px;
    height: 49px;
  }

  @media (max-width: 900px) {
    width: 48px;
    height: 45px;
  }
`;

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 992px) {
    gap: 1.5rem;
  }

  /* --- Breakpoint for switching to mobile view --- */
  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    z-index: 10;
  }
`;

const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${({ $isActive }) => ($isActive ? '#000' : '#555')};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1.5px solid #000;
  border-radius: 12px;
  padding: 0.5rem 1.25rem;
  transition: color 0.3s ease;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1.5px solid #000;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    background-color: #ddb6fb;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
    padding: 0.5rem 1rem;
  }

  /* --- Breakpoint for switching to mobile view --- */
  @media (max-width: 900px) {
    /* Font size increases for the spacious mobile overlay */
    font-size: 24px;
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 480px) {
    /* Font size inside the menu is reduced for small screens */
    font-size: 20px;
    padding: 0.6rem 1.2rem;
  }
`;

const LoginButton = styled.button`
  background-color: #ddb6fb;
  color: #000;
  border: 1.5px solid #000;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
    padding: 0.6rem 1.2rem;
  }
  
  /* --- Breakpoint for switching to mobile view --- */
  @media (max-width: 900px) {
    font-size: 16px;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0.4rem 0.8rem;
  }
`;

const RightNavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
      gap: 0.5rem;
  }
`;

const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 11;
  
  /* --- Breakpoint for switching to mobile view --- */
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    padding: 0;
    
    div {
      width: 2rem;
      height: 0.25rem;
      background: black;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
      
      :first-child {
        transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      }
      :nth-child(2) {
        opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
        transform: ${({ $isOpen }) => ($isOpen ? 'translateX(20px)' : 'translateX(0)')};
      }
      :nth-child(3) {
        transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;

// --- The Navbar Component ---

export default function Navbar() {
  const activePath = '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavContainer>
      <Link href="/">
        <LogoImage src="/logo.png" alt="Quiet Room Logo" />
      </Link>

      <NavLinks $isOpen={isMenuOpen}>
        <li onClick={() => setIsMenuOpen(false)}>
          <StyledLink href="/" $isActive={activePath === '/'}>
            Home
          </StyledLink>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <StyledLink href="/about" $isActive={activePath === '/'}>
            About
          </StyledLink>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <StyledLink href="/features" $isActive={activePath === '/'}>
            Features
          </StyledLink>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <StyledLink href="/contact" $isActive={activePath === '/'}>
            Contact
          </StyledLink>
        </li>
      </NavLinks>

      <RightNavControls>
        <Link href="/login">
          <LoginButton>LogIn</LoginButton>
        </Link>
        
        <HamburgerButton $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div />
          <div />
          <div />
        </HamburgerButton>
      </RightNavControls>
    </NavContainer>
  );
}