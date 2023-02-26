import { Metadata } from 'next';
import * as config from '@/utils/config';

export const metadata: Metadata = {
  title: `${config.fullName} | Resume`,
  description: 'Check out my resume'
};

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
