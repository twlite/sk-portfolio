'use client';

import { MotionConfig } from 'framer-motion';

export function LayoutClient({ children }: React.PropsWithChildren) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
