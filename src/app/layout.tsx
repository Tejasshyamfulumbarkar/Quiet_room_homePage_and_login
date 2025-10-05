// src/app/layout.tsx

import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata } from 'next';
// 1. Import Poppins alongside your existing font
import { Roboto_Mono, Poppins } from 'next/font/google';
import GlobalStyles from '@/components/ui/GlobalStyles';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

// 2. Instantiate the Poppins font with the semi-bold weight (600)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export const metadata: Metadata = {
  title: 'Quiet Room',
  description: 'A calm space to help you focus.',
  icons: {
    icon: "/icon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 3. Add the new poppins class name to the body tag */}
      <body className={`${robotoMono.className} ${poppins.className}`}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}