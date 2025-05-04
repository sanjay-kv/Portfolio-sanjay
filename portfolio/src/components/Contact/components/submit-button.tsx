import { SubmitButtonProps } from './types'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
      className={`flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600
        text-white py-3 px-8 cursor-pointer rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-300
        ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      {isSubmitting ? (
        <motion.span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Processing...
          </motion.span>
        </motion.span>
      ) : (
        <motion.div className="flex items-center">
          <motion.span className="mr-2">Send Message</motion.span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          >
            <Send className="w-4 h-4" />
          </motion.div>
        </motion.div>
      )}
    </motion.button>
  )
}
