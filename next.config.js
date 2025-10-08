/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'ParidhiTalwar_Portfolio';
const basePath = isProd ? `/${repositoryName}` : '';

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Disable image optimization API (not needed for static exports)
  images: {
    unoptimized: true,
  },
  // Ensure static export
  trailingSlash: true,
};