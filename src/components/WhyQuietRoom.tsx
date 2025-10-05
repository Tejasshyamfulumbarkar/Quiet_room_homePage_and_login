// src/components/WhyQuietRoom.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';

// --- Styled Components ---

const WhyQuietRoomContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem; /* Ample padding top/bottom */
  background-color: #F8F8FD; /* Light background for the section */
  gap: 2rem; /* Space between title/subtitle and the card */
  text-align: center;

  @media (max-width: 992px) {
    padding: 4rem 1rem;
    gap: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: #8A9BFF; /* Purple color from your design */
  line-height: 1.2;
  margin-bottom: 0.5rem; /* Space between title and subtitle */

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem; /* Space below subtitle before the card */

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// The main comparison card with a gradient border
const ComparisonCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  background-color: white;
  border-radius: 15px;
  padding: 0; /* Content inside will have its own padding */
  overflow: hidden; /* Ensures gradient border is clean */
  z-index: 1; /* Ensures content is on top of gradient */

  display: flex; /* For the two columns */

  /* Gradient Border Effect using ::before pseudo-element */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px; /* Same border-radius as the parent */
    padding: 4px; /* Controls the thickness of the border */
    background: linear-gradient(to right, #D9D2FF, #8A9BFF); /* Your gradient colors */
    -webkit-mask:
       linear-gradient(#fff 0 0) content-box,
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    z-index: -1; /* Place behind the actual card content */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack columns vertically on smaller screens */
    border: none; /* Remove direct border, rely on pseudo-element */
  }
`;

const Column = styled.div`
  flex: 1; /* Each column takes equal space */
  padding: 2.5rem;
  text-align: left;
  
  &:first-child {
    border-right: 1px solid #eee; /* Divider between columns */
  }

  @media (max-width: 768px) {
    &:first-child {
      border-right: none;
      border-bottom: 1px solid #eee; /* Divider on bottom when stacked */
    }
    padding: 2rem 1.5rem;
  }
`;

const ColumnTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const ComparisonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ComparisonItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.05rem;
  line-height: 1.5;
  color: #555;
`;

const ItemIconWrapper = styled.div`
  flex-shrink: 0; /* Prevent icon from shrinking */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Fixed width for icons */
  height: 40px; /* Fixed height for icons */
`;


// --- The WhyQuietRoom Component ---
export default function WhyQuietRoom() {
  return (
    <WhyQuietRoomContainer>
      <SectionTitle>Why Quiet Room <span style={{ color: '#555' }}>?</span></SectionTitle>
      <Subtitle>
        A side-by-side look at what makes us different.
      </Subtitle>

      <ComparisonCard>
        {/* --- Quiet Room Column --- */}
        <Column>
          <ColumnTitle>Quiet Room</ColumnTitle>
          <ComparisonList>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/qr-zen-timer.png" alt="Zen Timer Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **Zen Timer**<br />Focus-aware, guided rituals, distraction tracking, XP rewards, ambient modes.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/qr-ai-coach.png" alt="AI Coach Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **AI Coach**<br />No-fluff responses, mindset-driven prompts, challenges your thinking.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/qr-xp-rank.png" alt="XP Rank Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **XP + Rank System**<br />Gamified growth with real progression and streak tracking.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/qr-growth-graph.png" alt="Growth Graph Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **Growth Graph**<br />Visualize focus, consistency, and growth over time.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/qr-ritual-tracker.png" alt="Ritual Tracker Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **Ritual Tracker**<br />Morning/evening ritual system tied to actual behavior.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/qr-weekly-review.png" alt="Weekly Review Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **Weekly Review**<br />Reflective journaling with built-in prompts and goal resets.
              </ItemText>
            </ComparisonItem>
          </ComparisonList>
        </Column>

        {/* --- Traditional Apps Column --- */}
        <Column>
          <ColumnTitle>Traditional Apps</ColumnTitle>
          <ComparisonList>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/ta-normal-timer.png" alt="Normal Timer Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **Normal Timer**<br />Basic Pomodoro Static Countdowns.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/ta-basic-ai.png" alt="Basic AI Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **Basic AI**<br />Polite assistants or no AI at all.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/ta-no-accountability.png" alt="No Accountability Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **No Accountability**<br />Rare or superficial gamification.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/ta-weak-tracking.png" alt="Weak Tracking Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **Weak Tracking**<br />No tracking or limited calendar data.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/ta-no-ritual.png" alt="No Ritual Support Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **No Ritual Support**<br />Just habit checklists or none.
              </ItemText>
            </ComparisonItem>
            <ComparisonItem>
              <ItemIconWrapper>
                <Image src="/ta-no-review.png" alt="No Guided Review Icon" width={24} height={24} />
              </ItemIconWrapper>
              <ItemText>
                **No Guided Review**<br />No weekly review, manual if any.
              </ItemText>
            </ComparisonItem>
          </ComparisonList>
        </Column>
      </ComparisonCard>
    </WhyQuietRoomContainer>
  );
}