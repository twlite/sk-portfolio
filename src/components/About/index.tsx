import { websiteDescription } from '@/utils/config';
import { HiExternalLink } from 'react-icons/hi';
import { Wave } from '../Art/Wave';
import { Button } from '../Button';

export function About() {
  return (
    <>
      <Wave />
      <section className="bg-darkRed w-full flex items-center justify-center h-[15rem] pb-[5rem]">
        <div className="lg:max-w-[50%] flex flex-col space-y-2 items-center justify-center">
          <h1 className="text-center text-white font-semibold text-4xl">About Me</h1>
          <p className="text-white text-center text-base md:text-lg lg:text-xl">{websiteDescription}</p>
          <Button variant="info" rounded link="/github" newtab>
            <span className="flex flex-row space-x-2 items-center">
              Check out my GitHub <HiExternalLink className="h-5 w-5" />
            </span>
          </Button>
        </div>
      </section>
    </>
  );
}
