'use client'
import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'

const TechBadge: React.FC<{ name: string }> = ({ name }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colorMap: Record<string, string> = {
    'Next.js': 'bg-black text-white',
    React: 'bg-[#58c4dc] text-black',
    Tailwind: 'bg-[#00bcff] text-black',
    Firebase: 'bg-amber-500 text-black',
    Zustand: 'bg-purple-600 text-white',
    Puppeteer: 'bg-green-500 text-black',
    Shadcnui: 'bg-gray-700 text-white',
    NextAuth: 'bg-emerald-500 text-black',
    'OpenAI Api': 'bg-green-600 text-white',
    'Spotify Api': 'bg-green-500 text-black',
    'Node.js': 'bg-[#56a645] text-white',
    MongoDB: 'bg-[#00ed64] text-black',
    default: 'bg-blue-500 text-white',
  }

  const badgeColor = useMemo(() => colorMap[name] || colorMap.default, [name, colorMap])

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${badgeColor} px-3 py-1 rounded-full text-sm font-medium inline-block`}
      tabIndex={-1}
    >
      {name}
    </motion.span>
  )
}

export default memo(TechBadge)
