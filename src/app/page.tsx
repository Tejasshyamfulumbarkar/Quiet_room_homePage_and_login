// src/app/page.tsx
'use client';

import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// This container will take up the full screen height
const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden; // Prevents any accidental scrolling
`;

export default function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <HeroSection />
    </PageContainer>
  );
}