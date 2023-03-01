/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["api.noroff.dev"],
  },
};

module.exports = nextConfig;
