'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { itemVariant } from '@/utils/config';

interface IProps extends React.PropsWithChildren {
  variant?: 'primary' | 'secondary' | 'info';
  rounded?: boolean;
  link?: string;
  newtab?: boolean;
  onClick?: () => unknown;
}

export function Button(props: IProps) {
  const { children, variant = 'primary', link, rounded = false, newtab = false, onClick } = props;

  const className =
    variant === 'primary'
      ? 'bg-red hover:bg-darkRed text-white'
      : variant === 'secondary'
      ? 'bg-transparent text-light hover:text-white'
      : 'bg-darkGray text-light hover:text-white hover:bg-dark';

  if (!link)
    return (
      <motion.button
        variants={itemVariant}
        onClick={onClick}
        className={twMerge(
          className,
          rounded ? 'rounded-lg' : '',
          'font-semibold cursor-pointer p-3 transition ease-in-out duration-200'
        )}
      >
        {children}
      </motion.button>
    );

  return (
    <motion.button
      variants={itemVariant}
      className={twMerge(
        className,
        rounded ? 'rounded-lg' : '',
        'font-semibold cursor-pointer p-3 transition ease-in-out duration-200'
      )}
      onClick={onClick}
    >
      <Link href={link} target={newtab ? '_blank' : undefined}>
        {children}
      </Link>
    </motion.button>
  );
}
