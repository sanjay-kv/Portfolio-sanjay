'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import TechBadge from '@/components/common/TechBadge'

// Import project data
import projectData from '@/lib/projects/projectsData.json'
import { staggerContainer } from '@/lib/animation'
import type { Project } from './types'
import RelatedProjects from './RelatedProjects'

const MasonryGrid = dynamic(() => import('@/components/common/MasonryGrid'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading gallery...</div>
})

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ProjectPage({ slug }: { slug: string }) {
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Find the project data based on the slug
    const foundProject = projectData.projects.find(p => p.slug === slug)

    if (foundProject) {
      setProject(foundProject)
    } else {
      setError('Project not found')
    }

    setIsLoading(false)
  }, [slug])

  // Show loading state
  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center" aria-busy="true">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
      </main>
    )
  }

  // Show error state
  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error: {error || 'Project not found'}</h1>
        <Link href="/portfolio" className="flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-foreground bg-background">
      {/* Hero Section */}
      <motion.header
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/70"></div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-primary text-background text-sm font-medium rounded-full mb-4 uppercase">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">{project.brief}</p>
          </motion.div>
        </div>
      </motion.header>

      {/* Project Information */}
      <motion.main
        className="py-16 bg-gray-900"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Description */}
          <motion.section className="lg:col-span-2" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg">{project.description}</p>
            </div>
          </motion.section>

          {/* Project Details */}
          <motion.aside variants={fadeInUp}>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Project Details</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-primary mr-3 mt-1" />
                  <p>{project.info.date}</p>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-sm uppercase text-gray-400 mb-1">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.info.tools.map((tool, index) => (
                      <TechBadge key={`${index}-${tool}`} name={tool} />
                    ))}
                  </div>
                </div>

                {/* Website Link */}
                <div className="flex items-start">
                  <Globe className="w-5 h-5 text-primary mr-3 mt-1" />
                  <Link
                    href={project.info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-colors"
                    aria-label="Visit project website"
                  >
                    Visit website
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.main>

      {/* Project Gallery */}
      <motion.section
        className="py-16 bg-gray-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <MasonryGrid images={project.photos} />
        </div>
      </motion.section>

      <RelatedProjects currentCategory={project.category} currentProjectId={project.id} allProjects={projectData.projects} />

      {/* Next/Prev Project Navigation */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-end items-center gap-4">
          <Link
            href="/portfolio#latest-work"
            scroll={false}
            onClick={() => {
              setTimeout(() => {
                document.getElementById('latest-work')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-6 py-2 border border-gray-700 rounded hover:bg-gray-800 transition-colors"
          >
            Explore more projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 bg-primary text-background rounded hover:bg-primary-dark transition-colors"
          >
            Start a project
          </Link>
        </div>
      </footer>
    </div>
  )
}
