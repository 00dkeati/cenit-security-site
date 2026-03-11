import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cenitsecuritydoors.com'
  
  // Main pages
  const mainPages = [
    '',
    '/locations/marbella',
    '/locations/puerto-banus-nueva-andalucia',
    '/locations/benahavis',
    '/locations/estepona',
    '/locations/sotogrande',
    '/locations/san-pedro-de-alcantara',
    '/locations/la-cala-de-mijas',
    '/locations/costa-del-sol',
  ]

  // Sub-area pages
  const subAreaPages = [
    '/locations/marbella/golden-mile',
    '/locations/marbella/sierra-blanca',
    '/locations/marbella/los-monteros',
    '/locations/marbella/elviria',
    '/locations/benahavis/la-zagaleta',
  ]

  // Service pages
  const servicePages = [
    '/services/front-entrance',
    '/services/terrace-access',
    '/services/safe-rooms',
    '/services/biometric-access',
  ]

  const allPages = [...mainPages, ...subAreaPages, ...servicePages]

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/services/') ? 0.9 : path.split('/').length > 3 ? 0.7 : 0.8,
  }))
}
