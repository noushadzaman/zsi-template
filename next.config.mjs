/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rpclimo.com",
      },
    ],
  },
};

export default nextConfig;
