// src/components/HeroSection.tsx
// This marks the component as a Client Component, allowing it to use state, effects, and event listeners.
'use client';

// --- Dependency Imports ---
// Import 'styled' from styled-components for creating CSS-in-JS components.
import styled from 'styled-components';
// Import the 'Image' component from Next.js for optimized image handling.
import Image from 'next/image';
// Import a specific font, 'Zen_Dots', from Google Fonts via next/font.
import { Zen_Dots } from 'next/font/google';

// --- Font Instantiation ---
// Initialize the Zen_Dots font with specific settings.
const zenDots = Zen_Dots({
  weight: '400',   // Set the font weight to normal.
  subsets: ['latin'], // Specify the character subset to include.
});

// --- Styled Components ---
// This section defines all the styled-components used to build the hero section UI.

/**
 * The main container for the entire hero section.
 * It uses a flexbox layout to center its three columns (left, middle, right).
 */
const HeroContainer = styled.section`
  display: flex;         // Use flexbox for layout.
  flex-direction: row;   // Arrange children horizontally.
  align-items: center;   // Vertically center the columns.
  justify-content: center; // Horizontally center the columns.
  padding: 0 2rem;       // Add horizontal padding.
  gap: 2rem;             // Space between the columns.
  position: relative;    // Set position context for absolute children.
  flex-grow: 1;          // Allow the section to fill available vertical space in its parent.
`;

/**
 * A container for the content on the left side of the central image.
 */
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column; // Stack children vertically.
  align-items: center;    // Center children horizontally.
  text-align: center;
  gap: 1.5rem;            // Space between child elements.
  position: relative;
  bottom: 60px;           // Shift the entire column upwards for visual alignment.
`;

/**
 * A container for the content on the right side of the central image.
 */
const RightColumn = styled.div`
  display: flex;
  flex-direction: column; // Stack children vertically.
  align-items: center;    // Center children horizontally.
  text-align: center;
  gap: 1.5rem;            // Space between child elements.
  position: relative;
  bottom: 60px;           // Shift the entire column upwards for visual alignment.
`;

/**
 * A container specifically for the central hero image to control its size and positioning.
 */
const HeroImageContainer = styled.div`
  width: 711px;
  height: 711px;
  position: relative; // Required for Next.js Image with layout="fill".
`;

/**
 * The main heading text (e.g., "Quiet" and "Room").
 */
const MainHeading = styled.h1`
  font-size: 100px;
  line-height: 100%; // Keep line height tight.
  margin: 0;         // Remove default margin.
`;

/**
 * The subheading text (the quotes).
 * It accepts a boolean prop `$isRight` to apply different positioning styles.
 */
const Subheading = styled.p<{ $isRight?: boolean }>`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  max-width: 300px;  // Constrain width to encourage text wrapping.
  margin: 0;
  position: relative; // Enable positioning with top/left/right.
  
  /* Conditionally apply styles based on the $isRight prop */
  ${({ $isRight }) => $isRight ? `
    /* Styles for the right column's subheading */
    right: 60px;
    top: 60px;
  ` : `
    /* Styles for the left column's subheading */
    left: 60px;
    top: 60px;
  `}
`;

/**
 * The main call-to-action button.
 * It uses a pseudo-element (::after) to create a decorative background layer.
 */
const ActionButton = styled.button`
  width: 268px;
  height: 72px;
  border-radius: 15px;
  border: 1px solid #000;
  background-color: #3e4cff; // The top, visible button color.
  color: black;
  font-family: 'IBM Plex Mono', monospace;
  top: 80px; // Shift button down.
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative; // Set positioning context for children and pseudo-elements.
  z-index: 1;         // Ensure the button is above its pseudo-element.

  /* The decorative background layer behind the button */
  &::after {
    content: '';
    position: absolute;
    top: -8px;        // Position it slightly up and left from the button.
    left: -8px;
    width: 100%;
    height: 100%;
    background-color: #ddb6fb; // The color of the background layer.
    border-radius: 15px;
    border: 1px solid #000;
    z-index: -1;      // Place it behind the main button.
  }
`;

/**
 * A small, decorative tag attached to the ActionButton.
 * Rotated for a playful effect.
 */
const Tag = styled.span`
  position: absolute;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 16px;
  transform: rotate(25.78deg); // Apply rotation.
  
  /* Styling for the "It's free!" tag */
  &.free-tag {
    background-color: #FFDAB9;
    top: -10px;
    right: -40px;
  }

  /* Styling for the "New tools!" tag */
  &.new-tools-tag {
    background-color: #FFDAB9;
    top: -22px;
    right: -40px;
  }
`;

/**
 * The styled Next.js Image component for the connecting arrow graphics.
 */
const ConnectingArrowImage = styled(Image)`
  position: absolute;   // Position relative to the nearest positioned ancestor.
  pointer-events: none; // Make the image non-interactive.

  /* Positioning for the left arrow */
  &.left-arrow {
    top: 100px; 
    left: 0px; 
  }

  /* Positioning for the right arrow */
  &.right-arrow {
    top: 100px; 
    right: 0px; 
  }
`;


// --- The Hero Section React Component ---

/**
 * The main HeroSection component that assembles all the styled components
 * into a complete, structured UI.
 */
export default function HeroSection() {
  return (
    // The main container that holds the three-column layout.
    <HeroContainer>
      {/* --- LEFT COLUMN --- */}
      <LeftColumn>
        {/* The word "Quiet", styled with the Zen Dots font. */}
        <MainHeading className={zenDots.className}>Quiet</MainHeading>
        <Subheading>“A digital dojo for hustlers & grinders”</Subheading>
        {/* The decorative arrow pointing from the subheading towards the center. */}
        <ConnectingArrowImage
          className="left-arrow"
          src="/Vector 1.png"
          alt="Connecting arrow"
          width={71.5}
          height={107.5}
        />
        {/* The "Join" button with its associated "free" tag. */}
        <ActionButton>
          Join Quiet Room
          <Tag className="free-tag">It's free!</Tag>
        </ActionButton>
      </LeftColumn>

      {/* --- MIDDLE COLUMN (IMAGE) --- */}
      <HeroImageContainer>
        {/* The central character image, set to fill its container. */}
        <Image 
          src="/heroimage.png" 
          alt="Character meditating" 
          layout="fill" 
          objectFit="contain" 
        />
      </HeroImageContainer>

      {/* --- RIGHT COLUMN --- */}
      <RightColumn>
        {/* The word "Room", styled with the Zen Dots font. */}
        <MainHeading className={zenDots.className}>Room</MainHeading>
        {/* Subheading with the `$isRight` prop to apply specific positioning. */}
        <Subheading $isRight>“This isn’t school. This is training.”</Subheading>
        {/* The decorative arrow pointing from the subheading towards the center. */}
        <ConnectingArrowImage
          className="right-arrow"
          src="/Vector 2.png"
          alt="Connecting arrow"
          width={71.5}
          height={107.5}
        />
        {/* The "Explore" button with its associated "new tools" tag. */}
        <ActionButton>
          Explore Features
          <Tag className="new-tools-tag">New tools!</Tag>
        </ActionButton>
      </RightColumn>
    </HeroContainer>
  );
}