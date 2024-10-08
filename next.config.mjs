/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '', // Optional, can be omitted if not needed
        pathname: '/**', // Matches any path on the hostname
      },
    ],
  },
};

export default nextConfig;
