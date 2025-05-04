import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/api/',
          '/_next/',
          '/404',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/assets/'],
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
    ],
    sitemap: 'https://sanjaykv.com/sitemap.xml',
    host: 'https://sanjaykv.com',
  }
}
