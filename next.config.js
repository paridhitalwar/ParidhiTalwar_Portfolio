/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'ParidhiTalwar_Portfolio';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Optional: Add this if you have any API routes that need to be handled
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
