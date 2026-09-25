import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucwo2izryqq2mgwr.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
