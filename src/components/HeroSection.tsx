// src/components/HeroSection.tsx
'use client';

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
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  overflow-x: hidden;
  width: 95vw;
  max-width: 1600px; 
  gap: clamp(1rem, 2vw, 2rem);
  
  /* FIX: Hides any content that overflows vertically, removing the scrollbar */
  overflow-y: hidden;

  @media (max-width: 1250px) {
    gap: 0;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    /* FIX: Better vertical alignment and adaptive height */
    justify-content: space-evenly; 
    padding: 1rem;
    gap: 0;
    width: 100%; 
    /* The flex-grow: 1 property will handle filling the space */
  }
`;

// --- DESKTOP-ONLY COMPONENTS ---
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  position: relative;
  bottom: 60px;
  flex: 1;
  min-width: 0;

  @media (max-width: 1024px) {
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
  flex: 1;
  min-width: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

// --- MOBILE-ONLY COMPONENTS ---
const MobileHeadingsContainer = styled.div`
  display: none; 
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 1;
  }
`;

const MobileBottomContainer = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 3;
    gap: 1.25rem;
    width: 100%;
    margin-top: 0;
  }
`;

const MobileGridRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 480px) {
    gap: 1rem;
  }

  @media (max-width: 360px) {
    &:last-child {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;

const ArrowGridRow = styled(MobileGridRow)`
  width: 90%;
  max-width: 400px; 
  justify-content: space-between;
`;


// --- SHARED COMPONENTS ---

const HeroImageContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 711px;
  height: auto;
  aspect-ratio: 1 / 1;

  @media (max-width: 1024px) {
    order: 2;
    width: 50%;
    max-width: 350px;
    margin: 1.5rem 0;
  }
  
  @media (max-width: 768px) {
    max-width: 240px;
    margin: 1rem 0;
  }
  
  @media (max-width: 480px) {
    max-width: 220px;
  }
`;

const MainHeading = styled.h1`
  line-height: 1;
  margin: 0;
  font-size: 100px;

  @media (max-width: 1440px) {
    font-size: 84px;
  }

  @media (max-width: 1250px) {
    font-size: 60px;
  }

  @media (max-width: 1024px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 56px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }

  @media (max-width: 360px) {
    font-size: 40px;
  }
`;

const Subheading = styled.p<{ $isRight?: boolean }>`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  max-width: 300px;
  margin: 0;
  position: relative;
  top: 60px;
  transform: ${({ $isRight }) => $isRight ? 'translateX(-60px)' : 'translateX(60px)'};

  @media (max-width: 1440px) {
    font-size: 20px;
    top: 30px;
    transform: ${({ $isRight }) => $isRight ? 'translateX(-30px)' : 'translateX(30px)'};
  }

  @media (max-width: 1250px) {
    transform: none;
    font-size: 16px;
    top: 20px;
  }

  @media (max-width: 1024px) {
    position: static;
    top: 0;
    font-size: 14px;
    max-width: 150px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    max-width: 120px;
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

  @media (max-width: 1440px) {
    top: 60px;
    width: 220px;
    height: 60px;
    font-size: 18px;
  }
  
  @media (max-width: 1250px) {
    width: 180px;
    height: 50px;
    font-size: 16px;
    top: 40px;
  }

  @media (max-width: 1024px) {
    top: 0;
    width: 160px;
    height: 50px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 45px;
    font-size: 12px;
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

  @media (max-width: 1024px) {
    font-size: 10px;
    padding: 0.2rem 0.5rem;
    &.free-tag { top: -8px; right: -15px; }
    &.new-tools-tag { top: -12px; right: -15px; }
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const ConnectingArrowImage = styled(Image)`
  position: absolute;
  pointer-events: none;
  &.left-arrow { top: 100px; left: 0px; }
  &.right-arrow { top: 100px; right: 0px; }

  @media (max-width: 1250px) {
    &.left-arrow, &.right-arrow {
      width: 55px;
      height: auto;
      top: 70px;
    }
  }

   @media (max-width: 1024px) {
    &.left-arrow, &.right-arrow {
      position: static;
      width: 35px;
      height: auto;
    }
  }

  @media (max-width: 360px) {
    display: none;
  }
`;

// --- The Hero Section React Component ---
export default function HeroSection() {
  return (
    <HeroContainer>
      {/* --- DESKTOP LAYOUT --- */}
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

      <HeroImageContainer>
        <Image 
          src="/heroimage.png" 
          alt="Character meditating" 
          layout="fill" 
        
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

      {/* --- MOBILE/TABLET LAYOUT (Activates at 1024px) --- */}
      <MobileHeadingsContainer>
        <MainHeading className={zenDots.className}>Quiet</MainHeading>
        <MainHeading className={zenDots.className}>Room</MainHeading>
      </MobileHeadingsContainer>
      
      <MobileBottomContainer>
        <MobileGridRow>
          <Subheading>“A digital dojo for hustlers & grinders”</Subheading>
          <Subheading $isRight>“This isn’t school. This is training.”</Subheading>
        </MobileGridRow>
        <ArrowGridRow>
          <ConnectingArrowImage  className="left-arrow" src="/Vector 1.png" alt="Arrow" width={35} height={52} />
          <ConnectingArrowImage className="right-arrow" src="/Vector 2.png" alt="Arrow" width={35} height={52} />
        </ArrowGridRow>
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