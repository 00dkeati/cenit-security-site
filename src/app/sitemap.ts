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
  
  // Auto-discover all pages
  const appDir = path.join(process.cwd(), 'src', 'app')
  const allPages = getAllPages(appDir)
  
  return allPages.map((pagePath) => ({
    url: `${baseUrl}${pagePath}`,
    lastModified: new Date(),
    changeFrequency: pagePath === '/' ? 'weekly' : 'monthly',
    priority: pagePath === '/' ? 1 : 
              pagePath.startsWith('/services/') && pagePath.split('/').length === 3 ? 0.9 :
              pagePath.startsWith('/locations/') && pagePath.split('/').length === 3 ? 0.85 :
              pagePath.startsWith('/blog/') ? 0.75 :
              pagePath.startsWith('/guides/') ? 0.8 :
              pagePath.startsWith('/commercial/') ? 0.8 :
              0.7,
  }))
}
