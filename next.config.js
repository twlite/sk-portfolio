/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/github',
        permanent: true,
        destination: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
      },
      {
        source: '/linkedin',
        permanent: true,
        destination: `https://linkedin.com/${process.env.NEXT_PUBLIC_LINKEDIN}`
      },
      {
        source: '/twitter',
        permanent: true,
        destination: `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER}`
      },
      {
        source: '/discord',
        permanent: true,
        destination: `https://discord.com/users/${process.env.NEXT_PUBLIC_DISCORD_ID}`
      }
    ];
  }
}

module.exports = nextConfig;
