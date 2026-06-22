import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The avatar is served at quality 90; Next 16 requires declaring it.
    qualities: [75, 90],
  },
};

export default nextConfig;
