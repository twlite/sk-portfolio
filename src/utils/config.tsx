// prettier-ignore
import {
  SiGit,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiBulma,
  SiBootstrap,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiCloudflare,
  SiMongodb,
  SiJest,
  SiPostgresql
} from "react-icons/si";

export const githubName = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;
export const fullName = process.env.NEXT_PUBLIC_FULL_NAME!;
export const linkedinName = process.env.NEXT_PUBLIC_LINKEDIN!;
export const twitterName = process.env.NEXT_PUBLIC_TWITTER!;
export const discordId = process.env.NEXT_PUBLIC_DISCORD_ID!;
export const country = process.env.NEXT_PUBLIC_COUNTRY_NAME!;
export const brandName = process.env.NEXT_PUBLIC_BRAND_NAME!;
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL!;
export const websiteDescription = `Hi, my name is ${fullName}. I am a full stack developer from ${country} who also loves doing open source projects.`;
export const themeColor = '#ED653A';
export const favIcon = '/favicon.ico';

export const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact', link: '/contact' },
  { name: 'Resume', link: '/resume' },
  {
    name: 'Blog',
    link: '/blog',
    external: !!process.env.NEXT_PUBLIC_BLOG_URL?.startsWith('http')
  }
] as const;

export const Education = [
  {
    title: '10+2',
    university: 'National Examination Board',
    years: '2019-2021'
  },
  {
    title: 'Bachelors in Computer Application',
    university: 'Tribhuvan University',
    years: '2022-2025'
  }
];

export const WorkExp = [
  {
    title: 'Open Source Developer',
    company: 'Self Employed',
    years: `2019-${new Date().getFullYear()}`,
    body: (
      <>
        <div className="my-3">
          <div className="flex space-x-3 mt-2">
            <a href="https://typescriptlang.org" target="_blank" rel="noreferrer">
              <SiTypescript
                title="TypeScript"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-blue-400"
              />
            </a>
            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
              <SiTailwindcss
                title="TailwindCSS"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
              />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <SiReact
                title="React"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
              />
            </a>
            <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">
              <SiVisualstudiocode
                title="Visual Studio Code"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
              />
            </a>
            <a href="https://git-scm.com" target="_blank" rel="noreferrer">
              <SiGit
                title="Git"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-red"
              />
            </a>
            <a href="https://vercel.com" target="_blank" rel="noreferrer">
              <SiVercel
                title="Vercel"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-light"
              />
            </a>
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Open Source Developer',
    company: 'CesiumLabs',
    years: '2019-2021',
    body: (
      <>
        <div className="my-3">
          <div className="flex space-x-3 mt-2">
            <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target="_blank" rel="noreferrer">
              <SiJavascript
                title="JavaScript"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-yellow-400"
              />
            </a>
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <SiBootstrap
                title="Bootstrap"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-purple-500"
              />
            </a>
            <a href="https://bulma.io" target="_blank" rel="noreferrer">
              <SiBulma
                title="Bulma"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-teal-500"
              />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <SiReact
                title="React"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
              />
            </a>
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Full Stack Developer',
    company: 'SweetHomeApp',
    years: '2021-2022',
    body: (
      <>
        <div className="my-3">
          <div className="flex space-x-3 mt-2">
            <a href="https://typescriptlang.org" target="_blank" rel="noreferrer">
              <SiTypescript
                title="TypeScript"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-blue-400"
              />
            </a>
            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
              <SiTailwindcss
                title="TailwindCSS"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
              />
            </a>
            <a href="https://nextjs.org" target="_blank" rel="noreferrer">
              <SiNextdotjs
                title="Next.js"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-light"
              />
            </a>
            <a href="https://nestjs.com" target="_blank" rel="noreferrer">
              <SiNestjs
                title="NestJS"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-[#FF0000]"
              />
            </a>
            <a href="https://cloudflare.com" target="_blank" rel="noreferrer">
              <SiCloudflare
                title="Cloudflare"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-red"
              />
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <SiNodedotjs
                title="Node"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-green-600"
              />
            </a>
            <a href="https://mongodb.com" target="_blank" rel="noreferrer">
              <SiMongodb
                title="MongoDB"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-green-600"
              />
            </a>
          </div>
        </div>
      </>
    )
  },
  {
    title: 'Full Stack Developer',
    company: 'Trobus Technologies, LLC',
    years: '2022',
    body: (
      <>
        <div className="my-3">
          <div className="flex space-x-3 mt-2">
            <a href="https://typescriptlang.org" target="_blank" rel="noreferrer">
              <SiTypescript
                title="TypeScript"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-blue-400"
              />
            </a>
            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
              <SiTailwindcss
                title="TailwindCSS"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
              />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <SiReact
                title="React"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
              />
            </a>
            <a href="https://jestjs.io" target="_blank" rel="noreferrer">
              <SiJest
                title="Jest"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-red"
              />
            </a>
            <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
              <SiPostgresql
                title="Postgres"
                className="transition ease-in duration-300 h-7 w-7 cursor-pointer text-gray hover:text-sky-500"
              />
            </a>
          </div>
        </div>
      </>
    )
  }
];

export const containerVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
