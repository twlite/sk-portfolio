export const githubName = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;
export const fullName = process.env.NEXT_PUBLIC_FULL_NAME!;
export const linkedinName = process.env.NEXT_PUBLIC_LINKEDIN!;
export const twitterName = process.env.NEXT_PUBLIC_TWITTER!;
export const discordId = process.env.NEXT_PUBLIC_DISCORD_ID!;
export const country = process.env.NEXT_PUBLIC_COUNTRY_NAME!;
export const brandName = process.env.NEXT_PUBLIC_BRAND_NAME!;
export const websiteDescription = `Hi, my name is ${fullName}. I am a full stack developer from ${country} who also loves doing open source projects.`;
export const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Blog', link: '/blog' },
  { name: 'Contact', link: '/contact' },
  { name: 'Resume', link: '/resume' }
] as const;
