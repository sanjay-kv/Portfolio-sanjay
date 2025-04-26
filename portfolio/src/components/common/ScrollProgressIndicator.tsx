'use client'
import { motion, useScroll } from 'framer-motion'
const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-1 bg-primary origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollProgressIndicator
