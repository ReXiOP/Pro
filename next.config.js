const dotenv = require('dotenv')
dotenv.config()

const nextConfig = {
  reactStrictMode: true, // enabled react-strict mode
  distDir: 'dist',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.wapka.org',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;

