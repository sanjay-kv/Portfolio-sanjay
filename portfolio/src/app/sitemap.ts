import { MetadataRoute } from 'next'
import projectData from '@/lib/projects/projectsData.json' // adjust path as necessary
import { Project } from '@/components/Projects/types'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sanjaykv.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/data-guide`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/my-story`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/1-1-mentorship`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const dynamicProjectRoutes: MetadataRoute.Sitemap = projectData.projects.map(
    (project: Project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  )

  return [...staticRoutes, ...dynamicProjectRoutes]
}
