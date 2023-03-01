'use client';

import { Card } from '@/components/Card';
import { Navbar } from '@/components/Navbar';
import { Education, fullName, githubName, itemVariant, WorkExp } from '@/utils/config';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Resume() {
  return (
    <motion.div initial="hidden" animate="visible">
      <Navbar />
      <div className="px-5 lg:px-12 mb-5">
        <div className="flex lg:flex-row lg:space-x-5 flex-col-reverse items-center mt-5">
          <div>
            <motion.div variants={itemVariant} className="mt-6">
              <h3 className="text-light text-lg font-semibold">Name</h3>
              <motion.div variants={itemVariant} className="bg-darkGray p-3 rounded-md w-full lg:w-1/2">
                <h1 className="text-red text-xl font-semibold">{fullName}</h1>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariant} className="mt-6">
              <h3 className="text-light text-lg font-semibold">About Me</h3>
              <motion.div
                variants={itemVariant}
                className="bg-darkGray p-3 rounded-md w-full lg:w-1/2 text-lg text-light font-semibold"
              >
                <p className="opacity-90">
                  Hi, I am a student and a self-taught full stack developer from Nepal, active since August of 2018.
                </p>
                <p className="opacity-90">
                  I love experimenting with my ideas all the time, which usually turns out as another open source
                  project of mine. I am a proficient in JavaScript programming.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <motion.div variants={itemVariant}>
            <Image
              src={`https://avatars.githubusercontent.com/${githubName}`}
              alt="avatar"
              className="rounded-full border-4 border-red shadow-lg bounce"
              height={256}
              width={256}
              draggable="false"
            />
          </motion.div>
        </div>

        <motion.div variants={itemVariant} className="mt-6">
          <h3 className="text-light text-lg font-semibold">Education</h3>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
            {Education.map((m, i) => (
              <Card subtitle={m.university} title={m.title} footer={m.years} key={i} />
            ))}
          </div>
        </motion.div>
        <motion.div variants={itemVariant} className="mt-6">
          <h3 className="text-light text-lg font-semibold">Work Experience</h3>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
            {WorkExp.map((m, i) => (
              <Card subtitle={m.company} title={m.title} footer={m.years} key={i}>
                {m.body}
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
