// src/app/layout.tsx

import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import GlobalStyles from '@/components/ui/GlobalStyles'; // <-- Import GlobalStyles

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
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
      <body className={robotoMono.className}>
        <StyledComponentsRegistry>
          <GlobalStyles /> {/* <-- Add the component here */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}