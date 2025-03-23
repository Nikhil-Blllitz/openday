/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [],
      unoptimized: true,
    },
    env: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
  };
  
  module.exports = nextConfig;