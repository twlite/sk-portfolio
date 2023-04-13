import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface IProps {
  name: string;
  link?: string;
  active?: boolean;
  external?: boolean;
}

export function NavbarLink(props: IProps) {
  return (
    <Link
      href={props.link!}
      target={props.external ? '_blank' : ''}
      className="group cursor-pointer font-semibold text-primary no-underline transition ease-in duration-300"
    >
      {props.name}
      <span
        className={twMerge(
          'block transition-all duration-500 h-0.5 bg-primary',
          props.active ? 'max-w-full group-hover:max-w-0' : 'max-w-0 group-hover:max-w-full'
        )}
      ></span>
    </Link>
  );
}

export function NavbarLinkMobile(props: IProps) {
  return (
    <Link
      href={props.link!}
      target={props.external ? '_blank' : ''}
      className={twMerge(
        'lg:hidden p-3 w-full rounded-md cursor-pointer font-semibold no-underline transition ease-in duration-300',
        props.active
          ? 'hover:bg-transparent hover:text-primary bg-primary text-white'
          : 'hover:bg-primary hover:text-white bg-transparent text-primary'
      )}
    >
      {props.name}
    </Link>
  );
}
