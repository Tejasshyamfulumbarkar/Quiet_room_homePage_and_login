// src/app/page.tsx
'use client';

import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeatureSection';
import PowerUpFeatures from '@/components/PowerUpFeatures';
import WhyQuietRoom from '@/components/WhyQuietRoom';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import FaqSection from '@/components/FaqSection';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

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
      <FeaturesSection/>
      <PowerUpFeatures/>
      <WhyQuietRoom/>
      <TestimonialsSection/>
      <CtaSection/>
      <FaqSection/>
      <ContactUs/>
      <Footer/>
    </PageContainer>
  );
}