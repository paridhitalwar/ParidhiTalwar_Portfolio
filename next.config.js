/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'ParidhiTalwar Portfolio';
const basePath = isProd ? `/${repositoryName}` : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Ensure static export
  trailingSlash: true,
  // Disable the default static export directory
  distDir: '.next',
  // Set the output directory to 'out' (Next.js default)
  output: 'export',
  // Optional: Add this if you have dynamic routes
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;