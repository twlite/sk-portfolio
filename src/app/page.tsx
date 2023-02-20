import { About } from '@/components/About';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { SiTypescript, SiTailwindcss, SiReact, SiVisualstudiocode, SiGit, SiVercel } from 'react-icons/si';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mt-5 lg:mt-[8rem] flex justify-around">
        <div className="px-4">
          <Hero />
          <hr className="text-gray opacity-20 mt-10" />
          <div className="my-10">
            <p className="text-light font-semibold text-lg">Technologies I use</p>
            <div className="flex space-x-3 mt-2">
              <Link href="https://typescriptlang.org" target="_blank">
                <SiTypescript
                  title="TypeScript"
                  className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-blue-400"
                />
              </Link>
              <Link href="https://tailwindcss.com" target="_blank">
                <SiTailwindcss
                  title="TailwindCSS"
                  className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
                />
              </Link>
              <Link href="https://reactjs.org" target="_blank">
                <SiReact
                  title="React"
                  className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
                />
              </Link>
              <Link href="https://code.visualstudio.com" target="_blank">
                <SiVisualstudiocode
                  title="Visual Studio Code"
                  className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
                />
              </Link>
              <Link href="https://git-scm.com" target="_blank">
                <SiGit
                  title="Git"
                  className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-red"
                />
              </Link>
              <Link href="https://vercel.com" target="_blank">
                <SiVercel
                  title="Vercel"
                  className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-light"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <About />
    </div>
  );
}
