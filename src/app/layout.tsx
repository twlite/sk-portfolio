import './globals.css';
import { Manrope } from '@next/font/google';
import { twMerge } from 'tailwind-merge';

const font = Manrope({
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={twMerge('bg-dark', font.className)}>{children}</body>
    </html>
  );
}
