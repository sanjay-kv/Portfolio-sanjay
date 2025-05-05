// Define types for form data and errors
export type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

export type FormErrors = Partial<Record<keyof ContactFormData, string>>
export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export enum SubjectOption {
  GeneralInquiry = 'General Inquiry',
  Support = 'Support',
  Sales = 'Sales',
  Partnership = 'Partnership',
}
