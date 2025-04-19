'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { LatestWorkSectionProps, TabId } from './types'
import TabsNavigation from './tabs-navigation'
import { tabs } from '@/lib/projectsData'

const SkeletonCard = () => <div className='animate-pulse rounded-lg bg-gray-800 h-[280px] w-full' />

const LatestWorkSection: React.FC<LatestWorkSectionProps> = ({ activeTab, filteredProjects }) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  // Click handler for tabs
  const handleTabClick = (tabId: TabId) => {
    startTransition(() => {
      const params = new URLSearchParams()
      if (tabId !== 'all') {
        params.set('tab', tabId)
      }
      router.replace(`?${params.toString()}`, { scroll: false })
    })
  }

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        {/* Portfolio Header */}
        <div className='text-center mb-12'>
          <p className='text-primary uppercase tracking-wider mb-2'>PORTFOLIO</p>
          <h2 className='text-4xl md:text-5xl font-bold'>LATEST WORKS</h2>
        </div>

        {/* Tabs */}
        <div className='w-full flex justify-center'>
          <TabsNavigation tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            role='tabpanel'
            id={`panel-${activeTab}`}
          >
            {isPending
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              : filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='relative group'
                  >
                    <Link href={project.link}>
                      <div className='border-2 border-gray-800 rounded-lg overflow-hidden bg-gray-900 transition-all duration-300 hover:border-primary h-full flex flex-col'>
                        <div className='relative w-full h-48 overflow-hidden'>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-500'
                            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                          />
                        </div>
                        <div className='p-4'>
                          <h3 className='text-lg font-medium'>{project.title}</h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default LatestWorkSection
