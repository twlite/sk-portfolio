import './globals.css';
import { Manrope } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { Metadata } from 'next';
import * as config from '@/utils/config';
import { LayoutClient } from './layout-client';

const font = Manrope({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: config.fullName,
  description: config.websiteDescription,
  icons: config.favIcon,
  themeColor: config.themeColor
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={twMerge('bg-dark', font.className)}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
