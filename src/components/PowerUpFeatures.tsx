// src/components/PowerUpFeatures.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useRef } from 'react'; // <-- This line was missing

// --- Styled Components (remain the same) ---

const PowerUpContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  background-color: #F8F8FD;
  gap: 3rem;
  position: relative;

  @media (max-width: 992px) {
    padding: 4rem 1rem;
    gap: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: #8A9BFF;
  text-align: center;
  max-width: 800px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ScrollableCardWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  max-width: 900px;
  border-radius: 15px;
  border: 4px solid #D9D2FF;
  background-color: white;
`;

const FeaturePage = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  box-sizing: border-box;
  min-height: 400px;
  
  @media (max-width: 768px) {
    padding: 2rem;
    min-height: 350px;
  }
  @media (max-width: 480px) {
    padding: 1.5rem;
    min-height: 300px;
  }
`;

const CardContentRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`;

const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SmallList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: #555;
  
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  li::before {
    content: '•';
    color: #8A9BFF;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media (max-width: 600px) {
    text-align: left;
    width: 100%;
  }
`;

const JoinButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 50px;
  align-self: center;
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

const ScrollNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const ScrollButton = styled.button`
  background-color: #D9D2FF;
  border: 2px solid #8A9BFF;
  color: #333;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #C1A3F5;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }
`;

// --- The PowerUp Features Component ---
export default function PowerUpFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <PowerUpContainer>
      <SectionTitle>Power-Up Features</SectionTitle>

      <ScrollableCardWrapper ref={scrollRef}>
        {/* --- Feature Page 1: Rank And Xp System --- */}
        <FeaturePage>
          <CardTitle>Rank And Xp System</CardTitle>
          <CardContentRow>
            <div>
              <Image
                src="/rank-xp-icon.png" // Replace with your actual icon path
                alt="Rank and XP System Icon"
                width={120}
                height={120}
              />
            </div>
            <CardDescription>
              Grow. Earn. Unlock. Every action you take earns XP. Hit new ranks,
              unlock perks, and watch your progress visually stack up. Because growth should feel like leveling up.
            </CardDescription>
          </CardContentRow>
        </FeaturePage>

        {/* --- Feature Page 2: Growth Graph --- */}
        <FeaturePage>
          <CardTitle>Growth Graph</CardTitle>
          <CardContentRow>
            <div style={{ marginRight: '1rem', flexShrink: 0 }}>
              <Image
                src="/growth-graph-icon.png" // Replace with your actual icon path
                alt="Growth Graph Icon"
                width={120}
                height={120}
              />
            </div>
            <div>
              <CardDescription>
                Your effort deserves to be seen. Our Growth Graph transforms daily actions
                into visual progress – whether it's a completed ritual, a habit streak, or personal
                breakthroughs.
              </CardDescription>
              <SmallList>
                <li>See trends over time</li>
                <li>Identify your high-focus days</li>
              </SmallList>
            </div>
          </CardContentRow>
        </FeaturePage>

        {/* --- Feature Page 3: Ritual Tracker --- */}
        <FeaturePage>
          <CardTitle>Ritual Tracker</CardTitle>
          <CardContentRow>
            <div style={{ marginRight: '1rem', flexShrink: 0 }}>
              <Image
                src="/ritual-tracker-icon.png" // Replace with your actual icon path
                alt="Ritual Tracker Icon"
                width={120}
                height={120}
              />
            </div>
            <div>
              <CardDescription>
                Track your daily habits and routines with precision. Our Ritual Tracker
                helps you build consistent discipline and visualize your adherence to your chosen path.
              </CardDescription>
              <SmallList>
                <li>Set custom daily rituals</li>
                <li>Get timely reminders</li>
                <li>Monitor your consistency</li>
              </SmallList>
            </div>
          </CardContentRow>
        </FeaturePage>
      </ScrollableCardWrapper>

      <ScrollNavigation>
        <Image src="/arrow-left.png" alt="Scroll Left" width={24} height={24} onClick={scrollLeft} style={{ cursor: 'pointer' }} />
        <ScrollButton onClick={scrollRight}>
          Scroll
          <Image src="/arrow-right.png" alt="Scroll Right" width={24} height={24} />
        </ScrollButton>
      </ScrollNavigation>

      <JoinButtonWrapper>
        <ActionButton>Join Quiet Room</ActionButton>
        <Tag>It's free!</Tag>
      </JoinButtonWrapper>
    </PowerUpContainer>
  );
}