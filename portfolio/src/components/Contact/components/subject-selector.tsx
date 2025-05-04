import { SubjectSelectorProps } from './types'
import { motion } from 'framer-motion'

export default function SubjectSelector({
  options,
  selectedSubject,
  onChange,
}: SubjectSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <motion.p
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-sm font-medium text-foreground mb-3"
      >
        Select Subject
      </motion.p>
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {options.map((option, index) => (
          <motion.button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center rounded-full py-2 px-4 text-sm ${
              selectedSubject === option
                ? 'bg-blue-500 text-foreground shadow-lg shadow-blue-500/30'
                : 'bg-transparent text-gray-300 hover:bg-gray-800'
            } transition-colors duration-300`}
          >
            <motion.span
              animate={selectedSubject === option ? {
                scale: [1, 1.2, 1],
                backgroundColor: ["#3B82F6", "#60A5FA", "#3B82F6"]
              } : {}}
              transition={{ duration: 0.5 }}
              className={`w-3 h-3 rounded-full mr-2 ${selectedSubject === option ? 'bg-white' : 'bg-gray-500'}`}
            />
            {option}

            {selectedSubject === option && (
              <motion.span
                layoutId="activeSubject"
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}
