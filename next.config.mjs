/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/preyneyv',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
