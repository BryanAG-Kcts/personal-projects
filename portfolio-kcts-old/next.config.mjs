/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true
      }
    ]
  },
  async headers () {
    return [
      {
        source: '/api/cv',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf'
          }
        ]
      },
      {
        source: '/api/certificate/:certificate',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf'
          }
        ]
      }
    ]
  },
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

export default nextConfig
