/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dgutpaazmciinuuwqtwt.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/villa-images/**",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
