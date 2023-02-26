import { Metadata } from 'next';
import * as config from '@/utils/config';

export const metadata: Metadata = {
  title: `${config.fullName} | Contact`,
  description: "Let's have a talk"
};

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
