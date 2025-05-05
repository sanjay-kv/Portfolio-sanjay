'use client'
import { motion } from 'framer-motion'
import { CircleStrokeTextProps } from './types'
import { cn } from '@/lib/utils'

const CircleStrokeText: React.FC<CircleStrokeTextProps> = ({
  height = 41,
  width = 245,
  textHeight,
  text,
}) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: 'easeInOut',
      },
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.span
      className='inline-flex items-center justify-center relative'
      style={{ width, height }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.svg
        width={width}
        height={height}
        viewBox='0 0 245 41'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute'
      >
        <motion.path
          d='M160.405 4.52332C112.459 -2.77055 57.5926 1.83318 37.4285 5.35532C9.74638 10.1809 0.884112 14.6737 1.38199 21.0524C2.07902 30.038 27.3713 36.0284 72.3797 38.7185C105.339 40.6876 178.03 40.7985 208.55 36.4166C240.613 31.8129 260.479 20.4422 225.378 9.18252C191.124 -1.82762 87.9135 -0.856951 61.4761 5.27212'
          fill='current'
          variants={pathVariants}
        />
        <motion.path
          d='M160.405 4.52332C112.459 -2.77055 57.5926 1.83318 37.4285 5.35532C9.74638 10.1809 0.884112 14.6737 1.38199 21.0524C2.07902 30.038 27.3713 36.0284 72.3797 38.7185C105.339 40.6876 178.03 40.7985 208.55 36.4166C240.613 31.8129 260.479 20.4422 225.378 9.18251C191.124 -1.82762 87.9135 -0.856951 61.4761 5.27212'
          stroke='#2878F2'
          variants={pathVariants}
        />
      </motion.svg>
      <motion.span
        className={cn(
          'relative text-lg sm:text-base md:text-lg font-bold px-2 text-foreground text-center z-10 whitespace-nowrap',
          textHeight
        )}
        variants={textVariants}
      >
        {text}
      </motion.span>
    </motion.span>
  )
}

export default CircleStrokeText
