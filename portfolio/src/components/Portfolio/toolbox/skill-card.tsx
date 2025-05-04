'use client'

import { motion } from 'framer-motion'
import { SkillCardProps } from '../types'
import { cn } from '@/lib/utils'

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const positions = [
    'left-1/3 -translate-x-1/2', // Languages
    'left-1/2 -translate-y-2 translate-x-[-15%] md:translate-x-[-40%] md:translate-y-12', // Front End
    'translate-y-[90%] left-2/5 md:left-3/5 md:translate-y-6', // Back End
  ]

  const colors = [
    'bg-blue-100', // Light blue for Languages
    'bg-purple-100', // Light purple for Front End
    'bg-yellow-100', // Light yellow for Back End
  ]

  const titleColors = [
    'text-gray-700',
    'text-gray-700',
    'text-gray-700',
  ]

  return (
    <motion.div
      className={cn('absolute w-52 md:w-80 rounded-xl shadow-lg overflow-hidden', positions[index], colors[index])}
      initial={{ opacity: 0, y: 50, rotate: index === 0 ? -5 : index === 2 ? 5 : 0 }}
      animate={{ opacity: 1, y: 0, rotate: index === 0 ? -5 : index === 2 ? 5 : 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className='p-4'>
        <h2
          className={`text-center text-xl font-semibold mb-2 ${titleColors[index]}`}
          id={`category-${category.title.toLowerCase()}`}
        >
          {category.title}
        </h2>
        <ul className='space-y-2' aria-labelledby={`category-${category.title.toLowerCase()}`}>
          {category.skills.map((skill) => (
            <li key={skill} className='border-b border-gray-300 py-2 text-gray-800'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default SkillCard
