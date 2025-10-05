// src/components/AboutSection.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';

// --- Styled Components ---

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  overflow: hidden;
  width: 95vw;
  max-width: 1200px;
  gap: 3rem;
  background-color: #fff;

  @media (max-width: 992px) {
    padding: 3rem 1rem;
  }
`;

const MainTitle = styled.h2`
  /* FIX: Changed font to Poppins, semi-bold (600) */
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: #8A9BFF;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100%;
 
  @media (max-width: 992px) {
    /* This is the key change: it stacks and reverses the order */
    flex-direction: column;
    gap: 4rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  flex: 1;
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const TextBox = styled.div`
  position: relative;
  background-color: white;
  border: 2px solid #4D6FFF;
  padding: 2rem;
  border-radius: 12px;
  max-width: 450px;

  /*
    This one line creates both "shadows".
    Format: offset-x | offset-y | color
  */
    box-shadow:
    /* Top-left shadow: 10px to the left, 15px up */
    -30px -35px 0 #FADADD,

    /* Bottom-right shadow: 20px to the right (length), 10px down (height) */
    30px 35px 0  #FFEBCD;

  p {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.25rem;
    line-height: 1.7;
    margin: 0;
  }
`;

const HighlightedText = styled.span`
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
`;

const JoinButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 2rem;
`;

const ActionButton = styled.button`
  width: 268px;
  height: 72px;
  border-radius: 15px;
  border: 1px solid #000;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
 
  background-color: #C1A3F5;
  color: black;

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 1px solid #000;
    z-index: -1;
    background-color: #8E63D2;
  }

  @media (max-width: 1440px) {
    width: 220px;
    height: 60px;
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    width: 180px;
    height: 50px;
    font-size: 16px;
  }
  @media (max-width: 480px) {
    width: 160px;
    height: 45px;
    font-size: 14px;
  }
`;

const Tag = styled.span`
  position: absolute;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
  background-color: #FFDAB9;
  top: -15px;
  right: -30px;
  transform: rotate(15deg);
  z-index: 2;
`;

const GraphicContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const OrbitingTag = styled.div<{ top?: string; bottom?: string; left?: string; right?: string; rotate: number }>`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  transform: rotate(${({ rotate }) => rotate}deg);
 
  border: 1.5px solid #FFDAB9;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
`;


// --- The About Section Component ---
export default function AboutSection() {
  return (
    <AboutContainer>
      <MainTitle>What is Quiet Room ?</MainTitle>
      <ContentWrapper>
        <LeftColumn>
          <TextBox>
            <p>
              Quiet Room isn't just a productivity tool. It's your{' '}
              <HighlightedText>personal dojo</HighlightedText> — to train your
              mind, body, and skills.
            </p>
            <br />
            <p>
              Here, you don't just get things done you{' '}
              <HighlightedText>level up.</HighlightedText>
            </p>
          </TextBox>
          <JoinButtonWrapper>
            <ActionButton>Join Quiet Room</ActionButton>
            <Tag>It's free!</Tag>
          </JoinButtonWrapper>
        </LeftColumn>
        <RightColumn>
          <GraphicContainer>
            <Image
              src="/ai.png"
              alt="Focus graphic"
              layout="fill"
              objectFit="contain"
            />
            <OrbitingTag top="0" right="15%" rotate={-45}>Clarity</OrbitingTag>
            <OrbitingTag top="10%" left="5%" rotate={-45}>Level up</OrbitingTag>
            <OrbitingTag bottom="10%" left="5%" rotate={35}>Evolve</OrbitingTag>
            <OrbitingTag bottom="0" right="5%" rotate={35}>Mind-Gym</OrbitingTag>
          </GraphicContainer>
        </RightColumn>
      </ContentWrapper>
    </AboutContainer>
  );
}
