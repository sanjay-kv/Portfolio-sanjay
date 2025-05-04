'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import UnderlineEffect from '@/components/common/UnderlineEffect'
import TestimonialCarousel from '@/components/Testimonial'
import { testimonials } from '@/lib/testimonialData'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)
  const imageGridRef = useRef(null)
  const testimonialRef = useRef(null)

  // Parallax effects for different sections
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: imageGridScrollProgress } = useScroll({
    target: imageGridRef,
    offset: ['start end', 'end start'],
  })

  // Transform values for parallax effects
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, -50])
  const imageScale = useTransform(imageGridScrollProgress, [0, 0.5, 1], [0.95, 1, 1.05])

  return (
    <motion.div
      className='min-h-screen w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Top blue line with animation */}
      <motion.div
        className='bg-[#A4D2FB] h-2'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      />

      {/* Header section with fade-in */}
      <motion.div
        className='bg-header flex items-center justify-end px-4 sm:px-8 md:px-16 py-5 flex-wrap gap-4'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.button className='btn' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          YOUR OPEN-SOURCE GUIDE
        </motion.button>
      </motion.div>

      {/* Main content */}
      <div className='w-full flex bg-background flex-col items-center justify-center text-foreground'>
        {/* Hero headline with parallax */}
        <motion.div
          ref={heroRef}
          style={{ y: heroY }}
          className='flex items-center justify-center flex-col text-2xl sm:text-3xl md:text-4xl font-black tracking-widest pt-10 px-4 text-center'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            GET YOUR NEXT OPEN-SOURCE CONTRIBUTION FASTER.
          </motion.div>
          <UnderlineEffect stroke={'#243CE6'} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            MUCH FASTER.
          </motion.div>
        </motion.div>

        {/* Features list with scroll reveal */}
        <motion.div
          ref={featuresRef}
          className='mt-10 px-4 text-center text-sm sm:text-base'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          <p className='max-w-4xl mx-auto'>
            1-1 MENTORSHIP, ULTIMATE DATA PORTFOLIO, ULTIMATE DATA ROADMAP, ULTIMATE PROJECT
            BUILDER, DATA STORYTELLING GUIDE, JOB SEEKER ACADEMY, MOST POPULAR EXCEL FUNCTIONS &
            FORMULAS, ULTIMATE RESUME TEMPLATE, AI JOB QUEST...
          </p>
        </motion.div>

        {/* CTA section with gradient background and hover effects */}
        <motion.div
          ref={ctaRef}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 w-full max-w-[1223px] py-24 my-6 px-4 bg-radial'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className='btn'
            whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            Kick start your open-source
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={'/1-1-mentorship'} className='btn'>
              1:1 MENTORSHIP
            </Link>
          </motion.div>
        </motion.div>

        {/* Image grid with parallax and scale effects */}
        <motion.div
          ref={imageGridRef}
          style={{ scale: imageScale }}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full px-4 md:px-8 lg:px-16 max-w-7xl'
        >
          <motion.div
            className='w-full pt-4 md:pt-10'
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className='w-full h-auto filter drop-shadow-lg'
                src='/assets/sanjay-viswanathan-hero.png'
                width={500}
                height={500}
                alt='Sanjay Viswanathan hero image'
                priority
                draggable='false'
              />
            </motion.div>
          </motion.div>
          <motion.div
            className='w-full pt-4 md:pt-10'
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className='w-full h-auto filter drop-shadow-lg'
                src='/assets/sanjay-viswanathan-skills.png'
                width={500}
                height={500}
                alt='Sanjay Viswanathan skills showcase'
                draggable='false'
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Testimonial heading with reveal animation */}
        <motion.div
          ref={testimonialRef}
          className='flex text-3xl sm:text-4xl md:text-5xl mt-10 mb-6 font-black items-center justify-center w-full px-4 py-16 bg-radial text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          WHAT OTHERS HAVE SAID
        </motion.div>

        {/* Testimonial component with animation wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TestimonialCarousel testimonials={testimonials} />
        </motion.div>
      </div>
    </motion.div>
  )
}
