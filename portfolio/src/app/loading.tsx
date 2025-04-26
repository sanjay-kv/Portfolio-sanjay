'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  const dotsVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        repeat: Infinity,
      },
    },
  }

  const dotVariants = {
    initial: { y: 0, opacity: 0.2 },
    animate: {
      y: [0, -15, 0],
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const pulseVariants = {
    initial: { scale: 0.95, opacity: 0.3 },
    animate: {
      scale: [0.95, 1.05, 0.95],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const ringVariants = {
    initial: { rotate: 0, opacity: 0.7 },
    animate: {
      rotate: 360,
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white'>
      <div className='relative flex flex-col items-center'>
        <motion.div
          className='absolute w-64 h-64 bg-blue-500/10 rounded-full'
          variants={pulseVariants}
          initial='initial'
          animate='animate'
        />

        <motion.div
          className='absolute w-48 h-48 border-4 border-blue-400/30 border-t-blue-500 border-l-blue-500 rounded-full'
          variants={ringVariants}
          initial='initial'
          animate='animate'
        />

        <motion.div
          className='mt-16 text-xl font-medium text-blue-100'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Loading
          <motion.span
            className='inline-flex ml-1'
            variants={dotsVariants}
            initial='initial'
            animate='animate'
          >
            {[0, 1, 2].map((index) => (
              <motion.span key={index} variants={dotVariants} className='mx-0.5 text-blue-300'>
                .
              </motion.span>
            ))}
          </motion.span>
        </motion.div>

        <motion.p
          className='mt-3 text-sm text-blue-200/70'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Preparing your data experience
        </motion.p>
      </div>
    </div>
  )
}

export default Loading
