/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  staticPageGenerationTimeout: 2000,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
