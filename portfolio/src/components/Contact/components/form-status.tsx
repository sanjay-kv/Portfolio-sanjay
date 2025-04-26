import { FormStatusProps } from './types'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function FormStatus({ status }: FormStatusProps) {
  if (status === 'idle') return null

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="bg-green-600/20 border border-green-500 text-green-300 px-6 py-4 rounded-lg flex items-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Your message has been sent successfully. We&apos;ll get back to you soon!
        </motion.p>
      </motion.div>
    )
  }

  if (status === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="bg-red-600/20 border border-red-500 text-red-300 px-6 py-4 rounded-lg flex items-center"
      >
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <AlertCircle className="w-6 h-6 mr-3 text-red-400" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          There was an error sending your message. Please try again later.
        </motion.p>
      </motion.div>
    )
  }

  return null
}
