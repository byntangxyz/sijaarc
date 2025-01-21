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
      {
        source: "/ddk3-Java",
        destination: "https://www.canva.com/design/DAGb8zYm4b8/vR2-XEVm4vPSVy5O1QUsiA/edit?utm_content=DAGb8zYm4b8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        permanent: true,
      },
      {
        source: "/ddk3-GoLang",
        destination: "https://www.canva.com/design/DAGcOs7p5hM/vlNpOqt2T6OEWfZKa55PIQ/edit?utm_content=DAGcOs7p5hM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
