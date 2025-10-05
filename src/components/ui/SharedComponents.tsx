// src/components/ui/SharedComponents.tsx
'use client';

import styled from 'styled-components';

// This is the ActionButton from your HeroSection, now made reusable
export const ActionButton = styled.button`
  width: 268px;
  height: 72px;
  border-radius: 15px;
  border: 1px solid #000;
  background-color: #3e4cff;
  color: black;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: 100%;
    height: 100%;
    background-color: #ddb6fb;
    border-radius: 15px;
    border: 1px solid #000;
    z-index: -1;
  }

  /* --- Responsiveness --- */
  @media (max-width: 1440px) {
    width: 220px;
    height: 60px;
    font-size: 18px;
  }
  
  @media (max-width: 1250px) {
    width: 180px;
    height: 50px;
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    width: 160px;
    height: 50px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 45px;
    font-size: 12px;
  }
`;

// This is the Tag from your HeroSection, now reusable
export const Tag = styled.span`
  position: absolute;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 16px;
  transform: rotate(25.78deg);
  
  &.free-tag {
    background-color: #FFDAB9;
    top: -10px;
    right: -40px;
  }

  &.new-tools-tag {
    background-color: #FFDAB9;
    top: -22px;
    right: -40px;
  }

  @media (max-width: 1024px) {
    font-size: 10px;
    padding: 0.2rem 0.5rem;
    &.free-tag { top: -8px; right: -15px; }
    &.new-tools-tag { top: -12px; right: -15px; }
  }

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;