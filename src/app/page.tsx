'use client';

import { About } from '@/components/About';
import { Divider } from '@/components/Divider';
import { Hero, Technologies } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar />
      <main className="mt-5 lg:mt-[8rem] flex justify-around">
        <div className="px-4 md:px-8 lg:px-12">
          <Hero />
          <Divider />
          <Technologies />
        </div>
      </main>
      <About />
    </motion.div>
  );
}
