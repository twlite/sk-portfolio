'use client';

import { Card } from '@/components/Card';
import { Navbar } from '@/components/Navbar';
import { itemVariant, Projects } from '@/utils/config';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar />
      <div className="px-5 lg:px-12 mb-5">
        <motion.div variants={itemVariant} className="mt-6">
          <h3 className="text-red text-3xl font-semibold text-center my-10">My Projects</h3>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
            {Projects.map((m, i) => (
              <Card subtitle={m.description} title={m.name} key={i}>
                {m.links}
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
