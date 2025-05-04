'use client'

import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FormInput from './components/form-input'
import SubjectSelector from './components/subject-selector'
import SubmitButton from './components/submit-button'
import FormStatus from './components/form-status'
import { ContactFormData, FormErrors, SubjectOption, SubmitStatus } from './types'

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  const subjectOptions = [
    SubjectOption.GeneralInquiry,
    SubjectOption.Support,
    SubjectOption.Sales,
    SubjectOption.Partnership,
  ]

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))

      // Clear error when user types
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }))
      }
    },
    [errors]
  )

  const handleSubjectChange = useCallback((subject: string) => {
    setFormData((prev) => ({ ...prev, subject }))
  }, [])

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData.email, formData.firstName, formData.message])

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      if (!validateForm()) {
        setSubmitStatus('error')
        return
      }

      setSubmitStatus('submitting')
      setIsSubmitting(true)

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to send message');
        }

        setSubmitStatus('success')

        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: '',
        })

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } catch {
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    },
    [validateForm, formData]
  )

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg p-6"
    >
      <motion.h3
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500"
      >
        Send us a message
      </motion.h3>

      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
            placeholder="Sanjay"
          />

          <FormInput
            id="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="KV"
          />

          <FormInput
            id="email"
            label="Email"
            type="email"
            inputMode="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="youremail@gmail.com"
          />

          <FormInput
            id="phone"
            label="Phone Number"
            type="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 012 3456 789"
          />
        </div>

        <SubjectSelector
          options={subjectOptions}
          selectedSubject={formData.subject}
          onChange={handleSubjectChange}
        />

        <FormInput
          id="message"
          label="Message"
          value={formData.message}
          onChange={handleInputChange}
          error={errors.message}
          placeholder="Write your message here..."
          isTextarea
        />

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <SubmitButton isSubmitting={isSubmitting} />
        </motion.div>

        <AnimatePresence>
          {submitStatus !== 'idle' && (
            <motion.div
              key="status"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FormStatus status={submitStatus} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.div>
  )
}
