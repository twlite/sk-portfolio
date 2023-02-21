'use client';

import { Button } from '@/components/Button';
import { Navbar } from '@/components/Navbar';
import { HiXCircle } from 'react-icons/hi';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <Navbar />
      <main className="h-screen flex flex-col space-y-3 items-center justify-center px-2 text-center">
        <HiXCircle className="text-red h-20 w-20" />
        <h1 className="text-red lg:text-4xl text-xl font-semibold">Oh no!</h1>
        <p className="text-light lg:text-xl text-lg">Something went wrong.</p>
        <Button onClick={reset} rounded>
          Try Again?
        </Button>
      </main>
    </div>
  );
}
