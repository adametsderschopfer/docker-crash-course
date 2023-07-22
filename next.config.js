/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
