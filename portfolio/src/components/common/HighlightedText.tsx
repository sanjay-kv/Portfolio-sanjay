'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type HighlightedTextProps = {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

const HighlightedText = ({ text, className, tag = 'h3' }: HighlightedTextProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const backgroundVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.span
      className='relative inline-block'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.6 }}
      variants={containerVariants}
    >
      <motion.div
        className='absolute inset-0 bg-[#2878F2] z-0 origin-left'
        variants={backgroundVariants}
      />
      <Tag className={cn('text-xl font-bold inline py-1 relative z-10', className)}>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.03,
              duration: 0.2,
            }}
          >
            {char}
          </motion.span>
        ))}
      </Tag>
    </motion.span>
  )
}

export default HighlightedText
