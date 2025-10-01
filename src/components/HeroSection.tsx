// src/components/HeroSection.tsx
'use an client';

// --- Dependency Imports ---
import styled from 'styled-components';
import Image from 'next/image';
import { Zen_Dots } from 'next/font/google';

// --- Font Instantiation ---
const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
});

// --- Styled Components ---

const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  position: relative;
  flex-grow: 1;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  overflow-x: hidden;

  // --- Mobile Responsiveness ---
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem 1rem;
    gap: 0;
    min-height: 100dvh;
  }
`;

// --- DESKTOP-ONLY COMPONENTS ---
// Hide the original columns on mobile
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  position: relative;
  bottom: 60px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  position: relative;
  bottom: 60px;

  @media (max-width: 992px) {
    display: none;
  }
`;

// --- MOBILE-ONLY COMPONENTS ---
// Container for "Quiet Room" heading on mobile
const MobileHeadingsContainer = styled.div`
  display: none; // Hidden on desktop
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 1; // Appears first
  }
`;

// Container for the bottom section on mobile
const MobileBottomContainer = styled.div`
  display: none; // Hidden on desktop
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 3; // Appears last
    gap: 1.5rem;
    width: 100%;
    margin-top: 2rem;
  }
`;

// Rows for the 2-column grid layout on mobile
const MobileGridRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;


// --- SHARED COMPONENTS (STYLED FOR BOTH DESKTOP & MOBILE) ---

const HeroImageContainer = styled.div`
  width: 711px;
  height: 711px;
  position: relative;

  @media (max-width: 1200px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 992px) {
    order: 2; // Image is in the middle on mobile
    width: 70%;
    max-width: 300px;
    height: auto;
    aspect-ratio: 1 / 1;
    margin: 2rem 0;
  }
`;

const MainHeading = styled.h1`
  font-size: 100px;
  line-height: 1;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 72px;
  }
  @media (max-width: 992px) {
    font-size: 64px;
  }
  @media (max-width: 480px) {
    font-size: 52px;
  }
`;

const Subheading = styled.p<{ $isRight?: boolean }>`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  max-width: 300px;
  margin: 0;

  /* Desktop-only positioning */
  position: relative;
  ${({ $isRight }) => $isRight ? `
    right: 60px;
    top: 60px;
  ` : `
    left: 60px;
    top: 60px;
  `}

  @media (max-width: 1200px) {
    font-size: 20px;
    ${({ $isRight }) => $isRight ? `right: 30px; top: 30px;` : `left: 30px; top: 30px;`}
  }

  /* Mobile positioning reset */
  @media (max-width: 992px) {
    position: static;
    font-size: 14px;
    max-width: 150px;
    text-align: center;
  }
`;

const ActionButton = styled.button`
  width: 268px;
  height: 72px;
  border-radius: 15px;
  border: 1px solid #000;
  background-color: #3e4cff;
  color: black;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  
  /* Desktop-only positioning */
  top: 80px;

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: 100%;
    height: 100%;
    background-color: #ddb6fb;
    border-radius: 15px;
    border: 1px solid #000;
    z-index: -1;
  }

  @media (max-width: 1200px) {
    top: 60px;
  }

  /* Mobile styles */
  @media (max-width: 992px) {
    top: 0;
    width: 160px;
    height: 50px;
    font-size: 14px;
  }
`;

const Tag = styled.span`
  position: absolute;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 16px;
  transform: rotate(25.78deg);
  
  &.free-tag {
    background-color: #FFDAB9;
    top: -10px;
    right: -40px;
  }

  &.new-tools-tag {
    background-color: #FFDAB9;
    top: -22px;
    right: -40px;
  }

  @media (max-width: 992px) {
    font-size: 10px;
    padding: 0.2rem 0.5rem;
    &.free-tag { top: -8px; right: -15px; }
    &.new-tools-tag { top: -12px; right: -15px; }
  }
`;

const ConnectingArrowImage = styled(Image)`
  /* Desktop-only positioning */
  position: absolute;
  pointer-events: none;
  &.left-arrow { top: 100px; left: 0px; }
  &.right-arrow { top: 100px; right: 0px; }

   /* Mobile styles */
   @media (max-width: 992px) {
    position: static;
    width: 35px;
    height: auto;

    &.left-arrow {
      /* Example: Moves this arrow LEFT by 15px */
      transform: translateX(-130px); 
    }

    &.right-arrow {
      /* Example: Moves this arrow RIGHT by 15px */
      transform: translateX(120px);
    }
  }

`;

// --- The Hero Section React Component ---
export default function HeroSection() {
  return (
    <HeroContainer>
      {/* --- DESKTOP LAYOUT --- */}
      {/* The following 3 components form the desktop view. */}
      {/* LeftColumn and RightColumn will be hidden on mobile via CSS. */}
      
      <LeftColumn>
        <MainHeading className={zenDots.className}>Quiet</MainHeading>
        <Subheading>“A digital dojo for hustlers & grinders”</Subheading>
        <ConnectingArrowImage
          className="left-arrow"
          src="/Vector 1.png"
          alt="Connecting arrow"
          width={71.5}
          height={107.5}
        />
        <ActionButton>
          Join Quiet Room
          <Tag className="free-tag">It's free!</Tag>
        </ActionButton>
      </LeftColumn>

      {/* The HeroImageContainer is used by BOTH layouts. CSS 'order' property re-positions it on mobile. */}
      <HeroImageContainer>
        <Image 
          src="/heroimage.png" 
          alt="Character meditating" 
          layout="fill" 
          objectFit="contain" 
        />
      </HeroImageContainer>

      <RightColumn>
        <MainHeading className={zenDots.className}>Room</MainHeading>
        <Subheading $isRight>“This isn’t school. This is training.”</Subheading>
        <ConnectingArrowImage
          className="right-arrow"
          src="/Vector 2.png"
          alt="Connecting arrow"
          width={71.5}
          height={107.5}
        />
        <ActionButton>
          Explore Features
          <Tag className="new-tools-tag">New tools!</Tag>
        </ActionButton>
      </RightColumn>

      {/* --- MOBILE-ONLY LAYOUT --- */}
      {/* These components are hidden on desktop and only appear on mobile screens. */}

      <MobileHeadingsContainer>
        <MainHeading className={zenDots.className}>Quiet</MainHeading>
        <MainHeading className={zenDots.className}>Room</MainHeading>
      </MobileHeadingsContainer>
      
      <MobileBottomContainer>
        <MobileGridRow>
          <Subheading>“A digital dojo for hustlers & grinders”</Subheading>
          <Subheading $isRight>“This isn’t school. This is training.”</Subheading>
        </MobileGridRow>
        <MobileGridRow>
          <ConnectingArrowImage  className="left-arrow" src="/Vector 1.png" alt="Arrow" width={35} height={52} />
          <ConnectingArrowImage className="right-arrow" src="/Vector 2.png" alt="Arrow" width={35} height={52} />
        </MobileGridRow>
        <MobileGridRow>
          <ActionButton>
            Join Quiet Room
            <Tag className="free-tag">It's free!</Tag>
          </ActionButton>
          <ActionButton>
            Explore Features
            <Tag className="new-tools-tag">New tools!</Tag>
          </ActionButton>
        </MobileGridRow>
      </MobileBottomContainer>
    </HeroContainer>
  );
}