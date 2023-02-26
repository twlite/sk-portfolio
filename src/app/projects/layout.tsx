import { Metadata } from 'next';
import * as config from '@/utils/config';

export const metadata: Metadata = {
  title: `${config.fullName} | Projects`,
  description: 'Check out some of my projects'
};

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
