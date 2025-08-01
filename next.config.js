/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Enable static exports for deployment
  output: 'export',
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 