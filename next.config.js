/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
  env: {
    rapidAPIKey: "ef5512c70amsh613c620b4f53e50p1bdc18jsn6fe5b1b64bc3",
  }
};

module.exports = nextConfig
