import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Hindi lead-magnet page moved.
      {
        source: '/hi',
        destination: '/landing-turn-your-business-into-lead-magnet-hindi',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
