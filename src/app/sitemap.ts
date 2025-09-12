import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
 
  const baseUrl = 'https://srikandiva.id'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly', 
      priority: 1, 
    },
    {
      url: `${baseUrl}/request`,
      lastModified: new Date(),
      changeFrequency: 'yearly', 
      priority: 0.8, 
    },
  ]
}
