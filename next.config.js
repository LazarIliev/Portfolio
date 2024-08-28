/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: 
    process.env.NODE_ENV === "production"
      ? "https://lazariliev.github.io/Portfolio"
      : undefined,
  reactStrictMode: true,
};

module.exports = nextConfig;
