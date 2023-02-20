import { country, fullName } from '@/utils/config';
import { FiFileText } from 'react-icons/fi';
import { ProgrammerSvg } from '../Art/ProgrammerSvg';
import { Button } from '../Button';

export function Hero() {
  return (
    <div className="lg:flex lg:flex-row lg:justify-around my-3">
      <div className="lg:hidden">
        <ProgrammerSvg className="w-full" />
      </div>
      <div>
        <div className="space-y-2">
          <p className="text-gray text-2xl font-semibold">hello!</p>
          <h1 className="text-light text-3xl lg:text-5xl font-bold">
            I{"'"}m <span className="text-red">{fullName}</span>,
          </h1>
          <p className="text-gray text-lg lg:text-2xl lg:max-w-[60%]">
            a <span className="font-bold text-light">full-stack developer</span> from{' '}
            <span className="text-light font-bold">{country}</span> who loves doing open source projects.
          </p>
        </div>
        <div className="flex space-x-3 mt-4 lg:mt-10 w-full">
          <Button variant="primary" link="/contact">
            Let{"'"}s have a talk
          </Button>
          <Button variant="secondary" link="/resume">
            <span className="flex items-center">
              <FiFileText className="mr-1 h-5 w-5" /> My Resume
            </span>
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ProgrammerSvg />
      </div>
    </div>
  );
}
