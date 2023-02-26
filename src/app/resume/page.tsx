'use client';

import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar />
      <div className="px-5 lg:px-12">
        <h1 className="text-4xl text-red font-semibold text-center">Resume</h1>
      </div>
    </motion.div>
  );
}
