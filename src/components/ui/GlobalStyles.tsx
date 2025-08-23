'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    /* This creates the subtle dotted background pattern */
    background-image: radial-gradient(#e0e0e0 1px, transparent 1px);
    background-size: 16px 16px;
    background-color: #fff; // Sets a default white background
  }
`;

export default GlobalStyles;