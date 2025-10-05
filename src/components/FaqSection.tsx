// src/components/FaqSection.tsx
'use client';

import { useState } from 'react';
import styled from 'styled-components';

// --- FAQ Data ---
const faqData = [
  {
    question: 'What is Quiet Room exactly?',
    answer: 'Quiet Room is a gamified deep work environment. It combines focus tools like a Zen Timer with an AI Coach to help you build discipline, not just manage tasks.'
  },
  {
    question: 'How is it different from Notion or Pomodoro apps?',
    answer: 'While we have timers, we focus on the mindset behind productivity. The AI Coach provides tough love, and the XP/Rank system makes your growth feel tangible, unlike traditional task managers or simple timers.'
  },
  {
    question: 'Do I need to log in to use Quiet Room?',
    answer: 'You can use some of our basic tools without an account. However, to track your progress, earn XP, and use the AI Coach, you will need to create a free account.'
  },
  {
    question: 'How does the AI Coach work?',
    answer: "The AI Coach isn't here to flatter you – it gives tough love, clarity, and productivity-focused nudges.\n\nExample:\nYou: “I want to be productive.”\nAI: “Then why are you talking instead of doing?”"
  }
];

// --- Styled Components ---

const FaqContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  background-color: #F8F8FD;
  gap: 2rem;
  text-align: center;

  @media (max-width: 992px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: #8A9BFF;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: #555;
  max-width: 500px;
  line-height: 1.6;
  margin: 0 0 2rem 0;

  a {
    color: #6D63FF;
    font-weight: 500;
    text-decoration: underline;
  }
`;

const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AccordionItem = styled.div<{ $isOpen: boolean }>`
  position: relative;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;

  /* Gradient Border Effect */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: 15px;
    padding: 3px;
    background: linear-gradient(to right, #D9D2FF, #8A9BFF);
    -webkit-mask:
       linear-gradient(#fff 0 0) content-box,
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    z-index: -1;
  }
`;

const QuestionPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  cursor: pointer;
  gap: 1rem;

  @media (max-width: 480px) {
    padding: 1.2rem 1.5rem;
  }
`;

const QuestionText = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #333;
  margin: 0;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Icon = styled.div<{ $isOpen: boolean }>`
  font-size: 2.5rem;
  font-weight: 300;
  color: #8A9BFF;
  flex-shrink: 0;
  transform: rotate(${({ $isOpen }) => ($isOpen ? '45deg' : '0deg')});
  transition: transform 0.3s ease-in-out;
`;

const AnswerPanel = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
  text-align: left;
  padding: ${({ $isOpen }) => ($isOpen ? '0 2rem 1.5rem 2rem' : '0 2rem')};
  
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: #555;
    margin: 0;
    white-space: pre-wrap;
  }

  @media (max-width: 480px) {
    padding: ${({ $isOpen }) => ($isOpen ? '0 1.5rem 1.2rem 1.5rem' : '0 1.5rem')};
  }
`;


// --- The Main FAQ Section Component ---
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FaqContainer>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <Subtitle>
        These are the most commonly asked questions about Quiet Room. Can't find what you are looking for? <a href="#">Chat with our friendly team</a>
      </Subtitle>

      <AccordionWrapper>
        {faqData.map((faq, index) => (
          <AccordionItem key={index} $isOpen={openIndex === index}>
            <QuestionPanel onClick={() => handleToggle(index)}>
              <QuestionText>{faq.question}</QuestionText>
              <Icon $isOpen={openIndex === index}>+</Icon>
            </QuestionPanel>
            <AnswerPanel $isOpen={openIndex === index}>
              <p>{faq.answer}</p>
            </AnswerPanel>
          </AccordionItem>
        ))}
      </AccordionWrapper>
    </FaqContainer>
  );
}