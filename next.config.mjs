/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: "https://sijaarc.my.id", // Ganti dengan domain kamu
  generateRobotsTxt: true,
  darkMode: false,
  async redirects() {
    return [
      {
        source: "/ig", // Path pendek yang kamu inginkan
        destination: "https://instagram.com/sijaarc_", // Link panjang
        permanent: true, // Redirect permanen
      },
      {
        source: "/discord",
        destination: "https://discord.gg/KR7rrsFBHP",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
