'use client';

import { navLinks } from '@/utils/config';
import { usePathname } from 'next/navigation';
import { NavbarBrand } from './NavbarBrand';
import { NavbarLink, NavbarLinkMobile } from './NavLink';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { SiDiscord, SiGithub } from 'react-icons/si';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function Navbar() {
  const path = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((p) => !p);
  };

  return (
    <>
      <nav className={`text-light px-4 py-2 flex justify-between items-center ${navOpen ? 'bg-darkGray' : ''}`}>
        <NavbarBrand />
        <div className="items-center space-x-16 hidden lg:flex">
          {navLinks.map((link, i) => {
            return <NavbarLink key={i} {...link} active={path === link.link} />;
          })}
        </div>
        <div className="flex space-x-3 items-center">
          <Link href="/github" target="_blank">
            <SiGithub className="h-6 w-6 cursor-pointer text-light hover:text-gray transition duration-200 ease-in" />
          </Link>
          <Link href="/discord" target="_blank">
            <SiDiscord className="h-6 w-6 cursor-pointer text-light hover:text-gray transition duration-200 ease-in" />
          </Link>
          {navOpen ? (
            <HiX className="h-7 w-7 lg:hidden" onClick={toggleNav} />
          ) : (
            <HiMenu className="h-7 w-7 lg:hidden" onClick={toggleNav} />
          )}
        </div>
      </nav>
      <div className={navOpen ? 'h-screen bg-darkGray flex flex-col p-3 space-y-3' : 'hidden'}>
        {navLinks.map((link, i) => {
          return <NavbarLinkMobile key={i} {...link} active={path === link.link} />;
        })}
      </div>
    </>
  );
}
