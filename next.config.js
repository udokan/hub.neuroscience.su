export default {
  async redirects() {
    return [
      { source: '/checklists', destination: '/specialists', permanent: true },
      { source: '/collections', destination: '/methodology', permanent: true },
      { source: '/3efad4ba0c2d804ebe66ffd0ecc8a50c', destination: '/parents', permanent: true },
      { source: '/3efad4ba-0c2d-804e-be66-ffd0ecc8a50c', destination: '/parents', permanent: true }
    ]
  },
  staticPageGenerationTimeout: 300,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.notion.so' },
      { protocol: 'https', hostname: 'notion.so' },
      { protocol: 'https', hostname: 'app.notion.com' },
      { protocol: 'https', hostname: 'file.notion.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 's3.us-west-2.amazonaws.com' },
      { protocol: 'https', hostname: 'img.notionusercontent.com' }
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
}
