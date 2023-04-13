'use client';

import { itemVariant } from '@/utils/config';
import { motion } from 'framer-motion';

interface IProps {
  title: string;
  subtitle: string;
  footer?: string;
  children?: React.ReactNode;
}

export function Card(props: IProps) {
  return (
    <motion.div variants={itemVariant} className="bg-darkGray p-3 rounded-md w-full">
      <h1 className="text-primary text-xl font-semibold">{props.title}</h1>
      <p className="text-gray font-semibold text-lg">{props.subtitle}</p>
      {props.children}
      <p className="text-light text-sm opacity-90">{props.footer}</p>
    </motion.div>
  );
}
