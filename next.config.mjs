/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'niccoders-production.up.railway.app',
          },
          {
            type: 'host',
            value: 'www.niccoders.com',
          },
        ],
        destination: 'https://niccoders.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

