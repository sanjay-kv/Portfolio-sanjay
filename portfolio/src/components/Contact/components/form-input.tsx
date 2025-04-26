import { FormInputProps } from './types'
import { motion } from 'framer-motion'

export default function FormInput({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  inputMode,
  placeholder,
  isTextarea = false,
}: FormInputProps) {
  const commonProps = {
    id,
    name: id,
    value,
    onChange,
    className: `w-full bg-transparent border-b ${error ? 'border-red-400' : 'border-gray-600'
      } focus:border-[#1DA1F2] outline-none py-2 px-0 transition-colors`,
    placeholder,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative mb-6"
    >
      <motion.label htmlFor={id}
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className='block text-sm font-medium text-foreground mb-2'
      >
        {label}
      </motion.label>

      {isTextarea ? (
        <motion.textarea
          {...commonProps}
          rows={1}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`${commonProps.className} resize-none min-h-[55px]`}
        />
      ) : (
        <motion.input {...commonProps} type={type} inputMode={inputMode} whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }} />
      )}

      {error && <motion.p initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className='mt-1 text-sm text-red-500'>{error}</motion.p>
      }
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
        initial={{ width: 0 }}
        whileInView={{ width: error ? "0%" : "100%" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.div>
  )
}
