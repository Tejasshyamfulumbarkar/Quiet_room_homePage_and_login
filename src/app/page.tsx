// src/app/page.tsx
'use client';

import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

// This container now allows content to stack and scroll naturally
const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </PageContainer>
  );
}