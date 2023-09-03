/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  swcMinify: true,
    images: {
        unoptimized:true
    }
};

module.exports = nextConfig;

const withVideos = require("next-videos");
module.exports = withVideos();
