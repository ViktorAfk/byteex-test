/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'magical-growth-da5c53b87d.media.strapiapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
