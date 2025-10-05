// src/components/FeaturesSection.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';

// --- Styled Components ---

const FeaturesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  background-color: #ffffff;
  gap: 3rem;

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

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  align-items: stretch; /* Ensures cards are the same height */

  @media (max-width: 992px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Updated FeatureCard: No shadows, just a thick border
const FeatureCard = styled.div<{ size?: 'small' | 'large' }>`
  position: relative; /* Keep relative for potential future positioning needs */
  background-color: white;
  
  /* --- Changed: Thick border directly on the card --- */
  border: 4px solid #D9D2FF; /* Increased border thickness */
  
  border-radius: 15px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1;

  /* Flex property to control width ratio */
  flex: ${({ size }) => (size === 'small' ? '1' : '2')};

  /* --- Removed: No ::before pseudo-element for shadows --- */
  
  @media (max-width: 768px) {
    flex: 1;
    width: 90%;
    max-width: 500px;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
`;

const CardContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const AICoachContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

// --- The Features Section Component ---
export default function FeaturesSection() {
  return (
    <FeaturesContainer>
      <SectionTitle>Features Designed for Discipline</SectionTitle>

      <CardsWrapper>
        {/* Zen Timer Card (takes up 1 part of the space) */}
        <FeatureCard size="small">
          <CardTitle>Zen Timer</CardTitle>
          <CardDescription>
            Stay focused with our distraction proof timer designed for deep work
          </CardDescription>
          <div style={{ textAlign: 'center', marginTop: 'auto' }}>
            <Image
              src="/zentimer.png"
              alt="Zen Timer Clock Icon"
              width={70}
              height={70}
            />
          </div>
        </FeatureCard>

        {/* AI Coach Card (takes up 2 parts of the space) */}
        <FeatureCard size="large">
          <CardTitle>AI Coach</CardTitle>
          <CardContentRow>
            <AICoachContent>
              <CardDescription>
                Tired of sugarcoated advice? Our AI doesn't just chat - it challenges you.
              </CardDescription>
              <CardDescription>
                Whether you're slacking or stuck, it pushes you with no fluff.
              </CardDescription>
            </AICoachContent>
            <div>
              <Image
                src="/aicoach.png"
                alt="AI Coach Robot Icon"
                width={80}
                height={80}
              />
            </div>
          </CardContentRow>
        </FeatureCard>
      </CardsWrapper>
    </FeaturesContainer>
  );
}