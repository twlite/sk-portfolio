import { About } from '@/components/About';
import { Button } from '@/components/Button';
import { Navbar } from '@/components/Navbar';
import { HiXCircle } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <main className="h-screen flex flex-col space-y-3 items-center justify-center px-2 text-center">
        <HiXCircle className="text-red h-20 w-20" />
        <h1 className="text-red lg:text-4xl text-xl font-semibold">Page Not Found</h1>
        <p className="text-light lg:text-xl text-lg">The page you are looking for does not exist!</p>
        <Button link="/" rounded>
          Return Home
        </Button>
      </main>
    </div>
  );
}
