'use client'
import { motion } from 'framer-motion'
import { UnderlineEffectProps } from './types'
import { cn } from '@/lib/utils'

const UnderlineEffect: React.FC<UnderlineEffectProps> = ({ stroke = '#2878F2', className }) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.svg
      className={cn('w-full max-w-[712px] h-auto my-2', className)}
      viewBox='0 0 712 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid meet'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.path
        d='M1 6.54095C73.6203 4.29653 222.985 0.855092 295.164 1.00472C474.726 1.30398 574.892 1.30397 711 6.39132C547.199 8.26166 254.214 9.0098 90.4129 15.2942C212.085 13.1246 464.857 14.546 585.203 16.2668C502.714 17.3141 383.104 16.0423 294.869 23'
        fill='transparent'
        variants={pathVariants}
      />
      <motion.path
        d='M1 6.54095C73.6203 4.29653 222.985 0.855092 295.164 1.00472C474.726 1.30398 574.892 1.30397 711 6.39132C547.199 8.26166 254.214 9.0098 90.4129 15.2942C212.085 13.1246 464.857 14.546 585.203 16.2668C502.714 17.3141 383.104 16.0423 294.869 23'
        stroke={stroke}
        strokeWidth='2'
        variants={pathVariants}
      />
    </motion.svg>
  )
}

export default UnderlineEffect
