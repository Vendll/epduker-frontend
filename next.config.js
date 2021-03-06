/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "picsum.photos",
      "tailwindui.com",
      "images.unsplash.com",
      "epduker.headwaymakers.hu",
    ],
  },
  nextConfig,
};
