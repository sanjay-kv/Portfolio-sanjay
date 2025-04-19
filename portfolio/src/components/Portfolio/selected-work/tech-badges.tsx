'use client'
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';

const TechBadge: React.FC<{ name: string }> = ({ name }) => {
  const colorMap: Record<string, string> = {
    'Next.js': 'bg-black text-white',
    'React.js': 'bg-blue-600 text-white',
    'Tailwind': 'bg-cyan-500 text-black',
    'Firebase': 'bg-amber-500 text-black',
    'Zustand': 'bg-purple-600 text-white',
    'Puppeteer': 'bg-green-500 text-black',
    'Shadcnui': 'bg-gray-700 text-white',
    'NextAuth': 'bg-emerald-500 text-black',
    'OpenAI Api': 'bg-green-600 text-white',
    'Spotify Api': 'bg-green-500 text-black',
    default: 'bg-blue-500 text-white'
  };

  const badgeColor = useMemo(() => colorMap[name] || colorMap.default, [name]);

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${badgeColor} px-3 py-1 rounded-full text-sm font-medium inline-block`}
      tabIndex={-1}
    >
      {name}
    </motion.span>
  );
}

export default memo(TechBadge);
