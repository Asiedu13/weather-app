/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',

})
const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
        port: "",
        pathname: "/weather/**",
      },
    ],
  },


  
});

module.exports = nextConfig
