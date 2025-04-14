// Define types for form data and errors
export type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

export type FormErrors = Partial<Record<keyof FormData, string>>
