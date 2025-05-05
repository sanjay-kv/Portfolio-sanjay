'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import UnderlineEffect from '@/components/common/UnderlineEffect'

const DataJourneyHeader: React.FC = () => {
  const { scrollY } = useScroll()

  // Create scroll-based animations
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.7])
  const headerScale = useTransform(scrollY, [0, 300], [1, 0.97])
  const gridOpacity = useTransform(scrollY, [0, 200], [1, 0.4])

  // Grid animation variants
  const gridBackgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  }

  // Text animation variants
  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  }

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.header
      className='w-full text-foreground relative'
      style={{ opacity: headerOpacity, scale: headerScale }}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className='bg-[#A4D2FB] h-2'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Grid background */}
      <motion.div
        className='bg-header absolute inset-0 w-full h-full'
        style={{
          backgroundImage: `
             linear-gradient(to right, #1c1c1c 2px, transparent 2px),
             linear-gradient(to bottom, #1c1c1c 2px, transparent 2px)
           `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          zIndex: '-1',
          opacity: gridOpacity,
        }}
        variants={gridBackgroundVariants}
      />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12'>
        <div className='flex flex-col items-center justify-center'>
          <motion.h1
            className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center'
            variants={titleVariants}
          >
            START YOUR{' '}
            <motion.span
              className='relative inline-block'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              DATA JOURNEY
              <UnderlineEffect stroke='#2878F2' className='mix-blend-difference' />
            </motion.span>
          </motion.h1>

          <motion.p
            className='text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 text-center'
            variants={subtitleVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.3,
                },
              }}
            >
              Click on the
            </motion.span>{' '}
            <motion.span
              className='font-bold'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 1,
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 200,
                },
              }}
              whileHover={{
                scale: 1.1,
                color: '#2878F2',
                transition: { duration: 0.2 },
              }}
            >
              BUTTONS
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 1.2,
                  duration: 0.3,
                },
              }}
            >
              to learn more
            </motion.span>
          </motion.p>
        </div>
      </div>
    </motion.header>
  )
}

export default DataJourneyHeader
