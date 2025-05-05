'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Error',
  creator: 'Sanjay Viswanathan',
  applicationName: 'Sanjay Viswanathan',
  alternates: { canonical: 'https://sanjaykv.com' },
  // metadataBase: new URL('https://sanjaykv.com'), // canonical link
  description:
    'I am Sanjay K V, Data Driven Problem solver and Head of Content at recodehive.com, currently pushing limits to make Data Science Tutorials accessible to everyone.',
  referrer: 'origin-when-cross-origin',
  keywords: ['Sanjay Viswanathan', 'tech', 'influencer', 'portfolio'],
  authors: [{ name: 'Sanjay Viswanathan', url: new URL('https://github.com/sanjay-kv') }],
  icons: {
    icon: [
      { url: '/favicon.png' },
      new URL('/favicon.png', 'https://sanjaykv.com'),
      { url: '/favicon.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [
      { url: '/assets/logo/apple-touch-icon.png' },
      { url: '/assets/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sanjaykv',
    creator: '@sanjaykv',
    title: 'Error',
    description:
      'I am Sanjay K V, Data Driven Problem solver and Head of Content at recodehive.com, currently pushing limits to make Data Science Tutorials accessible to everyone.',
    images: ['https://sanjaykv.com/favicon.png'], // Must be an absolute URL
  },
  openGraph: {
    type: 'website',
    url: 'https://sanjaykv.com',
    title: 'Error',
    description:
      'I am Sanjay K V, Data Driven Problem solver and Head of Content at recodehive.com, currently pushing limits to make Data Science Tutorials accessible to everyone.',
    siteName: 'Sanjay Viswanathan',
    images: [
      {
        url: 'https://sanjaykv.com/favicon.png',
        width: 800,
        height: 600,
        alt: 'Sanjay Viswanathan',
      },
    ],
  },
  verification: {
    google: 'google',
  },
  assets: ['https://sanjaykv.com/assets'], // url for all assets
  category: 'technology',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
const Error = ({ reset }: { error: Error; reset: () => void }) => {
  // For the interactive particle effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Generate random particles for the background effect
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; speed: number; color: string }>
  >([])

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Generate random particles
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 1,
      speed: Math.random() * 2 + 0.5,
      color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
    }))

    setParticles(newParticles)

    // Mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Window resize event listener
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set up event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Animate particles floating effect
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          y: particle.y - particle.speed > 0 ? particle.y - particle.speed : dimensions.height,
          x: particle.x + Math.sin(particle.y / 100) * 0.5,
        }))
      )

      requestAnimationFrame(animateParticles)
    }

    const animationFrame = requestAnimationFrame(animateParticles)
    return () => cancelAnimationFrame(animationFrame)
  }, [dimensions.height])

  // Glitch animation variants
  const glitchTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        yoyo: Infinity,
        repeat: 5,
        repeatType: 'reverse' as const,
        repeatDelay: 10,
      },
    }),
  }

  // Unique error messages that appear over time
  const [errorMessages] = useState([
    'Reality has glitched...',
    'The digital realm is rebuilding...',
    'Quantum error detected...',
    "We've hit a dimensional snag...",
    'The code matrix is recalibrating...',
  ])

  // Cycle through error messages
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % errorMessages.length)
    }, 3000)

    return () => clearInterval(messageInterval)
  }, [errorMessages.length])

  return (
    <div className='relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-amber-900 flex flex-col items-center justify-center text-foreground'>
      {/* Floating particles background */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className='absolute rounded-full pointer-events-none'
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
        />
      ))}

      {/* Glitchy circuit paths */}
      <svg
        className='absolute w-full h-full opacity-10 pointer-events-none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          d={`M0,${dimensions.height / 2} Q${dimensions.width / 4},${dimensions.height / 2 - 100} ${dimensions.width / 2},${dimensions.height / 2} T${dimensions.width},${dimensions.height / 2}`}
          stroke='cyan'
          strokeWidth='0.5'
          fill='transparent'
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.path
          d={`M0,${dimensions.height / 2 + 50} Q${dimensions.width / 3},${dimensions.height / 2 + 150} ${dimensions.width / 2},${dimensions.height / 2 + 50} T${dimensions.width},${dimensions.height / 2 + 50}`}
          stroke='magenta'
          strokeWidth='0.5'
          fill='transparent'
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
        />
      </svg>

      {/* Interactive distortion effect */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background: `radial-gradient(circle ${100 + Math.sin(Date.now() / 1000) * 50}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(209, 206, 212, 0.2), transparent)`,
          transition: 'background 0.1s ease-out',
        }}
      />

      {/* Central error container */}
      <motion.div
        className='relative z-10 flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-sm bg-black/30 rounded-xl border border-foreground/10 shadow-xl max-w-md w-full mx-4'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Error indicator */}
        <motion.div
          className='w-24 h-24 mb-8 rounded-full relative'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <motion.div
            className='absolute inset-0 rounded-full border-4 border-red-500'
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(220, 38, 38, 0)',
                '0 0 0 10px rgba(220, 38, 38, 0.2)',
                '0 0 0 20px rgba(220, 38, 38, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <motion.svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12 text-red-500'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx='12' cy='12' r='10' />
              <line x1='12' y1='8' x2='12' y2='12' />
              <line x1='12' y1='16' x2='12.01' y2='16' />
            </motion.svg>
          </div>
        </motion.div>

        {/* Error code */}
        <motion.div
          className='text-xs font-mono mb-6 tracking-wider bg-black/30 px-4 py-1 rounded-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ERROR CODE:{' '}
          {Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, '0')}
        </motion.div>

        {/* Main error message */}
        <motion.h1
          className='text-2xl md:text-3xl text-center font-bold mb-1'
          variants={glitchTextVariants}
          initial='hidden'
          animate='visible'
        >
          {Array.from('Something went wrong!').map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              custom={i}
              className='inline-block'
              style={{
                color: i % 3 === 0 ? '#f0f' : i % 3 === 1 ? '#0ff' : '#fff',
                textShadow:
                  i % 3 === 0 ? '0 0 5px #f0f' : i % 3 === 1 ? '0 0 5px #0ff' : '0 0 5px #fff',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Dynamic error message */}
        <motion.p
          className='text-center text-gray-300 mb-8 h-6'
          key={currentMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {errorMessages[currentMessage]}
        </motion.p>

        {/* Reset button */}
        <motion.button
          onClick={reset}
          className='relative px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md font-medium text-foreground shadow-lg group overflow-hidden'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className='relative z-10'>Try again</span>
          <motion.span
            className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity'
            initial={{ x: '-100%' }}
            whileHover={{ x: '0%' }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
          <motion.span
            className='absolute inset-0 opacity-50'
            style={{
              background: `radial-gradient(circle 100px at ${mousePosition.x - 200}px ${mousePosition.y - 200}px, rgba(255, 255, 255, 0.2), transparent)`,
            }}
          />
        </motion.button>
      </motion.div>

      {/* Binary data stream effect */}
      <div className='absolute bottom-0 left-0 right-0 overflow-hidden h-20 opacity-20 flex justify-center'>
        <motion.pre
          className='text-xs font-mono tracking-tighter'
          initial={{ y: 100 }}
          animate={{ y: -1000 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 50 }, () =>
            Array.from({ length: 40 }, () => (Math.random() > 0.5 ? '1' : '0')).join('')
          ).join('\n')}
        </motion.pre>
      </div>
    </div>
  )
}

export default Error
