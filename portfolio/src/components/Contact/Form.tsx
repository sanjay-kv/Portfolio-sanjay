'use client'

import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react'
import FormInput from './components/form-input'
import SubjectSelector from './components/subject-selector'
import SubmitButton from './components/submit-button'
import FormStatus from './components/form-status'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}
enum SubjectOption {
  GeneralInquiry = 'General Inquiry',
  Support = 'Support',
  Sales = 'Sales',
  Partnership = 'Partnership',
}

type FormErrors = Partial<Record<keyof FormData, string>>

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
      if (errors[name as keyof FormData]) {
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

      if (!validateForm()) return

      setIsSubmitting(true)

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmitStatus('success')
      } catch {
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    },
    [validateForm]
  )

  return (
    <div className='bg-background text-foreground p-6'>
      <form onSubmit={handleSubmit} className='space-y-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <FormInput
            id='firstName'
            label='First Name'
            value={formData.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
            placeholder='Sanjay'
          />

          <FormInput
            id='lastName'
            label='Last Name'
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder='KV'
          />

          <FormInput
            id='email'
            label='Email'
            type='email'
            inputMode='email'
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder='youremail@gmail.com'
          />

          <FormInput
            id='phone'
            label='Phone Number'
            type='tel'
            inputMode='tel'
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='+1 012 3456 789'
          />
        </div>

        <SubjectSelector
          options={subjectOptions}
          selectedSubject={formData.subject}
          onChange={handleSubjectChange}
        />

        <FormInput
          id='message'
          label='Message'
          value={formData.message}
          onChange={handleInputChange}
          error={errors.message}
          placeholder='Write your message..'
          isTextarea
        />

        <div className='flex justify-end'>
          <SubmitButton isSubmitting={isSubmitting} />
        </div>

        <FormStatus status={submitStatus} />
      </form>
    </div>
  )
}
