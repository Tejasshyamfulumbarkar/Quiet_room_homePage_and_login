// src/components/TestimonialsSection.tsx
'use client';

import styled, { keyframes, css } from 'styled-components';
import Image from 'next/image';

// --- Data for the testimonials ---
const topRowTestimonials = [
  { name: 'Sun Jinwoo', role: '(S-Rank Hunter)', avatar: '/avatar-sun-jinwoo.png' },
  { name: 'Miss Frieren', role: '(Ancient Mage)', avatar: '/avatar-frieren.png' },
  { name: 'Chhota Bheem', role: '(Laddu-paglu)', avatar: '/avatar-bheem.png' },
  { name: 'Nobita Nobi', role: '(CryBaby since 1970)', avatar: '/avatar-nobita.png' },
  { name: 'Mr. Motu', role: '(Samosa Paglu)', avatar: '/avatar-motu.png' },
];

const bottomRowTestimonials = [
  { name: 'Satoru Gojo', role: '(The Honored One)', avatar: '/avatar-gojo.png' },
  { name: 'Asta', role: '(Anti-Magic Knight)', avatar: '/avatar-asta.png' },
  { name: 'Eren Yeager', role: '(Founder)', avatar: '/avatar-eren.png' },
  { name: 'Goku', role: '(Super Saiyan)', avatar: '/avatar-goku.png' },
  { name: 'Naruto Uzumaki', role: '(Hokage)', avatar: '/avatar-naruto.png' },
];


// --- Styled Components ---

const TestimonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0; /* Padding top/bottom, no side padding as scroller is full-width */
  background-color: #F8F8FD;
  gap: 2rem;
  overflow-x: hidden; /* Hide horizontal overflow */
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: #8A9BFF;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// CSS animation for horizontal scrolling
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// The wrapper for each scrolling row
const Scroller = styled.div<{ direction: 'left' | 'right', duration: number }>`
  width: 100%;
  display: flex;
  
  /* Apply animation based on direction prop */
  animation: ${scrollAnimation} ${({ duration }) => duration}s linear infinite;
  animation-direction: ${({ direction }) => (direction === 'left' ? 'normal' : 'reverse')};
`;

const ScrollerContent = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem; /* Add padding to the content, not the wrapper */
`;

const TestimonialCard = styled.div`
  flex-shrink: 0; /* Prevent cards from shrinking */
  width: 320px; /* Fixed width for each card */
  padding: 2rem;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #eee;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 480px) {
    width: 280px;
    padding: 1.5rem;
  }
`;

const AvatarWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #D9D2FF, #8A9BFF); /* Gradient background for avatar */
  padding: 4px; /* Creates the border effect */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    border: 3px solid white;
  }
`;

const Name = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  color: #333;
  margin: 0;
`;

const Role = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  color: #777;
  margin: 0.25rem 0 1rem 0;
`;

const Quote = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
`;


// --- The Testimonials Section Component ---
export default function TestimonialsSection() {
  return (
    <TestimonialsContainer>
      <SectionTitle>What People Are Saying</SectionTitle>
      
      {/* --- Top Scroller (scrolls left) --- */}
      <Scroller direction="left" duration={40}>
        <ScrollerContent>
          {/* We map over the data twice to create a seamless loop */}
          {topRowTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`}>
              <AvatarWrapper>
                <Image src={testimonial.avatar} alt={testimonial.name} width={72} height={72} />
              </AvatarWrapper>
              <Name>{testimonial.name}</Name>
              <Role>{testimonial.role}</Role>
              <Quote>
                In the chaos of dungeons and war, silence is rare. But in the Quiet Room, I found a stillness stronger than any spell or skill
              </Quote>
            </TestimonialCard>
          ))}
          {topRowTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}-duplicate`}>
              <AvatarWrapper>
                <Image src={testimonial.avatar} alt={testimonial.name} width={72} height={72} />
              </AvatarWrapper>
              <Name>{testimonial.name}</Name>
              <Role>{testimonial.role}</Role>
              <Quote>
                In the chaos of dungeons and war, silence is rare. But in the Quiet Room, I found a stillness stronger than any spell or skill
              </Quote>
            </TestimonialCard>
          ))}
        </ScrollerContent>
      </Scroller>

      {/* --- Bottom Scroller (scrolls right) --- */}
      <Scroller direction="right" duration={45}>
        <ScrollerContent>
          {/* We map over the data twice here as well */}
          {bottomRowTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`}>
              <AvatarWrapper>
                <Image src={testimonial.avatar} alt={testimonial.name} width={72} height={72} />
              </AvatarWrapper>
              <Name>{testimonial.name}</Name>
              <Role>{testimonial.role}</Role>
              <Quote>
                In the chaos of dungeons and war, silence is rare. But in the Quiet Room, I found a stillness stronger than any spell or skill
              </Quote>
            </TestimonialCard>
          ))}
          {bottomRowTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}-duplicate`}>
              <AvatarWrapper>
                <Image src={testimonial.avatar} alt={testimonial.name} width={72} height={72} />
              </AvatarWrapper>
              <Name>{testimonial.name}</Name>
              <Role>{testimonial.role}</Role>
              <Quote>
                In the chaos of dungeons and war, silence is rare. But in the Quiet Room, I found a stillness stronger than any spell or skill
              </Quote>
            </TestimonialCard>
          ))}
        </ScrollerContent>
      </Scroller>

    </TestimonialsContainer>
  );
}