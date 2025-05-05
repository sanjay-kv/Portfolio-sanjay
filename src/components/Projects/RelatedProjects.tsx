import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { RelatedProjectsProps } from './types'

const RelatedProjects: React.FC<RelatedProjectsProps> = ({
  currentProjectId,
  currentCategory,
  allProjects,
}) => {
  const relatedProjects = (() => {
    const sameCategory = allProjects.filter(
      (project) => project.category === currentCategory && project.id !== currentProjectId
    )

    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3)
    }

    const otherProjects = allProjects.filter(
      (project) => project.category !== currentCategory && project.id !== currentProjectId
    )

    return [...sameCategory, ...otherProjects].slice(0, 3)
  })()

  if (!relatedProjects.length) return null
  return (
    <section className='container mx-auto px-8 py-16' aria-labelledby='related-projects-heading'>
      <h2 className='text-3xl font-bold mb-8'>You might also like</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {relatedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className='group rounded-lg overflow-hidden bg-gray-800 border border-gray-700 hover:border-primary transition-all duration-300'
          >
            <Link
              href={`/projects/${project.slug}`}
              className='block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded'
              aria-label={`View project: ${project.title}`}
            >
              <div className='relative h-48 w-full'>
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  priority={index === 0}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                  <span className='text-foreground text-sm font-medium'>{project.category}</span>
                </div>
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-medium group-hover:text-primary transition-colors duration-300'>
                  {project.title}
                </h3>
                <p className='text-sm text-gray-400 mt-2 line-clamp-2'>{project.brief}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default RelatedProjects
