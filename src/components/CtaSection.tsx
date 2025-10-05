// src/components/CtaSection.tsx
'use client';

import styled from 'styled-components';

// --- Styled Components ---

const CtaSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  background-color: #F8F8FD; /* Light background for the whole section */

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const CtaCard = styled.div`
  position: relative; /* Needed to position the graph inside */
  width: 100%;
  max-width: 1000px;
  background-color: #FFFBF5; /* Light beige background of the card */
  border: 4px solid #4D6FFF; /* Thick blue border */
  border-radius: 20px;
  padding: 4rem 5rem;
  overflow: hidden; /* Ensures the graph doesn't spill out */
  
  @media (max-width: 992px) {
    padding: 3rem;
  }
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2; /* Ensures content is above the background graph */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack text and button vertically */
    text-align: center;
    gap: 3rem;
  }
`;

const Heading = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 3.5rem;
  color: #6D63FF; /* Purple/blue text color */
  line-height: 1.2;
  margin: 0;
  max-width: 50%;

  @media (max-width: 992px) {
    font-size: 2.8rem;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const ButtonWrapper = styled.div`
  position: relative; /* For positioning the shadow */
`;

const CtaButton = styled.button`
  position: relative;
  z-index: 1; /* Sits on top of the shadow */
  background-color: #D9D2FF; /* Light purple button color */
  border: none;
  border-radius: 12px;
  padding: 1.5rem 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translate(-4px, -4px);
  }

  /* The button shadow using a pseudo-element */
  &::after {
    content: '';
    position: absolute;
    z-index: -1; /* Sits behind the button */
    width: 100%;
    height: 100%;
    background-color: #6D63FF; /* Darker purple shadow color */
    border-radius: 12px;
    top: 8px;
    left: 8px;
    transition: top 0.2s ease-in-out, left 0.2s ease-in-out;
  }

  &:hover::after {
    top: 12px;
    left: 12px;
  }

  @media (max-width: 992px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
  }
`;

// Background SVG for the line graph
const LineGraph = () => (
  <svg
    width="450"
    height="150"
    viewBox="0 0 450 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      bottom: '0',
      right: '0',
      zIndex: 1,
      opacity: 0.8,
    }}
  >
    <path
      d="M-34 117.5L59.5 73L135 117.5L216.5 54L288 88L359.5 2L446.5 61.5"
      stroke="#4D6FFF"
      strokeWidth="4"
    />
  </svg>
);


// --- The Main CTA Section Component ---
export default function CtaSection() {
  return (
    <CtaSectionContainer>
      <CtaCard>
        <LineGraph />
        <ContentWrapper>
          <Heading>
            Your Growth Journey Starts with Just One Click
          </Heading>
          <ButtonWrapper>
            <CtaButton>
              Start Your Growth Journey
            </CtaButton>
          </ButtonWrapper>
        </ContentWrapper>
      </CtaCard>
    </CtaSectionContainer>
  );
}