// components/TestimonialCarousel.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { TestimonialCarouselProps } from './types'

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoplaySpeed = 5000,
  pauseOnHover = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const totalTestimonials = testimonials.length
  const slideRef = useRef<HTMLDivElement>(null)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  // Handle auto-rotation
  useEffect(() => {
    // Only autoplay when component is in view and not paused
    if (!inView || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials)
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [inView, isPaused, totalTestimonials, autoplaySpeed])

  const goToSlide = (index: number) => {
    setCurrentIndex((index + totalTestimonials) % totalTestimonials)
  }

  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + '...'
  }

  // Generating accessible IDs
  const carouselId = 'testimonial-carousel'
  const slidesId = 'testimonial-slides'

  return (
    <section
      aria-labelledby='testimonials-title'
      className='py-12 px-4 mb-12 sm:px-6 lg:px-8 overflow-hidden relative'
      ref={inViewRef}
    >
      <div
        className='max-w-7xl mx-auto'
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className='flex items-center justify-center mb-8'>
          <Quote className='w-8 h-8 text-foreground opacity-50 mr-3' />
          <h2
            id='testimonials-title'
            className='text-2xl sm:text-3xl font-bold text-foreground text-center'
          >
            Testimonials
          </h2>
        </div>

        {/* Carousel container */}
        <div
          id={carouselId}
          className='relative'
          aria-roledescription='carousel'
          aria-label='Customer testimonials'
        >
          <div id={slidesId} className='overflow-hidden' aria-live='polite'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <AnimatePresence mode='wait'>
                {testimonials.map((testimonial, index) => {
                  // Display current testimonial and the next 3 for desktop view
                  const isVisible =
                    (index >= currentIndex && index < currentIndex + 4) ||
                    // Handle wrapping
                    (currentIndex + 4 > totalTestimonials &&
                      index < (currentIndex + 4) % totalTestimonials)

                  if (!isVisible) return null

                  // Calculate the position for this testimonial in the current view
                  const position =
                    index >= currentIndex
                      ? index - currentIndex
                      : totalTestimonials - currentIndex + index

                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className='bg-foreground rounded-lg shadow-lg p-5 flex flex-col h-full'
                      ref={index === currentIndex ? slideRef : null}
                      role='group'
                      aria-roledescription='slide'
                      aria-label={`${testimonial.name}'s testimonial`}
                      style={{ order: position }}
                    >
                      <div className='flex items-center mb-4'>
                        {testimonial.avatarUrl ? (
                          <div className='w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0'>
                            <Image
                              src={testimonial.avatarUrl}
                              alt={`${testimonial.name}'s profile picture`}
                              width={48}
                              height={48}
                              className='w-full h-full object-cover'
                            />
                          </div>
                        ) : (
                          <div
                            className={`w-12 h-12 rounded-full mr-3 flex items-center justify-center text-foreground font-bold flex-shrink-0 ${testimonial.color || 'bg-blue-600'}`}
                          >
                            {testimonial.initials || testimonial.name.charAt(0)}
                          </div>
                        )}
                        <div className='flex-1 min-w-0'>
                          <h3 className='text-gray-900 font-semibold truncate'>
                            {testimonial.name}
                          </h3>
                          <div className='flex items-center text-yellow-400'>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'stroke-current fill-none'}`}
                                aria-hidden='true'
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className='text-gray-700 flex-grow mb-3'>
                        {truncateContent(testimonial.content)}
                      </p>

                      {/* <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
                        <button
                          onClick={() => expandContent(index)}
                          className="text-blue-600 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                          aria-label={`Read more about ${testimonial.name}'s testimonial`}
                        >
                          show more
                        </button>
                        <time dateTime={testimonial.date} className="text-xs text-gray-500">
                          {testimonial.date}
                        </time>
                      </div> */}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation controls */}
          <div className='flex justify-center mt-8 gap-3'>
            <button
              onClick={() => goToSlide(currentIndex - 1)}
              className='p-2 rounded-full bg-foreground bg-opacity-30 hover:bg-opacity-50 text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-foreground'
              aria-label='Previous testimonials'
            >
              <ChevronLeft className='w-5 h-5 text-background' />
            </button>

            {/* Pagination indicators */}
            <div className='flex items-center space-x-2 text-background'>
              {testimonials.map((_, index) => {
                // Only show pagination for mobile view or when needed
                if (totalTestimonials > 4 && index % 4 !== 0) return null

                const slideIndex = index
                return (
                  <button
                    key={index}
                    onClick={() => goToSlide(slideIndex)}
                    className={`w-2.5 h-2.5 text-background rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-foreground ${
                      Math.floor(currentIndex / 4) === Math.floor(slideIndex / 4)
                        ? 'bg-foreground'
                        : 'bg-foreground bg-opacity-50 hover:bg-opacity-70'
                    }`}
                    aria-label={`Go to testimonial group ${Math.floor(slideIndex / 4) + 1}`}
                    aria-current={
                      Math.floor(currentIndex / 4) === Math.floor(slideIndex / 4) ? 'true' : 'false'
                    }
                  />
                )
              })}
            </div>

            <button
              onClick={() => goToSlide(currentIndex + 1)}
              className='p-2 rounded-full bg-foreground bg-opacity-30 hover:bg-opacity-50 text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-foreground'
              aria-label='Next testimonials'
            >
              <ChevronRight className='w-5 h-5 text-background' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel
