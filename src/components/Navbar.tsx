// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import styled from 'styled-components';

// --- Styled Components (Our Magic Crayons) ---

// This is the main box that holds everything in the navbar.
const NavContainer = styled.nav`
  display: flex; // This makes items sit side-by-side.
  justify-content: space-between; // Pushes logo/links and button to opposite ends.
  align-items: center; // Vertically centers everything.
  padding: 1rem 2rem; // Adds some space inside the box.
  border: 1px solid #000; // Border width is 1px as per Figma.
  border-radius: 15px; // Border radius is now 15px as per Figma.
  background-color: #fff; // A clean white background.
  /* The margin is adjusted to be 2rem on top/bottom and 1rem on the sides, allowing it to be responsive. */
  margin: 2rem 1rem; 

  /* This creates the subtle dotted background pattern */
  background-image: radial-gradient(#e0e0e0 1px, transparent 1px);
  background-size: 16px 16px;
`;

// The logo image, with updated dimensions from Figma.
const LogoImage = styled.img`
  width: 56px;
  height: 53px;
`;

// The list that holds our navigation links like Home, About, etc.
const NavLinks = styled.ul`
  display: flex; // Makes the links sit side-by-side.
  flex-grow: 1; // Allows this container to grow and fill the available space.
  justify-content: center; // Centers the nav items within the container.
  align-items: center; // Ensures items are vertically aligned.
  gap: 3rem; // Increased gap for more spacing between nav items.
  list-style: none; // Removes the default bullet points from the list.
  margin: 0;
  padding: 0;
`;

// This is the styled link itself.
const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  /* Text color is now black for active and dark grey for inactive */
  color: ${({ $isActive }) => ($isActive ? '#000' : '#555')};
  text-decoration: none; // Removes the underline from the link.
  display: flex;
  align-items: center;
  gap: 0.5rem; // Space between the circle and the text.
  
  /* Added border, border-radius, and adjusted padding */
  border: 1.5px solid #000;
  border-radius: 12px;
  padding: 0.5rem 1.25rem; // Gives space inside the border.
  transition: color 0.3s ease;

  /* Typography styles from Figma */
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;

  /* This is the magic for creating the circle! */
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%; // Makes it a perfect circle.
    border: 1.5px solid #000; // Border color is now black.
    background-color: transparent; // Bullet point is transparent by default.
    transition: background-color 0.3s ease; // Smooth transition for the fill effect.
  }

  /* On hover, we fill the bullet point with the new purple color */
  &:hover::before {
    background-color: #ddb6fb;
  }
`;

// This is our special "Login" button on the right.
const LoginButton = styled.button`
  background-color: #ddb6fb; // The new purple background color.
  color: #000; // Black text color for better contrast.
  border: 1.5px solid #000; // Added black border.
  border-radius: 12px; // Rounded corners.
  padding: 0.75rem 1.5rem; // Space inside the button.
  cursor: pointer; // Makes the mouse turn into a pointer on hover.
  transition: opacity 0.3s ease;

  /* Typography styles from Figma */
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

// --- The Navbar Component (Putting the Bricks Together) ---

export default function Navbar() {
  // For now, we'll pretend "Home" is always the active page.
  const activePath = '/';

  return (
    <NavContainer>
      <Link href="/">
        <LogoImage src="/logo.png" alt="Your Company Logo" />
      </Link>
      <NavLinks>
        <li>
          <StyledLink href="/" $isActive={activePath === '/'}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/about" $isActive={activePath === '/'}>
            About
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/features" $isActive={activePath === '/'}>
            Features
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/contact" $isActive={activePath === '/'}>
            Contact
          </StyledLink>
        </li>
      </NavLinks>
      {/* Wrap the button with a Link component to handle navigation */}
      <Link href="/login">
        <LoginButton>LogIn</LoginButton>
      </Link>
    </NavContainer>
  );
}
