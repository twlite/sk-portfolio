'use client';

import { ContactForm } from '@/components/Contact';
import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar />
      <div className="px-5 lg:px-12">
        <ContactForm />
      </div>
    </motion.div>
  );
}
