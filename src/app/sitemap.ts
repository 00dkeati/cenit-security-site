import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

function getAllPages(dir: string, basePath: string = ''): string[] {
  const pages: string[] = []
  
  try {
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        // Skip special Next.js directories
        if (!item.startsWith('_') && !item.startsWith('.')) {
          pages.push(...getAllPages(fullPath, `${basePath}/${item}`))
        }
      } else if (item === 'page.tsx') {
        pages.push(basePath || '/')
      }
    }
  } catch (e) {
    // Fallback for build time
  }
  
  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cenitsecuritydoors.com'
  
  // Static list of all pages (generated at build time)
  const allPages = [
    '/',
    // Main locations
    '/locations/marbella',
    '/locations/puerto-banus-nueva-andalucia',
    '/locations/benahavis',
    '/locations/estepona',
    '/locations/sotogrande',
    '/locations/san-pedro-de-alcantara',
    '/locations/la-cala-de-mijas',
    '/locations/costa-del-sol',
    // Marbella sub-areas
    '/locations/marbella/golden-mile',
    '/locations/marbella/sierra-blanca',
    '/locations/marbella/los-monteros',
    '/locations/marbella/elviria',
    '/locations/marbella/las-chapas',
    '/locations/marbella/nagueles',
    '/locations/marbella/cascada-de-camojan',
    '/locations/marbella/rio-real',
    '/locations/marbella/bahia-de-marbella',
    '/locations/marbella/marbella-hill-club',
    '/locations/marbella/altos-de-puente-romano',
    '/locations/marbella/monte-paraiso',
    // Puerto Banus sub-areas
    '/locations/puerto-banus-nueva-andalucia/puerto-banus-marina',
    '/locations/puerto-banus-nueva-andalucia/nueva-andalucia',
    '/locations/puerto-banus-nueva-andalucia/las-brisas',
    '/locations/puerto-banus-nueva-andalucia/los-naranjos',
    '/locations/puerto-banus-nueva-andalucia/la-cerquilla',
    '/locations/puerto-banus-nueva-andalucia/aloha',
    '/locations/puerto-banus-nueva-andalucia/el-herrojo',
    '/locations/puerto-banus-nueva-andalucia/la-quinta',
    // Benahavis sub-areas
    '/locations/benahavis/la-zagaleta',
    '/locations/benahavis/el-madroñal',
    '/locations/benahavis/los-arqueros',
    '/locations/benahavis/la-quinta-benahavis',
    '/locations/benahavis/monte-mayor',
    '/locations/benahavis/los-flamingos',
    '/locations/benahavis/la-reserva-de-alcuzcuz',
    '/locations/benahavis/marbella-club-golf',
    // Estepona sub-areas
    '/locations/estepona/el-paraiso',
    '/locations/estepona/cancelada',
    '/locations/estepona/valle-romano',
    '/locations/estepona/selwo',
    '/locations/estepona/new-golden-mile',
    '/locations/estepona/estepona-golf',
    '/locations/estepona/el-padron',
    '/locations/estepona/bahia-dorada',
    // Sotogrande sub-areas
    '/locations/sotogrande/sotogrande-alto',
    '/locations/sotogrande/sotogrande-costa',
    '/locations/sotogrande/la-reserva-sotogrande',
    '/locations/sotogrande/alcaidesa',
    '/locations/sotogrande/sotogrande-marina',
    '/locations/sotogrande/los-altos-de-valderrama',
    '/locations/sotogrande/kings-and-queens',
    // San Pedro sub-areas
    '/locations/san-pedro-de-alcantara/guadalmina',
    '/locations/san-pedro-de-alcantara/guadalmina-alta',
    '/locations/san-pedro-de-alcantara/guadalmina-baja',
    '/locations/san-pedro-de-alcantara/cortijo-blanco',
    '/locations/san-pedro-de-alcantara/linda-vista',
    '/locations/san-pedro-de-alcantara/nueva-alcantara',
    // La Cala sub-areas
    '/locations/la-cala-de-mijas/la-cala-golf',
    '/locations/la-cala-de-mijas/mijas-costa',
    '/locations/la-cala-de-mijas/riviera-del-sol',
    '/locations/la-cala-de-mijas/calahonda',
    '/locations/la-cala-de-mijas/el-faro',
    // Costa del Sol sub-areas
    '/locations/costa-del-sol/benalmadena',
    '/locations/costa-del-sol/fuengirola',
    '/locations/costa-del-sol/mijas-pueblo',
    '/locations/costa-del-sol/torremolinos',
    '/locations/costa-del-sol/manilva',
    '/locations/costa-del-sol/casares',
    // Service pages
    '/services/front-entrance',
    '/services/terrace-access',
    '/services/safe-rooms',
    '/services/biometric-access',
    // Service + location combos
    '/services/front-entrance/marbella',
    '/services/front-entrance/puerto-banus-nueva-andalucia',
    '/services/front-entrance/benahavis',
    '/services/front-entrance/estepona',
    '/services/front-entrance/sotogrande',
    '/services/front-entrance/san-pedro-de-alcantara',
    '/services/front-entrance/la-cala-de-mijas',
    '/services/front-entrance/costa-del-sol',
    '/services/terrace-access/marbella',
    '/services/terrace-access/puerto-banus-nueva-andalucia',
    '/services/terrace-access/benahavis',
    '/services/terrace-access/estepona',
    '/services/terrace-access/sotogrande',
    '/services/terrace-access/san-pedro-de-alcantara',
    '/services/terrace-access/la-cala-de-mijas',
    '/services/terrace-access/costa-del-sol',
    '/services/safe-rooms/marbella',
    '/services/safe-rooms/puerto-banus-nueva-andalucia',
    '/services/safe-rooms/benahavis',
    '/services/safe-rooms/estepona',
    '/services/safe-rooms/sotogrande',
    '/services/safe-rooms/san-pedro-de-alcantara',
    '/services/safe-rooms/la-cala-de-mijas',
    '/services/safe-rooms/costa-del-sol',
    '/services/biometric-access/marbella',
    '/services/biometric-access/puerto-banus-nueva-andalucia',
    '/services/biometric-access/benahavis',
    '/services/biometric-access/estepona',
    '/services/biometric-access/sotogrande',
    '/services/biometric-access/san-pedro-de-alcantara',
    '/services/biometric-access/la-cala-de-mijas',
    '/services/biometric-access/costa-del-sol',
    // Service + sub-area combos (key areas)
    '/services/front-entrance/marbella/golden-mile',
    '/services/front-entrance/marbella/sierra-blanca',
    '/services/front-entrance/marbella/los-monteros',
    '/services/front-entrance/benahavis/la-zagaleta',
    '/services/front-entrance/puerto-banus-nueva-andalucia/puerto-banus-marina',
    '/services/safe-rooms/marbella/golden-mile',
    '/services/safe-rooms/marbella/sierra-blanca',
    '/services/safe-rooms/benahavis/la-zagaleta',
    '/services/safe-rooms/puerto-banus-nueva-andalucia/puerto-banus-marina',
    '/services/biometric-access/marbella/golden-mile',
    '/services/biometric-access/benahavis/la-zagaleta',
    // Property types
    '/property-types/villas/marbella',
    '/property-types/villas/puerto-banus-nueva-andalucia',
    '/property-types/villas/benahavis',
    '/property-types/villas/estepona',
    '/property-types/villas/sotogrande',
    '/property-types/apartments/marbella',
    '/property-types/apartments/puerto-banus-nueva-andalucia',
    '/property-types/apartments/benahavis',
    '/property-types/apartments/estepona',
    '/property-types/apartments/sotogrande',
    '/property-types/townhouses/marbella',
    '/property-types/townhouses/puerto-banus-nueva-andalucia',
    '/property-types/townhouses/benahavis',
    '/property-types/townhouses/estepona',
    '/property-types/townhouses/sotogrande',
    '/property-types/new-builds/marbella',
    '/property-types/new-builds/puerto-banus-nueva-andalucia',
    '/property-types/new-builds/benahavis',
    '/property-types/new-builds/estepona',
    '/property-types/new-builds/sotogrande',
    '/property-types/renovations/marbella',
    '/property-types/renovations/puerto-banus-nueva-andalucia',
    '/property-types/renovations/benahavis',
    '/property-types/renovations/estepona',
    '/property-types/renovations/sotogrande',
  ]

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 
              path.startsWith('/services/') && !path.includes('/', 10) ? 0.9 :
              path.startsWith('/locations/') && path.split('/').length === 3 ? 0.85 :
              0.7,
  }))
}
