import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/2025',
  assetPrefix: '/2025',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
