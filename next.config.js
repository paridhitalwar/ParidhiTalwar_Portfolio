/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'ParidhiTalwar_Portfolio';

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',
  images: {
    unoptimized: true,
  },
  // Optional: Add this if you have any API routes that need to be handled
  trailingSlash: true,
};

module.exports = nextConfig;
